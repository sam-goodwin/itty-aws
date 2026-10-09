import * as API from "@distilled.cloud/core/api";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import * as T from "../traits.ts";
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
const CreateExperimentTemplateStopConditionInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ source: S.String, value: S.optional(S.String) }),
).annotate({
  identifier: "CreateExperimentTemplateStopConditionInput",
}) as any as S.Schema<CreateExperimentTemplateStopConditionInput>;
export type CreateExperimentTemplateStopConditionInputList =
  CreateExperimentTemplateStopConditionInput[];
const CreateExperimentTemplateStopConditionInputList = /*@__PURE__*/ S.Array(
  CreateExperimentTemplateStopConditionInput,
);
export type ExperimentTemplateTargetName = string;
export type TargetResourceTypeId = string;
export type ResourceArn = string;
export type ResourceArnList = string[];
const ResourceArnList = /*@__PURE__*/ S.Array(S.String);
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
export type ExperimentTemplateTargetFilterPath = string;
export type ExperimentTemplateTargetFilterValue = string;
export type ExperimentTemplateTargetFilterValues = string[];
const ExperimentTemplateTargetFilterValues =
  ResourceArnList as any as S.Schema<ExperimentTemplateTargetFilterValues>;
export interface ExperimentTemplateTargetInputFilter {
  path: string;
  values: string[];
}
const ExperimentTemplateTargetInputFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ path: S.String, values: ExperimentTemplateTargetFilterValues }),
).annotate({
  identifier: "ExperimentTemplateTargetInputFilter",
}) as any as S.Schema<ExperimentTemplateTargetInputFilter>;
export type ExperimentTemplateTargetFilterInputList = ExperimentTemplateTargetInputFilter[];
const ExperimentTemplateTargetFilterInputList = /*@__PURE__*/ S.Array(
  ExperimentTemplateTargetInputFilter,
);
export type ExperimentTemplateTargetSelectionMode = string;
export type ExperimentTemplateTargetParameterName = string;
export type ExperimentTemplateTargetParameterValue = string;
export type ExperimentTemplateTargetParameterMap = { [key: string]: string | undefined };
const ExperimentTemplateTargetParameterMap = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ S.String.pipe(S.optional),
);
export interface CreateExperimentTemplateTargetInput {
  resourceType: string;
  resourceArns?: string[];
  resourceTags?: { [key: string]: string | undefined };
  filters?: ExperimentTemplateTargetInputFilter[];
  selectionMode: string;
  parameters?: { [key: string]: string | undefined };
}
const CreateExperimentTemplateTargetInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceType: S.String,
    resourceArns: S.optional(ResourceArnList),
    resourceTags: S.optional(TagMap),
    filters: S.optional(ExperimentTemplateTargetFilterInputList),
    selectionMode: S.String,
    parameters: S.optional(ExperimentTemplateTargetParameterMap),
  }),
).annotate({
  identifier: "CreateExperimentTemplateTargetInput",
}) as any as S.Schema<CreateExperimentTemplateTargetInput>;
export type CreateExperimentTemplateTargetInputMap = {
  [key: string]: CreateExperimentTemplateTargetInput | undefined;
};
const CreateExperimentTemplateTargetInputMap = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ CreateExperimentTemplateTargetInput.pipe(S.optional),
);
export type ExperimentTemplateActionName = string;
export type ActionId = string;
export type ExperimentTemplateActionDescription = string;
export type ExperimentTemplateActionParameterName = string;
export type ExperimentTemplateActionParameter = string;
export type ExperimentTemplateActionParameterMap = { [key: string]: string | undefined };
const ExperimentTemplateActionParameterMap =
  ExperimentTemplateTargetParameterMap as any as S.Schema<ExperimentTemplateActionParameterMap>;
export type ExperimentTemplateActionTargetName = string;
export type ExperimentTemplateActionTargetMap = { [key: string]: string | undefined };
const ExperimentTemplateActionTargetMap =
  ExperimentTemplateTargetParameterMap as any as S.Schema<ExperimentTemplateActionTargetMap>;
export type ExperimentTemplateActionStartAfter = string;
export type ExperimentTemplateActionStartAfterList = string[];
const ExperimentTemplateActionStartAfterList =
  ResourceArnList as any as S.Schema<ExperimentTemplateActionStartAfterList>;
export interface CreateExperimentTemplateActionInput {
  actionId: string;
  description?: string;
  parameters?: { [key: string]: string | undefined };
  targets?: { [key: string]: string | undefined };
  startAfter?: string[];
}
const CreateExperimentTemplateActionInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    actionId: S.String,
    description: S.optional(S.String),
    parameters: S.optional(ExperimentTemplateActionParameterMap),
    targets: S.optional(ExperimentTemplateActionTargetMap),
    startAfter: S.optional(ExperimentTemplateActionStartAfterList),
  }),
).annotate({
  identifier: "CreateExperimentTemplateActionInput",
}) as any as S.Schema<CreateExperimentTemplateActionInput>;
export type CreateExperimentTemplateActionInputMap = {
  [key: string]: CreateExperimentTemplateActionInput | undefined;
};
const CreateExperimentTemplateActionInputMap = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ CreateExperimentTemplateActionInput.pipe(S.optional),
);
export type RoleArn = string;
export type CloudWatchLogGroupArn = string;
export interface ExperimentTemplateCloudWatchLogsLogConfigurationInput {
  logGroupArn: string;
}
const ExperimentTemplateCloudWatchLogsLogConfigurationInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ logGroupArn: S.String }),
).annotate({
  identifier: "ExperimentTemplateCloudWatchLogsLogConfigurationInput",
}) as any as S.Schema<ExperimentTemplateCloudWatchLogsLogConfigurationInput>;
export type S3BucketName = string;
export type S3ObjectKey = string;
export interface ExperimentTemplateS3LogConfigurationInput {
  bucketName: string;
  prefix?: string;
}
const ExperimentTemplateS3LogConfigurationInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ bucketName: S.String, prefix: S.optional(S.String) }),
).annotate({
  identifier: "ExperimentTemplateS3LogConfigurationInput",
}) as any as S.Schema<ExperimentTemplateS3LogConfigurationInput>;
export type LogSchemaVersion = number;
export interface CreateExperimentTemplateLogConfigurationInput {
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput;
  s3Configuration?: ExperimentTemplateS3LogConfigurationInput;
  logSchemaVersion: number;
}
const CreateExperimentTemplateLogConfigurationInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    cloudWatchLogsConfiguration: S.optional(ExperimentTemplateCloudWatchLogsLogConfigurationInput),
    s3Configuration: S.optional(ExperimentTemplateS3LogConfigurationInput),
    logSchemaVersion: S.Number,
  }),
).annotate({
  identifier: "CreateExperimentTemplateLogConfigurationInput",
}) as any as S.Schema<CreateExperimentTemplateLogConfigurationInput>;
export type AccountTargeting = "single-account" | "multi-account" | (string & {});
const AccountTargeting = S.String;

export type EmptyTargetResolutionMode = "fail" | "skip" | (string & {});
const EmptyTargetResolutionMode = S.String;

