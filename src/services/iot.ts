import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSIotService {
  acceptCertificateTransfer(
    input: AcceptCertificateTransferRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | TransferAlreadyCompletedException | UnauthorizedException | CommonAwsError
  >;
  addThingToBillingGroup(
    input: AddThingToBillingGroupRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  addThingToThingGroup(
    input: AddThingToThingGroupRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  associateSbomWithPackageVersion(
    input: AssociateSbomWithPackageVersionRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  associateTargetsWithJob(
    input: AssociateTargetsWithJobRequest,
  ): Effect.Effect<
    {},
    InvalidRequestException | LimitExceededException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  attachPolicy(
    input: AttachPolicyRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  attachPrincipalPolicy(
    input: AttachPrincipalPolicyRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  attachSecurityProfile(
    input: AttachSecurityProfileRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | VersionConflictException | CommonAwsError
  >;
  attachThingPrincipal(
    input: AttachThingPrincipalRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  cancelAuditMitigationActionsTask(
    input: CancelAuditMitigationActionsTaskRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  cancelAuditTask(
    input: CancelAuditTaskRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  cancelCertificateTransfer(
    input: CancelCertificateTransferRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | TransferAlreadyCompletedException | UnauthorizedException | CommonAwsError
  >;
  cancelDetectMitigationActionsTask(
    input: CancelDetectMitigationActionsTaskRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  cancelJob(
    input: CancelJobRequest,
  ): Effect.Effect<
    {},
    InvalidRequestException | LimitExceededException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  cancelJobExecution(
    input: CancelJobExecutionRequest,
  ): Effect.Effect<
    {},
    InvalidRequestException | InvalidStateTransitionException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | VersionConflictException | CommonAwsError
  >;
  clearDefaultAuthorizer(
    input: ClearDefaultAuthorizerRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  confirmTopicRuleDestination(
    input: ConfirmTopicRuleDestinationRequest,
  ): Effect.Effect<
    {},
    ConflictingResourceUpdateException | InternalException | InvalidRequestException | ServiceUnavailableException | UnauthorizedException | CommonAwsError
  >;
  createAuditSuppression(
    input: CreateAuditSuppressionRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ThrottlingException | CommonAwsError
  >;
  createAuthorizer(
    input: CreateAuthorizerRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  createBillingGroup(
    input: CreateBillingGroupRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceAlreadyExistsException | ThrottlingException | CommonAwsError
  >;
  createCertificateFromCsr(
    input: CreateCertificateFromCsrRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  createCertificateProvider(
    input: CreateCertificateProviderRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  createCommand(
    input: CreateCommandRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createCustomMetric(
    input: CreateCustomMetricRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ThrottlingException | CommonAwsError
  >;
  createDimension(
    input: CreateDimensionRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ThrottlingException | CommonAwsError
  >;
  createDomainConfiguration(
    input: CreateDomainConfigurationRequest,
  ): Effect.Effect<
    {},
    CertificateValidationException | InternalFailureException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  createDynamicThingGroup(
    input: CreateDynamicThingGroupRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidQueryException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createFleetMetric(
    input: CreateFleetMetricRequest,
  ): Effect.Effect<
    {},
    IndexNotReadyException | InternalFailureException | InvalidAggregationException | InvalidQueryException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  createJob(
    input: CreateJobRequest,
  ): Effect.Effect<
    {},
    InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  createJobTemplate(
    input: CreateJobTemplateRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalFailureException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createKeysAndCertificate(
    input: CreateKeysAndCertificateRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  createMitigationAction(
    input: CreateMitigationActionRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ThrottlingException | CommonAwsError
  >;
  createOTAUpdate(
    input: CreateOTAUpdateRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  createPackage(
    input: CreatePackageRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createPackageVersion(
    input: CreatePackageVersionRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createPolicy(
    input: CreatePolicyRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | MalformedPolicyException | ResourceAlreadyExistsException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  createPolicyVersion(
    input: CreatePolicyVersionRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | MalformedPolicyException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | VersionsLimitExceededException | CommonAwsError
  >;
  createProvisioningClaim(
    input: CreateProvisioningClaimRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  createProvisioningTemplate(
    input: CreateProvisioningTemplateRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  createProvisioningTemplateVersion(
    input: CreateProvisioningTemplateVersionRequest,
  ): Effect.Effect<
    {},
    ConflictingResourceUpdateException | InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | UnauthorizedException | VersionsLimitExceededException | CommonAwsError
  >;
  createRoleAlias(
    input: CreateRoleAliasRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  createScheduledAudit(
    input: CreateScheduledAuditRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ThrottlingException | CommonAwsError
  >;
  createSecurityProfile(
    input: CreateSecurityProfileRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceAlreadyExistsException | ThrottlingException | CommonAwsError
  >;
  createStream(
    input: CreateStreamRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceAlreadyExistsException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  createThing(
    input: CreateThingRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceAlreadyExistsException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  createThingGroup(
    input: CreateThingGroupRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceAlreadyExistsException | ThrottlingException | CommonAwsError
  >;
  createThingType(
    input: CreateThingTypeRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceAlreadyExistsException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  createTopicRule(
    input: CreateTopicRuleRequest,
  ): Effect.Effect<
    {},
    ConflictingResourceUpdateException | InternalException | InvalidRequestException | ResourceAlreadyExistsException | ServiceUnavailableException | SqlParseException | CommonAwsError
  >;
  createTopicRuleDestination(
    input: CreateTopicRuleDestinationRequest,
  ): Effect.Effect<
    {},
    ConflictingResourceUpdateException | InternalException | InvalidRequestException | ResourceAlreadyExistsException | ServiceUnavailableException | CommonAwsError
  >;
  deleteAccountAuditConfiguration(
    input: DeleteAccountAuditConfigurationRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteAuditSuppression(
    input: DeleteAuditSuppressionRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  deleteAuthorizer(
    input: DeleteAuthorizerRequest,
  ): Effect.Effect<
    {},
    DeleteConflictException | InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  deleteBillingGroup(
    input: DeleteBillingGroupRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | VersionConflictException | CommonAwsError
  >;
  deleteCACertificate(
    input: DeleteCACertificateRequest,
  ): Effect.Effect<
    {},
    CertificateStateException | InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  deleteCertificate(
    input: DeleteCertificateRequest,
  ): Effect.Effect<
    {},
    CertificateStateException | DeleteConflictException | InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  deleteCertificateProvider(
    input: DeleteCertificateProviderRequest,
  ): Effect.Effect<
    {},
    DeleteConflictException | InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  deleteCommand(
    input: DeleteCommandRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteCommandExecution(
    input: DeleteCommandExecutionRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteCustomMetric(
    input: DeleteCustomMetricRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  deleteDimension(
    input: DeleteDimensionRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  deleteDomainConfiguration(
    input: DeleteDomainConfigurationRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  deleteDynamicThingGroup(
    input: DeleteDynamicThingGroupRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | VersionConflictException | CommonAwsError
  >;
  deleteFleetMetric(
    input: DeleteFleetMetricRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | VersionConflictException | CommonAwsError
  >;
  deleteJob(
    input: DeleteJobRequest,
  ): Effect.Effect<
    {},
    InvalidRequestException | InvalidStateTransitionException | LimitExceededException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  deleteJobExecution(
    input: DeleteJobExecutionRequest,
  ): Effect.Effect<
    {},
    InvalidRequestException | InvalidStateTransitionException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  deleteJobTemplate(
    input: DeleteJobTemplateRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteMitigationAction(
    input: DeleteMitigationActionRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  deleteOTAUpdate(
    input: DeleteOTAUpdateRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | VersionConflictException | CommonAwsError
  >;
  deletePackage(
    input: DeletePackageRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deletePackageVersion(
    input: DeletePackageVersionRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deletePolicy(
    input: DeletePolicyRequest,
  ): Effect.Effect<
    {},
    DeleteConflictException | InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  deletePolicyVersion(
    input: DeletePolicyVersionRequest,
  ): Effect.Effect<
    {},
    DeleteConflictException | InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  deleteProvisioningTemplate(
    input: DeleteProvisioningTemplateRequest,
  ): Effect.Effect<
    {},
    ConflictingResourceUpdateException | DeleteConflictException | InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  deleteProvisioningTemplateVersion(
    input: DeleteProvisioningTemplateVersionRequest,
  ): Effect.Effect<
    {},
    ConflictingResourceUpdateException | DeleteConflictException | InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  deleteRegistrationCode(
    input: DeleteRegistrationCodeRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  deleteRoleAlias(
    input: DeleteRoleAliasRequest,
  ): Effect.Effect<
    {},
    DeleteConflictException | InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  deleteScheduledAudit(
    input: DeleteScheduledAuditRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteSecurityProfile(
    input: DeleteSecurityProfileRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | VersionConflictException | CommonAwsError
  >;
  deleteStream(
    input: DeleteStreamRequest,
  ): Effect.Effect<
    {},
    DeleteConflictException | InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  deleteThing(
    input: DeleteThingRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | VersionConflictException | CommonAwsError
  >;
  deleteThingGroup(
    input: DeleteThingGroupRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | VersionConflictException | CommonAwsError
  >;
  deleteThingType(
    input: DeleteThingTypeRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  deleteTopicRule(
    input: DeleteTopicRuleRequest,
  ): Effect.Effect<
    {},
    ConflictingResourceUpdateException | InternalException | InvalidRequestException | ServiceUnavailableException | UnauthorizedException | CommonAwsError
  >;
  deleteTopicRuleDestination(
    input: DeleteTopicRuleDestinationRequest,
  ): Effect.Effect<
    {},
    ConflictingResourceUpdateException | InternalException | InvalidRequestException | ServiceUnavailableException | UnauthorizedException | CommonAwsError
  >;
  deleteV2LoggingLevel(
    input: DeleteV2LoggingLevelRequest,
  ): Effect.Effect<
    {},
    InternalException | InvalidRequestException | ServiceUnavailableException | CommonAwsError
  >;
  deprecateThingType(
    input: DeprecateThingTypeRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  describeAccountAuditConfiguration(
    input: DescribeAccountAuditConfigurationRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | ThrottlingException | CommonAwsError
  >;
  describeAuditFinding(
    input: DescribeAuditFindingRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeAuditMitigationActionsTask(
    input: DescribeAuditMitigationActionsTaskRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeAuditSuppression(
    input: DescribeAuditSuppressionRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeAuditTask(
    input: DescribeAuditTaskRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeAuthorizer(
    input: DescribeAuthorizerRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  describeBillingGroup(
    input: DescribeBillingGroupRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeCACertificate(
    input: DescribeCACertificateRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  describeCertificate(
    input: DescribeCertificateRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  describeCertificateProvider(
    input: DescribeCertificateProviderRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  describeCustomMetric(
    input: DescribeCustomMetricRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeDefaultAuthorizer(
    input: DescribeDefaultAuthorizerRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  describeDetectMitigationActionsTask(
    input: DescribeDetectMitigationActionsTaskRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeDimension(
    input: DescribeDimensionRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeDomainConfiguration(
    input: DescribeDomainConfigurationRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  describeEndpoint(
    input: DescribeEndpointRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  describeEventConfigurations(
    input: DescribeEventConfigurationsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | ThrottlingException | CommonAwsError
  >;
  describeFleetMetric(
    input: DescribeFleetMetricRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  describeIndex(
    input: DescribeIndexRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  describeJob(
    input: DescribeJobRequest,
  ): Effect.Effect<
    {},
    InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  describeJobExecution(
    input: DescribeJobExecutionRequest,
  ): Effect.Effect<
    {},
    InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  describeJobTemplate(
    input: DescribeJobTemplateRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeManagedJobTemplate(
    input: DescribeManagedJobTemplateRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeMitigationAction(
    input: DescribeMitigationActionRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeProvisioningTemplate(
    input: DescribeProvisioningTemplateRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  describeProvisioningTemplateVersion(
    input: DescribeProvisioningTemplateVersionRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  describeRoleAlias(
    input: DescribeRoleAliasRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  describeScheduledAudit(
    input: DescribeScheduledAuditRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeSecurityProfile(
    input: DescribeSecurityProfileRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeStream(
    input: DescribeStreamRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  describeThing(
    input: DescribeThingRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  describeThingGroup(
    input: DescribeThingGroupRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeThingRegistrationTask(
    input: DescribeThingRegistrationTaskRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  describeThingType(
    input: DescribeThingTypeRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  detachPolicy(
    input: DetachPolicyRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  detachPrincipalPolicy(
    input: DetachPrincipalPolicyRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  detachSecurityProfile(
    input: DetachSecurityProfileRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  detachThingPrincipal(
    input: DetachThingPrincipalRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  disableTopicRule(
    input: DisableTopicRuleRequest,
  ): Effect.Effect<
    {},
    ConflictingResourceUpdateException | InternalException | InvalidRequestException | ServiceUnavailableException | UnauthorizedException | CommonAwsError
  >;
  disassociateSbomFromPackageVersion(
    input: DisassociateSbomFromPackageVersionRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  enableTopicRule(
    input: EnableTopicRuleRequest,
  ): Effect.Effect<
    {},
    ConflictingResourceUpdateException | InternalException | InvalidRequestException | ServiceUnavailableException | UnauthorizedException | CommonAwsError
  >;
  getBehaviorModelTrainingSummaries(
    input: GetBehaviorModelTrainingSummariesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getBucketsAggregation(
    input: GetBucketsAggregationRequest,
  ): Effect.Effect<
    {},
    IndexNotReadyException | InternalFailureException | InvalidAggregationException | InvalidQueryException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  getCardinality(
    input: GetCardinalityRequest,
  ): Effect.Effect<
    {},
    IndexNotReadyException | InternalFailureException | InvalidAggregationException | InvalidQueryException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  getCommand(
    input: GetCommandRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCommandExecution(
    input: GetCommandExecutionRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getEffectivePolicies(
    input: GetEffectivePoliciesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  getIndexingConfiguration(
    input: GetIndexingConfigurationRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  getJobDocument(
    input: GetJobDocumentRequest,
  ): Effect.Effect<
    {},
    InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  getLoggingOptions(
    input: GetLoggingOptionsRequest,
  ): Effect.Effect<
    {},
    InternalException | InvalidRequestException | ServiceUnavailableException | CommonAwsError
  >;
  getOTAUpdate(
    input: GetOTAUpdateRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  getPackage(
    input: GetPackageRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getPackageConfiguration(
    input: GetPackageConfigurationRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ThrottlingException | CommonAwsError
  >;
  getPackageVersion(
    input: GetPackageVersionRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getPercentiles(
    input: GetPercentilesRequest,
  ): Effect.Effect<
    {},
    IndexNotReadyException | InternalFailureException | InvalidAggregationException | InvalidQueryException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  getPolicy(
    input: GetPolicyRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  getPolicyVersion(
    input: GetPolicyVersionRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  getRegistrationCode(
    input: GetRegistrationCodeRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  getStatistics(
    input: GetStatisticsRequest,
  ): Effect.Effect<
    {},
    IndexNotReadyException | InternalFailureException | InvalidAggregationException | InvalidQueryException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  getThingConnectivityData(
    input: GetThingConnectivityDataRequest,
  ): Effect.Effect<
    {},
    IndexNotReadyException | InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  getTopicRule(
    input: GetTopicRuleRequest,
  ): Effect.Effect<
    {},
    InternalException | InvalidRequestException | ServiceUnavailableException | UnauthorizedException | CommonAwsError
  >;
  getTopicRuleDestination(
    input: GetTopicRuleDestinationRequest,
  ): Effect.Effect<
    {},
    InternalException | InvalidRequestException | ServiceUnavailableException | UnauthorizedException | CommonAwsError
  >;
  getV2LoggingOptions(
    input: GetV2LoggingOptionsRequest,
  ): Effect.Effect<
    {},
    InternalException | NotConfiguredException | ServiceUnavailableException | CommonAwsError
  >;
  listActiveViolations(
    input: ListActiveViolationsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listAttachedPolicies(
    input: ListAttachedPoliciesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listAuditFindings(
    input: ListAuditFindingsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listAuditMitigationActionsExecutions(
    input: ListAuditMitigationActionsExecutionsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listAuditMitigationActionsTasks(
    input: ListAuditMitigationActionsTasksRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listAuditSuppressions(
    input: ListAuditSuppressionsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listAuditTasks(
    input: ListAuditTasksRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listAuthorizers(
    input: ListAuthorizersRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listBillingGroups(
    input: ListBillingGroupsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listCACertificates(
    input: ListCACertificatesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listCertificateProviders(
    input: ListCertificateProvidersRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listCertificates(
    input: ListCertificatesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listCertificatesByCA(
    input: ListCertificatesByCARequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listCommandExecutions(
    input: ListCommandExecutionsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCommands(
    input: ListCommandsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCustomMetrics(
    input: ListCustomMetricsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listDetectMitigationActionsExecutions(
    input: ListDetectMitigationActionsExecutionsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listDetectMitigationActionsTasks(
    input: ListDetectMitigationActionsTasksRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listDimensions(
    input: ListDimensionsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listDomainConfigurations(
    input: ListDomainConfigurationsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listFleetMetrics(
    input: ListFleetMetricsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listIndices(
    input: ListIndicesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listJobExecutionsForJob(
    input: ListJobExecutionsForJobRequest,
  ): Effect.Effect<
    {},
    InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  listJobExecutionsForThing(
    input: ListJobExecutionsForThingRequest,
  ): Effect.Effect<
    {},
    InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  listJobTemplates(
    input: ListJobTemplatesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listJobs(
    input: ListJobsRequest,
  ): Effect.Effect<
    {},
    InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  listManagedJobTemplates(
    input: ListManagedJobTemplatesRequest,
  ): Effect.Effect<
    {},
    InternalServerException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listMetricValues(
    input: ListMetricValuesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listMitigationActions(
    input: ListMitigationActionsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listOTAUpdates(
    input: ListOTAUpdatesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listOutgoingCertificates(
    input: ListOutgoingCertificatesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listPackageVersions(
    input: ListPackageVersionsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listPackages(
    input: ListPackagesRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listPolicies(
    input: ListPoliciesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listPolicyPrincipals(
    input: ListPolicyPrincipalsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listPolicyVersions(
    input: ListPolicyVersionsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listPrincipalPolicies(
    input: ListPrincipalPoliciesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listPrincipalThings(
    input: ListPrincipalThingsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listPrincipalThingsV2(
    input: ListPrincipalThingsV2Request,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listProvisioningTemplateVersions(
    input: ListProvisioningTemplateVersionsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listProvisioningTemplates(
    input: ListProvisioningTemplatesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listRelatedResourcesForAuditFinding(
    input: ListRelatedResourcesForAuditFindingRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listRoleAliases(
    input: ListRoleAliasesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listSbomValidationResults(
    input: ListSbomValidationResultsRequest,
  ): Effect.Effect<
    {},
    InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listScheduledAudits(
    input: ListScheduledAuditsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listSecurityProfiles(
    input: ListSecurityProfilesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listSecurityProfilesForTarget(
    input: ListSecurityProfilesForTargetRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listStreams(
    input: ListStreamsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listTargetsForPolicy(
    input: ListTargetsForPolicyRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listTargetsForSecurityProfile(
    input: ListTargetsForSecurityProfileRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listThingGroups(
    input: ListThingGroupsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listThingGroupsForThing(
    input: ListThingGroupsForThingRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listThingPrincipals(
    input: ListThingPrincipalsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listThingPrincipalsV2(
    input: ListThingPrincipalsV2Request,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listThingRegistrationTaskReports(
    input: ListThingRegistrationTaskReportsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listThingRegistrationTasks(
    input: ListThingRegistrationTasksRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listThingTypes(
    input: ListThingTypesRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listThings(
    input: ListThingsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  listThingsInBillingGroup(
    input: ListThingsInBillingGroupRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listThingsInThingGroup(
    input: ListThingsInThingGroupRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listTopicRuleDestinations(
    input: ListTopicRuleDestinationsRequest,
  ): Effect.Effect<
    {},
    InternalException | InvalidRequestException | ServiceUnavailableException | UnauthorizedException | CommonAwsError
  >;
  listTopicRules(
    input: ListTopicRulesRequest,
  ): Effect.Effect<
    {},
    InternalException | InvalidRequestException | ServiceUnavailableException | CommonAwsError
  >;
  listV2LoggingLevels(
    input: ListV2LoggingLevelsRequest,
  ): Effect.Effect<
    {},
    InternalException | InvalidRequestException | NotConfiguredException | ServiceUnavailableException | CommonAwsError
  >;
  listViolationEvents(
    input: ListViolationEventsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  putVerificationStateOnViolation(
    input: PutVerificationStateOnViolationRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  registerCACertificate(
    input: RegisterCACertificateRequest,
  ): Effect.Effect<
    {},
    CertificateValidationException | InternalFailureException | InvalidRequestException | LimitExceededException | RegistrationCodeValidationException | ResourceAlreadyExistsException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  registerCertificate(
    input: RegisterCertificateRequest,
  ): Effect.Effect<
    {},
    CertificateConflictException | CertificateStateException | CertificateValidationException | InternalFailureException | InvalidRequestException | ResourceAlreadyExistsException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  registerCertificateWithoutCA(
    input: RegisterCertificateWithoutCARequest,
  ): Effect.Effect<
    {},
    CertificateStateException | CertificateValidationException | InternalFailureException | InvalidRequestException | ResourceAlreadyExistsException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  registerThing(
    input: RegisterThingRequest,
  ): Effect.Effect<
    {},
    ConflictingResourceUpdateException | InternalFailureException | InvalidRequestException | ResourceRegistrationFailureException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  rejectCertificateTransfer(
    input: RejectCertificateTransferRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | TransferAlreadyCompletedException | UnauthorizedException | CommonAwsError
  >;
  removeThingFromBillingGroup(
    input: RemoveThingFromBillingGroupRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  removeThingFromThingGroup(
    input: RemoveThingFromThingGroupRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  replaceTopicRule(
    input: ReplaceTopicRuleRequest,
  ): Effect.Effect<
    {},
    ConflictingResourceUpdateException | InternalException | InvalidRequestException | ServiceUnavailableException | SqlParseException | UnauthorizedException | CommonAwsError
  >;
  searchIndex(
    input: SearchIndexRequest,
  ): Effect.Effect<
    {},
    IndexNotReadyException | InternalFailureException | InvalidQueryException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  setDefaultAuthorizer(
    input: SetDefaultAuthorizerRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceAlreadyExistsException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  setDefaultPolicyVersion(
    input: SetDefaultPolicyVersionRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  setLoggingOptions(
    input: SetLoggingOptionsRequest,
  ): Effect.Effect<
    {},
    InternalException | InvalidRequestException | ServiceUnavailableException | CommonAwsError
  >;
  setV2LoggingLevel(
    input: SetV2LoggingLevelRequest,
  ): Effect.Effect<
    {},
    InternalException | InvalidRequestException | LimitExceededException | NotConfiguredException | ServiceUnavailableException | CommonAwsError
  >;
  setV2LoggingOptions(
    input: SetV2LoggingOptionsRequest,
  ): Effect.Effect<
    {},
    InternalException | InvalidRequestException | ServiceUnavailableException | CommonAwsError
  >;
  startAuditMitigationActionsTask(
    input: StartAuditMitigationActionsTaskRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | TaskAlreadyExistsException | ThrottlingException | CommonAwsError
  >;
  startDetectMitigationActionsTask(
    input: StartDetectMitigationActionsTaskRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | TaskAlreadyExistsException | ThrottlingException | CommonAwsError
  >;
  startOnDemandAuditTask(
    input: StartOnDemandAuditTaskRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ThrottlingException | CommonAwsError
  >;
  startThingRegistrationTask(
    input: StartThingRegistrationTaskRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  stopThingRegistrationTask(
    input: StopThingRegistrationTaskRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  testAuthorization(
    input: TestAuthorizationRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  testInvokeAuthorizer(
    input: TestInvokeAuthorizerRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | InvalidResponseException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  transferCertificate(
    input: TransferCertificateRequest,
  ): Effect.Effect<
    {},
    CertificateStateException | InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | TransferConflictException | UnauthorizedException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateAccountAuditConfiguration(
    input: UpdateAccountAuditConfigurationRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  updateAuditSuppression(
    input: UpdateAuditSuppressionRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateAuthorizer(
    input: UpdateAuthorizerRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  updateBillingGroup(
    input: UpdateBillingGroupRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | VersionConflictException | CommonAwsError
  >;
  updateCACertificate(
    input: UpdateCACertificateRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  updateCertificate(
    input: UpdateCertificateRequest,
  ): Effect.Effect<
    {},
    CertificateStateException | InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  updateCertificateProvider(
    input: UpdateCertificateProviderRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  updateCommand(
    input: UpdateCommandRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateCustomMetric(
    input: UpdateCustomMetricRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateDimension(
    input: UpdateDimensionRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateDomainConfiguration(
    input: UpdateDomainConfigurationRequest,
  ): Effect.Effect<
    {},
    CertificateValidationException | InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  updateDynamicThingGroup(
    input: UpdateDynamicThingGroupRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidQueryException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | VersionConflictException | CommonAwsError
  >;
  updateEventConfigurations(
    input: UpdateEventConfigurationsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  updateFleetMetric(
    input: UpdateFleetMetricRequest,
  ): Effect.Effect<
    {},
    IndexNotReadyException | InternalFailureException | InvalidAggregationException | InvalidQueryException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | VersionConflictException | CommonAwsError
  >;
  updateIndexingConfiguration(
    input: UpdateIndexingConfigurationRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  updateJob(
    input: UpdateJobRequest,
  ): Effect.Effect<
    {},
    InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | CommonAwsError
  >;
  updateMitigationAction(
    input: UpdateMitigationActionRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updatePackage(
    input: UpdatePackageRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updatePackageConfiguration(
    input: UpdatePackageConfigurationRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updatePackageVersion(
    input: UpdatePackageVersionRequest,
  ): Effect.Effect<
    {},
    ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateProvisioningTemplate(
    input: UpdateProvisioningTemplateRequest,
  ): Effect.Effect<
    {},
    ConflictingResourceUpdateException | InternalFailureException | InvalidRequestException | ResourceNotFoundException | UnauthorizedException | CommonAwsError
  >;
  updateRoleAlias(
    input: UpdateRoleAliasRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  updateScheduledAudit(
    input: UpdateScheduledAuditRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateSecurityProfile(
    input: UpdateSecurityProfileRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | VersionConflictException | CommonAwsError
  >;
  updateStream(
    input: UpdateStreamRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  updateThing(
    input: UpdateThingRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | VersionConflictException | CommonAwsError
  >;
  updateThingGroup(
    input: UpdateThingGroupRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | VersionConflictException | CommonAwsError
  >;
  updateThingGroupsForThing(
    input: UpdateThingGroupsForThingRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateThingType(
    input: UpdateThingTypeRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ServiceUnavailableException | ThrottlingException | UnauthorizedException | CommonAwsError
  >;
  updateTopicRuleDestination(
    input: UpdateTopicRuleDestinationRequest,
  ): Effect.Effect<
    {},
    ConflictingResourceUpdateException | InternalException | InvalidRequestException | ServiceUnavailableException | UnauthorizedException | CommonAwsError
  >;
  validateSecurityProfileBehaviors(
    input: ValidateSecurityProfileBehaviorsRequest,
  ): Effect.Effect<
    {},
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
}

export type Iot = AWSIotService;

export type AbortAction = never;
export interface AbortConfig {
}
export interface AbortCriteria {
}
export type AbortCriteriaList = Array<unknown>;
export type AbortThresholdPercentage = number;

export interface AcceptCertificateTransferRequest {
}
export type AcmCertificateArn = string;

export interface Action {
}
export type ActionList = Array<unknown>;
export type ActionType = never;
export interface ActiveViolation {
}
export type ActiveViolations = Array<unknown>;
export type AdditionalMetricsToRetainList = Array<unknown>;
export type AdditionalMetricsToRetainV2List = Array<unknown>;
export type AdditionalParameterMap = Record<string, unknown>;
export interface AddThingsToThingGroupParams {
}
export interface AddThingToBillingGroupRequest {
}
export interface AddThingToBillingGroupResponse {
}
export interface AddThingToThingGroupRequest {
}
export interface AddThingToThingGroupResponse {
}
export type AggregationField = string;

export interface AggregationType {
}
export type AggregationTypeName = never;
export type AggregationTypeValue = string;

export type AggregationTypeValues = Array<unknown>;
export type AlarmName = string;

export interface AlertTarget {
}
export type AlertTargetArn = string;

export type AlertTargets = Record<string, unknown>;
export type AlertTargetType = never;
export type AllowAuthorizerOverride = boolean;

export type AllowAutoRegistration = boolean;

export interface Allowed {
}
export type ApplicationProtocol = never;
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
}
export interface AssetPropertyValue {
}
export type AssetPropertyValueList = Array<unknown>;
export type AssetPropertyVariant = never;
export interface AssociateSbomWithPackageVersionRequest {
}
export interface AssociateSbomWithPackageVersionResponse {
}
export interface AssociateTargetsWithJobRequest {
}
export interface AssociateTargetsWithJobResponse {
}
export interface AttachPolicyRequest {
}
export interface AttachPrincipalPolicyRequest {
}
export interface AttachSecurityProfileRequest {
}
export interface AttachSecurityProfileResponse {
}
export interface AttachThingPrincipalRequest {
}
export interface AttachThingPrincipalResponse {
}
export type AttributeKey = string;

export type AttributeName = string;

export interface AttributePayload {
}
export type Attributes = Record<string, unknown>;
export type AttributesMap = Record<string, unknown>;
export type AttributeValue = string;

export interface AuditCheckConfiguration {
}
export type AuditCheckConfigurations = Record<string, unknown>;
export interface AuditCheckDetails {
}
export type AuditCheckName = string;

export type AuditCheckRunStatus = never;
export type AuditCheckToActionsMapping = Record<string, unknown>;
export type AuditCheckToReasonCodeFilter = Record<string, unknown>;
export type AuditDescription = string;

export type AuditDetails = Record<string, unknown>;
export interface AuditFinding {
}
export type AuditFindings = Array<unknown>;
export type AuditFindingSeverity = never;
export type AuditFrequency = never;
export interface AuditMitigationActionExecutionMetadata {
}
export type AuditMitigationActionExecutionMetadataList = Array<unknown>;
export type AuditMitigationActionsExecutionStatus = never;
export interface AuditMitigationActionsTaskMetadata {
}
export type AuditMitigationActionsTaskMetadataList = Array<unknown>;
export type AuditMitigationActionsTaskStatistics = Record<string, unknown>;
export type AuditMitigationActionsTaskStatus = never;
export interface AuditMitigationActionsTaskTarget {
}
export interface AuditNotificationTarget {
}
export type AuditNotificationTargetConfigurations = Record<string, unknown>;
export type AuditNotificationType = never;
export interface AuditSuppression {
}
export type AuditSuppressionList = Array<unknown>;
export type AuditTaskId = string;

export interface AuditTaskMetadata {
}
export type AuditTaskMetadataList = Array<unknown>;
export type AuditTaskStatus = never;
export type AuditTaskType = never;
export type AuthDecision = never;
export type AuthenticationType = never;
export interface AuthInfo {
}
export type AuthInfos = Array<unknown>;
export type AuthorizerArn = string;

export interface AuthorizerConfig {
}
export interface AuthorizerDescription {
}
export type AuthorizerFunctionArn = string;

export type AuthorizerName = string;

export type Authorizers = Array<unknown>;
export type AuthorizerStatus = never;
export interface AuthorizerSummary {
}
export interface AuthResult {
}
export type AuthResults = Array<unknown>;
export type AutoRegistrationStatus = never;
export type Average = number;

export type AwsAccountId = string;

export type AwsArn = string;

export type AwsIotJobArn = string;

export type AwsIotJobId = string;

export type AwsIotSqlVersion = string;

export interface AwsJobAbortConfig {
}
export interface AwsJobAbortCriteria {
}
export type AwsJobAbortCriteriaAbortAction = never;
export type AwsJobAbortCriteriaAbortThresholdPercentage = number;

export type AwsJobAbortCriteriaFailureType = never;
export type AwsJobAbortCriteriaList = Array<unknown>;
export type AwsJobAbortCriteriaMinimumNumberOfExecutedThings = number;

export interface AwsJobExecutionsRolloutConfig {
}
export interface AwsJobExponentialRolloutRate {
}
export interface AwsJobPresignedUrlConfig {
}
export interface AwsJobRateIncreaseCriteria {
}
export type AwsJobRateIncreaseCriteriaNumberOfThings = number;

export type AwsJobRolloutIncrementFactor = number;

export type AwsJobRolloutRatePerMinute = number;

export interface AwsJobTimeoutConfig {
}
export type AwsJobTimeoutInProgressTimeoutInMinutes = number;

export type BatchMode = boolean;

export type BeforeSubstitutionFlag = boolean;

export interface Behavior {
}
export interface BehaviorCriteria {
}
export type BehaviorCriteriaType = never;
export type BehaviorMetric = string;

export type BehaviorModelTrainingSummaries = Array<unknown>;
export interface BehaviorModelTrainingSummary {
}
export type BehaviorName = string;

export type Behaviors = Array<unknown>;
export type BillingGroupArn = string;

export type BillingGroupDescription = string;

export type BillingGroupId = string;

export interface BillingGroupMetadata {
}
export type BillingGroupName = string;

export type BillingGroupNameAndArnList = Array<unknown>;
export interface BillingGroupProperties {
}
export type BinaryCommandExecutionResult = Uint8Array | string;

export type BinaryParameterValue = Uint8Array | string;

export type Boolean2 = boolean;

export type BooleanCommandExecutionResult = boolean;

export type BooleanKey = boolean;

export type BooleanParameterValue = boolean;

export type BooleanWrapperObject = boolean;

export interface Bucket {
}
export type BucketKeyValue = string;

export type BucketName = string;

export type Buckets = Array<unknown>;
export interface BucketsAggregationType {
}
export interface CACertificate {
}
export interface CACertificateDescription {
}
export type CACertificates = Array<unknown>;
export type CACertificateStatus = never;
export type CACertificateUpdateAction = never;
export interface CancelAuditMitigationActionsTaskRequest {
}
export interface CancelAuditMitigationActionsTaskResponse {
}
export interface CancelAuditTaskRequest {
}
export interface CancelAuditTaskResponse {
}
export interface CancelCertificateTransferRequest {
}
export interface CancelDetectMitigationActionsTaskRequest {
}
export interface CancelDetectMitigationActionsTaskResponse {
}
export type CanceledChecksCount = number;

export type CanceledFindingsCount = number;

export type CanceledThings = number;

export interface CancelJobExecutionRequest {
}
export interface CancelJobRequest {
}
export interface CancelJobResponse {
}
export type CannedAccessControlList = never;
export interface Certificate {
}
export type CertificateArn = string;

export interface CertificateConflictException {
}
export interface CertificateDescription {
}
export type CertificateId = string;

export type CertificateMode = never;
export type CertificateName = string;

export type CertificatePathOnDevice = string;

export type CertificatePem = string;

export type CertificateProviderAccountDefaultForOperations = Array<unknown>;
export type CertificateProviderArn = string;

export type CertificateProviderFunctionArn = string;

export type CertificateProviderName = string;

export type CertificateProviderOperation = never;
export type CertificateProviders = Array<unknown>;
export interface CertificateProviderSummary {
}
export type Certificates = Array<unknown>;
export type CertificateSigningRequest = string;

export interface CertificateStateException {
}
export type CertificateStatus = never;
export interface CertificateValidationException {
}
export interface CertificateValidity {
}
export type ChannelName = string;

export type CheckCompliant = boolean;

export type CheckCustomConfiguration = Record<string, unknown>;
export type Cidr = string;

export type Cidrs = Array<unknown>;
export interface ClearDefaultAuthorizerRequest {
}
export interface ClearDefaultAuthorizerResponse {
}
export type ClientCertificateCallbackArn = string;

export interface ClientCertificateConfig {
}
export type ClientId = string;

export type ClientProperties = Record<string, unknown>;
export type ClientRequestToken = string;

export type ClientToken = string;

export interface CloudwatchAlarmAction {
}
export interface CloudwatchLogsAction {
}
export interface CloudwatchMetricAction {
}
export type Code = string;

export interface CodeSigning {
}
export interface CodeSigningCertificateChain {
}
export interface CodeSigningSignature {
}
export type CognitoIdentityPoolId = string;

export type CommandArn = string;

export type CommandDescription = string;

export type CommandExecutionId = string;

export type CommandExecutionParameterMap = Record<string, unknown>;
export interface CommandExecutionResult {
}
export type CommandExecutionResultMap = Record<string, unknown>;
export type CommandExecutionResultName = string;

export type CommandExecutionStatus = never;
export interface CommandExecutionSummary {
}
export type CommandExecutionSummaryList = Array<unknown>;
export type CommandExecutionTimeoutInSeconds = number;

export type CommandId = string;

export type CommandMaxResults = number;

export type CommandNamespace = never;
export interface CommandParameter {
}
export type CommandParameterDescription = string;

export type CommandParameterList = Array<unknown>;
export type CommandParameterName = string;

export interface CommandParameterValue {
}
export interface CommandPayload {
}
export type CommandPayloadBlob = Uint8Array | string;

export interface CommandSummary {
}
export type CommandSummaryList = Array<unknown>;
export type Comment = string;

export type ComparisonOperator = never;
export type CompliantChecksCount = number;

export type ConfidenceLevel = never;
export type ConfigName = never;
export interface Configuration {
}
export type ConfigValue = string;

export type ConfirmationToken = string;

export interface ConfirmTopicRuleDestinationRequest {
}
export interface ConfirmTopicRuleDestinationResponse {
}
export interface ConflictException {
}
export interface ConflictingResourceUpdateException {
}
export type ConnectionAttributeName = string;

export type ConnectivityApiThingName = string;

export type ConnectivityTimestamp = number;

export type ConsecutiveDatapointsToAlarm = number;

export type ConsecutiveDatapointsToClear = number;

export type ContentType = string;

export type CorrelationData = string;

export type Count = number;

export interface CreateAuditSuppressionRequest {
}
export interface CreateAuditSuppressionResponse {
}
export interface CreateAuthorizerRequest {
}
export interface CreateAuthorizerResponse {
}
export interface CreateBillingGroupRequest {
}
export interface CreateBillingGroupResponse {
}
export interface CreateCertificateFromCsrRequest {
}
export interface CreateCertificateFromCsrResponse {
}
export interface CreateCertificateProviderRequest {
}
export interface CreateCertificateProviderResponse {
}
export interface CreateCommandRequest {
}
export interface CreateCommandResponse {
}
export interface CreateCustomMetricRequest {
}
export interface CreateCustomMetricResponse {
}
export type CreatedAtDate = Date | string;

export interface CreateDimensionRequest {
}
export interface CreateDimensionResponse {
}
export interface CreateDomainConfigurationRequest {
}
export interface CreateDomainConfigurationResponse {
}
export interface CreateDynamicThingGroupRequest {
}
export interface CreateDynamicThingGroupResponse {
}
export interface CreateFleetMetricRequest {
}
export interface CreateFleetMetricResponse {
}
export interface CreateJobRequest {
}
export interface CreateJobResponse {
}
export interface CreateJobTemplateRequest {
}
export interface CreateJobTemplateResponse {
}
export interface CreateKeysAndCertificateRequest {
}
export interface CreateKeysAndCertificateResponse {
}
export interface CreateMitigationActionRequest {
}
export interface CreateMitigationActionResponse {
}
export interface CreateOTAUpdateRequest {
}
export interface CreateOTAUpdateResponse {
}
export interface CreatePackageRequest {
}
export interface CreatePackageResponse {
}
export interface CreatePackageVersionRequest {
}
export interface CreatePackageVersionResponse {
}
export interface CreatePolicyRequest {
}
export interface CreatePolicyResponse {
}
export interface CreatePolicyVersionRequest {
}
export interface CreatePolicyVersionResponse {
}
export interface CreateProvisioningClaimRequest {
}
export interface CreateProvisioningClaimResponse {
}
export interface CreateProvisioningTemplateRequest {
}
export interface CreateProvisioningTemplateResponse {
}
export interface CreateProvisioningTemplateVersionRequest {
}
export interface CreateProvisioningTemplateVersionResponse {
}
export interface CreateRoleAliasRequest {
}
export interface CreateRoleAliasResponse {
}
export interface CreateScheduledAuditRequest {
}
export interface CreateScheduledAuditResponse {
}
export interface CreateSecurityProfileRequest {
}
export interface CreateSecurityProfileResponse {
}
export interface CreateStreamRequest {
}
export interface CreateStreamResponse {
}
export interface CreateThingGroupRequest {
}
export interface CreateThingGroupResponse {
}
export interface CreateThingRequest {
}
export interface CreateThingResponse {
}
export interface CreateThingTypeRequest {
}
export interface CreateThingTypeResponse {
}
export interface CreateTopicRuleDestinationRequest {
}
export interface CreateTopicRuleDestinationResponse {
}
export interface CreateTopicRuleRequest {
}
export type CreationDate = Date | string;

export type CredentialDurationSeconds = number;

export type CronExpression = string;

export interface CustomCodeSigning {
}
export type CustomerVersion = number;

export type CustomMetricArn = string;

export type CustomMetricDisplayName = string;

export type CustomMetricType = never;
export type DataCollectionPercentage = number;

export type DateType = Date | string;

export type DayOfMonth = string;

export type DayOfWeek = never;
export interface DeleteAccountAuditConfigurationRequest {
}
export interface DeleteAccountAuditConfigurationResponse {
}
export type DeleteAdditionalMetricsToRetain = boolean;

export type DeleteAlertTargets = boolean;

export interface DeleteAuditSuppressionRequest {
}
export interface DeleteAuditSuppressionResponse {
}
export interface DeleteAuthorizerRequest {
}
export interface DeleteAuthorizerResponse {
}
export type DeleteBehaviors = boolean;

export interface DeleteBillingGroupRequest {
}
export interface DeleteBillingGroupResponse {
}
export interface DeleteCACertificateRequest {
}
export interface DeleteCACertificateResponse {
}
export interface DeleteCertificateProviderRequest {
}
export interface DeleteCertificateProviderResponse {
}
export interface DeleteCertificateRequest {
}
export interface DeleteCommandExecutionRequest {
}
export interface DeleteCommandExecutionResponse {
}
export interface DeleteCommandRequest {
}
export interface DeleteCommandResponse {
}
export interface DeleteConflictException {
}
export interface DeleteCustomMetricRequest {
}
export interface DeleteCustomMetricResponse {
}
export interface DeleteDimensionRequest {
}
export interface DeleteDimensionResponse {
}
export interface DeleteDomainConfigurationRequest {
}
export interface DeleteDomainConfigurationResponse {
}
export interface DeleteDynamicThingGroupRequest {
}
export interface DeleteDynamicThingGroupResponse {
}
export interface DeleteFleetMetricRequest {
}
export interface DeleteJobExecutionRequest {
}
export interface DeleteJobRequest {
}
export interface DeleteJobTemplateRequest {
}
export type DeleteMetricsExportConfig = boolean;

export interface DeleteMitigationActionRequest {
}
export interface DeleteMitigationActionResponse {
}
export interface DeleteOTAUpdateRequest {
}
export interface DeleteOTAUpdateResponse {
}
export interface DeletePackageRequest {
}
export interface DeletePackageResponse {
}
export interface DeletePackageVersionRequest {
}
export interface DeletePackageVersionResponse {
}
export interface DeletePolicyRequest {
}
export interface DeletePolicyVersionRequest {
}
export interface DeleteProvisioningTemplateRequest {
}
export interface DeleteProvisioningTemplateResponse {
}
export interface DeleteProvisioningTemplateVersionRequest {
}
export interface DeleteProvisioningTemplateVersionResponse {
}
export interface DeleteRegistrationCodeRequest {
}
export interface DeleteRegistrationCodeResponse {
}
export interface DeleteRoleAliasRequest {
}
export interface DeleteRoleAliasResponse {
}
export interface DeleteScheduledAuditRequest {
}
export interface DeleteScheduledAuditResponse {
}
export type DeleteScheduledAudits = boolean;

export interface DeleteSecurityProfileRequest {
}
export interface DeleteSecurityProfileResponse {
}
export type DeleteStream_ = boolean;

export interface DeleteStreamRequest {
}
export interface DeleteStreamResponse {
}
export interface DeleteThingGroupRequest {
}
export interface DeleteThingGroupResponse {
}
export interface DeleteThingRequest {
}
export interface DeleteThingResponse {
}
export interface DeleteThingTypeRequest {
}
export interface DeleteThingTypeResponse {
}
export interface DeleteTopicRuleDestinationRequest {
}
export interface DeleteTopicRuleDestinationResponse {
}
export interface DeleteTopicRuleRequest {
}
export interface DeleteV2LoggingLevelRequest {
}
export type DeliveryStreamName = string;

export interface Denied {
}
export interface DeprecateThingTypeRequest {
}
export interface DeprecateThingTypeResponse {
}
export type DeprecationDate = Date | string;

export type DeprecationFlag = boolean;

export interface DescribeAccountAuditConfigurationRequest {
}
export interface DescribeAccountAuditConfigurationResponse {
}
export interface DescribeAuditFindingRequest {
}
export interface DescribeAuditFindingResponse {
}
export interface DescribeAuditMitigationActionsTaskRequest {
}
export interface DescribeAuditMitigationActionsTaskResponse {
}
export interface DescribeAuditSuppressionRequest {
}
export interface DescribeAuditSuppressionResponse {
}
export interface DescribeAuditTaskRequest {
}
export interface DescribeAuditTaskResponse {
}
export interface DescribeAuthorizerRequest {
}
export interface DescribeAuthorizerResponse {
}
export interface DescribeBillingGroupRequest {
}
export interface DescribeBillingGroupResponse {
}
export interface DescribeCACertificateRequest {
}
export interface DescribeCACertificateResponse {
}
export interface DescribeCertificateProviderRequest {
}
export interface DescribeCertificateProviderResponse {
}
export interface DescribeCertificateRequest {
}
export interface DescribeCertificateResponse {
}
export interface DescribeCustomMetricRequest {
}
export interface DescribeCustomMetricResponse {
}
export interface DescribeDefaultAuthorizerRequest {
}
export interface DescribeDefaultAuthorizerResponse {
}
export interface DescribeDetectMitigationActionsTaskRequest {
}
export interface DescribeDetectMitigationActionsTaskResponse {
}
export interface DescribeDimensionRequest {
}
export interface DescribeDimensionResponse {
}
export interface DescribeDomainConfigurationRequest {
}
export interface DescribeDomainConfigurationResponse {
}
export interface DescribeEndpointRequest {
}
export interface DescribeEndpointResponse {
}
export interface DescribeEventConfigurationsRequest {
}
export interface DescribeEventConfigurationsResponse {
}
export interface DescribeFleetMetricRequest {
}
export interface DescribeFleetMetricResponse {
}
export interface DescribeIndexRequest {
}
export interface DescribeIndexResponse {
}
export interface DescribeJobExecutionRequest {
}
export interface DescribeJobExecutionResponse {
}
export interface DescribeJobRequest {
}
export interface DescribeJobResponse {
}
export interface DescribeJobTemplateRequest {
}
export interface DescribeJobTemplateResponse {
}
export interface DescribeManagedJobTemplateRequest {
}
export interface DescribeManagedJobTemplateResponse {
}
export interface DescribeMitigationActionRequest {
}
export interface DescribeMitigationActionResponse {
}
export interface DescribeProvisioningTemplateRequest {
}
export interface DescribeProvisioningTemplateResponse {
}
export interface DescribeProvisioningTemplateVersionRequest {
}
export interface DescribeProvisioningTemplateVersionResponse {
}
export interface DescribeRoleAliasRequest {
}
export interface DescribeRoleAliasResponse {
}
export interface DescribeScheduledAuditRequest {
}
export interface DescribeScheduledAuditResponse {
}
export interface DescribeSecurityProfileRequest {
}
export interface DescribeSecurityProfileResponse {
}
export interface DescribeStreamRequest {
}
export interface DescribeStreamResponse {
}
export interface DescribeThingGroupRequest {
}
export interface DescribeThingGroupResponse {
}
export interface DescribeThingRegistrationTaskRequest {
}
export interface DescribeThingRegistrationTaskResponse {
}
export interface DescribeThingRequest {
}
export interface DescribeThingResponse {
}
export interface DescribeThingTypeRequest {
}
export interface DescribeThingTypeResponse {
}
export type Description = string;

export interface Destination {
}
export type DestinationPackageVersions = Array<unknown>;
export interface DetachPolicyRequest {
}
export interface DetachPrincipalPolicyRequest {
}
export interface DetachSecurityProfileRequest {
}
export interface DetachSecurityProfileResponse {
}
export interface DetachThingPrincipalRequest {
}
export interface DetachThingPrincipalResponse {
}
export type DetailsKey = string;

export type DetailsMap = Record<string, unknown>;
export type DetailsValue = string;

export interface DetectMitigationActionExecution {
}
export type DetectMitigationActionExecutionErrorCode = string;

export type DetectMitigationActionExecutionList = Array<unknown>;
export type DetectMitigationActionExecutionStatus = never;
export interface DetectMitigationActionsTaskStatistics {
}
export type DetectMitigationActionsTaskStatus = never;
export interface DetectMitigationActionsTaskSummary {
}
export type DetectMitigationActionsTaskSummaryList = Array<unknown>;
export interface DetectMitigationActionsTaskTarget {
}
export type DetectMitigationActionsToExecuteList = Array<unknown>;
export type DeviceCertificateUpdateAction = never;
export type DeviceDefenderIndexingMode = never;
export type DeviceDefenderThingName = string;

export type DimensionArn = string;

export type DimensionName = string;

export type DimensionNames = Array<unknown>;
export type DimensionStringValue = string;

export type DimensionStringValues = Array<unknown>;
export type DimensionType = never;
export type DimensionValueOperator = never;
export type DisableAllLogs = boolean;

export interface DisableTopicRuleRequest {
}
export interface DisassociateSbomFromPackageVersionRequest {
}
export interface DisassociateSbomFromPackageVersionResponse {
}
export type DisconnectReason = string;

export type DisconnectReasonValue = never;
export type DisplayName = string;

export interface DocumentParameter {
}
export type DocumentParameters = Array<unknown>;
export type DomainConfigurationArn = string;

export type DomainConfigurationName = string;

export type DomainConfigurations = Array<unknown>;
export type DomainConfigurationStatus = never;
export interface DomainConfigurationSummary {
}
export type DomainName = string;

export type DomainType = never;
export type DoubleParameterValue = number;

export type DurationInMinutes = number;

export type DurationSeconds = number;

export type DynamicGroupStatus = never;
export interface DynamoDBAction {
}
export interface DynamoDBv2Action {
}
export type DynamoKeyType = never;
export type DynamoOperation = string;

export type EffectivePolicies = Array<unknown>;
export interface EffectivePolicy {
}
export interface ElasticsearchAction {
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
}
export type EnableOCSPCheck = boolean;

export interface EnableTopicRuleRequest {
}
export type EndpointAddress = string;

export type EndpointType = string;

export type Environment = string;

export type Environments = Array<unknown>;
export type ErrorCode = string;

export interface ErrorInfo {
}
export type ErrorMessage = string;

export type ErrorMessage2 = string;

export type EvaluationStatistic = string;

export type EventConfigurations = Record<string, unknown>;
export type EventType = never;
export type Example = string;

export type ExecutionNamePrefix = string;

export type ExecutionNumber = number;

export type ExpectedVersion = number;

export type ExpiresInSec = number;

export type ExpiresInSeconds = number;

export interface ExplicitDeny {
}
export interface ExponentialRolloutRate {
}
export type ExportMetric = boolean;

export type FailedChecksCount = number;

export type FailedFindingsCount = number;

export type FailedThings = number;

export interface Field {
}
export type FieldName = string;

export type Fields = Array<unknown>;
export type FieldType = never;
export type FileId = number;

export interface FileLocation {
}
export type FileName = string;

export type FileType = number;

export type FindingId = string;

export type FindingIds = Array<unknown>;
export interface FirehoseAction {
}
export type FirehoseSeparator = string;

export type Flag = boolean;

export type FleetMetricArn = string;

export type FleetMetricDescription = string;

export type FleetMetricName = string;

export interface FleetMetricNameAndArn {
}
export type FleetMetricNameAndArnList = Array<unknown>;
export type FleetMetricPeriod = number;

export type FleetMetricUnit = never;
export type Forced = boolean;

export type ForceDelete = boolean;

export type ForceDeleteAWSJob = boolean;

export type ForceFlag = boolean;

export type FunctionArn = string;

export type GenerationId = string;

export type GenericLongValue = number;

export type GeoLocationsFilter = Array<unknown>;
export interface GeoLocationTarget {
}
export interface GetBehaviorModelTrainingSummariesRequest {
}
export interface GetBehaviorModelTrainingSummariesResponse {
}
export interface GetBucketsAggregationRequest {
}
export interface GetBucketsAggregationResponse {
}
export interface GetCardinalityRequest {
}
export interface GetCardinalityResponse {
}
export interface GetCommandExecutionRequest {
}
export interface GetCommandExecutionResponse {
}
export interface GetCommandRequest {
}
export interface GetCommandResponse {
}
export interface GetEffectivePoliciesRequest {
}
export interface GetEffectivePoliciesResponse {
}
export interface GetIndexingConfigurationRequest {
}
export interface GetIndexingConfigurationResponse {
}
export interface GetJobDocumentRequest {
}
export interface GetJobDocumentResponse {
}
export interface GetLoggingOptionsRequest {
}
export interface GetLoggingOptionsResponse {
}
export interface GetOTAUpdateRequest {
}
export interface GetOTAUpdateResponse {
}
export interface GetPackageConfigurationRequest {
}
export interface GetPackageConfigurationResponse {
}
export interface GetPackageRequest {
}
export interface GetPackageResponse {
}
export interface GetPackageVersionRequest {
}
export interface GetPackageVersionResponse {
}
export interface GetPercentilesRequest {
}
export interface GetPercentilesResponse {
}
export interface GetPolicyRequest {
}
export interface GetPolicyResponse {
}
export interface GetPolicyVersionRequest {
}
export interface GetPolicyVersionResponse {
}
export interface GetRegistrationCodeRequest {
}
export interface GetRegistrationCodeResponse {
}
export interface GetStatisticsRequest {
}
export interface GetStatisticsResponse {
}
export interface GetThingConnectivityDataRequest {
}
export interface GetThingConnectivityDataResponse {
}
export interface GetTopicRuleDestinationRequest {
}
export interface GetTopicRuleDestinationResponse {
}
export interface GetTopicRuleRequest {
}
export interface GetTopicRuleResponse {
}
export interface GetV2LoggingOptionsRequest {
}
export interface GetV2LoggingOptionsResponse {
}
export interface GroupNameAndArn {
}
export type HashAlgorithm = string;

export type HashKeyField = string;

export type HashKeyValue = string;

export type HeaderKey = string;

export type HeaderList = Array<unknown>;
export type HeaderValue = string;

export interface HttpAction {
}
export interface HttpActionHeader {
}
export interface HttpAuthorization {
}
export interface HttpContext {
}
export type HttpHeaderName = string;

export type HttpHeaders = Record<string, unknown>;
export type HttpHeaderValue = string;

export type HttpQueryString = string;

export interface HttpUrlDestinationConfiguration {
}
export interface HttpUrlDestinationProperties {
}
export interface HttpUrlDestinationSummary {
}
export interface ImplicitDeny {
}
export type IncrementFactor = number;

export interface IndexingFilter {
}
export type IndexName = string;

export type IndexNamesList = Array<unknown>;
export interface IndexNotReadyException {
}
export type IndexSchema = string;

export type IndexStatus = never;
export type InlineDocument = string;

export type InProgressChecksCount = number;

export type InProgressThings = number;

export type InProgressTimeoutInMinutes = number;

export type InputName = string;

export type IntegerParameterValue = number;

export interface InternalException {
}
export interface InternalFailureException {
}
export interface InternalServerException {
}
export interface InvalidAggregationException {
}
export interface InvalidQueryException {
}
export interface InvalidRequestException {
}
export interface InvalidResponseException {
}
export interface InvalidStateTransitionException {
}
export interface IotAnalyticsAction {
}
export interface IotEventsAction {
}
export interface IotSiteWiseAction {
}
export type IsAuthenticated = boolean;

export type IsDefaultVersion = boolean;

export type IsDisabled = boolean;

export interface IssuerCertificateIdentifier {
}
export type IssuerCertificateSerialNumber = string;

export type IssuerCertificateSubject = string;

export type IssuerId = string;

export type IsSuppressed = boolean;

export interface Job {
}
export type JobArn = string;

export type JobDescription = string;

export type JobDocument = string;

export type JobDocumentSource = string;

export type JobEndBehavior = never;
export interface JobExecution {
}
export type JobExecutionFailureType = never;
export interface JobExecutionsRetryConfig {
}
export interface JobExecutionsRolloutConfig {
}
export type JobExecutionStatus = never;
export interface JobExecutionStatusDetails {
}
export interface JobExecutionSummary {
}
export interface JobExecutionSummaryForJob {
}
export type JobExecutionSummaryForJobList = Array<unknown>;
export interface JobExecutionSummaryForThing {
}
export type JobExecutionSummaryForThingList = Array<unknown>;
export type JobId = string;

export interface JobProcessDetails {
}
export type JobStatus = never;
export interface JobSummary {
}
export type JobSummaryList = Array<unknown>;
export type JobTargets = Array<unknown>;
export type JobTemplateArn = string;

export type JobTemplateId = string;

export interface JobTemplateSummary {
}
export type JobTemplateSummaryList = Array<unknown>;
export type JsonDocument = string;

export interface KafkaAction {
}
export interface KafkaActionHeader {
}
export type KafkaHeaderKey = string;

export type KafkaHeaders = Array<unknown>;
export type KafkaHeaderValue = string;

export type Key = string;

export type KeyName = string;

export interface KeyPair {
}
export type KeyValue = string;

export interface KinesisAction {
}
export interface LambdaAction {
}
export type LaserMaxResults = number;

export type LastModifiedDate = Date | string;

export type LastUpdatedAtDate = Date | string;

export interface LimitExceededException {
}
export interface ListActiveViolationsRequest {
}
export interface ListActiveViolationsResponse {
}
export interface ListAttachedPoliciesRequest {
}
export interface ListAttachedPoliciesResponse {
}
export interface ListAuditFindingsRequest {
}
export interface ListAuditFindingsResponse {
}
export interface ListAuditMitigationActionsExecutionsRequest {
}
export interface ListAuditMitigationActionsExecutionsResponse {
}
export interface ListAuditMitigationActionsTasksRequest {
}
export interface ListAuditMitigationActionsTasksResponse {
}
export interface ListAuditSuppressionsRequest {
}
export interface ListAuditSuppressionsResponse {
}
export interface ListAuditTasksRequest {
}
export interface ListAuditTasksResponse {
}
export interface ListAuthorizersRequest {
}
export interface ListAuthorizersResponse {
}
export interface ListBillingGroupsRequest {
}
export interface ListBillingGroupsResponse {
}
export interface ListCACertificatesRequest {
}
export interface ListCACertificatesResponse {
}
export interface ListCertificateProvidersRequest {
}
export interface ListCertificateProvidersResponse {
}
export interface ListCertificatesByCARequest {
}
export interface ListCertificatesByCAResponse {
}
export interface ListCertificatesRequest {
}
export interface ListCertificatesResponse {
}
export interface ListCommandExecutionsRequest {
}
export interface ListCommandExecutionsResponse {
}
export interface ListCommandsRequest {
}
export interface ListCommandsResponse {
}
export interface ListCustomMetricsRequest {
}
export interface ListCustomMetricsResponse {
}
export interface ListDetectMitigationActionsExecutionsRequest {
}
export interface ListDetectMitigationActionsExecutionsResponse {
}
export interface ListDetectMitigationActionsTasksRequest {
}
export interface ListDetectMitigationActionsTasksResponse {
}
export interface ListDimensionsRequest {
}
export interface ListDimensionsResponse {
}
export interface ListDomainConfigurationsRequest {
}
export interface ListDomainConfigurationsResponse {
}
export interface ListFleetMetricsRequest {
}
export interface ListFleetMetricsResponse {
}
export interface ListIndicesRequest {
}
export interface ListIndicesResponse {
}
export interface ListJobExecutionsForJobRequest {
}
export interface ListJobExecutionsForJobResponse {
}
export interface ListJobExecutionsForThingRequest {
}
export interface ListJobExecutionsForThingResponse {
}
export interface ListJobsRequest {
}
export interface ListJobsResponse {
}
export interface ListJobTemplatesRequest {
}
export interface ListJobTemplatesResponse {
}
export interface ListManagedJobTemplatesRequest {
}
export interface ListManagedJobTemplatesResponse {
}
export interface ListMetricValuesRequest {
}
export interface ListMetricValuesResponse {
}
export interface ListMitigationActionsRequest {
}
export interface ListMitigationActionsResponse {
}
export interface ListOTAUpdatesRequest {
}
export interface ListOTAUpdatesResponse {
}
export interface ListOutgoingCertificatesRequest {
}
export interface ListOutgoingCertificatesResponse {
}
export interface ListPackagesRequest {
}
export interface ListPackagesResponse {
}
export interface ListPackageVersionsRequest {
}
export interface ListPackageVersionsResponse {
}
export interface ListPoliciesRequest {
}
export interface ListPoliciesResponse {
}
export interface ListPolicyPrincipalsRequest {
}
export interface ListPolicyPrincipalsResponse {
}
export interface ListPolicyVersionsRequest {
}
export interface ListPolicyVersionsResponse {
}
export interface ListPrincipalPoliciesRequest {
}
export interface ListPrincipalPoliciesResponse {
}
export interface ListPrincipalThingsRequest {
}
export interface ListPrincipalThingsResponse {
}
export interface ListPrincipalThingsV2Request {
}
export interface ListPrincipalThingsV2Response {
}
export interface ListProvisioningTemplatesRequest {
}
export interface ListProvisioningTemplatesResponse {
}
export interface ListProvisioningTemplateVersionsRequest {
}
export interface ListProvisioningTemplateVersionsResponse {
}
export interface ListRelatedResourcesForAuditFindingRequest {
}
export interface ListRelatedResourcesForAuditFindingResponse {
}
export interface ListRoleAliasesRequest {
}
export interface ListRoleAliasesResponse {
}
export interface ListSbomValidationResultsRequest {
}
export interface ListSbomValidationResultsResponse {
}
export interface ListScheduledAuditsRequest {
}
export interface ListScheduledAuditsResponse {
}
export interface ListSecurityProfilesForTargetRequest {
}
export interface ListSecurityProfilesForTargetResponse {
}
export interface ListSecurityProfilesRequest {
}
export interface ListSecurityProfilesResponse {
}
export interface ListStreamsRequest {
}
export interface ListStreamsResponse {
}
export type ListSuppressedAlerts = boolean;

export type ListSuppressedFindings = boolean;

export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export interface ListTargetsForPolicyRequest {
}
export interface ListTargetsForPolicyResponse {
}
export interface ListTargetsForSecurityProfileRequest {
}
export interface ListTargetsForSecurityProfileResponse {
}
export interface ListThingGroupsForThingRequest {
}
export interface ListThingGroupsForThingResponse {
}
export interface ListThingGroupsRequest {
}
export interface ListThingGroupsResponse {
}
export interface ListThingPrincipalsRequest {
}
export interface ListThingPrincipalsResponse {
}
export interface ListThingPrincipalsV2Request {
}
export interface ListThingPrincipalsV2Response {
}
export interface ListThingRegistrationTaskReportsRequest {
}
export interface ListThingRegistrationTaskReportsResponse {
}
export interface ListThingRegistrationTasksRequest {
}
export interface ListThingRegistrationTasksResponse {
}
export interface ListThingsInBillingGroupRequest {
}
export interface ListThingsInBillingGroupResponse {
}
export interface ListThingsInThingGroupRequest {
}
export interface ListThingsInThingGroupResponse {
}
export interface ListThingsRequest {
}
export interface ListThingsResponse {
}
export interface ListThingTypesRequest {
}
export interface ListThingTypesResponse {
}
export interface ListTopicRuleDestinationsRequest {
}
export interface ListTopicRuleDestinationsResponse {
}
export interface ListTopicRulesRequest {
}
export interface ListTopicRulesResponse {
}
export interface ListV2LoggingLevelsRequest {
}
export interface ListV2LoggingLevelsResponse {
}
export interface ListViolationEventsRequest {
}
export interface ListViolationEventsResponse {
}
export interface LocationAction {
}
export interface LocationTimestamp {
}
export interface LoggingOptionsPayload {
}
export type LogGroupName = string;

export type LogLevel = never;
export interface LogTarget {
}
export interface LogTargetConfiguration {
}
export type LogTargetConfigurations = Array<unknown>;
export type LogTargetName = string;

export type LogTargetType = never;
export type LongParameterValue = number;

export interface MachineLearningDetectionConfig {
}
export interface MaintenanceWindow {
}
export type MaintenanceWindows = Array<unknown>;
export interface MalformedPolicyException {
}
export type ManagedJobTemplateName = string;

export type ManagedJobTemplatesSummaryList = Array<unknown>;
export interface ManagedJobTemplateSummary {
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

export type MessageFormat = never;
export type MessageId = string;

export interface MetricDatum {
}
export type MetricDatumList = Array<unknown>;
export interface MetricDimension {
}
export type MetricName = string;

export type MetricNames = Array<unknown>;
export interface MetricsExportConfig {
}
export interface MetricToRetain {
}
export interface MetricValue {
}
export type MimeType = string;

export type Minimum = number;

export type MinimumNumberOfExecutedThings = number;

export type MissingContextValue = string;

export type MissingContextValues = Array<unknown>;
export interface MitigationAction {
}
export type MitigationActionArn = string;

export type MitigationActionId = string;

export interface MitigationActionIdentifier {
}
export type MitigationActionIdentifierList = Array<unknown>;
export type MitigationActionList = Array<unknown>;
export type MitigationActionName = string;

export type MitigationActionNameList = Array<unknown>;
export interface MitigationActionParams {
}
export type MitigationActionsTaskId = string;

export type MitigationActionType = never;
export type ModelStatus = never;
export interface Mqtt5Configuration {
}
export type MqttClientId = string;

export interface MqttContext {
}
export interface MqttHeaders {
}
export type MqttPassword = Uint8Array | string;

export type MqttTopic = string;

export type MqttUsername = string;

export type NamedShadowIndexingMode = never;
export type NamedShadowNamesFilter = Array<unknown>;
export type NamespaceId = string;

export type NextToken = string;

export type NonCompliantChecksCount = number;

export interface NonCompliantResource {
}
export type NonCompliantResourcesCount = number;

export interface NotConfiguredException {
}
export type NullableBoolean = boolean;

export type NumberList = Array<unknown>;
export type NumberOfRetries = number;

export type NumberOfThings = number;

export type OCSPLambdaArn = string;

export interface OpenSearchAction {
}
export type Optional = boolean;

export type OptionalVersion = number;

export type OTAUpdateArn = string;

export type OTAUpdateDescription = string;

export type OTAUpdateErrorMessage = string;

export interface OTAUpdateFile {
}
export type OTAUpdateFiles = Array<unknown>;
export type OTAUpdateFileVersion = string;

export type OTAUpdateId = string;

export interface OTAUpdateInfo {
}
export type OTAUpdatesSummary = Array<unknown>;
export type OTAUpdateStatus = never;
export interface OTAUpdateSummary {
}
export interface OutgoingCertificate {
}
export type OutgoingCertificates = Array<unknown>;
export type OverrideDynamicGroups = boolean;

export type PackageArn = string;

export type PackageCatalogMaxResults = number;

export type PackageName = string;

export interface PackageSummary {
}
export type PackageSummaryList = Array<unknown>;
export type PackageVersionAction = never;
export type PackageVersionArn = string;

export interface PackageVersionArtifact {
}
export type PackageVersionErrorReason = string;

export type PackageVersionRecipe = string;

export type PackageVersionStatus = never;
export interface PackageVersionSummary {
}
export type PackageVersionSummaryList = Array<unknown>;
export type PageSize = number;

export type Parameter = string;

export type ParameterKey = string;

export type ParameterMap = Record<string, unknown>;
export type Parameters = Record<string, unknown>;
export type ParameterValue = string;

export type PartitionKey = string;

export type PayloadField = string;

export type PayloadFormatIndicator = string;

export type PayloadVersion = string;

export type Percent = number;

export type Percentage = number;

export type Percentiles = Array<unknown>;
export type PercentList = Array<unknown>;
export interface PercentPair {
}
export type PercentValue = number;

export type Platform = string;

export type Policies = Array<unknown>;
export interface Policy {
}
export type PolicyArn = string;

export type PolicyDocument = string;

export type PolicyDocuments = Array<unknown>;
export type PolicyName = string;

export type PolicyNames = Array<unknown>;
export type PolicyTarget = string;

export type PolicyTargets = Array<unknown>;
export type PolicyTemplateName = never;
export interface PolicyVersion {
}
export type PolicyVersionId = string;

export interface PolicyVersionIdentifier {
}
export type PolicyVersions = Array<unknown>;
export type Port = number;

export type Ports = Array<unknown>;
export type Prefix = string;

export interface PresignedUrlConfig {
}
export type PrimitiveBoolean = boolean;

export type Principal = string;

export type PrincipalArn = string;

export type PrincipalId = string;

export type Principals = Array<unknown>;
export interface PrincipalThingObject {
}
export type PrincipalThingObjects = Array<unknown>;
export type PrivateKey = string;

export type ProcessingTargetName = string;

export type ProcessingTargetNameList = Array<unknown>;
export interface PropagatingAttribute {
}
export type PropagatingAttributeList = Array<unknown>;
export type Protocol = never;
export type Protocols = Array<unknown>;
export interface ProvisioningHook {
}
export type ProvisioningTemplateListing = Array<unknown>;
export interface ProvisioningTemplateSummary {
}
export type ProvisioningTemplateVersionListing = Array<unknown>;
export interface ProvisioningTemplateVersionSummary {
}
export type PublicKey = string;

export type PublicKeyMap = Record<string, unknown>;
export interface PublishFindingToSnsParams {
}
export interface PutAssetPropertyValueEntry {
}
export type PutAssetPropertyValueEntryList = Array<unknown>;
export interface PutItemInput {
}
export interface PutVerificationStateOnViolationRequest {
}
export interface PutVerificationStateOnViolationResponse {
}
export type Qos = number;

export type QueryMaxResults = number;

export type QueryString = string;

export type QueryVersion = string;

export type QueuedThings = number;

export type QueueUrl = string;

export type RangeKeyField = string;

export type RangeKeyValue = string;

export interface RateIncreaseCriteria {
}
export type ReasonCode = string;

export type ReasonForNonCompliance = string;

export type ReasonForNonComplianceCode = string;

export type ReasonForNonComplianceCodes = Array<unknown>;
export type Recursive = boolean;

export type RecursiveWithoutDefault = boolean;

export type Regex = string;

export interface RegisterCACertificateRequest {
}
export interface RegisterCACertificateResponse {
}
export interface RegisterCertificateRequest {
}
export interface RegisterCertificateResponse {
}
export interface RegisterCertificateWithoutCARequest {
}
export interface RegisterCertificateWithoutCAResponse {
}
export interface RegisterThingRequest {
}
export interface RegisterThingResponse {
}
export type RegistrationCode = string;

export interface RegistrationCodeValidationException {
}
export interface RegistrationConfig {
}
export type RegistryMaxResults = number;

export type RegistryS3BucketName = string;

export type RegistryS3KeyName = string;

export interface RejectCertificateTransferRequest {
}
export type RejectedThings = number;

export interface RelatedResource {
}
export type RelatedResources = Array<unknown>;
export type RemoveAuthorizerConfig = boolean;

export type RemoveAutoRegistration = boolean;

export type RemovedThings = number;

export type RemoveHook = boolean;

export interface RemoveThingFromBillingGroupRequest {
}
export interface RemoveThingFromBillingGroupResponse {
}
export interface RemoveThingFromThingGroupRequest {
}
export interface RemoveThingFromThingGroupResponse {
}
export type RemoveThingType = boolean;

export interface ReplaceDefaultPolicyVersionParams {
}
export interface ReplaceTopicRuleRequest {
}
export type ReportType = never;
export interface RepublishAction {
}
export type ReservedDomainConfigurationName = string;

export type Resource = string;

export interface ResourceAlreadyExistsException {
}
export type ResourceArn = string;

export type ResourceArns = Record<string, unknown>;
export type ResourceAttributeKey = string;

export type ResourceAttributes = Record<string, unknown>;
export type ResourceAttributeValue = string;

export type ResourceDescription = string;

export type resourceId = string;

export interface ResourceIdentifier {
}
export type ResourceLogicalId = string;

export interface ResourceNotFoundException {
}
export interface ResourceRegistrationFailureException {
}
export type Resources = Array<unknown>;
export type ResourceType = never;
export type ResponseTopic = string;

export type RetryableFailureType = never;
export type RetryAttempt = number;

export interface RetryCriteria {
}
export type RetryCriteriaList = Array<unknown>;
export type RoleAlias = string;

export type RoleAliasArn = string;

export interface RoleAliasDescription {
}
export type RoleAliases = Array<unknown>;
export type RoleArn = string;

export type RolloutRatePerMinute = number;

export type RuleArn = string;

export type RuleName = string;

export interface S3Action {
}
export type S3Bucket = string;

export interface S3Destination {
}
export type S3FileUrl = string;

export type S3FileUrlList = Array<unknown>;
export type S3Key = string;

export interface S3Location {
}
export type S3Version = string;

export interface SalesforceAction {
}
export type SalesforceEndpoint = string;

export type SalesforceToken = string;

export interface Sbom {
}
export type SbomValidationErrorCode = never;
export type SbomValidationErrorMessage = string;

export type SbomValidationResult = never;
export interface SbomValidationResultSummary {
}
export type SbomValidationResultSummaryList = Array<unknown>;
export type SbomValidationStatus = never;
export type ScheduledAuditArn = string;

export interface ScheduledAuditMetadata {
}
export type ScheduledAuditMetadataList = Array<unknown>;
export type ScheduledAuditName = string;

export interface ScheduledJobRollout {
}
export type ScheduledJobRolloutList = Array<unknown>;
export interface SchedulingConfig {
}
export type SearchableAttributes = Array<unknown>;
export interface SearchIndexRequest {
}
export interface SearchIndexResponse {
}
export type SearchQueryMaxResults = number;

export type Seconds = number;

export type SecurityGroupId = string;

export type SecurityGroupList = Array<unknown>;
export type SecurityPolicy = string;

export type SecurityProfileArn = string;

export type SecurityProfileDescription = string;

export interface SecurityProfileIdentifier {
}
export type SecurityProfileIdentifiers = Array<unknown>;
export type SecurityProfileName = string;

export interface SecurityProfileTarget {
}
export type SecurityProfileTargetArn = string;

export interface SecurityProfileTargetMapping {
}
export type SecurityProfileTargetMappings = Array<unknown>;
export type SecurityProfileTargets = Array<unknown>;
export type ServerCertificateArns = Array<unknown>;
export interface ServerCertificateConfig {
}
export type ServerCertificates = Array<unknown>;
export type ServerCertificateStatus = never;
export type ServerCertificateStatusDetail = string;

export interface ServerCertificateSummary {
}
export type ServerName = string;

export type ServiceName = string;

export interface ServiceQuotaExceededException {
}
export type ServiceType = never;
export interface ServiceUnavailableException {
}
export type SetAsActive = boolean;

export type SetAsActiveFlag = boolean;

export type SetAsDefault = boolean;

export interface SetDefaultAuthorizerRequest {
}
export interface SetDefaultAuthorizerResponse {
}
export interface SetDefaultPolicyVersionRequest {
}
export interface SetLoggingOptionsRequest {
}
export interface SetV2LoggingLevelRequest {
}
export interface SetV2LoggingOptionsRequest {
}
export type ShadowName = string;

export type Signature = Uint8Array | string;

export type SignatureAlgorithm = string;

export type SigningJobId = string;

export type SigningProfileName = string;

export interface SigningProfileParameter {
}
export type SigningRegion = string;

export interface SigV4Authorization {
}
export type SkippedFindingsCount = number;

export type SkyfallMaxResults = number;

export interface SnsAction {
}
export type SnsTopicArn = string;

export type SortOrder = never;
export type SQL = string;

export interface SqlParseException {
}
export interface SqsAction {
}
export interface StartAuditMitigationActionsTaskRequest {
}
export interface StartAuditMitigationActionsTaskResponse {
}
export interface StartDetectMitigationActionsTaskRequest {
}
export interface StartDetectMitigationActionsTaskResponse {
}
export interface StartOnDemandAuditTaskRequest {
}
export interface StartOnDemandAuditTaskResponse {
}
export interface StartSigningJobParameter {
}
export interface StartThingRegistrationTaskRequest {
}
export interface StartThingRegistrationTaskResponse {
}
export type StateMachineName = string;

export type StateReason = string;

export type StateValue = string;

export interface StatisticalThreshold {
}
export interface Statistics {
}
export type Status = never;
export type StatusCode = number;

export interface StatusReason {
}
export type StatusReasonCode = string;

export type StatusReasonDescription = string;

export type StdDeviation = number;

export interface StepFunctionsAction {
}
export interface StopThingRegistrationTaskRequest {
}
export interface StopThingRegistrationTaskResponse {
}
export interface Stream {
}
export type StreamArn = string;

export type StreamDescription = string;

export interface StreamFile {
}
export type StreamFiles = Array<unknown>;
export type StreamId = string;

export interface StreamInfo {
}
export type StreamName = string;

export type StreamsSummary = Array<unknown>;
export interface StreamSummary {
}
export type StreamVersion = number;

export type StringCommandExecutionResult = string;

export type StringDateTime = string;

export type StringList = Array<unknown>;
export type StringMap = Record<string, unknown>;
export type StringParameterValue = string;

export type stringValue = string;

export type SubnetId = string;

export type SubnetIdList = Array<unknown>;
export type SucceededFindingsCount = number;

export type SucceededThings = number;

export type Sum = number;

export type SumOfSquares = number;

export type SuppressAlerts = boolean;

export type SuppressedNonCompliantResourcesCount = number;

export type SuppressIndefinitely = boolean;

export type TableName = string;

export interface Tag {
}
export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagList = Array<unknown>;
export type TagMap = Record<string, unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type TagValue = string;

export type Target = string;

export type TargetArn = string;

export type TargetAuditCheckNames = Array<unknown>;
export type TargetFieldName = string;

export type TargetFieldOrder = never;
export type Targets = Array<unknown>;
export type TargetSelection = never;
export type TargetViolationIdsForDetectMitigationActions = Array<unknown>;
export interface TaskAlreadyExistsException {
}
export type TaskId = string;

export type TaskIdList = Array<unknown>;
export interface TaskStatistics {
}
export interface TaskStatisticsForAuditCheck {
}
export type TemplateArn = string;

export type TemplateBody = string;

export type TemplateDescription = string;

export type TemplateName = string;

export type TemplateType = never;
export type TemplateVersionId = number;

export interface TermsAggregation {
}
export interface TestAuthorizationRequest {
}
export interface TestAuthorizationResponse {
}
export interface TestInvokeAuthorizerRequest {
}
export interface TestInvokeAuthorizerResponse {
}
export type ThingArn = string;

export interface ThingAttribute {
}
export type ThingAttributeList = Array<unknown>;
export interface ThingConnectivity {
}
export type ThingConnectivityIndexingMode = never;
export interface ThingDocument {
}
export type ThingDocumentList = Array<unknown>;
export type ThingGroupArn = string;

export type ThingGroupDescription = string;

export interface ThingGroupDocument {
}
export type ThingGroupDocumentList = Array<unknown>;
export type ThingGroupId = string;

export interface ThingGroupIndexingConfiguration {
}
export type ThingGroupIndexingMode = never;
export type ThingGroupList = Array<unknown>;
export interface ThingGroupMetadata {
}
export type ThingGroupName = string;

export type ThingGroupNameAndArnList = Array<unknown>;
export type ThingGroupNameList = Array<unknown>;
export type ThingGroupNames = Array<unknown>;
export interface ThingGroupProperties {
}
export type ThingId = string;

export interface ThingIndexingConfiguration {
}
export type ThingIndexingMode = never;
export type ThingName = string;

export type ThingNameList = Array<unknown>;
export interface ThingPrincipalObject {
}
export type ThingPrincipalObjects = Array<unknown>;
export type ThingPrincipalType = never;
export type ThingTypeArn = string;

export interface ThingTypeDefinition {
}
export type ThingTypeDescription = string;

export type ThingTypeId = string;

export type ThingTypeList = Array<unknown>;
export interface ThingTypeMetadata {
}
export type ThingTypeName = string;

export interface ThingTypeProperties {
}
export interface ThrottlingException {
}
export type TimedOutThings = number;

export interface TimeFilter {
}
export interface TimeoutConfig {
}
export type Timestamp = Date | string;

export interface TimestreamAction {
}
export type TimestreamDatabaseName = string;

export interface TimestreamDimension {
}
export type TimestreamDimensionList = Array<unknown>;
export type TimestreamDimensionName = string;

export type TimestreamDimensionValue = string;

export type TimestreamTableName = string;

export interface TimestreamTimestamp {
}
export type TimestreamTimestampUnit = string;

export type TimestreamTimestampValue = string;

export type TinyMaxResults = number;

export interface TlsConfig {
}
export interface TlsContext {
}
export type Token = string;

export type TokenKeyName = string;

export type TokenSignature = string;

export type Topic = string;

export type TopicPattern = string;

export interface TopicRule {
}
export interface TopicRuleDestination {
}
export interface TopicRuleDestinationConfiguration {
}
export type TopicRuleDestinationMaxResults = number;

export type TopicRuleDestinationStatus = never;
export type TopicRuleDestinationSummaries = Array<unknown>;
export interface TopicRuleDestinationSummary {
}
export type TopicRuleList = Array<unknown>;
export interface TopicRuleListItem {
}
export type TopicRuleMaxResults = number;

export interface TopicRulePayload {
}
export type TotalChecksCount = number;

export type TotalFindingsCount = number;

export type TotalResourcesCount = number;

export interface TransferAlreadyCompletedException {
}
export interface TransferCertificateRequest {
}
export interface TransferCertificateResponse {
}
export interface TransferConflictException {
}
export interface TransferData {
}
export interface UnauthorizedException {
}
export type UndoDeprecate = boolean;

export type UnsetDefaultVersion = boolean;

export type UnsignedLong = number;

export type UnsignedLongParameterValue = string;

export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export interface UpdateAccountAuditConfigurationRequest {
}
export interface UpdateAccountAuditConfigurationResponse {
}
export interface UpdateAuditSuppressionRequest {
}
export interface UpdateAuditSuppressionResponse {
}
export interface UpdateAuthorizerRequest {
}
export interface UpdateAuthorizerResponse {
}
export interface UpdateBillingGroupRequest {
}
export interface UpdateBillingGroupResponse {
}
export interface UpdateCACertificateParams {
}
export interface UpdateCACertificateRequest {
}
export interface UpdateCertificateProviderRequest {
}
export interface UpdateCertificateProviderResponse {
}
export interface UpdateCertificateRequest {
}
export interface UpdateCommandRequest {
}
export interface UpdateCommandResponse {
}
export interface UpdateCustomMetricRequest {
}
export interface UpdateCustomMetricResponse {
}
export interface UpdateDeviceCertificateParams {
}
export interface UpdateDimensionRequest {
}
export interface UpdateDimensionResponse {
}
export interface UpdateDomainConfigurationRequest {
}
export interface UpdateDomainConfigurationResponse {
}
export interface UpdateDynamicThingGroupRequest {
}
export interface UpdateDynamicThingGroupResponse {
}
export interface UpdateEventConfigurationsRequest {
}
export interface UpdateEventConfigurationsResponse {
}
export interface UpdateFleetMetricRequest {
}
export interface UpdateIndexingConfigurationRequest {
}
export interface UpdateIndexingConfigurationResponse {
}
export interface UpdateJobRequest {
}
export interface UpdateMitigationActionRequest {
}
export interface UpdateMitigationActionResponse {
}
export interface UpdatePackageConfigurationRequest {
}
export interface UpdatePackageConfigurationResponse {
}
export interface UpdatePackageRequest {
}
export interface UpdatePackageResponse {
}
export interface UpdatePackageVersionRequest {
}
export interface UpdatePackageVersionResponse {
}
export interface UpdateProvisioningTemplateRequest {
}
export interface UpdateProvisioningTemplateResponse {
}
export interface UpdateRoleAliasRequest {
}
export interface UpdateRoleAliasResponse {
}
export interface UpdateScheduledAuditRequest {
}
export interface UpdateScheduledAuditResponse {
}
export interface UpdateSecurityProfileRequest {
}
export interface UpdateSecurityProfileResponse {
}
export interface UpdateStreamRequest {
}
export interface UpdateStreamResponse {
}
export interface UpdateThingGroupRequest {
}
export interface UpdateThingGroupResponse {
}
export interface UpdateThingGroupsForThingRequest {
}
export interface UpdateThingGroupsForThingResponse {
}
export interface UpdateThingRequest {
}
export interface UpdateThingResponse {
}
export interface UpdateThingTypeRequest {
}
export interface UpdateThingTypeResponse {
}
export interface UpdateTopicRuleDestinationRequest {
}
export interface UpdateTopicRuleDestinationResponse {
}
export type Url = string;

export type UseBase64 = boolean;

export type usePrefixAttributeValue = boolean;

export type UserProperties = Array<unknown>;
export interface UserProperty {
}
export type UserPropertyKey = string;

export type UserPropertyKeyName = string;

export type UserPropertyValue = string;

export type Valid = boolean;

export interface ValidateSecurityProfileBehaviorsRequest {
}
export interface ValidateSecurityProfileBehaviorsResponse {
}
export interface ValidationError {
}
export type ValidationErrors = Array<unknown>;
export interface ValidationException {
}
export type Value = string;

export type Variance = number;

export type VerificationState = never;
export type VerificationStateDescription = string;

export type Version = number;

export interface VersionConflictException {
}
export type VersionName = string;

export type VersionNumber = number;

export interface VersionsLimitExceededException {
}
export interface VersionUpdateByJobsConfig {
}
export interface ViolationEvent {
}
export interface ViolationEventAdditionalInfo {
}
export interface ViolationEventOccurrenceRange {
}
export type ViolationEvents = Array<unknown>;
export type ViolationEventType = never;
export type ViolationId = string;

export interface VpcDestinationConfiguration {
}
export interface VpcDestinationProperties {
}
export interface VpcDestinationSummary {
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AddThingToThingGroup {
  export type Input = AddThingToThingGroupRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateSbomWithPackageVersion {
  export type Input = AssociateSbomWithPackageVersionRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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

export declare namespace CancelAuditMitigationActionsTask {
  export type Input = CancelAuditMitigationActionsTaskRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CancelAuditTask {
  export type Input = CancelAuditTaskRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CancelJob {
  export type Input = CancelJobRequest;
  export type Output = {};
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

export declare namespace ConfirmTopicRuleDestination {
  export type Input = ConfirmTopicRuleDestinationRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateCertificateFromCsr {
  export type Input = CreateCertificateFromCsrRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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

export declare namespace CreateProvisioningTemplate {
  export type Input = CreateProvisioningTemplateRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateStream {
  export type Input = CreateStreamRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceAlreadyExistsException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateThingType {
  export type Input = CreateThingTypeRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteAuditSuppression {
  export type Input = DeleteAuditSuppressionRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteAuthorizer {
  export type Input = DeleteAuthorizerRequest;
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

export declare namespace DeleteBillingGroup {
  export type Input = DeleteBillingGroupRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError;
}

export declare namespace DeleteCACertificate {
  export type Input = DeleteCACertificateRequest;
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

export declare namespace DeleteCommand {
  export type Input = DeleteCommandRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCommandExecution {
  export type Input = DeleteCommandExecutionRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCustomMetric {
  export type Input = DeleteCustomMetricRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDimension {
  export type Input = DeleteDimensionRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDomainConfiguration {
  export type Input = DeleteDomainConfigurationRequest;
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

export declare namespace DeleteDynamicThingGroup {
  export type Input = DeleteDynamicThingGroupRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteOTAUpdate {
  export type Input = DeleteOTAUpdateRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeletePackageVersion {
  export type Input = DeletePackageVersionRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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

export declare namespace DeleteScheduledAudit {
  export type Input = DeleteScheduledAuditRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteSecurityProfile {
  export type Input = DeleteSecurityProfileRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError;
}

export declare namespace DeleteStream {
  export type Input = DeleteStreamRequest;
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

export declare namespace DeleteThing {
  export type Input = DeleteThingRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | VersionConflictException
    | CommonAwsError;
}

export declare namespace DeleteThingType {
  export type Input = DeleteThingTypeRequest;
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
  export type Output = {};
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

export declare namespace DescribeAccountAuditConfiguration {
  export type Input = DescribeAccountAuditConfigurationRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAuditFinding {
  export type Input = DescribeAuditFindingRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAuditMitigationActionsTask {
  export type Input = DescribeAuditMitigationActionsTaskRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAuditSuppression {
  export type Input = DescribeAuditSuppressionRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAuditTask {
  export type Input = DescribeAuditTaskRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAuthorizer {
  export type Input = DescribeAuthorizerRequest;
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

export declare namespace DescribeBillingGroup {
  export type Input = DescribeBillingGroupRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeCACertificate {
  export type Input = DescribeCACertificateRequest;
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

export declare namespace DescribeCertificate {
  export type Input = DescribeCertificateRequest;
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

export declare namespace DescribeCertificateProvider {
  export type Input = DescribeCertificateProviderRequest;
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

export declare namespace DescribeCustomMetric {
  export type Input = DescribeCustomMetricRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDefaultAuthorizer {
  export type Input = DescribeDefaultAuthorizerRequest;
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

export declare namespace DescribeDetectMitigationActionsTask {
  export type Input = DescribeDetectMitigationActionsTaskRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDimension {
  export type Input = DescribeDimensionRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeDomainConfiguration {
  export type Input = DescribeDomainConfigurationRequest;
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

export declare namespace DescribeEndpoint {
  export type Input = DescribeEndpointRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeEventConfigurations {
  export type Input = DescribeEventConfigurationsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeFleetMetric {
  export type Input = DescribeFleetMetricRequest;
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

export declare namespace DescribeIndex {
  export type Input = DescribeIndexRequest;
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

export declare namespace DescribeJob {
  export type Input = DescribeJobRequest;
  export type Output = {};
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeJobExecution {
  export type Input = DescribeJobExecutionRequest;
  export type Output = {};
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeJobTemplate {
  export type Input = DescribeJobTemplateRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeManagedJobTemplate {
  export type Input = DescribeManagedJobTemplateRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeMitigationAction {
  export type Input = DescribeMitigationActionRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeProvisioningTemplate {
  export type Input = DescribeProvisioningTemplateRequest;
  export type Output = {};
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
  export type Output = {};
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

export declare namespace DescribeScheduledAudit {
  export type Input = DescribeScheduledAuditRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeSecurityProfile {
  export type Input = DescribeSecurityProfileRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeStream {
  export type Input = DescribeStreamRequest;
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

export declare namespace DescribeThing {
  export type Input = DescribeThingRequest;
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

export declare namespace DescribeThingGroup {
  export type Input = DescribeThingGroupRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeThingRegistrationTask {
  export type Input = DescribeThingRegistrationTaskRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DetachThingPrincipal {
  export type Input = DetachThingPrincipalRequest;
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetBucketsAggregation {
  export type Input = GetBucketsAggregationRequest;
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
    | CommonAwsError;
}

export declare namespace GetCardinality {
  export type Input = GetCardinalityRequest;
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
    | CommonAwsError;
}

export declare namespace GetCommand {
  export type Input = GetCommandRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCommandExecution {
  export type Input = GetCommandExecutionRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetEffectivePolicies {
  export type Input = GetEffectivePoliciesRequest;
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

export declare namespace GetIndexingConfiguration {
  export type Input = GetIndexingConfigurationRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetLoggingOptions {
  export type Input = GetLoggingOptionsRequest;
  export type Output = {};
  export type Error =
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetOTAUpdate {
  export type Input = GetOTAUpdateRequest;
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

export declare namespace GetPackage {
  export type Input = GetPackageRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPackageConfiguration {
  export type Input = GetPackageConfigurationRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetPackageVersion {
  export type Input = GetPackageVersionRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetPercentiles {
  export type Input = GetPercentilesRequest;
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
    | CommonAwsError;
}

export declare namespace GetPolicy {
  export type Input = GetPolicyRequest;
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

export declare namespace GetPolicyVersion {
  export type Input = GetPolicyVersionRequest;
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

export declare namespace GetRegistrationCode {
  export type Input = GetRegistrationCodeRequest;
  export type Output = {};
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
    | CommonAwsError;
}

export declare namespace GetThingConnectivityData {
  export type Input = GetThingConnectivityDataRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetTopicRuleDestination {
  export type Input = GetTopicRuleDestinationRequest;
  export type Output = {};
  export type Error =
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetV2LoggingOptions {
  export type Input = GetV2LoggingOptionsRequest;
  export type Output = {};
  export type Error =
    | InternalException
    | NotConfiguredException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListActiveViolations {
  export type Input = ListActiveViolationsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAttachedPolicies {
  export type Input = ListAttachedPoliciesRequest;
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

export declare namespace ListAuditFindings {
  export type Input = ListAuditFindingsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAuditMitigationActionsExecutions {
  export type Input = ListAuditMitigationActionsExecutionsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAuditMitigationActionsTasks {
  export type Input = ListAuditMitigationActionsTasksRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAuditSuppressions {
  export type Input = ListAuditSuppressionsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAuditTasks {
  export type Input = ListAuditTasksRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAuthorizers {
  export type Input = ListAuthorizersRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListCACertificates {
  export type Input = ListCACertificatesRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCommands {
  export type Input = ListCommandsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCustomMetrics {
  export type Input = ListCustomMetricsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDetectMitigationActionsExecutions {
  export type Input = ListDetectMitigationActionsExecutionsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDetectMitigationActionsTasks {
  export type Input = ListDetectMitigationActionsTasksRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDimensions {
  export type Input = ListDimensionsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDomainConfigurations {
  export type Input = ListDomainConfigurationsRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListJobExecutionsForThing {
  export type Input = ListJobExecutionsForThingRequest;
  export type Output = {};
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListJobTemplates {
  export type Input = ListJobTemplatesRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListJobs {
  export type Input = ListJobsRequest;
  export type Output = {};
  export type Error =
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListManagedJobTemplates {
  export type Input = ListManagedJobTemplatesRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListMetricValues {
  export type Input = ListMetricValuesRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListMitigationActions {
  export type Input = ListMitigationActionsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListOTAUpdates {
  export type Input = ListOTAUpdatesRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListPackageVersions {
  export type Input = ListPackageVersionsRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPackages {
  export type Input = ListPackagesRequest;
  export type Output = {};
  export type Error =
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListPolicies {
  export type Input = ListPoliciesRequest;
  export type Output = {};
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

export declare namespace ListPolicyVersions {
  export type Input = ListPolicyVersionsRequest;
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

export declare namespace ListPrincipalPolicies {
  export type Input = ListPrincipalPoliciesRequest;
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

export declare namespace ListPrincipalThings {
  export type Input = ListPrincipalThingsRequest;
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

export declare namespace ListPrincipalThingsV2 {
  export type Input = ListPrincipalThingsV2Request;
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

export declare namespace ListProvisioningTemplateVersions {
  export type Input = ListProvisioningTemplateVersionsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListProvisioningTemplates {
  export type Input = ListProvisioningTemplatesRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListRelatedResourcesForAuditFinding {
  export type Input = ListRelatedResourcesForAuditFindingRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListRoleAliases {
  export type Input = ListRoleAliasesRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListScheduledAudits {
  export type Input = ListScheduledAuditsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListSecurityProfiles {
  export type Input = ListSecurityProfilesRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListSecurityProfilesForTarget {
  export type Input = ListSecurityProfilesForTargetRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListStreams {
  export type Input = ListStreamsRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTargetsForPolicy {
  export type Input = ListTargetsForPolicyRequest;
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

export declare namespace ListTargetsForSecurityProfile {
  export type Input = ListTargetsForSecurityProfileRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListThingGroups {
  export type Input = ListThingGroupsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListThingGroupsForThing {
  export type Input = ListThingGroupsForThingRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListThingPrincipals {
  export type Input = ListThingPrincipalsRequest;
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

export declare namespace ListThingPrincipalsV2 {
  export type Input = ListThingPrincipalsV2Request;
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

export declare namespace ListThingRegistrationTaskReports {
  export type Input = ListThingRegistrationTaskReportsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListThingRegistrationTasks {
  export type Input = ListThingRegistrationTasksRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListThingTypes {
  export type Input = ListThingTypesRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ServiceUnavailableException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListThings {
  export type Input = ListThingsRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListThingsInThingGroup {
  export type Input = ListThingsInThingGroupRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTopicRuleDestinations {
  export type Input = ListTopicRuleDestinationsRequest;
  export type Output = {};
  export type Error =
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListTopicRules {
  export type Input = ListTopicRulesRequest;
  export type Output = {};
  export type Error =
    | InternalException
    | InvalidRequestException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListV2LoggingLevels {
  export type Input = ListV2LoggingLevelsRequest;
  export type Output = {};
  export type Error =
    | InternalException
    | InvalidRequestException
    | NotConfiguredException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListViolationEvents {
  export type Input = ListViolationEventsRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutVerificationStateOnViolation {
  export type Input = PutVerificationStateOnViolationRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace RegisterCACertificate {
  export type Input = RegisterCACertificateRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace RemoveThingFromThingGroup {
  export type Input = RemoveThingFromThingGroupRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartThingRegistrationTask {
  export type Input = StartThingRegistrationTaskRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace StopThingRegistrationTask {
  export type Input = StopThingRegistrationTaskRequest;
  export type Output = {};
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
  export type Output = {};
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

export declare namespace TestInvokeAuthorizer {
  export type Input = TestInvokeAuthorizerRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateAccountAuditConfiguration {
  export type Input = UpdateAccountAuditConfigurationRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateAuditSuppression {
  export type Input = UpdateAuditSuppressionRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateAuthorizer {
  export type Input = UpdateAuthorizerRequest;
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

export declare namespace UpdateBillingGroup {
  export type Input = UpdateBillingGroupRequest;
  export type Output = {};
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

export declare namespace UpdateCommand {
  export type Input = UpdateCommandRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDimension {
  export type Input = UpdateDimensionRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateDomainConfiguration {
  export type Input = UpdateDomainConfigurationRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdatePackage {
  export type Input = UpdatePackageRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | ConflictException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdatePackageVersion {
  export type Input = UpdatePackageVersionRequest;
  export type Output = {};
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
  export type Output = {};
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

export declare namespace UpdateScheduledAudit {
  export type Input = UpdateScheduledAuditRequest;
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateSecurityProfile {
  export type Input = UpdateSecurityProfileRequest;
  export type Output = {};
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

export declare namespace UpdateThing {
  export type Input = UpdateThingRequest;
  export type Output = {};
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
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateThingType {
  export type Input = UpdateThingTypeRequest;
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

export declare namespace UpdateTopicRuleDestination {
  export type Input = UpdateTopicRuleDestinationRequest;
  export type Output = {};
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
  export type Output = {};
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

