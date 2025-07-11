import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Pinpoint {
  createApp(
    input: CreateAppRequest,
  ): Effect.Effect<
    CreateAppResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createCampaign(
    input: CreateCampaignRequest,
  ): Effect.Effect<
    CreateCampaignResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createEmailTemplate(
    input: CreateEmailTemplateRequest,
  ): Effect.Effect<
    CreateEmailTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createExportJob(
    input: CreateExportJobRequest,
  ): Effect.Effect<
    CreateExportJobResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createImportJob(
    input: CreateImportJobRequest,
  ): Effect.Effect<
    CreateImportJobResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createInAppTemplate(
    input: CreateInAppTemplateRequest,
  ): Effect.Effect<
    CreateInAppTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createJourney(
    input: CreateJourneyRequest,
  ): Effect.Effect<
    CreateJourneyResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createPushTemplate(
    input: CreatePushTemplateRequest,
  ): Effect.Effect<
    CreatePushTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createRecommenderConfiguration(
    input: CreateRecommenderConfigurationRequest,
  ): Effect.Effect<
    CreateRecommenderConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createSegment(
    input: CreateSegmentRequest,
  ): Effect.Effect<
    CreateSegmentResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createSmsTemplate(
    input: CreateSmsTemplateRequest,
  ): Effect.Effect<
    CreateSmsTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createVoiceTemplate(
    input: CreateVoiceTemplateRequest,
  ): Effect.Effect<
    CreateVoiceTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteAdmChannel(
    input: DeleteAdmChannelRequest,
  ): Effect.Effect<
    DeleteAdmChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteApnsChannel(
    input: DeleteApnsChannelRequest,
  ): Effect.Effect<
    DeleteApnsChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteApnsSandboxChannel(
    input: DeleteApnsSandboxChannelRequest,
  ): Effect.Effect<
    DeleteApnsSandboxChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteApnsVoipChannel(
    input: DeleteApnsVoipChannelRequest,
  ): Effect.Effect<
    DeleteApnsVoipChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteApnsVoipSandboxChannel(
    input: DeleteApnsVoipSandboxChannelRequest,
  ): Effect.Effect<
    DeleteApnsVoipSandboxChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteApp(
    input: DeleteAppRequest,
  ): Effect.Effect<
    DeleteAppResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteBaiduChannel(
    input: DeleteBaiduChannelRequest,
  ): Effect.Effect<
    DeleteBaiduChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteCampaign(
    input: DeleteCampaignRequest,
  ): Effect.Effect<
    DeleteCampaignResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteEmailChannel(
    input: DeleteEmailChannelRequest,
  ): Effect.Effect<
    DeleteEmailChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteEmailTemplate(
    input: DeleteEmailTemplateRequest,
  ): Effect.Effect<
    DeleteEmailTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteEndpoint(
    input: DeleteEndpointRequest,
  ): Effect.Effect<
    DeleteEndpointResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteEventStream(
    input: DeleteEventStreamRequest,
  ): Effect.Effect<
    DeleteEventStreamResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteGcmChannel(
    input: DeleteGcmChannelRequest,
  ): Effect.Effect<
    DeleteGcmChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteInAppTemplate(
    input: DeleteInAppTemplateRequest,
  ): Effect.Effect<
    DeleteInAppTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteJourney(
    input: DeleteJourneyRequest,
  ): Effect.Effect<
    DeleteJourneyResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deletePushTemplate(
    input: DeletePushTemplateRequest,
  ): Effect.Effect<
    DeletePushTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteRecommenderConfiguration(
    input: DeleteRecommenderConfigurationRequest,
  ): Effect.Effect<
    DeleteRecommenderConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteSegment(
    input: DeleteSegmentRequest,
  ): Effect.Effect<
    DeleteSegmentResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteSmsChannel(
    input: DeleteSmsChannelRequest,
  ): Effect.Effect<
    DeleteSmsChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteSmsTemplate(
    input: DeleteSmsTemplateRequest,
  ): Effect.Effect<
    DeleteSmsTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteUserEndpoints(
    input: DeleteUserEndpointsRequest,
  ): Effect.Effect<
    DeleteUserEndpointsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteVoiceChannel(
    input: DeleteVoiceChannelRequest,
  ): Effect.Effect<
    DeleteVoiceChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deleteVoiceTemplate(
    input: DeleteVoiceTemplateRequest,
  ): Effect.Effect<
    DeleteVoiceTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getAdmChannel(
    input: GetAdmChannelRequest,
  ): Effect.Effect<
    GetAdmChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getApnsChannel(
    input: GetApnsChannelRequest,
  ): Effect.Effect<
    GetApnsChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getApnsSandboxChannel(
    input: GetApnsSandboxChannelRequest,
  ): Effect.Effect<
    GetApnsSandboxChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getApnsVoipChannel(
    input: GetApnsVoipChannelRequest,
  ): Effect.Effect<
    GetApnsVoipChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getApnsVoipSandboxChannel(
    input: GetApnsVoipSandboxChannelRequest,
  ): Effect.Effect<
    GetApnsVoipSandboxChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getApp(
    input: GetAppRequest,
  ): Effect.Effect<
    GetAppResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getApplicationDateRangeKpi(
    input: GetApplicationDateRangeKpiRequest,
  ): Effect.Effect<
    GetApplicationDateRangeKpiResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getApplicationSettings(
    input: GetApplicationSettingsRequest,
  ): Effect.Effect<
    GetApplicationSettingsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getApps(
    input: GetAppsRequest,
  ): Effect.Effect<
    GetAppsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getBaiduChannel(
    input: GetBaiduChannelRequest,
  ): Effect.Effect<
    GetBaiduChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getCampaign(
    input: GetCampaignRequest,
  ): Effect.Effect<
    GetCampaignResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getCampaignActivities(
    input: GetCampaignActivitiesRequest,
  ): Effect.Effect<
    GetCampaignActivitiesResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getCampaignDateRangeKpi(
    input: GetCampaignDateRangeKpiRequest,
  ): Effect.Effect<
    GetCampaignDateRangeKpiResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getCampaigns(
    input: GetCampaignsRequest,
  ): Effect.Effect<
    GetCampaignsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getCampaignVersion(
    input: GetCampaignVersionRequest,
  ): Effect.Effect<
    GetCampaignVersionResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getCampaignVersions(
    input: GetCampaignVersionsRequest,
  ): Effect.Effect<
    GetCampaignVersionsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getChannels(
    input: GetChannelsRequest,
  ): Effect.Effect<
    GetChannelsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getEmailChannel(
    input: GetEmailChannelRequest,
  ): Effect.Effect<
    GetEmailChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getEmailTemplate(
    input: GetEmailTemplateRequest,
  ): Effect.Effect<
    GetEmailTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getEndpoint(
    input: GetEndpointRequest,
  ): Effect.Effect<
    GetEndpointResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getEventStream(
    input: GetEventStreamRequest,
  ): Effect.Effect<
    GetEventStreamResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getExportJob(
    input: GetExportJobRequest,
  ): Effect.Effect<
    GetExportJobResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getExportJobs(
    input: GetExportJobsRequest,
  ): Effect.Effect<
    GetExportJobsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getGcmChannel(
    input: GetGcmChannelRequest,
  ): Effect.Effect<
    GetGcmChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getImportJob(
    input: GetImportJobRequest,
  ): Effect.Effect<
    GetImportJobResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getImportJobs(
    input: GetImportJobsRequest,
  ): Effect.Effect<
    GetImportJobsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getInAppMessages(
    input: GetInAppMessagesRequest,
  ): Effect.Effect<
    GetInAppMessagesResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getInAppTemplate(
    input: GetInAppTemplateRequest,
  ): Effect.Effect<
    GetInAppTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getJourney(
    input: GetJourneyRequest,
  ): Effect.Effect<
    GetJourneyResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getJourneyDateRangeKpi(
    input: GetJourneyDateRangeKpiRequest,
  ): Effect.Effect<
    GetJourneyDateRangeKpiResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getJourneyExecutionActivityMetrics(
    input: GetJourneyExecutionActivityMetricsRequest,
  ): Effect.Effect<
    GetJourneyExecutionActivityMetricsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getJourneyExecutionMetrics(
    input: GetJourneyExecutionMetricsRequest,
  ): Effect.Effect<
    GetJourneyExecutionMetricsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getJourneyRunExecutionActivityMetrics(
    input: GetJourneyRunExecutionActivityMetricsRequest,
  ): Effect.Effect<
    GetJourneyRunExecutionActivityMetricsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getJourneyRunExecutionMetrics(
    input: GetJourneyRunExecutionMetricsRequest,
  ): Effect.Effect<
    GetJourneyRunExecutionMetricsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getJourneyRuns(
    input: GetJourneyRunsRequest,
  ): Effect.Effect<
    GetJourneyRunsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getPushTemplate(
    input: GetPushTemplateRequest,
  ): Effect.Effect<
    GetPushTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getRecommenderConfiguration(
    input: GetRecommenderConfigurationRequest,
  ): Effect.Effect<
    GetRecommenderConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getRecommenderConfigurations(
    input: GetRecommenderConfigurationsRequest,
  ): Effect.Effect<
    GetRecommenderConfigurationsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getSegment(
    input: GetSegmentRequest,
  ): Effect.Effect<
    GetSegmentResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getSegmentExportJobs(
    input: GetSegmentExportJobsRequest,
  ): Effect.Effect<
    GetSegmentExportJobsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getSegmentImportJobs(
    input: GetSegmentImportJobsRequest,
  ): Effect.Effect<
    GetSegmentImportJobsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getSegments(
    input: GetSegmentsRequest,
  ): Effect.Effect<
    GetSegmentsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getSegmentVersion(
    input: GetSegmentVersionRequest,
  ): Effect.Effect<
    GetSegmentVersionResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getSegmentVersions(
    input: GetSegmentVersionsRequest,
  ): Effect.Effect<
    GetSegmentVersionsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getSmsChannel(
    input: GetSmsChannelRequest,
  ): Effect.Effect<
    GetSmsChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getSmsTemplate(
    input: GetSmsTemplateRequest,
  ): Effect.Effect<
    GetSmsTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getUserEndpoints(
    input: GetUserEndpointsRequest,
  ): Effect.Effect<
    GetUserEndpointsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getVoiceChannel(
    input: GetVoiceChannelRequest,
  ): Effect.Effect<
    GetVoiceChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getVoiceTemplate(
    input: GetVoiceTemplateRequest,
  ): Effect.Effect<
    GetVoiceTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listJourneys(
    input: ListJourneysRequest,
  ): Effect.Effect<
    ListJourneysResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<ListTagsForResourceResponse, CommonAwsError>;
  listTemplates(
    input: ListTemplatesRequest,
  ): Effect.Effect<
    ListTemplatesResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listTemplateVersions(
    input: ListTemplateVersionsRequest,
  ): Effect.Effect<
    ListTemplateVersionsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  phoneNumberValidate(
    input: PhoneNumberValidateRequest,
  ): Effect.Effect<
    PhoneNumberValidateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putEvents(
    input: PutEventsRequest,
  ): Effect.Effect<
    PutEventsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  putEventStream(
    input: PutEventStreamRequest,
  ): Effect.Effect<
    PutEventStreamResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  removeAttributes(
    input: RemoveAttributesRequest,
  ): Effect.Effect<
    RemoveAttributesResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  sendMessages(
    input: SendMessagesRequest,
  ): Effect.Effect<
    SendMessagesResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  sendOTPMessage(
    input: SendOTPMessageRequest,
  ): Effect.Effect<
    SendOTPMessageResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  sendUsersMessages(
    input: SendUsersMessagesRequest,
  ): Effect.Effect<
    SendUsersMessagesResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  tagResource(input: TagResourceRequest): Effect.Effect<{}, CommonAwsError>;
  untagResource(input: UntagResourceRequest): Effect.Effect<{}, CommonAwsError>;
  updateAdmChannel(
    input: UpdateAdmChannelRequest,
  ): Effect.Effect<
    UpdateAdmChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateApnsChannel(
    input: UpdateApnsChannelRequest,
  ): Effect.Effect<
    UpdateApnsChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateApnsSandboxChannel(
    input: UpdateApnsSandboxChannelRequest,
  ): Effect.Effect<
    UpdateApnsSandboxChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateApnsVoipChannel(
    input: UpdateApnsVoipChannelRequest,
  ): Effect.Effect<
    UpdateApnsVoipChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateApnsVoipSandboxChannel(
    input: UpdateApnsVoipSandboxChannelRequest,
  ): Effect.Effect<
    UpdateApnsVoipSandboxChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateApplicationSettings(
    input: UpdateApplicationSettingsRequest,
  ): Effect.Effect<
    UpdateApplicationSettingsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateBaiduChannel(
    input: UpdateBaiduChannelRequest,
  ): Effect.Effect<
    UpdateBaiduChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateCampaign(
    input: UpdateCampaignRequest,
  ): Effect.Effect<
    UpdateCampaignResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateEmailChannel(
    input: UpdateEmailChannelRequest,
  ): Effect.Effect<
    UpdateEmailChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateEmailTemplate(
    input: UpdateEmailTemplateRequest,
  ): Effect.Effect<
    UpdateEmailTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateEndpoint(
    input: UpdateEndpointRequest,
  ): Effect.Effect<
    UpdateEndpointResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateEndpointsBatch(
    input: UpdateEndpointsBatchRequest,
  ): Effect.Effect<
    UpdateEndpointsBatchResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateGcmChannel(
    input: UpdateGcmChannelRequest,
  ): Effect.Effect<
    UpdateGcmChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateInAppTemplate(
    input: UpdateInAppTemplateRequest,
  ): Effect.Effect<
    UpdateInAppTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateJourney(
    input: UpdateJourneyRequest,
  ): Effect.Effect<
    UpdateJourneyResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateJourneyState(
    input: UpdateJourneyStateRequest,
  ): Effect.Effect<
    UpdateJourneyStateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updatePushTemplate(
    input: UpdatePushTemplateRequest,
  ): Effect.Effect<
    UpdatePushTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateRecommenderConfiguration(
    input: UpdateRecommenderConfigurationRequest,
  ): Effect.Effect<
    UpdateRecommenderConfigurationResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateSegment(
    input: UpdateSegmentRequest,
  ): Effect.Effect<
    UpdateSegmentResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateSmsChannel(
    input: UpdateSmsChannelRequest,
  ): Effect.Effect<
    UpdateSmsChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateSmsTemplate(
    input: UpdateSmsTemplateRequest,
  ): Effect.Effect<
    UpdateSmsTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateTemplateActiveVersion(
    input: UpdateTemplateActiveVersionRequest,
  ): Effect.Effect<
    UpdateTemplateActiveVersionResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateVoiceChannel(
    input: UpdateVoiceChannelRequest,
  ): Effect.Effect<
    UpdateVoiceChannelResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateVoiceTemplate(
    input: UpdateVoiceTemplateRequest,
  ): Effect.Effect<
    UpdateVoiceTemplateResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
  verifyOTPMessage(
    input: VerifyOTPMessageRequest,
  ): Effect.Effect<
    VerifyOTPMessageResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError
  >;
}

