import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonSSM {
  addTagsToResource(
    input: AddTagsToResourceRequest,
  ): Effect.Effect<
    AddTagsToResourceResult,
    | InternalServerError
    | InvalidResourceId
    | InvalidResourceType
    | TooManyTagsError
    | TooManyUpdates
    | CommonAwsError
  >;
  associateOpsItemRelatedItem(
    input: AssociateOpsItemRelatedItemRequest,
  ): Effect.Effect<
    AssociateOpsItemRelatedItemResponse,
    | InternalServerError
    | OpsItemConflictException
    | OpsItemInvalidParameterException
    | OpsItemLimitExceededException
    | OpsItemNotFoundException
    | OpsItemRelatedItemAlreadyExistsException
    | CommonAwsError
  >;
  cancelCommand(
    input: CancelCommandRequest,
  ): Effect.Effect<
    CancelCommandResult,
    | DuplicateInstanceId
    | InternalServerError
    | InvalidCommandId
    | InvalidInstanceId
    | CommonAwsError
  >;
  cancelMaintenanceWindowExecution(
    input: CancelMaintenanceWindowExecutionRequest,
  ): Effect.Effect<
    CancelMaintenanceWindowExecutionResult,
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  createActivation(
    input: CreateActivationRequest,
  ): Effect.Effect<
    CreateActivationResult,
    InternalServerError | InvalidParameters | CommonAwsError
  >;
  createAssociation(
    input: CreateAssociationRequest,
  ): Effect.Effect<
    CreateAssociationResult,
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
    | CommonAwsError
  >;
  createAssociationBatch(
    input: CreateAssociationBatchRequest,
  ): Effect.Effect<
    CreateAssociationBatchResult,
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
    | CommonAwsError
  >;
  createDocument(
    input: CreateDocumentRequest,
  ): Effect.Effect<
    CreateDocumentResult,
    | DocumentAlreadyExists
    | DocumentLimitExceeded
    | InternalServerError
    | InvalidDocumentContent
    | InvalidDocumentSchemaVersion
    | MaxDocumentSizeExceeded
    | TooManyUpdates
    | CommonAwsError
  >;
  createMaintenanceWindow(
    input: CreateMaintenanceWindowRequest,
  ): Effect.Effect<
    CreateMaintenanceWindowResult,
    | IdempotentParameterMismatch
    | InternalServerError
    | ResourceLimitExceededException
    | CommonAwsError
  >;
  createOpsItem(
    input: CreateOpsItemRequest,
  ): Effect.Effect<
    CreateOpsItemResponse,
    | InternalServerError
    | OpsItemAccessDeniedException
    | OpsItemAlreadyExistsException
    | OpsItemInvalidParameterException
    | OpsItemLimitExceededException
    | CommonAwsError
  >;
  createOpsMetadata(
    input: CreateOpsMetadataRequest,
  ): Effect.Effect<
    CreateOpsMetadataResult,
    | InternalServerError
    | OpsMetadataAlreadyExistsException
    | OpsMetadataInvalidArgumentException
    | OpsMetadataLimitExceededException
    | OpsMetadataTooManyUpdatesException
    | CommonAwsError
  >;
  createPatchBaseline(
    input: CreatePatchBaselineRequest,
  ): Effect.Effect<
    CreatePatchBaselineResult,
    | IdempotentParameterMismatch
    | InternalServerError
    | ResourceLimitExceededException
    | CommonAwsError
  >;
  createResourceDataSync(
    input: CreateResourceDataSyncRequest,
  ): Effect.Effect<
    CreateResourceDataSyncResult,
    | InternalServerError
    | ResourceDataSyncAlreadyExistsException
    | ResourceDataSyncCountExceededException
    | ResourceDataSyncInvalidConfigurationException
    | CommonAwsError
  >;
  deleteActivation(
    input: DeleteActivationRequest,
  ): Effect.Effect<
    DeleteActivationResult,
    | InternalServerError
    | InvalidActivation
    | InvalidActivationId
    | TooManyUpdates
    | CommonAwsError
  >;
  deleteAssociation(
    input: DeleteAssociationRequest,
  ): Effect.Effect<
    DeleteAssociationResult,
    | AssociationDoesNotExist
    | InternalServerError
    | InvalidDocument
    | InvalidInstanceId
    | TooManyUpdates
    | CommonAwsError
  >;
  deleteDocument(
    input: DeleteDocumentRequest,
  ): Effect.Effect<
    DeleteDocumentResult,
    | AssociatedInstances
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentOperation
    | TooManyUpdates
    | CommonAwsError
  >;
  deleteInventory(
    input: DeleteInventoryRequest,
  ): Effect.Effect<
    DeleteInventoryResult,
    | InternalServerError
    | InvalidDeleteInventoryParametersException
    | InvalidInventoryRequestException
    | InvalidOptionException
    | InvalidTypeNameException
    | CommonAwsError
  >;
  deleteMaintenanceWindow(
    input: DeleteMaintenanceWindowRequest,
  ): Effect.Effect<
    DeleteMaintenanceWindowResult,
    InternalServerError | CommonAwsError
  >;
  deleteOpsItem(
    input: DeleteOpsItemRequest,
  ): Effect.Effect<
    DeleteOpsItemResponse,
    InternalServerError | OpsItemInvalidParameterException | CommonAwsError
  >;
  deleteOpsMetadata(
    input: DeleteOpsMetadataRequest,
  ): Effect.Effect<
    DeleteOpsMetadataResult,
    | InternalServerError
    | OpsMetadataInvalidArgumentException
    | OpsMetadataNotFoundException
    | CommonAwsError
  >;
  deleteParameter(
    input: DeleteParameterRequest,
  ): Effect.Effect<
    DeleteParameterResult,
    InternalServerError | ParameterNotFound | CommonAwsError
  >;
  deleteParameters(
    input: DeleteParametersRequest,
  ): Effect.Effect<
    DeleteParametersResult,
    InternalServerError | CommonAwsError
  >;
  deletePatchBaseline(
    input: DeletePatchBaselineRequest,
  ): Effect.Effect<
    DeletePatchBaselineResult,
    InternalServerError | ResourceInUseException | CommonAwsError
  >;
  deleteResourceDataSync(
    input: DeleteResourceDataSyncRequest,
  ): Effect.Effect<
    DeleteResourceDataSyncResult,
    | InternalServerError
    | ResourceDataSyncInvalidConfigurationException
    | ResourceDataSyncNotFoundException
    | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    DeleteResourcePolicyResponse,
    | InternalServerError
    | MalformedResourcePolicyDocumentException
    | ResourceNotFoundException
    | ResourcePolicyConflictException
    | ResourcePolicyInvalidParameterException
    | ResourcePolicyNotFoundException
    | CommonAwsError
  >;
  deregisterManagedInstance(
    input: DeregisterManagedInstanceRequest,
  ): Effect.Effect<
    DeregisterManagedInstanceResult,
    InternalServerError | InvalidInstanceId | CommonAwsError
  >;
  deregisterPatchBaselineForPatchGroup(
    input: DeregisterPatchBaselineForPatchGroupRequest,
  ): Effect.Effect<
    DeregisterPatchBaselineForPatchGroupResult,
    InternalServerError | InvalidResourceId | CommonAwsError
  >;
  deregisterTargetFromMaintenanceWindow(
    input: DeregisterTargetFromMaintenanceWindowRequest,
  ): Effect.Effect<
    DeregisterTargetFromMaintenanceWindowResult,
    | DoesNotExistException
    | InternalServerError
    | TargetInUseException
    | CommonAwsError
  >;
  deregisterTaskFromMaintenanceWindow(
    input: DeregisterTaskFromMaintenanceWindowRequest,
  ): Effect.Effect<
    DeregisterTaskFromMaintenanceWindowResult,
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  describeActivations(
    input: DescribeActivationsRequest,
  ): Effect.Effect<
    DescribeActivationsResult,
    InternalServerError | InvalidFilter | InvalidNextToken | CommonAwsError
  >;
  describeAssociation(
    input: DescribeAssociationRequest,
  ): Effect.Effect<
    DescribeAssociationResult,
    | AssociationDoesNotExist
    | InternalServerError
    | InvalidAssociationVersion
    | InvalidDocument
    | InvalidInstanceId
    | CommonAwsError
  >;
  describeAssociationExecutions(
    input: DescribeAssociationExecutionsRequest,
  ): Effect.Effect<
    DescribeAssociationExecutionsResult,
    | AssociationDoesNotExist
    | InternalServerError
    | InvalidNextToken
    | CommonAwsError
  >;
  describeAssociationExecutionTargets(
    input: DescribeAssociationExecutionTargetsRequest,
  ): Effect.Effect<
    DescribeAssociationExecutionTargetsResult,
    | AssociationDoesNotExist
    | AssociationExecutionDoesNotExist
    | InternalServerError
    | InvalidNextToken
    | CommonAwsError
  >;
  describeAutomationExecutions(
    input: DescribeAutomationExecutionsRequest,
  ): Effect.Effect<
    DescribeAutomationExecutionsResult,
    | InternalServerError
    | InvalidFilterKey
    | InvalidFilterValue
    | InvalidNextToken
    | CommonAwsError
  >;
  describeAutomationStepExecutions(
    input: DescribeAutomationStepExecutionsRequest,
  ): Effect.Effect<
    DescribeAutomationStepExecutionsResult,
    | AutomationExecutionNotFoundException
    | InternalServerError
    | InvalidFilterKey
    | InvalidFilterValue
    | InvalidNextToken
    | CommonAwsError
  >;
  describeAvailablePatches(
    input: DescribeAvailablePatchesRequest,
  ): Effect.Effect<
    DescribeAvailablePatchesResult,
    InternalServerError | CommonAwsError
  >;
  describeDocument(
    input: DescribeDocumentRequest,
  ): Effect.Effect<
    DescribeDocumentResult,
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentVersion
    | CommonAwsError
  >;
  describeDocumentPermission(
    input: DescribeDocumentPermissionRequest,
  ): Effect.Effect<
    DescribeDocumentPermissionResponse,
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentOperation
    | InvalidNextToken
    | InvalidPermissionType
    | CommonAwsError
  >;
  describeEffectiveInstanceAssociations(
    input: DescribeEffectiveInstanceAssociationsRequest,
  ): Effect.Effect<
    DescribeEffectiveInstanceAssociationsResult,
    InternalServerError | InvalidInstanceId | InvalidNextToken | CommonAwsError
  >;
  describeEffectivePatchesForPatchBaseline(
    input: DescribeEffectivePatchesForPatchBaselineRequest,
  ): Effect.Effect<
    DescribeEffectivePatchesForPatchBaselineResult,
    | DoesNotExistException
    | InternalServerError
    | InvalidResourceId
    | UnsupportedOperatingSystem
    | CommonAwsError
  >;
  describeInstanceAssociationsStatus(
    input: DescribeInstanceAssociationsStatusRequest,
  ): Effect.Effect<
    DescribeInstanceAssociationsStatusResult,
    InternalServerError | InvalidInstanceId | InvalidNextToken | CommonAwsError
  >;
  describeInstanceInformation(
    input: DescribeInstanceInformationRequest,
  ): Effect.Effect<
    DescribeInstanceInformationResult,
    | InternalServerError
    | InvalidFilterKey
    | InvalidInstanceId
    | InvalidInstanceInformationFilterValue
    | InvalidNextToken
    | CommonAwsError
  >;
  describeInstancePatches(
    input: DescribeInstancePatchesRequest,
  ): Effect.Effect<
    DescribeInstancePatchesResult,
    | InternalServerError
    | InvalidFilter
    | InvalidInstanceId
    | InvalidNextToken
    | CommonAwsError
  >;
  describeInstancePatchStates(
    input: DescribeInstancePatchStatesRequest,
  ): Effect.Effect<
    DescribeInstancePatchStatesResult,
    InternalServerError | InvalidNextToken | CommonAwsError
  >;
  describeInstancePatchStatesForPatchGroup(
    input: DescribeInstancePatchStatesForPatchGroupRequest,
  ): Effect.Effect<
    DescribeInstancePatchStatesForPatchGroupResult,
    InternalServerError | InvalidFilter | InvalidNextToken | CommonAwsError
  >;
  describeInstanceProperties(
    input: DescribeInstancePropertiesRequest,
  ): Effect.Effect<
    DescribeInstancePropertiesResult,
    | InternalServerError
    | InvalidActivationId
    | InvalidDocument
    | InvalidFilterKey
    | InvalidInstanceId
    | InvalidInstancePropertyFilterValue
    | InvalidNextToken
    | CommonAwsError
  >;
  describeInventoryDeletions(
    input: DescribeInventoryDeletionsRequest,
  ): Effect.Effect<
    DescribeInventoryDeletionsResult,
    | InternalServerError
    | InvalidDeletionIdException
    | InvalidNextToken
    | CommonAwsError
  >;
  describeMaintenanceWindowExecutions(
    input: DescribeMaintenanceWindowExecutionsRequest,
  ): Effect.Effect<
    DescribeMaintenanceWindowExecutionsResult,
    InternalServerError | CommonAwsError
  >;
  describeMaintenanceWindowExecutionTaskInvocations(
    input: DescribeMaintenanceWindowExecutionTaskInvocationsRequest,
  ): Effect.Effect<
    DescribeMaintenanceWindowExecutionTaskInvocationsResult,
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  describeMaintenanceWindowExecutionTasks(
    input: DescribeMaintenanceWindowExecutionTasksRequest,
  ): Effect.Effect<
    DescribeMaintenanceWindowExecutionTasksResult,
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  describeMaintenanceWindows(
    input: DescribeMaintenanceWindowsRequest,
  ): Effect.Effect<
    DescribeMaintenanceWindowsResult,
    InternalServerError | CommonAwsError
  >;
  describeMaintenanceWindowSchedule(
    input: DescribeMaintenanceWindowScheduleRequest,
  ): Effect.Effect<
    DescribeMaintenanceWindowScheduleResult,
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  describeMaintenanceWindowsForTarget(
    input: DescribeMaintenanceWindowsForTargetRequest,
  ): Effect.Effect<
    DescribeMaintenanceWindowsForTargetResult,
    InternalServerError | CommonAwsError
  >;
  describeMaintenanceWindowTargets(
    input: DescribeMaintenanceWindowTargetsRequest,
  ): Effect.Effect<
    DescribeMaintenanceWindowTargetsResult,
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  describeMaintenanceWindowTasks(
    input: DescribeMaintenanceWindowTasksRequest,
  ): Effect.Effect<
    DescribeMaintenanceWindowTasksResult,
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  describeOpsItems(
    input: DescribeOpsItemsRequest,
  ): Effect.Effect<
    DescribeOpsItemsResponse,
    InternalServerError | CommonAwsError
  >;
  describeParameters(
    input: DescribeParametersRequest,
  ): Effect.Effect<
    DescribeParametersResult,
    | InternalServerError
    | InvalidFilterKey
    | InvalidFilterOption
    | InvalidFilterValue
    | InvalidNextToken
    | CommonAwsError
  >;
  describePatchBaselines(
    input: DescribePatchBaselinesRequest,
  ): Effect.Effect<
    DescribePatchBaselinesResult,
    InternalServerError | CommonAwsError
  >;
  describePatchGroups(
    input: DescribePatchGroupsRequest,
  ): Effect.Effect<
    DescribePatchGroupsResult,
    InternalServerError | CommonAwsError
  >;
  describePatchGroupState(
    input: DescribePatchGroupStateRequest,
  ): Effect.Effect<
    DescribePatchGroupStateResult,
    InternalServerError | InvalidNextToken | CommonAwsError
  >;
  describePatchProperties(
    input: DescribePatchPropertiesRequest,
  ): Effect.Effect<
    DescribePatchPropertiesResult,
    InternalServerError | CommonAwsError
  >;
  describeSessions(
    input: DescribeSessionsRequest,
  ): Effect.Effect<
    DescribeSessionsResponse,
    InternalServerError | InvalidFilterKey | InvalidNextToken | CommonAwsError
  >;
  disassociateOpsItemRelatedItem(
    input: DisassociateOpsItemRelatedItemRequest,
  ): Effect.Effect<
    DisassociateOpsItemRelatedItemResponse,
    | InternalServerError
    | OpsItemConflictException
    | OpsItemInvalidParameterException
    | OpsItemNotFoundException
    | OpsItemRelatedItemAssociationNotFoundException
    | CommonAwsError
  >;
  getAccessToken(
    input: GetAccessTokenRequest,
  ): Effect.Effect<
    GetAccessTokenResponse,
    | AccessDeniedException
    | InternalServerError
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getAutomationExecution(
    input: GetAutomationExecutionRequest,
  ): Effect.Effect<
    GetAutomationExecutionResult,
    AutomationExecutionNotFoundException | InternalServerError | CommonAwsError
  >;
  getCalendarState(
    input: GetCalendarStateRequest,
  ): Effect.Effect<
    GetCalendarStateResponse,
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentType
    | UnsupportedCalendarException
    | CommonAwsError
  >;
  getCommandInvocation(
    input: GetCommandInvocationRequest,
  ): Effect.Effect<
    GetCommandInvocationResult,
    | InternalServerError
    | InvalidCommandId
    | InvalidInstanceId
    | InvalidPluginName
    | InvocationDoesNotExist
    | CommonAwsError
  >;
  getConnectionStatus(
    input: GetConnectionStatusRequest,
  ): Effect.Effect<
    GetConnectionStatusResponse,
    InternalServerError | CommonAwsError
  >;
  getDefaultPatchBaseline(
    input: GetDefaultPatchBaselineRequest,
  ): Effect.Effect<
    GetDefaultPatchBaselineResult,
    InternalServerError | CommonAwsError
  >;
  getDeployablePatchSnapshotForInstance(
    input: GetDeployablePatchSnapshotForInstanceRequest,
  ): Effect.Effect<
    GetDeployablePatchSnapshotForInstanceResult,
    | InternalServerError
    | UnsupportedFeatureRequiredException
    | UnsupportedOperatingSystem
    | CommonAwsError
  >;
  getDocument(
    input: GetDocumentRequest,
  ): Effect.Effect<
    GetDocumentResult,
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentVersion
    | CommonAwsError
  >;
  getExecutionPreview(
    input: GetExecutionPreviewRequest,
  ): Effect.Effect<
    GetExecutionPreviewResponse,
    InternalServerError | ResourceNotFoundException | CommonAwsError
  >;
  getInventory(
    input: GetInventoryRequest,
  ): Effect.Effect<
    GetInventoryResult,
    | InternalServerError
    | InvalidAggregatorException
    | InvalidFilter
    | InvalidInventoryGroupException
    | InvalidNextToken
    | InvalidResultAttributeException
    | InvalidTypeNameException
    | CommonAwsError
  >;
  getInventorySchema(
    input: GetInventorySchemaRequest,
  ): Effect.Effect<
    GetInventorySchemaResult,
    | InternalServerError
    | InvalidNextToken
    | InvalidTypeNameException
    | CommonAwsError
  >;
  getMaintenanceWindow(
    input: GetMaintenanceWindowRequest,
  ): Effect.Effect<
    GetMaintenanceWindowResult,
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  getMaintenanceWindowExecution(
    input: GetMaintenanceWindowExecutionRequest,
  ): Effect.Effect<
    GetMaintenanceWindowExecutionResult,
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  getMaintenanceWindowExecutionTask(
    input: GetMaintenanceWindowExecutionTaskRequest,
  ): Effect.Effect<
    GetMaintenanceWindowExecutionTaskResult,
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  getMaintenanceWindowExecutionTaskInvocation(
    input: GetMaintenanceWindowExecutionTaskInvocationRequest,
  ): Effect.Effect<
    GetMaintenanceWindowExecutionTaskInvocationResult,
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  getMaintenanceWindowTask(
    input: GetMaintenanceWindowTaskRequest,
  ): Effect.Effect<
    GetMaintenanceWindowTaskResult,
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  getOpsItem(
    input: GetOpsItemRequest,
  ): Effect.Effect<
    GetOpsItemResponse,
    | InternalServerError
    | OpsItemAccessDeniedException
    | OpsItemNotFoundException
    | CommonAwsError
  >;
  getOpsMetadata(
    input: GetOpsMetadataRequest,
  ): Effect.Effect<
    GetOpsMetadataResult,
    | InternalServerError
    | OpsMetadataInvalidArgumentException
    | OpsMetadataNotFoundException
    | CommonAwsError
  >;
  getOpsSummary(
    input: GetOpsSummaryRequest,
  ): Effect.Effect<
    GetOpsSummaryResult,
    | InternalServerError
    | InvalidAggregatorException
    | InvalidFilter
    | InvalidNextToken
    | InvalidTypeNameException
    | ResourceDataSyncNotFoundException
    | CommonAwsError
  >;
  getParameter(
    input: GetParameterRequest,
  ): Effect.Effect<
    GetParameterResult,
    | InternalServerError
    | InvalidKeyId
    | ParameterNotFound
    | ParameterVersionNotFound
    | CommonAwsError
  >;
  getParameterHistory(
    input: GetParameterHistoryRequest,
  ): Effect.Effect<
    GetParameterHistoryResult,
    | InternalServerError
    | InvalidKeyId
    | InvalidNextToken
    | ParameterNotFound
    | CommonAwsError
  >;
  getParameters(
    input: GetParametersRequest,
  ): Effect.Effect<
    GetParametersResult,
    InternalServerError | InvalidKeyId | CommonAwsError
  >;
  getParametersByPath(
    input: GetParametersByPathRequest,
  ): Effect.Effect<
    GetParametersByPathResult,
    | InternalServerError
    | InvalidFilterKey
    | InvalidFilterOption
    | InvalidFilterValue
    | InvalidKeyId
    | InvalidNextToken
    | CommonAwsError
  >;
  getPatchBaseline(
    input: GetPatchBaselineRequest,
  ): Effect.Effect<
    GetPatchBaselineResult,
    | DoesNotExistException
    | InternalServerError
    | InvalidResourceId
    | CommonAwsError
  >;
  getPatchBaselineForPatchGroup(
    input: GetPatchBaselineForPatchGroupRequest,
  ): Effect.Effect<
    GetPatchBaselineForPatchGroupResult,
    InternalServerError | CommonAwsError
  >;
  getResourcePolicies(
    input: GetResourcePoliciesRequest,
  ): Effect.Effect<
    GetResourcePoliciesResponse,
    | InternalServerError
    | ResourceNotFoundException
    | ResourcePolicyInvalidParameterException
    | CommonAwsError
  >;
  getServiceSetting(
    input: GetServiceSettingRequest,
  ): Effect.Effect<
    GetServiceSettingResult,
    InternalServerError | ServiceSettingNotFound | CommonAwsError
  >;
  labelParameterVersion(
    input: LabelParameterVersionRequest,
  ): Effect.Effect<
    LabelParameterVersionResult,
    | InternalServerError
    | ParameterNotFound
    | ParameterVersionLabelLimitExceeded
    | ParameterVersionNotFound
    | TooManyUpdates
    | CommonAwsError
  >;
  listAssociations(
    input: ListAssociationsRequest,
  ): Effect.Effect<
    ListAssociationsResult,
    InternalServerError | InvalidNextToken | CommonAwsError
  >;
  listAssociationVersions(
    input: ListAssociationVersionsRequest,
  ): Effect.Effect<
    ListAssociationVersionsResult,
    | AssociationDoesNotExist
    | InternalServerError
    | InvalidNextToken
    | CommonAwsError
  >;
  listCommandInvocations(
    input: ListCommandInvocationsRequest,
  ): Effect.Effect<
    ListCommandInvocationsResult,
    | InternalServerError
    | InvalidCommandId
    | InvalidFilterKey
    | InvalidInstanceId
    | InvalidNextToken
    | CommonAwsError
  >;
  listCommands(
    input: ListCommandsRequest,
  ): Effect.Effect<
    ListCommandsResult,
    | InternalServerError
    | InvalidCommandId
    | InvalidFilterKey
    | InvalidInstanceId
    | InvalidNextToken
    | CommonAwsError
  >;
  listComplianceItems(
    input: ListComplianceItemsRequest,
  ): Effect.Effect<
    ListComplianceItemsResult,
    | InternalServerError
    | InvalidFilter
    | InvalidNextToken
    | InvalidResourceId
    | InvalidResourceType
    | CommonAwsError
  >;
  listComplianceSummaries(
    input: ListComplianceSummariesRequest,
  ): Effect.Effect<
    ListComplianceSummariesResult,
    InternalServerError | InvalidFilter | InvalidNextToken | CommonAwsError
  >;
  listDocumentMetadataHistory(
    input: ListDocumentMetadataHistoryRequest,
  ): Effect.Effect<
    ListDocumentMetadataHistoryResponse,
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentVersion
    | InvalidNextToken
    | CommonAwsError
  >;
  listDocuments(
    input: ListDocumentsRequest,
  ): Effect.Effect<
    ListDocumentsResult,
    InternalServerError | InvalidFilterKey | InvalidNextToken | CommonAwsError
  >;
  listDocumentVersions(
    input: ListDocumentVersionsRequest,
  ): Effect.Effect<
    ListDocumentVersionsResult,
    InternalServerError | InvalidDocument | InvalidNextToken | CommonAwsError
  >;
  listInventoryEntries(
    input: ListInventoryEntriesRequest,
  ): Effect.Effect<
    ListInventoryEntriesResult,
    | InternalServerError
    | InvalidFilter
    | InvalidInstanceId
    | InvalidNextToken
    | InvalidTypeNameException
    | CommonAwsError
  >;
  listNodes(
    input: ListNodesRequest,
  ): Effect.Effect<
    ListNodesResult,
    | InternalServerError
    | InvalidFilter
    | InvalidNextToken
    | ResourceDataSyncNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listNodesSummary(
    input: ListNodesSummaryRequest,
  ): Effect.Effect<
    ListNodesSummaryResult,
    | InternalServerError
    | InvalidAggregatorException
    | InvalidFilter
    | InvalidNextToken
    | ResourceDataSyncNotFoundException
    | UnsupportedOperationException
    | CommonAwsError
  >;
  listOpsItemEvents(
    input: ListOpsItemEventsRequest,
  ): Effect.Effect<
    ListOpsItemEventsResponse,
    | InternalServerError
    | OpsItemInvalidParameterException
    | OpsItemLimitExceededException
    | OpsItemNotFoundException
    | CommonAwsError
  >;
  listOpsItemRelatedItems(
    input: ListOpsItemRelatedItemsRequest,
  ): Effect.Effect<
    ListOpsItemRelatedItemsResponse,
    InternalServerError | OpsItemInvalidParameterException | CommonAwsError
  >;
  listOpsMetadata(
    input: ListOpsMetadataRequest,
  ): Effect.Effect<
    ListOpsMetadataResult,
    InternalServerError | OpsMetadataInvalidArgumentException | CommonAwsError
  >;
  listResourceComplianceSummaries(
    input: ListResourceComplianceSummariesRequest,
  ): Effect.Effect<
    ListResourceComplianceSummariesResult,
    InternalServerError | InvalidFilter | InvalidNextToken | CommonAwsError
  >;
  listResourceDataSync(
    input: ListResourceDataSyncRequest,
  ): Effect.Effect<
    ListResourceDataSyncResult,
    | InternalServerError
    | InvalidNextToken
    | ResourceDataSyncInvalidConfigurationException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResult,
    | InternalServerError
    | InvalidResourceId
    | InvalidResourceType
    | CommonAwsError
  >;
  modifyDocumentPermission(
    input: ModifyDocumentPermissionRequest,
  ): Effect.Effect<
    ModifyDocumentPermissionResponse,
    | DocumentLimitExceeded
    | DocumentPermissionLimit
    | InternalServerError
    | InvalidDocument
    | InvalidPermissionType
    | CommonAwsError
  >;
  putComplianceItems(
    input: PutComplianceItemsRequest,
  ): Effect.Effect<
    PutComplianceItemsResult,
    | ComplianceTypeCountLimitExceededException
    | InternalServerError
    | InvalidItemContentException
    | InvalidResourceId
    | InvalidResourceType
    | ItemSizeLimitExceededException
    | TotalSizeLimitExceededException
    | CommonAwsError
  >;
  putInventory(
    input: PutInventoryRequest,
  ): Effect.Effect<
    PutInventoryResult,
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
    | CommonAwsError
  >;
  putParameter(
    input: PutParameterRequest,
  ): Effect.Effect<
    PutParameterResult,
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
    | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    | InternalServerError
    | MalformedResourcePolicyDocumentException
    | ResourceNotFoundException
    | ResourcePolicyConflictException
    | ResourcePolicyInvalidParameterException
    | ResourcePolicyLimitExceededException
    | ResourcePolicyNotFoundException
    | CommonAwsError
  >;
  registerDefaultPatchBaseline(
    input: RegisterDefaultPatchBaselineRequest,
  ): Effect.Effect<
    RegisterDefaultPatchBaselineResult,
    | DoesNotExistException
    | InternalServerError
    | InvalidResourceId
    | CommonAwsError
  >;
  registerPatchBaselineForPatchGroup(
    input: RegisterPatchBaselineForPatchGroupRequest,
  ): Effect.Effect<
    RegisterPatchBaselineForPatchGroupResult,
    | AlreadyExistsException
    | DoesNotExistException
    | InternalServerError
    | InvalidResourceId
    | ResourceLimitExceededException
    | CommonAwsError
  >;
  registerTargetWithMaintenanceWindow(
    input: RegisterTargetWithMaintenanceWindowRequest,
  ): Effect.Effect<
    RegisterTargetWithMaintenanceWindowResult,
    | DoesNotExistException
    | IdempotentParameterMismatch
    | InternalServerError
    | ResourceLimitExceededException
    | CommonAwsError
  >;
  registerTaskWithMaintenanceWindow(
    input: RegisterTaskWithMaintenanceWindowRequest,
  ): Effect.Effect<
    RegisterTaskWithMaintenanceWindowResult,
    | DoesNotExistException
    | FeatureNotAvailableException
    | IdempotentParameterMismatch
    | InternalServerError
    | ResourceLimitExceededException
    | CommonAwsError
  >;
  removeTagsFromResource(
    input: RemoveTagsFromResourceRequest,
  ): Effect.Effect<
    RemoveTagsFromResourceResult,
    | InternalServerError
    | InvalidResourceId
    | InvalidResourceType
    | TooManyUpdates
    | CommonAwsError
  >;
  resetServiceSetting(
    input: ResetServiceSettingRequest,
  ): Effect.Effect<
    ResetServiceSettingResult,
    | InternalServerError
    | ServiceSettingNotFound
    | TooManyUpdates
    | CommonAwsError
  >;
  resumeSession(
    input: ResumeSessionRequest,
  ): Effect.Effect<
    ResumeSessionResponse,
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  sendAutomationSignal(
    input: SendAutomationSignalRequest,
  ): Effect.Effect<
    SendAutomationSignalResult,
    | AutomationExecutionNotFoundException
    | AutomationStepNotFoundException
    | InternalServerError
    | InvalidAutomationSignalException
    | CommonAwsError
  >;
  sendCommand(
    input: SendCommandRequest,
  ): Effect.Effect<
    SendCommandResult,
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
    | CommonAwsError
  >;
  startAccessRequest(
    input: StartAccessRequestRequest,
  ): Effect.Effect<
    StartAccessRequestResponse,
    | AccessDeniedException
    | InternalServerError
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  startAssociationsOnce(
    input: StartAssociationsOnceRequest,
  ): Effect.Effect<
    StartAssociationsOnceResult,
    AssociationDoesNotExist | InvalidAssociation | CommonAwsError
  >;
  startAutomationExecution(
    input: StartAutomationExecutionRequest,
  ): Effect.Effect<
    StartAutomationExecutionResult,
    | AutomationDefinitionNotFoundException
    | AutomationDefinitionVersionNotFoundException
    | AutomationExecutionLimitExceededException
    | IdempotentParameterMismatch
    | InternalServerError
    | InvalidAutomationExecutionParametersException
    | InvalidTarget
    | CommonAwsError
  >;
  startChangeRequestExecution(
    input: StartChangeRequestExecutionRequest,
  ): Effect.Effect<
    StartChangeRequestExecutionResult,
    | AutomationDefinitionNotApprovedException
    | AutomationDefinitionNotFoundException
    | AutomationDefinitionVersionNotFoundException
    | AutomationExecutionLimitExceededException
    | IdempotentParameterMismatch
    | InternalServerError
    | InvalidAutomationExecutionParametersException
    | CommonAwsError
  >;
  startExecutionPreview(
    input: StartExecutionPreviewRequest,
  ): Effect.Effect<
    StartExecutionPreviewResponse,
    InternalServerError | ValidationException | CommonAwsError
  >;
  startSession(
    input: StartSessionRequest,
  ): Effect.Effect<
    StartSessionResponse,
    InternalServerError | InvalidDocument | TargetNotConnected | CommonAwsError
  >;
  stopAutomationExecution(
    input: StopAutomationExecutionRequest,
  ): Effect.Effect<
    StopAutomationExecutionResult,
    | AutomationExecutionNotFoundException
    | InternalServerError
    | InvalidAutomationStatusUpdateException
    | CommonAwsError
  >;
  terminateSession(
    input: TerminateSessionRequest,
  ): Effect.Effect<
    TerminateSessionResponse,
    InternalServerError | CommonAwsError
  >;
  unlabelParameterVersion(
    input: UnlabelParameterVersionRequest,
  ): Effect.Effect<
    UnlabelParameterVersionResult,
    | InternalServerError
    | ParameterNotFound
    | ParameterVersionNotFound
    | TooManyUpdates
    | CommonAwsError
  >;
  updateAssociation(
    input: UpdateAssociationRequest,
  ): Effect.Effect<
    UpdateAssociationResult,
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
    | CommonAwsError
  >;
  updateAssociationStatus(
    input: UpdateAssociationStatusRequest,
  ): Effect.Effect<
    UpdateAssociationStatusResult,
    | AssociationDoesNotExist
    | InternalServerError
    | InvalidDocument
    | InvalidInstanceId
    | StatusUnchanged
    | TooManyUpdates
    | CommonAwsError
  >;
  updateDocument(
    input: UpdateDocumentRequest,
  ): Effect.Effect<
    UpdateDocumentResult,
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
    | CommonAwsError
  >;
  updateDocumentDefaultVersion(
    input: UpdateDocumentDefaultVersionRequest,
  ): Effect.Effect<
    UpdateDocumentDefaultVersionResult,
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentSchemaVersion
    | InvalidDocumentVersion
    | CommonAwsError
  >;
  updateDocumentMetadata(
    input: UpdateDocumentMetadataRequest,
  ): Effect.Effect<
    UpdateDocumentMetadataResponse,
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentOperation
    | InvalidDocumentVersion
    | TooManyUpdates
    | CommonAwsError
  >;
  updateMaintenanceWindow(
    input: UpdateMaintenanceWindowRequest,
  ): Effect.Effect<
    UpdateMaintenanceWindowResult,
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  updateMaintenanceWindowTarget(
    input: UpdateMaintenanceWindowTargetRequest,
  ): Effect.Effect<
    UpdateMaintenanceWindowTargetResult,
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  updateMaintenanceWindowTask(
    input: UpdateMaintenanceWindowTaskRequest,
  ): Effect.Effect<
    UpdateMaintenanceWindowTaskResult,
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  updateManagedInstanceRole(
    input: UpdateManagedInstanceRoleRequest,
  ): Effect.Effect<
    UpdateManagedInstanceRoleResult,
    InternalServerError | InvalidInstanceId | CommonAwsError
  >;
  updateOpsItem(
    input: UpdateOpsItemRequest,
  ): Effect.Effect<
    UpdateOpsItemResponse,
    | InternalServerError
    | OpsItemAccessDeniedException
    | OpsItemAlreadyExistsException
    | OpsItemConflictException
    | OpsItemInvalidParameterException
    | OpsItemLimitExceededException
    | OpsItemNotFoundException
    | CommonAwsError
  >;
  updateOpsMetadata(
    input: UpdateOpsMetadataRequest,
  ): Effect.Effect<
    UpdateOpsMetadataResult,
    | InternalServerError
    | OpsMetadataInvalidArgumentException
    | OpsMetadataKeyLimitExceededException
    | OpsMetadataNotFoundException
    | OpsMetadataTooManyUpdatesException
    | CommonAwsError
  >;
  updatePatchBaseline(
    input: UpdatePatchBaselineRequest,
  ): Effect.Effect<
    UpdatePatchBaselineResult,
    DoesNotExistException | InternalServerError | CommonAwsError
  >;
  updateResourceDataSync(
    input: UpdateResourceDataSyncRequest,
  ): Effect.Effect<
    UpdateResourceDataSyncResult,
    | InternalServerError
    | ResourceDataSyncConflictException
    | ResourceDataSyncInvalidConfigurationException
    | ResourceDataSyncNotFoundException
    | CommonAwsError
  >;
  updateServiceSetting(
    input: UpdateServiceSettingRequest,
  ): Effect.Effect<
    UpdateServiceSettingResult,
    | InternalServerError
    | ServiceSettingNotFound
    | TooManyUpdates
    | CommonAwsError
  >;
}

