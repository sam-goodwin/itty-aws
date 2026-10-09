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
const Tag = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<Tag>;
export type Tags = Tag[];
const Tags = /*@__PURE__*/ __L.at(__c0, 1);
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
const ComparisonOperator = /*@__PURE__*/ S.String;

export type Threshold = string;
export interface SimpleRule {
  inputProperty: string;
  comparisonOperator: ComparisonOperator;
  threshold: string;
}
const SimpleRule = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<SimpleRule>;
export interface AlarmRule {
  simpleRule?: SimpleRule;
}
const AlarmRule = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<AlarmRule>;
export type ContentExpression = string;
export type PayloadType = "STRING" | "JSON" | (string & {});
const PayloadType = /*@__PURE__*/ S.String;

export interface Payload {
  contentExpression: string;
  type: PayloadType;
}
const Payload = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<Payload>;
export interface LambdaAction {
  functionArn: string;
  payload?: Payload;
}
const LambdaAction = /*@__PURE__*/ __L.at(__c0, 5) as any as S.Schema<LambdaAction>;
export interface NotificationTargetActions {
  lambdaAction?: LambdaAction;
}
const NotificationTargetActions = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<NotificationTargetActions>;
export type SMSSenderId = string;
export type NotificationAdditionalMessage = string;
export type IdentityStoreId = string;
export type SSOReferenceId = string;
export interface SSOIdentity {
  identityStoreId: string;
  userId?: string;
}
const SSOIdentity = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<SSOIdentity>;
export interface RecipientDetail {
  ssoIdentity?: SSOIdentity;
}
const RecipientDetail = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<RecipientDetail>;
export type RecipientDetails = RecipientDetail[];
const RecipientDetails = /*@__PURE__*/ __L.at(__c1, 1);
export interface SMSConfiguration {
  senderId?: string;
  additionalMessage?: string;
  recipients: RecipientDetail[];
}
const SMSConfiguration = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<SMSConfiguration>;
export type SMSConfigurations = SMSConfiguration[];
const SMSConfigurations = /*@__PURE__*/ __L.at(__c1, 3);
export type FromEmail = string;
export type EmailSubject = string;
export interface EmailContent {
  subject?: string;
  additionalMessage?: string;
}
const EmailContent = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<EmailContent>;
export interface EmailRecipients {
  to?: RecipientDetail[];
}
const EmailRecipients = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<EmailRecipients>;
export interface EmailConfiguration {
  from: string;
  content?: EmailContent;
  recipients: EmailRecipients;
}
const EmailConfiguration = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<EmailConfiguration>;
export type EmailConfigurations = EmailConfiguration[];
const EmailConfigurations = /*@__PURE__*/ __L.at(__c1, 7);
export interface NotificationAction {
  action: NotificationTargetActions;
  smsConfigurations?: SMSConfiguration[];
  emailConfigurations?: EmailConfiguration[];
}
const NotificationAction = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<NotificationAction>;
export type NotificationActions = NotificationAction[];
const NotificationActions = /*@__PURE__*/ __L.at(__c2, 1);
export interface AlarmNotification {
  notificationActions?: NotificationAction[];
}
const AlarmNotification = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<AlarmNotification>;
export interface SNSTopicPublishAction {
  targetArn: string;
  payload?: Payload;
}
const SNSTopicPublishAction = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<SNSTopicPublishAction>;
export type MQTTTopic = string;
export interface IotTopicPublishAction {
  mqttTopic: string;
  payload?: Payload;
}
const IotTopicPublishAction = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<IotTopicPublishAction>;
export type InputName = string;
export interface IotEventsAction {
  inputName: string;
  payload?: Payload;
}
const IotEventsAction = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<IotEventsAction>;
export type QueueUrl = string;
export type UseBase64 = boolean;
export interface SqsAction {
  queueUrl: string;
  useBase64?: boolean;
  payload?: Payload;
}
const SqsAction = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<SqsAction>;
export type DeliveryStreamName = string;
export type FirehoseSeparator = string;
export interface FirehoseAction {
  deliveryStreamName: string;
  separator?: string;
  payload?: Payload;
}
const FirehoseAction = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<FirehoseAction>;
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
const DynamoDBAction = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<DynamoDBAction>;
export interface DynamoDBv2Action {
  tableName: string;
  payload?: Payload;
}
const DynamoDBv2Action = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<DynamoDBv2Action>;
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
const AssetPropertyVariant = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<AssetPropertyVariant>;
export type AssetPropertyTimeInSeconds = string;
export type AssetPropertyOffsetInNanos = string;
export interface AssetPropertyTimestamp {
  timeInSeconds: string;
  offsetInNanos?: string;
}
const AssetPropertyTimestamp = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<AssetPropertyTimestamp>;
export type AssetPropertyQuality = string;
export interface AssetPropertyValue {
  value?: AssetPropertyVariant;
  timestamp?: AssetPropertyTimestamp;
  quality?: string;
}
const AssetPropertyValue = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<AssetPropertyValue>;
export interface IotSiteWiseAction {
  entryId?: string;
  assetId?: string;
  propertyId?: string;
  propertyAlias?: string;
  propertyValue?: AssetPropertyValue;
}
const IotSiteWiseAction = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<IotSiteWiseAction>;
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
const AlarmAction = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<AlarmAction>;
export type AlarmActions = AlarmAction[];
const AlarmActions = /*@__PURE__*/ __L.at(__c3, 7);
export interface AlarmEventActions {
  alarmActions?: AlarmAction[];
}
const AlarmEventActions = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<AlarmEventActions>;
export type DisabledOnInitialization = boolean;
export interface InitializationConfiguration {
  disabledOnInitialization: boolean;
}
const InitializationConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<InitializationConfiguration>;
export type AcknowledgeFlowEnabled = boolean;
export interface AcknowledgeFlow {
  enabled: boolean;
}
const AcknowledgeFlow = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<AcknowledgeFlow>;
export interface AlarmCapabilities {
  initializationConfiguration?: InitializationConfiguration;
  acknowledgeFlow?: AcknowledgeFlow;
}
const AlarmCapabilities = /*@__PURE__*/ __L.at(__c4, 3) as any as S.Schema<AlarmCapabilities>;
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
const CreateAlarmModelRequest = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<CreateAlarmModelRequest>;
export type AlarmModelArn = string;
export type AlarmModelVersion = string;
export type AlarmModelVersionStatus =
  | "ACTIVE"
  | "ACTIVATING"
  | "INACTIVE"
  | "FAILED"
  | (string & {});