export type __blob = Uint8Array | string;

export type __boolean = boolean;

export type __double = number;

export type __EndpointTypesElement =
  | "PUSH"
  | "GCM"
  | "APNS"
  | "APNS_SANDBOX"
  | "APNS_VOIP"
  | "APNS_VOIP_SANDBOX"
  | "ADM"
  | "SMS"
  | "VOICE"
  | "EMAIL"
  | "BAIDU"
  | "CUSTOM"
  | "IN_APP";
export type __integer = number;

export type __string = string;

export type __timestampIso8601 = Date | string;

export type __TimezoneEstimationMethodsElement = "PHONE_NUMBER" | "POSTAL_CODE";
export type Action = "OPEN_APP" | "DEEP_LINK" | "URL";
export interface ActivitiesResponse {
  Item: Array<ActivityResponse>;
  NextToken?: string;
}
export interface Activity {
  CUSTOM?: CustomMessageActivity;
  ConditionalSplit?: ConditionalSplitActivity;
  Description?: string;
  EMAIL?: EmailMessageActivity;
  Holdout?: HoldoutActivity;
  MultiCondition?: MultiConditionalSplitActivity;
  PUSH?: PushMessageActivity;
  RandomSplit?: RandomSplitActivity;
  SMS?: SMSMessageActivity;
  Wait?: WaitActivity;
  ContactCenter?: ContactCenterActivity;
}
export interface ActivityResponse {
  ApplicationId: string;
  CampaignId: string;
  End?: string;
  Id: string;
  Result?: string;
  ScheduledStart?: string;
  Start?: string;
  State?: string;
  SuccessfulEndpointCount?: number;
  TimezonesCompletedCount?: number;
  TimezonesTotalCount?: number;
  TotalEndpointCount?: number;
  TreatmentId?: string;
  ExecutionMetrics?: Record<string, string>;
}
export interface AddressConfiguration {
  BodyOverride?: string;
  ChannelType?: ChannelType;
  Context?: Record<string, string>;
  RawContent?: string;
  Substitutions?: Record<string, Array<string>>;
  TitleOverride?: string;
}
export interface ADMChannelRequest {
  ClientId: string;
  ClientSecret: string;
  Enabled?: boolean;
}
export interface ADMChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Platform: string;
  Version?: number;
}
export interface ADMMessage {
  Action?: Action;
  Body?: string;
  ConsolidationKey?: string;
  Data?: Record<string, string>;
  ExpiresAfter?: string;
  IconReference?: string;
  ImageIconUrl?: string;
  ImageUrl?: string;
  MD5?: string;
  RawContent?: string;
  SilentPush?: boolean;
  SmallImageIconUrl?: string;
  Sound?: string;
  Substitutions?: Record<string, Array<string>>;
  Title?: string;
  Url?: string;
}
export type Alignment = "LEFT" | "CENTER" | "RIGHT";
export interface AndroidPushNotificationTemplate {
  Action?: Action;
  Body?: string;
  ImageIconUrl?: string;
  ImageUrl?: string;
  RawContent?: string;
  SmallImageIconUrl?: string;
  Sound?: string;
  Title?: string;
  Url?: string;
}
export interface APNSChannelRequest {
  BundleId?: string;
  Certificate?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  PrivateKey?: string;
  TeamId?: string;
  TokenKey?: string;
  TokenKeyId?: string;
}
export interface APNSChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  HasTokenKey?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Platform: string;
  Version?: number;
}
export interface APNSMessage {
  APNSPushType?: string;
  Action?: Action;
  Badge?: number;
  Body?: string;
  Category?: string;
  CollapseId?: string;
  Data?: Record<string, string>;
  MediaUrl?: string;
  PreferredAuthenticationMethod?: string;
  Priority?: string;
  RawContent?: string;
  SilentPush?: boolean;
  Sound?: string;
  Substitutions?: Record<string, Array<string>>;
  ThreadId?: string;
  TimeToLive?: number;
  Title?: string;
  Url?: string;
}
export interface APNSPushNotificationTemplate {
  Action?: Action;
  Body?: string;
  MediaUrl?: string;
  RawContent?: string;
  Sound?: string;
  Title?: string;
  Url?: string;
}
export interface APNSSandboxChannelRequest {
  BundleId?: string;
  Certificate?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  PrivateKey?: string;
  TeamId?: string;
  TokenKey?: string;
  TokenKeyId?: string;
}
export interface APNSSandboxChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  HasTokenKey?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Platform: string;
  Version?: number;
}
export interface APNSVoipChannelRequest {
  BundleId?: string;
  Certificate?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  PrivateKey?: string;
  TeamId?: string;
  TokenKey?: string;
  TokenKeyId?: string;
}
export interface APNSVoipChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  HasTokenKey?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Platform: string;
  Version?: number;
}
export interface APNSVoipSandboxChannelRequest {
  BundleId?: string;
  Certificate?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  PrivateKey?: string;
  TeamId?: string;
  TokenKey?: string;
  TokenKeyId?: string;
}
export interface APNSVoipSandboxChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  HasTokenKey?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Platform: string;
  Version?: number;
}
export interface ApplicationDateRangeKpiResponse {
  ApplicationId: string;
  EndTime: Date | string;
  KpiName: string;
  KpiResult: BaseKpiResult;
  NextToken?: string;
  StartTime: Date | string;
}
export interface ApplicationResponse {
  Arn: string;
  Id: string;
  Name: string;
  tags?: Record<string, string>;
  CreationDate?: string;
}
export interface ApplicationSettingsJourneyLimits {
  DailyCap?: number;
  TimeframeCap?: JourneyTimeframeCap;
  TotalCap?: number;
}
export interface ApplicationSettingsResource {
  ApplicationId: string;
  CampaignHook?: CampaignHook;
  LastModifiedDate?: string;
  Limits?: CampaignLimits;
  QuietTime?: QuietTime;
  JourneyLimits?: ApplicationSettingsJourneyLimits;
}
export interface ApplicationsResponse {
  Item?: Array<ApplicationResponse>;
  NextToken?: string;
}
export interface AttributeDimension {
  AttributeType?: AttributeType;
  Values: Array<string>;
}
export interface AttributesResource {
  ApplicationId: string;
  AttributeType: string;
  Attributes?: Array<string>;
}
export type AttributeType =
  | "INCLUSIVE"
  | "EXCLUSIVE"
  | "CONTAINS"
  | "BEFORE"
  | "AFTER"
  | "ON"
  | "BETWEEN";
export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Message?: string;
  readonly RequestID?: string;
}> {}
export interface BaiduChannelRequest {
  ApiKey: string;
  Enabled?: boolean;
  SecretKey: string;
}
export interface BaiduChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  Credential: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Platform: string;
  Version?: number;
}
export interface BaiduMessage {
  Action?: Action;
  Body?: string;
  Data?: Record<string, string>;
  IconReference?: string;
  ImageIconUrl?: string;
  ImageUrl?: string;
  RawContent?: string;
  SilentPush?: boolean;
  SmallImageIconUrl?: string;
  Sound?: string;
  Substitutions?: Record<string, Array<string>>;
  TimeToLive?: number;
  Title?: string;
  Url?: string;
}
export interface BaseKpiResult {
  Rows: Array<ResultRow>;
}
export type ButtonAction = "LINK" | "DEEP_LINK" | "CLOSE";
export interface CampaignCustomMessage {
  Data?: string;
}
export interface CampaignDateRangeKpiResponse {
  ApplicationId: string;
  CampaignId: string;
  EndTime: Date | string;
  KpiName: string;
  KpiResult: BaseKpiResult;
  NextToken?: string;
  StartTime: Date | string;
}
export interface CampaignEmailMessage {
  Body?: string;
  FromAddress?: string;
  Headers?: Array<MessageHeader>;
  HtmlBody?: string;
  Title?: string;
}
export interface CampaignEventFilter {
  Dimensions: EventDimensions;
  FilterType: FilterType;
}
export interface CampaignHook {
  LambdaFunctionName?: string;
  Mode?: Mode;
  WebUrl?: string;
}
export interface CampaignInAppMessage {
  Body?: string;
  Content?: Array<InAppMessageContent>;
  CustomConfig?: Record<string, string>;
  Layout?: Layout;
}
export interface CampaignLimits {
  Daily?: number;
  MaximumDuration?: number;
  MessagesPerSecond?: number;
  Total?: number;
  Session?: number;
}
export interface CampaignResponse {
  AdditionalTreatments?: Array<TreatmentResource>;
  ApplicationId: string;
  Arn: string;
  CreationDate: string;
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
  DefaultState?: CampaignState;
  Description?: string;
  HoldoutPercent?: number;
  Hook?: CampaignHook;
  Id: string;
  IsPaused?: boolean;
  LastModifiedDate: string;
  Limits?: CampaignLimits;
  MessageConfiguration?: MessageConfiguration;
  Name?: string;
  Schedule?: Schedule;
  SegmentId: string;
  SegmentVersion: number;
  State?: CampaignState;
  tags?: Record<string, string>;
  TemplateConfiguration?: TemplateConfiguration;
  TreatmentDescription?: string;
  TreatmentName?: string;
  Version?: number;
  Priority?: number;
}
export interface CampaignSmsMessage {
  Body?: string;
  MessageType?: MessageType;
  OriginationNumber?: string;
  SenderId?: string;
  EntityId?: string;
  TemplateId?: string;
}
export interface CampaignsResponse {
  Item: Array<CampaignResponse>;
  NextToken?: string;
}
export interface CampaignState {
  CampaignStatus?: CampaignStatus;
}
export type CampaignStatus =
  | "SCHEDULED"
  | "EXECUTING"
  | "PENDING_NEXT_RUN"
  | "COMPLETED"
  | "PAUSED"
  | "DELETED"
  | "INVALID";
export interface ChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Version?: number;
}
export interface ChannelsResponse {
  Channels: Record<string, ChannelResponse>;
}
export type ChannelType =
  | "PUSH"
  | "GCM"
  | "APNS"
  | "APNS_SANDBOX"
  | "APNS_VOIP"
  | "APNS_VOIP_SANDBOX"
  | "ADM"
  | "SMS"
  | "VOICE"
  | "EMAIL"
  | "BAIDU"
  | "CUSTOM"
  | "IN_APP";