export interface CreateExperimentTemplateExperimentOptionsInput {
  accountTargeting?: AccountTargeting;
  emptyTargetResolutionMode?: EmptyTargetResolutionMode;
}
const CreateExperimentTemplateExperimentOptionsInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    accountTargeting: S.optional(AccountTargeting),
    emptyTargetResolutionMode: S.optional(EmptyTargetResolutionMode),
  }),
).annotate({
  identifier: "CreateExperimentTemplateExperimentOptionsInput",
}) as any as S.Schema<CreateExperimentTemplateExperimentOptionsInput>;
export type ReportConfigurationS3OutputPrefix = string;
export interface ReportConfigurationS3OutputInput {
  bucketName?: string;
  prefix?: string;
}
const ReportConfigurationS3OutputInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ bucketName: S.optional(S.String), prefix: S.optional(S.String) }),
).annotate({
  identifier: "ReportConfigurationS3OutputInput",
}) as any as S.Schema<ReportConfigurationS3OutputInput>;
export interface ExperimentTemplateReportConfigurationOutputsInput {
  s3Configuration?: ReportConfigurationS3OutputInput;
}
const ExperimentTemplateReportConfigurationOutputsInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ s3Configuration: S.optional(ReportConfigurationS3OutputInput) }),
).annotate({
  identifier: "ExperimentTemplateReportConfigurationOutputsInput",
}) as any as S.Schema<ExperimentTemplateReportConfigurationOutputsInput>;
export type ReportConfigurationCloudWatchDashboardIdentifier = string;
export interface ReportConfigurationCloudWatchDashboardInput {
  dashboardIdentifier?: string;
}
const ReportConfigurationCloudWatchDashboardInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ dashboardIdentifier: S.optional(S.String) }),
).annotate({
  identifier: "ReportConfigurationCloudWatchDashboardInput",
}) as any as S.Schema<ReportConfigurationCloudWatchDashboardInput>;
export type ReportConfigurationCloudWatchDashboardInputList =
  ReportConfigurationCloudWatchDashboardInput[];
const ReportConfigurationCloudWatchDashboardInputList = /*@__PURE__*/ S.Array(
  ReportConfigurationCloudWatchDashboardInput,
);
export interface ExperimentTemplateReportConfigurationDataSourcesInput {
  cloudWatchDashboards?: ReportConfigurationCloudWatchDashboardInput[];
}
const ExperimentTemplateReportConfigurationDataSourcesInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ cloudWatchDashboards: S.optional(ReportConfigurationCloudWatchDashboardInputList) }),
).annotate({
  identifier: "ExperimentTemplateReportConfigurationDataSourcesInput",
}) as any as S.Schema<ExperimentTemplateReportConfigurationDataSourcesInput>;
export type ReportConfigurationDuration = string;
export interface CreateExperimentTemplateReportConfigurationInput {
  outputs?: ExperimentTemplateReportConfigurationOutputsInput;
  dataSources?: ExperimentTemplateReportConfigurationDataSourcesInput;
  preExperimentDuration?: string;
  postExperimentDuration?: string;
}
const CreateExperimentTemplateReportConfigurationInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    outputs: S.optional(ExperimentTemplateReportConfigurationOutputsInput),
    dataSources: S.optional(ExperimentTemplateReportConfigurationDataSourcesInput),
    preExperimentDuration: S.optional(S.String),
    postExperimentDuration: S.optional(S.String),
  }),
).annotate({
  identifier: "CreateExperimentTemplateReportConfigurationInput",
}) as any as S.Schema<CreateExperimentTemplateReportConfigurationInput>;
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
const CreateExperimentTemplateRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientToken: S.String.pipe(T.IdempotencyToken()),
    description: S.String,
    stopConditions: CreateExperimentTemplateStopConditionInputList,
    targets: S.optional(CreateExperimentTemplateTargetInputMap),
    actions: CreateExperimentTemplateActionInputMap,
    roleArn: S.String,
    tags: S.optional(TagMap),
    logConfiguration: S.optional(CreateExperimentTemplateLogConfigurationInput),
    experimentOptions: S.optional(CreateExperimentTemplateExperimentOptionsInput),
    experimentReportConfiguration: S.optional(CreateExperimentTemplateReportConfigurationInput),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/experimentTemplates" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "CreateExperimentTemplateRequest",
}) as any as S.Schema<CreateExperimentTemplateRequest>;
export type ExperimentTemplateId = string;
export interface ExperimentTemplateTargetFilter {
  path?: string;
  values?: string[];
}
const ExperimentTemplateTargetFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    path: S.optional(S.String),
    values: S.optional(ExperimentTemplateTargetFilterValues),
  }),
).annotate({
  identifier: "ExperimentTemplateTargetFilter",
}) as any as S.Schema<ExperimentTemplateTargetFilter>;
export type ExperimentTemplateTargetFilterList = ExperimentTemplateTargetFilter[];
const ExperimentTemplateTargetFilterList = /*@__PURE__*/ S.Array(ExperimentTemplateTargetFilter);
export interface ExperimentTemplateTarget {
  resourceType?: string;
  resourceArns?: string[];
  resourceTags?: { [key: string]: string | undefined };
  filters?: ExperimentTemplateTargetFilter[];
  selectionMode?: string;
  parameters?: { [key: string]: string | undefined };
}
const ExperimentTemplateTarget = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceType: S.optional(S.String),
    resourceArns: S.optional(ResourceArnList),
    resourceTags: S.optional(TagMap),
    filters: S.optional(ExperimentTemplateTargetFilterList),
    selectionMode: S.optional(S.String),
    parameters: S.optional(ExperimentTemplateTargetParameterMap),
  }),
).annotate({ identifier: "ExperimentTemplateTarget" }) as any as S.Schema<ExperimentTemplateTarget>;
export type ExperimentTemplateTargetMap = { [key: string]: ExperimentTemplateTarget | undefined };
const ExperimentTemplateTargetMap = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ ExperimentTemplateTarget.pipe(S.optional),
);
export interface ExperimentTemplateAction {
  actionId?: string;
  description?: string;
  parameters?: { [key: string]: string | undefined };
  targets?: { [key: string]: string | undefined };
  startAfter?: string[];
}
const ExperimentTemplateAction = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    actionId: S.optional(S.String),
    description: S.optional(S.String),
    parameters: S.optional(ExperimentTemplateActionParameterMap),
    targets: S.optional(ExperimentTemplateActionTargetMap),
    startAfter: S.optional(ExperimentTemplateActionStartAfterList),
  }),
).annotate({ identifier: "ExperimentTemplateAction" }) as any as S.Schema<ExperimentTemplateAction>;
export type ExperimentTemplateActionMap = { [key: string]: ExperimentTemplateAction | undefined };
const ExperimentTemplateActionMap = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ ExperimentTemplateAction.pipe(S.optional),
);
export interface ExperimentTemplateStopCondition {
  source?: string;
  value?: string;
}
const ExperimentTemplateStopCondition = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ source: S.optional(S.String), value: S.optional(S.String) }),
).annotate({
  identifier: "ExperimentTemplateStopCondition",
}) as any as S.Schema<ExperimentTemplateStopCondition>;
export type ExperimentTemplateStopConditionList = ExperimentTemplateStopCondition[];
const ExperimentTemplateStopConditionList = /*@__PURE__*/ S.Array(ExperimentTemplateStopCondition);
export type CreationTime = Date;
export type LastUpdateTime = Date;
export interface ExperimentTemplateCloudWatchLogsLogConfiguration {
  logGroupArn?: string;
}
const ExperimentTemplateCloudWatchLogsLogConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ logGroupArn: S.optional(S.String) }),
).annotate({
  identifier: "ExperimentTemplateCloudWatchLogsLogConfiguration",
}) as any as S.Schema<ExperimentTemplateCloudWatchLogsLogConfiguration>;
export interface ExperimentTemplateS3LogConfiguration {
  bucketName?: string;
  prefix?: string;
}
const ExperimentTemplateS3LogConfiguration =
  ReportConfigurationS3OutputInput as any as S.Schema<ExperimentTemplateS3LogConfiguration>;
