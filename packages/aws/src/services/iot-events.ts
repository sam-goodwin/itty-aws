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
  sdkId: "IoT Events",
  serviceShapeName: "IotColumboService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "iotevents" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-07-27");
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
              `https://iotevents-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://iotevents-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://iotevents.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://iotevents.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class InternalFailureException
  extends /*@__PURE__*/ S.TaggedError<InternalFailureException>()(
    "InternalFailureException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidRequestException
  extends /*@__PURE__*/ S.TaggedError<InvalidRequestException>()(
    "InvalidRequestException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(410),
  ).pipe(C.withBadRequestError) {}
export class ResourceAlreadyExistsException
  extends /*@__PURE__*/ S.TaggedError<ResourceAlreadyExistsException>()(
    "ResourceAlreadyExistsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceArn: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError, C.withAlreadyExistsError) {}
export class ResourceInUseException
  extends /*@__PURE__*/ S.TaggedError<ResourceInUseException>()(
    "ResourceInUseException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UnsupportedOperationException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedOperationException>()(
    "UnsupportedOperationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(501),
  ).pipe(C.withServerError) {}
export type AlarmModelName = string;
export type AlarmModelDescription = string;
export type AmazonResourceName = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  key: string;
  value: string;
}
export type Tags = Tag[];
export type AttributeJsonPath = string;
export type Severity = number;
export type InputProperty = string;
export type ComparisonOperator =
  | "GREATER"
  | "GREATER_OR_EQUAL"
  | "LESS"
  | "LESS_OR_EQUAL"
  | "EQUAL"
  | "NOT_EQUAL"
  | (string & {});
export type Threshold = string;
export interface SimpleRule {
  inputProperty: string;
  comparisonOperator: ComparisonOperator;
  threshold: string;
}
export interface AlarmRule {
  simpleRule?: SimpleRule;
}
export type ContentExpression = string;
export type PayloadType = "STRING" | "JSON" | (string & {});
export interface Payload {
  contentExpression: string;
  type: PayloadType;
}
export interface LambdaAction {
  functionArn: string;
  payload?: Payload;
}
export interface NotificationTargetActions {
  lambdaAction?: LambdaAction;
}
export type SMSSenderId = string;
export type NotificationAdditionalMessage = string;
export type IdentityStoreId = string;
export type SSOReferenceId = string;
export interface SSOIdentity {
  identityStoreId: string;
  userId?: string;
}
export interface RecipientDetail {
  ssoIdentity?: SSOIdentity;
}
export type RecipientDetails = RecipientDetail[];
export interface SMSConfiguration {
  senderId?: string;
  additionalMessage?: string;
  recipients: RecipientDetail[];
}
export type SMSConfigurations = SMSConfiguration[];
export type FromEmail = string;
export type EmailSubject = string;
export interface EmailContent {
  subject?: string;
  additionalMessage?: string;
}
export interface EmailRecipients {
  to?: RecipientDetail[];
}
export interface EmailConfiguration {
  from: string;
  content?: EmailContent;
  recipients: EmailRecipients;
}
export type EmailConfigurations = EmailConfiguration[];
export interface NotificationAction {
  action: NotificationTargetActions;
  smsConfigurations?: SMSConfiguration[];
  emailConfigurations?: EmailConfiguration[];
}
export type NotificationActions = NotificationAction[];
export interface AlarmNotification {
  notificationActions?: NotificationAction[];
}
export interface SNSTopicPublishAction {
  targetArn: string;
  payload?: Payload;
}
export type MQTTTopic = string;
export interface IotTopicPublishAction {
  mqttTopic: string;
  payload?: Payload;
}
export type InputName = string;
export interface IotEventsAction {
  inputName: string;
  payload?: Payload;
}
export type QueueUrl = string;
export type UseBase64 = boolean;
export interface SqsAction {
  queueUrl: string;
  useBase64?: boolean;
  payload?: Payload;
}
export type DeliveryStreamName = string;
export type FirehoseSeparator = string;
export interface FirehoseAction {
  deliveryStreamName: string;
  separator?: string;
  payload?: Payload;
}
export type DynamoKeyType = string;
export type DynamoKeyField = string;
export type DynamoKeyValue = string;
export type DynamoOperation = string;
export type DynamoTableName = string;
export interface DynamoDBAction {
  hashKeyType?: string;
  hashKeyField: string;
  hashKeyValue: string;
  rangeKeyType?: string;
  rangeKeyField?: string;
  rangeKeyValue?: string;
  operation?: string;
  payloadField?: string;
  tableName: string;
  payload?: Payload;
}
export interface DynamoDBv2Action {
  tableName: string;
  payload?: Payload;
}
export type AssetPropertyEntryId = string;
export type AssetId = string;
export type AssetPropertyId = string;
export type AssetPropertyAlias = string;
export type AssetPropertyStringValue = string;
export type AssetPropertyIntegerValue = string;
export type AssetPropertyDoubleValue = string;
export type AssetPropertyBooleanValue = string;
export interface AssetPropertyVariant {
  stringValue?: string;
  integerValue?: string;
  doubleValue?: string;
  booleanValue?: string;
}
export type AssetPropertyTimeInSeconds = string;
export type AssetPropertyOffsetInNanos = string;
export interface AssetPropertyTimestamp {
  timeInSeconds: string;
  offsetInNanos?: string;
}
export type AssetPropertyQuality = string;
export interface AssetPropertyValue {
  value?: AssetPropertyVariant;
  timestamp?: AssetPropertyTimestamp;
  quality?: string;
}
export interface IotSiteWiseAction {
  entryId?: string;
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
  propertyValue?: AssetPropertyValue;
}
export interface AlarmAction {
  sns?: SNSTopicPublishAction;
  iotTopicPublish?: IotTopicPublishAction;
  lambda?: LambdaAction;
  iotEvents?: IotEventsAction;
  sqs?: SqsAction;
  firehose?: FirehoseAction;
  dynamoDB?: DynamoDBAction;
  dynamoDBv2?: DynamoDBv2Action;
  iotSiteWise?: IotSiteWiseAction;
}
export type AlarmActions = AlarmAction[];
export interface AlarmEventActions {
  alarmActions?: AlarmAction[];
}
export type DisabledOnInitialization = boolean;
export interface InitializationConfiguration {
  disabledOnInitialization: boolean;
}
export type AcknowledgeFlowEnabled = boolean;
export interface AcknowledgeFlow {
  enabled: boolean;
}
export interface AlarmCapabilities {
  initializationConfiguration?: InitializationConfiguration;
  acknowledgeFlow?: AcknowledgeFlow;
}
export interface CreateAlarmModelRequest {
  alarmModelName: string;
  alarmModelDescription?: string;
  roleArn: string;
  tags?: Tag[];
  key?: string;
  severity?: number;
  alarmRule: AlarmRule;
  alarmNotification?: AlarmNotification;
  alarmEventActions?: AlarmEventActions;
  alarmCapabilities?: AlarmCapabilities;
}
export type AlarmModelArn = string;
export type AlarmModelVersion = string;
export type AlarmModelVersionStatus =
  | "ACTIVE"
  | "ACTIVATING"
  | "INACTIVE"
  | "FAILED"
  | (string & {});
export interface CreateAlarmModelResponse {
  creationTime?: Date;
  alarmModelArn?: string;
  alarmModelVersion?: string;
  lastUpdateTime?: Date;
  status?: AlarmModelVersionStatus;
}
export type DetectorModelName = string;
export type StateName = string;
export type EventName = string;
export type Condition = string;
export type VariableName = string;
export type VariableValue = string;
export interface SetVariableAction {
  variableName: string;
  value: string;
}
export type TimerName = string;
export type Seconds = number;
export interface SetTimerAction {
  timerName: string;
  seconds?: number;
  durationExpression?: string;
}
export interface ClearTimerAction {
  timerName: string;
}
export interface ResetTimerAction {
  timerName: string;
}
export interface Action {
  setVariable?: SetVariableAction;
  sns?: SNSTopicPublishAction;
  iotTopicPublish?: IotTopicPublishAction;
  setTimer?: SetTimerAction;
  clearTimer?: ClearTimerAction;
  resetTimer?: ResetTimerAction;
  lambda?: LambdaAction;
  iotEvents?: IotEventsAction;
  sqs?: SqsAction;
  firehose?: FirehoseAction;
  dynamoDB?: DynamoDBAction;
  dynamoDBv2?: DynamoDBv2Action;
  iotSiteWise?: IotSiteWiseAction;
}
export type Actions = Action[];
export interface Event {
  eventName: string;
  condition?: string;
  actions?: Action[];
}
export type Events = Event[];
export interface TransitionEvent {
  eventName: string;
  condition: string;
  actions?: Action[];
  nextState: string;
}
export type TransitionEvents = TransitionEvent[];
export interface OnInputLifecycle {
  events?: Event[];
  transitionEvents?: TransitionEvent[];
}
export interface OnEnterLifecycle {
  events?: Event[];
}
export interface OnExitLifecycle {
  events?: Event[];
}
export interface State {
  stateName: string;
  onInput?: OnInputLifecycle;
  onEnter?: OnEnterLifecycle;
  onExit?: OnExitLifecycle;
}
export type States = State[];
export interface DetectorModelDefinition {
  states: State[];
  initialStateName: string;
}
export type DetectorModelDescription = string;
export type EvaluationMethod = "BATCH" | "SERIAL" | (string & {});
export interface CreateDetectorModelRequest {
  detectorModelName: string;
  detectorModelDefinition: DetectorModelDefinition;
  detectorModelDescription?: string;
  key?: string;
  roleArn: string;
  tags?: Tag[];
  evaluationMethod?: EvaluationMethod;
}
export type DetectorModelVersion = string;
export type DetectorModelArn = string;
export type DetectorModelVersionStatus =
  | "ACTIVE"
  | "ACTIVATING"
  | "INACTIVE"
  | "DEPRECATED"
  | "DRAFT"
  | "PAUSED"
  | "FAILED"
  | (string & {});
export interface DetectorModelConfiguration {
  detectorModelName?: string;
  detectorModelVersion?: string;
  detectorModelDescription?: string;
  detectorModelArn?: string;
  roleArn?: string;
  creationTime?: Date;
  lastUpdateTime?: Date;
  status?: DetectorModelVersionStatus;
  key?: string;
  evaluationMethod?: EvaluationMethod;
}
export interface CreateDetectorModelResponse {
  detectorModelConfiguration?: DetectorModelConfiguration;
}
export type InputDescription = string;
export interface Attribute {
  jsonPath: string;
}
export type Attributes = Attribute[];
export interface InputDefinition {
  attributes: Attribute[];
}
export interface CreateInputRequest {
  inputName: string;
  inputDescription?: string;
  inputDefinition: InputDefinition;
  tags?: Tag[];
}
export type InputArn = string;
export type InputStatus = "CREATING" | "UPDATING" | "ACTIVE" | "DELETING" | (string & {});
export interface InputConfiguration {
  inputName: string;
  inputDescription?: string;
  inputArn: string;
  creationTime: Date;
  lastUpdateTime: Date;
  status: InputStatus;
}
export interface CreateInputResponse {
  inputConfiguration?: InputConfiguration;
}
export interface DeleteAlarmModelRequest {
  alarmModelName: string;
}
export interface DeleteAlarmModelResponse {}
export interface DeleteDetectorModelRequest {
  detectorModelName: string;
}
export interface DeleteDetectorModelResponse {}
export interface DeleteInputRequest {
  inputName: string;
}
export interface DeleteInputResponse {}
export interface DescribeAlarmModelRequest {
  alarmModelName: string;
  alarmModelVersion?: string;
}
export type StatusMessage = string;
export interface DescribeAlarmModelResponse {
  creationTime?: Date;
  alarmModelArn?: string;
  alarmModelVersion?: string;
  lastUpdateTime?: Date;
  status?: AlarmModelVersionStatus;
  statusMessage?: string;
  alarmModelName?: string;
  alarmModelDescription?: string;
  roleArn?: string;
  key?: string;
  severity?: number;
  alarmRule?: AlarmRule;
  alarmNotification?: AlarmNotification;
  alarmEventActions?: AlarmEventActions;
  alarmCapabilities?: AlarmCapabilities;
}
export interface DescribeDetectorModelRequest {
  detectorModelName: string;
  detectorModelVersion?: string;
}
export interface DetectorModel {
  detectorModelDefinition?: DetectorModelDefinition;
  detectorModelConfiguration?: DetectorModelConfiguration;
}
export interface DescribeDetectorModelResponse {
  detectorModel?: DetectorModel;
}
export type AnalysisId = string;
export interface DescribeDetectorModelAnalysisRequest {
  analysisId: string;
}
export type AnalysisStatus = "RUNNING" | "COMPLETE" | "FAILED" | (string & {});
export interface DescribeDetectorModelAnalysisResponse {
  status?: AnalysisStatus;
}
export interface DescribeInputRequest {
  inputName: string;
}
export interface Input {
  inputConfiguration?: InputConfiguration;
  inputDefinition?: InputDefinition;
}
export interface DescribeInputResponse {
  input?: Input;
}
export interface DescribeLoggingOptionsRequest {}
export type LoggingLevel = "ERROR" | "INFO" | "DEBUG" | (string & {});
export type LoggingEnabled = boolean;
export type KeyValue = string;
export interface DetectorDebugOption {
  detectorModelName: string;
  keyValue?: string;
}
export type DetectorDebugOptions = DetectorDebugOption[];
export interface LoggingOptions {
  roleArn: string;
  level: LoggingLevel;
  enabled: boolean;
  detectorDebugOptions?: DetectorDebugOption[];
}
export interface DescribeLoggingOptionsResponse {
  loggingOptions?: LoggingOptions;
}
export type NextToken = string;
export type MaxAnalysisResults = number;
export interface GetDetectorModelAnalysisResultsRequest {
  analysisId: string;
  nextToken?: string;
  maxResults?: number;
}
export type AnalysisType = string;
export type AnalysisResultLevel = "INFO" | "WARNING" | "ERROR" | (string & {});
export type AnalysisMessage = string;
export type AnalysisResultLocationPath = string;
export interface AnalysisResultLocation {
  path?: string;
}
export type AnalysisResultLocations = AnalysisResultLocation[];
export interface AnalysisResult {
  type?: string;
  level?: AnalysisResultLevel;
  message?: string;
  locations?: AnalysisResultLocation[];
}
export type AnalysisResults = AnalysisResult[];
export interface GetDetectorModelAnalysisResultsResponse {
  analysisResults?: AnalysisResult[];
  nextToken?: string;
}
export type MaxResults = number;
export interface ListAlarmModelsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface AlarmModelSummary {
  creationTime?: Date;
  alarmModelDescription?: string;
  alarmModelName?: string;
}
export type AlarmModelSummaries = AlarmModelSummary[];
export interface ListAlarmModelsResponse {
  alarmModelSummaries?: AlarmModelSummary[];
  nextToken?: string;
}
export interface ListAlarmModelVersionsRequest {
  alarmModelName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface AlarmModelVersionSummary {
  alarmModelName?: string;
  alarmModelArn?: string;
  alarmModelVersion?: string;
  roleArn?: string;
  creationTime?: Date;
  lastUpdateTime?: Date;
  status?: AlarmModelVersionStatus;
  statusMessage?: string;
}
export type AlarmModelVersionSummaries = AlarmModelVersionSummary[];
export interface ListAlarmModelVersionsResponse {
  alarmModelVersionSummaries?: AlarmModelVersionSummary[];
  nextToken?: string;
}
export interface ListDetectorModelsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface DetectorModelSummary {
  detectorModelName?: string;
  detectorModelDescription?: string;
  creationTime?: Date;
}
export type DetectorModelSummaries = DetectorModelSummary[];
export interface ListDetectorModelsResponse {
  detectorModelSummaries?: DetectorModelSummary[];
  nextToken?: string;
}
export interface ListDetectorModelVersionsRequest {
  detectorModelName: string;
  nextToken?: string;
  maxResults?: number;
}
export interface DetectorModelVersionSummary {
  detectorModelName?: string;
  detectorModelVersion?: string;
  detectorModelArn?: string;
  roleArn?: string;
  creationTime?: Date;
  lastUpdateTime?: Date;
  status?: DetectorModelVersionStatus;
  evaluationMethod?: EvaluationMethod;
}
export type DetectorModelVersionSummaries = DetectorModelVersionSummary[];
export interface ListDetectorModelVersionsResponse {
  detectorModelVersionSummaries?: DetectorModelVersionSummary[];
  nextToken?: string;
}
export interface IotEventsInputIdentifier {
  inputName: string;
}
export type AssetModelId = string;
export interface IotSiteWiseAssetModelPropertyIdentifier {
  assetModelId: string;
  propertyId: string;
}
export interface IotSiteWiseInputIdentifier {
  iotSiteWiseAssetModelPropertyIdentifier?: IotSiteWiseAssetModelPropertyIdentifier;
}
export interface InputIdentifier {
  iotEventsInputIdentifier?: IotEventsInputIdentifier;
  iotSiteWiseInputIdentifier?: IotSiteWiseInputIdentifier;
}
export interface ListInputRoutingsRequest {
  inputIdentifier: InputIdentifier;
  maxResults?: number;
  nextToken?: string;
}
export type ResourceName = string;
export interface RoutedResource {
  name?: string;
  arn?: string;
}
export type RoutedResources = RoutedResource[];
export interface ListInputRoutingsResponse {
  routedResources?: RoutedResource[];
  nextToken?: string;
}
export interface ListInputsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface InputSummary {
  inputName?: string;
  inputDescription?: string;
  inputArn?: string;
  creationTime?: Date;
  lastUpdateTime?: Date;
  status?: InputStatus;
}
export type InputSummaries = InputSummary[];
export interface ListInputsResponse {
  inputSummaries?: InputSummary[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Tag[];
}
export interface PutLoggingOptionsRequest {
  loggingOptions: LoggingOptions;
}
export interface PutLoggingOptionsResponse {}
export interface StartDetectorModelAnalysisRequest {
  detectorModelDefinition: DetectorModelDefinition;
}
export interface StartDetectorModelAnalysisResponse {
  analysisId?: string;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeys = string[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateAlarmModelRequest {
  alarmModelName: string;
  alarmModelDescription?: string;
  roleArn: string;
  severity?: number;
  alarmRule: AlarmRule;
  alarmNotification?: AlarmNotification;
  alarmEventActions?: AlarmEventActions;
  alarmCapabilities?: AlarmCapabilities;
}
export interface UpdateAlarmModelResponse {
  creationTime?: Date;
  alarmModelArn?: string;
  alarmModelVersion?: string;
  lastUpdateTime?: Date;
  status?: AlarmModelVersionStatus;
}
export interface UpdateDetectorModelRequest {
  detectorModelName: string;
  detectorModelDefinition: DetectorModelDefinition;
  detectorModelDescription?: string;
  roleArn: string;
  evaluationMethod?: EvaluationMethod;
}
export interface UpdateDetectorModelResponse {
  detectorModelConfiguration?: DetectorModelConfiguration;
}
export interface UpdateInputRequest {
  inputName: string;
  inputDescription?: string;
  inputDefinition: InputDefinition;
}
export interface UpdateInputResponse {
  inputConfiguration?: InputConfiguration;
}
export type ErrorMessage = string;
export type ResourceId = string;
export type ResourceArn = string;
export type CreateAlarmModelError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceInUseException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get
 * notified when the value is outside a specified range. For more information, see Create an
 * alarm model in the *AWS IoT Events Developer Guide*.
 */
export const createAlarmModel: API.OperationMethod<
  CreateAlarmModelRequest,
  CreateAlarmModelResponse,
  CreateAlarmModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36, __c4, 4) as any as S.Schema<CreateAlarmModelRequest>,
  output: __S(37, __c4, 5) as any as S.Schema<CreateAlarmModelResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceInUseException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAlarmModel",
}));

export type CreateDetectorModelError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceAlreadyExistsException
  | ResourceInUseException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates a detector model.
 */
export const createDetectorModel: API.OperationMethod<
  CreateDetectorModelRequest,
  CreateDetectorModelResponse,
  CreateDetectorModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(52, __c6, 4) as any as S.Schema<CreateDetectorModelRequest>,
  output: __S(54, __c6, 6) as any as S.Schema<CreateDetectorModelResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceAlreadyExistsException,
    ResourceInUseException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDetectorModel",
}));

export type CreateInputError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceAlreadyExistsException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Creates an input.
 */
export const createInput: API.OperationMethod<
  CreateInputRequest,
  CreateInputResponse,
  CreateInputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58, __c7, 2) as any as S.Schema<CreateInputRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<CreateInputResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceAlreadyExistsException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateInput",
}));

export type DeleteAlarmModelError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes an alarm model. Any alarm instances that were created based on this alarm model
 * are also deleted. This action can't be undone.
 */
export const deleteAlarmModel: API.OperationMethod<
  DeleteAlarmModelRequest,
  DeleteAlarmModelResponse,
  DeleteAlarmModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61, __c7, 5) as any as S.Schema<DeleteAlarmModelRequest>,
  output: __S(62, __c7, 6) as any as S.Schema<DeleteAlarmModelResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAlarmModel",
}));

export type DeleteDetectorModelError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a detector model. Any active instances of the detector model are also
 * deleted.
 */
export const deleteDetectorModel: API.OperationMethod<
  DeleteDetectorModelRequest,
  DeleteDetectorModelResponse,
  DeleteDetectorModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63, __c7, 7) as any as S.Schema<DeleteDetectorModelRequest>,
  output: __S(62, __c7, 6) as any as S.Schema<DeleteDetectorModelResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDetectorModel",
}));

export type DeleteInputError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes an input.
 */
export const deleteInput: API.OperationMethod<
  DeleteInputRequest,
  DeleteInputResponse,
  DeleteInputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64, __c8, 0) as any as S.Schema<DeleteInputRequest>,
  output: __S(62, __c7, 6) as any as S.Schema<DeleteInputResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteInput",
}));

export type DescribeAlarmModelError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about an alarm model. If you don't specify a value for the
 * `alarmModelVersion` parameter, the latest version is returned.
 */
export const describeAlarmModel: API.OperationMethod<
  DescribeAlarmModelRequest,
  DescribeAlarmModelResponse,
  DescribeAlarmModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65, __c8, 1) as any as S.Schema<DescribeAlarmModelRequest>,
  output: __S(66, __c8, 2) as any as S.Schema<DescribeAlarmModelResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAlarmModel",
}));

export type DescribeDetectorModelError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Describes a detector model. If the `version` parameter is not specified,
 * information about the latest version is returned.
 */
export const describeDetectorModel: API.OperationMethod<
  DescribeDetectorModelRequest,
  DescribeDetectorModelResponse,
  DescribeDetectorModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(67, __c8, 3) as any as S.Schema<DescribeDetectorModelRequest>,
  output: __S(69, __c8, 5) as any as S.Schema<DescribeDetectorModelResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDetectorModel",
}));

export type DescribeDetectorModelAnalysisError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves runtime information about a detector model analysis.
 *
 * After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.
 */
export const describeDetectorModelAnalysis: API.OperationMethod<
  DescribeDetectorModelAnalysisRequest,
  DescribeDetectorModelAnalysisResponse,
  DescribeDetectorModelAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70, __c8, 6) as any as S.Schema<DescribeDetectorModelAnalysisRequest>,
  output: __S(71, __c8, 7) as any as S.Schema<DescribeDetectorModelAnalysisResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDetectorModelAnalysis",
}));

export type DescribeInputError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Describes an input.
 */
export const describeInput: API.OperationMethod<
  DescribeInputRequest,
  DescribeInputResponse,
  DescribeInputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72, __c9, 0) as any as S.Schema<DescribeInputRequest>,
  output: __S(74, __c9, 2) as any as S.Schema<DescribeInputResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeInput",
}));

export type DescribeLoggingOptionsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Retrieves the current settings of the AWS IoT Events logging options.
 */
export const describeLoggingOptions: API.OperationMethod<
  DescribeLoggingOptionsRequest,
  DescribeLoggingOptionsResponse,
  DescribeLoggingOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75, __c9, 3) as any as S.Schema<DescribeLoggingOptionsRequest>,
  output: __S(79, __c9, 7) as any as S.Schema<DescribeLoggingOptionsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeLoggingOptions",
}));

export type GetDetectorModelAnalysisResultsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves one or more analysis results of the detector model.
 *
 * After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.
 */
export const getDetectorModelAnalysisResults: API.OperationMethod<
  GetDetectorModelAnalysisResultsRequest,
  GetDetectorModelAnalysisResultsResponse,
  GetDetectorModelAnalysisResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80, __c10, 0) as any as S.Schema<GetDetectorModelAnalysisResultsRequest>,
  output: __S(85, __c10, 5) as any as S.Schema<GetDetectorModelAnalysisResultsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDetectorModelAnalysisResults",
}));

export type ListAlarmModelsError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the alarm models that you created. The operation returns only the metadata
 * associated with each alarm model.
 */
export const listAlarmModels: API.OperationMethod<
  ListAlarmModelsRequest,
  ListAlarmModelsResponse,
  ListAlarmModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(86, __c10, 6) as any as S.Schema<ListAlarmModelsRequest>,
  output: __S(89, __c11, 1) as any as S.Schema<ListAlarmModelsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAlarmModels",
}));

export type ListAlarmModelVersionsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists all the versions of an alarm model. The operation returns only the metadata
 * associated with each alarm model version.
 */
export const listAlarmModelVersions: API.OperationMethod<
  ListAlarmModelVersionsRequest,
  ListAlarmModelVersionsResponse,
  ListAlarmModelVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(90, __c11, 2) as any as S.Schema<ListAlarmModelVersionsRequest>,
  output: __S(93, __c11, 5) as any as S.Schema<ListAlarmModelVersionsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAlarmModelVersions",
}));

export type ListDetectorModelsError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the detector models you have created. Only the metadata associated with each
 * detector model is returned.
 */
export const listDetectorModels: API.OperationMethod<
  ListDetectorModelsRequest,
  ListDetectorModelsResponse,
  ListDetectorModelsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(94, __c11, 6) as any as S.Schema<ListDetectorModelsRequest>,
  output: __S(97, __c12, 1) as any as S.Schema<ListDetectorModelsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDetectorModels",
}));

export type ListDetectorModelVersionsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists all the versions of a detector model. Only the metadata associated with each
 * detector model version is returned.
 */
export const listDetectorModelVersions: API.OperationMethod<
  ListDetectorModelVersionsRequest,
  ListDetectorModelVersionsResponse,
  ListDetectorModelVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(98, __c12, 2) as any as S.Schema<ListDetectorModelVersionsRequest>,
  output: __S(101, __c12, 5) as any as S.Schema<ListDetectorModelVersionsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDetectorModelVersions",
}));

export type ListInputRoutingsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists one or more input routings.
 */
export const listInputRoutings: API.OperationMethod<
  ListInputRoutingsRequest,
  ListInputRoutingsResponse,
  ListInputRoutingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(106, __c13, 2) as any as S.Schema<ListInputRoutingsRequest>,
  output: __S(109, __c13, 5) as any as S.Schema<ListInputRoutingsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInputRoutings",
}));

export type ListInputsError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the inputs you have created.
 */
export const listInputs: API.OperationMethod<
  ListInputsRequest,
  ListInputsResponse,
  ListInputsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(110, __c13, 6) as any as S.Schema<ListInputsRequest>,
  output: __S(113, __c14, 1) as any as S.Schema<ListInputsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInputs",
}));

export type ListTagsForResourceError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists the tags (metadata) you have assigned to the resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(114, __c14, 2) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(115, __c14, 3) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PutLoggingOptionsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceInUseException
  | ServiceUnavailableException
  | ThrottlingException
  | UnsupportedOperationException
  | CommonErrors;
/**
 * Sets or updates the AWS IoT Events logging options.
 *
 * If you update the value of any `loggingOptions` field, it takes up to one
 * minute for the change to take effect. If you change the policy attached to the role you
 * specified in the `roleArn` field (for example, to correct an invalid policy), it
 * takes up to five minutes for that change to take effect.
 */
export const putLoggingOptions: API.OperationMethod<
  PutLoggingOptionsRequest,
  PutLoggingOptionsResponse,
  PutLoggingOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(116, __c14, 4) as any as S.Schema<PutLoggingOptionsRequest>,
  output: __S(62, __c7, 6) as any as S.Schema<PutLoggingOptionsResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceInUseException,
    ServiceUnavailableException,
    ThrottlingException,
    UnsupportedOperationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutLoggingOptions",
}));

export type StartDetectorModelAnalysisError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Performs an analysis of your detector model. For more information,
 * see Troubleshooting a detector model
 * in the *AWS IoT Events Developer Guide*.
 */
export const startDetectorModelAnalysis: API.OperationMethod<
  StartDetectorModelAnalysisRequest,
  StartDetectorModelAnalysisResponse,
  StartDetectorModelAnalysisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(117, __c14, 5) as any as S.Schema<StartDetectorModelAnalysisRequest>,
  output: __S(118, __c14, 6) as any as S.Schema<StartDetectorModelAnalysisResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDetectorModelAnalysis",
}));

export type TagResourceError =
  | InternalFailureException
  | InvalidRequestException
  | LimitExceededException
  | ResourceInUseException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Adds to or modifies the tags of the given resource. Tags are metadata that can be used to
 * manage a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(119, __c14, 7) as any as S.Schema<TagResourceRequest>,
  output: __S(62, __c7, 6) as any as S.Schema<TagResourceResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    LimitExceededException,
    ResourceInUseException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Removes the given tags (metadata) from the resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(121, __c15, 1) as any as S.Schema<UntagResourceRequest>,
  output: __S(62, __c7, 6) as any as S.Schema<UntagResourceResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateAlarmModelError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates an alarm model. Any alarms that were created based on the previous version are
 * deleted and then created again as new data arrives.
 */
export const updateAlarmModel: API.OperationMethod<
  UpdateAlarmModelRequest,
  UpdateAlarmModelResponse,
  UpdateAlarmModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(122, __c15, 2) as any as S.Schema<UpdateAlarmModelRequest>,
  output: __S(37, __c4, 5) as any as S.Schema<UpdateAlarmModelResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateAlarmModel",
}));

export type UpdateDetectorModelError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates a detector model. Detectors (instances) spawned by the previous version are
 * deleted and then re-created as new inputs arrive.
 */
export const updateDetectorModel: API.OperationMethod<
  UpdateDetectorModelRequest,
  UpdateDetectorModelResponse,
  UpdateDetectorModelError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(123, __c15, 3) as any as S.Schema<UpdateDetectorModelRequest>,
  output: __S(54, __c6, 6) as any as S.Schema<UpdateDetectorModelResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDetectorModel",
}));

export type UpdateInputError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceInUseException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates an input.
 */
export const updateInput: API.OperationMethod<
  UpdateInputRequest,
  UpdateInputResponse,
  UpdateInputError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124, __c15, 4) as any as S.Schema<UpdateInputRequest>,
  output: __S(60, __c7, 4) as any as S.Schema<UpdateInputResponse>,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceInUseException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateInput",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ key: S.String, value: S.String })).annotate({
        identifier: "Tag",
      });
    case 1:
      return S.Array(__S(0, __c0, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          inputProperty: S.String,
          comparisonOperator: S.String,
          threshold: S.String,
        }),
      ).annotate({ identifier: "SimpleRule" });
    case 3:
      return S.suspend(() => S.Struct({ simpleRule: S.optional(__S(2, __c0, 2)) })).annotate({
        identifier: "AlarmRule",
      });
    case 4:
      return S.suspend(() => S.Struct({ contentExpression: S.String, type: S.String })).annotate({
        identifier: "Payload",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ functionArn: S.String, payload: S.optional(__S(4, __c0, 4)) }),
      ).annotate({ identifier: "LambdaAction" });
    case 6:
      return S.suspend(() => S.Struct({ lambdaAction: S.optional(__S(5, __c0, 5)) })).annotate({
        identifier: "NotificationTargetActions",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ identityStoreId: S.String, userId: S.optional(S.String) }),
      ).annotate({ identifier: "SSOIdentity" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ssoIdentity: S.optional(__S(7, __c0, 7)) })).annotate({
        identifier: "RecipientDetail",
      });
    case 1:
      return S.Array(__S(8, __c1, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          senderId: S.optional(S.String),
          additionalMessage: S.optional(S.String),
          recipients: __S(9, __c1, 1),
        }),
      ).annotate({
        identifier: "SMSConfiguration",
      });
    case 3:
      return S.Array(__S(10, __c1, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({
          subject: S.optional(S.String),
          additionalMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "EmailContent" });
    case 5:
      return S.suspend(() => S.Struct({ to: S.optional(__S(9, __c1, 1)) })).annotate({
        identifier: "EmailRecipients",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          from: S.String,
          content: S.optional(__S(12, __c1, 4)),
          recipients: __S(13, __c1, 5),
        }),
      ).annotate({
        identifier: "EmailConfiguration",
      });
    case 7:
      return S.Array(__S(14, __c1, 6));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          action: __S(6, __c0, 6),
          smsConfigurations: S.optional(__S(11, __c1, 3)),
          emailConfigurations: S.optional(__S(15, __c1, 7)),
        }),
      ).annotate({
        identifier: "NotificationAction",
      });
    case 1:
      return S.Array(__S(16, __c2, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ notificationActions: S.optional(__S(17, __c2, 1)) }),
      ).annotate({
        identifier: "AlarmNotification",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ targetArn: S.String, payload: S.optional(__S(4, __c0, 4)) }),
      ).annotate({
        identifier: "SNSTopicPublishAction",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ mqttTopic: S.String, payload: S.optional(__S(4, __c0, 4)) }),
      ).annotate({
        identifier: "IotTopicPublishAction",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ inputName: S.String, payload: S.optional(__S(4, __c0, 4)) }),
      ).annotate({
        identifier: "IotEventsAction",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          queueUrl: S.String,
          useBase64: S.optional(S.Boolean),
          payload: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({ identifier: "SqsAction" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          deliveryStreamName: S.String,
          separator: S.optional(S.String),
          payload: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({ identifier: "FirehoseAction" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          hashKeyType: S.optional(S.String),
          hashKeyField: S.String,
          hashKeyValue: S.String,
          rangeKeyType: S.optional(S.String),
          rangeKeyField: S.optional(S.String),
          rangeKeyValue: S.optional(S.String),
          operation: S.optional(S.String),
          payloadField: S.optional(S.String),
          tableName: S.String,
          payload: S.optional(__S(4, __c0, 4)),
        }),
      ).annotate({ identifier: "DynamoDBAction" });
    case 1:
      return S.suspend(() =>
        S.Struct({ tableName: S.String, payload: S.optional(__S(4, __c0, 4)) }),
      ).annotate({
        identifier: "DynamoDBv2Action",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          stringValue: S.optional(S.String),
          integerValue: S.optional(S.String),
          doubleValue: S.optional(S.String),
          booleanValue: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AssetPropertyVariant",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ timeInSeconds: S.String, offsetInNanos: S.optional(S.String) }),
      ).annotate({
        identifier: "AssetPropertyTimestamp",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          value: S.optional(__S(26, __c3, 2)),
          timestamp: S.optional(__S(27, __c3, 3)),
          quality: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AssetPropertyValue",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          entryId: S.optional(S.String),
          assetId: S.optional(S.String),
          propertyId: S.optional(S.String),
          propertyAlias: S.optional(S.String),
          propertyValue: S.optional(__S(28, __c3, 4)),
        }),
      ).annotate({
        identifier: "IotSiteWiseAction",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          sns: S.optional(__S(19, __c2, 3)),
          iotTopicPublish: S.optional(__S(20, __c2, 4)),
          lambda: S.optional(__S(5, __c0, 5)),
          iotEvents: S.optional(__S(21, __c2, 5)),
          sqs: S.optional(__S(22, __c2, 6)),
          firehose: S.optional(__S(23, __c2, 7)),
          dynamoDB: S.optional(__S(24, __c3, 0)),
          dynamoDBv2: S.optional(__S(25, __c3, 1)),
          iotSiteWise: S.optional(__S(29, __c3, 5)),
        }),
      ).annotate({ identifier: "AlarmAction" });
    case 7:
      return S.Array(__S(30, __c3, 6));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ alarmActions: S.optional(__S(31, __c3, 7)) })).annotate({
        identifier: "AlarmEventActions",
      });
    case 1:
      return S.suspend(() => S.Struct({ disabledOnInitialization: S.Boolean })).annotate({
        identifier: "InitializationConfiguration",
      });
    case 2:
      return S.suspend(() => S.Struct({ enabled: S.Boolean })).annotate({
        identifier: "AcknowledgeFlow",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          initializationConfiguration: S.optional(__S(33, __c4, 1)),
          acknowledgeFlow: S.optional(__S(34, __c4, 2)),
        }),
      ).annotate({
        identifier: "AlarmCapabilities",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          alarmModelName: S.String,
          alarmModelDescription: S.optional(S.String),
          roleArn: S.String,
          tags: S.optional(__S(1, __c0, 1)),
          key: S.optional(S.String),
          severity: S.optional(S.Number),
          alarmRule: __S(3, __c0, 3),
          alarmNotification: S.optional(__S(18, __c2, 2)),
          alarmEventActions: S.optional(__S(32, __c4, 0)),
          alarmCapabilities: S.optional(__S(35, __c4, 3)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/alarm-models" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateAlarmModelRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          alarmModelArn: S.optional(S.String),
          alarmModelVersion: S.optional(S.String),
          lastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateAlarmModelResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ variableName: S.String, value: S.String })).annotate({
        identifier: "SetVariableAction",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          timerName: S.String,
          seconds: S.optional(S.Number),
          durationExpression: S.optional(S.String),
        }),
      ).annotate({ identifier: "SetTimerAction" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ timerName: S.String })).annotate({
        identifier: "ClearTimerAction",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          setVariable: S.optional(__S(38, __c4, 6)),
          sns: S.optional(__S(19, __c2, 3)),
          iotTopicPublish: S.optional(__S(20, __c2, 4)),
          setTimer: S.optional(__S(39, __c4, 7)),
          clearTimer: S.optional(__S(40, __c5, 0)),
          resetTimer: S.optional(__S(40, __c5, 0)),
          lambda: S.optional(__S(5, __c0, 5)),
          iotEvents: S.optional(__S(21, __c2, 5)),
          sqs: S.optional(__S(22, __c2, 6)),
          firehose: S.optional(__S(23, __c2, 7)),
          dynamoDB: S.optional(__S(24, __c3, 0)),
          dynamoDBv2: S.optional(__S(25, __c3, 1)),
          iotSiteWise: S.optional(__S(29, __c3, 5)),
        }),
      ).annotate({ identifier: "Action" });
    case 2:
      return S.Array(__S(41, __c5, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          eventName: S.String,
          condition: S.optional(S.String),
          actions: S.optional(__S(42, __c5, 2)),
        }),
      ).annotate({ identifier: "Event" });
    case 4:
      return S.Array(__S(43, __c5, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          eventName: S.String,
          condition: S.String,
          actions: S.optional(__S(42, __c5, 2)),
          nextState: S.String,
        }),
      ).annotate({
        identifier: "TransitionEvent",
      });
    case 6:
      return S.Array(__S(45, __c5, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          events: S.optional(__S(44, __c5, 4)),
          transitionEvents: S.optional(__S(46, __c5, 6)),
        }),
      ).annotate({
        identifier: "OnInputLifecycle",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ events: S.optional(__S(44, __c5, 4)) })).annotate({
        identifier: "OnEnterLifecycle",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          stateName: S.String,
          onInput: S.optional(__S(47, __c5, 7)),
          onEnter: S.optional(__S(48, __c6, 0)),
          onExit: S.optional(__S(48, __c6, 0)),
        }),
      ).annotate({ identifier: "State" });
    case 2:
      return S.Array(__S(49, __c6, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ states: __S(50, __c6, 2), initialStateName: S.String }),
      ).annotate({
        identifier: "DetectorModelDefinition",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          detectorModelName: S.String,
          detectorModelDefinition: __S(51, __c6, 3),
          detectorModelDescription: S.optional(S.String),
          key: S.optional(S.String),
          roleArn: S.String,
          tags: S.optional(__S(1, __c0, 1)),
          evaluationMethod: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/detector-models" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateDetectorModelRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          detectorModelName: S.optional(S.String),
          detectorModelVersion: S.optional(S.String),
          detectorModelDescription: S.optional(S.String),
          detectorModelArn: S.optional(S.String),
          roleArn: S.optional(S.String),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
          key: S.optional(S.String),
          evaluationMethod: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DetectorModelConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          detectorModelConfiguration: S.optional(__S(53, __c6, 5)),
        }),
      ).annotate({
        identifier: "CreateDetectorModelResponse",
      });
    case 7:
      return S.suspend(() => S.Struct({ jsonPath: S.String })).annotate({
        identifier: "Attribute",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55, __c6, 7));
    case 1:
      return S.suspend(() => S.Struct({ attributes: __S(56, __c7, 0) })).annotate({
        identifier: "InputDefinition",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          inputName: S.String,
          inputDescription: S.optional(S.String),
          inputDefinition: __S(57, __c7, 1),
          tags: S.optional(__S(1, __c0, 1)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/inputs" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateInputRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          inputName: S.String,
          inputDescription: S.optional(S.String),
          inputArn: S.String,
          creationTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          lastUpdateTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          status: S.String,
        }),
      ).annotate({
        identifier: "InputConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ inputConfiguration: S.optional(__S(59, __c7, 3)) }),
      ).annotate({
        identifier: "CreateInputResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          alarmModelName: S.String.pipe(T.HttpLabel("alarmModelName")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/alarm-models/{alarmModelName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAlarmModelRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAlarmModelResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          detectorModelName: S.String.pipe(T.HttpLabel("detectorModelName")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/detector-models/{detectorModelName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDetectorModelRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ inputName: S.String.pipe(T.HttpLabel("inputName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/inputs/{inputName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteInputRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          alarmModelName: S.String.pipe(T.HttpLabel("alarmModelName")),
          alarmModelVersion: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/alarm-models/{alarmModelName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAlarmModelRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          alarmModelArn: S.optional(S.String),
          alarmModelVersion: S.optional(S.String),
          lastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
          statusMessage: S.optional(S.String),
          alarmModelName: S.optional(S.String),
          alarmModelDescription: S.optional(S.String),
          roleArn: S.optional(S.String),
          key: S.optional(S.String),
          severity: S.optional(S.Number),
          alarmRule: S.optional(__S(3, __c0, 3)),
          alarmNotification: S.optional(__S(18, __c2, 2)),
          alarmEventActions: S.optional(__S(32, __c4, 0)),
          alarmCapabilities: S.optional(__S(35, __c4, 3)),
        }),
      ).annotate({
        identifier: "DescribeAlarmModelResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          detectorModelName: S.String.pipe(T.HttpLabel("detectorModelName")),
          detectorModelVersion: S.optional(S.String).pipe(T.HttpQuery("version")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detector-models/{detectorModelName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeDetectorModelRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          detectorModelDefinition: S.optional(__S(51, __c6, 3)),
          detectorModelConfiguration: S.optional(__S(53, __c6, 5)),
        }),
      ).annotate({ identifier: "DetectorModel" });
    case 5:
      return S.suspend(() => S.Struct({ detectorModel: S.optional(__S(68, __c8, 4)) })).annotate({
        identifier: "DescribeDetectorModelResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ analysisId: S.String.pipe(T.HttpLabel("analysisId")) }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/analysis/detector-models/{analysisId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeDetectorModelAnalysisRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ status: S.optional(S.String) })).annotate({
        identifier: "DescribeDetectorModelAnalysisResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ inputName: S.String.pipe(T.HttpLabel("inputName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/inputs/{inputName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeInputRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          inputConfiguration: S.optional(__S(59, __c7, 3)),
          inputDefinition: S.optional(__S(57, __c7, 1)),
        }),
      ).annotate({ identifier: "Input" });
    case 2:
      return S.suspend(() => S.Struct({ input: S.optional(__S(73, __c9, 1)) })).annotate({
        identifier: "DescribeInputResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/logging" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeLoggingOptionsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ detectorModelName: S.String, keyValue: S.optional(S.String) }),
      ).annotate({
        identifier: "DetectorDebugOption",
      });
    case 5:
      return S.Array(__S(76, __c9, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.String,
          level: S.String,
          enabled: S.Boolean,
          detectorDebugOptions: S.optional(__S(77, __c9, 5)),
        }),
      ).annotate({ identifier: "LoggingOptions" });
    case 7:
      return S.suspend(() => S.Struct({ loggingOptions: S.optional(__S(78, __c9, 6)) })).annotate({
        identifier: "DescribeLoggingOptionsResponse",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          analysisId: S.String.pipe(T.HttpLabel("analysisId")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/analysis/detector-models/{analysisId}/results",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDetectorModelAnalysisResultsRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ path: S.optional(S.String) })).annotate({
        identifier: "AnalysisResultLocation",
      });
    case 2:
      return S.Array(__S(81, __c10, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          level: S.optional(S.String),
          message: S.optional(S.String),
          locations: S.optional(__S(82, __c10, 2)),
        }),
      ).annotate({ identifier: "AnalysisResult" });
    case 4:
      return S.Array(__S(83, __c10, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          analysisResults: S.optional(__S(84, __c10, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetDetectorModelAnalysisResultsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/alarm-models" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAlarmModelsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          alarmModelDescription: S.optional(S.String),
          alarmModelName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AlarmModelSummary",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87, __c10, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          alarmModelSummaries: S.optional(__S(88, __c11, 0)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAlarmModelsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          alarmModelName: S.String.pipe(T.HttpLabel("alarmModelName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/alarm-models/{alarmModelName}/versions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAlarmModelVersionsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          alarmModelName: S.optional(S.String),
          alarmModelArn: S.optional(S.String),
          alarmModelVersion: S.optional(S.String),
          roleArn: S.optional(S.String),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
          statusMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AlarmModelVersionSummary",
      });
    case 4:
      return S.Array(__S(91, __c11, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          alarmModelVersionSummaries: S.optional(__S(92, __c11, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAlarmModelVersionsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/detector-models" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListDetectorModelsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          detectorModelName: S.optional(S.String),
          detectorModelDescription: S.optional(S.String),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DetectorModelSummary",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(95, __c11, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          detectorModelSummaries: S.optional(__S(96, __c12, 0)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDetectorModelsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          detectorModelName: S.String.pipe(T.HttpLabel("detectorModelName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/detector-models/{detectorModelName}/versions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDetectorModelVersionsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          detectorModelName: S.optional(S.String),
          detectorModelVersion: S.optional(S.String),
          detectorModelArn: S.optional(S.String),
          roleArn: S.optional(S.String),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
          evaluationMethod: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DetectorModelVersionSummary",
      });
    case 4:
      return S.Array(__S(99, __c12, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          detectorModelVersionSummaries: S.optional(__S(100, __c12, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDetectorModelVersionsResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ inputName: S.String })).annotate({
        identifier: "IotEventsInputIdentifier",
      });
    case 7:
      return S.suspend(() => S.Struct({ assetModelId: S.String, propertyId: S.String })).annotate({
        identifier: "IotSiteWiseAssetModelPropertyIdentifier",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          iotSiteWiseAssetModelPropertyIdentifier: S.optional(__S(103, __c12, 7)),
        }),
      ).annotate({
        identifier: "IotSiteWiseInputIdentifier",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          iotEventsInputIdentifier: S.optional(__S(102, __c12, 6)),
          iotSiteWiseInputIdentifier: S.optional(__S(104, __c13, 0)),
        }),
      ).annotate({
        identifier: "InputIdentifier",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          inputIdentifier: __S(105, __c13, 1),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/input-routings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListInputRoutingsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), arn: S.optional(S.String) }),
      ).annotate({ identifier: "RoutedResource" });
    case 4:
      return S.Array(__S(107, __c13, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          routedResources: S.optional(__S(108, __c13, 4)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListInputRoutingsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/inputs" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListInputsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          inputName: S.optional(S.String),
          inputDescription: S.optional(S.String),
          inputArn: S.optional(S.String),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          status: S.optional(S.String),
        }),
      ).annotate({ identifier: "InputSummary" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(111, __c13, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          inputSummaries: S.optional(__S(112, __c14, 0)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListInputsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpQuery("resourceArn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/tags" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(1, __c0, 1)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ loggingOptions: __S(78, __c9, 6) }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/logging" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutLoggingOptionsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ detectorModelDefinition: __S(51, __c6, 3) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/analysis/detector-models" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartDetectorModelAnalysisRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ analysisId: S.optional(S.String) })).annotate({
        identifier: "StartDetectorModelAnalysisResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpQuery("resourceArn")),
          tags: __S(1, __c0, 1),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/tags" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "TagResourceRequest",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpQuery("resourceArn")),
          tagKeys: __S(120, __c15, 0).pipe(T.HttpQuery("tagKeys")),
        }).pipe(T.all(T.Http({ method: "DELETE", uri: "/tags" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UntagResourceRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          alarmModelName: S.String.pipe(T.HttpLabel("alarmModelName")),
          alarmModelDescription: S.optional(S.String),
          roleArn: S.String,
          severity: S.optional(S.Number),
          alarmRule: __S(3, __c0, 3),
          alarmNotification: S.optional(__S(18, __c2, 2)),
          alarmEventActions: S.optional(__S(32, __c4, 0)),
          alarmCapabilities: S.optional(__S(35, __c4, 3)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/alarm-models/{alarmModelName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAlarmModelRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          detectorModelName: S.String.pipe(T.HttpLabel("detectorModelName")),
          detectorModelDefinition: __S(51, __c6, 3),
          detectorModelDescription: S.optional(S.String),
          roleArn: S.String,
          evaluationMethod: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/detector-models/{detectorModelName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDetectorModelRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          inputName: S.String.pipe(T.HttpLabel("inputName")),
          inputDescription: S.optional(S.String),
          inputDefinition: __S(57, __c7, 1),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/inputs/{inputName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateInputRequest",
      });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