const AlarmModelVersionStatus = /*@__PURE__*/ S.String;

export interface CreateAlarmModelResponse {
  creationTime?: Date;
  alarmModelArn?: string;
  alarmModelVersion?: string;
  lastUpdateTime?: Date;
  status?: AlarmModelVersionStatus;
}
const CreateAlarmModelResponse = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<CreateAlarmModelResponse>;
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
const SetVariableAction = /*@__PURE__*/ __L.at(__c4, 6) as any as S.Schema<SetVariableAction>;
export type TimerName = string;
export type Seconds = number;
export interface SetTimerAction {
  timerName: string;
  seconds?: number;
  durationExpression?: string;
}
const SetTimerAction = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<SetTimerAction>;
export interface ClearTimerAction {
  timerName: string;
}
const ClearTimerAction = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<ClearTimerAction>;
export interface ResetTimerAction {
  timerName: string;
}
const ResetTimerAction = ClearTimerAction as any as S.Schema<ResetTimerAction>;
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
const Action = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<Action>;
export type Actions = Action[];
const Actions = /*@__PURE__*/ __L.at(__c5, 2);
export interface Event {
  eventName: string;
  condition?: string;
  actions?: Action[];
}
const Event = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<Event>;
export type Events = Event[];
const Events = /*@__PURE__*/ __L.at(__c5, 4);
export interface TransitionEvent {
  eventName: string;
  condition: string;
  actions?: Action[];
  nextState: string;
}
const TransitionEvent = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<TransitionEvent>;
export type TransitionEvents = TransitionEvent[];
const TransitionEvents = /*@__PURE__*/ __L.at(__c5, 6);
export interface OnInputLifecycle {
  events?: Event[];
  transitionEvents?: TransitionEvent[];
}
const OnInputLifecycle = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<OnInputLifecycle>;
export interface OnEnterLifecycle {
  events?: Event[];
}
const OnEnterLifecycle = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<OnEnterLifecycle>;
export interface OnExitLifecycle {
  events?: Event[];
}
const OnExitLifecycle = OnEnterLifecycle as any as S.Schema<OnExitLifecycle>;
export interface State {
  stateName: string;
  onInput?: OnInputLifecycle;
  onEnter?: OnEnterLifecycle;
  onExit?: OnExitLifecycle;
}
const State = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<State>;
export type States = State[];
const States = /*@__PURE__*/ __L.at(__c6, 2);
export interface DetectorModelDefinition {
  states: State[];
  initialStateName: string;
}
const DetectorModelDefinition = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<DetectorModelDefinition>;
export type DetectorModelDescription = string;
export type EvaluationMethod = "BATCH" | "SERIAL" | (string & {});
const EvaluationMethod = /*@__PURE__*/ S.String;

