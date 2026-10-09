import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "fis",
  serviceShapeName: "FaultInjectionSimulator",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "fis" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-12-01");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { Region, UseDualStack = false, UseFIPS = false, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    if (UseFIPS === true) {
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
    }
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true && UseDualStack === true) {
          if (
            true === _.getAttr(PartitionResult, "supportsFIPS") &&
            true === _.getAttr(PartitionResult, "supportsDualStack")
          ) {
            return e(
              `https://fis-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
              return e(`https://fis.${Region}.amazonaws.com`);
            }
            return e(`https://fis-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://fis.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://fis.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ConflictException", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResourceNotFoundException", httpResponseCode: 404 }),
      /*@__PURE__*/ T.HttpError(404),
    ),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "ServiceQuotaExceededException",
        httpResponseCode: 402,
      }),
      /*@__PURE__*/ T.HttpError(402),
    ),
  ).pipe(C.withQuotaError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ValidationException", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export type ClientToken = string;
export type ExperimentTemplateDescription = string;
export type StopConditionSource = string;
export type StopConditionValue = string;
export interface CreateExperimentTemplateStopConditionInput {
  source: string;
  value?: string;
}
export type CreateExperimentTemplateStopConditionInputList =
  CreateExperimentTemplateStopConditionInput[];
export type ExperimentTemplateTargetName = string;
export type TargetResourceTypeId = string;
export type ResourceArn = string;
export type ResourceArnList = string[];
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
export type ExperimentTemplateTargetFilterPath = string;
export type ExperimentTemplateTargetFilterValue = string;
export type ExperimentTemplateTargetFilterValues = string[];
export interface ExperimentTemplateTargetInputFilter {
  path: string;
  values: string[];
}
export type ExperimentTemplateTargetFilterInputList = ExperimentTemplateTargetInputFilter[];
export type ExperimentTemplateTargetSelectionMode = string;
export type ExperimentTemplateTargetParameterName = string;
export type ExperimentTemplateTargetParameterValue = string;
export type ExperimentTemplateTargetParameterMap = { [key: string]: string | undefined };
export interface CreateExperimentTemplateTargetInput {
  resourceType: string;
  resourceArns?: string[];
  resourceTags?: { [key: string]: string | undefined };
  filters?: ExperimentTemplateTargetInputFilter[];
  selectionMode: string;
  parameters?: { [key: string]: string | undefined };
}
export type CreateExperimentTemplateTargetInputMap = {
  [key: string]: CreateExperimentTemplateTargetInput | undefined;
};
export type ExperimentTemplateActionName = string;
export type ActionId = string;
export type ExperimentTemplateActionDescription = string;
export type ExperimentTemplateActionParameterName = string;
export type ExperimentTemplateActionParameter = string;
export type ExperimentTemplateActionParameterMap = { [key: string]: string | undefined };
export type ExperimentTemplateActionTargetName = string;
export type ExperimentTemplateActionTargetMap = { [key: string]: string | undefined };
export type ExperimentTemplateActionStartAfter = string;
export type ExperimentTemplateActionStartAfterList = string[];
export interface CreateExperimentTemplateActionInput {
  actionId: string;
  description?: string;
  parameters?: { [key: string]: string | undefined };
  targets?: { [key: string]: string | undefined };
  startAfter?: string[];
}
export type CreateExperimentTemplateActionInputMap = {
  [key: string]: CreateExperimentTemplateActionInput | undefined;
};
export type RoleArn = string;
export type CloudWatchLogGroupArn = string;
export interface ExperimentTemplateCloudWatchLogsLogConfigurationInput {
  logGroupArn: string;
}
export type S3BucketName = string;
export type S3ObjectKey = string;
export interface ExperimentTemplateS3LogConfigurationInput {
  bucketName: string;
  prefix?: string;
}
export type LogSchemaVersion = number;
export interface CreateExperimentTemplateLogConfigurationInput {
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput;
  s3Configuration?: ExperimentTemplateS3LogConfigurationInput;
  logSchemaVersion: number;
}
export type AccountTargeting = "single-account" | "multi-account" | (string & {});
export type EmptyTargetResolutionMode = "fail" | "skip" | (string & {});
export interface CreateExperimentTemplateExperimentOptionsInput {
  accountTargeting?: AccountTargeting;
  emptyTargetResolutionMode?: EmptyTargetResolutionMode;
}
export type ReportConfigurationS3OutputPrefix = string;
export interface ReportConfigurationS3OutputInput {
  bucketName?: string;
  prefix?: string;
}
export interface ExperimentTemplateReportConfigurationOutputsInput {
  s3Configuration?: ReportConfigurationS3OutputInput;
}
export type ReportConfigurationCloudWatchDashboardIdentifier = string;
export interface ReportConfigurationCloudWatchDashboardInput {
  dashboardIdentifier?: string;
}
export type ReportConfigurationCloudWatchDashboardInputList =
  ReportConfigurationCloudWatchDashboardInput[];
export interface ExperimentTemplateReportConfigurationDataSourcesInput {
  cloudWatchDashboards?: ReportConfigurationCloudWatchDashboardInput[];
}
export type ReportConfigurationDuration = string;
export interface CreateExperimentTemplateReportConfigurationInput {
  outputs?: ExperimentTemplateReportConfigurationOutputsInput;
  dataSources?: ExperimentTemplateReportConfigurationDataSourcesInput;
  preExperimentDuration?: string;
  postExperimentDuration?: string;
}
export interface CreateExperimentTemplateRequest {
  clientToken: string;
  description: string;
  stopConditions: CreateExperimentTemplateStopConditionInput[];
  targets?: { [key: string]: CreateExperimentTemplateTargetInput | undefined };
  actions: { [key: string]: CreateExperimentTemplateActionInput | undefined };
  roleArn: string;
  tags?: { [key: string]: string | undefined };
  logConfiguration?: CreateExperimentTemplateLogConfigurationInput;
  experimentOptions?: CreateExperimentTemplateExperimentOptionsInput;
  experimentReportConfiguration?: CreateExperimentTemplateReportConfigurationInput;
}
export type ExperimentTemplateId = string;
export interface ExperimentTemplateTargetFilter {
  path?: string;
  values?: string[];
}
export type ExperimentTemplateTargetFilterList = ExperimentTemplateTargetFilter[];
export interface ExperimentTemplateTarget {
  resourceType?: string;
  resourceArns?: string[];
  resourceTags?: { [key: string]: string | undefined };
  filters?: ExperimentTemplateTargetFilter[];
  selectionMode?: string;
  parameters?: { [key: string]: string | undefined };
}
export type ExperimentTemplateTargetMap = { [key: string]: ExperimentTemplateTarget | undefined };
export interface ExperimentTemplateAction {
  actionId?: string;
  description?: string;
  parameters?: { [key: string]: string | undefined };
  targets?: { [key: string]: string | undefined };
  startAfter?: string[];
}
export type ExperimentTemplateActionMap = { [key: string]: ExperimentTemplateAction | undefined };
export interface ExperimentTemplateStopCondition {
  source?: string;
  value?: string;
}
export type ExperimentTemplateStopConditionList = ExperimentTemplateStopCondition[];
export type CreationTime = Date;
export type LastUpdateTime = Date;
export interface ExperimentTemplateCloudWatchLogsLogConfiguration {
  logGroupArn?: string;
}
export interface ExperimentTemplateS3LogConfiguration {
  bucketName?: string;
  prefix?: string;
}
export interface ExperimentTemplateLogConfiguration {
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfiguration;
  s3Configuration?: ExperimentTemplateS3LogConfiguration;
  logSchemaVersion?: number;
}
export interface ExperimentTemplateExperimentOptions {
  accountTargeting?: AccountTargeting;
  emptyTargetResolutionMode?: EmptyTargetResolutionMode;
}
export type TargetAccountConfigurationsCount = number;
export interface ReportConfigurationS3Output {
  bucketName?: string;
  prefix?: string;
}
export interface ExperimentTemplateReportConfigurationOutputs {
  s3Configuration?: ReportConfigurationS3Output;
}
export interface ExperimentTemplateReportConfigurationCloudWatchDashboard {
  dashboardIdentifier?: string;
}
export type ExperimentTemplateReportConfigurationCloudWatchDashboardList =
  ExperimentTemplateReportConfigurationCloudWatchDashboard[];
export interface ExperimentTemplateReportConfigurationDataSources {
  cloudWatchDashboards?: ExperimentTemplateReportConfigurationCloudWatchDashboard[];
}
export interface ExperimentTemplateReportConfiguration {
  outputs?: ExperimentTemplateReportConfigurationOutputs;
  dataSources?: ExperimentTemplateReportConfigurationDataSources;
  preExperimentDuration?: string;
  postExperimentDuration?: string;
}
export interface ExperimentTemplate {
  id?: string;
  arn?: string;
  description?: string;
  targets?: { [key: string]: ExperimentTemplateTarget | undefined };
  actions?: { [key: string]: ExperimentTemplateAction | undefined };
  stopConditions?: ExperimentTemplateStopCondition[];
  creationTime?: Date;
  lastUpdateTime?: Date;
  roleArn?: string;
  tags?: { [key: string]: string | undefined };
  logConfiguration?: ExperimentTemplateLogConfiguration;
  experimentOptions?: ExperimentTemplateExperimentOptions;
  targetAccountConfigurationsCount?: number;
  experimentReportConfiguration?: ExperimentTemplateReportConfiguration;
}
export interface CreateExperimentTemplateResponse {
  experimentTemplate?: ExperimentTemplate;
}
export type TargetAccountId = string;
export type TargetAccountConfigurationDescription = string;
export interface CreateTargetAccountConfigurationRequest {
  clientToken?: string;
  experimentTemplateId: string;
  accountId: string;
  roleArn: string;
  description?: string;
}
export interface TargetAccountConfiguration {
  roleArn?: string;
  accountId?: string;
  description?: string;
}
export interface CreateTargetAccountConfigurationResponse {
  targetAccountConfiguration?: TargetAccountConfiguration;
}
export interface DeleteExperimentTemplateRequest {
  id: string;
}
export interface DeleteExperimentTemplateResponse {
  experimentTemplate?: ExperimentTemplate;
}
export interface DeleteTargetAccountConfigurationRequest {
  experimentTemplateId: string;
  accountId: string;
}
export interface DeleteTargetAccountConfigurationResponse {
  targetAccountConfiguration?: TargetAccountConfiguration;
}
export interface GetActionRequest {
  id: string;
}
export type ActionDescription = string;
export type ActionParameterName = string;
export type ActionParameterDescription = string;
export type ActionParameterRequired = boolean;
export interface ActionParameter {
  description?: string;
  required?: boolean;
}
export type ActionParameterMap = { [key: string]: ActionParameter | undefined };
export type ActionTargetName = string;
export interface ActionTarget {
  resourceType?: string;
}
export type ActionTargetMap = { [key: string]: ActionTarget | undefined };
export interface Action {
  id?: string;
  arn?: string;
  description?: string;
  parameters?: { [key: string]: ActionParameter | undefined };
  targets?: { [key: string]: ActionTarget | undefined };
  tags?: { [key: string]: string | undefined };
}
export interface GetActionResponse {
  action?: Action;
}
export type ExperimentId = string;
export interface GetExperimentRequest {
  id: string;
}
export type ExperimentStatus =
  | "pending"
  | "initiating"
  | "running"
  | "completed"
  | "stopping"
  | "stopped"
  | "failed"
  | "cancelled"
  | (string & {});
export type ExperimentStatusReason = string;
export type ExperimentErrorAccountId = string;
export type ExperimentErrorCode = string;
export type ExperimentErrorLocation = string;
export interface ExperimentError {
  accountId?: string;
  code?: string;
  location?: string;
}
export interface ExperimentState {
  status?: ExperimentStatus;
  reason?: string;
  error?: ExperimentError;
}
export type ExperimentTargetName = string;
export type ExperimentTargetFilterPath = string;
export type ExperimentTargetFilterValue = string;
export type ExperimentTargetFilterValues = string[];
export interface ExperimentTargetFilter {
  path?: string;
  values?: string[];
}
export type ExperimentTargetFilterList = ExperimentTargetFilter[];
export type ExperimentTargetSelectionMode = string;
export type ExperimentTargetParameterName = string;
export type ExperimentTargetParameterValue = string;
export type ExperimentTargetParameterMap = { [key: string]: string | undefined };
export interface ExperimentTarget {
  resourceType?: string;
  resourceArns?: string[];
  resourceTags?: { [key: string]: string | undefined };
  filters?: ExperimentTargetFilter[];
  selectionMode?: string;
  parameters?: { [key: string]: string | undefined };
}
export type ExperimentTargetMap = { [key: string]: ExperimentTarget | undefined };
export type ExperimentActionName = string;
export type ExperimentActionDescription = string;
export type ExperimentActionParameterName = string;
export type ExperimentActionParameter = string;
export type ExperimentActionParameterMap = { [key: string]: string | undefined };
export type ExperimentActionTargetName = string;
export type ExperimentActionTargetMap = { [key: string]: string | undefined };
export type ExperimentActionStartAfter = string;
export type ExperimentActionStartAfterList = string[];
export type ExperimentActionStatus =
  | "pending"
  | "initiating"
  | "running"
  | "completed"
  | "cancelled"
  | "stopping"
  | "stopped"
  | "failed"
  | "skipped"
  | (string & {});
export type ExperimentActionStatusReason = string;
export interface ExperimentActionState {
  status?: ExperimentActionStatus;
  reason?: string;
}
export type ExperimentActionStartTime = Date;
export type ExperimentActionEndTime = Date;
export interface ExperimentAction {
  actionId?: string;
  description?: string;
  parameters?: { [key: string]: string | undefined };
  targets?: { [key: string]: string | undefined };
  startAfter?: string[];
  state?: ExperimentActionState;
  startTime?: Date;
  endTime?: Date;
}
export type ExperimentActionMap = { [key: string]: ExperimentAction | undefined };
export interface ExperimentStopCondition {
  source?: string;
  value?: string;
}
export type ExperimentStopConditionList = ExperimentStopCondition[];
export type ExperimentStartTime = Date;
export type ExperimentEndTime = Date;
export interface ExperimentCloudWatchLogsLogConfiguration {
  logGroupArn?: string;
}
export interface ExperimentS3LogConfiguration {
  bucketName?: string;
  prefix?: string;
}
export interface ExperimentLogConfiguration {
  cloudWatchLogsConfiguration?: ExperimentCloudWatchLogsLogConfiguration;
  s3Configuration?: ExperimentS3LogConfiguration;
  logSchemaVersion?: number;
}
export type ActionsMode = "skip-all" | "run-all" | (string & {});
export interface ExperimentOptions {
  accountTargeting?: AccountTargeting;
  emptyTargetResolutionMode?: EmptyTargetResolutionMode;
  actionsMode?: ActionsMode;
}
export interface ExperimentReportConfigurationOutputsS3Configuration {
  bucketName?: string;
  prefix?: string;
}
export interface ExperimentReportConfigurationOutputs {
  s3Configuration?: ExperimentReportConfigurationOutputsS3Configuration;
}
export interface ExperimentReportConfigurationCloudWatchDashboard {
  dashboardIdentifier?: string;
}
export type ExperimentReportConfigurationCloudWatchDashboardList =
  ExperimentReportConfigurationCloudWatchDashboard[];
export interface ExperimentReportConfigurationDataSources {
  cloudWatchDashboards?: ExperimentReportConfigurationCloudWatchDashboard[];
}
export interface ExperimentReportConfiguration {
  outputs?: ExperimentReportConfigurationOutputs;
  dataSources?: ExperimentReportConfigurationDataSources;
  preExperimentDuration?: string;
  postExperimentDuration?: string;
}
export type ExperimentReportStatus =
  | "pending"
  | "running"
  | "completed"
  | "cancelled"
  | "failed"
  | (string & {});
export type ExperimentReportReason = string;
export type ExperimentReportErrorCode = string;
export interface ExperimentReportError {
  code?: string;
}
export interface ExperimentReportState {
  status?: ExperimentReportStatus;
  reason?: string;
  error?: ExperimentReportError;
}
export type ExperimentReportS3ReportArn = string;
export type ExperimentReportS3ReportType = string;
export interface ExperimentReportS3Report {
  arn?: string;
  reportType?: string;
}
export type ExperimentReportS3ReportList = ExperimentReportS3Report[];
export interface ExperimentReport {
  state?: ExperimentReportState;
  s3Reports?: ExperimentReportS3Report[];
}
export interface Experiment {
  id?: string;
  arn?: string;
  experimentTemplateId?: string;
  roleArn?: string;
  state?: ExperimentState;
  targets?: { [key: string]: ExperimentTarget | undefined };
  actions?: { [key: string]: ExperimentAction | undefined };
  stopConditions?: ExperimentStopCondition[];
  creationTime?: Date;
  startTime?: Date;
  endTime?: Date;
  tags?: { [key: string]: string | undefined };
  logConfiguration?: ExperimentLogConfiguration;
  experimentOptions?: ExperimentOptions;
  targetAccountConfigurationsCount?: number;
  experimentReportConfiguration?: ExperimentReportConfiguration;
  experimentReport?: ExperimentReport;
}
export interface GetExperimentResponse {
  experiment?: Experiment;
}
export interface GetExperimentTargetAccountConfigurationRequest {
  experimentId: string;
  accountId: string;
}
export interface ExperimentTargetAccountConfiguration {
  roleArn?: string;
  accountId?: string;
  description?: string;
}
export interface GetExperimentTargetAccountConfigurationResponse {
  targetAccountConfiguration?: ExperimentTargetAccountConfiguration;
}
export interface GetExperimentTemplateRequest {
  id: string;
}
export interface GetExperimentTemplateResponse {
  experimentTemplate?: ExperimentTemplate;
}
export type SafetyLeverId = string;
export interface GetSafetyLeverRequest {
  id: string;
}
export type SafetyLeverStatus = "disengaged" | "engaged" | "engaging" | (string & {});
export type SafetyLeverStatusReason = string;
export interface SafetyLeverState {
  status?: SafetyLeverStatus;
  reason?: string;
}
export interface SafetyLever {
  id?: string;
  arn?: string;
  state?: SafetyLeverState;
}
export interface GetSafetyLeverResponse {
  safetyLever?: SafetyLever;
}
export interface GetTargetAccountConfigurationRequest {
  experimentTemplateId: string;
  accountId: string;
}
export interface GetTargetAccountConfigurationResponse {
  targetAccountConfiguration?: TargetAccountConfiguration;
}
export interface GetTargetResourceTypeRequest {
  resourceType: string;
}
export type TargetResourceTypeDescription = string;
export type TargetResourceTypeParameterName = string;
export type TargetResourceTypeParameterDescription = string;
export type TargetResourceTypeParameterRequired = boolean;
export interface TargetResourceTypeParameter {
  description?: string;
  required?: boolean;
}
export type TargetResourceTypeParameterMap = {
  [key: string]: TargetResourceTypeParameter | undefined;
};
export interface TargetResourceType {
  resourceType?: string;
  description?: string;
  parameters?: { [key: string]: TargetResourceTypeParameter | undefined };
}
export interface GetTargetResourceTypeResponse {
  targetResourceType?: TargetResourceType;
}
export type ListActionsMaxResults = number;
export type NextToken = string;
export interface ListActionsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ActionSummary {
  id?: string;
  arn?: string;
  description?: string;
  targets?: { [key: string]: ActionTarget | undefined };
  tags?: { [key: string]: string | undefined };
}
export type ActionSummaryList = ActionSummary[];
export interface ListActionsResponse {
  actions?: ActionSummary[];
  nextToken?: string;
}
export type ListExperimentResolvedTargetsMaxResults = number;
export type TargetName = string;
export interface ListExperimentResolvedTargetsRequest {
  experimentId: string;
  maxResults?: number;
  nextToken?: string;
  targetName?: string;
}
export type TargetInformationKey = string;
export type TargetInformationValue = string;
export type TargetInformationMap = { [key: string]: string | undefined };
export interface ResolvedTarget {
  resourceType?: string;
  targetName?: string;
  targetInformation?: { [key: string]: string | undefined };
}
export type ResolvedTargetList = ResolvedTarget[];
export interface ListExperimentResolvedTargetsResponse {
  resolvedTargets?: ResolvedTarget[];
  nextToken?: string;
}
export type ListExperimentsMaxResults = number;
export interface ListExperimentsRequest {
  maxResults?: number;
  nextToken?: string;
  experimentTemplateId?: string;
}
export interface ExperimentSummary {
  id?: string;
  arn?: string;
  experimentTemplateId?: string;
  state?: ExperimentState;
  creationTime?: Date;
  tags?: { [key: string]: string | undefined };
  experimentOptions?: ExperimentOptions;
}
export type ExperimentSummaryList = ExperimentSummary[];
export interface ListExperimentsResponse {
  experiments?: ExperimentSummary[];
  nextToken?: string;
}
export interface ListExperimentTargetAccountConfigurationsRequest {
  experimentId: string;
  nextToken?: string;
}
export interface ExperimentTargetAccountConfigurationSummary {
  roleArn?: string;
  accountId?: string;
  description?: string;
}
export type ExperimentTargetAccountConfigurationList =
  ExperimentTargetAccountConfigurationSummary[];
export interface ListExperimentTargetAccountConfigurationsResponse {
  targetAccountConfigurations?: ExperimentTargetAccountConfigurationSummary[];
  nextToken?: string;
}
export type ListExperimentTemplatesMaxResults = number;
export interface ListExperimentTemplatesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ExperimentTemplateSummary {
  id?: string;
  arn?: string;
  description?: string;
  creationTime?: Date;
  lastUpdateTime?: Date;
  tags?: { [key: string]: string | undefined };
}
export type ExperimentTemplateSummaryList = ExperimentTemplateSummary[];
export interface ListExperimentTemplatesResponse {
  experimentTemplates?: ExperimentTemplateSummary[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export type ListTargetAccountConfigurationsMaxResults = number;
export interface ListTargetAccountConfigurationsRequest {
  experimentTemplateId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface TargetAccountConfigurationSummary {
  roleArn?: string;
  accountId?: string;
  description?: string;
}
export type TargetAccountConfigurationList = TargetAccountConfigurationSummary[];
export interface ListTargetAccountConfigurationsResponse {
  targetAccountConfigurations?: TargetAccountConfigurationSummary[];
  nextToken?: string;
}
export type ListTargetResourceTypesMaxResults = number;
export interface ListTargetResourceTypesRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface TargetResourceTypeSummary {
  resourceType?: string;
  description?: string;
}
export type TargetResourceTypeSummaryList = TargetResourceTypeSummary[];
export interface ListTargetResourceTypesResponse {
  targetResourceTypes?: TargetResourceTypeSummary[];
  nextToken?: string;
}
export interface StartExperimentExperimentOptionsInput {
  actionsMode?: ActionsMode;
}
export interface StartExperimentRequest {
  clientToken: string;
  experimentTemplateId: string;
  experimentOptions?: StartExperimentExperimentOptionsInput;
  tags?: { [key: string]: string | undefined };
}
export interface StartExperimentResponse {
  experiment?: Experiment;
}
export interface StopExperimentRequest {
  id: string;
}
export interface StopExperimentResponse {
  experiment?: Experiment;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys?: string[];
}
export interface UntagResourceResponse {}
export interface UpdateExperimentTemplateStopConditionInput {
  source: string;
  value?: string;
}
export type UpdateExperimentTemplateStopConditionInputList =
  UpdateExperimentTemplateStopConditionInput[];
export interface UpdateExperimentTemplateTargetInput {
  resourceType: string;
  resourceArns?: string[];
  resourceTags?: { [key: string]: string | undefined };
  filters?: ExperimentTemplateTargetInputFilter[];
  selectionMode: string;
  parameters?: { [key: string]: string | undefined };
}
export type UpdateExperimentTemplateTargetInputMap = {
  [key: string]: UpdateExperimentTemplateTargetInput | undefined;
};
export interface UpdateExperimentTemplateActionInputItem {
  actionId?: string;
  description?: string;
  parameters?: { [key: string]: string | undefined };
  targets?: { [key: string]: string | undefined };
  startAfter?: string[];
}
export type UpdateExperimentTemplateActionInputMap = {
  [key: string]: UpdateExperimentTemplateActionInputItem | undefined;
};
export interface UpdateExperimentTemplateLogConfigurationInput {
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput;
  s3Configuration?: ExperimentTemplateS3LogConfigurationInput;
  logSchemaVersion?: number;
}
export interface UpdateExperimentTemplateExperimentOptionsInput {
  emptyTargetResolutionMode?: EmptyTargetResolutionMode;
}
export interface UpdateExperimentTemplateReportConfigurationInput {
  outputs?: ExperimentTemplateReportConfigurationOutputsInput;
  dataSources?: ExperimentTemplateReportConfigurationDataSourcesInput;
  preExperimentDuration?: string;
  postExperimentDuration?: string;
}
export interface UpdateExperimentTemplateRequest {
  id: string;
  description?: string;
  stopConditions?: UpdateExperimentTemplateStopConditionInput[];
  targets?: { [key: string]: UpdateExperimentTemplateTargetInput | undefined };
  actions?: { [key: string]: UpdateExperimentTemplateActionInputItem | undefined };
  roleArn?: string;
  logConfiguration?: UpdateExperimentTemplateLogConfigurationInput;
  experimentOptions?: UpdateExperimentTemplateExperimentOptionsInput;
  experimentReportConfiguration?: UpdateExperimentTemplateReportConfigurationInput;
}
export interface UpdateExperimentTemplateResponse {
  experimentTemplate?: ExperimentTemplate;
}
export type SafetyLeverStatusInput = "disengaged" | "engaged" | (string & {});
export interface UpdateSafetyLeverStateInput {
  status: SafetyLeverStatusInput;
  reason: string;
}
export interface UpdateSafetyLeverStateRequest {
  id: string;
  state: UpdateSafetyLeverStateInput;
}
export interface UpdateSafetyLeverStateResponse {
  safetyLever?: SafetyLever;
}
export interface UpdateTargetAccountConfigurationRequest {
  experimentTemplateId: string;
  accountId: string;
  roleArn?: string;
  description?: string;
}
export interface UpdateTargetAccountConfigurationResponse {
  targetAccountConfiguration?: TargetAccountConfiguration;
}
export type ExceptionMessage = string;
export type CreateExperimentTemplateError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates an experiment template.
 *
 * An experiment template includes the following components:
 *
 * - **Targets**: A target can be a specific resource in
 * your Amazon Web Services environment, or one or more resources that match criteria that you
 * specify, for example, resources that have specific tags.
 *
 * - **Actions**: The actions to carry out on the
 * target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.
 *
 * - **Stop conditions**: If a stop condition is
 * triggered while an experiment is running, the experiment is automatically
 * stopped. You can define a stop condition as a CloudWatch alarm.
 *
 * For more information, see experiment templates
 * in the *Fault Injection Service User Guide*.
 */
export const createExperimentTemplate: API.OperationMethod<
  CreateExperimentTemplateRequest,
  CreateExperimentTemplateResponse,
  CreateExperimentTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21) as any as S.Schema<CreateExperimentTemplateRequest>,
  output: __S(37) as any as S.Schema<CreateExperimentTemplateResponse>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateExperimentTemplate",
}));

export type CreateTargetAccountConfigurationError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a target account configuration for the experiment template. A target account configuration
 * is required when `accountTargeting` of `experimentOptions` is set to `multi-account`.
 * For more information, see experiment options
 * in the *Fault Injection Service User Guide*.
 */
export const createTargetAccountConfiguration: API.OperationMethod<
  CreateTargetAccountConfigurationRequest,
  CreateTargetAccountConfigurationResponse,
  CreateTargetAccountConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(38) as any as S.Schema<CreateTargetAccountConfigurationRequest>,
  output: __S(40) as any as S.Schema<CreateTargetAccountConfigurationResponse>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTargetAccountConfiguration",
}));

export type DeleteExperimentTemplateError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified experiment template.
 */
export const deleteExperimentTemplate: API.OperationMethod<
  DeleteExperimentTemplateRequest,
  DeleteExperimentTemplateResponse,
  DeleteExperimentTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41) as any as S.Schema<DeleteExperimentTemplateRequest>,
  output: __S(37) as any as S.Schema<DeleteExperimentTemplateResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteExperimentTemplate",
}));

export type DeleteTargetAccountConfigurationError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified target account configuration of the experiment template.
 */
export const deleteTargetAccountConfiguration: API.OperationMethod<
  DeleteTargetAccountConfigurationRequest,
  DeleteTargetAccountConfigurationResponse,
  DeleteTargetAccountConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42) as any as S.Schema<DeleteTargetAccountConfigurationRequest>,
  output: __S(40) as any as S.Schema<DeleteTargetAccountConfigurationResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTargetAccountConfiguration",
}));

export type GetActionError = ResourceNotFoundException | ValidationException | CommonErrors;
/**
 * Gets information about the specified FIS action.
 */
export const getAction: API.OperationMethod<
  GetActionRequest,
  GetActionResponse,
  GetActionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43) as any as S.Schema<GetActionRequest>,
  output: __S(49) as any as S.Schema<GetActionResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAction",
}));

export type GetExperimentError = ResourceNotFoundException | ValidationException | CommonErrors;
/**
 * Gets information about the specified experiment.
 */
export const getExperiment: API.OperationMethod<
  GetExperimentRequest,
  GetExperimentResponse,
  GetExperimentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50) as any as S.Schema<GetExperimentRequest>,
  output: __S(71) as any as S.Schema<GetExperimentResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetExperiment",
}));

export type GetExperimentTargetAccountConfigurationError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specified target account configuration of the experiment.
 */
export const getExperimentTargetAccountConfiguration: API.OperationMethod<
  GetExperimentTargetAccountConfigurationRequest,
  GetExperimentTargetAccountConfigurationResponse,
  GetExperimentTargetAccountConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72) as any as S.Schema<GetExperimentTargetAccountConfigurationRequest>,
  output: __S(40) as any as S.Schema<GetExperimentTargetAccountConfigurationResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetExperimentTargetAccountConfiguration",
}));

export type GetExperimentTemplateError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specified experiment template.
 */
export const getExperimentTemplate: API.OperationMethod<
  GetExperimentTemplateRequest,
  GetExperimentTemplateResponse,
  GetExperimentTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(73) as any as S.Schema<GetExperimentTemplateRequest>,
  output: __S(37) as any as S.Schema<GetExperimentTemplateResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetExperimentTemplate",
}));

export type GetSafetyLeverError = ResourceNotFoundException | CommonErrors;
/**
 * Gets information about the specified safety lever.
 */
export const getSafetyLever: API.OperationMethod<
  GetSafetyLeverRequest,
  GetSafetyLeverResponse,
  GetSafetyLeverError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74) as any as S.Schema<GetSafetyLeverRequest>,
  output: __S(76) as any as S.Schema<GetSafetyLeverResponse>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSafetyLever",
}));

export type GetTargetAccountConfigurationError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specified target account configuration of the experiment template.
 */
export const getTargetAccountConfiguration: API.OperationMethod<
  GetTargetAccountConfigurationRequest,
  GetTargetAccountConfigurationResponse,
  GetTargetAccountConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77) as any as S.Schema<GetTargetAccountConfigurationRequest>,
  output: __S(40) as any as S.Schema<GetTargetAccountConfigurationResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTargetAccountConfiguration",
}));

export type GetTargetResourceTypeError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specified resource type.
 */
export const getTargetResourceType: API.OperationMethod<
  GetTargetResourceTypeRequest,
  GetTargetResourceTypeResponse,
  GetTargetResourceTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(78) as any as S.Schema<GetTargetResourceTypeRequest>,
  output: __S(82) as any as S.Schema<GetTargetResourceTypeResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTargetResourceType",
}));

export type ListActionsError = ValidationException | CommonErrors;
/**
 * Lists the available FIS actions.
 */
export const listActions: API.PaginatedOperationMethod<
  ListActionsRequest,
  ListActionsResponse,
  ListActionsError,
  Credentials | HttpClient.HttpClient,
  ActionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(83) as any as S.Schema<ListActionsRequest>,
  output: __S(86) as any as S.Schema<ListActionsResponse>,
  errors: [ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListActions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "actions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListExperimentResolvedTargetsError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the resolved targets information of the specified experiment.
 */
export const listExperimentResolvedTargets: API.PaginatedOperationMethod<
  ListExperimentResolvedTargetsRequest,
  ListExperimentResolvedTargetsResponse,
  ListExperimentResolvedTargetsError,
  Credentials | HttpClient.HttpClient,
  ResolvedTarget
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(87) as any as S.Schema<ListExperimentResolvedTargetsRequest>,
  output: __S(90) as any as S.Schema<ListExperimentResolvedTargetsResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExperimentResolvedTargets",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "resolvedTargets",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListExperimentsError = ValidationException | CommonErrors;
/**
 * Lists your experiments.
 */
export const listExperiments: API.PaginatedOperationMethod<
  ListExperimentsRequest,
  ListExperimentsResponse,
  ListExperimentsError,
  Credentials | HttpClient.HttpClient,
  ExperimentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(91) as any as S.Schema<ListExperimentsRequest>,
  output: __S(94) as any as S.Schema<ListExperimentsResponse>,
  errors: [ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExperiments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "experiments",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListExperimentTargetAccountConfigurationsError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the target account configurations of the specified experiment.
 */
export const listExperimentTargetAccountConfigurations: API.OperationMethod<
  ListExperimentTargetAccountConfigurationsRequest,
  ListExperimentTargetAccountConfigurationsResponse,
  ListExperimentTargetAccountConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95) as any as S.Schema<ListExperimentTargetAccountConfigurationsRequest>,
  output: __S(97) as any as S.Schema<ListExperimentTargetAccountConfigurationsResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExperimentTargetAccountConfigurations",
}));

export type ListExperimentTemplatesError = ValidationException | CommonErrors;
/**
 * Lists your experiment templates.
 */
export const listExperimentTemplates: API.PaginatedOperationMethod<
  ListExperimentTemplatesRequest,
  ListExperimentTemplatesResponse,
  ListExperimentTemplatesError,
  Credentials | HttpClient.HttpClient,
  ExperimentTemplateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(98) as any as S.Schema<ListExperimentTemplatesRequest>,
  output: __S(101) as any as S.Schema<ListExperimentTemplatesResponse>,
  errors: [ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExperimentTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "experimentTemplates",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError = CommonErrors;
/**
 * Lists the tags for the specified resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(102) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(103) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTargetAccountConfigurationsError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the target account configurations of the specified experiment template.
 */
export const listTargetAccountConfigurations: API.PaginatedOperationMethod<
  ListTargetAccountConfigurationsRequest,
  ListTargetAccountConfigurationsResponse,
  ListTargetAccountConfigurationsError,
  Credentials | HttpClient.HttpClient,
  TargetAccountConfigurationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(104) as any as S.Schema<ListTargetAccountConfigurationsRequest>,
  output: __S(97) as any as S.Schema<ListTargetAccountConfigurationsResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTargetAccountConfigurations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "targetAccountConfigurations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTargetResourceTypesError = ValidationException | CommonErrors;
/**
 * Lists the target resource types.
 */
export const listTargetResourceTypes: API.PaginatedOperationMethod<
  ListTargetResourceTypesRequest,
  ListTargetResourceTypesResponse,
  ListTargetResourceTypesError,
  Credentials | HttpClient.HttpClient,
  TargetResourceTypeSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(105) as any as S.Schema<ListTargetResourceTypesRequest>,
  output: __S(108) as any as S.Schema<ListTargetResourceTypesResponse>,
  errors: [ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTargetResourceTypes",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "targetResourceTypes",
    pageSize: "maxResults",
  } as const,
})) as any;

export type StartExperimentError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Starts running an experiment from the specified experiment template.
 */
export const startExperiment: API.OperationMethod<
  StartExperimentRequest,
  StartExperimentResponse,
  StartExperimentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(110) as any as S.Schema<StartExperimentRequest>,
  output: __S(71) as any as S.Schema<StartExperimentResponse>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartExperiment",
}));

export type StopExperimentError = ResourceNotFoundException | ValidationException | CommonErrors;
/**
 * Stops the specified experiment.
 */
export const stopExperiment: API.OperationMethod<
  StopExperimentRequest,
  StopExperimentResponse,
  StopExperimentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(111) as any as S.Schema<StopExperimentRequest>,
  output: __S(71) as any as S.Schema<StopExperimentResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopExperiment",
}));

export type TagResourceError = CommonErrors;
/**
 * Applies the specified tags to the specified resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112) as any as S.Schema<TagResourceRequest>,
  output: __S(113) as any as S.Schema<TagResourceResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = CommonErrors;
/**
 * Removes the specified tags from the specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(114) as any as S.Schema<UntagResourceRequest>,
  output: __S(113) as any as S.Schema<UntagResourceResponse>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateExperimentTemplateError =
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified experiment template.
 */
export const updateExperimentTemplate: API.OperationMethod<
  UpdateExperimentTemplateRequest,
  UpdateExperimentTemplateResponse,
  UpdateExperimentTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(119) as any as S.Schema<UpdateExperimentTemplateRequest>,
  output: __S(37) as any as S.Schema<UpdateExperimentTemplateResponse>,
  errors: [ResourceNotFoundException, ServiceQuotaExceededException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateExperimentTemplate",
}));

export type UpdateSafetyLeverStateError =
  | ConflictException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified safety lever state.
 */
export const updateSafetyLeverState: API.OperationMethod<
  UpdateSafetyLeverStateRequest,
  UpdateSafetyLeverStateResponse,
  UpdateSafetyLeverStateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(121) as any as S.Schema<UpdateSafetyLeverStateRequest>,
  output: __S(122) as any as S.Schema<UpdateSafetyLeverStateResponse>,
  errors: [ConflictException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSafetyLeverState",
}));

export type UpdateTargetAccountConfigurationError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the target account configuration for the specified experiment template.
 */
export const updateTargetAccountConfiguration: API.OperationMethod<
  UpdateTargetAccountConfigurationRequest,
  UpdateTargetAccountConfigurationResponse,
  UpdateTargetAccountConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(123) as any as S.Schema<UpdateTargetAccountConfigurationRequest>,
  output: __S(40) as any as S.Schema<UpdateTargetAccountConfigurationResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTargetAccountConfiguration",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ source: S.String, value: S.optional(S.String) })).annotate({
        identifier: "CreateExperimentTemplateStopConditionInput",
      });
    case 1:
      return S.Array(__S(0));
    case 2:
      return S.Array(S.String);
    case 3:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 4:
      return S.suspend(() => S.Struct({ path: S.String, values: __S(2) })).annotate({
        identifier: "ExperimentTemplateTargetInputFilter",
      });
    case 5:
      return S.Array(__S(4));
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceType: S.String,
          resourceArns: S.optional(__S(2)),
          resourceTags: S.optional(__S(3)),
          filters: S.optional(__S(5)),
          selectionMode: S.String,
          parameters: S.optional(__S(6)),
        }),
      ).annotate({
        identifier: "CreateExperimentTemplateTargetInput",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(7).pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          actionId: S.String,
          description: S.optional(S.String),
          parameters: S.optional(__S(6)),
          targets: S.optional(__S(6)),
          startAfter: S.optional(__S(2)),
        }),
      ).annotate({
        identifier: "CreateExperimentTemplateActionInput",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(9).pipe(S.optional));
    case 3:
      return S.suspend(() => S.Struct({ logGroupArn: S.String })).annotate({
        identifier: "ExperimentTemplateCloudWatchLogsLogConfigurationInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ bucketName: S.String, prefix: S.optional(S.String) }),
      ).annotate({
        identifier: "ExperimentTemplateS3LogConfigurationInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          cloudWatchLogsConfiguration: S.optional(__S(11)),
          s3Configuration: S.optional(__S(12)),
          logSchemaVersion: S.Number,
        }),
      ).annotate({
        identifier: "CreateExperimentTemplateLogConfigurationInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          accountTargeting: S.optional(S.String),
          emptyTargetResolutionMode: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateExperimentTemplateExperimentOptionsInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ bucketName: S.optional(S.String), prefix: S.optional(S.String) }),
      ).annotate({
        identifier: "ReportConfigurationS3OutputInput",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ s3Configuration: S.optional(__S(15)) })).annotate({
        identifier: "ExperimentTemplateReportConfigurationOutputsInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ dashboardIdentifier: S.optional(S.String) })).annotate({
        identifier: "ReportConfigurationCloudWatchDashboardInput",
      });
    case 2:
      return S.Array(__S(17));
    case 3:
      return S.suspend(() =>
        S.Struct({
          cloudWatchDashboards: S.optional(__S(18)),
        }),
      ).annotate({
        identifier: "ExperimentTemplateReportConfigurationDataSourcesInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          outputs: S.optional(__S(16)),
          dataSources: S.optional(__S(19)),
          preExperimentDuration: S.optional(S.String),
          postExperimentDuration: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateExperimentTemplateReportConfigurationInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.String.pipe(T.IdempotencyToken()),
          description: S.String,
          stopConditions: __S(1),
          targets: S.optional(__S(8)),
          actions: __S(10),
          roleArn: S.String,
          tags: S.optional(__S(3)),
          logConfiguration: S.optional(__S(13)),
          experimentOptions: S.optional(__S(14)),
          experimentReportConfiguration: S.optional(__S(20)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/experimentTemplates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateExperimentTemplateRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          path: S.optional(S.String),
          values: S.optional(__S(2)),
        }),
      ).annotate({
        identifier: "ExperimentTemplateTargetFilter",
      });
    case 7:
      return S.Array(__S(22));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceType: S.optional(S.String),
          resourceArns: S.optional(__S(2)),
          resourceTags: S.optional(__S(3)),
          filters: S.optional(__S(23)),
          selectionMode: S.optional(S.String),
          parameters: S.optional(__S(6)),
        }),
      ).annotate({ identifier: "ExperimentTemplateTarget" });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ __S(24).pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          actionId: S.optional(S.String),
          description: S.optional(S.String),
          parameters: S.optional(__S(6)),
          targets: S.optional(__S(6)),
          startAfter: S.optional(__S(2)),
        }),
      ).annotate({ identifier: "ExperimentTemplateAction" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(26).pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({ source: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({
        identifier: "ExperimentTemplateStopCondition",
      });
    case 5:
      return S.Array(__S(28));
    case 6:
      return S.suspend(() => S.Struct({ logGroupArn: S.optional(S.String) })).annotate({
        identifier: "ExperimentTemplateCloudWatchLogsLogConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          cloudWatchLogsConfiguration: S.optional(__S(30)),
          s3Configuration: S.optional(__S(15)),
          logSchemaVersion: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ExperimentTemplateLogConfiguration",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ dashboardIdentifier: S.optional(S.String) })).annotate({
        identifier: "ExperimentTemplateReportConfigurationCloudWatchDashboard",
      });
    case 1:
      return S.Array(__S(32));
    case 2:
      return S.suspend(() =>
        S.Struct({
          cloudWatchDashboards: S.optional(__S(33)),
        }),
      ).annotate({
        identifier: "ExperimentTemplateReportConfigurationDataSources",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          outputs: S.optional(__S(16)),
          dataSources: S.optional(__S(34)),
          preExperimentDuration: S.optional(S.String),
          postExperimentDuration: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ExperimentTemplateReportConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          description: S.optional(S.String),
          targets: S.optional(__S(25)),
          actions: S.optional(__S(27)),
          stopConditions: S.optional(__S(29)),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          roleArn: S.optional(S.String),
          tags: S.optional(__S(3)),
          logConfiguration: S.optional(__S(31)),
          experimentOptions: S.optional(__S(14)),
          targetAccountConfigurationsCount: S.optional(S.Number),
          experimentReportConfiguration: S.optional(__S(35)),
        }),
      ).annotate({ identifier: "ExperimentTemplate" });
    case 5:
      return S.suspend(() => S.Struct({ experimentTemplate: S.optional(__S(36)) })).annotate({
        identifier: "CreateExperimentTemplateResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          experimentTemplateId: S.String.pipe(T.HttpLabel("experimentTemplateId")),
          accountId: S.String.pipe(T.HttpLabel("accountId")),
          roleArn: S.String,
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateTargetAccountConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.optional(S.String),
          accountId: S.optional(S.String),
          description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "TargetAccountConfiguration",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ targetAccountConfiguration: S.optional(__S(39)) }),
      ).annotate({
        identifier: "CreateTargetAccountConfigurationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/experimentTemplates/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteExperimentTemplateRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          experimentTemplateId: S.String.pipe(T.HttpLabel("experimentTemplateId")),
          accountId: S.String.pipe(T.HttpLabel("accountId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteTargetAccountConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/actions/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetActionRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ description: S.optional(S.String), required: S.optional(S.Boolean) }),
      ).annotate({ identifier: "ActionParameter" });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ __S(44).pipe(S.optional));
    case 6:
      return S.suspend(() => S.Struct({ resourceType: S.optional(S.String) })).annotate({
        identifier: "ActionTarget",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ __S(46).pipe(S.optional));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          description: S.optional(S.String),
          parameters: S.optional(__S(45)),
          targets: S.optional(__S(47)),
          tags: S.optional(__S(3)),
        }),
      ).annotate({ identifier: "Action" });
    case 1:
      return S.suspend(() => S.Struct({ action: S.optional(__S(48)) })).annotate({
        identifier: "GetActionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/experiments/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetExperimentRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          accountId: S.optional(S.String),
          code: S.optional(S.String),
          location: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExperimentError" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          reason: S.optional(S.String),
          error: S.optional(__S(51)),
        }),
      ).annotate({ identifier: "ExperimentState" });
    case 5:
      return S.suspend(() =>
        S.Struct({ path: S.optional(S.String), values: S.optional(__S(2)) }),
      ).annotate({ identifier: "ExperimentTargetFilter" });
    case 6:
      return S.Array(__S(53));
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceType: S.optional(S.String),
          resourceArns: S.optional(__S(2)),
          resourceTags: S.optional(__S(3)),
          filters: S.optional(__S(54)),
          selectionMode: S.optional(S.String),
          parameters: S.optional(__S(6)),
        }),
      ).annotate({ identifier: "ExperimentTarget" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(55).pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({ status: S.optional(S.String), reason: S.optional(S.String) }),
      ).annotate({ identifier: "ExperimentActionState" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          actionId: S.optional(S.String),
          description: S.optional(S.String),
          parameters: S.optional(__S(6)),
          targets: S.optional(__S(6)),
          startAfter: S.optional(__S(2)),
          state: S.optional(__S(57)),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ExperimentAction" });
    case 3:
      return S.Record(S.String, /*@__PURE__*/ __S(58).pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({ source: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({ identifier: "ExperimentStopCondition" });
    case 5:
      return S.Array(__S(60));
    case 6:
      return S.suspend(() =>
        S.Struct({
          accountTargeting: S.optional(S.String),
          emptyTargetResolutionMode: S.optional(S.String),
          actionsMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExperimentOptions" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          cloudWatchDashboards: S.optional(__S(18)),
        }),
      ).annotate({
        identifier: "ExperimentReportConfigurationDataSources",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          outputs: S.optional(__S(16)),
          dataSources: S.optional(__S(63)),
          preExperimentDuration: S.optional(S.String),
          postExperimentDuration: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ExperimentReportConfiguration",
      });
    case 1:
      return S.suspend(() => S.Struct({ code: S.optional(S.String) })).annotate({
        identifier: "ExperimentReportError",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          status: S.optional(S.String),
          reason: S.optional(S.String),
          error: S.optional(__S(65)),
        }),
      ).annotate({ identifier: "ExperimentReportState" });
    case 3:
      return S.suspend(() =>
        S.Struct({ arn: S.optional(S.String), reportType: S.optional(S.String) }),
      ).annotate({ identifier: "ExperimentReportS3Report" });
    case 4:
      return S.Array(__S(67));
    case 5:
      return S.suspend(() =>
        S.Struct({
          state: S.optional(__S(66)),
          s3Reports: S.optional(__S(68)),
        }),
      ).annotate({ identifier: "ExperimentReport" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          experimentTemplateId: S.optional(S.String),
          roleArn: S.optional(S.String),
          state: S.optional(__S(52)),
          targets: S.optional(__S(56)),
          actions: S.optional(__S(59)),
          stopConditions: S.optional(__S(61)),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(3)),
          logConfiguration: S.optional(__S(31)),
          experimentOptions: S.optional(__S(62)),
          targetAccountConfigurationsCount: S.optional(S.Number),
          experimentReportConfiguration: S.optional(__S(64)),
          experimentReport: S.optional(__S(69)),
        }),
      ).annotate({ identifier: "Experiment" });
    case 7:
      return S.suspend(() => S.Struct({ experiment: S.optional(__S(70)) })).annotate({
        identifier: "GetExperimentResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          experimentId: S.String.pipe(T.HttpLabel("experimentId")),
          accountId: S.String.pipe(T.HttpLabel("accountId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/experiments/{experimentId}/targetAccountConfigurations/{accountId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetExperimentTargetAccountConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/experimentTemplates/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetExperimentTemplateRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/safetyLevers/{id}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSafetyLeverRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          state: S.optional(__S(57)),
        }),
      ).annotate({ identifier: "SafetyLever" });
    case 4:
      return S.suspend(() => S.Struct({ safetyLever: S.optional(__S(75)) })).annotate({
        identifier: "GetSafetyLeverResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          experimentTemplateId: S.String.pipe(T.HttpLabel("experimentTemplateId")),
          accountId: S.String.pipe(T.HttpLabel("accountId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTargetAccountConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceType: S.String.pipe(T.HttpLabel("resourceType")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/targetResourceTypes/{resourceType}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTargetResourceTypeRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ description: S.optional(S.String), required: S.optional(S.Boolean) }),
      ).annotate({
        identifier: "TargetResourceTypeParameter",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ __S(79).pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceType: S.optional(S.String),
          description: S.optional(S.String),
          parameters: S.optional(__S(80)),
        }),
      ).annotate({ identifier: "TargetResourceType" });
    case 2:
      return S.suspend(() => S.Struct({ targetResourceType: S.optional(__S(81)) })).annotate({
        identifier: "GetTargetResourceTypeResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/actions" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListActionsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          description: S.optional(S.String),
          targets: S.optional(__S(47)),
          tags: S.optional(__S(3)),
        }),
      ).annotate({ identifier: "ActionSummary" });
    case 5:
      return S.Array(__S(84));
    case 6:
      return S.suspend(() =>
        S.Struct({ actions: S.optional(__S(85)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListActionsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          experimentId: S.String.pipe(T.HttpLabel("experimentId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          targetName: S.optional(S.String).pipe(T.HttpQuery("targetName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/experiments/{experimentId}/resolvedTargets" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListExperimentResolvedTargetsRequest",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceType: S.optional(S.String),
          targetName: S.optional(S.String),
          targetInformation: S.optional(__S(6)),
        }),
      ).annotate({ identifier: "ResolvedTarget" });
    case 1:
      return S.Array(__S(88));
    case 2:
      return S.suspend(() =>
        S.Struct({
          resolvedTargets: S.optional(__S(89)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListExperimentResolvedTargetsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          experimentTemplateId: S.optional(S.String).pipe(T.HttpQuery("experimentTemplateId")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/experiments" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListExperimentsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          experimentTemplateId: S.optional(S.String),
          state: S.optional(__S(52)),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(3)),
          experimentOptions: S.optional(__S(62)),
        }),
      ).annotate({ identifier: "ExperimentSummary" });
    case 5:
      return S.Array(__S(92));
    case 6:
      return S.suspend(() =>
        S.Struct({
          experiments: S.optional(__S(93)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListExperimentsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          experimentId: S.String.pipe(T.HttpLabel("experimentId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/experiments/{experimentId}/targetAccountConfigurations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListExperimentTargetAccountConfigurationsRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(39));
    case 1:
      return S.suspend(() =>
        S.Struct({
          targetAccountConfigurations: S.optional(__S(96)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListExperimentTargetAccountConfigurationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/experimentTemplates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListExperimentTemplatesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.optional(S.String),
          arn: S.optional(S.String),
          description: S.optional(S.String),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          tags: S.optional(__S(3)),
        }),
      ).annotate({
        identifier: "ExperimentTemplateSummary",
      });
    case 4:
      return S.Array(__S(99));
    case 5:
      return S.suspend(() =>
        S.Struct({
          experimentTemplates: S.optional(__S(100)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListExperimentTemplatesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(3)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          experimentTemplateId: S.String.pipe(T.HttpLabel("experimentTemplateId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTargetAccountConfigurationsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/targetResourceTypes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTargetResourceTypesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceType: S.optional(S.String), description: S.optional(S.String) }),
      ).annotate({
        identifier: "TargetResourceTypeSummary",
      });
    case 3:
      return S.Array(__S(106));
    case 4:
      return S.suspend(() =>
        S.Struct({
          targetResourceTypes: S.optional(__S(107)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTargetResourceTypesResponse",
      });
    case 5:
      return S.suspend(() => S.Struct({ actionsMode: S.optional(S.String) })).annotate({
        identifier: "StartExperimentExperimentOptionsInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.String.pipe(T.IdempotencyToken()),
          experimentTemplateId: S.String,
          experimentOptions: S.optional(__S(109)),
          tags: S.optional(__S(3)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/experiments" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartExperimentRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/experiments/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopExperimentRequest" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: __S(3) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: S.optional(__S(2)).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          actionId: S.optional(S.String),
          description: S.optional(S.String),
          parameters: S.optional(__S(6)),
          targets: S.optional(__S(6)),
          startAfter: S.optional(__S(2)),
        }),
      ).annotate({
        identifier: "UpdateExperimentTemplateActionInputItem",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ __S(115).pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          cloudWatchLogsConfiguration: S.optional(__S(11)),
          s3Configuration: S.optional(__S(12)),
          logSchemaVersion: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "UpdateExperimentTemplateLogConfigurationInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ emptyTargetResolutionMode: S.optional(S.String) }),
      ).annotate({
        identifier: "UpdateExperimentTemplateExperimentOptionsInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          id: S.String.pipe(T.HttpLabel("id")),
          description: S.optional(S.String),
          stopConditions: S.optional(__S(1)),
          targets: S.optional(__S(8)),
          actions: S.optional(__S(116)),
          roleArn: S.optional(S.String),
          logConfiguration: S.optional(__S(117)),
          experimentOptions: S.optional(__S(118)),
          experimentReportConfiguration: S.optional(__S(20)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/experimentTemplates/{id}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateExperimentTemplateRequest",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ status: S.String, reason: S.String })).annotate({
        identifier: "UpdateSafetyLeverStateInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ id: S.String.pipe(T.HttpLabel("id")), state: __S(120) }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/safetyLevers/{id}/state" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSafetyLeverStateRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ safetyLever: S.optional(__S(75)) })).annotate({
        identifier: "UpdateSafetyLeverStateResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          experimentTemplateId: S.String.pipe(T.HttpLabel("experimentTemplateId")),
          accountId: S.String.pipe(T.HttpLabel("accountId")),
          roleArn: S.optional(S.String),
          description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/experimentTemplates/{experimentTemplateId}/targetAccountConfigurations/{accountId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateTargetAccountConfigurationRequest",
      });
  }
}

// Schema table: entry i is built from builder (i >> shift), case (i & mask), on first reach.
function __S(i: number): any {
  return (__s[i] ??= __L.at(__b, i));
}
function __b(i: number): any {
  switch (i >> 3) {
    case 0:
      return __c0(i & 7);
    case 1:
      return __c1(i & 7);
    case 2:
      return __c2(i & 7);
    case 3:
      return __c3(i & 7);
    case 4:
      return __c4(i & 7);
    case 5:
      return __c5(i & 7);
    case 6:
      return __c6(i & 7);
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
  }
}
