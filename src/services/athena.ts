import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface AmazonAthena {
  batchGetNamedQuery(
    input: BatchGetNamedQueryInput,
  ): Effect.Effect<
    BatchGetNamedQueryOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  batchGetPreparedStatement(
    input: BatchGetPreparedStatementInput,
  ): Effect.Effect<
    BatchGetPreparedStatementOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  batchGetQueryExecution(
    input: BatchGetQueryExecutionInput,
  ): Effect.Effect<
    BatchGetQueryExecutionOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  cancelCapacityReservation(
    input: CancelCapacityReservationInput,
  ): Effect.Effect<
    CancelCapacityReservationOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  createCapacityReservation(
    input: CreateCapacityReservationInput,
  ): Effect.Effect<
    CreateCapacityReservationOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  createDataCatalog(
    input: CreateDataCatalogInput,
  ): Effect.Effect<
    CreateDataCatalogOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  createNamedQuery(
    input: CreateNamedQueryInput,
  ): Effect.Effect<
    CreateNamedQueryOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  createNotebook(
    input: CreateNotebookInput,
  ): Effect.Effect<
    CreateNotebookOutput,
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError
  >;
  createPreparedStatement(
    input: CreatePreparedStatementInput,
  ): Effect.Effect<
    CreatePreparedStatementOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  createPresignedNotebookUrl(
    input: CreatePresignedNotebookUrlRequest,
  ): Effect.Effect<
    CreatePresignedNotebookUrlResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  createWorkGroup(
    input: CreateWorkGroupInput,
  ): Effect.Effect<
    CreateWorkGroupOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  deleteCapacityReservation(
    input: DeleteCapacityReservationInput,
  ): Effect.Effect<
    DeleteCapacityReservationOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  deleteDataCatalog(
    input: DeleteDataCatalogInput,
  ): Effect.Effect<
    DeleteDataCatalogOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  deleteNamedQuery(
    input: DeleteNamedQueryInput,
  ): Effect.Effect<
    DeleteNamedQueryOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  deleteNotebook(
    input: DeleteNotebookInput,
  ): Effect.Effect<
    DeleteNotebookOutput,
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError
  >;
  deletePreparedStatement(
    input: DeletePreparedStatementInput,
  ): Effect.Effect<
    DeletePreparedStatementOutput,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  deleteWorkGroup(
    input: DeleteWorkGroupInput,
  ): Effect.Effect<
    DeleteWorkGroupOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  exportNotebook(
    input: ExportNotebookInput,
  ): Effect.Effect<
    ExportNotebookOutput,
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getCalculationExecution(
    input: GetCalculationExecutionRequest,
  ): Effect.Effect<
    GetCalculationExecutionResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getCalculationExecutionCode(
    input: GetCalculationExecutionCodeRequest,
  ): Effect.Effect<
    GetCalculationExecutionCodeResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getCalculationExecutionStatus(
    input: GetCalculationExecutionStatusRequest,
  ): Effect.Effect<
    GetCalculationExecutionStatusResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getCapacityAssignmentConfiguration(
    input: GetCapacityAssignmentConfigurationInput,
  ): Effect.Effect<
    GetCapacityAssignmentConfigurationOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  getCapacityReservation(
    input: GetCapacityReservationInput,
  ): Effect.Effect<
    GetCapacityReservationOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  getDatabase(
    input: GetDatabaseInput,
  ): Effect.Effect<
    GetDatabaseOutput,
    | InternalServerException
    | InvalidRequestException
    | MetadataException
    | CommonAwsError
  >;
  getDataCatalog(
    input: GetDataCatalogInput,
  ): Effect.Effect<
    GetDataCatalogOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  getNamedQuery(
    input: GetNamedQueryInput,
  ): Effect.Effect<
    GetNamedQueryOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  getNotebookMetadata(
    input: GetNotebookMetadataInput,
  ): Effect.Effect<
    GetNotebookMetadataOutput,
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getPreparedStatement(
    input: GetPreparedStatementInput,
  ): Effect.Effect<
    GetPreparedStatementOutput,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getQueryExecution(
    input: GetQueryExecutionInput,
  ): Effect.Effect<
    GetQueryExecutionOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  getQueryResults(
    input: GetQueryResultsInput,
  ): Effect.Effect<
    GetQueryResultsOutput,
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError
  >;
  getQueryRuntimeStatistics(
    input: GetQueryRuntimeStatisticsInput,
  ): Effect.Effect<
    GetQueryRuntimeStatisticsOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  getSession(
    input: GetSessionRequest,
  ): Effect.Effect<
    GetSessionResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getSessionStatus(
    input: GetSessionStatusRequest,
  ): Effect.Effect<
    GetSessionStatusResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  getTableMetadata(
    input: GetTableMetadataInput,
  ): Effect.Effect<
    GetTableMetadataOutput,
    | InternalServerException
    | InvalidRequestException
    | MetadataException
    | CommonAwsError
  >;
  getWorkGroup(
    input: GetWorkGroupInput,
  ): Effect.Effect<
    GetWorkGroupOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  importNotebook(
    input: ImportNotebookInput,
  ): Effect.Effect<
    ImportNotebookOutput,
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listApplicationDPUSizes(
    input: ListApplicationDPUSizesInput,
  ): Effect.Effect<
    ListApplicationDPUSizesOutput,
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listCalculationExecutions(
    input: ListCalculationExecutionsRequest,
  ): Effect.Effect<
    ListCalculationExecutionsResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listCapacityReservations(
    input: ListCapacityReservationsInput,
  ): Effect.Effect<
    ListCapacityReservationsOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  listDatabases(
    input: ListDatabasesInput,
  ): Effect.Effect<
    ListDatabasesOutput,
    | InternalServerException
    | InvalidRequestException
    | MetadataException
    | CommonAwsError
  >;
  listDataCatalogs(
    input: ListDataCatalogsInput,
  ): Effect.Effect<
    ListDataCatalogsOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  listEngineVersions(
    input: ListEngineVersionsInput,
  ): Effect.Effect<
    ListEngineVersionsOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  listExecutors(
    input: ListExecutorsRequest,
  ): Effect.Effect<
    ListExecutorsResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listNamedQueries(
    input: ListNamedQueriesInput,
  ): Effect.Effect<
    ListNamedQueriesOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  listNotebookMetadata(
    input: ListNotebookMetadataInput,
  ): Effect.Effect<
    ListNotebookMetadataOutput,
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError
  >;
  listNotebookSessions(
    input: ListNotebookSessionsRequest,
  ): Effect.Effect<
    ListNotebookSessionsResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listPreparedStatements(
    input: ListPreparedStatementsInput,
  ): Effect.Effect<
    ListPreparedStatementsOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  listQueryExecutions(
    input: ListQueryExecutionsInput,
  ): Effect.Effect<
    ListQueryExecutionsOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  listSessions(
    input: ListSessionsRequest,
  ): Effect.Effect<
    ListSessionsResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listTableMetadata(
    input: ListTableMetadataInput,
  ): Effect.Effect<
    ListTableMetadataOutput,
    | InternalServerException
    | InvalidRequestException
    | MetadataException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  listWorkGroups(
    input: ListWorkGroupsInput,
  ): Effect.Effect<
    ListWorkGroupsOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  putCapacityAssignmentConfiguration(
    input: PutCapacityAssignmentConfigurationInput,
  ): Effect.Effect<
    PutCapacityAssignmentConfigurationOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  startCalculationExecution(
    input: StartCalculationExecutionRequest,
  ): Effect.Effect<
    StartCalculationExecutionResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  startQueryExecution(
    input: StartQueryExecutionInput,
  ): Effect.Effect<
    StartQueryExecutionOutput,
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError
  >;
  startSession(
    input: StartSessionRequest,
  ): Effect.Effect<
    StartSessionResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | SessionAlreadyExistsException
    | TooManyRequestsException
    | CommonAwsError
  >;
  stopCalculationExecution(
    input: StopCalculationExecutionRequest,
  ): Effect.Effect<
    StopCalculationExecutionResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  stopQueryExecution(
    input: StopQueryExecutionInput,
  ): Effect.Effect<
    StopQueryExecutionOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  terminateSession(
    input: TerminateSessionRequest,
  ): Effect.Effect<
    TerminateSessionResponse,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateCapacityReservation(
    input: UpdateCapacityReservationInput,
  ): Effect.Effect<
    UpdateCapacityReservationOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  updateDataCatalog(
    input: UpdateDataCatalogInput,
  ): Effect.Effect<
    UpdateDataCatalogOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  updateNamedQuery(
    input: UpdateNamedQueryInput,
  ): Effect.Effect<
    UpdateNamedQueryOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
  updateNotebook(
    input: UpdateNotebookInput,
  ): Effect.Effect<
    UpdateNotebookOutput,
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updateNotebookMetadata(
    input: UpdateNotebookMetadataInput,
  ): Effect.Effect<
    UpdateNotebookMetadataOutput,
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError
  >;
  updatePreparedStatement(
    input: UpdatePreparedStatementInput,
  ): Effect.Effect<
    UpdatePreparedStatementOutput,
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError
  >;
  updateWorkGroup(
    input: UpdateWorkGroupInput,
  ): Effect.Effect<
    UpdateWorkGroupOutput,
    InternalServerException | InvalidRequestException | CommonAwsError
  >;
}