export interface CreateDetectorModelRequest {
  detectorModelName: string;
  detectorModelDefinition: DetectorModelDefinition;
  detectorModelDescription?: string;
  key?: string;
  roleArn: string;
  tags?: Tag[];
  evaluationMethod?: EvaluationMethod;
}
const CreateDetectorModelRequest = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<CreateDetectorModelRequest>;
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
const DetectorModelVersionStatus = /*@__PURE__*/ S.String;

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
const DetectorModelConfiguration = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<DetectorModelConfiguration>;
export interface CreateDetectorModelResponse {
  detectorModelConfiguration?: DetectorModelConfiguration;
}
const CreateDetectorModelResponse = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<CreateDetectorModelResponse>;
export type InputDescription = string;
export interface Attribute {
  jsonPath: string;
}
const Attribute = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<Attribute>;
export type Attributes = Attribute[];
const Attributes = /*@__PURE__*/ __L.at(__c7, 0);
export interface InputDefinition {
  attributes: Attribute[];
}
const InputDefinition = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<InputDefinition>;
export interface CreateInputRequest {
  inputName: string;
  inputDescription?: string;
  inputDefinition: InputDefinition;
  tags?: Tag[];
}
const CreateInputRequest = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<CreateInputRequest>;
export type InputArn = string;
export type InputStatus = "CREATING" | "UPDATING" | "ACTIVE" | "DELETING" | (string & {});
const InputStatus = /*@__PURE__*/ S.String;

export interface InputConfiguration {
  inputName: string;
  inputDescription?: string;
  inputArn: string;
  creationTime: Date;
  lastUpdateTime: Date;
  status: InputStatus;
}
const InputConfiguration = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<InputConfiguration>;
export interface CreateInputResponse {
  inputConfiguration?: InputConfiguration;
}
const CreateInputResponse = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<CreateInputResponse>;
export interface DeleteAlarmModelRequest {
  alarmModelName: string;
}
const DeleteAlarmModelRequest = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<DeleteAlarmModelRequest>;
export interface DeleteAlarmModelResponse {}
const DeleteAlarmModelResponse = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<DeleteAlarmModelResponse>;
export interface DeleteDetectorModelRequest {
  detectorModelName: string;
}
const DeleteDetectorModelRequest = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<DeleteDetectorModelRequest>;
export interface DeleteDetectorModelResponse {}
const DeleteDetectorModelResponse =
  DeleteAlarmModelResponse as any as S.Schema<DeleteDetectorModelResponse>;
export interface DeleteInputRequest {
  inputName: string;
}
const DeleteInputRequest = /*@__PURE__*/ __L.at(__c8, 0) as any as S.Schema<DeleteInputRequest>;
export interface DeleteInputResponse {}
const DeleteInputResponse = DeleteAlarmModelResponse as any as S.Schema<DeleteInputResponse>;
export interface DescribeAlarmModelRequest {
  alarmModelName: string;
  alarmModelVersion?: string;
}
const DescribeAlarmModelRequest = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<DescribeAlarmModelRequest>;
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
const DescribeAlarmModelResponse = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<DescribeAlarmModelResponse>;
export interface DescribeDetectorModelRequest {
  detectorModelName: string;
  detectorModelVersion?: string;
}
const DescribeDetectorModelRequest = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<DescribeDetectorModelRequest>;
export interface DetectorModel {
  detectorModelDefinition?: DetectorModelDefinition;
  detectorModelConfiguration?: DetectorModelConfiguration;
}
const DetectorModel = /*@__PURE__*/ __L.at(__c8, 4) as any as S.Schema<DetectorModel>;
export interface DescribeDetectorModelResponse {
  detectorModel?: DetectorModel;
}
const DescribeDetectorModelResponse = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<DescribeDetectorModelResponse>;
export type AnalysisId = string;
export interface DescribeDetectorModelAnalysisRequest {
  analysisId: string;
}
const DescribeDetectorModelAnalysisRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<DescribeDetectorModelAnalysisRequest>;
export type AnalysisStatus = "RUNNING" | "COMPLETE" | "FAILED" | (string & {});
const AnalysisStatus = /*@__PURE__*/ S.String;

export interface DescribeDetectorModelAnalysisResponse {
  status?: AnalysisStatus;
}
const DescribeDetectorModelAnalysisResponse = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<DescribeDetectorModelAnalysisResponse>;
export interface DescribeInputRequest {
  inputName: string;
}
const DescribeInputRequest = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<DescribeInputRequest>;
export interface Input {
  inputConfiguration?: InputConfiguration;
  inputDefinition?: InputDefinition;
}
const Input = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<Input>;
export interface DescribeInputResponse {
  input?: Input;
}
const DescribeInputResponse = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<DescribeInputResponse>;
export interface DescribeLoggingOptionsRequest {}
const DescribeLoggingOptionsRequest = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<DescribeLoggingOptionsRequest>;
export type LoggingLevel = "ERROR" | "INFO" | "DEBUG" | (string & {});
const LoggingLevel = /*@__PURE__*/ S.String;

