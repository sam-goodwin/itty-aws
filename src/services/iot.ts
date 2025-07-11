import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AWSIotService {
  acceptCertificateTransfer(
    input: AcceptCertificateTransferRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | TransferAlreadyCompletedException
    | UnauthorizedException
    | CommonAwsError
  >;
  addThingToBillingGroup(
    input: AddThingToBillingGroupRequest,
  ): Effect.Effect<
    AddThingToBillingGroupResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  addThingToThingGroup(
    input: AddThingToThingGroupRequest,
  ): Effect.Effect<
    AddThingToThingGroupResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  associateSbomWithPackageVersion(
    input: AssociateSbomWithPackageVersionRequest,
  ): Effect.Effect<
    AssociateSbomWithPackageVersionResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  associateTargetsWithJob(
    input: AssociateTargetsWithJobRequest,
  ): Effect.Effect<
    AssociateTargetsWithJobResponse,
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  attachPolicy(
    input: AttachPolicyRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  attachPrincipalPolicy(
    input: AttachPrincipalPolicyRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  attachSecurityProfile(
    input: AttachSecurityProfileRequest,
  ): Effect.Effect<
    AttachSecurityProfileResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError
  >;
  attachThingPrincipal(
    input: AttachThingPrincipalRequest,
  ): Effect.Effect<
    AttachThingPrincipalResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  cancelAuditMitigationActionsTask(
    input: CancelAuditMitigationActionsTaskRequest,
  ): Effect.Effect<
    CancelAuditMitigationActionsTaskResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  cancelAuditTask(
    input: CancelAuditTaskRequest,
  ): Effect.Effect<
    CancelAuditTaskResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  cancelCertificateTransfer(
    input: CancelCertificateTransferRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | TransferAlreadyCompletedException
    | UnauthorizedException
    | CommonAwsError
  >;
  cancelDetectMitigationActionsTask(
    input: CancelDetectMitigationActionsTaskRequest,
  ): Effect.Effect<
    CancelDetectMitigationActionsTaskResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  cancelJob(
    input: CancelJobRequest,
  ): Effect.Effect<
    CancelJobResponse,
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  cancelJobExecution(
    input: CancelJobExecutionRequest,
  ): Effect.Effect<
    {},
    | InvalidRequestException
    | InvalidStateTransitionException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError
  >;
  clearDefaultAuthorizer(
    input: ClearDefaultAuthorizerRequest,
  ): Effect.Effect<
    ClearDefaultAuthorizerResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  confirmTopicRuleDestination(
    input: ConfirmTopicRuleDestinationRequest,
  ): Effect.Effect<
    ConfirmTopicRuleDestinationResponse,
    | ConflictingResourceUpdateException
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  createAuditSuppression(
    input: CreateAuditSuppressionRequest,
  ): Effect.Effect<
    CreateAuditSuppressionResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError
  >;
  createAuthorizer(
    input: CreateAuthorizerRequest,
  ): Effect.Effect<
    CreateAuthorizerResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  createBillingGroup(
    input: CreateBillingGroupRequest,
  ): Effect.Effect<
    CreateBillingGroupResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError
  >;
  createCertificateFromCsr(
    input: CreateCertificateFromCsrRequest,
  ): Effect.Effect<
    CreateCertificateFromCsrResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  createCertificateProvider(
    input: CreateCertificateProviderRequest,
  ): Effect.Effect<
    CreateCertificateProviderResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  createCommand(
    input: CreateCommandRequest,
  ): Effect.Effect<
    CreateCommandResponse,
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createCustomMetric(
    input: CreateCustomMetricRequest,
  ): Effect.Effect<
    CreateCustomMetricResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError
  >;
  createDimension(
    input: CreateDimensionRequest,
  ): Effect.Effect<
    CreateDimensionResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError
  >;
  createDomainConfiguration(
    input: CreateDomainConfigurationRequest,
  ): Effect.Effect<
    CreateDomainConfigurationResponse,
    | CertificateValidationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  createDynamicThingGroup(
    input: CreateDynamicThingGroupRequest,
  ): Effect.Effect<
    CreateDynamicThingGroupResponse,
    | InternalFailureException
    | InvalidQueryException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createFleetMetric(
    input: CreateFleetMetricRequest,
  ): Effect.Effect<
    CreateFleetMetricResponse,
    | IndexNotReadyException
    | InternalFailureException
    | InvalidAggregationException
    | InvalidQueryException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  createJob(
    input: CreateJobRequest,
  ): Effect.Effect<
    CreateJobResponse,
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  createJobTemplate(
    input: CreateJobTemplateRequest,
  ): Effect.Effect<
    CreateJobTemplateResponse,
    | ConflictException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createKeysAndCertificate(
    input: CreateKeysAndCertificateRequest,
  ): Effect.Effect<
    CreateKeysAndCertificateResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  createMitigationAction(
    input: CreateMitigationActionRequest,
  ): Effect.Effect<
    CreateMitigationActionResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError
  >;
  createOTAUpdate(
    input: CreateOTAUpdateRequest,
  ): Effect.Effect<
    CreateOTAUpdateResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  createPackage(
    input: CreatePackageRequest,
  ): Effect.Effect<
    CreatePackageResponse,
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createPackageVersion(
    input: CreatePackageVersionRequest,
  ): Effect.Effect<
    CreatePackageVersionResponse,
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createPolicy(
    input: CreatePolicyRequest,
  ): Effect.Effect<
    CreatePolicyResponse,
    | InternalFailureException
    | InvalidRequestException
    | MalformedPolicyException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  createPolicyVersion(
    input: CreatePolicyVersionRequest,
  ): Effect.Effect<
    CreatePolicyVersionResponse,
    | InternalFailureException
    | InvalidRequestException
    | MalformedPolicyException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | VersionsLimitExceededException
    | CommonAwsError
  >;
  createProvisioningClaim(
    input: CreateProvisioningClaimRequest,
  ): Effect.Effect<
    CreateProvisioningClaimResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  createProvisioningTemplate(
    input: CreateProvisioningTemplateRequest,
  ): Effect.Effect<
    CreateProvisioningTemplateResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  createProvisioningTemplateVersion(
    input: CreateProvisioningTemplateVersionRequest,
  ): Effect.Effect<
    CreateProvisioningTemplateVersionResponse,
    | ConflictingResourceUpdateException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | VersionsLimitExceededException
    | CommonAwsError
  >;
  createRoleAlias(
    input: CreateRoleAliasRequest,
  ): Effect.Effect<
    CreateRoleAliasResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  createScheduledAudit(
    input: CreateScheduledAuditRequest,
  ): Effect.Effect<
    CreateScheduledAuditResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError
  >;
  createSecurityProfile(
    input: CreateSecurityProfileRequest,
  ): Effect.Effect<
    CreateSecurityProfileResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError
  >;
  createStream(
    input: CreateStreamRequest,
  ): Effect.Effect<
    CreateStreamResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  createThing(
    input: CreateThingRequest,
  ): Effect.Effect<
    CreateThingResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  createThingGroup(
    input: CreateThingGroupRequest,
  ): Effect.Effect<
    CreateThingGroupResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError
  >;
  createThingType(
    input: CreateThingTypeRequest,
  ): Effect.Effect<
    CreateThingTypeResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  createTopicRule(
    input: CreateTopicRuleRequest,
  ): Effect.Effect<
    {},
    | ConflictingResourceUpdateException
    | InternalException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | SqlParseException
    | CommonAwsError
  >;
  createTopicRuleDestination(
    input: CreateTopicRuleDestinationRequest,
  ): Effect.Effect<
    CreateTopicRuleDestinationResponse,
    | ConflictingResourceUpdateException
    | InternalException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteAccountAuditConfiguration(
    input: DeleteAccountAuditConfigurationRequest,
  ): Effect.Effect<
    DeleteAccountAuditConfigurationResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteAuditSuppression(
    input: DeleteAuditSuppressionRequest,
  ): Effect.Effect<
    DeleteAuditSuppressionResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteAuthorizer(
    input: DeleteAuthorizerRequest,
  ): Effect.Effect<
    DeleteAuthorizerResponse,
    | DeleteConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteBillingGroup(
    input: DeleteBillingGroupRequest,
  ): Effect.Effect<
    DeleteBillingGroupResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError
  >;
  deleteCACertificate(
    input: DeleteCACertificateRequest,
  ): Effect.Effect<
    DeleteCACertificateResponse,
    | CertificateStateException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteCertificate(
    input: DeleteCertificateRequest,
  ): Effect.Effect<
    {},
    | CertificateStateException
    | DeleteConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteCertificateProvider(
    input: DeleteCertificateProviderRequest,
  ): Effect.Effect<
    DeleteCertificateProviderResponse,
    | DeleteConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteCommand(
    input: DeleteCommandRequest,
  ): Effect.Effect<
    DeleteCommandResponse,
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteCommandExecution(
    input: DeleteCommandExecutionRequest,
  ): Effect.Effect<
    DeleteCommandExecutionResponse,
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteCustomMetric(
    input: DeleteCustomMetricRequest,
  ): Effect.Effect<
    DeleteCustomMetricResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteDimension(
    input: DeleteDimensionRequest,
  ): Effect.Effect<
    DeleteDimensionResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteDomainConfiguration(
    input: DeleteDomainConfigurationRequest,
  ): Effect.Effect<
    DeleteDomainConfigurationResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteDynamicThingGroup(
    input: DeleteDynamicThingGroupRequest,
  ): Effect.Effect<
    DeleteDynamicThingGroupResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError
  >;
  deleteFleetMetric(
    input: DeleteFleetMetricRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | VersionConflictException
    | CommonAwsError
  >;
  deleteJob(
    input: DeleteJobRequest,
  ): Effect.Effect<
    {},
    | InvalidRequestException
    | InvalidStateTransitionException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteJobExecution(
    input: DeleteJobExecutionRequest,
  ): Effect.Effect<
    {},
    | InvalidRequestException
    | InvalidStateTransitionException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteJobTemplate(
    input: DeleteJobTemplateRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteMitigationAction(
    input: DeleteMitigationActionRequest,
  ): Effect.Effect<
    DeleteMitigationActionResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteOTAUpdate(
    input: DeleteOTAUpdateRequest,
  ): Effect.Effect<
    DeleteOTAUpdateResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | VersionConflictException
    | CommonAwsError
  >;
  deletePackage(
    input: DeletePackageRequest,
  ): Effect.Effect<
    DeletePackageResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deletePackageVersion(
    input: DeletePackageVersionRequest,
  ): Effect.Effect<
    DeletePackageVersionResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deletePolicy(
    input: DeletePolicyRequest,
  ): Effect.Effect<
    {},
    | DeleteConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  deletePolicyVersion(
    input: DeletePolicyVersionRequest,
  ): Effect.Effect<
    {},
    | DeleteConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteProvisioningTemplate(
    input: DeleteProvisioningTemplateRequest,
  ): Effect.Effect<
    DeleteProvisioningTemplateResponse,
    | ConflictingResourceUpdateException
    | DeleteConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteProvisioningTemplateVersion(
    input: DeleteProvisioningTemplateVersionRequest,
  ): Effect.Effect<
    DeleteProvisioningTemplateVersionResponse,
    | ConflictingResourceUpdateException
    | DeleteConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteRegistrationCode(
    input: DeleteRegistrationCodeRequest,
  ): Effect.Effect<
    DeleteRegistrationCodeResponse,
    | InternalFailureException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteRoleAlias(
    input: DeleteRoleAliasRequest,
  ): Effect.Effect<
    DeleteRoleAliasResponse,
    | DeleteConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteScheduledAudit(
    input: DeleteScheduledAuditRequest,
  ): Effect.Effect<
    DeleteScheduledAuditResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteSecurityProfile(
    input: DeleteSecurityProfileRequest,
  ): Effect.Effect<
    DeleteSecurityProfileResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError
  >;
  deleteStream(
    input: DeleteStreamRequest,
  ): Effect.Effect<
    DeleteStreamResponse,
    | DeleteConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteThing(
    input: DeleteThingRequest,
  ): Effect.Effect<
    DeleteThingResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | VersionConflictException
    | CommonAwsError
  >;
  deleteThingGroup(
    input: DeleteThingGroupRequest,
  ): Effect.Effect<
    DeleteThingGroupResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError
  >;
  deleteThingType(
    input: DeleteThingTypeRequest,
  ): Effect.Effect<
    DeleteThingTypeResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteTopicRule(
    input: DeleteTopicRuleRequest,
  ): Effect.Effect<
    {},
    | ConflictingResourceUpdateException
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteTopicRuleDestination(
    input: DeleteTopicRuleDestinationRequest,
  ): Effect.Effect<
    DeleteTopicRuleDestinationResponse,
    | ConflictingResourceUpdateException
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteV2LoggingLevel(
    input: DeleteV2LoggingLevelRequest,
  ): Effect.Effect<
    {},
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deprecateThingType(
    input: DeprecateThingTypeRequest,
  ): Effect.Effect<
    DeprecateThingTypeResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeAccountAuditConfiguration(
    input: DescribeAccountAuditConfigurationRequest,
  ): Effect.Effect<
    DescribeAccountAuditConfigurationResponse,
    InternalFailureException | ThrottlingException | CommonAwsError
  >;
  describeAuditFinding(
    input: DescribeAuditFindingRequest,
  ): Effect.Effect<
    DescribeAuditFindingResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAuditMitigationActionsTask(
    input: DescribeAuditMitigationActionsTaskRequest,
  ): Effect.Effect<
    DescribeAuditMitigationActionsTaskResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAuditSuppression(
    input: DescribeAuditSuppressionRequest,
  ): Effect.Effect<
    DescribeAuditSuppressionResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAuditTask(
    input: DescribeAuditTaskRequest,
  ): Effect.Effect<
    DescribeAuditTaskResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAuthorizer(
    input: DescribeAuthorizerRequest,
  ): Effect.Effect<
    DescribeAuthorizerResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeBillingGroup(
    input: DescribeBillingGroupRequest,
  ): Effect.Effect<
    DescribeBillingGroupResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeCACertificate(
    input: DescribeCACertificateRequest,
  ): Effect.Effect<
    DescribeCACertificateResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeCertificate(
    input: DescribeCertificateRequest,
  ): Effect.Effect<
    DescribeCertificateResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeCertificateProvider(
    input: DescribeCertificateProviderRequest,
  ): Effect.Effect<
    DescribeCertificateProviderResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeCustomMetric(
    input: DescribeCustomMetricRequest,
  ): Effect.Effect<
    DescribeCustomMetricResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDefaultAuthorizer(
    input: DescribeDefaultAuthorizerRequest,
  ): Effect.Effect<
    DescribeDefaultAuthorizerResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeDetectMitigationActionsTask(
    input: DescribeDetectMitigationActionsTaskRequest,
  ): Effect.Effect<
    DescribeDetectMitigationActionsTaskResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDimension(
    input: DescribeDimensionRequest,
  ): Effect.Effect<
    DescribeDimensionResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeDomainConfiguration(
    input: DescribeDomainConfigurationRequest,
  ): Effect.Effect<
    DescribeDomainConfigurationResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeEndpoint(
    input: DescribeEndpointRequest,
  ): Effect.Effect<
    DescribeEndpointResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeEventConfigurations(
    input: DescribeEventConfigurationsRequest,
  ): Effect.Effect<
    DescribeEventConfigurationsResponse,
    InternalFailureException | ThrottlingException | CommonAwsError
  >;
  describeFleetMetric(
    input: DescribeFleetMetricRequest,
  ): Effect.Effect<
    DescribeFleetMetricResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeIndex(
    input: DescribeIndexRequest,
  ): Effect.Effect<
    DescribeIndexResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeJob(
    input: DescribeJobRequest,
  ): Effect.Effect<
    DescribeJobResponse,
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeJobExecution(
    input: DescribeJobExecutionRequest,
  ): Effect.Effect<
    DescribeJobExecutionResponse,
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  describeJobTemplate(
    input: DescribeJobTemplateRequest,
  ): Effect.Effect<
    DescribeJobTemplateResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeManagedJobTemplate(
    input: DescribeManagedJobTemplateRequest,
  ): Effect.Effect<
    DescribeManagedJobTemplateResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeMitigationAction(
    input: DescribeMitigationActionRequest,
  ): Effect.Effect<
    DescribeMitigationActionResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeProvisioningTemplate(
    input: DescribeProvisioningTemplateRequest,
  ): Effect.Effect<
    DescribeProvisioningTemplateResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeProvisioningTemplateVersion(
    input: DescribeProvisioningTemplateVersionRequest,
  ): Effect.Effect<
    DescribeProvisioningTemplateVersionResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeRoleAlias(
    input: DescribeRoleAliasRequest,
  ): Effect.Effect<
    DescribeRoleAliasResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeScheduledAudit(
    input: DescribeScheduledAuditRequest,
  ): Effect.Effect<
    DescribeScheduledAuditResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeSecurityProfile(
    input: DescribeSecurityProfileRequest,
  ): Effect.Effect<
    DescribeSecurityProfileResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeStream(
    input: DescribeStreamRequest,
  ): Effect.Effect<
    DescribeStreamResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeThing(
    input: DescribeThingRequest,
  ): Effect.Effect<
    DescribeThingResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeThingGroup(
    input: DescribeThingGroupRequest,
  ): Effect.Effect<
    DescribeThingGroupResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeThingRegistrationTask(
    input: DescribeThingRegistrationTaskRequest,
  ): Effect.Effect<
    DescribeThingRegistrationTaskResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeThingType(
    input: DescribeThingTypeRequest,
  ): Effect.Effect<
    DescribeThingTypeResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  detachPolicy(
    input: DetachPolicyRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  detachPrincipalPolicy(
    input: DetachPrincipalPolicyRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  detachSecurityProfile(
    input: DetachSecurityProfileRequest,
  ): Effect.Effect<
    DetachSecurityProfileResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  detachThingPrincipal(
    input: DetachThingPrincipalRequest,
  ): Effect.Effect<
    DetachThingPrincipalResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  disableTopicRule(
    input: DisableTopicRuleRequest,
  ): Effect.Effect<
    {},
    | ConflictingResourceUpdateException
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  disassociateSbomFromPackageVersion(
    input: DisassociateSbomFromPackageVersionRequest,
  ): Effect.Effect<
    DisassociateSbomFromPackageVersionResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  enableTopicRule(
    input: EnableTopicRuleRequest,
  ): Effect.Effect<
    {},
    | ConflictingResourceUpdateException
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  getBehaviorModelTrainingSummaries(
    input: GetBehaviorModelTrainingSummariesRequest,
  ): Effect.Effect<
    GetBehaviorModelTrainingSummariesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getBucketsAggregation(
    input: GetBucketsAggregationRequest,
  ): Effect.Effect<
    GetBucketsAggregationResponse,
    | IndexNotReadyException
    | InternalFailureException
    | InvalidAggregationException
    | InvalidQueryException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  getCardinality(
    input: GetCardinalityRequest,
  ): Effect.Effect<
    GetCardinalityResponse,
    | IndexNotReadyException
    | InternalFailureException
    | InvalidAggregationException
    | InvalidQueryException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  getCommand(
    input: GetCommandRequest,
  ): Effect.Effect<
    GetCommandResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getCommandExecution(
    input: GetCommandExecutionRequest,
  ): Effect.Effect<
    GetCommandExecutionResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getEffectivePolicies(
    input: GetEffectivePoliciesRequest,
  ): Effect.Effect<
    GetEffectivePoliciesResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  getIndexingConfiguration(
    input: GetIndexingConfigurationRequest,
  ): Effect.Effect<
    GetIndexingConfigurationResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  getJobDocument(
    input: GetJobDocumentRequest,
  ): Effect.Effect<
    GetJobDocumentResponse,
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  getLoggingOptions(
    input: GetLoggingOptionsRequest,
  ): Effect.Effect<
    GetLoggingOptionsResponse,
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getOTAUpdate(
    input: GetOTAUpdateRequest,
  ): Effect.Effect<
    GetOTAUpdateResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  getPackage(
    input: GetPackageRequest,
  ): Effect.Effect<
    GetPackageResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getPackageConfiguration(
    input: GetPackageConfigurationRequest,
  ): Effect.Effect<
    GetPackageConfigurationResponse,
    InternalServerException | ThrottlingException | CommonAwsError
  >;
  getPackageVersion(
    input: GetPackageVersionRequest,
  ): Effect.Effect<
    GetPackageVersionResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getPercentiles(
    input: GetPercentilesRequest,
  ): Effect.Effect<
    GetPercentilesResponse,
    | IndexNotReadyException
    | InternalFailureException
    | InvalidAggregationException
    | InvalidQueryException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  getPolicy(
    input: GetPolicyRequest,
  ): Effect.Effect<
    GetPolicyResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  getPolicyVersion(
    input: GetPolicyVersionRequest,
  ): Effect.Effect<
    GetPolicyVersionResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  getRegistrationCode(
    input: GetRegistrationCodeRequest,
  ): Effect.Effect<
    GetRegistrationCodeResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  getStatistics(
    input: GetStatisticsRequest,
  ): Effect.Effect<
    GetStatisticsResponse,
    | IndexNotReadyException
    | InternalFailureException
    | InvalidAggregationException
    | InvalidQueryException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  getThingConnectivityData(
    input: GetThingConnectivityDataRequest,
  ): Effect.Effect<
    GetThingConnectivityDataResponse,
    | IndexNotReadyException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  getTopicRule(
    input: GetTopicRuleRequest,
  ): Effect.Effect<
    GetTopicRuleResponse,
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  getTopicRuleDestination(
    input: GetTopicRuleDestinationRequest,
  ): Effect.Effect<
    GetTopicRuleDestinationResponse,
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  getV2LoggingOptions(
    input: GetV2LoggingOptionsRequest,
  ): Effect.Effect<
    GetV2LoggingOptionsResponse,
    | InternalException
    | NotConfiguredException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listActiveViolations(
    input: ListActiveViolationsRequest,
  ): Effect.Effect<
    ListActiveViolationsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listAttachedPolicies(
    input: ListAttachedPoliciesRequest,
  ): Effect.Effect<
    ListAttachedPoliciesResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listAuditFindings(
    input: ListAuditFindingsRequest,
  ): Effect.Effect<
    ListAuditFindingsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listAuditMitigationActionsExecutions(
    input: ListAuditMitigationActionsExecutionsRequest,
  ): Effect.Effect<
    ListAuditMitigationActionsExecutionsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listAuditMitigationActionsTasks(
    input: ListAuditMitigationActionsTasksRequest,
  ): Effect.Effect<
    ListAuditMitigationActionsTasksResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listAuditSuppressions(
    input: ListAuditSuppressionsRequest,
  ): Effect.Effect<
    ListAuditSuppressionsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listAuditTasks(
    input: ListAuditTasksRequest,
  ): Effect.Effect<
    ListAuditTasksResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listAuthorizers(
    input: ListAuthorizersRequest,
  ): Effect.Effect<
    ListAuthorizersResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listBillingGroups(
    input: ListBillingGroupsRequest,
  ): Effect.Effect<
    ListBillingGroupsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listCACertificates(
    input: ListCACertificatesRequest,
  ): Effect.Effect<
    ListCACertificatesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listCertificateProviders(
    input: ListCertificateProvidersRequest,
  ): Effect.Effect<
    ListCertificateProvidersResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listCertificates(
    input: ListCertificatesRequest,
  ): Effect.Effect<
    ListCertificatesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listCertificatesByCA(
    input: ListCertificatesByCARequest,
  ): Effect.Effect<
    ListCertificatesByCAResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listCommandExecutions(
    input: ListCommandExecutionsRequest,
  ): Effect.Effect<
    ListCommandExecutionsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCommands(
    input: ListCommandsRequest,
  ): Effect.Effect<
    ListCommandsResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listCustomMetrics(
    input: ListCustomMetricsRequest,
  ): Effect.Effect<
    ListCustomMetricsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listDetectMitigationActionsExecutions(
    input: ListDetectMitigationActionsExecutionsRequest,
  ): Effect.Effect<
    ListDetectMitigationActionsExecutionsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listDetectMitigationActionsTasks(
    input: ListDetectMitigationActionsTasksRequest,
  ): Effect.Effect<
    ListDetectMitigationActionsTasksResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listDimensions(
    input: ListDimensionsRequest,
  ): Effect.Effect<
    ListDimensionsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listDomainConfigurations(
    input: ListDomainConfigurationsRequest,
  ): Effect.Effect<
    ListDomainConfigurationsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listFleetMetrics(
    input: ListFleetMetricsRequest,
  ): Effect.Effect<
    ListFleetMetricsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listIndices(
    input: ListIndicesRequest,
  ): Effect.Effect<
    ListIndicesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listJobExecutionsForJob(
    input: ListJobExecutionsForJobRequest,
  ): Effect.Effect<
    ListJobExecutionsForJobResponse,
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listJobExecutionsForThing(
    input: ListJobExecutionsForThingRequest,
  ): Effect.Effect<
    ListJobExecutionsForThingResponse,
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listJobs(
    input: ListJobsRequest,
  ): Effect.Effect<
    ListJobsResponse,
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  listJobTemplates(
    input: ListJobTemplatesRequest,
  ): Effect.Effect<
    ListJobTemplatesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listManagedJobTemplates(
    input: ListManagedJobTemplatesRequest,
  ): Effect.Effect<
    ListManagedJobTemplatesResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listMetricValues(
    input: ListMetricValuesRequest,
  ): Effect.Effect<
    ListMetricValuesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listMitigationActions(
    input: ListMitigationActionsRequest,
  ): Effect.Effect<
    ListMitigationActionsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listOTAUpdates(
    input: ListOTAUpdatesRequest,
  ): Effect.Effect<
    ListOTAUpdatesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listOutgoingCertificates(
    input: ListOutgoingCertificatesRequest,
  ): Effect.Effect<
    ListOutgoingCertificatesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listPackages(
    input: ListPackagesRequest,
  ): Effect.Effect<
    ListPackagesResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPackageVersions(
    input: ListPackageVersionsRequest,
  ): Effect.Effect<
    ListPackageVersionsResponse,
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listPolicies(
    input: ListPoliciesRequest,
  ): Effect.Effect<
    ListPoliciesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listPolicyPrincipals(
    input: ListPolicyPrincipalsRequest,
  ): Effect.Effect<
    ListPolicyPrincipalsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listPolicyVersions(
    input: ListPolicyVersionsRequest,
  ): Effect.Effect<
    ListPolicyVersionsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listPrincipalPolicies(
    input: ListPrincipalPoliciesRequest,
  ): Effect.Effect<
    ListPrincipalPoliciesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listPrincipalThings(
    input: ListPrincipalThingsRequest,
  ): Effect.Effect<
    ListPrincipalThingsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listPrincipalThingsV2(
    input: ListPrincipalThingsV2Request,
  ): Effect.Effect<
    ListPrincipalThingsV2Response,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listProvisioningTemplates(
    input: ListProvisioningTemplatesRequest,
  ): Effect.Effect<
    ListProvisioningTemplatesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listProvisioningTemplateVersions(
    input: ListProvisioningTemplateVersionsRequest,
  ): Effect.Effect<
    ListProvisioningTemplateVersionsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listRelatedResourcesForAuditFinding(
    input: ListRelatedResourcesForAuditFindingRequest,
  ): Effect.Effect<
    ListRelatedResourcesForAuditFindingResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listRoleAliases(
    input: ListRoleAliasesRequest,
  ): Effect.Effect<
    ListRoleAliasesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listSbomValidationResults(
    input: ListSbomValidationResultsRequest,
  ): Effect.Effect<
    ListSbomValidationResultsResponse,
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  listScheduledAudits(
    input: ListScheduledAuditsRequest,
  ): Effect.Effect<
    ListScheduledAuditsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listSecurityProfiles(
    input: ListSecurityProfilesRequest,
  ): Effect.Effect<
    ListSecurityProfilesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listSecurityProfilesForTarget(
    input: ListSecurityProfilesForTargetRequest,
  ): Effect.Effect<
    ListSecurityProfilesForTargetResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listStreams(
    input: ListStreamsRequest,
  ): Effect.Effect<
    ListStreamsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listTargetsForPolicy(
    input: ListTargetsForPolicyRequest,
  ): Effect.Effect<
    ListTargetsForPolicyResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listTargetsForSecurityProfile(
    input: ListTargetsForSecurityProfileRequest,
  ): Effect.Effect<
    ListTargetsForSecurityProfileResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listThingGroups(
    input: ListThingGroupsRequest,
  ): Effect.Effect<
    ListThingGroupsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listThingGroupsForThing(
    input: ListThingGroupsForThingRequest,
  ): Effect.Effect<
    ListThingGroupsForThingResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listThingPrincipals(
    input: ListThingPrincipalsRequest,
  ): Effect.Effect<
    ListThingPrincipalsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listThingPrincipalsV2(
    input: ListThingPrincipalsV2Request,
  ): Effect.Effect<
    ListThingPrincipalsV2Response,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listThingRegistrationTaskReports(
    input: ListThingRegistrationTaskReportsRequest,
  ): Effect.Effect<
    ListThingRegistrationTaskReportsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listThingRegistrationTasks(
    input: ListThingRegistrationTasksRequest,
  ): Effect.Effect<
    ListThingRegistrationTasksResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listThings(
    input: ListThingsRequest,
  ): Effect.Effect<
    ListThingsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listThingsInBillingGroup(
    input: ListThingsInBillingGroupRequest,
  ): Effect.Effect<
    ListThingsInBillingGroupResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listThingsInThingGroup(
    input: ListThingsInThingGroupRequest,
  ): Effect.Effect<
    ListThingsInThingGroupResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listThingTypes(
    input: ListThingTypesRequest,
  ): Effect.Effect<
    ListThingTypesResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  listTopicRuleDestinations(
    input: ListTopicRuleDestinationsRequest,
  ): Effect.Effect<
    ListTopicRuleDestinationsResponse,
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  listTopicRules(
    input: ListTopicRulesRequest,
  ): Effect.Effect<
    ListTopicRulesResponse,
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listV2LoggingLevels(
    input: ListV2LoggingLevelsRequest,
  ): Effect.Effect<
    ListV2LoggingLevelsResponse,
    | InternalException
    | InvalidRequestException
    | NotConfiguredException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listViolationEvents(
    input: ListViolationEventsRequest,
  ): Effect.Effect<
    ListViolationEventsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  putVerificationStateOnViolation(
    input: PutVerificationStateOnViolationRequest,
  ): Effect.Effect<
    PutVerificationStateOnViolationResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  registerCACertificate(
    input: RegisterCACertificateRequest,
  ): Effect.Effect<
    RegisterCACertificateResponse,
    | CertificateValidationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | RegistrationCodeValidationException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  registerCertificate(
    input: RegisterCertificateRequest,
  ): Effect.Effect<
    RegisterCertificateResponse,
    | CertificateConflictException
    | CertificateStateException
    | CertificateValidationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  registerCertificateWithoutCA(
    input: RegisterCertificateWithoutCARequest,
  ): Effect.Effect<
    RegisterCertificateWithoutCAResponse,
    | CertificateStateException
    | CertificateValidationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  registerThing(
    input: RegisterThingRequest,
  ): Effect.Effect<
    RegisterThingResponse,
    | ConflictingResourceUpdateException
    | InternalFailureException
    | InvalidRequestException
    | ResourceRegistrationFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  rejectCertificateTransfer(
    input: RejectCertificateTransferRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | TransferAlreadyCompletedException
    | UnauthorizedException
    | CommonAwsError
  >;
  removeThingFromBillingGroup(
    input: RemoveThingFromBillingGroupRequest,
  ): Effect.Effect<
    RemoveThingFromBillingGroupResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  removeThingFromThingGroup(
    input: RemoveThingFromThingGroupRequest,
  ): Effect.Effect<
    RemoveThingFromThingGroupResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  replaceTopicRule(
    input: ReplaceTopicRuleRequest,
  ): Effect.Effect<
    {},
    | ConflictingResourceUpdateException
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | SqlParseException
    | UnauthorizedException
    | CommonAwsError
  >;
  searchIndex(
    input: SearchIndexRequest,
  ): Effect.Effect<
    SearchIndexResponse,
    | IndexNotReadyException
    | InternalFailureException
    | InvalidQueryException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  setDefaultAuthorizer(
    input: SetDefaultAuthorizerRequest,
  ): Effect.Effect<
    SetDefaultAuthorizerResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  setDefaultPolicyVersion(
    input: SetDefaultPolicyVersionRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  setLoggingOptions(
    input: SetLoggingOptionsRequest,
  ): Effect.Effect<
    {},
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  setV2LoggingLevel(
    input: SetV2LoggingLevelRequest,
  ): Effect.Effect<
    {},
    | InternalException
    | InvalidRequestException
    | LimitExceededException
    | NotConfiguredException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  setV2LoggingOptions(
    input: SetV2LoggingOptionsRequest,
  ): Effect.Effect<
    {},
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  startAuditMitigationActionsTask(
    input: StartAuditMitigationActionsTaskRequest,
  ): Effect.Effect<
    StartAuditMitigationActionsTaskResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | TaskAlreadyExistsException
    | ThrottlingException
    | CommonAwsError
  >;
  startDetectMitigationActionsTask(
    input: StartDetectMitigationActionsTaskRequest,
  ): Effect.Effect<
    StartDetectMitigationActionsTaskResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | TaskAlreadyExistsException
    | ThrottlingException
    | CommonAwsError
  >;
  startOnDemandAuditTask(
    input: StartOnDemandAuditTaskRequest,
  ): Effect.Effect<
    StartOnDemandAuditTaskResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  startThingRegistrationTask(
    input: StartThingRegistrationTaskRequest,
  ): Effect.Effect<
    StartThingRegistrationTaskResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  stopThingRegistrationTask(
    input: StopThingRegistrationTaskRequest,
  ): Effect.Effect<
    StopThingRegistrationTaskResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  testAuthorization(
    input: TestAuthorizationRequest,
  ): Effect.Effect<
    TestAuthorizationResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  testInvokeAuthorizer(
    input: TestInvokeAuthorizerRequest,
  ): Effect.Effect<
    TestInvokeAuthorizerResponse,
    | InternalFailureException
    | InvalidRequestException
    | InvalidResponseException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  transferCertificate(
    input: TransferCertificateRequest,
  ): Effect.Effect<
    TransferCertificateResponse,
    | CertificateStateException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | TransferConflictException
    | UnauthorizedException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateAccountAuditConfiguration(
    input: UpdateAccountAuditConfigurationRequest,
  ): Effect.Effect<
    UpdateAccountAuditConfigurationResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  updateAuditSuppression(
    input: UpdateAuditSuppressionRequest,
  ): Effect.Effect<
    UpdateAuditSuppressionResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateAuthorizer(
    input: UpdateAuthorizerRequest,
  ): Effect.Effect<
    UpdateAuthorizerResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateBillingGroup(
    input: UpdateBillingGroupRequest,
  ): Effect.Effect<
    UpdateBillingGroupResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError
  >;
  updateCACertificate(
    input: UpdateCACertificateRequest,
  ): Effect.Effect<
    {},
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateCertificate(
    input: UpdateCertificateRequest,
  ): Effect.Effect<
    {},
    | CertificateStateException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateCertificateProvider(
    input: UpdateCertificateProviderRequest,
  ): Effect.Effect<
    UpdateCertificateProviderResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateCommand(
    input: UpdateCommandRequest,
  ): Effect.Effect<
    UpdateCommandResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateCustomMetric(
    input: UpdateCustomMetricRequest,
  ): Effect.Effect<
    UpdateCustomMetricResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateDimension(
    input: UpdateDimensionRequest,
  ): Effect.Effect<
    UpdateDimensionResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateDomainConfiguration(
    input: UpdateDomainConfigurationRequest,
  ): Effect.Effect<
    UpdateDomainConfigurationResponse,
    | CertificateValidationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateDynamicThingGroup(
    input: UpdateDynamicThingGroupRequest,
  ): Effect.Effect<
    UpdateDynamicThingGroupResponse,
    | InternalFailureException
    | InvalidQueryException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError
  >;
  updateEventConfigurations(
    input: UpdateEventConfigurationsRequest,
  ): Effect.Effect<
    UpdateEventConfigurationsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  updateFleetMetric(
    input: UpdateFleetMetricRequest,
  ): Effect.Effect<
    {},
    | IndexNotReadyException
    | InternalFailureException
    | InvalidAggregationException
    | InvalidQueryException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | VersionConflictException
    | CommonAwsError
  >;
  updateIndexingConfiguration(
    input: UpdateIndexingConfigurationRequest,
  ): Effect.Effect<
    UpdateIndexingConfigurationResponse,
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateJob(
    input: UpdateJobRequest,
  ): Effect.Effect<
    {},
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError
  >;
  updateMitigationAction(
    input: UpdateMitigationActionRequest,
  ): Effect.Effect<
    UpdateMitigationActionResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updatePackage(
    input: UpdatePackageRequest,
  ): Effect.Effect<
    UpdatePackageResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updatePackageConfiguration(
    input: UpdatePackageConfigurationRequest,
  ): Effect.Effect<
    UpdatePackageConfigurationResponse,
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updatePackageVersion(
    input: UpdatePackageVersionRequest,
  ): Effect.Effect<
    UpdatePackageVersionResponse,
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateProvisioningTemplate(
    input: UpdateProvisioningTemplateRequest,
  ): Effect.Effect<
    UpdateProvisioningTemplateResponse,
    | ConflictingResourceUpdateException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateRoleAlias(
    input: UpdateRoleAliasRequest,
  ): Effect.Effect<
    UpdateRoleAliasResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateScheduledAudit(
    input: UpdateScheduledAuditRequest,
  ): Effect.Effect<
    UpdateScheduledAuditResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateSecurityProfile(
    input: UpdateSecurityProfileRequest,
  ): Effect.Effect<
    UpdateSecurityProfileResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError
  >;
  updateStream(
    input: UpdateStreamRequest,
  ): Effect.Effect<
    UpdateStreamResponse,
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateThing(
    input: UpdateThingRequest,
  ): Effect.Effect<
    UpdateThingResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | VersionConflictException
    | CommonAwsError
  >;
  updateThingGroup(
    input: UpdateThingGroupRequest,
  ): Effect.Effect<
    UpdateThingGroupResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError
  >;
  updateThingGroupsForThing(
    input: UpdateThingGroupsForThingRequest,
  ): Effect.Effect<
    UpdateThingGroupsForThingResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateThingType(
    input: UpdateThingTypeRequest,
  ): Effect.Effect<
    UpdateThingTypeResponse,
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateTopicRuleDestination(
    input: UpdateTopicRuleDestinationRequest,
  ): Effect.Effect<
    UpdateTopicRuleDestinationResponse,
    | ConflictingResourceUpdateException
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  validateSecurityProfileBehaviors(
    input: ValidateSecurityProfileBehaviorsRequest,
  ): Effect.Effect<
    ValidateSecurityProfileBehaviorsResponse,
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
}

export type Iot = AWSIotService;

export type AbortAction = "CANCEL";
export interface AbortConfig {
  criteriaList: Array<AbortCriteria>;
}
export interface AbortCriteria {
  failureType: JobExecutionFailureType;
  action: AbortAction;
  thresholdPercentage: number;
  minNumberOfExecutedThings: number;
}
export type AbortCriteriaList = Array<AbortCriteria>;
export type AbortThresholdPercentage = number;

export interface AcceptCertificateTransferRequest {
  certificateId: string;
  setAsActive?: boolean;
}
export type AcmCertificateArn = string;

export interface Action {
  dynamoDB?: DynamoDBAction;
  dynamoDBv2?: DynamoDBv2Action;
  lambda?: LambdaAction;
  sns?: SnsAction;
  sqs?: SqsAction;
  kinesis?: KinesisAction;
  republish?: RepublishAction;
  s3?: S3Action;
  firehose?: FirehoseAction;
  cloudwatchMetric?: CloudwatchMetricAction;
  cloudwatchAlarm?: CloudwatchAlarmAction;
  cloudwatchLogs?: CloudwatchLogsAction;
  elasticsearch?: ElasticsearchAction;
  salesforce?: SalesforceAction;
  iotAnalytics?: IotAnalyticsAction;
  iotEvents?: IotEventsAction;
  iotSiteWise?: IotSiteWiseAction;
  stepFunctions?: StepFunctionsAction;
  timestream?: TimestreamAction;
  http?: HttpAction;
  kafka?: KafkaAction;
  openSearch?: OpenSearchAction;
  location?: LocationAction;
}
export type ActionList = Array<Action>;
export type ActionType = "PUBLISH" | "SUBSCRIBE" | "RECEIVE" | "CONNECT";
export interface ActiveViolation {
  violationId?: string;
  thingName?: string;
  securityProfileName?: string;
  behavior?: Behavior;
  lastViolationValue?: MetricValue;
  violationEventAdditionalInfo?: ViolationEventAdditionalInfo;
  verificationState?: VerificationState;
  verificationStateDescription?: string;
  lastViolationTime?: Date | string;
  violationStartTime?: Date | string;
}
export type ActiveViolations = Array<ActiveViolation>;
export type AdditionalMetricsToRetainList = Array<string>;
export type AdditionalMetricsToRetainV2List = Array<MetricToRetain>;
export type AdditionalParameterMap = Record<string, string>;
export interface AddThingsToThingGroupParams {
  thingGroupNames: Array<string>;
  overrideDynamicGroups?: boolean;
}
export interface AddThingToBillingGroupRequest {
  billingGroupName?: string;
  billingGroupArn?: string;
  thingName?: string;
  thingArn?: string;
}
export interface AddThingToBillingGroupResponse {}
export interface AddThingToThingGroupRequest {
  thingGroupName?: string;
  thingGroupArn?: string;
  thingName?: string;
  thingArn?: string;
  overrideDynamicGroups?: boolean;
}
export interface AddThingToThingGroupResponse {}
export type AggregationField = string;

export interface AggregationType {
  name: AggregationTypeName;
  values?: Array<string>;
}
export type AggregationTypeName = "STATISTICS" | "PERCENTILES" | "CARDINALITY";
export type AggregationTypeValue = string;

export type AggregationTypeValues = Array<string>;
export type AlarmName = string;

export interface AlertTarget {
  alertTargetArn: string;
  roleArn: string;
}
export type AlertTargetArn = string;

export type AlertTargets = Record<AlertTargetType, AlertTarget>;
export type AlertTargetType = "SNS";
export type AllowAuthorizerOverride = boolean;

export type AllowAutoRegistration = boolean;

export interface Allowed {
  policies?: Array<Policy>;
}
export type ApplicationProtocol =
  | "SECURE_MQTT"
  | "MQTT_WSS"
  | "HTTPS"
  | "DEFAULT";
export type ApproximateSecondsBeforeTimedOut = number;

export type AscendingOrder = boolean;

export type AssetId = string;

export type AssetPropertyAlias = string;

export type AssetPropertyBooleanValue = string;

export type AssetPropertyDoubleValue = string;

export type AssetPropertyEntryId = string;

export type AssetPropertyId = string;

export type AssetPropertyIntegerValue = string;

export type AssetPropertyOffsetInNanos = string;

export type AssetPropertyQuality = string;

export type AssetPropertyStringValue = string;

export type AssetPropertyTimeInSeconds = string;

export interface AssetPropertyTimestamp {
  timeInSeconds: string;
  offsetInNanos?: string;
}
export interface AssetPropertyValue {
  value: AssetPropertyVariant;
  timestamp: AssetPropertyTimestamp;
  quality?: string;
}
export type AssetPropertyValueList = Array<AssetPropertyValue>;
export type AssetPropertyVariant =
  | { stringValue: string }
  | { integerValue: string }
  | { doubleValue: string }
  | { booleanValue: string };
export interface AssociateSbomWithPackageVersionRequest {
  packageName: string;
  versionName: string;
  sbom: Sbom;
  clientToken?: string;
}
export interface AssociateSbomWithPackageVersionResponse {
  packageName?: string;
  versionName?: string;
  sbom?: Sbom;
  sbomValidationStatus?: SbomValidationStatus;
}
export interface AssociateTargetsWithJobRequest {
  targets: Array<string>;
  jobId: string;
  comment?: string;
  namespaceId?: string;
}
export interface AssociateTargetsWithJobResponse {
  jobArn?: string;
  jobId?: string;
  description?: string;
}
export interface AttachPolicyRequest {
  policyName: string;
  target: string;
}
export interface AttachPrincipalPolicyRequest {
  policyName: string;
  principal: string;
}
export interface AttachSecurityProfileRequest {
  securityProfileName: string;
  securityProfileTargetArn: string;
}
export interface AttachSecurityProfileResponse {}
export interface AttachThingPrincipalRequest {
  thingName: string;
  principal: string;
  thingPrincipalType?: ThingPrincipalType;
}
export interface AttachThingPrincipalResponse {}
export type AttributeKey = string;

export type AttributeName = string;

export interface AttributePayload {
  attributes?: Record<string, string>;
  merge?: boolean;
}
export type Attributes = Record<string, string>;
export type AttributesMap = Record<string, string>;
export type AttributeValue = string;

export interface AuditCheckConfiguration {
  enabled?: boolean;
  configuration?: Record<ConfigName, string>;
}
export type AuditCheckConfigurations = Record<string, AuditCheckConfiguration>;
export interface AuditCheckDetails {
  checkRunStatus?: AuditCheckRunStatus;
  checkCompliant?: boolean;
  totalResourcesCount?: number;
  nonCompliantResourcesCount?: number;
  suppressedNonCompliantResourcesCount?: number;
  errorCode?: string;
  message?: string;
}
export type AuditCheckName = string;

export type AuditCheckRunStatus =
  | "IN_PROGRESS"
  | "WAITING_FOR_DATA_COLLECTION"
  | "CANCELED"
  | "COMPLETED_COMPLIANT"
  | "COMPLETED_NON_COMPLIANT"
  | "FAILED";
export type AuditCheckToActionsMapping = Record<string, Array<string>>;
export type AuditCheckToReasonCodeFilter = Record<string, Array<string>>;
export type AuditDescription = string;

export type AuditDetails = Record<string, AuditCheckDetails>;
export interface AuditFinding {
  findingId?: string;
  taskId?: string;
  checkName?: string;
  taskStartTime?: Date | string;
  findingTime?: Date | string;
  severity?: AuditFindingSeverity;
  nonCompliantResource?: NonCompliantResource;
  relatedResources?: Array<RelatedResource>;
  reasonForNonCompliance?: string;
  reasonForNonComplianceCode?: string;
  isSuppressed?: boolean;
}
export type AuditFindings = Array<AuditFinding>;
export type AuditFindingSeverity = "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
export type AuditFrequency = "DAILY" | "WEEKLY" | "BIWEEKLY" | "MONTHLY";
export interface AuditMitigationActionExecutionMetadata {
  taskId?: string;
  findingId?: string;
  actionName?: string;
  actionId?: string;
  status?: AuditMitigationActionsExecutionStatus;
  startTime?: Date | string;
  endTime?: Date | string;
  errorCode?: string;
  message?: string;
}
export type AuditMitigationActionExecutionMetadataList =
  Array<AuditMitigationActionExecutionMetadata>;
export type AuditMitigationActionsExecutionStatus =
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "CANCELED"
  | "SKIPPED"
  | "PENDING";
export interface AuditMitigationActionsTaskMetadata {
  taskId?: string;
  startTime?: Date | string;
  taskStatus?: AuditMitigationActionsTaskStatus;
}
export type AuditMitigationActionsTaskMetadataList =
  Array<AuditMitigationActionsTaskMetadata>;
export type AuditMitigationActionsTaskStatistics = Record<
  string,
  TaskStatisticsForAuditCheck
>;
export type AuditMitigationActionsTaskStatus =
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "CANCELED";
export interface AuditMitigationActionsTaskTarget {
  auditTaskId?: string;
  findingIds?: Array<string>;
  auditCheckToReasonCodeFilter?: Record<string, Array<string>>;
}
export interface AuditNotificationTarget {
  targetArn?: string;
  roleArn?: string;
  enabled?: boolean;
}
export type AuditNotificationTargetConfigurations = Record<
  AuditNotificationType,
  AuditNotificationTarget
>;
export type AuditNotificationType = "SNS";
export interface AuditSuppression {
  checkName: string;
  resourceIdentifier: ResourceIdentifier;
  expirationDate?: Date | string;
  suppressIndefinitely?: boolean;
  description?: string;
}
export type AuditSuppressionList = Array<AuditSuppression>;
export type AuditTaskId = string;

export interface AuditTaskMetadata {
  taskId?: string;
  taskStatus?: AuditTaskStatus;
  taskType?: AuditTaskType;
}
export type AuditTaskMetadataList = Array<AuditTaskMetadata>;
export type AuditTaskStatus =
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "CANCELED";
export type AuditTaskType = "ON_DEMAND_AUDIT_TASK" | "SCHEDULED_AUDIT_TASK";
export type AuthDecision = "ALLOWED" | "EXPLICIT_DENY" | "IMPLICIT_DENY";
export type AuthenticationType =
  | "CUSTOM_AUTH_X509"
  | "CUSTOM_AUTH"
  | "AWS_X509"
  | "AWS_SIGV4"
  | "DEFAULT";
export interface AuthInfo {
  actionType?: ActionType;
  resources: Array<string>;
}
export type AuthInfos = Array<AuthInfo>;
export type AuthorizerArn = string;

export interface AuthorizerConfig {
  defaultAuthorizerName?: string;
  allowAuthorizerOverride?: boolean;
}
export interface AuthorizerDescription {
  authorizerName?: string;
  authorizerArn?: string;
  authorizerFunctionArn?: string;
  tokenKeyName?: string;
  tokenSigningPublicKeys?: Record<string, string>;
  status?: AuthorizerStatus;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
  signingDisabled?: boolean;
  enableCachingForHttp?: boolean;
}
export type AuthorizerFunctionArn = string;

export type AuthorizerName = string;

export type Authorizers = Array<AuthorizerSummary>;
export type AuthorizerStatus = "ACTIVE" | "INACTIVE";
export interface AuthorizerSummary {
  authorizerName?: string;
  authorizerArn?: string;
}
export interface AuthResult {
  authInfo?: AuthInfo;
  allowed?: Allowed;
  denied?: Denied;
  authDecision?: AuthDecision;
  missingContextValues?: Array<string>;
}
export type AuthResults = Array<AuthResult>;
export type AutoRegistrationStatus = "ENABLE" | "DISABLE";
export type Average = number;

export type AwsAccountId = string;

export type AwsArn = string;

export type AwsIotJobArn = string;

export type AwsIotJobId = string;

export type AwsIotSqlVersion = string;

export interface AwsJobAbortConfig {
  abortCriteriaList: Array<AwsJobAbortCriteria>;
}
export interface AwsJobAbortCriteria {
  failureType: AwsJobAbortCriteriaFailureType;
  action: AwsJobAbortCriteriaAbortAction;
  thresholdPercentage: number;
  minNumberOfExecutedThings: number;
}
export type AwsJobAbortCriteriaAbortAction = "CANCEL";
export type AwsJobAbortCriteriaAbortThresholdPercentage = number;

export type AwsJobAbortCriteriaFailureType =
  | "FAILED"
  | "REJECTED"
  | "TIMED_OUT"
  | "ALL";
export type AwsJobAbortCriteriaList = Array<AwsJobAbortCriteria>;
export type AwsJobAbortCriteriaMinimumNumberOfExecutedThings = number;

export interface AwsJobExecutionsRolloutConfig {
  maximumPerMinute?: number;
  exponentialRate?: AwsJobExponentialRolloutRate;
}
export interface AwsJobExponentialRolloutRate {
  baseRatePerMinute: number;
  incrementFactor: number;
  rateIncreaseCriteria: AwsJobRateIncreaseCriteria;
}
export interface AwsJobPresignedUrlConfig {
  expiresInSec?: number;
}
export interface AwsJobRateIncreaseCriteria {
  numberOfNotifiedThings?: number;
  numberOfSucceededThings?: number;
}
export type AwsJobRateIncreaseCriteriaNumberOfThings = number;

export type AwsJobRolloutIncrementFactor = number;

export type AwsJobRolloutRatePerMinute = number;

export interface AwsJobTimeoutConfig {
  inProgressTimeoutInMinutes?: number;
}
export type AwsJobTimeoutInProgressTimeoutInMinutes = number;

export type BatchMode = boolean;

export type BeforeSubstitutionFlag = boolean;

export interface Behavior {
  name: string;
  metric?: string;
  metricDimension?: MetricDimension;
  criteria?: BehaviorCriteria;
  suppressAlerts?: boolean;
  exportMetric?: boolean;
}
export interface BehaviorCriteria {
  comparisonOperator?: ComparisonOperator;
  value?: MetricValue;
  durationSeconds?: number;
  consecutiveDatapointsToAlarm?: number;
  consecutiveDatapointsToClear?: number;
  statisticalThreshold?: StatisticalThreshold;
  mlDetectionConfig?: MachineLearningDetectionConfig;
}
export type BehaviorCriteriaType =
  | "STATIC"
  | "STATISTICAL"
  | "MACHINE_LEARNING";
export type BehaviorMetric = string;

export type BehaviorModelTrainingSummaries =
  Array<BehaviorModelTrainingSummary>;
export interface BehaviorModelTrainingSummary {
  securityProfileName?: string;
  behaviorName?: string;
  trainingDataCollectionStartDate?: Date | string;
  modelStatus?: ModelStatus;
  datapointsCollectionPercentage?: number;
  lastModelRefreshDate?: Date | string;
}
export type BehaviorName = string;

export type Behaviors = Array<Behavior>;
export type BillingGroupArn = string;

export type BillingGroupDescription = string;

export type BillingGroupId = string;

export interface BillingGroupMetadata {
  creationDate?: Date | string;
}
export type BillingGroupName = string;

export type BillingGroupNameAndArnList = Array<GroupNameAndArn>;
export interface BillingGroupProperties {
  billingGroupDescription?: string;
}
export type BinaryCommandExecutionResult = Uint8Array | string;

export type BinaryParameterValue = Uint8Array | string;

export type IotBoolean = boolean;

export type Boolean2 = boolean;

export type BooleanCommandExecutionResult = boolean;

export type BooleanKey = boolean;

export type BooleanParameterValue = boolean;

export type BooleanWrapperObject = boolean;

export interface Bucket {
  keyValue?: string;
  count?: number;
}
export type BucketKeyValue = string;

export type BucketName = string;

export type Buckets = Array<Bucket>;
export interface BucketsAggregationType {
  termsAggregation?: TermsAggregation;
}
export interface CACertificate {
  certificateArn?: string;
  certificateId?: string;
  status?: CACertificateStatus;
  creationDate?: Date | string;
}
export interface CACertificateDescription {
  certificateArn?: string;
  certificateId?: string;
  status?: CACertificateStatus;
  certificatePem?: string;
  ownedBy?: string;
  creationDate?: Date | string;
  autoRegistrationStatus?: AutoRegistrationStatus;
  lastModifiedDate?: Date | string;
  customerVersion?: number;
  generationId?: string;
  validity?: CertificateValidity;
  certificateMode?: CertificateMode;
}
export type CACertificates = Array<CACertificate>;
export type CACertificateStatus = "ACTIVE" | "INACTIVE";
export type CACertificateUpdateAction = "DEACTIVATE";
export interface CancelAuditMitigationActionsTaskRequest {
  taskId: string;
}
export interface CancelAuditMitigationActionsTaskResponse {}
export interface CancelAuditTaskRequest {
  taskId: string;
}
export interface CancelAuditTaskResponse {}
export interface CancelCertificateTransferRequest {
  certificateId: string;
}
export interface CancelDetectMitigationActionsTaskRequest {
  taskId: string;
}
export interface CancelDetectMitigationActionsTaskResponse {}
export type CanceledChecksCount = number;

export type CanceledFindingsCount = number;

export type CanceledThings = number;

export interface CancelJobExecutionRequest {
  jobId: string;
  thingName: string;
  force?: boolean;
  expectedVersion?: number;
  statusDetails?: Record<string, string>;
}
export interface CancelJobRequest {
  jobId: string;
  reasonCode?: string;
  comment?: string;
  force?: boolean;
}
export interface CancelJobResponse {
  jobArn?: string;
  jobId?: string;
  description?: string;
}
export type CannedAccessControlList =
  | "Private"
  | "PublicRead"
  | "PublicReadWrite"
  | "AwsExecRead"
  | "AuthenticatedRead"
  | "BucketOwnerRead"
  | "BucketOwnerFullControl"
  | "LogDeliveryWrite";
export interface Certificate {
  certificateArn?: string;
  certificateId?: string;
  status?: CertificateStatus;
  certificateMode?: CertificateMode;
  creationDate?: Date | string;
}
export type CertificateArn = string;

export declare class CertificateConflictException extends EffectData.TaggedError(
  "CertificateConflictException",
)<{
  readonly message?: string;
}> {}
export interface CertificateDescription {
  certificateArn?: string;
  certificateId?: string;
  caCertificateId?: string;
  status?: CertificateStatus;
  certificatePem?: string;
  ownedBy?: string;
  previousOwnedBy?: string;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
  customerVersion?: number;
  transferData?: TransferData;
  generationId?: string;
  validity?: CertificateValidity;
  certificateMode?: CertificateMode;
}
export type CertificateId = string;

export type CertificateMode = "DEFAULT" | "SNI_ONLY";
export type CertificateName = string;

export type CertificatePathOnDevice = string;

export type CertificatePem = string;

export type CertificateProviderAccountDefaultForOperations =
  Array<CertificateProviderOperation>;
export type CertificateProviderArn = string;

export type CertificateProviderFunctionArn = string;

export type CertificateProviderName = string;

export type CertificateProviderOperation = "CreateCertificateFromCsr";
export type CertificateProviders = Array<CertificateProviderSummary>;
export interface CertificateProviderSummary {
  certificateProviderName?: string;
  certificateProviderArn?: string;
}
export type Certificates = Array<Certificate>;
export type CertificateSigningRequest = string;

export declare class CertificateStateException extends EffectData.TaggedError(
  "CertificateStateException",
)<{
  readonly message?: string;
}> {}
export type CertificateStatus =
  | "ACTIVE"
  | "INACTIVE"
  | "REVOKED"
  | "PENDING_TRANSFER"
  | "REGISTER_INACTIVE"
  | "PENDING_ACTIVATION";
export declare class CertificateValidationException extends EffectData.TaggedError(
  "CertificateValidationException",
)<{
  readonly message?: string;
}> {}
export interface CertificateValidity {
  notBefore?: Date | string;
  notAfter?: Date | string;
}
export type ChannelName = string;

export type CheckCompliant = boolean;

export type CheckCustomConfiguration = Record<ConfigName, string>;
export type Cidr = string;

export type Cidrs = Array<string>;
export interface ClearDefaultAuthorizerRequest {}
export interface ClearDefaultAuthorizerResponse {}
export type ClientCertificateCallbackArn = string;

export interface ClientCertificateConfig {
  clientCertificateCallbackArn?: string;
}
export type ClientId = string;

export type ClientProperties = Record<string, string>;
export type ClientRequestToken = string;

export type ClientToken = string;

export interface CloudwatchAlarmAction {
  roleArn: string;
  alarmName: string;
  stateReason: string;
  stateValue: string;
}
export interface CloudwatchLogsAction {
  roleArn: string;
  logGroupName: string;
  batchMode?: boolean;
}
export interface CloudwatchMetricAction {
  roleArn: string;
  metricNamespace: string;
  metricName: string;
  metricValue: string;
  metricUnit: string;
  metricTimestamp?: string;
}
export type Code = string;

export interface CodeSigning {
  awsSignerJobId?: string;
  startSigningJobParameter?: StartSigningJobParameter;
  customCodeSigning?: CustomCodeSigning;
}
export interface CodeSigningCertificateChain {
  certificateName?: string;
  inlineDocument?: string;
}
export interface CodeSigningSignature {
  inlineDocument?: Uint8Array | string;
}
export type CognitoIdentityPoolId = string;

export type CommandArn = string;

export type CommandDescription = string;

export type CommandExecutionId = string;

export type CommandExecutionParameterMap = Record<
  string,
  CommandParameterValue
>;
export interface CommandExecutionResult {
  S?: string;
  B?: boolean;
  BIN?: Uint8Array | string;
}
export type CommandExecutionResultMap = Record<string, CommandExecutionResult>;
export type CommandExecutionResultName = string;

export type CommandExecutionStatus =
  | "CREATED"
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "FAILED"
  | "REJECTED"
  | "TIMED_OUT";
export interface CommandExecutionSummary {
  commandArn?: string;
  executionId?: string;
  targetArn?: string;
  status?: CommandExecutionStatus;
  createdAt?: Date | string;
  startedAt?: Date | string;
  completedAt?: Date | string;
}
export type CommandExecutionSummaryList = Array<CommandExecutionSummary>;
export type CommandExecutionTimeoutInSeconds = number;

export type CommandId = string;

export type CommandMaxResults = number;

export type CommandNamespace = "AWSIoT" | "AWSIoTFleetWise";
export interface CommandParameter {
  name: string;
  value?: CommandParameterValue;
  defaultValue?: CommandParameterValue;
  description?: string;
}
export type CommandParameterDescription = string;

export type CommandParameterList = Array<CommandParameter>;
export type CommandParameterName = string;

export interface CommandParameterValue {
  S?: string;
  B?: boolean;
  I?: number;
  L?: number;
  D?: number;
  BIN?: Uint8Array | string;
  UL?: string;
}
export interface CommandPayload {
  content?: Uint8Array | string;
  contentType?: string;
}
export type CommandPayloadBlob = Uint8Array | string;

export interface CommandSummary {
  commandArn?: string;
  commandId?: string;
  displayName?: string;
  deprecated?: boolean;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  pendingDeletion?: boolean;
}
export type CommandSummaryList = Array<CommandSummary>;
export type Comment = string;

export type ComparisonOperator =
  | "LESS_THAN"
  | "LESS_THAN_EQUALS"
  | "GREATER_THAN"
  | "GREATER_THAN_EQUALS"
  | "IN_CIDR_SET"
  | "NOT_IN_CIDR_SET"
  | "IN_PORT_SET"
  | "NOT_IN_PORT_SET"
  | "IN_SET"
  | "NOT_IN_SET";
export type CompliantChecksCount = number;

export type ConfidenceLevel = "LOW" | "MEDIUM" | "HIGH";
export type ConfigName =
  | "CERT_AGE_THRESHOLD_IN_DAYS"
  | "CERT_EXPIRATION_THRESHOLD_IN_DAYS";
export interface Configuration {
  Enabled?: boolean;
}
export type ConfigValue = string;

export type ConfirmationToken = string;

export interface ConfirmTopicRuleDestinationRequest {
  confirmationToken: string;
}
export interface ConfirmTopicRuleDestinationResponse {}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
  readonly resourceId?: string;
}> {}
export declare class ConflictingResourceUpdateException extends EffectData.TaggedError(
  "ConflictingResourceUpdateException",
)<{
  readonly message?: string;
}> {}
export type ConnectionAttributeName = string;

export type ConnectivityApiThingName = string;

export type ConnectivityTimestamp = number;

export type ConsecutiveDatapointsToAlarm = number;

export type ConsecutiveDatapointsToClear = number;

export type ContentType = string;

export type CorrelationData = string;

export type Count = number;

export interface CreateAuditSuppressionRequest {
  checkName: string;
  resourceIdentifier: ResourceIdentifier;
  expirationDate?: Date | string;
  suppressIndefinitely?: boolean;
  description?: string;
  clientRequestToken: string;
}
export interface CreateAuditSuppressionResponse {}
export interface CreateAuthorizerRequest {
  authorizerName: string;
  authorizerFunctionArn: string;
  tokenKeyName?: string;
  tokenSigningPublicKeys?: Record<string, string>;
  status?: AuthorizerStatus;
  tags?: Array<Tag>;
  signingDisabled?: boolean;
  enableCachingForHttp?: boolean;
}
export interface CreateAuthorizerResponse {
  authorizerName?: string;
  authorizerArn?: string;
}
export interface CreateBillingGroupRequest {
  billingGroupName: string;
  billingGroupProperties?: BillingGroupProperties;
  tags?: Array<Tag>;
}
export interface CreateBillingGroupResponse {
  billingGroupName?: string;
  billingGroupArn?: string;
  billingGroupId?: string;
}
export interface CreateCertificateFromCsrRequest {
  certificateSigningRequest: string;
  setAsActive?: boolean;
}
export interface CreateCertificateFromCsrResponse {
  certificateArn?: string;
  certificateId?: string;
  certificatePem?: string;
}
export interface CreateCertificateProviderRequest {
  certificateProviderName: string;
  lambdaFunctionArn: string;
  accountDefaultForOperations: Array<CertificateProviderOperation>;
  clientToken?: string;
  tags?: Array<Tag>;
}
export interface CreateCertificateProviderResponse {
  certificateProviderName?: string;
  certificateProviderArn?: string;
}
export interface CreateCommandRequest {
  commandId: string;
  namespace?: CommandNamespace;
  displayName?: string;
  description?: string;
  payload?: CommandPayload;
  mandatoryParameters?: Array<CommandParameter>;
  roleArn?: string;
  tags?: Array<Tag>;
}
export interface CreateCommandResponse {
  commandId?: string;
  commandArn?: string;
}
export interface CreateCustomMetricRequest {
  metricName: string;
  displayName?: string;
  metricType: CustomMetricType;
  tags?: Array<Tag>;
  clientRequestToken: string;
}
export interface CreateCustomMetricResponse {
  metricName?: string;
  metricArn?: string;
}
export type CreatedAtDate = Date | string;

export interface CreateDimensionRequest {
  name: string;
  type: DimensionType;
  stringValues: Array<string>;
  tags?: Array<Tag>;
  clientRequestToken: string;
}
export interface CreateDimensionResponse {
  name?: string;
  arn?: string;
}
export interface CreateDomainConfigurationRequest {
  domainConfigurationName: string;
  domainName?: string;
  serverCertificateArns?: Array<string>;
  validationCertificateArn?: string;
  authorizerConfig?: AuthorizerConfig;
  serviceType?: ServiceType;
  tags?: Array<Tag>;
  tlsConfig?: TlsConfig;
  serverCertificateConfig?: ServerCertificateConfig;
  authenticationType?: AuthenticationType;
  applicationProtocol?: ApplicationProtocol;
  clientCertificateConfig?: ClientCertificateConfig;
}
export interface CreateDomainConfigurationResponse {
  domainConfigurationName?: string;
  domainConfigurationArn?: string;
}
export interface CreateDynamicThingGroupRequest {
  thingGroupName: string;
  thingGroupProperties?: ThingGroupProperties;
  indexName?: string;
  queryString: string;
  queryVersion?: string;
  tags?: Array<Tag>;
}
export interface CreateDynamicThingGroupResponse {
  thingGroupName?: string;
  thingGroupArn?: string;
  thingGroupId?: string;
  indexName?: string;
  queryString?: string;
  queryVersion?: string;
}
export interface CreateFleetMetricRequest {
  metricName: string;
  queryString: string;
  aggregationType: AggregationType;
  period: number;
  aggregationField: string;
  description?: string;
  queryVersion?: string;
  indexName?: string;
  unit?: FleetMetricUnit;
  tags?: Array<Tag>;
}
export interface CreateFleetMetricResponse {
  metricName?: string;
  metricArn?: string;
}
export interface CreateJobRequest {
  jobId: string;
  targets: Array<string>;
  documentSource?: string;
  document?: string;
  description?: string;
  presignedUrlConfig?: PresignedUrlConfig;
  targetSelection?: TargetSelection;
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
  abortConfig?: AbortConfig;
  timeoutConfig?: TimeoutConfig;
  tags?: Array<Tag>;
  namespaceId?: string;
  jobTemplateArn?: string;
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
  documentParameters?: Record<string, string>;
  schedulingConfig?: SchedulingConfig;
  destinationPackageVersions?: Array<string>;
}
export interface CreateJobResponse {
  jobArn?: string;
  jobId?: string;
  description?: string;
}
export interface CreateJobTemplateRequest {
  jobTemplateId: string;
  jobArn?: string;
  documentSource?: string;
  document?: string;
  description: string;
  presignedUrlConfig?: PresignedUrlConfig;
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
  abortConfig?: AbortConfig;
  timeoutConfig?: TimeoutConfig;
  tags?: Array<Tag>;
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
  maintenanceWindows?: Array<MaintenanceWindow>;
  destinationPackageVersions?: Array<string>;
}
export interface CreateJobTemplateResponse {
  jobTemplateArn?: string;
  jobTemplateId?: string;
}
export interface CreateKeysAndCertificateRequest {
  setAsActive?: boolean;
}
export interface CreateKeysAndCertificateResponse {
  certificateArn?: string;
  certificateId?: string;
  certificatePem?: string;
  keyPair?: KeyPair;
}
export interface CreateMitigationActionRequest {
  actionName: string;
  roleArn: string;
  actionParams: MitigationActionParams;
  tags?: Array<Tag>;
}
export interface CreateMitigationActionResponse {
  actionArn?: string;
  actionId?: string;
}
export interface CreateOTAUpdateRequest {
  otaUpdateId: string;
  description?: string;
  targets: Array<string>;
  protocols?: Array<Protocol>;
  targetSelection?: TargetSelection;
  awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;
  awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;
  awsJobAbortConfig?: AwsJobAbortConfig;
  awsJobTimeoutConfig?: AwsJobTimeoutConfig;
  files: Array<OTAUpdateFile>;
  roleArn: string;
  additionalParameters?: Record<string, string>;
  tags?: Array<Tag>;
}
export interface CreateOTAUpdateResponse {
  otaUpdateId?: string;
  awsIotJobId?: string;
  otaUpdateArn?: string;
  awsIotJobArn?: string;
  otaUpdateStatus?: OTAUpdateStatus;
}
export interface CreatePackageRequest {
  packageName: string;
  description?: string;
  tags?: Record<string, string>;
  clientToken?: string;
}
export interface CreatePackageResponse {
  packageName?: string;
  packageArn?: string;
  description?: string;
}
export interface CreatePackageVersionRequest {
  packageName: string;
  versionName: string;
  description?: string;
  attributes?: Record<string, string>;
  artifact?: PackageVersionArtifact;
  recipe?: string;
  tags?: Record<string, string>;
  clientToken?: string;
}
export interface CreatePackageVersionResponse {
  packageVersionArn?: string;
  packageName?: string;
  versionName?: string;
  description?: string;
  attributes?: Record<string, string>;
  status?: PackageVersionStatus;
  errorReason?: string;
}
export interface CreatePolicyRequest {
  policyName: string;
  policyDocument: string;
  tags?: Array<Tag>;
}
export interface CreatePolicyResponse {
  policyName?: string;
  policyArn?: string;
  policyDocument?: string;
  policyVersionId?: string;
}
export interface CreatePolicyVersionRequest {
  policyName: string;
  policyDocument: string;
  setAsDefault?: boolean;
}
export interface CreatePolicyVersionResponse {
  policyArn?: string;
  policyDocument?: string;
  policyVersionId?: string;
  isDefaultVersion?: boolean;
}
export interface CreateProvisioningClaimRequest {
  templateName: string;
}
export interface CreateProvisioningClaimResponse {
  certificateId?: string;
  certificatePem?: string;
  keyPair?: KeyPair;
  expiration?: Date | string;
}
export interface CreateProvisioningTemplateRequest {
  templateName: string;
  description?: string;
  templateBody: string;
  enabled?: boolean;
  provisioningRoleArn: string;
  preProvisioningHook?: ProvisioningHook;
  tags?: Array<Tag>;
  type?: TemplateType;
}
export interface CreateProvisioningTemplateResponse {
  templateArn?: string;
  templateName?: string;
  defaultVersionId?: number;
}
export interface CreateProvisioningTemplateVersionRequest {
  templateName: string;
  templateBody: string;
  setAsDefault?: boolean;
}
export interface CreateProvisioningTemplateVersionResponse {
  templateArn?: string;
  templateName?: string;
  versionId?: number;
  isDefaultVersion?: boolean;
}
export interface CreateRoleAliasRequest {
  roleAlias: string;
  roleArn: string;
  credentialDurationSeconds?: number;
  tags?: Array<Tag>;
}
export interface CreateRoleAliasResponse {
  roleAlias?: string;
  roleAliasArn?: string;
}
export interface CreateScheduledAuditRequest {
  frequency: AuditFrequency;
  dayOfMonth?: string;
  dayOfWeek?: DayOfWeek;
  targetCheckNames: Array<string>;
  scheduledAuditName: string;
  tags?: Array<Tag>;
}
export interface CreateScheduledAuditResponse {
  scheduledAuditArn?: string;
}
export interface CreateSecurityProfileRequest {
  securityProfileName: string;
  securityProfileDescription?: string;
  behaviors?: Array<Behavior>;
  alertTargets?: Record<AlertTargetType, AlertTarget>;
  additionalMetricsToRetain?: Array<string>;
  additionalMetricsToRetainV2?: Array<MetricToRetain>;
  tags?: Array<Tag>;
  metricsExportConfig?: MetricsExportConfig;
}
export interface CreateSecurityProfileResponse {
  securityProfileName?: string;
  securityProfileArn?: string;
}
export interface CreateStreamRequest {
  streamId: string;
  description?: string;
  files: Array<StreamFile>;
  roleArn: string;
  tags?: Array<Tag>;
}
export interface CreateStreamResponse {
  streamId?: string;
  streamArn?: string;
  description?: string;
  streamVersion?: number;
}
export interface CreateThingGroupRequest {
  thingGroupName: string;
  parentGroupName?: string;
  thingGroupProperties?: ThingGroupProperties;
  tags?: Array<Tag>;
}
export interface CreateThingGroupResponse {
  thingGroupName?: string;
  thingGroupArn?: string;
  thingGroupId?: string;
}
export interface CreateThingRequest {
  thingName: string;
  thingTypeName?: string;
  attributePayload?: AttributePayload;
  billingGroupName?: string;
}
export interface CreateThingResponse {
  thingName?: string;
  thingArn?: string;
  thingId?: string;
}
export interface CreateThingTypeRequest {
  thingTypeName: string;
  thingTypeProperties?: ThingTypeProperties;
  tags?: Array<Tag>;
}
export interface CreateThingTypeResponse {
  thingTypeName?: string;
  thingTypeArn?: string;
  thingTypeId?: string;
}
export interface CreateTopicRuleDestinationRequest {
  destinationConfiguration: TopicRuleDestinationConfiguration;
}
export interface CreateTopicRuleDestinationResponse {
  topicRuleDestination?: TopicRuleDestination;
}
export interface CreateTopicRuleRequest {
  ruleName: string;
  topicRulePayload: TopicRulePayload;
  tags?: string;
}
export type CreationDate = Date | string;

export type CredentialDurationSeconds = number;

export type CronExpression = string;

export interface CustomCodeSigning {
  signature?: CodeSigningSignature;
  certificateChain?: CodeSigningCertificateChain;
  hashAlgorithm?: string;
  signatureAlgorithm?: string;
}
export type CustomerVersion = number;

export type CustomMetricArn = string;

export type CustomMetricDisplayName = string;

export type CustomMetricType =
  | "STRING_LIST"
  | "IP_ADDRESS_LIST"
  | "NUMBER_LIST"
  | "NUMBER";
export type DataCollectionPercentage = number;

export type DateType = Date | string;

export type DayOfMonth = string;

export type DayOfWeek = "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT";
export interface DeleteAccountAuditConfigurationRequest {
  deleteScheduledAudits?: boolean;
}
export interface DeleteAccountAuditConfigurationResponse {}
export type DeleteAdditionalMetricsToRetain = boolean;

export type DeleteAlertTargets = boolean;

export interface DeleteAuditSuppressionRequest {
  checkName: string;
  resourceIdentifier: ResourceIdentifier;
}
export interface DeleteAuditSuppressionResponse {}
export interface DeleteAuthorizerRequest {
  authorizerName: string;
}
export interface DeleteAuthorizerResponse {}
export type DeleteBehaviors = boolean;

export interface DeleteBillingGroupRequest {
  billingGroupName: string;
  expectedVersion?: number;
}
export interface DeleteBillingGroupResponse {}
export interface DeleteCACertificateRequest {
  certificateId: string;
}
export interface DeleteCACertificateResponse {}
export interface DeleteCertificateProviderRequest {
  certificateProviderName: string;
}
export interface DeleteCertificateProviderResponse {}
export interface DeleteCertificateRequest {
  certificateId: string;
  forceDelete?: boolean;
}
export interface DeleteCommandExecutionRequest {
  executionId: string;
  targetArn: string;
}
export interface DeleteCommandExecutionResponse {}
export interface DeleteCommandRequest {
  commandId: string;
}
export interface DeleteCommandResponse {
  statusCode?: number;
}
export declare class DeleteConflictException extends EffectData.TaggedError(
  "DeleteConflictException",
)<{
  readonly message?: string;
}> {}
export interface DeleteCustomMetricRequest {
  metricName: string;
}
export interface DeleteCustomMetricResponse {}
export interface DeleteDimensionRequest {
  name: string;
}
export interface DeleteDimensionResponse {}
export interface DeleteDomainConfigurationRequest {
  domainConfigurationName: string;
}
export interface DeleteDomainConfigurationResponse {}
export interface DeleteDynamicThingGroupRequest {
  thingGroupName: string;
  expectedVersion?: number;
}
export interface DeleteDynamicThingGroupResponse {}
export interface DeleteFleetMetricRequest {
  metricName: string;
  expectedVersion?: number;
}
export interface DeleteJobExecutionRequest {
  jobId: string;
  thingName: string;
  executionNumber: number;
  force?: boolean;
  namespaceId?: string;
}
export interface DeleteJobRequest {
  jobId: string;
  force?: boolean;
  namespaceId?: string;
}
export interface DeleteJobTemplateRequest {
  jobTemplateId: string;
}
export type DeleteMetricsExportConfig = boolean;

export interface DeleteMitigationActionRequest {
  actionName: string;
}
export interface DeleteMitigationActionResponse {}
export interface DeleteOTAUpdateRequest {
  otaUpdateId: string;
  deleteStream?: boolean;
  forceDeleteAWSJob?: boolean;
}
export interface DeleteOTAUpdateResponse {}
export interface DeletePackageRequest {
  packageName: string;
  clientToken?: string;
}
export interface DeletePackageResponse {}
export interface DeletePackageVersionRequest {
  packageName: string;
  versionName: string;
  clientToken?: string;
}
export interface DeletePackageVersionResponse {}
export interface DeletePolicyRequest {
  policyName: string;
}
export interface DeletePolicyVersionRequest {
  policyName: string;
  policyVersionId: string;
}
export interface DeleteProvisioningTemplateRequest {
  templateName: string;
}
export interface DeleteProvisioningTemplateResponse {}
export interface DeleteProvisioningTemplateVersionRequest {
  templateName: string;
  versionId: number;
}
export interface DeleteProvisioningTemplateVersionResponse {}
export interface DeleteRegistrationCodeRequest {}
export interface DeleteRegistrationCodeResponse {}
export interface DeleteRoleAliasRequest {
  roleAlias: string;
}
export interface DeleteRoleAliasResponse {}
export interface DeleteScheduledAuditRequest {
  scheduledAuditName: string;
}
export interface DeleteScheduledAuditResponse {}
export type DeleteScheduledAudits = boolean;

export interface DeleteSecurityProfileRequest {
  securityProfileName: string;
  expectedVersion?: number;
}
export interface DeleteSecurityProfileResponse {}
export type DeleteStream_ = boolean;

export interface DeleteStreamRequest {
  streamId: string;
}
export interface DeleteStreamResponse {}
export interface DeleteThingGroupRequest {
  thingGroupName: string;
  expectedVersion?: number;
}
export interface DeleteThingGroupResponse {}
export interface DeleteThingRequest {
  thingName: string;
  expectedVersion?: number;
}
export interface DeleteThingResponse {}
export interface DeleteThingTypeRequest {
  thingTypeName: string;
}
export interface DeleteThingTypeResponse {}
export interface DeleteTopicRuleDestinationRequest {
  arn: string;
}
export interface DeleteTopicRuleDestinationResponse {}
export interface DeleteTopicRuleRequest {
  ruleName: string;
}
export interface DeleteV2LoggingLevelRequest {
  targetType: LogTargetType;
  targetName: string;
}
export type DeliveryStreamName = string;

export interface Denied {
  implicitDeny?: ImplicitDeny;
  explicitDeny?: ExplicitDeny;
}
export interface DeprecateThingTypeRequest {
  thingTypeName: string;
  undoDeprecate?: boolean;
}
export interface DeprecateThingTypeResponse {}
export type DeprecationDate = Date | string;

export type DeprecationFlag = boolean;

export interface DescribeAccountAuditConfigurationRequest {}
export interface DescribeAccountAuditConfigurationResponse {
  roleArn?: string;
  auditNotificationTargetConfigurations?: Record<
    AuditNotificationType,
    AuditNotificationTarget
  >;
  auditCheckConfigurations?: Record<string, AuditCheckConfiguration>;
}
export interface DescribeAuditFindingRequest {
  findingId: string;
}
export interface DescribeAuditFindingResponse {
  finding?: AuditFinding;
}
export interface DescribeAuditMitigationActionsTaskRequest {
  taskId: string;
}
export interface DescribeAuditMitigationActionsTaskResponse {
  taskStatus?: AuditMitigationActionsTaskStatus;
  startTime?: Date | string;
  endTime?: Date | string;
  taskStatistics?: Record<string, TaskStatisticsForAuditCheck>;
  target?: AuditMitigationActionsTaskTarget;
  auditCheckToActionsMapping?: Record<string, Array<string>>;
  actionsDefinition?: Array<MitigationAction>;
}
export interface DescribeAuditSuppressionRequest {
  checkName: string;
  resourceIdentifier: ResourceIdentifier;
}
export interface DescribeAuditSuppressionResponse {
  checkName?: string;
  resourceIdentifier?: ResourceIdentifier;
  expirationDate?: Date | string;
  suppressIndefinitely?: boolean;
  description?: string;
}
export interface DescribeAuditTaskRequest {
  taskId: string;
}
export interface DescribeAuditTaskResponse {
  taskStatus?: AuditTaskStatus;
  taskType?: AuditTaskType;
  taskStartTime?: Date | string;
  taskStatistics?: TaskStatistics;
  scheduledAuditName?: string;
  auditDetails?: Record<string, AuditCheckDetails>;
}
export interface DescribeAuthorizerRequest {
  authorizerName: string;
}
export interface DescribeAuthorizerResponse {
  authorizerDescription?: AuthorizerDescription;
}
export interface DescribeBillingGroupRequest {
  billingGroupName: string;
}
export interface DescribeBillingGroupResponse {
  billingGroupName?: string;
  billingGroupId?: string;
  billingGroupArn?: string;
  version?: number;
  billingGroupProperties?: BillingGroupProperties;
  billingGroupMetadata?: BillingGroupMetadata;
}
export interface DescribeCACertificateRequest {
  certificateId: string;
}
export interface DescribeCACertificateResponse {
  certificateDescription?: CACertificateDescription;
  registrationConfig?: RegistrationConfig;
}
export interface DescribeCertificateProviderRequest {
  certificateProviderName: string;
}
export interface DescribeCertificateProviderResponse {
  certificateProviderName?: string;
  certificateProviderArn?: string;
  lambdaFunctionArn?: string;
  accountDefaultForOperations?: Array<CertificateProviderOperation>;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
}
export interface DescribeCertificateRequest {
  certificateId: string;
}
export interface DescribeCertificateResponse {
  certificateDescription?: CertificateDescription;
}
export interface DescribeCustomMetricRequest {
  metricName: string;
}
export interface DescribeCustomMetricResponse {
  metricName?: string;
  metricArn?: string;
  metricType?: CustomMetricType;
  displayName?: string;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
}
export interface DescribeDefaultAuthorizerRequest {}
export interface DescribeDefaultAuthorizerResponse {
  authorizerDescription?: AuthorizerDescription;
}
export interface DescribeDetectMitigationActionsTaskRequest {
  taskId: string;
}
export interface DescribeDetectMitigationActionsTaskResponse {
  taskSummary?: DetectMitigationActionsTaskSummary;
}
export interface DescribeDimensionRequest {
  name: string;
}
export interface DescribeDimensionResponse {
  name?: string;
  arn?: string;
  type?: DimensionType;
  stringValues?: Array<string>;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
}
export interface DescribeDomainConfigurationRequest {
  domainConfigurationName: string;
}
export interface DescribeDomainConfigurationResponse {
  domainConfigurationName?: string;
  domainConfigurationArn?: string;
  domainName?: string;
  serverCertificates?: Array<ServerCertificateSummary>;
  authorizerConfig?: AuthorizerConfig;
  domainConfigurationStatus?: DomainConfigurationStatus;
  serviceType?: ServiceType;
  domainType?: DomainType;
  lastStatusChangeDate?: Date | string;
  tlsConfig?: TlsConfig;
  serverCertificateConfig?: ServerCertificateConfig;
  authenticationType?: AuthenticationType;
  applicationProtocol?: ApplicationProtocol;
  clientCertificateConfig?: ClientCertificateConfig;
}
export interface DescribeEndpointRequest {
  endpointType?: string;
}
export interface DescribeEndpointResponse {
  endpointAddress?: string;
}
export interface DescribeEventConfigurationsRequest {}
export interface DescribeEventConfigurationsResponse {
  eventConfigurations?: Record<EventType, Configuration>;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
}
export interface DescribeFleetMetricRequest {
  metricName: string;
}
export interface DescribeFleetMetricResponse {
  metricName?: string;
  queryString?: string;
  aggregationType?: AggregationType;
  period?: number;
  aggregationField?: string;
  description?: string;
  queryVersion?: string;
  indexName?: string;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
  unit?: FleetMetricUnit;
  version?: number;
  metricArn?: string;
}
export interface DescribeIndexRequest {
  indexName: string;
}
export interface DescribeIndexResponse {
  indexName?: string;
  indexStatus?: IndexStatus;
  schema?: string;
}
export interface DescribeJobExecutionRequest {
  jobId: string;
  thingName: string;
  executionNumber?: number;
}
export interface DescribeJobExecutionResponse {
  execution?: JobExecution;
}
export interface DescribeJobRequest {
  jobId: string;
  beforeSubstitution?: boolean;
}
export interface DescribeJobResponse {
  documentSource?: string;
  job?: Job;
}
export interface DescribeJobTemplateRequest {
  jobTemplateId: string;
}
export interface DescribeJobTemplateResponse {
  jobTemplateArn?: string;
  jobTemplateId?: string;
  description?: string;
  documentSource?: string;
  document?: string;
  createdAt?: Date | string;
  presignedUrlConfig?: PresignedUrlConfig;
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
  abortConfig?: AbortConfig;
  timeoutConfig?: TimeoutConfig;
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
  maintenanceWindows?: Array<MaintenanceWindow>;
  destinationPackageVersions?: Array<string>;
}
export interface DescribeManagedJobTemplateRequest {
  templateName: string;
  templateVersion?: string;
}
export interface DescribeManagedJobTemplateResponse {
  templateName?: string;
  templateArn?: string;
  description?: string;
  templateVersion?: string;
  environments?: Array<string>;
  documentParameters?: Array<DocumentParameter>;
  document?: string;
}
export interface DescribeMitigationActionRequest {
  actionName: string;
}
export interface DescribeMitigationActionResponse {
  actionName?: string;
  actionType?: MitigationActionType;
  actionArn?: string;
  actionId?: string;
  roleArn?: string;
  actionParams?: MitigationActionParams;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
}
export interface DescribeProvisioningTemplateRequest {
  templateName: string;
}
export interface DescribeProvisioningTemplateResponse {
  templateArn?: string;
  templateName?: string;
  description?: string;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
  defaultVersionId?: number;
  templateBody?: string;
  enabled?: boolean;
  provisioningRoleArn?: string;
  preProvisioningHook?: ProvisioningHook;
  type?: TemplateType;
}
export interface DescribeProvisioningTemplateVersionRequest {
  templateName: string;
  versionId: number;
}
export interface DescribeProvisioningTemplateVersionResponse {
  versionId?: number;
  creationDate?: Date | string;
  templateBody?: string;
  isDefaultVersion?: boolean;
}
export interface DescribeRoleAliasRequest {
  roleAlias: string;
}
export interface DescribeRoleAliasResponse {
  roleAliasDescription?: RoleAliasDescription;
}
export interface DescribeScheduledAuditRequest {
  scheduledAuditName: string;
}
export interface DescribeScheduledAuditResponse {
  frequency?: AuditFrequency;
  dayOfMonth?: string;
  dayOfWeek?: DayOfWeek;
  targetCheckNames?: Array<string>;
  scheduledAuditName?: string;
  scheduledAuditArn?: string;
}
export interface DescribeSecurityProfileRequest {
  securityProfileName: string;
}
export interface DescribeSecurityProfileResponse {
  securityProfileName?: string;
  securityProfileArn?: string;
  securityProfileDescription?: string;
  behaviors?: Array<Behavior>;
  alertTargets?: Record<AlertTargetType, AlertTarget>;
  additionalMetricsToRetain?: Array<string>;
  additionalMetricsToRetainV2?: Array<MetricToRetain>;
  version?: number;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
  metricsExportConfig?: MetricsExportConfig;
}
export interface DescribeStreamRequest {
  streamId: string;
}
export interface DescribeStreamResponse {
  streamInfo?: StreamInfo;
}
export interface DescribeThingGroupRequest {
  thingGroupName: string;
}
export interface DescribeThingGroupResponse {
  thingGroupName?: string;
  thingGroupId?: string;
  thingGroupArn?: string;
  version?: number;
  thingGroupProperties?: ThingGroupProperties;
  thingGroupMetadata?: ThingGroupMetadata;
  indexName?: string;
  queryString?: string;
  queryVersion?: string;
  status?: DynamicGroupStatus;
}
export interface DescribeThingRegistrationTaskRequest {
  taskId: string;
}
export interface DescribeThingRegistrationTaskResponse {
  taskId?: string;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
  templateBody?: string;
  inputFileBucket?: string;
  inputFileKey?: string;
  roleArn?: string;
  status?: Status;
  message?: string;
  successCount?: number;
  failureCount?: number;
  percentageProgress?: number;
}
export interface DescribeThingRequest {
  thingName: string;
}
export interface DescribeThingResponse {
  defaultClientId?: string;
  thingName?: string;
  thingId?: string;
  thingArn?: string;
  thingTypeName?: string;
  attributes?: Record<string, string>;
  version?: number;
  billingGroupName?: string;
}
export interface DescribeThingTypeRequest {
  thingTypeName: string;
}
export interface DescribeThingTypeResponse {
  thingTypeName?: string;
  thingTypeId?: string;
  thingTypeArn?: string;
  thingTypeProperties?: ThingTypeProperties;
  thingTypeMetadata?: ThingTypeMetadata;
}
export type Description = string;

export interface Destination {
  s3Destination?: S3Destination;
}
export type DestinationPackageVersions = Array<string>;
export interface DetachPolicyRequest {
  policyName: string;
  target: string;
}
export interface DetachPrincipalPolicyRequest {
  policyName: string;
  principal: string;
}
export interface DetachSecurityProfileRequest {
  securityProfileName: string;
  securityProfileTargetArn: string;
}
export interface DetachSecurityProfileResponse {}
export interface DetachThingPrincipalRequest {
  thingName: string;
  principal: string;
}
export interface DetachThingPrincipalResponse {}
export type DetailsKey = string;

export type DetailsMap = Record<string, string>;
export type DetailsValue = string;

export interface DetectMitigationActionExecution {
  taskId?: string;
  violationId?: string;
  actionName?: string;
  thingName?: string;
  executionStartDate?: Date | string;
  executionEndDate?: Date | string;
  status?: DetectMitigationActionExecutionStatus;
  errorCode?: string;
  message?: string;
}
export type DetectMitigationActionExecutionErrorCode = string;

export type DetectMitigationActionExecutionList =
  Array<DetectMitigationActionExecution>;
export type DetectMitigationActionExecutionStatus =
  | "IN_PROGRESS"
  | "SUCCESSFUL"
  | "FAILED"
  | "SKIPPED";
export interface DetectMitigationActionsTaskStatistics {
  actionsExecuted?: number;
  actionsSkipped?: number;
  actionsFailed?: number;
}
export type DetectMitigationActionsTaskStatus =
  | "IN_PROGRESS"
  | "SUCCESSFUL"
  | "FAILED"
  | "CANCELED";
export interface DetectMitigationActionsTaskSummary {
  taskId?: string;
  taskStatus?: DetectMitigationActionsTaskStatus;
  taskStartTime?: Date | string;
  taskEndTime?: Date | string;
  target?: DetectMitigationActionsTaskTarget;
  violationEventOccurrenceRange?: ViolationEventOccurrenceRange;
  onlyActiveViolationsIncluded?: boolean;
  suppressedAlertsIncluded?: boolean;
  actionsDefinition?: Array<MitigationAction>;
  taskStatistics?: DetectMitigationActionsTaskStatistics;
}
export type DetectMitigationActionsTaskSummaryList =
  Array<DetectMitigationActionsTaskSummary>;
export interface DetectMitigationActionsTaskTarget {
  violationIds?: Array<string>;
  securityProfileName?: string;
  behaviorName?: string;
}
export type DetectMitigationActionsToExecuteList = Array<string>;
export type DeviceCertificateUpdateAction = "DEACTIVATE";
export type DeviceDefenderIndexingMode = "OFF" | "VIOLATIONS";
export type DeviceDefenderThingName = string;

export type DimensionArn = string;

export type DimensionName = string;

export type DimensionNames = Array<string>;
export type DimensionStringValue = string;

export type DimensionStringValues = Array<string>;
export type DimensionType = "TOPIC_FILTER";
export type DimensionValueOperator = "IN" | "NOT_IN";
export type DisableAllLogs = boolean;

export interface DisableTopicRuleRequest {
  ruleName: string;
}
export interface DisassociateSbomFromPackageVersionRequest {
  packageName: string;
  versionName: string;
  clientToken?: string;
}
export interface DisassociateSbomFromPackageVersionResponse {}
export type DisconnectReason = string;

export type DisconnectReasonValue =
  | "AUTH_ERROR"
  | "CLIENT_INITIATED_DISCONNECT"
  | "CLIENT_ERROR"
  | "CONNECTION_LOST"
  | "DUPLICATE_CLIENTID"
  | "FORBIDDEN_ACCESS"
  | "MQTT_KEEP_ALIVE_TIMEOUT"
  | "SERVER_ERROR"
  | "SERVER_INITIATED_DISCONNECT"
  | "THROTTLED"
  | "WEBSOCKET_TTL_EXPIRATION"
  | "CUSTOMAUTH_TTL_EXPIRATION"
  | "UNKNOWN"
  | "NONE";
export type DisplayName = string;

export interface DocumentParameter {
  key?: string;
  description?: string;
  regex?: string;
  example?: string;
  optional?: boolean;
}
export type DocumentParameters = Array<DocumentParameter>;
export type DomainConfigurationArn = string;

export type DomainConfigurationName = string;

export type DomainConfigurations = Array<DomainConfigurationSummary>;
export type DomainConfigurationStatus = "ENABLED" | "DISABLED";
export interface DomainConfigurationSummary {
  domainConfigurationName?: string;
  domainConfigurationArn?: string;
  serviceType?: ServiceType;
}
export type DomainName = string;

export type DomainType = "ENDPOINT" | "AWS_MANAGED" | "CUSTOMER_MANAGED";
export type DoubleParameterValue = number;

export type DurationInMinutes = number;

export type DurationSeconds = number;

export type DynamicGroupStatus = "ACTIVE" | "BUILDING" | "REBUILDING";
export interface DynamoDBAction {
  tableName: string;
  roleArn: string;
  operation?: string;
  hashKeyField: string;
  hashKeyValue: string;
  hashKeyType?: DynamoKeyType;
  rangeKeyField?: string;
  rangeKeyValue?: string;
  rangeKeyType?: DynamoKeyType;
  payloadField?: string;
}
export interface DynamoDBv2Action {
  roleArn: string;
  putItem: PutItemInput;
}
export type DynamoKeyType = "STRING" | "NUMBER";
export type DynamoOperation = string;

export type EffectivePolicies = Array<EffectivePolicy>;
export interface EffectivePolicy {
  policyName?: string;
  policyArn?: string;
  policyDocument?: string;
}
export interface ElasticsearchAction {
  roleArn: string;
  endpoint: string;
  index: string;
  type: string;
  id: string;
}
export type ElasticsearchEndpoint = string;

export type ElasticsearchId = string;

export type ElasticsearchIndex = string;

export type ElasticsearchType = string;

export type EnableCachingForHttp = boolean;

export type Enabled = boolean;

export type Enabled2 = boolean;

export type EnabledBoolean = boolean;

export interface EnableIoTLoggingParams {
  roleArnForLogging: string;
  logLevel: LogLevel;
}
export type EnableOCSPCheck = boolean;

export interface EnableTopicRuleRequest {
  ruleName: string;
}
export type EndpointAddress = string;

export type EndpointType = string;

export type Environment = string;

export type Environments = Array<string>;
export type ErrorCode = string;

export interface ErrorInfo {
  code?: string;
  message?: string;
}
export type ErrorMessage = string;

export type ErrorMessage2 = string;

export type EvaluationStatistic = string;

export type EventConfigurations = Record<EventType, Configuration>;
export type EventType =
  | "THING"
  | "THING_GROUP"
  | "THING_TYPE"
  | "THING_GROUP_MEMBERSHIP"
  | "THING_GROUP_HIERARCHY"
  | "THING_TYPE_ASSOCIATION"
  | "JOB"
  | "JOB_EXECUTION"
  | "POLICY"
  | "CERTIFICATE"
  | "CA_CERTIFICATE";
export type Example = string;

export type ExecutionNamePrefix = string;

export type ExecutionNumber = number;

export type ExpectedVersion = number;

export type ExpiresInSec = number;

export type ExpiresInSeconds = number;

export interface ExplicitDeny {
  policies?: Array<Policy>;
}
export interface ExponentialRolloutRate {
  baseRatePerMinute: number;
  incrementFactor: number;
  rateIncreaseCriteria: RateIncreaseCriteria;
}
export type ExportMetric = boolean;

export type FailedChecksCount = number;

export type FailedFindingsCount = number;

export type FailedThings = number;

export interface Field {
  name?: string;
  type?: FieldType;
}
export type FieldName = string;

export type Fields = Array<Field>;
export type FieldType = "NUMBER" | "STRING" | "BOOLEAN";
export type FileId = number;

export interface FileLocation {
  stream?: Stream;
  s3Location?: S3Location;
}
export type FileName = string;

export type FileType = number;

export type FindingId = string;

export type FindingIds = Array<string>;
export interface FirehoseAction {
  roleArn: string;
  deliveryStreamName: string;
  separator?: string;
  batchMode?: boolean;
}
export type FirehoseSeparator = string;

export type Flag = boolean;

export type FleetMetricArn = string;

export type FleetMetricDescription = string;

export type FleetMetricName = string;

export interface FleetMetricNameAndArn {
  metricName?: string;
  metricArn?: string;
}
export type FleetMetricNameAndArnList = Array<FleetMetricNameAndArn>;
export type FleetMetricPeriod = number;

export type FleetMetricUnit =
  | "Seconds"
  | "Microseconds"
  | "Milliseconds"
  | "Bytes"
  | "Kilobytes"
  | "Megabytes"
  | "Gigabytes"
  | "Terabytes"
  | "Bits"
  | "Kilobits"
  | "Megabits"
  | "Gigabits"
  | "Terabits"
  | "Percent"
  | "Count"
  | "BytesSecond"
  | "KilobytesSecond"
  | "MegabytesSecond"
  | "GigabytesSecond"
  | "TerabytesSecond"
  | "BitsSecond"
  | "KilobitsSecond"
  | "MegabitsSecond"
  | "GigabitsSecond"
  | "TerabitsSecond"
  | "CountSecond"
  | "None";
export type Forced = boolean;

export type ForceDelete = boolean;

export type ForceDeleteAWSJob = boolean;

export type ForceFlag = boolean;

export type FunctionArn = string;

export type GenerationId = string;

export type GenericLongValue = number;

export type GeoLocationsFilter = Array<GeoLocationTarget>;
export interface GeoLocationTarget {
  name?: string;
  order?: TargetFieldOrder;
}
export interface GetBehaviorModelTrainingSummariesRequest {
  securityProfileName?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface GetBehaviorModelTrainingSummariesResponse {
  summaries?: Array<BehaviorModelTrainingSummary>;
  nextToken?: string;
}
export interface GetBucketsAggregationRequest {
  indexName?: string;
  queryString: string;
  aggregationField: string;
  queryVersion?: string;
  bucketsAggregationType: BucketsAggregationType;
}
export interface GetBucketsAggregationResponse {
  totalCount?: number;
  buckets?: Array<Bucket>;
}
export interface GetCardinalityRequest {
  indexName?: string;
  queryString: string;
  aggregationField?: string;
  queryVersion?: string;
}
export interface GetCardinalityResponse {
  cardinality?: number;
}
export interface GetCommandExecutionRequest {
  executionId: string;
  targetArn: string;
  includeResult?: boolean;
}
export interface GetCommandExecutionResponse {
  executionId?: string;
  commandArn?: string;
  targetArn?: string;
  status?: CommandExecutionStatus;
  statusReason?: StatusReason;
  result?: Record<string, CommandExecutionResult>;
  parameters?: Record<string, CommandParameterValue>;
  executionTimeoutSeconds?: number;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  startedAt?: Date | string;
  completedAt?: Date | string;
  timeToLive?: Date | string;
}
export interface GetCommandRequest {
  commandId: string;
}
export interface GetCommandResponse {
  commandId?: string;
  commandArn?: string;
  namespace?: CommandNamespace;
  displayName?: string;
  description?: string;
  mandatoryParameters?: Array<CommandParameter>;
  payload?: CommandPayload;
  roleArn?: string;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  deprecated?: boolean;
  pendingDeletion?: boolean;
}
export interface GetEffectivePoliciesRequest {
  principal?: string;
  cognitoIdentityPoolId?: string;
  thingName?: string;
}
export interface GetEffectivePoliciesResponse {
  effectivePolicies?: Array<EffectivePolicy>;
}
export interface GetIndexingConfigurationRequest {}
export interface GetIndexingConfigurationResponse {
  thingIndexingConfiguration?: ThingIndexingConfiguration;
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;
}
export interface GetJobDocumentRequest {
  jobId: string;
  beforeSubstitution?: boolean;
}
export interface GetJobDocumentResponse {
  document?: string;
}
export interface GetLoggingOptionsRequest {}
export interface GetLoggingOptionsResponse {
  roleArn?: string;
  logLevel?: LogLevel;
}
export interface GetOTAUpdateRequest {
  otaUpdateId: string;
}
export interface GetOTAUpdateResponse {
  otaUpdateInfo?: OTAUpdateInfo;
}
export interface GetPackageConfigurationRequest {}
export interface GetPackageConfigurationResponse {
  versionUpdateByJobsConfig?: VersionUpdateByJobsConfig;
}
export interface GetPackageRequest {
  packageName: string;
}
export interface GetPackageResponse {
  packageName?: string;
  packageArn?: string;
  description?: string;
  defaultVersionName?: string;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
}
export interface GetPackageVersionRequest {
  packageName: string;
  versionName: string;
}
export interface GetPackageVersionResponse {
  packageVersionArn?: string;
  packageName?: string;
  versionName?: string;
  description?: string;
  attributes?: Record<string, string>;
  artifact?: PackageVersionArtifact;
  status?: PackageVersionStatus;
  errorReason?: string;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
  sbom?: Sbom;
  sbomValidationStatus?: SbomValidationStatus;
  recipe?: string;
}
export interface GetPercentilesRequest {
  indexName?: string;
  queryString: string;
  aggregationField?: string;
  queryVersion?: string;
  percents?: Array<number>;
}
export interface GetPercentilesResponse {
  percentiles?: Array<PercentPair>;
}
export interface GetPolicyRequest {
  policyName: string;
}
export interface GetPolicyResponse {
  policyName?: string;
  policyArn?: string;
  policyDocument?: string;
  defaultVersionId?: string;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
  generationId?: string;
}
export interface GetPolicyVersionRequest {
  policyName: string;
  policyVersionId: string;
}
export interface GetPolicyVersionResponse {
  policyArn?: string;
  policyName?: string;
  policyDocument?: string;
  policyVersionId?: string;
  isDefaultVersion?: boolean;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
  generationId?: string;
}
export interface GetRegistrationCodeRequest {}
export interface GetRegistrationCodeResponse {
  registrationCode?: string;
}
export interface GetStatisticsRequest {
  indexName?: string;
  queryString: string;
  aggregationField?: string;
  queryVersion?: string;
}
export interface GetStatisticsResponse {
  statistics?: Statistics;
}
export interface GetThingConnectivityDataRequest {
  thingName: string;
}
export interface GetThingConnectivityDataResponse {
  thingName?: string;
  connected?: boolean;
  timestamp?: Date | string;
  disconnectReason?: DisconnectReasonValue;
}
export interface GetTopicRuleDestinationRequest {
  arn: string;
}
export interface GetTopicRuleDestinationResponse {
  topicRuleDestination?: TopicRuleDestination;
}
export interface GetTopicRuleRequest {
  ruleName: string;
}
export interface GetTopicRuleResponse {
  ruleArn?: string;
  rule?: TopicRule;
}
export interface GetV2LoggingOptionsRequest {}
export interface GetV2LoggingOptionsResponse {
  roleArn?: string;
  defaultLogLevel?: LogLevel;
  disableAllLogs?: boolean;
}
export interface GroupNameAndArn {
  groupName?: string;
  groupArn?: string;
}
export type HashAlgorithm = string;

export type HashKeyField = string;

export type HashKeyValue = string;

export type HeaderKey = string;

export type HeaderList = Array<HttpActionHeader>;
export type HeaderValue = string;

export interface HttpAction {
  url: string;
  confirmationUrl?: string;
  headers?: Array<HttpActionHeader>;
  auth?: HttpAuthorization;
}
export interface HttpActionHeader {
  key: string;
  value: string;
}
export interface HttpAuthorization {
  sigv4?: SigV4Authorization;
}
export interface HttpContext {
  headers?: Record<string, string>;
  queryString?: string;
}
export type HttpHeaderName = string;

export type HttpHeaders = Record<string, string>;
export type HttpHeaderValue = string;

export type HttpQueryString = string;

export interface HttpUrlDestinationConfiguration {
  confirmationUrl: string;
}
export interface HttpUrlDestinationProperties {
  confirmationUrl?: string;
}
export interface HttpUrlDestinationSummary {
  confirmationUrl?: string;
}
export interface ImplicitDeny {
  policies?: Array<Policy>;
}
export type IncrementFactor = number;

export interface IndexingFilter {
  namedShadowNames?: Array<string>;
  geoLocations?: Array<GeoLocationTarget>;
}
export type IndexName = string;

export type IndexNamesList = Array<string>;
export declare class IndexNotReadyException extends EffectData.TaggedError(
  "IndexNotReadyException",
)<{
  readonly message?: string;
}> {}
export type IndexSchema = string;

export type IndexStatus = "ACTIVE" | "BUILDING" | "REBUILDING";
export type InlineDocument = string;

export type InProgressChecksCount = number;

export type InProgressThings = number;

export type InProgressTimeoutInMinutes = number;

export type InputName = string;

export type IntegerParameterValue = number;

export declare class InternalException extends EffectData.TaggedError(
  "InternalException",
)<{
  readonly message?: string;
}> {}
export declare class InternalFailureException extends EffectData.TaggedError(
  "InternalFailureException",
)<{
  readonly message?: string;
}> {}
export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidAggregationException extends EffectData.TaggedError(
  "InvalidAggregationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidQueryException extends EffectData.TaggedError(
  "InvalidQueryException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidResponseException extends EffectData.TaggedError(
  "InvalidResponseException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidStateTransitionException extends EffectData.TaggedError(
  "InvalidStateTransitionException",
)<{
  readonly message?: string;
}> {}
export interface IotAnalyticsAction {
  channelArn?: string;
  channelName?: string;
  batchMode?: boolean;
  roleArn?: string;
}
export interface IotEventsAction {
  inputName: string;
  messageId?: string;
  batchMode?: boolean;
  roleArn: string;
}
export interface IotSiteWiseAction {
  putAssetPropertyValueEntries: Array<PutAssetPropertyValueEntry>;
  roleArn: string;
}
export type IsAuthenticated = boolean;

export type IsDefaultVersion = boolean;

export type IsDisabled = boolean;

export interface IssuerCertificateIdentifier {
  issuerCertificateSubject?: string;
  issuerId?: string;
  issuerCertificateSerialNumber?: string;
}
export type IssuerCertificateSerialNumber = string;

export type IssuerCertificateSubject = string;

export type IssuerId = string;

export type IsSuppressed = boolean;

export interface Job {
  jobArn?: string;
  jobId?: string;
  targetSelection?: TargetSelection;
  status?: JobStatus;
  forceCanceled?: boolean;
  reasonCode?: string;
  comment?: string;
  targets?: Array<string>;
  description?: string;
  presignedUrlConfig?: PresignedUrlConfig;
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
  abortConfig?: AbortConfig;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  completedAt?: Date | string;
  jobProcessDetails?: JobProcessDetails;
  timeoutConfig?: TimeoutConfig;
  namespaceId?: string;
  jobTemplateArn?: string;
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
  documentParameters?: Record<string, string>;
  isConcurrent?: boolean;
  schedulingConfig?: SchedulingConfig;
  scheduledJobRollouts?: Array<ScheduledJobRollout>;
  destinationPackageVersions?: Array<string>;
}
export type JobArn = string;

export type JobDescription = string;

export type JobDocument = string;

export type JobDocumentSource = string;

export type JobEndBehavior = "STOP_ROLLOUT" | "CANCEL" | "FORCE_CANCEL";
export interface JobExecution {
  jobId?: string;
  status?: JobExecutionStatus;
  forceCanceled?: boolean;
  statusDetails?: JobExecutionStatusDetails;
  thingArn?: string;
  queuedAt?: Date | string;
  startedAt?: Date | string;
  lastUpdatedAt?: Date | string;
  executionNumber?: number;
  versionNumber?: number;
  approximateSecondsBeforeTimedOut?: number;
}
export type JobExecutionFailureType =
  | "FAILED"
  | "REJECTED"
  | "TIMED_OUT"
  | "ALL";
export interface JobExecutionsRetryConfig {
  criteriaList: Array<RetryCriteria>;
}
export interface JobExecutionsRolloutConfig {
  maximumPerMinute?: number;
  exponentialRate?: ExponentialRolloutRate;
}
export type JobExecutionStatus =
  | "QUEUED"
  | "IN_PROGRESS"
  | "SUCCEEDED"
  | "FAILED"
  | "TIMED_OUT"
  | "REJECTED"
  | "REMOVED"
  | "CANCELED";
export interface JobExecutionStatusDetails {
  detailsMap?: Record<string, string>;
}
export interface JobExecutionSummary {
  status?: JobExecutionStatus;
  queuedAt?: Date | string;
  startedAt?: Date | string;
  lastUpdatedAt?: Date | string;
  executionNumber?: number;
  retryAttempt?: number;
}
export interface JobExecutionSummaryForJob {
  thingArn?: string;
  jobExecutionSummary?: JobExecutionSummary;
}
export type JobExecutionSummaryForJobList = Array<JobExecutionSummaryForJob>;
export interface JobExecutionSummaryForThing {
  jobId?: string;
  jobExecutionSummary?: JobExecutionSummary;
}
export type JobExecutionSummaryForThingList =
  Array<JobExecutionSummaryForThing>;
export type JobId = string;

export interface JobProcessDetails {
  processingTargets?: Array<string>;
  numberOfCanceledThings?: number;
  numberOfSucceededThings?: number;
  numberOfFailedThings?: number;
  numberOfRejectedThings?: number;
  numberOfQueuedThings?: number;
  numberOfInProgressThings?: number;
  numberOfRemovedThings?: number;
  numberOfTimedOutThings?: number;
}
export type JobStatus =
  | "IN_PROGRESS"
  | "CANCELED"
  | "COMPLETED"
  | "DELETION_IN_PROGRESS"
  | "SCHEDULED";
export interface JobSummary {
  jobArn?: string;
  jobId?: string;
  thingGroupId?: string;
  targetSelection?: TargetSelection;
  status?: JobStatus;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  completedAt?: Date | string;
  isConcurrent?: boolean;
}
export type JobSummaryList = Array<JobSummary>;
export type JobTargets = Array<string>;
export type JobTemplateArn = string;

export type JobTemplateId = string;

export interface JobTemplateSummary {
  jobTemplateArn?: string;
  jobTemplateId?: string;
  description?: string;
  createdAt?: Date | string;
}
export type JobTemplateSummaryList = Array<JobTemplateSummary>;
export type JsonDocument = string;

export interface KafkaAction {
  destinationArn: string;
  topic: string;
  key?: string;
  partition?: string;
  clientProperties: Record<string, string>;
  headers?: Array<KafkaActionHeader>;
}
export interface KafkaActionHeader {
  key: string;
  value: string;
}
export type KafkaHeaderKey = string;

export type KafkaHeaders = Array<KafkaActionHeader>;
export type KafkaHeaderValue = string;

export type Key = string;

export type KeyName = string;

export interface KeyPair {
  PublicKey?: string;
  PrivateKey?: string;
}
export type KeyValue = string;

export interface KinesisAction {
  roleArn: string;
  streamName: string;
  partitionKey?: string;
}
export interface LambdaAction {
  functionArn: string;
}
export type LaserMaxResults = number;

export type LastModifiedDate = Date | string;

export type LastUpdatedAtDate = Date | string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListActiveViolationsRequest {
  thingName?: string;
  securityProfileName?: string;
  behaviorCriteriaType?: BehaviorCriteriaType;
  listSuppressedAlerts?: boolean;
  verificationState?: VerificationState;
  nextToken?: string;
  maxResults?: number;
}
export interface ListActiveViolationsResponse {
  activeViolations?: Array<ActiveViolation>;
  nextToken?: string;
}
export interface ListAttachedPoliciesRequest {
  target: string;
  recursive?: boolean;
  marker?: string;
  pageSize?: number;
}
export interface ListAttachedPoliciesResponse {
  policies?: Array<Policy>;
  nextMarker?: string;
}
export interface ListAuditFindingsRequest {
  taskId?: string;
  checkName?: string;
  resourceIdentifier?: ResourceIdentifier;
  maxResults?: number;
  nextToken?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  listSuppressedFindings?: boolean;
}
export interface ListAuditFindingsResponse {
  findings?: Array<AuditFinding>;
  nextToken?: string;
}
export interface ListAuditMitigationActionsExecutionsRequest {
  taskId: string;
  actionStatus?: AuditMitigationActionsExecutionStatus;
  findingId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListAuditMitigationActionsExecutionsResponse {
  actionsExecutions?: Array<AuditMitigationActionExecutionMetadata>;
  nextToken?: string;
}
export interface ListAuditMitigationActionsTasksRequest {
  auditTaskId?: string;
  findingId?: string;
  taskStatus?: AuditMitigationActionsTaskStatus;
  maxResults?: number;
  nextToken?: string;
  startTime: Date | string;
  endTime: Date | string;
}
export interface ListAuditMitigationActionsTasksResponse {
  tasks?: Array<AuditMitigationActionsTaskMetadata>;
  nextToken?: string;
}
export interface ListAuditSuppressionsRequest {
  checkName?: string;
  resourceIdentifier?: ResourceIdentifier;
  ascendingOrder?: boolean;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAuditSuppressionsResponse {
  suppressions?: Array<AuditSuppression>;
  nextToken?: string;
}
export interface ListAuditTasksRequest {
  startTime: Date | string;
  endTime: Date | string;
  taskType?: AuditTaskType;
  taskStatus?: AuditTaskStatus;
  nextToken?: string;
  maxResults?: number;
}
export interface ListAuditTasksResponse {
  tasks?: Array<AuditTaskMetadata>;
  nextToken?: string;
}
export interface ListAuthorizersRequest {
  pageSize?: number;
  marker?: string;
  ascendingOrder?: boolean;
  status?: AuthorizerStatus;
}
export interface ListAuthorizersResponse {
  authorizers?: Array<AuthorizerSummary>;
  nextMarker?: string;
}
export interface ListBillingGroupsRequest {
  nextToken?: string;
  maxResults?: number;
  namePrefixFilter?: string;
}
export interface ListBillingGroupsResponse {
  billingGroups?: Array<GroupNameAndArn>;
  nextToken?: string;
}
export interface ListCACertificatesRequest {
  pageSize?: number;
  marker?: string;
  ascendingOrder?: boolean;
  templateName?: string;
}
export interface ListCACertificatesResponse {
  certificates?: Array<CACertificate>;
  nextMarker?: string;
}
export interface ListCertificateProvidersRequest {
  nextToken?: string;
  ascendingOrder?: boolean;
}
export interface ListCertificateProvidersResponse {
  certificateProviders?: Array<CertificateProviderSummary>;
  nextToken?: string;
}
export interface ListCertificatesByCARequest {
  caCertificateId: string;
  pageSize?: number;
  marker?: string;
  ascendingOrder?: boolean;
}
export interface ListCertificatesByCAResponse {
  certificates?: Array<Certificate>;
  nextMarker?: string;
}
export interface ListCertificatesRequest {
  pageSize?: number;
  marker?: string;
  ascendingOrder?: boolean;
}
export interface ListCertificatesResponse {
  certificates?: Array<Certificate>;
  nextMarker?: string;
}
export interface ListCommandExecutionsRequest {
  maxResults?: number;
  nextToken?: string;
  namespace?: CommandNamespace;
  status?: CommandExecutionStatus;
  sortOrder?: SortOrder;
  startedTimeFilter?: TimeFilter;
  completedTimeFilter?: TimeFilter;
  targetArn?: string;
  commandArn?: string;
}
export interface ListCommandExecutionsResponse {
  commandExecutions?: Array<CommandExecutionSummary>;
  nextToken?: string;
}
export interface ListCommandsRequest {
  maxResults?: number;
  nextToken?: string;
  namespace?: CommandNamespace;
  commandParameterName?: string;
  sortOrder?: SortOrder;
}
export interface ListCommandsResponse {
  commands?: Array<CommandSummary>;
  nextToken?: string;
}
export interface ListCustomMetricsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListCustomMetricsResponse {
  metricNames?: Array<string>;
  nextToken?: string;
}
export interface ListDetectMitigationActionsExecutionsRequest {
  taskId?: string;
  violationId?: string;
  thingName?: string;
  startTime?: Date | string;
  endTime?: Date | string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListDetectMitigationActionsExecutionsResponse {
  actionsExecutions?: Array<DetectMitigationActionExecution>;
  nextToken?: string;
}
export interface ListDetectMitigationActionsTasksRequest {
  maxResults?: number;
  nextToken?: string;
  startTime: Date | string;
  endTime: Date | string;
}
export interface ListDetectMitigationActionsTasksResponse {
  tasks?: Array<DetectMitigationActionsTaskSummary>;
  nextToken?: string;
}
export interface ListDimensionsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListDimensionsResponse {
  dimensionNames?: Array<string>;
  nextToken?: string;
}
export interface ListDomainConfigurationsRequest {
  marker?: string;
  pageSize?: number;
  serviceType?: ServiceType;
}
export interface ListDomainConfigurationsResponse {
  domainConfigurations?: Array<DomainConfigurationSummary>;
  nextMarker?: string;
}
export interface ListFleetMetricsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListFleetMetricsResponse {
  fleetMetrics?: Array<FleetMetricNameAndArn>;
  nextToken?: string;
}
export interface ListIndicesRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListIndicesResponse {
  indexNames?: Array<string>;
  nextToken?: string;
}
export interface ListJobExecutionsForJobRequest {
  jobId: string;
  status?: JobExecutionStatus;
  maxResults?: number;
  nextToken?: string;
}
export interface ListJobExecutionsForJobResponse {
  executionSummaries?: Array<JobExecutionSummaryForJob>;
  nextToken?: string;
}
export interface ListJobExecutionsForThingRequest {
  thingName: string;
  status?: JobExecutionStatus;
  namespaceId?: string;
  maxResults?: number;
  nextToken?: string;
  jobId?: string;
}
export interface ListJobExecutionsForThingResponse {
  executionSummaries?: Array<JobExecutionSummaryForThing>;
  nextToken?: string;
}
export interface ListJobsRequest {
  status?: JobStatus;
  targetSelection?: TargetSelection;
  maxResults?: number;
  nextToken?: string;
  thingGroupName?: string;
  thingGroupId?: string;
  namespaceId?: string;
}
export interface ListJobsResponse {
  jobs?: Array<JobSummary>;
  nextToken?: string;
}
export interface ListJobTemplatesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListJobTemplatesResponse {
  jobTemplates?: Array<JobTemplateSummary>;
  nextToken?: string;
}
export interface ListManagedJobTemplatesRequest {
  templateName?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListManagedJobTemplatesResponse {
  managedJobTemplates?: Array<ManagedJobTemplateSummary>;
  nextToken?: string;
}
export interface ListMetricValuesRequest {
  thingName: string;
  metricName: string;
  dimensionName?: string;
  dimensionValueOperator?: DimensionValueOperator;
  startTime: Date | string;
  endTime: Date | string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListMetricValuesResponse {
  metricDatumList?: Array<MetricDatum>;
  nextToken?: string;
}
export interface ListMitigationActionsRequest {
  actionType?: MitigationActionType;
  maxResults?: number;
  nextToken?: string;
}
export interface ListMitigationActionsResponse {
  actionIdentifiers?: Array<MitigationActionIdentifier>;
  nextToken?: string;
}
export interface ListOTAUpdatesRequest {
  maxResults?: number;
  nextToken?: string;
  otaUpdateStatus?: OTAUpdateStatus;
}
export interface ListOTAUpdatesResponse {
  otaUpdates?: Array<OTAUpdateSummary>;
  nextToken?: string;
}
export interface ListOutgoingCertificatesRequest {
  pageSize?: number;
  marker?: string;
  ascendingOrder?: boolean;
}
export interface ListOutgoingCertificatesResponse {
  outgoingCertificates?: Array<OutgoingCertificate>;
  nextMarker?: string;
}
export interface ListPackagesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListPackagesResponse {
  packageSummaries?: Array<PackageSummary>;
  nextToken?: string;
}
export interface ListPackageVersionsRequest {
  packageName: string;
  status?: PackageVersionStatus;
  maxResults?: number;
  nextToken?: string;
}
export interface ListPackageVersionsResponse {
  packageVersionSummaries?: Array<PackageVersionSummary>;
  nextToken?: string;
}
export interface ListPoliciesRequest {
  marker?: string;
  pageSize?: number;
  ascendingOrder?: boolean;
}
export interface ListPoliciesResponse {
  policies?: Array<Policy>;
  nextMarker?: string;
}
export interface ListPolicyPrincipalsRequest {
  policyName: string;
  marker?: string;
  pageSize?: number;
  ascendingOrder?: boolean;
}
export interface ListPolicyPrincipalsResponse {
  principals?: Array<string>;
  nextMarker?: string;
}
export interface ListPolicyVersionsRequest {
  policyName: string;
}
export interface ListPolicyVersionsResponse {
  policyVersions?: Array<PolicyVersion>;
}
export interface ListPrincipalPoliciesRequest {
  principal: string;
  marker?: string;
  pageSize?: number;
  ascendingOrder?: boolean;
}
export interface ListPrincipalPoliciesResponse {
  policies?: Array<Policy>;
  nextMarker?: string;
}
export interface ListPrincipalThingsRequest {
  nextToken?: string;
  maxResults?: number;
  principal: string;
}
export interface ListPrincipalThingsResponse {
  things?: Array<string>;
  nextToken?: string;
}
export interface ListPrincipalThingsV2Request {
  nextToken?: string;
  maxResults?: number;
  principal: string;
  thingPrincipalType?: ThingPrincipalType;
}
export interface ListPrincipalThingsV2Response {
  principalThingObjects?: Array<PrincipalThingObject>;
  nextToken?: string;
}
export interface ListProvisioningTemplatesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListProvisioningTemplatesResponse {
  templates?: Array<ProvisioningTemplateSummary>;
  nextToken?: string;
}
export interface ListProvisioningTemplateVersionsRequest {
  templateName: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListProvisioningTemplateVersionsResponse {
  versions?: Array<ProvisioningTemplateVersionSummary>;
  nextToken?: string;
}
export interface ListRelatedResourcesForAuditFindingRequest {
  findingId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListRelatedResourcesForAuditFindingResponse {
  relatedResources?: Array<RelatedResource>;
  nextToken?: string;
}
export interface ListRoleAliasesRequest {
  pageSize?: number;
  marker?: string;
  ascendingOrder?: boolean;
}
export interface ListRoleAliasesResponse {
  roleAliases?: Array<string>;
  nextMarker?: string;
}
export interface ListSbomValidationResultsRequest {
  packageName: string;
  versionName: string;
  validationResult?: SbomValidationResult;
  maxResults?: number;
  nextToken?: string;
}
export interface ListSbomValidationResultsResponse {
  validationResultSummaries?: Array<SbomValidationResultSummary>;
  nextToken?: string;
}
export interface ListScheduledAuditsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface ListScheduledAuditsResponse {
  scheduledAudits?: Array<ScheduledAuditMetadata>;
  nextToken?: string;
}
export interface ListSecurityProfilesForTargetRequest {
  nextToken?: string;
  maxResults?: number;
  recursive?: boolean;
  securityProfileTargetArn: string;
}
export interface ListSecurityProfilesForTargetResponse {
  securityProfileTargetMappings?: Array<SecurityProfileTargetMapping>;
  nextToken?: string;
}
export interface ListSecurityProfilesRequest {
  nextToken?: string;
  maxResults?: number;
  dimensionName?: string;
  metricName?: string;
}
export interface ListSecurityProfilesResponse {
  securityProfileIdentifiers?: Array<SecurityProfileIdentifier>;
  nextToken?: string;
}
export interface ListStreamsRequest {
  maxResults?: number;
  nextToken?: string;
  ascendingOrder?: boolean;
}
export interface ListStreamsResponse {
  streams?: Array<StreamSummary>;
  nextToken?: string;
}
export type ListSuppressedAlerts = boolean;

export type ListSuppressedFindings = boolean;

export interface ListTagsForResourceRequest {
  resourceArn: string;
  nextToken?: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
  nextToken?: string;
}
export interface ListTargetsForPolicyRequest {
  policyName: string;
  marker?: string;
  pageSize?: number;
}
export interface ListTargetsForPolicyResponse {
  targets?: Array<string>;
  nextMarker?: string;
}
export interface ListTargetsForSecurityProfileRequest {
  securityProfileName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListTargetsForSecurityProfileResponse {
  securityProfileTargets?: Array<SecurityProfileTarget>;
  nextToken?: string;
}
export interface ListThingGroupsForThingRequest {
  thingName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListThingGroupsForThingResponse {
  thingGroups?: Array<GroupNameAndArn>;
  nextToken?: string;
}
export interface ListThingGroupsRequest {
  nextToken?: string;
  maxResults?: number;
  parentGroup?: string;
  namePrefixFilter?: string;
  recursive?: boolean;
}
export interface ListThingGroupsResponse {
  thingGroups?: Array<GroupNameAndArn>;
  nextToken?: string;
}
export interface ListThingPrincipalsRequest {
  nextToken?: string;
  maxResults?: number;
  thingName: string;
}
export interface ListThingPrincipalsResponse {
  principals?: Array<string>;
  nextToken?: string;
}
export interface ListThingPrincipalsV2Request {
  nextToken?: string;
  maxResults?: number;
  thingName: string;
  thingPrincipalType?: ThingPrincipalType;
}
export interface ListThingPrincipalsV2Response {
  thingPrincipalObjects?: Array<ThingPrincipalObject>;
  nextToken?: string;
}
export interface ListThingRegistrationTaskReportsRequest {
  taskId: string;
  reportType: ReportType;
  nextToken?: string;
  maxResults?: number;
}
export interface ListThingRegistrationTaskReportsResponse {
  resourceLinks?: Array<string>;
  reportType?: ReportType;
  nextToken?: string;
}
export interface ListThingRegistrationTasksRequest {
  nextToken?: string;
  maxResults?: number;
  status?: Status;
}
export interface ListThingRegistrationTasksResponse {
  taskIds?: Array<string>;
  nextToken?: string;
}
export interface ListThingsInBillingGroupRequest {
  billingGroupName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListThingsInBillingGroupResponse {
  things?: Array<string>;
  nextToken?: string;
}
export interface ListThingsInThingGroupRequest {
  thingGroupName: string;
  recursive?: boolean;
  nextToken?: string;
  maxResults?: number;
}
export interface ListThingsInThingGroupResponse {
  things?: Array<string>;
  nextToken?: string;
}
export interface ListThingsRequest {
  nextToken?: string;
  maxResults?: number;
  attributeName?: string;
  attributeValue?: string;
  thingTypeName?: string;
  usePrefixAttributeValue?: boolean;
}
export interface ListThingsResponse {
  things?: Array<ThingAttribute>;
  nextToken?: string;
}
export interface ListThingTypesRequest {
  nextToken?: string;
  maxResults?: number;
  thingTypeName?: string;
}
export interface ListThingTypesResponse {
  thingTypes?: Array<ThingTypeDefinition>;
  nextToken?: string;
}
export interface ListTopicRuleDestinationsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListTopicRuleDestinationsResponse {
  destinationSummaries?: Array<TopicRuleDestinationSummary>;
  nextToken?: string;
}
export interface ListTopicRulesRequest {
  topic?: string;
  maxResults?: number;
  nextToken?: string;
  ruleDisabled?: boolean;
}
export interface ListTopicRulesResponse {
  rules?: Array<TopicRuleListItem>;
  nextToken?: string;
}
export interface ListV2LoggingLevelsRequest {
  targetType?: LogTargetType;
  nextToken?: string;
  maxResults?: number;
}
export interface ListV2LoggingLevelsResponse {
  logTargetConfigurations?: Array<LogTargetConfiguration>;
  nextToken?: string;
}
export interface ListViolationEventsRequest {
  startTime: Date | string;
  endTime: Date | string;
  thingName?: string;
  securityProfileName?: string;
  behaviorCriteriaType?: BehaviorCriteriaType;
  listSuppressedAlerts?: boolean;
  verificationState?: VerificationState;
  nextToken?: string;
  maxResults?: number;
}
export interface ListViolationEventsResponse {
  violationEvents?: Array<ViolationEvent>;
  nextToken?: string;
}
export interface LocationAction {
  roleArn: string;
  trackerName: string;
  deviceId: string;
  timestamp?: LocationTimestamp;
  latitude: string;
  longitude: string;
}
export interface LocationTimestamp {
  value: string;
  unit?: string;
}
export interface LoggingOptionsPayload {
  roleArn: string;
  logLevel?: LogLevel;
}
export type LogGroupName = string;

export type LogLevel = "DEBUG" | "INFO" | "ERROR" | "WARN" | "DISABLED";
export interface LogTarget {
  targetType: LogTargetType;
  targetName?: string;
}
export interface LogTargetConfiguration {
  logTarget?: LogTarget;
  logLevel?: LogLevel;
}
export type LogTargetConfigurations = Array<LogTargetConfiguration>;
export type LogTargetName = string;

export type LogTargetType =
  | "DEFAULT"
  | "THING_GROUP"
  | "CLIENT_ID"
  | "SOURCE_IP"
  | "PRINCIPAL_ID";
export type LongParameterValue = number;

export interface MachineLearningDetectionConfig {
  confidenceLevel: ConfidenceLevel;
}
export interface MaintenanceWindow {
  startTime: string;
  durationInMinutes: number;
}
export type MaintenanceWindows = Array<MaintenanceWindow>;
export declare class MalformedPolicyException extends EffectData.TaggedError(
  "MalformedPolicyException",
)<{
  readonly message?: string;
}> {}
export type ManagedJobTemplateName = string;

export type ManagedJobTemplatesSummaryList = Array<ManagedJobTemplateSummary>;
export interface ManagedJobTemplateSummary {
  templateArn?: string;
  templateName?: string;
  description?: string;
  environments?: Array<string>;
  templateVersion?: string;
}
export type ManagedTemplateVersion = string;

export type Marker = string;

export type MaxBuckets = number;

export type Maximum = number;

export type MaximumPerMinute = number;

export type MaxJobExecutionsPerMin = number;

export type MaxResults = number;

export type Message = string;

export type MessageExpiry = string;

export type MessageFormat = "RAW" | "JSON";
export type MessageId = string;

export interface MetricDatum {
  timestamp?: Date | string;
  value?: MetricValue;
}
export type MetricDatumList = Array<MetricDatum>;
export interface MetricDimension {
  dimensionName: string;
  operator?: DimensionValueOperator;
}
export type MetricName = string;

export type MetricNames = Array<string>;
export interface MetricsExportConfig {
  mqttTopic: string;
  roleArn: string;
}
export interface MetricToRetain {
  metric: string;
  metricDimension?: MetricDimension;
  exportMetric?: boolean;
}
export interface MetricValue {
  count?: number;
  cidrs?: Array<string>;
  ports?: Array<number>;
  number?: number;
  numbers?: Array<number>;
  strings?: Array<string>;
}
export type MimeType = string;

export type Minimum = number;

export type MinimumNumberOfExecutedThings = number;

export type MissingContextValue = string;

export type MissingContextValues = Array<string>;
export interface MitigationAction {
  name?: string;
  id?: string;
  roleArn?: string;
  actionParams?: MitigationActionParams;
}
export type MitigationActionArn = string;

export type MitigationActionId = string;

export interface MitigationActionIdentifier {
  actionName?: string;
  actionArn?: string;
  creationDate?: Date | string;
}
export type MitigationActionIdentifierList = Array<MitigationActionIdentifier>;
export type MitigationActionList = Array<MitigationAction>;
export type MitigationActionName = string;

export type MitigationActionNameList = Array<string>;
export interface MitigationActionParams {
  updateDeviceCertificateParams?: UpdateDeviceCertificateParams;
  updateCACertificateParams?: UpdateCACertificateParams;
  addThingsToThingGroupParams?: AddThingsToThingGroupParams;
  replaceDefaultPolicyVersionParams?: ReplaceDefaultPolicyVersionParams;
  enableIoTLoggingParams?: EnableIoTLoggingParams;
  publishFindingToSnsParams?: PublishFindingToSnsParams;
}
export type MitigationActionsTaskId = string;

export type MitigationActionType =
  | "UPDATE_DEVICE_CERTIFICATE"
  | "UPDATE_CA_CERTIFICATE"
  | "ADD_THINGS_TO_THING_GROUP"
  | "REPLACE_DEFAULT_POLICY_VERSION"
  | "ENABLE_IOT_LOGGING"
  | "PUBLISH_FINDING_TO_SNS";
export type ModelStatus = "PENDING_BUILD" | "ACTIVE" | "EXPIRED";
export interface Mqtt5Configuration {
  propagatingAttributes?: Array<PropagatingAttribute>;
}
export type MqttClientId = string;

export interface MqttContext {
  username?: string;
  password?: Uint8Array | string;
  clientId?: string;
}
export interface MqttHeaders {
  payloadFormatIndicator?: string;
  contentType?: string;
  responseTopic?: string;
  correlationData?: string;
  messageExpiry?: string;
  userProperties?: Array<UserProperty>;
}
export type MqttPassword = Uint8Array | string;

export type MqttTopic = string;

export type MqttUsername = string;

export type NamedShadowIndexingMode = "OFF" | "ON";
export type NamedShadowNamesFilter = Array<string>;
export type NamespaceId = string;

export type NextToken = string;

export type NonCompliantChecksCount = number;

export interface NonCompliantResource {
  resourceType?: ResourceType;
  resourceIdentifier?: ResourceIdentifier;
  additionalInfo?: Record<string, string>;
}
export type NonCompliantResourcesCount = number;

export declare class NotConfiguredException extends EffectData.TaggedError(
  "NotConfiguredException",
)<{
  readonly message?: string;
}> {}
export type NullableBoolean = boolean;

export type IotNumber = number;

export type NumberList = Array<number>;
export type NumberOfRetries = number;

export type NumberOfThings = number;

export type OCSPLambdaArn = string;

export interface OpenSearchAction {
  roleArn: string;
  endpoint: string;
  index: string;
  type: string;
  id: string;
}
export type Optional = boolean;

export type OptionalVersion = number;

export type OTAUpdateArn = string;

export type OTAUpdateDescription = string;

export type OTAUpdateErrorMessage = string;

export interface OTAUpdateFile {
  fileName?: string;
  fileType?: number;
  fileVersion?: string;
  fileLocation?: FileLocation;
  codeSigning?: CodeSigning;
  attributes?: Record<string, string>;
}
export type OTAUpdateFiles = Array<OTAUpdateFile>;
export type OTAUpdateFileVersion = string;

export type OTAUpdateId = string;

export interface OTAUpdateInfo {
  otaUpdateId?: string;
  otaUpdateArn?: string;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
  description?: string;
  targets?: Array<string>;
  protocols?: Array<Protocol>;
  awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;
  awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;
  targetSelection?: TargetSelection;
  otaUpdateFiles?: Array<OTAUpdateFile>;
  otaUpdateStatus?: OTAUpdateStatus;
  awsIotJobId?: string;
  awsIotJobArn?: string;
  errorInfo?: ErrorInfo;
  additionalParameters?: Record<string, string>;
}
export type OTAUpdatesSummary = Array<OTAUpdateSummary>;
export type OTAUpdateStatus =
  | "CREATE_PENDING"
  | "CREATE_IN_PROGRESS"
  | "CREATE_COMPLETE"
  | "CREATE_FAILED"
  | "DELETE_IN_PROGRESS"
  | "DELETE_FAILED";
export interface OTAUpdateSummary {
  otaUpdateId?: string;
  otaUpdateArn?: string;
  creationDate?: Date | string;
}
export interface OutgoingCertificate {
  certificateArn?: string;
  certificateId?: string;
  transferredTo?: string;
  transferDate?: Date | string;
  transferMessage?: string;
  creationDate?: Date | string;
}
export type OutgoingCertificates = Array<OutgoingCertificate>;
export type OverrideDynamicGroups = boolean;

export type PackageArn = string;

export type PackageCatalogMaxResults = number;

export type PackageName = string;

export interface PackageSummary {
  packageName?: string;
  defaultVersionName?: string;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
}
export type PackageSummaryList = Array<PackageSummary>;
export type PackageVersionAction = "PUBLISH" | "DEPRECATE";
export type PackageVersionArn = string;

export interface PackageVersionArtifact {
  s3Location?: S3Location;
}
export type PackageVersionErrorReason = string;

export type PackageVersionRecipe = string;

export type PackageVersionStatus = "DRAFT" | "PUBLISHED" | "DEPRECATED";
export interface PackageVersionSummary {
  packageName?: string;
  versionName?: string;
  status?: PackageVersionStatus;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
}
export type PackageVersionSummaryList = Array<PackageVersionSummary>;
export type PageSize = number;

export type Parameter = string;

export type ParameterKey = string;

export type ParameterMap = Record<string, string>;
export type Parameters = Record<string, string>;
export type ParameterValue = string;

export type PartitionKey = string;

export type PayloadField = string;

export type PayloadFormatIndicator = string;

export type PayloadVersion = string;

export type Percent = number;

export type Percentage = number;

export type Percentiles = Array<PercentPair>;
export type PercentList = Array<number>;
export interface PercentPair {
  percent?: number;
  value?: number;
}
export type PercentValue = number;

export type Platform = string;

export type Policies = Array<Policy>;
export interface Policy {
  policyName?: string;
  policyArn?: string;
}
export type PolicyArn = string;

export type PolicyDocument = string;

export type PolicyDocuments = Array<string>;
export type PolicyName = string;

export type PolicyNames = Array<string>;
export type PolicyTarget = string;

export type PolicyTargets = Array<string>;
export type PolicyTemplateName = "BLANK_POLICY";
export interface PolicyVersion {
  versionId?: string;
  isDefaultVersion?: boolean;
  createDate?: Date | string;
}
export type PolicyVersionId = string;

export interface PolicyVersionIdentifier {
  policyName?: string;
  policyVersionId?: string;
}
export type PolicyVersions = Array<PolicyVersion>;
export type Port = number;

export type Ports = Array<number>;
export type Prefix = string;

export interface PresignedUrlConfig {
  roleArn?: string;
  expiresInSec?: number;
}
export type PrimitiveBoolean = boolean;

export type Principal = string;

export type PrincipalArn = string;

export type PrincipalId = string;

export type Principals = Array<string>;
export interface PrincipalThingObject {
  thingName: string;
  thingPrincipalType?: ThingPrincipalType;
}
export type PrincipalThingObjects = Array<PrincipalThingObject>;
export type PrivateKey = string;

export type ProcessingTargetName = string;

export type ProcessingTargetNameList = Array<string>;
export interface PropagatingAttribute {
  userPropertyKey?: string;
  thingAttribute?: string;
  connectionAttribute?: string;
}
export type PropagatingAttributeList = Array<PropagatingAttribute>;
export type Protocol = "MQTT" | "HTTP";
export type Protocols = Array<Protocol>;
export interface ProvisioningHook {
  payloadVersion?: string;
  targetArn: string;
}
export type ProvisioningTemplateListing = Array<ProvisioningTemplateSummary>;
export interface ProvisioningTemplateSummary {
  templateArn?: string;
  templateName?: string;
  description?: string;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
  enabled?: boolean;
  type?: TemplateType;
}
export type ProvisioningTemplateVersionListing =
  Array<ProvisioningTemplateVersionSummary>;
export interface ProvisioningTemplateVersionSummary {
  versionId?: number;
  creationDate?: Date | string;
  isDefaultVersion?: boolean;
}
export type PublicKey = string;

export type PublicKeyMap = Record<string, string>;
export interface PublishFindingToSnsParams {
  topicArn: string;
}
export interface PutAssetPropertyValueEntry {
  entryId?: string;
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
  propertyValues: Array<AssetPropertyValue>;
}
export type PutAssetPropertyValueEntryList = Array<PutAssetPropertyValueEntry>;
export interface PutItemInput {
  tableName: string;
}
export interface PutVerificationStateOnViolationRequest {
  violationId: string;
  verificationState: VerificationState;
  verificationStateDescription?: string;
}
export interface PutVerificationStateOnViolationResponse {}
export type Qos = number;

export type QueryMaxResults = number;

export type QueryString = string;

export type QueryVersion = string;

export type QueuedThings = number;

export type QueueUrl = string;

export type RangeKeyField = string;

export type RangeKeyValue = string;

export interface RateIncreaseCriteria {
  numberOfNotifiedThings?: number;
  numberOfSucceededThings?: number;
}
export type ReasonCode = string;

export type ReasonForNonCompliance = string;

export type ReasonForNonComplianceCode = string;

export type ReasonForNonComplianceCodes = Array<string>;
export type Recursive = boolean;

export type RecursiveWithoutDefault = boolean;

export type Regex = string;

export interface RegisterCACertificateRequest {
  caCertificate: string;
  verificationCertificate?: string;
  setAsActive?: boolean;
  allowAutoRegistration?: boolean;
  registrationConfig?: RegistrationConfig;
  tags?: Array<Tag>;
  certificateMode?: CertificateMode;
}
export interface RegisterCACertificateResponse {
  certificateArn?: string;
  certificateId?: string;
}
export interface RegisterCertificateRequest {
  certificatePem: string;
  caCertificatePem?: string;
  setAsActive?: boolean;
  status?: CertificateStatus;
}
export interface RegisterCertificateResponse {
  certificateArn?: string;
  certificateId?: string;
}
export interface RegisterCertificateWithoutCARequest {
  certificatePem: string;
  status?: CertificateStatus;
}
export interface RegisterCertificateWithoutCAResponse {
  certificateArn?: string;
  certificateId?: string;
}
export interface RegisterThingRequest {
  templateBody: string;
  parameters?: Record<string, string>;
}
export interface RegisterThingResponse {
  certificatePem?: string;
  resourceArns?: Record<string, string>;
}
export type RegistrationCode = string;

export declare class RegistrationCodeValidationException extends EffectData.TaggedError(
  "RegistrationCodeValidationException",
)<{
  readonly message?: string;
}> {}
export interface RegistrationConfig {
  templateBody?: string;
  roleArn?: string;
  templateName?: string;
}
export type RegistryMaxResults = number;

export type RegistryS3BucketName = string;

export type RegistryS3KeyName = string;

export interface RejectCertificateTransferRequest {
  certificateId: string;
  rejectReason?: string;
}
export type RejectedThings = number;

export interface RelatedResource {
  resourceType?: ResourceType;
  resourceIdentifier?: ResourceIdentifier;
  additionalInfo?: Record<string, string>;
}
export type RelatedResources = Array<RelatedResource>;
export type RemoveAuthorizerConfig = boolean;

export type RemoveAutoRegistration = boolean;

export type RemovedThings = number;

export type RemoveHook = boolean;

export interface RemoveThingFromBillingGroupRequest {
  billingGroupName?: string;
  billingGroupArn?: string;
  thingName?: string;
  thingArn?: string;
}
export interface RemoveThingFromBillingGroupResponse {}
export interface RemoveThingFromThingGroupRequest {
  thingGroupName?: string;
  thingGroupArn?: string;
  thingName?: string;
  thingArn?: string;
}
export interface RemoveThingFromThingGroupResponse {}
export type RemoveThingType = boolean;

export interface ReplaceDefaultPolicyVersionParams {
  templateName: PolicyTemplateName;
}
export interface ReplaceTopicRuleRequest {
  ruleName: string;
  topicRulePayload: TopicRulePayload;
}
export type ReportType = "ERRORS" | "RESULTS";
export interface RepublishAction {
  roleArn: string;
  topic: string;
  qos?: number;
  headers?: MqttHeaders;
}
export type ReservedDomainConfigurationName = string;

export type Resource = string;

export declare class ResourceAlreadyExistsException extends EffectData.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly message?: string;
  readonly resourceId?: string;
  readonly resourceArn?: string;
}> {}
export type ResourceArn = string;

export type ResourceArns = Record<string, string>;
export type ResourceAttributeKey = string;

export type ResourceAttributes = Record<string, string>;
export type ResourceAttributeValue = string;

export type ResourceDescription = string;

export type resourceId = string;

export interface ResourceIdentifier {
  deviceCertificateId?: string;
  caCertificateId?: string;
  cognitoIdentityPoolId?: string;
  clientId?: string;
  policyVersionIdentifier?: PolicyVersionIdentifier;
  account?: string;
  iamRoleArn?: string;
  roleAliasArn?: string;
  issuerCertificateIdentifier?: IssuerCertificateIdentifier;
  deviceCertificateArn?: string;
}
export type ResourceLogicalId = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export declare class ResourceRegistrationFailureException extends EffectData.TaggedError(
  "ResourceRegistrationFailureException",
)<{
  readonly message?: string;
}> {}
export type Resources = Array<string>;
export type ResourceType =
  | "DEVICE_CERTIFICATE"
  | "CA_CERTIFICATE"
  | "IOT_POLICY"
  | "COGNITO_IDENTITY_POOL"
  | "CLIENT_ID"
  | "ACCOUNT_SETTINGS"
  | "ROLE_ALIAS"
  | "IAM_ROLE"
  | "ISSUER_CERTIFICATE";
export type ResponseTopic = string;

export type RetryableFailureType = "FAILED" | "TIMED_OUT" | "ALL";
export type RetryAttempt = number;

export interface RetryCriteria {
  failureType: RetryableFailureType;
  numberOfRetries: number;
}
export type RetryCriteriaList = Array<RetryCriteria>;
export type RoleAlias = string;

export type RoleAliasArn = string;

export interface RoleAliasDescription {
  roleAlias?: string;
  roleAliasArn?: string;
  roleArn?: string;
  owner?: string;
  credentialDurationSeconds?: number;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
}
export type RoleAliases = Array<string>;
export type RoleArn = string;

export type RolloutRatePerMinute = number;

export type RuleArn = string;

export type RuleName = string;

export interface S3Action {
  roleArn: string;
  bucketName: string;
  key: string;
  cannedAcl?: CannedAccessControlList;
}
export type S3Bucket = string;

export interface S3Destination {
  bucket?: string;
  prefix?: string;
}
export type S3FileUrl = string;

export type S3FileUrlList = Array<string>;
export type S3Key = string;

export interface S3Location {
  bucket?: string;
  key?: string;
  version?: string;
}
export type S3Version = string;

export interface SalesforceAction {
  token: string;
  url: string;
}
export type SalesforceEndpoint = string;

export type SalesforceToken = string;

export interface Sbom {
  s3Location?: S3Location;
}
export type SbomValidationErrorCode =
  | "INCOMPATIBLE_FORMAT"
  | "FILE_SIZE_LIMIT_EXCEEDED";
export type SbomValidationErrorMessage = string;

export type SbomValidationResult = "FAILED" | "SUCCEEDED";
export interface SbomValidationResultSummary {
  fileName?: string;
  validationResult?: SbomValidationResult;
  errorCode?: SbomValidationErrorCode;
  errorMessage?: string;
}
export type SbomValidationResultSummaryList =
  Array<SbomValidationResultSummary>;
export type SbomValidationStatus = "IN_PROGRESS" | "FAILED" | "SUCCEEDED";
export type ScheduledAuditArn = string;

export interface ScheduledAuditMetadata {
  scheduledAuditName?: string;
  scheduledAuditArn?: string;
  frequency?: AuditFrequency;
  dayOfMonth?: string;
  dayOfWeek?: DayOfWeek;
}
export type ScheduledAuditMetadataList = Array<ScheduledAuditMetadata>;
export type ScheduledAuditName = string;

export interface ScheduledJobRollout {
  startTime?: string;
}
export type ScheduledJobRolloutList = Array<ScheduledJobRollout>;
export interface SchedulingConfig {
  startTime?: string;
  endTime?: string;
  endBehavior?: JobEndBehavior;
  maintenanceWindows?: Array<MaintenanceWindow>;
}
export type SearchableAttributes = Array<string>;
export interface SearchIndexRequest {
  indexName?: string;
  queryString: string;
  nextToken?: string;
  maxResults?: number;
  queryVersion?: string;
}
export interface SearchIndexResponse {
  nextToken?: string;
  things?: Array<ThingDocument>;
  thingGroups?: Array<ThingGroupDocument>;
}
export type SearchQueryMaxResults = number;

export type Seconds = number;

export type SecurityGroupId = string;

export type SecurityGroupList = Array<string>;
export type SecurityPolicy = string;

export type SecurityProfileArn = string;

export type SecurityProfileDescription = string;

export interface SecurityProfileIdentifier {
  name: string;
  arn: string;
}
export type SecurityProfileIdentifiers = Array<SecurityProfileIdentifier>;
export type SecurityProfileName = string;

export interface SecurityProfileTarget {
  arn: string;
}
export type SecurityProfileTargetArn = string;

export interface SecurityProfileTargetMapping {
  securityProfileIdentifier?: SecurityProfileIdentifier;
  target?: SecurityProfileTarget;
}
export type SecurityProfileTargetMappings = Array<SecurityProfileTargetMapping>;
export type SecurityProfileTargets = Array<SecurityProfileTarget>;
export type ServerCertificateArns = Array<string>;
export interface ServerCertificateConfig {
  enableOCSPCheck?: boolean;
  ocspLambdaArn?: string;
  ocspAuthorizedResponderArn?: string;
}
export type ServerCertificates = Array<ServerCertificateSummary>;
export type ServerCertificateStatus = "INVALID" | "VALID";
export type ServerCertificateStatusDetail = string;

export interface ServerCertificateSummary {
  serverCertificateArn?: string;
  serverCertificateStatus?: ServerCertificateStatus;
  serverCertificateStatusDetail?: string;
}
export type ServerName = string;

export type ServiceName = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export type ServiceType = "DATA" | "CREDENTIAL_PROVIDER" | "JOBS";
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export type SetAsActive = boolean;

export type SetAsActiveFlag = boolean;

export type SetAsDefault = boolean;

export interface SetDefaultAuthorizerRequest {
  authorizerName: string;
}
export interface SetDefaultAuthorizerResponse {
  authorizerName?: string;
  authorizerArn?: string;
}
export interface SetDefaultPolicyVersionRequest {
  policyName: string;
  policyVersionId: string;
}
export interface SetLoggingOptionsRequest {
  loggingOptionsPayload: LoggingOptionsPayload;
}
export interface SetV2LoggingLevelRequest {
  logTarget: LogTarget;
  logLevel: LogLevel;
}
export interface SetV2LoggingOptionsRequest {
  roleArn?: string;
  defaultLogLevel?: LogLevel;
  disableAllLogs?: boolean;
}
export type ShadowName = string;

export type Signature = Uint8Array | string;

export type SignatureAlgorithm = string;

export type SigningJobId = string;

export type SigningProfileName = string;

export interface SigningProfileParameter {
  certificateArn?: string;
  platform?: string;
  certificatePathOnDevice?: string;
}
export type SigningRegion = string;

export interface SigV4Authorization {
  signingRegion: string;
  serviceName: string;
  roleArn: string;
}
export type SkippedFindingsCount = number;

export type SkyfallMaxResults = number;

export interface SnsAction {
  targetArn: string;
  roleArn: string;
  messageFormat?: MessageFormat;
}
export type SnsTopicArn = string;

export type SortOrder = "Ascending" | "Descending";
export type SQL = string;

export declare class SqlParseException extends EffectData.TaggedError(
  "SqlParseException",
)<{
  readonly message?: string;
}> {}
export interface SqsAction {
  roleArn: string;
  queueUrl: string;
  useBase64?: boolean;
}
export interface StartAuditMitigationActionsTaskRequest {
  taskId: string;
  target: AuditMitigationActionsTaskTarget;
  auditCheckToActionsMapping: Record<string, Array<string>>;
  clientRequestToken: string;
}
export interface StartAuditMitigationActionsTaskResponse {
  taskId?: string;
}
export interface StartDetectMitigationActionsTaskRequest {
  taskId: string;
  target: DetectMitigationActionsTaskTarget;
  actions: Array<string>;
  violationEventOccurrenceRange?: ViolationEventOccurrenceRange;
  includeOnlyActiveViolations?: boolean;
  includeSuppressedAlerts?: boolean;
  clientRequestToken: string;
}
export interface StartDetectMitigationActionsTaskResponse {
  taskId?: string;
}
export interface StartOnDemandAuditTaskRequest {
  targetCheckNames: Array<string>;
}
export interface StartOnDemandAuditTaskResponse {
  taskId?: string;
}
export interface StartSigningJobParameter {
  signingProfileParameter?: SigningProfileParameter;
  signingProfileName?: string;
  destination?: Destination;
}
export interface StartThingRegistrationTaskRequest {
  templateBody: string;
  inputFileBucket: string;
  inputFileKey: string;
  roleArn: string;
}
export interface StartThingRegistrationTaskResponse {
  taskId?: string;
}
export type StateMachineName = string;

export type StateReason = string;

export type StateValue = string;

export interface StatisticalThreshold {
  statistic?: string;
}
export interface Statistics {
  count?: number;
  average?: number;
  sum?: number;
  minimum?: number;
  maximum?: number;
  sumOfSquares?: number;
  variance?: number;
  stdDeviation?: number;
}
export type Status =
  | "InProgress"
  | "Completed"
  | "Failed"
  | "Cancelled"
  | "Cancelling";
export type StatusCode = number;

export interface StatusReason {
  reasonCode: string;
  reasonDescription?: string;
}
export type StatusReasonCode = string;

export type StatusReasonDescription = string;

export type StdDeviation = number;

export interface StepFunctionsAction {
  executionNamePrefix?: string;
  stateMachineName: string;
  roleArn: string;
}
export interface StopThingRegistrationTaskRequest {
  taskId: string;
}
export interface StopThingRegistrationTaskResponse {}
export interface Stream {
  streamId?: string;
  fileId?: number;
}
export type StreamArn = string;

export type StreamDescription = string;

export interface StreamFile {
  fileId?: number;
  s3Location?: S3Location;
}
export type StreamFiles = Array<StreamFile>;
export type StreamId = string;

export interface StreamInfo {
  streamId?: string;
  streamArn?: string;
  streamVersion?: number;
  description?: string;
  files?: Array<StreamFile>;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  roleArn?: string;
}
export type StreamName = string;

export type StreamsSummary = Array<StreamSummary>;
export interface StreamSummary {
  streamId?: string;
  streamArn?: string;
  streamVersion?: number;
  description?: string;
}
export type StreamVersion = number;

export type IotString = string;

export type StringCommandExecutionResult = string;

export type StringDateTime = string;

export type StringList = Array<string>;
export type StringMap = Record<string, string>;
export type StringParameterValue = string;

export type stringValue = string;

export type SubnetId = string;

export type SubnetIdList = Array<string>;
export type SucceededFindingsCount = number;

export type SucceededThings = number;

export type Sum = number;

export type SumOfSquares = number;

export type SuppressAlerts = boolean;

export type SuppressedNonCompliantResourcesCount = number;

export type SuppressIndefinitely = boolean;

export type TableName = string;

export interface Tag {
  Key: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export type Target = string;

export type TargetArn = string;

export type TargetAuditCheckNames = Array<string>;
export type TargetFieldName = string;

export type TargetFieldOrder = "LatLon" | "LonLat";
export type Targets = Array<string>;
export type TargetSelection = "CONTINUOUS" | "SNAPSHOT";
export type TargetViolationIdsForDetectMitigationActions = Array<string>;
export declare class TaskAlreadyExistsException extends EffectData.TaggedError(
  "TaskAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type TaskId = string;

export type TaskIdList = Array<string>;
export interface TaskStatistics {
  totalChecks?: number;
  inProgressChecks?: number;
  waitingForDataCollectionChecks?: number;
  compliantChecks?: number;
  nonCompliantChecks?: number;
  failedChecks?: number;
  canceledChecks?: number;
}
export interface TaskStatisticsForAuditCheck {
  totalFindingsCount?: number;
  failedFindingsCount?: number;
  succeededFindingsCount?: number;
  skippedFindingsCount?: number;
  canceledFindingsCount?: number;
}
export type TemplateArn = string;

export type TemplateBody = string;

export type TemplateDescription = string;

export type TemplateName = string;

export type TemplateType = "FLEET_PROVISIONING" | "JITP";
export type TemplateVersionId = number;

export interface TermsAggregation {
  maxBuckets?: number;
}
export interface TestAuthorizationRequest {
  principal?: string;
  cognitoIdentityPoolId?: string;
  authInfos: Array<AuthInfo>;
  clientId?: string;
  policyNamesToAdd?: Array<string>;
  policyNamesToSkip?: Array<string>;
}
export interface TestAuthorizationResponse {
  authResults?: Array<AuthResult>;
}
export interface TestInvokeAuthorizerRequest {
  authorizerName: string;
  token?: string;
  tokenSignature?: string;
  httpContext?: HttpContext;
  mqttContext?: MqttContext;
  tlsContext?: TlsContext;
}
export interface TestInvokeAuthorizerResponse {
  isAuthenticated?: boolean;
  principalId?: string;
  policyDocuments?: Array<string>;
  refreshAfterInSeconds?: number;
  disconnectAfterInSeconds?: number;
}
export type ThingArn = string;

export interface ThingAttribute {
  thingName?: string;
  thingTypeName?: string;
  thingArn?: string;
  attributes?: Record<string, string>;
  version?: number;
}
export type ThingAttributeList = Array<ThingAttribute>;
export interface ThingConnectivity {
  connected?: boolean;
  timestamp?: number;
  disconnectReason?: string;
}
export type ThingConnectivityIndexingMode = "OFF" | "STATUS";
export interface ThingDocument {
  thingName?: string;
  thingId?: string;
  thingTypeName?: string;
  thingGroupNames?: Array<string>;
  attributes?: Record<string, string>;
  shadow?: string;
  deviceDefender?: string;
  connectivity?: ThingConnectivity;
}
export type ThingDocumentList = Array<ThingDocument>;
export type ThingGroupArn = string;

export type ThingGroupDescription = string;

export interface ThingGroupDocument {
  thingGroupName?: string;
  thingGroupId?: string;
  thingGroupDescription?: string;
  attributes?: Record<string, string>;
  parentGroupNames?: Array<string>;
}
export type ThingGroupDocumentList = Array<ThingGroupDocument>;
export type ThingGroupId = string;

export interface ThingGroupIndexingConfiguration {
  thingGroupIndexingMode: ThingGroupIndexingMode;
  managedFields?: Array<Field>;
  customFields?: Array<Field>;
}
export type ThingGroupIndexingMode = "OFF" | "ON";
export type ThingGroupList = Array<string>;
export interface ThingGroupMetadata {
  parentGroupName?: string;
  rootToParentThingGroups?: Array<GroupNameAndArn>;
  creationDate?: Date | string;
}
export type ThingGroupName = string;

export type ThingGroupNameAndArnList = Array<GroupNameAndArn>;
export type ThingGroupNameList = Array<string>;
export type ThingGroupNames = Array<string>;
export interface ThingGroupProperties {
  thingGroupDescription?: string;
  attributePayload?: AttributePayload;
}
export type ThingId = string;

export interface ThingIndexingConfiguration {
  thingIndexingMode: ThingIndexingMode;
  thingConnectivityIndexingMode?: ThingConnectivityIndexingMode;
  deviceDefenderIndexingMode?: DeviceDefenderIndexingMode;
  namedShadowIndexingMode?: NamedShadowIndexingMode;
  managedFields?: Array<Field>;
  customFields?: Array<Field>;
  filter?: IndexingFilter;
}
export type ThingIndexingMode = "OFF" | "REGISTRY" | "REGISTRY_AND_SHADOW";
export type ThingName = string;

export type ThingNameList = Array<string>;
export interface ThingPrincipalObject {
  principal: string;
  thingPrincipalType?: ThingPrincipalType;
}
export type ThingPrincipalObjects = Array<ThingPrincipalObject>;
export type ThingPrincipalType = "EXCLUSIVE_THING" | "NON_EXCLUSIVE_THING";
export type ThingTypeArn = string;

export interface ThingTypeDefinition {
  thingTypeName?: string;
  thingTypeArn?: string;
  thingTypeProperties?: ThingTypeProperties;
  thingTypeMetadata?: ThingTypeMetadata;
}
export type ThingTypeDescription = string;

export type ThingTypeId = string;

export type ThingTypeList = Array<ThingTypeDefinition>;
export interface ThingTypeMetadata {
  deprecated?: boolean;
  deprecationDate?: Date | string;
  creationDate?: Date | string;
}
export type ThingTypeName = string;

export interface ThingTypeProperties {
  thingTypeDescription?: string;
  searchableAttributes?: Array<string>;
  mqtt5Configuration?: Mqtt5Configuration;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type TimedOutThings = number;

export interface TimeFilter {
  after?: string;
  before?: string;
}
export interface TimeoutConfig {
  inProgressTimeoutInMinutes?: number;
}
export type Timestamp = Date | string;

export interface TimestreamAction {
  roleArn: string;
  databaseName: string;
  tableName: string;
  dimensions: Array<TimestreamDimension>;
  timestamp?: TimestreamTimestamp;
}
export type TimestreamDatabaseName = string;

export interface TimestreamDimension {
  name: string;
  value: string;
}
export type TimestreamDimensionList = Array<TimestreamDimension>;
export type TimestreamDimensionName = string;

export type TimestreamDimensionValue = string;

export type TimestreamTableName = string;

export interface TimestreamTimestamp {
  value: string;
  unit: string;
}
export type TimestreamTimestampUnit = string;

export type TimestreamTimestampValue = string;

export type TinyMaxResults = number;

export interface TlsConfig {
  securityPolicy?: string;
}
export interface TlsContext {
  serverName?: string;
}
export type Token = string;

export type TokenKeyName = string;

export type TokenSignature = string;

export type Topic = string;

export type TopicPattern = string;

export interface TopicRule {
  ruleName?: string;
  sql?: string;
  description?: string;
  createdAt?: Date | string;
  actions?: Array<Action>;
  ruleDisabled?: boolean;
  awsIotSqlVersion?: string;
  errorAction?: Action;
}
export interface TopicRuleDestination {
  arn?: string;
  status?: TopicRuleDestinationStatus;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  statusReason?: string;
  httpUrlProperties?: HttpUrlDestinationProperties;
  vpcProperties?: VpcDestinationProperties;
}
export interface TopicRuleDestinationConfiguration {
  httpUrlConfiguration?: HttpUrlDestinationConfiguration;
  vpcConfiguration?: VpcDestinationConfiguration;
}
export type TopicRuleDestinationMaxResults = number;

export type TopicRuleDestinationStatus =
  | "ENABLED"
  | "IN_PROGRESS"
  | "DISABLED"
  | "ERROR"
  | "DELETING";
export type TopicRuleDestinationSummaries = Array<TopicRuleDestinationSummary>;
export interface TopicRuleDestinationSummary {
  arn?: string;
  status?: TopicRuleDestinationStatus;
  createdAt?: Date | string;
  lastUpdatedAt?: Date | string;
  statusReason?: string;
  httpUrlSummary?: HttpUrlDestinationSummary;
  vpcDestinationSummary?: VpcDestinationSummary;
}
export type TopicRuleList = Array<TopicRuleListItem>;
export interface TopicRuleListItem {
  ruleArn?: string;
  ruleName?: string;
  topicPattern?: string;
  createdAt?: Date | string;
  ruleDisabled?: boolean;
}
export type TopicRuleMaxResults = number;

export interface TopicRulePayload {
  sql: string;
  description?: string;
  actions: Array<Action>;
  ruleDisabled?: boolean;
  awsIotSqlVersion?: string;
  errorAction?: Action;
}
export type TotalChecksCount = number;

export type TotalFindingsCount = number;

export type TotalResourcesCount = number;

export declare class TransferAlreadyCompletedException extends EffectData.TaggedError(
  "TransferAlreadyCompletedException",
)<{
  readonly message?: string;
}> {}
export interface TransferCertificateRequest {
  certificateId: string;
  targetAwsAccount: string;
  transferMessage?: string;
}
export interface TransferCertificateResponse {
  transferredCertificateArn?: string;
}
export declare class TransferConflictException extends EffectData.TaggedError(
  "TransferConflictException",
)<{
  readonly message?: string;
}> {}
export interface TransferData {
  transferMessage?: string;
  rejectReason?: string;
  transferDate?: Date | string;
  acceptDate?: Date | string;
  rejectDate?: Date | string;
}
export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly message?: string;
}> {}
export type UndoDeprecate = boolean;

export type UnsetDefaultVersion = boolean;

export type UnsignedLong = number;

export type UnsignedLongParameterValue = string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateAccountAuditConfigurationRequest {
  roleArn?: string;
  auditNotificationTargetConfigurations?: Record<
    AuditNotificationType,
    AuditNotificationTarget
  >;
  auditCheckConfigurations?: Record<string, AuditCheckConfiguration>;
}
export interface UpdateAccountAuditConfigurationResponse {}
export interface UpdateAuditSuppressionRequest {
  checkName: string;
  resourceIdentifier: ResourceIdentifier;
  expirationDate?: Date | string;
  suppressIndefinitely?: boolean;
  description?: string;
}
export interface UpdateAuditSuppressionResponse {}
export interface UpdateAuthorizerRequest {
  authorizerName: string;
  authorizerFunctionArn?: string;
  tokenKeyName?: string;
  tokenSigningPublicKeys?: Record<string, string>;
  status?: AuthorizerStatus;
  enableCachingForHttp?: boolean;
}
export interface UpdateAuthorizerResponse {
  authorizerName?: string;
  authorizerArn?: string;
}
export interface UpdateBillingGroupRequest {
  billingGroupName: string;
  billingGroupProperties: BillingGroupProperties;
  expectedVersion?: number;
}
export interface UpdateBillingGroupResponse {
  version?: number;
}
export interface UpdateCACertificateParams {
  action: CACertificateUpdateAction;
}
export interface UpdateCACertificateRequest {
  certificateId: string;
  newStatus?: CACertificateStatus;
  newAutoRegistrationStatus?: AutoRegistrationStatus;
  registrationConfig?: RegistrationConfig;
  removeAutoRegistration?: boolean;
}
export interface UpdateCertificateProviderRequest {
  certificateProviderName: string;
  lambdaFunctionArn?: string;
  accountDefaultForOperations?: Array<CertificateProviderOperation>;
}
export interface UpdateCertificateProviderResponse {
  certificateProviderName?: string;
  certificateProviderArn?: string;
}
export interface UpdateCertificateRequest {
  certificateId: string;
  newStatus: CertificateStatus;
}
export interface UpdateCommandRequest {
  commandId: string;
  displayName?: string;
  description?: string;
  deprecated?: boolean;
}
export interface UpdateCommandResponse {
  commandId?: string;
  displayName?: string;
  description?: string;
  deprecated?: boolean;
  lastUpdatedAt?: Date | string;
}
export interface UpdateCustomMetricRequest {
  metricName: string;
  displayName: string;
}
export interface UpdateCustomMetricResponse {
  metricName?: string;
  metricArn?: string;
  metricType?: CustomMetricType;
  displayName?: string;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
}
export interface UpdateDeviceCertificateParams {
  action: DeviceCertificateUpdateAction;
}
export interface UpdateDimensionRequest {
  name: string;
  stringValues: Array<string>;
}
export interface UpdateDimensionResponse {
  name?: string;
  arn?: string;
  type?: DimensionType;
  stringValues?: Array<string>;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
}
export interface UpdateDomainConfigurationRequest {
  domainConfigurationName: string;
  authorizerConfig?: AuthorizerConfig;
  domainConfigurationStatus?: DomainConfigurationStatus;
  removeAuthorizerConfig?: boolean;
  tlsConfig?: TlsConfig;
  serverCertificateConfig?: ServerCertificateConfig;
  authenticationType?: AuthenticationType;
  applicationProtocol?: ApplicationProtocol;
  clientCertificateConfig?: ClientCertificateConfig;
}
export interface UpdateDomainConfigurationResponse {
  domainConfigurationName?: string;
  domainConfigurationArn?: string;
}
export interface UpdateDynamicThingGroupRequest {
  thingGroupName: string;
  thingGroupProperties: ThingGroupProperties;
  expectedVersion?: number;
  indexName?: string;
  queryString?: string;
  queryVersion?: string;
}
export interface UpdateDynamicThingGroupResponse {
  version?: number;
}
export interface UpdateEventConfigurationsRequest {
  eventConfigurations?: Record<EventType, Configuration>;
}
export interface UpdateEventConfigurationsResponse {}
export interface UpdateFleetMetricRequest {
  metricName: string;
  queryString?: string;
  aggregationType?: AggregationType;
  period?: number;
  aggregationField?: string;
  description?: string;
  queryVersion?: string;
  indexName: string;
  unit?: FleetMetricUnit;
  expectedVersion?: number;
}
export interface UpdateIndexingConfigurationRequest {
  thingIndexingConfiguration?: ThingIndexingConfiguration;
  thingGroupIndexingConfiguration?: ThingGroupIndexingConfiguration;
}
export interface UpdateIndexingConfigurationResponse {}
export interface UpdateJobRequest {
  jobId: string;
  description?: string;
  presignedUrlConfig?: PresignedUrlConfig;
  jobExecutionsRolloutConfig?: JobExecutionsRolloutConfig;
  abortConfig?: AbortConfig;
  timeoutConfig?: TimeoutConfig;
  namespaceId?: string;
  jobExecutionsRetryConfig?: JobExecutionsRetryConfig;
}
export interface UpdateMitigationActionRequest {
  actionName: string;
  roleArn?: string;
  actionParams?: MitigationActionParams;
}
export interface UpdateMitigationActionResponse {
  actionArn?: string;
  actionId?: string;
}
export interface UpdatePackageConfigurationRequest {
  versionUpdateByJobsConfig?: VersionUpdateByJobsConfig;
  clientToken?: string;
}
export interface UpdatePackageConfigurationResponse {}
export interface UpdatePackageRequest {
  packageName: string;
  description?: string;
  defaultVersionName?: string;
  unsetDefaultVersion?: boolean;
  clientToken?: string;
}
export interface UpdatePackageResponse {}
export interface UpdatePackageVersionRequest {
  packageName: string;
  versionName: string;
  description?: string;
  attributes?: Record<string, string>;
  artifact?: PackageVersionArtifact;
  action?: PackageVersionAction;
  recipe?: string;
  clientToken?: string;
}
export interface UpdatePackageVersionResponse {}
export interface UpdateProvisioningTemplateRequest {
  templateName: string;
  description?: string;
  enabled?: boolean;
  defaultVersionId?: number;
  provisioningRoleArn?: string;
  preProvisioningHook?: ProvisioningHook;
  removePreProvisioningHook?: boolean;
}
export interface UpdateProvisioningTemplateResponse {}
export interface UpdateRoleAliasRequest {
  roleAlias: string;
  roleArn?: string;
  credentialDurationSeconds?: number;
}
export interface UpdateRoleAliasResponse {
  roleAlias?: string;
  roleAliasArn?: string;
}
export interface UpdateScheduledAuditRequest {
  frequency?: AuditFrequency;
  dayOfMonth?: string;
  dayOfWeek?: DayOfWeek;
  targetCheckNames?: Array<string>;
  scheduledAuditName: string;
}
export interface UpdateScheduledAuditResponse {
  scheduledAuditArn?: string;
}
export interface UpdateSecurityProfileRequest {
  securityProfileName: string;
  securityProfileDescription?: string;
  behaviors?: Array<Behavior>;
  alertTargets?: Record<AlertTargetType, AlertTarget>;
  additionalMetricsToRetain?: Array<string>;
  additionalMetricsToRetainV2?: Array<MetricToRetain>;
  deleteBehaviors?: boolean;
  deleteAlertTargets?: boolean;
  deleteAdditionalMetricsToRetain?: boolean;
  expectedVersion?: number;
  metricsExportConfig?: MetricsExportConfig;
  deleteMetricsExportConfig?: boolean;
}
export interface UpdateSecurityProfileResponse {
  securityProfileName?: string;
  securityProfileArn?: string;
  securityProfileDescription?: string;
  behaviors?: Array<Behavior>;
  alertTargets?: Record<AlertTargetType, AlertTarget>;
  additionalMetricsToRetain?: Array<string>;
  additionalMetricsToRetainV2?: Array<MetricToRetain>;
  version?: number;
  creationDate?: Date | string;
  lastModifiedDate?: Date | string;
  metricsExportConfig?: MetricsExportConfig;
}
export interface UpdateStreamRequest {
  streamId: string;
  description?: string;
  files?: Array<StreamFile>;
  roleArn?: string;
}
export interface UpdateStreamResponse {
  streamId?: string;
  streamArn?: string;
  description?: string;
  streamVersion?: number;
}
export interface UpdateThingGroupRequest {
  thingGroupName: string;
  thingGroupProperties: ThingGroupProperties;
  expectedVersion?: number;
}
export interface UpdateThingGroupResponse {
  version?: number;
}
export interface UpdateThingGroupsForThingRequest {
  thingName?: string;
  thingGroupsToAdd?: Array<string>;
  thingGroupsToRemove?: Array<string>;
  overrideDynamicGroups?: boolean;
}
export interface UpdateThingGroupsForThingResponse {}
export interface UpdateThingRequest {
  thingName: string;
  thingTypeName?: string;
  attributePayload?: AttributePayload;
  expectedVersion?: number;
  removeThingType?: boolean;
}
export interface UpdateThingResponse {}
export interface UpdateThingTypeRequest {
  thingTypeName: string;
  thingTypeProperties?: ThingTypeProperties;
}
export interface UpdateThingTypeResponse {}
export interface UpdateTopicRuleDestinationRequest {
  arn: string;
  status: TopicRuleDestinationStatus;
}
export interface UpdateTopicRuleDestinationResponse {}
export type Url = string;

export type UseBase64 = boolean;

export type usePrefixAttributeValue = boolean;

export type UserProperties = Array<UserProperty>;
export interface UserProperty {
  key: string;
  value: string;
}
export type UserPropertyKey = string;

export type UserPropertyKeyName = string;

export type UserPropertyValue = string;

export type Valid = boolean;

export interface ValidateSecurityProfileBehaviorsRequest {
  behaviors: Array<Behavior>;
}
export interface ValidateSecurityProfileBehaviorsResponse {
  valid?: boolean;
  validationErrors?: Array<ValidationError>;
}
export interface ValidationError {
  errorMessage?: string;
}
export type ValidationErrors = Array<ValidationError>;
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type Value = string;

export type Variance = number;

export type VerificationState =
  | "FALSE_POSITIVE"
  | "BENIGN_POSITIVE"
  | "TRUE_POSITIVE"
  | "UNKNOWN";
export type VerificationStateDescription = string;

export type Version = number;

export declare class VersionConflictException extends EffectData.TaggedError(
  "VersionConflictException",
)<{
  readonly message?: string;
}> {}
export type VersionName = string;

export type VersionNumber = number;

export declare class VersionsLimitExceededException extends EffectData.TaggedError(
  "VersionsLimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface VersionUpdateByJobsConfig {
  enabled?: boolean;
  roleArn?: string;
}
export interface ViolationEvent {
  violationId?: string;
  thingName?: string;
  securityProfileName?: string;
  behavior?: Behavior;
  metricValue?: MetricValue;
  violationEventAdditionalInfo?: ViolationEventAdditionalInfo;
  violationEventType?: ViolationEventType;
  verificationState?: VerificationState;
  verificationStateDescription?: string;
  violationEventTime?: Date | string;
}
export interface ViolationEventAdditionalInfo {
  confidenceLevel?: ConfidenceLevel;
}
export interface ViolationEventOccurrenceRange {
  startTime: Date | string;
  endTime: Date | string;
}
export type ViolationEvents = Array<ViolationEvent>;
export type ViolationEventType =
  | "IN_ALARM"
  | "ALARM_CLEARED"
  | "ALARM_INVALIDATED";
export type ViolationId = string;

export interface VpcDestinationConfiguration {
  subnetIds: Array<string>;
  securityGroups?: Array<string>;
  vpcId: string;
  roleArn: string;
}
export interface VpcDestinationProperties {
  subnetIds?: Array<string>;
  securityGroups?: Array<string>;
  vpcId?: string;
  roleArn?: string;
}
export interface VpcDestinationSummary {
  subnetIds?: Array<string>;
  securityGroups?: Array<string>;
  vpcId?: string;
  roleArn?: string;
}
export type VpcId = string;

export type WaitingForDataCollectionChecksCount = number;

export declare namespace AcceptCertificateTransfer {
  export type Input = AcceptCertificateTransferRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | TransferAlreadyCompletedException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace AddThingToBillingGroup {
  export type Input = AddThingToBillingGroupRequest;
  export type Output = AddThingToBillingGroupResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AddThingToThingGroup {
  export type Input = AddThingToThingGroupRequest;
  export type Output = AddThingToThingGroupResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateSbomWithPackageVersion {
  export type Input = AssociateSbomWithPackageVersionRequest;
  export type Output = AssociateSbomWithPackageVersionResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace AssociateTargetsWithJob {
  export type Input = AssociateTargetsWithJobRequest;
  export type Output = AssociateTargetsWithJobResponse;
  export type Error =
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AttachPolicy {
  export type Input = AttachPolicyRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace AttachPrincipalPolicy {
  export type Input = AttachPrincipalPolicyRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace AttachSecurityProfile {
  export type Input = AttachSecurityProfileRequest;
  export type Output = AttachSecurityProfileResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError;
}

export declare namespace AttachThingPrincipal {
  export type Input = AttachThingPrincipalRequest;
  export type Output = AttachThingPrincipalResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CancelAuditMitigationActionsTask {
  export type Input = CancelAuditMitigationActionsTaskRequest;
  export type Output = CancelAuditMitigationActionsTaskResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CancelAuditTask {
  export type Input = CancelAuditTaskRequest;
  export type Output = CancelAuditTaskResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CancelCertificateTransfer {
  export type Input = CancelCertificateTransferRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | TransferAlreadyCompletedException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CancelDetectMitigationActionsTask {
  export type Input = CancelDetectMitigationActionsTaskRequest;
  export type Output = CancelDetectMitigationActionsTaskResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CancelJob {
  export type Input = CancelJobRequest;
  export type Output = CancelJobResponse;
  export type Error =
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CancelJobExecution {
  export type Input = CancelJobExecutionRequest;
  export type Output = {};
  export type Error =
    | InvalidRequestException
    | InvalidStateTransitionException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError;
}

export declare namespace ClearDefaultAuthorizer {
  export type Input = ClearDefaultAuthorizerRequest;
  export type Output = ClearDefaultAuthorizerResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ConfirmTopicRuleDestination {
  export type Input = ConfirmTopicRuleDestinationRequest;
  export type Output = ConfirmTopicRuleDestinationResponse;
  export type Error =
    | ConflictingResourceUpdateException
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateAuditSuppression {
  export type Input = CreateAuditSuppressionRequest;
  export type Output = CreateAuditSuppressionResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateAuthorizer {
  export type Input = CreateAuthorizerRequest;
  export type Output = CreateAuthorizerResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateBillingGroup {
  export type Input = CreateBillingGroupRequest;
  export type Output = CreateBillingGroupResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateCertificateFromCsr {
  export type Input = CreateCertificateFromCsrRequest;
  export type Output = CreateCertificateFromCsrResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateCertificateProvider {
  export type Input = CreateCertificateProviderRequest;
  export type Output = CreateCertificateProviderResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateCommand {
  export type Input = CreateCommandRequest;
  export type Output = CreateCommandResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCustomMetric {
  export type Input = CreateCustomMetricRequest;
  export type Output = CreateCustomMetricResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateDimension {
  export type Input = CreateDimensionRequest;
  export type Output = CreateDimensionResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateDomainConfiguration {
  export type Input = CreateDomainConfigurationRequest;
  export type Output = CreateDomainConfigurationResponse;
  export type Error =
    | CertificateValidationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateDynamicThingGroup {
  export type Input = CreateDynamicThingGroupRequest;
  export type Output = CreateDynamicThingGroupResponse;
  export type Error =
    | InternalFailureException
    | InvalidQueryException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateFleetMetric {
  export type Input = CreateFleetMetricRequest;
  export type Output = CreateFleetMetricResponse;
  export type Error =
    | IndexNotReadyException
    | InternalFailureException
    | InvalidAggregationException
    | InvalidQueryException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateJob {
  export type Input = CreateJobRequest;
  export type Output = CreateJobResponse;
  export type Error =
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateJobTemplate {
  export type Input = CreateJobTemplateRequest;
  export type Output = CreateJobTemplateResponse;
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateKeysAndCertificate {
  export type Input = CreateKeysAndCertificateRequest;
  export type Output = CreateKeysAndCertificateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateMitigationAction {
  export type Input = CreateMitigationActionRequest;
  export type Output = CreateMitigationActionResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateOTAUpdate {
  export type Input = CreateOTAUpdateRequest;
  export type Output = CreateOTAUpdateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreatePackage {
  export type Input = CreatePackageRequest;
  export type Output = CreatePackageResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePackageVersion {
  export type Input = CreatePackageVersionRequest;
  export type Output = CreatePackageVersionResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreatePolicy {
  export type Input = CreatePolicyRequest;
  export type Output = CreatePolicyResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | MalformedPolicyException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreatePolicyVersion {
  export type Input = CreatePolicyVersionRequest;
  export type Output = CreatePolicyVersionResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | MalformedPolicyException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | VersionsLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateProvisioningClaim {
  export type Input = CreateProvisioningClaimRequest;
  export type Output = CreateProvisioningClaimResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateProvisioningTemplate {
  export type Input = CreateProvisioningTemplateRequest;
  export type Output = CreateProvisioningTemplateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateProvisioningTemplateVersion {
  export type Input = CreateProvisioningTemplateVersionRequest;
  export type Output = CreateProvisioningTemplateVersionResponse;
  export type Error =
    | ConflictingResourceUpdateException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | VersionsLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateRoleAlias {
  export type Input = CreateRoleAliasRequest;
  export type Output = CreateRoleAliasResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateScheduledAudit {
  export type Input = CreateScheduledAuditRequest;
  export type Output = CreateScheduledAuditResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateSecurityProfile {
  export type Input = CreateSecurityProfileRequest;
  export type Output = CreateSecurityProfileResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateStream {
  export type Input = CreateStreamRequest;
  export type Output = CreateStreamResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateThing {
  export type Input = CreateThingRequest;
  export type Output = CreateThingResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateThingGroup {
  export type Input = CreateThingGroupRequest;
  export type Output = CreateThingGroupResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateThingType {
  export type Input = CreateThingTypeRequest;
  export type Output = CreateThingTypeResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateTopicRule {
  export type Input = CreateTopicRuleRequest;
  export type Output = {};
  export type Error =
    | ConflictingResourceUpdateException
    | InternalException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | SqlParseException
    | CommonAwsError;
}

export declare namespace CreateTopicRuleDestination {
  export type Input = CreateTopicRuleDestinationRequest;
  export type Output = CreateTopicRuleDestinationResponse;
  export type Error =
    | ConflictingResourceUpdateException
    | InternalException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteAccountAuditConfiguration {
  export type Input = DeleteAccountAuditConfigurationRequest;
  export type Output = DeleteAccountAuditConfigurationResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteAuditSuppression {
  export type Input = DeleteAuditSuppressionRequest;
  export type Output = DeleteAuditSuppressionResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteAuthorizer {
  export type Input = DeleteAuthorizerRequest;
  export type Output = DeleteAuthorizerResponse;
  export type Error =
    | DeleteConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteBillingGroup {
  export type Input = DeleteBillingGroupRequest;
  export type Output = DeleteBillingGroupResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError;
}

export declare namespace DeleteCACertificate {
  export type Input = DeleteCACertificateRequest;
  export type Output = DeleteCACertificateResponse;
  export type Error =
    | CertificateStateException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteCertificate {
  export type Input = DeleteCertificateRequest;
  export type Output = {};
  export type Error =
    | CertificateStateException
    | DeleteConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteCertificateProvider {
  export type Input = DeleteCertificateProviderRequest;
  export type Output = DeleteCertificateProviderResponse;
  export type Error =
    | DeleteConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteCommand {
  export type Input = DeleteCommandRequest;
  export type Output = DeleteCommandResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCommandExecution {
  export type Input = DeleteCommandExecutionRequest;
  export type Output = DeleteCommandExecutionResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCustomMetric {
  export type Input = DeleteCustomMetricRequest;
  export type Output = DeleteCustomMetricResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDimension {
  export type Input = DeleteDimensionRequest;
  export type Output = DeleteDimensionResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDomainConfiguration {
  export type Input = DeleteDomainConfigurationRequest;
  export type Output = DeleteDomainConfigurationResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteDynamicThingGroup {
  export type Input = DeleteDynamicThingGroupRequest;
  export type Output = DeleteDynamicThingGroupResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError;
}

export declare namespace DeleteFleetMetric {
  export type Input = DeleteFleetMetricRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | VersionConflictException
    | CommonAwsError;
}

export declare namespace DeleteJob {
  export type Input = DeleteJobRequest;
  export type Output = {};
  export type Error =
    | InvalidRequestException
    | InvalidStateTransitionException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteJobExecution {
  export type Input = DeleteJobExecutionRequest;
  export type Output = {};
  export type Error =
    | InvalidRequestException
    | InvalidStateTransitionException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteJobTemplate {
  export type Input = DeleteJobTemplateRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteMitigationAction {
  export type Input = DeleteMitigationActionRequest;
  export type Output = DeleteMitigationActionResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteOTAUpdate {
  export type Input = DeleteOTAUpdateRequest;
  export type Output = DeleteOTAUpdateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | VersionConflictException
    | CommonAwsError;
}

export declare namespace DeletePackage {
  export type Input = DeletePackageRequest;
  export type Output = DeletePackageResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePackageVersion {
  export type Input = DeletePackageVersionRequest;
  export type Output = DeletePackageVersionResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePolicy {
  export type Input = DeletePolicyRequest;
  export type Output = {};
  export type Error =
    | DeleteConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeletePolicyVersion {
  export type Input = DeletePolicyVersionRequest;
  export type Output = {};
  export type Error =
    | DeleteConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteProvisioningTemplate {
  export type Input = DeleteProvisioningTemplateRequest;
  export type Output = DeleteProvisioningTemplateResponse;
  export type Error =
    | ConflictingResourceUpdateException
    | DeleteConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteProvisioningTemplateVersion {
  export type Input = DeleteProvisioningTemplateVersionRequest;
  export type Output = DeleteProvisioningTemplateVersionResponse;
  export type Error =
    | ConflictingResourceUpdateException
    | DeleteConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteRegistrationCode {
  export type Input = DeleteRegistrationCodeRequest;
  export type Output = DeleteRegistrationCodeResponse;
  export type Error =
    | InternalFailureException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteRoleAlias {
  export type Input = DeleteRoleAliasRequest;
  export type Output = DeleteRoleAliasResponse;
  export type Error =
    | DeleteConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteScheduledAudit {
  export type Input = DeleteScheduledAuditRequest;
  export type Output = DeleteScheduledAuditResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteSecurityProfile {
  export type Input = DeleteSecurityProfileRequest;
  export type Output = DeleteSecurityProfileResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError;
}

export declare namespace DeleteStream {
  export type Input = DeleteStreamRequest;
  export type Output = DeleteStreamResponse;
  export type Error =
    | DeleteConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteThing {
  export type Input = DeleteThingRequest;
  export type Output = DeleteThingResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | VersionConflictException
    | CommonAwsError;
}

export declare namespace DeleteThingGroup {
  export type Input = DeleteThingGroupRequest;
  export type Output = DeleteThingGroupResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError;
}

export declare namespace DeleteThingType {
  export type Input = DeleteThingTypeRequest;
  export type Output = DeleteThingTypeResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteTopicRule {
  export type Input = DeleteTopicRuleRequest;
  export type Output = {};
  export type Error =
    | ConflictingResourceUpdateException
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteTopicRuleDestination {
  export type Input = DeleteTopicRuleDestinationRequest;
  export type Output = DeleteTopicRuleDestinationResponse;
  export type Error =
    | ConflictingResourceUpdateException
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteV2LoggingLevel {
  export type Input = DeleteV2LoggingLevelRequest;
  export type Output = {};
  export type Error =
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeprecateThingType {
  export type Input = DeprecateThingTypeRequest;
  export type Output = DeprecateThingTypeResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeAccountAuditConfiguration {
  export type Input = DescribeAccountAuditConfigurationRequest;
  export type Output = DescribeAccountAuditConfigurationResponse;
  export type Error =
    | InternalFailureException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAuditFinding {
  export type Input = DescribeAuditFindingRequest;
  export type Output = DescribeAuditFindingResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAuditMitigationActionsTask {
  export type Input = DescribeAuditMitigationActionsTaskRequest;
  export type Output = DescribeAuditMitigationActionsTaskResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAuditSuppression {
  export type Input = DescribeAuditSuppressionRequest;
  export type Output = DescribeAuditSuppressionResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAuditTask {
  export type Input = DescribeAuditTaskRequest;
  export type Output = DescribeAuditTaskResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAuthorizer {
  export type Input = DescribeAuthorizerRequest;
  export type Output = DescribeAuthorizerResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeBillingGroup {
  export type Input = DescribeBillingGroupRequest;
  export type Output = DescribeBillingGroupResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeCACertificate {
  export type Input = DescribeCACertificateRequest;
  export type Output = DescribeCACertificateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeCertificate {
  export type Input = DescribeCertificateRequest;
  export type Output = DescribeCertificateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeCertificateProvider {
  export type Input = DescribeCertificateProviderRequest;
  export type Output = DescribeCertificateProviderResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeCustomMetric {
  export type Input = DescribeCustomMetricRequest;
  export type Output = DescribeCustomMetricResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDefaultAuthorizer {
  export type Input = DescribeDefaultAuthorizerRequest;
  export type Output = DescribeDefaultAuthorizerResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeDetectMitigationActionsTask {
  export type Input = DescribeDetectMitigationActionsTaskRequest;
  export type Output = DescribeDetectMitigationActionsTaskResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDimension {
  export type Input = DescribeDimensionRequest;
  export type Output = DescribeDimensionResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDomainConfiguration {
  export type Input = DescribeDomainConfigurationRequest;
  export type Output = DescribeDomainConfigurationResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeEndpoint {
  export type Input = DescribeEndpointRequest;
  export type Output = DescribeEndpointResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeEventConfigurations {
  export type Input = DescribeEventConfigurationsRequest;
  export type Output = DescribeEventConfigurationsResponse;
  export type Error =
    | InternalFailureException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeFleetMetric {
  export type Input = DescribeFleetMetricRequest;
  export type Output = DescribeFleetMetricResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeIndex {
  export type Input = DescribeIndexRequest;
  export type Output = DescribeIndexResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeJob {
  export type Input = DescribeJobRequest;
  export type Output = DescribeJobResponse;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeJobExecution {
  export type Input = DescribeJobExecutionRequest;
  export type Output = DescribeJobExecutionResponse;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeJobTemplate {
  export type Input = DescribeJobTemplateRequest;
  export type Output = DescribeJobTemplateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeManagedJobTemplate {
  export type Input = DescribeManagedJobTemplateRequest;
  export type Output = DescribeManagedJobTemplateResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeMitigationAction {
  export type Input = DescribeMitigationActionRequest;
  export type Output = DescribeMitigationActionResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeProvisioningTemplate {
  export type Input = DescribeProvisioningTemplateRequest;
  export type Output = DescribeProvisioningTemplateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeProvisioningTemplateVersion {
  export type Input = DescribeProvisioningTemplateVersionRequest;
  export type Output = DescribeProvisioningTemplateVersionResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeRoleAlias {
  export type Input = DescribeRoleAliasRequest;
  export type Output = DescribeRoleAliasResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeScheduledAudit {
  export type Input = DescribeScheduledAuditRequest;
  export type Output = DescribeScheduledAuditResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeSecurityProfile {
  export type Input = DescribeSecurityProfileRequest;
  export type Output = DescribeSecurityProfileResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeStream {
  export type Input = DescribeStreamRequest;
  export type Output = DescribeStreamResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeThing {
  export type Input = DescribeThingRequest;
  export type Output = DescribeThingResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeThingGroup {
  export type Input = DescribeThingGroupRequest;
  export type Output = DescribeThingGroupResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeThingRegistrationTask {
  export type Input = DescribeThingRegistrationTaskRequest;
  export type Output = DescribeThingRegistrationTaskResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeThingType {
  export type Input = DescribeThingTypeRequest;
  export type Output = DescribeThingTypeResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DetachPolicy {
  export type Input = DetachPolicyRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DetachPrincipalPolicy {
  export type Input = DetachPrincipalPolicyRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DetachSecurityProfile {
  export type Input = DetachSecurityProfileRequest;
  export type Output = DetachSecurityProfileResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DetachThingPrincipal {
  export type Input = DetachThingPrincipalRequest;
  export type Output = DetachThingPrincipalResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DisableTopicRule {
  export type Input = DisableTopicRuleRequest;
  export type Output = {};
  export type Error =
    | ConflictingResourceUpdateException
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DisassociateSbomFromPackageVersion {
  export type Input = DisassociateSbomFromPackageVersionRequest;
  export type Output = DisassociateSbomFromPackageVersionResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace EnableTopicRule {
  export type Input = EnableTopicRuleRequest;
  export type Output = {};
  export type Error =
    | ConflictingResourceUpdateException
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetBehaviorModelTrainingSummaries {
  export type Input = GetBehaviorModelTrainingSummariesRequest;
  export type Output = GetBehaviorModelTrainingSummariesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetBucketsAggregation {
  export type Input = GetBucketsAggregationRequest;
  export type Output = GetBucketsAggregationResponse;
  export type Error =
    | IndexNotReadyException
    | InternalFailureException
    | InvalidAggregationException
    | InvalidQueryException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetCardinality {
  export type Input = GetCardinalityRequest;
  export type Output = GetCardinalityResponse;
  export type Error =
    | IndexNotReadyException
    | InternalFailureException
    | InvalidAggregationException
    | InvalidQueryException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetCommand {
  export type Input = GetCommandRequest;
  export type Output = GetCommandResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCommandExecution {
  export type Input = GetCommandExecutionRequest;
  export type Output = GetCommandExecutionResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEffectivePolicies {
  export type Input = GetEffectivePoliciesRequest;
  export type Output = GetEffectivePoliciesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetIndexingConfiguration {
  export type Input = GetIndexingConfigurationRequest;
  export type Output = GetIndexingConfigurationResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetJobDocument {
  export type Input = GetJobDocumentRequest;
  export type Output = GetJobDocumentResponse;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetLoggingOptions {
  export type Input = GetLoggingOptionsRequest;
  export type Output = GetLoggingOptionsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetOTAUpdate {
  export type Input = GetOTAUpdateRequest;
  export type Output = GetOTAUpdateResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetPackage {
  export type Input = GetPackageRequest;
  export type Output = GetPackageResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPackageConfiguration {
  export type Input = GetPackageConfigurationRequest;
  export type Output = GetPackageConfigurationResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetPackageVersion {
  export type Input = GetPackageVersionRequest;
  export type Output = GetPackageVersionResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPercentiles {
  export type Input = GetPercentilesRequest;
  export type Output = GetPercentilesResponse;
  export type Error =
    | IndexNotReadyException
    | InternalFailureException
    | InvalidAggregationException
    | InvalidQueryException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetPolicy {
  export type Input = GetPolicyRequest;
  export type Output = GetPolicyResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetPolicyVersion {
  export type Input = GetPolicyVersionRequest;
  export type Output = GetPolicyVersionResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetRegistrationCode {
  export type Input = GetRegistrationCodeRequest;
  export type Output = GetRegistrationCodeResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetStatistics {
  export type Input = GetStatisticsRequest;
  export type Output = GetStatisticsResponse;
  export type Error =
    | IndexNotReadyException
    | InternalFailureException
    | InvalidAggregationException
    | InvalidQueryException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetThingConnectivityData {
  export type Input = GetThingConnectivityDataRequest;
  export type Output = GetThingConnectivityDataResponse;
  export type Error =
    | IndexNotReadyException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetTopicRule {
  export type Input = GetTopicRuleRequest;
  export type Output = GetTopicRuleResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetTopicRuleDestination {
  export type Input = GetTopicRuleDestinationRequest;
  export type Output = GetTopicRuleDestinationResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetV2LoggingOptions {
  export type Input = GetV2LoggingOptionsRequest;
  export type Output = GetV2LoggingOptionsResponse;
  export type Error =
    | InternalException
    | NotConfiguredException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListActiveViolations {
  export type Input = ListActiveViolationsRequest;
  export type Output = ListActiveViolationsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAttachedPolicies {
  export type Input = ListAttachedPoliciesRequest;
  export type Output = ListAttachedPoliciesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListAuditFindings {
  export type Input = ListAuditFindingsRequest;
  export type Output = ListAuditFindingsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAuditMitigationActionsExecutions {
  export type Input = ListAuditMitigationActionsExecutionsRequest;
  export type Output = ListAuditMitigationActionsExecutionsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAuditMitigationActionsTasks {
  export type Input = ListAuditMitigationActionsTasksRequest;
  export type Output = ListAuditMitigationActionsTasksResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAuditSuppressions {
  export type Input = ListAuditSuppressionsRequest;
  export type Output = ListAuditSuppressionsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAuditTasks {
  export type Input = ListAuditTasksRequest;
  export type Output = ListAuditTasksResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAuthorizers {
  export type Input = ListAuthorizersRequest;
  export type Output = ListAuthorizersResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListBillingGroups {
  export type Input = ListBillingGroupsRequest;
  export type Output = ListBillingGroupsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListCACertificates {
  export type Input = ListCACertificatesRequest;
  export type Output = ListCACertificatesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListCertificateProviders {
  export type Input = ListCertificateProvidersRequest;
  export type Output = ListCertificateProvidersResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListCertificates {
  export type Input = ListCertificatesRequest;
  export type Output = ListCertificatesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListCertificatesByCA {
  export type Input = ListCertificatesByCARequest;
  export type Output = ListCertificatesByCAResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListCommandExecutions {
  export type Input = ListCommandExecutionsRequest;
  export type Output = ListCommandExecutionsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCommands {
  export type Input = ListCommandsRequest;
  export type Output = ListCommandsResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCustomMetrics {
  export type Input = ListCustomMetricsRequest;
  export type Output = ListCustomMetricsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDetectMitigationActionsExecutions {
  export type Input = ListDetectMitigationActionsExecutionsRequest;
  export type Output = ListDetectMitigationActionsExecutionsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDetectMitigationActionsTasks {
  export type Input = ListDetectMitigationActionsTasksRequest;
  export type Output = ListDetectMitigationActionsTasksResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDimensions {
  export type Input = ListDimensionsRequest;
  export type Output = ListDimensionsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDomainConfigurations {
  export type Input = ListDomainConfigurationsRequest;
  export type Output = ListDomainConfigurationsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListFleetMetrics {
  export type Input = ListFleetMetricsRequest;
  export type Output = ListFleetMetricsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListIndices {
  export type Input = ListIndicesRequest;
  export type Output = ListIndicesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListJobExecutionsForJob {
  export type Input = ListJobExecutionsForJobRequest;
  export type Output = ListJobExecutionsForJobResponse;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListJobExecutionsForThing {
  export type Input = ListJobExecutionsForThingRequest;
  export type Output = ListJobExecutionsForThingResponse;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListJobs {
  export type Input = ListJobsRequest;
  export type Output = ListJobsResponse;
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListJobTemplates {
  export type Input = ListJobTemplatesRequest;
  export type Output = ListJobTemplatesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListManagedJobTemplates {
  export type Input = ListManagedJobTemplatesRequest;
  export type Output = ListManagedJobTemplatesResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListMetricValues {
  export type Input = ListMetricValuesRequest;
  export type Output = ListMetricValuesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListMitigationActions {
  export type Input = ListMitigationActionsRequest;
  export type Output = ListMitigationActionsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListOTAUpdates {
  export type Input = ListOTAUpdatesRequest;
  export type Output = ListOTAUpdatesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListOutgoingCertificates {
  export type Input = ListOutgoingCertificatesRequest;
  export type Output = ListOutgoingCertificatesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListPackages {
  export type Input = ListPackagesRequest;
  export type Output = ListPackagesResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPackageVersions {
  export type Input = ListPackageVersionsRequest;
  export type Output = ListPackageVersionsResponse;
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPolicies {
  export type Input = ListPoliciesRequest;
  export type Output = ListPoliciesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListPolicyPrincipals {
  export type Input = ListPolicyPrincipalsRequest;
  export type Output = ListPolicyPrincipalsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListPolicyVersions {
  export type Input = ListPolicyVersionsRequest;
  export type Output = ListPolicyVersionsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListPrincipalPolicies {
  export type Input = ListPrincipalPoliciesRequest;
  export type Output = ListPrincipalPoliciesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListPrincipalThings {
  export type Input = ListPrincipalThingsRequest;
  export type Output = ListPrincipalThingsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListPrincipalThingsV2 {
  export type Input = ListPrincipalThingsV2Request;
  export type Output = ListPrincipalThingsV2Response;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListProvisioningTemplates {
  export type Input = ListProvisioningTemplatesRequest;
  export type Output = ListProvisioningTemplatesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListProvisioningTemplateVersions {
  export type Input = ListProvisioningTemplateVersionsRequest;
  export type Output = ListProvisioningTemplateVersionsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListRelatedResourcesForAuditFinding {
  export type Input = ListRelatedResourcesForAuditFindingRequest;
  export type Output = ListRelatedResourcesForAuditFindingResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListRoleAliases {
  export type Input = ListRoleAliasesRequest;
  export type Output = ListRoleAliasesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListSbomValidationResults {
  export type Input = ListSbomValidationResultsRequest;
  export type Output = ListSbomValidationResultsResponse;
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListScheduledAudits {
  export type Input = ListScheduledAuditsRequest;
  export type Output = ListScheduledAuditsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListSecurityProfiles {
  export type Input = ListSecurityProfilesRequest;
  export type Output = ListSecurityProfilesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListSecurityProfilesForTarget {
  export type Input = ListSecurityProfilesForTargetRequest;
  export type Output = ListSecurityProfilesForTargetResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListStreams {
  export type Input = ListStreamsRequest;
  export type Output = ListStreamsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTargetsForPolicy {
  export type Input = ListTargetsForPolicyRequest;
  export type Output = ListTargetsForPolicyResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListTargetsForSecurityProfile {
  export type Input = ListTargetsForSecurityProfileRequest;
  export type Output = ListTargetsForSecurityProfileResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListThingGroups {
  export type Input = ListThingGroupsRequest;
  export type Output = ListThingGroupsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListThingGroupsForThing {
  export type Input = ListThingGroupsForThingRequest;
  export type Output = ListThingGroupsForThingResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListThingPrincipals {
  export type Input = ListThingPrincipalsRequest;
  export type Output = ListThingPrincipalsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListThingPrincipalsV2 {
  export type Input = ListThingPrincipalsV2Request;
  export type Output = ListThingPrincipalsV2Response;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListThingRegistrationTaskReports {
  export type Input = ListThingRegistrationTaskReportsRequest;
  export type Output = ListThingRegistrationTaskReportsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListThingRegistrationTasks {
  export type Input = ListThingRegistrationTasksRequest;
  export type Output = ListThingRegistrationTasksResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListThings {
  export type Input = ListThingsRequest;
  export type Output = ListThingsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListThingsInBillingGroup {
  export type Input = ListThingsInBillingGroupRequest;
  export type Output = ListThingsInBillingGroupResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListThingsInThingGroup {
  export type Input = ListThingsInThingGroupRequest;
  export type Output = ListThingsInThingGroupResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListThingTypes {
  export type Input = ListThingTypesRequest;
  export type Output = ListThingTypesResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListTopicRuleDestinations {
  export type Input = ListTopicRuleDestinationsRequest;
  export type Output = ListTopicRuleDestinationsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListTopicRules {
  export type Input = ListTopicRulesRequest;
  export type Output = ListTopicRulesResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListV2LoggingLevels {
  export type Input = ListV2LoggingLevelsRequest;
  export type Output = ListV2LoggingLevelsResponse;
  export type Error =
    | InternalException
    | InvalidRequestException
    | NotConfiguredException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListViolationEvents {
  export type Input = ListViolationEventsRequest;
  export type Output = ListViolationEventsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutVerificationStateOnViolation {
  export type Input = PutVerificationStateOnViolationRequest;
  export type Output = PutVerificationStateOnViolationResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace RegisterCACertificate {
  export type Input = RegisterCACertificateRequest;
  export type Output = RegisterCACertificateResponse;
  export type Error =
    | CertificateValidationException
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | RegistrationCodeValidationException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace RegisterCertificate {
  export type Input = RegisterCertificateRequest;
  export type Output = RegisterCertificateResponse;
  export type Error =
    | CertificateConflictException
    | CertificateStateException
    | CertificateValidationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace RegisterCertificateWithoutCA {
  export type Input = RegisterCertificateWithoutCARequest;
  export type Output = RegisterCertificateWithoutCAResponse;
  export type Error =
    | CertificateStateException
    | CertificateValidationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace RegisterThing {
  export type Input = RegisterThingRequest;
  export type Output = RegisterThingResponse;
  export type Error =
    | ConflictingResourceUpdateException
    | InternalFailureException
    | InvalidRequestException
    | ResourceRegistrationFailureException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace RejectCertificateTransfer {
  export type Input = RejectCertificateTransferRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | TransferAlreadyCompletedException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace RemoveThingFromBillingGroup {
  export type Input = RemoveThingFromBillingGroupRequest;
  export type Output = RemoveThingFromBillingGroupResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace RemoveThingFromThingGroup {
  export type Input = RemoveThingFromThingGroupRequest;
  export type Output = RemoveThingFromThingGroupResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ReplaceTopicRule {
  export type Input = ReplaceTopicRuleRequest;
  export type Output = {};
  export type Error =
    | ConflictingResourceUpdateException
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | SqlParseException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace SearchIndex {
  export type Input = SearchIndexRequest;
  export type Output = SearchIndexResponse;
  export type Error =
    | IndexNotReadyException
    | InternalFailureException
    | InvalidQueryException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace SetDefaultAuthorizer {
  export type Input = SetDefaultAuthorizerRequest;
  export type Output = SetDefaultAuthorizerResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace SetDefaultPolicyVersion {
  export type Input = SetDefaultPolicyVersionRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace SetLoggingOptions {
  export type Input = SetLoggingOptionsRequest;
  export type Output = {};
  export type Error =
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace SetV2LoggingLevel {
  export type Input = SetV2LoggingLevelRequest;
  export type Output = {};
  export type Error =
    | InternalException
    | InvalidRequestException
    | LimitExceededException
    | NotConfiguredException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace SetV2LoggingOptions {
  export type Input = SetV2LoggingOptionsRequest;
  export type Output = {};
  export type Error =
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace StartAuditMitigationActionsTask {
  export type Input = StartAuditMitigationActionsTaskRequest;
  export type Output = StartAuditMitigationActionsTaskResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | TaskAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartDetectMitigationActionsTask {
  export type Input = StartDetectMitigationActionsTaskRequest;
  export type Output = StartDetectMitigationActionsTaskResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | TaskAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartOnDemandAuditTask {
  export type Input = StartOnDemandAuditTaskRequest;
  export type Output = StartOnDemandAuditTaskResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartThingRegistrationTask {
  export type Input = StartThingRegistrationTaskRequest;
  export type Output = StartThingRegistrationTaskResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace StopThingRegistrationTask {
  export type Input = StopThingRegistrationTaskRequest;
  export type Output = StopThingRegistrationTaskResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TestAuthorization {
  export type Input = TestAuthorizationRequest;
  export type Output = TestAuthorizationResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace TestInvokeAuthorizer {
  export type Input = TestInvokeAuthorizerRequest;
  export type Output = TestInvokeAuthorizerResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | InvalidResponseException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace TransferCertificate {
  export type Input = TransferCertificateRequest;
  export type Output = TransferCertificateResponse;
  export type Error =
    | CertificateStateException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | TransferConflictException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateAccountAuditConfiguration {
  export type Input = UpdateAccountAuditConfigurationRequest;
  export type Output = UpdateAccountAuditConfigurationResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateAuditSuppression {
  export type Input = UpdateAuditSuppressionRequest;
  export type Output = UpdateAuditSuppressionResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateAuthorizer {
  export type Input = UpdateAuthorizerRequest;
  export type Output = UpdateAuthorizerResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateBillingGroup {
  export type Input = UpdateBillingGroupRequest;
  export type Output = UpdateBillingGroupResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError;
}

export declare namespace UpdateCACertificate {
  export type Input = UpdateCACertificateRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateCertificate {
  export type Input = UpdateCertificateRequest;
  export type Output = {};
  export type Error =
    | CertificateStateException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateCertificateProvider {
  export type Input = UpdateCertificateProviderRequest;
  export type Output = UpdateCertificateProviderResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateCommand {
  export type Input = UpdateCommandRequest;
  export type Output = UpdateCommandResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCustomMetric {
  export type Input = UpdateCustomMetricRequest;
  export type Output = UpdateCustomMetricResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDimension {
  export type Input = UpdateDimensionRequest;
  export type Output = UpdateDimensionResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDomainConfiguration {
  export type Input = UpdateDomainConfigurationRequest;
  export type Output = UpdateDomainConfigurationResponse;
  export type Error =
    | CertificateValidationException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateDynamicThingGroup {
  export type Input = UpdateDynamicThingGroupRequest;
  export type Output = UpdateDynamicThingGroupResponse;
  export type Error =
    | InternalFailureException
    | InvalidQueryException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError;
}

export declare namespace UpdateEventConfigurations {
  export type Input = UpdateEventConfigurationsRequest;
  export type Output = UpdateEventConfigurationsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateFleetMetric {
  export type Input = UpdateFleetMetricRequest;
  export type Output = {};
  export type Error =
    | IndexNotReadyException
    | InternalFailureException
    | InvalidAggregationException
    | InvalidQueryException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | VersionConflictException
    | CommonAwsError;
}

export declare namespace UpdateIndexingConfiguration {
  export type Input = UpdateIndexingConfigurationRequest;
  export type Output = UpdateIndexingConfigurationResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateJob {
  export type Input = UpdateJobRequest;
  export type Output = {};
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateMitigationAction {
  export type Input = UpdateMitigationActionRequest;
  export type Output = UpdateMitigationActionResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdatePackage {
  export type Input = UpdatePackageRequest;
  export type Output = UpdatePackageResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePackageConfiguration {
  export type Input = UpdatePackageConfigurationRequest;
  export type Output = UpdatePackageConfigurationResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePackageVersion {
  export type Input = UpdatePackageVersionRequest;
  export type Output = UpdatePackageVersionResponse;
  export type Error =
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateProvisioningTemplate {
  export type Input = UpdateProvisioningTemplateRequest;
  export type Output = UpdateProvisioningTemplateResponse;
  export type Error =
    | ConflictingResourceUpdateException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateRoleAlias {
  export type Input = UpdateRoleAliasRequest;
  export type Output = UpdateRoleAliasResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateScheduledAudit {
  export type Input = UpdateScheduledAuditRequest;
  export type Output = UpdateScheduledAuditResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateSecurityProfile {
  export type Input = UpdateSecurityProfileRequest;
  export type Output = UpdateSecurityProfileResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError;
}

export declare namespace UpdateStream {
  export type Input = UpdateStreamRequest;
  export type Output = UpdateStreamResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateThing {
  export type Input = UpdateThingRequest;
  export type Output = UpdateThingResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | VersionConflictException
    | CommonAwsError;
}

export declare namespace UpdateThingGroup {
  export type Input = UpdateThingGroupRequest;
  export type Output = UpdateThingGroupResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError;
}

export declare namespace UpdateThingGroupsForThing {
  export type Input = UpdateThingGroupsForThingRequest;
  export type Output = UpdateThingGroupsForThingResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateThingType {
  export type Input = UpdateThingTypeRequest;
  export type Output = UpdateThingTypeResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateTopicRuleDestination {
  export type Input = UpdateTopicRuleDestinationRequest;
  export type Output = UpdateTopicRuleDestinationResponse;
  export type Error =
    | ConflictingResourceUpdateException
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ValidateSecurityProfileBehaviors {
  export type Input = ValidateSecurityProfileBehaviorsRequest;
  export type Output = ValidateSecurityProfileBehaviorsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}