export type Athena = AmazonAthena;

export interface AclConfiguration {
  S3AclOption: S3AclOption;
}
export type Age = number;

export type AllocatedDpusInteger = number;

export type AmazonResourceName = string;

export interface ApplicationDPUSizes {
  ApplicationRuntimeId?: string;
  SupportedDPUSizes?: Array<number>;
}
export type ApplicationDPUSizesList = Array<ApplicationDPUSizes>;
export interface AthenaError {
  ErrorCategory?: number;
  ErrorType?: number;
  Retryable?: boolean;
  ErrorMessage?: string;
}
export type AuthenticationType = "DIRECTORY_IDENTITY";
export type AuthToken = string;

export type AwsAccountId = string;

export interface BatchGetNamedQueryInput {
  NamedQueryIds: Array<string>;
}
export interface BatchGetNamedQueryOutput {
  NamedQueries?: Array<NamedQuery>;
  UnprocessedNamedQueryIds?: Array<UnprocessedNamedQueryId>;
}
export interface BatchGetPreparedStatementInput {
  PreparedStatementNames: Array<string>;
  WorkGroup: string;
}
export interface BatchGetPreparedStatementOutput {
  PreparedStatements?: Array<PreparedStatement>;
  UnprocessedPreparedStatementNames?: Array<UnprocessedPreparedStatementName>;
}
export interface BatchGetQueryExecutionInput {
  QueryExecutionIds: Array<string>;
}
export interface BatchGetQueryExecutionOutput {
  QueryExecutions?: Array<QueryExecution>;
  UnprocessedQueryExecutionIds?: Array<UnprocessedQueryExecutionId>;
}
export type BoxedBoolean = boolean;

export type BytesScannedCutoffValue = number;

export interface CalculationConfiguration {
  CodeBlock?: string;
}
export type CalculationExecutionId = string;

export type CalculationExecutionState =
  | "CREATING"
  | "CREATED"
  | "QUEUED"
  | "RUNNING"
  | "CANCELING"
  | "CANCELED"
  | "COMPLETED"
  | "FAILED";
export interface CalculationResult {
  StdOutS3Uri?: string;
  StdErrorS3Uri?: string;
  ResultS3Uri?: string;
  ResultType?: string;
}
export type CalculationResultType = string;

export type CalculationsList = Array<CalculationSummary>;
export interface CalculationStatistics {
  DpuExecutionInMillis?: number;
  Progress?: string;
}
export interface CalculationStatus {
  SubmissionDateTime?: Date | string;
  CompletionDateTime?: Date | string;
  State?: CalculationExecutionState;
  StateChangeReason?: string;
}
export interface CalculationSummary {
  CalculationExecutionId?: string;
  Description?: string;
  Status?: CalculationStatus;
}
export interface CancelCapacityReservationInput {
  Name: string;
}
export interface CancelCapacityReservationOutput {}
export interface CapacityAllocation {
  Status: CapacityAllocationStatus;
  StatusMessage?: string;
  RequestTime: Date | string;
  RequestCompletionTime?: Date | string;
}
export type CapacityAllocationStatus = "PENDING" | "SUCCEEDED" | "FAILED";
export interface CapacityAssignment {
  WorkGroupNames?: Array<string>;
}
export interface CapacityAssignmentConfiguration {
  CapacityReservationName?: string;
  CapacityAssignments?: Array<CapacityAssignment>;
}
export type CapacityAssignmentsList = Array<CapacityAssignment>;
export interface CapacityReservation {
  Name: string;
  Status: CapacityReservationStatus;
  TargetDpus: number;
  AllocatedDpus: number;
  LastAllocation?: CapacityAllocation;
  LastSuccessfulAllocationTime?: Date | string;
  CreationTime: Date | string;
}
export type CapacityReservationName = string;

export type CapacityReservationsList = Array<CapacityReservation>;
export type CapacityReservationStatus =
  | "PENDING"
  | "ACTIVE"
  | "CANCELLING"
  | "CANCELLED"
  | "FAILED"
  | "UPDATE_PENDING";