export type Ssm = AmazonSSM;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message: string;
}> {}
export type AccessKeyIdType = string;

export type AccessKeySecretType = string;

export type AccessRequestId = string;

export type AccessRequestStatus =
  | "APPROVED"
  | "REJECTED"
  | "REVOKED"
  | "EXPIRED"
  | "PENDING";
export type AccessType = "STANDARD" | "JUSTINTIME";
export type Account = string;

export type AccountId = string;

export type AccountIdList = Array<string>;
export type Accounts = Array<string>;
export interface AccountSharingInfo {
  AccountId?: string;
  SharedDocumentVersion?: string;
}
export type AccountSharingInfoList = Array<AccountSharingInfo>;
export interface Activation {
  ActivationId?: string;
  Description?: string;
  DefaultInstanceName?: string;
  IamRole?: string;
  RegistrationLimit?: number;
  RegistrationsCount?: number;
  ExpirationDate?: Date | string;
  Expired?: boolean;
  CreatedDate?: Date | string;
  Tags?: Array<Tag>;
}
export type ActivationCode = string;

export type ActivationDescription = string;

export type ActivationId = string;

export type ActivationList = Array<Activation>;
export interface AddTagsToResourceRequest {
  ResourceType: ResourceTypeForTagging;
  ResourceId: string;
  Tags: Array<Tag>;
}
export interface AddTagsToResourceResult {}
export type AgentErrorCode = string;

export type AgentType = string;

export type AgentVersion = string;

export type AggregatorSchemaOnly = boolean;

export interface Alarm {
  Name: string;
}
export interface AlarmConfiguration {
  IgnorePollAlarmFailure?: boolean;
  Alarms: Array<Alarm>;
}
export type AlarmList = Array<Alarm>;
export type AlarmName = string;

export interface AlarmStateInformation {
  Name: string;
  State: ExternalAlarmState;
}
export type AlarmStateInformationList = Array<AlarmStateInformation>;
export type AllowedPattern = string;