export interface ClosedDays {
  EMAIL?: Array<ClosedDaysRule>;
  SMS?: Array<ClosedDaysRule>;
  PUSH?: Array<ClosedDaysRule>;
  VOICE?: Array<ClosedDaysRule>;
  CUSTOM?: Array<ClosedDaysRule>;
}
export interface ClosedDaysRule {
  Name?: string;
  StartDateTime?: string;
  EndDateTime?: string;
}
export interface Condition {
  Conditions?: Array<SimpleCondition>;
  Operator?: Operator;
}
export interface ConditionalSplitActivity {
  Condition?: Condition;
  EvaluationWaitTime?: WaitTime;
  FalseActivity?: string;
  TrueActivity?: string;
}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
  readonly RequestID?: string;
}> {}
export interface ContactCenterActivity {
  NextActivity?: string;
}
export interface CreateApplicationRequest {
  Name: string;
  tags?: Record<string, string>;
}
export interface CreateAppRequest {
  CreateApplicationRequest: CreateApplicationRequest;
}
export interface CreateAppResponse {
  ApplicationResponse: ApplicationResponse;
}
export interface CreateCampaignRequest {
  ApplicationId: string;
  WriteCampaignRequest: WriteCampaignRequest;
}
export interface CreateCampaignResponse {
  CampaignResponse: CampaignResponse;
}
export interface CreateEmailTemplateRequest {
  EmailTemplateRequest: EmailTemplateRequest;
  TemplateName: string;
}
export interface CreateEmailTemplateResponse {
  CreateTemplateMessageBody: CreateTemplateMessageBody;
}
export interface CreateExportJobRequest {
  ApplicationId: string;
  ExportJobRequest: ExportJobRequest;
}
export interface CreateExportJobResponse {
  ExportJobResponse: ExportJobResponse;
}
export interface CreateImportJobRequest {
  ApplicationId: string;
  ImportJobRequest: ImportJobRequest;
}
export interface CreateImportJobResponse {
  ImportJobResponse: ImportJobResponse;
}
export interface CreateInAppTemplateRequest {
  InAppTemplateRequest: InAppTemplateRequest;
  TemplateName: string;
}
export interface CreateInAppTemplateResponse {
  TemplateCreateMessageBody: TemplateCreateMessageBody;
}
export interface CreateJourneyRequest {
  ApplicationId: string;
  WriteJourneyRequest: WriteJourneyRequest;
}
export interface CreateJourneyResponse {
  JourneyResponse: JourneyResponse;
}
export interface CreatePushTemplateRequest {
  PushNotificationTemplateRequest: PushNotificationTemplateRequest;
  TemplateName: string;
}
export interface CreatePushTemplateResponse {
  CreateTemplateMessageBody: CreateTemplateMessageBody;
}
export interface CreateRecommenderConfigurationRequest {
  CreateRecommenderConfiguration: CreateRecommenderConfigurationShape;
}
export interface CreateRecommenderConfigurationResponse {
  RecommenderConfigurationResponse: RecommenderConfigurationResponse;
}
export interface CreateRecommenderConfigurationShape {
  Attributes?: Record<string, string>;
  Description?: string;
  Name?: string;
  RecommendationProviderIdType?: string;
  RecommendationProviderRoleArn: string;
  RecommendationProviderUri: string;
  RecommendationTransformerUri?: string;
  RecommendationsDisplayName?: string;
  RecommendationsPerMessage?: number;
}
export interface CreateSegmentRequest {
  ApplicationId: string;
  WriteSegmentRequest: WriteSegmentRequest;
}
export interface CreateSegmentResponse {
  SegmentResponse: SegmentResponse;
}
export interface CreateSmsTemplateRequest {
  SMSTemplateRequest: SMSTemplateRequest;
  TemplateName: string;
}
export interface CreateSmsTemplateResponse {
  CreateTemplateMessageBody: CreateTemplateMessageBody;
}
export interface CreateTemplateMessageBody {
  Arn?: string;
  Message?: string;
  RequestID?: string;
}
export interface CreateVoiceTemplateRequest {
  TemplateName: string;
  VoiceTemplateRequest: VoiceTemplateRequest;
}
export interface CreateVoiceTemplateResponse {
  CreateTemplateMessageBody: CreateTemplateMessageBody;
}
export interface CustomDeliveryConfiguration {
  DeliveryUri: string;
  EndpointTypes?: Array<__EndpointTypesElement>;
}
export interface CustomMessageActivity {
  DeliveryUri?: string;
  EndpointTypes?: Array<__EndpointTypesElement>;
  MessageConfig?: JourneyCustomMessage;
  NextActivity?: string;
  TemplateName?: string;
  TemplateVersion?: string;
}
export type DayOfWeek =
  | "MONDAY"
  | "TUESDAY"
  | "WEDNESDAY"
  | "THURSDAY"
  | "FRIDAY"
  | "SATURDAY"
  | "SUNDAY";
export interface DefaultButtonConfiguration {
  BackgroundColor?: string;
  BorderRadius?: number;
  ButtonAction: ButtonAction;
  Link?: string;
  Text: string;
  TextColor?: string;
}
export interface DefaultMessage {
  Body?: string;
  Substitutions?: Record<string, Array<string>>;
}
export interface DefaultPushNotificationMessage {
  Action?: Action;
  Body?: string;
  Data?: Record<string, string>;
  SilentPush?: boolean;
  Substitutions?: Record<string, Array<string>>;
  Title?: string;
  Url?: string;
}
export interface DefaultPushNotificationTemplate {
  Action?: Action;
  Body?: string;
  Sound?: string;
  Title?: string;
  Url?: string;
}
export interface DeleteAdmChannelRequest {
  ApplicationId: string;
}
export interface DeleteAdmChannelResponse {
  ADMChannelResponse: ADMChannelResponse;
}
export interface DeleteApnsChannelRequest {
  ApplicationId: string;
}
export interface DeleteApnsChannelResponse {
  APNSChannelResponse: APNSChannelResponse;
}
export interface DeleteApnsSandboxChannelRequest {
  ApplicationId: string;
}
export interface DeleteApnsSandboxChannelResponse {
  APNSSandboxChannelResponse: APNSSandboxChannelResponse;
}
export interface DeleteApnsVoipChannelRequest {
  ApplicationId: string;
}
export interface DeleteApnsVoipChannelResponse {
  APNSVoipChannelResponse: APNSVoipChannelResponse;
}
export interface DeleteApnsVoipSandboxChannelRequest {
  ApplicationId: string;
}
export interface DeleteApnsVoipSandboxChannelResponse {
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse;
}
export interface DeleteAppRequest {
  ApplicationId: string;
}
export interface DeleteAppResponse {
  ApplicationResponse: ApplicationResponse;
}
export interface DeleteBaiduChannelRequest {
  ApplicationId: string;
}
export interface DeleteBaiduChannelResponse {
  BaiduChannelResponse: BaiduChannelResponse;
}
export interface DeleteCampaignRequest {
  ApplicationId: string;
  CampaignId: string;
}
export interface DeleteCampaignResponse {
  CampaignResponse: CampaignResponse;
}
export interface DeleteEmailChannelRequest {
  ApplicationId: string;
}
export interface DeleteEmailChannelResponse {
  EmailChannelResponse: EmailChannelResponse;
}
export interface DeleteEmailTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface DeleteEmailTemplateResponse {
  MessageBody: MessageBody;
}
export interface DeleteEndpointRequest {
  ApplicationId: string;
  EndpointId: string;
}
export interface DeleteEndpointResponse {
  EndpointResponse: EndpointResponse;
}
export interface DeleteEventStreamRequest {
  ApplicationId: string;
}
export interface DeleteEventStreamResponse {
  EventStream: EventStream;
}
export interface DeleteGcmChannelRequest {
  ApplicationId: string;
}
export interface DeleteGcmChannelResponse {
  GCMChannelResponse: GCMChannelResponse;
}
export interface DeleteInAppTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface DeleteInAppTemplateResponse {
  MessageBody: MessageBody;
}
export interface DeleteJourneyRequest {
  ApplicationId: string;
  JourneyId: string;
}
export interface DeleteJourneyResponse {
  JourneyResponse: JourneyResponse;
}
export interface DeletePushTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface DeletePushTemplateResponse {
  MessageBody: MessageBody;
}
export interface DeleteRecommenderConfigurationRequest {
  RecommenderId: string;
}
export interface DeleteRecommenderConfigurationResponse {
  RecommenderConfigurationResponse: RecommenderConfigurationResponse;
}
export interface DeleteSegmentRequest {
  ApplicationId: string;
  SegmentId: string;
}
export interface DeleteSegmentResponse {
  SegmentResponse: SegmentResponse;
}
export interface DeleteSmsChannelRequest {
  ApplicationId: string;
}
export interface DeleteSmsChannelResponse {
  SMSChannelResponse: SMSChannelResponse;
}
export interface DeleteSmsTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface DeleteSmsTemplateResponse {
  MessageBody: MessageBody;
}
export interface DeleteUserEndpointsRequest {
  ApplicationId: string;
  UserId: string;
}
export interface DeleteUserEndpointsResponse {
  EndpointsResponse: EndpointsResponse;
}
export interface DeleteVoiceChannelRequest {
  ApplicationId: string;
}
export interface DeleteVoiceChannelResponse {
  VoiceChannelResponse: VoiceChannelResponse;
}
export interface DeleteVoiceTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface DeleteVoiceTemplateResponse {
  MessageBody: MessageBody;
}
export type DeliveryStatus =
  | "SUCCESSFUL"
  | "THROTTLED"
  | "TEMPORARY_FAILURE"
  | "PERMANENT_FAILURE"
  | "UNKNOWN_FAILURE"
  | "OPT_OUT"
  | "DUPLICATE";
export type DimensionType = "INCLUSIVE" | "EXCLUSIVE";
export interface DirectMessageConfiguration {
  ADMMessage?: ADMMessage;
  APNSMessage?: APNSMessage;
  BaiduMessage?: BaiduMessage;
  DefaultMessage?: DefaultMessage;
  DefaultPushNotificationMessage?: DefaultPushNotificationMessage;
  EmailMessage?: EmailMessage;
  GCMMessage?: GCMMessage;
  SMSMessage?: SMSMessage;
  VoiceMessage?: VoiceMessage;
}
export type Duration = "HR_24" | "DAY_7" | "DAY_14" | "DAY_30";
export interface EmailChannelRequest {
  ConfigurationSet?: string;
  Enabled?: boolean;
  FromAddress: string;
  Identity: string;
  RoleArn?: string;
  OrchestrationSendingRoleArn?: string;
}
export interface EmailChannelResponse {
  ApplicationId?: string;
  ConfigurationSet?: string;
  CreationDate?: string;
  Enabled?: boolean;
  FromAddress?: string;
  HasCredential?: boolean;
  Id?: string;
  Identity?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  MessagesPerSecond?: number;
  Platform: string;
  RoleArn?: string;
  OrchestrationSendingRoleArn?: string;
  Version?: number;
}
export interface EmailMessage {
  Body?: string;
  FeedbackForwardingAddress?: string;
  FromAddress?: string;
  RawEmail?: RawEmail;
  ReplyToAddresses?: Array<string>;
  SimpleEmail?: SimpleEmail;
  Substitutions?: Record<string, Array<string>>;
}
export interface EmailMessageActivity {
  MessageConfig?: JourneyEmailMessage;
  NextActivity?: string;
  TemplateName?: string;
  TemplateVersion?: string;
}
export interface EmailTemplateRequest {
  DefaultSubstitutions?: string;
  HtmlPart?: string;
  RecommenderId?: string;
  Subject?: string;
  Headers?: Array<MessageHeader>;
  tags?: Record<string, string>;
  TemplateDescription?: string;
  TextPart?: string;
}
export interface EmailTemplateResponse {
  Arn?: string;
  CreationDate: string;
  DefaultSubstitutions?: string;
  HtmlPart?: string;
  LastModifiedDate: string;
  RecommenderId?: string;
  Subject?: string;
  Headers?: Array<MessageHeader>;
  tags?: Record<string, string>;
  TemplateDescription?: string;
  TemplateName: string;
  TemplateType: TemplateType;
  TextPart?: string;
  Version?: string;
}
export interface EndpointBatchItem {
  Address?: string;
  Attributes?: Record<string, Array<string>>;
  ChannelType?: ChannelType;
  Demographic?: EndpointDemographic;
  EffectiveDate?: string;
  EndpointStatus?: string;
  Id?: string;
  Location?: EndpointLocation;
  Metrics?: Record<string, number>;
  OptOut?: string;
  RequestId?: string;
  User?: EndpointUser;
}
export interface EndpointBatchRequest {
  Item: Array<EndpointBatchItem>;
}
export interface EndpointDemographic {
  AppVersion?: string;
  Locale?: string;
  Make?: string;
  Model?: string;
  ModelVersion?: string;
  Platform?: string;
  PlatformVersion?: string;
  Timezone?: string;
}
export interface EndpointItemResponse {
  Message?: string;
  StatusCode?: number;
}
export interface EndpointLocation {
  City?: string;
  Country?: string;
  Latitude?: number;
  Longitude?: number;
  PostalCode?: string;
  Region?: string;
}
export interface EndpointMessageResult {
  Address?: string;
  DeliveryStatus: DeliveryStatus;
  MessageId?: string;
  StatusCode: number;
  StatusMessage?: string;
  UpdatedToken?: string;
}
export interface EndpointRequest {
  Address?: string;
  Attributes?: Record<string, Array<string>>;
  ChannelType?: ChannelType;
  Demographic?: EndpointDemographic;
  EffectiveDate?: string;
  EndpointStatus?: string;
  Location?: EndpointLocation;
  Metrics?: Record<string, number>;
  OptOut?: string;
  RequestId?: string;
  User?: EndpointUser;
}
export interface EndpointResponse {
  Address?: string;
  ApplicationId?: string;
  Attributes?: Record<string, Array<string>>;
  ChannelType?: ChannelType;
  CohortId?: string;
  CreationDate?: string;
  Demographic?: EndpointDemographic;
  EffectiveDate?: string;
  EndpointStatus?: string;
  Id?: string;
  Location?: EndpointLocation;
  Metrics?: Record<string, number>;
  OptOut?: string;
  RequestId?: string;
  User?: EndpointUser;
}
export interface EndpointSendConfiguration {
  BodyOverride?: string;
  Context?: Record<string, string>;
  RawContent?: string;
  Substitutions?: Record<string, Array<string>>;
  TitleOverride?: string;
}
export interface EndpointsResponse {
  Item: Array<EndpointResponse>;
}
export interface EndpointUser {
  UserAttributes?: Record<string, Array<string>>;
  UserId?: string;
}
export interface Event {
  AppPackageName?: string;
  AppTitle?: string;
  AppVersionCode?: string;
  Attributes?: Record<string, string>;
  ClientSdkVersion?: string;
  EventType: string;
  Metrics?: Record<string, number>;
  SdkName?: string;
  Session?: Session;
  Timestamp: string;
}
export interface EventCondition {
  Dimensions?: EventDimensions;
  MessageActivity?: string;
}
export interface EventDimensions {
  Attributes?: Record<string, AttributeDimension>;
  EventType?: SetDimension;
  Metrics?: Record<string, MetricDimension>;
}
export interface EventFilter {
  Dimensions: EventDimensions;
  FilterType: FilterType;
}
export interface EventItemResponse {
  Message?: string;
  StatusCode?: number;
}
export interface EventsBatch {
  Endpoint: PublicEndpoint;
  Events: Record<string, Event>;
}
export interface EventsRequest {
  BatchItem: Record<string, EventsBatch>;
}
export interface EventsResponse {
  Results?: Record<string, ItemResponse>;
}
export interface EventStartCondition {
  EventFilter?: EventFilter;
  SegmentId?: string;
}
export interface EventStream {
  ApplicationId: string;
  DestinationStreamArn: string;
  ExternalId?: string;
  LastModifiedDate?: string;
  LastUpdatedBy?: string;
  RoleArn: string;
}
export interface ExportJobRequest {
  RoleArn: string;
  S3UrlPrefix: string;
  SegmentId?: string;
  SegmentVersion?: number;
}
export interface ExportJobResource {
  RoleArn: string;
  S3UrlPrefix: string;
  SegmentId?: string;
  SegmentVersion?: number;
}
export interface ExportJobResponse {
  ApplicationId: string;
  CompletedPieces?: number;
  CompletionDate?: string;
  CreationDate: string;
  Definition: ExportJobResource;
  FailedPieces?: number;
  Failures?: Array<string>;
  Id: string;
  JobStatus: JobStatus;
  TotalFailures?: number;
  TotalPieces?: number;
  TotalProcessed?: number;
  Type: string;
}
export interface ExportJobsResponse {
  Item: Array<ExportJobResponse>;
  NextToken?: string;
}
export type FilterType = "SYSTEM" | "ENDPOINT";
export declare class ForbiddenException extends EffectData.TaggedError(
  "ForbiddenException",
)<{
  readonly Message?: string;
  readonly RequestID?: string;
}> {}
export type Format = "CSV" | "JSON";
export type Frequency =
  | "ONCE"
  | "HOURLY"
  | "DAILY"
  | "WEEKLY"
  | "MONTHLY"
  | "EVENT"
  | "IN_APP_EVENT";
