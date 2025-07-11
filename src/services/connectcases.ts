import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class ConnectCases extends AWSServiceClient {
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError
  >;
}

export declare class Connectcases extends ConnectCases {}

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message: string;
}> {}
export type Arn = string;

export type AssociationTime = Date | string;

export interface AuditEvent {
  eventId: string;
  type: string;
  relatedItemType?: string;
  performedTime: Date | string;
  fields: Array<AuditEventField>;
  performedBy?: AuditEventPerformedBy;
}
export type AuditEventDateTime = Date | string;

export interface AuditEventField {
  eventFieldId: string;
  oldValue?: AuditEventFieldValueUnion;
  newValue: AuditEventFieldValueUnion;
}
export type AuditEventFieldId = string;

export type AuditEventFieldList = Array<AuditEventField>;
interface _AuditEventFieldValueUnion {
  stringValue?: string;
  doubleValue?: number;
  booleanValue?: boolean;
  emptyValue?: EmptyFieldValue;
  userArnValue?: string;
}

export type AuditEventFieldValueUnion =
  | (_AuditEventFieldValueUnion & { stringValue: string })
  | (_AuditEventFieldValueUnion & { doubleValue: number })
  | (_AuditEventFieldValueUnion & { booleanValue: boolean })
  | (_AuditEventFieldValueUnion & { emptyValue: EmptyFieldValue })
  | (_AuditEventFieldValueUnion & { userArnValue: string });
export type AuditEventId = string;

export interface AuditEventPerformedBy {
  user?: UserUnion;
  iamPrincipalArn: string;
}
export type AuditEventsList = Array<AuditEvent>;
export type AuditEventType = string;

export interface BasicLayout {
  topPanel?: LayoutSections;
  moreInfo?: LayoutSections;
}
export type BatchGetCaseRuleErrorList = Array<CaseRuleError>;
export type BatchGetCaseRuleList = Array<GetCaseRuleResponse>;
export interface BatchGetCaseRuleRequest {
  domainId: string;
  caseRules: Array<CaseRuleIdentifier>;
}
export interface BatchGetCaseRuleResponse {
  caseRules: Array<GetCaseRuleResponse>;
  errors: Array<CaseRuleError>;
}
export type BatchGetFieldErrorList = Array<FieldError>;
export type BatchGetFieldIdentifierList = Array<FieldIdentifier>;
export type BatchGetFieldList = Array<GetFieldResponse>;
export interface BatchGetFieldRequest {
  domainId: string;
  fields: Array<FieldIdentifier>;
}
export interface BatchGetFieldResponse {
  fields: Array<GetFieldResponse>;
  errors: Array<FieldError>;
}
export interface BatchPutFieldOptionsRequest {
  domainId: string;
  fieldId: string;
  options: Array<FieldOption>;
}
export interface BatchPutFieldOptionsResponse {
  errors?: Array<FieldOptionError>;
}
interface _BooleanCondition {
  equalTo?: BooleanOperands;
  notEqualTo?: BooleanOperands;
}

export type BooleanCondition =
  | (_BooleanCondition & { equalTo: BooleanOperands })
  | (_BooleanCondition & { notEqualTo: BooleanOperands });
export type BooleanConditionList = Array<BooleanCondition>;
export interface BooleanOperands {
  operandOne: OperandOne;
  operandTwo: OperandTwo;
  result: boolean;
}
export type CaseArn = string;

export interface CaseEventIncludedData {
  fields: Array<FieldIdentifier>;
}
interface _CaseFilter {
  field?: FieldFilter;
  not?: CaseFilter;
  andAll?: Array<CaseFilter>;
  orAll?: Array<CaseFilter>;
}

export type CaseFilter =
  | (_CaseFilter & { field: FieldFilter })
  | (_CaseFilter & { not: CaseFilter })
  | (_CaseFilter & { andAll: Array<CaseFilter> })
  | (_CaseFilter & { orAll: Array<CaseFilter> });
