import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AmazonConnectCases {
  batchGetCaseRule(
    input: BatchGetCaseRuleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchGetField(
    input: BatchGetFieldRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  batchPutFieldOptions(
    input: BatchPutFieldOptionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createCase(
    input: CreateCaseRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createCaseRule(
    input: CreateCaseRuleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createDomain(
    input: CreateDomainRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createField(
    input: CreateFieldRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createLayout(
    input: CreateLayoutRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createRelatedItem(
    input: CreateRelatedItemRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  createTemplate(
    input: CreateTemplateRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteCase(
    input: DeleteCaseRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteCaseRule(
    input: DeleteCaseRuleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  deleteDomain(
    input: DeleteDomainRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteField(
    input: DeleteFieldRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteLayout(
    input: DeleteLayoutRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteRelatedItem(
    input: DeleteRelatedItemRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteTemplate(
    input: DeleteTemplateRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCase(
    input: GetCaseRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCaseAuditEvents(
    input: GetCaseAuditEventsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getCaseEventConfiguration(
    input: GetCaseEventConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getDomain(
    input: GetDomainRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getLayout(
    input: GetLayoutRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  getTemplate(
    input: GetTemplateRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCaseRules(
    input: ListCaseRulesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listCasesForContact(
    input: ListCasesForContactRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listDomains(
    input: ListDomainsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listFieldOptions(
    input: ListFieldOptionsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listFields(
    input: ListFieldsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listLayouts(
    input: ListLayoutsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listTemplates(
    input: ListTemplatesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  putCaseEventConfiguration(
    input: PutCaseEventConfigurationRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  searchCases(
    input: SearchCasesRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  searchRelatedItems(
    input: SearchRelatedItemsRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateCase(
    input: UpdateCaseRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateCaseRule(
    input: UpdateCaseRuleRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateField(
    input: UpdateFieldRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateLayout(
    input: UpdateLayoutRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ServiceQuotaExceededException | ThrottlingException | ValidationException | CommonAwsError
  >;
  updateTemplate(
    input: UpdateTemplateRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | ConflictException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export type Connectcases = AmazonConnectCases;

export interface AccessDeniedException {
}
export type Arn = string;

export type AssociationTime = Date | string;

export interface AuditEvent {
}
export type AuditEventDateTime = Date | string;

export interface AuditEventField {
}
export type AuditEventFieldId = string;

export type AuditEventFieldList = Array<unknown>;
export type AuditEventFieldValueUnion = never;
export type AuditEventId = string;

export interface AuditEventPerformedBy {
}
export type AuditEventsList = Array<unknown>;
export type AuditEventType = string;

export interface BasicLayout {
}
export type BatchGetCaseRuleErrorList = Array<unknown>;
export type BatchGetCaseRuleList = Array<unknown>;
export interface BatchGetCaseRuleRequest {
}
export interface BatchGetCaseRuleResponse {
}
export type BatchGetFieldErrorList = Array<unknown>;
export type BatchGetFieldIdentifierList = Array<unknown>;
export type BatchGetFieldList = Array<unknown>;
export interface BatchGetFieldRequest {
}
export interface BatchGetFieldResponse {
}
export interface BatchPutFieldOptionsRequest {
}
export interface BatchPutFieldOptionsResponse {
}
export type BooleanCondition = never;
export type BooleanConditionList = Array<unknown>;
export interface BooleanOperands {
}
export type CaseArn = string;

export interface CaseEventIncludedData {
}
export type CaseFilter = never;
export type CaseFilterList = Array<unknown>;
export type CaseId = string;

export type CaseRuleArn = string;

export type CaseRuleDescription = string;

export type CaseRuleDetails = never;
export interface CaseRuleError {
}
export type CaseRuleId = string;

export interface CaseRuleIdentifier {
}
export type CaseRuleIdentifierList = Array<unknown>;
export type CaseRuleName = string;

export interface CaseRuleSummary {
}
export type CaseRuleSummaryList = Array<unknown>;
export interface CaseSummary {
}
export type CaseSummaryList = Array<unknown>;
export type Channel = string;

export type ChannelList = Array<unknown>;
export type CommentBody = string;

export type CommentBodyTextType = string;

export interface CommentContent {
}
export interface CommentFilter {
}
export interface ConflictException {
}
export type ConnectedToSystemTime = Date | string;

export interface Contact {
}
export type ContactArn = string;

export interface ContactContent {
}
export interface ContactFilter {
}
export interface CreateCaseRequest {
}
export interface CreateCaseResponse {
}
export interface CreateCaseRuleRequest {
}
export interface CreateCaseRuleResponse {
}
export interface CreateDomainRequest {
}
export interface CreateDomainResponse {
}
export type CreatedTime = Date | string;

export interface CreateFieldRequest {
}
export interface CreateFieldResponse {
}
export interface CreateLayoutRequest {
}
export interface CreateLayoutResponse {
}
export interface CreateRelatedItemRequest {
}
export interface CreateRelatedItemResponse {
}
export interface CreateTemplateRequest {
}
export interface CreateTemplateResponse {
}
export type CustomEntity = string;

export interface DeleteCaseRequest {
}
export interface DeleteCaseResponse {
}
export interface DeleteCaseRuleRequest {
}
export interface DeleteCaseRuleResponse {
}
export type Deleted = boolean;

export interface DeleteDomainRequest {
}
export interface DeleteDomainResponse {
}
export interface DeleteFieldRequest {
}
export interface DeleteFieldResponse {
}
export interface DeleteLayoutRequest {
}
export interface DeleteLayoutResponse {
}
export interface DeleteRelatedItemRequest {
}
export interface DeleteRelatedItemResponse {
}
export interface DeleteTemplateRequest {
}
export interface DeleteTemplateResponse {
}
export type DomainArn = string;

export type DomainId = string;

export type DomainName = string;

export type DomainStatus = string;

export interface DomainSummary {
}
export type DomainSummaryList = Array<unknown>;
export interface EmptyFieldValue {
}
export interface EmptyOperandValue {
}
export interface EventBridgeConfiguration {
}
export interface EventIncludedData {
}
export type FieldArn = string;

export type FieldDescription = string;

export interface FieldError {
}
export type FieldFilter = never;
export interface FieldGroup {
}
export type FieldId = string;

export interface FieldIdentifier {
}
export type FieldIdentifierList = Array<unknown>;
export interface FieldItem {
}
export type FieldList = Array<unknown>;
export type FieldName = string;

export type FieldNamespace = string;

export interface FieldOption {
}
export interface FieldOptionError {
}
export type FieldOptionErrorList = Array<unknown>;
export type FieldOptionName = string;

export type FieldOptionsList = Array<unknown>;
export type FieldOptionValue = string;

export interface FieldSummary {
}
export type FieldSummaryList = Array<unknown>;
export type FieldType = string;

export interface FieldValue {
}
export type FieldValueList = Array<unknown>;
export type FieldValueUnion = never;
export type FileArn = string;

export interface FileContent {
}
export interface FileFilter {
}
export interface GetCaseAuditEventsRequest {
}
export interface GetCaseAuditEventsResponse {
}
export interface GetCaseEventConfigurationRequest {
}
export interface GetCaseEventConfigurationResponse {
}
export interface GetCaseRequest {
}
export interface GetCaseResponse {
}
export interface GetCaseRuleResponse {
}
export interface GetDomainRequest {
}
export interface GetDomainResponse {
}
export interface GetFieldResponse {
}
export interface GetLayoutRequest {
}
export interface GetLayoutResponse {
}
export interface GetTemplateRequest {
}
export interface GetTemplateResponse {
}
export type IamPrincipalArn = string;

export interface InternalServerException {
}
export type LastModifiedTime = Date | string;

export type LayoutArn = string;

export interface LayoutConfiguration {
}
export type LayoutContent = never;
export type LayoutId = string;

export type LayoutName = string;

export interface LayoutSections {
}
export interface LayoutSummary {
}
export type LayoutSummaryList = Array<unknown>;
export interface ListCaseRulesRequest {
}
export interface ListCaseRulesResponse {
}
export interface ListCasesForContactRequest {
}
export interface ListCasesForContactResponse {
}
export interface ListDomainsRequest {
}
export interface ListDomainsResponse {
}
export interface ListFieldOptionsRequest {
}
export interface ListFieldOptionsResponse {
}
export interface ListFieldsRequest {
}
export interface ListFieldsResponse {
}
export interface ListLayoutsRequest {
}
export interface ListLayoutsResponse {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export interface ListTemplatesRequest {
}
export interface ListTemplatesResponse {
}
export type MaxResults = number;

export type NextToken = string;

export type OperandOne = never;
export type OperandTwo = never;
export type Order = string;

export interface PutCaseEventConfigurationRequest {
}
export interface PutCaseEventConfigurationResponse {
}
export type RelatedItemArn = string;

export type RelatedItemContent = never;
export interface RelatedItemEventIncludedData {
}
export type RelatedItemFilterList = Array<unknown>;
export type RelatedItemId = string;

export type RelatedItemInputContent = never;
export type RelatedItemType = string;

export type RelatedItemTypeFilter = never;
export interface RequiredCaseRule {
}
export interface RequiredField {
}
export type RequiredFieldList = Array<unknown>;
export interface ResourceNotFoundException {
}
export type RuleType = string;

export interface SearchCasesRequest {
}
export interface SearchCasesResponse {
}
export interface SearchCasesResponseItem {
}
export type SearchCasesResponseItemList = Array<unknown>;
export interface SearchRelatedItemsRequest {
}
export interface SearchRelatedItemsResponse {
}
export interface SearchRelatedItemsResponseItem {
}
export type SearchRelatedItemsResponseItemList = Array<unknown>;
export type Section = never;
export type SectionsList = Array<unknown>;
export interface ServiceQuotaExceededException {
}
export type SlaCompletionTime = Date | string;

export interface SlaConfiguration {
}
export interface SlaContent {
}
export type SlaFieldValueUnionList = Array<unknown>;
export interface SlaFilter {
}
export interface SlaInputConfiguration {
}
export type SlaInputContent = never;
export type SlaName = string;

export type SlaStatus = string;

export type SlaTargetTime = Date | string;

export type SlaType = string;

export interface Sort {
}
export type SortList = Array<unknown>;
export type TagKey = string;

export type TagKeyList = Array<unknown>;
export interface TagResourceRequest {
}
export type Tags = Record<string, unknown>;
export type TargetSlaMinutes = number;

export type TemplateArn = string;

export type TemplateCaseRuleList = Array<unknown>;
export type TemplateDescription = string;

export type TemplateId = string;

export type TemplateName = string;

export interface TemplateRule {
}
export type TemplateStatus = string;

export type TemplateStatusFilters = Array<unknown>;
export interface TemplateSummary {
}
export type TemplateSummaryList = Array<unknown>;
export interface ThrottlingException {
}
export interface UntagResourceRequest {
}
export interface UpdateCaseRequest {
}
export interface UpdateCaseResponse {
}
export interface UpdateCaseRuleRequest {
}
export interface UpdateCaseRuleResponse {
}
export interface UpdateFieldRequest {
}
export interface UpdateFieldResponse {
}
export interface UpdateLayoutRequest {
}
export interface UpdateLayoutResponse {
}
export interface UpdateTemplateRequest {
}
export interface UpdateTemplateResponse {
}
export type UserArn = string;

export type UserUnion = never;
export interface ValidationException {
}
export type Value = string;

export type ValuesList = Array<unknown>;
export declare namespace BatchGetCaseRule {
  export type Input = BatchGetCaseRuleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchGetField {
  export type Input = BatchGetFieldRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace BatchPutFieldOptions {
  export type Input = BatchPutFieldOptionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCase {
  export type Input = CreateCaseRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateCaseRule {
  export type Input = CreateCaseRuleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateDomain {
  export type Input = CreateDomainRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateField {
  export type Input = CreateFieldRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateLayout {
  export type Input = CreateLayoutRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateRelatedItem {
  export type Input = CreateRelatedItemRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTemplate {
  export type Input = CreateTemplateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCase {
  export type Input = DeleteCaseRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCaseRule {
  export type Input = DeleteCaseRuleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteDomain {
  export type Input = DeleteDomainRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteField {
  export type Input = DeleteFieldRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteLayout {
  export type Input = DeleteLayoutRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteRelatedItem {
  export type Input = DeleteRelatedItemRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteTemplate {
  export type Input = DeleteTemplateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCase {
  export type Input = GetCaseRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCaseAuditEvents {
  export type Input = GetCaseAuditEventsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetCaseEventConfiguration {
  export type Input = GetCaseEventConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetDomain {
  export type Input = GetDomainRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetLayout {
  export type Input = GetLayoutRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace GetTemplate {
  export type Input = GetTemplateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCaseRules {
  export type Input = ListCaseRulesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCasesForContact {
  export type Input = ListCasesForContactRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListDomains {
  export type Input = ListDomainsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFieldOptions {
  export type Input = ListFieldOptionsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListFields {
  export type Input = ListFieldsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListLayouts {
  export type Input = ListLayoutsRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTemplates {
  export type Input = ListTemplatesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutCaseEventConfiguration {
  export type Input = PutCaseEventConfigurationRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchCases {
  export type Input = SearchCasesRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace SearchRelatedItems {
  export type Input = SearchRelatedItemsRequest;
  export type Output = {};
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

export declare namespace UpdateCase {
  export type Input = UpdateCaseRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateCaseRule {
  export type Input = UpdateCaseRuleRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateField {
  export type Input = UpdateFieldRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateLayout {
  export type Input = UpdateLayoutRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ServiceQuotaExceededException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTemplate {
  export type Input = UpdateTemplateRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