export interface GCMChannelRequest {
  ApiKey?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  ServiceJson?: string;
}
export interface GCMChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  Credential?: string;
  DefaultAuthenticationMethod?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  HasFcmServiceCredentials?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Platform: string;
  Version?: number;
}
export interface GCMMessage {
  Action?: Action;
  Body?: string;
  CollapseKey?: string;
  Data?: Record<string, string>;
  IconReference?: string;
  ImageIconUrl?: string;
  ImageUrl?: string;
  PreferredAuthenticationMethod?: string;
  Priority?: string;
  RawContent?: string;
  RestrictedPackageName?: string;
  SilentPush?: boolean;
  SmallImageIconUrl?: string;
  Sound?: string;
  Substitutions?: Record<string, Array<string>>;
  TimeToLive?: number;
  Title?: string;
  Url?: string;
}
export interface GetAdmChannelRequest {
  ApplicationId: string;
}
export interface GetAdmChannelResponse {
  ADMChannelResponse: ADMChannelResponse;
}
export interface GetApnsChannelRequest {
  ApplicationId: string;
}
export interface GetApnsChannelResponse {
  APNSChannelResponse: APNSChannelResponse;
}
export interface GetApnsSandboxChannelRequest {
  ApplicationId: string;
}
export interface GetApnsSandboxChannelResponse {
  APNSSandboxChannelResponse: APNSSandboxChannelResponse;
}
export interface GetApnsVoipChannelRequest {
  ApplicationId: string;
}
export interface GetApnsVoipChannelResponse {
  APNSVoipChannelResponse: APNSVoipChannelResponse;
}
export interface GetApnsVoipSandboxChannelRequest {
  ApplicationId: string;
}
export interface GetApnsVoipSandboxChannelResponse {
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse;
}
export interface GetApplicationDateRangeKpiRequest {
  ApplicationId: string;
  EndTime?: Date | string;
  KpiName: string;
  NextToken?: string;
  PageSize?: string;
  StartTime?: Date | string;
}
export interface GetApplicationDateRangeKpiResponse {
  ApplicationDateRangeKpiResponse: ApplicationDateRangeKpiResponse;
}
export interface GetApplicationSettingsRequest {
  ApplicationId: string;
}
export interface GetApplicationSettingsResponse {
  ApplicationSettingsResource: ApplicationSettingsResource;
}
export interface GetAppRequest {
  ApplicationId: string;
}
export interface GetAppResponse {
  ApplicationResponse: ApplicationResponse;
}
export interface GetAppsRequest {
  PageSize?: string;
  Token?: string;
}
export interface GetAppsResponse {
  ApplicationsResponse: ApplicationsResponse;
}
export interface GetBaiduChannelRequest {
  ApplicationId: string;
}
export interface GetBaiduChannelResponse {
  BaiduChannelResponse: BaiduChannelResponse;
}
export interface GetCampaignActivitiesRequest {
  ApplicationId: string;
  CampaignId: string;
  PageSize?: string;
  Token?: string;
}
export interface GetCampaignActivitiesResponse {
  ActivitiesResponse: ActivitiesResponse;
}
export interface GetCampaignDateRangeKpiRequest {
  ApplicationId: string;
  CampaignId: string;
  EndTime?: Date | string;
  KpiName: string;
  NextToken?: string;
  PageSize?: string;
  StartTime?: Date | string;
}
export interface GetCampaignDateRangeKpiResponse {
  CampaignDateRangeKpiResponse: CampaignDateRangeKpiResponse;
}
export interface GetCampaignRequest {
  ApplicationId: string;
  CampaignId: string;
}
export interface GetCampaignResponse {
  CampaignResponse: CampaignResponse;
}
export interface GetCampaignsRequest {
  ApplicationId: string;
  PageSize?: string;
  Token?: string;
}
export interface GetCampaignsResponse {
  CampaignsResponse: CampaignsResponse;
}
export interface GetCampaignVersionRequest {
  ApplicationId: string;
  CampaignId: string;
  Version: string;
}
export interface GetCampaignVersionResponse {
  CampaignResponse: CampaignResponse;
}
export interface GetCampaignVersionsRequest {
  ApplicationId: string;
  CampaignId: string;
  PageSize?: string;
  Token?: string;
}
export interface GetCampaignVersionsResponse {
  CampaignsResponse: CampaignsResponse;
}
export interface GetChannelsRequest {
  ApplicationId: string;
}
export interface GetChannelsResponse {
  ChannelsResponse: ChannelsResponse;
}
export interface GetEmailChannelRequest {
  ApplicationId: string;
}
export interface GetEmailChannelResponse {
  EmailChannelResponse: EmailChannelResponse;
}
export interface GetEmailTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface GetEmailTemplateResponse {
  EmailTemplateResponse: EmailTemplateResponse;
}
export interface GetEndpointRequest {
  ApplicationId: string;
  EndpointId: string;
}
export interface GetEndpointResponse {
  EndpointResponse: EndpointResponse;
}
export interface GetEventStreamRequest {
  ApplicationId: string;
}
export interface GetEventStreamResponse {
  EventStream: EventStream;
}
export interface GetExportJobRequest {
  ApplicationId: string;
  JobId: string;
}
export interface GetExportJobResponse {
  ExportJobResponse: ExportJobResponse;
}
export interface GetExportJobsRequest {
  ApplicationId: string;
  PageSize?: string;
  Token?: string;
}
export interface GetExportJobsResponse {
  ExportJobsResponse: ExportJobsResponse;
}
export interface GetGcmChannelRequest {
  ApplicationId: string;
}
export interface GetGcmChannelResponse {
  GCMChannelResponse: GCMChannelResponse;
}
export interface GetImportJobRequest {
  ApplicationId: string;
  JobId: string;
}
export interface GetImportJobResponse {
  ImportJobResponse: ImportJobResponse;
}
export interface GetImportJobsRequest {
  ApplicationId: string;
  PageSize?: string;
  Token?: string;
}
export interface GetImportJobsResponse {
  ImportJobsResponse: ImportJobsResponse;
}
export interface GetInAppMessagesRequest {
  ApplicationId: string;
  EndpointId: string;
}
export interface GetInAppMessagesResponse {
  InAppMessagesResponse: InAppMessagesResponse;
}
export interface GetInAppTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface GetInAppTemplateResponse {
  InAppTemplateResponse: InAppTemplateResponse;
}
export interface GetJourneyDateRangeKpiRequest {
  ApplicationId: string;
  EndTime?: Date | string;
  JourneyId: string;
  KpiName: string;
  NextToken?: string;
  PageSize?: string;
  StartTime?: Date | string;
}
export interface GetJourneyDateRangeKpiResponse {
  JourneyDateRangeKpiResponse: JourneyDateRangeKpiResponse;
}
export interface GetJourneyExecutionActivityMetricsRequest {
  ApplicationId: string;
  JourneyActivityId: string;
  JourneyId: string;
  NextToken?: string;
  PageSize?: string;
}
export interface GetJourneyExecutionActivityMetricsResponse {
  JourneyExecutionActivityMetricsResponse: JourneyExecutionActivityMetricsResponse;
}
export interface GetJourneyExecutionMetricsRequest {
  ApplicationId: string;
  JourneyId: string;
  NextToken?: string;
  PageSize?: string;
}
export interface GetJourneyExecutionMetricsResponse {
  JourneyExecutionMetricsResponse: JourneyExecutionMetricsResponse;
}
export interface GetJourneyRequest {
  ApplicationId: string;
  JourneyId: string;
}
export interface GetJourneyResponse {
  JourneyResponse: JourneyResponse;
}
export interface GetJourneyRunExecutionActivityMetricsRequest {
  ApplicationId: string;
  JourneyActivityId: string;
  JourneyId: string;
  NextToken?: string;
  PageSize?: string;
  RunId: string;
}
export interface GetJourneyRunExecutionActivityMetricsResponse {
  JourneyRunExecutionActivityMetricsResponse: JourneyRunExecutionActivityMetricsResponse;
}
export interface GetJourneyRunExecutionMetricsRequest {
  ApplicationId: string;
  JourneyId: string;
  NextToken?: string;
  PageSize?: string;
  RunId: string;
}
export interface GetJourneyRunExecutionMetricsResponse {
  JourneyRunExecutionMetricsResponse: JourneyRunExecutionMetricsResponse;
}
export interface GetJourneyRunsRequest {
  ApplicationId: string;
  JourneyId: string;
  PageSize?: string;
  Token?: string;
}
export interface GetJourneyRunsResponse {
  JourneyRunsResponse: JourneyRunsResponse;
}
export interface GetPushTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface GetPushTemplateResponse {
  PushNotificationTemplateResponse: PushNotificationTemplateResponse;
}
export interface GetRecommenderConfigurationRequest {
  RecommenderId: string;
}
export interface GetRecommenderConfigurationResponse {
  RecommenderConfigurationResponse: RecommenderConfigurationResponse;
}
export interface GetRecommenderConfigurationsRequest {
  PageSize?: string;
  Token?: string;
}
export interface GetRecommenderConfigurationsResponse {
  ListRecommenderConfigurationsResponse: ListRecommenderConfigurationsResponse;
}
export interface GetSegmentExportJobsRequest {
  ApplicationId: string;
  PageSize?: string;
  SegmentId: string;
  Token?: string;
}
export interface GetSegmentExportJobsResponse {
  ExportJobsResponse: ExportJobsResponse;
}
export interface GetSegmentImportJobsRequest {
  ApplicationId: string;
  PageSize?: string;
  SegmentId: string;
  Token?: string;
}
export interface GetSegmentImportJobsResponse {
  ImportJobsResponse: ImportJobsResponse;
}
export interface GetSegmentRequest {
  ApplicationId: string;
  SegmentId: string;
}
export interface GetSegmentResponse {
  SegmentResponse: SegmentResponse;
}
export interface GetSegmentsRequest {
  ApplicationId: string;
  PageSize?: string;
  Token?: string;
}
export interface GetSegmentsResponse {
  SegmentsResponse: SegmentsResponse;
}
export interface GetSegmentVersionRequest {
  ApplicationId: string;
  SegmentId: string;
  Version: string;
}
export interface GetSegmentVersionResponse {
  SegmentResponse: SegmentResponse;
}
export interface GetSegmentVersionsRequest {
  ApplicationId: string;
  PageSize?: string;
  SegmentId: string;
  Token?: string;
}
export interface GetSegmentVersionsResponse {
  SegmentsResponse: SegmentsResponse;
}
export interface GetSmsChannelRequest {
  ApplicationId: string;
}
export interface GetSmsChannelResponse {
  SMSChannelResponse: SMSChannelResponse;
}
export interface GetSmsTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface GetSmsTemplateResponse {
  SMSTemplateResponse: SMSTemplateResponse;
}
export interface GetUserEndpointsRequest {
  ApplicationId: string;
  UserId: string;
}
export interface GetUserEndpointsResponse {
  EndpointsResponse: EndpointsResponse;
}
export interface GetVoiceChannelRequest {
  ApplicationId: string;
}
export interface GetVoiceChannelResponse {
  VoiceChannelResponse: VoiceChannelResponse;
}
export interface GetVoiceTemplateRequest {
  TemplateName: string;
  Version?: string;
}
export interface GetVoiceTemplateResponse {
  VoiceTemplateResponse: VoiceTemplateResponse;
}
export interface GPSCoordinates {
  Latitude: number;
  Longitude: number;
}
export interface GPSPointDimension {
  Coordinates: GPSCoordinates;
  RangeInKilometers?: number;
}
export interface HoldoutActivity {
  NextActivity?: string;
  Percentage: number;
}
export interface ImportJobRequest {
  DefineSegment?: boolean;
  ExternalId?: string;
  Format: Format;
  RegisterEndpoints?: boolean;
  RoleArn: string;
  S3Url: string;
  SegmentId?: string;
  SegmentName?: string;
}
export interface ImportJobResource {
  DefineSegment?: boolean;
  ExternalId?: string;
  Format: Format;
  RegisterEndpoints?: boolean;
  RoleArn: string;
  S3Url: string;
  SegmentId?: string;
  SegmentName?: string;
}
export interface ImportJobResponse {
  ApplicationId: string;
  CompletedPieces?: number;
  CompletionDate?: string;
  CreationDate: string;
  Definition: ImportJobResource;
  FailedPieces?: number;
  Failures?: Array<string>;
  Id: string;
  JobStatus: JobStatus;
  TotalFailures?: number;
  TotalPieces?: number;
  TotalProcessed?: number;
  Type: string;
}
export interface ImportJobsResponse {
  Item: Array<ImportJobResponse>;
  NextToken?: string;
}
export interface InAppCampaignSchedule {
  EndDate?: string;
  EventFilter?: CampaignEventFilter;
  QuietTime?: QuietTime;
}
export interface InAppMessage {
  Content?: Array<InAppMessageContent>;
  CustomConfig?: Record<string, string>;
  Layout?: Layout;
}
export interface InAppMessageBodyConfig {
  Alignment: Alignment;
  Body: string;
  TextColor: string;
}
export interface InAppMessageButton {
  Android?: OverrideButtonConfiguration;
  DefaultConfig?: DefaultButtonConfiguration;
  IOS?: OverrideButtonConfiguration;
  Web?: OverrideButtonConfiguration;
}
export interface InAppMessageCampaign {
  CampaignId?: string;
  DailyCap?: number;
  InAppMessage?: InAppMessage;
  Priority?: number;
  Schedule?: InAppCampaignSchedule;
  SessionCap?: number;
  TotalCap?: number;
  TreatmentId?: string;
}
export interface InAppMessageContent {
  BackgroundColor?: string;
  BodyConfig?: InAppMessageBodyConfig;
  HeaderConfig?: InAppMessageHeaderConfig;
  ImageUrl?: string;
  PrimaryBtn?: InAppMessageButton;
  SecondaryBtn?: InAppMessageButton;
}
export interface InAppMessageHeaderConfig {
  Alignment: Alignment;
  Header: string;
  TextColor: string;
}
export interface InAppMessagesResponse {
  InAppMessageCampaigns?: Array<InAppMessageCampaign>;
}
export interface InAppTemplateRequest {
  Content?: Array<InAppMessageContent>;
  CustomConfig?: Record<string, string>;
  Layout?: Layout;
  tags?: Record<string, string>;
  TemplateDescription?: string;
}
export interface InAppTemplateResponse {
  Arn?: string;
  Content?: Array<InAppMessageContent>;
  CreationDate: string;
  CustomConfig?: Record<string, string>;
  LastModifiedDate: string;
  Layout?: Layout;
  tags?: Record<string, string>;
  TemplateDescription?: string;
  TemplateName: string;
  TemplateType: TemplateType;
  Version?: string;
}
export type Include = "ALL" | "ANY" | "NONE";
export declare class InternalServerErrorException extends EffectData.TaggedError(
  "InternalServerErrorException",
)<{
  readonly Message?: string;
  readonly RequestID?: string;
}> {}
export interface ItemResponse {
  EndpointItemResponse?: EndpointItemResponse;
  EventsItemResponse?: Record<string, EventItemResponse>;
}
export type JobStatus =
  | "CREATED"
  | "PREPARING_FOR_INITIALIZATION"
  | "INITIALIZING"
  | "PROCESSING"
  | "PENDING_JOB"
  | "COMPLETING"
  | "COMPLETED"
  | "FAILING"
  | "FAILED";