export type CaseFilterList = Array<CaseFilter>;
export type CaseId = string;

export type CaseRuleArn = string;

export type CaseRuleDescription = string;

interface _CaseRuleDetails {
  required?: RequiredCaseRule;
}

export type CaseRuleDetails = _CaseRuleDetails & { required: RequiredCaseRule };
export interface CaseRuleError {
  id: string;
  errorCode: string;
  message?: string;
}
export type CaseRuleId = string;

export interface CaseRuleIdentifier {
  id: string;
}
export type CaseRuleIdentifierList = Array<CaseRuleIdentifier>;
export type CaseRuleName = string;

export interface CaseRuleSummary {
  caseRuleId: string;
  name: string;
  caseRuleArn: string;
  ruleType: string;
  description?: string;
}
export type CaseRuleSummaryList = Array<CaseRuleSummary>;
export interface CaseSummary {
  caseId: string;
  templateId: string;
}
export type CaseSummaryList = Array<CaseSummary>;
export type Channel = string;

export type ChannelList = Array<string>;
export type CommentBody = string;

export type CommentBodyTextType = string;

export interface CommentContent {
  body: string;
  contentType: string;
}
export interface CommentFilter {}
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly message: string;
}> {}
export type ConnectedToSystemTime = Date | string;

export interface Contact {
  contactArn: string;
}
export type ContactArn = string;

export interface ContactContent {
  contactArn: string;
  channel: string;
  connectedToSystemTime: Date | string;
}
export interface ContactFilter {
  channel?: Array<string>;
  contactArn?: string;
}
export interface CreateCaseRequest {
  domainId: string;
  templateId: string;
  fields: Array<FieldValue>;
  clientToken?: string;
  performedBy?: UserUnion;
}
export interface CreateCaseResponse {
  caseId: string;
  caseArn: string;
}
export interface CreateCaseRuleRequest {
  domainId: string;
  name: string;
  description?: string;
  rule: CaseRuleDetails;
}
export interface CreateCaseRuleResponse {
  caseRuleId: string;
  caseRuleArn: string;
}
export interface CreateDomainRequest {
  name: string;
}
export interface CreateDomainResponse {
  domainId: string;
  domainArn: string;
  domainStatus: string;
}
export type CreatedTime = Date | string;

export interface CreateFieldRequest {
  domainId: string;
  name: string;
  type: string;
  description?: string;
}
export interface CreateFieldResponse {
  fieldId: string;
  fieldArn: string;
}
export interface CreateLayoutRequest {
  domainId: string;
  name: string;
  content: LayoutContent;
}
export interface CreateLayoutResponse {
  layoutId: string;
  layoutArn: string;
}
export interface CreateRelatedItemRequest {
  domainId: string;
  caseId: string;
  type: string;
  content: RelatedItemInputContent;
  performedBy?: UserUnion;
}
export interface CreateRelatedItemResponse {
  relatedItemId: string;
  relatedItemArn: string;
}
export interface CreateTemplateRequest {
  domainId: string;
  name: string;
  description?: string;
  layoutConfiguration?: LayoutConfiguration;
  requiredFields?: Array<RequiredField>;
  status?: string;
  rules?: Array<TemplateRule>;
}
export interface CreateTemplateResponse {
  templateId: string;
  templateArn: string;
}
export type CustomEntity = string;

export interface DeleteCaseRequest {
  domainId: string;
  caseId: string;
}
export interface DeleteCaseResponse {}
export interface DeleteCaseRuleRequest {
  domainId: string;
  caseRuleId: string;
}
export interface DeleteCaseRuleResponse {}
export type Deleted = boolean;