export interface ExperimentTemplateLogConfiguration {
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfiguration;
  s3Configuration?: ExperimentTemplateS3LogConfiguration;
  logSchemaVersion?: number;
}
const ExperimentTemplateLogConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    cloudWatchLogsConfiguration: S.optional(ExperimentTemplateCloudWatchLogsLogConfiguration),
    s3Configuration: S.optional(ExperimentTemplateS3LogConfiguration),
    logSchemaVersion: S.optional(S.Number),
  }),
).annotate({
  identifier: "ExperimentTemplateLogConfiguration",
}) as any as S.Schema<ExperimentTemplateLogConfiguration>;
export interface ExperimentTemplateExperimentOptions {
  accountTargeting?: AccountTargeting;
  emptyTargetResolutionMode?: EmptyTargetResolutionMode;
}
const ExperimentTemplateExperimentOptions =
  CreateExperimentTemplateExperimentOptionsInput as any as S.Schema<ExperimentTemplateExperimentOptions>;
export type TargetAccountConfigurationsCount = number;
export interface ReportConfigurationS3Output {
  bucketName?: string;
  prefix?: string;
}
export interface ExperimentTemplateReportConfigurationOutputs {
  s3Configuration?: ReportConfigurationS3Output;
}
const ExperimentTemplateReportConfigurationOutputs =
  ExperimentTemplateReportConfigurationOutputsInput as any as S.Schema<ExperimentTemplateReportConfigurationOutputs>;
export interface ExperimentTemplateReportConfigurationCloudWatchDashboard {
  dashboardIdentifier?: string;
}
const ExperimentTemplateReportConfigurationCloudWatchDashboard = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ dashboardIdentifier: S.optional(S.String) }),
).annotate({
  identifier: "ExperimentTemplateReportConfigurationCloudWatchDashboard",
}) as any as S.Schema<ExperimentTemplateReportConfigurationCloudWatchDashboard>;
export type ExperimentTemplateReportConfigurationCloudWatchDashboardList =
  ExperimentTemplateReportConfigurationCloudWatchDashboard[];
const ExperimentTemplateReportConfigurationCloudWatchDashboardList = /*@__PURE__*/ S.Array(
  ExperimentTemplateReportConfigurationCloudWatchDashboard,
);
export interface ExperimentTemplateReportConfigurationDataSources {
  cloudWatchDashboards?: ExperimentTemplateReportConfigurationCloudWatchDashboard[];
}
const ExperimentTemplateReportConfigurationDataSources = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    cloudWatchDashboards: S.optional(ExperimentTemplateReportConfigurationCloudWatchDashboardList),
  }),
).annotate({
  identifier: "ExperimentTemplateReportConfigurationDataSources",
}) as any as S.Schema<ExperimentTemplateReportConfigurationDataSources>;
export interface ExperimentTemplateReportConfiguration {
  outputs?: ExperimentTemplateReportConfigurationOutputs;
  dataSources?: ExperimentTemplateReportConfigurationDataSources;
  preExperimentDuration?: string;
  postExperimentDuration?: string;
}
const ExperimentTemplateReportConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    outputs: S.optional(ExperimentTemplateReportConfigurationOutputs),
    dataSources: S.optional(ExperimentTemplateReportConfigurationDataSources),
    preExperimentDuration: S.optional(S.String),
    postExperimentDuration: S.optional(S.String),
  }),
).annotate({
  identifier: "ExperimentTemplateReportConfiguration",
}) as any as S.Schema<ExperimentTemplateReportConfiguration>;
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
const ExperimentTemplate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    arn: S.optional(S.String),
    description: S.optional(S.String),
    targets: S.optional(ExperimentTemplateTargetMap),
    actions: S.optional(ExperimentTemplateActionMap),
    stopConditions: S.optional(ExperimentTemplateStopConditionList),
    creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    lastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    roleArn: S.optional(S.String),
    tags: S.optional(TagMap),
    logConfiguration: S.optional(ExperimentTemplateLogConfiguration),
    experimentOptions: S.optional(ExperimentTemplateExperimentOptions),
    targetAccountConfigurationsCount: S.optional(S.Number),
    experimentReportConfiguration: S.optional(ExperimentTemplateReportConfiguration),
  }),
).annotate({ identifier: "ExperimentTemplate" }) as any as S.Schema<ExperimentTemplate>;
export interface CreateExperimentTemplateResponse {
  experimentTemplate?: ExperimentTemplate;
}
const CreateExperimentTemplateResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ experimentTemplate: S.optional(ExperimentTemplate) }),
).annotate({
  identifier: "CreateExperimentTemplateResponse",
}) as any as S.Schema<CreateExperimentTemplateResponse>;
export type TargetAccountId = string;
export type TargetAccountConfigurationDescription = string;
export interface CreateTargetAccountConfigurationRequest {
  clientToken?: string;
  experimentTemplateId: string;
  accountId: string;
  roleArn: string;
  description?: string;
}
const CreateTargetAccountConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
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
}) as any as S.Schema<CreateTargetAccountConfigurationRequest>;
export interface TargetAccountConfiguration {
  roleArn?: string;
  accountId?: string;
  description?: string;
}
const TargetAccountConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    roleArn: S.optional(S.String),
    accountId: S.optional(S.String),
    description: S.optional(S.String),
  }),
).annotate({
  identifier: "TargetAccountConfiguration",
}) as any as S.Schema<TargetAccountConfiguration>;
export interface CreateTargetAccountConfigurationResponse {
  targetAccountConfiguration?: TargetAccountConfiguration;
}
const CreateTargetAccountConfigurationResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ targetAccountConfiguration: S.optional(TargetAccountConfiguration) }),
).annotate({
  identifier: "CreateTargetAccountConfigurationResponse",
}) as any as S.Schema<CreateTargetAccountConfigurationResponse>;
export interface DeleteExperimentTemplateRequest {
  id: string;
}
const DeleteExperimentTemplateRequest = /*@__PURE__*/ S.suspend(() =>
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
}) as any as S.Schema<DeleteExperimentTemplateRequest>;
export interface DeleteExperimentTemplateResponse {
  experimentTemplate?: ExperimentTemplate;
}
const DeleteExperimentTemplateResponse =
  CreateExperimentTemplateResponse as any as S.Schema<DeleteExperimentTemplateResponse>;
export interface DeleteTargetAccountConfigurationRequest {
  experimentTemplateId: string;
  accountId: string;
}
const DeleteTargetAccountConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
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
}) as any as S.Schema<DeleteTargetAccountConfigurationRequest>;
export interface DeleteTargetAccountConfigurationResponse {
  targetAccountConfiguration?: TargetAccountConfiguration;
}
const DeleteTargetAccountConfigurationResponse =
  CreateTargetAccountConfigurationResponse as any as S.Schema<DeleteTargetAccountConfigurationResponse>;
