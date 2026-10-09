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
  sdkId: "ConnectCases",
  serviceShapeName: "AmazonConnectCases",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "cases" });
const ver = /*@__PURE__*/ T.ServiceVersion("2022-10-03");
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
              `https://cases-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://cases-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://cases.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://cases.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
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
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(429), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type DomainId = string;
export type CaseRuleId = string;
export interface CaseRuleIdentifier {
  id: string;
}
export type CaseRuleIdentifierList = CaseRuleIdentifier[];
export interface BatchGetCaseRuleRequest {
  domainId: string;
  caseRules: CaseRuleIdentifier[];
}
export type CaseRuleName = string;
export type CaseRuleArn = string;
export type FieldId = string;
export type OperandOne = { fieldId: string };
export interface EmptyOperandValue {}
export type OperandTwo =
  | { stringValue: string; booleanValue?: never; doubleValue?: never; emptyValue?: never }
  | { stringValue?: never; booleanValue: boolean; doubleValue?: never; emptyValue?: never }
  | { stringValue?: never; booleanValue?: never; doubleValue: number; emptyValue?: never }
  | {
      stringValue?: never;
      booleanValue?: never;
      doubleValue?: never;
      emptyValue: EmptyOperandValue;
    };
export interface BooleanOperands {
  operandOne: OperandOne;
  operandTwo: OperandTwo;
  result: boolean;
}
export interface CompoundCondition {
  conditions: BooleanCondition[];
}
export type BooleanCondition =
  | { equalTo: BooleanOperands; notEqualTo?: never; andAll?: never; orAll?: never }
  | { equalTo?: never; notEqualTo: BooleanOperands; andAll?: never; orAll?: never }
  | { equalTo?: never; notEqualTo?: never; andAll: CompoundCondition; orAll?: never }
  | { equalTo?: never; notEqualTo?: never; andAll?: never; orAll: CompoundCondition };
export type BooleanConditionList = BooleanCondition[];
export interface RequiredCaseRule {
  defaultValue: boolean;
  conditions: BooleanCondition[];
}
export type ParentChildFieldOptionValue = string;
export type ParentChildFieldOptionValueList = string[];
export interface ParentChildFieldOptionsMapping {
  parentFieldOptionValue: string;
  childFieldOptionValues: string[];
}
export type ParentChildFieldOptionsMappingList = ParentChildFieldOptionsMapping[];
export interface FieldOptionsCaseRule {
  parentFieldId?: string;
  childFieldId?: string;
  parentChildFieldOptionsMappings: ParentChildFieldOptionsMapping[];
}
export interface HiddenCaseRule {
  defaultValue: boolean;
  conditions: BooleanCondition[];
}
export type CaseRuleDetails =
  | { required: RequiredCaseRule; fieldOptions?: never; hidden?: never }
  | { required?: never; fieldOptions: FieldOptionsCaseRule; hidden?: never }
  | { required?: never; fieldOptions?: never; hidden: HiddenCaseRule };
export type CaseRuleDescription = string;
export type Deleted = boolean;
export type CreatedTime = Date;
export type LastModifiedTime = Date;
export type Tags = { [key: string]: string | undefined };
export interface GetCaseRuleResponse {
  caseRuleId: string;
  name: string;
  caseRuleArn: string;
  rule: CaseRuleDetails;
  description?: string;
  deleted?: boolean;
  createdTime?: Date;
  lastModifiedTime?: Date;
  tags?: { [key: string]: string | undefined };
}
export type BatchGetCaseRuleList = GetCaseRuleResponse[];
export interface CaseRuleError {
  id: string;
  errorCode: string;
  message?: string;
}
export type BatchGetCaseRuleErrorList = CaseRuleError[];
export type BatchGetCaseRuleUnprocessedList = string[];
export interface BatchGetCaseRuleResponse {
  caseRules: GetCaseRuleResponse[];
  errors: CaseRuleError[];
  unprocessedCaseRules?: string[];
}
export interface FieldIdentifier {
  id: string;
}
export type BatchGetFieldIdentifierList = FieldIdentifier[];
export interface BatchGetFieldRequest {
  domainId: string;
  fields: FieldIdentifier[];
}
export type FieldName = string;
export type FieldArn = string;
export type FieldDescription = string;
export type FieldType = string;
export type FieldNamespace = string;
export interface TextAttributes {
  isMultiline: boolean;
}
export type FieldAttributes = { text: TextAttributes };
export interface GetFieldResponse {
  fieldId: string;
  name: string;
  fieldArn: string;
  description?: string;
  type: string;
  namespace: string;
  tags?: { [key: string]: string | undefined };
  deleted?: boolean;
  createdTime?: Date;
  lastModifiedTime?: Date;
  attributes?: FieldAttributes;
}
export type BatchGetFieldList = GetFieldResponse[];
export interface FieldError {
  id: string;
  errorCode: string;
  message?: string;
}
export type BatchGetFieldErrorList = FieldError[];
export interface BatchGetFieldResponse {
  fields: GetFieldResponse[];
  errors: FieldError[];
}
export type FieldOptionName = string;
export type FieldOptionValue = string;
export interface FieldOption {
  name: string;
  value: string;
  active: boolean;
}
export type FieldOptionsList = FieldOption[];
export interface BatchPutFieldOptionsRequest {
  domainId: string;
  fieldId: string;
  options: FieldOption[];
}
export interface FieldOptionError {
  message: string;
  errorCode: string;
  value: string;
}
export type FieldOptionErrorList = FieldOptionError[];
export interface BatchPutFieldOptionsResponse {
  errors?: FieldOptionError[];
}
export type TemplateId = string;
export interface EmptyFieldValue {}
export type FieldValueUnion =
  | {
      stringValue: string;
      doubleValue?: never;
      booleanValue?: never;
      emptyValue?: never;
      userArnValue?: never;
    }
  | {
      stringValue?: never;
      doubleValue: number;
      booleanValue?: never;
      emptyValue?: never;
      userArnValue?: never;
    }
  | {
      stringValue?: never;
      doubleValue?: never;
      booleanValue: boolean;
      emptyValue?: never;
      userArnValue?: never;
    }
  | {
      stringValue?: never;
      doubleValue?: never;
      booleanValue?: never;
      emptyValue: EmptyFieldValue;
      userArnValue?: never;
    }
  | {
      stringValue?: never;
      doubleValue?: never;
      booleanValue?: never;
      emptyValue?: never;
      userArnValue: string;
    };
export interface FieldValue {
  id: string;
  value: FieldValueUnion;
}
export type FieldValueList = FieldValue[];
export type UserArn = string;
export type CustomEntity = string | redacted.Redacted<string>;
export type UserUnion =
  | { userArn: string; customEntity?: never }
  | { userArn?: never; customEntity: string | redacted.Redacted<string> };
export type MutableTagKey = string;
export type TagValueString = string;
export type MutableTags = { [key: string]: string | undefined };
export interface CreateCaseRequest {
  domainId: string;
  templateId: string;
  fields: FieldValue[];
  clientToken?: string;
  performedBy?: UserUnion;
  tags?: { [key: string]: string | undefined };
}
export type CaseId = string;
export type CaseArn = string;
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
export type DomainName = string;
export interface CreateDomainRequest {
  name: string;
}
export type DomainArn = string;
export type DomainStatus = string;
export interface CreateDomainResponse {
  domainId: string;
  domainArn: string;
  domainStatus: string;
}
export interface CreateFieldRequest {
  domainId: string;
  name: string;
  type: string;
  description?: string;
  attributes?: FieldAttributes;
}
export interface CreateFieldResponse {
  fieldId: string;
  fieldArn: string;
}
export type LayoutName = string;
export interface FieldItem {
  id: string;
}
export type FieldList = FieldItem[];
export interface FieldGroup {
  name?: string;
  fields: FieldItem[];
}
export type Section = { fieldGroup: FieldGroup };
export type SectionsList = Section[];
export interface LayoutSections {
  sections?: Section[];
}
export interface BasicLayout {
  topPanel?: LayoutSections;
  moreInfo?: LayoutSections;
}
export type LayoutContent = { basic: BasicLayout };
export interface CreateLayoutRequest {
  domainId: string;
  name: string;
  content: LayoutContent;
}
export type LayoutId = string;
export type LayoutArn = string;
export interface CreateLayoutResponse {
  layoutId: string;
  layoutArn: string;
}
export type RelatedItemType = string;
export type ContactArn = string;
export interface Contact {
  contactArn: string;
}
export type CommentBody = string;
export type CommentBodyTextType = string;
export interface CommentContent {
  body: string;
  contentType: string;
}
export type FileArn = string;
export interface FileContent {
  fileArn: string;
}
export type SlaName = string | redacted.Redacted<string>;
export type SlaType = string;
export type SlaFieldValueUnionList = FieldValueUnion[];
export type TargetSlaMinutes = number;
export interface SlaInputConfiguration {
  name: string | redacted.Redacted<string>;
  type: string;
  fieldId?: string;
  targetFieldValues?: FieldValueUnion[];
  targetSlaMinutes: number;
}
export type SlaInputContent = { slaInputConfiguration: SlaInputConfiguration };
export interface ConnectCaseInputContent {
  caseId: string;
}
export interface CustomInputContent {
  fields: FieldValue[];
}
export type RelatedItemInputContent =
  | {
      contact: Contact;
      comment?: never;
      file?: never;
      sla?: never;
      connectCase?: never;
      custom?: never;
    }
  | {
      contact?: never;
      comment: CommentContent;
      file?: never;
      sla?: never;
      connectCase?: never;
      custom?: never;
    }
  | {
      contact?: never;
      comment?: never;
      file: FileContent;
      sla?: never;
      connectCase?: never;
      custom?: never;
    }
  | {
      contact?: never;
      comment?: never;
      file?: never;
      sla: SlaInputContent;
      connectCase?: never;
      custom?: never;
    }
  | {
      contact?: never;
      comment?: never;
      file?: never;
      sla?: never;
      connectCase: ConnectCaseInputContent;
      custom?: never;
    }
  | {
      contact?: never;
      comment?: never;
      file?: never;
      sla?: never;
      connectCase?: never;
      custom: CustomInputContent;
    };
export interface CreateRelatedItemRequest {
  domainId: string;
  caseId: string;
  type: string;
  content: RelatedItemInputContent;
  performedBy?: UserUnion;
}
export type RelatedItemId = string;
export type RelatedItemArn = string;
export interface CreateRelatedItemResponse {
  relatedItemId: string;
  relatedItemArn: string;
}
export type TemplateName = string;
export type TemplateDescription = string;
export interface LayoutConfiguration {
  defaultLayout?: string;
}
export interface RequiredField {
  fieldId: string;
}
export type RequiredFieldList = RequiredField[];
export type TemplateStatus = string;
export interface TemplateRule {
  caseRuleId: string;
  fieldId?: string;
}
export type TemplateCaseRuleList = TemplateRule[];
export type TagPropagationResourceType = string;
export interface TagPropagationConfiguration {
  resourceType: string;
  tagMap: { [key: string]: string | undefined };
}
export type TagPropagationConfigurationList = TagPropagationConfiguration[];
export interface CreateTemplateRequest {
  domainId: string;
  name: string;
  description?: string;
  layoutConfiguration?: LayoutConfiguration;
  requiredFields?: RequiredField[];
  status?: string;
  rules?: TemplateRule[];
  tagPropagationConfigurations?: TagPropagationConfiguration[];
}
export type TemplateArn = string;
export interface CreateTemplateResponse {
  templateId: string;
  templateArn: string;
}
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
export type FieldIdentifierList = FieldIdentifier[];
export type NextToken = string;
export interface GetCaseRequest {
  caseId: string;
  domainId: string;
  fields: FieldIdentifier[];
  nextToken?: string;
}
export interface GetCaseResponse {
  fields: FieldValue[];
  templateId: string;
  nextToken?: string;
  tags?: { [key: string]: string | undefined };
}
export interface GetCaseAuditEventsRequest {
  caseId: string;
  domainId: string;
  maxResults?: number;
  nextToken?: string;
}
export type AuditEventId = string;
export type AuditEventType = string;
export type AuditEventDateTime = Date;
export type AuditEventFieldId = string;
export type AuditEventFieldValueUnion =
  | {
      stringValue: string;
      doubleValue?: never;
      booleanValue?: never;
      emptyValue?: never;
      userArnValue?: never;
    }
  | {
      stringValue?: never;
      doubleValue: number;
      booleanValue?: never;
      emptyValue?: never;
      userArnValue?: never;
    }
  | {
      stringValue?: never;
      doubleValue?: never;
      booleanValue: boolean;
      emptyValue?: never;
      userArnValue?: never;
    }
  | {
      stringValue?: never;
      doubleValue?: never;
      booleanValue?: never;
      emptyValue: EmptyFieldValue;
      userArnValue?: never;
    }
  | {
      stringValue?: never;
      doubleValue?: never;
      booleanValue?: never;
      emptyValue?: never;
      userArnValue: string;
    };
export interface AuditEventField {
  eventFieldId: string;
  oldValue?: AuditEventFieldValueUnion;
  newValue: AuditEventFieldValueUnion;
}
export type AuditEventFieldList = AuditEventField[];
export type IamPrincipalArn = string;
export interface AuditEventPerformedBy {
  user?: UserUnion;
  iamPrincipalArn: string;
}
export interface AuditEvent {
  eventId: string;
  type: string;
  relatedItemType?: string;
  performedTime: Date;
  fields: AuditEventField[];
  performedBy?: AuditEventPerformedBy;
}
export type AuditEventsList = AuditEvent[];
export interface GetCaseAuditEventsResponse {
  nextToken?: string;
  auditEvents: AuditEvent[];
}
export interface GetCaseEventConfigurationRequest {
  domainId: string;
}
export interface CaseEventIncludedData {
  fields: FieldIdentifier[];
}
export interface RelatedItemEventIncludedData {
  includeContent: boolean;
}
export interface EventIncludedData {
  caseData?: CaseEventIncludedData;
  relatedItemData?: RelatedItemEventIncludedData;
}
export interface EventBridgeConfiguration {
  enabled: boolean;
  includedData?: EventIncludedData;
}
export interface GetCaseEventConfigurationResponse {
  eventBridge: EventBridgeConfiguration;
}
export interface GetDomainRequest {
  domainId: string;
}
export interface GetDomainResponse {
  domainId: string;
  domainArn: string;
  name: string;
  createdTime: Date;
  domainStatus: string;
  tags?: { [key: string]: string | undefined };
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
  tags?: { [key: string]: string | undefined };
  deleted?: boolean;
  createdTime?: Date;
  lastModifiedTime?: Date;
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
  requiredFields?: RequiredField[];
  tags?: { [key: string]: string | undefined };
  status: string;
  deleted?: boolean;
  createdTime?: Date;
  lastModifiedTime?: Date;
  rules?: TemplateRule[];
  tagPropagationConfigurations?: TagPropagationConfiguration[];
}
export type MaxResults = number;
export interface ListCaseRulesRequest {
  domainId: string;
  maxResults?: number;
  nextToken?: string;
}
export type RuleType = string;
export interface CaseRuleSummary {
  caseRuleId: string;
  name: string;
  caseRuleArn: string;
  ruleType: string;
  description?: string;
}
export type CaseRuleSummaryList = CaseRuleSummary[];
export interface ListCaseRulesResponse {
  caseRules: CaseRuleSummary[];
  nextToken?: string;
}
export interface ListCasesForContactRequest {
  domainId: string;
  contactArn: string;
  maxResults?: number;
  nextToken?: string;
}
export interface CaseSummary {
  caseId: string;
  templateId: string;
}
export type CaseSummaryList = CaseSummary[];
export interface ListCasesForContactResponse {
  cases: CaseSummary[];
  nextToken?: string;
}
export interface ListDomainsRequest {
  maxResults?: number;
  nextToken?: string;
}
export interface DomainSummary {
  domainId: string;
  domainArn: string;
  name: string;
}
export type DomainSummaryList = DomainSummary[];
export interface ListDomainsResponse {
  domains: DomainSummary[];
  nextToken?: string;
}
export type Value = string;
export type ValuesList = string[];
export interface ListFieldOptionsRequest {
  domainId: string;
  fieldId: string;
  maxResults?: number;
  nextToken?: string;
  values?: string[];
}
export interface ListFieldOptionsResponse {
  options: FieldOption[];
  nextToken?: string;
}
export interface ListFieldsRequest {
  domainId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface FieldSummary {
  fieldId: string;
  fieldArn: string;
  name: string;
  type: string;
  namespace: string;
  attributes?: FieldAttributes;
}
export type FieldSummaryList = FieldSummary[];
export interface ListFieldsResponse {
  fields: FieldSummary[];
  nextToken?: string;
}
export interface ListLayoutsRequest {
  domainId: string;
  maxResults?: number;
  nextToken?: string;
}
export interface LayoutSummary {
  layoutId: string;
  layoutArn: string;
  name: string;
}
export type LayoutSummaryList = LayoutSummary[];
export interface ListLayoutsResponse {
  layouts: LayoutSummary[];
  nextToken?: string;
}
export type Arn = string;
export interface ListTagsForResourceRequest {
  arn: string;
}
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | undefined };
}
export type TemplateStatusFilters = string[];
export interface ListTemplatesRequest {
  domainId: string;
  maxResults?: number;
  nextToken?: string;
  status?: string[];
}
export interface TemplateSummary {
  templateId: string;
  templateArn: string;
  name: string;
  status: string;
  tagPropagationConfigurations?: TagPropagationConfiguration[];
}
export type TemplateSummaryList = TemplateSummary[];
export interface ListTemplatesResponse {
  templates: TemplateSummary[];
  nextToken?: string;
}
export interface PutCaseEventConfigurationRequest {
  domainId: string;
  eventBridge: EventBridgeConfiguration;
}
export interface PutCaseEventConfigurationResponse {}
export type Channel = string;
export type ChannelList = string[];
export interface ContactFilter {
  channel?: string[];
  contactArn?: string;
}
export interface CommentFilter {}
export interface FileFilter {
  fileArn?: string;
}
export type SlaStatus = string;
export interface SlaFilter {
  name?: string | redacted.Redacted<string>;
  status?: string;
}
export interface ConnectCaseFilter {
  caseId?: string;
}
export type FieldFilter =
  | {
      equalTo: FieldValue;
      contains?: never;
      greaterThan?: never;
      greaterThanOrEqualTo?: never;
      lessThan?: never;
      lessThanOrEqualTo?: never;
    }
  | {
      equalTo?: never;
      contains: FieldValue;
      greaterThan?: never;
      greaterThanOrEqualTo?: never;
      lessThan?: never;
      lessThanOrEqualTo?: never;
    }
  | {
      equalTo?: never;
      contains?: never;
      greaterThan: FieldValue;
      greaterThanOrEqualTo?: never;
      lessThan?: never;
      lessThanOrEqualTo?: never;
    }
  | {
      equalTo?: never;
      contains?: never;
      greaterThan?: never;
      greaterThanOrEqualTo: FieldValue;
      lessThan?: never;
      lessThanOrEqualTo?: never;
    }
  | {
      equalTo?: never;
      contains?: never;
      greaterThan?: never;
      greaterThanOrEqualTo?: never;
      lessThan: FieldValue;
      lessThanOrEqualTo?: never;
    }
  | {
      equalTo?: never;
      contains?: never;
      greaterThan?: never;
      greaterThanOrEqualTo?: never;
      lessThan?: never;
      lessThanOrEqualTo: FieldValue;
    };
export type CustomFieldsFilterList = CustomFieldsFilter[];
export type CustomFieldsFilter =
  | { field: FieldFilter; not?: never; andAll?: never; orAll?: never }
  | { field?: never; not: CustomFieldsFilter; andAll?: never; orAll?: never }
  | { field?: never; not?: never; andAll: CustomFieldsFilter[]; orAll?: never }
  | { field?: never; not?: never; andAll?: never; orAll: CustomFieldsFilter[] };
export interface CustomFilter {
  fields?: CustomFieldsFilter;
}
export type RelatedItemTypeFilter =
  | {
      contact: ContactFilter;
      comment?: never;
      file?: never;
      sla?: never;
      connectCase?: never;
      custom?: never;
    }
  | {
      contact?: never;
      comment: CommentFilter;
      file?: never;
      sla?: never;
      connectCase?: never;
      custom?: never;
    }
  | {
      contact?: never;
      comment?: never;
      file: FileFilter;
      sla?: never;
      connectCase?: never;
      custom?: never;
    }
  | {
      contact?: never;
      comment?: never;
      file?: never;
      sla: SlaFilter;
      connectCase?: never;
      custom?: never;
    }
  | {
      contact?: never;
      comment?: never;
      file?: never;
      sla?: never;
      connectCase: ConnectCaseFilter;
      custom?: never;
    }
  | {
      contact?: never;
      comment?: never;
      file?: never;
      sla?: never;
      connectCase?: never;
      custom: CustomFilter;
    };
export type RelatedItemFilterList = RelatedItemTypeFilter[];
export type SearchAllRelatedItemsSortProperty = string;
export type Order = string;
export interface SearchAllRelatedItemsSort {
  sortProperty: string;
  sortOrder: string;
}
export type SearchAllRelatedItemsSortList = SearchAllRelatedItemsSort[];
export interface SearchAllRelatedItemsRequest {
  domainId: string;
  maxResults?: number;
  nextToken?: string;
  filters?: RelatedItemTypeFilter[];
  sorts?: SearchAllRelatedItemsSort[];
}
export type AssociationTime = Date;
export type ConnectedToSystemTime = Date;
export interface ContactContent {
  contactArn: string;
  channel: string;
  connectedToSystemTime: Date;
}
export type SlaTargetTime = Date;
export type SlaCompletionTime = Date;
export interface SlaConfiguration {
  name: string | redacted.Redacted<string>;
  type: string;
  status: string;
  fieldId?: string;
  targetFieldValues?: FieldValueUnion[];
  targetTime: Date;
  completionTime?: Date;
}
export interface SlaContent {
  slaConfiguration: SlaConfiguration;
}
export interface ConnectCaseContent {
  caseId: string;
}
export interface CustomContent {
  fields: FieldValue[];
}
export type RelatedItemContent =
  | {
      contact: ContactContent;
      comment?: never;
      file?: never;
      sla?: never;
      connectCase?: never;
      custom?: never;
    }
  | {
      contact?: never;
      comment: CommentContent;
      file?: never;
      sla?: never;
      connectCase?: never;
      custom?: never;
    }
  | {
      contact?: never;
      comment?: never;
      file: FileContent;
      sla?: never;
      connectCase?: never;
      custom?: never;
    }
  | {
      contact?: never;
      comment?: never;
      file?: never;
      sla: SlaContent;
      connectCase?: never;
      custom?: never;
    }
  | {
      contact?: never;
      comment?: never;
      file?: never;
      sla?: never;
      connectCase: ConnectCaseContent;
      custom?: never;
    }
  | {
      contact?: never;
      comment?: never;
      file?: never;
      sla?: never;
      connectCase?: never;
      custom: CustomContent;
    };
export interface SearchAllRelatedItemsResponseItem {
  relatedItemId: string;
  caseId: string;
  type: string;
  associationTime: Date;
  content: RelatedItemContent;
  performedBy?: UserUnion;
  tags?: { [key: string]: string | undefined };
}
export type SearchAllRelatedItemsResponseItemList = SearchAllRelatedItemsResponseItem[];
export interface SearchAllRelatedItemsResponse {
  nextToken?: string;
  relatedItems: SearchAllRelatedItemsResponseItem[];
}
export type SearchTagKey = string;
export interface TagValue {
  key?: string;
  value?: string;
}
export type TagFilter = { equalTo: TagValue };
export type CaseFilterList = CaseFilter[];
export type CaseFilter =
  | { field: FieldFilter; not?: never; tag?: never; andAll?: never; orAll?: never }
  | { field?: never; not: CaseFilter; tag?: never; andAll?: never; orAll?: never }
  | { field?: never; not?: never; tag: TagFilter; andAll?: never; orAll?: never }
  | { field?: never; not?: never; tag?: never; andAll: CaseFilter[]; orAll?: never }
  | { field?: never; not?: never; tag?: never; andAll?: never; orAll: CaseFilter[] };
export interface Sort {
  fieldId: string;
  sortOrder: string;
}
export type SortList = Sort[];
export interface SearchCasesRequest {
  domainId: string;
  maxResults?: number;
  nextToken?: string;
  searchTerm?: string;
  filter?: CaseFilter;
  sorts?: Sort[];
  fields?: FieldIdentifier[];
}
export interface SearchCasesResponseItem {
  caseId: string;
  templateId: string;
  fields: FieldValue[];
  tags?: { [key: string]: string | undefined };
}
export type SearchCasesResponseItemList = SearchCasesResponseItem[];
export type TotalCount = number;
export interface SearchCasesResponse {
  nextToken?: string;
  cases: SearchCasesResponseItem[];
  totalCount?: number;
}
export interface SearchRelatedItemsRequest {
  domainId: string;
  caseId: string;
  maxResults?: number;
  nextToken?: string;
  filters?: RelatedItemTypeFilter[];
}
export interface SearchRelatedItemsResponseItem {
  relatedItemId: string;
  type: string;
  associationTime: Date;
  content: RelatedItemContent;
  tags?: { [key: string]: string | undefined };
  performedBy?: UserUnion;
}
export type SearchRelatedItemsResponseItemList = SearchRelatedItemsResponseItem[];
export interface SearchRelatedItemsResponse {
  nextToken?: string;
  relatedItems: SearchRelatedItemsResponseItem[];
}
export interface TagResourceRequest {
  arn: string;
  tags: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type TagKey = string;
export type TagKeyList = string[];
export interface UntagResourceRequest {
  arn: string;
  tagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateCaseRequest {
  domainId: string;
  caseId: string;
  fields: FieldValue[];
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
  attributes?: FieldAttributes;
}
export interface UpdateFieldResponse {}
export interface UpdateLayoutRequest {
  domainId: string;
  layoutId: string;
  name?: string;
  content?: LayoutContent;
}
export interface UpdateLayoutResponse {}
export interface CommentUpdateContent {
  body: string;
  contentType: string;
}
export interface CustomUpdateContent {
  fields: FieldValue[];
}
export type RelatedItemUpdateContent =
  | { comment: CommentUpdateContent; custom?: never }
  | { comment?: never; custom: CustomUpdateContent };
export interface UpdateRelatedItemRequest {
  domainId: string;
  caseId: string;
  relatedItemId: string;
  content: RelatedItemUpdateContent;
  performedBy?: UserUnion;
}
export interface UpdateRelatedItemResponse {
  relatedItemId: string;
  relatedItemArn: string;
  type: string;
  content: RelatedItemContent;
  associationTime: Date;
  tags?: { [key: string]: string | undefined };
  lastUpdatedUser?: UserUnion;
  createdBy?: UserUnion;
}
export interface UpdateTemplateRequest {
  domainId: string;
  templateId: string;
  name?: string;
  description?: string;
  layoutConfiguration?: LayoutConfiguration;
  requiredFields?: RequiredField[];
  status?: string;
  rules?: TemplateRule[];
  tagPropagationConfigurations?: TagPropagationConfiguration[];
}
export interface UpdateTemplateResponse {}
export type BatchGetCaseRuleError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets a batch of case rules. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see Add case field conditions to a case template.
 */
export const batchGetCaseRule: API.OperationMethod<
  BatchGetCaseRuleRequest,
  BatchGetCaseRuleResponse,
  BatchGetCaseRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2, __c0, 2) as any as S.Schema<BatchGetCaseRuleRequest>,
  output: __S(21, __c2, 5) as any as S.Schema<BatchGetCaseRuleResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetCaseRule",
}));

export type BatchGetFieldError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the description for the list of fields in the request parameters.
 */
export const batchGetField: API.OperationMethod<
  BatchGetFieldRequest,
  BatchGetFieldResponse,
  BatchGetFieldError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24, __c3, 0) as any as S.Schema<BatchGetFieldRequest>,
  output: __S(29, __c3, 5) as any as S.Schema<BatchGetFieldResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetField",
}));

export type BatchPutFieldOptionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates and updates a set of field options for a single select field in a Cases domain.
 */
export const batchPutFieldOptions: API.OperationMethod<
  BatchPutFieldOptionsRequest,
  BatchPutFieldOptionsResponse,
  BatchPutFieldOptionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(32, __c4, 0) as any as S.Schema<BatchPutFieldOptionsRequest>,
  output: __S(35, __c4, 3) as any as S.Schema<BatchPutFieldOptionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchPutFieldOptions",
}));

export type CreateCaseError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * If you provide a value for `PerformedBy.UserArn` you must also have connect:DescribeUser permission on the User ARN resource that you provide
 *
 * Creates a case in the specified Cases domain. Case system and custom fields are taken as an array id/value pairs with a declared data types.
 *
 * When creating a case from a template that has tag propagation configurations, the specified tags are automatically applied to the case.
 *
 * The following fields are required when creating a case:
 *
 * - `customer_id` - You must provide the full customer profile ARN in this format: `arn:aws:profile:your_AWS_Region:your_AWS_account ID:domains/your_profiles_domain_name/profiles/profile_ID`
 *
 * - `title`
 */
export const createCase: API.OperationMethod<
  CreateCaseRequest,
  CreateCaseResponse,
  CreateCaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(41, __c5, 1) as any as S.Schema<CreateCaseRequest>,
  output: __S(42, __c5, 2) as any as S.Schema<CreateCaseResponse>,
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
  operationName: "CreateCase",
}));

export type CreateCaseRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new case rule. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see Add case field conditions to a case template.
 */
export const createCaseRule: API.OperationMethod<
  CreateCaseRuleRequest,
  CreateCaseRuleResponse,
  CreateCaseRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(43, __c5, 3) as any as S.Schema<CreateCaseRuleRequest>,
  output: __S(44, __c5, 4) as any as S.Schema<CreateCaseRuleResponse>,
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
  operationName: "CreateCaseRule",
}));

export type CreateDomainError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a domain, which is a container for all case data, such as cases, fields, templates and layouts. Each Amazon Connect instance can be associated with only one Cases domain.
 *
 * This will not associate your connect instance to Cases domain. Instead, use the Amazon Connect CreateIntegrationAssociation API. You need specific IAM permissions to successfully associate the Cases domain. For more information, see Onboard to Cases.
 */
export const createDomain: API.OperationMethod<
  CreateDomainRequest,
  CreateDomainResponse,
  CreateDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45, __c5, 5) as any as S.Schema<CreateDomainRequest>,
  output: __S(46, __c5, 6) as any as S.Schema<CreateDomainResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDomain",
}));

export type CreateFieldError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a field in the Cases domain. This field is used to define the case object model (that is, defines what data can be captured on cases) in a Cases domain.
 */
export const createField: API.OperationMethod<
  CreateFieldRequest,
  CreateFieldResponse,
  CreateFieldError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47, __c5, 7) as any as S.Schema<CreateFieldRequest>,
  output: __S(48, __c6, 0) as any as S.Schema<CreateFieldResponse>,
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
  operationName: "CreateField",
}));

export type CreateLayoutError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a layout in the Cases domain. Layouts define the following configuration in the top section and More Info tab of the Cases user interface:
 *
 * - Fields to display to the users
 *
 * - Field ordering
 *
 * Title and Status fields cannot be part of layouts since they are not configurable.
 */
export const createLayout: API.OperationMethod<
  CreateLayoutRequest,
  CreateLayoutResponse,
  CreateLayoutError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(55, __c6, 7) as any as S.Schema<CreateLayoutRequest>,
  output: __S(56, __c7, 0) as any as S.Schema<CreateLayoutResponse>,
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
  operationName: "CreateLayout",
}));

export type CreateRelatedItemError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a related item (comments, tasks, and contacts) and associates it with a case.
 *
 * There's a quota for the number of fields allowed in a Custom type related item. See Amazon Connect Cases quotas.
 *
 * **Use cases**
 *
 * Following are examples of related items that you may want to associate with a case:
 *
 * - Related contacts, such as calls, chats, emails tasks
 *
 * - Comments, for agent notes
 *
 * - SLAs, to capture target resolution goals
 *
 * - Cases, to capture related Amazon Connect Cases
 *
 * - Files, such as policy documentation or customer-provided attachments
 *
 * - Custom related items, which provide flexibility for you to define related items that such as bookings, orders, products, notices, and more
 *
 * **Important things to know**
 *
 * - If you are associating a contact to a case by passing in `Contact` for a `type`, you must have DescribeContact permission on the ARN of the contact that you provide in `content.contact.contactArn`.
 *
 * - A Related Item is a resource that is associated with a case. It may or may not have an external identifier linking it to an external resource (for example, a `contactArn`). All Related Items have their own internal identifier, the `relatedItemArn`. Examples of related items include `comments` and `contacts`.
 *
 * - If you provide a value for `performedBy.userArn` you must also have DescribeUser permission on the ARN of the user that you provide.
 *
 * - The `type` field is reserved for internal use only.
 *
 * **Endpoints**: See Amazon Connect endpoints and quotas.
 */
export const createRelatedItem: API.OperationMethod<
  CreateRelatedItemRequest,
  CreateRelatedItemResponse,
  CreateRelatedItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66, __c8, 2) as any as S.Schema<CreateRelatedItemRequest>,
  output: __S(67, __c8, 3) as any as S.Schema<CreateRelatedItemResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRelatedItem",
}));

export type CreateTemplateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a template in the Cases domain. This template is used to define the case object model (that is, to define what data can be captured on cases) in a Cases domain. A template must have a unique name within a domain, and it must reference existing field IDs and layout IDs. Additionally, multiple fields with same IDs are not allowed within the same Template. A template can be either Active or Inactive, as indicated by its status. Inactive templates cannot be used to create cases.
 *
 * Other template APIs are:
 *
 * - DeleteTemplate
 *
 * - GetTemplate
 *
 * - ListTemplates
 *
 * - UpdateTemplate
 */
export const createTemplate: API.OperationMethod<
  CreateTemplateRequest,
  CreateTemplateResponse,
  CreateTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75, __c9, 3) as any as S.Schema<CreateTemplateRequest>,
  output: __S(76, __c9, 4) as any as S.Schema<CreateTemplateResponse>,
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
  operationName: "CreateTemplate",
}));

export type DeleteCaseError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The DeleteCase API permanently deletes a case and all its associated resources from the cases data store. After a successful deletion, you cannot:
 *
 * - Retrieve related items
 *
 * - Access audit history
 *
 * - Perform any operations that require the CaseID
 *
 * This action is irreversible. After you delete a case, you cannot recover its data.
 */
export const deleteCase: API.OperationMethod<
  DeleteCaseRequest,
  DeleteCaseResponse,
  DeleteCaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77, __c9, 5) as any as S.Schema<DeleteCaseRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<DeleteCaseResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCase",
}));

export type DeleteCaseRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Deletes a case rule. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see Add case field conditions to a case template.
 */
export const deleteCaseRule: API.OperationMethod<
  DeleteCaseRuleRequest,
  DeleteCaseRuleResponse,
  DeleteCaseRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(78, __c9, 6) as any as S.Schema<DeleteCaseRuleRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<DeleteCaseRuleResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCaseRule",
}));

export type DeleteDomainError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a Cases domain.
 *
 * After deleting your domain you must disassociate the deleted domain from your Amazon Connect instance with another API call before being able to use Cases again with this Amazon Connect instance. See DeleteIntegrationAssociation.
 */
export const deleteDomain: API.OperationMethod<
  DeleteDomainRequest,
  DeleteDomainResponse,
  DeleteDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(79, __c9, 7) as any as S.Schema<DeleteDomainRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<DeleteDomainResponse>,
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
  operationName: "DeleteDomain",
}));

export type DeleteFieldError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a field from a cases template.
 *
 * After a field is deleted:
 *
 * - You can still retrieve the field by calling `BatchGetField`.
 *
 * - You cannot update a deleted field by calling `UpdateField`; it throws a `ValidationException`.
 *
 * - Deleted fields are not included in the `ListFields` response.
 *
 * - Calling `CreateCase` with a deleted field throws a `ValidationException` denoting which field identifiers in the request have been deleted.
 *
 * - Calling `GetCase` with a deleted field identifier returns the deleted field's value if one exists.
 *
 * - Calling `UpdateCase` with a deleted field ID throws a `ValidationException` if the case does not already contain a value for the deleted field. Otherwise it succeeds, allowing you to update or remove (using `emptyValue: {}`) the field's value from the case.
 *
 * - `GetTemplate` does not return field IDs for deleted fields.
 *
 * - `GetLayout` does not return field IDs for deleted fields.
 *
 * - Calling `SearchCases` with the deleted field ID as a filter returns any cases that have a value for the deleted field that matches the filter criteria.
 *
 * - Calling `SearchCases` with a `searchTerm` value that matches a deleted field's value on a case returns the case in the response.
 *
 * - Calling `BatchPutFieldOptions` with a deleted field ID throw a `ValidationException`.
 *
 * - Calling `GetCaseEventConfiguration` does not return field IDs for deleted fields.
 */
export const deleteField: API.OperationMethod<
  DeleteFieldRequest,
  DeleteFieldResponse,
  DeleteFieldError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80, __c10, 0) as any as S.Schema<DeleteFieldRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<DeleteFieldResponse>,
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
  operationName: "DeleteField",
}));

export type DeleteLayoutError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a layout from a cases template. You can delete up to 100 layouts per domain.
 *
 * After a layout is deleted:
 *
 * - You can still retrieve the layout by calling `GetLayout`.
 *
 * - You cannot update a deleted layout by calling `UpdateLayout`; it throws a `ValidationException`.
 *
 * - Deleted layouts are not included in the `ListLayouts` response.
 */
export const deleteLayout: API.OperationMethod<
  DeleteLayoutRequest,
  DeleteLayoutResponse,
  DeleteLayoutError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(81, __c10, 1) as any as S.Schema<DeleteLayoutRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<DeleteLayoutResponse>,
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
  operationName: "DeleteLayout",
}));

export type DeleteRelatedItemError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the related item resource under a case.
 *
 * This API cannot be used on a FILE type related attachment. To delete this type of file, use the DeleteAttachedFile API
 */
export const deleteRelatedItem: API.OperationMethod<
  DeleteRelatedItemRequest,
  DeleteRelatedItemResponse,
  DeleteRelatedItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(82, __c10, 2) as any as S.Schema<DeleteRelatedItemRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<DeleteRelatedItemResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRelatedItem",
}));

export type DeleteTemplateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a cases template. You can delete up to 100 templates per domain.
 *
 * After a cases template is deleted:
 *
 * - You can still retrieve the template by calling `GetTemplate`.
 *
 * - You cannot update the template.
 *
 * - You cannot create a case by using the deleted template.
 *
 * - Deleted templates are not included in the `ListTemplates` response.
 */
export const deleteTemplate: API.OperationMethod<
  DeleteTemplateRequest,
  DeleteTemplateResponse,
  DeleteTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(83, __c10, 3) as any as S.Schema<DeleteTemplateRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<DeleteTemplateResponse>,
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
  operationName: "DeleteTemplate",
}));

export type GetCaseError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a specific case if it exists.
 */
export const getCase: API.PaginatedOperationMethod<
  GetCaseRequest,
  GetCaseResponse,
  GetCaseError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(84, __c10, 4) as any as S.Schema<GetCaseRequest>,
  output: __S(85, __c10, 5) as any as S.Schema<GetCaseResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCase",
  pagination: { inputToken: "nextToken", outputToken: "nextToken" } as const,
})) as any;

export type GetCaseAuditEventsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the audit history about a specific case if it exists.
 */
export const getCaseAuditEvents: API.PaginatedOperationMethod<
  GetCaseAuditEventsRequest,
  GetCaseAuditEventsResponse,
  GetCaseAuditEventsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(86, __c10, 6) as any as S.Schema<GetCaseAuditEventsRequest>,
  output: __S(92, __c11, 4) as any as S.Schema<GetCaseAuditEventsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCaseAuditEvents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type GetCaseEventConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the case event publishing configuration.
 */
export const getCaseEventConfiguration: API.OperationMethod<
  GetCaseEventConfigurationRequest,
  GetCaseEventConfigurationResponse,
  GetCaseEventConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(93, __c11, 5) as any as S.Schema<GetCaseEventConfigurationRequest>,
  output: __S(98, __c12, 2) as any as S.Schema<GetCaseEventConfigurationResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCaseEventConfiguration",
}));

export type GetDomainError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a specific domain if it exists.
 */
export const getDomain: API.OperationMethod<
  GetDomainRequest,
  GetDomainResponse,
  GetDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(99, __c12, 3) as any as S.Schema<GetDomainRequest>,
  output: __S(100, __c12, 4) as any as S.Schema<GetDomainResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDomain",
}));

export type GetLayoutError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the details for the requested layout.
 */
export const getLayout: API.OperationMethod<
  GetLayoutRequest,
  GetLayoutResponse,
  GetLayoutError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(101, __c12, 5) as any as S.Schema<GetLayoutRequest>,
  output: __S(102, __c12, 6) as any as S.Schema<GetLayoutResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLayout",
}));

export type GetTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the details for the requested template. Other template APIs are:
 *
 * - CreateTemplate
 *
 * - DeleteTemplate
 *
 * - ListTemplates
 *
 * - UpdateTemplate
 */
export const getTemplate: API.OperationMethod<
  GetTemplateRequest,
  GetTemplateResponse,
  GetTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(103, __c12, 7) as any as S.Schema<GetTemplateRequest>,
  output: __S(104, __c13, 0) as any as S.Schema<GetTemplateResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTemplate",
}));

export type ListCaseRulesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all case rules in a Cases domain. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see Add case field conditions to a case template.
 */
export const listCaseRules: API.PaginatedOperationMethod<
  ListCaseRulesRequest,
  ListCaseRulesResponse,
  ListCaseRulesError,
  Credentials | HttpClient.HttpClient,
  CaseRuleSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(105, __c13, 1) as any as S.Schema<ListCaseRulesRequest>,
  output: __S(108, __c13, 4) as any as S.Schema<ListCaseRulesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCaseRules",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "caseRules",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListCasesForContactError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists cases for a given contact.
 */
export const listCasesForContact: API.PaginatedOperationMethod<
  ListCasesForContactRequest,
  ListCasesForContactResponse,
  ListCasesForContactError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(109, __c13, 5) as any as S.Schema<ListCasesForContactRequest>,
  output: __S(112, __c14, 0) as any as S.Schema<ListCasesForContactResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCasesForContact",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDomainsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all cases domains in the Amazon Web Services account. Each list item is a condensed summary object of the domain.
 */
export const listDomains: API.PaginatedOperationMethod<
  ListDomainsRequest,
  ListDomainsResponse,
  ListDomainsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(113, __c14, 1) as any as S.Schema<ListDomainsRequest>,
  output: __S(116, __c14, 4) as any as S.Schema<ListDomainsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomains",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFieldOptionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all of the field options for a field identifier in the domain.
 */
export const listFieldOptions: API.PaginatedOperationMethod<
  ListFieldOptionsRequest,
  ListFieldOptionsResponse,
  ListFieldOptionsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(117, __c14, 5) as any as S.Schema<ListFieldOptionsRequest>,
  output: __S(118, __c14, 6) as any as S.Schema<ListFieldOptionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFieldOptions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListFieldsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all fields in a Cases domain.
 */
export const listFields: API.PaginatedOperationMethod<
  ListFieldsRequest,
  ListFieldsResponse,
  ListFieldsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(119, __c14, 7) as any as S.Schema<ListFieldsRequest>,
  output: __S(122, __c15, 2) as any as S.Schema<ListFieldsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFields",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListLayoutsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all layouts in the given cases domain. Each list item is a condensed summary object of the layout.
 */
export const listLayouts: API.PaginatedOperationMethod<
  ListLayoutsRequest,
  ListLayoutsResponse,
  ListLayoutsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(123, __c15, 3) as any as S.Schema<ListLayoutsRequest>,
  output: __S(126, __c15, 6) as any as S.Schema<ListLayoutsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLayouts",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists tags for a resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(127, __c15, 7) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(128, __c16, 0) as any as S.Schema<ListTagsForResourceResponse>,
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

export type ListTemplatesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all of the templates in a Cases domain. Each list item is a condensed summary object of the template.
 *
 * Other template APIs are:
 *
 * - CreateTemplate
 *
 * - DeleteTemplate
 *
 * - GetTemplate
 *
 * - UpdateTemplate
 */
export const listTemplates: API.PaginatedOperationMethod<
  ListTemplatesRequest,
  ListTemplatesResponse,
  ListTemplatesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(129, __c16, 1) as any as S.Schema<ListTemplatesRequest>,
  output: __S(132, __c16, 4) as any as S.Schema<ListTemplatesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type PutCaseEventConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds case event publishing configuration. For a complete list of fields you can add to the event message, see Create case fields in the *Amazon Connect Administrator Guide*
 */
export const putCaseEventConfiguration: API.OperationMethod<
  PutCaseEventConfigurationRequest,
  PutCaseEventConfigurationResponse,
  PutCaseEventConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(133, __c16, 5) as any as S.Schema<PutCaseEventConfigurationRequest>,
  output: __S(134, __c16, 6) as any as S.Schema<PutCaseEventConfigurationResponse>,
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
  operationName: "PutCaseEventConfiguration",
}));

export type SearchAllRelatedItemsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Searches for related items across all cases within a domain. This is a global search operation that returns related items from multiple cases, unlike the case-specific SearchRelatedItems API.
 *
 * **Use cases**
 *
 * Following are common uses cases for this API:
 *
 * - Find cases with similar issues across the domain. For example, search for all cases containing comments about "product defect" to identify patterns and existing solutions.
 *
 * - Locate all cases associated with specific contacts or orders. For example, find all cases linked to a contactArn to understand the complete customer journey.
 *
 * - Monitor SLA compliance across cases. For example, search for all cases with "Active" SLA status to prioritize remediation efforts.
 *
 * **Important things to know**
 *
 * - This API returns case identifiers, not complete case objects. To retrieve full case details, you must make additional calls to the GetCase API for each returned case ID.
 *
 * - This API searches across related items content, not case fields. Use the SearchCases API to search within case field values.
 *
 * **Endpoints**: See Amazon Connect endpoints and quotas.
 */
export const searchAllRelatedItems: API.PaginatedOperationMethod<
  SearchAllRelatedItemsRequest,
  SearchAllRelatedItemsResponse,
  SearchAllRelatedItemsError,
  Credentials | HttpClient.HttpClient,
  SearchAllRelatedItemsResponseItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(147, __c18, 3) as any as S.Schema<SearchAllRelatedItemsRequest>,
  output: __S(154, __c19, 2) as any as S.Schema<SearchAllRelatedItemsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchAllRelatedItems",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "relatedItems",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchCasesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Searches for cases within their associated Cases domain. Search results are returned as a paginated list of abridged case documents.
 *
 * For `customer_id` you must provide the full customer profile ARN in this format: ` arn:aws:profile:your AWS Region:your AWS account ID:domains/profiles domain name/profiles/profile ID`.
 */
export const searchCases: API.PaginatedOperationMethod<
  SearchCasesRequest,
  SearchCasesResponse,
  SearchCasesError,
  Credentials | HttpClient.HttpClient,
  SearchCasesResponseItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(161, __c20, 1) as any as S.Schema<SearchCasesRequest>,
  output: __S(164, __c20, 4) as any as S.Schema<SearchCasesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchCases",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "cases",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchRelatedItemsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Searches for related items that are associated with a case.
 *
 * If no filters are provided, this returns all related items associated with a case.
 */
export const searchRelatedItems: API.PaginatedOperationMethod<
  SearchRelatedItemsRequest,
  SearchRelatedItemsResponse,
  SearchRelatedItemsError,
  Credentials | HttpClient.HttpClient,
  SearchRelatedItemsResponseItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(165, __c20, 5) as any as S.Schema<SearchRelatedItemsRequest>,
  output: __S(168, __c21, 0) as any as S.Schema<SearchRelatedItemsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchRelatedItems",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "relatedItems",
    pageSize: "maxResults",
  } as const,
})) as any;

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds tags to a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(169, __c21, 1) as any as S.Schema<TagResourceRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
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
 * Untags a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(170, __c21, 2) as any as S.Schema<UntagResourceRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<UntagResourceResponse>,
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

export type UpdateCaseError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * If you provide a value for `PerformedBy.UserArn` you must also have connect:DescribeUser permission on the User ARN resource that you provide
 *
 * Updates the values of fields on a case. Fields to be updated are received as an array of id/value pairs identical to the `CreateCase` input .
 *
 * If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.
 */
export const updateCase: API.OperationMethod<
  UpdateCaseRequest,
  UpdateCaseResponse,
  UpdateCaseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(171, __c21, 3) as any as S.Schema<UpdateCaseRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<UpdateCaseResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateCase",
}));

export type UpdateCaseRuleError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a case rule. In the Amazon Connect admin website, case rules are known as *case field conditions*. For more information about case field conditions, see Add case field conditions to a case template.
 */
export const updateCaseRule: API.OperationMethod<
  UpdateCaseRuleRequest,
  UpdateCaseRuleResponse,
  UpdateCaseRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(172, __c21, 4) as any as S.Schema<UpdateCaseRuleRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<UpdateCaseRuleResponse>,
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
  operationName: "UpdateCaseRule",
}));

export type UpdateFieldError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the properties of an existing field.
 */
export const updateField: API.OperationMethod<
  UpdateFieldRequest,
  UpdateFieldResponse,
  UpdateFieldError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(173, __c21, 5) as any as S.Schema<UpdateFieldRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<UpdateFieldResponse>,
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
  operationName: "UpdateField",
}));

export type UpdateLayoutError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the attributes of an existing layout.
 *
 * If the action is successful, the service sends back an HTTP 200 response with an empty HTTP body.
 *
 * A `ValidationException` is returned when you add non-existent `fieldIds` to a layout.
 *
 * Title and Status fields cannot be part of layouts because they are not configurable.
 */
export const updateLayout: API.OperationMethod<
  UpdateLayoutRequest,
  UpdateLayoutResponse,
  UpdateLayoutError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(174, __c21, 6) as any as S.Schema<UpdateLayoutRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<UpdateLayoutResponse>,
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
  operationName: "UpdateLayout",
}));

export type UpdateRelatedItemError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the content of a related item associated with a case. The following related item types are supported:
 *
 * - **Comment** - Update the text content of an existing comment
 *
 * - **Custom** - Update the fields of a custom related item. You can add, modify, and remove fields from a custom related item. There's a quota for the number of fields allowed in a Custom type related item. See Amazon Connect Cases quotas.
 *
 * **Important things to know**
 *
 * - When updating a Custom related item, all existing and new fields, and their associated values should be included in the request. Fields not included as part of this request will be removed.
 *
 * - If you provide a value for `performedBy.userArn` you must also have DescribeUser permission on the ARN of the user that you provide.
 *
 * - System case fields cannot be used in a custom related item.
 *
 * **Endpoints**: See Amazon Connect endpoints and quotas.
 */
export const updateRelatedItem: API.OperationMethod<
  UpdateRelatedItemRequest,
  UpdateRelatedItemResponse,
  UpdateRelatedItemError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(176, __c22, 0) as any as S.Schema<UpdateRelatedItemRequest>,
  output: __S(177, __c22, 1) as any as S.Schema<UpdateRelatedItemResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRelatedItem",
}));

export type UpdateTemplateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the attributes of an existing template. The template attributes that can be modified include `name`, `description`, `layoutConfiguration`, `requiredFields`, and `status`. At least one of these attributes must not be null. If a null value is provided for a given attribute, that attribute is ignored and its current value is preserved.
 *
 * Other template APIs are:
 *
 * - CreateTemplate
 *
 * - DeleteTemplate
 *
 * - GetTemplate
 *
 * - ListTemplates
 */
export const updateTemplate: API.OperationMethod<
  UpdateTemplateRequest,
  UpdateTemplateResponse,
  UpdateTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(178, __c22, 2) as any as S.Schema<UpdateTemplateRequest>,
  output: __S(4, __c0, 4) as any as S.Schema<UpdateTemplateResponse>,
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
  operationName: "UpdateTemplate",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ id: S.String })).annotate({
        identifier: "CaseRuleIdentifier",
      });
    case 1:
      return S.Array(__S(0, __c0, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          caseRules: __S(1, __c0, 1),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/rules-batch" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchGetCaseRuleRequest" });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ fieldId: S.String })]);
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "EmptyOperandValue",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ stringValue: S.String }),
        /*@__PURE__*/ S.Struct({ booleanValue: S.Boolean }),
        /*@__PURE__*/ S.Struct({ doubleValue: S.Number }),
        /*@__PURE__*/ S.Struct({ emptyValue: __S(4, __c0, 4) }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({ operandOne: __S(3, __c0, 3), operandTwo: __S(5, __c0, 5), result: S.Boolean }),
      ).annotate({ identifier: "BooleanOperands" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          conditions: S.suspend(() => __S(9, __c1, 1)).annotate({
            identifier: "BooleanConditionList",
          }),
        }),
      ).annotate({ identifier: "CompoundCondition" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ equalTo: __S(6, __c0, 6) }),
        /*@__PURE__*/ S.Struct({ notEqualTo: __S(6, __c0, 6) }),
        /*@__PURE__*/ S.Struct({
          andAll: /*@__PURE__*/ S.suspend((): S.Schema<CompoundCondition> =>
            __S(7, __c0, 7),
          ).annotate({
            identifier: "CompoundCondition",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          orAll: /*@__PURE__*/ S.suspend((): S.Schema<CompoundCondition> =>
            __S(7, __c0, 7),
          ).annotate({
            identifier: "CompoundCondition",
          }),
        }),
      ]);
    case 1:
      return S.Array(
        /*@__PURE__*/ S.suspend(() => __S(8, __c1, 0)).annotate({
          identifier: "BooleanCondition",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({ defaultValue: S.Boolean, conditions: __S(9, __c1, 1) }),
      ).annotate({ identifier: "RequiredCaseRule" });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          parentFieldOptionValue: S.String,
          childFieldOptionValues: __S(11, __c1, 3),
        }),
      ).annotate({
        identifier: "ParentChildFieldOptionsMapping",
      });
    case 5:
      return S.Array(__S(12, __c1, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({
          parentFieldId: S.optional(S.String),
          childFieldId: S.optional(S.String),
          parentChildFieldOptionsMappings: __S(13, __c1, 5),
        }),
      ).annotate({ identifier: "FieldOptionsCaseRule" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ required: __S(10, __c1, 2) }),
        /*@__PURE__*/ S.Struct({ fieldOptions: __S(14, __c1, 6) }),
        /*@__PURE__*/ S.Struct({ hidden: __S(10, __c1, 2) }),
      ]);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional)).pipe(
        /*@__PURE__*/ T.Sparse(),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          caseRuleId: S.String,
          name: S.String,
          caseRuleArn: S.String,
          rule: __S(15, __c1, 7),
          description: S.optional(S.String),
          deleted: S.optional(S.Boolean),
          createdTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastModifiedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          tags: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({ identifier: "GetCaseRuleResponse" });
    case 2:
      return S.Array(__S(17, __c2, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({ id: S.String, errorCode: S.String, message: S.optional(S.String) }),
      ).annotate({ identifier: "CaseRuleError" });
    case 4:
      return S.Array(__S(19, __c2, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({
          caseRules: __S(18, __c2, 2),
          errors: __S(20, __c2, 4),
          unprocessedCaseRules: S.optional(__S(11, __c1, 3)),
        }),
      ).annotate({ identifier: "BatchGetCaseRuleResponse" });
    case 6:
      return S.suspend(() => S.Struct({ id: S.String })).annotate({
        identifier: "FieldIdentifier",
      });
    case 7:
      return S.Array(__S(22, __c2, 6));
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          fields: __S(23, __c2, 7),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/fields-batch" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "BatchGetFieldRequest" });
    case 1:
      return S.suspend(() => S.Struct({ isMultiline: S.Boolean })).annotate({
        identifier: "TextAttributes",
      });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ text: __S(25, __c3, 1) })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          fieldId: S.String,
          name: S.String,
          fieldArn: S.String,
          description: S.optional(S.String),
          type: S.String,
          namespace: S.String,
          tags: S.optional(__S(16, __c2, 0)),
          deleted: S.optional(S.Boolean),
          createdTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastModifiedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          attributes: S.optional(__S(26, __c3, 2)),
        }),
      ).annotate({ identifier: "GetFieldResponse" });
    case 4:
      return S.Array(__S(27, __c3, 3));
    case 5:
      return S.suspend(() =>
        S.Struct({ fields: __S(28, __c3, 4), errors: __S(20, __c2, 4) }),
      ).annotate({ identifier: "BatchGetFieldResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.String, value: S.String, active: S.Boolean }),
      ).annotate({ identifier: "FieldOption" });
    case 7:
      return S.Array(__S(30, __c3, 6));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          fieldId: S.String.pipe(T.HttpLabel("fieldId")),
          options: __S(31, __c3, 7),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/domains/{domainId}/fields/{fieldId}/options" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchPutFieldOptionsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ message: S.String, errorCode: S.String, value: S.String }),
      ).annotate({ identifier: "FieldOptionError" });
    case 2:
      return S.Array(__S(33, __c4, 1));
    case 3:
      return S.suspend(() => S.Struct({ errors: S.optional(__S(34, __c4, 2)) })).annotate({
        identifier: "BatchPutFieldOptionsResponse",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ stringValue: S.String }),
        /*@__PURE__*/ S.Struct({ doubleValue: S.Number }),
        /*@__PURE__*/ S.Struct({ booleanValue: S.Boolean }),
        /*@__PURE__*/ S.Struct({ emptyValue: __S(4, __c0, 4) }),
        /*@__PURE__*/ S.Struct({ userArnValue: S.String }),
      ]);
    case 5:
      return S.suspend(() => S.Struct({ id: S.String, value: __S(36, __c4, 4) })).annotate({
        identifier: "FieldValue",
      });
    case 6:
      return S.Array(__S(37, __c4, 5));
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ userArn: S.String }),
        /*@__PURE__*/ S.Struct({ customEntity: SensitiveString }),
      ]);
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          templateId: S.String,
          fields: __S(38, __c4, 6),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          performedBy: S.optional(__S(39, __c4, 7)),
          tags: S.optional(__S(40, __c5, 0)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/cases" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateCaseRequest" });
    case 2:
      return S.suspend(() => S.Struct({ caseId: S.String, caseArn: S.String })).annotate({
        identifier: "CreateCaseResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          name: S.String,
          description: S.optional(S.String),
          rule: __S(15, __c1, 7),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/case-rules" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateCaseRuleRequest" });
    case 4:
      return S.suspend(() => S.Struct({ caseRuleId: S.String, caseRuleArn: S.String })).annotate({
        identifier: "CreateCaseRuleResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ name: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/domains" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateDomainRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ domainId: S.String, domainArn: S.String, domainStatus: S.String }),
      ).annotate({ identifier: "CreateDomainResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          name: S.String,
          type: S.String,
          description: S.optional(S.String),
          attributes: S.optional(__S(26, __c3, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/fields" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateFieldRequest" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ fieldId: S.String, fieldArn: S.String })).annotate({
        identifier: "CreateFieldResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.optional(S.String), fields: __S(23, __c2, 7) }),
      ).annotate({
        identifier: "FieldGroup",
      });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ fieldGroup: __S(49, __c6, 1) })]);
    case 3:
      return S.Array(__S(50, __c6, 2));
    case 4:
      return S.suspend(() => S.Struct({ sections: S.optional(__S(51, __c6, 3)) })).annotate({
        identifier: "LayoutSections",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          topPanel: S.optional(__S(52, __c6, 4)),
          moreInfo: S.optional(__S(52, __c6, 4)),
        }),
      ).annotate({ identifier: "BasicLayout" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ basic: __S(53, __c6, 5) })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          name: S.String,
          content: __S(54, __c6, 6),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/layouts" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateLayoutRequest" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ layoutId: S.String, layoutArn: S.String })).annotate({
        identifier: "CreateLayoutResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ contactArn: S.String })).annotate({
        identifier: "Contact",
      });
    case 2:
      return S.suspend(() => S.Struct({ body: S.String, contentType: S.String })).annotate({
        identifier: "CommentContent",
      });
    case 3:
      return S.suspend(() => S.Struct({ fileArn: S.String })).annotate({
        identifier: "FileContent",
      });
    case 4:
      return S.Array(__S(36, __c4, 4));
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: SensitiveString,
          type: S.String,
          fieldId: S.optional(S.String),
          targetFieldValues: S.optional(__S(60, __c7, 4)),
          targetSlaMinutes: S.Number,
        }),
      ).annotate({ identifier: "SlaInputConfiguration" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ slaInputConfiguration: __S(61, __c7, 5) })]);
    case 7:
      return S.suspend(() => S.Struct({ caseId: S.String })).annotate({
        identifier: "ConnectCaseInputContent",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ fields: __S(38, __c4, 6) })).annotate({
        identifier: "CustomInputContent",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ contact: __S(57, __c7, 1) }),
        /*@__PURE__*/ S.Struct({ comment: __S(58, __c7, 2) }),
        /*@__PURE__*/ S.Struct({ file: __S(59, __c7, 3) }),
        /*@__PURE__*/ S.Struct({ sla: __S(62, __c7, 6) }),
        /*@__PURE__*/ S.Struct({ connectCase: __S(63, __c7, 7) }),
        /*@__PURE__*/ S.Struct({ custom: __S(64, __c8, 0) }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          caseId: S.String.pipe(T.HttpLabel("caseId")),
          type: S.String,
          content: __S(65, __c8, 1),
          performedBy: S.optional(__S(39, __c4, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/cases/{caseId}/related-items/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateRelatedItemRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ relatedItemId: S.String, relatedItemArn: S.String }),
      ).annotate({
        identifier: "CreateRelatedItemResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ defaultLayout: S.optional(S.String) })).annotate({
        identifier: "LayoutConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ fieldId: S.String })).annotate({
        identifier: "RequiredField",
      });
    case 6:
      return S.Array(__S(69, __c8, 5));
    case 7:
      return S.suspend(() =>
        S.Struct({ caseRuleId: S.String, fieldId: S.optional(S.String) }),
      ).annotate({ identifier: "TemplateRule" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(71, __c8, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({ resourceType: S.String, tagMap: __S(40, __c5, 0) }),
      ).annotate({
        identifier: "TagPropagationConfiguration",
      });
    case 2:
      return S.Array(__S(73, __c9, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          name: S.String,
          description: S.optional(S.String),
          layoutConfiguration: S.optional(__S(68, __c8, 4)),
          requiredFields: S.optional(__S(70, __c8, 6)),
          status: S.optional(S.String),
          rules: S.optional(__S(72, __c9, 0)),
          tagPropagationConfigurations: S.optional(__S(74, __c9, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/templates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateTemplateRequest" });
    case 4:
      return S.suspend(() => S.Struct({ templateId: S.String, templateArn: S.String })).annotate({
        identifier: "CreateTemplateResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          caseId: S.String.pipe(T.HttpLabel("caseId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/domains/{domainId}/cases/{caseId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteCaseRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          caseRuleId: S.String.pipe(T.HttpLabel("caseRuleId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/domains/{domainId}/case-rules/{caseRuleId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteCaseRuleRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ domainId: S.String.pipe(T.HttpLabel("domainId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/domains/{domainId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDomainRequest" });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          fieldId: S.String.pipe(T.HttpLabel("fieldId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/domains/{domainId}/fields/{fieldId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteFieldRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          layoutId: S.String.pipe(T.HttpLabel("layoutId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/domains/{domainId}/layouts/{layoutId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteLayoutRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          caseId: S.String.pipe(T.HttpLabel("caseId")),
          relatedItemId: S.String.pipe(T.HttpLabel("relatedItemId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/domains/{domainId}/cases/{caseId}/related-items/{relatedItemId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteRelatedItemRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          templateId: S.String.pipe(T.HttpLabel("templateId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/domains/{domainId}/templates/{templateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTemplateRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          caseId: S.String.pipe(T.HttpLabel("caseId")),
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          fields: __S(23, __c2, 7),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/cases/{caseId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetCaseRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          fields: __S(38, __c4, 6),
          templateId: S.String,
          nextToken: S.optional(S.String),
          tags: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({ identifier: "GetCaseResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          caseId: S.String.pipe(T.HttpLabel("caseId")),
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/cases/{caseId}/audit-history" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCaseAuditEventsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          eventFieldId: S.String,
          oldValue: S.optional(__S(36, __c4, 4)),
          newValue: __S(36, __c4, 4),
        }),
      ).annotate({ identifier: "AuditEventField" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(87, __c10, 7)).pipe(/*@__PURE__*/ T.Sparse());
    case 1:
      return S.suspend(() =>
        S.Struct({ user: S.optional(__S(39, __c4, 7)), iamPrincipalArn: S.String }),
      ).annotate({ identifier: "AuditEventPerformedBy" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          eventId: S.String,
          type: S.String,
          relatedItemType: S.optional(S.String),
          performedTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          fields: __S(88, __c11, 0),
          performedBy: S.optional(__S(89, __c11, 1)),
        }),
      ).annotate({ identifier: "AuditEvent" });
    case 3:
      return S.Array(__S(90, __c11, 2)).pipe(/*@__PURE__*/ T.Sparse());
    case 4:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), auditEvents: __S(91, __c11, 3) }),
      ).annotate({
        identifier: "GetCaseAuditEventsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ domainId: S.String.pipe(T.HttpLabel("domainId")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/case-event-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCaseEventConfigurationRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ fields: __S(23, __c2, 7) })).annotate({
        identifier: "CaseEventIncludedData",
      });
    case 7:
      return S.suspend(() => S.Struct({ includeContent: S.Boolean })).annotate({
        identifier: "RelatedItemEventIncludedData",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          caseData: S.optional(__S(94, __c11, 6)),
          relatedItemData: S.optional(__S(95, __c11, 7)),
        }),
      ).annotate({ identifier: "EventIncludedData" });
    case 1:
      return S.suspend(() =>
        S.Struct({ enabled: S.Boolean, includedData: S.optional(__S(96, __c12, 0)) }),
      ).annotate({ identifier: "EventBridgeConfiguration" });
    case 2:
      return S.suspend(() => S.Struct({ eventBridge: __S(97, __c12, 1) })).annotate({
        identifier: "GetCaseEventConfigurationResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ domainId: S.String.pipe(T.HttpLabel("domainId")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetDomainRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String,
          domainArn: S.String,
          name: S.String,
          createdTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          domainStatus: S.String,
          tags: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({ identifier: "GetDomainResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          layoutId: S.String.pipe(T.HttpLabel("layoutId")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/layouts/{layoutId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetLayoutRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          layoutId: S.String,
          layoutArn: S.String,
          name: S.String,
          content: __S(54, __c6, 6),
          tags: S.optional(__S(16, __c2, 0)),
          deleted: S.optional(S.Boolean),
          createdTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastModifiedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "GetLayoutResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          templateId: S.String.pipe(T.HttpLabel("templateId")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/templates/{templateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetTemplateRequest" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          templateId: S.String,
          templateArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          layoutConfiguration: S.optional(__S(68, __c8, 4)),
          requiredFields: S.optional(__S(70, __c8, 6)),
          tags: S.optional(__S(16, __c2, 0)),
          status: S.String,
          deleted: S.optional(S.Boolean),
          createdTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          lastModifiedTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          rules: S.optional(__S(72, __c9, 0)),
          tagPropagationConfigurations: S.optional(__S(74, __c9, 2)),
        }),
      ).annotate({ identifier: "GetTemplateResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/rules-list/" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListCaseRulesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          caseRuleId: S.String,
          name: S.String,
          caseRuleArn: S.String,
          ruleType: S.String,
          description: S.optional(S.String),
        }),
      ).annotate({ identifier: "CaseRuleSummary" });
    case 3:
      return S.Array(__S(106, __c13, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ caseRules: __S(107, __c13, 3), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListCaseRulesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          contactArn: S.String,
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/list-cases-for-contact" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCasesForContactRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ caseId: S.String, templateId: S.String })).annotate({
        identifier: "CaseSummary",
      });
    case 7:
      return S.Array(__S(110, __c13, 6));
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ cases: __S(111, __c13, 7), nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListCasesForContactResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/domains-list" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListDomainsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ domainId: S.String, domainArn: S.String, name: S.String }),
      ).annotate({ identifier: "DomainSummary" });
    case 3:
      return S.Array(__S(114, __c14, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ domains: __S(115, __c14, 3), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListDomainsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          fieldId: S.String.pipe(T.HttpLabel("fieldId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          values: S.optional(__S(11, __c1, 3)).pipe(T.HttpQuery("values")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/fields/{fieldId}/options-list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListFieldOptionsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ options: __S(31, __c3, 7), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListFieldOptionsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/fields-list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListFieldsRequest" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          fieldId: S.String,
          fieldArn: S.String,
          name: S.String,
          type: S.String,
          namespace: S.String,
          attributes: S.optional(__S(26, __c3, 2)),
        }),
      ).annotate({ identifier: "FieldSummary" });
    case 1:
      return S.Array(__S(120, __c15, 0));
    case 2:
      return S.suspend(() =>
        S.Struct({ fields: __S(121, __c15, 1), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListFieldsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/layouts-list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListLayoutsRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ layoutId: S.String, layoutArn: S.String, name: S.String }),
      ).annotate({ identifier: "LayoutSummary" });
    case 5:
      return S.Array(__S(124, __c15, 4));
    case 6:
      return S.suspend(() =>
        S.Struct({ layouts: __S(125, __c15, 5), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListLayoutsResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/tags/{arn}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(16, __c2, 0)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          status: S.optional(__S(11, __c1, 3)).pipe(T.HttpQuery("status")),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/templates-list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListTemplatesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          templateId: S.String,
          templateArn: S.String,
          name: S.String,
          status: S.String,
          tagPropagationConfigurations: S.optional(__S(74, __c9, 2)),
        }),
      ).annotate({ identifier: "TemplateSummary" });
    case 3:
      return S.Array(__S(130, __c16, 2));
    case 4:
      return S.suspend(() =>
        S.Struct({ templates: __S(131, __c16, 3), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTemplatesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          eventBridge: __S(97, __c12, 1),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/domains/{domainId}/case-event-configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "PutCaseEventConfigurationRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "PutCaseEventConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ channel: S.optional(__S(11, __c1, 3)), contactArn: S.optional(S.String) }),
      ).annotate({ identifier: "ContactFilter" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ fileArn: S.optional(S.String) })).annotate({
        identifier: "FileFilter",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.optional(SensitiveString), status: S.optional(S.String) }),
      ).annotate({ identifier: "SlaFilter" });
    case 2:
      return S.suspend(() => S.Struct({ caseId: S.optional(S.String) })).annotate({
        identifier: "ConnectCaseFilter",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ equalTo: __S(37, __c4, 5) }),
        /*@__PURE__*/ S.Struct({ contains: __S(37, __c4, 5) }),
        /*@__PURE__*/ S.Struct({ greaterThan: __S(37, __c4, 5) }),
        /*@__PURE__*/ S.Struct({ greaterThanOrEqualTo: __S(37, __c4, 5) }),
        /*@__PURE__*/ S.Struct({ lessThan: __S(37, __c4, 5) }),
        /*@__PURE__*/ S.Struct({ lessThanOrEqualTo: __S(37, __c4, 5) }),
      ]);
    case 4:
      return S.Array(
        /*@__PURE__*/ S.suspend(() => __S(141, __c17, 5)).annotate({
          identifier: "CustomFieldsFilter",
        }),
      );
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ field: __S(139, __c17, 3) }),
        /*@__PURE__*/ S.Struct({
          not: /*@__PURE__*/ S.suspend(() => __S(141, __c17, 5)).annotate({
            identifier: "CustomFieldsFilter",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          andAll: /*@__PURE__*/ S.suspend(() => __S(140, __c17, 4)).annotate({
            identifier: "CustomFieldsFilterList",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          orAll: /*@__PURE__*/ S.suspend(() => __S(140, __c17, 4)).annotate({
            identifier: "CustomFieldsFilterList",
          }),
        }),
      ]);
    case 6:
      return S.suspend(() => S.Struct({ fields: S.optional(__S(141, __c17, 5)) })).annotate({
        identifier: "CustomFilter",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ contact: __S(135, __c16, 7) }),
        /*@__PURE__*/ S.Struct({ comment: __S(4, __c0, 4) }),
        /*@__PURE__*/ S.Struct({ file: __S(136, __c17, 0) }),
        /*@__PURE__*/ S.Struct({ sla: __S(137, __c17, 1) }),
        /*@__PURE__*/ S.Struct({ connectCase: __S(138, __c17, 2) }),
        /*@__PURE__*/ S.Struct({ custom: __S(142, __c17, 6) }),
      ]);
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(143, __c17, 7));
    case 1:
      return S.suspend(() => S.Struct({ sortProperty: S.String, sortOrder: S.String })).annotate({
        identifier: "SearchAllRelatedItemsSort",
      });
    case 2:
      return S.Array(__S(145, __c18, 1));
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          filters: S.optional(__S(144, __c18, 0)),
          sorts: S.optional(__S(146, __c18, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/related-items-search" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SearchAllRelatedItemsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          contactArn: S.String,
          channel: S.String,
          connectedToSystemTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "ContactContent" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: SensitiveString,
          type: S.String,
          status: S.String,
          fieldId: S.optional(S.String),
          targetFieldValues: S.optional(__S(60, __c7, 4)),
          targetTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          completionTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "SlaConfiguration" });
    case 6:
      return S.suspend(() => S.Struct({ slaConfiguration: __S(149, __c18, 5) })).annotate({
        identifier: "SlaContent",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ contact: __S(148, __c18, 4) }),
        /*@__PURE__*/ S.Struct({ comment: __S(58, __c7, 2) }),
        /*@__PURE__*/ S.Struct({ file: __S(59, __c7, 3) }),
        /*@__PURE__*/ S.Struct({ sla: __S(150, __c18, 6) }),
        /*@__PURE__*/ S.Struct({ connectCase: __S(63, __c7, 7) }),
        /*@__PURE__*/ S.Struct({ custom: __S(64, __c8, 0) }),
      ]);
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          relatedItemId: S.String,
          caseId: S.String,
          type: S.String,
          associationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          content: __S(151, __c18, 7),
          performedBy: S.optional(__S(39, __c4, 7)),
          tags: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({
        identifier: "SearchAllRelatedItemsResponseItem",
      });
    case 1:
      return S.Array(__S(152, __c19, 0)).pipe(/*@__PURE__*/ T.Sparse());
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          relatedItems: __S(153, __c19, 1),
        }),
      ).annotate({
        identifier: "SearchAllRelatedItemsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ key: S.optional(S.String), value: S.optional(S.String) }),
      ).annotate({ identifier: "TagValue" });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ equalTo: __S(155, __c19, 3) })]);
    case 5:
      return S.Array(
        /*@__PURE__*/ S.suspend(() => __S(158, __c19, 6)).annotate({ identifier: "CaseFilter" }),
      );
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ field: __S(139, __c17, 3) }),
        /*@__PURE__*/ S.Struct({
          not: /*@__PURE__*/ S.suspend(() => __S(158, __c19, 6)).annotate({
            identifier: "CaseFilter",
          }),
        }),
        /*@__PURE__*/ S.Struct({ tag: __S(156, __c19, 4) }),
        /*@__PURE__*/ S.Struct({
          andAll: /*@__PURE__*/ S.suspend(() => __S(157, __c19, 5)).annotate({
            identifier: "CaseFilterList",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          orAll: /*@__PURE__*/ S.suspend(() => __S(157, __c19, 5)).annotate({
            identifier: "CaseFilterList",
          }),
        }),
      ]);
    case 7:
      return S.suspend(() => S.Struct({ fieldId: S.String, sortOrder: S.String })).annotate({
        identifier: "Sort",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(159, __c19, 7));
    case 1:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          searchTerm: S.optional(S.String),
          filter: S.optional(__S(158, __c19, 6)),
          sorts: S.optional(__S(160, __c20, 0)),
          fields: S.optional(__S(23, __c2, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/domains/{domainId}/cases-search" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SearchCasesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          caseId: S.String,
          templateId: S.String,
          fields: __S(38, __c4, 6),
          tags: S.optional(__S(16, __c2, 0)),
        }),
      ).annotate({ identifier: "SearchCasesResponseItem" });
    case 3:
      return S.Array(__S(162, __c20, 2)).pipe(/*@__PURE__*/ T.Sparse());
    case 4:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          cases: __S(163, __c20, 3),
          totalCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SearchCasesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          caseId: S.String.pipe(T.HttpLabel("caseId")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          filters: S.optional(__S(144, __c18, 0)),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/domains/{domainId}/cases/{caseId}/related-items-search",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SearchRelatedItemsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          relatedItemId: S.String,
          type: S.String,
          associationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          content: __S(151, __c18, 7),
          tags: S.optional(__S(16, __c2, 0)),
          performedBy: S.optional(__S(39, __c4, 7)),
        }),
      ).annotate({
        identifier: "SearchRelatedItemsResponseItem",
      });
    case 7:
      return S.Array(__S(166, __c20, 6)).pipe(/*@__PURE__*/ T.Sparse());
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          relatedItems: __S(167, __c20, 7),
        }),
      ).annotate({
        identifier: "SearchRelatedItemsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ arn: S.String.pipe(T.HttpLabel("arn")), tags: __S(16, __c2, 0) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/tags/{arn}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          arn: S.String.pipe(T.HttpLabel("arn")),
          tagKeys: __S(11, __c1, 3).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/tags/{arn}" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          caseId: S.String.pipe(T.HttpLabel("caseId")),
          fields: __S(38, __c4, 6),
          performedBy: S.optional(__S(39, __c4, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/domains/{domainId}/cases/{caseId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateCaseRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          caseRuleId: S.String.pipe(T.HttpLabel("caseRuleId")),
          name: S.optional(S.String),
          description: S.optional(S.String),
          rule: S.optional(__S(15, __c1, 7)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/domains/{domainId}/case-rules/{caseRuleId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateCaseRuleRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          fieldId: S.String.pipe(T.HttpLabel("fieldId")),
          name: S.optional(S.String),
          description: S.optional(S.String),
          attributes: S.optional(__S(26, __c3, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/domains/{domainId}/fields/{fieldId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateFieldRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          layoutId: S.String.pipe(T.HttpLabel("layoutId")),
          name: S.optional(S.String),
          content: S.optional(__S(54, __c6, 6)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/domains/{domainId}/layouts/{layoutId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateLayoutRequest" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ comment: __S(58, __c7, 2) }),
        /*@__PURE__*/ S.Struct({ custom: __S(64, __c8, 0) }),
      ]);
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          caseId: S.String.pipe(T.HttpLabel("caseId")),
          relatedItemId: S.String.pipe(T.HttpLabel("relatedItemId")),
          content: __S(175, __c21, 7),
          performedBy: S.optional(__S(39, __c4, 7)),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/domains/{domainId}/cases/{caseId}/related-items/{relatedItemId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateRelatedItemRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          relatedItemId: S.String,
          relatedItemArn: S.String,
          type: S.String,
          content: __S(151, __c18, 7),
          associationTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          tags: S.optional(__S(16, __c2, 0)),
          lastUpdatedUser: S.optional(__S(39, __c4, 7)),
          createdBy: S.optional(__S(39, __c4, 7)),
        }),
      ).annotate({
        identifier: "UpdateRelatedItemResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          domainId: S.String.pipe(T.HttpLabel("domainId")),
          templateId: S.String.pipe(T.HttpLabel("templateId")),
          name: S.optional(S.String),
          description: S.optional(S.String),
          layoutConfiguration: S.optional(__S(68, __c8, 4)),
          requiredFields: S.optional(__S(70, __c8, 6)),
          status: S.optional(S.String),
          rules: S.optional(__S(72, __c9, 0)),
          tagPropagationConfigurations: S.optional(__S(74, __c9, 2)),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/domains/{domainId}/templates/{templateId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateTemplateRequest" });
  }
}

// Schema table: entry i is schema j of builder f, made on first reach.
function __S(i: number, f: (j: number) => unknown, j: number): any {
  return (__s[i] ??= __L.at(f, j));
}