export type CatalogNameString = string;

export type ClientRequestToken = string;

export type CodeBlock = string;

export interface Column {
  Name: string;
  Type?: string;
  Comment?: string;
}
export interface ColumnInfo {
  CatalogName?: string;
  SchemaName?: string;
  TableName?: string;
  Name: string;
  Label?: string;
  Type: string;
  Precision?: number;
  Scale?: number;
  Nullable?: ColumnNullable;
  CaseSensitive?: boolean;
}
export type ColumnInfoList = Array<ColumnInfo>;
export type ColumnList = Array<Column>;
export type ColumnNullable = "NOT_NULL" | "NULLABLE" | "UNKNOWN";
export type CommentString = string;

export type ConnectionType =
  | "DYNAMODB"
  | "MYSQL"
  | "POSTGRESQL"
  | "REDSHIFT"
  | "ORACLE"
  | "SYNAPSE"
  | "SQLSERVER"
  | "DB2"
  | "OPENSEARCH"
  | "BIGQUERY"
  | "GOOGLECLOUDSTORAGE"
  | "HBASE"
  | "DOCUMENTDB"
  | "CMDB"
  | "TPCDS"
  | "TIMESTREAM"
  | "SAPHANA"
  | "SNOWFLAKE"
  | "DATALAKEGEN2"
  | "DB2AS400";
export type CoordinatorDpuSize = number;

export interface CreateCapacityReservationInput {
  TargetDpus: number;
  Name: string;
  Tags?: Array<Tag>;
}
export interface CreateCapacityReservationOutput {}
export interface CreateDataCatalogInput {
  Name: string;
  Type: DataCatalogType;
  Description?: string;
  Parameters?: Record<string, string>;
  Tags?: Array<Tag>;
}
export interface CreateDataCatalogOutput {
  DataCatalog?: DataCatalog;
}
export interface CreateNamedQueryInput {
  Name: string;
  Description?: string;
  Database: string;
  QueryString: string;
  ClientRequestToken?: string;
  WorkGroup?: string;
}
export interface CreateNamedQueryOutput {
  NamedQueryId?: string;
}
export interface CreateNotebookInput {
  WorkGroup: string;
  Name: string;
  ClientRequestToken?: string;
}
export interface CreateNotebookOutput {
  NotebookId?: string;
}
export interface CreatePreparedStatementInput {
  StatementName: string;
  WorkGroup: string;
  QueryStatement: string;
  Description?: string;
}
export interface CreatePreparedStatementOutput {}
export interface CreatePresignedNotebookUrlRequest {
  SessionId: string;
}
export interface CreatePresignedNotebookUrlResponse {
  NotebookUrl: string;
  AuthToken: string;
  AuthTokenExpirationTime: number;
}
export interface CreateWorkGroupInput {
  Name: string;
  Configuration?: WorkGroupConfiguration;
  Description?: string;
  Tags?: Array<Tag>;
}
export interface CreateWorkGroupOutput {}
export interface CustomerContentEncryptionConfiguration {
  KmsKey: string;
}
export interface Database {
  Name: string;
  Description?: string;
  Parameters?: Record<string, string>;
}
export type DatabaseList = Array<Database>;
export type DatabaseString = string;

export interface DataCatalog {
  Name: string;
  Description?: string;
  Type: DataCatalogType;
  Parameters?: Record<string, string>;
  Status?: DataCatalogStatus;
  ConnectionType?: ConnectionType;
  Error?: string;
}
export type DataCatalogStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_COMPLETE"
  | "CREATE_FAILED"
  | "CREATE_FAILED_CLEANUP_IN_PROGRESS"
  | "CREATE_FAILED_CLEANUP_COMPLETE"
  | "CREATE_FAILED_CLEANUP_FAILED"
  | "DELETE_IN_PROGRESS"
  | "DELETE_COMPLETE"
  | "DELETE_FAILED";
export interface DataCatalogSummary {
  CatalogName?: string;
  Type?: DataCatalogType;
  Status?: DataCatalogStatus;
  ConnectionType?: ConnectionType;
  Error?: string;
}
export type DataCatalogSummaryList = Array<DataCatalogSummary>;
export type DataCatalogType = "LAMBDA" | "GLUE" | "HIVE" | "FEDERATED";
export interface Datum {
  VarCharValue?: string;
}
export type datumList = Array<Datum>;
export type datumString = string;

export type DefaultExecutorDpuSize = number;

export interface DeleteCapacityReservationInput {
  Name: string;
}
export interface DeleteCapacityReservationOutput {}
export interface DeleteDataCatalogInput {
  Name: string;
  DeleteCatalogOnly?: boolean;
}
export interface DeleteDataCatalogOutput {
  DataCatalog?: DataCatalog;
}
export interface DeleteNamedQueryInput {
  NamedQueryId: string;
}
export interface DeleteNamedQueryOutput {}
export interface DeleteNotebookInput {
  NotebookId: string;
}
export interface DeleteNotebookOutput {}
export interface DeletePreparedStatementInput {
  StatementName: string;
  WorkGroup: string;
}
export interface DeletePreparedStatementOutput {}
export interface DeleteWorkGroupInput {
  WorkGroup: string;
  RecursiveDeleteOption?: boolean;
}
export interface DeleteWorkGroupOutput {}
export type DescriptionString = string;

export interface EncryptionConfiguration {
  EncryptionOption: EncryptionOption;
  KmsKey?: string;
}
export type EncryptionOption = "SSE_S3" | "SSE_KMS" | "CSE_KMS";
export interface EngineConfiguration {
  CoordinatorDpuSize?: number;
  MaxConcurrentDpus: number;
  DefaultExecutorDpuSize?: number;
  AdditionalConfigs?: Record<string, string>;
  SparkProperties?: Record<string, string>;
}
export interface EngineVersion {
  SelectedEngineVersion?: string;
  EffectiveEngineVersion?: string;
}
export type EngineVersionsList = Array<EngineVersion>;
export type ErrorCategory = number;

export type ErrorCode = string;

export type ErrorMessage = string;

export type ErrorType = number;

export type ExecutionParameter = string;

export type ExecutionParameters = Array<string>;
export type ExecutorId = string;

export interface ExecutorsSummary {
  ExecutorId: string;
  ExecutorType?: ExecutorType;
  StartDateTime?: number;
  TerminationDateTime?: number;
  ExecutorState?: ExecutorState;
  ExecutorSize?: number;
}
export type ExecutorsSummaryList = Array<ExecutorsSummary>;
export type ExecutorState =
  | "CREATING"
  | "CREATED"
  | "REGISTERED"
  | "TERMINATING"
  | "TERMINATED"
  | "FAILED";
