import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "BackupSearch",
  serviceShapeName: "CryoBackupSearchService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "backup-search" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-05-10");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p, _) => {
  const { UseFIPS = false, Endpoint, Region } = p;
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
    return e(Endpoint);
  }
  if (Region != null) {
    {
      const PartitionResult = _.partition(Region);
      if (PartitionResult != null && PartitionResult !== false) {
        if (UseFIPS === true) {
          return e(
            `https://backup-search-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
          );
        }
        return e(
          `https://backup-search.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
        );
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
      serviceCode: S.String,
      quotaCode: S.String,
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export type GenericId = string;
export interface GetSearchJobInput {
  SearchJobIdentifier: string;
}
export interface SearchScopeSummary {
  TotalRecoveryPointsToScanCount?: number;
  TotalItemsToScanCount?: number;
}
export interface CurrentSearchProgress {
  RecoveryPointsScannedCount?: number;
  ItemsScannedCount?: number;
  ItemsMatchedCount?: number;
}
export type EncryptionKeyArn = string;
export type SearchJobState =
  | "RUNNING"
  | "COMPLETED"
  | "STOPPING"
  | "STOPPED"
  | "FAILED"
  | (string & {});
export type ResourceType = "S3" | "EBS" | (string & {});
export type ResourceTypeList = ResourceType[];
export interface BackupCreationTimeFilter {
  CreatedAfter?: Date;
  CreatedBefore?: Date;
}
export type ResourceArnList = string[];
export type RecoveryPoint = string;
export type RecoveryPointArnList = string[];
export type TagMap = { [key: string]: string | undefined };
export interface SearchScope {
  BackupResourceTypes: ResourceType[];
  BackupResourceCreationTime?: BackupCreationTimeFilter;
  SourceResourceArns?: string[];
  BackupResourceArns?: string[];
  BackupResourceTags?: { [key: string]: string | undefined };
}
export type StringConditionOperator =
  | "EQUALS_TO"
  | "NOT_EQUALS_TO"
  | "CONTAINS"
  | "DOES_NOT_CONTAIN"
  | "BEGINS_WITH"
  | "ENDS_WITH"
  | "DOES_NOT_BEGIN_WITH"
  | "DOES_NOT_END_WITH"
  | (string & {});
export interface StringCondition {
  Value: string;
  Operator?: StringConditionOperator;
}
export type StringConditionList = StringCondition[];
export type LongConditionOperator =
  | "EQUALS_TO"
  | "NOT_EQUALS_TO"
  | "LESS_THAN_EQUAL_TO"
  | "GREATER_THAN_EQUAL_TO"
  | (string & {});
export interface LongCondition {
  Value: number;
  Operator?: LongConditionOperator;
}
export type LongConditionList = LongCondition[];
export type TimeConditionOperator =
  | "EQUALS_TO"
  | "NOT_EQUALS_TO"
  | "LESS_THAN_EQUAL_TO"
  | "GREATER_THAN_EQUAL_TO"
  | (string & {});
export interface TimeCondition {
  Value: Date;
  Operator?: TimeConditionOperator;
}
export type TimeConditionList = TimeCondition[];
export interface S3ItemFilter {
  ObjectKeys?: StringCondition[];
  Sizes?: LongCondition[];
  CreationTimes?: TimeCondition[];
  VersionIds?: StringCondition[];
  ETags?: StringCondition[];
}
export type S3ItemFilters = S3ItemFilter[];
export interface EBSItemFilter {
  FilePaths?: StringCondition[];
  Sizes?: LongCondition[];
  CreationTimes?: TimeCondition[];
  LastModificationTimes?: TimeCondition[];
}
export type EBSItemFilters = EBSItemFilter[];
export interface ItemFilters {
  S3ItemFilters?: S3ItemFilter[];
  EBSItemFilters?: EBSItemFilter[];
}
export type SearchJobArn = string;
export interface GetSearchJobOutput {
  Name?: string;
  SearchScopeSummary?: SearchScopeSummary;
  CurrentSearchProgress?: CurrentSearchProgress;
  StatusMessage?: string;
  EncryptionKeyArn?: string;
  CompletionTime?: Date;
  Status: SearchJobState;
  SearchScope: SearchScope;
  ItemFilters: ItemFilters;
  CreationTime: Date;
  SearchJobIdentifier: string;
  SearchJobArn: string;
}
export interface GetSearchResultExportJobInput {
  ExportJobIdentifier: string;
}
export type ExportJobArn = string;
export type ExportJobStatus = "RUNNING" | "FAILED" | "COMPLETED" | (string & {});
export interface S3ExportSpecification {
  DestinationBucket: string;
  DestinationPrefix?: string;
}
export type ExportSpecification = { s3ExportSpecification: S3ExportSpecification };
export interface GetSearchResultExportJobOutput {
  ExportJobIdentifier: string;
  ExportJobArn?: string;
  Status?: ExportJobStatus;
  CreationTime?: Date;
  CompletionTime?: Date;
  StatusMessage?: string;
  ExportSpecification?: ExportSpecification;
  SearchJobArn?: string;
}
export interface ListSearchJobBackupsInput {
  SearchJobIdentifier: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface SearchJobBackupsResult {
  Status?: SearchJobState;
  StatusMessage?: string;
  ResourceType?: ResourceType;
  BackupResourceArn?: string;
  SourceResourceArn?: string;
  IndexCreationTime?: Date;
  BackupCreationTime?: Date;
}
export type SearchJobBackupsResults = SearchJobBackupsResult[];
export interface ListSearchJobBackupsOutput {
  Results: SearchJobBackupsResult[];
  NextToken?: string;
}
export interface ListSearchJobResultsInput {
  SearchJobIdentifier: string;
  NextToken?: string;
  MaxResults?: number;
}
export type ObjectKey = string | redacted.Redacted<string>;
export interface S3ResultItem {
  BackupResourceArn?: string;
  SourceResourceArn?: string;
  BackupVaultName?: string;
  ObjectKey?: string | redacted.Redacted<string>;
  ObjectSize?: number;
  CreationTime?: Date;
  ETag?: string;
  VersionId?: string;
}
export type FilePath = string | redacted.Redacted<string>;
export interface EBSResultItem {
  BackupResourceArn?: string;
  SourceResourceArn?: string;
  BackupVaultName?: string;
  FileSystemIdentifier?: string;
  FilePath?: string | redacted.Redacted<string>;
  FileSize?: number;
  CreationTime?: Date;
  LastModifiedTime?: Date;
}
export type ResultItem =
  | { S3ResultItem: S3ResultItem; EBSResultItem?: never }
  | { S3ResultItem?: never; EBSResultItem: EBSResultItem };
export type Results = ResultItem[];
export interface ListSearchJobResultsOutput {
  Results: ResultItem[];
  NextToken?: string;
}
export interface ListSearchJobsInput {
  ByStatus?: SearchJobState;
  NextToken?: string;
  MaxResults?: number;
}
export interface SearchJobSummary {
  SearchJobIdentifier?: string;
  SearchJobArn?: string;
  Name?: string;
  Status?: SearchJobState;
  CreationTime?: Date;
  CompletionTime?: Date;
  SearchScopeSummary?: SearchScopeSummary;
  StatusMessage?: string;
}
export type SearchJobs = SearchJobSummary[];
export interface ListSearchJobsOutput {
  SearchJobs: SearchJobSummary[];
  NextToken?: string;
}
export interface ListSearchResultExportJobsInput {
  Status?: ExportJobStatus;
  SearchJobIdentifier?: string;
  NextToken?: string;
  MaxResults?: number;
}
export interface ExportJobSummary {
  ExportJobIdentifier: string;
  ExportJobArn?: string;
  Status?: ExportJobStatus;
  CreationTime?: Date;
  CompletionTime?: Date;
  StatusMessage?: string;
  SearchJobArn?: string;
}
export type ExportJobSummaries = ExportJobSummary[];
export interface ListSearchResultExportJobsOutput {
  ExportJobs: ExportJobSummary[];
  NextToken?: string;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
export interface StartSearchJobInput {
  Tags?: { [key: string]: string | undefined };
  Name?: string;
  EncryptionKeyArn?: string;
  ClientToken?: string;
  SearchScope: SearchScope;
  ItemFilters?: ItemFilters;
}
export interface StartSearchJobOutput {
  SearchJobArn?: string;
  CreationTime?: Date;
  SearchJobIdentifier?: string;
}
export type IamRoleArn = string;
export interface StartSearchResultExportJobInput {
  SearchJobIdentifier: string;
  ExportSpecification: ExportSpecification;
  ClientToken?: string;
  Tags?: { [key: string]: string | undefined };
  RoleArn?: string;
}
export interface StartSearchResultExportJobOutput {
  ExportJobArn?: string;
  ExportJobIdentifier: string;
}
export interface StopSearchJobInput {
  SearchJobIdentifier: string;
}
export interface StopSearchJobOutput {}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeys = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export type GetSearchJobError = ResourceNotFoundException | CommonErrors;
/**
 * This operation retrieves metadata of a search job, including its progress.
 */
export const getSearchJob: API.OperationMethod<
  GetSearchJobInput,
  GetSearchJobOutput,
  GetSearchJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<GetSearchJobInput>,
  output: __S(19) as any as S.Schema<GetSearchJobOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSearchJob",
}));

export type GetSearchResultExportJobError = ResourceNotFoundException | CommonErrors;
/**
 * This operation retrieves the metadata of an export job.
 *
 * An export job is an operation that transmits the results of a search job to a specified S3 bucket in a .csv file.
 *
 * An export job allows you to retain results of a search beyond the search job's scheduled retention of 7 days.
 */
export const getSearchResultExportJob: API.OperationMethod<
  GetSearchResultExportJobInput,
  GetSearchResultExportJobOutput,
  GetSearchResultExportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20) as any as S.Schema<GetSearchResultExportJobInput>,
  output: __S(23) as any as S.Schema<GetSearchResultExportJobOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSearchResultExportJob",
}));

