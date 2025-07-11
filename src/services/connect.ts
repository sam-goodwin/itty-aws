import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonConnectService {
  activateEvaluationForm(
    input: ActivateEvaluationFormRequest,
  ): Effect.Effect<
    ActivateEvaluationFormResponse,
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  associateAnalyticsDataSet(
    input: AssociateAnalyticsDataSetRequest,
  ): Effect.Effect<
    AssociateAnalyticsDataSetResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  associateApprovedOrigin(
    input: AssociateApprovedOriginRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  associateBot(
    input: AssociateBotRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  associateDefaultVocabulary(
    input: AssociateDefaultVocabularyRequest,
  ): Effect.Effect<
    AssociateDefaultVocabularyResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  associateFlow(
    input: AssociateFlowRequest,
  ): Effect.Effect<
    AssociateFlowResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  associateInstanceStorageConfig(
    input: AssociateInstanceStorageConfigRequest,
  ): Effect.Effect<
    AssociateInstanceStorageConfigResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  associateLambdaFunction(
    input: AssociateLambdaFunctionRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  associateLexBot(
    input: AssociateLexBotRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  associatePhoneNumberContactFlow(
    input: AssociatePhoneNumberContactFlowRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  associateQueueQuickConnects(
    input: AssociateQueueQuickConnectsRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  associateRoutingProfileQueues(
    input: AssociateRoutingProfileQueuesRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  associateSecurityKey(
    input: AssociateSecurityKeyRequest,
  ): Effect.Effect<
    AssociateSecurityKeyResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  associateTrafficDistributionGroupUser(
    input: AssociateTrafficDistributionGroupUserRequest,
  ): Effect.Effect<
    AssociateTrafficDistributionGroupUserResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  associateUserProficiencies(
    input: AssociateUserProficienciesRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  batchAssociateAnalyticsDataSet(
    input: BatchAssociateAnalyticsDataSetRequest,
  ): Effect.Effect<
    BatchAssociateAnalyticsDataSetResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  batchDisassociateAnalyticsDataSet(
    input: BatchDisassociateAnalyticsDataSetRequest,
  ): Effect.Effect<
    BatchDisassociateAnalyticsDataSetResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  batchGetAttachedFileMetadata(
    input: BatchGetAttachedFileMetadataRequest,
  ): Effect.Effect<
    BatchGetAttachedFileMetadataResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  batchGetFlowAssociation(
    input: BatchGetFlowAssociationRequest,
  ): Effect.Effect<
    BatchGetFlowAssociationResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  batchPutContact(
    input: BatchPutContactRequest,
  ): Effect.Effect<
    BatchPutContactResponse,
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  claimPhoneNumber(
    input: ClaimPhoneNumberRequest,
  ): Effect.Effect<
    ClaimPhoneNumberResponse,
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  completeAttachedFileUpload(
    input: CompleteAttachedFileUploadRequest,
  ): Effect.Effect<
    CompleteAttachedFileUploadResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createAgentStatus(
    input: CreateAgentStatusRequest,
  ): Effect.Effect<
    CreateAgentStatusResponse,
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createContact(
    input: CreateContactRequest,
  ): Effect.Effect<
    CreateContactResponse,
    | AccessDeniedException
    | ConflictException
    | IdempotencyException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createContactFlow(
    input: CreateContactFlowRequest,
  ): Effect.Effect<
    CreateContactFlowResponse,
    | DuplicateResourceException
    | InternalServiceException
    | InvalidContactFlowException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createContactFlowModule(
    input: CreateContactFlowModuleRequest,
  ): Effect.Effect<
    CreateContactFlowModuleResponse,
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
    | CommonAwsError
  >;
  createContactFlowVersion(
    input: CreateContactFlowVersionRequest,
  ): Effect.Effect<
    CreateContactFlowVersionResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createEmailAddress(
    input: CreateEmailAddressRequest,
  ): Effect.Effect<
    CreateEmailAddressResponse,
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
    | CommonAwsError
  >;
  createEvaluationForm(
    input: CreateEvaluationFormRequest,
  ): Effect.Effect<
    CreateEvaluationFormResponse,
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createHoursOfOperation(
    input: CreateHoursOfOperationRequest,
  ): Effect.Effect<
    CreateHoursOfOperationResponse,
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createHoursOfOperationOverride(
    input: CreateHoursOfOperationOverrideRequest,
  ): Effect.Effect<
    CreateHoursOfOperationOverrideResponse,
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createInstance(
    input: CreateInstanceRequest,
  ): Effect.Effect<
    CreateInstanceResponse,
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createIntegrationAssociation(
    input: CreateIntegrationAssociationRequest,
  ): Effect.Effect<
    CreateIntegrationAssociationResponse,
    | DuplicateResourceException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createParticipant(
    input: CreateParticipantRequest,
  ): Effect.Effect<
    CreateParticipantResponse,
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createPersistentContactAssociation(
    input: CreatePersistentContactAssociationRequest,
  ): Effect.Effect<
    CreatePersistentContactAssociationResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createPredefinedAttribute(
    input: CreatePredefinedAttributeRequest,
  ): Effect.Effect<
    {},
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createPrompt(
    input: CreatePromptRequest,
  ): Effect.Effect<
    CreatePromptResponse,
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createPushNotificationRegistration(
    input: CreatePushNotificationRegistrationRequest,
  ): Effect.Effect<
    CreatePushNotificationRegistrationResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createQueue(
    input: CreateQueueRequest,
  ): Effect.Effect<
    CreateQueueResponse,
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createQuickConnect(
    input: CreateQuickConnectRequest,
  ): Effect.Effect<
    CreateQuickConnectResponse,
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createRoutingProfile(
    input: CreateRoutingProfileRequest,
  ): Effect.Effect<
    CreateRoutingProfileResponse,
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createRule(
    input: CreateRuleRequest,
  ): Effect.Effect<
    CreateRuleResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createSecurityProfile(
    input: CreateSecurityProfileRequest,
  ): Effect.Effect<
    CreateSecurityProfileResponse,
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createTaskTemplate(
    input: CreateTaskTemplateRequest,
  ): Effect.Effect<
    CreateTaskTemplateResponse,
    | InternalServiceException
    | InvalidParameterException
    | PropertyValidationException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createTrafficDistributionGroup(
    input: CreateTrafficDistributionGroupRequest,
  ): Effect.Effect<
    CreateTrafficDistributionGroupResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  createUseCase(
    input: CreateUseCaseRequest,
  ): Effect.Effect<
    CreateUseCaseResponse,
    | DuplicateResourceException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createUser(
    input: CreateUserRequest,
  ): Effect.Effect<
    CreateUserResponse,
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createUserHierarchyGroup(
    input: CreateUserHierarchyGroupRequest,
  ): Effect.Effect<
    CreateUserHierarchyGroupResponse,
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  createView(
    input: CreateViewRequest,
  ): Effect.Effect<
    CreateViewResponse,
    | AccessDeniedException
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createViewVersion(
    input: CreateViewVersionRequest,
  ): Effect.Effect<
    CreateViewVersionResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createVocabulary(
    input: CreateVocabularyRequest,
  ): Effect.Effect<
    CreateVocabularyResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  deactivateEvaluationForm(
    input: DeactivateEvaluationFormRequest,
  ): Effect.Effect<
    DeactivateEvaluationFormResponse,
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteAttachedFile(
    input: DeleteAttachedFileRequest,
  ): Effect.Effect<
    DeleteAttachedFileResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteContactEvaluation(
    input: DeleteContactEvaluationRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteContactFlow(
    input: DeleteContactFlowRequest,
  ): Effect.Effect<
    DeleteContactFlowResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteContactFlowModule(
    input: DeleteContactFlowModuleRequest,
  ): Effect.Effect<
    DeleteContactFlowModuleResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteContactFlowVersion(
    input: DeleteContactFlowVersionRequest,
  ): Effect.Effect<
    DeleteContactFlowVersionResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteEmailAddress(
    input: DeleteEmailAddressRequest,
  ): Effect.Effect<
    DeleteEmailAddressResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteEvaluationForm(
    input: DeleteEvaluationFormRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteHoursOfOperation(
    input: DeleteHoursOfOperationRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteHoursOfOperationOverride(
    input: DeleteHoursOfOperationOverrideRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteInstance(
    input: DeleteInstanceRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteIntegrationAssociation(
    input: DeleteIntegrationAssociationRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deletePredefinedAttribute(
    input: DeletePredefinedAttributeRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deletePrompt(
    input: DeletePromptRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deletePushNotificationRegistration(
    input: DeletePushNotificationRegistrationRequest,
  ): Effect.Effect<
    DeletePushNotificationRegistrationResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteQueue(
    input: DeleteQueueRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteQuickConnect(
    input: DeleteQuickConnectRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteRoutingProfile(
    input: DeleteRoutingProfileRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteRule(
    input: DeleteRuleRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteSecurityProfile(
    input: DeleteSecurityProfileRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteTaskTemplate(
    input: DeleteTaskTemplateRequest,
  ): Effect.Effect<
    DeleteTaskTemplateResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteTrafficDistributionGroup(
    input: DeleteTrafficDistributionGroupRequest,
  ): Effect.Effect<
    DeleteTrafficDistributionGroupResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceInUseException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteUseCase(
    input: DeleteUseCaseRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteUser(
    input: DeleteUserRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteUserHierarchyGroup(
    input: DeleteUserHierarchyGroupRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  deleteView(
    input: DeleteViewRequest,
  ): Effect.Effect<
    DeleteViewResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteViewVersion(
    input: DeleteViewVersionRequest,
  ): Effect.Effect<
    DeleteViewVersionResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteVocabulary(
    input: DeleteVocabularyRequest,
  ): Effect.Effect<
    DeleteVocabularyResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAgentStatus(
    input: DescribeAgentStatusRequest,
  ): Effect.Effect<
    DescribeAgentStatusResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeAuthenticationProfile(
    input: DescribeAuthenticationProfileRequest,
  ): Effect.Effect<
    DescribeAuthenticationProfileResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeContact(
    input: DescribeContactRequest,
  ): Effect.Effect<
    DescribeContactResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeContactEvaluation(
    input: DescribeContactEvaluationRequest,
  ): Effect.Effect<
    DescribeContactEvaluationResponse,
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeContactFlow(
    input: DescribeContactFlowRequest,
  ): Effect.Effect<
    DescribeContactFlowResponse,
    | ContactFlowNotPublishedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeContactFlowModule(
    input: DescribeContactFlowModuleRequest,
  ): Effect.Effect<
    DescribeContactFlowModuleResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeEmailAddress(
    input: DescribeEmailAddressRequest,
  ): Effect.Effect<
    DescribeEmailAddressResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeEvaluationForm(
    input: DescribeEvaluationFormRequest,
  ): Effect.Effect<
    DescribeEvaluationFormResponse,
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeHoursOfOperation(
    input: DescribeHoursOfOperationRequest,
  ): Effect.Effect<
    DescribeHoursOfOperationResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeHoursOfOperationOverride(
    input: DescribeHoursOfOperationOverrideRequest,
  ): Effect.Effect<
    DescribeHoursOfOperationOverrideResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeInstance(
    input: DescribeInstanceRequest,
  ): Effect.Effect<
    DescribeInstanceResponse,
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  describeInstanceAttribute(
    input: DescribeInstanceAttributeRequest,
  ): Effect.Effect<
    DescribeInstanceAttributeResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeInstanceStorageConfig(
    input: DescribeInstanceStorageConfigRequest,
  ): Effect.Effect<
    DescribeInstanceStorageConfigResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describePhoneNumber(
    input: DescribePhoneNumberRequest,
  ): Effect.Effect<
    DescribePhoneNumberResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describePredefinedAttribute(
    input: DescribePredefinedAttributeRequest,
  ): Effect.Effect<
    DescribePredefinedAttributeResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describePrompt(
    input: DescribePromptRequest,
  ): Effect.Effect<
    DescribePromptResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeQueue(
    input: DescribeQueueRequest,
  ): Effect.Effect<
    DescribeQueueResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeQuickConnect(
    input: DescribeQuickConnectRequest,
  ): Effect.Effect<
    DescribeQuickConnectResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeRoutingProfile(
    input: DescribeRoutingProfileRequest,
  ): Effect.Effect<
    DescribeRoutingProfileResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeRule(
    input: DescribeRuleRequest,
  ): Effect.Effect<
    DescribeRuleResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeSecurityProfile(
    input: DescribeSecurityProfileRequest,
  ): Effect.Effect<
    DescribeSecurityProfileResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeTrafficDistributionGroup(
    input: DescribeTrafficDistributionGroupRequest,
  ): Effect.Effect<
    DescribeTrafficDistributionGroupResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeUser(
    input: DescribeUserRequest,
  ): Effect.Effect<
    DescribeUserResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeUserHierarchyGroup(
    input: DescribeUserHierarchyGroupRequest,
  ): Effect.Effect<
    DescribeUserHierarchyGroupResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeUserHierarchyStructure(
    input: DescribeUserHierarchyStructureRequest,
  ): Effect.Effect<
    DescribeUserHierarchyStructureResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  describeView(
    input: DescribeViewRequest,
  ): Effect.Effect<
    DescribeViewResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  describeVocabulary(
    input: DescribeVocabularyRequest,
  ): Effect.Effect<
    DescribeVocabularyResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateAnalyticsDataSet(
    input: DisassociateAnalyticsDataSetRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateApprovedOrigin(
    input: DisassociateApprovedOriginRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateBot(
    input: DisassociateBotRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateFlow(
    input: DisassociateFlowRequest,
  ): Effect.Effect<
    DisassociateFlowResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateInstanceStorageConfig(
    input: DisassociateInstanceStorageConfigRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateLambdaFunction(
    input: DisassociateLambdaFunctionRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateLexBot(
    input: DisassociateLexBotRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociatePhoneNumberContactFlow(
    input: DisassociatePhoneNumberContactFlowRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateQueueQuickConnects(
    input: DisassociateQueueQuickConnectsRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateRoutingProfileQueues(
    input: DisassociateRoutingProfileQueuesRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateSecurityKey(
    input: DisassociateSecurityKeyRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateTrafficDistributionGroupUser(
    input: DisassociateTrafficDistributionGroupUserRequest,
  ): Effect.Effect<
    DisassociateTrafficDistributionGroupUserResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  disassociateUserProficiencies(
    input: DisassociateUserProficienciesRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  dismissUserContact(
    input: DismissUserContactRequest,
  ): Effect.Effect<
    DismissUserContactResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getAttachedFile(
    input: GetAttachedFileRequest,
  ): Effect.Effect<
    GetAttachedFileResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getContactAttributes(
    input: GetContactAttributesRequest,
  ): Effect.Effect<
    GetContactAttributesResponse,
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getCurrentMetricData(
    input: GetCurrentMetricDataRequest,
  ): Effect.Effect<
    GetCurrentMetricDataResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getCurrentUserData(
    input: GetCurrentUserDataRequest,
  ): Effect.Effect<
    GetCurrentUserDataResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getEffectiveHoursOfOperations(
    input: GetEffectiveHoursOfOperationsRequest,
  ): Effect.Effect<
    GetEffectiveHoursOfOperationsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getFederationToken(
    input: GetFederationTokenRequest,
  ): Effect.Effect<
    GetFederationTokenResponse,
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | UserNotFoundException
    | CommonAwsError
  >;
  getFlowAssociation(
    input: GetFlowAssociationRequest,
  ): Effect.Effect<
    GetFlowAssociationResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getMetricData(
    input: GetMetricDataRequest,
  ): Effect.Effect<
    GetMetricDataResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getMetricDataV2(
    input: GetMetricDataV2Request,
  ): Effect.Effect<
    GetMetricDataV2Response,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getPromptFile(
    input: GetPromptFileRequest,
  ): Effect.Effect<
    GetPromptFileResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getTaskTemplate(
    input: GetTaskTemplateRequest,
  ): Effect.Effect<
    GetTaskTemplateResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  getTrafficDistribution(
    input: GetTrafficDistributionRequest,
  ): Effect.Effect<
    GetTrafficDistributionResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  importPhoneNumber(
    input: ImportPhoneNumberRequest,
  ): Effect.Effect<
    ImportPhoneNumberResponse,
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listAgentStatuses(
    input: ListAgentStatusRequest,
  ): Effect.Effect<
    ListAgentStatusResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listAnalyticsDataAssociations(
    input: ListAnalyticsDataAssociationsRequest,
  ): Effect.Effect<
    ListAnalyticsDataAssociationsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listAnalyticsDataLakeDataSets(
    input: ListAnalyticsDataLakeDataSetsRequest,
  ): Effect.Effect<
    ListAnalyticsDataLakeDataSetsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listApprovedOrigins(
    input: ListApprovedOriginsRequest,
  ): Effect.Effect<
    ListApprovedOriginsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listAssociatedContacts(
    input: ListAssociatedContactsRequest,
  ): Effect.Effect<
    ListAssociatedContactsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listAuthenticationProfiles(
    input: ListAuthenticationProfilesRequest,
  ): Effect.Effect<
    ListAuthenticationProfilesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listBots(
    input: ListBotsRequest,
  ): Effect.Effect<
    ListBotsResponse,
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listContactEvaluations(
    input: ListContactEvaluationsRequest,
  ): Effect.Effect<
    ListContactEvaluationsResponse,
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listContactFlowModules(
    input: ListContactFlowModulesRequest,
  ): Effect.Effect<
    ListContactFlowModulesResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listContactFlows(
    input: ListContactFlowsRequest,
  ): Effect.Effect<
    ListContactFlowsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listContactFlowVersions(
    input: ListContactFlowVersionsRequest,
  ): Effect.Effect<
    ListContactFlowVersionsResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listContactReferences(
    input: ListContactReferencesRequest,
  ): Effect.Effect<
    ListContactReferencesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listDefaultVocabularies(
    input: ListDefaultVocabulariesRequest,
  ): Effect.Effect<
    ListDefaultVocabulariesResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listEvaluationForms(
    input: ListEvaluationFormsRequest,
  ): Effect.Effect<
    ListEvaluationFormsResponse,
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listEvaluationFormVersions(
    input: ListEvaluationFormVersionsRequest,
  ): Effect.Effect<
    ListEvaluationFormVersionsResponse,
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listFlowAssociations(
    input: ListFlowAssociationsRequest,
  ): Effect.Effect<
    ListFlowAssociationsResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listHoursOfOperationOverrides(
    input: ListHoursOfOperationOverridesRequest,
  ): Effect.Effect<
    ListHoursOfOperationOverridesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listHoursOfOperations(
    input: ListHoursOfOperationsRequest,
  ): Effect.Effect<
    ListHoursOfOperationsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listInstanceAttributes(
    input: ListInstanceAttributesRequest,
  ): Effect.Effect<
    ListInstanceAttributesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listInstances(
    input: ListInstancesRequest,
  ): Effect.Effect<
    ListInstancesResponse,
    InternalServiceException | InvalidRequestException | CommonAwsError
  >;
  listInstanceStorageConfigs(
    input: ListInstanceStorageConfigsRequest,
  ): Effect.Effect<
    ListInstanceStorageConfigsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listIntegrationAssociations(
    input: ListIntegrationAssociationsRequest,
  ): Effect.Effect<
    ListIntegrationAssociationsResponse,
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listLambdaFunctions(
    input: ListLambdaFunctionsRequest,
  ): Effect.Effect<
    ListLambdaFunctionsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listLexBots(
    input: ListLexBotsRequest,
  ): Effect.Effect<
    ListLexBotsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listPhoneNumbers(
    input: ListPhoneNumbersRequest,
  ): Effect.Effect<
    ListPhoneNumbersResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listPhoneNumbersV2(
    input: ListPhoneNumbersV2Request,
  ): Effect.Effect<
    ListPhoneNumbersV2Response,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listPredefinedAttributes(
    input: ListPredefinedAttributesRequest,
  ): Effect.Effect<
    ListPredefinedAttributesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listPrompts(
    input: ListPromptsRequest,
  ): Effect.Effect<
    ListPromptsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listQueueQuickConnects(
    input: ListQueueQuickConnectsRequest,
  ): Effect.Effect<
    ListQueueQuickConnectsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listQueues(
    input: ListQueuesRequest,
  ): Effect.Effect<
    ListQueuesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listQuickConnects(
    input: ListQuickConnectsRequest,
  ): Effect.Effect<
    ListQuickConnectsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listRealtimeContactAnalysisSegmentsV2(
    input: ListRealtimeContactAnalysisSegmentsV2Request,
  ): Effect.Effect<
    ListRealtimeContactAnalysisSegmentsV2Response,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | OutputTypeNotFoundException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listRoutingProfileQueues(
    input: ListRoutingProfileQueuesRequest,
  ): Effect.Effect<
    ListRoutingProfileQueuesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listRoutingProfiles(
    input: ListRoutingProfilesRequest,
  ): Effect.Effect<
    ListRoutingProfilesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listRules(
    input: ListRulesRequest,
  ): Effect.Effect<
    ListRulesResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listSecurityKeys(
    input: ListSecurityKeysRequest,
  ): Effect.Effect<
    ListSecurityKeysResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listSecurityProfileApplications(
    input: ListSecurityProfileApplicationsRequest,
  ): Effect.Effect<
    ListSecurityProfileApplicationsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listSecurityProfilePermissions(
    input: ListSecurityProfilePermissionsRequest,
  ): Effect.Effect<
    ListSecurityProfilePermissionsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listSecurityProfiles(
    input: ListSecurityProfilesRequest,
  ): Effect.Effect<
    ListSecurityProfilesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listTaskTemplates(
    input: ListTaskTemplatesRequest,
  ): Effect.Effect<
    ListTaskTemplatesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listTrafficDistributionGroups(
    input: ListTrafficDistributionGroupsRequest,
  ): Effect.Effect<
    ListTrafficDistributionGroupsResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  listTrafficDistributionGroupUsers(
    input: ListTrafficDistributionGroupUsersRequest,
  ): Effect.Effect<
    ListTrafficDistributionGroupUsersResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listUseCases(
    input: ListUseCasesRequest,
  ): Effect.Effect<
    ListUseCasesResponse,
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listUserHierarchyGroups(
    input: ListUserHierarchyGroupsRequest,
  ): Effect.Effect<
    ListUserHierarchyGroupsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listUserProficiencies(
    input: ListUserProficienciesRequest,
  ): Effect.Effect<
    ListUserProficienciesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listUsers(
    input: ListUsersRequest,
  ): Effect.Effect<
    ListUsersResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  listViews(
    input: ListViewsRequest,
  ): Effect.Effect<
    ListViewsResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listViewVersions(
    input: ListViewVersionsRequest,
  ): Effect.Effect<
    ListViewVersionsResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  monitorContact(
    input: MonitorContactRequest,
  ): Effect.Effect<
    MonitorContactResponse,
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  pauseContact(
    input: PauseContactRequest,
  ): Effect.Effect<
    PauseContactResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  putUserStatus(
    input: PutUserStatusRequest,
  ): Effect.Effect<
    PutUserStatusResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  releasePhoneNumber(
    input: ReleasePhoneNumberRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidParameterException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  replicateInstance(
    input: ReplicateInstanceRequest,
  ): Effect.Effect<
    ReplicateInstanceResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ResourceNotReadyException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  resumeContact(
    input: ResumeContactRequest,
  ): Effect.Effect<
    ResumeContactResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  resumeContactRecording(
    input: ResumeContactRecordingRequest,
  ): Effect.Effect<
    ResumeContactRecordingResponse,
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  searchAgentStatuses(
    input: SearchAgentStatusesRequest,
  ): Effect.Effect<
    SearchAgentStatusesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchAvailablePhoneNumbers(
    input: SearchAvailablePhoneNumbersRequest,
  ): Effect.Effect<
    SearchAvailablePhoneNumbersResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError
  >;
  searchContactFlowModules(
    input: SearchContactFlowModulesRequest,
  ): Effect.Effect<
    SearchContactFlowModulesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchContactFlows(
    input: SearchContactFlowsRequest,
  ): Effect.Effect<
    SearchContactFlowsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchContacts(
    input: SearchContactsRequest,
  ): Effect.Effect<
    SearchContactsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchEmailAddresses(
    input: SearchEmailAddressesRequest,
  ): Effect.Effect<
    SearchEmailAddressesResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchHoursOfOperationOverrides(
    input: SearchHoursOfOperationOverridesRequest,
  ): Effect.Effect<
    SearchHoursOfOperationOverridesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchHoursOfOperations(
    input: SearchHoursOfOperationsRequest,
  ): Effect.Effect<
    SearchHoursOfOperationsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchPredefinedAttributes(
    input: SearchPredefinedAttributesRequest,
  ): Effect.Effect<
    SearchPredefinedAttributesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchPrompts(
    input: SearchPromptsRequest,
  ): Effect.Effect<
    SearchPromptsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchQueues(
    input: SearchQueuesRequest,
  ): Effect.Effect<
    SearchQueuesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchQuickConnects(
    input: SearchQuickConnectsRequest,
  ): Effect.Effect<
    SearchQuickConnectsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchResourceTags(
    input: SearchResourceTagsRequest,
  ): Effect.Effect<
    SearchResourceTagsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | MaximumResultReturnedException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchRoutingProfiles(
    input: SearchRoutingProfilesRequest,
  ): Effect.Effect<
    SearchRoutingProfilesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchSecurityProfiles(
    input: SearchSecurityProfilesRequest,
  ): Effect.Effect<
    SearchSecurityProfilesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchUserHierarchyGroups(
    input: SearchUserHierarchyGroupsRequest,
  ): Effect.Effect<
    SearchUserHierarchyGroupsResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchUsers(
    input: SearchUsersRequest,
  ): Effect.Effect<
    SearchUsersResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  searchVocabularies(
    input: SearchVocabulariesRequest,
  ): Effect.Effect<
    SearchVocabulariesResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  sendChatIntegrationEvent(
    input: SendChatIntegrationEventRequest,
  ): Effect.Effect<
    SendChatIntegrationEventResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  sendOutboundEmail(
    input: SendOutboundEmailRequest,
  ): Effect.Effect<
    SendOutboundEmailResponse,
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  startAttachedFileUpload(
    input: StartAttachedFileUploadRequest,
  ): Effect.Effect<
    StartAttachedFileUploadResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceConflictException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  startChatContact(
    input: StartChatContactRequest,
  ): Effect.Effect<
    StartChatContactResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  startContactEvaluation(
    input: StartContactEvaluationRequest,
  ): Effect.Effect<
    StartContactEvaluationResponse,
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  startContactRecording(
    input: StartContactRecordingRequest,
  ): Effect.Effect<
    StartContactRecordingResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  startContactStreaming(
    input: StartContactStreamingRequest,
  ): Effect.Effect<
    StartContactStreamingResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  startEmailContact(
    input: StartEmailContactRequest,
  ): Effect.Effect<
    StartEmailContactResponse,
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  startOutboundChatContact(
    input: StartOutboundChatContactRequest,
  ): Effect.Effect<
    StartOutboundChatContactResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  startOutboundEmailContact(
    input: StartOutboundEmailContactRequest,
  ): Effect.Effect<
    StartOutboundEmailContactResponse,
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  startOutboundVoiceContact(
    input: StartOutboundVoiceContactRequest,
  ): Effect.Effect<
    StartOutboundVoiceContactResponse,
    | DestinationNotAllowedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | OutboundContactNotPermittedException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  startScreenSharing(
    input: StartScreenSharingRequest,
  ): Effect.Effect<
    StartScreenSharingResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  startTaskContact(
    input: StartTaskContactRequest,
  ): Effect.Effect<
    StartTaskContactResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  startWebRTCContact(
    input: StartWebRTCContactRequest,
  ): Effect.Effect<
    StartWebRTCContactResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  stopContact(
    input: StopContactRequest,
  ): Effect.Effect<
    StopContactResponse,
    | ContactNotFoundException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  stopContactRecording(
    input: StopContactRecordingRequest,
  ): Effect.Effect<
    StopContactRecordingResponse,
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  stopContactStreaming(
    input: StopContactStreamingRequest,
  ): Effect.Effect<
    StopContactStreamingResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  submitContactEvaluation(
    input: SubmitContactEvaluationRequest,
  ): Effect.Effect<
    SubmitContactEvaluationResponse,
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  suspendContactRecording(
    input: SuspendContactRecordingRequest,
  ): Effect.Effect<
    SuspendContactRecordingResponse,
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  tagContact(
    input: TagContactRequest,
  ): Effect.Effect<
    TagContactResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  transferContact(
    input: TransferContactRequest,
  ): Effect.Effect<
    TransferContactResponse,
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  untagContact(
    input: UntagContactRequest,
  ): Effect.Effect<
    UntagContactResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateAgentStatus(
    input: UpdateAgentStatusRequest,
  ): Effect.Effect<
    {},
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateAuthenticationProfile(
    input: UpdateAuthenticationProfileRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateContact(
    input: UpdateContactRequest,
  ): Effect.Effect<
    UpdateContactResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateContactAttributes(
    input: UpdateContactAttributesRequest,
  ): Effect.Effect<
    UpdateContactAttributesResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateContactEvaluation(
    input: UpdateContactEvaluationRequest,
  ): Effect.Effect<
    UpdateContactEvaluationResponse,
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateContactFlowContent(
    input: UpdateContactFlowContentRequest,
  ): Effect.Effect<
    UpdateContactFlowContentResponse,
    | InternalServiceException
    | InvalidContactFlowException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateContactFlowMetadata(
    input: UpdateContactFlowMetadataRequest,
  ): Effect.Effect<
    UpdateContactFlowMetadataResponse,
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateContactFlowModuleContent(
    input: UpdateContactFlowModuleContentRequest,
  ): Effect.Effect<
    UpdateContactFlowModuleContentResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidContactFlowModuleException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateContactFlowModuleMetadata(
    input: UpdateContactFlowModuleMetadataRequest,
  ): Effect.Effect<
    UpdateContactFlowModuleMetadataResponse,
    | AccessDeniedException
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateContactFlowName(
    input: UpdateContactFlowNameRequest,
  ): Effect.Effect<
    UpdateContactFlowNameResponse,
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateContactRoutingData(
    input: UpdateContactRoutingDataRequest,
  ): Effect.Effect<
    UpdateContactRoutingDataResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateContactSchedule(
    input: UpdateContactScheduleRequest,
  ): Effect.Effect<
    UpdateContactScheduleResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | LimitExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateEmailAddressMetadata(
    input: UpdateEmailAddressMetadataRequest,
  ): Effect.Effect<
    UpdateEmailAddressMetadataResponse,
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateEvaluationForm(
    input: UpdateEvaluationFormRequest,
  ): Effect.Effect<
    UpdateEvaluationFormResponse,
    | InternalServiceException
    | InvalidParameterException
    | ResourceConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  updateHoursOfOperation(
    input: UpdateHoursOfOperationRequest,
  ): Effect.Effect<
    {},
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateHoursOfOperationOverride(
    input: UpdateHoursOfOperationOverrideRequest,
  ): Effect.Effect<
    {},
    | ConditionalOperationFailedException
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateInstanceAttribute(
    input: UpdateInstanceAttributeRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateInstanceStorageConfig(
    input: UpdateInstanceStorageConfigRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateParticipantAuthentication(
    input: UpdateParticipantAuthenticationRequest,
  ): Effect.Effect<
    UpdateParticipantAuthenticationResponse,
    | AccessDeniedException
    | ConflictException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError
  >;
  updateParticipantRoleConfig(
    input: UpdateParticipantRoleConfigRequest,
  ): Effect.Effect<
    UpdateParticipantRoleConfigResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updatePhoneNumber(
    input: UpdatePhoneNumberRequest,
  ): Effect.Effect<
    UpdatePhoneNumberResponse,
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidParameterException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updatePhoneNumberMetadata(
    input: UpdatePhoneNumberMetadataRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | IdempotencyException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updatePredefinedAttribute(
    input: UpdatePredefinedAttributeRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updatePrompt(
    input: UpdatePromptRequest,
  ): Effect.Effect<
    UpdatePromptResponse,
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateQueueHoursOfOperation(
    input: UpdateQueueHoursOfOperationRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateQueueMaxContacts(
    input: UpdateQueueMaxContactsRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateQueueName(
    input: UpdateQueueNameRequest,
  ): Effect.Effect<
    {},
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateQueueOutboundCallerConfig(
    input: UpdateQueueOutboundCallerConfigRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateQueueOutboundEmailConfig(
    input: UpdateQueueOutboundEmailConfigRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | ConditionalOperationFailedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateQueueStatus(
    input: UpdateQueueStatusRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateQuickConnectConfig(
    input: UpdateQuickConnectConfigRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateQuickConnectName(
    input: UpdateQuickConnectNameRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateRoutingProfileAgentAvailabilityTimer(
    input: UpdateRoutingProfileAgentAvailabilityTimerRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateRoutingProfileConcurrency(
    input: UpdateRoutingProfileConcurrencyRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateRoutingProfileDefaultOutboundQueue(
    input: UpdateRoutingProfileDefaultOutboundQueueRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateRoutingProfileName(
    input: UpdateRoutingProfileNameRequest,
  ): Effect.Effect<
    {},
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateRoutingProfileQueues(
    input: UpdateRoutingProfileQueuesRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateRule(
    input: UpdateRuleRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateSecurityProfile(
    input: UpdateSecurityProfileRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateTaskTemplate(
    input: UpdateTaskTemplateRequest,
  ): Effect.Effect<
    UpdateTaskTemplateResponse,
    | InternalServiceException
    | InvalidParameterException
    | PropertyValidationException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | CommonAwsError
  >;
  updateTrafficDistribution(
    input: UpdateTrafficDistributionRequest,
  ): Effect.Effect<
    UpdateTrafficDistributionResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceConflictException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateUserHierarchy(
    input: UpdateUserHierarchyRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateUserHierarchyGroupName(
    input: UpdateUserHierarchyGroupNameRequest,
  ): Effect.Effect<
    {},
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateUserHierarchyStructure(
    input: UpdateUserHierarchyStructureRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateUserIdentityInfo(
    input: UpdateUserIdentityInfoRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateUserPhoneConfig(
    input: UpdateUserPhoneConfigRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateUserProficiencies(
    input: UpdateUserProficienciesRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateUserRoutingProfile(
    input: UpdateUserRoutingProfileRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateUserSecurityProfiles(
    input: UpdateUserSecurityProfilesRequest,
  ): Effect.Effect<
    {},
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError
  >;
  updateViewContent(
    input: UpdateViewContentRequest,
  ): Effect.Effect<
    UpdateViewContentResponse,
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateViewMetadata(
    input: UpdateViewMetadataRequest,
  ): Effect.Effect<
    UpdateViewMetadataResponse,
    | AccessDeniedException
    | DuplicateResourceException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceInUseException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError
  >;
}

export type Connect = AmazonConnectService;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AccessTokenDuration = number;

export type ActionSummaries = Array<ActionSummary>;
export interface ActionSummary {
  ActionType: ActionType;
}
export type ActionType =
  | "CREATE_TASK"
  | "ASSIGN_CONTACT_CATEGORY"
  | "GENERATE_EVENTBRIDGE_EVENT"
  | "SEND_NOTIFICATION"
  | "CREATE_CASE"
  | "UPDATE_CASE"
  | "ASSIGN_SLA"
  | "END_ASSOCIATED_TASKS"
  | "SUBMIT_AUTO_EVALUATION";
export interface ActivateEvaluationFormRequest {
  InstanceId: string;
  EvaluationFormId: string;
  EvaluationFormVersion: number;
}
export interface ActivateEvaluationFormResponse {
  EvaluationFormId: string;
  EvaluationFormArn: string;
  EvaluationFormVersion: number;
}
export interface AdditionalEmailRecipients {
  ToList?: Array<EmailRecipient>;
  CcList?: Array<EmailRecipient>;
}
export type AfterContactWorkTimeLimit = number;

export type AgentAvailabilityTimer =
  | "TIME_SINCE_LAST_ACTIVITY"
  | "TIME_SINCE_LAST_INBOUND";
export interface AgentConfig {
  Distributions: Array<Distribution>;
}
export interface AgentContactReference {
  ContactId?: string;
  Channel?: Channel;
  InitiationMethod?: ContactInitiationMethod;
  AgentContactState?: ContactState;
  StateStartTimestamp?: Date | string;
  ConnectedToAgentTimestamp?: Date | string;
  Queue?: QueueReference;
}
export type AgentContactReferenceList = Array<AgentContactReference>;
export type AgentFirstName = string;

export interface AgentHierarchyGroup {
  Arn?: string;
}
export interface AgentHierarchyGroups {
  L1Ids?: Array<string>;
  L2Ids?: Array<string>;
  L3Ids?: Array<string>;
  L4Ids?: Array<string>;
  L5Ids?: Array<string>;
}
export type AgentId = string;

export type AgentIds = Array<string>;
export interface AgentInfo {
  Id?: string;
  ConnectedToAgentTimestamp?: Date | string;
  AgentPauseDurationInSeconds?: number;
  HierarchyGroups?: HierarchyGroups;
  DeviceInfo?: DeviceInfo;
  Capabilities?: ParticipantCapabilities;
  AfterContactWorkDuration?: number;
  AfterContactWorkStartTimestamp?: Date | string;
  AfterContactWorkEndTimestamp?: Date | string;
  AgentInitiatedHoldDuration?: number;
  StateTransitions?: Array<StateTransition>;
}
export type AgentLastName = string;

export type AgentPauseDurationInSeconds = number;

export interface AgentQualityMetrics {
  Audio?: AudioQualityMetricsInfo;
}
export type AgentResourceId = string;

export type AgentResourceIdList = Array<string>;
export interface AgentsCriteria {
  AgentIds?: Array<string>;
}
export type AgentsMinOneMaxHundred = Array<string>;
export interface AgentStatus {
  AgentStatusARN?: string;
  AgentStatusId?: string;
  Name?: string;
  Description?: string;
  Type?: AgentStatusType;
  DisplayOrder?: number;
  State?: AgentStatusState;
  Tags?: Record<string, string>;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export type AgentStatusDescription = string;

export type AgentStatusId = string;

export type AgentStatusList = Array<AgentStatus>;
export type AgentStatusName = string;

export type AgentStatusOrderNumber = number;

export interface AgentStatusReference {
  StatusStartTimestamp?: Date | string;
  StatusArn?: string;
  StatusName?: string;
}
export type AgentStatusSearchConditionList = Array<AgentStatusSearchCriteria>;
export interface AgentStatusSearchCriteria {
  OrConditions?: Array<AgentStatusSearchCriteria>;
  AndConditions?: Array<AgentStatusSearchCriteria>;
  StringCondition?: StringCondition;
}
export interface AgentStatusSearchFilter {
  AttributeFilter?: ControlPlaneAttributeFilter;
}
export type AgentStatusState = "ENABLED" | "DISABLED";
export interface AgentStatusSummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  Type?: AgentStatusType;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export type AgentStatusSummaryList = Array<AgentStatusSummary>;
export type AgentStatusType = "ROUTABLE" | "CUSTOM" | "OFFLINE";
export type AgentStatusTypes = Array<AgentStatusType>;
export type AgentUsername = string;

export type AliasArn = string;

export type AllowedAccessControlTags = Record<string, string>;
export interface AllowedCapabilities {
  Customer?: ParticipantCapabilities;
  Agent?: ParticipantCapabilities;
}
export type AllowedMonitorCapabilities = Array<MonitorCapability>;
export interface AnalyticsDataAssociationResult {
  DataSetId?: string;
  TargetAccountId?: string;
  ResourceShareId?: string;
  ResourceShareArn?: string;
  ResourceShareStatus?: string;
}
export type AnalyticsDataAssociationResults =
  Array<AnalyticsDataAssociationResult>;
export interface AnalyticsDataSetsResult {
  DataSetId?: string;
  DataSetName?: string;
}
export type AnalyticsDataSetsResults = Array<AnalyticsDataSetsResult>;
export type AnsweringMachineDetectionStatus =
  | "ANSWERED"
  | "UNDETECTED"
  | "ERROR"
  | "HUMAN_ANSWERED"
  | "SIT_TONE_DETECTED"
  | "SIT_TONE_BUSY"
  | "SIT_TONE_INVALID_NUMBER"
  | "FAX_MACHINE_DETECTED"
  | "VOICEMAIL_BEEP"
  | "VOICEMAIL_NO_BEEP"
  | "AMD_UNRESOLVED"
  | "AMD_UNANSWERED"
  | "AMD_ERROR"
  | "AMD_NOT_APPLICABLE";
export interface AnswerMachineDetectionConfig {
  EnableAnswerMachineDetection?: boolean;
  AwaitAnswerMachinePrompt?: boolean;
}
export interface Application {
  Namespace?: string;
  ApplicationPermissions?: Array<string>;
}
export type ApplicationPermissions = Array<string>;
export type Applications = Array<Application>;
export type ApproximateTotalCount = number;

export type ARN = string;

export type ArtifactId = string;

export type ArtifactStatus = "APPROVED" | "REJECTED" | "IN_PROGRESS";
export interface AssignContactCategoryActionDefinition {}
export interface AssignSlaActionDefinition {
  SlaAssignmentType: SlaAssignmentType;
  CaseSlaConfiguration?: CaseSlaConfiguration;
}
export interface AssociateAnalyticsDataSetRequest {
  InstanceId: string;
  DataSetId: string;
  TargetAccountId?: string;
}
export interface AssociateAnalyticsDataSetResponse {
  DataSetId?: string;
  TargetAccountId?: string;
  ResourceShareId?: string;
  ResourceShareArn?: string;
}
export interface AssociateApprovedOriginRequest {
  InstanceId: string;
  Origin: string;
  ClientToken?: string;
}
export interface AssociateBotRequest {
  InstanceId: string;
  LexBot?: LexBot;
  LexV2Bot?: LexV2Bot;
  ClientToken?: string;
}
export interface AssociatedContactSummary {
  ContactId?: string;
  ContactArn?: string;
  InitiationTimestamp?: Date | string;
  DisconnectTimestamp?: Date | string;
  InitialContactId?: string;
  PreviousContactId?: string;
  RelatedContactId?: string;
  InitiationMethod?: ContactInitiationMethod;
  Channel?: Channel;
}
export type AssociatedContactSummaryList = Array<AssociatedContactSummary>;
export interface AssociateDefaultVocabularyRequest {
  InstanceId: string;
  LanguageCode: VocabularyLanguageCode;
  VocabularyId?: string;
}
export interface AssociateDefaultVocabularyResponse {}
export type AssociatedQueueIdList = Array<string>;
export interface AssociateFlowRequest {
  InstanceId: string;
  ResourceId: string;
  FlowId: string;
  ResourceType: FlowAssociationResourceType;
}
export interface AssociateFlowResponse {}
export interface AssociateInstanceStorageConfigRequest {
  InstanceId: string;
  ResourceType: InstanceStorageResourceType;
  StorageConfig: InstanceStorageConfig;
  ClientToken?: string;
}
export interface AssociateInstanceStorageConfigResponse {
  AssociationId?: string;
}
export interface AssociateLambdaFunctionRequest {
  InstanceId: string;
  FunctionArn: string;
  ClientToken?: string;
}
export interface AssociateLexBotRequest {
  InstanceId: string;
  LexBot: LexBot;
  ClientToken?: string;
}
export interface AssociatePhoneNumberContactFlowRequest {
  PhoneNumberId: string;
  InstanceId: string;
  ContactFlowId: string;
}
export interface AssociateQueueQuickConnectsRequest {
  InstanceId: string;
  QueueId: string;
  QuickConnectIds: Array<string>;
}
export interface AssociateRoutingProfileQueuesRequest {
  InstanceId: string;
  RoutingProfileId: string;
  QueueConfigs: Array<RoutingProfileQueueConfig>;
}
export interface AssociateSecurityKeyRequest {
  InstanceId: string;
  Key: string;
  ClientToken?: string;
}
export interface AssociateSecurityKeyResponse {
  AssociationId?: string;
}
export interface AssociateTrafficDistributionGroupUserRequest {
  TrafficDistributionGroupId: string;
  UserId: string;
  InstanceId: string;
}
export interface AssociateTrafficDistributionGroupUserResponse {}
export interface AssociateUserProficienciesRequest {
  InstanceId: string;
  UserId: string;
  UserProficiencies: Array<UserProficiency>;
}
export type AssociationId = string;

export interface AttachedFile {
  CreationTime: string;
  FileArn: string;
  FileId: string;
  FileName: string;
  FileSizeInBytes: number;
  FileStatus: FileStatusType;
  CreatedBy?: CreatedByInfo;
  FileUseCaseType?: FileUseCaseType;
  AssociatedResourceArn?: string;
  Tags?: Record<string, string>;
}
export interface AttachedFileError {
  ErrorCode?: string;
  ErrorMessage?: string;
  FileId?: string;
}
export type AttachedFileErrorsList = Array<AttachedFileError>;
export type AttachedFileInvalidRequestExceptionReason =
  | "INVALID_FILE_SIZE"
  | "INVALID_FILE_TYPE"
  | "INVALID_FILE_NAME";
export type AttachedFileServiceQuotaExceededExceptionReason =
  | "TOTAL_FILE_SIZE_EXCEEDED"
  | "TOTAL_FILE_COUNT_EXCEEDED";
export type AttachedFilesList = Array<AttachedFile>;
export type AttachmentName = string;

export interface AttachmentReference {
  Name?: string;
  Value?: string;
  Status?: ReferenceStatus;
  Arn?: string;
}
export interface Attendee {
  AttendeeId?: string;
  JoinToken?: string;
}
export type AttendeeId = string;

export interface Attribute {
  AttributeType?: InstanceAttributeType;
  Value?: string;
}
export interface AttributeAndCondition {
  TagConditions?: Array<TagCondition>;
  HierarchyGroupCondition?: HierarchyGroupCondition;
}
export interface AttributeCondition {
  Name?: string;
  Value?: string;
  ProficiencyLevel?: number;
  Range?: Range;
  MatchCriteria?: MatchCriteria;
  ComparisonOperator?: string;
}
export type AttributeName = string;

export type AttributeOrConditionList = Array<AttributeAndCondition>;
export type Attributes = Record<string, string>;
export type AttributesList = Array<Attribute>;
export type AttributeValue = string;

export interface AudioFeatures {
  EchoReduction?: MeetingFeatureStatus;
}
export interface AudioQualityMetricsInfo {
  QualityScore?: number;
  PotentialQualityIssues?: Array<string>;
}
export type AudioQualityScore = number;

export type AuthenticationError = string;

export type AuthenticationErrorDescription = string;

export interface AuthenticationProfile {
  Id?: string;
  Arn?: string;
  Name?: string;
  Description?: string;
  AllowedIps?: Array<string>;
  BlockedIps?: Array<string>;
  IsDefault?: boolean;
  CreatedTime?: Date | string;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
  PeriodicSessionDuration?: number;
  MaxSessionDuration?: number;
}
export type AuthenticationProfileDescription = string;

export type AuthenticationProfileId = string;

export type AuthenticationProfileName = string;

export interface AuthenticationProfileSummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  IsDefault?: boolean;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export type AuthenticationProfileSummaryList =
  Array<AuthenticationProfileSummary>;
export type AuthorizationCode = string;

export type AutoAccept = boolean;

export type AvailableNumbersList = Array<AvailableNumberSummary>;
export interface AvailableNumberSummary {
  PhoneNumber?: string;
  PhoneNumberCountryCode?: PhoneNumberCountryCode;
  PhoneNumberType?: PhoneNumberType;
}
export type AWSAccountId = string;

export type AwsRegion = string;

export interface BatchAssociateAnalyticsDataSetRequest {
  InstanceId: string;
  DataSetIds: Array<string>;
  TargetAccountId?: string;
}
export interface BatchAssociateAnalyticsDataSetResponse {
  Created?: Array<AnalyticsDataAssociationResult>;
  Errors?: Array<ErrorResult>;
}
export interface BatchDisassociateAnalyticsDataSetRequest {
  InstanceId: string;
  DataSetIds: Array<string>;
  TargetAccountId?: string;
}
export interface BatchDisassociateAnalyticsDataSetResponse {
  Deleted?: Array<string>;
  Errors?: Array<ErrorResult>;
}
export interface BatchGetAttachedFileMetadataRequest {
  FileIds: Array<string>;
  InstanceId: string;
  AssociatedResourceArn: string;
}
export interface BatchGetAttachedFileMetadataResponse {
  Files?: Array<AttachedFile>;
  Errors?: Array<AttachedFileError>;
}
export interface BatchGetFlowAssociationRequest {
  InstanceId: string;
  ResourceIds: Array<string>;
  ResourceType?: ListFlowAssociationResourceType;
}
export interface BatchGetFlowAssociationResponse {
  FlowAssociationSummaryList?: Array<FlowAssociationSummary>;
}
export interface BatchPutContactRequest {
  ClientToken?: string;
  InstanceId: string;
  ContactDataRequestList: Array<ContactDataRequest>;
}
export interface BatchPutContactResponse {
  SuccessfulRequestList?: Array<SuccessfulRequest>;
  FailedRequestList?: Array<FailedRequest>;
}
export type BehaviorType = "ROUTE_CURRENT_CHANNEL_ONLY" | "ROUTE_ANY_CHANNEL";
export type Body = string;

export type BotName = string;

export type BoxedBoolean = boolean;

export type BucketName = string;

export interface Campaign {
  CampaignId?: string;
}
export type CampaignId = string;

export interface CaseSlaConfiguration {
  Name: string;
  Type: SlaType;
  FieldId?: string;
  TargetFieldValues?: Array<FieldValueUnion>;
  TargetSlaMinutes: number;
}
export type Channel = "VOICE" | "CHAT" | "TASK" | "EMAIL";
export type ChannelList = Array<Channel>;
export type Channels = Array<Channel>;
export type ChannelToCountMap = Record<Channel, number>;
export interface ChatContactMetrics {
  MultiParty?: boolean;
  TotalMessages?: number;
  TotalBotMessages?: number;
  TotalBotMessageLengthInChars?: number;
  ConversationCloseTimeInMillis?: number;
  ConversationTurnCount?: number;
  AgentFirstResponseTimestamp?: Date | string;
  AgentFirstResponseTimeInMillis?: number;
}
export type ChatContent = string;

export type ChatContentType = string;

export type ChatDurationInMinutes = number;

export interface ChatEvent {
  Type: ChatEventType;
  ContentType?: string;
  Content?: string;
}
export type ChatEventType = "DISCONNECT" | "MESSAGE" | "EVENT";
export interface ChatMessage {
  ContentType: string;
  Content: string;
}
export interface ChatMetrics {
  ChatContactMetrics?: ChatContactMetrics;
  AgentMetrics?: ParticipantMetrics;
  CustomerMetrics?: ParticipantMetrics;
}
export interface ChatParticipantRoleConfig {
  ParticipantTimerConfigList: Array<ParticipantTimerConfiguration>;
}
export interface ChatStreamingConfiguration {
  StreamingEndpointArn: string;
}
export type ChatStreamingEndpointARN = string;

export interface ClaimedPhoneNumberSummary {
  PhoneNumberId?: string;
  PhoneNumberArn?: string;
  PhoneNumber?: string;
  PhoneNumberCountryCode?: PhoneNumberCountryCode;
  PhoneNumberType?: PhoneNumberType;
  PhoneNumberDescription?: string;
  TargetArn?: string;
  InstanceId?: string;
  Tags?: Record<string, string>;
  PhoneNumberStatus?: PhoneNumberStatus;
  SourcePhoneNumberArn?: string;
}
export interface ClaimPhoneNumberRequest {
  TargetArn?: string;
  InstanceId?: string;
  PhoneNumber: string;
  PhoneNumberDescription?: string;
  Tags?: Record<string, string>;
  ClientToken?: string;
}
export interface ClaimPhoneNumberResponse {
  PhoneNumberId?: string;
  PhoneNumberArn?: string;
}
export type ClientToken = string;

export interface CommonAttributeAndCondition {
  TagConditions?: Array<TagCondition>;
}
export type CommonAttributeOrConditionList = Array<CommonAttributeAndCondition>;
export type CommonHumanReadableDescription = string;

export type CommonHumanReadableName = string;

export type CommonNameLength127 = string;

export type Comparison = "LT";
export type ComparisonOperator = string;

export interface CompleteAttachedFileUploadRequest {
  InstanceId: string;
  FileId: string;
  AssociatedResourceArn: string;
}
export interface CompleteAttachedFileUploadResponse {}
export type Concurrency = number;

export interface Condition {
  StringCondition?: StringCondition;
  NumberCondition?: NumberCondition;
}
export declare class ConditionalOperationFailedException extends EffectData.TaggedError(
  "ConditionalOperationFailedException",
)<{
  readonly Message?: string;
}> {}
export type Conditions = Array<Condition>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface ConnectionData {
  Attendee?: Attendee;
  Meeting?: Meeting;
}
export interface Contact {
  Arn?: string;
  Id?: string;
  InitialContactId?: string;
  PreviousContactId?: string;
  ContactAssociationId?: string;
  InitiationMethod?: ContactInitiationMethod;
  Name?: string;
  Description?: string;
  Channel?: Channel;
  QueueInfo?: QueueInfo;
  AgentInfo?: AgentInfo;
  InitiationTimestamp?: Date | string;
  DisconnectTimestamp?: Date | string;
  LastUpdateTimestamp?: Date | string;
  LastPausedTimestamp?: Date | string;
  LastResumedTimestamp?: Date | string;
  TotalPauseCount?: number;
  TotalPauseDurationInSeconds?: number;
  ScheduledTimestamp?: Date | string;
  RelatedContactId?: string;
  WisdomInfo?: WisdomInfo;
  CustomerId?: string;
  CustomerEndpoint?: EndpointInfo;
  SystemEndpoint?: EndpointInfo;
  QueueTimeAdjustmentSeconds?: number;
  QueuePriority?: number;
  Tags?: Record<string, string>;
  ConnectedToSystemTimestamp?: Date | string;
  RoutingCriteria?: RoutingCriteria;
  Customer?: Customer;
  Campaign?: Campaign;
  AnsweringMachineDetectionStatus?: AnsweringMachineDetectionStatus;
  CustomerVoiceActivity?: CustomerVoiceActivity;
  QualityMetrics?: QualityMetrics;
  ChatMetrics?: ChatMetrics;
  DisconnectDetails?: DisconnectDetails;
  AdditionalEmailRecipients?: AdditionalEmailRecipients;
  SegmentAttributes?: Record<string, SegmentAttributeValue>;
  Recordings?: Array<RecordingInfo>;
  DisconnectReason?: string;
  ContactEvaluations?: Record<string, ContactEvaluation>;
  ContactDetails?: ContactDetails;
  Attributes?: Record<string, string>;
}
export interface ContactAnalysis {
  Transcript?: Transcript;
}
export interface ContactConfiguration {
  ContactId: string;
  ParticipantRole?: ParticipantRole;
  IncludeRawMessage?: boolean;
}
export interface ContactDataRequest {
  SystemEndpoint?: Endpoint;
  CustomerEndpoint?: Endpoint;
  RequestIdentifier?: string;
  QueueId?: string;
  Attributes?: Record<string, string>;
  Campaign?: Campaign;
}
export type ContactDataRequestList = Array<ContactDataRequest>;
export type ContactDetailDescription = string;

export type ContactDetailName = string;

export interface ContactDetails {
  Name?: string;
  Description?: string;
}
export interface ContactEvaluation {
  FormId?: string;
  EvaluationArn?: string;
  Status?: Status;
  StartTimestamp?: Date | string;
  EndTimestamp?: Date | string;
  DeleteTimestamp?: Date | string;
  ExportLocation?: string;
}
export type ContactEvaluations = Record<string, ContactEvaluation>;
export interface ContactFilter {
  ContactStates?: Array<ContactState>;
}
export interface ContactFlow {
  Arn?: string;
  Id?: string;
  Name?: string;
  Type?: ContactFlowType;
  State?: ContactFlowState;
  Status?: ContactFlowStatus;
  Description?: string;
  Content?: string;
  Tags?: Record<string, string>;
  FlowContentSha256?: string;
  Version?: number;
  VersionDescription?: string;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export type ContactFlowContent = string;

export type ContactFlowDescription = string;

export type ContactFlowId = string;

export interface ContactFlowModule {
  Arn?: string;
  Id?: string;
  Name?: string;
  Content?: string;
  Description?: string;
  State?: ContactFlowModuleState;
  Status?: ContactFlowModuleStatus;
  Tags?: Record<string, string>;
}
export type ContactFlowModuleContent = string;

export type ContactFlowModuleDescription = string;

export type ContactFlowModuleId = string;

export type ContactFlowModuleName = string;

export type ContactFlowModuleSearchConditionList =
  Array<ContactFlowModuleSearchCriteria>;
export interface ContactFlowModuleSearchCriteria {
  OrConditions?: Array<ContactFlowModuleSearchCriteria>;
  AndConditions?: Array<ContactFlowModuleSearchCriteria>;
  StringCondition?: StringCondition;
  StateCondition?: ContactFlowModuleState;
  StatusCondition?: ContactFlowModuleStatus;
}
export interface ContactFlowModuleSearchFilter {
  TagFilter?: ControlPlaneTagFilter;
}
export type ContactFlowModuleSearchSummaryList = Array<ContactFlowModule>;
export type ContactFlowModulesSummaryList = Array<ContactFlowModuleSummary>;
export type ContactFlowModuleState = "ACTIVE" | "ARCHIVED";
export type ContactFlowModuleStatus = "PUBLISHED" | "SAVED";
export interface ContactFlowModuleSummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  State?: ContactFlowModuleState;
}
export type ContactFlowName = string;

export declare class ContactFlowNotPublishedException extends EffectData.TaggedError(
  "ContactFlowNotPublishedException",
)<{
  readonly Message?: string;
}> {}
export type ContactFlowSearchConditionList = Array<ContactFlowSearchCriteria>;
export interface ContactFlowSearchCriteria {
  OrConditions?: Array<ContactFlowSearchCriteria>;
  AndConditions?: Array<ContactFlowSearchCriteria>;
  StringCondition?: StringCondition;
  TypeCondition?: ContactFlowType;
  StateCondition?: ContactFlowState;
  StatusCondition?: ContactFlowStatus;
}
export interface ContactFlowSearchFilter {
  TagFilter?: ControlPlaneTagFilter;
}
export type ContactFlowSearchSummaryList = Array<ContactFlow>;
export type ContactFlowState = "ACTIVE" | "ARCHIVED";
export type ContactFlowStatus = "PUBLISHED" | "SAVED";
export interface ContactFlowSummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  ContactFlowType?: ContactFlowType;
  ContactFlowState?: ContactFlowState;
  ContactFlowStatus?: ContactFlowStatus;
}
export type ContactFlowSummaryList = Array<ContactFlowSummary>;
export type ContactFlowType =
  | "CONTACT_FLOW"
  | "CUSTOMER_QUEUE"
  | "CUSTOMER_HOLD"
  | "CUSTOMER_WHISPER"
  | "AGENT_HOLD"
  | "AGENT_WHISPER"
  | "OUTBOUND_WHISPER"
  | "AGENT_TRANSFER"
  | "QUEUE_TRANSFER"
  | "CAMPAIGN";
export type ContactFlowTypes = Array<ContactFlowType>;
export interface ContactFlowVersionSummary {
  Arn?: string;
  VersionDescription?: string;
  Version?: number;
}
export type ContactFlowVersionSummaryList = Array<ContactFlowVersionSummary>;
export type ContactId = string;

export type ContactInitiationMethod =
  | "INBOUND"
  | "OUTBOUND"
  | "TRANSFER"
  | "QUEUE_TRANSFER"
  | "CALLBACK"
  | "API"
  | "DISCONNECT"
  | "MONITOR"
  | "EXTERNAL_OUTBOUND"
  | "WEBRTC_API"
  | "AGENT_REPLY"
  | "FLOW";
export declare class ContactNotFoundException extends EffectData.TaggedError(
  "ContactNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ContactRecordingType = "AGENT" | "IVR" | "SCREEN";
export type ContactReferences = Record<string, Reference>;
export type Contacts = Array<ContactSearchSummary>;
export interface ContactSearchSummary {
  Arn?: string;
  Id?: string;
  InitialContactId?: string;
  PreviousContactId?: string;
  InitiationMethod?: ContactInitiationMethod;
  Channel?: Channel;
  QueueInfo?: ContactSearchSummaryQueueInfo;
  AgentInfo?: ContactSearchSummaryAgentInfo;
  InitiationTimestamp?: Date | string;
  DisconnectTimestamp?: Date | string;
  ScheduledTimestamp?: Date | string;
  SegmentAttributes?: Record<string, ContactSearchSummarySegmentAttributeValue>;
}
export interface ContactSearchSummaryAgentInfo {
  Id?: string;
  ConnectedToAgentTimestamp?: Date | string;
}
export interface ContactSearchSummaryQueueInfo {
  Id?: string;
  EnqueueTimestamp?: Date | string;
}
export type ContactSearchSummarySegmentAttributes = Record<
  string,
  ContactSearchSummarySegmentAttributeValue
>;
export interface ContactSearchSummarySegmentAttributeValue {
  ValueString?: string;
}
export type ContactState =
  | "INCOMING"
  | "PENDING"
  | "CONNECTING"
  | "CONNECTED"
  | "CONNECTED_ONHOLD"
  | "MISSED"
  | "ERROR"
  | "ENDED"
  | "REJECTED";
export type ContactStates = Array<ContactState>;
export type ContactTagKey = string;

export type ContactTagKeys = Array<string>;
export type ContactTagMap = Record<string, string>;
export type ContactTagValue = string;

export type Content = string;

export type ContentType = string;

export interface ControlPlaneAttributeFilter {
  OrConditions?: Array<CommonAttributeAndCondition>;
  AndCondition?: CommonAttributeAndCondition;
  TagCondition?: TagCondition;
}
export interface ControlPlaneTagFilter {
  OrConditions?: Array<Array<TagCondition>>;
  AndConditions?: Array<TagCondition>;
  TagCondition?: TagCondition;
}
export interface ControlPlaneUserAttributeFilter {
  OrConditions?: Array<AttributeAndCondition>;
  AndCondition?: AttributeAndCondition;
  TagCondition?: TagCondition;
  HierarchyGroupCondition?: HierarchyGroupCondition;
}
export type Count = number;

export interface CreateAgentStatusRequest {
  InstanceId: string;
  Name: string;
  Description?: string;
  State: AgentStatusState;
  DisplayOrder?: number;
  Tags?: Record<string, string>;
}
export interface CreateAgentStatusResponse {
  AgentStatusARN?: string;
  AgentStatusId?: string;
}
export interface CreateCaseActionDefinition {
  Fields: Array<FieldValue>;
  TemplateId: string;
}
export interface CreateContactFlowModuleRequest {
  InstanceId: string;
  Name: string;
  Description?: string;
  Content: string;
  Tags?: Record<string, string>;
  ClientToken?: string;
}
export interface CreateContactFlowModuleResponse {
  Id?: string;
  Arn?: string;
}
export interface CreateContactFlowRequest {
  InstanceId: string;
  Name: string;
  Type: ContactFlowType;
  Description?: string;
  Content: string;
  Status?: ContactFlowStatus;
  Tags?: Record<string, string>;
}
export interface CreateContactFlowResponse {
  ContactFlowId?: string;
  ContactFlowArn?: string;
  FlowContentSha256?: string;
}
export interface CreateContactFlowVersionRequest {
  InstanceId: string;
  Description?: string;
  ContactFlowId: string;
  FlowContentSha256?: string;
  ContactFlowVersion?: number;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export interface CreateContactFlowVersionResponse {
  ContactFlowArn?: string;
  Version?: number;
}
export interface CreateContactRequest {
  InstanceId: string;
  ClientToken?: string;
  RelatedContactId?: string;
  Attributes?: Record<string, string>;
  References?: Record<string, Reference>;
  Channel: Channel;
  InitiationMethod: ContactInitiationMethod;
  ExpiryDurationInMinutes?: number;
  UserInfo?: UserInfo;
  InitiateAs?: InitiateAs;
  Name?: string;
  Description?: string;
  SegmentAttributes?: Record<string, SegmentAttributeValue>;
  PreviousContactId?: string;
}
export interface CreateContactResponse {
  ContactId?: string;
  ContactArn?: string;
}
export type CreatedByInfo =
  | { ConnectUserArn: string }
  | { AWSIdentityArn: string };
export interface CreateEmailAddressRequest {
  Description?: string;
  InstanceId: string;
  EmailAddress: string;
  DisplayName?: string;
  Tags?: Record<string, string>;
  ClientToken?: string;
}
export interface CreateEmailAddressResponse {
  EmailAddressId?: string;
  EmailAddressArn?: string;
}
export interface CreateEvaluationFormRequest {
  InstanceId: string;
  Title: string;
  Description?: string;
  Items: Array<EvaluationFormItem>;
  ScoringStrategy?: EvaluationFormScoringStrategy;
  ClientToken?: string;
}
export interface CreateEvaluationFormResponse {
  EvaluationFormId: string;
  EvaluationFormArn: string;
}
export interface CreateHoursOfOperationOverrideRequest {
  InstanceId: string;
  HoursOfOperationId: string;
  Name: string;
  Description?: string;
  Config: Array<HoursOfOperationOverrideConfig>;
  EffectiveFrom: string;
  EffectiveTill: string;
}
export interface CreateHoursOfOperationOverrideResponse {
  HoursOfOperationOverrideId?: string;
}
export interface CreateHoursOfOperationRequest {
  InstanceId: string;
  Name: string;
  Description?: string;
  TimeZone: string;
  Config: Array<HoursOfOperationConfig>;
  Tags?: Record<string, string>;
}
export interface CreateHoursOfOperationResponse {
  HoursOfOperationId?: string;
  HoursOfOperationArn?: string;
}
export interface CreateInstanceRequest {
  ClientToken?: string;
  IdentityManagementType: DirectoryType;
  InstanceAlias?: string;
  DirectoryId?: string;
  InboundCallsEnabled: boolean;
  OutboundCallsEnabled: boolean;
  Tags?: Record<string, string>;
}
export interface CreateInstanceResponse {
  Id?: string;
  Arn?: string;
}
export interface CreateIntegrationAssociationRequest {
  InstanceId: string;
  IntegrationType: IntegrationType;
  IntegrationArn: string;
  SourceApplicationUrl?: string;
  SourceApplicationName?: string;
  SourceType?: SourceType;
  Tags?: Record<string, string>;
}
export interface CreateIntegrationAssociationResponse {
  IntegrationAssociationId?: string;
  IntegrationAssociationArn?: string;
}
export interface CreateParticipantRequest {
  InstanceId: string;
  ContactId: string;
  ClientToken?: string;
  ParticipantDetails: ParticipantDetailsToAdd;
}
export interface CreateParticipantResponse {
  ParticipantCredentials?: ParticipantTokenCredentials;
  ParticipantId?: string;
}
export interface CreatePersistentContactAssociationRequest {
  InstanceId: string;
  InitialContactId: string;
  RehydrationType: RehydrationType;
  SourceContactId: string;
  ClientToken?: string;
}
export interface CreatePersistentContactAssociationResponse {
  ContinuedFromContactId?: string;
}
export interface CreatePredefinedAttributeRequest {
  InstanceId: string;
  Name: string;
  Values: PredefinedAttributeValues;
}
export interface CreatePromptRequest {
  InstanceId: string;
  Name: string;
  Description?: string;
  S3Uri: string;
  Tags?: Record<string, string>;
}
export interface CreatePromptResponse {
  PromptARN?: string;
  PromptId?: string;
}
export interface CreatePushNotificationRegistrationRequest {
  InstanceId: string;
  ClientToken?: string;
  PinpointAppArn: string;
  DeviceToken: string;
  DeviceType: DeviceType;
  ContactConfiguration: ContactConfiguration;
}
export interface CreatePushNotificationRegistrationResponse {
  RegistrationId: string;
}
export interface CreateQueueRequest {
  InstanceId: string;
  Name: string;
  Description?: string;
  OutboundCallerConfig?: OutboundCallerConfig;
  OutboundEmailConfig?: OutboundEmailConfig;
  HoursOfOperationId: string;
  MaxContacts?: number;
  QuickConnectIds?: Array<string>;
  Tags?: Record<string, string>;
}
export interface CreateQueueResponse {
  QueueArn?: string;
  QueueId?: string;
}
export interface CreateQuickConnectRequest {
  InstanceId: string;
  Name: string;
  Description?: string;
  QuickConnectConfig: QuickConnectConfig;
  Tags?: Record<string, string>;
}
export interface CreateQuickConnectResponse {
  QuickConnectARN?: string;
  QuickConnectId?: string;
}
export interface CreateRoutingProfileRequest {
  InstanceId: string;
  Name: string;
  Description: string;
  DefaultOutboundQueueId: string;
  QueueConfigs?: Array<RoutingProfileQueueConfig>;
  MediaConcurrencies: Array<MediaConcurrency>;
  Tags?: Record<string, string>;
  AgentAvailabilityTimer?: AgentAvailabilityTimer;
}
export interface CreateRoutingProfileResponse {
  RoutingProfileArn?: string;
  RoutingProfileId?: string;
}
export interface CreateRuleRequest {
  InstanceId: string;
  Name: string;
  TriggerEventSource: RuleTriggerEventSource;
  Function: string;
  Actions: Array<RuleAction>;
  PublishStatus: RulePublishStatus;
  ClientToken?: string;
}
export interface CreateRuleResponse {
  RuleArn: string;
  RuleId: string;
}
export type CreateSecurityProfileName = string;

export interface CreateSecurityProfileRequest {
  SecurityProfileName: string;
  Description?: string;
  Permissions?: Array<string>;
  InstanceId: string;
  Tags?: Record<string, string>;
  AllowedAccessControlTags?: Record<string, string>;
  TagRestrictedResources?: Array<string>;
  Applications?: Array<Application>;
  HierarchyRestrictedResources?: Array<string>;
  AllowedAccessControlHierarchyGroupId?: string;
}
export interface CreateSecurityProfileResponse {
  SecurityProfileId?: string;
  SecurityProfileArn?: string;
}
export interface CreateTaskTemplateRequest {
  InstanceId: string;
  Name: string;
  Description?: string;
  ContactFlowId?: string;
  SelfAssignFlowId?: string;
  Constraints?: TaskTemplateConstraints;
  Defaults?: TaskTemplateDefaults;
  Status?: TaskTemplateStatus;
  Fields: Array<TaskTemplateField>;
  ClientToken?: string;
}
export interface CreateTaskTemplateResponse {
  Id: string;
  Arn: string;
}
export interface CreateTrafficDistributionGroupRequest {
  Name: string;
  Description?: string;
  InstanceId: string;
  ClientToken?: string;
  Tags?: Record<string, string>;
}
export interface CreateTrafficDistributionGroupResponse {
  Id?: string;
  Arn?: string;
}
export interface CreateUseCaseRequest {
  InstanceId: string;
  IntegrationAssociationId: string;
  UseCaseType: UseCaseType;
  Tags?: Record<string, string>;
}
export interface CreateUseCaseResponse {
  UseCaseId?: string;
  UseCaseArn?: string;
}
export interface CreateUserHierarchyGroupRequest {
  Name: string;
  ParentGroupId?: string;
  InstanceId: string;
  Tags?: Record<string, string>;
}
export interface CreateUserHierarchyGroupResponse {
  HierarchyGroupId?: string;
  HierarchyGroupArn?: string;
}
export interface CreateUserRequest {
  Username: string;
  Password?: string;
  IdentityInfo?: UserIdentityInfo;
  PhoneConfig: UserPhoneConfig;
  DirectoryUserId?: string;
  SecurityProfileIds: Array<string>;
  RoutingProfileId: string;
  HierarchyGroupId?: string;
  InstanceId: string;
  Tags?: Record<string, string>;
}
export interface CreateUserResponse {
  UserId?: string;
  UserArn?: string;
}
export interface CreateViewRequest {
  InstanceId: string;
  ClientToken?: string;
  Status: ViewStatus;
  Content: ViewInputContent;
  Description?: string;
  Name: string;
  Tags?: Record<string, string>;
}
export interface CreateViewResponse {
  View?: View;
}
export interface CreateViewVersionRequest {
  InstanceId: string;
  ViewId: string;
  VersionDescription?: string;
  ViewContentSha256?: string;
}
export interface CreateViewVersionResponse {
  View?: View;
}
export interface CreateVocabularyRequest {
  ClientToken?: string;
  InstanceId: string;
  VocabularyName: string;
  LanguageCode: VocabularyLanguageCode;
  Content: string;
  Tags?: Record<string, string>;
}
export interface CreateVocabularyResponse {
  VocabularyArn: string;
  VocabularyId: string;
  State: VocabularyState;
}
export interface Credentials {
  AccessToken?: string;
  AccessTokenExpiration?: Date | string;
  RefreshToken?: string;
  RefreshTokenExpiration?: Date | string;
}
export interface CrossChannelBehavior {
  BehaviorType: BehaviorType;
}
export interface CurrentMetric {
  Name?: CurrentMetricName;
  Unit?: Unit;
}
export interface CurrentMetricData {
  Metric?: CurrentMetric;
  Value?: number;
}
export type CurrentMetricDataCollections = Array<CurrentMetricData>;
export type CurrentMetricName =
  | "AGENTS_ONLINE"
  | "AGENTS_AVAILABLE"
  | "AGENTS_ON_CALL"
  | "AGENTS_NON_PRODUCTIVE"
  | "AGENTS_AFTER_CONTACT_WORK"
  | "AGENTS_ERROR"
  | "AGENTS_STAFFED"
  | "CONTACTS_IN_QUEUE"
  | "OLDEST_CONTACT_AGE"
  | "CONTACTS_SCHEDULED"
  | "AGENTS_ON_CONTACT"
  | "SLOTS_ACTIVE"
  | "SLOTS_AVAILABLE";
export interface CurrentMetricResult {
  Dimensions?: Dimensions;
  Collections?: Array<CurrentMetricData>;
}
export type CurrentMetricResults = Array<CurrentMetricResult>;
export type CurrentMetrics = Array<CurrentMetric>;
export interface CurrentMetricSortCriteria {
  SortByMetric?: CurrentMetricName;
  SortOrder?: SortOrder;
}
export type CurrentMetricSortCriteriaMaxOne = Array<CurrentMetricSortCriteria>;
export interface Customer {
  DeviceInfo?: DeviceInfo;
  Capabilities?: ParticipantCapabilities;
}
export type CustomerId = string;

export type CustomerIdNonEmpty = string;

export type CustomerProfileAttributesSerialized = string;

export interface CustomerQualityMetrics {
  Audio?: AudioQualityMetricsInfo;
}
export interface CustomerVoiceActivity {
  GreetingStartTimestamp?: Date | string;
  GreetingEndTimestamp?: Date | string;
}
export type DataSetId = string;

export type DataSetIds = Array<string>;
export type DateComparisonType =
  | "GREATER_THAN"
  | "LESS_THAN"
  | "GREATER_THAN_OR_EQUAL_TO"
  | "LESS_THAN_OR_EQUAL_TO"
  | "EQUAL_TO";
export interface DateCondition {
  FieldName?: string;
  Value?: string;
  ComparisonType?: DateComparisonType;
}
export interface DateReference {
  Name?: string;
  Value?: string;
}
export type DateYearMonthDayFormat = string;

export interface DeactivateEvaluationFormRequest {
  InstanceId: string;
  EvaluationFormId: string;
  EvaluationFormVersion: number;
}
export interface DeactivateEvaluationFormResponse {
  EvaluationFormId: string;
  EvaluationFormArn: string;
  EvaluationFormVersion: number;
}
export interface DefaultVocabulary {
  InstanceId: string;
  LanguageCode: VocabularyLanguageCode;
  VocabularyId: string;
  VocabularyName: string;
}
export type DefaultVocabularyList = Array<DefaultVocabulary>;
export type Delay = number;

export interface DeleteAttachedFileRequest {
  InstanceId: string;
  FileId: string;
  AssociatedResourceArn: string;
}
export interface DeleteAttachedFileResponse {}
export interface DeleteContactEvaluationRequest {
  InstanceId: string;
  EvaluationId: string;
}
export interface DeleteContactFlowModuleRequest {
  InstanceId: string;
  ContactFlowModuleId: string;
}
export interface DeleteContactFlowModuleResponse {}
export interface DeleteContactFlowRequest {
  InstanceId: string;
  ContactFlowId: string;
}
export interface DeleteContactFlowResponse {}
export interface DeleteContactFlowVersionRequest {
  InstanceId: string;
  ContactFlowId: string;
  ContactFlowVersion: number;
}
export interface DeleteContactFlowVersionResponse {}
export interface DeleteEmailAddressRequest {
  InstanceId: string;
  EmailAddressId: string;
}
export interface DeleteEmailAddressResponse {}
export interface DeleteEvaluationFormRequest {
  InstanceId: string;
  EvaluationFormId: string;
  EvaluationFormVersion?: number;
}
export interface DeleteHoursOfOperationOverrideRequest {
  InstanceId: string;
  HoursOfOperationId: string;
  HoursOfOperationOverrideId: string;
}
export interface DeleteHoursOfOperationRequest {
  InstanceId: string;
  HoursOfOperationId: string;
}
export interface DeleteInstanceRequest {
  InstanceId: string;
  ClientToken?: string;
}
export interface DeleteIntegrationAssociationRequest {
  InstanceId: string;
  IntegrationAssociationId: string;
}
export interface DeletePredefinedAttributeRequest {
  InstanceId: string;
  Name: string;
}
export interface DeletePromptRequest {
  InstanceId: string;
  PromptId: string;
}
export interface DeletePushNotificationRegistrationRequest {
  InstanceId: string;
  RegistrationId: string;
  ContactId: string;
}
export interface DeletePushNotificationRegistrationResponse {}
export interface DeleteQueueRequest {
  InstanceId: string;
  QueueId: string;
}
export interface DeleteQuickConnectRequest {
  InstanceId: string;
  QuickConnectId: string;
}
export interface DeleteRoutingProfileRequest {
  InstanceId: string;
  RoutingProfileId: string;
}
export interface DeleteRuleRequest {
  InstanceId: string;
  RuleId: string;
}
export interface DeleteSecurityProfileRequest {
  InstanceId: string;
  SecurityProfileId: string;
}
export interface DeleteTaskTemplateRequest {
  InstanceId: string;
  TaskTemplateId: string;
}
export interface DeleteTaskTemplateResponse {}
export interface DeleteTrafficDistributionGroupRequest {
  TrafficDistributionGroupId: string;
}
export interface DeleteTrafficDistributionGroupResponse {}
export interface DeleteUseCaseRequest {
  InstanceId: string;
  IntegrationAssociationId: string;
  UseCaseId: string;
}
export interface DeleteUserHierarchyGroupRequest {
  HierarchyGroupId: string;
  InstanceId: string;
}
export interface DeleteUserRequest {
  InstanceId: string;
  UserId: string;
}
export interface DeleteViewRequest {
  InstanceId: string;
  ViewId: string;
}
export interface DeleteViewResponse {}
export interface DeleteViewVersionRequest {
  InstanceId: string;
  ViewId: string;
  ViewVersion: number;
}
export interface DeleteViewVersionResponse {}
export interface DeleteVocabularyRequest {
  InstanceId: string;
  VocabularyId: string;
}
export interface DeleteVocabularyResponse {
  VocabularyArn: string;
  VocabularyId: string;
  State: VocabularyState;
}
export interface DescribeAgentStatusRequest {
  InstanceId: string;
  AgentStatusId: string;
}
export interface DescribeAgentStatusResponse {
  AgentStatus?: AgentStatus;
}
export interface DescribeAuthenticationProfileRequest {
  AuthenticationProfileId: string;
  InstanceId: string;
}
export interface DescribeAuthenticationProfileResponse {
  AuthenticationProfile?: AuthenticationProfile;
}
export interface DescribeContactEvaluationRequest {
  InstanceId: string;
  EvaluationId: string;
}
export interface DescribeContactEvaluationResponse {
  Evaluation: Evaluation;
  EvaluationForm: EvaluationFormContent;
}
export interface DescribeContactFlowModuleRequest {
  InstanceId: string;
  ContactFlowModuleId: string;
}
export interface DescribeContactFlowModuleResponse {
  ContactFlowModule?: ContactFlowModule;
}
export interface DescribeContactFlowRequest {
  InstanceId: string;
  ContactFlowId: string;
}
export interface DescribeContactFlowResponse {
  ContactFlow?: ContactFlow;
}
export interface DescribeContactRequest {
  InstanceId: string;
  ContactId: string;
}
export interface DescribeContactResponse {
  Contact?: Contact;
}
export interface DescribeEmailAddressRequest {
  InstanceId: string;
  EmailAddressId: string;
}
export interface DescribeEmailAddressResponse {
  EmailAddressId?: string;
  EmailAddressArn?: string;
  EmailAddress?: string;
  DisplayName?: string;
  Description?: string;
  CreateTimestamp?: string;
  ModifiedTimestamp?: string;
  Tags?: Record<string, string>;
}
export interface DescribeEvaluationFormRequest {
  InstanceId: string;
  EvaluationFormId: string;
  EvaluationFormVersion?: number;
}
export interface DescribeEvaluationFormResponse {
  EvaluationForm: EvaluationForm;
}
export interface DescribeHoursOfOperationOverrideRequest {
  InstanceId: string;
  HoursOfOperationId: string;
  HoursOfOperationOverrideId: string;
}
export interface DescribeHoursOfOperationOverrideResponse {
  HoursOfOperationOverride?: HoursOfOperationOverride;
}
export interface DescribeHoursOfOperationRequest {
  InstanceId: string;
  HoursOfOperationId: string;
}
export interface DescribeHoursOfOperationResponse {
  HoursOfOperation?: HoursOfOperation;
}
export interface DescribeInstanceAttributeRequest {
  InstanceId: string;
  AttributeType: InstanceAttributeType;
}
export interface DescribeInstanceAttributeResponse {
  Attribute?: Attribute;
}
export interface DescribeInstanceRequest {
  InstanceId: string;
}
export interface DescribeInstanceResponse {
  Instance?: Instance;
  ReplicationConfiguration?: ReplicationConfiguration;
}
export interface DescribeInstanceStorageConfigRequest {
  InstanceId: string;
  AssociationId: string;
  ResourceType: InstanceStorageResourceType;
}
export interface DescribeInstanceStorageConfigResponse {
  StorageConfig?: InstanceStorageConfig;
}
export interface DescribePhoneNumberRequest {
  PhoneNumberId: string;
}
export interface DescribePhoneNumberResponse {
  ClaimedPhoneNumberSummary?: ClaimedPhoneNumberSummary;
}
export interface DescribePredefinedAttributeRequest {
  InstanceId: string;
  Name: string;
}
export interface DescribePredefinedAttributeResponse {
  PredefinedAttribute?: PredefinedAttribute;
}
export interface DescribePromptRequest {
  InstanceId: string;
  PromptId: string;
}
export interface DescribePromptResponse {
  Prompt?: Prompt;
}
export interface DescribeQueueRequest {
  InstanceId: string;
  QueueId: string;
}
export interface DescribeQueueResponse {
  Queue?: Queue;
}
export interface DescribeQuickConnectRequest {
  InstanceId: string;
  QuickConnectId: string;
}
export interface DescribeQuickConnectResponse {
  QuickConnect?: QuickConnect;
}
export interface DescribeRoutingProfileRequest {
  InstanceId: string;
  RoutingProfileId: string;
}
export interface DescribeRoutingProfileResponse {
  RoutingProfile?: RoutingProfile;
}
export interface DescribeRuleRequest {
  InstanceId: string;
  RuleId: string;
}
export interface DescribeRuleResponse {
  Rule: Rule;
}
export interface DescribeSecurityProfileRequest {
  SecurityProfileId: string;
  InstanceId: string;
}
export interface DescribeSecurityProfileResponse {
  SecurityProfile?: SecurityProfile;
}
export interface DescribeTrafficDistributionGroupRequest {
  TrafficDistributionGroupId: string;
}
export interface DescribeTrafficDistributionGroupResponse {
  TrafficDistributionGroup?: TrafficDistributionGroup;
}
export interface DescribeUserHierarchyGroupRequest {
  HierarchyGroupId: string;
  InstanceId: string;
}
export interface DescribeUserHierarchyGroupResponse {
  HierarchyGroup?: HierarchyGroup;
}
export interface DescribeUserHierarchyStructureRequest {
  InstanceId: string;
}
export interface DescribeUserHierarchyStructureResponse {
  HierarchyStructure?: HierarchyStructure;
}
export interface DescribeUserRequest {
  UserId: string;
  InstanceId: string;
}
export interface DescribeUserResponse {
  User?: User;
}
export interface DescribeViewRequest {
  InstanceId: string;
  ViewId: string;
}
export interface DescribeViewResponse {
  View?: View;
}
export interface DescribeVocabularyRequest {
  InstanceId: string;
  VocabularyId: string;
}
export interface DescribeVocabularyResponse {
  Vocabulary: Vocabulary;
}
export type Description = string;

export type Description250 = string;

export type DestinationId = string;

export declare class DestinationNotAllowedException extends EffectData.TaggedError(
  "DestinationNotAllowedException",
)<{
  readonly Message?: string;
}> {}
export interface DeviceInfo {
  PlatformName?: string;
  PlatformVersion?: string;
  OperatingSystem?: string;
}
export type DeviceToken = string;

export type DeviceType = "GCM" | "APNS" | "APNS_SANDBOX";
export interface Dimensions {
  Queue?: QueueReference;
  Channel?: Channel;
  RoutingProfile?: RoutingProfileReference;
  RoutingStepExpression?: string;
}
export type DimensionsV2Key = string;

export type DimensionsV2Map = Record<string, string>;
export type DimensionsV2Value = string;

export type DirectoryAlias = string;

export type DirectoryId = string;

export type DirectoryType = "SAML" | "CONNECT_MANAGED" | "EXISTING_DIRECTORY";
export type DirectoryUserId = string;

export interface DisassociateAnalyticsDataSetRequest {
  InstanceId: string;
  DataSetId: string;
  TargetAccountId?: string;
}
export interface DisassociateApprovedOriginRequest {
  InstanceId: string;
  Origin: string;
  ClientToken?: string;
}
export interface DisassociateBotRequest {
  InstanceId: string;
  LexBot?: LexBot;
  LexV2Bot?: LexV2Bot;
  ClientToken?: string;
}
export interface DisassociateFlowRequest {
  InstanceId: string;
  ResourceId: string;
  ResourceType: FlowAssociationResourceType;
}
export interface DisassociateFlowResponse {}
export interface DisassociateInstanceStorageConfigRequest {
  InstanceId: string;
  AssociationId: string;
  ResourceType: InstanceStorageResourceType;
  ClientToken?: string;
}
export interface DisassociateLambdaFunctionRequest {
  InstanceId: string;
  FunctionArn: string;
  ClientToken?: string;
}
export interface DisassociateLexBotRequest {
  InstanceId: string;
  BotName: string;
  LexRegion: string;
  ClientToken?: string;
}
export interface DisassociatePhoneNumberContactFlowRequest {
  PhoneNumberId: string;
  InstanceId: string;
}
export interface DisassociateQueueQuickConnectsRequest {
  InstanceId: string;
  QueueId: string;
  QuickConnectIds: Array<string>;
}
export interface DisassociateRoutingProfileQueuesRequest {
  InstanceId: string;
  RoutingProfileId: string;
  QueueReferences: Array<RoutingProfileQueueReference>;
}
export interface DisassociateSecurityKeyRequest {
  InstanceId: string;
  AssociationId: string;
  ClientToken?: string;
}
export interface DisassociateTrafficDistributionGroupUserRequest {
  TrafficDistributionGroupId: string;
  UserId: string;
  InstanceId: string;
}
export interface DisassociateTrafficDistributionGroupUserResponse {}
export interface DisassociateUserProficienciesRequest {
  InstanceId: string;
  UserId: string;
  UserProficiencies: Array<UserProficiencyDisassociate>;
}
export interface DisconnectDetails {
  PotentialDisconnectIssue?: string;
}
export interface DisconnectReason {
  Code?: string;
}
export type DisconnectReasonCode = string;

export interface DismissUserContactRequest {
  UserId: string;
  InstanceId: string;
  ContactId: string;
}
export interface DismissUserContactResponse {}
export type DisplayName = string;

export interface Distribution {
  Region: string;
  Percentage: number;
}
export type DistributionList = Array<Distribution>;
export type Double = number;

export interface DownloadUrlMetadata {
  Url?: string;
  UrlExpiry?: string;
}
export declare class DuplicateResourceException extends EffectData.TaggedError(
  "DuplicateResourceException",
)<{
  readonly Message?: string;
}> {}
export type Duration = number;

export type DurationInSeconds = number;

export type DurationMillis = number;

export type EffectiveHoursOfOperationList = Array<EffectiveHoursOfOperations>;
export interface EffectiveHoursOfOperations {
  Date?: string;
  OperationalHours?: Array<OperationalHour>;
}
export type Email = string;

export type EmailAddress = string;

export type EmailAddressArn = string;

export type EmailAddressDisplayName = string;

export type EmailAddressId = string;

export interface EmailAddressInfo {
  EmailAddress: string;
  DisplayName?: string;
}
export type EmailAddressList = Array<EmailAddressMetadata>;
export interface EmailAddressMetadata {
  EmailAddressId?: string;
  EmailAddressArn?: string;
  EmailAddress?: string;
  Description?: string;
  DisplayName?: string;
}
export type EmailAddressRecipientList = Array<EmailAddressInfo>;
export type EmailAddressSearchConditionList = Array<EmailAddressSearchCriteria>;
export interface EmailAddressSearchCriteria {
  OrConditions?: Array<EmailAddressSearchCriteria>;
  AndConditions?: Array<EmailAddressSearchCriteria>;
  StringCondition?: StringCondition;
}
export interface EmailAddressSearchFilter {
  TagFilter?: ControlPlaneTagFilter;
}
export interface EmailAttachment {
  FileName: string;
  S3Url: string;
}
export type EmailAttachments = Array<EmailAttachment>;
export type EmailHeaders = Record<EmailHeaderType, string>;
export type EmailHeaderType =
  | "REFERENCES"
  | "MESSAGE_ID"
  | "IN_REPLY_TO"
  | "X_SES_SPAM_VERDICT"
  | "X_SES_VIRUS_VERDICT";
export type EmailHeaderValue = string;

export type EmailMessageContentType = string;

export interface EmailMessageReference {
  Name?: string;
  Arn?: string;
}
export interface EmailRecipient {
  Address?: string;
  DisplayName?: string;
}
export type EmailRecipientsList = Array<EmailRecipient>;
export interface EmailReference {
  Name?: string;
  Value?: string;
}
export interface EmptyFieldValue {}
export interface EncryptionConfig {
  EncryptionType: EncryptionType;
  KeyId: string;
}
export type EncryptionType = "KMS";
export interface EndAssociatedTasksActionDefinition {}
export interface Endpoint {
  Type?: EndpointType;
  Address?: string;
}
export type EndpointAddress = string;

export type EndpointDisplayName = string;

export interface EndpointInfo {
  Type?: EndpointType;
  Address?: string;
  DisplayName?: string;
}
export type EndpointType =
  | "TELEPHONE_NUMBER"
  | "VOIP"
  | "CONTACT_FLOW"
  | "CONNECT_PHONENUMBER_ARN"
  | "EMAIL_ADDRESS";
export type ErrorCode = string;

export type ErrorMessage = string;

export interface ErrorResult {
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type ErrorResults = Array<ErrorResult>;
export interface Evaluation {
  EvaluationId: string;
  EvaluationArn: string;
  Metadata: EvaluationMetadata;
  Answers: Record<string, EvaluationAnswerOutput>;
  Notes: Record<string, EvaluationNote>;
  Status: EvaluationStatus;
  Scores?: Record<string, EvaluationScore>;
  CreatedTime: Date | string;
  LastModifiedTime: Date | string;
  Tags?: Record<string, string>;
}
export type EvaluationAnswerData =
  | { StringValue: string }
  | { NumericValue: number }
  | { NotApplicable: boolean };
export type EvaluationAnswerDataNumericValue = number;

export type EvaluationAnswerDataStringValue = string;

export interface EvaluationAnswerInput {
  Value?: EvaluationAnswerData;
}
export interface EvaluationAnswerOutput {
  Value?: EvaluationAnswerData;
  SystemSuggestedValue?: EvaluationAnswerData;
}
export type EvaluationAnswersInputMap = Record<string, EvaluationAnswerInput>;
export type EvaluationAnswersOutputMap = Record<string, EvaluationAnswerOutput>;
export type EvaluationArn = string;

export interface EvaluationForm {
  EvaluationFormId: string;
  EvaluationFormVersion: number;
  Locked: boolean;
  EvaluationFormArn: string;
  Title: string;
  Description?: string;
  Status: EvaluationFormVersionStatus;
  Items: Array<EvaluationFormItem>;
  ScoringStrategy?: EvaluationFormScoringStrategy;
  CreatedTime: Date | string;
  CreatedBy: string;
  LastModifiedTime: Date | string;
  LastModifiedBy: string;
  Tags?: Record<string, string>;
}
export interface EvaluationFormContent {
  EvaluationFormVersion: number;
  EvaluationFormId: string;
  EvaluationFormArn: string;
  Title: string;
  Description?: string;
  Items: Array<EvaluationFormItem>;
  ScoringStrategy?: EvaluationFormScoringStrategy;
}
export type EvaluationFormDescription = string;

export type EvaluationFormId = string;

export type EvaluationFormItem =
  | { Section: EvaluationFormSection }
  | { Question: EvaluationFormQuestion };
export type EvaluationFormItemsList = Array<EvaluationFormItem>;
export type EvaluationFormItemWeight = number;

export type EvaluationFormNumericQuestionAutomation = {
  PropertyValue: NumericQuestionPropertyValueAutomation;
};
export interface EvaluationFormNumericQuestionOption {
  MinValue: number;
  MaxValue: number;
  Score?: number;
  AutomaticFail?: boolean;
}
export type EvaluationFormNumericQuestionOptionList =
  Array<EvaluationFormNumericQuestionOption>;
export interface EvaluationFormNumericQuestionProperties {
  MinValue: number;
  MaxValue: number;
  Options?: Array<EvaluationFormNumericQuestionOption>;
  Automation?: EvaluationFormNumericQuestionAutomation;
}
export interface EvaluationFormQuestion {
  Title: string;
  Instructions?: string;
  RefId: string;
  NotApplicableEnabled?: boolean;
  QuestionType: EvaluationFormQuestionType;
  QuestionTypeProperties?: EvaluationFormQuestionTypeProperties;
  Weight?: number;
}
export type EvaluationFormQuestionAnswerScore = number;

export type EvaluationFormQuestionInstructions = string;

export type EvaluationFormQuestionTitle = string;

export type EvaluationFormQuestionType = "TEXT" | "SINGLESELECT" | "NUMERIC";
export type EvaluationFormQuestionTypeProperties =
  | { Numeric: EvaluationFormNumericQuestionProperties }
  | { SingleSelect: EvaluationFormSingleSelectQuestionProperties };
export type EvaluationFormScoringMode = "QUESTION_ONLY" | "SECTION_ONLY";
export type EvaluationFormScoringStatus = "ENABLED" | "DISABLED";
export interface EvaluationFormScoringStrategy {
  Mode: EvaluationFormScoringMode;
  Status: EvaluationFormScoringStatus;
}
export interface EvaluationFormSection {
  Title: string;
  RefId: string;
  Instructions?: string;
  Items: Array<EvaluationFormItem>;
  Weight?: number;
}
export type EvaluationFormSectionTitle = string;

export interface EvaluationFormSingleSelectQuestionAutomation {
  Options: Array<EvaluationFormSingleSelectQuestionAutomationOption>;
  DefaultOptionRefId?: string;
}
export type EvaluationFormSingleSelectQuestionAutomationOption = {
  RuleCategory: SingleSelectQuestionRuleCategoryAutomation;
};
export type EvaluationFormSingleSelectQuestionAutomationOptionList =
  Array<EvaluationFormSingleSelectQuestionAutomationOption>;
export type EvaluationFormSingleSelectQuestionDisplayMode =
  | "DROPDOWN"
  | "RADIO";
export interface EvaluationFormSingleSelectQuestionOption {
  RefId: string;
  Text: string;
  Score?: number;
  AutomaticFail?: boolean;
}
export type EvaluationFormSingleSelectQuestionOptionList =
  Array<EvaluationFormSingleSelectQuestionOption>;
export type EvaluationFormSingleSelectQuestionOptionText = string;

export interface EvaluationFormSingleSelectQuestionProperties {
  Options: Array<EvaluationFormSingleSelectQuestionOption>;
  DisplayAs?: EvaluationFormSingleSelectQuestionDisplayMode;
  Automation?: EvaluationFormSingleSelectQuestionAutomation;
}
export interface EvaluationFormSummary {
  EvaluationFormId: string;
  EvaluationFormArn: string;
  Title: string;
  CreatedTime: Date | string;
  CreatedBy: string;
  LastModifiedTime: Date | string;
  LastModifiedBy: string;
  LastActivatedTime?: Date | string;
  LastActivatedBy?: string;
  LatestVersion: number;
  ActiveVersion?: number;
}
export type EvaluationFormSummaryList = Array<EvaluationFormSummary>;
export type EvaluationFormTitle = string;

export type EvaluationFormVersionIsLocked = boolean;

export type EvaluationFormVersionStatus = "DRAFT" | "ACTIVE";
export interface EvaluationFormVersionSummary {
  EvaluationFormArn: string;
  EvaluationFormId: string;
  EvaluationFormVersion: number;
  Locked: boolean;
  Status: EvaluationFormVersionStatus;
  CreatedTime: Date | string;
  CreatedBy: string;
  LastModifiedTime: Date | string;
  LastModifiedBy: string;
}
export type EvaluationFormVersionSummaryList =
  Array<EvaluationFormVersionSummary>;
export type EvaluationId = string;

export interface EvaluationMetadata {
  ContactId: string;
  EvaluatorArn: string;
  ContactAgentId?: string;
  Score?: EvaluationScore;
}
export interface EvaluationNote {
  Value?: string;
}
export type EvaluationNotesMap = Record<string, EvaluationNote>;
export type EvaluationNoteString = string;

export interface EvaluationScore {
  Percentage?: number;
  NotApplicable?: boolean;
  AutomaticFail?: boolean;
}
export type EvaluationScorePercentage = number;

export type EvaluationScoresMap = Record<string, EvaluationScore>;
export type EvaluationStatus = "DRAFT" | "SUBMITTED";
export interface EvaluationSummary {
  EvaluationId: string;
  EvaluationArn: string;
  EvaluationFormTitle: string;
  EvaluationFormId: string;
  Status: EvaluationStatus;
  EvaluatorArn: string;
  Score?: EvaluationScore;
  CreatedTime: Date | string;
  LastModifiedTime: Date | string;
}
export type EvaluationSummaryList = Array<EvaluationSummary>;
export interface EventBridgeActionDefinition {
  Name: string;
}
export type EventBridgeActionName = string;

export type EventSourceName =
  | "OnPostCallAnalysisAvailable"
  | "OnRealTimeCallAnalysisAvailable"
  | "OnRealTimeChatAnalysisAvailable"
  | "OnPostChatAnalysisAvailable"
  | "OnZendeskTicketCreate"
  | "OnZendeskTicketStatusUpdate"
  | "OnSalesforceCaseCreate"
  | "OnContactEvaluationSubmit"
  | "OnMetricDataUpdate"
  | "OnCaseCreate"
  | "OnCaseUpdate"
  | "OnSlaBreach";
export interface Expiry {
  DurationInSeconds?: number;
  ExpiryTimestamp?: Date | string;
}
export type ExpiryDurationInMinutes = number;

export type ExportLocation = string;

export interface Expression {
  AttributeCondition?: AttributeCondition;
  AndExpression?: Array<Expression>;
  OrExpression?: Array<Expression>;
  NotAttributeCondition?: AttributeCondition;
}
export type Expressions = Array<Expression>;
export interface FailedRequest {
  RequestIdentifier?: string;
  FailureReasonCode?: FailureReasonCode;
  FailureReasonMessage?: string;
}
export type FailedRequestList = Array<FailedRequest>;
export type FailureReasonCode =
  | "INVALID_ATTRIBUTE_KEY"
  | "INVALID_CUSTOMER_ENDPOINT"
  | "INVALID_SYSTEM_ENDPOINT"
  | "INVALID_QUEUE"
  | "MISSING_CAMPAIGN"
  | "MISSING_CUSTOMER_ENDPOINT"
  | "MISSING_QUEUE_ID_AND_SYSTEM_ENDPOINT"
  | "REQUEST_THROTTLED"
  | "IDEMPOTENCY_EXCEPTION"
  | "INTERNAL_ERROR";
export type FieldStringValue = string;

export interface FieldValue {
  Id: string;
  Value: FieldValueUnion;
}
export type FieldValueId = string;

export type FieldValues = Array<FieldValue>;
export interface FieldValueUnion {
  BooleanValue?: boolean;
  DoubleValue?: number;
  EmptyValue?: EmptyFieldValue;
  StringValue?: string;
}
export type FileId = string;

export type FileIdList = Array<string>;
export type FileName = string;

export type FileSizeInBytes = number;

export type FileStatusType = "APPROVED" | "REJECTED" | "PROCESSING" | "FAILED";
export type FileUseCaseType = "EMAIL_MESSAGE" | "ATTACHMENT";
export interface Filters {
  Queues?: Array<string>;
  Channels?: Array<Channel>;
  RoutingProfiles?: Array<string>;
  RoutingStepExpressions?: Array<string>;
}
export type FiltersV2List = Array<FilterV2>;
export interface FilterV2 {
  FilterKey?: string;
  FilterValues?: Array<string>;
}
export type FilterValueList = Array<string>;
export type FlowAssociationResourceType =
  | "SMS_PHONE_NUMBER"
  | "INBOUND_EMAIL"
  | "OUTBOUND_EMAIL"
  | "ANALYTICS_CONNECTOR"
  | "WHATSAPP_MESSAGING_PHONE_NUMBER";
export interface FlowAssociationSummary {
  ResourceId?: string;
  FlowId?: string;
  ResourceType?: ListFlowAssociationResourceType;
}
export type FlowAssociationSummaryList = Array<FlowAssociationSummary>;
export type FlowContentSha256 = string;

export type FormId = string;

export type FragmentNumber = string;

export type FunctionArn = string;

export type FunctionArnsList = Array<string>;
export interface GetAttachedFileRequest {
  InstanceId: string;
  FileId: string;
  UrlExpiryInSeconds?: number;
  AssociatedResourceArn: string;
}
export interface GetAttachedFileResponse {
  FileArn?: string;
  FileId?: string;
  CreationTime?: string;
  FileStatus?: FileStatusType;
  FileName?: string;
  FileSizeInBytes: number;
  AssociatedResourceArn?: string;
  FileUseCaseType?: FileUseCaseType;
  CreatedBy?: CreatedByInfo;
  DownloadUrlMetadata?: DownloadUrlMetadata;
  Tags?: Record<string, string>;
}
export interface GetContactAttributesRequest {
  InstanceId: string;
  InitialContactId: string;
}
export interface GetContactAttributesResponse {
  Attributes?: Record<string, string>;
}
export interface GetCurrentMetricDataRequest {
  InstanceId: string;
  Filters: Filters;
  Groupings?: Array<Grouping>;
  CurrentMetrics: Array<CurrentMetric>;
  NextToken?: string;
  MaxResults?: number;
  SortCriteria?: Array<CurrentMetricSortCriteria>;
}
export interface GetCurrentMetricDataResponse {
  NextToken?: string;
  MetricResults?: Array<CurrentMetricResult>;
  DataSnapshotTime?: Date | string;
  ApproximateTotalCount?: number;
}
export interface GetCurrentUserDataRequest {
  InstanceId: string;
  Filters: UserDataFilters;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetCurrentUserDataResponse {
  NextToken?: string;
  UserDataList?: Array<UserData>;
  ApproximateTotalCount?: number;
}
export interface GetEffectiveHoursOfOperationsRequest {
  InstanceId: string;
  HoursOfOperationId: string;
  FromDate: string;
  ToDate: string;
}
export interface GetEffectiveHoursOfOperationsResponse {
  EffectiveHoursOfOperationList?: Array<EffectiveHoursOfOperations>;
  TimeZone?: string;
}
export interface GetFederationTokenRequest {
  InstanceId: string;
}
export interface GetFederationTokenResponse {
  Credentials?: Credentials;
  SignInUrl?: string;
  UserArn?: string;
  UserId?: string;
}
export interface GetFlowAssociationRequest {
  InstanceId: string;
  ResourceId: string;
  ResourceType: FlowAssociationResourceType;
}
export interface GetFlowAssociationResponse {
  ResourceId?: string;
  FlowId?: string;
  ResourceType?: FlowAssociationResourceType;
}
export interface GetMetricDataRequest {
  InstanceId: string;
  StartTime: Date | string;
  EndTime: Date | string;
  Filters: Filters;
  Groupings?: Array<Grouping>;
  HistoricalMetrics: Array<HistoricalMetric>;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetMetricDataResponse {
  NextToken?: string;
  MetricResults?: Array<HistoricalMetricResult>;
}
export interface GetMetricDataV2Request {
  ResourceArn: string;
  StartTime: Date | string;
  EndTime: Date | string;
  Interval?: IntervalDetails;
  Filters: Array<FilterV2>;
  Groupings?: Array<string>;
  Metrics: Array<MetricV2>;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetMetricDataV2Response {
  NextToken?: string;
  MetricResults?: Array<MetricResultV2>;
}
export interface GetPromptFileRequest {
  InstanceId: string;
  PromptId: string;
}
export interface GetPromptFileResponse {
  PromptPresignedUrl?: string;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export interface GetTaskTemplateRequest {
  InstanceId: string;
  TaskTemplateId: string;
  SnapshotVersion?: string;
}
export interface GetTaskTemplateResponse {
  InstanceId?: string;
  Id: string;
  Arn: string;
  Name: string;
  Description?: string;
  ContactFlowId?: string;
  SelfAssignFlowId?: string;
  Constraints?: TaskTemplateConstraints;
  Defaults?: TaskTemplateDefaults;
  Fields?: Array<TaskTemplateField>;
  Status?: TaskTemplateStatus;
  LastModifiedTime?: Date | string;
  CreatedTime?: Date | string;
  Tags?: Record<string, string>;
}
export interface GetTrafficDistributionRequest {
  Id: string;
}
export interface GetTrafficDistributionResponse {
  TelephonyConfig?: TelephonyConfig;
  Id?: string;
  Arn?: string;
  SignInConfig?: SignInConfig;
  AgentConfig?: AgentConfig;
}
export type GlobalSignInEndpoint = string;

export type Grouping =
  | "QUEUE"
  | "CHANNEL"
  | "ROUTING_PROFILE"
  | "ROUTING_STEP_EXPRESSION";
export type Groupings = Array<Grouping>;
export type GroupingsV2 = Array<string>;
export type GroupingV2 = string;

export interface HierarchyGroup {
  Id?: string;
  Arn?: string;
  Name?: string;
  LevelId?: string;
  HierarchyPath?: HierarchyPath;
  Tags?: Record<string, string>;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export interface HierarchyGroupCondition {
  Value?: string;
  HierarchyGroupMatchType?: HierarchyGroupMatchType;
}
export type HierarchyGroupId = string;

export type HierarchyGroupIdList = Array<string>;
export type HierarchyGroupMatchType = "EXACT" | "WITH_CHILD_GROUPS";
export type HierarchyGroupName = string;

export interface HierarchyGroups {
  Level1?: AgentHierarchyGroup;
  Level2?: AgentHierarchyGroup;
  Level3?: AgentHierarchyGroup;
  Level4?: AgentHierarchyGroup;
  Level5?: AgentHierarchyGroup;
}
export interface HierarchyGroupSummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export type HierarchyGroupSummaryList = Array<HierarchyGroupSummary>;
export interface HierarchyGroupSummaryReference {
  Id?: string;
  Arn?: string;
}
export interface HierarchyLevel {
  Id?: string;
  Arn?: string;
  Name?: string;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export type HierarchyLevelId = string;

export type HierarchyLevelName = string;

export interface HierarchyLevelUpdate {
  Name: string;
}
export interface HierarchyPath {
  LevelOne?: HierarchyGroupSummary;
  LevelTwo?: HierarchyGroupSummary;
  LevelThree?: HierarchyGroupSummary;
  LevelFour?: HierarchyGroupSummary;
  LevelFive?: HierarchyGroupSummary;
}
export interface HierarchyPathReference {
  LevelOne?: HierarchyGroupSummaryReference;
  LevelTwo?: HierarchyGroupSummaryReference;
  LevelThree?: HierarchyGroupSummaryReference;
  LevelFour?: HierarchyGroupSummaryReference;
  LevelFive?: HierarchyGroupSummaryReference;
}
export type HierarchyRestrictedResourceList = Array<string>;
export type HierarchyRestrictedResourceName = string;

export interface HierarchyStructure {
  LevelOne?: HierarchyLevel;
  LevelTwo?: HierarchyLevel;
  LevelThree?: HierarchyLevel;
  LevelFour?: HierarchyLevel;
  LevelFive?: HierarchyLevel;
}
export interface HierarchyStructureUpdate {
  LevelOne?: HierarchyLevelUpdate;
  LevelTwo?: HierarchyLevelUpdate;
  LevelThree?: HierarchyLevelUpdate;
  LevelFour?: HierarchyLevelUpdate;
  LevelFive?: HierarchyLevelUpdate;
}
export interface HistoricalMetric {
  Name?: HistoricalMetricName;
  Threshold?: Threshold;
  Statistic?: Statistic;
  Unit?: Unit;
}
export interface HistoricalMetricData {
  Metric?: HistoricalMetric;
  Value?: number;
}
export type HistoricalMetricDataCollections = Array<HistoricalMetricData>;
export type HistoricalMetricName =
  | "CONTACTS_QUEUED"
  | "CONTACTS_HANDLED"
  | "CONTACTS_ABANDONED"
  | "CONTACTS_CONSULTED"
  | "CONTACTS_AGENT_HUNG_UP_FIRST"
  | "CONTACTS_HANDLED_INCOMING"
  | "CONTACTS_HANDLED_OUTBOUND"
  | "CONTACTS_HOLD_ABANDONS"
  | "CONTACTS_TRANSFERRED_IN"
  | "CONTACTS_TRANSFERRED_OUT"
  | "CONTACTS_TRANSFERRED_IN_FROM_QUEUE"
  | "CONTACTS_TRANSFERRED_OUT_FROM_QUEUE"
  | "CONTACTS_MISSED"
  | "CALLBACK_CONTACTS_HANDLED"
  | "API_CONTACTS_HANDLED"
  | "OCCUPANCY"
  | "HANDLE_TIME"
  | "AFTER_CONTACT_WORK_TIME"
  | "QUEUED_TIME"
  | "ABANDON_TIME"
  | "QUEUE_ANSWER_TIME"
  | "HOLD_TIME"
  | "INTERACTION_TIME"
  | "INTERACTION_AND_HOLD_TIME"
  | "SERVICE_LEVEL";
export interface HistoricalMetricResult {
  Dimensions?: Dimensions;
  Collections?: Array<HistoricalMetricData>;
}
export type HistoricalMetricResults = Array<HistoricalMetricResult>;
export type HistoricalMetrics = Array<HistoricalMetric>;
export type Hours = number;

export type Hours24Format = number;

export interface HoursOfOperation {
  HoursOfOperationId?: string;
  HoursOfOperationArn?: string;
  Name?: string;
  Description?: string;
  TimeZone?: string;
  Config?: Array<HoursOfOperationConfig>;
  Tags?: Record<string, string>;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export interface HoursOfOperationConfig {
  Day: HoursOfOperationDays;
  StartTime: HoursOfOperationTimeSlice;
  EndTime: HoursOfOperationTimeSlice;
}
export type HoursOfOperationConfigList = Array<HoursOfOperationConfig>;
export type HoursOfOperationDays =
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY";
export type HoursOfOperationDescription = string;

export type HoursOfOperationId = string;

export type HoursOfOperationList = Array<HoursOfOperation>;
export type HoursOfOperationName = string;

export interface HoursOfOperationOverride {
  HoursOfOperationOverrideId?: string;
  HoursOfOperationId?: string;
  HoursOfOperationArn?: string;
  Name?: string;
  Description?: string;
  Config?: Array<HoursOfOperationOverrideConfig>;
  EffectiveFrom?: string;
  EffectiveTill?: string;
}
export interface HoursOfOperationOverrideConfig {
  Day?: OverrideDays;
  StartTime?: OverrideTimeSlice;
  EndTime?: OverrideTimeSlice;
}
export type HoursOfOperationOverrideConfigList =
  Array<HoursOfOperationOverrideConfig>;
export type HoursOfOperationOverrideId = string;

export type HoursOfOperationOverrideList = Array<HoursOfOperationOverride>;
export type HoursOfOperationOverrideSearchConditionList =
  Array<HoursOfOperationOverrideSearchCriteria>;
export interface HoursOfOperationOverrideSearchCriteria {
  OrConditions?: Array<HoursOfOperationOverrideSearchCriteria>;
  AndConditions?: Array<HoursOfOperationOverrideSearchCriteria>;
  StringCondition?: StringCondition;
  DateCondition?: DateCondition;
}
export type HoursOfOperationOverrideYearMonthDayDateFormat = string;

export type HoursOfOperationSearchConditionList =
  Array<HoursOfOperationSearchCriteria>;
export interface HoursOfOperationSearchCriteria {
  OrConditions?: Array<HoursOfOperationSearchCriteria>;
  AndConditions?: Array<HoursOfOperationSearchCriteria>;
  StringCondition?: StringCondition;
}
export interface HoursOfOperationSearchFilter {
  TagFilter?: ControlPlaneTagFilter;
}
export interface HoursOfOperationSummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export type HoursOfOperationSummaryList = Array<HoursOfOperationSummary>;
export interface HoursOfOperationTimeSlice {
  Hours: number;
  Minutes: number;
}
export declare class IdempotencyException extends EffectData.TaggedError(
  "IdempotencyException",
)<{
  readonly Message?: string;
}> {}
export interface ImportPhoneNumberRequest {
  InstanceId: string;
  SourcePhoneNumberArn: string;
  PhoneNumberDescription?: string;
  Tags?: Record<string, string>;
  ClientToken?: string;
}
export interface ImportPhoneNumberResponse {
  PhoneNumberId?: string;
  PhoneNumberArn?: string;
}
export interface InboundAdditionalRecipients {
  ToAddresses?: Array<EmailAddressInfo>;
  CcAddresses?: Array<EmailAddressInfo>;
}
export type InboundCallsEnabled = boolean;

export interface InboundEmailContent {
  MessageSourceType: InboundMessageSourceType;
  RawMessage?: InboundRawMessage;
}
export type InboundMessageSourceType = "RAW";
export interface InboundRawMessage {
  Subject: string;
  Body: string;
  ContentType: string;
  Headers?: Record<EmailHeaderType, string>;
}
export type InboundSubject = string;

export type IncludeRawMessage = boolean;

export type Index = number;

export type InitiateAs = "CONNECTED_TO_USER" | "COMPLETED";
export type InitiationMethodList = Array<ContactInitiationMethod>;
export interface Instance {
  Id?: string;
  Arn?: string;
  IdentityManagementType?: DirectoryType;
  InstanceAlias?: string;
  CreatedTime?: Date | string;
  ServiceRole?: string;
  InstanceStatus?: InstanceStatus;
  StatusReason?: InstanceStatusReason;
  InboundCallsEnabled?: boolean;
  OutboundCallsEnabled?: boolean;
  InstanceAccessUrl?: string;
  Tags?: Record<string, string>;
}
export type InstanceArn = string;

export type InstanceAttributeType =
  | "INBOUND_CALLS"
  | "OUTBOUND_CALLS"
  | "CONTACTFLOW_LOGS"
  | "CONTACT_LENS"
  | "AUTO_RESOLVE_BEST_VOICES"
  | "USE_CUSTOM_TTS_VOICES"
  | "EARLY_MEDIA"
  | "MULTI_PARTY_CONFERENCE"
  | "HIGH_VOLUME_OUTBOUND"
  | "ENHANCED_CONTACT_MONITORING"
  | "ENHANCED_CHAT_MONITORING"
  | "MULTI_PARTY_CHAT_CONFERENCE";
export type InstanceAttributeValue = string;

export type InstanceId = string;

export type InstanceIdOrArn = string;

export type InstanceReplicationStatus =
  | "INSTANCE_REPLICATION_COMPLETE"
  | "INSTANCE_REPLICATION_IN_PROGRESS"
  | "INSTANCE_REPLICATION_FAILED"
  | "INSTANCE_REPLICA_DELETING"
  | "INSTANCE_REPLICATION_DELETION_FAILED"
  | "RESOURCE_REPLICATION_NOT_STARTED";
export type InstanceStatus =
  | "CREATION_IN_PROGRESS"
  | "ACTIVE"
  | "CREATION_FAILED";
export interface InstanceStatusReason {
  Message?: string;
}
export interface InstanceStorageConfig {
  AssociationId?: string;
  StorageType: StorageType;
  S3Config?: S3Config;
  KinesisVideoStreamConfig?: KinesisVideoStreamConfig;
  KinesisStreamConfig?: KinesisStreamConfig;
  KinesisFirehoseConfig?: KinesisFirehoseConfig;
}
export type InstanceStorageConfigs = Array<InstanceStorageConfig>;
export type InstanceStorageResourceType =
  | "CHAT_TRANSCRIPTS"
  | "CALL_RECORDINGS"
  | "SCHEDULED_REPORTS"
  | "MEDIA_STREAMS"
  | "CONTACT_TRACE_RECORDS"
  | "AGENT_EVENTS"
  | "REAL_TIME_CONTACT_ANALYSIS_SEGMENTS"
  | "ATTACHMENTS"
  | "CONTACT_EVALUATIONS"
  | "SCREEN_RECORDINGS"
  | "REAL_TIME_CONTACT_ANALYSIS_CHAT_SEGMENTS"
  | "REAL_TIME_CONTACT_ANALYSIS_VOICE_SEGMENTS"
  | "EMAIL_MESSAGES";
export interface InstanceSummary {
  Id?: string;
  Arn?: string;
  IdentityManagementType?: DirectoryType;
  InstanceAlias?: string;
  CreatedTime?: Date | string;
  ServiceRole?: string;
  InstanceStatus?: InstanceStatus;
  InboundCallsEnabled?: boolean;
  OutboundCallsEnabled?: boolean;
  InstanceAccessUrl?: string;
}
export type InstanceSummaryList = Array<InstanceSummary>;
export type Integer = number;

export type IntegerCount = number;

export type IntegrationAssociationId = string;

export interface IntegrationAssociationSummary {
  IntegrationAssociationId?: string;
  IntegrationAssociationArn?: string;
  InstanceId?: string;
  IntegrationType?: IntegrationType;
  IntegrationArn?: string;
  SourceApplicationUrl?: string;
  SourceApplicationName?: string;
  SourceType?: SourceType;
}
export type IntegrationAssociationSummaryList =
  Array<IntegrationAssociationSummary>;
export type IntegrationType =
  | "EVENT"
  | "VOICE_ID"
  | "PINPOINT_APP"
  | "WISDOM_ASSISTANT"
  | "WISDOM_KNOWLEDGE_BASE"
  | "WISDOM_QUICK_RESPONSES"
  | "Q_MESSAGE_TEMPLATES"
  | "CASES_DOMAIN"
  | "APPLICATION"
  | "FILE_SCANNER"
  | "SES_IDENTITY"
  | "ANALYTICS_CONNECTOR"
  | "CALL_TRANSFER_CONNECTOR"
  | "COGNITO_USER_POOL";
export declare class InternalServiceException extends EffectData.TaggedError(
  "InternalServiceException",
)<{
  readonly Message?: string;
}> {}
export interface IntervalDetails {
  TimeZone?: string;
  IntervalPeriod?: IntervalPeriod;
}
export type IntervalPeriod =
  | "FIFTEEN_MIN"
  | "THIRTY_MIN"
  | "HOUR"
  | "DAY"
  | "WEEK"
  | "TOTAL";
export declare class InvalidContactFlowException extends EffectData.TaggedError(
  "InvalidContactFlowException",
)<{
  readonly problems?: Array<ProblemDetail>;
}> {}
export declare class InvalidContactFlowModuleException extends EffectData.TaggedError(
  "InvalidContactFlowModuleException",
)<{
  readonly Problems?: Array<ProblemDetail>;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly Message?: string;
  readonly Reason?: InvalidRequestExceptionReason;
}> {}
export type InvalidRequestExceptionReason = {
  AttachedFileInvalidRequestExceptionReason: AttachedFileInvalidRequestExceptionReason;
};
export interface InvisibleFieldInfo {
  Id?: TaskTemplateFieldIdentifier;
}
export type InvisibleTaskTemplateFields = Array<InvisibleFieldInfo>;
export type IpCidr = string;

export type IpCidrList = Array<string>;
export type ISO8601Datetime = string;

export type IvrRecordingTrack = "ALL";
export type JoinToken = string;

export type KeyId = string;

export interface KinesisFirehoseConfig {
  FirehoseArn: string;
}
export interface KinesisStreamConfig {
  StreamArn: string;
}
export interface KinesisVideoStreamConfig {
  Prefix: string;
  RetentionPeriodHours: number;
  EncryptionConfig: EncryptionConfig;
}
export type LargeNextToken = string;

export interface LexBot {
  Name: string;
  LexRegion: string;
}
export interface LexBotConfig {
  LexBot?: LexBot;
  LexV2Bot?: LexV2Bot;
}
export type LexBotConfigList = Array<LexBotConfig>;
export type LexBotsList = Array<LexBot>;
export type LexRegion = string;

export interface LexV2Bot {
  AliasArn?: string;
}
export type LexVersion = "V1" | "V2";
export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface ListAgentStatusRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  AgentStatusTypes?: Array<AgentStatusType>;
}
export interface ListAgentStatusResponse {
  NextToken?: string;
  AgentStatusSummaryList?: Array<AgentStatusSummary>;
}
export interface ListAnalyticsDataAssociationsRequest {
  InstanceId: string;
  DataSetId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAnalyticsDataAssociationsResponse {
  Results?: Array<AnalyticsDataAssociationResult>;
  NextToken?: string;
}
export interface ListAnalyticsDataLakeDataSetsRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListAnalyticsDataLakeDataSetsResponse {
  Results?: Array<AnalyticsDataSetsResult>;
  NextToken?: string;
}
export interface ListApprovedOriginsRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListApprovedOriginsResponse {
  Origins?: Array<string>;
  NextToken?: string;
}
export interface ListAssociatedContactsRequest {
  InstanceId: string;
  ContactId: string;
  MaxResults?: number;
  NextToken?: string;
}
export type ListAssociatedContactsRequestMaxResults = number;

export interface ListAssociatedContactsResponse {
  ContactSummaryList?: Array<AssociatedContactSummary>;
  NextToken?: string;
}
export interface ListAuthenticationProfilesRequest {
  InstanceId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAuthenticationProfilesResponse {
  AuthenticationProfileSummaryList?: Array<AuthenticationProfileSummary>;
  NextToken?: string;
}
export interface ListBotsRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  LexVersion: LexVersion;
}
export interface ListBotsResponse {
  LexBots?: Array<LexBotConfig>;
  NextToken?: string;
}
export interface ListCondition {
  TargetListType?: TargetListType;
  Conditions?: Array<Condition>;
}
export interface ListContactEvaluationsRequest {
  InstanceId: string;
  ContactId: string;
  NextToken?: string;
}
export interface ListContactEvaluationsResponse {
  EvaluationSummaryList: Array<EvaluationSummary>;
  NextToken?: string;
}
export interface ListContactFlowModulesRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  ContactFlowModuleState?: ContactFlowModuleState;
}
export interface ListContactFlowModulesResponse {
  ContactFlowModulesSummaryList?: Array<ContactFlowModuleSummary>;
  NextToken?: string;
}
export interface ListContactFlowsRequest {
  InstanceId: string;
  ContactFlowTypes?: Array<ContactFlowType>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListContactFlowsResponse {
  ContactFlowSummaryList?: Array<ContactFlowSummary>;
  NextToken?: string;
}
export interface ListContactFlowVersionsRequest {
  InstanceId: string;
  ContactFlowId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListContactFlowVersionsResponse {
  ContactFlowVersionSummaryList?: Array<ContactFlowVersionSummary>;
  NextToken?: string;
}
export interface ListContactReferencesRequest {
  InstanceId: string;
  ContactId: string;
  ReferenceTypes: Array<ReferenceType>;
  NextToken?: string;
}
export interface ListContactReferencesResponse {
  ReferenceSummaryList?: Array<ReferenceSummary>;
  NextToken?: string;
}
export interface ListDefaultVocabulariesRequest {
  InstanceId: string;
  LanguageCode?: VocabularyLanguageCode;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListDefaultVocabulariesResponse {
  DefaultVocabularyList: Array<DefaultVocabulary>;
  NextToken?: string;
}
export interface ListEvaluationFormsRequest {
  InstanceId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListEvaluationFormsResponse {
  EvaluationFormSummaryList: Array<EvaluationFormSummary>;
  NextToken?: string;
}
export interface ListEvaluationFormVersionsRequest {
  InstanceId: string;
  EvaluationFormId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListEvaluationFormVersionsResponse {
  EvaluationFormVersionSummaryList: Array<EvaluationFormVersionSummary>;
  NextToken?: string;
}
export type ListFlowAssociationResourceType =
  | "WHATSAPP_MESSAGING_PHONE_NUMBER"
  | "VOICE_PHONE_NUMBER"
  | "INBOUND_EMAIL"
  | "OUTBOUND_EMAIL"
  | "ANALYTICS_CONNECTOR";
export interface ListFlowAssociationsRequest {
  InstanceId: string;
  ResourceType?: ListFlowAssociationResourceType;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListFlowAssociationsResponse {
  FlowAssociationSummaryList?: Array<FlowAssociationSummary>;
  NextToken?: string;
}
export interface ListHoursOfOperationOverridesRequest {
  InstanceId: string;
  HoursOfOperationId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListHoursOfOperationOverridesResponse {
  NextToken?: string;
  HoursOfOperationOverrideList?: Array<HoursOfOperationOverride>;
  LastModifiedRegion?: string;
  LastModifiedTime?: Date | string;
}
export interface ListHoursOfOperationsRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListHoursOfOperationsResponse {
  HoursOfOperationSummaryList?: Array<HoursOfOperationSummary>;
  NextToken?: string;
}
export interface ListInstanceAttributesRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListInstanceAttributesResponse {
  Attributes?: Array<Attribute>;
  NextToken?: string;
}
export interface ListInstancesRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListInstancesResponse {
  InstanceSummaryList?: Array<InstanceSummary>;
  NextToken?: string;
}
export interface ListInstanceStorageConfigsRequest {
  InstanceId: string;
  ResourceType: InstanceStorageResourceType;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListInstanceStorageConfigsResponse {
  StorageConfigs?: Array<InstanceStorageConfig>;
  NextToken?: string;
}
export interface ListIntegrationAssociationsRequest {
  InstanceId: string;
  IntegrationType?: IntegrationType;
  NextToken?: string;
  MaxResults?: number;
  IntegrationArn?: string;
}
export interface ListIntegrationAssociationsResponse {
  IntegrationAssociationSummaryList?: Array<IntegrationAssociationSummary>;
  NextToken?: string;
}
export interface ListLambdaFunctionsRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListLambdaFunctionsResponse {
  LambdaFunctions?: Array<string>;
  NextToken?: string;
}
export interface ListLexBotsRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListLexBotsResponse {
  LexBots?: Array<LexBot>;
  NextToken?: string;
}
export interface ListPhoneNumbersRequest {
  InstanceId: string;
  PhoneNumberTypes?: Array<PhoneNumberType>;
  PhoneNumberCountryCodes?: Array<PhoneNumberCountryCode>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPhoneNumbersResponse {
  PhoneNumberSummaryList?: Array<PhoneNumberSummary>;
  NextToken?: string;
}
export interface ListPhoneNumbersSummary {
  PhoneNumberId?: string;
  PhoneNumberArn?: string;
  PhoneNumber?: string;
  PhoneNumberCountryCode?: PhoneNumberCountryCode;
  PhoneNumberType?: PhoneNumberType;
  TargetArn?: string;
  InstanceId?: string;
  PhoneNumberDescription?: string;
  SourcePhoneNumberArn?: string;
}
export type ListPhoneNumbersSummaryList = Array<ListPhoneNumbersSummary>;
export interface ListPhoneNumbersV2Request {
  TargetArn?: string;
  InstanceId?: string;
  MaxResults?: number;
  NextToken?: string;
  PhoneNumberCountryCodes?: Array<PhoneNumberCountryCode>;
  PhoneNumberTypes?: Array<PhoneNumberType>;
  PhoneNumberPrefix?: string;
}
export interface ListPhoneNumbersV2Response {
  NextToken?: string;
  ListPhoneNumbersSummaryList?: Array<ListPhoneNumbersSummary>;
}
export interface ListPredefinedAttributesRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPredefinedAttributesResponse {
  NextToken?: string;
  PredefinedAttributeSummaryList?: Array<PredefinedAttributeSummary>;
}
export interface ListPromptsRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPromptsResponse {
  PromptSummaryList?: Array<PromptSummary>;
  NextToken?: string;
}
export interface ListQueueQuickConnectsRequest {
  InstanceId: string;
  QueueId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListQueueQuickConnectsResponse {
  NextToken?: string;
  QuickConnectSummaryList?: Array<QuickConnectSummary>;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export interface ListQueuesRequest {
  InstanceId: string;
  QueueTypes?: Array<QueueType>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListQueuesResponse {
  QueueSummaryList?: Array<QueueSummary>;
  NextToken?: string;
}
export interface ListQuickConnectsRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  QuickConnectTypes?: Array<QuickConnectType>;
}
export interface ListQuickConnectsResponse {
  QuickConnectSummaryList?: Array<QuickConnectSummary>;
  NextToken?: string;
}
export interface ListRealtimeContactAnalysisSegmentsV2Request {
  InstanceId: string;
  ContactId: string;
  MaxResults?: number;
  NextToken?: string;
  OutputType: RealTimeContactAnalysisOutputType;
  SegmentTypes: Array<RealTimeContactAnalysisSegmentType>;
}
export interface ListRealtimeContactAnalysisSegmentsV2Response {
  Channel: RealTimeContactAnalysisSupportedChannel;
  Status: RealTimeContactAnalysisStatus;
  Segments: Array<RealtimeContactAnalysisSegment>;
  NextToken?: string;
}
export interface ListRoutingProfileQueuesRequest {
  InstanceId: string;
  RoutingProfileId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListRoutingProfileQueuesResponse {
  NextToken?: string;
  RoutingProfileQueueConfigSummaryList?: Array<RoutingProfileQueueConfigSummary>;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export interface ListRoutingProfilesRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListRoutingProfilesResponse {
  RoutingProfileSummaryList?: Array<RoutingProfileSummary>;
  NextToken?: string;
}
export interface ListRulesRequest {
  InstanceId: string;
  PublishStatus?: RulePublishStatus;
  EventSourceName?: EventSourceName;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListRulesResponse {
  RuleSummaryList: Array<RuleSummary>;
  NextToken?: string;
}
export interface ListSecurityKeysRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListSecurityKeysResponse {
  SecurityKeys?: Array<SecurityKey>;
  NextToken?: string;
}
export interface ListSecurityProfileApplicationsRequest {
  SecurityProfileId: string;
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListSecurityProfileApplicationsResponse {
  Applications?: Array<Application>;
  NextToken?: string;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export interface ListSecurityProfilePermissionsRequest {
  SecurityProfileId: string;
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListSecurityProfilePermissionsResponse {
  Permissions?: Array<string>;
  NextToken?: string;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export interface ListSecurityProfilesRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListSecurityProfilesResponse {
  SecurityProfileSummaryList?: Array<SecurityProfileSummary>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListTaskTemplatesRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  Status?: TaskTemplateStatus;
  Name?: string;
}
export interface ListTaskTemplatesResponse {
  TaskTemplates?: Array<TaskTemplateMetadata>;
  NextToken?: string;
}
export interface ListTrafficDistributionGroupsRequest {
  MaxResults?: number;
  NextToken?: string;
  InstanceId?: string;
}
export interface ListTrafficDistributionGroupsResponse {
  NextToken?: string;
  TrafficDistributionGroupSummaryList?: Array<TrafficDistributionGroupSummary>;
}
export interface ListTrafficDistributionGroupUsersRequest {
  TrafficDistributionGroupId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListTrafficDistributionGroupUsersResponse {
  NextToken?: string;
  TrafficDistributionGroupUserSummaryList?: Array<TrafficDistributionGroupUserSummary>;
}
export interface ListUseCasesRequest {
  InstanceId: string;
  IntegrationAssociationId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListUseCasesResponse {
  UseCaseSummaryList?: Array<UseCase>;
  NextToken?: string;
}
export interface ListUserHierarchyGroupsRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListUserHierarchyGroupsResponse {
  UserHierarchyGroupSummaryList?: Array<HierarchyGroupSummary>;
  NextToken?: string;
}
export interface ListUserProficienciesRequest {
  InstanceId: string;
  UserId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListUserProficienciesResponse {
  NextToken?: string;
  UserProficiencyList?: Array<UserProficiency>;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export interface ListUsersRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListUsersResponse {
  UserSummaryList?: Array<UserSummary>;
  NextToken?: string;
}
export interface ListViewsRequest {
  InstanceId: string;
  Type?: ViewType;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListViewsResponse {
  ViewsSummaryList?: Array<ViewSummary>;
  NextToken?: string;
}
export interface ListViewVersionsRequest {
  InstanceId: string;
  ViewId: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListViewVersionsResponse {
  ViewVersionSummaryList?: Array<ViewVersionSummary>;
  NextToken?: string;
}
export type Long = number;

export interface MatchCriteria {
  AgentsCriteria?: AgentsCriteria;
}
export declare class MaximumResultReturnedException extends EffectData.TaggedError(
  "MaximumResultReturnedException",
)<{
  readonly Message?: string;
}> {}
export type MaxResult10 = number;

export type MaxResult100 = number;

export type MaxResult1000 = number;

export type MaxResult2 = number;

export type MaxResult200 = number;

export type MaxResult25 = number;

export type MaxResult500 = number;

export type MaxResult7 = number;

export type MaxResults = number;

export type MediaConcurrencies = Array<MediaConcurrency>;
export interface MediaConcurrency {
  Channel: Channel;
  Concurrency: number;
  CrossChannelBehavior?: CrossChannelBehavior;
}
export interface MediaPlacement {
  AudioHostUrl?: string;
  AudioFallbackUrl?: string;
  SignalingUrl?: string;
  TurnControlUrl?: string;
  EventIngestionUrl?: string;
}
export type MediaRegion = string;

export type MediaStreamType = "AUDIO" | "VIDEO";
export interface Meeting {
  MediaRegion?: string;
  MediaPlacement?: MediaPlacement;
  MeetingFeatures?: MeetingFeaturesConfiguration;
  MeetingId?: string;
}
export interface MeetingFeaturesConfiguration {
  Audio?: AudioFeatures;
}
export type MeetingFeatureStatus = "AVAILABLE" | "UNAVAILABLE";
export type MeetingId = string;

export type Message = string;

export type MessageTemplateId = string;

export type MessageTemplateKnowledgeBaseId = string;

export type MetadataUrl = string;

export type MetricDataCollectionsV2 = Array<MetricDataV2>;
export interface MetricDataV2 {
  Metric?: MetricV2;
  Value?: number;
}
export type MetricFiltersV2List = Array<MetricFilterV2>;
export interface MetricFilterV2 {
  MetricFilterKey?: string;
  MetricFilterValues?: Array<string>;
  Negate?: boolean;
}
export type MetricFilterValueList = Array<string>;
export interface MetricInterval {
  Interval?: IntervalPeriod;
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export type MetricNameV2 = string;

export type MetricResultsV2 = Array<MetricResultV2>;
export interface MetricResultV2 {
  Dimensions?: Record<string, string>;
  MetricInterval?: MetricInterval;
  Collections?: Array<MetricDataV2>;
}
export type MetricsV2 = Array<MetricV2>;
export interface MetricV2 {
  Name?: string;
  Threshold?: Array<ThresholdV2>;
  MetricFilters?: Array<MetricFilterV2>;
}
export type MinutesLimit60 = number;

export type MonitorCapability = "SILENT_MONITOR" | "BARGE";
export interface MonitorContactRequest {
  InstanceId: string;
  ContactId: string;
  UserId: string;
  AllowedMonitorCapabilities?: Array<MonitorCapability>;
  ClientToken?: string;
}
export interface MonitorContactResponse {
  ContactId?: string;
  ContactArn?: string;
}
export type Name = string;

export type Name128 = string;

export type Namespace = string;

export type NewChatCreated = boolean;

export interface NewSessionDetails {
  SupportedMessagingContentTypes?: Array<string>;
  ParticipantDetails?: ParticipantDetails;
  Attributes?: Record<string, string>;
  StreamingConfiguration?: ChatStreamingConfiguration;
}
export type NextToken = string;

export type NextToken2500 = string;

export type NotificationContentType = "PLAIN_TEXT";
export type NotificationDeliveryType = "EMAIL";
export interface NotificationRecipientType {
  UserTags?: Record<string, string>;
  UserIds?: Array<string>;
}
export type NullableBoolean = boolean;

export type NullableProficiencyLevel = number;

export type NullableProficiencyLimitValue = number;

export type NumberComparisonType =
  | "GREATER_OR_EQUAL"
  | "GREATER"
  | "LESSER_OR_EQUAL"
  | "LESSER"
  | "EQUAL"
  | "NOT_EQUAL"
  | "RANGE";
export interface NumberCondition {
  FieldName?: string;
  MinValue?: number;
  MaxValue?: number;
  ComparisonType?: NumberComparisonType;
}
export interface NumberReference {
  Name?: string;
  Value?: string;
}
export type NumericQuestionPropertyAutomationLabel =
  | "OVERALL_CUSTOMER_SENTIMENT_SCORE"
  | "OVERALL_AGENT_SENTIMENT_SCORE"
  | "NON_TALK_TIME"
  | "NON_TALK_TIME_PERCENTAGE"
  | "NUMBER_OF_INTERRUPTIONS"
  | "CONTACT_DURATION"
  | "AGENT_INTERACTION_DURATION"
  | "CUSTOMER_HOLD_TIME";
export interface NumericQuestionPropertyValueAutomation {
  Label: NumericQuestionPropertyAutomationLabel;
}
export type OperatingSystem = string;

export interface OperationalHour {
  Start?: OverrideTimeSlice;
  End?: OverrideTimeSlice;
}
export type OperationalHours = Array<OperationalHour>;
export type Origin = string;

export type OriginsList = Array<string>;
export interface OutboundAdditionalRecipients {
  CcEmailAddresses?: Array<EmailAddressInfo>;
}
export interface OutboundCallerConfig {
  OutboundCallerIdName?: string;
  OutboundCallerIdNumberId?: string;
  OutboundFlowId?: string;
}
export type OutboundCallerIdName = string;

export type OutboundCallsEnabled = boolean;

export declare class OutboundContactNotPermittedException extends EffectData.TaggedError(
  "OutboundContactNotPermittedException",
)<{
  readonly Message?: string;
}> {}
export interface OutboundEmailConfig {
  OutboundEmailAddressId?: string;
}
export interface OutboundEmailContent {
  MessageSourceType: OutboundMessageSourceType;
  TemplatedMessageConfig?: TemplatedMessageConfig;
  RawMessage?: OutboundRawMessage;
}
export type OutboundMessageSourceType = "TEMPLATE" | "RAW";
export interface OutboundRawMessage {
  Subject: string;
  Body: string;
  ContentType: string;
}
export type OutboundRequestId = string;

export type OutboundSubject = string;

export declare class OutputTypeNotFoundException extends EffectData.TaggedError(
  "OutputTypeNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type OverrideDays =
  | "SUNDAY"
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY";
export interface OverrideTimeSlice {
  Hours: number;
  Minutes: number;
}
export interface ParticipantCapabilities {
  Video?: VideoCapability;
  ScreenShare?: ScreenShareCapability;
}
export interface ParticipantDetails {
  DisplayName: string;
}
export interface ParticipantDetailsToAdd {
  ParticipantRole?: ParticipantRole;
  DisplayName?: string;
}
export type ParticipantId = string;

export interface ParticipantMetrics {
  ParticipantId?: string;
  ParticipantType?: ParticipantType;
  ConversationAbandon?: boolean;
  MessagesSent?: number;
  NumResponses?: number;
  MessageLengthInChars?: number;
  TotalResponseTimeInMillis?: number;
  MaxResponseTimeInMillis?: number;
  LastMessageTimestamp?: Date | string;
}
export type ParticipantRole =
  | "AGENT"
  | "CUSTOMER"
  | "SYSTEM"
  | "CUSTOM_BOT"
  | "SUPERVISOR";
export type ParticipantState =
  | "INITIAL"
  | "CONNECTED"
  | "DISCONNECTED"
  | "MISSED";
export type ParticipantTimerAction = "Unset";
export type ParticipantTimerConfigList = Array<ParticipantTimerConfiguration>;
export interface ParticipantTimerConfiguration {
  ParticipantRole: TimerEligibleParticipantRoles;
  TimerType: ParticipantTimerType;
  TimerValue: ParticipantTimerValue;
}
export type ParticipantTimerDurationInMinutes = number;

export type ParticipantTimerType = "IDLE" | "DISCONNECT_NONCUSTOMER";
export type ParticipantTimerValue =
  | { ParticipantTimerAction: ParticipantTimerAction }
  | { ParticipantTimerDurationInMinutes: number };
export type ParticipantToken = string;

export interface ParticipantTokenCredentials {
  ParticipantToken?: string;
  Expiry?: string;
}
export type ParticipantType =
  | "ALL"
  | "MANAGER"
  | "AGENT"
  | "CUSTOMER"
  | "THIRDPARTY";
export type Password = string;

export interface PauseContactRequest {
  ContactId: string;
  InstanceId: string;
  ContactFlowId?: string;
}
export interface PauseContactResponse {}
export type PEM = string;

export type Percentage = number;

export type Permission = string;

export type PermissionsList = Array<string>;
export interface PersistentChat {
  RehydrationType?: RehydrationType;
  SourceContactId?: string;
}
export type PhoneNumber = string;

export type PhoneNumberCountryCode =
  | "AF"
  | "AL"
  | "DZ"
  | "AS"
  | "AD"
  | "AO"
  | "AI"
  | "AQ"
  | "AG"
  | "AR"
  | "AM"
  | "AW"
  | "AU"
  | "AT"
  | "AZ"
  | "BS"
  | "BH"
  | "BD"
  | "BB"
  | "BY"
  | "BE"
  | "BZ"
  | "BJ"
  | "BM"
  | "BT"
  | "BO"
  | "BA"
  | "BW"
  | "BR"
  | "IO"
  | "VG"
  | "BN"
  | "BG"
  | "BF"
  | "BI"
  | "KH"
  | "CM"
  | "CA"
  | "CV"
  | "KY"
  | "CF"
  | "TD"
  | "CL"
  | "CN"
  | "CX"
  | "CC"
  | "CO"
  | "KM"
  | "CK"
  | "CR"
  | "HR"
  | "CU"
  | "CW"
  | "CY"
  | "CZ"
  | "CD"
  | "DK"
  | "DJ"
  | "DM"
  | "DO"
  | "TL"
  | "EC"
  | "EG"
  | "SV"
  | "GQ"
  | "ER"
  | "EE"
  | "ET"
  | "FK"
  | "FO"
  | "FJ"
  | "FI"
  | "FR"
  | "PF"
  | "GA"
  | "GM"
  | "GE"
  | "DE"
  | "GH"
  | "GI"
  | "GR"
  | "GL"
  | "GD"
  | "GU"
  | "GT"
  | "GG"
  | "GN"
  | "GW"
  | "GY"
  | "HT"
  | "HN"
  | "HK"
  | "HU"
  | "IS"
  | "IN"
  | "ID"
  | "IR"
  | "IQ"
  | "IE"
  | "IM"
  | "IL"
  | "IT"
  | "CI"
  | "JM"
  | "JP"
  | "JE"
  | "JO"
  | "KZ"
  | "KE"
  | "KI"
  | "KW"
  | "KG"
  | "LA"
  | "LV"
  | "LB"
  | "LS"
  | "LR"
  | "LY"
  | "LI"
  | "LT"
  | "LU"
  | "MO"
  | "MK"
  | "MG"
  | "MW"
  | "MY"
  | "MV"
  | "ML"
  | "MT"
  | "MH"
  | "MR"
  | "MU"
  | "YT"
  | "MX"
  | "FM"
  | "MD"
  | "MC"
  | "MN"
  | "ME"
  | "MS"
  | "MA"
  | "MZ"
  | "MM"
  | "NA"
  | "NR"
  | "NP"
  | "NL"
  | "AN"
  | "NC"
  | "NZ"
  | "NI"
  | "NE"
  | "NG"
  | "NU"
  | "KP"
  | "MP"
  | "NO"
  | "OM"
  | "PK"
  | "PW"
  | "PA"
  | "PG"
  | "PY"
  | "PE"
  | "PH"
  | "PN"
  | "PL"
  | "PT"
  | "PR"
  | "QA"
  | "CG"
  | "RE"
  | "RO"
  | "RU"
  | "RW"
  | "BL"
  | "SH"
  | "KN"
  | "LC"
  | "MF"
  | "PM"
  | "VC"
  | "WS"
  | "SM"
  | "ST"
  | "SA"
  | "SN"
  | "RS"
  | "SC"
  | "SL"
  | "SG"
  | "SX"
  | "SK"
  | "SI"
  | "SB"
  | "SO"
  | "ZA"
  | "KR"
  | "ES"
  | "LK"
  | "SD"
  | "SR"
  | "SJ"
  | "SZ"
  | "SE"
  | "CH"
  | "SY"
  | "TW"
  | "TJ"
  | "TZ"
  | "TH"
  | "TG"
  | "TK"
  | "TO"
  | "TT"
  | "TN"
  | "TR"
  | "TM"
  | "TC"
  | "TV"
  | "VI"
  | "UG"
  | "UA"
  | "AE"
  | "GB"
  | "US"
  | "UY"
  | "UZ"
  | "VU"
  | "VA"
  | "VE"
  | "VN"
  | "WF"
  | "EH"
  | "YE"
  | "ZM"
  | "ZW";
export type PhoneNumberCountryCodes = Array<PhoneNumberCountryCode>;
export type PhoneNumberDescription = string;

export type PhoneNumberId = string;

export type PhoneNumberPrefix = string;

export interface PhoneNumberQuickConnectConfig {
  PhoneNumber: string;
}
export interface PhoneNumberStatus {
  Status?: PhoneNumberWorkflowStatus;
  Message?: string;
}
export interface PhoneNumberSummary {
  Id?: string;
  Arn?: string;
  PhoneNumber?: string;
  PhoneNumberType?: PhoneNumberType;
  PhoneNumberCountryCode?: PhoneNumberCountryCode;
}
export type PhoneNumberSummaryList = Array<PhoneNumberSummary>;
export type PhoneNumberType =
  | "TOLL_FREE"
  | "DID"
  | "UIFN"
  | "SHARED"
  | "THIRD_PARTY_TF"
  | "THIRD_PARTY_DID"
  | "SHORT_CODE";
export type PhoneNumberTypes = Array<PhoneNumberType>;
export type PhoneNumberWorkflowMessage = string;

export type PhoneNumberWorkflowStatus = "Claimed" | "InProgress" | "Failed";
export type PhoneType = "SOFT_PHONE" | "DESK_PHONE";
export type PlatformName = string;

export type PlatformVersion = string;

export type PotentialAudioQualityIssue = string;

export type PotentialAudioQualityIssues = Array<string>;
export type PotentialDisconnectIssue = string;

export interface PredefinedAttribute {
  Name?: string;
  Values?: PredefinedAttributeValues;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export type PredefinedAttributeName = string;

export type PredefinedAttributeSearchConditionList =
  Array<PredefinedAttributeSearchCriteria>;
export interface PredefinedAttributeSearchCriteria {
  OrConditions?: Array<PredefinedAttributeSearchCriteria>;
  AndConditions?: Array<PredefinedAttributeSearchCriteria>;
  StringCondition?: StringCondition;
}
export type PredefinedAttributeSearchSummaryList = Array<PredefinedAttribute>;
export type PredefinedAttributeStringValue = string;

export type PredefinedAttributeStringValuesList = Array<string>;
export interface PredefinedAttributeSummary {
  Name?: string;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export type PredefinedAttributeSummaryList = Array<PredefinedAttributeSummary>;
export type PredefinedAttributeValues = { StringList: Array<string> };
export type Prefix = string;

export type PreSignedAttachmentUrl = string;

export type Priority = number;

export interface ProblemDetail {
  message?: string;
}
export type ProblemMessageString = string;

export type Problems = Array<ProblemDetail>;
export type ProficiencyLevel = number;

export type ProficiencyValue = string;

export interface Prompt {
  PromptARN?: string;
  PromptId?: string;
  Name?: string;
  Description?: string;
  Tags?: Record<string, string>;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export type PromptDescription = string;

export type PromptId = string;

export type PromptList = Array<Prompt>;
export type PromptName = string;

export type PromptPresignedUrl = string;

export type PromptSearchConditionList = Array<PromptSearchCriteria>;
export interface PromptSearchCriteria {
  OrConditions?: Array<PromptSearchCriteria>;
  AndConditions?: Array<PromptSearchCriteria>;
  StringCondition?: StringCondition;
}
export interface PromptSearchFilter {
  TagFilter?: ControlPlaneTagFilter;
}
export interface PromptSummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export type PromptSummaryList = Array<PromptSummary>;
export declare class PropertyValidationException extends EffectData.TaggedError(
  "PropertyValidationException",
)<{
  readonly Message: string;
  readonly PropertyList?: Array<PropertyValidationExceptionProperty>;
}> {}
export interface PropertyValidationExceptionProperty {
  PropertyPath: string;
  Reason: PropertyValidationExceptionReason;
  Message: string;
}
export type PropertyValidationExceptionPropertyList =
  Array<PropertyValidationExceptionProperty>;
export type PropertyValidationExceptionReason =
  | "INVALID_FORMAT"
  | "UNIQUE_CONSTRAINT_VIOLATED"
  | "REFERENCED_RESOURCE_NOT_FOUND"
  | "RESOURCE_NAME_ALREADY_EXISTS"
  | "REQUIRED_PROPERTY_MISSING"
  | "NOT_SUPPORTED";
export interface PutUserStatusRequest {
  UserId: string;
  InstanceId: string;
  AgentStatusId: string;
}
export interface PutUserStatusResponse {}
export interface QualityMetrics {
  Agent?: AgentQualityMetrics;
  Customer?: CustomerQualityMetrics;
}
export interface Queue {
  Name?: string;
  QueueArn?: string;
  QueueId?: string;
  Description?: string;
  OutboundCallerConfig?: OutboundCallerConfig;
  OutboundEmailConfig?: OutboundEmailConfig;
  HoursOfOperationId?: string;
  MaxContacts?: number;
  Status?: QueueStatus;
  Tags?: Record<string, string>;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export type QueueDescription = string;

export type QueueId = string;

export type QueueIdList = Array<string>;
export interface QueueInfo {
  Id?: string;
  EnqueueTimestamp?: Date | string;
}
export interface QueueInfoInput {
  Id?: string;
}
export type QueueMaxContacts = number;

export type QueueName = string;

export type QueuePriority = number;

export interface QueueQuickConnectConfig {
  QueueId: string;
  ContactFlowId: string;
}
export interface QueueReference {
  Id?: string;
  Arn?: string;
}
export type Queues = Array<string>;
export type QueueSearchConditionList = Array<QueueSearchCriteria>;
export interface QueueSearchCriteria {
  OrConditions?: Array<QueueSearchCriteria>;
  AndConditions?: Array<QueueSearchCriteria>;
  StringCondition?: StringCondition;
  QueueTypeCondition?: SearchableQueueType;
}
export interface QueueSearchFilter {
  TagFilter?: ControlPlaneTagFilter;
}
export type QueueSearchSummaryList = Array<Queue>;
export type QueueStatus = "ENABLED" | "DISABLED";
export interface QueueSummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  QueueType?: QueueType;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export type QueueSummaryList = Array<QueueSummary>;
export type QueueTimeAdjustmentSeconds = number;

export type QueueType = "STANDARD" | "AGENT";
export type QueueTypes = Array<QueueType>;
export interface QuickConnect {
  QuickConnectARN?: string;
  QuickConnectId?: string;
  Name?: string;
  Description?: string;
  QuickConnectConfig?: QuickConnectConfig;
  Tags?: Record<string, string>;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export interface QuickConnectConfig {
  QuickConnectType: QuickConnectType;
  UserConfig?: UserQuickConnectConfig;
  QueueConfig?: QueueQuickConnectConfig;
  PhoneConfig?: PhoneNumberQuickConnectConfig;
}
export type QuickConnectDescription = string;

export type QuickConnectId = string;

export type QuickConnectName = string;

export type QuickConnectSearchConditionList = Array<QuickConnectSearchCriteria>;
export interface QuickConnectSearchCriteria {
  OrConditions?: Array<QuickConnectSearchCriteria>;
  AndConditions?: Array<QuickConnectSearchCriteria>;
  StringCondition?: StringCondition;
}
export interface QuickConnectSearchFilter {
  TagFilter?: ControlPlaneTagFilter;
}
export type QuickConnectSearchSummaryList = Array<QuickConnect>;
export type QuickConnectsList = Array<string>;
export interface QuickConnectSummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  QuickConnectType?: QuickConnectType;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export type QuickConnectSummaryList = Array<QuickConnectSummary>;
export type QuickConnectType = "USER" | "QUEUE" | "PHONE_NUMBER";
export type QuickConnectTypes = Array<QuickConnectType>;
export interface Range {
  MinProficiencyLevel?: number;
  MaxProficiencyLevel?: number;
}
export interface ReadOnlyFieldInfo {
  Id?: TaskTemplateFieldIdentifier;
}
export type ReadOnlyTaskTemplateFields = Array<ReadOnlyFieldInfo>;
export interface RealTimeContactAnalysisAttachment {
  AttachmentName: string;
  ContentType?: string;
  AttachmentId: string;
  Status?: ArtifactStatus;
}
export type RealTimeContactAnalysisAttachments =
  Array<RealTimeContactAnalysisAttachment>;
export interface RealTimeContactAnalysisCategoryDetails {
  PointsOfInterest: Array<RealTimeContactAnalysisPointOfInterest>;
}
export type RealTimeContactAnalysisCategoryName = string;

export interface RealTimeContactAnalysisCharacterInterval {
  BeginOffsetChar: number;
  EndOffsetChar: number;
}
export type RealTimeContactAnalysisCharacterIntervals =
  Array<RealTimeContactAnalysisCharacterInterval>;
export type RealTimeContactAnalysisContentType = string;

export type RealTimeContactAnalysisEventType = string;

export type RealTimeContactAnalysisId256 = string;

export interface RealTimeContactAnalysisIssueDetected {
  TranscriptItems: Array<RealTimeContactAnalysisTranscriptItemWithContent>;
}
export type RealTimeContactAnalysisIssuesDetected =
  Array<RealTimeContactAnalysisIssueDetected>;
export type RealTimeContactAnalysisMatchedDetails = Record<
  string,
  RealTimeContactAnalysisCategoryDetails
>;
export type RealTimeContactAnalysisOffset = number;

export type RealTimeContactAnalysisOutputType = "Raw" | "Redacted";
export interface RealTimeContactAnalysisPointOfInterest {
  TranscriptItems?: Array<RealTimeContactAnalysisTranscriptItemWithCharacterOffsets>;
}
export type RealTimeContactAnalysisPointsOfInterest =
  Array<RealTimeContactAnalysisPointOfInterest>;
export type RealTimeContactAnalysisPostContactSummaryContent = string;

export type RealTimeContactAnalysisPostContactSummaryFailureCode =
  | "QUOTA_EXCEEDED"
  | "INSUFFICIENT_CONVERSATION_CONTENT"
  | "FAILED_SAFETY_GUIDELINES"
  | "INVALID_ANALYSIS_CONFIGURATION"
  | "INTERNAL_ERROR";
export type RealTimeContactAnalysisPostContactSummaryStatus =
  | "FAILED"
  | "COMPLETED";
export type RealtimeContactAnalysisSegment =
  | { Transcript: RealTimeContactAnalysisSegmentTranscript }
  | { Categories: RealTimeContactAnalysisSegmentCategories }
  | { Issues: RealTimeContactAnalysisSegmentIssues }
  | { Event: RealTimeContactAnalysisSegmentEvent }
  | { Attachments: RealTimeContactAnalysisSegmentAttachments }
  | { PostContactSummary: RealTimeContactAnalysisSegmentPostContactSummary };
export interface RealTimeContactAnalysisSegmentAttachments {
  Id: string;
  ParticipantId: string;
  ParticipantRole: ParticipantRole;
  DisplayName?: string;
  Attachments: Array<RealTimeContactAnalysisAttachment>;
  Time: RealTimeContactAnalysisTimeData;
}
export interface RealTimeContactAnalysisSegmentCategories {
  MatchedDetails: Record<string, RealTimeContactAnalysisCategoryDetails>;
}
export interface RealTimeContactAnalysisSegmentEvent {
  Id: string;
  ParticipantId?: string;
  ParticipantRole?: ParticipantRole;
  DisplayName?: string;
  EventType: string;
  Time: RealTimeContactAnalysisTimeData;
}
export interface RealTimeContactAnalysisSegmentIssues {
  IssuesDetected: Array<RealTimeContactAnalysisIssueDetected>;
}
export interface RealTimeContactAnalysisSegmentPostContactSummary {
  Content?: string;
  Status: RealTimeContactAnalysisPostContactSummaryStatus;
  FailureCode?: RealTimeContactAnalysisPostContactSummaryFailureCode;
}
export type RealtimeContactAnalysisSegments =
  Array<RealtimeContactAnalysisSegment>;
export interface RealTimeContactAnalysisSegmentTranscript {
  Id: string;
  ParticipantId: string;
  ParticipantRole: ParticipantRole;
  DisplayName?: string;
  Content: string;
  ContentType?: string;
  Time: RealTimeContactAnalysisTimeData;
  Redaction?: RealTimeContactAnalysisTranscriptItemRedaction;
  Sentiment?: RealTimeContactAnalysisSentimentLabel;
}
export type RealTimeContactAnalysisSegmentType =
  | "Transcript"
  | "Categories"
  | "Issues"
  | "Event"
  | "Attachments"
  | "PostContactSummary";
export type RealTimeContactAnalysisSegmentTypes =
  Array<RealTimeContactAnalysisSegmentType>;
export type RealTimeContactAnalysisSentimentLabel =
  | "POSITIVE"
  | "NEGATIVE"
  | "NEUTRAL";
export type RealTimeContactAnalysisStatus =
  | "IN_PROGRESS"
  | "FAILED"
  | "COMPLETED";
export type RealTimeContactAnalysisSupportedChannel = "VOICE" | "CHAT";
export type RealTimeContactAnalysisTimeData = { AbsoluteTime: Date | string };
export type RealTimeContactAnalysisTimeInstant = Date | string;

export type RealTimeContactAnalysisTranscriptContent = string;

export interface RealTimeContactAnalysisTranscriptItemRedaction {
  CharacterOffsets?: Array<RealTimeContactAnalysisCharacterInterval>;
}
export type RealTimeContactAnalysisTranscriptItemsWithCharacterOffsets =
  Array<RealTimeContactAnalysisTranscriptItemWithCharacterOffsets>;
export type RealTimeContactAnalysisTranscriptItemsWithContent =
  Array<RealTimeContactAnalysisTranscriptItemWithContent>;
export interface RealTimeContactAnalysisTranscriptItemWithCharacterOffsets {
  Id: string;
  CharacterOffsets?: RealTimeContactAnalysisCharacterInterval;
}
export interface RealTimeContactAnalysisTranscriptItemWithContent {
  Content?: string;
  Id: string;
  CharacterOffsets?: RealTimeContactAnalysisCharacterInterval;
}
export type RecordingDeletionReason = string;

export interface RecordingInfo {
  StorageType?: StorageType;
  Location?: string;
  MediaStreamType?: MediaStreamType;
  ParticipantType?: ParticipantType;
  FragmentStartNumber?: string;
  FragmentStopNumber?: string;
  StartTimestamp?: Date | string;
  StopTimestamp?: Date | string;
  Status?: RecordingStatus;
  DeletionReason?: string;
}
export type RecordingLocation = string;

export type Recordings = Array<RecordingInfo>;
export type RecordingStatus = "AVAILABLE" | "DELETED";
export interface Reference {
  Value?: string;
  Type: ReferenceType;
  Status?: ReferenceStatus;
  Arn?: string;
  StatusReason?: string;
}
export type ReferenceArn = string;

export type ReferenceId = string;

export type ReferenceKey = string;

export type ReferenceStatus =
  | "AVAILABLE"
  | "DELETED"
  | "APPROVED"
  | "REJECTED"
  | "PROCESSING"
  | "FAILED";
export type ReferenceStatusReason = string;

export type ReferenceSummary =
  | { Url: UrlReference }
  | { Attachment: AttachmentReference }
  | { EmailMessage: EmailMessageReference }
  | { String: StringReference }
  | { Number: NumberReference }
  | { Date: DateReference }
  | { Email: EmailReference };
export type ReferenceSummaryList = Array<ReferenceSummary>;
export type ReferenceType =
  | "URL"
  | "ATTACHMENT"
  | "CONTACT_ANALYSIS"
  | "NUMBER"
  | "STRING"
  | "DATE"
  | "EMAIL"
  | "EMAIL_MESSAGE";
export type ReferenceTypes = Array<ReferenceType>;
export type ReferenceValue = string;

export type RefreshTokenDuration = number;

export type RegionName = string;

export type RegistrationId = string;

export type RehydrationType = "ENTIRE_PAST_SESSION" | "FROM_SEGMENT";
export interface ReleasePhoneNumberRequest {
  PhoneNumberId: string;
  ClientToken?: string;
}
export interface ReplicateInstanceRequest {
  InstanceId: string;
  ReplicaRegion: string;
  ClientToken?: string;
  ReplicaAlias: string;
}
export interface ReplicateInstanceResponse {
  Id?: string;
  Arn?: string;
}
export interface ReplicationConfiguration {
  ReplicationStatusSummaryList?: Array<ReplicationStatusSummary>;
  SourceRegion?: string;
  GlobalSignInEndpoint?: string;
}
export type ReplicationStatusReason = string;

export interface ReplicationStatusSummary {
  Region?: string;
  ReplicationStatus?: InstanceReplicationStatus;
  ReplicationStatusReason?: string;
}
export type ReplicationStatusSummaryList = Array<ReplicationStatusSummary>;
export type RequestIdentifier = string;

export interface RequiredFieldInfo {
  Id?: TaskTemplateFieldIdentifier;
}
export type RequiredTaskTemplateFields = Array<RequiredFieldInfo>;
export type resourceArnListMaxLimit100 = Array<string>;
export type ResourceArnOrId = string;

export declare class ResourceConflictException extends EffectData.TaggedError(
  "ResourceConflictException",
)<{
  readonly Message?: string;
}> {}
export type ResourceId = string;

export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly Message?: string;
  readonly ResourceType?: ResourceType;
  readonly ResourceId?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotReadyException extends EffectData.TaggedError(
  "ResourceNotReadyException",
)<{
  readonly Message?: string;
}> {}
export interface ResourceTagsSearchCriteria {
  TagSearchCondition?: TagSearchCondition;
}
export type ResourceType =
  | "CONTACT"
  | "CONTACT_FLOW"
  | "INSTANCE"
  | "PARTICIPANT"
  | "HIERARCHY_LEVEL"
  | "HIERARCHY_GROUP"
  | "USER"
  | "PHONE_NUMBER";
export type ResourceTypeList = Array<string>;
export type ResourceVersion = number;

export interface ResumeContactRecordingRequest {
  InstanceId: string;
  ContactId: string;
  InitialContactId: string;
  ContactRecordingType?: ContactRecordingType;
}
export interface ResumeContactRecordingResponse {}
export interface ResumeContactRequest {
  ContactId: string;
  InstanceId: string;
  ContactFlowId?: string;
}
export interface ResumeContactResponse {}
export interface RoutingCriteria {
  Steps?: Array<Step>;
  ActivationTimestamp?: Date | string;
  Index?: number;
}
export interface RoutingCriteriaInput {
  Steps?: Array<RoutingCriteriaInputStep>;
}
export interface RoutingCriteriaInputStep {
  Expiry?: RoutingCriteriaInputStepExpiry;
  Expression?: Expression;
}
export interface RoutingCriteriaInputStepExpiry {
  DurationInSeconds?: number;
}
export type RoutingCriteriaInputSteps = Array<RoutingCriteriaInputStep>;
export type RoutingCriteriaStepStatus =
  | "ACTIVE"
  | "INACTIVE"
  | "JOINED"
  | "EXPIRED";
export type RoutingExpression = string;

export type RoutingExpressions = Array<string>;
export interface RoutingProfile {
  InstanceId?: string;
  Name?: string;
  RoutingProfileArn?: string;
  RoutingProfileId?: string;
  Description?: string;
  MediaConcurrencies?: Array<MediaConcurrency>;
  DefaultOutboundQueueId?: string;
  Tags?: Record<string, string>;
  NumberOfAssociatedQueues?: number;
  NumberOfAssociatedUsers?: number;
  AgentAvailabilityTimer?: AgentAvailabilityTimer;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
  IsDefault?: boolean;
  AssociatedQueueIds?: Array<string>;
}
export type RoutingProfileDescription = string;

export type RoutingProfileId = string;

export type RoutingProfileList = Array<RoutingProfile>;
export type RoutingProfileName = string;

export interface RoutingProfileQueueConfig {
  QueueReference: RoutingProfileQueueReference;
  Priority: number;
  Delay: number;
}
export type RoutingProfileQueueConfigList = Array<RoutingProfileQueueConfig>;
export interface RoutingProfileQueueConfigSummary {
  QueueId: string;
  QueueArn: string;
  QueueName: string;
  Priority: number;
  Delay: number;
  Channel: Channel;
}
export type RoutingProfileQueueConfigSummaryList =
  Array<RoutingProfileQueueConfigSummary>;
export interface RoutingProfileQueueReference {
  QueueId: string;
  Channel: Channel;
}
export type RoutingProfileQueueReferenceList =
  Array<RoutingProfileQueueReference>;
export interface RoutingProfileReference {
  Id?: string;
  Arn?: string;
}
export type RoutingProfiles = Array<string>;
export type RoutingProfileSearchConditionList =
  Array<RoutingProfileSearchCriteria>;
export interface RoutingProfileSearchCriteria {
  OrConditions?: Array<RoutingProfileSearchCriteria>;
  AndConditions?: Array<RoutingProfileSearchCriteria>;
  StringCondition?: StringCondition;
}
export interface RoutingProfileSearchFilter {
  TagFilter?: ControlPlaneTagFilter;
}
export interface RoutingProfileSummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export type RoutingProfileSummaryList = Array<RoutingProfileSummary>;
export interface Rule {
  Name: string;
  RuleId: string;
  RuleArn: string;
  TriggerEventSource: RuleTriggerEventSource;
  Function: string;
  Actions: Array<RuleAction>;
  PublishStatus: RulePublishStatus;
  CreatedTime: Date | string;
  LastUpdatedTime: Date | string;
  LastUpdatedBy: string;
  Tags?: Record<string, string>;
}
export interface RuleAction {
  ActionType: ActionType;
  TaskAction?: TaskActionDefinition;
  EventBridgeAction?: EventBridgeActionDefinition;
  AssignContactCategoryAction?: AssignContactCategoryActionDefinition;
  SendNotificationAction?: SendNotificationActionDefinition;
  CreateCaseAction?: CreateCaseActionDefinition;
  UpdateCaseAction?: UpdateCaseActionDefinition;
  AssignSlaAction?: AssignSlaActionDefinition;
  EndAssociatedTasksAction?: EndAssociatedTasksActionDefinition;
  SubmitAutoEvaluationAction?: SubmitAutoEvaluationActionDefinition;
}
export type RuleActions = Array<RuleAction>;
export type RuleFunction = string;

export type RuleId = string;

export type RuleName = string;

export type RulePublishStatus = "DRAFT" | "PUBLISHED";
export interface RuleSummary {
  Name: string;
  RuleId: string;
  RuleArn: string;
  EventSourceName: EventSourceName;
  PublishStatus: RulePublishStatus;
  ActionSummaries: Array<ActionSummary>;
  CreatedTime: Date | string;
  LastUpdatedTime: Date | string;
}
export type RuleSummaryList = Array<RuleSummary>;
export interface RuleTriggerEventSource {
  EventSourceName: EventSourceName;
  IntegrationAssociationId?: string;
}
export interface S3Config {
  BucketName: string;
  BucketPrefix: string;
  EncryptionConfig?: EncryptionConfig;
}
export type S3Uri = string;

export type ScreenShareCapability = "SEND";
export type SearchableContactAttributeKey = string;

export interface SearchableContactAttributes {
  Criteria: Array<SearchableContactAttributesCriteria>;
  MatchType?: SearchContactsMatchType;
}
export interface SearchableContactAttributesCriteria {
  Key: string;
  Values: Array<string>;
}
export type SearchableContactAttributesCriteriaList =
  Array<SearchableContactAttributesCriteria>;
export type SearchableContactAttributeValue = string;

export type SearchableContactAttributeValueList = Array<string>;
export type SearchableQueueType = "STANDARD";
export type SearchableSegmentAttributeKey = string;

export interface SearchableSegmentAttributes {
  Criteria: Array<SearchableSegmentAttributesCriteria>;
  MatchType?: SearchContactsMatchType;
}
export interface SearchableSegmentAttributesCriteria {
  Key: string;
  Values: Array<string>;
}
export type SearchableSegmentAttributesCriteriaList =
  Array<SearchableSegmentAttributesCriteria>;
export type SearchableSegmentAttributeValue = string;

export type SearchableSegmentAttributeValueList = Array<string>;
export interface SearchAgentStatusesRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: AgentStatusSearchFilter;
  SearchCriteria?: AgentStatusSearchCriteria;
}
export interface SearchAgentStatusesResponse {
  AgentStatuses?: Array<AgentStatus>;
  NextToken?: string;
  ApproximateTotalCount?: number;
}
export interface SearchAvailablePhoneNumbersRequest {
  TargetArn?: string;
  InstanceId?: string;
  PhoneNumberCountryCode: PhoneNumberCountryCode;
  PhoneNumberType: PhoneNumberType;
  PhoneNumberPrefix?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface SearchAvailablePhoneNumbersResponse {
  NextToken?: string;
  AvailableNumbersList?: Array<AvailableNumberSummary>;
}
export interface SearchContactFlowModulesRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: ContactFlowModuleSearchFilter;
  SearchCriteria?: ContactFlowModuleSearchCriteria;
}
export interface SearchContactFlowModulesResponse {
  ContactFlowModules?: Array<ContactFlowModule>;
  NextToken?: string;
  ApproximateTotalCount?: number;
}
export interface SearchContactFlowsRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: ContactFlowSearchFilter;
  SearchCriteria?: ContactFlowSearchCriteria;
}
export interface SearchContactFlowsResponse {
  ContactFlows?: Array<ContactFlow>;
  NextToken?: string;
  ApproximateTotalCount?: number;
}
export type SearchContactsMatchType = "MATCH_ALL" | "MATCH_ANY";
export interface SearchContactsRequest {
  InstanceId: string;
  TimeRange: SearchContactsTimeRange;
  SearchCriteria?: SearchCriteria;
  MaxResults?: number;
  NextToken?: string;
  Sort?: Sort;
}
export interface SearchContactsResponse {
  Contacts: Array<ContactSearchSummary>;
  NextToken?: string;
  TotalCount?: number;
}
export interface SearchContactsTimeRange {
  Type: SearchContactsTimeRangeType;
  StartTime: Date | string;
  EndTime: Date | string;
}
export type SearchContactsTimeRangeType =
  | "INITIATION_TIMESTAMP"
  | "SCHEDULED_TIMESTAMP"
  | "CONNECTED_TO_AGENT_TIMESTAMP"
  | "DISCONNECT_TIMESTAMP";
export interface SearchCriteria {
  AgentIds?: Array<string>;
  AgentHierarchyGroups?: AgentHierarchyGroups;
  Channels?: Array<Channel>;
  ContactAnalysis?: ContactAnalysis;
  InitiationMethods?: Array<ContactInitiationMethod>;
  QueueIds?: Array<string>;
  SearchableContactAttributes?: SearchableContactAttributes;
  SearchableSegmentAttributes?: SearchableSegmentAttributes;
}
export interface SearchEmailAddressesRequest {
  InstanceId: string;
  MaxResults?: number;
  NextToken?: string;
  SearchCriteria?: EmailAddressSearchCriteria;
  SearchFilter?: EmailAddressSearchFilter;
}
export interface SearchEmailAddressesResponse {
  NextToken?: string;
  EmailAddresses?: Array<EmailAddressMetadata>;
  ApproximateTotalCount?: number;
}
export interface SearchHoursOfOperationOverridesRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: HoursOfOperationSearchFilter;
  SearchCriteria?: HoursOfOperationOverrideSearchCriteria;
}
export interface SearchHoursOfOperationOverridesResponse {
  HoursOfOperationOverrides?: Array<HoursOfOperationOverride>;
  NextToken?: string;
  ApproximateTotalCount?: number;
}
export interface SearchHoursOfOperationsRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: HoursOfOperationSearchFilter;
  SearchCriteria?: HoursOfOperationSearchCriteria;
}
export interface SearchHoursOfOperationsResponse {
  HoursOfOperations?: Array<HoursOfOperation>;
  NextToken?: string;
  ApproximateTotalCount?: number;
}
export interface SearchPredefinedAttributesRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchCriteria?: PredefinedAttributeSearchCriteria;
}
export interface SearchPredefinedAttributesResponse {
  PredefinedAttributes?: Array<PredefinedAttribute>;
  NextToken?: string;
  ApproximateTotalCount?: number;
}
export interface SearchPromptsRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: PromptSearchFilter;
  SearchCriteria?: PromptSearchCriteria;
}
export interface SearchPromptsResponse {
  Prompts?: Array<Prompt>;
  NextToken?: string;
  ApproximateTotalCount?: number;
}
export interface SearchQueuesRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: QueueSearchFilter;
  SearchCriteria?: QueueSearchCriteria;
}
export interface SearchQueuesResponse {
  Queues?: Array<Queue>;
  NextToken?: string;
  ApproximateTotalCount?: number;
}
export interface SearchQuickConnectsRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: QuickConnectSearchFilter;
  SearchCriteria?: QuickConnectSearchCriteria;
}
export interface SearchQuickConnectsResponse {
  QuickConnects?: Array<QuickConnect>;
  NextToken?: string;
  ApproximateTotalCount?: number;
}
export interface SearchResourceTagsRequest {
  InstanceId: string;
  ResourceTypes?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
  SearchCriteria?: ResourceTagsSearchCriteria;
}
export interface SearchResourceTagsResponse {
  Tags?: Array<TagSet>;
  NextToken?: string;
}
export interface SearchRoutingProfilesRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: RoutingProfileSearchFilter;
  SearchCriteria?: RoutingProfileSearchCriteria;
}
export interface SearchRoutingProfilesResponse {
  RoutingProfiles?: Array<RoutingProfile>;
  NextToken?: string;
  ApproximateTotalCount?: number;
}
export interface SearchSecurityProfilesRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchCriteria?: SecurityProfileSearchCriteria;
  SearchFilter?: SecurityProfilesSearchFilter;
}
export interface SearchSecurityProfilesResponse {
  SecurityProfiles?: Array<SecurityProfileSearchSummary>;
  NextToken?: string;
  ApproximateTotalCount?: number;
}
export type SearchText = string;

export type SearchTextList = Array<string>;
export interface SearchUserHierarchyGroupsRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: UserHierarchyGroupSearchFilter;
  SearchCriteria?: UserHierarchyGroupSearchCriteria;
}
export interface SearchUserHierarchyGroupsResponse {
  UserHierarchyGroups?: Array<HierarchyGroup>;
  NextToken?: string;
  ApproximateTotalCount?: number;
}
export interface SearchUsersRequest {
  InstanceId: string;
  NextToken?: string;
  MaxResults?: number;
  SearchFilter?: UserSearchFilter;
  SearchCriteria?: UserSearchCriteria;
}
export interface SearchUsersResponse {
  Users?: Array<UserSearchSummary>;
  NextToken?: string;
  ApproximateTotalCount?: number;
}
export interface SearchVocabulariesRequest {
  InstanceId: string;
  MaxResults?: number;
  NextToken?: string;
  State?: VocabularyState;
  NameStartsWith?: string;
  LanguageCode?: VocabularyLanguageCode;
}
export interface SearchVocabulariesResponse {
  VocabularySummaryList?: Array<VocabularySummary>;
  NextToken?: string;
}
export interface SecurityKey {
  AssociationId?: string;
  Key?: string;
  CreationTime?: Date | string;
}
export type SecurityKeysList = Array<SecurityKey>;
export interface SecurityProfile {
  Id?: string;
  OrganizationResourceId?: string;
  Arn?: string;
  SecurityProfileName?: string;
  Description?: string;
  Tags?: Record<string, string>;
  AllowedAccessControlTags?: Record<string, string>;
  TagRestrictedResources?: Array<string>;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
  HierarchyRestrictedResources?: Array<string>;
  AllowedAccessControlHierarchyGroupId?: string;
}
export type SecurityProfileDescription = string;

export type SecurityProfileId = string;

export type SecurityProfileIds = Array<string>;
export type SecurityProfileName = string;

export type SecurityProfilePermission = string;

export type SecurityProfilePolicyKey = string;

export type SecurityProfilePolicyValue = string;

export type SecurityProfileSearchConditionList =
  Array<SecurityProfileSearchCriteria>;
export interface SecurityProfileSearchCriteria {
  OrConditions?: Array<SecurityProfileSearchCriteria>;
  AndConditions?: Array<SecurityProfileSearchCriteria>;
  StringCondition?: StringCondition;
}
export interface SecurityProfileSearchSummary {
  Id?: string;
  OrganizationResourceId?: string;
  Arn?: string;
  SecurityProfileName?: string;
  Description?: string;
  Tags?: Record<string, string>;
}
export interface SecurityProfilesSearchFilter {
  TagFilter?: ControlPlaneTagFilter;
}
export type SecurityProfilesSearchSummaryList =
  Array<SecurityProfileSearchSummary>;
export interface SecurityProfileSummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export type SecurityProfileSummaryList = Array<SecurityProfileSummary>;
export type SecurityToken = string;

export type SegmentAttributeName = string;

export type SegmentAttributes = Record<string, SegmentAttributeValue>;
export interface SegmentAttributeValue {
  ValueString?: string;
  ValueMap?: Record<string, SegmentAttributeValue>;
  ValueInteger?: number;
}
export type SegmentAttributeValueInteger = number;

export type SegmentAttributeValueMap = Record<string, SegmentAttributeValue>;
export type SegmentAttributeValueString = string;

export interface SendChatIntegrationEventRequest {
  SourceId: string;
  DestinationId: string;
  Subtype?: string;
  Event: ChatEvent;
  NewSessionDetails?: NewSessionDetails;
}
export interface SendChatIntegrationEventResponse {
  InitialContactId?: string;
  NewChatCreated?: boolean;
}
export interface SendNotificationActionDefinition {
  DeliveryMethod: NotificationDeliveryType;
  Subject?: string;
  Content: string;
  ContentType: NotificationContentType;
  Recipient: NotificationRecipientType;
}
export interface SendOutboundEmailRequest {
  InstanceId: string;
  FromEmailAddress: EmailAddressInfo;
  DestinationEmailAddress: EmailAddressInfo;
  AdditionalRecipients?: OutboundAdditionalRecipients;
  EmailMessage: OutboundEmailContent;
  TrafficType: TrafficType;
  SourceCampaign?: SourceCampaign;
  ClientToken?: string;
}
export interface SendOutboundEmailResponse {}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
  readonly Reason?: ServiceQuotaExceededExceptionReason;
}> {}
export type ServiceQuotaExceededExceptionReason = {
  AttachedFileServiceQuotaExceededExceptionReason: AttachedFileServiceQuotaExceededExceptionReason;
};
export interface SignInConfig {
  Distributions: Array<SignInDistribution>;
}
export interface SignInDistribution {
  Region: string;
  Enabled: boolean;
}
export type SignInDistributionList = Array<SignInDistribution>;
export type SingleSelectOptions = Array<string>;
export interface SingleSelectQuestionRuleCategoryAutomation {
  Category: string;
  Condition: SingleSelectQuestionRuleCategoryAutomationCondition;
  OptionRefId: string;
}
export type SingleSelectQuestionRuleCategoryAutomationCondition =
  | "PRESENT"
  | "NOT_PRESENT";
export type SingleSelectQuestionRuleCategoryAutomationLabel = string;

export type SlaAssignmentType = "CASES";
export type SlaFieldValueUnionList = Array<FieldValueUnion>;
export type SlaName = string;

export type SlaType = "CASE_FIELD";
export type SnapshotVersion = string;

export interface Sort {
  FieldName: SortableFieldName;
  Order: SortOrder;
}
export type SortableFieldName =
  | "INITIATION_TIMESTAMP"
  | "SCHEDULED_TIMESTAMP"
  | "CONNECTED_TO_AGENT_TIMESTAMP"
  | "DISCONNECT_TIMESTAMP"
  | "INITIATION_METHOD"
  | "CHANNEL";
export type SortOrder = "ASCENDING" | "DESCENDING";
export type SourceApplicationName = string;

export interface SourceCampaign {
  CampaignId?: string;
  OutboundRequestId?: string;
}
export type SourceId = string;

export type SourceType = "SALESFORCE" | "ZENDESK" | "CASES";
export interface StartAttachedFileUploadRequest {
  ClientToken?: string;
  InstanceId: string;
  FileName: string;
  FileSizeInBytes: number;
  UrlExpiryInSeconds?: number;
  FileUseCaseType: FileUseCaseType;
  AssociatedResourceArn: string;
  CreatedBy?: CreatedByInfo;
  Tags?: Record<string, string>;
}
export interface StartAttachedFileUploadResponse {
  FileArn?: string;
  FileId?: string;
  CreationTime?: string;
  FileStatus?: FileStatusType;
  CreatedBy?: CreatedByInfo;
  UploadUrlMetadata?: UploadUrlMetadata;
}
export interface StartChatContactRequest {
  InstanceId: string;
  ContactFlowId: string;
  Attributes?: Record<string, string>;
  ParticipantDetails: ParticipantDetails;
  InitialMessage?: ChatMessage;
  ClientToken?: string;
  ChatDurationInMinutes?: number;
  SupportedMessagingContentTypes?: Array<string>;
  PersistentChat?: PersistentChat;
  RelatedContactId?: string;
  SegmentAttributes?: Record<string, SegmentAttributeValue>;
  CustomerId?: string;
}
export interface StartChatContactResponse {
  ContactId?: string;
  ParticipantId?: string;
  ParticipantToken?: string;
  ContinuedFromContactId?: string;
}
export interface StartContactEvaluationRequest {
  InstanceId: string;
  ContactId: string;
  EvaluationFormId: string;
  ClientToken?: string;
}
export interface StartContactEvaluationResponse {
  EvaluationId: string;
  EvaluationArn: string;
}
export interface StartContactRecordingRequest {
  InstanceId: string;
  ContactId: string;
  InitialContactId: string;
  VoiceRecordingConfiguration: VoiceRecordingConfiguration;
}
export interface StartContactRecordingResponse {}
export interface StartContactStreamingRequest {
  InstanceId: string;
  ContactId: string;
  ChatStreamingConfiguration: ChatStreamingConfiguration;
  ClientToken: string;
}
export interface StartContactStreamingResponse {
  StreamingId: string;
}
export interface StartEmailContactRequest {
  InstanceId: string;
  FromEmailAddress: EmailAddressInfo;
  DestinationEmailAddress: string;
  Description?: string;
  References?: Record<string, Reference>;
  Name?: string;
  EmailMessage: InboundEmailContent;
  AdditionalRecipients?: InboundAdditionalRecipients;
  Attachments?: Array<EmailAttachment>;
  ContactFlowId?: string;
  RelatedContactId?: string;
  Attributes?: Record<string, string>;
  SegmentAttributes?: Record<string, SegmentAttributeValue>;
  ClientToken?: string;
}
export interface StartEmailContactResponse {
  ContactId?: string;
}
export interface StartOutboundChatContactRequest {
  SourceEndpoint: Endpoint;
  DestinationEndpoint: Endpoint;
  InstanceId: string;
  SegmentAttributes: Record<string, SegmentAttributeValue>;
  Attributes?: Record<string, string>;
  ContactFlowId: string;
  ChatDurationInMinutes?: number;
  ParticipantDetails?: ParticipantDetails;
  InitialSystemMessage?: ChatMessage;
  RelatedContactId?: string;
  SupportedMessagingContentTypes?: Array<string>;
  ClientToken?: string;
}
export interface StartOutboundChatContactResponse {
  ContactId?: string;
}
export interface StartOutboundEmailContactRequest {
  InstanceId: string;
  ContactId: string;
  FromEmailAddress?: EmailAddressInfo;
  DestinationEmailAddress: EmailAddressInfo;
  AdditionalRecipients?: OutboundAdditionalRecipients;
  EmailMessage: OutboundEmailContent;
  ClientToken?: string;
}
export interface StartOutboundEmailContactResponse {
  ContactId?: string;
}
export interface StartOutboundVoiceContactRequest {
  Name?: string;
  Description?: string;
  References?: Record<string, Reference>;
  RelatedContactId?: string;
  DestinationPhoneNumber: string;
  ContactFlowId: string;
  InstanceId: string;
  ClientToken?: string;
  SourcePhoneNumber?: string;
  QueueId?: string;
  Attributes?: Record<string, string>;
  AnswerMachineDetectionConfig?: AnswerMachineDetectionConfig;
  CampaignId?: string;
  TrafficType?: TrafficType;
}
export interface StartOutboundVoiceContactResponse {
  ContactId?: string;
}
export interface StartScreenSharingRequest {
  ClientToken?: string;
  InstanceId: string;
  ContactId: string;
}
export interface StartScreenSharingResponse {}
export interface StartTaskContactRequest {
  InstanceId: string;
  PreviousContactId?: string;
  ContactFlowId?: string;
  Attributes?: Record<string, string>;
  Name: string;
  References?: Record<string, Reference>;
  Description?: string;
  ClientToken?: string;
  ScheduledTime?: Date | string;
  TaskTemplateId?: string;
  QuickConnectId?: string;
  RelatedContactId?: string;
  SegmentAttributes?: Record<string, SegmentAttributeValue>;
}
export interface StartTaskContactResponse {
  ContactId?: string;
}
export interface StartWebRTCContactRequest {
  Attributes?: Record<string, string>;
  ClientToken?: string;
  ContactFlowId: string;
  InstanceId: string;
  AllowedCapabilities?: AllowedCapabilities;
  ParticipantDetails: ParticipantDetails;
  RelatedContactId?: string;
  References?: Record<string, Reference>;
  Description?: string;
}
export interface StartWebRTCContactResponse {
  ConnectionData?: ConnectionData;
  ContactId?: string;
  ParticipantId?: string;
  ParticipantToken?: string;
}
export interface StateTransition {
  State?: ParticipantState;
  StateStartTimestamp?: Date | string;
  StateEndTimestamp?: Date | string;
}
export type StateTransitions = Array<StateTransition>;
export type Statistic = "SUM" | "MAX" | "AVG";
export type Status = "COMPLETE" | "IN_PROGRESS" | "DELETED";
export interface Step {
  Expiry?: Expiry;
  Expression?: Expression;
  Status?: RoutingCriteriaStepStatus;
}
export type Steps = Array<Step>;
export interface StopContactRecordingRequest {
  InstanceId: string;
  ContactId: string;
  InitialContactId: string;
  ContactRecordingType?: ContactRecordingType;
}
export interface StopContactRecordingResponse {}
export interface StopContactRequest {
  ContactId: string;
  InstanceId: string;
  DisconnectReason?: DisconnectReason;
}
export interface StopContactResponse {}
export interface StopContactStreamingRequest {
  InstanceId: string;
  ContactId: string;
  StreamingId: string;
}
export interface StopContactStreamingResponse {}
export type StorageType =
  | "S3"
  | "KINESIS_VIDEO_STREAM"
  | "KINESIS_STREAM"
  | "KINESIS_FIREHOSE";
export type StreamingId = string;

export type StringComparisonType = "STARTS_WITH" | "CONTAINS" | "EXACT";
export interface StringCondition {
  FieldName?: string;
  Value?: string;
  ComparisonType?: StringComparisonType;
}
export interface StringReference {
  Name?: string;
  Value?: string;
}
export type Subject = string;

export interface SubmitAutoEvaluationActionDefinition {
  EvaluationFormId: string;
}
export interface SubmitContactEvaluationRequest {
  InstanceId: string;
  EvaluationId: string;
  Answers?: Record<string, EvaluationAnswerInput>;
  Notes?: Record<string, EvaluationNote>;
}
export interface SubmitContactEvaluationResponse {
  EvaluationId: string;
  EvaluationArn: string;
}
export type Subtype = string;

export interface SuccessfulRequest {
  RequestIdentifier?: string;
  ContactId?: string;
}
export type SuccessfulRequestList = Array<SuccessfulRequest>;
export type SupportedMessagingContentType = string;

export type SupportedMessagingContentTypes = Array<string>;
export interface SuspendContactRecordingRequest {
  InstanceId: string;
  ContactId: string;
  InitialContactId: string;
  ContactRecordingType?: ContactRecordingType;
}
export interface SuspendContactRecordingResponse {}
export type TagAndConditionList = Array<TagCondition>;
export interface TagCondition {
  TagKey?: string;
  TagValue?: string;
}
export interface TagContactRequest {
  ContactId: string;
  InstanceId: string;
  Tags: Record<string, string>;
}
export interface TagContactResponse {}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagKeyString = string;

export type TagMap = Record<string, string>;
export type TagOrConditionList = Array<Array<TagCondition>>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export type TagRestrictedResourceList = Array<string>;
export type TagRestrictedResourceName = string;

export interface TagSearchCondition {
  tagKey?: string;
  tagValue?: string;
  tagKeyComparisonType?: StringComparisonType;
  tagValueComparisonType?: StringComparisonType;
}
export interface TagSet {
  key?: string;
  value?: string;
}
export type TagsList = Array<TagSet>;
export type TagValue = string;

export type TagValueString = string;

export type TargetListType = "PROFICIENCIES";
export type TargetSlaMinutes = number;

export interface TaskActionDefinition {
  Name: string;
  Description?: string;
  ContactFlowId: string;
  References?: Record<string, Reference>;
}
export type TaskDescriptionExpression = string;

export type TaskNameExpression = string;

export type TaskTemplateArn = string;

export interface TaskTemplateConstraints {
  RequiredFields?: Array<RequiredFieldInfo>;
  ReadOnlyFields?: Array<ReadOnlyFieldInfo>;
  InvisibleFields?: Array<InvisibleFieldInfo>;
}
export interface TaskTemplateDefaultFieldValue {
  Id?: TaskTemplateFieldIdentifier;
  DefaultValue?: string;
}
export type TaskTemplateDefaultFieldValueList =
  Array<TaskTemplateDefaultFieldValue>;
export interface TaskTemplateDefaults {
  DefaultFieldValues?: Array<TaskTemplateDefaultFieldValue>;
}
export type TaskTemplateDescription = string;

export interface TaskTemplateField {
  Id: TaskTemplateFieldIdentifier;
  Description?: string;
  Type?: TaskTemplateFieldType;
  SingleSelectOptions?: Array<string>;
}
export type TaskTemplateFieldDescription = string;

export interface TaskTemplateFieldIdentifier {
  Name?: string;
}
export type TaskTemplateFieldName = string;

export type TaskTemplateFields = Array<TaskTemplateField>;
export type TaskTemplateFieldType =
  | "NAME"
  | "DESCRIPTION"
  | "SCHEDULED_TIME"
  | "QUICK_CONNECT"
  | "URL"
  | "NUMBER"
  | "TEXT"
  | "TEXT_AREA"
  | "DATE_TIME"
  | "BOOLEAN"
  | "SINGLE_SELECT"
  | "EMAIL"
  | "SELF_ASSIGN"
  | "EXPIRY_DURATION";
export type TaskTemplateFieldValue = string;

export type TaskTemplateId = string;

export type TaskTemplateList = Array<TaskTemplateMetadata>;
export interface TaskTemplateMetadata {
  Id?: string;
  Arn?: string;
  Name?: string;
  Description?: string;
  Status?: TaskTemplateStatus;
  LastModifiedTime?: Date | string;
  CreatedTime?: Date | string;
}
export type TaskTemplateName = string;

export type TaskTemplateSingleSelectOption = string;

export type TaskTemplateStatus = "ACTIVE" | "INACTIVE";
export interface TelephonyConfig {
  Distributions: Array<Distribution>;
}
export interface TemplateAttributes {
  CustomAttributes?: Record<string, string>;
  CustomerProfileAttributes?: string;
}
export interface TemplatedMessageConfig {
  KnowledgeBaseId: string;
  MessageTemplateId: string;
  TemplateAttributes: TemplateAttributes;
}
export type TemplateId = string;

export interface Threshold {
  Comparison?: Comparison;
  ThresholdValue?: number;
}
export type ThresholdCollections = Array<ThresholdV2>;
export interface ThresholdV2 {
  Comparison?: string;
  ThresholdValue?: number;
}
export type ThresholdValue = number;

export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export type TimerEligibleParticipantRoles = "CUSTOMER" | "AGENT";
export type Timestamp = Date | string;

export type TimeZone = string;

export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message?: string;
}> {}
export type TotalCount = number;

export type TotalPauseCount = number;

export type TotalPauseDurationInSeconds = number;

export interface TrafficDistributionGroup {
  Id?: string;
  Arn?: string;
  Name?: string;
  Description?: string;
  InstanceArn?: string;
  Status?: TrafficDistributionGroupStatus;
  Tags?: Record<string, string>;
  IsDefault?: boolean;
}
export type TrafficDistributionGroupArn = string;

export type TrafficDistributionGroupId = string;

export type TrafficDistributionGroupIdOrArn = string;

export type TrafficDistributionGroupStatus =
  | "CREATION_IN_PROGRESS"
  | "ACTIVE"
  | "CREATION_FAILED"
  | "PENDING_DELETION"
  | "DELETION_FAILED"
  | "UPDATE_IN_PROGRESS";
export interface TrafficDistributionGroupSummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  InstanceArn?: string;
  Status?: TrafficDistributionGroupStatus;
  IsDefault?: boolean;
}
export type TrafficDistributionGroupSummaryList =
  Array<TrafficDistributionGroupSummary>;
export interface TrafficDistributionGroupUserSummary {
  UserId?: string;
}
export type TrafficDistributionGroupUserSummaryList =
  Array<TrafficDistributionGroupUserSummary>;
export type TrafficType = "GENERAL" | "CAMPAIGN";
export interface Transcript {
  Criteria: Array<TranscriptCriteria>;
  MatchType?: SearchContactsMatchType;
}
export interface TranscriptCriteria {
  ParticipantRole: ParticipantRole;
  SearchText: Array<string>;
  MatchType: SearchContactsMatchType;
}
export type TranscriptCriteriaList = Array<TranscriptCriteria>;
export interface TransferContactRequest {
  InstanceId: string;
  ContactId: string;
  QueueId?: string;
  UserId?: string;
  ContactFlowId: string;
  ClientToken?: string;
}
export interface TransferContactResponse {
  ContactId?: string;
  ContactArn?: string;
}
export interface UntagContactRequest {
  ContactId: string;
  InstanceId: string;
  TagKeys: Array<string>;
}
export interface UntagContactResponse {}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export type UpdateAgentStatusDescription = string;

export interface UpdateAgentStatusRequest {
  InstanceId: string;
  AgentStatusId: string;
  Name?: string;
  Description?: string;
  State?: AgentStatusState;
  DisplayOrder?: number;
  ResetOrderNumber?: boolean;
}
export interface UpdateAuthenticationProfileRequest {
  AuthenticationProfileId: string;
  InstanceId: string;
  Name?: string;
  Description?: string;
  AllowedIps?: Array<string>;
  BlockedIps?: Array<string>;
  PeriodicSessionDuration?: number;
}
export interface UpdateCaseActionDefinition {
  Fields: Array<FieldValue>;
}
export interface UpdateContactAttributesRequest {
  InitialContactId: string;
  InstanceId: string;
  Attributes: Record<string, string>;
}
export interface UpdateContactAttributesResponse {}
export interface UpdateContactEvaluationRequest {
  InstanceId: string;
  EvaluationId: string;
  Answers?: Record<string, EvaluationAnswerInput>;
  Notes?: Record<string, EvaluationNote>;
}
export interface UpdateContactEvaluationResponse {
  EvaluationId: string;
  EvaluationArn: string;
}
export interface UpdateContactFlowContentRequest {
  InstanceId: string;
  ContactFlowId: string;
  Content: string;
}
export interface UpdateContactFlowContentResponse {}
export interface UpdateContactFlowMetadataRequest {
  InstanceId: string;
  ContactFlowId: string;
  Name?: string;
  Description?: string;
  ContactFlowState?: ContactFlowState;
}
export interface UpdateContactFlowMetadataResponse {}
export interface UpdateContactFlowModuleContentRequest {
  InstanceId: string;
  ContactFlowModuleId: string;
  Content: string;
}
export interface UpdateContactFlowModuleContentResponse {}
export interface UpdateContactFlowModuleMetadataRequest {
  InstanceId: string;
  ContactFlowModuleId: string;
  Name?: string;
  Description?: string;
  State?: ContactFlowModuleState;
}
export interface UpdateContactFlowModuleMetadataResponse {}
export interface UpdateContactFlowNameRequest {
  InstanceId: string;
  ContactFlowId: string;
  Name?: string;
  Description?: string;
}
export interface UpdateContactFlowNameResponse {}
export interface UpdateContactRequest {
  InstanceId: string;
  ContactId: string;
  Name?: string;
  Description?: string;
  References?: Record<string, Reference>;
  SegmentAttributes?: Record<string, SegmentAttributeValue>;
  QueueInfo?: QueueInfoInput;
  UserInfo?: UserInfo;
  CustomerEndpoint?: Endpoint;
  SystemEndpoint?: Endpoint;
}
export interface UpdateContactResponse {}
export interface UpdateContactRoutingDataRequest {
  InstanceId: string;
  ContactId: string;
  QueueTimeAdjustmentSeconds?: number;
  QueuePriority?: number;
  RoutingCriteria?: RoutingCriteriaInput;
}
export interface UpdateContactRoutingDataResponse {}
export interface UpdateContactScheduleRequest {
  InstanceId: string;
  ContactId: string;
  ScheduledTime: Date | string;
}
export interface UpdateContactScheduleResponse {}
export interface UpdateEmailAddressMetadataRequest {
  InstanceId: string;
  EmailAddressId: string;
  Description?: string;
  DisplayName?: string;
  ClientToken?: string;
}
export interface UpdateEmailAddressMetadataResponse {
  EmailAddressId?: string;
  EmailAddressArn?: string;
}
export interface UpdateEvaluationFormRequest {
  InstanceId: string;
  EvaluationFormId: string;
  EvaluationFormVersion: number;
  CreateNewVersion?: boolean;
  Title: string;
  Description?: string;
  Items: Array<EvaluationFormItem>;
  ScoringStrategy?: EvaluationFormScoringStrategy;
  ClientToken?: string;
}
export interface UpdateEvaluationFormResponse {
  EvaluationFormId: string;
  EvaluationFormArn: string;
  EvaluationFormVersion: number;
}
export type UpdateHoursOfOperationDescription = string;

export interface UpdateHoursOfOperationOverrideRequest {
  InstanceId: string;
  HoursOfOperationId: string;
  HoursOfOperationOverrideId: string;
  Name?: string;
  Description?: string;
  Config?: Array<HoursOfOperationOverrideConfig>;
  EffectiveFrom?: string;
  EffectiveTill?: string;
}
export interface UpdateHoursOfOperationRequest {
  InstanceId: string;
  HoursOfOperationId: string;
  Name?: string;
  Description?: string;
  TimeZone?: string;
  Config?: Array<HoursOfOperationConfig>;
}
export interface UpdateInstanceAttributeRequest {
  InstanceId: string;
  AttributeType: InstanceAttributeType;
  Value: string;
  ClientToken?: string;
}
export interface UpdateInstanceStorageConfigRequest {
  InstanceId: string;
  AssociationId: string;
  ResourceType: InstanceStorageResourceType;
  StorageConfig: InstanceStorageConfig;
  ClientToken?: string;
}
export interface UpdateParticipantAuthenticationRequest {
  State: string;
  InstanceId: string;
  Code?: string;
  Error?: string;
  ErrorDescription?: string;
}
export interface UpdateParticipantAuthenticationResponse {}
export type UpdateParticipantRoleConfigChannelInfo = {
  Chat: ChatParticipantRoleConfig;
};
export interface UpdateParticipantRoleConfigRequest {
  InstanceId: string;
  ContactId: string;
  ChannelConfiguration: UpdateParticipantRoleConfigChannelInfo;
}
export interface UpdateParticipantRoleConfigResponse {}
export interface UpdatePhoneNumberMetadataRequest {
  PhoneNumberId: string;
  PhoneNumberDescription?: string;
  ClientToken?: string;
}
export interface UpdatePhoneNumberRequest {
  PhoneNumberId: string;
  TargetArn?: string;
  InstanceId?: string;
  ClientToken?: string;
}
export interface UpdatePhoneNumberResponse {
  PhoneNumberId?: string;
  PhoneNumberArn?: string;
}
export interface UpdatePredefinedAttributeRequest {
  InstanceId: string;
  Name: string;
  Values?: PredefinedAttributeValues;
}
export interface UpdatePromptRequest {
  InstanceId: string;
  PromptId: string;
  Name?: string;
  Description?: string;
  S3Uri?: string;
}
export interface UpdatePromptResponse {
  PromptARN?: string;
  PromptId?: string;
}
export interface UpdateQueueHoursOfOperationRequest {
  InstanceId: string;
  QueueId: string;
  HoursOfOperationId: string;
}
export interface UpdateQueueMaxContactsRequest {
  InstanceId: string;
  QueueId: string;
  MaxContacts?: number;
}
export interface UpdateQueueNameRequest {
  InstanceId: string;
  QueueId: string;
  Name?: string;
  Description?: string;
}
export interface UpdateQueueOutboundCallerConfigRequest {
  InstanceId: string;
  QueueId: string;
  OutboundCallerConfig: OutboundCallerConfig;
}
export interface UpdateQueueOutboundEmailConfigRequest {
  InstanceId: string;
  QueueId: string;
  OutboundEmailConfig: OutboundEmailConfig;
}
export interface UpdateQueueStatusRequest {
  InstanceId: string;
  QueueId: string;
  Status: QueueStatus;
}
export interface UpdateQuickConnectConfigRequest {
  InstanceId: string;
  QuickConnectId: string;
  QuickConnectConfig: QuickConnectConfig;
}
export type UpdateQuickConnectDescription = string;

export interface UpdateQuickConnectNameRequest {
  InstanceId: string;
  QuickConnectId: string;
  Name?: string;
  Description?: string;
}
export interface UpdateRoutingProfileAgentAvailabilityTimerRequest {
  InstanceId: string;
  RoutingProfileId: string;
  AgentAvailabilityTimer: AgentAvailabilityTimer;
}
export interface UpdateRoutingProfileConcurrencyRequest {
  InstanceId: string;
  RoutingProfileId: string;
  MediaConcurrencies: Array<MediaConcurrency>;
}
export interface UpdateRoutingProfileDefaultOutboundQueueRequest {
  InstanceId: string;
  RoutingProfileId: string;
  DefaultOutboundQueueId: string;
}
export interface UpdateRoutingProfileNameRequest {
  InstanceId: string;
  RoutingProfileId: string;
  Name?: string;
  Description?: string;
}
export interface UpdateRoutingProfileQueuesRequest {
  InstanceId: string;
  RoutingProfileId: string;
  QueueConfigs: Array<RoutingProfileQueueConfig>;
}
export interface UpdateRuleRequest {
  RuleId: string;
  InstanceId: string;
  Name: string;
  Function: string;
  Actions: Array<RuleAction>;
  PublishStatus: RulePublishStatus;
}
export interface UpdateSecurityProfileRequest {
  Description?: string;
  Permissions?: Array<string>;
  SecurityProfileId: string;
  InstanceId: string;
  AllowedAccessControlTags?: Record<string, string>;
  TagRestrictedResources?: Array<string>;
  Applications?: Array<Application>;
  HierarchyRestrictedResources?: Array<string>;
  AllowedAccessControlHierarchyGroupId?: string;
}
export interface UpdateTaskTemplateRequest {
  TaskTemplateId: string;
  InstanceId: string;
  Name?: string;
  Description?: string;
  ContactFlowId?: string;
  SelfAssignFlowId?: string;
  Constraints?: TaskTemplateConstraints;
  Defaults?: TaskTemplateDefaults;
  Status?: TaskTemplateStatus;
  Fields?: Array<TaskTemplateField>;
}
export interface UpdateTaskTemplateResponse {
  InstanceId?: string;
  Id?: string;
  Arn?: string;
  Name?: string;
  Description?: string;
  ContactFlowId?: string;
  SelfAssignFlowId?: string;
  Constraints?: TaskTemplateConstraints;
  Defaults?: TaskTemplateDefaults;
  Fields?: Array<TaskTemplateField>;
  Status?: TaskTemplateStatus;
  LastModifiedTime?: Date | string;
  CreatedTime?: Date | string;
}
export interface UpdateTrafficDistributionRequest {
  Id: string;
  TelephonyConfig?: TelephonyConfig;
  SignInConfig?: SignInConfig;
  AgentConfig?: AgentConfig;
}
export interface UpdateTrafficDistributionResponse {}
export interface UpdateUserHierarchyGroupNameRequest {
  Name: string;
  HierarchyGroupId: string;
  InstanceId: string;
}
export interface UpdateUserHierarchyRequest {
  HierarchyGroupId?: string;
  UserId: string;
  InstanceId: string;
}
export interface UpdateUserHierarchyStructureRequest {
  HierarchyStructure: HierarchyStructureUpdate;
  InstanceId: string;
}
export interface UpdateUserIdentityInfoRequest {
  IdentityInfo: UserIdentityInfo;
  UserId: string;
  InstanceId: string;
}
export interface UpdateUserPhoneConfigRequest {
  PhoneConfig: UserPhoneConfig;
  UserId: string;
  InstanceId: string;
}
export interface UpdateUserProficienciesRequest {
  InstanceId: string;
  UserId: string;
  UserProficiencies: Array<UserProficiency>;
}
export interface UpdateUserRoutingProfileRequest {
  RoutingProfileId: string;
  UserId: string;
  InstanceId: string;
}
export interface UpdateUserSecurityProfilesRequest {
  SecurityProfileIds: Array<string>;
  UserId: string;
  InstanceId: string;
}
export interface UpdateViewContentRequest {
  InstanceId: string;
  ViewId: string;
  Status: ViewStatus;
  Content: ViewInputContent;
}
export interface UpdateViewContentResponse {
  View?: View;
}
export interface UpdateViewMetadataRequest {
  InstanceId: string;
  ViewId: string;
  Name?: string;
  Description?: string;
}
export interface UpdateViewMetadataResponse {}
export interface UploadUrlMetadata {
  Url?: string;
  UrlExpiry?: string;
  HeadersToInclude?: Record<string, string>;
}
export type URI = string;

export type Url = string;

export type URLExpiryInSeconds = number;

export type UrlMetadataSignedHeaders = Record<string, string>;
export type UrlMetadataSignedHeadersKey = string;

export type UrlMetadataSignedHeadersValue = string;

export interface UrlReference {
  Name?: string;
  Value?: string;
}
export interface UseCase {
  UseCaseId?: string;
  UseCaseArn?: string;
  UseCaseType?: UseCaseType;
}
export type UseCaseId = string;

export type UseCaseSummaryList = Array<UseCase>;
export type UseCaseType = "RULES_EVALUATION" | "CONNECT_CAMPAIGNS";
export interface User {
  Id?: string;
  Arn?: string;
  Username?: string;
  IdentityInfo?: UserIdentityInfo;
  PhoneConfig?: UserPhoneConfig;
  DirectoryUserId?: string;
  SecurityProfileIds?: Array<string>;
  RoutingProfileId?: string;
  HierarchyGroupId?: string;
  Tags?: Record<string, string>;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export interface UserData {
  User?: UserReference;
  RoutingProfile?: RoutingProfileReference;
  HierarchyPath?: HierarchyPathReference;
  Status?: AgentStatusReference;
  AvailableSlotsByChannel?: Record<Channel, number>;
  MaxSlotsByChannel?: Record<Channel, number>;
  ActiveSlotsByChannel?: Record<Channel, number>;
  Contacts?: Array<AgentContactReference>;
  NextStatus?: string;
}
export interface UserDataFilters {
  Queues?: Array<string>;
  ContactFilter?: ContactFilter;
  RoutingProfiles?: Array<string>;
  Agents?: Array<string>;
  UserHierarchyGroups?: Array<string>;
}
export type UserDataHierarchyGroups = Array<string>;
export type UserDataList = Array<UserData>;
export type UserHierarchyGroupList = Array<HierarchyGroup>;
export type UserHierarchyGroupSearchConditionList =
  Array<UserHierarchyGroupSearchCriteria>;
export interface UserHierarchyGroupSearchCriteria {
  OrConditions?: Array<UserHierarchyGroupSearchCriteria>;
  AndConditions?: Array<UserHierarchyGroupSearchCriteria>;
  StringCondition?: StringCondition;
}
export interface UserHierarchyGroupSearchFilter {
  AttributeFilter?: ControlPlaneAttributeFilter;
}
export type UserId = string;

export interface UserIdentityInfo {
  FirstName?: string;
  LastName?: string;
  Email?: string;
  SecondaryEmail?: string;
  Mobile?: string;
}
export interface UserIdentityInfoLite {
  FirstName?: string;
  LastName?: string;
}
export type UserIdList = Array<string>;
export interface UserInfo {
  UserId?: string;
}
export declare class UserNotFoundException extends EffectData.TaggedError(
  "UserNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface UserPhoneConfig {
  PhoneType: PhoneType;
  AutoAccept?: boolean;
  AfterContactWorkTimeLimit?: number;
  DeskPhoneNumber?: string;
}
export interface UserProficiency {
  AttributeName: string;
  AttributeValue: string;
  Level: number;
}
export interface UserProficiencyDisassociate {
  AttributeName: string;
  AttributeValue: string;
}
export type UserProficiencyDisassociateList =
  Array<UserProficiencyDisassociate>;
export type UserProficiencyList = Array<UserProficiency>;
export interface UserQuickConnectConfig {
  UserId: string;
  ContactFlowId: string;
}
export interface UserReference {
  Id?: string;
  Arn?: string;
}
export type UserSearchConditionList = Array<UserSearchCriteria>;
export interface UserSearchCriteria {
  OrConditions?: Array<UserSearchCriteria>;
  AndConditions?: Array<UserSearchCriteria>;
  StringCondition?: StringCondition;
  ListCondition?: ListCondition;
  HierarchyGroupCondition?: HierarchyGroupCondition;
}
export interface UserSearchFilter {
  TagFilter?: ControlPlaneTagFilter;
  UserAttributeFilter?: ControlPlaneUserAttributeFilter;
}
export interface UserSearchSummary {
  Arn?: string;
  DirectoryUserId?: string;
  HierarchyGroupId?: string;
  Id?: string;
  IdentityInfo?: UserIdentityInfoLite;
  PhoneConfig?: UserPhoneConfig;
  RoutingProfileId?: string;
  SecurityProfileIds?: Array<string>;
  Tags?: Record<string, string>;
  Username?: string;
}
export type UserSearchSummaryList = Array<UserSearchSummary>;
export interface UserSummary {
  Id?: string;
  Arn?: string;
  Username?: string;
  LastModifiedTime?: Date | string;
  LastModifiedRegion?: string;
}
export type UserSummaryList = Array<UserSummary>;
export type UserTagMap = Record<string, string>;
export type Value = number;

export type VersionNumber = number;

export type VideoCapability = "SEND";
export interface View {
  Id?: string;
  Arn?: string;
  Name?: string;
  Status?: ViewStatus;
  Type?: ViewType;
  Description?: string;
  Version?: number;
  VersionDescription?: string;
  Content?: ViewContent;
  Tags?: Record<string, string>;
  CreatedTime?: Date | string;
  LastModifiedTime?: Date | string;
  ViewContentSha256?: string;
}
export type ViewAction = string;

export type ViewActions = Array<string>;
export interface ViewContent {
  InputSchema?: string;
  Template?: string;
  Actions?: Array<string>;
}
export type ViewContentSha256 = string;

export type ViewDescription = string;

export type ViewId = string;

export interface ViewInputContent {
  Template?: string;
  Actions?: Array<string>;
}
export type ViewInputSchema = string;

export type ViewName = string;

export type ViewsClientToken = string;

export type ViewsInstanceId = string;

export type ViewsNextToken = string;

export type ViewsSummaryList = Array<ViewSummary>;
export type ViewStatus = "PUBLISHED" | "SAVED";
export interface ViewSummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  Type?: ViewType;
  Status?: ViewStatus;
  Description?: string;
}
export type ViewTemplate = string;

export type ViewType = "CUSTOMER_MANAGED" | "AWS_MANAGED";
export type ViewVersion = number;

export interface ViewVersionSummary {
  Id?: string;
  Arn?: string;
  Description?: string;
  Name?: string;
  Type?: ViewType;
  Version?: number;
  VersionDescription?: string;
}
export type ViewVersionSummaryList = Array<ViewVersionSummary>;
export interface Vocabulary {
  Name: string;
  Id: string;
  Arn: string;
  LanguageCode: VocabularyLanguageCode;
  State: VocabularyState;
  LastModifiedTime: Date | string;
  FailureReason?: string;
  Content?: string;
  Tags?: Record<string, string>;
}
export type VocabularyContent = string;

export type VocabularyFailureReason = string;

export type VocabularyId = string;

export type VocabularyLanguageCode =
  | "AR_AE"
  | "DE_CH"
  | "DE_DE"
  | "EN_AB"
  | "EN_AU"
  | "EN_GB"
  | "EN_IE"
  | "EN_IN"
  | "EN_US"
  | "EN_WL"
  | "ES_ES"
  | "ES_US"
  | "FR_CA"
  | "FR_FR"
  | "HI_IN"
  | "IT_IT"
  | "JA_JP"
  | "KO_KR"
  | "PT_BR"
  | "PT_PT"
  | "ZH_CN"
  | "EN_NZ"
  | "EN_ZA"
  | "CA_ES"
  | "DA_DK"
  | "FI_FI"
  | "ID_ID"
  | "MS_MY"
  | "NL_NL"
  | "NO_NO"
  | "PL_PL"
  | "SV_SE"
  | "TL_PH";
export type VocabularyLastModifiedTime = Date | string;

export type VocabularyName = string;

export type VocabularyNextToken = string;

export type VocabularyState =
  | "CREATION_IN_PROGRESS"
  | "ACTIVE"
  | "CREATION_FAILED"
  | "DELETE_IN_PROGRESS";
export interface VocabularySummary {
  Name: string;
  Id: string;
  Arn: string;
  LanguageCode: VocabularyLanguageCode;
  State: VocabularyState;
  LastModifiedTime: Date | string;
  FailureReason?: string;
}
export type VocabularySummaryList = Array<VocabularySummary>;
export interface VoiceRecordingConfiguration {
  VoiceRecordingTrack?: VoiceRecordingTrack;
  IvrRecordingTrack?: IvrRecordingTrack;
}
export type VoiceRecordingTrack = "FROM_AGENT" | "TO_AGENT" | "ALL";
export interface WisdomInfo {
  SessionArn?: string;
}
export declare namespace ActivateEvaluationForm {
  export type Input = ActivateEvaluationFormRequest;
  export type Output = ActivateEvaluationFormResponse;
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
  export type Output = AssociateAnalyticsDataSetResponse;
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
  export type Output = AssociateDefaultVocabularyResponse;
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
  export type Output = AssociateFlowResponse;
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
  export type Output = AssociateInstanceStorageConfigResponse;
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
  export type Output = AssociateSecurityKeyResponse;
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
  export type Output = AssociateTrafficDistributionGroupUserResponse;
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
  export type Output = BatchAssociateAnalyticsDataSetResponse;
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
  export type Output = BatchDisassociateAnalyticsDataSetResponse;
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
  export type Output = BatchGetAttachedFileMetadataResponse;
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
  export type Output = BatchGetFlowAssociationResponse;
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
  export type Output = BatchPutContactResponse;
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
  export type Output = ClaimPhoneNumberResponse;
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
  export type Output = CompleteAttachedFileUploadResponse;
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
  export type Output = CreateAgentStatusResponse;
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
  export type Output = CreateContactResponse;
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
  export type Output = CreateContactFlowResponse;
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
  export type Output = CreateContactFlowModuleResponse;
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
  export type Output = CreateContactFlowVersionResponse;
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
  export type Output = CreateEmailAddressResponse;
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
  export type Output = CreateEvaluationFormResponse;
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
  export type Output = CreateHoursOfOperationResponse;
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
  export type Output = CreateHoursOfOperationOverrideResponse;
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
  export type Output = CreateInstanceResponse;
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
  export type Output = CreateIntegrationAssociationResponse;
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
  export type Output = CreateParticipantResponse;
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
  export type Output = CreatePersistentContactAssociationResponse;
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
  export type Output = CreatePromptResponse;
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
  export type Output = CreatePushNotificationRegistrationResponse;
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
  export type Output = CreateQueueResponse;
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
  export type Output = CreateQuickConnectResponse;
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
  export type Output = CreateRoutingProfileResponse;
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
  export type Output = CreateRuleResponse;
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
  export type Output = CreateSecurityProfileResponse;
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
  export type Output = CreateTaskTemplateResponse;
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
  export type Output = CreateTrafficDistributionGroupResponse;
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
  export type Output = CreateUseCaseResponse;
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
  export type Output = CreateUserResponse;
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
  export type Output = CreateUserHierarchyGroupResponse;
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
  export type Output = CreateViewResponse;
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
  export type Output = CreateViewVersionResponse;
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
  export type Output = CreateVocabularyResponse;
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
  export type Output = DeactivateEvaluationFormResponse;
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
  export type Output = DeleteAttachedFileResponse;
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
  export type Output = DeleteContactFlowResponse;
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
  export type Output = DeleteContactFlowModuleResponse;
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
  export type Output = DeleteContactFlowVersionResponse;
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
  export type Output = DeleteEmailAddressResponse;
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
  export type Output = DeletePushNotificationRegistrationResponse;
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
  export type Output = DeleteTaskTemplateResponse;
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
  export type Output = DeleteTrafficDistributionGroupResponse;
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
  export type Output = DeleteViewResponse;
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
  export type Output = DeleteViewVersionResponse;
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
  export type Output = DeleteVocabularyResponse;
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
  export type Output = DescribeAgentStatusResponse;
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
  export type Output = DescribeAuthenticationProfileResponse;
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
  export type Output = DescribeContactResponse;
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
  export type Output = DescribeContactEvaluationResponse;
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeContactFlow {
  export type Input = DescribeContactFlowRequest;
  export type Output = DescribeContactFlowResponse;
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
  export type Output = DescribeContactFlowModuleResponse;
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
  export type Output = DescribeEmailAddressResponse;
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
  export type Output = DescribeEvaluationFormResponse;
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeHoursOfOperation {
  export type Input = DescribeHoursOfOperationRequest;
  export type Output = DescribeHoursOfOperationResponse;
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
  export type Output = DescribeHoursOfOperationOverrideResponse;
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
  export type Output = DescribeInstanceResponse;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeInstanceAttribute {
  export type Input = DescribeInstanceAttributeRequest;
  export type Output = DescribeInstanceAttributeResponse;
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
  export type Output = DescribeInstanceStorageConfigResponse;
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
  export type Output = DescribePhoneNumberResponse;
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
  export type Output = DescribePredefinedAttributeResponse;
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
  export type Output = DescribePromptResponse;
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
  export type Output = DescribeQueueResponse;
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
  export type Output = DescribeQuickConnectResponse;
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
  export type Output = DescribeRoutingProfileResponse;
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
  export type Output = DescribeRuleResponse;
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
  export type Output = DescribeSecurityProfileResponse;
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
  export type Output = DescribeTrafficDistributionGroupResponse;
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
  export type Output = DescribeUserResponse;
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
  export type Output = DescribeUserHierarchyGroupResponse;
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
  export type Output = DescribeUserHierarchyStructureResponse;
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
  export type Output = DescribeViewResponse;
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
  export type Output = DescribeVocabularyResponse;
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
  export type Output = DisassociateFlowResponse;
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
  export type Output = DisassociateTrafficDistributionGroupUserResponse;
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
  export type Output = DismissUserContactResponse;
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
  export type Output = GetAttachedFileResponse;
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
  export type Output = GetContactAttributesResponse;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetCurrentMetricData {
  export type Input = GetCurrentMetricDataRequest;
  export type Output = GetCurrentMetricDataResponse;
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
  export type Output = GetCurrentUserDataResponse;
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
  export type Output = GetEffectiveHoursOfOperationsResponse;
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
  export type Output = GetFederationTokenResponse;
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
  export type Output = GetFlowAssociationResponse;
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
  export type Output = GetMetricDataResponse;
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
  export type Output = GetMetricDataV2Response;
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
  export type Output = GetPromptFileResponse;
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
  export type Output = GetTaskTemplateResponse;
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
  export type Output = GetTrafficDistributionResponse;
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
  export type Output = ImportPhoneNumberResponse;
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
  export type Output = ListAgentStatusResponse;
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
  export type Output = ListAnalyticsDataAssociationsResponse;
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
  export type Output = ListAnalyticsDataLakeDataSetsResponse;
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
  export type Output = ListApprovedOriginsResponse;
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
  export type Output = ListAssociatedContactsResponse;
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
  export type Output = ListAuthenticationProfilesResponse;
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
  export type Output = ListBotsResponse;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListContactEvaluations {
  export type Input = ListContactEvaluationsRequest;
  export type Output = ListContactEvaluationsResponse;
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListContactFlowModules {
  export type Input = ListContactFlowModulesRequest;
  export type Output = ListContactFlowModulesResponse;
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
  export type Output = ListContactFlowsResponse;
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListContactFlowVersions {
  export type Input = ListContactFlowVersionsRequest;
  export type Output = ListContactFlowVersionsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListContactReferences {
  export type Input = ListContactReferencesRequest;
  export type Output = ListContactReferencesResponse;
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
  export type Output = ListDefaultVocabulariesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListEvaluationForms {
  export type Input = ListEvaluationFormsRequest;
  export type Output = ListEvaluationFormsResponse;
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListEvaluationFormVersions {
  export type Input = ListEvaluationFormVersionsRequest;
  export type Output = ListEvaluationFormVersionsResponse;
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListFlowAssociations {
  export type Input = ListFlowAssociationsRequest;
  export type Output = ListFlowAssociationsResponse;
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
  export type Output = ListHoursOfOperationOverridesResponse;
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
  export type Output = ListHoursOfOperationsResponse;
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
  export type Output = ListInstanceAttributesResponse;
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
  export type Output = ListInstancesResponse;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListInstanceStorageConfigs {
  export type Input = ListInstanceStorageConfigsRequest;
  export type Output = ListInstanceStorageConfigsResponse;
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListIntegrationAssociations {
  export type Input = ListIntegrationAssociationsRequest;
  export type Output = ListIntegrationAssociationsResponse;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListLambdaFunctions {
  export type Input = ListLambdaFunctionsRequest;
  export type Output = ListLambdaFunctionsResponse;
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
  export type Output = ListLexBotsResponse;
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
  export type Output = ListPhoneNumbersResponse;
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
  export type Output = ListPhoneNumbersV2Response;
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
  export type Output = ListPredefinedAttributesResponse;
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
  export type Output = ListPromptsResponse;
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
  export type Output = ListQueueQuickConnectsResponse;
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
  export type Output = ListQueuesResponse;
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
  export type Output = ListQuickConnectsResponse;
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
  export type Output = ListRealtimeContactAnalysisSegmentsV2Response;
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
  export type Output = ListRoutingProfileQueuesResponse;
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
  export type Output = ListRoutingProfilesResponse;
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
  export type Output = ListRulesResponse;
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
  export type Output = ListSecurityKeysResponse;
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
  export type Output = ListSecurityProfileApplicationsResponse;
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
  export type Output = ListSecurityProfilePermissionsResponse;
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
  export type Output = ListSecurityProfilesResponse;
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
  export type Output = ListTagsForResourceResponse;
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
  export type Output = ListTaskTemplatesResponse;
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTrafficDistributionGroups {
  export type Input = ListTrafficDistributionGroupsRequest;
  export type Output = ListTrafficDistributionGroupsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTrafficDistributionGroupUsers {
  export type Input = ListTrafficDistributionGroupUsersRequest;
  export type Output = ListTrafficDistributionGroupUsersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListUseCases {
  export type Input = ListUseCasesRequest;
  export type Output = ListUseCasesResponse;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListUserHierarchyGroups {
  export type Input = ListUserHierarchyGroupsRequest;
  export type Output = ListUserHierarchyGroupsResponse;
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
  export type Output = ListUserProficienciesResponse;
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
  export type Output = ListUsersResponse;
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListViews {
  export type Input = ListViewsRequest;
  export type Output = ListViewsResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListViewVersions {
  export type Input = ListViewVersionsRequest;
  export type Output = ListViewVersionsResponse;
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
  export type Output = MonitorContactResponse;
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
  export type Output = PauseContactResponse;
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
  export type Output = PutUserStatusResponse;
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
  export type Output = ReplicateInstanceResponse;
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
  export type Output = ResumeContactResponse;
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
  export type Output = ResumeContactRecordingResponse;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace SearchAgentStatuses {
  export type Input = SearchAgentStatusesRequest;
  export type Output = SearchAgentStatusesResponse;
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
  export type Output = SearchAvailablePhoneNumbersResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidParameterException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SearchContactFlowModules {
  export type Input = SearchContactFlowModulesRequest;
  export type Output = SearchContactFlowModulesResponse;
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
  export type Output = SearchContactFlowsResponse;
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
  export type Output = SearchContactsResponse;
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
  export type Output = SearchEmailAddressesResponse;
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
  export type Output = SearchHoursOfOperationOverridesResponse;
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
  export type Output = SearchHoursOfOperationsResponse;
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
  export type Output = SearchPredefinedAttributesResponse;
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
  export type Output = SearchPromptsResponse;
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
  export type Output = SearchQueuesResponse;
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
  export type Output = SearchQuickConnectsResponse;
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
  export type Output = SearchResourceTagsResponse;
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
  export type Output = SearchRoutingProfilesResponse;
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
  export type Output = SearchSecurityProfilesResponse;
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
  export type Output = SearchUserHierarchyGroupsResponse;
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
  export type Output = SearchUsersResponse;
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
  export type Output = SearchVocabulariesResponse;
  export type Error =
    | AccessDeniedException
    | InternalServiceException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace SendChatIntegrationEvent {
  export type Input = SendChatIntegrationEventRequest;
  export type Output = SendChatIntegrationEventResponse;
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
  export type Output = SendOutboundEmailResponse;
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
  export type Output = StartAttachedFileUploadResponse;
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
  export type Output = StartChatContactResponse;
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
  export type Output = StartContactEvaluationResponse;
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
  export type Output = StartContactRecordingResponse;
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartContactStreaming {
  export type Input = StartContactStreamingRequest;
  export type Output = StartContactStreamingResponse;
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
  export type Output = StartEmailContactResponse;
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
  export type Output = StartOutboundChatContactResponse;
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
  export type Output = StartOutboundEmailContactResponse;
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
  export type Output = StartOutboundVoiceContactResponse;
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
  export type Output = StartScreenSharingResponse;
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
  export type Output = StartTaskContactResponse;
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
  export type Output = StartWebRTCContactResponse;
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
  export type Output = StopContactResponse;
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
  export type Output = StopContactRecordingResponse;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopContactStreaming {
  export type Input = StopContactStreamingRequest;
  export type Output = StopContactStreamingResponse;
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace SubmitContactEvaluation {
  export type Input = SubmitContactEvaluationRequest;
  export type Output = SubmitContactEvaluationResponse;
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
  export type Output = SuspendContactRecordingResponse;
  export type Error =
    | InternalServiceException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagContact {
  export type Input = TagContactRequest;
  export type Output = TagContactResponse;
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
  export type Output = TransferContactResponse;
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
  export type Output = UntagContactResponse;
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
  export type Output = UpdateContactResponse;
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
  export type Output = UpdateContactAttributesResponse;
  export type Error =
    | InternalServiceException
    | InvalidParameterException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateContactEvaluation {
  export type Input = UpdateContactEvaluationRequest;
  export type Output = UpdateContactEvaluationResponse;
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
  export type Output = UpdateContactFlowContentResponse;
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
  export type Output = UpdateContactFlowMetadataResponse;
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
  export type Output = UpdateContactFlowModuleContentResponse;
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
  export type Output = UpdateContactFlowModuleMetadataResponse;
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
  export type Output = UpdateContactFlowNameResponse;
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
  export type Output = UpdateContactRoutingDataResponse;
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
  export type Output = UpdateContactScheduleResponse;
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
  export type Output = UpdateEmailAddressMetadataResponse;
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
  export type Output = UpdateEvaluationFormResponse;
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
  export type Output = UpdateParticipantAuthenticationResponse;
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
  export type Output = UpdateParticipantRoleConfigResponse;
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
  export type Output = UpdatePhoneNumberResponse;
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
  export type Output = UpdatePromptResponse;
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
  export type Output = UpdateTaskTemplateResponse;
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
  export type Output = UpdateTrafficDistributionResponse;
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
  export type Output = UpdateViewContentResponse;
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
  export type Output = UpdateViewMetadataResponse;
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