export type ExecutorType = "COORDINATOR" | "GATEWAY" | "WORKER";
export interface ExportNotebookInput {
  NotebookId: string;
}
export interface ExportNotebookOutput {
  NotebookMetadata?: NotebookMetadata;
  Payload?: string;
}
export type ExpressionString = string;

export interface FilterDefinition {
  Name?: string;
}
export interface GetCalculationExecutionCodeRequest {
  CalculationExecutionId: string;
}
export interface GetCalculationExecutionCodeResponse {
  CodeBlock?: string;
}
export interface GetCalculationExecutionRequest {
  CalculationExecutionId: string;
}
export interface GetCalculationExecutionResponse {
  CalculationExecutionId?: string;
  SessionId?: string;
  Description?: string;
  WorkingDirectory?: string;
  Status?: CalculationStatus;
  Statistics?: CalculationStatistics;
  Result?: CalculationResult;
}
export interface GetCalculationExecutionStatusRequest {
  CalculationExecutionId: string;
}
export interface GetCalculationExecutionStatusResponse {
  Status?: CalculationStatus;
  Statistics?: CalculationStatistics;
}
export interface GetCapacityAssignmentConfigurationInput {
  CapacityReservationName: string;
}
export interface GetCapacityAssignmentConfigurationOutput {
  CapacityAssignmentConfiguration: CapacityAssignmentConfiguration;
}
export interface GetCapacityReservationInput {
  Name: string;
}
export interface GetCapacityReservationOutput {
  CapacityReservation: CapacityReservation;
}
export interface GetDatabaseInput {
  CatalogName: string;
  DatabaseName: string;
  WorkGroup?: string;
}
export interface GetDatabaseOutput {
  Database?: Database;
}
export interface GetDataCatalogInput {
  Name: string;
  WorkGroup?: string;
}
export interface GetDataCatalogOutput {
  DataCatalog?: DataCatalog;
}
export interface GetNamedQueryInput {
  NamedQueryId: string;
}
export interface GetNamedQueryOutput {
  NamedQuery?: NamedQuery;
}
export interface GetNotebookMetadataInput {
  NotebookId: string;
}
export interface GetNotebookMetadataOutput {
  NotebookMetadata?: NotebookMetadata;
}
export interface GetPreparedStatementInput {
  StatementName: string;
  WorkGroup: string;
}
export interface GetPreparedStatementOutput {
  PreparedStatement?: PreparedStatement;
}
export interface GetQueryExecutionInput {
  QueryExecutionId: string;
}
export interface GetQueryExecutionOutput {
  QueryExecution?: QueryExecution;
}
export interface GetQueryResultsInput {
  QueryExecutionId: string;
  NextToken?: string;
  MaxResults?: number;
  QueryResultType?: QueryResultType;
}
export interface GetQueryResultsOutput {
  UpdateCount?: number;
  ResultSet?: ResultSet;
  NextToken?: string;
}
export interface GetQueryRuntimeStatisticsInput {
  QueryExecutionId: string;
}
export interface GetQueryRuntimeStatisticsOutput {
  QueryRuntimeStatistics?: QueryRuntimeStatistics;
}
export interface GetSessionRequest {
  SessionId: string;
}
export interface GetSessionResponse {
  SessionId?: string;
  Description?: string;
  WorkGroup?: string;
  EngineVersion?: string;
  EngineConfiguration?: EngineConfiguration;
  NotebookVersion?: string;
  SessionConfiguration?: SessionConfiguration;
  Status?: SessionStatus;
  Statistics?: SessionStatistics;
}
export interface GetSessionStatusRequest {
  SessionId: string;
}
export interface GetSessionStatusResponse {
  SessionId?: string;
  Status?: SessionStatus;
}
export interface GetTableMetadataInput {
  CatalogName: string;
  DatabaseName: string;
  TableName: string;
  WorkGroup?: string;
}
export interface GetTableMetadataOutput {
  TableMetadata?: TableMetadata;
}
export interface GetWorkGroupInput {
  WorkGroup: string;
}
export interface GetWorkGroupOutput {
  WorkGroup?: WorkGroup;
}
export type IdempotencyToken = string;

export type IdentityCenterApplicationArn = string;

export interface IdentityCenterConfiguration {
  EnableIdentityCenter?: boolean;
  IdentityCenterInstanceArn?: string;
}
export type IdentityCenterInstanceArn = string;

export interface ImportNotebookInput {
  WorkGroup: string;
  Name: string;
  Payload?: string;
  Type: NotebookType;
  NotebookS3LocationUri?: string;
  ClientRequestToken?: string;
}
export interface ImportNotebookOutput {
  NotebookId?: string;
}
export type Integer = number;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export declare class InvalidRequestException extends EffectData.TaggedError(
  "InvalidRequestException",
)<{
  readonly AthenaErrorCode?: string;
  readonly Message?: string;
}> {}
export type KeyString = string;

export type KmsKey = string;

export interface ListApplicationDPUSizesInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListApplicationDPUSizesOutput {
  ApplicationDPUSizes?: Array<ApplicationDPUSizes>;
  NextToken?: string;
}
export interface ListCalculationExecutionsRequest {
  SessionId: string;
  StateFilter?: CalculationExecutionState;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListCalculationExecutionsResponse {
  NextToken?: string;
  Calculations?: Array<CalculationSummary>;
}
export interface ListCapacityReservationsInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListCapacityReservationsOutput {
  NextToken?: string;
  CapacityReservations: Array<CapacityReservation>;
}
export interface ListDatabasesInput {
  CatalogName: string;
  NextToken?: string;
  MaxResults?: number;
  WorkGroup?: string;
}
export interface ListDatabasesOutput {
  DatabaseList?: Array<Database>;
  NextToken?: string;
}
export interface ListDataCatalogsInput {
  NextToken?: string;
  MaxResults?: number;
  WorkGroup?: string;
}
export interface ListDataCatalogsOutput {
  DataCatalogsSummary?: Array<DataCatalogSummary>;
  NextToken?: string;
}
export interface ListEngineVersionsInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEngineVersionsOutput {
  EngineVersions?: Array<EngineVersion>;
  NextToken?: string;
}
export interface ListExecutorsRequest {
  SessionId: string;
  ExecutorStateFilter?: ExecutorState;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListExecutorsResponse {
  SessionId: string;
  NextToken?: string;
  ExecutorsSummary?: Array<ExecutorsSummary>;
}
export interface ListNamedQueriesInput {
  NextToken?: string;
  MaxResults?: number;
  WorkGroup?: string;
}
export interface ListNamedQueriesOutput {
  NamedQueryIds?: Array<string>;
  NextToken?: string;
}
export interface ListNotebookMetadataInput {
  Filters?: FilterDefinition;
  NextToken?: string;
  MaxResults?: number;
  WorkGroup: string;
}
export interface ListNotebookMetadataOutput {
  NextToken?: string;
  NotebookMetadataList?: Array<NotebookMetadata>;
}
export interface ListNotebookSessionsRequest {
  NotebookId: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListNotebookSessionsResponse {
  NotebookSessionsList: Array<NotebookSessionSummary>;
  NextToken?: string;
}
export interface ListPreparedStatementsInput {
  WorkGroup: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListPreparedStatementsOutput {
  PreparedStatements?: Array<PreparedStatementSummary>;
  NextToken?: string;
}
export interface ListQueryExecutionsInput {
  NextToken?: string;
  MaxResults?: number;
  WorkGroup?: string;
}
export interface ListQueryExecutionsOutput {
  QueryExecutionIds?: Array<string>;
  NextToken?: string;
}
export interface ListSessionsRequest {
  WorkGroup: string;
  StateFilter?: SessionState;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSessionsResponse {
  NextToken?: string;
  Sessions?: Array<SessionSummary>;
}
export interface ListTableMetadataInput {
  CatalogName: string;
  DatabaseName: string;
  Expression?: string;
  NextToken?: string;
  MaxResults?: number;
  WorkGroup?: string;
}
export interface ListTableMetadataOutput {
  TableMetadataList?: Array<TableMetadata>;
  NextToken?: string;
}
export interface ListTagsForResourceInput {
  ResourceARN: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ListTagsForResourceOutput {
  Tags?: Array<Tag>;
  NextToken?: string;
}
export interface ListWorkGroupsInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListWorkGroupsOutput {
  WorkGroups?: Array<WorkGroupSummary>;
  NextToken?: string;
}
export type Long = number;

export interface ManagedQueryResultsConfiguration {
  Enabled: boolean;
  EncryptionConfiguration?: ManagedQueryResultsEncryptionConfiguration;
}
export interface ManagedQueryResultsConfigurationUpdates {
  Enabled?: boolean;
  EncryptionConfiguration?: ManagedQueryResultsEncryptionConfiguration;
  RemoveEncryptionConfiguration?: boolean;
}
export interface ManagedQueryResultsEncryptionConfiguration {
  KmsKey: string;
}
export type MaxApplicationDPUSizesCount = number;

export type MaxCalculationsCount = number;

export type MaxCapacityReservationsCount = number;

export type MaxConcurrentDpus = number;

export type MaxDatabasesCount = number;

export type MaxDataCatalogsCount = number;

export type MaxEngineVersionsCount = number;

export type MaxListExecutorsCount = number;

export type MaxNamedQueriesCount = number;

export type MaxNotebooksCount = number;

export type MaxPreparedStatementsCount = number;

export type MaxQueryExecutionsCount = number;

export type MaxQueryResults = number;

export type MaxSessionsCount = number;

export type MaxTableMetadataCount = number;

export type MaxTagsCount = number;

export type MaxWorkGroupsCount = number;

export declare class MetadataException extends EffectData.TaggedError(
  "MetadataException",
)<{
  readonly Message?: string;
}> {}
export interface NamedQuery {
  Name: string;
  Description?: string;
  Database: string;
  QueryString: string;
  NamedQueryId?: string;
  WorkGroup?: string;
}
export type NamedQueryDescriptionString = string;

export type NamedQueryId = string;

export type NamedQueryIdList = Array<string>;
export type NamedQueryList = Array<NamedQuery>;
export type NameString = string;

export type NotebookId = string;

export interface NotebookMetadata {
  NotebookId?: string;
  Name?: string;
  WorkGroup?: string;
  CreationTime?: Date | string;
  Type?: NotebookType;
  LastModifiedTime?: Date | string;
}
export type NotebookMetadataArray = Array<NotebookMetadata>;
export type NotebookName = string;

export type NotebookSessionsList = Array<NotebookSessionSummary>;
export interface NotebookSessionSummary {
  SessionId?: string;
  CreationTime?: Date | string;
}
export type NotebookType = "IPYNB";
export type ParametersMap = Record<string, string>;
export type ParametersMapValue = string;

export type Payload = string;

export interface PreparedStatement {
  StatementName?: string;
  QueryStatement?: string;
  WorkGroupName?: string;
  Description?: string;
  LastModifiedTime?: Date | string;
}
export type PreparedStatementDetailsList = Array<PreparedStatement>;
export type PreparedStatementNameList = Array<string>;
export type PreparedStatementsList = Array<PreparedStatementSummary>;
export interface PreparedStatementSummary {
  StatementName?: string;
  LastModifiedTime?: Date | string;
}
export interface PutCapacityAssignmentConfigurationInput {
  CapacityReservationName: string;
  CapacityAssignments: Array<CapacityAssignment>;
}
export interface PutCapacityAssignmentConfigurationOutput {}
export interface QueryExecution {
  QueryExecutionId?: string;
  Query?: string;
  StatementType?: StatementType;
  ManagedQueryResultsConfiguration?: ManagedQueryResultsConfiguration;
  ResultConfiguration?: ResultConfiguration;
  ResultReuseConfiguration?: ResultReuseConfiguration;
  QueryExecutionContext?: QueryExecutionContext;
  Status?: QueryExecutionStatus;
  Statistics?: QueryExecutionStatistics;
  WorkGroup?: string;
  EngineVersion?: EngineVersion;
  ExecutionParameters?: Array<string>;
  SubstatementType?: string;
  QueryResultsS3AccessGrantsConfiguration?: QueryResultsS3AccessGrantsConfiguration;
}
export interface QueryExecutionContext {
  Database?: string;
  Catalog?: string;
}
export type QueryExecutionId = string;

export type QueryExecutionIdList = Array<string>;
export type QueryExecutionList = Array<QueryExecution>;
export type QueryExecutionState =
  | "QUEUED"
  | "RUNNING"
  | "SUCCEEDED"
  | "FAILED"
  | "CANCELLED";
export interface QueryExecutionStatistics {
  EngineExecutionTimeInMillis?: number;
  DataScannedInBytes?: number;
  DataManifestLocation?: string;
  TotalExecutionTimeInMillis?: number;
  QueryQueueTimeInMillis?: number;
  ServicePreProcessingTimeInMillis?: number;
  QueryPlanningTimeInMillis?: number;
  ServiceProcessingTimeInMillis?: number;
  ResultReuseInformation?: ResultReuseInformation;
}
export interface QueryExecutionStatus {
  State?: QueryExecutionState;
  StateChangeReason?: string;
  SubmissionDateTime?: Date | string;
  CompletionDateTime?: Date | string;
  AthenaError?: AthenaError;
}
export interface QueryResultsS3AccessGrantsConfiguration {
  EnableS3AccessGrants: boolean;
  CreateUserLevelPrefix?: boolean;
  AuthenticationType: AuthenticationType;
}
export type QueryResultType = "DATA_MANIFEST" | "DATA_ROWS";
export interface QueryRuntimeStatistics {
  Timeline?: QueryRuntimeStatisticsTimeline;
  Rows?: QueryRuntimeStatisticsRows;
  OutputStage?: QueryStage;
}
export interface QueryRuntimeStatisticsRows {
  InputRows?: number;
  InputBytes?: number;
  OutputBytes?: number;
  OutputRows?: number;
}
export interface QueryRuntimeStatisticsTimeline {
  QueryQueueTimeInMillis?: number;
  ServicePreProcessingTimeInMillis?: number;
  QueryPlanningTimeInMillis?: number;
  EngineExecutionTimeInMillis?: number;
  ServiceProcessingTimeInMillis?: number;
  TotalExecutionTimeInMillis?: number;
}
export interface QueryStage {
  StageId?: number;
  State?: string;
  OutputBytes?: number;
  OutputRows?: number;
  InputBytes?: number;
  InputRows?: number;
  ExecutionTime?: number;
  QueryStagePlan?: QueryStagePlanNode;
  SubStages?: Array<QueryStage>;
}
export interface QueryStagePlanNode {
  Name?: string;
  Identifier?: string;
  Children?: Array<QueryStagePlanNode>;
  RemoteSources?: Array<string>;
}
export type QueryStagePlanNodes = Array<QueryStagePlanNode>;
export type QueryStages = Array<QueryStage>;
export type QueryString = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
  readonly ResourceName?: string;
}> {}
export interface ResultConfiguration {
  OutputLocation?: string;
  EncryptionConfiguration?: EncryptionConfiguration;
  ExpectedBucketOwner?: string;
  AclConfiguration?: AclConfiguration;
}
export interface ResultConfigurationUpdates {
  OutputLocation?: string;
  RemoveOutputLocation?: boolean;
  EncryptionConfiguration?: EncryptionConfiguration;
  RemoveEncryptionConfiguration?: boolean;
  ExpectedBucketOwner?: string;
  RemoveExpectedBucketOwner?: boolean;
  AclConfiguration?: AclConfiguration;
  RemoveAclConfiguration?: boolean;
}
export type ResultOutputLocation = string;

export interface ResultReuseByAgeConfiguration {
  Enabled: boolean;
  MaxAgeInMinutes?: number;
}
export interface ResultReuseConfiguration {
  ResultReuseByAgeConfiguration?: ResultReuseByAgeConfiguration;
}
export interface ResultReuseInformation {
  ReusedPreviousResult: boolean;
}
export interface ResultSet {
  Rows?: Array<Row>;
  ResultSetMetadata?: ResultSetMetadata;
}
export interface ResultSetMetadata {
  ColumnInfo?: Array<ColumnInfo>;
}
export type RoleArn = string;

export interface Row {
  Data?: Array<Datum>;
}
export type RowList = Array<Row>;
export type S3AclOption = "BUCKET_OWNER_FULL_CONTROL";
export type S3Uri = string;

export declare class SessionAlreadyExistsException extends EffectData.TaggedError(
  "SessionAlreadyExistsException",
)<{
  readonly Message?: string;
}> {}
export interface SessionConfiguration {
  ExecutionRole?: string;
  WorkingDirectory?: string;
  IdleTimeoutSeconds?: number;
  EncryptionConfiguration?: EncryptionConfiguration;
}
export type SessionId = string;

export type SessionIdleTimeoutInMinutes = number;

export type SessionManagerToken = string;

export type SessionsList = Array<SessionSummary>;
export type SessionState =
  | "CREATING"
  | "CREATED"
  | "IDLE"
  | "BUSY"
  | "TERMINATING"
  | "TERMINATED"
  | "DEGRADED"
  | "FAILED";
export interface SessionStatistics {
  DpuExecutionInMillis?: number;
}
export interface SessionStatus {
  StartDateTime?: Date | string;
  LastModifiedDateTime?: Date | string;
  EndDateTime?: Date | string;
  IdleSinceDateTime?: Date | string;
  State?: SessionState;
  StateChangeReason?: string;
}
export interface SessionSummary {
  SessionId?: string;
  Description?: string;
  EngineVersion?: EngineVersion;
  NotebookVersion?: string;
  Status?: SessionStatus;
}
export interface StartCalculationExecutionRequest {
  SessionId: string;
  Description?: string;
  CalculationConfiguration?: CalculationConfiguration;
  CodeBlock?: string;
  ClientRequestToken?: string;
}
export interface StartCalculationExecutionResponse {
  CalculationExecutionId?: string;
  State?: CalculationExecutionState;
}
export interface StartQueryExecutionInput {
  QueryString: string;
  ClientRequestToken?: string;
  QueryExecutionContext?: QueryExecutionContext;
  ResultConfiguration?: ResultConfiguration;
  WorkGroup?: string;
  ExecutionParameters?: Array<string>;
  ResultReuseConfiguration?: ResultReuseConfiguration;
}
export interface StartQueryExecutionOutput {
  QueryExecutionId?: string;
}
export interface StartSessionRequest {
  Description?: string;
  WorkGroup: string;
  EngineConfiguration: EngineConfiguration;
  NotebookVersion?: string;
  SessionIdleTimeoutInMinutes?: number;
  ClientRequestToken?: string;
}
export interface StartSessionResponse {
  SessionId?: string;
  State?: SessionState;
}
export type StatementName = string;

export type StatementType = "DDL" | "DML" | "UTILITY";
export interface StopCalculationExecutionRequest {
  CalculationExecutionId: string;
}
export interface StopCalculationExecutionResponse {
  State?: CalculationExecutionState;
}
export interface StopQueryExecutionInput {
  QueryExecutionId: string;
}
export interface StopQueryExecutionOutput {}
export type StringList = Array<string>;
export type SupportedDPUSizeList = Array<number>;
export interface TableMetadata {
  Name: string;
  CreateTime?: Date | string;
  LastAccessTime?: Date | string;
  TableType?: string;
  Columns?: Array<Column>;
  PartitionKeys?: Array<Column>;
  Parameters?: Record<string, string>;
}
export type TableMetadataList = Array<TableMetadata>;
export type TableTypeString = string;

export interface Tag {
  Key?: string;
  Value?: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceInput {
  ResourceARN: string;
  Tags: Array<Tag>;
}
export interface TagResourceOutput {}
export type TagValue = string;

export type TargetDpusInteger = number;

export interface TerminateSessionRequest {
  SessionId: string;
}
export interface TerminateSessionResponse {
  State?: SessionState;
}
export type ThrottleReason = "CONCURRENT_QUERY_LIMIT_EXCEEDED";
export type Timestamp = Date | string;

export type Token = string;

export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Message?: string;
  readonly Reason?: ThrottleReason;
}> {}
export type TypeString = string;

export interface UnprocessedNamedQueryId {
  NamedQueryId?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type UnprocessedNamedQueryIdList = Array<UnprocessedNamedQueryId>;
export interface UnprocessedPreparedStatementName {
  StatementName?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type UnprocessedPreparedStatementNameList =
  Array<UnprocessedPreparedStatementName>;
export interface UnprocessedQueryExecutionId {
  QueryExecutionId?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
export type UnprocessedQueryExecutionIdList =
  Array<UnprocessedQueryExecutionId>;
export interface UntagResourceInput {
  ResourceARN: string;
  TagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export interface UpdateCapacityReservationInput {
  TargetDpus: number;
  Name: string;
}
export interface UpdateCapacityReservationOutput {}
export interface UpdateDataCatalogInput {
  Name: string;
  Type: DataCatalogType;
  Description?: string;
  Parameters?: Record<string, string>;
}
export interface UpdateDataCatalogOutput {}
export interface UpdateNamedQueryInput {
  NamedQueryId: string;
  Name: string;
  Description?: string;
  QueryString: string;
}
export interface UpdateNamedQueryOutput {}
export interface UpdateNotebookInput {
  NotebookId: string;
  Payload: string;
  Type: NotebookType;
  SessionId?: string;
  ClientRequestToken?: string;
}
export interface UpdateNotebookMetadataInput {
  NotebookId: string;
  ClientRequestToken?: string;
  Name: string;
}
export interface UpdateNotebookMetadataOutput {}
export interface UpdateNotebookOutput {}
export interface UpdatePreparedStatementInput {
  StatementName: string;
  WorkGroup: string;
  QueryStatement: string;
  Description?: string;
}
export interface UpdatePreparedStatementOutput {}
export interface UpdateWorkGroupInput {
  WorkGroup: string;
  Description?: string;
  ConfigurationUpdates?: WorkGroupConfigurationUpdates;
  State?: WorkGroupState;
}
export interface UpdateWorkGroupOutput {}
export interface WorkGroup {
  Name: string;
  State?: WorkGroupState;
  Configuration?: WorkGroupConfiguration;
  Description?: string;
  CreationTime?: Date | string;
  IdentityCenterApplicationArn?: string;
}
export interface WorkGroupConfiguration {
  ResultConfiguration?: ResultConfiguration;
  ManagedQueryResultsConfiguration?: ManagedQueryResultsConfiguration;
  EnforceWorkGroupConfiguration?: boolean;
  PublishCloudWatchMetricsEnabled?: boolean;
  BytesScannedCutoffPerQuery?: number;
  RequesterPaysEnabled?: boolean;
  EngineVersion?: EngineVersion;
  AdditionalConfiguration?: string;
  ExecutionRole?: string;
  CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration;
  EnableMinimumEncryptionConfiguration?: boolean;
  IdentityCenterConfiguration?: IdentityCenterConfiguration;
  QueryResultsS3AccessGrantsConfiguration?: QueryResultsS3AccessGrantsConfiguration;
}
export interface WorkGroupConfigurationUpdates {
  EnforceWorkGroupConfiguration?: boolean;
  ResultConfigurationUpdates?: ResultConfigurationUpdates;
  ManagedQueryResultsConfigurationUpdates?: ManagedQueryResultsConfigurationUpdates;
  PublishCloudWatchMetricsEnabled?: boolean;
  BytesScannedCutoffPerQuery?: number;
  RemoveBytesScannedCutoffPerQuery?: boolean;
  RequesterPaysEnabled?: boolean;
  EngineVersion?: EngineVersion;
  RemoveCustomerContentEncryptionConfiguration?: boolean;
  AdditionalConfiguration?: string;
  ExecutionRole?: string;
  CustomerContentEncryptionConfiguration?: CustomerContentEncryptionConfiguration;
  EnableMinimumEncryptionConfiguration?: boolean;
  QueryResultsS3AccessGrantsConfiguration?: QueryResultsS3AccessGrantsConfiguration;
}
export type WorkGroupDescriptionString = string;

export type WorkGroupName = string;

export type WorkGroupNamesList = Array<string>;
export type WorkGroupsList = Array<WorkGroupSummary>;
export type WorkGroupState = "ENABLED" | "DISABLED";
export interface WorkGroupSummary {
  Name?: string;
  State?: WorkGroupState;
  Description?: string;
  CreationTime?: Date | string;
  EngineVersion?: EngineVersion;
  IdentityCenterApplicationArn?: string;
}
export declare namespace BatchGetNamedQuery {
  export type Input = BatchGetNamedQueryInput;
  export type Output = BatchGetNamedQueryOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace BatchGetPreparedStatement {
  export type Input = BatchGetPreparedStatementInput;
  export type Output = BatchGetPreparedStatementOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace BatchGetQueryExecution {
  export type Input = BatchGetQueryExecutionInput;
  export type Output = BatchGetQueryExecutionOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CancelCapacityReservation {
  export type Input = CancelCapacityReservationInput;
  export type Output = CancelCapacityReservationOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateCapacityReservation {
  export type Input = CreateCapacityReservationInput;
  export type Output = CreateCapacityReservationOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateDataCatalog {
  export type Input = CreateDataCatalogInput;
  export type Output = CreateDataCatalogOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateNamedQuery {
  export type Input = CreateNamedQueryInput;
  export type Output = CreateNamedQueryOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreateNotebook {
  export type Input = CreateNotebookInput;
  export type Output = CreateNotebookOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace CreatePreparedStatement {
  export type Input = CreatePreparedStatementInput;
  export type Output = CreatePreparedStatementOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace CreatePresignedNotebookUrl {
  export type Input = CreatePresignedNotebookUrlRequest;
  export type Output = CreatePresignedNotebookUrlResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace CreateWorkGroup {
  export type Input = CreateWorkGroupInput;
  export type Output = CreateWorkGroupOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DeleteCapacityReservation {
  export type Input = DeleteCapacityReservationInput;
  export type Output = DeleteCapacityReservationOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DeleteDataCatalog {
  export type Input = DeleteDataCatalogInput;
  export type Output = DeleteDataCatalogOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DeleteNamedQuery {
  export type Input = DeleteNamedQueryInput;
  export type Output = DeleteNamedQueryOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace DeleteNotebook {
  export type Input = DeleteNotebookInput;
  export type Output = DeleteNotebookOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace DeletePreparedStatement {
  export type Input = DeletePreparedStatementInput;
  export type Output = DeletePreparedStatementOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteWorkGroup {
  export type Input = DeleteWorkGroupInput;
  export type Output = DeleteWorkGroupOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ExportNotebook {
  export type Input = ExportNotebookInput;
  export type Output = ExportNotebookOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetCalculationExecution {
  export type Input = GetCalculationExecutionRequest;
  export type Output = GetCalculationExecutionResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetCalculationExecutionCode {
  export type Input = GetCalculationExecutionCodeRequest;
  export type Output = GetCalculationExecutionCodeResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetCalculationExecutionStatus {
  export type Input = GetCalculationExecutionStatusRequest;
  export type Output = GetCalculationExecutionStatusResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetCapacityAssignmentConfiguration {
  export type Input = GetCapacityAssignmentConfigurationInput;
  export type Output = GetCapacityAssignmentConfigurationOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace GetCapacityReservation {
  export type Input = GetCapacityReservationInput;
  export type Output = GetCapacityReservationOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace GetDatabase {
  export type Input = GetDatabaseInput;
  export type Output = GetDatabaseOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | MetadataException
    | CommonAwsError;
}

export declare namespace GetDataCatalog {
  export type Input = GetDataCatalogInput;
  export type Output = GetDataCatalogOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace GetNamedQuery {
  export type Input = GetNamedQueryInput;
  export type Output = GetNamedQueryOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace GetNotebookMetadata {
  export type Input = GetNotebookMetadataInput;
  export type Output = GetNotebookMetadataOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetPreparedStatement {
  export type Input = GetPreparedStatementInput;
  export type Output = GetPreparedStatementOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetQueryExecution {
  export type Input = GetQueryExecutionInput;
  export type Output = GetQueryExecutionOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace GetQueryResults {
  export type Input = GetQueryResultsInput;
  export type Output = GetQueryResultsOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace GetQueryRuntimeStatistics {
  export type Input = GetQueryRuntimeStatisticsInput;
  export type Output = GetQueryRuntimeStatisticsOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace GetSession {
  export type Input = GetSessionRequest;
  export type Output = GetSessionResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetSessionStatus {
  export type Input = GetSessionStatusRequest;
  export type Output = GetSessionStatusResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetTableMetadata {
  export type Input = GetTableMetadataInput;
  export type Output = GetTableMetadataOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | MetadataException
    | CommonAwsError;
}

export declare namespace GetWorkGroup {
  export type Input = GetWorkGroupInput;
  export type Output = GetWorkGroupOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ImportNotebook {
  export type Input = ImportNotebookInput;
  export type Output = ImportNotebookOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListApplicationDPUSizes {
  export type Input = ListApplicationDPUSizesInput;
  export type Output = ListApplicationDPUSizesOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListCalculationExecutions {
  export type Input = ListCalculationExecutionsRequest;
  export type Output = ListCalculationExecutionsResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListCapacityReservations {
  export type Input = ListCapacityReservationsInput;
  export type Output = ListCapacityReservationsOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListDatabases {
  export type Input = ListDatabasesInput;
  export type Output = ListDatabasesOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | MetadataException
    | CommonAwsError;
}

export declare namespace ListDataCatalogs {
  export type Input = ListDataCatalogsInput;
  export type Output = ListDataCatalogsOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListEngineVersions {
  export type Input = ListEngineVersionsInput;
  export type Output = ListEngineVersionsOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListExecutors {
  export type Input = ListExecutorsRequest;
  export type Output = ListExecutorsResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListNamedQueries {
  export type Input = ListNamedQueriesInput;
  export type Output = ListNamedQueriesOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListNotebookMetadata {
  export type Input = ListNotebookMetadataInput;
  export type Output = ListNotebookMetadataOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace ListNotebookSessions {
  export type Input = ListNotebookSessionsRequest;
  export type Output = ListNotebookSessionsResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListPreparedStatements {
  export type Input = ListPreparedStatementsInput;
  export type Output = ListPreparedStatementsOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListQueryExecutions {
  export type Input = ListQueryExecutionsInput;
  export type Output = ListQueryExecutionsOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace ListSessions {
  export type Input = ListSessionsRequest;
  export type Output = ListSessionsResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTableMetadata {
  export type Input = ListTableMetadataInput;
  export type Output = ListTableMetadataOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | MetadataException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListWorkGroups {
  export type Input = ListWorkGroupsInput;
  export type Output = ListWorkGroupsOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace PutCapacityAssignmentConfiguration {
  export type Input = PutCapacityAssignmentConfigurationInput;
  export type Output = PutCapacityAssignmentConfigurationOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace StartCalculationExecution {
  export type Input = StartCalculationExecutionRequest;
  export type Output = StartCalculationExecutionResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StartQueryExecution {
  export type Input = StartQueryExecutionInput;
  export type Output = StartQueryExecutionOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StartSession {
  export type Input = StartSessionRequest;
  export type Output = StartSessionResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | SessionAlreadyExistsException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace StopCalculationExecution {
  export type Input = StopCalculationExecutionRequest;
  export type Output = StopCalculationExecutionResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace StopQueryExecution {
  export type Input = StopQueryExecutionInput;
  export type Output = StopQueryExecutionOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TerminateSession {
  export type Input = TerminateSessionRequest;
  export type Output = TerminateSessionResponse;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateCapacityReservation {
  export type Input = UpdateCapacityReservationInput;
  export type Output = UpdateCapacityReservationOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UpdateDataCatalog {
  export type Input = UpdateDataCatalogInput;
  export type Output = UpdateDataCatalogOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UpdateNamedQuery {
  export type Input = UpdateNamedQueryInput;
  export type Output = UpdateNamedQueryOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}

export declare namespace UpdateNotebook {
  export type Input = UpdateNotebookInput;
  export type Output = UpdateNotebookOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdateNotebookMetadata {
  export type Input = UpdateNotebookMetadataInput;
  export type Output = UpdateNotebookMetadataOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | TooManyRequestsException
    | CommonAwsError;
}

export declare namespace UpdatePreparedStatement {
  export type Input = UpdatePreparedStatementInput;
  export type Output = UpdatePreparedStatementOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateWorkGroup {
  export type Input = UpdateWorkGroupInput;
  export type Output = UpdateWorkGroupOutput;
  export type Error =
    | InternalServerException
    | InvalidRequestException
    | CommonAwsError;
}