export type ListSearchJobBackupsError = ResourceNotFoundException | CommonErrors;
/**
 * This operation returns a list of all backups (recovery points) in a paginated format that were included in the search job.
 *
 * If a search does not display an expected backup in the results, you can call this operation to display each backup included in the search. Any backups that were not included because they have a `FAILED` status from a permissions issue will be displayed, along with a status message.
 *
 * Only recovery points with a backup index that has a status of `ACTIVE` will be included in search results. If the index has any other status, its status will be displayed along with a status message.
 */
export const listSearchJobBackups: API.PaginatedOperationMethod<
  ListSearchJobBackupsInput,
  ListSearchJobBackupsOutput,
  ListSearchJobBackupsError,
  Credentials | HttpClient.HttpClient,
  SearchJobBackupsResult
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(24) as any as S.Schema<ListSearchJobBackupsInput>,
  output: __S(27) as any as S.Schema<ListSearchJobBackupsOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSearchJobBackups",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Results",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSearchJobResultsError = ResourceNotFoundException | CommonErrors;
/**
 * This operation returns a list of a specified search job.
 */
export const listSearchJobResults: API.PaginatedOperationMethod<
  ListSearchJobResultsInput,
  ListSearchJobResultsOutput,
  ListSearchJobResultsError,
  Credentials | HttpClient.HttpClient,
  ResultItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(28) as any as S.Schema<ListSearchJobResultsInput>,
  output: __S(33) as any as S.Schema<ListSearchJobResultsOutput>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSearchJobResults",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Results",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSearchJobsError = CommonErrors;