export interface GetActionRequest {
  id: string;
}
const GetActionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
    T.all(T.Http({ method: "GET", uri: "/actions/{id}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetActionRequest" }) as any as S.Schema<GetActionRequest>;
export type ActionDescription = string;
export type ActionParameterName = string;
export type ActionParameterDescription = string;
export type ActionParameterRequired = boolean;
export interface ActionParameter {
  description?: string;
  required?: boolean;
}
const ActionParameter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ description: S.optional(S.String), required: S.optional(S.Boolean) }),
).annotate({ identifier: "ActionParameter" }) as any as S.Schema<ActionParameter>;
export type ActionParameterMap = { [key: string]: ActionParameter | undefined };
const ActionParameterMap = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ ActionParameter.pipe(S.optional),
);
export type ActionTargetName = string;
export interface ActionTarget {
  resourceType?: string;
}
const ActionTarget = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceType: S.optional(S.String) }),
).annotate({ identifier: "ActionTarget" }) as any as S.Schema<ActionTarget>;
export type ActionTargetMap = { [key: string]: ActionTarget | undefined };
const ActionTargetMap = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ ActionTarget.pipe(S.optional),
);
export interface Action {
  id?: string;
  arn?: string;
  description?: string;
  parameters?: { [key: string]: ActionParameter | undefined };
  targets?: { [key: string]: ActionTarget | undefined };
  tags?: { [key: string]: string | undefined };
}
const Action = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    arn: S.optional(S.String),
    description: S.optional(S.String),
    parameters: S.optional(ActionParameterMap),
    targets: S.optional(ActionTargetMap),
    tags: S.optional(TagMap),
  }),
).annotate({ identifier: "Action" }) as any as S.Schema<Action>;
export interface GetActionResponse {
  action?: Action;
}
const GetActionResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ action: S.optional(Action) }),
).annotate({ identifier: "GetActionResponse" }) as any as S.Schema<GetActionResponse>;
export type ExperimentId = string;
export interface GetExperimentRequest {
  id: string;
}
const GetExperimentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
    T.all(T.Http({ method: "GET", uri: "/experiments/{id}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetExperimentRequest" }) as any as S.Schema<GetExperimentRequest>;
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
const ExperimentStatus = S.String;

export type ExperimentStatusReason = string;
export type ExperimentErrorAccountId = string;
export type ExperimentErrorCode = string;
export type ExperimentErrorLocation = string;
export interface ExperimentError {
  accountId?: string;
  code?: string;
  location?: string;
}
const ExperimentError = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    accountId: S.optional(S.String),
    code: S.optional(S.String),
    location: S.optional(S.String),
  }),
).annotate({ identifier: "ExperimentError" }) as any as S.Schema<ExperimentError>;
export interface ExperimentState {
  status?: ExperimentStatus;
  reason?: string;
  error?: ExperimentError;
}
const ExperimentState = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    status: S.optional(ExperimentStatus),
    reason: S.optional(S.String),
    error: S.optional(ExperimentError),
  }),
).annotate({ identifier: "ExperimentState" }) as any as S.Schema<ExperimentState>;
export type ExperimentTargetName = string;
export type ExperimentTargetFilterPath = string;
export type ExperimentTargetFilterValue = string;
export type ExperimentTargetFilterValues = string[];
const ExperimentTargetFilterValues =
  ResourceArnList as any as S.Schema<ExperimentTargetFilterValues>;
export interface ExperimentTargetFilter {
  path?: string;
  values?: string[];
}
const ExperimentTargetFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ path: S.optional(S.String), values: S.optional(ExperimentTargetFilterValues) }),
).annotate({ identifier: "ExperimentTargetFilter" }) as any as S.Schema<ExperimentTargetFilter>;
export type ExperimentTargetFilterList = ExperimentTargetFilter[];
const ExperimentTargetFilterList = /*@__PURE__*/ S.Array(ExperimentTargetFilter);
export type ExperimentTargetSelectionMode = string;
export type ExperimentTargetParameterName = string;
export type ExperimentTargetParameterValue = string;
export type ExperimentTargetParameterMap = { [key: string]: string | undefined };
const ExperimentTargetParameterMap =
  ExperimentTemplateTargetParameterMap as any as S.Schema<ExperimentTargetParameterMap>;
export interface ExperimentTarget {
  resourceType?: string;
  resourceArns?: string[];
  resourceTags?: { [key: string]: string | undefined };
  filters?: ExperimentTargetFilter[];
  selectionMode?: string;
  parameters?: { [key: string]: string | undefined };
}
const ExperimentTarget = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceType: S.optional(S.String),
    resourceArns: S.optional(ResourceArnList),
    resourceTags: S.optional(TagMap),
    filters: S.optional(ExperimentTargetFilterList),
    selectionMode: S.optional(S.String),
    parameters: S.optional(ExperimentTargetParameterMap),
  }),
).annotate({ identifier: "ExperimentTarget" }) as any as S.Schema<ExperimentTarget>;
export type ExperimentTargetMap = { [key: string]: ExperimentTarget | undefined };
const ExperimentTargetMap = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ ExperimentTarget.pipe(S.optional),
);
export type ExperimentActionName = string;
export type ExperimentActionDescription = string;
export type ExperimentActionParameterName = string;
export type ExperimentActionParameter = string;
export type ExperimentActionParameterMap = { [key: string]: string | undefined };
const ExperimentActionParameterMap =
  ExperimentTemplateTargetParameterMap as any as S.Schema<ExperimentActionParameterMap>;
export type ExperimentActionTargetName = string;
export type ExperimentActionTargetMap = { [key: string]: string | undefined };
const ExperimentActionTargetMap =
  ExperimentTemplateTargetParameterMap as any as S.Schema<ExperimentActionTargetMap>;
export type ExperimentActionStartAfter = string;
export type ExperimentActionStartAfterList = string[];
const ExperimentActionStartAfterList =
  ResourceArnList as any as S.Schema<ExperimentActionStartAfterList>;
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
const ExperimentActionStatus = S.String;

export type ExperimentActionStatusReason = string;
export interface ExperimentActionState {
  status?: ExperimentActionStatus;
  reason?: string;
}
const ExperimentActionState = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ status: S.optional(ExperimentActionStatus), reason: S.optional(S.String) }),
).annotate({ identifier: "ExperimentActionState" }) as any as S.Schema<ExperimentActionState>;
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
const ExperimentAction = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    actionId: S.optional(S.String),
    description: S.optional(S.String),
    parameters: S.optional(ExperimentActionParameterMap),
    targets: S.optional(ExperimentActionTargetMap),
    startAfter: S.optional(ExperimentActionStartAfterList),
    state: S.optional(ExperimentActionState),
    startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
  }),
).annotate({ identifier: "ExperimentAction" }) as any as S.Schema<ExperimentAction>;
export type ExperimentActionMap = { [key: string]: ExperimentAction | undefined };
const ExperimentActionMap = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ ExperimentAction.pipe(S.optional),
);
export interface ExperimentStopCondition {
  source?: string;
  value?: string;
}
const ExperimentStopCondition = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ source: S.optional(S.String), value: S.optional(S.String) }),
).annotate({ identifier: "ExperimentStopCondition" }) as any as S.Schema<ExperimentStopCondition>;
export type ExperimentStopConditionList = ExperimentStopCondition[];
const ExperimentStopConditionList = /*@__PURE__*/ S.Array(ExperimentStopCondition);
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
const ExperimentLogConfiguration =
  ExperimentTemplateLogConfiguration as any as S.Schema<ExperimentLogConfiguration>;
export type ActionsMode = "skip-all" | "run-all" | (string & {});
const ActionsMode = S.String;