export type LoggingEnabled = boolean;
export type KeyValue = string;
export interface DetectorDebugOption {
  detectorModelName: string;
  keyValue?: string;
}
const DetectorDebugOption = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<DetectorDebugOption>;
export type DetectorDebugOptions = DetectorDebugOption[];
const DetectorDebugOptions = /*@__PURE__*/ __L.at(__c9, 5);
export interface LoggingOptions {
  roleArn: string;
  level: LoggingLevel;
  enabled: boolean;
  detectorDebugOptions?: DetectorDebugOption[];
}
const LoggingOptions = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<LoggingOptions>;
export interface DescribeLoggingOptionsResponse {
  loggingOptions?: LoggingOptions;
}
const DescribeLoggingOptionsResponse = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<DescribeLoggingOptionsResponse>;
export type NextToken = string;
export type MaxAnalysisResults = number;
export interface GetDetectorModelAnalysisResultsRequest {
  analysisId: string;
  nextToken?: string;
  maxResults?: number;
}
const GetDetectorModelAnalysisResultsRequest = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<GetDetectorModelAnalysisResultsRequest>;
export type AnalysisType = string;
export type AnalysisResultLevel = "INFO" | "WARNING" | "ERROR" | (string & {});
const AnalysisResultLevel = /*@__PURE__*/ S.String;

export type AnalysisMessage = string;
export type AnalysisResultLocationPath = string;
export interface AnalysisResultLocation {
  path?: string;
}
const AnalysisResultLocation = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<AnalysisResultLocation>;
export type AnalysisResultLocations = AnalysisResultLocation[];
const AnalysisResultLocations = /*@__PURE__*/ __L.at(__c10, 2);
export interface AnalysisResult {
  type?: string;
  level?: AnalysisResultLevel;
  message?: string;
  locations?: AnalysisResultLocation[];
}
const AnalysisResult = /*@__PURE__*/ __L.at(__c10, 3) as any as S.Schema<AnalysisResult>;
export type AnalysisResults = AnalysisResult[];
const AnalysisResults = /*@__PURE__*/ __L.at(__c10, 4);
export interface GetDetectorModelAnalysisResultsResponse {
  analysisResults?: AnalysisResult[];
  nextToken?: string;
}
const GetDetectorModelAnalysisResultsResponse = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<GetDetectorModelAnalysisResultsResponse>;
export type MaxResults = number;
export interface ListAlarmModelsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListAlarmModelsRequest = /*@__PURE__*/ __L.at(
  __c10,
  6,
) as any as S.Schema<ListAlarmModelsRequest>;
export interface AlarmModelSummary {
  creationTime?: Date;
  alarmModelDescription?: string;
  alarmModelName?: string;
}
const AlarmModelSummary = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<AlarmModelSummary>;
export type AlarmModelSummaries = AlarmModelSummary[];
const AlarmModelSummaries = /*@__PURE__*/ __L.at(__c11, 0);
export interface ListAlarmModelsResponse {
  alarmModelSummaries?: AlarmModelSummary[];
  nextToken?: string;
}
const ListAlarmModelsResponse = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<ListAlarmModelsResponse>;
export interface ListAlarmModelVersionsRequest {
  alarmModelName: string;
  nextToken?: string;
  maxResults?: number;
}
const ListAlarmModelVersionsRequest = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<ListAlarmModelVersionsRequest>;
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
const AlarmModelVersionSummary = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<AlarmModelVersionSummary>;
export type AlarmModelVersionSummaries = AlarmModelVersionSummary[];
const AlarmModelVersionSummaries = /*@__PURE__*/ __L.at(__c11, 4);
export interface ListAlarmModelVersionsResponse {
  alarmModelVersionSummaries?: AlarmModelVersionSummary[];
  nextToken?: string;
}
const ListAlarmModelVersionsResponse = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<ListAlarmModelVersionsResponse>;
export interface ListDetectorModelsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListDetectorModelsRequest = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<ListDetectorModelsRequest>;
export interface DetectorModelSummary {
  detectorModelName?: string;
  detectorModelDescription?: string;
  creationTime?: Date;
}
const DetectorModelSummary = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<DetectorModelSummary>;
export type DetectorModelSummaries = DetectorModelSummary[];
const DetectorModelSummaries = /*@__PURE__*/ __L.at(__c12, 0);
export interface ListDetectorModelsResponse {
  detectorModelSummaries?: DetectorModelSummary[];
  nextToken?: string;
}
const ListDetectorModelsResponse = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<ListDetectorModelsResponse>;
export interface ListDetectorModelVersionsRequest {
  detectorModelName: string;
  nextToken?: string;
  maxResults?: number;
}
const ListDetectorModelVersionsRequest = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<ListDetectorModelVersionsRequest>;
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
const DetectorModelVersionSummary = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<DetectorModelVersionSummary>;
export type DetectorModelVersionSummaries = DetectorModelVersionSummary[];
const DetectorModelVersionSummaries = /*@__PURE__*/ __L.at(__c12, 4);
export interface ListDetectorModelVersionsResponse {
  detectorModelVersionSummaries?: DetectorModelVersionSummary[];
  nextToken?: string;
}
const ListDetectorModelVersionsResponse = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<ListDetectorModelVersionsResponse>;
export interface IotEventsInputIdentifier {
  inputName: string;
}
const IotEventsInputIdentifier = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<IotEventsInputIdentifier>;
export type AssetModelId = string;
export interface IotSiteWiseAssetModelPropertyIdentifier {
  assetModelId: string;
  propertyId: string;
}
const IotSiteWiseAssetModelPropertyIdentifier = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<IotSiteWiseAssetModelPropertyIdentifier>;
export interface IotSiteWiseInputIdentifier {
  iotSiteWiseAssetModelPropertyIdentifier?: IotSiteWiseAssetModelPropertyIdentifier;
}
const IotSiteWiseInputIdentifier = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<IotSiteWiseInputIdentifier>;
export interface InputIdentifier {
  iotEventsInputIdentifier?: IotEventsInputIdentifier;
  iotSiteWiseInputIdentifier?: IotSiteWiseInputIdentifier;
}
const InputIdentifier = /*@__PURE__*/ __L.at(__c13, 1) as any as S.Schema<InputIdentifier>;
export interface ListInputRoutingsRequest {
  inputIdentifier: InputIdentifier;
  maxResults?: number;
  nextToken?: string;
}
const ListInputRoutingsRequest = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<ListInputRoutingsRequest>;
export type ResourceName = string;
export interface RoutedResource {
  name?: string;
  arn?: string;
}
const RoutedResource = /*@__PURE__*/ __L.at(__c13, 3) as any as S.Schema<RoutedResource>;
export type RoutedResources = RoutedResource[];
const RoutedResources = /*@__PURE__*/ __L.at(__c13, 4);
export interface ListInputRoutingsResponse {
  routedResources?: RoutedResource[];
  nextToken?: string;
}
const ListInputRoutingsResponse = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<ListInputRoutingsResponse>;
export interface ListInputsRequest {
  nextToken?: string;
  maxResults?: number;
}
const ListInputsRequest = /*@__PURE__*/ __L.at(__c13, 6) as any as S.Schema<ListInputsRequest>;
export interface InputSummary {
  inputName?: string;
  inputDescription?: string;
  inputArn?: string;
  creationTime?: Date;
  lastUpdateTime?: Date;
  status?: InputStatus;
}
const InputSummary = /*@__PURE__*/ __L.at(__c13, 7) as any as S.Schema<InputSummary>;
export type InputSummaries = InputSummary[];
const InputSummaries = /*@__PURE__*/ __L.at(__c14, 0);
export interface ListInputsResponse {
  inputSummaries?: InputSummary[];
  nextToken?: string;
}
const ListInputsResponse = /*@__PURE__*/ __L.at(__c14, 1) as any as S.Schema<ListInputsResponse>;
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  tags?: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface PutLoggingOptionsRequest {
  loggingOptions: LoggingOptions;
}
const PutLoggingOptionsRequest = /*@__PURE__*/ __L.at(
  __c14,
  4,
) as any as S.Schema<PutLoggingOptionsRequest>;
export interface PutLoggingOptionsResponse {}
const PutLoggingOptionsResponse =
  DeleteAlarmModelResponse as any as S.Schema<PutLoggingOptionsResponse>;
