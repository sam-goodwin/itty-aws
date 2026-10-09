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
  sdkId: "IoT Events Data",
  serviceShapeName: "IotColumboDataService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "ioteventsdata" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-10-23");
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
              `https://data.iotevents-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://data.iotevents-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://data.iotevents.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://data.iotevents.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export type RequestId = string;
export type AlarmModelName = string;
export type KeyValue = string;
export type Note = string;
export interface AcknowledgeAlarmActionRequest {
  requestId: string;
  alarmModelName: string;
  keyValue?: string;
  note?: string;
}
const AcknowledgeAlarmActionRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AcknowledgeAlarmActionRequest>;
export type AcknowledgeAlarmActionRequests = AcknowledgeAlarmActionRequest[];
const AcknowledgeAlarmActionRequests = /*@__PURE__*/ __L.at(__c0, 1);
export interface BatchAcknowledgeAlarmRequest {
  acknowledgeActionRequests: AcknowledgeAlarmActionRequest[];
}
const BatchAcknowledgeAlarmRequest = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<BatchAcknowledgeAlarmRequest>;
export type ErrorCode =
  | "ResourceNotFoundException"
  | "InvalidRequestException"
  | "InternalFailureException"
  | "ServiceUnavailableException"
  | "ThrottlingException"
  | (string & {});
const ErrorCode = /*@__PURE__*/ S.String;

export type ErrorMessage = string;
export interface BatchAlarmActionErrorEntry {
  requestId?: string;
  errorCode?: ErrorCode;
  errorMessage?: string;
}
const BatchAlarmActionErrorEntry = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<BatchAlarmActionErrorEntry>;
export type BatchAlarmActionErrorEntries = BatchAlarmActionErrorEntry[];
const BatchAlarmActionErrorEntries = /*@__PURE__*/ __L.at(__c0, 4);
export interface BatchAcknowledgeAlarmResponse {
  errorEntries?: BatchAlarmActionErrorEntry[];
}
const BatchAcknowledgeAlarmResponse = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<BatchAcknowledgeAlarmResponse>;
export type MessageId = string;
export type DetectorModelName = string;
export interface DeleteDetectorRequest {
  messageId: string;
  detectorModelName: string;
  keyValue?: string;
}
const DeleteDetectorRequest = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<DeleteDetectorRequest>;
export type DeleteDetectorRequests = DeleteDetectorRequest[];
const DeleteDetectorRequests = /*@__PURE__*/ __L.at(__c0, 7);
export interface BatchDeleteDetectorRequest {
  detectors: DeleteDetectorRequest[];
}
const BatchDeleteDetectorRequest = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<BatchDeleteDetectorRequest>;
export interface BatchDeleteDetectorErrorEntry {
  messageId?: string;
  errorCode?: ErrorCode;
  errorMessage?: string;
}
const BatchDeleteDetectorErrorEntry = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<BatchDeleteDetectorErrorEntry>;
export type BatchDeleteDetectorErrorEntries = BatchDeleteDetectorErrorEntry[];
const BatchDeleteDetectorErrorEntries = /*@__PURE__*/ __L.at(__c1, 2);
export interface BatchDeleteDetectorResponse {
  batchDeleteDetectorErrorEntries?: BatchDeleteDetectorErrorEntry[];
}
const BatchDeleteDetectorResponse = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<BatchDeleteDetectorResponse>;
export interface DisableAlarmActionRequest {
  requestId: string;
  alarmModelName: string;
  keyValue?: string;
  note?: string;
}
export type DisableAlarmActionRequests = DisableAlarmActionRequest[];
const DisableAlarmActionRequests =
  AcknowledgeAlarmActionRequests as any as S.Schema<DisableAlarmActionRequests>;
export interface BatchDisableAlarmRequest {
  disableActionRequests: DisableAlarmActionRequest[];
}
const BatchDisableAlarmRequest = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<BatchDisableAlarmRequest>;
export interface BatchDisableAlarmResponse {
  errorEntries?: BatchAlarmActionErrorEntry[];
}
const BatchDisableAlarmResponse =
  BatchAcknowledgeAlarmResponse as any as S.Schema<BatchDisableAlarmResponse>;
export interface EnableAlarmActionRequest {
  requestId: string;
  alarmModelName: string;
  keyValue?: string;
  note?: string;
}
export type EnableAlarmActionRequests = EnableAlarmActionRequest[];
const EnableAlarmActionRequests =
  AcknowledgeAlarmActionRequests as any as S.Schema<EnableAlarmActionRequests>;
export interface BatchEnableAlarmRequest {
  enableActionRequests: EnableAlarmActionRequest[];
}
const BatchEnableAlarmRequest = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<BatchEnableAlarmRequest>;
export interface BatchEnableAlarmResponse {
  errorEntries?: BatchAlarmActionErrorEntry[];
}
const BatchEnableAlarmResponse =
  BatchAcknowledgeAlarmResponse as any as S.Schema<BatchEnableAlarmResponse>;
export type EphemeralInputName = string;
export type Payload = Uint8Array;
export type EpochMilliTimestamp = number;
export interface TimestampValue {
  timeInMillis?: number;
}
const TimestampValue = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<TimestampValue>;
export interface Message {
  messageId: string;
  inputName: string;
  payload: Uint8Array;
  timestamp?: TimestampValue;
}
const Message = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<Message>;
export type Messages = Message[];
const Messages = /*@__PURE__*/ __L.at(__c2, 0);
export interface BatchPutMessageRequest {
  messages: Message[];
}
const BatchPutMessageRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<BatchPutMessageRequest>;
export interface BatchPutMessageErrorEntry {
  messageId?: string;
  errorCode?: ErrorCode;
  errorMessage?: string;
}
export type BatchPutMessageErrorEntries = BatchPutMessageErrorEntry[];
const BatchPutMessageErrorEntries =
  BatchDeleteDetectorErrorEntries as any as S.Schema<BatchPutMessageErrorEntries>;
export interface BatchPutMessageResponse {
  BatchPutMessageErrorEntries?: BatchPutMessageErrorEntry[];
}
const BatchPutMessageResponse = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<BatchPutMessageResponse>;
export interface ResetAlarmActionRequest {
  requestId: string;
  alarmModelName: string;
  keyValue?: string;
  note?: string;
}
export type ResetAlarmActionRequests = ResetAlarmActionRequest[];
const ResetAlarmActionRequests =
  AcknowledgeAlarmActionRequests as any as S.Schema<ResetAlarmActionRequests>;
export interface BatchResetAlarmRequest {
  resetActionRequests: ResetAlarmActionRequest[];
}
const BatchResetAlarmRequest = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<BatchResetAlarmRequest>;
export interface BatchResetAlarmResponse {
  errorEntries?: BatchAlarmActionErrorEntry[];
}
const BatchResetAlarmResponse =
  BatchAcknowledgeAlarmResponse as any as S.Schema<BatchResetAlarmResponse>;
export type SnoozeDuration = number;
export interface SnoozeAlarmActionRequest {
  requestId: string;
  alarmModelName: string;
  keyValue?: string;
  note?: string;
  snoozeDuration: number;
}
const SnoozeAlarmActionRequest = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<SnoozeAlarmActionRequest>;
export type SnoozeAlarmActionRequests = SnoozeAlarmActionRequest[];
const SnoozeAlarmActionRequests = /*@__PURE__*/ __L.at(__c2, 5);
export interface BatchSnoozeAlarmRequest {
  snoozeActionRequests: SnoozeAlarmActionRequest[];
}
const BatchSnoozeAlarmRequest = /*@__PURE__*/ __L.at(
  __c2,
  6,
) as any as S.Schema<BatchSnoozeAlarmRequest>;
export interface BatchSnoozeAlarmResponse {
  errorEntries?: BatchAlarmActionErrorEntry[];
}
const BatchSnoozeAlarmResponse =
  BatchAcknowledgeAlarmResponse as any as S.Schema<BatchSnoozeAlarmResponse>;
export type StateName = string;
export type VariableName = string;
export type VariableValue = string;
export interface VariableDefinition {
  name: string;
  value: string;
}
const VariableDefinition = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<VariableDefinition>;
export type VariableDefinitions = VariableDefinition[];
const VariableDefinitions = /*@__PURE__*/ __L.at(__c3, 0);
export type TimerName = string;
export type Seconds = number;
export interface TimerDefinition {
  name: string;
  seconds: number;
}
const TimerDefinition = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<TimerDefinition>;
export type TimerDefinitions = TimerDefinition[];
const TimerDefinitions = /*@__PURE__*/ __L.at(__c3, 2);
export interface DetectorStateDefinition {
  stateName: string;
  variables: VariableDefinition[];
  timers: TimerDefinition[];
}
const DetectorStateDefinition = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<DetectorStateDefinition>;
export interface UpdateDetectorRequest {
  messageId: string;
  detectorModelName: string;
  keyValue?: string;
  state: DetectorStateDefinition;
}
const UpdateDetectorRequest = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<UpdateDetectorRequest>;
export type UpdateDetectorRequests = UpdateDetectorRequest[];
const UpdateDetectorRequests = /*@__PURE__*/ __L.at(__c3, 5);
export interface BatchUpdateDetectorRequest {
  detectors: UpdateDetectorRequest[];
}
const BatchUpdateDetectorRequest = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<BatchUpdateDetectorRequest>;
export interface BatchUpdateDetectorErrorEntry {
  messageId?: string;
  errorCode?: ErrorCode;
  errorMessage?: string;
}
export type BatchUpdateDetectorErrorEntries = BatchUpdateDetectorErrorEntry[];
const BatchUpdateDetectorErrorEntries =
  BatchDeleteDetectorErrorEntries as any as S.Schema<BatchUpdateDetectorErrorEntries>;
export interface BatchUpdateDetectorResponse {
  batchUpdateDetectorErrorEntries?: BatchUpdateDetectorErrorEntry[];
}
const BatchUpdateDetectorResponse = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<BatchUpdateDetectorResponse>;
export interface DescribeAlarmRequest {
  alarmModelName: string;
  keyValue?: string;
}
const DescribeAlarmRequest = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<DescribeAlarmRequest>;
export type AlarmModelVersion = string;
export type AlarmStateName =
  | "DISABLED"
  | "NORMAL"
  | "ACTIVE"
  | "ACKNOWLEDGED"
  | "SNOOZE_DISABLED"
  | "LATCHED"
  | (string & {});
const AlarmStateName = /*@__PURE__*/ S.String;

export type InputPropertyValue = string;
export type ComparisonOperator =
  | "GREATER"
  | "GREATER_OR_EQUAL"
  | "LESS"
  | "LESS_OR_EQUAL"
  | "EQUAL"
  | "NOT_EQUAL"
  | (string & {});
const ComparisonOperator = /*@__PURE__*/ S.String;

export type ThresholdValue = string;
export interface SimpleRuleEvaluation {
  inputPropertyValue?: string;
  operator?: ComparisonOperator;
  thresholdValue?: string;
}
const SimpleRuleEvaluation = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<SimpleRuleEvaluation>;
export interface RuleEvaluation {
  simpleRuleEvaluation?: SimpleRuleEvaluation;
}
const RuleEvaluation = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<RuleEvaluation>;
export type CustomerActionName =
  | "SNOOZE"
  | "ENABLE"
  | "DISABLE"
  | "ACKNOWLEDGE"
  | "RESET"
  | (string & {});
const CustomerActionName = /*@__PURE__*/ S.String;

export interface SnoozeActionConfiguration {
  snoozeDuration?: number;
  note?: string;
}
const SnoozeActionConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<SnoozeActionConfiguration>;
export interface EnableActionConfiguration {
  note?: string;
}
const EnableActionConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<EnableActionConfiguration>;
export interface DisableActionConfiguration {
  note?: string;
}
const DisableActionConfiguration =
  EnableActionConfiguration as any as S.Schema<DisableActionConfiguration>;
export interface AcknowledgeActionConfiguration {
  note?: string;
}
const AcknowledgeActionConfiguration =
  EnableActionConfiguration as any as S.Schema<AcknowledgeActionConfiguration>;
export interface ResetActionConfiguration {
  note?: string;
}
const ResetActionConfiguration =
  EnableActionConfiguration as any as S.Schema<ResetActionConfiguration>;
export interface CustomerAction {
  actionName?: CustomerActionName;
  snoozeActionConfiguration?: SnoozeActionConfiguration;
  enableActionConfiguration?: EnableActionConfiguration;
  disableActionConfiguration?: DisableActionConfiguration;
  acknowledgeActionConfiguration?: AcknowledgeActionConfiguration;
  resetActionConfiguration?: ResetActionConfiguration;
}
const CustomerAction = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<CustomerAction>;
export type EventType = "STATE_CHANGE" | (string & {});
const EventType = /*@__PURE__*/ S.String;

export type TriggerType = "SNOOZE_TIMEOUT" | (string & {});
const TriggerType = /*@__PURE__*/ S.String;

export interface StateChangeConfiguration {
  triggerType?: TriggerType;
}
const StateChangeConfiguration = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<StateChangeConfiguration>;
export interface SystemEvent {
  eventType?: EventType;
  stateChangeConfiguration?: StateChangeConfiguration;
}
const SystemEvent = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<SystemEvent>;
export interface AlarmState {
  stateName?: AlarmStateName;
  ruleEvaluation?: RuleEvaluation;
  customerAction?: CustomerAction;
  systemEvent?: SystemEvent;
}
const AlarmState = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<AlarmState>;
export type Severity = number;
export interface Alarm {
  alarmModelName?: string;
  alarmModelVersion?: string;
  keyValue?: string;
  alarmState?: AlarmState;
  severity?: number;
  creationTime?: Date;
  lastUpdateTime?: Date;
}
const Alarm = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<Alarm>;
export interface DescribeAlarmResponse {
  alarm?: Alarm;
}
const DescribeAlarmResponse = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<DescribeAlarmResponse>;
export interface DescribeDetectorRequest {
  detectorModelName: string;
  keyValue?: string;
}
const DescribeDetectorRequest = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<DescribeDetectorRequest>;
export type DetectorModelVersion = string;
export interface Variable {
  name: string;
  value: string;
}
const Variable = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<Variable>;
export type Variables = Variable[];
const Variables = /*@__PURE__*/ __L.at(__c5, 5);
export interface Timer {
  name: string;
  timestamp: Date;
}
const Timer = /*@__PURE__*/ __L.at(__c5, 6) as any as S.Schema<Timer>;
export type Timers = Timer[];
const Timers = /*@__PURE__*/ __L.at(__c5, 7);
export interface DetectorState {
  stateName: string;
  variables: Variable[];
  timers: Timer[];
}
const DetectorState = /*@__PURE__*/ __L.at(__c6, 0) as any as S.Schema<DetectorState>;
export interface Detector {
  detectorModelName?: string;
  keyValue?: string;
  detectorModelVersion?: string;
  state?: DetectorState;
  creationTime?: Date;
  lastUpdateTime?: Date;
}
const Detector = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<Detector>;
export interface DescribeDetectorResponse {
  detector?: Detector;
}
const DescribeDetectorResponse = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<DescribeDetectorResponse>;
export type NextToken = string;
export type MaxResults = number;
export interface ListAlarmsRequest {
  alarmModelName: string;
  nextToken?: string;
  maxResults?: number;
}
const ListAlarmsRequest = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<ListAlarmsRequest>;
export interface AlarmSummary {
  alarmModelName?: string;
  alarmModelVersion?: string;
  keyValue?: string;
  stateName?: AlarmStateName;
  creationTime?: Date;
  lastUpdateTime?: Date;
}
const AlarmSummary = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<AlarmSummary>;
export type AlarmSummaries = AlarmSummary[];
const AlarmSummaries = /*@__PURE__*/ __L.at(__c6, 5);
export interface ListAlarmsResponse {
  alarmSummaries?: AlarmSummary[];
  nextToken?: string;
}
const ListAlarmsResponse = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<ListAlarmsResponse>;
export interface ListDetectorsRequest {
  detectorModelName: string;
  stateName?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListDetectorsRequest = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<ListDetectorsRequest>;
export interface DetectorStateSummary {
  stateName?: string;
}
const DetectorStateSummary = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<DetectorStateSummary>;
export interface DetectorSummary {
  detectorModelName?: string;
  keyValue?: string;
  detectorModelVersion?: string;
  state?: DetectorStateSummary;
  creationTime?: Date;
  lastUpdateTime?: Date;
}
const DetectorSummary = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<DetectorSummary>;
export type DetectorSummaries = DetectorSummary[];
const DetectorSummaries = /*@__PURE__*/ __L.at(__c7, 2);
export interface ListDetectorsResponse {
  detectorSummaries?: DetectorSummary[];
  nextToken?: string;
}
const ListDetectorsResponse = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<ListDetectorsResponse>;
export type BatchAcknowledgeAlarmError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Acknowledges one or more alarms. The alarms change to the `ACKNOWLEDGED` state
 * after you acknowledge them.
 */
export const batchAcknowledgeAlarm: API.OperationMethod<
  BatchAcknowledgeAlarmRequest,
  BatchAcknowledgeAlarmResponse,
  BatchAcknowledgeAlarmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchAcknowledgeAlarmRequest,
  output: BatchAcknowledgeAlarmResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchAcknowledgeAlarm",
}));

export type BatchDeleteDetectorError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes one or more detectors that were created. When a detector is deleted, its state will be cleared and the detector will be removed from the list of detectors. The deleted detector will no longer appear if referenced in the ListDetectors API call.
 */
export const batchDeleteDetector: API.OperationMethod<
  BatchDeleteDetectorRequest,
  BatchDeleteDetectorResponse,
  BatchDeleteDetectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDeleteDetectorRequest,
  output: BatchDeleteDetectorResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteDetector",
}));

export type BatchDisableAlarmError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Disables one or more alarms. The alarms change to the `DISABLED` state after
 * you disable them.
 */
export const batchDisableAlarm: API.OperationMethod<
  BatchDisableAlarmRequest,
  BatchDisableAlarmResponse,
  BatchDisableAlarmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDisableAlarmRequest,
  output: BatchDisableAlarmResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDisableAlarm",
}));

export type BatchEnableAlarmError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Enables one or more alarms. The alarms change to the `NORMAL` state after you
 * enable them.
 */
export const batchEnableAlarm: API.OperationMethod<
  BatchEnableAlarmRequest,
  BatchEnableAlarmResponse,
  BatchEnableAlarmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchEnableAlarmRequest,
  output: BatchEnableAlarmResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchEnableAlarm",
}));

export type BatchPutMessageError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Sends a set of messages to the IoT Events system. Each message payload is transformed into
 * the input you specify (`"inputName"`) and ingested into any detectors that monitor
 * that input. If multiple messages are sent, the order in which the messages are processed isn't
 * guaranteed. To guarantee ordering, you must send messages one at a time and wait for a
 * successful response.
 */
export const batchPutMessage: API.OperationMethod<
  BatchPutMessageRequest,
  BatchPutMessageResponse,
  BatchPutMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchPutMessageRequest,
  output: BatchPutMessageResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchPutMessage",
}));

export type BatchResetAlarmError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Resets one or more alarms. The alarms return to the `NORMAL` state after you
 * reset them.
 */
export const batchResetAlarm: API.OperationMethod<
  BatchResetAlarmRequest,
  BatchResetAlarmResponse,
  BatchResetAlarmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchResetAlarmRequest,
  output: BatchResetAlarmResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchResetAlarm",
}));

export type BatchSnoozeAlarmError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Changes one or more alarms to the snooze mode. The alarms change to the
 * `SNOOZE_DISABLED` state after you set them to the snooze mode.
 */
export const batchSnoozeAlarm: API.OperationMethod<
  BatchSnoozeAlarmRequest,
  BatchSnoozeAlarmResponse,
  BatchSnoozeAlarmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchSnoozeAlarmRequest,
  output: BatchSnoozeAlarmResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchSnoozeAlarm",
}));

export type BatchUpdateDetectorError =
  | InternalFailureException
  | InvalidRequestException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Updates the state, variable values, and timer settings of one or more detectors
 * (instances) of a specified detector model.
 */
export const batchUpdateDetector: API.OperationMethod<
  BatchUpdateDetectorRequest,
  BatchUpdateDetectorResponse,
  BatchUpdateDetectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateDetectorRequest,
  output: BatchUpdateDetectorResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateDetector",
}));

export type DescribeAlarmError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves information about an alarm.
 */
export const describeAlarm: API.OperationMethod<
  DescribeAlarmRequest,
  DescribeAlarmResponse,
  DescribeAlarmError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAlarmRequest,
  output: DescribeAlarmResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAlarm",
}));

export type DescribeDetectorError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns information about the specified detector (instance).
 */
export const describeDetector: API.OperationMethod<
  DescribeDetectorRequest,
  DescribeDetectorResponse,
  DescribeDetectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeDetectorRequest,
  output: DescribeDetectorResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDetector",
}));

export type ListAlarmsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists one or more alarms. The operation returns only the metadata associated with each
 * alarm.
 */
export const listAlarms: API.OperationMethod<
  ListAlarmsRequest,
  ListAlarmsResponse,
  ListAlarmsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListAlarmsRequest,
  output: ListAlarmsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAlarms",
}));

export type ListDetectorsError =
  | InternalFailureException
  | InvalidRequestException
  | ResourceNotFoundException
  | ServiceUnavailableException
  | ThrottlingException
  | CommonErrors;
/**
 * Lists detectors (the instances of a detector model).
 */
export const listDetectors: API.OperationMethod<
  ListDetectorsRequest,
  ListDetectorsResponse,
  ListDetectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListDetectorsRequest,
  output: ListDetectorsResponse,
  errors: [
    InternalFailureException,
    InvalidRequestException,
    ResourceNotFoundException,
    ServiceUnavailableException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDetectors",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          requestId: S.String,
          alarmModelName: S.String,
          keyValue: S.optional(S.String),
          note: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AcknowledgeAlarmActionRequest",
      });
    case 1:
      return S.Array(AcknowledgeAlarmActionRequest);
    case 2:
      return S.suspend(() =>
        S.Struct({ acknowledgeActionRequests: AcknowledgeAlarmActionRequests }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/alarms/acknowledge" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchAcknowledgeAlarmRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          requestId: S.optional(S.String),
          errorCode: S.optional(ErrorCode),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchAlarmActionErrorEntry",
      });
    case 4:
      return S.Array(BatchAlarmActionErrorEntry);
    case 5:
      return S.suspend(() =>
        S.Struct({ errorEntries: S.optional(BatchAlarmActionErrorEntries) }),
      ).annotate({
        identifier: "BatchAcknowledgeAlarmResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          messageId: S.String,
          detectorModelName: S.String,
          keyValue: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DeleteDetectorRequest",
      });
    case 7:
      return S.Array(DeleteDetectorRequest);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ detectors: DeleteDetectorRequests }).pipe(
          T.all(T.Http({ method: "POST", uri: "/detectors/delete" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchDeleteDetectorRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          messageId: S.optional(S.String),
          errorCode: S.optional(ErrorCode),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchDeleteDetectorErrorEntry",
      });
    case 2:
      return S.Array(BatchDeleteDetectorErrorEntry);
    case 3:
      return S.suspend(() =>
        S.Struct({
          batchDeleteDetectorErrorEntries: S.optional(BatchDeleteDetectorErrorEntries),
        }),
      ).annotate({
        identifier: "BatchDeleteDetectorResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ disableActionRequests: DisableAlarmActionRequests }).pipe(
          T.all(T.Http({ method: "POST", uri: "/alarms/disable" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchDisableAlarmRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ enableActionRequests: EnableAlarmActionRequests }).pipe(
          T.all(T.Http({ method: "POST", uri: "/alarms/enable" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchEnableAlarmRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ timeInMillis: S.optional(S.Number) })).annotate({
        identifier: "TimestampValue",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          messageId: S.String,
          inputName: S.String,
          payload: T.Blob,
          timestamp: S.optional(TimestampValue),
        }),
      ).annotate({ identifier: "Message" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Message);
    case 1:
      return S.suspend(() =>
        S.Struct({ messages: Messages }).pipe(
          T.all(T.Http({ method: "POST", uri: "/inputs/messages" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchPutMessageRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          BatchPutMessageErrorEntries: S.optional(BatchPutMessageErrorEntries),
        }),
      ).annotate({
        identifier: "BatchPutMessageResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ resetActionRequests: ResetAlarmActionRequests }).pipe(
          T.all(T.Http({ method: "POST", uri: "/alarms/reset" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchResetAlarmRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          requestId: S.String,
          alarmModelName: S.String,
          keyValue: S.optional(S.String),
          note: S.optional(S.String),
          snoozeDuration: S.Number,
        }),
      ).annotate({
        identifier: "SnoozeAlarmActionRequest",
      });
    case 5:
      return S.Array(SnoozeAlarmActionRequest);
    case 6:
      return S.suspend(() =>
        S.Struct({ snoozeActionRequests: SnoozeAlarmActionRequests }).pipe(
          T.all(T.Http({ method: "POST", uri: "/alarms/snooze" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchSnoozeAlarmRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ name: S.String, value: S.String })).annotate({
        identifier: "VariableDefinition",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(VariableDefinition);
    case 1:
      return S.suspend(() => S.Struct({ name: S.String, seconds: S.Number })).annotate({
        identifier: "TimerDefinition",
      });
    case 2:
      return S.Array(TimerDefinition);
    case 3:
      return S.suspend(() =>
        S.Struct({
          stateName: S.String,
          variables: VariableDefinitions,
          timers: TimerDefinitions,
        }),
      ).annotate({
        identifier: "DetectorStateDefinition",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          messageId: S.String,
          detectorModelName: S.String,
          keyValue: S.optional(S.String),
          state: DetectorStateDefinition,
        }),
      ).annotate({
        identifier: "UpdateDetectorRequest",
      });
    case 5:
      return S.Array(UpdateDetectorRequest);
    case 6:
      return S.suspend(() =>
        S.Struct({ detectors: UpdateDetectorRequests }).pipe(
          T.all(T.Http({ method: "POST", uri: "/detectors" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchUpdateDetectorRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          batchUpdateDetectorErrorEntries: S.optional(BatchUpdateDetectorErrorEntries),
        }),
      ).annotate({
        identifier: "BatchUpdateDetectorResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          alarmModelName: S.String.pipe(T.HttpLabel("alarmModelName")),
          keyValue: S.optional(S.String).pipe(T.HttpQuery("keyValue")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/alarms/{alarmModelName}/keyValues" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeAlarmRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          inputPropertyValue: S.optional(S.String),
          operator: S.optional(ComparisonOperator),
          thresholdValue: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SimpleRuleEvaluation",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ simpleRuleEvaluation: S.optional(SimpleRuleEvaluation) }),
      ).annotate({ identifier: "RuleEvaluation" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          snoozeDuration: S.optional(S.Number),
          note: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SnoozeActionConfiguration",
      });
    case 4:
      return S.suspend(() => S.Struct({ note: S.optional(S.String) })).annotate({
        identifier: "EnableActionConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          actionName: S.optional(CustomerActionName),
          snoozeActionConfiguration: S.optional(SnoozeActionConfiguration),
          enableActionConfiguration: S.optional(EnableActionConfiguration),
          disableActionConfiguration: S.optional(DisableActionConfiguration),
          acknowledgeActionConfiguration: S.optional(AcknowledgeActionConfiguration),
          resetActionConfiguration: S.optional(ResetActionConfiguration),
        }),
      ).annotate({ identifier: "CustomerAction" });
    case 6:
      return S.suspend(() => S.Struct({ triggerType: S.optional(TriggerType) })).annotate({
        identifier: "StateChangeConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          eventType: S.optional(EventType),
          stateChangeConfiguration: S.optional(StateChangeConfiguration),
        }),
      ).annotate({ identifier: "SystemEvent" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          stateName: S.optional(AlarmStateName),
          ruleEvaluation: S.optional(RuleEvaluation),
          customerAction: S.optional(CustomerAction),
          systemEvent: S.optional(SystemEvent),
        }),
      ).annotate({ identifier: "AlarmState" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          alarmModelName: S.optional(S.String),
          alarmModelVersion: S.optional(S.String),
          keyValue: S.optional(S.String),
          alarmState: S.optional(AlarmState),
          severity: S.optional(S.Number),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Alarm" });
    case 2:
      return S.suspend(() => S.Struct({ alarm: S.optional(Alarm) })).annotate({
        identifier: "DescribeAlarmResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          detectorModelName: S.String.pipe(T.HttpLabel("detectorModelName")),
          keyValue: S.optional(S.String).pipe(T.HttpQuery("keyValue")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/detectors/{detectorModelName}/keyValues",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeDetectorRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ name: S.String, value: S.String })).annotate({
        identifier: "Variable",
      });
    case 5:
      return S.Array(Variable);
    case 6:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "Timer" });
    case 7:
      return S.Array(Timer);
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ stateName: S.String, variables: Variables, timers: Timers }),
      ).annotate({ identifier: "DetectorState" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          detectorModelName: S.optional(S.String),
          keyValue: S.optional(S.String),
          detectorModelVersion: S.optional(S.String),
          state: S.optional(DetectorState),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Detector" });
    case 2:
      return S.suspend(() => S.Struct({ detector: S.optional(Detector) })).annotate({
        identifier: "DescribeDetectorResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          alarmModelName: S.String.pipe(T.HttpLabel("alarmModelName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/alarms/{alarmModelName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAlarmsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          alarmModelName: S.optional(S.String),
          alarmModelVersion: S.optional(S.String),
          keyValue: S.optional(S.String),
          stateName: S.optional(AlarmStateName),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "AlarmSummary" });
    case 5:
      return S.Array(AlarmSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({
          alarmSummaries: S.optional(AlarmSummaries),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAlarmsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          detectorModelName: S.String.pipe(T.HttpLabel("detectorModelName")),
          stateName: S.optional(S.String).pipe(T.HttpQuery("stateName")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/detectors/{detectorModelName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDetectorsRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ stateName: S.optional(S.String) })).annotate({
        identifier: "DetectorStateSummary",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          detectorModelName: S.optional(S.String),
          keyValue: S.optional(S.String),
          detectorModelVersion: S.optional(S.String),
          state: S.optional(DetectorStateSummary),
          creationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          lastUpdateTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DetectorSummary",
      });
    case 2:
      return S.Array(DetectorSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({
          detectorSummaries: S.optional(DetectorSummaries),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDetectorsResponse",
      });
  }
}