export interface JourneyChannelSettings {
  ConnectCampaignArn?: string;
  ConnectCampaignExecutionRoleArn?: string;
}
export interface JourneyCustomMessage {
  Data?: string;
}
export interface JourneyDateRangeKpiResponse {
  ApplicationId: string;
  EndTime: Date | string;
  JourneyId: string;
  KpiName: string;
  KpiResult: BaseKpiResult;
  NextToken?: string;
  StartTime: Date | string;
}
export interface JourneyEmailMessage {
  FromAddress?: string;
}
export interface JourneyExecutionActivityMetricsResponse {
  ActivityType: string;
  ApplicationId: string;
  JourneyActivityId: string;
  JourneyId: string;
  LastEvaluatedTime: string;
  Metrics: Record<string, string>;
}
export interface JourneyExecutionMetricsResponse {
  ApplicationId: string;
  JourneyId: string;
  LastEvaluatedTime: string;
  Metrics: Record<string, string>;
}
export interface JourneyLimits {
  DailyCap?: number;
  EndpointReentryCap?: number;
  MessagesPerSecond?: number;
  EndpointReentryInterval?: string;
  TimeframeCap?: JourneyTimeframeCap;
  TotalCap?: number;
}
export interface JourneyPushMessage {
  TimeToLive?: string;
}
export interface JourneyResponse {
  Activities?: Record<string, Activity>;
  ApplicationId: string;
  CreationDate?: string;
  Id: string;
  LastModifiedDate?: string;
  Limits?: JourneyLimits;
  LocalTime?: boolean;
  Name: string;
  QuietTime?: QuietTime;
  RefreshFrequency?: string;
  Schedule?: JourneySchedule;
  StartActivity?: string;
  StartCondition?: StartCondition;
  State?: State;
  tags?: Record<string, string>;
  WaitForQuietTime?: boolean;
  RefreshOnSegmentUpdate?: boolean;
  JourneyChannelSettings?: JourneyChannelSettings;
  SendingSchedule?: boolean;
  OpenHours?: OpenHours;
  ClosedDays?: ClosedDays;
  TimezoneEstimationMethods?: Array<__TimezoneEstimationMethodsElement>;
}
export interface JourneyRunExecutionActivityMetricsResponse {
  ActivityType: string;
  ApplicationId: string;
  JourneyActivityId: string;
  JourneyId: string;
  LastEvaluatedTime: string;
  Metrics: Record<string, string>;
  RunId: string;
}
export interface JourneyRunExecutionMetricsResponse {
  ApplicationId: string;
  JourneyId: string;
  LastEvaluatedTime: string;
  Metrics: Record<string, string>;
  RunId: string;
}
export interface JourneyRunResponse {
  CreationTime: string;
  LastUpdateTime: string;
  RunId: string;
  Status: JourneyRunStatus;
}
export interface JourneyRunsResponse {
  Item: Array<JourneyRunResponse>;
  NextToken?: string;
}
export type JourneyRunStatus =
  | "SCHEDULED"
  | "RUNNING"
  | "COMPLETED"
  | "CANCELLED";
export interface JourneySchedule {
  EndTime?: Date | string;
  StartTime?: Date | string;
  Timezone?: string;
}
export interface JourneySMSMessage {
  MessageType?: MessageType;
  OriginationNumber?: string;
  SenderId?: string;
  EntityId?: string;
  TemplateId?: string;
}
export interface JourneysResponse {
  Item: Array<JourneyResponse>;
  NextToken?: string;
}
export interface JourneyStateRequest {
  State?: State;
}
export interface JourneyTimeframeCap {
  Cap?: number;
  Days?: number;
}
export type Layout =
  | "BOTTOM_BANNER"
  | "TOP_BANNER"
  | "OVERLAYS"
  | "MOBILE_FEED"
  | "MIDDLE_BANNER"
  | "CAROUSEL";
export interface ListJourneysRequest {
  ApplicationId: string;
  PageSize?: string;
  Token?: string;
}
export interface ListJourneysResponse {
  JourneysResponse: JourneysResponse;
}
export type ListOf__EndpointTypesElement = Array<__EndpointTypesElement>;
export type ListOf__string = Array<string>;
export type ListOf__TimezoneEstimationMethodsElement =
  Array<__TimezoneEstimationMethodsElement>;
export type ListOfActivityResponse = Array<ActivityResponse>;
export type ListOfApplicationResponse = Array<ApplicationResponse>;
export type ListOfCampaignResponse = Array<CampaignResponse>;
export type ListOfClosedDaysRules = Array<ClosedDaysRule>;
export type ListOfEndpointBatchItem = Array<EndpointBatchItem>;
export type ListOfEndpointResponse = Array<EndpointResponse>;
export type ListOfExportJobResponse = Array<ExportJobResponse>;
export type ListOfImportJobResponse = Array<ImportJobResponse>;
export type ListOfInAppMessageCampaign = Array<InAppMessageCampaign>;
export type ListOfInAppMessageContent = Array<InAppMessageContent>;
export type ListOfJourneyResponse = Array<JourneyResponse>;
export type ListOfJourneyRunResponse = Array<JourneyRunResponse>;
export type ListOfMessageHeader = Array<MessageHeader>;
export type ListOfMultiConditionalBranch = Array<MultiConditionalBranch>;
export type ListOfOpenHoursRules = Array<OpenHoursRule>;
export type ListOfRandomSplitEntry = Array<RandomSplitEntry>;
export type ListOfRecommenderConfigurationResponse =
  Array<RecommenderConfigurationResponse>;
export type ListOfResultRow = Array<ResultRow>;
export type ListOfResultRowValue = Array<ResultRowValue>;
export type ListOfSegmentDimensions = Array<SegmentDimensions>;
export type ListOfSegmentGroup = Array<SegmentGroup>;
export type ListOfSegmentReference = Array<SegmentReference>;
export type ListOfSegmentResponse = Array<SegmentResponse>;
export type ListOfSimpleCondition = Array<SimpleCondition>;
export type ListOfTemplateResponse = Array<TemplateResponse>;
export type ListOfTemplateVersionResponse = Array<TemplateVersionResponse>;
export type ListOfTreatmentResource = Array<TreatmentResource>;
export type ListOfWriteTreatmentResource = Array<WriteTreatmentResource>;
export interface ListRecommenderConfigurationsResponse {
  Item: Array<RecommenderConfigurationResponse>;
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  TagsModel: TagsModel;
}
export interface ListTemplatesRequest {
  NextToken?: string;
  PageSize?: string;
  Prefix?: string;
  TemplateType?: string;
}
export interface ListTemplatesResponse {
  TemplatesResponse: TemplatesResponse;
}
export interface ListTemplateVersionsRequest {
  NextToken?: string;
  PageSize?: string;
  TemplateName: string;
  TemplateType: string;
}
export interface ListTemplateVersionsResponse {
  TemplateVersionsResponse: TemplateVersionsResponse;
}
export type MapOf__double = Record<string, number>;
export type MapOf__integer = Record<string, number>;
export type MapOf__string = Record<string, string>;
export type MapOfActivity = Record<string, Activity>;
export type MapOfAddressConfiguration = Record<string, AddressConfiguration>;
export type MapOfAttributeDimension = Record<string, AttributeDimension>;
export type MapOfChannelResponse = Record<string, ChannelResponse>;
export type MapOfEndpointMessageResult = Record<string, EndpointMessageResult>;
export type MapOfEndpointSendConfiguration = Record<
  string,
  EndpointSendConfiguration
>;
export type MapOfEvent = Record<string, Event>;
export type MapOfEventItemResponse = Record<string, EventItemResponse>;
export type MapOfEventsBatch = Record<string, EventsBatch>;
export type MapOfItemResponse = Record<string, ItemResponse>;
export type MapOfListOf__string = Record<string, Array<string>>;
export type MapOfListOfOpenHoursRules = Record<DayOfWeek, Array<OpenHoursRule>>;
export type MapOfMapOfEndpointMessageResult = Record<
  string,
  Record<string, EndpointMessageResult>
