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
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "QApps", serviceShapeName: "QAppsService" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "qapps" });
const ver = /*@__PURE__*/ T.ServiceVersion("2023-11-27");
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
              `https://data.qapps-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://data.qapps-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://data.qapps.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://data.qapps.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
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
export class ContentTooLargeException
  extends /*@__PURE__*/ S.TaggedError<ContentTooLargeException>()(
    "ContentTooLargeException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(413),
  ).pipe(C.withBadRequestError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
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
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      serviceCode: S.String,
      quotaCode: S.String,
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class UnauthorizedException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedException>()(
    "UnauthorizedException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type InstanceId = string;
export type UUID = string;
export interface AssociateLibraryItemReviewInput {
  instanceId: string;
  libraryItemId: string;
}
export interface AssociateLibraryItemReviewResponse {}
export interface AssociateQAppWithUserInput {
  instanceId: string;
  appId: string;
}
export interface AssociateQAppWithUserResponse {}
export interface BatchCreateCategoryInputCategory {
  id?: string;
  title: string;
  color?: string;
}
export type BatchCreateCategoryInputCategoryList = BatchCreateCategoryInputCategory[];
export interface BatchCreateCategoryInput {
  instanceId: string;
  categories: BatchCreateCategoryInputCategory[];
}
export interface BatchCreateCategoryResponse {}
export type DeleteCategoryInputList = string[];
export interface BatchDeleteCategoryInput {
  instanceId: string;
  categories: string[];
}
export interface BatchDeleteCategoryResponse {}
export interface CategoryInput {
  id: string;
  title: string;
  color?: string;
}
export type CategoryListInput = CategoryInput[];
export interface BatchUpdateCategoryInput {
  instanceId: string;
  categories: CategoryInput[];
}
export interface BatchUpdateCategoryResponse {}
export type AppVersion = number;
export type CategoryIdList = string[];
export interface CreateLibraryItemInput {
  instanceId: string;
  appId: string;
  appVersion: number;
  categories: string[];
}
export type QAppsTimestamp = Date;
export interface CreateLibraryItemOutput {
  libraryItemId: string;
  status: string;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
  ratingCount: number;
  isVerified?: boolean;
}
export type Filename = string;
export type DocumentScope = "APPLICATION" | "SESSION" | (string & {});
export interface CreatePresignedUrlInput {
  instanceId: string;
  cardId: string;
  appId: string;
  fileContentsSha256: string;
  fileName: string;
  scope: DocumentScope;
  sessionId?: string;
}
export type PresignedUrlFields = { [key: string]: string | undefined };
export interface CreatePresignedUrlOutput {
  fileId: string;
  presignedUrl: string;
  presignedUrlFields: { [key: string]: string | undefined };
  presignedUrlExpiration: Date;
}
export type Title = string;
export type Description = string;
export type CardType =
  | "text-input"
  | "q-query"
  | "file-upload"
  | "q-plugin"
  | "form-input"
  | (string & {});
export type Placeholder = string;
export type Default = string;
export interface TextInputCardInput {
  title: string;
  id: string;
  type: CardType;
  placeholder?: string;
  defaultValue?: string;
}
export type Prompt = string;
export type CardOutputSource = "approved-sources" | "llm" | (string & {});
export type AttributeFilters = AttributeFilter[];
export type DocumentAttributeKey = string;
export type DocumentAttributeStringValue = string;
export type PlatoString = string;
export type DocumentAttributeStringListValue = string[];
export type DocumentAttributeValue =
  | { stringValue: string; stringListValue?: never; longValue?: never; dateValue?: never }
  | { stringValue?: never; stringListValue: string[]; longValue?: never; dateValue?: never }
  | { stringValue?: never; stringListValue?: never; longValue: number; dateValue?: never }
  | { stringValue?: never; stringListValue?: never; longValue?: never; dateValue: Date };
export interface DocumentAttribute {
  name: string;
  value: DocumentAttributeValue;
}
export interface AttributeFilter {
  andAllFilters?: AttributeFilter[];
  orAllFilters?: AttributeFilter[];
  notFilter?: AttributeFilter;
  equalsTo?: DocumentAttribute;
  containsAll?: DocumentAttribute;
  containsAny?: DocumentAttribute;
  greaterThan?: DocumentAttribute;
  greaterThanOrEquals?: DocumentAttribute;
  lessThan?: DocumentAttribute;
  lessThanOrEquals?: DocumentAttribute;
}
export interface QQueryCardInput {
  title: string;
  id: string;
  type: CardType;
  prompt: string;
  outputSource?: CardOutputSource;
  attributeFilter?: AttributeFilter;
}
export type PluginId = string;
export type ActionIdentifier = string;
export interface QPluginCardInput {
  title: string;
  id: string;
  type: CardType;
  prompt: string;
  pluginId: string;
  actionIdentifier?: string;
}
export interface FileUploadCardInput {
  title: string;
  id: string;
  type: CardType;
  filename?: string;
  fileId?: string;
  allowOverride?: boolean;
}
export type FormInputCardMetadataSchema = unknown;
export interface FormInputCardMetadata {
  schema: any;
}
export type InputCardComputeMode = "append" | "replace" | (string & {});
export interface FormInputCardInput {
  title: string;
  id: string;
  type: CardType;
  metadata: FormInputCardMetadata;
  computeMode?: InputCardComputeMode;
}
export type CardInput =
  | {
      textInput: TextInputCardInput;
      qQuery?: never;
      qPlugin?: never;
      fileUpload?: never;
      formInput?: never;
    }
  | {
      textInput?: never;
      qQuery: QQueryCardInput;
      qPlugin?: never;
      fileUpload?: never;
      formInput?: never;
    }
  | {
      textInput?: never;
      qQuery?: never;
      qPlugin: QPluginCardInput;
      fileUpload?: never;
      formInput?: never;
    }
  | {
      textInput?: never;
      qQuery?: never;
      qPlugin?: never;
      fileUpload: FileUploadCardInput;
      formInput?: never;
    }
  | {
      textInput?: never;
      qQuery?: never;
      qPlugin?: never;
      fileUpload?: never;
      formInput: FormInputCardInput;
    };
export type CardList = CardInput[];
export type InitialPrompt = string;
export interface AppDefinitionInput {
  cards: CardInput[];
  initialPrompt?: string;
}
export type TagMap = { [key: string]: string | undefined };
export interface CreateQAppInput {
  instanceId: string;
  title: string;
  description?: string;
  appDefinition: AppDefinitionInput;
  tags?: { [key: string]: string | undefined };
}
export type AppArn = string;
export type AppStatus = "PUBLISHED" | "DRAFT" | "DELETED" | (string & {});
export type AppRequiredCapability =
  | "FileUpload"
  | "CreatorMode"
  | "RetrievalMode"
  | "PluginMode"
  | (string & {});
export type AppRequiredCapabilities = AppRequiredCapability[];
export interface CreateQAppOutput {
  appId: string;
  appArn: string;
  title: string;
  description?: string;
  initialPrompt?: string;
  appVersion: number;
  status: AppStatus;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  requiredCapabilities?: AppRequiredCapability[];
}
export interface DeleteLibraryItemInput {
  instanceId: string;
  libraryItemId: string;
}
export interface DeleteLibraryItemResponse {}
export interface DeleteQAppInput {
  instanceId: string;
  appId: string;
}
export interface DeleteQAppResponse {}
export interface DescribeQAppPermissionsInput {
  instanceId: string;
  appId: string;
}
export type Action = "read" | "write" | (string & {});
export type UserType = "owner" | "user" | (string & {});
export interface PrincipalOutput {
  userId?: string;
  userType?: UserType;
  email?: string;
}
export interface PermissionOutput {
  action: Action;
  principal: PrincipalOutput;
}
export type PermissionsOutputList = PermissionOutput[];
export interface DescribeQAppPermissionsOutput {
  resourceArn?: string;
  appId?: string;
  permissions?: PermissionOutput[];
}
export interface DisassociateLibraryItemReviewInput {
  instanceId: string;
  libraryItemId: string;
}
export interface DisassociateLibraryItemReviewResponse {}
export interface DisassociateQAppFromUserInput {
  instanceId: string;
  appId: string;
}
export interface DisassociateQAppFromUserResponse {}
export interface ExportQAppSessionDataInput {
  instanceId: string;
  sessionId: string;
}
export interface ExportQAppSessionDataOutput {
  csvFileLink: string;
  expiresAt: Date;
  sessionArn: string;
}
export interface GetLibraryItemInput {
  instanceId: string;
  libraryItemId: string;
  appId?: string;
}
export interface Category {
  id: string;
  title: string;
  color?: string;
  appCount?: number;
}
export type CategoryList = Category[];
export interface GetLibraryItemOutput {
  libraryItemId: string;
  appId: string;
  appVersion: number;
  categories: Category[];
  status: string;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
  ratingCount: number;
  isRatedByUser?: boolean;
  userCount?: number;
  isVerified?: boolean;
}
export interface GetQAppInput {
  instanceId: string;
  appId: string;
  appVersion?: number;
}
export type DependencyList = string[];
export interface TextInputCard {
  id: string;
  title: string;
  dependencies: string[];
  type: CardType;
  placeholder?: string;
  defaultValue?: string;
}
export type MemoryReferenceList = string[];
export interface QQueryCard {
  id: string;
  title: string;
  dependencies: string[];
  type: CardType;
  prompt: string;
  outputSource: CardOutputSource;
  attributeFilter?: AttributeFilter;
  memoryReferences?: string[];
}
export type PluginType =
  | "SERVICE_NOW"
  | "SALESFORCE"
  | "JIRA"
  | "ZENDESK"
  | "CUSTOM"
  | "ASANA"
  | "ATLASSIAN_CONFLUENCE"
  | "GOOGLE_CALENDAR"
  | "JIRA_CLOUD"
  | "MICROSOFT_EXCHANGE"
  | "MICROSOFT_TEAMS"
  | "PAGERDUTY_ADVANCE"
  | "SALESFORCE_CRM"
  | "SERVICENOW_NOW_PLATFORM"
  | "SMARTSHEET"
  | "ZENDESK_SUITE"
  | (string & {});
export interface QPluginCard {
  id: string;
  title: string;
  dependencies: string[];
  type: CardType;
  prompt: string;
  pluginType: PluginType;
  pluginId: string;
  actionIdentifier?: string;
}
export interface FileUploadCard {
  id: string;
  title: string;
  dependencies: string[];
  type: CardType;
  filename?: string;
  fileId?: string;
  allowOverride?: boolean;
}
export interface FormInputCard {
  id: string;
  title: string;
  dependencies: string[];
  type: CardType;
  metadata: FormInputCardMetadata;
  computeMode?: InputCardComputeMode;
}
export type Card =
  | {
      textInput: TextInputCard;
      qQuery?: never;
      qPlugin?: never;
      fileUpload?: never;
      formInput?: never;
    }
  | {
      textInput?: never;
      qQuery: QQueryCard;
      qPlugin?: never;
      fileUpload?: never;
      formInput?: never;
    }
  | {
      textInput?: never;
      qQuery?: never;
      qPlugin: QPluginCard;
      fileUpload?: never;
      formInput?: never;
    }
  | {
      textInput?: never;
      qQuery?: never;
      qPlugin?: never;
      fileUpload: FileUploadCard;
      formInput?: never;
    }
  | {
      textInput?: never;
      qQuery?: never;
      qPlugin?: never;
      fileUpload?: never;
      formInput: FormInputCard;
    };
export type CardModelList = Card[];
export interface AppDefinition {
  appDefinitionVersion: string;
  cards: Card[];
  canEdit?: boolean;
}
export interface GetQAppOutput {
  appId: string;
  appArn: string;
  title: string;
  description?: string;
  initialPrompt?: string;
  appVersion: number;
  status: AppStatus;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  requiredCapabilities?: AppRequiredCapability[];
  appDefinition: AppDefinition;
}
export interface GetQAppSessionInput {
  instanceId: string;
  sessionId: string;
}
export type SessionName = string;
export type ExecutionStatus = "IN_PROGRESS" | "WAITING" | "COMPLETED" | "ERROR" | (string & {});
export interface Submission {
  value?: any;
  submissionId?: string;
  timestamp?: Date;
}
export type SubmissionList = Submission[];
export interface CardStatus {
  currentState: ExecutionStatus;
  currentValue: string;
  submissions?: Submission[];
}
export type CardStatusMap = { [key: string]: CardStatus | undefined };
export interface GetQAppSessionOutput {
  sessionId: string;
  sessionArn: string;
  sessionName?: string;
  appVersion?: number;
  latestPublishedAppVersion?: number;
  status: ExecutionStatus;
  cardStatus: { [key: string]: CardStatus | undefined };
  userIsHost?: boolean;
}
export interface GetQAppSessionMetadataInput {
  instanceId: string;
  sessionId: string;
}
export type SessionSharingEnabled = boolean;
export type SessionSharingAcceptResponses = boolean;
export type SessionSharingRevealCards = boolean;
export interface SessionSharingConfiguration {
  enabled: boolean;
  acceptResponses?: boolean;
  revealCards?: boolean;
}
export interface GetQAppSessionMetadataOutput {
  sessionId: string;
  sessionArn: string;
  sessionName?: string;
  sharingConfiguration: SessionSharingConfiguration;
  sessionOwner?: boolean;
}
export interface ImportDocumentInput {
  instanceId: string;
  cardId: string;
  appId: string;
  fileContentsBase64: string;
  fileName: string;
  scope: DocumentScope;
  sessionId?: string;
}
export interface ImportDocumentOutput {
  fileId?: string;
}
export interface ListCategoriesInput {
  instanceId: string;
}
export type CategoriesList = Category[];
export interface ListCategoriesOutput {
  categories?: Category[];
}
export type PageLimit = number;
export type PaginationToken = string;
export interface ListLibraryItemsInput {
  instanceId: string;
  limit?: number;
  nextToken?: string;
  categoryId?: string;
}
export interface LibraryItemMember {
  libraryItemId: string;
  appId: string;
  appVersion: number;
  categories: Category[];
  status: string;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
  ratingCount: number;
  isRatedByUser?: boolean;
  userCount?: number;
  isVerified?: boolean;
}
export type LibraryItemList = LibraryItemMember[];
export interface ListLibraryItemsOutput {
  libraryItems?: LibraryItemMember[];
  nextToken?: string;
}
export interface ListQAppsInput {
  instanceId: string;
  limit?: number;
  nextToken?: string;
}
export interface UserAppItem {
  appId: string;
  appArn: string;
  title: string;
  description?: string;
  createdAt: Date;
  canEdit?: boolean;
  status?: string;
  isVerified?: boolean;
}
export type UserAppsList = UserAppItem[];
export interface ListQAppsOutput {
  apps: UserAppItem[];
  nextToken?: string;
}
export interface ListQAppSessionDataInput {
  instanceId: string;
  sessionId: string;
}
export type UserId = string;
export interface User {
  userId?: string;
}
export interface QAppSessionData {
  cardId: string;
  value?: any;
  user: User;
  submissionId?: string;
  timestamp?: Date;
}
export type QAppSessionDataList = QAppSessionData[];
export interface ListQAppSessionDataOutput {
  sessionId: string;
  sessionArn: string;
  sessionData?: QAppSessionData[];
  nextToken?: string;
}
export type AmazonResourceName = string;
export interface ListTagsForResourceRequest {
  resourceARN: string;
}
export type TagKey = string;
export type TagValue = string;
export type Tags = { [key: string]: string | undefined };
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export type Sender = "USER" | "SYSTEM" | (string & {});
export interface ConversationMessage {
  body: string;
  type: Sender;
}
export type MessageList = ConversationMessage[];
export type PredictQAppInputOptions =
  | { conversation: ConversationMessage[]; problemStatement?: never }
  | { conversation?: never; problemStatement: string };
export interface PredictQAppInput {
  instanceId: string;
  options?: PredictQAppInputOptions;
}
export interface PredictAppDefinition {
  title: string;
  description?: string;
  appDefinition: AppDefinitionInput;
}
export interface PredictQAppOutput {
  app: PredictAppDefinition;
  problemStatement: string;
}
export type SubmissionMutationKind = "edit" | "delete" | "add" | (string & {});
export interface SubmissionMutation {
  submissionId: string;
  mutationType: SubmissionMutationKind;
}
export interface CardValue {
  cardId: string;
  value: string;
  submissionMutation?: SubmissionMutation;
}
export type CardValueList = CardValue[];
export interface StartQAppSessionInput {
  instanceId: string;
  appId: string;
  appVersion: number;
  initialValues?: CardValue[];
  sessionId?: string;
  tags?: { [key: string]: string | undefined };
}
export interface StartQAppSessionOutput {
  sessionId: string;
  sessionArn: string;
}
export interface StopQAppSessionInput {
  instanceId: string;
  sessionId: string;
}
export interface StopQAppSessionResponse {}
export interface TagResourceRequest {
  resourceARN: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKeys = string[];
export interface UntagResourceRequest {
  resourceARN: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export type LibraryItemStatus = "PUBLISHED" | "DISABLED" | (string & {});
export interface UpdateLibraryItemInput {
  instanceId: string;
  libraryItemId: string;
  status?: LibraryItemStatus;
  categories?: string[];
}
export interface UpdateLibraryItemOutput {
  libraryItemId: string;
  appId: string;
  appVersion: number;
  categories: Category[];
  status: string;
  createdAt: Date;
  createdBy: string;
  updatedAt?: Date;
  updatedBy?: string;
  ratingCount: number;
  isRatedByUser?: boolean;
  userCount?: number;
  isVerified?: boolean;
}
export interface UpdateLibraryItemMetadataInput {
  instanceId: string;
  libraryItemId: string;
  isVerified?: boolean;
}
export interface UpdateLibraryItemMetadataResponse {}
export interface UpdateQAppInput {
  instanceId: string;
  appId: string;
  title?: string;
  description?: string;
  appDefinition?: AppDefinitionInput;
}
export interface UpdateQAppOutput {
  appId: string;
  appArn: string;
  title: string;
  description?: string;
  initialPrompt?: string;
  appVersion: number;
  status: AppStatus;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
  requiredCapabilities?: AppRequiredCapability[];
}
export interface PermissionInput {
  action: Action;
  principal: string;
}
export type PermissionsInputList = PermissionInput[];
export interface UpdateQAppPermissionsInput {
  instanceId: string;
  appId: string;
  grantPermissions?: PermissionInput[];
  revokePermissions?: PermissionInput[];
}
export interface UpdateQAppPermissionsOutput {
  resourceArn?: string;
  appId?: string;
  permissions?: PermissionOutput[];
}
export interface UpdateQAppSessionInput {
  instanceId: string;
  sessionId: string;
  values?: CardValue[];
}
export interface UpdateQAppSessionOutput {
  sessionId: string;
  sessionArn: string;
}
export interface UpdateQAppSessionMetadataInput {
  instanceId: string;
  sessionId: string;
  sessionName?: string;
  sharingConfiguration: SessionSharingConfiguration;
}
export interface UpdateQAppSessionMetadataOutput {
  sessionId: string;
  sessionArn: string;
  sessionName?: string;
  sharingConfiguration: SessionSharingConfiguration;
}
export type AssociateLibraryItemReviewError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Associates a rating or review for a library item with the user submitting the request. This increments the rating count for the specified library item.
 */
export const associateLibraryItemReview: API.OperationMethod<
  AssociateLibraryItemReviewInput,
  AssociateLibraryItemReviewResponse,
  AssociateLibraryItemReviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<AssociateLibraryItemReviewInput>,
  output: __S(1) as any as S.Schema<AssociateLibraryItemReviewResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateLibraryItemReview",
}));

export type AssociateQAppWithUserError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * This operation creates a link between the user's identity calling the operation and a specific Q App. This is useful to mark the Q App as a *favorite* for the user if the user doesn't own the Amazon Q App so they can still run it and see it in their inventory of Q Apps.
 */
export const associateQAppWithUser: API.OperationMethod<
  AssociateQAppWithUserInput,
  AssociateQAppWithUserResponse,
  AssociateQAppWithUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<AssociateQAppWithUserInput>,
  output: __S(3) as any as S.Schema<AssociateQAppWithUserResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateQAppWithUser",
}));

export type BatchCreateCategoryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates Categories for the Amazon Q Business application environment instance. Web experience users use Categories to tag and filter library items. For more information, see Custom labels for Amazon Q Apps.
 */
export const batchCreateCategory: API.OperationMethod<
  BatchCreateCategoryInput,
  BatchCreateCategoryResponse,
  BatchCreateCategoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6) as any as S.Schema<BatchCreateCategoryInput>,
  output: __S(3) as any as S.Schema<BatchCreateCategoryResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchCreateCategory",
}));

export type BatchDeleteCategoryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes Categories for the Amazon Q Business application environment instance. Web experience users use Categories to tag and filter library items. For more information, see Custom labels for Amazon Q Apps.
 */
export const batchDeleteCategory: API.OperationMethod<
  BatchDeleteCategoryInput,
  BatchDeleteCategoryResponse,
  BatchDeleteCategoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(8) as any as S.Schema<BatchDeleteCategoryInput>,
  output: __S(3) as any as S.Schema<BatchDeleteCategoryResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteCategory",
}));

export type BatchUpdateCategoryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates Categories for the Amazon Q Business application environment instance. Web experience users use Categories to tag and filter library items. For more information, see Custom labels for Amazon Q Apps.
 */
export const batchUpdateCategory: API.OperationMethod<
  BatchUpdateCategoryInput,
  BatchUpdateCategoryResponse,
  BatchUpdateCategoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11) as any as S.Schema<BatchUpdateCategoryInput>,
  output: __S(3) as any as S.Schema<BatchUpdateCategoryResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateCategory",
}));

export type CreateLibraryItemError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new library item for an Amazon Q App, allowing it to be discovered and used by other allowed users.
 */
export const createLibraryItem: API.OperationMethod<
  CreateLibraryItemInput,
  CreateLibraryItemOutput,
  CreateLibraryItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12) as any as S.Schema<CreateLibraryItemInput>,
  output: __S(13) as any as S.Schema<CreateLibraryItemOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLibraryItem",
}));

export type CreatePresignedUrlError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates a presigned URL for an S3 POST operation to upload a file. You can use this URL to set a default file for a `FileUploadCard` in a Q App definition or to provide a file for a single Q App run. The `scope` parameter determines how the file will be used, either at the app definition level or the app session level.
 *
 * The IAM permissions are derived from the `qapps:ImportDocument` action. For more information on the IAM policy for Amazon Q Apps, see IAM permissions for using Amazon Q Apps.
 */
export const createPresignedUrl: API.OperationMethod<
  CreatePresignedUrlInput,
  CreatePresignedUrlOutput,
  CreatePresignedUrlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14) as any as S.Schema<CreatePresignedUrlInput>,
  output: __S(16) as any as S.Schema<CreatePresignedUrlOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePresignedUrl",
}));

export type CreateQAppError =
  | AccessDeniedException
  | ConflictException
  | ContentTooLargeException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new Amazon Q App based on the provided definition. The Q App definition specifies the cards and flow of the Q App. This operation also calculates the dependencies between the cards by inspecting the references in the prompts.
 */
export const createQApp: API.OperationMethod<
  CreateQAppInput,
  CreateQAppOutput,
  CreateQAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31) as any as S.Schema<CreateQAppInput>,
  output: __S(33) as any as S.Schema<CreateQAppOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ContentTooLargeException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateQApp",
}));

export type DeleteLibraryItemError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a library item for an Amazon Q App, removing it from the library so it can no longer be discovered or used by other users.
 */
export const deleteLibraryItem: API.OperationMethod<
  DeleteLibraryItemInput,
  DeleteLibraryItemResponse,
  DeleteLibraryItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(34) as any as S.Schema<DeleteLibraryItemInput>,
  output: __S(3) as any as S.Schema<DeleteLibraryItemResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLibraryItem",
}));

export type DeleteQAppError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an Amazon Q App owned by the user. If the Q App was previously published to the library, it is also removed from the library.
 */
export const deleteQApp: API.OperationMethod<
  DeleteQAppInput,
  DeleteQAppResponse,
  DeleteQAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35) as any as S.Schema<DeleteQAppInput>,
  output: __S(3) as any as S.Schema<DeleteQAppResponse>,
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
  operationName: "DeleteQApp",
}));

export type DescribeQAppPermissionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Describes read permissions for a Amazon Q App in Amazon Q Business application environment instance.
 */
export const describeQAppPermissions: API.OperationMethod<
  DescribeQAppPermissionsInput,
  DescribeQAppPermissionsOutput,
  DescribeQAppPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(36) as any as S.Schema<DescribeQAppPermissionsInput>,
  output: __S(40) as any as S.Schema<DescribeQAppPermissionsOutput>,
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
  operationName: "DescribeQAppPermissions",
}));

export type DisassociateLibraryItemReviewError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Removes a rating or review previously submitted by the user for a library item.
 */
export const disassociateLibraryItemReview: API.OperationMethod<
  DisassociateLibraryItemReviewInput,
  DisassociateLibraryItemReviewResponse,
  DisassociateLibraryItemReviewError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41) as any as S.Schema<DisassociateLibraryItemReviewInput>,
  output: __S(1) as any as S.Schema<DisassociateLibraryItemReviewResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateLibraryItemReview",
}));

export type DisassociateQAppFromUserError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a Q App from a user removing the user's access to run the Q App.
 */
export const disassociateQAppFromUser: API.OperationMethod<
  DisassociateQAppFromUserInput,
  DisassociateQAppFromUserResponse,
  DisassociateQAppFromUserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(42) as any as S.Schema<DisassociateQAppFromUserInput>,
  output: __S(1) as any as S.Schema<DisassociateQAppFromUserResponse>,
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
  operationName: "DisassociateQAppFromUser",
}));

export type ExportQAppSessionDataError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Exports the collected data of a Q App data collection session.
 */
export const exportQAppSessionData: API.OperationMethod<
  ExportQAppSessionDataInput,
  ExportQAppSessionDataOutput,
  ExportQAppSessionDataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43) as any as S.Schema<ExportQAppSessionDataInput>,
  output: __S(44) as any as S.Schema<ExportQAppSessionDataOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExportQAppSessionData",
}));

export type GetLibraryItemError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about a library item for an Amazon Q App, including its metadata, categories, ratings, and usage statistics.
 */
export const getLibraryItem: API.OperationMethod<
  GetLibraryItemInput,
  GetLibraryItemOutput,
  GetLibraryItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45) as any as S.Schema<GetLibraryItemInput>,
  output: __S(48) as any as S.Schema<GetLibraryItemOutput>,
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
  operationName: "GetLibraryItem",
}));

export type GetQAppError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the full details of an Q App, including its definition specifying the cards and flow.
 */
export const getQApp: API.OperationMethod<
  GetQAppInput,
  GetQAppOutput,
  GetQAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49) as any as S.Schema<GetQAppInput>,
  output: __S(58) as any as S.Schema<GetQAppOutput>,
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
  operationName: "GetQApp",
}));

export type GetQAppSessionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the current state and results for an active session of an Amazon Q App.
 */
export const getQAppSession: API.OperationMethod<
  GetQAppSessionInput,
  GetQAppSessionOutput,
  GetQAppSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59) as any as S.Schema<GetQAppSessionInput>,
  output: __S(64) as any as S.Schema<GetQAppSessionOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetQAppSession",
}));

export type GetQAppSessionMetadataError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the current configuration of a Q App session.
 */
export const getQAppSessionMetadata: API.OperationMethod<
  GetQAppSessionMetadataInput,
  GetQAppSessionMetadataOutput,
  GetQAppSessionMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(65) as any as S.Schema<GetQAppSessionMetadataInput>,
  output: __S(67) as any as S.Schema<GetQAppSessionMetadataOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetQAppSessionMetadata",
}));

export type ImportDocumentError =
  | AccessDeniedException
  | ContentTooLargeException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Uploads a file that can then be used either as a default in a `FileUploadCard` from Q App definition or as a file that is used inside a single Q App run. The purpose of the document is determined by a scope parameter that indicates whether it is at the app definition level or at the app session level.
 */
export const importDocument: API.OperationMethod<
  ImportDocumentInput,
  ImportDocumentOutput,
  ImportDocumentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68) as any as S.Schema<ImportDocumentInput>,
  output: __S(69) as any as S.Schema<ImportDocumentOutput>,
  errors: [
    AccessDeniedException,
    ContentTooLargeException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ImportDocument",
}));

export type ListCategoriesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists the categories of a Amazon Q Business application environment instance. For more information, see Custom labels for Amazon Q Apps.
 */
export const listCategories: API.OperationMethod<
  ListCategoriesInput,
  ListCategoriesOutput,
  ListCategoriesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70) as any as S.Schema<ListCategoriesInput>,
  output: __S(71) as any as S.Schema<ListCategoriesOutput>,
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
  operationName: "ListCategories",
}));

export type ListLibraryItemsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists the library items for Amazon Q Apps that are published and available for users in your Amazon Web Services account.
 */
export const listLibraryItems: API.PaginatedOperationMethod<
  ListLibraryItemsInput,
  ListLibraryItemsOutput,
  ListLibraryItemsError,
  Credentials | HttpClient.HttpClient,
  LibraryItemMember
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(72) as any as S.Schema<ListLibraryItemsInput>,
  output: __S(74) as any as S.Schema<ListLibraryItemsOutput>,
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
  operationName: "ListLibraryItems",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "libraryItems",
    pageSize: "limit",
  } as const,
})) as any;

export type ListQAppsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists the Amazon Q Apps owned by or associated with the user either because they created it or because they used it from the library in the past. The user identity is extracted from the credentials used to invoke this operation..
 */
export const listQApps: API.PaginatedOperationMethod<
  ListQAppsInput,
  ListQAppsOutput,
  ListQAppsError,
  Credentials | HttpClient.HttpClient,
  UserAppItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(75) as any as S.Schema<ListQAppsInput>,
  output: __S(78) as any as S.Schema<ListQAppsOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListQApps",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "apps",
    pageSize: "limit",
  } as const,
})) as any;

export type ListQAppSessionDataError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists the collected data of a Q App data collection session.
 */
export const listQAppSessionData: API.OperationMethod<
  ListQAppSessionDataInput,
  ListQAppSessionDataOutput,
  ListQAppSessionDataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(79) as any as S.Schema<ListQAppSessionDataInput>,
  output: __S(83) as any as S.Schema<ListQAppSessionDataOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListQAppSessionData",
}));

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags associated with an Amazon Q Apps resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(84) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(85) as any as S.Schema<ListTagsForResourceResponse>,
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

export type PredictQAppError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Generates an Amazon Q App definition based on either a conversation or a problem statement provided as input.The resulting app definition can be used to call `CreateQApp`. This API doesn't create Amazon Q Apps directly.
 */
export const predictQApp: API.OperationMethod<
  PredictQAppInput,
  PredictQAppOutput,
  PredictQAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(89) as any as S.Schema<PredictQAppInput>,
  output: __S(91) as any as S.Schema<PredictQAppOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PredictQApp",
}));

export type StartQAppSessionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Starts a new session for an Amazon Q App, allowing inputs to be provided and the app to be run.
 *
 * Each Q App session will be condensed into a single conversation in the web experience.
 */
export const startQAppSession: API.OperationMethod<
  StartQAppSessionInput,
  StartQAppSessionOutput,
  StartQAppSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95) as any as S.Schema<StartQAppSessionInput>,
  output: __S(96) as any as S.Schema<StartQAppSessionOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartQAppSession",
}));

export type StopQAppSessionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Stops an active session for an Amazon Q App.This deletes all data related to the session and makes it invalid for future uses. The results of the session will be persisted as part of the conversation.
 */
export const stopQAppSession: API.OperationMethod<
  StopQAppSessionInput,
  StopQAppSessionResponse,
  StopQAppSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(97) as any as S.Schema<StopQAppSessionInput>,
  output: __S(3) as any as S.Schema<StopQAppSessionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopQAppSession",
}));

export type TagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates tags with an Amazon Q Apps resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(98) as any as S.Schema<TagResourceRequest>,
  output: __S(3) as any as S.Schema<TagResourceResponse>,
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
 * Disassociates tags from an Amazon Q Apps resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(99) as any as S.Schema<UntagResourceRequest>,
  output: __S(3) as any as S.Schema<UntagResourceResponse>,
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

export type UpdateLibraryItemError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates the library item for an Amazon Q App.
 */
export const updateLibraryItem: API.OperationMethod<
  UpdateLibraryItemInput,
  UpdateLibraryItemOutput,
  UpdateLibraryItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(100) as any as S.Schema<UpdateLibraryItemInput>,
  output: __S(48) as any as S.Schema<UpdateLibraryItemOutput>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLibraryItem",
}));

export type UpdateLibraryItemMetadataError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates the verification status of a library item for an Amazon Q App.
 */
export const updateLibraryItemMetadata: API.OperationMethod<
  UpdateLibraryItemMetadataInput,
  UpdateLibraryItemMetadataResponse,
  UpdateLibraryItemMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(101) as any as S.Schema<UpdateLibraryItemMetadataInput>,
  output: __S(1) as any as S.Schema<UpdateLibraryItemMetadataResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLibraryItemMetadata",
}));

export type UpdateQAppError =
  | AccessDeniedException
  | ContentTooLargeException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing Amazon Q App, allowing modifications to its title, description, and definition.
 */
export const updateQApp: API.OperationMethod<
  UpdateQAppInput,
  UpdateQAppOutput,
  UpdateQAppError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(102) as any as S.Schema<UpdateQAppInput>,
  output: __S(33) as any as S.Schema<UpdateQAppOutput>,
  errors: [
    AccessDeniedException,
    ContentTooLargeException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateQApp",
}));

export type UpdateQAppPermissionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates read permissions for a Amazon Q App in Amazon Q Business application environment instance.
 */
export const updateQAppPermissions: API.OperationMethod<
  UpdateQAppPermissionsInput,
  UpdateQAppPermissionsOutput,
  UpdateQAppPermissionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(105) as any as S.Schema<UpdateQAppPermissionsInput>,
  output: __S(40) as any as S.Schema<UpdateQAppPermissionsOutput>,
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
  operationName: "UpdateQAppPermissions",
}));

export type UpdateQAppSessionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates the session for a given Q App `sessionId`. This is only valid when at least one card of the session is in the `WAITING` state. Data for each `WAITING` card can be provided as input. If inputs are not provided, the call will be accepted but session will not move forward. Inputs for cards that are not in the `WAITING` status will be ignored.
 */
export const updateQAppSession: API.OperationMethod<
  UpdateQAppSessionInput,
  UpdateQAppSessionOutput,
  UpdateQAppSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(106) as any as S.Schema<UpdateQAppSessionInput>,
  output: __S(96) as any as S.Schema<UpdateQAppSessionOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateQAppSession",
}));

export type UpdateQAppSessionMetadataError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Updates the configuration metadata of a session for a given Q App `sessionId`.
 */
export const updateQAppSessionMetadata: API.OperationMethod<
  UpdateQAppSessionMetadataInput,
  UpdateQAppSessionMetadataOutput,
  UpdateQAppSessionMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(107) as any as S.Schema<UpdateQAppSessionMetadataInput>,
  output: __S(108) as any as S.Schema<UpdateQAppSessionMetadataOutput>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateQAppSessionMetadata",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          libraryItemId: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/catalog.associateItemRating" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateLibraryItemReviewInput",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssociateLibraryItemReviewResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ instanceId: S.String.pipe(T.HttpHeader("instance-id")), appId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/apps.install" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AssociateQAppWithUserInput",
      });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AssociateQAppWithUserResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ id: S.optional(S.String), title: S.String, color: S.optional(S.String) }),
      ).annotate({
        identifier: "BatchCreateCategoryInputCategory",
      });
    case 5:
      return S.Array(__S(4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          categories: __S(5),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/catalog.createCategories" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchCreateCategoryInput" });
    case 7:
      return S.Array(S.String);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          categories: __S(7),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/catalog.deleteCategories" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchDeleteCategoryInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ id: S.String, title: S.String, color: S.optional(S.String) }),
      ).annotate({ identifier: "CategoryInput" });
    case 2:
      return S.Array(__S(9));
    case 3:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          categories: __S(10),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/catalog.updateCategories" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchUpdateCategoryInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          appId: S.String,
          appVersion: S.Number,
          categories: __S(7),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/catalog.createItem" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateLibraryItemInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          libraryItemId: S.String,
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          ratingCount: S.Number,
          isVerified: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "CreateLibraryItemOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          cardId: S.String,
          appId: S.String,
          fileContentsSha256: S.String,
          fileName: S.String,
          scope: S.String,
          sessionId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/apps.createPresignedUrl" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreatePresignedUrlInput" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          fileId: S.String,
          presignedUrl: S.String,
          presignedUrlFields: __S(15),
          presignedUrlExpiration: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "CreatePresignedUrlOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          title: S.String,
          id: S.String,
          type: S.String,
          placeholder: S.optional(S.String),
          defaultValue: S.optional(S.String),
        }),
      ).annotate({ identifier: "TextInputCardInput" });
    case 2:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<AttributeFilter> => __S(21)).annotate({
          identifier: "AttributeFilter",
        }),
      );
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ stringValue: S.String }),
        /*@__PURE__*/ S.Struct({ stringListValue: __S(7) }),
        /*@__PURE__*/ S.Struct({ longValue: S.Number }),
        /*@__PURE__*/ S.Struct({
          dateValue: /*@__PURE__*/ S.Date.pipe(/*@__PURE__*/ T.TimestampFormat("epoch-seconds")),
        }),
      ]);
    case 4:
      return S.suspend(() => S.Struct({ name: S.String, value: __S(19) })).annotate({
        identifier: "DocumentAttribute",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          andAllFilters: S.optional(
            S.suspend(() => __S(18)).annotate({ identifier: "AttributeFilters" }),
          ),
          orAllFilters: S.optional(
            S.suspend(() => __S(18)).annotate({ identifier: "AttributeFilters" }),
          ),
          notFilter: S.optional(
            S.suspend((): S.Schema<AttributeFilter> => __S(21)).annotate({
              identifier: "AttributeFilter",
            }),
          ),
          equalsTo: S.optional(__S(20)),
          containsAll: S.optional(__S(20)),
          containsAny: S.optional(__S(20)),
          greaterThan: S.optional(__S(20)),
          greaterThanOrEquals: S.optional(__S(20)),
          lessThan: S.optional(__S(20)),
          lessThanOrEquals: S.optional(__S(20)),
        }),
      ).annotate({ identifier: "AttributeFilter" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          title: S.String,
          id: S.String,
          type: S.String,
          prompt: S.String,
          outputSource: S.optional(S.String),
          attributeFilter: S.optional(__S(21)),
        }),
      ).annotate({ identifier: "QQueryCardInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          title: S.String,
          id: S.String,
          type: S.String,
          prompt: S.String,
          pluginId: S.String,
          actionIdentifier: S.optional(S.String),
        }),
      ).annotate({ identifier: "QPluginCardInput" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          title: S.String,
          id: S.String,
          type: S.String,
          filename: S.optional(S.String),
          fileId: S.optional(S.String),
          allowOverride: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "FileUploadCardInput" });
    case 1:
      return S.suspend(() => S.Struct({ schema: S.Any })).annotate({
        identifier: "FormInputCardMetadata",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          title: S.String,
          id: S.String,
          type: S.String,
          metadata: __S(25),
          computeMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "FormInputCardInput" });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ textInput: __S(17) }),
        /*@__PURE__*/ S.Struct({ qQuery: __S(22) }),
        /*@__PURE__*/ S.Struct({ qPlugin: __S(23) }),
        /*@__PURE__*/ S.Struct({ fileUpload: __S(24) }),
        /*@__PURE__*/ S.Struct({ formInput: __S(26) }),
      ]);
    case 4:
      return S.Array(__S(27));
    case 5:
      return S.suspend(() =>
        S.Struct({ cards: __S(28), initialPrompt: S.optional(S.String) }),
      ).annotate({ identifier: "AppDefinitionInput" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          title: S.String,
          description: S.optional(S.String),
          appDefinition: __S(29),
          tags: S.optional(__S(30)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/apps.create" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateQAppInput" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          appId: S.String,
          appArn: S.String,
          title: S.String,
          description: S.optional(S.String),
          initialPrompt: S.optional(S.String),
          appVersion: S.Number,
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedBy: S.String,
          requiredCapabilities: S.optional(__S(32)),
        }),
      ).annotate({ identifier: "CreateQAppOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          libraryItemId: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/catalog.deleteItem" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteLibraryItemInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ instanceId: S.String.pipe(T.HttpHeader("instance-id")), appId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/apps.delete" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteQAppInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          appId: S.String.pipe(T.HttpQuery("appId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/apps.describeQAppPermissions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeQAppPermissionsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          userId: S.optional(S.String),
          userType: S.optional(S.String),
          email: S.optional(S.String),
        }),
      ).annotate({ identifier: "PrincipalOutput" });
    case 6:
      return S.suspend(() => S.Struct({ action: S.String, principal: __S(37) })).annotate({
        identifier: "PermissionOutput",
      });
    case 7:
      return S.Array(__S(38));
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.optional(S.String),
          appId: S.optional(S.String),
          permissions: S.optional(__S(39)),
        }),
      ).annotate({
        identifier: "DescribeQAppPermissionsOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          libraryItemId: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/catalog.disassociateItemRating" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateLibraryItemReviewInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ instanceId: S.String.pipe(T.HttpHeader("instance-id")), appId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/apps.uninstall" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisassociateQAppFromUserInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          sessionId: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/runtime.exportQAppSessionData" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ExportQAppSessionDataInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          csvFileLink: S.String,
          expiresAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          sessionArn: S.String,
        }),
      ).annotate({
        identifier: "ExportQAppSessionDataOutput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          libraryItemId: S.String.pipe(T.HttpQuery("libraryItemId")),
          appId: S.optional(S.String).pipe(T.HttpQuery("appId")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/catalog.getItem" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetLibraryItemInput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          title: S.String,
          color: S.optional(S.String),
          appCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Category" });
    case 7:
      return S.Array(__S(46));
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          libraryItemId: S.String,
          appId: S.String,
          appVersion: S.Number,
          categories: __S(47),
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          updatedBy: S.optional(S.String),
          ratingCount: S.Number,
          isRatedByUser: S.optional(S.Boolean),
          userCount: S.optional(S.Number),
          isVerified: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "GetLibraryItemOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          appId: S.String.pipe(T.HttpQuery("appId")),
          appVersion: S.optional(S.Number).pipe(T.HttpQuery("appVersion")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/apps.get" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetQAppInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          title: S.String,
          dependencies: __S(7),
          type: S.String,
          placeholder: S.optional(S.String),
          defaultValue: S.optional(S.String),
        }),
      ).annotate({ identifier: "TextInputCard" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          title: S.String,
          dependencies: __S(7),
          type: S.String,
          prompt: S.String,
          outputSource: S.String,
          attributeFilter: S.optional(__S(21)),
          memoryReferences: S.optional(__S(7)),
        }),
      ).annotate({ identifier: "QQueryCard" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          title: S.String,
          dependencies: __S(7),
          type: S.String,
          prompt: S.String,
          pluginType: S.String,
          pluginId: S.String,
          actionIdentifier: S.optional(S.String),
        }),
      ).annotate({ identifier: "QPluginCard" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          title: S.String,
          dependencies: __S(7),
          type: S.String,
          filename: S.optional(S.String),
          fileId: S.optional(S.String),
          allowOverride: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "FileUploadCard" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          id: S.String,
          title: S.String,
          dependencies: __S(7),
          type: S.String,
          metadata: __S(25),
          computeMode: S.optional(S.String),
        }),
      ).annotate({ identifier: "FormInputCard" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ textInput: __S(50) }),
        /*@__PURE__*/ S.Struct({ qQuery: __S(51) }),
        /*@__PURE__*/ S.Struct({ qPlugin: __S(52) }),
        /*@__PURE__*/ S.Struct({ fileUpload: __S(53) }),
        /*@__PURE__*/ S.Struct({ formInput: __S(54) }),
      ]);
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(55));
    case 1:
      return S.suspend(() =>
        S.Struct({
          appDefinitionVersion: S.String,
          cards: __S(56),
          canEdit: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AppDefinition" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          appId: S.String,
          appArn: S.String,
          title: S.String,
          description: S.optional(S.String),
          initialPrompt: S.optional(S.String),
          appVersion: S.Number,
          status: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          createdBy: S.String,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedBy: S.String,
          requiredCapabilities: S.optional(__S(32)),
          appDefinition: __S(57),
        }),
      ).annotate({ identifier: "GetQAppOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          sessionId: S.String.pipe(T.HttpQuery("sessionId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/runtime.getQAppSession" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetQAppSessionInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          value: S.optional(S.Any),
          submissionId: S.optional(S.String),
          timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "Submission" });
    case 5:
      return S.Array(__S(60));
    case 6:
      return S.suspend(() =>
        S.Struct({
          currentState: S.String,
          currentValue: S.String,
          submissions: S.optional(__S(61)),
        }),
      ).annotate({ identifier: "CardStatus" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ __S(62).pipe(S.optional));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          sessionArn: S.String,
          sessionName: S.optional(S.String),
          appVersion: S.optional(S.Number),
          latestPublishedAppVersion: S.optional(S.Number),
          status: S.String,
          cardStatus: __S(63),
          userIsHost: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "GetQAppSessionOutput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          sessionId: S.String.pipe(T.HttpQuery("sessionId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/runtime.getQAppSessionMetadata" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetQAppSessionMetadataInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          enabled: S.Boolean,
          acceptResponses: S.optional(S.Boolean),
          revealCards: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "SessionSharingConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          sessionArn: S.String,
          sessionName: S.optional(S.String),
          sharingConfiguration: __S(66),
          sessionOwner: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "GetQAppSessionMetadataOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          cardId: S.String,
          appId: S.String,
          fileContentsBase64: S.String,
          fileName: S.String,
          scope: S.String,
          sessionId: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/apps.importDocument" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ImportDocumentInput" });
    case 5:
      return S.suspend(() => S.Struct({ fileId: S.optional(S.String) })).annotate({
        identifier: "ImportDocumentOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ instanceId: S.String.pipe(T.HttpHeader("instance-id")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/catalog.listCategories" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListCategoriesInput" });
    case 7:
      return S.suspend(() => S.Struct({ categories: S.optional(__S(47)) })).annotate({
        identifier: "ListCategoriesOutput",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          limit: S.optional(S.Number).pipe(T.HttpQuery("limit")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          categoryId: S.optional(S.String).pipe(T.HttpQuery("categoryId")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/catalog.list" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListLibraryItemsInput" });
    case 1:
      return S.Array(__S(48));
    case 2:
      return S.suspend(() =>
        S.Struct({ libraryItems: S.optional(__S(73)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListLibraryItemsOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          limit: S.optional(S.Number).pipe(T.HttpQuery("limit")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/apps.list" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListQAppsInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          appId: S.String,
          appArn: S.String,
          title: S.String,
          description: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          canEdit: S.optional(S.Boolean),
          status: S.optional(S.String),
          isVerified: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "UserAppItem" });
    case 5:
      return S.Array(__S(76));
    case 6:
      return S.suspend(() => S.Struct({ apps: __S(77), nextToken: S.optional(S.String) })).annotate(
        { identifier: "ListQAppsOutput" },
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          sessionId: S.String.pipe(T.HttpQuery("sessionId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/runtime.listQAppSessionData" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListQAppSessionDataInput" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ userId: S.optional(S.String) })).annotate({
        identifier: "User",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          cardId: S.String,
          value: S.optional(S.Any),
          user: __S(80),
          submissionId: S.optional(S.String),
          timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "QAppSessionData" });
    case 2:
      return S.Array(__S(81));
    case 3:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          sessionArn: S.String,
          sessionData: S.optional(__S(82)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListQAppSessionDataOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ resourceARN: S.String.pipe(T.HttpLabel("resourceARN")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceARN}" }),
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
    case 5:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(30)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ body: S.String, type: S.String })).annotate({
        identifier: "ConversationMessage",
      });
    case 7:
      return S.Array(__S(86));
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ conversation: __S(87) }),
        /*@__PURE__*/ S.Struct({ problemStatement: S.String }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          options: S.optional(__S(88)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/apps.predictQApp" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PredictQAppInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          title: S.String,
          description: S.optional(S.String),
          appDefinition: __S(29),
        }),
      ).annotate({ identifier: "PredictAppDefinition" });
    case 3:
      return S.suspend(() => S.Struct({ app: __S(90), problemStatement: S.String })).annotate({
        identifier: "PredictQAppOutput",
      });
    case 4:
      return S.suspend(() => S.Struct({ submissionId: S.String, mutationType: S.String })).annotate(
        { identifier: "SubmissionMutation" },
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          cardId: S.String,
          value: S.String,
          submissionMutation: S.optional(__S(92)),
        }),
      ).annotate({ identifier: "CardValue" });
    case 6:
      return S.Array(__S(93));
    case 7:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          appId: S.String,
          appVersion: S.Number,
          initialValues: S.optional(__S(94)),
          sessionId: S.optional(S.String),
          tags: S.optional(__S(30)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/runtime.startQAppSession" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartQAppSessionInput" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ sessionId: S.String, sessionArn: S.String })).annotate({
        identifier: "StartQAppSessionOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          sessionId: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/runtime.deleteMiniAppRun" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopQAppSessionInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceARN: S.String.pipe(T.HttpLabel("resourceARN")), tags: __S(30) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceARN}" }),
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
          resourceARN: S.String.pipe(T.HttpLabel("resourceARN")),
          tagKeys: __S(7).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceARN}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          libraryItemId: S.String,
          status: S.optional(S.String),
          categories: S.optional(__S(7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/catalog.updateItem" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateLibraryItemInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          libraryItemId: S.String,
          isVerified: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/catalog.updateItemMetadata" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateLibraryItemMetadataInput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          appId: S.String,
          title: S.optional(S.String),
          description: S.optional(S.String),
          appDefinition: S.optional(__S(29)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/apps.update" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UpdateQAppInput" });
    case 7:
      return S.suspend(() => S.Struct({ action: S.String, principal: S.String })).annotate({
        identifier: "PermissionInput",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(103));
    case 1:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          appId: S.String,
          grantPermissions: S.optional(__S(104)),
          revokePermissions: S.optional(__S(104)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/apps.updateQAppPermissions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateQAppPermissionsInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          sessionId: S.String,
          values: S.optional(__S(94)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/runtime.updateQAppSession" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateQAppSessionInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          instanceId: S.String.pipe(T.HttpHeader("instance-id")),
          sessionId: S.String,
          sessionName: S.optional(S.String),
          sharingConfiguration: __S(66),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/runtime.updateQAppSessionMetadata" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateQAppSessionMetadataInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          sessionArn: S.String,
          sessionName: S.optional(S.String),
          sharingConfiguration: __S(66),
        }),
      ).annotate({
        identifier: "UpdateQAppSessionMetadataOutput",
      });
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
    case 7:
      return __c7(i & 7);
    case 8:
      return __c8(i & 7);
    case 9:
      return __c9(i & 7);
    case 10:
      return __c10(i & 7);
    case 11:
      return __c11(i & 7);
    case 12:
      return __c12(i & 7);
    case 13:
      return __c13(i & 7);
  }
}