/**
 * This operation returns a list of search jobs belonging to an account.
 */
export const listSearchJobs: API.PaginatedOperationMethod<
  ListSearchJobsInput,
  ListSearchJobsOutput,
  ListSearchJobsError,
  Credentials | HttpClient.HttpClient,
  SearchJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(34) as any as S.Schema<ListSearchJobsInput>,
  output: __S(37) as any as S.Schema<ListSearchJobsOutput>,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSearchJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SearchJobs",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSearchResultExportJobsError =
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * This operation exports search results of a search job to a specified destination S3 bucket.
 */
export const listSearchResultExportJobs: API.PaginatedOperationMethod<
  ListSearchResultExportJobsInput,
  ListSearchResultExportJobsOutput,
  ListSearchResultExportJobsError,
  Credentials | HttpClient.HttpClient,
  ExportJobSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(38) as any as S.Schema<ListSearchResultExportJobsInput>,
  output: __S(41) as any as S.Schema<ListSearchResultExportJobsOutput>,
  errors: [ResourceNotFoundException, ServiceQuotaExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSearchResultExportJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ExportJobs",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError = ResourceNotFoundException | CommonErrors;
/**
 * This operation returns the tags for a resource type.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(43) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type StartSearchJobError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * This operation creates a search job which returns recovery points filtered by SearchScope and items filtered by ItemFilters.
 *
 * You can optionally include ClientToken, EncryptionKeyArn, Name, and/or Tags.
 */
export const startSearchJob: API.OperationMethod<
  StartSearchJobInput,
  StartSearchJobOutput,
  StartSearchJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(44) as any as S.Schema<StartSearchJobInput>,
  output: __S(45) as any as S.Schema<StartSearchJobOutput>,
  errors: [ConflictException, ResourceNotFoundException, ServiceQuotaExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartSearchJob",
}));

export type StartSearchResultExportJobError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | CommonErrors;
/**
 * This operations starts a job to export the results of search job to a designated S3 bucket.
 */
