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
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "OAM", serviceShapeName: "oamservice" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "oam" });
const ver = /*@__PURE__*/ T.ServiceVersion("2022-06-10");
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
              `https://oam-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://oam-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://oam.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://oam.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      amznErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServiceFault
  extends /*@__PURE__*/ S.TaggedError<InternalServiceFault>()(
    "InternalServiceFault",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      amznErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()(
    "InvalidParameterException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      amznErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class MissingRequiredParameterException
  extends /*@__PURE__*/ S.TaggedError<MissingRequiredParameterException>()(
    "MissingRequiredParameterException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      amznErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      amznErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      amznErrorType: /*@__PURE__*/ S.optional(S.String).pipe(
        /*@__PURE__*/ T.HttpHeader("x-amzn-ErrorType"),
      ),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()("TooManyRequestsException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withThrottlingError, C.withRetryableError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type LabelTemplate = string;
export type ResourceType =
  | "AWS::CloudWatch::Metric"
  | "AWS::Logs::LogGroup"
  | "AWS::XRay::Trace"
  | "AWS::ApplicationInsights::Application"
  | "AWS::InternetMonitor::Monitor"
  | "AWS::ApplicationSignals::Service"
  | "AWS::ApplicationSignals::ServiceLevelObjective"
  | (string & {});
export type ResourceTypesInput = ResourceType[];
export type ResourceIdentifier = string;
export type TagKey = string;
export type TagValue = string;
export type TagMapInput = { [key: string]: string | undefined };
export type LogsFilter = string;
export interface LogGroupConfiguration {
  Filter: string;
}
export type MetricsFilter = string;
export interface MetricConfiguration {
  Filter: string;
}
export interface LinkConfiguration {
  LogGroupConfiguration?: LogGroupConfiguration;
  MetricConfiguration?: MetricConfiguration;
}
export interface CreateLinkInput {
  LabelTemplate: string;
  ResourceTypes: ResourceType[];
  SinkIdentifier: string;
  Tags?: { [key: string]: string | undefined };
  LinkConfiguration?: LinkConfiguration;
}
export type ResourceTypesOutput = string[];
export type TagMapOutput = { [key: string]: string | undefined };
export interface CreateLinkOutput {
  Arn?: string;
  Id?: string;
  Label?: string;
  LabelTemplate?: string;
  ResourceTypes?: string[];
  SinkArn?: string;
  Tags?: { [key: string]: string | undefined };
  LinkConfiguration?: LinkConfiguration;
}
export type SinkName = string;
export interface CreateSinkInput {
  Name: string;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateSinkOutput {
  Arn?: string;
  Id?: string;
  Name?: string;
  Tags?: { [key: string]: string | undefined };
}
export interface DeleteLinkInput {
  Identifier: string;
}
export interface DeleteLinkOutput {}
export interface DeleteSinkInput {
  Identifier: string;
}
export interface DeleteSinkOutput {}
export type IncludeTags = boolean;
export interface GetLinkInput {
  Identifier: string;
  IncludeTags?: boolean;
}
export interface GetLinkOutput {
  Arn?: string;
  Id?: string;
  Label?: string;
  LabelTemplate?: string;
  ResourceTypes?: string[];
  SinkArn?: string;
  Tags?: { [key: string]: string | undefined };
  LinkConfiguration?: LinkConfiguration;
}
export interface GetSinkInput {
  Identifier: string;
  IncludeTags?: boolean;
}
export interface GetSinkOutput {
  Arn?: string;
  Id?: string;
  Name?: string;
  Tags?: { [key: string]: string | undefined };
}
export interface GetSinkPolicyInput {
  SinkIdentifier: string;
}
export interface GetSinkPolicyOutput {
  SinkArn?: string;
  SinkId?: string;
  Policy?: string;
}
export type ListAttachedLinksMaxResults = number;
export type NextToken = string;
export interface ListAttachedLinksInput {
  MaxResults?: number;
  NextToken?: string;
  SinkIdentifier: string;
}
export interface ListAttachedLinksItem {
  Label?: string;
  LinkArn?: string;
  ResourceTypes?: string[];
}
export type ListAttachedLinksItems = ListAttachedLinksItem[];
export interface ListAttachedLinksOutput {
  Items: ListAttachedLinksItem[];
  NextToken?: string;
}
export type ListLinksMaxResults = number;
export interface ListLinksInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListLinksItem {
  Arn?: string;
  Id?: string;
  Label?: string;
  ResourceTypes?: string[];
  SinkArn?: string;
}
export type ListLinksItems = ListLinksItem[];
export interface ListLinksOutput {
  Items: ListLinksItem[];
  NextToken?: string;
}
export type ListSinksMaxResults = number;
export interface ListSinksInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSinksItem {
  Arn?: string;
  Id?: string;
  Name?: string;
}
export type ListSinksItems = ListSinksItem[];
export interface ListSinksOutput {
  Items: ListSinksItem[];
  NextToken?: string;
}
export type Arn = string;
export interface ListTagsForResourceInput {
  ResourceArn: string;
}
export interface ListTagsForResourceOutput {
  Tags?: { [key: string]: string | undefined };
}
export type SinkPolicy = string;
export interface PutSinkPolicyInput {
  SinkIdentifier: string;
  Policy: string;
}
export interface PutSinkPolicyOutput {
  SinkArn?: string;
  SinkId?: string;
  Policy?: string;
}
export interface TagResourceInput {
  ResourceArn: string;
  Tags: { [key: string]: string | undefined };
}
export interface TagResourceOutput {}
export type TagKeys = string[];
export interface UntagResourceInput {
  ResourceArn: string;
  TagKeys: string[];
}
export interface UntagResourceOutput {}
export interface UpdateLinkInput {
  Identifier: string;
  ResourceTypes: ResourceType[];
  LinkConfiguration?: LinkConfiguration;
  IncludeTags?: boolean;
}
export interface UpdateLinkOutput {
  Arn?: string;
  Id?: string;
  Label?: string;
  LabelTemplate?: string;
  ResourceTypes?: string[];
  SinkArn?: string;
  Tags?: { [key: string]: string | undefined };
  LinkConfiguration?: LinkConfiguration;
}
export type CreateLinkError =
  | ConflictException
  | InternalServiceFault
  | InvalidParameterException
  | MissingRequiredParameterException
  | ServiceQuotaExceededException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates a link between a source account and a sink that you have created in a monitoring account. After the link is created, data is sent from the source account to the monitoring account. When you create a link, you can optionally specify filters that specify which metric namespaces and which log groups are shared from the source account to the monitoring account.
 *
 * Before you create a link, you must create a sink in the monitoring account and create a sink policy in that account. The sink policy must permit the source account to link to it. You can grant permission to source accounts by granting permission to an entire organization or to individual accounts.
 *
 * For more information, see CreateSink and PutSinkPolicy.
 *
 * Each monitoring account can be linked to as many as 100,000 source accounts.
 *
 * Each source account can be linked to as many as five monitoring accounts.
 */
export const createLink: API.OperationMethod<
  CreateLinkInput,
  CreateLinkOutput,
  CreateLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4) as any as S.Schema<CreateLinkInput>,
  output: __S(6) as any as S.Schema<CreateLinkOutput>,
  errors: [
    ConflictException,
    InternalServiceFault,
    InvalidParameterException,
    MissingRequiredParameterException,
    ServiceQuotaExceededException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLink",
}));

export type CreateSinkError =
  | ConflictException
  | InternalServiceFault
  | InvalidParameterException
  | MissingRequiredParameterException
  | ServiceQuotaExceededException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Use this to create a *sink* in the current account, so that it can be used as a monitoring account in CloudWatch cross-account observability. A sink is a resource that represents an attachment point in a monitoring account. Source accounts can link to the sink to send observability data.
 *
 * After you create a sink, you must create a sink policy that allows source accounts to attach to it. For more information, see PutSinkPolicy.
 *
 * Each account can contain one sink per Region. If you delete a sink, you can then create a new one in that Region.
 */
export const createSink: API.OperationMethod<
  CreateSinkInput,
  CreateSinkOutput,
  CreateSinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7) as any as S.Schema<CreateSinkInput>,
  output: __S(8) as any as S.Schema<CreateSinkOutput>,
  errors: [
    ConflictException,
    InternalServiceFault,
    InvalidParameterException,
    MissingRequiredParameterException,
    ServiceQuotaExceededException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSink",
}));

export type DeleteLinkError =
  | InternalServiceFault
  | InvalidParameterException
  | MissingRequiredParameterException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a link between a monitoring account sink and a source account. You must run this operation in the source account.
 */
export const deleteLink: API.OperationMethod<
  DeleteLinkInput,
  DeleteLinkOutput,
  DeleteLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<DeleteLinkInput>,
  output: __S(10) as any as S.Schema<DeleteLinkOutput>,
  errors: [
    InternalServiceFault,
    InvalidParameterException,
    MissingRequiredParameterException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLink",
}));

export type DeleteSinkError =
  | ConflictException
  | InternalServiceFault
  | InvalidParameterException
  | MissingRequiredParameterException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Deletes a sink. You must delete all links to a sink before you can delete that sink.
 */
export const deleteSink: API.OperationMethod<
  DeleteSinkInput,
  DeleteSinkOutput,
  DeleteSinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11) as any as S.Schema<DeleteSinkInput>,
  output: __S(10) as any as S.Schema<DeleteSinkOutput>,
  errors: [
    ConflictException,
    InternalServiceFault,
    InvalidParameterException,
    MissingRequiredParameterException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSink",
}));

export type GetLinkError =
  | InternalServiceFault
  | InvalidParameterException
  | MissingRequiredParameterException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns complete information about one link.
 *
 * To use this operation, provide the link ARN. To retrieve a list of link ARNs, use ListLinks.
 */
export const getLink: API.OperationMethod<
  GetLinkInput,
  GetLinkOutput,
  GetLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12) as any as S.Schema<GetLinkInput>,
  output: __S(6) as any as S.Schema<GetLinkOutput>,
  errors: [
    InternalServiceFault,
    InvalidParameterException,
    MissingRequiredParameterException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLink",
}));

export type GetSinkError =
  | InternalServiceFault
  | InvalidParameterException
  | MissingRequiredParameterException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns complete information about one monitoring account sink.
 *
 * To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use ListSinks.
 */
export const getSink: API.OperationMethod<
  GetSinkInput,
  GetSinkOutput,
  GetSinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(13) as any as S.Schema<GetSinkInput>,
  output: __S(8) as any as S.Schema<GetSinkOutput>,
  errors: [
    InternalServiceFault,
    InvalidParameterException,
    MissingRequiredParameterException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSink",
}));

export type GetSinkPolicyError =
  | InternalServiceFault
  | InvalidParameterException
  | MissingRequiredParameterException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns the current sink policy attached to this sink. The sink policy specifies what accounts can attach to this sink as source accounts, and what types of data they can share.
 */
export const getSinkPolicy: API.OperationMethod<
  GetSinkPolicyInput,
  GetSinkPolicyOutput,
  GetSinkPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14) as any as S.Schema<GetSinkPolicyInput>,
  output: __S(15) as any as S.Schema<GetSinkPolicyOutput>,
  errors: [
    InternalServiceFault,
    InvalidParameterException,
    MissingRequiredParameterException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSinkPolicy",
}));

export type ListAttachedLinksError =
  | InternalServiceFault
  | InvalidParameterException
  | MissingRequiredParameterException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Returns a list of source account links that are linked to this monitoring account sink.
 *
 * To use this operation, provide the sink ARN. To retrieve a list of sink ARNs, use ListSinks.
 *
 * To find a list of links for one source account, use ListLinks.
 */
export const listAttachedLinks: API.PaginatedOperationMethod<
  ListAttachedLinksInput,
  ListAttachedLinksOutput,
  ListAttachedLinksError,
  Credentials | HttpClient.HttpClient,
  ListAttachedLinksItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(16) as any as S.Schema<ListAttachedLinksInput>,
  output: __S(19) as any as S.Schema<ListAttachedLinksOutput>,
  errors: [
    InternalServiceFault,
    InvalidParameterException,
    MissingRequiredParameterException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAttachedLinks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListLinksError =
  | InternalServiceFault
  | InvalidParameterException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Use this operation in a source account to return a list of links to monitoring account sinks that this source account has.
 *
 * To find a list of links for one monitoring account sink, use ListAttachedLinks from within the monitoring account.
 */
export const listLinks: API.PaginatedOperationMethod<
  ListLinksInput,
  ListLinksOutput,
  ListLinksError,
  Credentials | HttpClient.HttpClient,
  ListLinksItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(20) as any as S.Schema<ListLinksInput>,
  output: __S(23) as any as S.Schema<ListLinksOutput>,
  errors: [
    InternalServiceFault,
    InvalidParameterException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLinks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSinksError =
  | InternalServiceFault
  | InvalidParameterException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Use this operation in a monitoring account to return the list of sinks created in that account.
 */
export const listSinks: API.PaginatedOperationMethod<
  ListSinksInput,
  ListSinksOutput,
  ListSinksError,
  Credentials | HttpClient.HttpClient,
  ListSinksItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(24) as any as S.Schema<ListSinksInput>,
  output: __S(27) as any as S.Schema<ListSinksOutput>,
  errors: [
    InternalServiceFault,
    InvalidParameterException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSinks",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | ResourceNotFoundException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Displays the tags associated with a resource. Both sinks and links support tagging.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(28) as any as S.Schema<ListTagsForResourceInput>,
  output: __S(29) as any as S.Schema<ListTagsForResourceOutput>,
  errors: [ResourceNotFoundException, ValidationException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PutSinkPolicyError =
  | InternalServiceFault
  | InvalidParameterException
  | MissingRequiredParameterException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Creates or updates the resource policy that grants permissions to source accounts to link to the monitoring account sink. When you create a sink policy, you can grant permissions to all accounts in an organization or to individual accounts.
 *
 * You can also use a sink policy to limit the types of data that is shared. The six types of services with their respective resource types that you can allow or deny are:
 *
 * - **Metrics** - Specify with `AWS::CloudWatch::Metric`
 *
 * - **Log groups** - Specify with `AWS::Logs::LogGroup`
 *
 * - **Traces** - Specify with `AWS::XRay::Trace`
 *
 * - **Application Insights - Applications** - Specify with `AWS::ApplicationInsights::Application`
 *
 * - **Internet Monitor** - Specify with `AWS::InternetMonitor::Monitor`
 *
 * - **Application Signals** - Specify with `AWS::ApplicationSignals::Service` and `AWS::ApplicationSignals::ServiceLevelObjective`
 *
 * See the examples in this section to see how to specify permitted source accounts and data types.
 */
export const putSinkPolicy: API.OperationMethod<
  PutSinkPolicyInput,
  PutSinkPolicyOutput,
  PutSinkPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30) as any as S.Schema<PutSinkPolicyInput>,
  output: __S(15) as any as S.Schema<PutSinkPolicyOutput>,
  errors: [
    InternalServiceFault,
    InvalidParameterException,
    MissingRequiredParameterException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutSinkPolicy",
}));

export type TagResourceError =
  | ResourceNotFoundException
  | TooManyTagsException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Assigns one or more tags (key-value pairs) to the specified resource. Both sinks and links can be tagged.
 *
 * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
 *
 * Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.
 *
 * You can use the `TagResource` action with a resource that already has tags. If you specify a new tag key for the alarm, this tag is appended to the list of tags associated with the alarm. If you specify a tag key that is already associated with the alarm, the new tag value that you specify replaces the previous value for that tag.
 *
 * You can associate as many as 50 tags with a resource.
 *
 * Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the `oam:ResourceTag` permission. The `iam:ResourceTag` permission does not allow you to tag and untag links and sinks.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceOutput,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31) as any as S.Schema<TagResourceInput>,
  output: __S(10) as any as S.Schema<TagResourceOutput>,
  errors: [
    ResourceNotFoundException,
    TooManyTagsException,
    ValidationException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | ResourceNotFoundException
  | ValidationException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Removes one or more tags from the specified resource.
 *
 * Unlike tagging permissions in other Amazon Web Services services, to tag or untag links and sinks you must have the `oam:ResourceTag` permission. The `iam:TagResource` permission does not allow you to tag and untag links and sinks.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceOutput,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32) as any as S.Schema<UntagResourceInput>,
  output: __S(10) as any as S.Schema<UntagResourceOutput>,
  errors: [ResourceNotFoundException, ValidationException, TooManyRequestsException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateLinkError =
  | InternalServiceFault
  | InvalidParameterException
  | MissingRequiredParameterException
  | ResourceNotFoundException
  | TooManyRequestsException
  | CommonErrors;
/**
 * Use this operation to change what types of data are shared from a source account to its linked monitoring account sink. You can't change the sink or change the monitoring account with this operation.
 *
 * When you update a link, you can optionally specify filters that specify which metric namespaces and which log groups are shared from the source account to the monitoring account.
 *
 * To update the list of tags associated with the sink, use TagResource.
 */
export const updateLink: API.OperationMethod<
  UpdateLinkInput,
  UpdateLinkOutput,
  UpdateLinkError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(33) as any as S.Schema<UpdateLinkInput>,
  output: __S(6) as any as S.Schema<UpdateLinkOutput>,
  errors: [
    InternalServiceFault,
    InvalidParameterException,
    MissingRequiredParameterException,
    ResourceNotFoundException,
    TooManyRequestsException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLink",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 2:
      return S.suspend(() => S.Struct({ Filter: S.String })).annotate({
        identifier: "LogGroupConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          LogGroupConfiguration: S.optional(__S(2)),
          MetricConfiguration: S.optional(__S(2)),
        }),
      ).annotate({ identifier: "LinkConfiguration" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LabelTemplate: S.String,
          ResourceTypes: __S(0),
          SinkIdentifier: S.String,
          Tags: S.optional(__S(1)),
          LinkConfiguration: S.optional(__S(3)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreateLink" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateLinkInput" });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Id: S.optional(S.String),
          Label: S.optional(S.String),
          LabelTemplate: S.optional(S.String),
          ResourceTypes: S.optional(__S(5)),
          SinkArn: S.optional(S.String),
          Tags: S.optional(__S(1)),
          LinkConfiguration: S.optional(__S(3)),
        }),
      ).annotate({ identifier: "CreateLinkOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Tags: S.optional(__S(1)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreateSink" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateSinkInput" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Tags: S.optional(__S(1)),
        }),
      ).annotate({ identifier: "CreateSinkOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeleteLink" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteLinkInput" });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteLinkOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeleteSink" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteSinkInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String, IncludeTags: S.optional(S.Boolean) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetLink" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetLinkInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String, IncludeTags: S.optional(S.Boolean) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetSink" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSinkInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({ SinkIdentifier: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetSinkPolicy" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSinkPolicyInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SinkArn: S.optional(S.String),
          SinkId: S.optional(S.String),
          Policy: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetSinkPolicyOutput" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          SinkIdentifier: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListAttachedLinks" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListAttachedLinksInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Label: S.optional(S.String),
          LinkArn: S.optional(S.String),
          ResourceTypes: S.optional(__S(5)),
        }),
      ).annotate({ identifier: "ListAttachedLinksItem" });
    case 2:
      return S.Array(__S(17));
    case 3:
      return S.suspend(() =>
        S.Struct({ Items: __S(18), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAttachedLinksOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListLinks" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListLinksInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Id: S.optional(S.String),
          Label: S.optional(S.String),
          ResourceTypes: S.optional(__S(5)),
          SinkArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListLinksItem" });
    case 6:
      return S.Array(__S(21));
    case 7:
      return S.suspend(() =>
        S.Struct({ Items: __S(22), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListLinksOutput" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListSinks" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListSinksInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Id: S.optional(S.String),
          Name: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListSinksItem" });
    case 2:
      return S.Array(__S(25));
    case 3:
      return S.suspend(() =>
        S.Struct({ Items: __S(26), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListSinksOutput" });
    case 4:
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
      ).annotate({ identifier: "ListTagsForResourceInput" });
    case 5:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(1)) })).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ SinkIdentifier: S.String, Policy: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/PutSinkPolicy" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutSinkPolicyInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          Tags: __S(1),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/tags/{ResourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceInput" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
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
      ).annotate({ identifier: "UntagResourceInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String,
          ResourceTypes: __S(0),
          LinkConfiguration: S.optional(__S(3)),
          IncludeTags: S.optional(S.Boolean),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UpdateLink" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateLinkInput" });
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
  }
}