export interface DeleteDomainRequest {
  domainId: string;
}
export interface DeleteDomainResponse {}
export interface DeleteFieldRequest {
  domainId: string;
  fieldId: string;
}
export interface DeleteFieldResponse {}
export interface DeleteLayoutRequest {
  domainId: string;
  layoutId: string;
}
export interface DeleteLayoutResponse {}
export interface DeleteRelatedItemRequest {
  domainId: string;
  caseId: string;
  relatedItemId: string;
}
export interface DeleteRelatedItemResponse {}
export interface DeleteTemplateRequest {
  domainId: string;
  templateId: string;
}
export interface DeleteTemplateResponse {}
export type DomainArn = string;

export type DomainId = string;

export type DomainName = string;

export type DomainStatus = string;

export interface DomainSummary {
  domainId: string;
  domainArn: string;
  name: string;
}
export type DomainSummaryList = Array<DomainSummary>;
export interface EmptyFieldValue {}
export interface EmptyOperandValue {}
export interface EventBridgeConfiguration {
  enabled: boolean;
  includedData?: EventIncludedData;
}
export interface EventIncludedData {
  caseData?: CaseEventIncludedData;
  relatedItemData?: RelatedItemEventIncludedData;
}
export type FieldArn = string;

export type FieldDescription = string;

export interface FieldError {
  id: string;
  errorCode: string;
  message?: string;
}
interface _FieldFilter {
  equalTo?: FieldValue;
  contains?: FieldValue;
  greaterThan?: FieldValue;
  greaterThanOrEqualTo?: FieldValue;
  lessThan?: FieldValue;
  lessThanOrEqualTo?: FieldValue;
}

export type FieldFilter =
  | (_FieldFilter & { equalTo: FieldValue })
  | (_FieldFilter & { contains: FieldValue })
  | (_FieldFilter & { greaterThan: FieldValue })
  | (_FieldFilter & { greaterThanOrEqualTo: FieldValue })
  | (_FieldFilter & { lessThan: FieldValue })
  | (_FieldFilter & { lessThanOrEqualTo: FieldValue });
export interface FieldGroup {
  name?: string;
  fields: Array<FieldItem>;
}
export type FieldId = string;

export interface FieldIdentifier {
  id: string;
}
export type FieldIdentifierList = Array<FieldIdentifier>;
export interface FieldItem {
  id: string;
}
export type FieldList = Array<FieldItem>;
export type FieldName = string;

export type FieldNamespace = string;

export interface FieldOption {
  name: string;
  value: string;
  active: boolean;
}
export interface FieldOptionError {
  message: string;
  errorCode: string;
  value: string;
}
export type FieldOptionErrorList = Array<FieldOptionError>;
export type FieldOptionName = string;

export type FieldOptionsList = Array<FieldOption>;
export type FieldOptionValue = string;

export interface FieldSummary {
  fieldId: string;
  fieldArn: string;
  name: string;
  type: string;
  namespace: string;
}
export type FieldSummaryList = Array<FieldSummary>;
export type FieldType = string;

export interface FieldValue {
  id: string;
  value: FieldValueUnion;
}
export type FieldValueList = Array<FieldValue>;
interface _FieldValueUnion {
  stringValue?: string;
  doubleValue?: number;
  booleanValue?: boolean;
  emptyValue?: EmptyFieldValue;
  userArnValue?: string;
}

export type FieldValueUnion =
  | (_FieldValueUnion & { stringValue: string })
  | (_FieldValueUnion & { doubleValue: number })
  | (_FieldValueUnion & { booleanValue: boolean })
  | (_FieldValueUnion & { emptyValue: EmptyFieldValue })
  | (_FieldValueUnion & { userArnValue: string });
export type FileArn = string;

