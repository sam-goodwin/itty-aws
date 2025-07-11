import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface MediaLive {
  acceptInputDeviceTransfer(
    input: AcceptInputDeviceTransferRequest,
  ): Effect.Effect<
    AcceptInputDeviceTransferResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  batchDelete(
    input: BatchDeleteRequest,
  ): Effect.Effect<
    BatchDeleteResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  batchStart(
    input: BatchStartRequest,
  ): Effect.Effect<
    BatchStartResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  batchStop(
    input: BatchStopRequest,
  ): Effect.Effect<
    BatchStopResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  batchUpdateSchedule(
    input: BatchUpdateScheduleRequest,
  ): Effect.Effect<
    BatchUpdateScheduleResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  cancelInputDeviceTransfer(
    input: CancelInputDeviceTransferRequest,
  ): Effect.Effect<
    CancelInputDeviceTransferResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  claimDevice(
    input: ClaimDeviceRequest,
  ): Effect.Effect<
    ClaimDeviceResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  createChannel(
    input: CreateChannelRequest,
  ): Effect.Effect<
    CreateChannelResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  createChannelPlacementGroup(
    input: CreateChannelPlacementGroupRequest,
  ): Effect.Effect<
    CreateChannelPlacementGroupResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  createCloudWatchAlarmTemplate(
    input: CreateCloudWatchAlarmTemplateRequest,
  ): Effect.Effect<
    CreateCloudWatchAlarmTemplateResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  createCloudWatchAlarmTemplateGroup(
    input: CreateCloudWatchAlarmTemplateGroupRequest,
  ): Effect.Effect<
    CreateCloudWatchAlarmTemplateGroupResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  createCluster(
    input: CreateClusterRequest,
  ): Effect.Effect<
    CreateClusterResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  createEventBridgeRuleTemplate(
    input: CreateEventBridgeRuleTemplateRequest,
  ): Effect.Effect<
    CreateEventBridgeRuleTemplateResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  createEventBridgeRuleTemplateGroup(
    input: CreateEventBridgeRuleTemplateGroupRequest,
  ): Effect.Effect<
    CreateEventBridgeRuleTemplateGroupResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  createInput(
    input: CreateInputRequest,
  ): Effect.Effect<
    CreateInputResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  createInputSecurityGroup(
    input: CreateInputSecurityGroupRequest,
  ): Effect.Effect<
    CreateInputSecurityGroupResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  createMultiplex(
    input: CreateMultiplexRequest,
  ): Effect.Effect<
    CreateMultiplexResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  createMultiplexProgram(
    input: CreateMultiplexProgramRequest,
  ): Effect.Effect<
    CreateMultiplexProgramResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  createNetwork(
    input: CreateNetworkRequest,
  ): Effect.Effect<
    CreateNetworkResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  createNode(
    input: CreateNodeRequest,
  ): Effect.Effect<
    CreateNodeResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  createNodeRegistrationScript(
    input: CreateNodeRegistrationScriptRequest,
  ): Effect.Effect<
    CreateNodeRegistrationScriptResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  createPartnerInput(
    input: CreatePartnerInputRequest,
  ): Effect.Effect<
    CreatePartnerInputResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  createSdiSource(
    input: CreateSdiSourceRequest,
  ): Effect.Effect<
    CreateSdiSourceResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  createSignalMap(
    input: CreateSignalMapRequest,
  ): Effect.Effect<
    CreateSignalMapResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  createTags(
    input: CreateTagsRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  >;
  deleteChannel(
    input: DeleteChannelRequest,
  ): Effect.Effect<
    DeleteChannelResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteChannelPlacementGroup(
    input: DeleteChannelPlacementGroupRequest,
  ): Effect.Effect<
    DeleteChannelPlacementGroupResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteCloudWatchAlarmTemplate(
    input: DeleteCloudWatchAlarmTemplateRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteCloudWatchAlarmTemplateGroup(
    input: DeleteCloudWatchAlarmTemplateGroupRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteCluster(
    input: DeleteClusterRequest,
  ): Effect.Effect<
    DeleteClusterResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteEventBridgeRuleTemplate(
    input: DeleteEventBridgeRuleTemplateRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteEventBridgeRuleTemplateGroup(
    input: DeleteEventBridgeRuleTemplateGroupRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteInput(
    input: DeleteInputRequest,
  ): Effect.Effect<
    DeleteInputResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteInputSecurityGroup(
    input: DeleteInputSecurityGroupRequest,
  ): Effect.Effect<
    DeleteInputSecurityGroupResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteMultiplex(
    input: DeleteMultiplexRequest,
  ): Effect.Effect<
    DeleteMultiplexResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteMultiplexProgram(
    input: DeleteMultiplexProgramRequest,
  ): Effect.Effect<
    DeleteMultiplexProgramResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteNetwork(
    input: DeleteNetworkRequest,
  ): Effect.Effect<
    DeleteNetworkResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteNode(
    input: DeleteNodeRequest,
  ): Effect.Effect<
    DeleteNodeResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteReservation(
    input: DeleteReservationRequest,
  ): Effect.Effect<
    DeleteReservationResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteSchedule(
    input: DeleteScheduleRequest,
  ): Effect.Effect<
    DeleteScheduleResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteSdiSource(
    input: DeleteSdiSourceRequest,
  ): Effect.Effect<
    DeleteSdiSourceResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteSignalMap(
    input: DeleteSignalMapRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  deleteTags(
    input: DeleteTagsRequest,
  ): Effect.Effect<
    {},
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  >;
  describeAccountConfiguration(
    input: DescribeAccountConfigurationRequest,
  ): Effect.Effect<
    DescribeAccountConfigurationResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  describeChannel(
    input: DescribeChannelRequest,
  ): Effect.Effect<
    DescribeChannelResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeChannelPlacementGroup(
    input: DescribeChannelPlacementGroupRequest,
  ): Effect.Effect<
    DescribeChannelPlacementGroupResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeCluster(
    input: DescribeClusterRequest,
  ): Effect.Effect<
    DescribeClusterResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeInput(
    input: DescribeInputRequest,
  ): Effect.Effect<
    DescribeInputResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeInputDevice(
    input: DescribeInputDeviceRequest,
  ): Effect.Effect<
    DescribeInputDeviceResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeInputDeviceThumbnail(
    input: DescribeInputDeviceThumbnailRequest,
  ): Effect.Effect<
    DescribeInputDeviceThumbnailResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeInputSecurityGroup(
    input: DescribeInputSecurityGroupRequest,
  ): Effect.Effect<
    DescribeInputSecurityGroupResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeMultiplex(
    input: DescribeMultiplexRequest,
  ): Effect.Effect<
    DescribeMultiplexResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeMultiplexProgram(
    input: DescribeMultiplexProgramRequest,
  ): Effect.Effect<
    DescribeMultiplexProgramResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeNetwork(
    input: DescribeNetworkRequest,
  ): Effect.Effect<
    DescribeNetworkResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeNode(
    input: DescribeNodeRequest,
  ): Effect.Effect<
    DescribeNodeResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeOffering(
    input: DescribeOfferingRequest,
  ): Effect.Effect<
    DescribeOfferingResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeReservation(
    input: DescribeReservationRequest,
  ): Effect.Effect<
    DescribeReservationResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeSchedule(
    input: DescribeScheduleRequest,
  ): Effect.Effect<
    DescribeScheduleResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeSdiSource(
    input: DescribeSdiSourceRequest,
  ): Effect.Effect<
    DescribeSdiSourceResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  describeThumbnails(
    input: DescribeThumbnailsRequest,
  ): Effect.Effect<
    DescribeThumbnailsResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getCloudWatchAlarmTemplate(
    input: GetCloudWatchAlarmTemplateRequest,
  ): Effect.Effect<
    GetCloudWatchAlarmTemplateResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getCloudWatchAlarmTemplateGroup(
    input: GetCloudWatchAlarmTemplateGroupRequest,
  ): Effect.Effect<
    GetCloudWatchAlarmTemplateGroupResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getEventBridgeRuleTemplate(
    input: GetEventBridgeRuleTemplateRequest,
  ): Effect.Effect<
    GetEventBridgeRuleTemplateResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getEventBridgeRuleTemplateGroup(
    input: GetEventBridgeRuleTemplateGroupRequest,
  ): Effect.Effect<
    GetEventBridgeRuleTemplateGroupResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  getSignalMap(
    input: GetSignalMapRequest,
  ): Effect.Effect<
    GetSignalMapResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listChannelPlacementGroups(
    input: ListChannelPlacementGroupsRequest,
  ): Effect.Effect<
    ListChannelPlacementGroupsResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  listChannels(
    input: ListChannelsRequest,
  ): Effect.Effect<
    ListChannelsResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  listCloudWatchAlarmTemplateGroups(
    input: ListCloudWatchAlarmTemplateGroupsRequest,
  ): Effect.Effect<
    ListCloudWatchAlarmTemplateGroupsResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listCloudWatchAlarmTemplates(
    input: ListCloudWatchAlarmTemplatesRequest,
  ): Effect.Effect<
    ListCloudWatchAlarmTemplatesResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listClusters(
    input: ListClustersRequest,
  ): Effect.Effect<
    ListClustersResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  listEventBridgeRuleTemplateGroups(
    input: ListEventBridgeRuleTemplateGroupsRequest,
  ): Effect.Effect<
    ListEventBridgeRuleTemplateGroupsResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listEventBridgeRuleTemplates(
    input: ListEventBridgeRuleTemplatesRequest,
  ): Effect.Effect<
    ListEventBridgeRuleTemplatesResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listInputDeviceTransfers(
    input: ListInputDeviceTransfersRequest,
  ): Effect.Effect<
    ListInputDeviceTransfersResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  listInputDevices(
    input: ListInputDevicesRequest,
  ): Effect.Effect<
    ListInputDevicesResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  listInputSecurityGroups(
    input: ListInputSecurityGroupsRequest,
  ): Effect.Effect<
    ListInputSecurityGroupsResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  listInputs(
    input: ListInputsRequest,
  ): Effect.Effect<
    ListInputsResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  listMultiplexPrograms(
    input: ListMultiplexProgramsRequest,
  ): Effect.Effect<
    ListMultiplexProgramsResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listMultiplexes(
    input: ListMultiplexesRequest,
  ): Effect.Effect<
    ListMultiplexesResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  listNetworks(
    input: ListNetworksRequest,
  ): Effect.Effect<
    ListNetworksResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  listNodes(
    input: ListNodesRequest,
  ): Effect.Effect<
    ListNodesResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  listOfferings(
    input: ListOfferingsRequest,
  ): Effect.Effect<
    ListOfferingsResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  listReservations(
    input: ListReservationsRequest,
  ): Effect.Effect<
    ListReservationsResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  listSdiSources(
    input: ListSdiSourcesRequest,
  ): Effect.Effect<
    ListSdiSourcesResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  listSignalMaps(
    input: ListSignalMapsRequest,
  ): Effect.Effect<
    ListSignalMapsResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    BadRequestException | ForbiddenException | InternalServerErrorException | NotFoundException | CommonAwsError
  >;
  listVersions(
    input: ListVersionsRequest,
  ): Effect.Effect<
    ListVersionsResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  purchaseOffering(
    input: PurchaseOfferingRequest,
  ): Effect.Effect<
    PurchaseOfferingResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  rebootInputDevice(
    input: RebootInputDeviceRequest,
  ): Effect.Effect<
    RebootInputDeviceResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  rejectInputDeviceTransfer(
    input: RejectInputDeviceTransferRequest,
  ): Effect.Effect<
    RejectInputDeviceTransferResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  restartChannelPipelines(
    input: RestartChannelPipelinesRequest,
  ): Effect.Effect<
    RestartChannelPipelinesResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  startChannel(
    input: StartChannelRequest,
  ): Effect.Effect<
    StartChannelResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  startDeleteMonitorDeployment(
    input: StartDeleteMonitorDeploymentRequest,
  ): Effect.Effect<
    StartDeleteMonitorDeploymentResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  startInputDevice(
    input: StartInputDeviceRequest,
  ): Effect.Effect<
    StartInputDeviceResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  startInputDeviceMaintenanceWindow(
    input: StartInputDeviceMaintenanceWindowRequest,
  ): Effect.Effect<
    StartInputDeviceMaintenanceWindowResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  startMonitorDeployment(
    input: StartMonitorDeploymentRequest,
  ): Effect.Effect<
    StartMonitorDeploymentResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  startMultiplex(
    input: StartMultiplexRequest,
  ): Effect.Effect<
    StartMultiplexResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  startUpdateSignalMap(
    input: StartUpdateSignalMapRequest,
  ): Effect.Effect<
    StartUpdateSignalMapResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  stopChannel(
    input: StopChannelRequest,
  ): Effect.Effect<
    StopChannelResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  stopInputDevice(
    input: StopInputDeviceRequest,
  ): Effect.Effect<
    StopInputDeviceResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  stopMultiplex(
    input: StopMultiplexRequest,
  ): Effect.Effect<
    StopMultiplexResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  transferInputDevice(
    input: TransferInputDeviceRequest,
  ): Effect.Effect<
    TransferInputDeviceResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  updateAccountConfiguration(
    input: UpdateAccountConfigurationRequest,
  ): Effect.Effect<
    UpdateAccountConfigurationResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  updateChannel(
    input: UpdateChannelRequest,
  ): Effect.Effect<
    UpdateChannelResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | UnprocessableEntityException | CommonAwsError
  >;
  updateChannelClass(
    input: UpdateChannelClassRequest,
  ): Effect.Effect<
    UpdateChannelClassResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  updateChannelPlacementGroup(
    input: UpdateChannelPlacementGroupRequest,
  ): Effect.Effect<
    UpdateChannelPlacementGroupResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  updateCloudWatchAlarmTemplate(
    input: UpdateCloudWatchAlarmTemplateRequest,
  ): Effect.Effect<
    UpdateCloudWatchAlarmTemplateResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateCloudWatchAlarmTemplateGroup(
    input: UpdateCloudWatchAlarmTemplateGroupRequest,
  ): Effect.Effect<
    UpdateCloudWatchAlarmTemplateGroupResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateCluster(
    input: UpdateClusterRequest,
  ): Effect.Effect<
    UpdateClusterResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  updateEventBridgeRuleTemplate(
    input: UpdateEventBridgeRuleTemplateRequest,
  ): Effect.Effect<
    UpdateEventBridgeRuleTemplateResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateEventBridgeRuleTemplateGroup(
    input: UpdateEventBridgeRuleTemplateGroupRequest,
  ): Effect.Effect<
    UpdateEventBridgeRuleTemplateGroupResponse,
    BadRequestException | ConflictException | ForbiddenException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateInput(
    input: UpdateInputRequest,
  ): Effect.Effect<
    UpdateInputResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | CommonAwsError
  >;
  updateInputDevice(
    input: UpdateInputDeviceRequest,
  ): Effect.Effect<
    UpdateInputDeviceResponse,
    BadGatewayException | BadRequestException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  updateInputSecurityGroup(
    input: UpdateInputSecurityGroupRequest,
  ): Effect.Effect<
    UpdateInputSecurityGroupResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | CommonAwsError
  >;
  updateMultiplex(
    input: UpdateMultiplexRequest,
  ): Effect.Effect<
    UpdateMultiplexResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | UnprocessableEntityException | CommonAwsError
  >;
  updateMultiplexProgram(
    input: UpdateMultiplexProgramRequest,
  ): Effect.Effect<
    UpdateMultiplexProgramResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | UnprocessableEntityException | CommonAwsError
  >;
  updateNetwork(
    input: UpdateNetworkRequest,
  ): Effect.Effect<
    UpdateNetworkResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  updateNode(
    input: UpdateNodeRequest,
  ): Effect.Effect<
    UpdateNodeResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
  updateNodeState(
    input: UpdateNodeStateRequest,
  ): Effect.Effect<
    UpdateNodeStateResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | UnprocessableEntityException | CommonAwsError
  >;
  updateReservation(
    input: UpdateReservationRequest,
  ): Effect.Effect<
    UpdateReservationResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | NotFoundException | TooManyRequestsException | CommonAwsError
  >;
  updateSdiSource(
    input: UpdateSdiSourceRequest,
  ): Effect.Effect<
    UpdateSdiSourceResponse,
    BadGatewayException | BadRequestException | ConflictException | ForbiddenException | GatewayTimeoutException | InternalServerErrorException | TooManyRequestsException | CommonAwsError
  >;
}

export type Medialive = MediaLive;

export type __boolean = boolean;

export type __double = number;

export type __doubleMin0 = number;

export type __doubleMin0Max1 = number;

export type __doubleMin0Max100 = number;

export type __doubleMin0Max5000 = number;

export type __doubleMin1 = number;

export type __doubleMin1Max65535 = number;

export type __doubleMinNegative59Max0 = number;

export type __integer = number;

export type __integerMax5 = number;

export type __integerMin0 = number;

export type __integerMin0Max10 = number;

export type __integerMin0Max100 = number;

export type __integerMin0Max1000 = number;

export type __integerMin0Max10000 = number;

export type __integerMin0Max1000000 = number;

export type __integerMin0Max100000000 = number;

export type __integerMin0Max128 = number;

export type __integerMin0Max15 = number;

export type __integerMin0Max2000 = number;

export type __integerMin0Max255 = number;

export type __integerMin0Max30 = number;

export type __integerMin0Max32768 = number;

export type __integerMin0Max3600 = number;

export type __integerMin0Max500 = number;

export type __integerMin0Max600 = number;

export type __integerMin0Max65535 = number;

export type __integerMin0Max65536 = number;

export type __integerMin0Max7 = number;

export type __integerMin0Max8191 = number;

export type __integerMin1 = number;

export type __integerMin100 = number;

export type __integerMin1000 = number;

export type __integerMin1000000Max100000000 = number;

export type __integerMin100000Max100000000 = number;

export type __integerMin100000Max40000000 = number;

export type __integerMin100000Max80000000 = number;

export type __integerMin1000Max30000 = number;

export type __integerMin10Max86400 = number;

export type __integerMin1Max10 = number;

export type __integerMin1Max1000000 = number;

export type __integerMin1Max16 = number;

export type __integerMin1Max20 = number;

export type __integerMin1Max3003 = number;

export type __integerMin1Max31 = number;

export type __integerMin1Max32 = number;

export type __integerMin1Max3600000 = number;

export type __integerMin1Max4 = number;

export type __integerMin1Max5 = number;

export type __integerMin1Max51 = number;

export type __integerMin1Max6 = number;

export type __integerMin1Max8 = number;

export type __integerMin1Max800 = number;

export type __integerMin256Max3840 = number;

export type __integerMin25Max10000 = number;

export type __integerMin25Max2000 = number;

export type __integerMin3 = number;

export type __integerMin30 = number;

export type __integerMin32Max8191 = number;

export type __integerMin40Max16000 = number;

export type __integerMin4Max20 = number;

export type __integerMin50000Max16000000 = number;

export type __integerMin50000Max8000000 = number;

export type __integerMin64Max2160 = number;

export type __integerMin800Max3000 = number;

export type __integerMin80Max800 = number;

export type __integerMin96Max600 = number;

export type __integerMinNegative1000Max1000 = number;

export type __integerMinNegative5Max5 = number;

export type __integerMinNegative60Max6 = number;

export type __integerMinNegative60Max60 = number;

export type __listOf__integer = Array<number>;
export type __listOf__string = Array<string>;
export type __listOf__stringMin7Max11PatternAws097 = Array<string>;
export type __listOf__stringPatternS = Array<string>;
export type __listOfAudioChannelMapping = Array<AudioChannelMapping>;
export type __listOfAudioDescription = Array<AudioDescription>;
export type __listOfAudioSelector = Array<AudioSelector>;
export type __listOfAudioTrack = Array<AudioTrack>;
export type __listOfBatchFailedResultModel = Array<BatchFailedResultModel>;
export type __listOfBatchSuccessfulResultModel = Array<BatchSuccessfulResultModel>;
export type __listOfCaptionDescription = Array<CaptionDescription>;
export type __listOfCaptionLanguageMapping = Array<CaptionLanguageMapping>;
export type __listOfCaptionSelector = Array<CaptionSelector>;
export type __listOfChannelEgressEndpoint = Array<ChannelEgressEndpoint>;
export type __listOfChannelEngineVersionResponse = Array<ChannelEngineVersionResponse>;
export type __listOfChannelPipelineIdToRestart = Array<ChannelPipelineIdToRestart>;
export type __listOfChannelSummary = Array<ChannelSummary>;
export type __listOfCloudWatchAlarmTemplateGroupSummary = Array<CloudWatchAlarmTemplateGroupSummary>;
export type __listOfCloudWatchAlarmTemplateSummary = Array<CloudWatchAlarmTemplateSummary>;
export type __listOfCmafIngestCaptionLanguageMapping = Array<CmafIngestCaptionLanguageMapping>;
export type __listOfColorCorrection = Array<ColorCorrection>;
export type __listOfDashRoleAudio = Array<DashRoleAudio>;
export type __listOfDashRoleCaption = Array<DashRoleCaption>;
export type __listOfDescribeChannelPlacementGroupSummary = Array<DescribeChannelPlacementGroupSummary>;
export type __listOfDescribeClusterSummary = Array<DescribeClusterSummary>;
export type __listOfDescribeNetworkSummary = Array<DescribeNetworkSummary>;
export type __listOfDescribeNodeSummary = Array<DescribeNodeSummary>;
export type __listOfEventBridgeRuleTemplateGroupSummary = Array<EventBridgeRuleTemplateGroupSummary>;
export type __listOfEventBridgeRuleTemplateSummary = Array<EventBridgeRuleTemplateSummary>;
export type __listOfEventBridgeRuleTemplateTarget = Array<EventBridgeRuleTemplateTarget>;
export type __listOfFailoverCondition = Array<FailoverCondition>;
export type __listOfHlsAdMarkers = Array<HlsAdMarkers>;
export type __listOfInput = Array<Input>;
export type __listOfInputAttachment = Array<InputAttachment>;
export type __listOfInputChannelLevel = Array<InputChannelLevel>;
export type __listOfInputDestination = Array<InputDestination>;
export type __listOfInputDestinationRequest = Array<InputDestinationRequest>;
export type __listOfInputDestinationRoute = Array<InputDestinationRoute>;
export type __listOfInputDeviceConfigurableAudioChannelPairConfig = Array<InputDeviceConfigurableAudioChannelPairConfig>;
export type __listOfInputDeviceRequest = Array<InputDeviceRequest>;
export type __listOfInputDeviceSettings = Array<InputDeviceSettings>;
export type __listOfInputDeviceSummary = Array<InputDeviceSummary>;
export type __listOfInputDeviceUhdAudioChannelPairConfig = Array<InputDeviceUhdAudioChannelPairConfig>;
export type __listOfInputRequestDestinationRoute = Array<InputRequestDestinationRoute>;
export type __listOfInputSdpLocation = Array<InputSdpLocation>;
export type __listOfInputSecurityGroup = Array<InputSecurityGroup>;
export type __listOfInputSource = Array<InputSource>;
export type __listOfInputSourceRequest = Array<InputSourceRequest>;
export type __listOfInputWhitelistRule = Array<InputWhitelistRule>;
export type __listOfInputWhitelistRuleCidr = Array<InputWhitelistRuleCidr>;
export type __listOfInterfaceMapping = Array<InterfaceMapping>;
export type __listOfInterfaceMappingCreateRequest = Array<InterfaceMappingCreateRequest>;
export type __listOfInterfaceMappingUpdateRequest = Array<InterfaceMappingUpdateRequest>;
export type __listOfIpPool = Array<IpPool>;
export type __listOfIpPoolCreateRequest = Array<IpPoolCreateRequest>;
export type __listOfIpPoolUpdateRequest = Array<IpPoolUpdateRequest>;
export type __listOfMediaConnectFlow = Array<MediaConnectFlow>;
export type __listOfMediaConnectFlowRequest = Array<MediaConnectFlowRequest>;
export type __listOfMediaPackageOutputDestinationSettings = Array<MediaPackageOutputDestinationSettings>;
export type __listOfMediaResourceNeighbor = Array<MediaResourceNeighbor>;
export type __listOfMulticastSource = Array<MulticastSource>;
export type __listOfMulticastSourceCreateRequest = Array<MulticastSourceCreateRequest>;
export type __listOfMulticastSourceUpdateRequest = Array<MulticastSourceUpdateRequest>;
export type __listOfMultiplexOutputDestination = Array<MultiplexOutputDestination>;
export type __listOfMultiplexProgramPipelineDetail = Array<MultiplexProgramPipelineDetail>;
export type __listOfMultiplexProgramSummary = Array<MultiplexProgramSummary>;
export type __listOfMultiplexSummary = Array<MultiplexSummary>;
export type __listOfNodeInterfaceMapping = Array<NodeInterfaceMapping>;
export type __listOfNodeInterfaceMappingCreateRequest = Array<NodeInterfaceMappingCreateRequest>;
export type __listOfOffering = Array<Offering>;
export type __listOfOutput = Array<Output>;
export type __listOfOutputDestination = Array<OutputDestination>;
export type __listOfOutputDestinationSettings = Array<OutputDestinationSettings>;
export type __listOfOutputGroup = Array<OutputGroup>;
export type __listOfPipelineDetail = Array<PipelineDetail>;
export type __listOfPipelinePauseStateSettings = Array<PipelinePauseStateSettings>;
export type __listOfReservation = Array<Reservation>;
export type __listOfRoute = Array<Route>;
export type __listOfRouteCreateRequest = Array<RouteCreateRequest>;
export type __listOfRouteUpdateRequest = Array<RouteUpdateRequest>;
export type __listOfRtmpAdMarkers = Array<RtmpAdMarkers>;
export type __listOfScheduleAction = Array<ScheduleAction>;
export type __listOfScte35Descriptor = Array<Scte35Descriptor>;
export type __listOfSdiSourceSummary = Array<SdiSourceSummary>;
export type __listOfSignalMapSummary = Array<SignalMapSummary>;
export type __listOfSmpte2110ReceiverGroup = Array<Smpte2110ReceiverGroup>;
export type __listOfSrtCallerSource = Array<SrtCallerSource>;
export type __listOfSrtCallerSourceRequest = Array<SrtCallerSourceRequest>;
export type __listOfSrtOutputDestinationSettings = Array<SrtOutputDestinationSettings>;
export type __listOfThumbnail = Array<Thumbnail>;
export type __listOfThumbnailDetail = Array<ThumbnailDetail>;
export type __listOfTransferringInputDeviceSummary = Array<TransferringInputDeviceSummary>;
export type __listOfValidationError = Array<ValidationError>;
export type __listOfVideoDescription = Array<VideoDescription>;
export type __long = number;

export type __longMin0Max1099511627775 = number;

export type __longMin0Max4294967295 = number;

export type __longMin0Max8589934591 = number;

export type __longMin0Max86400000 = number;

export type __string = string;

export type __stringMax100 = string;

export type __stringMax1000 = string;

export type __stringMax2048 = string;

export type __stringMax255 = string;

export type __stringMax256 = string;

export type __stringMax32 = string;

export type __stringMax64 = string;

export type __stringMin0Max1024 = string;

export type __stringMin1 = string;

export type __stringMin1Max2048 = string;

export type __stringMin1Max2048PatternArn = string;

export type __stringMin1Max255 = string;

export type __stringMin1Max255PatternS = string;

export type __stringMin1Max256 = string;

export type __stringMin1Max256PatternS = string;

export type __stringMin1Max35 = string;

export type __stringMin1Max7 = string;

export type __stringMin2Max2 = string;

export type __stringMin32Max32 = string;

export type __stringMin34Max34 = string;

export type __stringMin3Max3 = string;

export type __stringMin6Max6 = string;

export type __stringMin7Max11PatternAws097 = string;

export type __stringPattern010920300 = string;

export type __stringPatternArnMedialiveCloudwatchAlarmTemplate = string;

export type __stringPatternArnMedialiveCloudwatchAlarmTemplateGroup = string;

export type __stringPatternArnMedialiveEventbridgeRuleTemplate = string;

export type __stringPatternArnMedialiveEventbridgeRuleTemplateGroup = string;

export type __stringPatternArnMedialiveSignalMap = string;

export type __stringPatternS = string;

export type __timestamp = Date | string;

export type __timestampIso8601 = Date | string;

export type AacCodingMode = "AD_RECEIVER_MIX" | "CODING_MODE_1_0" | "CODING_MODE_1_1" | "CODING_MODE_2_0" | "CODING_MODE_5_1";
export type AacInputType = "BROADCASTER_MIXED_AD" | "NORMAL";
export type AacProfile = "HEV1" | "HEV2" | "LC";
export type AacRateControlMode = "CBR" | "VBR";
export type AacRawFormat = "LATM_LOAS" | "NONE";
export interface AacSettings {
  Bitrate?: number;
  CodingMode?: AacCodingMode;
  InputType?: AacInputType;
  Profile?: AacProfile;
  RateControlMode?: AacRateControlMode;
  RawFormat?: AacRawFormat;
  SampleRate?: number;
  Spec?: AacSpec;
  VbrQuality?: AacVbrQuality;
}
export type AacSpec = "MPEG2" | "MPEG4";
export type AacVbrQuality = "HIGH" | "LOW" | "MEDIUM_HIGH" | "MEDIUM_LOW";
export type Ac3AttenuationControl = "ATTENUATE_3_DB" | "NONE";
export type Ac3BitstreamMode = "COMMENTARY" | "COMPLETE_MAIN" | "DIALOGUE" | "EMERGENCY" | "HEARING_IMPAIRED" | "MUSIC_AND_EFFECTS" | "VISUALLY_IMPAIRED" | "VOICE_OVER";
export type Ac3CodingMode = "CODING_MODE_1_0" | "CODING_MODE_1_1" | "CODING_MODE_2_0" | "CODING_MODE_3_2_LFE";
export type Ac3DrcProfile = "FILM_STANDARD" | "NONE";
export type Ac3LfeFilter = "DISABLED" | "ENABLED";
export type Ac3MetadataControl = "FOLLOW_INPUT" | "USE_CONFIGURED";
export interface Ac3Settings {
  Bitrate?: number;
  BitstreamMode?: Ac3BitstreamMode;
  CodingMode?: Ac3CodingMode;
  Dialnorm?: number;
  DrcProfile?: Ac3DrcProfile;
  LfeFilter?: Ac3LfeFilter;
  MetadataControl?: Ac3MetadataControl;
  AttenuationControl?: Ac3AttenuationControl;
}
export type AcceptHeader = "image_jpeg";
export interface AcceptInputDeviceTransferRequest {
  InputDeviceId: string;
}
export interface AcceptInputDeviceTransferResponse {
}
export type AccessibilityType = "DOES_NOT_IMPLEMENT_ACCESSIBILITY_FEATURES" | "IMPLEMENTS_ACCESSIBILITY_FEATURES";
export interface AccountConfiguration {
  KmsKeyId?: string;
}
export type AfdSignaling = "AUTO" | "FIXED" | "NONE";
export type Algorithm = "AES128" | "AES192" | "AES256";
export interface AncillarySourceSettings {
  SourceAncillaryChannelNumber?: number;
}
export interface AnywhereSettings {
  ChannelPlacementGroupId?: string;
  ClusterId?: string;
}
export interface ArchiveCdnSettings {
  ArchiveS3Settings?: ArchiveS3Settings;
}
export interface ArchiveContainerSettings {
  M2tsSettings?: M2tsSettings;
  RawSettings?: RawSettings;
}
export interface ArchiveGroupSettings {
  ArchiveCdnSettings?: ArchiveCdnSettings;
  Destination: OutputLocationRef;
  RolloverInterval?: number;
}
export interface ArchiveOutputSettings {
  ContainerSettings: ArchiveContainerSettings;
  Extension?: string;
  NameModifier?: string;
}
export interface ArchiveS3Settings {
  CannedAcl?: S3CannedAcl;
}
export interface AribDestinationSettings {
}
export interface AribSourceSettings {
}
export interface AudioChannelMapping {
  InputChannelLevels: Array<InputChannelLevel>;
  OutputChannel: number;
}
export interface AudioCodecSettings {
  AacSettings?: AacSettings;
  Ac3Settings?: Ac3Settings;
  Eac3AtmosSettings?: Eac3AtmosSettings;
  Eac3Settings?: Eac3Settings;
  Mp2Settings?: Mp2Settings;
  PassThroughSettings?: PassThroughSettings;
  WavSettings?: WavSettings;
}
export interface AudioDescription {
  AudioNormalizationSettings?: AudioNormalizationSettings;
  AudioSelectorName: string;
  AudioType?: AudioType;
  AudioTypeControl?: AudioDescriptionAudioTypeControl;
  AudioWatermarkingSettings?: AudioWatermarkSettings;
  CodecSettings?: AudioCodecSettings;
  LanguageCode?: string;
  LanguageCodeControl?: AudioDescriptionLanguageCodeControl;
  Name: string;
  RemixSettings?: RemixSettings;
  StreamName?: string;
  AudioDashRoles?: Array<DashRoleAudio>;
  DvbDashAccessibility?: DvbDashAccessibility;
}
export type AudioDescriptionAudioTypeControl = "FOLLOW_INPUT" | "USE_CONFIGURED";
export type AudioDescriptionLanguageCodeControl = "FOLLOW_INPUT" | "USE_CONFIGURED";
export interface AudioDolbyEDecode {
  ProgramSelection: DolbyEProgramSelection;
}
export interface AudioHlsRenditionSelection {
  GroupId: string;
  Name: string;
}
export interface AudioLanguageSelection {
  LanguageCode: string;
  LanguageSelectionPolicy?: AudioLanguageSelectionPolicy;
}
export type AudioLanguageSelectionPolicy = "LOOSE" | "STRICT";
export type AudioNormalizationAlgorithm = "ITU_1770_1" | "ITU_1770_2";
export type AudioNormalizationAlgorithmControl = "CORRECT_AUDIO";
export interface AudioNormalizationSettings {
  Algorithm?: AudioNormalizationAlgorithm;
  AlgorithmControl?: AudioNormalizationAlgorithmControl;
  TargetLkfs?: number;
}
export type AudioOnlyHlsSegmentType = "AAC" | "FMP4";
export interface AudioOnlyHlsSettings {
  AudioGroupId?: string;
  AudioOnlyImage?: InputLocation;
  AudioTrackType?: AudioOnlyHlsTrackType;
  SegmentType?: AudioOnlyHlsSegmentType;
}
export type AudioOnlyHlsTrackType = "ALTERNATE_AUDIO_AUTO_SELECT" | "ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT" | "ALTERNATE_AUDIO_NOT_AUTO_SELECT" | "AUDIO_ONLY_VARIANT_STREAM";
export interface AudioPidSelection {
  Pid: number;
}
export interface AudioSelector {
  Name: string;
  SelectorSettings?: AudioSelectorSettings;
}
export interface AudioSelectorSettings {
  AudioHlsRenditionSelection?: AudioHlsRenditionSelection;
  AudioLanguageSelection?: AudioLanguageSelection;
  AudioPidSelection?: AudioPidSelection;
  AudioTrackSelection?: AudioTrackSelection;
}
export interface AudioSilenceFailoverSettings {
  AudioSelectorName: string;
  AudioSilenceThresholdMsec?: number;
}
export interface AudioTrack {
  Track: number;
}
export interface AudioTrackSelection {
  Tracks: Array<AudioTrack>;
  DolbyEDecode?: AudioDolbyEDecode;
}
export type AudioType = "CLEAN_EFFECTS" | "HEARING_IMPAIRED" | "UNDEFINED" | "VISUAL_IMPAIRED_COMMENTARY";
export interface AudioWatermarkSettings {
  NielsenWatermarksSettings?: NielsenWatermarksSettings;
}
export type AuthenticationScheme = "AKAMAI" | "COMMON";
export interface AutomaticInputFailoverSettings {
  ErrorClearTimeMsec?: number;
  FailoverConditions?: Array<FailoverCondition>;
  InputPreference?: InputPreference;
  SecondaryInputId: string;
}
export interface Av1ColorSpaceSettings {
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;
  Hdr10Settings?: Hdr10Settings;
  Rec601Settings?: Rec601Settings;
  Rec709Settings?: Rec709Settings;
}
export type Av1GopSizeUnits = "FRAMES" | "SECONDS";
export type Av1Level = "AV1_LEVEL_2" | "AV1_LEVEL_2_1" | "AV1_LEVEL_3" | "AV1_LEVEL_3_1" | "AV1_LEVEL_4" | "AV1_LEVEL_4_1" | "AV1_LEVEL_5" | "AV1_LEVEL_5_1" | "AV1_LEVEL_5_2" | "AV1_LEVEL_5_3" | "AV1_LEVEL_6" | "AV1_LEVEL_6_1" | "AV1_LEVEL_6_2" | "AV1_LEVEL_6_3" | "AV1_LEVEL_AUTO";
export type Av1LookAheadRateControl = "HIGH" | "LOW" | "MEDIUM";
export type Av1RateControlMode = "CBR" | "QVBR";
export type Av1SceneChangeDetect = "DISABLED" | "ENABLED";
export interface Av1Settings {
  AfdSignaling?: AfdSignaling;
  BufSize?: number;
  ColorSpaceSettings?: Av1ColorSpaceSettings;
  FixedAfd?: FixedAfd;
  FramerateDenominator: number;
  FramerateNumerator: number;
  GopSize?: number;
  GopSizeUnits?: Av1GopSizeUnits;
  Level?: Av1Level;
  LookAheadRateControl?: Av1LookAheadRateControl;
  MaxBitrate?: number;
  MinIInterval?: number;
  ParDenominator?: number;
  ParNumerator?: number;
  QvbrQualityLevel?: number;
  SceneChangeDetect?: Av1SceneChangeDetect;
  TimecodeBurninSettings?: TimecodeBurninSettings;
  Bitrate?: number;
  RateControlMode?: Av1RateControlMode;
}
export interface AvailBlanking {
  AvailBlankingImage?: InputLocation;
  State?: AvailBlankingState;
}
export type AvailBlankingState = "DISABLED" | "ENABLED";
export interface AvailConfiguration {
  AvailSettings?: AvailSettings;
  Scte35SegmentationScope?: Scte35SegmentationScope;
}
export interface AvailSettings {
  Esam?: Esam;
  Scte35SpliceInsert?: Scte35SpliceInsert;
  Scte35TimeSignalApos?: Scte35TimeSignalApos;
}
export declare class BadGatewayException extends Data.TaggedError(
  "BadGatewayException",
)<{
  readonly Message?: string;
}> {}
export declare class BadRequestException extends Data.TaggedError(
  "BadRequestException",
)<{
  readonly Message?: string;
}> {}
export interface BandwidthReductionFilterSettings {
  PostFilterSharpening?: BandwidthReductionPostFilterSharpening;
  Strength?: BandwidthReductionFilterStrength;
}
export type BandwidthReductionFilterStrength = "AUTO" | "STRENGTH_1" | "STRENGTH_2" | "STRENGTH_3" | "STRENGTH_4";
export type BandwidthReductionPostFilterSharpening = "DISABLED" | "SHARPENING_1" | "SHARPENING_2" | "SHARPENING_3";
export interface BatchDeleteRequest {
  ChannelIds?: Array<string>;
  InputIds?: Array<string>;
  InputSecurityGroupIds?: Array<string>;
  MultiplexIds?: Array<string>;
}
export interface BatchDeleteResponse {
  Failed?: Array<BatchFailedResultModel>;
  Successful?: Array<BatchSuccessfulResultModel>;
}
export interface BatchFailedResultModel {
  Arn?: string;
  Code?: string;
  Id?: string;
  Message?: string;
}
export interface BatchScheduleActionCreateRequest {
  ScheduleActions: Array<ScheduleAction>;
}
export interface BatchScheduleActionCreateResult {
  ScheduleActions: Array<ScheduleAction>;
}
export interface BatchScheduleActionDeleteRequest {
  ActionNames: Array<string>;
}
export interface BatchScheduleActionDeleteResult {
  ScheduleActions: Array<ScheduleAction>;
}
export interface BatchStartRequest {
  ChannelIds?: Array<string>;
  MultiplexIds?: Array<string>;
}
export interface BatchStartResponse {
  Failed?: Array<BatchFailedResultModel>;
  Successful?: Array<BatchSuccessfulResultModel>;
}
export interface BatchStopRequest {
  ChannelIds?: Array<string>;
  MultiplexIds?: Array<string>;
}
export interface BatchStopResponse {
  Failed?: Array<BatchFailedResultModel>;
  Successful?: Array<BatchSuccessfulResultModel>;
}
export interface BatchSuccessfulResultModel {
  Arn?: string;
  Id?: string;
  State?: string;
}
export interface BatchUpdateScheduleRequest {
  ChannelId: string;
  Creates?: BatchScheduleActionCreateRequest;
  Deletes?: BatchScheduleActionDeleteRequest;
}
export interface BatchUpdateScheduleResponse {
  Creates?: BatchScheduleActionCreateResult;
  Deletes?: BatchScheduleActionDeleteResult;
}
export interface BlackoutSlate {
  BlackoutSlateImage?: InputLocation;
  NetworkEndBlackout?: BlackoutSlateNetworkEndBlackout;
  NetworkEndBlackoutImage?: InputLocation;
  NetworkId?: string;
  State?: BlackoutSlateState;
}
export type BlackoutSlateNetworkEndBlackout = "DISABLED" | "ENABLED";
export type BlackoutSlateState = "DISABLED" | "ENABLED";
export type BurnInAlignment = "CENTERED" | "LEFT" | "SMART";
export type BurnInBackgroundColor = "BLACK" | "NONE" | "WHITE";
export interface BurnInDestinationSettings {
  Alignment?: BurnInAlignment;
  BackgroundColor?: BurnInBackgroundColor;
  BackgroundOpacity?: number;
  Font?: InputLocation;
  FontColor?: BurnInFontColor;
  FontOpacity?: number;
  FontResolution?: number;
  FontSize?: string;
  OutlineColor?: BurnInOutlineColor;
  OutlineSize?: number;
  ShadowColor?: BurnInShadowColor;
  ShadowOpacity?: number;
  ShadowXOffset?: number;
  ShadowYOffset?: number;
  TeletextGridControl?: BurnInTeletextGridControl;
  XPosition?: number;
  YPosition?: number;
}
export type BurnInFontColor = "BLACK" | "BLUE" | "GREEN" | "RED" | "WHITE" | "YELLOW";
export type BurnInOutlineColor = "BLACK" | "BLUE" | "GREEN" | "RED" | "WHITE" | "YELLOW";
export type BurnInShadowColor = "BLACK" | "NONE" | "WHITE";
export type BurnInTeletextGridControl = "FIXED" | "SCALED";
export interface CancelInputDeviceTransferRequest {
  InputDeviceId: string;
}
export interface CancelInputDeviceTransferResponse {
}
export interface CaptionDescription {
  Accessibility?: AccessibilityType;
  CaptionSelectorName: string;
  DestinationSettings?: CaptionDestinationSettings;
  LanguageCode?: string;
  LanguageDescription?: string;
  Name: string;
  CaptionDashRoles?: Array<DashRoleCaption>;
  DvbDashAccessibility?: DvbDashAccessibility;
}
export interface CaptionDestinationSettings {
  AribDestinationSettings?: AribDestinationSettings;
  BurnInDestinationSettings?: BurnInDestinationSettings;
  DvbSubDestinationSettings?: DvbSubDestinationSettings;
  EbuTtDDestinationSettings?: EbuTtDDestinationSettings;
  EmbeddedDestinationSettings?: EmbeddedDestinationSettings;
  EmbeddedPlusScte20DestinationSettings?: EmbeddedPlusScte20DestinationSettings;
  RtmpCaptionInfoDestinationSettings?: RtmpCaptionInfoDestinationSettings;
  Scte20PlusEmbeddedDestinationSettings?: Scte20PlusEmbeddedDestinationSettings;
  Scte27DestinationSettings?: Scte27DestinationSettings;
  SmpteTtDestinationSettings?: SmpteTtDestinationSettings;
  TeletextDestinationSettings?: TeletextDestinationSettings;
  TtmlDestinationSettings?: TtmlDestinationSettings;
  WebvttDestinationSettings?: WebvttDestinationSettings;
}
export interface CaptionLanguageMapping {
  CaptionChannel: number;
  LanguageCode: string;
  LanguageDescription: string;
}
export interface CaptionRectangle {
  Height: number;
  LeftOffset: number;
  TopOffset: number;
  Width: number;
}
export interface CaptionSelector {
  LanguageCode?: string;
  Name: string;
  SelectorSettings?: CaptionSelectorSettings;
}
export interface CaptionSelectorSettings {
  AncillarySourceSettings?: AncillarySourceSettings;
  AribSourceSettings?: AribSourceSettings;
  DvbSubSourceSettings?: DvbSubSourceSettings;
  EmbeddedSourceSettings?: EmbeddedSourceSettings;
  Scte20SourceSettings?: Scte20SourceSettings;
  Scte27SourceSettings?: Scte27SourceSettings;
  TeletextSourceSettings?: TeletextSourceSettings;
}
export type CdiInputResolution = "SD" | "HD" | "FHD" | "UHD";
export interface CdiInputSpecification {
  Resolution?: CdiInputResolution;
}
export interface Channel {
  Arn?: string;
  CdiInputSpecification?: CdiInputSpecification;
  ChannelClass?: ChannelClass;
  Destinations?: Array<OutputDestination>;
  EgressEndpoints?: Array<ChannelEgressEndpoint>;
  EncoderSettings?: EncoderSettings;
  Id?: string;
  InputAttachments?: Array<InputAttachment>;
  InputSpecification?: InputSpecification;
  LogLevel?: LogLevel;
  Maintenance?: MaintenanceStatus;
  Name?: string;
  PipelineDetails?: Array<PipelineDetail>;
  PipelinesRunningCount?: number;
  RoleArn?: string;
  State?: ChannelState;
  Tags?: Record<string, string>;
  Vpc?: VpcOutputSettingsDescription;
  AnywhereSettings?: DescribeAnywhereSettings;
  ChannelEngineVersion?: ChannelEngineVersionResponse;
}
export type ChannelClass = "STANDARD" | "SINGLE_PIPELINE";
export interface ChannelEgressEndpoint {
  SourceIp?: string;
}
export interface ChannelEngineVersionRequest {
  Version?: string;
}
export interface ChannelEngineVersionResponse {
  ExpirationDate?: Date | string;
  Version?: string;
}
export type ChannelPipelineIdToRestart = "PIPELINE_0" | "PIPELINE_1";
export type ChannelPlacementGroupState = "UNASSIGNED" | "ASSIGNING" | "ASSIGNED" | "DELETING" | "DELETE_FAILED" | "DELETED" | "UNASSIGNING";
export type ChannelState = "CREATING" | "CREATE_FAILED" | "IDLE" | "STARTING" | "RUNNING" | "RECOVERING" | "STOPPING" | "DELETING" | "DELETED" | "UPDATING" | "UPDATE_FAILED";
export interface ChannelSummary {
  Arn?: string;
  CdiInputSpecification?: CdiInputSpecification;
  ChannelClass?: ChannelClass;
  Destinations?: Array<OutputDestination>;
  EgressEndpoints?: Array<ChannelEgressEndpoint>;
  Id?: string;
  InputAttachments?: Array<InputAttachment>;
  InputSpecification?: InputSpecification;
  LogLevel?: LogLevel;
  Maintenance?: MaintenanceStatus;
  Name?: string;
  PipelinesRunningCount?: number;
  RoleArn?: string;
  State?: ChannelState;
  Tags?: Record<string, string>;
  Vpc?: VpcOutputSettingsDescription;
  AnywhereSettings?: DescribeAnywhereSettings;
  ChannelEngineVersion?: ChannelEngineVersionResponse;
  UsedChannelEngineVersions?: Array<ChannelEngineVersionResponse>;
}
export interface ClaimDeviceRequest {
  Id?: string;
}
export interface ClaimDeviceResponse {
}
export type CloudWatchAlarmTemplateComparisonOperator = "GreaterThanOrEqualToThreshold" | "GreaterThanThreshold" | "LessThanThreshold" | "LessThanOrEqualToThreshold";
export interface CloudWatchAlarmTemplateGroupSummary {
  Arn: string;
  CreatedAt: Date | string;
  Description?: string;
  Id: string;
  ModifiedAt?: Date | string;
  Name: string;
  Tags?: Record<string, string>;
  TemplateCount: number;
}
export type CloudWatchAlarmTemplateStatistic = "SampleCount" | "Average" | "Sum" | "Minimum" | "Maximum";
export interface CloudWatchAlarmTemplateSummary {
  Arn: string;
  ComparisonOperator: CloudWatchAlarmTemplateComparisonOperator;
  CreatedAt: Date | string;
  DatapointsToAlarm?: number;
  Description?: string;
  EvaluationPeriods: number;
  GroupId: string;
  Id: string;
  MetricName: string;
  ModifiedAt?: Date | string;
  Name: string;
  Period: number;
  Statistic: CloudWatchAlarmTemplateStatistic;
  Tags?: Record<string, string>;
  TargetResourceType: CloudWatchAlarmTemplateTargetResourceType;
  Threshold: number;
  TreatMissingData: CloudWatchAlarmTemplateTreatMissingData;
}
export type CloudWatchAlarmTemplateTargetResourceType = "CLOUDFRONT_DISTRIBUTION" | "MEDIALIVE_MULTIPLEX" | "MEDIALIVE_CHANNEL" | "MEDIALIVE_INPUT_DEVICE" | "MEDIAPACKAGE_CHANNEL" | "MEDIAPACKAGE_ORIGIN_ENDPOINT" | "MEDIACONNECT_FLOW" | "S3_BUCKET" | "MEDIATAILOR_PLAYBACK_CONFIGURATION";
export type CloudWatchAlarmTemplateTreatMissingData = "notBreaching" | "breaching" | "ignore" | "missing";
export interface ClusterNetworkSettings {
  DefaultRoute?: string;
  InterfaceMappings?: Array<InterfaceMapping>;
}
export interface ClusterNetworkSettingsCreateRequest {
  DefaultRoute?: string;
  InterfaceMappings?: Array<InterfaceMappingCreateRequest>;
}
export interface ClusterNetworkSettingsUpdateRequest {
  DefaultRoute?: string;
  InterfaceMappings?: Array<InterfaceMappingUpdateRequest>;
}
export type ClusterState = "CREATING" | "CREATE_FAILED" | "ACTIVE" | "DELETING" | "DELETE_FAILED" | "DELETED";
export type ClusterType = "ON_PREMISES";
export type CmafId3Behavior = "DISABLED" | "ENABLED";
export interface CmafIngestCaptionLanguageMapping {
  CaptionChannel: number;
  LanguageCode: string;
}
export interface CmafIngestGroupSettings {
  Destination: OutputLocationRef;
  NielsenId3Behavior?: CmafNielsenId3Behavior;
  Scte35Type?: Scte35Type;
  SegmentLength?: number;
  SegmentLengthUnits?: CmafIngestSegmentLengthUnits;
  SendDelayMs?: number;
  KlvBehavior?: CmafKLVBehavior;
  KlvNameModifier?: string;
  NielsenId3NameModifier?: string;
  Scte35NameModifier?: string;
  Id3Behavior?: CmafId3Behavior;
  Id3NameModifier?: string;
  CaptionLanguageMappings?: Array<CmafIngestCaptionLanguageMapping>;
  TimedMetadataId3Frame?: CmafTimedMetadataId3Frame;
  TimedMetadataId3Period?: number;
  TimedMetadataPassthrough?: CmafTimedMetadataPassthrough;
}
export interface CmafIngestOutputSettings {
  NameModifier?: string;
}
export type CmafIngestSegmentLengthUnits = "MILLISECONDS" | "SECONDS";
export type CmafKLVBehavior = "NO_PASSTHROUGH" | "PASSTHROUGH";
export type CmafNielsenId3Behavior = "NO_PASSTHROUGH" | "PASSTHROUGH";
export type CmafTimedMetadataId3Frame = "NONE" | "PRIV" | "TDRL";
export type CmafTimedMetadataPassthrough = "DISABLED" | "ENABLED";
export interface ColorCorrection {
  InputColorSpace: ColorSpace;
  OutputColorSpace: ColorSpace;
  Uri: string;
}
export interface ColorCorrectionSettings {
  GlobalColorCorrections: Array<ColorCorrection>;
}
export type ColorSpace = "HDR10" | "HLG_2020" | "REC_601" | "REC_709";
export interface ColorSpacePassthroughSettings {
}
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export type ContentType = "image_jpeg";
export interface CreateChannelPlacementGroupRequest {
  ClusterId: string;
  Name?: string;
  Nodes?: Array<string>;
  RequestId?: string;
  Tags?: Record<string, string>;
}
export interface CreateChannelPlacementGroupResponse {
  Arn?: string;
  Channels?: Array<string>;
  ClusterId?: string;
  Id?: string;
  Name?: string;
  Nodes?: Array<string>;
  State?: ChannelPlacementGroupState;
}
export interface CreateChannelRequest {
  CdiInputSpecification?: CdiInputSpecification;
  ChannelClass?: ChannelClass;
  Destinations?: Array<OutputDestination>;
  EncoderSettings?: EncoderSettings;
  InputAttachments?: Array<InputAttachment>;
  InputSpecification?: InputSpecification;
  LogLevel?: LogLevel;
  Maintenance?: MaintenanceCreateSettings;
  Name?: string;
  RequestId?: string;
  Reserved?: string;
  RoleArn?: string;
  Tags?: Record<string, string>;
  Vpc?: VpcOutputSettings;
  AnywhereSettings?: AnywhereSettings;
  ChannelEngineVersion?: ChannelEngineVersionRequest;
  DryRun?: boolean;
}
export interface CreateChannelResponse {
  Channel?: Channel;
}
export interface CreateCloudWatchAlarmTemplateGroupRequest {
  Description?: string;
  Name: string;
  Tags?: Record<string, string>;
  RequestId?: string;
}
export interface CreateCloudWatchAlarmTemplateGroupResponse {
  Arn?: string;
  CreatedAt?: Date | string;
  Description?: string;
  Id?: string;
  ModifiedAt?: Date | string;
  Name?: string;
  Tags?: Record<string, string>;
}
export interface CreateCloudWatchAlarmTemplateRequest {
  ComparisonOperator: CloudWatchAlarmTemplateComparisonOperator;
  DatapointsToAlarm?: number;
  Description?: string;
  EvaluationPeriods: number;
  GroupIdentifier: string;
  MetricName: string;
  Name: string;
  Period: number;
  Statistic: CloudWatchAlarmTemplateStatistic;
  Tags?: Record<string, string>;
  TargetResourceType: CloudWatchAlarmTemplateTargetResourceType;
  Threshold: number;
  TreatMissingData: CloudWatchAlarmTemplateTreatMissingData;
  RequestId?: string;
}
export interface CreateCloudWatchAlarmTemplateResponse {
  Arn?: string;
  ComparisonOperator?: CloudWatchAlarmTemplateComparisonOperator;
  CreatedAt?: Date | string;
  DatapointsToAlarm?: number;
  Description?: string;
  EvaluationPeriods?: number;
  GroupId?: string;
  Id?: string;
  MetricName?: string;
  ModifiedAt?: Date | string;
  Name?: string;
  Period?: number;
  Statistic?: CloudWatchAlarmTemplateStatistic;
  Tags?: Record<string, string>;
  TargetResourceType?: CloudWatchAlarmTemplateTargetResourceType;
  Threshold?: number;
  TreatMissingData?: CloudWatchAlarmTemplateTreatMissingData;
}
export interface CreateClusterRequest {
  ClusterType?: ClusterType;
  InstanceRoleArn?: string;
  Name?: string;
  NetworkSettings?: ClusterNetworkSettingsCreateRequest;
  RequestId?: string;
  Tags?: Record<string, string>;
}
export interface CreateClusterResponse {
  Arn?: string;
  ChannelIds?: Array<string>;
  ClusterType?: ClusterType;
  Id?: string;
  InstanceRoleArn?: string;
  Name?: string;
  NetworkSettings?: ClusterNetworkSettings;
  State?: ClusterState;
}
export interface CreateEventBridgeRuleTemplateGroupRequest {
  Description?: string;
  Name: string;
  Tags?: Record<string, string>;
  RequestId?: string;
}
export interface CreateEventBridgeRuleTemplateGroupResponse {
  Arn?: string;
  CreatedAt?: Date | string;
  Description?: string;
  Id?: string;
  ModifiedAt?: Date | string;
  Name?: string;
  Tags?: Record<string, string>;
}
export interface CreateEventBridgeRuleTemplateRequest {
  Description?: string;
  EventTargets?: Array<EventBridgeRuleTemplateTarget>;
  EventType: EventBridgeRuleTemplateEventType;
  GroupIdentifier: string;
  Name: string;
  Tags?: Record<string, string>;
  RequestId?: string;
}
export interface CreateEventBridgeRuleTemplateResponse {
  Arn?: string;
  CreatedAt?: Date | string;
  Description?: string;
  EventTargets?: Array<EventBridgeRuleTemplateTarget>;
  EventType?: EventBridgeRuleTemplateEventType;
  GroupId?: string;
  Id?: string;
  ModifiedAt?: Date | string;
  Name?: string;
  Tags?: Record<string, string>;
}
export interface CreateInputRequest {
  Destinations?: Array<InputDestinationRequest>;
  InputDevices?: Array<InputDeviceSettings>;
  InputSecurityGroups?: Array<string>;
  MediaConnectFlows?: Array<MediaConnectFlowRequest>;
  Name?: string;
  RequestId?: string;
  RoleArn?: string;
  Sources?: Array<InputSourceRequest>;
  Tags?: Record<string, string>;
  Type?: InputType;
  Vpc?: InputVpcRequest;
  SrtSettings?: SrtSettingsRequest;
  InputNetworkLocation?: InputNetworkLocation;
  MulticastSettings?: MulticastSettingsCreateRequest;
  Smpte2110ReceiverGroupSettings?: Smpte2110ReceiverGroupSettings;
  SdiSources?: Array<string>;
}
export interface CreateInputResponse {
  Input?: Input;
}
export interface CreateInputSecurityGroupRequest {
  Tags?: Record<string, string>;
  WhitelistRules?: Array<InputWhitelistRuleCidr>;
}
export interface CreateInputSecurityGroupResponse {
  SecurityGroup?: InputSecurityGroup;
}
export interface CreateMultiplexProgramRequest {
  MultiplexId: string;
  MultiplexProgramSettings: MultiplexProgramSettings;
  ProgramName: string;
  RequestId: string;
}
export interface CreateMultiplexProgramResponse {
  MultiplexProgram?: MultiplexProgram;
}
export interface CreateMultiplexRequest {
  AvailabilityZones: Array<string>;
  MultiplexSettings: MultiplexSettings;
  Name: string;
  RequestId: string;
  Tags?: Record<string, string>;
}
export interface CreateMultiplexResponse {
  Multiplex?: Multiplex;
}
export interface CreateNetworkRequest {
  IpPools?: Array<IpPoolCreateRequest>;
  Name?: string;
  RequestId?: string;
  Routes?: Array<RouteCreateRequest>;
  Tags?: Record<string, string>;
}
export interface CreateNetworkResponse {
  Arn?: string;
  AssociatedClusterIds?: Array<string>;
  Id?: string;
  IpPools?: Array<IpPool>;
  Name?: string;
  Routes?: Array<Route>;
  State?: NetworkState;
}
export interface CreateNodeRegistrationScriptRequest {
  ClusterId: string;
  Id?: string;
  Name?: string;
  NodeInterfaceMappings?: Array<NodeInterfaceMapping>;
  RequestId?: string;
  Role?: NodeRole;
}
export interface CreateNodeRegistrationScriptResponse {
  NodeRegistrationScript?: string;
}
export interface CreateNodeRequest {
  ClusterId: string;
  Name?: string;
  NodeInterfaceMappings?: Array<NodeInterfaceMappingCreateRequest>;
  RequestId?: string;
  Role?: NodeRole;
  Tags?: Record<string, string>;
}
export interface CreateNodeResponse {
  Arn?: string;
  ChannelPlacementGroups?: Array<string>;
  ClusterId?: string;
  ConnectionState?: NodeConnectionState;
  Id?: string;
  InstanceArn?: string;
  Name?: string;
  NodeInterfaceMappings?: Array<NodeInterfaceMapping>;
  Role?: NodeRole;
  State?: NodeState;
  SdiSourceMappings?: Array<SdiSourceMapping>;
}
export interface CreatePartnerInputRequest {
  InputId: string;
  RequestId?: string;
  Tags?: Record<string, string>;
}
export interface CreatePartnerInputResponse {
  Input?: Input;
}
export interface CreateSdiSourceRequest {
  Mode?: SdiSourceMode;
  Name?: string;
  RequestId?: string;
  Tags?: Record<string, string>;
  Type?: SdiSourceType;
}
export interface CreateSdiSourceResponse {
  SdiSource?: SdiSource;
}
export interface CreateSignalMapRequest {
  CloudWatchAlarmTemplateGroupIdentifiers?: Array<string>;
  Description?: string;
  DiscoveryEntryPointArn: string;
  EventBridgeRuleTemplateGroupIdentifiers?: Array<string>;
  Name: string;
  Tags?: Record<string, string>;
  RequestId?: string;
}
export interface CreateSignalMapResponse {
  Arn?: string;
  CloudWatchAlarmTemplateGroupIds?: Array<string>;
  CreatedAt?: Date | string;
  Description?: string;
  DiscoveryEntryPointArn?: string;
  ErrorMessage?: string;
  EventBridgeRuleTemplateGroupIds?: Array<string>;
  FailedMediaResourceMap?: Record<string, MediaResource>;
  Id?: string;
  LastDiscoveredAt?: Date | string;
  LastSuccessfulMonitorDeployment?: SuccessfulMonitorDeployment;
  MediaResourceMap?: Record<string, MediaResource>;
  ModifiedAt?: Date | string;
  MonitorChangesPendingDeployment?: boolean;
  MonitorDeployment?: MonitorDeployment;
  Name?: string;
  Status?: SignalMapStatus;
  Tags?: Record<string, string>;
}
export interface CreateTagsRequest {
  ResourceArn: string;
  Tags?: Record<string, string>;
}
export type DashRoleAudio = "ALTERNATE" | "COMMENTARY" | "DESCRIPTION" | "DUB" | "EMERGENCY" | "ENHANCED_AUDIO_INTELLIGIBILITY" | "KARAOKE" | "MAIN" | "SUPPLEMENTARY";
export type DashRoleCaption = "ALTERNATE" | "CAPTION" | "COMMENTARY" | "DESCRIPTION" | "DUB" | "EASYREADER" | "EMERGENCY" | "FORCED_SUBTITLE" | "KARAOKE" | "MAIN" | "METADATA" | "SUBTITLE" | "SUPPLEMENTARY";
export interface DeleteChannelPlacementGroupRequest {
  ChannelPlacementGroupId: string;
  ClusterId: string;
}
export interface DeleteChannelPlacementGroupResponse {
  Arn?: string;
  Channels?: Array<string>;
  ClusterId?: string;
  Id?: string;
  Name?: string;
  Nodes?: Array<string>;
  State?: ChannelPlacementGroupState;
}
export interface DeleteChannelRequest {
  ChannelId: string;
}
export interface DeleteChannelResponse {
  Arn?: string;
  CdiInputSpecification?: CdiInputSpecification;
  ChannelClass?: ChannelClass;
  Destinations?: Array<OutputDestination>;
  EgressEndpoints?: Array<ChannelEgressEndpoint>;
  EncoderSettings?: EncoderSettings;
  Id?: string;
  InputAttachments?: Array<InputAttachment>;
  InputSpecification?: InputSpecification;
  LogLevel?: LogLevel;
  Maintenance?: MaintenanceStatus;
  Name?: string;
  PipelineDetails?: Array<PipelineDetail>;
  PipelinesRunningCount?: number;
  RoleArn?: string;
  State?: ChannelState;
  Tags?: Record<string, string>;
  Vpc?: VpcOutputSettingsDescription;
  AnywhereSettings?: DescribeAnywhereSettings;
  ChannelEngineVersion?: ChannelEngineVersionResponse;
}
export interface DeleteCloudWatchAlarmTemplateGroupRequest {
  Identifier: string;
}
export interface DeleteCloudWatchAlarmTemplateRequest {
  Identifier: string;
}
export interface DeleteClusterRequest {
  ClusterId: string;
}
export interface DeleteClusterResponse {
  Arn?: string;
  ChannelIds?: Array<string>;
  ClusterType?: ClusterType;
  Id?: string;
  InstanceRoleArn?: string;
  Name?: string;
  NetworkSettings?: ClusterNetworkSettings;
  State?: ClusterState;
}
export interface DeleteEventBridgeRuleTemplateGroupRequest {
  Identifier: string;
}
export interface DeleteEventBridgeRuleTemplateRequest {
  Identifier: string;
}
export interface DeleteInputRequest {
  InputId: string;
}
export interface DeleteInputResponse {
}
export interface DeleteInputSecurityGroupRequest {
  InputSecurityGroupId: string;
}
export interface DeleteInputSecurityGroupResponse {
}
export interface DeleteMultiplexProgramRequest {
  MultiplexId: string;
  ProgramName: string;
}
export interface DeleteMultiplexProgramResponse {
  ChannelId?: string;
  MultiplexProgramSettings?: MultiplexProgramSettings;
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;
  PipelineDetails?: Array<MultiplexProgramPipelineDetail>;
  ProgramName?: string;
}
export interface DeleteMultiplexRequest {
  MultiplexId: string;
}
export interface DeleteMultiplexResponse {
  Arn?: string;
  AvailabilityZones?: Array<string>;
  Destinations?: Array<MultiplexOutputDestination>;
  Id?: string;
  MultiplexSettings?: MultiplexSettings;
  Name?: string;
  PipelinesRunningCount?: number;
  ProgramCount?: number;
  State?: MultiplexState;
  Tags?: Record<string, string>;
}
export interface DeleteNetworkRequest {
  NetworkId: string;
}
export interface DeleteNetworkResponse {
  Arn?: string;
  AssociatedClusterIds?: Array<string>;
  Id?: string;
  IpPools?: Array<IpPool>;
  Name?: string;
  Routes?: Array<Route>;
  State?: NetworkState;
}
export interface DeleteNodeRequest {
  ClusterId: string;
  NodeId: string;
}
export interface DeleteNodeResponse {
  Arn?: string;
  ChannelPlacementGroups?: Array<string>;
  ClusterId?: string;
  ConnectionState?: NodeConnectionState;
  Id?: string;
  InstanceArn?: string;
  Name?: string;
  NodeInterfaceMappings?: Array<NodeInterfaceMapping>;
  Role?: NodeRole;
  State?: NodeState;
  SdiSourceMappings?: Array<SdiSourceMapping>;
}
export interface DeleteReservationRequest {
  ReservationId: string;
}
export interface DeleteReservationResponse {
  Arn?: string;
  Count?: number;
  CurrencyCode?: string;
  Duration?: number;
  DurationUnits?: OfferingDurationUnits;
  End?: string;
  FixedPrice?: number;
  Name?: string;
  OfferingDescription?: string;
  OfferingId?: string;
  OfferingType?: OfferingType;
  Region?: string;
  RenewalSettings?: RenewalSettings;
  ReservationId?: string;
  ResourceSpecification?: ReservationResourceSpecification;
  Start?: string;
  State?: ReservationState;
  Tags?: Record<string, string>;
  UsagePrice?: number;
}
export interface DeleteScheduleRequest {
  ChannelId: string;
}
export interface DeleteScheduleResponse {
}
export interface DeleteSdiSourceRequest {
  SdiSourceId: string;
}
export interface DeleteSdiSourceResponse {
  SdiSource?: SdiSource;
}
export interface DeleteSignalMapRequest {
  Identifier: string;
}
export interface DeleteTagsRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface DescribeAccountConfigurationRequest {
}
export interface DescribeAccountConfigurationResponse {
  AccountConfiguration?: AccountConfiguration;
}
export interface DescribeAnywhereSettings {
  ChannelPlacementGroupId?: string;
  ClusterId?: string;
}
export interface DescribeChannelPlacementGroupRequest {
  ChannelPlacementGroupId: string;
  ClusterId: string;
}
export interface DescribeChannelPlacementGroupResponse {
  Arn?: string;
  Channels?: Array<string>;
  ClusterId?: string;
  Id?: string;
  Name?: string;
  Nodes?: Array<string>;
  State?: ChannelPlacementGroupState;
}
export interface DescribeChannelPlacementGroupSummary {
  Arn?: string;
  Channels?: Array<string>;
  ClusterId?: string;
  Id?: string;
  Name?: string;
  Nodes?: Array<string>;
  State?: ChannelPlacementGroupState;
}
export interface DescribeChannelRequest {
  ChannelId: string;
}
export interface DescribeChannelResponse {
  Arn?: string;
  CdiInputSpecification?: CdiInputSpecification;
  ChannelClass?: ChannelClass;
  Destinations?: Array<OutputDestination>;
  EgressEndpoints?: Array<ChannelEgressEndpoint>;
  EncoderSettings?: EncoderSettings;
  Id?: string;
  InputAttachments?: Array<InputAttachment>;
  InputSpecification?: InputSpecification;
  LogLevel?: LogLevel;
  Maintenance?: MaintenanceStatus;
  Name?: string;
  PipelineDetails?: Array<PipelineDetail>;
  PipelinesRunningCount?: number;
  RoleArn?: string;
  State?: ChannelState;
  Tags?: Record<string, string>;
  Vpc?: VpcOutputSettingsDescription;
  AnywhereSettings?: DescribeAnywhereSettings;
  ChannelEngineVersion?: ChannelEngineVersionResponse;
}
export interface DescribeClusterRequest {
  ClusterId: string;
}
export interface DescribeClusterResponse {
  Arn?: string;
  ChannelIds?: Array<string>;
  ClusterType?: ClusterType;
  Id?: string;
  InstanceRoleArn?: string;
  Name?: string;
  NetworkSettings?: ClusterNetworkSettings;
  State?: ClusterState;
}
export interface DescribeClusterSummary {
  Arn?: string;
  ChannelIds?: Array<string>;
  ClusterType?: ClusterType;
  Id?: string;
  InstanceRoleArn?: string;
  Name?: string;
  NetworkSettings?: ClusterNetworkSettings;
  State?: ClusterState;
}
export interface DescribeInputDeviceRequest {
  InputDeviceId: string;
}
export interface DescribeInputDeviceResponse {
  Arn?: string;
  ConnectionState?: InputDeviceConnectionState;
  DeviceSettingsSyncState?: DeviceSettingsSyncState;
  DeviceUpdateStatus?: DeviceUpdateStatus;
  HdDeviceSettings?: InputDeviceHdSettings;
  Id?: string;
  MacAddress?: string;
  Name?: string;
  NetworkSettings?: InputDeviceNetworkSettings;
  SerialNumber?: string;
  Type?: InputDeviceType;
  UhdDeviceSettings?: InputDeviceUhdSettings;
  Tags?: Record<string, string>;
  AvailabilityZone?: string;
  MedialiveInputArns?: Array<string>;
  OutputType?: InputDeviceOutputType;
}
export interface DescribeInputDeviceThumbnailRequest {
  InputDeviceId: string;
  Accept: AcceptHeader;
}
export interface DescribeInputDeviceThumbnailResponse {
  Body?: Uint8Array | string;
  ContentType?: ContentType;
  ContentLength?: number;
  ETag?: string;
  LastModified?: Date | string;
}
export interface DescribeInputRequest {
  InputId: string;
}
export interface DescribeInputResponse {
  Arn?: string;
  AttachedChannels?: Array<string>;
  Destinations?: Array<InputDestination>;
  Id?: string;
  InputClass?: InputClass;
  InputDevices?: Array<InputDeviceSettings>;
  InputPartnerIds?: Array<string>;
  InputSourceType?: InputSourceType;
  MediaConnectFlows?: Array<MediaConnectFlow>;
  Name?: string;
  RoleArn?: string;
  SecurityGroups?: Array<string>;
  Sources?: Array<InputSource>;
  State?: InputState;
  Tags?: Record<string, string>;
  Type?: InputType;
  SrtSettings?: SrtSettings;
  InputNetworkLocation?: InputNetworkLocation;
  MulticastSettings?: MulticastSettings;
  Smpte2110ReceiverGroupSettings?: Smpte2110ReceiverGroupSettings;
  SdiSources?: Array<string>;
}
export interface DescribeInputSecurityGroupRequest {
  InputSecurityGroupId: string;
}
export interface DescribeInputSecurityGroupResponse {
  Arn?: string;
  Id?: string;
  Inputs?: Array<string>;
  State?: InputSecurityGroupState;
  Tags?: Record<string, string>;
  WhitelistRules?: Array<InputWhitelistRule>;
}
export interface DescribeMultiplexProgramRequest {
  MultiplexId: string;
  ProgramName: string;
}
export interface DescribeMultiplexProgramResponse {
  ChannelId?: string;
  MultiplexProgramSettings?: MultiplexProgramSettings;
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;
  PipelineDetails?: Array<MultiplexProgramPipelineDetail>;
  ProgramName?: string;
}
export interface DescribeMultiplexRequest {
  MultiplexId: string;
}
export interface DescribeMultiplexResponse {
  Arn?: string;
  AvailabilityZones?: Array<string>;
  Destinations?: Array<MultiplexOutputDestination>;
  Id?: string;
  MultiplexSettings?: MultiplexSettings;
  Name?: string;
  PipelinesRunningCount?: number;
  ProgramCount?: number;
  State?: MultiplexState;
  Tags?: Record<string, string>;
}
export interface DescribeNetworkRequest {
  NetworkId: string;
}
export interface DescribeNetworkResponse {
  Arn?: string;
  AssociatedClusterIds?: Array<string>;
  Id?: string;
  IpPools?: Array<IpPool>;
  Name?: string;
  Routes?: Array<Route>;
  State?: NetworkState;
}
export interface DescribeNetworkSummary {
  Arn?: string;
  AssociatedClusterIds?: Array<string>;
  Id?: string;
  IpPools?: Array<IpPool>;
  Name?: string;
  Routes?: Array<Route>;
  State?: NetworkState;
}
export interface DescribeNodeRequest {
  ClusterId: string;
  NodeId: string;
}
export interface DescribeNodeResponse {
  Arn?: string;
  ChannelPlacementGroups?: Array<string>;
  ClusterId?: string;
  ConnectionState?: NodeConnectionState;
  Id?: string;
  InstanceArn?: string;
  Name?: string;
  NodeInterfaceMappings?: Array<NodeInterfaceMapping>;
  Role?: NodeRole;
  State?: NodeState;
  SdiSourceMappings?: Array<SdiSourceMapping>;
}
export interface DescribeNodeSummary {
  Arn?: string;
  ChannelPlacementGroups?: Array<string>;
  ClusterId?: string;
  ConnectionState?: NodeConnectionState;
  Id?: string;
  InstanceArn?: string;
  ManagedInstanceId?: string;
  Name?: string;
  NodeInterfaceMappings?: Array<NodeInterfaceMapping>;
  Role?: NodeRole;
  State?: NodeState;
  SdiSourceMappings?: Array<SdiSourceMapping>;
}
export interface DescribeOfferingRequest {
  OfferingId: string;
}
export interface DescribeOfferingResponse {
  Arn?: string;
  CurrencyCode?: string;
  Duration?: number;
  DurationUnits?: OfferingDurationUnits;
  FixedPrice?: number;
  OfferingDescription?: string;
  OfferingId?: string;
  OfferingType?: OfferingType;
  Region?: string;
  ResourceSpecification?: ReservationResourceSpecification;
  UsagePrice?: number;
}
export interface DescribeReservationRequest {
  ReservationId: string;
}
export interface DescribeReservationResponse {
  Arn?: string;
  Count?: number;
  CurrencyCode?: string;
  Duration?: number;
  DurationUnits?: OfferingDurationUnits;
  End?: string;
  FixedPrice?: number;
  Name?: string;
  OfferingDescription?: string;
  OfferingId?: string;
  OfferingType?: OfferingType;
  Region?: string;
  RenewalSettings?: RenewalSettings;
  ReservationId?: string;
  ResourceSpecification?: ReservationResourceSpecification;
  Start?: string;
  State?: ReservationState;
  Tags?: Record<string, string>;
  UsagePrice?: number;
}
export interface DescribeScheduleRequest {
  ChannelId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface DescribeScheduleResponse {
  NextToken?: string;
  ScheduleActions?: Array<ScheduleAction>;
}
export interface DescribeSdiSourceRequest {
  SdiSourceId: string;
}
export interface DescribeSdiSourceResponse {
  SdiSource?: SdiSource;
}
export interface DescribeThumbnailsRequest {
  ChannelId: string;
  PipelineId: string;
  ThumbnailType: string;
}
export interface DescribeThumbnailsResponse {
  ThumbnailDetails?: Array<ThumbnailDetail>;
}
export type DeviceSettingsSyncState = "SYNCED" | "SYNCING";
export type DeviceUpdateStatus = "UP_TO_DATE" | "NOT_UP_TO_DATE" | "UPDATING";
export type DolbyEProgramSelection = "ALL_CHANNELS" | "PROGRAM_1" | "PROGRAM_2" | "PROGRAM_3" | "PROGRAM_4" | "PROGRAM_5" | "PROGRAM_6" | "PROGRAM_7" | "PROGRAM_8";
export interface DolbyVision81Settings {
}
export type DvbDashAccessibility = "DVBDASH_1_VISUALLY_IMPAIRED" | "DVBDASH_2_HARD_OF_HEARING" | "DVBDASH_3_SUPPLEMENTAL_COMMENTARY" | "DVBDASH_4_DIRECTORS_COMMENTARY" | "DVBDASH_5_EDUCATIONAL_NOTES" | "DVBDASH_6_MAIN_PROGRAM" | "DVBDASH_7_CLEAN_FEED";
export interface DvbNitSettings {
  NetworkId: number;
  NetworkName: string;
  RepInterval?: number;
}
export type DvbSdtOutputSdt = "SDT_FOLLOW" | "SDT_FOLLOW_IF_PRESENT" | "SDT_MANUAL" | "SDT_NONE";
export interface DvbSdtSettings {
  OutputSdt?: DvbSdtOutputSdt;
  RepInterval?: number;
  ServiceName?: string;
  ServiceProviderName?: string;
}
export type DvbSubDestinationAlignment = "CENTERED" | "LEFT" | "SMART";
export type DvbSubDestinationBackgroundColor = "BLACK" | "NONE" | "WHITE";
export type DvbSubDestinationFontColor = "BLACK" | "BLUE" | "GREEN" | "RED" | "WHITE" | "YELLOW";
export type DvbSubDestinationOutlineColor = "BLACK" | "BLUE" | "GREEN" | "RED" | "WHITE" | "YELLOW";
export interface DvbSubDestinationSettings {
  Alignment?: DvbSubDestinationAlignment;
  BackgroundColor?: DvbSubDestinationBackgroundColor;
  BackgroundOpacity?: number;
  Font?: InputLocation;
  FontColor?: DvbSubDestinationFontColor;
  FontOpacity?: number;
  FontResolution?: number;
  FontSize?: string;
  OutlineColor?: DvbSubDestinationOutlineColor;
  OutlineSize?: number;
  ShadowColor?: DvbSubDestinationShadowColor;
  ShadowOpacity?: number;
  ShadowXOffset?: number;
  ShadowYOffset?: number;
  TeletextGridControl?: DvbSubDestinationTeletextGridControl;
  XPosition?: number;
  YPosition?: number;
}
export type DvbSubDestinationShadowColor = "BLACK" | "NONE" | "WHITE";
export type DvbSubDestinationTeletextGridControl = "FIXED" | "SCALED";
export type DvbSubOcrLanguage = "DEU" | "ENG" | "FRA" | "NLD" | "POR" | "SPA";
export interface DvbSubSourceSettings {
  OcrLanguage?: DvbSubOcrLanguage;
  Pid?: number;
}
export interface DvbTdtSettings {
  RepInterval?: number;
}
export type Eac3AtmosCodingMode = "CODING_MODE_5_1_4" | "CODING_MODE_7_1_4" | "CODING_MODE_9_1_6";
export type Eac3AtmosDrcLine = "FILM_LIGHT" | "FILM_STANDARD" | "MUSIC_LIGHT" | "MUSIC_STANDARD" | "NONE" | "SPEECH";
export type Eac3AtmosDrcRf = "FILM_LIGHT" | "FILM_STANDARD" | "MUSIC_LIGHT" | "MUSIC_STANDARD" | "NONE" | "SPEECH";
export interface Eac3AtmosSettings {
  Bitrate?: number;
  CodingMode?: Eac3AtmosCodingMode;
  Dialnorm?: number;
  DrcLine?: Eac3AtmosDrcLine;
  DrcRf?: Eac3AtmosDrcRf;
  HeightTrim?: number;
  SurroundTrim?: number;
}
export type Eac3AttenuationControl = "ATTENUATE_3_DB" | "NONE";
export type Eac3BitstreamMode = "COMMENTARY" | "COMPLETE_MAIN" | "EMERGENCY" | "HEARING_IMPAIRED" | "VISUALLY_IMPAIRED";
export type Eac3CodingMode = "CODING_MODE_1_0" | "CODING_MODE_2_0" | "CODING_MODE_3_2";
export type Eac3DcFilter = "DISABLED" | "ENABLED";
export type Eac3DrcLine = "FILM_LIGHT" | "FILM_STANDARD" | "MUSIC_LIGHT" | "MUSIC_STANDARD" | "NONE" | "SPEECH";
export type Eac3DrcRf = "FILM_LIGHT" | "FILM_STANDARD" | "MUSIC_LIGHT" | "MUSIC_STANDARD" | "NONE" | "SPEECH";
export type Eac3LfeControl = "LFE" | "NO_LFE";
export type Eac3LfeFilter = "DISABLED" | "ENABLED";
export type Eac3MetadataControl = "FOLLOW_INPUT" | "USE_CONFIGURED";
export type Eac3PassthroughControl = "NO_PASSTHROUGH" | "WHEN_POSSIBLE";
export type Eac3PhaseControl = "NO_SHIFT" | "SHIFT_90_DEGREES";
export interface Eac3Settings {
  AttenuationControl?: Eac3AttenuationControl;
  Bitrate?: number;
  BitstreamMode?: Eac3BitstreamMode;
  CodingMode?: Eac3CodingMode;
  DcFilter?: Eac3DcFilter;
  Dialnorm?: number;
  DrcLine?: Eac3DrcLine;
  DrcRf?: Eac3DrcRf;
  LfeControl?: Eac3LfeControl;
  LfeFilter?: Eac3LfeFilter;
  LoRoCenterMixLevel?: number;
  LoRoSurroundMixLevel?: number;
  LtRtCenterMixLevel?: number;
  LtRtSurroundMixLevel?: number;
  MetadataControl?: Eac3MetadataControl;
  PassthroughControl?: Eac3PassthroughControl;
  PhaseControl?: Eac3PhaseControl;
  StereoDownmix?: Eac3StereoDownmix;
  SurroundExMode?: Eac3SurroundExMode;
  SurroundMode?: Eac3SurroundMode;
}
export type Eac3StereoDownmix = "DPL2" | "LO_RO" | "LT_RT" | "NOT_INDICATED";
export type Eac3SurroundExMode = "DISABLED" | "ENABLED" | "NOT_INDICATED";
export type Eac3SurroundMode = "DISABLED" | "ENABLED" | "NOT_INDICATED";
export interface EbuTtDDestinationSettings {
  CopyrightHolder?: string;
  FillLineGap?: EbuTtDFillLineGapControl;
  FontFamily?: string;
  StyleControl?: EbuTtDDestinationStyleControl;
  DefaultFontSize?: number;
  DefaultLineHeight?: number;
}
export type EbuTtDDestinationStyleControl = "EXCLUDE" | "INCLUDE";
export type EbuTtDFillLineGapControl = "DISABLED" | "ENABLED";
export type EmbeddedConvert608To708 = "DISABLED" | "UPCONVERT";
export interface EmbeddedDestinationSettings {
}
export interface EmbeddedPlusScte20DestinationSettings {
}
export type EmbeddedScte20Detection = "AUTO" | "OFF";
export interface EmbeddedSourceSettings {
  Convert608To708?: EmbeddedConvert608To708;
  Scte20Detection?: EmbeddedScte20Detection;
  Source608ChannelNumber?: number;
  Source608TrackNumber?: number;
}
export interface EncoderSettings {
  AudioDescriptions: Array<AudioDescription>;
  AvailBlanking?: AvailBlanking;
  AvailConfiguration?: AvailConfiguration;
  BlackoutSlate?: BlackoutSlate;
  CaptionDescriptions?: Array<CaptionDescription>;
  FeatureActivations?: FeatureActivations;
  GlobalConfiguration?: GlobalConfiguration;
  MotionGraphicsConfiguration?: MotionGraphicsConfiguration;
  NielsenConfiguration?: NielsenConfiguration;
  OutputGroups: Array<OutputGroup>;
  TimecodeConfig: TimecodeConfig;
  VideoDescriptions: Array<VideoDescription>;
  ThumbnailConfiguration?: ThumbnailConfiguration;
  ColorCorrectionSettings?: ColorCorrectionSettings;
}
export interface EpochLockingSettings {
  CustomEpoch?: string;
  JamSyncTime?: string;
}
export interface Esam {
  AcquisitionPointId: string;
  AdAvailOffset?: number;
  PasswordParam?: string;
  PoisEndpoint: string;
  Username?: string;
  ZoneIdentity?: string;
}
export type EventBridgeRuleTemplateEventType = "MEDIALIVE_MULTIPLEX_ALERT" | "MEDIALIVE_MULTIPLEX_STATE_CHANGE" | "MEDIALIVE_CHANNEL_ALERT" | "MEDIALIVE_CHANNEL_INPUT_CHANGE" | "MEDIALIVE_CHANNEL_STATE_CHANGE" | "MEDIAPACKAGE_INPUT_NOTIFICATION" | "MEDIAPACKAGE_KEY_PROVIDER_NOTIFICATION" | "MEDIAPACKAGE_HARVEST_JOB_NOTIFICATION" | "SIGNAL_MAP_ACTIVE_ALARM" | "MEDIACONNECT_ALERT" | "MEDIACONNECT_SOURCE_HEALTH" | "MEDIACONNECT_OUTPUT_HEALTH" | "MEDIACONNECT_FLOW_STATUS_CHANGE";
export interface EventBridgeRuleTemplateGroupSummary {
  Arn: string;
  CreatedAt: Date | string;
  Description?: string;
  Id: string;
  ModifiedAt?: Date | string;
  Name: string;
  Tags?: Record<string, string>;
  TemplateCount: number;
}
export interface EventBridgeRuleTemplateSummary {
  Arn: string;
  CreatedAt: Date | string;
  Description?: string;
  EventTargetCount: number;
  EventType: EventBridgeRuleTemplateEventType;
  GroupId: string;
  Id: string;
  ModifiedAt?: Date | string;
  Name: string;
  Tags?: Record<string, string>;
}
export interface EventBridgeRuleTemplateTarget {
  Arn: string;
}
export type FailedMediaResourceMap = Record<string, MediaResource>;
export interface FailoverCondition {
  FailoverConditionSettings?: FailoverConditionSettings;
}
export interface FailoverConditionSettings {
  AudioSilenceSettings?: AudioSilenceFailoverSettings;
  InputLossSettings?: InputLossFailoverSettings;
  VideoBlackSettings?: VideoBlackFailoverSettings;
}
export interface FeatureActivations {
  InputPrepareScheduleActions?: FeatureActivationsInputPrepareScheduleActions;
  OutputStaticImageOverlayScheduleActions?: FeatureActivationsOutputStaticImageOverlayScheduleActions;
}
export type FeatureActivationsInputPrepareScheduleActions = "DISABLED" | "ENABLED";
export type FeatureActivationsOutputStaticImageOverlayScheduleActions = "DISABLED" | "ENABLED";
export type FecOutputIncludeFec = "COLUMN" | "COLUMN_AND_ROW";
export interface FecOutputSettings {
  ColumnDepth?: number;
  IncludeFec?: FecOutputIncludeFec;
  RowLength?: number;
}
export type FixedAfd = "AFD_0000" | "AFD_0010" | "AFD_0011" | "AFD_0100" | "AFD_1000" | "AFD_1001" | "AFD_1010" | "AFD_1011" | "AFD_1101" | "AFD_1110" | "AFD_1111";
export interface FixedModeScheduleActionStartSettings {
  Time: string;
}
export interface Fmp4HlsSettings {
  AudioRenditionSets?: string;
  NielsenId3Behavior?: Fmp4NielsenId3Behavior;
  TimedMetadataBehavior?: Fmp4TimedMetadataBehavior;
}
export type Fmp4NielsenId3Behavior = "NO_PASSTHROUGH" | "PASSTHROUGH";
export type Fmp4TimedMetadataBehavior = "NO_PASSTHROUGH" | "PASSTHROUGH";
export interface FollowModeScheduleActionStartSettings {
  FollowPoint: FollowPoint;
  ReferenceActionName: string;
}
export type FollowPoint = "END" | "START";
export declare class ForbiddenException extends Data.TaggedError(
  "ForbiddenException",
)<{
  readonly Message?: string;
}> {}
export interface FrameCaptureCdnSettings {
  FrameCaptureS3Settings?: FrameCaptureS3Settings;
}
export interface FrameCaptureGroupSettings {
  Destination: OutputLocationRef;
  FrameCaptureCdnSettings?: FrameCaptureCdnSettings;
}
export interface FrameCaptureHlsSettings {
}
export type FrameCaptureIntervalUnit = "MILLISECONDS" | "SECONDS";
export interface FrameCaptureOutputSettings {
  NameModifier?: string;
}
export interface FrameCaptureS3Settings {
  CannedAcl?: S3CannedAcl;
}
export interface FrameCaptureSettings {
  CaptureInterval?: number;
  CaptureIntervalUnits?: FrameCaptureIntervalUnit;
  TimecodeBurninSettings?: TimecodeBurninSettings;
}
export declare class GatewayTimeoutException extends Data.TaggedError(
  "GatewayTimeoutException",
)<{
  readonly Message?: string;
}> {}
export interface GetCloudWatchAlarmTemplateGroupRequest {
  Identifier: string;
}
export interface GetCloudWatchAlarmTemplateGroupResponse {
  Arn?: string;
  CreatedAt?: Date | string;
  Description?: string;
  Id?: string;
  ModifiedAt?: Date | string;
  Name?: string;
  Tags?: Record<string, string>;
}
export interface GetCloudWatchAlarmTemplateRequest {
  Identifier: string;
}
export interface GetCloudWatchAlarmTemplateResponse {
  Arn?: string;
  ComparisonOperator?: CloudWatchAlarmTemplateComparisonOperator;
  CreatedAt?: Date | string;
  DatapointsToAlarm?: number;
  Description?: string;
  EvaluationPeriods?: number;
  GroupId?: string;
  Id?: string;
  MetricName?: string;
  ModifiedAt?: Date | string;
  Name?: string;
  Period?: number;
  Statistic?: CloudWatchAlarmTemplateStatistic;
  Tags?: Record<string, string>;
  TargetResourceType?: CloudWatchAlarmTemplateTargetResourceType;
  Threshold?: number;
  TreatMissingData?: CloudWatchAlarmTemplateTreatMissingData;
}
export interface GetEventBridgeRuleTemplateGroupRequest {
  Identifier: string;
}
export interface GetEventBridgeRuleTemplateGroupResponse {
  Arn?: string;
  CreatedAt?: Date | string;
  Description?: string;
  Id?: string;
  ModifiedAt?: Date | string;
  Name?: string;
  Tags?: Record<string, string>;
}
export interface GetEventBridgeRuleTemplateRequest {
  Identifier: string;
}
export interface GetEventBridgeRuleTemplateResponse {
  Arn?: string;
  CreatedAt?: Date | string;
  Description?: string;
  EventTargets?: Array<EventBridgeRuleTemplateTarget>;
  EventType?: EventBridgeRuleTemplateEventType;
  GroupId?: string;
  Id?: string;
  ModifiedAt?: Date | string;
  Name?: string;
  Tags?: Record<string, string>;
}
export interface GetSignalMapRequest {
  Identifier: string;
}
export interface GetSignalMapResponse {
  Arn?: string;
  CloudWatchAlarmTemplateGroupIds?: Array<string>;
  CreatedAt?: Date | string;
  Description?: string;
  DiscoveryEntryPointArn?: string;
  ErrorMessage?: string;
  EventBridgeRuleTemplateGroupIds?: Array<string>;
  FailedMediaResourceMap?: Record<string, MediaResource>;
  Id?: string;
  LastDiscoveredAt?: Date | string;
  LastSuccessfulMonitorDeployment?: SuccessfulMonitorDeployment;
  MediaResourceMap?: Record<string, MediaResource>;
  ModifiedAt?: Date | string;
  MonitorChangesPendingDeployment?: boolean;
  MonitorDeployment?: MonitorDeployment;
  Name?: string;
  Status?: SignalMapStatus;
  Tags?: Record<string, string>;
}
export interface GlobalConfiguration {
  InitialAudioGain?: number;
  InputEndAction?: GlobalConfigurationInputEndAction;
  InputLossBehavior?: InputLossBehavior;
  OutputLockingMode?: GlobalConfigurationOutputLockingMode;
  OutputTimingSource?: GlobalConfigurationOutputTimingSource;
  SupportLowFramerateInputs?: GlobalConfigurationLowFramerateInputs;
  OutputLockingSettings?: OutputLockingSettings;
}
export type GlobalConfigurationInputEndAction = "NONE" | "SWITCH_AND_LOOP_INPUTS";
export type GlobalConfigurationLowFramerateInputs = "DISABLED" | "ENABLED";
export type GlobalConfigurationOutputLockingMode = "EPOCH_LOCKING" | "PIPELINE_LOCKING" | "DISABLED";
export type GlobalConfigurationOutputTimingSource = "INPUT_CLOCK" | "SYSTEM_CLOCK";
export type H264AdaptiveQuantization = "AUTO" | "HIGH" | "HIGHER" | "LOW" | "MAX" | "MEDIUM" | "OFF";
export type H264ColorMetadata = "IGNORE" | "INSERT";
export interface H264ColorSpaceSettings {
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;
  Rec601Settings?: Rec601Settings;
  Rec709Settings?: Rec709Settings;
}
export type H264EntropyEncoding = "CABAC" | "CAVLC";
export interface H264FilterSettings {
  TemporalFilterSettings?: TemporalFilterSettings;
  BandwidthReductionFilterSettings?: BandwidthReductionFilterSettings;
}
export type H264FlickerAq = "DISABLED" | "ENABLED";
export type H264ForceFieldPictures = "DISABLED" | "ENABLED";
export type H264FramerateControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type H264GopBReference = "DISABLED" | "ENABLED";
export type H264GopSizeUnits = "FRAMES" | "SECONDS";
export type H264Level = "H264_LEVEL_1" | "H264_LEVEL_1_1" | "H264_LEVEL_1_2" | "H264_LEVEL_1_3" | "H264_LEVEL_2" | "H264_LEVEL_2_1" | "H264_LEVEL_2_2" | "H264_LEVEL_3" | "H264_LEVEL_3_1" | "H264_LEVEL_3_2" | "H264_LEVEL_4" | "H264_LEVEL_4_1" | "H264_LEVEL_4_2" | "H264_LEVEL_5" | "H264_LEVEL_5_1" | "H264_LEVEL_5_2" | "H264_LEVEL_AUTO";
export type H264LookAheadRateControl = "HIGH" | "LOW" | "MEDIUM";
export type H264ParControl = "INITIALIZE_FROM_SOURCE" | "SPECIFIED";
export type H264Profile = "BASELINE" | "HIGH" | "HIGH_10BIT" | "HIGH_422" | "HIGH_422_10BIT" | "MAIN";
export type H264QualityLevel = "ENHANCED_QUALITY" | "STANDARD_QUALITY";
export type H264RateControlMode = "CBR" | "MULTIPLEX" | "QVBR" | "VBR";
export type H264ScanType = "INTERLACED" | "PROGRESSIVE";
export type H264SceneChangeDetect = "DISABLED" | "ENABLED";
export interface H264Settings {
  AdaptiveQuantization?: H264AdaptiveQuantization;
  AfdSignaling?: AfdSignaling;
  Bitrate?: number;
  BufFillPct?: number;
  BufSize?: number;
  ColorMetadata?: H264ColorMetadata;
  ColorSpaceSettings?: H264ColorSpaceSettings;
  EntropyEncoding?: H264EntropyEncoding;
  FilterSettings?: H264FilterSettings;
  FixedAfd?: FixedAfd;
  FlickerAq?: H264FlickerAq;
  ForceFieldPictures?: H264ForceFieldPictures;
  FramerateControl?: H264FramerateControl;
  FramerateDenominator?: number;
  FramerateNumerator?: number;
  GopBReference?: H264GopBReference;
  GopClosedCadence?: number;
  GopNumBFrames?: number;
  GopSize?: number;
  GopSizeUnits?: H264GopSizeUnits;
  Level?: H264Level;
  LookAheadRateControl?: H264LookAheadRateControl;
  MaxBitrate?: number;
  MinIInterval?: number;
  NumRefFrames?: number;
  ParControl?: H264ParControl;
  ParDenominator?: number;
  ParNumerator?: number;
  Profile?: H264Profile;
  QualityLevel?: H264QualityLevel;
  QvbrQualityLevel?: number;
  RateControlMode?: H264RateControlMode;
  ScanType?: H264ScanType;
  SceneChangeDetect?: H264SceneChangeDetect;
  Slices?: number;
  Softness?: number;
  SpatialAq?: H264SpatialAq;
  SubgopLength?: H264SubGopLength;
  Syntax?: H264Syntax;
  TemporalAq?: H264TemporalAq;
  TimecodeInsertion?: H264TimecodeInsertionBehavior;
  TimecodeBurninSettings?: TimecodeBurninSettings;
  MinQp?: number;
}
export type H264SpatialAq = "DISABLED" | "ENABLED";
export type H264SubGopLength = "DYNAMIC" | "FIXED";
export type H264Syntax = "DEFAULT" | "RP2027";
export type H264TemporalAq = "DISABLED" | "ENABLED";
export type H264TimecodeInsertionBehavior = "DISABLED" | "PIC_TIMING_SEI";
export type H265AdaptiveQuantization = "AUTO" | "HIGH" | "HIGHER" | "LOW" | "MAX" | "MEDIUM" | "OFF";
export type H265AlternativeTransferFunction = "INSERT" | "OMIT";
export type H265ColorMetadata = "IGNORE" | "INSERT";
export interface H265ColorSpaceSettings {
  ColorSpacePassthroughSettings?: ColorSpacePassthroughSettings;
  DolbyVision81Settings?: DolbyVision81Settings;
  Hdr10Settings?: Hdr10Settings;
  Rec601Settings?: Rec601Settings;
  Rec709Settings?: Rec709Settings;
}
export type H265Deblocking = "DISABLED" | "ENABLED";
export interface H265FilterSettings {
  TemporalFilterSettings?: TemporalFilterSettings;
  BandwidthReductionFilterSettings?: BandwidthReductionFilterSettings;
}
export type H265FlickerAq = "DISABLED" | "ENABLED";
export type H265GopSizeUnits = "FRAMES" | "SECONDS";
export type H265Level = "H265_LEVEL_1" | "H265_LEVEL_2" | "H265_LEVEL_2_1" | "H265_LEVEL_3" | "H265_LEVEL_3_1" | "H265_LEVEL_4" | "H265_LEVEL_4_1" | "H265_LEVEL_5" | "H265_LEVEL_5_1" | "H265_LEVEL_5_2" | "H265_LEVEL_6" | "H265_LEVEL_6_1" | "H265_LEVEL_6_2" | "H265_LEVEL_AUTO";
export type H265LookAheadRateControl = "HIGH" | "LOW" | "MEDIUM";
export type H265MvOverPictureBoundaries = "DISABLED" | "ENABLED";
export type H265MvTemporalPredictor = "DISABLED" | "ENABLED";
export type H265Profile = "MAIN" | "MAIN_10BIT";
export type H265RateControlMode = "CBR" | "MULTIPLEX" | "QVBR";
export type H265ScanType = "INTERLACED" | "PROGRESSIVE";
export type H265SceneChangeDetect = "DISABLED" | "ENABLED";
export interface H265Settings {
  AdaptiveQuantization?: H265AdaptiveQuantization;
  AfdSignaling?: AfdSignaling;
  AlternativeTransferFunction?: H265AlternativeTransferFunction;
  Bitrate?: number;
  BufSize?: number;
  ColorMetadata?: H265ColorMetadata;
  ColorSpaceSettings?: H265ColorSpaceSettings;
  FilterSettings?: H265FilterSettings;
  FixedAfd?: FixedAfd;
  FlickerAq?: H265FlickerAq;
  FramerateDenominator: number;
  FramerateNumerator: number;
  GopClosedCadence?: number;
  GopSize?: number;
  GopSizeUnits?: H265GopSizeUnits;
  Level?: H265Level;
  LookAheadRateControl?: H265LookAheadRateControl;
  MaxBitrate?: number;
  MinIInterval?: number;
  ParDenominator?: number;
  ParNumerator?: number;
  Profile?: H265Profile;
  QvbrQualityLevel?: number;
  RateControlMode?: H265RateControlMode;
  ScanType?: H265ScanType;
  SceneChangeDetect?: H265SceneChangeDetect;
  Slices?: number;
  Tier?: H265Tier;
  TimecodeInsertion?: H265TimecodeInsertionBehavior;
  TimecodeBurninSettings?: TimecodeBurninSettings;
  MvOverPictureBoundaries?: H265MvOverPictureBoundaries;
  MvTemporalPredictor?: H265MvTemporalPredictor;
  TileHeight?: number;
  TilePadding?: H265TilePadding;
  TileWidth?: number;
  TreeblockSize?: H265TreeblockSize;
  MinQp?: number;
  Deblocking?: H265Deblocking;
}
export type H265Tier = "HIGH" | "MAIN";
export type H265TilePadding = "NONE" | "PADDED";
export type H265TimecodeInsertionBehavior = "DISABLED" | "PIC_TIMING_SEI";
export type H265TreeblockSize = "AUTO" | "TREE_SIZE_32X32";
export interface Hdr10Settings {
  MaxCll?: number;
  MaxFall?: number;
}
export type HlsAdMarkers = "ADOBE" | "ELEMENTAL" | "ELEMENTAL_SCTE35";
export type HlsAkamaiHttpTransferMode = "CHUNKED" | "NON_CHUNKED";
export interface HlsAkamaiSettings {
  ConnectionRetryInterval?: number;
  FilecacheDuration?: number;
  HttpTransferMode?: HlsAkamaiHttpTransferMode;
  NumRetries?: number;
  RestartDelay?: number;
  Salt?: string;
  Token?: string;
}
export interface HlsBasicPutSettings {
  ConnectionRetryInterval?: number;
  FilecacheDuration?: number;
  NumRetries?: number;
  RestartDelay?: number;
}
export type HlsCaptionLanguageSetting = "INSERT" | "NONE" | "OMIT";
export interface HlsCdnSettings {
  HlsAkamaiSettings?: HlsAkamaiSettings;
  HlsBasicPutSettings?: HlsBasicPutSettings;
  HlsMediaStoreSettings?: HlsMediaStoreSettings;
  HlsS3Settings?: HlsS3Settings;
  HlsWebdavSettings?: HlsWebdavSettings;
}
export type HlsClientCache = "DISABLED" | "ENABLED";
export type HlsCodecSpecification = "RFC_4281" | "RFC_6381";
export type HlsDirectoryStructure = "SINGLE_DIRECTORY" | "SUBDIRECTORY_PER_STREAM";
export type HlsDiscontinuityTags = "INSERT" | "NEVER_INSERT";
export type HlsEncryptionType = "AES128" | "SAMPLE_AES";
export interface HlsGroupSettings {
  AdMarkers?: Array<HlsAdMarkers>;
  BaseUrlContent?: string;
  BaseUrlContent1?: string;
  BaseUrlManifest?: string;
  BaseUrlManifest1?: string;
  CaptionLanguageMappings?: Array<CaptionLanguageMapping>;
  CaptionLanguageSetting?: HlsCaptionLanguageSetting;
  ClientCache?: HlsClientCache;
  CodecSpecification?: HlsCodecSpecification;
  ConstantIv?: string;
  Destination: OutputLocationRef;
  DirectoryStructure?: HlsDirectoryStructure;
  DiscontinuityTags?: HlsDiscontinuityTags;
  EncryptionType?: HlsEncryptionType;
  HlsCdnSettings?: HlsCdnSettings;
  HlsId3SegmentTagging?: HlsId3SegmentTaggingState;
  IFrameOnlyPlaylists?: IFrameOnlyPlaylistType;
  IncompleteSegmentBehavior?: HlsIncompleteSegmentBehavior;
  IndexNSegments?: number;
  InputLossAction?: InputLossActionForHlsOut;
  IvInManifest?: HlsIvInManifest;
  IvSource?: HlsIvSource;
  KeepSegments?: number;
  KeyFormat?: string;
  KeyFormatVersions?: string;
  KeyProviderSettings?: KeyProviderSettings;
  ManifestCompression?: HlsManifestCompression;
  ManifestDurationFormat?: HlsManifestDurationFormat;
  MinSegmentLength?: number;
  Mode?: HlsMode;
  OutputSelection?: HlsOutputSelection;
  ProgramDateTime?: HlsProgramDateTime;
  ProgramDateTimeClock?: HlsProgramDateTimeClock;
  ProgramDateTimePeriod?: number;
  RedundantManifest?: HlsRedundantManifest;
  SegmentLength?: number;
  SegmentationMode?: HlsSegmentationMode;
  SegmentsPerSubdirectory?: number;
  StreamInfResolution?: HlsStreamInfResolution;
  TimedMetadataId3Frame?: HlsTimedMetadataId3Frame;
  TimedMetadataId3Period?: number;
  TimestampDeltaMilliseconds?: number;
  TsFileMode?: HlsTsFileMode;
}
export type HlsH265PackagingType = "HEV1" | "HVC1";
export interface HlsId3SegmentTaggingScheduleActionSettings {
  Tag?: string;
  Id3?: string;
}
export type HlsId3SegmentTaggingState = "DISABLED" | "ENABLED";
export type HlsIncompleteSegmentBehavior = "AUTO" | "SUPPRESS";
export interface HlsInputSettings {
  Bandwidth?: number;
  BufferSegments?: number;
  Retries?: number;
  RetryInterval?: number;
  Scte35Source?: HlsScte35SourceType;
}
export type HlsIvInManifest = "EXCLUDE" | "INCLUDE";
export type HlsIvSource = "EXPLICIT" | "FOLLOWS_SEGMENT_NUMBER";
export type HlsManifestCompression = "GZIP" | "NONE";
export type HlsManifestDurationFormat = "FLOATING_POINT" | "INTEGER";
export interface HlsMediaStoreSettings {
  ConnectionRetryInterval?: number;
  FilecacheDuration?: number;
  MediaStoreStorageClass?: HlsMediaStoreStorageClass;
  NumRetries?: number;
  RestartDelay?: number;
}
export type HlsMediaStoreStorageClass = "TEMPORAL";
export type HlsMode = "LIVE" | "VOD";
export type HlsOutputSelection = "MANIFESTS_AND_SEGMENTS" | "SEGMENTS_ONLY" | "VARIANT_MANIFESTS_AND_SEGMENTS";
export interface HlsOutputSettings {
  H265PackagingType?: HlsH265PackagingType;
  HlsSettings: HlsSettings;
  NameModifier?: string;
  SegmentModifier?: string;
}
export type HlsProgramDateTime = "EXCLUDE" | "INCLUDE";
export type HlsProgramDateTimeClock = "INITIALIZE_FROM_OUTPUT_TIMECODE" | "SYSTEM_CLOCK";
export type HlsRedundantManifest = "DISABLED" | "ENABLED";
export interface HlsS3Settings {
  CannedAcl?: S3CannedAcl;
}
export type HlsScte35SourceType = "MANIFEST" | "SEGMENTS";
export type HlsSegmentationMode = "USE_INPUT_SEGMENTATION" | "USE_SEGMENT_DURATION";
export interface HlsSettings {
  AudioOnlyHlsSettings?: AudioOnlyHlsSettings;
  Fmp4HlsSettings?: Fmp4HlsSettings;
  FrameCaptureHlsSettings?: FrameCaptureHlsSettings;
  StandardHlsSettings?: StandardHlsSettings;
}
export type HlsStreamInfResolution = "EXCLUDE" | "INCLUDE";
export type HlsTimedMetadataId3Frame = "NONE" | "PRIV" | "TDRL";
export interface HlsTimedMetadataScheduleActionSettings {
  Id3: string;
}
export type HlsTsFileMode = "SEGMENTED_FILES" | "SINGLE_FILE";
export type HlsWebdavHttpTransferMode = "CHUNKED" | "NON_CHUNKED";
export interface HlsWebdavSettings {
  ConnectionRetryInterval?: number;
  FilecacheDuration?: number;
  HttpTransferMode?: HlsWebdavHttpTransferMode;
  NumRetries?: number;
  RestartDelay?: number;
}
export interface HtmlMotionGraphicsSettings {
}
export interface Id3SegmentTaggingScheduleActionSettings {
  Id3?: string;
  Tag?: string;
}
export type IFrameOnlyPlaylistType = "DISABLED" | "STANDARD";
export interface ImmediateModeScheduleActionStartSettings {
}
export type IncludeFillerNalUnits = "AUTO" | "DROP" | "INCLUDE";
export interface Input {
  Arn?: string;
  AttachedChannels?: Array<string>;
  Destinations?: Array<InputDestination>;
  Id?: string;
  InputClass?: InputClass;
  InputDevices?: Array<InputDeviceSettings>;
  InputPartnerIds?: Array<string>;
  InputSourceType?: InputSourceType;
  MediaConnectFlows?: Array<MediaConnectFlow>;
  Name?: string;
  RoleArn?: string;
  SecurityGroups?: Array<string>;
  Sources?: Array<InputSource>;
  State?: InputState;
  Tags?: Record<string, string>;
  Type?: InputType;
  SrtSettings?: SrtSettings;
  InputNetworkLocation?: InputNetworkLocation;
  MulticastSettings?: MulticastSettings;
  Smpte2110ReceiverGroupSettings?: Smpte2110ReceiverGroupSettings;
  SdiSources?: Array<string>;
}
export interface InputAttachment {
  AutomaticInputFailoverSettings?: AutomaticInputFailoverSettings;
  InputAttachmentName?: string;
  InputId?: string;
  InputSettings?: InputSettings;
  LogicalInterfaceNames?: Array<string>;
}
export interface InputChannelLevel {
  Gain: number;
  InputChannel: number;
}
export type InputClass = "STANDARD" | "SINGLE_PIPELINE";
export interface InputClippingSettings {
  InputTimecodeSource: InputTimecodeSource;
  StartTimecode?: StartTimecode;
  StopTimecode?: StopTimecode;
}
export type InputCodec = "MPEG2" | "AVC" | "HEVC";
export type InputDeblockFilter = "DISABLED" | "ENABLED";
export type InputDenoiseFilter = "DISABLED" | "ENABLED";
export interface InputDestination {
  Ip?: string;
  Port?: string;
  Url?: string;
  Vpc?: InputDestinationVpc;
  Network?: string;
  NetworkRoutes?: Array<InputDestinationRoute>;
}
export interface InputDestinationRequest {
  StreamName?: string;
  Network?: string;
  NetworkRoutes?: Array<InputRequestDestinationRoute>;
  StaticIpAddress?: string;
}
export interface InputDestinationRoute {
  Cidr?: string;
  Gateway?: string;
}
export interface InputDestinationVpc {
  AvailabilityZone?: string;
  NetworkInterfaceId?: string;
}
export type InputDeviceActiveInput = "HDMI" | "SDI";
export type InputDeviceCodec = "HEVC" | "AVC";
export interface InputDeviceConfigurableAudioChannelPairConfig {
  Id?: number;
  Profile?: InputDeviceConfigurableAudioChannelPairProfile;
}
export type InputDeviceConfigurableAudioChannelPairProfile = "DISABLED" | "VBR_AAC_HHE_16000" | "VBR_AAC_HE_64000" | "VBR_AAC_LC_128000" | "CBR_AAC_HQ_192000" | "CBR_AAC_HQ_256000" | "CBR_AAC_HQ_384000" | "CBR_AAC_HQ_512000";
export interface InputDeviceConfigurableSettings {
  ConfiguredInput?: InputDeviceConfiguredInput;
  MaxBitrate?: number;
  LatencyMs?: number;
  Codec?: InputDeviceCodec;
  MediaconnectSettings?: InputDeviceMediaConnectConfigurableSettings;
  AudioChannelPairs?: Array<InputDeviceConfigurableAudioChannelPairConfig>;
  InputResolution?: string;
}
export type InputDeviceConfiguredInput = "AUTO" | "HDMI" | "SDI";
export type InputDeviceConnectionState = "DISCONNECTED" | "CONNECTED";
export interface InputDeviceHdSettings {
  ActiveInput?: InputDeviceActiveInput;
  ConfiguredInput?: InputDeviceConfiguredInput;
  DeviceState?: InputDeviceState;
  Framerate?: number;
  Height?: number;
  MaxBitrate?: number;
  ScanType?: InputDeviceScanType;
  Width?: number;
  LatencyMs?: number;
}
export type InputDeviceIpScheme = "STATIC" | "DHCP";
export interface InputDeviceMediaConnectConfigurableSettings {
  FlowArn?: string;
  RoleArn?: string;
  SecretArn?: string;
  SourceName?: string;
}
export interface InputDeviceMediaConnectSettings {
  FlowArn?: string;
  RoleArn?: string;
  SecretArn?: string;
  SourceName?: string;
}
export interface InputDeviceNetworkSettings {
  DnsAddresses?: Array<string>;
  Gateway?: string;
  IpAddress?: string;
  IpScheme?: InputDeviceIpScheme;
  SubnetMask?: string;
}
export type InputDeviceOutputType = "NONE" | "MEDIALIVE_INPUT" | "MEDIACONNECT_FLOW";
export interface InputDeviceRequest {
  Id?: string;
}
export type InputDeviceScanType = "INTERLACED" | "PROGRESSIVE";
export interface InputDeviceSettings {
  Id?: string;
}
export type InputDeviceState = "IDLE" | "STREAMING";
export interface InputDeviceSummary {
  Arn?: string;
  ConnectionState?: InputDeviceConnectionState;
  DeviceSettingsSyncState?: DeviceSettingsSyncState;
  DeviceUpdateStatus?: DeviceUpdateStatus;
  HdDeviceSettings?: InputDeviceHdSettings;
  Id?: string;
  MacAddress?: string;
  Name?: string;
  NetworkSettings?: InputDeviceNetworkSettings;
  SerialNumber?: string;
  Type?: InputDeviceType;
  UhdDeviceSettings?: InputDeviceUhdSettings;
  Tags?: Record<string, string>;
  AvailabilityZone?: string;
  MedialiveInputArns?: Array<string>;
  OutputType?: InputDeviceOutputType;
}
export type InputDeviceThumbnail = Uint8Array | string;

export type InputDeviceTransferType = "OUTGOING" | "INCOMING";
export type InputDeviceType = "HD" | "UHD";
export interface InputDeviceUhdAudioChannelPairConfig {
  Id?: number;
  Profile?: InputDeviceUhdAudioChannelPairProfile;
}
export type InputDeviceUhdAudioChannelPairProfile = "DISABLED" | "VBR_AAC_HHE_16000" | "VBR_AAC_HE_64000" | "VBR_AAC_LC_128000" | "CBR_AAC_HQ_192000" | "CBR_AAC_HQ_256000" | "CBR_AAC_HQ_384000" | "CBR_AAC_HQ_512000";
export interface InputDeviceUhdSettings {
  ActiveInput?: InputDeviceActiveInput;
  ConfiguredInput?: InputDeviceConfiguredInput;
  DeviceState?: InputDeviceState;
  Framerate?: number;
  Height?: number;
  MaxBitrate?: number;
  ScanType?: InputDeviceScanType;
  Width?: number;
  LatencyMs?: number;
  Codec?: InputDeviceCodec;
  MediaconnectSettings?: InputDeviceMediaConnectSettings;
  AudioChannelPairs?: Array<InputDeviceUhdAudioChannelPairConfig>;
  InputResolution?: string;
}
export type InputFilter = "AUTO" | "DISABLED" | "FORCED";
export interface InputLocation {
  PasswordParam?: string;
  Uri: string;
  Username?: string;
}
export type InputLossActionForHlsOut = "EMIT_OUTPUT" | "PAUSE_OUTPUT";
export type InputLossActionForMsSmoothOut = "EMIT_OUTPUT" | "PAUSE_OUTPUT";
export type InputLossActionForRtmpOut = "EMIT_OUTPUT" | "PAUSE_OUTPUT";
export type InputLossActionForUdpOut = "DROP_PROGRAM" | "DROP_TS" | "EMIT_PROGRAM";
export interface InputLossBehavior {
  BlackFrameMsec?: number;
  InputLossImageColor?: string;
  InputLossImageSlate?: InputLocation;
  InputLossImageType?: InputLossImageType;
  RepeatFrameMsec?: number;
}
export interface InputLossFailoverSettings {
  InputLossThresholdMsec?: number;
}
export type InputLossImageType = "COLOR" | "SLATE";
export type InputMaximumBitrate = "MAX_10_MBPS" | "MAX_20_MBPS" | "MAX_50_MBPS";
export type InputNetworkLocation = "AWS" | "ON_PREMISES";
export type InputPreference = "EQUAL_INPUT_PREFERENCE" | "PRIMARY_INPUT_PREFERRED";
export interface InputPrepareScheduleActionSettings {
  InputAttachmentNameReference?: string;
  InputClippingSettings?: InputClippingSettings;
  UrlPath?: Array<string>;
}
export interface InputRequestDestinationRoute {
  Cidr?: string;
  Gateway?: string;
}
export type InputResolution = "SD" | "HD" | "UHD";
export type InputSdiSources = Array<string>;
export interface InputSdpLocation {
  MediaIndex?: number;
  SdpUrl?: string;
}
export interface InputSecurityGroup {
  Arn?: string;
  Id?: string;
  Inputs?: Array<string>;
  State?: InputSecurityGroupState;
  Tags?: Record<string, string>;
  WhitelistRules?: Array<InputWhitelistRule>;
}
export type InputSecurityGroupState = "IDLE" | "IN_USE" | "UPDATING" | "DELETED";
export interface InputSettings {
  AudioSelectors?: Array<AudioSelector>;
  CaptionSelectors?: Array<CaptionSelector>;
  DeblockFilter?: InputDeblockFilter;
  DenoiseFilter?: InputDenoiseFilter;
  FilterStrength?: number;
  InputFilter?: InputFilter;
  NetworkInputSettings?: NetworkInputSettings;
  Scte35Pid?: number;
  Smpte2038DataPreference?: Smpte2038DataPreference;
  SourceEndBehavior?: InputSourceEndBehavior;
  VideoSelector?: VideoSelector;
}
export interface InputSource {
  PasswordParam?: string;
  Url?: string;
  Username?: string;
}
export type InputSourceEndBehavior = "CONTINUE" | "LOOP";
export interface InputSourceRequest {
  PasswordParam?: string;
  Url?: string;
  Username?: string;
}
export type InputSourceType = "STATIC" | "DYNAMIC";
export interface InputSpecification {
  Codec?: InputCodec;
  MaximumBitrate?: InputMaximumBitrate;
  Resolution?: InputResolution;
}
export type InputState = "CREATING" | "DETACHED" | "ATTACHED" | "DELETING" | "DELETED";
export interface InputSwitchScheduleActionSettings {
  InputAttachmentNameReference: string;
  InputClippingSettings?: InputClippingSettings;
  UrlPath?: Array<string>;
}
export type InputTimecodeSource = "ZEROBASED" | "EMBEDDED";
export type InputType = "UDP_PUSH" | "RTP_PUSH" | "RTMP_PUSH" | "RTMP_PULL" | "URL_PULL" | "MP4_FILE" | "MEDIACONNECT" | "INPUT_DEVICE" | "AWS_CDI" | "TS_FILE" | "SRT_CALLER" | "MULTICAST" | "SMPTE_2110_RECEIVER_GROUP" | "SDI";
export interface InputVpcRequest {
  SecurityGroupIds?: Array<string>;
  SubnetIds: Array<string>;
}
export interface InputWhitelistRule {
  Cidr?: string;
}
export interface InputWhitelistRuleCidr {
  Cidr?: string;
}
export interface InterfaceMapping {
  LogicalInterfaceName?: string;
  NetworkId?: string;
}
export interface InterfaceMappingCreateRequest {
  LogicalInterfaceName?: string;
  NetworkId?: string;
}
export interface InterfaceMappingUpdateRequest {
  LogicalInterfaceName?: string;
  NetworkId?: string;
}
export declare class InternalServerErrorException extends Data.TaggedError(
  "InternalServerErrorException",
)<{
  readonly Message?: string;
}> {}
export interface IpPool {
  Cidr?: string;
}
export interface IpPoolCreateRequest {
  Cidr?: string;
}
export interface IpPoolUpdateRequest {
  Cidr?: string;
}
export interface KeyProviderSettings {
  StaticKeySettings?: StaticKeySettings;
}
export type LastFrameClippingBehavior = "EXCLUDE_LAST_FRAME" | "INCLUDE_LAST_FRAME";
export interface ListChannelPlacementGroupsRequest {
  ClusterId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListChannelPlacementGroupsResponse {
  ChannelPlacementGroups?: Array<DescribeChannelPlacementGroupSummary>;
  NextToken?: string;
}
export interface ListChannelsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListChannelsResponse {
  Channels?: Array<ChannelSummary>;
  NextToken?: string;
}
export interface ListCloudWatchAlarmTemplateGroupsRequest {
  MaxResults?: number;
  NextToken?: string;
  Scope?: string;
  SignalMapIdentifier?: string;
}
export interface ListCloudWatchAlarmTemplateGroupsResponse {
  CloudWatchAlarmTemplateGroups?: Array<CloudWatchAlarmTemplateGroupSummary>;
  NextToken?: string;
}
export interface ListCloudWatchAlarmTemplatesRequest {
  GroupIdentifier?: string;
  MaxResults?: number;
  NextToken?: string;
  Scope?: string;
  SignalMapIdentifier?: string;
}
export interface ListCloudWatchAlarmTemplatesResponse {
  CloudWatchAlarmTemplates?: Array<CloudWatchAlarmTemplateSummary>;
  NextToken?: string;
}
export interface ListClustersRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListClustersResponse {
  Clusters?: Array<DescribeClusterSummary>;
  NextToken?: string;
}
export interface ListEventBridgeRuleTemplateGroupsRequest {
  MaxResults?: number;
  NextToken?: string;
  SignalMapIdentifier?: string;
}
export interface ListEventBridgeRuleTemplateGroupsResponse {
  EventBridgeRuleTemplateGroups?: Array<EventBridgeRuleTemplateGroupSummary>;
  NextToken?: string;
}
export interface ListEventBridgeRuleTemplatesRequest {
  GroupIdentifier?: string;
  MaxResults?: number;
  NextToken?: string;
  SignalMapIdentifier?: string;
}
export interface ListEventBridgeRuleTemplatesResponse {
  EventBridgeRuleTemplates?: Array<EventBridgeRuleTemplateSummary>;
  NextToken?: string;
}
export interface ListInputDevicesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListInputDevicesResponse {
  InputDevices?: Array<InputDeviceSummary>;
  NextToken?: string;
}
export interface ListInputDeviceTransfersRequest {
  MaxResults?: number;
  NextToken?: string;
  TransferType: string;
}
export interface ListInputDeviceTransfersResponse {
  InputDeviceTransfers?: Array<TransferringInputDeviceSummary>;
  NextToken?: string;
}
export interface ListInputSecurityGroupsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListInputSecurityGroupsResponse {
  InputSecurityGroups?: Array<InputSecurityGroup>;
  NextToken?: string;
}
export interface ListInputsRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListInputsResponse {
  Inputs?: Array<Input>;
  NextToken?: string;
}
export interface ListMultiplexesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListMultiplexesResponse {
  Multiplexes?: Array<MultiplexSummary>;
  NextToken?: string;
}
export interface ListMultiplexProgramsRequest {
  MaxResults?: number;
  MultiplexId: string;
  NextToken?: string;
}
export interface ListMultiplexProgramsResponse {
  MultiplexPrograms?: Array<MultiplexProgramSummary>;
  NextToken?: string;
}
export interface ListNetworksRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListNetworksResponse {
  Networks?: Array<DescribeNetworkSummary>;
  NextToken?: string;
}
export interface ListNodesRequest {
  ClusterId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListNodesResponse {
  NextToken?: string;
  Nodes?: Array<DescribeNodeSummary>;
}
export interface ListOfferingsRequest {
  ChannelClass?: string;
  ChannelConfiguration?: string;
  Codec?: string;
  Duration?: string;
  MaxResults?: number;
  MaximumBitrate?: string;
  MaximumFramerate?: string;
  NextToken?: string;
  Resolution?: string;
  ResourceType?: string;
  SpecialFeature?: string;
  VideoQuality?: string;
}
export interface ListOfferingsResponse {
  NextToken?: string;
  Offerings?: Array<Offering>;
}
export interface ListReservationsRequest {
  ChannelClass?: string;
  Codec?: string;
  MaxResults?: number;
  MaximumBitrate?: string;
  MaximumFramerate?: string;
  NextToken?: string;
  Resolution?: string;
  ResourceType?: string;
  SpecialFeature?: string;
  VideoQuality?: string;
}
export interface ListReservationsResponse {
  NextToken?: string;
  Reservations?: Array<Reservation>;
}
export interface ListSdiSourcesRequest {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSdiSourcesResponse {
  NextToken?: string;
  SdiSources?: Array<SdiSourceSummary>;
}
export interface ListSignalMapsRequest {
  CloudWatchAlarmTemplateGroupIdentifier?: string;
  EventBridgeRuleTemplateGroupIdentifier?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSignalMapsResponse {
  NextToken?: string;
  SignalMaps?: Array<SignalMapSummary>;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export interface ListVersionsRequest {
}
export interface ListVersionsResponse {
  Versions?: Array<ChannelEngineVersionResponse>;
}
export type LogLevel = "ERROR" | "WARNING" | "INFO" | "DEBUG" | "DISABLED";
export type M2tsAbsentInputAudioBehavior = "DROP" | "ENCODE_SILENCE";
export type M2tsArib = "DISABLED" | "ENABLED";
export type M2tsAribCaptionsPidControl = "AUTO" | "USE_CONFIGURED";
export type M2tsAudioBufferModel = "ATSC" | "DVB";
export type M2tsAudioInterval = "VIDEO_AND_FIXED_INTERVALS" | "VIDEO_INTERVAL";
export type M2tsAudioStreamType = "ATSC" | "DVB";
export type M2tsBufferModel = "MULTIPLEX" | "NONE";
export type M2tsCcDescriptor = "DISABLED" | "ENABLED";
export type M2tsEbifControl = "NONE" | "PASSTHROUGH";
export type M2tsEbpPlacement = "VIDEO_AND_AUDIO_PIDS" | "VIDEO_PID";
export type M2tsEsRateInPes = "EXCLUDE" | "INCLUDE";
export type M2tsKlv = "NONE" | "PASSTHROUGH";
export type M2tsNielsenId3Behavior = "NO_PASSTHROUGH" | "PASSTHROUGH";
export type M2tsPcrControl = "CONFIGURED_PCR_PERIOD" | "PCR_EVERY_PES_PACKET";
export type M2tsRateMode = "CBR" | "VBR";
export type M2tsScte35Control = "NONE" | "PASSTHROUGH";
export type M2tsSegmentationMarkers = "EBP" | "EBP_LEGACY" | "NONE" | "PSI_SEGSTART" | "RAI_ADAPT" | "RAI_SEGSTART";
export type M2tsSegmentationStyle = "MAINTAIN_CADENCE" | "RESET_CADENCE";
export interface M2tsSettings {
  AbsentInputAudioBehavior?: M2tsAbsentInputAudioBehavior;
  Arib?: M2tsArib;
  AribCaptionsPid?: string;
  AribCaptionsPidControl?: M2tsAribCaptionsPidControl;
  AudioBufferModel?: M2tsAudioBufferModel;
  AudioFramesPerPes?: number;
  AudioPids?: string;
  AudioStreamType?: M2tsAudioStreamType;
  Bitrate?: number;
  BufferModel?: M2tsBufferModel;
  CcDescriptor?: M2tsCcDescriptor;
  DvbNitSettings?: DvbNitSettings;
  DvbSdtSettings?: DvbSdtSettings;
  DvbSubPids?: string;
  DvbTdtSettings?: DvbTdtSettings;
  DvbTeletextPid?: string;
  Ebif?: M2tsEbifControl;
  EbpAudioInterval?: M2tsAudioInterval;
  EbpLookaheadMs?: number;
  EbpPlacement?: M2tsEbpPlacement;
  EcmPid?: string;
  EsRateInPes?: M2tsEsRateInPes;
  EtvPlatformPid?: string;
  EtvSignalPid?: string;
  FragmentTime?: number;
  Klv?: M2tsKlv;
  KlvDataPids?: string;
  NielsenId3Behavior?: M2tsNielsenId3Behavior;
  NullPacketBitrate?: number;
  PatInterval?: number;
  PcrControl?: M2tsPcrControl;
  PcrPeriod?: number;
  PcrPid?: string;
  PmtInterval?: number;
  PmtPid?: string;
  ProgramNum?: number;
  RateMode?: M2tsRateMode;
  Scte27Pids?: string;
  Scte35Control?: M2tsScte35Control;
  Scte35Pid?: string;
  SegmentationMarkers?: M2tsSegmentationMarkers;
  SegmentationStyle?: M2tsSegmentationStyle;
  SegmentationTime?: number;
  TimedMetadataBehavior?: M2tsTimedMetadataBehavior;
  TimedMetadataPid?: string;
  TransportStreamId?: number;
  VideoPid?: string;
  Scte35PrerollPullupMilliseconds?: number;
}
export type M2tsTimedMetadataBehavior = "NO_PASSTHROUGH" | "PASSTHROUGH";
export type M3u8KlvBehavior = "NO_PASSTHROUGH" | "PASSTHROUGH";
export type M3u8NielsenId3Behavior = "NO_PASSTHROUGH" | "PASSTHROUGH";
export type M3u8PcrControl = "CONFIGURED_PCR_PERIOD" | "PCR_EVERY_PES_PACKET";
export type M3u8Scte35Behavior = "NO_PASSTHROUGH" | "PASSTHROUGH";
export interface M3u8Settings {
  AudioFramesPerPes?: number;
  AudioPids?: string;
  EcmPid?: string;
  NielsenId3Behavior?: M3u8NielsenId3Behavior;
  PatInterval?: number;
  PcrControl?: M3u8PcrControl;
  PcrPeriod?: number;
  PcrPid?: string;
  PmtInterval?: number;
  PmtPid?: string;
  ProgramNum?: number;
  Scte35Behavior?: M3u8Scte35Behavior;
  Scte35Pid?: string;
  TimedMetadataBehavior?: M3u8TimedMetadataBehavior;
  TimedMetadataPid?: string;
  TransportStreamId?: number;
  VideoPid?: string;
  KlvBehavior?: M3u8KlvBehavior;
  KlvDataPids?: string;
}
export type M3u8TimedMetadataBehavior = "NO_PASSTHROUGH" | "PASSTHROUGH";
export interface MaintenanceCreateSettings {
  MaintenanceDay?: MaintenanceDay;
  MaintenanceStartTime?: string;
}
export type MaintenanceDay = "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
export interface MaintenanceStatus {
  MaintenanceDay?: MaintenanceDay;
  MaintenanceDeadline?: string;
  MaintenanceScheduledDate?: string;
  MaintenanceStartTime?: string;
}
export interface MaintenanceUpdateSettings {
  MaintenanceDay?: MaintenanceDay;
  MaintenanceScheduledDate?: string;
  MaintenanceStartTime?: string;
}
export type MaxResults = number;

export interface MediaConnectFlow {
  FlowArn?: string;
}
export interface MediaConnectFlowRequest {
  FlowArn?: string;
}
export interface MediaPackageGroupSettings {
  Destination: OutputLocationRef;
}
export interface MediaPackageOutputDestinationSettings {
  ChannelId?: string;
  ChannelGroup?: string;
  ChannelName?: string;
}
export interface MediaPackageOutputSettings {
}
export interface MediaResource {
  Destinations?: Array<MediaResourceNeighbor>;
  Name?: string;
  Sources?: Array<MediaResourceNeighbor>;
}
export type MediaResourceMap = Record<string, MediaResource>;
export interface MediaResourceNeighbor {
  Arn: string;
  Name?: string;
}
export interface MonitorDeployment {
  DetailsUri?: string;
  ErrorMessage?: string;
  Status: SignalMapMonitorDeploymentStatus;
}
export interface MotionGraphicsActivateScheduleActionSettings {
  Duration?: number;
  PasswordParam?: string;
  Url?: string;
  Username?: string;
}
export interface MotionGraphicsConfiguration {
  MotionGraphicsInsertion?: MotionGraphicsInsertion;
  MotionGraphicsSettings: MotionGraphicsSettings;
}
export interface MotionGraphicsDeactivateScheduleActionSettings {
}
export type MotionGraphicsInsertion = "DISABLED" | "ENABLED";
export interface MotionGraphicsSettings {
  HtmlMotionGraphicsSettings?: HtmlMotionGraphicsSettings;
}
export type Mp2CodingMode = "CODING_MODE_1_0" | "CODING_MODE_2_0";
export interface Mp2Settings {
  Bitrate?: number;
  CodingMode?: Mp2CodingMode;
  SampleRate?: number;
}
export type Mpeg2AdaptiveQuantization = "AUTO" | "HIGH" | "LOW" | "MEDIUM" | "OFF";
export type Mpeg2ColorMetadata = "IGNORE" | "INSERT";
export type Mpeg2ColorSpace = "AUTO" | "PASSTHROUGH";
export type Mpeg2DisplayRatio = "DISPLAYRATIO16X9" | "DISPLAYRATIO4X3";
export interface Mpeg2FilterSettings {
  TemporalFilterSettings?: TemporalFilterSettings;
}
export type Mpeg2GopSizeUnits = "FRAMES" | "SECONDS";
export type Mpeg2ScanType = "INTERLACED" | "PROGRESSIVE";
export interface Mpeg2Settings {
  AdaptiveQuantization?: Mpeg2AdaptiveQuantization;
  AfdSignaling?: AfdSignaling;
  ColorMetadata?: Mpeg2ColorMetadata;
  ColorSpace?: Mpeg2ColorSpace;
  DisplayAspectRatio?: Mpeg2DisplayRatio;
  FilterSettings?: Mpeg2FilterSettings;
  FixedAfd?: FixedAfd;
  FramerateDenominator: number;
  FramerateNumerator: number;
  GopClosedCadence?: number;
  GopNumBFrames?: number;
  GopSize?: number;
  GopSizeUnits?: Mpeg2GopSizeUnits;
  ScanType?: Mpeg2ScanType;
  SubgopLength?: Mpeg2SubGopLength;
  TimecodeInsertion?: Mpeg2TimecodeInsertionBehavior;
  TimecodeBurninSettings?: TimecodeBurninSettings;
}
export type Mpeg2SubGopLength = "DYNAMIC" | "FIXED";
export type Mpeg2TimecodeInsertionBehavior = "DISABLED" | "GOP_TIMECODE";
export interface MsSmoothGroupSettings {
  AcquisitionPointId?: string;
  AudioOnlyTimecodeControl?: SmoothGroupAudioOnlyTimecodeControl;
  CertificateMode?: SmoothGroupCertificateMode;
  ConnectionRetryInterval?: number;
  Destination: OutputLocationRef;
  EventId?: string;
  EventIdMode?: SmoothGroupEventIdMode;
  EventStopBehavior?: SmoothGroupEventStopBehavior;
  FilecacheDuration?: number;
  FragmentLength?: number;
  InputLossAction?: InputLossActionForMsSmoothOut;
  NumRetries?: number;
  RestartDelay?: number;
  SegmentationMode?: SmoothGroupSegmentationMode;
  SendDelayMs?: number;
  SparseTrackType?: SmoothGroupSparseTrackType;
  StreamManifestBehavior?: SmoothGroupStreamManifestBehavior;
  TimestampOffset?: string;
  TimestampOffsetMode?: SmoothGroupTimestampOffsetMode;
}
export type MsSmoothH265PackagingType = "HEV1" | "HVC1";
export interface MsSmoothOutputSettings {
  H265PackagingType?: MsSmoothH265PackagingType;
  NameModifier?: string;
}
export interface MulticastInputSettings {
  SourceIpAddress?: string;
}
export interface MulticastSettings {
  Sources?: Array<MulticastSource>;
}
export interface MulticastSettingsCreateRequest {
  Sources?: Array<MulticastSourceCreateRequest>;
}
export interface MulticastSettingsUpdateRequest {
  Sources?: Array<MulticastSourceUpdateRequest>;
}
export interface MulticastSource {
  SourceIp?: string;
  Url: string;
}
export interface MulticastSourceCreateRequest {
  SourceIp?: string;
  Url: string;
}
export interface MulticastSourceUpdateRequest {
  SourceIp?: string;
  Url: string;
}
export interface Multiplex {
  Arn?: string;
  AvailabilityZones?: Array<string>;
  Destinations?: Array<MultiplexOutputDestination>;
  Id?: string;
  MultiplexSettings?: MultiplexSettings;
  Name?: string;
  PipelinesRunningCount?: number;
  ProgramCount?: number;
  State?: MultiplexState;
  Tags?: Record<string, string>;
}
export interface MultiplexContainerSettings {
  MultiplexM2tsSettings?: MultiplexM2tsSettings;
}
export interface MultiplexGroupSettings {
}
export interface MultiplexM2tsSettings {
  AbsentInputAudioBehavior?: M2tsAbsentInputAudioBehavior;
  Arib?: M2tsArib;
  AudioBufferModel?: M2tsAudioBufferModel;
  AudioFramesPerPes?: number;
  AudioStreamType?: M2tsAudioStreamType;
  CcDescriptor?: M2tsCcDescriptor;
  Ebif?: M2tsEbifControl;
  EsRateInPes?: M2tsEsRateInPes;
  Klv?: M2tsKlv;
  NielsenId3Behavior?: M2tsNielsenId3Behavior;
  PcrControl?: M2tsPcrControl;
  PcrPeriod?: number;
  Scte35Control?: M2tsScte35Control;
  Scte35PrerollPullupMilliseconds?: number;
}
export interface MultiplexMediaConnectOutputDestinationSettings {
  EntitlementArn?: string;
}
export interface MultiplexOutputDestination {
  MediaConnectSettings?: MultiplexMediaConnectOutputDestinationSettings;
}
export interface MultiplexOutputSettings {
  Destination: OutputLocationRef;
  ContainerSettings?: MultiplexContainerSettings;
}
export type MultiplexPacketIdentifiersMapping = Record<string, MultiplexProgramPacketIdentifiersMap>;
export interface MultiplexProgram {
  ChannelId?: string;
  MultiplexProgramSettings?: MultiplexProgramSettings;
  PacketIdentifiersMap?: MultiplexProgramPacketIdentifiersMap;
  PipelineDetails?: Array<MultiplexProgramPipelineDetail>;
  ProgramName?: string;
}
export interface MultiplexProgramChannelDestinationSettings {
  MultiplexId?: string;
  ProgramName?: string;
}
export interface MultiplexProgramPacketIdentifiersMap {
  AudioPids?: Array<number>;
  DvbSubPids?: Array<number>;
  DvbTeletextPid?: number;
  EtvPlatformPid?: number;
  EtvSignalPid?: number;
  KlvDataPids?: Array<number>;
  PcrPid?: number;
  PmtPid?: number;
  PrivateMetadataPid?: number;
  Scte27Pids?: Array<number>;
  Scte35Pid?: number;
  TimedMetadataPid?: number;
  VideoPid?: number;
  AribCaptionsPid?: number;
  DvbTeletextPids?: Array<number>;
  EcmPid?: number;
  Smpte2038Pid?: number;
}
export interface MultiplexProgramPipelineDetail {
  ActiveChannelPipeline?: string;
  PipelineId?: string;
}
export interface MultiplexProgramServiceDescriptor {
  ProviderName: string;
  ServiceName: string;
}
export interface MultiplexProgramSettings {
  PreferredChannelPipeline?: PreferredChannelPipeline;
  ProgramNumber: number;
  ServiceDescriptor?: MultiplexProgramServiceDescriptor;
  VideoSettings?: MultiplexVideoSettings;
}
export interface MultiplexProgramSummary {
  ChannelId?: string;
  ProgramName?: string;
}
export interface MultiplexSettings {
  MaximumVideoBufferDelayMilliseconds?: number;
  TransportStreamBitrate: number;
  TransportStreamId: number;
  TransportStreamReservedBitrate?: number;
}
export interface MultiplexSettingsSummary {
  TransportStreamBitrate?: number;
}
export type MultiplexState = "CREATING" | "CREATE_FAILED" | "IDLE" | "STARTING" | "RUNNING" | "RECOVERING" | "STOPPING" | "DELETING" | "DELETED";
export interface MultiplexStatmuxVideoSettings {
  MaximumBitrate?: number;
  MinimumBitrate?: number;
  Priority?: number;
}
export interface MultiplexSummary {
  Arn?: string;
  AvailabilityZones?: Array<string>;
  Id?: string;
  MultiplexSettings?: MultiplexSettingsSummary;
  Name?: string;
  PipelinesRunningCount?: number;
  ProgramCount?: number;
  State?: MultiplexState;
  Tags?: Record<string, string>;
}
export interface MultiplexVideoSettings {
  ConstantBitrate?: number;
  StatmuxSettings?: MultiplexStatmuxVideoSettings;
}
export type NetworkInputServerValidation = "CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME" | "CHECK_CRYPTOGRAPHY_ONLY";
export interface NetworkInputSettings {
  HlsInputSettings?: HlsInputSettings;
  ServerValidation?: NetworkInputServerValidation;
  MulticastInputSettings?: MulticastInputSettings;
}
export type NetworkInterfaceMode = "NAT" | "BRIDGE";
export type NetworkState = "CREATING" | "CREATE_FAILED" | "ACTIVE" | "DELETING" | "IDLE" | "IN_USE" | "UPDATING" | "DELETE_FAILED" | "DELETED";
export interface NielsenCBET {
  CbetCheckDigitString: string;
  CbetStepaside: NielsenWatermarksCbetStepaside;
  Csid: string;
}
export interface NielsenConfiguration {
  DistributorId?: string;
  NielsenPcmToId3Tagging?: NielsenPcmToId3TaggingState;
}
export interface NielsenNaesIiNw {
  CheckDigitString: string;
  Sid: number;
  Timezone?: NielsenWatermarkTimezones;
}
export type NielsenPcmToId3TaggingState = "DISABLED" | "ENABLED";
export type NielsenWatermarksCbetStepaside = "DISABLED" | "ENABLED";
export type NielsenWatermarksDistributionTypes = "FINAL_DISTRIBUTOR" | "PROGRAM_CONTENT";
export interface NielsenWatermarksSettings {
  NielsenCbetSettings?: NielsenCBET;
  NielsenDistributionType?: NielsenWatermarksDistributionTypes;
  NielsenNaesIiNwSettings?: NielsenNaesIiNw;
}
export type NielsenWatermarkTimezones = "AMERICA_PUERTO_RICO" | "US_ALASKA" | "US_ARIZONA" | "US_CENTRAL" | "US_EASTERN" | "US_HAWAII" | "US_MOUNTAIN" | "US_PACIFIC" | "US_SAMOA" | "UTC";
export type NodeConnectionState = "CONNECTED" | "DISCONNECTED";
export interface NodeInterfaceMapping {
  LogicalInterfaceName?: string;
  NetworkInterfaceMode?: NetworkInterfaceMode;
  PhysicalInterfaceName?: string;
}
export interface NodeInterfaceMappingCreateRequest {
  LogicalInterfaceName?: string;
  NetworkInterfaceMode?: NetworkInterfaceMode;
  PhysicalInterfaceName?: string;
}
export type NodeRole = "BACKUP" | "ACTIVE";
export type NodeState = "CREATED" | "REGISTERING" | "READY_TO_ACTIVATE" | "REGISTRATION_FAILED" | "ACTIVATION_FAILED" | "ACTIVE" | "READY" | "IN_USE" | "DEREGISTERING" | "DRAINING" | "DEREGISTRATION_FAILED" | "DEREGISTERED";
export declare class NotFoundException extends Data.TaggedError(
  "NotFoundException",
)<{
  readonly Message?: string;
}> {}
export interface Offering {
  Arn?: string;
  CurrencyCode?: string;
  Duration?: number;
  DurationUnits?: OfferingDurationUnits;
  FixedPrice?: number;
  OfferingDescription?: string;
  OfferingId?: string;
  OfferingType?: OfferingType;
  Region?: string;
  ResourceSpecification?: ReservationResourceSpecification;
  UsagePrice?: number;
}
export type OfferingDurationUnits = "MONTHS";
export type OfferingType = "NO_UPFRONT";
export interface Output {
  AudioDescriptionNames?: Array<string>;
  CaptionDescriptionNames?: Array<string>;
  OutputName?: string;
  OutputSettings: OutputSettings;
  VideoDescriptionName?: string;
}
export interface OutputDestination {
  Id?: string;
  MediaPackageSettings?: Array<MediaPackageOutputDestinationSettings>;
  MultiplexSettings?: MultiplexProgramChannelDestinationSettings;
  Settings?: Array<OutputDestinationSettings>;
  SrtSettings?: Array<SrtOutputDestinationSettings>;
  LogicalInterfaceNames?: Array<string>;
}
export interface OutputDestinationSettings {
  PasswordParam?: string;
  StreamName?: string;
  Url?: string;
  Username?: string;
}
export interface OutputGroup {
  Name?: string;
  OutputGroupSettings: OutputGroupSettings;
  Outputs: Array<Output>;
}
export interface OutputGroupSettings {
  ArchiveGroupSettings?: ArchiveGroupSettings;
  FrameCaptureGroupSettings?: FrameCaptureGroupSettings;
  HlsGroupSettings?: HlsGroupSettings;
  MediaPackageGroupSettings?: MediaPackageGroupSettings;
  MsSmoothGroupSettings?: MsSmoothGroupSettings;
  MultiplexGroupSettings?: MultiplexGroupSettings;
  RtmpGroupSettings?: RtmpGroupSettings;
  UdpGroupSettings?: UdpGroupSettings;
  CmafIngestGroupSettings?: CmafIngestGroupSettings;
  SrtGroupSettings?: SrtGroupSettings;
}
export interface OutputLocationRef {
  DestinationRefId?: string;
}
export interface OutputLockingSettings {
  EpochLockingSettings?: EpochLockingSettings;
  PipelineLockingSettings?: PipelineLockingSettings;
}
export interface OutputSettings {
  ArchiveOutputSettings?: ArchiveOutputSettings;
  FrameCaptureOutputSettings?: FrameCaptureOutputSettings;
  HlsOutputSettings?: HlsOutputSettings;
  MediaPackageOutputSettings?: MediaPackageOutputSettings;
  MsSmoothOutputSettings?: MsSmoothOutputSettings;
  MultiplexOutputSettings?: MultiplexOutputSettings;
  RtmpOutputSettings?: RtmpOutputSettings;
  UdpOutputSettings?: UdpOutputSettings;
  CmafIngestOutputSettings?: CmafIngestOutputSettings;
  SrtOutputSettings?: SrtOutputSettings;
}
export interface PassThroughSettings {
}
export interface PauseStateScheduleActionSettings {
  Pipelines?: Array<PipelinePauseStateSettings>;
}
export interface PipelineDetail {
  ActiveInputAttachmentName?: string;
  ActiveInputSwitchActionName?: string;
  ActiveMotionGraphicsActionName?: string;
  ActiveMotionGraphicsUri?: string;
  PipelineId?: string;
  ChannelEngineVersion?: ChannelEngineVersionResponse;
}
export type PipelineId = "PIPELINE_0" | "PIPELINE_1";
export interface PipelineLockingSettings {
}
export interface PipelinePauseStateSettings {
  PipelineId: PipelineId;
}
export type PreferredChannelPipeline = "CURRENTLY_ACTIVE" | "PIPELINE_0" | "PIPELINE_1";
export interface PurchaseOfferingRequest {
  Count: number;
  Name?: string;
  OfferingId: string;
  RenewalSettings?: RenewalSettings;
  RequestId?: string;
  Start?: string;
  Tags?: Record<string, string>;
}
export interface PurchaseOfferingResponse {
  Reservation?: Reservation;
}
export interface RawSettings {
}
export type RebootInputDeviceForce = "NO" | "YES";
export interface RebootInputDeviceRequest {
  Force?: RebootInputDeviceForce;
  InputDeviceId: string;
}
export interface RebootInputDeviceResponse {
}
export interface Rec601Settings {
}
export interface Rec709Settings {
}
export interface RejectInputDeviceTransferRequest {
  InputDeviceId: string;
}
export interface RejectInputDeviceTransferResponse {
}
export interface RemixSettings {
  ChannelMappings: Array<AudioChannelMapping>;
  ChannelsIn?: number;
  ChannelsOut?: number;
}
export interface RenewalSettings {
  AutomaticRenewal?: ReservationAutomaticRenewal;
  RenewalCount?: number;
}
export interface Reservation {
  Arn?: string;
  Count?: number;
  CurrencyCode?: string;
  Duration?: number;
  DurationUnits?: OfferingDurationUnits;
  End?: string;
  FixedPrice?: number;
  Name?: string;
  OfferingDescription?: string;
  OfferingId?: string;
  OfferingType?: OfferingType;
  Region?: string;
  RenewalSettings?: RenewalSettings;
  ReservationId?: string;
  ResourceSpecification?: ReservationResourceSpecification;
  Start?: string;
  State?: ReservationState;
  Tags?: Record<string, string>;
  UsagePrice?: number;
}
export type ReservationAutomaticRenewal = "DISABLED" | "ENABLED" | "UNAVAILABLE";
export type ReservationCodec = "MPEG2" | "AVC" | "HEVC" | "AUDIO" | "LINK" | "AV1";
export type ReservationMaximumBitrate = "MAX_10_MBPS" | "MAX_20_MBPS" | "MAX_50_MBPS";
export type ReservationMaximumFramerate = "MAX_30_FPS" | "MAX_60_FPS";
export type ReservationResolution = "SD" | "HD" | "FHD" | "UHD";
export interface ReservationResourceSpecification {
  ChannelClass?: ChannelClass;
  Codec?: ReservationCodec;
  MaximumBitrate?: ReservationMaximumBitrate;
  MaximumFramerate?: ReservationMaximumFramerate;
  Resolution?: ReservationResolution;
  ResourceType?: ReservationResourceType;
  SpecialFeature?: ReservationSpecialFeature;
  VideoQuality?: ReservationVideoQuality;
}
export type ReservationResourceType = "INPUT" | "OUTPUT" | "MULTIPLEX" | "CHANNEL";
export type ReservationSpecialFeature = "ADVANCED_AUDIO" | "AUDIO_NORMALIZATION" | "MGHD" | "MGUHD";
export type ReservationState = "ACTIVE" | "EXPIRED" | "CANCELED" | "DELETED";
export type ReservationVideoQuality = "STANDARD" | "ENHANCED" | "PREMIUM";
export interface RestartChannelPipelinesRequest {
  ChannelId: string;
  PipelineIds?: Array<ChannelPipelineIdToRestart>;
}
export interface RestartChannelPipelinesResponse {
  Arn?: string;
  CdiInputSpecification?: CdiInputSpecification;
  ChannelClass?: ChannelClass;
  Destinations?: Array<OutputDestination>;
  EgressEndpoints?: Array<ChannelEgressEndpoint>;
  EncoderSettings?: EncoderSettings;
  Id?: string;
  InputAttachments?: Array<InputAttachment>;
  InputSpecification?: InputSpecification;
  LogLevel?: LogLevel;
  Maintenance?: MaintenanceStatus;
  MaintenanceStatus?: string;
  Name?: string;
  PipelineDetails?: Array<PipelineDetail>;
  PipelinesRunningCount?: number;
  RoleArn?: string;
  State?: ChannelState;
  Tags?: Record<string, string>;
  Vpc?: VpcOutputSettingsDescription;
  AnywhereSettings?: DescribeAnywhereSettings;
  ChannelEngineVersion?: ChannelEngineVersionResponse;
}
export interface Route {
  Cidr?: string;
  Gateway?: string;
}
export interface RouteCreateRequest {
  Cidr?: string;
  Gateway?: string;
}
export interface RouteUpdateRequest {
  Cidr?: string;
  Gateway?: string;
}
export type RtmpAdMarkers = "ON_CUE_POINT_SCTE35";
export type RtmpCacheFullBehavior = "DISCONNECT_IMMEDIATELY" | "WAIT_FOR_SERVER";
export type RtmpCaptionData = "ALL" | "FIELD1_608" | "FIELD1_AND_FIELD2_608";
export interface RtmpCaptionInfoDestinationSettings {
}
export interface RtmpGroupSettings {
  AdMarkers?: Array<RtmpAdMarkers>;
  AuthenticationScheme?: AuthenticationScheme;
  CacheFullBehavior?: RtmpCacheFullBehavior;
  CacheLength?: number;
  CaptionData?: RtmpCaptionData;
  InputLossAction?: InputLossActionForRtmpOut;
  RestartDelay?: number;
  IncludeFillerNalUnits?: IncludeFillerNalUnits;
}
export type RtmpOutputCertificateMode = "SELF_SIGNED" | "VERIFY_AUTHENTICITY";
export interface RtmpOutputSettings {
  CertificateMode?: RtmpOutputCertificateMode;
  ConnectionRetryInterval?: number;
  Destination: OutputLocationRef;
  NumRetries?: number;
}
export type S3CannedAcl = "AUTHENTICATED_READ" | "BUCKET_OWNER_FULL_CONTROL" | "BUCKET_OWNER_READ" | "PUBLIC_READ";
export interface ScheduleAction {
  ActionName: string;
  ScheduleActionSettings: ScheduleActionSettings;
  ScheduleActionStartSettings: ScheduleActionStartSettings;
}
export interface ScheduleActionSettings {
  HlsId3SegmentTaggingSettings?: HlsId3SegmentTaggingScheduleActionSettings;
  HlsTimedMetadataSettings?: HlsTimedMetadataScheduleActionSettings;
  InputPrepareSettings?: InputPrepareScheduleActionSettings;
  InputSwitchSettings?: InputSwitchScheduleActionSettings;
  MotionGraphicsImageActivateSettings?: MotionGraphicsActivateScheduleActionSettings;
  MotionGraphicsImageDeactivateSettings?: MotionGraphicsDeactivateScheduleActionSettings;
  PauseStateSettings?: PauseStateScheduleActionSettings;
  Scte35InputSettings?: Scte35InputScheduleActionSettings;
  Scte35ReturnToNetworkSettings?: Scte35ReturnToNetworkScheduleActionSettings;
  Scte35SpliceInsertSettings?: Scte35SpliceInsertScheduleActionSettings;
  Scte35TimeSignalSettings?: Scte35TimeSignalScheduleActionSettings;
  StaticImageActivateSettings?: StaticImageActivateScheduleActionSettings;
  StaticImageDeactivateSettings?: StaticImageDeactivateScheduleActionSettings;
  StaticImageOutputActivateSettings?: StaticImageOutputActivateScheduleActionSettings;
  StaticImageOutputDeactivateSettings?: StaticImageOutputDeactivateScheduleActionSettings;
  Id3SegmentTaggingSettings?: Id3SegmentTaggingScheduleActionSettings;
  TimedMetadataSettings?: TimedMetadataScheduleActionSettings;
}
export interface ScheduleActionStartSettings {
  FixedModeScheduleActionStartSettings?: FixedModeScheduleActionStartSettings;
  FollowModeScheduleActionStartSettings?: FollowModeScheduleActionStartSettings;
  ImmediateModeScheduleActionStartSettings?: ImmediateModeScheduleActionStartSettings;
}
export type Scte20Convert608To708 = "DISABLED" | "UPCONVERT";
export interface Scte20PlusEmbeddedDestinationSettings {
}
export interface Scte20SourceSettings {
  Convert608To708?: Scte20Convert608To708;
  Source608ChannelNumber?: number;
}
export interface Scte27DestinationSettings {
}
export type Scte27OcrLanguage = "DEU" | "ENG" | "FRA" | "NLD" | "POR" | "SPA";
export interface Scte27SourceSettings {
  OcrLanguage?: Scte27OcrLanguage;
  Pid?: number;
}
export type Scte35AposNoRegionalBlackoutBehavior = "FOLLOW" | "IGNORE";
export type Scte35AposWebDeliveryAllowedBehavior = "FOLLOW" | "IGNORE";
export type Scte35ArchiveAllowedFlag = "ARCHIVE_NOT_ALLOWED" | "ARCHIVE_ALLOWED";
export interface Scte35DeliveryRestrictions {
  ArchiveAllowedFlag: Scte35ArchiveAllowedFlag;
  DeviceRestrictions: Scte35DeviceRestrictions;
  NoRegionalBlackoutFlag: Scte35NoRegionalBlackoutFlag;
  WebDeliveryAllowedFlag: Scte35WebDeliveryAllowedFlag;
}
export interface Scte35Descriptor {
  Scte35DescriptorSettings: Scte35DescriptorSettings;
}
export interface Scte35DescriptorSettings {
  SegmentationDescriptorScte35DescriptorSettings: Scte35SegmentationDescriptor;
}
export type Scte35DeviceRestrictions = "NONE" | "RESTRICT_GROUP0" | "RESTRICT_GROUP1" | "RESTRICT_GROUP2";
export type Scte35InputMode = "FIXED" | "FOLLOW_ACTIVE";
export interface Scte35InputScheduleActionSettings {
  InputAttachmentNameReference?: string;
  Mode: Scte35InputMode;
}
export type Scte35NoRegionalBlackoutFlag = "REGIONAL_BLACKOUT" | "NO_REGIONAL_BLACKOUT";
export interface Scte35ReturnToNetworkScheduleActionSettings {
  SpliceEventId: number;
}
export type Scte35SegmentationCancelIndicator = "SEGMENTATION_EVENT_NOT_CANCELED" | "SEGMENTATION_EVENT_CANCELED";
export interface Scte35SegmentationDescriptor {
  DeliveryRestrictions?: Scte35DeliveryRestrictions;
  SegmentNum?: number;
  SegmentationCancelIndicator: Scte35SegmentationCancelIndicator;
  SegmentationDuration?: number;
  SegmentationEventId: number;
  SegmentationTypeId?: number;
  SegmentationUpid?: string;
  SegmentationUpidType?: number;
  SegmentsExpected?: number;
  SubSegmentNum?: number;
  SubSegmentsExpected?: number;
}
export type Scte35SegmentationScope = "ALL_OUTPUT_GROUPS" | "SCTE35_ENABLED_OUTPUT_GROUPS";
export interface Scte35SpliceInsert {
  AdAvailOffset?: number;
  NoRegionalBlackoutFlag?: Scte35SpliceInsertNoRegionalBlackoutBehavior;
  WebDeliveryAllowedFlag?: Scte35SpliceInsertWebDeliveryAllowedBehavior;
}
export type Scte35SpliceInsertNoRegionalBlackoutBehavior = "FOLLOW" | "IGNORE";
export interface Scte35SpliceInsertScheduleActionSettings {
  Duration?: number;
  SpliceEventId: number;
}
export type Scte35SpliceInsertWebDeliveryAllowedBehavior = "FOLLOW" | "IGNORE";
export interface Scte35TimeSignalApos {
  AdAvailOffset?: number;
  NoRegionalBlackoutFlag?: Scte35AposNoRegionalBlackoutBehavior;
  WebDeliveryAllowedFlag?: Scte35AposWebDeliveryAllowedBehavior;
}
export interface Scte35TimeSignalScheduleActionSettings {
  Scte35Descriptors: Array<Scte35Descriptor>;
}
export type Scte35Type = "NONE" | "SCTE_35_WITHOUT_SEGMENTATION";
export type Scte35WebDeliveryAllowedFlag = "WEB_DELIVERY_NOT_ALLOWED" | "WEB_DELIVERY_ALLOWED";
export interface SdiSource {
  Arn?: string;
  Id?: string;
  Inputs?: Array<string>;
  Mode?: SdiSourceMode;
  Name?: string;
  State?: SdiSourceState;
  Type?: SdiSourceType;
}
export interface SdiSourceMapping {
  CardNumber?: number;
  ChannelNumber?: number;
  SdiSource?: string;
}
export type SdiSourceMappings = Array<SdiSourceMapping>;
export type SdiSourceMappingsUpdateRequest = Array<SdiSourceMappingUpdateRequest>;
export interface SdiSourceMappingUpdateRequest {
  CardNumber?: number;
  ChannelNumber?: number;
  SdiSource?: string;
}
export type SdiSourceMode = "QUADRANT" | "INTERLEAVE";
export type SdiSourceState = "IDLE" | "IN_USE" | "DELETED";
export interface SdiSourceSummary {
  Arn?: string;
  Id?: string;
  Inputs?: Array<string>;
  Mode?: SdiSourceMode;
  Name?: string;
  State?: SdiSourceState;
  Type?: SdiSourceType;
}
export type SdiSourceType = "SINGLE" | "QUAD";
export type SignalMapMonitorDeploymentStatus = "NOT_DEPLOYED" | "DRY_RUN_DEPLOYMENT_COMPLETE" | "DRY_RUN_DEPLOYMENT_FAILED" | "DRY_RUN_DEPLOYMENT_IN_PROGRESS" | "DEPLOYMENT_COMPLETE" | "DEPLOYMENT_FAILED" | "DEPLOYMENT_IN_PROGRESS" | "DELETE_COMPLETE" | "DELETE_FAILED" | "DELETE_IN_PROGRESS";
export type SignalMapStatus = "CREATE_IN_PROGRESS" | "CREATE_COMPLETE" | "CREATE_FAILED" | "UPDATE_IN_PROGRESS" | "UPDATE_COMPLETE" | "UPDATE_REVERTED" | "UPDATE_FAILED" | "READY" | "NOT_READY";
export interface SignalMapSummary {
  Arn: string;
  CreatedAt: Date | string;
  Description?: string;
  Id: string;
  ModifiedAt?: Date | string;
  MonitorDeploymentStatus: SignalMapMonitorDeploymentStatus;
  Name: string;
  Status: SignalMapStatus;
  Tags?: Record<string, string>;
}
export type SmoothGroupAudioOnlyTimecodeControl = "PASSTHROUGH" | "USE_CONFIGURED_CLOCK";
export type SmoothGroupCertificateMode = "SELF_SIGNED" | "VERIFY_AUTHENTICITY";
export type SmoothGroupEventIdMode = "NO_EVENT_ID" | "USE_CONFIGURED" | "USE_TIMESTAMP";
export type SmoothGroupEventStopBehavior = "NONE" | "SEND_EOS";
export type SmoothGroupSegmentationMode = "USE_INPUT_SEGMENTATION" | "USE_SEGMENT_DURATION";
export type SmoothGroupSparseTrackType = "NONE" | "SCTE_35" | "SCTE_35_WITHOUT_SEGMENTATION";
export type SmoothGroupStreamManifestBehavior = "DO_NOT_SEND" | "SEND";
export type SmoothGroupTimestampOffsetMode = "USE_CONFIGURED_OFFSET" | "USE_EVENT_START_DATE";
export type Smpte2038DataPreference = "IGNORE" | "PREFER";
export interface Smpte2110ReceiverGroup {
  SdpSettings?: Smpte2110ReceiverGroupSdpSettings;
}
export interface Smpte2110ReceiverGroupSdpSettings {
  AncillarySdps?: Array<InputSdpLocation>;
  AudioSdps?: Array<InputSdpLocation>;
  VideoSdp?: InputSdpLocation;
}
export interface Smpte2110ReceiverGroupSettings {
  Smpte2110ReceiverGroups?: Array<Smpte2110ReceiverGroup>;
}
export interface SmpteTtDestinationSettings {
}
export interface SrtCallerDecryption {
  Algorithm?: Algorithm;
  PassphraseSecretArn?: string;
}
export interface SrtCallerDecryptionRequest {
  Algorithm?: Algorithm;
  PassphraseSecretArn?: string;
}
export interface SrtCallerSource {
  Decryption?: SrtCallerDecryption;
  MinimumLatency?: number;
  SrtListenerAddress?: string;
  SrtListenerPort?: string;
  StreamId?: string;
}
export interface SrtCallerSourceRequest {
  Decryption?: SrtCallerDecryptionRequest;
  MinimumLatency?: number;
  SrtListenerAddress?: string;
  SrtListenerPort?: string;
  StreamId?: string;
}
export type SrtEncryptionType = "AES128" | "AES192" | "AES256";
export interface SrtGroupSettings {
  InputLossAction?: InputLossActionForUdpOut;
}
export interface SrtOutputDestinationSettings {
  EncryptionPassphraseSecretArn?: string;
  StreamId?: string;
  Url?: string;
}
export interface SrtOutputSettings {
  BufferMsec?: number;
  ContainerSettings: UdpContainerSettings;
  Destination: OutputLocationRef;
  EncryptionType?: SrtEncryptionType;
  Latency?: number;
}
export interface SrtSettings {
  SrtCallerSources?: Array<SrtCallerSource>;
}
export interface SrtSettingsRequest {
  SrtCallerSources?: Array<SrtCallerSourceRequest>;
}
export interface StandardHlsSettings {
  AudioRenditionSets?: string;
  M3u8Settings: M3u8Settings;
}
export interface StartChannelRequest {
  ChannelId: string;
}
export interface StartChannelResponse {
  Arn?: string;
  CdiInputSpecification?: CdiInputSpecification;
  ChannelClass?: ChannelClass;
  Destinations?: Array<OutputDestination>;
  EgressEndpoints?: Array<ChannelEgressEndpoint>;
  EncoderSettings?: EncoderSettings;
  Id?: string;
  InputAttachments?: Array<InputAttachment>;
  InputSpecification?: InputSpecification;
  LogLevel?: LogLevel;
  Maintenance?: MaintenanceStatus;
  Name?: string;
  PipelineDetails?: Array<PipelineDetail>;
  PipelinesRunningCount?: number;
  RoleArn?: string;
  State?: ChannelState;
  Tags?: Record<string, string>;
  Vpc?: VpcOutputSettingsDescription;
  AnywhereSettings?: DescribeAnywhereSettings;
  ChannelEngineVersion?: ChannelEngineVersionResponse;
}
export interface StartDeleteMonitorDeploymentRequest {
  Identifier: string;
}
export interface StartDeleteMonitorDeploymentResponse {
  Arn?: string;
  CloudWatchAlarmTemplateGroupIds?: Array<string>;
  CreatedAt?: Date | string;
  Description?: string;
  DiscoveryEntryPointArn?: string;
  ErrorMessage?: string;
  EventBridgeRuleTemplateGroupIds?: Array<string>;
  FailedMediaResourceMap?: Record<string, MediaResource>;
  Id?: string;
  LastDiscoveredAt?: Date | string;
  LastSuccessfulMonitorDeployment?: SuccessfulMonitorDeployment;
  MediaResourceMap?: Record<string, MediaResource>;
  ModifiedAt?: Date | string;
  MonitorChangesPendingDeployment?: boolean;
  MonitorDeployment?: MonitorDeployment;
  Name?: string;
  Status?: SignalMapStatus;
  Tags?: Record<string, string>;
}
export interface StartInputDeviceMaintenanceWindowRequest {
  InputDeviceId: string;
}
export interface StartInputDeviceMaintenanceWindowResponse {
}
export interface StartInputDeviceRequest {
  InputDeviceId: string;
}
export interface StartInputDeviceResponse {
}
export interface StartMonitorDeploymentRequest {
  DryRun?: boolean;
  Identifier: string;
}
export interface StartMonitorDeploymentResponse {
  Arn?: string;
  CloudWatchAlarmTemplateGroupIds?: Array<string>;
  CreatedAt?: Date | string;
  Description?: string;
  DiscoveryEntryPointArn?: string;
  ErrorMessage?: string;
  EventBridgeRuleTemplateGroupIds?: Array<string>;
  FailedMediaResourceMap?: Record<string, MediaResource>;
  Id?: string;
  LastDiscoveredAt?: Date | string;
  LastSuccessfulMonitorDeployment?: SuccessfulMonitorDeployment;
  MediaResourceMap?: Record<string, MediaResource>;
  ModifiedAt?: Date | string;
  MonitorChangesPendingDeployment?: boolean;
  MonitorDeployment?: MonitorDeployment;
  Name?: string;
  Status?: SignalMapStatus;
  Tags?: Record<string, string>;
}
export interface StartMultiplexRequest {
  MultiplexId: string;
}
export interface StartMultiplexResponse {
  Arn?: string;
  AvailabilityZones?: Array<string>;
  Destinations?: Array<MultiplexOutputDestination>;
  Id?: string;
  MultiplexSettings?: MultiplexSettings;
  Name?: string;
  PipelinesRunningCount?: number;
  ProgramCount?: number;
  State?: MultiplexState;
  Tags?: Record<string, string>;
}
export interface StartTimecode {
  Timecode?: string;
}
export interface StartUpdateSignalMapRequest {
  CloudWatchAlarmTemplateGroupIdentifiers?: Array<string>;
  Description?: string;
  DiscoveryEntryPointArn?: string;
  EventBridgeRuleTemplateGroupIdentifiers?: Array<string>;
  ForceRediscovery?: boolean;
  Identifier: string;
  Name?: string;
}
export interface StartUpdateSignalMapResponse {
  Arn?: string;
  CloudWatchAlarmTemplateGroupIds?: Array<string>;
  CreatedAt?: Date | string;
  Description?: string;
  DiscoveryEntryPointArn?: string;
  ErrorMessage?: string;
  EventBridgeRuleTemplateGroupIds?: Array<string>;
  FailedMediaResourceMap?: Record<string, MediaResource>;
  Id?: string;
  LastDiscoveredAt?: Date | string;
  LastSuccessfulMonitorDeployment?: SuccessfulMonitorDeployment;
  MediaResourceMap?: Record<string, MediaResource>;
  ModifiedAt?: Date | string;
  MonitorChangesPendingDeployment?: boolean;
  MonitorDeployment?: MonitorDeployment;
  Name?: string;
  Status?: SignalMapStatus;
  Tags?: Record<string, string>;
}
export interface StaticImageActivateScheduleActionSettings {
  Duration?: number;
  FadeIn?: number;
  FadeOut?: number;
  Height?: number;
  Image: InputLocation;
  ImageX?: number;
  ImageY?: number;
  Layer?: number;
  Opacity?: number;
  Width?: number;
}
export interface StaticImageDeactivateScheduleActionSettings {
  FadeOut?: number;
  Layer?: number;
}
export interface StaticImageOutputActivateScheduleActionSettings {
  Duration?: number;
  FadeIn?: number;
  FadeOut?: number;
  Height?: number;
  Image: InputLocation;
  ImageX?: number;
  ImageY?: number;
  Layer?: number;
  Opacity?: number;
  OutputNames: Array<string>;
  Width?: number;
}
export interface StaticImageOutputDeactivateScheduleActionSettings {
  FadeOut?: number;
  Layer?: number;
  OutputNames: Array<string>;
}
export interface StaticKeySettings {
  KeyProviderServer?: InputLocation;
  StaticKeyValue: string;
}
export interface StopChannelRequest {
  ChannelId: string;
}
export interface StopChannelResponse {
  Arn?: string;
  CdiInputSpecification?: CdiInputSpecification;
  ChannelClass?: ChannelClass;
  Destinations?: Array<OutputDestination>;
  EgressEndpoints?: Array<ChannelEgressEndpoint>;
  EncoderSettings?: EncoderSettings;
  Id?: string;
  InputAttachments?: Array<InputAttachment>;
  InputSpecification?: InputSpecification;
  LogLevel?: LogLevel;
  Maintenance?: MaintenanceStatus;
  Name?: string;
  PipelineDetails?: Array<PipelineDetail>;
  PipelinesRunningCount?: number;
  RoleArn?: string;
  State?: ChannelState;
  Tags?: Record<string, string>;
  Vpc?: VpcOutputSettingsDescription;
  AnywhereSettings?: DescribeAnywhereSettings;
  ChannelEngineVersion?: ChannelEngineVersionResponse;
}
export interface StopInputDeviceRequest {
  InputDeviceId: string;
}
export interface StopInputDeviceResponse {
}
export interface StopMultiplexRequest {
  MultiplexId: string;
}
export interface StopMultiplexResponse {
  Arn?: string;
  AvailabilityZones?: Array<string>;
  Destinations?: Array<MultiplexOutputDestination>;
  Id?: string;
  MultiplexSettings?: MultiplexSettings;
  Name?: string;
  PipelinesRunningCount?: number;
  ProgramCount?: number;
  State?: MultiplexState;
  Tags?: Record<string, string>;
}
export interface StopTimecode {
  LastFrameClippingBehavior?: LastFrameClippingBehavior;
  Timecode?: string;
}
export interface SuccessfulMonitorDeployment {
  DetailsUri: string;
  Status: SignalMapMonitorDeploymentStatus;
}
export type TagMap = Record<string, string>;
export type Tags = Record<string, string>;
export interface TeletextDestinationSettings {
}
export interface TeletextSourceSettings {
  OutputRectangle?: CaptionRectangle;
  PageNumber?: string;
}
export type TemporalFilterPostFilterSharpening = "AUTO" | "DISABLED" | "ENABLED";
export interface TemporalFilterSettings {
  PostFilterSharpening?: TemporalFilterPostFilterSharpening;
  Strength?: TemporalFilterStrength;
}
export type TemporalFilterStrength = "AUTO" | "STRENGTH_1" | "STRENGTH_2" | "STRENGTH_3" | "STRENGTH_4" | "STRENGTH_5" | "STRENGTH_6" | "STRENGTH_7" | "STRENGTH_8" | "STRENGTH_9" | "STRENGTH_10" | "STRENGTH_11" | "STRENGTH_12" | "STRENGTH_13" | "STRENGTH_14" | "STRENGTH_15" | "STRENGTH_16";
export interface Thumbnail {
  Body?: string;
  ContentType?: string;
  ThumbnailType?: ThumbnailType;
  TimeStamp?: Date | string;
}
export interface ThumbnailConfiguration {
  State: ThumbnailState;
}
export interface ThumbnailDetail {
  PipelineId?: string;
  Thumbnails?: Array<Thumbnail>;
}
export type ThumbnailState = "AUTO" | "DISABLED";
export type ThumbnailType = "UNSPECIFIED" | "CURRENT_ACTIVE";
export type TimecodeBurninFontSize = "EXTRA_SMALL_10" | "LARGE_48" | "MEDIUM_32" | "SMALL_16";
export type TimecodeBurninPosition = "BOTTOM_CENTER" | "BOTTOM_LEFT" | "BOTTOM_RIGHT" | "MIDDLE_CENTER" | "MIDDLE_LEFT" | "MIDDLE_RIGHT" | "TOP_CENTER" | "TOP_LEFT" | "TOP_RIGHT";
export interface TimecodeBurninSettings {
  FontSize: TimecodeBurninFontSize;
  Position: TimecodeBurninPosition;
  Prefix?: string;
}
export interface TimecodeConfig {
  Source: TimecodeConfigSource;
  SyncThreshold?: number;
}
export type TimecodeConfigSource = "EMBEDDED" | "SYSTEMCLOCK" | "ZEROBASED";
export interface TimedMetadataScheduleActionSettings {
  Id3: string;
}
export declare class TooManyRequestsException extends Data.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message?: string;
}> {}
export interface TransferInputDeviceRequest {
  InputDeviceId: string;
  TargetCustomerId?: string;
  TargetRegion?: string;
  TransferMessage?: string;
}
export interface TransferInputDeviceResponse {
}
export interface TransferringInputDeviceSummary {
  Id?: string;
  Message?: string;
  TargetCustomerId?: string;
  TransferType?: InputDeviceTransferType;
}
export interface TtmlDestinationSettings {
  StyleControl?: TtmlDestinationStyleControl;
}
export type TtmlDestinationStyleControl = "PASSTHROUGH" | "USE_CONFIGURED";
export interface UdpContainerSettings {
  M2tsSettings?: M2tsSettings;
}
export interface UdpGroupSettings {
  InputLossAction?: InputLossActionForUdpOut;
  TimedMetadataId3Frame?: UdpTimedMetadataId3Frame;
  TimedMetadataId3Period?: number;
}
export interface UdpOutputSettings {
  BufferMsec?: number;
  ContainerSettings: UdpContainerSettings;
  Destination: OutputLocationRef;
  FecOutputSettings?: FecOutputSettings;
}
export type UdpTimedMetadataId3Frame = "NONE" | "PRIV" | "TDRL";
export declare class UnprocessableEntityException extends Data.TaggedError(
  "UnprocessableEntityException",
)<{
  readonly Message?: string;
  readonly ValidationErrors?: Array<ValidationError>;
}> {}
export interface UpdateAccountConfigurationRequest {
  AccountConfiguration?: AccountConfiguration;
}
export interface UpdateAccountConfigurationResponse {
  AccountConfiguration?: AccountConfiguration;
}
export interface UpdateChannelClassRequest {
  ChannelClass: ChannelClass;
  ChannelId: string;
  Destinations?: Array<OutputDestination>;
}
export interface UpdateChannelClassResponse {
  Channel?: Channel;
}
export interface UpdateChannelPlacementGroupRequest {
  ChannelPlacementGroupId: string;
  ClusterId: string;
  Name?: string;
  Nodes?: Array<string>;
}
export interface UpdateChannelPlacementGroupResponse {
  Arn?: string;
  Channels?: Array<string>;
  ClusterId?: string;
  Id?: string;
  Name?: string;
  Nodes?: Array<string>;
  State?: ChannelPlacementGroupState;
}
export interface UpdateChannelRequest {
  CdiInputSpecification?: CdiInputSpecification;
  ChannelId: string;
  Destinations?: Array<OutputDestination>;
  EncoderSettings?: EncoderSettings;
  InputAttachments?: Array<InputAttachment>;
  InputSpecification?: InputSpecification;
  LogLevel?: LogLevel;
  Maintenance?: MaintenanceUpdateSettings;
  Name?: string;
  RoleArn?: string;
  ChannelEngineVersion?: ChannelEngineVersionRequest;
  DryRun?: boolean;
  AnywhereSettings?: AnywhereSettings;
}
export interface UpdateChannelResponse {
  Channel?: Channel;
}
export interface UpdateCloudWatchAlarmTemplateGroupRequest {
  Description?: string;
  Identifier: string;
}
export interface UpdateCloudWatchAlarmTemplateGroupResponse {
  Arn?: string;
  CreatedAt?: Date | string;
  Description?: string;
  Id?: string;
  ModifiedAt?: Date | string;
  Name?: string;
  Tags?: Record<string, string>;
}
export interface UpdateCloudWatchAlarmTemplateRequest {
  ComparisonOperator?: CloudWatchAlarmTemplateComparisonOperator;
  DatapointsToAlarm?: number;
  Description?: string;
  EvaluationPeriods?: number;
  GroupIdentifier?: string;
  Identifier: string;
  MetricName?: string;
  Name?: string;
  Period?: number;
  Statistic?: CloudWatchAlarmTemplateStatistic;
  TargetResourceType?: CloudWatchAlarmTemplateTargetResourceType;
  Threshold?: number;
  TreatMissingData?: CloudWatchAlarmTemplateTreatMissingData;
}
export interface UpdateCloudWatchAlarmTemplateResponse {
  Arn?: string;
  ComparisonOperator?: CloudWatchAlarmTemplateComparisonOperator;
  CreatedAt?: Date | string;
  DatapointsToAlarm?: number;
  Description?: string;
  EvaluationPeriods?: number;
  GroupId?: string;
  Id?: string;
  MetricName?: string;
  ModifiedAt?: Date | string;
  Name?: string;
  Period?: number;
  Statistic?: CloudWatchAlarmTemplateStatistic;
  Tags?: Record<string, string>;
  TargetResourceType?: CloudWatchAlarmTemplateTargetResourceType;
  Threshold?: number;
  TreatMissingData?: CloudWatchAlarmTemplateTreatMissingData;
}
export interface UpdateClusterRequest {
  ClusterId: string;
  Name?: string;
  NetworkSettings?: ClusterNetworkSettingsUpdateRequest;
}
export interface UpdateClusterResponse {
  Arn?: string;
  ChannelIds?: Array<string>;
  ClusterType?: ClusterType;
  Id?: string;
  Name?: string;
  NetworkSettings?: ClusterNetworkSettings;
  State?: ClusterState;
}
export interface UpdateEventBridgeRuleTemplateGroupRequest {
  Description?: string;
  Identifier: string;
}
export interface UpdateEventBridgeRuleTemplateGroupResponse {
  Arn?: string;
  CreatedAt?: Date | string;
  Description?: string;
  Id?: string;
  ModifiedAt?: Date | string;
  Name?: string;
  Tags?: Record<string, string>;
}
export interface UpdateEventBridgeRuleTemplateRequest {
  Description?: string;
  EventTargets?: Array<EventBridgeRuleTemplateTarget>;
  EventType?: EventBridgeRuleTemplateEventType;
  GroupIdentifier?: string;
  Identifier: string;
  Name?: string;
}
export interface UpdateEventBridgeRuleTemplateResponse {
  Arn?: string;
  CreatedAt?: Date | string;
  Description?: string;
  EventTargets?: Array<EventBridgeRuleTemplateTarget>;
  EventType?: EventBridgeRuleTemplateEventType;
  GroupId?: string;
  Id?: string;
  ModifiedAt?: Date | string;
  Name?: string;
  Tags?: Record<string, string>;
}
export interface UpdateInputDeviceRequest {
  HdDeviceSettings?: InputDeviceConfigurableSettings;
  InputDeviceId: string;
  Name?: string;
  UhdDeviceSettings?: InputDeviceConfigurableSettings;
  AvailabilityZone?: string;
}
export interface UpdateInputDeviceResponse {
  Arn?: string;
  ConnectionState?: InputDeviceConnectionState;
  DeviceSettingsSyncState?: DeviceSettingsSyncState;
  DeviceUpdateStatus?: DeviceUpdateStatus;
  HdDeviceSettings?: InputDeviceHdSettings;
  Id?: string;
  MacAddress?: string;
  Name?: string;
  NetworkSettings?: InputDeviceNetworkSettings;
  SerialNumber?: string;
  Type?: InputDeviceType;
  UhdDeviceSettings?: InputDeviceUhdSettings;
  Tags?: Record<string, string>;
  AvailabilityZone?: string;
  MedialiveInputArns?: Array<string>;
  OutputType?: InputDeviceOutputType;
}
export interface UpdateInputRequest {
  Destinations?: Array<InputDestinationRequest>;
  InputDevices?: Array<InputDeviceRequest>;
  InputId: string;
  InputSecurityGroups?: Array<string>;
  MediaConnectFlows?: Array<MediaConnectFlowRequest>;
  Name?: string;
  RoleArn?: string;
  Sources?: Array<InputSourceRequest>;
  SrtSettings?: SrtSettingsRequest;
  MulticastSettings?: MulticastSettingsUpdateRequest;
  Smpte2110ReceiverGroupSettings?: Smpte2110ReceiverGroupSettings;
  SdiSources?: Array<string>;
}
export interface UpdateInputResponse {
  Input?: Input;
}
export interface UpdateInputSecurityGroupRequest {
  InputSecurityGroupId: string;
  Tags?: Record<string, string>;
  WhitelistRules?: Array<InputWhitelistRuleCidr>;
}
export interface UpdateInputSecurityGroupResponse {
  SecurityGroup?: InputSecurityGroup;
}
export interface UpdateMultiplexProgramRequest {
  MultiplexId: string;
  MultiplexProgramSettings?: MultiplexProgramSettings;
  ProgramName: string;
}
export interface UpdateMultiplexProgramResponse {
  MultiplexProgram?: MultiplexProgram;
}
export interface UpdateMultiplexRequest {
  MultiplexId: string;
  MultiplexSettings?: MultiplexSettings;
  Name?: string;
  PacketIdentifiersMapping?: Record<string, MultiplexProgramPacketIdentifiersMap>;
}
export interface UpdateMultiplexResponse {
  Multiplex?: Multiplex;
}
export interface UpdateNetworkRequest {
  IpPools?: Array<IpPoolUpdateRequest>;
  Name?: string;
  NetworkId: string;
  Routes?: Array<RouteUpdateRequest>;
}
export interface UpdateNetworkResponse {
  Arn?: string;
  AssociatedClusterIds?: Array<string>;
  Id?: string;
  IpPools?: Array<IpPool>;
  Name?: string;
  Routes?: Array<Route>;
  State?: NetworkState;
}
export interface UpdateNodeRequest {
  ClusterId: string;
  Name?: string;
  NodeId: string;
  Role?: NodeRole;
  SdiSourceMappings?: Array<SdiSourceMappingUpdateRequest>;
}
export interface UpdateNodeResponse {
  Arn?: string;
  ChannelPlacementGroups?: Array<string>;
  ClusterId?: string;
  ConnectionState?: NodeConnectionState;
  Id?: string;
  InstanceArn?: string;
  Name?: string;
  NodeInterfaceMappings?: Array<NodeInterfaceMapping>;
  Role?: NodeRole;
  State?: NodeState;
  SdiSourceMappings?: Array<SdiSourceMapping>;
}
export interface UpdateNodeStateRequest {
  ClusterId: string;
  NodeId: string;
  State?: UpdateNodeStateShape;
}
export interface UpdateNodeStateResponse {
  Arn?: string;
  ChannelPlacementGroups?: Array<string>;
  ClusterId?: string;
  ConnectionState?: NodeConnectionState;
  Id?: string;
  InstanceArn?: string;
  Name?: string;
  NodeInterfaceMappings?: Array<NodeInterfaceMapping>;
  Role?: NodeRole;
  State?: NodeState;
  SdiSourceMappings?: Array<SdiSourceMapping>;
}
export type UpdateNodeStateShape = "ACTIVE" | "DRAINING";
export interface UpdateReservationRequest {
  Name?: string;
  RenewalSettings?: RenewalSettings;
  ReservationId: string;
}
export interface UpdateReservationResponse {
  Reservation?: Reservation;
}
export interface UpdateSdiSourceRequest {
  Mode?: SdiSourceMode;
  Name?: string;
  SdiSourceId: string;
  Type?: SdiSourceType;
}
export interface UpdateSdiSourceResponse {
  SdiSource?: SdiSource;
}
export interface ValidationError {
  ElementPath?: string;
  ErrorMessage?: string;
}
export interface VideoBlackFailoverSettings {
  BlackDetectThreshold?: number;
  VideoBlackThresholdMsec?: number;
}
export interface VideoCodecSettings {
  FrameCaptureSettings?: FrameCaptureSettings;
  H264Settings?: H264Settings;
  H265Settings?: H265Settings;
  Mpeg2Settings?: Mpeg2Settings;
  Av1Settings?: Av1Settings;
}
export interface VideoDescription {
  CodecSettings?: VideoCodecSettings;
  Height?: number;
  Name: string;
  RespondToAfd?: VideoDescriptionRespondToAfd;
  ScalingBehavior?: VideoDescriptionScalingBehavior;
  Sharpness?: number;
  Width?: number;
}
export type VideoDescriptionRespondToAfd = "NONE" | "PASSTHROUGH" | "RESPOND";
export type VideoDescriptionScalingBehavior = "DEFAULT" | "STRETCH_TO_OUTPUT";
export interface VideoSelector {
  ColorSpace?: VideoSelectorColorSpace;
  ColorSpaceSettings?: VideoSelectorColorSpaceSettings;
  ColorSpaceUsage?: VideoSelectorColorSpaceUsage;
  SelectorSettings?: VideoSelectorSettings;
}
export type VideoSelectorColorSpace = "FOLLOW" | "HDR10" | "HLG_2020" | "REC_601" | "REC_709";
export interface VideoSelectorColorSpaceSettings {
  Hdr10Settings?: Hdr10Settings;
}
export type VideoSelectorColorSpaceUsage = "FALLBACK" | "FORCE";
export interface VideoSelectorPid {
  Pid?: number;
}
export interface VideoSelectorProgramId {
  ProgramId?: number;
}
export interface VideoSelectorSettings {
  VideoSelectorPid?: VideoSelectorPid;
  VideoSelectorProgramId?: VideoSelectorProgramId;
}
export interface VpcOutputSettings {
  PublicAddressAllocationIds?: Array<string>;
  SecurityGroupIds?: Array<string>;
  SubnetIds: Array<string>;
}
export interface VpcOutputSettingsDescription {
  AvailabilityZones?: Array<string>;
  NetworkInterfaceIds?: Array<string>;
  SecurityGroupIds?: Array<string>;
  SubnetIds?: Array<string>;
}
export type WavCodingMode = "CODING_MODE_1_0" | "CODING_MODE_2_0" | "CODING_MODE_4_0" | "CODING_MODE_8_0";
export interface WavSettings {
  BitDepth?: number;
  CodingMode?: WavCodingMode;
  SampleRate?: number;
}
export interface WebvttDestinationSettings {
  StyleControl?: WebvttDestinationStyleControl;
}
export type WebvttDestinationStyleControl = "NO_STYLE_DATA" | "PASSTHROUGH";
export declare namespace AcceptInputDeviceTransfer {
  export type Input = AcceptInputDeviceTransferRequest;
  export type Output = AcceptInputDeviceTransferResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace BatchDelete {
  export type Input = BatchDeleteRequest;
  export type Output = BatchDeleteResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace BatchStart {
  export type Input = BatchStartRequest;
  export type Output = BatchStartResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace BatchStop {
  export type Input = BatchStopRequest;
  export type Output = BatchStopResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace BatchUpdateSchedule {
  export type Input = BatchUpdateScheduleRequest;
  export type Output = BatchUpdateScheduleResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace CancelInputDeviceTransfer {
  export type Input = CancelInputDeviceTransferRequest;
  export type Output = CancelInputDeviceTransferResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace ClaimDevice {
  export type Input = ClaimDeviceRequest;
  export type Output = ClaimDeviceResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace CreateChannel {
  export type Input = CreateChannelRequest;
  export type Output = CreateChannelResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace CreateChannelPlacementGroup {
  export type Input = CreateChannelPlacementGroupRequest;
  export type Output = CreateChannelPlacementGroupResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace CreateCloudWatchAlarmTemplate {
  export type Input = CreateCloudWatchAlarmTemplateRequest;
  export type Output = CreateCloudWatchAlarmTemplateResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateCloudWatchAlarmTemplateGroup {
  export type Input = CreateCloudWatchAlarmTemplateGroupRequest;
  export type Output = CreateCloudWatchAlarmTemplateGroupResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateCluster {
  export type Input = CreateClusterRequest;
  export type Output = CreateClusterResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateEventBridgeRuleTemplate {
  export type Input = CreateEventBridgeRuleTemplateRequest;
  export type Output = CreateEventBridgeRuleTemplateResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateEventBridgeRuleTemplateGroup {
  export type Input = CreateEventBridgeRuleTemplateGroupRequest;
  export type Output = CreateEventBridgeRuleTemplateGroupResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateInput {
  export type Input = CreateInputRequest;
  export type Output = CreateInputResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateInputSecurityGroup {
  export type Input = CreateInputSecurityGroupRequest;
  export type Output = CreateInputSecurityGroupResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateMultiplex {
  export type Input = CreateMultiplexRequest;
  export type Output = CreateMultiplexResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace CreateMultiplexProgram {
  export type Input = CreateMultiplexProgramRequest;
  export type Output = CreateMultiplexProgramResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace CreateNetwork {
  export type Input = CreateNetworkRequest;
  export type Output = CreateNetworkResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateNode {
  export type Input = CreateNodeRequest;
  export type Output = CreateNodeResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace CreateNodeRegistrationScript {
  export type Input = CreateNodeRegistrationScriptRequest;
  export type Output = CreateNodeRegistrationScriptResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreatePartnerInput {
  export type Input = CreatePartnerInputRequest;
  export type Output = CreatePartnerInputResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateSdiSource {
  export type Input = CreateSdiSourceRequest;
  export type Output = CreateSdiSourceResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateSignalMap {
  export type Input = CreateSignalMapRequest;
  export type Output = CreateSignalMapResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateTags {
  export type Input = CreateTagsRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DeleteChannel {
  export type Input = DeleteChannelRequest;
  export type Output = DeleteChannelResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteChannelPlacementGroup {
  export type Input = DeleteChannelPlacementGroupRequest;
  export type Output = DeleteChannelPlacementGroupResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteCloudWatchAlarmTemplate {
  export type Input = DeleteCloudWatchAlarmTemplateRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteCloudWatchAlarmTemplateGroup {
  export type Input = DeleteCloudWatchAlarmTemplateGroupRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteCluster {
  export type Input = DeleteClusterRequest;
  export type Output = DeleteClusterResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteEventBridgeRuleTemplate {
  export type Input = DeleteEventBridgeRuleTemplateRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteEventBridgeRuleTemplateGroup {
  export type Input = DeleteEventBridgeRuleTemplateGroupRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteInput {
  export type Input = DeleteInputRequest;
  export type Output = DeleteInputResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteInputSecurityGroup {
  export type Input = DeleteInputSecurityGroupRequest;
  export type Output = DeleteInputSecurityGroupResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteMultiplex {
  export type Input = DeleteMultiplexRequest;
  export type Output = DeleteMultiplexResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteMultiplexProgram {
  export type Input = DeleteMultiplexProgramRequest;
  export type Output = DeleteMultiplexProgramResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteNetwork {
  export type Input = DeleteNetworkRequest;
  export type Output = DeleteNetworkResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteNode {
  export type Input = DeleteNodeRequest;
  export type Output = DeleteNodeResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteReservation {
  export type Input = DeleteReservationRequest;
  export type Output = DeleteReservationResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteSchedule {
  export type Input = DeleteScheduleRequest;
  export type Output = DeleteScheduleResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteSdiSource {
  export type Input = DeleteSdiSourceRequest;
  export type Output = DeleteSdiSourceResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteSignalMap {
  export type Input = DeleteSignalMapRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteTags {
  export type Input = DeleteTagsRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace DescribeAccountConfiguration {
  export type Input = DescribeAccountConfigurationRequest;
  export type Output = DescribeAccountConfigurationResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeChannel {
  export type Input = DescribeChannelRequest;
  export type Output = DescribeChannelResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeChannelPlacementGroup {
  export type Input = DescribeChannelPlacementGroupRequest;
  export type Output = DescribeChannelPlacementGroupResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeCluster {
  export type Input = DescribeClusterRequest;
  export type Output = DescribeClusterResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeInput {
  export type Input = DescribeInputRequest;
  export type Output = DescribeInputResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeInputDevice {
  export type Input = DescribeInputDeviceRequest;
  export type Output = DescribeInputDeviceResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeInputDeviceThumbnail {
  export type Input = DescribeInputDeviceThumbnailRequest;
  export type Output = DescribeInputDeviceThumbnailResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeInputSecurityGroup {
  export type Input = DescribeInputSecurityGroupRequest;
  export type Output = DescribeInputSecurityGroupResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeMultiplex {
  export type Input = DescribeMultiplexRequest;
  export type Output = DescribeMultiplexResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeMultiplexProgram {
  export type Input = DescribeMultiplexProgramRequest;
  export type Output = DescribeMultiplexProgramResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeNetwork {
  export type Input = DescribeNetworkRequest;
  export type Output = DescribeNetworkResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeNode {
  export type Input = DescribeNodeRequest;
  export type Output = DescribeNodeResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeOffering {
  export type Input = DescribeOfferingRequest;
  export type Output = DescribeOfferingResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeReservation {
  export type Input = DescribeReservationRequest;
  export type Output = DescribeReservationResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeSchedule {
  export type Input = DescribeScheduleRequest;
  export type Output = DescribeScheduleResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeSdiSource {
  export type Input = DescribeSdiSourceRequest;
  export type Output = DescribeSdiSourceResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DescribeThumbnails {
  export type Input = DescribeThumbnailsRequest;
  export type Output = DescribeThumbnailsResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetCloudWatchAlarmTemplate {
  export type Input = GetCloudWatchAlarmTemplateRequest;
  export type Output = GetCloudWatchAlarmTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetCloudWatchAlarmTemplateGroup {
  export type Input = GetCloudWatchAlarmTemplateGroupRequest;
  export type Output = GetCloudWatchAlarmTemplateGroupResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetEventBridgeRuleTemplate {
  export type Input = GetEventBridgeRuleTemplateRequest;
  export type Output = GetEventBridgeRuleTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetEventBridgeRuleTemplateGroup {
  export type Input = GetEventBridgeRuleTemplateGroupRequest;
  export type Output = GetEventBridgeRuleTemplateGroupResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetSignalMap {
  export type Input = GetSignalMapRequest;
  export type Output = GetSignalMapResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListChannelPlacementGroups {
  export type Input = ListChannelPlacementGroupsRequest;
  export type Output = ListChannelPlacementGroupsResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListChannels {
  export type Input = ListChannelsRequest;
  export type Output = ListChannelsResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListCloudWatchAlarmTemplateGroups {
  export type Input = ListCloudWatchAlarmTemplateGroupsRequest;
  export type Output = ListCloudWatchAlarmTemplateGroupsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListCloudWatchAlarmTemplates {
  export type Input = ListCloudWatchAlarmTemplatesRequest;
  export type Output = ListCloudWatchAlarmTemplatesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListClusters {
  export type Input = ListClustersRequest;
  export type Output = ListClustersResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListEventBridgeRuleTemplateGroups {
  export type Input = ListEventBridgeRuleTemplateGroupsRequest;
  export type Output = ListEventBridgeRuleTemplateGroupsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListEventBridgeRuleTemplates {
  export type Input = ListEventBridgeRuleTemplatesRequest;
  export type Output = ListEventBridgeRuleTemplatesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListInputDeviceTransfers {
  export type Input = ListInputDeviceTransfersRequest;
  export type Output = ListInputDeviceTransfersResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace ListInputDevices {
  export type Input = ListInputDevicesRequest;
  export type Output = ListInputDevicesResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListInputSecurityGroups {
  export type Input = ListInputSecurityGroupsRequest;
  export type Output = ListInputSecurityGroupsResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListInputs {
  export type Input = ListInputsRequest;
  export type Output = ListInputsResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListMultiplexPrograms {
  export type Input = ListMultiplexProgramsRequest;
  export type Output = ListMultiplexProgramsResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListMultiplexes {
  export type Input = ListMultiplexesRequest;
  export type Output = ListMultiplexesResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListNetworks {
  export type Input = ListNetworksRequest;
  export type Output = ListNetworksResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListNodes {
  export type Input = ListNodesRequest;
  export type Output = ListNodesResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListOfferings {
  export type Input = ListOfferingsRequest;
  export type Output = ListOfferingsResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListReservations {
  export type Input = ListReservationsRequest;
  export type Output = ListReservationsResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListSdiSources {
  export type Input = ListSdiSourcesRequest;
  export type Output = ListSdiSourcesResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListSignalMaps {
  export type Input = ListSignalMapsRequest;
  export type Output = ListSignalMapsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace ListVersions {
  export type Input = ListVersionsRequest;
  export type Output = ListVersionsResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PurchaseOffering {
  export type Input = PurchaseOfferingRequest;
  export type Output = PurchaseOfferingResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace RebootInputDevice {
  export type Input = RebootInputDeviceRequest;
  export type Output = RebootInputDeviceResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace RejectInputDeviceTransfer {
  export type Input = RejectInputDeviceTransferRequest;
  export type Output = RejectInputDeviceTransferResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace RestartChannelPipelines {
  export type Input = RestartChannelPipelinesRequest;
  export type Output = RestartChannelPipelinesResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StartChannel {
  export type Input = StartChannelRequest;
  export type Output = StartChannelResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StartDeleteMonitorDeployment {
  export type Input = StartDeleteMonitorDeploymentRequest;
  export type Output = StartDeleteMonitorDeploymentResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StartInputDevice {
  export type Input = StartInputDeviceRequest;
  export type Output = StartInputDeviceResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace StartInputDeviceMaintenanceWindow {
  export type Input = StartInputDeviceMaintenanceWindowRequest;
  export type Output = StartInputDeviceMaintenanceWindowResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace StartMonitorDeployment {
  export type Input = StartMonitorDeploymentRequest;
  export type Output = StartMonitorDeploymentResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StartMultiplex {
  export type Input = StartMultiplexRequest;
  export type Output = StartMultiplexResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StartUpdateSignalMap {
  export type Input = StartUpdateSignalMapRequest;
  export type Output = StartUpdateSignalMapResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StopChannel {
  export type Input = StopChannelRequest;
  export type Output = StopChannelResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StopInputDevice {
  export type Input = StopInputDeviceRequest;
  export type Output = StopInputDeviceResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace StopMultiplex {
  export type Input = StopMultiplexRequest;
  export type Output = StopMultiplexResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace TransferInputDevice {
  export type Input = TransferInputDeviceRequest;
  export type Output = TransferInputDeviceResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace UpdateAccountConfiguration {
  export type Input = UpdateAccountConfigurationRequest;
  export type Output = UpdateAccountConfigurationResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace UpdateChannel {
  export type Input = UpdateChannelRequest;
  export type Output = UpdateChannelResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace UpdateChannelClass {
  export type Input = UpdateChannelClassRequest;
  export type Output = UpdateChannelClassResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace UpdateChannelPlacementGroup {
  export type Input = UpdateChannelPlacementGroupRequest;
  export type Output = UpdateChannelPlacementGroupResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace UpdateCloudWatchAlarmTemplate {
  export type Input = UpdateCloudWatchAlarmTemplateRequest;
  export type Output = UpdateCloudWatchAlarmTemplateResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateCloudWatchAlarmTemplateGroup {
  export type Input = UpdateCloudWatchAlarmTemplateGroupRequest;
  export type Output = UpdateCloudWatchAlarmTemplateGroupResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateCluster {
  export type Input = UpdateClusterRequest;
  export type Output = UpdateClusterResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateEventBridgeRuleTemplate {
  export type Input = UpdateEventBridgeRuleTemplateRequest;
  export type Output = UpdateEventBridgeRuleTemplateResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateEventBridgeRuleTemplateGroup {
  export type Input = UpdateEventBridgeRuleTemplateGroupRequest;
  export type Output = UpdateEventBridgeRuleTemplateGroupResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateInput {
  export type Input = UpdateInputRequest;
  export type Output = UpdateInputResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UpdateInputDevice {
  export type Input = UpdateInputDeviceRequest;
  export type Output = UpdateInputDeviceResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace UpdateInputSecurityGroup {
  export type Input = UpdateInputSecurityGroupRequest;
  export type Output = UpdateInputSecurityGroupResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UpdateMultiplex {
  export type Input = UpdateMultiplexRequest;
  export type Output = UpdateMultiplexResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace UpdateMultiplexProgram {
  export type Input = UpdateMultiplexProgramRequest;
  export type Output = UpdateMultiplexProgramResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace UpdateNetwork {
  export type Input = UpdateNetworkRequest;
  export type Output = UpdateNetworkResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateNode {
  export type Input = UpdateNodeRequest;
  export type Output = UpdateNodeResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateNodeState {
  export type Input = UpdateNodeStateRequest;
  export type Output = UpdateNodeStateResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | UnprocessableEntityException
    | CommonAwsError;
}

export declare namespace UpdateReservation {
  export type Input = UpdateReservationRequest;
  export type Output = UpdateReservationResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateSdiSource {
  export type Input = UpdateSdiSourceRequest;
  export type Output = UpdateSdiSourceResponse;
  export type Error =
    | BadGatewayException
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | GatewayTimeoutException
    | InternalServerErrorException
    | TooManyRequestsException
    | CommonAwsError;
}