>;
export type MapOfMessageResult = Record<string, MessageResult>;
export type MapOfMetricDimension = Record<string, MetricDimension>;
export interface Message {
  Action?: Action;
  Body?: string;
  ImageIconUrl?: string;
  ImageSmallIconUrl?: string;
  ImageUrl?: string;
  JsonBody?: string;
  MediaUrl?: string;
  RawContent?: string;
  SilentPush?: boolean;
  TimeToLive?: number;
  Title?: string;
  Url?: string;
}
export interface MessageBody {
  Message?: string;
  RequestID?: string;
}
export interface MessageConfiguration {
  ADMMessage?: Message;
  APNSMessage?: Message;
  BaiduMessage?: Message;
  CustomMessage?: CampaignCustomMessage;
  DefaultMessage?: Message;
  EmailMessage?: CampaignEmailMessage;
  GCMMessage?: Message;
  SMSMessage?: CampaignSmsMessage;
  InAppMessage?: CampaignInAppMessage;
}
export interface MessageHeader {
  Name?: string;
  Value?: string;
}
export interface MessageRequest {
  Addresses?: Record<string, AddressConfiguration>;
  Context?: Record<string, string>;
  Endpoints?: Record<string, EndpointSendConfiguration>;
  MessageConfiguration: DirectMessageConfiguration;
  TemplateConfiguration?: TemplateConfiguration;
  TraceId?: string;
}
export interface MessageResponse {
  ApplicationId: string;
  EndpointResult?: Record<string, EndpointMessageResult>;
  RequestId?: string;
  Result?: Record<string, MessageResult>;
}
export interface MessageResult {
  DeliveryStatus: DeliveryStatus;
  MessageId?: string;
  StatusCode: number;
  StatusMessage?: string;
  UpdatedToken?: string;
}
export type MessageType = "TRANSACTIONAL" | "PROMOTIONAL";
export declare class MethodNotAllowedException extends EffectData.TaggedError(
  "MethodNotAllowedException",
)<{
  readonly Message?: string;
  readonly RequestID?: string;
}> {}
export interface MetricDimension {
  ComparisonOperator: string;
  Value: number;
}
export type Mode = "DELIVERY" | "FILTER";
export interface MultiConditionalBranch {
  Condition?: SimpleCondition;
  NextActivity?: string;
}
export interface MultiConditionalSplitActivity {
  Branches?: Array<MultiConditionalBranch>;
  DefaultActivity?: string;
  EvaluationWaitTime?: WaitTime;
}
export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly Message?: string;
  readonly RequestID?: string;
}> {}
export interface NumberValidateRequest {
  IsoCountryCode?: string;
  PhoneNumber?: string;
}
export interface NumberValidateResponse {
  Carrier?: string;
  City?: string;
  CleansedPhoneNumberE164?: string;
  CleansedPhoneNumberNational?: string;
  Country?: string;
  CountryCodeIso2?: string;
  CountryCodeNumeric?: string;
  County?: string;
  OriginalCountryCodeIso2?: string;
  OriginalPhoneNumber?: string;
  PhoneType?: string;
  PhoneTypeCode?: number;
  Timezone?: string;
  ZipCode?: string;
}
export interface OpenHours {
  EMAIL?: Record<DayOfWeek, Array<OpenHoursRule>>;
  SMS?: Record<DayOfWeek, Array<OpenHoursRule>>;
  PUSH?: Record<DayOfWeek, Array<OpenHoursRule>>;
  VOICE?: Record<DayOfWeek, Array<OpenHoursRule>>;
  CUSTOM?: Record<DayOfWeek, Array<OpenHoursRule>>;
}
export interface OpenHoursRule {
  StartTime?: string;
  EndTime?: string;
}
export type Operator = "ALL" | "ANY";
export interface OverrideButtonConfiguration {
  ButtonAction: ButtonAction;
  Link?: string;
}
export declare class PayloadTooLargeException extends EffectData.TaggedError(
  "PayloadTooLargeException",
)<{
  readonly Message?: string;
  readonly RequestID?: string;
}> {}
export interface PhoneNumberValidateRequest {
  NumberValidateRequest: NumberValidateRequest;
}
export interface PhoneNumberValidateResponse {
  NumberValidateResponse: NumberValidateResponse;
}
export interface PublicEndpoint {
  Address?: string;
  Attributes?: Record<string, Array<string>>;
  ChannelType?: ChannelType;
  Demographic?: EndpointDemographic;
  EffectiveDate?: string;
  EndpointStatus?: string;
  Location?: EndpointLocation;
  Metrics?: Record<string, number>;
  OptOut?: string;
  RequestId?: string;
  User?: EndpointUser;
}
export interface PushMessageActivity {
  MessageConfig?: JourneyPushMessage;
  NextActivity?: string;
  TemplateName?: string;
  TemplateVersion?: string;
}
export interface PushNotificationTemplateRequest {
  ADM?: AndroidPushNotificationTemplate;
  APNS?: APNSPushNotificationTemplate;
  Baidu?: AndroidPushNotificationTemplate;
  Default?: DefaultPushNotificationTemplate;
  DefaultSubstitutions?: string;
  GCM?: AndroidPushNotificationTemplate;
  RecommenderId?: string;
  tags?: Record<string, string>;
  TemplateDescription?: string;
}
export interface PushNotificationTemplateResponse {
  ADM?: AndroidPushNotificationTemplate;
  APNS?: APNSPushNotificationTemplate;
  Arn?: string;
  Baidu?: AndroidPushNotificationTemplate;
  CreationDate: string;
  Default?: DefaultPushNotificationTemplate;
  DefaultSubstitutions?: string;
  GCM?: AndroidPushNotificationTemplate;
  LastModifiedDate: string;
  RecommenderId?: string;
  tags?: Record<string, string>;
  TemplateDescription?: string;
  TemplateName: string;
  TemplateType: TemplateType;
  Version?: string;
}
export interface PutEventsRequest {
  ApplicationId: string;
  EventsRequest: EventsRequest;
}
export interface PutEventsResponse {
  EventsResponse: EventsResponse;
}
export interface PutEventStreamRequest {
  ApplicationId: string;
  WriteEventStream: WriteEventStream;
}
export interface PutEventStreamResponse {
  EventStream: EventStream;
}
export interface QuietTime {
  End?: string;
  Start?: string;
}
export interface RandomSplitActivity {
  Branches?: Array<RandomSplitEntry>;
}
export interface RandomSplitEntry {
  NextActivity?: string;
  Percentage?: number;
}
export interface RawEmail {
  Data?: Uint8Array | string;
}
export interface RecencyDimension {
  Duration: Duration;
  RecencyType: RecencyType;
}
export type RecencyType = "ACTIVE" | "INACTIVE";
export interface RecommenderConfigurationResponse {
  Attributes?: Record<string, string>;
  CreationDate: string;
  Description?: string;
  Id: string;
  LastModifiedDate: string;
  Name?: string;
  RecommendationProviderIdType?: string;
  RecommendationProviderRoleArn: string;
  RecommendationProviderUri: string;
  RecommendationTransformerUri?: string;
  RecommendationsDisplayName?: string;
  RecommendationsPerMessage?: number;
}
export interface RemoveAttributesRequest {
  ApplicationId: string;
  AttributeType: string;
  UpdateAttributesRequest: UpdateAttributesRequest;
}
export interface RemoveAttributesResponse {
  AttributesResource: AttributesResource;
}
export interface ResultRow {
  GroupedBys: Array<ResultRowValue>;
  Values: Array<ResultRowValue>;
}
export interface ResultRowValue {
  Key: string;
  Type: string;
  Value: string;
}
export interface Schedule {
  EndTime?: string;
  EventFilter?: CampaignEventFilter;
  Frequency?: Frequency;
  IsLocalTime?: boolean;
  QuietTime?: QuietTime;
  StartTime: string;
  Timezone?: string;
}
export interface SegmentBehaviors {
  Recency?: RecencyDimension;
}
export interface SegmentCondition {
  SegmentId: string;
}
export interface SegmentDemographics {
  AppVersion?: SetDimension;
  Channel?: SetDimension;
  DeviceType?: SetDimension;
  Make?: SetDimension;
  Model?: SetDimension;
  Platform?: SetDimension;
}
export interface SegmentDimensions {
  Attributes?: Record<string, AttributeDimension>;
  Behavior?: SegmentBehaviors;
  Demographic?: SegmentDemographics;
  Location?: SegmentLocation;
  Metrics?: Record<string, MetricDimension>;
  UserAttributes?: Record<string, AttributeDimension>;
}
export interface SegmentGroup {
  Dimensions?: Array<SegmentDimensions>;
  SourceSegments?: Array<SegmentReference>;
  SourceType?: SourceType;
  Type?: Type;
}
export interface SegmentGroupList {
  Groups?: Array<SegmentGroup>;
  Include?: Include;
}
export interface SegmentImportResource {
  ChannelCounts?: Record<string, number>;
  ExternalId: string;
  Format: Format;
  RoleArn: string;
  S3Url: string;
  Size: number;
}
export interface SegmentLocation {
  Country?: SetDimension;
  GPSPoint?: GPSPointDimension;
}
export interface SegmentReference {
  Id: string;
  Version?: number;
}
export interface SegmentResponse {
  ApplicationId: string;
  Arn: string;
  CreationDate: string;
  Dimensions?: SegmentDimensions;
  Id: string;
  ImportDefinition?: SegmentImportResource;
  LastModifiedDate?: string;
  Name?: string;
  SegmentGroups?: SegmentGroupList;
  SegmentType: SegmentType;
  tags?: Record<string, string>;
  Version?: number;
}
export interface SegmentsResponse {
  Item: Array<SegmentResponse>;
  NextToken?: string;
}
export type SegmentType = "DIMENSIONAL" | "IMPORT";
export interface SendMessagesRequest {
  ApplicationId: string;
  MessageRequest: MessageRequest;
}
export interface SendMessagesResponse {
  MessageResponse: MessageResponse;
}
export interface SendOTPMessageRequest {
  ApplicationId: string;
  SendOTPMessageRequestParameters: SendOTPMessageRequestParameters;
}
export interface SendOTPMessageRequestParameters {
  AllowedAttempts?: number;
  BrandName: string;
  Channel: string;
  CodeLength?: number;
  DestinationIdentity: string;
  EntityId?: string;
  Language?: string;
  OriginationIdentity: string;
  ReferenceId: string;
  TemplateId?: string;
  ValidityPeriod?: number;
}
export interface SendOTPMessageResponse {
  MessageResponse: MessageResponse;
}
export interface SendUsersMessageRequest {
  Context?: Record<string, string>;
  MessageConfiguration: DirectMessageConfiguration;
  TemplateConfiguration?: TemplateConfiguration;
  TraceId?: string;
  Users: Record<string, EndpointSendConfiguration>;
}
export interface SendUsersMessageResponse {
  ApplicationId: string;
  RequestId?: string;
  Result?: Record<string, Record<string, EndpointMessageResult>>;
}
export interface SendUsersMessagesRequest {
  ApplicationId: string;
  SendUsersMessageRequest: SendUsersMessageRequest;
}
export interface SendUsersMessagesResponse {
  SendUsersMessageResponse: SendUsersMessageResponse;
}
export interface Session {
  Duration?: number;
  Id: string;
  StartTimestamp: string;
  StopTimestamp?: string;
}
export interface SetDimension {
  DimensionType?: DimensionType;
  Values: Array<string>;
}
export interface SimpleCondition {
  EventCondition?: EventCondition;
  SegmentCondition?: SegmentCondition;
  SegmentDimensions?: SegmentDimensions;
}
export interface SimpleEmail {
  HtmlPart?: SimpleEmailPart;
  Subject?: SimpleEmailPart;
  TextPart?: SimpleEmailPart;
  Headers?: Array<MessageHeader>;
}
export interface SimpleEmailPart {
  Charset?: string;
  Data?: string;
}
export interface SMSChannelRequest {
  Enabled?: boolean;
  SenderId?: string;
  ShortCode?: string;
}
export interface SMSChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Platform: string;
  PromotionalMessagesPerSecond?: number;
  SenderId?: string;
  ShortCode?: string;
  TransactionalMessagesPerSecond?: number;
  Version?: number;
}
export interface SMSMessage {
  Body?: string;
  Keyword?: string;
  MediaUrl?: string;
  MessageType?: MessageType;
  OriginationNumber?: string;
  SenderId?: string;
  Substitutions?: Record<string, Array<string>>;
  EntityId?: string;
  TemplateId?: string;
}
export interface SMSMessageActivity {
  MessageConfig?: JourneySMSMessage;
  NextActivity?: string;
  TemplateName?: string;
  TemplateVersion?: string;
}
export interface SMSTemplateRequest {
  Body?: string;
  DefaultSubstitutions?: string;
  RecommenderId?: string;
  tags?: Record<string, string>;
  TemplateDescription?: string;
}
export interface SMSTemplateResponse {
  Arn?: string;
  Body?: string;
  CreationDate: string;
  DefaultSubstitutions?: string;
  LastModifiedDate: string;
  RecommenderId?: string;
  tags?: Record<string, string>;
  TemplateDescription?: string;
  TemplateName: string;
  TemplateType: TemplateType;
  Version?: string;
}
export type SourceType = "ALL" | "ANY" | "NONE";
export interface StartCondition {
  Description?: string;
  EventStartCondition?: EventStartCondition;
  SegmentStartCondition?: SegmentCondition;
}
export type State =
  | "DRAFT"
  | "ACTIVE"
  | "COMPLETED"
  | "CANCELLED"
  | "CLOSED"
  | "PAUSED";