export interface ExperimentOptions {
  accountTargeting?: AccountTargeting;
  emptyTargetResolutionMode?: EmptyTargetResolutionMode;
  actionsMode?: ActionsMode;
}
const ExperimentOptions = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    accountTargeting: S.optional(AccountTargeting),
    emptyTargetResolutionMode: S.optional(EmptyTargetResolutionMode),
    actionsMode: S.optional(ActionsMode),
  }),
).annotate({ identifier: "ExperimentOptions" }) as any as S.Schema<ExperimentOptions>;
export interface ExperimentReportConfigurationOutputsS3Configuration {
  bucketName?: string;
  prefix?: string;
}
export interface ExperimentReportConfigurationOutputs {
  s3Configuration?: ExperimentReportConfigurationOutputsS3Configuration;
}
const ExperimentReportConfigurationOutputs =
  ExperimentTemplateReportConfigurationOutputsInput as any as S.Schema<ExperimentReportConfigurationOutputs>;
export interface ExperimentReportConfigurationCloudWatchDashboard {
  dashboardIdentifier?: string;
}
export type ExperimentReportConfigurationCloudWatchDashboardList =
  ExperimentReportConfigurationCloudWatchDashboard[];
const ExperimentReportConfigurationCloudWatchDashboardList =
  ReportConfigurationCloudWatchDashboardInputList as any as S.Schema<ExperimentReportConfigurationCloudWatchDashboardList>;
export interface ExperimentReportConfigurationDataSources {
  cloudWatchDashboards?: ExperimentReportConfigurationCloudWatchDashboard[];
}
const ExperimentReportConfigurationDataSources = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    cloudWatchDashboards: S.optional(ExperimentReportConfigurationCloudWatchDashboardList),
  }),
).annotate({
  identifier: "ExperimentReportConfigurationDataSources",
}) as any as S.Schema<ExperimentReportConfigurationDataSources>;
export interface ExperimentReportConfiguration {
  outputs?: ExperimentReportConfigurationOutputs;
  dataSources?: ExperimentReportConfigurationDataSources;
  preExperimentDuration?: string;
  postExperimentDuration?: string;
}
const ExperimentReportConfiguration = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    outputs: S.optional(ExperimentReportConfigurationOutputs),
    dataSources: S.optional(ExperimentReportConfigurationDataSources),
    preExperimentDuration: S.optional(S.String),
    postExperimentDuration: S.optional(S.String),
  }),
).annotate({
  identifier: "ExperimentReportConfiguration",
}) as any as S.Schema<ExperimentReportConfiguration>;
export type ExperimentReportStatus =
  | "pending"
  | "running"
  | "completed"
  | "cancelled"
  | "failed"
  | (string & {});
const ExperimentReportStatus = S.String;

export type ExperimentReportReason = string;
export type ExperimentReportErrorCode = string;
export interface ExperimentReportError {
  code?: string;
}
const ExperimentReportError = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ code: S.optional(S.String) }),
).annotate({ identifier: "ExperimentReportError" }) as any as S.Schema<ExperimentReportError>;
export interface ExperimentReportState {
  status?: ExperimentReportStatus;
  reason?: string;
  error?: ExperimentReportError;
}
const ExperimentReportState = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    status: S.optional(ExperimentReportStatus),
    reason: S.optional(S.String),
    error: S.optional(ExperimentReportError),
  }),
).annotate({ identifier: "ExperimentReportState" }) as any as S.Schema<ExperimentReportState>;
export type ExperimentReportS3ReportArn = string;
export type ExperimentReportS3ReportType = string;
export interface ExperimentReportS3Report {
  arn?: string;
  reportType?: string;
}
const ExperimentReportS3Report = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ arn: S.optional(S.String), reportType: S.optional(S.String) }),
).annotate({ identifier: "ExperimentReportS3Report" }) as any as S.Schema<ExperimentReportS3Report>;
export type ExperimentReportS3ReportList = ExperimentReportS3Report[];
const ExperimentReportS3ReportList = /*@__PURE__*/ S.Array(ExperimentReportS3Report);
export interface ExperimentReport {
  state?: ExperimentReportState;
  s3Reports?: ExperimentReportS3Report[];
}
const ExperimentReport = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    state: S.optional(ExperimentReportState),
    s3Reports: S.optional(ExperimentReportS3ReportList),
  }),
).annotate({ identifier: "ExperimentReport" }) as any as S.Schema<ExperimentReport>;
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
const Experiment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    arn: S.optional(S.String),
    experimentTemplateId: S.optional(S.String),
    roleArn: S.optional(S.String),
    state: S.optional(ExperimentState),
    targets: S.optional(ExperimentTargetMap),
    actions: S.optional(ExperimentActionMap),
    stopConditions: S.optional(ExperimentStopConditionList),
    creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    tags: S.optional(TagMap),
    logConfiguration: S.optional(ExperimentLogConfiguration),
    experimentOptions: S.optional(ExperimentOptions),
    targetAccountConfigurationsCount: S.optional(S.Number),
    experimentReportConfiguration: S.optional(ExperimentReportConfiguration),
    experimentReport: S.optional(ExperimentReport),
  }),
).annotate({ identifier: "Experiment" }) as any as S.Schema<Experiment>;
export interface GetExperimentResponse {
  experiment?: Experiment;
}
const GetExperimentResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ experiment: S.optional(Experiment) }),
).annotate({ identifier: "GetExperimentResponse" }) as any as S.Schema<GetExperimentResponse>;
export interface GetExperimentTargetAccountConfigurationRequest {
  experimentId: string;
  accountId: string;
}
const GetExperimentTargetAccountConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
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
}) as any as S.Schema<GetExperimentTargetAccountConfigurationRequest>;
export interface ExperimentTargetAccountConfiguration {
  roleArn?: string;
  accountId?: string;
  description?: string;
}
export interface GetExperimentTargetAccountConfigurationResponse {
  targetAccountConfiguration?: ExperimentTargetAccountConfiguration;
}
const GetExperimentTargetAccountConfigurationResponse =
  CreateTargetAccountConfigurationResponse as any as S.Schema<GetExperimentTargetAccountConfigurationResponse>;
export interface GetExperimentTemplateRequest {
  id: string;
}
const GetExperimentTemplateRequest = /*@__PURE__*/ S.suspend(() =>
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
}) as any as S.Schema<GetExperimentTemplateRequest>;
export interface GetExperimentTemplateResponse {
  experimentTemplate?: ExperimentTemplate;
}
const GetExperimentTemplateResponse =
  CreateExperimentTemplateResponse as any as S.Schema<GetExperimentTemplateResponse>;
export type SafetyLeverId = string;
export interface GetSafetyLeverRequest {
  id: string;
}
const GetSafetyLeverRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
    T.all(T.Http({ method: "GET", uri: "/safetyLevers/{id}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "GetSafetyLeverRequest" }) as any as S.Schema<GetSafetyLeverRequest>;
export type SafetyLeverStatus = "disengaged" | "engaged" | "engaging" | (string & {});
export type SafetyLeverStatusReason = string;
export interface SafetyLeverState {
  status?: SafetyLeverStatus;
  reason?: string;
}
const SafetyLeverState = ExperimentActionState as any as S.Schema<SafetyLeverState>;
export interface SafetyLever {
  id?: string;
  arn?: string;
  state?: SafetyLeverState;
}
const SafetyLever = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    arn: S.optional(S.String),
    state: S.optional(SafetyLeverState),
  }),
).annotate({ identifier: "SafetyLever" }) as any as S.Schema<SafetyLever>;
export interface GetSafetyLeverResponse {
  safetyLever?: SafetyLever;
}
const GetSafetyLeverResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ safetyLever: S.optional(SafetyLever) }),
).annotate({ identifier: "GetSafetyLeverResponse" }) as any as S.Schema<GetSafetyLeverResponse>;
export interface GetTargetAccountConfigurationRequest {
  experimentTemplateId: string;
  accountId: string;
}
const GetTargetAccountConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
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
}) as any as S.Schema<GetTargetAccountConfigurationRequest>;
export interface GetTargetAccountConfigurationResponse {
  targetAccountConfiguration?: TargetAccountConfiguration;
}
const GetTargetAccountConfigurationResponse =
  CreateTargetAccountConfigurationResponse as any as S.Schema<GetTargetAccountConfigurationResponse>;
