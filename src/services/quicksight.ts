import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface QuickSight_20180401 {
  batchCreateTopicReviewedAnswer(
    input: BatchCreateTopicReviewedAnswerRequest,
  ): Effect.Effect<
    BatchCreateTopicReviewedAnswerResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  batchDeleteTopicReviewedAnswer(
    input: BatchDeleteTopicReviewedAnswerRequest,
  ): Effect.Effect<
    BatchDeleteTopicReviewedAnswerResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  cancelIngestion(
    input: CancelIngestionRequest,
  ): Effect.Effect<
    CancelIngestionResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createAccountCustomization(
    input: CreateAccountCustomizationRequest,
  ): Effect.Effect<
    CreateAccountCustomizationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  createAccountSubscription(
    input: CreateAccountSubscriptionRequest,
  ): Effect.Effect<
    CreateAccountSubscriptionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceExistsException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  createAnalysis(
    input: CreateAnalysisRequest,
  ): Effect.Effect<
    CreateAnalysisResponse,
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  createBrand(
    input: CreateBrandRequest,
  ): Effect.Effect<
    CreateBrandResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createCustomPermissions(
    input: CreateCustomPermissionsRequest,
  ): Effect.Effect<
    CreateCustomPermissionsResponse,
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
    | CommonAwsError
  >;
  createDashboard(
    input: CreateDashboardRequest,
  ): Effect.Effect<
    CreateDashboardResponse,
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  createDataSet(
    input: CreateDataSetRequest,
  ): Effect.Effect<
    CreateDataSetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  createDataSource(
    input: CreateDataSourceRequest,
  ): Effect.Effect<
    CreateDataSourceResponse,
    | AccessDeniedException
    | ConflictException
    | CustomerManagedKeyUnavailableException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createFolder(
    input: CreateFolderRequest,
  ): Effect.Effect<
    CreateFolderResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  createFolderMembership(
    input: CreateFolderMembershipRequest,
  ): Effect.Effect<
    CreateFolderMembershipResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  createGroup(
    input: CreateGroupRequest,
  ): Effect.Effect<
    CreateGroupResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceExistsException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  createGroupMembership(
    input: CreateGroupMembershipRequest,
  ): Effect.Effect<
    CreateGroupMembershipResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  createIAMPolicyAssignment(
    input: CreateIAMPolicyAssignmentRequest,
  ): Effect.Effect<
    CreateIAMPolicyAssignmentResponse,
    | AccessDeniedException
    | ConcurrentUpdatingException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createIngestion(
    input: CreateIngestionRequest,
  ): Effect.Effect<
    CreateIngestionResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createNamespace(
    input: CreateNamespaceRequest,
  ): Effect.Effect<
    CreateNamespaceResponse,
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
    | CommonAwsError
  >;
  createRefreshSchedule(
    input: CreateRefreshScheduleRequest,
  ): Effect.Effect<
    CreateRefreshScheduleResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createRoleMembership(
    input: CreateRoleMembershipRequest,
  ): Effect.Effect<
    CreateRoleMembershipResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  createTemplate(
    input: CreateTemplateRequest,
  ): Effect.Effect<
    CreateTemplateResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  createTemplateAlias(
    input: CreateTemplateAliasRequest,
  ): Effect.Effect<
    CreateTemplateAliasResponse,
    | ConflictException
    | InternalFailureException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  createTheme(
    input: CreateThemeRequest,
  ): Effect.Effect<
    CreateThemeResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  createThemeAlias(
    input: CreateThemeAliasRequest,
  ): Effect.Effect<
    CreateThemeAliasResponse,
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  createTopic(
    input: CreateTopicRequest,
  ): Effect.Effect<
    CreateTopicResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createTopicRefreshSchedule(
    input: CreateTopicRefreshScheduleRequest,
  ): Effect.Effect<
    CreateTopicRefreshScheduleResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createVPCConnection(
    input: CreateVPCConnectionRequest,
  ): Effect.Effect<
    CreateVPCConnectionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  deleteAccountCustomization(
    input: DeleteAccountCustomizationRequest,
  ): Effect.Effect<
    DeleteAccountCustomizationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteAccountSubscription(
    input: DeleteAccountSubscriptionRequest,
  ): Effect.Effect<
    DeleteAccountSubscriptionResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteAnalysis(
    input: DeleteAnalysisRequest,
  ): Effect.Effect<
    DeleteAnalysisResponse,
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  deleteBrand(
    input: DeleteBrandRequest,
  ): Effect.Effect<
    DeleteBrandResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteBrandAssignment(
    input: DeleteBrandAssignmentRequest,
  ): Effect.Effect<
    DeleteBrandAssignmentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteCustomPermissions(
    input: DeleteCustomPermissionsRequest,
  ): Effect.Effect<
    DeleteCustomPermissionsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceExistsException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteDashboard(
    input: DeleteDashboardRequest,
  ): Effect.Effect<
    DeleteDashboardResponse,
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  deleteDataSet(
    input: DeleteDataSetRequest,
  ): Effect.Effect<
    DeleteDataSetResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteDataSetRefreshProperties(
    input: DeleteDataSetRefreshPropertiesRequest,
  ): Effect.Effect<
    DeleteDataSetRefreshPropertiesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteDataSource(
    input: DeleteDataSourceRequest,
  ): Effect.Effect<
    DeleteDataSourceResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteDefaultQBusinessApplication(
    input: DeleteDefaultQBusinessApplicationRequest,
  ): Effect.Effect<
    DeleteDefaultQBusinessApplicationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteFolder(
    input: DeleteFolderRequest,
  ): Effect.Effect<
    DeleteFolderResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  deleteFolderMembership(
    input: DeleteFolderMembershipRequest,
  ): Effect.Effect<
    DeleteFolderMembershipResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  deleteGroup(
    input: DeleteGroupRequest,
  ): Effect.Effect<
    DeleteGroupResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteGroupMembership(
    input: DeleteGroupMembershipRequest,
  ): Effect.Effect<
    DeleteGroupMembershipResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteIAMPolicyAssignment(
    input: DeleteIAMPolicyAssignmentRequest,
  ): Effect.Effect<
    DeleteIAMPolicyAssignmentResponse,
    | AccessDeniedException
    | ConcurrentUpdatingException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteIdentityPropagationConfig(
    input: DeleteIdentityPropagationConfigRequest,
  ): Effect.Effect<
    DeleteIdentityPropagationConfigResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteNamespace(
    input: DeleteNamespaceRequest,
  ): Effect.Effect<
    DeleteNamespaceResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteRefreshSchedule(
    input: DeleteRefreshScheduleRequest,
  ): Effect.Effect<
    DeleteRefreshScheduleResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteRoleCustomPermission(
    input: DeleteRoleCustomPermissionRequest,
  ): Effect.Effect<
    DeleteRoleCustomPermissionResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteRoleMembership(
    input: DeleteRoleMembershipRequest,
  ): Effect.Effect<
    DeleteRoleMembershipResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteTemplate(
    input: DeleteTemplateRequest,
  ): Effect.Effect<
    DeleteTemplateResponse,
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  deleteTemplateAlias(
    input: DeleteTemplateAliasRequest,
  ): Effect.Effect<
    DeleteTemplateAliasResponse,
    | ConflictException
    | InternalFailureException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  deleteTheme(
    input: DeleteThemeRequest,
  ): Effect.Effect<
    DeleteThemeResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  deleteThemeAlias(
    input: DeleteThemeAliasRequest,
  ): Effect.Effect<
    DeleteThemeAliasResponse,
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  deleteTopic(
    input: DeleteTopicRequest,
  ): Effect.Effect<
    DeleteTopicResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteTopicRefreshSchedule(
    input: DeleteTopicRefreshScheduleRequest,
  ): Effect.Effect<
    DeleteTopicRefreshScheduleResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteUser(
    input: DeleteUserRequest,
  ): Effect.Effect<
    DeleteUserResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteUserByPrincipalId(
    input: DeleteUserByPrincipalIdRequest,
  ): Effect.Effect<
    DeleteUserByPrincipalIdResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteUserCustomPermission(
    input: DeleteUserCustomPermissionRequest,
  ): Effect.Effect<
    DeleteUserCustomPermissionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteVPCConnection(
    input: DeleteVPCConnectionRequest,
  ): Effect.Effect<
    DeleteVPCConnectionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeAccountCustomization(
    input: DescribeAccountCustomizationRequest,
  ): Effect.Effect<
    DescribeAccountCustomizationResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAccountSettings(
    input: DescribeAccountSettingsRequest,
  ): Effect.Effect<
    DescribeAccountSettingsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAccountSubscription(
    input: DescribeAccountSubscriptionRequest,
  ): Effect.Effect<
    DescribeAccountSubscriptionResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAnalysis(
    input: DescribeAnalysisRequest,
  ): Effect.Effect<
    DescribeAnalysisResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeAnalysisDefinition(
    input: DescribeAnalysisDefinitionRequest,
  ): Effect.Effect<
    DescribeAnalysisDefinitionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeAnalysisPermissions(
    input: DescribeAnalysisPermissionsRequest,
  ): Effect.Effect<
    DescribeAnalysisPermissionsResponse,
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeAssetBundleExportJob(
    input: DescribeAssetBundleExportJobRequest,
  ): Effect.Effect<
    DescribeAssetBundleExportJobResponse,
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeAssetBundleImportJob(
    input: DescribeAssetBundleImportJobRequest,
  ): Effect.Effect<
    DescribeAssetBundleImportJobResponse,
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeBrand(
    input: DescribeBrandRequest,
  ): Effect.Effect<
    DescribeBrandResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeBrandAssignment(
    input: DescribeBrandAssignmentRequest,
  ): Effect.Effect<
    DescribeBrandAssignmentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeBrandPublishedVersion(
    input: DescribeBrandPublishedVersionRequest,
  ): Effect.Effect<
    DescribeBrandPublishedVersionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeCustomPermissions(
    input: DescribeCustomPermissionsRequest,
  ): Effect.Effect<
    DescribeCustomPermissionsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDashboard(
    input: DescribeDashboardRequest,
  ): Effect.Effect<
    DescribeDashboardResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeDashboardDefinition(
    input: DescribeDashboardDefinitionRequest,
  ): Effect.Effect<
    DescribeDashboardDefinitionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeDashboardPermissions(
    input: DescribeDashboardPermissionsRequest,
  ): Effect.Effect<
    DescribeDashboardPermissionsResponse,
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeDashboardSnapshotJob(
    input: DescribeDashboardSnapshotJobRequest,
  ): Effect.Effect<
    DescribeDashboardSnapshotJobResponse,
    | AccessDeniedException
    | InternalFailureException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeDashboardSnapshotJobResult(
    input: DescribeDashboardSnapshotJobResultRequest,
  ): Effect.Effect<
    DescribeDashboardSnapshotJobResultResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeDashboardsQAConfiguration(
    input: DescribeDashboardsQAConfigurationRequest,
  ): Effect.Effect<
    DescribeDashboardsQAConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDataSet(
    input: DescribeDataSetRequest,
  ): Effect.Effect<
    DescribeDataSetResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDataSetPermissions(
    input: DescribeDataSetPermissionsRequest,
  ): Effect.Effect<
    DescribeDataSetPermissionsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDataSetRefreshProperties(
    input: DescribeDataSetRefreshPropertiesRequest,
  ): Effect.Effect<
    DescribeDataSetRefreshPropertiesResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDataSource(
    input: DescribeDataSourceRequest,
  ): Effect.Effect<
    DescribeDataSourceResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDataSourcePermissions(
    input: DescribeDataSourcePermissionsRequest,
  ): Effect.Effect<
    DescribeDataSourcePermissionsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDefaultQBusinessApplication(
    input: DescribeDefaultQBusinessApplicationRequest,
  ): Effect.Effect<
    DescribeDefaultQBusinessApplicationResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeFolder(
    input: DescribeFolderRequest,
  ): Effect.Effect<
    DescribeFolderResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeFolderPermissions(
    input: DescribeFolderPermissionsRequest,
  ): Effect.Effect<
    DescribeFolderPermissionsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeFolderResolvedPermissions(
    input: DescribeFolderResolvedPermissionsRequest,
  ): Effect.Effect<
    DescribeFolderResolvedPermissionsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeGroup(
    input: DescribeGroupRequest,
  ): Effect.Effect<
    DescribeGroupResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeGroupMembership(
    input: DescribeGroupMembershipRequest,
  ): Effect.Effect<
    DescribeGroupMembershipResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeIAMPolicyAssignment(
    input: DescribeIAMPolicyAssignmentRequest,
  ): Effect.Effect<
    DescribeIAMPolicyAssignmentResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeIngestion(
    input: DescribeIngestionRequest,
  ): Effect.Effect<
    DescribeIngestionResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeIpRestriction(
    input: DescribeIpRestrictionRequest,
  ): Effect.Effect<
    DescribeIpRestrictionResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeKeyRegistration(
    input: DescribeKeyRegistrationRequest,
  ): Effect.Effect<
    DescribeKeyRegistrationResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ThrottlingException
    | CommonAwsError
  >;
  describeNamespace(
    input: DescribeNamespaceRequest,
  ): Effect.Effect<
    DescribeNamespaceResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeQPersonalizationConfiguration(
    input: DescribeQPersonalizationConfigurationRequest,
  ): Effect.Effect<
    DescribeQPersonalizationConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeQuickSightQSearchConfiguration(
    input: DescribeQuickSightQSearchConfigurationRequest,
  ): Effect.Effect<
    DescribeQuickSightQSearchConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeRefreshSchedule(
    input: DescribeRefreshScheduleRequest,
  ): Effect.Effect<
    DescribeRefreshScheduleResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeRoleCustomPermission(
    input: DescribeRoleCustomPermissionRequest,
  ): Effect.Effect<
    DescribeRoleCustomPermissionResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeTemplate(
    input: DescribeTemplateRequest,
  ): Effect.Effect<
    DescribeTemplateResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeTemplateAlias(
    input: DescribeTemplateAliasRequest,
  ): Effect.Effect<
    DescribeTemplateAliasResponse,
    | InternalFailureException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeTemplateDefinition(
    input: DescribeTemplateDefinitionRequest,
  ): Effect.Effect<
    DescribeTemplateDefinitionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeTemplatePermissions(
    input: DescribeTemplatePermissionsRequest,
  ): Effect.Effect<
    DescribeTemplatePermissionsResponse,
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeTheme(
    input: DescribeThemeRequest,
  ): Effect.Effect<
    DescribeThemeResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeThemeAlias(
    input: DescribeThemeAliasRequest,
  ): Effect.Effect<
    DescribeThemeAliasResponse,
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeThemePermissions(
    input: DescribeThemePermissionsRequest,
  ): Effect.Effect<
    DescribeThemePermissionsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  describeTopic(
    input: DescribeTopicRequest,
  ): Effect.Effect<
    DescribeTopicResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeTopicPermissions(
    input: DescribeTopicPermissionsRequest,
  ): Effect.Effect<
    DescribeTopicPermissionsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeTopicRefresh(
    input: DescribeTopicRefreshRequest,
  ): Effect.Effect<
    DescribeTopicRefreshResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeTopicRefreshSchedule(
    input: DescribeTopicRefreshScheduleRequest,
  ): Effect.Effect<
    DescribeTopicRefreshScheduleResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeUser(
    input: DescribeUserRequest,
  ): Effect.Effect<
    DescribeUserResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeVPCConnection(
    input: DescribeVPCConnectionRequest,
  ): Effect.Effect<
    DescribeVPCConnectionResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  generateEmbedUrlForAnonymousUser(
    input: GenerateEmbedUrlForAnonymousUserRequest,
  ): Effect.Effect<
    GenerateEmbedUrlForAnonymousUserResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | SessionLifetimeInMinutesInvalidException
    | ThrottlingException
    | UnsupportedPricingPlanException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  generateEmbedUrlForRegisteredUser(
    input: GenerateEmbedUrlForRegisteredUserRequest,
  ): Effect.Effect<
    GenerateEmbedUrlForRegisteredUserResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | QuickSightUserNotFoundException
    | ResourceNotFoundException
    | SessionLifetimeInMinutesInvalidException
    | ThrottlingException
    | UnsupportedPricingPlanException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  generateEmbedUrlForRegisteredUserWithIdentity(
    input: GenerateEmbedUrlForRegisteredUserWithIdentityRequest,
  ): Effect.Effect<
    GenerateEmbedUrlForRegisteredUserWithIdentityResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | QuickSightUserNotFoundException
    | ResourceNotFoundException
    | SessionLifetimeInMinutesInvalidException
    | ThrottlingException
    | UnsupportedPricingPlanException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  getDashboardEmbedUrl(
    input: GetDashboardEmbedUrlRequest,
  ): Effect.Effect<
    GetDashboardEmbedUrlResponse,
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
    | CommonAwsError
  >;
  getSessionEmbedUrl(
    input: GetSessionEmbedUrlRequest,
  ): Effect.Effect<
    GetSessionEmbedUrlResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | QuickSightUserNotFoundException
    | ResourceExistsException
    | ResourceNotFoundException
    | SessionLifetimeInMinutesInvalidException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  listAnalyses(
    input: ListAnalysesRequest,
  ): Effect.Effect<
    ListAnalysesResponse,
    | InternalFailureException
    | InvalidNextTokenException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  listAssetBundleExportJobs(
    input: ListAssetBundleExportJobsRequest,
  ): Effect.Effect<
    ListAssetBundleExportJobsResponse,
    | AccessDeniedException
    | InvalidNextTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  listAssetBundleImportJobs(
    input: ListAssetBundleImportJobsRequest,
  ): Effect.Effect<
    ListAssetBundleImportJobsResponse,
    | AccessDeniedException
    | InvalidNextTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  listBrands(
    input: ListBrandsRequest,
  ): Effect.Effect<
    ListBrandsResponse,
    | AccessDeniedException
    | InternalServerException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listCustomPermissions(
    input: ListCustomPermissionsRequest,
  ): Effect.Effect<
    ListCustomPermissionsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listDashboards(
    input: ListDashboardsRequest,
  ): Effect.Effect<
    ListDashboardsResponse,
    | InternalFailureException
    | InvalidNextTokenException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  listDashboardVersions(
    input: ListDashboardVersionsRequest,
  ): Effect.Effect<
    ListDashboardVersionsResponse,
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  listDataSets(
    input: ListDataSetsRequest,
  ): Effect.Effect<
    ListDataSetsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ThrottlingException
    | CommonAwsError
  >;
  listDataSources(
    input: ListDataSourcesRequest,
  ): Effect.Effect<
    ListDataSourcesResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ThrottlingException
    | CommonAwsError
  >;
  listFolderMembers(
    input: ListFolderMembersRequest,
  ): Effect.Effect<
    ListFolderMembersResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  listFolders(
    input: ListFoldersRequest,
  ): Effect.Effect<
    ListFoldersResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  listFoldersForResource(
    input: ListFoldersForResourceRequest,
  ): Effect.Effect<
    ListFoldersForResourceResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  listGroupMemberships(
    input: ListGroupMembershipsRequest,
  ): Effect.Effect<
    ListGroupMembershipsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listGroups(
    input: ListGroupsRequest,
  ): Effect.Effect<
    ListGroupsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listIAMPolicyAssignments(
    input: ListIAMPolicyAssignmentsRequest,
  ): Effect.Effect<
    ListIAMPolicyAssignmentsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listIAMPolicyAssignmentsForUser(
    input: ListIAMPolicyAssignmentsForUserRequest,
  ): Effect.Effect<
    ListIAMPolicyAssignmentsForUserResponse,
    | AccessDeniedException
    | ConcurrentUpdatingException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listIdentityPropagationConfigs(
    input: ListIdentityPropagationConfigsRequest,
  ): Effect.Effect<
    ListIdentityPropagationConfigsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listIngestions(
    input: ListIngestionsRequest,
  ): Effect.Effect<
    ListIngestionsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listNamespaces(
    input: ListNamespacesRequest,
  ): Effect.Effect<
    ListNamespacesResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listRefreshSchedules(
    input: ListRefreshSchedulesRequest,
  ): Effect.Effect<
    ListRefreshSchedulesResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listRoleMemberships(
    input: ListRoleMembershipsRequest,
  ): Effect.Effect<
    ListRoleMembershipsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listTemplateAliases(
    input: ListTemplateAliasesRequest,
  ): Effect.Effect<
    ListTemplateAliasesResponse,
    | InternalFailureException
    | InvalidNextTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  listTemplates(
    input: ListTemplatesRequest,
  ): Effect.Effect<
    ListTemplatesResponse,
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  listTemplateVersions(
    input: ListTemplateVersionsRequest,
  ): Effect.Effect<
    ListTemplateVersionsResponse,
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  listThemeAliases(
    input: ListThemeAliasesRequest,
  ): Effect.Effect<
    ListThemeAliasesResponse,
    | ConflictException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  listThemes(
    input: ListThemesRequest,
  ): Effect.Effect<
    ListThemesResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  listThemeVersions(
    input: ListThemeVersionsRequest,
  ): Effect.Effect<
    ListThemeVersionsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  listTopicRefreshSchedules(
    input: ListTopicRefreshSchedulesRequest,
  ): Effect.Effect<
    ListTopicRefreshSchedulesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listTopicReviewedAnswers(
    input: ListTopicReviewedAnswersRequest,
  ): Effect.Effect<
    ListTopicReviewedAnswersResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listTopics(
    input: ListTopicsRequest,
  ): Effect.Effect<
    ListTopicsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ThrottlingException
    | CommonAwsError
  >;
  listUserGroups(
    input: ListUserGroupsRequest,
  ): Effect.Effect<
    ListUserGroupsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listUsers(
    input: ListUsersRequest,
  ): Effect.Effect<
    ListUsersResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listVPCConnections(
    input: ListVPCConnectionsRequest,
  ): Effect.Effect<
    ListVPCConnectionsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  predictQAResults(
    input: PredictQAResultsRequest,
  ): Effect.Effect<
    PredictQAResultsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ThrottlingException
    | CommonAwsError
  >;
  putDataSetRefreshProperties(
    input: PutDataSetRefreshPropertiesRequest,
  ): Effect.Effect<
    PutDataSetRefreshPropertiesResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  registerUser(
    input: RegisterUserRequest,
  ): Effect.Effect<
    RegisterUserResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceExistsException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  restoreAnalysis(
    input: RestoreAnalysisRequest,
  ): Effect.Effect<
    RestoreAnalysisResponse,
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  searchAnalyses(
    input: SearchAnalysesRequest,
  ): Effect.Effect<
    SearchAnalysesResponse,
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  searchDashboards(
    input: SearchDashboardsRequest,
  ): Effect.Effect<
    SearchDashboardsResponse,
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  searchDataSets(
    input: SearchDataSetsRequest,
  ): Effect.Effect<
    SearchDataSetsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchDataSources(
    input: SearchDataSourcesRequest,
  ): Effect.Effect<
    SearchDataSourcesResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchFolders(
    input: SearchFoldersRequest,
  ): Effect.Effect<
    SearchFoldersResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  searchGroups(
    input: SearchGroupsRequest,
  ): Effect.Effect<
    SearchGroupsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  searchTopics(
    input: SearchTopicsRequest,
  ): Effect.Effect<
    SearchTopicsResponse,
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  startAssetBundleExportJob(
    input: StartAssetBundleExportJobRequest,
  ): Effect.Effect<
    StartAssetBundleExportJobResponse,
    | AccessDeniedException
    | ConflictException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  startAssetBundleImportJob(
    input: StartAssetBundleImportJobRequest,
  ): Effect.Effect<
    StartAssetBundleImportJobResponse,
    | AccessDeniedException
    | ConflictException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  startDashboardSnapshotJob(
    input: StartDashboardSnapshotJobRequest,
  ): Effect.Effect<
    StartDashboardSnapshotJobResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedPricingPlanException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  startDashboardSnapshotJobSchedule(
    input: StartDashboardSnapshotJobScheduleRequest,
  ): Effect.Effect<
    StartDashboardSnapshotJobScheduleResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateAccountCustomization(
    input: UpdateAccountCustomizationRequest,
  ): Effect.Effect<
    UpdateAccountCustomizationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  updateAccountSettings(
    input: UpdateAccountSettingsRequest,
  ): Effect.Effect<
    UpdateAccountSettingsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  updateAnalysis(
    input: UpdateAnalysisRequest,
  ): Effect.Effect<
    UpdateAnalysisResponse,
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  updateAnalysisPermissions(
    input: UpdateAnalysisPermissionsRequest,
  ): Effect.Effect<
    UpdateAnalysisPermissionsResponse,
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  updateApplicationWithTokenExchangeGrant(
    input: UpdateApplicationWithTokenExchangeGrantRequest,
  ): Effect.Effect<
    UpdateApplicationWithTokenExchangeGrantResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateBrand(
    input: UpdateBrandRequest,
  ): Effect.Effect<
    UpdateBrandResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateBrandAssignment(
    input: UpdateBrandAssignmentRequest,
  ): Effect.Effect<
    UpdateBrandAssignmentResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateBrandPublishedVersion(
    input: UpdateBrandPublishedVersionRequest,
  ): Effect.Effect<
    UpdateBrandPublishedVersionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateCustomPermissions(
    input: UpdateCustomPermissionsRequest,
  ): Effect.Effect<
    UpdateCustomPermissionsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  updateDashboard(
    input: UpdateDashboardRequest,
  ): Effect.Effect<
    UpdateDashboardResponse,
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  updateDashboardLinks(
    input: UpdateDashboardLinksRequest,
  ): Effect.Effect<
    UpdateDashboardLinksResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  updateDashboardPermissions(
    input: UpdateDashboardPermissionsRequest,
  ): Effect.Effect<
    UpdateDashboardPermissionsResponse,
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  updateDashboardPublishedVersion(
    input: UpdateDashboardPublishedVersionRequest,
  ): Effect.Effect<
    UpdateDashboardPublishedVersionResponse,
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  updateDashboardsQAConfiguration(
    input: UpdateDashboardsQAConfigurationRequest,
  ): Effect.Effect<
    UpdateDashboardsQAConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateDataSet(
    input: UpdateDataSetRequest,
  ): Effect.Effect<
    UpdateDataSetResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  updateDataSetPermissions(
    input: UpdateDataSetPermissionsRequest,
  ): Effect.Effect<
    UpdateDataSetPermissionsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateDataSource(
    input: UpdateDataSourceRequest,
  ): Effect.Effect<
    UpdateDataSourceResponse,
    | AccessDeniedException
    | ConflictException
    | CustomerManagedKeyUnavailableException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateDataSourcePermissions(
    input: UpdateDataSourcePermissionsRequest,
  ): Effect.Effect<
    UpdateDataSourcePermissionsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateDefaultQBusinessApplication(
    input: UpdateDefaultQBusinessApplicationRequest,
  ): Effect.Effect<
    UpdateDefaultQBusinessApplicationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateFolder(
    input: UpdateFolderRequest,
  ): Effect.Effect<
    UpdateFolderResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  updateFolderPermissions(
    input: UpdateFolderPermissionsRequest,
  ): Effect.Effect<
    UpdateFolderPermissionsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  updateGroup(
    input: UpdateGroupRequest,
  ): Effect.Effect<
    UpdateGroupResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  updateIAMPolicyAssignment(
    input: UpdateIAMPolicyAssignmentRequest,
  ): Effect.Effect<
    UpdateIAMPolicyAssignmentResponse,
    | AccessDeniedException
    | ConcurrentUpdatingException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateIdentityPropagationConfig(
    input: UpdateIdentityPropagationConfigRequest,
  ): Effect.Effect<
    UpdateIdentityPropagationConfigResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateIpRestriction(
    input: UpdateIpRestrictionRequest,
  ): Effect.Effect<
    UpdateIpRestrictionResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateKeyRegistration(
    input: UpdateKeyRegistrationRequest,
  ): Effect.Effect<
    UpdateKeyRegistrationResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ThrottlingException
    | CommonAwsError
  >;
  updatePublicSharingSettings(
    input: UpdatePublicSharingSettingsRequest,
  ): Effect.Effect<
    UpdatePublicSharingSettingsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedPricingPlanException
    | CommonAwsError
  >;
  updateQPersonalizationConfiguration(
    input: UpdateQPersonalizationConfigurationRequest,
  ): Effect.Effect<
    UpdateQPersonalizationConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  updateQuickSightQSearchConfiguration(
    input: UpdateQuickSightQSearchConfigurationRequest,
  ): Effect.Effect<
    UpdateQuickSightQSearchConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateRefreshSchedule(
    input: UpdateRefreshScheduleRequest,
  ): Effect.Effect<
    UpdateRefreshScheduleResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateRoleCustomPermission(
    input: UpdateRoleCustomPermissionRequest,
  ): Effect.Effect<
    UpdateRoleCustomPermissionResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  updateSPICECapacityConfiguration(
    input: UpdateSPICECapacityConfigurationRequest,
  ): Effect.Effect<
    UpdateSPICECapacityConfigurationResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateTemplate(
    input: UpdateTemplateRequest,
  ): Effect.Effect<
    UpdateTemplateResponse,
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  updateTemplateAlias(
    input: UpdateTemplateAliasRequest,
  ): Effect.Effect<
    UpdateTemplateAliasResponse,
    | ConflictException
    | InternalFailureException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  updateTemplatePermissions(
    input: UpdateTemplatePermissionsRequest,
  ): Effect.Effect<
    UpdateTemplatePermissionsResponse,
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  updateTheme(
    input: UpdateThemeRequest,
  ): Effect.Effect<
    UpdateThemeResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  updateThemeAlias(
    input: UpdateThemeAliasRequest,
  ): Effect.Effect<
    UpdateThemeAliasResponse,
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  updateThemePermissions(
    input: UpdateThemePermissionsRequest,
  ): Effect.Effect<
    UpdateThemePermissionsResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  updateTopic(
    input: UpdateTopicRequest,
  ): Effect.Effect<
    UpdateTopicResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateTopicPermissions(
    input: UpdateTopicPermissionsRequest,
  ): Effect.Effect<
    UpdateTopicPermissionsResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
  updateTopicRefreshSchedule(
    input: UpdateTopicRefreshScheduleRequest,
  ): Effect.Effect<
    UpdateTopicRefreshScheduleResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateUser(
    input: UpdateUserRequest,
  ): Effect.Effect<
    UpdateUserResponse,
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  updateUserCustomPermission(
    input: UpdateUserCustomPermissionRequest,
  ): Effect.Effect<
    UpdateUserCustomPermissionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | PreconditionNotMetException
    | ResourceNotFoundException
    | ResourceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  updateVPCConnection(
    input: UpdateVPCConnectionRequest,
  ): Effect.Effect<
    UpdateVPCConnectionResponse,
    | AccessDeniedException
    | ConflictException
    | InternalFailureException
    | InvalidParameterValueException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError
  >;
}

export type Quicksight = QuickSight_20180401;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface AccountCustomization {
  DefaultTheme?: string;
  DefaultEmailCustomizationTemplate?: string;
}
export interface AccountInfo {
  AccountName?: string;
  Edition?: Edition;
  NotificationEmail?: string;
  AuthenticationType?: string;
  AccountSubscriptionStatus?: string;
  IAMIdentityCenterInstanceArn?: string;
}
export type AccountName = string;

export interface AccountSettings {
  AccountName?: string;
  Edition?: Edition;
  DefaultNamespace?: string;
  NotificationEmail?: string;
  PublicSharingEnabled?: boolean;
  TerminationProtectionEnabled?: boolean;
}
export type ActionList = Array<string>;
export interface ActiveIAMPolicyAssignment {
  AssignmentName?: string;
  PolicyArn?: string;
}
export type ActiveIAMPolicyAssignmentList = Array<ActiveIAMPolicyAssignment>;
export type AdditionalDashboardIdList = Array<string>;
export interface AdHocFilteringOption {
  AvailabilityStatus?: DashboardBehavior;
}
export interface AggFunction {
  Aggregation?: AggType;
  AggregationFunctionParameters?: Record<string, string>;
  Period?: TopicTimeGranularity;
  PeriodField?: string;
}
export type AggFunctionParamKey = string;

export type AggFunctionParamMap = Record<string, string>;
export type AggFunctionParamValue = string;

export interface AggregationFunction {
  NumericalAggregationFunction?: NumericalAggregationFunction;
  CategoricalAggregationFunction?: CategoricalAggregationFunction;
  DateAggregationFunction?: DateAggregationFunction;
  AttributeAggregationFunction?: AttributeAggregationFunction;
}
export type AggregationFunctionParameters = Record<string, string>;
export interface AggregationPartitionBy {
  FieldName?: string;
  TimeGranularity?: TimeGranularity;
}
export type AggregationPartitionByList = Array<AggregationPartitionBy>;
export interface AggregationSortConfiguration {
  Column: ColumnIdentifier;
  SortDirection: SortDirection;
  AggregationFunction?: AggregationFunction;
}
export type AggregationSortConfigurationList =
  Array<AggregationSortConfiguration>;
export type AggType =
  | "SUM"
  | "MIN"
  | "MAX"
  | "COUNT"
  | "AVERAGE"
  | "DISTINCT_COUNT"
  | "STDEV"
  | "STDEVP"
  | "VAR"
  | "VARP"
  | "PERCENTILE"
  | "MEDIAN"
  | "PTD_SUM"
  | "PTD_MIN"
  | "PTD_MAX"
  | "PTD_COUNT"
  | "PTD_DISTINCT_COUNT"
  | "PTD_AVERAGE"
  | "COLUMN"
  | "CUSTOM";
export type AliasName = string;

export interface AllSheetsFilterScopeConfiguration {}
export type AltText = string;

export interface AmazonElasticsearchParameters {
  Domain: string;
}
export interface AmazonOpenSearchParameters {
  Domain: string;
}
export interface AmazonQInQuickSightConsoleConfigurations {
  DataQnA?: DataQnAConfigurations;
  GenerativeAuthoring?: GenerativeAuthoringConfigurations;
  ExecutiveSummary?: ExecutiveSummaryConfigurations;
  DataStories?: DataStoriesConfigurations;
}
export interface AmazonQInQuickSightDashboardConfigurations {
  ExecutiveSummary?: ExecutiveSummaryConfigurations;
}
export interface Analysis {
  AnalysisId?: string;
  Arn?: string;
  Name?: string;
  Status?: ResourceStatus;
  Errors?: Array<AnalysisError>;
  DataSetArns?: Array<string>;
  ThemeArn?: string;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
  Sheets?: Array<Sheet>;
}
export interface AnalysisDefaults {
  DefaultNewSheetConfiguration: DefaultNewSheetConfiguration;
}
export interface AnalysisDefinition {
  DataSetIdentifierDeclarations: Array<DataSetIdentifierDeclaration>;
  Sheets?: Array<SheetDefinition>;
  CalculatedFields?: Array<CalculatedField>;
  ParameterDeclarations?: Array<ParameterDeclaration>;
  FilterGroups?: Array<FilterGroup>;
  ColumnConfigurations?: Array<ColumnConfiguration>;
  AnalysisDefaults?: AnalysisDefaults;
  Options?: AssetOptions;
  QueryExecutionOptions?: QueryExecutionOptions;
  StaticFiles?: Array<StaticFile>;
}
export interface AnalysisError {
  Type?: AnalysisErrorType;
  Message?: string;
  ViolatedEntities?: Array<Entity>;
}
export type AnalysisErrorList = Array<AnalysisError>;
export type AnalysisErrorType =
  | "ACCESS_DENIED"
  | "SOURCE_NOT_FOUND"
  | "DATA_SET_NOT_FOUND"
  | "INTERNAL_FAILURE"
  | "PARAMETER_VALUE_INCOMPATIBLE"
  | "PARAMETER_TYPE_INVALID"
  | "PARAMETER_NOT_FOUND"
  | "COLUMN_TYPE_MISMATCH"
  | "COLUMN_GEOGRAPHIC_ROLE_MISMATCH"
  | "COLUMN_REPLACEMENT_MISSING";
export type AnalysisFilterAttribute =
  | "QUICKSIGHT_USER"
  | "QUICKSIGHT_VIEWER_OR_OWNER"
  | "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER"
  | "QUICKSIGHT_OWNER"
  | "DIRECT_QUICKSIGHT_OWNER"
  | "DIRECT_QUICKSIGHT_SOLE_OWNER"
  | "ANALYSIS_NAME";
export type AnalysisName = string;

export interface AnalysisSearchFilter {
  Operator?: FilterOperator;
  Name?: AnalysisFilterAttribute;
  Value?: string;
}
export type AnalysisSearchFilterList = Array<AnalysisSearchFilter>;
export interface AnalysisSourceEntity {
  SourceTemplate?: AnalysisSourceTemplate;
}
export interface AnalysisSourceTemplate {
  DataSetReferences: Array<DataSetReference>;
  Arn: string;
}
export interface AnalysisSummary {
  Arn?: string;
  AnalysisId?: string;
  Name?: string;
  Status?: ResourceStatus;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
}
export type AnalysisSummaryList = Array<AnalysisSummary>;
export interface Anchor {
  AnchorType?: AnchorType;
  TimeGranularity?: TimeGranularity;
  Offset?: number;
}
export interface AnchorDateConfiguration {
  AnchorOption?: AnchorOption;
  ParameterName?: string;
}
export type AnchorOption = "NOW";
export type AnchorType = "TODAY";
export interface AnonymousUserDashboardEmbeddingConfiguration {
  InitialDashboardId: string;
  EnabledFeatures?: Array<AnonymousUserDashboardEmbeddingConfigurationEnabledFeature>;
  DisabledFeatures?: Array<AnonymousUserDashboardEmbeddingConfigurationDisabledFeature>;
  FeatureConfigurations?: AnonymousUserDashboardFeatureConfigurations;
}
export type AnonymousUserDashboardEmbeddingConfigurationDisabledFeature =
  "SHARED_VIEW";
export type AnonymousUserDashboardEmbeddingConfigurationDisabledFeatures =
  Array<AnonymousUserDashboardEmbeddingConfigurationDisabledFeature>;
export type AnonymousUserDashboardEmbeddingConfigurationEnabledFeature =
  "SHARED_VIEW";
export type AnonymousUserDashboardEmbeddingConfigurationEnabledFeatures =
  Array<AnonymousUserDashboardEmbeddingConfigurationEnabledFeature>;
export interface AnonymousUserDashboardFeatureConfigurations {
  SharedView?: SharedViewConfigurations;
}
export interface AnonymousUserDashboardVisualEmbeddingConfiguration {
  InitialDashboardVisualId: DashboardVisualId;
}
export interface AnonymousUserEmbeddingExperienceConfiguration {
  Dashboard?: AnonymousUserDashboardEmbeddingConfiguration;
  DashboardVisual?: AnonymousUserDashboardVisualEmbeddingConfiguration;
  QSearchBar?: AnonymousUserQSearchBarEmbeddingConfiguration;
  GenerativeQnA?: AnonymousUserGenerativeQnAEmbeddingConfiguration;
}
export interface AnonymousUserGenerativeQnAEmbeddingConfiguration {
  InitialTopicId: string;
}
export interface AnonymousUserQSearchBarEmbeddingConfiguration {
  InitialTopicId: string;
}
export interface AnonymousUserSnapshotJobResult {
  FileGroups?: Array<SnapshotJobResultFileGroup>;
}
export type AnonymousUserSnapshotJobResultList =
  Array<AnonymousUserSnapshotJobResult>;
export type AnswerId = string;

export type AnswerIds = Array<string>;
export interface ApplicationTheme {
  BrandColorPalette?: BrandColorPalette;
  BrandElementStyle?: BrandElementStyle;
}
export interface ArcAxisConfiguration {
  Range?: ArcAxisDisplayRange;
  ReserveRange?: number;
}
export interface ArcAxisDisplayRange {
  Min?: number;
  Max?: number;
}
export interface ArcConfiguration {
  ArcAngle?: number;
  ArcThickness?: ArcThicknessOptions;
}
export interface ArcOptions {
  ArcThickness?: ArcThickness;
}
export type ArcThickness = "SMALL" | "MEDIUM" | "LARGE" | "WHOLE";
export type ArcThicknessOptions = "SMALL" | "MEDIUM" | "LARGE";
export type Arn = string;

export type ArnList = Array<string>;
export interface AssetBundleCloudFormationOverridePropertyConfiguration {
  ResourceIdOverrideConfiguration?: AssetBundleExportJobResourceIdOverrideConfiguration;
  VPCConnections?: Array<AssetBundleExportJobVPCConnectionOverrideProperties>;
  RefreshSchedules?: Array<AssetBundleExportJobRefreshScheduleOverrideProperties>;
  DataSources?: Array<AssetBundleExportJobDataSourceOverrideProperties>;
  DataSets?: Array<AssetBundleExportJobDataSetOverrideProperties>;
  Themes?: Array<AssetBundleExportJobThemeOverrideProperties>;
  Analyses?: Array<AssetBundleExportJobAnalysisOverrideProperties>;
  Dashboards?: Array<AssetBundleExportJobDashboardOverrideProperties>;
  Folders?: Array<AssetBundleExportJobFolderOverrideProperties>;
}
export type AssetBundleExportFormat = "CLOUDFORMATION_JSON" | "QUICKSIGHT_JSON";
export interface AssetBundleExportJobAnalysisOverrideProperties {
  Arn: string;
  Properties: Array<AssetBundleExportJobAnalysisPropertyToOverride>;
}
export type AssetBundleExportJobAnalysisOverridePropertiesList =
  Array<AssetBundleExportJobAnalysisOverrideProperties>;
export type AssetBundleExportJobAnalysisPropertyToOverride = "NAME";
export type AssetBundleExportJobAnalysisPropertyToOverrideList =
  Array<AssetBundleExportJobAnalysisPropertyToOverride>;
export interface AssetBundleExportJobDashboardOverrideProperties {
  Arn: string;
  Properties: Array<AssetBundleExportJobDashboardPropertyToOverride>;
}
export type AssetBundleExportJobDashboardOverridePropertiesList =
  Array<AssetBundleExportJobDashboardOverrideProperties>;
export type AssetBundleExportJobDashboardPropertyToOverride = "NAME";
export type AssetBundleExportJobDashboardPropertyToOverrideList =
  Array<AssetBundleExportJobDashboardPropertyToOverride>;
export interface AssetBundleExportJobDataSetOverrideProperties {
  Arn: string;
  Properties: Array<AssetBundleExportJobDataSetPropertyToOverride>;
}
export type AssetBundleExportJobDataSetOverridePropertiesList =
  Array<AssetBundleExportJobDataSetOverrideProperties>;
export type AssetBundleExportJobDataSetPropertyToOverride =
  | "NAME"
  | "REFRESH_FAILURE_EMAIL_ALERT_STATUS";
export type AssetBundleExportJobDataSetPropertyToOverrideList =
  Array<AssetBundleExportJobDataSetPropertyToOverride>;
export interface AssetBundleExportJobDataSourceOverrideProperties {
  Arn: string;
  Properties: Array<AssetBundleExportJobDataSourcePropertyToOverride>;
}
export type AssetBundleExportJobDataSourceOverridePropertiesList =
  Array<AssetBundleExportJobDataSourceOverrideProperties>;
export type AssetBundleExportJobDataSourcePropertyToOverride =
  | "NAME"
  | "DISABLE_SSL"
  | "SECRET_ARN"
  | "USERNAME"
  | "PASSWORD"
  | "DOMAIN"
  | "WORK_GROUP"
  | "HOST"
  | "PORT"
  | "DATABASE"
  | "DATA_SET_NAME"
  | "CATALOG"
  | "INSTANCE_ID"
  | "CLUSTER_ID"
  | "MANIFEST_FILE_LOCATION"
  | "WAREHOUSE"
  | "ROLE_ARN"
  | "PRODUCT_TYPE";
export type AssetBundleExportJobDataSourcePropertyToOverrideList =
  Array<AssetBundleExportJobDataSourcePropertyToOverride>;
export interface AssetBundleExportJobError {
  Arn?: string;
  Type?: string;
  Message?: string;
}
export type AssetBundleExportJobErrorList = Array<AssetBundleExportJobError>;
export interface AssetBundleExportJobFolderOverrideProperties {
  Arn: string;
  Properties: Array<AssetBundleExportJobFolderPropertyToOverride>;
}
export type AssetBundleExportJobFolderOverridePropertiesList =
  Array<AssetBundleExportJobFolderOverrideProperties>;
export type AssetBundleExportJobFolderPropertyToOverride =
  | "NAME"
  | "PARENT_FOLDER_ARN";
export type AssetBundleExportJobFolderPropertyToOverrideList =
  Array<AssetBundleExportJobFolderPropertyToOverride>;
export interface AssetBundleExportJobRefreshScheduleOverrideProperties {
  Arn: string;
  Properties: Array<AssetBundleExportJobRefreshSchedulePropertyToOverride>;
}
export type AssetBundleExportJobRefreshScheduleOverridePropertiesList =
  Array<AssetBundleExportJobRefreshScheduleOverrideProperties>;
export type AssetBundleExportJobRefreshSchedulePropertyToOverride =
  "START_AFTER_DATE_TIME";
export type AssetBundleExportJobRefreshSchedulePropertyToOverrideList =
  Array<AssetBundleExportJobRefreshSchedulePropertyToOverride>;
export interface AssetBundleExportJobResourceIdOverrideConfiguration {
  PrefixForAllResources?: boolean;
}
export type AssetBundleExportJobStatus =
  | "QUEUED_FOR_IMMEDIATE_EXECUTION"
  | "IN_PROGRESS"
  | "SUCCESSFUL"
  | "FAILED";
export interface AssetBundleExportJobSummary {
  JobStatus?: AssetBundleExportJobStatus;
  Arn?: string;
  CreatedTime?: Date | string;
  AssetBundleExportJobId?: string;
  IncludeAllDependencies?: boolean;
  ExportFormat?: AssetBundleExportFormat;
  IncludePermissions?: boolean;
  IncludeTags?: boolean;
}
export type AssetBundleExportJobSummaryList =
  Array<AssetBundleExportJobSummary>;
export interface AssetBundleExportJobThemeOverrideProperties {
  Arn: string;
  Properties: Array<AssetBundleExportJobThemePropertyToOverride>;
}
export type AssetBundleExportJobThemeOverridePropertiesList =
  Array<AssetBundleExportJobThemeOverrideProperties>;
export type AssetBundleExportJobThemePropertyToOverride = "NAME";
export type AssetBundleExportJobThemePropertyToOverrideList =
  Array<AssetBundleExportJobThemePropertyToOverride>;
export interface AssetBundleExportJobValidationStrategy {
  StrictModeForAllResources?: boolean;
}
export interface AssetBundleExportJobVPCConnectionOverrideProperties {
  Arn: string;
  Properties: Array<AssetBundleExportJobVPCConnectionPropertyToOverride>;
}
export type AssetBundleExportJobVPCConnectionOverridePropertiesList =
  Array<AssetBundleExportJobVPCConnectionOverrideProperties>;
export type AssetBundleExportJobVPCConnectionPropertyToOverride =
  | "NAME"
  | "DNS_RESOLVERS"
  | "ROLE_ARN";
export type AssetBundleExportJobVPCConnectionPropertyToOverrideList =
  Array<AssetBundleExportJobVPCConnectionPropertyToOverride>;
export interface AssetBundleExportJobWarning {
  Arn?: string;
  Message?: string;
}
export type AssetBundleExportJobWarningList =
  Array<AssetBundleExportJobWarning>;
export type AssetBundleImportBodyBlob = Uint8Array | string;

export type AssetBundleImportFailureAction = "DO_NOTHING" | "ROLLBACK";
export interface AssetBundleImportJobAnalysisOverrideParameters {
  AnalysisId: string;
  Name?: string;
}
export type AssetBundleImportJobAnalysisOverrideParametersList =
  Array<AssetBundleImportJobAnalysisOverrideParameters>;
export interface AssetBundleImportJobAnalysisOverridePermissions {
  AnalysisIds: Array<string>;
  Permissions: AssetBundleResourcePermissions;
}
export type AssetBundleImportJobAnalysisOverridePermissionsList =
  Array<AssetBundleImportJobAnalysisOverridePermissions>;
export interface AssetBundleImportJobAnalysisOverrideTags {
  AnalysisIds: Array<string>;
  Tags: Array<Tag>;
}
export type AssetBundleImportJobAnalysisOverrideTagsList =
  Array<AssetBundleImportJobAnalysisOverrideTags>;
export interface AssetBundleImportJobDashboardOverrideParameters {
  DashboardId: string;
  Name?: string;
}
export type AssetBundleImportJobDashboardOverrideParametersList =
  Array<AssetBundleImportJobDashboardOverrideParameters>;
export interface AssetBundleImportJobDashboardOverridePermissions {
  DashboardIds: Array<string>;
  Permissions?: AssetBundleResourcePermissions;
  LinkSharingConfiguration?: AssetBundleResourceLinkSharingConfiguration;
}
export type AssetBundleImportJobDashboardOverridePermissionsList =
  Array<AssetBundleImportJobDashboardOverridePermissions>;
export interface AssetBundleImportJobDashboardOverrideTags {
  DashboardIds: Array<string>;
  Tags: Array<Tag>;
}
export type AssetBundleImportJobDashboardOverrideTagsList =
  Array<AssetBundleImportJobDashboardOverrideTags>;
export interface AssetBundleImportJobDataSetOverrideParameters {
  DataSetId: string;
  Name?: string;
  DataSetRefreshProperties?: DataSetRefreshProperties;
}
export type AssetBundleImportJobDataSetOverrideParametersList =
  Array<AssetBundleImportJobDataSetOverrideParameters>;
export interface AssetBundleImportJobDataSetOverridePermissions {
  DataSetIds: Array<string>;
  Permissions: AssetBundleResourcePermissions;
}
export type AssetBundleImportJobDataSetOverridePermissionsList =
  Array<AssetBundleImportJobDataSetOverridePermissions>;
export interface AssetBundleImportJobDataSetOverrideTags {
  DataSetIds: Array<string>;
  Tags: Array<Tag>;
}
export type AssetBundleImportJobDataSetOverrideTagsList =
  Array<AssetBundleImportJobDataSetOverrideTags>;
export interface AssetBundleImportJobDataSourceCredentialPair {
  Username: string;
  Password: string;
}
export interface AssetBundleImportJobDataSourceCredentials {
  CredentialPair?: AssetBundleImportJobDataSourceCredentialPair;
  SecretArn?: string;
}
export interface AssetBundleImportJobDataSourceOverrideParameters {
  DataSourceId: string;
  Name?: string;
  DataSourceParameters?: DataSourceParameters;
  VpcConnectionProperties?: VpcConnectionProperties;
  SslProperties?: SslProperties;
  Credentials?: AssetBundleImportJobDataSourceCredentials;
}
export type AssetBundleImportJobDataSourceOverrideParametersList =
  Array<AssetBundleImportJobDataSourceOverrideParameters>;
export interface AssetBundleImportJobDataSourceOverridePermissions {
  DataSourceIds: Array<string>;
  Permissions: AssetBundleResourcePermissions;
}
export type AssetBundleImportJobDataSourceOverridePermissionsList =
  Array<AssetBundleImportJobDataSourceOverridePermissions>;
export interface AssetBundleImportJobDataSourceOverrideTags {
  DataSourceIds: Array<string>;
  Tags: Array<Tag>;
}
export type AssetBundleImportJobDataSourceOverrideTagsList =
  Array<AssetBundleImportJobDataSourceOverrideTags>;
export interface AssetBundleImportJobError {
  Arn?: string;
  Type?: string;
  Message?: string;
}
export type AssetBundleImportJobErrorList = Array<AssetBundleImportJobError>;
export interface AssetBundleImportJobFolderOverrideParameters {
  FolderId: string;
  Name?: string;
  ParentFolderArn?: string;
}
export type AssetBundleImportJobFolderOverrideParametersList =
  Array<AssetBundleImportJobFolderOverrideParameters>;
export interface AssetBundleImportJobFolderOverridePermissions {
  FolderIds: Array<string>;
  Permissions?: AssetBundleResourcePermissions;
}
export type AssetBundleImportJobFolderOverridePermissionsList =
  Array<AssetBundleImportJobFolderOverridePermissions>;
export interface AssetBundleImportJobFolderOverrideTags {
  FolderIds: Array<string>;
  Tags: Array<Tag>;
}
export type AssetBundleImportJobFolderOverrideTagsList =
  Array<AssetBundleImportJobFolderOverrideTags>;
export interface AssetBundleImportJobOverrideParameters {
  ResourceIdOverrideConfiguration?: AssetBundleImportJobResourceIdOverrideConfiguration;
  VPCConnections?: Array<AssetBundleImportJobVPCConnectionOverrideParameters>;
  RefreshSchedules?: Array<AssetBundleImportJobRefreshScheduleOverrideParameters>;
  DataSources?: Array<AssetBundleImportJobDataSourceOverrideParameters>;
  DataSets?: Array<AssetBundleImportJobDataSetOverrideParameters>;
  Themes?: Array<AssetBundleImportJobThemeOverrideParameters>;
  Analyses?: Array<AssetBundleImportJobAnalysisOverrideParameters>;
  Dashboards?: Array<AssetBundleImportJobDashboardOverrideParameters>;
  Folders?: Array<AssetBundleImportJobFolderOverrideParameters>;
}
export interface AssetBundleImportJobOverridePermissions {
  DataSources?: Array<AssetBundleImportJobDataSourceOverridePermissions>;
  DataSets?: Array<AssetBundleImportJobDataSetOverridePermissions>;
  Themes?: Array<AssetBundleImportJobThemeOverridePermissions>;
  Analyses?: Array<AssetBundleImportJobAnalysisOverridePermissions>;
  Dashboards?: Array<AssetBundleImportJobDashboardOverridePermissions>;
  Folders?: Array<AssetBundleImportJobFolderOverridePermissions>;
}
export interface AssetBundleImportJobOverrideTags {
  VPCConnections?: Array<AssetBundleImportJobVPCConnectionOverrideTags>;
  DataSources?: Array<AssetBundleImportJobDataSourceOverrideTags>;
  DataSets?: Array<AssetBundleImportJobDataSetOverrideTags>;
  Themes?: Array<AssetBundleImportJobThemeOverrideTags>;
  Analyses?: Array<AssetBundleImportJobAnalysisOverrideTags>;
  Dashboards?: Array<AssetBundleImportJobDashboardOverrideTags>;
  Folders?: Array<AssetBundleImportJobFolderOverrideTags>;
}
export interface AssetBundleImportJobOverrideValidationStrategy {
  StrictModeForAllResources?: boolean;
}
export interface AssetBundleImportJobRefreshScheduleOverrideParameters {
  DataSetId: string;
  ScheduleId: string;
  StartAfterDateTime?: Date | string;
}
export type AssetBundleImportJobRefreshScheduleOverrideParametersList =
  Array<AssetBundleImportJobRefreshScheduleOverrideParameters>;
export interface AssetBundleImportJobResourceIdOverrideConfiguration {
  PrefixForAllResources?: string;
}
export type AssetBundleImportJobStatus =
  | "QUEUED_FOR_IMMEDIATE_EXECUTION"
  | "IN_PROGRESS"
  | "SUCCESSFUL"
  | "FAILED"
  | "FAILED_ROLLBACK_IN_PROGRESS"
  | "FAILED_ROLLBACK_COMPLETED"
  | "FAILED_ROLLBACK_ERROR";
export interface AssetBundleImportJobSummary {
  JobStatus?: AssetBundleImportJobStatus;
  Arn?: string;
  CreatedTime?: Date | string;
  AssetBundleImportJobId?: string;
  FailureAction?: AssetBundleImportFailureAction;
}
export type AssetBundleImportJobSummaryList =
  Array<AssetBundleImportJobSummary>;
export interface AssetBundleImportJobThemeOverrideParameters {
  ThemeId: string;
  Name?: string;
}
export type AssetBundleImportJobThemeOverrideParametersList =
  Array<AssetBundleImportJobThemeOverrideParameters>;
export interface AssetBundleImportJobThemeOverridePermissions {
  ThemeIds: Array<string>;
  Permissions: AssetBundleResourcePermissions;
}
export type AssetBundleImportJobThemeOverridePermissionsList =
  Array<AssetBundleImportJobThemeOverridePermissions>;
export interface AssetBundleImportJobThemeOverrideTags {
  ThemeIds: Array<string>;
  Tags: Array<Tag>;
}
export type AssetBundleImportJobThemeOverrideTagsList =
  Array<AssetBundleImportJobThemeOverrideTags>;
export interface AssetBundleImportJobVPCConnectionOverrideParameters {
  VPCConnectionId: string;
  Name?: string;
  SubnetIds?: Array<string>;
  SecurityGroupIds?: Array<string>;
  DnsResolvers?: Array<string>;
  RoleArn?: string;
}
export type AssetBundleImportJobVPCConnectionOverrideParametersList =
  Array<AssetBundleImportJobVPCConnectionOverrideParameters>;
export interface AssetBundleImportJobVPCConnectionOverrideTags {
  VPCConnectionIds: Array<string>;
  Tags: Array<Tag>;
}
export type AssetBundleImportJobVPCConnectionOverrideTagsList =
  Array<AssetBundleImportJobVPCConnectionOverrideTags>;
export interface AssetBundleImportJobWarning {
  Arn?: string;
  Message?: string;
}
export type AssetBundleImportJobWarningList =
  Array<AssetBundleImportJobWarning>;
export interface AssetBundleImportSource {
  Body?: Uint8Array | string;
  S3Uri?: string;
}
export interface AssetBundleImportSourceDescription {
  Body?: string;
  S3Uri?: string;
}
export type AssetBundlePrincipalList = Array<string>;
export type AssetBundleResourceArns = Array<string>;
export interface AssetBundleResourceLinkSharingConfiguration {
  Permissions?: AssetBundleResourcePermissions;
}
export interface AssetBundleResourcePermissions {
  Principals: Array<string>;
  Actions: Array<string>;
}
export type AssetBundleRestrictiveResourceId = string;

export type AssetBundleRestrictiveResourceIdList = Array<string>;
export interface AssetOptions {
  Timezone?: string;
  WeekStart?: DayOfTheWeek;
  QBusinessInsightsStatus?: QBusinessInsightsStatus;
  ExcludedDataSetArns?: Array<string>;
  CustomActionDefaults?: VisualCustomActionDefaults;
}
export type AssignmentStatus = "ENABLED" | "DRAFT" | "DISABLED";
export interface AthenaParameters {
  WorkGroup?: string;
  RoleArn?: string;
  IdentityCenterConfiguration?: IdentityCenterConfiguration;
}
export interface AttributeAggregationFunction {
  SimpleAttributeAggregation?: SimpleAttributeAggregationFunction;
  ValueForMultipleValues?: string;
}
export interface AuroraParameters {
  Host: string;
  Port: number;
  Database: string;
}
export interface AuroraPostgreSqlParameters {
  Host: string;
  Port: number;
  Database: string;
}
export type AuthenticationMethodOption =
  | "IAM_AND_QUICKSIGHT"
  | "IAM_ONLY"
  | "ACTIVE_DIRECTORY"
  | "IAM_IDENTITY_CENTER";
export type AuthenticationType = "PASSWORD" | "TOKEN" | "X509";
export interface AuthorizedTargetsByService {
  Service?: ServiceType;
  AuthorizedTargets?: Array<string>;
}
export type AuthorizedTargetsByServices = Array<AuthorizedTargetsByService>;
export type AuthorizedTargetsList = Array<string>;
export type AuthorSpecifiedAggregation =
  | "COUNT"
  | "DISTINCT_COUNT"
  | "MIN"
  | "MAX"
  | "MEDIAN"
  | "SUM"
  | "AVERAGE"
  | "STDEV"
  | "STDEVP"
  | "VAR"
  | "VARP"
  | "PERCENTILE";
export type AuthorSpecifiedAggregations = Array<AuthorSpecifiedAggregation>;
export type AwsAccountId = string;

export type AwsAndAccountId = string;

export interface AwsIotAnalyticsParameters {
  DataSetName: string;
}
export type AxisBinding = "PRIMARY_YAXIS" | "SECONDARY_YAXIS";
export interface AxisDataOptions {
  NumericAxisOptions?: NumericAxisOptions;
  DateAxisOptions?: DateAxisOptions;
}
export interface AxisDisplayDataDrivenRange {}
export interface AxisDisplayMinMaxRange {
  Minimum?: number;
  Maximum?: number;
}
export interface AxisDisplayOptions {
  TickLabelOptions?: AxisTickLabelOptions;
  AxisLineVisibility?: Visibility;
  GridLineVisibility?: Visibility;
  DataOptions?: AxisDataOptions;
  ScrollbarOptions?: ScrollBarOptions;
  AxisOffset?: string;
}
export interface AxisDisplayRange {
  MinMax?: AxisDisplayMinMaxRange;
  DataDriven?: AxisDisplayDataDrivenRange;
}
export interface AxisLabelOptions {
  FontConfiguration?: FontConfiguration;
  CustomLabel?: string;
  ApplyTo?: AxisLabelReferenceOptions;
}
export type AxisLabelOptionsList = Array<AxisLabelOptions>;
export interface AxisLabelReferenceOptions {
  FieldId: string;
  Column: ColumnIdentifier;
}
export interface AxisLinearScale {
  StepCount?: number;
  StepSize?: number;
}
export interface AxisLogarithmicScale {
  Base?: number;
}
export interface AxisScale {
  Linear?: AxisLinearScale;
  Logarithmic?: AxisLogarithmicScale;
}
export interface AxisTickLabelOptions {
  LabelOptions?: LabelOptions;
  RotationAngle?: number;
}
export interface BarChartAggregatedFieldWells {
  Category?: Array<DimensionField>;
  Values?: Array<MeasureField>;
  Colors?: Array<DimensionField>;
  SmallMultiples?: Array<DimensionField>;
}
export interface BarChartConfiguration {
  FieldWells?: BarChartFieldWells;
  SortConfiguration?: BarChartSortConfiguration;
  Orientation?: BarChartOrientation;
  BarsArrangement?: BarsArrangement;
  VisualPalette?: VisualPalette;
  SmallMultiplesOptions?: SmallMultiplesOptions;
  CategoryAxis?: AxisDisplayOptions;
  CategoryLabelOptions?: ChartAxisLabelOptions;
  ValueAxis?: AxisDisplayOptions;
  ValueLabelOptions?: ChartAxisLabelOptions;
  ColorLabelOptions?: ChartAxisLabelOptions;
  Legend?: LegendOptions;
  DataLabels?: DataLabelOptions;
  Tooltip?: TooltipOptions;
  ReferenceLines?: Array<ReferenceLine>;
  ContributionAnalysisDefaults?: Array<ContributionAnalysisDefault>;
  Interactions?: VisualInteractionOptions;
}
export interface BarChartFieldWells {
  BarChartAggregatedFieldWells?: BarChartAggregatedFieldWells;
}
export type BarChartOrientation = "HORIZONTAL" | "VERTICAL";
export interface BarChartSortConfiguration {
  CategorySort?: Array<FieldSortOptions>;
  CategoryItemsLimit?: ItemsLimitConfiguration;
  ColorSort?: Array<FieldSortOptions>;
  ColorItemsLimit?: ItemsLimitConfiguration;
  SmallMultiplesSort?: Array<FieldSortOptions>;
  SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration;
}
export interface BarChartVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: BarChartConfiguration;
  Actions?: Array<VisualCustomAction>;
  ColumnHierarchies?: Array<ColumnHierarchy>;
  VisualContentAltText?: string;
}
export type BarsArrangement = "CLUSTERED" | "STACKED" | "STACKED_PERCENT";
export type BaseMapStyleType =
  | "LIGHT_GRAY"
  | "DARK_GRAY"
  | "STREET"
  | "IMAGERY";
export interface BatchCreateTopicReviewedAnswerRequest {
  AwsAccountId: string;
  TopicId: string;
  Answers: Array<CreateTopicReviewedAnswer>;
}
export interface BatchCreateTopicReviewedAnswerResponse {
  TopicId?: string;
  TopicArn?: string;
  SucceededAnswers?: Array<SucceededTopicReviewedAnswer>;
  InvalidAnswers?: Array<InvalidTopicReviewedAnswer>;
  Status?: number;
  RequestId?: string;
}
export interface BatchDeleteTopicReviewedAnswerRequest {
  AwsAccountId: string;
  TopicId: string;
  AnswerIds?: Array<string>;
}
export interface BatchDeleteTopicReviewedAnswerResponse {
  TopicId?: string;
  TopicArn?: string;
  SucceededAnswers?: Array<SucceededTopicReviewedAnswer>;
  InvalidAnswers?: Array<InvalidTopicReviewedAnswer>;
  RequestId?: string;
  Status?: number;
}
export interface BigQueryParameters {
  ProjectId: string;
  DataSetRegion?: string;
}
export type BinCountLimit = number;

export interface BinCountOptions {
  Value?: number;
}
export type BinCountValue = number;

export interface BinWidthOptions {
  Value?: number;
  BinCountLimit?: number;
}
export type BinWidthValue = number;

export interface BodySectionConfiguration {
  SectionId: string;
  Content: BodySectionContent;
  Style?: SectionStyle;
  PageBreakConfiguration?: SectionPageBreakConfiguration;
  RepeatConfiguration?: BodySectionRepeatConfiguration;
}
export type BodySectionConfigurationList = Array<BodySectionConfiguration>;
export interface BodySectionContent {
  Layout?: SectionLayoutConfiguration;
}
export interface BodySectionDynamicCategoryDimensionConfiguration {
  Column: ColumnIdentifier;
  Limit?: number;
  SortByMetrics?: Array<ColumnSort>;
}
export type BodySectionDynamicDimensionLimit = number;

export type BodySectionDynamicDimensionSortConfigurationList =
  Array<ColumnSort>;
export interface BodySectionDynamicNumericDimensionConfiguration {
  Column: ColumnIdentifier;
  Limit?: number;
  SortByMetrics?: Array<ColumnSort>;
}
export interface BodySectionRepeatConfiguration {
  DimensionConfigurations?: Array<BodySectionRepeatDimensionConfiguration>;
  PageBreakConfiguration?: BodySectionRepeatPageBreakConfiguration;
  NonRepeatingVisuals?: Array<string>;
}
export interface BodySectionRepeatDimensionConfiguration {
  DynamicCategoryDimensionConfiguration?: BodySectionDynamicCategoryDimensionConfiguration;
  DynamicNumericDimensionConfiguration?: BodySectionDynamicNumericDimensionConfiguration;
}
export type BodySectionRepeatDimensionConfigurationList =
  Array<BodySectionRepeatDimensionConfiguration>;
export interface BodySectionRepeatPageBreakConfiguration {
  After?: SectionAfterPageBreak;
}
export interface BookmarksConfigurations {
  Enabled: boolean;
}
export type BooleanObject = boolean;

export interface BorderStyle {
  Show?: boolean;
}
export interface BoxPlotAggregatedFieldWells {
  GroupBy?: Array<DimensionField>;
  Values?: Array<MeasureField>;
}
export interface BoxPlotChartConfiguration {
  FieldWells?: BoxPlotFieldWells;
  SortConfiguration?: BoxPlotSortConfiguration;
  BoxPlotOptions?: BoxPlotOptions;
  CategoryAxis?: AxisDisplayOptions;
  CategoryLabelOptions?: ChartAxisLabelOptions;
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions;
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;
  Legend?: LegendOptions;
  Tooltip?: TooltipOptions;
  ReferenceLines?: Array<ReferenceLine>;
  VisualPalette?: VisualPalette;
  Interactions?: VisualInteractionOptions;
}
export type BoxPlotDimensionFieldList = Array<DimensionField>;
export interface BoxPlotFieldWells {
  BoxPlotAggregatedFieldWells?: BoxPlotAggregatedFieldWells;
}
export type BoxPlotFillStyle = "SOLID" | "TRANSPARENT";
export type BoxPlotMeasureFieldList = Array<MeasureField>;
export interface BoxPlotOptions {
  StyleOptions?: BoxPlotStyleOptions;
  OutlierVisibility?: Visibility;
  AllDataPointsVisibility?: Visibility;
}
export interface BoxPlotSortConfiguration {
  CategorySort?: Array<FieldSortOptions>;
  PaginationConfiguration?: PaginationConfiguration;
}
export interface BoxPlotStyleOptions {
  FillStyle?: BoxPlotFillStyle;
}
export interface BoxPlotVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: BoxPlotChartConfiguration;
  Actions?: Array<VisualCustomAction>;
  ColumnHierarchies?: Array<ColumnHierarchy>;
  VisualContentAltText?: string;
}
export interface BrandColorPalette {
  Primary?: Palette;
  Secondary?: Palette;
  Accent?: Palette;
  Measure?: Palette;
  Dimension?: Palette;
  Success?: Palette;
  Info?: Palette;
  Warning?: Palette;
  Danger?: Palette;
}
export interface BrandDefinition {
  BrandName: string;
  Description?: string;
  ApplicationTheme?: ApplicationTheme;
  LogoConfiguration?: LogoConfiguration;
}
export interface BrandDetail {
  BrandId: string;
  Arn?: string;
  BrandStatus?: BrandStatus;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
  VersionId?: string;
  VersionStatus?: BrandVersionStatus;
  Errors?: Array<string>;
  Logo?: Logo;
}
export interface BrandElementStyle {
  NavbarStyle?: NavbarStyle;
}
export type BrandStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_SUCCEEDED"
  | "CREATE_FAILED"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED";
export interface BrandSummary {
  Arn?: string;
  BrandId?: string;
  BrandName?: string;
  Description?: string;
  BrandStatus?: BrandStatus;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
}
export type BrandSummaryList = Array<BrandSummary>;
export type BrandVersionStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_SUCCEEDED"
  | "CREATE_FAILED";
export interface CalculatedColumn {
  ColumnName: string;
  ColumnId: string;
  Expression: string;
}
export type CalculatedColumnList = Array<CalculatedColumn>;
export interface CalculatedField {
  DataSetIdentifier: string;
  Name: string;
  Expression: string;
}
export type CalculatedFieldExpression = string;

export type CalculatedFieldReferenceList = Array<Identifier>;
export type CalculatedFields = Array<CalculatedField>;
export interface CalculatedMeasureField {
  FieldId: string;
  Expression: string;
}
export interface CancelIngestionRequest {
  AwsAccountId: string;
  DataSetId: string;
  IngestionId: string;
}
export interface CancelIngestionResponse {
  Arn?: string;
  IngestionId?: string;
  RequestId?: string;
  Status?: number;
}
export interface Capabilities {
  ExportToCsv?: CapabilityState;
  ExportToExcel?: CapabilityState;
  ExportToPdf?: CapabilityState;
  PrintReports?: CapabilityState;
  CreateAndUpdateThemes?: CapabilityState;
  AddOrRunAnomalyDetectionForAnalyses?: CapabilityState;
  ShareAnalyses?: CapabilityState;
  CreateAndUpdateDatasets?: CapabilityState;
  ShareDatasets?: CapabilityState;
  SubscribeDashboardEmailReports?: CapabilityState;
  CreateAndUpdateDashboardEmailReports?: CapabilityState;
  ShareDashboards?: CapabilityState;
  CreateAndUpdateThresholdAlerts?: CapabilityState;
  RenameSharedFolders?: CapabilityState;
  CreateSharedFolders?: CapabilityState;
  CreateAndUpdateDataSources?: CapabilityState;
  ShareDataSources?: CapabilityState;
  ViewAccountSPICECapacity?: CapabilityState;
  CreateSPICEDataset?: CapabilityState;
  ExportToPdfInScheduledReports?: CapabilityState;
  ExportToCsvInScheduledReports?: CapabilityState;
  ExportToExcelInScheduledReports?: CapabilityState;
  IncludeContentInScheduledReportsEmail?: CapabilityState;
}
export type CapabilityState = "DENY";
export interface CascadingControlConfiguration {
  SourceControls?: Array<CascadingControlSource>;
}
export interface CascadingControlSource {
  SourceSheetControlId?: string;
  ColumnToMatch?: ColumnIdentifier;
}
export type CascadingControlSourceList = Array<CascadingControlSource>;
export interface CastColumnTypeOperation {
  ColumnName: string;
  NewColumnType: ColumnDataType;
  SubType?: ColumnDataSubType;
  Format?: string;
}
export type Catalog = string;

export type CategoricalAggregationFunction = "COUNT" | "DISTINCT_COUNT";
export interface CategoricalDimensionField {
  FieldId: string;
  Column: ColumnIdentifier;
  HierarchyId?: string;
  FormatConfiguration?: StringFormatConfiguration;
}
export interface CategoricalMeasureField {
  FieldId: string;
  Column: ColumnIdentifier;
  AggregationFunction?: CategoricalAggregationFunction;
  FormatConfiguration?: StringFormatConfiguration;
}
export interface CategoryDrillDownFilter {
  Column: ColumnIdentifier;
  CategoryValues: Array<string>;
}
export interface CategoryFilter {
  FilterId: string;
  Column: ColumnIdentifier;
  Configuration: CategoryFilterConfiguration;
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration;
}
export interface CategoryFilterConfiguration {
  FilterListConfiguration?: FilterListConfiguration;
  CustomFilterListConfiguration?: CustomFilterListConfiguration;
  CustomFilterConfiguration?: CustomFilterConfiguration;
}
export type CategoryFilterFunction = "EXACT" | "CONTAINS";
export type CategoryFilterMatchOperator =
  | "EQUALS"
  | "DOES_NOT_EQUAL"
  | "CONTAINS"
  | "DOES_NOT_CONTAIN"
  | "STARTS_WITH"
  | "ENDS_WITH";
export type CategoryFilterSelectAllOptions = "FILTER_ALL_VALUES";
export type CategoryFilterType =
  | "CUSTOM_FILTER"
  | "CUSTOM_FILTER_LIST"
  | "FILTER_LIST";
export interface CategoryInnerFilter {
  Column: ColumnIdentifier;
  Configuration: CategoryFilterConfiguration;
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration;
}
export type CategoryValue = string;

export type CategoryValueList = Array<string>;
export interface CellValueSynonym {
  CellValue?: string;
  Synonyms?: Array<string>;
}
export type CellValueSynonyms = Array<CellValueSynonym>;
export interface ChartAxisLabelOptions {
  Visibility?: Visibility;
  SortIconVisibility?: Visibility;
  AxisLabelOptions?: Array<AxisLabelOptions>;
}
export type CIDR = string;

export type ClusterId = string;

export interface ClusterMarker {
  SimpleClusterMarker?: SimpleClusterMarker;
}
export interface ClusterMarkerConfiguration {
  ClusterMarker?: ClusterMarker;
}
export interface CollectiveConstant {
  ValueList?: Array<string>;
}
export interface CollectiveConstantEntry {
  ConstantType?: ConstantType;
  Value?: string;
}
export type CollectiveConstantEntryList = Array<CollectiveConstantEntry>;
export type ColorFillType = "DISCRETE" | "GRADIENT";
export type ColorList = Array<string>;
export interface ColorScale {
  Colors: Array<DataColor>;
  ColorFillType: ColorFillType;
  NullValueColor?: DataColor;
}
export type ColorScaleColorList = Array<DataColor>;
export interface ColorsConfiguration {
  CustomColors?: Array<CustomColor>;
}
export interface ColumnConfiguration {
  Column: ColumnIdentifier;
  FormatConfiguration?: FormatConfiguration;
  Role?: ColumnRole;
  ColorsConfiguration?: ColorsConfiguration;
}
export type ColumnConfigurationList = Array<ColumnConfiguration>;
export type ColumnDataRole = "DIMENSION" | "MEASURE";
export type ColumnDataSubType = "FLOAT" | "FIXED";
export type ColumnDataType = "STRING" | "INTEGER" | "DECIMAL" | "DATETIME";
export interface ColumnDescription {
  Text?: string;
}
export type ColumnDescriptiveText = string;

export interface ColumnGroup {
  GeoSpatialColumnGroup?: GeoSpatialColumnGroup;
}
export interface ColumnGroupColumnSchema {
  Name?: string;
}
export type ColumnGroupColumnSchemaList = Array<ColumnGroupColumnSchema>;
export type ColumnGroupList = Array<ColumnGroup>;
export type ColumnGroupName = string;

export interface ColumnGroupSchema {
  Name?: string;
  ColumnGroupColumnSchemaList?: Array<ColumnGroupColumnSchema>;
}
export type ColumnGroupSchemaList = Array<ColumnGroupSchema>;
export interface ColumnHierarchy {
  ExplicitHierarchy?: ExplicitHierarchy;
  DateTimeHierarchy?: DateTimeHierarchy;
  PredefinedHierarchy?: PredefinedHierarchy;
}
export type ColumnHierarchyList = Array<ColumnHierarchy>;
export type ColumnId = string;

export interface ColumnIdentifier {
  DataSetIdentifier: string;
  ColumnName: string;
}
export interface ColumnLevelPermissionRule {
  Principals?: Array<string>;
  ColumnNames?: Array<string>;
}
export type ColumnLevelPermissionRuleList = Array<ColumnLevelPermissionRule>;
export type ColumnList = Array<string>;
export type ColumnName = string;

export type ColumnNameList = Array<string>;
export type ColumnOrderingType =
  | "GREATER_IS_BETTER"
  | "LESSER_IS_BETTER"
  | "SPECIFIED";
export type ColumnRole = "DIMENSION" | "MEASURE";
export interface ColumnSchema {
  Name?: string;
  DataType?: string;
  GeographicRole?: string;
}
export type ColumnSchemaList = Array<ColumnSchema>;
export interface ColumnSort {
  SortBy: ColumnIdentifier;
  Direction: SortDirection;
  AggregationFunction?: AggregationFunction;
}
export interface ColumnTag {
  ColumnGeographicRole?: GeoSpatialDataRole;
  ColumnDescription?: ColumnDescription;
}
export type ColumnTagList = Array<ColumnTag>;
export type ColumnTagName = "COLUMN_GEOGRAPHIC_ROLE" | "COLUMN_DESCRIPTION";
export type ColumnTagNames = Array<ColumnTagName>;
export interface ColumnTooltipItem {
  Column: ColumnIdentifier;
  Label?: string;
  Visibility?: Visibility;
  Aggregation?: AggregationFunction;
  TooltipTarget?: TooltipTarget;
}
export interface ComboChartAggregatedFieldWells {
  Category?: Array<DimensionField>;
  BarValues?: Array<MeasureField>;
  Colors?: Array<DimensionField>;
  LineValues?: Array<MeasureField>;
}
export interface ComboChartConfiguration {
  FieldWells?: ComboChartFieldWells;
  SortConfiguration?: ComboChartSortConfiguration;
  BarsArrangement?: BarsArrangement;
  CategoryAxis?: AxisDisplayOptions;
  CategoryLabelOptions?: ChartAxisLabelOptions;
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions;
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;
  SecondaryYAxisDisplayOptions?: AxisDisplayOptions;
  SecondaryYAxisLabelOptions?: ChartAxisLabelOptions;
  SingleAxisOptions?: SingleAxisOptions;
  ColorLabelOptions?: ChartAxisLabelOptions;
  Legend?: LegendOptions;
  BarDataLabels?: DataLabelOptions;
  LineDataLabels?: DataLabelOptions;
  Tooltip?: TooltipOptions;
  ReferenceLines?: Array<ReferenceLine>;
  VisualPalette?: VisualPalette;
  Interactions?: VisualInteractionOptions;
}
export interface ComboChartFieldWells {
  ComboChartAggregatedFieldWells?: ComboChartAggregatedFieldWells;
}
export interface ComboChartSortConfiguration {
  CategorySort?: Array<FieldSortOptions>;
  CategoryItemsLimit?: ItemsLimitConfiguration;
  ColorSort?: Array<FieldSortOptions>;
  ColorItemsLimit?: ItemsLimitConfiguration;
}
export interface ComboChartVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: ComboChartConfiguration;
  Actions?: Array<VisualCustomAction>;
  ColumnHierarchies?: Array<ColumnHierarchy>;
  VisualContentAltText?: string;
}
export type CommitMode = "AUTO" | "MANUAL";
export interface ComparativeOrder {
  UseOrdering?: ColumnOrderingType;
  SpecifedOrder?: Array<string>;
  TreatUndefinedSpecifiedValues?: UndefinedSpecifiedValueType;
}
export interface ComparisonConfiguration {
  ComparisonMethod?: ComparisonMethod;
  ComparisonFormat?: ComparisonFormatConfiguration;
}
export interface ComparisonFormatConfiguration {
  NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration;
  PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration;
}
export type ComparisonMethod = "DIFFERENCE" | "PERCENT_DIFFERENCE" | "PERCENT";
export type ComparisonMethodType =
  | "DIFF"
  | "PERC_DIFF"
  | "DIFF_AS_PERC"
  | "POP_CURRENT_DIFF_AS_PERC"
  | "POP_CURRENT_DIFF"
  | "POP_OVERTIME_DIFF_AS_PERC"
  | "POP_OVERTIME_DIFF"
  | "PERCENT_OF_TOTAL"
  | "RUNNING_SUM"
  | "MOVING_AVERAGE";
export interface Computation {
  TopBottomRanked?: TopBottomRankedComputation;
  TopBottomMovers?: TopBottomMoversComputation;
  TotalAggregation?: TotalAggregationComputation;
  MaximumMinimum?: MaximumMinimumComputation;
  MetricComparison?: MetricComparisonComputation;
  PeriodOverPeriod?: PeriodOverPeriodComputation;
  PeriodToDate?: PeriodToDateComputation;
  GrowthRate?: GrowthRateComputation;
  UniqueValues?: UniqueValuesComputation;
  Forecast?: ForecastComputation;
}
export type ComputationList = Array<Computation>;
export declare class ConcurrentUpdatingException extends EffectData.TaggedError(
  "ConcurrentUpdatingException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface ConditionalFormattingColor {
  Solid?: ConditionalFormattingSolidColor;
  Gradient?: ConditionalFormattingGradientColor;
}
export interface ConditionalFormattingCustomIconCondition {
  Expression: string;
  IconOptions: ConditionalFormattingCustomIconOptions;
  Color?: string;
  DisplayConfiguration?: ConditionalFormattingIconDisplayConfiguration;
}
export interface ConditionalFormattingCustomIconOptions {
  Icon?: Icon;
  UnicodeIcon?: string;
}
export interface ConditionalFormattingGradientColor {
  Expression: string;
  Color: GradientColor;
}
export interface ConditionalFormattingIcon {
  IconSet?: ConditionalFormattingIconSet;
  CustomCondition?: ConditionalFormattingCustomIconCondition;
}
export interface ConditionalFormattingIconDisplayConfiguration {
  IconDisplayOption?: ConditionalFormattingIconDisplayOption;
}
export type ConditionalFormattingIconDisplayOption = "ICON_ONLY";
export interface ConditionalFormattingIconSet {
  Expression: string;
  IconSetType?: ConditionalFormattingIconSetType;
}
export type ConditionalFormattingIconSetType =
  | "PLUS_MINUS"
  | "CHECK_X"
  | "THREE_COLOR_ARROW"
  | "THREE_GRAY_ARROW"
  | "CARET_UP_MINUS_DOWN"
  | "THREE_SHAPE"
  | "THREE_CIRCLE"
  | "FLAGS"
  | "BARS"
  | "FOUR_COLOR_ARROW"
  | "FOUR_GRAY_ARROW";
export interface ConditionalFormattingSolidColor {
  Expression: string;
  Color?: string;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export type ConstantType = "SINGULAR" | "RANGE" | "COLLECTIVE";
export type ConstantValueString = string;

export interface ContextMenuOption {
  AvailabilityStatus?: DashboardBehavior;
}
export interface ContributionAnalysisDefault {
  MeasureFieldId: string;
  ContributorDimensions: Array<ColumnIdentifier>;
}
export type ContributionAnalysisDefaultList =
  Array<ContributionAnalysisDefault>;
export type ContributionAnalysisDirection = "INCREASE" | "DECREASE" | "NEUTRAL";
export interface ContributionAnalysisFactor {
  FieldName?: string;
}
export type ContributionAnalysisFactorsList = Array<ContributionAnalysisFactor>;
export type ContributionAnalysisSortType =
  | "ABSOLUTE_DIFFERENCE"
  | "CONTRIBUTION_PERCENTAGE"
  | "DEVIATION_FROM_EXPECTED"
  | "PERCENTAGE_DIFFERENCE";
export interface ContributionAnalysisTimeRanges {
  StartRange?: TopicIRFilterOption;
  EndRange?: TopicIRFilterOption;
}
export type ContributorDimensionList = Array<ColumnIdentifier>;
export type CopySourceArn = string;

export interface CreateAccountCustomizationRequest {
  AwsAccountId: string;
  Namespace?: string;
  AccountCustomization: AccountCustomization;
  Tags?: Array<Tag>;
}
export interface CreateAccountCustomizationResponse {
  Arn?: string;
  AwsAccountId?: string;
  Namespace?: string;
  AccountCustomization?: AccountCustomization;
  RequestId?: string;
  Status?: number;
}
export interface CreateAccountSubscriptionRequest {
  Edition?: Edition;
  AuthenticationMethod: AuthenticationMethodOption;
  AwsAccountId: string;
  AccountName: string;
  NotificationEmail: string;
  ActiveDirectoryName?: string;
  Realm?: string;
  DirectoryId?: string;
  AdminGroup?: Array<string>;
  AuthorGroup?: Array<string>;
  ReaderGroup?: Array<string>;
  AdminProGroup?: Array<string>;
  AuthorProGroup?: Array<string>;
  ReaderProGroup?: Array<string>;
  FirstName?: string;
  LastName?: string;
  EmailAddress?: string;
  ContactNumber?: string;
  IAMIdentityCenterInstanceArn?: string;
}
export interface CreateAccountSubscriptionResponse {
  SignupResponse?: SignupResponse;
  Status?: number;
  RequestId?: string;
}
export interface CreateAnalysisRequest {
  AwsAccountId: string;
  AnalysisId: string;
  Name: string;
  Parameters?: Parameters;
  Permissions?: Array<ResourcePermission>;
  SourceEntity?: AnalysisSourceEntity;
  ThemeArn?: string;
  Tags?: Array<Tag>;
  Definition?: AnalysisDefinition;
  ValidationStrategy?: ValidationStrategy;
  FolderArns?: Array<string>;
}
export interface CreateAnalysisResponse {
  Arn?: string;
  AnalysisId?: string;
  CreationStatus?: ResourceStatus;
  Status?: number;
  RequestId?: string;
}
export interface CreateBrandRequest {
  AwsAccountId: string;
  BrandId: string;
  BrandDefinition?: BrandDefinition;
  Tags?: Array<Tag>;
}
export interface CreateBrandResponse {
  RequestId?: string;
  BrandDetail?: BrandDetail;
  BrandDefinition?: BrandDefinition;
}
export interface CreateColumnsOperation {
  Columns: Array<CalculatedColumn>;
}
export interface CreateCustomPermissionsRequest {
  AwsAccountId: string;
  CustomPermissionsName: string;
  Capabilities?: Capabilities;
  Tags?: Array<Tag>;
}
export interface CreateCustomPermissionsResponse {
  Status?: number;
  Arn?: string;
  RequestId?: string;
}
export interface CreateDashboardRequest {
  AwsAccountId: string;
  DashboardId: string;
  Name: string;
  Parameters?: Parameters;
  Permissions?: Array<ResourcePermission>;
  SourceEntity?: DashboardSourceEntity;
  Tags?: Array<Tag>;
  VersionDescription?: string;
  DashboardPublishOptions?: DashboardPublishOptions;
  ThemeArn?: string;
  Definition?: DashboardVersionDefinition;
  ValidationStrategy?: ValidationStrategy;
  FolderArns?: Array<string>;
  LinkSharingConfiguration?: LinkSharingConfiguration;
  LinkEntities?: Array<string>;
}
export interface CreateDashboardResponse {
  Arn?: string;
  VersionArn?: string;
  DashboardId?: string;
  CreationStatus?: ResourceStatus;
  Status?: number;
  RequestId?: string;
}
export interface CreateDataSetRequest {
  AwsAccountId: string;
  DataSetId: string;
  Name: string;
  PhysicalTableMap: Record<string, PhysicalTable>;
  LogicalTableMap?: Record<string, LogicalTable>;
  ImportMode: DataSetImportMode;
  ColumnGroups?: Array<ColumnGroup>;
  FieldFolders?: Record<string, FieldFolder>;
  Permissions?: Array<ResourcePermission>;
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration;
  ColumnLevelPermissionRules?: Array<ColumnLevelPermissionRule>;
  Tags?: Array<Tag>;
  DataSetUsageConfiguration?: DataSetUsageConfiguration;
  DatasetParameters?: Array<DatasetParameter>;
  FolderArns?: Array<string>;
  PerformanceConfiguration?: PerformanceConfiguration;
  UseAs?: DataSetUseAs;
}
export interface CreateDataSetResponse {
  Arn?: string;
  DataSetId?: string;
  IngestionArn?: string;
  IngestionId?: string;
  RequestId?: string;
  Status?: number;
}
export interface CreateDataSourceRequest {
  AwsAccountId: string;
  DataSourceId: string;
  Name: string;
  Type: DataSourceType;
  DataSourceParameters?: DataSourceParameters;
  Credentials?: DataSourceCredentials;
  Permissions?: Array<ResourcePermission>;
  VpcConnectionProperties?: VpcConnectionProperties;
  SslProperties?: SslProperties;
  Tags?: Array<Tag>;
  FolderArns?: Array<string>;
}
export interface CreateDataSourceResponse {
  Arn?: string;
  DataSourceId?: string;
  CreationStatus?: ResourceStatus;
  RequestId?: string;
  Status?: number;
}
export interface CreateFolderMembershipRequest {
  AwsAccountId: string;
  FolderId: string;
  MemberId: string;
  MemberType: MemberType;
}
export interface CreateFolderMembershipResponse {
  Status?: number;
  FolderMember?: FolderMember;
  RequestId?: string;
}
export interface CreateFolderRequest {
  AwsAccountId: string;
  FolderId: string;
  Name?: string;
  FolderType?: FolderType;
  ParentFolderArn?: string;
  Permissions?: Array<ResourcePermission>;
  Tags?: Array<Tag>;
  SharingModel?: SharingModel;
}
export interface CreateFolderResponse {
  Status?: number;
  Arn?: string;
  FolderId?: string;
  RequestId?: string;
}
export interface CreateGroupMembershipRequest {
  MemberName: string;
  GroupName: string;
  AwsAccountId: string;
  Namespace: string;
}
export interface CreateGroupMembershipResponse {
  GroupMember?: GroupMember;
  RequestId?: string;
  Status?: number;
}
export interface CreateGroupRequest {
  GroupName: string;
  Description?: string;
  AwsAccountId: string;
  Namespace: string;
}
export interface CreateGroupResponse {
  Group?: Group;
  RequestId?: string;
  Status?: number;
}
export interface CreateIAMPolicyAssignmentRequest {
  AwsAccountId: string;
  AssignmentName: string;
  AssignmentStatus: AssignmentStatus;
  PolicyArn?: string;
  Identities?: Record<string, Array<string>>;
  Namespace: string;
}
export interface CreateIAMPolicyAssignmentResponse {
  AssignmentName?: string;
  AssignmentId?: string;
  AssignmentStatus?: AssignmentStatus;
  PolicyArn?: string;
  Identities?: Record<string, Array<string>>;
  RequestId?: string;
  Status?: number;
}
export interface CreateIngestionRequest {
  DataSetId: string;
  IngestionId: string;
  AwsAccountId: string;
  IngestionType?: IngestionType;
}
export interface CreateIngestionResponse {
  Arn?: string;
  IngestionId?: string;
  IngestionStatus?: IngestionStatus;
  RequestId?: string;
  Status?: number;
}
export interface CreateNamespaceRequest {
  AwsAccountId: string;
  Namespace: string;
  IdentityStore: IdentityStore;
  Tags?: Array<Tag>;
}
export interface CreateNamespaceResponse {
  Arn?: string;
  Name?: string;
  CapacityRegion?: string;
  CreationStatus?: NamespaceStatus;
  IdentityStore?: IdentityStore;
  RequestId?: string;
  Status?: number;
}
export interface CreateRefreshScheduleRequest {
  DataSetId: string;
  AwsAccountId: string;
  Schedule: RefreshSchedule;
}
export interface CreateRefreshScheduleResponse {
  Status?: number;
  RequestId?: string;
  ScheduleId?: string;
  Arn?: string;
}
export interface CreateRoleMembershipRequest {
  MemberName: string;
  AwsAccountId: string;
  Namespace: string;
  Role: Role;
}
export interface CreateRoleMembershipResponse {
  RequestId?: string;
  Status?: number;
}
export interface CreateTemplateAliasRequest {
  AwsAccountId: string;
  TemplateId: string;
  AliasName: string;
  TemplateVersionNumber: number;
}
export interface CreateTemplateAliasResponse {
  TemplateAlias?: TemplateAlias;
  Status?: number;
  RequestId?: string;
}
export interface CreateTemplateRequest {
  AwsAccountId: string;
  TemplateId: string;
  Name?: string;
  Permissions?: Array<ResourcePermission>;
  SourceEntity?: TemplateSourceEntity;
  Tags?: Array<Tag>;
  VersionDescription?: string;
  Definition?: TemplateVersionDefinition;
  ValidationStrategy?: ValidationStrategy;
}
export interface CreateTemplateResponse {
  Arn?: string;
  VersionArn?: string;
  TemplateId?: string;
  CreationStatus?: ResourceStatus;
  Status?: number;
  RequestId?: string;
}
export interface CreateThemeAliasRequest {
  AwsAccountId: string;
  ThemeId: string;
  AliasName: string;
  ThemeVersionNumber: number;
}
export interface CreateThemeAliasResponse {
  ThemeAlias?: ThemeAlias;
  Status?: number;
  RequestId?: string;
}
export interface CreateThemeRequest {
  AwsAccountId: string;
  ThemeId: string;
  Name: string;
  BaseThemeId: string;
  VersionDescription?: string;
  Configuration: ThemeConfiguration;
  Permissions?: Array<ResourcePermission>;
  Tags?: Array<Tag>;
}
export interface CreateThemeResponse {
  Arn?: string;
  VersionArn?: string;
  ThemeId?: string;
  CreationStatus?: ResourceStatus;
  Status?: number;
  RequestId?: string;
}
export interface CreateTopicRefreshScheduleRequest {
  AwsAccountId: string;
  TopicId: string;
  DatasetArn: string;
  DatasetName?: string;
  RefreshSchedule: TopicRefreshSchedule;
}
export interface CreateTopicRefreshScheduleResponse {
  TopicId?: string;
  TopicArn?: string;
  DatasetArn?: string;
  Status?: number;
  RequestId?: string;
}
export interface CreateTopicRequest {
  AwsAccountId: string;
  TopicId: string;
  Topic: TopicDetails;
  Tags?: Array<Tag>;
  FolderArns?: Array<string>;
}
export interface CreateTopicResponse {
  Arn?: string;
  TopicId?: string;
  RefreshArn?: string;
  RequestId?: string;
  Status?: number;
}
export interface CreateTopicReviewedAnswer {
  AnswerId: string;
  DatasetArn: string;
  Question: string;
  Mir?: TopicIR;
  PrimaryVisual?: TopicVisual;
  Template?: TopicTemplate;
}
export type CreateTopicReviewedAnswers = Array<CreateTopicReviewedAnswer>;
export interface CreateVPCConnectionRequest {
  AwsAccountId: string;
  VPCConnectionId: string;
  Name: string;
  SubnetIds: Array<string>;
  SecurityGroupIds: Array<string>;
  DnsResolvers?: Array<string>;
  RoleArn: string;
  Tags?: Array<Tag>;
}
export interface CreateVPCConnectionResponse {
  Arn?: string;
  VPCConnectionId?: string;
  CreationStatus?: VPCConnectionResourceStatus;
  AvailabilityStatus?: VPCConnectionAvailabilityStatus;
  RequestId?: string;
  Status?: number;
}
export interface CredentialPair {
  Username: string;
  Password: string;
  AlternateDataSourceParameters?: Array<DataSourceParameters>;
}
export type CrossDatasetTypes = "ALL_DATASETS" | "SINGLE_DATASET";
export type CurrencyCode = string;

export interface CurrencyDisplayFormatConfiguration {
  Prefix?: string;
  Suffix?: string;
  SeparatorConfiguration?: NumericSeparatorConfiguration;
  Symbol?: string;
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration;
  NumberScale?: NumberScale;
  NegativeValueConfiguration?: NegativeValueConfiguration;
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
}
export type CustomActionColumnList = Array<ColumnIdentifier>;
export interface CustomActionFilterOperation {
  SelectedFieldsConfiguration: FilterOperationSelectedFieldsConfiguration;
  TargetVisualsConfiguration: FilterOperationTargetVisualsConfiguration;
}
export interface CustomActionNavigationOperation {
  LocalNavigationConfiguration?: LocalNavigationConfiguration;
}
export interface CustomActionSetParametersOperation {
  ParameterValueConfigurations: Array<SetParameterValueConfiguration>;
}
export interface CustomActionURLOperation {
  URLTemplate: string;
  URLTarget: URLTargetConfiguration;
}
export interface CustomColor {
  FieldValue?: string;
  Color: string;
  SpecialValue?: SpecialValue;
}
export type CustomColorsList = Array<CustomColor>;
export interface CustomContentConfiguration {
  ContentUrl?: string;
  ContentType?: CustomContentType;
  ImageScaling?: CustomContentImageScalingConfiguration;
  Interactions?: VisualInteractionOptions;
}
export type CustomContentImageScalingConfiguration =
  | "FIT_TO_HEIGHT"
  | "FIT_TO_WIDTH"
  | "DO_NOT_SCALE"
  | "SCALE_TO_VISUAL";
export type CustomContentType = "IMAGE" | "OTHER_EMBEDDED_CONTENT";
export interface CustomContentVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: CustomContentConfiguration;
  Actions?: Array<VisualCustomAction>;
  DataSetIdentifier: string;
  VisualContentAltText?: string;
}
export declare class CustomerManagedKeyUnavailableException extends EffectData.TaggedError(
  "CustomerManagedKeyUnavailableException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface CustomFilterConfiguration {
  MatchOperator: CategoryFilterMatchOperator;
  CategoryValue?: string;
  SelectAllOptions?: CategoryFilterSelectAllOptions;
  ParameterName?: string;
  NullOption: FilterNullOption;
}
export interface CustomFilterListConfiguration {
  MatchOperator: CategoryFilterMatchOperator;
  CategoryValues?: Array<string>;
  SelectAllOptions?: CategoryFilterSelectAllOptions;
  NullOption: FilterNullOption;
}
export type CustomLabel = string;

export interface CustomNarrativeOptions {
  Narrative: string;
}
export interface CustomParameterValues {
  StringValues?: Array<string>;
  IntegerValues?: Array<number>;
  DecimalValues?: Array<number>;
  DateTimeValues?: Array<Date | string>;
}
export interface CustomPermissions {
  Arn?: string;
  CustomPermissionsName?: string;
  Capabilities?: Capabilities;
}
export type CustomPermissionsList = Array<CustomPermissions>;
export type CustomPermissionsName = string;

export interface CustomSql {
  DataSourceArn: string;
  Name: string;
  SqlQuery: string;
  Columns?: Array<InputColumn>;
}
export type CustomSqlName = string;

export interface CustomValuesConfiguration {
  IncludeNullValue?: boolean;
  CustomValues: CustomParameterValues;
}
export interface Dashboard {
  DashboardId?: string;
  Arn?: string;
  Name?: string;
  Version?: DashboardVersion;
  CreatedTime?: Date | string;
  LastPublishedTime?: Date | string;
  LastUpdatedTime?: Date | string;
  LinkEntities?: Array<string>;
}
export type DashboardBehavior = "ENABLED" | "DISABLED";
export interface DashboardError {
  Type?: DashboardErrorType;
  Message?: string;
  ViolatedEntities?: Array<Entity>;
}
export type DashboardErrorList = Array<DashboardError>;
export type DashboardErrorType =
  | "ACCESS_DENIED"
  | "SOURCE_NOT_FOUND"
  | "DATA_SET_NOT_FOUND"
  | "INTERNAL_FAILURE"
  | "PARAMETER_VALUE_INCOMPATIBLE"
  | "PARAMETER_TYPE_INVALID"
  | "PARAMETER_NOT_FOUND"
  | "COLUMN_TYPE_MISMATCH"
  | "COLUMN_GEOGRAPHIC_ROLE_MISMATCH"
  | "COLUMN_REPLACEMENT_MISSING";
export type DashboardFilterAttribute =
  | "QUICKSIGHT_USER"
  | "QUICKSIGHT_VIEWER_OR_OWNER"
  | "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER"
  | "QUICKSIGHT_OWNER"
  | "DIRECT_QUICKSIGHT_OWNER"
  | "DIRECT_QUICKSIGHT_SOLE_OWNER"
  | "DASHBOARD_NAME";
export type DashboardName = string;

export interface DashboardPublishOptions {
  AdHocFilteringOption?: AdHocFilteringOption;
  ExportToCSVOption?: ExportToCSVOption;
  SheetControlsOption?: SheetControlsOption;
  VisualPublishOptions?: DashboardVisualPublishOptions;
  SheetLayoutElementMaximizationOption?: SheetLayoutElementMaximizationOption;
  VisualMenuOption?: VisualMenuOption;
  VisualAxisSortOption?: VisualAxisSortOption;
  ExportWithHiddenFieldsOption?: ExportWithHiddenFieldsOption;
  DataPointDrillUpDownOption?: DataPointDrillUpDownOption;
  DataPointMenuLabelOption?: DataPointMenuLabelOption;
  DataPointTooltipOption?: DataPointTooltipOption;
  DataQAEnabledOption?: DataQAEnabledOption;
}
export interface DashboardSearchFilter {
  Operator: FilterOperator;
  Name?: DashboardFilterAttribute;
  Value?: string;
}
export type DashboardSearchFilterList = Array<DashboardSearchFilter>;
export interface DashboardSourceEntity {
  SourceTemplate?: DashboardSourceTemplate;
}
export interface DashboardSourceTemplate {
  DataSetReferences: Array<DataSetReference>;
  Arn: string;
}
export type DashboardsQAStatus = "ENABLED" | "DISABLED";
export interface DashboardSummary {
  Arn?: string;
  DashboardId?: string;
  Name?: string;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
  PublishedVersionNumber?: number;
  LastPublishedTime?: Date | string;
}
export type DashboardSummaryList = Array<DashboardSummary>;
export type DashboardUIState = "EXPANDED" | "COLLAPSED";
export interface DashboardVersion {
  CreatedTime?: Date | string;
  Errors?: Array<DashboardError>;
  VersionNumber?: number;
  Status?: ResourceStatus;
  Arn?: string;
  SourceEntityArn?: string;
  DataSetArns?: Array<string>;
  Description?: string;
  ThemeArn?: string;
  Sheets?: Array<Sheet>;
}
export interface DashboardVersionDefinition {
  DataSetIdentifierDeclarations: Array<DataSetIdentifierDeclaration>;
  Sheets?: Array<SheetDefinition>;
  CalculatedFields?: Array<CalculatedField>;
  ParameterDeclarations?: Array<ParameterDeclaration>;
  FilterGroups?: Array<FilterGroup>;
  ColumnConfigurations?: Array<ColumnConfiguration>;
  AnalysisDefaults?: AnalysisDefaults;
  Options?: AssetOptions;
  StaticFiles?: Array<StaticFile>;
}
export interface DashboardVersionSummary {
  Arn?: string;
  CreatedTime?: Date | string;
  VersionNumber?: number;
  Status?: ResourceStatus;
  SourceEntityArn?: string;
  Description?: string;
}
export type DashboardVersionSummaryList = Array<DashboardVersionSummary>;
export interface DashboardVisualId {
  DashboardId: string;
  SheetId: string;
  VisualId: string;
}
export interface DashboardVisualPublishOptions {
  ExportHiddenFieldsOption?: ExportHiddenFieldsOption;
}
export interface DashboardVisualResult {
  DashboardId?: string;
  DashboardName?: string;
  SheetId?: string;
  SheetName?: string;
  VisualId?: string;
  VisualTitle?: string;
  VisualSubtitle?: string;
  DashboardUrl?: string;
}
export interface DataAggregation {
  DatasetRowDateGranularity?: TopicTimeGranularity;
  DefaultDateColumnName?: string;
}
export interface DataBarsOptions {
  FieldId: string;
  PositiveColor?: string;
  NegativeColor?: string;
}
export type Database = string;

export type DatabaseAccessControlRole = string;

export type DatabaseGroup = string;

export type DatabaseGroupList = Array<string>;
export type DatabaseUser = string;

export interface DatabricksParameters {
  Host: string;
  Port: number;
  SqlEndpointPath: string;
}
export interface DataColor {
  Color?: string;
  DataValue?: number;
}
export interface DataColorPalette {
  Colors?: Array<string>;
  MinMaxGradient?: Array<string>;
  EmptyFillColor?: string;
}
export interface DataFieldSeriesItem {
  FieldId: string;
  FieldValue?: string;
  AxisBinding: AxisBinding;
  Settings?: LineChartSeriesSettings;
}
export type DataLabelContent = "VALUE" | "PERCENT" | "VALUE_AND_PERCENT";
export interface DataLabelOptions {
  Visibility?: Visibility;
  CategoryLabelVisibility?: Visibility;
  MeasureLabelVisibility?: Visibility;
  DataLabelTypes?: Array<DataLabelType>;
  Position?: DataLabelPosition;
  LabelContent?: DataLabelContent;
  LabelFontConfiguration?: FontConfiguration;
  LabelColor?: string;
  Overlap?: DataLabelOverlap;
  TotalsVisibility?: Visibility;
}
export type DataLabelOverlap = "DISABLE_OVERLAP" | "ENABLE_OVERLAP";
export type DataLabelPosition =
  | "INSIDE"
  | "OUTSIDE"
  | "LEFT"
  | "TOP"
  | "BOTTOM"
  | "RIGHT";
export interface DataLabelType {
  FieldLabelType?: FieldLabelType;
  DataPathLabelType?: DataPathLabelType;
  RangeEndsLabelType?: RangeEndsLabelType;
  MinimumLabelType?: MinimumLabelType;
  MaximumLabelType?: MaximumLabelType;
}
export type DataLabelTypes = Array<DataLabelType>;
export interface DataPathColor {
  Element: DataPathValue;
  Color: string;
  TimeGranularity?: TimeGranularity;
}
export type DataPathColorList = Array<DataPathColor>;
export interface DataPathLabelType {
  FieldId?: string;
  FieldValue?: string;
  Visibility?: Visibility;
}
export interface DataPathSort {
  Direction: SortDirection;
  SortPaths: Array<DataPathValue>;
}
export interface DataPathType {
  PivotTableDataPathType?: PivotTableDataPathType;
}
export interface DataPathValue {
  FieldId?: string;
  FieldValue?: string;
  DataPathType?: DataPathType;
}
export type DataPathValueList = Array<DataPathValue>;
export interface DataPointDrillUpDownOption {
  AvailabilityStatus?: DashboardBehavior;
}
export interface DataPointMenuLabelOption {
  AvailabilityStatus?: DashboardBehavior;
}
export interface DataPointTooltipOption {
  AvailabilityStatus?: DashboardBehavior;
}
export interface DataQAEnabledOption {
  AvailabilityStatus?: DashboardBehavior;
}
export interface DataQnAConfigurations {
  Enabled: boolean;
}
export interface DataSet {
  Arn?: string;
  DataSetId?: string;
  Name?: string;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
  PhysicalTableMap?: Record<string, PhysicalTable>;
  LogicalTableMap?: Record<string, LogicalTable>;
  OutputColumns?: Array<OutputColumn>;
  ImportMode?: DataSetImportMode;
  ConsumedSpiceCapacityInBytes?: number;
  ColumnGroups?: Array<ColumnGroup>;
  FieldFolders?: Record<string, FieldFolder>;
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration;
  ColumnLevelPermissionRules?: Array<ColumnLevelPermissionRule>;
  DataSetUsageConfiguration?: DataSetUsageConfiguration;
  DatasetParameters?: Array<DatasetParameter>;
  PerformanceConfiguration?: PerformanceConfiguration;
  UseAs?: DataSetUseAs;
}
export type DataSetArnsList = Array<string>;
export type DataSetCalculatedFieldExpression = string;

export interface DataSetConfiguration {
  Placeholder?: string;
  DataSetSchema?: DataSetSchema;
  ColumnGroupSchemaList?: Array<ColumnGroupSchema>;
}
export type DataSetConfigurationList = Array<DataSetConfiguration>;
export type DataSetFilterAttribute =
  | "QUICKSIGHT_VIEWER_OR_OWNER"
  | "QUICKSIGHT_OWNER"
  | "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER"
  | "DIRECT_QUICKSIGHT_OWNER"
  | "DIRECT_QUICKSIGHT_SOLE_OWNER"
  | "DATASET_NAME";
export type DataSetIdentifier = string;

export interface DataSetIdentifierDeclaration {
  Identifier: string;
  DataSetArn: string;
}
export type DataSetIdentifierDeclarationList =
  Array<DataSetIdentifierDeclaration>;
export type DataSetImportMode = "SPICE" | "DIRECT_QUERY";
export interface DatasetMetadata {
  DatasetArn: string;
  DatasetName?: string;
  DatasetDescription?: string;
  DataAggregation?: DataAggregation;
  Filters?: Array<TopicFilter>;
  Columns?: Array<TopicColumn>;
  CalculatedFields?: Array<TopicCalculatedField>;
  NamedEntities?: Array<TopicNamedEntity>;
}
export type DataSetName = string;

export interface DatasetParameter {
  StringDatasetParameter?: StringDatasetParameter;
  DecimalDatasetParameter?: DecimalDatasetParameter;
  IntegerDatasetParameter?: IntegerDatasetParameter;
  DateTimeDatasetParameter?: DateTimeDatasetParameter;
}
export type DatasetParameterId = string;

export type DatasetParameterList = Array<DatasetParameter>;
export type DatasetParameterName = string;

export type DatasetParameterValueType = "MULTI_VALUED" | "SINGLE_VALUED";
export interface DataSetReference {
  DataSetPlaceholder: string;
  DataSetArn: string;
}
export type DataSetReferenceList = Array<DataSetReference>;
export interface DataSetRefreshProperties {
  RefreshConfiguration?: RefreshConfiguration;
  FailureConfiguration?: RefreshFailureConfiguration;
}
export type DataSetRegion = string;

export type Datasets = Array<DatasetMetadata>;
export interface DataSetSchema {
  ColumnSchemaList?: Array<ColumnSchema>;
}
export interface DataSetSearchFilter {
  Operator: FilterOperator;
  Name: DataSetFilterAttribute;
  Value: string;
}
export type DataSetSearchFilterList = Array<DataSetSearchFilter>;
export interface DataSetSummary {
  Arn?: string;
  DataSetId?: string;
  Name?: string;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
  ImportMode?: DataSetImportMode;
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
  RowLevelPermissionTagConfigurationApplied?: boolean;
  ColumnLevelPermissionRulesApplied?: boolean;
  UseAs?: DataSetUseAs;
}
export type DataSetSummaryList = Array<DataSetSummary>;
export interface DataSetUsageConfiguration {
  DisableUseAsDirectQuerySource?: boolean;
  DisableUseAsImportedSource?: boolean;
}
export type DataSetUseAs = "RLS_RULES";
export interface DataSource {
  Arn?: string;
  DataSourceId?: string;
  Name?: string;
  Type?: DataSourceType;
  Status?: ResourceStatus;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
  DataSourceParameters?: DataSourceParameters;
  AlternateDataSourceParameters?: Array<DataSourceParameters>;
  VpcConnectionProperties?: VpcConnectionProperties;
  SslProperties?: SslProperties;
  ErrorInfo?: DataSourceErrorInfo;
  SecretArn?: string;
}
export interface DataSourceCredentials {
  CredentialPair?: CredentialPair;
  CopySourceArn?: string;
  SecretArn?: string;
}
export interface DataSourceErrorInfo {
  Type?: DataSourceErrorInfoType;
  Message?: string;
}
export type DataSourceErrorInfoType =
  | "ACCESS_DENIED"
  | "COPY_SOURCE_NOT_FOUND"
  | "TIMEOUT"
  | "ENGINE_VERSION_NOT_SUPPORTED"
  | "UNKNOWN_HOST"
  | "GENERIC_SQL_FAILURE"
  | "CONFLICT"
  | "UNKNOWN";
export type DataSourceFilterAttribute =
  | "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER"
  | "DIRECT_QUICKSIGHT_OWNER"
  | "DIRECT_QUICKSIGHT_SOLE_OWNER"
  | "DATASOURCE_NAME";
export type DataSourceList = Array<DataSource>;
export type DataSourceParameters =
  | { AmazonElasticsearchParameters: AmazonElasticsearchParameters }
  | { AthenaParameters: AthenaParameters }
  | { AuroraParameters: AuroraParameters }
  | { AuroraPostgreSqlParameters: AuroraPostgreSqlParameters }
  | { AwsIotAnalyticsParameters: AwsIotAnalyticsParameters }
  | { JiraParameters: JiraParameters }
  | { MariaDbParameters: MariaDbParameters }
  | { MySqlParameters: MySqlParameters }
  | { OracleParameters: OracleParameters }
  | { PostgreSqlParameters: PostgreSqlParameters }
  | { PrestoParameters: PrestoParameters }
  | { RdsParameters: RdsParameters }
  | { RedshiftParameters: RedshiftParameters }
  | { S3Parameters: S3Parameters }
  | { ServiceNowParameters: ServiceNowParameters }
  | { SnowflakeParameters: SnowflakeParameters }
  | { SparkParameters: SparkParameters }
  | { SqlServerParameters: SqlServerParameters }
  | { TeradataParameters: TeradataParameters }
  | { TwitterParameters: TwitterParameters }
  | { AmazonOpenSearchParameters: AmazonOpenSearchParameters }
  | { ExasolParameters: ExasolParameters }
  | { DatabricksParameters: DatabricksParameters }
  | { StarburstParameters: StarburstParameters }
  | { TrinoParameters: TrinoParameters }
  | { BigQueryParameters: BigQueryParameters };
export type DataSourceParametersList = Array<DataSourceParameters>;
export interface DataSourceSearchFilter {
  Operator: FilterOperator;
  Name: DataSourceFilterAttribute;
  Value: string;
}
export type DataSourceSearchFilterList = Array<DataSourceSearchFilter>;
export interface DataSourceSummary {
  Arn?: string;
  DataSourceId?: string;
  Name?: string;
  Type?: DataSourceType;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
}
export type DataSourceSummaryList = Array<DataSourceSummary>;
export type DataSourceType =
  | "ADOBE_ANALYTICS"
  | "AMAZON_ELASTICSEARCH"
  | "ATHENA"
  | "AURORA"
  | "AURORA_POSTGRESQL"
  | "AWS_IOT_ANALYTICS"
  | "GITHUB"
  | "JIRA"
  | "MARIADB"
  | "MYSQL"
  | "ORACLE"
  | "POSTGRESQL"
  | "PRESTO"
  | "REDSHIFT"
  | "S3"
  | "SALESFORCE"
  | "SERVICENOW"
  | "SNOWFLAKE"
  | "SPARK"
  | "SQLSERVER"
  | "TERADATA"
  | "TWITTER"
  | "TIMESTREAM"
  | "AMAZON_OPENSEARCH"
  | "EXASOL"
  | "DATABRICKS"
  | "STARBURST"
  | "TRINO"
  | "BIGQUERY";
export interface DataStoriesConfigurations {
  Enabled: boolean;
}
export type DateAggregationFunction =
  | "COUNT"
  | "DISTINCT_COUNT"
  | "MIN"
  | "MAX";
export interface DateAxisOptions {
  MissingDateVisibility?: Visibility;
}
export interface DateDimensionField {
  FieldId: string;
  Column: ColumnIdentifier;
  DateGranularity?: TimeGranularity;
  HierarchyId?: string;
  FormatConfiguration?: DateTimeFormatConfiguration;
}
export interface DateMeasureField {
  FieldId: string;
  Column: ColumnIdentifier;
  AggregationFunction?: DateAggregationFunction;
  FormatConfiguration?: DateTimeFormatConfiguration;
}
export interface DateTimeDatasetParameter {
  Id: string;
  Name: string;
  ValueType: DatasetParameterValueType;
  TimeGranularity?: TimeGranularity;
  DefaultValues?: DateTimeDatasetParameterDefaultValues;
}
export type DateTimeDatasetParameterDefaultValue = Date | string;

export interface DateTimeDatasetParameterDefaultValues {
  StaticValues?: Array<Date | string>;
}
export type DateTimeDatasetParameterValueList = Array<Date | string>;
export type DateTimeDefaultValueList = Array<Date | string>;
export interface DateTimeDefaultValues {
  DynamicValue?: DynamicDefaultValue;
  StaticValues?: Array<Date | string>;
  RollingDate?: RollingDateConfiguration;
}
export type DateTimeFormat = string;

export interface DateTimeFormatConfiguration {
  DateTimeFormat?: string;
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
  NumericFormatConfiguration?: NumericFormatConfiguration;
}
export interface DateTimeHierarchy {
  HierarchyId: string;
  DrillDownFilters?: Array<DrillDownFilter>;
}
export interface DateTimeParameter {
  Name: string;
  Values: Array<Date | string>;
}
export interface DateTimeParameterDeclaration {
  Name: string;
  DefaultValues?: DateTimeDefaultValues;
  TimeGranularity?: TimeGranularity;
  ValueWhenUnset?: DateTimeValueWhenUnsetConfiguration;
  MappedDataSetParameters?: Array<MappedDataSetParameter>;
}
export type DateTimeParameterList = Array<DateTimeParameter>;
export interface DateTimePickerControlDisplayOptions {
  TitleOptions?: LabelOptions;
  DateTimeFormat?: string;
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
  HelperTextVisibility?: Visibility;
  DateIconVisibility?: Visibility;
}
export interface DateTimeValueWhenUnsetConfiguration {
  ValueWhenUnsetOption?: ValueWhenUnsetOption;
  CustomValue?: Date | string;
}
export type DayOfMonth = string;

export type DayOfTheWeek =
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY";
export type DayOfWeek =
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY";
export type DbUsername = string;

export interface DecimalDatasetParameter {
  Id: string;
  Name: string;
  ValueType: DatasetParameterValueType;
  DefaultValues?: DecimalDatasetParameterDefaultValues;
}
export type DecimalDatasetParameterDefaultValue = number;

export interface DecimalDatasetParameterDefaultValues {
  StaticValues?: Array<number>;
}
export type DecimalDatasetParameterValueList = Array<number>;
export type DecimalDefaultValueList = Array<number>;
export interface DecimalDefaultValues {
  DynamicValue?: DynamicDefaultValue;
  StaticValues?: Array<number>;
}
export interface DecimalParameter {
  Name: string;
  Values: Array<number>;
}
export interface DecimalParameterDeclaration {
  ParameterValueType: ParameterValueType;
  Name: string;
  DefaultValues?: DecimalDefaultValues;
  ValueWhenUnset?: DecimalValueWhenUnsetConfiguration;
  MappedDataSetParameters?: Array<MappedDataSetParameter>;
}
export type DecimalParameterList = Array<DecimalParameter>;
export type DecimalPlaces = number;

export interface DecimalPlacesConfiguration {
  DecimalPlaces: number;
}
export interface DecimalValueWhenUnsetConfiguration {
  ValueWhenUnsetOption?: ValueWhenUnsetOption;
  CustomValue?: number;
}
export type DefaultAggregation =
  | "SUM"
  | "MAX"
  | "MIN"
  | "COUNT"
  | "DISTINCT_COUNT"
  | "AVERAGE"
  | "MEDIAN"
  | "STDEV"
  | "STDEVP"
  | "VAR"
  | "VARP";
export interface DefaultDateTimePickerControlOptions {
  Type?: SheetControlDateTimePickerType;
  DisplayOptions?: DateTimePickerControlDisplayOptions;
  CommitMode?: CommitMode;
}
export interface DefaultFilterControlConfiguration {
  Title: string;
  ControlOptions: DefaultFilterControlOptions;
}
export interface DefaultFilterControlOptions {
  DefaultDateTimePickerOptions?: DefaultDateTimePickerControlOptions;
  DefaultListOptions?: DefaultFilterListControlOptions;
  DefaultDropdownOptions?: DefaultFilterDropDownControlOptions;
  DefaultTextFieldOptions?: DefaultTextFieldControlOptions;
  DefaultTextAreaOptions?: DefaultTextAreaControlOptions;
  DefaultSliderOptions?: DefaultSliderControlOptions;
  DefaultRelativeDateTimeOptions?: DefaultRelativeDateTimeControlOptions;
}
export interface DefaultFilterDropDownControlOptions {
  DisplayOptions?: DropDownControlDisplayOptions;
  Type?: SheetControlListType;
  SelectableValues?: FilterSelectableValues;
  CommitMode?: CommitMode;
}
export interface DefaultFilterListControlOptions {
  DisplayOptions?: ListControlDisplayOptions;
  Type?: SheetControlListType;
  SelectableValues?: FilterSelectableValues;
}
export interface DefaultFormatting {
  DisplayFormat?: DisplayFormat;
  DisplayFormatOptions?: DisplayFormatOptions;
}
export interface DefaultFreeFormLayoutConfiguration {
  CanvasSizeOptions: FreeFormLayoutCanvasSizeOptions;
}
export interface DefaultGridLayoutConfiguration {
  CanvasSizeOptions: GridLayoutCanvasSizeOptions;
}
export interface DefaultInteractiveLayoutConfiguration {
  Grid?: DefaultGridLayoutConfiguration;
  FreeForm?: DefaultFreeFormLayoutConfiguration;
}
export interface DefaultNewSheetConfiguration {
  InteractiveLayoutConfiguration?: DefaultInteractiveLayoutConfiguration;
  PaginatedLayoutConfiguration?: DefaultPaginatedLayoutConfiguration;
  SheetContentType?: SheetContentType;
}
export interface DefaultPaginatedLayoutConfiguration {
  SectionBased?: DefaultSectionBasedLayoutConfiguration;
}
export interface DefaultRelativeDateTimeControlOptions {
  DisplayOptions?: RelativeDateTimeControlDisplayOptions;
  CommitMode?: CommitMode;
}
export interface DefaultSectionBasedLayoutConfiguration {
  CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptions;
}
export interface DefaultSliderControlOptions {
  DisplayOptions?: SliderControlDisplayOptions;
  Type?: SheetControlSliderType;
  MaximumValue: number;
  MinimumValue: number;
  StepSize: number;
}
export interface DefaultTextAreaControlOptions {
  Delimiter?: string;
  DisplayOptions?: TextAreaControlDisplayOptions;
}
export interface DefaultTextFieldControlOptions {
  DisplayOptions?: TextFieldControlDisplayOptions;
}
export interface DeleteAccountCustomizationRequest {
  AwsAccountId: string;
  Namespace?: string;
}
export interface DeleteAccountCustomizationResponse {
  RequestId?: string;
  Status?: number;
}
export interface DeleteAccountSubscriptionRequest {
  AwsAccountId: string;
}
export interface DeleteAccountSubscriptionResponse {
  RequestId?: string;
  Status?: number;
}
export interface DeleteAnalysisRequest {
  AwsAccountId: string;
  AnalysisId: string;
  RecoveryWindowInDays?: number;
  ForceDeleteWithoutRecovery?: boolean;
}
export interface DeleteAnalysisResponse {
  Status?: number;
  Arn?: string;
  AnalysisId?: string;
  DeletionTime?: Date | string;
  RequestId?: string;
}
export interface DeleteBrandAssignmentRequest {
  AwsAccountId: string;
}
export interface DeleteBrandAssignmentResponse {
  RequestId?: string;
}
export interface DeleteBrandRequest {
  AwsAccountId: string;
  BrandId: string;
}
export interface DeleteBrandResponse {
  RequestId?: string;
}
export interface DeleteCustomPermissionsRequest {
  AwsAccountId: string;
  CustomPermissionsName: string;
}
export interface DeleteCustomPermissionsResponse {
  Status?: number;
  Arn?: string;
  RequestId?: string;
}
export interface DeleteDashboardRequest {
  AwsAccountId: string;
  DashboardId: string;
  VersionNumber?: number;
}
export interface DeleteDashboardResponse {
  Status?: number;
  Arn?: string;
  DashboardId?: string;
  RequestId?: string;
}
export interface DeleteDataSetRefreshPropertiesRequest {
  AwsAccountId: string;
  DataSetId: string;
}
export interface DeleteDataSetRefreshPropertiesResponse {
  RequestId?: string;
  Status?: number;
}
export interface DeleteDataSetRequest {
  AwsAccountId: string;
  DataSetId: string;
}
export interface DeleteDataSetResponse {
  Arn?: string;
  DataSetId?: string;
  RequestId?: string;
  Status?: number;
}
export interface DeleteDataSourceRequest {
  AwsAccountId: string;
  DataSourceId: string;
}
export interface DeleteDataSourceResponse {
  Arn?: string;
  DataSourceId?: string;
  RequestId?: string;
  Status?: number;
}
export interface DeleteDefaultQBusinessApplicationRequest {
  AwsAccountId: string;
  Namespace?: string;
}
export interface DeleteDefaultQBusinessApplicationResponse {
  RequestId?: string;
  Status?: number;
}
export interface DeleteFolderMembershipRequest {
  AwsAccountId: string;
  FolderId: string;
  MemberId: string;
  MemberType: MemberType;
}
export interface DeleteFolderMembershipResponse {
  Status?: number;
  RequestId?: string;
}
export interface DeleteFolderRequest {
  AwsAccountId: string;
  FolderId: string;
}
export interface DeleteFolderResponse {
  Status?: number;
  Arn?: string;
  FolderId?: string;
  RequestId?: string;
}
export interface DeleteGroupMembershipRequest {
  MemberName: string;
  GroupName: string;
  AwsAccountId: string;
  Namespace: string;
}
export interface DeleteGroupMembershipResponse {
  RequestId?: string;
  Status?: number;
}
export interface DeleteGroupRequest {
  GroupName: string;
  AwsAccountId: string;
  Namespace: string;
}
export interface DeleteGroupResponse {
  RequestId?: string;
  Status?: number;
}
export interface DeleteIAMPolicyAssignmentRequest {
  AwsAccountId: string;
  AssignmentName: string;
  Namespace: string;
}
export interface DeleteIAMPolicyAssignmentResponse {
  AssignmentName?: string;
  RequestId?: string;
  Status?: number;
}
export interface DeleteIdentityPropagationConfigRequest {
  AwsAccountId: string;
  Service: ServiceType;
}
export interface DeleteIdentityPropagationConfigResponse {
  RequestId?: string;
  Status?: number;
}
export interface DeleteNamespaceRequest {
  AwsAccountId: string;
  Namespace: string;
}
export interface DeleteNamespaceResponse {
  RequestId?: string;
  Status?: number;
}
export interface DeleteRefreshScheduleRequest {
  DataSetId: string;
  AwsAccountId: string;
  ScheduleId: string;
}
export interface DeleteRefreshScheduleResponse {
  Status?: number;
  RequestId?: string;
  ScheduleId?: string;
  Arn?: string;
}
export interface DeleteRoleCustomPermissionRequest {
  Role: Role;
  AwsAccountId: string;
  Namespace: string;
}
export interface DeleteRoleCustomPermissionResponse {
  RequestId?: string;
  Status?: number;
}
export interface DeleteRoleMembershipRequest {
  MemberName: string;
  Role: Role;
  AwsAccountId: string;
  Namespace: string;
}
export interface DeleteRoleMembershipResponse {
  RequestId?: string;
  Status?: number;
}
export interface DeleteTemplateAliasRequest {
  AwsAccountId: string;
  TemplateId: string;
  AliasName: string;
}
export interface DeleteTemplateAliasResponse {
  Status?: number;
  TemplateId?: string;
  AliasName?: string;
  Arn?: string;
  RequestId?: string;
}
export interface DeleteTemplateRequest {
  AwsAccountId: string;
  TemplateId: string;
  VersionNumber?: number;
}
export interface DeleteTemplateResponse {
  RequestId?: string;
  Arn?: string;
  TemplateId?: string;
  Status?: number;
}
export interface DeleteThemeAliasRequest {
  AwsAccountId: string;
  ThemeId: string;
  AliasName: string;
}
export interface DeleteThemeAliasResponse {
  AliasName?: string;
  Arn?: string;
  RequestId?: string;
  Status?: number;
  ThemeId?: string;
}
export interface DeleteThemeRequest {
  AwsAccountId: string;
  ThemeId: string;
  VersionNumber?: number;
}
export interface DeleteThemeResponse {
  Arn?: string;
  RequestId?: string;
  Status?: number;
  ThemeId?: string;
}
export interface DeleteTopicRefreshScheduleRequest {
  AwsAccountId: string;
  TopicId: string;
  DatasetId: string;
}
export interface DeleteTopicRefreshScheduleResponse {
  TopicId?: string;
  TopicArn?: string;
  DatasetArn?: string;
  Status?: number;
  RequestId?: string;
}
export interface DeleteTopicRequest {
  AwsAccountId: string;
  TopicId: string;
}
export interface DeleteTopicResponse {
  Arn?: string;
  TopicId?: string;
  RequestId?: string;
  Status?: number;
}
export interface DeleteUserByPrincipalIdRequest {
  PrincipalId: string;
  AwsAccountId: string;
  Namespace: string;
}
export interface DeleteUserByPrincipalIdResponse {
  RequestId?: string;
  Status?: number;
}
export interface DeleteUserCustomPermissionRequest {
  UserName: string;
  AwsAccountId: string;
  Namespace: string;
}
export interface DeleteUserCustomPermissionResponse {
  RequestId?: string;
  Status?: number;
}
export interface DeleteUserRequest {
  UserName: string;
  AwsAccountId: string;
  Namespace: string;
}
export interface DeleteUserResponse {
  RequestId?: string;
  Status?: number;
}
export interface DeleteVPCConnectionRequest {
  AwsAccountId: string;
  VPCConnectionId: string;
}
export interface DeleteVPCConnectionResponse {
  Arn?: string;
  VPCConnectionId?: string;
  DeletionStatus?: VPCConnectionResourceStatus;
  AvailabilityStatus?: VPCConnectionAvailabilityStatus;
  RequestId?: string;
  Status?: number;
}
export type Delimiter = string;

export interface DescribeAccountCustomizationRequest {
  AwsAccountId: string;
  Namespace?: string;
  Resolved?: boolean;
}
export interface DescribeAccountCustomizationResponse {
  Arn?: string;
  AwsAccountId?: string;
  Namespace?: string;
  AccountCustomization?: AccountCustomization;
  RequestId?: string;
  Status?: number;
}
export interface DescribeAccountSettingsRequest {
  AwsAccountId: string;
}
export interface DescribeAccountSettingsResponse {
  AccountSettings?: AccountSettings;
  RequestId?: string;
  Status?: number;
}
export interface DescribeAccountSubscriptionRequest {
  AwsAccountId: string;
}
export interface DescribeAccountSubscriptionResponse {
  AccountInfo?: AccountInfo;
  Status?: number;
  RequestId?: string;
}
export interface DescribeAnalysisDefinitionRequest {
  AwsAccountId: string;
  AnalysisId: string;
}
export interface DescribeAnalysisDefinitionResponse {
  AnalysisId?: string;
  Name?: string;
  Errors?: Array<AnalysisError>;
  ResourceStatus?: ResourceStatus;
  ThemeArn?: string;
  Definition?: AnalysisDefinition;
  Status?: number;
  RequestId?: string;
}
export interface DescribeAnalysisPermissionsRequest {
  AwsAccountId: string;
  AnalysisId: string;
}
export interface DescribeAnalysisPermissionsResponse {
  AnalysisId?: string;
  AnalysisArn?: string;
  Permissions?: Array<ResourcePermission>;
  Status?: number;
  RequestId?: string;
}
export interface DescribeAnalysisRequest {
  AwsAccountId: string;
  AnalysisId: string;
}
export interface DescribeAnalysisResponse {
  Analysis?: Analysis;
  Status?: number;
  RequestId?: string;
}
export interface DescribeAssetBundleExportJobRequest {
  AwsAccountId: string;
  AssetBundleExportJobId: string;
}
export interface DescribeAssetBundleExportJobResponse {
  JobStatus?: AssetBundleExportJobStatus;
  DownloadUrl?: string;
  Errors?: Array<AssetBundleExportJobError>;
  Arn?: string;
  CreatedTime?: Date | string;
  AssetBundleExportJobId?: string;
  AwsAccountId?: string;
  ResourceArns?: Array<string>;
  IncludeAllDependencies?: boolean;
  ExportFormat?: AssetBundleExportFormat;
  CloudFormationOverridePropertyConfiguration?: AssetBundleCloudFormationOverridePropertyConfiguration;
  RequestId?: string;
  Status?: number;
  IncludePermissions?: boolean;
  IncludeTags?: boolean;
  ValidationStrategy?: AssetBundleExportJobValidationStrategy;
  Warnings?: Array<AssetBundleExportJobWarning>;
  IncludeFolderMemberships?: boolean;
  IncludeFolderMembers?: IncludeFolderMembers;
}
export interface DescribeAssetBundleImportJobRequest {
  AwsAccountId: string;
  AssetBundleImportJobId: string;
}
export interface DescribeAssetBundleImportJobResponse {
  JobStatus?: AssetBundleImportJobStatus;
  Errors?: Array<AssetBundleImportJobError>;
  RollbackErrors?: Array<AssetBundleImportJobError>;
  Arn?: string;
  CreatedTime?: Date | string;
  AssetBundleImportJobId?: string;
  AwsAccountId?: string;
  AssetBundleImportSource?: AssetBundleImportSourceDescription;
  OverrideParameters?: AssetBundleImportJobOverrideParameters;
  FailureAction?: AssetBundleImportFailureAction;
  RequestId?: string;
  Status?: number;
  OverridePermissions?: AssetBundleImportJobOverridePermissions;
  OverrideTags?: AssetBundleImportJobOverrideTags;
  OverrideValidationStrategy?: AssetBundleImportJobOverrideValidationStrategy;
  Warnings?: Array<AssetBundleImportJobWarning>;
}
export interface DescribeBrandAssignmentRequest {
  AwsAccountId: string;
}
export interface DescribeBrandAssignmentResponse {
  RequestId?: string;
  BrandArn?: string;
}
export interface DescribeBrandPublishedVersionRequest {
  AwsAccountId: string;
  BrandId: string;
}
export interface DescribeBrandPublishedVersionResponse {
  RequestId?: string;
  BrandDetail?: BrandDetail;
  BrandDefinition?: BrandDefinition;
}
export interface DescribeBrandRequest {
  AwsAccountId: string;
  BrandId: string;
  VersionId?: string;
}
export interface DescribeBrandResponse {
  RequestId?: string;
  BrandDetail?: BrandDetail;
  BrandDefinition?: BrandDefinition;
}
export interface DescribeCustomPermissionsRequest {
  AwsAccountId: string;
  CustomPermissionsName: string;
}
export interface DescribeCustomPermissionsResponse {
  Status?: number;
  CustomPermissions?: CustomPermissions;
  RequestId?: string;
}
export interface DescribeDashboardDefinitionRequest {
  AwsAccountId: string;
  DashboardId: string;
  VersionNumber?: number;
  AliasName?: string;
}
export interface DescribeDashboardDefinitionResponse {
  DashboardId?: string;
  Errors?: Array<DashboardError>;
  Name?: string;
  ResourceStatus?: ResourceStatus;
  ThemeArn?: string;
  Definition?: DashboardVersionDefinition;
  Status?: number;
  RequestId?: string;
  DashboardPublishOptions?: DashboardPublishOptions;
}
export interface DescribeDashboardPermissionsRequest {
  AwsAccountId: string;
  DashboardId: string;
}
export interface DescribeDashboardPermissionsResponse {
  DashboardId?: string;
  DashboardArn?: string;
  Permissions?: Array<ResourcePermission>;
  Status?: number;
  RequestId?: string;
  LinkSharingConfiguration?: LinkSharingConfiguration;
}
export interface DescribeDashboardRequest {
  AwsAccountId: string;
  DashboardId: string;
  VersionNumber?: number;
  AliasName?: string;
}
export interface DescribeDashboardResponse {
  Dashboard?: Dashboard;
  Status?: number;
  RequestId?: string;
}
export interface DescribeDashboardSnapshotJobRequest {
  AwsAccountId: string;
  DashboardId: string;
  SnapshotJobId: string;
}
export interface DescribeDashboardSnapshotJobResponse {
  AwsAccountId?: string;
  DashboardId?: string;
  SnapshotJobId?: string;
  UserConfiguration?: SnapshotUserConfigurationRedacted;
  SnapshotConfiguration?: SnapshotConfiguration;
  Arn?: string;
  JobStatus?: SnapshotJobStatus;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
  RequestId?: string;
  Status?: number;
}
export interface DescribeDashboardSnapshotJobResultRequest {
  AwsAccountId: string;
  DashboardId: string;
  SnapshotJobId: string;
}
export interface DescribeDashboardSnapshotJobResultResponse {
  Arn?: string;
  JobStatus?: SnapshotJobStatus;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
  Result?: SnapshotJobResult;
  ErrorInfo?: SnapshotJobErrorInfo;
  RequestId?: string;
  Status?: number;
}
export interface DescribeDashboardsQAConfigurationRequest {
  AwsAccountId: string;
}
export interface DescribeDashboardsQAConfigurationResponse {
  DashboardsQAStatus?: DashboardsQAStatus;
  RequestId?: string;
  Status?: number;
}
export interface DescribeDataSetPermissionsRequest {
  AwsAccountId: string;
  DataSetId: string;
}
export interface DescribeDataSetPermissionsResponse {
  DataSetArn?: string;
  DataSetId?: string;
  Permissions?: Array<ResourcePermission>;
  RequestId?: string;
  Status?: number;
}
export interface DescribeDataSetRefreshPropertiesRequest {
  AwsAccountId: string;
  DataSetId: string;
}
export interface DescribeDataSetRefreshPropertiesResponse {
  RequestId?: string;
  Status?: number;
  DataSetRefreshProperties?: DataSetRefreshProperties;
}
export interface DescribeDataSetRequest {
  AwsAccountId: string;
  DataSetId: string;
}
export interface DescribeDataSetResponse {
  DataSet?: DataSet;
  RequestId?: string;
  Status?: number;
}
export interface DescribeDataSourcePermissionsRequest {
  AwsAccountId: string;
  DataSourceId: string;
}
export interface DescribeDataSourcePermissionsResponse {
  DataSourceArn?: string;
  DataSourceId?: string;
  Permissions?: Array<ResourcePermission>;
  RequestId?: string;
  Status?: number;
}
export interface DescribeDataSourceRequest {
  AwsAccountId: string;
  DataSourceId: string;
}
export interface DescribeDataSourceResponse {
  DataSource?: DataSource;
  RequestId?: string;
  Status?: number;
}
export interface DescribeDefaultQBusinessApplicationRequest {
  AwsAccountId: string;
  Namespace?: string;
}
export interface DescribeDefaultQBusinessApplicationResponse {
  RequestId?: string;
  Status?: number;
  ApplicationId?: string;
}
export interface DescribeFolderPermissionsRequest {
  AwsAccountId: string;
  FolderId: string;
  Namespace?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeFolderPermissionsResponse {
  Status?: number;
  FolderId?: string;
  Arn?: string;
  Permissions?: Array<ResourcePermission>;
  RequestId?: string;
  NextToken?: string;
}
export interface DescribeFolderRequest {
  AwsAccountId: string;
  FolderId: string;
}
export interface DescribeFolderResolvedPermissionsRequest {
  AwsAccountId: string;
  FolderId: string;
  Namespace?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeFolderResolvedPermissionsResponse {
  Status?: number;
  FolderId?: string;
  Arn?: string;
  Permissions?: Array<ResourcePermission>;
  RequestId?: string;
  NextToken?: string;
}
export interface DescribeFolderResponse {
  Status?: number;
  Folder?: Folder;
  RequestId?: string;
}
export interface DescribeGroupMembershipRequest {
  MemberName: string;
  GroupName: string;
  AwsAccountId: string;
  Namespace: string;
}
export interface DescribeGroupMembershipResponse {
  GroupMember?: GroupMember;
  RequestId?: string;
  Status?: number;
}
export interface DescribeGroupRequest {
  GroupName: string;
  AwsAccountId: string;
  Namespace: string;
}
export interface DescribeGroupResponse {
  Group?: Group;
  RequestId?: string;
  Status?: number;
}
export interface DescribeIAMPolicyAssignmentRequest {
  AwsAccountId: string;
  AssignmentName: string;
  Namespace: string;
}
export interface DescribeIAMPolicyAssignmentResponse {
  IAMPolicyAssignment?: IAMPolicyAssignment;
  RequestId?: string;
  Status?: number;
}
export interface DescribeIngestionRequest {
  AwsAccountId: string;
  DataSetId: string;
  IngestionId: string;
}
export interface DescribeIngestionResponse {
  Ingestion?: Ingestion;
  RequestId?: string;
  Status?: number;
}
export interface DescribeIpRestrictionRequest {
  AwsAccountId: string;
}
export interface DescribeIpRestrictionResponse {
  AwsAccountId?: string;
  IpRestrictionRuleMap?: Record<string, string>;
  VpcIdRestrictionRuleMap?: Record<string, string>;
  VpcEndpointIdRestrictionRuleMap?: Record<string, string>;
  Enabled?: boolean;
  RequestId?: string;
  Status?: number;
}
export interface DescribeKeyRegistrationRequest {
  AwsAccountId: string;
  DefaultKeyOnly?: boolean;
}
export interface DescribeKeyRegistrationResponse {
  AwsAccountId?: string;
  KeyRegistration?: Array<RegisteredCustomerManagedKey>;
  RequestId?: string;
  Status?: number;
}
export interface DescribeNamespaceRequest {
  AwsAccountId: string;
  Namespace: string;
}
export interface DescribeNamespaceResponse {
  Namespace?: NamespaceInfoV2;
  RequestId?: string;
  Status?: number;
}
export interface DescribeQPersonalizationConfigurationRequest {
  AwsAccountId: string;
}
export interface DescribeQPersonalizationConfigurationResponse {
  PersonalizationMode?: PersonalizationMode;
  RequestId?: string;
  Status?: number;
}
export interface DescribeQuickSightQSearchConfigurationRequest {
  AwsAccountId: string;
}
export interface DescribeQuickSightQSearchConfigurationResponse {
  QSearchStatus?: QSearchStatus;
  RequestId?: string;
  Status?: number;
}
export interface DescribeRefreshScheduleRequest {
  AwsAccountId: string;
  DataSetId: string;
  ScheduleId: string;
}
export interface DescribeRefreshScheduleResponse {
  RefreshSchedule?: RefreshSchedule;
  Status?: number;
  RequestId?: string;
  Arn?: string;
}
export interface DescribeRoleCustomPermissionRequest {
  Role: Role;
  AwsAccountId: string;
  Namespace: string;
}
export interface DescribeRoleCustomPermissionResponse {
  CustomPermissionsName?: string;
  RequestId?: string;
  Status?: number;
}
export interface DescribeTemplateAliasRequest {
  AwsAccountId: string;
  TemplateId: string;
  AliasName: string;
}
export interface DescribeTemplateAliasResponse {
  TemplateAlias?: TemplateAlias;
  Status?: number;
  RequestId?: string;
}
export interface DescribeTemplateDefinitionRequest {
  AwsAccountId: string;
  TemplateId: string;
  VersionNumber?: number;
  AliasName?: string;
}
export interface DescribeTemplateDefinitionResponse {
  Name?: string;
  TemplateId?: string;
  Errors?: Array<TemplateError>;
  ResourceStatus?: ResourceStatus;
  ThemeArn?: string;
  Definition?: TemplateVersionDefinition;
  Status?: number;
  RequestId?: string;
}
export interface DescribeTemplatePermissionsRequest {
  AwsAccountId: string;
  TemplateId: string;
}
export interface DescribeTemplatePermissionsResponse {
  TemplateId?: string;
  TemplateArn?: string;
  Permissions?: Array<ResourcePermission>;
  RequestId?: string;
  Status?: number;
}
export interface DescribeTemplateRequest {
  AwsAccountId: string;
  TemplateId: string;
  VersionNumber?: number;
  AliasName?: string;
}
export interface DescribeTemplateResponse {
  Template?: Template;
  Status?: number;
  RequestId?: string;
}
export interface DescribeThemeAliasRequest {
  AwsAccountId: string;
  ThemeId: string;
  AliasName: string;
}
export interface DescribeThemeAliasResponse {
  ThemeAlias?: ThemeAlias;
  Status?: number;
  RequestId?: string;
}
export interface DescribeThemePermissionsRequest {
  AwsAccountId: string;
  ThemeId: string;
}
export interface DescribeThemePermissionsResponse {
  ThemeId?: string;
  ThemeArn?: string;
  Permissions?: Array<ResourcePermission>;
  RequestId?: string;
  Status?: number;
}
export interface DescribeThemeRequest {
  AwsAccountId: string;
  ThemeId: string;
  VersionNumber?: number;
  AliasName?: string;
}
export interface DescribeThemeResponse {
  Theme?: Theme;
  Status?: number;
  RequestId?: string;
}
export interface DescribeTopicPermissionsRequest {
  AwsAccountId: string;
  TopicId: string;
}
export interface DescribeTopicPermissionsResponse {
  TopicId?: string;
  TopicArn?: string;
  Permissions?: Array<ResourcePermission>;
  Status?: number;
  RequestId?: string;
}
export interface DescribeTopicRefreshRequest {
  AwsAccountId: string;
  TopicId: string;
  RefreshId: string;
}
export interface DescribeTopicRefreshResponse {
  RefreshDetails?: TopicRefreshDetails;
  RequestId?: string;
  Status?: number;
}
export interface DescribeTopicRefreshScheduleRequest {
  AwsAccountId: string;
  TopicId: string;
  DatasetId: string;
}
export interface DescribeTopicRefreshScheduleResponse {
  TopicId?: string;
  TopicArn?: string;
  DatasetArn?: string;
  RefreshSchedule?: TopicRefreshSchedule;
  Status?: number;
  RequestId?: string;
}
export interface DescribeTopicRequest {
  AwsAccountId: string;
  TopicId: string;
}
export interface DescribeTopicResponse {
  Arn?: string;
  TopicId?: string;
  Topic?: TopicDetails;
  RequestId?: string;
  Status?: number;
}
export interface DescribeUserRequest {
  UserName: string;
  AwsAccountId: string;
  Namespace: string;
}
export interface DescribeUserResponse {
  User?: User;
  RequestId?: string;
  Status?: number;
}
export interface DescribeVPCConnectionRequest {
  AwsAccountId: string;
  VPCConnectionId: string;
}
export interface DescribeVPCConnectionResponse {
  VPCConnection?: VPCConnection;
  RequestId?: string;
  Status?: number;
}
export type Description = string;

export interface DestinationParameterValueConfiguration {
  CustomValuesConfiguration?: CustomValuesConfiguration;
  SelectAllValueOptions?: SelectAllValueOptions;
  SourceParameterName?: string;
  SourceField?: string;
  SourceColumn?: ColumnIdentifier;
}
export type DigitGroupingStyle = "DEFAULT" | "LAKHS";
export interface DimensionField {
  NumericalDimensionField?: NumericalDimensionField;
  CategoricalDimensionField?: CategoricalDimensionField;
  DateDimensionField?: DateDimensionField;
}
export type DimensionFieldList = Array<DimensionField>;
export type DisplayFormat =
  | "AUTO"
  | "PERCENT"
  | "CURRENCY"
  | "NUMBER"
  | "DATE"
  | "STRING";
export interface DisplayFormatOptions {
  UseBlankCellFormat?: boolean;
  BlankCellFormat?: string;
  DateFormat?: string;
  DecimalSeparator?: TopicNumericSeparatorSymbol;
  GroupingSeparator?: string;
  UseGrouping?: boolean;
  FractionDigits?: number;
  Prefix?: string;
  Suffix?: string;
  UnitScaler?: NumberScale;
  NegativeFormat?: NegativeFormat;
  CurrencySymbol?: string;
}
export type DnsResolverList = Array<string>;
export type Domain = string;

export declare class DomainNotWhitelistedException extends EffectData.TaggedError(
  "DomainNotWhitelistedException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface DonutCenterOptions {
  LabelVisibility?: Visibility;
}
export interface DonutOptions {
  ArcOptions?: ArcOptions;
  DonutCenterOptions?: DonutCenterOptions;
}
export type Double = number;

export interface DrillDownFilter {
  NumericEqualityFilter?: NumericEqualityDrillDownFilter;
  CategoryFilter?: CategoryDrillDownFilter;
  TimeRangeFilter?: TimeRangeDrillDownFilter;
}
export type DrillDownFilterList = Array<DrillDownFilter>;
export interface DropDownControlDisplayOptions {
  SelectAllOptions?: ListControlSelectAllOptions;
  TitleOptions?: LabelOptions;
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
}
export interface DynamicDefaultValue {
  UserNameColumn?: ColumnIdentifier;
  GroupNameColumn?: ColumnIdentifier;
  DefaultValueColumn: ColumnIdentifier;
}
export type Edition = "STANDARD" | "ENTERPRISE" | "ENTERPRISE_AND_Q";
export type EmbeddingIdentityType = "IAM" | "QUICKSIGHT" | "ANONYMOUS";
export type EmbeddingUrl = string;

export interface EmptyVisual {
  VisualId: string;
  DataSetIdentifier: string;
  Actions?: Array<VisualCustomAction>;
}
export interface Entity {
  Path?: string;
}
export type EntityList = Array<Entity>;
export type EntryPath = string;

export type EntryPoint = string;

export interface ErrorInfo {
  Type?: IngestionErrorType;
  Message?: string;
}
export type ErrorList = Array<string>;
export type ErrorMessage = string;

export interface ExasolParameters {
  Host: string;
  Port: number;
}
export type ExceptionResourceType =
  | "USER"
  | "GROUP"
  | "NAMESPACE"
  | "ACCOUNT_SETTINGS"
  | "IAMPOLICY_ASSIGNMENT"
  | "DATA_SOURCE"
  | "DATA_SET"
  | "VPC_CONNECTION"
  | "INGESTION";
export interface ExcludePeriodConfiguration {
  Amount: number;
  Granularity: TimeGranularity;
  Status?: WidgetStatus;
}
export interface ExecutiveSummaryConfigurations {
  Enabled: boolean;
}
export interface ExplicitHierarchy {
  HierarchyId: string;
  Columns: Array<ColumnIdentifier>;
  DrillDownFilters?: Array<DrillDownFilter>;
}
export type ExplicitHierarchyColumnList = Array<ColumnIdentifier>;
export interface ExportHiddenFieldsOption {
  AvailabilityStatus?: DashboardBehavior;
}
export interface ExportToCSVOption {
  AvailabilityStatus?: DashboardBehavior;
}
export interface ExportWithHiddenFieldsOption {
  AvailabilityStatus?: DashboardBehavior;
}
export type Expression = string;

export type FailedKeyRegistrationEntries = Array<FailedKeyRegistrationEntry>;
export interface FailedKeyRegistrationEntry {
  KeyArn?: string;
  Message: string;
  StatusCode: number;
  SenderFault: boolean;
}
export interface FieldBasedTooltip {
  AggregationVisibility?: Visibility;
  TooltipTitleType?: TooltipTitleType;
  TooltipFields?: Array<TooltipItem>;
}
export interface FieldFolder {
  description?: string;
  columns?: Array<string>;
}
export type FieldFolderDescription = string;

export type FieldFolderMap = Record<string, FieldFolder>;
export type FieldFolderPath = string;

export type FieldId = string;

export interface FieldLabelType {
  FieldId?: string;
  Visibility?: Visibility;
}
export type FieldOrderList = Array<string>;
export interface FieldSeriesItem {
  FieldId: string;
  AxisBinding: AxisBinding;
  Settings?: LineChartSeriesSettings;
}
export interface FieldSort {
  FieldId: string;
  Direction: SortDirection;
}
export interface FieldSortOptions {
  FieldSort?: FieldSort;
  ColumnSort?: ColumnSort;
}
export type FieldSortOptionsList = Array<FieldSortOptions>;
export interface FieldTooltipItem {
  FieldId: string;
  Label?: string;
  Visibility?: Visibility;
  TooltipTarget?: TooltipTarget;
}
export type FieldValue = string;

export type FileFormat = "CSV" | "TSV" | "CLF" | "ELF" | "XLSX" | "JSON";
export interface FilledMapAggregatedFieldWells {
  Geospatial?: Array<DimensionField>;
  Values?: Array<MeasureField>;
}
export interface FilledMapConditionalFormatting {
  ConditionalFormattingOptions: Array<FilledMapConditionalFormattingOption>;
}
export interface FilledMapConditionalFormattingOption {
  Shape: FilledMapShapeConditionalFormatting;
}
export type FilledMapConditionalFormattingOptionList =
  Array<FilledMapConditionalFormattingOption>;
export interface FilledMapConfiguration {
  FieldWells?: FilledMapFieldWells;
  SortConfiguration?: FilledMapSortConfiguration;
  Legend?: LegendOptions;
  Tooltip?: TooltipOptions;
  WindowOptions?: GeospatialWindowOptions;
  MapStyleOptions?: GeospatialMapStyleOptions;
  Interactions?: VisualInteractionOptions;
}
export type FilledMapDimensionFieldList = Array<DimensionField>;
export interface FilledMapFieldWells {
  FilledMapAggregatedFieldWells?: FilledMapAggregatedFieldWells;
}
export type FilledMapMeasureFieldList = Array<MeasureField>;
export interface FilledMapShapeConditionalFormatting {
  FieldId: string;
  Format?: ShapeConditionalFormat;
}
export interface FilledMapSortConfiguration {
  CategorySort?: Array<FieldSortOptions>;
}
export interface FilledMapVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: FilledMapConfiguration;
  ConditionalFormatting?: FilledMapConditionalFormatting;
  ColumnHierarchies?: Array<ColumnHierarchy>;
  Actions?: Array<VisualCustomAction>;
  VisualContentAltText?: string;
}
export interface Filter {
  CategoryFilter?: CategoryFilter;
  NumericRangeFilter?: NumericRangeFilter;
  NumericEqualityFilter?: NumericEqualityFilter;
  TimeEqualityFilter?: TimeEqualityFilter;
  TimeRangeFilter?: TimeRangeFilter;
  RelativeDatesFilter?: RelativeDatesFilter;
  TopBottomFilter?: TopBottomFilter;
  NestedFilter?: NestedFilter;
}
export interface FilterAggMetrics {
  MetricOperand?: Identifier;
  Function?: AggType;
  SortDirection?: TopicSortDirection;
}
export type FilterAggMetricsList = Array<FilterAggMetrics>;
export type FilterClass =
  | "ENFORCED_VALUE_FILTER"
  | "CONDITIONAL_VALUE_FILTER"
  | "NAMED_VALUE_FILTER";
export interface FilterControl {
  DateTimePicker?: FilterDateTimePickerControl;
  List?: FilterListControl;
  Dropdown?: FilterDropDownControl;
  TextField?: FilterTextFieldControl;
  TextArea?: FilterTextAreaControl;
  Slider?: FilterSliderControl;
  RelativeDateTime?: FilterRelativeDateTimeControl;
  CrossSheet?: FilterCrossSheetControl;
}
export type FilterControlList = Array<FilterControl>;
export interface FilterCrossSheetControl {
  FilterControlId: string;
  SourceFilterId: string;
  CascadingControlConfiguration?: CascadingControlConfiguration;
}
export interface FilterDateTimePickerControl {
  FilterControlId: string;
  Title: string;
  SourceFilterId: string;
  DisplayOptions?: DateTimePickerControlDisplayOptions;
  Type?: SheetControlDateTimePickerType;
  CommitMode?: CommitMode;
}
export interface FilterDropDownControl {
  FilterControlId: string;
  Title: string;
  SourceFilterId: string;
  DisplayOptions?: DropDownControlDisplayOptions;
  Type?: SheetControlListType;
  SelectableValues?: FilterSelectableValues;
  CascadingControlConfiguration?: CascadingControlConfiguration;
  CommitMode?: CommitMode;
}
export type FilteredVisualsList = Array<string>;
export interface FilterGroup {
  FilterGroupId: string;
  Filters: Array<Filter>;
  ScopeConfiguration: FilterScopeConfiguration;
  Status?: WidgetStatus;
  CrossDataset: CrossDatasetTypes;
}
export type FilterGroupList = Array<FilterGroup>;
export type FilterList = Array<Filter>;
export interface FilterListConfiguration {
  MatchOperator: CategoryFilterMatchOperator;
  CategoryValues?: Array<string>;
  SelectAllOptions?: CategoryFilterSelectAllOptions;
  NullOption?: FilterNullOption;
}
export interface FilterListControl {
  FilterControlId: string;
  Title: string;
  SourceFilterId: string;
  DisplayOptions?: ListControlDisplayOptions;
  Type?: SheetControlListType;
  SelectableValues?: FilterSelectableValues;
  CascadingControlConfiguration?: CascadingControlConfiguration;
}
export type FilterNullOption = "ALL_VALUES" | "NULLS_ONLY" | "NON_NULLS_ONLY";
export interface FilterOperation {
  ConditionExpression: string;
}
export interface FilterOperationSelectedFieldsConfiguration {
  SelectedFields?: Array<string>;
  SelectedFieldOptions?: SelectedFieldOptions;
  SelectedColumns?: Array<ColumnIdentifier>;
}
export interface FilterOperationTargetVisualsConfiguration {
  SameSheetTargetVisualConfiguration?: SameSheetTargetVisualConfiguration;
}
export type FilterOperator = "StringEquals" | "StringLike";
export interface FilterRelativeDateTimeControl {
  FilterControlId: string;
  Title: string;
  SourceFilterId: string;
  DisplayOptions?: RelativeDateTimeControlDisplayOptions;
  CommitMode?: CommitMode;
}
export interface FilterScopeConfiguration {
  SelectedSheets?: SelectedSheetsFilterScopeConfiguration;
  AllSheets?: AllSheetsFilterScopeConfiguration;
}
export interface FilterSelectableValues {
  Values?: Array<string>;
}
export interface FilterSliderControl {
  FilterControlId: string;
  Title: string;
  SourceFilterId: string;
  DisplayOptions?: SliderControlDisplayOptions;
  Type?: SheetControlSliderType;
  MaximumValue: number;
  MinimumValue: number;
  StepSize: number;
}
export interface FilterTextAreaControl {
  FilterControlId: string;
  Title: string;
  SourceFilterId: string;
  Delimiter?: string;
  DisplayOptions?: TextAreaControlDisplayOptions;
}
export interface FilterTextFieldControl {
  FilterControlId: string;
  Title: string;
  SourceFilterId: string;
  DisplayOptions?: TextFieldControlDisplayOptions;
}
export type FilterVisualScope = "ALL_VISUALS" | "SELECTED_VISUALS";
export interface Folder {
  FolderId?: string;
  Arn?: string;
  Name?: string;
  FolderType?: FolderType;
  FolderPath?: Array<string>;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
  SharingModel?: SharingModel;
}
export type FolderArnList = Array<string>;
export type FolderColumnList = Array<string>;
export type FolderFilterAttribute =
  | "PARENT_FOLDER_ARN"
  | "DIRECT_QUICKSIGHT_OWNER"
  | "DIRECT_QUICKSIGHT_SOLE_OWNER"
  | "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER"
  | "QUICKSIGHT_OWNER"
  | "QUICKSIGHT_VIEWER_OR_OWNER"
  | "FOLDER_NAME";
export interface FolderMember {
  MemberId?: string;
  MemberType?: MemberType;
}
export type FolderMemberList = Array<MemberIdArnPair>;
export type FolderName = string;

export interface FolderSearchFilter {
  Operator?: FilterOperator;
  Name?: FolderFilterAttribute;
  Value?: string;
}
export type FolderSearchFilterList = Array<FolderSearchFilter>;
export type FoldersForResourceArnList = Array<string>;
export interface FolderSummary {
  Arn?: string;
  FolderId?: string;
  Name?: string;
  FolderType?: FolderType;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
  SharingModel?: SharingModel;
}
export type FolderSummaryList = Array<FolderSummary>;
export type FolderType = "SHARED" | "RESTRICTED";
export interface Font {
  FontFamily?: string;
}
export interface FontConfiguration {
  FontSize?: FontSize;
  FontDecoration?: FontDecoration;
  FontColor?: string;
  FontWeight?: FontWeight;
  FontStyle?: FontStyle;
  FontFamily?: string;
}
export type FontDecoration = "UNDERLINE" | "NONE";
export type FontList = Array<Font>;
export interface FontSize {
  Relative?: RelativeFontSize;
  Absolute?: string;
}
export type FontStyle = "NORMAL" | "ITALIC";
export interface FontWeight {
  Name?: FontWeightName;
}
export type FontWeightName = "NORMAL" | "BOLD";
export interface ForecastComputation {
  ComputationId: string;
  Name?: string;
  Time?: DimensionField;
  Value?: MeasureField;
  PeriodsForward?: number;
  PeriodsBackward?: number;
  UpperBoundary?: number;
  LowerBoundary?: number;
  PredictionInterval?: number;
  Seasonality?: ForecastComputationSeasonality;
  CustomSeasonalityValue?: number;
}
export type ForecastComputationCustomSeasonalityValue = number;

export type ForecastComputationSeasonality = "AUTOMATIC" | "CUSTOM";
export interface ForecastConfiguration {
  ForecastProperties?: TimeBasedForecastProperties;
  Scenario?: ForecastScenario;
}
export type ForecastConfigurationList = Array<ForecastConfiguration>;
export interface ForecastScenario {
  WhatIfPointScenario?: WhatIfPointScenario;
  WhatIfRangeScenario?: WhatIfRangeScenario;
}
export interface FormatConfiguration {
  StringFormatConfiguration?: StringFormatConfiguration;
  NumberFormatConfiguration?: NumberFormatConfiguration;
  DateTimeFormatConfiguration?: DateTimeFormatConfiguration;
}
export interface FreeFormLayoutCanvasSizeOptions {
  ScreenCanvasSizeOptions?: FreeFormLayoutScreenCanvasSizeOptions;
}
export interface FreeFormLayoutConfiguration {
  Elements: Array<FreeFormLayoutElement>;
  CanvasSizeOptions?: FreeFormLayoutCanvasSizeOptions;
}
export interface FreeFormLayoutElement {
  ElementId: string;
  ElementType: LayoutElementType;
  XAxisLocation: string;
  YAxisLocation: string;
  Width: string;
  Height: string;
  Visibility?: Visibility;
  RenderingRules?: Array<SheetElementRenderingRule>;
  BorderStyle?: FreeFormLayoutElementBorderStyle;
  SelectedBorderStyle?: FreeFormLayoutElementBorderStyle;
  BackgroundStyle?: FreeFormLayoutElementBackgroundStyle;
  LoadingAnimation?: LoadingAnimation;
}
export interface FreeFormLayoutElementBackgroundStyle {
  Visibility?: Visibility;
  Color?: string;
}
export interface FreeFormLayoutElementBorderStyle {
  Visibility?: Visibility;
  Color?: string;
}
export interface FreeFormLayoutScreenCanvasSizeOptions {
  OptimizedViewPortWidth: string;
}
export interface FreeFormSectionLayoutConfiguration {
  Elements: Array<FreeFormLayoutElement>;
}
export type FreeFromLayoutElementList = Array<FreeFormLayoutElement>;
export interface FunnelChartAggregatedFieldWells {
  Category?: Array<DimensionField>;
  Values?: Array<MeasureField>;
}
export interface FunnelChartConfiguration {
  FieldWells?: FunnelChartFieldWells;
  SortConfiguration?: FunnelChartSortConfiguration;
  CategoryLabelOptions?: ChartAxisLabelOptions;
  ValueLabelOptions?: ChartAxisLabelOptions;
  Tooltip?: TooltipOptions;
  DataLabelOptions?: FunnelChartDataLabelOptions;
  VisualPalette?: VisualPalette;
  Interactions?: VisualInteractionOptions;
}
export interface FunnelChartDataLabelOptions {
  Visibility?: Visibility;
  CategoryLabelVisibility?: Visibility;
  MeasureLabelVisibility?: Visibility;
  Position?: DataLabelPosition;
  LabelFontConfiguration?: FontConfiguration;
  LabelColor?: string;
  MeasureDataLabelStyle?: FunnelChartMeasureDataLabelStyle;
}
export type FunnelChartDimensionFieldList = Array<DimensionField>;
export interface FunnelChartFieldWells {
  FunnelChartAggregatedFieldWells?: FunnelChartAggregatedFieldWells;
}
export type FunnelChartMeasureDataLabelStyle =
  | "VALUE_ONLY"
  | "PERCENTAGE_BY_FIRST_STAGE"
  | "PERCENTAGE_BY_PREVIOUS_STAGE"
  | "VALUE_AND_PERCENTAGE_BY_FIRST_STAGE"
  | "VALUE_AND_PERCENTAGE_BY_PREVIOUS_STAGE";
export type FunnelChartMeasureFieldList = Array<MeasureField>;
export interface FunnelChartSortConfiguration {
  CategorySort?: Array<FieldSortOptions>;
  CategoryItemsLimit?: ItemsLimitConfiguration;
}
export interface FunnelChartVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: FunnelChartConfiguration;
  Actions?: Array<VisualCustomAction>;
  ColumnHierarchies?: Array<ColumnHierarchy>;
  VisualContentAltText?: string;
}
export interface GaugeChartArcConditionalFormatting {
  ForegroundColor?: ConditionalFormattingColor;
}
export interface GaugeChartColorConfiguration {
  ForegroundColor?: string;
  BackgroundColor?: string;
}
export interface GaugeChartConditionalFormatting {
  ConditionalFormattingOptions?: Array<GaugeChartConditionalFormattingOption>;
}
export interface GaugeChartConditionalFormattingOption {
  PrimaryValue?: GaugeChartPrimaryValueConditionalFormatting;
  Arc?: GaugeChartArcConditionalFormatting;
}
export type GaugeChartConditionalFormattingOptionList =
  Array<GaugeChartConditionalFormattingOption>;
export interface GaugeChartConfiguration {
  FieldWells?: GaugeChartFieldWells;
  GaugeChartOptions?: GaugeChartOptions;
  DataLabels?: DataLabelOptions;
  TooltipOptions?: TooltipOptions;
  VisualPalette?: VisualPalette;
  ColorConfiguration?: GaugeChartColorConfiguration;
  Interactions?: VisualInteractionOptions;
}
export interface GaugeChartFieldWells {
  Values?: Array<MeasureField>;
  TargetValues?: Array<MeasureField>;
}
export interface GaugeChartOptions {
  PrimaryValueDisplayType?: PrimaryValueDisplayType;
  Comparison?: ComparisonConfiguration;
  ArcAxis?: ArcAxisConfiguration;
  Arc?: ArcConfiguration;
  PrimaryValueFontConfiguration?: FontConfiguration;
}
export interface GaugeChartPrimaryValueConditionalFormatting {
  TextColor?: ConditionalFormattingColor;
  Icon?: ConditionalFormattingIcon;
}
export interface GaugeChartVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: GaugeChartConfiguration;
  ConditionalFormatting?: GaugeChartConditionalFormatting;
  Actions?: Array<VisualCustomAction>;
  VisualContentAltText?: string;
}
export interface GeneratedAnswerResult {
  QuestionText?: string;
  AnswerStatus?: GeneratedAnswerStatus;
  TopicId?: string;
  TopicName?: string;
  Restatement?: string;
  QuestionId?: string;
  AnswerId?: string;
  QuestionUrl?: string;
}
export type GeneratedAnswerStatus =
  | "ANSWER_GENERATED"
  | "ANSWER_RETRIEVED"
  | "ANSWER_DOWNGRADE";
export interface GenerateEmbedUrlForAnonymousUserRequest {
  AwsAccountId: string;
  SessionLifetimeInMinutes?: number;
  Namespace: string;
  SessionTags?: Array<SessionTag>;
  AuthorizedResourceArns: Array<string>;
  ExperienceConfiguration: AnonymousUserEmbeddingExperienceConfiguration;
  AllowedDomains?: Array<string>;
}
export interface GenerateEmbedUrlForAnonymousUserResponse {
  EmbedUrl: string;
  Status: number;
  RequestId: string;
  AnonymousUserArn: string;
}
export interface GenerateEmbedUrlForRegisteredUserRequest {
  AwsAccountId: string;
  SessionLifetimeInMinutes?: number;
  UserArn: string;
  ExperienceConfiguration: RegisteredUserEmbeddingExperienceConfiguration;
  AllowedDomains?: Array<string>;
}
export interface GenerateEmbedUrlForRegisteredUserResponse {
  EmbedUrl: string;
  Status: number;
  RequestId: string;
}
export interface GenerateEmbedUrlForRegisteredUserWithIdentityRequest {
  AwsAccountId: string;
  SessionLifetimeInMinutes?: number;
  ExperienceConfiguration: RegisteredUserEmbeddingExperienceConfiguration;
  AllowedDomains?: Array<string>;
}
export interface GenerateEmbedUrlForRegisteredUserWithIdentityResponse {
  EmbedUrl: string;
  Status: number;
  RequestId: string;
}
export interface GenerativeAuthoringConfigurations {
  Enabled: boolean;
}
export interface GeospatialCategoricalColor {
  CategoryDataColors: Array<GeospatialCategoricalDataColor>;
  NullDataVisibility?: Visibility;
  NullDataSettings?: GeospatialNullDataSettings;
  DefaultOpacity?: number;
}
export interface GeospatialCategoricalDataColor {
  Color: string;
  DataValue: string;
}
export type GeospatialCategoricalDataColorList =
  Array<GeospatialCategoricalDataColor>;
export interface GeospatialCircleRadius {
  Radius?: number;
}
export interface GeospatialCircleSymbolStyle {
  FillColor?: GeospatialColor;
  StrokeColor?: GeospatialColor;
  StrokeWidth?: GeospatialLineWidth;
  CircleRadius?: GeospatialCircleRadius;
}
export interface GeospatialColor {
  Solid?: GeospatialSolidColor;
  Gradient?: GeospatialGradientColor;
  Categorical?: GeospatialCategoricalColor;
}
export type GeospatialColorState = "ENABLED" | "DISABLED";
export interface GeoSpatialColumnGroup {
  Name: string;
  CountryCode?: GeoSpatialCountryCode;
  Columns: Array<string>;
}
export interface GeospatialCoordinateBounds {
  North: number;
  South: number;
  West: number;
  East: number;
}
export type GeoSpatialCountryCode = "US";
export type GeoSpatialDataRole =
  | "COUNTRY"
  | "STATE"
  | "COUNTY"
  | "CITY"
  | "POSTCODE"
  | "LONGITUDE"
  | "LATITUDE";
export interface GeospatialDataSourceItem {
  StaticFileDataSource?: GeospatialStaticFileSource;
}
export interface GeospatialGradientColor {
  StepColors: Array<GeospatialGradientStepColor>;
  NullDataVisibility?: Visibility;
  NullDataSettings?: GeospatialNullDataSettings;
  DefaultOpacity?: number;
}
export interface GeospatialGradientStepColor {
  Color: string;
  DataValue: number;
}
export type GeospatialGradientStepColorList =
  Array<GeospatialGradientStepColor>;
export interface GeospatialHeatmapColorScale {
  Colors?: Array<GeospatialHeatmapDataColor>;
}
export interface GeospatialHeatmapConfiguration {
  HeatmapColor?: GeospatialHeatmapColorScale;
}
export interface GeospatialHeatmapDataColor {
  Color: string;
}
export type GeospatialHeatmapDataColorList = Array<GeospatialHeatmapDataColor>;
export interface GeospatialLayerColorField {
  ColorDimensionsFields?: Array<DimensionField>;
  ColorValuesFields?: Array<MeasureField>;
}
export interface GeospatialLayerDefinition {
  PointLayer?: GeospatialPointLayer;
  LineLayer?: GeospatialLineLayer;
  PolygonLayer?: GeospatialPolygonLayer;
}
export type GeospatialLayerDimensionFieldList = Array<DimensionField>;
export interface GeospatialLayerItem {
  LayerId: string;
  LayerType?: GeospatialLayerType;
  DataSource?: GeospatialDataSourceItem;
  Label?: string;
  Visibility?: Visibility;
  LayerDefinition?: GeospatialLayerDefinition;
  Tooltip?: TooltipOptions;
  JoinDefinition?: GeospatialLayerJoinDefinition;
  Actions?: Array<LayerCustomAction>;
}
export interface GeospatialLayerJoinDefinition {
  ShapeKeyField?: string;
  DatasetKeyField?: UnaggregatedField;
  ColorField?: GeospatialLayerColorField;
}
export interface GeospatialLayerMapConfiguration {
  Legend?: LegendOptions;
  MapLayers?: Array<GeospatialLayerItem>;
  MapState?: GeospatialMapState;
  MapStyle?: GeospatialMapStyle;
  Interactions?: VisualInteractionOptions;
}
export type GeospatialLayerMeasureFieldList = Array<MeasureField>;
export type GeospatialLayerType = "POINT" | "LINE" | "POLYGON";
export interface GeospatialLineLayer {
  Style: GeospatialLineStyle;
}
export interface GeospatialLineStyle {
  LineSymbolStyle?: GeospatialLineSymbolStyle;
}
export interface GeospatialLineSymbolStyle {
  FillColor?: GeospatialColor;
  LineWidth?: GeospatialLineWidth;
}
export interface GeospatialLineWidth {
  LineWidth?: number;
}
export interface GeospatialMapAggregatedFieldWells {
  Geospatial?: Array<DimensionField>;
  Values?: Array<MeasureField>;
  Colors?: Array<DimensionField>;
}
export interface GeospatialMapConfiguration {
  FieldWells?: GeospatialMapFieldWells;
  Legend?: LegendOptions;
  Tooltip?: TooltipOptions;
  WindowOptions?: GeospatialWindowOptions;
  MapStyleOptions?: GeospatialMapStyleOptions;
  PointStyleOptions?: GeospatialPointStyleOptions;
  VisualPalette?: VisualPalette;
  Interactions?: VisualInteractionOptions;
}
export interface GeospatialMapFieldWells {
  GeospatialMapAggregatedFieldWells?: GeospatialMapAggregatedFieldWells;
}
export type GeospatialMapLayerList = Array<GeospatialLayerItem>;
export type GeospatialMapNavigation = "ENABLED" | "DISABLED";
export interface GeospatialMapState {
  Bounds?: GeospatialCoordinateBounds;
  MapNavigation?: GeospatialMapNavigation;
}
export interface GeospatialMapStyle {
  BaseMapStyle?: BaseMapStyleType;
  BackgroundColor?: string;
  BaseMapVisibility?: Visibility;
}
export interface GeospatialMapStyleOptions {
  BaseMapStyle?: BaseMapStyleType;
}
export interface GeospatialMapVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: GeospatialMapConfiguration;
  ColumnHierarchies?: Array<ColumnHierarchy>;
  Actions?: Array<VisualCustomAction>;
  VisualContentAltText?: string;
}
export interface GeospatialNullDataSettings {
  SymbolStyle: GeospatialNullSymbolStyle;
}
export interface GeospatialNullSymbolStyle {
  FillColor?: string;
  StrokeColor?: string;
  StrokeWidth?: number;
}
export interface GeospatialPointLayer {
  Style: GeospatialPointStyle;
}
export interface GeospatialPointStyle {
  CircleSymbolStyle?: GeospatialCircleSymbolStyle;
}
export interface GeospatialPointStyleOptions {
  SelectedPointStyle?: GeospatialSelectedPointStyle;
  ClusterMarkerConfiguration?: ClusterMarkerConfiguration;
  HeatmapConfiguration?: GeospatialHeatmapConfiguration;
}
export interface GeospatialPolygonLayer {
  Style: GeospatialPolygonStyle;
}
export interface GeospatialPolygonStyle {
  PolygonSymbolStyle?: GeospatialPolygonSymbolStyle;
}
export interface GeospatialPolygonSymbolStyle {
  FillColor?: GeospatialColor;
  StrokeColor?: GeospatialColor;
  StrokeWidth?: GeospatialLineWidth;
}
export type GeospatialRadius = number;

export type GeospatialSelectedPointStyle = "POINT" | "CLUSTER" | "HEATMAP";
export interface GeospatialSolidColor {
  Color: string;
  State?: GeospatialColorState;
}
export interface GeospatialStaticFileSource {
  StaticFileId: string;
}
export type GeospatialWidth = number;

export interface GeospatialWindowOptions {
  Bounds?: GeospatialCoordinateBounds;
  MapZoomMode?: MapZoomMode;
}
export interface GetDashboardEmbedUrlRequest {
  AwsAccountId: string;
  DashboardId: string;
  IdentityType: EmbeddingIdentityType;
  SessionLifetimeInMinutes?: number;
  UndoRedoDisabled?: boolean;
  ResetDisabled?: boolean;
  StatePersistenceEnabled?: boolean;
  UserArn?: string;
  Namespace?: string;
  AdditionalDashboardIds?: Array<string>;
}
export interface GetDashboardEmbedUrlResponse {
  EmbedUrl?: string;
  Status?: number;
  RequestId?: string;
}
export interface GetSessionEmbedUrlRequest {
  AwsAccountId: string;
  EntryPoint?: string;
  SessionLifetimeInMinutes?: number;
  UserArn?: string;
}
export interface GetSessionEmbedUrlResponse {
  EmbedUrl?: string;
  Status?: number;
  RequestId?: string;
}
export interface GlobalTableBorderOptions {
  UniformBorder?: TableBorderOptions;
  SideSpecificBorder?: TableSideBorderOptions;
}
export interface GradientColor {
  Stops?: Array<GradientStop>;
}
export interface GradientStop {
  GradientOffset: number;
  DataValue?: number;
  Color?: string;
}
export type GradientStopList = Array<GradientStop>;
export interface GridLayoutCanvasSizeOptions {
  ScreenCanvasSizeOptions?: GridLayoutScreenCanvasSizeOptions;
}
export interface GridLayoutConfiguration {
  Elements: Array<GridLayoutElement>;
  CanvasSizeOptions?: GridLayoutCanvasSizeOptions;
}
export interface GridLayoutElement {
  ElementId: string;
  ElementType: LayoutElementType;
  ColumnIndex?: number;
  ColumnSpan: number;
  RowIndex?: number;
  RowSpan: number;
}
export type GridLayoutElementColumnIndex = number;

export type GridLayoutElementColumnSpan = number;

export type GridLayoutElementList = Array<GridLayoutElement>;
export type GridLayoutElementRowIndex = number;

export type GridLayoutElementRowSpan = number;

export interface GridLayoutScreenCanvasSizeOptions {
  ResizeOption: ResizeOption;
  OptimizedViewPortWidth?: string;
}
export interface Group {
  Arn?: string;
  GroupName?: string;
  Description?: string;
  PrincipalId?: string;
}
export type GroupDescription = string;

export type GroupFilterAttribute = "GROUP_NAME";
export type GroupFilterOperator = "StartsWith";
export type GroupList = Array<Group>;
export interface GroupMember {
  Arn?: string;
  MemberName?: string;
}
export type GroupMemberList = Array<GroupMember>;
export type GroupMemberName = string;

export type GroupName = string;

export interface GroupSearchFilter {
  Operator: GroupFilterOperator;
  Name: GroupFilterAttribute;
  Value: string;
}
export type GroupSearchFilterList = Array<GroupSearchFilter>;
export type GroupsList = Array<string>;
export interface GrowthRateComputation {
  ComputationId: string;
  Name?: string;
  Time?: DimensionField;
  Value?: MeasureField;
  PeriodSize?: number;
}
export type GrowthRatePeriodSize = number;

export interface GutterStyle {
  Show?: boolean;
}
export interface HeaderFooterSectionConfiguration {
  SectionId: string;
  Layout: SectionLayoutConfiguration;
  Style?: SectionStyle;
}
export type HeaderFooterSectionConfigurationList =
  Array<HeaderFooterSectionConfiguration>;
export interface HeatMapAggregatedFieldWells {
  Rows?: Array<DimensionField>;
  Columns?: Array<DimensionField>;
  Values?: Array<MeasureField>;
}
export interface HeatMapConfiguration {
  FieldWells?: HeatMapFieldWells;
  SortConfiguration?: HeatMapSortConfiguration;
  RowLabelOptions?: ChartAxisLabelOptions;
  ColumnLabelOptions?: ChartAxisLabelOptions;
  ColorScale?: ColorScale;
  Legend?: LegendOptions;
  DataLabels?: DataLabelOptions;
  Tooltip?: TooltipOptions;
  Interactions?: VisualInteractionOptions;
}
export type HeatMapDimensionFieldList = Array<DimensionField>;
export interface HeatMapFieldWells {
  HeatMapAggregatedFieldWells?: HeatMapAggregatedFieldWells;
}
export type HeatMapMeasureFieldList = Array<MeasureField>;
export interface HeatMapSortConfiguration {
  HeatMapRowSort?: Array<FieldSortOptions>;
  HeatMapColumnSort?: Array<FieldSortOptions>;
  HeatMapRowItemsLimitConfiguration?: ItemsLimitConfiguration;
  HeatMapColumnItemsLimitConfiguration?: ItemsLimitConfiguration;
}
export interface HeatMapVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: HeatMapConfiguration;
  ColumnHierarchies?: Array<ColumnHierarchy>;
  Actions?: Array<VisualCustomAction>;
  VisualContentAltText?: string;
}
export type HexColor = string;

export type HexColorWithTransparency = string;

export type HierarchyId = string;

export interface HistogramAggregatedFieldWells {
  Values?: Array<MeasureField>;
}
export interface HistogramBinOptions {
  SelectedBinType?: HistogramBinType;
  BinCount?: BinCountOptions;
  BinWidth?: BinWidthOptions;
  StartValue?: number;
}
export type HistogramBinType = "BIN_COUNT" | "BIN_WIDTH";
export interface HistogramConfiguration {
  FieldWells?: HistogramFieldWells;
  XAxisDisplayOptions?: AxisDisplayOptions;
  XAxisLabelOptions?: ChartAxisLabelOptions;
  YAxisDisplayOptions?: AxisDisplayOptions;
  BinOptions?: HistogramBinOptions;
  DataLabels?: DataLabelOptions;
  Tooltip?: TooltipOptions;
  VisualPalette?: VisualPalette;
  Interactions?: VisualInteractionOptions;
}
export interface HistogramFieldWells {
  HistogramAggregatedFieldWells?: HistogramAggregatedFieldWells;
}
export type HistogramMeasureFieldList = Array<MeasureField>;
export interface HistogramVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: HistogramConfiguration;
  Actions?: Array<VisualCustomAction>;
  VisualContentAltText?: string;
}
export type HorizontalTextAlignment = "LEFT" | "CENTER" | "RIGHT" | "AUTO";
export type Host = string;

export interface IAMPolicyAssignment {
  AwsAccountId?: string;
  AssignmentId?: string;
  AssignmentName?: string;
  PolicyArn?: string;
  Identities?: Record<string, Array<string>>;
  AssignmentStatus?: AssignmentStatus;
}
export type IAMPolicyAssignmentName = string;

export interface IAMPolicyAssignmentSummary {
  AssignmentName?: string;
  AssignmentStatus?: AssignmentStatus;
}
export type IAMPolicyAssignmentSummaryList = Array<IAMPolicyAssignmentSummary>;
export type Icon =
  | "CARET_UP"
  | "CARET_DOWN"
  | "PLUS"
  | "MINUS"
  | "ARROW_UP"
  | "ARROW_DOWN"
  | "ARROW_LEFT"
  | "ARROW_UP_LEFT"
  | "ARROW_DOWN_LEFT"
  | "ARROW_RIGHT"
  | "ARROW_UP_RIGHT"
  | "ARROW_DOWN_RIGHT"
  | "FACE_UP"
  | "FACE_DOWN"
  | "FACE_FLAT"
  | "ONE_BAR"
  | "TWO_BAR"
  | "THREE_BAR"
  | "CIRCLE"
  | "TRIANGLE"
  | "SQUARE"
  | "FLAG"
  | "THUMBS_UP"
  | "THUMBS_DOWN"
  | "CHECKMARK"
  | "X";
export interface Identifier {
  Identity: string;
}
export interface IdentityCenterConfiguration {
  EnableIdentityPropagation?: boolean;
}
export type IdentityMap = Record<string, Array<string>>;
export type IdentityName = string;

export type IdentityNameList = Array<string>;
export type IdentityProviderResourceUri = string;

export type IdentityStore = "QUICKSIGHT";
export type IdentityType = "IAM" | "QUICKSIGHT" | "IAM_IDENTITY_CENTER";
export declare class IdentityTypeNotSupportedException extends EffectData.TaggedError(
  "IdentityTypeNotSupportedException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface Image {
  Source?: ImageSource;
  GeneratedImageUrl?: string;
}
export interface ImageConfiguration {
  Source?: ImageSource;
}
export interface ImageCustomAction {
  CustomActionId: string;
  Name: string;
  Status?: WidgetStatus;
  Trigger: ImageCustomActionTrigger;
  ActionOperations: Array<ImageCustomActionOperation>;
}
export type ImageCustomActionList = Array<ImageCustomAction>;
export type ImageCustomActionName = string;

export interface ImageCustomActionOperation {
  NavigationOperation?: CustomActionNavigationOperation;
  URLOperation?: CustomActionURLOperation;
  SetParametersOperation?: CustomActionSetParametersOperation;
}
export type ImageCustomActionOperationList = Array<ImageCustomActionOperation>;
export type ImageCustomActionTrigger = "CLICK" | "MENU";
export interface ImageInteractionOptions {
  ImageMenuOption?: ImageMenuOption;
}
export interface ImageMenuOption {
  AvailabilityStatus?: DashboardBehavior;
}
export interface ImageSet {
  Original: Image;
  Height64?: Image;
  Height32?: Image;
}
export interface ImageSetConfiguration {
  Original: ImageConfiguration;
}
export type ImageSource = { PublicUrl: string } | { S3Uri: string };
export interface ImageStaticFile {
  StaticFileId: string;
  Source?: StaticFileSource;
}
export type IncludeFolderMembers = "RECURSE" | "ONE_LEVEL" | "NONE";
export type IncludeGeneratedAnswer = "INCLUDE" | "EXCLUDE";
export type IncludeQuickSightQIndex = "INCLUDE" | "EXCLUDE";
export interface IncrementalRefresh {
  LookbackWindow: LookbackWindow;
}
export interface Ingestion {
  Arn: string;
  IngestionId?: string;
  IngestionStatus: IngestionStatus;
  ErrorInfo?: ErrorInfo;
  RowInfo?: RowInfo;
  QueueInfo?: QueueInfo;
  CreatedTime: Date | string;
  IngestionTimeInSeconds?: number;
  IngestionSizeInBytes?: number;
  RequestSource?: IngestionRequestSource;
  RequestType?: IngestionRequestType;
}
export type IngestionErrorType =
  | "FAILURE_TO_ASSUME_ROLE"
  | "INGESTION_SUPERSEDED"
  | "INGESTION_CANCELED"
  | "DATA_SET_DELETED"
  | "DATA_SET_NOT_SPICE"
  | "S3_UPLOADED_FILE_DELETED"
  | "S3_MANIFEST_ERROR"
  | "DATA_TOLERANCE_EXCEPTION"
  | "SPICE_TABLE_NOT_FOUND"
  | "DATA_SET_SIZE_LIMIT_EXCEEDED"
  | "ROW_SIZE_LIMIT_EXCEEDED"
  | "ACCOUNT_CAPACITY_LIMIT_EXCEEDED"
  | "CUSTOMER_ERROR"
  | "DATA_SOURCE_NOT_FOUND"
  | "IAM_ROLE_NOT_AVAILABLE"
  | "CONNECTION_FAILURE"
  | "SQL_TABLE_NOT_FOUND"
  | "PERMISSION_DENIED"
  | "SSL_CERTIFICATE_VALIDATION_FAILURE"
  | "OAUTH_TOKEN_FAILURE"
  | "SOURCE_API_LIMIT_EXCEEDED_FAILURE"
  | "PASSWORD_AUTHENTICATION_FAILURE"
  | "SQL_SCHEMA_MISMATCH_ERROR"
  | "INVALID_DATE_FORMAT"
  | "INVALID_DATAPREP_SYNTAX"
  | "SOURCE_RESOURCE_LIMIT_EXCEEDED"
  | "SQL_INVALID_PARAMETER_VALUE"
  | "QUERY_TIMEOUT"
  | "SQL_NUMERIC_OVERFLOW"
  | "UNRESOLVABLE_HOST"
  | "UNROUTABLE_HOST"
  | "SQL_EXCEPTION"
  | "S3_FILE_INACCESSIBLE"
  | "IOT_FILE_NOT_FOUND"
  | "IOT_DATA_SET_FILE_EMPTY"
  | "INVALID_DATA_SOURCE_CONFIG"
  | "DATA_SOURCE_AUTH_FAILED"
  | "DATA_SOURCE_CONNECTION_FAILED"
  | "FAILURE_TO_PROCESS_JSON_FILE"
  | "INTERNAL_SERVICE_ERROR"
  | "REFRESH_SUPPRESSED_BY_EDIT"
  | "PERMISSION_NOT_FOUND"
  | "ELASTICSEARCH_CURSOR_NOT_ENABLED"
  | "CURSOR_NOT_ENABLED"
  | "DUPLICATE_COLUMN_NAMES_FOUND";
export type IngestionId = string;

export type IngestionMaxResults = number;

export type IngestionRequestSource = "MANUAL" | "SCHEDULED";
export type IngestionRequestType =
  | "INITIAL_INGESTION"
  | "EDIT"
  | "INCREMENTAL_REFRESH"
  | "FULL_REFRESH";
export type Ingestions = Array<Ingestion>;
export type IngestionStatus =
  | "INITIALIZED"
  | "QUEUED"
  | "RUNNING"
  | "FAILED"
  | "COMPLETED"
  | "CANCELLED";
export type IngestionType = "INCREMENTAL_REFRESH" | "FULL_REFRESH";
export interface InnerFilter {
  CategoryInnerFilter?: CategoryInnerFilter;
}
export interface InputColumn {
  Name: string;
  Type: InputColumnDataType;
  SubType?: ColumnDataSubType;
}
export type InputColumnDataType =
  | "STRING"
  | "INTEGER"
  | "DECIMAL"
  | "DATETIME"
  | "BIT"
  | "BOOLEAN"
  | "JSON";
export type InputColumnList = Array<InputColumn>;
export interface InsightConfiguration {
  Computations?: Array<Computation>;
  CustomNarrative?: CustomNarrativeOptions;
  Interactions?: VisualInteractionOptions;
}
export interface InsightVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  InsightConfiguration?: InsightConfiguration;
  Actions?: Array<VisualCustomAction>;
  DataSetIdentifier: string;
  VisualContentAltText?: string;
}
export type InstanceId = string;

export type Integer = number;

export interface IntegerDatasetParameter {
  Id: string;
  Name: string;
  ValueType: DatasetParameterValueType;
  DefaultValues?: IntegerDatasetParameterDefaultValues;
}
export type IntegerDatasetParameterDefaultValue = number;

export interface IntegerDatasetParameterDefaultValues {
  StaticValues?: Array<number>;
}
export type IntegerDatasetParameterValueList = Array<number>;
export type IntegerDefaultValueList = Array<number>;
export interface IntegerDefaultValues {
  DynamicValue?: DynamicDefaultValue;
  StaticValues?: Array<number>;
}
export interface IntegerParameter {
  Name: string;
  Values: Array<number>;
}
export interface IntegerParameterDeclaration {
  ParameterValueType: ParameterValueType;
  Name: string;
  DefaultValues?: IntegerDefaultValues;
  ValueWhenUnset?: IntegerValueWhenUnsetConfiguration;
  MappedDataSetParameters?: Array<MappedDataSetParameter>;
}
export type IntegerParameterList = Array<IntegerParameter>;
export interface IntegerValueWhenUnsetConfiguration {
  ValueWhenUnsetOption?: ValueWhenUnsetOption;
  CustomValue?: number;
}
export declare class InternalFailureException extends EffectData.TaggedError(
  "InternalFailureException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message: string;
}> {}
export declare class InvalidNextTokenException extends EffectData.TaggedError(
  "InvalidNextTokenException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class InvalidParameterValueException extends EffectData.TaggedError(
  "InvalidParameterValueException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface InvalidTopicReviewedAnswer {
  AnswerId?: string;
  Error?: ReviewedAnswerErrorCode;
}
export type InvalidTopicReviewedAnswers = Array<InvalidTopicReviewedAnswer>;
export type IpRestrictionRuleDescription = string;

export type IpRestrictionRuleMap = Record<string, string>;
export type IPv4Address = string;

export interface ItemsLimitConfiguration {
  ItemsLimit?: number;
  OtherCategories?: OtherCategories;
}
export interface JiraParameters {
  SiteBaseUrl: string;
}
export interface JoinInstruction {
  LeftOperand: string;
  RightOperand: string;
  LeftJoinKeyProperties?: JoinKeyProperties;
  RightJoinKeyProperties?: JoinKeyProperties;
  Type: JoinType;
  OnClause: string;
}
export interface JoinKeyProperties {
  UniqueKey?: boolean;
}
export type JoinType = "INNER" | "OUTER" | "LEFT" | "RIGHT";
export type KeyRegistration = Array<RegisteredCustomerManagedKey>;
export interface KPIActualValueConditionalFormatting {
  TextColor?: ConditionalFormattingColor;
  Icon?: ConditionalFormattingIcon;
}
export interface KPIComparisonValueConditionalFormatting {
  TextColor?: ConditionalFormattingColor;
  Icon?: ConditionalFormattingIcon;
}
export interface KPIConditionalFormatting {
  ConditionalFormattingOptions?: Array<KPIConditionalFormattingOption>;
}
export interface KPIConditionalFormattingOption {
  PrimaryValue?: KPIPrimaryValueConditionalFormatting;
  ProgressBar?: KPIProgressBarConditionalFormatting;
  ActualValue?: KPIActualValueConditionalFormatting;
  ComparisonValue?: KPIComparisonValueConditionalFormatting;
}
export type KPIConditionalFormattingOptionList =
  Array<KPIConditionalFormattingOption>;
export interface KPIConfiguration {
  FieldWells?: KPIFieldWells;
  SortConfiguration?: KPISortConfiguration;
  KPIOptions?: KPIOptions;
  Interactions?: VisualInteractionOptions;
}
export interface KPIFieldWells {
  Values?: Array<MeasureField>;
  TargetValues?: Array<MeasureField>;
  TrendGroups?: Array<DimensionField>;
}
export interface KPIOptions {
  ProgressBar?: ProgressBarOptions;
  TrendArrows?: TrendArrowOptions;
  SecondaryValue?: SecondaryValueOptions;
  Comparison?: ComparisonConfiguration;
  PrimaryValueDisplayType?: PrimaryValueDisplayType;
  PrimaryValueFontConfiguration?: FontConfiguration;
  SecondaryValueFontConfiguration?: FontConfiguration;
  Sparkline?: KPISparklineOptions;
  VisualLayoutOptions?: KPIVisualLayoutOptions;
}
export interface KPIPrimaryValueConditionalFormatting {
  TextColor?: ConditionalFormattingColor;
  Icon?: ConditionalFormattingIcon;
}
export interface KPIProgressBarConditionalFormatting {
  ForegroundColor?: ConditionalFormattingColor;
}
export interface KPISortConfiguration {
  TrendGroupSort?: Array<FieldSortOptions>;
}
export interface KPISparklineOptions {
  Visibility?: Visibility;
  Type: KPISparklineType;
  Color?: string;
  TooltipVisibility?: Visibility;
}
export type KPISparklineType = "LINE" | "AREA";
export interface KPIVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: KPIConfiguration;
  ConditionalFormatting?: KPIConditionalFormatting;
  Actions?: Array<VisualCustomAction>;
  ColumnHierarchies?: Array<ColumnHierarchy>;
  VisualContentAltText?: string;
}
export interface KPIVisualLayoutOptions {
  StandardLayout?: KPIVisualStandardLayout;
}
export interface KPIVisualStandardLayout {
  Type: KPIVisualStandardLayoutType;
}
export type KPIVisualStandardLayoutType = "CLASSIC" | "VERTICAL";
export interface LabelOptions {
  Visibility?: Visibility;
  FontConfiguration?: FontConfiguration;
  CustomLabel?: string;
}
export type Latitude = number;

export interface LayerCustomAction {
  CustomActionId: string;
  Name: string;
  Status?: WidgetStatus;
  Trigger: LayerCustomActionTrigger;
  ActionOperations: Array<LayerCustomActionOperation>;
}
export type LayerCustomActionList = Array<LayerCustomAction>;
export type LayerCustomActionName = string;

export interface LayerCustomActionOperation {
  FilterOperation?: CustomActionFilterOperation;
  NavigationOperation?: CustomActionNavigationOperation;
  URLOperation?: CustomActionURLOperation;
  SetParametersOperation?: CustomActionSetParametersOperation;
}
export type LayerCustomActionOperationList = Array<LayerCustomActionOperation>;
export type LayerCustomActionTrigger = "DATA_POINT_CLICK" | "DATA_POINT_MENU";
export interface LayerMapVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: GeospatialLayerMapConfiguration;
  DataSetIdentifier: string;
  VisualContentAltText?: string;
}
export interface Layout {
  Configuration: LayoutConfiguration;
}
export interface LayoutConfiguration {
  GridLayout?: GridLayoutConfiguration;
  FreeFormLayout?: FreeFormLayoutConfiguration;
  SectionBasedLayout?: SectionBasedLayoutConfiguration;
}
export type LayoutElementType =
  | "VISUAL"
  | "FILTER_CONTROL"
  | "PARAMETER_CONTROL"
  | "TEXT_BOX"
  | "IMAGE";
export type LayoutList = Array<Layout>;
export interface LegendOptions {
  Visibility?: Visibility;
  Title?: LabelOptions;
  Position?: LegendPosition;
  Width?: string;
  Height?: string;
  ValueFontConfiguration?: FontConfiguration;
}
export type LegendPosition = "AUTO" | "RIGHT" | "BOTTOM" | "TOP";
export type Length = string;

export type LimitedString = string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
  readonly ResourceType?: ExceptionResourceType;
  readonly RequestId?: string;
}> {}
export interface LineChartAggregatedFieldWells {
  Category?: Array<DimensionField>;
  Values?: Array<MeasureField>;
  Colors?: Array<DimensionField>;
  SmallMultiples?: Array<DimensionField>;
}
export interface LineChartConfiguration {
  FieldWells?: LineChartFieldWells;
  SortConfiguration?: LineChartSortConfiguration;
  ForecastConfigurations?: Array<ForecastConfiguration>;
  Type?: LineChartType;
  SmallMultiplesOptions?: SmallMultiplesOptions;
  XAxisDisplayOptions?: AxisDisplayOptions;
  XAxisLabelOptions?: ChartAxisLabelOptions;
  PrimaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions;
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;
  SecondaryYAxisDisplayOptions?: LineSeriesAxisDisplayOptions;
  SecondaryYAxisLabelOptions?: ChartAxisLabelOptions;
  SingleAxisOptions?: SingleAxisOptions;
  DefaultSeriesSettings?: LineChartDefaultSeriesSettings;
  Series?: Array<SeriesItem>;
  Legend?: LegendOptions;
  DataLabels?: DataLabelOptions;
  ReferenceLines?: Array<ReferenceLine>;
  Tooltip?: TooltipOptions;
  ContributionAnalysisDefaults?: Array<ContributionAnalysisDefault>;
  VisualPalette?: VisualPalette;
  Interactions?: VisualInteractionOptions;
}
export interface LineChartDefaultSeriesSettings {
  AxisBinding?: AxisBinding;
  LineStyleSettings?: LineChartLineStyleSettings;
  MarkerStyleSettings?: LineChartMarkerStyleSettings;
}
export interface LineChartFieldWells {
  LineChartAggregatedFieldWells?: LineChartAggregatedFieldWells;
}
export type LineChartLineStyle = "SOLID" | "DOTTED" | "DASHED";
export interface LineChartLineStyleSettings {
  LineVisibility?: Visibility;
  LineInterpolation?: LineInterpolation;
  LineStyle?: LineChartLineStyle;
  LineWidth?: string;
}
export type LineChartMarkerShape =
  | "CIRCLE"
  | "TRIANGLE"
  | "SQUARE"
  | "DIAMOND"
  | "ROUNDED_SQUARE";
export interface LineChartMarkerStyleSettings {
  MarkerVisibility?: Visibility;
  MarkerShape?: LineChartMarkerShape;
  MarkerSize?: string;
  MarkerColor?: string;
}
export interface LineChartSeriesSettings {
  LineStyleSettings?: LineChartLineStyleSettings;
  MarkerStyleSettings?: LineChartMarkerStyleSettings;
}
export interface LineChartSortConfiguration {
  CategorySort?: Array<FieldSortOptions>;
  CategoryItemsLimitConfiguration?: ItemsLimitConfiguration;
  ColorItemsLimitConfiguration?: ItemsLimitConfiguration;
  SmallMultiplesSort?: Array<FieldSortOptions>;
  SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration;
}
export type LineChartType = "LINE" | "AREA" | "STACKED_AREA";
export interface LineChartVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: LineChartConfiguration;
  Actions?: Array<VisualCustomAction>;
  ColumnHierarchies?: Array<ColumnHierarchy>;
  VisualContentAltText?: string;
}
export type LineInterpolation = "LINEAR" | "SMOOTH" | "STEPPED";
export interface LineSeriesAxisDisplayOptions {
  AxisOptions?: AxisDisplayOptions;
  MissingDataConfigurations?: Array<MissingDataConfiguration>;
}
export type LinkEntityArn = string;

export type LinkEntityArnList = Array<string>;
export interface LinkSharingConfiguration {
  Permissions?: Array<ResourcePermission>;
}
export interface ListAnalysesRequest {
  AwsAccountId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAnalysesResponse {
  AnalysisSummaryList?: Array<AnalysisSummary>;
  NextToken?: string;
  Status?: number;
  RequestId?: string;
}
export interface ListAssetBundleExportJobsRequest {
  AwsAccountId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAssetBundleExportJobsResponse {
  AssetBundleExportJobSummaryList?: Array<AssetBundleExportJobSummary>;
  NextToken?: string;
  RequestId?: string;
  Status?: number;
}
export interface ListAssetBundleImportJobsRequest {
  AwsAccountId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAssetBundleImportJobsResponse {
  AssetBundleImportJobSummaryList?: Array<AssetBundleImportJobSummary>;
  NextToken?: string;
  RequestId?: string;
  Status?: number;
}
export interface ListBrandsRequest {
  AwsAccountId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListBrandsResponse {
  NextToken?: string;
  Brands?: Array<BrandSummary>;
}
export interface ListControlDisplayOptions {
  SearchOptions?: ListControlSearchOptions;
  SelectAllOptions?: ListControlSelectAllOptions;
  TitleOptions?: LabelOptions;
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
}
export interface ListControlSearchOptions {
  Visibility?: Visibility;
}
export interface ListControlSelectAllOptions {
  Visibility?: Visibility;
}
export interface ListCustomPermissionsRequest {
  AwsAccountId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCustomPermissionsResponse {
  Status?: number;
  CustomPermissionsList?: Array<CustomPermissions>;
  NextToken?: string;
  RequestId?: string;
}
export interface ListDashboardsRequest {
  AwsAccountId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDashboardsResponse {
  DashboardSummaryList?: Array<DashboardSummary>;
  NextToken?: string;
  Status?: number;
  RequestId?: string;
}
export interface ListDashboardVersionsRequest {
  AwsAccountId: string;
  DashboardId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDashboardVersionsResponse {
  DashboardVersionSummaryList?: Array<DashboardVersionSummary>;
  NextToken?: string;
  Status?: number;
  RequestId?: string;
}
export interface ListDataSetsRequest {
  AwsAccountId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDataSetsResponse {
  DataSetSummaries?: Array<DataSetSummary>;
  NextToken?: string;
  RequestId?: string;
  Status?: number;
}
export interface ListDataSourcesRequest {
  AwsAccountId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDataSourcesResponse {
  DataSources?: Array<DataSource>;
  NextToken?: string;
  RequestId?: string;
  Status?: number;
}
export interface ListFolderMembersRequest {
  AwsAccountId: string;
  FolderId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListFolderMembersResponse {
  Status?: number;
  FolderMemberList?: Array<MemberIdArnPair>;
  NextToken?: string;
  RequestId?: string;
}
export interface ListFoldersForResourceRequest {
  AwsAccountId: string;
  ResourceArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListFoldersForResourceResponse {
  Status?: number;
  Folders?: Array<string>;
  NextToken?: string;
  RequestId?: string;
}
export interface ListFoldersRequest {
  AwsAccountId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListFoldersResponse {
  Status?: number;
  FolderSummaryList?: Array<FolderSummary>;
  NextToken?: string;
  RequestId?: string;
}
export interface ListGroupMembershipsRequest {
  GroupName: string;
  NextToken?: string;
  MaxResults?: number;
  AwsAccountId: string;
  Namespace: string;
}
export interface ListGroupMembershipsResponse {
  GroupMemberList?: Array<GroupMember>;
  NextToken?: string;
  RequestId?: string;
  Status?: number;
}
export interface ListGroupsRequest {
  AwsAccountId: string;
  NextToken?: string;
  MaxResults?: number;
  Namespace: string;
}
export interface ListGroupsResponse {
  GroupList?: Array<Group>;
  NextToken?: string;
  RequestId?: string;
  Status?: number;
}
export interface ListIAMPolicyAssignmentsForUserRequest {
  AwsAccountId: string;
  UserName: string;
  NextToken?: string;
  MaxResults?: number;
  Namespace: string;
}
export interface ListIAMPolicyAssignmentsForUserResponse {
  ActiveAssignments?: Array<ActiveIAMPolicyAssignment>;
  RequestId?: string;
  NextToken?: string;
  Status?: number;
}
export interface ListIAMPolicyAssignmentsRequest {
  AwsAccountId: string;
  AssignmentStatus?: AssignmentStatus;
  Namespace: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListIAMPolicyAssignmentsResponse {
  IAMPolicyAssignments?: Array<IAMPolicyAssignmentSummary>;
  NextToken?: string;
  RequestId?: string;
  Status?: number;
}
export interface ListIdentityPropagationConfigsRequest {
  AwsAccountId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListIdentityPropagationConfigsResponse {
  Services?: Array<AuthorizedTargetsByService>;
  NextToken?: string;
  Status?: number;
  RequestId?: string;
}
export type ListIdentityPropagationMaxResults = number;

export interface ListIngestionsRequest {
  DataSetId: string;
  NextToken?: string;
  AwsAccountId: string;
  MaxResults?: number;
}
export interface ListIngestionsResponse {
  Ingestions?: Array<Ingestion>;
  NextToken?: string;
  RequestId?: string;
  Status?: number;
}
export interface ListNamespacesRequest {
  AwsAccountId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListNamespacesResponse {
  Namespaces?: Array<NamespaceInfoV2>;
  NextToken?: string;
  RequestId?: string;
  Status?: number;
}
export interface ListRefreshSchedulesRequest {
  AwsAccountId: string;
  DataSetId: string;
}
export interface ListRefreshSchedulesResponse {
  RefreshSchedules?: Array<RefreshSchedule>;
  Status?: number;
  RequestId?: string;
}
export interface ListRoleMembershipsRequest {
  Role: Role;
  NextToken?: string;
  MaxResults?: number;
  AwsAccountId: string;
  Namespace: string;
}
export interface ListRoleMembershipsResponse {
  MembersList?: Array<string>;
  NextToken?: string;
  RequestId?: string;
  Status?: number;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Array<Tag>;
  RequestId?: string;
  Status?: number;
}
export interface ListTemplateAliasesRequest {
  AwsAccountId: string;
  TemplateId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTemplateAliasesResponse {
  TemplateAliasList?: Array<TemplateAlias>;
  Status?: number;
  RequestId?: string;
  NextToken?: string;
}
export interface ListTemplatesRequest {
  AwsAccountId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTemplatesResponse {
  TemplateSummaryList?: Array<TemplateSummary>;
  NextToken?: string;
  Status?: number;
  RequestId?: string;
}
export interface ListTemplateVersionsRequest {
  AwsAccountId: string;
  TemplateId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTemplateVersionsResponse {
  TemplateVersionSummaryList?: Array<TemplateVersionSummary>;
  NextToken?: string;
  Status?: number;
  RequestId?: string;
}
export interface ListThemeAliasesRequest {
  AwsAccountId: string;
  ThemeId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListThemeAliasesResponse {
  ThemeAliasList?: Array<ThemeAlias>;
  Status?: number;
  RequestId?: string;
  NextToken?: string;
}
export interface ListThemesRequest {
  AwsAccountId: string;
  NextToken?: string;
  MaxResults?: number;
  Type?: ThemeType;
}
export interface ListThemesResponse {
  ThemeSummaryList?: Array<ThemeSummary>;
  NextToken?: string;
  Status?: number;
  RequestId?: string;
}
export interface ListThemeVersionsRequest {
  AwsAccountId: string;
  ThemeId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListThemeVersionsResponse {
  ThemeVersionSummaryList?: Array<ThemeVersionSummary>;
  NextToken?: string;
  Status?: number;
  RequestId?: string;
}
export interface ListTopicRefreshSchedulesRequest {
  AwsAccountId: string;
  TopicId: string;
}
export interface ListTopicRefreshSchedulesResponse {
  TopicId?: string;
  TopicArn?: string;
  RefreshSchedules?: Array<TopicRefreshScheduleSummary>;
  Status?: number;
  RequestId?: string;
}
export interface ListTopicReviewedAnswersRequest {
  AwsAccountId: string;
  TopicId: string;
}
export interface ListTopicReviewedAnswersResponse {
  TopicId?: string;
  TopicArn?: string;
  Answers?: Array<TopicReviewedAnswer>;
  Status?: number;
  RequestId?: string;
}
export interface ListTopicsRequest {
  AwsAccountId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTopicsResponse {
  TopicsSummaries?: Array<TopicSummary>;
  NextToken?: string;
  RequestId?: string;
  Status?: number;
}
export interface ListUserGroupsRequest {
  UserName: string;
  AwsAccountId: string;
  Namespace: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListUserGroupsResponse {
  GroupList?: Array<Group>;
  NextToken?: string;
  RequestId?: string;
  Status?: number;
}
export interface ListUsersRequest {
  AwsAccountId: string;
  NextToken?: string;
  MaxResults?: number;
  Namespace: string;
}
export interface ListUsersResponse {
  UserList?: Array<User>;
  NextToken?: string;
  RequestId?: string;
  Status?: number;
}
export interface ListVPCConnectionsRequest {
  AwsAccountId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListVPCConnectionsResponse {
  VPCConnectionSummaries?: Array<VPCConnectionSummary>;
  NextToken?: string;
  RequestId?: string;
  Status?: number;
}
export interface LoadingAnimation {
  Visibility?: Visibility;
}
export interface LocalNavigationConfiguration {
  TargetSheetId: string;
}
export interface LogicalTable {
  Alias: string;
  DataTransforms?: Array<TransformOperation>;
  Source: LogicalTableSource;
}
export type LogicalTableAlias = string;

export type LogicalTableId = string;

export type LogicalTableMap = Record<string, LogicalTable>;
export interface LogicalTableSource {
  JoinInstruction?: JoinInstruction;
  PhysicalTableId?: string;
  DataSetArn?: string;
}
export interface Logo {
  AltText: string;
  LogoSet: LogoSet;
}
export interface LogoConfiguration {
  AltText: string;
  LogoSet: LogoSetConfiguration;
}
export interface LogoSet {
  Primary: ImageSet;
  Favicon?: ImageSet;
}
export interface LogoSetConfiguration {
  Primary: ImageSetConfiguration;
  Favicon?: ImageSetConfiguration;
}
export type Long = number;

export interface LongFormatText {
  PlainText?: string;
  RichText?: string;
}
export type Longitude = number;

export type LongPlainText = string;

export type LongRichText = string;

export interface LookbackWindow {
  ColumnName: string;
  Size: number;
  SizeUnit: LookbackWindowSizeUnit;
}
export type LookbackWindowSizeUnit = "HOUR" | "DAY" | "WEEK";
export interface ManifestFileLocation {
  Bucket: string;
  Key: string;
}
export interface MappedDataSetParameter {
  DataSetIdentifier: string;
  DataSetParameterName: string;
}
export type MappedDataSetParameters = Array<MappedDataSetParameter>;
export type MapZoomMode = "AUTO" | "MANUAL";
export interface MarginStyle {
  Show?: boolean;
}
export interface MariaDbParameters {
  Host: string;
  Port: number;
  Database: string;
}
export interface MaximumLabelType {
  Visibility?: Visibility;
}
export interface MaximumMinimumComputation {
  ComputationId: string;
  Name?: string;
  Time?: DimensionField;
  Value?: MeasureField;
  Type: MaximumMinimumComputationType;
}
export type MaximumMinimumComputationType = "MAXIMUM" | "MINIMUM";
export type MaxResults = number;

export type MaxTopicsToConsider = number;

export interface MeasureField {
  NumericalMeasureField?: NumericalMeasureField;
  CategoricalMeasureField?: CategoricalMeasureField;
  DateMeasureField?: DateMeasureField;
  CalculatedMeasureField?: CalculatedMeasureField;
}
export type MeasureFieldList = Array<MeasureField>;
export interface MemberIdArnPair {
  MemberId?: string;
  MemberArn?: string;
}
export type MemberType =
  | "DASHBOARD"
  | "ANALYSIS"
  | "DATASET"
  | "DATASOURCE"
  | "TOPIC";
export interface MetricComparisonComputation {
  ComputationId: string;
  Name?: string;
  Time?: DimensionField;
  FromValue?: MeasureField;
  TargetValue?: MeasureField;
}
export interface MinimumLabelType {
  Visibility?: Visibility;
}
export interface MissingDataConfiguration {
  TreatmentOption?: MissingDataTreatmentOption;
}
export type MissingDataConfigurationList = Array<MissingDataConfiguration>;
export type MissingDataTreatmentOption =
  | "INTERPOLATE"
  | "SHOW_AS_ZERO"
  | "SHOW_AS_BLANK";
export interface MySqlParameters {
  Host: string;
  Port: number;
  Database: string;
}
export type Name = string;

export type NamedEntityAggType =
  | "SUM"
  | "MIN"
  | "MAX"
  | "COUNT"
  | "AVERAGE"
  | "DISTINCT_COUNT"
  | "STDEV"
  | "STDEVP"
  | "VAR"
  | "VARP"
  | "PERCENTILE"
  | "MEDIAN"
  | "CUSTOM";
export interface NamedEntityDefinition {
  FieldName?: string;
  PropertyName?: string;
  PropertyRole?: PropertyRole;
  PropertyUsage?: PropertyUsage;
  Metric?: NamedEntityDefinitionMetric;
}
export interface NamedEntityDefinitionMetric {
  Aggregation?: NamedEntityAggType;
  AggregationFunctionParameters?: Record<string, string>;
}
export type NamedEntityDefinitions = Array<NamedEntityDefinition>;
export interface NamedEntityRef {
  NamedEntityName?: string;
}
export type NamedFilterAggType =
  | "NO_AGGREGATION"
  | "SUM"
  | "AVERAGE"
  | "COUNT"
  | "DISTINCT_COUNT"
  | "MAX"
  | "MEDIAN"
  | "MIN"
  | "STDEV"
  | "STDEVP"
  | "VAR"
  | "VARP";
export type NamedFilterType =
  | "CATEGORY_FILTER"
  | "NUMERIC_EQUALITY_FILTER"
  | "NUMERIC_RANGE_FILTER"
  | "DATE_RANGE_FILTER"
  | "RELATIVE_DATE_FILTER";
export type Namespace = string;

export interface NamespaceError {
  Type?: NamespaceErrorType;
  Message?: string;
}
export type NamespaceErrorType = "PERMISSION_DENIED" | "INTERNAL_SERVICE_ERROR";
export interface NamespaceInfoV2 {
  Name?: string;
  Arn?: string;
  CapacityRegion?: string;
  CreationStatus?: NamespaceStatus;
  IdentityStore?: IdentityStore;
  NamespaceError?: NamespaceError;
  IamIdentityCenterApplicationArn?: string;
  IamIdentityCenterInstanceArn?: string;
}
export type Namespaces = Array<NamespaceInfoV2>;
export type NamespaceStatus =
  | "CREATED"
  | "CREATING"
  | "DELETING"
  | "RETRYABLE_FAILURE"
  | "NON_RETRYABLE_FAILURE";
export type NarrativeString = string;

export interface NavbarStyle {
  GlobalNavbar?: Palette;
  ContextualNavbar?: Palette;
}
export interface NegativeFormat {
  Prefix?: string;
  Suffix?: string;
}
export interface NegativeValueConfiguration {
  DisplayMode: NegativeValueDisplayMode;
}
export type NegativeValueDisplayMode = "POSITIVE" | "NEGATIVE";
export interface NestedFilter {
  FilterId: string;
  Column: ColumnIdentifier;
  IncludeInnerSet: boolean;
  InnerFilter: InnerFilter;
}
export interface NetworkInterface {
  SubnetId?: string;
  AvailabilityZone?: string;
  ErrorMessage?: string;
  Status?: NetworkInterfaceStatus;
  NetworkInterfaceId?: string;
}
export type NetworkInterfaceId = string;

export type NetworkInterfaceList = Array<NetworkInterface>;
export type NetworkInterfaceStatus =
  | "CREATING"
  | "AVAILABLE"
  | "CREATION_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "DELETING"
  | "DELETED"
  | "DELETION_FAILED"
  | "DELETION_SCHEDULED"
  | "ATTACHMENT_FAILED_ROLLBACK_FAILED";
export interface NewDefaultValues {
  StringStaticValues?: Array<string>;
  DecimalStaticValues?: Array<number>;
  DateTimeStaticValues?: Array<Date | string>;
  IntegerStaticValues?: Array<number>;
}
export type NonEmptyString = string;

export type NonRepeatingVisualsList = Array<string>;
export type NullableBoolean = boolean;

export type NullFilterOption = "ALL_VALUES" | "NON_NULLS_ONLY" | "NULLS_ONLY";
export type NullString = string;

export interface NullValueFormatConfiguration {
  NullString: string;
}
export interface NumberDisplayFormatConfiguration {
  Prefix?: string;
  Suffix?: string;
  SeparatorConfiguration?: NumericSeparatorConfiguration;
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration;
  NumberScale?: NumberScale;
  NegativeValueConfiguration?: NegativeValueConfiguration;
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
}
export interface NumberFormatConfiguration {
  FormatConfiguration?: NumericFormatConfiguration;
}
export type NumberScale =
  | "NONE"
  | "AUTO"
  | "THOUSANDS"
  | "MILLIONS"
  | "BILLIONS"
  | "TRILLIONS"
  | "LAKHS"
  | "CRORES";
export interface NumericalAggregationFunction {
  SimpleNumericalAggregation?: SimpleNumericalAggregationFunction;
  PercentileAggregation?: PercentileAggregation;
}
export interface NumericalDimensionField {
  FieldId: string;
  Column: ColumnIdentifier;
  HierarchyId?: string;
  FormatConfiguration?: NumberFormatConfiguration;
}
export interface NumericalMeasureField {
  FieldId: string;
  Column: ColumnIdentifier;
  AggregationFunction?: NumericalAggregationFunction;
  FormatConfiguration?: NumberFormatConfiguration;
}
export interface NumericAxisOptions {
  Scale?: AxisScale;
  Range?: AxisDisplayRange;
}
export interface NumericEqualityDrillDownFilter {
  Column: ColumnIdentifier;
  Value: number;
}
export interface NumericEqualityFilter {
  FilterId: string;
  Column: ColumnIdentifier;
  Value?: number;
  SelectAllOptions?: NumericFilterSelectAllOptions;
  MatchOperator: NumericEqualityMatchOperator;
  AggregationFunction?: AggregationFunction;
  ParameterName?: string;
  NullOption: FilterNullOption;
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration;
}
export type NumericEqualityMatchOperator = "EQUALS" | "DOES_NOT_EQUAL";
export type NumericFilterSelectAllOptions = "FILTER_ALL_VALUES";
export interface NumericFormatConfiguration {
  NumberDisplayFormatConfiguration?: NumberDisplayFormatConfiguration;
  CurrencyDisplayFormatConfiguration?: CurrencyDisplayFormatConfiguration;
  PercentageDisplayFormatConfiguration?: PercentageDisplayFormatConfiguration;
}
export interface NumericRangeFilter {
  FilterId: string;
  Column: ColumnIdentifier;
  IncludeMinimum?: boolean;
  IncludeMaximum?: boolean;
  RangeMinimum?: NumericRangeFilterValue;
  RangeMaximum?: NumericRangeFilterValue;
  SelectAllOptions?: NumericFilterSelectAllOptions;
  AggregationFunction?: AggregationFunction;
  NullOption: FilterNullOption;
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration;
}
export interface NumericRangeFilterValue {
  StaticValue?: number;
  Parameter?: string;
}
export interface NumericSeparatorConfiguration {
  DecimalSeparator?: NumericSeparatorSymbol;
  ThousandsSeparator?: ThousandSeparatorOptions;
}
export type NumericSeparatorSymbol = "COMMA" | "DOT" | "SPACE";
export interface OAuthParameters {
  TokenProviderUrl: string;
  OAuthScope?: string;
  IdentityProviderVpcConnectionProperties?: VpcConnectionProperties;
  IdentityProviderResourceUri?: string;
}
export type OAuthScope = string;

export type OnClause = string;

export type Opacity = number;

export type OperandList = Array<Identifier>;
export type OptionalPort = number;

export interface OracleParameters {
  Host: string;
  Port: number;
  Database: string;
  UseServiceName?: boolean;
}
export type OtherCategories = "INCLUDE" | "EXCLUDE";
export interface OutputColumn {
  Name?: string;
  Description?: string;
  Type?: ColumnDataType;
  SubType?: ColumnDataSubType;
}
export type OutputColumnList = Array<OutputColumn>;
export interface OverrideDatasetParameterOperation {
  ParameterName: string;
  NewParameterName?: string;
  NewDefaultValues?: NewDefaultValues;
}
export type PageNumber = number;

export interface PaginationConfiguration {
  PageSize: number;
  PageNumber: number;
}
export interface Palette {
  Foreground?: string;
  Background?: string;
}
export type PanelBorderStyle = "SOLID" | "DASHED" | "DOTTED";
export interface PanelConfiguration {
  Title?: PanelTitleOptions;
  BorderVisibility?: Visibility;
  BorderThickness?: string;
  BorderStyle?: PanelBorderStyle;
  BorderColor?: string;
  GutterVisibility?: Visibility;
  GutterSpacing?: string;
  BackgroundVisibility?: Visibility;
  BackgroundColor?: string;
}
export interface PanelTitleOptions {
  Visibility?: Visibility;
  FontConfiguration?: FontConfiguration;
  HorizontalTextAlignment?: HorizontalTextAlignment;
}
export type PaperOrientation = "PORTRAIT" | "LANDSCAPE";
export type PaperSize =
  | "US_LETTER"
  | "US_LEGAL"
  | "US_TABLOID_LEDGER"
  | "A0"
  | "A1"
  | "A2"
  | "A3"
  | "A4"
  | "A5"
  | "JIS_B4"
  | "JIS_B5";
export interface ParameterControl {
  DateTimePicker?: ParameterDateTimePickerControl;
  List?: ParameterListControl;
  Dropdown?: ParameterDropDownControl;
  TextField?: ParameterTextFieldControl;
  TextArea?: ParameterTextAreaControl;
  Slider?: ParameterSliderControl;
}
export type ParameterControlList = Array<ParameterControl>;
export interface ParameterDateTimePickerControl {
  ParameterControlId: string;
  Title: string;
  SourceParameterName: string;
  DisplayOptions?: DateTimePickerControlDisplayOptions;
}
export interface ParameterDeclaration {
  StringParameterDeclaration?: StringParameterDeclaration;
  DecimalParameterDeclaration?: DecimalParameterDeclaration;
  IntegerParameterDeclaration?: IntegerParameterDeclaration;
  DateTimeParameterDeclaration?: DateTimeParameterDeclaration;
}
export type ParameterDeclarationList = Array<ParameterDeclaration>;
export interface ParameterDropDownControl {
  ParameterControlId: string;
  Title: string;
  SourceParameterName: string;
  DisplayOptions?: DropDownControlDisplayOptions;
  Type?: SheetControlListType;
  SelectableValues?: ParameterSelectableValues;
  CascadingControlConfiguration?: CascadingControlConfiguration;
  CommitMode?: CommitMode;
}
export interface ParameterListControl {
  ParameterControlId: string;
  Title: string;
  SourceParameterName: string;
  DisplayOptions?: ListControlDisplayOptions;
  Type?: SheetControlListType;
  SelectableValues?: ParameterSelectableValues;
  CascadingControlConfiguration?: CascadingControlConfiguration;
}
export type ParameterName = string;

export interface Parameters {
  StringParameters?: Array<StringParameter>;
  IntegerParameters?: Array<IntegerParameter>;
  DecimalParameters?: Array<DecimalParameter>;
  DateTimeParameters?: Array<DateTimeParameter>;
}
export type ParameterSelectableValueList = Array<string>;
export interface ParameterSelectableValues {
  Values?: Array<string>;
  LinkToDataSetColumn?: ColumnIdentifier;
}
export interface ParameterSliderControl {
  ParameterControlId: string;
  Title: string;
  SourceParameterName: string;
  DisplayOptions?: SliderControlDisplayOptions;
  MaximumValue: number;
  MinimumValue: number;
  StepSize: number;
}
export interface ParameterTextAreaControl {
  ParameterControlId: string;
  Title: string;
  SourceParameterName: string;
  Delimiter?: string;
  DisplayOptions?: TextAreaControlDisplayOptions;
}
export interface ParameterTextFieldControl {
  ParameterControlId: string;
  Title: string;
  SourceParameterName: string;
  DisplayOptions?: TextFieldControlDisplayOptions;
}
export type ParameterValueType = "MULTI_VALUED" | "SINGLE_VALUED";
export type Password = string;

export type Path = Array<string>;
export interface PercentageDisplayFormatConfiguration {
  Prefix?: string;
  Suffix?: string;
  SeparatorConfiguration?: NumericSeparatorConfiguration;
  DecimalPlacesConfiguration?: DecimalPlacesConfiguration;
  NegativeValueConfiguration?: NegativeValueConfiguration;
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
}
export interface PercentileAggregation {
  PercentileValue?: number;
}
export type PercentileValue = number;

export type PercentNumber = number;

export interface PercentVisibleRange {
  From?: number;
  To?: number;
}
export interface PerformanceConfiguration {
  UniqueKeys?: Array<UniqueKey>;
}
export interface PeriodOverPeriodComputation {
  ComputationId: string;
  Name?: string;
  Time?: DimensionField;
  Value?: MeasureField;
}
export type PeriodsBackward = number;

export type PeriodsForward = number;

export interface PeriodToDateComputation {
  ComputationId: string;
  Name?: string;
  Time?: DimensionField;
  Value?: MeasureField;
  PeriodTimeGranularity?: TimeGranularity;
}
export type PersonalizationMode = "ENABLED" | "DISABLED";
export type PhysicalTable =
  | { RelationalTable: RelationalTable }
  | { CustomSql: CustomSql }
  | { S3Source: S3Source };
export type PhysicalTableId = string;

export type PhysicalTableMap = Record<string, PhysicalTable>;
export interface PieChartAggregatedFieldWells {
  Category?: Array<DimensionField>;
  Values?: Array<MeasureField>;
  SmallMultiples?: Array<DimensionField>;
}
export interface PieChartConfiguration {
  FieldWells?: PieChartFieldWells;
  SortConfiguration?: PieChartSortConfiguration;
  DonutOptions?: DonutOptions;
  SmallMultiplesOptions?: SmallMultiplesOptions;
  CategoryLabelOptions?: ChartAxisLabelOptions;
  ValueLabelOptions?: ChartAxisLabelOptions;
  Legend?: LegendOptions;
  DataLabels?: DataLabelOptions;
  Tooltip?: TooltipOptions;
  VisualPalette?: VisualPalette;
  ContributionAnalysisDefaults?: Array<ContributionAnalysisDefault>;
  Interactions?: VisualInteractionOptions;
}
export interface PieChartFieldWells {
  PieChartAggregatedFieldWells?: PieChartAggregatedFieldWells;
}
export interface PieChartSortConfiguration {
  CategorySort?: Array<FieldSortOptions>;
  CategoryItemsLimit?: ItemsLimitConfiguration;
  SmallMultiplesSort?: Array<FieldSortOptions>;
  SmallMultiplesLimitConfiguration?: ItemsLimitConfiguration;
}
export interface PieChartVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: PieChartConfiguration;
  Actions?: Array<VisualCustomAction>;
  ColumnHierarchies?: Array<ColumnHierarchy>;
  VisualContentAltText?: string;
}
export interface PivotFieldSortOptions {
  FieldId: string;
  SortBy: PivotTableSortBy;
}
export type PivotFieldSortOptionsList = Array<PivotFieldSortOptions>;
export type PivotMeasureFieldList = Array<MeasureField>;
export interface PivotTableAggregatedFieldWells {
  Rows?: Array<DimensionField>;
  Columns?: Array<DimensionField>;
  Values?: Array<MeasureField>;
}
export interface PivotTableCellConditionalFormatting {
  FieldId: string;
  TextFormat?: TextConditionalFormat;
  Scope?: PivotTableConditionalFormattingScope;
  Scopes?: Array<PivotTableConditionalFormattingScope>;
}
export interface PivotTableConditionalFormatting {
  ConditionalFormattingOptions?: Array<PivotTableConditionalFormattingOption>;
}
export interface PivotTableConditionalFormattingOption {
  Cell?: PivotTableCellConditionalFormatting;
}
export type PivotTableConditionalFormattingOptionList =
  Array<PivotTableConditionalFormattingOption>;
export interface PivotTableConditionalFormattingScope {
  Role?: PivotTableConditionalFormattingScopeRole;
}
export type PivotTableConditionalFormattingScopeList =
  Array<PivotTableConditionalFormattingScope>;
export type PivotTableConditionalFormattingScopeRole =
  | "FIELD"
  | "FIELD_TOTAL"
  | "GRAND_TOTAL";
export interface PivotTableConfiguration {
  FieldWells?: PivotTableFieldWells;
  SortConfiguration?: PivotTableSortConfiguration;
  TableOptions?: PivotTableOptions;
  TotalOptions?: PivotTableTotalOptions;
  FieldOptions?: PivotTableFieldOptions;
  PaginatedReportOptions?: PivotTablePaginatedReportOptions;
  Interactions?: VisualInteractionOptions;
}
export interface PivotTableDataPathOption {
  DataPathList: Array<DataPathValue>;
  Width?: string;
}
export type PivotTableDataPathOptionList = Array<PivotTableDataPathOption>;
export type PivotTableDataPathType =
  | "HIERARCHY_ROWS_LAYOUT_COLUMN"
  | "MULTIPLE_ROW_METRICS_COLUMN"
  | "EMPTY_COLUMN_HEADER"
  | "COUNT_METRIC_COLUMN";
export type PivotTableDimensionList = Array<DimensionField>;
export type PivotTableFieldCollapseState = "COLLAPSED" | "EXPANDED";
export interface PivotTableFieldCollapseStateOption {
  Target: PivotTableFieldCollapseStateTarget;
  State?: PivotTableFieldCollapseState;
}
export type PivotTableFieldCollapseStateOptionList =
  Array<PivotTableFieldCollapseStateOption>;
export interface PivotTableFieldCollapseStateTarget {
  FieldId?: string;
  FieldDataPathValues?: Array<DataPathValue>;
}
export interface PivotTableFieldOption {
  FieldId: string;
  CustomLabel?: string;
  Visibility?: Visibility;
}
export type PivotTableFieldOptionList = Array<PivotTableFieldOption>;
export interface PivotTableFieldOptions {
  SelectedFieldOptions?: Array<PivotTableFieldOption>;
  DataPathOptions?: Array<PivotTableDataPathOption>;
  CollapseStateOptions?: Array<PivotTableFieldCollapseStateOption>;
}
export interface PivotTableFieldSubtotalOptions {
  FieldId?: string;
}
export type PivotTableFieldSubtotalOptionsList =
  Array<PivotTableFieldSubtotalOptions>;
export interface PivotTableFieldWells {
  PivotTableAggregatedFieldWells?: PivotTableAggregatedFieldWells;
}
export type PivotTableMetricPlacement = "ROW" | "COLUMN";
export interface PivotTableOptions {
  MetricPlacement?: PivotTableMetricPlacement;
  SingleMetricVisibility?: Visibility;
  ColumnNamesVisibility?: Visibility;
  ToggleButtonsVisibility?: Visibility;
  ColumnHeaderStyle?: TableCellStyle;
  RowHeaderStyle?: TableCellStyle;
  CellStyle?: TableCellStyle;
  RowFieldNamesStyle?: TableCellStyle;
  RowAlternateColorOptions?: RowAlternateColorOptions;
  CollapsedRowDimensionsVisibility?: Visibility;
  RowsLayout?: PivotTableRowsLayout;
  RowsLabelOptions?: PivotTableRowsLabelOptions;
  DefaultCellWidth?: string;
}
export interface PivotTablePaginatedReportOptions {
  VerticalOverflowVisibility?: Visibility;
  OverflowColumnHeaderVisibility?: Visibility;
}
export interface PivotTableRowsLabelOptions {
  Visibility?: Visibility;
  CustomLabel?: string;
}
export type PivotTableRowsLabelText = string;

export type PivotTableRowsLayout = "TABULAR" | "HIERARCHY";
export interface PivotTableSortBy {
  Field?: FieldSort;
  Column?: ColumnSort;
  DataPath?: DataPathSort;
}
export interface PivotTableSortConfiguration {
  FieldSortOptions?: Array<PivotFieldSortOptions>;
}
export type PivotTableSubtotalLevel = "ALL" | "CUSTOM" | "LAST";
export interface PivotTableTotalOptions {
  RowSubtotalOptions?: SubtotalOptions;
  ColumnSubtotalOptions?: SubtotalOptions;
  RowTotalOptions?: PivotTotalOptions;
  ColumnTotalOptions?: PivotTotalOptions;
}
export interface PivotTableVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: PivotTableConfiguration;
  ConditionalFormatting?: PivotTableConditionalFormatting;
  Actions?: Array<VisualCustomAction>;
  VisualContentAltText?: string;
}
export interface PivotTotalOptions {
  TotalsVisibility?: Visibility;
  Placement?: TableTotalsPlacement;
  ScrollStatus?: TableTotalsScrollStatus;
  CustomLabel?: string;
  TotalCellStyle?: TableCellStyle;
  ValueCellStyle?: TableCellStyle;
  MetricHeaderCellStyle?: TableCellStyle;
  TotalAggregationOptions?: Array<TotalAggregationOption>;
}
export type PixelLength = string;

export interface PluginVisual {
  VisualId: string;
  PluginArn: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: PluginVisualConfiguration;
  VisualContentAltText?: string;
}
export type PluginVisualAxisName = "GROUP_BY" | "VALUE";
export interface PluginVisualConfiguration {
  FieldWells?: Array<PluginVisualFieldWell>;
  VisualOptions?: PluginVisualOptions;
  SortConfiguration?: PluginVisualSortConfiguration;
}
export interface PluginVisualFieldWell {
  AxisName?: PluginVisualAxisName;
  Dimensions?: Array<DimensionField>;
  Measures?: Array<MeasureField>;
  Unaggregated?: Array<UnaggregatedField>;
}
export type PluginVisualFieldWells = Array<PluginVisualFieldWell>;
export interface PluginVisualItemsLimitConfiguration {
  ItemsLimit?: number;
}
export interface PluginVisualOptions {
  VisualProperties?: Array<PluginVisualProperty>;
}
export type PluginVisualPropertiesList = Array<PluginVisualProperty>;
export interface PluginVisualProperty {
  Name?: string;
  Value?: string;
}
export interface PluginVisualSortConfiguration {
  PluginVisualTableQuerySort?: PluginVisualTableQuerySort;
}
export interface PluginVisualTableQuerySort {
  RowSort?: Array<FieldSortOptions>;
  ItemsLimitConfiguration?: PluginVisualItemsLimitConfiguration;
}
export type Port = number;

export type PositiveInteger = number;

export type PositiveLong = number;

export interface PostgreSqlParameters {
  Host: string;
  Port: number;
  Database: string;
}
export declare class PreconditionNotMetException extends EffectData.TaggedError(
  "PreconditionNotMetException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface PredefinedHierarchy {
  HierarchyId: string;
  Columns: Array<ColumnIdentifier>;
  DrillDownFilters?: Array<DrillDownFilter>;
}
export type PredefinedHierarchyColumnList = Array<ColumnIdentifier>;
export type PredictionInterval = number;

export interface PredictQAResultsRequest {
  AwsAccountId: string;
  QueryText: string;
  IncludeQuickSightQIndex?: IncludeQuickSightQIndex;
  IncludeGeneratedAnswer?: IncludeGeneratedAnswer;
  MaxTopicsToConsider?: number;
}
export interface PredictQAResultsResponse {
  PrimaryResult?: QAResult;
  AdditionalResults?: Array<QAResult>;
  RequestId?: string;
  Status?: number;
}
export type Prefix = string;

export interface PrestoParameters {
  Host: string;
  Port: number;
  Catalog: string;
}
export type PrimaryValueDisplayType = "HIDDEN" | "COMPARISON" | "ACTUAL";
export type Principal = string;

export type PrincipalList = Array<string>;
export interface ProgressBarOptions {
  Visibility?: Visibility;
}
export type ProjectedColumnList = Array<string>;
export type ProjectId = string;

export interface ProjectOperation {
  ProjectedColumns: Array<string>;
}
export type PropertyRole = "PRIMARY" | "ID";
export type PropertyUsage = "INHERIT" | "DIMENSION" | "MEASURE";
export type PurchaseMode = "MANUAL" | "AUTO_PURCHASE";
export interface PutDataSetRefreshPropertiesRequest {
  AwsAccountId: string;
  DataSetId: string;
  DataSetRefreshProperties: DataSetRefreshProperties;
}
export interface PutDataSetRefreshPropertiesResponse {
  RequestId?: string;
  Status?: number;
}
export type QAQueryText = string;

export interface QAResult {
  ResultType?: QAResultType;
  DashboardVisual?: DashboardVisualResult;
  GeneratedAnswer?: GeneratedAnswerResult;
}
export type QAResults = Array<QAResult>;
export type QAResultType =
  | "DASHBOARD_VISUAL"
  | "GENERATED_ANSWER"
  | "NO_ANSWER";
export type QAUrl = string;

export type QBusinessInsightsStatus = "ENABLED" | "DISABLED";
export type QSearchStatus = "ENABLED" | "DISABLED";
export type Query = string;

export type QueryExecutionMode = "AUTO" | "MANUAL";
export interface QueryExecutionOptions {
  QueryExecutionMode?: QueryExecutionMode;
}
export type QuestionId = string;

export interface QueueInfo {
  WaitingOnIngestion: string;
  QueuedIngestion: string;
}
export declare class QuickSightUserNotFoundException extends EffectData.TaggedError(
  "QuickSightUserNotFoundException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface RadarChartAggregatedFieldWells {
  Category?: Array<DimensionField>;
  Color?: Array<DimensionField>;
  Values?: Array<MeasureField>;
}
export interface RadarChartAreaStyleSettings {
  Visibility?: Visibility;
}
export type RadarChartAxesRangeScale = "AUTO" | "INDEPENDENT" | "SHARED";
export type RadarChartCategoryFieldList = Array<DimensionField>;
export type RadarChartColorFieldList = Array<DimensionField>;
export interface RadarChartConfiguration {
  FieldWells?: RadarChartFieldWells;
  SortConfiguration?: RadarChartSortConfiguration;
  Shape?: RadarChartShape;
  BaseSeriesSettings?: RadarChartSeriesSettings;
  StartAngle?: number;
  VisualPalette?: VisualPalette;
  AlternateBandColorsVisibility?: Visibility;
  AlternateBandEvenColor?: string;
  AlternateBandOddColor?: string;
  CategoryAxis?: AxisDisplayOptions;
  CategoryLabelOptions?: ChartAxisLabelOptions;
  ColorAxis?: AxisDisplayOptions;
  ColorLabelOptions?: ChartAxisLabelOptions;
  Legend?: LegendOptions;
  AxesRangeScale?: RadarChartAxesRangeScale;
  Interactions?: VisualInteractionOptions;
}
export interface RadarChartFieldWells {
  RadarChartAggregatedFieldWells?: RadarChartAggregatedFieldWells;
}
export interface RadarChartSeriesSettings {
  AreaStyleSettings?: RadarChartAreaStyleSettings;
}
export type RadarChartShape = "CIRCLE" | "POLYGON";
export interface RadarChartSortConfiguration {
  CategorySort?: Array<FieldSortOptions>;
  CategoryItemsLimit?: ItemsLimitConfiguration;
  ColorSort?: Array<FieldSortOptions>;
  ColorItemsLimit?: ItemsLimitConfiguration;
}
export type RadarChartStartAngle = number;

export type RadarChartValuesFieldList = Array<MeasureField>;
export interface RadarChartVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: RadarChartConfiguration;
  Actions?: Array<VisualCustomAction>;
  ColumnHierarchies?: Array<ColumnHierarchy>;
  VisualContentAltText?: string;
}
export interface RangeConstant {
  Minimum?: string;
  Maximum?: string;
}
export interface RangeEndsLabelType {
  Visibility?: Visibility;
}
export interface RdsParameters {
  InstanceId: string;
  Database: string;
}
export interface RecentSnapshotsConfigurations {
  Enabled: boolean;
}
export type RecoveryWindowInDays = number;

export interface RedshiftIAMParameters {
  RoleArn: string;
  DatabaseUser?: string;
  DatabaseGroups?: Array<string>;
  AutoCreateDatabaseUser?: boolean;
}
export interface RedshiftParameters {
  Host?: string;
  Port?: number;
  Database: string;
  ClusterId?: string;
  IAMParameters?: RedshiftIAMParameters;
  IdentityCenterConfiguration?: IdentityCenterConfiguration;
}
export interface ReferenceLine {
  Status?: WidgetStatus;
  DataConfiguration: ReferenceLineDataConfiguration;
  StyleConfiguration?: ReferenceLineStyleConfiguration;
  LabelConfiguration?: ReferenceLineLabelConfiguration;
}
export interface ReferenceLineCustomLabelConfiguration {
  CustomLabel: string;
}
export interface ReferenceLineDataConfiguration {
  StaticConfiguration?: ReferenceLineStaticDataConfiguration;
  DynamicConfiguration?: ReferenceLineDynamicDataConfiguration;
  AxisBinding?: AxisBinding;
  SeriesType?: ReferenceLineSeriesType;
}
export interface ReferenceLineDynamicDataConfiguration {
  Column: ColumnIdentifier;
  MeasureAggregationFunction?: AggregationFunction;
  Calculation: NumericalAggregationFunction;
}
export interface ReferenceLineLabelConfiguration {
  ValueLabelConfiguration?: ReferenceLineValueLabelConfiguration;
  CustomLabelConfiguration?: ReferenceLineCustomLabelConfiguration;
  FontConfiguration?: FontConfiguration;
  FontColor?: string;
  HorizontalPosition?: ReferenceLineLabelHorizontalPosition;
  VerticalPosition?: ReferenceLineLabelVerticalPosition;
}
export type ReferenceLineLabelHorizontalPosition = "LEFT" | "CENTER" | "RIGHT";
export type ReferenceLineLabelVerticalPosition = "ABOVE" | "BELOW";
export type ReferenceLineList = Array<ReferenceLine>;
export type ReferenceLinePatternType = "SOLID" | "DASHED" | "DOTTED";
export type ReferenceLineSeriesType = "BAR" | "LINE";
export interface ReferenceLineStaticDataConfiguration {
  Value: number;
}
export interface ReferenceLineStyleConfiguration {
  Pattern?: ReferenceLinePatternType;
  Color?: string;
}
export interface ReferenceLineValueLabelConfiguration {
  RelativePosition?: ReferenceLineValueLabelRelativePosition;
  FormatConfiguration?: NumericFormatConfiguration;
}
export type ReferenceLineValueLabelRelativePosition =
  | "BEFORE_CUSTOM_LABEL"
  | "AFTER_CUSTOM_LABEL";
export interface RefreshConfiguration {
  IncrementalRefresh: IncrementalRefresh;
}
export type RefreshFailureAlertStatus = "ENABLED" | "DISABLED";
export interface RefreshFailureConfiguration {
  EmailAlert?: RefreshFailureEmailAlert;
}
export interface RefreshFailureEmailAlert {
  AlertStatus?: RefreshFailureAlertStatus;
}
export interface RefreshFrequency {
  Interval: RefreshInterval;
  RefreshOnDay?: ScheduleRefreshOnEntity;
  Timezone?: string;
  TimeOfTheDay?: string;
}
export type RefreshInterval =
  | "MINUTE15"
  | "MINUTE30"
  | "HOURLY"
  | "DAILY"
  | "WEEKLY"
  | "MONTHLY";
export interface RefreshSchedule {
  ScheduleId: string;
  ScheduleFrequency: RefreshFrequency;
  StartAfterDateTime?: Date | string;
  RefreshType: IngestionType;
  Arn?: string;
}
export type RefreshSchedules = Array<RefreshSchedule>;
export interface RegisteredCustomerManagedKey {
  KeyArn?: string;
  DefaultKey?: boolean;
}
export interface RegisteredUserConsoleFeatureConfigurations {
  StatePersistence?: StatePersistenceConfigurations;
  SharedView?: SharedViewConfigurations;
  AmazonQInQuickSight?: AmazonQInQuickSightConsoleConfigurations;
  Schedules?: SchedulesConfigurations;
  RecentSnapshots?: RecentSnapshotsConfigurations;
  ThresholdAlerts?: ThresholdAlertsConfigurations;
}
export interface RegisteredUserDashboardEmbeddingConfiguration {
  InitialDashboardId: string;
  FeatureConfigurations?: RegisteredUserDashboardFeatureConfigurations;
}
export interface RegisteredUserDashboardFeatureConfigurations {
  StatePersistence?: StatePersistenceConfigurations;
  SharedView?: SharedViewConfigurations;
  Bookmarks?: BookmarksConfigurations;
  AmazonQInQuickSight?: AmazonQInQuickSightDashboardConfigurations;
  Schedules?: SchedulesConfigurations;
  RecentSnapshots?: RecentSnapshotsConfigurations;
  ThresholdAlerts?: ThresholdAlertsConfigurations;
}
export interface RegisteredUserDashboardVisualEmbeddingConfiguration {
  InitialDashboardVisualId: DashboardVisualId;
}
export interface RegisteredUserEmbeddingExperienceConfiguration {
  Dashboard?: RegisteredUserDashboardEmbeddingConfiguration;
  QuickSightConsole?: RegisteredUserQuickSightConsoleEmbeddingConfiguration;
  QSearchBar?: RegisteredUserQSearchBarEmbeddingConfiguration;
  DashboardVisual?: RegisteredUserDashboardVisualEmbeddingConfiguration;
  GenerativeQnA?: RegisteredUserGenerativeQnAEmbeddingConfiguration;
}
export interface RegisteredUserGenerativeQnAEmbeddingConfiguration {
  InitialTopicId?: string;
}
export interface RegisteredUserQSearchBarEmbeddingConfiguration {
  InitialTopicId?: string;
}
export interface RegisteredUserQuickSightConsoleEmbeddingConfiguration {
  InitialPath?: string;
  FeatureConfigurations?: RegisteredUserConsoleFeatureConfigurations;
}
export interface RegisterUserRequest {
  IdentityType: IdentityType;
  Email: string;
  UserRole: UserRole;
  IamArn?: string;
  SessionName?: string;
  AwsAccountId: string;
  Namespace: string;
  UserName?: string;
  CustomPermissionsName?: string;
  ExternalLoginFederationProviderType?: string;
  CustomFederationProviderUrl?: string;
  ExternalLoginId?: string;
  Tags?: Array<Tag>;
}
export interface RegisterUserResponse {
  User?: User;
  UserInvitationUrl?: string;
  RequestId?: string;
  Status?: number;
}
export interface RelationalTable {
  DataSourceArn: string;
  Catalog?: string;
  Schema?: string;
  Name: string;
  InputColumns: Array<InputColumn>;
}
export type RelationalTableCatalog = string;

export type RelationalTableName = string;

export type RelationalTableSchema = string;

export interface RelativeDatesFilter {
  FilterId: string;
  Column: ColumnIdentifier;
  AnchorDateConfiguration: AnchorDateConfiguration;
  MinimumGranularity?: TimeGranularity;
  TimeGranularity: TimeGranularity;
  RelativeDateType: RelativeDateType;
  RelativeDateValue?: number;
  ParameterName?: string;
  NullOption: FilterNullOption;
  ExcludePeriodConfiguration?: ExcludePeriodConfiguration;
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration;
}
export interface RelativeDateTimeControlDisplayOptions {
  TitleOptions?: LabelOptions;
  DateTimeFormat?: string;
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
}
export type RelativeDateType = "PREVIOUS" | "THIS" | "LAST" | "NOW" | "NEXT";
export type RelativeFontSize =
  | "EXTRA_SMALL"
  | "SMALL"
  | "MEDIUM"
  | "LARGE"
  | "EXTRA_LARGE";
export interface RenameColumnOperation {
  ColumnName: string;
  NewColumnName: string;
}
export type ResizeOption = "FIXED" | "RESPONSIVE";
export declare class ResourceExistsException extends EffectData.TaggedError(
  "ResourceExistsException",
)<{
  readonly Message?: string;
  readonly ResourceType?: ExceptionResourceType;
  readonly RequestId?: string;
}> {}
export type ResourceId = string;

export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceType?: ExceptionResourceType;
  readonly RequestId?: string;
}> {}
export interface ResourcePermission {
  Principal: string;
  Actions: Array<string>;
}
export type ResourcePermissionList = Array<ResourcePermission>;
export type ResourceStatus =
  | "CREATION_IN_PROGRESS"
  | "CREATION_SUCCESSFUL"
  | "CREATION_FAILED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_SUCCESSFUL"
  | "UPDATE_FAILED"
  | "DELETED";
export declare class ResourceUnavailableException extends EffectData.TaggedError(
  "ResourceUnavailableException",
)<{
  readonly Message?: string;
  readonly ResourceType?: ExceptionResourceType;
  readonly RequestId?: string;
}> {}
export interface RestoreAnalysisRequest {
  AwsAccountId: string;
  AnalysisId: string;
  RestoreToFolders?: boolean;
}
export interface RestoreAnalysisResponse {
  Status?: number;
  Arn?: string;
  AnalysisId?: string;
  RequestId?: string;
  RestorationFailedFolderArns?: Array<string>;
}
export type RestrictiveResourceId = string;

export type ReviewedAnswerErrorCode =
  | "INTERNAL_ERROR"
  | "MISSING_ANSWER"
  | "DATASET_DOES_NOT_EXIST"
  | "INVALID_DATASET_ARN"
  | "DUPLICATED_ANSWER"
  | "INVALID_DATA"
  | "MISSING_REQUIRED_FIELDS";
export type Role =
  | "ADMIN"
  | "AUTHOR"
  | "READER"
  | "ADMIN_PRO"
  | "AUTHOR_PRO"
  | "READER_PRO";
export type RoleArn = string;

export type RoleName = string;

export type RoleSessionName = string;

export interface RollingDateConfiguration {
  DataSetIdentifier?: string;
  Expression: string;
}
export type RowAlternateColorList = Array<string>;
export interface RowAlternateColorOptions {
  Status?: WidgetStatus;
  RowAlternateColors?: Array<string>;
  UsePrimaryBackgroundColor?: WidgetStatus;
}
export interface RowInfo {
  RowsIngested?: number;
  RowsDropped?: number;
  TotalRowsInDataset?: number;
}
export interface RowLevelPermissionDataSet {
  Namespace?: string;
  Arn: string;
  PermissionPolicy: RowLevelPermissionPolicy;
  FormatVersion?: RowLevelPermissionFormatVersion;
  Status?: Status;
}
export type RowLevelPermissionFormatVersion = "VERSION_1" | "VERSION_2";
export type RowLevelPermissionPolicy = "GRANT_ACCESS" | "DENY_ACCESS";
export interface RowLevelPermissionTagConfiguration {
  Status?: Status;
  TagRules: Array<RowLevelPermissionTagRule>;
  TagRuleConfigurations?: Array<Array<string>>;
}
export type RowLevelPermissionTagDelimiter = string;

export interface RowLevelPermissionTagRule {
  TagKey: string;
  ColumnName: string;
  TagMultiValueDelimiter?: string;
  MatchAllValue?: string;
}
export type RowLevelPermissionTagRuleConfiguration = Array<string>;
export type RowLevelPermissionTagRuleConfigurationList = Array<Array<string>>;
export type RowLevelPermissionTagRuleList = Array<RowLevelPermissionTagRule>;
export type RowSortList = Array<FieldSortOptions>;
export type S3Bucket = string;

export interface S3BucketConfiguration {
  BucketName: string;
  BucketPrefix: string;
  BucketRegion: string;
}
export type S3Key = string;

export interface S3Parameters {
  ManifestFileLocation: ManifestFileLocation;
  RoleArn?: string;
}
export interface S3Source {
  DataSourceArn: string;
  UploadSettings?: UploadSettings;
  InputColumns: Array<InputColumn>;
}
export type S3Uri = string;

export interface SameSheetTargetVisualConfiguration {
  TargetVisuals?: Array<string>;
  TargetVisualOptions?: TargetVisualOptions;
}
export interface SankeyDiagramAggregatedFieldWells {
  Source?: Array<DimensionField>;
  Destination?: Array<DimensionField>;
  Weight?: Array<MeasureField>;
}
export interface SankeyDiagramChartConfiguration {
  FieldWells?: SankeyDiagramFieldWells;
  SortConfiguration?: SankeyDiagramSortConfiguration;
  DataLabels?: DataLabelOptions;
  Interactions?: VisualInteractionOptions;
}
export interface SankeyDiagramFieldWells {
  SankeyDiagramAggregatedFieldWells?: SankeyDiagramAggregatedFieldWells;
}
export interface SankeyDiagramSortConfiguration {
  WeightSort?: Array<FieldSortOptions>;
  SourceItemsLimit?: ItemsLimitConfiguration;
  DestinationItemsLimit?: ItemsLimitConfiguration;
}
export interface SankeyDiagramVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: SankeyDiagramChartConfiguration;
  Actions?: Array<VisualCustomAction>;
  VisualContentAltText?: string;
}
export interface ScatterPlotCategoricallyAggregatedFieldWells {
  XAxis?: Array<MeasureField>;
  YAxis?: Array<MeasureField>;
  Category?: Array<DimensionField>;
  Size?: Array<MeasureField>;
  Label?: Array<DimensionField>;
}
export interface ScatterPlotConfiguration {
  FieldWells?: ScatterPlotFieldWells;
  SortConfiguration?: ScatterPlotSortConfiguration;
  XAxisLabelOptions?: ChartAxisLabelOptions;
  XAxisDisplayOptions?: AxisDisplayOptions;
  YAxisLabelOptions?: ChartAxisLabelOptions;
  YAxisDisplayOptions?: AxisDisplayOptions;
  Legend?: LegendOptions;
  DataLabels?: DataLabelOptions;
  Tooltip?: TooltipOptions;
  VisualPalette?: VisualPalette;
  Interactions?: VisualInteractionOptions;
}
export interface ScatterPlotFieldWells {
  ScatterPlotCategoricallyAggregatedFieldWells?: ScatterPlotCategoricallyAggregatedFieldWells;
  ScatterPlotUnaggregatedFieldWells?: ScatterPlotUnaggregatedFieldWells;
}
export interface ScatterPlotSortConfiguration {
  ScatterPlotLimitConfiguration?: ItemsLimitConfiguration;
}
export interface ScatterPlotUnaggregatedFieldWells {
  XAxis?: Array<DimensionField>;
  YAxis?: Array<DimensionField>;
  Size?: Array<MeasureField>;
  Category?: Array<DimensionField>;
  Label?: Array<DimensionField>;
}
export interface ScatterPlotVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: ScatterPlotConfiguration;
  Actions?: Array<VisualCustomAction>;
  ColumnHierarchies?: Array<ColumnHierarchy>;
  VisualContentAltText?: string;
}
export interface ScheduleRefreshOnEntity {
  DayOfWeek?: DayOfWeek;
  DayOfMonth?: string;
}
export interface SchedulesConfigurations {
  Enabled: boolean;
}
export interface ScrollBarOptions {
  Visibility?: Visibility;
  VisibleRange?: VisibleRangeOptions;
}
export interface SearchAnalysesRequest {
  AwsAccountId: string;
  Filters: Array<AnalysisSearchFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface SearchAnalysesResponse {
  AnalysisSummaryList?: Array<AnalysisSummary>;
  NextToken?: string;
  Status?: number;
  RequestId?: string;
}
export interface SearchDashboardsRequest {
  AwsAccountId: string;
  Filters: Array<DashboardSearchFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface SearchDashboardsResponse {
  DashboardSummaryList?: Array<DashboardSummary>;
  NextToken?: string;
  Status?: number;
  RequestId?: string;
}
export interface SearchDataSetsRequest {
  AwsAccountId: string;
  Filters: Array<DataSetSearchFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface SearchDataSetsResponse {
  DataSetSummaries?: Array<DataSetSummary>;
  NextToken?: string;
  Status?: number;
  RequestId?: string;
}
export interface SearchDataSourcesRequest {
  AwsAccountId: string;
  Filters: Array<DataSourceSearchFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface SearchDataSourcesResponse {
  DataSourceSummaries?: Array<DataSourceSummary>;
  NextToken?: string;
  Status?: number;
  RequestId?: string;
}
export interface SearchFoldersRequest {
  AwsAccountId: string;
  Filters: Array<FolderSearchFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface SearchFoldersResponse {
  Status?: number;
  FolderSummaryList?: Array<FolderSummary>;
  NextToken?: string;
  RequestId?: string;
}
export interface SearchGroupsRequest {
  AwsAccountId: string;
  NextToken?: string;
  MaxResults?: number;
  Namespace: string;
  Filters: Array<GroupSearchFilter>;
}
export interface SearchGroupsResponse {
  GroupList?: Array<Group>;
  NextToken?: string;
  RequestId?: string;
  Status?: number;
}
export interface SearchTopicsRequest {
  AwsAccountId: string;
  Filters: Array<TopicSearchFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface SearchTopicsResponse {
  TopicSummaryList?: Array<TopicSummary>;
  NextToken?: string;
  Status?: number;
  RequestId?: string;
}
export type Seasonality = number;

export interface SecondaryValueOptions {
  Visibility?: Visibility;
}
export type SecretArn = string;

export interface SectionAfterPageBreak {
  Status?: SectionPageBreakStatus;
}
export interface SectionBasedLayoutCanvasSizeOptions {
  PaperCanvasSizeOptions?: SectionBasedLayoutPaperCanvasSizeOptions;
}
export interface SectionBasedLayoutConfiguration {
  HeaderSections: Array<HeaderFooterSectionConfiguration>;
  BodySections: Array<BodySectionConfiguration>;
  FooterSections: Array<HeaderFooterSectionConfiguration>;
  CanvasSizeOptions: SectionBasedLayoutCanvasSizeOptions;
}
export interface SectionBasedLayoutPaperCanvasSizeOptions {
  PaperSize?: PaperSize;
  PaperOrientation?: PaperOrientation;
  PaperMargin?: Spacing;
}
export interface SectionLayoutConfiguration {
  FreeFormLayout: FreeFormSectionLayoutConfiguration;
}
export interface SectionPageBreakConfiguration {
  After?: SectionAfterPageBreak;
}
export type SectionPageBreakStatus = "ENABLED" | "DISABLED";
export interface SectionStyle {
  Height?: string;
  Padding?: Spacing;
}
export type SecurityGroupId = string;

export type SecurityGroupIdList = Array<string>;
export type SelectAllValueOptions = "ALL_VALUES";
export type SelectedFieldList = Array<string>;
export type SelectedFieldOptions = "ALL_FIELDS";
export interface SelectedSheetsFilterScopeConfiguration {
  SheetVisualScopingConfigurations?: Array<SheetVisualScopingConfiguration>;
}
export type SelectedTooltipType = "BASIC" | "DETAILED";
export interface SemanticEntityType {
  TypeName?: string;
  SubTypeName?: string;
  TypeParameters?: Record<string, string>;
}
export interface SemanticType {
  TypeName?: string;
  SubTypeName?: string;
  TypeParameters?: Record<string, string>;
  TruthyCellValue?: string;
  TruthyCellValueSynonyms?: Array<string>;
  FalseyCellValue?: string;
  FalseyCellValueSynonyms?: Array<string>;
}
export type SensitiveDouble = number;

export type SensitiveDoubleList = Array<number>;
export type SensitiveDoubleObject = number;

export type SensitiveLong = number;

export type SensitiveLongList = Array<number>;
export type SensitiveLongObject = number;

export type SensitiveS3Uri = string;

export type SensitiveString = string;

export type SensitiveStringList = Array<string>;
export type SensitiveStringObject = string;

export type SensitiveTimestamp = Date | string;

export type SensitiveTimestampList = Array<Date | string>;
export interface SeriesItem {
  FieldSeriesItem?: FieldSeriesItem;
  DataFieldSeriesItem?: DataFieldSeriesItem;
}
export type SeriesItemList = Array<SeriesItem>;
export interface ServiceNowParameters {
  SiteBaseUrl: string;
}
export type ServiceType = "REDSHIFT" | "QBUSINESS" | "ATHENA";
export type SessionLifetimeInMinutes = number;

export declare class SessionLifetimeInMinutesInvalidException extends EffectData.TaggedError(
  "SessionLifetimeInMinutesInvalidException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface SessionTag {
  Key: string;
  Value: string;
}
export type SessionTagKey = string;

export type SessionTagKeyList = Array<string>;
export type SessionTagList = Array<SessionTag>;
export type SessionTagValue = string;

export interface SetParameterValueConfiguration {
  DestinationParameterName: string;
  Value: DestinationParameterValueConfiguration;
}
export type SetParameterValueConfigurationList =
  Array<SetParameterValueConfiguration>;
export interface ShapeConditionalFormat {
  BackgroundColor: ConditionalFormattingColor;
}
export interface SharedViewConfigurations {
  Enabled: boolean;
}
export type SharingModel = "ACCOUNT" | "NAMESPACE";
export interface Sheet {
  SheetId?: string;
  Name?: string;
  Images?: Array<SheetImage>;
}
export type SheetContentType = "PAGINATED" | "INTERACTIVE";
export type SheetControlDateTimePickerType = "SINGLE_VALUED" | "DATE_RANGE";
export interface SheetControlInfoIconLabelOptions {
  Visibility?: Visibility;
  InfoIconText?: string;
}
export type SheetControlInfoIconText = string;

export interface SheetControlLayout {
  Configuration: SheetControlLayoutConfiguration;
}
export interface SheetControlLayoutConfiguration {
  GridLayout?: GridLayoutConfiguration;
}
export type SheetControlLayoutList = Array<SheetControlLayout>;
export type SheetControlListType = "MULTI_SELECT" | "SINGLE_SELECT";
export type SheetControlSliderType = "SINGLE_POINT" | "RANGE";
export interface SheetControlsOption {
  VisibilityState?: DashboardUIState;
}
export type SheetControlTitle = string;

export interface SheetDefinition {
  SheetId: string;
  Title?: string;
  Description?: string;
  Name?: string;
  ParameterControls?: Array<ParameterControl>;
  FilterControls?: Array<FilterControl>;
  Visuals?: Array<Visual>;
  TextBoxes?: Array<SheetTextBox>;
  Images?: Array<SheetImage>;
  Layouts?: Array<Layout>;
  SheetControlLayouts?: Array<SheetControlLayout>;
  ContentType?: SheetContentType;
  CustomActionDefaults?: VisualCustomActionDefaults;
}
export type SheetDefinitionList = Array<SheetDefinition>;
export type SheetDescription = string;

export interface SheetElementConfigurationOverrides {
  Visibility?: Visibility;
}
export interface SheetElementRenderingRule {
  Expression: string;
  ConfigurationOverrides: SheetElementConfigurationOverrides;
}
export type SheetElementRenderingRuleList = Array<SheetElementRenderingRule>;
export interface SheetImage {
  SheetImageId: string;
  Source: SheetImageSource;
  Scaling?: SheetImageScalingConfiguration;
  Tooltip?: SheetImageTooltipConfiguration;
  ImageContentAltText?: string;
  Interactions?: ImageInteractionOptions;
  Actions?: Array<ImageCustomAction>;
}
export type SheetImageList = Array<SheetImage>;
export interface SheetImageScalingConfiguration {
  ScalingType?: SheetImageScalingType;
}
export type SheetImageScalingType =
  | "SCALE_TO_WIDTH"
  | "SCALE_TO_HEIGHT"
  | "SCALE_TO_CONTAINER"
  | "SCALE_NONE";
export interface SheetImageSource {
  SheetImageStaticFileSource?: SheetImageStaticFileSource;
}
export interface SheetImageStaticFileSource {
  StaticFileId: string;
}
export interface SheetImageTooltipConfiguration {
  TooltipText?: SheetImageTooltipText;
  Visibility?: Visibility;
}
export interface SheetImageTooltipText {
  PlainText?: string;
}
export interface SheetLayoutElementMaximizationOption {
  AvailabilityStatus?: DashboardBehavior;
}
export type SheetList = Array<Sheet>;
export type SheetName = string;

export interface SheetStyle {
  Tile?: TileStyle;
  TileLayout?: TileLayoutStyle;
}
export interface SheetTextBox {
  SheetTextBoxId: string;
  Content?: string;
  Interactions?: TextBoxInteractionOptions;
}
export type SheetTextBoxContent = string;

export type SheetTextBoxList = Array<SheetTextBox>;
export type SheetTitle = string;

export interface SheetVisualScopingConfiguration {
  SheetId: string;
  Scope: FilterVisualScope;
  VisualIds?: Array<string>;
}
export type SheetVisualScopingConfigurations =
  Array<SheetVisualScopingConfiguration>;
export interface ShortFormatText {
  PlainText?: string;
  RichText?: string;
}
export type ShortPlainText = string;

export type ShortRestrictiveResourceId = string;

export type ShortRichText = string;

export interface SignupResponse {
  IAMUser?: boolean;
  userLoginName?: string;
  accountName?: string;
  directoryType?: string;
}
export type SimpleAttributeAggregationFunction = "UNIQUE_VALUE";
export interface SimpleClusterMarker {
  Color?: string;
}
export type SimpleNumericalAggregationFunction =
  | "SUM"
  | "AVERAGE"
  | "MIN"
  | "MAX"
  | "COUNT"
  | "DISTINCT_COUNT"
  | "VAR"
  | "VARP"
  | "STDEV"
  | "STDEVP"
  | "MEDIAN";
export type SimpleTotalAggregationFunction =
  | "DEFAULT"
  | "SUM"
  | "AVERAGE"
  | "MIN"
  | "MAX"
  | "NONE";
export interface SingleAxisOptions {
  YAxisOptions?: YAxisOptions;
}
export type SingleYAxisOption = "PRIMARY_Y_AXIS";
export type SiteBaseUrl = string;

export interface SliderControlDisplayOptions {
  TitleOptions?: LabelOptions;
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
}
export interface Slot {
  SlotId?: string;
  VisualId?: string;
}
export type Slots = Array<Slot>;
export type SmallMultiplesAxisPlacement = "OUTSIDE" | "INSIDE";
export interface SmallMultiplesAxisProperties {
  Scale?: SmallMultiplesAxisScale;
  Placement?: SmallMultiplesAxisPlacement;
}
export type SmallMultiplesAxisScale = "SHARED" | "INDEPENDENT";
export type SmallMultiplesDimensionFieldList = Array<DimensionField>;
export interface SmallMultiplesOptions {
  MaxVisibleRows?: number;
  MaxVisibleColumns?: number;
  PanelConfiguration?: PanelConfiguration;
  XAxis?: SmallMultiplesAxisProperties;
  YAxis?: SmallMultiplesAxisProperties;
}
export interface SnapshotAnonymousUser {
  RowLevelPermissionTags?: Array<SessionTag>;
}
export type SnapshotAnonymousUserList = Array<SnapshotAnonymousUser>;
export interface SnapshotAnonymousUserRedacted {
  RowLevelPermissionTagKeys?: Array<string>;
}
export type SnapshotAnonymousUserRedactedList =
  Array<SnapshotAnonymousUserRedacted>;
export interface SnapshotConfiguration {
  FileGroups: Array<SnapshotFileGroup>;
  DestinationConfiguration?: SnapshotDestinationConfiguration;
  Parameters?: Parameters;
}
export interface SnapshotDestinationConfiguration {
  S3Destinations?: Array<SnapshotS3DestinationConfiguration>;
}
export interface SnapshotFile {
  SheetSelections: Array<SnapshotFileSheetSelection>;
  FormatType: SnapshotFileFormatType;
}
export type SnapshotFileFormatType = "CSV" | "PDF" | "EXCEL";
export interface SnapshotFileGroup {
  Files?: Array<SnapshotFile>;
}
export type SnapshotFileGroupList = Array<SnapshotFileGroup>;
export type SnapshotFileList = Array<SnapshotFile>;
export interface SnapshotFileSheetSelection {
  SheetId: string;
  SelectionScope: SnapshotFileSheetSelectionScope;
  VisualIds?: Array<string>;
}
export type SnapshotFileSheetSelectionList = Array<SnapshotFileSheetSelection>;
export type SnapshotFileSheetSelectionScope =
  | "ALL_VISUALS"
  | "SELECTED_VISUALS";
export type SnapshotFileSheetSelectionVisualIdList = Array<string>;
export interface SnapshotJobErrorInfo {
  ErrorMessage?: string;
  ErrorType?: string;
}
export interface SnapshotJobResult {
  AnonymousUsers?: Array<AnonymousUserSnapshotJobResult>;
}
export interface SnapshotJobResultErrorInfo {
  ErrorMessage?: string;
  ErrorType?: string;
}
export type SnapshotJobResultErrorInfoList = Array<SnapshotJobResultErrorInfo>;
export interface SnapshotJobResultFileGroup {
  Files?: Array<SnapshotFile>;
  S3Results?: Array<SnapshotJobS3Result>;
}
export type SnapshotJobResultFileGroupList = Array<SnapshotJobResultFileGroup>;
export interface SnapshotJobS3Result {
  S3DestinationConfiguration?: SnapshotS3DestinationConfiguration;
  S3Uri?: string;
  ErrorInfo?: Array<SnapshotJobResultErrorInfo>;
}
export type SnapshotJobS3ResultList = Array<SnapshotJobS3Result>;
export type SnapshotJobStatus = "QUEUED" | "RUNNING" | "COMPLETED" | "FAILED";
export interface SnapshotS3DestinationConfiguration {
  BucketConfiguration: S3BucketConfiguration;
}
export type SnapshotS3DestinationConfigurationList =
  Array<SnapshotS3DestinationConfiguration>;
export interface SnapshotUserConfiguration {
  AnonymousUsers?: Array<SnapshotAnonymousUser>;
}
export interface SnapshotUserConfigurationRedacted {
  AnonymousUsers?: Array<SnapshotAnonymousUserRedacted>;
}
export interface SnowflakeParameters {
  Host: string;
  Database: string;
  Warehouse: string;
  AuthenticationType?: AuthenticationType;
  DatabaseAccessControlRole?: string;
  OAuthParameters?: OAuthParameters;
}
export type SortDirection = "ASC" | "DESC";
export interface Spacing {
  Top?: string;
  Bottom?: string;
  Left?: string;
  Right?: string;
}
export interface SparkParameters {
  Host: string;
  Port: number;
}
export interface SpatialStaticFile {
  StaticFileId: string;
  Source?: StaticFileSource;
}
export type SpecialValue = "EMPTY" | "NULL" | "OTHER";
export type SqlEndpointPath = string;

export type SqlQuery = string;

export interface SqlServerParameters {
  Host: string;
  Port: number;
  Database: string;
}
export interface SslProperties {
  DisableSsl?: boolean;
}
export interface StarburstParameters {
  Host: string;
  Port: number;
  Catalog: string;
  ProductType?: StarburstProductType;
  DatabaseAccessControlRole?: string;
  AuthenticationType?: AuthenticationType;
  OAuthParameters?: OAuthParameters;
}
export type StarburstProductType = "GALAXY" | "ENTERPRISE";
export interface StartAssetBundleExportJobRequest {
  AwsAccountId: string;
  AssetBundleExportJobId: string;
  ResourceArns: Array<string>;
  IncludeAllDependencies?: boolean;
  ExportFormat: AssetBundleExportFormat;
  CloudFormationOverridePropertyConfiguration?: AssetBundleCloudFormationOverridePropertyConfiguration;
  IncludePermissions?: boolean;
  IncludeTags?: boolean;
  ValidationStrategy?: AssetBundleExportJobValidationStrategy;
  IncludeFolderMemberships?: boolean;
  IncludeFolderMembers?: IncludeFolderMembers;
}
export interface StartAssetBundleExportJobResponse {
  Arn?: string;
  AssetBundleExportJobId?: string;
  RequestId?: string;
  Status?: number;
}
export interface StartAssetBundleImportJobRequest {
  AwsAccountId: string;
  AssetBundleImportJobId: string;
  AssetBundleImportSource: AssetBundleImportSource;
  OverrideParameters?: AssetBundleImportJobOverrideParameters;
  FailureAction?: AssetBundleImportFailureAction;
  OverridePermissions?: AssetBundleImportJobOverridePermissions;
  OverrideTags?: AssetBundleImportJobOverrideTags;
  OverrideValidationStrategy?: AssetBundleImportJobOverrideValidationStrategy;
}
export interface StartAssetBundleImportJobResponse {
  Arn?: string;
  AssetBundleImportJobId?: string;
  RequestId?: string;
  Status?: number;
}
export interface StartDashboardSnapshotJobRequest {
  AwsAccountId: string;
  DashboardId: string;
  SnapshotJobId: string;
  UserConfiguration: SnapshotUserConfiguration;
  SnapshotConfiguration: SnapshotConfiguration;
}
export interface StartDashboardSnapshotJobResponse {
  Arn?: string;
  SnapshotJobId?: string;
  RequestId?: string;
  Status?: number;
}
export interface StartDashboardSnapshotJobScheduleRequest {
  AwsAccountId: string;
  DashboardId: string;
  ScheduleId: string;
}
export interface StartDashboardSnapshotJobScheduleResponse {
  RequestId?: string;
  Status?: number;
}
export interface StatePersistenceConfigurations {
  Enabled: boolean;
}
export interface StaticFile {
  ImageStaticFile?: ImageStaticFile;
  SpatialStaticFile?: SpatialStaticFile;
}
export type StaticFileList = Array<StaticFile>;
export interface StaticFileS3SourceOptions {
  BucketName: string;
  ObjectKey: string;
  Region: string;
}
export interface StaticFileSource {
  UrlOptions?: StaticFileUrlSourceOptions;
  S3Options?: StaticFileS3SourceOptions;
}
export interface StaticFileUrlSourceOptions {
  Url: string;
}
export type Status = "ENABLED" | "DISABLED";
export type StatusCode = number;

export interface StringDatasetParameter {
  Id: string;
  Name: string;
  ValueType: DatasetParameterValueType;
  DefaultValues?: StringDatasetParameterDefaultValues;
}
export type StringDatasetParameterDefaultValue = string;

export interface StringDatasetParameterDefaultValues {
  StaticValues?: Array<string>;
}
export type StringDatasetParameterValueList = Array<string>;
export type StringDefaultValueList = Array<string>;
export interface StringDefaultValues {
  DynamicValue?: DynamicDefaultValue;
  StaticValues?: Array<string>;
}
export interface StringFormatConfiguration {
  NullValueFormatConfiguration?: NullValueFormatConfiguration;
  NumericFormatConfiguration?: NumericFormatConfiguration;
}
export type StringList = Array<string>;
export interface StringParameter {
  Name: string;
  Values: Array<string>;
}
export interface StringParameterDeclaration {
  ParameterValueType: ParameterValueType;
  Name: string;
  DefaultValues?: StringDefaultValues;
  ValueWhenUnset?: StringValueWhenUnsetConfiguration;
  MappedDataSetParameters?: Array<MappedDataSetParameter>;
}
export type StringParameterList = Array<StringParameter>;
export interface StringValueWhenUnsetConfiguration {
  ValueWhenUnsetOption?: ValueWhenUnsetOption;
  CustomValue?: string;
}
export type StyledCellType = "TOTAL" | "METRIC_HEADER" | "VALUE";
export type SubnetId = string;

export type SubnetIdList = Array<string>;
export interface SubtotalOptions {
  TotalsVisibility?: Visibility;
  CustomLabel?: string;
  FieldLevel?: PivotTableSubtotalLevel;
  FieldLevelOptions?: Array<PivotTableFieldSubtotalOptions>;
  TotalCellStyle?: TableCellStyle;
  ValueCellStyle?: TableCellStyle;
  MetricHeaderCellStyle?: TableCellStyle;
  StyleTargets?: Array<TableStyleTarget>;
}
export interface SucceededTopicReviewedAnswer {
  AnswerId?: string;
}
export type SucceededTopicReviewedAnswers = Array<SucceededTopicReviewedAnswer>;
export type SuccessfulKeyRegistrationEntries =
  Array<SuccessfulKeyRegistrationEntry>;
export interface SuccessfulKeyRegistrationEntry {
  KeyArn: string;
  StatusCode: number;
}
export type Suffix = string;

export type Synonyms = Array<string>;
export interface TableAggregatedFieldWells {
  GroupBy?: Array<DimensionField>;
  Values?: Array<MeasureField>;
}
export interface TableBorderOptions {
  Color?: string;
  Thickness?: number;
  Style?: TableBorderStyle;
}
export type TableBorderStyle = "NONE" | "SOLID";
export type TableBorderThickness = number;

export interface TableCellConditionalFormatting {
  FieldId: string;
  TextFormat?: TextConditionalFormat;
}
export type TableCellImageScalingConfiguration =
  | "FIT_TO_CELL_HEIGHT"
  | "FIT_TO_CELL_WIDTH"
  | "DO_NOT_SCALE";
export interface TableCellImageSizingConfiguration {
  TableCellImageScalingConfiguration?: TableCellImageScalingConfiguration;
}
export interface TableCellStyle {
  Visibility?: Visibility;
  FontConfiguration?: FontConfiguration;
  TextWrap?: TextWrap;
  HorizontalTextAlignment?: HorizontalTextAlignment;
  VerticalTextAlignment?: VerticalTextAlignment;
  BackgroundColor?: string;
  Height?: number;
  Border?: GlobalTableBorderOptions;
}
export interface TableConditionalFormatting {
  ConditionalFormattingOptions?: Array<TableConditionalFormattingOption>;
}
export interface TableConditionalFormattingOption {
  Cell?: TableCellConditionalFormatting;
  Row?: TableRowConditionalFormatting;
}
export type TableConditionalFormattingOptionList =
  Array<TableConditionalFormattingOption>;
export interface TableConfiguration {
  FieldWells?: TableFieldWells;
  SortConfiguration?: TableSortConfiguration;
  TableOptions?: TableOptions;
  TotalOptions?: TotalOptions;
  FieldOptions?: TableFieldOptions;
  PaginatedReportOptions?: TablePaginatedReportOptions;
  TableInlineVisualizations?: Array<TableInlineVisualization>;
  Interactions?: VisualInteractionOptions;
}
export interface TableFieldCustomIconContent {
  Icon?: TableFieldIconSetType;
}
export interface TableFieldCustomTextContent {
  Value?: string;
  FontConfiguration: FontConfiguration;
}
export type TableFieldHeight = number;

export type TableFieldIconSetType = "LINK";
export interface TableFieldImageConfiguration {
  SizingOptions?: TableCellImageSizingConfiguration;
}
export interface TableFieldLinkConfiguration {
  Target: URLTargetConfiguration;
  Content: TableFieldLinkContentConfiguration;
}
export interface TableFieldLinkContentConfiguration {
  CustomTextContent?: TableFieldCustomTextContent;
  CustomIconContent?: TableFieldCustomIconContent;
}
export interface TableFieldOption {
  FieldId: string;
  Width?: string;
  CustomLabel?: string;
  Visibility?: Visibility;
  URLStyling?: TableFieldURLConfiguration;
}
export type TableFieldOptionList = Array<TableFieldOption>;
export interface TableFieldOptions {
  SelectedFieldOptions?: Array<TableFieldOption>;
  Order?: Array<string>;
  PinnedFieldOptions?: TablePinnedFieldOptions;
  TransposedTableOptions?: Array<TransposedTableOption>;
}
export type TableFieldOrderList = Array<string>;
export interface TableFieldURLConfiguration {
  LinkConfiguration?: TableFieldLinkConfiguration;
  ImageConfiguration?: TableFieldImageConfiguration;
}
export interface TableFieldWells {
  TableAggregatedFieldWells?: TableAggregatedFieldWells;
  TableUnaggregatedFieldWells?: TableUnaggregatedFieldWells;
}
export interface TableInlineVisualization {
  DataBars?: DataBarsOptions;
}
export type TableInlineVisualizationList = Array<TableInlineVisualization>;
export interface TableOptions {
  Orientation?: TableOrientation;
  HeaderStyle?: TableCellStyle;
  CellStyle?: TableCellStyle;
  RowAlternateColorOptions?: RowAlternateColorOptions;
}
export type TableOrientation = "VERTICAL" | "HORIZONTAL";
export interface TablePaginatedReportOptions {
  VerticalOverflowVisibility?: Visibility;
  OverflowColumnHeaderVisibility?: Visibility;
}
export interface TablePinnedFieldOptions {
  PinnedLeftFields?: Array<string>;
}
export interface TableRowConditionalFormatting {
  BackgroundColor?: ConditionalFormattingColor;
  TextColor?: ConditionalFormattingColor;
}
export interface TableSideBorderOptions {
  InnerVertical?: TableBorderOptions;
  InnerHorizontal?: TableBorderOptions;
  Left?: TableBorderOptions;
  Right?: TableBorderOptions;
  Top?: TableBorderOptions;
  Bottom?: TableBorderOptions;
}
export interface TableSortConfiguration {
  RowSort?: Array<FieldSortOptions>;
  PaginationConfiguration?: PaginationConfiguration;
}
export interface TableStyleTarget {
  CellType: StyledCellType;
}
export type TableStyleTargetList = Array<TableStyleTarget>;
export type TableTotalsPlacement = "START" | "END" | "AUTO";
export type TableTotalsScrollStatus = "PINNED" | "SCROLLED";
export type TableUnaggregatedFieldList = Array<UnaggregatedField>;
export interface TableUnaggregatedFieldWells {
  Values?: Array<UnaggregatedField>;
}
export interface TableVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: TableConfiguration;
  ConditionalFormatting?: TableConditionalFormatting;
  Actions?: Array<VisualCustomAction>;
  VisualContentAltText?: string;
}
export interface Tag {
  Key: string;
  Value: string;
}
export interface TagColumnOperation {
  ColumnName: string;
  Tags: Array<ColumnTag>;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Array<Tag>;
}
export interface TagResourceResponse {
  RequestId?: string;
  Status?: number;
}
export type TagValue = string;

export type TargetVisualList = Array<string>;
export type TargetVisualOptions = "ALL_VISUALS";
export interface Template {
  Arn?: string;
  Name?: string;
  Version?: TemplateVersion;
  TemplateId?: string;
  LastUpdatedTime?: Date | string;
  CreatedTime?: Date | string;
}
export interface TemplateAlias {
  AliasName?: string;
  Arn?: string;
  TemplateVersionNumber?: number;
}
export type TemplateAliasList = Array<TemplateAlias>;
export interface TemplateError {
  Type?: TemplateErrorType;
  Message?: string;
  ViolatedEntities?: Array<Entity>;
}
export type TemplateErrorList = Array<TemplateError>;
export type TemplateErrorType =
  | "SOURCE_NOT_FOUND"
  | "DATA_SET_NOT_FOUND"
  | "INTERNAL_FAILURE"
  | "ACCESS_DENIED";
export type TemplateName = string;

export interface TemplateSourceAnalysis {
  Arn: string;
  DataSetReferences: Array<DataSetReference>;
}
export interface TemplateSourceEntity {
  SourceAnalysis?: TemplateSourceAnalysis;
  SourceTemplate?: TemplateSourceTemplate;
}
export interface TemplateSourceTemplate {
  Arn: string;
}
export interface TemplateSummary {
  Arn?: string;
  TemplateId?: string;
  Name?: string;
  LatestVersionNumber?: number;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
}
export type TemplateSummaryList = Array<TemplateSummary>;
export interface TemplateVersion {
  CreatedTime?: Date | string;
  Errors?: Array<TemplateError>;
  VersionNumber?: number;
  Status?: ResourceStatus;
  DataSetConfigurations?: Array<DataSetConfiguration>;
  Description?: string;
  SourceEntityArn?: string;
  ThemeArn?: string;
  Sheets?: Array<Sheet>;
}
export interface TemplateVersionDefinition {
  DataSetConfigurations: Array<DataSetConfiguration>;
  Sheets?: Array<SheetDefinition>;
  CalculatedFields?: Array<CalculatedField>;
  ParameterDeclarations?: Array<ParameterDeclaration>;
  FilterGroups?: Array<FilterGroup>;
  ColumnConfigurations?: Array<ColumnConfiguration>;
  AnalysisDefaults?: AnalysisDefaults;
  Options?: AssetOptions;
  QueryExecutionOptions?: QueryExecutionOptions;
  StaticFiles?: Array<StaticFile>;
}
export interface TemplateVersionSummary {
  Arn?: string;
  VersionNumber?: number;
  CreatedTime?: Date | string;
  Status?: ResourceStatus;
  Description?: string;
}
export type TemplateVersionSummaryList = Array<TemplateVersionSummary>;
export interface TeradataParameters {
  Host: string;
  Port: number;
  Database: string;
}
export type TextAreaControlDelimiter = string;

export interface TextAreaControlDisplayOptions {
  TitleOptions?: LabelOptions;
  PlaceholderOptions?: TextControlPlaceholderOptions;
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
}
export interface TextBoxInteractionOptions {
  TextBoxMenuOption?: TextBoxMenuOption;
}
export interface TextBoxMenuOption {
  AvailabilityStatus?: DashboardBehavior;
}
export interface TextConditionalFormat {
  BackgroundColor?: ConditionalFormattingColor;
  TextColor?: ConditionalFormattingColor;
  Icon?: ConditionalFormattingIcon;
}
export interface TextControlPlaceholderOptions {
  Visibility?: Visibility;
}
export interface TextFieldControlDisplayOptions {
  TitleOptions?: LabelOptions;
  PlaceholderOptions?: TextControlPlaceholderOptions;
  InfoIconLabelOptions?: SheetControlInfoIconLabelOptions;
}
export type TextQualifier = "DOUBLE_QUOTE" | "SINGLE_QUOTE";
export type TextWrap = "NONE" | "WRAP";
export interface Theme {
  Arn?: string;
  Name?: string;
  ThemeId?: string;
  Version?: ThemeVersion;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
  Type?: ThemeType;
}
export interface ThemeAlias {
  Arn?: string;
  AliasName?: string;
  ThemeVersionNumber?: number;
}
export type ThemeAliasList = Array<ThemeAlias>;
export interface ThemeConfiguration {
  DataColorPalette?: DataColorPalette;
  UIColorPalette?: UIColorPalette;
  Sheet?: SheetStyle;
  Typography?: Typography;
}
export interface ThemeError {
  Type?: ThemeErrorType;
  Message?: string;
}
export type ThemeErrorList = Array<ThemeError>;
export type ThemeErrorType = "INTERNAL_FAILURE";
export type ThemeName = string;

export interface ThemeSummary {
  Arn?: string;
  Name?: string;
  ThemeId?: string;
  LatestVersionNumber?: number;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
}
export type ThemeSummaryList = Array<ThemeSummary>;
export type ThemeType = "QUICKSIGHT" | "CUSTOM" | "ALL";
export interface ThemeVersion {
  VersionNumber?: number;
  Arn?: string;
  Description?: string;
  BaseThemeId?: string;
  CreatedTime?: Date | string;
  Configuration?: ThemeConfiguration;
  Errors?: Array<ThemeError>;
  Status?: ResourceStatus;
}
export interface ThemeVersionSummary {
  VersionNumber?: number;
  Arn?: string;
  Description?: string;
  CreatedTime?: Date | string;
  Status?: ResourceStatus;
}
export type ThemeVersionSummaryList = Array<ThemeVersionSummary>;
export interface ThousandSeparatorOptions {
  Symbol?: NumericSeparatorSymbol;
  Visibility?: Visibility;
  GroupingStyle?: DigitGroupingStyle;
}
export interface ThresholdAlertsConfigurations {
  Enabled: boolean;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface TileLayoutStyle {
  Gutter?: GutterStyle;
  Margin?: MarginStyle;
}
export interface TileStyle {
  Border?: BorderStyle;
}
export interface TimeBasedForecastProperties {
  PeriodsForward?: number;
  PeriodsBackward?: number;
  UpperBoundary?: number;
  LowerBoundary?: number;
  PredictionInterval?: number;
  Seasonality?: number;
}
export interface TimeEqualityFilter {
  FilterId: string;
  Column: ColumnIdentifier;
  Value?: Date | string;
  ParameterName?: string;
  TimeGranularity?: TimeGranularity;
  RollingDate?: RollingDateConfiguration;
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration;
}
export type TimeGranularity =
  | "YEAR"
  | "QUARTER"
  | "MONTH"
  | "WEEK"
  | "DAY"
  | "HOUR"
  | "MINUTE"
  | "SECOND"
  | "MILLISECOND";
export interface TimeRangeDrillDownFilter {
  Column: ColumnIdentifier;
  RangeMinimum: Date | string;
  RangeMaximum: Date | string;
  TimeGranularity: TimeGranularity;
}
export interface TimeRangeFilter {
  FilterId: string;
  Column: ColumnIdentifier;
  IncludeMinimum?: boolean;
  IncludeMaximum?: boolean;
  RangeMinimumValue?: TimeRangeFilterValue;
  RangeMaximumValue?: TimeRangeFilterValue;
  NullOption: FilterNullOption;
  ExcludePeriodConfiguration?: ExcludePeriodConfiguration;
  TimeGranularity?: TimeGranularity;
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration;
}
export interface TimeRangeFilterValue {
  StaticValue?: Date | string;
  RollingDate?: RollingDateConfiguration;
  Parameter?: string;
}
export type Timestamp = Date | string;

export type TokenProviderUrl = string;

export interface TooltipItem {
  FieldTooltipItem?: FieldTooltipItem;
  ColumnTooltipItem?: ColumnTooltipItem;
}
export type TooltipItemList = Array<TooltipItem>;
export interface TooltipOptions {
  TooltipVisibility?: Visibility;
  SelectedTooltipType?: SelectedTooltipType;
  FieldBasedTooltip?: FieldBasedTooltip;
}
export type TooltipTarget = "BOTH" | "BAR" | "LINE";
export type TooltipTitleType = "NONE" | "PRIMARY_VALUE";
export type TopBottomComputationType = "TOP" | "BOTTOM";
export interface TopBottomFilter {
  FilterId: string;
  Column: ColumnIdentifier;
  Limit?: number;
  AggregationSortConfigurations: Array<AggregationSortConfiguration>;
  TimeGranularity?: TimeGranularity;
  ParameterName?: string;
  DefaultFilterControlConfiguration?: DefaultFilterControlConfiguration;
}
export interface TopBottomMoversComputation {
  ComputationId: string;
  Name?: string;
  Time?: DimensionField;
  Category?: DimensionField;
  Value?: MeasureField;
  MoverSize?: number;
  SortOrder?: TopBottomSortOrder;
  Type: TopBottomComputationType;
}
export type TopBottomMoversComputationMoverSize = number;

export interface TopBottomRankedComputation {
  ComputationId: string;
  Name?: string;
  Category?: DimensionField;
  Value?: MeasureField;
  ResultSize?: number;
  Type: TopBottomComputationType;
}
export type TopBottomRankedComputationResultSize = number;

export type TopBottomSortOrder = "PERCENT_DIFFERENCE" | "ABSOLUTE_DIFFERENCE";
export interface TopicCalculatedField {
  CalculatedFieldName: string;
  CalculatedFieldDescription?: string;
  Expression: string;
  CalculatedFieldSynonyms?: Array<string>;
  IsIncludedInTopic?: boolean;
  DisableIndexing?: boolean;
  ColumnDataRole?: ColumnDataRole;
  TimeGranularity?: TopicTimeGranularity;
  DefaultFormatting?: DefaultFormatting;
  Aggregation?: DefaultAggregation;
  ComparativeOrder?: ComparativeOrder;
  SemanticType?: SemanticType;
  AllowedAggregations?: Array<AuthorSpecifiedAggregation>;
  NotAllowedAggregations?: Array<AuthorSpecifiedAggregation>;
  NeverAggregateInFilter?: boolean;
  CellValueSynonyms?: Array<CellValueSynonym>;
  NonAdditive?: boolean;
}
export type TopicCalculatedFields = Array<TopicCalculatedField>;
export interface TopicCategoryFilter {
  CategoryFilterFunction?: CategoryFilterFunction;
  CategoryFilterType?: CategoryFilterType;
  Constant?: TopicCategoryFilterConstant;
  Inverse?: boolean;
}
export interface TopicCategoryFilterConstant {
  ConstantType?: ConstantType;
  SingularConstant?: string;
  CollectiveConstant?: CollectiveConstant;
}
export interface TopicColumn {
  ColumnName: string;
  ColumnFriendlyName?: string;
  ColumnDescription?: string;
  ColumnSynonyms?: Array<string>;
  ColumnDataRole?: ColumnDataRole;
  Aggregation?: DefaultAggregation;
  IsIncludedInTopic?: boolean;
  DisableIndexing?: boolean;
  ComparativeOrder?: ComparativeOrder;
  SemanticType?: SemanticType;
  TimeGranularity?: TopicTimeGranularity;
  AllowedAggregations?: Array<AuthorSpecifiedAggregation>;
  NotAllowedAggregations?: Array<AuthorSpecifiedAggregation>;
  DefaultFormatting?: DefaultFormatting;
  NeverAggregateInFilter?: boolean;
  CellValueSynonyms?: Array<CellValueSynonym>;
  NonAdditive?: boolean;
}
export type TopicColumns = Array<TopicColumn>;
export interface TopicConfigOptions {
  QBusinessInsightsEnabled?: boolean;
}
export interface TopicConstantValue {
  ConstantType?: ConstantType;
  Value?: string;
  Minimum?: string;
  Maximum?: string;
  ValueList?: Array<CollectiveConstantEntry>;
}
export interface TopicDateRangeFilter {
  Inclusive?: boolean;
  Constant?: TopicRangeFilterConstant;
}
export interface TopicDetails {
  Name?: string;
  Description?: string;
  UserExperienceVersion?: TopicUserExperienceVersion;
  DataSets?: Array<DatasetMetadata>;
  ConfigOptions?: TopicConfigOptions;
}
export interface TopicFilter {
  FilterDescription?: string;
  FilterClass?: FilterClass;
  FilterName: string;
  FilterSynonyms?: Array<string>;
  OperandFieldName: string;
  FilterType?: NamedFilterType;
  CategoryFilter?: TopicCategoryFilter;
  NumericEqualityFilter?: TopicNumericEqualityFilter;
  NumericRangeFilter?: TopicNumericRangeFilter;
  DateRangeFilter?: TopicDateRangeFilter;
  RelativeDateFilter?: TopicRelativeDateFilter;
}
export type TopicFilterAttribute =
  | "QUICKSIGHT_USER"
  | "QUICKSIGHT_VIEWER_OR_OWNER"
  | "DIRECT_QUICKSIGHT_VIEWER_OR_OWNER"
  | "QUICKSIGHT_OWNER"
  | "DIRECT_QUICKSIGHT_OWNER"
  | "DIRECT_QUICKSIGHT_SOLE_OWNER"
  | "TOPIC_NAME";
export type TopicFilterOperator = "StringEquals" | "StringLike";
export type TopicFilters = Array<TopicFilter>;
export type TopicId = string;

export interface TopicIR {
  Metrics?: Array<TopicIRMetric>;
  GroupByList?: Array<TopicIRGroupBy>;
  Filters?: Array<Array<TopicIRFilterOption>>;
  Sort?: TopicSortClause;
  ContributionAnalysis?: TopicIRContributionAnalysis;
  Visual?: VisualOptions;
}
export interface TopicIRComparisonMethod {
  Type?: ComparisonMethodType;
  Period?: TopicTimeGranularity;
  WindowSize?: number;
}
export interface TopicIRContributionAnalysis {
  Factors?: Array<ContributionAnalysisFactor>;
  TimeRanges?: ContributionAnalysisTimeRanges;
  Direction?: ContributionAnalysisDirection;
  SortType?: ContributionAnalysisSortType;
}
export type TopicIRFilterEntry = Array<TopicIRFilterOption>;
export type TopicIRFilterFunction =
  | "CONTAINS"
  | "EXACT"
  | "STARTS_WITH"
  | "ENDS_WITH"
  | "CONTAINS_STRING"
  | "PREVIOUS"
  | "THIS"
  | "LAST"
  | "NEXT"
  | "NOW";
export type TopicIRFilterList = Array<Array<TopicIRFilterOption>>;
export interface TopicIRFilterOption {
  FilterType?: TopicIRFilterType;
  FilterClass?: FilterClass;
  OperandField?: Identifier;
  Function?: TopicIRFilterFunction;
  Constant?: TopicConstantValue;
  Inverse?: boolean;
  NullFilter?: NullFilterOption;
  Aggregation?: AggType;
  AggregationFunctionParameters?: Record<string, string>;
  AggregationPartitionBy?: Array<AggregationPartitionBy>;
  Range?: TopicConstantValue;
  Inclusive?: boolean;
  TimeGranularity?: TimeGranularity;
  LastNextOffset?: TopicConstantValue;
  AggMetrics?: Array<FilterAggMetrics>;
  TopBottomLimit?: TopicConstantValue;
  SortDirection?: TopicSortDirection;
  Anchor?: Anchor;
}
export type TopicIRFilterType =
  | "CATEGORY_FILTER"
  | "NUMERIC_EQUALITY_FILTER"
  | "NUMERIC_RANGE_FILTER"
  | "DATE_RANGE_FILTER"
  | "RELATIVE_DATE_FILTER"
  | "TOP_BOTTOM_FILTER"
  | "EQUALS"
  | "RANK_LIMIT_FILTER"
  | "ACCEPT_ALL_FILTER";
export interface TopicIRGroupBy {
  FieldName?: Identifier;
  TimeGranularity?: TopicTimeGranularity;
  Sort?: TopicSortClause;
  DisplayFormat?: DisplayFormat;
  DisplayFormatOptions?: DisplayFormatOptions;
  NamedEntity?: NamedEntityRef;
}
export type TopicIRGroupByList = Array<TopicIRGroupBy>;
export interface TopicIRMetric {
  MetricId?: Identifier;
  Function?: AggFunction;
  Operands?: Array<Identifier>;
  ComparisonMethod?: TopicIRComparisonMethod;
  Expression?: string;
  CalculatedFieldReferences?: Array<Identifier>;
  DisplayFormat?: DisplayFormat;
  DisplayFormatOptions?: DisplayFormatOptions;
  NamedEntity?: NamedEntityRef;
}
export type TopicIRMetricList = Array<TopicIRMetric>;
export type TopicNamedEntities = Array<TopicNamedEntity>;
export interface TopicNamedEntity {
  EntityName: string;
  EntityDescription?: string;
  EntitySynonyms?: Array<string>;
  SemanticEntityType?: SemanticEntityType;
  Definition?: Array<NamedEntityDefinition>;
}
export interface TopicNumericEqualityFilter {
  Constant?: TopicSingularFilterConstant;
  Aggregation?: NamedFilterAggType;
}
export interface TopicNumericRangeFilter {
  Inclusive?: boolean;
  Constant?: TopicRangeFilterConstant;
  Aggregation?: NamedFilterAggType;
}
export type TopicNumericSeparatorSymbol = "COMMA" | "DOT";
export interface TopicRangeFilterConstant {
  ConstantType?: ConstantType;
  RangeConstant?: RangeConstant;
}
export interface TopicRefreshDetails {
  RefreshArn?: string;
  RefreshId?: string;
  RefreshStatus?: TopicRefreshStatus;
}
export interface TopicRefreshSchedule {
  IsEnabled: boolean;
  BasedOnSpiceSchedule: boolean;
  StartingAt?: Date | string;
  Timezone?: string;
  RepeatAt?: string;
  TopicScheduleType?: TopicScheduleType;
}
export type TopicRefreshScheduleSummaries = Array<TopicRefreshScheduleSummary>;
export interface TopicRefreshScheduleSummary {
  DatasetId?: string;
  DatasetArn?: string;
  DatasetName?: string;
  RefreshSchedule?: TopicRefreshSchedule;
}
export type TopicRefreshStatus =
  | "INITIALIZED"
  | "RUNNING"
  | "FAILED"
  | "COMPLETED"
  | "CANCELLED";
export interface TopicRelativeDateFilter {
  TimeGranularity?: TopicTimeGranularity;
  RelativeDateFilterFunction?: TopicRelativeDateFilterFunction;
  Constant?: TopicSingularFilterConstant;
}
export type TopicRelativeDateFilterFunction =
  | "PREVIOUS"
  | "THIS"
  | "LAST"
  | "NEXT"
  | "NOW";
export interface TopicReviewedAnswer {
  Arn?: string;
  AnswerId: string;
  DatasetArn: string;
  Question: string;
  Mir?: TopicIR;
  PrimaryVisual?: TopicVisual;
  Template?: TopicTemplate;
}
export type TopicReviewedAnswers = Array<TopicReviewedAnswer>;
export type TopicScheduleType = "HOURLY" | "DAILY" | "WEEKLY" | "MONTHLY";
export interface TopicSearchFilter {
  Operator: TopicFilterOperator;
  Name: TopicFilterAttribute;
  Value: string;
}
export type TopicSearchFilterList = Array<TopicSearchFilter>;
export interface TopicSingularFilterConstant {
  ConstantType?: ConstantType;
  SingularConstant?: string;
}
export interface TopicSortClause {
  Operand?: Identifier;
  SortDirection?: TopicSortDirection;
}
export type TopicSortDirection = "ASCENDING" | "DESCENDING";
export type TopicSummaries = Array<TopicSummary>;
export interface TopicSummary {
  Arn?: string;
  TopicId?: string;
  Name?: string;
  UserExperienceVersion?: TopicUserExperienceVersion;
}
export interface TopicTemplate {
  TemplateType?: string;
  Slots?: Array<Slot>;
}
export type TopicTimeGranularity =
  | "SECOND"
  | "MINUTE"
  | "HOUR"
  | "DAY"
  | "WEEK"
  | "MONTH"
  | "QUARTER"
  | "YEAR";
export type TopicUserExperienceVersion = "LEGACY" | "NEW_READER_EXPERIENCE";
export interface TopicVisual {
  VisualId?: string;
  Role?: VisualRole;
  Ir?: TopicIR;
  SupportingVisuals?: Array<TopicVisual>;
}
export type TopicVisuals = Array<TopicVisual>;
export interface TotalAggregationComputation {
  ComputationId: string;
  Name?: string;
  Value?: MeasureField;
}
export interface TotalAggregationFunction {
  SimpleTotalAggregationFunction?: SimpleTotalAggregationFunction;
}
export interface TotalAggregationOption {
  FieldId: string;
  TotalAggregationFunction: TotalAggregationFunction;
}
export type TotalAggregationOptionList = Array<TotalAggregationOption>;
export interface TotalOptions {
  TotalsVisibility?: Visibility;
  Placement?: TableTotalsPlacement;
  ScrollStatus?: TableTotalsScrollStatus;
  CustomLabel?: string;
  TotalCellStyle?: TableCellStyle;
  TotalAggregationOptions?: Array<TotalAggregationOption>;
}
export type TransformOperation =
  | { ProjectOperation: ProjectOperation }
  | { FilterOperation: FilterOperation }
  | { CreateColumnsOperation: CreateColumnsOperation }
  | { RenameColumnOperation: RenameColumnOperation }
  | { CastColumnTypeOperation: CastColumnTypeOperation }
  | { TagColumnOperation: TagColumnOperation }
  | { UntagColumnOperation: UntagColumnOperation }
  | { OverrideDatasetParameterOperation: OverrideDatasetParameterOperation };
export type TransformOperationList = Array<TransformOperation>;
export type TransposedColumnIndex = number;

export type TransposedColumnType = "ROW_HEADER_COLUMN" | "VALUE_COLUMN";
export interface TransposedTableOption {
  ColumnIndex?: number;
  ColumnWidth?: string;
  ColumnType: TransposedColumnType;
}
export type TransposedTableOptionList = Array<TransposedTableOption>;
export interface TreeMapAggregatedFieldWells {
  Groups?: Array<DimensionField>;
  Sizes?: Array<MeasureField>;
  Colors?: Array<MeasureField>;
}
export interface TreeMapConfiguration {
  FieldWells?: TreeMapFieldWells;
  SortConfiguration?: TreeMapSortConfiguration;
  GroupLabelOptions?: ChartAxisLabelOptions;
  SizeLabelOptions?: ChartAxisLabelOptions;
  ColorLabelOptions?: ChartAxisLabelOptions;
  ColorScale?: ColorScale;
  Legend?: LegendOptions;
  DataLabels?: DataLabelOptions;
  Tooltip?: TooltipOptions;
  Interactions?: VisualInteractionOptions;
}
export type TreeMapDimensionFieldList = Array<DimensionField>;
export interface TreeMapFieldWells {
  TreeMapAggregatedFieldWells?: TreeMapAggregatedFieldWells;
}
export type TreeMapMeasureFieldList = Array<MeasureField>;
export interface TreeMapSortConfiguration {
  TreeMapSort?: Array<FieldSortOptions>;
  TreeMapGroupItemsLimitConfiguration?: ItemsLimitConfiguration;
}
export interface TreeMapVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: TreeMapConfiguration;
  Actions?: Array<VisualCustomAction>;
  ColumnHierarchies?: Array<ColumnHierarchy>;
  VisualContentAltText?: string;
}
export interface TrendArrowOptions {
  Visibility?: Visibility;
}
export interface TrinoParameters {
  Host: string;
  Port: number;
  Catalog: string;
}
export interface TwitterParameters {
  Query: string;
  MaxRows: number;
}
export type TypeCastFormat = string;

export type TypeParameters = Record<string, string>;
export interface Typography {
  FontFamilies?: Array<Font>;
}
export interface UIColorPalette {
  PrimaryForeground?: string;
  PrimaryBackground?: string;
  SecondaryForeground?: string;
  SecondaryBackground?: string;
  Accent?: string;
  AccentForeground?: string;
  Danger?: string;
  DangerForeground?: string;
  Warning?: string;
  WarningForeground?: string;
  Success?: string;
  SuccessForeground?: string;
  Dimension?: string;
  DimensionForeground?: string;
  Measure?: string;
  MeasureForeground?: string;
}
export interface UnaggregatedField {
  FieldId: string;
  Column: ColumnIdentifier;
  FormatConfiguration?: FormatConfiguration;
}
export type UnaggregatedFieldList = Array<UnaggregatedField>;
export type UndefinedSpecifiedValueType = "LEAST" | "MOST";
export type UnicodeIcon = string;

export interface UniqueKey {
  ColumnNames: Array<string>;
}
export type UniqueKeyColumnNameList = Array<string>;
export type UniqueKeyList = Array<UniqueKey>;
export interface UniqueValuesComputation {
  ComputationId: string;
  Name?: string;
  Category?: DimensionField;
}
export type UnlimitedPixelLength = string;

export declare class UnsupportedPricingPlanException extends EffectData.TaggedError(
  "UnsupportedPricingPlanException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export declare class UnsupportedUserEditionException extends EffectData.TaggedError(
  "UnsupportedUserEditionException",
)<{
  readonly Message?: string;
  readonly RequestId?: string;
}> {}
export interface UntagColumnOperation {
  ColumnName: string;
  TagNames: Array<ColumnTagName>;
}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceResponse {
  RequestId?: string;
  Status?: number;
}
export interface UpdateAccountCustomizationRequest {
  AwsAccountId: string;
  Namespace?: string;
  AccountCustomization: AccountCustomization;
}
export interface UpdateAccountCustomizationResponse {
  Arn?: string;
  AwsAccountId?: string;
  Namespace?: string;
  AccountCustomization?: AccountCustomization;
  RequestId?: string;
  Status?: number;
}
export interface UpdateAccountSettingsRequest {
  AwsAccountId: string;
  DefaultNamespace: string;
  NotificationEmail?: string;
  TerminationProtectionEnabled?: boolean;
}
export interface UpdateAccountSettingsResponse {
  RequestId?: string;
  Status?: number;
}
export interface UpdateAnalysisPermissionsRequest {
  AwsAccountId: string;
  AnalysisId: string;
  GrantPermissions?: Array<ResourcePermission>;
  RevokePermissions?: Array<ResourcePermission>;
}
export interface UpdateAnalysisPermissionsResponse {
  AnalysisArn?: string;
  AnalysisId?: string;
  Permissions?: Array<ResourcePermission>;
  RequestId?: string;
  Status?: number;
}
export interface UpdateAnalysisRequest {
  AwsAccountId: string;
  AnalysisId: string;
  Name: string;
  Parameters?: Parameters;
  SourceEntity?: AnalysisSourceEntity;
  ThemeArn?: string;
  Definition?: AnalysisDefinition;
  ValidationStrategy?: ValidationStrategy;
}
export interface UpdateAnalysisResponse {
  Arn?: string;
  AnalysisId?: string;
  UpdateStatus?: ResourceStatus;
  Status?: number;
  RequestId?: string;
}
export interface UpdateApplicationWithTokenExchangeGrantRequest {
  AwsAccountId: string;
  Namespace: string;
}
export interface UpdateApplicationWithTokenExchangeGrantResponse {
  Status?: number;
  RequestId?: string;
}
export interface UpdateBrandAssignmentRequest {
  AwsAccountId: string;
  BrandArn: string;
}
export interface UpdateBrandAssignmentResponse {
  RequestId?: string;
  BrandArn?: string;
}
export interface UpdateBrandPublishedVersionRequest {
  AwsAccountId: string;
  BrandId: string;
  VersionId: string;
}
export interface UpdateBrandPublishedVersionResponse {
  RequestId?: string;
  VersionId?: string;
}
export interface UpdateBrandRequest {
  AwsAccountId: string;
  BrandId: string;
  BrandDefinition?: BrandDefinition;
}
export interface UpdateBrandResponse {
  RequestId?: string;
  BrandDetail?: BrandDetail;
  BrandDefinition?: BrandDefinition;
}
export interface UpdateCustomPermissionsRequest {
  AwsAccountId: string;
  CustomPermissionsName: string;
  Capabilities?: Capabilities;
}
export interface UpdateCustomPermissionsResponse {
  Status?: number;
  Arn?: string;
  RequestId?: string;
}
export interface UpdateDashboardLinksRequest {
  AwsAccountId: string;
  DashboardId: string;
  LinkEntities: Array<string>;
}
export interface UpdateDashboardLinksResponse {
  RequestId?: string;
  Status?: number;
  DashboardArn?: string;
  LinkEntities?: Array<string>;
}
export interface UpdateDashboardPermissionsRequest {
  AwsAccountId: string;
  DashboardId: string;
  GrantPermissions?: Array<ResourcePermission>;
  RevokePermissions?: Array<ResourcePermission>;
  GrantLinkPermissions?: Array<ResourcePermission>;
  RevokeLinkPermissions?: Array<ResourcePermission>;
}
export interface UpdateDashboardPermissionsResponse {
  DashboardArn?: string;
  DashboardId?: string;
  Permissions?: Array<ResourcePermission>;
  RequestId?: string;
  Status?: number;
  LinkSharingConfiguration?: LinkSharingConfiguration;
}
export interface UpdateDashboardPublishedVersionRequest {
  AwsAccountId: string;
  DashboardId: string;
  VersionNumber: number;
}
export interface UpdateDashboardPublishedVersionResponse {
  DashboardId?: string;
  DashboardArn?: string;
  Status?: number;
  RequestId?: string;
}
export interface UpdateDashboardRequest {
  AwsAccountId: string;
  DashboardId: string;
  Name: string;
  SourceEntity?: DashboardSourceEntity;
  Parameters?: Parameters;
  VersionDescription?: string;
  DashboardPublishOptions?: DashboardPublishOptions;
  ThemeArn?: string;
  Definition?: DashboardVersionDefinition;
  ValidationStrategy?: ValidationStrategy;
}
export interface UpdateDashboardResponse {
  Arn?: string;
  VersionArn?: string;
  DashboardId?: string;
  CreationStatus?: ResourceStatus;
  Status?: number;
  RequestId?: string;
}
export interface UpdateDashboardsQAConfigurationRequest {
  AwsAccountId: string;
  DashboardsQAStatus: DashboardsQAStatus;
}
export interface UpdateDashboardsQAConfigurationResponse {
  DashboardsQAStatus?: DashboardsQAStatus;
  RequestId?: string;
  Status?: number;
}
export interface UpdateDataSetPermissionsRequest {
  AwsAccountId: string;
  DataSetId: string;
  GrantPermissions?: Array<ResourcePermission>;
  RevokePermissions?: Array<ResourcePermission>;
}
export interface UpdateDataSetPermissionsResponse {
  DataSetArn?: string;
  DataSetId?: string;
  RequestId?: string;
  Status?: number;
}
export interface UpdateDataSetRequest {
  AwsAccountId: string;
  DataSetId: string;
  Name: string;
  PhysicalTableMap: Record<string, PhysicalTable>;
  LogicalTableMap?: Record<string, LogicalTable>;
  ImportMode: DataSetImportMode;
  ColumnGroups?: Array<ColumnGroup>;
  FieldFolders?: Record<string, FieldFolder>;
  RowLevelPermissionDataSet?: RowLevelPermissionDataSet;
  RowLevelPermissionTagConfiguration?: RowLevelPermissionTagConfiguration;
  ColumnLevelPermissionRules?: Array<ColumnLevelPermissionRule>;
  DataSetUsageConfiguration?: DataSetUsageConfiguration;
  DatasetParameters?: Array<DatasetParameter>;
  PerformanceConfiguration?: PerformanceConfiguration;
}
export interface UpdateDataSetResponse {
  Arn?: string;
  DataSetId?: string;
  IngestionArn?: string;
  IngestionId?: string;
  RequestId?: string;
  Status?: number;
}
export interface UpdateDataSourcePermissionsRequest {
  AwsAccountId: string;
  DataSourceId: string;
  GrantPermissions?: Array<ResourcePermission>;
  RevokePermissions?: Array<ResourcePermission>;
}
export interface UpdateDataSourcePermissionsResponse {
  DataSourceArn?: string;
  DataSourceId?: string;
  RequestId?: string;
  Status?: number;
}
export interface UpdateDataSourceRequest {
  AwsAccountId: string;
  DataSourceId: string;
  Name: string;
  DataSourceParameters?: DataSourceParameters;
  Credentials?: DataSourceCredentials;
  VpcConnectionProperties?: VpcConnectionProperties;
  SslProperties?: SslProperties;
}
export interface UpdateDataSourceResponse {
  Arn?: string;
  DataSourceId?: string;
  UpdateStatus?: ResourceStatus;
  RequestId?: string;
  Status?: number;
}
export interface UpdateDefaultQBusinessApplicationRequest {
  AwsAccountId: string;
  Namespace?: string;
  ApplicationId: string;
}
export interface UpdateDefaultQBusinessApplicationResponse {
  RequestId?: string;
  Status?: number;
}
export interface UpdateFolderPermissionsRequest {
  AwsAccountId: string;
  FolderId: string;
  GrantPermissions?: Array<ResourcePermission>;
  RevokePermissions?: Array<ResourcePermission>;
}
export interface UpdateFolderPermissionsResponse {
  Status?: number;
  Arn?: string;
  FolderId?: string;
  Permissions?: Array<ResourcePermission>;
  RequestId?: string;
}
export interface UpdateFolderRequest {
  AwsAccountId: string;
  FolderId: string;
  Name: string;
}
export interface UpdateFolderResponse {
  Status?: number;
  Arn?: string;
  FolderId?: string;
  RequestId?: string;
}
export interface UpdateGroupRequest {
  GroupName: string;
  Description?: string;
  AwsAccountId: string;
  Namespace: string;
}
export interface UpdateGroupResponse {
  Group?: Group;
  RequestId?: string;
  Status?: number;
}
export interface UpdateIAMPolicyAssignmentRequest {
  AwsAccountId: string;
  AssignmentName: string;
  Namespace: string;
  AssignmentStatus?: AssignmentStatus;
  PolicyArn?: string;
  Identities?: Record<string, Array<string>>;
}
export interface UpdateIAMPolicyAssignmentResponse {
  AssignmentName?: string;
  AssignmentId?: string;
  PolicyArn?: string;
  Identities?: Record<string, Array<string>>;
  AssignmentStatus?: AssignmentStatus;
  RequestId?: string;
  Status?: number;
}
export interface UpdateIdentityPropagationConfigRequest {
  AwsAccountId: string;
  Service: ServiceType;
  AuthorizedTargets?: Array<string>;
}
export interface UpdateIdentityPropagationConfigResponse {
  RequestId?: string;
  Status?: number;
}
export interface UpdateIpRestrictionRequest {
  AwsAccountId: string;
  IpRestrictionRuleMap?: Record<string, string>;
  VpcIdRestrictionRuleMap?: Record<string, string>;
  VpcEndpointIdRestrictionRuleMap?: Record<string, string>;
  Enabled?: boolean;
}
export interface UpdateIpRestrictionResponse {
  AwsAccountId?: string;
  RequestId?: string;
  Status?: number;
}
export interface UpdateKeyRegistrationRequest {
  AwsAccountId: string;
  KeyRegistration: Array<RegisteredCustomerManagedKey>;
}
export interface UpdateKeyRegistrationResponse {
  FailedKeyRegistration?: Array<FailedKeyRegistrationEntry>;
  SuccessfulKeyRegistration?: Array<SuccessfulKeyRegistrationEntry>;
  RequestId?: string;
}
export type UpdateLinkPermissionList = Array<ResourcePermission>;
export interface UpdatePublicSharingSettingsRequest {
  AwsAccountId: string;
  PublicSharingEnabled?: boolean;
}
export interface UpdatePublicSharingSettingsResponse {
  RequestId?: string;
  Status?: number;
}
export interface UpdateQPersonalizationConfigurationRequest {
  AwsAccountId: string;
  PersonalizationMode: PersonalizationMode;
}
export interface UpdateQPersonalizationConfigurationResponse {
  PersonalizationMode?: PersonalizationMode;
  RequestId?: string;
  Status?: number;
}
export interface UpdateQuickSightQSearchConfigurationRequest {
  AwsAccountId: string;
  QSearchStatus: QSearchStatus;
}
export interface UpdateQuickSightQSearchConfigurationResponse {
  QSearchStatus?: QSearchStatus;
  RequestId?: string;
  Status?: number;
}
export interface UpdateRefreshScheduleRequest {
  DataSetId: string;
  AwsAccountId: string;
  Schedule: RefreshSchedule;
}
export interface UpdateRefreshScheduleResponse {
  Status?: number;
  RequestId?: string;
  ScheduleId?: string;
  Arn?: string;
}
export type UpdateResourcePermissionList = Array<ResourcePermission>;
export interface UpdateRoleCustomPermissionRequest {
  CustomPermissionsName: string;
  Role: Role;
  AwsAccountId: string;
  Namespace: string;
}
export interface UpdateRoleCustomPermissionResponse {
  RequestId?: string;
  Status?: number;
}
export interface UpdateSPICECapacityConfigurationRequest {
  AwsAccountId: string;
  PurchaseMode: PurchaseMode;
}
export interface UpdateSPICECapacityConfigurationResponse {
  RequestId?: string;
  Status?: number;
}
export interface UpdateTemplateAliasRequest {
  AwsAccountId: string;
  TemplateId: string;
  AliasName: string;
  TemplateVersionNumber: number;
}
export interface UpdateTemplateAliasResponse {
  TemplateAlias?: TemplateAlias;
  Status?: number;
  RequestId?: string;
}
export interface UpdateTemplatePermissionsRequest {
  AwsAccountId: string;
  TemplateId: string;
  GrantPermissions?: Array<ResourcePermission>;
  RevokePermissions?: Array<ResourcePermission>;
}
export interface UpdateTemplatePermissionsResponse {
  TemplateId?: string;
  TemplateArn?: string;
  Permissions?: Array<ResourcePermission>;
  RequestId?: string;
  Status?: number;
}
export interface UpdateTemplateRequest {
  AwsAccountId: string;
  TemplateId: string;
  SourceEntity?: TemplateSourceEntity;
  VersionDescription?: string;
  Name?: string;
  Definition?: TemplateVersionDefinition;
  ValidationStrategy?: ValidationStrategy;
}
export interface UpdateTemplateResponse {
  TemplateId?: string;
  Arn?: string;
  VersionArn?: string;
  CreationStatus?: ResourceStatus;
  Status?: number;
  RequestId?: string;
}
export interface UpdateThemeAliasRequest {
  AwsAccountId: string;
  ThemeId: string;
  AliasName: string;
  ThemeVersionNumber: number;
}
export interface UpdateThemeAliasResponse {
  ThemeAlias?: ThemeAlias;
  Status?: number;
  RequestId?: string;
}
export interface UpdateThemePermissionsRequest {
  AwsAccountId: string;
  ThemeId: string;
  GrantPermissions?: Array<ResourcePermission>;
  RevokePermissions?: Array<ResourcePermission>;
}
export interface UpdateThemePermissionsResponse {
  ThemeId?: string;
  ThemeArn?: string;
  Permissions?: Array<ResourcePermission>;
  RequestId?: string;
  Status?: number;
}
export interface UpdateThemeRequest {
  AwsAccountId: string;
  ThemeId: string;
  Name?: string;
  BaseThemeId: string;
  VersionDescription?: string;
  Configuration?: ThemeConfiguration;
}
export interface UpdateThemeResponse {
  ThemeId?: string;
  Arn?: string;
  VersionArn?: string;
  CreationStatus?: ResourceStatus;
  Status?: number;
  RequestId?: string;
}
export interface UpdateTopicPermissionsRequest {
  AwsAccountId: string;
  TopicId: string;
  GrantPermissions?: Array<ResourcePermission>;
  RevokePermissions?: Array<ResourcePermission>;
}
export interface UpdateTopicPermissionsResponse {
  TopicId?: string;
  TopicArn?: string;
  Permissions?: Array<ResourcePermission>;
  Status?: number;
  RequestId?: string;
}
export interface UpdateTopicRefreshScheduleRequest {
  AwsAccountId: string;
  TopicId: string;
  DatasetId: string;
  RefreshSchedule: TopicRefreshSchedule;
}
export interface UpdateTopicRefreshScheduleResponse {
  TopicId?: string;
  TopicArn?: string;
  DatasetArn?: string;
  Status?: number;
  RequestId?: string;
}
export interface UpdateTopicRequest {
  AwsAccountId: string;
  TopicId: string;
  Topic: TopicDetails;
}
export interface UpdateTopicResponse {
  TopicId?: string;
  Arn?: string;
  RefreshArn?: string;
  RequestId?: string;
  Status?: number;
}
export interface UpdateUserCustomPermissionRequest {
  UserName: string;
  AwsAccountId: string;
  Namespace: string;
  CustomPermissionsName: string;
}
export interface UpdateUserCustomPermissionResponse {
  RequestId?: string;
  Status?: number;
}
export interface UpdateUserRequest {
  UserName: string;
  AwsAccountId: string;
  Namespace: string;
  Email: string;
  Role: UserRole;
  CustomPermissionsName?: string;
  UnapplyCustomPermissions?: boolean;
  ExternalLoginFederationProviderType?: string;
  CustomFederationProviderUrl?: string;
  ExternalLoginId?: string;
}
export interface UpdateUserResponse {
  User?: User;
  RequestId?: string;
  Status?: number;
}
export interface UpdateVPCConnectionRequest {
  AwsAccountId: string;
  VPCConnectionId: string;
  Name: string;
  SubnetIds: Array<string>;
  SecurityGroupIds: Array<string>;
  DnsResolvers?: Array<string>;
  RoleArn: string;
}
export interface UpdateVPCConnectionResponse {
  Arn?: string;
  VPCConnectionId?: string;
  UpdateStatus?: VPCConnectionResourceStatus;
  AvailabilityStatus?: VPCConnectionAvailabilityStatus;
  RequestId?: string;
  Status?: number;
}
export interface UploadSettings {
  Format?: FileFormat;
  StartFromRow?: number;
  ContainsHeader?: boolean;
  TextQualifier?: TextQualifier;
  Delimiter?: string;
}
export type URLOperationTemplate = string;

export type URLTargetConfiguration = "NEW_TAB" | "NEW_WINDOW" | "SAME_TAB";
export interface User {
  Arn?: string;
  UserName?: string;
  Email?: string;
  Role?: UserRole;
  IdentityType?: IdentityType;
  Active?: boolean;
  PrincipalId?: string;
  CustomPermissionsName?: string;
  ExternalLoginFederationProviderType?: string;
  ExternalLoginFederationProviderUrl?: string;
  ExternalLoginId?: string;
}
export type UserList = Array<User>;
export type UserName = string;

export type UserRole =
  | "ADMIN"
  | "AUTHOR"
  | "READER"
  | "RESTRICTED_AUTHOR"
  | "RESTRICTED_READER"
  | "ADMIN_PRO"
  | "AUTHOR_PRO"
  | "READER_PRO";
export interface ValidationStrategy {
  Mode: ValidationStrategyMode;
}
export type ValidationStrategyMode = "STRICT" | "LENIENT";
export type ValueWhenUnsetOption = "RECOMMENDED_VALUE" | "NULL";
export type VersionDescription = string;

export type VersionNumber = number;

export type VerticalTextAlignment = "TOP" | "MIDDLE" | "BOTTOM" | "AUTO";
export type Visibility = "HIDDEN" | "VISIBLE";
export type VisiblePanelColumns = number;

export type VisiblePanelRows = number;

export interface VisibleRangeOptions {
  PercentRange?: PercentVisibleRange;
}
export interface Visual {
  TableVisual?: TableVisual;
  PivotTableVisual?: PivotTableVisual;
  BarChartVisual?: BarChartVisual;
  KPIVisual?: KPIVisual;
  PieChartVisual?: PieChartVisual;
  GaugeChartVisual?: GaugeChartVisual;
  LineChartVisual?: LineChartVisual;
  HeatMapVisual?: HeatMapVisual;
  TreeMapVisual?: TreeMapVisual;
  GeospatialMapVisual?: GeospatialMapVisual;
  FilledMapVisual?: FilledMapVisual;
  LayerMapVisual?: LayerMapVisual;
  FunnelChartVisual?: FunnelChartVisual;
  ScatterPlotVisual?: ScatterPlotVisual;
  ComboChartVisual?: ComboChartVisual;
  BoxPlotVisual?: BoxPlotVisual;
  WaterfallVisual?: WaterfallVisual;
  HistogramVisual?: HistogramVisual;
  WordCloudVisual?: WordCloudVisual;
  InsightVisual?: InsightVisual;
  SankeyDiagramVisual?: SankeyDiagramVisual;
  CustomContentVisual?: CustomContentVisual;
  EmptyVisual?: EmptyVisual;
  RadarChartVisual?: RadarChartVisual;
  PluginVisual?: PluginVisual;
}
export interface VisualAxisSortOption {
  AvailabilityStatus?: DashboardBehavior;
}
export interface VisualCustomAction {
  CustomActionId: string;
  Name: string;
  Status?: WidgetStatus;
  Trigger: VisualCustomActionTrigger;
  ActionOperations: Array<VisualCustomActionOperation>;
}
export interface VisualCustomActionDefaults {
  highlightOperation?: VisualHighlightOperation;
}
export type VisualCustomActionList = Array<VisualCustomAction>;
export type VisualCustomActionName = string;

export interface VisualCustomActionOperation {
  FilterOperation?: CustomActionFilterOperation;
  NavigationOperation?: CustomActionNavigationOperation;
  URLOperation?: CustomActionURLOperation;
  SetParametersOperation?: CustomActionSetParametersOperation;
}
export type VisualCustomActionOperationList =
  Array<VisualCustomActionOperation>;
export type VisualCustomActionTrigger = "DATA_POINT_CLICK" | "DATA_POINT_MENU";
export interface VisualHighlightOperation {
  Trigger: VisualHighlightTrigger;
}
export type VisualHighlightTrigger =
  | "DATA_POINT_CLICK"
  | "DATA_POINT_HOVER"
  | "NONE";
export interface VisualInteractionOptions {
  VisualMenuOption?: VisualMenuOption;
  ContextMenuOption?: ContextMenuOption;
}
export type VisualList = Array<Visual>;
export interface VisualMenuOption {
  AvailabilityStatus?: DashboardBehavior;
}
export interface VisualOptions {
  type?: string;
}
export interface VisualPalette {
  ChartColor?: string;
  ColorMap?: Array<DataPathColor>;
}
export type VisualRole =
  | "PRIMARY"
  | "COMPLIMENTARY"
  | "MULTI_INTENT"
  | "FALLBACK"
  | "FRAGMENT";
export type VisualSubtitle = string;

export interface VisualSubtitleLabelOptions {
  Visibility?: Visibility;
  FormatText?: LongFormatText;
}
export type VisualTitle = string;

export interface VisualTitleLabelOptions {
  Visibility?: Visibility;
  FormatText?: ShortFormatText;
}
export interface VPCConnection {
  VPCConnectionId?: string;
  Arn?: string;
  Name?: string;
  VPCId?: string;
  SecurityGroupIds?: Array<string>;
  DnsResolvers?: Array<string>;
  Status?: VPCConnectionResourceStatus;
  AvailabilityStatus?: VPCConnectionAvailabilityStatus;
  NetworkInterfaces?: Array<NetworkInterface>;
  RoleArn?: string;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
}
export type VPCConnectionAvailabilityStatus =
  | "AVAILABLE"
  | "UNAVAILABLE"
  | "PARTIALLY_AVAILABLE";
export interface VpcConnectionProperties {
  VpcConnectionArn: string;
}
export type VPCConnectionResourceIdRestricted = string;

export type VPCConnectionResourceIdUnrestricted = string;

export type VPCConnectionResourceStatus =
  | "CREATION_IN_PROGRESS"
  | "CREATION_SUCCESSFUL"
  | "CREATION_FAILED"
  | "UPDATE_IN_PROGRESS"
  | "UPDATE_SUCCESSFUL"
  | "UPDATE_FAILED"
  | "DELETION_IN_PROGRESS"
  | "DELETION_FAILED"
  | "DELETED";
export interface VPCConnectionSummary {
  VPCConnectionId?: string;
  Arn?: string;
  Name?: string;
  VPCId?: string;
  SecurityGroupIds?: Array<string>;
  DnsResolvers?: Array<string>;
  Status?: VPCConnectionResourceStatus;
  AvailabilityStatus?: VPCConnectionAvailabilityStatus;
  NetworkInterfaces?: Array<NetworkInterface>;
  RoleArn?: string;
  CreatedTime?: Date | string;
  LastUpdatedTime?: Date | string;
}
export type VPCConnectionSummaryList = Array<VPCConnectionSummary>;
export type VpcEndpointId = string;

export type VpcEndpointIdRestrictionRuleDescription = string;

export type VpcEndpointIdRestrictionRuleMap = Record<string, string>;
export type VpcId = string;

export type VpcIdRestrictionRuleDescription = string;

export type VpcIdRestrictionRuleMap = Record<string, string>;
export type Warehouse = string;

export interface WaterfallChartAggregatedFieldWells {
  Categories?: Array<DimensionField>;
  Values?: Array<MeasureField>;
  Breakdowns?: Array<DimensionField>;
}
export interface WaterfallChartColorConfiguration {
  GroupColorConfiguration?: WaterfallChartGroupColorConfiguration;
}
export interface WaterfallChartConfiguration {
  FieldWells?: WaterfallChartFieldWells;
  SortConfiguration?: WaterfallChartSortConfiguration;
  WaterfallChartOptions?: WaterfallChartOptions;
  CategoryAxisLabelOptions?: ChartAxisLabelOptions;
  CategoryAxisDisplayOptions?: AxisDisplayOptions;
  PrimaryYAxisLabelOptions?: ChartAxisLabelOptions;
  PrimaryYAxisDisplayOptions?: AxisDisplayOptions;
  Legend?: LegendOptions;
  DataLabels?: DataLabelOptions;
  VisualPalette?: VisualPalette;
  ColorConfiguration?: WaterfallChartColorConfiguration;
  Interactions?: VisualInteractionOptions;
}
export interface WaterfallChartFieldWells {
  WaterfallChartAggregatedFieldWells?: WaterfallChartAggregatedFieldWells;
}
export interface WaterfallChartGroupColorConfiguration {
  PositiveBarColor?: string;
  NegativeBarColor?: string;
  TotalBarColor?: string;
}
export interface WaterfallChartOptions {
  TotalBarLabel?: string;
}
export interface WaterfallChartSortConfiguration {
  CategorySort?: Array<FieldSortOptions>;
  BreakdownItemsLimit?: ItemsLimitConfiguration;
}
export interface WaterfallVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: WaterfallChartConfiguration;
  Actions?: Array<VisualCustomAction>;
  ColumnHierarchies?: Array<ColumnHierarchy>;
  VisualContentAltText?: string;
}
export interface WhatIfPointScenario {
  Date: Date | string;
  Value: number;
}
export interface WhatIfRangeScenario {
  StartDate: Date | string;
  EndDate: Date | string;
  Value: number;
}
export type WidgetStatus = "ENABLED" | "DISABLED";
export interface WordCloudAggregatedFieldWells {
  GroupBy?: Array<DimensionField>;
  Size?: Array<MeasureField>;
}
export interface WordCloudChartConfiguration {
  FieldWells?: WordCloudFieldWells;
  SortConfiguration?: WordCloudSortConfiguration;
  CategoryLabelOptions?: ChartAxisLabelOptions;
  WordCloudOptions?: WordCloudOptions;
  Interactions?: VisualInteractionOptions;
}
export type WordCloudCloudLayout = "FLUID" | "NORMAL";
export type WordCloudDimensionFieldList = Array<DimensionField>;
export interface WordCloudFieldWells {
  WordCloudAggregatedFieldWells?: WordCloudAggregatedFieldWells;
}
export type WordCloudMaximumStringLength = number;

export type WordCloudMeasureFieldList = Array<MeasureField>;
export interface WordCloudOptions {
  WordOrientation?: WordCloudWordOrientation;
  WordScaling?: WordCloudWordScaling;
  CloudLayout?: WordCloudCloudLayout;
  WordCasing?: WordCloudWordCasing;
  WordPadding?: WordCloudWordPadding;
  MaximumStringLength?: number;
}
export interface WordCloudSortConfiguration {
  CategoryItemsLimit?: ItemsLimitConfiguration;
  CategorySort?: Array<FieldSortOptions>;
}
export interface WordCloudVisual {
  VisualId: string;
  Title?: VisualTitleLabelOptions;
  Subtitle?: VisualSubtitleLabelOptions;
  ChartConfiguration?: WordCloudChartConfiguration;
  Actions?: Array<VisualCustomAction>;
  ColumnHierarchies?: Array<ColumnHierarchy>;
  VisualContentAltText?: string;
}
export type WordCloudWordCasing = "LOWER_CASE" | "EXISTING_CASE";
export type WordCloudWordOrientation = "HORIZONTAL" | "HORIZONTAL_AND_VERTICAL";
export type WordCloudWordPadding = "NONE" | "SMALL" | "MEDIUM" | "LARGE";
export type WordCloudWordScaling = "EMPHASIZE" | "NORMAL";
export type WorkGroup = string;

export interface YAxisOptions {
  YAxis: SingleYAxisOption;
}
export declare namespace BatchCreateTopicReviewedAnswer {
  export type Input = BatchCreateTopicReviewedAnswerRequest;
  export type Output = BatchCreateTopicReviewedAnswerResponse;
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
  export type Output = BatchDeleteTopicReviewedAnswerResponse;
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
  export type Output = CancelIngestionResponse;
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
  export type Output = CreateAccountCustomizationResponse;
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
  export type Output = CreateAccountSubscriptionResponse;
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
  export type Output = CreateAnalysisResponse;
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
  export type Output = CreateBrandResponse;
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
  export type Output = CreateCustomPermissionsResponse;
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
  export type Output = CreateDashboardResponse;
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
  export type Output = CreateDataSetResponse;
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
  export type Output = CreateDataSourceResponse;
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
  export type Output = CreateFolderResponse;
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
  export type Output = CreateFolderMembershipResponse;
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
  export type Output = CreateGroupResponse;
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
  export type Output = CreateGroupMembershipResponse;
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
  export type Output = CreateIAMPolicyAssignmentResponse;
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
  export type Output = CreateIngestionResponse;
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
  export type Output = CreateNamespaceResponse;
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
  export type Output = CreateRefreshScheduleResponse;
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
  export type Output = CreateRoleMembershipResponse;
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
  export type Output = CreateTemplateResponse;
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
  export type Output = CreateTemplateAliasResponse;
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
  export type Output = CreateThemeResponse;
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
  export type Output = CreateThemeAliasResponse;
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
  export type Output = CreateTopicResponse;
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
  export type Output = CreateTopicRefreshScheduleResponse;
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
  export type Output = CreateVPCConnectionResponse;
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
  export type Output = DeleteAccountCustomizationResponse;
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
  export type Output = DeleteAccountSubscriptionResponse;
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
  export type Output = DeleteAnalysisResponse;
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
  export type Output = DeleteBrandResponse;
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
  export type Output = DeleteBrandAssignmentResponse;
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
  export type Output = DeleteCustomPermissionsResponse;
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
  export type Output = DeleteDashboardResponse;
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
  export type Output = DeleteDataSetResponse;
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
  export type Output = DeleteDataSetRefreshPropertiesResponse;
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
  export type Output = DeleteDataSourceResponse;
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
  export type Output = DeleteDefaultQBusinessApplicationResponse;
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
  export type Output = DeleteFolderResponse;
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
  export type Output = DeleteFolderMembershipResponse;
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
  export type Output = DeleteGroupResponse;
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
  export type Output = DeleteGroupMembershipResponse;
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
  export type Output = DeleteIAMPolicyAssignmentResponse;
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
  export type Output = DeleteIdentityPropagationConfigResponse;
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
  export type Output = DeleteNamespaceResponse;
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
  export type Output = DeleteRefreshScheduleResponse;
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
  export type Output = DeleteRoleCustomPermissionResponse;
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
  export type Output = DeleteRoleMembershipResponse;
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
  export type Output = DeleteTemplateResponse;
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
  export type Output = DeleteTemplateAliasResponse;
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
  export type Output = DeleteThemeResponse;
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
  export type Output = DeleteThemeAliasResponse;
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
  export type Output = DeleteTopicResponse;
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
  export type Output = DeleteTopicRefreshScheduleResponse;
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
  export type Output = DeleteUserResponse;
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
  export type Output = DeleteUserByPrincipalIdResponse;
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
  export type Output = DeleteUserCustomPermissionResponse;
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
  export type Output = DeleteVPCConnectionResponse;
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
  export type Output = DescribeAccountCustomizationResponse;
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
  export type Output = DescribeAccountSettingsResponse;
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
  export type Output = DescribeAccountSubscriptionResponse;
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
  export type Output = DescribeAnalysisResponse;
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
  export type Output = DescribeAnalysisDefinitionResponse;
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
  export type Output = DescribeAnalysisPermissionsResponse;
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
  export type Output = DescribeAssetBundleExportJobResponse;
  export type Error =
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeAssetBundleImportJob {
  export type Input = DescribeAssetBundleImportJobRequest;
  export type Output = DescribeAssetBundleImportJobResponse;
  export type Error =
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeBrand {
  export type Input = DescribeBrandRequest;
  export type Output = DescribeBrandResponse;
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
  export type Output = DescribeBrandAssignmentResponse;
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
  export type Output = DescribeBrandPublishedVersionResponse;
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
  export type Output = DescribeCustomPermissionsResponse;
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
  export type Output = DescribeDashboardResponse;
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
  export type Output = DescribeDashboardDefinitionResponse;
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
  export type Output = DescribeDashboardPermissionsResponse;
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
  export type Output = DescribeDashboardSnapshotJobResponse;
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
  export type Output = DescribeDashboardSnapshotJobResultResponse;
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
  export type Output = DescribeDashboardsQAConfigurationResponse;
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
  export type Output = DescribeDataSetResponse;
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
  export type Output = DescribeDataSetPermissionsResponse;
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
  export type Output = DescribeDataSetRefreshPropertiesResponse;
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
  export type Output = DescribeDataSourceResponse;
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
  export type Output = DescribeDataSourcePermissionsResponse;
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
  export type Output = DescribeDefaultQBusinessApplicationResponse;
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
  export type Output = DescribeFolderResponse;
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
  export type Output = DescribeFolderPermissionsResponse;
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
  export type Output = DescribeFolderResolvedPermissionsResponse;
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
  export type Output = DescribeGroupResponse;
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
  export type Output = DescribeGroupMembershipResponse;
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
  export type Output = DescribeIAMPolicyAssignmentResponse;
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
  export type Output = DescribeIngestionResponse;
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
  export type Output = DescribeIpRestrictionResponse;
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
  export type Output = DescribeKeyRegistrationResponse;
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeNamespace {
  export type Input = DescribeNamespaceRequest;
  export type Output = DescribeNamespaceResponse;
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
  export type Output = DescribeQPersonalizationConfigurationResponse;
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
  export type Output = DescribeQuickSightQSearchConfigurationResponse;
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
  export type Output = DescribeRefreshScheduleResponse;
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
  export type Output = DescribeRoleCustomPermissionResponse;
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
  export type Output = DescribeTemplateResponse;
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
  export type Output = DescribeTemplateAliasResponse;
  export type Error =
    | InternalFailureException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace DescribeTemplateDefinition {
  export type Input = DescribeTemplateDefinitionRequest;
  export type Output = DescribeTemplateDefinitionResponse;
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
  export type Output = DescribeTemplatePermissionsResponse;
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
  export type Output = DescribeThemeResponse;
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
  export type Output = DescribeThemeAliasResponse;
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
  export type Output = DescribeThemePermissionsResponse;
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
  export type Output = DescribeTopicResponse;
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
  export type Output = DescribeTopicPermissionsResponse;
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
  export type Output = DescribeTopicRefreshResponse;
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
  export type Output = DescribeTopicRefreshScheduleResponse;
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
  export type Output = DescribeUserResponse;
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
  export type Output = DescribeVPCConnectionResponse;
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
  export type Output = GenerateEmbedUrlForAnonymousUserResponse;
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
  export type Output = GenerateEmbedUrlForRegisteredUserResponse;
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
  export type Output = GenerateEmbedUrlForRegisteredUserWithIdentityResponse;
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
  export type Output = GetDashboardEmbedUrlResponse;
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
  export type Output = GetSessionEmbedUrlResponse;
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
  export type Output = ListAnalysesResponse;
  export type Error =
    | InternalFailureException
    | InvalidNextTokenException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListAssetBundleExportJobs {
  export type Input = ListAssetBundleExportJobsRequest;
  export type Output = ListAssetBundleExportJobsResponse;
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
  export type Output = ListAssetBundleImportJobsResponse;
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
  export type Output = ListBrandsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListCustomPermissions {
  export type Input = ListCustomPermissionsRequest;
  export type Output = ListCustomPermissionsResponse;
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

export declare namespace ListDashboards {
  export type Input = ListDashboardsRequest;
  export type Output = ListDashboardsResponse;
  export type Error =
    | InternalFailureException
    | InvalidNextTokenException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListDashboardVersions {
  export type Input = ListDashboardVersionsRequest;
  export type Output = ListDashboardVersionsResponse;
  export type Error =
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListDataSets {
  export type Input = ListDataSetsRequest;
  export type Output = ListDataSetsResponse;
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
  export type Output = ListDataSourcesResponse;
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
  export type Output = ListFolderMembersResponse;
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
  export type Output = ListFoldersResponse;
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
  export type Output = ListFoldersForResourceResponse;
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
  export type Output = ListGroupMembershipsResponse;
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
  export type Output = ListGroupsResponse;
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
  export type Output = ListIAMPolicyAssignmentsResponse;
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
  export type Output = ListIAMPolicyAssignmentsForUserResponse;
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
  export type Output = ListIdentityPropagationConfigsResponse;
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
  export type Output = ListIngestionsResponse;
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
  export type Output = ListNamespacesResponse;
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
  export type Output = ListRefreshSchedulesResponse;
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
  export type Output = ListRoleMembershipsResponse;
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
  export type Output = ListTagsForResourceResponse;
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
  export type Output = ListTemplateAliasesResponse;
  export type Error =
    | InternalFailureException
    | InvalidNextTokenException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListTemplates {
  export type Input = ListTemplatesRequest;
  export type Output = ListTemplatesResponse;
  export type Error =
    | InternalFailureException
    | InvalidNextTokenException
    | InvalidParameterValueException
    | ResourceNotFoundException
    | ThrottlingException
    | UnsupportedUserEditionException
    | CommonAwsError;
}

export declare namespace ListTemplateVersions {
  export type Input = ListTemplateVersionsRequest;
  export type Output = ListTemplateVersionsResponse;
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
  export type Output = ListThemeAliasesResponse;
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

export declare namespace ListThemes {
  export type Input = ListThemesRequest;
  export type Output = ListThemesResponse;
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

export declare namespace ListThemeVersions {
  export type Input = ListThemeVersionsRequest;
  export type Output = ListThemeVersionsResponse;
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
  export type Output = ListTopicRefreshSchedulesResponse;
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
  export type Output = ListTopicReviewedAnswersResponse;
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
  export type Output = ListTopicsResponse;
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
  export type Output = ListUserGroupsResponse;
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
  export type Output = ListUsersResponse;
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
  export type Output = ListVPCConnectionsResponse;
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
  export type Output = PredictQAResultsResponse;
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutDataSetRefreshProperties {
  export type Input = PutDataSetRefreshPropertiesRequest;
  export type Output = PutDataSetRefreshPropertiesResponse;
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
  export type Output = RegisterUserResponse;
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
  export type Output = RestoreAnalysisResponse;
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
  export type Output = SearchAnalysesResponse;
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
  export type Output = SearchDashboardsResponse;
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
  export type Output = SearchDataSetsResponse;
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
  export type Output = SearchDataSourcesResponse;
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
  export type Output = SearchFoldersResponse;
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
  export type Output = SearchGroupsResponse;
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
  export type Output = SearchTopicsResponse;
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
  export type Output = StartAssetBundleExportJobResponse;
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
  export type Output = StartAssetBundleImportJobResponse;
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
  export type Output = StartDashboardSnapshotJobResponse;
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
  export type Output = StartDashboardSnapshotJobScheduleResponse;
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
  export type Output = TagResourceResponse;
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
  export type Output = UntagResourceResponse;
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
  export type Output = UpdateAccountCustomizationResponse;
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
  export type Output = UpdateAccountSettingsResponse;
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
  export type Output = UpdateAnalysisResponse;
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
  export type Output = UpdateAnalysisPermissionsResponse;
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
  export type Output = UpdateApplicationWithTokenExchangeGrantResponse;
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
  export type Output = UpdateBrandResponse;
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
  export type Output = UpdateBrandAssignmentResponse;
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
  export type Output = UpdateBrandPublishedVersionResponse;
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
  export type Output = UpdateCustomPermissionsResponse;
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
  export type Output = UpdateDashboardResponse;
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
  export type Output = UpdateDashboardLinksResponse;
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
  export type Output = UpdateDashboardPermissionsResponse;
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
  export type Output = UpdateDashboardPublishedVersionResponse;
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
  export type Output = UpdateDashboardsQAConfigurationResponse;
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
  export type Output = UpdateDataSetResponse;
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
  export type Output = UpdateDataSetPermissionsResponse;
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
  export type Output = UpdateDataSourceResponse;
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
  export type Output = UpdateDataSourcePermissionsResponse;
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
  export type Output = UpdateDefaultQBusinessApplicationResponse;
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
  export type Output = UpdateFolderResponse;
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
  export type Output = UpdateFolderPermissionsResponse;
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
  export type Output = UpdateGroupResponse;
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
  export type Output = UpdateIAMPolicyAssignmentResponse;
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
  export type Output = UpdateIdentityPropagationConfigResponse;
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
  export type Output = UpdateIpRestrictionResponse;
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
  export type Output = UpdateKeyRegistrationResponse;
  export type Error =
    | AccessDeniedException
    | InternalFailureException
    | InvalidParameterValueException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdatePublicSharingSettings {
  export type Input = UpdatePublicSharingSettingsRequest;
  export type Output = UpdatePublicSharingSettingsResponse;
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
  export type Output = UpdateQPersonalizationConfigurationResponse;
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
  export type Output = UpdateQuickSightQSearchConfigurationResponse;
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
  export type Output = UpdateRefreshScheduleResponse;
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
  export type Output = UpdateRoleCustomPermissionResponse;
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
  export type Output = UpdateSPICECapacityConfigurationResponse;
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
  export type Output = UpdateTemplateResponse;
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
  export type Output = UpdateTemplateAliasResponse;
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
  export type Output = UpdateTemplatePermissionsResponse;
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
  export type Output = UpdateThemeResponse;
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
  export type Output = UpdateThemeAliasResponse;
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
  export type Output = UpdateThemePermissionsResponse;
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
  export type Output = UpdateTopicResponse;
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
  export type Output = UpdateTopicPermissionsResponse;
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
  export type Output = UpdateTopicRefreshScheduleResponse;
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
  export type Output = UpdateUserResponse;
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
  export type Output = UpdateUserCustomPermissionResponse;
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
  export type Output = UpdateVPCConnectionResponse;
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