export const startSearchResultExportJob: API.OperationMethod<
  StartSearchResultExportJobInput,
  StartSearchResultExportJobOutput,
  StartSearchResultExportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(46) as any as S.Schema<StartSearchResultExportJobInput>,
  output: __S(47) as any as S.Schema<StartSearchResultExportJobOutput>,
  errors: [ConflictException, ResourceNotFoundException, ServiceQuotaExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartSearchResultExportJob",
}));

export type StopSearchJobError = ConflictException | ResourceNotFoundException | CommonErrors;
/**
 * This operations ends a search job.
 *
 * Only a search job with a status of `RUNNING` can be stopped.
 */
export const stopSearchJob: API.OperationMethod<
  StopSearchJobInput,
  StopSearchJobOutput,
  StopSearchJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48) as any as S.Schema<StopSearchJobInput>,
  output: __S(49) as any as S.Schema<StopSearchJobOutput>,
  errors: [ConflictException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopSearchJob",
}));

export type TagResourceError = ResourceNotFoundException | CommonErrors;
/**
 * This operation puts tags on the resource you indicate.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50) as any as S.Schema<TagResourceRequest>,
  output: __S(49) as any as S.Schema<TagResourceResponse>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError = ResourceNotFoundException | CommonErrors;
/**
 * This operation removes tags from the specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(51) as any as S.Schema<UntagResourceRequest>,
  output: __S(49) as any as S.Schema<UntagResourceResponse>,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SearchJobIdentifier: S.String.pipe(T.HttpLabel("SearchJobIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/search-jobs/{SearchJobIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSearchJobInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TotalRecoveryPointsToScanCount: S.optional(S.Number),
          TotalItemsToScanCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SearchScopeSummary" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RecoveryPointsScannedCount: S.optional(S.Number),
          ItemsScannedCount: S.optional(S.Number),
          ItemsMatchedCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "CurrentSearchProgress" });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          CreatedAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreatedBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "BackupCreationTimeFilter" });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional)).pipe(
        /*@__PURE__*/ T.Sparse(),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          BackupResourceTypes: __S(3),
          BackupResourceCreationTime: S.optional(__S(4)),
          SourceResourceArns: S.optional(__S(5)),
          BackupResourceArns: S.optional(__S(5)),
          BackupResourceTags: S.optional(__S(6)),
        }),
      ).annotate({ identifier: "SearchScope" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Value: S.String, Operator: S.optional(S.String) }),
      ).annotate({ identifier: "StringCondition" });
    case 1:
      return S.Array(__S(8));
    case 2:
      return S.suspend(() =>
        S.Struct({ Value: S.Number, Operator: S.optional(S.String) }),
      ).annotate({ identifier: "LongCondition" });
    case 3:
      return S.Array(__S(10));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Value: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Operator: S.optional(S.String),
        }),
      ).annotate({ identifier: "TimeCondition" });
    case 5:
      return S.Array(__S(12));
    case 6:
      return S.suspend(() =>
        S.Struct({
          ObjectKeys: S.optional(__S(9)),
          Sizes: S.optional(__S(11)),
          CreationTimes: S.optional(__S(13)),
          VersionIds: S.optional(__S(9)),
          ETags: S.optional(__S(9)),
        }),
      ).annotate({ identifier: "S3ItemFilter" });
    case 7:
      return S.Array(__S(14));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FilePaths: S.optional(__S(9)),
          Sizes: S.optional(__S(11)),
          CreationTimes: S.optional(__S(13)),
          LastModificationTimes: S.optional(__S(13)),
        }),
      ).annotate({ identifier: "EBSItemFilter" });
    case 1:
      return S.Array(__S(16));
    case 2:
      return S.suspend(() =>
        S.Struct({
          S3ItemFilters: S.optional(__S(15)),
          EBSItemFilters: S.optional(__S(17)),
        }),
      ).annotate({ identifier: "ItemFilters" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          SearchScopeSummary: S.optional(__S(1)),
          CurrentSearchProgress: S.optional(__S(2)),
          StatusMessage: S.optional(S.String),
          EncryptionKeyArn: S.optional(S.String),
          CompletionTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.String,
          SearchScope: __S(7),
          ItemFilters: __S(18),
          CreationTime: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          SearchJobIdentifier: S.String,
          SearchJobArn: S.String,
        }),
      ).annotate({ identifier: "GetSearchJobOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ExportJobIdentifier: S.String.pipe(T.HttpLabel("ExportJobIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/export-search-jobs/{ExportJobIdentifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSearchResultExportJobInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ DestinationBucket: S.String, DestinationPrefix: S.optional(S.String) }),
      ).annotate({ identifier: "S3ExportSpecification" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ s3ExportSpecification: __S(21) })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          ExportJobIdentifier: S.String,
          ExportJobArn: S.optional(S.String),
          Status: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CompletionTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StatusMessage: S.optional(S.String),
          ExportSpecification: S.optional(__S(22)),
          SearchJobArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetSearchResultExportJobOutput",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SearchJobIdentifier: S.String.pipe(T.HttpLabel("SearchJobIdentifier")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/search-jobs/{SearchJobIdentifier}/backups" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSearchJobBackupsInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          ResourceType: S.optional(S.String),
          BackupResourceArn: S.optional(S.String),
          SourceResourceArn: S.optional(S.String),
          IndexCreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          BackupCreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "SearchJobBackupsResult" });
    case 2:
      return S.Array(__S(25));
    case 3:
      return S.suspend(() =>
        S.Struct({ Results: __S(26), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListSearchJobBackupsOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SearchJobIdentifier: S.String.pipe(T.HttpLabel("SearchJobIdentifier")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/search-jobs/{SearchJobIdentifier}/search-results" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSearchJobResultsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          BackupResourceArn: S.optional(S.String),
          SourceResourceArn: S.optional(S.String),
          BackupVaultName: S.optional(S.String),
          ObjectKey: S.optional(SensitiveString),
          ObjectSize: S.optional(S.Number),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ETag: S.optional(S.String),
          VersionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3ResultItem" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          BackupResourceArn: S.optional(S.String),
          SourceResourceArn: S.optional(S.String),
          BackupVaultName: S.optional(S.String),
          FileSystemIdentifier: S.optional(S.String),
          FilePath: S.optional(SensitiveString),
          FileSize: S.optional(S.Number),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "EBSResultItem" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ S3ResultItem: __S(29) }),
        /*@__PURE__*/ S.Struct({ EBSResultItem: __S(30) }),
      ]);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(31));
    case 1:
      return S.suspend(() =>
        S.Struct({ Results: __S(32), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListSearchJobResultsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ByStatus: S.optional(S.String).pipe(T.HttpQuery("Status")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/search-jobs" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListSearchJobsInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SearchJobIdentifier: S.optional(S.String),
          SearchJobArn: S.optional(S.String),
          Name: S.optional(S.String),
          Status: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CompletionTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SearchScopeSummary: S.optional(__S(1)),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "SearchJobSummary" });
    case 4:
      return S.Array(__S(35));
    case 5:
      return S.suspend(() =>
        S.Struct({ SearchJobs: __S(36), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListSearchJobsOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String).pipe(T.HttpQuery("Status")),
          SearchJobIdentifier: S.optional(S.String).pipe(T.HttpQuery("SearchJobIdentifier")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/export-search-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSearchResultExportJobsInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ExportJobIdentifier: S.String,
          ExportJobArn: S.optional(S.String),
          Status: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CompletionTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          StatusMessage: S.optional(S.String),
          SearchJobArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExportJobSummary" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(39));
    case 1:
      return S.suspend(() =>
        S.Struct({ ExportJobs: __S(40), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListSearchResultExportJobsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{ResourceArn}" }),
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
    case 3:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(6)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Tags: S.optional(__S(6)),
          Name: S.optional(S.String),
          EncryptionKeyArn: S.optional(S.String),
          ClientToken: S.optional(S.String),
          SearchScope: __S(7),
          ItemFilters: S.optional(__S(18)),
        }).pipe(
          T.all(T.Http({ method: "PUT", uri: "/search-jobs" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StartSearchJobInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SearchJobArn: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SearchJobIdentifier: S.optional(S.String),
        }),
      ).annotate({ identifier: "StartSearchJobOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SearchJobIdentifier: S.String,
          ExportSpecification: __S(22),
          ClientToken: S.optional(S.String),
          Tags: S.optional(__S(6)),
          RoleArn: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/export-search-jobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartSearchResultExportJobInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ExportJobArn: S.optional(S.String), ExportJobIdentifier: S.String }),
      ).annotate({
        identifier: "StartSearchResultExportJobOutput",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SearchJobIdentifier: S.String.pipe(T.HttpLabel("SearchJobIdentifier")) }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/search-jobs/{SearchJobIdentifier}/actions/cancel" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopSearchJobInput" });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "StopSearchJobOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")), Tags: __S(6) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          TagKeys: __S(5).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
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
  }
}
