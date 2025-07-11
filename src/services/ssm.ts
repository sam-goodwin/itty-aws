import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AmazonSSM {
  addTagsToResource(
    input: AddTagsToResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidResourceId | InvalidResourceType | TooManyTagsError | TooManyUpdates | CommonAwsError
  >;
  associateOpsItemRelatedItem(
    input: AssociateOpsItemRelatedItemRequest,
  ): Effect.Effect<
    {},
    InternalServerError | OpsItemConflictException | OpsItemInvalidParameterException | OpsItemLimitExceededException | OpsItemNotFoundException | OpsItemRelatedItemAlreadyExistsException | CommonAwsError
  >;
  cancelCommand(
    input: CancelCommandRequest,
  ): Effect.Effect<
    {},
    DuplicateInstanceId | InternalServerError | InvalidCommandId | InvalidInstanceId | CommonAwsError
  >;
  cancelMaintenanceWindowExecution(
    input: CancelMaintenanceWindowExecutionRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  createActivation(
    input: CreateActivationRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidParameters | CommonAwsError
  >;
  createAssociation(
    input: CreateAssociationRequest,
  ): Effect.Effect<
    {},
    AssociationAlreadyExists | AssociationLimitExceeded | InternalServerError | InvalidDocument | InvalidDocumentVersion | InvalidInstanceId | InvalidOutputLocation | InvalidParameters | InvalidSchedule | InvalidTag | InvalidTarget | InvalidTargetMaps | UnsupportedPlatformType | CommonAwsError
  >;
  createAssociationBatch(
    input: CreateAssociationBatchRequest,
  ): Effect.Effect<
    {},
    AssociationLimitExceeded | DuplicateInstanceId | InternalServerError | InvalidDocument | InvalidDocumentVersion | InvalidInstanceId | InvalidOutputLocation | InvalidParameters | InvalidSchedule | InvalidTarget | InvalidTargetMaps | UnsupportedPlatformType | CommonAwsError
  >;
  createDocument(
    input: CreateDocumentRequest,
  ): Effect.Effect<
    {},
    DocumentAlreadyExists | DocumentLimitExceeded | InternalServerError | InvalidDocumentContent | InvalidDocumentSchemaVersion | MaxDocumentSizeExceeded | TooManyUpdates | CommonAwsError
  >;
  createMaintenanceWindow(
    input: CreateMaintenanceWindowRequest,
  ): Effect.Effect<
    {},
    IdempotentParameterMismatch | InternalServerError | ResourceLimitExceededException | CommonAwsError
  >;
  createOpsItem(
    input: CreateOpsItemRequest,
  ): Effect.Effect<
    {},
    InternalServerError | OpsItemAccessDeniedException | OpsItemAlreadyExistsException | OpsItemInvalidParameterException | OpsItemLimitExceededException | CommonAwsError
  >;
  createOpsMetadata(
    input: CreateOpsMetadataRequest,
  ): Effect.Effect<
    {},
    InternalServerError | OpsMetadataAlreadyExistsException | OpsMetadataInvalidArgumentException | OpsMetadataLimitExceededException | OpsMetadataTooManyUpdatesException | CommonAwsError
  >;
  createPatchBaseline(
    input: CreatePatchBaselineRequest,
  ): Effect.Effect<
    {},
    IdempotentParameterMismatch | InternalServerError | ResourceLimitExceededException | CommonAwsError
  >;
  createResourceDataSync(
    input: CreateResourceDataSyncRequest,
  ): Effect.Effect<
    {},
    InternalServerError | ResourceDataSyncAlreadyExistsException | ResourceDataSyncCountExceededException | ResourceDataSyncInvalidConfigurationException | CommonAwsError
  >;
  deleteActivation(
    input: DeleteActivationRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidActivation | InvalidActivationId | TooManyUpdates | CommonAwsError
  >;
  deleteAssociation(
    input: DeleteAssociationRequest,
  ): Effect.Effect<
    {},
    AssociationDoesNotExist | InternalServerError | InvalidDocument | InvalidInstanceId | TooManyUpdates | CommonAwsError
  >;
  deleteDocument(
    input: DeleteDocumentRequest,
  ): Effect.Effect<
    {},
    AssociatedInstances | InternalServerError | InvalidDocument | InvalidDocumentOperation | TooManyUpdates | CommonAwsError
  >;
  deleteInventory(
    input: DeleteInventoryRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidDeleteInventoryParametersException | InvalidInventoryRequestException | InvalidOptionException | InvalidTypeNameException | CommonAwsError
  >;
  deleteMaintenanceWindow(
    input: DeleteMaintenanceWindowRequest,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  deleteOpsItem(
    input: DeleteOpsItemRequest,
  ): Effect.Effect<
    {},
    InternalServerError | OpsItemInvalidParameterException | CommonAwsError
  >;
  deleteOpsMetadata(
    input: DeleteOpsMetadataRequest,
  ): Effect.Effect<
    {},
    InternalServerError | OpsMetadataInvalidArgumentException | OpsMetadataNotFoundException | CommonAwsError
  >;
  deleteParameter(
    input: DeleteParameterRequest,
  ): Effect.Effect<
    {},
    InternalServerError | ParameterNotFound | CommonAwsError
  >;
  deleteParameters(
    input: DeleteParametersRequest,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  deletePatchBaseline(
    input: DeletePatchBaselineRequest,
  ): Effect.Effect<
    {},
    InternalServerError | ResourceInUseException | CommonAwsError
  >;
  deleteResourceDataSync(
    input: DeleteResourceDataSyncRequest,
  ): Effect.Effect<
    {},
    InternalServerError | ResourceDataSyncInvalidConfigurationException | ResourceDataSyncNotFoundException | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    {},
    InternalServerError | MalformedResourcePolicyDocumentException | ResourceNotFoundException | ResourcePolicyConflictException | ResourcePolicyInvalidParameterException | ResourcePolicyNotFoundException | CommonAwsError
  >;
  deregisterManagedInstance(
    input: DeregisterManagedInstanceRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidInstanceId | CommonAwsError
  >;
  deregisterPatchBaselineForPatchGroup(
    input: DeregisterPatchBaselineForPatchGroupRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidResourceId | CommonAwsError
  >;
  deregisterTargetFromMaintenanceWindow(
    input: DeregisterTargetFromMaintenanceWindowRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | TargetInUseException | CommonAwsError
  >;
  deregisterTaskFromMaintenanceWindow(
    input: DeregisterTaskFromMaintenanceWindowRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  describeActivations(
    input: DescribeActivationsRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidFilter | InvalidNextToken | CommonAwsError
  >;
  describeAssociation(
    input: DescribeAssociationRequest,
  ): Effect.Effect<
    {},
    AssociationDoesNotExist | InternalServerError | InvalidAssociationVersion | InvalidDocument | InvalidInstanceId | CommonAwsError
  >;
  describeAssociationExecutionTargets(
    input: DescribeAssociationExecutionTargetsRequest,
  ): Effect.Effect<
    {},
    AssociationDoesNotExist | AssociationExecutionDoesNotExist | InternalServerError | InvalidNextToken | CommonAwsError
  >;
  describeAssociationExecutions(
    input: DescribeAssociationExecutionsRequest,
  ): Effect.Effect<
    {},
    AssociationDoesNotExist | InternalServerError | InvalidNextToken | CommonAwsError
  >;
  describeAutomationExecutions(
    input: DescribeAutomationExecutionsRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidFilterKey | InvalidFilterValue | InvalidNextToken | CommonAwsError
  >;
  describeAutomationStepExecutions(
    input: DescribeAutomationStepExecutionsRequest,
  ): Effect.Effect<
    {},
    AutomationExecutionNotFoundException | InternalServerError | InvalidFilterKey | InvalidFilterValue | InvalidNextToken | CommonAwsError
  >;
  describeAvailablePatches(
    input: DescribeAvailablePatchesRequest,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  describeDocument(
    input: DescribeDocumentRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidDocument | InvalidDocumentVersion | CommonAwsError
  >;
  describeDocumentPermission(
    input: DescribeDocumentPermissionRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidDocument | InvalidDocumentOperation | InvalidNextToken | InvalidPermissionType | CommonAwsError
  >;
  describeEffectiveInstanceAssociations(
    input: DescribeEffectiveInstanceAssociationsRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidInstanceId | InvalidNextToken | CommonAwsError
  >;
  describeEffectivePatchesForPatchBaseline(
    input: DescribeEffectivePatchesForPatchBaselineRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | InvalidResourceId | UnsupportedOperatingSystem | CommonAwsError
  >;
  describeInstanceAssociationsStatus(
    input: DescribeInstanceAssociationsStatusRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidInstanceId | InvalidNextToken | CommonAwsError
  >;
  describeInstanceInformation(
    input: DescribeInstanceInformationRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidFilterKey | InvalidInstanceId | InvalidInstanceInformationFilterValue | InvalidNextToken | CommonAwsError
  >;
  describeInstancePatchStates(
    input: DescribeInstancePatchStatesRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidNextToken | CommonAwsError
  >;
  describeInstancePatchStatesForPatchGroup(
    input: DescribeInstancePatchStatesForPatchGroupRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidFilter | InvalidNextToken | CommonAwsError
  >;
  describeInstancePatches(
    input: DescribeInstancePatchesRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidFilter | InvalidInstanceId | InvalidNextToken | CommonAwsError
  >;
  describeInstanceProperties(
    input: DescribeInstancePropertiesRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidActivationId | InvalidDocument | InvalidFilterKey | InvalidInstanceId | InvalidInstancePropertyFilterValue | InvalidNextToken | CommonAwsError
  >;
  describeInventoryDeletions(
    input: DescribeInventoryDeletionsRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidDeletionIdException | InvalidNextToken | CommonAwsError
  >;
  describeMaintenanceWindowExecutionTaskInvocations(
    input: DescribeMaintenanceWindowExecutionTaskInvocationsRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  describeMaintenanceWindowExecutionTasks(
    input: DescribeMaintenanceWindowExecutionTasksRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  describeMaintenanceWindowExecutions(
    input: DescribeMaintenanceWindowExecutionsRequest,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  describeMaintenanceWindowSchedule(
    input: DescribeMaintenanceWindowScheduleRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  describeMaintenanceWindowTargets(
    input: DescribeMaintenanceWindowTargetsRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  describeMaintenanceWindowTasks(
    input: DescribeMaintenanceWindowTasksRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  describeMaintenanceWindows(
    input: DescribeMaintenanceWindowsRequest,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  describeMaintenanceWindowsForTarget(
    input: DescribeMaintenanceWindowsForTargetRequest,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  describeOpsItems(
    input: DescribeOpsItemsRequest,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  describeParameters(
    input: DescribeParametersRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidFilterKey | InvalidFilterOption | InvalidFilterValue | InvalidNextToken | CommonAwsError
  >;
  describePatchBaselines(
    input: DescribePatchBaselinesRequest,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  describePatchGroupState(
    input: DescribePatchGroupStateRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidNextToken | CommonAwsError
  >;
  describePatchGroups(
    input: DescribePatchGroupsRequest,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  describePatchProperties(
    input: DescribePatchPropertiesRequest,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  describeSessions(
    input: DescribeSessionsRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidFilterKey | InvalidNextToken | CommonAwsError
  >;
  disassociateOpsItemRelatedItem(
    input: DisassociateOpsItemRelatedItemRequest,
  ): Effect.Effect<
    {},
    InternalServerError | OpsItemConflictException | OpsItemInvalidParameterException | OpsItemNotFoundException | OpsItemRelatedItemAssociationNotFoundException | CommonAwsError
  >;
  getAccessToken(
    input: GetAccessTokenRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerError | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getAutomationExecution(
    input: GetAutomationExecutionRequest,
  ): Effect.Effect<
    {},
    AutomationExecutionNotFoundException | InternalServerError | CommonAwsError
  >;
  getCalendarState(
    input: GetCalendarStateRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidDocument | InvalidDocumentType | UnsupportedCalendarException | CommonAwsError
  >;
  getCommandInvocation(
    input: GetCommandInvocationRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidCommandId | InvalidInstanceId | InvalidPluginName | InvocationDoesNotExist | CommonAwsError
  >;
  getConnectionStatus(
    input: GetConnectionStatusRequest,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  getDefaultPatchBaseline(
    input: GetDefaultPatchBaselineRequest,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  getDeployablePatchSnapshotForInstance(
    input: GetDeployablePatchSnapshotForInstanceRequest,
  ): Effect.Effect<
    {},
    InternalServerError | UnsupportedFeatureRequiredException | UnsupportedOperatingSystem | CommonAwsError
  >;
  getDocument(
    input: GetDocumentRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidDocument | InvalidDocumentVersion | CommonAwsError
  >;
  getExecutionPreview(
    input: GetExecutionPreviewRequest,
  ): Effect.Effect<
    {},
    InternalServerError | ResourceNotFoundException | CommonAwsError
  >;
  getInventory(
    input: GetInventoryRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidAggregatorException | InvalidFilter | InvalidInventoryGroupException | InvalidNextToken | InvalidResultAttributeException | InvalidTypeNameException | CommonAwsError
  >;
  getInventorySchema(
    input: GetInventorySchemaRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidNextToken | InvalidTypeNameException | CommonAwsError
  >;
  getMaintenanceWindow(
    input: GetMaintenanceWindowRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  getMaintenanceWindowExecution(
    input: GetMaintenanceWindowExecutionRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  getMaintenanceWindowExecutionTask(
    input: GetMaintenanceWindowExecutionTaskRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  getMaintenanceWindowExecutionTaskInvocation(
    input: GetMaintenanceWindowExecutionTaskInvocationRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  getMaintenanceWindowTask(
    input: GetMaintenanceWindowTaskRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  getOpsItem(
    input: GetOpsItemRequest,
  ): Effect.Effect<
    {},
    InternalServerError | OpsItemAccessDeniedException | OpsItemNotFoundException | CommonAwsError
  >;
  getOpsMetadata(
    input: GetOpsMetadataRequest,
  ): Effect.Effect<
    {},
    InternalServerError | OpsMetadataInvalidArgumentException | OpsMetadataNotFoundException | CommonAwsError
  >;
  getOpsSummary(
    input: GetOpsSummaryRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidAggregatorException | InvalidFilter | InvalidNextToken | InvalidTypeNameException | ResourceDataSyncNotFoundException | CommonAwsError
  >;
  getParameter(
    input: GetParameterRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidKeyId | ParameterNotFound | ParameterVersionNotFound | CommonAwsError
  >;
  getParameterHistory(
    input: GetParameterHistoryRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidKeyId | InvalidNextToken | ParameterNotFound | CommonAwsError
  >;
  getParameters(
    input: GetParametersRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidKeyId | CommonAwsError
  >;
  getParametersByPath(
    input: GetParametersByPathRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidFilterKey | InvalidFilterOption | InvalidFilterValue | InvalidKeyId | InvalidNextToken | CommonAwsError
  >;
  getPatchBaseline(
    input: GetPatchBaselineRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | InvalidResourceId | CommonAwsError
  >;
  getPatchBaselineForPatchGroup(
    input: GetPatchBaselineForPatchGroupRequest,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  getResourcePolicies(
    input: GetResourcePoliciesRequest,
  ): Effect.Effect<
    {},
    InternalServerError | ResourceNotFoundException | ResourcePolicyInvalidParameterException | CommonAwsError
  >;
  getServiceSetting(
    input: GetServiceSettingRequest,
  ): Effect.Effect<
    {},
    InternalServerError | ServiceSettingNotFound | CommonAwsError
  >;
  labelParameterVersion(
    input: LabelParameterVersionRequest,
  ): Effect.Effect<
    {},
    InternalServerError | ParameterNotFound | ParameterVersionLabelLimitExceeded | ParameterVersionNotFound | TooManyUpdates | CommonAwsError
  >;
  listAssociationVersions(
    input: ListAssociationVersionsRequest,
  ): Effect.Effect<
    {},
    AssociationDoesNotExist | InternalServerError | InvalidNextToken | CommonAwsError
  >;
  listAssociations(
    input: ListAssociationsRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidNextToken | CommonAwsError
  >;
  listCommandInvocations(
    input: ListCommandInvocationsRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidCommandId | InvalidFilterKey | InvalidInstanceId | InvalidNextToken | CommonAwsError
  >;
  listCommands(
    input: ListCommandsRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidCommandId | InvalidFilterKey | InvalidInstanceId | InvalidNextToken | CommonAwsError
  >;
  listComplianceItems(
    input: ListComplianceItemsRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidFilter | InvalidNextToken | InvalidResourceId | InvalidResourceType | CommonAwsError
  >;
  listComplianceSummaries(
    input: ListComplianceSummariesRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidFilter | InvalidNextToken | CommonAwsError
  >;
  listDocumentMetadataHistory(
    input: ListDocumentMetadataHistoryRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidDocument | InvalidDocumentVersion | InvalidNextToken | CommonAwsError
  >;
  listDocumentVersions(
    input: ListDocumentVersionsRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidDocument | InvalidNextToken | CommonAwsError
  >;
  listDocuments(
    input: ListDocumentsRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidFilterKey | InvalidNextToken | CommonAwsError
  >;
  listInventoryEntries(
    input: ListInventoryEntriesRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidFilter | InvalidInstanceId | InvalidNextToken | InvalidTypeNameException | CommonAwsError
  >;
  listNodes(
    input: ListNodesRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidFilter | InvalidNextToken | ResourceDataSyncNotFoundException | UnsupportedOperationException | CommonAwsError
  >;
  listNodesSummary(
    input: ListNodesSummaryRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidAggregatorException | InvalidFilter | InvalidNextToken | ResourceDataSyncNotFoundException | UnsupportedOperationException | CommonAwsError
  >;
  listOpsItemEvents(
    input: ListOpsItemEventsRequest,
  ): Effect.Effect<
    {},
    InternalServerError | OpsItemInvalidParameterException | OpsItemLimitExceededException | OpsItemNotFoundException | CommonAwsError
  >;
  listOpsItemRelatedItems(
    input: ListOpsItemRelatedItemsRequest,
  ): Effect.Effect<
    {},
    InternalServerError | OpsItemInvalidParameterException | CommonAwsError
  >;
  listOpsMetadata(
    input: ListOpsMetadataRequest,
  ): Effect.Effect<
    {},
    InternalServerError | OpsMetadataInvalidArgumentException | CommonAwsError
  >;
  listResourceComplianceSummaries(
    input: ListResourceComplianceSummariesRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidFilter | InvalidNextToken | CommonAwsError
  >;
  listResourceDataSync(
    input: ListResourceDataSyncRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidNextToken | ResourceDataSyncInvalidConfigurationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidResourceId | InvalidResourceType | CommonAwsError
  >;
  modifyDocumentPermission(
    input: ModifyDocumentPermissionRequest,
  ): Effect.Effect<
    {},
    DocumentLimitExceeded | DocumentPermissionLimit | InternalServerError | InvalidDocument | InvalidPermissionType | CommonAwsError
  >;
  putComplianceItems(
    input: PutComplianceItemsRequest,
  ): Effect.Effect<
    {},
    ComplianceTypeCountLimitExceededException | InternalServerError | InvalidItemContentException | InvalidResourceId | InvalidResourceType | ItemSizeLimitExceededException | TotalSizeLimitExceededException | CommonAwsError
  >;
  putInventory(
    input: PutInventoryRequest,
  ): Effect.Effect<
    {},
    CustomSchemaCountLimitExceededException | InternalServerError | InvalidInstanceId | InvalidInventoryItemContextException | InvalidItemContentException | InvalidTypeNameException | ItemContentMismatchException | ItemSizeLimitExceededException | SubTypeCountLimitExceededException | TotalSizeLimitExceededException | UnsupportedInventoryItemContextException | UnsupportedInventorySchemaVersionException | CommonAwsError
  >;
  putParameter(
    input: PutParameterRequest,
  ): Effect.Effect<
    {},
    HierarchyLevelLimitExceededException | HierarchyTypeMismatchException | IncompatiblePolicyException | InternalServerError | InvalidAllowedPatternException | InvalidKeyId | InvalidPolicyAttributeException | InvalidPolicyTypeException | ParameterAlreadyExists | ParameterLimitExceeded | ParameterMaxVersionLimitExceeded | ParameterPatternMismatchException | PoliciesLimitExceededException | TooManyUpdates | UnsupportedParameterType | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    {},
    InternalServerError | MalformedResourcePolicyDocumentException | ResourceNotFoundException | ResourcePolicyConflictException | ResourcePolicyInvalidParameterException | ResourcePolicyLimitExceededException | ResourcePolicyNotFoundException | CommonAwsError
  >;
  registerDefaultPatchBaseline(
    input: RegisterDefaultPatchBaselineRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | InvalidResourceId | CommonAwsError
  >;
  registerPatchBaselineForPatchGroup(
    input: RegisterPatchBaselineForPatchGroupRequest,
  ): Effect.Effect<
    {},
    AlreadyExistsException | DoesNotExistException | InternalServerError | InvalidResourceId | ResourceLimitExceededException | CommonAwsError
  >;
  registerTargetWithMaintenanceWindow(
    input: RegisterTargetWithMaintenanceWindowRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | IdempotentParameterMismatch | InternalServerError | ResourceLimitExceededException | CommonAwsError
  >;
  registerTaskWithMaintenanceWindow(
    input: RegisterTaskWithMaintenanceWindowRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | FeatureNotAvailableException | IdempotentParameterMismatch | InternalServerError | ResourceLimitExceededException | CommonAwsError
  >;
  removeTagsFromResource(
    input: RemoveTagsFromResourceRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidResourceId | InvalidResourceType | TooManyUpdates | CommonAwsError
  >;
  resetServiceSetting(
    input: ResetServiceSettingRequest,
  ): Effect.Effect<
    {},
    InternalServerError | ServiceSettingNotFound | TooManyUpdates | CommonAwsError
  >;
  resumeSession(
    input: ResumeSessionRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  sendAutomationSignal(
    input: SendAutomationSignalRequest,
  ): Effect.Effect<
    {},
    AutomationExecutionNotFoundException | AutomationStepNotFoundException | InternalServerError | InvalidAutomationSignalException | CommonAwsError
  >;
  sendCommand(
    input: SendCommandRequest,
  ): Effect.Effect<
    {},
    DuplicateInstanceId | InternalServerError | InvalidDocument | InvalidDocumentVersion | InvalidInstanceId | InvalidNotificationConfig | InvalidOutputFolder | InvalidParameters | InvalidRole | MaxDocumentSizeExceeded | UnsupportedPlatformType | CommonAwsError
  >;
  startAccessRequest(
    input: StartAccessRequestRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerError | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  startAssociationsOnce(
    input: StartAssociationsOnceRequest,
  ): Effect.Effect<
    {},
    AssociationDoesNotExist | InvalidAssociation | CommonAwsError
  >;
  startAutomationExecution(
    input: StartAutomationExecutionRequest,
  ): Effect.Effect<
    {},
    AutomationDefinitionNotFoundException | AutomationDefinitionVersionNotFoundException | AutomationExecutionLimitExceededException | IdempotentParameterMismatch | InternalServerError | InvalidAutomationExecutionParametersException | InvalidTarget | CommonAwsError
  >;
  startChangeRequestExecution(
    input: StartChangeRequestExecutionRequest,
  ): Effect.Effect<
    {},
    AutomationDefinitionNotApprovedException | AutomationDefinitionNotFoundException | AutomationDefinitionVersionNotFoundException | AutomationExecutionLimitExceededException | IdempotentParameterMismatch | InternalServerError | InvalidAutomationExecutionParametersException | CommonAwsError
  >;
  startExecutionPreview(
    input: StartExecutionPreviewRequest,
  ): Effect.Effect<
    {},
    InternalServerError | ValidationException | CommonAwsError
  >;
  startSession(
    input: StartSessionRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidDocument | TargetNotConnected | CommonAwsError
  >;
  stopAutomationExecution(
    input: StopAutomationExecutionRequest,
  ): Effect.Effect<
    {},
    AutomationExecutionNotFoundException | InternalServerError | InvalidAutomationStatusUpdateException | CommonAwsError
  >;
  terminateSession(
    input: TerminateSessionRequest,
  ): Effect.Effect<
    {},
    InternalServerError | CommonAwsError
  >;
  unlabelParameterVersion(
    input: UnlabelParameterVersionRequest,
  ): Effect.Effect<
    {},
    InternalServerError | ParameterNotFound | ParameterVersionNotFound | TooManyUpdates | CommonAwsError
  >;
  updateAssociation(
    input: UpdateAssociationRequest,
  ): Effect.Effect<
    {},
    AssociationDoesNotExist | AssociationVersionLimitExceeded | InternalServerError | InvalidAssociationVersion | InvalidDocument | InvalidDocumentVersion | InvalidOutputLocation | InvalidParameters | InvalidSchedule | InvalidTarget | InvalidTargetMaps | InvalidUpdate | TooManyUpdates | CommonAwsError
  >;
  updateAssociationStatus(
    input: UpdateAssociationStatusRequest,
  ): Effect.Effect<
    {},
    AssociationDoesNotExist | InternalServerError | InvalidDocument | InvalidInstanceId | StatusUnchanged | TooManyUpdates | CommonAwsError
  >;
  updateDocument(
    input: UpdateDocumentRequest,
  ): Effect.Effect<
    {},
    DocumentVersionLimitExceeded | DuplicateDocumentContent | DuplicateDocumentVersionName | InternalServerError | InvalidDocument | InvalidDocumentContent | InvalidDocumentOperation | InvalidDocumentSchemaVersion | InvalidDocumentVersion | MaxDocumentSizeExceeded | CommonAwsError
  >;
  updateDocumentDefaultVersion(
    input: UpdateDocumentDefaultVersionRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidDocument | InvalidDocumentSchemaVersion | InvalidDocumentVersion | CommonAwsError
  >;
  updateDocumentMetadata(
    input: UpdateDocumentMetadataRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidDocument | InvalidDocumentOperation | InvalidDocumentVersion | TooManyUpdates | CommonAwsError
  >;
  updateMaintenanceWindow(
    input: UpdateMaintenanceWindowRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  updateMaintenanceWindowTarget(
    input: UpdateMaintenanceWindowTargetRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  updateMaintenanceWindowTask(
    input: UpdateMaintenanceWindowTaskRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  updateManagedInstanceRole(
    input: UpdateManagedInstanceRoleRequest,
  ): Effect.Effect<
    {},
    InternalServerError | InvalidInstanceId | CommonAwsError
  >;
  updateOpsItem(
    input: UpdateOpsItemRequest,
  ): Effect.Effect<
    {},
    InternalServerError | OpsItemAccessDeniedException | OpsItemAlreadyExistsException | OpsItemConflictException | OpsItemInvalidParameterException | OpsItemLimitExceededException | OpsItemNotFoundException | CommonAwsError
  >;
  updateOpsMetadata(
    input: UpdateOpsMetadataRequest,
  ): Effect.Effect<
    {},
    InternalServerError | OpsMetadataInvalidArgumentException | OpsMetadataKeyLimitExceededException | OpsMetadataNotFoundException | OpsMetadataTooManyUpdatesException | CommonAwsError
  >;
  updatePatchBaseline(
    input: UpdatePatchBaselineRequest,
  ): Effect.Effect<
    {},
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  updateResourceDataSync(
    input: UpdateResourceDataSyncRequest,
  ): Effect.Effect<
    {},
    InternalServerError | ResourceDataSyncConflictException | ResourceDataSyncInvalidConfigurationException | ResourceDataSyncNotFoundException | CommonAwsError
  >;
  updateServiceSetting(
    input: UpdateServiceSettingRequest,
  ): Effect.Effect<
    {},
    InternalServerError | ServiceSettingNotFound | TooManyUpdates | CommonAwsError
  >;
}

export type Ssm = AmazonSSM;

export interface AccessDeniedException {
}
export type AccessKeyIdType = string;

export type AccessKeySecretType = string;

export type AccessRequestId = string;

export type AccessRequestStatus = never;
export type AccessType = never;
export type Account = string;

export type AccountId = string;

export type AccountIdList = Array<unknown>;
export type Accounts = Array<unknown>;
export interface AccountSharingInfo {
}
export type AccountSharingInfoList = Array<unknown>;
export interface Activation {
}
export type ActivationCode = string;

export type ActivationDescription = string;

export type ActivationId = string;

export type ActivationList = Array<unknown>;
export interface AddTagsToResourceRequest {
}
export interface AddTagsToResourceResult {
}
export type AgentErrorCode = string;

export type AgentType = string;

export type AgentVersion = string;

export type AggregatorSchemaOnly = boolean;

export interface Alarm {
}
export interface AlarmConfiguration {
}
export type AlarmList = Array<unknown>;
export type AlarmName = string;

export interface AlarmStateInformation {
}
export type AlarmStateInformationList = Array<unknown>;
export type AllowedPattern = string;

export interface AlreadyExistsException {
}
export type ApplyOnlyAtCronInterval = boolean;

export type ApproveAfterDays = number;

export type Architecture = string;

export interface AssociatedInstances {
}
export interface AssociateOpsItemRelatedItemRequest {
}
export interface AssociateOpsItemRelatedItemResponse {
}
export interface Association {
}
export interface AssociationAlreadyExists {
}
export type AssociationComplianceSeverity = never;
export interface AssociationDescription {
}
export type AssociationDescriptionList = Array<unknown>;
export interface AssociationDoesNotExist {
}
export interface AssociationExecution {
}
export interface AssociationExecutionDoesNotExist {
}
export interface AssociationExecutionFilter {
}
export type AssociationExecutionFilterKey = never;
export type AssociationExecutionFilterList = Array<unknown>;
export type AssociationExecutionFilterValue = string;

export type AssociationExecutionId = string;

export type AssociationExecutionsList = Array<unknown>;
export interface AssociationExecutionTarget {
}
export interface AssociationExecutionTargetsFilter {
}
export type AssociationExecutionTargetsFilterKey = never;
export type AssociationExecutionTargetsFilterList = Array<unknown>;
export type AssociationExecutionTargetsFilterValue = string;

export type AssociationExecutionTargetsList = Array<unknown>;
export interface AssociationFilter {
}
export type AssociationFilterKey = never;
export type AssociationFilterList = Array<unknown>;
export type AssociationFilterOperatorType = never;
export type AssociationFilterValue = string;

export type AssociationId = string;

export type AssociationIdList = Array<unknown>;
export interface AssociationLimitExceeded {
}
export type AssociationList = Array<unknown>;
export type AssociationName = string;

export interface AssociationOverview {
}
export type AssociationResourceId = string;

export type AssociationResourceType = string;

export interface AssociationStatus {
}
export type AssociationStatusAggregatedCount = Record<string, unknown>;
export type AssociationStatusName = never;
export type AssociationSyncCompliance = never;
export type AssociationVersion = string;

export interface AssociationVersionInfo {
}
export interface AssociationVersionLimitExceeded {
}
export type AssociationVersionList = Array<unknown>;
export interface AttachmentContent {
}
export type AttachmentContentList = Array<unknown>;
export type AttachmentHash = string;

export type AttachmentHashType = never;
export type AttachmentIdentifier = string;

export interface AttachmentInformation {
}
export type AttachmentInformationList = Array<unknown>;
export type AttachmentName = string;

export interface AttachmentsSource {
}
export type AttachmentsSourceKey = never;
export type AttachmentsSourceList = Array<unknown>;
export type AttachmentsSourceValue = string;

export type AttachmentsSourceValues = Array<unknown>;
export type AttachmentUrl = string;

export type AttributeName = string;

export type AttributeValue = string;

export type AutomationActionName = string;

export interface AutomationDefinitionNotApprovedException {
}
export interface AutomationDefinitionNotFoundException {
}
export interface AutomationDefinitionVersionNotFoundException {
}
export interface AutomationExecution {
}
export interface AutomationExecutionFilter {
}
export type AutomationExecutionFilterKey = never;
export type AutomationExecutionFilterList = Array<unknown>;
export type AutomationExecutionFilterValue = string;

export type AutomationExecutionFilterValueList = Array<unknown>;
export type AutomationExecutionId = string;

export interface AutomationExecutionInputs {
}
export interface AutomationExecutionLimitExceededException {
}
export interface AutomationExecutionMetadata {
}
export type AutomationExecutionMetadataList = Array<unknown>;
export interface AutomationExecutionNotFoundException {
}
export interface AutomationExecutionPreview {
}
export type AutomationExecutionStatus = never;
export type AutomationParameterKey = string;

export type AutomationParameterMap = Record<string, unknown>;
export type AutomationParameterValue = string;

export type AutomationParameterValueList = Array<unknown>;
export interface AutomationStepNotFoundException {
}
export type AutomationSubtype = never;
export type AutomationTargetParameterName = string;

export type AutomationType = never;
export type BaselineDescription = string;

export type BaselineId = string;

export type BaselineName = string;

export interface BaselineOverride {
}
export type BatchErrorMessage = string;

export type CalendarNameOrARN = string;

export type CalendarNameOrARNList = Array<unknown>;
export type CalendarState = never;
export interface CancelCommandRequest {
}
export interface CancelCommandResult {
}
export interface CancelMaintenanceWindowExecutionRequest {
}
export interface CancelMaintenanceWindowExecutionResult {
}
export type Category = string;

export type CategoryEnumList = Array<unknown>;
export type CategoryList = Array<unknown>;
export type ChangeDetailsValue = string;

export type ChangeRequestName = string;

export type ClientToken = string;

export type CloudWatchLogGroupName = string;

export interface CloudWatchOutputConfig {
}
export type CloudWatchOutputEnabled = boolean;

export interface Command {
}
export interface CommandFilter {
}
export type CommandFilterKey = never;
export type CommandFilterList = Array<unknown>;
export type CommandFilterValue = string;

export type CommandId = string;

export interface CommandInvocation {
}
export type CommandInvocationList = Array<unknown>;
export type CommandInvocationStatus = never;
export type CommandList = Array<unknown>;
export type CommandMaxResults = number;

export interface CommandPlugin {
}
export type CommandPluginList = Array<unknown>;
export type CommandPluginName = string;

export type CommandPluginOutput = string;

export type CommandPluginStatus = never;
export type CommandStatus = never;
export type Comment = string;

export type CompletedCount = number;

export type ComplianceExecutionId = string;

export interface ComplianceExecutionSummary {
}
export type ComplianceExecutionType = string;

export type ComplianceFilterValue = string;

export interface ComplianceItem {
}
export type ComplianceItemContentHash = string;

export type ComplianceItemDetails = Record<string, unknown>;
export interface ComplianceItemEntry {
}
export type ComplianceItemEntryList = Array<unknown>;
export type ComplianceItemId = string;

export type ComplianceItemList = Array<unknown>;
export type ComplianceItemTitle = string;

export type ComplianceQueryOperatorType = never;
export type ComplianceResourceId = string;

export type ComplianceResourceIdList = Array<unknown>;
export type ComplianceResourceType = string;

export type ComplianceResourceTypeList = Array<unknown>;
export type ComplianceSeverity = never;
export type ComplianceStatus = never;
export interface ComplianceStringFilter {
}
export type ComplianceStringFilterKey = string;

export type ComplianceStringFilterList = Array<unknown>;
export type ComplianceStringFilterValueList = Array<unknown>;
export type ComplianceSummaryCount = number;

export interface ComplianceSummaryItem {
}
export type ComplianceSummaryItemList = Array<unknown>;
export interface ComplianceTypeCountLimitExceededException {
}
export type ComplianceTypeName = string;

export type ComplianceUploadType = never;
export interface CompliantSummary {
}
export type ComputerName = string;

export type ConnectionStatus = never;
export type ContentLength = number;

export interface CreateActivationRequest {
}
export interface CreateActivationResult {
}
export interface CreateAssociationBatchRequest {
}
export type CreateAssociationBatchRequestEntries = Array<unknown>;
export interface CreateAssociationBatchRequestEntry {
}
export interface CreateAssociationBatchResult {
}
export interface CreateAssociationRequest {
}
export interface CreateAssociationResult {
}
export type CreatedDate = Date | string;

export interface CreateDocumentRequest {
}
export interface CreateDocumentResult {
}
export interface CreateMaintenanceWindowRequest {
}
export interface CreateMaintenanceWindowResult {
}
export interface CreateOpsItemRequest {
}
export interface CreateOpsItemResponse {
}
export interface CreateOpsMetadataRequest {
}
export interface CreateOpsMetadataResult {
}
export interface CreatePatchBaselineRequest {
}
export interface CreatePatchBaselineResult {
}
export interface CreateResourceDataSyncRequest {
}
export interface CreateResourceDataSyncResult {
}
export interface Credentials {
}
export interface CustomSchemaCountLimitExceededException {
}
export type DateTime = Date | string;

export type DefaultBaseline = boolean;

export type DefaultInstanceName = string;

export interface DeleteActivationRequest {
}
export interface DeleteActivationResult {
}
export interface DeleteAssociationRequest {
}
export interface DeleteAssociationResult {
}
export interface DeleteDocumentRequest {
}
export interface DeleteDocumentResult {
}
export interface DeleteInventoryRequest {
}
export interface DeleteInventoryResult {
}
export interface DeleteMaintenanceWindowRequest {
}
export interface DeleteMaintenanceWindowResult {
}
export interface DeleteOpsItemRequest {
}
export interface DeleteOpsItemResponse {
}
export interface DeleteOpsMetadataRequest {
}
export interface DeleteOpsMetadataResult {
}
export interface DeleteParameterRequest {
}
export interface DeleteParameterResult {
}
export interface DeleteParametersRequest {
}
export interface DeleteParametersResult {
}
export interface DeletePatchBaselineRequest {
}
export interface DeletePatchBaselineResult {
}
export interface DeleteResourceDataSyncRequest {
}
export interface DeleteResourceDataSyncResult {
}
export interface DeleteResourcePolicyRequest {
}
export interface DeleteResourcePolicyResponse {
}
export type DeliveryTimedOutCount = number;

export interface DeregisterManagedInstanceRequest {
}
export interface DeregisterManagedInstanceResult {
}
export interface DeregisterPatchBaselineForPatchGroupRequest {
}
export interface DeregisterPatchBaselineForPatchGroupResult {
}
export interface DeregisterTargetFromMaintenanceWindowRequest {
}
export interface DeregisterTargetFromMaintenanceWindowResult {
}
export interface DeregisterTaskFromMaintenanceWindowRequest {
}
export interface DeregisterTaskFromMaintenanceWindowResult {
}
export interface DescribeActivationsFilter {
}
export type DescribeActivationsFilterKeys = never;
export type DescribeActivationsFilterList = Array<unknown>;
export interface DescribeActivationsRequest {
}
export interface DescribeActivationsResult {
}
export interface DescribeAssociationExecutionsRequest {
}
export interface DescribeAssociationExecutionsResult {
}
export interface DescribeAssociationExecutionTargetsRequest {
}
export interface DescribeAssociationExecutionTargetsResult {
}
export interface DescribeAssociationRequest {
}
export interface DescribeAssociationResult {
}
export interface DescribeAutomationExecutionsRequest {
}
export interface DescribeAutomationExecutionsResult {
}
export interface DescribeAutomationStepExecutionsRequest {
}
export interface DescribeAutomationStepExecutionsResult {
}
export interface DescribeAvailablePatchesRequest {
}
export interface DescribeAvailablePatchesResult {
}
export interface DescribeDocumentPermissionRequest {
}
export interface DescribeDocumentPermissionResponse {
}
export interface DescribeDocumentRequest {
}
export interface DescribeDocumentResult {
}
export interface DescribeEffectiveInstanceAssociationsRequest {
}
export interface DescribeEffectiveInstanceAssociationsResult {
}
export interface DescribeEffectivePatchesForPatchBaselineRequest {
}
export interface DescribeEffectivePatchesForPatchBaselineResult {
}
export interface DescribeInstanceAssociationsStatusRequest {
}
export interface DescribeInstanceAssociationsStatusResult {
}
export interface DescribeInstanceInformationRequest {
}
export interface DescribeInstanceInformationResult {
}
export interface DescribeInstancePatchesRequest {
}
export interface DescribeInstancePatchesResult {
}
export interface DescribeInstancePatchStatesForPatchGroupRequest {
}
export interface DescribeInstancePatchStatesForPatchGroupResult {
}
export interface DescribeInstancePatchStatesRequest {
}
export interface DescribeInstancePatchStatesResult {
}
export type DescribeInstancePropertiesMaxResults = number;

export interface DescribeInstancePropertiesRequest {
}
export interface DescribeInstancePropertiesResult {
}
export interface DescribeInventoryDeletionsRequest {
}
export interface DescribeInventoryDeletionsResult {
}
export interface DescribeMaintenanceWindowExecutionsRequest {
}
export interface DescribeMaintenanceWindowExecutionsResult {
}
export interface DescribeMaintenanceWindowExecutionTaskInvocationsRequest {
}
export interface DescribeMaintenanceWindowExecutionTaskInvocationsResult {
}
export interface DescribeMaintenanceWindowExecutionTasksRequest {
}
export interface DescribeMaintenanceWindowExecutionTasksResult {
}
export interface DescribeMaintenanceWindowScheduleRequest {
}
export interface DescribeMaintenanceWindowScheduleResult {
}
export interface DescribeMaintenanceWindowsForTargetRequest {
}
export interface DescribeMaintenanceWindowsForTargetResult {
}
export interface DescribeMaintenanceWindowsRequest {
}
export interface DescribeMaintenanceWindowsResult {
}
export interface DescribeMaintenanceWindowTargetsRequest {
}
export interface DescribeMaintenanceWindowTargetsResult {
}
export interface DescribeMaintenanceWindowTasksRequest {
}
export interface DescribeMaintenanceWindowTasksResult {
}
export interface DescribeOpsItemsRequest {
}
export interface DescribeOpsItemsResponse {
}
export interface DescribeParametersRequest {
}
export interface DescribeParametersResult {
}
export interface DescribePatchBaselinesRequest {
}
export interface DescribePatchBaselinesResult {
}
export interface DescribePatchGroupsRequest {
}
export interface DescribePatchGroupsResult {
}
export interface DescribePatchGroupStateRequest {
}
export interface DescribePatchGroupStateResult {
}
export interface DescribePatchPropertiesRequest {
}
export interface DescribePatchPropertiesResult {
}
export interface DescribeSessionsRequest {
}
export interface DescribeSessionsResponse {
}
export type DescriptionInDocument = string;

export interface DisassociateOpsItemRelatedItemRequest {
}
export interface DisassociateOpsItemRelatedItemResponse {
}
export interface DocumentAlreadyExists {
}
export type DocumentARN = string;

export type DocumentAuthor = string;

export type DocumentContent = string;

export interface DocumentDefaultVersionDescription {
}
export interface DocumentDescription {
}
export type DocumentDisplayName = string;

export interface DocumentFilter {
}
export type DocumentFilterKey = never;
export type DocumentFilterList = Array<unknown>;
export type DocumentFilterValue = string;

export type DocumentFormat = never;
export type DocumentHash = string;

export type DocumentHashType = never;
export interface DocumentIdentifier {
}
export type DocumentIdentifierList = Array<unknown>;
export interface DocumentKeyValuesFilter {
}
export type DocumentKeyValuesFilterKey = string;

export type DocumentKeyValuesFilterList = Array<unknown>;
export type DocumentKeyValuesFilterValue = string;

export type DocumentKeyValuesFilterValues = Array<unknown>;
export interface DocumentLimitExceeded {
}
export type DocumentMetadataEnum = never;
export interface DocumentMetadataResponseInfo {
}
export type DocumentName = string;

export type DocumentOwner = string;

export interface DocumentParameter {
}
export type DocumentParameterDefaultValue = string;

export type DocumentParameterDescrption = string;

export type DocumentParameterList = Array<unknown>;
export type DocumentParameterName = string;

export type DocumentParameterType = never;
export interface DocumentPermissionLimit {
}
export type DocumentPermissionMaxResults = number;

export type DocumentPermissionType = never;
export interface DocumentRequires {
}
export type DocumentRequiresList = Array<unknown>;
export type DocumentReviewAction = never;
export type DocumentReviewComment = string;

export type DocumentReviewCommentList = Array<unknown>;
export interface DocumentReviewCommentSource {
}
export type DocumentReviewCommentType = never;
export type DocumentReviewerResponseList = Array<unknown>;
export interface DocumentReviewerResponseSource {
}
export interface DocumentReviews {
}
export type DocumentSchemaVersion = string;

export type DocumentSha1 = string;

export type DocumentStatus = never;
export type DocumentStatusInformation = string;

export type DocumentType = never;
export type DocumentVersion = string;

export interface DocumentVersionInfo {
}
export interface DocumentVersionLimitExceeded {
}
export type DocumentVersionList = Array<unknown>;
export type DocumentVersionName = string;

export type DocumentVersionNumber = string;

export interface DoesNotExistException {
}
export type DryRun = boolean;

export interface DuplicateDocumentContent {
}
export interface DuplicateDocumentVersionName {
}
export interface DuplicateInstanceId {
}
export type Duration = number;

export type EffectiveInstanceAssociationMaxResults = number;

export interface EffectivePatch {
}
export type EffectivePatchList = Array<unknown>;
export type ErrorCount = number;

export type ExcludeAccount = string;

export type ExcludeAccounts = Array<unknown>;
export type ExecutionInputs = never;
export type ExecutionMode = never;
export type ExecutionPreview = never;
export type ExecutionPreviewId = string;

export type ExecutionPreviewStatus = never;
export type ExecutionRoleName = string;

export type ExpirationDate = Date | string;

export type ExternalAlarmState = never;
export interface FailedCreateAssociation {
}
export type FailedCreateAssociationList = Array<unknown>;
export interface FailureDetails {
}
export type Fault = never;
export interface FeatureNotAvailableException {
}
export interface GetAccessTokenRequest {
}
export interface GetAccessTokenResponse {
}
export interface GetAutomationExecutionRequest {
}
export interface GetAutomationExecutionResult {
}
export interface GetCalendarStateRequest {
}
export interface GetCalendarStateResponse {
}
export interface GetCommandInvocationRequest {
}
export interface GetCommandInvocationResult {
}
export interface GetConnectionStatusRequest {
}
export interface GetConnectionStatusResponse {
}
export interface GetDefaultPatchBaselineRequest {
}
export interface GetDefaultPatchBaselineResult {
}
export interface GetDeployablePatchSnapshotForInstanceRequest {
}
export interface GetDeployablePatchSnapshotForInstanceResult {
}
export interface GetDocumentRequest {
}
export interface GetDocumentResult {
}
export interface GetExecutionPreviewRequest {
}
export interface GetExecutionPreviewResponse {
}
export interface GetInventoryRequest {
}
export interface GetInventoryResult {
}
export type GetInventorySchemaMaxResults = number;

export interface GetInventorySchemaRequest {
}
export interface GetInventorySchemaResult {
}
export interface GetMaintenanceWindowExecutionRequest {
}
export interface GetMaintenanceWindowExecutionResult {
}
export interface GetMaintenanceWindowExecutionTaskInvocationRequest {
}
export interface GetMaintenanceWindowExecutionTaskInvocationResult {
}
export interface GetMaintenanceWindowExecutionTaskRequest {
}
export interface GetMaintenanceWindowExecutionTaskResult {
}
export interface GetMaintenanceWindowRequest {
}
export interface GetMaintenanceWindowResult {
}
export interface GetMaintenanceWindowTaskRequest {
}
export interface GetMaintenanceWindowTaskResult {
}
export interface GetOpsItemRequest {
}
export interface GetOpsItemResponse {
}
export type GetOpsMetadataMaxResults = number;

export interface GetOpsMetadataRequest {
}
export interface GetOpsMetadataResult {
}
export interface GetOpsSummaryRequest {
}
export interface GetOpsSummaryResult {
}
export interface GetParameterHistoryRequest {
}
export interface GetParameterHistoryResult {
}
export interface GetParameterRequest {
}
export interface GetParameterResult {
}
export type GetParametersByPathMaxResults = number;

export interface GetParametersByPathRequest {
}
export interface GetParametersByPathResult {
}
export interface GetParametersRequest {
}
export interface GetParametersResult {
}
export interface GetPatchBaselineForPatchGroupRequest {
}
export interface GetPatchBaselineForPatchGroupResult {
}
export interface GetPatchBaselineRequest {
}
export interface GetPatchBaselineResult {
}
export interface GetResourcePoliciesRequest {
}
export interface GetResourcePoliciesResponse {
}
export type GetResourcePoliciesResponseEntries = Array<unknown>;
export interface GetResourcePoliciesResponseEntry {
}
export interface GetServiceSettingRequest {
}
export interface GetServiceSettingResult {
}
export interface HierarchyLevelLimitExceededException {
}
export interface HierarchyTypeMismatchException {
}
export type IamRole = string;

export type IdempotencyToken = string;

export interface IdempotentParameterMismatch {
}
export type ImpactType = never;
export interface IncompatiblePolicyException {
}
export type InstallOverrideList = string;

export interface InstanceAggregatedAssociationOverview {
}
export interface InstanceAssociation {
}
export type InstanceAssociationExecutionSummary = string;

export type InstanceAssociationList = Array<unknown>;
export interface InstanceAssociationOutputLocation {
}
export interface InstanceAssociationOutputUrl {
}
export type InstanceAssociationStatusAggregatedCount = Record<string, unknown>;
export interface InstanceAssociationStatusInfo {
}
export type InstanceAssociationStatusInfos = Array<unknown>;
export type InstanceCount = number;

export type InstanceId = string;

export type InstanceIdList = Array<unknown>;
export interface InstanceInfo {
}
export interface InstanceInformation {
}
export interface InstanceInformationFilter {
}
export type InstanceInformationFilterKey = never;
export type InstanceInformationFilterList = Array<unknown>;
export type InstanceInformationFilterValue = string;

export type InstanceInformationFilterValueSet = Array<unknown>;
export type InstanceInformationList = Array<unknown>;
export interface InstanceInformationStringFilter {
}
export type InstanceInformationStringFilterKey = string;

export type InstanceInformationStringFilterList = Array<unknown>;
export type InstanceName = string;

export interface InstancePatchState {
}
export interface InstancePatchStateFilter {
}
export type InstancePatchStateFilterKey = string;

export type InstancePatchStateFilterList = Array<unknown>;
export type InstancePatchStateFilterValue = string;

export type InstancePatchStateFilterValues = Array<unknown>;
export type InstancePatchStateList = Array<unknown>;
export type InstancePatchStateOperatorType = never;
export type InstancePatchStatesList = Array<unknown>;
export type InstanceProperties = Array<unknown>;
export interface InstanceProperty {
}
export interface InstancePropertyFilter {
}
export type InstancePropertyFilterKey = never;
export type InstancePropertyFilterList = Array<unknown>;
export type InstancePropertyFilterOperator = never;
export type InstancePropertyFilterValue = string;

export type InstancePropertyFilterValueSet = Array<unknown>;
export interface InstancePropertyStringFilter {
}
export type InstancePropertyStringFilterKey = string;

export type InstancePropertyStringFilterList = Array<unknown>;
export type InstanceRole = string;

export type InstancesCount = number;

export type InstanceState = string;

export type InstanceStatus = string;

export type InstanceTagName = string;

export type InstanceType = string;

export type Integer = number;

export interface InternalServerError {
}
export interface InvalidActivation {
}
export interface InvalidActivationId {
}
export interface InvalidAggregatorException {
}
export interface InvalidAllowedPatternException {
}
export interface InvalidAssociation {
}
export interface InvalidAssociationVersion {
}
export interface InvalidAutomationExecutionParametersException {
}
export interface InvalidAutomationSignalException {
}
export interface InvalidAutomationStatusUpdateException {
}
export interface InvalidCommandId {
}
export interface InvalidDeleteInventoryParametersException {
}
export interface InvalidDeletionIdException {
}
export interface InvalidDocument {
}
export interface InvalidDocumentContent {
}
export interface InvalidDocumentOperation {
}
export interface InvalidDocumentSchemaVersion {
}
export interface InvalidDocumentType {
}
export interface InvalidDocumentVersion {
}
export interface InvalidFilter {
}
export interface InvalidFilterKey {
}
export interface InvalidFilterOption {
}
export interface InvalidFilterValue {
}
export interface InvalidInstanceId {
}
export interface InvalidInstanceInformationFilterValue {
}
export interface InvalidInstancePropertyFilterValue {
}
export interface InvalidInventoryGroupException {
}
export interface InvalidInventoryItemContextException {
}
export interface InvalidInventoryRequestException {
}
export interface InvalidItemContentException {
}
export interface InvalidKeyId {
}
export interface InvalidNextToken {
}
export interface InvalidNotificationConfig {
}
export interface InvalidOptionException {
}
export interface InvalidOutputFolder {
}
export interface InvalidOutputLocation {
}
export interface InvalidParameters {
}
export interface InvalidPermissionType {
}
export interface InvalidPluginName {
}
export interface InvalidPolicyAttributeException {
}
export interface InvalidPolicyTypeException {
}
export interface InvalidResourceId {
}
export interface InvalidResourceType {
}
export interface InvalidResultAttributeException {
}
export interface InvalidRole {
}
export interface InvalidSchedule {
}
export interface InvalidTag {
}
export interface InvalidTarget {
}
export interface InvalidTargetMaps {
}
export interface InvalidTypeNameException {
}
export interface InvalidUpdate {
}
export interface InventoryAggregator {
}
export type InventoryAggregatorExpression = string;

export type InventoryAggregatorList = Array<unknown>;
export type InventoryAttributeDataType = never;
export type InventoryDeletionLastStatusMessage = string;

export type InventoryDeletionLastStatusUpdateTime = Date | string;

export type InventoryDeletionsList = Array<unknown>;
export type InventoryDeletionStartTime = Date | string;

export type InventoryDeletionStatus = never;
export interface InventoryDeletionStatusItem {
}
export interface InventoryDeletionSummary {
}
export interface InventoryDeletionSummaryItem {
}
export type InventoryDeletionSummaryItems = Array<unknown>;
export interface InventoryFilter {
}
export type InventoryFilterKey = string;

export type InventoryFilterList = Array<unknown>;
export type InventoryFilterValue = string;

export type InventoryFilterValueList = Array<unknown>;
export interface InventoryGroup {
}
export type InventoryGroupList = Array<unknown>;
export type InventoryGroupName = string;

export interface InventoryItem {
}
export interface InventoryItemAttribute {
}
export type InventoryItemAttributeList = Array<unknown>;
export type InventoryItemAttributeName = string;

export type InventoryItemCaptureTime = string;

export type InventoryItemContentContext = Record<string, unknown>;
export type InventoryItemContentHash = string;

export type InventoryItemEntry = Record<string, unknown>;
export type InventoryItemEntryList = Array<unknown>;
export type InventoryItemList = Array<unknown>;
export interface InventoryItemSchema {
}
export type InventoryItemSchemaResultList = Array<unknown>;
export type InventoryItemSchemaVersion = string;

export type InventoryItemTypeName = string;

export type InventoryItemTypeNameFilter = string;

export type InventoryQueryOperatorType = never;
export interface InventoryResultEntity {
}
export type InventoryResultEntityId = string;

export type InventoryResultEntityList = Array<unknown>;
export interface InventoryResultItem {
}
export type InventoryResultItemKey = string;

export type InventoryResultItemMap = Record<string, unknown>;
export type InventorySchemaDeleteOption = never;
export type InventoryTypeDisplayName = string;

export interface InvocationDoesNotExist {
}
export type InvocationTraceOutput = string;

export type IPAddress = string;

export type ISO8601String = string;

export type IsSubTypeSchema = boolean;

export interface ItemContentMismatchException {
}
export interface ItemSizeLimitExceededException {
}
export type KeyList = Array<unknown>;
export type KeyName = string;

export interface LabelParameterVersionRequest {
}
export interface LabelParameterVersionResult {
}
export type LastResourceDataSyncMessage = string;

export type LastResourceDataSyncStatus = never;
export type LastResourceDataSyncTime = Date | string;

export type LastSuccessfulResourceDataSyncTime = Date | string;

export interface ListAssociationsRequest {
}
export interface ListAssociationsResult {
}
export interface ListAssociationVersionsRequest {
}
export interface ListAssociationVersionsResult {
}
export interface ListCommandInvocationsRequest {
}
export interface ListCommandInvocationsResult {
}
export interface ListCommandsRequest {
}
export interface ListCommandsResult {
}
export interface ListComplianceItemsRequest {
}
export interface ListComplianceItemsResult {
}
export interface ListComplianceSummariesRequest {
}
export interface ListComplianceSummariesResult {
}
export interface ListDocumentMetadataHistoryRequest {
}
export interface ListDocumentMetadataHistoryResponse {
}
export interface ListDocumentsRequest {
}
export interface ListDocumentsResult {
}
export interface ListDocumentVersionsRequest {
}
export interface ListDocumentVersionsResult {
}
export interface ListInventoryEntriesRequest {
}
export interface ListInventoryEntriesResult {
}
export interface ListNodesRequest {
}
export interface ListNodesResult {
}
export interface ListNodesSummaryRequest {
}
export interface ListNodesSummaryResult {
}
export interface ListOpsItemEventsRequest {
}
export interface ListOpsItemEventsResponse {
}
export interface ListOpsItemRelatedItemsRequest {
}
export interface ListOpsItemRelatedItemsResponse {
}
export type ListOpsMetadataMaxResults = number;

export interface ListOpsMetadataRequest {
}
export interface ListOpsMetadataResult {
}
export interface ListResourceComplianceSummariesRequest {
}
export interface ListResourceComplianceSummariesResult {
}
export interface ListResourceDataSyncRequest {
}
export interface ListResourceDataSyncResult {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResult {
}
export interface LoggingInfo {
}
export type Long = number;

export type MaintenanceWindowAllowUnassociatedTargets = boolean;

export interface MaintenanceWindowAutomationParameters {
}
export type MaintenanceWindowCutoff = number;

export type MaintenanceWindowDescription = string;

export type MaintenanceWindowDurationHours = number;

export type MaintenanceWindowEnabled = boolean;

export interface MaintenanceWindowExecution {
}
export type MaintenanceWindowExecutionId = string;

export type MaintenanceWindowExecutionList = Array<unknown>;
export type MaintenanceWindowExecutionStatus = never;
export type MaintenanceWindowExecutionStatusDetails = string;

export type MaintenanceWindowExecutionTaskExecutionId = string;

export type MaintenanceWindowExecutionTaskId = string;

export interface MaintenanceWindowExecutionTaskIdentity {
}
export type MaintenanceWindowExecutionTaskIdentityList = Array<unknown>;
export type MaintenanceWindowExecutionTaskIdList = Array<unknown>;
export type MaintenanceWindowExecutionTaskInvocationId = string;

export interface MaintenanceWindowExecutionTaskInvocationIdentity {
}
export type MaintenanceWindowExecutionTaskInvocationIdentityList = Array<unknown>;
export type MaintenanceWindowExecutionTaskInvocationParameters = string;

export interface MaintenanceWindowFilter {
}
export type MaintenanceWindowFilterKey = string;

export type MaintenanceWindowFilterList = Array<unknown>;
export type MaintenanceWindowFilterValue = string;

export type MaintenanceWindowFilterValues = Array<unknown>;
export type MaintenanceWindowId = string;

export interface MaintenanceWindowIdentity {
}
export interface MaintenanceWindowIdentityForTarget {
}
export type MaintenanceWindowIdentityList = Array<unknown>;
export type MaintenanceWindowLambdaClientContext = string;

export interface MaintenanceWindowLambdaParameters {
}
export type MaintenanceWindowLambdaPayload = Uint8Array | string;

export type MaintenanceWindowLambdaQualifier = string;

export type MaintenanceWindowMaxResults = number;

export type MaintenanceWindowName = string;

export type MaintenanceWindowOffset = number;

export type MaintenanceWindowResourceType = never;
export interface MaintenanceWindowRunCommandParameters {
}
export type MaintenanceWindowSchedule = string;

export type MaintenanceWindowSearchMaxResults = number;

export type MaintenanceWindowsForTargetList = Array<unknown>;
export type MaintenanceWindowStepFunctionsInput = string;

export type MaintenanceWindowStepFunctionsName = string;

export interface MaintenanceWindowStepFunctionsParameters {
}
export type MaintenanceWindowStringDateTime = string;

export interface MaintenanceWindowTarget {
}
export type MaintenanceWindowTargetId = string;

export type MaintenanceWindowTargetList = Array<unknown>;
export interface MaintenanceWindowTask {
}
export type MaintenanceWindowTaskArn = string;

export type MaintenanceWindowTaskCutoffBehavior = never;
export type MaintenanceWindowTaskId = string;

export interface MaintenanceWindowTaskInvocationParameters {
}
export type MaintenanceWindowTaskList = Array<unknown>;
export type MaintenanceWindowTaskParameterName = string;

export type MaintenanceWindowTaskParameters = Record<string, unknown>;
export type MaintenanceWindowTaskParametersList = Array<unknown>;
export type MaintenanceWindowTaskParameterValue = string;

export interface MaintenanceWindowTaskParameterValueExpression {
}
export type MaintenanceWindowTaskParameterValueList = Array<unknown>;
export type MaintenanceWindowTaskPriority = number;

export type MaintenanceWindowTaskTargetId = string;

export type MaintenanceWindowTaskType = never;
export type MaintenanceWindowTimezone = string;

export interface MalformedResourcePolicyDocumentException {
}
export type ManagedInstanceId = string;

export type ManagedStatus = never;
export type MaxConcurrency = string;

export interface MaxDocumentSizeExceeded {
}
export type MaxErrors = string;

export type MaxResults = number;

export type MaxResultsEC2Compatible = number;

export type MaxSessionDuration = string;

export type MetadataKey = string;

export type MetadataKeysToDeleteList = Array<unknown>;
export type MetadataMap = Record<string, unknown>;
export interface MetadataValue {
}
export type MetadataValueString = string;

export interface ModifyDocumentPermissionRequest {
}
export interface ModifyDocumentPermissionResponse {
}
export type NextToken = string;

export interface Node {
}
export type NodeAccountId = string;

export interface NodeAggregator {
}
export type NodeAggregatorList = Array<unknown>;
export type NodeAggregatorType = never;
export type NodeAttributeName = never;
export type NodeCaptureTime = Date | string;

export interface NodeFilter {
}
export type NodeFilterKey = never;
export type NodeFilterList = Array<unknown>;
export type NodeFilterOperatorType = never;
export type NodeFilterValue = string;

export type NodeFilterValueList = Array<unknown>;
export type NodeId = string;

export type NodeList = Array<unknown>;
export type NodeOrganizationalUnitId = string;

export type NodeOrganizationalUnitPath = string;

export interface NodeOwnerInfo {
}
export type NodeRegion = string;

export type NodeSummary = Record<string, unknown>;
export type NodeSummaryList = Array<unknown>;
export type NodeType = never;
export type NodeTypeName = never;
export interface NonCompliantSummary {
}
export type NormalStringMap = Record<string, unknown>;
export type NotificationArn = string;

export interface NotificationConfig {
}
export type NotificationEvent = never;
export type NotificationEventList = Array<unknown>;
export type NotificationType = never;
export type OperatingSystem = never;
export interface OpsAggregator {
}
export type OpsAggregatorList = Array<unknown>;
export type OpsAggregatorType = string;

export type OpsAggregatorValue = string;

export type OpsAggregatorValueKey = string;

export type OpsAggregatorValueMap = Record<string, unknown>;
export type OpsDataAttributeName = string;

export type OpsDataTypeName = string;

export interface OpsEntity {
}
export type OpsEntityId = string;

export interface OpsEntityItem {
}
export type OpsEntityItemCaptureTime = string;

export type OpsEntityItemEntry = Record<string, unknown>;
export type OpsEntityItemEntryList = Array<unknown>;
export type OpsEntityItemKey = string;

export type OpsEntityItemMap = Record<string, unknown>;
export type OpsEntityList = Array<unknown>;
export interface OpsFilter {
}
export type OpsFilterKey = string;

export type OpsFilterList = Array<unknown>;
export type OpsFilterOperatorType = never;
export type OpsFilterValue = string;

export type OpsFilterValueList = Array<unknown>;
export interface OpsItem {
}
export interface OpsItemAccessDeniedException {
}
export type OpsItemAccountId = string;

export interface OpsItemAlreadyExistsException {
}
export type OpsItemArn = string;

export type OpsItemCategory = string;

export interface OpsItemConflictException {
}
export type OpsItemDataKey = string;

export type OpsItemDataType = never;
export interface OpsItemDataValue {
}
export type OpsItemDataValueString = string;

export type OpsItemDescription = string;

export interface OpsItemEventFilter {
}
export type OpsItemEventFilterKey = never;
export type OpsItemEventFilterOperator = never;
export type OpsItemEventFilters = Array<unknown>;
export type OpsItemEventFilterValue = string;

export type OpsItemEventFilterValues = Array<unknown>;
export type OpsItemEventMaxResults = number;

export type OpsItemEventSummaries = Array<unknown>;
export interface OpsItemEventSummary {
}
export interface OpsItemFilter {
}
export type OpsItemFilterKey = never;
export type OpsItemFilterOperator = never;
export type OpsItemFilters = Array<unknown>;
export type OpsItemFilterValue = string;

export type OpsItemFilterValues = Array<unknown>;
export type OpsItemId = string;

export interface OpsItemIdentity {
}
export interface OpsItemInvalidParameterException {
}
export interface OpsItemLimitExceededException {
}
export type OpsItemMaxResults = number;

export interface OpsItemNotFoundException {
}
export interface OpsItemNotification {
}
export type OpsItemNotifications = Array<unknown>;
export type OpsItemOperationalData = Record<string, unknown>;
export type OpsItemOpsDataKeysList = Array<unknown>;
export type OpsItemParameterNamesList = Array<unknown>;
export type OpsItemPriority = number;

export interface OpsItemRelatedItemAlreadyExistsException {
}
export type OpsItemRelatedItemAssociationId = string;

export interface OpsItemRelatedItemAssociationNotFoundException {
}
export type OpsItemRelatedItemAssociationResourceType = string;

export type OpsItemRelatedItemAssociationResourceUri = string;

export type OpsItemRelatedItemAssociationType = string;

export interface OpsItemRelatedItemsFilter {
}
export type OpsItemRelatedItemsFilterKey = never;
export type OpsItemRelatedItemsFilterOperator = never;
export type OpsItemRelatedItemsFilters = Array<unknown>;
export type OpsItemRelatedItemsFilterValue = string;

export type OpsItemRelatedItemsFilterValues = Array<unknown>;
export type OpsItemRelatedItemsMaxResults = number;

export type OpsItemRelatedItemSummaries = Array<unknown>;
export interface OpsItemRelatedItemSummary {
}
export type OpsItemSeverity = string;

export type OpsItemSource = string;

export type OpsItemStatus = never;
export type OpsItemSummaries = Array<unknown>;
export interface OpsItemSummary {
}
export type OpsItemTitle = string;

export type OpsItemType = string;

export interface OpsMetadata {
}
export interface OpsMetadataAlreadyExistsException {
}
export type OpsMetadataArn = string;

export interface OpsMetadataFilter {
}
export type OpsMetadataFilterKey = string;

export type OpsMetadataFilterList = Array<unknown>;
export type OpsMetadataFilterValue = string;

export type OpsMetadataFilterValueList = Array<unknown>;
export interface OpsMetadataInvalidArgumentException {
}
export interface OpsMetadataKeyLimitExceededException {
}
export interface OpsMetadataLimitExceededException {
}
export type OpsMetadataList = Array<unknown>;
export interface OpsMetadataNotFoundException {
}
export type OpsMetadataResourceId = string;

export interface OpsMetadataTooManyUpdatesException {
}
export interface OpsResultAttribute {
}
export type OpsResultAttributeList = Array<unknown>;
export interface OutputSource {
}
export type OutputSourceId = string;

export type OutputSourceType = string;

export type OwnerInformation = string;

export interface Parameter {
}
export interface ParameterAlreadyExists {
}
export type ParameterDataType = string;

export type ParameterDescription = string;

export interface ParameterHistory {
}
export type ParameterHistoryList = Array<unknown>;
export interface ParameterInlinePolicy {
}
export type ParameterKeyId = string;

export type ParameterLabel = string;

export type ParameterLabelList = Array<unknown>;
export interface ParameterLimitExceeded {
}
export type ParameterList = Array<unknown>;
export interface ParameterMaxVersionLimitExceeded {
}
export interface ParameterMetadata {
}
export type ParameterMetadataList = Array<unknown>;
export type ParameterName = string;

export type ParameterNameList = Array<unknown>;
export interface ParameterNotFound {
}
export interface ParameterPatternMismatchException {
}
export type ParameterPolicies = string;

export type ParameterPolicyList = Array<unknown>;
export type Parameters = Record<string, unknown>;
export interface ParametersFilter {
}
export type ParametersFilterKey = never;
export type ParametersFilterList = Array<unknown>;
export type ParametersFilterValue = string;

export type ParametersFilterValueList = Array<unknown>;
export interface ParameterStringFilter {
}
export type ParameterStringFilterKey = string;

export type ParameterStringFilterList = Array<unknown>;
export type ParameterStringFilterValue = string;

export type ParameterStringFilterValueList = Array<unknown>;
export type ParameterStringQueryOption = string;

export type ParameterTier = never;
export type ParameterType = never;
export type ParameterValue = string;

export type ParameterValueList = Array<unknown>;
export interface ParameterVersionLabelLimitExceeded {
}
export interface ParameterVersionNotFound {
}
export interface ParentStepDetails {
}
export interface Patch {
}
export type PatchAction = never;
export type PatchAdvisoryId = string;

export type PatchAdvisoryIdList = Array<unknown>;
export type PatchArch = string;

export type PatchAvailableSecurityUpdateCount = number;

export interface PatchBaselineIdentity {
}
export type PatchBaselineIdentityList = Array<unknown>;
export type PatchBaselineMaxResults = number;

export type PatchBugzillaId = string;

export type PatchBugzillaIdList = Array<unknown>;
export type PatchClassification = string;

export interface PatchComplianceData {
}
export type PatchComplianceDataList = Array<unknown>;
export type PatchComplianceDataState = never;
export type PatchComplianceLevel = never;
export type PatchComplianceMaxResults = number;

export type PatchComplianceStatus = never;
export type PatchContentUrl = string;

export type PatchCriticalNonCompliantCount = number;

export type PatchCVEId = string;

export type PatchCVEIdList = Array<unknown>;
export type PatchCVEIds = string;

export type PatchDeploymentStatus = never;
export type PatchDescription = string;

export type PatchEpoch = number;

export type PatchFailedCount = number;

export interface PatchFilter {
}
export interface PatchFilterGroup {
}
export type PatchFilterKey = never;
export type PatchFilterList = Array<unknown>;
export type PatchFilterValue = string;

export type PatchFilterValueList = Array<unknown>;
export type PatchGroup = string;

export type PatchGroupList = Array<unknown>;
export interface PatchGroupPatchBaselineMapping {
}
export type PatchGroupPatchBaselineMappingList = Array<unknown>;
export type PatchId = string;

export type PatchIdList = Array<unknown>;
export type PatchInstalledCount = number;

export type PatchInstalledOtherCount = number;

export type PatchInstalledPendingRebootCount = number;

export type PatchInstalledRejectedCount = number;

export type PatchKbNumber = string;

export type PatchLanguage = string;

export type PatchList = Array<unknown>;
export type PatchMissingCount = number;

export type PatchMsrcNumber = string;

export type PatchMsrcSeverity = string;

export type PatchName = string;

export type PatchNotApplicableCount = number;

export type PatchOperationType = never;
export interface PatchOrchestratorFilter {
}
export type PatchOrchestratorFilterKey = string;

export type PatchOrchestratorFilterList = Array<unknown>;
export type PatchOrchestratorFilterValue = string;

export type PatchOrchestratorFilterValues = Array<unknown>;
export type PatchOtherNonCompliantCount = number;

export type PatchProduct = string;

export type PatchProductFamily = string;

export type PatchPropertiesList = Array<unknown>;
export type PatchProperty = never;
export type PatchPropertyEntry = Record<string, unknown>;
export type PatchRelease = string;

export type PatchRepository = string;

export interface PatchRule {
}
export interface PatchRuleGroup {
}
export type PatchRuleList = Array<unknown>;
export type PatchSecurityNonCompliantCount = number;

export type PatchSet = never;
export type PatchSeverity = string;

export interface PatchSource {
}
export type PatchSourceConfiguration = string;

export type PatchSourceList = Array<unknown>;
export type PatchSourceName = string;

export type PatchSourceProduct = string;

export type PatchSourceProductList = Array<unknown>;
export interface PatchStatus {
}
export type PatchStringDateTime = string;

export type PatchTitle = string;

export type PatchUnreportedNotApplicableCount = number;

export type PatchVendor = string;

export type PatchVersion = string;

export type PingStatus = never;
export type PlatformName = string;

export type PlatformType = never;
export type PlatformTypeList = Array<unknown>;
export type PlatformVersion = string;

export interface PoliciesLimitExceededException {
}
export type Policy = string;

export type PolicyHash = string;

export type PolicyId = string;

export type Product = string;

export interface ProgressCounters {
}
export type PSParameterName = string;

export type PSParameterSelector = string;

export type PSParameterValue = string;

export type PSParameterVersion = number;

export interface PutComplianceItemsRequest {
}
export interface PutComplianceItemsResult {
}
export type PutInventoryMessage = string;

export interface PutInventoryRequest {
}
export interface PutInventoryResult {
}
export interface PutParameterRequest {
}
export interface PutParameterResult {
}
export interface PutResourcePolicyRequest {
}
export interface PutResourcePolicyResponse {
}
export type RebootOption = never;
export type Region = string;

export type RegionList = Array<unknown>;
export type Regions = Array<unknown>;
export interface RegisterDefaultPatchBaselineRequest {
}
export interface RegisterDefaultPatchBaselineResult {
}
export interface RegisterPatchBaselineForPatchGroupRequest {
}
export interface RegisterPatchBaselineForPatchGroupResult {
}
export interface RegisterTargetWithMaintenanceWindowRequest {
}
export interface RegisterTargetWithMaintenanceWindowResult {
}
export interface RegisterTaskWithMaintenanceWindowRequest {
}
export interface RegisterTaskWithMaintenanceWindowResult {
}
export type RegistrationLimit = number;

export interface RegistrationMetadataItem {
}
export type RegistrationMetadataKey = string;

export type RegistrationMetadataList = Array<unknown>;
export type RegistrationMetadataValue = string;

export type RegistrationsCount = number;

export interface RelatedOpsItem {
}
export type RelatedOpsItems = Array<unknown>;
export type RemainingCount = number;

export interface RemoveTagsFromResourceRequest {
}
export interface RemoveTagsFromResourceResult {
}
export type RequireType = string;

export interface ResetServiceSettingRequest {
}
export interface ResetServiceSettingResult {
}
export interface ResolvedTargets {
}
export type ResourceArnString = string;

export interface ResourceComplianceSummaryItem {
}
export type ResourceComplianceSummaryItemList = Array<unknown>;
export type ResourceCount = number;

export type ResourceCountByStatus = string;

export interface ResourceDataSyncAlreadyExistsException {
}
export type ResourceDataSyncAWSKMSKeyARN = string;

export interface ResourceDataSyncAwsOrganizationsSource {
}
export interface ResourceDataSyncConflictException {
}
export interface ResourceDataSyncCountExceededException {
}
export type ResourceDataSyncCreatedTime = Date | string;

export interface ResourceDataSyncDestinationDataSharing {
}
export type ResourceDataSyncDestinationDataSharingType = string;

export type ResourceDataSyncEnableAllOpsDataSources = boolean;

export type ResourceDataSyncIncludeFutureRegions = boolean;

export interface ResourceDataSyncInvalidConfigurationException {
}
export interface ResourceDataSyncItem {
}
export type ResourceDataSyncItemList = Array<unknown>;
export type ResourceDataSyncLastModifiedTime = Date | string;

export type ResourceDataSyncName = string;

export interface ResourceDataSyncNotFoundException {
}
export interface ResourceDataSyncOrganizationalUnit {
}
export type ResourceDataSyncOrganizationalUnitId = string;

export type ResourceDataSyncOrganizationalUnitList = Array<unknown>;
export type ResourceDataSyncOrganizationSourceType = string;

export type ResourceDataSyncS3BucketName = string;

export interface ResourceDataSyncS3Destination {
}
export type ResourceDataSyncS3Format = never;
export type ResourceDataSyncS3Prefix = string;

export type ResourceDataSyncS3Region = string;

export interface ResourceDataSyncSource {
}
export type ResourceDataSyncSourceRegion = string;

export type ResourceDataSyncSourceRegionList = Array<unknown>;
export type ResourceDataSyncSourceType = string;

export interface ResourceDataSyncSourceWithState {
}
export type ResourceDataSyncState = string;

export type ResourceDataSyncType = string;

export type ResourceId = string;

export interface ResourceInUseException {
}
export interface ResourceLimitExceededException {
}
export interface ResourceNotFoundException {
}
export interface ResourcePolicyConflictException {
}
export interface ResourcePolicyInvalidParameterException {
}
export interface ResourcePolicyLimitExceededException {
}
export type ResourcePolicyMaxResults = number;

export interface ResourcePolicyNotFoundException {
}
export type ResourcePolicyParameterNamesList = Array<unknown>;
export type ResourceType = never;
export type ResourceTypeForTagging = never;
export type ResponseCode = number;

export interface ResultAttribute {
}
export type ResultAttributeList = Array<unknown>;
export interface ResumeSessionRequest {
}
export interface ResumeSessionResponse {
}
export type Reviewer = string;

export interface ReviewInformation {
}
export type ReviewInformationList = Array<unknown>;
export type ReviewStatus = never;
export interface Runbook {
}
export type Runbooks = Array<unknown>;
export type S3BucketName = string;

export type S3KeyPrefix = string;

export interface S3OutputLocation {
}
export interface S3OutputUrl {
}
export type S3Region = string;

export interface ScheduledWindowExecution {
}
export type ScheduledWindowExecutionList = Array<unknown>;
export type ScheduleExpression = string;

export type ScheduleOffset = number;

export interface SendAutomationSignalRequest {
}
export interface SendAutomationSignalResult {
}
export interface SendCommandRequest {
}
export interface SendCommandResult {
}
export interface ServiceQuotaExceededException {
}
export type ServiceRole = string;

export interface ServiceSetting {
}
export type ServiceSettingId = string;

export interface ServiceSettingNotFound {
}
export type ServiceSettingValue = string;

export interface Session {
}
export type SessionDetails = string;

export interface SessionFilter {
}
export type SessionFilterKey = never;
export type SessionFilterList = Array<unknown>;
export type SessionFilterValue = string;

export type SessionId = string;

export type SessionList = Array<unknown>;
export type SessionManagerCloudWatchOutputUrl = string;

export interface SessionManagerOutputUrl {
}
export type SessionManagerParameterName = string;

export type SessionManagerParameters = Record<string, unknown>;
export type SessionManagerParameterValue = string;

export type SessionManagerParameterValueList = Array<unknown>;
export type SessionManagerS3OutputUrl = string;

export type SessionMaxResults = number;

export type SessionOwner = string;

export type SessionReason = string;

export type SessionState = never;
export type SessionStatus = never;
export type SessionTarget = string;

export type SessionTokenType = string;

export interface SeveritySummary {
}
export type SharedDocumentVersion = string;

export type SignalType = never;
export type SnapshotDownloadUrl = string;

export type SnapshotId = string;

export type SourceId = string;

export type SourceType = never;
export type StandardErrorContent = string;

export type StandardOutputContent = string;

export interface StartAccessRequestRequest {
}
export interface StartAccessRequestResponse {
}
export interface StartAssociationsOnceRequest {
}
export interface StartAssociationsOnceResult {
}
export interface StartAutomationExecutionRequest {
}
export interface StartAutomationExecutionResult {
}
export interface StartChangeRequestExecutionRequest {
}
export interface StartChangeRequestExecutionResult {
}
export interface StartExecutionPreviewRequest {
}
export interface StartExecutionPreviewResponse {
}
export interface StartSessionRequest {
}
export interface StartSessionResponse {
}
export type StatusAdditionalInfo = string;

export type StatusDetails = string;

export type StatusMessage = string;

export type StatusName = string;

export interface StatusUnchanged {
}
export interface StepExecution {
}
export interface StepExecutionFilter {
}
export type StepExecutionFilterKey = never;
export type StepExecutionFilterList = Array<unknown>;
export type StepExecutionFilterValue = string;

export type StepExecutionFilterValueList = Array<unknown>;
export type StepExecutionList = Array<unknown>;
export type StepPreviewMap = Record<string, unknown>;
export interface StopAutomationExecutionRequest {
}
export interface StopAutomationExecutionResult {
}
export type StopType = never;
export type StreamUrl = string;

export type String1to256 = string;

export type StringDateTime = string;

export type StringList = Array<unknown>;
export interface SubTypeCountLimitExceededException {
}
export interface Tag {
}
export type TagKey = string;

export type TagList = Array<unknown>;
export type TagValue = string;

export interface Target {
}
export type TargetCount = number;

export interface TargetInUseException {
}
export type TargetKey = string;

export interface TargetLocation {
}
export type TargetLocations = Array<unknown>;
export type TargetLocationsURL = string;

export type TargetMap = Record<string, unknown>;
export type TargetMapKey = string;

export type TargetMaps = Array<unknown>;
export type TargetMapValue = string;

export type TargetMapValueList = Array<unknown>;
export interface TargetNotConnected {
}
export type TargetParameterList = Array<unknown>;
export interface TargetPreview {
}
export type TargetPreviewList = Array<unknown>;
export type Targets = Array<unknown>;
export type TargetType = string;

export type TargetValue = string;

export type TargetValues = Array<unknown>;
export interface TerminateSessionRequest {
}
export interface TerminateSessionResponse {
}
export interface ThrottlingException {
}
export type TimeoutSeconds = number;

export type TokenValue = string;

export interface TooManyTagsError {
}
export interface TooManyUpdates {
}
export type TotalCount = number;

export interface TotalSizeLimitExceededException {
}
export interface UnlabelParameterVersionRequest {
}
export interface UnlabelParameterVersionResult {
}
export interface UnsupportedCalendarException {
}
export interface UnsupportedFeatureRequiredException {
}
export interface UnsupportedInventoryItemContextException {
}
export interface UnsupportedInventorySchemaVersionException {
}
export interface UnsupportedOperatingSystem {
}
export interface UnsupportedOperationException {
}
export interface UnsupportedParameterType {
}
export interface UnsupportedPlatformType {
}
export interface UpdateAssociationRequest {
}
export interface UpdateAssociationResult {
}
export interface UpdateAssociationStatusRequest {
}
export interface UpdateAssociationStatusResult {
}
export interface UpdateDocumentDefaultVersionRequest {
}
export interface UpdateDocumentDefaultVersionResult {
}
export interface UpdateDocumentMetadataRequest {
}
export interface UpdateDocumentMetadataResponse {
}
export interface UpdateDocumentRequest {
}
export interface UpdateDocumentResult {
}
export interface UpdateMaintenanceWindowRequest {
}
export interface UpdateMaintenanceWindowResult {
}
export interface UpdateMaintenanceWindowTargetRequest {
}
export interface UpdateMaintenanceWindowTargetResult {
}
export interface UpdateMaintenanceWindowTaskRequest {
}
export interface UpdateMaintenanceWindowTaskResult {
}
export interface UpdateManagedInstanceRoleRequest {
}
export interface UpdateManagedInstanceRoleResult {
}
export interface UpdateOpsItemRequest {
}
export interface UpdateOpsItemResponse {
}
export interface UpdateOpsMetadataRequest {
}
export interface UpdateOpsMetadataResult {
}
export interface UpdatePatchBaselineRequest {
}
export interface UpdatePatchBaselineResult {
}
export interface UpdateResourceDataSyncRequest {
}
export interface UpdateResourceDataSyncResult {
}
export interface UpdateServiceSettingRequest {
}
export interface UpdateServiceSettingResult {
}
export type Url = string;

export type UUID = string;

export interface ValidationException {
}
export type ValidNextStep = string;

export type ValidNextStepList = Array<unknown>;
export type Version = string;

export declare namespace AddTagsToResource {
  export type Input = AddTagsToResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidResourceId
    | InvalidResourceType
    | TooManyTagsError
    | TooManyUpdates
    | CommonAwsError;
}

export declare namespace AssociateOpsItemRelatedItem {
  export type Input = AssociateOpsItemRelatedItemRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | OpsItemConflictException
    | OpsItemInvalidParameterException
    | OpsItemLimitExceededException
    | OpsItemNotFoundException
    | OpsItemRelatedItemAlreadyExistsException
    | CommonAwsError;
}

export declare namespace CancelCommand {
  export type Input = CancelCommandRequest;
  export type Output = {};
  export type Error =
    | DuplicateInstanceId
    | InternalServerError
    | InvalidCommandId
    | InvalidInstanceId
    | CommonAwsError;
}

export declare namespace CancelMaintenanceWindowExecution {
  export type Input = CancelMaintenanceWindowExecutionRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace CreateActivation {
  export type Input = CreateActivationRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidParameters
    | CommonAwsError;
}

export declare namespace CreateAssociation {
  export type Input = CreateAssociationRequest;
  export type Output = {};
  export type Error =
    | AssociationAlreadyExists
    | AssociationLimitExceeded
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentVersion
    | InvalidInstanceId
    | InvalidOutputLocation
    | InvalidParameters
    | InvalidSchedule
    | InvalidTag
    | InvalidTarget
    | InvalidTargetMaps
    | UnsupportedPlatformType
    | CommonAwsError;
}

export declare namespace CreateAssociationBatch {
  export type Input = CreateAssociationBatchRequest;
  export type Output = {};
  export type Error =
    | AssociationLimitExceeded
    | DuplicateInstanceId
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentVersion
    | InvalidInstanceId
    | InvalidOutputLocation
    | InvalidParameters
    | InvalidSchedule
    | InvalidTarget
    | InvalidTargetMaps
    | UnsupportedPlatformType
    | CommonAwsError;
}

export declare namespace CreateDocument {
  export type Input = CreateDocumentRequest;
  export type Output = {};
  export type Error =
    | DocumentAlreadyExists
    | DocumentLimitExceeded
    | InternalServerError
    | InvalidDocumentContent
    | InvalidDocumentSchemaVersion
    | MaxDocumentSizeExceeded
    | TooManyUpdates
    | CommonAwsError;
}

export declare namespace CreateMaintenanceWindow {
  export type Input = CreateMaintenanceWindowRequest;
  export type Output = {};
  export type Error =
    | IdempotentParameterMismatch
    | InternalServerError
    | ResourceLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateOpsItem {
  export type Input = CreateOpsItemRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | OpsItemAccessDeniedException
    | OpsItemAlreadyExistsException
    | OpsItemInvalidParameterException
    | OpsItemLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateOpsMetadata {
  export type Input = CreateOpsMetadataRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | OpsMetadataAlreadyExistsException
    | OpsMetadataInvalidArgumentException
    | OpsMetadataLimitExceededException
    | OpsMetadataTooManyUpdatesException
    | CommonAwsError;
}

export declare namespace CreatePatchBaseline {
  export type Input = CreatePatchBaselineRequest;
  export type Output = {};
  export type Error =
    | IdempotentParameterMismatch
    | InternalServerError
    | ResourceLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateResourceDataSync {
  export type Input = CreateResourceDataSyncRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | ResourceDataSyncAlreadyExistsException
    | ResourceDataSyncCountExceededException
    | ResourceDataSyncInvalidConfigurationException
    | CommonAwsError;
}

export declare namespace DeleteActivation {
  export type Input = DeleteActivationRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidActivation
    | InvalidActivationId
    | TooManyUpdates
    | CommonAwsError;
}

export declare namespace DeleteAssociation {
  export type Input = DeleteAssociationRequest;
  export type Output = {};
  export type Error =
    | AssociationDoesNotExist
    | InternalServerError
    | InvalidDocument
    | InvalidInstanceId
    | TooManyUpdates
    | CommonAwsError;
}

export declare namespace DeleteDocument {
  export type Input = DeleteDocumentRequest;
  export type Output = {};
  export type Error =
    | AssociatedInstances
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentOperation
    | TooManyUpdates
    | CommonAwsError;
}

export declare namespace DeleteInventory {
  export type Input = DeleteInventoryRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidDeleteInventoryParametersException
    | InvalidInventoryRequestException
    | InvalidOptionException
    | InvalidTypeNameException
    | CommonAwsError;
}

export declare namespace DeleteMaintenanceWindow {
  export type Input = DeleteMaintenanceWindowRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DeleteOpsItem {
  export type Input = DeleteOpsItemRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | OpsItemInvalidParameterException
    | CommonAwsError;
}

export declare namespace DeleteOpsMetadata {
  export type Input = DeleteOpsMetadataRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | OpsMetadataInvalidArgumentException
    | OpsMetadataNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteParameter {
  export type Input = DeleteParameterRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | ParameterNotFound
    | CommonAwsError;
}

export declare namespace DeleteParameters {
  export type Input = DeleteParametersRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DeletePatchBaseline {
  export type Input = DeletePatchBaselineRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeleteResourceDataSync {
  export type Input = DeleteResourceDataSyncRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | ResourceDataSyncInvalidConfigurationException
    | ResourceDataSyncNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | MalformedResourcePolicyDocumentException
    | ResourceNotFoundException
    | ResourcePolicyConflictException
    | ResourcePolicyInvalidParameterException
    | ResourcePolicyNotFoundException
    | CommonAwsError;
}

export declare namespace DeregisterManagedInstance {
  export type Input = DeregisterManagedInstanceRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidInstanceId
    | CommonAwsError;
}

export declare namespace DeregisterPatchBaselineForPatchGroup {
  export type Input = DeregisterPatchBaselineForPatchGroupRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidResourceId
    | CommonAwsError;
}

export declare namespace DeregisterTargetFromMaintenanceWindow {
  export type Input = DeregisterTargetFromMaintenanceWindowRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | TargetInUseException
    | CommonAwsError;
}

export declare namespace DeregisterTaskFromMaintenanceWindow {
  export type Input = DeregisterTaskFromMaintenanceWindowRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeActivations {
  export type Input = DescribeActivationsRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidFilter
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeAssociation {
  export type Input = DescribeAssociationRequest;
  export type Output = {};
  export type Error =
    | AssociationDoesNotExist
    | InternalServerError
    | InvalidAssociationVersion
    | InvalidDocument
    | InvalidInstanceId
    | CommonAwsError;
}

export declare namespace DescribeAssociationExecutionTargets {
  export type Input = DescribeAssociationExecutionTargetsRequest;
  export type Output = {};
  export type Error =
    | AssociationDoesNotExist
    | AssociationExecutionDoesNotExist
    | InternalServerError
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeAssociationExecutions {
  export type Input = DescribeAssociationExecutionsRequest;
  export type Output = {};
  export type Error =
    | AssociationDoesNotExist
    | InternalServerError
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeAutomationExecutions {
  export type Input = DescribeAutomationExecutionsRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidFilterKey
    | InvalidFilterValue
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeAutomationStepExecutions {
  export type Input = DescribeAutomationStepExecutionsRequest;
  export type Output = {};
  export type Error =
    | AutomationExecutionNotFoundException
    | InternalServerError
    | InvalidFilterKey
    | InvalidFilterValue
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeAvailablePatches {
  export type Input = DescribeAvailablePatchesRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeDocument {
  export type Input = DescribeDocumentRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentVersion
    | CommonAwsError;
}

export declare namespace DescribeDocumentPermission {
  export type Input = DescribeDocumentPermissionRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentOperation
    | InvalidNextToken
    | InvalidPermissionType
    | CommonAwsError;
}

export declare namespace DescribeEffectiveInstanceAssociations {
  export type Input = DescribeEffectiveInstanceAssociationsRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidInstanceId
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeEffectivePatchesForPatchBaseline {
  export type Input = DescribeEffectivePatchesForPatchBaselineRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | InvalidResourceId
    | UnsupportedOperatingSystem
    | CommonAwsError;
}

export declare namespace DescribeInstanceAssociationsStatus {
  export type Input = DescribeInstanceAssociationsStatusRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidInstanceId
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeInstanceInformation {
  export type Input = DescribeInstanceInformationRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidFilterKey
    | InvalidInstanceId
    | InvalidInstanceInformationFilterValue
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeInstancePatchStates {
  export type Input = DescribeInstancePatchStatesRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeInstancePatchStatesForPatchGroup {
  export type Input = DescribeInstancePatchStatesForPatchGroupRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidFilter
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeInstancePatches {
  export type Input = DescribeInstancePatchesRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidFilter
    | InvalidInstanceId
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeInstanceProperties {
  export type Input = DescribeInstancePropertiesRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidActivationId
    | InvalidDocument
    | InvalidFilterKey
    | InvalidInstanceId
    | InvalidInstancePropertyFilterValue
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeInventoryDeletions {
  export type Input = DescribeInventoryDeletionsRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidDeletionIdException
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeMaintenanceWindowExecutionTaskInvocations {
  export type Input = DescribeMaintenanceWindowExecutionTaskInvocationsRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeMaintenanceWindowExecutionTasks {
  export type Input = DescribeMaintenanceWindowExecutionTasksRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeMaintenanceWindowExecutions {
  export type Input = DescribeMaintenanceWindowExecutionsRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeMaintenanceWindowSchedule {
  export type Input = DescribeMaintenanceWindowScheduleRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeMaintenanceWindowTargets {
  export type Input = DescribeMaintenanceWindowTargetsRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeMaintenanceWindowTasks {
  export type Input = DescribeMaintenanceWindowTasksRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeMaintenanceWindows {
  export type Input = DescribeMaintenanceWindowsRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeMaintenanceWindowsForTarget {
  export type Input = DescribeMaintenanceWindowsForTargetRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeOpsItems {
  export type Input = DescribeOpsItemsRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeParameters {
  export type Input = DescribeParametersRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidFilterKey
    | InvalidFilterOption
    | InvalidFilterValue
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribePatchBaselines {
  export type Input = DescribePatchBaselinesRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribePatchGroupState {
  export type Input = DescribePatchGroupStateRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribePatchGroups {
  export type Input = DescribePatchGroupsRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribePatchProperties {
  export type Input = DescribePatchPropertiesRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeSessions {
  export type Input = DescribeSessionsRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidFilterKey
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DisassociateOpsItemRelatedItem {
  export type Input = DisassociateOpsItemRelatedItemRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | OpsItemConflictException
    | OpsItemInvalidParameterException
    | OpsItemNotFoundException
    | OpsItemRelatedItemAssociationNotFoundException
    | CommonAwsError;
}

export declare namespace GetAccessToken {
  export type Input = GetAccessTokenRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetAutomationExecution {
  export type Input = GetAutomationExecutionRequest;
  export type Output = {};
  export type Error =
    | AutomationExecutionNotFoundException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace GetCalendarState {
  export type Input = GetCalendarStateRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentType
    | UnsupportedCalendarException
    | CommonAwsError;
}

export declare namespace GetCommandInvocation {
  export type Input = GetCommandInvocationRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidCommandId
    | InvalidInstanceId
    | InvalidPluginName
    | InvocationDoesNotExist
    | CommonAwsError;
}

export declare namespace GetConnectionStatus {
  export type Input = GetConnectionStatusRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace GetDefaultPatchBaseline {
  export type Input = GetDefaultPatchBaselineRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace GetDeployablePatchSnapshotForInstance {
  export type Input = GetDeployablePatchSnapshotForInstanceRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | UnsupportedFeatureRequiredException
    | UnsupportedOperatingSystem
    | CommonAwsError;
}

export declare namespace GetDocument {
  export type Input = GetDocumentRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentVersion
    | CommonAwsError;
}

export declare namespace GetExecutionPreview {
  export type Input = GetExecutionPreviewRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetInventory {
  export type Input = GetInventoryRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidAggregatorException
    | InvalidFilter
    | InvalidInventoryGroupException
    | InvalidNextToken
    | InvalidResultAttributeException
    | InvalidTypeNameException
    | CommonAwsError;
}

export declare namespace GetInventorySchema {
  export type Input = GetInventorySchemaRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidNextToken
    | InvalidTypeNameException
    | CommonAwsError;
}

export declare namespace GetMaintenanceWindow {
  export type Input = GetMaintenanceWindowRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace GetMaintenanceWindowExecution {
  export type Input = GetMaintenanceWindowExecutionRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace GetMaintenanceWindowExecutionTask {
  export type Input = GetMaintenanceWindowExecutionTaskRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace GetMaintenanceWindowExecutionTaskInvocation {
  export type Input = GetMaintenanceWindowExecutionTaskInvocationRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace GetMaintenanceWindowTask {
  export type Input = GetMaintenanceWindowTaskRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace GetOpsItem {
  export type Input = GetOpsItemRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | OpsItemAccessDeniedException
    | OpsItemNotFoundException
    | CommonAwsError;
}

export declare namespace GetOpsMetadata {
  export type Input = GetOpsMetadataRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | OpsMetadataInvalidArgumentException
    | OpsMetadataNotFoundException
    | CommonAwsError;
}

export declare namespace GetOpsSummary {
  export type Input = GetOpsSummaryRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidAggregatorException
    | InvalidFilter
    | InvalidNextToken
    | InvalidTypeNameException
    | ResourceDataSyncNotFoundException
    | CommonAwsError;
}

export declare namespace GetParameter {
  export type Input = GetParameterRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidKeyId
    | ParameterNotFound
    | ParameterVersionNotFound
    | CommonAwsError;
}

export declare namespace GetParameterHistory {
  export type Input = GetParameterHistoryRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidKeyId
    | InvalidNextToken
    | ParameterNotFound
    | CommonAwsError;
}

export declare namespace GetParameters {
  export type Input = GetParametersRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidKeyId
    | CommonAwsError;
}

export declare namespace GetParametersByPath {
  export type Input = GetParametersByPathRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidFilterKey
    | InvalidFilterOption
    | InvalidFilterValue
    | InvalidKeyId
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace GetPatchBaseline {
  export type Input = GetPatchBaselineRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | InvalidResourceId
    | CommonAwsError;
}

export declare namespace GetPatchBaselineForPatchGroup {
  export type Input = GetPatchBaselineForPatchGroupRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace GetResourcePolicies {
  export type Input = GetResourcePoliciesRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | ResourceNotFoundException
    | ResourcePolicyInvalidParameterException
    | CommonAwsError;
}

export declare namespace GetServiceSetting {
  export type Input = GetServiceSettingRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | ServiceSettingNotFound
    | CommonAwsError;
}

export declare namespace LabelParameterVersion {
  export type Input = LabelParameterVersionRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | ParameterNotFound
    | ParameterVersionLabelLimitExceeded
    | ParameterVersionNotFound
    | TooManyUpdates
    | CommonAwsError;
}

export declare namespace ListAssociationVersions {
  export type Input = ListAssociationVersionsRequest;
  export type Output = {};
  export type Error =
    | AssociationDoesNotExist
    | InternalServerError
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace ListAssociations {
  export type Input = ListAssociationsRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace ListCommandInvocations {
  export type Input = ListCommandInvocationsRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidCommandId
    | InvalidFilterKey
    | InvalidInstanceId
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace ListCommands {
  export type Input = ListCommandsRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidCommandId
    | InvalidFilterKey
    | InvalidInstanceId
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace ListComplianceItems {
  export type Input = ListComplianceItemsRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidFilter
    | InvalidNextToken
    | InvalidResourceId
    | InvalidResourceType
    | CommonAwsError;
}

export declare namespace ListComplianceSummaries {
  export type Input = ListComplianceSummariesRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidFilter
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace ListDocumentMetadataHistory {
  export type Input = ListDocumentMetadataHistoryRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentVersion
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace ListDocumentVersions {
  export type Input = ListDocumentVersionsRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidDocument
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace ListDocuments {
  export type Input = ListDocumentsRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidFilterKey
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace ListInventoryEntries {
  export type Input = ListInventoryEntriesRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidFilter
    | InvalidInstanceId
    | InvalidNextToken
    | InvalidTypeNameException
    | CommonAwsError;
}

export declare namespace ListNodes {
  export type Input = ListNodesRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidFilter
    | InvalidNextToken
    | ResourceDataSyncNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListNodesSummary {
  export type Input = ListNodesSummaryRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidAggregatorException
    | InvalidFilter
    | InvalidNextToken
    | ResourceDataSyncNotFoundException
    | UnsupportedOperationException
    | CommonAwsError;
}

export declare namespace ListOpsItemEvents {
  export type Input = ListOpsItemEventsRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | OpsItemInvalidParameterException
    | OpsItemLimitExceededException
    | OpsItemNotFoundException
    | CommonAwsError;
}

export declare namespace ListOpsItemRelatedItems {
  export type Input = ListOpsItemRelatedItemsRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | OpsItemInvalidParameterException
    | CommonAwsError;
}

export declare namespace ListOpsMetadata {
  export type Input = ListOpsMetadataRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | OpsMetadataInvalidArgumentException
    | CommonAwsError;
}

export declare namespace ListResourceComplianceSummaries {
  export type Input = ListResourceComplianceSummariesRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidFilter
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace ListResourceDataSync {
  export type Input = ListResourceDataSyncRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidNextToken
    | ResourceDataSyncInvalidConfigurationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidResourceId
    | InvalidResourceType
    | CommonAwsError;
}

export declare namespace ModifyDocumentPermission {
  export type Input = ModifyDocumentPermissionRequest;
  export type Output = {};
  export type Error =
    | DocumentLimitExceeded
    | DocumentPermissionLimit
    | InternalServerError
    | InvalidDocument
    | InvalidPermissionType
    | CommonAwsError;
}

export declare namespace PutComplianceItems {
  export type Input = PutComplianceItemsRequest;
  export type Output = {};
  export type Error =
    | ComplianceTypeCountLimitExceededException
    | InternalServerError
    | InvalidItemContentException
    | InvalidResourceId
    | InvalidResourceType
    | ItemSizeLimitExceededException
    | TotalSizeLimitExceededException
    | CommonAwsError;
}

export declare namespace PutInventory {
  export type Input = PutInventoryRequest;
  export type Output = {};
  export type Error =
    | CustomSchemaCountLimitExceededException
    | InternalServerError
    | InvalidInstanceId
    | InvalidInventoryItemContextException
    | InvalidItemContentException
    | InvalidTypeNameException
    | ItemContentMismatchException
    | ItemSizeLimitExceededException
    | SubTypeCountLimitExceededException
    | TotalSizeLimitExceededException
    | UnsupportedInventoryItemContextException
    | UnsupportedInventorySchemaVersionException
    | CommonAwsError;
}

export declare namespace PutParameter {
  export type Input = PutParameterRequest;
  export type Output = {};
  export type Error =
    | HierarchyLevelLimitExceededException
    | HierarchyTypeMismatchException
    | IncompatiblePolicyException
    | InternalServerError
    | InvalidAllowedPatternException
    | InvalidKeyId
    | InvalidPolicyAttributeException
    | InvalidPolicyTypeException
    | ParameterAlreadyExists
    | ParameterLimitExceeded
    | ParameterMaxVersionLimitExceeded
    | ParameterPatternMismatchException
    | PoliciesLimitExceededException
    | TooManyUpdates
    | UnsupportedParameterType
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | MalformedResourcePolicyDocumentException
    | ResourceNotFoundException
    | ResourcePolicyConflictException
    | ResourcePolicyInvalidParameterException
    | ResourcePolicyLimitExceededException
    | ResourcePolicyNotFoundException
    | CommonAwsError;
}

export declare namespace RegisterDefaultPatchBaseline {
  export type Input = RegisterDefaultPatchBaselineRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | InvalidResourceId
    | CommonAwsError;
}

export declare namespace RegisterPatchBaselineForPatchGroup {
  export type Input = RegisterPatchBaselineForPatchGroupRequest;
  export type Output = {};
  export type Error =
    | AlreadyExistsException
    | DoesNotExistException
    | InternalServerError
    | InvalidResourceId
    | ResourceLimitExceededException
    | CommonAwsError;
}

export declare namespace RegisterTargetWithMaintenanceWindow {
  export type Input = RegisterTargetWithMaintenanceWindowRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | IdempotentParameterMismatch
    | InternalServerError
    | ResourceLimitExceededException
    | CommonAwsError;
}

export declare namespace RegisterTaskWithMaintenanceWindow {
  export type Input = RegisterTaskWithMaintenanceWindowRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | FeatureNotAvailableException
    | IdempotentParameterMismatch
    | InternalServerError
    | ResourceLimitExceededException
    | CommonAwsError;
}

export declare namespace RemoveTagsFromResource {
  export type Input = RemoveTagsFromResourceRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidResourceId
    | InvalidResourceType
    | TooManyUpdates
    | CommonAwsError;
}

export declare namespace ResetServiceSetting {
  export type Input = ResetServiceSettingRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | ServiceSettingNotFound
    | TooManyUpdates
    | CommonAwsError;
}

export declare namespace ResumeSession {
  export type Input = ResumeSessionRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace SendAutomationSignal {
  export type Input = SendAutomationSignalRequest;
  export type Output = {};
  export type Error =
    | AutomationExecutionNotFoundException
    | AutomationStepNotFoundException
    | InternalServerError
    | InvalidAutomationSignalException
    | CommonAwsError;
}

export declare namespace SendCommand {
  export type Input = SendCommandRequest;
  export type Output = {};
  export type Error =
    | DuplicateInstanceId
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentVersion
    | InvalidInstanceId
    | InvalidNotificationConfig
    | InvalidOutputFolder
    | InvalidParameters
    | InvalidRole
    | MaxDocumentSizeExceeded
    | UnsupportedPlatformType
    | CommonAwsError;
}

export declare namespace StartAccessRequest {
  export type Input = StartAccessRequestRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerError
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartAssociationsOnce {
  export type Input = StartAssociationsOnceRequest;
  export type Output = {};
  export type Error =
    | AssociationDoesNotExist
    | InvalidAssociation
    | CommonAwsError;
}

export declare namespace StartAutomationExecution {
  export type Input = StartAutomationExecutionRequest;
  export type Output = {};
  export type Error =
    | AutomationDefinitionNotFoundException
    | AutomationDefinitionVersionNotFoundException
    | AutomationExecutionLimitExceededException
    | IdempotentParameterMismatch
    | InternalServerError
    | InvalidAutomationExecutionParametersException
    | InvalidTarget
    | CommonAwsError;
}

export declare namespace StartChangeRequestExecution {
  export type Input = StartChangeRequestExecutionRequest;
  export type Output = {};
  export type Error =
    | AutomationDefinitionNotApprovedException
    | AutomationDefinitionNotFoundException
    | AutomationDefinitionVersionNotFoundException
    | AutomationExecutionLimitExceededException
    | IdempotentParameterMismatch
    | InternalServerError
    | InvalidAutomationExecutionParametersException
    | CommonAwsError;
}

export declare namespace StartExecutionPreview {
  export type Input = StartExecutionPreviewRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartSession {
  export type Input = StartSessionRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidDocument
    | TargetNotConnected
    | CommonAwsError;
}

export declare namespace StopAutomationExecution {
  export type Input = StopAutomationExecutionRequest;
  export type Output = {};
  export type Error =
    | AutomationExecutionNotFoundException
    | InternalServerError
    | InvalidAutomationStatusUpdateException
    | CommonAwsError;
}

export declare namespace TerminateSession {
  export type Input = TerminateSessionRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | CommonAwsError;
}

export declare namespace UnlabelParameterVersion {
  export type Input = UnlabelParameterVersionRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | ParameterNotFound
    | ParameterVersionNotFound
    | TooManyUpdates
    | CommonAwsError;
}

export declare namespace UpdateAssociation {
  export type Input = UpdateAssociationRequest;
  export type Output = {};
  export type Error =
    | AssociationDoesNotExist
    | AssociationVersionLimitExceeded
    | InternalServerError
    | InvalidAssociationVersion
    | InvalidDocument
    | InvalidDocumentVersion
    | InvalidOutputLocation
    | InvalidParameters
    | InvalidSchedule
    | InvalidTarget
    | InvalidTargetMaps
    | InvalidUpdate
    | TooManyUpdates
    | CommonAwsError;
}

export declare namespace UpdateAssociationStatus {
  export type Input = UpdateAssociationStatusRequest;
  export type Output = {};
  export type Error =
    | AssociationDoesNotExist
    | InternalServerError
    | InvalidDocument
    | InvalidInstanceId
    | StatusUnchanged
    | TooManyUpdates
    | CommonAwsError;
}

export declare namespace UpdateDocument {
  export type Input = UpdateDocumentRequest;
  export type Output = {};
  export type Error =
    | DocumentVersionLimitExceeded
    | DuplicateDocumentContent
    | DuplicateDocumentVersionName
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentContent
    | InvalidDocumentOperation
    | InvalidDocumentSchemaVersion
    | InvalidDocumentVersion
    | MaxDocumentSizeExceeded
    | CommonAwsError;
}

export declare namespace UpdateDocumentDefaultVersion {
  export type Input = UpdateDocumentDefaultVersionRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentSchemaVersion
    | InvalidDocumentVersion
    | CommonAwsError;
}

export declare namespace UpdateDocumentMetadata {
  export type Input = UpdateDocumentMetadataRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentOperation
    | InvalidDocumentVersion
    | TooManyUpdates
    | CommonAwsError;
}

export declare namespace UpdateMaintenanceWindow {
  export type Input = UpdateMaintenanceWindowRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace UpdateMaintenanceWindowTarget {
  export type Input = UpdateMaintenanceWindowTargetRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace UpdateMaintenanceWindowTask {
  export type Input = UpdateMaintenanceWindowTaskRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace UpdateManagedInstanceRole {
  export type Input = UpdateManagedInstanceRoleRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | InvalidInstanceId
    | CommonAwsError;
}

export declare namespace UpdateOpsItem {
  export type Input = UpdateOpsItemRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | OpsItemAccessDeniedException
    | OpsItemAlreadyExistsException
    | OpsItemConflictException
    | OpsItemInvalidParameterException
    | OpsItemLimitExceededException
    | OpsItemNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateOpsMetadata {
  export type Input = UpdateOpsMetadataRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | OpsMetadataInvalidArgumentException
    | OpsMetadataKeyLimitExceededException
    | OpsMetadataNotFoundException
    | OpsMetadataTooManyUpdatesException
    | CommonAwsError;
}

export declare namespace UpdatePatchBaseline {
  export type Input = UpdatePatchBaselineRequest;
  export type Output = {};
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace UpdateResourceDataSync {
  export type Input = UpdateResourceDataSyncRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | ResourceDataSyncConflictException
    | ResourceDataSyncInvalidConfigurationException
    | ResourceDataSyncNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateServiceSetting {
  export type Input = UpdateServiceSettingRequest;
  export type Output = {};
  export type Error =
    | InternalServerError
    | ServiceSettingNotFound
    | TooManyUpdates
    | CommonAwsError;
}