export interface StartDetectorModelAnalysisRequest {
  detectorModelDefinition: DetectorModelDefinition;
}
const StartDetectorModelAnalysisRequest = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<StartDetectorModelAnalysisRequest>;
export interface StartDetectorModelAnalysisResponse {
  analysisId?: string;
}
const StartDetectorModelAnalysisResponse = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<StartDetectorModelAnalysisResponse>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c14, 7) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteAlarmModelResponse as any as S.Schema<TagResourceResponse>;
export type TagKeys = string[];
const TagKeys = /*@__PURE__*/ __L.at(__c15, 0);
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteAlarmModelResponse as any as S.Schema<UntagResourceResponse>;
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
const UpdateAlarmModelRequest = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<UpdateAlarmModelRequest>;
export interface UpdateAlarmModelResponse {
  creationTime?: Date;
  alarmModelArn?: string;
  alarmModelVersion?: string;
  lastUpdateTime?: Date;
  status?: AlarmModelVersionStatus;
}
const UpdateAlarmModelResponse =
  CreateAlarmModelResponse as any as S.Schema<UpdateAlarmModelResponse>;
export interface UpdateDetectorModelRequest {
  detectorModelName: string;
  detectorModelDefinition: DetectorModelDefinition;
  detectorModelDescription?: string;
  roleArn: string;
  evaluationMethod?: EvaluationMethod;
}
const UpdateDetectorModelRequest = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<UpdateDetectorModelRequest>;
export interface UpdateDetectorModelResponse {
  detectorModelConfiguration?: DetectorModelConfiguration;
}
const UpdateDetectorModelResponse =
  CreateDetectorModelResponse as any as S.Schema<UpdateDetectorModelResponse>;