export interface TagResourceRequest {
  ResourceArn: string;
  TagsModel: TagsModel;
}
export interface TagsModel {
  tags: Record<string, string>;
}
export interface Template {
  Name?: string;
  Version?: string;
}
export interface TemplateActiveVersionRequest {
  Version?: string;
}
export interface TemplateConfiguration {
  EmailTemplate?: Template;
  PushTemplate?: Template;
  SMSTemplate?: Template;
  VoiceTemplate?: Template;
  InAppTemplate?: Template;
}
export interface TemplateCreateMessageBody {
  Arn?: string;
  Message?: string;
  RequestID?: string;
}
export interface TemplateResponse {
  Arn?: string;
  CreationDate: string;
  DefaultSubstitutions?: string;
  LastModifiedDate: string;
  tags?: Record<string, string>;
  TemplateDescription?: string;
  TemplateName: string;
  TemplateType: TemplateType;
  Version?: string;
}
export interface TemplatesResponse {
  Item: Array<TemplateResponse>;
  NextToken?: string;
}
export type TemplateType = "EMAIL" | "SMS" | "VOICE" | "PUSH" | "INAPP";
export interface TemplateVersionResponse {
  CreationDate: string;
  DefaultSubstitutions?: string;
  LastModifiedDate: string;
  TemplateDescription?: string;
  TemplateName: string;
  TemplateType: string;
  Version?: string;
}
export interface TemplateVersionsResponse {
  Item: Array<TemplateVersionResponse>;
  Message?: string;
  NextToken?: string;
  RequestID?: string;
}
export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message?: string;
  readonly RequestID?: string;
}> {}
export interface TreatmentResource {
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
  Id: string;
  MessageConfiguration?: MessageConfiguration;
  Schedule?: Schedule;
  SizePercent: number;
  State?: CampaignState;
  TemplateConfiguration?: TemplateConfiguration;
  TreatmentDescription?: string;
  TreatmentName?: string;
}
export type Type = "ALL" | "ANY" | "NONE";
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UpdateAdmChannelRequest {
  ADMChannelRequest: ADMChannelRequest;
  ApplicationId: string;
}
export interface UpdateAdmChannelResponse {
  ADMChannelResponse: ADMChannelResponse;
}
export interface UpdateApnsChannelRequest {
  APNSChannelRequest: APNSChannelRequest;
  ApplicationId: string;
}
export interface UpdateApnsChannelResponse {
  APNSChannelResponse: APNSChannelResponse;
}
export interface UpdateApnsSandboxChannelRequest {
  APNSSandboxChannelRequest: APNSSandboxChannelRequest;
  ApplicationId: string;
}
export interface UpdateApnsSandboxChannelResponse {
  APNSSandboxChannelResponse: APNSSandboxChannelResponse;
}
export interface UpdateApnsVoipChannelRequest {
  APNSVoipChannelRequest: APNSVoipChannelRequest;
  ApplicationId: string;
}
export interface UpdateApnsVoipChannelResponse {
  APNSVoipChannelResponse: APNSVoipChannelResponse;
}
export interface UpdateApnsVoipSandboxChannelRequest {
  APNSVoipSandboxChannelRequest: APNSVoipSandboxChannelRequest;
  ApplicationId: string;
}
export interface UpdateApnsVoipSandboxChannelResponse {
  APNSVoipSandboxChannelResponse: APNSVoipSandboxChannelResponse;
}
export interface UpdateApplicationSettingsRequest {
  ApplicationId: string;
  WriteApplicationSettingsRequest: WriteApplicationSettingsRequest;
}
export interface UpdateApplicationSettingsResponse {
  ApplicationSettingsResource: ApplicationSettingsResource;
}
export interface UpdateAttributesRequest {
  Blacklist?: Array<string>;
}
export interface UpdateBaiduChannelRequest {
  ApplicationId: string;
  BaiduChannelRequest: BaiduChannelRequest;
}
export interface UpdateBaiduChannelResponse {
  BaiduChannelResponse: BaiduChannelResponse;
}
export interface UpdateCampaignRequest {
  ApplicationId: string;
  CampaignId: string;
  WriteCampaignRequest: WriteCampaignRequest;
}
export interface UpdateCampaignResponse {
  CampaignResponse: CampaignResponse;
}
export interface UpdateEmailChannelRequest {
  ApplicationId: string;
  EmailChannelRequest: EmailChannelRequest;
}
export interface UpdateEmailChannelResponse {
  EmailChannelResponse: EmailChannelResponse;
}
export interface UpdateEmailTemplateRequest {
  CreateNewVersion?: boolean;
  EmailTemplateRequest: EmailTemplateRequest;
  TemplateName: string;
  Version?: string;
}
export interface UpdateEmailTemplateResponse {
  MessageBody: MessageBody;
}
export interface UpdateEndpointRequest {
  ApplicationId: string;
  EndpointId: string;
  EndpointRequest: EndpointRequest;
}
export interface UpdateEndpointResponse {
  MessageBody: MessageBody;
}
export interface UpdateEndpointsBatchRequest {
  ApplicationId: string;
  EndpointBatchRequest: EndpointBatchRequest;
}
export interface UpdateEndpointsBatchResponse {
  MessageBody: MessageBody;
}
export interface UpdateGcmChannelRequest {
  ApplicationId: string;
  GCMChannelRequest: GCMChannelRequest;
}
export interface UpdateGcmChannelResponse {
  GCMChannelResponse: GCMChannelResponse;
}
export interface UpdateInAppTemplateRequest {
  CreateNewVersion?: boolean;
  InAppTemplateRequest: InAppTemplateRequest;
  TemplateName: string;
  Version?: string;
}
export interface UpdateInAppTemplateResponse {
  MessageBody: MessageBody;
}
export interface UpdateJourneyRequest {
  ApplicationId: string;
  JourneyId: string;
  WriteJourneyRequest: WriteJourneyRequest;
}
export interface UpdateJourneyResponse {
  JourneyResponse: JourneyResponse;
}
export interface UpdateJourneyStateRequest {
  ApplicationId: string;
  JourneyId: string;
  JourneyStateRequest: JourneyStateRequest;
}
export interface UpdateJourneyStateResponse {
  JourneyResponse: JourneyResponse;
}
export interface UpdatePushTemplateRequest {
  CreateNewVersion?: boolean;
  PushNotificationTemplateRequest: PushNotificationTemplateRequest;
  TemplateName: string;
  Version?: string;
}
export interface UpdatePushTemplateResponse {
  MessageBody: MessageBody;
}
export interface UpdateRecommenderConfigurationRequest {
  RecommenderId: string;
  UpdateRecommenderConfiguration: UpdateRecommenderConfigurationShape;
}
export interface UpdateRecommenderConfigurationResponse {
  RecommenderConfigurationResponse: RecommenderConfigurationResponse;
}
export interface UpdateRecommenderConfigurationShape {
  Attributes?: Record<string, string>;
  Description?: string;
  Name?: string;
  RecommendationProviderIdType?: string;
  RecommendationProviderRoleArn: string;
  RecommendationProviderUri: string;
  RecommendationTransformerUri?: string;
  RecommendationsDisplayName?: string;
  RecommendationsPerMessage?: number;
}
export interface UpdateSegmentRequest {
  ApplicationId: string;
  SegmentId: string;
  WriteSegmentRequest: WriteSegmentRequest;
}
export interface UpdateSegmentResponse {
  SegmentResponse: SegmentResponse;
}
export interface UpdateSmsChannelRequest {
  ApplicationId: string;
  SMSChannelRequest: SMSChannelRequest;
}
export interface UpdateSmsChannelResponse {
  SMSChannelResponse: SMSChannelResponse;
}
export interface UpdateSmsTemplateRequest {
  CreateNewVersion?: boolean;
  SMSTemplateRequest: SMSTemplateRequest;
  TemplateName: string;
  Version?: string;
}
export interface UpdateSmsTemplateResponse {
  MessageBody: MessageBody;
}
export interface UpdateTemplateActiveVersionRequest {
  TemplateActiveVersionRequest: TemplateActiveVersionRequest;
  TemplateName: string;
  TemplateType: string;
}
export interface UpdateTemplateActiveVersionResponse {
  MessageBody: MessageBody;
}
export interface UpdateVoiceChannelRequest {
  ApplicationId: string;
  VoiceChannelRequest: VoiceChannelRequest;
}
export interface UpdateVoiceChannelResponse {
  VoiceChannelResponse: VoiceChannelResponse;
}
export interface UpdateVoiceTemplateRequest {
  CreateNewVersion?: boolean;
  TemplateName: string;
  Version?: string;
  VoiceTemplateRequest: VoiceTemplateRequest;
}
export interface UpdateVoiceTemplateResponse {
  MessageBody: MessageBody;
}
export interface VerificationResponse {
  Valid?: boolean;
}
export interface VerifyOTPMessageRequest {
  ApplicationId: string;
  VerifyOTPMessageRequestParameters: VerifyOTPMessageRequestParameters;
}
export interface VerifyOTPMessageRequestParameters {
  DestinationIdentity: string;
  Otp: string;
  ReferenceId: string;
}
export interface VerifyOTPMessageResponse {
  VerificationResponse: VerificationResponse;
}
export interface VoiceChannelRequest {
  Enabled?: boolean;
}
export interface VoiceChannelResponse {
  ApplicationId?: string;
  CreationDate?: string;
  Enabled?: boolean;
  HasCredential?: boolean;
  Id?: string;
  IsArchived?: boolean;
  LastModifiedBy?: string;
  LastModifiedDate?: string;
  Platform: string;
  Version?: number;
}
export interface VoiceMessage {
  Body?: string;
  LanguageCode?: string;
  OriginationNumber?: string;
  Substitutions?: Record<string, Array<string>>;
  VoiceId?: string;
}
export interface VoiceTemplateRequest {
  Body?: string;
  DefaultSubstitutions?: string;
  LanguageCode?: string;
  tags?: Record<string, string>;
  TemplateDescription?: string;
  VoiceId?: string;
}
export interface VoiceTemplateResponse {
  Arn?: string;
  Body?: string;
  CreationDate: string;
  DefaultSubstitutions?: string;
  LanguageCode?: string;
  LastModifiedDate: string;
  tags?: Record<string, string>;
  TemplateDescription?: string;
  TemplateName: string;
  TemplateType: TemplateType;
  Version?: string;
  VoiceId?: string;
}
export interface WaitActivity {
  NextActivity?: string;
  WaitTime?: WaitTime;
}
export interface WaitTime {
  WaitFor?: string;
  WaitUntil?: string;
}
export interface WriteApplicationSettingsRequest {
  CampaignHook?: CampaignHook;
  CloudWatchMetricsEnabled?: boolean;
  EventTaggingEnabled?: boolean;
  Limits?: CampaignLimits;
  QuietTime?: QuietTime;
  JourneyLimits?: ApplicationSettingsJourneyLimits;
}
export interface WriteCampaignRequest {
  AdditionalTreatments?: Array<WriteTreatmentResource>;
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
  Description?: string;
  HoldoutPercent?: number;
  Hook?: CampaignHook;
  IsPaused?: boolean;
  Limits?: CampaignLimits;
  MessageConfiguration?: MessageConfiguration;
  Name?: string;
  Schedule?: Schedule;
  SegmentId?: string;
  SegmentVersion?: number;
  tags?: Record<string, string>;
  TemplateConfiguration?: TemplateConfiguration;
  TreatmentDescription?: string;
  TreatmentName?: string;
  Priority?: number;
}
export interface WriteEventStream {
  DestinationStreamArn: string;
  RoleArn: string;
}
export interface WriteJourneyRequest {
  Activities?: Record<string, Activity>;
  CreationDate?: string;
  LastModifiedDate?: string;
  Limits?: JourneyLimits;
  LocalTime?: boolean;
  Name: string;
  QuietTime?: QuietTime;
  RefreshFrequency?: string;
  Schedule?: JourneySchedule;
  StartActivity?: string;
  StartCondition?: StartCondition;
  State?: State;
  WaitForQuietTime?: boolean;
  RefreshOnSegmentUpdate?: boolean;
  JourneyChannelSettings?: JourneyChannelSettings;
  SendingSchedule?: boolean;
  OpenHours?: OpenHours;
  ClosedDays?: ClosedDays;
  TimezoneEstimationMethods?: Array<__TimezoneEstimationMethodsElement>;
}
export interface WriteSegmentRequest {
  Dimensions?: SegmentDimensions;
  Name?: string;
  SegmentGroups?: SegmentGroupList;
  tags?: Record<string, string>;
}
export interface WriteTreatmentResource {
  CustomDeliveryConfiguration?: CustomDeliveryConfiguration;
  MessageConfiguration?: MessageConfiguration;
  Schedule?: Schedule;
  SizePercent: number;
  TemplateConfiguration?: TemplateConfiguration;
  TreatmentDescription?: string;
  TreatmentName?: string;
}
export declare namespace CreateApp {
  export type Input = CreateAppRequest;
  export type Output = CreateAppResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateCampaign {
  export type Input = CreateCampaignRequest;
  export type Output = CreateCampaignResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateEmailTemplate {
  export type Input = CreateEmailTemplateRequest;
  export type Output = CreateEmailTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateExportJob {
  export type Input = CreateExportJobRequest;
  export type Output = CreateExportJobResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateImportJob {
  export type Input = CreateImportJobRequest;
  export type Output = CreateImportJobResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateInAppTemplate {
  export type Input = CreateInAppTemplateRequest;
  export type Output = CreateInAppTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateJourney {
  export type Input = CreateJourneyRequest;
  export type Output = CreateJourneyResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreatePushTemplate {
  export type Input = CreatePushTemplateRequest;
  export type Output = CreatePushTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateRecommenderConfiguration {
  export type Input = CreateRecommenderConfigurationRequest;
  export type Output = CreateRecommenderConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateSegment {
  export type Input = CreateSegmentRequest;
  export type Output = CreateSegmentResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateSmsTemplate {
  export type Input = CreateSmsTemplateRequest;
  export type Output = CreateSmsTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreateVoiceTemplate {
  export type Input = CreateVoiceTemplateRequest;
  export type Output = CreateVoiceTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteAdmChannel {
  export type Input = DeleteAdmChannelRequest;
  export type Output = DeleteAdmChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteApnsChannel {
  export type Input = DeleteApnsChannelRequest;
  export type Output = DeleteApnsChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteApnsSandboxChannel {
  export type Input = DeleteApnsSandboxChannelRequest;
  export type Output = DeleteApnsSandboxChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteApnsVoipChannel {
  export type Input = DeleteApnsVoipChannelRequest;
  export type Output = DeleteApnsVoipChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteApnsVoipSandboxChannel {
  export type Input = DeleteApnsVoipSandboxChannelRequest;
  export type Output = DeleteApnsVoipSandboxChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteApp {
  export type Input = DeleteAppRequest;
  export type Output = DeleteAppResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteBaiduChannel {
  export type Input = DeleteBaiduChannelRequest;
  export type Output = DeleteBaiduChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteCampaign {
  export type Input = DeleteCampaignRequest;
  export type Output = DeleteCampaignResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteEmailChannel {
  export type Input = DeleteEmailChannelRequest;
  export type Output = DeleteEmailChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteEmailTemplate {
  export type Input = DeleteEmailTemplateRequest;
  export type Output = DeleteEmailTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteEndpoint {
  export type Input = DeleteEndpointRequest;
  export type Output = DeleteEndpointResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteEventStream {
  export type Input = DeleteEventStreamRequest;
  export type Output = DeleteEventStreamResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteGcmChannel {
  export type Input = DeleteGcmChannelRequest;
  export type Output = DeleteGcmChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteInAppTemplate {
  export type Input = DeleteInAppTemplateRequest;
  export type Output = DeleteInAppTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteJourney {
  export type Input = DeleteJourneyRequest;
  export type Output = DeleteJourneyResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeletePushTemplate {
  export type Input = DeletePushTemplateRequest;
  export type Output = DeletePushTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteRecommenderConfiguration {
  export type Input = DeleteRecommenderConfigurationRequest;
  export type Output = DeleteRecommenderConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteSegment {
  export type Input = DeleteSegmentRequest;
  export type Output = DeleteSegmentResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteSmsChannel {
  export type Input = DeleteSmsChannelRequest;
  export type Output = DeleteSmsChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteSmsTemplate {
  export type Input = DeleteSmsTemplateRequest;
  export type Output = DeleteSmsTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteUserEndpoints {
  export type Input = DeleteUserEndpointsRequest;
  export type Output = DeleteUserEndpointsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteVoiceChannel {
  export type Input = DeleteVoiceChannelRequest;
  export type Output = DeleteVoiceChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeleteVoiceTemplate {
  export type Input = DeleteVoiceTemplateRequest;
  export type Output = DeleteVoiceTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetAdmChannel {
  export type Input = GetAdmChannelRequest;
  export type Output = GetAdmChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetApnsChannel {
  export type Input = GetApnsChannelRequest;
  export type Output = GetApnsChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetApnsSandboxChannel {
  export type Input = GetApnsSandboxChannelRequest;
  export type Output = GetApnsSandboxChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetApnsVoipChannel {
  export type Input = GetApnsVoipChannelRequest;
  export type Output = GetApnsVoipChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetApnsVoipSandboxChannel {
  export type Input = GetApnsVoipSandboxChannelRequest;
  export type Output = GetApnsVoipSandboxChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetApp {
  export type Input = GetAppRequest;
  export type Output = GetAppResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetApplicationDateRangeKpi {
  export type Input = GetApplicationDateRangeKpiRequest;
  export type Output = GetApplicationDateRangeKpiResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetApplicationSettings {
  export type Input = GetApplicationSettingsRequest;
  export type Output = GetApplicationSettingsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetApps {
  export type Input = GetAppsRequest;
  export type Output = GetAppsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetBaiduChannel {
  export type Input = GetBaiduChannelRequest;
  export type Output = GetBaiduChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetCampaign {
  export type Input = GetCampaignRequest;
  export type Output = GetCampaignResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetCampaignActivities {
  export type Input = GetCampaignActivitiesRequest;
  export type Output = GetCampaignActivitiesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetCampaignDateRangeKpi {
  export type Input = GetCampaignDateRangeKpiRequest;
  export type Output = GetCampaignDateRangeKpiResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetCampaigns {
  export type Input = GetCampaignsRequest;
  export type Output = GetCampaignsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetCampaignVersion {
  export type Input = GetCampaignVersionRequest;
  export type Output = GetCampaignVersionResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetCampaignVersions {
  export type Input = GetCampaignVersionsRequest;
  export type Output = GetCampaignVersionsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetChannels {
  export type Input = GetChannelsRequest;
  export type Output = GetChannelsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetEmailChannel {
  export type Input = GetEmailChannelRequest;
  export type Output = GetEmailChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetEmailTemplate {
  export type Input = GetEmailTemplateRequest;
  export type Output = GetEmailTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetEndpoint {
  export type Input = GetEndpointRequest;
  export type Output = GetEndpointResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetEventStream {
  export type Input = GetEventStreamRequest;
  export type Output = GetEventStreamResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetExportJob {
  export type Input = GetExportJobRequest;
  export type Output = GetExportJobResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetExportJobs {
  export type Input = GetExportJobsRequest;
  export type Output = GetExportJobsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetGcmChannel {
  export type Input = GetGcmChannelRequest;
  export type Output = GetGcmChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetImportJob {
  export type Input = GetImportJobRequest;
  export type Output = GetImportJobResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetImportJobs {
  export type Input = GetImportJobsRequest;
  export type Output = GetImportJobsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetInAppMessages {
  export type Input = GetInAppMessagesRequest;
  export type Output = GetInAppMessagesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetInAppTemplate {
  export type Input = GetInAppTemplateRequest;
  export type Output = GetInAppTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetJourney {
  export type Input = GetJourneyRequest;
  export type Output = GetJourneyResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetJourneyDateRangeKpi {
  export type Input = GetJourneyDateRangeKpiRequest;
  export type Output = GetJourneyDateRangeKpiResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetJourneyExecutionActivityMetrics {
  export type Input = GetJourneyExecutionActivityMetricsRequest;
  export type Output = GetJourneyExecutionActivityMetricsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetJourneyExecutionMetrics {
  export type Input = GetJourneyExecutionMetricsRequest;
  export type Output = GetJourneyExecutionMetricsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetJourneyRunExecutionActivityMetrics {
  export type Input = GetJourneyRunExecutionActivityMetricsRequest;
  export type Output = GetJourneyRunExecutionActivityMetricsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetJourneyRunExecutionMetrics {
  export type Input = GetJourneyRunExecutionMetricsRequest;
  export type Output = GetJourneyRunExecutionMetricsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetJourneyRuns {
  export type Input = GetJourneyRunsRequest;
  export type Output = GetJourneyRunsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetPushTemplate {
  export type Input = GetPushTemplateRequest;
  export type Output = GetPushTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetRecommenderConfiguration {
  export type Input = GetRecommenderConfigurationRequest;
  export type Output = GetRecommenderConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetRecommenderConfigurations {
  export type Input = GetRecommenderConfigurationsRequest;
  export type Output = GetRecommenderConfigurationsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetSegment {
  export type Input = GetSegmentRequest;
  export type Output = GetSegmentResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetSegmentExportJobs {
  export type Input = GetSegmentExportJobsRequest;
  export type Output = GetSegmentExportJobsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetSegmentImportJobs {
  export type Input = GetSegmentImportJobsRequest;
  export type Output = GetSegmentImportJobsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetSegments {
  export type Input = GetSegmentsRequest;
  export type Output = GetSegmentsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetSegmentVersion {
  export type Input = GetSegmentVersionRequest;
  export type Output = GetSegmentVersionResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetSegmentVersions {
  export type Input = GetSegmentVersionsRequest;
  export type Output = GetSegmentVersionsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetSmsChannel {
  export type Input = GetSmsChannelRequest;
  export type Output = GetSmsChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetSmsTemplate {
  export type Input = GetSmsTemplateRequest;
  export type Output = GetSmsTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetUserEndpoints {
  export type Input = GetUserEndpointsRequest;
  export type Output = GetUserEndpointsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetVoiceChannel {
  export type Input = GetVoiceChannelRequest;
  export type Output = GetVoiceChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetVoiceTemplate {
  export type Input = GetVoiceTemplateRequest;
  export type Output = GetVoiceTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListJourneys {
  export type Input = ListJourneysRequest;
  export type Output = ListJourneysResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error = CommonAwsError;
}

export declare namespace ListTemplates {
  export type Input = ListTemplatesRequest;
  export type Output = ListTemplatesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListTemplateVersions {
  export type Input = ListTemplateVersionsRequest;
  export type Output = ListTemplateVersionsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PhoneNumberValidate {
  export type Input = PhoneNumberValidateRequest;
  export type Output = PhoneNumberValidateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutEvents {
  export type Input = PutEventsRequest;
  export type Output = PutEventsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace PutEventStream {
  export type Input = PutEventStreamRequest;
  export type Output = PutEventStreamResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace RemoveAttributes {
  export type Input = RemoveAttributesRequest;
  export type Output = RemoveAttributesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace SendMessages {
  export type Input = SendMessagesRequest;
  export type Output = SendMessagesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace SendOTPMessage {
  export type Input = SendOTPMessageRequest;
  export type Output = SendOTPMessageResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace SendUsersMessages {
  export type Input = SendUsersMessagesRequest;
  export type Output = SendUsersMessagesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error = CommonAwsError;
}

export declare namespace UpdateAdmChannel {
  export type Input = UpdateAdmChannelRequest;
  export type Output = UpdateAdmChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateApnsChannel {
  export type Input = UpdateApnsChannelRequest;
  export type Output = UpdateApnsChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateApnsSandboxChannel {
  export type Input = UpdateApnsSandboxChannelRequest;
  export type Output = UpdateApnsSandboxChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateApnsVoipChannel {
  export type Input = UpdateApnsVoipChannelRequest;
  export type Output = UpdateApnsVoipChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateApnsVoipSandboxChannel {
  export type Input = UpdateApnsVoipSandboxChannelRequest;
  export type Output = UpdateApnsVoipSandboxChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateApplicationSettings {
  export type Input = UpdateApplicationSettingsRequest;
  export type Output = UpdateApplicationSettingsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateBaiduChannel {
  export type Input = UpdateBaiduChannelRequest;
  export type Output = UpdateBaiduChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateCampaign {
  export type Input = UpdateCampaignRequest;
  export type Output = UpdateCampaignResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateEmailChannel {
  export type Input = UpdateEmailChannelRequest;
  export type Output = UpdateEmailChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateEmailTemplate {
  export type Input = UpdateEmailTemplateRequest;
  export type Output = UpdateEmailTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateEndpoint {
  export type Input = UpdateEndpointRequest;
  export type Output = UpdateEndpointResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateEndpointsBatch {
  export type Input = UpdateEndpointsBatchRequest;
  export type Output = UpdateEndpointsBatchResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateGcmChannel {
  export type Input = UpdateGcmChannelRequest;
  export type Output = UpdateGcmChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateInAppTemplate {
  export type Input = UpdateInAppTemplateRequest;
  export type Output = UpdateInAppTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateJourney {
  export type Input = UpdateJourneyRequest;
  export type Output = UpdateJourneyResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateJourneyState {
  export type Input = UpdateJourneyStateRequest;
  export type Output = UpdateJourneyStateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdatePushTemplate {
  export type Input = UpdatePushTemplateRequest;
  export type Output = UpdatePushTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateRecommenderConfiguration {
  export type Input = UpdateRecommenderConfigurationRequest;
  export type Output = UpdateRecommenderConfigurationResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateSegment {
  export type Input = UpdateSegmentRequest;
  export type Output = UpdateSegmentResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateSmsChannel {
  export type Input = UpdateSmsChannelRequest;
  export type Output = UpdateSmsChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateSmsTemplate {
  export type Input = UpdateSmsTemplateRequest;
  export type Output = UpdateSmsTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateTemplateActiveVersion {
  export type Input = UpdateTemplateActiveVersionRequest;
  export type Output = UpdateTemplateActiveVersionResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateVoiceChannel {
  export type Input = UpdateVoiceChannelRequest;
  export type Output = UpdateVoiceChannelResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateVoiceTemplate {
  export type Input = UpdateVoiceTemplateRequest;
  export type Output = UpdateVoiceTemplateResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace VerifyOTPMessage {
  export type Input = VerifyOTPMessageRequest;
  export type Output = VerifyOTPMessageResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | MethodNotAllowedException
    | NotFoundException
    | PayloadTooLargeException
    | TooManyRequestsException
    | CommonAwsError;
}