export interface GetTargetResourceTypeRequest {
  resourceType: string;
}
const GetTargetResourceTypeRequest = /*@__PURE__*/ S.suspend(() =>
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
}) as any as S.Schema<GetTargetResourceTypeRequest>;
export type TargetResourceTypeDescription = string;
export type TargetResourceTypeParameterName = string;
export type TargetResourceTypeParameterDescription = string;
export type TargetResourceTypeParameterRequired = boolean;
export interface TargetResourceTypeParameter {
  description?: string;
  required?: boolean;
}
const TargetResourceTypeParameter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ description: S.optional(S.String), required: S.optional(S.Boolean) }),
).annotate({
  identifier: "TargetResourceTypeParameter",
}) as any as S.Schema<TargetResourceTypeParameter>;
export type TargetResourceTypeParameterMap = {
  [key: string]: TargetResourceTypeParameter | undefined;
};
const TargetResourceTypeParameterMap = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ TargetResourceTypeParameter.pipe(S.optional),
);
export interface TargetResourceType {
  resourceType?: string;
  description?: string;
  parameters?: { [key: string]: TargetResourceTypeParameter | undefined };
}
const TargetResourceType = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceType: S.optional(S.String),
    description: S.optional(S.String),
    parameters: S.optional(TargetResourceTypeParameterMap),
  }),
).annotate({ identifier: "TargetResourceType" }) as any as S.Schema<TargetResourceType>;
export interface GetTargetResourceTypeResponse {
  targetResourceType?: TargetResourceType;
}
const GetTargetResourceTypeResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ targetResourceType: S.optional(TargetResourceType) }),
).annotate({
  identifier: "GetTargetResourceTypeResponse",
}) as any as S.Schema<GetTargetResourceTypeResponse>;
export type ListActionsMaxResults = number;
export type NextToken = string;
export interface ListActionsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListActionsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(T.all(T.Http({ method: "GET", uri: "/actions" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListActionsRequest" }) as any as S.Schema<ListActionsRequest>;
export interface ActionSummary {
  id?: string;
  arn?: string;
  description?: string;
  targets?: { [key: string]: ActionTarget | undefined };
  tags?: { [key: string]: string | undefined };
}
const ActionSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    arn: S.optional(S.String),
    description: S.optional(S.String),
    targets: S.optional(ActionTargetMap),
    tags: S.optional(TagMap),
  }),
).annotate({ identifier: "ActionSummary" }) as any as S.Schema<ActionSummary>;
export type ActionSummaryList = ActionSummary[];
const ActionSummaryList = /*@__PURE__*/ S.Array(ActionSummary);
export interface ListActionsResponse {
  actions?: ActionSummary[];
  nextToken?: string;
}
const ListActionsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ actions: S.optional(ActionSummaryList), nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListActionsResponse" }) as any as S.Schema<ListActionsResponse>;
export type ListExperimentResolvedTargetsMaxResults = number;
export type TargetName = string;
export interface ListExperimentResolvedTargetsRequest {
  experimentId: string;
  maxResults?: number;
  nextToken?: string;
  targetName?: string;
}
const ListExperimentResolvedTargetsRequest = /*@__PURE__*/ S.suspend(() =>
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
}) as any as S.Schema<ListExperimentResolvedTargetsRequest>;
export type TargetInformationKey = string;
export type TargetInformationValue = string;
export type TargetInformationMap = { [key: string]: string | undefined };
const TargetInformationMap =
  ExperimentTemplateTargetParameterMap as any as S.Schema<TargetInformationMap>;
export interface ResolvedTarget {
  resourceType?: string;
  targetName?: string;
  targetInformation?: { [key: string]: string | undefined };
}
const ResolvedTarget = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceType: S.optional(S.String),
    targetName: S.optional(S.String),
    targetInformation: S.optional(TargetInformationMap),
  }),
).annotate({ identifier: "ResolvedTarget" }) as any as S.Schema<ResolvedTarget>;
export type ResolvedTargetList = ResolvedTarget[];
const ResolvedTargetList = /*@__PURE__*/ S.Array(ResolvedTarget);
export interface ListExperimentResolvedTargetsResponse {
  resolvedTargets?: ResolvedTarget[];
  nextToken?: string;
}
const ListExperimentResolvedTargetsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resolvedTargets: S.optional(ResolvedTargetList), nextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListExperimentResolvedTargetsResponse",
}) as any as S.Schema<ListExperimentResolvedTargetsResponse>;
export type ListExperimentsMaxResults = number;
export interface ListExperimentsRequest {
  maxResults?: number;
  nextToken?: string;
  experimentTemplateId?: string;
}
const ListExperimentsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    experimentTemplateId: S.optional(S.String).pipe(T.HttpQuery("experimentTemplateId")),
  }).pipe(T.all(T.Http({ method: "GET", uri: "/experiments" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListExperimentsRequest" }) as any as S.Schema<ListExperimentsRequest>;
export interface ExperimentSummary {
  id?: string;
  arn?: string;
  experimentTemplateId?: string;
  state?: ExperimentState;
  creationTime?: Date;
  tags?: { [key: string]: string | undefined };
  experimentOptions?: ExperimentOptions;
}
const ExperimentSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    arn: S.optional(S.String),
    experimentTemplateId: S.optional(S.String),
    state: S.optional(ExperimentState),
    creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    tags: S.optional(TagMap),
    experimentOptions: S.optional(ExperimentOptions),
  }),
).annotate({ identifier: "ExperimentSummary" }) as any as S.Schema<ExperimentSummary>;
export type ExperimentSummaryList = ExperimentSummary[];
const ExperimentSummaryList = /*@__PURE__*/ S.Array(ExperimentSummary);
export interface ListExperimentsResponse {
  experiments?: ExperimentSummary[];
  nextToken?: string;
}
const ListExperimentsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ experiments: S.optional(ExperimentSummaryList), nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListExperimentsResponse" }) as any as S.Schema<ListExperimentsResponse>;
export interface ListExperimentTargetAccountConfigurationsRequest {
  experimentId: string;
  nextToken?: string;
}
const ListExperimentTargetAccountConfigurationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    experimentId: S.String.pipe(T.HttpLabel("experimentId")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/experiments/{experimentId}/targetAccountConfigurations" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListExperimentTargetAccountConfigurationsRequest",
}) as any as S.Schema<ListExperimentTargetAccountConfigurationsRequest>;
export interface ExperimentTargetAccountConfigurationSummary {
  roleArn?: string;
  accountId?: string;
  description?: string;
}
const ExperimentTargetAccountConfigurationSummary =
  TargetAccountConfiguration as any as S.Schema<ExperimentTargetAccountConfigurationSummary>;
