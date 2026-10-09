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
  sdkId: "Resource Explorer 2",
  serviceShapeName: "ResourceExplorer",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "resource-explorer-2" });
const ver = /*@__PURE__*/ T.ServiceVersion("2022-07-28");
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
              `https://resource-explorer-2-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://resource-explorer-2-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://resource-explorer-2.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://resource-explorer-2.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
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
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
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
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      Name: S.String,
      Value: S.String,
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UnauthorizedException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedException>()(
    "UnauthorizedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      FieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(91, __c11, 3)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export interface AssociateDefaultViewInput {
  ViewArn: string;
}
export interface AssociateDefaultViewOutput {
  ViewArn?: string;
}
export type ViewArnList = string[];
export interface BatchGetViewInput {
  ViewArns?: string[];
}
export type ViewName = string;
export interface IncludedProperty {
  Name: string;
}
export type IncludedPropertyList = IncludedProperty[];
export interface SearchFilter {
  FilterString: string;
}
export interface View {
  ViewArn?: string;
  ViewName?: string;
  Owner?: string;
  LastUpdatedAt?: Date;
  Scope?: string;
  IncludedProperties?: IncludedProperty[];
  Filters?: SearchFilter;
}
export type ViewList = View[];
export interface BatchGetViewError_ {
  ViewArn: string;
  ErrorMessage: string;
}
export type BatchGetViewErrors = BatchGetViewError_[];
export interface BatchGetViewOutput {
  Views?: View[];
  Errors?: BatchGetViewError_[];
}
export type TagMap = { [key: string]: string | undefined };
export interface CreateIndexInput {
  ClientToken?: string;
  Tags?: { [key: string]: string | undefined };
}
export type IndexState = string;
export interface CreateIndexOutput {
  Arn?: string;
  State?: string;
  CreatedAt?: Date;
}
export type RegionList = string[];
export interface CreateResourceExplorerSetupInput {
  RegionList: string[];
  AggregatorRegions?: string[];
  ViewName: string;
}
export interface CreateResourceExplorerSetupOutput {
  TaskId: string;
}
export interface CreateViewInput {
  ClientToken?: string;
  ViewName: string;
  IncludedProperties?: IncludedProperty[];
  Scope?: string;
  Filters?: SearchFilter;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateViewOutput {
  View?: View;
}
export interface DeleteIndexInput {
  Arn: string;
}
export interface DeleteIndexOutput {
  Arn?: string;
  State?: string;
  LastUpdatedAt?: Date;
}
export interface DeleteResourceExplorerSetupInput {
  RegionList?: string[];
  DeleteInAllRegions?: boolean;
}
export interface DeleteResourceExplorerSetupOutput {
  TaskId: string;
}
export interface DeleteViewInput {
  ViewArn: string;
}
export interface DeleteViewOutput {
  ViewArn?: string;
}
export interface DisassociateDefaultViewRequest {}
export interface DisassociateDefaultViewResponse {}
export interface GetAccountLevelServiceConfigurationRequest {}
export type AWSServiceAccessStatus = string;
export interface OrgConfiguration {
  AWSServiceAccessStatus: string;
  ServiceLinkedRole?: string;
}
export interface GetAccountLevelServiceConfigurationOutput {
  OrgConfiguration?: OrgConfiguration;
}
export interface GetDefaultViewRequest {}
export interface GetDefaultViewOutput {
  ViewArn?: string;
}
export interface GetIndexRequest {}
export type IndexType = string;
export interface GetIndexOutput {
  Arn?: string;
  Type?: string;
  State?: string;
  ReplicatingFrom?: string[];
  ReplicatingTo?: string[];
  CreatedAt?: Date;
  LastUpdatedAt?: Date;
  Tags?: { [key: string]: string | undefined };
}
export interface GetManagedViewInput {
  ManagedViewArn: string;
}
export interface ManagedView {
  ManagedViewArn?: string;
  ManagedViewName?: string;
  TrustedService?: string;
  LastUpdatedAt?: Date;
  Owner?: string;
  Scope?: string;
  IncludedProperties?: IncludedProperty[];
  Filters?: SearchFilter;
  ResourcePolicy?: string;
  Version?: string;
}
export interface GetManagedViewOutput {
  ManagedView?: ManagedView;
}
export interface GetResourceExplorerSetupInput {
  TaskId: string;
  MaxResults?: number;
  NextToken?: string;
}
export type OperationStatus = string;
export interface Index {
  Region?: string;
  Arn?: string;
  Type?: string;
}
export interface ErrorDetails {
  Code?: string;
  Message?: string;
}
export interface IndexStatus {
  Status?: string;
  Index?: Index;
  ErrorDetails?: ErrorDetails;
}
export interface ViewStatus {
  Status?: string;
  View?: View;
  ErrorDetails?: ErrorDetails;
}
export interface RegionStatus {
  Region?: string;
  Index?: IndexStatus;
  View?: ViewStatus;
}
export type RegionStatusList = RegionStatus[];
export interface GetResourceExplorerSetupOutput {
  Regions?: RegionStatus[];
  NextToken?: string;
}
export interface GetServiceIndexRequest {}
export interface GetServiceIndexOutput {
  Arn?: string;
  Type?: string;
}
export interface GetServiceViewInput {
  ServiceViewArn: string;
}
export type ServiceViewName = string;
export type RecorderType = string;
export interface ServiceLinkedRecorderInfo {
  ServicePrincipal?: string;
  RecorderName?: string;
  RecorderType?: string;
}
export interface ServiceView {
  ServiceViewArn: string;
  ServiceViewName?: string;
  Filters?: SearchFilter;
  IncludedProperties?: IncludedProperty[];
  StreamingAccessForService?: string;
  ScopeType?: string;
  ServiceLinkedRecorder?: ServiceLinkedRecorderInfo;
}
export interface GetServiceViewOutput {
  View: ServiceView;
}
export interface GetViewInput {
  ViewArn: string;
}
export interface GetViewOutput {
  View?: View;
  Tags?: { [key: string]: string | undefined };
}
export interface ListIndexesInput {
  Type?: string;
  Regions?: string[];
  MaxResults?: number;
  NextToken?: string;
}
export type IndexList = Index[];
export interface ListIndexesOutput {
  Indexes?: Index[];
  NextToken?: string;
}
export type AccountId = string;
export type AccountIdList = string[];
export interface ListIndexesForMembersInput {
  AccountIdList: string[];
  MaxResults?: number;
  NextToken?: string;
}
export interface MemberIndex {
  AccountId?: string;
  Region?: string;
  Arn?: string;
  Type?: string;
}
export type MemberIndexList = MemberIndex[];
export interface ListIndexesForMembersOutput {
  Indexes?: MemberIndex[];
  NextToken?: string;
}
export interface ListManagedViewsInput {
  MaxResults?: number;
  NextToken?: string;
  ServicePrincipal?: string;
}
export type ManagedViewArnList = string[];
export interface ListManagedViewsOutput {
  NextToken?: string;
  ManagedViews?: string[];
}
export interface ListResourcesInput {
  Filters?: SearchFilter;
  MaxResults?: number;
  ViewArn?: string;
  NextToken?: string;
}
export interface ResourceProperty {
  Name?: string;
  LastReportedAt?: Date;
  Data?: any;
}
export type ResourcePropertyList = ResourceProperty[];
export interface Resource {
  Arn?: string;
  OwningAccountId?: string;
  Region?: string;
  ResourceType?: string;
  Service?: string;
  CfnResourceType?: string;
  LastReportedAt?: Date;
  Properties?: ResourceProperty[];
}
export type ResourceList = Resource[];
export interface ListResourcesOutput {
  Resources?: Resource[];
  NextToken?: string;
  ViewArn?: string;
}
export interface ListServiceIndexesInput {
  Regions?: string[];
  MaxResults?: number;
  NextToken?: string;
}
export interface ListServiceIndexesOutput {
  Indexes?: Index[];
  NextToken?: string;
}
export interface ListServiceViewsInput {
  MaxResults?: number;
  NextToken?: string;
}
export type ServiceViewArnList = string[];
export interface ListServiceViewsOutput {
  NextToken?: string;
  ServiceViews?: string[];
}
export interface ListStreamingAccessForServicesInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface StreamingAccessDetails {
  ServicePrincipal: string;
  CreatedAt: Date;
}
export type StreamingAccessDetailsList = StreamingAccessDetails[];
export interface ListStreamingAccessForServicesOutput {
  StreamingAccessForServices: StreamingAccessDetails[];
  NextToken?: string;
}
export interface ListSupportedResourceTypesInput {
  NextToken?: string;
  MaxResults?: number;
}
export type CFNResourceTypeList = string[];
export interface SupportedResourceType {
  Service?: string;
  ResourceType?: string;
  CFNResourceTypes?: string[];
}
export type ResourceTypeList = SupportedResourceType[];
export interface ListSupportedResourceTypesOutput {
  ResourceTypes?: SupportedResourceType[];
  NextToken?: string;
}
export interface ListTagsForResourceInput {
  resourceArn: string;
}
export interface ListTagsForResourceOutput {
  Tags?: { [key: string]: string | undefined };
}
export interface ListViewsInput {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListViewsOutput {
  Views?: string[];
  NextToken?: string;
}
export type QueryString = string | redacted.Redacted<string>;
export interface SearchInput {
  QueryString: string | redacted.Redacted<string>;
  MaxResults?: number;
  ViewArn?: string;
  NextToken?: string;
}
export interface ResourceCount {
  TotalResources?: number;
  Complete?: boolean;
}
export interface SearchOutput {
  Resources?: Resource[];
  NextToken?: string;
  ViewArn?: string;
  Count?: ResourceCount;
}
export interface TagResourceInput {
  resourceArn: string;
  Tags?: { [key: string]: string | undefined };
}
export interface TagResourceOutput {}
export type StringList = string[];
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
export interface UntagResourceOutput {}
export interface UpdateIndexTypeInput {
  Arn: string;
  Type: string;
}
export interface UpdateIndexTypeOutput {
  Arn?: string;
  Type?: string;
  State?: string;
  LastUpdatedAt?: Date;
}
export interface UpdateViewInput {
  ViewArn: string;
  IncludedProperties?: IncludedProperty[];
  Filters?: SearchFilter;
}
export interface UpdateViewOutput {
  View?: View;
}
export interface ValidationExceptionField {
  Name: string;
  ValidationIssue: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type AssociateDefaultViewError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sets the specified view as the default for the Amazon Web Services Region in which you call this operation. When a user performs a Search that doesn't explicitly specify which view to use, then Amazon Web Services Resource Explorer automatically chooses this default view for searches performed in this Amazon Web Services Region.
 *
 * If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every `Search` operation performed in that Region.
 */
export const associateDefaultView: API.OperationMethod<
  AssociateDefaultViewInput,
  AssociateDefaultViewOutput,
  AssociateDefaultViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0, __c0, 0) as any as S.Schema<AssociateDefaultViewInput>,
  output: __S(1, __c0, 1) as any as S.Schema<AssociateDefaultViewOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateDefaultView",
}));

export type BatchGetViewError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about a list of views.
 */
export const batchGetView: API.OperationMethod<
  BatchGetViewInput,
  BatchGetViewOutput,
  BatchGetViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(3, __c0, 3) as any as S.Schema<BatchGetViewInput>,
  output: __S(11, __c1, 3) as any as S.Schema<BatchGetViewOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetView",
}));

export type CreateIndexError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Turns on Amazon Web Services Resource Explorer in the Amazon Web Services Region in which you called this operation by creating an index. Resource Explorer begins discovering the resources in this Region and stores the details about the resources in the index so that they can be queried by using the Search operation. You can create only one index in a Region.
 *
 * This operation creates only a *local* index. To promote the local index in one Amazon Web Services Region into the aggregator index for the Amazon Web Services account, use the UpdateIndexType operation. For more information, see Turning on cross-Region search by creating an aggregator index in the *Amazon Web Services Resource Explorer User Guide*.
 *
 * For more details about what happens when you turn on Resource Explorer in an Amazon Web Services Region, see Turn on Resource Explorer to index your resources in an Amazon Web Services Region in the *Amazon Web Services Resource Explorer User Guide*.
 *
 * If this is the first Amazon Web Services Region in which you've created an index for Resource Explorer, then this operation also creates a service-linked role in your Amazon Web Services account that allows Resource Explorer to enumerate your resources to populate the index.
 *
 * - **Action**: `resource-explorer-2:CreateIndex`
 *
 * **Resource**: The ARN of the index (as it will exist after the operation completes) in the Amazon Web Services Region and account in which you're trying to create the index. Use the wildcard character (`*`) at the end of the string to match the eventual UUID. For example, the following `Resource` element restricts the role or user to creating an index in only the `us-east-2` Region of the specified account.
 *
 * `"Resource": "arn:aws:resource-explorer-2:us-west-2:*<account-id>*:index/*"`
 *
 * Alternatively, you can use `"Resource": "*"` to allow the role or user to create an index in any Region.
 *
 * - **Action**: `iam:CreateServiceLinkedRole`
 *
 * **Resource**: No specific resource (*).
 *
 * This permission is required only the first time you create an index to turn on Resource Explorer in the account. Resource Explorer uses this to create the service-linked role needed to index the resources in your account. Resource Explorer uses the same service-linked role for all additional indexes you create afterwards.
 */
export const createIndex: API.OperationMethod<
  CreateIndexInput,
  CreateIndexOutput,
  CreateIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(13, __c1, 5) as any as S.Schema<CreateIndexInput>,
  output: __S(14, __c1, 6) as any as S.Schema<CreateIndexOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateIndex",
}));

export type CreateResourceExplorerSetupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a Resource Explorer setup configuration across multiple Amazon Web Services Regions. This operation sets up indexes and views in the specified Regions. This operation can also be used to set an aggregator Region for cross-Region resource search.
 */
export const createResourceExplorerSetup: API.OperationMethod<
  CreateResourceExplorerSetupInput,
  CreateResourceExplorerSetupOutput,
  CreateResourceExplorerSetupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15, __c1, 7) as any as S.Schema<CreateResourceExplorerSetupInput>,
  output: __S(16, __c2, 0) as any as S.Schema<CreateResourceExplorerSetupOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateResourceExplorerSetup",
}));

export type CreateViewError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates a view that users can query by using the Search operation. Results from queries that you make using this view include only resources that match the view's `Filters`. For more information about Amazon Web Services Resource Explorer views, see Managing views in the *Amazon Web Services Resource Explorer User Guide*.
 *
 * Only the principals with an IAM identity-based policy that grants `Allow` to the `Search` action on a `Resource` with the Amazon resource name (ARN) of this view can Search using views you create with this operation.
 */
export const createView: API.OperationMethod<
  CreateViewInput,
  CreateViewOutput,
  CreateViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17, __c2, 1) as any as S.Schema<CreateViewInput>,
  output: __S(18, __c2, 2) as any as S.Schema<CreateViewOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateView",
}));

export type DeleteIndexError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified index and turns off Amazon Web Services Resource Explorer in the specified Amazon Web Services Region. When you delete an index, Resource Explorer stops discovering and indexing resources in that Region. Resource Explorer also deletes all views in that Region. These actions occur as asynchronous background tasks. You can check to see when the actions are complete by using the GetIndex operation and checking the `Status` response value.
 *
 * If the index you delete is the aggregator index for the Amazon Web Services account, you must wait 24 hours before you can promote another local index to be the aggregator index for the account. Users can't perform account-wide searches using Resource Explorer until another aggregator index is configured.
 */
export const deleteIndex: API.OperationMethod<
  DeleteIndexInput,
  DeleteIndexOutput,
  DeleteIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(19, __c2, 3) as any as S.Schema<DeleteIndexInput>,
  output: __S(20, __c2, 4) as any as S.Schema<DeleteIndexOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIndex",
}));

export type DeleteResourceExplorerSetupError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a Resource Explorer setup configuration. This operation removes indexes and views from the specified Regions or all Regions where Resource Explorer is configured.
 */
export const deleteResourceExplorerSetup: API.OperationMethod<
  DeleteResourceExplorerSetupInput,
  DeleteResourceExplorerSetupOutput,
  DeleteResourceExplorerSetupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(21, __c2, 5) as any as S.Schema<DeleteResourceExplorerSetupInput>,
  output: __S(16, __c2, 0) as any as S.Schema<DeleteResourceExplorerSetupOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourceExplorerSetup",
}));

export type DeleteViewError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified view.
 *
 * If the specified view is the default view for its Amazon Web Services Region, then all Search operations in that Region must explicitly specify the view to use until you configure a new default by calling the AssociateDefaultView operation.
 */
export const deleteView: API.OperationMethod<
  DeleteViewInput,
  DeleteViewOutput,
  DeleteViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22, __c2, 6) as any as S.Schema<DeleteViewInput>,
  output: __S(23, __c2, 7) as any as S.Schema<DeleteViewOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteView",
}));

export type DisassociateDefaultViewError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * After you call this operation, the affected Amazon Web Services Region no longer has a default view. All Search operations in that Region must explicitly specify a view or the operation fails. You can configure a new default by calling the AssociateDefaultView operation.
 *
 * If an Amazon Web Services Region doesn't have a default view configured, then users must explicitly specify a view with every `Search` operation performed in that Region.
 */
export const disassociateDefaultView: API.OperationMethod<
  DisassociateDefaultViewRequest,
  DisassociateDefaultViewResponse,
  DisassociateDefaultViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24, __c3, 0) as any as S.Schema<DisassociateDefaultViewRequest>,
  output: __S(25, __c3, 1) as any as S.Schema<DisassociateDefaultViewResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateDefaultView",
}));

export type GetAccountLevelServiceConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Retrieves the status of your account's Amazon Web Services service access, and validates the service linked role required to access the multi-account search feature. Only the management account can invoke this API call.
 */
export const getAccountLevelServiceConfiguration: API.OperationMethod<
  GetAccountLevelServiceConfigurationRequest,
  GetAccountLevelServiceConfigurationOutput,
  GetAccountLevelServiceConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(26, __c3, 2) as any as S.Schema<GetAccountLevelServiceConfigurationRequest>,
  output: __S(28, __c3, 4) as any as S.Schema<GetAccountLevelServiceConfigurationOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccountLevelServiceConfiguration",
}));

export type GetDefaultViewError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the Amazon Resource Name (ARN) of the view that is the default for the Amazon Web Services Region in which you call this operation. You can then call GetView to retrieve the details of that view.
 */
export const getDefaultView: API.OperationMethod<
  GetDefaultViewRequest,
  GetDefaultViewOutput,
  GetDefaultViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(29, __c3, 5) as any as S.Schema<GetDefaultViewRequest>,
  output: __S(23, __c2, 7) as any as S.Schema<GetDefaultViewOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDefaultView",
}));

export type GetIndexError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about the Amazon Web Services Resource Explorer index in the Amazon Web Services Region in which you invoked the operation.
 */
export const getIndex: API.OperationMethod<
  GetIndexRequest,
  GetIndexOutput,
  GetIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(30, __c3, 6) as any as S.Schema<GetIndexRequest>,
  output: __S(31, __c3, 7) as any as S.Schema<GetIndexOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIndex",
}));

export type GetManagedViewError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details of the specified Amazon Web Services-managed view.
 */
export const getManagedView: API.OperationMethod<
  GetManagedViewInput,
  GetManagedViewOutput,
  GetManagedViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32, __c4, 0) as any as S.Schema<GetManagedViewInput>,
  output: __S(34, __c4, 2) as any as S.Schema<GetManagedViewOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetManagedView",
}));

export type GetResourceExplorerSetupError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the status and details of a Resource Explorer setup operation. This operation returns information about the progress of creating or deleting Resource Explorer configurations across Regions.
 */
export const getResourceExplorerSetup: API.PaginatedOperationMethod<
  GetResourceExplorerSetupInput,
  GetResourceExplorerSetupOutput,
  GetResourceExplorerSetupError,
  Credentials | HttpClient.HttpClient,
  RegionStatus
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(35, __c4, 3) as any as S.Schema<GetResourceExplorerSetupInput>,
  output: __S(42, __c5, 2) as any as S.Schema<GetResourceExplorerSetupOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourceExplorerSetup",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Regions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetServiceIndexError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about the Resource Explorer index in the current Amazon Web Services Region. This operation returns the ARN and type of the index if one exists.
 */
export const getServiceIndex: API.OperationMethod<
  GetServiceIndexRequest,
  GetServiceIndexOutput,
  GetServiceIndexError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43, __c5, 3) as any as S.Schema<GetServiceIndexRequest>,
  output: __S(44, __c5, 4) as any as S.Schema<GetServiceIndexOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServiceIndex",
}));

export type GetServiceViewError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about a specific Resource Explorer service view. This operation returns the configuration and properties of the specified view.
 */
export const getServiceView: API.OperationMethod<
  GetServiceViewInput,
  GetServiceViewOutput,
  GetServiceViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45, __c5, 5) as any as S.Schema<GetServiceViewInput>,
  output: __S(48, __c6, 0) as any as S.Schema<GetServiceViewOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServiceView",
}));

export type GetViewError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details of the specified view.
 */
export const getView: API.OperationMethod<
  GetViewInput,
  GetViewOutput,
  GetViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49, __c6, 1) as any as S.Schema<GetViewInput>,
  output: __S(50, __c6, 2) as any as S.Schema<GetViewOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetView",
}));

export type ListIndexesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of all of the indexes in Amazon Web Services Regions that are currently collecting resource information for Amazon Web Services Resource Explorer.
 */
export const listIndexes: API.PaginatedOperationMethod<
  ListIndexesInput,
  ListIndexesOutput,
  ListIndexesError,
  Credentials | HttpClient.HttpClient,
  Index
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(51, __c6, 3) as any as S.Schema<ListIndexesInput>,
  output: __S(53, __c6, 5) as any as S.Schema<ListIndexesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIndexes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Indexes",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListIndexesForMembersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of a member's indexes in all Amazon Web Services Regions that are currently collecting resource information for Amazon Web Services Resource Explorer. Only the management account or a delegated administrator with service access enabled can invoke this API call.
 */
export const listIndexesForMembers: API.PaginatedOperationMethod<
  ListIndexesForMembersInput,
  ListIndexesForMembersOutput,
  ListIndexesForMembersError,
  Credentials | HttpClient.HttpClient,
  MemberIndex
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(54, __c6, 6) as any as S.Schema<ListIndexesForMembersInput>,
  output: __S(57, __c7, 1) as any as S.Schema<ListIndexesForMembersOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIndexesForMembers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Indexes",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListManagedViewsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists the Amazon resource names (ARNs) of the Amazon Web Services-managed views available in the Amazon Web Services Region in which you call this operation.
 */
export const listManagedViews: API.PaginatedOperationMethod<
  ListManagedViewsInput,
  ListManagedViewsOutput,
  ListManagedViewsError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(58, __c7, 2) as any as S.Schema<ListManagedViewsInput>,
  output: __S(59, __c7, 3) as any as S.Schema<ListManagedViewsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListManagedViews",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ManagedViews",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListResourcesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of resources and their details that match the specified criteria. This query must use a view. If you don't explicitly specify a view, then Resource Explorer uses the default view for the Amazon Web Services Region in which you call this operation.
 */
export const listResources: API.PaginatedOperationMethod<
  ListResourcesInput,
  ListResourcesOutput,
  ListResourcesError,
  Credentials | HttpClient.HttpClient,
  Resource
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(60, __c7, 4) as any as S.Schema<ListResourcesInput>,
  output: __S(65, __c8, 1) as any as S.Schema<ListResourcesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResources",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Resources",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListServiceIndexesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all Resource Explorer indexes across the specified Amazon Web Services Regions. This operation returns information about indexes including their ARNs, types, and Regions.
 */
export const listServiceIndexes: API.PaginatedOperationMethod<
  ListServiceIndexesInput,
  ListServiceIndexesOutput,
  ListServiceIndexesError,
  Credentials | HttpClient.HttpClient,
  Index
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(66, __c8, 2) as any as S.Schema<ListServiceIndexesInput>,
  output: __S(53, __c6, 5) as any as S.Schema<ListServiceIndexesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServiceIndexes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Indexes",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListServiceViewsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all Resource Explorer service views available in the current Amazon Web Services account. This operation returns the ARNs of available service views.
 */
export const listServiceViews: API.PaginatedOperationMethod<
  ListServiceViewsInput,
  ListServiceViewsOutput,
  ListServiceViewsError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(67, __c8, 3) as any as S.Schema<ListServiceViewsInput>,
  output: __S(68, __c8, 4) as any as S.Schema<ListServiceViewsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServiceViews",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ServiceViews",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListStreamingAccessForServicesError =
  | AccessDeniedException
  | InternalServerException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of Amazon Web Services services that have been granted streaming access to your Resource Explorer data. Streaming access allows Amazon Web Services services to receive real-time updates about your resources as they are indexed by Resource Explorer.
 */
export const listStreamingAccessForServices: API.PaginatedOperationMethod<
  ListStreamingAccessForServicesInput,
  ListStreamingAccessForServicesOutput,
  ListStreamingAccessForServicesError,
  Credentials | HttpClient.HttpClient,
  StreamingAccessDetails
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(69, __c8, 5) as any as S.Schema<ListStreamingAccessForServicesInput>,
  output: __S(72, __c9, 0) as any as S.Schema<ListStreamingAccessForServicesOutput>,
  errors: [AccessDeniedException, InternalServerException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStreamingAccessForServices",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "StreamingAccessForServices",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSupportedResourceTypesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of all resource types currently supported by Amazon Web Services Resource Explorer.
 */
export const listSupportedResourceTypes: API.PaginatedOperationMethod<
  ListSupportedResourceTypesInput,
  ListSupportedResourceTypesOutput,
  ListSupportedResourceTypesError,
  Credentials | HttpClient.HttpClient,
  SupportedResourceType
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(73, __c9, 1) as any as S.Schema<ListSupportedResourceTypesInput>,
  output: __S(76, __c9, 4) as any as S.Schema<ListSupportedResourceTypesOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSupportedResourceTypes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ResourceTypes",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags that are attached to the specified resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77, __c9, 5) as any as S.Schema<ListTagsForResourceInput>,
  output: __S(78, __c9, 6) as any as S.Schema<ListTagsForResourceOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListViewsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the Amazon resource names (ARNs) of the views available in the Amazon Web Services Region in which you call this operation.
 *
 * Always check the `NextToken` response parameter for a `null` value when calling a paginated operation. These operations can occasionally return an empty set of results even when there are more results available. The `NextToken` response parameter value is `null` *only* when there are no more results to display.
 */
export const listViews: API.PaginatedOperationMethod<
  ListViewsInput,
  ListViewsOutput,
  ListViewsError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(79, __c9, 7) as any as S.Schema<ListViewsInput>,
  output: __S(80, __c10, 0) as any as S.Schema<ListViewsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListViews",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Views",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type SearchError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Searches for resources and displays details about all resources that match the specified criteria. You must specify a query string.
 *
 * All search queries must use a view. If you don't explicitly specify a view, then Amazon Web Services Resource Explorer uses the default view for the Amazon Web Services Region in which you call this operation. The results are the logical intersection of the results that match both the `QueryString` parameter supplied to this operation and the `SearchFilter` parameter attached to the view.
 *
 * For the complete syntax supported by the `QueryString` parameter, see Search query syntax reference for Resource Explorer.
 *
 * If your search results are empty, or are missing results that you think should be there, see Troubleshooting Resource Explorer search.
 */
export const search: API.PaginatedOperationMethod<
  SearchInput,
  SearchOutput,
  SearchError,
  Credentials | HttpClient.HttpClient,
  Resource
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(81, __c10, 1) as any as S.Schema<SearchInput>,
  output: __S(83, __c10, 3) as any as S.Schema<SearchOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Search",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Resources",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type TagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Adds one or more tag key and value pairs to an Amazon Web Services Resource Explorer view or index.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceOutput,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(84, __c10, 4) as any as S.Schema<TagResourceInput>,
  output: __S(85, __c10, 5) as any as S.Schema<TagResourceOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    UnauthorizedException,
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
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Removes one or more tag key and value pairs from an Amazon Web Services Resource Explorer view or index.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceOutput,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(86, __c10, 6) as any as S.Schema<UntagResourceInput>,
  output: __S(85, __c10, 5) as any as S.Schema<UntagResourceOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateIndexTypeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Changes the type of the index from one of the following types to the other. For more information about indexes and the role they perform in Amazon Web Services Resource Explorer, see Turning on cross-Region search by creating an aggregator index in the *Amazon Web Services Resource Explorer User Guide*.
 *
 * - ** `AGGREGATOR` index type**
 *
 * The index contains information about resources from all Amazon Web Services Regions in the Amazon Web Services account in which you've created a Resource Explorer index. Resource information from all other Regions is replicated to this Region's index.
 *
 * When you change the index type to `AGGREGATOR`, Resource Explorer turns on replication of all discovered resource information from the other Amazon Web Services Regions in your account to this index. You can then, from this Region only, perform resource search queries that span all Amazon Web Services Regions in the Amazon Web Services account. Turning on replication from all other Regions is performed by asynchronous background tasks. You can check the status of the asynchronous tasks by using the GetIndex operation. When the asynchronous tasks complete, the `Status` response of that operation changes from `UPDATING` to `ACTIVE`. After that, you can start to see results from other Amazon Web Services Regions in query results. However, it can take several hours for replication from all other Regions to complete.
 *
 * You can have only one aggregator index per Amazon Web Services account. Before you can promote a different index to be the aggregator index for the account, you must first demote the existing aggregator index to type `LOCAL`.
 *
 * - ** `LOCAL` index type**
 *
 * The index contains information about resources in only the Amazon Web Services Region in which the index exists. If an aggregator index in another Region exists, then information in this local index is replicated to the aggregator index.
 *
 * When you change the index type to `LOCAL`, Resource Explorer turns off the replication of resource information from all other Amazon Web Services Regions in the Amazon Web Services account to this Region. The aggregator index remains in the `UPDATING` state until all replication with other Regions successfully stops. You can check the status of the asynchronous task by using the GetIndex operation. When Resource Explorer successfully stops all replication with other Regions, the `Status` response of that operation changes from `UPDATING` to `ACTIVE`. Separately, the resource information from other Regions that was previously stored in the index is deleted within 30 days by another background task. Until that asynchronous task completes, some results from other Regions can continue to appear in search results.
 *
 * After you demote an aggregator index to a local index, you must wait 24 hours before you can promote another index to be the new aggregator index for the account.
 */
export const updateIndexType: API.OperationMethod<
  UpdateIndexTypeInput,
  UpdateIndexTypeOutput,
  UpdateIndexTypeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(87, __c10, 7) as any as S.Schema<UpdateIndexTypeInput>,
  output: __S(88, __c11, 0) as any as S.Schema<UpdateIndexTypeOutput>,
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
  operationName: "UpdateIndexType",
}));

export type UpdateViewError =
  | AccessDeniedException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Modifies some of the details of a view. You can change the filter string and the list of included properties. You can't change the name of the view.
 */
export const updateView: API.OperationMethod<
  UpdateViewInput,
  UpdateViewOutput,
  UpdateViewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(89, __c11, 1) as any as S.Schema<UpdateViewInput>,
  output: __S(18, __c2, 2) as any as S.Schema<UpdateViewOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateView",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ViewArn: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/AssociateDefaultView" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateDefaultViewInput",
      });
    case 1:
      return S.suspend(() => S.Struct({ ViewArn: S.optional(S.String) })).annotate({
        identifier: "AssociateDefaultViewOutput",
      });
    case 2:
      return S.Array(S.String);
    case 3:
      return S.suspend(() =>
        S.Struct({ ViewArns: S.optional(__S(2, __c0, 2)) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/BatchGetView" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "BatchGetViewInput" });
    case 4:
      return S.suspend(() => S.Struct({ Name: S.String })).annotate({
        identifier: "IncludedProperty",
      });
    case 5:
      return S.Array(__S(4, __c0, 4));
    case 6:
      return S.suspend(() => S.Struct({ FilterString: S.String })).annotate({
        identifier: "SearchFilter",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ViewArn: S.optional(S.String),
          ViewName: S.optional(S.String),
          Owner: S.optional(S.String),
          LastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Scope: S.optional(S.String),
          IncludedProperties: S.optional(__S(5, __c0, 5)),
          Filters: S.optional(__S(6, __c0, 6)),
        }),
      ).annotate({ identifier: "View" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(7, __c0, 7));
    case 1:
      return S.suspend(() => S.Struct({ ViewArn: S.String, ErrorMessage: S.String })).annotate({
        identifier: "BatchGetViewError",
      });
    case 2:
      return S.Array(__S(9, __c1, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ Views: S.optional(__S(8, __c1, 0)), Errors: S.optional(__S(10, __c1, 2)) }),
      ).annotate({ identifier: "BatchGetViewOutput" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(__S(12, __c1, 4)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreateIndex" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateIndexInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          State: S.optional(S.String),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "CreateIndexOutput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          RegionList: __S(2, __c0, 2),
          AggregatorRegions: S.optional(__S(2, __c0, 2)),
          ViewName: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/CreateResourceExplorerSetup" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateResourceExplorerSetupInput",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ TaskId: S.String })).annotate({
        identifier: "CreateResourceExplorerSetupOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ViewName: S.String,
          IncludedProperties: S.optional(__S(5, __c0, 5)),
          Scope: S.optional(S.String),
          Filters: S.optional(__S(6, __c0, 6)),
          Tags: S.optional(__S(12, __c1, 4)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/CreateView" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateViewInput" });
    case 2:
      return S.suspend(() => S.Struct({ View: S.optional(__S(7, __c0, 7)) })).annotate({
        identifier: "CreateViewOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Arn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeleteIndex" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteIndexInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          State: S.optional(S.String),
          LastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "DeleteIndexOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RegionList: S.optional(__S(2, __c0, 2)),
          DeleteInAllRegions: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DeleteResourceExplorerSetup" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteResourceExplorerSetupInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ViewArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/DeleteView" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteViewInput" });
    case 7:
      return S.suspend(() => S.Struct({ ViewArn: S.optional(S.String) })).annotate({
        identifier: "DeleteViewOutput",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/DisassociateDefaultView" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateDefaultViewRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DisassociateDefaultViewResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetAccountLevelServiceConfiguration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAccountLevelServiceConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ AWSServiceAccessStatus: S.String, ServiceLinkedRole: S.optional(S.String) }),
      ).annotate({ identifier: "OrgConfiguration" });
    case 4:
      return S.suspend(() => S.Struct({ OrgConfiguration: S.optional(__S(27, __c3, 3)) })).annotate(
        {
          identifier: "GetAccountLevelServiceConfigurationOutput",
        },
      );
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetDefaultView" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetDefaultViewRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetIndex" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetIndexRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Type: S.optional(S.String),
          State: S.optional(S.String),
          ReplicatingFrom: S.optional(__S(2, __c0, 2)),
          ReplicatingTo: S.optional(__S(2, __c0, 2)),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          LastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Tags: S.optional(__S(12, __c1, 4)),
        }),
      ).annotate({ identifier: "GetIndexOutput" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ManagedViewArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetManagedView" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetManagedViewInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ManagedViewArn: S.optional(S.String),
          ManagedViewName: S.optional(S.String),
          TrustedService: S.optional(S.String),
          LastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Owner: S.optional(S.String),
          Scope: S.optional(S.String),
          IncludedProperties: S.optional(__S(5, __c0, 5)),
          Filters: S.optional(__S(6, __c0, 6)),
          ResourcePolicy: S.optional(S.String),
          Version: S.optional(S.String),
        }),
      ).annotate({ identifier: "ManagedView" });
    case 2:
      return S.suspend(() => S.Struct({ ManagedView: S.optional(__S(33, __c4, 1)) })).annotate({
        identifier: "GetManagedViewOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TaskId: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetResourceExplorerSetup" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetResourceExplorerSetupInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Region: S.optional(S.String),
          Arn: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "Index" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.String), Message: S.optional(S.String) }),
      ).annotate({ identifier: "ErrorDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          Index: S.optional(__S(36, __c4, 4)),
          ErrorDetails: S.optional(__S(37, __c4, 5)),
        }),
      ).annotate({ identifier: "IndexStatus" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          View: S.optional(__S(7, __c0, 7)),
          ErrorDetails: S.optional(__S(37, __c4, 5)),
        }),
      ).annotate({ identifier: "ViewStatus" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Region: S.optional(S.String),
          Index: S.optional(__S(38, __c4, 6)),
          View: S.optional(__S(39, __c4, 7)),
        }),
      ).annotate({ identifier: "RegionStatus" });
    case 1:
      return S.Array(__S(40, __c5, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ Regions: S.optional(__S(41, __c5, 1)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "GetResourceExplorerSetupOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetServiceIndex" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetServiceIndexRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Type: S.optional(S.String) }),
      ).annotate({ identifier: "GetServiceIndexOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ServiceViewArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetServiceView" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetServiceViewInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ServicePrincipal: S.optional(S.String),
          RecorderName: S.optional(S.String),
          RecorderType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ServiceLinkedRecorderInfo",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ServiceViewArn: S.String,
          ServiceViewName: S.optional(S.String),
          Filters: S.optional(__S(6, __c0, 6)),
          IncludedProperties: S.optional(__S(5, __c0, 5)),
          StreamingAccessForService: S.optional(S.String),
          ScopeType: S.optional(S.String),
          ServiceLinkedRecorder: S.optional(__S(46, __c5, 6)),
        }),
      ).annotate({ identifier: "ServiceView" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ View: __S(47, __c5, 7) })).annotate({
        identifier: "GetServiceViewOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ViewArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/GetView" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetViewInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ View: S.optional(__S(7, __c0, 7)), Tags: S.optional(__S(12, __c1, 4)) }),
      ).annotate({ identifier: "GetViewOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          Regions: S.optional(__S(2, __c0, 2)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListIndexes" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListIndexesInput" });
    case 4:
      return S.Array(__S(36, __c4, 4));
    case 5:
      return S.suspend(() =>
        S.Struct({ Indexes: S.optional(__S(52, __c6, 4)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListIndexesOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountIdList: __S(2, __c0, 2),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListIndexesForMembers" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListIndexesForMembersInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          Region: S.optional(S.String),
          Arn: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "MemberIndex" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55, __c6, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ Indexes: S.optional(__S(56, __c7, 0)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListIndexesForMembersOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          ServicePrincipal: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListManagedViews" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListManagedViewsInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), ManagedViews: S.optional(__S(2, __c0, 2)) }),
      ).annotate({ identifier: "ListManagedViewsOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(__S(6, __c0, 6)),
          MaxResults: S.optional(S.Number),
          ViewArn: S.optional(S.String),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListResources" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListResourcesInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          LastReportedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Data: S.optional(S.Any),
        }),
      ).annotate({ identifier: "ResourceProperty" });
    case 6:
      return S.Array(__S(61, __c7, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          OwningAccountId: S.optional(S.String),
          Region: S.optional(S.String),
          ResourceType: S.optional(S.String),
          Service: S.optional(S.String),
          CfnResourceType: S.optional(S.String),
          LastReportedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Properties: S.optional(__S(62, __c7, 6)),
        }),
      ).annotate({ identifier: "Resource" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(63, __c7, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Resources: S.optional(__S(64, __c8, 0)),
          NextToken: S.optional(S.String),
          ViewArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListResourcesOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Regions: S.optional(__S(2, __c0, 2)),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListServiceIndexes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListServiceIndexesInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListServiceViews" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListServiceViewsInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), ServiceViews: S.optional(__S(2, __c0, 2)) }),
      ).annotate({ identifier: "ListServiceViewsOutput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListStreamingAccessForServices" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListStreamingAccessForServicesInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ServicePrincipal: S.String,
          CreatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "StreamingAccessDetails" });
    case 7:
      return S.Array(__S(70, __c8, 6));
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StreamingAccessForServices: __S(71, __c8, 7),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListStreamingAccessForServicesOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListSupportedResourceTypes" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSupportedResourceTypesInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Service: S.optional(S.String),
          ResourceType: S.optional(S.String),
          CFNResourceTypes: S.optional(__S(2, __c0, 2)),
        }),
      ).annotate({ identifier: "SupportedResourceType" });
    case 3:
      return S.Array(__S(74, __c9, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ ResourceTypes: S.optional(__S(75, __c9, 3)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListSupportedResourceTypesOutput",
      });
    case 5:
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
      ).annotate({ identifier: "ListTagsForResourceInput" });
    case 6:
      return S.suspend(() => S.Struct({ Tags: S.optional(__S(12, __c1, 4)) })).annotate({
        identifier: "ListTagsForResourceOutput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), MaxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ListViews" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListViewsInput" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Views: S.optional(__S(2, __c0, 2)), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListViewsOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          QueryString: SensitiveString,
          MaxResults: S.optional(S.Number),
          ViewArn: S.optional(S.String),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/Search" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SearchInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ TotalResources: S.optional(S.Number), Complete: S.optional(S.Boolean) }),
      ).annotate({ identifier: "ResourceCount" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Resources: S.optional(__S(64, __c8, 0)),
          NextToken: S.optional(S.String),
          ViewArn: S.optional(S.String),
          Count: S.optional(__S(82, __c10, 2)),
        }),
      ).annotate({ identifier: "SearchOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          Tags: S.optional(__S(12, __c1, 4)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceInput" });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(2, __c0, 2).pipe(T.HttpQuery("tagKeys")),
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
      ).annotate({ identifier: "UntagResourceInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Arn: S.String, Type: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UpdateIndexType" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateIndexTypeInput" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Type: S.optional(S.String),
          State: S.optional(S.String),
          LastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "UpdateIndexTypeOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ViewArn: S.String,
          IncludedProperties: S.optional(__S(5, __c0, 5)),
          Filters: S.optional(__S(6, __c0, 6)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/UpdateView" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateViewInput" });
    case 2:
      return S.suspend(() => S.Struct({ Name: S.String, ValidationIssue: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 3:
      return S.Array(__S(90, __c11, 2));
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
