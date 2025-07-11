import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AmazonConnectService {
  activateEvaluationForm(
    input: ActivateEvaluationFormRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | ResourceConflictException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  associateAnalyticsDataSet(
    input: AssociateAnalyticsDataSetRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  associateApprovedOrigin(
    input: AssociateApprovedOriginRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  associateBot(
    input: AssociateBotRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidRequestException | LimitExceededException | ResourceConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  associateDefaultVocabulary(
    input: AssociateDefaultVocabularyRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  associateFlow(
    input: AssociateFlowRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  associateInstanceStorageConfig(
    input: AssociateInstanceStorageConfigRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceConflictException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  associateLambdaFunction(
    input: AssociateLambdaFunctionRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  associateLexBot(
    input: AssociateLexBotRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  associatePhoneNumberContactFlow(
    input: AssociatePhoneNumberContactFlowRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  associateQueueQuickConnects(
    input: AssociateQueueQuickConnectsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  associateRoutingProfileQueues(
    input: AssociateRoutingProfileQueuesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  associateSecurityKey(
    input: AssociateSecurityKeyRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  associateTrafficDistributionGroupUser(
    input: AssociateTrafficDistributionGroupUserRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceConflictException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  associateUserProficiencies(
    input: AssociateUserProficienciesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  batchAssociateAnalyticsDataSet(
    input: BatchAssociateAnalyticsDataSetRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  batchDisassociateAnalyticsDataSet(
    input: BatchDisassociateAnalyticsDataSetRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  batchGetAttachedFileMetadata(
    input: BatchGetAttachedFileMetadataRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  batchGetFlowAssociation(
    input: BatchGetFlowAssociationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  batchPutContact(
    input: BatchPutContactRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | IdempotencyException | InternalServiceException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  claimPhoneNumber(
    input: ClaimPhoneNumberRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | IdempotencyException | InternalServiceException | InvalidParameterException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  completeAttachedFileUpload(
    input: CompleteAttachedFileUploadRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createAgentStatus(
    input: CreateAgentStatusRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createContact(
    input: CreateContactRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | IdempotencyException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  createContactFlow(
    input: CreateContactFlowRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidContactFlowException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createContactFlowModule(
    input: CreateContactFlowModuleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | DuplicateResourceException | IdempotencyException | InternalServiceException | InvalidContactFlowModuleException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createContactFlowVersion(
    input: CreateContactFlowVersionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createEmailAddress(
    input: CreateEmailAddressRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | DuplicateResourceException | IdempotencyException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  createEvaluationForm(
    input: CreateEvaluationFormRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | ResourceConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  createHoursOfOperation(
    input: CreateHoursOfOperationRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createHoursOfOperationOverride(
    input: CreateHoursOfOperationOverrideRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createInstance(
    input: CreateInstanceRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidRequestException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  createIntegrationAssociation(
    input: CreateIntegrationAssociationRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createParticipant(
    input: CreateParticipantRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidRequestException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  createPersistentContactAssociation(
    input: CreatePersistentContactAssociationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createPredefinedAttribute(
    input: CreatePredefinedAttributeRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createPrompt(
    input: CreatePromptRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ThrottlingException | CommonAwsError
  >;
  createPushNotificationRegistration(
    input: CreatePushNotificationRegistrationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  createQueue(
    input: CreateQueueRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createQuickConnect(
    input: CreateQuickConnectRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createRoutingProfile(
    input: CreateRoutingProfileRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createRule(
    input: CreateRuleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  createSecurityProfile(
    input: CreateSecurityProfileRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createTaskTemplate(
    input: CreateTaskTemplateRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | PropertyValidationException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  createTrafficDistributionGroup(
    input: CreateTrafficDistributionGroupRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceConflictException | ResourceNotFoundException | ResourceNotReadyException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  createUseCase(
    input: CreateUseCaseRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createUser(
    input: CreateUserRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createUserHierarchyGroup(
    input: CreateUserHierarchyGroupRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  createView(
    input: CreateViewRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | ServiceQuotaExceededException | TooManyRequestsException | CommonAwsError
  >;
  createViewVersion(
    input: CreateViewVersionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | ServiceQuotaExceededException | TooManyRequestsException | CommonAwsError
  >;
  createVocabulary(
    input: CreateVocabularyRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  deactivateEvaluationForm(
    input: DeactivateEvaluationFormRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | ResourceConflictException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteAttachedFile(
    input: DeleteAttachedFileRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteContactEvaluation(
    input: DeleteContactEvaluationRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | ResourceConflictException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteContactFlow(
    input: DeleteContactFlowRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteContactFlowModule(
    input: DeleteContactFlowModuleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteContactFlowVersion(
    input: DeleteContactFlowVersionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteEmailAddress(
    input: DeleteEmailAddressRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceConflictException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteEvaluationForm(
    input: DeleteEvaluationFormRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | ResourceConflictException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteHoursOfOperation(
    input: DeleteHoursOfOperationRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteHoursOfOperationOverride(
    input: DeleteHoursOfOperationOverrideRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteInstance(
    input: DeleteInstanceRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  deleteIntegrationAssociation(
    input: DeleteIntegrationAssociationRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deletePredefinedAttribute(
    input: DeletePredefinedAttributeRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deletePrompt(
    input: DeletePromptRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deletePushNotificationRegistration(
    input: DeletePushNotificationRegistrationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteQueue(
    input: DeleteQueueRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteQuickConnect(
    input: DeleteQuickConnectRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteRoutingProfile(
    input: DeleteRoutingProfileRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteRule(
    input: DeleteRuleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteSecurityProfile(
    input: DeleteSecurityProfileRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteTaskTemplate(
    input: DeleteTaskTemplateRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteTrafficDistributionGroup(
    input: DeleteTrafficDistributionGroupRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceInUseException | ThrottlingException | CommonAwsError
  >;
  deleteUseCase(
    input: DeleteUseCaseRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteUser(
    input: DeleteUserRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteUserHierarchyGroup(
    input: DeleteUserHierarchyGroupRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteView(
    input: DeleteViewRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteViewVersion(
    input: DeleteViewVersionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteVocabulary(
    input: DeleteVocabularyRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeAgentStatus(
    input: DescribeAgentStatusRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeAuthenticationProfile(
    input: DescribeAuthenticationProfileRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeContact(
    input: DescribeContactRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeContactEvaluation(
    input: DescribeContactEvaluationRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeContactFlow(
    input: DescribeContactFlowRequest,
  ): Effect.Effect<
    {},
    ContactFlowNotPublishedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeContactFlowModule(
    input: DescribeContactFlowModuleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeEmailAddress(
    input: DescribeEmailAddressRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeEvaluationForm(
    input: DescribeEvaluationFormRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeHoursOfOperation(
    input: DescribeHoursOfOperationRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeHoursOfOperationOverride(
    input: DescribeHoursOfOperationOverrideRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeInstance(
    input: DescribeInstanceRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  describeInstanceAttribute(
    input: DescribeInstanceAttributeRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeInstanceStorageConfig(
    input: DescribeInstanceStorageConfigRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describePhoneNumber(
    input: DescribePhoneNumberRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describePredefinedAttribute(
    input: DescribePredefinedAttributeRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describePrompt(
    input: DescribePromptRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeQueue(
    input: DescribeQueueRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeQuickConnect(
    input: DescribeQuickConnectRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeRoutingProfile(
    input: DescribeRoutingProfileRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeRule(
    input: DescribeRuleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeSecurityProfile(
    input: DescribeSecurityProfileRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeTrafficDistributionGroup(
    input: DescribeTrafficDistributionGroupRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeUser(
    input: DescribeUserRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeUserHierarchyGroup(
    input: DescribeUserHierarchyGroupRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeUserHierarchyStructure(
    input: DescribeUserHierarchyStructureRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeView(
    input: DescribeViewRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeVocabulary(
    input: DescribeVocabularyRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  disassociateAnalyticsDataSet(
    input: DisassociateAnalyticsDataSetRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  disassociateApprovedOrigin(
    input: DisassociateApprovedOriginRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  disassociateBot(
    input: DisassociateBotRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  disassociateFlow(
    input: DisassociateFlowRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  disassociateInstanceStorageConfig(
    input: DisassociateInstanceStorageConfigRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  disassociateLambdaFunction(
    input: DisassociateLambdaFunctionRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  disassociateLexBot(
    input: DisassociateLexBotRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  disassociatePhoneNumberContactFlow(
    input: DisassociatePhoneNumberContactFlowRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  disassociateQueueQuickConnects(
    input: DisassociateQueueQuickConnectsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  disassociateRoutingProfileQueues(
    input: DisassociateRoutingProfileQueuesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  disassociateSecurityKey(
    input: DisassociateSecurityKeyRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  disassociateTrafficDistributionGroupUser(
    input: DisassociateTrafficDistributionGroupUserRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceConflictException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  disassociateUserProficiencies(
    input: DisassociateUserProficienciesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  dismissUserContact(
    input: DismissUserContactRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getAttachedFile(
    input: GetAttachedFileRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getContactAttributes(
    input: GetContactAttributesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  getCurrentMetricData(
    input: GetCurrentMetricDataRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getCurrentUserData(
    input: GetCurrentUserDataRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getEffectiveHoursOfOperations(
    input: GetEffectiveHoursOfOperationsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getFederationToken(
    input: GetFederationTokenRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | UserNotFoundException | CommonAwsError
  >;
  getFlowAssociation(
    input: GetFlowAssociationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getMetricData(
    input: GetMetricDataRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getMetricDataV2(
    input: GetMetricDataV2Request,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getPromptFile(
    input: GetPromptFileRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getTaskTemplate(
    input: GetTaskTemplateRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  getTrafficDistribution(
    input: GetTrafficDistributionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  importPhoneNumber(
    input: ImportPhoneNumberRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | IdempotencyException | InternalServiceException | InvalidParameterException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listAgentStatuses(
    input: ListAgentStatusRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listAnalyticsDataAssociations(
    input: ListAnalyticsDataAssociationsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listAnalyticsDataLakeDataSets(
    input: ListAnalyticsDataLakeDataSetsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listApprovedOrigins(
    input: ListApprovedOriginsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listAssociatedContacts(
    input: ListAssociatedContactsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listAuthenticationProfiles(
    input: ListAuthenticationProfilesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listBots(
    input: ListBotsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listContactEvaluations(
    input: ListContactEvaluationsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listContactFlowModules(
    input: ListContactFlowModulesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listContactFlowVersions(
    input: ListContactFlowVersionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listContactFlows(
    input: ListContactFlowsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listContactReferences(
    input: ListContactReferencesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listDefaultVocabularies(
    input: ListDefaultVocabulariesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listEvaluationFormVersions(
    input: ListEvaluationFormVersionsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listEvaluationForms(
    input: ListEvaluationFormsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listFlowAssociations(
    input: ListFlowAssociationsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listHoursOfOperationOverrides(
    input: ListHoursOfOperationOverridesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listHoursOfOperations(
    input: ListHoursOfOperationsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listInstanceAttributes(
    input: ListInstanceAttributesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listInstanceStorageConfigs(
    input: ListInstanceStorageConfigsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listInstances(
    input: ListInstancesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidRequestException | CommonAwsError
  >;
  listIntegrationAssociations(
    input: ListIntegrationAssociationsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listLambdaFunctions(
    input: ListLambdaFunctionsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listLexBots(
    input: ListLexBotsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listPhoneNumbers(
    input: ListPhoneNumbersRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listPhoneNumbersV2(
    input: ListPhoneNumbersV2Request,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listPredefinedAttributes(
    input: ListPredefinedAttributesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listPrompts(
    input: ListPromptsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listQueueQuickConnects(
    input: ListQueueQuickConnectsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listQueues(
    input: ListQueuesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listQuickConnects(
    input: ListQuickConnectsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listRealtimeContactAnalysisSegmentsV2(
    input: ListRealtimeContactAnalysisSegmentsV2Request,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | OutputTypeNotFoundException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listRoutingProfileQueues(
    input: ListRoutingProfileQueuesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listRoutingProfiles(
    input: ListRoutingProfilesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listRules(
    input: ListRulesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listSecurityKeys(
    input: ListSecurityKeysRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listSecurityProfileApplications(
    input: ListSecurityProfileApplicationsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listSecurityProfilePermissions(
    input: ListSecurityProfilePermissionsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listSecurityProfiles(
    input: ListSecurityProfilesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listTaskTemplates(
    input: ListTaskTemplatesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listTrafficDistributionGroupUsers(
    input: ListTrafficDistributionGroupUsersRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listTrafficDistributionGroups(
    input: ListTrafficDistributionGroupsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listUseCases(
    input: ListUseCasesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listUserHierarchyGroups(
    input: ListUserHierarchyGroupsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listUserProficiencies(
    input: ListUserProficienciesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listUsers(
    input: ListUsersRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listViewVersions(
    input: ListViewVersionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listViews(
    input: ListViewsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  monitorContact(
    input: MonitorContactRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | IdempotencyException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  pauseContact(
    input: PauseContactRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  putUserStatus(
    input: PutUserStatusRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  releasePhoneNumber(
    input: ReleasePhoneNumberRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | IdempotencyException | InternalServiceException | InvalidParameterException | ResourceInUseException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  replicateInstance(
    input: ReplicateInstanceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceConflictException | ResourceNotFoundException | ResourceNotReadyException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  resumeContact(
    input: ResumeContactRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  resumeContactRecording(
    input: ResumeContactRecordingRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  searchAgentStatuses(
    input: SearchAgentStatusesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchAvailablePhoneNumbers(
    input: SearchAvailablePhoneNumbersRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | ThrottlingException | CommonAwsError
  >;
  searchContactFlowModules(
    input: SearchContactFlowModulesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchContactFlows(
    input: SearchContactFlowsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchContacts(
    input: SearchContactsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchEmailAddresses(
    input: SearchEmailAddressesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchHoursOfOperationOverrides(
    input: SearchHoursOfOperationOverridesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchHoursOfOperations(
    input: SearchHoursOfOperationsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchPredefinedAttributes(
    input: SearchPredefinedAttributesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchPrompts(
    input: SearchPromptsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchQueues(
    input: SearchQueuesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchQuickConnects(
    input: SearchQuickConnectsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchResourceTags(
    input: SearchResourceTagsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | MaximumResultReturnedException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchRoutingProfiles(
    input: SearchRoutingProfilesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchSecurityProfiles(
    input: SearchSecurityProfilesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchUserHierarchyGroups(
    input: SearchUserHierarchyGroupsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchUsers(
    input: SearchUsersRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  searchVocabularies(
    input: SearchVocabulariesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  sendChatIntegrationEvent(
    input: SendChatIntegrationEventRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  sendOutboundEmail(
    input: SendOutboundEmailRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | IdempotencyException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  startAttachedFileUpload(
    input: StartAttachedFileUploadRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceConflictException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  startChatContact(
    input: StartChatContactRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  startContactEvaluation(
    input: StartContactEvaluationRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | ResourceConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  startContactRecording(
    input: StartContactRecordingRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  startContactStreaming(
    input: StartContactStreamingRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  startEmailContact(
    input: StartEmailContactRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | IdempotencyException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  startOutboundChatContact(
    input: StartOutboundChatContactRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServiceException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  startOutboundEmailContact(
    input: StartOutboundEmailContactRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | IdempotencyException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  startOutboundVoiceContact(
    input: StartOutboundVoiceContactRequest,
  ): Effect.Effect<
    {},
    DestinationNotAllowedException | InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | OutboundContactNotPermittedException | ResourceNotFoundException | CommonAwsError
  >;
  startScreenSharing(
    input: StartScreenSharingRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  startTaskContact(
    input: StartTaskContactRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  startWebRTCContact(
    input: StartWebRTCContactRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | CommonAwsError
  >;
  stopContact(
    input: StopContactRequest,
  ): Effect.Effect<
    {},
    ContactNotFoundException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  stopContactRecording(
    input: StopContactRecordingRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  stopContactStreaming(
    input: StopContactStreamingRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  submitContactEvaluation(
    input: SubmitContactEvaluationRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | ResourceConflictException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  suspendContactRecording(
    input: SuspendContactRecordingRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  tagContact(
    input: TagContactRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  transferContact(
    input: TransferContactRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | IdempotencyException | InternalServiceException | InvalidRequestException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  untagContact(
    input: UntagContactRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateAgentStatus(
    input: UpdateAgentStatusRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateAuthenticationProfile(
    input: UpdateAuthenticationProfileRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateContact(
    input: UpdateContactRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateContactAttributes(
    input: UpdateContactAttributesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  updateContactEvaluation(
    input: UpdateContactEvaluationRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | ResourceConflictException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateContactFlowContent(
    input: UpdateContactFlowContentRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidContactFlowException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateContactFlowMetadata(
    input: UpdateContactFlowMetadataRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateContactFlowModuleContent(
    input: UpdateContactFlowModuleContentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidContactFlowModuleException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateContactFlowModuleMetadata(
    input: UpdateContactFlowModuleMetadataRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateContactFlowName(
    input: UpdateContactFlowNameRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateContactRoutingData(
    input: UpdateContactRoutingDataRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | ResourceConflictException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateContactSchedule(
    input: UpdateContactScheduleRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | LimitExceededException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateEmailAddressMetadata(
    input: UpdateEmailAddressMetadataRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | IdempotencyException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateEvaluationForm(
    input: UpdateEvaluationFormRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | ResourceConflictException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  updateHoursOfOperation(
    input: UpdateHoursOfOperationRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateHoursOfOperationOverride(
    input: UpdateHoursOfOperationOverrideRequest,
  ): Effect.Effect<
    {},
    ConditionalOperationFailedException | DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateInstanceAttribute(
    input: UpdateInstanceAttributeRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateInstanceStorageConfig(
    input: UpdateInstanceStorageConfigRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateParticipantAuthentication(
    input: UpdateParticipantAuthenticationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServiceException | InvalidParameterException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  updateParticipantRoleConfig(
    input: UpdateParticipantRoleConfigRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updatePhoneNumber(
    input: UpdatePhoneNumberRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | IdempotencyException | InternalServiceException | InvalidParameterException | ResourceInUseException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updatePhoneNumberMetadata(
    input: UpdatePhoneNumberMetadataRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | IdempotencyException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updatePredefinedAttribute(
    input: UpdatePredefinedAttributeRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updatePrompt(
    input: UpdatePromptRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateQueueHoursOfOperation(
    input: UpdateQueueHoursOfOperationRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateQueueMaxContacts(
    input: UpdateQueueMaxContactsRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateQueueName(
    input: UpdateQueueNameRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateQueueOutboundCallerConfig(
    input: UpdateQueueOutboundCallerConfigRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateQueueOutboundEmailConfig(
    input: UpdateQueueOutboundEmailConfigRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConditionalOperationFailedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateQueueStatus(
    input: UpdateQueueStatusRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateQuickConnectConfig(
    input: UpdateQuickConnectConfigRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateQuickConnectName(
    input: UpdateQuickConnectNameRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateRoutingProfileAgentAvailabilityTimer(
    input: UpdateRoutingProfileAgentAvailabilityTimerRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateRoutingProfileConcurrency(
    input: UpdateRoutingProfileConcurrencyRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateRoutingProfileDefaultOutboundQueue(
    input: UpdateRoutingProfileDefaultOutboundQueueRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateRoutingProfileName(
    input: UpdateRoutingProfileNameRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateRoutingProfileQueues(
    input: UpdateRoutingProfileQueuesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateRule(
    input: UpdateRuleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceConflictException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateSecurityProfile(
    input: UpdateSecurityProfileRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateTaskTemplate(
    input: UpdateTaskTemplateRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | PropertyValidationException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | CommonAwsError
  >;
  updateTrafficDistribution(
    input: UpdateTrafficDistributionRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidRequestException | ResourceConflictException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateUserHierarchy(
    input: UpdateUserHierarchyRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateUserHierarchyGroupName(
    input: UpdateUserHierarchyGroupNameRequest,
  ): Effect.Effect<
    {},
    DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateUserHierarchyStructure(
    input: UpdateUserHierarchyStructureRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateUserIdentityInfo(
    input: UpdateUserIdentityInfoRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateUserPhoneConfig(
    input: UpdateUserPhoneConfigRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateUserProficiencies(
    input: UpdateUserProficienciesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateUserRoutingProfile(
    input: UpdateUserRoutingProfileRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateUserSecurityProfiles(
    input: UpdateUserSecurityProfilesRequest,
  ): Effect.Effect<
    {},
    InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  updateViewContent(
    input: UpdateViewContentRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateViewMetadata(
    input: UpdateViewMetadataRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | DuplicateResourceException | InternalServiceException | InvalidParameterException | InvalidRequestException | ResourceInUseException | ResourceNotFoundException | TooManyRequestsException | CommonAwsError
  >;
}

export type Connect = AmazonConnectService;

export interface AccessDeniedException {
}
export type AccessTokenDuration = number;

export type ActionSummaries = Array<unknown>;
export interface ActionSummary {
}
export type ActionType = never;
export interface ActivateEvaluationFormRequest {
}
export interface ActivateEvaluationFormResponse {
}
export interface AdditionalEmailRecipients {
}
export type AfterContactWorkTimeLimit = number;

export type AgentAvailabilityTimer = never;
export interface AgentConfig {
}
export interface AgentContactReference {
}
export type AgentContactReferenceList = Array<unknown>;
export type AgentFirstName = string;

export interface AgentHierarchyGroup {
}
export interface AgentHierarchyGroups {
}
export type AgentId = string;

export type AgentIds = Array<unknown>;
export interface AgentInfo {
}
export type AgentLastName = string;

export type AgentPauseDurationInSeconds = number;

export interface AgentQualityMetrics {
}
export type AgentResourceId = string;

export type AgentResourceIdList = Array<unknown>;
export interface AgentsCriteria {
}
export type AgentsMinOneMaxHundred = Array<unknown>;
export interface AgentStatus {
}
export type AgentStatusDescription = string;

export type AgentStatusId = string;

export type AgentStatusList = Array<unknown>;
export type AgentStatusName = string;

export type AgentStatusOrderNumber = number;

export interface AgentStatusReference {
}
export type AgentStatusSearchConditionList = Array<unknown>;
export interface AgentStatusSearchCriteria {
}
export interface AgentStatusSearchFilter {
}
export type AgentStatusState = never;
export interface AgentStatusSummary {
}
export type AgentStatusSummaryList = Array<unknown>;
export type AgentStatusType = never;
export type AgentStatusTypes = Array<unknown>;
export type AgentUsername = string;

export type AliasArn = string;

export type AllowedAccessControlTags = Record<string, unknown>;
export interface AllowedCapabilities {
}
export type AllowedMonitorCapabilities = Array<unknown>;
export interface AnalyticsDataAssociationResult {
}
export type AnalyticsDataAssociationResults = Array<unknown>;
export interface AnalyticsDataSetsResult {
}
export type AnalyticsDataSetsResults = Array<unknown>;
export type AnsweringMachineDetectionStatus = never;
export interface AnswerMachineDetectionConfig {
}
export interface Application {
}
export type ApplicationPermissions = Array<unknown>;
export type Applications = Array<unknown>;
export type ApproximateTotalCount = number;

export type ARN = string;

export type ArtifactId = string;

export type ArtifactStatus = never;
export interface AssignContactCategoryActionDefinition {
}
export interface AssignSlaActionDefinition {
}
export interface AssociateAnalyticsDataSetRequest {
}
export interface AssociateAnalyticsDataSetResponse {
}
export interface AssociateApprovedOriginRequest {
}
export interface AssociateBotRequest {
}
export interface AssociatedContactSummary {
}
export type AssociatedContactSummaryList = Array<unknown>;
export interface AssociateDefaultVocabularyRequest {
}
export interface AssociateDefaultVocabularyResponse {
}
export type AssociatedQueueIdList = Array<unknown>;
export interface AssociateFlowRequest {
}
export interface AssociateFlowResponse {
}
export interface AssociateInstanceStorageConfigRequest {
}
export interface AssociateInstanceStorageConfigResponse {
}
export interface AssociateLambdaFunctionRequest {
}
export interface AssociateLexBotRequest {
}
export interface AssociatePhoneNumberContactFlowRequest {
}
export interface AssociateQueueQuickConnectsRequest {
}
export interface AssociateRoutingProfileQueuesRequest {
}
export interface AssociateSecurityKeyRequest {
}
export interface AssociateSecurityKeyResponse {
}
export interface AssociateTrafficDistributionGroupUserRequest {
}
export interface AssociateTrafficDistributionGroupUserResponse {
}
export interface AssociateUserProficienciesRequest {
}
export type AssociationId = string;

export interface AttachedFile {
}
export interface AttachedFileError {
}
export type AttachedFileErrorsList = Array<unknown>;
export type AttachedFileInvalidRequestExceptionReason = never;
export type AttachedFileServiceQuotaExceededExceptionReason = never;
export type AttachedFilesList = Array<unknown>;
export type AttachmentName = string;

export interface AttachmentReference {
}
export interface Attendee {
}
export type AttendeeId = string;

export interface Attribute {
}
export interface AttributeAndCondition {
}
export interface AttributeCondition {
}
export type AttributeName = string;

export type AttributeOrConditionList = Array<unknown>;
export type Attributes = Record<string, unknown>;
export type AttributesList = Array<unknown>;
export type AttributeValue = string;

export interface AudioFeatures {
}
export interface AudioQualityMetricsInfo {
}
export type AudioQualityScore = number;

export type AuthenticationError = string;

export type AuthenticationErrorDescription = string;

export interface AuthenticationProfile {
}
export type AuthenticationProfileDescription = string;

export type AuthenticationProfileId = string;

export type AuthenticationProfileName = string;

export interface AuthenticationProfileSummary {
}
export type AuthenticationProfileSummaryList = Array<unknown>;
export type AuthorizationCode = string;

export type AutoAccept = boolean;

export type AvailableNumbersList = Array<unknown>;
export interface AvailableNumberSummary {
}
export type AWSAccountId = string;

export type AwsRegion = string;

export interface BatchAssociateAnalyticsDataSetRequest {
}
export interface BatchAssociateAnalyticsDataSetResponse {
}
export interface BatchDisassociateAnalyticsDataSetRequest {
}
export interface BatchDisassociateAnalyticsDataSetResponse {
}
export interface BatchGetAttachedFileMetadataRequest {
}
export interface BatchGetAttachedFileMetadataResponse {
}
export interface BatchGetFlowAssociationRequest {
}
export interface BatchGetFlowAssociationResponse {
}
export interface BatchPutContactRequest {
}
export interface BatchPutContactResponse {
}
export type BehaviorType = never;
export type Body = string;

export type BotName = string;

export type BoxedBoolean = boolean;

export type BucketName = string;

export interface Campaign {
}
export type CampaignId = string;

export interface CaseSlaConfiguration {
}
export type Channel = never;
export type ChannelList = Array<unknown>;
export type Channels = Array<unknown>;
export type ChannelToCountMap = Record<string, unknown>;
export interface ChatContactMetrics {
}
export type ChatContent = string;

export type ChatContentType = string;

export type ChatDurationInMinutes = number;

export interface ChatEvent {
}
export type ChatEventType = never;
export interface ChatMessage {
}
export interface ChatMetrics {
}
export interface ChatParticipantRoleConfig {
}
export interface ChatStreamingConfiguration {
}
export type ChatStreamingEndpointARN = string;

export interface ClaimedPhoneNumberSummary {
}
export interface ClaimPhoneNumberRequest {
}
export interface ClaimPhoneNumberResponse {
}
export type ClientToken = string;

export interface CommonAttributeAndCondition {
}
export type CommonAttributeOrConditionList = Array<unknown>;
export type CommonHumanReadableDescription = string;

export type CommonHumanReadableName = string;

export type CommonNameLength127 = string;

export type Comparison = never;
export type ComparisonOperator = string;

export interface CompleteAttachedFileUploadRequest {
}
export interface CompleteAttachedFileUploadResponse {
}
export type Concurrency = number;

export interface Condition {
}
export interface ConditionalOperationFailedException {
}
export type Conditions = Array<unknown>;
export interface ConflictException {
}
export interface ConnectionData {
}
export interface Contact {
}
export interface ContactAnalysis {
}
export interface ContactConfiguration {
}
export interface ContactDataRequest {
}
export type ContactDataRequestList = Array<unknown>;
export type ContactDetailDescription = string;

export type ContactDetailName = string;

export interface ContactDetails {
}
export interface ContactEvaluation {
}
export type ContactEvaluations = Record<string, unknown>;
export interface ContactFilter {
}
export interface ContactFlow {
}
export type ContactFlowContent = string;

export type ContactFlowDescription = string;

export type ContactFlowId = string;

export interface ContactFlowModule {
}
export type ContactFlowModuleContent = string;

export type ContactFlowModuleDescription = string;

export type ContactFlowModuleId = string;

export type ContactFlowModuleName = string;

export type ContactFlowModuleSearchConditionList = Array<unknown>;
export interface ContactFlowModuleSearchCriteria {
}
export interface ContactFlowModuleSearchFilter {
}
export type ContactFlowModuleSearchSummaryList = Array<unknown>;
export type ContactFlowModulesSummaryList = Array<unknown>;
export type ContactFlowModuleState = never;
export type ContactFlowModuleStatus = never;
export interface ContactFlowModuleSummary {
}
export type ContactFlowName = string;

export interface ContactFlowNotPublishedException {
}
export type ContactFlowSearchConditionList = Array<unknown>;
export interface ContactFlowSearchCriteria {
}
export interface ContactFlowSearchFilter {
}
export type ContactFlowSearchSummaryList = Array<unknown>;
export type ContactFlowState = never;
export type ContactFlowStatus = never;
export interface ContactFlowSummary {
}
export type ContactFlowSummaryList = Array<unknown>;
export type ContactFlowType = never;
export type ContactFlowTypes = Array<unknown>;
export interface ContactFlowVersionSummary {
}
export type ContactFlowVersionSummaryList = Array<unknown>;
export type ContactId = string;

export type ContactInitiationMethod = never;
export interface ContactNotFoundException {
}
export type ContactRecordingType = never;
export type ContactReferences = Record<string, unknown>;
export type Contacts = Array<unknown>;
export interface ContactSearchSummary {
}
export interface ContactSearchSummaryAgentInfo {
}
export interface ContactSearchSummaryQueueInfo {
}
export type ContactSearchSummarySegmentAttributes = Record<string, unknown>;
export interface ContactSearchSummarySegmentAttributeValue {
}
export type ContactState = never;
export type ContactStates = Array<unknown>;
export type ContactTagKey = string;

export type ContactTagKeys = Array<unknown>;
export type ContactTagMap = Record<string, unknown>;
export type ContactTagValue = string;

export type Content = string;

export type ContentType = string;

export interface ControlPlaneAttributeFilter {
}
export interface ControlPlaneTagFilter {
}
export interface ControlPlaneUserAttributeFilter {
}
export type Count = number;

export interface CreateAgentStatusRequest {
}
export interface CreateAgentStatusResponse {
}
export interface CreateCaseActionDefinition {
}
export interface CreateContactFlowModuleRequest {
}
export interface CreateContactFlowModuleResponse {
}
export interface CreateContactFlowRequest {
}
export interface CreateContactFlowResponse {
}
export interface CreateContactFlowVersionRequest {
}
export interface CreateContactFlowVersionResponse {
}
export interface CreateContactRequest {
}
export interface CreateContactResponse {
}
export type CreatedByInfo = never;
export interface CreateEmailAddressRequest {
}
export interface CreateEmailAddressResponse {
}
export interface CreateEvaluationFormRequest {
}
export interface CreateEvaluationFormResponse {
}
export interface CreateHoursOfOperationOverrideRequest {
}
export interface CreateHoursOfOperationOverrideResponse {
}
export interface CreateHoursOfOperationRequest {
}
export interface CreateHoursOfOperationResponse {
}
export interface CreateInstanceRequest {
}
export interface CreateInstanceResponse {
}
export interface CreateIntegrationAssociationRequest {
}
export interface CreateIntegrationAssociationResponse {
}
export interface CreateParticipantRequest {
}
export interface CreateParticipantResponse {
}
export interface CreatePersistentContactAssociationRequest {
}
export interface CreatePersistentContactAssociationResponse {
}
export interface CreatePredefinedAttributeRequest {
}
export interface CreatePromptRequest {
}
export interface CreatePromptResponse {
}
export interface CreatePushNotificationRegistrationRequest {
}
export interface CreatePushNotificationRegistrationResponse {
}
export interface CreateQueueRequest {
}
export interface CreateQueueResponse {
}
export interface CreateQuickConnectRequest {
}
export interface CreateQuickConnectResponse {
}
export interface CreateRoutingProfileRequest {
}
export interface CreateRoutingProfileResponse {
}
export interface CreateRuleRequest {
}
export interface CreateRuleResponse {
}
export type CreateSecurityProfileName = string;

export interface CreateSecurityProfileRequest {
}
export interface CreateSecurityProfileResponse {
}
export interface CreateTaskTemplateRequest {
}
export interface CreateTaskTemplateResponse {
}
export interface CreateTrafficDistributionGroupRequest {
}
export interface CreateTrafficDistributionGroupResponse {
}
export interface CreateUseCaseRequest {
}
export interface CreateUseCaseResponse {
}
export interface CreateUserHierarchyGroupRequest {
}
export interface CreateUserHierarchyGroupResponse {
}
export interface CreateUserRequest {
}
export interface CreateUserResponse {
}
export interface CreateViewRequest {
}
export interface CreateViewResponse {
}
export interface CreateViewVersionRequest {
}
export interface CreateViewVersionResponse {
}
export interface CreateVocabularyRequest {
}
export interface CreateVocabularyResponse {
}
export interface Credentials {
}
export interface CrossChannelBehavior {
}
export interface CurrentMetric {
}
export interface CurrentMetricData {
}
export type CurrentMetricDataCollections = Array<unknown>;
export type CurrentMetricName = never;
export interface CurrentMetricResult {
}
export type CurrentMetricResults = Array<unknown>;
export type CurrentMetrics = Array<unknown>;
export interface CurrentMetricSortCriteria {
}
export type CurrentMetricSortCriteriaMaxOne = Array<unknown>;
export interface Customer {
}
export type CustomerId = string;

export type CustomerIdNonEmpty = string;

export type CustomerProfileAttributesSerialized = string;

export interface CustomerQualityMetrics {
}
export interface CustomerVoiceActivity {
}
export type DataSetId = string;

export type DataSetIds = Array<unknown>;
export type DateComparisonType = never;
export interface DateCondition {
}
export interface DateReference {
}
export type DateYearMonthDayFormat = string;

export interface DeactivateEvaluationFormRequest {
}
export interface DeactivateEvaluationFormResponse {
}
export interface DefaultVocabulary {
}
export type DefaultVocabularyList = Array<unknown>;
export type Delay = number;

export interface DeleteAttachedFileRequest {
}
export interface DeleteAttachedFileResponse {
}
export interface DeleteContactEvaluationRequest {
}
export interface DeleteContactFlowModuleRequest {
}
export interface DeleteContactFlowModuleResponse {
}
export interface DeleteContactFlowRequest {
}
export interface DeleteContactFlowResponse {
}
export interface DeleteContactFlowVersionRequest {
}
export interface DeleteContactFlowVersionResponse {
}
export interface DeleteEmailAddressRequest {
}
export interface DeleteEmailAddressResponse {
}
export interface DeleteEvaluationFormRequest {
}
export interface DeleteHoursOfOperationOverrideRequest {
}
export interface DeleteHoursOfOperationRequest {
}
export interface DeleteInstanceRequest {
}
export interface DeleteIntegrationAssociationRequest {
}
export interface DeletePredefinedAttributeRequest {
}
export interface DeletePromptRequest {
}
export interface DeletePushNotificationRegistrationRequest {
}
export interface DeletePushNotificationRegistrationResponse {
}
export interface DeleteQueueRequest {
}
export interface DeleteQuickConnectRequest {
}
export interface DeleteRoutingProfileRequest {
}
export interface DeleteRuleRequest {
}
export interface DeleteSecurityProfileRequest {
}
export interface DeleteTaskTemplateRequest {
}
export interface DeleteTaskTemplateResponse {
}
export interface DeleteTrafficDistributionGroupRequest {
}
export interface DeleteTrafficDistributionGroupResponse {
}
export interface DeleteUseCaseRequest {
}
export interface DeleteUserHierarchyGroupRequest {
}
export interface DeleteUserRequest {
}
export interface DeleteViewRequest {
}
export interface DeleteViewResponse {
}
export interface DeleteViewVersionRequest {
}
export interface DeleteViewVersionResponse {
}
export interface DeleteVocabularyRequest {
}
export interface DeleteVocabularyResponse {
}
export interface DescribeAgentStatusRequest {
}
export interface DescribeAgentStatusResponse {
}
export interface DescribeAuthenticationProfileRequest {
}
export interface DescribeAuthenticationProfileResponse {
}
export interface DescribeContactEvaluationRequest {
}
export interface DescribeContactEvaluationResponse {
}
export interface DescribeContactFlowModuleRequest {
}
export interface DescribeContactFlowModuleResponse {
}
export interface DescribeContactFlowRequest {
}
export interface DescribeContactFlowResponse {
}
export interface DescribeContactRequest {
}
export interface DescribeContactResponse {
}
export interface DescribeEmailAddressRequest {
}
export interface DescribeEmailAddressResponse {
}
export interface DescribeEvaluationFormRequest {
}
export interface DescribeEvaluationFormResponse {
}
export interface DescribeHoursOfOperationOverrideRequest {
}
export interface DescribeHoursOfOperationOverrideResponse {
}
export interface DescribeHoursOfOperationRequest {
}
export interface DescribeHoursOfOperationResponse {
}
export interface DescribeInstanceAttributeRequest {
}
export interface DescribeInstanceAttributeResponse {
}
export interface DescribeInstanceRequest {
}
export interface DescribeInstanceResponse {
}
export interface DescribeInstanceStorageConfigRequest {
}
export interface DescribeInstanceStorageConfigResponse {
}
export interface DescribePhoneNumberRequest {
}
export interface DescribePhoneNumberResponse {
}
export interface DescribePredefinedAttributeRequest {
}
export interface DescribePredefinedAttributeResponse {
}
export interface DescribePromptRequest {
}
export interface DescribePromptResponse {
}
export interface DescribeQueueRequest {
}
export interface DescribeQueueResponse {
}
export interface DescribeQuickConnectRequest {
}
export interface DescribeQuickConnectResponse {
}
export interface DescribeRoutingProfileRequest {
}
export interface DescribeRoutingProfileResponse {
}
export interface DescribeRuleRequest {
}
export interface DescribeRuleResponse {
}
export interface DescribeSecurityProfileRequest {
}
export interface DescribeSecurityProfileResponse {
}
export interface DescribeTrafficDistributionGroupRequest {
}
export interface DescribeTrafficDistributionGroupResponse {
}
export interface DescribeUserHierarchyGroupRequest {
}
export interface DescribeUserHierarchyGroupResponse {
}
export interface DescribeUserHierarchyStructureRequest {
}
export interface DescribeUserHierarchyStructureResponse {
}
export interface DescribeUserRequest {
}
export interface DescribeUserResponse {
}
export interface DescribeViewRequest {
}
export interface DescribeViewResponse {
}
export interface DescribeVocabularyRequest {
}
export interface DescribeVocabularyResponse {
}
export type Description = string;

export type Description250 = string;

export type DestinationId = string;

export interface DestinationNotAllowedException {
}
export interface DeviceInfo {
}
export type DeviceToken = string;

export type DeviceType = never;
export interface Dimensions {
}
export type DimensionsV2Key = string;

export type DimensionsV2Map = Record<string, unknown>;
export type DimensionsV2Value = string;

export type DirectoryAlias = string;

export type DirectoryId = string;

export type DirectoryType = never;
export type DirectoryUserId = string;

export interface DisassociateAnalyticsDataSetRequest {
}
export interface DisassociateApprovedOriginRequest {
}
export interface DisassociateBotRequest {
}
export interface DisassociateFlowRequest {
}
export interface DisassociateFlowResponse {
}
export interface DisassociateInstanceStorageConfigRequest {
}
export interface DisassociateLambdaFunctionRequest {
}
export interface DisassociateLexBotRequest {
}
export interface DisassociatePhoneNumberContactFlowRequest {
}
export interface DisassociateQueueQuickConnectsRequest {
}
export interface DisassociateRoutingProfileQueuesRequest {
}
export interface DisassociateSecurityKeyRequest {
}
export interface DisassociateTrafficDistributionGroupUserRequest {
}
export interface DisassociateTrafficDistributionGroupUserResponse {
}
export interface DisassociateUserProficienciesRequest {
}
export interface DisconnectDetails {
}
export interface DisconnectReason {
}
export type DisconnectReasonCode = string;

export interface DismissUserContactRequest {
}
export interface DismissUserContactResponse {
}
export type DisplayName = string;

export interface Distribution {
}
export type DistributionList = Array<unknown>;
export type Double = number;

export interface DownloadUrlMetadata {
}
export interface DuplicateResourceException {
}
export type Duration = number;

export type DurationInSeconds = number;

export type DurationMillis = number;

export type EffectiveHoursOfOperationList = Array<unknown>;
export interface EffectiveHoursOfOperations {
}
export type Email = string;

export type EmailAddress = string;

export type EmailAddressArn = string;

export type EmailAddressDisplayName = string;

export type EmailAddressId = string;

export interface EmailAddressInfo {
}
export type EmailAddressList = Array<unknown>;
export interface EmailAddressMetadata {
}
export type EmailAddressRecipientList = Array<unknown>;
export type EmailAddressSearchConditionList = Array<unknown>;
export interface EmailAddressSearchCriteria {
}
export interface EmailAddressSearchFilter {
}
export interface EmailAttachment {
}
export type EmailAttachments = Array<unknown>;
export type EmailHeaders = Record<string, unknown>;
export type EmailHeaderType = never;
export type EmailHeaderValue = string;

export type EmailMessageContentType = string;

export interface EmailMessageReference {
}
export interface EmailRecipient {
}
export type EmailRecipientsList = Array<unknown>;
export interface EmailReference {
}
export interface EmptyFieldValue {
}
export interface EncryptionConfig {
}
export type EncryptionType = never;
export interface EndAssociatedTasksActionDefinition {
}
export interface Endpoint {
}
export type EndpointAddress = string;

export type EndpointDisplayName = string;

export interface EndpointInfo {
}
export type EndpointType = never;
export type ErrorCode = string;

export type ErrorMessage = string;

export interface ErrorResult {
}
export type ErrorResults = Array<unknown>;
export interface Evaluation {
}
export type EvaluationAnswerData = never;
export type EvaluationAnswerDataNumericValue = number;

export type EvaluationAnswerDataStringValue = string;

export interface EvaluationAnswerInput {
}
export interface EvaluationAnswerOutput {
}
export type EvaluationAnswersInputMap = Record<string, unknown>;
export type EvaluationAnswersOutputMap = Record<string, unknown>;
export type EvaluationArn = string;

export interface EvaluationForm {
}
export interface EvaluationFormContent {
}
export type EvaluationFormDescription = string;

export type EvaluationFormId = string;

export type EvaluationFormItem = never;
export type EvaluationFormItemsList = Array<unknown>;
export type EvaluationFormItemWeight = number;

export type EvaluationFormNumericQuestionAutomation = never;
export interface EvaluationFormNumericQuestionOption {
}
export type EvaluationFormNumericQuestionOptionList = Array<unknown>;
export interface EvaluationFormNumericQuestionProperties {
}
export interface EvaluationFormQuestion {
}
export type EvaluationFormQuestionAnswerScore = number;

export type EvaluationFormQuestionInstructions = string;

export type EvaluationFormQuestionTitle = string;

export type EvaluationFormQuestionType = never;
export type EvaluationFormQuestionTypeProperties = never;
export type EvaluationFormScoringMode = never;
export type EvaluationFormScoringStatus = never;
export interface EvaluationFormScoringStrategy {
}
export interface EvaluationFormSection {
}
export type EvaluationFormSectionTitle = string;

export interface EvaluationFormSingleSelectQuestionAutomation {
}
export type EvaluationFormSingleSelectQuestionAutomationOption = never;
export type EvaluationFormSingleSelectQuestionAutomationOptionList = Array<unknown>;
export type EvaluationFormSingleSelectQuestionDisplayMode = never;
export interface EvaluationFormSingleSelectQuestionOption {
}
export type EvaluationFormSingleSelectQuestionOptionList = Array<unknown>;
export type EvaluationFormSingleSelectQuestionOptionText = string;

export interface EvaluationFormSingleSelectQuestionProperties {
}
export interface EvaluationFormSummary {
}
export type EvaluationFormSummaryList = Array<unknown>;
export type EvaluationFormTitle = string;

export type EvaluationFormVersionIsLocked = boolean;

export type EvaluationFormVersionStatus = never;
export interface EvaluationFormVersionSummary {
}
export type EvaluationFormVersionSummaryList = Array<unknown>;
export type EvaluationId = string;

export interface EvaluationMetadata {
}
export interface EvaluationNote {
}
export type EvaluationNotesMap = Record<string, unknown>;
export type EvaluationNoteString = string;

export interface EvaluationScore {
}
export type EvaluationScorePercentage = number;

export type EvaluationScoresMap = Record<string, unknown>;
export type EvaluationStatus = never;
export interface EvaluationSummary {
}
export type EvaluationSummaryList = Array<unknown>;
export interface EventBridgeActionDefinition {
}
export type EventBridgeActionName = string;

export type EventSourceName = never;
export interface Expiry {
}
export type ExpiryDurationInMinutes = number;

export type ExportLocation = string;

export interface Expression {
}
export type Expressions = Array<unknown>;
export interface FailedRequest {
}
export type FailedRequestList = Array<unknown>;
export type FailureReasonCode = never;
export type FieldStringValue = string;

export interface FieldValue {
}
export type FieldValueId = string;

export type FieldValues = Array<unknown>;
export interface FieldValueUnion {
}
export type FileId = string;

export type FileIdList = Array<unknown>;
export type FileName = string;

export type FileSizeInBytes = number;

export type FileStatusType = never;
export type FileUseCaseType = never;
export interface Filters {
}
export type FiltersV2List = Array<unknown>;
export interface FilterV2 {
}
export type FilterValueList = Array<unknown>;
export type FlowAssociationResourceType = never;
export interface FlowAssociationSummary {
}
export type FlowAssociationSummaryList = Array<unknown>;
export type FlowContentSha256 = string;

export type FormId = string;

export type FragmentNumber = string;

export type FunctionArn = string;

export type FunctionArnsList = Array<unknown>;
export interface GetAttachedFileRequest {
}
export interface GetAttachedFileResponse {
}
export interface GetContactAttributesRequest {
}
export interface GetContactAttributesResponse {
}
export interface GetCurrentMetricDataRequest {
}
export interface GetCurrentMetricDataResponse {
}
export interface GetCurrentUserDataRequest {
}
export interface GetCurrentUserDataResponse {
}
export interface GetEffectiveHoursOfOperationsRequest {
}
export interface GetEffectiveHoursOfOperationsResponse {
}
export interface GetFederationTokenRequest {
}
export interface GetFederationTokenResponse {
}
export interface GetFlowAssociationRequest {
}
export interface GetFlowAssociationResponse {
}
export interface GetMetricDataRequest {
}
export interface GetMetricDataResponse {
}
export interface GetMetricDataV2Request {
}
export interface GetMetricDataV2Response {
}
export interface GetPromptFileRequest {
}
export interface GetPromptFileResponse {
}
export interface GetTaskTemplateRequest {
}
export interface GetTaskTemplateResponse {
}
export interface GetTrafficDistributionRequest {
}
export interface GetTrafficDistributionResponse {
}
export type GlobalSignInEndpoint = string;

export type Grouping = never;
export type Groupings = Array<unknown>;
export type GroupingsV2 = Array<unknown>;
export type GroupingV2 = string;

export interface HierarchyGroup {
}
export interface HierarchyGroupCondition {
}
export type HierarchyGroupId = string;

export type HierarchyGroupIdList = Array<unknown>;
export type HierarchyGroupMatchType = never;
export type HierarchyGroupName = string;

export interface HierarchyGroups {
}
export interface HierarchyGroupSummary {
}
export type HierarchyGroupSummaryList = Array<unknown>;
export interface HierarchyGroupSummaryReference {
}
export interface HierarchyLevel {
}
export type HierarchyLevelId = string;

export type HierarchyLevelName = string;

export interface HierarchyLevelUpdate {
}
export interface HierarchyPath {
}
export interface HierarchyPathReference {
}
export type HierarchyRestrictedResourceList = Array<unknown>;
export type HierarchyRestrictedResourceName = string;

export interface HierarchyStructure {
}
export interface HierarchyStructureUpdate {
}
export interface HistoricalMetric {
}
export interface HistoricalMetricData {
}
export type HistoricalMetricDataCollections = Array<unknown>;
export type HistoricalMetricName = never;
export interface HistoricalMetricResult {
}
export type HistoricalMetricResults = Array<unknown>;
export type HistoricalMetrics = Array<unknown>;
export type Hours = number;

export type Hours24Format = number;

export interface HoursOfOperation {
}
export interface HoursOfOperationConfig {
}
export type HoursOfOperationConfigList = Array<unknown>;
export type HoursOfOperationDays = never;
export type HoursOfOperationDescription = string;

export type HoursOfOperationId = string;

export type HoursOfOperationList = Array<unknown>;
export type HoursOfOperationName = string;

export interface HoursOfOperationOverride {
}
export interface HoursOfOperationOverrideConfig {
}
export type HoursOfOperationOverrideConfigList = Array<unknown>;
export type HoursOfOperationOverrideId = string;

export type HoursOfOperationOverrideList = Array<unknown>;
export type HoursOfOperationOverrideSearchConditionList = Array<unknown>;
export interface HoursOfOperationOverrideSearchCriteria {
}
export type HoursOfOperationOverrideYearMonthDayDateFormat = string;

export type HoursOfOperationSearchConditionList = Array<unknown>;
export interface HoursOfOperationSearchCriteria {
}
export interface HoursOfOperationSearchFilter {
}
export interface HoursOfOperationSummary {
}
export type HoursOfOperationSummaryList = Array<unknown>;
export interface HoursOfOperationTimeSlice {
}
export interface IdempotencyException {
}
export interface ImportPhoneNumberRequest {
}
export interface ImportPhoneNumberResponse {
}
export interface InboundAdditionalRecipients {
}
export type InboundCallsEnabled = boolean;

export interface InboundEmailContent {
}
export type InboundMessageSourceType = never;
export interface InboundRawMessage {
}
export type InboundSubject = string;

export type IncludeRawMessage = boolean;

export type Index = number;

export type InitiateAs = never;
export type InitiationMethodList = Array<unknown>;
export interface Instance {
}
export type InstanceArn = string;

export type InstanceAttributeType = never;
export type InstanceAttributeValue = string;

export type InstanceId = string;

export type InstanceIdOrArn = string;

export type InstanceReplicationStatus = never;
export type InstanceStatus = never;
export interface InstanceStatusReason {
}
export interface InstanceStorageConfig {
}
export type InstanceStorageConfigs = Array<unknown>;
export type InstanceStorageResourceType = never;
export interface InstanceSummary {
}
export type InstanceSummaryList = Array<unknown>;
export type Integer = number;

export type IntegerCount = number;

export type IntegrationAssociationId = string;

export interface IntegrationAssociationSummary {
}
export type IntegrationAssociationSummaryList = Array<unknown>;
export type IntegrationType = never;
export interface InternalServiceException {
}
export interface IntervalDetails {
}
export type IntervalPeriod = never;
export interface InvalidContactFlowException {
}
export interface InvalidContactFlowModuleException {
}
export interface InvalidParameterException {
}
export interface InvalidRequestException {
}
export type InvalidRequestExceptionReason = never;
export interface InvisibleFieldInfo {
}
export type InvisibleTaskTemplateFields = Array<unknown>;
export type IpCidr = string;

export type IpCidrList = Array<unknown>;
export type ISO8601Datetime = string;

export type IvrRecordingTrack = never;
export type JoinToken = string;

export type KeyId = string;

export interface KinesisFirehoseConfig {
}
export interface KinesisStreamConfig {
}
export interface KinesisVideoStreamConfig {
}
export type LargeNextToken = string;

export interface LexBot {
}
export interface LexBotConfig {
}
export type LexBotConfigList = Array<unknown>;
export type LexBotsList = Array<unknown>;
export type LexRegion = string;

export interface LexV2Bot {
}
export type LexVersion = never;
export interface LimitExceededException {
}
export interface ListAgentStatusRequest {
}
export interface ListAgentStatusResponse {
}
export interface ListAnalyticsDataAssociationsRequest {
}
export interface ListAnalyticsDataAssociationsResponse {
}
export interface ListAnalyticsDataLakeDataSetsRequest {
}
export interface ListAnalyticsDataLakeDataSetsResponse {
}
export interface ListApprovedOriginsRequest {
}
export interface ListApprovedOriginsResponse {
}
export interface ListAssociatedContactsRequest {
}
export type ListAssociatedContactsRequestMaxResults = number;

export interface ListAssociatedContactsResponse {
}
export interface ListAuthenticationProfilesRequest {
}
export interface ListAuthenticationProfilesResponse {
}
export interface ListBotsRequest {
}
export interface ListBotsResponse {
}
export interface ListCondition {
}
export interface ListContactEvaluationsRequest {
}
export interface ListContactEvaluationsResponse {
}
export interface ListContactFlowModulesRequest {
}
export interface ListContactFlowModulesResponse {
}
export interface ListContactFlowsRequest {
}
export interface ListContactFlowsResponse {
}
export interface ListContactFlowVersionsRequest {
}
export interface ListContactFlowVersionsResponse {
}
export interface ListContactReferencesRequest {
}
export interface ListContactReferencesResponse {
}
export interface ListDefaultVocabulariesRequest {
}
export interface ListDefaultVocabulariesResponse {
}
export interface ListEvaluationFormsRequest {
}
export interface ListEvaluationFormsResponse {
}
export interface ListEvaluationFormVersionsRequest {
}
export interface ListEvaluationFormVersionsResponse {
}
export type ListFlowAssociationResourceType = never;
export interface ListFlowAssociationsRequest {
}
export interface ListFlowAssociationsResponse {
}
export interface ListHoursOfOperationOverridesRequest {
}
export interface ListHoursOfOperationOverridesResponse {
}
export interface ListHoursOfOperationsRequest {
}
export interface ListHoursOfOperationsResponse {
}
export interface ListInstanceAttributesRequest {
}
export interface ListInstanceAttributesResponse {
}
export interface ListInstancesRequest {
}
export interface ListInstancesResponse {
}
export interface ListInstanceStorageConfigsRequest {
}
export interface ListInstanceStorageConfigsResponse {
}
export interface ListIntegrationAssociationsRequest {
}
export interface ListIntegrationAssociationsResponse {
}
export interface ListLambdaFunctionsRequest {
}
export interface ListLambdaFunctionsResponse {
}
export interface ListLexBotsRequest {
}
export interface ListLexBotsResponse {
}
export interface ListPhoneNumbersRequest {
}
export interface ListPhoneNumbersResponse {
}
export interface ListPhoneNumbersSummary {
}
export type ListPhoneNumbersSummaryList = Array<unknown>;
export interface ListPhoneNumbersV2Request {
}
export interface ListPhoneNumbersV2Response {
}
export interface ListPredefinedAttributesRequest {
}
export interface ListPredefinedAttributesResponse {
}
export interface ListPromptsRequest {
}
export interface ListPromptsResponse {
}
export interface ListQueueQuickConnectsRequest {
}
export interface ListQueueQuickConnectsResponse {
}
export interface ListQueuesRequest {
}
export interface ListQueuesResponse {
}
export interface ListQuickConnectsRequest {
}
export interface ListQuickConnectsResponse {
}
export interface ListRealtimeContactAnalysisSegmentsV2Request {
}
export interface ListRealtimeContactAnalysisSegmentsV2Response {
}
export interface ListRoutingProfileQueuesRequest {
}
export interface ListRoutingProfileQueuesResponse {
}
export interface ListRoutingProfilesRequest {
}
export interface ListRoutingProfilesResponse {
}
export interface ListRulesRequest {
}
export interface ListRulesResponse {
}
export interface ListSecurityKeysRequest {
}
export interface ListSecurityKeysResponse {
}
export interface ListSecurityProfileApplicationsRequest {
}
export interface ListSecurityProfileApplicationsResponse {
}
export interface ListSecurityProfilePermissionsRequest {
}
export interface ListSecurityProfilePermissionsResponse {
}
export interface ListSecurityProfilesRequest {
}
export interface ListSecurityProfilesResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export interface ListTaskTemplatesRequest {
}
export interface ListTaskTemplatesResponse {
}
export interface ListTrafficDistributionGroupsRequest {
}
export interface ListTrafficDistributionGroupsResponse {
}
export interface ListTrafficDistributionGroupUsersRequest {
}
export interface ListTrafficDistributionGroupUsersResponse {
}
export interface ListUseCasesRequest {
}
export interface ListUseCasesResponse {
}
export interface ListUserHierarchyGroupsRequest {
}
export interface ListUserHierarchyGroupsResponse {
}
export interface ListUserProficienciesRequest {
}
export interface ListUserProficienciesResponse {
}
export interface ListUsersRequest {
}
export interface ListUsersResponse {
}
export interface ListViewsRequest {
}
export interface ListViewsResponse {
}
export interface ListViewVersionsRequest {
}
export interface ListViewVersionsResponse {
}
export type Long = number;

export interface MatchCriteria {
}
export interface MaximumResultReturnedException {
}
export type MaxResult10 = number;

export type MaxResult100 = number;

export type MaxResult1000 = number;

export type MaxResult2 = number;

export type MaxResult200 = number;

export type MaxResult25 = number;

export type MaxResult500 = number;

export type MaxResult7 = number;

export type MaxResults = number;

export type MediaConcurrencies = Array<unknown>;
export interface MediaConcurrency {
}
export interface MediaPlacement {
}
export type MediaRegion = string;

export type MediaStreamType = never;
export interface Meeting {
}
export interface MeetingFeaturesConfiguration {
}
export type MeetingFeatureStatus = never;
export type MeetingId = string;

export type Message = string;

export type MessageTemplateId = string;

export type MessageTemplateKnowledgeBaseId = string;

export type MetadataUrl = string;

export type MetricDataCollectionsV2 = Array<unknown>;
export interface MetricDataV2 {
}
export type MetricFiltersV2List = Array<unknown>;
export interface MetricFilterV2 {
}
export type MetricFilterValueList = Array<unknown>;
export interface MetricInterval {
}
export type MetricNameV2 = string;

export type MetricResultsV2 = Array<unknown>;
export interface MetricResultV2 {
}
export type MetricsV2 = Array<unknown>;
export interface MetricV2 {
}
export type MinutesLimit60 = number;

export type MonitorCapability = never;
export interface MonitorContactRequest {
}
export interface MonitorContactResponse {
}
export type Name = string;

export type Name128 = string;

export type Namespace = string;

export type NewChatCreated = boolean;

export interface NewSessionDetails {
}
export type NextToken = string;

export type NextToken2500 = string;

export type NotificationContentType = never;
export type NotificationDeliveryType = never;
export interface NotificationRecipientType {
}
export type NullableBoolean = boolean;

export type NullableProficiencyLevel = number;

export type NullableProficiencyLimitValue = number;

export type NumberComparisonType = never;
export interface NumberCondition {
}
export interface NumberReference {
}
export type NumericQuestionPropertyAutomationLabel = never;
export interface NumericQuestionPropertyValueAutomation {
}
export type OperatingSystem = string;

export interface OperationalHour {
}
export type OperationalHours = Array<unknown>;
export type Origin = string;

export type OriginsList = Array<unknown>;
export interface OutboundAdditionalRecipients {
}
export interface OutboundCallerConfig {
}
export type OutboundCallerIdName = string;

export type OutboundCallsEnabled = boolean;

export interface OutboundContactNotPermittedException {
}
export interface OutboundEmailConfig {
}
export interface OutboundEmailContent {
}
export type OutboundMessageSourceType = never;
export interface OutboundRawMessage {
}
export type OutboundRequestId = string;

export type OutboundSubject = string;

export interface OutputTypeNotFoundException {
}
export type OverrideDays = never;
export interface OverrideTimeSlice {
}
export interface ParticipantCapabilities {
}
export interface ParticipantDetails {
}
export interface ParticipantDetailsToAdd {
}
export type ParticipantId = string;

export interface ParticipantMetrics {
}
export type ParticipantRole = never;
export type ParticipantState = never;
export type ParticipantTimerAction = never;
export type ParticipantTimerConfigList = Array<unknown>;
export interface ParticipantTimerConfiguration {
}
export type ParticipantTimerDurationInMinutes = number;

export type ParticipantTimerType = never;
export type ParticipantTimerValue = never;
export type ParticipantToken = string;

export interface ParticipantTokenCredentials {
}
export type ParticipantType = never;
export type Password = string;

export interface PauseContactRequest {
}
export interface PauseContactResponse {
}
export type PEM = string;

export type Percentage = number;

export type Permission = string;

export type PermissionsList = Array<unknown>;
export interface PersistentChat {
}
export type PhoneNumber = string;

export type PhoneNumberCountryCode = never;
export type PhoneNumberCountryCodes = Array<unknown>;
export type PhoneNumberDescription = string;

export type PhoneNumberId = string;

export type PhoneNumberPrefix = string;

export interface PhoneNumberQuickConnectConfig {
}
export interface PhoneNumberStatus {
}
export interface PhoneNumberSummary {
}
export type PhoneNumberSummaryList = Array<unknown>;
export type PhoneNumberType = never;
export type PhoneNumberTypes = Array<unknown>;
export type PhoneNumberWorkflowMessage = string;

export type PhoneNumberWorkflowStatus = never;
export type PhoneType = never;
export type PlatformName = string;

export type PlatformVersion = string;

export type PotentialAudioQualityIssue = string;

export type PotentialAudioQualityIssues = Array<unknown>;
export type PotentialDisconnectIssue = string;

export interface PredefinedAttribute {
}
export type PredefinedAttributeName = string;

export type PredefinedAttributeSearchConditionList = Array<unknown>;
export interface PredefinedAttributeSearchCriteria {
}
export type PredefinedAttributeSearchSummaryList = Array<unknown>;
export type PredefinedAttributeStringValue = string;

export type PredefinedAttributeStringValuesList = Array<unknown>;
export interface PredefinedAttributeSummary {
}
export type PredefinedAttributeSummaryList = Array<unknown>;
export type PredefinedAttributeValues = never;
export type Prefix = string;

export type PreSignedAttachmentUrl = string;

export type Priority = number;

export interface ProblemDetail {
}
export type ProblemMessageString = string;

export type Problems = Array<unknown>;
export type ProficiencyLevel = number;

export type ProficiencyValue = string;

export interface Prompt {
}
export type PromptDescription = string;

export type PromptId = string;

export type PromptList = Array<unknown>;
export type PromptName = string;

export type PromptPresignedUrl = string;

export type PromptSearchConditionList = Array<unknown>;
export interface PromptSearchCriteria {
}
export interface PromptSearchFilter {
}
export interface PromptSummary {
}
export type PromptSummaryList = Array<unknown>;
export interface PropertyValidationException {
}
export interface PropertyValidationExceptionProperty {
}
export type PropertyValidationExceptionPropertyList = Array<unknown>;
export type PropertyValidationExceptionReason = never;
export interface PutUserStatusRequest {
}
export interface PutUserStatusResponse {
}
export interface QualityMetrics {
}
export interface Queue {
}
export type QueueDescription = string;

export type QueueId = string;

export type QueueIdList = Array<unknown>;
export interface QueueInfo {
}
export interface QueueInfoInput {
}
export type QueueMaxContacts = number;

export type QueueName = string;

export type QueuePriority = number;

export interface QueueQuickConnectConfig {
}
export interface QueueReference {
}
export type Queues = Array<unknown>;
export type QueueSearchConditionList = Array<unknown>;
export interface QueueSearchCriteria {
}
export interface QueueSearchFilter {
}
export type QueueSearchSummaryList = Array<unknown>;
export type QueueStatus = never;
export interface QueueSummary {
}
export type QueueSummaryList = Array<unknown>;
export type QueueTimeAdjustmentSeconds = number;

export type QueueType = never;
export type QueueTypes = Array<unknown>;
export interface QuickConnect {
}
export interface QuickConnectConfig {
}
export type QuickConnectDescription = string;

export type QuickConnectId = string;

export type QuickConnectName = string;

export type QuickConnectSearchConditionList = Array<unknown>;
export interface QuickConnectSearchCriteria {
}
export interface QuickConnectSearchFilter {
}
export type QuickConnectSearchSummaryList = Array<unknown>;
export type QuickConnectsList = Array<unknown>;
export interface QuickConnectSummary {
}
export type QuickConnectSummaryList = Array<unknown>;
export type QuickConnectType = never;
export type QuickConnectTypes = Array<unknown>;
export interface Range {
}
export interface ReadOnlyFieldInfo {
}
export type ReadOnlyTaskTemplateFields = Array<unknown>;
export interface RealTimeContactAnalysisAttachment {
}
export type RealTimeContactAnalysisAttachments = Array<unknown>;
export interface RealTimeContactAnalysisCategoryDetails {
}
export type RealTimeContactAnalysisCategoryName = string;

export interface RealTimeContactAnalysisCharacterInterval {
}
export type RealTimeContactAnalysisCharacterIntervals = Array<unknown>;
export type RealTimeContactAnalysisContentType = string;

export type RealTimeContactAnalysisEventType = string;

export type RealTimeContactAnalysisId256 = string;

export interface RealTimeContactAnalysisIssueDetected {
}
export type RealTimeContactAnalysisIssuesDetected = Array<unknown>;
export type RealTimeContactAnalysisMatchedDetails = Record<string, unknown>;
export type RealTimeContactAnalysisOffset = number;

export type RealTimeContactAnalysisOutputType = never;
export interface RealTimeContactAnalysisPointOfInterest {
}
export type RealTimeContactAnalysisPointsOfInterest = Array<unknown>;
export type RealTimeContactAnalysisPostContactSummaryContent = string;

export type RealTimeContactAnalysisPostContactSummaryFailureCode = never;
export type RealTimeContactAnalysisPostContactSummaryStatus = never;
export type RealtimeContactAnalysisSegment = never;
export interface RealTimeContactAnalysisSegmentAttachments {
}
export interface RealTimeContactAnalysisSegmentCategories {
}
export interface RealTimeContactAnalysisSegmentEvent {
}
export interface RealTimeContactAnalysisSegmentIssues {
}
export interface RealTimeContactAnalysisSegmentPostContactSummary {
}
export type RealtimeContactAnalysisSegments = Array<unknown>;
export interface RealTimeContactAnalysisSegmentTranscript {
}
export type RealTimeContactAnalysisSegmentType = never;
export type RealTimeContactAnalysisSegmentTypes = Array<unknown>;
export type RealTimeContactAnalysisSentimentLabel = never;
export type RealTimeContactAnalysisStatus = never;
export type RealTimeContactAnalysisSupportedChannel = never;
export type RealTimeContactAnalysisTimeData = never;
export type RealTimeContactAnalysisTimeInstant = Date | string;

export type RealTimeContactAnalysisTranscriptContent = string;

export interface RealTimeContactAnalysisTranscriptItemRedaction {
}
export type RealTimeContactAnalysisTranscriptItemsWithCharacterOffsets = Array<unknown>;
export type RealTimeContactAnalysisTranscriptItemsWithContent = Array<unknown>;
export interface RealTimeContactAnalysisTranscriptItemWithCharacterOffsets {
}
export interface RealTimeContactAnalysisTranscriptItemWithContent {
}
export type RecordingDeletionReason = string;

export interface RecordingInfo {
}
export type RecordingLocation = string;

export type Recordings = Array<unknown>;
export type RecordingStatus = never;
export interface Reference {
}
export type ReferenceArn = string;

export type ReferenceId = string;

export type ReferenceKey = string;

export type ReferenceStatus = never;
export type ReferenceStatusReason = string;

export type ReferenceSummary = never;
export type ReferenceSummaryList = Array<unknown>;
export type ReferenceType = never;
export type ReferenceTypes = Array<unknown>;
export type ReferenceValue = string;

export type RefreshTokenDuration = number;

export type RegionName = string;

export type RegistrationId = string;

export type RehydrationType = never;
export interface ReleasePhoneNumberRequest {
}
export interface ReplicateInstanceRequest {
}
export interface ReplicateInstanceResponse {
}
export interface ReplicationConfiguration {
}
export type ReplicationStatusReason = string;

export interface ReplicationStatusSummary {
}
export type ReplicationStatusSummaryList = Array<unknown>;
export type RequestIdentifier = string;

export interface RequiredFieldInfo {
}
export type RequiredTaskTemplateFields = Array<unknown>;
export type resourceArnListMaxLimit100 = Array<unknown>;
export type ResourceArnOrId = string;

export interface ResourceConflictException {
}
export type ResourceId = string;

export interface ResourceInUseException {
}
export interface ResourceNotFoundException {
}
export interface ResourceNotReadyException {
}
export interface ResourceTagsSearchCriteria {
}
export type ResourceType = never;
export type ResourceTypeList = Array<unknown>;
export type ResourceVersion = number;

export interface ResumeContactRecordingRequest {
}
export interface ResumeContactRecordingResponse {
}
export interface ResumeContactRequest {
}
export interface ResumeContactResponse {
}
export interface RoutingCriteria {
}
export interface RoutingCriteriaInput {
}
export interface RoutingCriteriaInputStep {
}
export interface RoutingCriteriaInputStepExpiry {
}
export type RoutingCriteriaInputSteps = Array<unknown>;
export type RoutingCriteriaStepStatus = never;
export type RoutingExpression = string;

export type RoutingExpressions = Array<unknown>;
export interface RoutingProfile {
}
export type RoutingProfileDescription = string;

export type RoutingProfileId = string;

export type RoutingProfileList = Array<unknown>;
export type RoutingProfileName = string;

export interface RoutingProfileQueueConfig {
}
export type RoutingProfileQueueConfigList = Array<unknown>;
export interface RoutingProfileQueueConfigSummary {
}
export type RoutingProfileQueueConfigSummaryList = Array<unknown>;
export interface RoutingProfileQueueReference {
}
export type RoutingProfileQueueReferenceList = Array<unknown>;
export interface RoutingProfileReference {
}
export type RoutingProfiles = Array<unknown>;
export type RoutingProfileSearchConditionList = Array<unknown>;
export interface RoutingProfileSearchCriteria {
}
export interface RoutingProfileSearchFilter {
}
export interface RoutingProfileSummary {
}
export type RoutingProfileSummaryList = Array<unknown>;
export interface Rule {
}
export interface RuleAction {
}
export type RuleActions = Array<unknown>;
export type RuleFunction = string;

export type RuleId = string;

export type RuleName = string;

export type RulePublishStatus = never;
export interface RuleSummary {
}
export type RuleSummaryList = Array<unknown>;
export interface RuleTriggerEventSource {
}
export interface S3Config {
}
export type S3Uri = string;

export type ScreenShareCapability = never;
export type SearchableContactAttributeKey = string;

export interface SearchableContactAttributes {
}
export interface SearchableContactAttributesCriteria {
}
export type SearchableContactAttributesCriteriaList = Array<unknown>;
export type SearchableContactAttributeValue = string;

export type SearchableContactAttributeValueList = Array<unknown>;
export type SearchableQueueType = never;
export type SearchableSegmentAttributeKey = string;

export interface SearchableSegmentAttributes {
}
export interface SearchableSegmentAttributesCriteria {
}
export type SearchableSegmentAttributesCriteriaList = Array<unknown>;
export type SearchableSegmentAttributeValue = string;

export type SearchableSegmentAttributeValueList = Array<unknown>;
export interface SearchAgentStatusesRequest {
}
export interface SearchAgentStatusesResponse {
}
export interface SearchAvailablePhoneNumbersRequest {
}
export interface SearchAvailablePhoneNumbersResponse {
}
export interface SearchContactFlowModulesRequest {
}
export interface SearchContactFlowModulesResponse {
}
export interface SearchContactFlowsRequest {
}
export interface SearchContactFlowsResponse {
}
export type SearchContactsMatchType = never;
export interface SearchContactsRequest {
}
export interface SearchContactsResponse {
}
export interface SearchContactsTimeRange {
}
export type SearchContactsTimeRangeType = never;
export interface SearchCriteria {
}
export interface SearchEmailAddressesRequest {
}
export interface SearchEmailAddressesResponse {
}
export interface SearchHoursOfOperationOverridesRequest {
}
export interface SearchHoursOfOperationOverridesResponse {
}
export interface SearchHoursOfOperationsRequest {
}
export interface SearchHoursOfOperationsResponse {
}
export interface SearchPredefinedAttributesRequest {
}
export interface SearchPredefinedAttributesResponse {
}
export interface SearchPromptsRequest {
}
export interface SearchPromptsResponse {
}
export interface SearchQueuesRequest {
}
export interface SearchQueuesResponse {
}
export interface SearchQuickConnectsRequest {
}
export interface SearchQuickConnectsResponse {
}
export interface SearchResourceTagsRequest {
}
export interface SearchResourceTagsResponse {
}
export interface SearchRoutingProfilesRequest {
}
export interface SearchRoutingProfilesResponse {
}
export interface SearchSecurityProfilesRequest {
}
export interface SearchSecurityProfilesResponse {
}
export type SearchText = string;

export type SearchTextList = Array<unknown>;
export interface SearchUserHierarchyGroupsRequest {
}
export interface SearchUserHierarchyGroupsResponse {
}
export interface SearchUsersRequest {
}
export interface SearchUsersResponse {
}
export interface SearchVocabulariesRequest {
}
export interface SearchVocabulariesResponse {
}
export interface SecurityKey {
}
export type SecurityKeysList = Array<unknown>;
export interface SecurityProfile {
}
export type SecurityProfileDescription = string;

export type SecurityProfileId = string;

export type SecurityProfileIds = Array<unknown>;
export type SecurityProfileName = string;

export type SecurityProfilePermission = string;

export type SecurityProfilePolicyKey = string;

export type SecurityProfilePolicyValue = string;

export type SecurityProfileSearchConditionList = Array<unknown>;
export interface SecurityProfileSearchCriteria {
}
export interface SecurityProfileSearchSummary {
}
export interface SecurityProfilesSearchFilter {
}
export type SecurityProfilesSearchSummaryList = Array<unknown>;
export interface SecurityProfileSummary {
}
export type SecurityProfileSummaryList = Array<unknown>;
export type SecurityToken = string;

export type SegmentAttributeName = string;

export type SegmentAttributes = Record<string, unknown>;
export interface SegmentAttributeValue {
}
export type SegmentAttributeValueInteger = number;

export type SegmentAttributeValueMap = Record<string, unknown>;
export type SegmentAttributeValueString = string;

export interface SendChatIntegrationEventRequest {
}
export interface SendChatIntegrationEventResponse {
}
export interface SendNotificationActionDefinition {
}
export interface SendOutboundEmailRequest {
}
export interface SendOutboundEmailResponse {
}
export interface ServiceQuotaExceededException {
}
export type ServiceQuotaExceededExceptionReason = never;
export interface SignInConfig {
}
export interface SignInDistribution {
}
export type SignInDistributionList = Array<unknown>;
export type SingleSelectOptions = Array<unknown>;
export interface SingleSelectQuestionRuleCategoryAutomation {
}
export type SingleSelectQuestionRuleCategoryAutomationCondition = never;
export type SingleSelectQuestionRuleCategoryAutomationLabel = string;

export type SlaAssignmentType = never;
export type SlaFieldValueUnionList = Array<unknown>;
export type SlaName = string;

export type SlaType = never;
export type SnapshotVersion = string;

export interface Sort {
}
export type SortableFieldName = never;
export type SortOrder = never;
export type SourceApplicationName = string;

export interface SourceCampaign {
}
export type SourceId = string;

export type SourceType = never;
export interface StartAttachedFileUploadRequest {
}
export interface StartAttachedFileUploadResponse {
}
export interface StartChatContactRequest {
}
export interface StartChatContactResponse {
}
export interface StartContactEvaluationRequest {
}
export interface StartContactEvaluationResponse {
}
export interface StartContactRecordingRequest {
}
export interface StartContactRecordingResponse {
}
export interface StartContactStreamingRequest {
}
export interface StartContactStreamingResponse {
}
export interface StartEmailContactRequest {
}
export interface StartEmailContactResponse {
}
export interface StartOutboundChatContactRequest {
}
export interface StartOutboundChatContactResponse {
}
export interface StartOutboundEmailContactRequest {
}
export interface StartOutboundEmailContactResponse {
}
export interface StartOutboundVoiceContactRequest {
}
export interface StartOutboundVoiceContactResponse {
}
export interface StartScreenSharingRequest {
}
export interface StartScreenSharingResponse {
}
export interface StartTaskContactRequest {
}
export interface StartTaskContactResponse {
}
export interface StartWebRTCContactRequest {
}
export interface StartWebRTCContactResponse {
}
export interface StateTransition {
}
export type StateTransitions = Array<unknown>;
export type Statistic = never;
export type Status = never;
export interface Step {
}
export type Steps = Array<unknown>;
export interface StopContactRecordingRequest {
}
export interface StopContactRecordingResponse {
}
export interface StopContactRequest {
}
export interface StopContactResponse {
}
export interface StopContactStreamingRequest {
}
export interface StopContactStreamingResponse {
}
export type StorageType = never;
export type StreamingId = string;

export type StringComparisonType = never;
export interface StringCondition {
}
export interface StringReference {
}
export type Subject = string;

export interface SubmitAutoEvaluationActionDefinition {
}
export interface SubmitContactEvaluationRequest {
}
export interface SubmitContactEvaluationResponse {
}
export type Subtype = string;

export interface SuccessfulRequest {
}
export type SuccessfulRequestList = Array<unknown>;
export type SupportedMessagingContentType = string;

export type SupportedMessagingContentTypes = Array<unknown>;
export interface SuspendContactRecordingRequest {
}
export interface SuspendContactRecordingResponse {
}
export type TagAndConditionList = Array<unknown>;
export interface TagCondition {
}
export interface TagContactRequest {
}
export interface TagContactResponse {
}
export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagKeyString = string;

export type TagMap = Record<string, unknown>;
export type TagOrConditionList = Array<unknown>;
export interface TagResourceRequest {
}
export type TagRestrictedResourceList = Array<unknown>;
export type TagRestrictedResourceName = string;

export interface TagSearchCondition {
}
export interface TagSet {
}
export type TagsList = Array<unknown>;
export type TagValue = string;

export type TagValueString = string;

export type TargetListType = never;
export type TargetSlaMinutes = number;

export interface TaskActionDefinition {
}
export type TaskDescriptionExpression = string;

export type TaskNameExpression = string;

export type TaskTemplateArn = string;

export interface TaskTemplateConstraints {
}
export interface TaskTemplateDefaultFieldValue {
}
export type TaskTemplateDefaultFieldValueList = Array<unknown>;
export interface TaskTemplateDefaults {
}
export type TaskTemplateDescription = string;

export interface TaskTemplateField {
}
export type TaskTemplateFieldDescription = string;

export interface TaskTemplateFieldIdentifier {
}
export type TaskTemplateFieldName = string;

export type TaskTemplateFields = Array<unknown>;
export type TaskTemplateFieldType = never;
export type TaskTemplateFieldValue = string;

export type TaskTemplateId = string;

export type TaskTemplateList = Array<unknown>;
export interface TaskTemplateMetadata {
}
export type TaskTemplateName = string;

export type TaskTemplateSingleSelectOption = string;

export type TaskTemplateStatus = never;
export interface TelephonyConfig {
}
export interface TemplateAttributes {
}
export interface TemplatedMessageConfig {
}
export type TemplateId = string;

export interface Threshold {
}
export type ThresholdCollections = Array<unknown>;
export interface ThresholdV2 {
}
export type ThresholdValue = number;

export interface ThrottlingException {
}
export type TimerEligibleParticipantRoles = never;
export type Timestamp = Date | string;

export type TimeZone = string;

export interface TooManyRequestsException {
}
export type TotalCount = number;

export type TotalPauseCount = number;

export type TotalPauseDurationInSeconds = number;

export interface TrafficDistributionGroup {
}
export type TrafficDistributionGroupArn = string;

export type TrafficDistributionGroupId = string;

export type TrafficDistributionGroupIdOrArn = string;

export type TrafficDistributionGroupStatus = never;
export interface TrafficDistributionGroupSummary {
}
export type TrafficDistributionGroupSummaryList = Array<unknown>;
export interface TrafficDistributionGroupUserSummary {
}
export type TrafficDistributionGroupUserSummaryList = Array<unknown>;
export type TrafficType = never;
export interface Transcript {
}
export interface TranscriptCriteria {
}
export type TranscriptCriteriaList = Array<unknown>;
export interface TransferContactRequest {
}
export interface TransferContactResponse {
}
export interface UntagContactRequest {
}
export interface UntagContactResponse {
}
export interface UntagResourceRequest {
}
export type UpdateAgentStatusDescription = string;

export interface UpdateAgentStatusRequest {
}
export interface UpdateAuthenticationProfileRequest {
}
export interface UpdateCaseActionDefinition {
}
export interface UpdateContactAttributesRequest {
}
export interface UpdateContactAttributesResponse {
}
export interface UpdateContactEvaluationRequest {
}
export interface UpdateContactEvaluationResponse {
}
export interface UpdateContactFlowContentRequest {
}
export interface UpdateContactFlowContentResponse {
}
export interface UpdateContactFlowMetadataRequest {
}
export interface UpdateContactFlowMetadataResponse {
}
export interface UpdateContactFlowModuleContentRequest {
}
export interface UpdateContactFlowModuleContentResponse {
}
export interface UpdateContactFlowModuleMetadataRequest {
}
export interface UpdateContactFlowModuleMetadataResponse {
}
export interface UpdateContactFlowNameRequest {
}
export interface UpdateContactFlowNameResponse {
}
export interface UpdateContactRequest {
}
export interface UpdateContactResponse {
}
export interface UpdateContactRoutingDataRequest {
}
export interface UpdateContactRoutingDataResponse {
}
export interface UpdateContactScheduleRequest {
}
export interface UpdateContactScheduleResponse {
}
export interface UpdateEmailAddressMetadataRequest {
}
export interface UpdateEmailAddressMetadataResponse {
}
export interface UpdateEvaluationFormRequest {
}
export interface UpdateEvaluationFormResponse {
}
export type UpdateHoursOfOperationDescription = string;

export interface UpdateHoursOfOperationOverrideRequest {
}
export interface UpdateHoursOfOperationRequest {
}
export interface UpdateInstanceAttributeRequest {
}
export interface UpdateInstanceStorageConfigRequest {
}
export interface UpdateParticipantAuthenticationRequest {
}
export interface UpdateParticipantAuthenticationResponse {
}
export type UpdateParticipantRoleConfigChannelInfo = never;
export interface UpdateParticipantRoleConfigRequest {
}
export interface UpdateParticipantRoleConfigResponse {
}
export interface UpdatePhoneNumberMetadataRequest {
}
export interface UpdatePhoneNumberRequest {
}
export interface UpdatePhoneNumberResponse {
}
export interface UpdatePredefinedAttributeRequest {
}
export interface UpdatePromptRequest {
}
export interface UpdatePromptResponse {
}
export interface UpdateQueueHoursOfOperationRequest {
}
export interface UpdateQueueMaxContactsRequest {
}
export interface UpdateQueueNameRequest {
}
export interface UpdateQueueOutboundCallerConfigRequest {
}
export interface UpdateQueueOutboundEmailConfigRequest {
}
export interface UpdateQueueStatusRequest {
}
export interface UpdateQuickConnectConfigRequest {
}
export type UpdateQuickConnectDescription = string;

export interface UpdateQuickConnectNameRequest {
}
export interface UpdateRoutingProfileAgentAvailabilityTimerRequest {
}
export interface UpdateRoutingProfileConcurrencyRequest {
}
export interface UpdateRoutingProfileDefaultOutboundQueueRequest {
}
export interface UpdateRoutingProfileNameRequest {
}
export interface UpdateRoutingProfileQueuesRequest {
}
export interface UpdateRuleRequest {
}
export interface UpdateSecurityProfileRequest {
}
export interface UpdateTaskTemplateRequest {
}
export interface UpdateTaskTemplateResponse {
}
export interface UpdateTrafficDistributionRequest {
}
export interface UpdateTrafficDistributionResponse {
}
export interface UpdateUserHierarchyGroupNameRequest {
}
export interface UpdateUserHierarchyRequest {
}
export interface UpdateUserHierarchyStructureRequest {
}
export interface UpdateUserIdentityInfoRequest {
}
export interface UpdateUserPhoneConfigRequest {
}
export interface UpdateUserProficienciesRequest {
}
export interface UpdateUserRoutingProfileRequest {
}
export interface UpdateUserSecurityProfilesRequest {
}
export interface UpdateViewContentRequest {
}
export interface UpdateViewContentResponse {
}
export interface UpdateViewMetadataRequest {
}
export interface UpdateViewMetadataResponse {
}
export interface UploadUrlMetadata {
}
export type URI = string;

export type Url = string;

export type URLExpiryInSeconds = number;

export type UrlMetadataSignedHeaders = Record<string, unknown>;
export type UrlMetadataSignedHeadersKey = string;

export type UrlMetadataSignedHeadersValue = string;

export interface UrlReference {
}
export interface UseCase {
}
export type UseCaseId = string;

export type UseCaseSummaryList = Array<unknown>;
export type UseCaseType = never;
export interface User {
}
export interface UserData {
}
export interface UserDataFilters {
}
export type UserDataHierarchyGroups = Array<unknown>;
export type UserDataList = Array<unknown>;
export type UserHierarchyGroupList = Array<unknown>;
export type UserHierarchyGroupSearchConditionList = Array<unknown>;
export interface UserHierarchyGroupSearchCriteria {
}
export interface UserHierarchyGroupSearchFilter {
}
export type UserId = string;

export interface UserIdentityInfo {
}
export interface UserIdentityInfoLite {
}
export type UserIdList = Array<unknown>;
export interface UserInfo {
}
export interface UserNotFoundException {
}
export interface UserPhoneConfig {
}
export interface UserProficiency {
}
export interface UserProficiencyDisassociate {
}
export type UserProficiencyDisassociateList = Array<unknown>;
export type UserProficiencyList = Array<unknown>;
export interface UserQuickConnectConfig {
}
export interface UserReference {
}
export type UserSearchConditionList = Array<unknown>;
export interface UserSearchCriteria {
}
export interface UserSearchFilter {
}
export interface UserSearchSummary {
}
export type UserSearchSummaryList = Array<unknown>;
export interface UserSummary {
}
export type UserSummaryList = Array<unknown>;
export type UserTagMap = Record<string, unknown>;
export type Value = number;

export type VersionNumber = number;

export type VideoCapability = never;
export interface View {
}
export type ViewAction = string;

export type ViewActions = Array<unknown>;
export interface ViewContent {
}
export type ViewContentSha256 = string;

export type ViewDescription = string;

export type ViewId = string;

export interface ViewInputContent {
}
export type ViewInputSchema = string;

export type ViewName = string;

export type ViewsClientToken = string;

export type ViewsInstanceId = string;

export type ViewsNextToken = string;

export type ViewsSummaryList = Array<unknown>;
export type ViewStatus = never;
export interface ViewSummary {
}
export type ViewTemplate = string;

export type ViewType = never;
export type ViewVersion = number;

export interface ViewVersionSummary {
}
export type ViewVersionSummaryList = Array<unknown>;
export interface Vocabulary {
}
export type VocabularyContent = string;

export type VocabularyFailureReason = string;

export type VocabularyId = string;

export type VocabularyLanguageCode = never;
export type VocabularyLastModifiedTime = Date | string;

export type VocabularyName = string;

export type VocabularyNextToken = string;

export type VocabularyState = never;
export interface VocabularySummary {
}
export type VocabularySummaryList = Array<unknown>;
export interface VoiceRecordingConfiguration {
}
export type VoiceRecordingTrack = never;
export interface WisdomInfo {
}
export declare namespace ActivateEvaluationForm {
  export type Input = ActivateEvaluationFormRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateAnalyticsDataSet {
  export type Input = AssociateAnalyticsDataSetRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateApprovedOrigin {
  export type Input = AssociateApprovedOriginRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateBot {
  export type Input = AssociateBotRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateDefaultVocabulary {
  export type Input = AssociateDefaultVocabularyRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateFlow {
  export type Input = AssociateFlowRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateInstanceStorageConfig {
  export type Input = AssociateInstanceStorageConfigRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateLambdaFunction {
  export type Input = AssociateLambdaFunctionRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateLexBot {
  export type Input = AssociateLexBotRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociatePhoneNumberContactFlow {
  export type Input = AssociatePhoneNumberContactFlowRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateQueueQuickConnects {
  export type Input = AssociateQueueQuickConnectsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateRoutingProfileQueues {
  export type Input = AssociateRoutingProfileQueuesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateSecurityKey {
  export type Input = AssociateSecurityKeyRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateTrafficDistributionGroupUser {
  export type Input = AssociateTrafficDistributionGroupUserRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace AssociateUserProficiencies {
  export type Input = AssociateUserProficienciesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchAssociateAnalyticsDataSet {
  export type Input = BatchAssociateAnalyticsDataSetRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchDisassociateAnalyticsDataSet {
  export type Input = BatchDisassociateAnalyticsDataSetRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchGetAttachedFileMetadata {
  export type Input = BatchGetAttachedFileMetadataRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchGetFlowAssociation {
  export type Input = BatchGetFlowAssociationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace BatchPutContact {
  export type Input = BatchPutContactRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ClaimPhoneNumber {
  export type Input = ClaimPhoneNumberRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CompleteAttachedFileUpload {
  export type Input = CompleteAttachedFileUploadRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateAgentStatus {
  export type Input = CreateAgentStatusRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateContact {
  export type Input = CreateContactRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | IdempotencyException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateContactFlow {
  export type Input = CreateContactFlowRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidContactFlowException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateContactFlowModule {
  export type Input = CreateContactFlowModuleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | DuplicateResourceException
    | IdempotencyException
    | InternalServiceException
    | InvalidContactFlowModuleException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateContactFlowVersion {
  export type Input = CreateContactFlowVersionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateEmailAddress {
  export type Input = CreateEmailAddressRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | DuplicateResourceException
    | IdempotencyException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateEvaluationForm {
  export type Input = CreateEvaluationFormRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateHoursOfOperation {
  export type Input = CreateHoursOfOperationRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateHoursOfOperationOverride {
  export type Input = CreateHoursOfOperationOverrideRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateInstance {
  export type Input = CreateInstanceRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateIntegrationAssociation {
  export type Input = CreateIntegrationAssociationRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateParticipant {
  export type Input = CreateParticipantRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreatePersistentContactAssociation {
  export type Input = CreatePersistentContactAssociationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreatePredefinedAttribute {
  export type Input = CreatePredefinedAttributeRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreatePrompt {
  export type Input = CreatePromptRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreatePushNotificationRegistration {
  export type Input = CreatePushNotificationRegistrationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateQueue {
  export type Input = CreateQueueRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateQuickConnect {
  export type Input = CreateQuickConnectRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateRoutingProfile {
  export type Input = CreateRoutingProfileRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateRule {
  export type Input = CreateRuleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateSecurityProfile {
  export type Input = CreateSecurityProfileRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateTaskTemplate {
  export type Input = CreateTaskTemplateRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | PropertyValidationException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateTrafficDistributionGroup {
  export type Input = CreateTrafficDistributionGroupRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateUseCase {
  export type Input = CreateUseCaseRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateUser {
  export type Input = CreateUserRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateUserHierarchyGroup {
  export type Input = CreateUserHierarchyGroupRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace CreateView {
  export type Input = CreateViewRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateViewVersion {
  export type Input = CreateViewVersionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateVocabulary {
  export type Input = CreateVocabularyRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeactivateEvaluationForm {
  export type Input = DeactivateEvaluationFormRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteAttachedFile {
  export type Input = DeleteAttachedFileRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteContactEvaluation {
  export type Input = DeleteContactEvaluationRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteContactFlow {
  export type Input = DeleteContactFlowRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteContactFlowModule {
  export type Input = DeleteContactFlowModuleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteContactFlowVersion {
  export type Input = DeleteContactFlowVersionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteEmailAddress {
  export type Input = DeleteEmailAddressRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteEvaluationForm {
  export type Input = DeleteEvaluationFormRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteHoursOfOperation {
  export type Input = DeleteHoursOfOperationRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteHoursOfOperationOverride {
  export type Input = DeleteHoursOfOperationOverrideRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteInstance {
  export type Input = DeleteInstanceRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteIntegrationAssociation {
  export type Input = DeleteIntegrationAssociationRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeletePredefinedAttribute {
  export type Input = DeletePredefinedAttributeRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeletePrompt {
  export type Input = DeletePromptRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeletePushNotificationRegistration {
  export type Input = DeletePushNotificationRegistrationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteQueue {
  export type Input = DeleteQueueRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteQuickConnect {
  export type Input = DeleteQuickConnectRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteRoutingProfile {
  export type Input = DeleteRoutingProfileRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteRule {
  export type Input = DeleteRuleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteSecurityProfile {
  export type Input = DeleteSecurityProfileRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteTaskTemplate {
  export type Input = DeleteTaskTemplateRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteTrafficDistributionGroup {
  export type Input = DeleteTrafficDistributionGroupRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceInUseException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteUseCase {
  export type Input = DeleteUseCaseRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteUser {
  export type Input = DeleteUserRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteUserHierarchyGroup {
  export type Input = DeleteUserHierarchyGroupRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteView {
  export type Input = DeleteViewRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteViewVersion {
  export type Input = DeleteViewVersionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteVocabulary {
  export type Input = DeleteVocabularyRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAgentStatus {
  export type Input = DescribeAgentStatusRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeAuthenticationProfile {
  export type Input = DescribeAuthenticationProfileRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeContact {
  export type Input = DescribeContactRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeContactEvaluation {
  export type Input = DescribeContactEvaluationRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeContactFlow {
  export type Input = DescribeContactFlowRequest;
  export type Output = {};
  export type Error =
    | ContactFlowNotPublishedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeContactFlowModule {
  export type Input = DescribeContactFlowModuleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeEmailAddress {
  export type Input = DescribeEmailAddressRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeEvaluationForm {
  export type Input = DescribeEvaluationFormRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeHoursOfOperation {
  export type Input = DescribeHoursOfOperationRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeHoursOfOperationOverride {
  export type Input = DescribeHoursOfOperationOverrideRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeInstance {
  export type Input = DescribeInstanceRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeInstanceAttribute {
  export type Input = DescribeInstanceAttributeRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeInstanceStorageConfig {
  export type Input = DescribeInstanceStorageConfigRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribePhoneNumber {
  export type Input = DescribePhoneNumberRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribePredefinedAttribute {
  export type Input = DescribePredefinedAttributeRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribePrompt {
  export type Input = DescribePromptRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeQueue {
  export type Input = DescribeQueueRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeQuickConnect {
  export type Input = DescribeQuickConnectRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeRoutingProfile {
  export type Input = DescribeRoutingProfileRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeRule {
  export type Input = DescribeRuleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeSecurityProfile {
  export type Input = DescribeSecurityProfileRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeTrafficDistributionGroup {
  export type Input = DescribeTrafficDistributionGroupRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeUser {
  export type Input = DescribeUserRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeUserHierarchyGroup {
  export type Input = DescribeUserHierarchyGroupRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeUserHierarchyStructure {
  export type Input = DescribeUserHierarchyStructureRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeView {
  export type Input = DescribeViewRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeVocabulary {
  export type Input = DescribeVocabularyRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateAnalyticsDataSet {
  export type Input = DisassociateAnalyticsDataSetRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateApprovedOrigin {
  export type Input = DisassociateApprovedOriginRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateBot {
  export type Input = DisassociateBotRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateFlow {
  export type Input = DisassociateFlowRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateInstanceStorageConfig {
  export type Input = DisassociateInstanceStorageConfigRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateLambdaFunction {
  export type Input = DisassociateLambdaFunctionRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateLexBot {
  export type Input = DisassociateLexBotRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociatePhoneNumberContactFlow {
  export type Input = DisassociatePhoneNumberContactFlowRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateQueueQuickConnects {
  export type Input = DisassociateQueueQuickConnectsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateRoutingProfileQueues {
  export type Input = DisassociateRoutingProfileQueuesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateSecurityKey {
  export type Input = DisassociateSecurityKeyRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateTrafficDistributionGroupUser {
  export type Input = DisassociateTrafficDistributionGroupUserRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DisassociateUserProficiencies {
  export type Input = DisassociateUserProficienciesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DismissUserContact {
  export type Input = DismissUserContactRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetAttachedFile {
  export type Input = GetAttachedFileRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetContactAttributes {
  export type Input = GetContactAttributesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetCurrentMetricData {
  export type Input = GetCurrentMetricDataRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetCurrentUserData {
  export type Input = GetCurrentUserDataRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetEffectiveHoursOfOperations {
  export type Input = GetEffectiveHoursOfOperationsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetFederationToken {
  export type Input = GetFederationTokenRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | UserNotFoundException
    | CommonAwsError;
}

export declare namespace GetFlowAssociation {
  export type Input = GetFlowAssociationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetMetricData {
  export type Input = GetMetricDataRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetMetricDataV2 {
  export type Input = GetMetricDataV2Request;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetPromptFile {
  export type Input = GetPromptFileRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetTaskTemplate {
  export type Input = GetTaskTemplateRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace GetTrafficDistribution {
  export type Input = GetTrafficDistributionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ImportPhoneNumber {
  export type Input = ImportPhoneNumberRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAgentStatuses {
  export type Input = ListAgentStatusRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAnalyticsDataAssociations {
  export type Input = ListAnalyticsDataAssociationsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAnalyticsDataLakeDataSets {
  export type Input = ListAnalyticsDataLakeDataSetsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListApprovedOrigins {
  export type Input = ListApprovedOriginsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAssociatedContacts {
  export type Input = ListAssociatedContactsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListAuthenticationProfiles {
  export type Input = ListAuthenticationProfilesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListBots {
  export type Input = ListBotsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListContactEvaluations {
  export type Input = ListContactEvaluationsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListContactFlowModules {
  export type Input = ListContactFlowModulesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListContactFlowVersions {
  export type Input = ListContactFlowVersionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListContactFlows {
  export type Input = ListContactFlowsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListContactReferences {
  export type Input = ListContactReferencesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListDefaultVocabularies {
  export type Input = ListDefaultVocabulariesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListEvaluationFormVersions {
  export type Input = ListEvaluationFormVersionsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListEvaluationForms {
  export type Input = ListEvaluationFormsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListFlowAssociations {
  export type Input = ListFlowAssociationsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListHoursOfOperationOverrides {
  export type Input = ListHoursOfOperationOverridesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListHoursOfOperations {
  export type Input = ListHoursOfOperationsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListInstanceAttributes {
  export type Input = ListInstanceAttributesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListInstanceStorageConfigs {
  export type Input = ListInstanceStorageConfigsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListInstances {
  export type Input = ListInstancesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListIntegrationAssociations {
  export type Input = ListIntegrationAssociationsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListLambdaFunctions {
  export type Input = ListLambdaFunctionsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListLexBots {
  export type Input = ListLexBotsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListPhoneNumbers {
  export type Input = ListPhoneNumbersRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListPhoneNumbersV2 {
  export type Input = ListPhoneNumbersV2Request;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListPredefinedAttributes {
  export type Input = ListPredefinedAttributesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListPrompts {
  export type Input = ListPromptsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListQueueQuickConnects {
  export type Input = ListQueueQuickConnectsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListQueues {
  export type Input = ListQueuesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListQuickConnects {
  export type Input = ListQuickConnectsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListRealtimeContactAnalysisSegmentsV2 {
  export type Input = ListRealtimeContactAnalysisSegmentsV2Request;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | OutputTypeNotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListRoutingProfileQueues {
  export type Input = ListRoutingProfileQueuesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListRoutingProfiles {
  export type Input = ListRoutingProfilesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListRules {
  export type Input = ListRulesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListSecurityKeys {
  export type Input = ListSecurityKeysRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListSecurityProfileApplications {
  export type Input = ListSecurityProfileApplicationsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListSecurityProfilePermissions {
  export type Input = ListSecurityProfilePermissionsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListSecurityProfiles {
  export type Input = ListSecurityProfilesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTaskTemplates {
  export type Input = ListTaskTemplatesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTrafficDistributionGroupUsers {
  export type Input = ListTrafficDistributionGroupUsersRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTrafficDistributionGroups {
  export type Input = ListTrafficDistributionGroupsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListUseCases {
  export type Input = ListUseCasesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListUserHierarchyGroups {
  export type Input = ListUserHierarchyGroupsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListUserProficiencies {
  export type Input = ListUserProficienciesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListUsers {
  export type Input = ListUsersRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListViewVersions {
  export type Input = ListViewVersionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListViews {
  export type Input = ListViewsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace MonitorContact {
  export type Input = MonitorContactRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PauseContact {
  export type Input = PauseContactRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace PutUserStatus {
  export type Input = PutUserStatusRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ReleasePhoneNumber {
  export type Input = ReleasePhoneNumberRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidParameterException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ReplicateInstance {
  export type Input = ReplicateInstanceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ResumeContact {
  export type Input = ResumeContactRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ResumeContactRecording {
  export type Input = ResumeContactRecordingRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace SearchAgentStatuses {
  export type Input = SearchAgentStatusesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchAvailablePhoneNumbers {
  export type Input = SearchAvailablePhoneNumbersRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchContactFlowModules {
  export type Input = SearchContactFlowModulesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchContactFlows {
  export type Input = SearchContactFlowsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchContacts {
  export type Input = SearchContactsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchEmailAddresses {
  export type Input = SearchEmailAddressesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchHoursOfOperationOverrides {
  export type Input = SearchHoursOfOperationOverridesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchHoursOfOperations {
  export type Input = SearchHoursOfOperationsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchPredefinedAttributes {
  export type Input = SearchPredefinedAttributesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchPrompts {
  export type Input = SearchPromptsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchQueues {
  export type Input = SearchQueuesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchQuickConnects {
  export type Input = SearchQuickConnectsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchResourceTags {
  export type Input = SearchResourceTagsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | MaximumResultReturnedException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchRoutingProfiles {
  export type Input = SearchRoutingProfilesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchSecurityProfiles {
  export type Input = SearchSecurityProfilesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchUserHierarchyGroups {
  export type Input = SearchUserHierarchyGroupsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchUsers {
  export type Input = SearchUsersRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchVocabularies {
  export type Input = SearchVocabulariesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SendChatIntegrationEvent {
  export type Input = SendChatIntegrationEventRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SendOutboundEmail {
  export type Input = SendOutboundEmailRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartAttachedFileUpload {
  export type Input = StartAttachedFileUploadRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceConflictException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartChatContact {
  export type Input = StartChatContactRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartContactEvaluation {
  export type Input = StartContactEvaluationRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartContactRecording {
  export type Input = StartContactRecordingRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartContactStreaming {
  export type Input = StartContactStreamingRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartEmailContact {
  export type Input = StartEmailContactRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartOutboundChatContact {
  export type Input = StartOutboundChatContactRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartOutboundEmailContact {
  export type Input = StartOutboundEmailContactRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartOutboundVoiceContact {
  export type Input = StartOutboundVoiceContactRequest;
  export type Output = {};
  export type Error =
    | DestinationNotAllowedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | OutboundContactNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartScreenSharing {
  export type Input = StartScreenSharingRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartTaskContact {
  export type Input = StartTaskContactRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace StartWebRTCContact {
  export type Input = StartWebRTCContactRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopContact {
  export type Input = StopContactRequest;
  export type Output = {};
  export type Error =
    | ContactNotFoundException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopContactRecording {
  export type Input = StopContactRecordingRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopContactStreaming {
  export type Input = StopContactStreamingRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace SubmitContactEvaluation {
  export type Input = SubmitContactEvaluationRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SuspendContactRecording {
  export type Input = SuspendContactRecordingRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagContact {
  export type Input = TagContactRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace TransferContact {
  export type Input = TransferContactRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UntagContact {
  export type Input = UntagContactRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateAgentStatus {
  export type Input = UpdateAgentStatusRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateAuthenticationProfile {
  export type Input = UpdateAuthenticationProfileRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateContact {
  export type Input = UpdateContactRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateContactAttributes {
  export type Input = UpdateContactAttributesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateContactEvaluation {
  export type Input = UpdateContactEvaluationRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateContactFlowContent {
  export type Input = UpdateContactFlowContentRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidContactFlowException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateContactFlowMetadata {
  export type Input = UpdateContactFlowMetadataRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateContactFlowModuleContent {
  export type Input = UpdateContactFlowModuleContentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidContactFlowModuleException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateContactFlowModuleMetadata {
  export type Input = UpdateContactFlowModuleMetadataRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateContactFlowName {
  export type Input = UpdateContactFlowNameRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateContactRoutingData {
  export type Input = UpdateContactRoutingDataRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateContactSchedule {
  export type Input = UpdateContactScheduleRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateEmailAddressMetadata {
  export type Input = UpdateEmailAddressMetadataRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateEvaluationForm {
  export type Input = UpdateEvaluationFormRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateHoursOfOperation {
  export type Input = UpdateHoursOfOperationRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateHoursOfOperationOverride {
  export type Input = UpdateHoursOfOperationOverrideRequest;
  export type Output = {};
  export type Error =
    | ConditionalOperationFailedException
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateInstanceAttribute {
  export type Input = UpdateInstanceAttributeRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateInstanceStorageConfig {
  export type Input = UpdateInstanceStorageConfigRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateParticipantAuthentication {
  export type Input = UpdateParticipantAuthenticationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateParticipantRoleConfig {
  export type Input = UpdateParticipantRoleConfigRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdatePhoneNumber {
  export type Input = UpdatePhoneNumberRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidParameterException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdatePhoneNumberMetadata {
  export type Input = UpdatePhoneNumberMetadataRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdatePredefinedAttribute {
  export type Input = UpdatePredefinedAttributeRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdatePrompt {
  export type Input = UpdatePromptRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateQueueHoursOfOperation {
  export type Input = UpdateQueueHoursOfOperationRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateQueueMaxContacts {
  export type Input = UpdateQueueMaxContactsRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateQueueName {
  export type Input = UpdateQueueNameRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateQueueOutboundCallerConfig {
  export type Input = UpdateQueueOutboundCallerConfigRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateQueueOutboundEmailConfig {
  export type Input = UpdateQueueOutboundEmailConfigRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConditionalOperationFailedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateQueueStatus {
  export type Input = UpdateQueueStatusRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateQuickConnectConfig {
  export type Input = UpdateQuickConnectConfigRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateQuickConnectName {
  export type Input = UpdateQuickConnectNameRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateRoutingProfileAgentAvailabilityTimer {
  export type Input = UpdateRoutingProfileAgentAvailabilityTimerRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateRoutingProfileConcurrency {
  export type Input = UpdateRoutingProfileConcurrencyRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateRoutingProfileDefaultOutboundQueue {
  export type Input = UpdateRoutingProfileDefaultOutboundQueueRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateRoutingProfileName {
  export type Input = UpdateRoutingProfileNameRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateRoutingProfileQueues {
  export type Input = UpdateRoutingProfileQueuesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateRule {
  export type Input = UpdateRuleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateSecurityProfile {
  export type Input = UpdateSecurityProfileRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateTaskTemplate {
  export type Input = UpdateTaskTemplateRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | PropertyValidationException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateTrafficDistribution {
  export type Input = UpdateTrafficDistributionRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateUserHierarchy {
  export type Input = UpdateUserHierarchyRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateUserHierarchyGroupName {
  export type Input = UpdateUserHierarchyGroupNameRequest;
  export type Output = {};
  export type Error =
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateUserHierarchyStructure {
  export type Input = UpdateUserHierarchyStructureRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateUserIdentityInfo {
  export type Input = UpdateUserIdentityInfoRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateUserPhoneConfig {
  export type Input = UpdateUserPhoneConfigRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateUserProficiencies {
  export type Input = UpdateUserProficienciesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateUserRoutingProfile {
  export type Input = UpdateUserRoutingProfileRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateUserSecurityProfiles {
  export type Input = UpdateUserSecurityProfilesRequest;
  export type Output = {};
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace UpdateViewContent {
  export type Input = UpdateViewContentRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateViewMetadata {
  export type Input = UpdateViewMetadataRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

