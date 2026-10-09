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
  sdkId: "resiliencehub",
  serviceShapeName: "AwsResilienceHub",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "resiliencehub" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-04-30");
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
              `https://resiliencehub-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://resiliencehub-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://resiliencehub.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://resiliencehub.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type Arn = string;
export type String255 = string;
export interface AcceptGroupingRecommendationEntry {
  groupingRecommendationId: string;
}
const AcceptGroupingRecommendationEntry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ groupingRecommendationId: S.String }),
).annotate({
  identifier: "AcceptGroupingRecommendationEntry",
}) as any as S.Schema<AcceptGroupingRecommendationEntry>;
export type AcceptGroupingRecommendationEntries = AcceptGroupingRecommendationEntry[];
const AcceptGroupingRecommendationEntries = /*@__PURE__*/ S.Array(
  AcceptGroupingRecommendationEntry,
);
export interface AcceptResourceGroupingRecommendationsRequest {
  appArn: string;
  entries: AcceptGroupingRecommendationEntry[];
}
const AcceptResourceGroupingRecommendationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String, entries: AcceptGroupingRecommendationEntries }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/accept-resource-grouping-recommendations" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "AcceptResourceGroupingRecommendationsRequest",
}) as any as S.Schema<AcceptResourceGroupingRecommendationsRequest>;
export type ErrorMessage = string;
export interface FailedGroupingRecommendationEntry {
  groupingRecommendationId: string;
  errorMessage: string;
}
const FailedGroupingRecommendationEntry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ groupingRecommendationId: S.String, errorMessage: S.String }),
).annotate({
  identifier: "FailedGroupingRecommendationEntry",
}) as any as S.Schema<FailedGroupingRecommendationEntry>;
export type FailedGroupingRecommendationEntries = FailedGroupingRecommendationEntry[];
const FailedGroupingRecommendationEntries = /*@__PURE__*/ S.Array(
  FailedGroupingRecommendationEntry,
);
export interface AcceptResourceGroupingRecommendationsResponse {
  appArn: string;
  failedEntries: FailedGroupingRecommendationEntry[];
}
const AcceptResourceGroupingRecommendationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String, failedEntries: FailedGroupingRecommendationEntries }),
).annotate({
  identifier: "AcceptResourceGroupingRecommendationsResponse",
}) as any as S.Schema<AcceptResourceGroupingRecommendationsResponse>;
export type EntityName = string;
export type ResourceMappingType =
  | "CfnStack"
  | "Resource"
  | "AppRegistryApp"
  | "ResourceGroup"
  | "Terraform"
  | "EKS"
  | (string & {});
const ResourceMappingType = S.String;

export type PhysicalIdentifierType = "Arn" | "Native" | (string & {});
const PhysicalIdentifierType = S.String;

export type AwsRegion = string;
export type CustomerId = string;
export interface PhysicalResourceId {
  identifier: string;
  type: PhysicalIdentifierType;
  awsRegion?: string;
  awsAccountId?: string;
}
const PhysicalResourceId = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    identifier: S.String,
    type: PhysicalIdentifierType,
    awsRegion: S.optional(S.String),
    awsAccountId: S.optional(S.String),
  }),
).annotate({ identifier: "PhysicalResourceId" }) as any as S.Schema<PhysicalResourceId>;
export interface ResourceMapping {
  resourceName?: string;
  logicalStackName?: string;
  appRegistryAppName?: string;
  resourceGroupName?: string;
  mappingType: ResourceMappingType;
  physicalResourceId: PhysicalResourceId;
  terraformSourceName?: string;
  eksSourceName?: string;
}
const ResourceMapping = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceName: S.optional(S.String),
    logicalStackName: S.optional(S.String),
    appRegistryAppName: S.optional(S.String),
    resourceGroupName: S.optional(S.String),
    mappingType: ResourceMappingType,
    physicalResourceId: PhysicalResourceId,
    terraformSourceName: S.optional(S.String),
    eksSourceName: S.optional(S.String),
  }),
).annotate({ identifier: "ResourceMapping" }) as any as S.Schema<ResourceMapping>;
export type ResourceMappingList = ResourceMapping[];
const ResourceMappingList = /*@__PURE__*/ S.Array(ResourceMapping);
export interface AddDraftAppVersionResourceMappingsRequest {
  appArn: string;
  resourceMappings: ResourceMapping[];
}
const AddDraftAppVersionResourceMappingsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String, resourceMappings: ResourceMappingList }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/add-draft-app-version-resource-mappings" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "AddDraftAppVersionResourceMappingsRequest",
}) as any as S.Schema<AddDraftAppVersionResourceMappingsRequest>;
export type EntityVersion = string;
export interface AddDraftAppVersionResourceMappingsResponse {
  appArn: string;
  appVersion: string;
  resourceMappings: ResourceMapping[];
}
const AddDraftAppVersionResourceMappingsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String, appVersion: S.String, resourceMappings: ResourceMappingList }),
).annotate({
  identifier: "AddDraftAppVersionResourceMappingsResponse",
}) as any as S.Schema<AddDraftAppVersionResourceMappingsResponse>;
export type SpecReferenceId = string;
export type String500 = string;
export interface UpdateRecommendationStatusItem {
  resourceId?: string;
  targetAccountId?: string;
  targetRegion?: string;
}
const UpdateRecommendationStatusItem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceId: S.optional(S.String),
    targetAccountId: S.optional(S.String),
    targetRegion: S.optional(S.String),
  }),
).annotate({
  identifier: "UpdateRecommendationStatusItem",
}) as any as S.Schema<UpdateRecommendationStatusItem>;
export type EntityName255 = string;
export type ExcludeRecommendationReason =
  | "AlreadyImplemented"
  | "NotRelevant"
  | "ComplexityOfImplementation"
  | (string & {});
const ExcludeRecommendationReason = S.String;

export interface UpdateRecommendationStatusRequestEntry {
  entryId: string;
  referenceId: string;
  item?: UpdateRecommendationStatusItem;
  excluded: boolean;
  appComponentId?: string;
  excludeReason?: ExcludeRecommendationReason;
}
const UpdateRecommendationStatusRequestEntry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    entryId: S.String,
    referenceId: S.String,
    item: S.optional(UpdateRecommendationStatusItem),
    excluded: S.Boolean,
    appComponentId: S.optional(S.String),
    excludeReason: S.optional(ExcludeRecommendationReason),
  }),
).annotate({
  identifier: "UpdateRecommendationStatusRequestEntry",
}) as any as S.Schema<UpdateRecommendationStatusRequestEntry>;
export type UpdateRecommendationStatusRequestEntries = UpdateRecommendationStatusRequestEntry[];
const UpdateRecommendationStatusRequestEntries = /*@__PURE__*/ S.Array(
  UpdateRecommendationStatusRequestEntry,
);
export interface BatchUpdateRecommendationStatusRequest {
  appArn: string;
  requestEntries: UpdateRecommendationStatusRequestEntry[];
}
const BatchUpdateRecommendationStatusRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String, requestEntries: UpdateRecommendationStatusRequestEntries }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/batch-update-recommendation-status" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "BatchUpdateRecommendationStatusRequest",
}) as any as S.Schema<BatchUpdateRecommendationStatusRequest>;
export interface BatchUpdateRecommendationStatusSuccessfulEntry {
  entryId: string;
  referenceId: string;
  item?: UpdateRecommendationStatusItem;
  excluded: boolean;
  appComponentId?: string;
  excludeReason?: ExcludeRecommendationReason;
}
export type BatchUpdateRecommendationStatusSuccessfulEntries =
  BatchUpdateRecommendationStatusSuccessfulEntry[];
const BatchUpdateRecommendationStatusSuccessfulEntries =
  UpdateRecommendationStatusRequestEntries as any as S.Schema<BatchUpdateRecommendationStatusSuccessfulEntries>;
export interface BatchUpdateRecommendationStatusFailedEntry {
  entryId: string;
  errorMessage: string;
}
const BatchUpdateRecommendationStatusFailedEntry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ entryId: S.String, errorMessage: S.String }),
).annotate({
  identifier: "BatchUpdateRecommendationStatusFailedEntry",
}) as any as S.Schema<BatchUpdateRecommendationStatusFailedEntry>;
export type BatchUpdateRecommendationStatusFailedEntries =
  BatchUpdateRecommendationStatusFailedEntry[];
const BatchUpdateRecommendationStatusFailedEntries = /*@__PURE__*/ S.Array(
  BatchUpdateRecommendationStatusFailedEntry,
);
export interface BatchUpdateRecommendationStatusResponse {
  appArn: string;
  successfulEntries: BatchUpdateRecommendationStatusSuccessfulEntry[];
  failedEntries: BatchUpdateRecommendationStatusFailedEntry[];
}
const BatchUpdateRecommendationStatusResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    successfulEntries: BatchUpdateRecommendationStatusSuccessfulEntries,
    failedEntries: BatchUpdateRecommendationStatusFailedEntries,
  }),
).annotate({
  identifier: "BatchUpdateRecommendationStatusResponse",
}) as any as S.Schema<BatchUpdateRecommendationStatusResponse>;
export type EntityDescription = string;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
export type ClientToken = string;
export type AppAssessmentScheduleType = "Disabled" | "Daily" | (string & {});
const AppAssessmentScheduleType = S.String;

export type PermissionModelType = "LegacyIAMUser" | "RoleBased" | (string & {});
const PermissionModelType = S.String;

export type IamRoleName = string;
export type IamRoleArn = string;
export type IamRoleArnList = string[];
const IamRoleArnList = /*@__PURE__*/ S.Array(S.String);
export interface PermissionModel {
  type: PermissionModelType;
  invokerRoleName?: string;
  crossAccountRoleArns?: string[];
}
const PermissionModel = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    type: PermissionModelType,
    invokerRoleName: S.optional(S.String),
    crossAccountRoleArns: S.optional(IamRoleArnList),
  }),
).annotate({ identifier: "PermissionModel" }) as any as S.Schema<PermissionModel>;
export type EventType = "ScheduledAssessmentFailure" | "DriftDetected" | (string & {});
const EventType = S.String;

export interface EventSubscription {
  name: string;
  eventType: EventType;
  snsTopicArn?: string;
}
const EventSubscription = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.String, eventType: EventType, snsTopicArn: S.optional(S.String) }),
).annotate({ identifier: "EventSubscription" }) as any as S.Schema<EventSubscription>;
export type EventSubscriptionList = EventSubscription[];
const EventSubscriptionList = /*@__PURE__*/ S.Array(EventSubscription);
export interface CreateAppRequest {
  name: string;
  description?: string;
  policyArn?: string;
  tags?: { [key: string]: string | undefined };
  clientToken?: string;
  assessmentSchedule?: AppAssessmentScheduleType;
  permissionModel?: PermissionModel;
  eventSubscriptions?: EventSubscription[];
  awsApplicationArn?: string;
}
const CreateAppRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    description: S.optional(S.String),
    policyArn: S.optional(S.String),
    tags: S.optional(TagMap),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    assessmentSchedule: S.optional(AppAssessmentScheduleType),
    permissionModel: S.optional(PermissionModel),
    eventSubscriptions: S.optional(EventSubscriptionList),
    awsApplicationArn: S.optional(S.String),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/create-app" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "CreateAppRequest" }) as any as S.Schema<CreateAppRequest>;
export type AppStatusType = "Active" | "Deleting" | (string & {});
const AppStatusType = S.String;

export type AppComplianceStatusType =
  | "PolicyBreached"
  | "PolicyMet"
  | "NotAssessed"
  | "ChangesDetected"
  | "NotApplicable"
  | "MissingPolicy"
  | (string & {});
const AppComplianceStatusType = S.String;

export type AppDriftStatusType = "NotChecked" | "NotDetected" | "Detected" | (string & {});
const AppDriftStatusType = S.String;

export interface App {
  appArn: string;
  name: string;
  description?: string;
  policyArn?: string;
  creationTime: Date;
  status?: AppStatusType;
  complianceStatus?: AppComplianceStatusType;
  lastAppComplianceEvaluationTime?: Date;
  resiliencyScore?: number;
  lastResiliencyScoreEvaluationTime?: Date;
  tags?: { [key: string]: string | undefined };
  assessmentSchedule?: AppAssessmentScheduleType;
  permissionModel?: PermissionModel;
  eventSubscriptions?: EventSubscription[];
  driftStatus?: AppDriftStatusType;
  lastDriftEvaluationTime?: Date;
  rtoInSecs?: number;
  rpoInSecs?: number;
  awsApplicationArn?: string;
}
const App = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    name: S.String,
    description: S.optional(S.String),
    policyArn: S.optional(S.String),
    creationTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    status: S.optional(AppStatusType),
    complianceStatus: S.optional(AppComplianceStatusType),
    lastAppComplianceEvaluationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    resiliencyScore: S.optional(S.Number),
    lastResiliencyScoreEvaluationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    tags: S.optional(TagMap),
    assessmentSchedule: S.optional(AppAssessmentScheduleType),
    permissionModel: S.optional(PermissionModel),
    eventSubscriptions: S.optional(EventSubscriptionList),
    driftStatus: S.optional(AppDriftStatusType),
    lastDriftEvaluationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    rtoInSecs: S.optional(S.Number),
    rpoInSecs: S.optional(S.Number),
    awsApplicationArn: S.optional(S.String),
  }),
).annotate({ identifier: "App" }) as any as S.Schema<App>;
export interface CreateAppResponse {
  app: App;
}
const CreateAppResponse = /*@__PURE__*/ S.suspend(() => S.Struct({ app: App })).annotate({
  identifier: "CreateAppResponse",
}) as any as S.Schema<CreateAppResponse>;
export type String128WithoutWhitespace = string;
export type String1024 = string;
export type AdditionalInfoValueList = string[];
const AdditionalInfoValueList = IamRoleArnList as any as S.Schema<AdditionalInfoValueList>;
export type AdditionalInfoMap = { [key: string]: string[] | undefined };
const AdditionalInfoMap = /*@__PURE__*/ S.Record(
  S.String,
  /*@__PURE__*/ AdditionalInfoValueList.pipe(S.optional),
);
export interface CreateAppVersionAppComponentRequest {
  appArn: string;
  id?: string;
  name: string;
  type: string;
  additionalInfo?: { [key: string]: string[] | undefined };
  clientToken?: string;
}
const CreateAppVersionAppComponentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    id: S.optional(S.String),
    name: S.String,
    type: S.String,
    additionalInfo: S.optional(AdditionalInfoMap),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/create-app-version-app-component" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateAppVersionAppComponentRequest",
}) as any as S.Schema<CreateAppVersionAppComponentRequest>;
export interface AppComponent {
  name: string;
  type: string;
  id?: string;
  additionalInfo?: { [key: string]: string[] | undefined };
}
const AppComponent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    name: S.String,
    type: S.String,
    id: S.optional(S.String),
    additionalInfo: S.optional(AdditionalInfoMap),
  }),
).annotate({ identifier: "AppComponent" }) as any as S.Schema<AppComponent>;
export interface CreateAppVersionAppComponentResponse {
  appArn: string;
  appVersion: string;
  appComponent?: AppComponent;
}
const CreateAppVersionAppComponentResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String, appVersion: S.String, appComponent: S.optional(AppComponent) }),
).annotate({
  identifier: "CreateAppVersionAppComponentResponse",
}) as any as S.Schema<CreateAppVersionAppComponentResponse>;
export interface LogicalResourceId {
  identifier: string;
  logicalStackName?: string;
  resourceGroupName?: string;
  terraformSourceName?: string;
  eksSourceName?: string;
}
const LogicalResourceId = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    identifier: S.String,
    logicalStackName: S.optional(S.String),
    resourceGroupName: S.optional(S.String),
    terraformSourceName: S.optional(S.String),
    eksSourceName: S.optional(S.String),
  }),
).annotate({ identifier: "LogicalResourceId" }) as any as S.Schema<LogicalResourceId>;
export type String2048 = string;
export type AppComponentNameList = string[];
const AppComponentNameList = IamRoleArnList as any as S.Schema<AppComponentNameList>;
export interface CreateAppVersionResourceRequest {
  appArn: string;
  resourceName?: string;
  logicalResourceId: LogicalResourceId;
  physicalResourceId: string;
  awsRegion?: string;
  awsAccountId?: string;
  resourceType: string;
  appComponents: string[];
  additionalInfo?: { [key: string]: string[] | undefined };
  clientToken?: string;
}
const CreateAppVersionResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    resourceName: S.optional(S.String),
    logicalResourceId: LogicalResourceId,
    physicalResourceId: S.String,
    awsRegion: S.optional(S.String),
    awsAccountId: S.optional(S.String),
    resourceType: S.String,
    appComponents: AppComponentNameList,
    additionalInfo: S.optional(AdditionalInfoMap),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/create-app-version-resource" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateAppVersionResourceRequest",
}) as any as S.Schema<CreateAppVersionResourceRequest>;
export type AppComponentList = AppComponent[];
const AppComponentList = /*@__PURE__*/ S.Array(AppComponent);
export type ResourceSourceType = "AppTemplate" | "Discovered" | (string & {});
const ResourceSourceType = S.String;

export interface PhysicalResource {
  resourceName?: string;
  logicalResourceId: LogicalResourceId;
  physicalResourceId: PhysicalResourceId;
  resourceType: string;
  appComponents?: AppComponent[];
  additionalInfo?: { [key: string]: string[] | undefined };
  excluded?: boolean;
  sourceType?: ResourceSourceType;
  parentResourceName?: string;
}
const PhysicalResource = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceName: S.optional(S.String),
    logicalResourceId: LogicalResourceId,
    physicalResourceId: PhysicalResourceId,
    resourceType: S.String,
    appComponents: S.optional(AppComponentList),
    additionalInfo: S.optional(AdditionalInfoMap),
    excluded: S.optional(S.Boolean),
    sourceType: S.optional(ResourceSourceType),
    parentResourceName: S.optional(S.String),
  }),
).annotate({ identifier: "PhysicalResource" }) as any as S.Schema<PhysicalResource>;
export interface CreateAppVersionResourceResponse {
  appArn: string;
  appVersion: string;
  physicalResource?: PhysicalResource;
}
const CreateAppVersionResourceResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    appVersion: S.String,
    physicalResource: S.optional(PhysicalResource),
  }),
).annotate({
  identifier: "CreateAppVersionResourceResponse",
}) as any as S.Schema<CreateAppVersionResourceResponse>;
export type Uuid = string;
export type RecommendationIdList = string[];
const RecommendationIdList = IamRoleArnList as any as S.Schema<RecommendationIdList>;
export type TemplateFormat = "CfnYaml" | "CfnJson" | (string & {});
const TemplateFormat = S.String;

export type RenderRecommendationType = "Alarm" | "Sop" | "Test" | (string & {});
const RenderRecommendationType = S.String;

export type RenderRecommendationTypeList = RenderRecommendationType[];
const RenderRecommendationTypeList = /*@__PURE__*/ S.Array(RenderRecommendationType);
export interface CreateRecommendationTemplateRequest {
  recommendationIds?: string[];
  format?: TemplateFormat;
  recommendationTypes?: RenderRecommendationType[];
  assessmentArn: string;
  name: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
  bucketName?: string;
}
const CreateRecommendationTemplateRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    recommendationIds: S.optional(RecommendationIdList),
    format: S.optional(TemplateFormat),
    recommendationTypes: S.optional(RenderRecommendationTypeList),
    assessmentArn: S.String,
    name: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    tags: S.optional(TagMap),
    bucketName: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/create-recommendation-template" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateRecommendationTemplateRequest",
}) as any as S.Schema<CreateRecommendationTemplateRequest>;
export interface S3Location {
  bucket?: string;
  prefix?: string;
}
const S3Location = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ bucket: S.optional(S.String), prefix: S.optional(S.String) }),
).annotate({ identifier: "S3Location" }) as any as S.Schema<S3Location>;
export type RecommendationTemplateStatus =
  | "Pending"
  | "InProgress"
  | "Failed"
  | "Success"
  | (string & {});
const RecommendationTemplateStatus = S.String;

export interface RecommendationTemplate {
  templatesLocation?: S3Location;
  assessmentArn: string;
  appArn?: string;
  recommendationIds?: string[];
  recommendationTypes: RenderRecommendationType[];
  format: TemplateFormat;
  recommendationTemplateArn: string;
  message?: string;
  status: RecommendationTemplateStatus;
  name: string;
  startTime?: Date;
  endTime?: Date;
  tags?: { [key: string]: string | undefined };
  needsReplacements?: boolean;
}
const RecommendationTemplate = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    templatesLocation: S.optional(S3Location),
    assessmentArn: S.String,
    appArn: S.optional(S.String),
    recommendationIds: S.optional(RecommendationIdList),
    recommendationTypes: RenderRecommendationTypeList,
    format: TemplateFormat,
    recommendationTemplateArn: S.String,
    message: S.optional(S.String),
    status: RecommendationTemplateStatus,
    name: S.String,
    startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    tags: S.optional(TagMap),
    needsReplacements: S.optional(S.Boolean),
  }),
).annotate({ identifier: "RecommendationTemplate" }) as any as S.Schema<RecommendationTemplate>;
export interface CreateRecommendationTemplateResponse {
  recommendationTemplate?: RecommendationTemplate;
}
const CreateRecommendationTemplateResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ recommendationTemplate: S.optional(RecommendationTemplate) }),
).annotate({
  identifier: "CreateRecommendationTemplateResponse",
}) as any as S.Schema<CreateRecommendationTemplateResponse>;
export type DataLocationConstraint =
  | "AnyLocation"
  | "SameContinent"
  | "SameCountry"
  | (string & {});
const DataLocationConstraint = S.String;

export type ResiliencyPolicyTier =
  | "MissionCritical"
  | "Critical"
  | "Important"
  | "CoreServices"
  | "NonCritical"
  | "NotApplicable"
  | (string & {});
const ResiliencyPolicyTier = S.String;

export type DisruptionType = "Software" | "Hardware" | "AZ" | "Region" | (string & {});
const DisruptionType = S.String;

export type Seconds = number;
export interface FailurePolicy {
  rtoInSecs: number;
  rpoInSecs: number;
}
const FailurePolicy = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ rtoInSecs: S.Number, rpoInSecs: S.Number }),
).annotate({ identifier: "FailurePolicy" }) as any as S.Schema<FailurePolicy>;
export type DisruptionPolicy = { [key in DisruptionType]?: FailurePolicy };
const DisruptionPolicy = /*@__PURE__*/ S.Record(
  DisruptionType,
  /*@__PURE__*/ FailurePolicy.pipe(S.optional),
);
export interface CreateResiliencyPolicyRequest {
  policyName: string;
  policyDescription?: string;
  dataLocationConstraint?: DataLocationConstraint;
  tier: ResiliencyPolicyTier;
  policy: { [key: string]: FailurePolicy | undefined };
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateResiliencyPolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    policyName: S.String,
    policyDescription: S.optional(S.String),
    dataLocationConstraint: S.optional(DataLocationConstraint),
    tier: ResiliencyPolicyTier,
    policy: DisruptionPolicy,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    tags: S.optional(TagMap),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/create-resiliency-policy" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateResiliencyPolicyRequest",
}) as any as S.Schema<CreateResiliencyPolicyRequest>;
export type EstimatedCostTier = "L1" | "L2" | "L3" | "L4" | (string & {});
const EstimatedCostTier = S.String;

export interface ResiliencyPolicy {
  policyArn?: string;
  policyName?: string;
  policyDescription?: string;
  dataLocationConstraint?: DataLocationConstraint;
  tier?: ResiliencyPolicyTier;
  estimatedCostTier?: EstimatedCostTier;
  policy?: { [key: string]: FailurePolicy | undefined };
  creationTime?: Date;
  tags?: { [key: string]: string | undefined };
}
const ResiliencyPolicy = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    policyArn: S.optional(S.String),
    policyName: S.optional(S.String),
    policyDescription: S.optional(S.String),
    dataLocationConstraint: S.optional(DataLocationConstraint),
    tier: S.optional(ResiliencyPolicyTier),
    estimatedCostTier: S.optional(EstimatedCostTier),
    policy: S.optional(DisruptionPolicy),
    creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    tags: S.optional(TagMap),
  }),
).annotate({ identifier: "ResiliencyPolicy" }) as any as S.Schema<ResiliencyPolicy>;
export interface CreateResiliencyPolicyResponse {
  policy: ResiliencyPolicy;
}
const CreateResiliencyPolicyResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ policy: ResiliencyPolicy }),
).annotate({
  identifier: "CreateResiliencyPolicyResponse",
}) as any as S.Schema<CreateResiliencyPolicyResponse>;
export interface DeleteAppRequest {
  appArn: string;
  forceDelete?: boolean;
  clientToken?: string;
}
const DeleteAppRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    forceDelete: S.optional(S.Boolean),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/delete-app" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "DeleteAppRequest" }) as any as S.Schema<DeleteAppRequest>;
export interface DeleteAppResponse {
  appArn: string;
}
const DeleteAppResponse = /*@__PURE__*/ S.suspend(() => S.Struct({ appArn: S.String })).annotate({
  identifier: "DeleteAppResponse",
}) as any as S.Schema<DeleteAppResponse>;
export interface DeleteAppAssessmentRequest {
  assessmentArn: string;
  clientToken?: string;
}
const DeleteAppAssessmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assessmentArn: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/delete-app-assessment" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "DeleteAppAssessmentRequest",
}) as any as S.Schema<DeleteAppAssessmentRequest>;
export type AssessmentStatus = "Pending" | "InProgress" | "Failed" | "Success" | (string & {});
const AssessmentStatus = S.String;

export interface DeleteAppAssessmentResponse {
  assessmentArn: string;
  assessmentStatus: AssessmentStatus;
}
const DeleteAppAssessmentResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ assessmentArn: S.String, assessmentStatus: AssessmentStatus }),
).annotate({
  identifier: "DeleteAppAssessmentResponse",
}) as any as S.Schema<DeleteAppAssessmentResponse>;
export type S3Url = string;
export interface TerraformSource {
  s3StateFileUrl: string;
}
const TerraformSource = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ s3StateFileUrl: S.String }),
).annotate({ identifier: "TerraformSource" }) as any as S.Schema<TerraformSource>;
export type EksNamespace = string;
export interface EksSourceClusterNamespace {
  eksClusterArn: string;
  namespace: string;
}
const EksSourceClusterNamespace = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ eksClusterArn: S.String, namespace: S.String }),
).annotate({
  identifier: "EksSourceClusterNamespace",
}) as any as S.Schema<EksSourceClusterNamespace>;
export interface DeleteAppInputSourceRequest {
  appArn: string;
  sourceArn?: string;
  terraformSource?: TerraformSource;
  clientToken?: string;
  eksSourceClusterNamespace?: EksSourceClusterNamespace;
}
const DeleteAppInputSourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    sourceArn: S.optional(S.String),
    terraformSource: S.optional(TerraformSource),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    eksSourceClusterNamespace: S.optional(EksSourceClusterNamespace),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/delete-app-input-source" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteAppInputSourceRequest",
}) as any as S.Schema<DeleteAppInputSourceRequest>;
export interface AppInputSource {
  sourceName?: string;
  importType: ResourceMappingType;
  sourceArn?: string;
  terraformSource?: TerraformSource;
  resourceCount?: number;
  eksSourceClusterNamespace?: EksSourceClusterNamespace;
}
const AppInputSource = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    sourceName: S.optional(S.String),
    importType: ResourceMappingType,
    sourceArn: S.optional(S.String),
    terraformSource: S.optional(TerraformSource),
    resourceCount: S.optional(S.Number),
    eksSourceClusterNamespace: S.optional(EksSourceClusterNamespace),
  }),
).annotate({ identifier: "AppInputSource" }) as any as S.Schema<AppInputSource>;
export interface DeleteAppInputSourceResponse {
  appArn?: string;
  appInputSource?: AppInputSource;
}
const DeleteAppInputSourceResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.optional(S.String), appInputSource: S.optional(AppInputSource) }),
).annotate({
  identifier: "DeleteAppInputSourceResponse",
}) as any as S.Schema<DeleteAppInputSourceResponse>;
export interface DeleteAppVersionAppComponentRequest {
  appArn: string;
  id: string;
  clientToken?: string;
}
const DeleteAppVersionAppComponentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    id: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/delete-app-version-app-component" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteAppVersionAppComponentRequest",
}) as any as S.Schema<DeleteAppVersionAppComponentRequest>;
export interface DeleteAppVersionAppComponentResponse {
  appArn: string;
  appVersion: string;
  appComponent?: AppComponent;
}
const DeleteAppVersionAppComponentResponse =
  CreateAppVersionAppComponentResponse as any as S.Schema<DeleteAppVersionAppComponentResponse>;
export interface DeleteAppVersionResourceRequest {
  appArn: string;
  resourceName?: string;
  logicalResourceId?: LogicalResourceId;
  physicalResourceId?: string;
  awsRegion?: string;
  awsAccountId?: string;
  clientToken?: string;
}
const DeleteAppVersionResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    resourceName: S.optional(S.String),
    logicalResourceId: S.optional(LogicalResourceId),
    physicalResourceId: S.optional(S.String),
    awsRegion: S.optional(S.String),
    awsAccountId: S.optional(S.String),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/delete-app-version-resource" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteAppVersionResourceRequest",
}) as any as S.Schema<DeleteAppVersionResourceRequest>;
export interface DeleteAppVersionResourceResponse {
  appArn: string;
  appVersion: string;
  physicalResource?: PhysicalResource;
}
const DeleteAppVersionResourceResponse =
  CreateAppVersionResourceResponse as any as S.Schema<DeleteAppVersionResourceResponse>;
export interface DeleteRecommendationTemplateRequest {
  recommendationTemplateArn: string;
  clientToken?: string;
}
const DeleteRecommendationTemplateRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    recommendationTemplateArn: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/delete-recommendation-template" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteRecommendationTemplateRequest",
}) as any as S.Schema<DeleteRecommendationTemplateRequest>;
export interface DeleteRecommendationTemplateResponse {
  recommendationTemplateArn: string;
  status: RecommendationTemplateStatus;
}
const DeleteRecommendationTemplateResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ recommendationTemplateArn: S.String, status: RecommendationTemplateStatus }),
).annotate({
  identifier: "DeleteRecommendationTemplateResponse",
}) as any as S.Schema<DeleteRecommendationTemplateResponse>;
export interface DeleteResiliencyPolicyRequest {
  policyArn: string;
  clientToken?: string;
}
const DeleteResiliencyPolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    policyArn: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/delete-resiliency-policy" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteResiliencyPolicyRequest",
}) as any as S.Schema<DeleteResiliencyPolicyRequest>;
export interface DeleteResiliencyPolicyResponse {
  policyArn: string;
}
const DeleteResiliencyPolicyResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ policyArn: S.String }),
).annotate({
  identifier: "DeleteResiliencyPolicyResponse",
}) as any as S.Schema<DeleteResiliencyPolicyResponse>;
export interface DescribeAppRequest {
  appArn: string;
}
const DescribeAppRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/describe-app" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "DescribeAppRequest" }) as any as S.Schema<DescribeAppRequest>;
export interface DescribeAppResponse {
  app: App;
}
const DescribeAppResponse = CreateAppResponse as any as S.Schema<DescribeAppResponse>;
export interface DescribeAppAssessmentRequest {
  assessmentArn: string;
}
const DescribeAppAssessmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ assessmentArn: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/describe-app-assessment" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DescribeAppAssessmentRequest",
}) as any as S.Schema<DescribeAppAssessmentRequest>;
export type AssessmentInvoker = "User" | "System" | (string & {});
const AssessmentInvoker = S.String;

export type CurrencyCode = string;
export type CostFrequency = "Hourly" | "Daily" | "Monthly" | "Yearly" | (string & {});
const CostFrequency = S.String;

export interface Cost {
  amount: number;
  currency: string;
  frequency: CostFrequency;
}
const Cost = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ amount: S.Number, currency: S.String, frequency: CostFrequency }),
).annotate({ identifier: "Cost" }) as any as S.Schema<Cost>;
export type DisruptionResiliencyScore = { [key in DisruptionType]?: number };
const DisruptionResiliencyScore = /*@__PURE__*/ S.Record(
  DisruptionType,
  /*@__PURE__*/ S.Number.pipe(S.optional),
);
export type ResiliencyScoreType = "Compliance" | "Test" | "Alarm" | "Sop" | (string & {});
const ResiliencyScoreType = S.String;

export interface ScoringComponentResiliencyScore {
  score?: number;
  possibleScore?: number;
  outstandingCount?: number;
  excludedCount?: number;
}
const ScoringComponentResiliencyScore = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    score: S.optional(S.Number),
    possibleScore: S.optional(S.Number),
    outstandingCount: S.optional(S.Number),
    excludedCount: S.optional(S.Number),
  }),
).annotate({
  identifier: "ScoringComponentResiliencyScore",
}) as any as S.Schema<ScoringComponentResiliencyScore>;
export type ScoringComponentResiliencyScores = {
  [key in ResiliencyScoreType]?: ScoringComponentResiliencyScore;
};
const ScoringComponentResiliencyScores = /*@__PURE__*/ S.Record(
  ResiliencyScoreType,
  /*@__PURE__*/ ScoringComponentResiliencyScore.pipe(S.optional),
);
export interface ResiliencyScore {
  score: number;
  disruptionScore: { [key: string]: number | undefined };
  componentScore?: { [key: string]: ScoringComponentResiliencyScore | undefined };
}
const ResiliencyScore = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    score: S.Number,
    disruptionScore: DisruptionResiliencyScore,
    componentScore: S.optional(ScoringComponentResiliencyScores),
  }),
).annotate({ identifier: "ResiliencyScore" }) as any as S.Schema<ResiliencyScore>;
export type ComplianceStatus =
  | "PolicyBreached"
  | "PolicyMet"
  | "NotApplicable"
  | "MissingPolicy"
  | (string & {});
const ComplianceStatus = S.String;

export interface DisruptionCompliance {
  achievableRtoInSecs?: number;
  currentRtoInSecs?: number;
  rtoReferenceId?: string;
  rtoDescription?: string;
  currentRpoInSecs?: number;
  rpoReferenceId?: string;
  rpoDescription?: string;
  complianceStatus: ComplianceStatus;
  achievableRpoInSecs?: number;
  message?: string;
}
const DisruptionCompliance = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    achievableRtoInSecs: S.optional(S.Number),
    currentRtoInSecs: S.optional(S.Number),
    rtoReferenceId: S.optional(S.String),
    rtoDescription: S.optional(S.String),
    currentRpoInSecs: S.optional(S.Number),
    rpoReferenceId: S.optional(S.String),
    rpoDescription: S.optional(S.String),
    complianceStatus: ComplianceStatus,
    achievableRpoInSecs: S.optional(S.Number),
    message: S.optional(S.String),
  }),
).annotate({ identifier: "DisruptionCompliance" }) as any as S.Schema<DisruptionCompliance>;
export type AssessmentCompliance = { [key in DisruptionType]?: DisruptionCompliance };
const AssessmentCompliance = /*@__PURE__*/ S.Record(
  DisruptionType,
  /*@__PURE__*/ DisruptionCompliance.pipe(S.optional),
);
export interface ResourceError {
  logicalResourceId?: string;
  physicalResourceId?: string;
  reason?: string;
}
const ResourceError = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    logicalResourceId: S.optional(S.String),
    physicalResourceId: S.optional(S.String),
    reason: S.optional(S.String),
  }),
).annotate({ identifier: "ResourceError" }) as any as S.Schema<ResourceError>;
export type ResourceErrorList = ResourceError[];
const ResourceErrorList = /*@__PURE__*/ S.Array(ResourceError);
export interface ResourceErrorsDetails {
  resourceErrors?: ResourceError[];
  hasMoreErrors?: boolean;
}
const ResourceErrorsDetails = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceErrors: S.optional(ResourceErrorList), hasMoreErrors: S.optional(S.Boolean) }),
).annotate({ identifier: "ResourceErrorsDetails" }) as any as S.Schema<ResourceErrorsDetails>;
export type DriftStatus = "NotChecked" | "NotDetected" | "Detected" | (string & {});
const DriftStatus = S.String;

export interface AssessmentRiskRecommendation {
  risk?: string;
  recommendation?: string;
  appComponents?: string[];
}
const AssessmentRiskRecommendation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    risk: S.optional(S.String),
    recommendation: S.optional(S.String),
    appComponents: S.optional(AppComponentNameList),
  }),
).annotate({
  identifier: "AssessmentRiskRecommendation",
}) as any as S.Schema<AssessmentRiskRecommendation>;
export type AssessmentRiskRecommendationList = AssessmentRiskRecommendation[];
const AssessmentRiskRecommendationList = /*@__PURE__*/ S.Array(AssessmentRiskRecommendation);
export interface AssessmentSummary {
  summary?: string;
  riskRecommendations?: AssessmentRiskRecommendation[];
}
const AssessmentSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    summary: S.optional(S.String),
    riskRecommendations: S.optional(AssessmentRiskRecommendationList),
  }),
).annotate({ identifier: "AssessmentSummary" }) as any as S.Schema<AssessmentSummary>;
export interface AppAssessment {
  appArn?: string;
  appVersion?: string;
  invoker: AssessmentInvoker;
  cost?: Cost;
  resiliencyScore?: ResiliencyScore;
  compliance?: { [key: string]: DisruptionCompliance | undefined };
  complianceStatus?: ComplianceStatus;
  assessmentStatus: AssessmentStatus;
  startTime?: Date;
  endTime?: Date;
  message?: string;
  assessmentName?: string;
  assessmentArn: string;
  policy?: ResiliencyPolicy;
  tags?: { [key: string]: string | undefined };
  resourceErrorsDetails?: ResourceErrorsDetails;
  versionName?: string;
  driftStatus?: DriftStatus;
  summary?: AssessmentSummary;
}
const AppAssessment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.optional(S.String),
    appVersion: S.optional(S.String),
    invoker: AssessmentInvoker,
    cost: S.optional(Cost),
    resiliencyScore: S.optional(ResiliencyScore),
    compliance: S.optional(AssessmentCompliance),
    complianceStatus: S.optional(ComplianceStatus),
    assessmentStatus: AssessmentStatus,
    startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    message: S.optional(S.String),
    assessmentName: S.optional(S.String),
    assessmentArn: S.String,
    policy: S.optional(ResiliencyPolicy),
    tags: S.optional(TagMap),
    resourceErrorsDetails: S.optional(ResourceErrorsDetails),
    versionName: S.optional(S.String),
    driftStatus: S.optional(DriftStatus),
    summary: S.optional(AssessmentSummary),
  }),
).annotate({ identifier: "AppAssessment" }) as any as S.Schema<AppAssessment>;
export interface DescribeAppAssessmentResponse {
  assessment: AppAssessment;
}
const DescribeAppAssessmentResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ assessment: AppAssessment }),
).annotate({
  identifier: "DescribeAppAssessmentResponse",
}) as any as S.Schema<DescribeAppAssessmentResponse>;
export interface DescribeAppVersionRequest {
  appArn: string;
  appVersion: string;
}
const DescribeAppVersionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String, appVersion: S.String }).pipe(
    T.all(T.Http({ method: "POST", uri: "/describe-app-version" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "DescribeAppVersionRequest",
}) as any as S.Schema<DescribeAppVersionRequest>;
export interface DescribeAppVersionResponse {
  appArn: string;
  appVersion: string;
  additionalInfo?: { [key: string]: string[] | undefined };
}
const DescribeAppVersionResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    appVersion: S.String,
    additionalInfo: S.optional(AdditionalInfoMap),
  }),
).annotate({
  identifier: "DescribeAppVersionResponse",
}) as any as S.Schema<DescribeAppVersionResponse>;
export interface DescribeAppVersionAppComponentRequest {
  appArn: string;
  appVersion: string;
  id: string;
}
const DescribeAppVersionAppComponentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String, appVersion: S.String, id: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/describe-app-version-app-component" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DescribeAppVersionAppComponentRequest",
}) as any as S.Schema<DescribeAppVersionAppComponentRequest>;
export interface DescribeAppVersionAppComponentResponse {
  appArn: string;
  appVersion: string;
  appComponent?: AppComponent;
}
const DescribeAppVersionAppComponentResponse =
  CreateAppVersionAppComponentResponse as any as S.Schema<DescribeAppVersionAppComponentResponse>;
export interface DescribeAppVersionResourceRequest {
  appArn: string;
  appVersion: string;
  resourceName?: string;
  logicalResourceId?: LogicalResourceId;
  physicalResourceId?: string;
  awsRegion?: string;
  awsAccountId?: string;
}
const DescribeAppVersionResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    appVersion: S.String,
    resourceName: S.optional(S.String),
    logicalResourceId: S.optional(LogicalResourceId),
    physicalResourceId: S.optional(S.String),
    awsRegion: S.optional(S.String),
    awsAccountId: S.optional(S.String),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/describe-app-version-resource" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DescribeAppVersionResourceRequest",
}) as any as S.Schema<DescribeAppVersionResourceRequest>;
export interface DescribeAppVersionResourceResponse {
  appArn: string;
  appVersion: string;
  physicalResource?: PhysicalResource;
}
const DescribeAppVersionResourceResponse =
  CreateAppVersionResourceResponse as any as S.Schema<DescribeAppVersionResourceResponse>;
export interface DescribeAppVersionResourcesResolutionStatusRequest {
  appArn: string;
  appVersion: string;
  resolutionId?: string;
}
const DescribeAppVersionResourcesResolutionStatusRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String, appVersion: S.String, resolutionId: S.optional(S.String) }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/describe-app-version-resources-resolution-status" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DescribeAppVersionResourcesResolutionStatusRequest",
}) as any as S.Schema<DescribeAppVersionResourcesResolutionStatusRequest>;
export type ResourceResolutionStatusType =
  | "Pending"
  | "InProgress"
  | "Failed"
  | "Success"
  | (string & {});
const ResourceResolutionStatusType = S.String;

export interface DescribeAppVersionResourcesResolutionStatusResponse {
  appArn: string;
  appVersion: string;
  resolutionId: string;
  status: ResourceResolutionStatusType;
  errorMessage?: string;
}
const DescribeAppVersionResourcesResolutionStatusResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    appVersion: S.String,
    resolutionId: S.String,
    status: ResourceResolutionStatusType,
    errorMessage: S.optional(S.String),
  }),
).annotate({
  identifier: "DescribeAppVersionResourcesResolutionStatusResponse",
}) as any as S.Schema<DescribeAppVersionResourcesResolutionStatusResponse>;
export interface DescribeAppVersionTemplateRequest {
  appArn: string;
  appVersion: string;
}
const DescribeAppVersionTemplateRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String, appVersion: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/describe-app-version-template" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DescribeAppVersionTemplateRequest",
}) as any as S.Schema<DescribeAppVersionTemplateRequest>;
export type AppTemplateBody = string;
export interface DescribeAppVersionTemplateResponse {
  appArn: string;
  appVersion: string;
  appTemplateBody: string;
}
const DescribeAppVersionTemplateResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String, appVersion: S.String, appTemplateBody: S.String }),
).annotate({
  identifier: "DescribeAppVersionTemplateResponse",
}) as any as S.Schema<DescribeAppVersionTemplateResponse>;
export interface DescribeDraftAppVersionResourcesImportStatusRequest {
  appArn: string;
}
const DescribeDraftAppVersionResourcesImportStatusRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/describe-draft-app-version-resources-import-status" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DescribeDraftAppVersionResourcesImportStatusRequest",
}) as any as S.Schema<DescribeDraftAppVersionResourcesImportStatusRequest>;
export type ResourceImportStatusType =
  | "Pending"
  | "InProgress"
  | "Failed"
  | "Success"
  | (string & {});
const ResourceImportStatusType = S.String;

export interface ErrorDetail {
  errorMessage?: string;
}
const ErrorDetail = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ errorMessage: S.optional(S.String) }),
).annotate({ identifier: "ErrorDetail" }) as any as S.Schema<ErrorDetail>;
export type ErrorDetailList = ErrorDetail[];
const ErrorDetailList = /*@__PURE__*/ S.Array(ErrorDetail);
export interface DescribeDraftAppVersionResourcesImportStatusResponse {
  appArn: string;
  appVersion: string;
  status: ResourceImportStatusType;
  statusChangeTime: Date;
  errorMessage?: string;
  errorDetails?: ErrorDetail[];
}
const DescribeDraftAppVersionResourcesImportStatusResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    appVersion: S.String,
    status: ResourceImportStatusType,
    statusChangeTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    errorMessage: S.optional(S.String),
    errorDetails: S.optional(ErrorDetailList),
  }),
).annotate({
  identifier: "DescribeDraftAppVersionResourcesImportStatusResponse",
}) as any as S.Schema<DescribeDraftAppVersionResourcesImportStatusResponse>;
export interface DescribeMetricsExportRequest {
  metricsExportId: string;
}
const DescribeMetricsExportRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ metricsExportId: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/describe-metrics-export" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DescribeMetricsExportRequest",
}) as any as S.Schema<DescribeMetricsExportRequest>;
export type MetricsExportStatusType =
  | "Pending"
  | "InProgress"
  | "Failed"
  | "Success"
  | (string & {});
const MetricsExportStatusType = S.String;

export interface DescribeMetricsExportResponse {
  metricsExportId: string;
  status: MetricsExportStatusType;
  exportLocation?: S3Location;
  errorMessage?: string;
}
const DescribeMetricsExportResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    metricsExportId: S.String,
    status: MetricsExportStatusType,
    exportLocation: S.optional(S3Location),
    errorMessage: S.optional(S.String),
  }),
).annotate({
  identifier: "DescribeMetricsExportResponse",
}) as any as S.Schema<DescribeMetricsExportResponse>;
export interface DescribeResiliencyPolicyRequest {
  policyArn: string;
}
const DescribeResiliencyPolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ policyArn: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/describe-resiliency-policy" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DescribeResiliencyPolicyRequest",
}) as any as S.Schema<DescribeResiliencyPolicyRequest>;
export interface DescribeResiliencyPolicyResponse {
  policy: ResiliencyPolicy;
}
const DescribeResiliencyPolicyResponse =
  CreateResiliencyPolicyResponse as any as S.Schema<DescribeResiliencyPolicyResponse>;
export interface DescribeResourceGroupingRecommendationTaskRequest {
  appArn: string;
  groupingId?: string;
}
const DescribeResourceGroupingRecommendationTaskRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String, groupingId: S.optional(S.String) }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/describe-resource-grouping-recommendation-task" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DescribeResourceGroupingRecommendationTaskRequest",
}) as any as S.Schema<DescribeResourceGroupingRecommendationTaskRequest>;
export type ResourcesGroupingRecGenStatusType =
  | "Pending"
  | "InProgress"
  | "Failed"
  | "Success"
  | (string & {});
const ResourcesGroupingRecGenStatusType = S.String;

export interface DescribeResourceGroupingRecommendationTaskResponse {
  groupingId: string;
  status: ResourcesGroupingRecGenStatusType;
  errorMessage?: string;
}
const DescribeResourceGroupingRecommendationTaskResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    groupingId: S.String,
    status: ResourcesGroupingRecGenStatusType,
    errorMessage: S.optional(S.String),
  }),
).annotate({
  identifier: "DescribeResourceGroupingRecommendationTaskResponse",
}) as any as S.Schema<DescribeResourceGroupingRecommendationTaskResponse>;
export type ArnList = string[];
const ArnList = IamRoleArnList as any as S.Schema<ArnList>;
export type TerraformSourceList = TerraformSource[];
const TerraformSourceList = /*@__PURE__*/ S.Array(TerraformSource);
export type ResourceImportStrategyType = "AddOnly" | "ReplaceAll" | (string & {});
const ResourceImportStrategyType = S.String;

export type EksNamespaceList = string[];
const EksNamespaceList = IamRoleArnList as any as S.Schema<EksNamespaceList>;
export interface EksSource {
  eksClusterArn: string;
  namespaces: string[];
}
const EksSource = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ eksClusterArn: S.String, namespaces: EksNamespaceList }),
).annotate({ identifier: "EksSource" }) as any as S.Schema<EksSource>;
export type EksSourceList = EksSource[];
const EksSourceList = /*@__PURE__*/ S.Array(EksSource);
export interface ImportResourcesToDraftAppVersionRequest {
  appArn: string;
  sourceArns?: string[];
  terraformSources?: TerraformSource[];
  importStrategy?: ResourceImportStrategyType;
  eksSources?: EksSource[];
}
const ImportResourcesToDraftAppVersionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    sourceArns: S.optional(ArnList),
    terraformSources: S.optional(TerraformSourceList),
    importStrategy: S.optional(ResourceImportStrategyType),
    eksSources: S.optional(EksSourceList),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/import-resources-to-draft-app-version" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ImportResourcesToDraftAppVersionRequest",
}) as any as S.Schema<ImportResourcesToDraftAppVersionRequest>;
export interface ImportResourcesToDraftAppVersionResponse {
  appArn: string;
  appVersion: string;
  sourceArns?: string[];
  status: ResourceImportStatusType;
  terraformSources?: TerraformSource[];
  eksSources?: EksSource[];
}
const ImportResourcesToDraftAppVersionResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    appVersion: S.String,
    sourceArns: S.optional(ArnList),
    status: ResourceImportStatusType,
    terraformSources: S.optional(TerraformSourceList),
    eksSources: S.optional(EksSourceList),
  }),
).annotate({
  identifier: "ImportResourcesToDraftAppVersionResponse",
}) as any as S.Schema<ImportResourcesToDraftAppVersionResponse>;
export type NextToken = string;
export type MaxResults = number;
export interface ListAlarmRecommendationsRequest {
  assessmentArn: string;
  nextToken?: string;
  maxResults?: number;
}
const ListAlarmRecommendationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assessmentArn: S.String,
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/list-alarm-recommendations" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListAlarmRecommendationsRequest",
}) as any as S.Schema<ListAlarmRecommendationsRequest>;
export type AlarmType = "Metric" | "Composite" | "Canary" | "Logs" | "Event" | (string & {});
const AlarmType = S.String;

export type EntityId = string;
export interface Experiment {
  experimentArn?: string;
  experimentTemplateId?: string;
}
const Experiment = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ experimentArn: S.optional(S.String), experimentTemplateId: S.optional(S.String) }),
).annotate({ identifier: "Experiment" }) as any as S.Schema<Experiment>;
export interface Alarm {
  alarmArn?: string;
  source?: string;
}
const Alarm = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ alarmArn: S.optional(S.String), source: S.optional(S.String) }),
).annotate({ identifier: "Alarm" }) as any as S.Schema<Alarm>;
export interface RecommendationItem {
  resourceId?: string;
  targetAccountId?: string;
  targetRegion?: string;
  alreadyImplemented?: boolean;
  excluded?: boolean;
  excludeReason?: ExcludeRecommendationReason;
  latestDiscoveredExperiment?: Experiment;
  discoveredAlarm?: Alarm;
}
const RecommendationItem = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceId: S.optional(S.String),
    targetAccountId: S.optional(S.String),
    targetRegion: S.optional(S.String),
    alreadyImplemented: S.optional(S.Boolean),
    excluded: S.optional(S.Boolean),
    excludeReason: S.optional(ExcludeRecommendationReason),
    latestDiscoveredExperiment: S.optional(Experiment),
    discoveredAlarm: S.optional(Alarm),
  }),
).annotate({ identifier: "RecommendationItem" }) as any as S.Schema<RecommendationItem>;
export type RecommendationItemList = RecommendationItem[];
const RecommendationItemList = /*@__PURE__*/ S.Array(RecommendationItem);
export type RecommendationStatus =
  | "Implemented"
  | "Inactive"
  | "NotImplemented"
  | "Excluded"
  | (string & {});
const RecommendationStatus = S.String;

export interface AlarmRecommendation {
  recommendationId: string;
  referenceId: string;
  name: string;
  description?: string;
  type: AlarmType;
  appComponentName?: string;
  items?: RecommendationItem[];
  prerequisite?: string;
  appComponentNames?: string[];
  recommendationStatus?: RecommendationStatus;
}
const AlarmRecommendation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    recommendationId: S.String,
    referenceId: S.String,
    name: S.String,
    description: S.optional(S.String),
    type: AlarmType,
    appComponentName: S.optional(S.String),
    items: S.optional(RecommendationItemList),
    prerequisite: S.optional(S.String),
    appComponentNames: S.optional(AppComponentNameList),
    recommendationStatus: S.optional(RecommendationStatus),
  }),
).annotate({ identifier: "AlarmRecommendation" }) as any as S.Schema<AlarmRecommendation>;
export type AlarmRecommendationList = AlarmRecommendation[];
const AlarmRecommendationList = /*@__PURE__*/ S.Array(AlarmRecommendation);
export interface ListAlarmRecommendationsResponse {
  alarmRecommendations: AlarmRecommendation[];
  nextToken?: string;
}
const ListAlarmRecommendationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ alarmRecommendations: AlarmRecommendationList, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListAlarmRecommendationsResponse",
}) as any as S.Schema<ListAlarmRecommendationsResponse>;
export interface ListAppAssessmentComplianceDriftsRequest {
  assessmentArn: string;
  nextToken?: string;
  maxResults?: number;
}
const ListAppAssessmentComplianceDriftsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assessmentArn: S.String,
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/list-app-assessment-compliance-drifts" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListAppAssessmentComplianceDriftsRequest",
}) as any as S.Schema<ListAppAssessmentComplianceDriftsRequest>;
export type DriftType =
  | "ApplicationCompliance"
  | "AppComponentResiliencyComplianceStatus"
  | (string & {});
const DriftType = S.String;

export type DifferenceType = "NotEqual" | "Added" | "Removed" | (string & {});
const DifferenceType = S.String;

export interface ComplianceDrift {
  entityId?: string;
  entityType?: string;
  driftType?: DriftType;
  appId?: string;
  appVersion?: string;
  expectedReferenceId?: string;
  expectedValue?: { [key: string]: DisruptionCompliance | undefined };
  actualReferenceId?: string;
  actualValue?: { [key: string]: DisruptionCompliance | undefined };
  diffType?: DifferenceType;
}
const ComplianceDrift = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    entityId: S.optional(S.String),
    entityType: S.optional(S.String),
    driftType: S.optional(DriftType),
    appId: S.optional(S.String),
    appVersion: S.optional(S.String),
    expectedReferenceId: S.optional(S.String),
    expectedValue: S.optional(AssessmentCompliance),
    actualReferenceId: S.optional(S.String),
    actualValue: S.optional(AssessmentCompliance),
    diffType: S.optional(DifferenceType),
  }),
).annotate({ identifier: "ComplianceDrift" }) as any as S.Schema<ComplianceDrift>;
export type ComplianceDriftList = ComplianceDrift[];
const ComplianceDriftList = /*@__PURE__*/ S.Array(ComplianceDrift);
export interface ListAppAssessmentComplianceDriftsResponse {
  complianceDrifts: ComplianceDrift[];
  nextToken?: string;
}
const ListAppAssessmentComplianceDriftsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ complianceDrifts: ComplianceDriftList, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListAppAssessmentComplianceDriftsResponse",
}) as any as S.Schema<ListAppAssessmentComplianceDriftsResponse>;
export interface ListAppAssessmentResourceDriftsRequest {
  assessmentArn: string;
  nextToken?: string;
  maxResults?: number;
}
const ListAppAssessmentResourceDriftsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assessmentArn: S.String,
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/list-app-assessment-resource-drifts" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListAppAssessmentResourceDriftsRequest",
}) as any as S.Schema<ListAppAssessmentResourceDriftsRequest>;
export interface ResourceIdentifier {
  logicalResourceId?: LogicalResourceId;
  resourceType?: string;
}
const ResourceIdentifier = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    logicalResourceId: S.optional(LogicalResourceId),
    resourceType: S.optional(S.String),
  }),
).annotate({ identifier: "ResourceIdentifier" }) as any as S.Schema<ResourceIdentifier>;
export interface ResourceDrift {
  appArn?: string;
  appVersion?: string;
  referenceId?: string;
  resourceIdentifier?: ResourceIdentifier;
  diffType?: DifferenceType;
}
const ResourceDrift = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.optional(S.String),
    appVersion: S.optional(S.String),
    referenceId: S.optional(S.String),
    resourceIdentifier: S.optional(ResourceIdentifier),
    diffType: S.optional(DifferenceType),
  }),
).annotate({ identifier: "ResourceDrift" }) as any as S.Schema<ResourceDrift>;
export type ResourceDriftList = ResourceDrift[];
const ResourceDriftList = /*@__PURE__*/ S.Array(ResourceDrift);
export interface ListAppAssessmentResourceDriftsResponse {
  resourceDrifts: ResourceDrift[];
  nextToken?: string;
}
const ListAppAssessmentResourceDriftsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceDrifts: ResourceDriftList, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListAppAssessmentResourceDriftsResponse",
}) as any as S.Schema<ListAppAssessmentResourceDriftsResponse>;
export type AssessmentStatusList = AssessmentStatus[];
const AssessmentStatusList = RenderRecommendationTypeList as any as S.Schema<AssessmentStatusList>;
export interface ListAppAssessmentsRequest {
  appArn?: string;
  assessmentName?: string;
  assessmentStatus?: AssessmentStatus[];
  complianceStatus?: ComplianceStatus;
  invoker?: AssessmentInvoker;
  reverseOrder?: boolean;
  nextToken?: string;
  maxResults?: number;
}
const ListAppAssessmentsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.optional(S.String).pipe(T.HttpQuery("appArn")),
    assessmentName: S.optional(S.String).pipe(T.HttpQuery("assessmentName")),
    assessmentStatus: S.optional(AssessmentStatusList).pipe(T.HttpQuery("assessmentStatus")),
    complianceStatus: S.optional(ComplianceStatus).pipe(T.HttpQuery("complianceStatus")),
    invoker: S.optional(AssessmentInvoker).pipe(T.HttpQuery("invoker")),
    reverseOrder: S.optional(S.Boolean).pipe(T.HttpQuery("reverseOrder")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.all(T.Http({ method: "GET", uri: "/list-app-assessments" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "ListAppAssessmentsRequest",
}) as any as S.Schema<ListAppAssessmentsRequest>;
export interface AppAssessmentSummary {
  appArn?: string;
  appVersion?: string;
  assessmentStatus: AssessmentStatus;
  invoker?: AssessmentInvoker;
  startTime?: Date;
  endTime?: Date;
  message?: string;
  assessmentName?: string;
  assessmentArn: string;
  complianceStatus?: ComplianceStatus;
  cost?: Cost;
  resiliencyScore?: number;
  versionName?: string;
  driftStatus?: DriftStatus;
}
const AppAssessmentSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.optional(S.String),
    appVersion: S.optional(S.String),
    assessmentStatus: AssessmentStatus,
    invoker: S.optional(AssessmentInvoker),
    startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    message: S.optional(S.String),
    assessmentName: S.optional(S.String),
    assessmentArn: S.String,
    complianceStatus: S.optional(ComplianceStatus),
    cost: S.optional(Cost),
    resiliencyScore: S.optional(S.Number),
    versionName: S.optional(S.String),
    driftStatus: S.optional(DriftStatus),
  }),
).annotate({ identifier: "AppAssessmentSummary" }) as any as S.Schema<AppAssessmentSummary>;
export type AppAssessmentSummaryList = AppAssessmentSummary[];
const AppAssessmentSummaryList = /*@__PURE__*/ S.Array(AppAssessmentSummary);
export interface ListAppAssessmentsResponse {
  nextToken?: string;
  assessmentSummaries: AppAssessmentSummary[];
}
const ListAppAssessmentsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ nextToken: S.optional(S.String), assessmentSummaries: AppAssessmentSummaryList }),
).annotate({
  identifier: "ListAppAssessmentsResponse",
}) as any as S.Schema<ListAppAssessmentsResponse>;
export interface ListAppComponentCompliancesRequest {
  nextToken?: string;
  maxResults?: number;
  assessmentArn: string;
}
const ListAppComponentCompliancesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
    assessmentArn: S.String,
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/list-app-component-compliances" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListAppComponentCompliancesRequest",
}) as any as S.Schema<ListAppComponentCompliancesRequest>;
export interface AppComponentCompliance {
  cost?: Cost;
  appComponentName?: string;
  compliance?: { [key: string]: DisruptionCompliance | undefined };
  message?: string;
  status?: ComplianceStatus;
  resiliencyScore?: ResiliencyScore;
}
const AppComponentCompliance = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    cost: S.optional(Cost),
    appComponentName: S.optional(S.String),
    compliance: S.optional(AssessmentCompliance),
    message: S.optional(S.String),
    status: S.optional(ComplianceStatus),
    resiliencyScore: S.optional(ResiliencyScore),
  }),
).annotate({ identifier: "AppComponentCompliance" }) as any as S.Schema<AppComponentCompliance>;
export type ComponentCompliancesList = AppComponentCompliance[];
const ComponentCompliancesList = /*@__PURE__*/ S.Array(AppComponentCompliance);
export interface ListAppComponentCompliancesResponse {
  componentCompliances: AppComponentCompliance[];
  nextToken?: string;
}
const ListAppComponentCompliancesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ componentCompliances: ComponentCompliancesList, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListAppComponentCompliancesResponse",
}) as any as S.Schema<ListAppComponentCompliancesResponse>;
export interface ListAppComponentRecommendationsRequest {
  assessmentArn: string;
  nextToken?: string;
  maxResults?: number;
}
const ListAppComponentRecommendationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assessmentArn: S.String,
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/list-app-component-recommendations" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListAppComponentRecommendationsRequest",
}) as any as S.Schema<ListAppComponentRecommendationsRequest>;
export type RecommendationComplianceStatus =
  | "BreachedUnattainable"
  | "BreachedCanMeet"
  | "MetCanImprove"
  | "MissingPolicy"
  | (string & {});
const RecommendationComplianceStatus = S.String;

export interface RecommendationDisruptionCompliance {
  expectedComplianceStatus: ComplianceStatus;
  expectedRtoInSecs?: number;
  expectedRtoDescription?: string;
  expectedRpoInSecs?: number;
  expectedRpoDescription?: string;
}
const RecommendationDisruptionCompliance = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    expectedComplianceStatus: ComplianceStatus,
    expectedRtoInSecs: S.optional(S.Number),
    expectedRtoDescription: S.optional(S.String),
    expectedRpoInSecs: S.optional(S.Number),
    expectedRpoDescription: S.optional(S.String),
  }),
).annotate({
  identifier: "RecommendationDisruptionCompliance",
}) as any as S.Schema<RecommendationDisruptionCompliance>;
export type RecommendationCompliance = {
  [key in DisruptionType]?: RecommendationDisruptionCompliance;
};
const RecommendationCompliance = /*@__PURE__*/ S.Record(
  DisruptionType,
  /*@__PURE__*/ RecommendationDisruptionCompliance.pipe(S.optional),
);
export type ConfigRecommendationOptimizationType =
  | "LeastCost"
  | "LeastChange"
  | "BestAZRecovery"
  | "LeastErrors"
  | "BestAttainable"
  | "BestRegionRecovery"
  | (string & {});
const ConfigRecommendationOptimizationType = S.String;

export type SuggestedChangesList = string[];
const SuggestedChangesList = IamRoleArnList as any as S.Schema<SuggestedChangesList>;
export type HaArchitecture =
  | "MultiSite"
  | "WarmStandby"
  | "PilotLight"
  | "BackupAndRestore"
  | "NoRecoveryPlan"
  | (string & {});
const HaArchitecture = S.String;

export interface ConfigRecommendation {
  cost?: Cost;
  appComponentName?: string;
  compliance?: { [key: string]: DisruptionCompliance | undefined };
  recommendationCompliance?: { [key: string]: RecommendationDisruptionCompliance | undefined };
  optimizationType: ConfigRecommendationOptimizationType;
  name: string;
  description?: string;
  suggestedChanges?: string[];
  haArchitecture?: HaArchitecture;
  referenceId: string;
}
const ConfigRecommendation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    cost: S.optional(Cost),
    appComponentName: S.optional(S.String),
    compliance: S.optional(AssessmentCompliance),
    recommendationCompliance: S.optional(RecommendationCompliance),
    optimizationType: ConfigRecommendationOptimizationType,
    name: S.String,
    description: S.optional(S.String),
    suggestedChanges: S.optional(SuggestedChangesList),
    haArchitecture: S.optional(HaArchitecture),
    referenceId: S.String,
  }),
).annotate({ identifier: "ConfigRecommendation" }) as any as S.Schema<ConfigRecommendation>;
export type ConfigRecommendationList = ConfigRecommendation[];
const ConfigRecommendationList = /*@__PURE__*/ S.Array(ConfigRecommendation);
export interface ComponentRecommendation {
  appComponentName: string;
  recommendationStatus: RecommendationComplianceStatus;
  configRecommendations: ConfigRecommendation[];
}
const ComponentRecommendation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appComponentName: S.String,
    recommendationStatus: RecommendationComplianceStatus,
    configRecommendations: ConfigRecommendationList,
  }),
).annotate({ identifier: "ComponentRecommendation" }) as any as S.Schema<ComponentRecommendation>;
export type ComponentRecommendationList = ComponentRecommendation[];
const ComponentRecommendationList = /*@__PURE__*/ S.Array(ComponentRecommendation);
export interface ListAppComponentRecommendationsResponse {
  componentRecommendations: ComponentRecommendation[];
  nextToken?: string;
}
const ListAppComponentRecommendationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    componentRecommendations: ComponentRecommendationList,
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListAppComponentRecommendationsResponse",
}) as any as S.Schema<ListAppComponentRecommendationsResponse>;
export interface ListAppInputSourcesRequest {
  appArn: string;
  appVersion: string;
  nextToken?: string;
  maxResults?: number;
}
const ListAppInputSourcesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    appVersion: S.String,
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/list-app-input-sources" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "ListAppInputSourcesRequest",
}) as any as S.Schema<ListAppInputSourcesRequest>;
export type AppInputSourceList = AppInputSource[];
const AppInputSourceList = /*@__PURE__*/ S.Array(AppInputSource);
export interface ListAppInputSourcesResponse {
  appInputSources: AppInputSource[];
  nextToken?: string;
}
const ListAppInputSourcesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appInputSources: AppInputSourceList, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListAppInputSourcesResponse",
}) as any as S.Schema<ListAppInputSourcesResponse>;
export interface ListAppsRequest {
  nextToken?: string;
  maxResults?: number;
  name?: string;
  appArn?: string;
  fromLastAssessmentTime?: Date;
  toLastAssessmentTime?: Date;
  reverseOrder?: boolean;
  awsApplicationArn?: string;
}
const ListAppsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
    name: S.optional(S.String).pipe(T.HttpQuery("name")),
    appArn: S.optional(S.String).pipe(T.HttpQuery("appArn")),
    fromLastAssessmentTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
      T.HttpQuery("fromLastAssessmentTime"),
    ),
    toLastAssessmentTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))).pipe(
      T.HttpQuery("toLastAssessmentTime"),
    ),
    reverseOrder: S.optional(S.Boolean).pipe(T.HttpQuery("reverseOrder")),
    awsApplicationArn: S.optional(S.String).pipe(T.HttpQuery("awsApplicationArn")),
  }).pipe(T.all(T.Http({ method: "GET", uri: "/list-apps" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListAppsRequest" }) as any as S.Schema<ListAppsRequest>;
export interface AppSummary {
  appArn: string;
  name: string;
  description?: string;
  creationTime: Date;
  complianceStatus?: AppComplianceStatusType;
  resiliencyScore?: number;
  assessmentSchedule?: AppAssessmentScheduleType;
  status?: AppStatusType;
  driftStatus?: AppDriftStatusType;
  lastAppComplianceEvaluationTime?: Date;
  rtoInSecs?: number;
  rpoInSecs?: number;
  awsApplicationArn?: string;
}
const AppSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    name: S.String,
    description: S.optional(S.String),
    creationTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    complianceStatus: S.optional(AppComplianceStatusType),
    resiliencyScore: S.optional(S.Number),
    assessmentSchedule: S.optional(AppAssessmentScheduleType),
    status: S.optional(AppStatusType),
    driftStatus: S.optional(AppDriftStatusType),
    lastAppComplianceEvaluationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    rtoInSecs: S.optional(S.Number),
    rpoInSecs: S.optional(S.Number),
    awsApplicationArn: S.optional(S.String),
  }),
).annotate({ identifier: "AppSummary" }) as any as S.Schema<AppSummary>;
export type AppSummaryList = AppSummary[];
const AppSummaryList = /*@__PURE__*/ S.Array(AppSummary);
export interface ListAppsResponse {
  appSummaries: AppSummary[];
  nextToken?: string;
}
const ListAppsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appSummaries: AppSummaryList, nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListAppsResponse" }) as any as S.Schema<ListAppsResponse>;
export interface ListAppVersionAppComponentsRequest {
  appArn: string;
  appVersion: string;
  nextToken?: string;
  maxResults?: number;
}
const ListAppVersionAppComponentsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    appVersion: S.String,
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/list-app-version-app-components" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListAppVersionAppComponentsRequest",
}) as any as S.Schema<ListAppVersionAppComponentsRequest>;
export interface ListAppVersionAppComponentsResponse {
  appArn: string;
  appVersion: string;
  appComponents?: AppComponent[];
  nextToken?: string;
}
const ListAppVersionAppComponentsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    appVersion: S.String,
    appComponents: S.optional(AppComponentList),
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListAppVersionAppComponentsResponse",
}) as any as S.Schema<ListAppVersionAppComponentsResponse>;
export interface ListAppVersionResourceMappingsRequest {
  appArn: string;
  appVersion: string;
  nextToken?: string;
  maxResults?: number;
}
const ListAppVersionResourceMappingsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    appVersion: S.String,
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/list-app-version-resource-mappings" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListAppVersionResourceMappingsRequest",
}) as any as S.Schema<ListAppVersionResourceMappingsRequest>;
export interface ListAppVersionResourceMappingsResponse {
  resourceMappings: ResourceMapping[];
  nextToken?: string;
}
const ListAppVersionResourceMappingsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resourceMappings: ResourceMappingList, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListAppVersionResourceMappingsResponse",
}) as any as S.Schema<ListAppVersionResourceMappingsResponse>;
export interface ListAppVersionResourcesRequest {
  appArn: string;
  appVersion: string;
  resolutionId?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListAppVersionResourcesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    appVersion: S.String,
    resolutionId: S.optional(S.String),
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/list-app-version-resources" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListAppVersionResourcesRequest",
}) as any as S.Schema<ListAppVersionResourcesRequest>;
export type PhysicalResourceList = PhysicalResource[];
const PhysicalResourceList = /*@__PURE__*/ S.Array(PhysicalResource);
export interface ListAppVersionResourcesResponse {
  physicalResources: PhysicalResource[];
  resolutionId: string;
  nextToken?: string;
}
const ListAppVersionResourcesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    physicalResources: PhysicalResourceList,
    resolutionId: S.String,
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListAppVersionResourcesResponse",
}) as any as S.Schema<ListAppVersionResourcesResponse>;
export interface ListAppVersionsRequest {
  appArn: string;
  nextToken?: string;
  maxResults?: number;
  startTime?: Date;
  endTime?: Date;
}
const ListAppVersionsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
    startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/list-app-versions" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "ListAppVersionsRequest" }) as any as S.Schema<ListAppVersionsRequest>;
export interface AppVersionSummary {
  appVersion: string;
  identifier?: number;
  creationTime?: Date;
  versionName?: string;
}
const AppVersionSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appVersion: S.String,
    identifier: S.optional(S.Number),
    creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
    versionName: S.optional(S.String),
  }),
).annotate({ identifier: "AppVersionSummary" }) as any as S.Schema<AppVersionSummary>;
export type AppVersionList = AppVersionSummary[];
const AppVersionList = /*@__PURE__*/ S.Array(AppVersionSummary);
export interface ListAppVersionsResponse {
  appVersions: AppVersionSummary[];
  nextToken?: string;
}
const ListAppVersionsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appVersions: AppVersionList, nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListAppVersionsResponse" }) as any as S.Schema<ListAppVersionsResponse>;
export type FieldAggregationType = "Min" | "Max" | "Sum" | "Avg" | "Count" | (string & {});
const FieldAggregationType = S.String;

export interface Field {
  name: string;
  aggregation?: FieldAggregationType;
}
const Field = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.String, aggregation: S.optional(FieldAggregationType) }),
).annotate({ identifier: "Field" }) as any as S.Schema<Field>;
export type FieldList = Field[];
const FieldList = /*@__PURE__*/ S.Array(Field);
export type ConditionOperatorType =
  | "Equals"
  | "NotEquals"
  | "GreaterThen"
  | "GreaterOrEquals"
  | "LessThen"
  | "LessOrEquals"
  | (string & {});
const ConditionOperatorType = S.String;

export interface Condition {
  field: string;
  operator: ConditionOperatorType;
  value?: string;
}
const Condition = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ field: S.String, operator: ConditionOperatorType, value: S.optional(S.String) }),
).annotate({ identifier: "Condition" }) as any as S.Schema<Condition>;
export type ConditionList = Condition[];
const ConditionList = /*@__PURE__*/ S.Array(Condition);
export interface Sort {
  field: string;
  ascending?: boolean;
}
const Sort = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ field: S.String, ascending: S.optional(S.Boolean) }),
).annotate({ identifier: "Sort" }) as any as S.Schema<Sort>;
export type SortList = Sort[];
const SortList = /*@__PURE__*/ S.Array(Sort);
export interface ListMetricsRequest {
  nextToken?: string;
  maxResults?: number;
  fields?: Field[];
  dataSource?: string;
  conditions?: Condition[];
  sorts?: Sort[];
}
const ListMetricsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
    fields: S.optional(FieldList),
    dataSource: S.optional(S.String),
    conditions: S.optional(ConditionList),
    sorts: S.optional(SortList),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/list-metrics" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "ListMetricsRequest" }) as any as S.Schema<ListMetricsRequest>;
export type Row = string[];
const Row = IamRoleArnList as any as S.Schema<Row>;
export type RowList = string[][];
const RowList = /*@__PURE__*/ S.Array(Row);
export interface ListMetricsResponse {
  rows: string[][];
  nextToken?: string;
}
const ListMetricsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ rows: RowList, nextToken: S.optional(S.String) }),
).annotate({ identifier: "ListMetricsResponse" }) as any as S.Schema<ListMetricsResponse>;
export type RecommendationTemplateStatusList = RecommendationTemplateStatus[];
const RecommendationTemplateStatusList =
  RenderRecommendationTypeList as any as S.Schema<RecommendationTemplateStatusList>;
export interface ListRecommendationTemplatesRequest {
  assessmentArn?: string;
  reverseOrder?: boolean;
  status?: RecommendationTemplateStatus[];
  recommendationTemplateArn?: string;
  name?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListRecommendationTemplatesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    assessmentArn: S.optional(S.String).pipe(T.HttpQuery("assessmentArn")),
    reverseOrder: S.optional(S.Boolean).pipe(T.HttpQuery("reverseOrder")),
    status: S.optional(RecommendationTemplateStatusList).pipe(T.HttpQuery("status")),
    recommendationTemplateArn: S.optional(S.String).pipe(T.HttpQuery("recommendationTemplateArn")),
    name: S.optional(S.String).pipe(T.HttpQuery("name")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/list-recommendation-templates" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListRecommendationTemplatesRequest",
}) as any as S.Schema<ListRecommendationTemplatesRequest>;
export type RecommendationTemplateList = RecommendationTemplate[];
const RecommendationTemplateList = /*@__PURE__*/ S.Array(RecommendationTemplate);
export interface ListRecommendationTemplatesResponse {
  nextToken?: string;
  recommendationTemplates?: RecommendationTemplate[];
}
const ListRecommendationTemplatesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String),
    recommendationTemplates: S.optional(RecommendationTemplateList),
  }),
).annotate({
  identifier: "ListRecommendationTemplatesResponse",
}) as any as S.Schema<ListRecommendationTemplatesResponse>;
export interface ListResiliencyPoliciesRequest {
  policyName?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListResiliencyPoliciesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    policyName: S.optional(S.String).pipe(T.HttpQuery("policyName")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/list-resiliency-policies" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListResiliencyPoliciesRequest",
}) as any as S.Schema<ListResiliencyPoliciesRequest>;
export type ResiliencyPolicies = ResiliencyPolicy[];
const ResiliencyPolicies = /*@__PURE__*/ S.Array(ResiliencyPolicy);
export interface ListResiliencyPoliciesResponse {
  resiliencyPolicies: ResiliencyPolicy[];
  nextToken?: string;
}
const ListResiliencyPoliciesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ resiliencyPolicies: ResiliencyPolicies, nextToken: S.optional(S.String) }),
).annotate({
  identifier: "ListResiliencyPoliciesResponse",
}) as any as S.Schema<ListResiliencyPoliciesResponse>;
export interface ListResourceGroupingRecommendationsRequest {
  appArn?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListResourceGroupingRecommendationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.optional(S.String).pipe(T.HttpQuery("appArn")),
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/list-resource-grouping-recommendations" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListResourceGroupingRecommendationsRequest",
}) as any as S.Schema<ListResourceGroupingRecommendationsRequest>;
export interface GroupingAppComponent {
  appComponentId: string;
  appComponentType: string;
  appComponentName: string;
}
const GroupingAppComponent = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appComponentId: S.String, appComponentType: S.String, appComponentName: S.String }),
).annotate({ identifier: "GroupingAppComponent" }) as any as S.Schema<GroupingAppComponent>;
export type String255List = string[];
const String255List = IamRoleArnList as any as S.Schema<String255List>;
export interface GroupingResource {
  resourceName: string;
  resourceType: string;
  physicalResourceId: PhysicalResourceId;
  logicalResourceId: LogicalResourceId;
  sourceAppComponentIds: string[];
}
const GroupingResource = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceName: S.String,
    resourceType: S.String,
    physicalResourceId: PhysicalResourceId,
    logicalResourceId: LogicalResourceId,
    sourceAppComponentIds: String255List,
  }),
).annotate({ identifier: "GroupingResource" }) as any as S.Schema<GroupingResource>;
export type GroupingResourceList = GroupingResource[];
const GroupingResourceList = /*@__PURE__*/ S.Array(GroupingResource);
export type GroupingRecommendationStatusType =
  | "Accepted"
  | "Rejected"
  | "PendingDecision"
  | (string & {});
const GroupingRecommendationStatusType = S.String;

export type GroupingRecommendationConfidenceLevel = "High" | "Medium" | (string & {});
const GroupingRecommendationConfidenceLevel = S.String;

export type GroupingRecommendationRejectionReason =
  | "DistinctBusinessPurpose"
  | "SeparateDataConcern"
  | "DistinctUserGroupHandling"
  | "Other"
  | (string & {});
const GroupingRecommendationRejectionReason = S.String;

export interface GroupingRecommendation {
  groupingRecommendationId: string;
  groupingAppComponent: GroupingAppComponent;
  resources: GroupingResource[];
  score: number;
  recommendationReasons: string[];
  status: GroupingRecommendationStatusType;
  confidenceLevel: GroupingRecommendationConfidenceLevel;
  creationTime: Date;
  rejectionReason?: GroupingRecommendationRejectionReason;
}
const GroupingRecommendation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    groupingRecommendationId: S.String,
    groupingAppComponent: GroupingAppComponent,
    resources: GroupingResourceList,
    score: S.Number,
    recommendationReasons: String255List,
    status: GroupingRecommendationStatusType,
    confidenceLevel: GroupingRecommendationConfidenceLevel,
    creationTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
    rejectionReason: S.optional(GroupingRecommendationRejectionReason),
  }),
).annotate({ identifier: "GroupingRecommendation" }) as any as S.Schema<GroupingRecommendation>;
export type GroupingRecommendationList = GroupingRecommendation[];
const GroupingRecommendationList = /*@__PURE__*/ S.Array(GroupingRecommendation);
export interface ListResourceGroupingRecommendationsResponse {
  groupingRecommendations: GroupingRecommendation[];
  nextToken?: string;
}
const ListResourceGroupingRecommendationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    groupingRecommendations: GroupingRecommendationList,
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListResourceGroupingRecommendationsResponse",
}) as any as S.Schema<ListResourceGroupingRecommendationsResponse>;
export interface ListSopRecommendationsRequest {
  nextToken?: string;
  maxResults?: number;
  assessmentArn: string;
}
const ListSopRecommendationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
    assessmentArn: S.String,
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/list-sop-recommendations" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListSopRecommendationsRequest",
}) as any as S.Schema<ListSopRecommendationsRequest>;
export type SopServiceType = "SSM" | (string & {});
const SopServiceType = S.String;

export type DocumentName = string;
export interface SopRecommendation {
  serviceType: SopServiceType;
  appComponentName?: string;
  description?: string;
  recommendationId: string;
  name?: string;
  items?: RecommendationItem[];
  referenceId: string;
  prerequisite?: string;
  recommendationStatus?: RecommendationStatus;
}
const SopRecommendation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    serviceType: SopServiceType,
    appComponentName: S.optional(S.String),
    description: S.optional(S.String),
    recommendationId: S.String,
    name: S.optional(S.String),
    items: S.optional(RecommendationItemList),
    referenceId: S.String,
    prerequisite: S.optional(S.String),
    recommendationStatus: S.optional(RecommendationStatus),
  }),
).annotate({ identifier: "SopRecommendation" }) as any as S.Schema<SopRecommendation>;
export type SopRecommendationList = SopRecommendation[];
const SopRecommendationList = /*@__PURE__*/ S.Array(SopRecommendation);
export interface ListSopRecommendationsResponse {
  nextToken?: string;
  sopRecommendations: SopRecommendation[];
}
const ListSopRecommendationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ nextToken: S.optional(S.String), sopRecommendations: SopRecommendationList }),
).annotate({
  identifier: "ListSopRecommendationsResponse",
}) as any as S.Schema<ListSopRecommendationsResponse>;
export interface ListSuggestedResiliencyPoliciesRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListSuggestedResiliencyPoliciesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
    maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
  }).pipe(
    T.all(
      T.Http({ method: "GET", uri: "/list-suggested-resiliency-policies" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListSuggestedResiliencyPoliciesRequest",
}) as any as S.Schema<ListSuggestedResiliencyPoliciesRequest>;
export interface ListSuggestedResiliencyPoliciesResponse {
  resiliencyPolicies: ResiliencyPolicy[];
  nextToken?: string;
}
const ListSuggestedResiliencyPoliciesResponse =
  ListResiliencyPoliciesResponse as any as S.Schema<ListSuggestedResiliencyPoliciesResponse>;
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
export interface ListTestRecommendationsRequest {
  nextToken?: string;
  maxResults?: number;
  assessmentArn: string;
}
const ListTestRecommendationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
    assessmentArn: S.String,
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/list-test-recommendations" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListTestRecommendationsRequest",
}) as any as S.Schema<ListTestRecommendationsRequest>;
export type TestRisk = "Small" | "Medium" | "High" | (string & {});
const TestRisk = S.String;

export type TestType = "Software" | "Hardware" | "AZ" | "Region" | (string & {});
const TestType = S.String;

export type AlarmReferenceIdList = string[];
const AlarmReferenceIdList = IamRoleArnList as any as S.Schema<AlarmReferenceIdList>;
export interface TestRecommendation {
  recommendationId?: string;
  referenceId: string;
  appComponentId?: string;
  appComponentName?: string;
  name?: string;
  intent?: string;
  risk?: TestRisk;
  type?: TestType;
  description?: string;
  items?: RecommendationItem[];
  prerequisite?: string;
  dependsOnAlarms?: string[];
  recommendationStatus?: RecommendationStatus;
}
const TestRecommendation = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    recommendationId: S.optional(S.String),
    referenceId: S.String,
    appComponentId: S.optional(S.String),
    appComponentName: S.optional(S.String),
    name: S.optional(S.String),
    intent: S.optional(S.String),
    risk: S.optional(TestRisk),
    type: S.optional(TestType),
    description: S.optional(S.String),
    items: S.optional(RecommendationItemList),
    prerequisite: S.optional(S.String),
    dependsOnAlarms: S.optional(AlarmReferenceIdList),
    recommendationStatus: S.optional(RecommendationStatus),
  }),
).annotate({ identifier: "TestRecommendation" }) as any as S.Schema<TestRecommendation>;
export type TestRecommendationList = TestRecommendation[];
const TestRecommendationList = /*@__PURE__*/ S.Array(TestRecommendation);
export interface ListTestRecommendationsResponse {
  nextToken?: string;
  testRecommendations: TestRecommendation[];
}
const ListTestRecommendationsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ nextToken: S.optional(S.String), testRecommendations: TestRecommendationList }),
).annotate({
  identifier: "ListTestRecommendationsResponse",
}) as any as S.Schema<ListTestRecommendationsResponse>;
export interface ListUnsupportedAppVersionResourcesRequest {
  appArn: string;
  appVersion: string;
  resolutionId?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListUnsupportedAppVersionResourcesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    appVersion: S.String,
    resolutionId: S.optional(S.String),
    nextToken: S.optional(S.String),
    maxResults: S.optional(S.Number),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/list-unsupported-app-version-resources" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListUnsupportedAppVersionResourcesRequest",
}) as any as S.Schema<ListUnsupportedAppVersionResourcesRequest>;
export interface UnsupportedResource {
  logicalResourceId: LogicalResourceId;
  physicalResourceId: PhysicalResourceId;
  resourceType: string;
  unsupportedResourceStatus?: string;
}
const UnsupportedResource = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    logicalResourceId: LogicalResourceId,
    physicalResourceId: PhysicalResourceId,
    resourceType: S.String,
    unsupportedResourceStatus: S.optional(S.String),
  }),
).annotate({ identifier: "UnsupportedResource" }) as any as S.Schema<UnsupportedResource>;
export type UnsupportedResourceList = UnsupportedResource[];
const UnsupportedResourceList = /*@__PURE__*/ S.Array(UnsupportedResource);
export interface ListUnsupportedAppVersionResourcesResponse {
  unsupportedResources: UnsupportedResource[];
  resolutionId: string;
  nextToken?: string;
}
const ListUnsupportedAppVersionResourcesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    unsupportedResources: UnsupportedResourceList,
    resolutionId: S.String,
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListUnsupportedAppVersionResourcesResponse",
}) as any as S.Schema<ListUnsupportedAppVersionResourcesResponse>;
export interface PublishAppVersionRequest {
  appArn: string;
  versionName?: string;
}
const PublishAppVersionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String, versionName: S.optional(S.String) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/publish-app-version" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "PublishAppVersionRequest" }) as any as S.Schema<PublishAppVersionRequest>;
export interface PublishAppVersionResponse {
  appArn: string;
  appVersion?: string;
  identifier?: number;
  versionName?: string;
}
const PublishAppVersionResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    appVersion: S.optional(S.String),
    identifier: S.optional(S.Number),
    versionName: S.optional(S.String),
  }),
).annotate({
  identifier: "PublishAppVersionResponse",
}) as any as S.Schema<PublishAppVersionResponse>;
export interface PutDraftAppVersionTemplateRequest {
  appArn: string;
  appTemplateBody: string;
}
const PutDraftAppVersionTemplateRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String, appTemplateBody: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/put-draft-app-version-template" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "PutDraftAppVersionTemplateRequest",
}) as any as S.Schema<PutDraftAppVersionTemplateRequest>;
export interface PutDraftAppVersionTemplateResponse {
  appArn?: string;
  appVersion?: string;
}
const PutDraftAppVersionTemplateResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.optional(S.String), appVersion: S.optional(S.String) }),
).annotate({
  identifier: "PutDraftAppVersionTemplateResponse",
}) as any as S.Schema<PutDraftAppVersionTemplateResponse>;
export interface RejectGroupingRecommendationEntry {
  groupingRecommendationId: string;
  rejectionReason?: GroupingRecommendationRejectionReason;
}
const RejectGroupingRecommendationEntry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    groupingRecommendationId: S.String,
    rejectionReason: S.optional(GroupingRecommendationRejectionReason),
  }),
).annotate({
  identifier: "RejectGroupingRecommendationEntry",
}) as any as S.Schema<RejectGroupingRecommendationEntry>;
export type RejectGroupingRecommendationEntries = RejectGroupingRecommendationEntry[];
const RejectGroupingRecommendationEntries = /*@__PURE__*/ S.Array(
  RejectGroupingRecommendationEntry,
);
export interface RejectResourceGroupingRecommendationsRequest {
  appArn: string;
  entries: RejectGroupingRecommendationEntry[];
}
const RejectResourceGroupingRecommendationsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String, entries: RejectGroupingRecommendationEntries }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/reject-resource-grouping-recommendations" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "RejectResourceGroupingRecommendationsRequest",
}) as any as S.Schema<RejectResourceGroupingRecommendationsRequest>;
export interface RejectResourceGroupingRecommendationsResponse {
  appArn: string;
  failedEntries: FailedGroupingRecommendationEntry[];
}
const RejectResourceGroupingRecommendationsResponse =
  AcceptResourceGroupingRecommendationsResponse as any as S.Schema<RejectResourceGroupingRecommendationsResponse>;
export type EntityNameList = string[];
const EntityNameList = IamRoleArnList as any as S.Schema<EntityNameList>;
export interface RemoveDraftAppVersionResourceMappingsRequest {
  appArn: string;
  resourceNames?: string[];
  logicalStackNames?: string[];
  appRegistryAppNames?: string[];
  resourceGroupNames?: string[];
  terraformSourceNames?: string[];
  eksSourceNames?: string[];
}
const RemoveDraftAppVersionResourceMappingsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    resourceNames: S.optional(EntityNameList),
    logicalStackNames: S.optional(String255List),
    appRegistryAppNames: S.optional(EntityNameList),
    resourceGroupNames: S.optional(EntityNameList),
    terraformSourceNames: S.optional(String255List),
    eksSourceNames: S.optional(String255List),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/remove-draft-app-version-resource-mappings" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "RemoveDraftAppVersionResourceMappingsRequest",
}) as any as S.Schema<RemoveDraftAppVersionResourceMappingsRequest>;
export interface RemoveDraftAppVersionResourceMappingsResponse {
  appArn?: string;
  appVersion?: string;
}
const RemoveDraftAppVersionResourceMappingsResponse =
  PutDraftAppVersionTemplateResponse as any as S.Schema<RemoveDraftAppVersionResourceMappingsResponse>;
export interface ResolveAppVersionResourcesRequest {
  appArn: string;
  appVersion: string;
}
const ResolveAppVersionResourcesRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String, appVersion: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/resolve-app-version-resources" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ResolveAppVersionResourcesRequest",
}) as any as S.Schema<ResolveAppVersionResourcesRequest>;
export interface ResolveAppVersionResourcesResponse {
  appArn: string;
  appVersion: string;
  resolutionId: string;
  status: ResourceResolutionStatusType;
}
const ResolveAppVersionResourcesResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    appVersion: S.String,
    resolutionId: S.String,
    status: ResourceResolutionStatusType,
  }),
).annotate({
  identifier: "ResolveAppVersionResourcesResponse",
}) as any as S.Schema<ResolveAppVersionResourcesResponse>;
export interface StartAppAssessmentRequest {
  appArn: string;
  appVersion: string;
  assessmentName: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const StartAppAssessmentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    appVersion: S.String,
    assessmentName: S.String,
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
    tags: S.optional(TagMap),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/start-app-assessment" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "StartAppAssessmentRequest",
}) as any as S.Schema<StartAppAssessmentRequest>;
export interface StartAppAssessmentResponse {
  assessment: AppAssessment;
}
const StartAppAssessmentResponse =
  DescribeAppAssessmentResponse as any as S.Schema<StartAppAssessmentResponse>;
export interface StartMetricsExportRequest {
  bucketName?: string;
  clientToken?: string;
}
const StartMetricsExportRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    bucketName: S.optional(S.String),
    clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
  }).pipe(
    T.all(T.Http({ method: "POST", uri: "/start-metrics-export" }), svc, auth, proto, ver, rules),
  ),
).annotate({
  identifier: "StartMetricsExportRequest",
}) as any as S.Schema<StartMetricsExportRequest>;
export interface StartMetricsExportResponse {
  metricsExportId: string;
  status: MetricsExportStatusType;
}
const StartMetricsExportResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ metricsExportId: S.String, status: MetricsExportStatusType }),
).annotate({
  identifier: "StartMetricsExportResponse",
}) as any as S.Schema<StartMetricsExportResponse>;
export interface StartResourceGroupingRecommendationTaskRequest {
  appArn: string;
}
const StartResourceGroupingRecommendationTaskRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/start-resource-grouping-recommendation-task" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "StartResourceGroupingRecommendationTaskRequest",
}) as any as S.Schema<StartResourceGroupingRecommendationTaskRequest>;
export interface StartResourceGroupingRecommendationTaskResponse {
  appArn: string;
  groupingId: string;
  status: ResourcesGroupingRecGenStatusType;
  errorMessage?: string;
}
const StartResourceGroupingRecommendationTaskResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    groupingId: S.String,
    status: ResourcesGroupingRecGenStatusType,
    errorMessage: S.optional(S.String),
  }),
).annotate({
  identifier: "StartResourceGroupingRecommendationTaskResponse",
}) as any as S.Schema<StartResourceGroupingRecommendationTaskResponse>;
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
const TagKeyList = IamRoleArnList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
    tagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
  }).pipe(
    T.all(T.Http({ method: "DELETE", uri: "/tags/{resourceArn}" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "UntagResourceRequest" }) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = TagResourceResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateAppRequest {
  appArn: string;
  description?: string;
  policyArn?: string;
  clearResiliencyPolicyArn?: boolean;
  assessmentSchedule?: AppAssessmentScheduleType;
  permissionModel?: PermissionModel;
  eventSubscriptions?: EventSubscription[];
}
const UpdateAppRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    description: S.optional(S.String),
    policyArn: S.optional(S.String),
    clearResiliencyPolicyArn: S.optional(S.Boolean),
    assessmentSchedule: S.optional(AppAssessmentScheduleType),
    permissionModel: S.optional(PermissionModel),
    eventSubscriptions: S.optional(EventSubscriptionList),
  }).pipe(T.all(T.Http({ method: "POST", uri: "/update-app" }), svc, auth, proto, ver, rules)),
).annotate({ identifier: "UpdateAppRequest" }) as any as S.Schema<UpdateAppRequest>;
export interface UpdateAppResponse {
  app: App;
}
const UpdateAppResponse = CreateAppResponse as any as S.Schema<UpdateAppResponse>;
export interface UpdateAppVersionRequest {
  appArn: string;
  additionalInfo?: { [key: string]: string[] | undefined };
}
const UpdateAppVersionRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ appArn: S.String, additionalInfo: S.optional(AdditionalInfoMap) }).pipe(
    T.all(T.Http({ method: "POST", uri: "/update-app-version" }), svc, auth, proto, ver, rules),
  ),
).annotate({ identifier: "UpdateAppVersionRequest" }) as any as S.Schema<UpdateAppVersionRequest>;
export interface UpdateAppVersionResponse {
  appArn: string;
  appVersion: string;
  additionalInfo?: { [key: string]: string[] | undefined };
}
const UpdateAppVersionResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    appVersion: S.String,
    additionalInfo: S.optional(AdditionalInfoMap),
  }),
).annotate({ identifier: "UpdateAppVersionResponse" }) as any as S.Schema<UpdateAppVersionResponse>;
export interface UpdateAppVersionAppComponentRequest {
  appArn: string;
  id: string;
  name?: string;
  type?: string;
  additionalInfo?: { [key: string]: string[] | undefined };
}
const UpdateAppVersionAppComponentRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    id: S.String,
    name: S.optional(S.String),
    type: S.optional(S.String),
    additionalInfo: S.optional(AdditionalInfoMap),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/update-app-version-app-component" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateAppVersionAppComponentRequest",
}) as any as S.Schema<UpdateAppVersionAppComponentRequest>;
export interface UpdateAppVersionAppComponentResponse {
  appArn: string;
  appVersion: string;
  appComponent?: AppComponent;
}
const UpdateAppVersionAppComponentResponse =
  CreateAppVersionAppComponentResponse as any as S.Schema<UpdateAppVersionAppComponentResponse>;
export interface UpdateAppVersionResourceRequest {
  appArn: string;
  resourceName?: string;
  logicalResourceId?: LogicalResourceId;
  physicalResourceId?: string;
  awsRegion?: string;
  awsAccountId?: string;
  resourceType?: string;
  appComponents?: string[];
  additionalInfo?: { [key: string]: string[] | undefined };
  excluded?: boolean;
}
const UpdateAppVersionResourceRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    appArn: S.String,
    resourceName: S.optional(S.String),
    logicalResourceId: S.optional(LogicalResourceId),
    physicalResourceId: S.optional(S.String),
    awsRegion: S.optional(S.String),
    awsAccountId: S.optional(S.String),
    resourceType: S.optional(S.String),
    appComponents: S.optional(AppComponentNameList),
    additionalInfo: S.optional(AdditionalInfoMap),
    excluded: S.optional(S.Boolean),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/update-app-version-resource" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateAppVersionResourceRequest",
}) as any as S.Schema<UpdateAppVersionResourceRequest>;
export interface UpdateAppVersionResourceResponse {
  appArn: string;
  appVersion: string;
  physicalResource?: PhysicalResource;
}
const UpdateAppVersionResourceResponse =
  CreateAppVersionResourceResponse as any as S.Schema<UpdateAppVersionResourceResponse>;
export interface UpdateResiliencyPolicyRequest {
  policyArn: string;
  policyName?: string;
  policyDescription?: string;
  dataLocationConstraint?: DataLocationConstraint;
  tier?: ResiliencyPolicyTier;
  policy?: { [key: string]: FailurePolicy | undefined };
}
const UpdateResiliencyPolicyRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    policyArn: S.String,
    policyName: S.optional(S.String),
    policyDescription: S.optional(S.String),
    dataLocationConstraint: S.optional(DataLocationConstraint),
    tier: S.optional(ResiliencyPolicyTier),
    policy: S.optional(DisruptionPolicy),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/update-resiliency-policy" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "UpdateResiliencyPolicyRequest",
}) as any as S.Schema<UpdateResiliencyPolicyRequest>;
export interface UpdateResiliencyPolicyResponse {
  policy: ResiliencyPolicy;
}
const UpdateResiliencyPolicyResponse =
  CreateResiliencyPolicyResponse as any as S.Schema<UpdateResiliencyPolicyResponse>;
export type ResourceId = string;
export type ResourceType = string;
export type RetryAfterSeconds = number;
export type AcceptResourceGroupingRecommendationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Accepts the resource grouping recommendations suggested by Resilience Hub for your application.
 */
export const acceptResourceGroupingRecommendations: API.OperationMethod<
  AcceptResourceGroupingRecommendationsRequest,
  AcceptResourceGroupingRecommendationsResponse,
  AcceptResourceGroupingRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AcceptResourceGroupingRecommendationsRequest,
  output: AcceptResourceGroupingRecommendationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptResourceGroupingRecommendations",
}));

export type AddDraftAppVersionResourceMappingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds the source of resource-maps to the draft version of an application. During
 * assessment, Resilience Hub will use these resource-maps to resolve the latest physical
 * ID for each resource in the application template. For more information about different types
 * of resources supported by Resilience Hub and how to add them in your application, see
 * Step
 * 2: How is your application managed? in the Resilience Hub User Guide.
 */
export const addDraftAppVersionResourceMappings: API.OperationMethod<
  AddDraftAppVersionResourceMappingsRequest,
  AddDraftAppVersionResourceMappingsResponse,
  AddDraftAppVersionResourceMappingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddDraftAppVersionResourceMappingsRequest,
  output: AddDraftAppVersionResourceMappingsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AddDraftAppVersionResourceMappings",
}));

export type BatchUpdateRecommendationStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables you to include or exclude one or more operational recommendations.
 */
export const batchUpdateRecommendationStatus: API.OperationMethod<
  BatchUpdateRecommendationStatusRequest,
  BatchUpdateRecommendationStatusResponse,
  BatchUpdateRecommendationStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateRecommendationStatusRequest,
  output: BatchUpdateRecommendationStatusResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateRecommendationStatus",
}));

export type CreateAppError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Resilience Hub application. An Resilience Hub application is a
 * collection of Amazon Web Services resources structured to prevent and recover Amazon Web Services application disruptions. To describe a Resilience Hub application, you provide an
 * application name, resources from one or more CloudFormation stacks, Resource Groups, Terraform state files, AppRegistry applications, and an appropriate
 * resiliency policy. In addition, you can also add resources that are located on Amazon Elastic Kubernetes Service (Amazon EKS) clusters as optional resources. For more information
 * about the number of resources supported per application, see Service
 * quotas.
 *
 * After you create an Resilience Hub application, you publish it so that you can run
 * a resiliency assessment on it. You can then use recommendations from the assessment to improve
 * resiliency by running another assessment, comparing results, and then iterating the process
 * until you achieve your goals for recovery time objective (RTO) and recovery point objective
 * (RPO).
 */
export const createApp: API.OperationMethod<
  CreateAppRequest,
  CreateAppResponse,
  CreateAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAppRequest,
  output: CreateAppResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateApp",
}));

export type CreateAppVersionAppComponentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new Application Component in the Resilience Hub application.
 *
 * This API updates the Resilience Hub application draft version. To use this
 * Application Component for running assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 */
export const createAppVersionAppComponent: API.OperationMethod<
  CreateAppVersionAppComponentRequest,
  CreateAppVersionAppComponentResponse,
  CreateAppVersionAppComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAppVersionAppComponentRequest,
  output: CreateAppVersionAppComponentResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAppVersionAppComponent",
}));

export type CreateAppVersionResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds a resource to the Resilience Hub application and assigns it to the specified
 * Application Components. If you specify a new Application Component, Resilience Hub will
 * automatically create the Application Component.
 *
 * - This action has no effect outside Resilience Hub.
 *
 * - This API updates the Resilience Hub application draft version. To use this
 * resource for running resiliency assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 *
 * - To update application version with new `physicalResourceID`, you must
 * call `ResolveAppVersionResources` API.
 */
export const createAppVersionResource: API.OperationMethod<
  CreateAppVersionResourceRequest,
  CreateAppVersionResourceResponse,
  CreateAppVersionResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAppVersionResourceRequest,
  output: CreateAppVersionResourceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAppVersionResource",
}));

export type CreateRecommendationTemplateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new recommendation template for the Resilience Hub application.
 */
export const createRecommendationTemplate: API.OperationMethod<
  CreateRecommendationTemplateRequest,
  CreateRecommendationTemplateResponse,
  CreateRecommendationTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateRecommendationTemplateRequest,
  output: CreateRecommendationTemplateResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRecommendationTemplate",
}));

export type CreateResiliencyPolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a resiliency policy for an application.
 *
 * Resilience Hub allows you to provide a value of zero for `rtoInSecs`
 * and `rpoInSecs` of your resiliency policy. But, while assessing your application,
 * the lowest possible assessment result is near zero. Hence, if you provide value zero for
 * `rtoInSecs` and `rpoInSecs`, the estimated workload RTO and
 * estimated workload RPO result will be near zero and the Compliance
 * status for your application will be set to Policy
 * breached.
 */
export const createResiliencyPolicy: API.OperationMethod<
  CreateResiliencyPolicyRequest,
  CreateResiliencyPolicyResponse,
  CreateResiliencyPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateResiliencyPolicyRequest,
  output: CreateResiliencyPolicyResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateResiliencyPolicy",
}));

export type DeleteAppError =
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Resilience Hub application. This is a destructive action that can't be
 * undone.
 */
export const deleteApp: API.OperationMethod<
  DeleteAppRequest,
  DeleteAppResponse,
  DeleteAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAppRequest,
  output: DeleteAppResponse,
  errors: [
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteApp",
}));

export type DeleteAppAssessmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Resilience Hub application assessment. This is a destructive action
 * that can't be undone.
 */
export const deleteAppAssessment: API.OperationMethod<
  DeleteAppAssessmentRequest,
  DeleteAppAssessmentResponse,
  DeleteAppAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAppAssessmentRequest,
  output: DeleteAppAssessmentResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAppAssessment",
}));

export type DeleteAppInputSourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the input source and all of its imported resources from the Resilience Hub
 * application.
 */
export const deleteAppInputSource: API.OperationMethod<
  DeleteAppInputSourceRequest,
  DeleteAppInputSourceResponse,
  DeleteAppInputSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAppInputSourceRequest,
  output: DeleteAppInputSourceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAppInputSource",
}));

export type DeleteAppVersionAppComponentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Application Component from the Resilience Hub application.
 *
 * - This API updates the Resilience Hub application draft version. To use this
 * Application Component for running assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 *
 * - You will not be able to delete an Application Component if it has resources associated
 * with it.
 */
export const deleteAppVersionAppComponent: API.OperationMethod<
  DeleteAppVersionAppComponentRequest,
  DeleteAppVersionAppComponentResponse,
  DeleteAppVersionAppComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAppVersionAppComponentRequest,
  output: DeleteAppVersionAppComponentResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAppVersionAppComponent",
}));

export type DeleteAppVersionResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a resource from the Resilience Hub application.
 *
 * - You can only delete a manually added resource. To exclude non-manually added
 * resources, use the `UpdateAppVersionResource` API.
 *
 * - This action has no effect outside Resilience Hub.
 *
 * - This API updates the Resilience Hub application draft version. To use this
 * resource for running resiliency assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 */
export const deleteAppVersionResource: API.OperationMethod<
  DeleteAppVersionResourceRequest,
  DeleteAppVersionResourceResponse,
  DeleteAppVersionResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAppVersionResourceRequest,
  output: DeleteAppVersionResourceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAppVersionResource",
}));

export type DeleteRecommendationTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a recommendation template. This is a destructive action that can't be
 * undone.
 */
export const deleteRecommendationTemplate: API.OperationMethod<
  DeleteRecommendationTemplateRequest,
  DeleteRecommendationTemplateResponse,
  DeleteRecommendationTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRecommendationTemplateRequest,
  output: DeleteRecommendationTemplateResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRecommendationTemplate",
}));

export type DeleteResiliencyPolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a resiliency policy. This is a destructive action that can't be undone.
 */
export const deleteResiliencyPolicy: API.OperationMethod<
  DeleteResiliencyPolicyRequest,
  DeleteResiliencyPolicyResponse,
  DeleteResiliencyPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteResiliencyPolicyRequest,
  output: DeleteResiliencyPolicyResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResiliencyPolicy",
}));

export type DescribeAppError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes an Resilience Hub application.
 */
export const describeApp: API.OperationMethod<
  DescribeAppRequest,
  DescribeAppResponse,
  DescribeAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAppRequest,
  output: DescribeAppResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApp",
}));

export type DescribeAppAssessmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes an assessment for an Resilience Hub application.
 */
export const describeAppAssessment: API.OperationMethod<
  DescribeAppAssessmentRequest,
  DescribeAppAssessmentResponse,
  DescribeAppAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAppAssessmentRequest,
  output: DescribeAppAssessmentResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAppAssessment",
}));

export type DescribeAppVersionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the Resilience Hub application version.
 */
export const describeAppVersion: API.OperationMethod<
  DescribeAppVersionRequest,
  DescribeAppVersionResponse,
  DescribeAppVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAppVersionRequest,
  output: DescribeAppVersionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAppVersion",
}));

export type DescribeAppVersionAppComponentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes an Application Component in the Resilience Hub application.
 */
export const describeAppVersionAppComponent: API.OperationMethod<
  DescribeAppVersionAppComponentRequest,
  DescribeAppVersionAppComponentResponse,
  DescribeAppVersionAppComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAppVersionAppComponentRequest,
  output: DescribeAppVersionAppComponentResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAppVersionAppComponent",
}));

export type DescribeAppVersionResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes a resource of the Resilience Hub application.
 *
 * This API accepts only one of the following parameters to describe the resource:
 *
 * - `resourceName`
 *
 * - `logicalResourceId`
 *
 * - `physicalResourceId` (Along with `physicalResourceId`, you can
 * also provide `awsAccountId`, and `awsRegion`)
 */
export const describeAppVersionResource: API.OperationMethod<
  DescribeAppVersionResourceRequest,
  DescribeAppVersionResourceResponse,
  DescribeAppVersionResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAppVersionResourceRequest,
  output: DescribeAppVersionResourceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAppVersionResource",
}));

export type DescribeAppVersionResourcesResolutionStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the resolution status for the specified resolution identifier for an application
 * version. If `resolutionId` is not specified, the current resolution status is
 * returned.
 */
export const describeAppVersionResourcesResolutionStatus: API.OperationMethod<
  DescribeAppVersionResourcesResolutionStatusRequest,
  DescribeAppVersionResourcesResolutionStatusResponse,
  DescribeAppVersionResourcesResolutionStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAppVersionResourcesResolutionStatusRequest,
  output: DescribeAppVersionResourcesResolutionStatusResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAppVersionResourcesResolutionStatus",
}));

export type DescribeAppVersionTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes details about an Resilience Hub application.
 */
export const describeAppVersionTemplate: API.OperationMethod<
  DescribeAppVersionTemplateRequest,
  DescribeAppVersionTemplateResponse,
  DescribeAppVersionTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAppVersionTemplateRequest,
  output: DescribeAppVersionTemplateResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAppVersionTemplate",
}));

export type DescribeDraftAppVersionResourcesImportStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the status of importing resources to an application version.
 *
 * If you get a 404 error with
 * `ResourceImportStatusNotFoundAppMetadataException`, you must call
 * `importResourcesToDraftAppVersion` after creating the application and before
 * calling `describeDraftAppVersionResourcesImportStatus` to obtain the
 * status.
 */
export const describeDraftAppVersionResourcesImportStatus: API.OperationMethod<
  DescribeDraftAppVersionResourcesImportStatusRequest,
  DescribeDraftAppVersionResourcesImportStatusResponse,
  DescribeDraftAppVersionResourcesImportStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeDraftAppVersionResourcesImportStatusRequest,
  output: DescribeDraftAppVersionResourcesImportStatusResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDraftAppVersionResourcesImportStatus",
}));

export type DescribeMetricsExportError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the metrics of the application configuration being exported.
 */
export const describeMetricsExport: API.OperationMethod<
  DescribeMetricsExportRequest,
  DescribeMetricsExportResponse,
  DescribeMetricsExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeMetricsExportRequest,
  output: DescribeMetricsExportResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeMetricsExport",
}));

export type DescribeResiliencyPolicyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes a specified resiliency policy for an Resilience Hub application. The
 * returned policy object includes creation time, data location constraints, the Amazon Resource
 * Name (ARN) for the policy, tags, tier, and more.
 */
export const describeResiliencyPolicy: API.OperationMethod<
  DescribeResiliencyPolicyRequest,
  DescribeResiliencyPolicyResponse,
  DescribeResiliencyPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeResiliencyPolicyRequest,
  output: DescribeResiliencyPolicyResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeResiliencyPolicy",
}));

export type DescribeResourceGroupingRecommendationTaskError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the resource grouping recommendation tasks run by Resilience Hub for your application.
 */
export const describeResourceGroupingRecommendationTask: API.OperationMethod<
  DescribeResourceGroupingRecommendationTaskRequest,
  DescribeResourceGroupingRecommendationTaskResponse,
  DescribeResourceGroupingRecommendationTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeResourceGroupingRecommendationTaskRequest,
  output: DescribeResourceGroupingRecommendationTaskResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeResourceGroupingRecommendationTask",
}));

export type ImportResourcesToDraftAppVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Imports resources to Resilience Hub application draft version from different input
 * sources. For more information about the input sources supported by Resilience Hub, see
 * Discover the structure and describe your Resilience Hub application.
 */
export const importResourcesToDraftAppVersion: API.OperationMethod<
  ImportResourcesToDraftAppVersionRequest,
  ImportResourcesToDraftAppVersionResponse,
  ImportResourcesToDraftAppVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ImportResourcesToDraftAppVersionRequest,
  output: ImportResourcesToDraftAppVersionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportResourcesToDraftAppVersion",
}));

export type ListAlarmRecommendationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the alarm recommendations for an Resilience Hub application.
 */
export const listAlarmRecommendations: API.PaginatedOperationMethod<
  ListAlarmRecommendationsRequest,
  ListAlarmRecommendationsResponse,
  ListAlarmRecommendationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAlarmRecommendationsRequest,
  output: ListAlarmRecommendationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAlarmRecommendations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppAssessmentComplianceDriftsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List of compliance drifts that were detected while running an
 * assessment.
 */
export const listAppAssessmentComplianceDrifts: API.PaginatedOperationMethod<
  ListAppAssessmentComplianceDriftsRequest,
  ListAppAssessmentComplianceDriftsResponse,
  ListAppAssessmentComplianceDriftsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAppAssessmentComplianceDriftsRequest,
  output: ListAppAssessmentComplianceDriftsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppAssessmentComplianceDrifts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppAssessmentResourceDriftsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List of resource drifts that were detected while running an
 * assessment.
 */
export const listAppAssessmentResourceDrifts: API.PaginatedOperationMethod<
  ListAppAssessmentResourceDriftsRequest,
  ListAppAssessmentResourceDriftsResponse,
  ListAppAssessmentResourceDriftsError,
  Credentials | HttpClient.HttpClient,
  ResourceDrift
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAppAssessmentResourceDriftsRequest,
  output: ListAppAssessmentResourceDriftsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppAssessmentResourceDrifts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "resourceDrifts",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppAssessmentsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the assessments for an Resilience Hub application. You can use request
 * parameters to refine the results for the response object.
 */
export const listAppAssessments: API.PaginatedOperationMethod<
  ListAppAssessmentsRequest,
  ListAppAssessmentsResponse,
  ListAppAssessmentsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAppAssessmentsRequest,
  output: ListAppAssessmentsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppAssessments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppComponentCompliancesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the compliances for an Resilience Hub Application Component.
 */
export const listAppComponentCompliances: API.PaginatedOperationMethod<
  ListAppComponentCompliancesRequest,
  ListAppComponentCompliancesResponse,
  ListAppComponentCompliancesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAppComponentCompliancesRequest,
  output: ListAppComponentCompliancesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppComponentCompliances",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppComponentRecommendationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the recommendations for an Resilience Hub Application Component.
 */
export const listAppComponentRecommendations: API.PaginatedOperationMethod<
  ListAppComponentRecommendationsRequest,
  ListAppComponentRecommendationsResponse,
  ListAppComponentRecommendationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAppComponentRecommendationsRequest,
  output: ListAppComponentRecommendationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppComponentRecommendations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppInputSourcesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the input sources of the Resilience Hub application. For more
 * information about the input sources supported by Resilience Hub, see Discover
 * the structure and describe your Resilience Hub application.
 */
export const listAppInputSources: API.PaginatedOperationMethod<
  ListAppInputSourcesRequest,
  ListAppInputSourcesResponse,
  ListAppInputSourcesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAppInputSourcesRequest,
  output: ListAppInputSourcesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppInputSources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists your Resilience Hub applications.
 *
 * You can filter applications using only one filter at a time or without using any filter.
 * If you try to filter applications using multiple filters, you will get the following
 * error:
 *
 * An error occurred (ValidationException) when calling the ListApps operation: Only
 * one filter is supported for this operation.
 */
export const listApps: API.PaginatedOperationMethod<
  ListAppsRequest,
  ListAppsResponse,
  ListAppsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAppsRequest,
  output: ListAppsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApps",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppVersionAppComponentsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the Application Components in the Resilience Hub application.
 */
export const listAppVersionAppComponents: API.PaginatedOperationMethod<
  ListAppVersionAppComponentsRequest,
  ListAppVersionAppComponentsResponse,
  ListAppVersionAppComponentsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAppVersionAppComponentsRequest,
  output: ListAppVersionAppComponentsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppVersionAppComponents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppVersionResourceMappingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists how the resources in an application version are mapped/sourced from. Mappings can be
 * physical resource identifiers, CloudFormation stacks, resource-groups, or an application registry
 * app.
 */
export const listAppVersionResourceMappings: API.PaginatedOperationMethod<
  ListAppVersionResourceMappingsRequest,
  ListAppVersionResourceMappingsResponse,
  ListAppVersionResourceMappingsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAppVersionResourceMappingsRequest,
  output: ListAppVersionResourceMappingsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppVersionResourceMappings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppVersionResourcesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the resources in an Resilience Hub application.
 */
export const listAppVersionResources: API.PaginatedOperationMethod<
  ListAppVersionResourcesRequest,
  ListAppVersionResourcesResponse,
  ListAppVersionResourcesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAppVersionResourcesRequest,
  output: ListAppVersionResourcesResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppVersionResources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListAppVersionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Lists the different versions for the Resilience Hub applications.
 */
export const listAppVersions: API.PaginatedOperationMethod<
  ListAppVersionsRequest,
  ListAppVersionsResponse,
  ListAppVersionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAppVersionsRequest,
  output: ListAppVersionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAppVersions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMetricsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the metrics that can be exported.
 */
export const listMetrics: API.PaginatedOperationMethod<
  ListMetricsRequest,
  ListMetricsResponse,
  ListMetricsError,
  Credentials | HttpClient.HttpClient,
  String255[]
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMetricsRequest,
  output: ListMetricsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMetrics",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "rows",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRecommendationTemplatesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the recommendation templates for the Resilience Hub applications.
 */
export const listRecommendationTemplates: API.PaginatedOperationMethod<
  ListRecommendationTemplatesRequest,
  ListRecommendationTemplatesResponse,
  ListRecommendationTemplatesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRecommendationTemplatesRequest,
  output: ListRecommendationTemplatesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecommendationTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListResiliencyPoliciesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the resiliency policies for the Resilience Hub applications.
 */
export const listResiliencyPolicies: API.PaginatedOperationMethod<
  ListResiliencyPoliciesRequest,
  ListResiliencyPoliciesResponse,
  ListResiliencyPoliciesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListResiliencyPoliciesRequest,
  output: ListResiliencyPoliciesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResiliencyPolicies",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListResourceGroupingRecommendationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the resource grouping recommendations suggested by Resilience Hub for your application.
 */
export const listResourceGroupingRecommendations: API.PaginatedOperationMethod<
  ListResourceGroupingRecommendationsRequest,
  ListResourceGroupingRecommendationsResponse,
  ListResourceGroupingRecommendationsError,
  Credentials | HttpClient.HttpClient,
  GroupingRecommendation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListResourceGroupingRecommendationsRequest,
  output: ListResourceGroupingRecommendationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceGroupingRecommendations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "groupingRecommendations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSopRecommendationsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the standard operating procedure (SOP) recommendations for the Resilience Hub applications.
 */
export const listSopRecommendations: API.PaginatedOperationMethod<
  ListSopRecommendationsRequest,
  ListSopRecommendationsResponse,
  ListSopRecommendationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSopRecommendationsRequest,
  output: ListSopRecommendationsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSopRecommendations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSuggestedResiliencyPoliciesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the suggested resiliency policies for the Resilience Hub
 * applications.
 */
export const listSuggestedResiliencyPolicies: API.PaginatedOperationMethod<
  ListSuggestedResiliencyPoliciesRequest,
  ListSuggestedResiliencyPoliciesResponse,
  ListSuggestedResiliencyPoliciesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSuggestedResiliencyPoliciesRequest,
  output: ListSuggestedResiliencyPoliciesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSuggestedResiliencyPolicies",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags for your resources in your Resilience Hub applications.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTestRecommendationsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the test recommendations for the Resilience Hub application.
 */
export const listTestRecommendations: API.PaginatedOperationMethod<
  ListTestRecommendationsRequest,
  ListTestRecommendationsResponse,
  ListTestRecommendationsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTestRecommendationsRequest,
  output: ListTestRecommendationsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTestRecommendations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListUnsupportedAppVersionResourcesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the resources that are not currently supported in Resilience Hub. An
 * unsupported resource is a resource that exists in the object that was used to create an app,
 * but is not supported by Resilience Hub.
 */
export const listUnsupportedAppVersionResources: API.PaginatedOperationMethod<
  ListUnsupportedAppVersionResourcesRequest,
  ListUnsupportedAppVersionResourcesResponse,
  ListUnsupportedAppVersionResourcesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUnsupportedAppVersionResourcesRequest,
  output: ListUnsupportedAppVersionResourcesResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUnsupportedAppVersionResources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PublishAppVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Publishes a new version of a specific Resilience Hub application.
 */
export const publishAppVersion: API.OperationMethod<
  PublishAppVersionRequest,
  PublishAppVersionResponse,
  PublishAppVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PublishAppVersionRequest,
  output: PublishAppVersionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PublishAppVersion",
}));

export type PutDraftAppVersionTemplateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds or updates the app template for an Resilience Hub application draft
 * version.
 */
export const putDraftAppVersionTemplate: API.OperationMethod<
  PutDraftAppVersionTemplateRequest,
  PutDraftAppVersionTemplateResponse,
  PutDraftAppVersionTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutDraftAppVersionTemplateRequest,
  output: PutDraftAppVersionTemplateResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutDraftAppVersionTemplate",
}));

export type RejectResourceGroupingRecommendationsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Rejects resource grouping recommendations.
 */
export const rejectResourceGroupingRecommendations: API.OperationMethod<
  RejectResourceGroupingRecommendationsRequest,
  RejectResourceGroupingRecommendationsResponse,
  RejectResourceGroupingRecommendationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RejectResourceGroupingRecommendationsRequest,
  output: RejectResourceGroupingRecommendationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RejectResourceGroupingRecommendations",
}));

export type RemoveDraftAppVersionResourceMappingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes resource mappings from a draft application version.
 */
export const removeDraftAppVersionResourceMappings: API.OperationMethod<
  RemoveDraftAppVersionResourceMappingsRequest,
  RemoveDraftAppVersionResourceMappingsResponse,
  RemoveDraftAppVersionResourceMappingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveDraftAppVersionResourceMappingsRequest,
  output: RemoveDraftAppVersionResourceMappingsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RemoveDraftAppVersionResourceMappings",
}));

export type ResolveAppVersionResourcesError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Resolves the resources for an application version.
 */
export const resolveAppVersionResources: API.OperationMethod<
  ResolveAppVersionResourcesRequest,
  ResolveAppVersionResourcesResponse,
  ResolveAppVersionResourcesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ResolveAppVersionResourcesRequest,
  output: ResolveAppVersionResourcesResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ResolveAppVersionResources",
}));

export type StartAppAssessmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new application assessment for an application.
 */
export const startAppAssessment: API.OperationMethod<
  StartAppAssessmentRequest,
  StartAppAssessmentResponse,
  StartAppAssessmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartAppAssessmentRequest,
  output: StartAppAssessmentResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartAppAssessment",
}));

export type StartMetricsExportError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Initiates the export task of metrics.
 */
export const startMetricsExport: API.OperationMethod<
  StartMetricsExportRequest,
  StartMetricsExportResponse,
  StartMetricsExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartMetricsExportRequest,
  output: StartMetricsExportResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartMetricsExport",
}));

export type StartResourceGroupingRecommendationTaskError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts grouping recommendation task.
 */
export const startResourceGroupingRecommendationTask: API.OperationMethod<
  StartResourceGroupingRecommendationTaskRequest,
  StartResourceGroupingRecommendationTaskResponse,
  StartResourceGroupingRecommendationTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartResourceGroupingRecommendationTaskRequest,
  output: StartResourceGroupingRecommendationTaskResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartResourceGroupingRecommendationTask",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Applies one or more tags to a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes one or more tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAppError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an application.
 */
export const updateApp: API.OperationMethod<
  UpdateAppRequest,
  UpdateAppResponse,
  UpdateAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAppRequest,
  output: UpdateAppResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateApp",
}));

export type UpdateAppVersionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the Resilience Hub application version.
 *
 * This API updates the Resilience Hub application draft version. To use this
 * information for running resiliency assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 */
export const updateAppVersion: API.OperationMethod<
  UpdateAppVersionRequest,
  UpdateAppVersionResponse,
  UpdateAppVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAppVersionRequest,
  output: UpdateAppVersionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAppVersion",
}));

export type UpdateAppVersionAppComponentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing Application Component in the Resilience Hub application.
 *
 * This API updates the Resilience Hub application draft version. To use this
 * Application Component for running assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 */
export const updateAppVersionAppComponent: API.OperationMethod<
  UpdateAppVersionAppComponentRequest,
  UpdateAppVersionAppComponentResponse,
  UpdateAppVersionAppComponentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAppVersionAppComponentRequest,
  output: UpdateAppVersionAppComponentResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAppVersionAppComponent",
}));

export type UpdateAppVersionResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the resource details in the Resilience Hub application.
 *
 * - This action has no effect outside Resilience Hub.
 *
 * - This API updates the Resilience Hub application draft version. To use this
 * resource for running resiliency assessments, you must publish the Resilience Hub
 * application using the `PublishAppVersion` API.
 *
 * - To update application version with new `physicalResourceID`, you must
 * call `ResolveAppVersionResources` API.
 */
export const updateAppVersionResource: API.OperationMethod<
  UpdateAppVersionResourceRequest,
  UpdateAppVersionResourceResponse,
  UpdateAppVersionResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAppVersionResourceRequest,
  output: UpdateAppVersionResourceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAppVersionResource",
}));

export type UpdateResiliencyPolicyError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a resiliency policy.
 *
 * Resilience Hub allows you to provide a value of zero for `rtoInSecs`
 * and `rpoInSecs` of your resiliency policy. But, while assessing your application,
 * the lowest possible assessment result is near zero. Hence, if you provide value zero for
 * `rtoInSecs` and `rpoInSecs`, the estimated workload RTO and
 * estimated workload RPO result will be near zero and the Compliance
 * status for your application will be set to Policy
 * breached.
 */
export const updateResiliencyPolicy: API.OperationMethod<
  UpdateResiliencyPolicyRequest,
  UpdateResiliencyPolicyResponse,
  UpdateResiliencyPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateResiliencyPolicyRequest,
  output: UpdateResiliencyPolicyResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateResiliencyPolicy",
}));