export type ExperimentTargetAccountConfigurationList =
  ExperimentTargetAccountConfigurationSummary[];
const ExperimentTargetAccountConfigurationList = /*@__PURE__*/ S.Array(
  ExperimentTargetAccountConfigurationSummary,
);
export interface ListExperimentTargetAccountConfigurationsResponse {
  targetAccountConfigurations?: ExperimentTargetAccountConfigurationSummary[];
  nextToken?: string;
}
const ListExperimentTargetAccountConfigurationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    targetAccountConfigurations: S.optional(ExperimentTargetAccountConfigurationList),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListExperimentTargetAccountConfigurationsResponse",
}) as any as S.Schema<ListExperimentTargetAccountConfigurationsResponse>;
export type ListExperimentTemplatesMaxResults = number;
export interface ListExperimentTemplatesRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListExperimentTemplatesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(T.Http({ method: "GET", uri: "/experimentTemplates" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "ListExperimentTemplatesRequest",
}) as any as S.Schema<ListExperimentTemplatesRequest>;
export interface ExperimentTemplateSummary {
  id?: string;
  arn?: string;
  description?: string;
  creationTime?: Date;
  lastUpdateTime?: Date;
  tags?: { [key: string]: string | undefined };
}
const ExperimentTemplateSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.optional(S.String),
    arn: S.optional(S.String),
    description: S.optional(S.String),
    creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    lastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    tags: S.optional(TagMap),
  }),
).annotate({
  identifier: "ExperimentTemplateSummary",
}) as any as S.Schema<ExperimentTemplateSummary>;
export type ExperimentTemplateSummaryList = ExperimentTemplateSummary[];
const ExperimentTemplateSummaryList = /*@__PURE__*/ S.Array(ExperimentTemplateSummary);
export interface ListExperimentTemplatesResponse {
  experimentTemplates?: ExperimentTemplateSummary[];
  nextToken?: string;
}
const ListExperimentTemplatesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    experimentTemplates: S.optional(ExperimentTemplateSummaryList),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListExperimentTemplatesResponse",
}) as any as S.Schema<ListExperimentTemplatesResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
    T.all(T.Http({ method: "GET", uri: "/tags/{resourceArn}" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "ListTagsForResourceRequest",
}) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ tags: S.optional(TagMap) }),
).annotate({
  identifier: "ListTagsForResourceResponse",
}) as any as S.Schema<ListTagsForResourceResponse>;
export type ListTargetAccountConfigurationsMaxResults = number;
export interface ListTargetAccountConfigurationsRequest {
  experimentTemplateId: string;
  maxResults?: number;
  nextToken?: string;
}
const ListTargetAccountConfigurationsRequest = /*@__PURE__*/ S.suspend(() =>
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
}) as any as S.Schema<ListTargetAccountConfigurationsRequest>;
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
const ListTargetAccountConfigurationsResponse =
  ListExperimentTargetAccountConfigurationsResponse as any as S.Schema<ListTargetAccountConfigurationsResponse>;
export type ListTargetResourceTypesMaxResults = number;
export interface ListTargetResourceTypesRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListTargetResourceTypesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
  }).pipe(
    T.all(T.Http({ method: "GET", uri: "/targetResourceTypes" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "ListTargetResourceTypesRequest",
}) as any as S.Schema<ListTargetResourceTypesRequest>;
export interface TargetResourceTypeSummary {
  resourceType?: string;
  description?: string;
}
const TargetResourceTypeSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceType: S.optional(S.String), description: S.optional(S.String) }),
).annotate({
  identifier: "TargetResourceTypeSummary",
}) as any as S.Schema<TargetResourceTypeSummary>;
export type TargetResourceTypeSummaryList = TargetResourceTypeSummary[];
const TargetResourceTypeSummaryList = /*@__PURE__*/ S.Array(TargetResourceTypeSummary);
export interface ListTargetResourceTypesResponse {
  targetResourceTypes?: TargetResourceTypeSummary[];
  nextToken?: string;
}
const ListTargetResourceTypesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    targetResourceTypes: S.optional(TargetResourceTypeSummaryList),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListTargetResourceTypesResponse",
}) as any as S.Schema<ListTargetResourceTypesResponse>;
export interface StartExperimentExperimentOptionsInput {
  actionsMode?: ActionsMode;
}
const StartExperimentExperimentOptionsInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ actionsMode: S.optional(ActionsMode) }),
).annotate({
  identifier: "StartExperimentExperimentOptionsInput",
}) as any as S.Schema<StartExperimentExperimentOptionsInput>;
export interface StartExperimentRequest {
  clientToken: string;
  experimentTemplateId: string;
  experimentOptions?: StartExperimentExperimentOptionsInput;
  tags?: { [key: string]: string | undefined };
}
const StartExperimentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    clientToken: S.String.pipe(T.IdempotencyToken()),
    experimentTemplateId: S.String,
    experimentOptions: S.optional(StartExperimentExperimentOptionsInput),
    tags: S.optional(TagMap),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/experiments" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "StartExperimentRequest" }) as any as S.Schema<StartExperimentRequest>;