export declare class AlreadyExistsException extends EffectData.TaggedError(
  "AlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export type ApplyOnlyAtCronInterval = boolean;

export type ApproveAfterDays = number;

export type Architecture = string;

export declare class AssociatedInstances extends EffectData.TaggedError(
  "AssociatedInstances",
)<{}> {}
export interface AssociateOpsItemRelatedItemRequest {
  OpsItemId: string;
  AssociationType: string;
  ResourceType: string;
  ResourceUri: string;
}
export interface AssociateOpsItemRelatedItemResponse {
  AssociationId?: string;
}
export interface Association {
  Name?: string;
  InstanceId?: string;
  AssociationId?: string;
  AssociationVersion?: string;
  DocumentVersion?: string;
  Targets?: Array<Target>;
  LastExecutionDate?: Date | string;
  Overview?: AssociationOverview;
  ScheduleExpression?: string;
  AssociationName?: string;
  ScheduleOffset?: number;
  Duration?: number;
  TargetMaps?: Array<Record<string, Array<string>>>;
}
export declare class AssociationAlreadyExists extends EffectData.TaggedError(
  "AssociationAlreadyExists",
)<{}> {}
export type AssociationComplianceSeverity =
  | "Critical"
  | "High"
  | "Medium"
  | "Low"
  | "Unspecified";
export interface AssociationDescription {
  Name?: string;
  InstanceId?: string;
  AssociationVersion?: string;
  Date?: Date | string;
  LastUpdateAssociationDate?: Date | string;
  Status?: AssociationStatus;
  Overview?: AssociationOverview;
  DocumentVersion?: string;
  AutomationTargetParameterName?: string;
  Parameters?: Record<string, Array<string>>;
  AssociationId?: string;
  Targets?: Array<Target>;
  ScheduleExpression?: string;
  OutputLocation?: InstanceAssociationOutputLocation;
  LastExecutionDate?: Date | string;
  LastSuccessfulExecutionDate?: Date | string;
  AssociationName?: string;
  MaxErrors?: string;
  MaxConcurrency?: string;
  ComplianceSeverity?: AssociationComplianceSeverity;
  SyncCompliance?: AssociationSyncCompliance;
  ApplyOnlyAtCronInterval?: boolean;
  CalendarNames?: Array<string>;
  TargetLocations?: Array<TargetLocation>;
  ScheduleOffset?: number;
  Duration?: number;
  TargetMaps?: Array<Record<string, Array<string>>>;
  AlarmConfiguration?: AlarmConfiguration;
  TriggeredAlarms?: Array<AlarmStateInformation>;
}
export type AssociationDescriptionList = Array<AssociationDescription>;
export declare class AssociationDoesNotExist extends EffectData.TaggedError(
  "AssociationDoesNotExist",
)<{
  readonly Message?: string;
}> {}
export interface AssociationExecution {
  AssociationId?: string;
  AssociationVersion?: string;
  ExecutionId?: string;
  Status?: string;
  DetailedStatus?: string;
  CreatedTime?: Date | string;
  LastExecutionDate?: Date | string;
  ResourceCountByStatus?: string;
  AlarmConfiguration?: AlarmConfiguration;
  TriggeredAlarms?: Array<AlarmStateInformation>;
}
export declare class AssociationExecutionDoesNotExist extends EffectData.TaggedError(
  "AssociationExecutionDoesNotExist",
)<{
  readonly Message?: string;
}> {}
export interface AssociationExecutionFilter {
  Key: AssociationExecutionFilterKey;
  Value: string;
  Type: AssociationFilterOperatorType;
}
export type AssociationExecutionFilterKey =
  | "ExecutionId"
  | "Status"
  | "CreatedTime";
export type AssociationExecutionFilterList = Array<AssociationExecutionFilter>;
export type AssociationExecutionFilterValue = string;

export type AssociationExecutionId = string;

export type AssociationExecutionsList = Array<AssociationExecution>;
export interface AssociationExecutionTarget {
  AssociationId?: string;
  AssociationVersion?: string;
  ExecutionId?: string;
  ResourceId?: string;
  ResourceType?: string;
  Status?: string;
  DetailedStatus?: string;
  LastExecutionDate?: Date | string;
  OutputSource?: OutputSource;
}
export interface AssociationExecutionTargetsFilter {
  Key: AssociationExecutionTargetsFilterKey;
  Value: string;
}
export type AssociationExecutionTargetsFilterKey =
  | "Status"
  | "ResourceId"
  | "ResourceType";
export type AssociationExecutionTargetsFilterList =
  Array<AssociationExecutionTargetsFilter>;
export type AssociationExecutionTargetsFilterValue = string;

export type AssociationExecutionTargetsList = Array<AssociationExecutionTarget>;
export interface AssociationFilter {
  key: AssociationFilterKey;
  value: string;
}
export type AssociationFilterKey =
  | "InstanceId"
  | "Name"
  | "AssociationId"
  | "Status"
  | "LastExecutedBefore"
  | "LastExecutedAfter"
  | "AssociationName"
  | "ResourceGroupName";
export type AssociationFilterList = Array<AssociationFilter>;
export type AssociationFilterOperatorType =
  | "Equal"
  | "LessThan"
  | "GreaterThan";
export type AssociationFilterValue = string;

export type AssociationId = string;

export type AssociationIdList = Array<string>;
export declare class AssociationLimitExceeded extends EffectData.TaggedError(
  "AssociationLimitExceeded",
)<{}> {}
export type AssociationList = Array<Association>;
export type AssociationName = string;

export interface AssociationOverview {
  Status?: string;
  DetailedStatus?: string;
  AssociationStatusAggregatedCount?: Record<string, number>;
}
export type AssociationResourceId = string;

export type AssociationResourceType = string;

export interface AssociationStatus {
  Date: Date | string;
  Name: AssociationStatusName;
  Message: string;
  AdditionalInfo?: string;
}
export type AssociationStatusAggregatedCount = Record<string, number>;
export type AssociationStatusName = "Pending" | "Success" | "Failed";
export type AssociationSyncCompliance = "Auto" | "Manual";
export type AssociationVersion = string;

export interface AssociationVersionInfo {
  AssociationId?: string;
  AssociationVersion?: string;
  CreatedDate?: Date | string;
  Name?: string;
  DocumentVersion?: string;
  Parameters?: Record<string, Array<string>>;
  Targets?: Array<Target>;
  ScheduleExpression?: string;
  OutputLocation?: InstanceAssociationOutputLocation;
  AssociationName?: string;
  MaxErrors?: string;
  MaxConcurrency?: string;
  ComplianceSeverity?: AssociationComplianceSeverity;
  SyncCompliance?: AssociationSyncCompliance;
  ApplyOnlyAtCronInterval?: boolean;
  CalendarNames?: Array<string>;
  TargetLocations?: Array<TargetLocation>;
  ScheduleOffset?: number;
  Duration?: number;
  TargetMaps?: Array<Record<string, Array<string>>>;
}
export declare class AssociationVersionLimitExceeded extends EffectData.TaggedError(
  "AssociationVersionLimitExceeded",
)<{
  readonly Message?: string;
}> {}
export type AssociationVersionList = Array<AssociationVersionInfo>;
export interface AttachmentContent {
  Name?: string;
  Size?: number;
  Hash?: string;
  HashType?: AttachmentHashType;
  Url?: string;
}
export type AttachmentContentList = Array<AttachmentContent>;
export type AttachmentHash = string;

export type AttachmentHashType = "SHA256";
export type AttachmentIdentifier = string;

export interface AttachmentInformation {
  Name?: string;
}
export type AttachmentInformationList = Array<AttachmentInformation>;
export type AttachmentName = string;

export interface AttachmentsSource {
  Key?: AttachmentsSourceKey;
  Values?: Array<string>;
  Name?: string;
}
export type AttachmentsSourceKey =
  | "SourceUrl"
  | "S3FileUrl"
  | "AttachmentReference";
export type AttachmentsSourceList = Array<AttachmentsSource>;
export type AttachmentsSourceValue = string;

export type AttachmentsSourceValues = Array<string>;
export type AttachmentUrl = string;

export type AttributeName = string;

export type AttributeValue = string;

export type AutomationActionName = string;

export declare class AutomationDefinitionNotApprovedException extends EffectData.TaggedError(
  "AutomationDefinitionNotApprovedException",
)<{
  readonly Message?: string;
}> {}
export declare class AutomationDefinitionNotFoundException extends EffectData.TaggedError(
  "AutomationDefinitionNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class AutomationDefinitionVersionNotFoundException extends EffectData.TaggedError(
  "AutomationDefinitionVersionNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface AutomationExecution {
  AutomationExecutionId?: string;
  DocumentName?: string;
  DocumentVersion?: string;
  ExecutionStartTime?: Date | string;
  ExecutionEndTime?: Date | string;
  AutomationExecutionStatus?: AutomationExecutionStatus;
  StepExecutions?: Array<StepExecution>;
  StepExecutionsTruncated?: boolean;
  Parameters?: Record<string, Array<string>>;
  Outputs?: Record<string, Array<string>>;
  FailureMessage?: string;
  Mode?: ExecutionMode;
  ParentAutomationExecutionId?: string;
  ExecutedBy?: string;
  CurrentStepName?: string;
  CurrentAction?: string;
  TargetParameterName?: string;
  Targets?: Array<Target>;
  TargetMaps?: Array<Record<string, Array<string>>>;
  ResolvedTargets?: ResolvedTargets;
  MaxConcurrency?: string;
  MaxErrors?: string;
  Target?: string;
  TargetLocations?: Array<TargetLocation>;
  ProgressCounters?: ProgressCounters;
  AlarmConfiguration?: AlarmConfiguration;
  TriggeredAlarms?: Array<AlarmStateInformation>;
  TargetLocationsURL?: string;
  AutomationSubtype?: AutomationSubtype;
  ScheduledTime?: Date | string;
  Runbooks?: Array<Runbook>;
  OpsItemId?: string;
  AssociationId?: string;
  ChangeRequestName?: string;
  Variables?: Record<string, Array<string>>;
}
export interface AutomationExecutionFilter {
  Key: AutomationExecutionFilterKey;
  Values: Array<string>;
}
export type AutomationExecutionFilterKey =
  | "DOCUMENT_NAME_PREFIX"
  | "EXECUTION_STATUS"
  | "EXECUTION_ID"
  | "PARENT_EXECUTION_ID"
  | "CURRENT_ACTION"
  | "START_TIME_BEFORE"
  | "START_TIME_AFTER"
  | "AUTOMATION_TYPE"
  | "TAG_KEY"
  | "TARGET_RESOURCE_GROUP"
  | "AUTOMATION_SUBTYPE"
  | "OPS_ITEM_ID";
export type AutomationExecutionFilterList = Array<AutomationExecutionFilter>;
export type AutomationExecutionFilterValue = string;

export type AutomationExecutionFilterValueList = Array<string>;
export type AutomationExecutionId = string;

export interface AutomationExecutionInputs {
  Parameters?: Record<string, Array<string>>;
  TargetParameterName?: string;
  Targets?: Array<Target>;
  TargetMaps?: Array<Record<string, Array<string>>>;
  TargetLocations?: Array<TargetLocation>;
  TargetLocationsURL?: string;
}
export declare class AutomationExecutionLimitExceededException extends EffectData.TaggedError(
  "AutomationExecutionLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface AutomationExecutionMetadata {
  AutomationExecutionId?: string;
  DocumentName?: string;
  DocumentVersion?: string;
  AutomationExecutionStatus?: AutomationExecutionStatus;
  ExecutionStartTime?: Date | string;
  ExecutionEndTime?: Date | string;
  ExecutedBy?: string;
  LogFile?: string;
  Outputs?: Record<string, Array<string>>;
  Mode?: ExecutionMode;
  ParentAutomationExecutionId?: string;
  CurrentStepName?: string;
  CurrentAction?: string;
  FailureMessage?: string;
  TargetParameterName?: string;
  Targets?: Array<Target>;
  TargetMaps?: Array<Record<string, Array<string>>>;
  ResolvedTargets?: ResolvedTargets;
  MaxConcurrency?: string;
  MaxErrors?: string;
  Target?: string;
  AutomationType?: AutomationType;
  AlarmConfiguration?: AlarmConfiguration;
  TriggeredAlarms?: Array<AlarmStateInformation>;
  TargetLocationsURL?: string;
  AutomationSubtype?: AutomationSubtype;
  ScheduledTime?: Date | string;
  Runbooks?: Array<Runbook>;
  OpsItemId?: string;
  AssociationId?: string;
  ChangeRequestName?: string;
}
export type AutomationExecutionMetadataList =
  Array<AutomationExecutionMetadata>;
export declare class AutomationExecutionNotFoundException extends EffectData.TaggedError(
  "AutomationExecutionNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface AutomationExecutionPreview {
  StepPreviews?: Record<ImpactType, number>;
  Regions?: Array<string>;
  TargetPreviews?: Array<TargetPreview>;
  TotalAccounts?: number;
}
export type AutomationExecutionStatus =
  | "PENDING"
  | "INPROGRESS"
  | "WAITING"
  | "SUCCESS"
  | "TIMEDOUT"
  | "CANCELLING"
  | "CANCELLED"
  | "FAILED"
  | "PENDING_APPROVAL"
  | "APPROVED"
  | "REJECTED"
  | "SCHEDULED"
  | "RUNBOOK_INPROGRESS"
  | "PENDING_CHANGE_CALENDAR_OVERRIDE"
  | "CHANGE_CALENDAR_OVERRIDE_APPROVED"
  | "CHANGE_CALENDAR_OVERRIDE_REJECTED"
  | "COMPLETED_WITH_SUCCESS"
  | "COMPLETED_WITH_FAILURE"
  | "EXITED";
export type AutomationParameterKey = string;

export type AutomationParameterMap = Record<string, Array<string>>;
export type AutomationParameterValue = string;

export type AutomationParameterValueList = Array<string>;
export declare class AutomationStepNotFoundException extends EffectData.TaggedError(
  "AutomationStepNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type AutomationSubtype = "ChangeRequest" | "AccessRequest";
export type AutomationTargetParameterName = string;

export type AutomationType = "CrossAccount" | "Local";
export type BaselineDescription = string;

export type BaselineId = string;

export type BaselineName = string;

export interface BaselineOverride {
  OperatingSystem?: OperatingSystem;
  GlobalFilters?: PatchFilterGroup;
  ApprovalRules?: PatchRuleGroup;
  ApprovedPatches?: Array<string>;
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
  RejectedPatches?: Array<string>;
  RejectedPatchesAction?: PatchAction;
  ApprovedPatchesEnableNonSecurity?: boolean;
  Sources?: Array<PatchSource>;
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus;
}
export type BatchErrorMessage = string;

export type SsmBoolean = boolean;

export type CalendarNameOrARN = string;

export type CalendarNameOrARNList = Array<string>;
export type CalendarState = "OPEN" | "CLOSED";
export interface CancelCommandRequest {
  CommandId: string;
  InstanceIds?: Array<string>;
}
export interface CancelCommandResult {}
export interface CancelMaintenanceWindowExecutionRequest {
  WindowExecutionId: string;
}
export interface CancelMaintenanceWindowExecutionResult {
  WindowExecutionId?: string;
}
export type Category = string;

export type CategoryEnumList = Array<string>;
export type CategoryList = Array<string>;
export type ChangeDetailsValue = string;

export type ChangeRequestName = string;

export type ClientToken = string;

export type CloudWatchLogGroupName = string;

export interface CloudWatchOutputConfig {
  CloudWatchLogGroupName?: string;
  CloudWatchOutputEnabled?: boolean;
}
export type CloudWatchOutputEnabled = boolean;

export interface Command {
  CommandId?: string;
  DocumentName?: string;
  DocumentVersion?: string;
  Comment?: string;
  ExpiresAfter?: Date | string;
  Parameters?: Record<string, Array<string>>;
  InstanceIds?: Array<string>;
  Targets?: Array<Target>;
  RequestedDateTime?: Date | string;
  Status?: CommandStatus;
  StatusDetails?: string;
  OutputS3Region?: string;
  OutputS3BucketName?: string;
  OutputS3KeyPrefix?: string;
  MaxConcurrency?: string;
  MaxErrors?: string;
  TargetCount?: number;
  CompletedCount?: number;
  ErrorCount?: number;
  DeliveryTimedOutCount?: number;
  ServiceRole?: string;
  NotificationConfig?: NotificationConfig;
  CloudWatchOutputConfig?: CloudWatchOutputConfig;
  TimeoutSeconds?: number;
  AlarmConfiguration?: AlarmConfiguration;
  TriggeredAlarms?: Array<AlarmStateInformation>;
}
export interface CommandFilter {
  key: CommandFilterKey;
  value: string;
}
export type CommandFilterKey =
  | "INVOKED_AFTER"
  | "INVOKED_BEFORE"
  | "STATUS"
  | "EXECUTION_STAGE"
  | "DOCUMENT_NAME";
export type CommandFilterList = Array<CommandFilter>;
export type CommandFilterValue = string;

export type CommandId = string;

export interface CommandInvocation {
  CommandId?: string;
  InstanceId?: string;
  InstanceName?: string;
  Comment?: string;
  DocumentName?: string;
  DocumentVersion?: string;
  RequestedDateTime?: Date | string;
  Status?: CommandInvocationStatus;
  StatusDetails?: string;
  TraceOutput?: string;
  StandardOutputUrl?: string;
  StandardErrorUrl?: string;
  CommandPlugins?: Array<CommandPlugin>;
  ServiceRole?: string;
  NotificationConfig?: NotificationConfig;
  CloudWatchOutputConfig?: CloudWatchOutputConfig;
}
export type CommandInvocationList = Array<CommandInvocation>;
export type CommandInvocationStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "DELAYED"
  | "SUCCESS"
  | "CANCELLED"
  | "TIMED_OUT"
  | "FAILED"
  | "CANCELLING";
export type CommandList = Array<Command>;
export type CommandMaxResults = number;

export interface CommandPlugin {
  Name?: string;
  Status?: CommandPluginStatus;
  StatusDetails?: string;
  ResponseCode?: number;
  ResponseStartDateTime?: Date | string;
  ResponseFinishDateTime?: Date | string;
  Output?: string;
  StandardOutputUrl?: string;
  StandardErrorUrl?: string;
  OutputS3Region?: string;
  OutputS3BucketName?: string;
  OutputS3KeyPrefix?: string;
}
export type CommandPluginList = Array<CommandPlugin>;
export type CommandPluginName = string;

export type CommandPluginOutput = string;

export type CommandPluginStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "SUCCESS"
  | "TIMED_OUT"
  | "CANCELLED"
  | "FAILED";
export type CommandStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "SUCCESS"
  | "CANCELLED"
  | "FAILED"
  | "TIMED_OUT"
  | "CANCELLING";
export type Comment = string;

export type CompletedCount = number;

export type ComplianceExecutionId = string;

export interface ComplianceExecutionSummary {
  ExecutionTime: Date | string;
  ExecutionId?: string;
  ExecutionType?: string;
}
export type ComplianceExecutionType = string;

export type ComplianceFilterValue = string;

export interface ComplianceItem {
  ComplianceType?: string;
  ResourceType?: string;
  ResourceId?: string;
  Id?: string;
  Title?: string;
  Status?: ComplianceStatus;
  Severity?: ComplianceSeverity;
  ExecutionSummary?: ComplianceExecutionSummary;
  Details?: Record<string, string>;
}
export type ComplianceItemContentHash = string;

export type ComplianceItemDetails = Record<string, string>;
export interface ComplianceItemEntry {
  Id?: string;
  Title?: string;
  Severity: ComplianceSeverity;
  Status: ComplianceStatus;
  Details?: Record<string, string>;
}
export type ComplianceItemEntryList = Array<ComplianceItemEntry>;
export type ComplianceItemId = string;

export type ComplianceItemList = Array<ComplianceItem>;
export type ComplianceItemTitle = string;

export type ComplianceQueryOperatorType =
  | "Equal"
  | "NotEqual"
  | "BeginWith"
  | "LessThan"
  | "GreaterThan";
export type ComplianceResourceId = string;

export type ComplianceResourceIdList = Array<string>;
export type ComplianceResourceType = string;

export type ComplianceResourceTypeList = Array<string>;
export type ComplianceSeverity =
  | "Critical"
  | "High"
  | "Medium"
  | "Low"
  | "Informational"
  | "Unspecified";
export type ComplianceStatus = "Compliant" | "NonCompliant";
export interface ComplianceStringFilter {
  Key?: string;
  Values?: Array<string>;
  Type?: ComplianceQueryOperatorType;
}
export type ComplianceStringFilterKey = string;

export type ComplianceStringFilterList = Array<ComplianceStringFilter>;
export type ComplianceStringFilterValueList = Array<string>;
export type ComplianceSummaryCount = number;

export interface ComplianceSummaryItem {
  ComplianceType?: string;
  CompliantSummary?: CompliantSummary;
  NonCompliantSummary?: NonCompliantSummary;
}
export type ComplianceSummaryItemList = Array<ComplianceSummaryItem>;
export declare class ComplianceTypeCountLimitExceededException extends EffectData.TaggedError(
  "ComplianceTypeCountLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type ComplianceTypeName = string;

export type ComplianceUploadType = "Complete" | "Partial";
export interface CompliantSummary {
  CompliantCount?: number;
  SeveritySummary?: SeveritySummary;
}
export type ComputerName = string;

export type ConnectionStatus = "CONNECTED" | "NOT_CONNECTED";
export type ContentLength = number;

export interface CreateActivationRequest {
  Description?: string;
  DefaultInstanceName?: string;
  IamRole: string;
  RegistrationLimit?: number;
  ExpirationDate?: Date | string;
  Tags?: Array<Tag>;
  RegistrationMetadata?: Array<RegistrationMetadataItem>;
}
export interface CreateActivationResult {
  ActivationId?: string;
  ActivationCode?: string;
}
export interface CreateAssociationBatchRequest {
  Entries: Array<CreateAssociationBatchRequestEntry>;
}
export type CreateAssociationBatchRequestEntries =
  Array<CreateAssociationBatchRequestEntry>;
export interface CreateAssociationBatchRequestEntry {
  Name: string;
  InstanceId?: string;
  Parameters?: Record<string, Array<string>>;
  AutomationTargetParameterName?: string;
  DocumentVersion?: string;
  Targets?: Array<Target>;
  ScheduleExpression?: string;
  OutputLocation?: InstanceAssociationOutputLocation;
  AssociationName?: string;
  MaxErrors?: string;
  MaxConcurrency?: string;
  ComplianceSeverity?: AssociationComplianceSeverity;
  SyncCompliance?: AssociationSyncCompliance;
  ApplyOnlyAtCronInterval?: boolean;
  CalendarNames?: Array<string>;
  TargetLocations?: Array<TargetLocation>;
  ScheduleOffset?: number;
  Duration?: number;
  TargetMaps?: Array<Record<string, Array<string>>>;
  AlarmConfiguration?: AlarmConfiguration;
}
export interface CreateAssociationBatchResult {
  Successful?: Array<AssociationDescription>;
  Failed?: Array<FailedCreateAssociation>;
}
export interface CreateAssociationRequest {
  Name: string;
  DocumentVersion?: string;
  InstanceId?: string;
  Parameters?: Record<string, Array<string>>;
  Targets?: Array<Target>;
  ScheduleExpression?: string;
  OutputLocation?: InstanceAssociationOutputLocation;
  AssociationName?: string;
  AutomationTargetParameterName?: string;
  MaxErrors?: string;
  MaxConcurrency?: string;
  ComplianceSeverity?: AssociationComplianceSeverity;
  SyncCompliance?: AssociationSyncCompliance;
  ApplyOnlyAtCronInterval?: boolean;
  CalendarNames?: Array<string>;
  TargetLocations?: Array<TargetLocation>;
  ScheduleOffset?: number;
  Duration?: number;
  TargetMaps?: Array<Record<string, Array<string>>>;
  Tags?: Array<Tag>;
  AlarmConfiguration?: AlarmConfiguration;
}
export interface CreateAssociationResult {
  AssociationDescription?: AssociationDescription;
}
export type CreatedDate = Date | string;

export interface CreateDocumentRequest {
  Content: string;
  Requires?: Array<DocumentRequires>;
  Attachments?: Array<AttachmentsSource>;
  Name: string;
  DisplayName?: string;
  VersionName?: string;
  DocumentType?: DocumentType;
  DocumentFormat?: DocumentFormat;
  TargetType?: string;
  Tags?: Array<Tag>;
}
export interface CreateDocumentResult {
  DocumentDescription?: DocumentDescription;
}
export interface CreateMaintenanceWindowRequest {
  Name: string;
  Description?: string;
  StartDate?: string;
  EndDate?: string;
  Schedule: string;
  ScheduleTimezone?: string;
  ScheduleOffset?: number;
  Duration: number;
  Cutoff: number;
  AllowUnassociatedTargets: boolean;
  ClientToken?: string;
  Tags?: Array<Tag>;
}
export interface CreateMaintenanceWindowResult {
  WindowId?: string;
}
export interface CreateOpsItemRequest {
  Description: string;
  OpsItemType?: string;
  OperationalData?: Record<string, OpsItemDataValue>;
  Notifications?: Array<OpsItemNotification>;
  Priority?: number;
  RelatedOpsItems?: Array<RelatedOpsItem>;
  Source: string;
  Title: string;
  Tags?: Array<Tag>;
  Category?: string;
  Severity?: string;
  ActualStartTime?: Date | string;
  ActualEndTime?: Date | string;
  PlannedStartTime?: Date | string;
  PlannedEndTime?: Date | string;
  AccountId?: string;
}
export interface CreateOpsItemResponse {
  OpsItemId?: string;
  OpsItemArn?: string;
}
export interface CreateOpsMetadataRequest {
  ResourceId: string;
  Metadata?: Record<string, MetadataValue>;
  Tags?: Array<Tag>;
}
export interface CreateOpsMetadataResult {
  OpsMetadataArn?: string;
}
export interface CreatePatchBaselineRequest {
  OperatingSystem?: OperatingSystem;
  Name: string;
  GlobalFilters?: PatchFilterGroup;
  ApprovalRules?: PatchRuleGroup;
  ApprovedPatches?: Array<string>;
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
  ApprovedPatchesEnableNonSecurity?: boolean;
  RejectedPatches?: Array<string>;
  RejectedPatchesAction?: PatchAction;
  Description?: string;
  Sources?: Array<PatchSource>;
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus;
  ClientToken?: string;
  Tags?: Array<Tag>;
}
export interface CreatePatchBaselineResult {
  BaselineId?: string;
}
export interface CreateResourceDataSyncRequest {
  SyncName: string;
  S3Destination?: ResourceDataSyncS3Destination;
  SyncType?: string;
  SyncSource?: ResourceDataSyncSource;
}
export interface CreateResourceDataSyncResult {}
export interface Credentials {
  AccessKeyId: string;
  SecretAccessKey: string;
  SessionToken: string;
  ExpirationTime: Date | string;
}
export declare class CustomSchemaCountLimitExceededException extends EffectData.TaggedError(
  "CustomSchemaCountLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export type DateTime = Date | string;

export type DefaultBaseline = boolean;

export type DefaultInstanceName = string;

export interface DeleteActivationRequest {
  ActivationId: string;
}
export interface DeleteActivationResult {}
export interface DeleteAssociationRequest {
  Name?: string;
  InstanceId?: string;
  AssociationId?: string;
}
export interface DeleteAssociationResult {}
export interface DeleteDocumentRequest {
  Name: string;
  DocumentVersion?: string;
  VersionName?: string;
  Force?: boolean;
}
export interface DeleteDocumentResult {}
export interface DeleteInventoryRequest {
  TypeName: string;
  SchemaDeleteOption?: InventorySchemaDeleteOption;
  DryRun?: boolean;
  ClientToken?: string;
}
export interface DeleteInventoryResult {
  DeletionId?: string;
  TypeName?: string;
  DeletionSummary?: InventoryDeletionSummary;
}
export interface DeleteMaintenanceWindowRequest {
  WindowId: string;
}
export interface DeleteMaintenanceWindowResult {
  WindowId?: string;
}
export interface DeleteOpsItemRequest {
  OpsItemId: string;
}
export interface DeleteOpsItemResponse {}
export interface DeleteOpsMetadataRequest {
  OpsMetadataArn: string;
}
export interface DeleteOpsMetadataResult {}
export interface DeleteParameterRequest {
  Name: string;
}
export interface DeleteParameterResult {}
export interface DeleteParametersRequest {
  Names: Array<string>;
}
export interface DeleteParametersResult {
  DeletedParameters?: Array<string>;
  InvalidParameters?: Array<string>;
}
export interface DeletePatchBaselineRequest {
  BaselineId: string;
}
export interface DeletePatchBaselineResult {
  BaselineId?: string;
}
export interface DeleteResourceDataSyncRequest {
  SyncName: string;
  SyncType?: string;
}
export interface DeleteResourceDataSyncResult {}
export interface DeleteResourcePolicyRequest {
  ResourceArn: string;
  PolicyId: string;
  PolicyHash: string;
}
export interface DeleteResourcePolicyResponse {}
export type DeliveryTimedOutCount = number;

export interface DeregisterManagedInstanceRequest {
  InstanceId: string;
}
export interface DeregisterManagedInstanceResult {}
export interface DeregisterPatchBaselineForPatchGroupRequest {
  BaselineId: string;
  PatchGroup: string;
}
export interface DeregisterPatchBaselineForPatchGroupResult {
  BaselineId?: string;
  PatchGroup?: string;
}
export interface DeregisterTargetFromMaintenanceWindowRequest {
  WindowId: string;
  WindowTargetId: string;
  Safe?: boolean;
}
export interface DeregisterTargetFromMaintenanceWindowResult {
  WindowId?: string;
  WindowTargetId?: string;
}
export interface DeregisterTaskFromMaintenanceWindowRequest {
  WindowId: string;
  WindowTaskId: string;
}
export interface DeregisterTaskFromMaintenanceWindowResult {
  WindowId?: string;
  WindowTaskId?: string;
}
export interface DescribeActivationsFilter {
  FilterKey?: DescribeActivationsFilterKeys;
  FilterValues?: Array<string>;
}
export type DescribeActivationsFilterKeys =
  | "ACTIVATION_IDS"
  | "DEFAULT_INSTANCE_NAME"
  | "IAM_ROLE";
export type DescribeActivationsFilterList = Array<DescribeActivationsFilter>;
export interface DescribeActivationsRequest {
  Filters?: Array<DescribeActivationsFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeActivationsResult {
  ActivationList?: Array<Activation>;
  NextToken?: string;
}
export interface DescribeAssociationExecutionsRequest {
  AssociationId: string;
  Filters?: Array<AssociationExecutionFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeAssociationExecutionsResult {
  AssociationExecutions?: Array<AssociationExecution>;
  NextToken?: string;
}
export interface DescribeAssociationExecutionTargetsRequest {
  AssociationId: string;
  ExecutionId: string;
  Filters?: Array<AssociationExecutionTargetsFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeAssociationExecutionTargetsResult {
  AssociationExecutionTargets?: Array<AssociationExecutionTarget>;
  NextToken?: string;
}
export interface DescribeAssociationRequest {
  Name?: string;
  InstanceId?: string;
  AssociationId?: string;
  AssociationVersion?: string;
}
export interface DescribeAssociationResult {
  AssociationDescription?: AssociationDescription;
}
export interface DescribeAutomationExecutionsRequest {
  Filters?: Array<AutomationExecutionFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeAutomationExecutionsResult {
  AutomationExecutionMetadataList?: Array<AutomationExecutionMetadata>;
  NextToken?: string;
}
export interface DescribeAutomationStepExecutionsRequest {
  AutomationExecutionId: string;
  Filters?: Array<StepExecutionFilter>;
  NextToken?: string;
  MaxResults?: number;
  ReverseOrder?: boolean;
}
export interface DescribeAutomationStepExecutionsResult {
  StepExecutions?: Array<StepExecution>;
  NextToken?: string;
}
export interface DescribeAvailablePatchesRequest {
  Filters?: Array<PatchOrchestratorFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeAvailablePatchesResult {
  Patches?: Array<Patch>;
  NextToken?: string;
}
export interface DescribeDocumentPermissionRequest {
  Name: string;
  PermissionType: DocumentPermissionType;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeDocumentPermissionResponse {
  AccountIds?: Array<string>;
  AccountSharingInfoList?: Array<AccountSharingInfo>;
  NextToken?: string;
}
export interface DescribeDocumentRequest {
  Name: string;
  DocumentVersion?: string;
  VersionName?: string;
}
export interface DescribeDocumentResult {
  Document?: DocumentDescription;
}
export interface DescribeEffectiveInstanceAssociationsRequest {
  InstanceId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeEffectiveInstanceAssociationsResult {
  Associations?: Array<InstanceAssociation>;
  NextToken?: string;
}
export interface DescribeEffectivePatchesForPatchBaselineRequest {
  BaselineId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeEffectivePatchesForPatchBaselineResult {
  EffectivePatches?: Array<EffectivePatch>;
  NextToken?: string;
}
export interface DescribeInstanceAssociationsStatusRequest {
  InstanceId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeInstanceAssociationsStatusResult {
  InstanceAssociationStatusInfos?: Array<InstanceAssociationStatusInfo>;
  NextToken?: string;
}
export interface DescribeInstanceInformationRequest {
  InstanceInformationFilterList?: Array<InstanceInformationFilter>;
  Filters?: Array<InstanceInformationStringFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeInstanceInformationResult {
  InstanceInformationList?: Array<InstanceInformation>;
  NextToken?: string;
}
export interface DescribeInstancePatchesRequest {
  InstanceId: string;
  Filters?: Array<PatchOrchestratorFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeInstancePatchesResult {
  Patches?: Array<PatchComplianceData>;
  NextToken?: string;
}
export interface DescribeInstancePatchStatesForPatchGroupRequest {
  PatchGroup: string;
  Filters?: Array<InstancePatchStateFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeInstancePatchStatesForPatchGroupResult {
  InstancePatchStates?: Array<InstancePatchState>;
  NextToken?: string;
}
export interface DescribeInstancePatchStatesRequest {
  InstanceIds: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeInstancePatchStatesResult {
  InstancePatchStates?: Array<InstancePatchState>;
  NextToken?: string;
}
export type DescribeInstancePropertiesMaxResults = number;

export interface DescribeInstancePropertiesRequest {
  InstancePropertyFilterList?: Array<InstancePropertyFilter>;
  FiltersWithOperator?: Array<InstancePropertyStringFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeInstancePropertiesResult {
  InstanceProperties?: Array<InstanceProperty>;
  NextToken?: string;
}
export interface DescribeInventoryDeletionsRequest {
  DeletionId?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface DescribeInventoryDeletionsResult {
  InventoryDeletions?: Array<InventoryDeletionStatusItem>;
  NextToken?: string;
}
export interface DescribeMaintenanceWindowExecutionsRequest {
  WindowId: string;
  Filters?: Array<MaintenanceWindowFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeMaintenanceWindowExecutionsResult {
  WindowExecutions?: Array<MaintenanceWindowExecution>;
  NextToken?: string;
}
export interface DescribeMaintenanceWindowExecutionTaskInvocationsRequest {
  WindowExecutionId: string;
  TaskId: string;
  Filters?: Array<MaintenanceWindowFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeMaintenanceWindowExecutionTaskInvocationsResult {
  WindowExecutionTaskInvocationIdentities?: Array<MaintenanceWindowExecutionTaskInvocationIdentity>;
  NextToken?: string;
}
export interface DescribeMaintenanceWindowExecutionTasksRequest {
  WindowExecutionId: string;
  Filters?: Array<MaintenanceWindowFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeMaintenanceWindowExecutionTasksResult {
  WindowExecutionTaskIdentities?: Array<MaintenanceWindowExecutionTaskIdentity>;
  NextToken?: string;
}
export interface DescribeMaintenanceWindowScheduleRequest {
  WindowId?: string;
  Targets?: Array<Target>;
  ResourceType?: MaintenanceWindowResourceType;
  Filters?: Array<PatchOrchestratorFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeMaintenanceWindowScheduleResult {
  ScheduledWindowExecutions?: Array<ScheduledWindowExecution>;
  NextToken?: string;
}
export interface DescribeMaintenanceWindowsForTargetRequest {
  Targets: Array<Target>;
  ResourceType: MaintenanceWindowResourceType;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeMaintenanceWindowsForTargetResult {
  WindowIdentities?: Array<MaintenanceWindowIdentityForTarget>;
  NextToken?: string;
}
export interface DescribeMaintenanceWindowsRequest {
  Filters?: Array<MaintenanceWindowFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeMaintenanceWindowsResult {
  WindowIdentities?: Array<MaintenanceWindowIdentity>;
  NextToken?: string;
}
export interface DescribeMaintenanceWindowTargetsRequest {
  WindowId: string;
  Filters?: Array<MaintenanceWindowFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeMaintenanceWindowTargetsResult {
  Targets?: Array<MaintenanceWindowTarget>;
  NextToken?: string;
}
export interface DescribeMaintenanceWindowTasksRequest {
  WindowId: string;
  Filters?: Array<MaintenanceWindowFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeMaintenanceWindowTasksResult {
  Tasks?: Array<MaintenanceWindowTask>;
  NextToken?: string;
}
export interface DescribeOpsItemsRequest {
  OpsItemFilters?: Array<OpsItemFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeOpsItemsResponse {
  NextToken?: string;
  OpsItemSummaries?: Array<OpsItemSummary>;
}
export interface DescribeParametersRequest {
  Filters?: Array<ParametersFilter>;
  ParameterFilters?: Array<ParameterStringFilter>;
  MaxResults?: number;
  NextToken?: string;
  Shared?: boolean;
}
export interface DescribeParametersResult {
  Parameters?: Array<ParameterMetadata>;
  NextToken?: string;
}
export interface DescribePatchBaselinesRequest {
  Filters?: Array<PatchOrchestratorFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribePatchBaselinesResult {
  BaselineIdentities?: Array<PatchBaselineIdentity>;
  NextToken?: string;
}
export interface DescribePatchGroupsRequest {
  MaxResults?: number;
  Filters?: Array<PatchOrchestratorFilter>;
  NextToken?: string;
}
export interface DescribePatchGroupsResult {
  Mappings?: Array<PatchGroupPatchBaselineMapping>;
  NextToken?: string;
}
export interface DescribePatchGroupStateRequest {
  PatchGroup: string;
}
export interface DescribePatchGroupStateResult {
  Instances?: number;
  InstancesWithInstalledPatches?: number;
  InstancesWithInstalledOtherPatches?: number;
  InstancesWithInstalledPendingRebootPatches?: number;
  InstancesWithInstalledRejectedPatches?: number;
  InstancesWithMissingPatches?: number;
  InstancesWithFailedPatches?: number;
  InstancesWithNotApplicablePatches?: number;
  InstancesWithUnreportedNotApplicablePatches?: number;
  InstancesWithCriticalNonCompliantPatches?: number;
  InstancesWithSecurityNonCompliantPatches?: number;
  InstancesWithOtherNonCompliantPatches?: number;
  InstancesWithAvailableSecurityUpdates?: number;
}
export interface DescribePatchPropertiesRequest {
  OperatingSystem: OperatingSystem;
  Property: PatchProperty;
  PatchSet?: PatchSet;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribePatchPropertiesResult {
  Properties?: Array<Record<string, string>>;
  NextToken?: string;
}
export interface DescribeSessionsRequest {
  State: SessionState;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<SessionFilter>;
}
export interface DescribeSessionsResponse {
  Sessions?: Array<Session>;
  NextToken?: string;
}
export type DescriptionInDocument = string;

export interface DisassociateOpsItemRelatedItemRequest {
  OpsItemId: string;
  AssociationId: string;
}
export interface DisassociateOpsItemRelatedItemResponse {}
export declare class DocumentAlreadyExists extends EffectData.TaggedError(
  "DocumentAlreadyExists",
)<{
  readonly Message?: string;
}> {}
export type DocumentARN = string;

export type DocumentAuthor = string;

export type DocumentContent = string;

export interface DocumentDefaultVersionDescription {
  Name?: string;
  DefaultVersion?: string;
  DefaultVersionName?: string;
}
export interface DocumentDescription {
  Sha1?: string;
  Hash?: string;
  HashType?: DocumentHashType;
  Name?: string;
  DisplayName?: string;
  VersionName?: string;
  Owner?: string;
  CreatedDate?: Date | string;
  Status?: DocumentStatus;
  StatusInformation?: string;
  DocumentVersion?: string;
  Description?: string;
  Parameters?: Array<DocumentParameter>;
  PlatformTypes?: Array<PlatformType>;
  DocumentType?: DocumentType;
  SchemaVersion?: string;
  LatestVersion?: string;
  DefaultVersion?: string;
  DocumentFormat?: DocumentFormat;
  TargetType?: string;
  Tags?: Array<Tag>;
  AttachmentsInformation?: Array<AttachmentInformation>;
  Requires?: Array<DocumentRequires>;
  Author?: string;
  ReviewInformation?: Array<ReviewInformation>;
  ApprovedVersion?: string;
  PendingReviewVersion?: string;
  ReviewStatus?: ReviewStatus;
  Category?: Array<string>;
  CategoryEnum?: Array<string>;
}
export type DocumentDisplayName = string;

export interface DocumentFilter {
  key: DocumentFilterKey;
  value: string;
}
export type DocumentFilterKey =
  | "Name"
  | "Owner"
  | "PlatformTypes"
  | "DocumentType";
export type DocumentFilterList = Array<DocumentFilter>;
export type DocumentFilterValue = string;

export type DocumentFormat = "YAML" | "JSON" | "TEXT";
export type DocumentHash = string;

export type DocumentHashType = "SHA256" | "SHA1";
export interface DocumentIdentifier {
  Name?: string;
  CreatedDate?: Date | string;
  DisplayName?: string;
  Owner?: string;
  VersionName?: string;
  PlatformTypes?: Array<PlatformType>;
  DocumentVersion?: string;
  DocumentType?: DocumentType;
  SchemaVersion?: string;
  DocumentFormat?: DocumentFormat;
  TargetType?: string;
  Tags?: Array<Tag>;
  Requires?: Array<DocumentRequires>;
  ReviewStatus?: ReviewStatus;
  Author?: string;
}
export type DocumentIdentifierList = Array<DocumentIdentifier>;
export interface DocumentKeyValuesFilter {
  Key?: string;
  Values?: Array<string>;
}
export type DocumentKeyValuesFilterKey = string;

export type DocumentKeyValuesFilterList = Array<DocumentKeyValuesFilter>;
export type DocumentKeyValuesFilterValue = string;

export type DocumentKeyValuesFilterValues = Array<string>;
export declare class DocumentLimitExceeded extends EffectData.TaggedError(
  "DocumentLimitExceeded",
)<{
  readonly Message?: string;
}> {}
export type DocumentMetadataEnum = "DocumentReviews";
export interface DocumentMetadataResponseInfo {
  ReviewerResponse?: Array<DocumentReviewerResponseSource>;
}
export type DocumentName = string;

export type DocumentOwner = string;

export interface DocumentParameter {
  Name?: string;
  Type?: DocumentParameterType;
  Description?: string;
  DefaultValue?: string;
}
export type DocumentParameterDefaultValue = string;

export type DocumentParameterDescrption = string;

export type DocumentParameterList = Array<DocumentParameter>;
export type DocumentParameterName = string;

export type DocumentParameterType = "String" | "StringList";
export declare class DocumentPermissionLimit extends EffectData.TaggedError(
  "DocumentPermissionLimit",
)<{
  readonly Message?: string;
}> {}
export type DocumentPermissionMaxResults = number;

export type DocumentPermissionType = "SHARE";
export interface DocumentRequires {
  Name: string;
  Version?: string;
  RequireType?: string;
  VersionName?: string;
}
export type DocumentRequiresList = Array<DocumentRequires>;
export type DocumentReviewAction =
  | "SendForReview"
  | "UpdateReview"
  | "Approve"
  | "Reject";
export type DocumentReviewComment = string;

export type DocumentReviewCommentList = Array<DocumentReviewCommentSource>;
export interface DocumentReviewCommentSource {
  Type?: DocumentReviewCommentType;
  Content?: string;
}
export type DocumentReviewCommentType = "Comment";
export type DocumentReviewerResponseList =
  Array<DocumentReviewerResponseSource>;
export interface DocumentReviewerResponseSource {
  CreateTime?: Date | string;
  UpdatedTime?: Date | string;
  ReviewStatus?: ReviewStatus;
  Comment?: Array<DocumentReviewCommentSource>;
  Reviewer?: string;
}
export interface DocumentReviews {
  Action: DocumentReviewAction;
  Comment?: Array<DocumentReviewCommentSource>;
}
export type DocumentSchemaVersion = string;

export type DocumentSha1 = string;

export type DocumentStatus =
  | "Creating"
  | "Active"
  | "Updating"
  | "Deleting"
  | "Failed";
export type DocumentStatusInformation = string;

export type DocumentType =
  | "Command"
  | "Policy"
  | "Automation"
  | "Session"
  | "Package"
  | "ApplicationConfiguration"
  | "ApplicationConfigurationSchema"
  | "DeploymentStrategy"
  | "ChangeCalendar"
  | "ChangeTemplate"
  | "ProblemAnalysis"
  | "ProblemAnalysisTemplate"
  | "CloudFormation"
  | "ConformancePackTemplate"
  | "QuickSetup"
  | "ManualApprovalPolicy"
  | "AutoApprovalPolicy";
export type DocumentVersion = string;

export interface DocumentVersionInfo {
  Name?: string;
  DisplayName?: string;
  DocumentVersion?: string;
  VersionName?: string;
  CreatedDate?: Date | string;
  IsDefaultVersion?: boolean;
  DocumentFormat?: DocumentFormat;
  Status?: DocumentStatus;
  StatusInformation?: string;
  ReviewStatus?: ReviewStatus;
}
export declare class DocumentVersionLimitExceeded extends EffectData.TaggedError(
  "DocumentVersionLimitExceeded",
)<{
  readonly Message?: string;
}> {}
export type DocumentVersionList = Array<DocumentVersionInfo>;
export type DocumentVersionName = string;

export type DocumentVersionNumber = string;

export declare class DoesNotExistException extends EffectData.TaggedError(
  "DoesNotExistException",
)<{
  readonly Message?: string;
}> {}
export type DryRun = boolean;

export declare class DuplicateDocumentContent extends EffectData.TaggedError(
  "DuplicateDocumentContent",
)<{
  readonly Message?: string;
}> {}
export declare class DuplicateDocumentVersionName extends EffectData.TaggedError(
  "DuplicateDocumentVersionName",
)<{
  readonly Message?: string;
}> {}
export declare class DuplicateInstanceId extends EffectData.TaggedError(
  "DuplicateInstanceId",
)<{}> {}
export type Duration = number;

export type EffectiveInstanceAssociationMaxResults = number;

export interface EffectivePatch {
  Patch?: Patch;
  PatchStatus?: PatchStatus;
}
export type EffectivePatchList = Array<EffectivePatch>;
export type ErrorCount = number;

export type ExcludeAccount = string;

export type ExcludeAccounts = Array<string>;
interface _ExecutionInputs {
  Automation?: AutomationExecutionInputs;
}

export type ExecutionInputs = _ExecutionInputs & {
  Automation: AutomationExecutionInputs;
};
export type ExecutionMode = "Auto" | "Interactive";
interface _ExecutionPreview {
  Automation?: AutomationExecutionPreview;
}

export type ExecutionPreview = _ExecutionPreview & {
  Automation: AutomationExecutionPreview;
};
export type ExecutionPreviewId = string;

export type ExecutionPreviewStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "SUCCESS"
  | "FAILED";
export type ExecutionRoleName = string;

export type ExpirationDate = Date | string;

export type ExternalAlarmState = "UNKNOWN" | "ALARM";
export interface FailedCreateAssociation {
  Entry?: CreateAssociationBatchRequestEntry;
  Message?: string;
  Fault?: Fault;
}
export type FailedCreateAssociationList = Array<FailedCreateAssociation>;
export interface FailureDetails {
  FailureStage?: string;
  FailureType?: string;
  Details?: Record<string, Array<string>>;
}
export type Fault = "Client" | "Server" | "Unknown";
export declare class FeatureNotAvailableException extends EffectData.TaggedError(
  "FeatureNotAvailableException",
)<{
  readonly Message?: string;
}> {}
export interface GetAccessTokenRequest {
  AccessRequestId: string;
}
export interface GetAccessTokenResponse {
  Credentials?: Credentials;
  AccessRequestStatus?: AccessRequestStatus;
}
export interface GetAutomationExecutionRequest {
  AutomationExecutionId: string;
}
export interface GetAutomationExecutionResult {
  AutomationExecution?: AutomationExecution;
}
export interface GetCalendarStateRequest {
  CalendarNames: Array<string>;
  AtTime?: string;
}
export interface GetCalendarStateResponse {
  State?: CalendarState;
  AtTime?: string;
  NextTransitionTime?: string;
}
export interface GetCommandInvocationRequest {
  CommandId: string;
  InstanceId: string;
  PluginName?: string;
}
export interface GetCommandInvocationResult {
  CommandId?: string;
  InstanceId?: string;
  Comment?: string;
  DocumentName?: string;
  DocumentVersion?: string;
  PluginName?: string;
  ResponseCode?: number;
  ExecutionStartDateTime?: string;
  ExecutionElapsedTime?: string;
  ExecutionEndDateTime?: string;
  Status?: CommandInvocationStatus;
  StatusDetails?: string;
  StandardOutputContent?: string;
  StandardOutputUrl?: string;
  StandardErrorContent?: string;
  StandardErrorUrl?: string;
  CloudWatchOutputConfig?: CloudWatchOutputConfig;
}
export interface GetConnectionStatusRequest {
  Target: string;
}
export interface GetConnectionStatusResponse {
  Target?: string;
  Status?: ConnectionStatus;
}
export interface GetDefaultPatchBaselineRequest {
  OperatingSystem?: OperatingSystem;
}
export interface GetDefaultPatchBaselineResult {
  BaselineId?: string;
  OperatingSystem?: OperatingSystem;
}
export interface GetDeployablePatchSnapshotForInstanceRequest {
  InstanceId: string;
  SnapshotId: string;
  BaselineOverride?: BaselineOverride;
}
export interface GetDeployablePatchSnapshotForInstanceResult {
  InstanceId?: string;
  SnapshotId?: string;
  SnapshotDownloadUrl?: string;
  Product?: string;
}
export interface GetDocumentRequest {
  Name: string;
  VersionName?: string;
  DocumentVersion?: string;
  DocumentFormat?: DocumentFormat;
}
export interface GetDocumentResult {
  Name?: string;
  CreatedDate?: Date | string;
  DisplayName?: string;
  VersionName?: string;
  DocumentVersion?: string;
  Status?: DocumentStatus;
  StatusInformation?: string;
  Content?: string;
  DocumentType?: DocumentType;
  DocumentFormat?: DocumentFormat;
  Requires?: Array<DocumentRequires>;
  AttachmentsContent?: Array<AttachmentContent>;
  ReviewStatus?: ReviewStatus;
}
export interface GetExecutionPreviewRequest {
  ExecutionPreviewId: string;
}
export interface GetExecutionPreviewResponse {
  ExecutionPreviewId?: string;
  EndedAt?: Date | string;
  Status?: ExecutionPreviewStatus;
  StatusMessage?: string;
  ExecutionPreview?: ExecutionPreview;
}
export interface GetInventoryRequest {
  Filters?: Array<InventoryFilter>;
  Aggregators?: Array<InventoryAggregator>;
  ResultAttributes?: Array<ResultAttribute>;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetInventoryResult {
  Entities?: Array<InventoryResultEntity>;
  NextToken?: string;
}
export type GetInventorySchemaMaxResults = number;

export interface GetInventorySchemaRequest {
  TypeName?: string;
  NextToken?: string;
  MaxResults?: number;
  Aggregator?: boolean;
  SubType?: boolean;
}
export interface GetInventorySchemaResult {
  Schemas?: Array<InventoryItemSchema>;
  NextToken?: string;
}
export interface GetMaintenanceWindowExecutionRequest {
  WindowExecutionId: string;
}
export interface GetMaintenanceWindowExecutionResult {
  WindowExecutionId?: string;
  TaskIds?: Array<string>;
  Status?: MaintenanceWindowExecutionStatus;
  StatusDetails?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export interface GetMaintenanceWindowExecutionTaskInvocationRequest {
  WindowExecutionId: string;
  TaskId: string;
  InvocationId: string;
}
export interface GetMaintenanceWindowExecutionTaskInvocationResult {
  WindowExecutionId?: string;
  TaskExecutionId?: string;
  InvocationId?: string;
  ExecutionId?: string;
  TaskType?: MaintenanceWindowTaskType;
  Parameters?: string;
  Status?: MaintenanceWindowExecutionStatus;
  StatusDetails?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  OwnerInformation?: string;
  WindowTargetId?: string;
}
export interface GetMaintenanceWindowExecutionTaskRequest {
  WindowExecutionId: string;
  TaskId: string;
}
export interface GetMaintenanceWindowExecutionTaskResult {
  WindowExecutionId?: string;
  TaskExecutionId?: string;
  TaskArn?: string;
  ServiceRole?: string;
  Type?: MaintenanceWindowTaskType;
  TaskParameters?: Array<
    Record<string, MaintenanceWindowTaskParameterValueExpression>
  >;
  Priority?: number;
  MaxConcurrency?: string;
  MaxErrors?: string;
  Status?: MaintenanceWindowExecutionStatus;
  StatusDetails?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  AlarmConfiguration?: AlarmConfiguration;
  TriggeredAlarms?: Array<AlarmStateInformation>;
}
export interface GetMaintenanceWindowRequest {
  WindowId: string;
}
export interface GetMaintenanceWindowResult {
  WindowId?: string;
  Name?: string;
  Description?: string;
  StartDate?: string;
  EndDate?: string;
  Schedule?: string;
  ScheduleTimezone?: string;
  ScheduleOffset?: number;
  NextExecutionTime?: string;
  Duration?: number;
  Cutoff?: number;
  AllowUnassociatedTargets?: boolean;
  Enabled?: boolean;
  CreatedDate?: Date | string;
  ModifiedDate?: Date | string;
}
export interface GetMaintenanceWindowTaskRequest {
  WindowId: string;
  WindowTaskId: string;
}
export interface GetMaintenanceWindowTaskResult {
  WindowId?: string;
  WindowTaskId?: string;
  Targets?: Array<Target>;
  TaskArn?: string;
  ServiceRoleArn?: string;
  TaskType?: MaintenanceWindowTaskType;
  TaskParameters?: Record<
    string,
    MaintenanceWindowTaskParameterValueExpression
  >;
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
  Priority?: number;
  MaxConcurrency?: string;
  MaxErrors?: string;
  LoggingInfo?: LoggingInfo;
  Name?: string;
  Description?: string;
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior;
  AlarmConfiguration?: AlarmConfiguration;
}
export interface GetOpsItemRequest {
  OpsItemId: string;
  OpsItemArn?: string;
}
export interface GetOpsItemResponse {
  OpsItem?: OpsItem;
}
export type GetOpsMetadataMaxResults = number;

export interface GetOpsMetadataRequest {
  OpsMetadataArn: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetOpsMetadataResult {
  ResourceId?: string;
  Metadata?: Record<string, MetadataValue>;
  NextToken?: string;
}
export interface GetOpsSummaryRequest {
  SyncName?: string;
  Filters?: Array<OpsFilter>;
  Aggregators?: Array<OpsAggregator>;
  ResultAttributes?: Array<OpsResultAttribute>;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetOpsSummaryResult {
  Entities?: Array<OpsEntity>;
  NextToken?: string;
}
export interface GetParameterHistoryRequest {
  Name: string;
  WithDecryption?: boolean;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetParameterHistoryResult {
  Parameters?: Array<ParameterHistory>;
  NextToken?: string;
}
export interface GetParameterRequest {
  Name: string;
  WithDecryption?: boolean;
}
export interface GetParameterResult {
  Parameter?: Parameter;
}
export type GetParametersByPathMaxResults = number;

export interface GetParametersByPathRequest {
  Path: string;
  Recursive?: boolean;
  ParameterFilters?: Array<ParameterStringFilter>;
  WithDecryption?: boolean;
  MaxResults?: number;
  NextToken?: string;
}
export interface GetParametersByPathResult {
  Parameters?: Array<Parameter>;
  NextToken?: string;
}
export interface GetParametersRequest {
  Names: Array<string>;
  WithDecryption?: boolean;
}
export interface GetParametersResult {
  Parameters?: Array<Parameter>;
  InvalidParameters?: Array<string>;
}
export interface GetPatchBaselineForPatchGroupRequest {
  PatchGroup: string;
  OperatingSystem?: OperatingSystem;
}
export interface GetPatchBaselineForPatchGroupResult {
  BaselineId?: string;
  PatchGroup?: string;
  OperatingSystem?: OperatingSystem;
}
export interface GetPatchBaselineRequest {
  BaselineId: string;
}
export interface GetPatchBaselineResult {
  BaselineId?: string;
  Name?: string;
  OperatingSystem?: OperatingSystem;
  GlobalFilters?: PatchFilterGroup;
  ApprovalRules?: PatchRuleGroup;
  ApprovedPatches?: Array<string>;
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
  ApprovedPatchesEnableNonSecurity?: boolean;
  RejectedPatches?: Array<string>;
  RejectedPatchesAction?: PatchAction;
  PatchGroups?: Array<string>;
  CreatedDate?: Date | string;
  ModifiedDate?: Date | string;
  Description?: string;
  Sources?: Array<PatchSource>;
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus;
}
export interface GetResourcePoliciesRequest {
  ResourceArn: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface GetResourcePoliciesResponse {
  NextToken?: string;
  Policies?: Array<GetResourcePoliciesResponseEntry>;
}
export type GetResourcePoliciesResponseEntries =
  Array<GetResourcePoliciesResponseEntry>;
export interface GetResourcePoliciesResponseEntry {
  PolicyId?: string;
  PolicyHash?: string;
  Policy?: string;
}
export interface GetServiceSettingRequest {
  SettingId: string;
}
export interface GetServiceSettingResult {
  ServiceSetting?: ServiceSetting;
}
export declare class HierarchyLevelLimitExceededException extends EffectData.TaggedError(
  "HierarchyLevelLimitExceededException",
)<{
  readonly message?: string;
}> {}
export declare class HierarchyTypeMismatchException extends EffectData.TaggedError(
  "HierarchyTypeMismatchException",
)<{
  readonly message?: string;
}> {}
export type IamRole = string;

export type IdempotencyToken = string;

export declare class IdempotentParameterMismatch extends EffectData.TaggedError(
  "IdempotentParameterMismatch",
)<{
  readonly Message?: string;
}> {}
export type ImpactType = "MUTATING" | "NON_MUTATING" | "UNDETERMINED";
export declare class IncompatiblePolicyException extends EffectData.TaggedError(
  "IncompatiblePolicyException",
)<{
  readonly message?: string;
}> {}
export type InstallOverrideList = string;

export interface InstanceAggregatedAssociationOverview {
  DetailedStatus?: string;
  InstanceAssociationStatusAggregatedCount?: Record<string, number>;
}
export interface InstanceAssociation {
  AssociationId?: string;
  InstanceId?: string;
  Content?: string;
  AssociationVersion?: string;
}
export type InstanceAssociationExecutionSummary = string;

export type InstanceAssociationList = Array<InstanceAssociation>;
export interface InstanceAssociationOutputLocation {
  S3Location?: S3OutputLocation;
}
export interface InstanceAssociationOutputUrl {
  S3OutputUrl?: S3OutputUrl;
}
export type InstanceAssociationStatusAggregatedCount = Record<string, number>;
export interface InstanceAssociationStatusInfo {
  AssociationId?: string;
  Name?: string;
  DocumentVersion?: string;
  AssociationVersion?: string;
  InstanceId?: string;
  ExecutionDate?: Date | string;
  Status?: string;
  DetailedStatus?: string;
  ExecutionSummary?: string;
  ErrorCode?: string;
  OutputUrl?: InstanceAssociationOutputUrl;
  AssociationName?: string;
}
export type InstanceAssociationStatusInfos =
  Array<InstanceAssociationStatusInfo>;
export type InstanceCount = number;

export type InstanceId = string;

export type InstanceIdList = Array<string>;
export interface InstanceInfo {
  AgentType?: string;
  AgentVersion?: string;
  ComputerName?: string;
  InstanceStatus?: string;
  IpAddress?: string;
  ManagedStatus?: ManagedStatus;
  PlatformType?: PlatformType;
  PlatformName?: string;
  PlatformVersion?: string;
  ResourceType?: ResourceType;
}
export interface InstanceInformation {
  InstanceId?: string;
  PingStatus?: PingStatus;
  LastPingDateTime?: Date | string;
  AgentVersion?: string;
  IsLatestVersion?: boolean;
  PlatformType?: PlatformType;
  PlatformName?: string;
  PlatformVersion?: string;
  ActivationId?: string;
  IamRole?: string;
  RegistrationDate?: Date | string;
  ResourceType?: ResourceType;
  Name?: string;
  IPAddress?: string;
  ComputerName?: string;
  AssociationStatus?: string;
  LastAssociationExecutionDate?: Date | string;
  LastSuccessfulAssociationExecutionDate?: Date | string;
  AssociationOverview?: InstanceAggregatedAssociationOverview;
  SourceId?: string;
  SourceType?: SourceType;
}
export interface InstanceInformationFilter {
  key: InstanceInformationFilterKey;
  valueSet: Array<string>;
}
export type InstanceInformationFilterKey =
  | "INSTANCE_IDS"
  | "AGENT_VERSION"
  | "PING_STATUS"
  | "PLATFORM_TYPES"
  | "ACTIVATION_IDS"
  | "IAM_ROLE"
  | "RESOURCE_TYPE"
  | "ASSOCIATION_STATUS";
export type InstanceInformationFilterList = Array<InstanceInformationFilter>;
export type InstanceInformationFilterValue = string;

export type InstanceInformationFilterValueSet = Array<string>;
export type InstanceInformationList = Array<InstanceInformation>;
export interface InstanceInformationStringFilter {
  Key: string;
  Values: Array<string>;
}
export type InstanceInformationStringFilterKey = string;

export type InstanceInformationStringFilterList =
  Array<InstanceInformationStringFilter>;
export type InstanceName = string;

export interface InstancePatchState {
  InstanceId: string;
  PatchGroup: string;
  BaselineId: string;
  SnapshotId?: string;
  InstallOverrideList?: string;
  OwnerInformation?: string;
  InstalledCount?: number;
  InstalledOtherCount?: number;
  InstalledPendingRebootCount?: number;
  InstalledRejectedCount?: number;
  MissingCount?: number;
  FailedCount?: number;
  UnreportedNotApplicableCount?: number;
  NotApplicableCount?: number;
  AvailableSecurityUpdateCount?: number;
  OperationStartTime: Date | string;
  OperationEndTime: Date | string;
  Operation: PatchOperationType;
  LastNoRebootInstallOperationTime?: Date | string;
  RebootOption?: RebootOption;
  CriticalNonCompliantCount?: number;
  SecurityNonCompliantCount?: number;
  OtherNonCompliantCount?: number;
}
export interface InstancePatchStateFilter {
  Key: string;
  Values: Array<string>;
  Type: InstancePatchStateOperatorType;
}
export type InstancePatchStateFilterKey = string;

export type InstancePatchStateFilterList = Array<InstancePatchStateFilter>;
export type InstancePatchStateFilterValue = string;

export type InstancePatchStateFilterValues = Array<string>;
export type InstancePatchStateList = Array<InstancePatchState>;
export type InstancePatchStateOperatorType =
  | "EQUAL"
  | "NOT_EQUAL"
  | "LESS_THAN"
  | "GREATER_THAN";
export type InstancePatchStatesList = Array<InstancePatchState>;
export type InstanceProperties = Array<InstanceProperty>;
export interface InstanceProperty {
  Name?: string;
  InstanceId?: string;
  InstanceType?: string;
  InstanceRole?: string;
  KeyName?: string;
  InstanceState?: string;
  Architecture?: string;
  IPAddress?: string;
  LaunchTime?: Date | string;
  PingStatus?: PingStatus;
  LastPingDateTime?: Date | string;
  AgentVersion?: string;
  PlatformType?: PlatformType;
  PlatformName?: string;
  PlatformVersion?: string;
  ActivationId?: string;
  IamRole?: string;
  RegistrationDate?: Date | string;
  ResourceType?: string;
  ComputerName?: string;
  AssociationStatus?: string;
  LastAssociationExecutionDate?: Date | string;
  LastSuccessfulAssociationExecutionDate?: Date | string;
  AssociationOverview?: InstanceAggregatedAssociationOverview;
  SourceId?: string;
  SourceType?: SourceType;
}
export interface InstancePropertyFilter {
  key: InstancePropertyFilterKey;
  valueSet: Array<string>;
}
export type InstancePropertyFilterKey =
  | "INSTANCE_IDS"
  | "AGENT_VERSION"
  | "PING_STATUS"
  | "PLATFORM_TYPES"
  | "DOCUMENT_NAME"
  | "ACTIVATION_IDS"
  | "IAM_ROLE"
  | "RESOURCE_TYPE"
  | "ASSOCIATION_STATUS";
export type InstancePropertyFilterList = Array<InstancePropertyFilter>;
export type InstancePropertyFilterOperator =
  | "EQUAL"
  | "NOT_EQUAL"
  | "BEGIN_WITH"
  | "LESS_THAN"
  | "GREATER_THAN";
export type InstancePropertyFilterValue = string;

export type InstancePropertyFilterValueSet = Array<string>;
export interface InstancePropertyStringFilter {
  Key: string;
  Values: Array<string>;
  Operator?: InstancePropertyFilterOperator;
}
export type InstancePropertyStringFilterKey = string;

export type InstancePropertyStringFilterList =
  Array<InstancePropertyStringFilter>;
export type InstanceRole = string;

export type InstancesCount = number;

export type InstanceState = string;

export type InstanceStatus = string;

export type InstanceTagName = string;

export type InstanceType = string;

export type Integer = number;

export declare class InternalServerError extends EffectData.TaggedError(
  "InternalServerError",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidActivation extends EffectData.TaggedError(
  "InvalidActivation",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidActivationId extends EffectData.TaggedError(
  "InvalidActivationId",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidAggregatorException extends EffectData.TaggedError(
  "InvalidAggregatorException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidAllowedPatternException extends EffectData.TaggedError(
  "InvalidAllowedPatternException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidAssociation extends EffectData.TaggedError(
  "InvalidAssociation",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidAssociationVersion extends EffectData.TaggedError(
  "InvalidAssociationVersion",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidAutomationExecutionParametersException extends EffectData.TaggedError(
  "InvalidAutomationExecutionParametersException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidAutomationSignalException extends EffectData.TaggedError(
  "InvalidAutomationSignalException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidAutomationStatusUpdateException extends EffectData.TaggedError(
  "InvalidAutomationStatusUpdateException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidCommandId extends EffectData.TaggedError(
  "InvalidCommandId",
)<{}> {}
export declare class InvalidDeleteInventoryParametersException extends EffectData.TaggedError(
  "InvalidDeleteInventoryParametersException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidDeletionIdException extends EffectData.TaggedError(
  "InvalidDeletionIdException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidDocument extends EffectData.TaggedError(
  "InvalidDocument",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidDocumentContent extends EffectData.TaggedError(
  "InvalidDocumentContent",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidDocumentOperation extends EffectData.TaggedError(
  "InvalidDocumentOperation",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidDocumentSchemaVersion extends EffectData.TaggedError(
  "InvalidDocumentSchemaVersion",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidDocumentType extends EffectData.TaggedError(
  "InvalidDocumentType",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidDocumentVersion extends EffectData.TaggedError(
  "InvalidDocumentVersion",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidFilter extends EffectData.TaggedError(
  "InvalidFilter",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidFilterKey extends EffectData.TaggedError(
  "InvalidFilterKey",
)<{}> {}
export declare class InvalidFilterOption extends EffectData.TaggedError(
  "InvalidFilterOption",
)<{
  readonly message?: string;
}> {}
export declare class InvalidFilterValue extends EffectData.TaggedError(
  "InvalidFilterValue",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidInstanceId extends EffectData.TaggedError(
  "InvalidInstanceId",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidInstanceInformationFilterValue extends EffectData.TaggedError(
  "InvalidInstanceInformationFilterValue",
)<{
  readonly message?: string;
}> {}
export declare class InvalidInstancePropertyFilterValue extends EffectData.TaggedError(
  "InvalidInstancePropertyFilterValue",
)<{
  readonly message?: string;
}> {}
export declare class InvalidInventoryGroupException extends EffectData.TaggedError(
  "InvalidInventoryGroupException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidInventoryItemContextException extends EffectData.TaggedError(
  "InvalidInventoryItemContextException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidInventoryRequestException extends EffectData.TaggedError(
  "InvalidInventoryRequestException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidItemContentException extends EffectData.TaggedError(
  "InvalidItemContentException",
)<{
  readonly TypeName?: string;
  readonly Message?: string;
}> {}
export declare class InvalidKeyId extends EffectData.TaggedError(
  "InvalidKeyId",
)<{
  readonly message?: string;
}> {}
export declare class InvalidNextToken extends EffectData.TaggedError(
  "InvalidNextToken",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidNotificationConfig extends EffectData.TaggedError(
  "InvalidNotificationConfig",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidOptionException extends EffectData.TaggedError(
  "InvalidOptionException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidOutputFolder extends EffectData.TaggedError(
  "InvalidOutputFolder",
)<{}> {}
export declare class InvalidOutputLocation extends EffectData.TaggedError(
  "InvalidOutputLocation",
)<{}> {}
export declare class InvalidParameters extends EffectData.TaggedError(
  "InvalidParameters",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidPermissionType extends EffectData.TaggedError(
  "InvalidPermissionType",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidPluginName extends EffectData.TaggedError(
  "InvalidPluginName",
)<{}> {}
export declare class InvalidPolicyAttributeException extends EffectData.TaggedError(
  "InvalidPolicyAttributeException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidPolicyTypeException extends EffectData.TaggedError(
  "InvalidPolicyTypeException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidResourceId extends EffectData.TaggedError(
  "InvalidResourceId",
)<{}> {}
export declare class InvalidResourceType extends EffectData.TaggedError(
  "InvalidResourceType",
)<{}> {}
export declare class InvalidResultAttributeException extends EffectData.TaggedError(
  "InvalidResultAttributeException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRole extends EffectData.TaggedError("InvalidRole")<{
  readonly Message?: string;
}> {}
export declare class InvalidSchedule extends EffectData.TaggedError(
  "InvalidSchedule",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidTag extends EffectData.TaggedError("InvalidTag")<{
  readonly Message?: string;
}> {}
export declare class InvalidTarget extends EffectData.TaggedError(
  "InvalidTarget",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidTargetMaps extends EffectData.TaggedError(
  "InvalidTargetMaps",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidTypeNameException extends EffectData.TaggedError(
  "InvalidTypeNameException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidUpdate extends EffectData.TaggedError(
  "InvalidUpdate",
)<{
  readonly Message?: string;
}> {}
export interface InventoryAggregator {
  Expression?: string;
  Aggregators?: Array<InventoryAggregator>;
  Groups?: Array<InventoryGroup>;
}
export type InventoryAggregatorExpression = string;

export type InventoryAggregatorList = Array<InventoryAggregator>;
export type InventoryAttributeDataType = "STRING" | "NUMBER";
export type InventoryDeletionLastStatusMessage = string;

export type InventoryDeletionLastStatusUpdateTime = Date | string;

export type InventoryDeletionsList = Array<InventoryDeletionStatusItem>;
export type InventoryDeletionStartTime = Date | string;

export type InventoryDeletionStatus = "IN_PROGRESS" | "COMPLETE";
export interface InventoryDeletionStatusItem {
  DeletionId?: string;
  TypeName?: string;
  DeletionStartTime?: Date | string;
  LastStatus?: InventoryDeletionStatus;
  LastStatusMessage?: string;
  DeletionSummary?: InventoryDeletionSummary;
  LastStatusUpdateTime?: Date | string;
}
export interface InventoryDeletionSummary {
  TotalCount?: number;
  RemainingCount?: number;
  SummaryItems?: Array<InventoryDeletionSummaryItem>;
}
export interface InventoryDeletionSummaryItem {
  Version?: string;
  Count?: number;
  RemainingCount?: number;
}
export type InventoryDeletionSummaryItems = Array<InventoryDeletionSummaryItem>;
export interface InventoryFilter {
  Key: string;
  Values: Array<string>;
  Type?: InventoryQueryOperatorType;
}
export type InventoryFilterKey = string;

export type InventoryFilterList = Array<InventoryFilter>;
export type InventoryFilterValue = string;

export type InventoryFilterValueList = Array<string>;
export interface InventoryGroup {
  Name: string;
  Filters: Array<InventoryFilter>;
}
export type InventoryGroupList = Array<InventoryGroup>;
export type InventoryGroupName = string;

export interface InventoryItem {
  TypeName: string;
  SchemaVersion: string;
  CaptureTime: string;
  ContentHash?: string;
  Content?: Array<Record<string, string>>;
  Context?: Record<string, string>;
}
export interface InventoryItemAttribute {
  Name: string;
  DataType: InventoryAttributeDataType;
}
export type InventoryItemAttributeList = Array<InventoryItemAttribute>;
export type InventoryItemAttributeName = string;

export type InventoryItemCaptureTime = string;

export type InventoryItemContentContext = Record<string, string>;
export type InventoryItemContentHash = string;

export type InventoryItemEntry = Record<string, string>;
export type InventoryItemEntryList = Array<Record<string, string>>;
export type InventoryItemList = Array<InventoryItem>;
export interface InventoryItemSchema {
  TypeName: string;
  Version?: string;
  Attributes: Array<InventoryItemAttribute>;
  DisplayName?: string;
}
export type InventoryItemSchemaResultList = Array<InventoryItemSchema>;
export type InventoryItemSchemaVersion = string;

export type InventoryItemTypeName = string;

export type InventoryItemTypeNameFilter = string;

export type InventoryQueryOperatorType =
  | "EQUAL"
  | "NOT_EQUAL"
  | "BEGIN_WITH"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "EXISTS";
export interface InventoryResultEntity {
  Id?: string;
  Data?: Record<string, InventoryResultItem>;
}
export type InventoryResultEntityId = string;

export type InventoryResultEntityList = Array<InventoryResultEntity>;
export interface InventoryResultItem {
  TypeName: string;
  SchemaVersion: string;
  CaptureTime?: string;
  ContentHash?: string;
  Content: Array<Record<string, string>>;
}
export type InventoryResultItemKey = string;

export type InventoryResultItemMap = Record<string, InventoryResultItem>;
export type InventorySchemaDeleteOption = "DISABLE_SCHEMA" | "DELETE_SCHEMA";
export type InventoryTypeDisplayName = string;

export declare class InvocationDoesNotExist extends EffectData.TaggedError(
  "InvocationDoesNotExist",
)<{}> {}
export type InvocationTraceOutput = string;

export type IPAddress = string;

export type ISO8601String = string;

export type IsSubTypeSchema = boolean;

export declare class ItemContentMismatchException extends EffectData.TaggedError(
  "ItemContentMismatchException",
)<{
  readonly TypeName?: string;
  readonly Message?: string;
}> {}
export declare class ItemSizeLimitExceededException extends EffectData.TaggedError(
  "ItemSizeLimitExceededException",
)<{
  readonly TypeName?: string;
  readonly Message?: string;
}> {}
export type KeyList = Array<string>;
export type KeyName = string;

export interface LabelParameterVersionRequest {
  Name: string;
  ParameterVersion?: number;
  Labels: Array<string>;
}
export interface LabelParameterVersionResult {
  InvalidLabels?: Array<string>;
  ParameterVersion?: number;
}
export type LastResourceDataSyncMessage = string;

export type LastResourceDataSyncStatus = "SUCCESSFUL" | "FAILED" | "INPROGRESS";
export type LastResourceDataSyncTime = Date | string;

export type LastSuccessfulResourceDataSyncTime = Date | string;

export interface ListAssociationsRequest {
  AssociationFilterList?: Array<AssociationFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAssociationsResult {
  Associations?: Array<Association>;
  NextToken?: string;
}
export interface ListAssociationVersionsRequest {
  AssociationId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAssociationVersionsResult {
  AssociationVersions?: Array<AssociationVersionInfo>;
  NextToken?: string;
}
export interface ListCommandInvocationsRequest {
  CommandId?: string;
  InstanceId?: string;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<CommandFilter>;
  Details?: boolean;
}
export interface ListCommandInvocationsResult {
  CommandInvocations?: Array<CommandInvocation>;
  NextToken?: string;
}
export interface ListCommandsRequest {
  CommandId?: string;
  InstanceId?: string;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Array<CommandFilter>;
}
export interface ListCommandsResult {
  Commands?: Array<Command>;
  NextToken?: string;
}
export interface ListComplianceItemsRequest {
  Filters?: Array<ComplianceStringFilter>;
  ResourceIds?: Array<string>;
  ResourceTypes?: Array<string>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListComplianceItemsResult {
  ComplianceItems?: Array<ComplianceItem>;
  NextToken?: string;
}
export interface ListComplianceSummariesRequest {
  Filters?: Array<ComplianceStringFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListComplianceSummariesResult {
  ComplianceSummaryItems?: Array<ComplianceSummaryItem>;
  NextToken?: string;
}
export interface ListDocumentMetadataHistoryRequest {
  Name: string;
  DocumentVersion?: string;
  Metadata: DocumentMetadataEnum;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListDocumentMetadataHistoryResponse {
  Name?: string;
  DocumentVersion?: string;
  Author?: string;
  Metadata?: DocumentMetadataResponseInfo;
  NextToken?: string;
}
export interface ListDocumentsRequest {
  DocumentFilterList?: Array<DocumentFilter>;
  Filters?: Array<DocumentKeyValuesFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListDocumentsResult {
  DocumentIdentifiers?: Array<DocumentIdentifier>;
  NextToken?: string;
}
export interface ListDocumentVersionsRequest {
  Name: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListDocumentVersionsResult {
  DocumentVersions?: Array<DocumentVersionInfo>;
  NextToken?: string;
}
export interface ListInventoryEntriesRequest {
  InstanceId: string;
  TypeName: string;
  Filters?: Array<InventoryFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListInventoryEntriesResult {
  TypeName?: string;
  InstanceId?: string;
  SchemaVersion?: string;
  CaptureTime?: string;
  Entries?: Array<Record<string, string>>;
  NextToken?: string;
}
export interface ListNodesRequest {
  SyncName?: string;
  Filters?: Array<NodeFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListNodesResult {
  Nodes?: Array<Node>;
  NextToken?: string;
}
export interface ListNodesSummaryRequest {
  SyncName?: string;
  Filters?: Array<NodeFilter>;
  Aggregators: Array<NodeAggregator>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListNodesSummaryResult {
  Summary?: Array<Record<string, string>>;
  NextToken?: string;
}
export interface ListOpsItemEventsRequest {
  Filters?: Array<OpsItemEventFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListOpsItemEventsResponse {
  NextToken?: string;
  Summaries?: Array<OpsItemEventSummary>;
}
export interface ListOpsItemRelatedItemsRequest {
  OpsItemId?: string;
  Filters?: Array<OpsItemRelatedItemsFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListOpsItemRelatedItemsResponse {
  NextToken?: string;
  Summaries?: Array<OpsItemRelatedItemSummary>;
}
export type ListOpsMetadataMaxResults = number;

export interface ListOpsMetadataRequest {
  Filters?: Array<OpsMetadataFilter>;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListOpsMetadataResult {
  OpsMetadataList?: Array<OpsMetadata>;
  NextToken?: string;
}
export interface ListResourceComplianceSummariesRequest {
  Filters?: Array<ComplianceStringFilter>;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListResourceComplianceSummariesResult {
  ResourceComplianceSummaryItems?: Array<ResourceComplianceSummaryItem>;
  NextToken?: string;
}
export interface ListResourceDataSyncRequest {
  SyncType?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListResourceDataSyncResult {
  ResourceDataSyncItems?: Array<ResourceDataSyncItem>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceType: ResourceTypeForTagging;
  ResourceId: string;
}
export interface ListTagsForResourceResult {
  TagList?: Array<Tag>;
}
export interface LoggingInfo {
  S3BucketName: string;
  S3KeyPrefix?: string;
  S3Region: string;
}
export type Long = number;

export type MaintenanceWindowAllowUnassociatedTargets = boolean;

export interface MaintenanceWindowAutomationParameters {
  DocumentVersion?: string;
  Parameters?: Record<string, Array<string>>;
}
export type MaintenanceWindowCutoff = number;

export type MaintenanceWindowDescription = string;

export type MaintenanceWindowDurationHours = number;

export type MaintenanceWindowEnabled = boolean;

export interface MaintenanceWindowExecution {
  WindowId?: string;
  WindowExecutionId?: string;
  Status?: MaintenanceWindowExecutionStatus;
  StatusDetails?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
}
export type MaintenanceWindowExecutionId = string;

export type MaintenanceWindowExecutionList = Array<MaintenanceWindowExecution>;
export type MaintenanceWindowExecutionStatus =
  | "Pending"
  | "InProgress"
  | "Success"
  | "Failed"
  | "TimedOut"
  | "Cancelling"
  | "Cancelled"
  | "SkippedOverlapping";
export type MaintenanceWindowExecutionStatusDetails = string;

export type MaintenanceWindowExecutionTaskExecutionId = string;

export type MaintenanceWindowExecutionTaskId = string;

export interface MaintenanceWindowExecutionTaskIdentity {
  WindowExecutionId?: string;
  TaskExecutionId?: string;
  Status?: MaintenanceWindowExecutionStatus;
  StatusDetails?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  TaskArn?: string;
  TaskType?: MaintenanceWindowTaskType;
  AlarmConfiguration?: AlarmConfiguration;
  TriggeredAlarms?: Array<AlarmStateInformation>;
}
export type MaintenanceWindowExecutionTaskIdentityList =
  Array<MaintenanceWindowExecutionTaskIdentity>;
export type MaintenanceWindowExecutionTaskIdList = Array<string>;
export type MaintenanceWindowExecutionTaskInvocationId = string;

export interface MaintenanceWindowExecutionTaskInvocationIdentity {
  WindowExecutionId?: string;
  TaskExecutionId?: string;
  InvocationId?: string;
  ExecutionId?: string;
  TaskType?: MaintenanceWindowTaskType;
  Parameters?: string;
  Status?: MaintenanceWindowExecutionStatus;
  StatusDetails?: string;
  StartTime?: Date | string;
  EndTime?: Date | string;
  OwnerInformation?: string;
  WindowTargetId?: string;
}
export type MaintenanceWindowExecutionTaskInvocationIdentityList =
  Array<MaintenanceWindowExecutionTaskInvocationIdentity>;
export type MaintenanceWindowExecutionTaskInvocationParameters = string;

export interface MaintenanceWindowFilter {
  Key?: string;
  Values?: Array<string>;
}
export type MaintenanceWindowFilterKey = string;

export type MaintenanceWindowFilterList = Array<MaintenanceWindowFilter>;
export type MaintenanceWindowFilterValue = string;

export type MaintenanceWindowFilterValues = Array<string>;
export type MaintenanceWindowId = string;

export interface MaintenanceWindowIdentity {
  WindowId?: string;
  Name?: string;
  Description?: string;
  Enabled?: boolean;
  Duration?: number;
  Cutoff?: number;
  Schedule?: string;
  ScheduleTimezone?: string;
  ScheduleOffset?: number;
  EndDate?: string;
  StartDate?: string;
  NextExecutionTime?: string;
}
export interface MaintenanceWindowIdentityForTarget {
  WindowId?: string;
  Name?: string;
}
export type MaintenanceWindowIdentityList = Array<MaintenanceWindowIdentity>;
export type MaintenanceWindowLambdaClientContext = string;

export interface MaintenanceWindowLambdaParameters {
  ClientContext?: string;
  Qualifier?: string;
  Payload?: Uint8Array | string;
}
export type MaintenanceWindowLambdaPayload = Uint8Array | string;

export type MaintenanceWindowLambdaQualifier = string;

export type MaintenanceWindowMaxResults = number;

export type MaintenanceWindowName = string;

export type MaintenanceWindowOffset = number;

export type MaintenanceWindowResourceType = "Instance" | "ResourceGroup";
export interface MaintenanceWindowRunCommandParameters {
  Comment?: string;
  CloudWatchOutputConfig?: CloudWatchOutputConfig;
  DocumentHash?: string;
  DocumentHashType?: DocumentHashType;
  DocumentVersion?: string;
  NotificationConfig?: NotificationConfig;
  OutputS3BucketName?: string;
  OutputS3KeyPrefix?: string;
  Parameters?: Record<string, Array<string>>;
  ServiceRoleArn?: string;
  TimeoutSeconds?: number;
}
export type MaintenanceWindowSchedule = string;

export type MaintenanceWindowSearchMaxResults = number;

export type MaintenanceWindowsForTargetList =
  Array<MaintenanceWindowIdentityForTarget>;
export type MaintenanceWindowStepFunctionsInput = string;

export type MaintenanceWindowStepFunctionsName = string;

export interface MaintenanceWindowStepFunctionsParameters {
  Input?: string;
  Name?: string;
}
export type MaintenanceWindowStringDateTime = string;

export interface MaintenanceWindowTarget {
  WindowId?: string;
  WindowTargetId?: string;
  ResourceType?: MaintenanceWindowResourceType;
  Targets?: Array<Target>;
  OwnerInformation?: string;
  Name?: string;
  Description?: string;
}
export type MaintenanceWindowTargetId = string;

export type MaintenanceWindowTargetList = Array<MaintenanceWindowTarget>;
export interface MaintenanceWindowTask {
  WindowId?: string;
  WindowTaskId?: string;
  TaskArn?: string;
  Type?: MaintenanceWindowTaskType;
  Targets?: Array<Target>;
  TaskParameters?: Record<
    string,
    MaintenanceWindowTaskParameterValueExpression
  >;
  Priority?: number;
  LoggingInfo?: LoggingInfo;
  ServiceRoleArn?: string;
  MaxConcurrency?: string;
  MaxErrors?: string;
  Name?: string;
  Description?: string;
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior;
  AlarmConfiguration?: AlarmConfiguration;
}
export type MaintenanceWindowTaskArn = string;

export type MaintenanceWindowTaskCutoffBehavior = "ContinueTask" | "CancelTask";
export type MaintenanceWindowTaskId = string;

export interface MaintenanceWindowTaskInvocationParameters {
  RunCommand?: MaintenanceWindowRunCommandParameters;
  Automation?: MaintenanceWindowAutomationParameters;
  StepFunctions?: MaintenanceWindowStepFunctionsParameters;
  Lambda?: MaintenanceWindowLambdaParameters;
}
export type MaintenanceWindowTaskList = Array<MaintenanceWindowTask>;
export type MaintenanceWindowTaskParameterName = string;

export type MaintenanceWindowTaskParameters = Record<
  string,
  MaintenanceWindowTaskParameterValueExpression
>;
export type MaintenanceWindowTaskParametersList = Array<
  Record<string, MaintenanceWindowTaskParameterValueExpression>
>;
export type MaintenanceWindowTaskParameterValue = string;

export interface MaintenanceWindowTaskParameterValueExpression {
  Values?: Array<string>;
}
export type MaintenanceWindowTaskParameterValueList = Array<string>;
export type MaintenanceWindowTaskPriority = number;

export type MaintenanceWindowTaskTargetId = string;

export type MaintenanceWindowTaskType =
  | "RunCommand"
  | "Automation"
  | "StepFunctions"
  | "Lambda";
export type MaintenanceWindowTimezone = string;

export declare class MalformedResourcePolicyDocumentException extends EffectData.TaggedError(
  "MalformedResourcePolicyDocumentException",
)<{
  readonly Message?: string;
}> {}
export type ManagedInstanceId = string;

export type ManagedStatus = "ALL" | "MANAGED" | "UNMANAGED";
export type MaxConcurrency = string;

export declare class MaxDocumentSizeExceeded extends EffectData.TaggedError(
  "MaxDocumentSizeExceeded",
)<{
  readonly Message?: string;
}> {}
export type MaxErrors = string;

export type MaxResults = number;

export type MaxResultsEC2Compatible = number;

export type MaxSessionDuration = string;

export type MetadataKey = string;

export type MetadataKeysToDeleteList = Array<string>;
export type MetadataMap = Record<string, MetadataValue>;
export interface MetadataValue {
  Value?: string;
}
export type MetadataValueString = string;

export interface ModifyDocumentPermissionRequest {
  Name: string;
  PermissionType: DocumentPermissionType;
  AccountIdsToAdd?: Array<string>;
  AccountIdsToRemove?: Array<string>;
  SharedDocumentVersion?: string;
}
export interface ModifyDocumentPermissionResponse {}
export type NextToken = string;

export interface Node {
  CaptureTime?: Date | string;
  Id?: string;
  Owner?: NodeOwnerInfo;
  Region?: string;
  NodeType?: NodeType;
}
export type NodeAccountId = string;

export interface NodeAggregator {
  AggregatorType: NodeAggregatorType;
  TypeName: NodeTypeName;
  AttributeName: NodeAttributeName;
  Aggregators?: Array<NodeAggregator>;
}
export type NodeAggregatorList = Array<NodeAggregator>;
export type NodeAggregatorType = "COUNT";
export type NodeAttributeName =
  | "AGENT_VERSION"
  | "PLATFORM_NAME"
  | "PLATFORM_TYPE"
  | "PLATFORM_VERSION"
  | "REGION"
  | "RESOURCE_TYPE";
export type NodeCaptureTime = Date | string;

export interface NodeFilter {
  Key: NodeFilterKey;
  Values: Array<string>;
  Type?: NodeFilterOperatorType;
}
export type NodeFilterKey =
  | "AGENT_TYPE"
  | "AGENT_VERSION"
  | "COMPUTER_NAME"
  | "INSTANCE_ID"
  | "INSTANCE_STATUS"
  | "IP_ADDRESS"
  | "MANAGED_STATUS"
  | "PLATFORM_NAME"
  | "PLATFORM_TYPE"
  | "PLATFORM_VERSION"
  | "RESOURCE_TYPE"
  | "ORGANIZATIONAL_UNIT_ID"
  | "ORGANIZATIONAL_UNIT_PATH"
  | "REGION"
  | "ACCOUNT_ID";
export type NodeFilterList = Array<NodeFilter>;
export type NodeFilterOperatorType = "EQUAL" | "NOT_EQUAL" | "BEGIN_WITH";
export type NodeFilterValue = string;

export type NodeFilterValueList = Array<string>;
export type NodeId = string;

export type NodeList = Array<Node>;
export type NodeOrganizationalUnitId = string;

export type NodeOrganizationalUnitPath = string;

export interface NodeOwnerInfo {
  AccountId?: string;
  OrganizationalUnitId?: string;
  OrganizationalUnitPath?: string;
}
export type NodeRegion = string;

export type NodeSummary = Record<string, string>;
export type NodeSummaryList = Array<Record<string, string>>;
interface _NodeType {
  Instance?: InstanceInfo;
}

export type NodeType = _NodeType & { Instance: InstanceInfo };
export type NodeTypeName = "INSTANCE";
export interface NonCompliantSummary {
  NonCompliantCount?: number;
  SeveritySummary?: SeveritySummary;
}
export type NormalStringMap = Record<string, string>;
export type NotificationArn = string;

export interface NotificationConfig {
  NotificationArn?: string;
  NotificationEvents?: Array<NotificationEvent>;
  NotificationType?: NotificationType;
}
export type NotificationEvent =
  | "ALL"
  | "IN_PROGRESS"
  | "SUCCESS"
  | "TIMED_OUT"
  | "CANCELLED"
  | "FAILED";
export type NotificationEventList = Array<NotificationEvent>;
export type NotificationType = "Command" | "Invocation";
export type OperatingSystem =
  | "Windows"
  | "AmazonLinux"
  | "AmazonLinux2"
  | "AmazonLinux2022"
  | "Ubuntu"
  | "RedhatEnterpriseLinux"
  | "Suse"
  | "CentOS"
  | "OracleLinux"
  | "Debian"
  | "MacOS"
  | "Raspbian"
  | "Rocky_Linux"
  | "AlmaLinux"
  | "AmazonLinux2023";
export interface OpsAggregator {
  AggregatorType?: string;
  TypeName?: string;
  AttributeName?: string;
  Values?: Record<string, string>;
  Filters?: Array<OpsFilter>;
  Aggregators?: Array<OpsAggregator>;
}
export type OpsAggregatorList = Array<OpsAggregator>;
export type OpsAggregatorType = string;

export type OpsAggregatorValue = string;

export type OpsAggregatorValueKey = string;

export type OpsAggregatorValueMap = Record<string, string>;
export type OpsDataAttributeName = string;

export type OpsDataTypeName = string;

export interface OpsEntity {
  Id?: string;
  Data?: Record<string, OpsEntityItem>;
}
export type OpsEntityId = string;

export interface OpsEntityItem {
  CaptureTime?: string;
  Content?: Array<Record<string, string>>;
}
export type OpsEntityItemCaptureTime = string;

export type OpsEntityItemEntry = Record<string, string>;
export type OpsEntityItemEntryList = Array<Record<string, string>>;
export type OpsEntityItemKey = string;

export type OpsEntityItemMap = Record<string, OpsEntityItem>;
export type OpsEntityList = Array<OpsEntity>;
export interface OpsFilter {
  Key: string;
  Values: Array<string>;
  Type?: OpsFilterOperatorType;
}
export type OpsFilterKey = string;

export type OpsFilterList = Array<OpsFilter>;
export type OpsFilterOperatorType =
  | "EQUAL"
  | "NOT_EQUAL"
  | "BEGIN_WITH"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "EXISTS";
export type OpsFilterValue = string;

export type OpsFilterValueList = Array<string>;
export interface OpsItem {
  CreatedBy?: string;
  OpsItemType?: string;
  CreatedTime?: Date | string;
  Description?: string;
  LastModifiedBy?: string;
  LastModifiedTime?: Date | string;
  Notifications?: Array<OpsItemNotification>;
  Priority?: number;
  RelatedOpsItems?: Array<RelatedOpsItem>;
  Status?: OpsItemStatus;
  OpsItemId?: string;
  Version?: string;
  Title?: string;
  Source?: string;
  OperationalData?: Record<string, OpsItemDataValue>;
  Category?: string;
  Severity?: string;
  ActualStartTime?: Date | string;
  ActualEndTime?: Date | string;
  PlannedStartTime?: Date | string;
  PlannedEndTime?: Date | string;
  OpsItemArn?: string;
}
export declare class OpsItemAccessDeniedException extends EffectData.TaggedError(
  "OpsItemAccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type OpsItemAccountId = string;

export declare class OpsItemAlreadyExistsException extends EffectData.TaggedError(
  "OpsItemAlreadyExistsException",
)<{
  readonly Message?: string;
  readonly OpsItemId?: string;
}> {}
export type OpsItemArn = string;

export type OpsItemCategory = string;

export declare class OpsItemConflictException extends EffectData.TaggedError(
  "OpsItemConflictException",
)<{
  readonly Message?: string;
}> {}
export type OpsItemDataKey = string;

export type OpsItemDataType = "SEARCHABLE_STRING" | "STRING";
export interface OpsItemDataValue {
  Value?: string;
  Type?: OpsItemDataType;
}
export type OpsItemDataValueString = string;

export type OpsItemDescription = string;

export interface OpsItemEventFilter {
  Key: OpsItemEventFilterKey;
  Values: Array<string>;
  Operator: OpsItemEventFilterOperator;
}
export type OpsItemEventFilterKey = "OPSITEM_ID";
export type OpsItemEventFilterOperator = "EQUAL";
export type OpsItemEventFilters = Array<OpsItemEventFilter>;
export type OpsItemEventFilterValue = string;

export type OpsItemEventFilterValues = Array<string>;
export type OpsItemEventMaxResults = number;

export type OpsItemEventSummaries = Array<OpsItemEventSummary>;
export interface OpsItemEventSummary {
  OpsItemId?: string;
  EventId?: string;
  Source?: string;
  DetailType?: string;
  Detail?: string;
  CreatedBy?: OpsItemIdentity;
  CreatedTime?: Date | string;
}
export interface OpsItemFilter {
  Key: OpsItemFilterKey;
  Values: Array<string>;
  Operator: OpsItemFilterOperator;
}
export type OpsItemFilterKey =
  | "STATUS"
  | "CREATED_BY"
  | "SOURCE"
  | "PRIORITY"
  | "TITLE"
  | "OPSITEM_ID"
  | "CREATED_TIME"
  | "LAST_MODIFIED_TIME"
  | "ACTUAL_START_TIME"
  | "ACTUAL_END_TIME"
  | "PLANNED_START_TIME"
  | "PLANNED_END_TIME"
  | "OPERATIONAL_DATA"
  | "OPERATIONAL_DATA_KEY"
  | "OPERATIONAL_DATA_VALUE"
  | "RESOURCE_ID"
  | "AUTOMATION_ID"
  | "CATEGORY"
  | "SEVERITY"
  | "OPSITEM_TYPE"
  | "ACCESS_REQUEST_REQUESTER_ARN"
  | "ACCESS_REQUEST_REQUESTER_ID"
  | "ACCESS_REQUEST_APPROVER_ARN"
  | "ACCESS_REQUEST_APPROVER_ID"
  | "ACCESS_REQUEST_SOURCE_ACCOUNT_ID"
  | "ACCESS_REQUEST_SOURCE_OPS_ITEM_ID"
  | "ACCESS_REQUEST_SOURCE_REGION"
  | "ACCESS_REQUEST_IS_REPLICA"
  | "ACCESS_REQUEST_TARGET_RESOURCE_ID"
  | "CHANGE_REQUEST_REQUESTER_ARN"
  | "CHANGE_REQUEST_REQUESTER_NAME"
  | "CHANGE_REQUEST_APPROVER_ARN"
  | "CHANGE_REQUEST_APPROVER_NAME"
  | "CHANGE_REQUEST_TEMPLATE"
  | "CHANGE_REQUEST_TARGETS_RESOURCE_GROUP"
  | "INSIGHT_TYPE"
  | "ACCOUNT_ID";
export type OpsItemFilterOperator =
  | "EQUAL"
  | "CONTAINS"
  | "GREATER_THAN"
  | "LESS_THAN";
export type OpsItemFilters = Array<OpsItemFilter>;
export type OpsItemFilterValue = string;

export type OpsItemFilterValues = Array<string>;
export type OpsItemId = string;

export interface OpsItemIdentity {
  Arn?: string;
}
export declare class OpsItemInvalidParameterException extends EffectData.TaggedError(
  "OpsItemInvalidParameterException",
)<{
  readonly ParameterNames?: Array<string>;
  readonly Message?: string;
}> {}
export declare class OpsItemLimitExceededException extends EffectData.TaggedError(
  "OpsItemLimitExceededException",
)<{
  readonly ResourceTypes?: Array<string>;
  readonly Limit?: number;
  readonly LimitType?: string;
  readonly Message?: string;
}> {}
export type OpsItemMaxResults = number;

export declare class OpsItemNotFoundException extends EffectData.TaggedError(
  "OpsItemNotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface OpsItemNotification {
  Arn?: string;
}
export type OpsItemNotifications = Array<OpsItemNotification>;
export type OpsItemOperationalData = Record<string, OpsItemDataValue>;
export type OpsItemOpsDataKeysList = Array<string>;
export type OpsItemParameterNamesList = Array<string>;
export type OpsItemPriority = number;

export declare class OpsItemRelatedItemAlreadyExistsException extends EffectData.TaggedError(
  "OpsItemRelatedItemAlreadyExistsException",
)<{
  readonly Message?: string;
  readonly ResourceUri?: string;
  readonly OpsItemId?: string;
}> {}
export type OpsItemRelatedItemAssociationId = string;

export declare class OpsItemRelatedItemAssociationNotFoundException extends EffectData.TaggedError(
  "OpsItemRelatedItemAssociationNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type OpsItemRelatedItemAssociationResourceType = string;

export type OpsItemRelatedItemAssociationResourceUri = string;

export type OpsItemRelatedItemAssociationType = string;

export interface OpsItemRelatedItemsFilter {
  Key: OpsItemRelatedItemsFilterKey;
  Values: Array<string>;
  Operator: OpsItemRelatedItemsFilterOperator;
}
export type OpsItemRelatedItemsFilterKey =
  | "RESOURCE_TYPE"
  | "ASSOCIATION_ID"
  | "RESOURCE_URI";
export type OpsItemRelatedItemsFilterOperator = "EQUAL";
export type OpsItemRelatedItemsFilters = Array<OpsItemRelatedItemsFilter>;
export type OpsItemRelatedItemsFilterValue = string;

export type OpsItemRelatedItemsFilterValues = Array<string>;
export type OpsItemRelatedItemsMaxResults = number;

export type OpsItemRelatedItemSummaries = Array<OpsItemRelatedItemSummary>;
export interface OpsItemRelatedItemSummary {
  OpsItemId?: string;
  AssociationId?: string;
  ResourceType?: string;
  AssociationType?: string;
  ResourceUri?: string;
  CreatedBy?: OpsItemIdentity;
  CreatedTime?: Date | string;
  LastModifiedBy?: OpsItemIdentity;
  LastModifiedTime?: Date | string;
}
export type OpsItemSeverity = string;

export type OpsItemSource = string;

export type OpsItemStatus =
  | "OPEN"
  | "IN_PROGRESS"
  | "RESOLVED"
  | "PENDING"
  | "TIMED_OUT"
  | "CANCELLING"
  | "CANCELLED"
  | "FAILED"
  | "COMPLETED_WITH_SUCCESS"
  | "COMPLETED_WITH_FAILURE"
  | "SCHEDULED"
  | "RUNBOOK_IN_PROGRESS"
  | "PENDING_CHANGE_CALENDAR_OVERRIDE"
  | "CHANGE_CALENDAR_OVERRIDE_APPROVED"
  | "CHANGE_CALENDAR_OVERRIDE_REJECTED"
  | "PENDING_APPROVAL"
  | "APPROVED"
  | "REVOKED"
  | "REJECTED"
  | "CLOSED";
export type OpsItemSummaries = Array<OpsItemSummary>;
export interface OpsItemSummary {
  CreatedBy?: string;
  CreatedTime?: Date | string;
  LastModifiedBy?: string;
  LastModifiedTime?: Date | string;
  Priority?: number;
  Source?: string;
  Status?: OpsItemStatus;
  OpsItemId?: string;
  Title?: string;
  OperationalData?: Record<string, OpsItemDataValue>;
  Category?: string;
  Severity?: string;
  OpsItemType?: string;
  ActualStartTime?: Date | string;
  ActualEndTime?: Date | string;
  PlannedStartTime?: Date | string;
  PlannedEndTime?: Date | string;
}
export type OpsItemTitle = string;

export type OpsItemType = string;

export interface OpsMetadata {
  ResourceId?: string;
  OpsMetadataArn?: string;
  LastModifiedDate?: Date | string;
  LastModifiedUser?: string;
  CreationDate?: Date | string;
}
export declare class OpsMetadataAlreadyExistsException extends EffectData.TaggedError(
  "OpsMetadataAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type OpsMetadataArn = string;

export interface OpsMetadataFilter {
  Key: string;
  Values: Array<string>;
}
export type OpsMetadataFilterKey = string;

export type OpsMetadataFilterList = Array<OpsMetadataFilter>;
export type OpsMetadataFilterValue = string;

export type OpsMetadataFilterValueList = Array<string>;
export declare class OpsMetadataInvalidArgumentException extends EffectData.TaggedError(
  "OpsMetadataInvalidArgumentException",
)<{
  readonly message?: string;
}> {}
export declare class OpsMetadataKeyLimitExceededException extends EffectData.TaggedError(
  "OpsMetadataKeyLimitExceededException",
)<{
  readonly message?: string;
}> {}
export declare class OpsMetadataLimitExceededException extends EffectData.TaggedError(
  "OpsMetadataLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type OpsMetadataList = Array<OpsMetadata>;
export declare class OpsMetadataNotFoundException extends EffectData.TaggedError(
  "OpsMetadataNotFoundException",
)<{
  readonly message?: string;
}> {}
export type OpsMetadataResourceId = string;

export declare class OpsMetadataTooManyUpdatesException extends EffectData.TaggedError(
  "OpsMetadataTooManyUpdatesException",
)<{
  readonly message?: string;
}> {}
export interface OpsResultAttribute {
  TypeName: string;
}
export type OpsResultAttributeList = Array<OpsResultAttribute>;
export interface OutputSource {
  OutputSourceId?: string;
  OutputSourceType?: string;
}
export type OutputSourceId = string;

export type OutputSourceType = string;

export type OwnerInformation = string;

export interface Parameter {
  Name?: string;
  Type?: ParameterType;
  Value?: string;
  Version?: number;
  Selector?: string;
  SourceResult?: string;
  LastModifiedDate?: Date | string;
  ARN?: string;
  DataType?: string;
}
export declare class ParameterAlreadyExists extends EffectData.TaggedError(
  "ParameterAlreadyExists",
)<{
  readonly message?: string;
}> {}
export type ParameterDataType = string;

export type ParameterDescription = string;

export interface ParameterHistory {
  Name?: string;
  Type?: ParameterType;
  KeyId?: string;
  LastModifiedDate?: Date | string;
  LastModifiedUser?: string;
  Description?: string;
  Value?: string;
  AllowedPattern?: string;
  Version?: number;
  Labels?: Array<string>;
  Tier?: ParameterTier;
  Policies?: Array<ParameterInlinePolicy>;
  DataType?: string;
}
export type ParameterHistoryList = Array<ParameterHistory>;
export interface ParameterInlinePolicy {
  PolicyText?: string;
  PolicyType?: string;
  PolicyStatus?: string;
}
export type ParameterKeyId = string;

export type ParameterLabel = string;

export type ParameterLabelList = Array<string>;
export declare class ParameterLimitExceeded extends EffectData.TaggedError(
  "ParameterLimitExceeded",
)<{
  readonly message?: string;
}> {}
export type ParameterList = Array<Parameter>;
export declare class ParameterMaxVersionLimitExceeded extends EffectData.TaggedError(
  "ParameterMaxVersionLimitExceeded",
)<{
  readonly message?: string;
}> {}
export interface ParameterMetadata {
  Name?: string;
  ARN?: string;
  Type?: ParameterType;
  KeyId?: string;
  LastModifiedDate?: Date | string;
  LastModifiedUser?: string;
  Description?: string;
  AllowedPattern?: string;
  Version?: number;
  Tier?: ParameterTier;
  Policies?: Array<ParameterInlinePolicy>;
  DataType?: string;
}
export type ParameterMetadataList = Array<ParameterMetadata>;
export type ParameterName = string;

export type ParameterNameList = Array<string>;
export declare class ParameterNotFound extends EffectData.TaggedError(
  "ParameterNotFound",
)<{
  readonly message?: string;
}> {}
export declare class ParameterPatternMismatchException extends EffectData.TaggedError(
  "ParameterPatternMismatchException",
)<{
  readonly message?: string;
}> {}
export type ParameterPolicies = string;

export type ParameterPolicyList = Array<ParameterInlinePolicy>;
export type Parameters = Record<string, Array<string>>;
export interface ParametersFilter {
  Key: ParametersFilterKey;
  Values: Array<string>;
}
export type ParametersFilterKey = "NAME" | "TYPE" | "KEY_ID";
export type ParametersFilterList = Array<ParametersFilter>;
export type ParametersFilterValue = string;

export type ParametersFilterValueList = Array<string>;
export interface ParameterStringFilter {
  Key: string;
  Option?: string;
  Values?: Array<string>;
}
export type ParameterStringFilterKey = string;

export type ParameterStringFilterList = Array<ParameterStringFilter>;
export type ParameterStringFilterValue = string;

export type ParameterStringFilterValueList = Array<string>;
export type ParameterStringQueryOption = string;

export type ParameterTier = "STANDARD" | "ADVANCED" | "INTELLIGENT_TIERING";
export type ParameterType = "STRING" | "STRING_LIST" | "SECURE_STRING";
export type ParameterValue = string;

export type ParameterValueList = Array<string>;
export declare class ParameterVersionLabelLimitExceeded extends EffectData.TaggedError(
  "ParameterVersionLabelLimitExceeded",
)<{
  readonly message?: string;
}> {}
export declare class ParameterVersionNotFound extends EffectData.TaggedError(
  "ParameterVersionNotFound",
)<{
  readonly message?: string;
}> {}
export interface ParentStepDetails {
  StepExecutionId?: string;
  StepName?: string;
  Action?: string;
  Iteration?: number;
  IteratorValue?: string;
}
export interface Patch {
  Id?: string;
  ReleaseDate?: Date | string;
  Title?: string;
  Description?: string;
  ContentUrl?: string;
  Vendor?: string;
  ProductFamily?: string;
  Product?: string;
  Classification?: string;
  MsrcSeverity?: string;
  KbNumber?: string;
  MsrcNumber?: string;
  Language?: string;
  AdvisoryIds?: Array<string>;
  BugzillaIds?: Array<string>;
  CVEIds?: Array<string>;
  Name?: string;
  Epoch?: number;
  Version?: string;
  Release?: string;
  Arch?: string;
  Severity?: string;
  Repository?: string;
}
export type PatchAction = "AllowAsDependency" | "Block";
export type PatchAdvisoryId = string;

export type PatchAdvisoryIdList = Array<string>;
export type PatchArch = string;

export type PatchAvailableSecurityUpdateCount = number;

export interface PatchBaselineIdentity {
  BaselineId?: string;
  BaselineName?: string;
  OperatingSystem?: OperatingSystem;
  BaselineDescription?: string;
  DefaultBaseline?: boolean;
}
export type PatchBaselineIdentityList = Array<PatchBaselineIdentity>;
export type PatchBaselineMaxResults = number;

export type PatchBugzillaId = string;

export type PatchBugzillaIdList = Array<string>;
export type PatchClassification = string;

export interface PatchComplianceData {
  Title: string;
  KBId: string;
  Classification: string;
  Severity: string;
  State: PatchComplianceDataState;
  InstalledTime: Date | string;
  CVEIds?: string;
}
export type PatchComplianceDataList = Array<PatchComplianceData>;
export type PatchComplianceDataState =
  | "Installed"
  | "InstalledOther"
  | "InstalledPendingReboot"
  | "InstalledRejected"
  | "Missing"
  | "NotApplicable"
  | "Failed"
  | "AvailableSecurityUpdate";
export type PatchComplianceLevel =
  | "Critical"
  | "High"
  | "Medium"
  | "Low"
  | "Informational"
  | "Unspecified";
export type PatchComplianceMaxResults = number;

export type PatchComplianceStatus = "Compliant" | "NonCompliant";
export type PatchContentUrl = string;

export type PatchCriticalNonCompliantCount = number;

export type PatchCVEId = string;

export type PatchCVEIdList = Array<string>;
export type PatchCVEIds = string;

export type PatchDeploymentStatus =
  | "Approved"
  | "PendingApproval"
  | "ExplicitApproved"
  | "ExplicitRejected";
export type PatchDescription = string;

export type PatchEpoch = number;

export type PatchFailedCount = number;

export interface PatchFilter {
  Key: PatchFilterKey;
  Values: Array<string>;
}
export interface PatchFilterGroup {
  PatchFilters: Array<PatchFilter>;
}
export type PatchFilterKey =
  | "Arch"
  | "AdvisoryId"
  | "BugzillaId"
  | "PatchSet"
  | "Product"
  | "ProductFamily"
  | "Classification"
  | "CVEId"
  | "Epoch"
  | "MsrcSeverity"
  | "Name"
  | "PatchId"
  | "Section"
  | "Priority"
  | "Repository"
  | "Release"
  | "Severity"
  | "Security"
  | "Version";
export type PatchFilterList = Array<PatchFilter>;
export type PatchFilterValue = string;

export type PatchFilterValueList = Array<string>;
export type PatchGroup = string;

export type PatchGroupList = Array<string>;
export interface PatchGroupPatchBaselineMapping {
  PatchGroup?: string;
  BaselineIdentity?: PatchBaselineIdentity;
}
export type PatchGroupPatchBaselineMappingList =
  Array<PatchGroupPatchBaselineMapping>;
export type PatchId = string;

export type PatchIdList = Array<string>;
export type PatchInstalledCount = number;

export type PatchInstalledOtherCount = number;

export type PatchInstalledPendingRebootCount = number;

export type PatchInstalledRejectedCount = number;

export type PatchKbNumber = string;

export type PatchLanguage = string;

export type PatchList = Array<Patch>;
export type PatchMissingCount = number;

export type PatchMsrcNumber = string;

export type PatchMsrcSeverity = string;

export type PatchName = string;

export type PatchNotApplicableCount = number;

export type PatchOperationType = "SCAN" | "INSTALL";
export interface PatchOrchestratorFilter {
  Key?: string;
  Values?: Array<string>;
}
export type PatchOrchestratorFilterKey = string;

export type PatchOrchestratorFilterList = Array<PatchOrchestratorFilter>;
export type PatchOrchestratorFilterValue = string;

export type PatchOrchestratorFilterValues = Array<string>;
export type PatchOtherNonCompliantCount = number;

export type PatchProduct = string;

export type PatchProductFamily = string;

export type PatchPropertiesList = Array<Record<string, string>>;
export type PatchProperty =
  | "Product"
  | "PatchProductFamily"
  | "PatchClassification"
  | "PatchMsrcSeverity"
  | "PatchPriority"
  | "PatchSeverity";
export type PatchPropertyEntry = Record<string, string>;
export type PatchRelease = string;

export type PatchRepository = string;

export interface PatchRule {
  PatchFilterGroup: PatchFilterGroup;
  ComplianceLevel?: PatchComplianceLevel;
  ApproveAfterDays?: number;
  ApproveUntilDate?: string;
  EnableNonSecurity?: boolean;
}
export interface PatchRuleGroup {
  PatchRules: Array<PatchRule>;
}
export type PatchRuleList = Array<PatchRule>;
export type PatchSecurityNonCompliantCount = number;

export type PatchSet = "Os" | "Application";
export type PatchSeverity = string;

export interface PatchSource {
  Name: string;
  Products: Array<string>;
  Configuration: string;
}
export type PatchSourceConfiguration = string;

export type PatchSourceList = Array<PatchSource>;
export type PatchSourceName = string;

export type PatchSourceProduct = string;

export type PatchSourceProductList = Array<string>;
export interface PatchStatus {
  DeploymentStatus?: PatchDeploymentStatus;
  ComplianceLevel?: PatchComplianceLevel;
  ApprovalDate?: Date | string;
}
export type PatchStringDateTime = string;

export type PatchTitle = string;

export type PatchUnreportedNotApplicableCount = number;

export type PatchVendor = string;

export type PatchVersion = string;

export type PingStatus = "ONLINE" | "CONNECTION_LOST" | "INACTIVE";
export type PlatformName = string;

export type PlatformType = "WINDOWS" | "LINUX" | "MACOS";
export type PlatformTypeList = Array<PlatformType>;
export type PlatformVersion = string;

export declare class PoliciesLimitExceededException extends EffectData.TaggedError(
  "PoliciesLimitExceededException",
)<{
  readonly message?: string;
}> {}
export type Policy = string;

export type PolicyHash = string;

export type PolicyId = string;

export type Product = string;

export interface ProgressCounters {
  TotalSteps?: number;
  SuccessSteps?: number;
  FailedSteps?: number;
  CancelledSteps?: number;
  TimedOutSteps?: number;
}
export type PSParameterName = string;

export type PSParameterSelector = string;

export type PSParameterValue = string;

export type PSParameterVersion = number;

export interface PutComplianceItemsRequest {
  ResourceId: string;
  ResourceType: string;
  ComplianceType: string;
  ExecutionSummary: ComplianceExecutionSummary;
  Items: Array<ComplianceItemEntry>;
  ItemContentHash?: string;
  UploadType?: ComplianceUploadType;
}
export interface PutComplianceItemsResult {}
export type PutInventoryMessage = string;

export interface PutInventoryRequest {
  InstanceId: string;
  Items: Array<InventoryItem>;
}
export interface PutInventoryResult {
  Message?: string;
}
export interface PutParameterRequest {
  Name: string;
  Description?: string;
  Value: string;
  Type?: ParameterType;
  KeyId?: string;
  Overwrite?: boolean;
  AllowedPattern?: string;
  Tags?: Array<Tag>;
  Tier?: ParameterTier;
  Policies?: string;
  DataType?: string;
}
export interface PutParameterResult {
  Version?: number;
  Tier?: ParameterTier;
}
export interface PutResourcePolicyRequest {
  ResourceArn: string;
  Policy: string;
  PolicyId?: string;
  PolicyHash?: string;
}
export interface PutResourcePolicyResponse {
  PolicyId?: string;
  PolicyHash?: string;
}
export type RebootOption = "REBOOT_IF_NEEDED" | "NO_REBOOT";
export type Region = string;

export type RegionList = Array<string>;
export type Regions = Array<string>;
export interface RegisterDefaultPatchBaselineRequest {
  BaselineId: string;
}
export interface RegisterDefaultPatchBaselineResult {
  BaselineId?: string;
}
export interface RegisterPatchBaselineForPatchGroupRequest {
  BaselineId: string;
  PatchGroup: string;
}
export interface RegisterPatchBaselineForPatchGroupResult {
  BaselineId?: string;
  PatchGroup?: string;
}
export interface RegisterTargetWithMaintenanceWindowRequest {
  WindowId: string;
  ResourceType: MaintenanceWindowResourceType;
  Targets: Array<Target>;
  OwnerInformation?: string;
  Name?: string;
  Description?: string;
  ClientToken?: string;
}
export interface RegisterTargetWithMaintenanceWindowResult {
  WindowTargetId?: string;
}
export interface RegisterTaskWithMaintenanceWindowRequest {
  WindowId: string;
  Targets?: Array<Target>;
  TaskArn: string;
  ServiceRoleArn?: string;
  TaskType: MaintenanceWindowTaskType;
  TaskParameters?: Record<
    string,
    MaintenanceWindowTaskParameterValueExpression
  >;
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
  Priority?: number;
  MaxConcurrency?: string;
  MaxErrors?: string;
  LoggingInfo?: LoggingInfo;
  Name?: string;
  Description?: string;
  ClientToken?: string;
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior;
  AlarmConfiguration?: AlarmConfiguration;
}
export interface RegisterTaskWithMaintenanceWindowResult {
  WindowTaskId?: string;
}
export type RegistrationLimit = number;

export interface RegistrationMetadataItem {
  Key: string;
  Value: string;
}
export type RegistrationMetadataKey = string;

export type RegistrationMetadataList = Array<RegistrationMetadataItem>;
export type RegistrationMetadataValue = string;

export type RegistrationsCount = number;

export interface RelatedOpsItem {
  OpsItemId: string;
}
export type RelatedOpsItems = Array<RelatedOpsItem>;
export type RemainingCount = number;

export interface RemoveTagsFromResourceRequest {
  ResourceType: ResourceTypeForTagging;
  ResourceId: string;
  TagKeys: Array<string>;
}
export interface RemoveTagsFromResourceResult {}
export type RequireType = string;

export interface ResetServiceSettingRequest {
  SettingId: string;
}
export interface ResetServiceSettingResult {
  ServiceSetting?: ServiceSetting;
}
export interface ResolvedTargets {
  ParameterValues?: Array<string>;
  Truncated?: boolean;
}
export type ResourceArnString = string;

export interface ResourceComplianceSummaryItem {
  ComplianceType?: string;
  ResourceType?: string;
  ResourceId?: string;
  Status?: ComplianceStatus;
  OverallSeverity?: ComplianceSeverity;
  ExecutionSummary?: ComplianceExecutionSummary;
  CompliantSummary?: CompliantSummary;
  NonCompliantSummary?: NonCompliantSummary;
}
export type ResourceComplianceSummaryItemList =
  Array<ResourceComplianceSummaryItem>;
export type ResourceCount = number;

export type ResourceCountByStatus = string;

export declare class ResourceDataSyncAlreadyExistsException extends EffectData.TaggedError(
  "ResourceDataSyncAlreadyExistsException",
)<{
  readonly SyncName?: string;
}> {}
export type ResourceDataSyncAWSKMSKeyARN = string;

export interface ResourceDataSyncAwsOrganizationsSource {
  OrganizationSourceType: string;
  OrganizationalUnits?: Array<ResourceDataSyncOrganizationalUnit>;
}
export declare class ResourceDataSyncConflictException extends EffectData.TaggedError(
  "ResourceDataSyncConflictException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceDataSyncCountExceededException extends EffectData.TaggedError(
  "ResourceDataSyncCountExceededException",
)<{
  readonly Message?: string;
}> {}
export type ResourceDataSyncCreatedTime = Date | string;

export interface ResourceDataSyncDestinationDataSharing {
  DestinationDataSharingType?: string;
}
export type ResourceDataSyncDestinationDataSharingType = string;

export type ResourceDataSyncEnableAllOpsDataSources = boolean;

export type ResourceDataSyncIncludeFutureRegions = boolean;

export declare class ResourceDataSyncInvalidConfigurationException extends EffectData.TaggedError(
  "ResourceDataSyncInvalidConfigurationException",
)<{
  readonly Message?: string;
}> {}
export interface ResourceDataSyncItem {
  SyncName?: string;
  SyncType?: string;
  SyncSource?: ResourceDataSyncSourceWithState;
  S3Destination?: ResourceDataSyncS3Destination;
  LastSyncTime?: Date | string;
  LastSuccessfulSyncTime?: Date | string;
  SyncLastModifiedTime?: Date | string;
  LastStatus?: LastResourceDataSyncStatus;
  SyncCreatedTime?: Date | string;
  LastSyncStatusMessage?: string;
}
export type ResourceDataSyncItemList = Array<ResourceDataSyncItem>;
export type ResourceDataSyncLastModifiedTime = Date | string;

export type ResourceDataSyncName = string;

export declare class ResourceDataSyncNotFoundException extends EffectData.TaggedError(
  "ResourceDataSyncNotFoundException",
)<{
  readonly SyncName?: string;
  readonly SyncType?: string;
  readonly Message?: string;
}> {}
export interface ResourceDataSyncOrganizationalUnit {
  OrganizationalUnitId?: string;
}
export type ResourceDataSyncOrganizationalUnitId = string;

export type ResourceDataSyncOrganizationalUnitList =
  Array<ResourceDataSyncOrganizationalUnit>;
export type ResourceDataSyncOrganizationSourceType = string;

export type ResourceDataSyncS3BucketName = string;

export interface ResourceDataSyncS3Destination {
  BucketName: string;
  Prefix?: string;
  SyncFormat: ResourceDataSyncS3Format;
  Region: string;
  AWSKMSKeyARN?: string;
  DestinationDataSharing?: ResourceDataSyncDestinationDataSharing;
}
export type ResourceDataSyncS3Format = "JSON_SERDE";
export type ResourceDataSyncS3Prefix = string;

export type ResourceDataSyncS3Region = string;

export interface ResourceDataSyncSource {
  SourceType: string;
  AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;
  SourceRegions: Array<string>;
  IncludeFutureRegions?: boolean;
  EnableAllOpsDataSources?: boolean;
}
export type ResourceDataSyncSourceRegion = string;

export type ResourceDataSyncSourceRegionList = Array<string>;
export type ResourceDataSyncSourceType = string;

export interface ResourceDataSyncSourceWithState {
  SourceType?: string;
  AwsOrganizationsSource?: ResourceDataSyncAwsOrganizationsSource;
  SourceRegions?: Array<string>;
  IncludeFutureRegions?: boolean;
  State?: string;
  EnableAllOpsDataSources?: boolean;
}
export type ResourceDataSyncState = string;

export type ResourceDataSyncType = string;

export type ResourceId = string;

export declare class ResourceInUseException extends EffectData.TaggedError(
  "ResourceInUseException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceLimitExceededException extends EffectData.TaggedError(
  "ResourceLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourcePolicyConflictException extends EffectData.TaggedError(
  "ResourcePolicyConflictException",
)<{
  readonly Message?: string;
}> {}
export declare class ResourcePolicyInvalidParameterException extends EffectData.TaggedError(
  "ResourcePolicyInvalidParameterException",
)<{
  readonly ParameterNames?: Array<string>;
  readonly Message?: string;
}> {}
export declare class ResourcePolicyLimitExceededException extends EffectData.TaggedError(
  "ResourcePolicyLimitExceededException",
)<{
  readonly Limit?: number;
  readonly LimitType?: string;
  readonly Message?: string;
}> {}
export type ResourcePolicyMaxResults = number;

export declare class ResourcePolicyNotFoundException extends EffectData.TaggedError(
  "ResourcePolicyNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type ResourcePolicyParameterNamesList = Array<string>;
export type ResourceType = "MANAGED_INSTANCE" | "EC2_INSTANCE";
export type ResourceTypeForTagging =
  | "DOCUMENT"
  | "MANAGED_INSTANCE"
  | "MAINTENANCE_WINDOW"
  | "PARAMETER"
  | "PATCH_BASELINE"
  | "OPS_ITEM"
  | "OPSMETADATA"
  | "AUTOMATION"
  | "ASSOCIATION";
export type ResponseCode = number;

export interface ResultAttribute {
  TypeName: string;
}
export type ResultAttributeList = Array<ResultAttribute>;
export interface ResumeSessionRequest {
  SessionId: string;
}
export interface ResumeSessionResponse {
  SessionId?: string;
  TokenValue?: string;
  StreamUrl?: string;
}
export type Reviewer = string;

export interface ReviewInformation {
  ReviewedTime?: Date | string;
  Status?: ReviewStatus;
  Reviewer?: string;
}
export type ReviewInformationList = Array<ReviewInformation>;
export type ReviewStatus = "APPROVED" | "NOT_REVIEWED" | "PENDING" | "REJECTED";
export interface Runbook {
  DocumentName: string;
  DocumentVersion?: string;
  Parameters?: Record<string, Array<string>>;
  TargetParameterName?: string;
  Targets?: Array<Target>;
  TargetMaps?: Array<Record<string, Array<string>>>;
  MaxConcurrency?: string;
  MaxErrors?: string;
  TargetLocations?: Array<TargetLocation>;
}
export type Runbooks = Array<Runbook>;
export type S3BucketName = string;

export type S3KeyPrefix = string;

export interface S3OutputLocation {
  OutputS3Region?: string;
  OutputS3BucketName?: string;
  OutputS3KeyPrefix?: string;
}
export interface S3OutputUrl {
  OutputUrl?: string;
}
export type S3Region = string;

export interface ScheduledWindowExecution {
  WindowId?: string;
  Name?: string;
  ExecutionTime?: string;
}
export type ScheduledWindowExecutionList = Array<ScheduledWindowExecution>;
export type ScheduleExpression = string;

export type ScheduleOffset = number;

export interface SendAutomationSignalRequest {
  AutomationExecutionId: string;
  SignalType: SignalType;
  Payload?: Record<string, Array<string>>;
}
export interface SendAutomationSignalResult {}
export interface SendCommandRequest {
  InstanceIds?: Array<string>;
  Targets?: Array<Target>;
  DocumentName: string;
  DocumentVersion?: string;
  DocumentHash?: string;
  DocumentHashType?: DocumentHashType;
  TimeoutSeconds?: number;
  Comment?: string;
  Parameters?: Record<string, Array<string>>;
  OutputS3Region?: string;
  OutputS3BucketName?: string;
  OutputS3KeyPrefix?: string;
  MaxConcurrency?: string;
  MaxErrors?: string;
  ServiceRoleArn?: string;
  NotificationConfig?: NotificationConfig;
  CloudWatchOutputConfig?: CloudWatchOutputConfig;
  AlarmConfiguration?: AlarmConfiguration;
}
export interface SendCommandResult {
  Command?: Command;
}
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message: string;
  readonly ResourceId?: string;
  readonly ResourceType?: string;
  readonly QuotaCode: string;
  readonly ServiceCode: string;
}> {}
export type ServiceRole = string;

export interface ServiceSetting {
  SettingId?: string;
  SettingValue?: string;
  LastModifiedDate?: Date | string;
  LastModifiedUser?: string;
  ARN?: string;
  Status?: string;
}
export type ServiceSettingId = string;

export declare class ServiceSettingNotFound extends EffectData.TaggedError(
  "ServiceSettingNotFound",
)<{
  readonly Message?: string;
}> {}
export type ServiceSettingValue = string;

export interface Session {
  SessionId?: string;
  Target?: string;
  Status?: SessionStatus;
  StartDate?: Date | string;
  EndDate?: Date | string;
  DocumentName?: string;
  Owner?: string;
  Reason?: string;
  Details?: string;
  OutputUrl?: SessionManagerOutputUrl;
  MaxSessionDuration?: string;
  AccessType?: AccessType;
}
export type SessionDetails = string;

export interface SessionFilter {
  key: SessionFilterKey;
  value: string;
}
export type SessionFilterKey =
  | "INVOKED_AFTER"
  | "INVOKED_BEFORE"
  | "TARGET_ID"
  | "OWNER"
  | "STATUS"
  | "SESSION_ID"
  | "ACCESS_TYPE";
export type SessionFilterList = Array<SessionFilter>;
export type SessionFilterValue = string;

export type SessionId = string;

export type SessionList = Array<Session>;
export type SessionManagerCloudWatchOutputUrl = string;

export interface SessionManagerOutputUrl {
  S3OutputUrl?: string;
  CloudWatchOutputUrl?: string;
}
export type SessionManagerParameterName = string;

export type SessionManagerParameters = Record<string, Array<string>>;
export type SessionManagerParameterValue = string;

export type SessionManagerParameterValueList = Array<string>;
export type SessionManagerS3OutputUrl = string;

export type SessionMaxResults = number;

export type SessionOwner = string;

export type SessionReason = string;

export type SessionState = "ACTIVE" | "HISTORY";
export type SessionStatus =
  | "CONNECTED"
  | "CONNECTING"
  | "DISCONNECTED"
  | "TERMINATED"
  | "TERMINATING"
  | "FAILED";
export type SessionTarget = string;

export type SessionTokenType = string;

export interface SeveritySummary {
  CriticalCount?: number;
  HighCount?: number;
  MediumCount?: number;
  LowCount?: number;
  InformationalCount?: number;
  UnspecifiedCount?: number;
}
export type SharedDocumentVersion = string;

export type SignalType =
  | "APPROVE"
  | "REJECT"
  | "START_STEP"
  | "STOP_STEP"
  | "RESUME"
  | "REVOKE";
export type SnapshotDownloadUrl = string;

export type SnapshotId = string;

export type SourceId = string;

export type SourceType =
  | "AWS_EC2_INSTANCE"
  | "AWS_IOT_THING"
  | "AWS_SSM_MANAGEDINSTANCE";
export type StandardErrorContent = string;

export type StandardOutputContent = string;

export interface StartAccessRequestRequest {
  Reason: string;
  Targets: Array<Target>;
  Tags?: Array<Tag>;
}
export interface StartAccessRequestResponse {
  AccessRequestId?: string;
}
export interface StartAssociationsOnceRequest {
  AssociationIds: Array<string>;
}
export interface StartAssociationsOnceResult {}
export interface StartAutomationExecutionRequest {
  DocumentName: string;
  DocumentVersion?: string;
  Parameters?: Record<string, Array<string>>;
  ClientToken?: string;
  Mode?: ExecutionMode;
  TargetParameterName?: string;
  Targets?: Array<Target>;
  TargetMaps?: Array<Record<string, Array<string>>>;
  MaxConcurrency?: string;
  MaxErrors?: string;
  TargetLocations?: Array<TargetLocation>;
  Tags?: Array<Tag>;
  AlarmConfiguration?: AlarmConfiguration;
  TargetLocationsURL?: string;
}
export interface StartAutomationExecutionResult {
  AutomationExecutionId?: string;
}
export interface StartChangeRequestExecutionRequest {
  ScheduledTime?: Date | string;
  DocumentName: string;
  DocumentVersion?: string;
  Parameters?: Record<string, Array<string>>;
  ChangeRequestName?: string;
  ClientToken?: string;
  AutoApprove?: boolean;
  Runbooks: Array<Runbook>;
  Tags?: Array<Tag>;
  ScheduledEndTime?: Date | string;
  ChangeDetails?: string;
}
export interface StartChangeRequestExecutionResult {
  AutomationExecutionId?: string;
}
export interface StartExecutionPreviewRequest {
  DocumentName: string;
  DocumentVersion?: string;
  ExecutionInputs?: ExecutionInputs;
}
export interface StartExecutionPreviewResponse {
  ExecutionPreviewId?: string;
}
export interface StartSessionRequest {
  Target: string;
  DocumentName?: string;
  Reason?: string;
  Parameters?: Record<string, Array<string>>;
}
export interface StartSessionResponse {
  SessionId?: string;
  TokenValue?: string;
  StreamUrl?: string;
}
export type StatusAdditionalInfo = string;

export type StatusDetails = string;

export type StatusMessage = string;

export type StatusName = string;

export declare class StatusUnchanged extends EffectData.TaggedError(
  "StatusUnchanged",
)<{}> {}
export interface StepExecution {
  StepName?: string;
  Action?: string;
  TimeoutSeconds?: number;
  OnFailure?: string;
  MaxAttempts?: number;
  ExecutionStartTime?: Date | string;
  ExecutionEndTime?: Date | string;
  StepStatus?: AutomationExecutionStatus;
  ResponseCode?: string;
  Inputs?: Record<string, string>;
  Outputs?: Record<string, Array<string>>;
  Response?: string;
  FailureMessage?: string;
  FailureDetails?: FailureDetails;
  StepExecutionId?: string;
  OverriddenParameters?: Record<string, Array<string>>;
  IsEnd?: boolean;
  NextStep?: string;
  IsCritical?: boolean;
  ValidNextSteps?: Array<string>;
  Targets?: Array<Target>;
  TargetLocation?: TargetLocation;
  TriggeredAlarms?: Array<AlarmStateInformation>;
  ParentStepDetails?: ParentStepDetails;
}
export interface StepExecutionFilter {
  Key: StepExecutionFilterKey;
  Values: Array<string>;
}
export type StepExecutionFilterKey =
  | "START_TIME_BEFORE"
  | "START_TIME_AFTER"
  | "STEP_EXECUTION_STATUS"
  | "STEP_EXECUTION_ID"
  | "STEP_NAME"
  | "ACTION"
  | "PARENT_STEP_EXECUTION_ID"
  | "PARENT_STEP_ITERATION"
  | "PARENT_STEP_ITERATOR_VALUE";
export type StepExecutionFilterList = Array<StepExecutionFilter>;
export type StepExecutionFilterValue = string;

export type StepExecutionFilterValueList = Array<string>;
export type StepExecutionList = Array<StepExecution>;
export type StepPreviewMap = Record<ImpactType, number>;
export interface StopAutomationExecutionRequest {
  AutomationExecutionId: string;
  Type?: StopType;
}
export interface StopAutomationExecutionResult {}
export type StopType = "COMPLETE" | "CANCEL";
export type StreamUrl = string;

export type SsmString = string;

export type String1to256 = string;

export type StringDateTime = string;

export type StringList = Array<string>;
export declare class SubTypeCountLimitExceededException extends EffectData.TaggedError(
  "SubTypeCountLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface Tag {
  Key: string;
  Value: string;
}
export type TagKey = string;

export type TagList = Array<Tag>;
export type TagValue = string;

export interface Target {
  Key?: string;
  Values?: Array<string>;
}
export type TargetCount = number;

export declare class TargetInUseException extends EffectData.TaggedError(
  "TargetInUseException",
)<{
  readonly Message?: string;
}> {}
export type TargetKey = string;

export interface TargetLocation {
  Accounts?: Array<string>;
  Regions?: Array<string>;
  TargetLocationMaxConcurrency?: string;
  TargetLocationMaxErrors?: string;
  ExecutionRoleName?: string;
  TargetLocationAlarmConfiguration?: AlarmConfiguration;
  IncludeChildOrganizationUnits?: boolean;
  ExcludeAccounts?: Array<string>;
  Targets?: Array<Target>;
  TargetsMaxConcurrency?: string;
  TargetsMaxErrors?: string;
}
export type TargetLocations = Array<TargetLocation>;
export type TargetLocationsURL = string;

export type TargetMap = Record<string, Array<string>>;
export type TargetMapKey = string;

export type TargetMaps = Array<Record<string, Array<string>>>;
export type TargetMapValue = string;

export type TargetMapValueList = Array<string>;
export declare class TargetNotConnected extends EffectData.TaggedError(
  "TargetNotConnected",
)<{
  readonly Message?: string;
}> {}
export type TargetParameterList = Array<string>;
export interface TargetPreview {
  Count?: number;
  TargetType?: string;
}
export type TargetPreviewList = Array<TargetPreview>;
export type Targets = Array<Target>;
export type TargetType = string;

export type TargetValue = string;

export type TargetValues = Array<string>;
export interface TerminateSessionRequest {
  SessionId: string;
}
export interface TerminateSessionResponse {
  SessionId?: string;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly Message: string;
  readonly QuotaCode?: string;
  readonly ServiceCode?: string;
}> {}
export type TimeoutSeconds = number;

export type TokenValue = string;

export declare class TooManyTagsError extends EffectData.TaggedError(
  "TooManyTagsError",
)<{}> {}
export declare class TooManyUpdates extends EffectData.TaggedError(
  "TooManyUpdates",
)<{
  readonly Message?: string;
}> {}
export type TotalCount = number;

export declare class TotalSizeLimitExceededException extends EffectData.TaggedError(
  "TotalSizeLimitExceededException",
)<{
  readonly Message?: string;
}> {}
export interface UnlabelParameterVersionRequest {
  Name: string;
  ParameterVersion: number;
  Labels: Array<string>;
}
export interface UnlabelParameterVersionResult {
  RemovedLabels?: Array<string>;
  InvalidLabels?: Array<string>;
}
export declare class UnsupportedCalendarException extends EffectData.TaggedError(
  "UnsupportedCalendarException",
)<{
  readonly Message?: string;
}> {}
export declare class UnsupportedFeatureRequiredException extends EffectData.TaggedError(
  "UnsupportedFeatureRequiredException",
)<{
  readonly Message?: string;
}> {}
export declare class UnsupportedInventoryItemContextException extends EffectData.TaggedError(
  "UnsupportedInventoryItemContextException",
)<{
  readonly TypeName?: string;
  readonly Message?: string;
}> {}
export declare class UnsupportedInventorySchemaVersionException extends EffectData.TaggedError(
  "UnsupportedInventorySchemaVersionException",
)<{
  readonly Message?: string;
}> {}
export declare class UnsupportedOperatingSystem extends EffectData.TaggedError(
  "UnsupportedOperatingSystem",
)<{
  readonly Message?: string;
}> {}
export declare class UnsupportedOperationException extends EffectData.TaggedError(
  "UnsupportedOperationException",
)<{
  readonly Message?: string;
}> {}
export declare class UnsupportedParameterType extends EffectData.TaggedError(
  "UnsupportedParameterType",
)<{
  readonly message?: string;
}> {}
export declare class UnsupportedPlatformType extends EffectData.TaggedError(
  "UnsupportedPlatformType",
)<{
  readonly Message?: string;
}> {}
export interface UpdateAssociationRequest {
  AssociationId: string;
  Parameters?: Record<string, Array<string>>;
  DocumentVersion?: string;
  ScheduleExpression?: string;
  OutputLocation?: InstanceAssociationOutputLocation;
  Name?: string;
  Targets?: Array<Target>;
  AssociationName?: string;
  AssociationVersion?: string;
  AutomationTargetParameterName?: string;
  MaxErrors?: string;
  MaxConcurrency?: string;
  ComplianceSeverity?: AssociationComplianceSeverity;
  SyncCompliance?: AssociationSyncCompliance;
  ApplyOnlyAtCronInterval?: boolean;
  CalendarNames?: Array<string>;
  TargetLocations?: Array<TargetLocation>;
  ScheduleOffset?: number;
  Duration?: number;
  TargetMaps?: Array<Record<string, Array<string>>>;
  AlarmConfiguration?: AlarmConfiguration;
}
export interface UpdateAssociationResult {
  AssociationDescription?: AssociationDescription;
}
export interface UpdateAssociationStatusRequest {
  Name: string;
  InstanceId: string;
  AssociationStatus: AssociationStatus;
}
export interface UpdateAssociationStatusResult {
  AssociationDescription?: AssociationDescription;
}
export interface UpdateDocumentDefaultVersionRequest {
  Name: string;
  DocumentVersion: string;
}
export interface UpdateDocumentDefaultVersionResult {
  Description?: DocumentDefaultVersionDescription;
}
export interface UpdateDocumentMetadataRequest {
  Name: string;
  DocumentVersion?: string;
  DocumentReviews: DocumentReviews;
}
export interface UpdateDocumentMetadataResponse {}
export interface UpdateDocumentRequest {
  Content: string;
  Attachments?: Array<AttachmentsSource>;
  Name: string;
  DisplayName?: string;
  VersionName?: string;
  DocumentVersion?: string;
  DocumentFormat?: DocumentFormat;
  TargetType?: string;
}
export interface UpdateDocumentResult {
  DocumentDescription?: DocumentDescription;
}
export interface UpdateMaintenanceWindowRequest {
  WindowId: string;
  Name?: string;
  Description?: string;
  StartDate?: string;
  EndDate?: string;
  Schedule?: string;
  ScheduleTimezone?: string;
  ScheduleOffset?: number;
  Duration?: number;
  Cutoff?: number;
  AllowUnassociatedTargets?: boolean;
  Enabled?: boolean;
  Replace?: boolean;
}
export interface UpdateMaintenanceWindowResult {
  WindowId?: string;
  Name?: string;
  Description?: string;
  StartDate?: string;
  EndDate?: string;
  Schedule?: string;
  ScheduleTimezone?: string;
  ScheduleOffset?: number;
  Duration?: number;
  Cutoff?: number;
  AllowUnassociatedTargets?: boolean;
  Enabled?: boolean;
}
export interface UpdateMaintenanceWindowTargetRequest {
  WindowId: string;
  WindowTargetId: string;
  Targets?: Array<Target>;
  OwnerInformation?: string;
  Name?: string;
  Description?: string;
  Replace?: boolean;
}
export interface UpdateMaintenanceWindowTargetResult {
  WindowId?: string;
  WindowTargetId?: string;
  Targets?: Array<Target>;
  OwnerInformation?: string;
  Name?: string;
  Description?: string;
}
export interface UpdateMaintenanceWindowTaskRequest {
  WindowId: string;
  WindowTaskId: string;
  Targets?: Array<Target>;
  TaskArn?: string;
  ServiceRoleArn?: string;
  TaskParameters?: Record<
    string,
    MaintenanceWindowTaskParameterValueExpression
  >;
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
  Priority?: number;
  MaxConcurrency?: string;
  MaxErrors?: string;
  LoggingInfo?: LoggingInfo;
  Name?: string;
  Description?: string;
  Replace?: boolean;
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior;
  AlarmConfiguration?: AlarmConfiguration;
}
export interface UpdateMaintenanceWindowTaskResult {
  WindowId?: string;
  WindowTaskId?: string;
  Targets?: Array<Target>;
  TaskArn?: string;
  ServiceRoleArn?: string;
  TaskParameters?: Record<
    string,
    MaintenanceWindowTaskParameterValueExpression
  >;
  TaskInvocationParameters?: MaintenanceWindowTaskInvocationParameters;
  Priority?: number;
  MaxConcurrency?: string;
  MaxErrors?: string;
  LoggingInfo?: LoggingInfo;
  Name?: string;
  Description?: string;
  CutoffBehavior?: MaintenanceWindowTaskCutoffBehavior;
  AlarmConfiguration?: AlarmConfiguration;
}
export interface UpdateManagedInstanceRoleRequest {
  InstanceId: string;
  IamRole: string;
}
export interface UpdateManagedInstanceRoleResult {}
export interface UpdateOpsItemRequest {
  Description?: string;
  OperationalData?: Record<string, OpsItemDataValue>;
  OperationalDataToDelete?: Array<string>;
  Notifications?: Array<OpsItemNotification>;
  Priority?: number;
  RelatedOpsItems?: Array<RelatedOpsItem>;
  Status?: OpsItemStatus;
  OpsItemId: string;
  Title?: string;
  Category?: string;
  Severity?: string;
  ActualStartTime?: Date | string;
  ActualEndTime?: Date | string;
  PlannedStartTime?: Date | string;
  PlannedEndTime?: Date | string;
  OpsItemArn?: string;
}
export interface UpdateOpsItemResponse {}
export interface UpdateOpsMetadataRequest {
  OpsMetadataArn: string;
  MetadataToUpdate?: Record<string, MetadataValue>;
  KeysToDelete?: Array<string>;
}
export interface UpdateOpsMetadataResult {
  OpsMetadataArn?: string;
}
export interface UpdatePatchBaselineRequest {
  BaselineId: string;
  Name?: string;
  GlobalFilters?: PatchFilterGroup;
  ApprovalRules?: PatchRuleGroup;
  ApprovedPatches?: Array<string>;
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
  ApprovedPatchesEnableNonSecurity?: boolean;
  RejectedPatches?: Array<string>;
  RejectedPatchesAction?: PatchAction;
  Description?: string;
  Sources?: Array<PatchSource>;
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus;
  Replace?: boolean;
}
export interface UpdatePatchBaselineResult {
  BaselineId?: string;
  Name?: string;
  OperatingSystem?: OperatingSystem;
  GlobalFilters?: PatchFilterGroup;
  ApprovalRules?: PatchRuleGroup;
  ApprovedPatches?: Array<string>;
  ApprovedPatchesComplianceLevel?: PatchComplianceLevel;
  ApprovedPatchesEnableNonSecurity?: boolean;
  RejectedPatches?: Array<string>;
  RejectedPatchesAction?: PatchAction;
  CreatedDate?: Date | string;
  ModifiedDate?: Date | string;
  Description?: string;
  Sources?: Array<PatchSource>;
  AvailableSecurityUpdatesComplianceStatus?: PatchComplianceStatus;
}
export interface UpdateResourceDataSyncRequest {
  SyncName: string;
  SyncType: string;
  SyncSource: ResourceDataSyncSource;
}
export interface UpdateResourceDataSyncResult {}
export interface UpdateServiceSettingRequest {
  SettingId: string;
  SettingValue: string;
}
export interface UpdateServiceSettingResult {}
export type Url = string;

export type UUID = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
  readonly ReasonCode?: string;
}> {}
export type ValidNextStep = string;

export type ValidNextStepList = Array<string>;
export type Version = string;

export declare namespace AddTagsToResource {
  export type Input = AddTagsToResourceRequest;
  export type Output = AddTagsToResourceResult;
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
  export type Output = AssociateOpsItemRelatedItemResponse;
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
  export type Output = CancelCommandResult;
  export type Error =
    | DuplicateInstanceId
    | InternalServerError
    | InvalidCommandId
    | InvalidInstanceId
    | CommonAwsError;
}

export declare namespace CancelMaintenanceWindowExecution {
  export type Input = CancelMaintenanceWindowExecutionRequest;
  export type Output = CancelMaintenanceWindowExecutionResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace CreateActivation {
  export type Input = CreateActivationRequest;
  export type Output = CreateActivationResult;
  export type Error = InternalServerError | InvalidParameters | CommonAwsError;
}

export declare namespace CreateAssociation {
  export type Input = CreateAssociationRequest;
  export type Output = CreateAssociationResult;
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
  export type Output = CreateAssociationBatchResult;
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
  export type Output = CreateDocumentResult;
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
  export type Output = CreateMaintenanceWindowResult;
  export type Error =
    | IdempotentParameterMismatch
    | InternalServerError
    | ResourceLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateOpsItem {
  export type Input = CreateOpsItemRequest;
  export type Output = CreateOpsItemResponse;
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
  export type Output = CreateOpsMetadataResult;
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
  export type Output = CreatePatchBaselineResult;
  export type Error =
    | IdempotentParameterMismatch
    | InternalServerError
    | ResourceLimitExceededException
    | CommonAwsError;
}

export declare namespace CreateResourceDataSync {
  export type Input = CreateResourceDataSyncRequest;
  export type Output = CreateResourceDataSyncResult;
  export type Error =
    | InternalServerError
    | ResourceDataSyncAlreadyExistsException
    | ResourceDataSyncCountExceededException
    | ResourceDataSyncInvalidConfigurationException
    | CommonAwsError;
}

export declare namespace DeleteActivation {
  export type Input = DeleteActivationRequest;
  export type Output = DeleteActivationResult;
  export type Error =
    | InternalServerError
    | InvalidActivation
    | InvalidActivationId
    | TooManyUpdates
    | CommonAwsError;
}

export declare namespace DeleteAssociation {
  export type Input = DeleteAssociationRequest;
  export type Output = DeleteAssociationResult;
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
  export type Output = DeleteDocumentResult;
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
  export type Output = DeleteInventoryResult;
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
  export type Output = DeleteMaintenanceWindowResult;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace DeleteOpsItem {
  export type Input = DeleteOpsItemRequest;
  export type Output = DeleteOpsItemResponse;
  export type Error =
    | InternalServerError
    | OpsItemInvalidParameterException
    | CommonAwsError;
}

export declare namespace DeleteOpsMetadata {
  export type Input = DeleteOpsMetadataRequest;
  export type Output = DeleteOpsMetadataResult;
  export type Error =
    | InternalServerError
    | OpsMetadataInvalidArgumentException
    | OpsMetadataNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteParameter {
  export type Input = DeleteParameterRequest;
  export type Output = DeleteParameterResult;
  export type Error = InternalServerError | ParameterNotFound | CommonAwsError;
}

export declare namespace DeleteParameters {
  export type Input = DeleteParametersRequest;
  export type Output = DeleteParametersResult;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace DeletePatchBaseline {
  export type Input = DeletePatchBaselineRequest;
  export type Output = DeletePatchBaselineResult;
  export type Error =
    | InternalServerError
    | ResourceInUseException
    | CommonAwsError;
}

export declare namespace DeleteResourceDataSync {
  export type Input = DeleteResourceDataSyncRequest;
  export type Output = DeleteResourceDataSyncResult;
  export type Error =
    | InternalServerError
    | ResourceDataSyncInvalidConfigurationException
    | ResourceDataSyncNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = DeleteResourcePolicyResponse;
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
  export type Output = DeregisterManagedInstanceResult;
  export type Error = InternalServerError | InvalidInstanceId | CommonAwsError;
}

export declare namespace DeregisterPatchBaselineForPatchGroup {
  export type Input = DeregisterPatchBaselineForPatchGroupRequest;
  export type Output = DeregisterPatchBaselineForPatchGroupResult;
  export type Error = InternalServerError | InvalidResourceId | CommonAwsError;
}

export declare namespace DeregisterTargetFromMaintenanceWindow {
  export type Input = DeregisterTargetFromMaintenanceWindowRequest;
  export type Output = DeregisterTargetFromMaintenanceWindowResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | TargetInUseException
    | CommonAwsError;
}

export declare namespace DeregisterTaskFromMaintenanceWindow {
  export type Input = DeregisterTaskFromMaintenanceWindowRequest;
  export type Output = DeregisterTaskFromMaintenanceWindowResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeActivations {
  export type Input = DescribeActivationsRequest;
  export type Output = DescribeActivationsResult;
  export type Error =
    | InternalServerError
    | InvalidFilter
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeAssociation {
  export type Input = DescribeAssociationRequest;
  export type Output = DescribeAssociationResult;
  export type Error =
    | AssociationDoesNotExist
    | InternalServerError
    | InvalidAssociationVersion
    | InvalidDocument
    | InvalidInstanceId
    | CommonAwsError;
}

export declare namespace DescribeAssociationExecutions {
  export type Input = DescribeAssociationExecutionsRequest;
  export type Output = DescribeAssociationExecutionsResult;
  export type Error =
    | AssociationDoesNotExist
    | InternalServerError
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeAssociationExecutionTargets {
  export type Input = DescribeAssociationExecutionTargetsRequest;
  export type Output = DescribeAssociationExecutionTargetsResult;
  export type Error =
    | AssociationDoesNotExist
    | AssociationExecutionDoesNotExist
    | InternalServerError
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeAutomationExecutions {
  export type Input = DescribeAutomationExecutionsRequest;
  export type Output = DescribeAutomationExecutionsResult;
  export type Error =
    | InternalServerError
    | InvalidFilterKey
    | InvalidFilterValue
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeAutomationStepExecutions {
  export type Input = DescribeAutomationStepExecutionsRequest;
  export type Output = DescribeAutomationStepExecutionsResult;
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
  export type Output = DescribeAvailablePatchesResult;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace DescribeDocument {
  export type Input = DescribeDocumentRequest;
  export type Output = DescribeDocumentResult;
  export type Error =
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentVersion
    | CommonAwsError;
}

export declare namespace DescribeDocumentPermission {
  export type Input = DescribeDocumentPermissionRequest;
  export type Output = DescribeDocumentPermissionResponse;
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
  export type Output = DescribeEffectiveInstanceAssociationsResult;
  export type Error =
    | InternalServerError
    | InvalidInstanceId
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeEffectivePatchesForPatchBaseline {
  export type Input = DescribeEffectivePatchesForPatchBaselineRequest;
  export type Output = DescribeEffectivePatchesForPatchBaselineResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | InvalidResourceId
    | UnsupportedOperatingSystem
    | CommonAwsError;
}

export declare namespace DescribeInstanceAssociationsStatus {
  export type Input = DescribeInstanceAssociationsStatusRequest;
  export type Output = DescribeInstanceAssociationsStatusResult;
  export type Error =
    | InternalServerError
    | InvalidInstanceId
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeInstanceInformation {
  export type Input = DescribeInstanceInformationRequest;
  export type Output = DescribeInstanceInformationResult;
  export type Error =
    | InternalServerError
    | InvalidFilterKey
    | InvalidInstanceId
    | InvalidInstanceInformationFilterValue
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeInstancePatches {
  export type Input = DescribeInstancePatchesRequest;
  export type Output = DescribeInstancePatchesResult;
  export type Error =
    | InternalServerError
    | InvalidFilter
    | InvalidInstanceId
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeInstancePatchStates {
  export type Input = DescribeInstancePatchStatesRequest;
  export type Output = DescribeInstancePatchStatesResult;
  export type Error = InternalServerError | InvalidNextToken | CommonAwsError;
}

export declare namespace DescribeInstancePatchStatesForPatchGroup {
  export type Input = DescribeInstancePatchStatesForPatchGroupRequest;
  export type Output = DescribeInstancePatchStatesForPatchGroupResult;
  export type Error =
    | InternalServerError
    | InvalidFilter
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeInstanceProperties {
  export type Input = DescribeInstancePropertiesRequest;
  export type Output = DescribeInstancePropertiesResult;
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
  export type Output = DescribeInventoryDeletionsResult;
  export type Error =
    | InternalServerError
    | InvalidDeletionIdException
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DescribeMaintenanceWindowExecutions {
  export type Input = DescribeMaintenanceWindowExecutionsRequest;
  export type Output = DescribeMaintenanceWindowExecutionsResult;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace DescribeMaintenanceWindowExecutionTaskInvocations {
  export type Input = DescribeMaintenanceWindowExecutionTaskInvocationsRequest;
  export type Output = DescribeMaintenanceWindowExecutionTaskInvocationsResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeMaintenanceWindowExecutionTasks {
  export type Input = DescribeMaintenanceWindowExecutionTasksRequest;
  export type Output = DescribeMaintenanceWindowExecutionTasksResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeMaintenanceWindows {
  export type Input = DescribeMaintenanceWindowsRequest;
  export type Output = DescribeMaintenanceWindowsResult;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace DescribeMaintenanceWindowSchedule {
  export type Input = DescribeMaintenanceWindowScheduleRequest;
  export type Output = DescribeMaintenanceWindowScheduleResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeMaintenanceWindowsForTarget {
  export type Input = DescribeMaintenanceWindowsForTargetRequest;
  export type Output = DescribeMaintenanceWindowsForTargetResult;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace DescribeMaintenanceWindowTargets {
  export type Input = DescribeMaintenanceWindowTargetsRequest;
  export type Output = DescribeMaintenanceWindowTargetsResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeMaintenanceWindowTasks {
  export type Input = DescribeMaintenanceWindowTasksRequest;
  export type Output = DescribeMaintenanceWindowTasksResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace DescribeOpsItems {
  export type Input = DescribeOpsItemsRequest;
  export type Output = DescribeOpsItemsResponse;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace DescribeParameters {
  export type Input = DescribeParametersRequest;
  export type Output = DescribeParametersResult;
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
  export type Output = DescribePatchBaselinesResult;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace DescribePatchGroups {
  export type Input = DescribePatchGroupsRequest;
  export type Output = DescribePatchGroupsResult;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace DescribePatchGroupState {
  export type Input = DescribePatchGroupStateRequest;
  export type Output = DescribePatchGroupStateResult;
  export type Error = InternalServerError | InvalidNextToken | CommonAwsError;
}

export declare namespace DescribePatchProperties {
  export type Input = DescribePatchPropertiesRequest;
  export type Output = DescribePatchPropertiesResult;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace DescribeSessions {
  export type Input = DescribeSessionsRequest;
  export type Output = DescribeSessionsResponse;
  export type Error =
    | InternalServerError
    | InvalidFilterKey
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace DisassociateOpsItemRelatedItem {
  export type Input = DisassociateOpsItemRelatedItemRequest;
  export type Output = DisassociateOpsItemRelatedItemResponse;
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
  export type Output = GetAccessTokenResponse;
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
  export type Output = GetAutomationExecutionResult;
  export type Error =
    | AutomationExecutionNotFoundException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace GetCalendarState {
  export type Input = GetCalendarStateRequest;
  export type Output = GetCalendarStateResponse;
  export type Error =
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentType
    | UnsupportedCalendarException
    | CommonAwsError;
}

export declare namespace GetCommandInvocation {
  export type Input = GetCommandInvocationRequest;
  export type Output = GetCommandInvocationResult;
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
  export type Output = GetConnectionStatusResponse;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace GetDefaultPatchBaseline {
  export type Input = GetDefaultPatchBaselineRequest;
  export type Output = GetDefaultPatchBaselineResult;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace GetDeployablePatchSnapshotForInstance {
  export type Input = GetDeployablePatchSnapshotForInstanceRequest;
  export type Output = GetDeployablePatchSnapshotForInstanceResult;
  export type Error =
    | InternalServerError
    | UnsupportedFeatureRequiredException
    | UnsupportedOperatingSystem
    | CommonAwsError;
}

export declare namespace GetDocument {
  export type Input = GetDocumentRequest;
  export type Output = GetDocumentResult;
  export type Error =
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentVersion
    | CommonAwsError;
}

export declare namespace GetExecutionPreview {
  export type Input = GetExecutionPreviewRequest;
  export type Output = GetExecutionPreviewResponse;
  export type Error =
    | InternalServerError
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetInventory {
  export type Input = GetInventoryRequest;
  export type Output = GetInventoryResult;
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
  export type Output = GetInventorySchemaResult;
  export type Error =
    | InternalServerError
    | InvalidNextToken
    | InvalidTypeNameException
    | CommonAwsError;
}

export declare namespace GetMaintenanceWindow {
  export type Input = GetMaintenanceWindowRequest;
  export type Output = GetMaintenanceWindowResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace GetMaintenanceWindowExecution {
  export type Input = GetMaintenanceWindowExecutionRequest;
  export type Output = GetMaintenanceWindowExecutionResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace GetMaintenanceWindowExecutionTask {
  export type Input = GetMaintenanceWindowExecutionTaskRequest;
  export type Output = GetMaintenanceWindowExecutionTaskResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace GetMaintenanceWindowExecutionTaskInvocation {
  export type Input = GetMaintenanceWindowExecutionTaskInvocationRequest;
  export type Output = GetMaintenanceWindowExecutionTaskInvocationResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace GetMaintenanceWindowTask {
  export type Input = GetMaintenanceWindowTaskRequest;
  export type Output = GetMaintenanceWindowTaskResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace GetOpsItem {
  export type Input = GetOpsItemRequest;
  export type Output = GetOpsItemResponse;
  export type Error =
    | InternalServerError
    | OpsItemAccessDeniedException
    | OpsItemNotFoundException
    | CommonAwsError;
}

export declare namespace GetOpsMetadata {
  export type Input = GetOpsMetadataRequest;
  export type Output = GetOpsMetadataResult;
  export type Error =
    | InternalServerError
    | OpsMetadataInvalidArgumentException
    | OpsMetadataNotFoundException
    | CommonAwsError;
}

export declare namespace GetOpsSummary {
  export type Input = GetOpsSummaryRequest;
  export type Output = GetOpsSummaryResult;
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
  export type Output = GetParameterResult;
  export type Error =
    | InternalServerError
    | InvalidKeyId
    | ParameterNotFound
    | ParameterVersionNotFound
    | CommonAwsError;
}

export declare namespace GetParameterHistory {
  export type Input = GetParameterHistoryRequest;
  export type Output = GetParameterHistoryResult;
  export type Error =
    | InternalServerError
    | InvalidKeyId
    | InvalidNextToken
    | ParameterNotFound
    | CommonAwsError;
}

export declare namespace GetParameters {
  export type Input = GetParametersRequest;
  export type Output = GetParametersResult;
  export type Error = InternalServerError | InvalidKeyId | CommonAwsError;
}

export declare namespace GetParametersByPath {
  export type Input = GetParametersByPathRequest;
  export type Output = GetParametersByPathResult;
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
  export type Output = GetPatchBaselineResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | InvalidResourceId
    | CommonAwsError;
}

export declare namespace GetPatchBaselineForPatchGroup {
  export type Input = GetPatchBaselineForPatchGroupRequest;
  export type Output = GetPatchBaselineForPatchGroupResult;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace GetResourcePolicies {
  export type Input = GetResourcePoliciesRequest;
  export type Output = GetResourcePoliciesResponse;
  export type Error =
    | InternalServerError
    | ResourceNotFoundException
    | ResourcePolicyInvalidParameterException
    | CommonAwsError;
}

export declare namespace GetServiceSetting {
  export type Input = GetServiceSettingRequest;
  export type Output = GetServiceSettingResult;
  export type Error =
    | InternalServerError
    | ServiceSettingNotFound
    | CommonAwsError;
}

export declare namespace LabelParameterVersion {
  export type Input = LabelParameterVersionRequest;
  export type Output = LabelParameterVersionResult;
  export type Error =
    | InternalServerError
    | ParameterNotFound
    | ParameterVersionLabelLimitExceeded
    | ParameterVersionNotFound
    | TooManyUpdates
    | CommonAwsError;
}

export declare namespace ListAssociations {
  export type Input = ListAssociationsRequest;
  export type Output = ListAssociationsResult;
  export type Error = InternalServerError | InvalidNextToken | CommonAwsError;
}

export declare namespace ListAssociationVersions {
  export type Input = ListAssociationVersionsRequest;
  export type Output = ListAssociationVersionsResult;
  export type Error =
    | AssociationDoesNotExist
    | InternalServerError
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace ListCommandInvocations {
  export type Input = ListCommandInvocationsRequest;
  export type Output = ListCommandInvocationsResult;
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
  export type Output = ListCommandsResult;
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
  export type Output = ListComplianceItemsResult;
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
  export type Output = ListComplianceSummariesResult;
  export type Error =
    | InternalServerError
    | InvalidFilter
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace ListDocumentMetadataHistory {
  export type Input = ListDocumentMetadataHistoryRequest;
  export type Output = ListDocumentMetadataHistoryResponse;
  export type Error =
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentVersion
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace ListDocuments {
  export type Input = ListDocumentsRequest;
  export type Output = ListDocumentsResult;
  export type Error =
    | InternalServerError
    | InvalidFilterKey
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace ListDocumentVersions {
  export type Input = ListDocumentVersionsRequest;
  export type Output = ListDocumentVersionsResult;
  export type Error =
    | InternalServerError
    | InvalidDocument
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace ListInventoryEntries {
  export type Input = ListInventoryEntriesRequest;
  export type Output = ListInventoryEntriesResult;
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
  export type Output = ListNodesResult;
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
  export type Output = ListNodesSummaryResult;
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
  export type Output = ListOpsItemEventsResponse;
  export type Error =
    | InternalServerError
    | OpsItemInvalidParameterException
    | OpsItemLimitExceededException
    | OpsItemNotFoundException
    | CommonAwsError;
}

export declare namespace ListOpsItemRelatedItems {
  export type Input = ListOpsItemRelatedItemsRequest;
  export type Output = ListOpsItemRelatedItemsResponse;
  export type Error =
    | InternalServerError
    | OpsItemInvalidParameterException
    | CommonAwsError;
}

export declare namespace ListOpsMetadata {
  export type Input = ListOpsMetadataRequest;
  export type Output = ListOpsMetadataResult;
  export type Error =
    | InternalServerError
    | OpsMetadataInvalidArgumentException
    | CommonAwsError;
}

export declare namespace ListResourceComplianceSummaries {
  export type Input = ListResourceComplianceSummariesRequest;
  export type Output = ListResourceComplianceSummariesResult;
  export type Error =
    | InternalServerError
    | InvalidFilter
    | InvalidNextToken
    | CommonAwsError;
}

export declare namespace ListResourceDataSync {
  export type Input = ListResourceDataSyncRequest;
  export type Output = ListResourceDataSyncResult;
  export type Error =
    | InternalServerError
    | InvalidNextToken
    | ResourceDataSyncInvalidConfigurationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResult;
  export type Error =
    | InternalServerError
    | InvalidResourceId
    | InvalidResourceType
    | CommonAwsError;
}

export declare namespace ModifyDocumentPermission {
  export type Input = ModifyDocumentPermissionRequest;
  export type Output = ModifyDocumentPermissionResponse;
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
  export type Output = PutComplianceItemsResult;
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
  export type Output = PutInventoryResult;
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
  export type Output = PutParameterResult;
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
  export type Output = PutResourcePolicyResponse;
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
  export type Output = RegisterDefaultPatchBaselineResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | InvalidResourceId
    | CommonAwsError;
}

export declare namespace RegisterPatchBaselineForPatchGroup {
  export type Input = RegisterPatchBaselineForPatchGroupRequest;
  export type Output = RegisterPatchBaselineForPatchGroupResult;
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
  export type Output = RegisterTargetWithMaintenanceWindowResult;
  export type Error =
    | DoesNotExistException
    | IdempotentParameterMismatch
    | InternalServerError
    | ResourceLimitExceededException
    | CommonAwsError;
}

export declare namespace RegisterTaskWithMaintenanceWindow {
  export type Input = RegisterTaskWithMaintenanceWindowRequest;
  export type Output = RegisterTaskWithMaintenanceWindowResult;
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
  export type Output = RemoveTagsFromResourceResult;
  export type Error =
    | InternalServerError
    | InvalidResourceId
    | InvalidResourceType
    | TooManyUpdates
    | CommonAwsError;
}

export declare namespace ResetServiceSetting {
  export type Input = ResetServiceSettingRequest;
  export type Output = ResetServiceSettingResult;
  export type Error =
    | InternalServerError
    | ServiceSettingNotFound
    | TooManyUpdates
    | CommonAwsError;
}

export declare namespace ResumeSession {
  export type Input = ResumeSessionRequest;
  export type Output = ResumeSessionResponse;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace SendAutomationSignal {
  export type Input = SendAutomationSignalRequest;
  export type Output = SendAutomationSignalResult;
  export type Error =
    | AutomationExecutionNotFoundException
    | AutomationStepNotFoundException
    | InternalServerError
    | InvalidAutomationSignalException
    | CommonAwsError;
}

export declare namespace SendCommand {
  export type Input = SendCommandRequest;
  export type Output = SendCommandResult;
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
  export type Output = StartAccessRequestResponse;
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
  export type Output = StartAssociationsOnceResult;
  export type Error =
    | AssociationDoesNotExist
    | InvalidAssociation
    | CommonAwsError;
}

export declare namespace StartAutomationExecution {
  export type Input = StartAutomationExecutionRequest;
  export type Output = StartAutomationExecutionResult;
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
  export type Output = StartChangeRequestExecutionResult;
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
  export type Output = StartExecutionPreviewResponse;
  export type Error =
    | InternalServerError
    | ValidationException
    | CommonAwsError;
}

export declare namespace StartSession {
  export type Input = StartSessionRequest;
  export type Output = StartSessionResponse;
  export type Error =
    | InternalServerError
    | InvalidDocument
    | TargetNotConnected
    | CommonAwsError;
}

export declare namespace StopAutomationExecution {
  export type Input = StopAutomationExecutionRequest;
  export type Output = StopAutomationExecutionResult;
  export type Error =
    | AutomationExecutionNotFoundException
    | InternalServerError
    | InvalidAutomationStatusUpdateException
    | CommonAwsError;
}

export declare namespace TerminateSession {
  export type Input = TerminateSessionRequest;
  export type Output = TerminateSessionResponse;
  export type Error = InternalServerError | CommonAwsError;
}

export declare namespace UnlabelParameterVersion {
  export type Input = UnlabelParameterVersionRequest;
  export type Output = UnlabelParameterVersionResult;
  export type Error =
    | InternalServerError
    | ParameterNotFound
    | ParameterVersionNotFound
    | TooManyUpdates
    | CommonAwsError;
}

export declare namespace UpdateAssociation {
  export type Input = UpdateAssociationRequest;
  export type Output = UpdateAssociationResult;
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
  export type Output = UpdateAssociationStatusResult;
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
  export type Output = UpdateDocumentResult;
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
  export type Output = UpdateDocumentDefaultVersionResult;
  export type Error =
    | InternalServerError
    | InvalidDocument
    | InvalidDocumentSchemaVersion
    | InvalidDocumentVersion
    | CommonAwsError;
}

export declare namespace UpdateDocumentMetadata {
  export type Input = UpdateDocumentMetadataRequest;
  export type Output = UpdateDocumentMetadataResponse;
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
  export type Output = UpdateMaintenanceWindowResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace UpdateMaintenanceWindowTarget {
  export type Input = UpdateMaintenanceWindowTargetRequest;
  export type Output = UpdateMaintenanceWindowTargetResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace UpdateMaintenanceWindowTask {
  export type Input = UpdateMaintenanceWindowTaskRequest;
  export type Output = UpdateMaintenanceWindowTaskResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace UpdateManagedInstanceRole {
  export type Input = UpdateManagedInstanceRoleRequest;
  export type Output = UpdateManagedInstanceRoleResult;
  export type Error = InternalServerError | InvalidInstanceId | CommonAwsError;
}

export declare namespace UpdateOpsItem {
  export type Input = UpdateOpsItemRequest;
  export type Output = UpdateOpsItemResponse;
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
  export type Output = UpdateOpsMetadataResult;
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
  export type Output = UpdatePatchBaselineResult;
  export type Error =
    | DoesNotExistException
    | InternalServerError
    | CommonAwsError;
}

export declare namespace UpdateResourceDataSync {
  export type Input = UpdateResourceDataSyncRequest;
  export type Output = UpdateResourceDataSyncResult;
  export type Error =
    | InternalServerError
    | ResourceDataSyncConflictException
    | ResourceDataSyncInvalidConfigurationException
    | ResourceDataSyncNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateServiceSetting {
  export type Input = UpdateServiceSettingRequest;
  export type Output = UpdateServiceSettingResult;
  export type Error =
    | InternalServerError
    | ServiceSettingNotFound
    | TooManyUpdates
    | CommonAwsError;
}