export interface FileContent {
  fileArn: string;
}
export interface FileFilter {
  fileArn?: string;
}
export interface GetCaseAuditEventsRequest {
  caseId: string;
  domainId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface GetCaseAuditEventsResponse {
  nextToken?: string;
  auditEvents: Array<AuditEvent>;
}
export interface GetCaseEventConfigurationRequest {
  domainId: string;
}
export interface GetCaseEventConfigurationResponse {
  eventBridge: EventBridgeConfiguration;
}
export interface GetCaseRequest {
  caseId: string;
  domainId: string;
  fields: Array<FieldIdentifier>;
  nextToken?: string;
}
export interface GetCaseResponse {
  fields: Array<FieldValue>;
  templateId: string;
  nextToken?: string;
  tags?: Record<string, string>;
}
export interface GetCaseRuleResponse {
  caseRuleId: string;
  name: string;
  caseRuleArn: string;
  rule: CaseRuleDetails;
  description?: string;
  deleted?: boolean;
  createdTime?: Date | string;
  lastModifiedTime?: Date | string;
  tags?: Record<string, string>;
}
export interface GetDomainRequest {
  domainId: string;
}
export interface GetDomainResponse {
  domainId: string;
  domainArn: string;
  name: string;
  createdTime: Date | string;
  domainStatus: string;
  tags?: Record<string, string>;
}
export interface GetFieldResponse {
  fieldId: string;
  name: string;
  fieldArn: string;
  description?: string;
  type: string;
  namespace: string;
  tags?: Record<string, string>;
  deleted?: boolean;
  createdTime?: Date | string;
  lastModifiedTime?: Date | string;
}
export interface GetLayoutRequest {
  domainId: string;
  layoutId: string;
}
export interface GetLayoutResponse {
  layoutId: string;
  layoutArn: string;
  name: string;
  content: LayoutContent;
  tags?: Record<string, string>;
  deleted?: boolean;
  createdTime?: Date | string;
  lastModifiedTime?: Date | string;
}
export interface GetTemplateRequest {
  domainId: string;
  templateId: string;
}
export interface GetTemplateResponse {
  templateId: string;
  templateArn: string;
  name: string;
  description?: string;
  layoutConfiguration?: LayoutConfiguration;
  requiredFields?: Array<RequiredField>;
  tags?: Record<string, string>;
  status: string;
  deleted?: boolean;
  createdTime?: Date | string;
  lastModifiedTime?: Date | string;
  rules?: Array<TemplateRule>;
}
export type IamPrincipalArn = string;

export declare class InternalServerException extends EffectData.TaggedError(
  "InternalServerException",
)<{
  readonly message: string;
  readonly retryAfterSeconds?: number;
}> {}
export type LastModifiedTime = Date | string;

export type LayoutArn = string;

export interface LayoutConfiguration {
  defaultLayout?: string;
}
interface _LayoutContent {
  basic?: BasicLayout;
}

export type LayoutContent = _LayoutContent & { basic: BasicLayout };
export type LayoutId = string;

export type LayoutName = string;

export interface LayoutSections {
  sections?: Array<Section>;
}
export interface LayoutSummary {
  layoutId: string;
  layoutArn: string;
  name: string;
}
export type LayoutSummaryList = Array<LayoutSummary>;
export interface ListCaseRulesRequest {
  domainId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListCaseRulesResponse {
  caseRules: Array<CaseRuleSummary>;
  nextToken?: string;
}
export interface ListCasesForContactRequest {
  domainId: string;
  contactArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListCasesForContactResponse {
  cases: Array<CaseSummary>;
  nextToken?: string;
}
export interface ListDomainsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface ListDomainsResponse {
  domains: Array<DomainSummary>;
  nextToken?: string;
}
export interface ListFieldOptionsRequest {
  domainId: string;
  fieldId: string;
  maxResults?: number;
  nextToken?: string;
  values?: Array<string>;
}
export interface ListFieldOptionsResponse {
  options: Array<FieldOption>;
  nextToken?: string;
}
export interface ListFieldsRequest {
  domainId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListFieldsResponse {
  fields: Array<FieldSummary>;
  nextToken?: string;
}
export interface ListLayoutsRequest {
  domainId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface ListLayoutsResponse {
  layouts: Array<LayoutSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  arn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export interface ListTemplatesRequest {
  domainId: string;
  maxResults?: number;
  nextToken?: string;
  status?: Array<string>;
}
export interface ListTemplatesResponse {
  templates: Array<TemplateSummary>;
  nextToken?: string;
}
export type MaxResults = number;

export type NextToken = string;

interface _OperandOne {
  fieldId?: string;
}

export type OperandOne = _OperandOne & { fieldId: string };
interface _OperandTwo {
  stringValue?: string;
  booleanValue?: boolean;
  doubleValue?: number;
  emptyValue?: EmptyOperandValue;
}

export type OperandTwo =
  | (_OperandTwo & { stringValue: string })
  | (_OperandTwo & { booleanValue: boolean })
  | (_OperandTwo & { doubleValue: number })
  | (_OperandTwo & { emptyValue: EmptyOperandValue });
export type Order = string;

export interface PutCaseEventConfigurationRequest {
  domainId: string;
  eventBridge: EventBridgeConfiguration;
}
export interface PutCaseEventConfigurationResponse {}
export type RelatedItemArn = string;

interface _RelatedItemContent {
  contact?: ContactContent;
  comment?: CommentContent;
  file?: FileContent;
  sla?: SlaContent;
}

export type RelatedItemContent =
  | (_RelatedItemContent & { contact: ContactContent })
  | (_RelatedItemContent & { comment: CommentContent })
  | (_RelatedItemContent & { file: FileContent })
  | (_RelatedItemContent & { sla: SlaContent });
export interface RelatedItemEventIncludedData {
  includeContent: boolean;
}
export type RelatedItemFilterList = Array<RelatedItemTypeFilter>;
export type RelatedItemId = string;

interface _RelatedItemInputContent {
  contact?: Contact;
  comment?: CommentContent;
  file?: FileContent;
  sla?: SlaInputContent;
}

export type RelatedItemInputContent =
  | (_RelatedItemInputContent & { contact: Contact })
  | (_RelatedItemInputContent & { comment: CommentContent })
  | (_RelatedItemInputContent & { file: FileContent })
  | (_RelatedItemInputContent & { sla: SlaInputContent });
export type RelatedItemType = string;

interface _RelatedItemTypeFilter {
  contact?: ContactFilter;
  comment?: CommentFilter;
  file?: FileFilter;
  sla?: SlaFilter;
}

export type RelatedItemTypeFilter =
  | (_RelatedItemTypeFilter & { contact: ContactFilter })
  | (_RelatedItemTypeFilter & { comment: CommentFilter })
  | (_RelatedItemTypeFilter & { file: FileFilter })
  | (_RelatedItemTypeFilter & { sla: SlaFilter });
export interface RequiredCaseRule {
  defaultValue: boolean;
  conditions: Array<BooleanCondition>;
}
export interface RequiredField {
  fieldId: string;
}
export type RequiredFieldList = Array<RequiredField>;
export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message: string;
  readonly resourceId: string;
  readonly resourceType: string;
}> {}
export type RuleType = string;

export interface SearchCasesRequest {
  domainId: string;
  maxResults?: number;
  nextToken?: string;
  searchTerm?: string;
  filter?: CaseFilter;
  sorts?: Array<Sort>;
  fields?: Array<FieldIdentifier>;
}
export interface SearchCasesResponse {
  nextToken?: string;
  cases: Array<SearchCasesResponseItem>;
}
export interface SearchCasesResponseItem {
  caseId: string;
  templateId: string;
  fields: Array<FieldValue>;
  tags?: Record<string, string>;
}
export type SearchCasesResponseItemList = Array<SearchCasesResponseItem>;
export interface SearchRelatedItemsRequest {
  domainId: string;
  caseId: string;
  maxResults?: number;
  nextToken?: string;
  filters?: Array<RelatedItemTypeFilter>;
}
export interface SearchRelatedItemsResponse {
  nextToken?: string;
  relatedItems: Array<SearchRelatedItemsResponseItem>;
}
export interface SearchRelatedItemsResponseItem {
  relatedItemId: string;
  type: string;
  associationTime: Date | string;
  content: RelatedItemContent;
  tags?: Record<string, string>;
  performedBy?: UserUnion;
}
export type SearchRelatedItemsResponseItemList =
  Array<SearchRelatedItemsResponseItem>;
interface _Section {
  fieldGroup?: FieldGroup;
}

export type Section = _Section & { fieldGroup: FieldGroup };
export type SectionsList = Array<Section>;
export declare class ServiceQuotaExceededException extends EffectData.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly message: string;
}> {}
export type SlaCompletionTime = Date | string;

export interface SlaConfiguration {
  name: string;
  type: string;
  status: string;
  fieldId?: string;
  targetFieldValues?: Array<FieldValueUnion>;
  targetTime: Date | string;
  completionTime?: Date | string;
}
export interface SlaContent {
  slaConfiguration: SlaConfiguration;
}
export type SlaFieldValueUnionList = Array<FieldValueUnion>;
export interface SlaFilter {
  name?: string;
  status?: string;
}
export interface SlaInputConfiguration {
  name: string;
  type: string;
  fieldId?: string;
  targetFieldValues?: Array<FieldValueUnion>;
  targetSlaMinutes: number;
}
interface _SlaInputContent {
  slaInputConfiguration?: SlaInputConfiguration;
}

export type SlaInputContent = _SlaInputContent & {
  slaInputConfiguration: SlaInputConfiguration;
};
export type SlaName = string;

export type SlaStatus = string;

export type SlaTargetTime = Date | string;

export type SlaType = string;

export interface Sort {
  fieldId: string;
  sortOrder: string;
}
export type SortList = Array<Sort>;
export type TagKey = string;

export type TagKeyList = Array<string>;
export interface TagResourceRequest {
  arn: string;
  tags: Record<string, string>;
}
export type Tags = Record<string, string>;
export type TargetSlaMinutes = number;

export type TemplateArn = string;

export type TemplateCaseRuleList = Array<TemplateRule>;
export type TemplateDescription = string;

export type TemplateId = string;

export type TemplateName = string;

export interface TemplateRule {
  caseRuleId: string;
  fieldId: string;
}
export type TemplateStatus = string;

export type TemplateStatusFilters = Array<string>;
export interface TemplateSummary {
  templateId: string;
  templateArn: string;
  name: string;
  status: string;
}
export type TemplateSummaryList = Array<TemplateSummary>;
export declare class ThrottlingException extends EffectData.TaggedError(
  "ThrottlingException",
)<{
  readonly message: string;
}> {}
export interface UntagResourceRequest {
  arn: string;
  tagKeys: Array<string>;
}
export interface UpdateCaseRequest {
  domainId: string;
  caseId: string;
  fields: Array<FieldValue>;
  performedBy?: UserUnion;
}
export interface UpdateCaseResponse {}
export interface UpdateCaseRuleRequest {
  domainId: string;
  caseRuleId: string;
  name?: string;
  description?: string;
  rule?: CaseRuleDetails;
}
export interface UpdateCaseRuleResponse {}
export interface UpdateFieldRequest {
  domainId: string;
  fieldId: string;
  name?: string;
  description?: string;
}
export interface UpdateFieldResponse {}
export interface UpdateLayoutRequest {
  domainId: string;
  layoutId: string;
  name?: string;
  content?: LayoutContent;
}
export interface UpdateLayoutResponse {}
export interface UpdateTemplateRequest {
  domainId: string;
  templateId: string;
  name?: string;
  description?: string;
  layoutConfiguration?: LayoutConfiguration;
  requiredFields?: Array<RequiredField>;
  status?: string;
  rules?: Array<TemplateRule>;
}
export interface UpdateTemplateResponse {}
export type UserArn = string;

interface _UserUnion {
  userArn?: string;
  customEntity?: string;
}

export type UserUnion =
  | (_UserUnion & { userArn: string })
  | (_UserUnion & { customEntity: string });
export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message: string;
}> {}
export type Value = string;

export type ValuesList = Array<string>;
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}
