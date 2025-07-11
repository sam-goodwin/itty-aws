import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface Logs_20140328 {
  associateKmsKey(
    input: AssociateKmsKeyRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  cancelExportTask(
    input: CancelExportTaskRequest,
  ): Effect.Effect<
    {},
    | InvalidOperationException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createDelivery(
    input: CreateDeliveryRequest,
  ): Effect.Effect<
    CreateDeliveryResponse,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  createExportTask(
    input: CreateExportTaskRequest,
  ): Effect.Effect<
    CreateExportTaskResponse,
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createLogAnomalyDetector(
    input: CreateLogAnomalyDetectorRequest,
  ): Effect.Effect<
    CreateLogAnomalyDetectorResponse,
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createLogGroup(
    input: CreateLogGroupRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  createLogStream(
    input: CreateLogStreamRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteAccountPolicy(
    input: DeleteAccountPolicyRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteDataProtectionPolicy(
    input: DeleteDataProtectionPolicyRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteDelivery(
    input: DeleteDeliveryRequest,
  ): Effect.Effect<
    {},
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDeliveryDestination(
    input: DeleteDeliveryDestinationRequest,
  ): Effect.Effect<
    {},
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDeliveryDestinationPolicy(
    input: DeleteDeliveryDestinationPolicyRequest,
  ): Effect.Effect<
    {},
    | ConflictException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ValidationException
    | CommonAwsError
  >;
  deleteDeliverySource(
    input: DeleteDeliverySourceRequest,
  ): Effect.Effect<
    {},
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  deleteDestination(
    input: DeleteDestinationRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteIndexPolicy(
    input: DeleteIndexPolicyRequest,
  ): Effect.Effect<
    DeleteIndexPolicyResponse,
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteIntegration(
    input: DeleteIntegrationRequest,
  ): Effect.Effect<
    DeleteIntegrationResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ValidationException
    | CommonAwsError
  >;
  deleteLogAnomalyDetector(
    input: DeleteLogAnomalyDetectorRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteLogGroup(
    input: DeleteLogGroupRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteLogStream(
    input: DeleteLogStreamRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteMetricFilter(
    input: DeleteMetricFilterRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteQueryDefinition(
    input: DeleteQueryDefinitionRequest,
  ): Effect.Effect<
    DeleteQueryDefinitionResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteRetentionPolicy(
    input: DeleteRetentionPolicyRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteSubscriptionFilter(
    input: DeleteSubscriptionFilterRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteTransformer(
    input: DeleteTransformerRequest,
  ): Effect.Effect<
    {},
    | InvalidOperationException
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeAccountPolicies(
    input: DescribeAccountPoliciesRequest,
  ): Effect.Effect<
    DescribeAccountPoliciesResponse,
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeConfigurationTemplates(
    input: DescribeConfigurationTemplatesRequest,
  ): Effect.Effect<
    DescribeConfigurationTemplatesResponse,
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeDeliveries(
    input: DescribeDeliveriesRequest,
  ): Effect.Effect<
    DescribeDeliveriesResponse,
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeDeliveryDestinations(
    input: DescribeDeliveryDestinationsRequest,
  ): Effect.Effect<
    DescribeDeliveryDestinationsResponse,
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeDeliverySources(
    input: DescribeDeliverySourcesRequest,
  ): Effect.Effect<
    DescribeDeliverySourcesResponse,
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  describeDestinations(
    input: DescribeDestinationsRequest,
  ): Effect.Effect<
    DescribeDestinationsResponse,
    InvalidParameterException | ServiceUnavailableException | CommonAwsError
  >;
  describeExportTasks(
    input: DescribeExportTasksRequest,
  ): Effect.Effect<
    DescribeExportTasksResponse,
    InvalidParameterException | ServiceUnavailableException | CommonAwsError
  >;
  describeFieldIndexes(
    input: DescribeFieldIndexesRequest,
  ): Effect.Effect<
    DescribeFieldIndexesResponse,
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeIndexPolicies(
    input: DescribeIndexPoliciesRequest,
  ): Effect.Effect<
    DescribeIndexPoliciesResponse,
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeLogGroups(
    input: DescribeLogGroupsRequest,
  ): Effect.Effect<
    DescribeLogGroupsResponse,
    InvalidParameterException | ServiceUnavailableException | CommonAwsError
  >;
  describeLogStreams(
    input: DescribeLogStreamsRequest,
  ): Effect.Effect<
    DescribeLogStreamsResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeMetricFilters(
    input: DescribeMetricFiltersRequest,
  ): Effect.Effect<
    DescribeMetricFiltersResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeQueries(
    input: DescribeQueriesRequest,
  ): Effect.Effect<
    DescribeQueriesResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  describeQueryDefinitions(
    input: DescribeQueryDefinitionsRequest,
  ): Effect.Effect<
    DescribeQueryDefinitionsResponse,
    InvalidParameterException | ServiceUnavailableException | CommonAwsError
  >;
  describeResourcePolicies(
    input: DescribeResourcePoliciesRequest,
  ): Effect.Effect<
    DescribeResourcePoliciesResponse,
    InvalidParameterException | ServiceUnavailableException | CommonAwsError
  >;
  describeSubscriptionFilters(
    input: DescribeSubscriptionFiltersRequest,
  ): Effect.Effect<
    DescribeSubscriptionFiltersResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  disassociateKmsKey(
    input: DisassociateKmsKeyRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  filterLogEvents(
    input: FilterLogEventsRequest,
  ): Effect.Effect<
    FilterLogEventsResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getDataProtectionPolicy(
    input: GetDataProtectionPolicyRequest,
  ): Effect.Effect<
    GetDataProtectionPolicyResponse,
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getDelivery(
    input: GetDeliveryRequest,
  ): Effect.Effect<
    GetDeliveryResponse,
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDeliveryDestination(
    input: GetDeliveryDestinationRequest,
  ): Effect.Effect<
    GetDeliveryDestinationResponse,
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getDeliveryDestinationPolicy(
    input: GetDeliveryDestinationPolicyRequest,
  ): Effect.Effect<
    GetDeliveryDestinationPolicyResponse,
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ValidationException
    | CommonAwsError
  >;
  getDeliverySource(
    input: GetDeliverySourceRequest,
  ): Effect.Effect<
    GetDeliverySourceResponse,
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  getIntegration(
    input: GetIntegrationRequest,
  ): Effect.Effect<
    GetIntegrationResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getLogAnomalyDetector(
    input: GetLogAnomalyDetectorRequest,
  ): Effect.Effect<
    GetLogAnomalyDetectorResponse,
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getLogEvents(
    input: GetLogEventsRequest,
  ): Effect.Effect<
    GetLogEventsResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getLogGroupFields(
    input: GetLogGroupFieldsRequest,
  ): Effect.Effect<
    GetLogGroupFieldsResponse,
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getLogRecord(
    input: GetLogRecordRequest,
  ): Effect.Effect<
    GetLogRecordResponse,
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getQueryResults(
    input: GetQueryResultsRequest,
  ): Effect.Effect<
    GetQueryResultsResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  getTransformer(
    input: GetTransformerRequest,
  ): Effect.Effect<
    GetTransformerResponse,
    | InvalidOperationException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listAnomalies(
    input: ListAnomaliesRequest,
  ): Effect.Effect<
    ListAnomaliesResponse,
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listIntegrations(
    input: ListIntegrationsRequest,
  ): Effect.Effect<
    ListIntegrationsResponse,
    InvalidParameterException | ServiceUnavailableException | CommonAwsError
  >;
  listLogAnomalyDetectors(
    input: ListLogAnomalyDetectorsRequest,
  ): Effect.Effect<
    ListLogAnomalyDetectorsResponse,
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listLogGroups(
    input: ListLogGroupsRequest,
  ): Effect.Effect<
    ListLogGroupsResponse,
    InvalidParameterException | ServiceUnavailableException | CommonAwsError
  >;
  listLogGroupsForQuery(
    input: ListLogGroupsForQueryRequest,
  ): Effect.Effect<
    ListLogGroupsForQueryResponse,
    | AccessDeniedException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  listTagsLogGroup(
    input: ListTagsLogGroupRequest,
  ): Effect.Effect<
    ListTagsLogGroupResponse,
    ResourceNotFoundException | ServiceUnavailableException | CommonAwsError
  >;
  putAccountPolicy(
    input: PutAccountPolicyRequest,
  ): Effect.Effect<
    PutAccountPolicyResponse,
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putDataProtectionPolicy(
    input: PutDataProtectionPolicyRequest,
  ): Effect.Effect<
    PutDataProtectionPolicyResponse,
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putDeliveryDestination(
    input: PutDeliveryDestinationRequest,
  ): Effect.Effect<
    PutDeliveryDestinationResponse,
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putDeliveryDestinationPolicy(
    input: PutDeliveryDestinationPolicyRequest,
  ): Effect.Effect<
    PutDeliveryDestinationPolicyResponse,
    | ConflictException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ValidationException
    | CommonAwsError
  >;
  putDeliverySource(
    input: PutDeliverySourceRequest,
  ): Effect.Effect<
    PutDeliverySourceResponse,
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  putDestination(
    input: PutDestinationRequest,
  ): Effect.Effect<
    PutDestinationResponse,
    | InvalidParameterException
    | OperationAbortedException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putDestinationPolicy(
    input: PutDestinationPolicyRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | OperationAbortedException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putIndexPolicy(
    input: PutIndexPolicyRequest,
  ): Effect.Effect<
    PutIndexPolicyResponse,
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putIntegration(
    input: PutIntegrationRequest,
  ): Effect.Effect<
    PutIntegrationResponse,
    | InvalidParameterException
    | LimitExceededException
    | ServiceUnavailableException
    | ValidationException
    | CommonAwsError
  >;
  putLogEvents(
    input: PutLogEventsRequest,
  ): Effect.Effect<
    PutLogEventsResponse,
    | DataAlreadyAcceptedException
    | InvalidParameterException
    | InvalidSequenceTokenException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | UnrecognizedClientException
    | CommonAwsError
  >;
  putMetricFilter(
    input: PutMetricFilterRequest,
  ): Effect.Effect<
    {},
    | InvalidOperationException
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putQueryDefinition(
    input: PutQueryDefinitionRequest,
  ): Effect.Effect<
    PutQueryDefinitionResponse,
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    | InvalidParameterException
    | LimitExceededException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putRetentionPolicy(
    input: PutRetentionPolicyRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putSubscriptionFilter(
    input: PutSubscriptionFilterRequest,
  ): Effect.Effect<
    {},
    | InvalidOperationException
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  putTransformer(
    input: PutTransformerRequest,
  ): Effect.Effect<
    {},
    | InvalidOperationException
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  startLiveTail(
    input: StartLiveTailRequest,
  ): Effect.Effect<
    StartLiveTailResponse,
    | AccessDeniedException
    | InvalidOperationException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  startQuery(
    input: StartQueryRequest,
  ): Effect.Effect<
    StartQueryResponse,
    | InvalidParameterException
    | LimitExceededException
    | MalformedQueryException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  stopQuery(
    input: StopQueryRequest,
  ): Effect.Effect<
    StopQueryResponse,
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  tagLogGroup(
    input: TagLogGroupRequest,
  ): Effect.Effect<
    {},
    InvalidParameterException | ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | TooManyTagsException
    | CommonAwsError
  >;
  testMetricFilter(
    input: TestMetricFilterRequest,
  ): Effect.Effect<
    TestMetricFilterResponse,
    InvalidParameterException | ServiceUnavailableException | CommonAwsError
  >;
  testTransformer(
    input: TestTransformerRequest,
  ): Effect.Effect<
    TestTransformerResponse,
    | InvalidOperationException
    | InvalidParameterException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  untagLogGroup(
    input: UntagLogGroupRequest,
  ): Effect.Effect<{}, ResourceNotFoundException | CommonAwsError>;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  updateAnomaly(
    input: UpdateAnomalyRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  updateDeliveryConfiguration(
    input: UpdateDeliveryConfigurationRequest,
  ): Effect.Effect<
    UpdateDeliveryConfigurationResponse,
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  updateLogAnomalyDetector(
    input: UpdateLogAnomalyDetectorRequest,
  ): Effect.Effect<
    {},
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
}

export type CloudwatchLogs = Logs_20140328;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AccessPolicy = string;

export type AccountId = string;

export type AccountIds = Array<string>;
export type AccountPolicies = Array<AccountPolicy>;
export interface AccountPolicy {
  policyName?: string;
  policyDocument?: string;
  lastUpdatedTime?: number;
  policyType?: PolicyType;
  scope?: Scope;
  selectionCriteria?: string;
  accountId?: string;
}
export type AccountPolicyDocument = string;

export type AddKeyEntries = Array<AddKeyEntry>;
export interface AddKeyEntry {
  key: string;
  value: string;
  overwriteIfExists?: boolean;
}
export interface AddKeys {
  entries: Array<AddKeyEntry>;
}
export type AddKeyValue = string;

export type AllowedActionForAllowVendedLogsDeliveryForResource = string;

export type AllowedFieldDelimiters = Array<string>;
export type AllowedFields = Array<RecordField>;
export type AmazonResourceName = string;

export type Anomalies = Array<Anomaly>;
export interface Anomaly {
  anomalyId: string;
  patternId: string;
  anomalyDetectorArn: string;
  patternString: string;
  patternRegex?: string;
  priority?: string;
  firstSeen: number;
  lastSeen: number;
  description: string;
  active: boolean;
  state: State;
  histogram: Record<string, number>;
  logSamples: Array<LogEvent>;
  patternTokens: Array<PatternToken>;
  logGroupArnList: Array<string>;
  suppressed?: boolean;
  suppressedDate?: number;
  suppressedUntil?: number;
  isPatternLevelSuppression?: boolean;
}
export interface AnomalyDetector {
  anomalyDetectorArn?: string;
  detectorName?: string;
  logGroupArnList?: Array<string>;
  evaluationFrequency?: EvaluationFrequency;
  filterPattern?: string;
  anomalyDetectorStatus?: AnomalyDetectorStatus;
  kmsKeyId?: string;
  creationTimeStamp?: number;
  lastModifiedTimeStamp?: number;
  anomalyVisibilityTime?: number;
}
export type AnomalyDetectorArn = string;

export type AnomalyDetectors = Array<AnomalyDetector>;
export type AnomalyDetectorStatus =
  | "INITIALIZING"
  | "TRAINING"
  | "ANALYZING"
  | "FAILED"
  | "DELETED"
  | "PAUSED";
export type AnomalyId = string;

export type AnomalyVisibilityTime = number;

export type ApplyOnTransformedLogs = boolean;

export type Arn = string;

export interface AssociateKmsKeyRequest {
  logGroupName?: string;
  kmsKeyId: string;
  resourceIdentifier?: string;
}
export type Baseline = boolean;

export type CloudwatchLogsBoolean = boolean;

export interface CancelExportTaskRequest {
  taskId: string;
}
export type ClientToken = string;

export type CollectionRetentionDays = number;

export type Column = string;

export type Columns = Array<string>;
export interface ConfigurationTemplate {
  service?: string;
  logType?: string;
  resourceType?: string;
  deliveryDestinationType?: DeliveryDestinationType;
  defaultDeliveryConfigValues?: ConfigurationTemplateDeliveryConfigValues;
  allowedFields?: Array<RecordField>;
  allowedOutputFormats?: Array<OutputFormat>;
  allowedActionForAllowVendedLogsDeliveryForResource?: string;
  allowedFieldDelimiters?: Array<string>;
  allowedSuffixPathFields?: Array<string>;
}
export interface ConfigurationTemplateDeliveryConfigValues {
  recordFields?: Array<string>;
  fieldDelimiter?: string;
  s3DeliveryConfiguration?: S3DeliveryConfiguration;
}
export type ConfigurationTemplates = Array<ConfigurationTemplate>;
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CopyValue {
  entries: Array<CopyValueEntry>;
}
export type CopyValueEntries = Array<CopyValueEntry>;
export interface CopyValueEntry {
  source: string;
  target: string;
  overwriteIfExists?: boolean;
}
export type Count = number;

export interface CreateDeliveryRequest {
  deliverySourceName: string;
  deliveryDestinationArn: string;
  recordFields?: Array<string>;
  fieldDelimiter?: string;
  s3DeliveryConfiguration?: S3DeliveryConfiguration;
  tags?: Record<string, string>;
}
export interface CreateDeliveryResponse {
  delivery?: Delivery;
}
export interface CreateExportTaskRequest {
  taskName?: string;
  logGroupName: string;
  logStreamNamePrefix?: string;
  from: number;
  to: number;
  destination: string;
  destinationPrefix?: string;
}
export interface CreateExportTaskResponse {
  taskId?: string;
}
export interface CreateLogAnomalyDetectorRequest {
  logGroupArnList: Array<string>;
  detectorName?: string;
  evaluationFrequency?: EvaluationFrequency;
  filterPattern?: string;
  kmsKeyId?: string;
  anomalyVisibilityTime?: number;
  tags?: Record<string, string>;
}
export interface CreateLogAnomalyDetectorResponse {
  anomalyDetectorArn?: string;
}
export interface CreateLogGroupRequest {
  logGroupName: string;
  kmsKeyId?: string;
  tags?: Record<string, string>;
  logGroupClass?: LogGroupClass;
}
export interface CreateLogStreamRequest {
  logGroupName: string;
  logStreamName: string;
}
export interface CSV {
  quoteCharacter?: string;
  delimiter?: string;
  columns?: Array<string>;
  source?: string;
}
export type DashboardViewerPrincipals = Array<string>;
export declare class DataAlreadyAcceptedException extends EffectData.TaggedError(
  "DataAlreadyAcceptedException",
)<{
  readonly expectedSequenceToken?: string;
  readonly message?: string;
}> {}
export type DataProtectionPolicyDocument = string;

export type DataProtectionStatus =
  | "ACTIVATED"
  | "DELETED"
  | "ARCHIVED"
  | "DISABLED";
export interface DateTimeConverter {
  source: string;
  target: string;
  targetFormat?: string;
  matchPatterns: Array<string>;
  sourceTimezone?: string;
  targetTimezone?: string;
  locale?: string;
}
export type Days = number;

export type DefaultValue = number;

export interface DeleteAccountPolicyRequest {
  policyName: string;
  policyType: PolicyType;
}
export interface DeleteDataProtectionPolicyRequest {
  logGroupIdentifier: string;
}
export interface DeleteDeliveryDestinationPolicyRequest {
  deliveryDestinationName: string;
}
export interface DeleteDeliveryDestinationRequest {
  name: string;
}
export interface DeleteDeliveryRequest {
  id: string;
}
export interface DeleteDeliverySourceRequest {
  name: string;
}
export interface DeleteDestinationRequest {
  destinationName: string;
}
export interface DeleteIndexPolicyRequest {
  logGroupIdentifier: string;
}
export interface DeleteIndexPolicyResponse {}
export interface DeleteIntegrationRequest {
  integrationName: string;
  force?: boolean;
}
export interface DeleteIntegrationResponse {}
export interface DeleteKeys {
  withKeys: Array<string>;
}
export interface DeleteLogAnomalyDetectorRequest {
  anomalyDetectorArn: string;
}
export interface DeleteLogGroupRequest {
  logGroupName: string;
}
export interface DeleteLogStreamRequest {
  logGroupName: string;
  logStreamName: string;
}
export interface DeleteMetricFilterRequest {
  logGroupName: string;
  filterName: string;
}
export interface DeleteQueryDefinitionRequest {
  queryDefinitionId: string;
}
export interface DeleteQueryDefinitionResponse {
  success?: boolean;
}
export interface DeleteResourcePolicyRequest {
  policyName?: string;
}
export interface DeleteRetentionPolicyRequest {
  logGroupName: string;
}
export interface DeleteSubscriptionFilterRequest {
  logGroupName: string;
  filterName: string;
}
export interface DeleteTransformerRequest {
  logGroupIdentifier: string;
}
export type DeleteWithKeys = Array<string>;
export type Delimiter = string;

export type Deliveries = Array<Delivery>;
export interface Delivery {
  id?: string;
  arn?: string;
  deliverySourceName?: string;
  deliveryDestinationArn?: string;
  deliveryDestinationType?: DeliveryDestinationType;
  recordFields?: Array<string>;
  fieldDelimiter?: string;
  s3DeliveryConfiguration?: S3DeliveryConfiguration;
  tags?: Record<string, string>;
}
export interface DeliveryDestination {
  name?: string;
  arn?: string;
  deliveryDestinationType?: DeliveryDestinationType;
  outputFormat?: OutputFormat;
  deliveryDestinationConfiguration?: DeliveryDestinationConfiguration;
  tags?: Record<string, string>;
}
export interface DeliveryDestinationConfiguration {
  destinationResourceArn: string;
}
export type DeliveryDestinationName = string;

export type DeliveryDestinationPolicy = string;

export type DeliveryDestinations = Array<DeliveryDestination>;
export type DeliveryDestinationType = "S3" | "CWL" | "FH";
export type DeliveryDestinationTypes = Array<DeliveryDestinationType>;
export type DeliveryId = string;

export interface DeliverySource {
  name?: string;
  arn?: string;
  resourceArns?: Array<string>;
  service?: string;
  logType?: string;
  tags?: Record<string, string>;
}
export type DeliverySourceName = string;

export type DeliverySources = Array<DeliverySource>;
export type DeliverySuffixPath = string;

export type Descending = boolean;

export interface DescribeAccountPoliciesRequest {
  policyType: PolicyType;
  policyName?: string;
  accountIdentifiers?: Array<string>;
  nextToken?: string;
}
export interface DescribeAccountPoliciesResponse {
  accountPolicies?: Array<AccountPolicy>;
  nextToken?: string;
}
export interface DescribeConfigurationTemplatesRequest {
  service?: string;
  logTypes?: Array<string>;
  resourceTypes?: Array<string>;
  deliveryDestinationTypes?: Array<DeliveryDestinationType>;
  nextToken?: string;
  limit?: number;
}
export interface DescribeConfigurationTemplatesResponse {
  configurationTemplates?: Array<ConfigurationTemplate>;
  nextToken?: string;
}
export interface DescribeDeliveriesRequest {
  nextToken?: string;
  limit?: number;
}
export interface DescribeDeliveriesResponse {
  deliveries?: Array<Delivery>;
  nextToken?: string;
}
export interface DescribeDeliveryDestinationsRequest {
  nextToken?: string;
  limit?: number;
}
export interface DescribeDeliveryDestinationsResponse {
  deliveryDestinations?: Array<DeliveryDestination>;
  nextToken?: string;
}
export interface DescribeDeliverySourcesRequest {
  nextToken?: string;
  limit?: number;
}
export interface DescribeDeliverySourcesResponse {
  deliverySources?: Array<DeliverySource>;
  nextToken?: string;
}
export interface DescribeDestinationsRequest {
  DestinationNamePrefix?: string;
  nextToken?: string;
  limit?: number;
}
export interface DescribeDestinationsResponse {
  destinations?: Array<Destination>;
  nextToken?: string;
}
export interface DescribeExportTasksRequest {
  taskId?: string;
  statusCode?: ExportTaskStatusCode;
  nextToken?: string;
  limit?: number;
}
export interface DescribeExportTasksResponse {
  exportTasks?: Array<ExportTask>;
  nextToken?: string;
}
export type DescribeFieldIndexesLogGroupIdentifiers = Array<string>;
export interface DescribeFieldIndexesRequest {
  logGroupIdentifiers: Array<string>;
  nextToken?: string;
}
export interface DescribeFieldIndexesResponse {
  fieldIndexes?: Array<FieldIndex>;
  nextToken?: string;
}
export type DescribeIndexPoliciesLogGroupIdentifiers = Array<string>;
export interface DescribeIndexPoliciesRequest {
  logGroupIdentifiers: Array<string>;
  nextToken?: string;
}
export interface DescribeIndexPoliciesResponse {
  indexPolicies?: Array<IndexPolicy>;
  nextToken?: string;
}
export type DescribeLimit = number;

export type DescribeLogGroupsLogGroupIdentifiers = Array<string>;
export interface DescribeLogGroupsRequest {
  accountIdentifiers?: Array<string>;
  logGroupNamePrefix?: string;
  logGroupNamePattern?: string;
  nextToken?: string;
  limit?: number;
  includeLinkedAccounts?: boolean;
  logGroupClass?: LogGroupClass;
  logGroupIdentifiers?: Array<string>;
}
export interface DescribeLogGroupsResponse {
  logGroups?: Array<LogGroup>;
  nextToken?: string;
}
export interface DescribeLogStreamsRequest {
  logGroupName?: string;
  logGroupIdentifier?: string;
  logStreamNamePrefix?: string;
  orderBy?: OrderBy;
  descending?: boolean;
  nextToken?: string;
  limit?: number;
}
export interface DescribeLogStreamsResponse {
  logStreams?: Array<LogStream>;
  nextToken?: string;
}
export interface DescribeMetricFiltersRequest {
  logGroupName?: string;
  filterNamePrefix?: string;
  nextToken?: string;
  limit?: number;
  metricName?: string;
  metricNamespace?: string;
}
export interface DescribeMetricFiltersResponse {
  metricFilters?: Array<MetricFilter>;
  nextToken?: string;
}
export type DescribeQueriesMaxResults = number;

export interface DescribeQueriesRequest {
  logGroupName?: string;
  status?: QueryStatus;
  maxResults?: number;
  nextToken?: string;
  queryLanguage?: QueryLanguage;
}
export interface DescribeQueriesResponse {
  queries?: Array<QueryInfo>;
  nextToken?: string;
}
export interface DescribeQueryDefinitionsRequest {
  queryLanguage?: QueryLanguage;
  queryDefinitionNamePrefix?: string;
  maxResults?: number;
  nextToken?: string;
}
export interface DescribeQueryDefinitionsResponse {
  queryDefinitions?: Array<QueryDefinition>;
  nextToken?: string;
}
export interface DescribeResourcePoliciesRequest {
  nextToken?: string;
  limit?: number;
}
export interface DescribeResourcePoliciesResponse {
  resourcePolicies?: Array<ResourcePolicy>;
  nextToken?: string;
}
export interface DescribeSubscriptionFiltersRequest {
  logGroupName: string;
  filterNamePrefix?: string;
  nextToken?: string;
  limit?: number;
}
export interface DescribeSubscriptionFiltersResponse {
  subscriptionFilters?: Array<SubscriptionFilter>;
  nextToken?: string;
}
export type Description = string;

export interface Destination {
  destinationName?: string;
  targetArn?: string;
  roleArn?: string;
  accessPolicy?: string;
  arn?: string;
  creationTime?: number;
}
export type DestinationArn = string;

export type DestinationField = string;

export type DestinationName = string;

export type Destinations = Array<Destination>;
export type DetectorKmsKeyArn = string;

export type DetectorName = string;

export type Dimensions = Record<string, string>;
export type DimensionsKey = string;

export type DimensionsValue = string;

export interface DisassociateKmsKeyRequest {
  logGroupName?: string;
  resourceIdentifier?: string;
}
export type Distribution = "Random" | "ByLogStream";
export type DynamicTokenPosition = number;

export type EncryptionKey = string;

export interface Entity {
  keyAttributes?: Record<string, string>;
  attributes?: Record<string, string>;
}
export type EntityAttributes = Record<string, string>;
export type EntityAttributesKey = string;

export type EntityAttributesValue = string;

export type EntityKeyAttributes = Record<string, string>;
export type EntityKeyAttributesKey = string;

export type EntityKeyAttributesValue = string;

export type EntityRejectionErrorType =
  | "INVALID_ENTITY"
  | "INVALID_TYPE_VALUE"
  | "INVALID_KEY_ATTRIBUTE"
  | "INVALID_ATTRIBUTES"
  | "ENTITY_SIZE_TOO_LARGE"
  | "UNSUPPORTED_LOG_GROUP_TYPE"
  | "MISSING_REQUIRED_FIELDS";
export type Enumerations = Record<string, number>;
export type EpochMillis = number;

export type EvaluationFrequency =
  | "ONE_MIN"
  | "FIVE_MIN"
  | "TEN_MIN"
  | "FIFTEEN_MIN"
  | "THIRTY_MIN"
  | "ONE_HOUR";
export type EventId = string;

export type EventMessage = string;

export type EventNumber = number;

export type EventsLimit = number;

export type EventSource =
  | "CLOUD_TRAIL"
  | "ROUTE53_RESOLVER"
  | "VPC_FLOW"
  | "EKS_AUDIT"
  | "AWSWAF";
export type ExportDestinationBucket = string;

export type ExportDestinationPrefix = string;

export interface ExportTask {
  taskId?: string;
  taskName?: string;
  logGroupName?: string;
  from?: number;
  to?: number;
  destination?: string;
  destinationPrefix?: string;
  status?: ExportTaskStatus;
  executionInfo?: ExportTaskExecutionInfo;
}
export interface ExportTaskExecutionInfo {
  creationTime?: number;
  completionTime?: number;
}
export type ExportTaskId = string;

export type ExportTaskName = string;

export type ExportTasks = Array<ExportTask>;
export interface ExportTaskStatus {
  code?: ExportTaskStatusCode;
  message?: string;
}
export type ExportTaskStatusCode =
  | "CANCELLED"
  | "COMPLETED"
  | "FAILED"
  | "PENDING"
  | "PENDING_CANCEL"
  | "RUNNING";
export type ExportTaskStatusMessage = string;

export type ExtractedValues = Record<string, string>;
export type Field = string;

export type FieldDelimiter = string;

export type FieldHeader = string;

export interface FieldIndex {
  logGroupIdentifier?: string;
  fieldIndexName?: string;
  lastScanTime?: number;
  firstEventTime?: number;
  lastEventTime?: number;
}
export type FieldIndexes = Array<FieldIndex>;
export type FieldIndexName = string;

export type FilterCount = number;

export interface FilteredLogEvent {
  logStreamName?: string;
  timestamp?: number;
  message?: string;
  ingestionTime?: number;
  eventId?: string;
}
export type FilteredLogEvents = Array<FilteredLogEvent>;
export interface FilterLogEventsRequest {
  logGroupName?: string;
  logGroupIdentifier?: string;
  logStreamNames?: Array<string>;
  logStreamNamePrefix?: string;
  startTime?: number;
  endTime?: number;
  filterPattern?: string;
  nextToken?: string;
  limit?: number;
  interleaved?: boolean;
  unmask?: boolean;
}
export interface FilterLogEventsResponse {
  events?: Array<FilteredLogEvent>;
  searchedLogStreams?: Array<SearchedLogStream>;
  nextToken?: string;
}
export type FilterName = string;

export type FilterPattern = string;

export type Flatten = boolean;

export type FlattenedElement = "FIRST" | "LAST";
export type Force = boolean;

export type ForceUpdate = boolean;

export type FromKey = string;

export interface GetDataProtectionPolicyRequest {
  logGroupIdentifier: string;
}
export interface GetDataProtectionPolicyResponse {
  logGroupIdentifier?: string;
  policyDocument?: string;
  lastUpdatedTime?: number;
}
export interface GetDeliveryDestinationPolicyRequest {
  deliveryDestinationName: string;
}
export interface GetDeliveryDestinationPolicyResponse {
  policy?: Policy;
}
export interface GetDeliveryDestinationRequest {
  name: string;
}
export interface GetDeliveryDestinationResponse {
  deliveryDestination?: DeliveryDestination;
}
export interface GetDeliveryRequest {
  id: string;
}
export interface GetDeliveryResponse {
  delivery?: Delivery;
}
export interface GetDeliverySourceRequest {
  name: string;
}
export interface GetDeliverySourceResponse {
  deliverySource?: DeliverySource;
}
export interface GetIntegrationRequest {
  integrationName: string;
}
export interface GetIntegrationResponse {
  integrationName?: string;
  integrationType?: IntegrationType;
  integrationStatus?: IntegrationStatus;
  integrationDetails?: IntegrationDetails;
}
export interface GetLogAnomalyDetectorRequest {
  anomalyDetectorArn: string;
}
export interface GetLogAnomalyDetectorResponse {
  detectorName?: string;
  logGroupArnList?: Array<string>;
  evaluationFrequency?: EvaluationFrequency;
  filterPattern?: string;
  anomalyDetectorStatus?: AnomalyDetectorStatus;
  kmsKeyId?: string;
  creationTimeStamp?: number;
  lastModifiedTimeStamp?: number;
  anomalyVisibilityTime?: number;
}
export interface GetLogEventsRequest {
  logGroupName?: string;
  logGroupIdentifier?: string;
  logStreamName: string;
  startTime?: number;
  endTime?: number;
  nextToken?: string;
  limit?: number;
  startFromHead?: boolean;
  unmask?: boolean;
}
export interface GetLogEventsResponse {
  events?: Array<OutputLogEvent>;
  nextForwardToken?: string;
  nextBackwardToken?: string;
}
export interface GetLogGroupFieldsRequest {
  logGroupName?: string;
  time?: number;
  logGroupIdentifier?: string;
}
export interface GetLogGroupFieldsResponse {
  logGroupFields?: Array<LogGroupField>;
}
export interface GetLogRecordRequest {
  logRecordPointer: string;
  unmask?: boolean;
}
export interface GetLogRecordResponse {
  logRecord?: Record<string, string>;
}
export interface GetQueryResultsRequest {
  queryId: string;
}
export interface GetQueryResultsResponse {
  queryLanguage?: QueryLanguage;
  results?: Array<Array<ResultField>>;
  statistics?: QueryStatistics;
  status?: QueryStatus;
  encryptionKey?: string;
}
export interface GetTransformerRequest {
  logGroupIdentifier: string;
}
export interface GetTransformerResponse {
  logGroupIdentifier?: string;
  creationTime?: number;
  lastModifiedTime?: number;
  transformerConfig?: Array<Processor>;
}
export interface Grok {
  source?: string;
  match: string;
}
export type GrokMatch = string;

export type Histogram = Record<string, number>;
export type IncludeLinkedAccounts = boolean;

export type IndexPolicies = Array<IndexPolicy>;
export interface IndexPolicy {
  logGroupIdentifier?: string;
  lastUpdateTime?: number;
  policyDocument?: string;
  policyName?: string;
  source?: IndexSource;
}
export type IndexSource = "ACCOUNT" | "LOG_GROUP";
export type InferredTokenName = string;

export type InheritedProperties = Array<InheritedProperty>;
export type InheritedProperty = "ACCOUNT_DATA_PROTECTION";
export interface InputLogEvent {
  timestamp: number;
  message: string;
}
export type InputLogEvents = Array<InputLogEvent>;
export type InputLogStreamNames = Array<string>;
export type Integer = number;

export type IntegrationDetails = {
  openSearchIntegrationDetails: OpenSearchIntegrationDetails;
};
export type IntegrationName = string;

export type IntegrationNamePrefix = string;

export type IntegrationStatus = "PROVISIONING" | "ACTIVE" | "FAILED";
export type IntegrationStatusMessage = string;

export type IntegrationSummaries = Array<IntegrationSummary>;
export interface IntegrationSummary {
  integrationName?: string;
  integrationType?: IntegrationType;
  integrationStatus?: IntegrationStatus;
}
export type IntegrationType = "OPENSEARCH";
export type Interleaved = boolean;

export declare class InvalidOperationException extends EffectData.TaggedError(
  "InvalidOperationException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidParameterException extends EffectData.TaggedError(
  "InvalidParameterException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidSequenceTokenException extends EffectData.TaggedError(
  "InvalidSequenceTokenException",
)<{
  readonly expectedSequenceToken?: string;
  readonly message?: string;
}> {}
export type IsSampled = boolean;

export type Key = string;

export type KeyPrefix = string;

export type KeyValueDelimiter = string;

export type KmsKeyId = string;

export declare class LimitExceededException extends EffectData.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export type ListAnomaliesLimit = number;

export interface ListAnomaliesRequest {
  anomalyDetectorArn?: string;
  suppressionState?: SuppressionState;
  limit?: number;
  nextToken?: string;
}
export interface ListAnomaliesResponse {
  anomalies?: Array<Anomaly>;
  nextToken?: string;
}
export interface ListIntegrationsRequest {
  integrationNamePrefix?: string;
  integrationType?: IntegrationType;
  integrationStatus?: IntegrationStatus;
}
export interface ListIntegrationsResponse {
  integrationSummaries?: Array<IntegrationSummary>;
}
export type ListLimit = number;

export type ListLogAnomalyDetectorsLimit = number;

export interface ListLogAnomalyDetectorsRequest {
  filterLogGroupArn?: string;
  limit?: number;
  nextToken?: string;
}
export interface ListLogAnomalyDetectorsResponse {
  anomalyDetectors?: Array<AnomalyDetector>;
  nextToken?: string;
}
export type ListLogGroupsForQueryMaxResults = number;

export interface ListLogGroupsForQueryRequest {
  queryId: string;
  nextToken?: string;
  maxResults?: number;
}
export interface ListLogGroupsForQueryResponse {
  logGroupIdentifiers?: Array<string>;
  nextToken?: string;
}
export interface ListLogGroupsRequest {
  logGroupNamePattern?: string;
  logGroupClass?: LogGroupClass;
  includeLinkedAccounts?: boolean;
  accountIdentifiers?: Array<string>;
  nextToken?: string;
  limit?: number;
}
export interface ListLogGroupsResponse {
  logGroups?: Array<LogGroupSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListTagsLogGroupRequest {
  logGroupName: string;
}
export interface ListTagsLogGroupResponse {
  tags?: Record<string, string>;
}
export interface ListToMap {
  source: string;
  key: string;
  valueKey?: string;
  target?: string;
  flatten?: boolean;
  flattenedElement?: FlattenedElement;
}
export interface LiveTailSessionLogEvent {
  logStreamName?: string;
  logGroupIdentifier?: string;
  message?: string;
  timestamp?: number;
  ingestionTime?: number;
}
export interface LiveTailSessionMetadata {
  sampled?: boolean;
}
export type LiveTailSessionResults = Array<LiveTailSessionLogEvent>;
export interface LiveTailSessionStart {
  requestId?: string;
  sessionId?: string;
  logGroupIdentifiers?: Array<string>;
  logStreamNames?: Array<string>;
  logStreamNamePrefixes?: Array<string>;
  logEventFilterPattern?: string;
}
export interface LiveTailSessionUpdate {
  sessionMetadata?: LiveTailSessionMetadata;
  sessionResults?: Array<LiveTailSessionLogEvent>;
}
export type Locale = string;

export interface LogEvent {
  timestamp?: number;
  message?: string;
}
export type LogEventIndex = number;

export interface LogGroup {
  logGroupName?: string;
  creationTime?: number;
  retentionInDays?: number;
  metricFilterCount?: number;
  arn?: string;
  storedBytes?: number;
  kmsKeyId?: string;
  dataProtectionStatus?: DataProtectionStatus;
  inheritedProperties?: Array<InheritedProperty>;
  logGroupClass?: LogGroupClass;
  logGroupArn?: string;
}
export type LogGroupArn = string;

export type LogGroupArnList = Array<string>;
export type LogGroupClass = "STANDARD" | "INFREQUENT_ACCESS" | "DELIVERY";
export interface LogGroupField {
  name?: string;
  percent?: number;
}
export type LogGroupFieldList = Array<LogGroupField>;
export type LogGroupIdentifier = string;

export type LogGroupIdentifiers = Array<string>;
export type LogGroupName = string;

export type LogGroupNamePattern = string;

export type LogGroupNameRegexPattern = string;

export type LogGroupNames = Array<string>;
export type LogGroups = Array<LogGroup>;
export type LogGroupSummaries = Array<LogGroupSummary>;
export interface LogGroupSummary {
  logGroupName?: string;
  logGroupArn?: string;
  logGroupClass?: LogGroupClass;
}
export type LogRecord = Record<string, string>;
export type LogRecordPointer = string;

export type LogSamples = Array<LogEvent>;
export interface LogStream {
  logStreamName?: string;
  creationTime?: number;
  firstEventTimestamp?: number;
  lastEventTimestamp?: number;
  lastIngestionTime?: number;
  uploadSequenceToken?: string;
  arn?: string;
  storedBytes?: number;
}
export type LogStreamName = string;

export type LogStreams = Array<LogStream>;
export type LogStreamSearchedCompletely = boolean;

export type LogType = string;

export type LogTypes = Array<string>;
export interface LowerCaseString {
  withKeys: Array<string>;
}
export type LowerCaseStringWithKeys = Array<string>;
export declare class MalformedQueryException extends EffectData.TaggedError(
  "MalformedQueryException",
)<{
  readonly queryCompileError?: QueryCompileError;
  readonly message?: string;
}> {}
export type MatchPattern = string;

export type MatchPatterns = Array<string>;
export type Message = string;

export interface MetricFilter {
  filterName?: string;
  filterPattern?: string;
  metricTransformations?: Array<MetricTransformation>;
  creationTime?: number;
  logGroupName?: string;
  applyOnTransformedLogs?: boolean;
}
export type MetricFilterMatches = Array<MetricFilterMatchRecord>;
export interface MetricFilterMatchRecord {
  eventNumber?: number;
  eventMessage?: string;
  extractedValues?: Record<string, string>;
}
export type MetricFilters = Array<MetricFilter>;
export type MetricName = string;

export type MetricNamespace = string;

export interface MetricTransformation {
  metricName: string;
  metricNamespace: string;
  metricValue: string;
  defaultValue?: number;
  dimensions?: Record<string, string>;
  unit?: StandardUnit;
}
export type MetricTransformations = Array<MetricTransformation>;
export type MetricValue = string;

export type MoveKeyEntries = Array<MoveKeyEntry>;
export interface MoveKeyEntry {
  source: string;
  target: string;
  overwriteIfExists?: boolean;
}
export interface MoveKeys {
  entries: Array<MoveKeyEntry>;
}
export type NextToken = string;

export type NonMatchValue = string;

export type OCSFVersion = "V1_1";
export interface OpenSearchApplication {
  applicationEndpoint?: string;
  applicationArn?: string;
  applicationId?: string;
  status?: OpenSearchResourceStatus;
}
export type OpenSearchApplicationEndpoint = string;

export type OpenSearchApplicationId = string;

export interface OpenSearchCollection {
  collectionEndpoint?: string;
  collectionArn?: string;
  status?: OpenSearchResourceStatus;
}
export type OpenSearchCollectionEndpoint = string;

export interface OpenSearchDataAccessPolicy {
  policyName?: string;
  status?: OpenSearchResourceStatus;
}
export interface OpenSearchDataSource {
  dataSourceName?: string;
  status?: OpenSearchResourceStatus;
}
export type OpenSearchDataSourceName = string;

export interface OpenSearchEncryptionPolicy {
  policyName?: string;
  status?: OpenSearchResourceStatus;
}
export interface OpenSearchIntegrationDetails {
  dataSource?: OpenSearchDataSource;
  application?: OpenSearchApplication;
  collection?: OpenSearchCollection;
  workspace?: OpenSearchWorkspace;
  encryptionPolicy?: OpenSearchEncryptionPolicy;
  networkPolicy?: OpenSearchNetworkPolicy;
  accessPolicy?: OpenSearchDataAccessPolicy;
  lifecyclePolicy?: OpenSearchLifecyclePolicy;
}
export interface OpenSearchLifecyclePolicy {
  policyName?: string;
  status?: OpenSearchResourceStatus;
}
export interface OpenSearchNetworkPolicy {
  policyName?: string;
  status?: OpenSearchResourceStatus;
}
export type OpenSearchPolicyName = string;

export interface OpenSearchResourceConfig {
  kmsKeyArn?: string;
  dataSourceRoleArn: string;
  dashboardViewerPrincipals: Array<string>;
  applicationArn?: string;
  retentionDays: number;
}
export interface OpenSearchResourceStatus {
  status?: OpenSearchResourceStatusType;
  statusMessage?: string;
}
export type OpenSearchResourceStatusType = "ACTIVE" | "NOT_FOUND" | "ERROR";
export interface OpenSearchWorkspace {
  workspaceId?: string;
  status?: OpenSearchResourceStatus;
}
export type OpenSearchWorkspaceId = string;

export declare class OperationAbortedException extends EffectData.TaggedError(
  "OperationAbortedException",
)<{
  readonly message?: string;
}> {}
export type OrderBy = "LogStreamName" | "LastEventTime";
export type OutputFormat = "JSON" | "PLAIN" | "W3C" | "RAW" | "PARQUET";
export type OutputFormats = Array<OutputFormat>;
export interface OutputLogEvent {
  timestamp?: number;
  message?: string;
  ingestionTime?: number;
}
export type OutputLogEvents = Array<OutputLogEvent>;
export type OverwriteIfExists = boolean;

export interface ParseCloudfront {
  source?: string;
}
export interface ParseJSON {
  source?: string;
  destination?: string;
}
export interface ParseKeyValue {
  source?: string;
  destination?: string;
  fieldDelimiter?: string;
  keyValueDelimiter?: string;
  keyPrefix?: string;
  nonMatchValue?: string;
  overwriteIfExists?: boolean;
}
export interface ParsePostgres {
  source?: string;
}
export type ParserFieldDelimiter = string;

export interface ParseRoute53 {
  source?: string;
}
export interface ParseToOCSF {
  source?: string;
  eventSource: EventSource;
  ocsfVersion: OCSFVersion;
}
export interface ParseVPC {
  source?: string;
}
export interface ParseWAF {
  source?: string;
}
export type PatternId = string;

export type PatternRegex = string;

export type PatternString = string;

export interface PatternToken {
  dynamicTokenPosition?: number;
  isDynamic?: boolean;
  tokenString?: string;
  enumerations?: Record<string, number>;
  inferredTokenName?: string;
}
export type PatternTokens = Array<PatternToken>;
export type Percentage = number;

export interface Policy {
  deliveryDestinationPolicy?: string;
}
export type PolicyDocument = string;

export type PolicyName = string;

export type PolicyType =
  | "DATA_PROTECTION_POLICY"
  | "SUBSCRIPTION_FILTER_POLICY"
  | "FIELD_INDEX_POLICY"
  | "TRANSFORMER_POLICY";
export type Priority = string;

export interface Processor {
  addKeys?: AddKeys;
  copyValue?: CopyValue;
  csv?: CSV;
  dateTimeConverter?: DateTimeConverter;
  deleteKeys?: DeleteKeys;
  grok?: Grok;
  listToMap?: ListToMap;
  lowerCaseString?: LowerCaseString;
  moveKeys?: MoveKeys;
  parseCloudfront?: ParseCloudfront;
  parseJSON?: ParseJSON;
  parseKeyValue?: ParseKeyValue;
  parseRoute53?: ParseRoute53;
  parseToOCSF?: ParseToOCSF;
  parsePostgres?: ParsePostgres;
  parseVPC?: ParseVPC;
  parseWAF?: ParseWAF;
  renameKeys?: RenameKeys;
  splitString?: SplitString;
  substituteString?: SubstituteString;
  trimString?: TrimString;
  typeConverter?: TypeConverter;
  upperCaseString?: UpperCaseString;
}
export type Processors = Array<Processor>;
export interface PutAccountPolicyRequest {
  policyName: string;
  policyDocument: string;
  policyType: PolicyType;
  scope?: Scope;
  selectionCriteria?: string;
}
export interface PutAccountPolicyResponse {
  accountPolicy?: AccountPolicy;
}
export interface PutDataProtectionPolicyRequest {
  logGroupIdentifier: string;
  policyDocument: string;
}
export interface PutDataProtectionPolicyResponse {
  logGroupIdentifier?: string;
  policyDocument?: string;
  lastUpdatedTime?: number;
}
export interface PutDeliveryDestinationPolicyRequest {
  deliveryDestinationName: string;
  deliveryDestinationPolicy: string;
}
export interface PutDeliveryDestinationPolicyResponse {
  policy?: Policy;
}
export interface PutDeliveryDestinationRequest {
  name: string;
  outputFormat?: OutputFormat;
  deliveryDestinationConfiguration: DeliveryDestinationConfiguration;
  tags?: Record<string, string>;
}
export interface PutDeliveryDestinationResponse {
  deliveryDestination?: DeliveryDestination;
}
export interface PutDeliverySourceRequest {
  name: string;
  resourceArn: string;
  logType: string;
  tags?: Record<string, string>;
}
export interface PutDeliverySourceResponse {
  deliverySource?: DeliverySource;
}
export interface PutDestinationPolicyRequest {
  destinationName: string;
  accessPolicy: string;
  forceUpdate?: boolean;
}
export interface PutDestinationRequest {
  destinationName: string;
  targetArn: string;
  roleArn: string;
  tags?: Record<string, string>;
}
export interface PutDestinationResponse {
  destination?: Destination;
}
export interface PutIndexPolicyRequest {
  logGroupIdentifier: string;
  policyDocument: string;
}
export interface PutIndexPolicyResponse {
  indexPolicy?: IndexPolicy;
}
export interface PutIntegrationRequest {
  integrationName: string;
  resourceConfig: ResourceConfig;
  integrationType: IntegrationType;
}
export interface PutIntegrationResponse {
  integrationName?: string;
  integrationStatus?: IntegrationStatus;
}
export interface PutLogEventsRequest {
  logGroupName: string;
  logStreamName: string;
  logEvents: Array<InputLogEvent>;
  sequenceToken?: string;
  entity?: Entity;
}
export interface PutLogEventsResponse {
  nextSequenceToken?: string;
  rejectedLogEventsInfo?: RejectedLogEventsInfo;
  rejectedEntityInfo?: RejectedEntityInfo;
}
export interface PutMetricFilterRequest {
  logGroupName: string;
  filterName: string;
  filterPattern: string;
  metricTransformations: Array<MetricTransformation>;
  applyOnTransformedLogs?: boolean;
}
export interface PutQueryDefinitionRequest {
  queryLanguage?: QueryLanguage;
  name: string;
  queryDefinitionId?: string;
  logGroupNames?: Array<string>;
  queryString: string;
  clientToken?: string;
}
export interface PutQueryDefinitionResponse {
  queryDefinitionId?: string;
}
export interface PutResourcePolicyRequest {
  policyName?: string;
  policyDocument?: string;
}
export interface PutResourcePolicyResponse {
  resourcePolicy?: ResourcePolicy;
}
export interface PutRetentionPolicyRequest {
  logGroupName: string;
  retentionInDays: number;
}
export interface PutSubscriptionFilterRequest {
  logGroupName: string;
  filterName: string;
  filterPattern: string;
  destinationArn: string;
  roleArn?: string;
  distribution?: Distribution;
  applyOnTransformedLogs?: boolean;
}
export interface PutTransformerRequest {
  logGroupIdentifier: string;
  transformerConfig: Array<Processor>;
}
export type QueryCharOffset = number;

export interface QueryCompileError {
  location?: QueryCompileErrorLocation;
  message?: string;
}
export interface QueryCompileErrorLocation {
  startCharOffset?: number;
  endCharOffset?: number;
}
export interface QueryDefinition {
  queryLanguage?: QueryLanguage;
  queryDefinitionId?: string;
  name?: string;
  queryString?: string;
  lastModified?: number;
  logGroupNames?: Array<string>;
}
export type QueryDefinitionList = Array<QueryDefinition>;
export type QueryDefinitionName = string;

export type QueryDefinitionString = string;

export type QueryId = string;

export interface QueryInfo {
  queryLanguage?: QueryLanguage;
  queryId?: string;
  queryString?: string;
  status?: QueryStatus;
  createTime?: number;
  logGroupName?: string;
}
export type QueryInfoList = Array<QueryInfo>;
export type QueryLanguage = "CWLI" | "SQL" | "PPL";
export type QueryListMaxResults = number;

export type QueryResults = Array<Array<ResultField>>;
export interface QueryStatistics {
  recordsMatched?: number;
  recordsScanned?: number;
  estimatedRecordsSkipped?: number;
  bytesScanned?: number;
  estimatedBytesSkipped?: number;
  logGroupsScanned?: number;
}
export type QueryStatus =
  | "Scheduled"
  | "Running"
  | "Complete"
  | "Failed"
  | "Cancelled"
  | "Timeout"
  | "Unknown";
export type QueryString = string;

export type QuoteCharacter = string;

export interface RecordField {
  name?: string;
  mandatory?: boolean;
}
export type RecordFields = Array<string>;
export interface RejectedEntityInfo {
  errorType: EntityRejectionErrorType;
}
export interface RejectedLogEventsInfo {
  tooNewLogEventStartIndex?: number;
  tooOldLogEventEndIndex?: number;
  expiredLogEventEndIndex?: number;
}
export type RenameKeyEntries = Array<RenameKeyEntry>;
export interface RenameKeyEntry {
  key: string;
  renameTo: string;
  overwriteIfExists?: boolean;
}
export interface RenameKeys {
  entries: Array<RenameKeyEntry>;
}
export type RenameTo = string;

export type RequestId = string;

export declare class ResourceAlreadyExistsException extends EffectData.TaggedError(
  "ResourceAlreadyExistsException",
)<{
  readonly message?: string;
}> {}
export type ResourceArns = Array<string>;
export type ResourceConfig = {
  openSearchResourceConfig: OpenSearchResourceConfig;
};
export type ResourceIdentifier = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type ResourcePolicies = Array<ResourcePolicy>;
export interface ResourcePolicy {
  policyName?: string;
  policyDocument?: string;
  lastUpdatedTime?: number;
}
export type ResourceType = string;

export type ResourceTypes = Array<string>;
export interface ResultField {
  field?: string;
  value?: string;
}
export type ResultRows = Array<ResultField>;
export type RoleArn = string;

export interface S3DeliveryConfiguration {
  suffixPath?: string;
  enableHiveCompatiblePath?: boolean;
}
export type Scope = "ALL";
export interface SearchedLogStream {
  logStreamName?: string;
  searchedCompletely?: boolean;
}
export type SearchedLogStreams = Array<SearchedLogStream>;
export type SelectionCriteria = string;

export type SequenceToken = string;

export type Service = string;

export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message?: string;
}> {}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly message?: string;
}> {}
export type SessionId = string;

export declare class SessionStreamingException extends EffectData.TaggedError(
  "SessionStreamingException",
)<{
  readonly message?: string;
}> {}
export declare class SessionTimeoutException extends EffectData.TaggedError(
  "SessionTimeoutException",
)<{
  readonly message?: string;
}> {}
export type Source = string;

export type SourceTimezone = string;

export interface SplitString {
  entries: Array<SplitStringEntry>;
}
export type SplitStringDelimiter = string;

export type SplitStringEntries = Array<SplitStringEntry>;
export interface SplitStringEntry {
  source: string;
  delimiter: string;
}
export type StandardUnit =
  | "Seconds"
  | "Microseconds"
  | "Milliseconds"
  | "Bytes"
  | "Kilobytes"
  | "Megabytes"
  | "Gigabytes"
  | "Terabytes"
  | "Bits"
  | "Kilobits"
  | "Megabits"
  | "Gigabits"
  | "Terabits"
  | "Percent"
  | "Count"
  | "BytesSecond"
  | "KilobytesSecond"
  | "MegabytesSecond"
  | "GigabytesSecond"
  | "TerabytesSecond"
  | "BitsSecond"
  | "KilobitsSecond"
  | "MegabitsSecond"
  | "GigabitsSecond"
  | "TerabitsSecond"
  | "CountSecond"
  | "None";
export type StartFromHead = boolean;

export type StartLiveTailLogGroupIdentifiers = Array<string>;
export interface StartLiveTailRequest {
  logGroupIdentifiers: Array<string>;
  logStreamNames?: Array<string>;
  logStreamNamePrefixes?: Array<string>;
  logEventFilterPattern?: string;
}
export interface StartLiveTailResponse {
  responseStream?: StartLiveTailResponseStream;
}
export type StartLiveTailResponseStream =
  | {
      sessionStart: LiveTailSessionStart;
      sessionUpdate?: undefined;
      SessionTimeoutException?: undefined;
      SessionStreamingException?: undefined;
    }
  | {
      sessionStart?: undefined;
      sessionUpdate: LiveTailSessionUpdate;
      SessionTimeoutException?: undefined;
      SessionStreamingException?: undefined;
    }
  | {
      sessionStart?: undefined;
      sessionUpdate?: undefined;
      SessionTimeoutException: SessionTimeoutException;
      SessionStreamingException?: undefined;
    }
  | {
      sessionStart?: undefined;
      sessionUpdate?: undefined;
      SessionTimeoutException?: undefined;
      SessionStreamingException: SessionStreamingException;
    };
export interface StartQueryRequest {
  queryLanguage?: QueryLanguage;
  logGroupName?: string;
  logGroupNames?: Array<string>;
  logGroupIdentifiers?: Array<string>;
  startTime: number;
  endTime: number;
  queryString: string;
  limit?: number;
}
export interface StartQueryResponse {
  queryId?: string;
}
export type State = "Active" | "Suppressed" | "Baseline";
export type StatsValue = number;

export interface StopQueryRequest {
  queryId: string;
}
export interface StopQueryResponse {
  success?: boolean;
}
export type StoredBytes = number;

export interface SubscriptionFilter {
  filterName?: string;
  logGroupName?: string;
  filterPattern?: string;
  destinationArn?: string;
  roleArn?: string;
  distribution?: Distribution;
  applyOnTransformedLogs?: boolean;
  creationTime?: number;
}
export type SubscriptionFilters = Array<SubscriptionFilter>;
export interface SubstituteString {
  entries: Array<SubstituteStringEntry>;
}
export type SubstituteStringEntries = Array<SubstituteStringEntry>;
export interface SubstituteStringEntry {
  source: string;
  from: string;
  to: string;
}
export type Success = boolean;

export interface SuppressionPeriod {
  value?: number;
  suppressionUnit?: SuppressionUnit;
}
export type SuppressionState = "SUPPRESSED" | "UNSUPPRESSED";
export type SuppressionType = "LIMITED" | "INFINITE";
export type SuppressionUnit = "SECONDS" | "MINUTES" | "HOURS";
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<string>;
export interface TagLogGroupRequest {
  logGroupName: string;
  tags: Record<string, string>;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export type Tags = Record<string, string>;
export type TagValue = string;

export type Target = string;

export type TargetArn = string;

export type TargetFormat = string;

export type TargetTimezone = string;

export type TestEventMessages = Array<string>;
export interface TestMetricFilterRequest {
  filterPattern: string;
  logEventMessages: Array<string>;
}
export interface TestMetricFilterResponse {
  matches?: Array<MetricFilterMatchRecord>;
}
export interface TestTransformerRequest {
  transformerConfig: Array<Processor>;
  logEventMessages: Array<string>;
}
export interface TestTransformerResponse {
  transformedLogs?: Array<TransformedLogRecord>;
}
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type Time = string;

export type Timestamp = number;

export type Token = string;

export type TokenString = string;

export type TokenValue = number;

export type ToKey = string;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
  readonly resourceName?: string;
}> {}
export type TransformedEventMessage = string;

export interface TransformedLogRecord {
  eventNumber?: number;
  eventMessage?: string;
  transformedEventMessage?: string;
}
export type TransformedLogs = Array<TransformedLogRecord>;
export interface TrimString {
  withKeys: Array<string>;
}
export type TrimStringWithKeys = Array<string>;
export type Type = "BOOLEAN" | "INTEGER" | "DOUBLE" | "STRING";
export interface TypeConverter {
  entries: Array<TypeConverterEntry>;
}
export type TypeConverterEntries = Array<TypeConverterEntry>;
export interface TypeConverterEntry {
  key: string;
  type: Type;
}
export type Unmask = boolean;

export declare class UnrecognizedClientException extends EffectData.TaggedError(
  "UnrecognizedClientException",
)<{
  readonly message?: string;
}> {}
export interface UntagLogGroupRequest {
  logGroupName: string;
  tags: Array<string>;
}
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UpdateAnomalyRequest {
  anomalyId?: string;
  patternId?: string;
  anomalyDetectorArn: string;
  suppressionType?: SuppressionType;
  suppressionPeriod?: SuppressionPeriod;
  baseline?: boolean;
}
export interface UpdateDeliveryConfigurationRequest {
  id: string;
  recordFields?: Array<string>;
  fieldDelimiter?: string;
  s3DeliveryConfiguration?: S3DeliveryConfiguration;
}
export interface UpdateDeliveryConfigurationResponse {}
export interface UpdateLogAnomalyDetectorRequest {
  anomalyDetectorArn: string;
  evaluationFrequency?: EvaluationFrequency;
  filterPattern?: string;
  anomalyVisibilityTime?: number;
  enabled: boolean;
}
export interface UpperCaseString {
  withKeys: Array<string>;
}
export type UpperCaseStringWithKeys = Array<string>;
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export type Value = string;

export type ValueKey = string;

export type WithKey = string;

export declare namespace AssociateKmsKey {
  export type Input = AssociateKmsKeyRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CancelExportTask {
  export type Input = CancelExportTaskRequest;
  export type Output = {};
  export type Error =
    | InvalidOperationException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateDelivery {
  export type Input = CreateDeliveryRequest;
  export type Output = CreateDeliveryResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateExportTask {
  export type Input = CreateExportTaskRequest;
  export type Output = CreateExportTaskResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateLogAnomalyDetector {
  export type Input = CreateLogAnomalyDetectorRequest;
  export type Output = CreateLogAnomalyDetectorResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateLogGroup {
  export type Input = CreateLogGroupRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceAlreadyExistsException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace CreateLogStream {
  export type Input = CreateLogStreamRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | ResourceAlreadyExistsException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteAccountPolicy {
  export type Input = DeleteAccountPolicyRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteDataProtectionPolicy {
  export type Input = DeleteDataProtectionPolicyRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteDelivery {
  export type Input = DeleteDeliveryRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDeliveryDestination {
  export type Input = DeleteDeliveryDestinationRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDeliveryDestinationPolicy {
  export type Input = DeleteDeliveryDestinationPolicyRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDeliverySource {
  export type Input = DeleteDeliverySourceRequest;
  export type Output = {};
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteDestination {
  export type Input = DeleteDestinationRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteIndexPolicy {
  export type Input = DeleteIndexPolicyRequest;
  export type Output = DeleteIndexPolicyResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteIntegration {
  export type Input = DeleteIntegrationRequest;
  export type Output = DeleteIntegrationResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLogAnomalyDetector {
  export type Input = DeleteLogAnomalyDetectorRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteLogGroup {
  export type Input = DeleteLogGroupRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteLogStream {
  export type Input = DeleteLogStreamRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteMetricFilter {
  export type Input = DeleteMetricFilterRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteQueryDefinition {
  export type Input = DeleteQueryDefinitionRequest;
  export type Output = DeleteQueryDefinitionResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteRetentionPolicy {
  export type Input = DeleteRetentionPolicyRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteSubscriptionFilter {
  export type Input = DeleteSubscriptionFilterRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteTransformer {
  export type Input = DeleteTransformerRequest;
  export type Output = {};
  export type Error =
    | InvalidOperationException
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeAccountPolicies {
  export type Input = DescribeAccountPoliciesRequest;
  export type Output = DescribeAccountPoliciesResponse;
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeConfigurationTemplates {
  export type Input = DescribeConfigurationTemplatesRequest;
  export type Output = DescribeConfigurationTemplatesResponse;
  export type Error =
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDeliveries {
  export type Input = DescribeDeliveriesRequest;
  export type Output = DescribeDeliveriesResponse;
  export type Error =
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDeliveryDestinations {
  export type Input = DescribeDeliveryDestinationsRequest;
  export type Output = DescribeDeliveryDestinationsResponse;
  export type Error =
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDeliverySources {
  export type Input = DescribeDeliverySourcesRequest;
  export type Output = DescribeDeliverySourcesResponse;
  export type Error =
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DescribeDestinations {
  export type Input = DescribeDestinationsRequest;
  export type Output = DescribeDestinationsResponse;
  export type Error =
    | InvalidParameterException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeExportTasks {
  export type Input = DescribeExportTasksRequest;
  export type Output = DescribeExportTasksResponse;
  export type Error =
    | InvalidParameterException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeFieldIndexes {
  export type Input = DescribeFieldIndexesRequest;
  export type Output = DescribeFieldIndexesResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeIndexPolicies {
  export type Input = DescribeIndexPoliciesRequest;
  export type Output = DescribeIndexPoliciesResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeLogGroups {
  export type Input = DescribeLogGroupsRequest;
  export type Output = DescribeLogGroupsResponse;
  export type Error =
    | InvalidParameterException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeLogStreams {
  export type Input = DescribeLogStreamsRequest;
  export type Output = DescribeLogStreamsResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeMetricFilters {
  export type Input = DescribeMetricFiltersRequest;
  export type Output = DescribeMetricFiltersResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeQueries {
  export type Input = DescribeQueriesRequest;
  export type Output = DescribeQueriesResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeQueryDefinitions {
  export type Input = DescribeQueryDefinitionsRequest;
  export type Output = DescribeQueryDefinitionsResponse;
  export type Error =
    | InvalidParameterException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeResourcePolicies {
  export type Input = DescribeResourcePoliciesRequest;
  export type Output = DescribeResourcePoliciesResponse;
  export type Error =
    | InvalidParameterException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DescribeSubscriptionFilters {
  export type Input = DescribeSubscriptionFiltersRequest;
  export type Output = DescribeSubscriptionFiltersResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DisassociateKmsKey {
  export type Input = DisassociateKmsKeyRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace FilterLogEvents {
  export type Input = FilterLogEventsRequest;
  export type Output = FilterLogEventsResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetDataProtectionPolicy {
  export type Input = GetDataProtectionPolicyRequest;
  export type Output = GetDataProtectionPolicyResponse;
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetDelivery {
  export type Input = GetDeliveryRequest;
  export type Output = GetDeliveryResponse;
  export type Error =
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDeliveryDestination {
  export type Input = GetDeliveryDestinationRequest;
  export type Output = GetDeliveryDestinationResponse;
  export type Error =
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDeliveryDestinationPolicy {
  export type Input = GetDeliveryDestinationPolicyRequest;
  export type Output = GetDeliveryDestinationPolicyResponse;
  export type Error =
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDeliverySource {
  export type Input = GetDeliverySourceRequest;
  export type Output = GetDeliverySourceResponse;
  export type Error =
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetIntegration {
  export type Input = GetIntegrationRequest;
  export type Output = GetIntegrationResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetLogAnomalyDetector {
  export type Input = GetLogAnomalyDetectorRequest;
  export type Output = GetLogAnomalyDetectorResponse;
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetLogEvents {
  export type Input = GetLogEventsRequest;
  export type Output = GetLogEventsResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetLogGroupFields {
  export type Input = GetLogGroupFieldsRequest;
  export type Output = GetLogGroupFieldsResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetLogRecord {
  export type Input = GetLogRecordRequest;
  export type Output = GetLogRecordResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetQueryResults {
  export type Input = GetQueryResultsRequest;
  export type Output = GetQueryResultsResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace GetTransformer {
  export type Input = GetTransformerRequest;
  export type Output = GetTransformerResponse;
  export type Error =
    | InvalidOperationException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListAnomalies {
  export type Input = ListAnomaliesRequest;
  export type Output = ListAnomaliesResponse;
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListIntegrations {
  export type Input = ListIntegrationsRequest;
  export type Output = ListIntegrationsResponse;
  export type Error =
    | InvalidParameterException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListLogAnomalyDetectors {
  export type Input = ListLogAnomalyDetectorsRequest;
  export type Output = ListLogAnomalyDetectorsResponse;
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListLogGroups {
  export type Input = ListLogGroupsRequest;
  export type Output = ListLogGroupsResponse;
  export type Error =
    | InvalidParameterException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListLogGroupsForQuery {
  export type Input = ListLogGroupsForQueryRequest;
  export type Output = ListLogGroupsForQueryResponse;
  export type Error =
    | AccessDeniedException
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace ListTagsLogGroup {
  export type Input = ListTagsLogGroupRequest;
  export type Output = ListTagsLogGroupResponse;
  export type Error =
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutAccountPolicy {
  export type Input = PutAccountPolicyRequest;
  export type Output = PutAccountPolicyResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutDataProtectionPolicy {
  export type Input = PutDataProtectionPolicyRequest;
  export type Output = PutDataProtectionPolicyResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutDeliveryDestination {
  export type Input = PutDeliveryDestinationRequest;
  export type Output = PutDeliveryDestinationResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutDeliveryDestinationPolicy {
  export type Input = PutDeliveryDestinationPolicyRequest;
  export type Output = PutDeliveryDestinationPolicyResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutDeliverySource {
  export type Input = PutDeliverySourceRequest;
  export type Output = PutDeliverySourceResponse;
  export type Error =
    | ConflictException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutDestination {
  export type Input = PutDestinationRequest;
  export type Output = PutDestinationResponse;
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutDestinationPolicy {
  export type Input = PutDestinationPolicyRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutIndexPolicy {
  export type Input = PutIndexPolicyRequest;
  export type Output = PutIndexPolicyResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutIntegration {
  export type Input = PutIntegrationRequest;
  export type Output = PutIntegrationResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | ServiceUnavailableException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutLogEvents {
  export type Input = PutLogEventsRequest;
  export type Output = PutLogEventsResponse;
  export type Error =
    | DataAlreadyAcceptedException
    | InvalidParameterException
    | InvalidSequenceTokenException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | UnrecognizedClientException
    | CommonAwsError;
}

export declare namespace PutMetricFilter {
  export type Input = PutMetricFilterRequest;
  export type Output = {};
  export type Error =
    | InvalidOperationException
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutQueryDefinition {
  export type Input = PutQueryDefinitionRequest;
  export type Output = PutQueryDefinitionResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = PutResourcePolicyResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutRetentionPolicy {
  export type Input = PutRetentionPolicyRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutSubscriptionFilter {
  export type Input = PutSubscriptionFilterRequest;
  export type Output = {};
  export type Error =
    | InvalidOperationException
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace PutTransformer {
  export type Input = PutTransformerRequest;
  export type Output = {};
  export type Error =
    | InvalidOperationException
    | InvalidParameterException
    | LimitExceededException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace StartLiveTail {
  export type Input = StartLiveTailRequest;
  export type Output = StartLiveTailResponse;
  export type Error =
    | AccessDeniedException
    | InvalidOperationException
    | InvalidParameterException
    | LimitExceededException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartQuery {
  export type Input = StartQueryRequest;
  export type Output = StartQueryResponse;
  export type Error =
    | InvalidParameterException
    | LimitExceededException
    | MalformedQueryException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace StopQuery {
  export type Input = StopQueryRequest;
  export type Output = StopQueryResponse;
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace TagLogGroup {
  export type Input = TagLogGroupRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | TooManyTagsException
    | CommonAwsError;
}

export declare namespace TestMetricFilter {
  export type Input = TestMetricFilterRequest;
  export type Output = TestMetricFilterResponse;
  export type Error =
    | InvalidParameterException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace TestTransformer {
  export type Input = TestTransformerRequest;
  export type Output = TestTransformerResponse;
  export type Error =
    | InvalidOperationException
    | InvalidParameterException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UntagLogGroup {
  export type Input = UntagLogGroupRequest;
  export type Output = {};
  export type Error = ResourceNotFoundException | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateAnomaly {
  export type Input = UpdateAnomalyRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace UpdateDeliveryConfiguration {
  export type Input = UpdateDeliveryConfigurationRequest;
  export type Output = UpdateDeliveryConfigurationResponse;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLogAnomalyDetector {
  export type Input = UpdateLogAnomalyDetectorRequest;
  export type Output = {};
  export type Error =
    | InvalidParameterException
    | OperationAbortedException
    | ResourceNotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}