export interface StartExperimentResponse {
  experiment?: Experiment;
}
const StartExperimentResponse = GetExperimentResponse as any as S.Schema<StartExperimentResponse>;
export interface StopExperimentRequest {
  id: string;
}
const StopExperimentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")) }).pipe(
    T.all(T.Http({ method: "DELETE", uri: "/experiments/{id}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "StopExperimentRequest" }) as any as S.Schema<StopExperimentRequest>;
export interface StopExperimentResponse {
  experiment?: Experiment;
}
const StopExperimentResponse = GetExperimentResponse as any as S.Schema<StopExperimentResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")), tags: TagMap }).pipe(
    T.all(T.Http({ method: "POST", uri: "/tags/{resourceArn}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "TagResourceRequest" }) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = /*@__PURE__*/ S.suspend(() => S.Struct({})).annotate({
  identifier: "TagResourceResponse",
}) as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = ResourceArnList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys?: string[];
}
const UntagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
    tagKeys: S.optional(TagKeyList).pipe(T.HttpQuery("tagKeys")),
  }).pipe(
    T.all(T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "UntagResourceRequest" }) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = TagResourceResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateExperimentTemplateStopConditionInput {
  source: string;
  value?: string;
}
export type UpdateExperimentTemplateStopConditionInputList =
  UpdateExperimentTemplateStopConditionInput[];
const UpdateExperimentTemplateStopConditionInputList =
  CreateExperimentTemplateStopConditionInputList as any as S.Schema<UpdateExperimentTemplateStopConditionInputList>;
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
const UpdateExperimentTemplateTargetInputMap =
  CreateExperimentTemplateTargetInputMap as any as S.Schema<UpdateExperimentTemplateTargetInputMap>;
export interface UpdateExperimentTemplateActionInputItem {
  actionId?: string;
  description?: string;
  parameters?: { [key: string]: string | undefined };
  targets?: { [key: string]: string | undefined };
  startAfter?: string[];
}
const UpdateExperimentTemplateActionInputItem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    actionId: S.optional(S.String),
    description: S.optional(S.String),
    parameters: S.optional(ExperimentTemplateActionParameterMap),
    targets: S.optional(ExperimentTemplateActionTargetMap),
    startAfter: S.optional(ExperimentTemplateActionStartAfterList),
  }),
).annotate({
  identifier: "UpdateExperimentTemplateActionInputItem",
}) as any as S.Schema<UpdateExperimentTemplateActionInputItem>;
export type UpdateExperimentTemplateActionInputMap = {
  [key: string]: UpdateExperimentTemplateActionInputItem | undefined;
};
const UpdateExperimentTemplateActionInputMap = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ UpdateExperimentTemplateActionInputItem.pipe(S.optional),
);
export interface UpdateExperimentTemplateLogConfigurationInput {
  cloudWatchLogsConfiguration?: ExperimentTemplateCloudWatchLogsLogConfigurationInput;
  s3Configuration?: ExperimentTemplateS3LogConfigurationInput;
  logSchemaVersion?: number;
}
const UpdateExperimentTemplateLogConfigurationInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    cloudWatchLogsConfiguration: S.optional(ExperimentTemplateCloudWatchLogsLogConfigurationInput),
    s3Configuration: S.optional(ExperimentTemplateS3LogConfigurationInput),
    logSchemaVersion: S.optional(S.Number),
  }),
).annotate({
  identifier: "UpdateExperimentTemplateLogConfigurationInput",
}) as any as S.Schema<UpdateExperimentTemplateLogConfigurationInput>;
export interface UpdateExperimentTemplateExperimentOptionsInput {
  emptyTargetResolutionMode?: EmptyTargetResolutionMode;
}
const UpdateExperimentTemplateExperimentOptionsInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ emptyTargetResolutionMode: S.optional(EmptyTargetResolutionMode) }),
).annotate({
  identifier: "UpdateExperimentTemplateExperimentOptionsInput",
}) as any as S.Schema<UpdateExperimentTemplateExperimentOptionsInput>;
export interface UpdateExperimentTemplateReportConfigurationInput {
  outputs?: ExperimentTemplateReportConfigurationOutputsInput;
  dataSources?: ExperimentTemplateReportConfigurationDataSourcesInput;
  preExperimentDuration?: string;
  postExperimentDuration?: string;
}
const UpdateExperimentTemplateReportConfigurationInput =
  CreateExperimentTemplateReportConfigurationInput as any as S.Schema<UpdateExperimentTemplateReportConfigurationInput>;
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
const UpdateExperimentTemplateRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    id: S.String.pipe(T.HttpLabel("id")),
    description: S.optional(S.String),
    stopConditions: S.optional(UpdateExperimentTemplateStopConditionInputList),
    targets: S.optional(UpdateExperimentTemplateTargetInputMap),
    actions: S.optional(UpdateExperimentTemplateActionInputMap),
    roleArn: S.optional(S.String),
    logConfiguration: S.optional(UpdateExperimentTemplateLogConfigurationInput),
    experimentOptions: S.optional(UpdateExperimentTemplateExperimentOptionsInput),
    experimentReportConfiguration: S.optional(UpdateExperimentTemplateReportConfigurationInput),
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
}) as any as S.Schema<UpdateExperimentTemplateRequest>;
export interface UpdateExperimentTemplateResponse {
  experimentTemplate?: ExperimentTemplate;
}
const UpdateExperimentTemplateResponse =
  CreateExperimentTemplateResponse as any as S.Schema<UpdateExperimentTemplateResponse>;
export type SafetyLeverStatusInput = "disengaged" | "engaged" | (string & {});
const SafetyLeverStatusInput = S.String;

export interface UpdateSafetyLeverStateInput {
  status: SafetyLeverStatusInput;
  reason: string;
}
const UpdateSafetyLeverStateInput = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ status: SafetyLeverStatusInput, reason: S.String }),
).annotate({
  identifier: "UpdateSafetyLeverStateInput",
}) as any as S.Schema<UpdateSafetyLeverStateInput>;
export interface UpdateSafetyLeverStateRequest {
  id: string;
  state: UpdateSafetyLeverStateInput;
}
const UpdateSafetyLeverStateRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ id: S.String.pipe(T.HttpLabel("id")), state: UpdateSafetyLeverStateInput }).pipe(
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
}) as any as S.Schema<UpdateSafetyLeverStateRequest>;
export interface UpdateSafetyLeverStateResponse {
  safetyLever?: SafetyLever;
}
const UpdateSafetyLeverStateResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ safetyLever: S.optional(SafetyLever) }),
).annotate({
  identifier: "UpdateSafetyLeverStateResponse",
}) as any as S.Schema<UpdateSafetyLeverStateResponse>;
export interface UpdateTargetAccountConfigurationRequest {
  experimentTemplateId: string;
  accountId: string;
  roleArn?: string;
  description?: string;
}
const UpdateTargetAccountConfigurationRequest = /*@__PURE__*/ S.suspend(() =>
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
}) as any as S.Schema<UpdateTargetAccountConfigurationRequest>;
export interface UpdateTargetAccountConfigurationResponse {
  targetAccountConfiguration?: TargetAccountConfiguration;
}
const UpdateTargetAccountConfigurationResponse =
  CreateTargetAccountConfigurationResponse as any as S.Schema<UpdateTargetAccountConfigurationResponse>;
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
  input: CreateExperimentTemplateRequest,
  output: CreateExperimentTemplateResponse,
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
  input: CreateTargetAccountConfigurationRequest,
  output: CreateTargetAccountConfigurationResponse,
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
  input: DeleteExperimentTemplateRequest,
  output: DeleteExperimentTemplateResponse,
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
  input: DeleteTargetAccountConfigurationRequest,
  output: DeleteTargetAccountConfigurationResponse,
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
  input: GetActionRequest,
  output: GetActionResponse,
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
  input: GetExperimentRequest,
  output: GetExperimentResponse,
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
  input: GetExperimentTargetAccountConfigurationRequest,
  output: GetExperimentTargetAccountConfigurationResponse,
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
  input: GetExperimentTemplateRequest,
  output: GetExperimentTemplateResponse,
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
  input: GetSafetyLeverRequest,
  output: GetSafetyLeverResponse,
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
  input: GetTargetAccountConfigurationRequest,
  output: GetTargetAccountConfigurationResponse,
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
  input: GetTargetResourceTypeRequest,
  output: GetTargetResourceTypeResponse,
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
  input: ListActionsRequest,
  output: ListActionsResponse,
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
  input: ListExperimentResolvedTargetsRequest,
  output: ListExperimentResolvedTargetsResponse,
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
  input: ListExperimentsRequest,
  output: ListExperimentsResponse,
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
  input: ListExperimentTargetAccountConfigurationsRequest,
  output: ListExperimentTargetAccountConfigurationsResponse,
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
  input: ListExperimentTemplatesRequest,
  output: ListExperimentTemplatesResponse,
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
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
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
  input: ListTargetAccountConfigurationsRequest,
  output: ListTargetAccountConfigurationsResponse,
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
  input: ListTargetResourceTypesRequest,
  output: ListTargetResourceTypesResponse,
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
  input: StartExperimentRequest,
  output: StartExperimentResponse,
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
  input: StopExperimentRequest,
  output: StopExperimentResponse,
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
  input: TagResourceRequest,
  output: TagResourceResponse,
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
  input: UntagResourceRequest,
  output: UntagResourceResponse,
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
  input: UpdateExperimentTemplateRequest,
  output: UpdateExperimentTemplateResponse,
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
  input: UpdateSafetyLeverStateRequest,
  output: UpdateSafetyLeverStateResponse,
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
  input: UpdateTargetAccountConfigurationRequest,
  output: UpdateTargetAccountConfigurationResponse,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTargetAccountConfiguration",
}));