export interface UpdateInputRequest {
  inputName: string;
  inputDescription?: string;
  inputDefinition: InputDefinition;
}
const UpdateInputRequest = /*@__PURE__*/ __L.at(__c15, 4) as any as S.Schema<UpdateInputRequest>;
export interface UpdateInputResponse {
  inputConfiguration?: InputConfiguration;
}
const UpdateInputResponse = CreateInputResponse as any as S.Schema<UpdateInputResponse>;
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
  input: CreateAlarmModelRequest,
  output: CreateAlarmModelResponse,
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
  input: CreateDetectorModelRequest,
  output: CreateDetectorModelResponse,
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
  input: CreateInputRequest,
  output: CreateInputResponse,
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
  input: DeleteAlarmModelRequest,
  output: DeleteAlarmModelResponse,
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
  input: DeleteDetectorModelRequest,
  output: DeleteDetectorModelResponse,
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
  input: DeleteInputRequest,
  output: DeleteInputResponse,
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
  input: DescribeAlarmModelRequest,
  output: DescribeAlarmModelResponse,
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
  input: DescribeDetectorModelRequest,
  output: DescribeDetectorModelResponse,
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
  input: DescribeDetectorModelAnalysisRequest,
  output: DescribeDetectorModelAnalysisResponse,
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
  input: DescribeInputRequest,
  output: DescribeInputResponse,
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
  input: DescribeLoggingOptionsRequest,
  output: DescribeLoggingOptionsResponse,
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
  input: GetDetectorModelAnalysisResultsRequest,
  output: GetDetectorModelAnalysisResultsResponse,
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
  input: ListAlarmModelsRequest,
  output: ListAlarmModelsResponse,
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
  input: ListAlarmModelVersionsRequest,
  output: ListAlarmModelVersionsResponse,
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
  input: ListDetectorModelsRequest,
  output: ListDetectorModelsResponse,
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
  input: ListDetectorModelVersionsRequest,
  output: ListDetectorModelVersionsResponse,
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
  input: ListInputRoutingsRequest,
  output: ListInputRoutingsResponse,
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
  input: ListInputsRequest,
  output: ListInputsResponse,
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
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
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
  input: PutLoggingOptionsRequest,
  output: PutLoggingOptionsResponse,
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
  input: StartDetectorModelAnalysisRequest,
  output: StartDetectorModelAnalysisResponse,
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
  input: TagResourceRequest,
  output: TagResourceResponse,
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
  input: UntagResourceRequest,
  output: UntagResourceResponse,
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
  input: UpdateAlarmModelRequest,
  output: UpdateAlarmModelResponse,
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
  input: UpdateDetectorModelRequest,
  output: UpdateDetectorModelResponse,
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
  input: UpdateInputRequest,
  output: UpdateInputResponse,
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
      return S.Array(Tag);
    case 2:
      return S.suspend(() =>
        S.Struct({
          inputProperty: S.String,
          comparisonOperator: ComparisonOperator,
          threshold: S.String,
        }),
      ).annotate({ identifier: "SimpleRule" });
    case 3:
      return S.suspend(() => S.Struct({ simpleRule: S.optional(SimpleRule) })).annotate({
        identifier: "AlarmRule",
      });
    case 4:
      return S.suspend(() => S.Struct({ contentExpression: S.String, type: PayloadType })).annotate(
        { identifier: "Payload" },
      );
    case 5:
      return S.suspend(() =>
        S.Struct({ functionArn: S.String, payload: S.optional(Payload) }),
      ).annotate({ identifier: "LambdaAction" });
    case 6:
      return S.suspend(() => S.Struct({ lambdaAction: S.optional(LambdaAction) })).annotate({
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
      return S.suspend(() => S.Struct({ ssoIdentity: S.optional(SSOIdentity) })).annotate({
        identifier: "RecipientDetail",
      });
    case 1:
      return S.Array(RecipientDetail);
    case 2:
      return S.suspend(() =>
        S.Struct({
          senderId: S.optional(S.String),
          additionalMessage: S.optional(S.String),
          recipients: RecipientDetails,
        }),
      ).annotate({
        identifier: "SMSConfiguration",
      });
    case 3:
      return S.Array(SMSConfiguration);
    case 4:
      return S.suspend(() =>
        S.Struct({
          subject: S.optional(S.String),
          additionalMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "EmailContent" });
    case 5:
      return S.suspend(() => S.Struct({ to: S.optional(RecipientDetails) })).annotate({
        identifier: "EmailRecipients",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          from: S.String,
          content: S.optional(EmailContent),
          recipients: EmailRecipients,
        }),
      ).annotate({
        identifier: "EmailConfiguration",
      });
    case 7:
      return S.Array(EmailConfiguration);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          action: NotificationTargetActions,
          smsConfigurations: S.optional(SMSConfigurations),
          emailConfigurations: S.optional(EmailConfigurations),
        }),
      ).annotate({
        identifier: "NotificationAction",
      });
    case 1:
      return S.Array(NotificationAction);
    case 2:
      return S.suspend(() =>
        S.Struct({ notificationActions: S.optional(NotificationActions) }),
      ).annotate({
        identifier: "AlarmNotification",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ targetArn: S.String, payload: S.optional(Payload) }),
      ).annotate({
        identifier: "SNSTopicPublishAction",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ mqttTopic: S.String, payload: S.optional(Payload) }),
      ).annotate({
        identifier: "IotTopicPublishAction",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ inputName: S.String, payload: S.optional(Payload) }),
      ).annotate({
        identifier: "IotEventsAction",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          queueUrl: S.String,
          useBase64: S.optional(S.Boolean),
          payload: S.optional(Payload),
        }),
      ).annotate({ identifier: "SqsAction" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          deliveryStreamName: S.String,
          separator: S.optional(S.String),
          payload: S.optional(Payload),
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
          payload: S.optional(Payload),
        }),
      ).annotate({ identifier: "DynamoDBAction" });
    case 1:
      return S.suspend(() =>
        S.Struct({ tableName: S.String, payload: S.optional(Payload) }),
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
          value: S.optional(AssetPropertyVariant),
          timestamp: S.optional(AssetPropertyTimestamp),
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
          propertyValue: S.optional(AssetPropertyValue),
        }),
      ).annotate({
        identifier: "IotSiteWiseAction",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          sns: S.optional(SNSTopicPublishAction),
          iotTopicPublish: S.optional(IotTopicPublishAction),
          lambda: S.optional(LambdaAction),
          iotEvents: S.optional(IotEventsAction),
          sqs: S.optional(SqsAction),
          firehose: S.optional(FirehoseAction),
          dynamoDB: S.optional(DynamoDBAction),
          dynamoDBv2: S.optional(DynamoDBv2Action),
          iotSiteWise: S.optional(IotSiteWiseAction),
        }),
      ).annotate({ identifier: "AlarmAction" });
    case 7:
      return S.Array(AlarmAction);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ alarmActions: S.optional(AlarmActions) })).annotate({
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
          initializationConfiguration: S.optional(InitializationConfiguration),
          acknowledgeFlow: S.optional(AcknowledgeFlow),
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
          tags: S.optional(Tags),
          key: S.optional(S.String),
          severity: S.optional(S.Number),
          alarmRule: AlarmRule,
          alarmNotification: S.optional(AlarmNotification),
          alarmEventActions: S.optional(AlarmEventActions),
          alarmCapabilities: S.optional(AlarmCapabilities),
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
          status: S.optional(AlarmModelVersionStatus),
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
          setVariable: S.optional(SetVariableAction),
          sns: S.optional(SNSTopicPublishAction),
          iotTopicPublish: S.optional(IotTopicPublishAction),
          setTimer: S.optional(SetTimerAction),
          clearTimer: S.optional(ClearTimerAction),
          resetTimer: S.optional(ResetTimerAction),
          lambda: S.optional(LambdaAction),
          iotEvents: S.optional(IotEventsAction),
          sqs: S.optional(SqsAction),
          firehose: S.optional(FirehoseAction),
          dynamoDB: S.optional(DynamoDBAction),
          dynamoDBv2: S.optional(DynamoDBv2Action),
          iotSiteWise: S.optional(IotSiteWiseAction),
        }),
      ).annotate({ identifier: "Action" });
    case 2:
      return S.Array(Action);
    case 3:
      return S.suspend(() =>
        S.Struct({
          eventName: S.String,
          condition: S.optional(S.String),
          actions: S.optional(Actions),
        }),
      ).annotate({ identifier: "Event" });
    case 4:
      return S.Array(Event);
    case 5:
      return S.suspend(() =>
        S.Struct({
          eventName: S.String,
          condition: S.String,
          actions: S.optional(Actions),
          nextState: S.String,
        }),
      ).annotate({
        identifier: "TransitionEvent",
      });
    case 6:
      return S.Array(TransitionEvent);
    case 7:
      return S.suspend(() =>
        S.Struct({
          events: S.optional(Events),
          transitionEvents: S.optional(TransitionEvents),
        }),
      ).annotate({
        identifier: "OnInputLifecycle",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ events: S.optional(Events) })).annotate({
        identifier: "OnEnterLifecycle",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          stateName: S.String,
          onInput: S.optional(OnInputLifecycle),
          onEnter: S.optional(OnEnterLifecycle),
          onExit: S.optional(OnExitLifecycle),
        }),
      ).annotate({ identifier: "State" });
    case 2:
      return S.Array(State);
    case 3:
      return S.suspend(() => S.Struct({ states: States, initialStateName: S.String })).annotate({
        identifier: "DetectorModelDefinition",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          detectorModelName: S.String,
          detectorModelDefinition: DetectorModelDefinition,
          detectorModelDescription: S.optional(S.String),
          key: S.optional(S.String),
          roleArn: S.String,
          tags: S.optional(Tags),
          evaluationMethod: S.optional(EvaluationMethod),
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
          status: S.optional(DetectorModelVersionStatus),
          key: S.optional(S.String),
          evaluationMethod: S.optional(EvaluationMethod),
        }),
      ).annotate({
        identifier: "DetectorModelConfiguration",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          detectorModelConfiguration: S.optional(DetectorModelConfiguration),
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
      return S.Array(Attribute);
    case 1:
      return S.suspend(() => S.Struct({ attributes: Attributes })).annotate({
        identifier: "InputDefinition",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          inputName: S.String,
          inputDescription: S.optional(S.String),
          inputDefinition: InputDefinition,
          tags: S.optional(Tags),
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
          status: InputStatus,
        }),
      ).annotate({
        identifier: "InputConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ inputConfiguration: S.optional(InputConfiguration) }),
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
          status: S.optional(AlarmModelVersionStatus),
          statusMessage: S.optional(S.String),
          alarmModelName: S.optional(S.String),
          alarmModelDescription: S.optional(S.String),
          roleArn: S.optional(S.String),
          key: S.optional(S.String),
          severity: S.optional(S.Number),
          alarmRule: S.optional(AlarmRule),
          alarmNotification: S.optional(AlarmNotification),
          alarmEventActions: S.optional(AlarmEventActions),
          alarmCapabilities: S.optional(AlarmCapabilities),
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
          detectorModelDefinition: S.optional(DetectorModelDefinition),
          detectorModelConfiguration: S.optional(DetectorModelConfiguration),
        }),
      ).annotate({ identifier: "DetectorModel" });
    case 5:
      return S.suspend(() => S.Struct({ detectorModel: S.optional(DetectorModel) })).annotate({
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
      return S.suspend(() => S.Struct({ status: S.optional(AnalysisStatus) })).annotate({
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
          inputConfiguration: S.optional(InputConfiguration),
          inputDefinition: S.optional(InputDefinition),
        }),
      ).annotate({ identifier: "Input" });
    case 2:
      return S.suspend(() => S.Struct({ input: S.optional(Input) })).annotate({
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
      return S.Array(DetectorDebugOption);
    case 6:
      return S.suspend(() =>
        S.Struct({
          roleArn: S.String,
          level: LoggingLevel,
          enabled: S.Boolean,
          detectorDebugOptions: S.optional(DetectorDebugOptions),
        }),
      ).annotate({ identifier: "LoggingOptions" });
    case 7:
      return S.suspend(() => S.Struct({ loggingOptions: S.optional(LoggingOptions) })).annotate({
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
      return S.Array(AnalysisResultLocation);
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: S.optional(S.String),
          level: S.optional(AnalysisResultLevel),
          message: S.optional(S.String),
          locations: S.optional(AnalysisResultLocations),
        }),
      ).annotate({ identifier: "AnalysisResult" });
    case 4:
      return S.Array(AnalysisResult);
    case 5:
      return S.suspend(() =>
        S.Struct({
          analysisResults: S.optional(AnalysisResults),
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
      return S.Array(AlarmModelSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          alarmModelSummaries: S.optional(AlarmModelSummaries),
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
          status: S.optional(AlarmModelVersionStatus),
          statusMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AlarmModelVersionSummary",
      });
    case 4:
      return S.Array(AlarmModelVersionSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          alarmModelVersionSummaries: S.optional(AlarmModelVersionSummaries),
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
      return S.Array(DetectorModelSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          detectorModelSummaries: S.optional(DetectorModelSummaries),
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
          status: S.optional(DetectorModelVersionStatus),
          evaluationMethod: S.optional(EvaluationMethod),
        }),
      ).annotate({
        identifier: "DetectorModelVersionSummary",
      });
    case 4:
      return S.Array(DetectorModelVersionSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          detectorModelVersionSummaries: S.optional(DetectorModelVersionSummaries),
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
          iotSiteWiseAssetModelPropertyIdentifier: S.optional(
            IotSiteWiseAssetModelPropertyIdentifier,
          ),
        }),
      ).annotate({
        identifier: "IotSiteWiseInputIdentifier",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          iotEventsInputIdentifier: S.optional(IotEventsInputIdentifier),
          iotSiteWiseInputIdentifier: S.optional(IotSiteWiseInputIdentifier),
        }),
      ).annotate({
        identifier: "InputIdentifier",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          inputIdentifier: InputIdentifier,
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
      return S.Array(RoutedResource);
    case 5:
      return S.suspend(() =>
        S.Struct({
          routedResources: S.optional(RoutedResources),
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
          status: S.optional(InputStatus),
        }),
      ).annotate({ identifier: "InputSummary" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.Array(InputSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          inputSummaries: S.optional(InputSummaries),
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
      return S.suspend(() => S.Struct({ tags: S.optional(Tags) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ loggingOptions: LoggingOptions }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/logging" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutLoggingOptionsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ detectorModelDefinition: DetectorModelDefinition }).pipe(
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
          tags: Tags,
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
          tagKeys: TagKeys.pipe(T.HttpQuery("tagKeys")),
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
          alarmRule: AlarmRule,
          alarmNotification: S.optional(AlarmNotification),
          alarmEventActions: S.optional(AlarmEventActions),
          alarmCapabilities: S.optional(AlarmCapabilities),
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
          detectorModelDefinition: DetectorModelDefinition,
          detectorModelDescription: S.optional(S.String),
          roleArn: S.String,
          evaluationMethod: S.optional(EvaluationMethod),
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
          inputDefinition: InputDefinition,
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
