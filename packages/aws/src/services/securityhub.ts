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
  sdkId: "SecurityHub",
  serviceShapeName: "SecurityHubAPIService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "securityhub" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-10-26");
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
              `https://securityhub-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://securityhub-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://securityhub.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://securityhub.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalException
  extends /*@__PURE__*/ S.TaggedError<InternalException>()(
    "InternalException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidAccessException
  extends /*@__PURE__*/ S.TaggedError<InvalidAccessException>()(
    "InvalidAccessException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export class InvalidInputException
  extends /*@__PURE__*/ S.TaggedError<InvalidInputException>()(
    "InvalidInputException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()(
    "LimitExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class OrganizationalUnitNotFoundException
  extends /*@__PURE__*/ S.TaggedError<OrganizationalUnitNotFoundException>()(
    "OrganizationalUnitNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class OrganizationNotFoundException
  extends /*@__PURE__*/ S.TaggedError<OrganizationNotFoundException>()(
    "OrganizationNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceConflictException
  extends /*@__PURE__*/ S.TaggedError<ResourceConflictException>()(
    "ResourceConflictException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ResourceInUseException
  extends /*@__PURE__*/ S.TaggedError<ResourceInUseException>()(
    "ResourceInUseException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Code: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type NonEmptyString = string;
export interface AcceptAdministratorInvitationRequest {
  AdministratorId?: string;
  InvitationId?: string;
}
const AcceptAdministratorInvitationRequest = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<AcceptAdministratorInvitationRequest>;
export interface AcceptAdministratorInvitationResponse {}
const AcceptAdministratorInvitationResponse = /*@__PURE__*/ __L.at(
  __c0,
  1,
) as any as S.Schema<AcceptAdministratorInvitationResponse>;
export interface AcceptInvitationRequest {
  MasterId?: string;
  InvitationId?: string;
}
const AcceptInvitationRequest = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<AcceptInvitationRequest>;
export interface AcceptInvitationResponse {}
const AcceptInvitationResponse = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<AcceptInvitationResponse>;
export type AutomationRulesArnsList = string[];
const AutomationRulesArnsList = /*@__PURE__*/ __L.at(__c0, 4);
export interface BatchDeleteAutomationRulesRequest {
  AutomationRulesArns?: string[];
}
const BatchDeleteAutomationRulesRequest = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<BatchDeleteAutomationRulesRequest>;
export interface UnprocessedAutomationRule {
  RuleArn?: string;
  ErrorCode?: number;
  ErrorMessage?: string;
}
const UnprocessedAutomationRule = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<UnprocessedAutomationRule>;
export type UnprocessedAutomationRulesList = UnprocessedAutomationRule[];
const UnprocessedAutomationRulesList = /*@__PURE__*/ __L.at(__c0, 7);
export interface BatchDeleteAutomationRulesResponse {
  ProcessedAutomationRules?: string[];
  UnprocessedAutomationRules?: UnprocessedAutomationRule[];
}
const BatchDeleteAutomationRulesResponse = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<BatchDeleteAutomationRulesResponse>;
export type StandardsSubscriptionArns = string[];
const StandardsSubscriptionArns =
  AutomationRulesArnsList as any as S.Schema<StandardsSubscriptionArns>;
export interface BatchDisableStandardsRequest {
  StandardsSubscriptionArns?: string[];
}
const BatchDisableStandardsRequest = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<BatchDisableStandardsRequest>;
export type StandardsInputParameterMap = { [key: string]: string | undefined };
const StandardsInputParameterMap = /*@__PURE__*/ __L.at(__c1, 2);
export type StandardsStatus =
  | "PENDING"
  | "READY"
  | "FAILED"
  | "DELETING"
  | "INCOMPLETE"
  | (string & {});
const StandardsStatus = S.String;

export type StandardsControlsUpdatable =
  | "READY_FOR_UPDATES"
  | "NOT_READY_FOR_UPDATES"
  | (string & {});
const StandardsControlsUpdatable = S.String;

export type StatusReasonCode =
  | "NO_AVAILABLE_CONFIGURATION_RECORDER"
  | "MAXIMUM_NUMBER_OF_CONFIG_RULES_EXCEEDED"
  | "NO_AVAILABLE_MULTICLOUD_CONNECTOR"
  | "INTERNAL_ERROR"
  | (string & {});
const StatusReasonCode = S.String;

export interface StandardsStatusReason {
  StatusReasonCode?: StatusReasonCode;
}
const StandardsStatusReason = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<StandardsStatusReason>;
export type StandardsProvider = "AWS" | "Azure" | (string & {});
const StandardsProvider = S.String;

export interface StandardsSubscription {
  StandardsSubscriptionArn?: string;
  StandardsArn?: string;
  StandardsInput?: { [key: string]: string | undefined };
  StandardsStatus?: StandardsStatus;
  StandardsControlsUpdatable?: StandardsControlsUpdatable;
  StandardsStatusReason?: StandardsStatusReason;
  Provider?: StandardsProvider;
}
const StandardsSubscription = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<StandardsSubscription>;
export type StandardsSubscriptions = StandardsSubscription[];
const StandardsSubscriptions = /*@__PURE__*/ __L.at(__c1, 5);
export interface BatchDisableStandardsResponse {
  StandardsSubscriptions?: (StandardsSubscription & {
    StandardsSubscriptionArn: NonEmptyString;
    StandardsArn: NonEmptyString;
    StandardsInput: StandardsInputParameterMap;
    StandardsStatus: StandardsStatus;
    StandardsStatusReason: StandardsStatusReason & { StatusReasonCode: StatusReasonCode };
  })[];
}
const BatchDisableStandardsResponse = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<BatchDisableStandardsResponse>;
export interface StandardsSubscriptionRequest {
  StandardsArn?: string;
  StandardsInput?: { [key: string]: string | undefined };
}
const StandardsSubscriptionRequest = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<StandardsSubscriptionRequest>;
export type StandardsSubscriptionRequests = StandardsSubscriptionRequest[];
const StandardsSubscriptionRequests = /*@__PURE__*/ __L.at(__c2, 0);
export interface BatchEnableStandardsRequest {
  StandardsSubscriptionRequests?: StandardsSubscriptionRequest[];
}
const BatchEnableStandardsRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<BatchEnableStandardsRequest>;
export interface BatchEnableStandardsResponse {
  StandardsSubscriptions?: (StandardsSubscription & {
    StandardsSubscriptionArn: NonEmptyString;
    StandardsArn: NonEmptyString;
    StandardsInput: StandardsInputParameterMap;
    StandardsStatus: StandardsStatus;
    StandardsStatusReason: StandardsStatusReason & { StatusReasonCode: StatusReasonCode };
  })[];
}
const BatchEnableStandardsResponse =
  BatchDisableStandardsResponse as any as S.Schema<BatchEnableStandardsResponse>;
export interface BatchGetAutomationRulesRequest {
  AutomationRulesArns?: string[];
}
const BatchGetAutomationRulesRequest = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<BatchGetAutomationRulesRequest>;
export type RuleStatus = "ENABLED" | "DISABLED" | (string & {});
const RuleStatus = S.String;

export type RuleOrderValue = number;
export type StringFilterComparison =
  | "EQUALS"
  | "PREFIX"
  | "NOT_EQUALS"
  | "PREFIX_NOT_EQUALS"
  | "CONTAINS"
  | "NOT_CONTAINS"
  | "CONTAINS_WORD"
  | (string & {});
const StringFilterComparison = S.String;

export interface StringFilter {
  Value?: string;
  Comparison?: StringFilterComparison;
}
const StringFilter = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<StringFilter>;
export type StringFilterList = StringFilter[];
const StringFilterList = /*@__PURE__*/ __L.at(__c2, 4);
export type DateRangeUnit = "DAYS" | (string & {});
const DateRangeUnit = S.String;

export type DateRangeComparison = "WITHIN" | "OLDER_THAN" | (string & {});
const DateRangeComparison = S.String;

export interface DateRange {
  Value?: number;
  Unit?: DateRangeUnit;
  Comparison?: DateRangeComparison;
}
const DateRange = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<DateRange>;
export interface DateFilter {
  Start?: string;
  End?: string;
  DateRange?: DateRange;
}
const DateFilter = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<DateFilter>;
export type DateFilterList = DateFilter[];
const DateFilterList = /*@__PURE__*/ __L.at(__c2, 7);
export interface NumberFilter {
  Gte?: number;
  Lte?: number;
  Eq?: number;
  Gt?: number;
  Lt?: number;
}
const NumberFilter = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<NumberFilter>;
export type NumberFilterList = NumberFilter[];
const NumberFilterList = /*@__PURE__*/ __L.at(__c3, 1);
export type MapFilterComparison =
  | "EQUALS"
  | "NOT_EQUALS"
  | "CONTAINS"
  | "NOT_CONTAINS"
  | (string & {});
const MapFilterComparison = S.String;

export interface MapFilter {
  Key?: string;
  Value?: string;
  Comparison?: MapFilterComparison;
}
const MapFilter = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<MapFilter>;
export type MapFilterList = MapFilter[];
const MapFilterList = /*@__PURE__*/ __L.at(__c3, 3);
export interface AutomationRulesFindingFilters {
  ProductArn?: StringFilter[];
  AwsAccountId?: StringFilter[];
  Id?: StringFilter[];
  GeneratorId?: StringFilter[];
  Type?: StringFilter[];
  FirstObservedAt?: DateFilter[];
  LastObservedAt?: DateFilter[];
  CreatedAt?: DateFilter[];
  UpdatedAt?: DateFilter[];
  Confidence?: NumberFilter[];
  Criticality?: NumberFilter[];
  Title?: StringFilter[];
  Description?: StringFilter[];
  SourceUrl?: StringFilter[];
  ProductName?: StringFilter[];
  CompanyName?: StringFilter[];
  SeverityLabel?: StringFilter[];
  ResourceType?: StringFilter[];
  ResourceId?: StringFilter[];
  ResourcePartition?: StringFilter[];
  ResourceRegion?: StringFilter[];
  ResourceTags?: MapFilter[];
  ResourceDetailsOther?: MapFilter[];
  ComplianceStatus?: StringFilter[];
  ComplianceSecurityControlId?: StringFilter[];
  ComplianceAssociatedStandardsId?: StringFilter[];
  VerificationState?: StringFilter[];
  WorkflowStatus?: StringFilter[];
  RecordState?: StringFilter[];
  RelatedFindingsProductArn?: StringFilter[];
  RelatedFindingsId?: StringFilter[];
  NoteText?: StringFilter[];
  NoteUpdatedAt?: DateFilter[];
  NoteUpdatedBy?: StringFilter[];
  UserDefinedFields?: MapFilter[];
  ResourceApplicationArn?: StringFilter[];
  ResourceApplicationName?: StringFilter[];
  AwsAccountName?: StringFilter[];
  ResourceProvider?: StringFilter[];
  ResourceOwnerAccountId?: StringFilter[];
  ResourceOwnerOrgId?: StringFilter[];
}
const AutomationRulesFindingFilters = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<AutomationRulesFindingFilters>;
export type AutomationRulesActionType = "FINDING_FIELDS_UPDATE" | (string & {});
const AutomationRulesActionType = S.String;

export interface NoteUpdate {
  Text?: string;
  UpdatedBy?: string;
}
const NoteUpdate = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<NoteUpdate>;
export type RatioScale = number;
export type SeverityLabel =
  | "INFORMATIONAL"
  | "LOW"
  | "MEDIUM"
  | "HIGH"
  | "CRITICAL"
  | (string & {});
const SeverityLabel = S.String;

export interface SeverityUpdate {
  Normalized?: number;
  Product?: number;
  Label?: SeverityLabel;
}
const SeverityUpdate = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<SeverityUpdate>;
export type VerificationState =
  | "UNKNOWN"
  | "TRUE_POSITIVE"
  | "FALSE_POSITIVE"
  | "BENIGN_POSITIVE"
  | (string & {});
const VerificationState = S.String;

export type TypeList = string[];
const TypeList = AutomationRulesArnsList as any as S.Schema<TypeList>;
export type FieldMap = { [key: string]: string | undefined };
const FieldMap = /*@__PURE__*/ __L.at(__c3, 7);
export type WorkflowStatus = "NEW" | "NOTIFIED" | "RESOLVED" | "SUPPRESSED" | (string & {});
const WorkflowStatus = S.String;

export interface WorkflowUpdate {
  Status?: WorkflowStatus;
}
const WorkflowUpdate = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<WorkflowUpdate>;
export interface RelatedFinding {
  ProductArn?: string;
  Id?: string;
}
const RelatedFinding = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<RelatedFinding>;
export type RelatedFindingList = RelatedFinding[];
const RelatedFindingList = /*@__PURE__*/ __L.at(__c4, 2);
export interface AutomationRulesFindingFieldsUpdate {
  Note?: NoteUpdate;
  Severity?: SeverityUpdate;
  VerificationState?: VerificationState;
  Confidence?: number;
  Criticality?: number;
  Types?: string[];
  UserDefinedFields?: { [key: string]: string | undefined };
  Workflow?: WorkflowUpdate;
  RelatedFindings?: RelatedFinding[];
}
const AutomationRulesFindingFieldsUpdate = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<AutomationRulesFindingFieldsUpdate>;
export interface AutomationRulesAction {
  Type?: AutomationRulesActionType;
  FindingFieldsUpdate?: AutomationRulesFindingFieldsUpdate;
}
const AutomationRulesAction = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<AutomationRulesAction>;
export type ActionList = AutomationRulesAction[];
const ActionList = /*@__PURE__*/ __L.at(__c4, 5);
export interface AutomationRulesConfig {
  RuleArn?: string;
  RuleStatus?: RuleStatus;
  RuleOrder?: number;
  RuleName?: string;
  Description?: string;
  IsTerminal?: boolean;
  Criteria?: AutomationRulesFindingFilters;
  Actions?: AutomationRulesAction[];
  CreatedAt?: Date;
  UpdatedAt?: Date;
  CreatedBy?: string;
}
const AutomationRulesConfig = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<AutomationRulesConfig>;
export type AutomationRulesConfigList = AutomationRulesConfig[];
const AutomationRulesConfigList = /*@__PURE__*/ __L.at(__c4, 7);
export interface BatchGetAutomationRulesResponse {
  Rules?: (AutomationRulesConfig & {
    Actions: (AutomationRulesAction & {
      FindingFieldsUpdate: AutomationRulesFindingFieldsUpdate & {
        Note: NoteUpdate & { Text: NonEmptyString; UpdatedBy: NonEmptyString };
        RelatedFindings: (RelatedFinding & { ProductArn: NonEmptyString; Id: NonEmptyString })[];
      };
    })[];
  })[];
  UnprocessedAutomationRules?: UnprocessedAutomationRule[];
}
const BatchGetAutomationRulesResponse = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<BatchGetAutomationRulesResponse>;
export type Target =
  | { AccountId: string; OrganizationalUnitId?: never; RootId?: never }
  | { AccountId?: never; OrganizationalUnitId: string; RootId?: never }
  | { AccountId?: never; OrganizationalUnitId?: never; RootId: string };
const Target = /*@__PURE__*/ __L.at(__c5, 1);
export interface ConfigurationPolicyAssociation {
  Target?: Target;
}
const ConfigurationPolicyAssociation = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<ConfigurationPolicyAssociation>;
export type ConfigurationPolicyAssociationsList = ConfigurationPolicyAssociation[];
const ConfigurationPolicyAssociationsList = /*@__PURE__*/ __L.at(__c5, 3);
export interface BatchGetConfigurationPolicyAssociationsRequest {
  ConfigurationPolicyAssociationIdentifiers?: ConfigurationPolicyAssociation[];
}
const BatchGetConfigurationPolicyAssociationsRequest = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<BatchGetConfigurationPolicyAssociationsRequest>;
export type TargetType = "ACCOUNT" | "ORGANIZATIONAL_UNIT" | "ROOT" | (string & {});
const TargetType = S.String;

export type AssociationType = "INHERITED" | "APPLIED" | (string & {});
const AssociationType = S.String;

export type ConfigurationPolicyAssociationStatus = "PENDING" | "SUCCESS" | "FAILED" | (string & {});
const ConfigurationPolicyAssociationStatus = S.String;

export interface ConfigurationPolicyAssociationSummary {
  ConfigurationPolicyId?: string;
  TargetId?: string;
  TargetType?: TargetType;
  AssociationType?: AssociationType;
  UpdatedAt?: Date;
  AssociationStatus?: ConfigurationPolicyAssociationStatus;
  AssociationStatusMessage?: string;
}
const ConfigurationPolicyAssociationSummary = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<ConfigurationPolicyAssociationSummary>;
export type ConfigurationPolicyAssociationList = ConfigurationPolicyAssociationSummary[];
const ConfigurationPolicyAssociationList = /*@__PURE__*/ __L.at(__c5, 6);
export interface UnprocessedConfigurationPolicyAssociation {
  ConfigurationPolicyAssociationIdentifiers?: ConfigurationPolicyAssociation;
  ErrorCode?: string;
  ErrorReason?: string;
}
const UnprocessedConfigurationPolicyAssociation = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<UnprocessedConfigurationPolicyAssociation>;
export type UnprocessedConfigurationPolicyAssociationList =
  UnprocessedConfigurationPolicyAssociation[];
const UnprocessedConfigurationPolicyAssociationList = /*@__PURE__*/ __L.at(__c6, 0);
export interface BatchGetConfigurationPolicyAssociationsResponse {
  ConfigurationPolicyAssociations?: ConfigurationPolicyAssociationSummary[];
  UnprocessedConfigurationPolicyAssociations?: UnprocessedConfigurationPolicyAssociation[];
}
const BatchGetConfigurationPolicyAssociationsResponse = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<BatchGetConfigurationPolicyAssociationsResponse>;
export type StringList = string[];
const StringList = AutomationRulesArnsList as any as S.Schema<StringList>;
export interface BatchGetSecurityControlsRequest {
  SecurityControlIds?: string[];
}
const BatchGetSecurityControlsRequest = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<BatchGetSecurityControlsRequest>;
export type SeverityRating = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL" | (string & {});
const SeverityRating = S.String;

export type ControlStatus = "ENABLED" | "DISABLED" | (string & {});
const ControlStatus = S.String;

export type UpdateStatus = "READY" | "UPDATING" | (string & {});
const UpdateStatus = S.String;

export type ParameterValueType = "DEFAULT" | "CUSTOM" | (string & {});
const ParameterValueType = S.String;

export type IntegerList = number[];
const IntegerList = /*@__PURE__*/ __L.at(__c6, 3);
export type ParameterValue =
  | {
      Integer: number;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList: number[];
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double: number;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String: string;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList: string[];
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean: boolean;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum: string;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList: string[];
    };
const ParameterValue = /*@__PURE__*/ __L.at(__c6, 4);
export interface ParameterConfiguration {
  ValueType?: ParameterValueType;
  Value?: ParameterValue;
}
const ParameterConfiguration = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<ParameterConfiguration>;
export type Parameters = { [key: string]: ParameterConfiguration | undefined };
const Parameters = /*@__PURE__*/ __L.at(__c6, 6);
export type AlphaNumericNonEmptyString = string;
export type SecurityControlsProvider = "AWS" | "Azure" | (string & {});
const SecurityControlsProvider = S.String;

export interface SecurityControl {
  SecurityControlId?: string;
  SecurityControlArn?: string;
  Title?: string;
  Description?: string;
  RemediationUrl?: string;
  SeverityRating?: SeverityRating;
  SecurityControlStatus?: ControlStatus;
  UpdateStatus?: UpdateStatus;
  Parameters?: { [key: string]: ParameterConfiguration | undefined };
  LastUpdateReason?: string;
  Provider?: SecurityControlsProvider;
}
const SecurityControl = /*@__PURE__*/ __L.at(__c6, 7) as any as S.Schema<SecurityControl>;
export type SecurityControls = SecurityControl[];
const SecurityControls = /*@__PURE__*/ __L.at(__c7, 0);
export type UnprocessedErrorCode =
  | "INVALID_INPUT"
  | "ACCESS_DENIED"
  | "NOT_FOUND"
  | "RESOURCE_NOT_FOUND"
  | "LIMIT_EXCEEDED"
  | (string & {});
const UnprocessedErrorCode = S.String;

export interface UnprocessedSecurityControl {
  SecurityControlId?: string;
  ErrorCode?: UnprocessedErrorCode;
  ErrorReason?: string;
}
const UnprocessedSecurityControl = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<UnprocessedSecurityControl>;
export type UnprocessedSecurityControls = UnprocessedSecurityControl[];
const UnprocessedSecurityControls = /*@__PURE__*/ __L.at(__c7, 2);
export interface BatchGetSecurityControlsResponse {
  SecurityControls: (SecurityControl & {
    SecurityControlId: NonEmptyString;
    SecurityControlArn: NonEmptyString;
    Title: NonEmptyString;
    Description: NonEmptyString;
    RemediationUrl: NonEmptyString;
    SeverityRating: SeverityRating;
    SecurityControlStatus: ControlStatus;
    Parameters: {
      [key: string]: (ParameterConfiguration & { ValueType: ParameterValueType }) | undefined;
    };
  })[];
  UnprocessedIds?: (UnprocessedSecurityControl & {
    SecurityControlId: NonEmptyString;
    ErrorCode: UnprocessedErrorCode;
  })[];
}
const BatchGetSecurityControlsResponse = /*@__PURE__*/ __L.at(
  __c7,
  3,
) as any as S.Schema<BatchGetSecurityControlsResponse>;
export interface StandardsControlAssociationId {
  SecurityControlId?: string;
  StandardsArn?: string;
}
const StandardsControlAssociationId = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<StandardsControlAssociationId>;
export type StandardsControlAssociationIds = StandardsControlAssociationId[];
const StandardsControlAssociationIds = /*@__PURE__*/ __L.at(__c7, 5);
export interface BatchGetStandardsControlAssociationsRequest {
  StandardsControlAssociationIds?: StandardsControlAssociationId[];
}
const BatchGetStandardsControlAssociationsRequest = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<BatchGetStandardsControlAssociationsRequest>;
export type AssociationStatus = "ENABLED" | "DISABLED" | (string & {});
const AssociationStatus = S.String;

export type RelatedRequirementsList = string[];
const RelatedRequirementsList = AutomationRulesArnsList as any as S.Schema<RelatedRequirementsList>;
export type StandardsControlArnList = string[];
const StandardsControlArnList = AutomationRulesArnsList as any as S.Schema<StandardsControlArnList>;
export interface StandardsControlAssociationDetail {
  StandardsArn?: string;
  SecurityControlId?: string;
  SecurityControlArn?: string;
  AssociationStatus?: AssociationStatus;
  RelatedRequirements?: string[];
  UpdatedAt?: Date;
  UpdatedReason?: string;
  StandardsControlTitle?: string;
  StandardsControlDescription?: string;
  StandardsControlArns?: string[];
}
const StandardsControlAssociationDetail = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<StandardsControlAssociationDetail>;
export type StandardsControlAssociationDetails = StandardsControlAssociationDetail[];
const StandardsControlAssociationDetails = /*@__PURE__*/ __L.at(__c8, 0);
export interface UnprocessedStandardsControlAssociation {
  StandardsControlAssociationId?: StandardsControlAssociationId;
  ErrorCode?: UnprocessedErrorCode;
  ErrorReason?: string;
}
const UnprocessedStandardsControlAssociation = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<UnprocessedStandardsControlAssociation>;
export type UnprocessedStandardsControlAssociations = UnprocessedStandardsControlAssociation[];
const UnprocessedStandardsControlAssociations = /*@__PURE__*/ __L.at(__c8, 2);
export interface BatchGetStandardsControlAssociationsResponse {
  StandardsControlAssociationDetails: (StandardsControlAssociationDetail & {
    StandardsArn: NonEmptyString;
    SecurityControlId: NonEmptyString;
    SecurityControlArn: NonEmptyString;
    AssociationStatus: AssociationStatus;
  })[];
  UnprocessedAssociations?: (UnprocessedStandardsControlAssociation & {
    StandardsControlAssociationId: StandardsControlAssociationId & {
      SecurityControlId: NonEmptyString;
      StandardsArn: NonEmptyString;
    };
    ErrorCode: UnprocessedErrorCode;
  })[];
}
const BatchGetStandardsControlAssociationsResponse = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<BatchGetStandardsControlAssociationsResponse>;
export interface Severity {
  Product?: number;
  Label?: SeverityLabel;
  Normalized?: number;
  Original?: string;
}
const Severity = /*@__PURE__*/ __L.at(__c8, 4) as any as S.Schema<Severity>;
export interface Recommendation {
  Text?: string;
  Url?: string;
}
const Recommendation = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<Recommendation>;
export interface Remediation {
  Recommendation?: Recommendation;
}
const Remediation = /*@__PURE__*/ __L.at(__c8, 6) as any as S.Schema<Remediation>;
export type MalwareType =
  | "ADWARE"
  | "BLENDED_THREAT"
  | "BOTNET_AGENT"
  | "COIN_MINER"
  | "EXPLOIT_KIT"
  | "KEYLOGGER"
  | "MACRO"
  | "POTENTIALLY_UNWANTED"
  | "SPYWARE"
  | "RANSOMWARE"
  | "REMOTE_ACCESS"
  | "ROOTKIT"
  | "TROJAN"
  | "VIRUS"
  | "WORM"
  | (string & {});
const MalwareType = S.String;

export type MalwareState = "OBSERVED" | "REMOVAL_FAILED" | "REMOVED" | (string & {});
const MalwareState = S.String;

export interface Malware {
  Name?: string;
  Type?: MalwareType;
  Path?: string;
  State?: MalwareState;
}
const Malware = /*@__PURE__*/ __L.at(__c8, 7) as any as S.Schema<Malware>;
export type MalwareList = Malware[];
const MalwareList = /*@__PURE__*/ __L.at(__c9, 0);
export type NetworkDirection = "IN" | "OUT" | (string & {});
const NetworkDirection = S.String;

export interface PortRange {
  Begin?: number;
  End?: number;
}
const PortRange = /*@__PURE__*/ __L.at(__c9, 1) as any as S.Schema<PortRange>;
export interface Network {
  Direction?: NetworkDirection;
  Protocol?: string;
  OpenPortRange?: PortRange;
  SourceIpV4?: string;
  SourceIpV6?: string;
  SourcePort?: number;
  SourceDomain?: string;
  SourceMac?: string;
  DestinationIpV4?: string;
  DestinationIpV6?: string;
  DestinationPort?: number;
  DestinationDomain?: string;
}
const Network = /*@__PURE__*/ __L.at(__c9, 2) as any as S.Schema<Network>;
export type PortRangeList = PortRange[];
const PortRangeList = /*@__PURE__*/ __L.at(__c9, 3);
export interface NetworkPathComponentDetails {
  Address?: string[];
  PortRanges?: PortRange[];
}
const NetworkPathComponentDetails = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<NetworkPathComponentDetails>;
export interface NetworkHeader {
  Protocol?: string;
  Destination?: NetworkPathComponentDetails;
  Source?: NetworkPathComponentDetails;
}
const NetworkHeader = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<NetworkHeader>;
export interface NetworkPathComponent {
  ComponentId?: string;
  ComponentType?: string;
  Egress?: NetworkHeader;
  Ingress?: NetworkHeader;
}
const NetworkPathComponent = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<NetworkPathComponent>;
export type NetworkPathList = NetworkPathComponent[];
const NetworkPathList = /*@__PURE__*/ __L.at(__c9, 7);
export interface ProcessDetails {
  Name?: string;
  Path?: string;
  Pid?: number;
  ParentPid?: number;
  LaunchedAt?: string;
  TerminatedAt?: string;
}
const ProcessDetails = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<ProcessDetails>;
export interface FilePaths {
  FilePath?: string;
  FileName?: string;
  ResourceId?: string;
  Hash?: string;
}
const FilePaths = /*@__PURE__*/ __L.at(__c10, 1) as any as S.Schema<FilePaths>;
export type FilePathList = FilePaths[];
const FilePathList = /*@__PURE__*/ __L.at(__c10, 2);
export interface Threat {
  Name?: string;
  Severity?: string;
  ItemCount?: number;
  FilePaths?: FilePaths[];
}
const Threat = /*@__PURE__*/ __L.at(__c10, 3) as any as S.Schema<Threat>;
export type ThreatList = Threat[];
const ThreatList = /*@__PURE__*/ __L.at(__c10, 4);
export type ThreatIntelIndicatorType =
  | "DOMAIN"
  | "EMAIL_ADDRESS"
  | "HASH_MD5"
  | "HASH_SHA1"
  | "HASH_SHA256"
  | "HASH_SHA512"
  | "IPV4_ADDRESS"
  | "IPV6_ADDRESS"
  | "MUTEX"
  | "PROCESS"
  | "URL"
  | (string & {});
const ThreatIntelIndicatorType = S.String;

export type ThreatIntelIndicatorCategory =
  | "BACKDOOR"
  | "CARD_STEALER"
  | "COMMAND_AND_CONTROL"
  | "DROP_SITE"
  | "EXPLOIT_SITE"
  | "KEYLOGGER"
  | (string & {});
const ThreatIntelIndicatorCategory = S.String;

export interface ThreatIntelIndicator {
  Type?: ThreatIntelIndicatorType;
  Value?: string;
  Category?: ThreatIntelIndicatorCategory;
  LastObservedAt?: string;
  Source?: string;
  SourceUrl?: string;
}
const ThreatIntelIndicator = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<ThreatIntelIndicator>;
export type ThreatIntelIndicatorList = ThreatIntelIndicator[];
const ThreatIntelIndicatorList = /*@__PURE__*/ __L.at(__c10, 6);
export type Partition =
  | "aws"
  | "aws-cn"
  | "aws-us-gov"
  | "aws-us-iso"
  | "aws-us-iso-b"
  | "AzureCloud"
  | (string & {});
const Partition = S.String;

export type CloudProviderName = "Azure" | "AWS" | (string & {});
const CloudProviderName = S.String;

export interface ResourceOwnerAccount {
  Id?: string;
}
const ResourceOwnerAccount = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<ResourceOwnerAccount>;
export interface ResourceOwnerOrg {
  Id?: string;
}
const ResourceOwnerOrg = ResourceOwnerAccount as any as S.Schema<ResourceOwnerOrg>;
export interface ResourceOwner {
  Account?: ResourceOwnerAccount;
  Org?: ResourceOwnerOrg;
}
const ResourceOwner = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<ResourceOwner>;
export interface ClassificationStatus {
  Code?: string;
  Reason?: string;
}
const ClassificationStatus = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<ClassificationStatus>;
export interface Range {
  Start?: number;
  End?: number;
  StartColumn?: number;
}
const Range = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<Range>;
export type Ranges = Range[];
const Ranges = /*@__PURE__*/ __L.at(__c11, 3);
export interface Page {
  PageNumber?: number;
  LineRange?: Range;
  OffsetRange?: Range;
}
const Page = /*@__PURE__*/ __L.at(__c11, 4) as any as S.Schema<Page>;
export type Pages = Page[];
const Pages = /*@__PURE__*/ __L.at(__c11, 5);
export interface Record {
  JsonPath?: string;
  RecordIndex?: number;
}
const Record = /*@__PURE__*/ __L.at(__c11, 6) as any as S.Schema<Record>;
export type Records = Record[];
const Records = /*@__PURE__*/ __L.at(__c11, 7);
export interface Cell {
  Column?: number;
  Row?: number;
  ColumnName?: string;
  CellReference?: string;
}
const Cell = /*@__PURE__*/ __L.at(__c12, 0) as any as S.Schema<Cell>;
export type Cells = Cell[];
const Cells = /*@__PURE__*/ __L.at(__c12, 1);
export interface Occurrences {
  LineRanges?: Range[];
  OffsetRanges?: Range[];
  Pages?: Page[];
  Records?: Record[];
  Cells?: Cell[];
}
const Occurrences = /*@__PURE__*/ __L.at(__c12, 2) as any as S.Schema<Occurrences>;
export interface SensitiveDataDetections {
  Count?: number;
  Type?: string;
  Occurrences?: Occurrences;
}
const SensitiveDataDetections = /*@__PURE__*/ __L.at(
  __c12,
  3,
) as any as S.Schema<SensitiveDataDetections>;
export type SensitiveDataDetectionsList = SensitiveDataDetections[];
const SensitiveDataDetectionsList = /*@__PURE__*/ __L.at(__c12, 4);
export interface SensitiveDataResult {
  Category?: string;
  Detections?: SensitiveDataDetections[];
  TotalCount?: number;
}
const SensitiveDataResult = /*@__PURE__*/ __L.at(__c12, 5) as any as S.Schema<SensitiveDataResult>;
export type SensitiveDataResultList = SensitiveDataResult[];
const SensitiveDataResultList = /*@__PURE__*/ __L.at(__c12, 6);
export interface CustomDataIdentifiersDetections {
  Count?: number;
  Arn?: string;
  Name?: string;
  Occurrences?: Occurrences;
}
const CustomDataIdentifiersDetections = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<CustomDataIdentifiersDetections>;
export type CustomDataIdentifiersDetectionsList = CustomDataIdentifiersDetections[];
const CustomDataIdentifiersDetectionsList = /*@__PURE__*/ __L.at(__c13, 0);
export interface CustomDataIdentifiersResult {
  Detections?: CustomDataIdentifiersDetections[];
  TotalCount?: number;
}
const CustomDataIdentifiersResult = /*@__PURE__*/ __L.at(
  __c13,
  1,
) as any as S.Schema<CustomDataIdentifiersResult>;
export interface ClassificationResult {
  MimeType?: string;
  SizeClassified?: number;
  AdditionalOccurrences?: boolean;
  Status?: ClassificationStatus;
  SensitiveData?: SensitiveDataResult[];
  CustomDataIdentifiers?: CustomDataIdentifiersResult;
}
const ClassificationResult = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<ClassificationResult>;
export interface DataClassificationDetails {
  DetailedResultsLocation?: string;
  Result?: ClassificationResult;
}
const DataClassificationDetails = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<DataClassificationDetails>;
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails {
  OnDemandAllocationStrategy?: string;
  OnDemandBaseCapacity?: number;
  OnDemandPercentageAboveBaseCapacity?: number;
  SpotAllocationStrategy?: string;
  SpotInstancePools?: number;
  SpotMaxPrice?: string;
}
const AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails =
  /*@__PURE__*/ __L.at(
    __c13,
    4,
  ) as any as S.Schema<AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails>;
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version?: string;
}
const AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification =
  /*@__PURE__*/ __L.at(
    __c13,
    5,
  ) as any as S.Schema<AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification>;
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails {
  InstanceType?: string;
  WeightedCapacity?: string;
}
const AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails =
  /*@__PURE__*/ __L.at(
    __c13,
    6,
  ) as any as S.Schema<AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails>;
export type AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList =
  AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails[];
const AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList =
  /*@__PURE__*/ __L.at(__c13, 7);
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails {
  LaunchTemplateSpecification?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification;
  Overrides?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails[];
}
const AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails =
  /*@__PURE__*/ __L.at(
    __c14,
    0,
  ) as any as S.Schema<AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails>;
export interface AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails {
  InstancesDistribution?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails;
  LaunchTemplate?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails;
}
const AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails>;
export interface AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails {
  Value?: string;
}
const AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails>;
export type AwsAutoScalingAutoScalingGroupAvailabilityZonesList =
  AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails[];
const AwsAutoScalingAutoScalingGroupAvailabilityZonesList = /*@__PURE__*/ __L.at(__c14, 3);
export interface AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification {
  LaunchTemplateId?: string;
  LaunchTemplateName?: string;
  Version?: string;
}
const AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification =
  /*@__PURE__*/ __L.at(
    __c14,
    4,
  ) as any as S.Schema<AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification>;
export interface AwsAutoScalingAutoScalingGroupDetails {
  LaunchConfigurationName?: string;
  LoadBalancerNames?: string[];
  HealthCheckType?: string;
  HealthCheckGracePeriod?: number;
  CreatedTime?: string;
  MixedInstancesPolicy?: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails;
  AvailabilityZones?: AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails[];
  LaunchTemplate?: AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification;
  CapacityRebalance?: boolean;
}
const AwsAutoScalingAutoScalingGroupDetails = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<AwsAutoScalingAutoScalingGroupDetails>;
export interface AwsCodeBuildProjectArtifactsDetails {
  ArtifactIdentifier?: string;
  EncryptionDisabled?: boolean;
  Location?: string;
  Name?: string;
  NamespaceType?: string;
  OverrideArtifactName?: boolean;
  Packaging?: string;
  Path?: string;
  Type?: string;
}
const AwsCodeBuildProjectArtifactsDetails = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<AwsCodeBuildProjectArtifactsDetails>;
export type AwsCodeBuildProjectArtifactsList = AwsCodeBuildProjectArtifactsDetails[];
const AwsCodeBuildProjectArtifactsList = /*@__PURE__*/ __L.at(__c14, 7);
export interface AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails {
  Name?: string;
  Type?: string;
  Value?: string;
}
const AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails>;
export type AwsCodeBuildProjectEnvironmentEnvironmentVariablesList =
  AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails[];
const AwsCodeBuildProjectEnvironmentEnvironmentVariablesList = /*@__PURE__*/ __L.at(__c15, 1);
export interface AwsCodeBuildProjectEnvironmentRegistryCredential {
  Credential?: string;
  CredentialProvider?: string;
}
const AwsCodeBuildProjectEnvironmentRegistryCredential = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<AwsCodeBuildProjectEnvironmentRegistryCredential>;
export interface AwsCodeBuildProjectEnvironment {
  Certificate?: string;
  EnvironmentVariables?: AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails[];
  PrivilegedMode?: boolean;
  ImagePullCredentialsType?: string;
  RegistryCredential?: AwsCodeBuildProjectEnvironmentRegistryCredential;
  Type?: string;
}
const AwsCodeBuildProjectEnvironment = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<AwsCodeBuildProjectEnvironment>;
export interface AwsCodeBuildProjectSource {
  Type?: string;
  Location?: string;
  GitCloneDepth?: number;
  InsecureSsl?: boolean;
}
const AwsCodeBuildProjectSource = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<AwsCodeBuildProjectSource>;
export interface AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails {
  GroupName?: string;
  Status?: string;
  StreamName?: string;
}
const AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails>;
export interface AwsCodeBuildProjectLogsConfigS3LogsDetails {
  EncryptionDisabled?: boolean;
  Location?: string;
  Status?: string;
}
const AwsCodeBuildProjectLogsConfigS3LogsDetails = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<AwsCodeBuildProjectLogsConfigS3LogsDetails>;
export interface AwsCodeBuildProjectLogsConfigDetails {
  CloudWatchLogs?: AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails;
  S3Logs?: AwsCodeBuildProjectLogsConfigS3LogsDetails;
}
const AwsCodeBuildProjectLogsConfigDetails = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<AwsCodeBuildProjectLogsConfigDetails>;
export type NonEmptyStringList = string[];
const NonEmptyStringList = AutomationRulesArnsList as any as S.Schema<NonEmptyStringList>;
export interface AwsCodeBuildProjectVpcConfig {
  VpcId?: string;
  Subnets?: string[];
  SecurityGroupIds?: string[];
}
const AwsCodeBuildProjectVpcConfig = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<AwsCodeBuildProjectVpcConfig>;
export interface AwsCodeBuildProjectDetails {
  EncryptionKey?: string;
  Artifacts?: AwsCodeBuildProjectArtifactsDetails[];
  Environment?: AwsCodeBuildProjectEnvironment;
  Name?: string;
  Source?: AwsCodeBuildProjectSource;
  ServiceRole?: string;
  LogsConfig?: AwsCodeBuildProjectLogsConfigDetails;
  VpcConfig?: AwsCodeBuildProjectVpcConfig;
  SecondaryArtifacts?: AwsCodeBuildProjectArtifactsDetails[];
}
const AwsCodeBuildProjectDetails = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<AwsCodeBuildProjectDetails>;
export interface AwsCloudFrontDistributionCacheBehavior {
  ViewerProtocolPolicy?: string;
}
const AwsCloudFrontDistributionCacheBehavior = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<AwsCloudFrontDistributionCacheBehavior>;
export type AwsCloudFrontDistributionCacheBehaviorsItemList =
  AwsCloudFrontDistributionCacheBehavior[];
const AwsCloudFrontDistributionCacheBehaviorsItemList = /*@__PURE__*/ __L.at(__c16, 3);
export interface AwsCloudFrontDistributionCacheBehaviors {
  Items?: AwsCloudFrontDistributionCacheBehavior[];
}
const AwsCloudFrontDistributionCacheBehaviors = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<AwsCloudFrontDistributionCacheBehaviors>;
export interface AwsCloudFrontDistributionDefaultCacheBehavior {
  ViewerProtocolPolicy?: string;
}
const AwsCloudFrontDistributionDefaultCacheBehavior =
  AwsCloudFrontDistributionCacheBehavior as any as S.Schema<AwsCloudFrontDistributionDefaultCacheBehavior>;
export interface AwsCloudFrontDistributionLogging {
  Bucket?: string;
  Enabled?: boolean;
  IncludeCookies?: boolean;
  Prefix?: string;
}
const AwsCloudFrontDistributionLogging = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<AwsCloudFrontDistributionLogging>;
export interface AwsCloudFrontDistributionOriginS3OriginConfig {
  OriginAccessIdentity?: string;
}
const AwsCloudFrontDistributionOriginS3OriginConfig = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<AwsCloudFrontDistributionOriginS3OriginConfig>;
export interface AwsCloudFrontDistributionOriginSslProtocols {
  Items?: string[];
  Quantity?: number;
}
const AwsCloudFrontDistributionOriginSslProtocols = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<AwsCloudFrontDistributionOriginSslProtocols>;
export interface AwsCloudFrontDistributionOriginCustomOriginConfig {
  HttpPort?: number;
  HttpsPort?: number;
  OriginKeepaliveTimeout?: number;
  OriginProtocolPolicy?: string;
  OriginReadTimeout?: number;
  OriginSslProtocols?: AwsCloudFrontDistributionOriginSslProtocols;
}
const AwsCloudFrontDistributionOriginCustomOriginConfig = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<AwsCloudFrontDistributionOriginCustomOriginConfig>;
export interface AwsCloudFrontDistributionOriginItem {
  DomainName?: string;
  Id?: string;
  OriginPath?: string;
  S3OriginConfig?: AwsCloudFrontDistributionOriginS3OriginConfig;
  CustomOriginConfig?: AwsCloudFrontDistributionOriginCustomOriginConfig;
}
const AwsCloudFrontDistributionOriginItem = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<AwsCloudFrontDistributionOriginItem>;
export type AwsCloudFrontDistributionOriginItemList = AwsCloudFrontDistributionOriginItem[];
const AwsCloudFrontDistributionOriginItemList = /*@__PURE__*/ __L.at(__c17, 2);
export interface AwsCloudFrontDistributionOrigins {
  Items?: AwsCloudFrontDistributionOriginItem[];
}
const AwsCloudFrontDistributionOrigins = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<AwsCloudFrontDistributionOrigins>;
export type AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList = number[];
const AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList =
  IntegerList as any as S.Schema<AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList>;
export interface AwsCloudFrontDistributionOriginGroupFailoverStatusCodes {
  Items?: number[];
  Quantity?: number;
}
const AwsCloudFrontDistributionOriginGroupFailoverStatusCodes = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<AwsCloudFrontDistributionOriginGroupFailoverStatusCodes>;
export interface AwsCloudFrontDistributionOriginGroupFailover {
  StatusCodes?: AwsCloudFrontDistributionOriginGroupFailoverStatusCodes;
}
const AwsCloudFrontDistributionOriginGroupFailover = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<AwsCloudFrontDistributionOriginGroupFailover>;
export interface AwsCloudFrontDistributionOriginGroup {
  FailoverCriteria?: AwsCloudFrontDistributionOriginGroupFailover;
}
const AwsCloudFrontDistributionOriginGroup = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<AwsCloudFrontDistributionOriginGroup>;
export type AwsCloudFrontDistributionOriginGroupsItemList = AwsCloudFrontDistributionOriginGroup[];
const AwsCloudFrontDistributionOriginGroupsItemList = /*@__PURE__*/ __L.at(__c17, 7);
export interface AwsCloudFrontDistributionOriginGroups {
  Items?: AwsCloudFrontDistributionOriginGroup[];
}
const AwsCloudFrontDistributionOriginGroups = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<AwsCloudFrontDistributionOriginGroups>;
export interface AwsCloudFrontDistributionViewerCertificate {
  AcmCertificateArn?: string;
  Certificate?: string;
  CertificateSource?: string;
  CloudFrontDefaultCertificate?: boolean;
  IamCertificateId?: string;
  MinimumProtocolVersion?: string;
  SslSupportMethod?: string;
}
const AwsCloudFrontDistributionViewerCertificate = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<AwsCloudFrontDistributionViewerCertificate>;
export interface AwsCloudFrontDistributionDetails {
  CacheBehaviors?: AwsCloudFrontDistributionCacheBehaviors;
  DefaultCacheBehavior?: AwsCloudFrontDistributionDefaultCacheBehavior;
  DefaultRootObject?: string;
  DomainName?: string;
  ETag?: string;
  LastModifiedTime?: string;
  Logging?: AwsCloudFrontDistributionLogging;
  Origins?: AwsCloudFrontDistributionOrigins;
  OriginGroups?: AwsCloudFrontDistributionOriginGroups;
  ViewerCertificate?: AwsCloudFrontDistributionViewerCertificate;
  Status?: string;
  WebAclId?: string;
}
const AwsCloudFrontDistributionDetails = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<AwsCloudFrontDistributionDetails>;
export interface AwsEc2InstanceNetworkInterfacesDetails {
  NetworkInterfaceId?: string;
}
const AwsEc2InstanceNetworkInterfacesDetails = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<AwsEc2InstanceNetworkInterfacesDetails>;
export type AwsEc2InstanceNetworkInterfacesList = AwsEc2InstanceNetworkInterfacesDetails[];
const AwsEc2InstanceNetworkInterfacesList = /*@__PURE__*/ __L.at(__c18, 4);
export interface AwsEc2InstanceMetadataOptions {
  HttpEndpoint?: string;
  HttpProtocolIpv6?: string;
  HttpPutResponseHopLimit?: number;
  HttpTokens?: string;
  InstanceMetadataTags?: string;
}
const AwsEc2InstanceMetadataOptions = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<AwsEc2InstanceMetadataOptions>;
export interface AwsEc2InstanceMonitoringDetails {
  State?: string;
}
const AwsEc2InstanceMonitoringDetails = /*@__PURE__*/ __L.at(
  __c18,
  6,
) as any as S.Schema<AwsEc2InstanceMonitoringDetails>;
export interface AwsEc2InstanceDetails {
  Type?: string;
  ImageId?: string;
  IpV4Addresses?: string[];
  IpV6Addresses?: string[];
  KeyName?: string;
  IamInstanceProfileArn?: string;
  VpcId?: string;
  SubnetId?: string;
  LaunchedAt?: string;
  NetworkInterfaces?: AwsEc2InstanceNetworkInterfacesDetails[];
  VirtualizationType?: string;
  MetadataOptions?: AwsEc2InstanceMetadataOptions;
  Monitoring?: AwsEc2InstanceMonitoringDetails;
}
const AwsEc2InstanceDetails = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<AwsEc2InstanceDetails>;
export interface AwsEc2NetworkInterfaceAttachment {
  AttachTime?: string;
  AttachmentId?: string;
  DeleteOnTermination?: boolean;
  DeviceIndex?: number;
  InstanceId?: string;
  InstanceOwnerId?: string;
  Status?: string;
}
const AwsEc2NetworkInterfaceAttachment = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<AwsEc2NetworkInterfaceAttachment>;
export interface AwsEc2NetworkInterfaceSecurityGroup {
  GroupName?: string;
  GroupId?: string;
}
const AwsEc2NetworkInterfaceSecurityGroup = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<AwsEc2NetworkInterfaceSecurityGroup>;
export type AwsEc2NetworkInterfaceSecurityGroupList = AwsEc2NetworkInterfaceSecurityGroup[];
const AwsEc2NetworkInterfaceSecurityGroupList = /*@__PURE__*/ __L.at(__c19, 2);
export interface AwsEc2NetworkInterfaceIpV6AddressDetail {
  IpV6Address?: string;
}
const AwsEc2NetworkInterfaceIpV6AddressDetail = /*@__PURE__*/ __L.at(
  __c19,
  3,
) as any as S.Schema<AwsEc2NetworkInterfaceIpV6AddressDetail>;
export type AwsEc2NetworkInterfaceIpV6AddressList = AwsEc2NetworkInterfaceIpV6AddressDetail[];
const AwsEc2NetworkInterfaceIpV6AddressList = /*@__PURE__*/ __L.at(__c19, 4);
export interface AwsEc2NetworkInterfacePrivateIpAddressDetail {
  PrivateIpAddress?: string;
  PrivateDnsName?: string;
}
const AwsEc2NetworkInterfacePrivateIpAddressDetail = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<AwsEc2NetworkInterfacePrivateIpAddressDetail>;
export type AwsEc2NetworkInterfacePrivateIpAddressList =
  AwsEc2NetworkInterfacePrivateIpAddressDetail[];
const AwsEc2NetworkInterfacePrivateIpAddressList = /*@__PURE__*/ __L.at(__c19, 6);
export interface AwsEc2NetworkInterfaceDetails {
  Attachment?: AwsEc2NetworkInterfaceAttachment;
  NetworkInterfaceId?: string;
  SecurityGroups?: AwsEc2NetworkInterfaceSecurityGroup[];
  SourceDestCheck?: boolean;
  IpV6Addresses?: AwsEc2NetworkInterfaceIpV6AddressDetail[];
  PrivateIpAddresses?: AwsEc2NetworkInterfacePrivateIpAddressDetail[];
  PublicDnsName?: string;
  PublicIp?: string;
}
const AwsEc2NetworkInterfaceDetails = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<AwsEc2NetworkInterfaceDetails>;
export interface AwsEc2SecurityGroupUserIdGroupPair {
  GroupId?: string;
  GroupName?: string;
  PeeringStatus?: string;
  UserId?: string;
  VpcId?: string;
  VpcPeeringConnectionId?: string;
}
const AwsEc2SecurityGroupUserIdGroupPair = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<AwsEc2SecurityGroupUserIdGroupPair>;
export type AwsEc2SecurityGroupUserIdGroupPairList = AwsEc2SecurityGroupUserIdGroupPair[];
const AwsEc2SecurityGroupUserIdGroupPairList = /*@__PURE__*/ __L.at(__c20, 1);
export interface AwsEc2SecurityGroupIpRange {
  CidrIp?: string;
}
const AwsEc2SecurityGroupIpRange = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<AwsEc2SecurityGroupIpRange>;
export type AwsEc2SecurityGroupIpRangeList = AwsEc2SecurityGroupIpRange[];
const AwsEc2SecurityGroupIpRangeList = /*@__PURE__*/ __L.at(__c20, 3);
export interface AwsEc2SecurityGroupIpv6Range {
  CidrIpv6?: string;
}
const AwsEc2SecurityGroupIpv6Range = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<AwsEc2SecurityGroupIpv6Range>;
export type AwsEc2SecurityGroupIpv6RangeList = AwsEc2SecurityGroupIpv6Range[];
const AwsEc2SecurityGroupIpv6RangeList = /*@__PURE__*/ __L.at(__c20, 5);
export interface AwsEc2SecurityGroupPrefixListId {
  PrefixListId?: string;
}
const AwsEc2SecurityGroupPrefixListId = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<AwsEc2SecurityGroupPrefixListId>;
export type AwsEc2SecurityGroupPrefixListIdList = AwsEc2SecurityGroupPrefixListId[];
const AwsEc2SecurityGroupPrefixListIdList = /*@__PURE__*/ __L.at(__c20, 7);
export interface AwsEc2SecurityGroupIpPermission {
  IpProtocol?: string;
  FromPort?: number;
  ToPort?: number;
  UserIdGroupPairs?: AwsEc2SecurityGroupUserIdGroupPair[];
  IpRanges?: AwsEc2SecurityGroupIpRange[];
  Ipv6Ranges?: AwsEc2SecurityGroupIpv6Range[];
  PrefixListIds?: AwsEc2SecurityGroupPrefixListId[];
}
const AwsEc2SecurityGroupIpPermission = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<AwsEc2SecurityGroupIpPermission>;
export type AwsEc2SecurityGroupIpPermissionList = AwsEc2SecurityGroupIpPermission[];
const AwsEc2SecurityGroupIpPermissionList = /*@__PURE__*/ __L.at(__c21, 1);
export interface AwsEc2SecurityGroupDetails {
  GroupName?: string;
  GroupId?: string;
  OwnerId?: string;
  VpcId?: string;
  IpPermissions?: AwsEc2SecurityGroupIpPermission[];
  IpPermissionsEgress?: AwsEc2SecurityGroupIpPermission[];
}
const AwsEc2SecurityGroupDetails = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<AwsEc2SecurityGroupDetails>;
export interface AwsEc2VolumeAttachment {
  AttachTime?: string;
  DeleteOnTermination?: boolean;
  InstanceId?: string;
  Status?: string;
}
const AwsEc2VolumeAttachment = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<AwsEc2VolumeAttachment>;
export type AwsEc2VolumeAttachmentList = AwsEc2VolumeAttachment[];
const AwsEc2VolumeAttachmentList = /*@__PURE__*/ __L.at(__c21, 4);
export interface AwsEc2VolumeDetails {
  CreateTime?: string;
  DeviceName?: string;
  Encrypted?: boolean;
  Size?: number;
  SnapshotId?: string;
  Status?: string;
  KmsKeyId?: string;
  Attachments?: AwsEc2VolumeAttachment[];
  VolumeId?: string;
  VolumeType?: string;
  VolumeScanStatus?: string;
}
const AwsEc2VolumeDetails = /*@__PURE__*/ __L.at(__c21, 5) as any as S.Schema<AwsEc2VolumeDetails>;
export interface CidrBlockAssociation {
  AssociationId?: string;
  CidrBlock?: string;
  CidrBlockState?: string;
}
const CidrBlockAssociation = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<CidrBlockAssociation>;
export type CidrBlockAssociationList = CidrBlockAssociation[];
const CidrBlockAssociationList = /*@__PURE__*/ __L.at(__c21, 7);
export interface Ipv6CidrBlockAssociation {
  AssociationId?: string;
  Ipv6CidrBlock?: string;
  CidrBlockState?: string;
}
const Ipv6CidrBlockAssociation = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<Ipv6CidrBlockAssociation>;
export type Ipv6CidrBlockAssociationList = Ipv6CidrBlockAssociation[];
const Ipv6CidrBlockAssociationList = /*@__PURE__*/ __L.at(__c22, 1);
export interface AwsEc2VpcDetails {
  CidrBlockAssociationSet?: CidrBlockAssociation[];
  Ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociation[];
  DhcpOptionsId?: string;
  State?: string;
}
const AwsEc2VpcDetails = /*@__PURE__*/ __L.at(__c22, 2) as any as S.Schema<AwsEc2VpcDetails>;
export interface AwsEc2EipDetails {
  InstanceId?: string;
  PublicIp?: string;
  AllocationId?: string;
  AssociationId?: string;
  Domain?: string;
  PublicIpv4Pool?: string;
  NetworkBorderGroup?: string;
  NetworkInterfaceId?: string;
  NetworkInterfaceOwnerId?: string;
  PrivateIpAddress?: string;
}
const AwsEc2EipDetails = /*@__PURE__*/ __L.at(__c22, 3) as any as S.Schema<AwsEc2EipDetails>;
export interface AwsEc2SubnetDetails {
  AssignIpv6AddressOnCreation?: boolean;
  AvailabilityZone?: string;
  AvailabilityZoneId?: string;
  AvailableIpAddressCount?: number;
  CidrBlock?: string;
  DefaultForAz?: boolean;
  MapPublicIpOnLaunch?: boolean;
  OwnerId?: string;
  State?: string;
  SubnetArn?: string;
  SubnetId?: string;
  VpcId?: string;
  Ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociation[];
}
const AwsEc2SubnetDetails = /*@__PURE__*/ __L.at(__c22, 4) as any as S.Schema<AwsEc2SubnetDetails>;
export interface AwsEc2NetworkAclAssociation {
  NetworkAclAssociationId?: string;
  NetworkAclId?: string;
  SubnetId?: string;
}
const AwsEc2NetworkAclAssociation = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<AwsEc2NetworkAclAssociation>;
export type AwsEc2NetworkAclAssociationList = AwsEc2NetworkAclAssociation[];
const AwsEc2NetworkAclAssociationList = /*@__PURE__*/ __L.at(__c22, 6);
export interface IcmpTypeCode {
  Code?: number;
  Type?: number;
}
const IcmpTypeCode = /*@__PURE__*/ __L.at(__c22, 7) as any as S.Schema<IcmpTypeCode>;
export interface PortRangeFromTo {
  From?: number;
  To?: number;
}
const PortRangeFromTo = /*@__PURE__*/ __L.at(__c23, 0) as any as S.Schema<PortRangeFromTo>;
export interface AwsEc2NetworkAclEntry {
  CidrBlock?: string;
  Egress?: boolean;
  IcmpTypeCode?: IcmpTypeCode;
  Ipv6CidrBlock?: string;
  PortRange?: PortRangeFromTo;
  Protocol?: string;
  RuleAction?: string;
  RuleNumber?: number;
}
const AwsEc2NetworkAclEntry = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<AwsEc2NetworkAclEntry>;
export type AwsEc2NetworkAclEntryList = AwsEc2NetworkAclEntry[];
const AwsEc2NetworkAclEntryList = /*@__PURE__*/ __L.at(__c23, 2);
export interface AwsEc2NetworkAclDetails {
  IsDefault?: boolean;
  NetworkAclId?: string;
  OwnerId?: string;
  VpcId?: string;
  Associations?: AwsEc2NetworkAclAssociation[];
  Entries?: AwsEc2NetworkAclEntry[];
}
const AwsEc2NetworkAclDetails = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<AwsEc2NetworkAclDetails>;
export interface AvailabilityZone {
  ZoneName?: string;
  SubnetId?: string;
}
const AvailabilityZone = /*@__PURE__*/ __L.at(__c23, 4) as any as S.Schema<AvailabilityZone>;
export type AvailabilityZones = AvailabilityZone[];
const AvailabilityZones = /*@__PURE__*/ __L.at(__c23, 5);
export type SecurityGroups = string[];
const SecurityGroups = AutomationRulesArnsList as any as S.Schema<SecurityGroups>;
export interface LoadBalancerState {
  Code?: string;
  Reason?: string;
}
const LoadBalancerState = ClassificationStatus as any as S.Schema<LoadBalancerState>;
export interface AwsElbv2LoadBalancerAttribute {
  Key?: string;
  Value?: string;
}
const AwsElbv2LoadBalancerAttribute = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<AwsElbv2LoadBalancerAttribute>;
export type AwsElbv2LoadBalancerAttributes = AwsElbv2LoadBalancerAttribute[];
const AwsElbv2LoadBalancerAttributes = /*@__PURE__*/ __L.at(__c23, 7);
export interface AwsElbv2LoadBalancerDetails {
  AvailabilityZones?: AvailabilityZone[];
  CanonicalHostedZoneId?: string;
  CreatedTime?: string;
  DNSName?: string;
  IpAddressType?: string;
  Scheme?: string;
  SecurityGroups?: string[];
  State?: LoadBalancerState;
  Type?: string;
  VpcId?: string;
  LoadBalancerAttributes?: AwsElbv2LoadBalancerAttribute[];
}
const AwsElbv2LoadBalancerDetails = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<AwsElbv2LoadBalancerDetails>;
export interface AwsElasticBeanstalkEnvironmentEnvironmentLink {
  EnvironmentName?: string;
  LinkName?: string;
}
const AwsElasticBeanstalkEnvironmentEnvironmentLink = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<AwsElasticBeanstalkEnvironmentEnvironmentLink>;
export type AwsElasticBeanstalkEnvironmentEnvironmentLinks =
  AwsElasticBeanstalkEnvironmentEnvironmentLink[];
const AwsElasticBeanstalkEnvironmentEnvironmentLinks = /*@__PURE__*/ __L.at(__c24, 2);
export interface AwsElasticBeanstalkEnvironmentOptionSetting {
  Namespace?: string;
  OptionName?: string;
  ResourceName?: string;
  Value?: string;
}
const AwsElasticBeanstalkEnvironmentOptionSetting = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<AwsElasticBeanstalkEnvironmentOptionSetting>;
export type AwsElasticBeanstalkEnvironmentOptionSettings =
  AwsElasticBeanstalkEnvironmentOptionSetting[];
const AwsElasticBeanstalkEnvironmentOptionSettings = /*@__PURE__*/ __L.at(__c24, 4);
export interface AwsElasticBeanstalkEnvironmentTier {
  Name?: string;
  Type?: string;
  Version?: string;
}
const AwsElasticBeanstalkEnvironmentTier = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<AwsElasticBeanstalkEnvironmentTier>;
export interface AwsElasticBeanstalkEnvironmentDetails {
  ApplicationName?: string;
  Cname?: string;
  DateCreated?: string;
  DateUpdated?: string;
  Description?: string;
  EndpointUrl?: string;
  EnvironmentArn?: string;
  EnvironmentId?: string;
  EnvironmentLinks?: AwsElasticBeanstalkEnvironmentEnvironmentLink[];
  EnvironmentName?: string;
  OptionSettings?: AwsElasticBeanstalkEnvironmentOptionSetting[];
  PlatformArn?: string;
  SolutionStackName?: string;
  Status?: string;
  Tier?: AwsElasticBeanstalkEnvironmentTier;
  VersionLabel?: string;
}
const AwsElasticBeanstalkEnvironmentDetails = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<AwsElasticBeanstalkEnvironmentDetails>;
export interface AwsElasticsearchDomainDomainEndpointOptions {
  EnforceHTTPS?: boolean;
  TLSSecurityPolicy?: string;
}
const AwsElasticsearchDomainDomainEndpointOptions = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<AwsElasticsearchDomainDomainEndpointOptions>;
export interface AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails {
  AvailabilityZoneCount?: number;
}
const AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails =
  /*@__PURE__*/ __L.at(
    __c25,
    0,
  ) as any as S.Schema<AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails>;
export interface AwsElasticsearchDomainElasticsearchClusterConfigDetails {
  DedicatedMasterCount?: number;
  DedicatedMasterEnabled?: boolean;
  DedicatedMasterType?: string;
  InstanceCount?: number;
  InstanceType?: string;
  ZoneAwarenessConfig?: AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails;
  ZoneAwarenessEnabled?: boolean;
}
const AwsElasticsearchDomainElasticsearchClusterConfigDetails = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<AwsElasticsearchDomainElasticsearchClusterConfigDetails>;
export interface AwsElasticsearchDomainEncryptionAtRestOptions {
  Enabled?: boolean;
  KmsKeyId?: string;
}
const AwsElasticsearchDomainEncryptionAtRestOptions = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<AwsElasticsearchDomainEncryptionAtRestOptions>;
export interface AwsElasticsearchDomainLogPublishingOptionsLogConfig {
  CloudWatchLogsLogGroupArn?: string;
  Enabled?: boolean;
}
const AwsElasticsearchDomainLogPublishingOptionsLogConfig = /*@__PURE__*/ __L.at(
  __c25,
  3,
) as any as S.Schema<AwsElasticsearchDomainLogPublishingOptionsLogConfig>;
export interface AwsElasticsearchDomainLogPublishingOptions {
  IndexSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
  SearchSlowLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
  AuditLogs?: AwsElasticsearchDomainLogPublishingOptionsLogConfig;
}
const AwsElasticsearchDomainLogPublishingOptions = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<AwsElasticsearchDomainLogPublishingOptions>;
export interface AwsElasticsearchDomainNodeToNodeEncryptionOptions {
  Enabled?: boolean;
}
const AwsElasticsearchDomainNodeToNodeEncryptionOptions = /*@__PURE__*/ __L.at(
  __c25,
  5,
) as any as S.Schema<AwsElasticsearchDomainNodeToNodeEncryptionOptions>;
export interface AwsElasticsearchDomainServiceSoftwareOptions {
  AutomatedUpdateDate?: string;
  Cancellable?: boolean;
  CurrentVersion?: string;
  Description?: string;
  NewVersion?: string;
  UpdateAvailable?: boolean;
  UpdateStatus?: string;
}
const AwsElasticsearchDomainServiceSoftwareOptions = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<AwsElasticsearchDomainServiceSoftwareOptions>;
export interface AwsElasticsearchDomainVPCOptions {
  AvailabilityZones?: string[];
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
  VPCId?: string;
}
const AwsElasticsearchDomainVPCOptions = /*@__PURE__*/ __L.at(
  __c25,
  7,
) as any as S.Schema<AwsElasticsearchDomainVPCOptions>;
export interface AwsElasticsearchDomainDetails {
  AccessPolicies?: string;
  DomainEndpointOptions?: AwsElasticsearchDomainDomainEndpointOptions;
  DomainId?: string;
  DomainName?: string;
  Endpoint?: string;
  Endpoints?: { [key: string]: string | undefined };
  ElasticsearchVersion?: string;
  ElasticsearchClusterConfig?: AwsElasticsearchDomainElasticsearchClusterConfigDetails;
  EncryptionAtRestOptions?: AwsElasticsearchDomainEncryptionAtRestOptions;
  LogPublishingOptions?: AwsElasticsearchDomainLogPublishingOptions;
  NodeToNodeEncryptionOptions?: AwsElasticsearchDomainNodeToNodeEncryptionOptions;
  ServiceSoftwareOptions?: AwsElasticsearchDomainServiceSoftwareOptions;
  VPCOptions?: AwsElasticsearchDomainVPCOptions;
}
const AwsElasticsearchDomainDetails = /*@__PURE__*/ __L.at(
  __c26,
  0,
) as any as S.Schema<AwsElasticsearchDomainDetails>;
export interface AwsS3BucketServerSideEncryptionByDefault {
  SSEAlgorithm?: string;
  KMSMasterKeyID?: string;
}
const AwsS3BucketServerSideEncryptionByDefault = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<AwsS3BucketServerSideEncryptionByDefault>;
export interface AwsS3BucketServerSideEncryptionRule {
  ApplyServerSideEncryptionByDefault?: AwsS3BucketServerSideEncryptionByDefault;
}
const AwsS3BucketServerSideEncryptionRule = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<AwsS3BucketServerSideEncryptionRule>;
export type AwsS3BucketServerSideEncryptionRules = AwsS3BucketServerSideEncryptionRule[];
const AwsS3BucketServerSideEncryptionRules = /*@__PURE__*/ __L.at(__c26, 3);
export interface AwsS3BucketServerSideEncryptionConfiguration {
  Rules?: AwsS3BucketServerSideEncryptionRule[];
}
const AwsS3BucketServerSideEncryptionConfiguration = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<AwsS3BucketServerSideEncryptionConfiguration>;
export interface AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails {
  DaysAfterInitiation?: number;
}
const AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails =
  /*@__PURE__*/ __L.at(
    __c26,
    5,
  ) as any as S.Schema<AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails>;
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails {
  Key?: string;
  Value?: string;
}
const AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails =
  /*@__PURE__*/ __L.at(
    __c26,
    6,
  ) as any as S.Schema<AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails>;
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails {
  Prefix?: string;
  Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails;
  Type?: string;
}
const AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails =
  /*@__PURE__*/ __L.at(
    __c26,
    7,
  ) as any as S.Schema<AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails>;
export type AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsList =
  AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[];
const AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsList =
  /*@__PURE__*/ __L.at(__c27, 0);
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails {
  Key?: string;
  Value?: string;
}
const AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails =
  AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails as any as S.Schema<AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails>;
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails {
  Operands?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[];
  Prefix?: string;
  Tag?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails;
  Type?: string;
}
const AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails = /*@__PURE__*/ __L.at(
  __c27,
  1,
) as any as S.Schema<AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails>;
export interface AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails {
  Predicate?: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails;
}
const AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails = /*@__PURE__*/ __L.at(
  __c27,
  2,
) as any as S.Schema<AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails>;
export interface AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails {
  Days?: number;
  StorageClass?: string;
}
const AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails =
  /*@__PURE__*/ __L.at(
    __c27,
    3,
  ) as any as S.Schema<AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails>;
export type AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList =
  AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails[];
const AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList =
  /*@__PURE__*/ __L.at(__c27, 4);
export interface AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails {
  Date?: string;
  Days?: number;
  StorageClass?: string;
}
const AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails = /*@__PURE__*/ __L.at(
  __c27,
  5,
) as any as S.Schema<AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails>;
export type AwsS3BucketBucketLifecycleConfigurationRulesTransitionsList =
  AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails[];
const AwsS3BucketBucketLifecycleConfigurationRulesTransitionsList = /*@__PURE__*/ __L.at(__c27, 6);
export interface AwsS3BucketBucketLifecycleConfigurationRulesDetails {
  AbortIncompleteMultipartUpload?: AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails;
  ExpirationDate?: string;
  ExpirationInDays?: number;
  ExpiredObjectDeleteMarker?: boolean;
  Filter?: AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails;
  ID?: string;
  NoncurrentVersionExpirationInDays?: number;
  NoncurrentVersionTransitions?: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails[];
  Prefix?: string;
  Status?: string;
  Transitions?: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails[];
}
const AwsS3BucketBucketLifecycleConfigurationRulesDetails = /*@__PURE__*/ __L.at(
  __c27,
  7,
) as any as S.Schema<AwsS3BucketBucketLifecycleConfigurationRulesDetails>;
export type AwsS3BucketBucketLifecycleConfigurationRulesList =
  AwsS3BucketBucketLifecycleConfigurationRulesDetails[];
const AwsS3BucketBucketLifecycleConfigurationRulesList = /*@__PURE__*/ __L.at(__c28, 0);
export interface AwsS3BucketBucketLifecycleConfigurationDetails {
  Rules?: AwsS3BucketBucketLifecycleConfigurationRulesDetails[];
}
const AwsS3BucketBucketLifecycleConfigurationDetails = /*@__PURE__*/ __L.at(
  __c28,
  1,
) as any as S.Schema<AwsS3BucketBucketLifecycleConfigurationDetails>;
export interface AwsS3AccountPublicAccessBlockDetails {
  BlockPublicAcls?: boolean;
  BlockPublicPolicy?: boolean;
  IgnorePublicAcls?: boolean;
  RestrictPublicBuckets?: boolean;
}
const AwsS3AccountPublicAccessBlockDetails = /*@__PURE__*/ __L.at(
  __c28,
  2,
) as any as S.Schema<AwsS3AccountPublicAccessBlockDetails>;
export interface AwsS3BucketLoggingConfiguration {
  DestinationBucketName?: string;
  LogFilePrefix?: string;
}
const AwsS3BucketLoggingConfiguration = /*@__PURE__*/ __L.at(
  __c28,
  3,
) as any as S.Schema<AwsS3BucketLoggingConfiguration>;
export interface AwsS3BucketWebsiteConfigurationRedirectTo {
  Hostname?: string;
  Protocol?: string;
}
const AwsS3BucketWebsiteConfigurationRedirectTo = /*@__PURE__*/ __L.at(
  __c28,
  4,
) as any as S.Schema<AwsS3BucketWebsiteConfigurationRedirectTo>;
export interface AwsS3BucketWebsiteConfigurationRoutingRuleCondition {
  HttpErrorCodeReturnedEquals?: string;
  KeyPrefixEquals?: string;
}
const AwsS3BucketWebsiteConfigurationRoutingRuleCondition = /*@__PURE__*/ __L.at(
  __c28,
  5,
) as any as S.Schema<AwsS3BucketWebsiteConfigurationRoutingRuleCondition>;
export interface AwsS3BucketWebsiteConfigurationRoutingRuleRedirect {
  Hostname?: string;
  HttpRedirectCode?: string;
  Protocol?: string;
  ReplaceKeyPrefixWith?: string;
  ReplaceKeyWith?: string;
}
const AwsS3BucketWebsiteConfigurationRoutingRuleRedirect = /*@__PURE__*/ __L.at(
  __c28,
  6,
) as any as S.Schema<AwsS3BucketWebsiteConfigurationRoutingRuleRedirect>;
export interface AwsS3BucketWebsiteConfigurationRoutingRule {
  Condition?: AwsS3BucketWebsiteConfigurationRoutingRuleCondition;
  Redirect?: AwsS3BucketWebsiteConfigurationRoutingRuleRedirect;
}
const AwsS3BucketWebsiteConfigurationRoutingRule = /*@__PURE__*/ __L.at(
  __c28,
  7,
) as any as S.Schema<AwsS3BucketWebsiteConfigurationRoutingRule>;
export type AwsS3BucketWebsiteConfigurationRoutingRules =
  AwsS3BucketWebsiteConfigurationRoutingRule[];
const AwsS3BucketWebsiteConfigurationRoutingRules = /*@__PURE__*/ __L.at(__c29, 0);
export interface AwsS3BucketWebsiteConfiguration {
  ErrorDocument?: string;
  IndexDocumentSuffix?: string;
  RedirectAllRequestsTo?: AwsS3BucketWebsiteConfigurationRedirectTo;
  RoutingRules?: AwsS3BucketWebsiteConfigurationRoutingRule[];
}
const AwsS3BucketWebsiteConfiguration = /*@__PURE__*/ __L.at(
  __c29,
  1,
) as any as S.Schema<AwsS3BucketWebsiteConfiguration>;
export type AwsS3BucketNotificationConfigurationEvents = string[];
const AwsS3BucketNotificationConfigurationEvents =
  AutomationRulesArnsList as any as S.Schema<AwsS3BucketNotificationConfigurationEvents>;
export type AwsS3BucketNotificationConfigurationS3KeyFilterRuleName =
  | "Prefix"
  | "Suffix"
  | (string & {});
const AwsS3BucketNotificationConfigurationS3KeyFilterRuleName = S.String;

export interface AwsS3BucketNotificationConfigurationS3KeyFilterRule {
  Name?: AwsS3BucketNotificationConfigurationS3KeyFilterRuleName;
  Value?: string;
}
const AwsS3BucketNotificationConfigurationS3KeyFilterRule = /*@__PURE__*/ __L.at(
  __c29,
  2,
) as any as S.Schema<AwsS3BucketNotificationConfigurationS3KeyFilterRule>;
export type AwsS3BucketNotificationConfigurationS3KeyFilterRules =
  AwsS3BucketNotificationConfigurationS3KeyFilterRule[];
const AwsS3BucketNotificationConfigurationS3KeyFilterRules = /*@__PURE__*/ __L.at(__c29, 3);
export interface AwsS3BucketNotificationConfigurationS3KeyFilter {
  FilterRules?: AwsS3BucketNotificationConfigurationS3KeyFilterRule[];
}
const AwsS3BucketNotificationConfigurationS3KeyFilter = /*@__PURE__*/ __L.at(
  __c29,
  4,
) as any as S.Schema<AwsS3BucketNotificationConfigurationS3KeyFilter>;
export interface AwsS3BucketNotificationConfigurationFilter {
  S3KeyFilter?: AwsS3BucketNotificationConfigurationS3KeyFilter;
}
const AwsS3BucketNotificationConfigurationFilter = /*@__PURE__*/ __L.at(
  __c29,
  5,
) as any as S.Schema<AwsS3BucketNotificationConfigurationFilter>;
export interface AwsS3BucketNotificationConfigurationDetail {
  Events?: string[];
  Filter?: AwsS3BucketNotificationConfigurationFilter;
  Destination?: string;
  Type?: string;
}
const AwsS3BucketNotificationConfigurationDetail = /*@__PURE__*/ __L.at(
  __c29,
  6,
) as any as S.Schema<AwsS3BucketNotificationConfigurationDetail>;
export type AwsS3BucketNotificationConfigurationDetails =
  AwsS3BucketNotificationConfigurationDetail[];
const AwsS3BucketNotificationConfigurationDetails = /*@__PURE__*/ __L.at(__c29, 7);
export interface AwsS3BucketNotificationConfiguration {
  Configurations?: AwsS3BucketNotificationConfigurationDetail[];
}
const AwsS3BucketNotificationConfiguration = /*@__PURE__*/ __L.at(
  __c30,
  0,
) as any as S.Schema<AwsS3BucketNotificationConfiguration>;
export interface AwsS3BucketBucketVersioningConfiguration {
  IsMfaDeleteEnabled?: boolean;
  Status?: string;
}
const AwsS3BucketBucketVersioningConfiguration = /*@__PURE__*/ __L.at(
  __c30,
  1,
) as any as S.Schema<AwsS3BucketBucketVersioningConfiguration>;
export interface AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails {
  Days?: number;
  Mode?: string;
  Years?: number;
}
const AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails = /*@__PURE__*/ __L.at(
  __c30,
  2,
) as any as S.Schema<AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails>;
export interface AwsS3BucketObjectLockConfigurationRuleDetails {
  DefaultRetention?: AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails;
}
const AwsS3BucketObjectLockConfigurationRuleDetails = /*@__PURE__*/ __L.at(
  __c30,
  3,
) as any as S.Schema<AwsS3BucketObjectLockConfigurationRuleDetails>;
export interface AwsS3BucketObjectLockConfiguration {
  ObjectLockEnabled?: string;
  Rule?: AwsS3BucketObjectLockConfigurationRuleDetails;
}
const AwsS3BucketObjectLockConfiguration = /*@__PURE__*/ __L.at(
  __c30,
  4,
) as any as S.Schema<AwsS3BucketObjectLockConfiguration>;
export interface AwsS3BucketDetails {
  OwnerId?: string;
  OwnerName?: string;
  OwnerAccountId?: string;
  CreatedAt?: string;
  ServerSideEncryptionConfiguration?: AwsS3BucketServerSideEncryptionConfiguration;
  BucketLifecycleConfiguration?: AwsS3BucketBucketLifecycleConfigurationDetails;
  PublicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails;
  AccessControlList?: string;
  BucketLoggingConfiguration?: AwsS3BucketLoggingConfiguration;
  BucketWebsiteConfiguration?: AwsS3BucketWebsiteConfiguration;
  BucketNotificationConfiguration?: AwsS3BucketNotificationConfiguration;
  BucketVersioningConfiguration?: AwsS3BucketBucketVersioningConfiguration;
  ObjectLockConfiguration?: AwsS3BucketObjectLockConfiguration;
  Name?: string;
}
const AwsS3BucketDetails = /*@__PURE__*/ __L.at(__c30, 5) as any as S.Schema<AwsS3BucketDetails>;
export interface AwsS3ObjectDetails {
  LastModified?: string;
  ETag?: string;
  VersionId?: string;
  ContentType?: string;
  ServerSideEncryption?: string;
  SSEKMSKeyId?: string;
}
const AwsS3ObjectDetails = /*@__PURE__*/ __L.at(__c30, 6) as any as S.Schema<AwsS3ObjectDetails>;
export interface AwsSecretsManagerSecretRotationRules {
  AutomaticallyAfterDays?: number;
}
const AwsSecretsManagerSecretRotationRules = /*@__PURE__*/ __L.at(
  __c30,
  7,
) as any as S.Schema<AwsSecretsManagerSecretRotationRules>;
export interface AwsSecretsManagerSecretDetails {
  RotationRules?: AwsSecretsManagerSecretRotationRules;
  RotationOccurredWithinFrequency?: boolean;
  KmsKeyId?: string;
  RotationEnabled?: boolean;
  RotationLambdaArn?: string;
  Deleted?: boolean;
  Name?: string;
  Description?: string;
}
const AwsSecretsManagerSecretDetails = /*@__PURE__*/ __L.at(
  __c31,
  0,
) as any as S.Schema<AwsSecretsManagerSecretDetails>;
export type AwsIamAccessKeyStatus = "Active" | "Inactive" | (string & {});
const AwsIamAccessKeyStatus = S.String;

export interface AwsIamAccessKeySessionContextAttributes {
  MfaAuthenticated?: boolean;
  CreationDate?: string;
}
const AwsIamAccessKeySessionContextAttributes = /*@__PURE__*/ __L.at(
  __c31,
  1,
) as any as S.Schema<AwsIamAccessKeySessionContextAttributes>;
export interface AwsIamAccessKeySessionContextSessionIssuer {
  Type?: string;
  PrincipalId?: string;
  Arn?: string;
  AccountId?: string;
  UserName?: string;
}
const AwsIamAccessKeySessionContextSessionIssuer = /*@__PURE__*/ __L.at(
  __c31,
  2,
) as any as S.Schema<AwsIamAccessKeySessionContextSessionIssuer>;
export interface AwsIamAccessKeySessionContext {
  Attributes?: AwsIamAccessKeySessionContextAttributes;
  SessionIssuer?: AwsIamAccessKeySessionContextSessionIssuer;
}
const AwsIamAccessKeySessionContext = /*@__PURE__*/ __L.at(
  __c31,
  3,
) as any as S.Schema<AwsIamAccessKeySessionContext>;
export interface AwsIamAccessKeyDetails {
  UserName?: string;
  Status?: AwsIamAccessKeyStatus;
  CreatedAt?: string;
  PrincipalId?: string;
  PrincipalType?: string;
  PrincipalName?: string;
  AccountId?: string;
  AccessKeyId?: string;
  SessionContext?: AwsIamAccessKeySessionContext;
}
const AwsIamAccessKeyDetails = /*@__PURE__*/ __L.at(
  __c31,
  4,
) as any as S.Schema<AwsIamAccessKeyDetails>;
export interface AwsIamAttachedManagedPolicy {
  PolicyName?: string;
  PolicyArn?: string;
}
const AwsIamAttachedManagedPolicy = /*@__PURE__*/ __L.at(
  __c31,
  5,
) as any as S.Schema<AwsIamAttachedManagedPolicy>;
export type AwsIamAttachedManagedPolicyList = AwsIamAttachedManagedPolicy[];
const AwsIamAttachedManagedPolicyList = /*@__PURE__*/ __L.at(__c31, 6);
export interface AwsIamPermissionsBoundary {
  PermissionsBoundaryArn?: string;
  PermissionsBoundaryType?: string;
}
const AwsIamPermissionsBoundary = /*@__PURE__*/ __L.at(
  __c31,
  7,
) as any as S.Schema<AwsIamPermissionsBoundary>;
export interface AwsIamUserPolicy {
  PolicyName?: string;
}
const AwsIamUserPolicy = /*@__PURE__*/ __L.at(__c32, 0) as any as S.Schema<AwsIamUserPolicy>;
export type AwsIamUserPolicyList = AwsIamUserPolicy[];
const AwsIamUserPolicyList = /*@__PURE__*/ __L.at(__c32, 1);
export interface AwsIamUserDetails {
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[];
  CreateDate?: string;
  GroupList?: string[];
  Path?: string;
  PermissionsBoundary?: AwsIamPermissionsBoundary;
  UserId?: string;
  UserName?: string;
  UserPolicyList?: AwsIamUserPolicy[];
}
const AwsIamUserDetails = /*@__PURE__*/ __L.at(__c32, 2) as any as S.Schema<AwsIamUserDetails>;
export interface AwsIamPolicyVersion {
  VersionId?: string;
  IsDefaultVersion?: boolean;
  CreateDate?: string;
}
const AwsIamPolicyVersion = /*@__PURE__*/ __L.at(__c32, 3) as any as S.Schema<AwsIamPolicyVersion>;
export type AwsIamPolicyVersionList = AwsIamPolicyVersion[];
const AwsIamPolicyVersionList = /*@__PURE__*/ __L.at(__c32, 4);
export interface AwsIamPolicyDetails {
  AttachmentCount?: number;
  CreateDate?: string;
  DefaultVersionId?: string;
  Description?: string;
  IsAttachable?: boolean;
  Path?: string;
  PermissionsBoundaryUsageCount?: number;
  PolicyId?: string;
  PolicyName?: string;
  PolicyVersionList?: AwsIamPolicyVersion[];
  UpdateDate?: string;
}
const AwsIamPolicyDetails = /*@__PURE__*/ __L.at(__c32, 5) as any as S.Schema<AwsIamPolicyDetails>;
export interface AwsApiGatewayV2RouteSettings {
  DetailedMetricsEnabled?: boolean;
  LoggingLevel?: string;
  DataTraceEnabled?: boolean;
  ThrottlingBurstLimit?: number;
  ThrottlingRateLimit?: number;
}
const AwsApiGatewayV2RouteSettings = /*@__PURE__*/ __L.at(
  __c32,
  6,
) as any as S.Schema<AwsApiGatewayV2RouteSettings>;
export interface AwsApiGatewayAccessLogSettings {
  Format?: string;
  DestinationArn?: string;
}
const AwsApiGatewayAccessLogSettings = /*@__PURE__*/ __L.at(
  __c32,
  7,
) as any as S.Schema<AwsApiGatewayAccessLogSettings>;
export interface AwsApiGatewayV2StageDetails {
  ClientCertificateId?: string;
  CreatedDate?: string;
  Description?: string;
  DefaultRouteSettings?: AwsApiGatewayV2RouteSettings;
  DeploymentId?: string;
  LastUpdatedDate?: string;
  RouteSettings?: AwsApiGatewayV2RouteSettings;
  StageName?: string;
  StageVariables?: { [key: string]: string | undefined };
  AccessLogSettings?: AwsApiGatewayAccessLogSettings;
  AutoDeploy?: boolean;
  LastDeploymentStatusMessage?: string;
  ApiGatewayManaged?: boolean;
}
const AwsApiGatewayV2StageDetails = /*@__PURE__*/ __L.at(
  __c33,
  0,
) as any as S.Schema<AwsApiGatewayV2StageDetails>;
export interface AwsCorsConfiguration {
  AllowOrigins?: string[];
  AllowCredentials?: boolean;
  ExposeHeaders?: string[];
  MaxAge?: number;
  AllowMethods?: string[];
  AllowHeaders?: string[];
}
const AwsCorsConfiguration = /*@__PURE__*/ __L.at(
  __c33,
  1,
) as any as S.Schema<AwsCorsConfiguration>;
export interface AwsApiGatewayV2ApiDetails {
  ApiEndpoint?: string;
  ApiId?: string;
  ApiKeySelectionExpression?: string;
  CreatedDate?: string;
  Description?: string;
  Version?: string;
  Name?: string;
  ProtocolType?: string;
  RouteSelectionExpression?: string;
  CorsConfiguration?: AwsCorsConfiguration;
}
const AwsApiGatewayV2ApiDetails = /*@__PURE__*/ __L.at(
  __c33,
  2,
) as any as S.Schema<AwsApiGatewayV2ApiDetails>;
export interface AwsDynamoDbTableAttributeDefinition {
  AttributeName?: string;
  AttributeType?: string;
}
const AwsDynamoDbTableAttributeDefinition = /*@__PURE__*/ __L.at(
  __c33,
  3,
) as any as S.Schema<AwsDynamoDbTableAttributeDefinition>;
export type AwsDynamoDbTableAttributeDefinitionList = AwsDynamoDbTableAttributeDefinition[];
const AwsDynamoDbTableAttributeDefinitionList = /*@__PURE__*/ __L.at(__c33, 4);
export interface AwsDynamoDbTableBillingModeSummary {
  BillingMode?: string;
  LastUpdateToPayPerRequestDateTime?: string;
}
const AwsDynamoDbTableBillingModeSummary = /*@__PURE__*/ __L.at(
  __c33,
  5,
) as any as S.Schema<AwsDynamoDbTableBillingModeSummary>;
export type SizeBytes = number;
export interface AwsDynamoDbTableKeySchema {
  AttributeName?: string;
  KeyType?: string;
}
const AwsDynamoDbTableKeySchema = /*@__PURE__*/ __L.at(
  __c33,
  6,
) as any as S.Schema<AwsDynamoDbTableKeySchema>;
export type AwsDynamoDbTableKeySchemaList = AwsDynamoDbTableKeySchema[];
const AwsDynamoDbTableKeySchemaList = /*@__PURE__*/ __L.at(__c33, 7);
export interface AwsDynamoDbTableProjection {
  NonKeyAttributes?: string[];
  ProjectionType?: string;
}
const AwsDynamoDbTableProjection = /*@__PURE__*/ __L.at(
  __c34,
  0,
) as any as S.Schema<AwsDynamoDbTableProjection>;
export interface AwsDynamoDbTableProvisionedThroughput {
  LastDecreaseDateTime?: string;
  LastIncreaseDateTime?: string;
  NumberOfDecreasesToday?: number;
  ReadCapacityUnits?: number;
  WriteCapacityUnits?: number;
}
const AwsDynamoDbTableProvisionedThroughput = /*@__PURE__*/ __L.at(
  __c34,
  1,
) as any as S.Schema<AwsDynamoDbTableProvisionedThroughput>;
export interface AwsDynamoDbTableGlobalSecondaryIndex {
  Backfilling?: boolean;
  IndexArn?: string;
  IndexName?: string;
  IndexSizeBytes?: number;
  IndexStatus?: string;
  ItemCount?: number;
  KeySchema?: AwsDynamoDbTableKeySchema[];
  Projection?: AwsDynamoDbTableProjection;
  ProvisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;
}
const AwsDynamoDbTableGlobalSecondaryIndex = /*@__PURE__*/ __L.at(
  __c34,
  2,
) as any as S.Schema<AwsDynamoDbTableGlobalSecondaryIndex>;
export type AwsDynamoDbTableGlobalSecondaryIndexList = AwsDynamoDbTableGlobalSecondaryIndex[];
const AwsDynamoDbTableGlobalSecondaryIndexList = /*@__PURE__*/ __L.at(__c34, 3);
export interface AwsDynamoDbTableLocalSecondaryIndex {
  IndexArn?: string;
  IndexName?: string;
  KeySchema?: AwsDynamoDbTableKeySchema[];
  Projection?: AwsDynamoDbTableProjection;
}
const AwsDynamoDbTableLocalSecondaryIndex = /*@__PURE__*/ __L.at(
  __c34,
  4,
) as any as S.Schema<AwsDynamoDbTableLocalSecondaryIndex>;
export type AwsDynamoDbTableLocalSecondaryIndexList = AwsDynamoDbTableLocalSecondaryIndex[];
const AwsDynamoDbTableLocalSecondaryIndexList = /*@__PURE__*/ __L.at(__c34, 5);
export interface AwsDynamoDbTableProvisionedThroughputOverride {
  ReadCapacityUnits?: number;
}
const AwsDynamoDbTableProvisionedThroughputOverride = /*@__PURE__*/ __L.at(
  __c34,
  6,
) as any as S.Schema<AwsDynamoDbTableProvisionedThroughputOverride>;
export interface AwsDynamoDbTableReplicaGlobalSecondaryIndex {
  IndexName?: string;
  ProvisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;
}
const AwsDynamoDbTableReplicaGlobalSecondaryIndex = /*@__PURE__*/ __L.at(
  __c34,
  7,
) as any as S.Schema<AwsDynamoDbTableReplicaGlobalSecondaryIndex>;
export type AwsDynamoDbTableReplicaGlobalSecondaryIndexList =
  AwsDynamoDbTableReplicaGlobalSecondaryIndex[];
const AwsDynamoDbTableReplicaGlobalSecondaryIndexList = /*@__PURE__*/ __L.at(__c35, 0);
export interface AwsDynamoDbTableReplica {
  GlobalSecondaryIndexes?: AwsDynamoDbTableReplicaGlobalSecondaryIndex[];
  KmsMasterKeyId?: string;
  ProvisionedThroughputOverride?: AwsDynamoDbTableProvisionedThroughputOverride;
  RegionName?: string;
  ReplicaStatus?: string;
  ReplicaStatusDescription?: string;
}
const AwsDynamoDbTableReplica = /*@__PURE__*/ __L.at(
  __c35,
  1,
) as any as S.Schema<AwsDynamoDbTableReplica>;
export type AwsDynamoDbTableReplicaList = AwsDynamoDbTableReplica[];
const AwsDynamoDbTableReplicaList = /*@__PURE__*/ __L.at(__c35, 2);
export interface AwsDynamoDbTableRestoreSummary {
  SourceBackupArn?: string;
  SourceTableArn?: string;
  RestoreDateTime?: string;
  RestoreInProgress?: boolean;
}
const AwsDynamoDbTableRestoreSummary = /*@__PURE__*/ __L.at(
  __c35,
  3,
) as any as S.Schema<AwsDynamoDbTableRestoreSummary>;
export interface AwsDynamoDbTableSseDescription {
  InaccessibleEncryptionDateTime?: string;
  Status?: string;
  SseType?: string;
  KmsMasterKeyArn?: string;
}
const AwsDynamoDbTableSseDescription = /*@__PURE__*/ __L.at(
  __c35,
  4,
) as any as S.Schema<AwsDynamoDbTableSseDescription>;
export interface AwsDynamoDbTableStreamSpecification {
  StreamEnabled?: boolean;
  StreamViewType?: string;
}
const AwsDynamoDbTableStreamSpecification = /*@__PURE__*/ __L.at(
  __c35,
  5,
) as any as S.Schema<AwsDynamoDbTableStreamSpecification>;
export interface AwsDynamoDbTableDetails {
  AttributeDefinitions?: AwsDynamoDbTableAttributeDefinition[];
  BillingModeSummary?: AwsDynamoDbTableBillingModeSummary;
  CreationDateTime?: string;
  GlobalSecondaryIndexes?: AwsDynamoDbTableGlobalSecondaryIndex[];
  GlobalTableVersion?: string;
  ItemCount?: number;
  KeySchema?: AwsDynamoDbTableKeySchema[];
  LatestStreamArn?: string;
  LatestStreamLabel?: string;
  LocalSecondaryIndexes?: AwsDynamoDbTableLocalSecondaryIndex[];
  ProvisionedThroughput?: AwsDynamoDbTableProvisionedThroughput;
  Replicas?: AwsDynamoDbTableReplica[];
  RestoreSummary?: AwsDynamoDbTableRestoreSummary;
  SseDescription?: AwsDynamoDbTableSseDescription;
  StreamSpecification?: AwsDynamoDbTableStreamSpecification;
  TableId?: string;
  TableName?: string;
  TableSizeBytes?: number;
  TableStatus?: string;
  DeletionProtectionEnabled?: boolean;
}
const AwsDynamoDbTableDetails = /*@__PURE__*/ __L.at(
  __c35,
  6,
) as any as S.Schema<AwsDynamoDbTableDetails>;
export interface AwsApiGatewayMethodSettings {
  MetricsEnabled?: boolean;
  LoggingLevel?: string;
  DataTraceEnabled?: boolean;
  ThrottlingBurstLimit?: number;
  ThrottlingRateLimit?: number;
  CachingEnabled?: boolean;
  CacheTtlInSeconds?: number;
  CacheDataEncrypted?: boolean;
  RequireAuthorizationForCacheControl?: boolean;
  UnauthorizedCacheControlHeaderStrategy?: string;
  HttpMethod?: string;
  ResourcePath?: string;
}
const AwsApiGatewayMethodSettings = /*@__PURE__*/ __L.at(
  __c35,
  7,
) as any as S.Schema<AwsApiGatewayMethodSettings>;
export type AwsApiGatewayMethodSettingsList = AwsApiGatewayMethodSettings[];
const AwsApiGatewayMethodSettingsList = /*@__PURE__*/ __L.at(__c36, 0);
export interface AwsApiGatewayCanarySettings {
  PercentTraffic?: number;
  DeploymentId?: string;
  StageVariableOverrides?: { [key: string]: string | undefined };
  UseStageCache?: boolean;
}
const AwsApiGatewayCanarySettings = /*@__PURE__*/ __L.at(
  __c36,
  1,
) as any as S.Schema<AwsApiGatewayCanarySettings>;
export interface AwsApiGatewayStageDetails {
  DeploymentId?: string;
  ClientCertificateId?: string;
  StageName?: string;
  Description?: string;
  CacheClusterEnabled?: boolean;
  CacheClusterSize?: string;
  CacheClusterStatus?: string;
  MethodSettings?: AwsApiGatewayMethodSettings[];
  Variables?: { [key: string]: string | undefined };
  DocumentationVersion?: string;
  AccessLogSettings?: AwsApiGatewayAccessLogSettings;
  CanarySettings?: AwsApiGatewayCanarySettings;
  TracingEnabled?: boolean;
  CreatedDate?: string;
  LastUpdatedDate?: string;
  WebAclArn?: string;
}
const AwsApiGatewayStageDetails = /*@__PURE__*/ __L.at(
  __c36,
  2,
) as any as S.Schema<AwsApiGatewayStageDetails>;
export interface AwsApiGatewayEndpointConfiguration {
  Types?: string[];
}
const AwsApiGatewayEndpointConfiguration = /*@__PURE__*/ __L.at(
  __c36,
  3,
) as any as S.Schema<AwsApiGatewayEndpointConfiguration>;
export interface AwsApiGatewayRestApiDetails {
  Id?: string;
  Name?: string;
  Description?: string;
  CreatedDate?: string;
  Version?: string;
  BinaryMediaTypes?: string[];
  MinimumCompressionSize?: number;
  ApiKeySource?: string;
  EndpointConfiguration?: AwsApiGatewayEndpointConfiguration;
}
const AwsApiGatewayRestApiDetails = /*@__PURE__*/ __L.at(
  __c36,
  4,
) as any as S.Schema<AwsApiGatewayRestApiDetails>;
export interface AwsCloudTrailTrailDetails {
  CloudWatchLogsLogGroupArn?: string;
  CloudWatchLogsRoleArn?: string;
  HasCustomEventSelectors?: boolean;
  HomeRegion?: string;
  IncludeGlobalServiceEvents?: boolean;
  IsMultiRegionTrail?: boolean;
  IsOrganizationTrail?: boolean;
  KmsKeyId?: string;
  LogFileValidationEnabled?: boolean;
  Name?: string;
  S3BucketName?: string;
  S3KeyPrefix?: string;
  SnsTopicArn?: string;
  SnsTopicName?: string;
  TrailArn?: string;
}
const AwsCloudTrailTrailDetails = /*@__PURE__*/ __L.at(
  __c36,
  5,
) as any as S.Schema<AwsCloudTrailTrailDetails>;
export interface AwsSsmComplianceSummary {
  Status?: string;
  CompliantCriticalCount?: number;
  CompliantHighCount?: number;
  CompliantMediumCount?: number;
  ExecutionType?: string;
  NonCompliantCriticalCount?: number;
  CompliantInformationalCount?: number;
  NonCompliantInformationalCount?: number;
  CompliantUnspecifiedCount?: number;
  NonCompliantLowCount?: number;
  NonCompliantHighCount?: number;
  CompliantLowCount?: number;
  ComplianceType?: string;
  PatchBaselineId?: string;
  OverallSeverity?: string;
  NonCompliantMediumCount?: number;
  NonCompliantUnspecifiedCount?: number;
  PatchGroup?: string;
}
const AwsSsmComplianceSummary = /*@__PURE__*/ __L.at(
  __c36,
  6,
) as any as S.Schema<AwsSsmComplianceSummary>;
export interface AwsSsmPatch {
  ComplianceSummary?: AwsSsmComplianceSummary;
}
const AwsSsmPatch = /*@__PURE__*/ __L.at(__c36, 7) as any as S.Schema<AwsSsmPatch>;
export interface AwsSsmPatchComplianceDetails {
  Patch?: AwsSsmPatch;
}
const AwsSsmPatchComplianceDetails = /*@__PURE__*/ __L.at(
  __c37,
  0,
) as any as S.Schema<AwsSsmPatchComplianceDetails>;
export interface AwsCertificateManagerCertificateResourceRecord {
  Name?: string;
  Type?: string;
  Value?: string;
}
const AwsCertificateManagerCertificateResourceRecord = /*@__PURE__*/ __L.at(
  __c37,
  1,
) as any as S.Schema<AwsCertificateManagerCertificateResourceRecord>;
export interface AwsCertificateManagerCertificateDomainValidationOption {
  DomainName?: string;
  ResourceRecord?: AwsCertificateManagerCertificateResourceRecord;
  ValidationDomain?: string;
  ValidationEmails?: string[];
  ValidationMethod?: string;
  ValidationStatus?: string;
}
const AwsCertificateManagerCertificateDomainValidationOption = /*@__PURE__*/ __L.at(
  __c37,
  2,
) as any as S.Schema<AwsCertificateManagerCertificateDomainValidationOption>;
export type AwsCertificateManagerCertificateDomainValidationOptions =
  AwsCertificateManagerCertificateDomainValidationOption[];
const AwsCertificateManagerCertificateDomainValidationOptions = /*@__PURE__*/ __L.at(__c37, 3);
export interface AwsCertificateManagerCertificateExtendedKeyUsage {
  Name?: string;
  OId?: string;
}
const AwsCertificateManagerCertificateExtendedKeyUsage = /*@__PURE__*/ __L.at(
  __c37,
  4,
) as any as S.Schema<AwsCertificateManagerCertificateExtendedKeyUsage>;
export type AwsCertificateManagerCertificateExtendedKeyUsages =
  AwsCertificateManagerCertificateExtendedKeyUsage[];
const AwsCertificateManagerCertificateExtendedKeyUsages = /*@__PURE__*/ __L.at(__c37, 5);
export interface AwsCertificateManagerCertificateKeyUsage {
  Name?: string;
}
const AwsCertificateManagerCertificateKeyUsage = /*@__PURE__*/ __L.at(
  __c37,
  6,
) as any as S.Schema<AwsCertificateManagerCertificateKeyUsage>;
export type AwsCertificateManagerCertificateKeyUsages = AwsCertificateManagerCertificateKeyUsage[];
const AwsCertificateManagerCertificateKeyUsages = /*@__PURE__*/ __L.at(__c37, 7);
export interface AwsCertificateManagerCertificateOptions {
  CertificateTransparencyLoggingPreference?: string;
}
const AwsCertificateManagerCertificateOptions = /*@__PURE__*/ __L.at(
  __c38,
  0,
) as any as S.Schema<AwsCertificateManagerCertificateOptions>;
export interface AwsCertificateManagerCertificateRenewalSummary {
  DomainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[];
  RenewalStatus?: string;
  RenewalStatusReason?: string;
  UpdatedAt?: string;
}
const AwsCertificateManagerCertificateRenewalSummary = /*@__PURE__*/ __L.at(
  __c38,
  1,
) as any as S.Schema<AwsCertificateManagerCertificateRenewalSummary>;
export interface AwsCertificateManagerCertificateDetails {
  CertificateAuthorityArn?: string;
  CreatedAt?: string;
  DomainName?: string;
  DomainValidationOptions?: AwsCertificateManagerCertificateDomainValidationOption[];
  ExtendedKeyUsages?: AwsCertificateManagerCertificateExtendedKeyUsage[];
  FailureReason?: string;
  ImportedAt?: string;
  InUseBy?: string[];
  IssuedAt?: string;
  Issuer?: string;
  KeyAlgorithm?: string;
  KeyUsages?: AwsCertificateManagerCertificateKeyUsage[];
  NotAfter?: string;
  NotBefore?: string;
  Options?: AwsCertificateManagerCertificateOptions;
  RenewalEligibility?: string;
  RenewalSummary?: AwsCertificateManagerCertificateRenewalSummary;
  Serial?: string;
  SignatureAlgorithm?: string;
  Status?: string;
  Subject?: string;
  SubjectAlternativeNames?: string[];
  Type?: string;
}
const AwsCertificateManagerCertificateDetails = /*@__PURE__*/ __L.at(
  __c38,
  2,
) as any as S.Schema<AwsCertificateManagerCertificateDetails>;
export interface AwsRedshiftClusterClusterNode {
  NodeRole?: string;
  PrivateIpAddress?: string;
  PublicIpAddress?: string;
}
const AwsRedshiftClusterClusterNode = /*@__PURE__*/ __L.at(
  __c38,
  3,
) as any as S.Schema<AwsRedshiftClusterClusterNode>;
export type AwsRedshiftClusterClusterNodes = AwsRedshiftClusterClusterNode[];
const AwsRedshiftClusterClusterNodes = /*@__PURE__*/ __L.at(__c38, 4);
export interface AwsRedshiftClusterClusterParameterStatus {
  ParameterName?: string;
  ParameterApplyStatus?: string;
  ParameterApplyErrorDescription?: string;
}
const AwsRedshiftClusterClusterParameterStatus = /*@__PURE__*/ __L.at(
  __c38,
  5,
) as any as S.Schema<AwsRedshiftClusterClusterParameterStatus>;
export type AwsRedshiftClusterClusterParameterStatusList =
  AwsRedshiftClusterClusterParameterStatus[];
const AwsRedshiftClusterClusterParameterStatusList = /*@__PURE__*/ __L.at(__c38, 6);
export interface AwsRedshiftClusterClusterParameterGroup {
  ClusterParameterStatusList?: AwsRedshiftClusterClusterParameterStatus[];
  ParameterApplyStatus?: string;
  ParameterGroupName?: string;
}
const AwsRedshiftClusterClusterParameterGroup = /*@__PURE__*/ __L.at(
  __c38,
  7,
) as any as S.Schema<AwsRedshiftClusterClusterParameterGroup>;
export type AwsRedshiftClusterClusterParameterGroups = AwsRedshiftClusterClusterParameterGroup[];
const AwsRedshiftClusterClusterParameterGroups = /*@__PURE__*/ __L.at(__c39, 0);
export interface AwsRedshiftClusterClusterSecurityGroup {
  ClusterSecurityGroupName?: string;
  Status?: string;
}
const AwsRedshiftClusterClusterSecurityGroup = /*@__PURE__*/ __L.at(
  __c39,
  1,
) as any as S.Schema<AwsRedshiftClusterClusterSecurityGroup>;
export type AwsRedshiftClusterClusterSecurityGroups = AwsRedshiftClusterClusterSecurityGroup[];
const AwsRedshiftClusterClusterSecurityGroups = /*@__PURE__*/ __L.at(__c39, 2);
export interface AwsRedshiftClusterClusterSnapshotCopyStatus {
  DestinationRegion?: string;
  ManualSnapshotRetentionPeriod?: number;
  RetentionPeriod?: number;
  SnapshotCopyGrantName?: string;
}
const AwsRedshiftClusterClusterSnapshotCopyStatus = /*@__PURE__*/ __L.at(
  __c39,
  3,
) as any as S.Schema<AwsRedshiftClusterClusterSnapshotCopyStatus>;
export interface AwsRedshiftClusterDeferredMaintenanceWindow {
  DeferMaintenanceEndTime?: string;
  DeferMaintenanceIdentifier?: string;
  DeferMaintenanceStartTime?: string;
}
const AwsRedshiftClusterDeferredMaintenanceWindow = /*@__PURE__*/ __L.at(
  __c39,
  4,
) as any as S.Schema<AwsRedshiftClusterDeferredMaintenanceWindow>;
export type AwsRedshiftClusterDeferredMaintenanceWindows =
  AwsRedshiftClusterDeferredMaintenanceWindow[];
const AwsRedshiftClusterDeferredMaintenanceWindows = /*@__PURE__*/ __L.at(__c39, 5);
export interface AwsRedshiftClusterElasticIpStatus {
  ElasticIp?: string;
  Status?: string;
}
const AwsRedshiftClusterElasticIpStatus = /*@__PURE__*/ __L.at(
  __c39,
  6,
) as any as S.Schema<AwsRedshiftClusterElasticIpStatus>;
export interface AwsRedshiftClusterEndpoint {
  Address?: string;
  Port?: number;
}
const AwsRedshiftClusterEndpoint = /*@__PURE__*/ __L.at(
  __c39,
  7,
) as any as S.Schema<AwsRedshiftClusterEndpoint>;
export interface AwsRedshiftClusterHsmStatus {
  HsmClientCertificateIdentifier?: string;
  HsmConfigurationIdentifier?: string;
  Status?: string;
}
const AwsRedshiftClusterHsmStatus = /*@__PURE__*/ __L.at(
  __c40,
  0,
) as any as S.Schema<AwsRedshiftClusterHsmStatus>;
export interface AwsRedshiftClusterIamRole {
  ApplyStatus?: string;
  IamRoleArn?: string;
}
const AwsRedshiftClusterIamRole = /*@__PURE__*/ __L.at(
  __c40,
  1,
) as any as S.Schema<AwsRedshiftClusterIamRole>;
export type AwsRedshiftClusterIamRoles = AwsRedshiftClusterIamRole[];
const AwsRedshiftClusterIamRoles = /*@__PURE__*/ __L.at(__c40, 2);
export interface AwsRedshiftClusterPendingModifiedValues {
  AutomatedSnapshotRetentionPeriod?: number;
  ClusterIdentifier?: string;
  ClusterType?: string;
  ClusterVersion?: string;
  EncryptionType?: string;
  EnhancedVpcRouting?: boolean;
  MaintenanceTrackName?: string;
  MasterUserPassword?: string;
  NodeType?: string;
  NumberOfNodes?: number;
  PubliclyAccessible?: boolean;
}
const AwsRedshiftClusterPendingModifiedValues = /*@__PURE__*/ __L.at(
  __c40,
  3,
) as any as S.Schema<AwsRedshiftClusterPendingModifiedValues>;
export interface AwsRedshiftClusterResizeInfo {
  AllowCancelResize?: boolean;
  ResizeType?: string;
}
const AwsRedshiftClusterResizeInfo = /*@__PURE__*/ __L.at(
  __c40,
  4,
) as any as S.Schema<AwsRedshiftClusterResizeInfo>;
export interface AwsRedshiftClusterRestoreStatus {
  CurrentRestoreRateInMegaBytesPerSecond?: number;
  ElapsedTimeInSeconds?: number;
  EstimatedTimeToCompletionInSeconds?: number;
  ProgressInMegaBytes?: number;
  SnapshotSizeInMegaBytes?: number;
  Status?: string;
}
const AwsRedshiftClusterRestoreStatus = /*@__PURE__*/ __L.at(
  __c40,
  5,
) as any as S.Schema<AwsRedshiftClusterRestoreStatus>;
export interface AwsRedshiftClusterVpcSecurityGroup {
  Status?: string;
  VpcSecurityGroupId?: string;
}
const AwsRedshiftClusterVpcSecurityGroup = /*@__PURE__*/ __L.at(
  __c40,
  6,
) as any as S.Schema<AwsRedshiftClusterVpcSecurityGroup>;
export type AwsRedshiftClusterVpcSecurityGroups = AwsRedshiftClusterVpcSecurityGroup[];
const AwsRedshiftClusterVpcSecurityGroups = /*@__PURE__*/ __L.at(__c40, 7);
export interface AwsRedshiftClusterLoggingStatus {
  BucketName?: string;
  LastFailureMessage?: string;
  LastFailureTime?: string;
  LastSuccessfulDeliveryTime?: string;
  LoggingEnabled?: boolean;
  S3KeyPrefix?: string;
}
const AwsRedshiftClusterLoggingStatus = /*@__PURE__*/ __L.at(
  __c41,
  0,
) as any as S.Schema<AwsRedshiftClusterLoggingStatus>;
export interface AwsRedshiftClusterDetails {
  AllowVersionUpgrade?: boolean;
  AutomatedSnapshotRetentionPeriod?: number;
  AvailabilityZone?: string;
  ClusterAvailabilityStatus?: string;
  ClusterCreateTime?: string;
  ClusterIdentifier?: string;
  ClusterNodes?: AwsRedshiftClusterClusterNode[];
  ClusterParameterGroups?: AwsRedshiftClusterClusterParameterGroup[];
  ClusterPublicKey?: string;
  ClusterRevisionNumber?: string;
  ClusterSecurityGroups?: AwsRedshiftClusterClusterSecurityGroup[];
  ClusterSnapshotCopyStatus?: AwsRedshiftClusterClusterSnapshotCopyStatus;
  ClusterStatus?: string;
  ClusterSubnetGroupName?: string;
  ClusterVersion?: string;
  DBName?: string;
  DeferredMaintenanceWindows?: AwsRedshiftClusterDeferredMaintenanceWindow[];
  ElasticIpStatus?: AwsRedshiftClusterElasticIpStatus;
  ElasticResizeNumberOfNodeOptions?: string;
  Encrypted?: boolean;
  Endpoint?: AwsRedshiftClusterEndpoint;
  EnhancedVpcRouting?: boolean;
  ExpectedNextSnapshotScheduleTime?: string;
  ExpectedNextSnapshotScheduleTimeStatus?: string;
  HsmStatus?: AwsRedshiftClusterHsmStatus;
  IamRoles?: AwsRedshiftClusterIamRole[];
  KmsKeyId?: string;
  MaintenanceTrackName?: string;
  ManualSnapshotRetentionPeriod?: number;
  MasterUsername?: string;
  NextMaintenanceWindowStartTime?: string;
  NodeType?: string;
  NumberOfNodes?: number;
  PendingActions?: string[];
  PendingModifiedValues?: AwsRedshiftClusterPendingModifiedValues;
  PreferredMaintenanceWindow?: string;
  PubliclyAccessible?: boolean;
  ResizeInfo?: AwsRedshiftClusterResizeInfo;
  RestoreStatus?: AwsRedshiftClusterRestoreStatus;
  SnapshotScheduleIdentifier?: string;
  SnapshotScheduleState?: string;
  VpcId?: string;
  VpcSecurityGroups?: AwsRedshiftClusterVpcSecurityGroup[];
  LoggingStatus?: AwsRedshiftClusterLoggingStatus;
}
const AwsRedshiftClusterDetails = /*@__PURE__*/ __L.at(
  __c41,
  1,
) as any as S.Schema<AwsRedshiftClusterDetails>;
export interface AwsElbLoadBalancerBackendServerDescription {
  InstancePort?: number;
  PolicyNames?: string[];
}
const AwsElbLoadBalancerBackendServerDescription = /*@__PURE__*/ __L.at(
  __c41,
  2,
) as any as S.Schema<AwsElbLoadBalancerBackendServerDescription>;
export type AwsElbLoadBalancerBackendServerDescriptions =
  AwsElbLoadBalancerBackendServerDescription[];
const AwsElbLoadBalancerBackendServerDescriptions = /*@__PURE__*/ __L.at(__c41, 3);
export interface AwsElbLoadBalancerHealthCheck {
  HealthyThreshold?: number;
  Interval?: number;
  Target?: string;
  Timeout?: number;
  UnhealthyThreshold?: number;
}
const AwsElbLoadBalancerHealthCheck = /*@__PURE__*/ __L.at(
  __c41,
  4,
) as any as S.Schema<AwsElbLoadBalancerHealthCheck>;
export interface AwsElbLoadBalancerInstance {
  InstanceId?: string;
}
const AwsElbLoadBalancerInstance = /*@__PURE__*/ __L.at(
  __c41,
  5,
) as any as S.Schema<AwsElbLoadBalancerInstance>;
export type AwsElbLoadBalancerInstances = AwsElbLoadBalancerInstance[];
const AwsElbLoadBalancerInstances = /*@__PURE__*/ __L.at(__c41, 6);
export interface AwsElbLoadBalancerListener {
  InstancePort?: number;
  InstanceProtocol?: string;
  LoadBalancerPort?: number;
  Protocol?: string;
  SslCertificateId?: string;
}
const AwsElbLoadBalancerListener = /*@__PURE__*/ __L.at(
  __c41,
  7,
) as any as S.Schema<AwsElbLoadBalancerListener>;
export interface AwsElbLoadBalancerListenerDescription {
  Listener?: AwsElbLoadBalancerListener;
  PolicyNames?: string[];
}
const AwsElbLoadBalancerListenerDescription = /*@__PURE__*/ __L.at(
  __c42,
  0,
) as any as S.Schema<AwsElbLoadBalancerListenerDescription>;
export type AwsElbLoadBalancerListenerDescriptions = AwsElbLoadBalancerListenerDescription[];
const AwsElbLoadBalancerListenerDescriptions = /*@__PURE__*/ __L.at(__c42, 1);
export interface AwsElbLoadBalancerAccessLog {
  EmitInterval?: number;
  Enabled?: boolean;
  S3BucketName?: string;
  S3BucketPrefix?: string;
}
const AwsElbLoadBalancerAccessLog = /*@__PURE__*/ __L.at(
  __c42,
  2,
) as any as S.Schema<AwsElbLoadBalancerAccessLog>;
export interface AwsElbLoadBalancerConnectionDraining {
  Enabled?: boolean;
  Timeout?: number;
}
const AwsElbLoadBalancerConnectionDraining = /*@__PURE__*/ __L.at(
  __c42,
  3,
) as any as S.Schema<AwsElbLoadBalancerConnectionDraining>;
export interface AwsElbLoadBalancerConnectionSettings {
  IdleTimeout?: number;
}
const AwsElbLoadBalancerConnectionSettings = /*@__PURE__*/ __L.at(
  __c42,
  4,
) as any as S.Schema<AwsElbLoadBalancerConnectionSettings>;
export interface AwsElbLoadBalancerCrossZoneLoadBalancing {
  Enabled?: boolean;
}
const AwsElbLoadBalancerCrossZoneLoadBalancing =
  AwsElasticsearchDomainNodeToNodeEncryptionOptions as any as S.Schema<AwsElbLoadBalancerCrossZoneLoadBalancing>;
export interface AwsElbLoadBalancerAdditionalAttribute {
  Key?: string;
  Value?: string;
}
const AwsElbLoadBalancerAdditionalAttribute =
  AwsElbv2LoadBalancerAttribute as any as S.Schema<AwsElbLoadBalancerAdditionalAttribute>;
export type AwsElbLoadBalancerAdditionalAttributeList = AwsElbLoadBalancerAdditionalAttribute[];
const AwsElbLoadBalancerAdditionalAttributeList = /*@__PURE__*/ __L.at(__c42, 5);
export interface AwsElbLoadBalancerAttributes {
  AccessLog?: AwsElbLoadBalancerAccessLog;
  ConnectionDraining?: AwsElbLoadBalancerConnectionDraining;
  ConnectionSettings?: AwsElbLoadBalancerConnectionSettings;
  CrossZoneLoadBalancing?: AwsElbLoadBalancerCrossZoneLoadBalancing;
  AdditionalAttributes?: AwsElbLoadBalancerAdditionalAttribute[];
}
const AwsElbLoadBalancerAttributes = /*@__PURE__*/ __L.at(
  __c42,
  6,
) as any as S.Schema<AwsElbLoadBalancerAttributes>;
export interface AwsElbAppCookieStickinessPolicy {
  CookieName?: string;
  PolicyName?: string;
}
const AwsElbAppCookieStickinessPolicy = /*@__PURE__*/ __L.at(
  __c42,
  7,
) as any as S.Schema<AwsElbAppCookieStickinessPolicy>;
export type AwsElbAppCookieStickinessPolicies = AwsElbAppCookieStickinessPolicy[];
const AwsElbAppCookieStickinessPolicies = /*@__PURE__*/ __L.at(__c43, 0);
export interface AwsElbLbCookieStickinessPolicy {
  CookieExpirationPeriod?: number;
  PolicyName?: string;
}
const AwsElbLbCookieStickinessPolicy = /*@__PURE__*/ __L.at(
  __c43,
  1,
) as any as S.Schema<AwsElbLbCookieStickinessPolicy>;
export type AwsElbLbCookieStickinessPolicies = AwsElbLbCookieStickinessPolicy[];
const AwsElbLbCookieStickinessPolicies = /*@__PURE__*/ __L.at(__c43, 2);
export interface AwsElbLoadBalancerPolicies {
  AppCookieStickinessPolicies?: AwsElbAppCookieStickinessPolicy[];
  LbCookieStickinessPolicies?: AwsElbLbCookieStickinessPolicy[];
  OtherPolicies?: string[];
}
const AwsElbLoadBalancerPolicies = /*@__PURE__*/ __L.at(
  __c43,
  3,
) as any as S.Schema<AwsElbLoadBalancerPolicies>;
export interface AwsElbLoadBalancerSourceSecurityGroup {
  GroupName?: string;
  OwnerAlias?: string;
}
const AwsElbLoadBalancerSourceSecurityGroup = /*@__PURE__*/ __L.at(
  __c43,
  4,
) as any as S.Schema<AwsElbLoadBalancerSourceSecurityGroup>;
export interface AwsElbLoadBalancerDetails {
  AvailabilityZones?: string[];
  BackendServerDescriptions?: AwsElbLoadBalancerBackendServerDescription[];
  CanonicalHostedZoneName?: string;
  CanonicalHostedZoneNameID?: string;
  CreatedTime?: string;
  DnsName?: string;
  HealthCheck?: AwsElbLoadBalancerHealthCheck;
  Instances?: AwsElbLoadBalancerInstance[];
  ListenerDescriptions?: AwsElbLoadBalancerListenerDescription[];
  LoadBalancerAttributes?: AwsElbLoadBalancerAttributes;
  LoadBalancerName?: string;
  Policies?: AwsElbLoadBalancerPolicies;
  Scheme?: string;
  SecurityGroups?: string[];
  SourceSecurityGroup?: AwsElbLoadBalancerSourceSecurityGroup;
  Subnets?: string[];
  VpcId?: string;
}
const AwsElbLoadBalancerDetails = /*@__PURE__*/ __L.at(
  __c43,
  5,
) as any as S.Schema<AwsElbLoadBalancerDetails>;
export interface AwsIamGroupPolicy {
  PolicyName?: string;
}
export type AwsIamGroupPolicyList = AwsIamGroupPolicy[];
const AwsIamGroupPolicyList = AwsIamUserPolicyList as any as S.Schema<AwsIamGroupPolicyList>;
export interface AwsIamGroupDetails {
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[];
  CreateDate?: string;
  GroupId?: string;
  GroupName?: string;
  GroupPolicyList?: AwsIamGroupPolicy[];
  Path?: string;
}
const AwsIamGroupDetails = /*@__PURE__*/ __L.at(__c43, 6) as any as S.Schema<AwsIamGroupDetails>;
export type AwsIamRoleAssumeRolePolicyDocument = string;
export interface AwsIamInstanceProfileRole {
  Arn?: string;
  AssumeRolePolicyDocument?: string;
  CreateDate?: string;
  Path?: string;
  RoleId?: string;
  RoleName?: string;
}
const AwsIamInstanceProfileRole = /*@__PURE__*/ __L.at(
  __c43,
  7,
) as any as S.Schema<AwsIamInstanceProfileRole>;
export type AwsIamInstanceProfileRoles = AwsIamInstanceProfileRole[];
const AwsIamInstanceProfileRoles = /*@__PURE__*/ __L.at(__c44, 0);
export interface AwsIamInstanceProfile {
  Arn?: string;
  CreateDate?: string;
  InstanceProfileId?: string;
  InstanceProfileName?: string;
  Path?: string;
  Roles?: AwsIamInstanceProfileRole[];
}
const AwsIamInstanceProfile = /*@__PURE__*/ __L.at(
  __c44,
  1,
) as any as S.Schema<AwsIamInstanceProfile>;
export type AwsIamInstanceProfileList = AwsIamInstanceProfile[];
const AwsIamInstanceProfileList = /*@__PURE__*/ __L.at(__c44, 2);
export interface AwsIamRolePolicy {
  PolicyName?: string;
}
export type AwsIamRolePolicyList = AwsIamRolePolicy[];
const AwsIamRolePolicyList = AwsIamUserPolicyList as any as S.Schema<AwsIamRolePolicyList>;
export interface AwsIamRoleDetails {
  AssumeRolePolicyDocument?: string;
  AttachedManagedPolicies?: AwsIamAttachedManagedPolicy[];
  CreateDate?: string;
  InstanceProfileList?: AwsIamInstanceProfile[];
  PermissionsBoundary?: AwsIamPermissionsBoundary;
  RoleId?: string;
  RoleName?: string;
  RolePolicyList?: AwsIamRolePolicy[];
  MaxSessionDuration?: number;
  Path?: string;
}
const AwsIamRoleDetails = /*@__PURE__*/ __L.at(__c44, 3) as any as S.Schema<AwsIamRoleDetails>;
export interface AwsKmsKeyDetails {
  AWSAccountId?: string;
  CreationDate?: number;
  KeyId?: string;
  KeyManager?: string;
  KeyState?: string;
  Origin?: string;
  Description?: string;
  KeyRotationStatus?: boolean;
}
const AwsKmsKeyDetails = /*@__PURE__*/ __L.at(__c44, 4) as any as S.Schema<AwsKmsKeyDetails>;
export interface AwsLambdaFunctionCode {
  S3Bucket?: string;
  S3Key?: string;
  S3ObjectVersion?: string;
  ZipFile?: string;
}
const AwsLambdaFunctionCode = /*@__PURE__*/ __L.at(
  __c44,
  5,
) as any as S.Schema<AwsLambdaFunctionCode>;
export interface AwsLambdaFunctionDeadLetterConfig {
  TargetArn?: string;
}
const AwsLambdaFunctionDeadLetterConfig = /*@__PURE__*/ __L.at(
  __c44,
  6,
) as any as S.Schema<AwsLambdaFunctionDeadLetterConfig>;
export interface AwsLambdaFunctionEnvironmentError {
  ErrorCode?: string;
  Message?: string;
}
const AwsLambdaFunctionEnvironmentError = /*@__PURE__*/ __L.at(
  __c44,
  7,
) as any as S.Schema<AwsLambdaFunctionEnvironmentError>;
export interface AwsLambdaFunctionEnvironment {
  Variables?: { [key: string]: string | undefined };
  Error?: AwsLambdaFunctionEnvironmentError;
}
const AwsLambdaFunctionEnvironment = /*@__PURE__*/ __L.at(
  __c45,
  0,
) as any as S.Schema<AwsLambdaFunctionEnvironment>;
export interface AwsLambdaFunctionLayer {
  Arn?: string;
  CodeSize?: number;
}
const AwsLambdaFunctionLayer = /*@__PURE__*/ __L.at(
  __c45,
  1,
) as any as S.Schema<AwsLambdaFunctionLayer>;
export type AwsLambdaFunctionLayerList = AwsLambdaFunctionLayer[];
const AwsLambdaFunctionLayerList = /*@__PURE__*/ __L.at(__c45, 2);
export interface AwsLambdaFunctionTracingConfig {
  Mode?: string;
}
const AwsLambdaFunctionTracingConfig = /*@__PURE__*/ __L.at(
  __c45,
  3,
) as any as S.Schema<AwsLambdaFunctionTracingConfig>;
export interface AwsLambdaFunctionVpcConfig {
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
  VpcId?: string;
}
const AwsLambdaFunctionVpcConfig = /*@__PURE__*/ __L.at(
  __c45,
  4,
) as any as S.Schema<AwsLambdaFunctionVpcConfig>;
export interface AwsLambdaFunctionDetails {
  Code?: AwsLambdaFunctionCode;
  CodeSha256?: string;
  DeadLetterConfig?: AwsLambdaFunctionDeadLetterConfig;
  Environment?: AwsLambdaFunctionEnvironment;
  FunctionName?: string;
  Handler?: string;
  KmsKeyArn?: string;
  LastModified?: string;
  Layers?: AwsLambdaFunctionLayer[];
  MasterArn?: string;
  MemorySize?: number;
  RevisionId?: string;
  Role?: string;
  Runtime?: string;
  Timeout?: number;
  TracingConfig?: AwsLambdaFunctionTracingConfig;
  VpcConfig?: AwsLambdaFunctionVpcConfig;
  Version?: string;
  Architectures?: string[];
  PackageType?: string;
}
const AwsLambdaFunctionDetails = /*@__PURE__*/ __L.at(
  __c45,
  5,
) as any as S.Schema<AwsLambdaFunctionDetails>;
export type AwsLambdaLayerVersionNumber = number;
export interface AwsLambdaLayerVersionDetails {
  Version?: number;
  CompatibleRuntimes?: string[];
  CreatedDate?: string;
}
const AwsLambdaLayerVersionDetails = /*@__PURE__*/ __L.at(
  __c45,
  6,
) as any as S.Schema<AwsLambdaLayerVersionDetails>;
export interface AwsRdsDbInstanceAssociatedRole {
  RoleArn?: string;
  FeatureName?: string;
  Status?: string;
}
const AwsRdsDbInstanceAssociatedRole = /*@__PURE__*/ __L.at(
  __c45,
  7,
) as any as S.Schema<AwsRdsDbInstanceAssociatedRole>;
export type AwsRdsDbInstanceAssociatedRoles = AwsRdsDbInstanceAssociatedRole[];
const AwsRdsDbInstanceAssociatedRoles = /*@__PURE__*/ __L.at(__c46, 0);
export interface AwsRdsDbInstanceEndpoint {
  Address?: string;
  Port?: number;
  HostedZoneId?: string;
}
const AwsRdsDbInstanceEndpoint = /*@__PURE__*/ __L.at(
  __c46,
  1,
) as any as S.Schema<AwsRdsDbInstanceEndpoint>;
export interface AwsRdsDbInstanceVpcSecurityGroup {
  VpcSecurityGroupId?: string;
  Status?: string;
}
const AwsRdsDbInstanceVpcSecurityGroup = /*@__PURE__*/ __L.at(
  __c46,
  2,
) as any as S.Schema<AwsRdsDbInstanceVpcSecurityGroup>;
export type AwsRdsDbInstanceVpcSecurityGroups = AwsRdsDbInstanceVpcSecurityGroup[];
const AwsRdsDbInstanceVpcSecurityGroups = /*@__PURE__*/ __L.at(__c46, 3);
export interface AwsRdsDbParameterGroup {
  DbParameterGroupName?: string;
  ParameterApplyStatus?: string;
}
const AwsRdsDbParameterGroup = /*@__PURE__*/ __L.at(
  __c46,
  4,
) as any as S.Schema<AwsRdsDbParameterGroup>;
export type AwsRdsDbParameterGroups = AwsRdsDbParameterGroup[];
const AwsRdsDbParameterGroups = /*@__PURE__*/ __L.at(__c46, 5);
export interface AwsRdsDbSubnetGroupSubnetAvailabilityZone {
  Name?: string;
}
const AwsRdsDbSubnetGroupSubnetAvailabilityZone =
  AwsCertificateManagerCertificateKeyUsage as any as S.Schema<AwsRdsDbSubnetGroupSubnetAvailabilityZone>;
export interface AwsRdsDbSubnetGroupSubnet {
  SubnetIdentifier?: string;
  SubnetAvailabilityZone?: AwsRdsDbSubnetGroupSubnetAvailabilityZone;
  SubnetStatus?: string;
}
const AwsRdsDbSubnetGroupSubnet = /*@__PURE__*/ __L.at(
  __c46,
  6,
) as any as S.Schema<AwsRdsDbSubnetGroupSubnet>;
export type AwsRdsDbSubnetGroupSubnets = AwsRdsDbSubnetGroupSubnet[];
const AwsRdsDbSubnetGroupSubnets = /*@__PURE__*/ __L.at(__c46, 7);
export interface AwsRdsDbSubnetGroup {
  DbSubnetGroupName?: string;
  DbSubnetGroupDescription?: string;
  VpcId?: string;
  SubnetGroupStatus?: string;
  Subnets?: AwsRdsDbSubnetGroupSubnet[];
  DbSubnetGroupArn?: string;
}
const AwsRdsDbSubnetGroup = /*@__PURE__*/ __L.at(__c47, 0) as any as S.Schema<AwsRdsDbSubnetGroup>;
export interface AwsRdsPendingCloudWatchLogsExports {
  LogTypesToEnable?: string[];
  LogTypesToDisable?: string[];
}
const AwsRdsPendingCloudWatchLogsExports = /*@__PURE__*/ __L.at(
  __c47,
  1,
) as any as S.Schema<AwsRdsPendingCloudWatchLogsExports>;
export interface AwsRdsDbProcessorFeature {
  Name?: string;
  Value?: string;
}
const AwsRdsDbProcessorFeature = /*@__PURE__*/ __L.at(
  __c47,
  2,
) as any as S.Schema<AwsRdsDbProcessorFeature>;
export type AwsRdsDbProcessorFeatures = AwsRdsDbProcessorFeature[];
const AwsRdsDbProcessorFeatures = /*@__PURE__*/ __L.at(__c47, 3);
export interface AwsRdsDbPendingModifiedValues {
  DbInstanceClass?: string;
  AllocatedStorage?: number;
  MasterUserPassword?: string;
  Port?: number;
  BackupRetentionPeriod?: number;
  MultiAZ?: boolean;
  EngineVersion?: string;
  LicenseModel?: string;
  Iops?: number;
  DbInstanceIdentifier?: string;
  StorageType?: string;
  CaCertificateIdentifier?: string;
  DbSubnetGroupName?: string;
  PendingCloudWatchLogsExports?: AwsRdsPendingCloudWatchLogsExports;
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];
}
const AwsRdsDbPendingModifiedValues = /*@__PURE__*/ __L.at(
  __c47,
  4,
) as any as S.Schema<AwsRdsDbPendingModifiedValues>;
export interface AwsRdsDbOptionGroupMembership {
  OptionGroupName?: string;
  Status?: string;
}
const AwsRdsDbOptionGroupMembership = /*@__PURE__*/ __L.at(
  __c47,
  5,
) as any as S.Schema<AwsRdsDbOptionGroupMembership>;
export type AwsRdsDbOptionGroupMemberships = AwsRdsDbOptionGroupMembership[];
const AwsRdsDbOptionGroupMemberships = /*@__PURE__*/ __L.at(__c47, 6);
export interface AwsRdsDbStatusInfo {
  StatusType?: string;
  Normal?: boolean;
  Status?: string;
  Message?: string;
}
const AwsRdsDbStatusInfo = /*@__PURE__*/ __L.at(__c47, 7) as any as S.Schema<AwsRdsDbStatusInfo>;
export type AwsRdsDbStatusInfos = AwsRdsDbStatusInfo[];
const AwsRdsDbStatusInfos = /*@__PURE__*/ __L.at(__c48, 0);
export interface AwsRdsDbDomainMembership {
  Domain?: string;
  Status?: string;
  Fqdn?: string;
  IamRoleName?: string;
}
const AwsRdsDbDomainMembership = /*@__PURE__*/ __L.at(
  __c48,
  1,
) as any as S.Schema<AwsRdsDbDomainMembership>;
export type AwsRdsDbDomainMemberships = AwsRdsDbDomainMembership[];
const AwsRdsDbDomainMemberships = /*@__PURE__*/ __L.at(__c48, 2);
export interface AwsRdsDbInstanceDetails {
  AssociatedRoles?: AwsRdsDbInstanceAssociatedRole[];
  CACertificateIdentifier?: string;
  DBClusterIdentifier?: string;
  DBInstanceIdentifier?: string;
  DBInstanceClass?: string;
  DbInstancePort?: number;
  DbiResourceId?: string;
  DBName?: string;
  DeletionProtection?: boolean;
  Endpoint?: AwsRdsDbInstanceEndpoint;
  Engine?: string;
  EngineVersion?: string;
  IAMDatabaseAuthenticationEnabled?: boolean;
  InstanceCreateTime?: string;
  KmsKeyId?: string;
  PubliclyAccessible?: boolean;
  StorageEncrypted?: boolean;
  TdeCredentialArn?: string;
  VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];
  MultiAz?: boolean;
  EnhancedMonitoringResourceArn?: string;
  DbInstanceStatus?: string;
  MasterUsername?: string;
  AllocatedStorage?: number;
  PreferredBackupWindow?: string;
  BackupRetentionPeriod?: number;
  DbSecurityGroups?: string[];
  DbParameterGroups?: AwsRdsDbParameterGroup[];
  AvailabilityZone?: string;
  DbSubnetGroup?: AwsRdsDbSubnetGroup;
  PreferredMaintenanceWindow?: string;
  PendingModifiedValues?: AwsRdsDbPendingModifiedValues;
  LatestRestorableTime?: string;
  AutoMinorVersionUpgrade?: boolean;
  ReadReplicaSourceDBInstanceIdentifier?: string;
  ReadReplicaDBInstanceIdentifiers?: string[];
  ReadReplicaDBClusterIdentifiers?: string[];
  LicenseModel?: string;
  Iops?: number;
  OptionGroupMemberships?: AwsRdsDbOptionGroupMembership[];
  CharacterSetName?: string;
  SecondaryAvailabilityZone?: string;
  StatusInfos?: AwsRdsDbStatusInfo[];
  StorageType?: string;
  DomainMemberships?: AwsRdsDbDomainMembership[];
  CopyTagsToSnapshot?: boolean;
  MonitoringInterval?: number;
  MonitoringRoleArn?: string;
  PromotionTier?: number;
  Timezone?: string;
  PerformanceInsightsEnabled?: boolean;
  PerformanceInsightsKmsKeyId?: string;
  PerformanceInsightsRetentionPeriod?: number;
  EnabledCloudWatchLogsExports?: string[];
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];
  ListenerEndpoint?: AwsRdsDbInstanceEndpoint;
  MaxAllocatedStorage?: number;
}
const AwsRdsDbInstanceDetails = /*@__PURE__*/ __L.at(
  __c48,
  3,
) as any as S.Schema<AwsRdsDbInstanceDetails>;
export interface AwsSnsTopicSubscription {
  Endpoint?: string;
  Protocol?: string;
}
const AwsSnsTopicSubscription = /*@__PURE__*/ __L.at(
  __c48,
  4,
) as any as S.Schema<AwsSnsTopicSubscription>;
export type AwsSnsTopicSubscriptionList = AwsSnsTopicSubscription[];
const AwsSnsTopicSubscriptionList = /*@__PURE__*/ __L.at(__c48, 5);
export interface AwsSnsTopicDetails {
  KmsMasterKeyId?: string;
  Subscription?: AwsSnsTopicSubscription[];
  TopicName?: string;
  Owner?: string;
  SqsSuccessFeedbackRoleArn?: string;
  SqsFailureFeedbackRoleArn?: string;
  ApplicationSuccessFeedbackRoleArn?: string;
  FirehoseSuccessFeedbackRoleArn?: string;
  FirehoseFailureFeedbackRoleArn?: string;
  HttpSuccessFeedbackRoleArn?: string;
  HttpFailureFeedbackRoleArn?: string;
}
const AwsSnsTopicDetails = /*@__PURE__*/ __L.at(__c48, 6) as any as S.Schema<AwsSnsTopicDetails>;
export interface AwsSqsQueueDetails {
  KmsDataKeyReusePeriodSeconds?: number;
  KmsMasterKeyId?: string;
  QueueName?: string;
  DeadLetterTargetArn?: string;
}
const AwsSqsQueueDetails = /*@__PURE__*/ __L.at(__c48, 7) as any as S.Schema<AwsSqsQueueDetails>;
export interface WafAction {
  Type?: string;
}
const WafAction = /*@__PURE__*/ __L.at(__c49, 0) as any as S.Schema<WafAction>;
export interface WafExcludedRule {
  RuleId?: string;
}
const WafExcludedRule = /*@__PURE__*/ __L.at(__c49, 1) as any as S.Schema<WafExcludedRule>;
export type WafExcludedRuleList = WafExcludedRule[];
const WafExcludedRuleList = /*@__PURE__*/ __L.at(__c49, 2);
export interface WafOverrideAction {
  Type?: string;
}
const WafOverrideAction = WafAction as any as S.Schema<WafOverrideAction>;
export interface AwsWafWebAclRule {
  Action?: WafAction;
  ExcludedRules?: WafExcludedRule[];
  OverrideAction?: WafOverrideAction;
  Priority?: number;
  RuleId?: string;
  Type?: string;
}
const AwsWafWebAclRule = /*@__PURE__*/ __L.at(__c49, 3) as any as S.Schema<AwsWafWebAclRule>;
export type AwsWafWebAclRuleList = AwsWafWebAclRule[];
const AwsWafWebAclRuleList = /*@__PURE__*/ __L.at(__c49, 4);
export interface AwsWafWebAclDetails {
  Name?: string;
  DefaultAction?: string;
  Rules?: AwsWafWebAclRule[];
  WebAclId?: string;
}
const AwsWafWebAclDetails = /*@__PURE__*/ __L.at(__c49, 5) as any as S.Schema<AwsWafWebAclDetails>;
export interface AwsRdsDbSnapshotDetails {
  DbSnapshotIdentifier?: string;
  DbInstanceIdentifier?: string;
  SnapshotCreateTime?: string;
  Engine?: string;
  AllocatedStorage?: number;
  Status?: string;
  Port?: number;
  AvailabilityZone?: string;
  VpcId?: string;
  InstanceCreateTime?: string;
  MasterUsername?: string;
  EngineVersion?: string;
  LicenseModel?: string;
  SnapshotType?: string;
  Iops?: number;
  OptionGroupName?: string;
  PercentProgress?: number;
  SourceRegion?: string;
  SourceDbSnapshotIdentifier?: string;
  StorageType?: string;
  TdeCredentialArn?: string;
  Encrypted?: boolean;
  KmsKeyId?: string;
  Timezone?: string;
  IamDatabaseAuthenticationEnabled?: boolean;
  ProcessorFeatures?: AwsRdsDbProcessorFeature[];
  DbiResourceId?: string;
}
const AwsRdsDbSnapshotDetails = /*@__PURE__*/ __L.at(
  __c49,
  6,
) as any as S.Schema<AwsRdsDbSnapshotDetails>;
export interface AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute {
  AttributeName?: string;
  AttributeValues?: string[];
}
const AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute = /*@__PURE__*/ __L.at(
  __c49,
  7,
) as any as S.Schema<AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute>;
export type AwsRdsDbClusterSnapshotDbClusterSnapshotAttributes =
  AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute[];
const AwsRdsDbClusterSnapshotDbClusterSnapshotAttributes = /*@__PURE__*/ __L.at(__c50, 0);
export interface AwsRdsDbClusterSnapshotDetails {
  AvailabilityZones?: string[];
  SnapshotCreateTime?: string;
  Engine?: string;
  AllocatedStorage?: number;
  Status?: string;
  Port?: number;
  VpcId?: string;
  ClusterCreateTime?: string;
  MasterUsername?: string;
  EngineVersion?: string;
  LicenseModel?: string;
  SnapshotType?: string;
  PercentProgress?: number;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  DbClusterIdentifier?: string;
  DbClusterSnapshotIdentifier?: string;
  IamDatabaseAuthenticationEnabled?: boolean;
  DbClusterSnapshotAttributes?: AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute[];
}
const AwsRdsDbClusterSnapshotDetails = /*@__PURE__*/ __L.at(
  __c50,
  1,
) as any as S.Schema<AwsRdsDbClusterSnapshotDetails>;
export interface AwsRdsDbClusterAssociatedRole {
  RoleArn?: string;
  Status?: string;
}
const AwsRdsDbClusterAssociatedRole = /*@__PURE__*/ __L.at(
  __c50,
  2,
) as any as S.Schema<AwsRdsDbClusterAssociatedRole>;
export type AwsRdsDbClusterAssociatedRoles = AwsRdsDbClusterAssociatedRole[];
const AwsRdsDbClusterAssociatedRoles = /*@__PURE__*/ __L.at(__c50, 3);
export interface AwsRdsDbClusterOptionGroupMembership {
  DbClusterOptionGroupName?: string;
  Status?: string;
}
const AwsRdsDbClusterOptionGroupMembership = /*@__PURE__*/ __L.at(
  __c50,
  4,
) as any as S.Schema<AwsRdsDbClusterOptionGroupMembership>;
export type AwsRdsDbClusterOptionGroupMemberships = AwsRdsDbClusterOptionGroupMembership[];
const AwsRdsDbClusterOptionGroupMemberships = /*@__PURE__*/ __L.at(__c50, 5);
export interface AwsRdsDbClusterMember {
  IsClusterWriter?: boolean;
  PromotionTier?: number;
  DbInstanceIdentifier?: string;
  DbClusterParameterGroupStatus?: string;
}
const AwsRdsDbClusterMember = /*@__PURE__*/ __L.at(
  __c50,
  6,
) as any as S.Schema<AwsRdsDbClusterMember>;
export type AwsRdsDbClusterMembers = AwsRdsDbClusterMember[];
const AwsRdsDbClusterMembers = /*@__PURE__*/ __L.at(__c50, 7);
export interface AwsRdsDbClusterDetails {
  AllocatedStorage?: number;
  AvailabilityZones?: string[];
  BackupRetentionPeriod?: number;
  DatabaseName?: string;
  Status?: string;
  Endpoint?: string;
  ReaderEndpoint?: string;
  CustomEndpoints?: string[];
  MultiAz?: boolean;
  Engine?: string;
  EngineVersion?: string;
  Port?: number;
  MasterUsername?: string;
  PreferredBackupWindow?: string;
  PreferredMaintenanceWindow?: string;
  ReadReplicaIdentifiers?: string[];
  VpcSecurityGroups?: AwsRdsDbInstanceVpcSecurityGroup[];
  HostedZoneId?: string;
  StorageEncrypted?: boolean;
  KmsKeyId?: string;
  DbClusterResourceId?: string;
  AssociatedRoles?: AwsRdsDbClusterAssociatedRole[];
  ClusterCreateTime?: string;
  EnabledCloudWatchLogsExports?: string[];
  EngineMode?: string;
  DeletionProtection?: boolean;
  HttpEndpointEnabled?: boolean;
  ActivityStreamStatus?: string;
  CopyTagsToSnapshot?: boolean;
  CrossAccountClone?: boolean;
  DomainMemberships?: AwsRdsDbDomainMembership[];
  DbClusterParameterGroup?: string;
  DbSubnetGroup?: string;
  DbClusterOptionGroupMemberships?: AwsRdsDbClusterOptionGroupMembership[];
  DbClusterIdentifier?: string;
  DbClusterMembers?: AwsRdsDbClusterMember[];
  IamDatabaseAuthenticationEnabled?: boolean;
  AutoMinorVersionUpgrade?: boolean;
}
const AwsRdsDbClusterDetails = /*@__PURE__*/ __L.at(
  __c51,
  0,
) as any as S.Schema<AwsRdsDbClusterDetails>;
export interface AwsEcsClusterClusterSettingsDetails {
  Name?: string;
  Value?: string;
}
const AwsEcsClusterClusterSettingsDetails = /*@__PURE__*/ __L.at(
  __c51,
  1,
) as any as S.Schema<AwsEcsClusterClusterSettingsDetails>;
export type AwsEcsClusterClusterSettingsList = AwsEcsClusterClusterSettingsDetails[];
const AwsEcsClusterClusterSettingsList = /*@__PURE__*/ __L.at(__c51, 2);
export interface AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails {
  CloudWatchEncryptionEnabled?: boolean;
  CloudWatchLogGroupName?: string;
  S3BucketName?: string;
  S3EncryptionEnabled?: boolean;
  S3KeyPrefix?: string;
}
const AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails =
  /*@__PURE__*/ __L.at(
    __c51,
    3,
  ) as any as S.Schema<AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails>;
export interface AwsEcsClusterConfigurationExecuteCommandConfigurationDetails {
  KmsKeyId?: string;
  LogConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails;
  Logging?: string;
}
const AwsEcsClusterConfigurationExecuteCommandConfigurationDetails = /*@__PURE__*/ __L.at(
  __c51,
  4,
) as any as S.Schema<AwsEcsClusterConfigurationExecuteCommandConfigurationDetails>;
export interface AwsEcsClusterConfigurationDetails {
  ExecuteCommandConfiguration?: AwsEcsClusterConfigurationExecuteCommandConfigurationDetails;
}
const AwsEcsClusterConfigurationDetails = /*@__PURE__*/ __L.at(
  __c51,
  5,
) as any as S.Schema<AwsEcsClusterConfigurationDetails>;
export interface AwsEcsClusterDefaultCapacityProviderStrategyDetails {
  Base?: number;
  CapacityProvider?: string;
  Weight?: number;
}
const AwsEcsClusterDefaultCapacityProviderStrategyDetails = /*@__PURE__*/ __L.at(
  __c51,
  6,
) as any as S.Schema<AwsEcsClusterDefaultCapacityProviderStrategyDetails>;
export type AwsEcsClusterDefaultCapacityProviderStrategyList =
  AwsEcsClusterDefaultCapacityProviderStrategyDetails[];
const AwsEcsClusterDefaultCapacityProviderStrategyList = /*@__PURE__*/ __L.at(__c51, 7);
export interface AwsEcsClusterDetails {
  ClusterArn?: string;
  ActiveServicesCount?: number;
  CapacityProviders?: string[];
  ClusterSettings?: AwsEcsClusterClusterSettingsDetails[];
  Configuration?: AwsEcsClusterConfigurationDetails;
  DefaultCapacityProviderStrategy?: AwsEcsClusterDefaultCapacityProviderStrategyDetails[];
  ClusterName?: string;
  RegisteredContainerInstancesCount?: number;
  RunningTasksCount?: number;
  Status?: string;
}
const AwsEcsClusterDetails = /*@__PURE__*/ __L.at(
  __c52,
  0,
) as any as S.Schema<AwsEcsClusterDetails>;
export interface AwsMountPoint {
  SourceVolume?: string;
  ContainerPath?: string;
}
const AwsMountPoint = /*@__PURE__*/ __L.at(__c52, 1) as any as S.Schema<AwsMountPoint>;
export type AwsMountPointList = AwsMountPoint[];
const AwsMountPointList = /*@__PURE__*/ __L.at(__c52, 2);
export interface AwsEcsContainerDetails {
  Name?: string;
  Image?: string;
  MountPoints?: AwsMountPoint[];
  Privileged?: boolean;
}
const AwsEcsContainerDetails = /*@__PURE__*/ __L.at(
  __c52,
  3,
) as any as S.Schema<AwsEcsContainerDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails {
  Condition?: string;
  ContainerName?: string;
}
const AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails = /*@__PURE__*/ __L.at(
  __c52,
  4,
) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails>;
export type AwsEcsTaskDefinitionContainerDefinitionsDependsOnList =
  AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails[];
const AwsEcsTaskDefinitionContainerDefinitionsDependsOnList = /*@__PURE__*/ __L.at(__c52, 5);
export interface AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails {
  Name?: string;
  Value?: string;
}
const AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails = /*@__PURE__*/ __L.at(
  __c52,
  6,
) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails>;
export type AwsEcsTaskDefinitionContainerDefinitionsEnvironmentList =
  AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails[];
const AwsEcsTaskDefinitionContainerDefinitionsEnvironmentList = /*@__PURE__*/ __L.at(__c52, 7);
export interface AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails {
  Type?: string;
  Value?: string;
}
const AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails = /*@__PURE__*/ __L.at(
  __c53,
  0,
) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails>;
export type AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList =
  AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails[];
const AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList = /*@__PURE__*/ __L.at(__c53, 1);
export interface AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails {
  Hostname?: string;
  IpAddress?: string;
}
const AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails = /*@__PURE__*/ __L.at(
  __c53,
  2,
) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails>;
export type AwsEcsTaskDefinitionContainerDefinitionsExtraHostsList =
  AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails[];
const AwsEcsTaskDefinitionContainerDefinitionsExtraHostsList = /*@__PURE__*/ __L.at(__c53, 3);
export interface AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails {
  Options?: { [key: string]: string | undefined };
  Type?: string;
}
const AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails = /*@__PURE__*/ __L.at(
  __c53,
  4,
) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails {
  Command?: string[];
  Interval?: number;
  Retries?: number;
  StartPeriod?: number;
  Timeout?: number;
}
const AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails = /*@__PURE__*/ __L.at(
  __c53,
  5,
) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails {
  Add?: string[];
  Drop?: string[];
}
const AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails =
  /*@__PURE__*/ __L.at(
    __c53,
    6,
  ) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails {
  ContainerPath?: string;
  HostPath?: string;
  Permissions?: string[];
}
const AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails = /*@__PURE__*/ __L.at(
  __c53,
  7,
) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails>;
export type AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList =
  AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails[];
const AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList = /*@__PURE__*/ __L.at(
  __c54,
  0,
);
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails {
  ContainerPath?: string;
  MountOptions?: string[];
  Size?: number;
}
const AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails = /*@__PURE__*/ __L.at(
  __c54,
  1,
) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails>;
export type AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList =
  AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails[];
const AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList = /*@__PURE__*/ __L.at(
  __c54,
  2,
);
export interface AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails {
  Capabilities?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails;
  Devices?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails[];
  InitProcessEnabled?: boolean;
  MaxSwap?: number;
  SharedMemorySize?: number;
  Swappiness?: number;
  Tmpfs?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails[];
}
const AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails = /*@__PURE__*/ __L.at(
  __c54,
  3,
) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails {
  Name?: string;
  ValueFrom?: string;
}
const AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails =
  /*@__PURE__*/ __L.at(
    __c54,
    4,
  ) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails>;
export type AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList =
  AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[];
const AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList =
  /*@__PURE__*/ __L.at(__c54, 5);
export interface AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails {
  LogDriver?: string;
  Options?: { [key: string]: string | undefined };
  SecretOptions?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[];
}
const AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails = /*@__PURE__*/ __L.at(
  __c54,
  6,
) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails {
  ContainerPath?: string;
  ReadOnly?: boolean;
  SourceVolume?: string;
}
const AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails = /*@__PURE__*/ __L.at(
  __c54,
  7,
) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails>;
export type AwsEcsTaskDefinitionContainerDefinitionsMountPointsList =
  AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails[];
const AwsEcsTaskDefinitionContainerDefinitionsMountPointsList = /*@__PURE__*/ __L.at(__c55, 0);
export interface AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails {
  ContainerPort?: number;
  HostPort?: number;
  Protocol?: string;
}
const AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails = /*@__PURE__*/ __L.at(
  __c55,
  1,
) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails>;
export type AwsEcsTaskDefinitionContainerDefinitionsPortMappingsList =
  AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails[];
const AwsEcsTaskDefinitionContainerDefinitionsPortMappingsList = /*@__PURE__*/ __L.at(__c55, 2);
export interface AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails {
  CredentialsParameter?: string;
}
const AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails = /*@__PURE__*/ __L.at(
  __c55,
  3,
) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails>;
export interface AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails {
  Type?: string;
  Value?: string;
}
const AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails =
  AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails>;
export type AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsList =
  AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails[];
const AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsList = /*@__PURE__*/ __L.at(
  __c55,
  4,
);
export interface AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails {
  Name?: string;
  ValueFrom?: string;
}
const AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails = /*@__PURE__*/ __L.at(
  __c55,
  5,
) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails>;
export type AwsEcsTaskDefinitionContainerDefinitionsSecretsList =
  AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails[];
const AwsEcsTaskDefinitionContainerDefinitionsSecretsList = /*@__PURE__*/ __L.at(__c55, 6);
export interface AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails {
  Namespace?: string;
  Value?: string;
}
const AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails = /*@__PURE__*/ __L.at(
  __c55,
  7,
) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails>;
export type AwsEcsTaskDefinitionContainerDefinitionsSystemControlsList =
  AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails[];
const AwsEcsTaskDefinitionContainerDefinitionsSystemControlsList = /*@__PURE__*/ __L.at(__c56, 0);
export interface AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails {
  HardLimit?: number;
  Name?: string;
  SoftLimit?: number;
}
const AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails = /*@__PURE__*/ __L.at(
  __c56,
  1,
) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails>;
export type AwsEcsTaskDefinitionContainerDefinitionsUlimitsList =
  AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails[];
const AwsEcsTaskDefinitionContainerDefinitionsUlimitsList = /*@__PURE__*/ __L.at(__c56, 2);
export interface AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails {
  ReadOnly?: boolean;
  SourceContainer?: string;
}
const AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails = /*@__PURE__*/ __L.at(
  __c56,
  3,
) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails>;
export type AwsEcsTaskDefinitionContainerDefinitionsVolumesFromList =
  AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails[];
const AwsEcsTaskDefinitionContainerDefinitionsVolumesFromList = /*@__PURE__*/ __L.at(__c56, 4);
export interface AwsEcsTaskDefinitionContainerDefinitionsDetails {
  Command?: string[];
  Cpu?: number;
  DependsOn?: AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails[];
  DisableNetworking?: boolean;
  DnsSearchDomains?: string[];
  DnsServers?: string[];
  DockerLabels?: { [key: string]: string | undefined };
  DockerSecurityOptions?: string[];
  EntryPoint?: string[];
  Environment?: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails[];
  EnvironmentFiles?: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails[];
  Essential?: boolean;
  ExtraHosts?: AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails[];
  FirelensConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails;
  HealthCheck?: AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails;
  Hostname?: string;
  Image?: string;
  Interactive?: boolean;
  Links?: string[];
  LinuxParameters?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails;
  LogConfiguration?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails;
  Memory?: number;
  MemoryReservation?: number;
  MountPoints?: AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails[];
  Name?: string;
  PortMappings?: AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails[];
  Privileged?: boolean;
  PseudoTerminal?: boolean;
  ReadonlyRootFilesystem?: boolean;
  RepositoryCredentials?: AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails;
  ResourceRequirements?: AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails[];
  Secrets?: AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails[];
  StartTimeout?: number;
  StopTimeout?: number;
  SystemControls?: AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails[];
  Ulimits?: AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails[];
  User?: string;
  VolumesFrom?: AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails[];
  WorkingDirectory?: string;
}
const AwsEcsTaskDefinitionContainerDefinitionsDetails = /*@__PURE__*/ __L.at(
  __c56,
  5,
) as any as S.Schema<AwsEcsTaskDefinitionContainerDefinitionsDetails>;
export type AwsEcsTaskDefinitionContainerDefinitionsList =
  AwsEcsTaskDefinitionContainerDefinitionsDetails[];
const AwsEcsTaskDefinitionContainerDefinitionsList = /*@__PURE__*/ __L.at(__c56, 6);
export interface AwsEcsTaskDefinitionInferenceAcceleratorsDetails {
  DeviceName?: string;
  DeviceType?: string;
}
const AwsEcsTaskDefinitionInferenceAcceleratorsDetails = /*@__PURE__*/ __L.at(
  __c56,
  7,
) as any as S.Schema<AwsEcsTaskDefinitionInferenceAcceleratorsDetails>;
export type AwsEcsTaskDefinitionInferenceAcceleratorsList =
  AwsEcsTaskDefinitionInferenceAcceleratorsDetails[];
const AwsEcsTaskDefinitionInferenceAcceleratorsList = /*@__PURE__*/ __L.at(__c57, 0);
export interface AwsEcsTaskDefinitionPlacementConstraintsDetails {
  Expression?: string;
  Type?: string;
}
const AwsEcsTaskDefinitionPlacementConstraintsDetails = /*@__PURE__*/ __L.at(
  __c57,
  1,
) as any as S.Schema<AwsEcsTaskDefinitionPlacementConstraintsDetails>;
export type AwsEcsTaskDefinitionPlacementConstraintsList =
  AwsEcsTaskDefinitionPlacementConstraintsDetails[];
const AwsEcsTaskDefinitionPlacementConstraintsList = /*@__PURE__*/ __L.at(__c57, 2);
export interface AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails {
  Name?: string;
  Value?: string;
}
const AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails =
  /*@__PURE__*/ __L.at(
    __c57,
    3,
  ) as any as S.Schema<AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails>;
export type AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList =
  AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails[];
const AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList = /*@__PURE__*/ __L.at(
  __c57,
  4,
);
export interface AwsEcsTaskDefinitionProxyConfigurationDetails {
  ContainerName?: string;
  ProxyConfigurationProperties?: AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails[];
  Type?: string;
}
const AwsEcsTaskDefinitionProxyConfigurationDetails = /*@__PURE__*/ __L.at(
  __c57,
  5,
) as any as S.Schema<AwsEcsTaskDefinitionProxyConfigurationDetails>;
export interface AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails {
  Autoprovision?: boolean;
  Driver?: string;
  DriverOpts?: { [key: string]: string | undefined };
  Labels?: { [key: string]: string | undefined };
  Scope?: string;
}
const AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails = /*@__PURE__*/ __L.at(
  __c57,
  6,
) as any as S.Schema<AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails>;
export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails {
  AccessPointId?: string;
  Iam?: string;
}
const AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails =
  /*@__PURE__*/ __L.at(
    __c57,
    7,
  ) as any as S.Schema<AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails>;
export interface AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails {
  AuthorizationConfig?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails;
  FilesystemId?: string;
  RootDirectory?: string;
  TransitEncryption?: string;
  TransitEncryptionPort?: number;
}
const AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails = /*@__PURE__*/ __L.at(
  __c58,
  0,
) as any as S.Schema<AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails>;
export interface AwsEcsTaskDefinitionVolumesHostDetails {
  SourcePath?: string;
}
const AwsEcsTaskDefinitionVolumesHostDetails = /*@__PURE__*/ __L.at(
  __c58,
  1,
) as any as S.Schema<AwsEcsTaskDefinitionVolumesHostDetails>;
export interface AwsEcsTaskDefinitionVolumesDetails {
  DockerVolumeConfiguration?: AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails;
  EfsVolumeConfiguration?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails;
  Host?: AwsEcsTaskDefinitionVolumesHostDetails;
  Name?: string;
}
const AwsEcsTaskDefinitionVolumesDetails = /*@__PURE__*/ __L.at(
  __c58,
  2,
) as any as S.Schema<AwsEcsTaskDefinitionVolumesDetails>;
export type AwsEcsTaskDefinitionVolumesList = AwsEcsTaskDefinitionVolumesDetails[];
const AwsEcsTaskDefinitionVolumesList = /*@__PURE__*/ __L.at(__c58, 3);
export interface AwsEcsTaskDefinitionDetails {
  ContainerDefinitions?: AwsEcsTaskDefinitionContainerDefinitionsDetails[];
  Cpu?: string;
  ExecutionRoleArn?: string;
  Family?: string;
  InferenceAccelerators?: AwsEcsTaskDefinitionInferenceAcceleratorsDetails[];
  IpcMode?: string;
  Memory?: string;
  NetworkMode?: string;
  PidMode?: string;
  PlacementConstraints?: AwsEcsTaskDefinitionPlacementConstraintsDetails[];
  ProxyConfiguration?: AwsEcsTaskDefinitionProxyConfigurationDetails;
  RequiresCompatibilities?: string[];
  TaskRoleArn?: string;
  Volumes?: AwsEcsTaskDefinitionVolumesDetails[];
  Status?: string;
}
const AwsEcsTaskDefinitionDetails = /*@__PURE__*/ __L.at(
  __c58,
  4,
) as any as S.Schema<AwsEcsTaskDefinitionDetails>;
export interface VolumeMount {
  Name?: string;
  MountPath?: string;
}
const VolumeMount = /*@__PURE__*/ __L.at(__c58, 5) as any as S.Schema<VolumeMount>;
export type VolumeMountList = VolumeMount[];
const VolumeMountList = /*@__PURE__*/ __L.at(__c58, 6);
export interface ContainerDetails {
  ContainerRuntime?: string;
  Name?: string;
  ImageId?: string;
  ImageName?: string;
  LaunchedAt?: string;
  VolumeMounts?: VolumeMount[];
  Privileged?: boolean;
}
const ContainerDetails = /*@__PURE__*/ __L.at(__c58, 7) as any as S.Schema<ContainerDetails>;
export interface AwsRdsEventSubscriptionDetails {
  CustSubscriptionId?: string;
  CustomerAwsId?: string;
  Enabled?: boolean;
  EventCategoriesList?: string[];
  EventSubscriptionArn?: string;
  SnsTopicArn?: string;
  SourceIdsList?: string[];
  SourceType?: string;
  Status?: string;
  SubscriptionCreationTime?: string;
}
const AwsRdsEventSubscriptionDetails = /*@__PURE__*/ __L.at(
  __c59,
  0,
) as any as S.Schema<AwsRdsEventSubscriptionDetails>;
export interface AwsEcsServiceCapacityProviderStrategyDetails {
  Base?: number;
  CapacityProvider?: string;
  Weight?: number;
}
export type AwsEcsServiceCapacityProviderStrategyList =
  AwsEcsServiceCapacityProviderStrategyDetails[];
const AwsEcsServiceCapacityProviderStrategyList =
  AwsEcsClusterDefaultCapacityProviderStrategyList as any as S.Schema<AwsEcsServiceCapacityProviderStrategyList>;
export interface AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails {
  Enable?: boolean;
  Rollback?: boolean;
}
const AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails = /*@__PURE__*/ __L.at(
  __c59,
  1,
) as any as S.Schema<AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails>;
export interface AwsEcsServiceDeploymentConfigurationDetails {
  DeploymentCircuitBreaker?: AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails;
  MaximumPercent?: number;
  MinimumHealthyPercent?: number;
}
const AwsEcsServiceDeploymentConfigurationDetails = /*@__PURE__*/ __L.at(
  __c59,
  2,
) as any as S.Schema<AwsEcsServiceDeploymentConfigurationDetails>;
export interface AwsEcsServiceDeploymentControllerDetails {
  Type?: string;
}
const AwsEcsServiceDeploymentControllerDetails = /*@__PURE__*/ __L.at(
  __c59,
  3,
) as any as S.Schema<AwsEcsServiceDeploymentControllerDetails>;
export interface AwsEcsServiceLoadBalancersDetails {
  ContainerName?: string;
  ContainerPort?: number;
  LoadBalancerName?: string;
  TargetGroupArn?: string;
}
const AwsEcsServiceLoadBalancersDetails = /*@__PURE__*/ __L.at(
  __c59,
  4,
) as any as S.Schema<AwsEcsServiceLoadBalancersDetails>;
export type AwsEcsServiceLoadBalancersList = AwsEcsServiceLoadBalancersDetails[];
const AwsEcsServiceLoadBalancersList = /*@__PURE__*/ __L.at(__c59, 5);
export interface AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails {
  AssignPublicIp?: string;
  SecurityGroups?: string[];
  Subnets?: string[];
}
const AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails = /*@__PURE__*/ __L.at(
  __c59,
  6,
) as any as S.Schema<AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails>;
export interface AwsEcsServiceNetworkConfigurationDetails {
  AwsVpcConfiguration?: AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails;
}
const AwsEcsServiceNetworkConfigurationDetails = /*@__PURE__*/ __L.at(
  __c59,
  7,
) as any as S.Schema<AwsEcsServiceNetworkConfigurationDetails>;
export interface AwsEcsServicePlacementConstraintsDetails {
  Expression?: string;
  Type?: string;
}
export type AwsEcsServicePlacementConstraintsList = AwsEcsServicePlacementConstraintsDetails[];
const AwsEcsServicePlacementConstraintsList =
  AwsEcsTaskDefinitionPlacementConstraintsList as any as S.Schema<AwsEcsServicePlacementConstraintsList>;
export interface AwsEcsServicePlacementStrategiesDetails {
  Field?: string;
  Type?: string;
}
const AwsEcsServicePlacementStrategiesDetails = /*@__PURE__*/ __L.at(
  __c60,
  0,
) as any as S.Schema<AwsEcsServicePlacementStrategiesDetails>;
export type AwsEcsServicePlacementStrategiesList = AwsEcsServicePlacementStrategiesDetails[];
const AwsEcsServicePlacementStrategiesList = /*@__PURE__*/ __L.at(__c60, 1);
export interface AwsEcsServiceServiceRegistriesDetails {
  ContainerName?: string;
  ContainerPort?: number;
  Port?: number;
  RegistryArn?: string;
}
const AwsEcsServiceServiceRegistriesDetails = /*@__PURE__*/ __L.at(
  __c60,
  2,
) as any as S.Schema<AwsEcsServiceServiceRegistriesDetails>;
export type AwsEcsServiceServiceRegistriesList = AwsEcsServiceServiceRegistriesDetails[];
const AwsEcsServiceServiceRegistriesList = /*@__PURE__*/ __L.at(__c60, 3);
export interface AwsEcsServiceDetails {
  CapacityProviderStrategy?: AwsEcsServiceCapacityProviderStrategyDetails[];
  Cluster?: string;
  DeploymentConfiguration?: AwsEcsServiceDeploymentConfigurationDetails;
  DeploymentController?: AwsEcsServiceDeploymentControllerDetails;
  DesiredCount?: number;
  EnableEcsManagedTags?: boolean;
  EnableExecuteCommand?: boolean;
  HealthCheckGracePeriodSeconds?: number;
  LaunchType?: string;
  LoadBalancers?: AwsEcsServiceLoadBalancersDetails[];
  Name?: string;
  NetworkConfiguration?: AwsEcsServiceNetworkConfigurationDetails;
  PlacementConstraints?: AwsEcsServicePlacementConstraintsDetails[];
  PlacementStrategies?: AwsEcsServicePlacementStrategiesDetails[];
  PlatformVersion?: string;
  PropagateTags?: string;
  Role?: string;
  SchedulingStrategy?: string;
  ServiceArn?: string;
  ServiceName?: string;
  ServiceRegistries?: AwsEcsServiceServiceRegistriesDetails[];
  TaskDefinition?: string;
}
const AwsEcsServiceDetails = /*@__PURE__*/ __L.at(
  __c60,
  4,
) as any as S.Schema<AwsEcsServiceDetails>;
export interface AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails {
  DeleteOnTermination?: boolean;
  Encrypted?: boolean;
  Iops?: number;
  SnapshotId?: string;
  VolumeSize?: number;
  VolumeType?: string;
}
const AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails = /*@__PURE__*/ __L.at(
  __c60,
  5,
) as any as S.Schema<AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails>;
export interface AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails {
  DeviceName?: string;
  Ebs?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails;
  NoDevice?: boolean;
  VirtualName?: string;
}
const AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails = /*@__PURE__*/ __L.at(
  __c60,
  6,
) as any as S.Schema<AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails>;
export type AwsAutoScalingLaunchConfigurationBlockDeviceMappingsList =
  AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails[];
const AwsAutoScalingLaunchConfigurationBlockDeviceMappingsList = /*@__PURE__*/ __L.at(__c60, 7);
export interface AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails {
  Enabled?: boolean;
}
const AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails = /*@__PURE__*/ __L.at(
  __c61,
  0,
) as any as S.Schema<AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails>;
export interface AwsAutoScalingLaunchConfigurationMetadataOptions {
  HttpEndpoint?: string;
  HttpPutResponseHopLimit?: number;
  HttpTokens?: string;
}
const AwsAutoScalingLaunchConfigurationMetadataOptions = /*@__PURE__*/ __L.at(
  __c61,
  1,
) as any as S.Schema<AwsAutoScalingLaunchConfigurationMetadataOptions>;
export interface AwsAutoScalingLaunchConfigurationDetails {
  AssociatePublicIpAddress?: boolean;
  BlockDeviceMappings?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails[];
  ClassicLinkVpcId?: string;
  ClassicLinkVpcSecurityGroups?: string[];
  CreatedTime?: string;
  EbsOptimized?: boolean;
  IamInstanceProfile?: string;
  ImageId?: string;
  InstanceMonitoring?: AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails;
  InstanceType?: string;
  KernelId?: string;
  KeyName?: string;
  LaunchConfigurationName?: string;
  PlacementTenancy?: string;
  RamdiskId?: string;
  SecurityGroups?: string[];
  SpotPrice?: string;
  UserData?: string;
  MetadataOptions?: AwsAutoScalingLaunchConfigurationMetadataOptions;
}
const AwsAutoScalingLaunchConfigurationDetails = /*@__PURE__*/ __L.at(
  __c61,
  2,
) as any as S.Schema<AwsAutoScalingLaunchConfigurationDetails>;
export interface AwsEc2VpnConnectionVgwTelemetryDetails {
  AcceptedRouteCount?: number;
  CertificateArn?: string;
  LastStatusChange?: string;
  OutsideIpAddress?: string;
  Status?: string;
  StatusMessage?: string;
}
const AwsEc2VpnConnectionVgwTelemetryDetails = /*@__PURE__*/ __L.at(
  __c61,
  3,
) as any as S.Schema<AwsEc2VpnConnectionVgwTelemetryDetails>;
export type AwsEc2VpnConnectionVgwTelemetryList = AwsEc2VpnConnectionVgwTelemetryDetails[];
const AwsEc2VpnConnectionVgwTelemetryList = /*@__PURE__*/ __L.at(__c61, 4);
export interface AwsEc2VpnConnectionOptionsTunnelOptionsDetails {
  DpdTimeoutSeconds?: number;
  IkeVersions?: string[];
  OutsideIpAddress?: string;
  Phase1DhGroupNumbers?: number[];
  Phase1EncryptionAlgorithms?: string[];
  Phase1IntegrityAlgorithms?: string[];
  Phase1LifetimeSeconds?: number;
  Phase2DhGroupNumbers?: number[];
  Phase2EncryptionAlgorithms?: string[];
  Phase2IntegrityAlgorithms?: string[];
  Phase2LifetimeSeconds?: number;
  PreSharedKey?: string;
  RekeyFuzzPercentage?: number;
  RekeyMarginTimeSeconds?: number;
  ReplayWindowSize?: number;
  TunnelInsideCidr?: string;
}
const AwsEc2VpnConnectionOptionsTunnelOptionsDetails = /*@__PURE__*/ __L.at(
  __c61,
  5,
) as any as S.Schema<AwsEc2VpnConnectionOptionsTunnelOptionsDetails>;
export type AwsEc2VpnConnectionOptionsTunnelOptionsList =
  AwsEc2VpnConnectionOptionsTunnelOptionsDetails[];
const AwsEc2VpnConnectionOptionsTunnelOptionsList = /*@__PURE__*/ __L.at(__c61, 6);
export interface AwsEc2VpnConnectionOptionsDetails {
  StaticRoutesOnly?: boolean;
  TunnelOptions?: AwsEc2VpnConnectionOptionsTunnelOptionsDetails[];
}
const AwsEc2VpnConnectionOptionsDetails = /*@__PURE__*/ __L.at(
  __c61,
  7,
) as any as S.Schema<AwsEc2VpnConnectionOptionsDetails>;
export interface AwsEc2VpnConnectionRoutesDetails {
  DestinationCidrBlock?: string;
  State?: string;
}
const AwsEc2VpnConnectionRoutesDetails = /*@__PURE__*/ __L.at(
  __c62,
  0,
) as any as S.Schema<AwsEc2VpnConnectionRoutesDetails>;
export type AwsEc2VpnConnectionRoutesList = AwsEc2VpnConnectionRoutesDetails[];
const AwsEc2VpnConnectionRoutesList = /*@__PURE__*/ __L.at(__c62, 1);
export interface AwsEc2VpnConnectionDetails {
  VpnConnectionId?: string;
  State?: string;
  CustomerGatewayId?: string;
  CustomerGatewayConfiguration?: string;
  Type?: string;
  VpnGatewayId?: string;
  Category?: string;
  VgwTelemetry?: AwsEc2VpnConnectionVgwTelemetryDetails[];
  Options?: AwsEc2VpnConnectionOptionsDetails;
  Routes?: AwsEc2VpnConnectionRoutesDetails[];
  TransitGatewayId?: string;
}
const AwsEc2VpnConnectionDetails = /*@__PURE__*/ __L.at(
  __c62,
  2,
) as any as S.Schema<AwsEc2VpnConnectionDetails>;
export interface AwsEcrContainerImageDetails {
  RegistryId?: string;
  RepositoryName?: string;
  Architecture?: string;
  ImageDigest?: string;
  ImageTags?: string[];
  ImagePublishedAt?: string;
}
const AwsEcrContainerImageDetails = /*@__PURE__*/ __L.at(
  __c62,
  3,
) as any as S.Schema<AwsEcrContainerImageDetails>;
export interface AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails {
  Enabled?: boolean;
  KmsKeyId?: string;
}
const AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails = /*@__PURE__*/ __L.at(
  __c62,
  4,
) as any as S.Schema<AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails>;
export interface AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails {
  Enabled?: boolean;
}
const AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails =
  AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails as any as S.Schema<AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails>;
export interface AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails {
  AutomatedUpdateDate?: string;
  Cancellable?: boolean;
  CurrentVersion?: string;
  Description?: string;
  NewVersion?: string;
  UpdateAvailable?: boolean;
  UpdateStatus?: string;
  OptionalDeployment?: boolean;
}
const AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails = /*@__PURE__*/ __L.at(
  __c62,
  5,
) as any as S.Schema<AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails>;
export interface AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails {
  AvailabilityZoneCount?: number;
}
const AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails =
  AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails as any as S.Schema<AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails>;
export interface AwsOpenSearchServiceDomainClusterConfigDetails {
  InstanceCount?: number;
  WarmEnabled?: boolean;
  WarmCount?: number;
  DedicatedMasterEnabled?: boolean;
  ZoneAwarenessConfig?: AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails;
  DedicatedMasterCount?: number;
  InstanceType?: string;
  WarmType?: string;
  ZoneAwarenessEnabled?: boolean;
  DedicatedMasterType?: string;
}
const AwsOpenSearchServiceDomainClusterConfigDetails = /*@__PURE__*/ __L.at(
  __c62,
  6,
) as any as S.Schema<AwsOpenSearchServiceDomainClusterConfigDetails>;
export interface AwsOpenSearchServiceDomainDomainEndpointOptionsDetails {
  CustomEndpointCertificateArn?: string;
  CustomEndpointEnabled?: boolean;
  EnforceHTTPS?: boolean;
  CustomEndpoint?: string;
  TLSSecurityPolicy?: string;
}
const AwsOpenSearchServiceDomainDomainEndpointOptionsDetails = /*@__PURE__*/ __L.at(
  __c62,
  7,
) as any as S.Schema<AwsOpenSearchServiceDomainDomainEndpointOptionsDetails>;
export interface AwsOpenSearchServiceDomainVpcOptionsDetails {
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
}
const AwsOpenSearchServiceDomainVpcOptionsDetails = /*@__PURE__*/ __L.at(
  __c63,
  0,
) as any as S.Schema<AwsOpenSearchServiceDomainVpcOptionsDetails>;
export interface AwsOpenSearchServiceDomainLogPublishingOption {
  CloudWatchLogsLogGroupArn?: string;
  Enabled?: boolean;
}
export interface AwsOpenSearchServiceDomainLogPublishingOptionsDetails {
  IndexSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
  SearchSlowLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
  AuditLogs?: AwsOpenSearchServiceDomainLogPublishingOption;
}
const AwsOpenSearchServiceDomainLogPublishingOptionsDetails =
  AwsElasticsearchDomainLogPublishingOptions as any as S.Schema<AwsOpenSearchServiceDomainLogPublishingOptionsDetails>;
export interface AwsOpenSearchServiceDomainMasterUserOptionsDetails {
  MasterUserArn?: string;
  MasterUserName?: string;
  MasterUserPassword?: string;
}
const AwsOpenSearchServiceDomainMasterUserOptionsDetails = /*@__PURE__*/ __L.at(
  __c63,
  1,
) as any as S.Schema<AwsOpenSearchServiceDomainMasterUserOptionsDetails>;
export interface AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails {
  Enabled?: boolean;
  InternalUserDatabaseEnabled?: boolean;
  MasterUserOptions?: AwsOpenSearchServiceDomainMasterUserOptionsDetails;
}
const AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails = /*@__PURE__*/ __L.at(
  __c63,
  2,
) as any as S.Schema<AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails>;
export interface AwsOpenSearchServiceDomainDetails {
  Arn?: string;
  AccessPolicies?: string;
  DomainName?: string;
  Id?: string;
  DomainEndpoint?: string;
  EngineVersion?: string;
  EncryptionAtRestOptions?: AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails;
  NodeToNodeEncryptionOptions?: AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails;
  ServiceSoftwareOptions?: AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails;
  ClusterConfig?: AwsOpenSearchServiceDomainClusterConfigDetails;
  DomainEndpointOptions?: AwsOpenSearchServiceDomainDomainEndpointOptionsDetails;
  VpcOptions?: AwsOpenSearchServiceDomainVpcOptionsDetails;
  LogPublishingOptions?: AwsOpenSearchServiceDomainLogPublishingOptionsDetails;
  DomainEndpoints?: { [key: string]: string | undefined };
  AdvancedSecurityOptions?: AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails;
}
const AwsOpenSearchServiceDomainDetails = /*@__PURE__*/ __L.at(
  __c63,
  3,
) as any as S.Schema<AwsOpenSearchServiceDomainDetails>;
export interface AwsEc2VpcEndpointServiceServiceTypeDetails {
  ServiceType?: string;
}
const AwsEc2VpcEndpointServiceServiceTypeDetails = /*@__PURE__*/ __L.at(
  __c63,
  4,
) as any as S.Schema<AwsEc2VpcEndpointServiceServiceTypeDetails>;
export type AwsEc2VpcEndpointServiceServiceTypeList = AwsEc2VpcEndpointServiceServiceTypeDetails[];
const AwsEc2VpcEndpointServiceServiceTypeList = /*@__PURE__*/ __L.at(__c63, 5);
export interface AwsEc2VpcEndpointServiceDetails {
  AcceptanceRequired?: boolean;
  AvailabilityZones?: string[];
  BaseEndpointDnsNames?: string[];
  ManagesVpcEndpoints?: boolean;
  GatewayLoadBalancerArns?: string[];
  NetworkLoadBalancerArns?: string[];
  PrivateDnsName?: string;
  ServiceId?: string;
  ServiceName?: string;
  ServiceState?: string;
  ServiceType?: AwsEc2VpcEndpointServiceServiceTypeDetails[];
}
const AwsEc2VpcEndpointServiceDetails = /*@__PURE__*/ __L.at(
  __c63,
  6,
) as any as S.Schema<AwsEc2VpcEndpointServiceDetails>;
export interface AwsXrayEncryptionConfigDetails {
  KeyId?: string;
  Status?: string;
  Type?: string;
}
const AwsXrayEncryptionConfigDetails = /*@__PURE__*/ __L.at(
  __c63,
  7,
) as any as S.Schema<AwsXrayEncryptionConfigDetails>;
export interface AwsWafRateBasedRuleMatchPredicate {
  DataId?: string;
  Negated?: boolean;
  Type?: string;
}
const AwsWafRateBasedRuleMatchPredicate = /*@__PURE__*/ __L.at(
  __c64,
  0,
) as any as S.Schema<AwsWafRateBasedRuleMatchPredicate>;
export type AwsWafRateBasedRuleMatchPredicateList = AwsWafRateBasedRuleMatchPredicate[];
const AwsWafRateBasedRuleMatchPredicateList = /*@__PURE__*/ __L.at(__c64, 1);
export interface AwsWafRateBasedRuleDetails {
  MetricName?: string;
  Name?: string;
  RateKey?: string;
  RateLimit?: number;
  RuleId?: string;
  MatchPredicates?: AwsWafRateBasedRuleMatchPredicate[];
}
const AwsWafRateBasedRuleDetails = /*@__PURE__*/ __L.at(
  __c64,
  2,
) as any as S.Schema<AwsWafRateBasedRuleDetails>;
export interface AwsWafRegionalRateBasedRuleMatchPredicate {
  DataId?: string;
  Negated?: boolean;
  Type?: string;
}
export type AwsWafRegionalRateBasedRuleMatchPredicateList =
  AwsWafRegionalRateBasedRuleMatchPredicate[];
export interface AwsWafRegionalRateBasedRuleDetails {
  MetricName?: string;
  Name?: string;
  RateKey?: string;
  RateLimit?: number;
  RuleId?: string;
  MatchPredicates?: AwsWafRegionalRateBasedRuleMatchPredicate[];
}
const AwsWafRegionalRateBasedRuleDetails =
  AwsWafRateBasedRuleDetails as any as S.Schema<AwsWafRegionalRateBasedRuleDetails>;
export interface AwsEcrRepositoryImageScanningConfigurationDetails {
  ScanOnPush?: boolean;
}
const AwsEcrRepositoryImageScanningConfigurationDetails = /*@__PURE__*/ __L.at(
  __c64,
  3,
) as any as S.Schema<AwsEcrRepositoryImageScanningConfigurationDetails>;
export interface AwsEcrRepositoryLifecyclePolicyDetails {
  LifecyclePolicyText?: string;
  RegistryId?: string;
}
const AwsEcrRepositoryLifecyclePolicyDetails = /*@__PURE__*/ __L.at(
  __c64,
  4,
) as any as S.Schema<AwsEcrRepositoryLifecyclePolicyDetails>;
export interface AwsEcrRepositoryDetails {
  Arn?: string;
  ImageScanningConfiguration?: AwsEcrRepositoryImageScanningConfigurationDetails;
  ImageTagMutability?: string;
  LifecyclePolicy?: AwsEcrRepositoryLifecyclePolicyDetails;
  RepositoryName?: string;
  RepositoryPolicyText?: string;
}
const AwsEcrRepositoryDetails = /*@__PURE__*/ __L.at(
  __c64,
  5,
) as any as S.Schema<AwsEcrRepositoryDetails>;
export interface AwsEksClusterResourcesVpcConfigDetails {
  SecurityGroupIds?: string[];
  SubnetIds?: string[];
  EndpointPublicAccess?: boolean;
}
const AwsEksClusterResourcesVpcConfigDetails = /*@__PURE__*/ __L.at(
  __c64,
  6,
) as any as S.Schema<AwsEksClusterResourcesVpcConfigDetails>;
export interface AwsEksClusterLoggingClusterLoggingDetails {
  Enabled?: boolean;
  Types?: string[];
}
const AwsEksClusterLoggingClusterLoggingDetails = /*@__PURE__*/ __L.at(
  __c64,
  7,
) as any as S.Schema<AwsEksClusterLoggingClusterLoggingDetails>;
export type AwsEksClusterLoggingClusterLoggingList = AwsEksClusterLoggingClusterLoggingDetails[];
const AwsEksClusterLoggingClusterLoggingList = /*@__PURE__*/ __L.at(__c65, 0);
export interface AwsEksClusterLoggingDetails {
  ClusterLogging?: AwsEksClusterLoggingClusterLoggingDetails[];
}
const AwsEksClusterLoggingDetails = /*@__PURE__*/ __L.at(
  __c65,
  1,
) as any as S.Schema<AwsEksClusterLoggingDetails>;
export interface AwsEksClusterDetails {
  Arn?: string;
  CertificateAuthorityData?: string;
  ClusterStatus?: string;
  Endpoint?: string;
  Name?: string;
  ResourcesVpcConfig?: AwsEksClusterResourcesVpcConfigDetails;
  RoleArn?: string;
  Version?: string;
  Logging?: AwsEksClusterLoggingDetails;
}
const AwsEksClusterDetails = /*@__PURE__*/ __L.at(
  __c65,
  2,
) as any as S.Schema<AwsEksClusterDetails>;
export interface FirewallPolicyStatefulRuleGroupReferencesDetails {
  ResourceArn?: string;
}
const FirewallPolicyStatefulRuleGroupReferencesDetails = /*@__PURE__*/ __L.at(
  __c65,
  3,
) as any as S.Schema<FirewallPolicyStatefulRuleGroupReferencesDetails>;
export type FirewallPolicyStatefulRuleGroupReferencesList =
  FirewallPolicyStatefulRuleGroupReferencesDetails[];
const FirewallPolicyStatefulRuleGroupReferencesList = /*@__PURE__*/ __L.at(__c65, 4);
export interface StatelessCustomPublishMetricActionDimension {
  Value?: string;
}
const StatelessCustomPublishMetricActionDimension = /*@__PURE__*/ __L.at(
  __c65,
  5,
) as any as S.Schema<StatelessCustomPublishMetricActionDimension>;
export type StatelessCustomPublishMetricActionDimensionsList =
  StatelessCustomPublishMetricActionDimension[];
const StatelessCustomPublishMetricActionDimensionsList = /*@__PURE__*/ __L.at(__c65, 6);
export interface StatelessCustomPublishMetricAction {
  Dimensions?: StatelessCustomPublishMetricActionDimension[];
}
const StatelessCustomPublishMetricAction = /*@__PURE__*/ __L.at(
  __c65,
  7,
) as any as S.Schema<StatelessCustomPublishMetricAction>;
export interface StatelessCustomActionDefinition {
  PublishMetricAction?: StatelessCustomPublishMetricAction;
}
const StatelessCustomActionDefinition = /*@__PURE__*/ __L.at(
  __c66,
  0,
) as any as S.Schema<StatelessCustomActionDefinition>;
export interface FirewallPolicyStatelessCustomActionsDetails {
  ActionDefinition?: StatelessCustomActionDefinition;
  ActionName?: string;
}
const FirewallPolicyStatelessCustomActionsDetails = /*@__PURE__*/ __L.at(
  __c66,
  1,
) as any as S.Schema<FirewallPolicyStatelessCustomActionsDetails>;
export type FirewallPolicyStatelessCustomActionsList =
  FirewallPolicyStatelessCustomActionsDetails[];
const FirewallPolicyStatelessCustomActionsList = /*@__PURE__*/ __L.at(__c66, 2);
export interface FirewallPolicyStatelessRuleGroupReferencesDetails {
  Priority?: number;
  ResourceArn?: string;
}
const FirewallPolicyStatelessRuleGroupReferencesDetails = /*@__PURE__*/ __L.at(
  __c66,
  3,
) as any as S.Schema<FirewallPolicyStatelessRuleGroupReferencesDetails>;
export type FirewallPolicyStatelessRuleGroupReferencesList =
  FirewallPolicyStatelessRuleGroupReferencesDetails[];
const FirewallPolicyStatelessRuleGroupReferencesList = /*@__PURE__*/ __L.at(__c66, 4);
export interface FirewallPolicyDetails {
  StatefulRuleGroupReferences?: FirewallPolicyStatefulRuleGroupReferencesDetails[];
  StatelessCustomActions?: FirewallPolicyStatelessCustomActionsDetails[];
  StatelessDefaultActions?: string[];
  StatelessFragmentDefaultActions?: string[];
  StatelessRuleGroupReferences?: FirewallPolicyStatelessRuleGroupReferencesDetails[];
}
const FirewallPolicyDetails = /*@__PURE__*/ __L.at(
  __c66,
  5,
) as any as S.Schema<FirewallPolicyDetails>;
export interface AwsNetworkFirewallFirewallPolicyDetails {
  FirewallPolicy?: FirewallPolicyDetails;
  FirewallPolicyArn?: string;
  FirewallPolicyId?: string;
  FirewallPolicyName?: string;
  Description?: string;
}
const AwsNetworkFirewallFirewallPolicyDetails = /*@__PURE__*/ __L.at(
  __c66,
  6,
) as any as S.Schema<AwsNetworkFirewallFirewallPolicyDetails>;
export interface AwsNetworkFirewallFirewallSubnetMappingsDetails {
  SubnetId?: string;
}
const AwsNetworkFirewallFirewallSubnetMappingsDetails = /*@__PURE__*/ __L.at(
  __c66,
  7,
) as any as S.Schema<AwsNetworkFirewallFirewallSubnetMappingsDetails>;
export type AwsNetworkFirewallFirewallSubnetMappingsList =
  AwsNetworkFirewallFirewallSubnetMappingsDetails[];
const AwsNetworkFirewallFirewallSubnetMappingsList = /*@__PURE__*/ __L.at(__c67, 0);
export interface AwsNetworkFirewallFirewallDetails {
  DeleteProtection?: boolean;
  Description?: string;
  FirewallArn?: string;
  FirewallId?: string;
  FirewallName?: string;
  FirewallPolicyArn?: string;
  FirewallPolicyChangeProtection?: boolean;
  SubnetChangeProtection?: boolean;
  SubnetMappings?: AwsNetworkFirewallFirewallSubnetMappingsDetails[];
  VpcId?: string;
}
const AwsNetworkFirewallFirewallDetails = /*@__PURE__*/ __L.at(
  __c67,
  1,
) as any as S.Schema<AwsNetworkFirewallFirewallDetails>;
export interface RuleGroupVariablesIpSetsDetails {
  Definition?: string[];
}
const RuleGroupVariablesIpSetsDetails = /*@__PURE__*/ __L.at(
  __c67,
  2,
) as any as S.Schema<RuleGroupVariablesIpSetsDetails>;
export interface RuleGroupVariablesPortSetsDetails {
  Definition?: string[];
}
const RuleGroupVariablesPortSetsDetails =
  RuleGroupVariablesIpSetsDetails as any as S.Schema<RuleGroupVariablesPortSetsDetails>;
export interface RuleGroupVariables {
  IpSets?: RuleGroupVariablesIpSetsDetails;
  PortSets?: RuleGroupVariablesPortSetsDetails;
}
const RuleGroupVariables = /*@__PURE__*/ __L.at(__c67, 3) as any as S.Schema<RuleGroupVariables>;
export interface RuleGroupSourceListDetails {
  GeneratedRulesType?: string;
  TargetTypes?: string[];
  Targets?: string[];
}
const RuleGroupSourceListDetails = /*@__PURE__*/ __L.at(
  __c67,
  4,
) as any as S.Schema<RuleGroupSourceListDetails>;
export interface RuleGroupSourceStatefulRulesHeaderDetails {
  Destination?: string;
  DestinationPort?: string;
  Direction?: string;
  Protocol?: string;
  Source?: string;
  SourcePort?: string;
}
const RuleGroupSourceStatefulRulesHeaderDetails = /*@__PURE__*/ __L.at(
  __c67,
  5,
) as any as S.Schema<RuleGroupSourceStatefulRulesHeaderDetails>;
export type RuleGroupSourceStatefulRulesRuleOptionsSettingsList = string[];
const RuleGroupSourceStatefulRulesRuleOptionsSettingsList =
  AutomationRulesArnsList as any as S.Schema<RuleGroupSourceStatefulRulesRuleOptionsSettingsList>;
export interface RuleGroupSourceStatefulRulesOptionsDetails {
  Keyword?: string;
  Settings?: string[];
}
const RuleGroupSourceStatefulRulesOptionsDetails = /*@__PURE__*/ __L.at(
  __c67,
  6,
) as any as S.Schema<RuleGroupSourceStatefulRulesOptionsDetails>;
export type RuleGroupSourceStatefulRulesOptionsList = RuleGroupSourceStatefulRulesOptionsDetails[];
const RuleGroupSourceStatefulRulesOptionsList = /*@__PURE__*/ __L.at(__c67, 7);
export interface RuleGroupSourceStatefulRulesDetails {
  Action?: string;
  Header?: RuleGroupSourceStatefulRulesHeaderDetails;
  RuleOptions?: RuleGroupSourceStatefulRulesOptionsDetails[];
}
const RuleGroupSourceStatefulRulesDetails = /*@__PURE__*/ __L.at(
  __c68,
  0,
) as any as S.Schema<RuleGroupSourceStatefulRulesDetails>;
export type RuleGroupSourceStatefulRulesList = RuleGroupSourceStatefulRulesDetails[];
const RuleGroupSourceStatefulRulesList = /*@__PURE__*/ __L.at(__c68, 1);
export interface RuleGroupSourceCustomActionsDetails {
  ActionDefinition?: StatelessCustomActionDefinition;
  ActionName?: string;
}
export type RuleGroupSourceCustomActionsList = RuleGroupSourceCustomActionsDetails[];
const RuleGroupSourceCustomActionsList =
  FirewallPolicyStatelessCustomActionsList as any as S.Schema<RuleGroupSourceCustomActionsList>;
export interface RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts {
  FromPort?: number;
  ToPort?: number;
}
const RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts = /*@__PURE__*/ __L.at(
  __c68,
  2,
) as any as S.Schema<RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts>;
export type RuleGroupSourceStatelessRuleMatchAttributesDestinationPortsList =
  RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts[];
const RuleGroupSourceStatelessRuleMatchAttributesDestinationPortsList = /*@__PURE__*/ __L.at(
  __c68,
  3,
);
export interface RuleGroupSourceStatelessRuleMatchAttributesDestinations {
  AddressDefinition?: string;
}
const RuleGroupSourceStatelessRuleMatchAttributesDestinations = /*@__PURE__*/ __L.at(
  __c68,
  4,
) as any as S.Schema<RuleGroupSourceStatelessRuleMatchAttributesDestinations>;
export type RuleGroupSourceStatelessRuleMatchAttributesDestinationsList =
  RuleGroupSourceStatelessRuleMatchAttributesDestinations[];
const RuleGroupSourceStatelessRuleMatchAttributesDestinationsList = /*@__PURE__*/ __L.at(__c68, 5);
export type RuleGroupSourceStatelessRuleMatchAttributesProtocolsList = number[];
const RuleGroupSourceStatelessRuleMatchAttributesProtocolsList = /*@__PURE__*/ __L.at(__c68, 6);
export interface RuleGroupSourceStatelessRuleMatchAttributesSourcePorts {
  FromPort?: number;
  ToPort?: number;
}
const RuleGroupSourceStatelessRuleMatchAttributesSourcePorts = /*@__PURE__*/ __L.at(
  __c68,
  7,
) as any as S.Schema<RuleGroupSourceStatelessRuleMatchAttributesSourcePorts>;
export type RuleGroupSourceStatelessRuleMatchAttributesSourcePortsList =
  RuleGroupSourceStatelessRuleMatchAttributesSourcePorts[];
const RuleGroupSourceStatelessRuleMatchAttributesSourcePortsList = /*@__PURE__*/ __L.at(__c69, 0);
export interface RuleGroupSourceStatelessRuleMatchAttributesSources {
  AddressDefinition?: string;
}
export type RuleGroupSourceStatelessRuleMatchAttributesSourcesList =
  RuleGroupSourceStatelessRuleMatchAttributesSources[];
const RuleGroupSourceStatelessRuleMatchAttributesSourcesList =
  RuleGroupSourceStatelessRuleMatchAttributesDestinationsList as any as S.Schema<RuleGroupSourceStatelessRuleMatchAttributesSourcesList>;
export interface RuleGroupSourceStatelessRuleMatchAttributesTcpFlags {
  Flags?: string[];
  Masks?: string[];
}
const RuleGroupSourceStatelessRuleMatchAttributesTcpFlags = /*@__PURE__*/ __L.at(
  __c69,
  1,
) as any as S.Schema<RuleGroupSourceStatelessRuleMatchAttributesTcpFlags>;
export type RuleGroupSourceStatelessRuleMatchAttributesTcpFlagsList =
  RuleGroupSourceStatelessRuleMatchAttributesTcpFlags[];
const RuleGroupSourceStatelessRuleMatchAttributesTcpFlagsList = /*@__PURE__*/ __L.at(__c69, 2);
export interface RuleGroupSourceStatelessRuleMatchAttributes {
  DestinationPorts?: RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts[];
  Destinations?: RuleGroupSourceStatelessRuleMatchAttributesDestinations[];
  Protocols?: number[];
  SourcePorts?: RuleGroupSourceStatelessRuleMatchAttributesSourcePorts[];
  Sources?: RuleGroupSourceStatelessRuleMatchAttributesSources[];
  TcpFlags?: RuleGroupSourceStatelessRuleMatchAttributesTcpFlags[];
}
const RuleGroupSourceStatelessRuleMatchAttributes = /*@__PURE__*/ __L.at(
  __c69,
  3,
) as any as S.Schema<RuleGroupSourceStatelessRuleMatchAttributes>;
export interface RuleGroupSourceStatelessRuleDefinition {
  Actions?: string[];
  MatchAttributes?: RuleGroupSourceStatelessRuleMatchAttributes;
}
const RuleGroupSourceStatelessRuleDefinition = /*@__PURE__*/ __L.at(
  __c69,
  4,
) as any as S.Schema<RuleGroupSourceStatelessRuleDefinition>;
export interface RuleGroupSourceStatelessRulesDetails {
  Priority?: number;
  RuleDefinition?: RuleGroupSourceStatelessRuleDefinition;
}
const RuleGroupSourceStatelessRulesDetails = /*@__PURE__*/ __L.at(
  __c69,
  5,
) as any as S.Schema<RuleGroupSourceStatelessRulesDetails>;
export type RuleGroupSourceStatelessRulesList = RuleGroupSourceStatelessRulesDetails[];
const RuleGroupSourceStatelessRulesList = /*@__PURE__*/ __L.at(__c69, 6);
export interface RuleGroupSourceStatelessRulesAndCustomActionsDetails {
  CustomActions?: RuleGroupSourceCustomActionsDetails[];
  StatelessRules?: RuleGroupSourceStatelessRulesDetails[];
}
const RuleGroupSourceStatelessRulesAndCustomActionsDetails = /*@__PURE__*/ __L.at(
  __c69,
  7,
) as any as S.Schema<RuleGroupSourceStatelessRulesAndCustomActionsDetails>;
export interface RuleGroupSource {
  RulesSourceList?: RuleGroupSourceListDetails;
  RulesString?: string;
  StatefulRules?: RuleGroupSourceStatefulRulesDetails[];
  StatelessRulesAndCustomActions?: RuleGroupSourceStatelessRulesAndCustomActionsDetails;
}
const RuleGroupSource = /*@__PURE__*/ __L.at(__c70, 0) as any as S.Schema<RuleGroupSource>;
export interface RuleGroupDetails {
  RuleVariables?: RuleGroupVariables;
  RulesSource?: RuleGroupSource;
}
const RuleGroupDetails = /*@__PURE__*/ __L.at(__c70, 1) as any as S.Schema<RuleGroupDetails>;
export interface AwsNetworkFirewallRuleGroupDetails {
  Capacity?: number;
  Description?: string;
  RuleGroup?: RuleGroupDetails;
  RuleGroupArn?: string;
  RuleGroupId?: string;
  RuleGroupName?: string;
  Type?: string;
}
const AwsNetworkFirewallRuleGroupDetails = /*@__PURE__*/ __L.at(
  __c70,
  2,
) as any as S.Schema<AwsNetworkFirewallRuleGroupDetails>;
export interface AwsRdsDbSecurityGroupEc2SecurityGroup {
  Ec2SecurityGroupId?: string;
  Ec2SecurityGroupName?: string;
  Ec2SecurityGroupOwnerId?: string;
  Status?: string;
}
const AwsRdsDbSecurityGroupEc2SecurityGroup = /*@__PURE__*/ __L.at(
  __c70,
  3,
) as any as S.Schema<AwsRdsDbSecurityGroupEc2SecurityGroup>;
export type AwsRdsDbSecurityGroupEc2SecurityGroups = AwsRdsDbSecurityGroupEc2SecurityGroup[];
const AwsRdsDbSecurityGroupEc2SecurityGroups = /*@__PURE__*/ __L.at(__c70, 4);
export interface AwsRdsDbSecurityGroupIpRange {
  CidrIp?: string;
  Status?: string;
}
const AwsRdsDbSecurityGroupIpRange = /*@__PURE__*/ __L.at(
  __c70,
  5,
) as any as S.Schema<AwsRdsDbSecurityGroupIpRange>;
export type AwsRdsDbSecurityGroupIpRanges = AwsRdsDbSecurityGroupIpRange[];
const AwsRdsDbSecurityGroupIpRanges = /*@__PURE__*/ __L.at(__c70, 6);
export interface AwsRdsDbSecurityGroupDetails {
  DbSecurityGroupArn?: string;
  DbSecurityGroupDescription?: string;
  DbSecurityGroupName?: string;
  Ec2SecurityGroups?: AwsRdsDbSecurityGroupEc2SecurityGroup[];
  IpRanges?: AwsRdsDbSecurityGroupIpRange[];
  OwnerId?: string;
  VpcId?: string;
}
const AwsRdsDbSecurityGroupDetails = /*@__PURE__*/ __L.at(
  __c70,
  7,
) as any as S.Schema<AwsRdsDbSecurityGroupDetails>;
export interface AwsKinesisStreamStreamEncryptionDetails {
  EncryptionType?: string;
  KeyId?: string;
}
const AwsKinesisStreamStreamEncryptionDetails = /*@__PURE__*/ __L.at(
  __c71,
  0,
) as any as S.Schema<AwsKinesisStreamStreamEncryptionDetails>;
export interface AwsKinesisStreamDetails {
  Name?: string;
  Arn?: string;
  StreamEncryption?: AwsKinesisStreamStreamEncryptionDetails;
  ShardCount?: number;
  RetentionPeriodHours?: number;
}
const AwsKinesisStreamDetails = /*@__PURE__*/ __L.at(
  __c71,
  1,
) as any as S.Schema<AwsKinesisStreamDetails>;
export interface AwsEc2TransitGatewayDetails {
  Id?: string;
  Description?: string;
  DefaultRouteTablePropagation?: string;
  AutoAcceptSharedAttachments?: string;
  DefaultRouteTableAssociation?: string;
  TransitGatewayCidrBlocks?: string[];
  AssociationDefaultRouteTableId?: string;
  PropagationDefaultRouteTableId?: string;
  VpnEcmpSupport?: string;
  DnsSupport?: string;
  MulticastSupport?: string;
  AmazonSideAsn?: number;
}
const AwsEc2TransitGatewayDetails = /*@__PURE__*/ __L.at(
  __c71,
  2,
) as any as S.Schema<AwsEc2TransitGatewayDetails>;
export interface AwsEfsAccessPointPosixUserDetails {
  Gid?: string;
  SecondaryGids?: string[];
  Uid?: string;
}
const AwsEfsAccessPointPosixUserDetails = /*@__PURE__*/ __L.at(
  __c71,
  3,
) as any as S.Schema<AwsEfsAccessPointPosixUserDetails>;
export interface AwsEfsAccessPointRootDirectoryCreationInfoDetails {
  OwnerGid?: string;
  OwnerUid?: string;
  Permissions?: string;
}
const AwsEfsAccessPointRootDirectoryCreationInfoDetails = /*@__PURE__*/ __L.at(
  __c71,
  4,
) as any as S.Schema<AwsEfsAccessPointRootDirectoryCreationInfoDetails>;
export interface AwsEfsAccessPointRootDirectoryDetails {
  CreationInfo?: AwsEfsAccessPointRootDirectoryCreationInfoDetails;
  Path?: string;
}
const AwsEfsAccessPointRootDirectoryDetails = /*@__PURE__*/ __L.at(
  __c71,
  5,
) as any as S.Schema<AwsEfsAccessPointRootDirectoryDetails>;
export interface AwsEfsAccessPointDetails {
  AccessPointId?: string;
  Arn?: string;
  ClientToken?: string;
  FileSystemId?: string;
  PosixUser?: AwsEfsAccessPointPosixUserDetails;
  RootDirectory?: AwsEfsAccessPointRootDirectoryDetails;
}
const AwsEfsAccessPointDetails = /*@__PURE__*/ __L.at(
  __c71,
  6,
) as any as S.Schema<AwsEfsAccessPointDetails>;
export interface AwsCloudFormationStackDriftInformationDetails {
  StackDriftStatus?: string;
}
const AwsCloudFormationStackDriftInformationDetails = /*@__PURE__*/ __L.at(
  __c71,
  7,
) as any as S.Schema<AwsCloudFormationStackDriftInformationDetails>;
export interface AwsCloudFormationStackOutputsDetails {
  Description?: string;
  OutputKey?: string;
  OutputValue?: string;
}
const AwsCloudFormationStackOutputsDetails = /*@__PURE__*/ __L.at(
  __c72,
  0,
) as any as S.Schema<AwsCloudFormationStackOutputsDetails>;
export type AwsCloudFormationStackOutputsList = AwsCloudFormationStackOutputsDetails[];
const AwsCloudFormationStackOutputsList = /*@__PURE__*/ __L.at(__c72, 1);
export interface AwsCloudFormationStackDetails {
  Capabilities?: string[];
  CreationTime?: string;
  Description?: string;
  DisableRollback?: boolean;
  DriftInformation?: AwsCloudFormationStackDriftInformationDetails;
  EnableTerminationProtection?: boolean;
  LastUpdatedTime?: string;
  NotificationArns?: string[];
  Outputs?: AwsCloudFormationStackOutputsDetails[];
  RoleArn?: string;
  StackId?: string;
  StackName?: string;
  StackStatus?: string;
  StackStatusReason?: string;
  TimeoutInMinutes?: number;
}
const AwsCloudFormationStackDetails = /*@__PURE__*/ __L.at(
  __c72,
  2,
) as any as S.Schema<AwsCloudFormationStackDetails>;
export interface AwsCloudWatchAlarmDimensionsDetails {
  Name?: string;
  Value?: string;
}
export type AwsCloudWatchAlarmDimensionsList = AwsCloudWatchAlarmDimensionsDetails[];
const AwsCloudWatchAlarmDimensionsList =
  AwsEcsClusterClusterSettingsList as any as S.Schema<AwsCloudWatchAlarmDimensionsList>;
export interface AwsCloudWatchAlarmDetails {
  ActionsEnabled?: boolean;
  AlarmActions?: string[];
  AlarmArn?: string;
  AlarmConfigurationUpdatedTimestamp?: string;
  AlarmDescription?: string;
  AlarmName?: string;
  ComparisonOperator?: string;
  DatapointsToAlarm?: number;
  Dimensions?: AwsCloudWatchAlarmDimensionsDetails[];
  EvaluateLowSampleCountPercentile?: string;
  EvaluationPeriods?: number;
  ExtendedStatistic?: string;
  InsufficientDataActions?: string[];
  MetricName?: string;
  Namespace?: string;
  OkActions?: string[];
  Period?: number;
  Statistic?: string;
  Threshold?: number;
  ThresholdMetricId?: string;
  TreatMissingData?: string;
  Unit?: string;
}
const AwsCloudWatchAlarmDetails = /*@__PURE__*/ __L.at(
  __c72,
  3,
) as any as S.Schema<AwsCloudWatchAlarmDetails>;
export interface VpcInfoCidrBlockSetDetails {
  CidrBlock?: string;
}
const VpcInfoCidrBlockSetDetails = /*@__PURE__*/ __L.at(
  __c72,
  4,
) as any as S.Schema<VpcInfoCidrBlockSetDetails>;
export type VpcInfoCidrBlockSetList = VpcInfoCidrBlockSetDetails[];
const VpcInfoCidrBlockSetList = /*@__PURE__*/ __L.at(__c72, 5);
export interface VpcInfoIpv6CidrBlockSetDetails {
  Ipv6CidrBlock?: string;
}
const VpcInfoIpv6CidrBlockSetDetails = /*@__PURE__*/ __L.at(
  __c72,
  6,
) as any as S.Schema<VpcInfoIpv6CidrBlockSetDetails>;
export type VpcInfoIpv6CidrBlockSetList = VpcInfoIpv6CidrBlockSetDetails[];
const VpcInfoIpv6CidrBlockSetList = /*@__PURE__*/ __L.at(__c72, 7);
export interface VpcInfoPeeringOptionsDetails {
  AllowDnsResolutionFromRemoteVpc?: boolean;
  AllowEgressFromLocalClassicLinkToRemoteVpc?: boolean;
  AllowEgressFromLocalVpcToRemoteClassicLink?: boolean;
}
const VpcInfoPeeringOptionsDetails = /*@__PURE__*/ __L.at(
  __c73,
  0,
) as any as S.Schema<VpcInfoPeeringOptionsDetails>;
export interface AwsEc2VpcPeeringConnectionVpcInfoDetails {
  CidrBlock?: string;
  CidrBlockSet?: VpcInfoCidrBlockSetDetails[];
  Ipv6CidrBlockSet?: VpcInfoIpv6CidrBlockSetDetails[];
  OwnerId?: string;
  PeeringOptions?: VpcInfoPeeringOptionsDetails;
  Region?: string;
  VpcId?: string;
}
const AwsEc2VpcPeeringConnectionVpcInfoDetails = /*@__PURE__*/ __L.at(
  __c73,
  1,
) as any as S.Schema<AwsEc2VpcPeeringConnectionVpcInfoDetails>;
export interface AwsEc2VpcPeeringConnectionStatusDetails {
  Code?: string;
  Message?: string;
}
const AwsEc2VpcPeeringConnectionStatusDetails = /*@__PURE__*/ __L.at(
  __c73,
  2,
) as any as S.Schema<AwsEc2VpcPeeringConnectionStatusDetails>;
export interface AwsEc2VpcPeeringConnectionDetails {
  AccepterVpcInfo?: AwsEc2VpcPeeringConnectionVpcInfoDetails;
  ExpirationTime?: string;
  RequesterVpcInfo?: AwsEc2VpcPeeringConnectionVpcInfoDetails;
  Status?: AwsEc2VpcPeeringConnectionStatusDetails;
  VpcPeeringConnectionId?: string;
}
const AwsEc2VpcPeeringConnectionDetails = /*@__PURE__*/ __L.at(
  __c73,
  3,
) as any as S.Schema<AwsEc2VpcPeeringConnectionDetails>;
export interface AwsWafRegionalRuleGroupRulesActionDetails {
  Type?: string;
}
const AwsWafRegionalRuleGroupRulesActionDetails =
  AwsEcsServiceDeploymentControllerDetails as any as S.Schema<AwsWafRegionalRuleGroupRulesActionDetails>;
export interface AwsWafRegionalRuleGroupRulesDetails {
  Action?: AwsWafRegionalRuleGroupRulesActionDetails;
  Priority?: number;
  RuleId?: string;
  Type?: string;
}
const AwsWafRegionalRuleGroupRulesDetails = /*@__PURE__*/ __L.at(
  __c73,
  4,
) as any as S.Schema<AwsWafRegionalRuleGroupRulesDetails>;
export type AwsWafRegionalRuleGroupRulesList = AwsWafRegionalRuleGroupRulesDetails[];
const AwsWafRegionalRuleGroupRulesList = /*@__PURE__*/ __L.at(__c73, 5);
export interface AwsWafRegionalRuleGroupDetails {
  MetricName?: string;
  Name?: string;
  RuleGroupId?: string;
  Rules?: AwsWafRegionalRuleGroupRulesDetails[];
}
const AwsWafRegionalRuleGroupDetails = /*@__PURE__*/ __L.at(
  __c73,
  6,
) as any as S.Schema<AwsWafRegionalRuleGroupDetails>;
export interface AwsWafRegionalRulePredicateListDetails {
  DataId?: string;
  Negated?: boolean;
  Type?: string;
}
export type AwsWafRegionalRulePredicateList = AwsWafRegionalRulePredicateListDetails[];
const AwsWafRegionalRulePredicateList =
  AwsWafRateBasedRuleMatchPredicateList as any as S.Schema<AwsWafRegionalRulePredicateList>;
export interface AwsWafRegionalRuleDetails {
  MetricName?: string;
  Name?: string;
  PredicateList?: AwsWafRegionalRulePredicateListDetails[];
  RuleId?: string;
}
const AwsWafRegionalRuleDetails = /*@__PURE__*/ __L.at(
  __c73,
  7,
) as any as S.Schema<AwsWafRegionalRuleDetails>;
export interface AwsWafRegionalWebAclRulesListActionDetails {
  Type?: string;
}
const AwsWafRegionalWebAclRulesListActionDetails =
  AwsEcsServiceDeploymentControllerDetails as any as S.Schema<AwsWafRegionalWebAclRulesListActionDetails>;
export interface AwsWafRegionalWebAclRulesListOverrideActionDetails {
  Type?: string;
}
const AwsWafRegionalWebAclRulesListOverrideActionDetails =
  AwsEcsServiceDeploymentControllerDetails as any as S.Schema<AwsWafRegionalWebAclRulesListOverrideActionDetails>;
export interface AwsWafRegionalWebAclRulesListDetails {
  Action?: AwsWafRegionalWebAclRulesListActionDetails;
  OverrideAction?: AwsWafRegionalWebAclRulesListOverrideActionDetails;
  Priority?: number;
  RuleId?: string;
  Type?: string;
}
const AwsWafRegionalWebAclRulesListDetails = /*@__PURE__*/ __L.at(
  __c74,
  0,
) as any as S.Schema<AwsWafRegionalWebAclRulesListDetails>;
export type AwsWafRegionalWebAclRulesList = AwsWafRegionalWebAclRulesListDetails[];
const AwsWafRegionalWebAclRulesList = /*@__PURE__*/ __L.at(__c74, 1);
export interface AwsWafRegionalWebAclDetails {
  DefaultAction?: string;
  MetricName?: string;
  Name?: string;
  RulesList?: AwsWafRegionalWebAclRulesListDetails[];
  WebAclId?: string;
}
const AwsWafRegionalWebAclDetails = /*@__PURE__*/ __L.at(
  __c74,
  2,
) as any as S.Schema<AwsWafRegionalWebAclDetails>;
export interface AwsWafRulePredicateListDetails {
  DataId?: string;
  Negated?: boolean;
  Type?: string;
}
const AwsWafRulePredicateListDetails =
  AwsWafRateBasedRuleMatchPredicate as any as S.Schema<AwsWafRulePredicateListDetails>;
export type AwsWafRulePredicateList = AwsWafRulePredicateListDetails[];
const AwsWafRulePredicateList = /*@__PURE__*/ __L.at(__c74, 3);
export interface AwsWafRuleDetails {
  MetricName?: string;
  Name?: string;
  PredicateList?: AwsWafRulePredicateListDetails[];
  RuleId?: string;
}
const AwsWafRuleDetails = /*@__PURE__*/ __L.at(__c74, 4) as any as S.Schema<AwsWafRuleDetails>;
export interface AwsWafRuleGroupRulesActionDetails {
  Type?: string;
}
export interface AwsWafRuleGroupRulesDetails {
  Action?: AwsWafRuleGroupRulesActionDetails;
  Priority?: number;
  RuleId?: string;
  Type?: string;
}
const AwsWafRuleGroupRulesDetails =
  AwsWafRegionalRuleGroupRulesDetails as any as S.Schema<AwsWafRuleGroupRulesDetails>;
export type AwsWafRuleGroupRulesList = AwsWafRuleGroupRulesDetails[];
const AwsWafRuleGroupRulesList = /*@__PURE__*/ __L.at(__c74, 5);
export interface AwsWafRuleGroupDetails {
  MetricName?: string;
  Name?: string;
  RuleGroupId?: string;
  Rules?: AwsWafRuleGroupRulesDetails[];
}
const AwsWafRuleGroupDetails = /*@__PURE__*/ __L.at(
  __c74,
  6,
) as any as S.Schema<AwsWafRuleGroupDetails>;
export interface AwsEcsTaskVolumeHostDetails {
  SourcePath?: string;
}
const AwsEcsTaskVolumeHostDetails =
  AwsEcsTaskDefinitionVolumesHostDetails as any as S.Schema<AwsEcsTaskVolumeHostDetails>;
export interface AwsEcsTaskVolumeDetails {
  Name?: string;
  Host?: AwsEcsTaskVolumeHostDetails;
}
const AwsEcsTaskVolumeDetails = /*@__PURE__*/ __L.at(
  __c74,
  7,
) as any as S.Schema<AwsEcsTaskVolumeDetails>;
export type AwsEcsTaskVolumeDetailsList = AwsEcsTaskVolumeDetails[];
const AwsEcsTaskVolumeDetailsList = /*@__PURE__*/ __L.at(__c75, 0);
export type AwsEcsContainerDetailsList = AwsEcsContainerDetails[];
const AwsEcsContainerDetailsList = /*@__PURE__*/ __L.at(__c75, 1);
export interface AwsEcsTaskDetails {
  ClusterArn?: string;
  TaskDefinitionArn?: string;
  Version?: string;
  CreatedAt?: string;
  StartedAt?: string;
  StartedBy?: string;
  Group?: string;
  Volumes?: AwsEcsTaskVolumeDetails[];
  Containers?: AwsEcsContainerDetails[];
}
const AwsEcsTaskDetails = /*@__PURE__*/ __L.at(__c75, 2) as any as S.Schema<AwsEcsTaskDetails>;
export interface AwsBackupBackupVaultNotificationsDetails {
  BackupVaultEvents?: string[];
  SnsTopicArn?: string;
}
const AwsBackupBackupVaultNotificationsDetails = /*@__PURE__*/ __L.at(
  __c75,
  3,
) as any as S.Schema<AwsBackupBackupVaultNotificationsDetails>;
export interface AwsBackupBackupVaultDetails {
  BackupVaultArn?: string;
  BackupVaultName?: string;
  EncryptionKeyArn?: string;
  Notifications?: AwsBackupBackupVaultNotificationsDetails;
  AccessPolicy?: string;
}
const AwsBackupBackupVaultDetails = /*@__PURE__*/ __L.at(
  __c75,
  4,
) as any as S.Schema<AwsBackupBackupVaultDetails>;
export interface AwsBackupBackupPlanAdvancedBackupSettingsDetails {
  BackupOptions?: { [key: string]: string | undefined };
  ResourceType?: string;
}
const AwsBackupBackupPlanAdvancedBackupSettingsDetails = /*@__PURE__*/ __L.at(
  __c75,
  5,
) as any as S.Schema<AwsBackupBackupPlanAdvancedBackupSettingsDetails>;
export type AwsBackupBackupPlanAdvancedBackupSettingsList =
  AwsBackupBackupPlanAdvancedBackupSettingsDetails[];
const AwsBackupBackupPlanAdvancedBackupSettingsList = /*@__PURE__*/ __L.at(__c75, 6);
export interface AwsBackupBackupPlanLifecycleDetails {
  DeleteAfterDays?: number;
  MoveToColdStorageAfterDays?: number;
}
const AwsBackupBackupPlanLifecycleDetails = /*@__PURE__*/ __L.at(
  __c75,
  7,
) as any as S.Schema<AwsBackupBackupPlanLifecycleDetails>;
export interface AwsBackupBackupPlanRuleCopyActionsDetails {
  DestinationBackupVaultArn?: string;
  Lifecycle?: AwsBackupBackupPlanLifecycleDetails;
}
const AwsBackupBackupPlanRuleCopyActionsDetails = /*@__PURE__*/ __L.at(
  __c76,
  0,
) as any as S.Schema<AwsBackupBackupPlanRuleCopyActionsDetails>;
export type AwsBackupBackupPlanRuleCopyActionsList = AwsBackupBackupPlanRuleCopyActionsDetails[];
const AwsBackupBackupPlanRuleCopyActionsList = /*@__PURE__*/ __L.at(__c76, 1);
export interface AwsBackupBackupPlanRuleDetails {
  TargetBackupVault?: string;
  StartWindowMinutes?: number;
  ScheduleExpression?: string;
  RuleName?: string;
  RuleId?: string;
  EnableContinuousBackup?: boolean;
  CompletionWindowMinutes?: number;
  CopyActions?: AwsBackupBackupPlanRuleCopyActionsDetails[];
  Lifecycle?: AwsBackupBackupPlanLifecycleDetails;
}
const AwsBackupBackupPlanRuleDetails = /*@__PURE__*/ __L.at(
  __c76,
  2,
) as any as S.Schema<AwsBackupBackupPlanRuleDetails>;
export type AwsBackupBackupPlanRuleList = AwsBackupBackupPlanRuleDetails[];
const AwsBackupBackupPlanRuleList = /*@__PURE__*/ __L.at(__c76, 3);
export interface AwsBackupBackupPlanBackupPlanDetails {
  BackupPlanName?: string;
  AdvancedBackupSettings?: AwsBackupBackupPlanAdvancedBackupSettingsDetails[];
  BackupPlanRule?: AwsBackupBackupPlanRuleDetails[];
}
const AwsBackupBackupPlanBackupPlanDetails = /*@__PURE__*/ __L.at(
  __c76,
  4,
) as any as S.Schema<AwsBackupBackupPlanBackupPlanDetails>;
export interface AwsBackupBackupPlanDetails {
  BackupPlan?: AwsBackupBackupPlanBackupPlanDetails;
  BackupPlanArn?: string;
  BackupPlanId?: string;
  VersionId?: string;
}
const AwsBackupBackupPlanDetails = /*@__PURE__*/ __L.at(
  __c76,
  5,
) as any as S.Schema<AwsBackupBackupPlanDetails>;
export interface AwsBackupRecoveryPointCalculatedLifecycleDetails {
  DeleteAt?: string;
  MoveToColdStorageAt?: string;
}
const AwsBackupRecoveryPointCalculatedLifecycleDetails = /*@__PURE__*/ __L.at(
  __c76,
  6,
) as any as S.Schema<AwsBackupRecoveryPointCalculatedLifecycleDetails>;
export interface AwsBackupRecoveryPointCreatedByDetails {
  BackupPlanArn?: string;
  BackupPlanId?: string;
  BackupPlanVersion?: string;
  BackupRuleId?: string;
}
const AwsBackupRecoveryPointCreatedByDetails = /*@__PURE__*/ __L.at(
  __c76,
  7,
) as any as S.Schema<AwsBackupRecoveryPointCreatedByDetails>;
export interface AwsBackupRecoveryPointLifecycleDetails {
  DeleteAfterDays?: number;
  MoveToColdStorageAfterDays?: number;
}
const AwsBackupRecoveryPointLifecycleDetails =
  AwsBackupBackupPlanLifecycleDetails as any as S.Schema<AwsBackupRecoveryPointLifecycleDetails>;
export interface AwsBackupRecoveryPointDetails {
  BackupSizeInBytes?: number;
  BackupVaultArn?: string;
  BackupVaultName?: string;
  CalculatedLifecycle?: AwsBackupRecoveryPointCalculatedLifecycleDetails;
  CompletionDate?: string;
  CreatedBy?: AwsBackupRecoveryPointCreatedByDetails;
  CreationDate?: string;
  EncryptionKeyArn?: string;
  IamRoleArn?: string;
  IsEncrypted?: boolean;
  LastRestoreTime?: string;
  Lifecycle?: AwsBackupRecoveryPointLifecycleDetails;
  RecoveryPointArn?: string;
  ResourceArn?: string;
  ResourceType?: string;
  SourceBackupVaultArn?: string;
  Status?: string;
  StatusMessage?: string;
  StorageClass?: string;
}
const AwsBackupRecoveryPointDetails = /*@__PURE__*/ __L.at(
  __c77,
  0,
) as any as S.Schema<AwsBackupRecoveryPointDetails>;
export interface AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails {
  DeleteOnTermination?: boolean;
  Encrypted?: boolean;
  Iops?: number;
  KmsKeyId?: string;
  SnapshotId?: string;
  Throughput?: number;
  VolumeSize?: number;
  VolumeType?: string;
}
const AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails = /*@__PURE__*/ __L.at(
  __c77,
  1,
) as any as S.Schema<AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails>;
export interface AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails {
  DeviceName?: string;
  Ebs?: AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails;
  NoDevice?: string;
  VirtualName?: string;
}
const AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails = /*@__PURE__*/ __L.at(
  __c77,
  2,
) as any as S.Schema<AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails>;
export type AwsEc2LaunchTemplateDataBlockDeviceMappingSetList =
  AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails[];
const AwsEc2LaunchTemplateDataBlockDeviceMappingSetList = /*@__PURE__*/ __L.at(__c77, 3);
export interface AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails {
  CapacityReservationId?: string;
  CapacityReservationResourceGroupArn?: string;
}
const AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails =
  /*@__PURE__*/ __L.at(
    __c77,
    4,
  ) as any as S.Schema<AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails>;
export interface AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails {
  CapacityReservationPreference?: string;
  CapacityReservationTarget?: AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails;
}
const AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails = /*@__PURE__*/ __L.at(
  __c77,
  5,
) as any as S.Schema<AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails>;
export interface AwsEc2LaunchTemplateDataCpuOptionsDetails {
  CoreCount?: number;
  ThreadsPerCore?: number;
}
const AwsEc2LaunchTemplateDataCpuOptionsDetails = /*@__PURE__*/ __L.at(
  __c77,
  6,
) as any as S.Schema<AwsEc2LaunchTemplateDataCpuOptionsDetails>;
export interface AwsEc2LaunchTemplateDataCreditSpecificationDetails {
  CpuCredits?: string;
}
const AwsEc2LaunchTemplateDataCreditSpecificationDetails = /*@__PURE__*/ __L.at(
  __c77,
  7,
) as any as S.Schema<AwsEc2LaunchTemplateDataCreditSpecificationDetails>;
export interface AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails {
  Type?: string;
}
const AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails = /*@__PURE__*/ __L.at(
  __c78,
  0,
) as any as S.Schema<AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails>;
export type AwsEc2LaunchTemplateDataElasticGpuSpecificationSetList =
  AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails[];
const AwsEc2LaunchTemplateDataElasticGpuSpecificationSetList = /*@__PURE__*/ __L.at(__c78, 1);
export interface AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails {
  Count?: number;
  Type?: string;
}
const AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails = /*@__PURE__*/ __L.at(
  __c78,
  2,
) as any as S.Schema<AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails>;
export type AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetList =
  AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails[];
const AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetList = /*@__PURE__*/ __L.at(__c78, 3);
export interface AwsEc2LaunchTemplateDataEnclaveOptionsDetails {
  Enabled?: boolean;
}
const AwsEc2LaunchTemplateDataEnclaveOptionsDetails =
  AwsElasticsearchDomainNodeToNodeEncryptionOptions as any as S.Schema<AwsEc2LaunchTemplateDataEnclaveOptionsDetails>;
export interface AwsEc2LaunchTemplateDataHibernationOptionsDetails {
  Configured?: boolean;
}
const AwsEc2LaunchTemplateDataHibernationOptionsDetails = /*@__PURE__*/ __L.at(
  __c78,
  4,
) as any as S.Schema<AwsEc2LaunchTemplateDataHibernationOptionsDetails>;
export interface AwsEc2LaunchTemplateDataIamInstanceProfileDetails {
  Arn?: string;
  Name?: string;
}
const AwsEc2LaunchTemplateDataIamInstanceProfileDetails = /*@__PURE__*/ __L.at(
  __c78,
  5,
) as any as S.Schema<AwsEc2LaunchTemplateDataIamInstanceProfileDetails>;
export interface AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails {
  BlockDurationMinutes?: number;
  InstanceInterruptionBehavior?: string;
  MaxPrice?: string;
  SpotInstanceType?: string;
  ValidUntil?: string;
}
const AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails = /*@__PURE__*/ __L.at(
  __c78,
  6,
) as any as S.Schema<AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails>;
export interface AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails {
  MarketType?: string;
  SpotOptions?: AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails;
}
const AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails = /*@__PURE__*/ __L.at(
  __c78,
  7,
) as any as S.Schema<AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails>;
export interface AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails {
  Max?: number;
  Min?: number;
}
const AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails = /*@__PURE__*/ __L.at(
  __c79,
  0,
) as any as S.Schema<AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails>;
export interface AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails {
  Max?: number;
  Min?: number;
}
const AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails =
  AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails as any as S.Schema<AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails>;
export interface AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails {
  Max?: number;
  Min?: number;
}
const AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails =
  AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails as any as S.Schema<AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails>;
export interface AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails {
  Max?: number;
  Min?: number;
}
const AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails =
  AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails as any as S.Schema<AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails>;
export interface AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails {
  Max?: number;
  Min?: number;
}
const AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails = /*@__PURE__*/ __L.at(
  __c79,
  1,
) as any as S.Schema<AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails>;
export interface AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails {
  Max?: number;
  Min?: number;
}
const AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails =
  AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails as any as S.Schema<AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails>;
export interface AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails {
  Max?: number;
  Min?: number;
}
const AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails =
  AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails as any as S.Schema<AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails>;
export interface AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails {
  Max?: number;
  Min?: number;
}
const AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails =
  AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails as any as S.Schema<AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails>;
export interface AwsEc2LaunchTemplateDataInstanceRequirementsDetails {
  AcceleratorCount?: AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails;
  AcceleratorManufacturers?: string[];
  AcceleratorNames?: string[];
  AcceleratorTotalMemoryMiB?: AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails;
  AcceleratorTypes?: string[];
  BareMetal?: string;
  BaselineEbsBandwidthMbps?: AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails;
  BurstablePerformance?: string;
  CpuManufacturers?: string[];
  ExcludedInstanceTypes?: string[];
  InstanceGenerations?: string[];
  LocalStorage?: string;
  LocalStorageTypes?: string[];
  MemoryGiBPerVCpu?: AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails;
  MemoryMiB?: AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails;
  NetworkInterfaceCount?: AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails;
  OnDemandMaxPricePercentageOverLowestPrice?: number;
  RequireHibernateSupport?: boolean;
  SpotMaxPricePercentageOverLowestPrice?: number;
  TotalLocalStorageGB?: AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails;
  VCpuCount?: AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails;
}
const AwsEc2LaunchTemplateDataInstanceRequirementsDetails = /*@__PURE__*/ __L.at(
  __c79,
  2,
) as any as S.Schema<AwsEc2LaunchTemplateDataInstanceRequirementsDetails>;
export interface AwsEc2LaunchTemplateDataLicenseSetDetails {
  LicenseConfigurationArn?: string;
}
const AwsEc2LaunchTemplateDataLicenseSetDetails = /*@__PURE__*/ __L.at(
  __c79,
  3,
) as any as S.Schema<AwsEc2LaunchTemplateDataLicenseSetDetails>;
export type AwsEc2LaunchTemplateDataLicenseSetList = AwsEc2LaunchTemplateDataLicenseSetDetails[];
const AwsEc2LaunchTemplateDataLicenseSetList = /*@__PURE__*/ __L.at(__c79, 4);
export interface AwsEc2LaunchTemplateDataMaintenanceOptionsDetails {
  AutoRecovery?: string;
}
const AwsEc2LaunchTemplateDataMaintenanceOptionsDetails = /*@__PURE__*/ __L.at(
  __c79,
  5,
) as any as S.Schema<AwsEc2LaunchTemplateDataMaintenanceOptionsDetails>;
export interface AwsEc2LaunchTemplateDataMetadataOptionsDetails {
  HttpEndpoint?: string;
  HttpProtocolIpv6?: string;
  HttpTokens?: string;
  HttpPutResponseHopLimit?: number;
  InstanceMetadataTags?: string;
}
const AwsEc2LaunchTemplateDataMetadataOptionsDetails = /*@__PURE__*/ __L.at(
  __c79,
  6,
) as any as S.Schema<AwsEc2LaunchTemplateDataMetadataOptionsDetails>;
export interface AwsEc2LaunchTemplateDataMonitoringDetails {
  Enabled?: boolean;
}
const AwsEc2LaunchTemplateDataMonitoringDetails =
  AwsElasticsearchDomainNodeToNodeEncryptionOptions as any as S.Schema<AwsEc2LaunchTemplateDataMonitoringDetails>;
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails {
  Ipv4Prefix?: string;
}
const AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails = /*@__PURE__*/ __L.at(
  __c79,
  7,
) as any as S.Schema<AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails>;
export type AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesList =
  AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails[];
const AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesList = /*@__PURE__*/ __L.at(__c80, 0);
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails {
  Ipv6Address?: string;
}
const AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails = /*@__PURE__*/ __L.at(
  __c80,
  1,
) as any as S.Schema<AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails>;
export type AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesList =
  AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails[];
const AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesList = /*@__PURE__*/ __L.at(__c80, 2);
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails {
  Ipv6Prefix?: string;
}
const AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails = /*@__PURE__*/ __L.at(
  __c80,
  3,
) as any as S.Schema<AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails>;
export type AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesList =
  AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails[];
const AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesList = /*@__PURE__*/ __L.at(__c80, 4);
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails {
  Primary?: boolean;
  PrivateIpAddress?: string;
}
const AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails = /*@__PURE__*/ __L.at(
  __c80,
  5,
) as any as S.Schema<AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails>;
export type AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesList =
  AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails[];
const AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesList = /*@__PURE__*/ __L.at(
  __c80,
  6,
);
export interface AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails {
  AssociateCarrierIpAddress?: boolean;
  AssociatePublicIpAddress?: boolean;
  DeleteOnTermination?: boolean;
  Description?: string;
  DeviceIndex?: number;
  Groups?: string[];
  InterfaceType?: string;
  Ipv4PrefixCount?: number;
  Ipv4Prefixes?: AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails[];
  Ipv6AddressCount?: number;
  Ipv6Addresses?: AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails[];
  Ipv6PrefixCount?: number;
  Ipv6Prefixes?: AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails[];
  NetworkCardIndex?: number;
  NetworkInterfaceId?: string;
  PrivateIpAddress?: string;
  PrivateIpAddresses?: AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails[];
  SecondaryPrivateIpAddressCount?: number;
  SubnetId?: string;
}
const AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails = /*@__PURE__*/ __L.at(
  __c80,
  7,
) as any as S.Schema<AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails>;
export type AwsEc2LaunchTemplateDataNetworkInterfaceSetList =
  AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails[];
const AwsEc2LaunchTemplateDataNetworkInterfaceSetList = /*@__PURE__*/ __L.at(__c81, 0);
export interface AwsEc2LaunchTemplateDataPlacementDetails {
  Affinity?: string;
  AvailabilityZone?: string;
  GroupName?: string;
  HostId?: string;
  HostResourceGroupArn?: string;
  PartitionNumber?: number;
  SpreadDomain?: string;
  Tenancy?: string;
}
const AwsEc2LaunchTemplateDataPlacementDetails = /*@__PURE__*/ __L.at(
  __c81,
  1,
) as any as S.Schema<AwsEc2LaunchTemplateDataPlacementDetails>;
export interface AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails {
  EnableResourceNameDnsAAAARecord?: boolean;
  EnableResourceNameDnsARecord?: boolean;
  HostnameType?: string;
}
const AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails = /*@__PURE__*/ __L.at(
  __c81,
  2,
) as any as S.Schema<AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails>;
export interface AwsEc2LaunchTemplateDataDetails {
  BlockDeviceMappingSet?: AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails[];
  CapacityReservationSpecification?: AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails;
  CpuOptions?: AwsEc2LaunchTemplateDataCpuOptionsDetails;
  CreditSpecification?: AwsEc2LaunchTemplateDataCreditSpecificationDetails;
  DisableApiStop?: boolean;
  DisableApiTermination?: boolean;
  EbsOptimized?: boolean;
  ElasticGpuSpecificationSet?: AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails[];
  ElasticInferenceAcceleratorSet?: AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails[];
  EnclaveOptions?: AwsEc2LaunchTemplateDataEnclaveOptionsDetails;
  HibernationOptions?: AwsEc2LaunchTemplateDataHibernationOptionsDetails;
  IamInstanceProfile?: AwsEc2LaunchTemplateDataIamInstanceProfileDetails;
  ImageId?: string;
  InstanceInitiatedShutdownBehavior?: string;
  InstanceMarketOptions?: AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails;
  InstanceRequirements?: AwsEc2LaunchTemplateDataInstanceRequirementsDetails;
  InstanceType?: string;
  KernelId?: string;
  KeyName?: string;
  LicenseSet?: AwsEc2LaunchTemplateDataLicenseSetDetails[];
  MaintenanceOptions?: AwsEc2LaunchTemplateDataMaintenanceOptionsDetails;
  MetadataOptions?: AwsEc2LaunchTemplateDataMetadataOptionsDetails;
  Monitoring?: AwsEc2LaunchTemplateDataMonitoringDetails;
  NetworkInterfaceSet?: AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails[];
  Placement?: AwsEc2LaunchTemplateDataPlacementDetails;
  PrivateDnsNameOptions?: AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails;
  RamDiskId?: string;
  SecurityGroupIdSet?: string[];
  SecurityGroupSet?: string[];
  UserData?: string;
}
const AwsEc2LaunchTemplateDataDetails = /*@__PURE__*/ __L.at(
  __c81,
  3,
) as any as S.Schema<AwsEc2LaunchTemplateDataDetails>;
export interface AwsEc2LaunchTemplateDetails {
  LaunchTemplateName?: string;
  Id?: string;
  LaunchTemplateData?: AwsEc2LaunchTemplateDataDetails;
  DefaultVersionNumber?: number;
  LatestVersionNumber?: number;
}
const AwsEc2LaunchTemplateDetails = /*@__PURE__*/ __L.at(
  __c81,
  4,
) as any as S.Schema<AwsEc2LaunchTemplateDetails>;
export interface AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails {
  MinimumInstanceMetadataServiceVersion?: string;
}
const AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails = /*@__PURE__*/ __L.at(
  __c81,
  5,
) as any as S.Schema<AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails>;
export interface AwsSageMakerNotebookInstanceDetails {
  AcceleratorTypes?: string[];
  AdditionalCodeRepositories?: string[];
  DefaultCodeRepository?: string;
  DirectInternetAccess?: string;
  FailureReason?: string;
  InstanceMetadataServiceConfiguration?: AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails;
  InstanceType?: string;
  KmsKeyId?: string;
  NetworkInterfaceId?: string;
  NotebookInstanceArn?: string;
  NotebookInstanceLifecycleConfigName?: string;
  NotebookInstanceName?: string;
  NotebookInstanceStatus?: string;
  PlatformIdentifier?: string;
  RoleArn?: string;
  RootAccess?: string;
  SecurityGroups?: string[];
  SubnetId?: string;
  Url?: string;
  VolumeSizeInGB?: number;
}
const AwsSageMakerNotebookInstanceDetails = /*@__PURE__*/ __L.at(
  __c81,
  6,
) as any as S.Schema<AwsSageMakerNotebookInstanceDetails>;
export interface AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails {
  ImmunityTime?: number;
}
const AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails = /*@__PURE__*/ __L.at(
  __c81,
  7,
) as any as S.Schema<AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails>;
export interface AwsWafv2WebAclCaptchaConfigDetails {
  ImmunityTimeProperty?: AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails;
}
const AwsWafv2WebAclCaptchaConfigDetails = /*@__PURE__*/ __L.at(
  __c82,
  0,
) as any as S.Schema<AwsWafv2WebAclCaptchaConfigDetails>;
export interface AwsWafv2CustomHttpHeader {
  Name?: string;
  Value?: string;
}
export type AwsWafv2InsertHeadersList = AwsWafv2CustomHttpHeader[];
const AwsWafv2InsertHeadersList =
  AwsRdsDbProcessorFeatures as any as S.Schema<AwsWafv2InsertHeadersList>;
export interface AwsWafv2CustomRequestHandlingDetails {
  InsertHeaders?: AwsWafv2CustomHttpHeader[];
}
const AwsWafv2CustomRequestHandlingDetails = /*@__PURE__*/ __L.at(
  __c82,
  1,
) as any as S.Schema<AwsWafv2CustomRequestHandlingDetails>;
export interface AwsWafv2ActionAllowDetails {
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
}
const AwsWafv2ActionAllowDetails = /*@__PURE__*/ __L.at(
  __c82,
  2,
) as any as S.Schema<AwsWafv2ActionAllowDetails>;
export interface AwsWafv2CustomResponseDetails {
  CustomResponseBodyKey?: string;
  ResponseCode?: number;
  ResponseHeaders?: AwsWafv2CustomHttpHeader[];
}
const AwsWafv2CustomResponseDetails = /*@__PURE__*/ __L.at(
  __c82,
  3,
) as any as S.Schema<AwsWafv2CustomResponseDetails>;
export interface AwsWafv2ActionBlockDetails {
  CustomResponse?: AwsWafv2CustomResponseDetails;
}
const AwsWafv2ActionBlockDetails = /*@__PURE__*/ __L.at(
  __c82,
  4,
) as any as S.Schema<AwsWafv2ActionBlockDetails>;
export interface AwsWafv2WebAclActionDetails {
  Allow?: AwsWafv2ActionAllowDetails;
  Block?: AwsWafv2ActionBlockDetails;
}
const AwsWafv2WebAclActionDetails = /*@__PURE__*/ __L.at(
  __c82,
  5,
) as any as S.Schema<AwsWafv2WebAclActionDetails>;
export interface AwsWafv2RulesActionCaptchaDetails {
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
}
const AwsWafv2RulesActionCaptchaDetails =
  AwsWafv2ActionAllowDetails as any as S.Schema<AwsWafv2RulesActionCaptchaDetails>;
export interface AwsWafv2RulesActionCountDetails {
  CustomRequestHandling?: AwsWafv2CustomRequestHandlingDetails;
}
const AwsWafv2RulesActionCountDetails =
  AwsWafv2ActionAllowDetails as any as S.Schema<AwsWafv2RulesActionCountDetails>;
export interface AwsWafv2RulesActionDetails {
  Allow?: AwsWafv2ActionAllowDetails;
  Block?: AwsWafv2ActionBlockDetails;
  Captcha?: AwsWafv2RulesActionCaptchaDetails;
  Count?: AwsWafv2RulesActionCountDetails;
}
const AwsWafv2RulesActionDetails = /*@__PURE__*/ __L.at(
  __c82,
  6,
) as any as S.Schema<AwsWafv2RulesActionDetails>;
export interface AwsWafv2VisibilityConfigDetails {
  CloudWatchMetricsEnabled?: boolean;
  MetricName?: string;
  SampledRequestsEnabled?: boolean;
}
const AwsWafv2VisibilityConfigDetails = /*@__PURE__*/ __L.at(
  __c82,
  7,
) as any as S.Schema<AwsWafv2VisibilityConfigDetails>;
export interface AwsWafv2RulesDetails {
  Action?: AwsWafv2RulesActionDetails;
  Name?: string;
  OverrideAction?: string;
  Priority?: number;
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails;
}
const AwsWafv2RulesDetails = /*@__PURE__*/ __L.at(
  __c83,
  0,
) as any as S.Schema<AwsWafv2RulesDetails>;
export type AwsWafv2RulesList = AwsWafv2RulesDetails[];
const AwsWafv2RulesList = /*@__PURE__*/ __L.at(__c83, 1);
export interface AwsWafv2WebAclDetails {
  Name?: string;
  Arn?: string;
  ManagedbyFirewallManager?: boolean;
  Id?: string;
  Capacity?: number;
  CaptchaConfig?: AwsWafv2WebAclCaptchaConfigDetails;
  DefaultAction?: AwsWafv2WebAclActionDetails;
  Description?: string;
  Rules?: AwsWafv2RulesDetails[];
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails;
}
const AwsWafv2WebAclDetails = /*@__PURE__*/ __L.at(
  __c83,
  2,
) as any as S.Schema<AwsWafv2WebAclDetails>;
export interface AwsWafv2RuleGroupDetails {
  Capacity?: number;
  Description?: string;
  Id?: string;
  Name?: string;
  Arn?: string;
  Rules?: AwsWafv2RulesDetails[];
  Scope?: string;
  VisibilityConfig?: AwsWafv2VisibilityConfigDetails;
}
const AwsWafv2RuleGroupDetails = /*@__PURE__*/ __L.at(
  __c83,
  3,
) as any as S.Schema<AwsWafv2RuleGroupDetails>;
export interface AssociationStateDetails {
  State?: string;
  StatusMessage?: string;
}
const AssociationStateDetails = /*@__PURE__*/ __L.at(
  __c83,
  4,
) as any as S.Schema<AssociationStateDetails>;
export interface AssociationSetDetails {
  AssociationState?: AssociationStateDetails;
  GatewayId?: string;
  Main?: boolean;
  RouteTableAssociationId?: string;
  RouteTableId?: string;
  SubnetId?: string;
}
const AssociationSetDetails = /*@__PURE__*/ __L.at(
  __c83,
  5,
) as any as S.Schema<AssociationSetDetails>;
export type AssociationSetList = AssociationSetDetails[];
const AssociationSetList = /*@__PURE__*/ __L.at(__c83, 6);
export interface PropagatingVgwSetDetails {
  GatewayId?: string;
}
const PropagatingVgwSetDetails = /*@__PURE__*/ __L.at(
  __c83,
  7,
) as any as S.Schema<PropagatingVgwSetDetails>;
export type PropagatingVgwSetList = PropagatingVgwSetDetails[];
const PropagatingVgwSetList = /*@__PURE__*/ __L.at(__c84, 0);
export interface RouteSetDetails {
  CarrierGatewayId?: string;
  CoreNetworkArn?: string;
  DestinationCidrBlock?: string;
  DestinationIpv6CidrBlock?: string;
  DestinationPrefixListId?: string;
  EgressOnlyInternetGatewayId?: string;
  GatewayId?: string;
  InstanceId?: string;
  InstanceOwnerId?: string;
  LocalGatewayId?: string;
  NatGatewayId?: string;
  NetworkInterfaceId?: string;
  Origin?: string;
  State?: string;
  TransitGatewayId?: string;
  VpcPeeringConnectionId?: string;
}
const RouteSetDetails = /*@__PURE__*/ __L.at(__c84, 1) as any as S.Schema<RouteSetDetails>;
export type RouteSetList = RouteSetDetails[];
const RouteSetList = /*@__PURE__*/ __L.at(__c84, 2);
export interface AwsEc2RouteTableDetails {
  AssociationSet?: AssociationSetDetails[];
  OwnerId?: string;
  PropagatingVgwSet?: PropagatingVgwSetDetails[];
  RouteTableId?: string;
  RouteSet?: RouteSetDetails[];
  VpcId?: string;
}
const AwsEc2RouteTableDetails = /*@__PURE__*/ __L.at(
  __c84,
  3,
) as any as S.Schema<AwsEc2RouteTableDetails>;
export interface AwsAmazonMqBrokerEncryptionOptionsDetails {
  KmsKeyId?: string;
  UseAwsOwnedKey?: boolean;
}
const AwsAmazonMqBrokerEncryptionOptionsDetails = /*@__PURE__*/ __L.at(
  __c84,
  4,
) as any as S.Schema<AwsAmazonMqBrokerEncryptionOptionsDetails>;
export interface AwsAmazonMqBrokerLdapServerMetadataDetails {
  Hosts?: string[];
  RoleBase?: string;
  RoleName?: string;
  RoleSearchMatching?: string;
  RoleSearchSubtree?: boolean;
  ServiceAccountUsername?: string;
  UserBase?: string;
  UserRoleName?: string;
  UserSearchMatching?: string;
  UserSearchSubtree?: boolean;
}
const AwsAmazonMqBrokerLdapServerMetadataDetails = /*@__PURE__*/ __L.at(
  __c84,
  5,
) as any as S.Schema<AwsAmazonMqBrokerLdapServerMetadataDetails>;
export interface AwsAmazonMqBrokerLogsPendingDetails {
  Audit?: boolean;
  General?: boolean;
}
const AwsAmazonMqBrokerLogsPendingDetails = /*@__PURE__*/ __L.at(
  __c84,
  6,
) as any as S.Schema<AwsAmazonMqBrokerLogsPendingDetails>;
export interface AwsAmazonMqBrokerLogsDetails {
  Audit?: boolean;
  General?: boolean;
  AuditLogGroup?: string;
  GeneralLogGroup?: string;
  Pending?: AwsAmazonMqBrokerLogsPendingDetails;
}
const AwsAmazonMqBrokerLogsDetails = /*@__PURE__*/ __L.at(
  __c84,
  7,
) as any as S.Schema<AwsAmazonMqBrokerLogsDetails>;
export interface AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails {
  DayOfWeek?: string;
  TimeOfDay?: string;
  TimeZone?: string;
}
const AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails = /*@__PURE__*/ __L.at(
  __c85,
  0,
) as any as S.Schema<AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails>;
export interface AwsAmazonMqBrokerUsersDetails {
  PendingChange?: string;
  Username?: string;
}
const AwsAmazonMqBrokerUsersDetails = /*@__PURE__*/ __L.at(
  __c85,
  1,
) as any as S.Schema<AwsAmazonMqBrokerUsersDetails>;
export type AwsAmazonMqBrokerUsersList = AwsAmazonMqBrokerUsersDetails[];
const AwsAmazonMqBrokerUsersList = /*@__PURE__*/ __L.at(__c85, 2);
export interface AwsAmazonMqBrokerDetails {
  AuthenticationStrategy?: string;
  AutoMinorVersionUpgrade?: boolean;
  BrokerArn?: string;
  BrokerName?: string;
  DeploymentMode?: string;
  EncryptionOptions?: AwsAmazonMqBrokerEncryptionOptionsDetails;
  EngineType?: string;
  EngineVersion?: string;
  HostInstanceType?: string;
  BrokerId?: string;
  LdapServerMetadata?: AwsAmazonMqBrokerLdapServerMetadataDetails;
  Logs?: AwsAmazonMqBrokerLogsDetails;
  MaintenanceWindowStartTime?: AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails;
  PubliclyAccessible?: boolean;
  SecurityGroups?: string[];
  StorageType?: string;
  SubnetIds?: string[];
  Users?: AwsAmazonMqBrokerUsersDetails[];
}
const AwsAmazonMqBrokerDetails = /*@__PURE__*/ __L.at(
  __c85,
  3,
) as any as S.Schema<AwsAmazonMqBrokerDetails>;
export interface AwsAppSyncGraphQlApiOpenIdConnectConfigDetails {
  AuthTtL?: number;
  ClientId?: string;
  IatTtL?: number;
  Issuer?: string;
}
const AwsAppSyncGraphQlApiOpenIdConnectConfigDetails = /*@__PURE__*/ __L.at(
  __c85,
  4,
) as any as S.Schema<AwsAppSyncGraphQlApiOpenIdConnectConfigDetails>;
export interface AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails {
  AuthorizerResultTtlInSeconds?: number;
  AuthorizerUri?: string;
  IdentityValidationExpression?: string;
}
const AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails = /*@__PURE__*/ __L.at(
  __c85,
  5,
) as any as S.Schema<AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails>;
export interface AwsAppSyncGraphQlApiUserPoolConfigDetails {
  AppIdClientRegex?: string;
  AwsRegion?: string;
  DefaultAction?: string;
  UserPoolId?: string;
}
const AwsAppSyncGraphQlApiUserPoolConfigDetails = /*@__PURE__*/ __L.at(
  __c85,
  6,
) as any as S.Schema<AwsAppSyncGraphQlApiUserPoolConfigDetails>;
export interface AwsAppSyncGraphQlApiLogConfigDetails {
  CloudWatchLogsRoleArn?: string;
  ExcludeVerboseContent?: boolean;
  FieldLogLevel?: string;
}
const AwsAppSyncGraphQlApiLogConfigDetails = /*@__PURE__*/ __L.at(
  __c85,
  7,
) as any as S.Schema<AwsAppSyncGraphQlApiLogConfigDetails>;
export interface AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails {
  AuthenticationType?: string;
  LambdaAuthorizerConfig?: AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails;
  OpenIdConnectConfig?: AwsAppSyncGraphQlApiOpenIdConnectConfigDetails;
  UserPoolConfig?: AwsAppSyncGraphQlApiUserPoolConfigDetails;
}
const AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails = /*@__PURE__*/ __L.at(
  __c86,
  0,
) as any as S.Schema<AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails>;
export type AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersList =
  AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails[];
const AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersList = /*@__PURE__*/ __L.at(__c86, 1);
export interface AwsAppSyncGraphQlApiDetails {
  ApiId?: string;
  Id?: string;
  OpenIdConnectConfig?: AwsAppSyncGraphQlApiOpenIdConnectConfigDetails;
  Name?: string;
  LambdaAuthorizerConfig?: AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails;
  XrayEnabled?: boolean;
  Arn?: string;
  UserPoolConfig?: AwsAppSyncGraphQlApiUserPoolConfigDetails;
  AuthenticationType?: string;
  LogConfig?: AwsAppSyncGraphQlApiLogConfigDetails;
  AdditionalAuthenticationProviders?: AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails[];
  WafWebAclArn?: string;
}
const AwsAppSyncGraphQlApiDetails = /*@__PURE__*/ __L.at(
  __c86,
  2,
) as any as S.Schema<AwsAppSyncGraphQlApiDetails>;
export interface AwsEventSchemasRegistryDetails {
  Description?: string;
  RegistryArn?: string;
  RegistryName?: string;
}
const AwsEventSchemasRegistryDetails = /*@__PURE__*/ __L.at(
  __c86,
  3,
) as any as S.Schema<AwsEventSchemasRegistryDetails>;
export interface AwsGuardDutyDetectorDataSourcesCloudTrailDetails {
  Status?: string;
}
const AwsGuardDutyDetectorDataSourcesCloudTrailDetails = /*@__PURE__*/ __L.at(
  __c86,
  4,
) as any as S.Schema<AwsGuardDutyDetectorDataSourcesCloudTrailDetails>;
export interface AwsGuardDutyDetectorDataSourcesDnsLogsDetails {
  Status?: string;
}
const AwsGuardDutyDetectorDataSourcesDnsLogsDetails =
  AwsGuardDutyDetectorDataSourcesCloudTrailDetails as any as S.Schema<AwsGuardDutyDetectorDataSourcesDnsLogsDetails>;
export interface AwsGuardDutyDetectorDataSourcesFlowLogsDetails {
  Status?: string;
}
const AwsGuardDutyDetectorDataSourcesFlowLogsDetails =
  AwsGuardDutyDetectorDataSourcesCloudTrailDetails as any as S.Schema<AwsGuardDutyDetectorDataSourcesFlowLogsDetails>;
export interface AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails {
  Status?: string;
}
const AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails = /*@__PURE__*/ __L.at(
  __c86,
  5,
) as any as S.Schema<AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails>;
export interface AwsGuardDutyDetectorDataSourcesKubernetesDetails {
  AuditLogs?: AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails;
}
const AwsGuardDutyDetectorDataSourcesKubernetesDetails = /*@__PURE__*/ __L.at(
  __c86,
  6,
) as any as S.Schema<AwsGuardDutyDetectorDataSourcesKubernetesDetails>;
export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails {
  Reason?: string;
  Status?: string;
}
const AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails =
  /*@__PURE__*/ __L.at(
    __c86,
    7,
  ) as any as S.Schema<AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails>;
export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails {
  EbsVolumes?: AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails;
}
const AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails =
  /*@__PURE__*/ __L.at(
    __c87,
    0,
  ) as any as S.Schema<AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails>;
export interface AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails {
  ScanEc2InstanceWithFindings?: AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails;
  ServiceRole?: string;
}
const AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails = /*@__PURE__*/ __L.at(
  __c87,
  1,
) as any as S.Schema<AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails>;
export interface AwsGuardDutyDetectorDataSourcesS3LogsDetails {
  Status?: string;
}
const AwsGuardDutyDetectorDataSourcesS3LogsDetails =
  AwsGuardDutyDetectorDataSourcesCloudTrailDetails as any as S.Schema<AwsGuardDutyDetectorDataSourcesS3LogsDetails>;
export interface AwsGuardDutyDetectorDataSourcesDetails {
  CloudTrail?: AwsGuardDutyDetectorDataSourcesCloudTrailDetails;
  DnsLogs?: AwsGuardDutyDetectorDataSourcesDnsLogsDetails;
  FlowLogs?: AwsGuardDutyDetectorDataSourcesFlowLogsDetails;
  Kubernetes?: AwsGuardDutyDetectorDataSourcesKubernetesDetails;
  MalwareProtection?: AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails;
  S3Logs?: AwsGuardDutyDetectorDataSourcesS3LogsDetails;
}
const AwsGuardDutyDetectorDataSourcesDetails = /*@__PURE__*/ __L.at(
  __c87,
  2,
) as any as S.Schema<AwsGuardDutyDetectorDataSourcesDetails>;
export interface AwsGuardDutyDetectorFeaturesDetails {
  Name?: string;
  Status?: string;
}
const AwsGuardDutyDetectorFeaturesDetails = /*@__PURE__*/ __L.at(
  __c87,
  3,
) as any as S.Schema<AwsGuardDutyDetectorFeaturesDetails>;
export type AwsGuardDutyDetectorFeaturesList = AwsGuardDutyDetectorFeaturesDetails[];
const AwsGuardDutyDetectorFeaturesList = /*@__PURE__*/ __L.at(__c87, 4);
export interface AwsGuardDutyDetectorDetails {
  DataSources?: AwsGuardDutyDetectorDataSourcesDetails;
  Features?: AwsGuardDutyDetectorFeaturesDetails[];
  FindingPublishingFrequency?: string;
  ServiceRole?: string;
  Status?: string;
}
const AwsGuardDutyDetectorDetails = /*@__PURE__*/ __L.at(
  __c87,
  5,
) as any as S.Schema<AwsGuardDutyDetectorDetails>;
export interface AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails {
  LogGroupArn?: string;
}
const AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails =
  /*@__PURE__*/ __L.at(
    __c87,
    6,
  ) as any as S.Schema<AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails>;
export interface AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails {
  CloudWatchLogsLogGroup?: AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails;
}
const AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails = /*@__PURE__*/ __L.at(
  __c87,
  7,
) as any as S.Schema<AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails>;
export type AwsStepFunctionStateMachineLoggingConfigurationDestinationsList =
  AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails[];
const AwsStepFunctionStateMachineLoggingConfigurationDestinationsList = /*@__PURE__*/ __L.at(
  __c88,
  0,
);
export interface AwsStepFunctionStateMachineLoggingConfigurationDetails {
  Destinations?: AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails[];
  IncludeExecutionData?: boolean;
  Level?: string;
}
const AwsStepFunctionStateMachineLoggingConfigurationDetails = /*@__PURE__*/ __L.at(
  __c88,
  1,
) as any as S.Schema<AwsStepFunctionStateMachineLoggingConfigurationDetails>;
export interface AwsStepFunctionStateMachineTracingConfigurationDetails {
  Enabled?: boolean;
}
const AwsStepFunctionStateMachineTracingConfigurationDetails =
  AwsElasticsearchDomainNodeToNodeEncryptionOptions as any as S.Schema<AwsStepFunctionStateMachineTracingConfigurationDetails>;
export interface AwsStepFunctionStateMachineDetails {
  Label?: string;
  LoggingConfiguration?: AwsStepFunctionStateMachineLoggingConfigurationDetails;
  Name?: string;
  RoleArn?: string;
  StateMachineArn?: string;
  Status?: string;
  TracingConfiguration?: AwsStepFunctionStateMachineTracingConfigurationDetails;
  Type?: string;
}
const AwsStepFunctionStateMachineDetails = /*@__PURE__*/ __L.at(
  __c88,
  2,
) as any as S.Schema<AwsStepFunctionStateMachineDetails>;
export interface AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails {
  EncryptionOption?: string;
  KmsKey?: string;
}
const AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails =
  /*@__PURE__*/ __L.at(
    __c88,
    3,
  ) as any as S.Schema<AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails>;
export interface AwsAthenaWorkGroupConfigurationResultConfigurationDetails {
  EncryptionConfiguration?: AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails;
}
const AwsAthenaWorkGroupConfigurationResultConfigurationDetails = /*@__PURE__*/ __L.at(
  __c88,
  4,
) as any as S.Schema<AwsAthenaWorkGroupConfigurationResultConfigurationDetails>;
export interface AwsAthenaWorkGroupConfigurationDetails {
  ResultConfiguration?: AwsAthenaWorkGroupConfigurationResultConfigurationDetails;
}
const AwsAthenaWorkGroupConfigurationDetails = /*@__PURE__*/ __L.at(
  __c88,
  5,
) as any as S.Schema<AwsAthenaWorkGroupConfigurationDetails>;
export interface AwsAthenaWorkGroupDetails {
  Name?: string;
  Description?: string;
  State?: string;
  Configuration?: AwsAthenaWorkGroupConfigurationDetails;
}
const AwsAthenaWorkGroupDetails = /*@__PURE__*/ __L.at(
  __c88,
  6,
) as any as S.Schema<AwsAthenaWorkGroupDetails>;
export interface AwsEventsEventbusDetails {
  Arn?: string;
  Name?: string;
  Policy?: string;
}
const AwsEventsEventbusDetails = /*@__PURE__*/ __L.at(
  __c88,
  7,
) as any as S.Schema<AwsEventsEventbusDetails>;
export interface AwsDmsEndpointDetails {
  CertificateArn?: string;
  DatabaseName?: string;
  EndpointArn?: string;
  EndpointIdentifier?: string;
  EndpointType?: string;
  EngineName?: string;
  ExternalId?: string;
  ExtraConnectionAttributes?: string;
  KmsKeyId?: string;
  Port?: number;
  ServerName?: string;
  SslMode?: string;
  Username?: string;
}
const AwsDmsEndpointDetails = /*@__PURE__*/ __L.at(
  __c89,
  0,
) as any as S.Schema<AwsDmsEndpointDetails>;
export interface AwsEventsEndpointEventBusesDetails {
  EventBusArn?: string;
}
const AwsEventsEndpointEventBusesDetails = /*@__PURE__*/ __L.at(
  __c89,
  1,
) as any as S.Schema<AwsEventsEndpointEventBusesDetails>;
export type AwsEventsEndpointEventBusesList = AwsEventsEndpointEventBusesDetails[];
const AwsEventsEndpointEventBusesList = /*@__PURE__*/ __L.at(__c89, 2);
export interface AwsEventsEndpointReplicationConfigDetails {
  State?: string;
}
const AwsEventsEndpointReplicationConfigDetails =
  AwsEc2InstanceMonitoringDetails as any as S.Schema<AwsEventsEndpointReplicationConfigDetails>;
export interface AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails {
  HealthCheck?: string;
}
const AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails = /*@__PURE__*/ __L.at(
  __c89,
  3,
) as any as S.Schema<AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails>;
export interface AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails {
  Route?: string;
}
const AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails = /*@__PURE__*/ __L.at(
  __c89,
  4,
) as any as S.Schema<AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails>;
export interface AwsEventsEndpointRoutingConfigFailoverConfigDetails {
  Primary?: AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails;
  Secondary?: AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails;
}
const AwsEventsEndpointRoutingConfigFailoverConfigDetails = /*@__PURE__*/ __L.at(
  __c89,
  5,
) as any as S.Schema<AwsEventsEndpointRoutingConfigFailoverConfigDetails>;
export interface AwsEventsEndpointRoutingConfigDetails {
  FailoverConfig?: AwsEventsEndpointRoutingConfigFailoverConfigDetails;
}
const AwsEventsEndpointRoutingConfigDetails = /*@__PURE__*/ __L.at(
  __c89,
  6,
) as any as S.Schema<AwsEventsEndpointRoutingConfigDetails>;
export interface AwsEventsEndpointDetails {
  Arn?: string;
  Description?: string;
  EndpointId?: string;
  EndpointUrl?: string;
  EventBuses?: AwsEventsEndpointEventBusesDetails[];
  Name?: string;
  ReplicationConfig?: AwsEventsEndpointReplicationConfigDetails;
  RoleArn?: string;
  RoutingConfig?: AwsEventsEndpointRoutingConfigDetails;
  State?: string;
  StateReason?: string;
}
const AwsEventsEndpointDetails = /*@__PURE__*/ __L.at(
  __c89,
  7,
) as any as S.Schema<AwsEventsEndpointDetails>;
export interface AwsDmsReplicationTaskDetails {
  CdcStartPosition?: string;
  CdcStartTime?: string;
  CdcStopPosition?: string;
  MigrationType?: string;
  Id?: string;
  ResourceIdentifier?: string;
  ReplicationInstanceArn?: string;
  ReplicationTaskIdentifier?: string;
  ReplicationTaskSettings?: string;
  SourceEndpointArn?: string;
  TableMappings?: string;
  TargetEndpointArn?: string;
  TaskData?: string;
}
const AwsDmsReplicationTaskDetails = /*@__PURE__*/ __L.at(
  __c90,
  0,
) as any as S.Schema<AwsDmsReplicationTaskDetails>;
export interface AwsDmsReplicationInstanceReplicationSubnetGroupDetails {
  ReplicationSubnetGroupIdentifier?: string;
}
const AwsDmsReplicationInstanceReplicationSubnetGroupDetails = /*@__PURE__*/ __L.at(
  __c90,
  1,
) as any as S.Schema<AwsDmsReplicationInstanceReplicationSubnetGroupDetails>;
export interface AwsDmsReplicationInstanceVpcSecurityGroupsDetails {
  VpcSecurityGroupId?: string;
}
const AwsDmsReplicationInstanceVpcSecurityGroupsDetails = /*@__PURE__*/ __L.at(
  __c90,
  2,
) as any as S.Schema<AwsDmsReplicationInstanceVpcSecurityGroupsDetails>;
export type AwsDmsReplicationInstanceVpcSecurityGroupsList =
  AwsDmsReplicationInstanceVpcSecurityGroupsDetails[];
const AwsDmsReplicationInstanceVpcSecurityGroupsList = /*@__PURE__*/ __L.at(__c90, 3);
export interface AwsDmsReplicationInstanceDetails {
  AllocatedStorage?: number;
  AutoMinorVersionUpgrade?: boolean;
  AvailabilityZone?: string;
  EngineVersion?: string;
  KmsKeyId?: string;
  MultiAZ?: boolean;
  PreferredMaintenanceWindow?: string;
  PubliclyAccessible?: boolean;
  ReplicationInstanceClass?: string;
  ReplicationInstanceIdentifier?: string;
  ReplicationSubnetGroup?: AwsDmsReplicationInstanceReplicationSubnetGroupDetails;
  VpcSecurityGroups?: AwsDmsReplicationInstanceVpcSecurityGroupsDetails[];
}
const AwsDmsReplicationInstanceDetails = /*@__PURE__*/ __L.at(
  __c90,
  4,
) as any as S.Schema<AwsDmsReplicationInstanceDetails>;
export interface AwsRoute53HostedZoneConfigDetails {
  Comment?: string;
}
const AwsRoute53HostedZoneConfigDetails = /*@__PURE__*/ __L.at(
  __c90,
  5,
) as any as S.Schema<AwsRoute53HostedZoneConfigDetails>;
export interface AwsRoute53HostedZoneObjectDetails {
  Id?: string;
  Name?: string;
  Config?: AwsRoute53HostedZoneConfigDetails;
}
const AwsRoute53HostedZoneObjectDetails = /*@__PURE__*/ __L.at(
  __c90,
  6,
) as any as S.Schema<AwsRoute53HostedZoneObjectDetails>;
export interface AwsRoute53HostedZoneVpcDetails {
  Id?: string;
  Region?: string;
}
const AwsRoute53HostedZoneVpcDetails = /*@__PURE__*/ __L.at(
  __c90,
  7,
) as any as S.Schema<AwsRoute53HostedZoneVpcDetails>;
export type AwsRoute53HostedZoneVpcsList = AwsRoute53HostedZoneVpcDetails[];
const AwsRoute53HostedZoneVpcsList = /*@__PURE__*/ __L.at(__c91, 0);
export type AwsRoute53HostedZoneNameServersList = string[];
const AwsRoute53HostedZoneNameServersList =
  AutomationRulesArnsList as any as S.Schema<AwsRoute53HostedZoneNameServersList>;
export interface CloudWatchLogsLogGroupArnConfigDetails {
  CloudWatchLogsLogGroupArn?: string;
  HostedZoneId?: string;
  Id?: string;
}
const CloudWatchLogsLogGroupArnConfigDetails = /*@__PURE__*/ __L.at(
  __c91,
  1,
) as any as S.Schema<CloudWatchLogsLogGroupArnConfigDetails>;
export interface AwsRoute53QueryLoggingConfigDetails {
  CloudWatchLogsLogGroupArn?: CloudWatchLogsLogGroupArnConfigDetails;
}
const AwsRoute53QueryLoggingConfigDetails = /*@__PURE__*/ __L.at(
  __c91,
  2,
) as any as S.Schema<AwsRoute53QueryLoggingConfigDetails>;
export interface AwsRoute53HostedZoneDetails {
  HostedZone?: AwsRoute53HostedZoneObjectDetails;
  Vpcs?: AwsRoute53HostedZoneVpcDetails[];
  NameServers?: string[];
  QueryLoggingConfig?: AwsRoute53QueryLoggingConfigDetails;
}
const AwsRoute53HostedZoneDetails = /*@__PURE__*/ __L.at(
  __c91,
  3,
) as any as S.Schema<AwsRoute53HostedZoneDetails>;
export interface AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails {
  InCluster?: boolean;
  ClientBroker?: string;
}
const AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails = /*@__PURE__*/ __L.at(
  __c91,
  4,
) as any as S.Schema<AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails>;
export interface AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails {
  DataVolumeKMSKeyId?: string;
}
const AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails = /*@__PURE__*/ __L.at(
  __c91,
  5,
) as any as S.Schema<AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails>;
export interface AwsMskClusterClusterInfoEncryptionInfoDetails {
  EncryptionInTransit?: AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails;
  EncryptionAtRest?: AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails;
}
const AwsMskClusterClusterInfoEncryptionInfoDetails = /*@__PURE__*/ __L.at(
  __c91,
  6,
) as any as S.Schema<AwsMskClusterClusterInfoEncryptionInfoDetails>;
export interface AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails {
  Enabled?: boolean;
}
const AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails =
  AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails as any as S.Schema<AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails>;
export interface AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails {
  Enabled?: boolean;
}
const AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails =
  AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails as any as S.Schema<AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails>;
export interface AwsMskClusterClusterInfoClientAuthenticationSaslDetails {
  Iam?: AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails;
  Scram?: AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails;
}
const AwsMskClusterClusterInfoClientAuthenticationSaslDetails = /*@__PURE__*/ __L.at(
  __c91,
  7,
) as any as S.Schema<AwsMskClusterClusterInfoClientAuthenticationSaslDetails>;
export interface AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails {
  Enabled?: boolean;
}
const AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails = /*@__PURE__*/ __L.at(
  __c92,
  0,
) as any as S.Schema<AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails>;
export interface AwsMskClusterClusterInfoClientAuthenticationTlsDetails {
  CertificateAuthorityArnList?: string[];
  Enabled?: boolean;
}
const AwsMskClusterClusterInfoClientAuthenticationTlsDetails = /*@__PURE__*/ __L.at(
  __c92,
  1,
) as any as S.Schema<AwsMskClusterClusterInfoClientAuthenticationTlsDetails>;
export interface AwsMskClusterClusterInfoClientAuthenticationDetails {
  Sasl?: AwsMskClusterClusterInfoClientAuthenticationSaslDetails;
  Unauthenticated?: AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails;
  Tls?: AwsMskClusterClusterInfoClientAuthenticationTlsDetails;
}
const AwsMskClusterClusterInfoClientAuthenticationDetails = /*@__PURE__*/ __L.at(
  __c92,
  2,
) as any as S.Schema<AwsMskClusterClusterInfoClientAuthenticationDetails>;
export interface AwsMskClusterClusterInfoDetails {
  EncryptionInfo?: AwsMskClusterClusterInfoEncryptionInfoDetails;
  CurrentVersion?: string;
  NumberOfBrokerNodes?: number;
  ClusterName?: string;
  ClientAuthentication?: AwsMskClusterClusterInfoClientAuthenticationDetails;
  EnhancedMonitoring?: string;
}
const AwsMskClusterClusterInfoDetails = /*@__PURE__*/ __L.at(
  __c92,
  3,
) as any as S.Schema<AwsMskClusterClusterInfoDetails>;
export interface AwsMskClusterDetails {
  ClusterInfo?: AwsMskClusterClusterInfoDetails;
}
const AwsMskClusterDetails = /*@__PURE__*/ __L.at(
  __c92,
  4,
) as any as S.Schema<AwsMskClusterDetails>;
export interface AwsS3AccessPointVpcConfigurationDetails {
  VpcId?: string;
}
const AwsS3AccessPointVpcConfigurationDetails = /*@__PURE__*/ __L.at(
  __c92,
  5,
) as any as S.Schema<AwsS3AccessPointVpcConfigurationDetails>;
export interface AwsS3AccessPointDetails {
  AccessPointArn?: string;
  Alias?: string;
  Bucket?: string;
  BucketAccountId?: string;
  Name?: string;
  NetworkOrigin?: string;
  PublicAccessBlockConfiguration?: AwsS3AccountPublicAccessBlockDetails;
  VpcConfiguration?: AwsS3AccessPointVpcConfigurationDetails;
}
const AwsS3AccessPointDetails = /*@__PURE__*/ __L.at(
  __c92,
  6,
) as any as S.Schema<AwsS3AccessPointDetails>;
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails {
  DirectoryId?: string;
}
const AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails = /*@__PURE__*/ __L.at(
  __c92,
  7,
) as any as S.Schema<AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails>;
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails {
  ClientRootCertificateChain?: string;
}
const AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails =
  /*@__PURE__*/ __L.at(
    __c93,
    0,
  ) as any as S.Schema<AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails>;
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails {
  SamlProviderArn?: string;
  SelfServiceSamlProviderArn?: string;
}
const AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails =
  /*@__PURE__*/ __L.at(
    __c93,
    1,
  ) as any as S.Schema<AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails>;
export interface AwsEc2ClientVpnEndpointAuthenticationOptionsDetails {
  Type?: string;
  ActiveDirectory?: AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails;
  MutualAuthentication?: AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails;
  FederatedAuthentication?: AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails;
}
const AwsEc2ClientVpnEndpointAuthenticationOptionsDetails = /*@__PURE__*/ __L.at(
  __c93,
  2,
) as any as S.Schema<AwsEc2ClientVpnEndpointAuthenticationOptionsDetails>;
export type AwsEc2ClientVpnEndpointAuthenticationOptionsList =
  AwsEc2ClientVpnEndpointAuthenticationOptionsDetails[];
const AwsEc2ClientVpnEndpointAuthenticationOptionsList = /*@__PURE__*/ __L.at(__c93, 3);
export interface AwsEc2ClientVpnEndpointConnectionLogOptionsDetails {
  Enabled?: boolean;
  CloudwatchLogGroup?: string;
  CloudwatchLogStream?: string;
}
const AwsEc2ClientVpnEndpointConnectionLogOptionsDetails = /*@__PURE__*/ __L.at(
  __c93,
  4,
) as any as S.Schema<AwsEc2ClientVpnEndpointConnectionLogOptionsDetails>;
export interface AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails {
  Code?: string;
  Message?: string;
}
const AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails = /*@__PURE__*/ __L.at(
  __c93,
  5,
) as any as S.Schema<AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails>;
export interface AwsEc2ClientVpnEndpointClientConnectOptionsDetails {
  Enabled?: boolean;
  LambdaFunctionArn?: string;
  Status?: AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails;
}
const AwsEc2ClientVpnEndpointClientConnectOptionsDetails = /*@__PURE__*/ __L.at(
  __c93,
  6,
) as any as S.Schema<AwsEc2ClientVpnEndpointClientConnectOptionsDetails>;
export interface AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails {
  Enabled?: boolean;
  BannerText?: string;
}
const AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails = /*@__PURE__*/ __L.at(
  __c93,
  7,
) as any as S.Schema<AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails>;
export interface AwsEc2ClientVpnEndpointDetails {
  ClientVpnEndpointId?: string;
  Description?: string;
  ClientCidrBlock?: string;
  DnsServer?: string[];
  SplitTunnel?: boolean;
  TransportProtocol?: string;
  VpnPort?: number;
  ServerCertificateArn?: string;
  AuthenticationOptions?: AwsEc2ClientVpnEndpointAuthenticationOptionsDetails[];
  ConnectionLogOptions?: AwsEc2ClientVpnEndpointConnectionLogOptionsDetails;
  SecurityGroupIdSet?: string[];
  VpcId?: string;
  SelfServicePortalUrl?: string;
  ClientConnectOptions?: AwsEc2ClientVpnEndpointClientConnectOptionsDetails;
  SessionTimeoutHours?: number;
  ClientLoginBannerOptions?: AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails;
}
const AwsEc2ClientVpnEndpointDetails = /*@__PURE__*/ __L.at(
  __c94,
  0,
) as any as S.Schema<AwsEc2ClientVpnEndpointDetails>;
export interface CodeRepositoryDetails {
  ProviderType?: string;
  ProjectName?: string;
  CodeSecurityIntegrationArn?: string;
}
const CodeRepositoryDetails = /*@__PURE__*/ __L.at(
  __c94,
  1,
) as any as S.Schema<CodeRepositoryDetails>;
export type AzureResourceDetails = unknown;
export interface ResourceDetails {
  AwsAutoScalingAutoScalingGroup?: AwsAutoScalingAutoScalingGroupDetails;
  AwsCodeBuildProject?: AwsCodeBuildProjectDetails;
  AwsCloudFrontDistribution?: AwsCloudFrontDistributionDetails;
  AwsEc2Instance?: AwsEc2InstanceDetails;
  AwsEc2NetworkInterface?: AwsEc2NetworkInterfaceDetails;
  AwsEc2SecurityGroup?: AwsEc2SecurityGroupDetails;
  AwsEc2Volume?: AwsEc2VolumeDetails;
  AwsEc2Vpc?: AwsEc2VpcDetails;
  AwsEc2Eip?: AwsEc2EipDetails;
  AwsEc2Subnet?: AwsEc2SubnetDetails;
  AwsEc2NetworkAcl?: AwsEc2NetworkAclDetails;
  AwsElbv2LoadBalancer?: AwsElbv2LoadBalancerDetails;
  AwsElasticBeanstalkEnvironment?: AwsElasticBeanstalkEnvironmentDetails;
  AwsElasticsearchDomain?: AwsElasticsearchDomainDetails;
  AwsS3Bucket?: AwsS3BucketDetails;
  AwsS3AccountPublicAccessBlock?: AwsS3AccountPublicAccessBlockDetails;
  AwsS3Object?: AwsS3ObjectDetails;
  AwsSecretsManagerSecret?: AwsSecretsManagerSecretDetails;
  AwsIamAccessKey?: AwsIamAccessKeyDetails;
  AwsIamUser?: AwsIamUserDetails;
  AwsIamPolicy?: AwsIamPolicyDetails;
  AwsApiGatewayV2Stage?: AwsApiGatewayV2StageDetails;
  AwsApiGatewayV2Api?: AwsApiGatewayV2ApiDetails;
  AwsDynamoDbTable?: AwsDynamoDbTableDetails;
  AwsApiGatewayStage?: AwsApiGatewayStageDetails;
  AwsApiGatewayRestApi?: AwsApiGatewayRestApiDetails;
  AwsCloudTrailTrail?: AwsCloudTrailTrailDetails;
  AwsSsmPatchCompliance?: AwsSsmPatchComplianceDetails;
  AwsCertificateManagerCertificate?: AwsCertificateManagerCertificateDetails;
  AwsRedshiftCluster?: AwsRedshiftClusterDetails;
  AwsElbLoadBalancer?: AwsElbLoadBalancerDetails;
  AwsIamGroup?: AwsIamGroupDetails;
  AwsIamRole?: AwsIamRoleDetails;
  AwsKmsKey?: AwsKmsKeyDetails;
  AwsLambdaFunction?: AwsLambdaFunctionDetails;
  AwsLambdaLayerVersion?: AwsLambdaLayerVersionDetails;
  AwsRdsDbInstance?: AwsRdsDbInstanceDetails;
  AwsSnsTopic?: AwsSnsTopicDetails;
  AwsSqsQueue?: AwsSqsQueueDetails;
  AwsWafWebAcl?: AwsWafWebAclDetails;
  AwsRdsDbSnapshot?: AwsRdsDbSnapshotDetails;
  AwsRdsDbClusterSnapshot?: AwsRdsDbClusterSnapshotDetails;
  AwsRdsDbCluster?: AwsRdsDbClusterDetails;
  AwsEcsCluster?: AwsEcsClusterDetails;
  AwsEcsContainer?: AwsEcsContainerDetails;
  AwsEcsTaskDefinition?: AwsEcsTaskDefinitionDetails;
  Container?: ContainerDetails;
  Other?: { [key: string]: string | undefined };
  AwsRdsEventSubscription?: AwsRdsEventSubscriptionDetails;
  AwsEcsService?: AwsEcsServiceDetails;
  AwsAutoScalingLaunchConfiguration?: AwsAutoScalingLaunchConfigurationDetails;
  AwsEc2VpnConnection?: AwsEc2VpnConnectionDetails;
  AwsEcrContainerImage?: AwsEcrContainerImageDetails;
  AwsOpenSearchServiceDomain?: AwsOpenSearchServiceDomainDetails;
  AwsEc2VpcEndpointService?: AwsEc2VpcEndpointServiceDetails;
  AwsXrayEncryptionConfig?: AwsXrayEncryptionConfigDetails;
  AwsWafRateBasedRule?: AwsWafRateBasedRuleDetails;
  AwsWafRegionalRateBasedRule?: AwsWafRegionalRateBasedRuleDetails;
  AwsEcrRepository?: AwsEcrRepositoryDetails;
  AwsEksCluster?: AwsEksClusterDetails;
  AwsNetworkFirewallFirewallPolicy?: AwsNetworkFirewallFirewallPolicyDetails;
  AwsNetworkFirewallFirewall?: AwsNetworkFirewallFirewallDetails;
  AwsNetworkFirewallRuleGroup?: AwsNetworkFirewallRuleGroupDetails;
  AwsRdsDbSecurityGroup?: AwsRdsDbSecurityGroupDetails;
  AwsKinesisStream?: AwsKinesisStreamDetails;
  AwsEc2TransitGateway?: AwsEc2TransitGatewayDetails;
  AwsEfsAccessPoint?: AwsEfsAccessPointDetails;
  AwsCloudFormationStack?: AwsCloudFormationStackDetails;
  AwsCloudWatchAlarm?: AwsCloudWatchAlarmDetails;
  AwsEc2VpcPeeringConnection?: AwsEc2VpcPeeringConnectionDetails;
  AwsWafRegionalRuleGroup?: AwsWafRegionalRuleGroupDetails;
  AwsWafRegionalRule?: AwsWafRegionalRuleDetails;
  AwsWafRegionalWebAcl?: AwsWafRegionalWebAclDetails;
  AwsWafRule?: AwsWafRuleDetails;
  AwsWafRuleGroup?: AwsWafRuleGroupDetails;
  AwsEcsTask?: AwsEcsTaskDetails;
  AwsBackupBackupVault?: AwsBackupBackupVaultDetails;
  AwsBackupBackupPlan?: AwsBackupBackupPlanDetails;
  AwsBackupRecoveryPoint?: AwsBackupRecoveryPointDetails;
  AwsEc2LaunchTemplate?: AwsEc2LaunchTemplateDetails;
  AwsSageMakerNotebookInstance?: AwsSageMakerNotebookInstanceDetails;
  AwsWafv2WebAcl?: AwsWafv2WebAclDetails;
  AwsWafv2RuleGroup?: AwsWafv2RuleGroupDetails;
  AwsEc2RouteTable?: AwsEc2RouteTableDetails;
  AwsAmazonMqBroker?: AwsAmazonMqBrokerDetails;
  AwsAppSyncGraphQlApi?: AwsAppSyncGraphQlApiDetails;
  AwsEventSchemasRegistry?: AwsEventSchemasRegistryDetails;
  AwsGuardDutyDetector?: AwsGuardDutyDetectorDetails;
  AwsStepFunctionStateMachine?: AwsStepFunctionStateMachineDetails;
  AwsAthenaWorkGroup?: AwsAthenaWorkGroupDetails;
  AwsEventsEventbus?: AwsEventsEventbusDetails;
  AwsDmsEndpoint?: AwsDmsEndpointDetails;
  AwsEventsEndpoint?: AwsEventsEndpointDetails;
  AwsDmsReplicationTask?: AwsDmsReplicationTaskDetails;
  AwsDmsReplicationInstance?: AwsDmsReplicationInstanceDetails;
  AwsRoute53HostedZone?: AwsRoute53HostedZoneDetails;
  AwsMskCluster?: AwsMskClusterDetails;
  AwsS3AccessPoint?: AwsS3AccessPointDetails;
  AwsEc2ClientVpnEndpoint?: AwsEc2ClientVpnEndpointDetails;
  CodeRepository?: CodeRepositoryDetails;
  AzureResource?: any;
}
const ResourceDetails = /*@__PURE__*/ __L.at(__c94, 2) as any as S.Schema<ResourceDetails>;
export interface Resource {
  Type?: string;
  Id?: string;
  Partition?: Partition;
  Region?: string;
  Provider?: CloudProviderName;
  Owner?: ResourceOwner;
  ResourceRole?: string;
  Tags?: { [key: string]: string | undefined };
  DataClassification?: DataClassificationDetails;
  Details?: ResourceDetails;
  ApplicationName?: string;
  ApplicationArn?: string;
}
const Resource = /*@__PURE__*/ __L.at(__c94, 3) as any as S.Schema<Resource>;
export type ResourceList = Resource[];
const ResourceList = /*@__PURE__*/ __L.at(__c94, 4);
export type ComplianceStatus = "PASSED" | "WARNING" | "FAILED" | "NOT_AVAILABLE" | (string & {});
const ComplianceStatus = S.String;

export interface StatusReason {
  ReasonCode?: string;
  Description?: string;
}
const StatusReason = /*@__PURE__*/ __L.at(__c94, 5) as any as S.Schema<StatusReason>;
export type StatusReasonsList = StatusReason[];
const StatusReasonsList = /*@__PURE__*/ __L.at(__c94, 6);
export interface AssociatedStandard {
  StandardsId?: string;
}
const AssociatedStandard = /*@__PURE__*/ __L.at(__c94, 7) as any as S.Schema<AssociatedStandard>;
export type AssociatedStandardsList = AssociatedStandard[];
const AssociatedStandardsList = /*@__PURE__*/ __L.at(__c95, 0);
export interface SecurityControlParameter {
  Name?: string;
  Value?: string[];
}
const SecurityControlParameter = /*@__PURE__*/ __L.at(
  __c95,
  1,
) as any as S.Schema<SecurityControlParameter>;
export type SecurityControlParametersList = SecurityControlParameter[];
const SecurityControlParametersList = /*@__PURE__*/ __L.at(__c95, 2);
export interface Compliance {
  Status?: ComplianceStatus;
  RelatedRequirements?: string[];
  StatusReasons?: StatusReason[];
  SecurityControlId?: string;
  AssociatedStandards?: AssociatedStandard[];
  SecurityControlParameters?: SecurityControlParameter[];
}
const Compliance = /*@__PURE__*/ __L.at(__c95, 3) as any as S.Schema<Compliance>;
export type WorkflowState =
  | "NEW"
  | "ASSIGNED"
  | "IN_PROGRESS"
  | "DEFERRED"
  | "RESOLVED"
  | (string & {});
const WorkflowState = S.String;

export interface Workflow {
  Status?: WorkflowStatus;
}
const Workflow = WorkflowUpdate as any as S.Schema<Workflow>;
export type RecordState = "ACTIVE" | "ARCHIVED" | (string & {});
const RecordState = S.String;

export interface Note {
  Text?: string;
  UpdatedBy?: string;
  UpdatedAt?: string;
}
const Note = /*@__PURE__*/ __L.at(__c95, 4) as any as S.Schema<Note>;
export interface SoftwarePackage {
  Name?: string;
  Version?: string;
  Epoch?: string;
  Release?: string;
  Architecture?: string;
  PackageManager?: string;
  FilePath?: string;
  FixedInVersion?: string;
  Remediation?: string;
  SourceLayerHash?: string;
  SourceLayerArn?: string;
}
const SoftwarePackage = /*@__PURE__*/ __L.at(__c95, 5) as any as S.Schema<SoftwarePackage>;
export type SoftwarePackageList = SoftwarePackage[];
const SoftwarePackageList = /*@__PURE__*/ __L.at(__c95, 6);
export interface Adjustment {
  Metric?: string;
  Reason?: string;
}
const Adjustment = /*@__PURE__*/ __L.at(__c95, 7) as any as S.Schema<Adjustment>;
export type AdjustmentList = Adjustment[];
const AdjustmentList = /*@__PURE__*/ __L.at(__c96, 0);
export interface Cvss {
  Version?: string;
  BaseScore?: number;
  BaseVector?: string;
  Source?: string;
  Adjustments?: Adjustment[];
}
const Cvss = /*@__PURE__*/ __L.at(__c96, 1) as any as S.Schema<Cvss>;
export type CvssList = Cvss[];
const CvssList = /*@__PURE__*/ __L.at(__c96, 2);
export interface VulnerabilityVendor {
  Name?: string;
  Url?: string;
  VendorSeverity?: string;
  VendorCreatedAt?: string;
  VendorUpdatedAt?: string;
}
const VulnerabilityVendor = /*@__PURE__*/ __L.at(__c96, 3) as any as S.Schema<VulnerabilityVendor>;
export type VulnerabilityFixAvailable = "YES" | "NO" | "PARTIAL" | (string & {});
const VulnerabilityFixAvailable = S.String;

export type VulnerabilityExploitAvailable = "YES" | "NO" | (string & {});
const VulnerabilityExploitAvailable = S.String;

export interface CodeVulnerabilitiesFilePath {
  EndLine?: number;
  FileName?: string;
  FilePath?: string;
  StartLine?: number;
}
const CodeVulnerabilitiesFilePath = /*@__PURE__*/ __L.at(
  __c96,
  4,
) as any as S.Schema<CodeVulnerabilitiesFilePath>;
export interface VulnerabilityCodeVulnerabilities {
  Cwes?: string[];
  FilePath?: CodeVulnerabilitiesFilePath;
  SourceArn?: string;
}
const VulnerabilityCodeVulnerabilities = /*@__PURE__*/ __L.at(
  __c96,
  5,
) as any as S.Schema<VulnerabilityCodeVulnerabilities>;
export type VulnerabilityCodeVulnerabilitiesList = VulnerabilityCodeVulnerabilities[];
const VulnerabilityCodeVulnerabilitiesList = /*@__PURE__*/ __L.at(__c96, 6);
export interface Vulnerability {
  Id?: string;
  VulnerablePackages?: SoftwarePackage[];
  Cvss?: Cvss[];
  RelatedVulnerabilities?: string[];
  Vendor?: VulnerabilityVendor;
  ReferenceUrls?: string[];
  FixAvailable?: VulnerabilityFixAvailable;
  EpssScore?: number;
  ExploitAvailable?: VulnerabilityExploitAvailable;
  LastKnownExploitAt?: string;
  CodeVulnerabilities?: VulnerabilityCodeVulnerabilities[];
}
const Vulnerability = /*@__PURE__*/ __L.at(__c96, 7) as any as S.Schema<Vulnerability>;
export type VulnerabilityList = Vulnerability[];
const VulnerabilityList = /*@__PURE__*/ __L.at(__c97, 0);
export interface PatchSummary {
  Id?: string;
  InstalledCount?: number;
  MissingCount?: number;
  FailedCount?: number;
  InstalledOtherCount?: number;
  InstalledRejectedCount?: number;
  InstalledPendingReboot?: number;
  OperationStartTime?: string;
  OperationEndTime?: string;
  RebootOption?: string;
  Operation?: string;
}
const PatchSummary = /*@__PURE__*/ __L.at(__c97, 1) as any as S.Schema<PatchSummary>;
export interface IpOrganizationDetails {
  Asn?: number;
  AsnOrg?: string;
  Isp?: string;
  Org?: string;
}
const IpOrganizationDetails = /*@__PURE__*/ __L.at(
  __c97,
  2,
) as any as S.Schema<IpOrganizationDetails>;
export interface Country {
  CountryCode?: string;
  CountryName?: string;
}
const Country = /*@__PURE__*/ __L.at(__c97, 3) as any as S.Schema<Country>;
export interface City {
  CityName?: string;
}
const City = /*@__PURE__*/ __L.at(__c97, 4) as any as S.Schema<City>;
export interface GeoLocation {
  Lon?: number;
  Lat?: number;
}
const GeoLocation = /*@__PURE__*/ __L.at(__c97, 5) as any as S.Schema<GeoLocation>;
export interface ActionRemoteIpDetails {
  IpAddressV4?: string;
  Organization?: IpOrganizationDetails;
  Country?: Country;
  City?: City;
  GeoLocation?: GeoLocation;
}
const ActionRemoteIpDetails = /*@__PURE__*/ __L.at(
  __c97,
  6,
) as any as S.Schema<ActionRemoteIpDetails>;
export interface ActionRemotePortDetails {
  Port?: number;
  PortName?: string;
}
const ActionRemotePortDetails = /*@__PURE__*/ __L.at(
  __c97,
  7,
) as any as S.Schema<ActionRemotePortDetails>;
export interface ActionLocalPortDetails {
  Port?: number;
  PortName?: string;
}
const ActionLocalPortDetails = ActionRemotePortDetails as any as S.Schema<ActionLocalPortDetails>;
export interface NetworkConnectionAction {
  ConnectionDirection?: string;
  RemoteIpDetails?: ActionRemoteIpDetails;
  RemotePortDetails?: ActionRemotePortDetails;
  LocalPortDetails?: ActionLocalPortDetails;
  Protocol?: string;
  Blocked?: boolean;
}
const NetworkConnectionAction = /*@__PURE__*/ __L.at(
  __c98,
  0,
) as any as S.Schema<NetworkConnectionAction>;
export interface AwsApiCallActionDomainDetails {
  Domain?: string;
}
const AwsApiCallActionDomainDetails = /*@__PURE__*/ __L.at(
  __c98,
  1,
) as any as S.Schema<AwsApiCallActionDomainDetails>;
export interface AwsApiCallAction {
  Api?: string;
  ServiceName?: string;
  CallerType?: string;
  RemoteIpDetails?: ActionRemoteIpDetails;
  DomainDetails?: AwsApiCallActionDomainDetails;
  AffectedResources?: { [key: string]: string | undefined };
  FirstSeen?: string;
  LastSeen?: string;
}
const AwsApiCallAction = /*@__PURE__*/ __L.at(__c98, 2) as any as S.Schema<AwsApiCallAction>;
export interface DnsRequestAction {
  Domain?: string;
  Protocol?: string;
  Blocked?: boolean;
}
const DnsRequestAction = /*@__PURE__*/ __L.at(__c98, 3) as any as S.Schema<DnsRequestAction>;
export interface ActionLocalIpDetails {
  IpAddressV4?: string;
}
const ActionLocalIpDetails = /*@__PURE__*/ __L.at(
  __c98,
  4,
) as any as S.Schema<ActionLocalIpDetails>;
export interface PortProbeDetail {
  LocalPortDetails?: ActionLocalPortDetails;
  LocalIpDetails?: ActionLocalIpDetails;
  RemoteIpDetails?: ActionRemoteIpDetails;
}
const PortProbeDetail = /*@__PURE__*/ __L.at(__c98, 5) as any as S.Schema<PortProbeDetail>;
export type PortProbeDetailList = PortProbeDetail[];
const PortProbeDetailList = /*@__PURE__*/ __L.at(__c98, 6);
export interface PortProbeAction {
  PortProbeDetails?: PortProbeDetail[];
  Blocked?: boolean;
}
const PortProbeAction = /*@__PURE__*/ __L.at(__c98, 7) as any as S.Schema<PortProbeAction>;
export interface Action {
  ActionType?: string;
  NetworkConnectionAction?: NetworkConnectionAction;
  AwsApiCallAction?: AwsApiCallAction;
  DnsRequestAction?: DnsRequestAction;
  PortProbeAction?: PortProbeAction;
}
const Action = /*@__PURE__*/ __L.at(__c99, 0) as any as S.Schema<Action>;
export interface FindingProviderSeverity {
  Label?: SeverityLabel;
  Original?: string;
}
const FindingProviderSeverity = /*@__PURE__*/ __L.at(
  __c99,
  1,
) as any as S.Schema<FindingProviderSeverity>;
export interface FindingProviderFields {
  Confidence?: number;
  Criticality?: number;
  RelatedFindings?: RelatedFinding[];
  Severity?: FindingProviderSeverity;
  Types?: string[];
}
const FindingProviderFields = /*@__PURE__*/ __L.at(
  __c99,
  2,
) as any as S.Schema<FindingProviderFields>;
export interface GeneratorDetails {
  Name?: string;
  Description?: string;
  Labels?: string[];
}
const GeneratorDetails = /*@__PURE__*/ __L.at(__c99, 3) as any as S.Schema<GeneratorDetails>;
export interface UserAccount {
  Uid?: string;
  Name?: string;
}
const UserAccount = /*@__PURE__*/ __L.at(__c99, 4) as any as S.Schema<UserAccount>;
export interface ActorUser {
  Name?: string;
  Uid?: string;
  Type?: string;
  CredentialUid?: string;
  Account?: UserAccount;
}
const ActorUser = /*@__PURE__*/ __L.at(__c99, 5) as any as S.Schema<ActorUser>;
export type ActorSessionMfaStatus = "ENABLED" | "DISABLED" | (string & {});
const ActorSessionMfaStatus = S.String;

export interface ActorSession {
  Uid?: string;
  MfaStatus?: ActorSessionMfaStatus;
  CreatedTime?: number;
  Issuer?: string;
}
const ActorSession = /*@__PURE__*/ __L.at(__c99, 6) as any as S.Schema<ActorSession>;
export interface Actor {
  Id?: string;
  User?: ActorUser;
  Session?: ActorSession;
}
const Actor = /*@__PURE__*/ __L.at(__c99, 7) as any as S.Schema<Actor>;
export type ActorsList = Actor[];
const ActorsList = /*@__PURE__*/ __L.at(__c100, 0);
export interface NetworkGeoLocation {
  City?: string;
  Country?: string;
  Lat?: number;
  Lon?: number;
}
const NetworkGeoLocation = /*@__PURE__*/ __L.at(__c100, 1) as any as S.Schema<NetworkGeoLocation>;
export interface NetworkAutonomousSystem {
  Name?: string;
  Number?: number;
}
const NetworkAutonomousSystem = /*@__PURE__*/ __L.at(
  __c100,
  2,
) as any as S.Schema<NetworkAutonomousSystem>;
export type ConnectionDirection = "INBOUND" | "OUTBOUND" | (string & {});
const ConnectionDirection = S.String;

export interface NetworkConnection {
  Direction?: ConnectionDirection;
}
const NetworkConnection = /*@__PURE__*/ __L.at(__c100, 3) as any as S.Schema<NetworkConnection>;
export interface NetworkEndpoint {
  Id?: string;
  Ip?: string;
  Domain?: string;
  Port?: number;
  Location?: NetworkGeoLocation;
  AutonomousSystem?: NetworkAutonomousSystem;
  Connection?: NetworkConnection;
}
const NetworkEndpoint = /*@__PURE__*/ __L.at(__c100, 4) as any as S.Schema<NetworkEndpoint>;
export type NetworkEndpointsList = NetworkEndpoint[];
const NetworkEndpointsList = /*@__PURE__*/ __L.at(__c100, 5);
export interface Indicator {
  Key?: string;
  Values?: string[];
  Title?: string;
  Type?: string;
}
const Indicator = /*@__PURE__*/ __L.at(__c100, 6) as any as S.Schema<Indicator>;
export type IndicatorsList = Indicator[];
const IndicatorsList = /*@__PURE__*/ __L.at(__c100, 7);
export interface Signal {
  Type?: string;
  Id?: string;
  Title?: string;
  ProductArn?: string;
  ResourceIds?: string[];
  SignalIndicators?: Indicator[];
  Name?: string;
  CreatedAt?: number;
  UpdatedAt?: number;
  FirstSeenAt?: number;
  LastSeenAt?: number;
  Severity?: number;
  Count?: number;
  ActorIds?: string[];
  EndpointIds?: string[];
}
const Signal = /*@__PURE__*/ __L.at(__c101, 0) as any as S.Schema<Signal>;
export type SignalsList = Signal[];
const SignalsList = /*@__PURE__*/ __L.at(__c101, 1);
export interface Sequence {
  Uid?: string;
  Actors?: Actor[];
  Endpoints?: NetworkEndpoint[];
  Signals?: Signal[];
  SequenceIndicators?: Indicator[];
}
const Sequence = /*@__PURE__*/ __L.at(__c101, 2) as any as S.Schema<Sequence>;
export interface Detection {
  Sequence?: Sequence;
}
const Detection = /*@__PURE__*/ __L.at(__c101, 3) as any as S.Schema<Detection>;
export interface AwsSecurityFinding {
  SchemaVersion?: string;
  Id?: string;
  ProductArn?: string;
  ProductName?: string;
  CompanyName?: string;
  Region?: string;
  GeneratorId?: string;
  AwsAccountId?: string;
  Types?: string[];
  FirstObservedAt?: string;
  LastObservedAt?: string;
  CreatedAt?: string;
  UpdatedAt?: string;
  Severity?: Severity;
  Confidence?: number;
  Criticality?: number;
  Title?: string;
  Description?: string;
  Remediation?: Remediation;
  SourceUrl?: string;
  ProductFields?: { [key: string]: string | undefined };
  UserDefinedFields?: { [key: string]: string | undefined };
  Malware?: Malware[];
  Network?: Network;
  NetworkPath?: NetworkPathComponent[];
  Process?: ProcessDetails;
  Threats?: Threat[];
  ThreatIntelIndicators?: ThreatIntelIndicator[];
  Resources?: Resource[];
  Compliance?: Compliance;
  VerificationState?: VerificationState;
  WorkflowState?: WorkflowState;
  Workflow?: Workflow;
  RecordState?: RecordState;
  RelatedFindings?: RelatedFinding[];
  Note?: Note;
  Vulnerabilities?: Vulnerability[];
  PatchSummary?: PatchSummary;
  Action?: Action;
  FindingProviderFields?: FindingProviderFields;
  Sample?: boolean;
  GeneratorDetails?: GeneratorDetails;
  ProcessedAt?: string;
  AwsAccountName?: string;
  Detection?: Detection;
}
const AwsSecurityFinding = /*@__PURE__*/ __L.at(__c101, 4) as any as S.Schema<AwsSecurityFinding>;
export type BatchImportFindingsRequestFindingList = AwsSecurityFinding[];
const BatchImportFindingsRequestFindingList = /*@__PURE__*/ __L.at(__c101, 5);
export interface BatchImportFindingsRequest {
  Findings?: AwsSecurityFinding[];
}
const BatchImportFindingsRequest = /*@__PURE__*/ __L.at(
  __c101,
  6,
) as any as S.Schema<BatchImportFindingsRequest>;
export interface ImportFindingsError {
  Id?: string;
  ErrorCode?: string;
  ErrorMessage?: string;
}
const ImportFindingsError = /*@__PURE__*/ __L.at(__c101, 7) as any as S.Schema<ImportFindingsError>;
export type ImportFindingsErrorList = ImportFindingsError[];
const ImportFindingsErrorList = /*@__PURE__*/ __L.at(__c102, 0);
export interface BatchImportFindingsResponse {
  FailedCount: number;
  SuccessCount: number;
  FailedFindings?: (ImportFindingsError & {
    Id: NonEmptyString;
    ErrorCode: NonEmptyString;
    ErrorMessage: NonEmptyString;
  })[];
}
const BatchImportFindingsResponse = /*@__PURE__*/ __L.at(
  __c102,
  1,
) as any as S.Schema<BatchImportFindingsResponse>;
export interface UpdateAutomationRulesRequestItem {
  RuleArn?: string;
  RuleStatus?: RuleStatus;
  RuleOrder?: number;
  Description?: string;
  RuleName?: string;
  IsTerminal?: boolean;
  Criteria?: AutomationRulesFindingFilters;
  Actions?: AutomationRulesAction[];
}
const UpdateAutomationRulesRequestItem = /*@__PURE__*/ __L.at(
  __c102,
  2,
) as any as S.Schema<UpdateAutomationRulesRequestItem>;
export type UpdateAutomationRulesRequestItemsList = UpdateAutomationRulesRequestItem[];
const UpdateAutomationRulesRequestItemsList = /*@__PURE__*/ __L.at(__c102, 3);
export interface BatchUpdateAutomationRulesRequest {
  UpdateAutomationRulesRequestItems?: UpdateAutomationRulesRequestItem[];
}
const BatchUpdateAutomationRulesRequest = /*@__PURE__*/ __L.at(
  __c102,
  4,
) as any as S.Schema<BatchUpdateAutomationRulesRequest>;
export interface BatchUpdateAutomationRulesResponse {
  ProcessedAutomationRules?: string[];
  UnprocessedAutomationRules?: UnprocessedAutomationRule[];
}
const BatchUpdateAutomationRulesResponse =
  BatchDeleteAutomationRulesResponse as any as S.Schema<BatchUpdateAutomationRulesResponse>;
export interface AwsSecurityFindingIdentifier {
  Id?: string;
  ProductArn?: string;
}
const AwsSecurityFindingIdentifier = /*@__PURE__*/ __L.at(
  __c102,
  5,
) as any as S.Schema<AwsSecurityFindingIdentifier>;
export type AwsSecurityFindingIdentifierList = AwsSecurityFindingIdentifier[];
const AwsSecurityFindingIdentifierList = /*@__PURE__*/ __L.at(__c102, 6);
export interface BatchUpdateFindingsRequest {
  FindingIdentifiers?: AwsSecurityFindingIdentifier[];
  Note?: NoteUpdate;
  Severity?: SeverityUpdate;
  VerificationState?: VerificationState;
  Confidence?: number;
  Criticality?: number;
  Types?: string[];
  UserDefinedFields?: { [key: string]: string | undefined };
  Workflow?: WorkflowUpdate;
  RelatedFindings?: RelatedFinding[];
}
const BatchUpdateFindingsRequest = /*@__PURE__*/ __L.at(
  __c102,
  7,
) as any as S.Schema<BatchUpdateFindingsRequest>;
export interface BatchUpdateFindingsUnprocessedFinding {
  FindingIdentifier?: AwsSecurityFindingIdentifier;
  ErrorCode?: string;
  ErrorMessage?: string;
}
const BatchUpdateFindingsUnprocessedFinding = /*@__PURE__*/ __L.at(
  __c103,
  0,
) as any as S.Schema<BatchUpdateFindingsUnprocessedFinding>;
export type BatchUpdateFindingsUnprocessedFindingsList = BatchUpdateFindingsUnprocessedFinding[];
const BatchUpdateFindingsUnprocessedFindingsList = /*@__PURE__*/ __L.at(__c103, 1);
export interface BatchUpdateFindingsResponse {
  ProcessedFindings: (AwsSecurityFindingIdentifier & {
    Id: NonEmptyString;
    ProductArn: NonEmptyString;
  })[];
  UnprocessedFindings: (BatchUpdateFindingsUnprocessedFinding & {
    FindingIdentifier: AwsSecurityFindingIdentifier & {
      Id: NonEmptyString;
      ProductArn: NonEmptyString;
    };
    ErrorCode: NonEmptyString;
    ErrorMessage: NonEmptyString;
  })[];
}
const BatchUpdateFindingsResponse = /*@__PURE__*/ __L.at(
  __c103,
  2,
) as any as S.Schema<BatchUpdateFindingsResponse>;
export type MetadataUidList = string[];
const MetadataUidList = AutomationRulesArnsList as any as S.Schema<MetadataUidList>;
export interface OcsfFindingIdentifier {
  CloudAccountUid?: string;
  FindingInfoUid?: string;
  MetadataProductUid?: string;
}
const OcsfFindingIdentifier = /*@__PURE__*/ __L.at(
  __c103,
  3,
) as any as S.Schema<OcsfFindingIdentifier>;
export type OcsfFindingIdentifierList = OcsfFindingIdentifier[];
const OcsfFindingIdentifierList = /*@__PURE__*/ __L.at(__c103, 4);
export interface BatchUpdateFindingsV2Request {
  MetadataUids?: string[];
  FindingIdentifiers?: OcsfFindingIdentifier[];
  Comment?: string;
  SeverityId?: number;
  StatusId?: number;
}
const BatchUpdateFindingsV2Request = /*@__PURE__*/ __L.at(
  __c103,
  5,
) as any as S.Schema<BatchUpdateFindingsV2Request>;
export interface BatchUpdateFindingsV2ProcessedFinding {
  FindingIdentifier?: OcsfFindingIdentifier;
  MetadataUid?: string;
}
const BatchUpdateFindingsV2ProcessedFinding = /*@__PURE__*/ __L.at(
  __c103,
  6,
) as any as S.Schema<BatchUpdateFindingsV2ProcessedFinding>;
export type BatchUpdateFindingsV2ProcessedFindingsList = BatchUpdateFindingsV2ProcessedFinding[];
const BatchUpdateFindingsV2ProcessedFindingsList = /*@__PURE__*/ __L.at(__c103, 7);
export type BatchUpdateFindingsV2UnprocessedFindingErrorCode =
  | "ResourceNotFoundException"
  | "ValidationException"
  | "InternalServerException"
  | "ConflictException"
  | (string & {});
const BatchUpdateFindingsV2UnprocessedFindingErrorCode = S.String;

export interface BatchUpdateFindingsV2UnprocessedFinding {
  FindingIdentifier?: OcsfFindingIdentifier;
  MetadataUid?: string;
  ErrorCode?: BatchUpdateFindingsV2UnprocessedFindingErrorCode;
  ErrorMessage?: string;
}
const BatchUpdateFindingsV2UnprocessedFinding = /*@__PURE__*/ __L.at(
  __c104,
  0,
) as any as S.Schema<BatchUpdateFindingsV2UnprocessedFinding>;
export type BatchUpdateFindingsV2UnprocessedFindingsList =
  BatchUpdateFindingsV2UnprocessedFinding[];
const BatchUpdateFindingsV2UnprocessedFindingsList = /*@__PURE__*/ __L.at(__c104, 1);
export interface BatchUpdateFindingsV2Response {
  ProcessedFindings: (BatchUpdateFindingsV2ProcessedFinding & {
    FindingIdentifier: OcsfFindingIdentifier & {
      CloudAccountUid: NonEmptyString;
      FindingInfoUid: NonEmptyString;
      MetadataProductUid: NonEmptyString;
    };
  })[];
  UnprocessedFindings: (BatchUpdateFindingsV2UnprocessedFinding & {
    FindingIdentifier: OcsfFindingIdentifier & {
      CloudAccountUid: NonEmptyString;
      FindingInfoUid: NonEmptyString;
      MetadataProductUid: NonEmptyString;
    };
  })[];
}
const BatchUpdateFindingsV2Response = /*@__PURE__*/ __L.at(
  __c104,
  2,
) as any as S.Schema<BatchUpdateFindingsV2Response>;
export interface StandardsControlAssociationUpdate {
  StandardsArn?: string;
  SecurityControlId?: string;
  AssociationStatus?: AssociationStatus;
  UpdatedReason?: string;
}
const StandardsControlAssociationUpdate = /*@__PURE__*/ __L.at(
  __c104,
  3,
) as any as S.Schema<StandardsControlAssociationUpdate>;
export type StandardsControlAssociationUpdates = StandardsControlAssociationUpdate[];
const StandardsControlAssociationUpdates = /*@__PURE__*/ __L.at(__c104, 4);
export interface BatchUpdateStandardsControlAssociationsRequest {
  StandardsControlAssociationUpdates?: StandardsControlAssociationUpdate[];
}
const BatchUpdateStandardsControlAssociationsRequest = /*@__PURE__*/ __L.at(
  __c104,
  5,
) as any as S.Schema<BatchUpdateStandardsControlAssociationsRequest>;
export interface UnprocessedStandardsControlAssociationUpdate {
  StandardsControlAssociationUpdate?: StandardsControlAssociationUpdate;
  ErrorCode?: UnprocessedErrorCode;
  ErrorReason?: string;
}
const UnprocessedStandardsControlAssociationUpdate = /*@__PURE__*/ __L.at(
  __c104,
  6,
) as any as S.Schema<UnprocessedStandardsControlAssociationUpdate>;
export type UnprocessedStandardsControlAssociationUpdates =
  UnprocessedStandardsControlAssociationUpdate[];
const UnprocessedStandardsControlAssociationUpdates = /*@__PURE__*/ __L.at(__c104, 7);
export interface BatchUpdateStandardsControlAssociationsResponse {
  UnprocessedAssociationUpdates?: (UnprocessedStandardsControlAssociationUpdate & {
    StandardsControlAssociationUpdate: StandardsControlAssociationUpdate & {
      StandardsArn: NonEmptyString;
      SecurityControlId: NonEmptyString;
      AssociationStatus: AssociationStatus;
    };
    ErrorCode: UnprocessedErrorCode;
  })[];
}
const BatchUpdateStandardsControlAssociationsResponse = /*@__PURE__*/ __L.at(
  __c105,
  0,
) as any as S.Schema<BatchUpdateStandardsControlAssociationsResponse>;
export interface CreateActionTargetRequest {
  Name?: string;
  Description?: string;
  Id?: string;
}
const CreateActionTargetRequest = /*@__PURE__*/ __L.at(
  __c105,
  1,
) as any as S.Schema<CreateActionTargetRequest>;
export interface CreateActionTargetResponse {
  ActionTargetArn: string;
}
const CreateActionTargetResponse = /*@__PURE__*/ __L.at(
  __c105,
  2,
) as any as S.Schema<CreateActionTargetResponse>;
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = FieldMap as any as S.Schema<TagMap>;
export type ClientToken = string;
export interface CreateAggregatorV2Request {
  RegionLinkingMode?: string;
  LinkedRegions?: string[];
  Tags?: { [key: string]: string | undefined };
  ClientToken?: string;
}
const CreateAggregatorV2Request = /*@__PURE__*/ __L.at(
  __c105,
  3,
) as any as S.Schema<CreateAggregatorV2Request>;
export interface CreateAggregatorV2Response {
  AggregatorV2Arn?: string;
  AggregationRegion?: string;
  RegionLinkingMode?: string;
  LinkedRegions?: string[];
}
const CreateAggregatorV2Response = /*@__PURE__*/ __L.at(
  __c105,
  4,
) as any as S.Schema<CreateAggregatorV2Response>;
export interface CreateAutomationRuleRequest {
  Tags?: { [key: string]: string | undefined };
  RuleStatus?: RuleStatus;
  RuleOrder?: number;
  RuleName?: string;
  Description?: string;
  IsTerminal?: boolean;
  Criteria?: AutomationRulesFindingFilters;
  Actions?: AutomationRulesAction[];
}
const CreateAutomationRuleRequest = /*@__PURE__*/ __L.at(
  __c105,
  5,
) as any as S.Schema<CreateAutomationRuleRequest>;
export interface CreateAutomationRuleResponse {
  RuleArn?: string;
}
const CreateAutomationRuleResponse = /*@__PURE__*/ __L.at(
  __c105,
  6,
) as any as S.Schema<CreateAutomationRuleResponse>;
export type RuleStatusV2 = "ENABLED" | "DISABLED" | (string & {});
const RuleStatusV2 = S.String;

export type RuleOrderValueV2 = number;
export type OcsfStringField =
  | "metadata.uid"
  | "activity_name"
  | "cloud.account.uid"
  | "cloud.provider"
  | "cloud.region"
  | "compliance.assessments.category"
  | "compliance.assessments.name"
  | "compliance.control"
  | "compliance.status"
  | "compliance.standards"
  | "finding_info.desc"
  | "finding_info.src_url"
  | "finding_info.title"
  | "finding_info.types"
  | "finding_info.uid"
  | "finding_info.related_events.traits.category"
  | "finding_info.related_events.uid"
  | "finding_info.related_events.product.uid"
  | "finding_info.related_events.title"
  | "metadata.product.name"
  | "metadata.product.uid"
  | "metadata.product.vendor_name"
  | "remediation.desc"
  | "remediation.references"
  | "resources.cloud_partition"
  | "resources.name"
  | "resources.owner.account.uid"
  | "resources.owner.org.uid"
  | "resources.owner.account.name"
  | "resources.provider"
  | "resources.region"
  | "resources.type"
  | "resources.uid"
  | "severity"
  | "status"
  | "comment"
  | "vulnerabilities.fix_coverage"
  | "class_name"
  | "databucket.encryption_details.algorithm"
  | "databucket.encryption_details.key_uid"
  | "databucket.file.data_classifications.classifier_details.type"
  | "evidences.actor.user.account.uid"
  | "evidences.api.operation"
  | "evidences.api.response.error_message"
  | "evidences.api.service.name"
  | "evidences.connection_info.direction"
  | "evidences.connection_info.protocol_name"
  | "evidences.dst_endpoint.autonomous_system.name"
  | "evidences.dst_endpoint.location.city"
  | "evidences.dst_endpoint.location.country"
  | "evidences.src_endpoint.autonomous_system.name"
  | "evidences.src_endpoint.hostname"
  | "evidences.src_endpoint.location.city"
  | "evidences.src_endpoint.location.country"
  | "finding_info.analytic.name"
  | "malware.name"
  | "malware_scan_info.uid"
  | "malware.severity"
  | "resources.cloud_function.layers.uid_alt"
  | "resources.cloud_function.runtime"
  | "resources.cloud_function.user.uid"
  | "resources.device.encryption_details.key_uid"
  | "resources.device.image.uid"
  | "resources.image.architecture"
  | "resources.image.registry_uid"
  | "resources.image.repository_name"
  | "resources.image.uid"
  | "resources.subnet_info.uid"
  | "resources.vpc_uid"
  | "vulnerabilities.affected_code.file.path"
  | "vulnerabilities.affected_packages.name"
  | "vulnerabilities.cve.epss.score"
  | "vulnerabilities.cve.uid"
  | "vulnerabilities.related_vulnerabilities"
  | "cloud.account.name"
  | "vendor_attributes.severity"
  | (string & {});
const OcsfStringField = S.String;

export interface OcsfStringFilter {
  FieldName?: OcsfStringField;
  Filter?: StringFilter;
}
const OcsfStringFilter = /*@__PURE__*/ __L.at(__c105, 7) as any as S.Schema<OcsfStringFilter>;
export type OcsfStringFilterList = OcsfStringFilter[];
const OcsfStringFilterList = /*@__PURE__*/ __L.at(__c106, 0);
export type OcsfDateField =
  | "finding_info.created_time_dt"
  | "finding_info.first_seen_time_dt"
  | "finding_info.last_seen_time_dt"
  | "finding_info.modified_time_dt"
  | "resources.image.created_time_dt"
  | "resources.image.last_used_time_dt"
  | "resources.modified_time_dt"
  | (string & {});
const OcsfDateField = S.String;

export interface OcsfDateFilter {
  FieldName?: OcsfDateField;
  Filter?: DateFilter;
}
const OcsfDateFilter = /*@__PURE__*/ __L.at(__c106, 1) as any as S.Schema<OcsfDateFilter>;
export type OcsfDateFilterList = OcsfDateFilter[];
const OcsfDateFilterList = /*@__PURE__*/ __L.at(__c106, 2);
export type OcsfBooleanField =
  | "compliance.assessments.meets_criteria"
  | "vulnerabilities.is_exploit_available"
  | "vulnerabilities.is_fix_available"
  | (string & {});
const OcsfBooleanField = S.String;

export interface BooleanFilter {
  Value?: boolean;
}
const BooleanFilter = /*@__PURE__*/ __L.at(__c106, 3) as any as S.Schema<BooleanFilter>;
export interface OcsfBooleanFilter {
  FieldName?: OcsfBooleanField;
  Filter?: BooleanFilter;
}
const OcsfBooleanFilter = /*@__PURE__*/ __L.at(__c106, 4) as any as S.Schema<OcsfBooleanFilter>;
export type OcsfBooleanFilterList = OcsfBooleanFilter[];
const OcsfBooleanFilterList = /*@__PURE__*/ __L.at(__c106, 5);
export type OcsfNumberField =
  | "activity_id"
  | "compliance.status_id"
  | "confidence_score"
  | "severity_id"
  | "status_id"
  | "finding_info.related_events_count"
  | "evidences.api.response.code"
  | "evidences.dst_endpoint.autonomous_system.number"
  | "evidences.dst_endpoint.port"
  | "evidences.src_endpoint.autonomous_system.number"
  | "evidences.src_endpoint.port"
  | "resources.image.in_use_count"
  | "vulnerabilities.cve.cvss.base_score"
  | "vendor_attributes.severity_id"
  | (string & {});
const OcsfNumberField = S.String;

export interface OcsfNumberFilter {
  FieldName?: OcsfNumberField;
  Filter?: NumberFilter;
}
const OcsfNumberFilter = /*@__PURE__*/ __L.at(__c106, 6) as any as S.Schema<OcsfNumberFilter>;
export type OcsfNumberFilterList = OcsfNumberFilter[];
const OcsfNumberFilterList = /*@__PURE__*/ __L.at(__c106, 7);
export type OcsfMapField =
  | "resources.tags"
  | "compliance.control_parameters"
  | "databucket.tags"
  | "finding_info.tags"
  | (string & {});
const OcsfMapField = S.String;

export interface OcsfMapFilter {
  FieldName?: OcsfMapField;
  Filter?: MapFilter;
}
const OcsfMapFilter = /*@__PURE__*/ __L.at(__c107, 0) as any as S.Schema<OcsfMapFilter>;
export type OcsfMapFilterList = OcsfMapFilter[];
const OcsfMapFilterList = /*@__PURE__*/ __L.at(__c107, 1);
export type OcsfIpField = "evidences.dst_endpoint.ip" | "evidences.src_endpoint.ip" | (string & {});
const OcsfIpField = S.String;

export interface IpFilter {
  Cidr?: string;
}
const IpFilter = /*@__PURE__*/ __L.at(__c107, 2) as any as S.Schema<IpFilter>;
export interface OcsfIpFilter {
  FieldName?: OcsfIpField;
  Filter?: IpFilter;
}
const OcsfIpFilter = /*@__PURE__*/ __L.at(__c107, 3) as any as S.Schema<OcsfIpFilter>;
export type OcsfIpFilterList = OcsfIpFilter[];
const OcsfIpFilterList = /*@__PURE__*/ __L.at(__c107, 4);
export type AllowedOperators = "AND" | "OR" | (string & {});
const AllowedOperators = S.String;

export interface CompositeFilter {
  StringFilters?: OcsfStringFilter[];
  DateFilters?: OcsfDateFilter[];
  BooleanFilters?: OcsfBooleanFilter[];
  NumberFilters?: OcsfNumberFilter[];
  MapFilters?: OcsfMapFilter[];
  IpFilters?: OcsfIpFilter[];
  NestedCompositeFilters?: CompositeFilter[];
  Operator?: AllowedOperators;
}
const CompositeFilter = /*@__PURE__*/ __L.at(__c107, 5) as any as S.Schema<CompositeFilter>;
export type CompositeFilterList = CompositeFilter[];
const CompositeFilterList = /*@__PURE__*/ __L.at(__c107, 6) as any as S.Schema<CompositeFilterList>;
export interface OcsfFindingFilters {
  CompositeFilters?: CompositeFilter[];
  CompositeOperator?: AllowedOperators;
}
const OcsfFindingFilters = /*@__PURE__*/ __L.at(__c107, 7) as any as S.Schema<OcsfFindingFilters>;
export type Criteria = { OcsfFindingCriteria: OcsfFindingFilters };
const Criteria = /*@__PURE__*/ __L.at(__c108, 0);
export type AutomationRulesActionTypeV2 =
  | "FINDING_FIELDS_UPDATE"
  | "EXTERNAL_INTEGRATION"
  | (string & {});
const AutomationRulesActionTypeV2 = S.String;

export interface AutomationRulesFindingFieldsUpdateV2 {
  SeverityId?: number;
  Comment?: string;
  StatusId?: number;
}
const AutomationRulesFindingFieldsUpdateV2 = /*@__PURE__*/ __L.at(
  __c108,
  1,
) as any as S.Schema<AutomationRulesFindingFieldsUpdateV2>;
export interface ExternalIntegrationConfiguration {
  ConnectorArn?: string;
}
const ExternalIntegrationConfiguration = /*@__PURE__*/ __L.at(
  __c108,
  2,
) as any as S.Schema<ExternalIntegrationConfiguration>;
export interface AutomationRulesActionV2 {
  Type?: AutomationRulesActionTypeV2;
  FindingFieldsUpdate?: AutomationRulesFindingFieldsUpdateV2;
  ExternalIntegrationConfiguration?: ExternalIntegrationConfiguration;
}
const AutomationRulesActionV2 = /*@__PURE__*/ __L.at(
  __c108,
  3,
) as any as S.Schema<AutomationRulesActionV2>;
export type AutomationRulesActionListV2 = AutomationRulesActionV2[];
const AutomationRulesActionListV2 = /*@__PURE__*/ __L.at(__c108, 4);
export interface CreateAutomationRuleV2Request {
  RuleName?: string;
  RuleStatus?: RuleStatusV2;
  Description?: string;
  RuleOrder?: number;
  Criteria?: Criteria;
  Actions?: AutomationRulesActionV2[];
  Tags?: { [key: string]: string | undefined };
  ClientToken?: string;
}
const CreateAutomationRuleV2Request = /*@__PURE__*/ __L.at(
  __c108,
  5,
) as any as S.Schema<CreateAutomationRuleV2Request>;
export interface CreateAutomationRuleV2Response {
  RuleArn?: string;
  RuleId?: string;
}
const CreateAutomationRuleV2Response = /*@__PURE__*/ __L.at(
  __c108,
  6,
) as any as S.Schema<CreateAutomationRuleV2Response>;
export type EnabledStandardIdentifierList = string[];
const EnabledStandardIdentifierList =
  AutomationRulesArnsList as any as S.Schema<EnabledStandardIdentifierList>;
export type EnabledSecurityControlIdentifierList = string[];
const EnabledSecurityControlIdentifierList =
  AutomationRulesArnsList as any as S.Schema<EnabledSecurityControlIdentifierList>;
export type DisabledSecurityControlIdentifierList = string[];
const DisabledSecurityControlIdentifierList =
  AutomationRulesArnsList as any as S.Schema<DisabledSecurityControlIdentifierList>;
export interface SecurityControlCustomParameter {
  SecurityControlId?: string;
  Parameters?: { [key: string]: ParameterConfiguration | undefined };
}
const SecurityControlCustomParameter = /*@__PURE__*/ __L.at(
  __c108,
  7,
) as any as S.Schema<SecurityControlCustomParameter>;
export type SecurityControlCustomParametersList = SecurityControlCustomParameter[];
const SecurityControlCustomParametersList = /*@__PURE__*/ __L.at(__c109, 0);
export interface SecurityControlsConfiguration {
  EnabledSecurityControlIdentifiers?: string[];
  DisabledSecurityControlIdentifiers?: string[];
  SecurityControlCustomParameters?: SecurityControlCustomParameter[];
}
const SecurityControlsConfiguration = /*@__PURE__*/ __L.at(
  __c109,
  1,
) as any as S.Schema<SecurityControlsConfiguration>;
export interface SecurityHubPolicy {
  ServiceEnabled?: boolean;
  EnabledStandardIdentifiers?: string[];
  SecurityControlsConfiguration?: SecurityControlsConfiguration;
}
const SecurityHubPolicy = /*@__PURE__*/ __L.at(__c109, 2) as any as S.Schema<SecurityHubPolicy>;
export type Policy = { SecurityHub: SecurityHubPolicy };
const Policy = /*@__PURE__*/ __L.at(__c109, 3);
export interface CreateConfigurationPolicyRequest {
  Name?: string;
  Description?: string;
  ConfigurationPolicy?: Policy;
  Tags?: { [key: string]: string | undefined };
}
const CreateConfigurationPolicyRequest = /*@__PURE__*/ __L.at(
  __c109,
  4,
) as any as S.Schema<CreateConfigurationPolicyRequest>;
export interface CreateConfigurationPolicyResponse {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  UpdatedAt?: Date;
  CreatedAt?: Date;
  ConfigurationPolicy?: Policy;
}
const CreateConfigurationPolicyResponse = /*@__PURE__*/ __L.at(
  __c109,
  5,
) as any as S.Schema<CreateConfigurationPolicyResponse>;
export type ScopeType = "TENANT" | "SUBSCRIPTION" | (string & {});
const ScopeType = S.String;

export type ScopeValueList = string[];
const ScopeValueList = AutomationRulesArnsList as any as S.Schema<ScopeValueList>;
export interface AzureScopeConfiguration {
  ScopeType?: ScopeType;
  ScopeValues?: string[];
}
const AzureScopeConfiguration = /*@__PURE__*/ __L.at(
  __c109,
  6,
) as any as S.Schema<AzureScopeConfiguration>;
export type AzureRegionList = string[];
const AzureRegionList = AutomationRulesArnsList as any as S.Schema<AzureRegionList>;
export interface AzureProviderConfiguration {
  AWSConfigConnectorArn?: string;
  ScopeConfiguration?: AzureScopeConfiguration;
  AzureRegions?: string[];
}
const AzureProviderConfiguration = /*@__PURE__*/ __L.at(
  __c109,
  7,
) as any as S.Schema<AzureProviderConfiguration>;
export type CspmProviderConfiguration = { Azure: AzureProviderConfiguration };
const CspmProviderConfiguration = /*@__PURE__*/ __L.at(__c110, 0);
export interface CreateConnectorRequest {
  Name?: string;
  Description?: string;
  Provider?: CspmProviderConfiguration;
  Tags?: { [key: string]: string | undefined };
  ClientToken?: string;
}
const CreateConnectorRequest = /*@__PURE__*/ __L.at(
  __c110,
  1,
) as any as S.Schema<CreateConnectorRequest>;
export type CspmConnectorStatus =
  | "CONNECTED"
  | "DEGRADED"
  | "FAILED_TO_CONNECT"
  | "UNKNOWN"
  | (string & {});
const CspmConnectorStatus = S.String;

export type CspmEnablementStatus =
  | "ENABLED"
  | "PENDING_ENABLEMENT"
  | "PENDING_UPDATE"
  | "PENDING_DELETION"
  | (string & {});
const CspmEnablementStatus = S.String;

export interface CreateConnectorResponse {
  ConnectorArn: string;
  ConnectorId: string;
  ConnectorStatus?: CspmConnectorStatus;
  EnablementStatus?: CspmEnablementStatus;
}
const CreateConnectorResponse = /*@__PURE__*/ __L.at(
  __c110,
  2,
) as any as S.Schema<CreateConnectorResponse>;
export interface JiraCloudProviderConfiguration {
  ProjectKey?: string;
}
const JiraCloudProviderConfiguration = /*@__PURE__*/ __L.at(
  __c110,
  3,
) as any as S.Schema<JiraCloudProviderConfiguration>;
export interface ServiceNowProviderConfiguration {
  InstanceName?: string;
  SecretArn?: string;
}
const ServiceNowProviderConfiguration = /*@__PURE__*/ __L.at(
  __c110,
  4,
) as any as S.Schema<ServiceNowProviderConfiguration>;
export type ProviderConfiguration =
  | { JiraCloud: JiraCloudProviderConfiguration; ServiceNow?: never; Azure?: never }
  | { JiraCloud?: never; ServiceNow: ServiceNowProviderConfiguration; Azure?: never }
  | { JiraCloud?: never; ServiceNow?: never; Azure: AzureProviderConfiguration };
const ProviderConfiguration = /*@__PURE__*/ __L.at(__c110, 5);
export interface CreateConnectorV2Request {
  Name?: string;
  Description?: string;
  Provider?: ProviderConfiguration;
  KmsKeyArn?: string;
  Tags?: { [key: string]: string | undefined };
  ClientToken?: string;
}
const CreateConnectorV2Request = /*@__PURE__*/ __L.at(
  __c110,
  6,
) as any as S.Schema<CreateConnectorV2Request>;
export type ConnectorStatus =
  | "CONNECTED"
  | "DEGRADED"
  | "FAILED_TO_CONNECT"
  | "PENDING_AUTHORIZATION"
  | "PENDING_CONFIGURATION"
  | "UNKNOWN"
  | (string & {});
const ConnectorStatus = S.String;

export type EnablementStatus =
  | "ENABLED"
  | "PENDING_ENABLEMENT"
  | "FAILED_TO_ENABLE"
  | "PENDING_UPDATE"
  | "FAILED_TO_UPDATE"
  | "PENDING_DELETION"
  | "FAILED_TO_DELETE"
  | (string & {});
const EnablementStatus = S.String;

export interface CreateConnectorV2Response {
  ConnectorArn: string;
  ConnectorId: string;
  AuthUrl?: string;
  ConnectorStatus?: ConnectorStatus;
  EnablementStatus?: EnablementStatus;
}
const CreateConnectorV2Response = /*@__PURE__*/ __L.at(
  __c110,
  7,
) as any as S.Schema<CreateConnectorV2Response>;
export interface CreateFindingAggregatorRequest {
  RegionLinkingMode?: string;
  Regions?: string[];
}
const CreateFindingAggregatorRequest = /*@__PURE__*/ __L.at(
  __c111,
  0,
) as any as S.Schema<CreateFindingAggregatorRequest>;
export interface CreateFindingAggregatorResponse {
  FindingAggregatorArn?: string;
  FindingAggregationRegion?: string;
  RegionLinkingMode?: string;
  Regions?: string[];
}
const CreateFindingAggregatorResponse = /*@__PURE__*/ __L.at(
  __c111,
  1,
) as any as S.Schema<CreateFindingAggregatorResponse>;
export type IpFilterList = IpFilter[];
const IpFilterList = /*@__PURE__*/ __L.at(__c111, 2);
export interface KeywordFilter {
  Value?: string;
}
const KeywordFilter = /*@__PURE__*/ __L.at(__c111, 3) as any as S.Schema<KeywordFilter>;
export type KeywordFilterList = KeywordFilter[];
const KeywordFilterList = /*@__PURE__*/ __L.at(__c111, 4);
export type BooleanFilterList = BooleanFilter[];
const BooleanFilterList = /*@__PURE__*/ __L.at(__c111, 5);
export interface AwsSecurityFindingFilters {
  ProductArn?: StringFilter[];
  AwsAccountId?: StringFilter[];
  Id?: StringFilter[];
  GeneratorId?: StringFilter[];
  Region?: StringFilter[];
  Type?: StringFilter[];
  FirstObservedAt?: DateFilter[];
  LastObservedAt?: DateFilter[];
  CreatedAt?: DateFilter[];
  UpdatedAt?: DateFilter[];
  SeverityProduct?: NumberFilter[];
  SeverityNormalized?: NumberFilter[];
  SeverityLabel?: StringFilter[];
  Confidence?: NumberFilter[];
  Criticality?: NumberFilter[];
  Title?: StringFilter[];
  Description?: StringFilter[];
  RecommendationText?: StringFilter[];
  SourceUrl?: StringFilter[];
  ProductFields?: MapFilter[];
  ProductName?: StringFilter[];
  CompanyName?: StringFilter[];
  UserDefinedFields?: MapFilter[];
  MalwareName?: StringFilter[];
  MalwareType?: StringFilter[];
  MalwarePath?: StringFilter[];
  MalwareState?: StringFilter[];
  NetworkDirection?: StringFilter[];
  NetworkProtocol?: StringFilter[];
  NetworkSourceIpV4?: IpFilter[];
  NetworkSourceIpV6?: IpFilter[];
  NetworkSourcePort?: NumberFilter[];
  NetworkSourceDomain?: StringFilter[];
  NetworkSourceMac?: StringFilter[];
  NetworkDestinationIpV4?: IpFilter[];
  NetworkDestinationIpV6?: IpFilter[];
  NetworkDestinationPort?: NumberFilter[];
  NetworkDestinationDomain?: StringFilter[];
  ProcessName?: StringFilter[];
  ProcessPath?: StringFilter[];
  ProcessPid?: NumberFilter[];
  ProcessParentPid?: NumberFilter[];
  ProcessLaunchedAt?: DateFilter[];
  ProcessTerminatedAt?: DateFilter[];
  ThreatIntelIndicatorType?: StringFilter[];
  ThreatIntelIndicatorValue?: StringFilter[];
  ThreatIntelIndicatorCategory?: StringFilter[];
  ThreatIntelIndicatorLastObservedAt?: DateFilter[];
  ThreatIntelIndicatorSource?: StringFilter[];
  ThreatIntelIndicatorSourceUrl?: StringFilter[];
  ResourceType?: StringFilter[];
  ResourceId?: StringFilter[];
  ResourcePartition?: StringFilter[];
  ResourceRegion?: StringFilter[];
  ResourceTags?: MapFilter[];
  ResourceAwsEc2InstanceType?: StringFilter[];
  ResourceAwsEc2InstanceImageId?: StringFilter[];
  ResourceAwsEc2InstanceIpV4Addresses?: IpFilter[];
  ResourceAwsEc2InstanceIpV6Addresses?: IpFilter[];
  ResourceAwsEc2InstanceKeyName?: StringFilter[];
  ResourceAwsEc2InstanceIamInstanceProfileArn?: StringFilter[];
  ResourceAwsEc2InstanceVpcId?: StringFilter[];
  ResourceAwsEc2InstanceSubnetId?: StringFilter[];
  ResourceAwsEc2InstanceLaunchedAt?: DateFilter[];
  ResourceAwsS3BucketOwnerId?: StringFilter[];
  ResourceAwsS3BucketOwnerName?: StringFilter[];
  ResourceAwsIamAccessKeyUserName?: StringFilter[];
  ResourceAwsIamAccessKeyPrincipalName?: StringFilter[];
  ResourceAwsIamAccessKeyStatus?: StringFilter[];
  ResourceAwsIamAccessKeyCreatedAt?: DateFilter[];
  ResourceAwsIamUserUserName?: StringFilter[];
  ResourceContainerName?: StringFilter[];
  ResourceContainerImageId?: StringFilter[];
  ResourceContainerImageName?: StringFilter[];
  ResourceContainerLaunchedAt?: DateFilter[];
  ResourceDetailsOther?: MapFilter[];
  ComplianceStatus?: StringFilter[];
  VerificationState?: StringFilter[];
  WorkflowState?: StringFilter[];
  WorkflowStatus?: StringFilter[];
  RecordState?: StringFilter[];
  RelatedFindingsProductArn?: StringFilter[];
  RelatedFindingsId?: StringFilter[];
  NoteText?: StringFilter[];
  NoteUpdatedAt?: DateFilter[];
  NoteUpdatedBy?: StringFilter[];
  Keyword?: KeywordFilter[];
  FindingProviderFieldsConfidence?: NumberFilter[];
  FindingProviderFieldsCriticality?: NumberFilter[];
  FindingProviderFieldsRelatedFindingsId?: StringFilter[];
  FindingProviderFieldsRelatedFindingsProductArn?: StringFilter[];
  FindingProviderFieldsSeverityLabel?: StringFilter[];
  FindingProviderFieldsSeverityOriginal?: StringFilter[];
  FindingProviderFieldsTypes?: StringFilter[];
  Sample?: BooleanFilter[];
  ComplianceSecurityControlId?: StringFilter[];
  ComplianceAssociatedStandardsId?: StringFilter[];
  VulnerabilitiesExploitAvailable?: StringFilter[];
  VulnerabilitiesFixAvailable?: StringFilter[];
  ComplianceSecurityControlParametersName?: StringFilter[];
  ComplianceSecurityControlParametersValue?: StringFilter[];
  AwsAccountName?: StringFilter[];
  ResourceApplicationName?: StringFilter[];
  ResourceApplicationArn?: StringFilter[];
  ResourceOwnerAccountId?: StringFilter[];
  ResourceOwnerOrgId?: StringFilter[];
  ResourceProvider?: StringFilter[];
}
const AwsSecurityFindingFilters = /*@__PURE__*/ __L.at(
  __c111,
  6,
) as any as S.Schema<AwsSecurityFindingFilters>;
export interface CreateInsightRequest {
  Name?: string;
  Filters?: AwsSecurityFindingFilters;
  GroupByAttribute?: string;
}
const CreateInsightRequest = /*@__PURE__*/ __L.at(
  __c111,
  7,
) as any as S.Schema<CreateInsightRequest>;
export interface CreateInsightResponse {
  InsightArn: string;
}
const CreateInsightResponse = /*@__PURE__*/ __L.at(
  __c112,
  0,
) as any as S.Schema<CreateInsightResponse>;
export type AccountId = string;
export interface AccountDetails {
  AccountId?: string;
  Email?: string;
}
const AccountDetails = /*@__PURE__*/ __L.at(__c112, 1) as any as S.Schema<AccountDetails>;
export type AccountDetailsList = AccountDetails[];
const AccountDetailsList = /*@__PURE__*/ __L.at(__c112, 2);
export interface CreateMembersRequest {
  AccountDetails?: AccountDetails[];
}
const CreateMembersRequest = /*@__PURE__*/ __L.at(
  __c112,
  3,
) as any as S.Schema<CreateMembersRequest>;
export interface Result {
  AccountId?: string;
  ProcessingResult?: string;
}
const Result = /*@__PURE__*/ __L.at(__c112, 4) as any as S.Schema<Result>;
export type ResultList = Result[];
const ResultList = /*@__PURE__*/ __L.at(__c112, 5);
export interface CreateMembersResponse {
  UnprocessedAccounts?: Result[];
}
const CreateMembersResponse = /*@__PURE__*/ __L.at(
  __c112,
  6,
) as any as S.Schema<CreateMembersResponse>;
export type TicketCreationMode = "DRYRUN" | (string & {});
const TicketCreationMode = S.String;

export interface CreateTicketV2Request {
  ConnectorId?: string;
  FindingMetadataUid?: string;
  ClientToken?: string;
  Mode?: TicketCreationMode;
}
const CreateTicketV2Request = /*@__PURE__*/ __L.at(
  __c112,
  7,
) as any as S.Schema<CreateTicketV2Request>;
export interface CreateTicketV2Response {
  TicketId: string;
  TicketSrcUrl?: string;
}
const CreateTicketV2Response = /*@__PURE__*/ __L.at(
  __c113,
  0,
) as any as S.Schema<CreateTicketV2Response>;
export type AccountIdList = string[];
const AccountIdList = AutomationRulesArnsList as any as S.Schema<AccountIdList>;
export interface DeclineInvitationsRequest {
  AccountIds?: string[];
}
const DeclineInvitationsRequest = /*@__PURE__*/ __L.at(
  __c113,
  1,
) as any as S.Schema<DeclineInvitationsRequest>;
export interface DeclineInvitationsResponse {
  UnprocessedAccounts?: Result[];
}
const DeclineInvitationsResponse = /*@__PURE__*/ __L.at(
  __c113,
  2,
) as any as S.Schema<DeclineInvitationsResponse>;
export interface DeleteActionTargetRequest {
  ActionTargetArn: string;
}
const DeleteActionTargetRequest = /*@__PURE__*/ __L.at(
  __c113,
  3,
) as any as S.Schema<DeleteActionTargetRequest>;
export interface DeleteActionTargetResponse {
  ActionTargetArn: string;
}
const DeleteActionTargetResponse =
  CreateActionTargetResponse as any as S.Schema<DeleteActionTargetResponse>;
export interface DeleteAggregatorV2Request {
  AggregatorV2Arn: string;
}
const DeleteAggregatorV2Request = /*@__PURE__*/ __L.at(
  __c113,
  4,
) as any as S.Schema<DeleteAggregatorV2Request>;
export interface DeleteAggregatorV2Response {}
const DeleteAggregatorV2Response =
  AcceptInvitationResponse as any as S.Schema<DeleteAggregatorV2Response>;
export interface DeleteAutomationRuleV2Request {
  Identifier: string;
}
const DeleteAutomationRuleV2Request = /*@__PURE__*/ __L.at(
  __c113,
  5,
) as any as S.Schema<DeleteAutomationRuleV2Request>;
export interface DeleteAutomationRuleV2Response {}
const DeleteAutomationRuleV2Response =
  AcceptInvitationResponse as any as S.Schema<DeleteAutomationRuleV2Response>;
export interface DeleteConfigurationPolicyRequest {
  Identifier: string;
}
const DeleteConfigurationPolicyRequest = /*@__PURE__*/ __L.at(
  __c113,
  6,
) as any as S.Schema<DeleteConfigurationPolicyRequest>;
export interface DeleteConfigurationPolicyResponse {}
const DeleteConfigurationPolicyResponse =
  AcceptAdministratorInvitationResponse as any as S.Schema<DeleteConfigurationPolicyResponse>;
export interface DeleteConnectorRequest {
  ConnectorId: string;
}
const DeleteConnectorRequest = /*@__PURE__*/ __L.at(
  __c113,
  7,
) as any as S.Schema<DeleteConnectorRequest>;
export interface DeleteConnectorResponse {
  EnablementStatus?: CspmEnablementStatus;
}
const DeleteConnectorResponse = /*@__PURE__*/ __L.at(
  __c114,
  0,
) as any as S.Schema<DeleteConnectorResponse>;
export interface DeleteConnectorV2Request {
  ConnectorId: string;
}
const DeleteConnectorV2Request = /*@__PURE__*/ __L.at(
  __c114,
  1,
) as any as S.Schema<DeleteConnectorV2Request>;
export interface DeleteConnectorV2Response {
  EnablementStatus?: EnablementStatus;
}
const DeleteConnectorV2Response = /*@__PURE__*/ __L.at(
  __c114,
  2,
) as any as S.Schema<DeleteConnectorV2Response>;
export interface DeleteFindingAggregatorRequest {
  FindingAggregatorArn: string;
}
const DeleteFindingAggregatorRequest = /*@__PURE__*/ __L.at(
  __c114,
  3,
) as any as S.Schema<DeleteFindingAggregatorRequest>;
export interface DeleteFindingAggregatorResponse {}
const DeleteFindingAggregatorResponse = /*@__PURE__*/ __L.at(
  __c114,
  4,
) as any as S.Schema<DeleteFindingAggregatorResponse>;
export interface DeleteInsightRequest {
  InsightArn: string;
}
const DeleteInsightRequest = /*@__PURE__*/ __L.at(
  __c114,
  5,
) as any as S.Schema<DeleteInsightRequest>;
export interface DeleteInsightResponse {
  InsightArn: string;
}
const DeleteInsightResponse = CreateInsightResponse as any as S.Schema<DeleteInsightResponse>;
export interface DeleteInvitationsRequest {
  AccountIds?: string[];
}
const DeleteInvitationsRequest = /*@__PURE__*/ __L.at(
  __c114,
  6,
) as any as S.Schema<DeleteInvitationsRequest>;
export interface DeleteInvitationsResponse {
  UnprocessedAccounts?: Result[];
}
const DeleteInvitationsResponse =
  DeclineInvitationsResponse as any as S.Schema<DeleteInvitationsResponse>;
export interface DeleteMembersRequest {
  AccountIds?: string[];
}
const DeleteMembersRequest = /*@__PURE__*/ __L.at(
  __c114,
  7,
) as any as S.Schema<DeleteMembersRequest>;
export interface DeleteMembersResponse {
  UnprocessedAccounts?: Result[];
}
const DeleteMembersResponse = CreateMembersResponse as any as S.Schema<DeleteMembersResponse>;
export type ArnList = string[];
const ArnList = AutomationRulesArnsList as any as S.Schema<ArnList>;
export type NextToken = string;
export type MaxResults = number;
export interface DescribeActionTargetsRequest {
  ActionTargetArns?: string[];
  NextToken?: string;
  MaxResults?: number;
}
const DescribeActionTargetsRequest = /*@__PURE__*/ __L.at(
  __c115,
  0,
) as any as S.Schema<DescribeActionTargetsRequest>;
export interface ActionTarget {
  ActionTargetArn?: string;
  Name?: string;
  Description?: string;
}
const ActionTarget = /*@__PURE__*/ __L.at(__c115, 1) as any as S.Schema<ActionTarget>;
export type ActionTargetList = ActionTarget[];
const ActionTargetList = /*@__PURE__*/ __L.at(__c115, 2);
export interface DescribeActionTargetsResponse {
  ActionTargets: (ActionTarget & {
    ActionTargetArn: NonEmptyString;
    Name: NonEmptyString;
    Description: NonEmptyString;
  })[];
  NextToken?: string;
}
const DescribeActionTargetsResponse = /*@__PURE__*/ __L.at(
  __c115,
  3,
) as any as S.Schema<DescribeActionTargetsResponse>;
export interface DescribeHubRequest {
  HubArn?: string;
}
const DescribeHubRequest = /*@__PURE__*/ __L.at(__c115, 4) as any as S.Schema<DescribeHubRequest>;
export type ControlFindingGenerator = "STANDARD_CONTROL" | "SECURITY_CONTROL" | (string & {});
const ControlFindingGenerator = S.String;

export interface DescribeHubResponse {
  HubArn?: string;
  SubscribedAt?: string;
  AutoEnableControls?: boolean;
  ControlFindingGenerator?: ControlFindingGenerator;
}
const DescribeHubResponse = /*@__PURE__*/ __L.at(__c115, 5) as any as S.Schema<DescribeHubResponse>;
export interface DescribeOrganizationConfigurationRequest {}
const DescribeOrganizationConfigurationRequest = /*@__PURE__*/ __L.at(
  __c115,
  6,
) as any as S.Schema<DescribeOrganizationConfigurationRequest>;
export type AutoEnableStandards = "NONE" | "DEFAULT" | (string & {});
const AutoEnableStandards = S.String;

export type OrganizationConfigurationConfigurationType = "CENTRAL" | "LOCAL" | (string & {});
const OrganizationConfigurationConfigurationType = S.String;

export type OrganizationConfigurationStatus = "PENDING" | "ENABLED" | "FAILED" | (string & {});
const OrganizationConfigurationStatus = S.String;

export interface OrganizationConfiguration {
  ConfigurationType?: OrganizationConfigurationConfigurationType;
  Status?: OrganizationConfigurationStatus;
  StatusMessage?: string;
}
const OrganizationConfiguration = /*@__PURE__*/ __L.at(
  __c115,
  7,
) as any as S.Schema<OrganizationConfiguration>;
export interface DescribeOrganizationConfigurationResponse {
  AutoEnable?: boolean;
  MemberAccountLimitReached?: boolean;
  AutoEnableStandards?: AutoEnableStandards;
  OrganizationConfiguration?: OrganizationConfiguration;
}
const DescribeOrganizationConfigurationResponse = /*@__PURE__*/ __L.at(
  __c116,
  0,
) as any as S.Schema<DescribeOrganizationConfigurationResponse>;
export interface DescribeProductsRequest {
  NextToken?: string;
  MaxResults?: number;
  ProductArn?: string;
}
const DescribeProductsRequest = /*@__PURE__*/ __L.at(
  __c116,
  1,
) as any as S.Schema<DescribeProductsRequest>;
export type CategoryList = string[];
const CategoryList = AutomationRulesArnsList as any as S.Schema<CategoryList>;
export type IntegrationType =
  | "SEND_FINDINGS_TO_SECURITY_HUB"
  | "RECEIVE_FINDINGS_FROM_SECURITY_HUB"
  | "UPDATE_FINDINGS_IN_SECURITY_HUB"
  | (string & {});
const IntegrationType = S.String;

export type IntegrationTypeList = IntegrationType[];
const IntegrationTypeList = /*@__PURE__*/ __L.at(__c116, 2);
export interface Product {
  ProductArn?: string;
  ProductName?: string;
  CompanyName?: string;
  Description?: string;
  Categories?: string[];
  IntegrationTypes?: IntegrationType[];
  MarketplaceUrl?: string;
  ActivationUrl?: string;
  ProductSubscriptionResourcePolicy?: string;
}
const Product = /*@__PURE__*/ __L.at(__c116, 3) as any as S.Schema<Product>;
export type ProductsList = Product[];
const ProductsList = /*@__PURE__*/ __L.at(__c116, 4);
export interface DescribeProductsResponse {
  Products: (Product & { ProductArn: NonEmptyString })[];
  NextToken?: string;
}
const DescribeProductsResponse = /*@__PURE__*/ __L.at(
  __c116,
  5,
) as any as S.Schema<DescribeProductsResponse>;
export interface DescribeProductsV2Request {
  NextToken?: string;
  MaxResults?: number;
}
const DescribeProductsV2Request = /*@__PURE__*/ __L.at(
  __c116,
  6,
) as any as S.Schema<DescribeProductsV2Request>;
export type IntegrationV2Type =
  | "SEND_FINDINGS_TO_SECURITY_HUB"
  | "RECEIVE_FINDINGS_FROM_SECURITY_HUB"
  | "UPDATE_FINDINGS_IN_SECURITY_HUB"
  | "EXTENDED_PLAN"
  | (string & {});
export type IntegrationV2TypeList = IntegrationV2Type[];
const IntegrationV2TypeList = IntegrationTypeList as any as S.Schema<IntegrationV2TypeList>;
export interface ProductV2 {
  ProductV2Name?: string;
  CompanyName?: string;
  Description?: string;
  Categories?: string[];
  IntegrationV2Types?: IntegrationV2Type[];
  MarketplaceUrl?: string;
  ActivationUrl?: string;
  MarketplaceProductId?: string;
}
const ProductV2 = /*@__PURE__*/ __L.at(__c116, 7) as any as S.Schema<ProductV2>;
export type ProductsV2List = ProductV2[];
const ProductsV2List = /*@__PURE__*/ __L.at(__c117, 0);
export interface DescribeProductsV2Response {
  ProductsV2: ProductV2[];
  NextToken?: string;
}
const DescribeProductsV2Response = /*@__PURE__*/ __L.at(
  __c117,
  1,
) as any as S.Schema<DescribeProductsV2Response>;
export interface DescribeSecurityHubV2Request {}
const DescribeSecurityHubV2Request = /*@__PURE__*/ __L.at(
  __c117,
  2,
) as any as S.Schema<DescribeSecurityHubV2Request>;
export type IsoString = string;
export type FeatureNameKey = string;
export type FeatureStatus = "ENABLED" | "DISABLED" | (string & {});
const FeatureStatus = S.String;

export interface FeatureDetail {
  FeatureStatus?: FeatureStatus;
  UpdatedAt?: Date;
}
const FeatureDetail = /*@__PURE__*/ __L.at(__c117, 3) as any as S.Schema<FeatureDetail>;
export type Features = { [key: string]: FeatureDetail | undefined };
const Features = /*@__PURE__*/ __L.at(__c117, 4);
export interface DescribeSecurityHubV2Response {
  HubV2Arn?: string;
  SubscribedAt?: string;
  Features?: { [key: string]: FeatureDetail | undefined };
}
const DescribeSecurityHubV2Response = /*@__PURE__*/ __L.at(
  __c117,
  5,
) as any as S.Schema<DescribeSecurityHubV2Response>;
export type StandardsProviders = StandardsProvider[];
const StandardsProviders = IntegrationTypeList as any as S.Schema<StandardsProviders>;
export interface DescribeStandardsRequest {
  NextToken?: string;
  MaxResults?: number;
  Providers?: StandardsProvider[];
}
const DescribeStandardsRequest = /*@__PURE__*/ __L.at(
  __c117,
  6,
) as any as S.Schema<DescribeStandardsRequest>;
export interface StandardsManagedBy {
  Company?: string;
  Product?: string;
}
const StandardsManagedBy = /*@__PURE__*/ __L.at(__c117, 7) as any as S.Schema<StandardsManagedBy>;
export interface Standard {
  StandardsArn?: string;
  Name?: string;
  Description?: string;
  EnabledByDefault?: boolean;
  Provider?: StandardsProvider;
  StandardsManagedBy?: StandardsManagedBy;
}
const Standard = /*@__PURE__*/ __L.at(__c118, 0) as any as S.Schema<Standard>;
export type Standards = Standard[];
const Standards = /*@__PURE__*/ __L.at(__c118, 1);
export interface DescribeStandardsResponse {
  Standards?: Standard[];
  NextToken?: string;
}
const DescribeStandardsResponse = /*@__PURE__*/ __L.at(
  __c118,
  2,
) as any as S.Schema<DescribeStandardsResponse>;
export interface DescribeStandardsControlsRequest {
  StandardsSubscriptionArn: string;
  NextToken?: string;
  MaxResults?: number;
}
const DescribeStandardsControlsRequest = /*@__PURE__*/ __L.at(
  __c118,
  3,
) as any as S.Schema<DescribeStandardsControlsRequest>;
export interface StandardsControl {
  StandardsControlArn?: string;
  ControlStatus?: ControlStatus;
  DisabledReason?: string;
  ControlStatusUpdatedAt?: Date;
  ControlId?: string;
  Title?: string;
  Description?: string;
  RemediationUrl?: string;
  SeverityRating?: SeverityRating;
  RelatedRequirements?: string[];
}
const StandardsControl = /*@__PURE__*/ __L.at(__c118, 4) as any as S.Schema<StandardsControl>;
export type StandardsControls = StandardsControl[];
const StandardsControls = /*@__PURE__*/ __L.at(__c118, 5);
export interface DescribeStandardsControlsResponse {
  Controls?: StandardsControl[];
  NextToken?: string;
}
const DescribeStandardsControlsResponse = /*@__PURE__*/ __L.at(
  __c118,
  6,
) as any as S.Schema<DescribeStandardsControlsResponse>;
export interface DisableImportFindingsForProductRequest {
  ProductSubscriptionArn: string;
}
const DisableImportFindingsForProductRequest = /*@__PURE__*/ __L.at(
  __c118,
  7,
) as any as S.Schema<DisableImportFindingsForProductRequest>;
export interface DisableImportFindingsForProductResponse {}
const DisableImportFindingsForProductResponse =
  AcceptAdministratorInvitationResponse as any as S.Schema<DisableImportFindingsForProductResponse>;
export type SecurityHubFeature = "SecurityHub" | "SecurityHubV2" | (string & {});
const SecurityHubFeature = S.String;

export interface DisableOrganizationAdminAccountRequest {
  AdminAccountId?: string;
  Feature?: SecurityHubFeature;
}
const DisableOrganizationAdminAccountRequest = /*@__PURE__*/ __L.at(
  __c119,
  0,
) as any as S.Schema<DisableOrganizationAdminAccountRequest>;
export interface DisableOrganizationAdminAccountResponse {}
const DisableOrganizationAdminAccountResponse =
  AcceptAdministratorInvitationResponse as any as S.Schema<DisableOrganizationAdminAccountResponse>;
export interface DisableSecurityHubRequest {}
const DisableSecurityHubRequest = /*@__PURE__*/ __L.at(
  __c119,
  1,
) as any as S.Schema<DisableSecurityHubRequest>;
export interface DisableSecurityHubResponse {}
const DisableSecurityHubResponse =
  AcceptInvitationResponse as any as S.Schema<DisableSecurityHubResponse>;
export type FeatureName = "NETWORK_SCANNING" | (string & {});
const FeatureName = S.String;

export interface DisableSecurityHubFeatureV2Request {
  FeatureName: FeatureName;
}
const DisableSecurityHubFeatureV2Request = /*@__PURE__*/ __L.at(
  __c119,
  2,
) as any as S.Schema<DisableSecurityHubFeatureV2Request>;
export interface DisableSecurityHubFeatureV2Response {}
const DisableSecurityHubFeatureV2Response =
  AcceptAdministratorInvitationResponse as any as S.Schema<DisableSecurityHubFeatureV2Response>;
export interface DisableSecurityHubV2Request {}
const DisableSecurityHubV2Request = /*@__PURE__*/ __L.at(
  __c119,
  3,
) as any as S.Schema<DisableSecurityHubV2Request>;
export interface DisableSecurityHubV2Response {}
const DisableSecurityHubV2Response =
  AcceptInvitationResponse as any as S.Schema<DisableSecurityHubV2Response>;
export interface DisassociateFromAdministratorAccountRequest {}
const DisassociateFromAdministratorAccountRequest = /*@__PURE__*/ __L.at(
  __c119,
  4,
) as any as S.Schema<DisassociateFromAdministratorAccountRequest>;
export interface DisassociateFromAdministratorAccountResponse {}
const DisassociateFromAdministratorAccountResponse =
  AcceptAdministratorInvitationResponse as any as S.Schema<DisassociateFromAdministratorAccountResponse>;
export interface DisassociateFromMasterAccountRequest {}
const DisassociateFromMasterAccountRequest = /*@__PURE__*/ __L.at(
  __c119,
  5,
) as any as S.Schema<DisassociateFromMasterAccountRequest>;
export interface DisassociateFromMasterAccountResponse {}
const DisassociateFromMasterAccountResponse =
  AcceptAdministratorInvitationResponse as any as S.Schema<DisassociateFromMasterAccountResponse>;
export interface DisassociateMembersRequest {
  AccountIds?: string[];
}
const DisassociateMembersRequest = /*@__PURE__*/ __L.at(
  __c119,
  6,
) as any as S.Schema<DisassociateMembersRequest>;
export interface DisassociateMembersResponse {}
const DisassociateMembersResponse =
  AcceptInvitationResponse as any as S.Schema<DisassociateMembersResponse>;
export interface EnableImportFindingsForProductRequest {
  ProductArn?: string;
}
const EnableImportFindingsForProductRequest = /*@__PURE__*/ __L.at(
  __c119,
  7,
) as any as S.Schema<EnableImportFindingsForProductRequest>;
export interface EnableImportFindingsForProductResponse {
  ProductSubscriptionArn?: string;
}
const EnableImportFindingsForProductResponse = /*@__PURE__*/ __L.at(
  __c120,
  0,
) as any as S.Schema<EnableImportFindingsForProductResponse>;
export interface EnableOrganizationAdminAccountRequest {
  AdminAccountId?: string;
  Feature?: SecurityHubFeature;
}
const EnableOrganizationAdminAccountRequest = /*@__PURE__*/ __L.at(
  __c120,
  1,
) as any as S.Schema<EnableOrganizationAdminAccountRequest>;
export interface EnableOrganizationAdminAccountResponse {
  AdminAccountId?: string;
  Feature?: SecurityHubFeature;
}
const EnableOrganizationAdminAccountResponse = /*@__PURE__*/ __L.at(
  __c120,
  2,
) as any as S.Schema<EnableOrganizationAdminAccountResponse>;
export interface EnableSecurityHubRequest {
  Tags?: { [key: string]: string | undefined };
  EnableDefaultStandards?: boolean;
  ControlFindingGenerator?: ControlFindingGenerator;
}
const EnableSecurityHubRequest = /*@__PURE__*/ __L.at(
  __c120,
  3,
) as any as S.Schema<EnableSecurityHubRequest>;
export interface EnableSecurityHubResponse {}
const EnableSecurityHubResponse =
  AcceptInvitationResponse as any as S.Schema<EnableSecurityHubResponse>;
export interface EnableSecurityHubFeatureV2Request {
  FeatureName: FeatureName;
}
const EnableSecurityHubFeatureV2Request = /*@__PURE__*/ __L.at(
  __c120,
  4,
) as any as S.Schema<EnableSecurityHubFeatureV2Request>;
export interface EnableSecurityHubFeatureV2Response {}
const EnableSecurityHubFeatureV2Response =
  AcceptAdministratorInvitationResponse as any as S.Schema<EnableSecurityHubFeatureV2Response>;
export interface EnableSecurityHubV2Request {
  Tags?: { [key: string]: string | undefined };
}
const EnableSecurityHubV2Request = /*@__PURE__*/ __L.at(
  __c120,
  5,
) as any as S.Schema<EnableSecurityHubV2Request>;
export interface EnableSecurityHubV2Response {
  HubV2Arn?: string;
}
const EnableSecurityHubV2Response = /*@__PURE__*/ __L.at(
  __c120,
  6,
) as any as S.Schema<EnableSecurityHubV2Response>;
export interface GenerateRecommendedPolicyV2Request {
  MetadataUid: string;
}
const GenerateRecommendedPolicyV2Request = /*@__PURE__*/ __L.at(
  __c120,
  7,
) as any as S.Schema<GenerateRecommendedPolicyV2Request>;
export interface GenerateRecommendedPolicyV2Response {}
const GenerateRecommendedPolicyV2Response =
  AcceptAdministratorInvitationResponse as any as S.Schema<GenerateRecommendedPolicyV2Response>;
export interface GetAdministratorAccountRequest {}
const GetAdministratorAccountRequest = /*@__PURE__*/ __L.at(
  __c121,
  0,
) as any as S.Schema<GetAdministratorAccountRequest>;
export interface Invitation {
  AccountId?: string;
  InvitationId?: string;
  InvitedAt?: Date;
  MemberStatus?: string;
}
const Invitation = /*@__PURE__*/ __L.at(__c121, 1) as any as S.Schema<Invitation>;
export interface GetAdministratorAccountResponse {
  Administrator?: Invitation;
}
const GetAdministratorAccountResponse = /*@__PURE__*/ __L.at(
  __c121,
  2,
) as any as S.Schema<GetAdministratorAccountResponse>;
export interface GetAggregatorV2Request {
  AggregatorV2Arn: string;
}
const GetAggregatorV2Request = /*@__PURE__*/ __L.at(
  __c121,
  3,
) as any as S.Schema<GetAggregatorV2Request>;
export interface GetAggregatorV2Response {
  AggregatorV2Arn?: string;
  AggregationRegion?: string;
  RegionLinkingMode?: string;
  LinkedRegions?: string[];
}
const GetAggregatorV2Response = /*@__PURE__*/ __L.at(
  __c121,
  4,
) as any as S.Schema<GetAggregatorV2Response>;
export interface GetAutomationRuleV2Request {
  Identifier: string;
}
const GetAutomationRuleV2Request = /*@__PURE__*/ __L.at(
  __c121,
  5,
) as any as S.Schema<GetAutomationRuleV2Request>;
export interface GetAutomationRuleV2Response {
  RuleArn?: string;
  RuleId?: string;
  RuleOrder?: number;
  RuleName?: string;
  RuleStatus?: RuleStatusV2;
  Description?: string;
  Criteria?: Criteria;
  Actions?: (AutomationRulesActionV2 & { Type: AutomationRulesActionTypeV2 })[];
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
const GetAutomationRuleV2Response = /*@__PURE__*/ __L.at(
  __c121,
  6,
) as any as S.Schema<GetAutomationRuleV2Response>;
export interface GetConfigurationPolicyRequest {
  Identifier: string;
}
const GetConfigurationPolicyRequest = /*@__PURE__*/ __L.at(
  __c121,
  7,
) as any as S.Schema<GetConfigurationPolicyRequest>;
export interface GetConfigurationPolicyResponse {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  UpdatedAt?: Date;
  CreatedAt?: Date;
  ConfigurationPolicy?: Policy;
}
const GetConfigurationPolicyResponse =
  CreateConfigurationPolicyResponse as any as S.Schema<GetConfigurationPolicyResponse>;
export interface GetConfigurationPolicyAssociationRequest {
  Target?: Target;
}
const GetConfigurationPolicyAssociationRequest = /*@__PURE__*/ __L.at(
  __c122,
  0,
) as any as S.Schema<GetConfigurationPolicyAssociationRequest>;
export interface GetConfigurationPolicyAssociationResponse {
  ConfigurationPolicyId?: string;
  TargetId?: string;
  TargetType?: TargetType;
  AssociationType?: AssociationType;
  UpdatedAt?: Date;
  AssociationStatus?: ConfigurationPolicyAssociationStatus;
  AssociationStatusMessage?: string;
}
const GetConfigurationPolicyAssociationResponse =
  ConfigurationPolicyAssociationSummary as any as S.Schema<GetConfigurationPolicyAssociationResponse>;
export interface GetConnectorRequest {
  ConnectorId: string;
}
const GetConnectorRequest = /*@__PURE__*/ __L.at(__c122, 1) as any as S.Schema<GetConnectorRequest>;
export type HealthIssueCode =
  | "AUTHENTICATION_FAILURE"
  | "STREAM_AUTHORIZATION_FAILURE"
  | "DISCOVERY_FAILURE"
  | "STREAM_LIMIT_EXCEEDED"
  | "STREAM_DISCONNECTED"
  | "RECORDING_FAILURE"
  | "NO_HEALTH_DATA"
  | (string & {});
const HealthIssueCode = S.String;

export interface HealthIssue {
  Code?: HealthIssueCode;
  Message?: string;
}
const HealthIssue = /*@__PURE__*/ __L.at(__c122, 2) as any as S.Schema<HealthIssue>;
export type HealthIssueList = HealthIssue[];
const HealthIssueList = /*@__PURE__*/ __L.at(__c122, 3);
export interface CspmHealthCheck {
  ConnectorStatus?: CspmConnectorStatus;
  Message?: string;
  LastCheckedAt?: Date;
  Issues?: HealthIssue[];
}
const CspmHealthCheck = /*@__PURE__*/ __L.at(__c122, 4) as any as S.Schema<CspmHealthCheck>;
export interface AzureDetail {
  AWSConfigConnectorArn?: string;
  ScopeConfiguration?: AzureScopeConfiguration;
  AzureRegions?: string[];
}
const AzureDetail = /*@__PURE__*/ __L.at(__c122, 5) as any as S.Schema<AzureDetail>;
export type CspmProviderDetail = { Azure: AzureDetail };
const CspmProviderDetail = /*@__PURE__*/ __L.at(__c122, 6);
export interface GetConnectorResponse {
  ConnectorArn?: string;
  ConnectorId: string;
  Name: string;
  Description?: string;
  CreatedAt: Date;
  LastUpdatedAt: Date;
  Health: CspmHealthCheck & {
    ConnectorStatus: CspmConnectorStatus;
    LastCheckedAt: Date;
    Issues: (HealthIssue & { Code: HealthIssueCode; Message: NonEmptyString })[];
  };
  ProviderDetail: CspmProviderDetail;
  CreatedBy?: string;
  EnablementStatus?: CspmEnablementStatus;
}
const GetConnectorResponse = /*@__PURE__*/ __L.at(
  __c122,
  7,
) as any as S.Schema<GetConnectorResponse>;
export interface GetConnectorV2Request {
  ConnectorId: string;
}
const GetConnectorV2Request = /*@__PURE__*/ __L.at(
  __c123,
  0,
) as any as S.Schema<GetConnectorV2Request>;
export interface HealthCheck {
  ConnectorStatus?: ConnectorStatus;
  Message?: string;
  LastCheckedAt?: Date;
  Issues?: HealthIssue[];
}
const HealthCheck = CspmHealthCheck as any as S.Schema<HealthCheck>;
export type ConnectorAuthStatus = "ACTIVE" | "FAILED" | (string & {});
const ConnectorAuthStatus = S.String;

export interface JiraCloudDetail {
  CloudId?: string;
  ProjectKey?: string;
  Domain?: string;
  AuthUrl?: string;
  AuthStatus?: ConnectorAuthStatus;
}
const JiraCloudDetail = /*@__PURE__*/ __L.at(__c123, 1) as any as S.Schema<JiraCloudDetail>;
export interface ServiceNowDetail {
  InstanceName?: string;
  SecretArn?: string;
  AuthStatus?: ConnectorAuthStatus;
}
const ServiceNowDetail = /*@__PURE__*/ __L.at(__c123, 2) as any as S.Schema<ServiceNowDetail>;
export type ProviderDetail =
  | { JiraCloud: JiraCloudDetail; ServiceNow?: never; Azure?: never }
  | { JiraCloud?: never; ServiceNow: ServiceNowDetail; Azure?: never }
  | { JiraCloud?: never; ServiceNow?: never; Azure: AzureDetail };
const ProviderDetail = /*@__PURE__*/ __L.at(__c123, 3);
export interface GetConnectorV2Response {
  ConnectorArn?: string;
  ConnectorId: string;
  Name: string;
  Description?: string;
  KmsKeyArn?: string;
  CreatedAt: Date;
  LastUpdatedAt: Date;
  Health: HealthCheck & {
    ConnectorStatus: ConnectorStatus;
    LastCheckedAt: Date;
    Issues: (HealthIssue & { Code: HealthIssueCode; Message: NonEmptyString })[];
  };
  ProviderDetail: ProviderDetail;
  EnablementStatus?: EnablementStatus;
  EnablementStatusReason?: string;
}
const GetConnectorV2Response = /*@__PURE__*/ __L.at(
  __c123,
  4,
) as any as S.Schema<GetConnectorV2Response>;
export interface GetEnabledStandardsRequest {
  StandardsSubscriptionArns?: string[];
  NextToken?: string;
  MaxResults?: number;
  Providers?: StandardsProvider[];
}
const GetEnabledStandardsRequest = /*@__PURE__*/ __L.at(
  __c123,
  5,
) as any as S.Schema<GetEnabledStandardsRequest>;
export interface GetEnabledStandardsResponse {
  StandardsSubscriptions?: (StandardsSubscription & {
    StandardsSubscriptionArn: NonEmptyString;
    StandardsArn: NonEmptyString;
    StandardsInput: StandardsInputParameterMap;
    StandardsStatus: StandardsStatus;
    StandardsStatusReason: StandardsStatusReason & { StatusReasonCode: StatusReasonCode };
  })[];
  NextToken?: string;
}
const GetEnabledStandardsResponse = /*@__PURE__*/ __L.at(
  __c123,
  6,
) as any as S.Schema<GetEnabledStandardsResponse>;
export interface GetFindingAggregatorRequest {
  FindingAggregatorArn: string;
}
const GetFindingAggregatorRequest = /*@__PURE__*/ __L.at(
  __c123,
  7,
) as any as S.Schema<GetFindingAggregatorRequest>;
export interface GetFindingAggregatorResponse {
  FindingAggregatorArn?: string;
  FindingAggregationRegion?: string;
  RegionLinkingMode?: string;
  Regions?: string[];
}
const GetFindingAggregatorResponse =
  CreateFindingAggregatorResponse as any as S.Schema<GetFindingAggregatorResponse>;
export interface GetFindingHistoryRequest {
  FindingIdentifier?: AwsSecurityFindingIdentifier;
  StartTime?: Date;
  EndTime?: Date;
  NextToken?: string;
  MaxResults?: number;
}
const GetFindingHistoryRequest = /*@__PURE__*/ __L.at(
  __c124,
  0,
) as any as S.Schema<GetFindingHistoryRequest>;
export type FindingHistoryUpdateSourceType =
  | "BATCH_UPDATE_FINDINGS"
  | "BATCH_IMPORT_FINDINGS"
  | (string & {});
const FindingHistoryUpdateSourceType = S.String;

export interface FindingHistoryUpdateSource {
  Type?: FindingHistoryUpdateSourceType;
  Identity?: string;
}
const FindingHistoryUpdateSource = /*@__PURE__*/ __L.at(
  __c124,
  1,
) as any as S.Schema<FindingHistoryUpdateSource>;
export interface FindingHistoryUpdate {
  UpdatedField?: string;
  OldValue?: string;
  NewValue?: string;
}
const FindingHistoryUpdate = /*@__PURE__*/ __L.at(
  __c124,
  2,
) as any as S.Schema<FindingHistoryUpdate>;
export type FindingHistoryUpdatesList = FindingHistoryUpdate[];
const FindingHistoryUpdatesList = /*@__PURE__*/ __L.at(__c124, 3);
export interface FindingHistoryRecord {
  FindingIdentifier?: AwsSecurityFindingIdentifier;
  UpdateTime?: Date;
  FindingCreated?: boolean;
  UpdateSource?: FindingHistoryUpdateSource;
  Updates?: FindingHistoryUpdate[];
  NextToken?: string;
}
const FindingHistoryRecord = /*@__PURE__*/ __L.at(
  __c124,
  4,
) as any as S.Schema<FindingHistoryRecord>;
export type FindingHistoryRecordList = FindingHistoryRecord[];
const FindingHistoryRecordList = /*@__PURE__*/ __L.at(__c124, 5);
export interface GetFindingHistoryResponse {
  Records?: (FindingHistoryRecord & {
    FindingIdentifier: AwsSecurityFindingIdentifier & {
      Id: NonEmptyString;
      ProductArn: NonEmptyString;
    };
  })[];
  NextToken?: string;
}
const GetFindingHistoryResponse = /*@__PURE__*/ __L.at(
  __c124,
  6,
) as any as S.Schema<GetFindingHistoryResponse>;
export type SortOrder = "asc" | "desc" | (string & {});
const SortOrder = S.String;

export interface SortCriterion {
  Field?: string;
  SortOrder?: SortOrder;
}
const SortCriterion = /*@__PURE__*/ __L.at(__c124, 7) as any as S.Schema<SortCriterion>;
export type SortCriteria = SortCriterion[];
const SortCriteria = /*@__PURE__*/ __L.at(__c125, 0);
export interface GetFindingsRequest {
  Filters?: AwsSecurityFindingFilters;
  SortCriteria?: SortCriterion[];
  NextToken?: string;
  MaxResults?: number;
}
const GetFindingsRequest = /*@__PURE__*/ __L.at(__c125, 1) as any as S.Schema<GetFindingsRequest>;
export type AwsSecurityFindingList = AwsSecurityFinding[];
const AwsSecurityFindingList =
  BatchImportFindingsRequestFindingList as any as S.Schema<AwsSecurityFindingList>;
export interface GetFindingsResponse {
  Findings: (AwsSecurityFinding & {
    SchemaVersion: NonEmptyString;
    Id: NonEmptyString;
    ProductArn: NonEmptyString;
    GeneratorId: NonEmptyString;
    AwsAccountId: NonEmptyString;
    CreatedAt: NonEmptyString;
    UpdatedAt: NonEmptyString;
    Title: NonEmptyString;
    Description: NonEmptyString;
    Resources: (Resource & { Type: NonEmptyString; Id: NonEmptyString })[];
    Malware: (Malware & { Name: NonEmptyString })[];
    Compliance: Compliance & { StatusReasons: (StatusReason & { ReasonCode: NonEmptyString })[] };
    RelatedFindings: (RelatedFinding & { ProductArn: NonEmptyString; Id: NonEmptyString })[];
    Note: Note & { Text: NonEmptyString; UpdatedBy: NonEmptyString; UpdatedAt: NonEmptyString };
    Vulnerabilities: (Vulnerability & {
      Id: NonEmptyString;
      Vendor: VulnerabilityVendor & { Name: NonEmptyString };
    })[];
    PatchSummary: PatchSummary & { Id: NonEmptyString };
    FindingProviderFields: FindingProviderFields & {
      RelatedFindings: (RelatedFinding & { ProductArn: NonEmptyString; Id: NonEmptyString })[];
    };
  })[];
  NextToken?: string;
}
const GetFindingsResponse = /*@__PURE__*/ __L.at(__c125, 2) as any as S.Schema<GetFindingsResponse>;
export type GroupByField =
  | "activity_name"
  | "cloud.account.uid"
  | "cloud.provider"
  | "cloud.region"
  | "compliance.assessments.name"
  | "compliance.status"
  | "compliance.control"
  | "finding_info.title"
  | "finding_info.related_events.traits.category"
  | "finding_info.types"
  | "metadata.product.name"
  | "metadata.product.uid"
  | "resources.type"
  | "resources.cloud_partition"
  | "resources.name"
  | "resources.owner.account.uid"
  | "resources.owner.org.uid"
  | "resources.owner.account.name"
  | "resources.provider"
  | "resources.region"
  | "resources.uid"
  | "severity"
  | "status"
  | "vulnerabilities.fix_coverage"
  | "class_name"
  | "vulnerabilities.affected_packages.name"
  | "finding_info.analytic.name"
  | "compliance.standards"
  | "cloud.account.name"
  | "vendor_attributes.severity"
  | "metadata.product.vendor_name"
  | (string & {});
const GroupByField = S.String;

export interface GroupByRule {
  Filters?: OcsfFindingFilters;
  GroupByField?: GroupByField;
}
const GroupByRule = /*@__PURE__*/ __L.at(__c125, 3) as any as S.Schema<GroupByRule>;
export type GroupByRules = GroupByRule[];
const GroupByRules = /*@__PURE__*/ __L.at(__c125, 4);
export interface AwsOrganizationScope {
  OrganizationId?: string;
  OrganizationalUnitId?: string;
}
const AwsOrganizationScope = /*@__PURE__*/ __L.at(
  __c125,
  5,
) as any as S.Schema<AwsOrganizationScope>;
export type AwsOrganizationScopeList = AwsOrganizationScope[];
const AwsOrganizationScopeList = /*@__PURE__*/ __L.at(__c125, 6);
export interface FindingScopes {
  AwsOrganizations?: AwsOrganizationScope[];
}
const FindingScopes = /*@__PURE__*/ __L.at(__c125, 7) as any as S.Schema<FindingScopes>;
export type MaxStatisticResults = number;
export interface GetFindingStatisticsV2Request {
  GroupByRules?: GroupByRule[];
  Scopes?: FindingScopes;
  SortOrder?: SortOrder;
  MaxStatisticResults?: number;
}
const GetFindingStatisticsV2Request = /*@__PURE__*/ __L.at(
  __c126,
  0,
) as any as S.Schema<GetFindingStatisticsV2Request>;
export interface GroupByValue {
  FieldValue?: string;
  Count?: number;
}
const GroupByValue = /*@__PURE__*/ __L.at(__c126, 1) as any as S.Schema<GroupByValue>;
export type GroupByValues = GroupByValue[];
const GroupByValues = /*@__PURE__*/ __L.at(__c126, 2);
export interface GroupByResult {
  GroupByField?: string;
  GroupByValues?: GroupByValue[];
}
const GroupByResult = /*@__PURE__*/ __L.at(__c126, 3) as any as S.Schema<GroupByResult>;
export type GroupByResults = GroupByResult[];
const GroupByResults = /*@__PURE__*/ __L.at(__c126, 4);
export interface GetFindingStatisticsV2Response {
  GroupByResults?: GroupByResult[];
}
const GetFindingStatisticsV2Response = /*@__PURE__*/ __L.at(
  __c126,
  5,
) as any as S.Schema<GetFindingStatisticsV2Response>;
export type FindingsTrendsStringField =
  | "account_id"
  | "region"
  | "finding_types"
  | "finding_status"
  | "finding_cve_ids"
  | "finding_compliance_status"
  | "finding_control_id"
  | "finding_class_name"
  | "finding_provider"
  | "finding_activity_name"
  | "resource_cloud_providers"
  | "resource_regions"
  | "resource_owner_ids"
  | "resource_owner_organization_ids"
  | (string & {});
const FindingsTrendsStringField = S.String;

export interface FindingsTrendsStringFilter {
  FieldName?: FindingsTrendsStringField;
  Filter?: StringFilter;
}
const FindingsTrendsStringFilter = /*@__PURE__*/ __L.at(
  __c126,
  6,
) as any as S.Schema<FindingsTrendsStringFilter>;
export type FindingsTrendsStringFilterList = FindingsTrendsStringFilter[];
const FindingsTrendsStringFilterList = /*@__PURE__*/ __L.at(__c126, 7);
export interface FindingsTrendsCompositeFilter {
  StringFilters?: FindingsTrendsStringFilter[];
  NestedCompositeFilters?: FindingsTrendsCompositeFilter[];
  Operator?: AllowedOperators;
}
const FindingsTrendsCompositeFilter = /*@__PURE__*/ __L.at(
  __c127,
  0,
) as any as S.Schema<FindingsTrendsCompositeFilter>;
export type FindingsTrendsCompositeFilterList = FindingsTrendsCompositeFilter[];
const FindingsTrendsCompositeFilterList = /*@__PURE__*/ __L.at(
  __c127,
  1,
) as any as S.Schema<FindingsTrendsCompositeFilterList>;
export interface FindingsTrendsFilters {
  CompositeFilters?: FindingsTrendsCompositeFilter[];
  CompositeOperator?: AllowedOperators;
}
const FindingsTrendsFilters = /*@__PURE__*/ __L.at(
  __c127,
  2,
) as any as S.Schema<FindingsTrendsFilters>;
export interface GetFindingsTrendsV2Request {
  Filters?: FindingsTrendsFilters;
  StartTime?: Date;
  EndTime?: Date;
  NextToken?: string;
  MaxResults?: number;
}
const GetFindingsTrendsV2Request = /*@__PURE__*/ __L.at(
  __c127,
  3,
) as any as S.Schema<GetFindingsTrendsV2Request>;
export type GranularityField = "Daily" | "Weekly" | "Monthly" | (string & {});
const GranularityField = S.String;

export type TrendsValueCount = number;
export interface SeverityTrendsCount {
  Unknown?: number;
  Informational?: number;
  Low?: number;
  Medium?: number;
  High?: number;
  Critical?: number;
  Fatal?: number;
  Other?: number;
}
const SeverityTrendsCount = /*@__PURE__*/ __L.at(__c127, 4) as any as S.Schema<SeverityTrendsCount>;
export interface TrendsValues {
  SeverityTrends?: SeverityTrendsCount;
}
const TrendsValues = /*@__PURE__*/ __L.at(__c127, 5) as any as S.Schema<TrendsValues>;
export interface TrendsMetricsResult {
  Timestamp?: Date;
  TrendsValues?: TrendsValues;
}
const TrendsMetricsResult = /*@__PURE__*/ __L.at(__c127, 6) as any as S.Schema<TrendsMetricsResult>;
export type TrendsMetrics = TrendsMetricsResult[];
const TrendsMetrics = /*@__PURE__*/ __L.at(__c127, 7);
export interface GetFindingsTrendsV2Response {
  Granularity: GranularityField;
  TrendsMetrics: (TrendsMetricsResult & {
    Timestamp: Date;
    TrendsValues: TrendsValues & {
      SeverityTrends: SeverityTrendsCount & {
        Unknown: TrendsValueCount;
        Informational: TrendsValueCount;
        Low: TrendsValueCount;
        Medium: TrendsValueCount;
        High: TrendsValueCount;
        Critical: TrendsValueCount;
        Fatal: TrendsValueCount;
        Other: TrendsValueCount;
      };
    };
  })[];
  NextToken?: string;
}
const GetFindingsTrendsV2Response = /*@__PURE__*/ __L.at(
  __c128,
  0,
) as any as S.Schema<GetFindingsTrendsV2Response>;
export interface GetFindingsV2Request {
  Filters?: OcsfFindingFilters;
  Scopes?: FindingScopes;
  SortCriteria?: SortCriterion[];
  NextToken?: string;
  MaxResults?: number;
}
const GetFindingsV2Request = /*@__PURE__*/ __L.at(
  __c128,
  1,
) as any as S.Schema<GetFindingsV2Request>;
export type OcsfFinding = unknown;
export type OcsfFindingsList = any[];
const OcsfFindingsList = /*@__PURE__*/ __L.at(__c128, 2);
export interface GetFindingsV2Response {
  Findings?: any[];
  NextToken?: string;
}
const GetFindingsV2Response = /*@__PURE__*/ __L.at(
  __c128,
  3,
) as any as S.Schema<GetFindingsV2Response>;
export interface GetInsightResultsRequest {
  InsightArn: string;
}
const GetInsightResultsRequest = /*@__PURE__*/ __L.at(
  __c128,
  4,
) as any as S.Schema<GetInsightResultsRequest>;
export interface InsightResultValue {
  GroupByAttributeValue?: string;
  Count?: number;
}
const InsightResultValue = /*@__PURE__*/ __L.at(__c128, 5) as any as S.Schema<InsightResultValue>;
export type InsightResultValueList = InsightResultValue[];
const InsightResultValueList = /*@__PURE__*/ __L.at(__c128, 6);
export interface InsightResults {
  InsightArn?: string;
  GroupByAttribute?: string;
  ResultValues?: InsightResultValue[];
}
const InsightResults = /*@__PURE__*/ __L.at(__c128, 7) as any as S.Schema<InsightResults>;
export interface GetInsightResultsResponse {
  InsightResults: InsightResults & {
    InsightArn: NonEmptyString;
    GroupByAttribute: NonEmptyString;
    ResultValues: (InsightResultValue & { GroupByAttributeValue: NonEmptyString; Count: number })[];
  };
}
const GetInsightResultsResponse = /*@__PURE__*/ __L.at(
  __c129,
  0,
) as any as S.Schema<GetInsightResultsResponse>;
export interface GetInsightsRequest {
  InsightArns?: string[];
  NextToken?: string;
  MaxResults?: number;
}
const GetInsightsRequest = /*@__PURE__*/ __L.at(__c129, 1) as any as S.Schema<GetInsightsRequest>;
export interface Insight {
  InsightArn?: string;
  Name?: string;
  Filters?: AwsSecurityFindingFilters;
  GroupByAttribute?: string;
}
const Insight = /*@__PURE__*/ __L.at(__c129, 2) as any as S.Schema<Insight>;
export type InsightList = Insight[];
const InsightList = /*@__PURE__*/ __L.at(__c129, 3);
export interface GetInsightsResponse {
  Insights: (Insight & {
    InsightArn: NonEmptyString;
    Name: NonEmptyString;
    Filters: AwsSecurityFindingFilters;
    GroupByAttribute: NonEmptyString;
  })[];
  NextToken?: string;
}
const GetInsightsResponse = /*@__PURE__*/ __L.at(__c129, 4) as any as S.Schema<GetInsightsResponse>;
export interface GetInvitationsCountRequest {}
const GetInvitationsCountRequest = /*@__PURE__*/ __L.at(
  __c129,
  5,
) as any as S.Schema<GetInvitationsCountRequest>;
export interface GetInvitationsCountResponse {
  InvitationsCount?: number;
}
const GetInvitationsCountResponse = /*@__PURE__*/ __L.at(
  __c129,
  6,
) as any as S.Schema<GetInvitationsCountResponse>;
export interface GetMasterAccountRequest {}
const GetMasterAccountRequest = /*@__PURE__*/ __L.at(
  __c129,
  7,
) as any as S.Schema<GetMasterAccountRequest>;
export interface GetMasterAccountResponse {
  Master?: Invitation;
}
const GetMasterAccountResponse = /*@__PURE__*/ __L.at(
  __c130,
  0,
) as any as S.Schema<GetMasterAccountResponse>;
export interface GetMembersRequest {
  AccountIds?: string[];
}
const GetMembersRequest = /*@__PURE__*/ __L.at(__c130, 1) as any as S.Schema<GetMembersRequest>;
export interface Member {
  AccountId?: string;
  Email?: string;
  MasterId?: string;
  AdministratorId?: string;
  MemberStatus?: string;
  InvitedAt?: Date;
  UpdatedAt?: Date;
}
const Member = /*@__PURE__*/ __L.at(__c130, 2) as any as S.Schema<Member>;
export type MemberList = Member[];
const MemberList = /*@__PURE__*/ __L.at(__c130, 3);
export interface GetMembersResponse {
  Members?: Member[];
  UnprocessedAccounts?: Result[];
}
const GetMembersResponse = /*@__PURE__*/ __L.at(__c130, 4) as any as S.Schema<GetMembersResponse>;
export interface GetRecommendedPolicyV2Request {
  MetadataUid: string;
  NextToken?: string;
  MaxResults?: number;
}
const GetRecommendedPolicyV2Request = /*@__PURE__*/ __L.at(
  __c130,
  5,
) as any as S.Schema<GetRecommendedPolicyV2Request>;
export type RecommendationType = "UNUSED_PERMISSION_RECOMMENDATION" | (string & {});
const RecommendationType = S.String;

export interface UnusedPermissionsRecommendationStep {
  RecommendedAction?: string;
  ExistingPolicy?: string;
  ExistingPolicyId?: string;
  PolicyUpdatedAt?: Date;
  RecommendedPolicy?: string;
}
const UnusedPermissionsRecommendationStep = /*@__PURE__*/ __L.at(
  __c130,
  6,
) as any as S.Schema<UnusedPermissionsRecommendationStep>;
export type RecommendationStep = { UnusedPermissions: UnusedPermissionsRecommendationStep };
const RecommendationStep = /*@__PURE__*/ __L.at(__c130, 7);
export type RecommendationSteps = RecommendationStep[];
const RecommendationSteps = /*@__PURE__*/ __L.at(__c131, 0);
export interface RecommendationError {
  Code?: string;
  Message?: string;
}
const RecommendationError = /*@__PURE__*/ __L.at(__c131, 1) as any as S.Schema<RecommendationError>;
export type RecommendationStatus = "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | (string & {});
const RecommendationStatus = S.String;

export interface GetRecommendedPolicyV2Response {
  NextToken?: string;
  RecommendationType?: RecommendationType;
  RecommendationSteps?: RecommendationStep[];
  Error?: RecommendationError;
  Status?: RecommendationStatus;
  ResourceArn?: string;
}
const GetRecommendedPolicyV2Response = /*@__PURE__*/ __L.at(
  __c131,
  2,
) as any as S.Schema<GetRecommendedPolicyV2Response>;
export type RemediationStringUid = string;
export type RemediationStringField =
  | "Resource.Type"
  | "Priority"
  | "Status"
  | "Resource.Id"
  | "Resource.ResourceOwnerAccountId"
  | "Resource.CloudProvider"
  | (string & {});
const RemediationStringField = S.String;

export interface RemediationStringFilterCondition {
  Value?: string;
}
const RemediationStringFilterCondition =
  StatelessCustomPublishMetricActionDimension as any as S.Schema<RemediationStringFilterCondition>;
export interface RemediationStringFilter {
  FieldName?: RemediationStringField;
  Filter?: RemediationStringFilterCondition;
}
const RemediationStringFilter = /*@__PURE__*/ __L.at(
  __c131,
  3,
) as any as S.Schema<RemediationStringFilter>;
export type RemediationStringFilterList = RemediationStringFilter[];
const RemediationStringFilterList = /*@__PURE__*/ __L.at(__c131, 4);
export interface RemediationCompositeFilter {
  StringFilters?: RemediationStringFilter[];
}
const RemediationCompositeFilter = /*@__PURE__*/ __L.at(
  __c131,
  5,
) as any as S.Schema<RemediationCompositeFilter>;
export type RemediationCompositeFilterList = RemediationCompositeFilter[];
const RemediationCompositeFilterList = /*@__PURE__*/ __L.at(__c131, 6);
export interface RemediationFilters {
  CompositeFilters?: RemediationCompositeFilter[];
}
const RemediationFilters = /*@__PURE__*/ __L.at(__c131, 7) as any as S.Schema<RemediationFilters>;
export type GuidanceFormat =
  | "All"
  | "AwsCli"
  | "Cli"
  | "Python"
  | "Terraform"
  | "Cdk"
  | "CloudFormation"
  | "IaC"
  | "Template"
  | (string & {});
const GuidanceFormat = S.String;

export interface GetRemediationsV2Request {
  TargetUid?: string;
  MetadataUid?: string;
  Filters?: RemediationFilters;
  ShowGuidance?: boolean;
  GuidanceFormat?: GuidanceFormat;
  MaxResults?: number;
  NextToken?: string;
}
const GetRemediationsV2Request = /*@__PURE__*/ __L.at(
  __c132,
  0,
) as any as S.Schema<GetRemediationsV2Request>;
export interface RemediationOutcome {
  ResolvedFindingsCount?: number;
  SeverityReductionFindingsCount?: number;
  SeverityUnchangedCount?: number;
}
const RemediationOutcome = /*@__PURE__*/ __L.at(__c132, 1) as any as S.Schema<RemediationOutcome>;
export type RemediationPriority = "Critical" | "High" | "Medium" | "Low" | (string & {});
const RemediationPriority = S.String;

export type RemediationStringList = string[];
const RemediationStringList = AutomationRulesArnsList as any as S.Schema<RemediationStringList>;
export interface KbArticle {
  Title?: string;
  Url?: string;
}
const KbArticle = /*@__PURE__*/ __L.at(__c132, 2) as any as S.Schema<KbArticle>;
export type KbArticleList = KbArticle[];
const KbArticleList = /*@__PURE__*/ __L.at(__c132, 3);
export interface RemediationSummaryDetail {
  Action?: string;
  Description?: string;
  IsImmediate?: boolean;
  PostRemediationSteps?: string[];
  KbArticles?: KbArticle[];
}
const RemediationSummaryDetail = /*@__PURE__*/ __L.at(
  __c132,
  4,
) as any as S.Schema<RemediationSummaryDetail>;
export interface RemediationResource {
  AccountId?: string;
  Region?: string;
  ResourceOwnerAccountId?: string;
  ResourceOwnerOrgId?: string;
  Type?: string;
  Name?: string;
  Id?: string;
  ResourceGuid?: string;
  ResourceRegion?: string;
  CloudProvider?: CloudProviderName;
}
const RemediationResource = /*@__PURE__*/ __L.at(__c132, 5) as any as S.Schema<RemediationResource>;
export type RemediationStatus = "New" | "Updated" | "Resolved" | (string & {});
const RemediationStatus = S.String;

export interface RemediationTrait {
  Type?: string;
  Title?: string;
}
const RemediationTrait = /*@__PURE__*/ __L.at(__c132, 6) as any as S.Schema<RemediationTrait>;
export interface RemediationGuidanceContext {
  ProblemStatement?: string;
  RiskAssessment?: string;
  AffectedScope?: string;
  Prerequisites?: string[];
}
const RemediationGuidanceContext = /*@__PURE__*/ __L.at(
  __c132,
  7,
) as any as S.Schema<RemediationGuidanceContext>;
export interface RemediationParameter {
  Name?: string;
  Type?: string;
  Description?: string;
  Required?: boolean;
}
const RemediationParameter = /*@__PURE__*/ __L.at(
  __c133,
  0,
) as any as S.Schema<RemediationParameter>;
export type RemediationParameterList = RemediationParameter[];
const RemediationParameterList = /*@__PURE__*/ __L.at(__c133, 1);
export interface RemediationStep {
  Phase?: string;
  Description?: string;
  Service?: string;
  Action?: string;
  Logic?: string;
  Inverse?: string;
  VerifyAfter?: string;
}
const RemediationStep = /*@__PURE__*/ __L.at(__c133, 2) as any as S.Schema<RemediationStep>;
export type RemediationStepList = RemediationStep[];
const RemediationStepList = /*@__PURE__*/ __L.at(__c133, 3);
export interface RemediationGuidanceSpecification {
  Parameters?: RemediationParameter[];
  Steps?: RemediationStep[];
  ExpectedEndState?: string;
  RequiredPermissions?: string[];
}
const RemediationGuidanceSpecification = /*@__PURE__*/ __L.at(
  __c133,
  4,
) as any as S.Schema<RemediationGuidanceSpecification>;
export interface RemediationGuidanceExamples {
  AwsCli?: string;
  Cli?: string;
  Python?: string;
  Terraform?: string;
  Cdk?: string;
  CloudFormation?: string;
  IaC?: string;
  Template?: string;
}
const RemediationGuidanceExamples = /*@__PURE__*/ __L.at(
  __c133,
  5,
) as any as S.Schema<RemediationGuidanceExamples>;
export interface RemediationGuidanceMetadata {
  ResourceType?: string;
  ExposureType?: string;
  TraitTitles?: string[];
  Reversibility?: string;
  FixEffect?: string;
  RiskLevel?: string;
  AutomationLevel?: string;
  HumanReviewRequired?: boolean;
  GeneratedAt?: Date;
  VerificationStatus?: string;
}
const RemediationGuidanceMetadata = /*@__PURE__*/ __L.at(
  __c133,
  6,
) as any as S.Schema<RemediationGuidanceMetadata>;
export interface RemediationGuidance {
  TargetTypeName?: string;
  Pattern?: string;
  Version?: string;
  Context?: RemediationGuidanceContext;
  Specification?: RemediationGuidanceSpecification;
  Examples?: RemediationGuidanceExamples;
  Metadata?: RemediationGuidanceMetadata;
}
const RemediationGuidance = /*@__PURE__*/ __L.at(__c133, 7) as any as S.Schema<RemediationGuidance>;
export interface RemediationV2Item {
  TargetUid?: string;
  Outcome?: RemediationOutcome;
  Priority?: RemediationPriority;
  RemediationSummary?: RemediationSummaryDetail;
  Resource?: RemediationResource;
  Status?: RemediationStatus;
  Trait?: RemediationTrait;
  Guidance?: RemediationGuidance;
  UpdatedAt?: Date;
}
const RemediationV2Item = /*@__PURE__*/ __L.at(__c134, 0) as any as S.Schema<RemediationV2Item>;
export type RemediationV2ItemList = RemediationV2Item[];
const RemediationV2ItemList = /*@__PURE__*/ __L.at(__c134, 1);
export interface GetRemediationsV2Response {
  Items: (RemediationV2Item & {
    TargetUid: NonEmptyString;
    Outcome: RemediationOutcome & {
      ResolvedFindingsCount: number;
      SeverityReductionFindingsCount: number;
      SeverityUnchangedCount: number;
    };
    Priority: RemediationPriority;
    RemediationSummary: RemediationSummaryDetail & {
      Action: NonEmptyString;
      IsImmediate: boolean;
      KbArticles: (KbArticle & { Title: NonEmptyString; Url: NonEmptyString })[];
    };
    Resource: RemediationResource & {
      AccountId: NonEmptyString;
      Region: NonEmptyString;
      Type: NonEmptyString;
      Id: NonEmptyString;
      ResourceRegion: NonEmptyString;
      CloudProvider: CloudProviderName;
    };
    Status: RemediationStatus;
    Trait: RemediationTrait & { Type: NonEmptyString; Title: NonEmptyString };
    Guidance: RemediationGuidance & {
      TargetTypeName: NonEmptyString;
      Pattern: NonEmptyString;
      Version: NonEmptyString;
      Context: RemediationGuidanceContext;
      Specification: RemediationGuidanceSpecification & {
        Parameters: (RemediationParameter & {
          Name: NonEmptyString;
          Type: NonEmptyString;
          Description: NonEmptyString;
        })[];
        Steps: (RemediationStep & {
          Phase: NonEmptyString;
          Description: NonEmptyString;
          Service: NonEmptyString;
          Action: NonEmptyString;
        })[];
      };
      Examples: RemediationGuidanceExamples;
      Metadata: RemediationGuidanceMetadata & {
        ResourceType: NonEmptyString;
        ExposureType: NonEmptyString;
        TraitTitles: RemediationStringList;
        Reversibility: NonEmptyString;
        FixEffect: NonEmptyString;
        RiskLevel: NonEmptyString;
      };
    };
  })[];
  NextToken?: string;
}
const GetRemediationsV2Response = /*@__PURE__*/ __L.at(
  __c134,
  2,
) as any as S.Schema<GetRemediationsV2Response>;
export type ResourceGroupByField =
  | "AccountId"
  | "AccountName"
  | "Region"
  | "ResourceProvider"
  | "ResourceOwnerAccountId"
  | "ResourceOwnerOrgId"
  | "ResourceCloudPartition"
  | "ResourceRegion"
  | "ResourceCategory"
  | "ResourceType"
  | "ResourceName"
  | "FindingsSummary.FindingType"
  | "ResourceSubCategory"
  | "DiscoveryType"
  | "ResourceInfo.AIDetails.HostResourceType"
  | "ResourceInfo.AIDetails.CanonicalId"
  | (string & {});
const ResourceGroupByField = S.String;

export type ResourcesStringField =
  | "ResourceGuid"
  | "ResourceId"
  | "AccountId"
  | "AccountName"
  | "Region"
  | "ResourceProvider"
  | "ResourceOwnerAccountId"
  | "ResourceOwnerOrgId"
  | "ResourceCloudPartition"
  | "ResourceRegion"
  | "ResourceCategory"
  | "ResourceType"
  | "ResourceName"
  | "FindingsSummary.FindingType"
  | "FindingsSummary.ProductName"
  | "ResourceSubCategory"
  | "DiscoveryType"
  | "ResourceInfo.AIDetails.HostResourceGuid"
  | "ResourceInfo.AIDetails.HostResourceType"
  | "ResourceInfo.AIDetails.CanonicalId"
  | (string & {});
export interface ResourcesStringFilter {
  FieldName?: ResourcesStringField;
  Filter?: StringFilter;
}
export type ResourcesStringFilterList = ResourcesStringFilter[];
const ResourcesStringFilterList =
  OcsfStringFilterList as any as S.Schema<ResourcesStringFilterList>;
export type ResourcesDateField =
  | "ResourceDetailCaptureTime"
  | "ResourceCreationTime"
  | (string & {});
export interface ResourcesDateFilter {
  FieldName?: ResourcesDateField;
  Filter?: DateFilter;
}
export type ResourcesDateFilterList = ResourcesDateFilter[];
const ResourcesDateFilterList = OcsfDateFilterList as any as S.Schema<ResourcesDateFilterList>;
export type ResourcesNumberField =
  | "FindingsSummary.TotalFindings"
  | "FindingsSummary.Severities.Other"
  | "FindingsSummary.Severities.Fatal"
  | "FindingsSummary.Severities.Critical"
  | "FindingsSummary.Severities.High"
  | "FindingsSummary.Severities.Medium"
  | "FindingsSummary.Severities.Low"
  | "FindingsSummary.Severities.Informational"
  | "FindingsSummary.Severities.Unknown"
  | "ResourceInfo.AIDetails.SelfHostedAIModelResourceCount"
  | "ResourceInfo.AIDetails.SelfHostedAIAgentResourceCount"
  | "ResourceInfo.AIDetails.SelfHostedAIModelServingResourceCount"
  | "ResourceInfo.AIDetails.SelfHostedAIExternalEndpointResourceCount"
  | "ResourceInfo.AIDetails.SelfHostedAIDevelopmentResourceCount"
  | "ResourceInfo.AIDetails.SelfHostedAIAgentFrameworkResourceCount"
  | "ResourceInfo.AIDetails.SelfHostedAIAgentToolsAndIdentityResourceCount"
  | "ResourceInfo.AIDetails.SelfHostedTotalAIResourceCount"
  | (string & {});
export interface ResourcesNumberFilter {
  FieldName?: ResourcesNumberField;
  Filter?: NumberFilter;
}
export type ResourcesNumberFilterList = ResourcesNumberFilter[];
const ResourcesNumberFilterList =
  OcsfNumberFilterList as any as S.Schema<ResourcesNumberFilterList>;
export type ResourcesMapField = "ResourceTags" | (string & {});
export interface ResourcesMapFilter {
  FieldName?: ResourcesMapField;
  Filter?: MapFilter;
}
export type ResourcesMapFilterList = ResourcesMapFilter[];
const ResourcesMapFilterList = OcsfMapFilterList as any as S.Schema<ResourcesMapFilterList>;
export interface ResourcesCompositeFilter {
  StringFilters?: ResourcesStringFilter[];
  DateFilters?: ResourcesDateFilter[];
  NumberFilters?: ResourcesNumberFilter[];
  MapFilters?: ResourcesMapFilter[];
  NestedCompositeFilters?: ResourcesCompositeFilter[];
  Operator?: AllowedOperators;
}
const ResourcesCompositeFilter = /*@__PURE__*/ __L.at(
  __c134,
  3,
) as any as S.Schema<ResourcesCompositeFilter>;
export type ResourcesCompositeFilterList = ResourcesCompositeFilter[];
const ResourcesCompositeFilterList = /*@__PURE__*/ __L.at(
  __c134,
  4,
) as any as S.Schema<ResourcesCompositeFilterList>;
export interface ResourcesFilters {
  CompositeFilters?: ResourcesCompositeFilter[];
  CompositeOperator?: AllowedOperators;
}
const ResourcesFilters = /*@__PURE__*/ __L.at(__c134, 5) as any as S.Schema<ResourcesFilters>;
export interface ResourceGroupByRule {
  GroupByField?: ResourceGroupByField;
  Filters?: ResourcesFilters;
}
const ResourceGroupByRule = /*@__PURE__*/ __L.at(__c134, 6) as any as S.Schema<ResourceGroupByRule>;
export type ResourceGroupByRules = ResourceGroupByRule[];
const ResourceGroupByRules = /*@__PURE__*/ __L.at(__c134, 7);
export interface ResourceScopes {
  AwsOrganizations?: AwsOrganizationScope[];
}
const ResourceScopes = FindingScopes as any as S.Schema<ResourceScopes>;
export interface GetResourcesStatisticsV2Request {
  GroupByRules?: ResourceGroupByRule[];
  Scopes?: ResourceScopes;
  SortOrder?: SortOrder;
  MaxStatisticResults?: number;
}
const GetResourcesStatisticsV2Request = /*@__PURE__*/ __L.at(
  __c135,
  0,
) as any as S.Schema<GetResourcesStatisticsV2Request>;
export interface GetResourcesStatisticsV2Response {
  GroupByResults: GroupByResult[];
}
const GetResourcesStatisticsV2Response =
  GetFindingStatisticsV2Response as any as S.Schema<GetResourcesStatisticsV2Response>;
export type ResourcesTrendsStringField =
  | "account_id"
  | "region"
  | "resource_type"
  | "resource_category"
  | "resource_cloud_provider"
  | "resource_region"
  | "resource_owner_id"
  | "resource_owner_organization_id"
  | (string & {});
export interface ResourcesTrendsStringFilter {
  FieldName?: ResourcesTrendsStringField;
  Filter?: StringFilter;
}
export type ResourcesTrendsStringFilterList = ResourcesTrendsStringFilter[];
const ResourcesTrendsStringFilterList =
  FindingsTrendsStringFilterList as any as S.Schema<ResourcesTrendsStringFilterList>;
export interface ResourcesTrendsCompositeFilter {
  StringFilters?: ResourcesTrendsStringFilter[];
  NestedCompositeFilters?: ResourcesTrendsCompositeFilter[];
  Operator?: AllowedOperators;
}
const ResourcesTrendsCompositeFilter = /*@__PURE__*/ __L.at(
  __c135,
  1,
) as any as S.Schema<ResourcesTrendsCompositeFilter>;
export type ResourcesTrendsCompositeFilterList = ResourcesTrendsCompositeFilter[];
const ResourcesTrendsCompositeFilterList = /*@__PURE__*/ __L.at(
  __c135,
  2,
) as any as S.Schema<ResourcesTrendsCompositeFilterList>;
export interface ResourcesTrendsFilters {
  CompositeFilters?: ResourcesTrendsCompositeFilter[];
  CompositeOperator?: AllowedOperators;
}
const ResourcesTrendsFilters = /*@__PURE__*/ __L.at(
  __c135,
  3,
) as any as S.Schema<ResourcesTrendsFilters>;
export interface GetResourcesTrendsV2Request {
  Filters?: ResourcesTrendsFilters;
  StartTime?: Date;
  EndTime?: Date;
  NextToken?: string;
  MaxResults?: number;
}
const GetResourcesTrendsV2Request = /*@__PURE__*/ __L.at(
  __c135,
  4,
) as any as S.Schema<GetResourcesTrendsV2Request>;
export interface ResourcesCount {
  AllResources?: number;
}
const ResourcesCount = /*@__PURE__*/ __L.at(__c135, 5) as any as S.Schema<ResourcesCount>;
export interface ResourcesTrendsValues {
  ResourcesCount?: ResourcesCount;
}
const ResourcesTrendsValues = /*@__PURE__*/ __L.at(
  __c135,
  6,
) as any as S.Schema<ResourcesTrendsValues>;
export interface ResourcesTrendsMetricsResult {
  Timestamp?: Date;
  TrendsValues?: ResourcesTrendsValues;
}
const ResourcesTrendsMetricsResult = /*@__PURE__*/ __L.at(
  __c135,
  7,
) as any as S.Schema<ResourcesTrendsMetricsResult>;
export type ResourcesTrendsMetrics = ResourcesTrendsMetricsResult[];
const ResourcesTrendsMetrics = /*@__PURE__*/ __L.at(__c136, 0);
export interface GetResourcesTrendsV2Response {
  Granularity: GranularityField;
  TrendsMetrics: (ResourcesTrendsMetricsResult & {
    Timestamp: Date;
    TrendsValues: ResourcesTrendsValues & {
      ResourcesCount: ResourcesCount & { AllResources: TrendsValueCount };
    };
  })[];
  NextToken?: string;
}
const GetResourcesTrendsV2Response = /*@__PURE__*/ __L.at(
  __c136,
  1,
) as any as S.Schema<GetResourcesTrendsV2Response>;
export interface GetResourcesV2Request {
  Filters?: ResourcesFilters;
  Scopes?: ResourceScopes;
  SortCriteria?: SortCriterion[];
  NextToken?: string;
  MaxResults?: number;
}
const GetResourcesV2Request = /*@__PURE__*/ __L.at(
  __c136,
  2,
) as any as S.Schema<GetResourcesV2Request>;
export type ResourceCategory =
  | "Compute"
  | "Database"
  | "Storage"
  | "Code"
  | "AI/ML"
  | "Identity"
  | "Network"
  | "Messaging"
  | "Other"
  | (string & {});
const ResourceCategory = S.String;

export interface ResourceSeverityBreakdown {
  Other?: number;
  Fatal?: number;
  Critical?: number;
  High?: number;
  Medium?: number;
  Low?: number;
  Informational?: number;
  Unknown?: number;
}
const ResourceSeverityBreakdown = /*@__PURE__*/ __L.at(
  __c136,
  3,
) as any as S.Schema<ResourceSeverityBreakdown>;
export interface ResourceFindingsSummary {
  FindingType?: string;
  ProductName?: string;
  TotalFindings?: number;
  Severities?: ResourceSeverityBreakdown;
}
const ResourceFindingsSummary = /*@__PURE__*/ __L.at(
  __c136,
  4,
) as any as S.Schema<ResourceFindingsSummary>;
export type ResourceFindingsSummaryList = ResourceFindingsSummary[];
const ResourceFindingsSummaryList = /*@__PURE__*/ __L.at(__c136, 5);
export interface ResourceTag {
  Key?: string;
  Value?: string;
}
const ResourceTag = /*@__PURE__*/ __L.at(__c136, 6) as any as S.Schema<ResourceTag>;
export type ResourceTagList = ResourceTag[];
const ResourceTagList = /*@__PURE__*/ __L.at(__c136, 7);
export type ResourceConfig = unknown;
export type ResourceSubCategory =
  | "Model"
  | "ModelServing"
  | "Agent"
  | "AgentFramework"
  | "AgentToolsAndIdentity"
  | "SafetyAndGuardrail"
  | "KnowledgeAndData"
  | "OrchestrationAndPipeline"
  | "ExternalEndpoint"
  | "Development"
  | "Other"
  | (string & {});
const ResourceSubCategory = S.String;

export type DiscoveryType = "Managed" | "SelfHosted" | (string & {});
const DiscoveryType = S.String;

export interface AIDetails {
  HostResourceGuid?: string;
  HostResourceType?: string;
  CanonicalId?: string;
  SelfHostedAIModelResourceCount?: number;
  SelfHostedAIAgentResourceCount?: number;
  SelfHostedAIModelServingResourceCount?: number;
  SelfHostedAIExternalEndpointResourceCount?: number;
  SelfHostedAIDevelopmentResourceCount?: number;
  SelfHostedAIAgentFrameworkResourceCount?: number;
  SelfHostedAIAgentToolsAndIdentityResourceCount?: number;
  SelfHostedTotalAIResourceCount?: number;
}
const AIDetails = /*@__PURE__*/ __L.at(__c137, 0) as any as S.Schema<AIDetails>;
export interface ResourceInfo {
  AIDetails?: AIDetails;
}
const ResourceInfo = /*@__PURE__*/ __L.at(__c137, 1) as any as S.Schema<ResourceInfo>;
export interface ResourceResult {
  ResourceGuid?: string;
  ResourceId?: string;
  AccountId?: string;
  AccountName?: string;
  Region?: string;
  ResourceProvider?: string;
  ResourceOwnerAccountId?: string;
  ResourceOwnerOrgId?: string;
  ResourceCloudPartition?: string;
  ResourceRegion?: string;
  ResourceCategory?: ResourceCategory;
  ResourceType?: string;
  ResourceName?: string;
  ResourceCreationTimeDt?: string;
  ResourceDetailCaptureTimeDt?: string;
  FindingsSummary?: ResourceFindingsSummary[];
  ResourceTags?: ResourceTag[];
  ResourceConfig?: any;
  ResourceSubCategory?: ResourceSubCategory;
  DiscoveryType?: DiscoveryType;
  ResourceInfo?: ResourceInfo;
}
const ResourceResult = /*@__PURE__*/ __L.at(__c137, 2) as any as S.Schema<ResourceResult>;
export type Resources = ResourceResult[];
const Resources = /*@__PURE__*/ __L.at(__c137, 3);
export interface GetResourcesV2Response {
  Resources: (ResourceResult & {
    ResourceId: NonEmptyString;
    AccountId: NonEmptyString;
    Region: NonEmptyString;
    ResourceType: NonEmptyString;
    ResourceDetailCaptureTimeDt: NonEmptyString;
    ResourceConfig: ResourceConfig;
    FindingsSummary: (ResourceFindingsSummary & {
      FindingType: NonEmptyString;
      ProductName: NonEmptyString;
      TotalFindings: number;
    })[];
    ResourceTags: (ResourceTag & { Key: NonEmptyString; Value: NonEmptyString })[];
  })[];
  NextToken?: string;
}
const GetResourcesV2Response = /*@__PURE__*/ __L.at(
  __c137,
  4,
) as any as S.Schema<GetResourcesV2Response>;
export interface GetSecurityControlDefinitionRequest {
  SecurityControlId?: string;
}
const GetSecurityControlDefinitionRequest = /*@__PURE__*/ __L.at(
  __c137,
  5,
) as any as S.Schema<GetSecurityControlDefinitionRequest>;
export type RegionAvailabilityStatus = "AVAILABLE" | "UNAVAILABLE" | (string & {});
const RegionAvailabilityStatus = S.String;

export type SecurityControlProperty = "Parameters" | (string & {});
export type CustomizableProperties = SecurityControlProperty[];
const CustomizableProperties = IntegrationTypeList as any as S.Schema<CustomizableProperties>;
export interface IntegerConfigurationOptions {
  DefaultValue?: number;
  Min?: number;
  Max?: number;
}
const IntegerConfigurationOptions = /*@__PURE__*/ __L.at(
  __c137,
  6,
) as any as S.Schema<IntegerConfigurationOptions>;
export interface IntegerListConfigurationOptions {
  DefaultValue?: number[];
  Min?: number;
  Max?: number;
  MaxItems?: number;
}
const IntegerListConfigurationOptions = /*@__PURE__*/ __L.at(
  __c137,
  7,
) as any as S.Schema<IntegerListConfigurationOptions>;
export interface DoubleConfigurationOptions {
  DefaultValue?: number;
  Min?: number;
  Max?: number;
}
const DoubleConfigurationOptions =
  IntegerConfigurationOptions as any as S.Schema<DoubleConfigurationOptions>;
export interface StringConfigurationOptions {
  DefaultValue?: string;
  Re2Expression?: string;
  ExpressionDescription?: string;
}
const StringConfigurationOptions = /*@__PURE__*/ __L.at(
  __c138,
  0,
) as any as S.Schema<StringConfigurationOptions>;
export interface StringListConfigurationOptions {
  DefaultValue?: string[];
  Re2Expression?: string;
  MaxItems?: number;
  ExpressionDescription?: string;
}
const StringListConfigurationOptions = /*@__PURE__*/ __L.at(
  __c138,
  1,
) as any as S.Schema<StringListConfigurationOptions>;
export interface BooleanConfigurationOptions {
  DefaultValue?: boolean;
}
const BooleanConfigurationOptions = /*@__PURE__*/ __L.at(
  __c138,
  2,
) as any as S.Schema<BooleanConfigurationOptions>;
export interface EnumConfigurationOptions {
  DefaultValue?: string;
  AllowedValues?: string[];
}
const EnumConfigurationOptions = /*@__PURE__*/ __L.at(
  __c138,
  3,
) as any as S.Schema<EnumConfigurationOptions>;
export interface EnumListConfigurationOptions {
  DefaultValue?: string[];
  MaxItems?: number;
  AllowedValues?: string[];
}
const EnumListConfigurationOptions = /*@__PURE__*/ __L.at(
  __c138,
  4,
) as any as S.Schema<EnumListConfigurationOptions>;
export type ConfigurationOptions =
  | {
      Integer: IntegerConfigurationOptions;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList: IntegerListConfigurationOptions;
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double: DoubleConfigurationOptions;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String: StringConfigurationOptions;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList: StringListConfigurationOptions;
      Boolean?: never;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean: BooleanConfigurationOptions;
      Enum?: never;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum: EnumConfigurationOptions;
      EnumList?: never;
    }
  | {
      Integer?: never;
      IntegerList?: never;
      Double?: never;
      String?: never;
      StringList?: never;
      Boolean?: never;
      Enum?: never;
      EnumList: EnumListConfigurationOptions;
    };
const ConfigurationOptions = /*@__PURE__*/ __L.at(__c138, 5);
export interface ParameterDefinition {
  Description?: string;
  ConfigurationOptions?: ConfigurationOptions;
}
const ParameterDefinition = /*@__PURE__*/ __L.at(__c138, 6) as any as S.Schema<ParameterDefinition>;
export type ParameterDefinitions = { [key: string]: ParameterDefinition | undefined };
const ParameterDefinitions = /*@__PURE__*/ __L.at(__c138, 7);
export interface SecurityControlDefinition {
  SecurityControlId?: string;
  Title?: string;
  Description?: string;
  RemediationUrl?: string;
  SeverityRating?: SeverityRating;
  CurrentRegionAvailability?: RegionAvailabilityStatus;
  CustomizableProperties?: SecurityControlProperty[];
  ParameterDefinitions?: { [key: string]: ParameterDefinition | undefined };
  Provider?: SecurityControlsProvider;
}
const SecurityControlDefinition = /*@__PURE__*/ __L.at(
  __c139,
  0,
) as any as S.Schema<SecurityControlDefinition>;
export interface GetSecurityControlDefinitionResponse {
  SecurityControlDefinition: SecurityControlDefinition & {
    SecurityControlId: NonEmptyString;
    Title: NonEmptyString;
    Description: NonEmptyString;
    RemediationUrl: NonEmptyString;
    SeverityRating: SeverityRating;
    CurrentRegionAvailability: RegionAvailabilityStatus;
    ParameterDefinitions: {
      [key: string]:
        | (ParameterDefinition & {
            Description: NonEmptyString;
            ConfigurationOptions: ConfigurationOptions;
          })
        | undefined;
    };
  };
}
const GetSecurityControlDefinitionResponse = /*@__PURE__*/ __L.at(
  __c139,
  1,
) as any as S.Schema<GetSecurityControlDefinitionResponse>;
export interface InviteMembersRequest {
  AccountIds?: string[];
}
const InviteMembersRequest = /*@__PURE__*/ __L.at(
  __c139,
  2,
) as any as S.Schema<InviteMembersRequest>;
export interface InviteMembersResponse {
  UnprocessedAccounts?: Result[];
}
const InviteMembersResponse = CreateMembersResponse as any as S.Schema<InviteMembersResponse>;
export interface ListAggregatorsV2Request {
  NextToken?: string;
  MaxResults?: number;
}
const ListAggregatorsV2Request = /*@__PURE__*/ __L.at(
  __c139,
  3,
) as any as S.Schema<ListAggregatorsV2Request>;
export interface AggregatorV2 {
  AggregatorV2Arn?: string;
}
const AggregatorV2 = /*@__PURE__*/ __L.at(__c139, 4) as any as S.Schema<AggregatorV2>;
export type AggregatorV2List = AggregatorV2[];
const AggregatorV2List = /*@__PURE__*/ __L.at(__c139, 5);
export interface ListAggregatorsV2Response {
  AggregatorsV2?: AggregatorV2[];
  NextToken?: string;
}
const ListAggregatorsV2Response = /*@__PURE__*/ __L.at(
  __c139,
  6,
) as any as S.Schema<ListAggregatorsV2Response>;
export interface ListAutomationRulesRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListAutomationRulesRequest = /*@__PURE__*/ __L.at(
  __c139,
  7,
) as any as S.Schema<ListAutomationRulesRequest>;
export interface AutomationRulesMetadata {
  RuleArn?: string;
  RuleStatus?: RuleStatus;
  RuleOrder?: number;
  RuleName?: string;
  Description?: string;
  IsTerminal?: boolean;
  CreatedAt?: Date;
  UpdatedAt?: Date;
  CreatedBy?: string;
}
const AutomationRulesMetadata = /*@__PURE__*/ __L.at(
  __c140,
  0,
) as any as S.Schema<AutomationRulesMetadata>;
export type AutomationRulesMetadataList = AutomationRulesMetadata[];
const AutomationRulesMetadataList = /*@__PURE__*/ __L.at(__c140, 1);
export interface ListAutomationRulesResponse {
  AutomationRulesMetadata?: AutomationRulesMetadata[];
  NextToken?: string;
}
const ListAutomationRulesResponse = /*@__PURE__*/ __L.at(
  __c140,
  2,
) as any as S.Schema<ListAutomationRulesResponse>;
export interface ListAutomationRulesV2Request {
  NextToken?: string;
  MaxResults?: number;
}
const ListAutomationRulesV2Request = /*@__PURE__*/ __L.at(
  __c140,
  3,
) as any as S.Schema<ListAutomationRulesV2Request>;
export interface AutomationRulesActionTypeObjectV2 {
  Type?: AutomationRulesActionTypeV2;
}
const AutomationRulesActionTypeObjectV2 = /*@__PURE__*/ __L.at(
  __c140,
  4,
) as any as S.Schema<AutomationRulesActionTypeObjectV2>;
export type AutomationRulesActionTypeListV2 = AutomationRulesActionTypeObjectV2[];
const AutomationRulesActionTypeListV2 = /*@__PURE__*/ __L.at(__c140, 5);
export interface AutomationRulesMetadataV2 {
  RuleArn?: string;
  RuleId?: string;
  RuleOrder?: number;
  RuleName?: string;
  RuleStatus?: RuleStatusV2;
  Description?: string;
  Actions?: AutomationRulesActionTypeObjectV2[];
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
const AutomationRulesMetadataV2 = /*@__PURE__*/ __L.at(
  __c140,
  6,
) as any as S.Schema<AutomationRulesMetadataV2>;
export type AutomationRulesMetadataListV2 = AutomationRulesMetadataV2[];
const AutomationRulesMetadataListV2 = /*@__PURE__*/ __L.at(__c140, 7);
export interface ListAutomationRulesV2Response {
  Rules?: AutomationRulesMetadataV2[];
  NextToken?: string;
}
const ListAutomationRulesV2Response = /*@__PURE__*/ __L.at(
  __c141,
  0,
) as any as S.Schema<ListAutomationRulesV2Response>;
export interface ListConfigurationPoliciesRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListConfigurationPoliciesRequest = /*@__PURE__*/ __L.at(
  __c141,
  1,
) as any as S.Schema<ListConfigurationPoliciesRequest>;
export interface ConfigurationPolicySummary {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  UpdatedAt?: Date;
  ServiceEnabled?: boolean;
}
const ConfigurationPolicySummary = /*@__PURE__*/ __L.at(
  __c141,
  2,
) as any as S.Schema<ConfigurationPolicySummary>;
export type ConfigurationPolicySummaryList = ConfigurationPolicySummary[];
const ConfigurationPolicySummaryList = /*@__PURE__*/ __L.at(__c141, 3);
export interface ListConfigurationPoliciesResponse {
  ConfigurationPolicySummaries?: ConfigurationPolicySummary[];
  NextToken?: string;
}
const ListConfigurationPoliciesResponse = /*@__PURE__*/ __L.at(
  __c141,
  4,
) as any as S.Schema<ListConfigurationPoliciesResponse>;
export interface AssociationFilters {
  ConfigurationPolicyId?: string;
  AssociationType?: AssociationType;
  AssociationStatus?: ConfigurationPolicyAssociationStatus;
}
const AssociationFilters = /*@__PURE__*/ __L.at(__c141, 5) as any as S.Schema<AssociationFilters>;
export interface ListConfigurationPolicyAssociationsRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: AssociationFilters;
}
const ListConfigurationPolicyAssociationsRequest = /*@__PURE__*/ __L.at(
  __c141,
  6,
) as any as S.Schema<ListConfigurationPolicyAssociationsRequest>;
export type ConfigurationPolicyAssociationSummaryList = ConfigurationPolicyAssociationSummary[];
const ConfigurationPolicyAssociationSummaryList =
  ConfigurationPolicyAssociationList as any as S.Schema<ConfigurationPolicyAssociationSummaryList>;
export interface ListConfigurationPolicyAssociationsResponse {
  ConfigurationPolicyAssociationSummaries?: ConfigurationPolicyAssociationSummary[];
  NextToken?: string;
}
const ListConfigurationPolicyAssociationsResponse = /*@__PURE__*/ __L.at(
  __c141,
  7,
) as any as S.Schema<ListConfigurationPolicyAssociationsResponse>;
export type CspmConnectorProviderName = "AZURE" | (string & {});
const CspmConnectorProviderName = S.String;

export interface ListConnectorsRequest {
  NextToken?: string;
  MaxResults?: number;
  ProviderName?: CspmConnectorProviderName;
  ConnectorStatus?: CspmConnectorStatus;
  EnablementStatus?: CspmEnablementStatus;
}
const ListConnectorsRequest = /*@__PURE__*/ __L.at(
  __c142,
  0,
) as any as S.Schema<ListConnectorsRequest>;
export interface CspmProviderSummary {
  ProviderName?: CspmConnectorProviderName;
  ConnectorStatus?: CspmConnectorStatus;
  ProviderConfiguration?: CspmProviderDetail;
}
const CspmProviderSummary = /*@__PURE__*/ __L.at(__c142, 1) as any as S.Schema<CspmProviderSummary>;
export interface CspmConnectorSummary {
  ConnectorArn?: string;
  ConnectorId?: string;
  Name?: string;
  Description?: string;
  ProviderSummary?: CspmProviderSummary;
  CreatedAt?: Date;
  CreatedBy?: string;
  EnablementStatus?: CspmEnablementStatus;
}
const CspmConnectorSummary = /*@__PURE__*/ __L.at(
  __c142,
  2,
) as any as S.Schema<CspmConnectorSummary>;
export type CspmConnectorSummaryList = CspmConnectorSummary[];
const CspmConnectorSummaryList = /*@__PURE__*/ __L.at(__c142, 3);
export interface ListConnectorsResponse {
  NextToken?: string;
  Connectors: CspmConnectorSummary[];
}
const ListConnectorsResponse = /*@__PURE__*/ __L.at(
  __c142,
  4,
) as any as S.Schema<ListConnectorsResponse>;
export type ConnectorProviderName = "JIRA_CLOUD" | "SERVICENOW" | "AZURE" | (string & {});
const ConnectorProviderName = S.String;

export interface ListConnectorsV2Request {
  NextToken?: string;
  MaxResults?: number;
  ProviderName?: ConnectorProviderName;
  ConnectorStatus?: ConnectorStatus;
  EnablementStatus?: EnablementStatus;
}
const ListConnectorsV2Request = /*@__PURE__*/ __L.at(
  __c142,
  5,
) as any as S.Schema<ListConnectorsV2Request>;
export interface ProviderSummary {
  ProviderName?: ConnectorProviderName;
  ConnectorStatus?: ConnectorStatus;
  ProviderConfiguration?: ProviderDetail;
}
const ProviderSummary = /*@__PURE__*/ __L.at(__c142, 6) as any as S.Schema<ProviderSummary>;
export interface ConnectorSummary {
  ConnectorArn?: string;
  ConnectorId?: string;
  Name?: string;
  Description?: string;
  ProviderSummary?: ProviderSummary;
  CreatedAt?: Date;
  EnablementStatus?: EnablementStatus;
  EnablementStatusReason?: string;
}
const ConnectorSummary = /*@__PURE__*/ __L.at(__c142, 7) as any as S.Schema<ConnectorSummary>;
export type ConnectorSummaryList = ConnectorSummary[];
const ConnectorSummaryList = /*@__PURE__*/ __L.at(__c143, 0);
export interface ListConnectorsV2Response {
  NextToken?: string;
  Connectors: (ConnectorSummary & {
    ConnectorId: NonEmptyString;
    Name: NonEmptyString;
    ProviderSummary: ProviderSummary;
    CreatedAt: Date;
  })[];
}
const ListConnectorsV2Response = /*@__PURE__*/ __L.at(
  __c143,
  1,
) as any as S.Schema<ListConnectorsV2Response>;
export interface ListEnabledProductsForImportRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListEnabledProductsForImportRequest = /*@__PURE__*/ __L.at(
  __c143,
  2,
) as any as S.Schema<ListEnabledProductsForImportRequest>;
export type ProductSubscriptionArnList = string[];
const ProductSubscriptionArnList =
  AutomationRulesArnsList as any as S.Schema<ProductSubscriptionArnList>;
export interface ListEnabledProductsForImportResponse {
  ProductSubscriptions?: string[];
  NextToken?: string;
}
const ListEnabledProductsForImportResponse = /*@__PURE__*/ __L.at(
  __c143,
  3,
) as any as S.Schema<ListEnabledProductsForImportResponse>;
export interface ListExposuresByRemediationV2Request {
  TargetUid?: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListExposuresByRemediationV2Request = /*@__PURE__*/ __L.at(
  __c143,
  4,
) as any as S.Schema<ListExposuresByRemediationV2Request>;
export type ExposureSeverity =
  | "Informational"
  | "Low"
  | "Medium"
  | "High"
  | "Critical"
  | (string & {});
const ExposureSeverity = S.String;

export type ExposureImpact = "Reduces" | "Resolves" | "Unchanged" | (string & {});
const ExposureImpact = S.String;

export interface ExposureFinding {
  MetadataUid?: string;
  Title?: string;
  PreviousSeverity?: ExposureSeverity;
  ProjectedSeverity?: ExposureSeverity;
  Impact?: ExposureImpact;
}
const ExposureFinding = /*@__PURE__*/ __L.at(__c143, 5) as any as S.Schema<ExposureFinding>;
export type ExposureFindingItemsList = ExposureFinding[];
const ExposureFindingItemsList = /*@__PURE__*/ __L.at(__c143, 6);
export interface ListExposuresByRemediationV2Response {
  Items: (ExposureFinding & {
    MetadataUid: NonEmptyString;
    Title: NonEmptyString;
    PreviousSeverity: ExposureSeverity;
    ProjectedSeverity: ExposureSeverity;
    Impact: ExposureImpact;
  })[];
  TargetUid: string;
  Resource: RemediationResource & {
    AccountId: NonEmptyString;
    Region: NonEmptyString;
    Type: NonEmptyString;
    Id: NonEmptyString;
    ResourceRegion: NonEmptyString;
    CloudProvider: CloudProviderName;
  };
  TotalCount: number;
  Trait: RemediationTrait & { Type: NonEmptyString; Title: NonEmptyString };
  NextToken?: string;
}
const ListExposuresByRemediationV2Response = /*@__PURE__*/ __L.at(
  __c143,
  7,
) as any as S.Schema<ListExposuresByRemediationV2Response>;
export interface ListFindingAggregatorsRequest {
  NextToken?: string;
  MaxResults?: number;
}
const ListFindingAggregatorsRequest = /*@__PURE__*/ __L.at(
  __c144,
  0,
) as any as S.Schema<ListFindingAggregatorsRequest>;
export interface FindingAggregator {
  FindingAggregatorArn?: string;
}
const FindingAggregator = /*@__PURE__*/ __L.at(__c144, 1) as any as S.Schema<FindingAggregator>;
export type FindingAggregatorList = FindingAggregator[];
const FindingAggregatorList = /*@__PURE__*/ __L.at(__c144, 2);
export interface ListFindingAggregatorsResponse {
  FindingAggregators?: FindingAggregator[];
  NextToken?: string;
}
const ListFindingAggregatorsResponse = /*@__PURE__*/ __L.at(
  __c144,
  3,
) as any as S.Schema<ListFindingAggregatorsResponse>;
export type FreeTrialAccountId = string;
export type FreeTrialAccountIdList = string[];
const FreeTrialAccountIdList = AutomationRulesArnsList as any as S.Schema<FreeTrialAccountIdList>;
export type FreeTrialStatusValue = "ACTIVE" | "INACTIVE" | (string & {});
const FreeTrialStatusValue = S.String;

export type FreeTrialStatusValueList = FreeTrialStatusValue[];
const FreeTrialStatusValueList = IntegrationTypeList as any as S.Schema<FreeTrialStatusValueList>;
export interface ListFreeTrialStatusesV2Request {
  AccountIds?: string[];
  Statuses?: FreeTrialStatusValue[];
  MaxResults?: number;
  NextToken?: string;
}
const ListFreeTrialStatusesV2Request = /*@__PURE__*/ __L.at(
  __c144,
  4,
) as any as S.Schema<ListFreeTrialStatusesV2Request>;
export type FreeTrialType = "SECURITY_HUB_V2" | "SECURITY_HUB_V2_MULTI_CLOUD_AZURE" | (string & {});
const FreeTrialType = S.String;

export interface FreeTrialStatus {
  FeatureType?: FreeTrialType;
  Status?: FreeTrialStatusValue;
  StartedAt?: Date;
  ExpiresAt?: Date;
}
const FreeTrialStatus = /*@__PURE__*/ __L.at(__c144, 5) as any as S.Schema<FreeTrialStatus>;
export type FreeTrialStatusList = FreeTrialStatus[];
const FreeTrialStatusList = /*@__PURE__*/ __L.at(__c144, 6);
export interface AccountFreeTrialStatus {
  AccountId?: string;
  EvaluatedAt?: Date;
  FreeTrialStatuses?: FreeTrialStatus[];
}
const AccountFreeTrialStatus = /*@__PURE__*/ __L.at(
  __c144,
  7,
) as any as S.Schema<AccountFreeTrialStatus>;
export type AccountFreeTrialStatusList = AccountFreeTrialStatus[];
const AccountFreeTrialStatusList = /*@__PURE__*/ __L.at(__c145, 0);
export interface ListFreeTrialStatusesV2Response {
  AccountFreeTrialStatuses: (AccountFreeTrialStatus & {
    AccountId: FreeTrialAccountId;
    EvaluatedAt: Date;
    FreeTrialStatuses: (FreeTrialStatus & {
      FeatureType: FreeTrialType;
      Status: FreeTrialStatusValue;
      StartedAt: Date;
      ExpiresAt: Date;
    })[];
  })[];
  NextToken?: string;
}
const ListFreeTrialStatusesV2Response = /*@__PURE__*/ __L.at(
  __c145,
  1,
) as any as S.Schema<ListFreeTrialStatusesV2Response>;
export type CrossAccountMaxResults = number;
export interface ListInvitationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListInvitationsRequest = /*@__PURE__*/ __L.at(
  __c145,
  2,
) as any as S.Schema<ListInvitationsRequest>;
export type InvitationList = Invitation[];
const InvitationList = /*@__PURE__*/ __L.at(__c145, 3);
export interface ListInvitationsResponse {
  Invitations?: Invitation[];
  NextToken?: string;
}
const ListInvitationsResponse = /*@__PURE__*/ __L.at(
  __c145,
  4,
) as any as S.Schema<ListInvitationsResponse>;
export interface ListMembersRequest {
  OnlyAssociated?: boolean;
  MaxResults?: number;
  NextToken?: string;
}
const ListMembersRequest = /*@__PURE__*/ __L.at(__c145, 5) as any as S.Schema<ListMembersRequest>;
export interface ListMembersResponse {
  Members?: Member[];
  NextToken?: string;
}
const ListMembersResponse = /*@__PURE__*/ __L.at(__c145, 6) as any as S.Schema<ListMembersResponse>;
export type AdminsMaxResults = number;
export interface ListOrganizationAdminAccountsRequest {
  MaxResults?: number;
  NextToken?: string;
  Feature?: SecurityHubFeature;
}
const ListOrganizationAdminAccountsRequest = /*@__PURE__*/ __L.at(
  __c145,
  7,
) as any as S.Schema<ListOrganizationAdminAccountsRequest>;
export type AdminStatus = "ENABLED" | "DISABLE_IN_PROGRESS" | (string & {});
const AdminStatus = S.String;

export interface AdminAccount {
  AccountId?: string;
  Status?: AdminStatus;
}
const AdminAccount = /*@__PURE__*/ __L.at(__c146, 0) as any as S.Schema<AdminAccount>;
export type AdminAccounts = AdminAccount[];
const AdminAccounts = /*@__PURE__*/ __L.at(__c146, 1);
export interface ListOrganizationAdminAccountsResponse {
  AdminAccounts?: AdminAccount[];
  NextToken?: string;
  Feature?: SecurityHubFeature;
}
const ListOrganizationAdminAccountsResponse = /*@__PURE__*/ __L.at(
  __c146,
  2,
) as any as S.Schema<ListOrganizationAdminAccountsResponse>;
export type SecurityControlsProviders = SecurityControlsProvider[];
const SecurityControlsProviders = IntegrationTypeList as any as S.Schema<SecurityControlsProviders>;
export interface ListSecurityControlDefinitionsRequest {
  StandardsArn?: string;
  NextToken?: string;
  MaxResults?: number;
  Providers?: SecurityControlsProvider[];
}
const ListSecurityControlDefinitionsRequest = /*@__PURE__*/ __L.at(
  __c146,
  3,
) as any as S.Schema<ListSecurityControlDefinitionsRequest>;
export type SecurityControlDefinitions = SecurityControlDefinition[];
const SecurityControlDefinitions = /*@__PURE__*/ __L.at(__c146, 4);
export interface ListSecurityControlDefinitionsResponse {
  SecurityControlDefinitions: (SecurityControlDefinition & {
    SecurityControlId: NonEmptyString;
    Title: NonEmptyString;
    Description: NonEmptyString;
    RemediationUrl: NonEmptyString;
    SeverityRating: SeverityRating;
    CurrentRegionAvailability: RegionAvailabilityStatus;
    ParameterDefinitions: {
      [key: string]:
        | (ParameterDefinition & {
            Description: NonEmptyString;
            ConfigurationOptions: ConfigurationOptions;
          })
        | undefined;
    };
  })[];
  NextToken?: string;
}
const ListSecurityControlDefinitionsResponse = /*@__PURE__*/ __L.at(
  __c146,
  5,
) as any as S.Schema<ListSecurityControlDefinitionsResponse>;
export interface ListStandardsControlAssociationsRequest {
  SecurityControlId?: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListStandardsControlAssociationsRequest = /*@__PURE__*/ __L.at(
  __c146,
  6,
) as any as S.Schema<ListStandardsControlAssociationsRequest>;
export interface StandardsControlAssociationSummary {
  StandardsArn?: string;
  SecurityControlId?: string;
  SecurityControlArn?: string;
  AssociationStatus?: AssociationStatus;
  RelatedRequirements?: string[];
  UpdatedAt?: Date;
  UpdatedReason?: string;
  StandardsControlTitle?: string;
  StandardsControlDescription?: string;
}
const StandardsControlAssociationSummary = /*@__PURE__*/ __L.at(
  __c146,
  7,
) as any as S.Schema<StandardsControlAssociationSummary>;
export type StandardsControlAssociationSummaries = StandardsControlAssociationSummary[];
const StandardsControlAssociationSummaries = /*@__PURE__*/ __L.at(__c147, 0);
export interface ListStandardsControlAssociationsResponse {
  StandardsControlAssociationSummaries: (StandardsControlAssociationSummary & {
    StandardsArn: NonEmptyString;
    SecurityControlId: NonEmptyString;
    SecurityControlArn: NonEmptyString;
    AssociationStatus: AssociationStatus;
  })[];
  NextToken?: string;
}
const ListStandardsControlAssociationsResponse = /*@__PURE__*/ __L.at(
  __c147,
  1,
) as any as S.Schema<ListStandardsControlAssociationsResponse>;
export type ResourceArn = string;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c147,
  2,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c147,
  3,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface RegisterConnectorV2Request {
  AuthCode?: string;
  AuthState?: string;
}
const RegisterConnectorV2Request = /*@__PURE__*/ __L.at(
  __c147,
  4,
) as any as S.Schema<RegisterConnectorV2Request>;
export interface RegisterConnectorV2Response {
  ConnectorArn?: string;
  ConnectorId: string;
}
const RegisterConnectorV2Response = /*@__PURE__*/ __L.at(
  __c147,
  5,
) as any as S.Schema<RegisterConnectorV2Response>;
export interface StartConfigurationPolicyAssociationRequest {
  ConfigurationPolicyIdentifier?: string;
  Target?: Target;
}
const StartConfigurationPolicyAssociationRequest = /*@__PURE__*/ __L.at(
  __c147,
  6,
) as any as S.Schema<StartConfigurationPolicyAssociationRequest>;
export interface StartConfigurationPolicyAssociationResponse {
  ConfigurationPolicyId?: string;
  TargetId?: string;
  TargetType?: TargetType;
  AssociationType?: AssociationType;
  UpdatedAt?: Date;
  AssociationStatus?: ConfigurationPolicyAssociationStatus;
  AssociationStatusMessage?: string;
}
const StartConfigurationPolicyAssociationResponse =
  ConfigurationPolicyAssociationSummary as any as S.Schema<StartConfigurationPolicyAssociationResponse>;
export interface StartConfigurationPolicyDisassociationRequest {
  Target?: Target;
  ConfigurationPolicyIdentifier?: string;
}
const StartConfigurationPolicyDisassociationRequest = /*@__PURE__*/ __L.at(
  __c147,
  7,
) as any as S.Schema<StartConfigurationPolicyDisassociationRequest>;
export interface StartConfigurationPolicyDisassociationResponse {}
const StartConfigurationPolicyDisassociationResponse =
  AcceptAdministratorInvitationResponse as any as S.Schema<StartConfigurationPolicyDisassociationResponse>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags?: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c148, 0) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = AcceptInvitationResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = AutomationRulesArnsList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys?: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c148,
  1,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = AcceptInvitationResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateActionTargetRequest {
  ActionTargetArn: string;
  Name?: string;
  Description?: string;
}
const UpdateActionTargetRequest = /*@__PURE__*/ __L.at(
  __c148,
  2,
) as any as S.Schema<UpdateActionTargetRequest>;
export interface UpdateActionTargetResponse {}
const UpdateActionTargetResponse =
  AcceptInvitationResponse as any as S.Schema<UpdateActionTargetResponse>;
export interface UpdateAggregatorV2Request {
  AggregatorV2Arn: string;
  RegionLinkingMode?: string;
  LinkedRegions?: string[];
}
const UpdateAggregatorV2Request = /*@__PURE__*/ __L.at(
  __c148,
  3,
) as any as S.Schema<UpdateAggregatorV2Request>;
export interface UpdateAggregatorV2Response {
  AggregatorV2Arn?: string;
  AggregationRegion?: string;
  RegionLinkingMode?: string;
  LinkedRegions?: string[];
}
const UpdateAggregatorV2Response =
  CreateAggregatorV2Response as any as S.Schema<UpdateAggregatorV2Response>;
export interface UpdateAutomationRuleV2Request {
  Identifier: string;
  RuleStatus?: RuleStatusV2;
  RuleOrder?: number;
  Description?: string;
  RuleName?: string;
  Criteria?: Criteria;
  Actions?: AutomationRulesActionV2[];
}
const UpdateAutomationRuleV2Request = /*@__PURE__*/ __L.at(
  __c148,
  4,
) as any as S.Schema<UpdateAutomationRuleV2Request>;
export interface UpdateAutomationRuleV2Response {}
const UpdateAutomationRuleV2Response =
  AcceptInvitationResponse as any as S.Schema<UpdateAutomationRuleV2Response>;
export interface UpdateConfigurationPolicyRequest {
  Identifier: string;
  Name?: string;
  Description?: string;
  UpdatedReason?: string;
  ConfigurationPolicy?: Policy;
}
const UpdateConfigurationPolicyRequest = /*@__PURE__*/ __L.at(
  __c148,
  5,
) as any as S.Schema<UpdateConfigurationPolicyRequest>;
export interface UpdateConfigurationPolicyResponse {
  Arn?: string;
  Id?: string;
  Name?: string;
  Description?: string;
  UpdatedAt?: Date;
  CreatedAt?: Date;
  ConfigurationPolicy?: Policy;
}
const UpdateConfigurationPolicyResponse =
  CreateConfigurationPolicyResponse as any as S.Schema<UpdateConfigurationPolicyResponse>;
export interface AzureUpdateConfiguration {
  ScopeConfiguration?: AzureScopeConfiguration;
  AzureRegions?: string[];
}
const AzureUpdateConfiguration = /*@__PURE__*/ __L.at(
  __c148,
  6,
) as any as S.Schema<AzureUpdateConfiguration>;
export type CspmProviderUpdateConfiguration = { Azure: AzureUpdateConfiguration };
const CspmProviderUpdateConfiguration = /*@__PURE__*/ __L.at(__c148, 7);
export interface UpdateConnectorRequest {
  ConnectorId: string;
  Description?: string;
  Provider?: CspmProviderUpdateConfiguration;
}
const UpdateConnectorRequest = /*@__PURE__*/ __L.at(
  __c149,
  0,
) as any as S.Schema<UpdateConnectorRequest>;
export interface UpdateConnectorResponse {
  ConnectorStatus?: CspmConnectorStatus;
  EnablementStatus?: CspmEnablementStatus;
}
const UpdateConnectorResponse = /*@__PURE__*/ __L.at(
  __c149,
  1,
) as any as S.Schema<UpdateConnectorResponse>;
export interface JiraCloudUpdateConfiguration {
  ProjectKey?: string;
}
const JiraCloudUpdateConfiguration =
  JiraCloudProviderConfiguration as any as S.Schema<JiraCloudUpdateConfiguration>;
export interface ServiceNowUpdateConfiguration {
  SecretArn?: string;
}
const ServiceNowUpdateConfiguration = /*@__PURE__*/ __L.at(
  __c149,
  2,
) as any as S.Schema<ServiceNowUpdateConfiguration>;
export type ProviderUpdateConfiguration =
  | { JiraCloud: JiraCloudUpdateConfiguration; ServiceNow?: never; Azure?: never }
  | { JiraCloud?: never; ServiceNow: ServiceNowUpdateConfiguration; Azure?: never }
  | { JiraCloud?: never; ServiceNow?: never; Azure: AzureUpdateConfiguration };
const ProviderUpdateConfiguration = /*@__PURE__*/ __L.at(__c149, 3);
export interface UpdateConnectorV2Request {
  ConnectorId: string;
  Description?: string;
  Provider?: ProviderUpdateConfiguration;
}
const UpdateConnectorV2Request = /*@__PURE__*/ __L.at(
  __c149,
  4,
) as any as S.Schema<UpdateConnectorV2Request>;
export interface UpdateConnectorV2Response {
  ConnectorStatus?: ConnectorStatus;
  EnablementStatus?: EnablementStatus;
}
const UpdateConnectorV2Response = /*@__PURE__*/ __L.at(
  __c149,
  5,
) as any as S.Schema<UpdateConnectorV2Response>;
export interface UpdateFindingAggregatorRequest {
  FindingAggregatorArn?: string;
  RegionLinkingMode?: string;
  Regions?: string[];
}
const UpdateFindingAggregatorRequest = /*@__PURE__*/ __L.at(
  __c149,
  6,
) as any as S.Schema<UpdateFindingAggregatorRequest>;
export interface UpdateFindingAggregatorResponse {
  FindingAggregatorArn?: string;
  FindingAggregationRegion?: string;
  RegionLinkingMode?: string;
  Regions?: string[];
}
const UpdateFindingAggregatorResponse =
  CreateFindingAggregatorResponse as any as S.Schema<UpdateFindingAggregatorResponse>;
export interface UpdateFindingsRequest {
  Filters?: AwsSecurityFindingFilters;
  Note?: NoteUpdate;
  RecordState?: RecordState;
}
const UpdateFindingsRequest = /*@__PURE__*/ __L.at(
  __c149,
  7,
) as any as S.Schema<UpdateFindingsRequest>;
export interface UpdateFindingsResponse {}
const UpdateFindingsResponse = AcceptInvitationResponse as any as S.Schema<UpdateFindingsResponse>;
export interface UpdateInsightRequest {
  InsightArn: string;
  Name?: string;
  Filters?: AwsSecurityFindingFilters;
  GroupByAttribute?: string;
}
const UpdateInsightRequest = /*@__PURE__*/ __L.at(
  __c150,
  0,
) as any as S.Schema<UpdateInsightRequest>;
export interface UpdateInsightResponse {}
const UpdateInsightResponse = AcceptInvitationResponse as any as S.Schema<UpdateInsightResponse>;
export interface UpdateOrganizationConfigurationRequest {
  AutoEnable?: boolean;
  AutoEnableStandards?: AutoEnableStandards;
  OrganizationConfiguration?: OrganizationConfiguration;
}
const UpdateOrganizationConfigurationRequest = /*@__PURE__*/ __L.at(
  __c150,
  1,
) as any as S.Schema<UpdateOrganizationConfigurationRequest>;
export interface UpdateOrganizationConfigurationResponse {}
const UpdateOrganizationConfigurationResponse =
  AcceptAdministratorInvitationResponse as any as S.Schema<UpdateOrganizationConfigurationResponse>;
export interface UpdateSecurityControlRequest {
  SecurityControlId?: string;
  Parameters?: { [key: string]: ParameterConfiguration | undefined };
  LastUpdateReason?: string;
}
const UpdateSecurityControlRequest = /*@__PURE__*/ __L.at(
  __c150,
  2,
) as any as S.Schema<UpdateSecurityControlRequest>;
export interface UpdateSecurityControlResponse {}
const UpdateSecurityControlResponse =
  AcceptInvitationResponse as any as S.Schema<UpdateSecurityControlResponse>;
export interface UpdateSecurityHubConfigurationRequest {
  AutoEnableControls?: boolean;
  ControlFindingGenerator?: ControlFindingGenerator;
}
const UpdateSecurityHubConfigurationRequest = /*@__PURE__*/ __L.at(
  __c150,
  3,
) as any as S.Schema<UpdateSecurityHubConfigurationRequest>;
export interface UpdateSecurityHubConfigurationResponse {}
const UpdateSecurityHubConfigurationResponse =
  AcceptAdministratorInvitationResponse as any as S.Schema<UpdateSecurityHubConfigurationResponse>;
export interface UpdateStandardsControlRequest {
  StandardsControlArn: string;
  ControlStatus?: ControlStatus;
  DisabledReason?: string;
}
const UpdateStandardsControlRequest = /*@__PURE__*/ __L.at(
  __c150,
  4,
) as any as S.Schema<UpdateStandardsControlRequest>;
export interface UpdateStandardsControlResponse {}
const UpdateStandardsControlResponse =
  AcceptInvitationResponse as any as S.Schema<UpdateStandardsControlResponse>;
export type AcceptAdministratorInvitationError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts.
 * For information, see Managing Security Hub CSPM administrator and member accounts with Organizations
 * in the *Security Hub CSPM User Guide*.
 *
 * Accepts the invitation to be a member account and be monitored by the Security Hub CSPM administrator
 * account that the invitation was sent from.
 *
 * This operation is only used by member accounts that are not added through
 * Organizations.
 *
 * When the member account accepts the invitation, permission is granted to the administrator
 * account to view findings generated in the member account.
 */
export const acceptAdministratorInvitation: API.OperationMethod<
  AcceptAdministratorInvitationRequest,
  AcceptAdministratorInvitationResponse,
  AcceptAdministratorInvitationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AcceptAdministratorInvitationRequest,
  output: AcceptAdministratorInvitationResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptAdministratorInvitation",
}));

export type AcceptInvitationError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * This method is deprecated. Instead, use `AcceptAdministratorInvitation`.
 *
 * The Security Hub CSPM console continues to use `AcceptInvitation`. It will eventually change to use `AcceptAdministratorInvitation`. Any IAM policies that specifically control access to this function must continue to use `AcceptInvitation`. You should also add `AcceptAdministratorInvitation` to your policies to ensure that the correct permissions are in place after the console begins to use `AcceptAdministratorInvitation`.
 *
 * Accepts the invitation to be a member account and be monitored by the Security Hub CSPM administrator
 * account that the invitation was sent from.
 *
 * This operation is only used by member accounts that are not added through
 * Organizations.
 *
 * When the member account accepts the invitation, permission is granted to the administrator
 * account to view findings generated in the member account.
 */
export const acceptInvitation: API.OperationMethod<
  AcceptInvitationRequest,
  AcceptInvitationResponse,
  AcceptInvitationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AcceptInvitationRequest,
  output: AcceptInvitationResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptInvitation",
}));

export type BatchDeleteAutomationRulesError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes one or more automation rules.
 */
export const batchDeleteAutomationRules: API.OperationMethod<
  BatchDeleteAutomationRulesRequest,
  BatchDeleteAutomationRulesResponse,
  BatchDeleteAutomationRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDeleteAutomationRulesRequest,
  output: BatchDeleteAutomationRulesResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteAutomationRules",
}));

export type BatchDisableStandardsError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Disables the standards specified by the provided
 * `StandardsSubscriptionArns`.
 *
 * For more information, see Security Standards section of the Security Hub CSPM User
 * Guide.
 */
export const batchDisableStandards: API.OperationMethod<
  BatchDisableStandardsRequest,
  BatchDisableStandardsResponse,
  BatchDisableStandardsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDisableStandardsRequest,
  output: BatchDisableStandardsResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDisableStandards",
}));

export type BatchEnableStandardsError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Enables the standards specified by the provided `StandardsArn`. To obtain the
 * ARN for a standard, use the `DescribeStandards`
 * operation.
 *
 * For more information, see the Security Standards
 * section of the *Security Hub CSPM User Guide*.
 */
export const batchEnableStandards: API.OperationMethod<
  BatchEnableStandardsRequest,
  BatchEnableStandardsResponse,
  BatchEnableStandardsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchEnableStandardsRequest,
  output: BatchEnableStandardsResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchEnableStandards",
}));

export type BatchGetAutomationRulesError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves a list of details for automation rules based on rule Amazon Resource Names
 * (ARNs).
 */
export const batchGetAutomationRules: API.OperationMethod<
  BatchGetAutomationRulesRequest,
  BatchGetAutomationRulesResponse,
  BatchGetAutomationRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetAutomationRulesRequest,
  output: BatchGetAutomationRulesResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetAutomationRules",
}));

export type BatchGetConfigurationPolicyAssociationsError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns associations between an Security Hub CSPM configuration and a batch of target accounts, organizational units, or the root.
 * Only the Security Hub CSPM delegated administrator can invoke this operation from the home Region. A configuration
 * can refer to a configuration policy or to a self-managed configuration.
 */
export const batchGetConfigurationPolicyAssociations: API.OperationMethod<
  BatchGetConfigurationPolicyAssociationsRequest,
  BatchGetConfigurationPolicyAssociationsResponse,
  BatchGetConfigurationPolicyAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetConfigurationPolicyAssociationsRequest,
  output: BatchGetConfigurationPolicyAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetConfigurationPolicyAssociations",
}));

export type BatchGetSecurityControlsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Provides details about a batch of security controls for the current Amazon Web Services account and Amazon Web Services Region.
 */
export const batchGetSecurityControls: API.OperationMethod<
  BatchGetSecurityControlsRequest,
  BatchGetSecurityControlsResponse,
  BatchGetSecurityControlsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetSecurityControlsRequest,
  output: BatchGetSecurityControlsResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetSecurityControls",
}));

export type BatchGetStandardsControlAssociationsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * For a batch of security controls and standards, identifies whether each control is currently enabled or disabled in a standard.
 *
 * Calls to this operation return a `RESOURCE_NOT_FOUND_EXCEPTION` error when the standard subscription for the association has a `NOT_READY_FOR_UPDATES` value for `StandardsControlsUpdatable`.
 */
export const batchGetStandardsControlAssociations: API.OperationMethod<
  BatchGetStandardsControlAssociationsRequest,
  BatchGetStandardsControlAssociationsResponse,
  BatchGetStandardsControlAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetStandardsControlAssociationsRequest,
  output: BatchGetStandardsControlAssociationsResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetStandardsControlAssociations",
}));

export type BatchImportFindingsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Imports security findings generated by a finding provider into Security Hub CSPM.
 * This action is requested by the finding provider to import its findings into
 * Security Hub CSPM.
 *
 * `BatchImportFindings` must be called by one of the following:
 *
 * - The Amazon Web Services account that is associated with a finding if you are using
 * the default product ARN
 * or are a partner sending findings from within a customer's Amazon Web Services account.
 * In these cases, the identifier of the account that you are calling `BatchImportFindings`
 * from needs to be the same as the `AwsAccountId` attribute for the finding.
 *
 * - An Amazon Web Services account that Security Hub CSPM has allow-listed for an official partner
 * integration. In this case, you can call `BatchImportFindings` from the allow-listed
 * account and send findings from different customer accounts in the same batch.
 *
 * The maximum allowed size for a finding is 240 Kb. An error is returned for any finding
 * larger than 240 Kb.
 *
 * After a finding is created, `BatchImportFindings` cannot be used to update
 * the following finding fields and objects, which Security Hub CSPM customers use to manage their
 * investigation workflow.
 *
 * - `Note`
 *
 * - `UserDefinedFields`
 *
 * - `VerificationState`
 *
 * - `Workflow`
 *
 * Finding providers also should not use `BatchImportFindings` to update the following attributes.
 *
 * - `Confidence`
 *
 * - `Criticality`
 *
 * - `RelatedFindings`
 *
 * - `Severity`
 *
 * - `Types`
 *
 * Instead, finding providers use `FindingProviderFields` to provide values for these attributes.
 */
export const batchImportFindings: API.OperationMethod<
  BatchImportFindingsRequest,
  BatchImportFindingsResponse,
  BatchImportFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchImportFindingsRequest,
  output: BatchImportFindingsResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchImportFindings",
}));

export type BatchUpdateAutomationRulesError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates one or more automation rules based on rule Amazon Resource Names (ARNs)
 * and input parameters.
 */
export const batchUpdateAutomationRules: API.OperationMethod<
  BatchUpdateAutomationRulesRequest,
  BatchUpdateAutomationRulesResponse,
  BatchUpdateAutomationRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateAutomationRulesRequest,
  output: BatchUpdateAutomationRulesResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateAutomationRules",
}));

export type BatchUpdateFindingsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Used by Security Hub CSPM customers to update information about their investigation into one or more findings.
 * Requested by administrator accounts or member accounts.
 * Administrator accounts can update findings for their account and their member accounts.
 * A member account can update findings only for their own account.
 * Administrator and member accounts can use this operation to update the following fields and objects for one or more findings:
 *
 * - `Confidence`
 *
 * - `Criticality`
 *
 * - `Note`
 *
 * - `RelatedFindings`
 *
 * - `Severity`
 *
 * - `Types`
 *
 * - `UserDefinedFields`
 *
 * - `VerificationState`
 *
 * - `Workflow`
 *
 * If you use this operation to update a finding, your updates don't affect the value for the `UpdatedAt` field of the finding.
 * Also note that it can take several minutes for Security Hub CSPM to process your request and update each finding specified in the request.
 *
 * You can configure IAM policies to restrict access to fields and field values.
 * For example, you might not want member accounts to be able to suppress findings or change the finding severity.
 * For more information see Configuring access to BatchUpdateFindings in the *Security Hub CSPM User Guide*.
 */
export const batchUpdateFindings: API.OperationMethod<
  BatchUpdateFindingsRequest,
  BatchUpdateFindingsResponse,
  BatchUpdateFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateFindingsRequest,
  output: BatchUpdateFindingsResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateFindings",
}));

export type BatchUpdateFindingsV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates information about a customer's investigation into a finding. Delegated administrator accounts can update findings for their account and their member accounts. Member accounts can update findings for their own account.
 *
 * `BatchUpdateFindings` and `BatchUpdateFindingsV2` both use `securityhub:BatchUpdateFindings` in the `Action` element of an IAM policy statement.
 * You must have permission to perform the `securityhub:BatchUpdateFindings` action.
 * You can configure IAM policies to restrict access to specific finding fields or field values by using the `securityhub:OCSFSyntaxPath/` condition key, where `` is one of the following supported fields: `SeverityId`, `StatusId`, or `Comment`.
 *
 * To prevent a user from updating a specific field, use a `Null` condition with `securityhub:OCSFSyntaxPath/` set to `"false"`.
 * To prevent a user from setting a field to a specific value, use a `StringEquals` condition with `securityhub:OCSFSyntaxPath/` set to the disallowed value or list of values.
 *
 * Updates from `BatchUpdateFindingsV2` don't affect the value of `finding_info.modified_time`, `finding_info.modified_time_dt`, `time`, or `time_dt` for a finding.
 */
export const batchUpdateFindingsV2: API.OperationMethod<
  BatchUpdateFindingsV2Request,
  BatchUpdateFindingsV2Response,
  BatchUpdateFindingsV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateFindingsV2Request,
  output: BatchUpdateFindingsV2Response,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateFindingsV2",
}));

export type BatchUpdateStandardsControlAssociationsError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * For a batch of security controls and standards, this operation updates the enablement status of a control in a standard.
 */
export const batchUpdateStandardsControlAssociations: API.OperationMethod<
  BatchUpdateStandardsControlAssociationsRequest,
  BatchUpdateStandardsControlAssociationsResponse,
  BatchUpdateStandardsControlAssociationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateStandardsControlAssociationsRequest,
  output: BatchUpdateStandardsControlAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateStandardsControlAssociations",
}));

export type CreateActionTargetError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceConflictException
  | CommonErrors;
/**
 * Creates a custom action target in Security Hub CSPM.
 *
 * You can use custom actions on findings and insights in Security Hub CSPM to trigger target actions
 * in Amazon CloudWatch Events.
 */
export const createActionTarget: API.OperationMethod<
  CreateActionTargetRequest,
  CreateActionTargetResponse,
  CreateActionTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateActionTargetRequest,
  output: CreateActionTargetResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateActionTarget",
}));

export type CreateAggregatorV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables aggregation across Amazon Web Services Regions.
 */
export const createAggregatorV2: API.OperationMethod<
  CreateAggregatorV2Request,
  CreateAggregatorV2Response,
  CreateAggregatorV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAggregatorV2Request,
  output: CreateAggregatorV2Response,
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
  operationName: "CreateAggregatorV2",
}));

export type CreateAutomationRuleError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Creates an automation rule based on input parameters.
 */
export const createAutomationRule: API.OperationMethod<
  CreateAutomationRuleRequest,
  CreateAutomationRuleResponse,
  CreateAutomationRuleError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAutomationRuleRequest,
  output: CreateAutomationRuleResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAutomationRule",
}));

export type CreateAutomationRuleV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a V2 automation rule.
 */
export const createAutomationRuleV2: API.OperationMethod<
  CreateAutomationRuleV2Request,
  CreateAutomationRuleV2Response,
  CreateAutomationRuleV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAutomationRuleV2Request,
  output: CreateAutomationRuleV2Response,
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
  operationName: "CreateAutomationRuleV2",
}));

export type CreateConfigurationPolicyError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceConflictException
  | CommonErrors;
/**
 * Creates a configuration policy with the defined configuration. Only the Security Hub CSPM delegated administrator
 * can invoke this operation from the home Region.
 */
export const createConfigurationPolicy: API.OperationMethod<
  CreateConfigurationPolicyRequest,
  CreateConfigurationPolicyResponse,
  CreateConfigurationPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateConfigurationPolicyRequest,
  output: CreateConfigurationPolicyResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConfigurationPolicy",
}));

export type CreateConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidAccessException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a connector to a third-party cloud provider in Security Hub CSPM. A connector establishes a connection between Security Hub CSPM and a third-party cloud provider, enabling Security Hub CSPM to ingest security findings and resource data from the connected environment.
 */
export const createConnector: API.OperationMethod<
  CreateConnectorRequest,
  CreateConnectorResponse,
  CreateConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateConnectorRequest,
  output: CreateConnectorResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidAccessException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConnector",
}));

export type CreateConnectorV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Grants permission to create a connectorV2 based on input parameters.
 */
export const createConnectorV2: API.OperationMethod<
  CreateConnectorV2Request,
  CreateConnectorV2Response,
  CreateConnectorV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateConnectorV2Request,
  output: CreateConnectorV2Response,
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
  operationName: "CreateConnectorV2",
}));

export type CreateFindingAggregatorError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * The *aggregation Region* is now called the *home Region*.
 *
 * Used to enable cross-Region aggregation. This operation can be invoked from the home Region only.
 *
 * For information about how cross-Region aggregation works, see Understanding cross-Region aggregation in Security Hub CSPM in the *Security Hub CSPM User Guide*.
 */
export const createFindingAggregator: API.OperationMethod<
  CreateFindingAggregatorRequest,
  CreateFindingAggregatorResponse,
  CreateFindingAggregatorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateFindingAggregatorRequest,
  output: CreateFindingAggregatorResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateFindingAggregator",
}));

export type CreateInsightError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceConflictException
  | CommonErrors;
/**
 * Creates a custom insight in Security Hub CSPM. An insight is a consolidation of findings that relate
 * to a security issue that requires attention or remediation.
 *
 * To group the related findings in the insight, use the
 * `GroupByAttribute`.
 */
export const createInsight: API.OperationMethod<
  CreateInsightRequest,
  CreateInsightResponse,
  CreateInsightError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateInsightRequest,
  output: CreateInsightResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateInsight",
}));

export type CreateMembersError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceConflictException
  | CommonErrors;
/**
 * Creates a member association in Security Hub CSPM between the specified accounts and the account
 * used to make the request, which is the administrator account. If you are integrated with
 * Organizations, then the administrator account is designated by the organization management account.
 *
 * `CreateMembers` is always used to add accounts that are not organization
 * members.
 *
 * For accounts that are managed using Organizations, `CreateMembers` is only used
 * in the following cases:
 *
 * - Security Hub CSPM is not configured to automatically add new organization accounts.
 *
 * - The account was disassociated or deleted in Security Hub CSPM.
 *
 * This action can only be used by an account that has Security Hub CSPM enabled. To enable Security Hub CSPM, you
 * can use the `EnableSecurityHub` operation.
 *
 * For accounts that are not organization members, you create the account association and
 * then send an invitation to the member account. To send the invitation, you use the
 * `InviteMembers` operation. If the account owner accepts
 * the invitation, the account becomes a member account in Security Hub CSPM.
 *
 * Accounts that are managed using Organizations don't receive an invitation. They
 * automatically become a member account in Security Hub CSPM.
 *
 * - If the organization account does not have Security Hub CSPM enabled, then Security Hub CSPM and the default standards are automatically enabled. Note that Security Hub CSPM cannot be enabled automatically for the organization management account. The organization management account must enable Security Hub CSPM before the administrator account enables it as a member account.
 *
 * - For organization accounts that already have Security Hub CSPM enabled, Security Hub CSPM does not make any other changes to those accounts. It does not change their enabled standards or controls.
 *
 * A permissions policy is added that permits the administrator account to view the findings
 * generated in the member account.
 *
 * To remove the association between the administrator and member accounts, use the `DisassociateFromMasterAccount` or `DisassociateMembers` operation.
 */
export const createMembers: API.OperationMethod<
  CreateMembersRequest,
  CreateMembersResponse,
  CreateMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateMembersRequest,
  output: CreateMembersResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateMembers",
}));

export type CreateTicketV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Grants permission to create a ticket in the chosen ITSM based on finding information for the provided finding metadata UID.
 */
export const createTicketV2: API.OperationMethod<
  CreateTicketV2Request,
  CreateTicketV2Response,
  CreateTicketV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTicketV2Request,
  output: CreateTicketV2Response,
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
  operationName: "CreateTicketV2",
}));

export type DeclineInvitationsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts.
 * For information, see Managing Security Hub CSPM administrator and member accounts with Organizations
 * in the *Security Hub CSPM User Guide*.
 *
 * Declines invitations to become a Security Hub CSPM member account.
 *
 * A prospective member account uses this operation to decline an invitation to become a member.
 *
 * Only member accounts that aren't part of an Amazon Web Services organization should use this operation.
 * Organization accounts don't receive invitations.
 */
export const declineInvitations: API.OperationMethod<
  DeclineInvitationsRequest,
  DeclineInvitationsResponse,
  DeclineInvitationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeclineInvitationsRequest,
  output: DeclineInvitationsResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeclineInvitations",
}));

export type DeleteActionTargetError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a custom action target from Security Hub CSPM.
 *
 * Deleting a custom action target does not affect any findings or insights that were
 * already sent to Amazon CloudWatch Events using the custom action.
 */
export const deleteActionTarget: API.OperationMethod<
  DeleteActionTargetRequest,
  DeleteActionTargetResponse,
  DeleteActionTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteActionTargetRequest,
  output: DeleteActionTargetResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteActionTarget",
}));

export type DeleteAggregatorV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the Aggregator V2.
 */
export const deleteAggregatorV2: API.OperationMethod<
  DeleteAggregatorV2Request,
  DeleteAggregatorV2Response,
  DeleteAggregatorV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAggregatorV2Request,
  output: DeleteAggregatorV2Response,
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
  operationName: "DeleteAggregatorV2",
}));

export type DeleteAutomationRuleV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a V2 automation rule.
 */
export const deleteAutomationRuleV2: API.OperationMethod<
  DeleteAutomationRuleV2Request,
  DeleteAutomationRuleV2Response,
  DeleteAutomationRuleV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAutomationRuleV2Request,
  output: DeleteAutomationRuleV2Response,
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
  operationName: "DeleteAutomationRuleV2",
}));

export type DeleteConfigurationPolicyError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceConflictException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes a configuration policy. Only the Security Hub CSPM delegated administrator can invoke this operation
 * from the home Region. For the deletion to succeed, you must first disassociate a configuration policy from target accounts,
 * organizational units, or the root by invoking the `StartConfigurationPolicyDisassociation` operation.
 */
export const deleteConfigurationPolicy: API.OperationMethod<
  DeleteConfigurationPolicyRequest,
  DeleteConfigurationPolicyResponse,
  DeleteConfigurationPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteConfigurationPolicyRequest,
  output: DeleteConfigurationPolicyResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceConflictException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConfigurationPolicy",
}));

export type DeleteConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidAccessException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a CSPM connector. When you delete a connector, Security Hub CSPM stops ingesting findings and resource data from the connected cloud provider environment.
 */
export const deleteConnector: API.OperationMethod<
  DeleteConnectorRequest,
  DeleteConnectorResponse,
  DeleteConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteConnectorRequest,
  output: DeleteConnectorResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidAccessException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConnector",
}));

export type DeleteConnectorV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Grants permission to delete a connectorV2.
 */
export const deleteConnectorV2: API.OperationMethod<
  DeleteConnectorV2Request,
  DeleteConnectorV2Response,
  DeleteConnectorV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteConnectorV2Request,
  output: DeleteConnectorV2Response,
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
  operationName: "DeleteConnectorV2",
}));

export type DeleteFindingAggregatorError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * The *aggregation Region* is now called the *home Region*.
 *
 * Deletes a finding aggregator. When you delete the finding aggregator, you stop cross-Region aggregation. Finding replication stops
 * occurring from the linked Regions to the home Region.
 *
 * When you stop cross-Region aggregation, findings that were already replicated and sent to the home Region are still visible from
 * the home Region. However, new findings and finding updates are no longer replicated and sent to the home Region.
 */
export const deleteFindingAggregator: API.OperationMethod<
  DeleteFindingAggregatorRequest,
  DeleteFindingAggregatorResponse,
  DeleteFindingAggregatorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteFindingAggregatorRequest,
  output: DeleteFindingAggregatorResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteFindingAggregator",
}));

export type DeleteInsightError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the insight specified by the `InsightArn`.
 */
export const deleteInsight: API.OperationMethod<
  DeleteInsightRequest,
  DeleteInsightResponse,
  DeleteInsightError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteInsightRequest,
  output: DeleteInsightResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteInsight",
}));

export type DeleteInvitationsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts.
 * For information, see Managing Security Hub CSPM administrator and member accounts with Organizations
 * in the *Security Hub CSPM User Guide*.
 *
 * Deletes invitations to become a Security Hub CSPM member account.
 *
 * A Security Hub CSPM administrator account can use this operation to delete invitations sent to one or more prospective member accounts.
 *
 * This operation is only used to delete invitations that are sent to prospective member accounts that aren't part of an Amazon Web Services organization.
 * Organization accounts don't receive invitations.
 */
export const deleteInvitations: API.OperationMethod<
  DeleteInvitationsRequest,
  DeleteInvitationsResponse,
  DeleteInvitationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteInvitationsRequest,
  output: DeleteInvitationsResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteInvitations",
}));

export type DeleteMembersError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified member accounts from Security Hub CSPM.
 *
 * You can invoke this API only to delete accounts that became members through invitation. You can't invoke this
 * API to delete accounts that belong to an Organizations organization.
 */
export const deleteMembers: API.OperationMethod<
  DeleteMembersRequest,
  DeleteMembersResponse,
  DeleteMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMembersRequest,
  output: DeleteMembersResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMembers",
}));

export type DescribeActionTargetsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of the custom action targets in Security Hub CSPM in your account.
 */
export const describeActionTargets: API.PaginatedOperationMethod<
  DescribeActionTargetsRequest,
  DescribeActionTargetsResponse,
  DescribeActionTargetsError,
  Credentials | HttpClient.HttpClient,
  ActionTarget
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeActionTargetsRequest,
  output: DescribeActionTargetsResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeActionTargets",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ActionTargets",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeHubError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns details about the Hub resource in your account, including the
 * `HubArn` and the time when you enabled Security Hub CSPM.
 */
export const describeHub: API.OperationMethod<
  DescribeHubRequest,
  DescribeHubResponse,
  DescribeHubError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeHubRequest,
  output: DescribeHubResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeHub",
}));

export type DescribeOrganizationConfigurationError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Returns information about the way your organization is configured in Security Hub CSPM. Only the
 * Security Hub CSPM administrator account can invoke this operation.
 */
export const describeOrganizationConfiguration: API.OperationMethod<
  DescribeOrganizationConfigurationRequest,
  DescribeOrganizationConfigurationResponse,
  DescribeOrganizationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeOrganizationConfigurationRequest,
  output: DescribeOrganizationConfigurationResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeOrganizationConfiguration",
}));

export type DescribeProductsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Returns information about product integrations in Security Hub CSPM.
 *
 * You can optionally provide an integration ARN. If you provide an integration ARN, then
 * the results only include that integration.
 *
 * If you don't provide an integration ARN, then the results include all of the available
 * product integrations.
 */
export const describeProducts: API.PaginatedOperationMethod<
  DescribeProductsRequest,
  DescribeProductsResponse,
  DescribeProductsError,
  Credentials | HttpClient.HttpClient,
  Product
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeProductsRequest,
  output: DescribeProductsResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeProducts",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Products",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeProductsV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the product integration.
 */
export const describeProductsV2: API.PaginatedOperationMethod<
  DescribeProductsV2Request,
  DescribeProductsV2Response,
  DescribeProductsV2Error,
  Credentials | HttpClient.HttpClient,
  ProductV2
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeProductsV2Request,
  output: DescribeProductsV2Response,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeProductsV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ProductsV2",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeSecurityHubV2Error =
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns details about the service resource in your account.
 */
export const describeSecurityHubV2: API.OperationMethod<
  DescribeSecurityHubV2Request,
  DescribeSecurityHubV2Response,
  DescribeSecurityHubV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeSecurityHubV2Request,
  output: DescribeSecurityHubV2Response,
  errors: [
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSecurityHubV2",
}));

export type DescribeStandardsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | CommonErrors;
/**
 * Returns a list of the available standards in Security Hub CSPM.
 *
 * For each standard, the results include the standard ARN, the name, and a description.
 */
export const describeStandards: API.PaginatedOperationMethod<
  DescribeStandardsRequest,
  DescribeStandardsResponse,
  DescribeStandardsError,
  Credentials | HttpClient.HttpClient,
  Standard
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeStandardsRequest,
  output: DescribeStandardsResponse,
  errors: [InternalException, InvalidAccessException, InvalidInputException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStandards",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Standards",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DescribeStandardsControlsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of security standards controls.
 *
 * For each control, the results include information about whether it is currently enabled,
 * the severity, and a link to remediation information.
 *
 * This operation returns an empty list for standard subscriptions where `StandardsControlsUpdatable` has value `NOT_READY_FOR_UPDATES`.
 */
export const describeStandardsControls: API.PaginatedOperationMethod<
  DescribeStandardsControlsRequest,
  DescribeStandardsControlsResponse,
  DescribeStandardsControlsError,
  Credentials | HttpClient.HttpClient,
  StandardsControl
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: DescribeStandardsControlsRequest,
  output: DescribeStandardsControlsResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeStandardsControls",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Controls",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type DisableImportFindingsForProductError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disables the integration of the specified product with Security Hub CSPM. After the integration is
 * disabled, findings from that product are no longer sent to Security Hub CSPM.
 */
export const disableImportFindingsForProduct: API.OperationMethod<
  DisableImportFindingsForProductRequest,
  DisableImportFindingsForProductResponse,
  DisableImportFindingsForProductError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableImportFindingsForProductRequest,
  output: DisableImportFindingsForProductResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableImportFindingsForProduct",
}));

export type DisableOrganizationAdminAccountError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Disables a Security Hub CSPM administrator account. Can only be called by the organization
 * management account.
 */
export const disableOrganizationAdminAccount: API.OperationMethod<
  DisableOrganizationAdminAccountRequest,
  DisableOrganizationAdminAccountResponse,
  DisableOrganizationAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableOrganizationAdminAccountRequest,
  output: DisableOrganizationAdminAccountResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableOrganizationAdminAccount",
}));

export type DisableSecurityHubError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disables Security Hub CSPM in your account only in the current Amazon Web Services Region. To disable Security Hub CSPM in all
 * Regions, you must submit one request per Region where you have enabled Security Hub CSPM.
 *
 * You can't disable Security Hub CSPM in an account that is currently the Security Hub CSPM administrator.
 *
 * When you disable Security Hub CSPM, your existing findings and insights and any Security Hub CSPM configuration
 * settings are deleted after 90 days and cannot be recovered. Any standards that were enabled
 * are disabled, and your administrator and member account associations are removed.
 *
 * If you want to save your existing findings, you must export them before you disable
 * Security Hub CSPM.
 */
export const disableSecurityHub: API.OperationMethod<
  DisableSecurityHubRequest,
  DisableSecurityHubResponse,
  DisableSecurityHubError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableSecurityHubRequest,
  output: DisableSecurityHubResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableSecurityHub",
}));

export type DisableSecurityHubFeatureV2Error =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disables an opt-in feature for the calling account in the current Amazon Web Services Region. The operation is idempotent. If the feature is already disabled, no changes are made. You cannot disable a feature that is managed by an organization policy.
 */
export const disableSecurityHubFeatureV2: API.OperationMethod<
  DisableSecurityHubFeatureV2Request,
  DisableSecurityHubFeatureV2Response,
  DisableSecurityHubFeatureV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableSecurityHubFeatureV2Request,
  output: DisableSecurityHubFeatureV2Response,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableSecurityHubFeatureV2",
}));

export type DisableSecurityHubV2Error =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disable the service for the current Amazon Web Services Region or specified Amazon Web Services Region. Disabling the service also disables all opt-in features that are currently enabled in that Region.
 */
export const disableSecurityHubV2: API.OperationMethod<
  DisableSecurityHubV2Request,
  DisableSecurityHubV2Response,
  DisableSecurityHubV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisableSecurityHubV2Request,
  output: DisableSecurityHubV2Response,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisableSecurityHubV2",
}));

export type DisassociateFromAdministratorAccountError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disassociates the current Security Hub CSPM member account from the associated administrator
 * account.
 *
 * This operation is only used by accounts that are not part of an organization. For
 * organization accounts, only the administrator account can
 * disassociate a member account.
 */
export const disassociateFromAdministratorAccount: API.OperationMethod<
  DisassociateFromAdministratorAccountRequest,
  DisassociateFromAdministratorAccountResponse,
  DisassociateFromAdministratorAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateFromAdministratorAccountRequest,
  output: DisassociateFromAdministratorAccountResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateFromAdministratorAccount",
}));

export type DisassociateFromMasterAccountError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * This method is deprecated. Instead, use `DisassociateFromAdministratorAccount`.
 *
 * The Security Hub CSPM console continues to use `DisassociateFromMasterAccount`. It will eventually change to use `DisassociateFromAdministratorAccount`. Any IAM policies that specifically control access to this function must continue to use `DisassociateFromMasterAccount`. You should also add `DisassociateFromAdministratorAccount` to your policies to ensure that the correct permissions are in place after the console begins to use `DisassociateFromAdministratorAccount`.
 *
 * Disassociates the current Security Hub CSPM member account from the associated administrator
 * account.
 *
 * This operation is only used by accounts that are not part of an organization. For
 * organization accounts, only the administrator account can
 * disassociate a member account.
 */
export const disassociateFromMasterAccount: API.OperationMethod<
  DisassociateFromMasterAccountRequest,
  DisassociateFromMasterAccountResponse,
  DisassociateFromMasterAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateFromMasterAccountRequest,
  output: DisassociateFromMasterAccountResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateFromMasterAccount",
}));

export type DisassociateMembersError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disassociates the specified member accounts from the associated administrator account.
 *
 * Can be used to disassociate both accounts that are managed using Organizations and accounts that
 * were invited manually.
 */
export const disassociateMembers: API.OperationMethod<
  DisassociateMembersRequest,
  DisassociateMembersResponse,
  DisassociateMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateMembersRequest,
  output: DisassociateMembersResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateMembers",
}));

export type EnableImportFindingsForProductError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceConflictException
  | CommonErrors;
/**
 * Enables the integration of a partner product with Security Hub CSPM. Integrated products send
 * findings to Security Hub CSPM.
 *
 * When you enable a product integration, a permissions policy that grants permission for
 * the product to send findings to Security Hub CSPM is applied.
 */
export const enableImportFindingsForProduct: API.OperationMethod<
  EnableImportFindingsForProductRequest,
  EnableImportFindingsForProductResponse,
  EnableImportFindingsForProductError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableImportFindingsForProductRequest,
  output: EnableImportFindingsForProductResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableImportFindingsForProduct",
}));

export type EnableOrganizationAdminAccountError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Designates the Security Hub CSPM administrator account for an organization. Can only be called by
 * the organization management account.
 */
export const enableOrganizationAdminAccount: API.OperationMethod<
  EnableOrganizationAdminAccountRequest,
  EnableOrganizationAdminAccountResponse,
  EnableOrganizationAdminAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableOrganizationAdminAccountRequest,
  output: EnableOrganizationAdminAccountResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableOrganizationAdminAccount",
}));

export type EnableSecurityHubError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | LimitExceededException
  | ResourceConflictException
  | CommonErrors;
/**
 * Enables Security Hub CSPM for your account in the current Region or the Region you specify in the
 * request.
 *
 * When you enable Security Hub CSPM, you grant to Security Hub CSPM the permissions necessary to gather findings
 * from other services that are integrated with Security Hub CSPM.
 *
 * When you use the `EnableSecurityHub` operation to enable Security Hub CSPM, you also
 * automatically enable the following standards:
 *
 * - Center for Internet Security (CIS) Amazon Web Services Foundations Benchmark v1.2.0
 *
 * - Amazon Web Services Foundational Security Best Practices
 *
 * Other standards are not automatically enabled.
 *
 * To opt out of automatically enabled standards, set
 * `EnableDefaultStandards` to `false`.
 *
 * After you enable Security Hub CSPM, to enable a standard, use the `BatchEnableStandards` operation. To disable a standard, use the
 * `BatchDisableStandards` operation.
 *
 * To learn more, see the setup information in the *Security Hub CSPM User Guide*.
 */
export const enableSecurityHub: API.OperationMethod<
  EnableSecurityHubRequest,
  EnableSecurityHubResponse,
  EnableSecurityHubError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableSecurityHubRequest,
  output: EnableSecurityHubResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    LimitExceededException,
    ResourceConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableSecurityHub",
}));

export type EnableSecurityHubFeatureV2Error =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables an opt-in feature for the calling account in the current Amazon Web Services Region. The service must be enabled before you can enable a feature. The operation is idempotent. If the feature is already enabled, no changes are made. You cannot enable a feature that is managed by an organization policy.
 */
export const enableSecurityHubFeatureV2: API.OperationMethod<
  EnableSecurityHubFeatureV2Request,
  EnableSecurityHubFeatureV2Response,
  EnableSecurityHubFeatureV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableSecurityHubFeatureV2Request,
  output: EnableSecurityHubFeatureV2Response,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableSecurityHubFeatureV2",
}));

export type EnableSecurityHubV2Error =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables the service in account for the current Amazon Web Services Region or specified Amazon Web Services Region.
 */
export const enableSecurityHubV2: API.OperationMethod<
  EnableSecurityHubV2Request,
  EnableSecurityHubV2Response,
  EnableSecurityHubV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EnableSecurityHubV2Request,
  output: EnableSecurityHubV2Response,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "EnableSecurityHubV2",
}));

export type GenerateRecommendedPolicyV2Error =
  | AccessDeniedException
  | InternalServerException
  | InvalidInputException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Begins the recommended policy generation to remediate a Security Hub finding.
 * `GenerateRecommendedPolicyV2` only supports findings for unused permissions.
 */
export const generateRecommendedPolicyV2: API.OperationMethod<
  GenerateRecommendedPolicyV2Request,
  GenerateRecommendedPolicyV2Response,
  GenerateRecommendedPolicyV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GenerateRecommendedPolicyV2Request,
  output: GenerateRecommendedPolicyV2Response,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidInputException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GenerateRecommendedPolicyV2",
}));

export type GetAdministratorAccountError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Provides the details for the Security Hub CSPM administrator account for the current member account.
 *
 * Can be used by both member accounts that are managed using Organizations and accounts that were
 * invited manually.
 */
export const getAdministratorAccount: API.OperationMethod<
  GetAdministratorAccountRequest,
  GetAdministratorAccountResponse,
  GetAdministratorAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAdministratorAccountRequest,
  output: GetAdministratorAccountResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAdministratorAccount",
}));

export type GetAggregatorV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the configuration of the specified Aggregator V2.
 */
export const getAggregatorV2: API.OperationMethod<
  GetAggregatorV2Request,
  GetAggregatorV2Response,
  GetAggregatorV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAggregatorV2Request,
  output: GetAggregatorV2Response,
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
  operationName: "GetAggregatorV2",
}));

export type GetAutomationRuleV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns an automation rule for the V2 service.
 */
export const getAutomationRuleV2: API.OperationMethod<
  GetAutomationRuleV2Request,
  GetAutomationRuleV2Response,
  GetAutomationRuleV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAutomationRuleV2Request,
  output: GetAutomationRuleV2Response,
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
  operationName: "GetAutomationRuleV2",
}));

export type GetConfigurationPolicyError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Provides information about a configuration policy. Only the Security Hub CSPM delegated administrator can invoke
 * this operation from the home Region.
 */
export const getConfigurationPolicy: API.OperationMethod<
  GetConfigurationPolicyRequest,
  GetConfigurationPolicyResponse,
  GetConfigurationPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetConfigurationPolicyRequest,
  output: GetConfigurationPolicyResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfigurationPolicy",
}));

export type GetConfigurationPolicyAssociationError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns the association between a configuration and a target account, organizational unit, or the root. The
 * configuration can be a configuration policy or self-managed behavior. Only the Security Hub CSPM delegated administrator can
 * invoke this operation from the home Region.
 */
export const getConfigurationPolicyAssociation: API.OperationMethod<
  GetConfigurationPolicyAssociationRequest,
  GetConfigurationPolicyAssociationResponse,
  GetConfigurationPolicyAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetConfigurationPolicyAssociationRequest,
  output: GetConfigurationPolicyAssociationResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConfigurationPolicyAssociation",
}));

export type GetConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidAccessException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details for a CSPM connector based on the connector ID.
 */
export const getConnector: API.OperationMethod<
  GetConnectorRequest,
  GetConnectorResponse,
  GetConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetConnectorRequest,
  output: GetConnectorResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidAccessException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConnector",
}));

export type GetConnectorV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Grants permission to retrieve details for a connectorV2 based on connector id.
 */
export const getConnectorV2: API.OperationMethod<
  GetConnectorV2Request,
  GetConnectorV2Response,
  GetConnectorV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetConnectorV2Request,
  output: GetConnectorV2Response,
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
  operationName: "GetConnectorV2",
}));

export type GetEnabledStandardsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Returns a list of the standards that are currently enabled.
 */
export const getEnabledStandards: API.PaginatedOperationMethod<
  GetEnabledStandardsRequest,
  GetEnabledStandardsResponse,
  GetEnabledStandardsError,
  Credentials | HttpClient.HttpClient,
  StandardsSubscription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetEnabledStandardsRequest,
  output: GetEnabledStandardsResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEnabledStandards",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "StandardsSubscriptions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetFindingAggregatorError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * The *aggregation Region* is now called the *home Region*.
 *
 * Returns the current configuration in the calling account for cross-Region aggregation. A finding aggregator is a resource that establishes
 * the home Region and any linked Regions.
 */
export const getFindingAggregator: API.OperationMethod<
  GetFindingAggregatorRequest,
  GetFindingAggregatorResponse,
  GetFindingAggregatorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFindingAggregatorRequest,
  output: GetFindingAggregatorResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindingAggregator",
}));

export type GetFindingHistoryError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Returns the history of a Security Hub CSPM finding. The history includes changes made to any fields in
 * the Amazon Web Services Security Finding Format (ASFF) except top-level timestamp fields, such as the `CreatedAt` and
 * `UpdatedAt` fields.
 *
 * This operation might return fewer results than the maximum number of results (`MaxResults`) specified in a request, even
 * when more results are available. If this occurs, the response includes a `NextToken` value, which you should use to retrieve
 * the next set of results in the response. The presence of a `NextToken` value in a response doesn't necessarily indicate
 * that the results are incomplete. However, you should continue to specify a `NextToken` value until you receive a
 * response that doesn't include this value.
 */
export const getFindingHistory: API.PaginatedOperationMethod<
  GetFindingHistoryRequest,
  GetFindingHistoryResponse,
  GetFindingHistoryError,
  Credentials | HttpClient.HttpClient,
  FindingHistoryRecord
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetFindingHistoryRequest,
  output: GetFindingHistoryResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindingHistory",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Records",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetFindingsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Returns a list of findings that match the specified criteria.
 *
 * If cross-Region aggregation is enabled, then when you call `GetFindings` from the home Region, the results include all of the matching findings from both the home Region and linked Regions.
 */
export const getFindings: API.PaginatedOperationMethod<
  GetFindingsRequest,
  GetFindingsResponse,
  GetFindingsError,
  Credentials | HttpClient.HttpClient,
  AwsSecurityFinding
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetFindingsRequest,
  output: GetFindingsResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindings",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Findings",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetFindingStatisticsV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | OrganizationalUnitNotFoundException
  | OrganizationNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns aggregated statistical data about findings.
 *
 * You can use the `Scopes` parameter to define the data boundary for the query. Currently, `Scopes` supports `AwsOrganizations`, which lets you aggregate findings from your entire organization or from specific organizational units. Only the delegated administrator account can use `Scopes`.
 *
 * `GetFindingStatisticsV2` uses `securityhub:GetAdhocInsightResults` in the `Action` element of an IAM policy statement.
 * You must have permission to perform the `securityhub:GetAdhocInsightResults` action.
 */
export const getFindingStatisticsV2: API.OperationMethod<
  GetFindingStatisticsV2Request,
  GetFindingStatisticsV2Response,
  GetFindingStatisticsV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetFindingStatisticsV2Request,
  output: GetFindingStatisticsV2Response,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    OrganizationalUnitNotFoundException,
    OrganizationNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindingStatisticsV2",
}));

export type GetFindingsTrendsV2Error =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns findings trend data based on the specified criteria. This operation helps you analyze patterns and changes in findings over time.
 */
export const getFindingsTrendsV2: API.PaginatedOperationMethod<
  GetFindingsTrendsV2Request,
  GetFindingsTrendsV2Response,
  GetFindingsTrendsV2Error,
  Credentials | HttpClient.HttpClient,
  TrendsMetricsResult
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetFindingsTrendsV2Request,
  output: GetFindingsTrendsV2Response,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindingsTrendsV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TrendsMetrics",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetFindingsV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | OrganizationalUnitNotFoundException
  | OrganizationNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of findings that match the specified criteria.
 *
 * You can use the `Scopes` parameter to define the data boundary for the query. Currently, `Scopes` supports `AwsOrganizations`, which lets you retrieve findings from your entire organization or from specific organizational units. Only the delegated administrator account can use `Scopes`.
 *
 * You can use the `Filters` parameter to refine results based on finding attributes. You can use `Scopes` and `Filters` independently or together. When both are provided, `Scopes` narrows the data set first, and then `Filters` refines results within that scoped data set.
 *
 * `GetFindings` and `GetFindingsV2` both use `securityhub:GetFindings` in the `Action` element of an IAM policy statement.
 * You must have permission to perform the `securityhub:GetFindings` action.
 */
export const getFindingsV2: API.PaginatedOperationMethod<
  GetFindingsV2Request,
  GetFindingsV2Response,
  GetFindingsV2Error,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetFindingsV2Request,
  output: GetFindingsV2Response,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    OrganizationalUnitNotFoundException,
    OrganizationNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetFindingsV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Findings",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetInsightResultsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists the results of the Security Hub CSPM insight specified by the insight ARN.
 */
export const getInsightResults: API.OperationMethod<
  GetInsightResultsRequest,
  GetInsightResultsResponse,
  GetInsightResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetInsightResultsRequest,
  output: GetInsightResultsResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInsightResults",
}));

export type GetInsightsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Lists and describes insights for the specified insight ARNs.
 */
export const getInsights: API.PaginatedOperationMethod<
  GetInsightsRequest,
  GetInsightsResponse,
  GetInsightsError,
  Credentials | HttpClient.HttpClient,
  Insight
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetInsightsRequest,
  output: GetInsightsResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInsights",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Insights",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetInvitationsCountError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts.
 * For information, see Managing Security Hub CSPM administrator and member accounts with Organizations
 * in the *Security Hub CSPM User Guide*.
 *
 * Returns the count of all Security Hub CSPM membership invitations that were sent to the
 * calling member account, not including the currently accepted invitation.
 */
export const getInvitationsCount: API.OperationMethod<
  GetInvitationsCountRequest,
  GetInvitationsCountResponse,
  GetInvitationsCountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetInvitationsCountRequest,
  output: GetInvitationsCountResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInvitationsCount",
}));

export type GetMasterAccountError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * This method is deprecated. Instead, use `GetAdministratorAccount`.
 *
 * The Security Hub CSPM console continues to use `GetMasterAccount`. It will eventually change to use `GetAdministratorAccount`. Any IAM policies that specifically control access to this function must continue to use `GetMasterAccount`. You should also add `GetAdministratorAccount` to your policies to ensure that the correct permissions are in place after the console begins to use `GetAdministratorAccount`.
 *
 * Provides the details for the Security Hub CSPM administrator account for the current member account.
 *
 * Can be used by both member accounts that are managed using Organizations and accounts that were
 * invited manually.
 */
export const getMasterAccount: API.OperationMethod<
  GetMasterAccountRequest,
  GetMasterAccountResponse,
  GetMasterAccountError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMasterAccountRequest,
  output: GetMasterAccountResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMasterAccount",
}));

export type GetMembersError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns the details for the Security Hub CSPM member accounts for the specified account IDs.
 *
 * An administrator account can be either the delegated Security Hub CSPM administrator account for an
 * organization or an administrator account that enabled Security Hub CSPM manually.
 *
 * The results include both member accounts that are managed using Organizations and accounts that
 * were invited manually.
 */
export const getMembers: API.OperationMethod<
  GetMembersRequest,
  GetMembersResponse,
  GetMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMembersRequest,
  output: GetMembersResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMembers",
}));

export type GetRecommendedPolicyV2Error =
  | AccessDeniedException
  | InternalServerException
  | InvalidInputException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the recommended policy to remediate a Security Hub finding.
 * `GetRecommendedPolicyV2` only supports findings for unused permissions.
 */
export const getRecommendedPolicyV2: API.PaginatedOperationMethod<
  GetRecommendedPolicyV2Request,
  GetRecommendedPolicyV2Response,
  GetRecommendedPolicyV2Error,
  Credentials | HttpClient.HttpClient,
  RecommendationStep
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetRecommendedPolicyV2Request,
  output: GetRecommendedPolicyV2Response,
  errors: [
    AccessDeniedException,
    InternalServerException,
    InvalidInputException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecommendedPolicyV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RecommendationSteps",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetRemediationsV2Error =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves remediation targets for the account, or for all member accounts if the caller is
 * the delegated administrator. Results are sorted by priority, highest first, and are paginated.
 * Use `TargetUid` or `MetadataUid` to scope the request to a single target
 * or finding.
 */
export const getRemediationsV2: API.PaginatedOperationMethod<
  GetRemediationsV2Request,
  GetRemediationsV2Response,
  GetRemediationsV2Error,
  Credentials | HttpClient.HttpClient,
  RemediationV2Item
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetRemediationsV2Request,
  output: GetRemediationsV2Response,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRemediationsV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetResourcesStatisticsV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | OrganizationalUnitNotFoundException
  | OrganizationNotFoundException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves statistical information about Amazon Web Services resources and their associated security findings.
 *
 * You can use the `Scopes` parameter to define the data boundary for the query. Currently, `Scopes` supports `AwsOrganizations`, which lets you aggregate resources from your entire organization or from specific organizational units. Only the delegated administrator account can use `Scopes`.
 *
 * If you set `GroupByField` to `ResourceSubCategory`, `ResourceInfo.AIDetails.HostResourceType`, or `ResourceInfo.AIDetails.CanonicalId`, you must include a `ResourceCategory` string filter with comparison set to `EQUALS` and value `AI/ML` in the corresponding `ResourceGroupByRule`.
 */
export const getResourcesStatisticsV2: API.OperationMethod<
  GetResourcesStatisticsV2Request,
  GetResourcesStatisticsV2Response,
  GetResourcesStatisticsV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetResourcesStatisticsV2Request,
  output: GetResourcesStatisticsV2Response,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    OrganizationalUnitNotFoundException,
    OrganizationNotFoundException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcesStatisticsV2",
}));

export type GetResourcesTrendsV2Error =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns resource trend data based on the specified criteria. This operation helps you analyze patterns and changes in resource compliance over time.
 */
export const getResourcesTrendsV2: API.PaginatedOperationMethod<
  GetResourcesTrendsV2Request,
  GetResourcesTrendsV2Response,
  GetResourcesTrendsV2Error,
  Credentials | HttpClient.HttpClient,
  ResourcesTrendsMetricsResult
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetResourcesTrendsV2Request,
  output: GetResourcesTrendsV2Response,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcesTrendsV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TrendsMetrics",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetResourcesV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | OrganizationalUnitNotFoundException
  | OrganizationNotFoundException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of resources.
 *
 * You can use the `Scopes` parameter to define the data boundary for the query. Currently, `Scopes` supports `AwsOrganizations`, which lets you retrieve resources from your entire organization or from specific organizational units. Only the delegated administrator account can use `Scopes`.
 *
 * You can use the `Filters` parameter to refine results based on resource attributes. You can use `Scopes` and `Filters` independently or together. When both are provided, `Scopes` narrows the data set first, and then `Filters` refines results within that scoped data set.
 *
 * For AI/ML resources, the response includes the `ResourceSubCategory` field. For self-hosted AI resources and their host resources, the response also includes `ResourceInfo` with AI-specific details. Self-hosted AI resources use a `ResourceType` with the `SelfHosted::AI::` prefix, such as `SelfHosted::AI::Model`, `SelfHosted::AI::Agent`, `SelfHosted::AI::InferenceEndpoint`, and `SelfHosted::AI::ExternalEndpoint`.
 *
 * If you filter by `ResourceSubCategory`, you must also include a `ResourceCategory` string filter with comparison set to `EQUALS` and value `AI/ML` in the same request.
 */
export const getResourcesV2: API.PaginatedOperationMethod<
  GetResourcesV2Request,
  GetResourcesV2Response,
  GetResourcesV2Error,
  Credentials | HttpClient.HttpClient,
  ResourceResult
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: GetResourcesV2Request,
  output: GetResourcesV2Response,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    OrganizationalUnitNotFoundException,
    OrganizationNotFoundException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcesV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Resources",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type GetSecurityControlDefinitionError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Retrieves the definition of a security control. The definition includes the control title, description, Region availability, parameter definitions, and other details.
 */
export const getSecurityControlDefinition: API.OperationMethod<
  GetSecurityControlDefinitionRequest,
  GetSecurityControlDefinitionResponse,
  GetSecurityControlDefinitionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSecurityControlDefinitionRequest,
  output: GetSecurityControlDefinitionResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSecurityControlDefinition",
}));

export type InviteMembersError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts.
 * For information, see Managing Security Hub CSPM administrator and member accounts with Organizations
 * in the *Security Hub CSPM User Guide*.
 *
 * Invites other Amazon Web Services accounts to become member accounts for the Security Hub CSPM administrator account that
 * the invitation is sent from.
 *
 * This operation is only used to invite accounts that don't belong to an Amazon Web Services organization.
 * Organization accounts don't receive invitations.
 *
 * Before you can use this action to invite a member, you must first use the `CreateMembers` action to create the member account in Security Hub CSPM.
 *
 * When the account owner enables Security Hub CSPM and accepts the invitation to become a member
 * account, the administrator account can view the findings generated in the member account.
 */
export const inviteMembers: API.OperationMethod<
  InviteMembersRequest,
  InviteMembersResponse,
  InviteMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: InviteMembersRequest,
  output: InviteMembersResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InviteMembers",
}));

export type ListAggregatorsV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of V2 aggregators.
 */
export const listAggregatorsV2: API.PaginatedOperationMethod<
  ListAggregatorsV2Request,
  ListAggregatorsV2Response,
  ListAggregatorsV2Error,
  Credentials | HttpClient.HttpClient,
  AggregatorV2
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAggregatorsV2Request,
  output: ListAggregatorsV2Response,
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
  operationName: "ListAggregatorsV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AggregatorsV2",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAutomationRulesError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * A list of automation rules and their metadata for the calling account.
 */
export const listAutomationRules: API.OperationMethod<
  ListAutomationRulesRequest,
  ListAutomationRulesResponse,
  ListAutomationRulesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListAutomationRulesRequest,
  output: ListAutomationRulesResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAutomationRules",
}));

export type ListAutomationRulesV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of automation rules and metadata for the calling account.
 */
export const listAutomationRulesV2: API.OperationMethod<
  ListAutomationRulesV2Request,
  ListAutomationRulesV2Response,
  ListAutomationRulesV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListAutomationRulesV2Request,
  output: ListAutomationRulesV2Response,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAutomationRulesV2",
}));

export type ListConfigurationPoliciesError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Lists the configuration policies that the Security Hub CSPM delegated administrator has created for your
 * organization. Only the delegated administrator can invoke this operation from the home Region.
 */
export const listConfigurationPolicies: API.PaginatedOperationMethod<
  ListConfigurationPoliciesRequest,
  ListConfigurationPoliciesResponse,
  ListConfigurationPoliciesError,
  Credentials | HttpClient.HttpClient,
  ConfigurationPolicySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListConfigurationPoliciesRequest,
  output: ListConfigurationPoliciesResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfigurationPolicies",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ConfigurationPolicySummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListConfigurationPolicyAssociationsError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Provides information about the associations for your configuration policies and self-managed behavior. Only the
 * Security Hub CSPM delegated administrator can invoke this operation from the home Region.
 */
export const listConfigurationPolicyAssociations: API.PaginatedOperationMethod<
  ListConfigurationPolicyAssociationsRequest,
  ListConfigurationPolicyAssociationsResponse,
  ListConfigurationPolicyAssociationsError,
  Credentials | HttpClient.HttpClient,
  ConfigurationPolicyAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListConfigurationPolicyAssociationsRequest,
  output: ListConfigurationPolicyAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConfigurationPolicyAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ConfigurationPolicyAssociationSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListConnectorsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidAccessException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the CSPM connectors and their metadata for the calling account.
 */
export const listConnectors: API.OperationMethod<
  ListConnectorsRequest,
  ListConnectorsResponse,
  ListConnectorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListConnectorsRequest,
  output: ListConnectorsResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidAccessException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnectors",
}));

export type ListConnectorsV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Grants permission to retrieve a list of connectorsV2 and their metadata for the calling account.
 */
export const listConnectorsV2: API.OperationMethod<
  ListConnectorsV2Request,
  ListConnectorsV2Response,
  ListConnectorsV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListConnectorsV2Request,
  output: ListConnectorsV2Response,
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
  operationName: "ListConnectorsV2",
}));

export type ListEnabledProductsForImportError =
  | InternalException
  | InvalidAccessException
  | LimitExceededException
  | CommonErrors;
/**
 * Lists all findings-generating solutions (products) that you are subscribed to receive
 * findings from in Security Hub CSPM.
 */
export const listEnabledProductsForImport: API.PaginatedOperationMethod<
  ListEnabledProductsForImportRequest,
  ListEnabledProductsForImportResponse,
  ListEnabledProductsForImportError,
  Credentials | HttpClient.HttpClient,
  NonEmptyString
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListEnabledProductsForImportRequest,
  output: ListEnabledProductsForImportResponse,
  errors: [InternalException, InvalidAccessException, LimitExceededException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEnabledProductsForImport",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ProductSubscriptions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListExposuresByRemediationV2Error =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the exposure findings tied to a specific remediation target. Results are sorted by
 * previous severity, highest first, and are paginated.
 */
export const listExposuresByRemediationV2: API.PaginatedOperationMethod<
  ListExposuresByRemediationV2Request,
  ListExposuresByRemediationV2Response,
  ListExposuresByRemediationV2Error,
  Credentials | HttpClient.HttpClient,
  ExposureFinding
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListExposuresByRemediationV2Request,
  output: ListExposuresByRemediationV2Response,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListExposuresByRemediationV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Items",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListFindingAggregatorsError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * If cross-Region aggregation is enabled, then `ListFindingAggregators` returns the Amazon Resource Name (ARN)
 * of the finding aggregator. You can run this operation from any Amazon Web Services Region.
 */
export const listFindingAggregators: API.PaginatedOperationMethod<
  ListFindingAggregatorsRequest,
  ListFindingAggregatorsResponse,
  ListFindingAggregatorsError,
  Credentials | HttpClient.HttpClient,
  FindingAggregator
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFindingAggregatorsRequest,
  output: ListFindingAggregatorsResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFindingAggregators",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "FindingAggregators",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListFreeTrialStatusesV2Error =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the free trial status of Security Hub features. A delegated Security Hub administrator can list the status for accounts in its organization. Any other account can list the status only for itself. Free trial status remains available after a feature is disabled.
 */
export const listFreeTrialStatusesV2: API.PaginatedOperationMethod<
  ListFreeTrialStatusesV2Request,
  ListFreeTrialStatusesV2Response,
  ListFreeTrialStatusesV2Error,
  Credentials | HttpClient.HttpClient,
  AccountFreeTrialStatus
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListFreeTrialStatusesV2Request,
  output: ListFreeTrialStatusesV2Response,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFreeTrialStatusesV2",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AccountFreeTrialStatuses",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListInvitationsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * We recommend using Organizations instead of Security Hub CSPM invitations to manage your member accounts.
 * For information, see Managing Security Hub CSPM administrator and member accounts with Organizations
 * in the *Security Hub CSPM User Guide*.
 *
 * Lists all Security Hub CSPM membership invitations that were sent to the calling account.
 *
 * Only accounts that are managed by invitation can use this operation.
 * Accounts that are managed using the integration with Organizations don't receive invitations.
 */
export const listInvitations: API.PaginatedOperationMethod<
  ListInvitationsRequest,
  ListInvitationsResponse,
  ListInvitationsError,
  Credentials | HttpClient.HttpClient,
  Invitation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListInvitationsRequest,
  output: ListInvitationsResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInvitations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Invitations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListMembersError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Lists details about all member accounts for the current Security Hub CSPM administrator
 * account.
 *
 * The results include both member accounts that belong to an organization and member
 * accounts that were invited manually.
 */
export const listMembers: API.PaginatedOperationMethod<
  ListMembersRequest,
  ListMembersResponse,
  ListMembersError,
  Credentials | HttpClient.HttpClient,
  Member
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMembersRequest,
  output: ListMembersResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMembers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Members",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListOrganizationAdminAccountsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Lists the Security Hub CSPM administrator accounts. Can only be called by the organization
 * management account.
 */
export const listOrganizationAdminAccounts: API.PaginatedOperationMethod<
  ListOrganizationAdminAccountsRequest,
  ListOrganizationAdminAccountsResponse,
  ListOrganizationAdminAccountsError,
  Credentials | HttpClient.HttpClient,
  AdminAccount
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListOrganizationAdminAccountsRequest,
  output: ListOrganizationAdminAccountsResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListOrganizationAdminAccounts",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AdminAccounts",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListSecurityControlDefinitionsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Lists all of the security controls that apply to a specified standard.
 */
export const listSecurityControlDefinitions: API.PaginatedOperationMethod<
  ListSecurityControlDefinitionsRequest,
  ListSecurityControlDefinitionsResponse,
  ListSecurityControlDefinitionsError,
  Credentials | HttpClient.HttpClient,
  SecurityControlDefinition
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSecurityControlDefinitionsRequest,
  output: ListSecurityControlDefinitionsResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSecurityControlDefinitions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SecurityControlDefinitions",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListStandardsControlAssociationsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | CommonErrors;
/**
 * Specifies whether a control is currently enabled or disabled in each enabled standard in the calling account.
 *
 * This operation omits standards control associations for standard subscriptions where `StandardsControlsUpdatable` has value `NOT_READY_FOR_UPDATES`.
 */
export const listStandardsControlAssociations: API.PaginatedOperationMethod<
  ListStandardsControlAssociationsRequest,
  ListStandardsControlAssociationsResponse,
  ListStandardsControlAssociationsError,
  Credentials | HttpClient.HttpClient,
  StandardsControlAssociationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListStandardsControlAssociationsRequest,
  output: ListStandardsControlAssociationsResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListStandardsControlAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "StandardsControlAssociationSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | InternalException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Returns a list of tags associated with a resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [InternalException, InvalidInputException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type RegisterConnectorV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Grants permission to complete the authorization based on input parameters.
 */
export const registerConnectorV2: API.OperationMethod<
  RegisterConnectorV2Request,
  RegisterConnectorV2Response,
  RegisterConnectorV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RegisterConnectorV2Request,
  output: RegisterConnectorV2Response,
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
  operationName: "RegisterConnectorV2",
}));

export type StartConfigurationPolicyAssociationError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Associates a target account, organizational unit, or the root with a specified configuration. The target can be
 * associated with a configuration policy or self-managed behavior. Only the Security Hub CSPM delegated administrator can
 * invoke this operation from the home Region.
 */
export const startConfigurationPolicyAssociation: API.OperationMethod<
  StartConfigurationPolicyAssociationRequest,
  StartConfigurationPolicyAssociationResponse,
  StartConfigurationPolicyAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartConfigurationPolicyAssociationRequest,
  output: StartConfigurationPolicyAssociationResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartConfigurationPolicyAssociation",
}));

export type StartConfigurationPolicyDisassociationError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Disassociates a target account, organizational unit, or the root from a specified configuration. When you
 * disassociate a configuration from its target, the target inherits the configuration of the closest parent. If there's no
 * configuration to inherit, the target retains its settings but becomes a self-managed account. A target can be disassociated from
 * a configuration policy or self-managed behavior. Only the Security Hub CSPM delegated administrator can invoke this
 * operation from the home Region.
 */
export const startConfigurationPolicyDisassociation: API.OperationMethod<
  StartConfigurationPolicyDisassociationRequest,
  StartConfigurationPolicyDisassociationResponse,
  StartConfigurationPolicyDisassociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartConfigurationPolicyDisassociationRequest,
  output: StartConfigurationPolicyDisassociationResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartConfigurationPolicyDisassociation",
}));

export type TagResourceError =
  | InternalException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Adds one or more tags to a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [InternalException, InvalidInputException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | InternalException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Removes one or more tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [InternalException, InvalidInputException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateActionTargetError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the name and description of a custom action target in Security Hub CSPM.
 */
export const updateActionTarget: API.OperationMethod<
  UpdateActionTargetRequest,
  UpdateActionTargetResponse,
  UpdateActionTargetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateActionTargetRequest,
  output: UpdateActionTargetResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateActionTarget",
}));

export type UpdateAggregatorV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Udpates the configuration for the Aggregator V2.
 */
export const updateAggregatorV2: API.OperationMethod<
  UpdateAggregatorV2Request,
  UpdateAggregatorV2Response,
  UpdateAggregatorV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAggregatorV2Request,
  output: UpdateAggregatorV2Response,
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
  operationName: "UpdateAggregatorV2",
}));

export type UpdateAutomationRuleV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a V2 automation rule.
 */
export const updateAutomationRuleV2: API.OperationMethod<
  UpdateAutomationRuleV2Request,
  UpdateAutomationRuleV2Response,
  UpdateAutomationRuleV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAutomationRuleV2Request,
  output: UpdateAutomationRuleV2Response,
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
  operationName: "UpdateAutomationRuleV2",
}));

export type UpdateConfigurationPolicyError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceConflictException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates a configuration policy. Only the Security Hub CSPM delegated
 * administrator can invoke this operation from the home Region.
 */
export const updateConfigurationPolicy: API.OperationMethod<
  UpdateConfigurationPolicyRequest,
  UpdateConfigurationPolicyResponse,
  UpdateConfigurationPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateConfigurationPolicyRequest,
  output: UpdateConfigurationPolicyResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceConflictException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConfigurationPolicy",
}));

export type UpdateConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | InvalidAccessException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a CSPM connector's configuration, such as the scope or regions for the connected cloud provider.
 */
export const updateConnector: API.OperationMethod<
  UpdateConnectorRequest,
  UpdateConnectorResponse,
  UpdateConnectorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateConnectorRequest,
  output: UpdateConnectorResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    InvalidAccessException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateConnector",
}));

export type UpdateConnectorV2Error =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Grants permission to update a connectorV2 based on its id and input parameters.
 */
export const updateConnectorV2: API.OperationMethod<
  UpdateConnectorV2Request,
  UpdateConnectorV2Response,
  UpdateConnectorV2Error,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateConnectorV2Request,
  output: UpdateConnectorV2Response,
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
  operationName: "UpdateConnectorV2",
}));

export type UpdateFindingAggregatorError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * The *aggregation Region* is now called the *home Region*.
 *
 * Updates cross-Region aggregation settings. You can use this operation to update the Region linking mode and the list
 * of included or excluded Amazon Web Services Regions. However, you can't use this operation to change the home Region.
 *
 * You can invoke this operation from the current home Region only.
 */
export const updateFindingAggregator: API.OperationMethod<
  UpdateFindingAggregatorRequest,
  UpdateFindingAggregatorResponse,
  UpdateFindingAggregatorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateFindingAggregatorRequest,
  output: UpdateFindingAggregatorResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFindingAggregator",
}));

export type UpdateFindingsError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * `UpdateFindings` is a deprecated operation. Instead of `UpdateFindings`, use
 * the `BatchUpdateFindings` operation.
 *
 * The `UpdateFindings` operation updates the `Note` and `RecordState` of the Security Hub CSPM aggregated
 * findings that the filter attributes specify. Any member account that can view the finding
 * can also see the update to the finding.
 *
 * Finding updates made with `UpdateFindings` aren't persisted if the same finding is later updated by the
 * finding provider through the `BatchImportFindings` operation. In addition, Security Hub CSPM doesn't
 * record updates made with `UpdateFindings` in the finding history.
 */
export const updateFindings: API.OperationMethod<
  UpdateFindingsRequest,
  UpdateFindingsResponse,
  UpdateFindingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateFindingsRequest,
  output: UpdateFindingsResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateFindings",
}));

export type UpdateInsightError =
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the Security Hub CSPM insight identified by the specified insight ARN.
 */
export const updateInsight: API.OperationMethod<
  UpdateInsightRequest,
  UpdateInsightResponse,
  UpdateInsightError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateInsightRequest,
  output: UpdateInsightResponse,
  errors: [
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateInsight",
}));

export type UpdateOrganizationConfigurationError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceConflictException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the configuration of your organization in Security Hub CSPM. Only the
 * Security Hub CSPM administrator account can invoke this operation.
 */
export const updateOrganizationConfiguration: API.OperationMethod<
  UpdateOrganizationConfigurationRequest,
  UpdateOrganizationConfigurationResponse,
  UpdateOrganizationConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateOrganizationConfigurationRequest,
  output: UpdateOrganizationConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceConflictException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateOrganizationConfiguration",
}));

export type UpdateSecurityControlError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceInUseException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates the properties of a security control.
 */
export const updateSecurityControl: API.OperationMethod<
  UpdateSecurityControlRequest,
  UpdateSecurityControlResponse,
  UpdateSecurityControlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSecurityControlRequest,
  output: UpdateSecurityControlResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceInUseException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSecurityControl",
}));

export type UpdateSecurityHubConfigurationError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | LimitExceededException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Updates configuration options for Security Hub CSPM.
 */
export const updateSecurityHubConfiguration: API.OperationMethod<
  UpdateSecurityHubConfigurationRequest,
  UpdateSecurityHubConfigurationResponse,
  UpdateSecurityHubConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSecurityHubConfigurationRequest,
  output: UpdateSecurityHubConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    LimitExceededException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSecurityHubConfiguration",
}));

export type UpdateStandardsControlError =
  | AccessDeniedException
  | InternalException
  | InvalidAccessException
  | InvalidInputException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Used to control whether an individual security standard control is enabled or
 * disabled.
 *
 * Calls to this operation return a `RESOURCE_NOT_FOUND_EXCEPTION` error when the standard subscription for the control has `StandardsControlsUpdatable` value `NOT_READY_FOR_UPDATES`.
 */
export const updateStandardsControl: API.OperationMethod<
  UpdateStandardsControlRequest,
  UpdateStandardsControlResponse,
  UpdateStandardsControlError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateStandardsControlRequest,
  output: UpdateStandardsControlResponse,
  errors: [
    AccessDeniedException,
    InternalException,
    InvalidAccessException,
    InvalidInputException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateStandardsControl",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AdministratorId: S.optional(S.String),
          InvitationId: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/administrator" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "AcceptAdministratorInvitationRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AcceptAdministratorInvitationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ MasterId: S.optional(S.String), InvitationId: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/master" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AcceptInvitationRequest" });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AcceptInvitationResponse",
      });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.suspend(() =>
        S.Struct({ AutomationRulesArns: S.optional(AutomationRulesArnsList) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/automationrules/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDeleteAutomationRulesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RuleArn: S.optional(S.String),
          ErrorCode: S.optional(S.Number),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UnprocessedAutomationRule",
      });
    case 7:
      return S.Array(UnprocessedAutomationRule);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ProcessedAutomationRules: S.optional(AutomationRulesArnsList),
          UnprocessedAutomationRules: S.optional(UnprocessedAutomationRulesList),
        }),
      ).annotate({
        identifier: "BatchDeleteAutomationRulesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ StandardsSubscriptionArns: S.optional(StandardsSubscriptionArns) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/standards/deregister" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDisableStandardsRequest",
      });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() => S.Struct({ StatusReasonCode: S.optional(StatusReasonCode) })).annotate(
        { identifier: "StandardsStatusReason" },
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          StandardsSubscriptionArn: S.optional(S.String),
          StandardsArn: S.optional(S.String),
          StandardsInput: S.optional(StandardsInputParameterMap),
          StandardsStatus: S.optional(StandardsStatus),
          StandardsControlsUpdatable: S.optional(StandardsControlsUpdatable),
          StandardsStatusReason: S.optional(StandardsStatusReason),
          Provider: S.optional(StandardsProvider),
        }),
      ).annotate({ identifier: "StandardsSubscription" });
    case 5:
      return S.Array(StandardsSubscription);
    case 6:
      return S.suspend(() =>
        S.Struct({ StandardsSubscriptions: S.optional(StandardsSubscriptions) }),
      ).annotate({
        identifier: "BatchDisableStandardsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StandardsArn: S.optional(S.String),
          StandardsInput: S.optional(StandardsInputParameterMap),
        }),
      ).annotate({
        identifier: "StandardsSubscriptionRequest",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(StandardsSubscriptionRequest);
    case 1:
      return S.suspend(() =>
        S.Struct({ StandardsSubscriptionRequests: S.optional(StandardsSubscriptionRequests) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/standards/register" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchEnableStandardsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AutomationRulesArns: S.optional(AutomationRulesArnsList) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/automationrules/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetAutomationRulesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Value: S.optional(S.String), Comparison: S.optional(StringFilterComparison) }),
      ).annotate({ identifier: "StringFilter" });
    case 4:
      return S.Array(StringFilter);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Value: S.optional(S.Number),
          Unit: S.optional(DateRangeUnit),
          Comparison: S.optional(DateRangeComparison),
        }),
      ).annotate({ identifier: "DateRange" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Start: S.optional(S.String),
          End: S.optional(S.String),
          DateRange: S.optional(DateRange),
        }),
      ).annotate({ identifier: "DateFilter" });
    case 7:
      return S.Array(DateFilter);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Gte: S.optional(S.Number),
          Lte: S.optional(S.Number),
          Eq: S.optional(S.Number),
          Gt: S.optional(S.Number),
          Lt: S.optional(S.Number),
        }),
      ).annotate({ identifier: "NumberFilter" });
    case 1:
      return S.Array(NumberFilter);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Key: S.optional(S.String),
          Value: S.optional(S.String),
          Comparison: S.optional(MapFilterComparison),
        }),
      ).annotate({ identifier: "MapFilter" });
    case 3:
      return S.Array(MapFilter);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProductArn: S.optional(StringFilterList),
          AwsAccountId: S.optional(StringFilterList),
          Id: S.optional(StringFilterList),
          GeneratorId: S.optional(StringFilterList),
          Type: S.optional(StringFilterList),
          FirstObservedAt: S.optional(DateFilterList),
          LastObservedAt: S.optional(DateFilterList),
          CreatedAt: S.optional(DateFilterList),
          UpdatedAt: S.optional(DateFilterList),
          Confidence: S.optional(NumberFilterList),
          Criticality: S.optional(NumberFilterList),
          Title: S.optional(StringFilterList),
          Description: S.optional(StringFilterList),
          SourceUrl: S.optional(StringFilterList),
          ProductName: S.optional(StringFilterList),
          CompanyName: S.optional(StringFilterList),
          SeverityLabel: S.optional(StringFilterList),
          ResourceType: S.optional(StringFilterList),
          ResourceId: S.optional(StringFilterList),
          ResourcePartition: S.optional(StringFilterList),
          ResourceRegion: S.optional(StringFilterList),
          ResourceTags: S.optional(MapFilterList),
          ResourceDetailsOther: S.optional(MapFilterList),
          ComplianceStatus: S.optional(StringFilterList),
          ComplianceSecurityControlId: S.optional(StringFilterList),
          ComplianceAssociatedStandardsId: S.optional(StringFilterList),
          VerificationState: S.optional(StringFilterList),
          WorkflowStatus: S.optional(StringFilterList),
          RecordState: S.optional(StringFilterList),
          RelatedFindingsProductArn: S.optional(StringFilterList),
          RelatedFindingsId: S.optional(StringFilterList),
          NoteText: S.optional(StringFilterList),
          NoteUpdatedAt: S.optional(DateFilterList),
          NoteUpdatedBy: S.optional(StringFilterList),
          UserDefinedFields: S.optional(MapFilterList),
          ResourceApplicationArn: S.optional(StringFilterList),
          ResourceApplicationName: S.optional(StringFilterList),
          AwsAccountName: S.optional(StringFilterList),
          ResourceProvider: S.optional(StringFilterList),
          ResourceOwnerAccountId: S.optional(StringFilterList),
          ResourceOwnerOrgId: S.optional(StringFilterList),
        }),
      ).annotate({
        identifier: "AutomationRulesFindingFilters",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Text: S.optional(S.String), UpdatedBy: S.optional(S.String) }),
      ).annotate({ identifier: "NoteUpdate" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Normalized: S.optional(S.Number),
          Product: S.optional(S.Number),
          Label: S.optional(SeverityLabel),
        }),
      ).annotate({ identifier: "SeverityUpdate" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Status: S.optional(WorkflowStatus) })).annotate({
        identifier: "WorkflowUpdate",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ProductArn: S.optional(S.String), Id: S.optional(S.String) }),
      ).annotate({ identifier: "RelatedFinding" });
    case 2:
      return S.Array(RelatedFinding);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Note: S.optional(NoteUpdate),
          Severity: S.optional(SeverityUpdate),
          VerificationState: S.optional(VerificationState),
          Confidence: S.optional(S.Number),
          Criticality: S.optional(S.Number),
          Types: S.optional(TypeList),
          UserDefinedFields: S.optional(FieldMap),
          Workflow: S.optional(WorkflowUpdate),
          RelatedFindings: S.optional(RelatedFindingList),
        }),
      ).annotate({
        identifier: "AutomationRulesFindingFieldsUpdate",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(AutomationRulesActionType),
          FindingFieldsUpdate: S.optional(AutomationRulesFindingFieldsUpdate),
        }),
      ).annotate({ identifier: "AutomationRulesAction" });
    case 5:
      return S.Array(AutomationRulesAction);
    case 6:
      return S.suspend(() =>
        S.Struct({
          RuleArn: S.optional(S.String),
          RuleStatus: S.optional(RuleStatus),
          RuleOrder: S.optional(S.Number),
          RuleName: S.optional(S.String),
          Description: S.optional(S.String),
          IsTerminal: S.optional(S.Boolean),
          Criteria: S.optional(AutomationRulesFindingFilters),
          Actions: S.optional(ActionList),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CreatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "AutomationRulesConfig" });
    case 7:
      return S.Array(AutomationRulesConfig);
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Rules: S.optional(AutomationRulesConfigList),
          UnprocessedAutomationRules: S.optional(UnprocessedAutomationRulesList),
        }),
      ).annotate({
        identifier: "BatchGetAutomationRulesResponse",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ AccountId: S.String }),
        /*@__PURE__*/ S.Struct({ OrganizationalUnitId: S.String }),
        /*@__PURE__*/ S.Struct({ RootId: S.String }),
      ]);
    case 2:
      return S.suspend(() => S.Struct({ Target: S.optional(Target) })).annotate({
        identifier: "ConfigurationPolicyAssociation",
      });
    case 3:
      return S.Array(ConfigurationPolicyAssociation);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ConfigurationPolicyAssociationIdentifiers: S.optional(
            ConfigurationPolicyAssociationsList,
          ),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configurationPolicyAssociation/batchget" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetConfigurationPolicyAssociationsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ConfigurationPolicyId: S.optional(S.String),
          TargetId: S.optional(S.String),
          TargetType: S.optional(TargetType),
          AssociationType: S.optional(AssociationType),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          AssociationStatus: S.optional(ConfigurationPolicyAssociationStatus),
          AssociationStatusMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ConfigurationPolicyAssociationSummary",
      });
    case 6:
      return S.Array(ConfigurationPolicyAssociationSummary);
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConfigurationPolicyAssociationIdentifiers: S.optional(ConfigurationPolicyAssociation),
          ErrorCode: S.optional(S.String),
          ErrorReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UnprocessedConfigurationPolicyAssociation",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Array(UnprocessedConfigurationPolicyAssociation);
    case 1:
      return S.suspend(() =>
        S.Struct({
          ConfigurationPolicyAssociations: S.optional(ConfigurationPolicyAssociationList),
          UnprocessedConfigurationPolicyAssociations: S.optional(
            UnprocessedConfigurationPolicyAssociationList,
          ),
        }),
      ).annotate({
        identifier: "BatchGetConfigurationPolicyAssociationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ SecurityControlIds: S.optional(StringList) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/securityControls/batchGet" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetSecurityControlsRequest",
      });
    case 3:
      return S.Array(S.Number);
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Integer: S.Number }),
        /*@__PURE__*/ S.Struct({ IntegerList: IntegerList }),
        /*@__PURE__*/ S.Struct({ Double: S.Number }),
        /*@__PURE__*/ S.Struct({ String: S.String }),
        /*@__PURE__*/ S.Struct({ StringList: StringList }),
        /*@__PURE__*/ S.Struct({ Boolean: S.Boolean }),
        /*@__PURE__*/ S.Struct({ Enum: S.String }),
        /*@__PURE__*/ S.Struct({ EnumList: StringList }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({ ValueType: S.optional(ParameterValueType), Value: S.optional(ParameterValue) }),
      ).annotate({ identifier: "ParameterConfiguration" });
    case 6:
      return S.Record(S.String, /*@__PURE__*/ ParameterConfiguration.pipe(S.optional));
    case 7:
      return S.suspend(() =>
        S.Struct({
          SecurityControlId: S.optional(S.String),
          SecurityControlArn: S.optional(S.String),
          Title: S.optional(S.String),
          Description: S.optional(S.String),
          RemediationUrl: S.optional(S.String),
          SeverityRating: S.optional(SeverityRating),
          SecurityControlStatus: S.optional(ControlStatus),
          UpdateStatus: S.optional(UpdateStatus),
          Parameters: S.optional(Parameters),
          LastUpdateReason: S.optional(S.String),
          Provider: S.optional(SecurityControlsProvider),
        }),
      ).annotate({ identifier: "SecurityControl" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SecurityControl);
    case 1:
      return S.suspend(() =>
        S.Struct({
          SecurityControlId: S.optional(S.String),
          ErrorCode: S.optional(UnprocessedErrorCode),
          ErrorReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UnprocessedSecurityControl",
      });
    case 2:
      return S.Array(UnprocessedSecurityControl);
    case 3:
      return S.suspend(() =>
        S.Struct({
          SecurityControls: S.optional(SecurityControls),
          UnprocessedIds: S.optional(UnprocessedSecurityControls),
        }),
      ).annotate({
        identifier: "BatchGetSecurityControlsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ SecurityControlId: S.optional(S.String), StandardsArn: S.optional(S.String) }),
      ).annotate({
        identifier: "StandardsControlAssociationId",
      });
    case 5:
      return S.Array(StandardsControlAssociationId);
    case 6:
      return S.suspend(() =>
        S.Struct({
          StandardsControlAssociationIds: S.optional(StandardsControlAssociationIds),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/associations/batchGet" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchGetStandardsControlAssociationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StandardsArn: S.optional(S.String),
          SecurityControlId: S.optional(S.String),
          SecurityControlArn: S.optional(S.String),
          AssociationStatus: S.optional(AssociationStatus),
          RelatedRequirements: S.optional(RelatedRequirementsList),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedReason: S.optional(S.String),
          StandardsControlTitle: S.optional(S.String),
          StandardsControlDescription: S.optional(S.String),
          StandardsControlArns: S.optional(StandardsControlArnList),
        }),
      ).annotate({
        identifier: "StandardsControlAssociationDetail",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.Array(StandardsControlAssociationDetail);
    case 1:
      return S.suspend(() =>
        S.Struct({
          StandardsControlAssociationId: S.optional(StandardsControlAssociationId),
          ErrorCode: S.optional(UnprocessedErrorCode),
          ErrorReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UnprocessedStandardsControlAssociation",
      });
    case 2:
      return S.Array(UnprocessedStandardsControlAssociation);
    case 3:
      return S.suspend(() =>
        S.Struct({
          StandardsControlAssociationDetails: S.optional(StandardsControlAssociationDetails),
          UnprocessedAssociations: S.optional(UnprocessedStandardsControlAssociations),
        }),
      ).annotate({
        identifier: "BatchGetStandardsControlAssociationsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Product: S.optional(S.Number),
          Label: S.optional(SeverityLabel),
          Normalized: S.optional(S.Number),
          Original: S.optional(S.String),
        }),
      ).annotate({ identifier: "Severity" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Text: S.optional(S.String), Url: S.optional(S.String) }),
      ).annotate({ identifier: "Recommendation" });
    case 6:
      return S.suspend(() => S.Struct({ Recommendation: S.optional(Recommendation) })).annotate({
        identifier: "Remediation",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Type: S.optional(MalwareType),
          Path: S.optional(S.String),
          State: S.optional(MalwareState),
        }),
      ).annotate({ identifier: "Malware" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Malware);
    case 1:
      return S.suspend(() =>
        S.Struct({ Begin: S.optional(S.Number), End: S.optional(S.Number) }),
      ).annotate({ identifier: "PortRange" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Direction: S.optional(NetworkDirection),
          Protocol: S.optional(S.String),
          OpenPortRange: S.optional(PortRange),
          SourceIpV4: S.optional(S.String),
          SourceIpV6: S.optional(S.String),
          SourcePort: S.optional(S.Number),
          SourceDomain: S.optional(S.String),
          SourceMac: S.optional(S.String),
          DestinationIpV4: S.optional(S.String),
          DestinationIpV6: S.optional(S.String),
          DestinationPort: S.optional(S.Number),
          DestinationDomain: S.optional(S.String),
        }),
      ).annotate({ identifier: "Network" });
    case 3:
      return S.Array(PortRange);
    case 4:
      return S.suspend(() =>
        S.Struct({ Address: S.optional(StringList), PortRanges: S.optional(PortRangeList) }),
      ).annotate({
        identifier: "NetworkPathComponentDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Protocol: S.optional(S.String),
          Destination: S.optional(NetworkPathComponentDetails),
          Source: S.optional(NetworkPathComponentDetails),
        }),
      ).annotate({ identifier: "NetworkHeader" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ComponentId: S.optional(S.String),
          ComponentType: S.optional(S.String),
          Egress: S.optional(NetworkHeader),
          Ingress: S.optional(NetworkHeader),
        }),
      ).annotate({ identifier: "NetworkPathComponent" });
    case 7:
      return S.Array(NetworkPathComponent);
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Path: S.optional(S.String),
          Pid: S.optional(S.Number),
          ParentPid: S.optional(S.Number),
          LaunchedAt: S.optional(S.String),
          TerminatedAt: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProcessDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          FilePath: S.optional(S.String),
          FileName: S.optional(S.String),
          ResourceId: S.optional(S.String),
          Hash: S.optional(S.String),
        }),
      ).annotate({ identifier: "FilePaths" });
    case 2:
      return S.Array(FilePaths);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Severity: S.optional(S.String),
          ItemCount: S.optional(S.Number),
          FilePaths: S.optional(FilePathList),
        }),
      ).annotate({ identifier: "Threat" });
    case 4:
      return S.Array(Threat);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(ThreatIntelIndicatorType),
          Value: S.optional(S.String),
          Category: S.optional(ThreatIntelIndicatorCategory),
          LastObservedAt: S.optional(S.String),
          Source: S.optional(S.String),
          SourceUrl: S.optional(S.String),
        }),
      ).annotate({ identifier: "ThreatIntelIndicator" });
    case 6:
      return S.Array(ThreatIntelIndicator);
    case 7:
      return S.suspend(() => S.Struct({ Id: S.optional(S.String) })).annotate({
        identifier: "ResourceOwnerAccount",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Account: S.optional(ResourceOwnerAccount), Org: S.optional(ResourceOwnerOrg) }),
      ).annotate({ identifier: "ResourceOwner" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.String), Reason: S.optional(S.String) }),
      ).annotate({ identifier: "ClassificationStatus" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Start: S.optional(S.Number),
          End: S.optional(S.Number),
          StartColumn: S.optional(S.Number),
        }),
      ).annotate({ identifier: "Range" });
    case 3:
      return S.Array(Range);
    case 4:
      return S.suspend(() =>
        S.Struct({
          PageNumber: S.optional(S.Number),
          LineRange: S.optional(Range),
          OffsetRange: S.optional(Range),
        }),
      ).annotate({ identifier: "Page" });
    case 5:
      return S.Array(Page);
    case 6:
      return S.suspend(() =>
        S.Struct({ JsonPath: S.optional(S.String), RecordIndex: S.optional(S.Number) }),
      ).annotate({ identifier: "Record" });
    case 7:
      return S.Array(Record);
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Column: S.optional(S.Number),
          Row: S.optional(S.Number),
          ColumnName: S.optional(S.String),
          CellReference: S.optional(S.String),
        }),
      ).annotate({ identifier: "Cell" });
    case 1:
      return S.Array(Cell);
    case 2:
      return S.suspend(() =>
        S.Struct({
          LineRanges: S.optional(Ranges),
          OffsetRanges: S.optional(Ranges),
          Pages: S.optional(Pages),
          Records: S.optional(Records),
          Cells: S.optional(Cells),
        }),
      ).annotate({ identifier: "Occurrences" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Count: S.optional(S.Number),
          Type: S.optional(S.String),
          Occurrences: S.optional(Occurrences),
        }),
      ).annotate({ identifier: "SensitiveDataDetections" });
    case 4:
      return S.Array(SensitiveDataDetections);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Category: S.optional(S.String),
          Detections: S.optional(SensitiveDataDetectionsList),
          TotalCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SensitiveDataResult" });
    case 6:
      return S.Array(SensitiveDataResult);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Count: S.optional(S.Number),
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Occurrences: S.optional(Occurrences),
        }),
      ).annotate({
        identifier: "CustomDataIdentifiersDetections",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.Array(CustomDataIdentifiersDetections);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Detections: S.optional(CustomDataIdentifiersDetectionsList),
          TotalCount: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CustomDataIdentifiersResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MimeType: S.optional(S.String),
          SizeClassified: S.optional(S.Number),
          AdditionalOccurrences: S.optional(S.Boolean),
          Status: S.optional(ClassificationStatus),
          SensitiveData: S.optional(SensitiveDataResultList),
          CustomDataIdentifiers: S.optional(CustomDataIdentifiersResult),
        }),
      ).annotate({ identifier: "ClassificationResult" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DetailedResultsLocation: S.optional(S.String),
          Result: S.optional(ClassificationResult),
        }),
      ).annotate({
        identifier: "DataClassificationDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          OnDemandAllocationStrategy: S.optional(S.String),
          OnDemandBaseCapacity: S.optional(S.Number),
          OnDemandPercentageAboveBaseCapacity: S.optional(S.Number),
          SpotAllocationStrategy: S.optional(S.String),
          SpotInstancePools: S.optional(S.Number),
          SpotMaxPrice: S.optional(S.String),
        }),
      ).annotate({
        identifier:
          "AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LaunchTemplateId: S.optional(S.String),
          LaunchTemplateName: S.optional(S.String),
          Version: S.optional(S.String),
        }),
      ).annotate({
        identifier:
          "AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ InstanceType: S.optional(S.String), WeightedCapacity: S.optional(S.String) }),
      ).annotate({
        identifier:
          "AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails",
      });
    case 7:
      return S.Array(
        AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails,
      );
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LaunchTemplateSpecification: S.optional(
            AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification,
          ),
          Overrides: S.optional(
            AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList,
          ),
        }),
      ).annotate({
        identifier: "AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          InstancesDistribution: S.optional(
            AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails,
          ),
          LaunchTemplate: S.optional(
            AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails,
          ),
        }),
      ).annotate({
        identifier: "AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails",
      });
    case 2:
      return S.suspend(() => S.Struct({ Value: S.optional(S.String) })).annotate({
        identifier: "AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails",
      });
    case 3:
      return S.Array(AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails);
    case 4:
      return S.suspend(() =>
        S.Struct({
          LaunchTemplateId: S.optional(S.String),
          LaunchTemplateName: S.optional(S.String),
          Version: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LaunchConfigurationName: S.optional(S.String),
          LoadBalancerNames: S.optional(StringList),
          HealthCheckType: S.optional(S.String),
          HealthCheckGracePeriod: S.optional(S.Number),
          CreatedTime: S.optional(S.String),
          MixedInstancesPolicy: S.optional(
            AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails,
          ),
          AvailabilityZones: S.optional(AwsAutoScalingAutoScalingGroupAvailabilityZonesList),
          LaunchTemplate: S.optional(
            AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification,
          ),
          CapacityRebalance: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsAutoScalingAutoScalingGroupDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ArtifactIdentifier: S.optional(S.String),
          EncryptionDisabled: S.optional(S.Boolean),
          Location: S.optional(S.String),
          Name: S.optional(S.String),
          NamespaceType: S.optional(S.String),
          OverrideArtifactName: S.optional(S.Boolean),
          Packaging: S.optional(S.String),
          Path: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCodeBuildProjectArtifactsDetails",
      });
    case 7:
      return S.Array(AwsCodeBuildProjectArtifactsDetails);
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Type: S.optional(S.String),
          Value: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails",
      });
    case 1:
      return S.Array(AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails);
    case 2:
      return S.suspend(() =>
        S.Struct({ Credential: S.optional(S.String), CredentialProvider: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsCodeBuildProjectEnvironmentRegistryCredential",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Certificate: S.optional(S.String),
          EnvironmentVariables: S.optional(AwsCodeBuildProjectEnvironmentEnvironmentVariablesList),
          PrivilegedMode: S.optional(S.Boolean),
          ImagePullCredentialsType: S.optional(S.String),
          RegistryCredential: S.optional(AwsCodeBuildProjectEnvironmentRegistryCredential),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCodeBuildProjectEnvironment",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          Location: S.optional(S.String),
          GitCloneDepth: S.optional(S.Number),
          InsecureSsl: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsCodeBuildProjectSource",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.optional(S.String),
          Status: S.optional(S.String),
          StreamName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EncryptionDisabled: S.optional(S.Boolean),
          Location: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCodeBuildProjectLogsConfigS3LogsDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CloudWatchLogs: S.optional(AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails),
          S3Logs: S.optional(AwsCodeBuildProjectLogsConfigS3LogsDetails),
        }),
      ).annotate({
        identifier: "AwsCodeBuildProjectLogsConfigDetails",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          VpcId: S.optional(S.String),
          Subnets: S.optional(NonEmptyStringList),
          SecurityGroupIds: S.optional(NonEmptyStringList),
        }),
      ).annotate({
        identifier: "AwsCodeBuildProjectVpcConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          EncryptionKey: S.optional(S.String),
          Artifacts: S.optional(AwsCodeBuildProjectArtifactsList),
          Environment: S.optional(AwsCodeBuildProjectEnvironment),
          Name: S.optional(S.String),
          Source: S.optional(AwsCodeBuildProjectSource),
          ServiceRole: S.optional(S.String),
          LogsConfig: S.optional(AwsCodeBuildProjectLogsConfigDetails),
          VpcConfig: S.optional(AwsCodeBuildProjectVpcConfig),
          SecondaryArtifacts: S.optional(AwsCodeBuildProjectArtifactsList),
        }),
      ).annotate({
        identifier: "AwsCodeBuildProjectDetails",
      });
    case 2:
      return S.suspend(() => S.Struct({ ViewerProtocolPolicy: S.optional(S.String) })).annotate({
        identifier: "AwsCloudFrontDistributionCacheBehavior",
      });
    case 3:
      return S.Array(AwsCloudFrontDistributionCacheBehavior);
    case 4:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(AwsCloudFrontDistributionCacheBehaviorsItemList) }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionCacheBehaviors",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Bucket: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          IncludeCookies: S.optional(S.Boolean),
          Prefix: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionLogging",
      });
    case 6:
      return S.suspend(() => S.Struct({ OriginAccessIdentity: S.optional(S.String) })).annotate({
        identifier: "AwsCloudFrontDistributionOriginS3OriginConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(NonEmptyStringList), Quantity: S.optional(S.Number) }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionOriginSslProtocols",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          HttpPort: S.optional(S.Number),
          HttpsPort: S.optional(S.Number),
          OriginKeepaliveTimeout: S.optional(S.Number),
          OriginProtocolPolicy: S.optional(S.String),
          OriginReadTimeout: S.optional(S.Number),
          OriginSslProtocols: S.optional(AwsCloudFrontDistributionOriginSslProtocols),
        }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionOriginCustomOriginConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.optional(S.String),
          Id: S.optional(S.String),
          OriginPath: S.optional(S.String),
          S3OriginConfig: S.optional(AwsCloudFrontDistributionOriginS3OriginConfig),
          CustomOriginConfig: S.optional(AwsCloudFrontDistributionOriginCustomOriginConfig),
        }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionOriginItem",
      });
    case 2:
      return S.Array(AwsCloudFrontDistributionOriginItem);
    case 3:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(AwsCloudFrontDistributionOriginItemList) }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionOrigins",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList),
          Quantity: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionOriginGroupFailoverStatusCodes",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StatusCodes: S.optional(AwsCloudFrontDistributionOriginGroupFailoverStatusCodes),
        }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionOriginGroupFailover",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ FailoverCriteria: S.optional(AwsCloudFrontDistributionOriginGroupFailover) }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionOriginGroup",
      });
    case 7:
      return S.Array(AwsCloudFrontDistributionOriginGroup);
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(AwsCloudFrontDistributionOriginGroupsItemList) }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionOriginGroups",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AcmCertificateArn: S.optional(S.String),
          Certificate: S.optional(S.String),
          CertificateSource: S.optional(S.String),
          CloudFrontDefaultCertificate: S.optional(S.Boolean),
          IamCertificateId: S.optional(S.String),
          MinimumProtocolVersion: S.optional(S.String),
          SslSupportMethod: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionViewerCertificate",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CacheBehaviors: S.optional(AwsCloudFrontDistributionCacheBehaviors),
          DefaultCacheBehavior: S.optional(AwsCloudFrontDistributionDefaultCacheBehavior),
          DefaultRootObject: S.optional(S.String),
          DomainName: S.optional(S.String),
          ETag: S.optional(S.String),
          LastModifiedTime: S.optional(S.String),
          Logging: S.optional(AwsCloudFrontDistributionLogging),
          Origins: S.optional(AwsCloudFrontDistributionOrigins),
          OriginGroups: S.optional(AwsCloudFrontDistributionOriginGroups),
          ViewerCertificate: S.optional(AwsCloudFrontDistributionViewerCertificate),
          Status: S.optional(S.String),
          WebAclId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCloudFrontDistributionDetails",
      });
    case 3:
      return S.suspend(() => S.Struct({ NetworkInterfaceId: S.optional(S.String) })).annotate({
        identifier: "AwsEc2InstanceNetworkInterfacesDetails",
      });
    case 4:
      return S.Array(AwsEc2InstanceNetworkInterfacesDetails);
    case 5:
      return S.suspend(() =>
        S.Struct({
          HttpEndpoint: S.optional(S.String),
          HttpProtocolIpv6: S.optional(S.String),
          HttpPutResponseHopLimit: S.optional(S.Number),
          HttpTokens: S.optional(S.String),
          InstanceMetadataTags: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2InstanceMetadataOptions",
      });
    case 6:
      return S.suspend(() => S.Struct({ State: S.optional(S.String) })).annotate({
        identifier: "AwsEc2InstanceMonitoringDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          ImageId: S.optional(S.String),
          IpV4Addresses: S.optional(StringList),
          IpV6Addresses: S.optional(StringList),
          KeyName: S.optional(S.String),
          IamInstanceProfileArn: S.optional(S.String),
          VpcId: S.optional(S.String),
          SubnetId: S.optional(S.String),
          LaunchedAt: S.optional(S.String),
          NetworkInterfaces: S.optional(AwsEc2InstanceNetworkInterfacesList),
          VirtualizationType: S.optional(S.String),
          MetadataOptions: S.optional(AwsEc2InstanceMetadataOptions),
          Monitoring: S.optional(AwsEc2InstanceMonitoringDetails),
        }),
      ).annotate({ identifier: "AwsEc2InstanceDetails" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AttachTime: S.optional(S.String),
          AttachmentId: S.optional(S.String),
          DeleteOnTermination: S.optional(S.Boolean),
          DeviceIndex: S.optional(S.Number),
          InstanceId: S.optional(S.String),
          InstanceOwnerId: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2NetworkInterfaceAttachment",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ GroupName: S.optional(S.String), GroupId: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2NetworkInterfaceSecurityGroup",
      });
    case 2:
      return S.Array(AwsEc2NetworkInterfaceSecurityGroup);
    case 3:
      return S.suspend(() => S.Struct({ IpV6Address: S.optional(S.String) })).annotate({
        identifier: "AwsEc2NetworkInterfaceIpV6AddressDetail",
      });
    case 4:
      return S.Array(AwsEc2NetworkInterfaceIpV6AddressDetail);
    case 5:
      return S.suspend(() =>
        S.Struct({ PrivateIpAddress: S.optional(S.String), PrivateDnsName: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2NetworkInterfacePrivateIpAddressDetail",
      });
    case 6:
      return S.Array(AwsEc2NetworkInterfacePrivateIpAddressDetail);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Attachment: S.optional(AwsEc2NetworkInterfaceAttachment),
          NetworkInterfaceId: S.optional(S.String),
          SecurityGroups: S.optional(AwsEc2NetworkInterfaceSecurityGroupList),
          SourceDestCheck: S.optional(S.Boolean),
          IpV6Addresses: S.optional(AwsEc2NetworkInterfaceIpV6AddressList),
          PrivateIpAddresses: S.optional(AwsEc2NetworkInterfacePrivateIpAddressList),
          PublicDnsName: S.optional(S.String),
          PublicIp: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2NetworkInterfaceDetails",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GroupId: S.optional(S.String),
          GroupName: S.optional(S.String),
          PeeringStatus: S.optional(S.String),
          UserId: S.optional(S.String),
          VpcId: S.optional(S.String),
          VpcPeeringConnectionId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2SecurityGroupUserIdGroupPair",
      });
    case 1:
      return S.Array(AwsEc2SecurityGroupUserIdGroupPair);
    case 2:
      return S.suspend(() => S.Struct({ CidrIp: S.optional(S.String) })).annotate({
        identifier: "AwsEc2SecurityGroupIpRange",
      });
    case 3:
      return S.Array(AwsEc2SecurityGroupIpRange);
    case 4:
      return S.suspend(() => S.Struct({ CidrIpv6: S.optional(S.String) })).annotate({
        identifier: "AwsEc2SecurityGroupIpv6Range",
      });
    case 5:
      return S.Array(AwsEc2SecurityGroupIpv6Range);
    case 6:
      return S.suspend(() => S.Struct({ PrefixListId: S.optional(S.String) })).annotate({
        identifier: "AwsEc2SecurityGroupPrefixListId",
      });
    case 7:
      return S.Array(AwsEc2SecurityGroupPrefixListId);
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          IpProtocol: S.optional(S.String),
          FromPort: S.optional(S.Number),
          ToPort: S.optional(S.Number),
          UserIdGroupPairs: S.optional(AwsEc2SecurityGroupUserIdGroupPairList),
          IpRanges: S.optional(AwsEc2SecurityGroupIpRangeList),
          Ipv6Ranges: S.optional(AwsEc2SecurityGroupIpv6RangeList),
          PrefixListIds: S.optional(AwsEc2SecurityGroupPrefixListIdList),
        }),
      ).annotate({
        identifier: "AwsEc2SecurityGroupIpPermission",
      });
    case 1:
      return S.Array(AwsEc2SecurityGroupIpPermission);
    case 2:
      return S.suspend(() =>
        S.Struct({
          GroupName: S.optional(S.String),
          GroupId: S.optional(S.String),
          OwnerId: S.optional(S.String),
          VpcId: S.optional(S.String),
          IpPermissions: S.optional(AwsEc2SecurityGroupIpPermissionList),
          IpPermissionsEgress: S.optional(AwsEc2SecurityGroupIpPermissionList),
        }),
      ).annotate({
        identifier: "AwsEc2SecurityGroupDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AttachTime: S.optional(S.String),
          DeleteOnTermination: S.optional(S.Boolean),
          InstanceId: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEc2VolumeAttachment" });
    case 4:
      return S.Array(AwsEc2VolumeAttachment);
    case 5:
      return S.suspend(() =>
        S.Struct({
          CreateTime: S.optional(S.String),
          DeviceName: S.optional(S.String),
          Encrypted: S.optional(S.Boolean),
          Size: S.optional(S.Number),
          SnapshotId: S.optional(S.String),
          Status: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          Attachments: S.optional(AwsEc2VolumeAttachmentList),
          VolumeId: S.optional(S.String),
          VolumeType: S.optional(S.String),
          VolumeScanStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEc2VolumeDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AssociationId: S.optional(S.String),
          CidrBlock: S.optional(S.String),
          CidrBlockState: S.optional(S.String),
        }),
      ).annotate({ identifier: "CidrBlockAssociation" });
    case 7:
      return S.Array(CidrBlockAssociation);
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AssociationId: S.optional(S.String),
          Ipv6CidrBlock: S.optional(S.String),
          CidrBlockState: S.optional(S.String),
        }),
      ).annotate({ identifier: "Ipv6CidrBlockAssociation" });
    case 1:
      return S.Array(Ipv6CidrBlockAssociation);
    case 2:
      return S.suspend(() =>
        S.Struct({
          CidrBlockAssociationSet: S.optional(CidrBlockAssociationList),
          Ipv6CidrBlockAssociationSet: S.optional(Ipv6CidrBlockAssociationList),
          DhcpOptionsId: S.optional(S.String),
          State: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEc2VpcDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          InstanceId: S.optional(S.String),
          PublicIp: S.optional(S.String),
          AllocationId: S.optional(S.String),
          AssociationId: S.optional(S.String),
          Domain: S.optional(S.String),
          PublicIpv4Pool: S.optional(S.String),
          NetworkBorderGroup: S.optional(S.String),
          NetworkInterfaceId: S.optional(S.String),
          NetworkInterfaceOwnerId: S.optional(S.String),
          PrivateIpAddress: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEc2EipDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AssignIpv6AddressOnCreation: S.optional(S.Boolean),
          AvailabilityZone: S.optional(S.String),
          AvailabilityZoneId: S.optional(S.String),
          AvailableIpAddressCount: S.optional(S.Number),
          CidrBlock: S.optional(S.String),
          DefaultForAz: S.optional(S.Boolean),
          MapPublicIpOnLaunch: S.optional(S.Boolean),
          OwnerId: S.optional(S.String),
          State: S.optional(S.String),
          SubnetArn: S.optional(S.String),
          SubnetId: S.optional(S.String),
          VpcId: S.optional(S.String),
          Ipv6CidrBlockAssociationSet: S.optional(Ipv6CidrBlockAssociationList),
        }),
      ).annotate({ identifier: "AwsEc2SubnetDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NetworkAclAssociationId: S.optional(S.String),
          NetworkAclId: S.optional(S.String),
          SubnetId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2NetworkAclAssociation",
      });
    case 6:
      return S.Array(AwsEc2NetworkAclAssociation);
    case 7:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.Number), Type: S.optional(S.Number) }),
      ).annotate({ identifier: "IcmpTypeCode" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ From: S.optional(S.Number), To: S.optional(S.Number) }),
      ).annotate({ identifier: "PortRangeFromTo" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CidrBlock: S.optional(S.String),
          Egress: S.optional(S.Boolean),
          IcmpTypeCode: S.optional(IcmpTypeCode),
          Ipv6CidrBlock: S.optional(S.String),
          PortRange: S.optional(PortRangeFromTo),
          Protocol: S.optional(S.String),
          RuleAction: S.optional(S.String),
          RuleNumber: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AwsEc2NetworkAclEntry" });
    case 2:
      return S.Array(AwsEc2NetworkAclEntry);
    case 3:
      return S.suspend(() =>
        S.Struct({
          IsDefault: S.optional(S.Boolean),
          NetworkAclId: S.optional(S.String),
          OwnerId: S.optional(S.String),
          VpcId: S.optional(S.String),
          Associations: S.optional(AwsEc2NetworkAclAssociationList),
          Entries: S.optional(AwsEc2NetworkAclEntryList),
        }),
      ).annotate({ identifier: "AwsEc2NetworkAclDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ZoneName: S.optional(S.String), SubnetId: S.optional(S.String) }),
      ).annotate({ identifier: "AvailabilityZone" });
    case 5:
      return S.Array(AvailabilityZone);
    case 6:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsElbv2LoadBalancerAttribute",
      });
    case 7:
      return S.Array(AwsElbv2LoadBalancerAttribute);
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZones: S.optional(AvailabilityZones),
          CanonicalHostedZoneId: S.optional(S.String),
          CreatedTime: S.optional(S.String),
          DNSName: S.optional(S.String),
          IpAddressType: S.optional(S.String),
          Scheme: S.optional(S.String),
          SecurityGroups: S.optional(SecurityGroups),
          State: S.optional(LoadBalancerState),
          Type: S.optional(S.String),
          VpcId: S.optional(S.String),
          LoadBalancerAttributes: S.optional(AwsElbv2LoadBalancerAttributes),
        }),
      ).annotate({
        identifier: "AwsElbv2LoadBalancerDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ EnvironmentName: S.optional(S.String), LinkName: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsElasticBeanstalkEnvironmentEnvironmentLink",
      });
    case 2:
      return S.Array(AwsElasticBeanstalkEnvironmentEnvironmentLink);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Namespace: S.optional(S.String),
          OptionName: S.optional(S.String),
          ResourceName: S.optional(S.String),
          Value: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsElasticBeanstalkEnvironmentOptionSetting",
      });
    case 4:
      return S.Array(AwsElasticBeanstalkEnvironmentOptionSetting);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Type: S.optional(S.String),
          Version: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsElasticBeanstalkEnvironmentTier",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationName: S.optional(S.String),
          Cname: S.optional(S.String),
          DateCreated: S.optional(S.String),
          DateUpdated: S.optional(S.String),
          Description: S.optional(S.String),
          EndpointUrl: S.optional(S.String),
          EnvironmentArn: S.optional(S.String),
          EnvironmentId: S.optional(S.String),
          EnvironmentLinks: S.optional(AwsElasticBeanstalkEnvironmentEnvironmentLinks),
          EnvironmentName: S.optional(S.String),
          OptionSettings: S.optional(AwsElasticBeanstalkEnvironmentOptionSettings),
          PlatformArn: S.optional(S.String),
          SolutionStackName: S.optional(S.String),
          Status: S.optional(S.String),
          Tier: S.optional(AwsElasticBeanstalkEnvironmentTier),
          VersionLabel: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsElasticBeanstalkEnvironmentDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ EnforceHTTPS: S.optional(S.Boolean), TLSSecurityPolicy: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsElasticsearchDomainDomainEndpointOptions",
      });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ AvailabilityZoneCount: S.optional(S.Number) })).annotate({
        identifier: "AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DedicatedMasterCount: S.optional(S.Number),
          DedicatedMasterEnabled: S.optional(S.Boolean),
          DedicatedMasterType: S.optional(S.String),
          InstanceCount: S.optional(S.Number),
          InstanceType: S.optional(S.String),
          ZoneAwarenessConfig: S.optional(
            AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails,
          ),
          ZoneAwarenessEnabled: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsElasticsearchDomainElasticsearchClusterConfigDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Enabled: S.optional(S.Boolean), KmsKeyId: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsElasticsearchDomainEncryptionAtRestOptions",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CloudWatchLogsLogGroupArn: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsElasticsearchDomainLogPublishingOptionsLogConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          IndexSlowLogs: S.optional(AwsElasticsearchDomainLogPublishingOptionsLogConfig),
          SearchSlowLogs: S.optional(AwsElasticsearchDomainLogPublishingOptionsLogConfig),
          AuditLogs: S.optional(AwsElasticsearchDomainLogPublishingOptionsLogConfig),
        }),
      ).annotate({
        identifier: "AwsElasticsearchDomainLogPublishingOptions",
      });
    case 5:
      return S.suspend(() => S.Struct({ Enabled: S.optional(S.Boolean) })).annotate({
        identifier: "AwsElasticsearchDomainNodeToNodeEncryptionOptions",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AutomatedUpdateDate: S.optional(S.String),
          Cancellable: S.optional(S.Boolean),
          CurrentVersion: S.optional(S.String),
          Description: S.optional(S.String),
          NewVersion: S.optional(S.String),
          UpdateAvailable: S.optional(S.Boolean),
          UpdateStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsElasticsearchDomainServiceSoftwareOptions",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZones: S.optional(NonEmptyStringList),
          SecurityGroupIds: S.optional(NonEmptyStringList),
          SubnetIds: S.optional(NonEmptyStringList),
          VPCId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsElasticsearchDomainVPCOptions",
      });
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccessPolicies: S.optional(S.String),
          DomainEndpointOptions: S.optional(AwsElasticsearchDomainDomainEndpointOptions),
          DomainId: S.optional(S.String),
          DomainName: S.optional(S.String),
          Endpoint: S.optional(S.String),
          Endpoints: S.optional(FieldMap),
          ElasticsearchVersion: S.optional(S.String),
          ElasticsearchClusterConfig: S.optional(
            AwsElasticsearchDomainElasticsearchClusterConfigDetails,
          ),
          EncryptionAtRestOptions: S.optional(AwsElasticsearchDomainEncryptionAtRestOptions),
          LogPublishingOptions: S.optional(AwsElasticsearchDomainLogPublishingOptions),
          NodeToNodeEncryptionOptions: S.optional(
            AwsElasticsearchDomainNodeToNodeEncryptionOptions,
          ),
          ServiceSoftwareOptions: S.optional(AwsElasticsearchDomainServiceSoftwareOptions),
          VPCOptions: S.optional(AwsElasticsearchDomainVPCOptions),
        }),
      ).annotate({
        identifier: "AwsElasticsearchDomainDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ SSEAlgorithm: S.optional(S.String), KMSMasterKeyID: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsS3BucketServerSideEncryptionByDefault",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplyServerSideEncryptionByDefault: S.optional(AwsS3BucketServerSideEncryptionByDefault),
        }),
      ).annotate({
        identifier: "AwsS3BucketServerSideEncryptionRule",
      });
    case 3:
      return S.Array(AwsS3BucketServerSideEncryptionRule);
    case 4:
      return S.suspend(() =>
        S.Struct({ Rules: S.optional(AwsS3BucketServerSideEncryptionRules) }),
      ).annotate({
        identifier: "AwsS3BucketServerSideEncryptionConfiguration",
      });
    case 5:
      return S.suspend(() => S.Struct({ DaysAfterInitiation: S.optional(S.Number) })).annotate({
        identifier:
          "AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Prefix: S.optional(S.String),
          Tag: S.optional(
            AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails,
          ),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails",
      });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Operands: S.optional(
            AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsList,
          ),
          Prefix: S.optional(S.String),
          Tag: S.optional(AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Predicate: S.optional(AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails),
        }),
      ).annotate({
        identifier: "AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Days: S.optional(S.Number), StorageClass: S.optional(S.String) }),
      ).annotate({
        identifier:
          "AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails",
      });
    case 4:
      return S.Array(
        AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails,
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          Date: S.optional(S.String),
          Days: S.optional(S.Number),
          StorageClass: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails",
      });
    case 6:
      return S.Array(AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails);
    case 7:
      return S.suspend(() =>
        S.Struct({
          AbortIncompleteMultipartUpload: S.optional(
            AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails,
          ),
          ExpirationDate: S.optional(S.String),
          ExpirationInDays: S.optional(S.Number),
          ExpiredObjectDeleteMarker: S.optional(S.Boolean),
          Filter: S.optional(AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails),
          ID: S.optional(S.String),
          NoncurrentVersionExpirationInDays: S.optional(S.Number),
          NoncurrentVersionTransitions: S.optional(
            AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList,
          ),
          Prefix: S.optional(S.String),
          Status: S.optional(S.String),
          Transitions: S.optional(AwsS3BucketBucketLifecycleConfigurationRulesTransitionsList),
        }),
      ).annotate({
        identifier: "AwsS3BucketBucketLifecycleConfigurationRulesDetails",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsS3BucketBucketLifecycleConfigurationRulesDetails);
    case 1:
      return S.suspend(() =>
        S.Struct({ Rules: S.optional(AwsS3BucketBucketLifecycleConfigurationRulesList) }),
      ).annotate({
        identifier: "AwsS3BucketBucketLifecycleConfigurationDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          BlockPublicAcls: S.optional(S.Boolean),
          BlockPublicPolicy: S.optional(S.Boolean),
          IgnorePublicAcls: S.optional(S.Boolean),
          RestrictPublicBuckets: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsS3AccountPublicAccessBlockDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DestinationBucketName: S.optional(S.String),
          LogFilePrefix: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsS3BucketLoggingConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Hostname: S.optional(S.String), Protocol: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsS3BucketWebsiteConfigurationRedirectTo",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          HttpErrorCodeReturnedEquals: S.optional(S.String),
          KeyPrefixEquals: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsS3BucketWebsiteConfigurationRoutingRuleCondition",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Hostname: S.optional(S.String),
          HttpRedirectCode: S.optional(S.String),
          Protocol: S.optional(S.String),
          ReplaceKeyPrefixWith: S.optional(S.String),
          ReplaceKeyWith: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsS3BucketWebsiteConfigurationRoutingRuleRedirect",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Condition: S.optional(AwsS3BucketWebsiteConfigurationRoutingRuleCondition),
          Redirect: S.optional(AwsS3BucketWebsiteConfigurationRoutingRuleRedirect),
        }),
      ).annotate({
        identifier: "AwsS3BucketWebsiteConfigurationRoutingRule",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsS3BucketWebsiteConfigurationRoutingRule);
    case 1:
      return S.suspend(() =>
        S.Struct({
          ErrorDocument: S.optional(S.String),
          IndexDocumentSuffix: S.optional(S.String),
          RedirectAllRequestsTo: S.optional(AwsS3BucketWebsiteConfigurationRedirectTo),
          RoutingRules: S.optional(AwsS3BucketWebsiteConfigurationRoutingRules),
        }),
      ).annotate({
        identifier: "AwsS3BucketWebsiteConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(AwsS3BucketNotificationConfigurationS3KeyFilterRuleName),
          Value: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsS3BucketNotificationConfigurationS3KeyFilterRule",
      });
    case 3:
      return S.Array(AwsS3BucketNotificationConfigurationS3KeyFilterRule);
    case 4:
      return S.suspend(() =>
        S.Struct({ FilterRules: S.optional(AwsS3BucketNotificationConfigurationS3KeyFilterRules) }),
      ).annotate({
        identifier: "AwsS3BucketNotificationConfigurationS3KeyFilter",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ S3KeyFilter: S.optional(AwsS3BucketNotificationConfigurationS3KeyFilter) }),
      ).annotate({
        identifier: "AwsS3BucketNotificationConfigurationFilter",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Events: S.optional(AwsS3BucketNotificationConfigurationEvents),
          Filter: S.optional(AwsS3BucketNotificationConfigurationFilter),
          Destination: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsS3BucketNotificationConfigurationDetail",
      });
    case 7:
      return S.Array(AwsS3BucketNotificationConfigurationDetail);
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Configurations: S.optional(AwsS3BucketNotificationConfigurationDetails) }),
      ).annotate({
        identifier: "AwsS3BucketNotificationConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ IsMfaDeleteEnabled: S.optional(S.Boolean), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsS3BucketBucketVersioningConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Days: S.optional(S.Number),
          Mode: S.optional(S.String),
          Years: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          DefaultRetention: S.optional(
            AwsS3BucketObjectLockConfigurationRuleDefaultRetentionDetails,
          ),
        }),
      ).annotate({
        identifier: "AwsS3BucketObjectLockConfigurationRuleDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ObjectLockEnabled: S.optional(S.String),
          Rule: S.optional(AwsS3BucketObjectLockConfigurationRuleDetails),
        }),
      ).annotate({
        identifier: "AwsS3BucketObjectLockConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          OwnerId: S.optional(S.String),
          OwnerName: S.optional(S.String),
          OwnerAccountId: S.optional(S.String),
          CreatedAt: S.optional(S.String),
          ServerSideEncryptionConfiguration: S.optional(
            AwsS3BucketServerSideEncryptionConfiguration,
          ),
          BucketLifecycleConfiguration: S.optional(AwsS3BucketBucketLifecycleConfigurationDetails),
          PublicAccessBlockConfiguration: S.optional(AwsS3AccountPublicAccessBlockDetails),
          AccessControlList: S.optional(S.String),
          BucketLoggingConfiguration: S.optional(AwsS3BucketLoggingConfiguration),
          BucketWebsiteConfiguration: S.optional(AwsS3BucketWebsiteConfiguration),
          BucketNotificationConfiguration: S.optional(AwsS3BucketNotificationConfiguration),
          BucketVersioningConfiguration: S.optional(AwsS3BucketBucketVersioningConfiguration),
          ObjectLockConfiguration: S.optional(AwsS3BucketObjectLockConfiguration),
          Name: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsS3BucketDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          LastModified: S.optional(S.String),
          ETag: S.optional(S.String),
          VersionId: S.optional(S.String),
          ContentType: S.optional(S.String),
          ServerSideEncryption: S.optional(S.String),
          SSEKMSKeyId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsS3ObjectDetails" });
    case 7:
      return S.suspend(() => S.Struct({ AutomaticallyAfterDays: S.optional(S.Number) })).annotate({
        identifier: "AwsSecretsManagerSecretRotationRules",
      });
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RotationRules: S.optional(AwsSecretsManagerSecretRotationRules),
          RotationOccurredWithinFrequency: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          RotationEnabled: S.optional(S.Boolean),
          RotationLambdaArn: S.optional(S.String),
          Deleted: S.optional(S.Boolean),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsSecretsManagerSecretDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ MfaAuthenticated: S.optional(S.Boolean), CreationDate: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsIamAccessKeySessionContextAttributes",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          PrincipalId: S.optional(S.String),
          Arn: S.optional(S.String),
          AccountId: S.optional(S.String),
          UserName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsIamAccessKeySessionContextSessionIssuer",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Attributes: S.optional(AwsIamAccessKeySessionContextAttributes),
          SessionIssuer: S.optional(AwsIamAccessKeySessionContextSessionIssuer),
        }),
      ).annotate({
        identifier: "AwsIamAccessKeySessionContext",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          UserName: S.optional(S.String),
          Status: S.optional(AwsIamAccessKeyStatus),
          CreatedAt: S.optional(S.String),
          PrincipalId: S.optional(S.String),
          PrincipalType: S.optional(S.String),
          PrincipalName: S.optional(S.String),
          AccountId: S.optional(S.String),
          AccessKeyId: S.optional(S.String),
          SessionContext: S.optional(AwsIamAccessKeySessionContext),
        }),
      ).annotate({ identifier: "AwsIamAccessKeyDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({ PolicyName: S.optional(S.String), PolicyArn: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsIamAttachedManagedPolicy",
      });
    case 6:
      return S.Array(AwsIamAttachedManagedPolicy);
    case 7:
      return S.suspend(() =>
        S.Struct({
          PermissionsBoundaryArn: S.optional(S.String),
          PermissionsBoundaryType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsIamPermissionsBoundary",
      });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ PolicyName: S.optional(S.String) })).annotate({
        identifier: "AwsIamUserPolicy",
      });
    case 1:
      return S.Array(AwsIamUserPolicy);
    case 2:
      return S.suspend(() =>
        S.Struct({
          AttachedManagedPolicies: S.optional(AwsIamAttachedManagedPolicyList),
          CreateDate: S.optional(S.String),
          GroupList: S.optional(StringList),
          Path: S.optional(S.String),
          PermissionsBoundary: S.optional(AwsIamPermissionsBoundary),
          UserId: S.optional(S.String),
          UserName: S.optional(S.String),
          UserPolicyList: S.optional(AwsIamUserPolicyList),
        }),
      ).annotate({ identifier: "AwsIamUserDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          VersionId: S.optional(S.String),
          IsDefaultVersion: S.optional(S.Boolean),
          CreateDate: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsIamPolicyVersion" });
    case 4:
      return S.Array(AwsIamPolicyVersion);
    case 5:
      return S.suspend(() =>
        S.Struct({
          AttachmentCount: S.optional(S.Number),
          CreateDate: S.optional(S.String),
          DefaultVersionId: S.optional(S.String),
          Description: S.optional(S.String),
          IsAttachable: S.optional(S.Boolean),
          Path: S.optional(S.String),
          PermissionsBoundaryUsageCount: S.optional(S.Number),
          PolicyId: S.optional(S.String),
          PolicyName: S.optional(S.String),
          PolicyVersionList: S.optional(AwsIamPolicyVersionList),
          UpdateDate: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsIamPolicyDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DetailedMetricsEnabled: S.optional(S.Boolean),
          LoggingLevel: S.optional(S.String),
          DataTraceEnabled: S.optional(S.Boolean),
          ThrottlingBurstLimit: S.optional(S.Number),
          ThrottlingRateLimit: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsApiGatewayV2RouteSettings",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Format: S.optional(S.String), DestinationArn: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsApiGatewayAccessLogSettings",
      });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClientCertificateId: S.optional(S.String),
          CreatedDate: S.optional(S.String),
          Description: S.optional(S.String),
          DefaultRouteSettings: S.optional(AwsApiGatewayV2RouteSettings),
          DeploymentId: S.optional(S.String),
          LastUpdatedDate: S.optional(S.String),
          RouteSettings: S.optional(AwsApiGatewayV2RouteSettings),
          StageName: S.optional(S.String),
          StageVariables: S.optional(FieldMap),
          AccessLogSettings: S.optional(AwsApiGatewayAccessLogSettings),
          AutoDeploy: S.optional(S.Boolean),
          LastDeploymentStatusMessage: S.optional(S.String),
          ApiGatewayManaged: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsApiGatewayV2StageDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AllowOrigins: S.optional(NonEmptyStringList),
          AllowCredentials: S.optional(S.Boolean),
          ExposeHeaders: S.optional(NonEmptyStringList),
          MaxAge: S.optional(S.Number),
          AllowMethods: S.optional(NonEmptyStringList),
          AllowHeaders: S.optional(NonEmptyStringList),
        }),
      ).annotate({ identifier: "AwsCorsConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApiEndpoint: S.optional(S.String),
          ApiId: S.optional(S.String),
          ApiKeySelectionExpression: S.optional(S.String),
          CreatedDate: S.optional(S.String),
          Description: S.optional(S.String),
          Version: S.optional(S.String),
          Name: S.optional(S.String),
          ProtocolType: S.optional(S.String),
          RouteSelectionExpression: S.optional(S.String),
          CorsConfiguration: S.optional(AwsCorsConfiguration),
        }),
      ).annotate({
        identifier: "AwsApiGatewayV2ApiDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ AttributeName: S.optional(S.String), AttributeType: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsDynamoDbTableAttributeDefinition",
      });
    case 4:
      return S.Array(AwsDynamoDbTableAttributeDefinition);
    case 5:
      return S.suspend(() =>
        S.Struct({
          BillingMode: S.optional(S.String),
          LastUpdateToPayPerRequestDateTime: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsDynamoDbTableBillingModeSummary",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AttributeName: S.optional(S.String), KeyType: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsDynamoDbTableKeySchema",
      });
    case 7:
      return S.Array(AwsDynamoDbTableKeySchema);
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NonKeyAttributes: S.optional(StringList),
          ProjectionType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsDynamoDbTableProjection",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LastDecreaseDateTime: S.optional(S.String),
          LastIncreaseDateTime: S.optional(S.String),
          NumberOfDecreasesToday: S.optional(S.Number),
          ReadCapacityUnits: S.optional(S.Number),
          WriteCapacityUnits: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsDynamoDbTableProvisionedThroughput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Backfilling: S.optional(S.Boolean),
          IndexArn: S.optional(S.String),
          IndexName: S.optional(S.String),
          IndexSizeBytes: S.optional(S.Number),
          IndexStatus: S.optional(S.String),
          ItemCount: S.optional(S.Number),
          KeySchema: S.optional(AwsDynamoDbTableKeySchemaList),
          Projection: S.optional(AwsDynamoDbTableProjection),
          ProvisionedThroughput: S.optional(AwsDynamoDbTableProvisionedThroughput),
        }),
      ).annotate({
        identifier: "AwsDynamoDbTableGlobalSecondaryIndex",
      });
    case 3:
      return S.Array(AwsDynamoDbTableGlobalSecondaryIndex);
    case 4:
      return S.suspend(() =>
        S.Struct({
          IndexArn: S.optional(S.String),
          IndexName: S.optional(S.String),
          KeySchema: S.optional(AwsDynamoDbTableKeySchemaList),
          Projection: S.optional(AwsDynamoDbTableProjection),
        }),
      ).annotate({
        identifier: "AwsDynamoDbTableLocalSecondaryIndex",
      });
    case 5:
      return S.Array(AwsDynamoDbTableLocalSecondaryIndex);
    case 6:
      return S.suspend(() => S.Struct({ ReadCapacityUnits: S.optional(S.Number) })).annotate({
        identifier: "AwsDynamoDbTableProvisionedThroughputOverride",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          IndexName: S.optional(S.String),
          ProvisionedThroughputOverride: S.optional(AwsDynamoDbTableProvisionedThroughputOverride),
        }),
      ).annotate({
        identifier: "AwsDynamoDbTableReplicaGlobalSecondaryIndex",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsDynamoDbTableReplicaGlobalSecondaryIndex);
    case 1:
      return S.suspend(() =>
        S.Struct({
          GlobalSecondaryIndexes: S.optional(AwsDynamoDbTableReplicaGlobalSecondaryIndexList),
          KmsMasterKeyId: S.optional(S.String),
          ProvisionedThroughputOverride: S.optional(AwsDynamoDbTableProvisionedThroughputOverride),
          RegionName: S.optional(S.String),
          ReplicaStatus: S.optional(S.String),
          ReplicaStatusDescription: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsDynamoDbTableReplica" });
    case 2:
      return S.Array(AwsDynamoDbTableReplica);
    case 3:
      return S.suspend(() =>
        S.Struct({
          SourceBackupArn: S.optional(S.String),
          SourceTableArn: S.optional(S.String),
          RestoreDateTime: S.optional(S.String),
          RestoreInProgress: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsDynamoDbTableRestoreSummary",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          InaccessibleEncryptionDateTime: S.optional(S.String),
          Status: S.optional(S.String),
          SseType: S.optional(S.String),
          KmsMasterKeyArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsDynamoDbTableSseDescription",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ StreamEnabled: S.optional(S.Boolean), StreamViewType: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsDynamoDbTableStreamSpecification",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AttributeDefinitions: S.optional(AwsDynamoDbTableAttributeDefinitionList),
          BillingModeSummary: S.optional(AwsDynamoDbTableBillingModeSummary),
          CreationDateTime: S.optional(S.String),
          GlobalSecondaryIndexes: S.optional(AwsDynamoDbTableGlobalSecondaryIndexList),
          GlobalTableVersion: S.optional(S.String),
          ItemCount: S.optional(S.Number),
          KeySchema: S.optional(AwsDynamoDbTableKeySchemaList),
          LatestStreamArn: S.optional(S.String),
          LatestStreamLabel: S.optional(S.String),
          LocalSecondaryIndexes: S.optional(AwsDynamoDbTableLocalSecondaryIndexList),
          ProvisionedThroughput: S.optional(AwsDynamoDbTableProvisionedThroughput),
          Replicas: S.optional(AwsDynamoDbTableReplicaList),
          RestoreSummary: S.optional(AwsDynamoDbTableRestoreSummary),
          SseDescription: S.optional(AwsDynamoDbTableSseDescription),
          StreamSpecification: S.optional(AwsDynamoDbTableStreamSpecification),
          TableId: S.optional(S.String),
          TableName: S.optional(S.String),
          TableSizeBytes: S.optional(S.Number),
          TableStatus: S.optional(S.String),
          DeletionProtectionEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AwsDynamoDbTableDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MetricsEnabled: S.optional(S.Boolean),
          LoggingLevel: S.optional(S.String),
          DataTraceEnabled: S.optional(S.Boolean),
          ThrottlingBurstLimit: S.optional(S.Number),
          ThrottlingRateLimit: S.optional(S.Number),
          CachingEnabled: S.optional(S.Boolean),
          CacheTtlInSeconds: S.optional(S.Number),
          CacheDataEncrypted: S.optional(S.Boolean),
          RequireAuthorizationForCacheControl: S.optional(S.Boolean),
          UnauthorizedCacheControlHeaderStrategy: S.optional(S.String),
          HttpMethod: S.optional(S.String),
          ResourcePath: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsApiGatewayMethodSettings",
      });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsApiGatewayMethodSettings);
    case 1:
      return S.suspend(() =>
        S.Struct({
          PercentTraffic: S.optional(S.Number),
          DeploymentId: S.optional(S.String),
          StageVariableOverrides: S.optional(FieldMap),
          UseStageCache: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsApiGatewayCanarySettings",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DeploymentId: S.optional(S.String),
          ClientCertificateId: S.optional(S.String),
          StageName: S.optional(S.String),
          Description: S.optional(S.String),
          CacheClusterEnabled: S.optional(S.Boolean),
          CacheClusterSize: S.optional(S.String),
          CacheClusterStatus: S.optional(S.String),
          MethodSettings: S.optional(AwsApiGatewayMethodSettingsList),
          Variables: S.optional(FieldMap),
          DocumentationVersion: S.optional(S.String),
          AccessLogSettings: S.optional(AwsApiGatewayAccessLogSettings),
          CanarySettings: S.optional(AwsApiGatewayCanarySettings),
          TracingEnabled: S.optional(S.Boolean),
          CreatedDate: S.optional(S.String),
          LastUpdatedDate: S.optional(S.String),
          WebAclArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsApiGatewayStageDetails",
      });
    case 3:
      return S.suspend(() => S.Struct({ Types: S.optional(NonEmptyStringList) })).annotate({
        identifier: "AwsApiGatewayEndpointConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          CreatedDate: S.optional(S.String),
          Version: S.optional(S.String),
          BinaryMediaTypes: S.optional(NonEmptyStringList),
          MinimumCompressionSize: S.optional(S.Number),
          ApiKeySource: S.optional(S.String),
          EndpointConfiguration: S.optional(AwsApiGatewayEndpointConfiguration),
        }),
      ).annotate({
        identifier: "AwsApiGatewayRestApiDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CloudWatchLogsLogGroupArn: S.optional(S.String),
          CloudWatchLogsRoleArn: S.optional(S.String),
          HasCustomEventSelectors: S.optional(S.Boolean),
          HomeRegion: S.optional(S.String),
          IncludeGlobalServiceEvents: S.optional(S.Boolean),
          IsMultiRegionTrail: S.optional(S.Boolean),
          IsOrganizationTrail: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          LogFileValidationEnabled: S.optional(S.Boolean),
          Name: S.optional(S.String),
          S3BucketName: S.optional(S.String),
          S3KeyPrefix: S.optional(S.String),
          SnsTopicArn: S.optional(S.String),
          SnsTopicName: S.optional(S.String),
          TrailArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCloudTrailTrailDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(S.String),
          CompliantCriticalCount: S.optional(S.Number),
          CompliantHighCount: S.optional(S.Number),
          CompliantMediumCount: S.optional(S.Number),
          ExecutionType: S.optional(S.String),
          NonCompliantCriticalCount: S.optional(S.Number),
          CompliantInformationalCount: S.optional(S.Number),
          NonCompliantInformationalCount: S.optional(S.Number),
          CompliantUnspecifiedCount: S.optional(S.Number),
          NonCompliantLowCount: S.optional(S.Number),
          NonCompliantHighCount: S.optional(S.Number),
          CompliantLowCount: S.optional(S.Number),
          ComplianceType: S.optional(S.String),
          PatchBaselineId: S.optional(S.String),
          OverallSeverity: S.optional(S.String),
          NonCompliantMediumCount: S.optional(S.Number),
          NonCompliantUnspecifiedCount: S.optional(S.Number),
          PatchGroup: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsSsmComplianceSummary" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ComplianceSummary: S.optional(AwsSsmComplianceSummary) }),
      ).annotate({ identifier: "AwsSsmPatch" });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Patch: S.optional(AwsSsmPatch) })).annotate({
        identifier: "AwsSsmPatchComplianceDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Type: S.optional(S.String),
          Value: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCertificateManagerCertificateResourceRecord",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.optional(S.String),
          ResourceRecord: S.optional(AwsCertificateManagerCertificateResourceRecord),
          ValidationDomain: S.optional(S.String),
          ValidationEmails: S.optional(StringList),
          ValidationMethod: S.optional(S.String),
          ValidationStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCertificateManagerCertificateDomainValidationOption",
      });
    case 3:
      return S.Array(AwsCertificateManagerCertificateDomainValidationOption);
    case 4:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), OId: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsCertificateManagerCertificateExtendedKeyUsage",
      });
    case 5:
      return S.Array(AwsCertificateManagerCertificateExtendedKeyUsage);
    case 6:
      return S.suspend(() => S.Struct({ Name: S.optional(S.String) })).annotate({
        identifier: "AwsCertificateManagerCertificateKeyUsage",
      });
    case 7:
      return S.Array(AwsCertificateManagerCertificateKeyUsage);
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ CertificateTransparencyLoggingPreference: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsCertificateManagerCertificateOptions",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DomainValidationOptions: S.optional(
            AwsCertificateManagerCertificateDomainValidationOptions,
          ),
          RenewalStatus: S.optional(S.String),
          RenewalStatusReason: S.optional(S.String),
          UpdatedAt: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCertificateManagerCertificateRenewalSummary",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CertificateAuthorityArn: S.optional(S.String),
          CreatedAt: S.optional(S.String),
          DomainName: S.optional(S.String),
          DomainValidationOptions: S.optional(
            AwsCertificateManagerCertificateDomainValidationOptions,
          ),
          ExtendedKeyUsages: S.optional(AwsCertificateManagerCertificateExtendedKeyUsages),
          FailureReason: S.optional(S.String),
          ImportedAt: S.optional(S.String),
          InUseBy: S.optional(StringList),
          IssuedAt: S.optional(S.String),
          Issuer: S.optional(S.String),
          KeyAlgorithm: S.optional(S.String),
          KeyUsages: S.optional(AwsCertificateManagerCertificateKeyUsages),
          NotAfter: S.optional(S.String),
          NotBefore: S.optional(S.String),
          Options: S.optional(AwsCertificateManagerCertificateOptions),
          RenewalEligibility: S.optional(S.String),
          RenewalSummary: S.optional(AwsCertificateManagerCertificateRenewalSummary),
          Serial: S.optional(S.String),
          SignatureAlgorithm: S.optional(S.String),
          Status: S.optional(S.String),
          Subject: S.optional(S.String),
          SubjectAlternativeNames: S.optional(StringList),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCertificateManagerCertificateDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NodeRole: S.optional(S.String),
          PrivateIpAddress: S.optional(S.String),
          PublicIpAddress: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterClusterNode",
      });
    case 4:
      return S.Array(AwsRedshiftClusterClusterNode);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ParameterName: S.optional(S.String),
          ParameterApplyStatus: S.optional(S.String),
          ParameterApplyErrorDescription: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterClusterParameterStatus",
      });
    case 6:
      return S.Array(AwsRedshiftClusterClusterParameterStatus);
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClusterParameterStatusList: S.optional(AwsRedshiftClusterClusterParameterStatusList),
          ParameterApplyStatus: S.optional(S.String),
          ParameterGroupName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterClusterParameterGroup",
      });
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsRedshiftClusterClusterParameterGroup);
    case 1:
      return S.suspend(() =>
        S.Struct({ ClusterSecurityGroupName: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRedshiftClusterClusterSecurityGroup",
      });
    case 2:
      return S.Array(AwsRedshiftClusterClusterSecurityGroup);
    case 3:
      return S.suspend(() =>
        S.Struct({
          DestinationRegion: S.optional(S.String),
          ManualSnapshotRetentionPeriod: S.optional(S.Number),
          RetentionPeriod: S.optional(S.Number),
          SnapshotCopyGrantName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterClusterSnapshotCopyStatus",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DeferMaintenanceEndTime: S.optional(S.String),
          DeferMaintenanceIdentifier: S.optional(S.String),
          DeferMaintenanceStartTime: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterDeferredMaintenanceWindow",
      });
    case 5:
      return S.Array(AwsRedshiftClusterDeferredMaintenanceWindow);
    case 6:
      return S.suspend(() =>
        S.Struct({ ElasticIp: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRedshiftClusterElasticIpStatus",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Address: S.optional(S.String), Port: S.optional(S.Number) }),
      ).annotate({
        identifier: "AwsRedshiftClusterEndpoint",
      });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          HsmClientCertificateIdentifier: S.optional(S.String),
          HsmConfigurationIdentifier: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterHsmStatus",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ApplyStatus: S.optional(S.String), IamRoleArn: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRedshiftClusterIamRole",
      });
    case 2:
      return S.Array(AwsRedshiftClusterIamRole);
    case 3:
      return S.suspend(() =>
        S.Struct({
          AutomatedSnapshotRetentionPeriod: S.optional(S.Number),
          ClusterIdentifier: S.optional(S.String),
          ClusterType: S.optional(S.String),
          ClusterVersion: S.optional(S.String),
          EncryptionType: S.optional(S.String),
          EnhancedVpcRouting: S.optional(S.Boolean),
          MaintenanceTrackName: S.optional(S.String),
          MasterUserPassword: S.optional(S.String),
          NodeType: S.optional(S.String),
          NumberOfNodes: S.optional(S.Number),
          PubliclyAccessible: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterPendingModifiedValues",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ AllowCancelResize: S.optional(S.Boolean), ResizeType: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRedshiftClusterResizeInfo",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CurrentRestoreRateInMegaBytesPerSecond: S.optional(S.Number),
          ElapsedTimeInSeconds: S.optional(S.Number),
          EstimatedTimeToCompletionInSeconds: S.optional(S.Number),
          ProgressInMegaBytes: S.optional(S.Number),
          SnapshotSizeInMegaBytes: S.optional(S.Number),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterRestoreStatus",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Status: S.optional(S.String), VpcSecurityGroupId: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRedshiftClusterVpcSecurityGroup",
      });
    case 7:
      return S.Array(AwsRedshiftClusterVpcSecurityGroup);
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          BucketName: S.optional(S.String),
          LastFailureMessage: S.optional(S.String),
          LastFailureTime: S.optional(S.String),
          LastSuccessfulDeliveryTime: S.optional(S.String),
          LoggingEnabled: S.optional(S.Boolean),
          S3KeyPrefix: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterLoggingStatus",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AllowVersionUpgrade: S.optional(S.Boolean),
          AutomatedSnapshotRetentionPeriod: S.optional(S.Number),
          AvailabilityZone: S.optional(S.String),
          ClusterAvailabilityStatus: S.optional(S.String),
          ClusterCreateTime: S.optional(S.String),
          ClusterIdentifier: S.optional(S.String),
          ClusterNodes: S.optional(AwsRedshiftClusterClusterNodes),
          ClusterParameterGroups: S.optional(AwsRedshiftClusterClusterParameterGroups),
          ClusterPublicKey: S.optional(S.String),
          ClusterRevisionNumber: S.optional(S.String),
          ClusterSecurityGroups: S.optional(AwsRedshiftClusterClusterSecurityGroups),
          ClusterSnapshotCopyStatus: S.optional(AwsRedshiftClusterClusterSnapshotCopyStatus),
          ClusterStatus: S.optional(S.String),
          ClusterSubnetGroupName: S.optional(S.String),
          ClusterVersion: S.optional(S.String),
          DBName: S.optional(S.String),
          DeferredMaintenanceWindows: S.optional(AwsRedshiftClusterDeferredMaintenanceWindows),
          ElasticIpStatus: S.optional(AwsRedshiftClusterElasticIpStatus),
          ElasticResizeNumberOfNodeOptions: S.optional(S.String),
          Encrypted: S.optional(S.Boolean),
          Endpoint: S.optional(AwsRedshiftClusterEndpoint),
          EnhancedVpcRouting: S.optional(S.Boolean),
          ExpectedNextSnapshotScheduleTime: S.optional(S.String),
          ExpectedNextSnapshotScheduleTimeStatus: S.optional(S.String),
          HsmStatus: S.optional(AwsRedshiftClusterHsmStatus),
          IamRoles: S.optional(AwsRedshiftClusterIamRoles),
          KmsKeyId: S.optional(S.String),
          MaintenanceTrackName: S.optional(S.String),
          ManualSnapshotRetentionPeriod: S.optional(S.Number),
          MasterUsername: S.optional(S.String),
          NextMaintenanceWindowStartTime: S.optional(S.String),
          NodeType: S.optional(S.String),
          NumberOfNodes: S.optional(S.Number),
          PendingActions: S.optional(StringList),
          PendingModifiedValues: S.optional(AwsRedshiftClusterPendingModifiedValues),
          PreferredMaintenanceWindow: S.optional(S.String),
          PubliclyAccessible: S.optional(S.Boolean),
          ResizeInfo: S.optional(AwsRedshiftClusterResizeInfo),
          RestoreStatus: S.optional(AwsRedshiftClusterRestoreStatus),
          SnapshotScheduleIdentifier: S.optional(S.String),
          SnapshotScheduleState: S.optional(S.String),
          VpcId: S.optional(S.String),
          VpcSecurityGroups: S.optional(AwsRedshiftClusterVpcSecurityGroups),
          LoggingStatus: S.optional(AwsRedshiftClusterLoggingStatus),
        }),
      ).annotate({
        identifier: "AwsRedshiftClusterDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ InstancePort: S.optional(S.Number), PolicyNames: S.optional(StringList) }),
      ).annotate({
        identifier: "AwsElbLoadBalancerBackendServerDescription",
      });
    case 3:
      return S.Array(AwsElbLoadBalancerBackendServerDescription);
    case 4:
      return S.suspend(() =>
        S.Struct({
          HealthyThreshold: S.optional(S.Number),
          Interval: S.optional(S.Number),
          Target: S.optional(S.String),
          Timeout: S.optional(S.Number),
          UnhealthyThreshold: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsElbLoadBalancerHealthCheck",
      });
    case 5:
      return S.suspend(() => S.Struct({ InstanceId: S.optional(S.String) })).annotate({
        identifier: "AwsElbLoadBalancerInstance",
      });
    case 6:
      return S.Array(AwsElbLoadBalancerInstance);
    case 7:
      return S.suspend(() =>
        S.Struct({
          InstancePort: S.optional(S.Number),
          InstanceProtocol: S.optional(S.String),
          LoadBalancerPort: S.optional(S.Number),
          Protocol: S.optional(S.String),
          SslCertificateId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsElbLoadBalancerListener",
      });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Listener: S.optional(AwsElbLoadBalancerListener),
          PolicyNames: S.optional(StringList),
        }),
      ).annotate({
        identifier: "AwsElbLoadBalancerListenerDescription",
      });
    case 1:
      return S.Array(AwsElbLoadBalancerListenerDescription);
    case 2:
      return S.suspend(() =>
        S.Struct({
          EmitInterval: S.optional(S.Number),
          Enabled: S.optional(S.Boolean),
          S3BucketName: S.optional(S.String),
          S3BucketPrefix: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsElbLoadBalancerAccessLog",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Enabled: S.optional(S.Boolean), Timeout: S.optional(S.Number) }),
      ).annotate({
        identifier: "AwsElbLoadBalancerConnectionDraining",
      });
    case 4:
      return S.suspend(() => S.Struct({ IdleTimeout: S.optional(S.Number) })).annotate({
        identifier: "AwsElbLoadBalancerConnectionSettings",
      });
    case 5:
      return S.Array(AwsElbLoadBalancerAdditionalAttribute);
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccessLog: S.optional(AwsElbLoadBalancerAccessLog),
          ConnectionDraining: S.optional(AwsElbLoadBalancerConnectionDraining),
          ConnectionSettings: S.optional(AwsElbLoadBalancerConnectionSettings),
          CrossZoneLoadBalancing: S.optional(AwsElbLoadBalancerCrossZoneLoadBalancing),
          AdditionalAttributes: S.optional(AwsElbLoadBalancerAdditionalAttributeList),
        }),
      ).annotate({
        identifier: "AwsElbLoadBalancerAttributes",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ CookieName: S.optional(S.String), PolicyName: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsElbAppCookieStickinessPolicy",
      });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsElbAppCookieStickinessPolicy);
    case 1:
      return S.suspend(() =>
        S.Struct({
          CookieExpirationPeriod: S.optional(S.Number),
          PolicyName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsElbLbCookieStickinessPolicy",
      });
    case 2:
      return S.Array(AwsElbLbCookieStickinessPolicy);
    case 3:
      return S.suspend(() =>
        S.Struct({
          AppCookieStickinessPolicies: S.optional(AwsElbAppCookieStickinessPolicies),
          LbCookieStickinessPolicies: S.optional(AwsElbLbCookieStickinessPolicies),
          OtherPolicies: S.optional(StringList),
        }),
      ).annotate({
        identifier: "AwsElbLoadBalancerPolicies",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ GroupName: S.optional(S.String), OwnerAlias: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsElbLoadBalancerSourceSecurityGroup",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZones: S.optional(StringList),
          BackendServerDescriptions: S.optional(AwsElbLoadBalancerBackendServerDescriptions),
          CanonicalHostedZoneName: S.optional(S.String),
          CanonicalHostedZoneNameID: S.optional(S.String),
          CreatedTime: S.optional(S.String),
          DnsName: S.optional(S.String),
          HealthCheck: S.optional(AwsElbLoadBalancerHealthCheck),
          Instances: S.optional(AwsElbLoadBalancerInstances),
          ListenerDescriptions: S.optional(AwsElbLoadBalancerListenerDescriptions),
          LoadBalancerAttributes: S.optional(AwsElbLoadBalancerAttributes),
          LoadBalancerName: S.optional(S.String),
          Policies: S.optional(AwsElbLoadBalancerPolicies),
          Scheme: S.optional(S.String),
          SecurityGroups: S.optional(StringList),
          SourceSecurityGroup: S.optional(AwsElbLoadBalancerSourceSecurityGroup),
          Subnets: S.optional(StringList),
          VpcId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsElbLoadBalancerDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AttachedManagedPolicies: S.optional(AwsIamAttachedManagedPolicyList),
          CreateDate: S.optional(S.String),
          GroupId: S.optional(S.String),
          GroupName: S.optional(S.String),
          GroupPolicyList: S.optional(AwsIamGroupPolicyList),
          Path: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsIamGroupDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          AssumeRolePolicyDocument: S.optional(S.String),
          CreateDate: S.optional(S.String),
          Path: S.optional(S.String),
          RoleId: S.optional(S.String),
          RoleName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsIamInstanceProfileRole",
      });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsIamInstanceProfileRole);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          CreateDate: S.optional(S.String),
          InstanceProfileId: S.optional(S.String),
          InstanceProfileName: S.optional(S.String),
          Path: S.optional(S.String),
          Roles: S.optional(AwsIamInstanceProfileRoles),
        }),
      ).annotate({ identifier: "AwsIamInstanceProfile" });
    case 2:
      return S.Array(AwsIamInstanceProfile);
    case 3:
      return S.suspend(() =>
        S.Struct({
          AssumeRolePolicyDocument: S.optional(S.String),
          AttachedManagedPolicies: S.optional(AwsIamAttachedManagedPolicyList),
          CreateDate: S.optional(S.String),
          InstanceProfileList: S.optional(AwsIamInstanceProfileList),
          PermissionsBoundary: S.optional(AwsIamPermissionsBoundary),
          RoleId: S.optional(S.String),
          RoleName: S.optional(S.String),
          RolePolicyList: S.optional(AwsIamRolePolicyList),
          MaxSessionDuration: S.optional(S.Number),
          Path: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsIamRoleDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AWSAccountId: S.optional(S.String),
          CreationDate: S.optional(S.Number),
          KeyId: S.optional(S.String),
          KeyManager: S.optional(S.String),
          KeyState: S.optional(S.String),
          Origin: S.optional(S.String),
          Description: S.optional(S.String),
          KeyRotationStatus: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AwsKmsKeyDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          S3Bucket: S.optional(S.String),
          S3Key: S.optional(S.String),
          S3ObjectVersion: S.optional(S.String),
          ZipFile: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsLambdaFunctionCode" });
    case 6:
      return S.suspend(() => S.Struct({ TargetArn: S.optional(S.String) })).annotate({
        identifier: "AwsLambdaFunctionDeadLetterConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ErrorCode: S.optional(S.String), Message: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsLambdaFunctionEnvironmentError",
      });
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Variables: S.optional(FieldMap),
          Error: S.optional(AwsLambdaFunctionEnvironmentError),
        }),
      ).annotate({
        identifier: "AwsLambdaFunctionEnvironment",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), CodeSize: S.optional(S.Number) }),
      ).annotate({ identifier: "AwsLambdaFunctionLayer" });
    case 2:
      return S.Array(AwsLambdaFunctionLayer);
    case 3:
      return S.suspend(() => S.Struct({ Mode: S.optional(S.String) })).annotate({
        identifier: "AwsLambdaFunctionTracingConfig",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SecurityGroupIds: S.optional(NonEmptyStringList),
          SubnetIds: S.optional(NonEmptyStringList),
          VpcId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsLambdaFunctionVpcConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Code: S.optional(AwsLambdaFunctionCode),
          CodeSha256: S.optional(S.String),
          DeadLetterConfig: S.optional(AwsLambdaFunctionDeadLetterConfig),
          Environment: S.optional(AwsLambdaFunctionEnvironment),
          FunctionName: S.optional(S.String),
          Handler: S.optional(S.String),
          KmsKeyArn: S.optional(S.String),
          LastModified: S.optional(S.String),
          Layers: S.optional(AwsLambdaFunctionLayerList),
          MasterArn: S.optional(S.String),
          MemorySize: S.optional(S.Number),
          RevisionId: S.optional(S.String),
          Role: S.optional(S.String),
          Runtime: S.optional(S.String),
          Timeout: S.optional(S.Number),
          TracingConfig: S.optional(AwsLambdaFunctionTracingConfig),
          VpcConfig: S.optional(AwsLambdaFunctionVpcConfig),
          Version: S.optional(S.String),
          Architectures: S.optional(NonEmptyStringList),
          PackageType: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsLambdaFunctionDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Version: S.optional(S.Number),
          CompatibleRuntimes: S.optional(NonEmptyStringList),
          CreatedDate: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsLambdaLayerVersionDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          RoleArn: S.optional(S.String),
          FeatureName: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRdsDbInstanceAssociatedRole",
      });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsRdsDbInstanceAssociatedRole);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Address: S.optional(S.String),
          Port: S.optional(S.Number),
          HostedZoneId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsRdsDbInstanceEndpoint" });
    case 2:
      return S.suspend(() =>
        S.Struct({ VpcSecurityGroupId: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRdsDbInstanceVpcSecurityGroup",
      });
    case 3:
      return S.Array(AwsRdsDbInstanceVpcSecurityGroup);
    case 4:
      return S.suspend(() =>
        S.Struct({
          DbParameterGroupName: S.optional(S.String),
          ParameterApplyStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsRdsDbParameterGroup" });
    case 5:
      return S.Array(AwsRdsDbParameterGroup);
    case 6:
      return S.suspend(() =>
        S.Struct({
          SubnetIdentifier: S.optional(S.String),
          SubnetAvailabilityZone: S.optional(AwsRdsDbSubnetGroupSubnetAvailabilityZone),
          SubnetStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRdsDbSubnetGroupSubnet",
      });
    case 7:
      return S.Array(AwsRdsDbSubnetGroupSubnet);
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DbSubnetGroupName: S.optional(S.String),
          DbSubnetGroupDescription: S.optional(S.String),
          VpcId: S.optional(S.String),
          SubnetGroupStatus: S.optional(S.String),
          Subnets: S.optional(AwsRdsDbSubnetGroupSubnets),
          DbSubnetGroupArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsRdsDbSubnetGroup" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LogTypesToEnable: S.optional(StringList),
          LogTypesToDisable: S.optional(StringList),
        }),
      ).annotate({
        identifier: "AwsRdsPendingCloudWatchLogsExports",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "AwsRdsDbProcessorFeature" });
    case 3:
      return S.Array(AwsRdsDbProcessorFeature);
    case 4:
      return S.suspend(() =>
        S.Struct({
          DbInstanceClass: S.optional(S.String),
          AllocatedStorage: S.optional(S.Number),
          MasterUserPassword: S.optional(S.String),
          Port: S.optional(S.Number),
          BackupRetentionPeriod: S.optional(S.Number),
          MultiAZ: S.optional(S.Boolean),
          EngineVersion: S.optional(S.String),
          LicenseModel: S.optional(S.String),
          Iops: S.optional(S.Number),
          DbInstanceIdentifier: S.optional(S.String),
          StorageType: S.optional(S.String),
          CaCertificateIdentifier: S.optional(S.String),
          DbSubnetGroupName: S.optional(S.String),
          PendingCloudWatchLogsExports: S.optional(AwsRdsPendingCloudWatchLogsExports),
          ProcessorFeatures: S.optional(AwsRdsDbProcessorFeatures),
        }),
      ).annotate({
        identifier: "AwsRdsDbPendingModifiedValues",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ OptionGroupName: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRdsDbOptionGroupMembership",
      });
    case 6:
      return S.Array(AwsRdsDbOptionGroupMembership);
    case 7:
      return S.suspend(() =>
        S.Struct({
          StatusType: S.optional(S.String),
          Normal: S.optional(S.Boolean),
          Status: S.optional(S.String),
          Message: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsRdsDbStatusInfo" });
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsRdsDbStatusInfo);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Domain: S.optional(S.String),
          Status: S.optional(S.String),
          Fqdn: S.optional(S.String),
          IamRoleName: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsRdsDbDomainMembership" });
    case 2:
      return S.Array(AwsRdsDbDomainMembership);
    case 3:
      return S.suspend(() =>
        S.Struct({
          AssociatedRoles: S.optional(AwsRdsDbInstanceAssociatedRoles),
          CACertificateIdentifier: S.optional(S.String),
          DBClusterIdentifier: S.optional(S.String),
          DBInstanceIdentifier: S.optional(S.String),
          DBInstanceClass: S.optional(S.String),
          DbInstancePort: S.optional(S.Number),
          DbiResourceId: S.optional(S.String),
          DBName: S.optional(S.String),
          DeletionProtection: S.optional(S.Boolean),
          Endpoint: S.optional(AwsRdsDbInstanceEndpoint),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          IAMDatabaseAuthenticationEnabled: S.optional(S.Boolean),
          InstanceCreateTime: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          PubliclyAccessible: S.optional(S.Boolean),
          StorageEncrypted: S.optional(S.Boolean),
          TdeCredentialArn: S.optional(S.String),
          VpcSecurityGroups: S.optional(AwsRdsDbInstanceVpcSecurityGroups),
          MultiAz: S.optional(S.Boolean),
          EnhancedMonitoringResourceArn: S.optional(S.String),
          DbInstanceStatus: S.optional(S.String),
          MasterUsername: S.optional(S.String),
          AllocatedStorage: S.optional(S.Number),
          PreferredBackupWindow: S.optional(S.String),
          BackupRetentionPeriod: S.optional(S.Number),
          DbSecurityGroups: S.optional(StringList),
          DbParameterGroups: S.optional(AwsRdsDbParameterGroups),
          AvailabilityZone: S.optional(S.String),
          DbSubnetGroup: S.optional(AwsRdsDbSubnetGroup),
          PreferredMaintenanceWindow: S.optional(S.String),
          PendingModifiedValues: S.optional(AwsRdsDbPendingModifiedValues),
          LatestRestorableTime: S.optional(S.String),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
          ReadReplicaSourceDBInstanceIdentifier: S.optional(S.String),
          ReadReplicaDBInstanceIdentifiers: S.optional(StringList),
          ReadReplicaDBClusterIdentifiers: S.optional(StringList),
          LicenseModel: S.optional(S.String),
          Iops: S.optional(S.Number),
          OptionGroupMemberships: S.optional(AwsRdsDbOptionGroupMemberships),
          CharacterSetName: S.optional(S.String),
          SecondaryAvailabilityZone: S.optional(S.String),
          StatusInfos: S.optional(AwsRdsDbStatusInfos),
          StorageType: S.optional(S.String),
          DomainMemberships: S.optional(AwsRdsDbDomainMemberships),
          CopyTagsToSnapshot: S.optional(S.Boolean),
          MonitoringInterval: S.optional(S.Number),
          MonitoringRoleArn: S.optional(S.String),
          PromotionTier: S.optional(S.Number),
          Timezone: S.optional(S.String),
          PerformanceInsightsEnabled: S.optional(S.Boolean),
          PerformanceInsightsKmsKeyId: S.optional(S.String),
          PerformanceInsightsRetentionPeriod: S.optional(S.Number),
          EnabledCloudWatchLogsExports: S.optional(StringList),
          ProcessorFeatures: S.optional(AwsRdsDbProcessorFeatures),
          ListenerEndpoint: S.optional(AwsRdsDbInstanceEndpoint),
          MaxAllocatedStorage: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AwsRdsDbInstanceDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Endpoint: S.optional(S.String), Protocol: S.optional(S.String) }),
      ).annotate({ identifier: "AwsSnsTopicSubscription" });
    case 5:
      return S.Array(AwsSnsTopicSubscription);
    case 6:
      return S.suspend(() =>
        S.Struct({
          KmsMasterKeyId: S.optional(S.String),
          Subscription: S.optional(AwsSnsTopicSubscriptionList),
          TopicName: S.optional(S.String),
          Owner: S.optional(S.String),
          SqsSuccessFeedbackRoleArn: S.optional(S.String),
          SqsFailureFeedbackRoleArn: S.optional(S.String),
          ApplicationSuccessFeedbackRoleArn: S.optional(S.String),
          FirehoseSuccessFeedbackRoleArn: S.optional(S.String),
          FirehoseFailureFeedbackRoleArn: S.optional(S.String),
          HttpSuccessFeedbackRoleArn: S.optional(S.String),
          HttpFailureFeedbackRoleArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsSnsTopicDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          KmsDataKeyReusePeriodSeconds: S.optional(S.Number),
          KmsMasterKeyId: S.optional(S.String),
          QueueName: S.optional(S.String),
          DeadLetterTargetArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsSqsQueueDetails" });
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Type: S.optional(S.String) })).annotate({
        identifier: "WafAction",
      });
    case 1:
      return S.suspend(() => S.Struct({ RuleId: S.optional(S.String) })).annotate({
        identifier: "WafExcludedRule",
      });
    case 2:
      return S.Array(WafExcludedRule);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(WafAction),
          ExcludedRules: S.optional(WafExcludedRuleList),
          OverrideAction: S.optional(WafOverrideAction),
          Priority: S.optional(S.Number),
          RuleId: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsWafWebAclRule" });
    case 4:
      return S.Array(AwsWafWebAclRule);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          DefaultAction: S.optional(S.String),
          Rules: S.optional(AwsWafWebAclRuleList),
          WebAclId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsWafWebAclDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DbSnapshotIdentifier: S.optional(S.String),
          DbInstanceIdentifier: S.optional(S.String),
          SnapshotCreateTime: S.optional(S.String),
          Engine: S.optional(S.String),
          AllocatedStorage: S.optional(S.Number),
          Status: S.optional(S.String),
          Port: S.optional(S.Number),
          AvailabilityZone: S.optional(S.String),
          VpcId: S.optional(S.String),
          InstanceCreateTime: S.optional(S.String),
          MasterUsername: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          LicenseModel: S.optional(S.String),
          SnapshotType: S.optional(S.String),
          Iops: S.optional(S.Number),
          OptionGroupName: S.optional(S.String),
          PercentProgress: S.optional(S.Number),
          SourceRegion: S.optional(S.String),
          SourceDbSnapshotIdentifier: S.optional(S.String),
          StorageType: S.optional(S.String),
          TdeCredentialArn: S.optional(S.String),
          Encrypted: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          Timezone: S.optional(S.String),
          IamDatabaseAuthenticationEnabled: S.optional(S.Boolean),
          ProcessorFeatures: S.optional(AwsRdsDbProcessorFeatures),
          DbiResourceId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsRdsDbSnapshotDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AttributeName: S.optional(S.String),
          AttributeValues: S.optional(NonEmptyStringList),
        }),
      ).annotate({
        identifier: "AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute",
      });
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsRdsDbClusterSnapshotDbClusterSnapshotAttribute);
    case 1:
      return S.suspend(() =>
        S.Struct({
          AvailabilityZones: S.optional(StringList),
          SnapshotCreateTime: S.optional(S.String),
          Engine: S.optional(S.String),
          AllocatedStorage: S.optional(S.Number),
          Status: S.optional(S.String),
          Port: S.optional(S.Number),
          VpcId: S.optional(S.String),
          ClusterCreateTime: S.optional(S.String),
          MasterUsername: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          LicenseModel: S.optional(S.String),
          SnapshotType: S.optional(S.String),
          PercentProgress: S.optional(S.Number),
          StorageEncrypted: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          DbClusterIdentifier: S.optional(S.String),
          DbClusterSnapshotIdentifier: S.optional(S.String),
          IamDatabaseAuthenticationEnabled: S.optional(S.Boolean),
          DbClusterSnapshotAttributes: S.optional(
            AwsRdsDbClusterSnapshotDbClusterSnapshotAttributes,
          ),
        }),
      ).annotate({
        identifier: "AwsRdsDbClusterSnapshotDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ RoleArn: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRdsDbClusterAssociatedRole",
      });
    case 3:
      return S.Array(AwsRdsDbClusterAssociatedRole);
    case 4:
      return S.suspend(() =>
        S.Struct({ DbClusterOptionGroupName: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRdsDbClusterOptionGroupMembership",
      });
    case 5:
      return S.Array(AwsRdsDbClusterOptionGroupMembership);
    case 6:
      return S.suspend(() =>
        S.Struct({
          IsClusterWriter: S.optional(S.Boolean),
          PromotionTier: S.optional(S.Number),
          DbInstanceIdentifier: S.optional(S.String),
          DbClusterParameterGroupStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsRdsDbClusterMember" });
    case 7:
      return S.Array(AwsRdsDbClusterMember);
  }
}
function __c51(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AllocatedStorage: S.optional(S.Number),
          AvailabilityZones: S.optional(StringList),
          BackupRetentionPeriod: S.optional(S.Number),
          DatabaseName: S.optional(S.String),
          Status: S.optional(S.String),
          Endpoint: S.optional(S.String),
          ReaderEndpoint: S.optional(S.String),
          CustomEndpoints: S.optional(StringList),
          MultiAz: S.optional(S.Boolean),
          Engine: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          Port: S.optional(S.Number),
          MasterUsername: S.optional(S.String),
          PreferredBackupWindow: S.optional(S.String),
          PreferredMaintenanceWindow: S.optional(S.String),
          ReadReplicaIdentifiers: S.optional(StringList),
          VpcSecurityGroups: S.optional(AwsRdsDbInstanceVpcSecurityGroups),
          HostedZoneId: S.optional(S.String),
          StorageEncrypted: S.optional(S.Boolean),
          KmsKeyId: S.optional(S.String),
          DbClusterResourceId: S.optional(S.String),
          AssociatedRoles: S.optional(AwsRdsDbClusterAssociatedRoles),
          ClusterCreateTime: S.optional(S.String),
          EnabledCloudWatchLogsExports: S.optional(StringList),
          EngineMode: S.optional(S.String),
          DeletionProtection: S.optional(S.Boolean),
          HttpEndpointEnabled: S.optional(S.Boolean),
          ActivityStreamStatus: S.optional(S.String),
          CopyTagsToSnapshot: S.optional(S.Boolean),
          CrossAccountClone: S.optional(S.Boolean),
          DomainMemberships: S.optional(AwsRdsDbDomainMemberships),
          DbClusterParameterGroup: S.optional(S.String),
          DbSubnetGroup: S.optional(S.String),
          DbClusterOptionGroupMemberships: S.optional(AwsRdsDbClusterOptionGroupMemberships),
          DbClusterIdentifier: S.optional(S.String),
          DbClusterMembers: S.optional(AwsRdsDbClusterMembers),
          IamDatabaseAuthenticationEnabled: S.optional(S.Boolean),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AwsRdsDbClusterDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsClusterClusterSettingsDetails",
      });
    case 2:
      return S.Array(AwsEcsClusterClusterSettingsDetails);
    case 3:
      return S.suspend(() =>
        S.Struct({
          CloudWatchEncryptionEnabled: S.optional(S.Boolean),
          CloudWatchLogGroupName: S.optional(S.String),
          S3BucketName: S.optional(S.String),
          S3EncryptionEnabled: S.optional(S.Boolean),
          S3KeyPrefix: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          KmsKeyId: S.optional(S.String),
          LogConfiguration: S.optional(
            AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails,
          ),
          Logging: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsClusterConfigurationExecuteCommandConfigurationDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ExecuteCommandConfiguration: S.optional(
            AwsEcsClusterConfigurationExecuteCommandConfigurationDetails,
          ),
        }),
      ).annotate({
        identifier: "AwsEcsClusterConfigurationDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Base: S.optional(S.Number),
          CapacityProvider: S.optional(S.String),
          Weight: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsEcsClusterDefaultCapacityProviderStrategyDetails",
      });
    case 7:
      return S.Array(AwsEcsClusterDefaultCapacityProviderStrategyDetails);
  }
}
function __c52(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClusterArn: S.optional(S.String),
          ActiveServicesCount: S.optional(S.Number),
          CapacityProviders: S.optional(NonEmptyStringList),
          ClusterSettings: S.optional(AwsEcsClusterClusterSettingsList),
          Configuration: S.optional(AwsEcsClusterConfigurationDetails),
          DefaultCapacityProviderStrategy: S.optional(
            AwsEcsClusterDefaultCapacityProviderStrategyList,
          ),
          ClusterName: S.optional(S.String),
          RegisteredContainerInstancesCount: S.optional(S.Number),
          RunningTasksCount: S.optional(S.Number),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEcsClusterDetails" });
    case 1:
      return S.suspend(() =>
        S.Struct({ SourceVolume: S.optional(S.String), ContainerPath: S.optional(S.String) }),
      ).annotate({ identifier: "AwsMountPoint" });
    case 2:
      return S.Array(AwsMountPoint);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Image: S.optional(S.String),
          MountPoints: S.optional(AwsMountPointList),
          Privileged: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "AwsEcsContainerDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Condition: S.optional(S.String), ContainerName: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails",
      });
    case 5:
      return S.Array(AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails);
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails",
      });
    case 7:
      return S.Array(AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails);
  }
}
function __c53(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails",
      });
    case 1:
      return S.Array(AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails);
    case 2:
      return S.suspend(() =>
        S.Struct({ Hostname: S.optional(S.String), IpAddress: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails",
      });
    case 3:
      return S.Array(AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails);
    case 4:
      return S.suspend(() =>
        S.Struct({ Options: S.optional(FieldMap), Type: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Command: S.optional(NonEmptyStringList),
          Interval: S.optional(S.Number),
          Retries: S.optional(S.Number),
          StartPeriod: S.optional(S.Number),
          Timeout: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Add: S.optional(NonEmptyStringList), Drop: S.optional(NonEmptyStringList) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ContainerPath: S.optional(S.String),
          HostPath: S.optional(S.String),
          Permissions: S.optional(NonEmptyStringList),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails",
      });
  }
}
function __c54(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails);
    case 1:
      return S.suspend(() =>
        S.Struct({
          ContainerPath: S.optional(S.String),
          MountOptions: S.optional(NonEmptyStringList),
          Size: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails",
      });
    case 2:
      return S.Array(AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Capabilities: S.optional(
            AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails,
          ),
          Devices: S.optional(AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList),
          InitProcessEnabled: S.optional(S.Boolean),
          MaxSwap: S.optional(S.Number),
          SharedMemorySize: S.optional(S.Number),
          Swappiness: S.optional(S.Number),
          Tmpfs: S.optional(AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), ValueFrom: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails",
      });
    case 5:
      return S.Array(AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails);
    case 6:
      return S.suspend(() =>
        S.Struct({
          LogDriver: S.optional(S.String),
          Options: S.optional(FieldMap),
          SecretOptions: S.optional(
            AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList,
          ),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ContainerPath: S.optional(S.String),
          ReadOnly: S.optional(S.Boolean),
          SourceVolume: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails",
      });
  }
}
function __c55(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails);
    case 1:
      return S.suspend(() =>
        S.Struct({
          ContainerPort: S.optional(S.Number),
          HostPort: S.optional(S.Number),
          Protocol: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails",
      });
    case 2:
      return S.Array(AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails);
    case 3:
      return S.suspend(() => S.Struct({ CredentialsParameter: S.optional(S.String) })).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails",
      });
    case 4:
      return S.Array(AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails);
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), ValueFrom: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails",
      });
    case 6:
      return S.Array(AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails);
    case 7:
      return S.suspend(() =>
        S.Struct({ Namespace: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails",
      });
  }
}
function __c56(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails);
    case 1:
      return S.suspend(() =>
        S.Struct({
          HardLimit: S.optional(S.Number),
          Name: S.optional(S.String),
          SoftLimit: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails",
      });
    case 2:
      return S.Array(AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails);
    case 3:
      return S.suspend(() =>
        S.Struct({ ReadOnly: S.optional(S.Boolean), SourceContainer: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails",
      });
    case 4:
      return S.Array(AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Command: S.optional(NonEmptyStringList),
          Cpu: S.optional(S.Number),
          DependsOn: S.optional(AwsEcsTaskDefinitionContainerDefinitionsDependsOnList),
          DisableNetworking: S.optional(S.Boolean),
          DnsSearchDomains: S.optional(NonEmptyStringList),
          DnsServers: S.optional(NonEmptyStringList),
          DockerLabels: S.optional(FieldMap),
          DockerSecurityOptions: S.optional(NonEmptyStringList),
          EntryPoint: S.optional(NonEmptyStringList),
          Environment: S.optional(AwsEcsTaskDefinitionContainerDefinitionsEnvironmentList),
          EnvironmentFiles: S.optional(
            AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList,
          ),
          Essential: S.optional(S.Boolean),
          ExtraHosts: S.optional(AwsEcsTaskDefinitionContainerDefinitionsExtraHostsList),
          FirelensConfiguration: S.optional(
            AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails,
          ),
          HealthCheck: S.optional(AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails),
          Hostname: S.optional(S.String),
          Image: S.optional(S.String),
          Interactive: S.optional(S.Boolean),
          Links: S.optional(NonEmptyStringList),
          LinuxParameters: S.optional(
            AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails,
          ),
          LogConfiguration: S.optional(
            AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails,
          ),
          Memory: S.optional(S.Number),
          MemoryReservation: S.optional(S.Number),
          MountPoints: S.optional(AwsEcsTaskDefinitionContainerDefinitionsMountPointsList),
          Name: S.optional(S.String),
          PortMappings: S.optional(AwsEcsTaskDefinitionContainerDefinitionsPortMappingsList),
          Privileged: S.optional(S.Boolean),
          PseudoTerminal: S.optional(S.Boolean),
          ReadonlyRootFilesystem: S.optional(S.Boolean),
          RepositoryCredentials: S.optional(
            AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails,
          ),
          ResourceRequirements: S.optional(
            AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsList,
          ),
          Secrets: S.optional(AwsEcsTaskDefinitionContainerDefinitionsSecretsList),
          StartTimeout: S.optional(S.Number),
          StopTimeout: S.optional(S.Number),
          SystemControls: S.optional(AwsEcsTaskDefinitionContainerDefinitionsSystemControlsList),
          Ulimits: S.optional(AwsEcsTaskDefinitionContainerDefinitionsUlimitsList),
          User: S.optional(S.String),
          VolumesFrom: S.optional(AwsEcsTaskDefinitionContainerDefinitionsVolumesFromList),
          WorkingDirectory: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionContainerDefinitionsDetails",
      });
    case 6:
      return S.Array(AwsEcsTaskDefinitionContainerDefinitionsDetails);
    case 7:
      return S.suspend(() =>
        S.Struct({ DeviceName: S.optional(S.String), DeviceType: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionInferenceAcceleratorsDetails",
      });
  }
}
function __c57(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsEcsTaskDefinitionInferenceAcceleratorsDetails);
    case 1:
      return S.suspend(() =>
        S.Struct({ Expression: S.optional(S.String), Type: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionPlacementConstraintsDetails",
      });
    case 2:
      return S.Array(AwsEcsTaskDefinitionPlacementConstraintsDetails);
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails",
      });
    case 4:
      return S.Array(AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ContainerName: S.optional(S.String),
          ProxyConfigurationProperties: S.optional(
            AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList,
          ),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionProxyConfigurationDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Autoprovision: S.optional(S.Boolean),
          Driver: S.optional(S.String),
          DriverOpts: S.optional(FieldMap),
          Labels: S.optional(FieldMap),
          Scope: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ AccessPointId: S.optional(S.String), Iam: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails",
      });
  }
}
function __c58(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AuthorizationConfig: S.optional(
            AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails,
          ),
          FilesystemId: S.optional(S.String),
          RootDirectory: S.optional(S.String),
          TransitEncryption: S.optional(S.String),
          TransitEncryptionPort: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails",
      });
    case 1:
      return S.suspend(() => S.Struct({ SourcePath: S.optional(S.String) })).annotate({
        identifier: "AwsEcsTaskDefinitionVolumesHostDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DockerVolumeConfiguration: S.optional(
            AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails,
          ),
          EfsVolumeConfiguration: S.optional(
            AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails,
          ),
          Host: S.optional(AwsEcsTaskDefinitionVolumesHostDetails),
          Name: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionVolumesDetails",
      });
    case 3:
      return S.Array(AwsEcsTaskDefinitionVolumesDetails);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ContainerDefinitions: S.optional(AwsEcsTaskDefinitionContainerDefinitionsList),
          Cpu: S.optional(S.String),
          ExecutionRoleArn: S.optional(S.String),
          Family: S.optional(S.String),
          InferenceAccelerators: S.optional(AwsEcsTaskDefinitionInferenceAcceleratorsList),
          IpcMode: S.optional(S.String),
          Memory: S.optional(S.String),
          NetworkMode: S.optional(S.String),
          PidMode: S.optional(S.String),
          PlacementConstraints: S.optional(AwsEcsTaskDefinitionPlacementConstraintsList),
          ProxyConfiguration: S.optional(AwsEcsTaskDefinitionProxyConfigurationDetails),
          RequiresCompatibilities: S.optional(NonEmptyStringList),
          TaskRoleArn: S.optional(S.String),
          Volumes: S.optional(AwsEcsTaskDefinitionVolumesList),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsTaskDefinitionDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), MountPath: S.optional(S.String) }),
      ).annotate({ identifier: "VolumeMount" });
    case 6:
      return S.Array(VolumeMount);
    case 7:
      return S.suspend(() =>
        S.Struct({
          ContainerRuntime: S.optional(S.String),
          Name: S.optional(S.String),
          ImageId: S.optional(S.String),
          ImageName: S.optional(S.String),
          LaunchedAt: S.optional(S.String),
          VolumeMounts: S.optional(VolumeMountList),
          Privileged: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "ContainerDetails" });
  }
}
function __c59(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CustSubscriptionId: S.optional(S.String),
          CustomerAwsId: S.optional(S.String),
          Enabled: S.optional(S.Boolean),
          EventCategoriesList: S.optional(NonEmptyStringList),
          EventSubscriptionArn: S.optional(S.String),
          SnsTopicArn: S.optional(S.String),
          SourceIdsList: S.optional(NonEmptyStringList),
          SourceType: S.optional(S.String),
          Status: S.optional(S.String),
          SubscriptionCreationTime: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRdsEventSubscriptionDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Enable: S.optional(S.Boolean), Rollback: S.optional(S.Boolean) }),
      ).annotate({
        identifier: "AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DeploymentCircuitBreaker: S.optional(
            AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails,
          ),
          MaximumPercent: S.optional(S.Number),
          MinimumHealthyPercent: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsEcsServiceDeploymentConfigurationDetails",
      });
    case 3:
      return S.suspend(() => S.Struct({ Type: S.optional(S.String) })).annotate({
        identifier: "AwsEcsServiceDeploymentControllerDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ContainerName: S.optional(S.String),
          ContainerPort: S.optional(S.Number),
          LoadBalancerName: S.optional(S.String),
          TargetGroupArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsServiceLoadBalancersDetails",
      });
    case 5:
      return S.Array(AwsEcsServiceLoadBalancersDetails);
    case 6:
      return S.suspend(() =>
        S.Struct({
          AssignPublicIp: S.optional(S.String),
          SecurityGroups: S.optional(NonEmptyStringList),
          Subnets: S.optional(NonEmptyStringList),
        }),
      ).annotate({
        identifier: "AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AwsVpcConfiguration: S.optional(
            AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails,
          ),
        }),
      ).annotate({
        identifier: "AwsEcsServiceNetworkConfigurationDetails",
      });
  }
}
function __c60(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Field: S.optional(S.String), Type: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcsServicePlacementStrategiesDetails",
      });
    case 1:
      return S.Array(AwsEcsServicePlacementStrategiesDetails);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ContainerName: S.optional(S.String),
          ContainerPort: S.optional(S.Number),
          Port: S.optional(S.Number),
          RegistryArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcsServiceServiceRegistriesDetails",
      });
    case 3:
      return S.Array(AwsEcsServiceServiceRegistriesDetails);
    case 4:
      return S.suspend(() =>
        S.Struct({
          CapacityProviderStrategy: S.optional(AwsEcsServiceCapacityProviderStrategyList),
          Cluster: S.optional(S.String),
          DeploymentConfiguration: S.optional(AwsEcsServiceDeploymentConfigurationDetails),
          DeploymentController: S.optional(AwsEcsServiceDeploymentControllerDetails),
          DesiredCount: S.optional(S.Number),
          EnableEcsManagedTags: S.optional(S.Boolean),
          EnableExecuteCommand: S.optional(S.Boolean),
          HealthCheckGracePeriodSeconds: S.optional(S.Number),
          LaunchType: S.optional(S.String),
          LoadBalancers: S.optional(AwsEcsServiceLoadBalancersList),
          Name: S.optional(S.String),
          NetworkConfiguration: S.optional(AwsEcsServiceNetworkConfigurationDetails),
          PlacementConstraints: S.optional(AwsEcsServicePlacementConstraintsList),
          PlacementStrategies: S.optional(AwsEcsServicePlacementStrategiesList),
          PlatformVersion: S.optional(S.String),
          PropagateTags: S.optional(S.String),
          Role: S.optional(S.String),
          SchedulingStrategy: S.optional(S.String),
          ServiceArn: S.optional(S.String),
          ServiceName: S.optional(S.String),
          ServiceRegistries: S.optional(AwsEcsServiceServiceRegistriesList),
          TaskDefinition: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEcsServiceDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DeleteOnTermination: S.optional(S.Boolean),
          Encrypted: S.optional(S.Boolean),
          Iops: S.optional(S.Number),
          SnapshotId: S.optional(S.String),
          VolumeSize: S.optional(S.Number),
          VolumeType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DeviceName: S.optional(S.String),
          Ebs: S.optional(AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails),
          NoDevice: S.optional(S.Boolean),
          VirtualName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails",
      });
    case 7:
      return S.Array(AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails);
  }
}
function __c61(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Enabled: S.optional(S.Boolean) })).annotate({
        identifier: "AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          HttpEndpoint: S.optional(S.String),
          HttpPutResponseHopLimit: S.optional(S.Number),
          HttpTokens: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAutoScalingLaunchConfigurationMetadataOptions",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AssociatePublicIpAddress: S.optional(S.Boolean),
          BlockDeviceMappings: S.optional(AwsAutoScalingLaunchConfigurationBlockDeviceMappingsList),
          ClassicLinkVpcId: S.optional(S.String),
          ClassicLinkVpcSecurityGroups: S.optional(NonEmptyStringList),
          CreatedTime: S.optional(S.String),
          EbsOptimized: S.optional(S.Boolean),
          IamInstanceProfile: S.optional(S.String),
          ImageId: S.optional(S.String),
          InstanceMonitoring: S.optional(
            AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails,
          ),
          InstanceType: S.optional(S.String),
          KernelId: S.optional(S.String),
          KeyName: S.optional(S.String),
          LaunchConfigurationName: S.optional(S.String),
          PlacementTenancy: S.optional(S.String),
          RamdiskId: S.optional(S.String),
          SecurityGroups: S.optional(NonEmptyStringList),
          SpotPrice: S.optional(S.String),
          UserData: S.optional(S.String),
          MetadataOptions: S.optional(AwsAutoScalingLaunchConfigurationMetadataOptions),
        }),
      ).annotate({
        identifier: "AwsAutoScalingLaunchConfigurationDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AcceptedRouteCount: S.optional(S.Number),
          CertificateArn: S.optional(S.String),
          LastStatusChange: S.optional(S.String),
          OutsideIpAddress: S.optional(S.String),
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2VpnConnectionVgwTelemetryDetails",
      });
    case 4:
      return S.Array(AwsEc2VpnConnectionVgwTelemetryDetails);
    case 5:
      return S.suspend(() =>
        S.Struct({
          DpdTimeoutSeconds: S.optional(S.Number),
          IkeVersions: S.optional(NonEmptyStringList),
          OutsideIpAddress: S.optional(S.String),
          Phase1DhGroupNumbers: S.optional(IntegerList),
          Phase1EncryptionAlgorithms: S.optional(NonEmptyStringList),
          Phase1IntegrityAlgorithms: S.optional(NonEmptyStringList),
          Phase1LifetimeSeconds: S.optional(S.Number),
          Phase2DhGroupNumbers: S.optional(IntegerList),
          Phase2EncryptionAlgorithms: S.optional(NonEmptyStringList),
          Phase2IntegrityAlgorithms: S.optional(NonEmptyStringList),
          Phase2LifetimeSeconds: S.optional(S.Number),
          PreSharedKey: S.optional(S.String),
          RekeyFuzzPercentage: S.optional(S.Number),
          RekeyMarginTimeSeconds: S.optional(S.Number),
          ReplayWindowSize: S.optional(S.Number),
          TunnelInsideCidr: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2VpnConnectionOptionsTunnelOptionsDetails",
      });
    case 6:
      return S.Array(AwsEc2VpnConnectionOptionsTunnelOptionsDetails);
    case 7:
      return S.suspend(() =>
        S.Struct({
          StaticRoutesOnly: S.optional(S.Boolean),
          TunnelOptions: S.optional(AwsEc2VpnConnectionOptionsTunnelOptionsList),
        }),
      ).annotate({
        identifier: "AwsEc2VpnConnectionOptionsDetails",
      });
  }
}
function __c62(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DestinationCidrBlock: S.optional(S.String), State: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2VpnConnectionRoutesDetails",
      });
    case 1:
      return S.Array(AwsEc2VpnConnectionRoutesDetails);
    case 2:
      return S.suspend(() =>
        S.Struct({
          VpnConnectionId: S.optional(S.String),
          State: S.optional(S.String),
          CustomerGatewayId: S.optional(S.String),
          CustomerGatewayConfiguration: S.optional(S.String),
          Type: S.optional(S.String),
          VpnGatewayId: S.optional(S.String),
          Category: S.optional(S.String),
          VgwTelemetry: S.optional(AwsEc2VpnConnectionVgwTelemetryList),
          Options: S.optional(AwsEc2VpnConnectionOptionsDetails),
          Routes: S.optional(AwsEc2VpnConnectionRoutesList),
          TransitGatewayId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2VpnConnectionDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RegistryId: S.optional(S.String),
          RepositoryName: S.optional(S.String),
          Architecture: S.optional(S.String),
          ImageDigest: S.optional(S.String),
          ImageTags: S.optional(NonEmptyStringList),
          ImagePublishedAt: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEcrContainerImageDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Enabled: S.optional(S.Boolean), KmsKeyId: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AutomatedUpdateDate: S.optional(S.String),
          Cancellable: S.optional(S.Boolean),
          CurrentVersion: S.optional(S.String),
          Description: S.optional(S.String),
          NewVersion: S.optional(S.String),
          UpdateAvailable: S.optional(S.Boolean),
          UpdateStatus: S.optional(S.String),
          OptionalDeployment: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          InstanceCount: S.optional(S.Number),
          WarmEnabled: S.optional(S.Boolean),
          WarmCount: S.optional(S.Number),
          DedicatedMasterEnabled: S.optional(S.Boolean),
          ZoneAwarenessConfig: S.optional(
            AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails,
          ),
          DedicatedMasterCount: S.optional(S.Number),
          InstanceType: S.optional(S.String),
          WarmType: S.optional(S.String),
          ZoneAwarenessEnabled: S.optional(S.Boolean),
          DedicatedMasterType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsOpenSearchServiceDomainClusterConfigDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CustomEndpointCertificateArn: S.optional(S.String),
          CustomEndpointEnabled: S.optional(S.Boolean),
          EnforceHTTPS: S.optional(S.Boolean),
          CustomEndpoint: S.optional(S.String),
          TLSSecurityPolicy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsOpenSearchServiceDomainDomainEndpointOptionsDetails",
      });
  }
}
function __c63(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SecurityGroupIds: S.optional(NonEmptyStringList),
          SubnetIds: S.optional(NonEmptyStringList),
        }),
      ).annotate({
        identifier: "AwsOpenSearchServiceDomainVpcOptionsDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MasterUserArn: S.optional(S.String),
          MasterUserName: S.optional(S.String),
          MasterUserPassword: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsOpenSearchServiceDomainMasterUserOptionsDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          InternalUserDatabaseEnabled: S.optional(S.Boolean),
          MasterUserOptions: S.optional(AwsOpenSearchServiceDomainMasterUserOptionsDetails),
        }),
      ).annotate({
        identifier: "AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          AccessPolicies: S.optional(S.String),
          DomainName: S.optional(S.String),
          Id: S.optional(S.String),
          DomainEndpoint: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          EncryptionAtRestOptions: S.optional(
            AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails,
          ),
          NodeToNodeEncryptionOptions: S.optional(
            AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails,
          ),
          ServiceSoftwareOptions: S.optional(
            AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails,
          ),
          ClusterConfig: S.optional(AwsOpenSearchServiceDomainClusterConfigDetails),
          DomainEndpointOptions: S.optional(AwsOpenSearchServiceDomainDomainEndpointOptionsDetails),
          VpcOptions: S.optional(AwsOpenSearchServiceDomainVpcOptionsDetails),
          LogPublishingOptions: S.optional(AwsOpenSearchServiceDomainLogPublishingOptionsDetails),
          DomainEndpoints: S.optional(FieldMap),
          AdvancedSecurityOptions: S.optional(
            AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails,
          ),
        }),
      ).annotate({
        identifier: "AwsOpenSearchServiceDomainDetails",
      });
    case 4:
      return S.suspend(() => S.Struct({ ServiceType: S.optional(S.String) })).annotate({
        identifier: "AwsEc2VpcEndpointServiceServiceTypeDetails",
      });
    case 5:
      return S.Array(AwsEc2VpcEndpointServiceServiceTypeDetails);
    case 6:
      return S.suspend(() =>
        S.Struct({
          AcceptanceRequired: S.optional(S.Boolean),
          AvailabilityZones: S.optional(NonEmptyStringList),
          BaseEndpointDnsNames: S.optional(NonEmptyStringList),
          ManagesVpcEndpoints: S.optional(S.Boolean),
          GatewayLoadBalancerArns: S.optional(NonEmptyStringList),
          NetworkLoadBalancerArns: S.optional(NonEmptyStringList),
          PrivateDnsName: S.optional(S.String),
          ServiceId: S.optional(S.String),
          ServiceName: S.optional(S.String),
          ServiceState: S.optional(S.String),
          ServiceType: S.optional(AwsEc2VpcEndpointServiceServiceTypeList),
        }),
      ).annotate({
        identifier: "AwsEc2VpcEndpointServiceDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          KeyId: S.optional(S.String),
          Status: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsXrayEncryptionConfigDetails",
      });
  }
}
function __c64(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DataId: S.optional(S.String),
          Negated: S.optional(S.Boolean),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsWafRateBasedRuleMatchPredicate",
      });
    case 1:
      return S.Array(AwsWafRateBasedRuleMatchPredicate);
    case 2:
      return S.suspend(() =>
        S.Struct({
          MetricName: S.optional(S.String),
          Name: S.optional(S.String),
          RateKey: S.optional(S.String),
          RateLimit: S.optional(S.Number),
          RuleId: S.optional(S.String),
          MatchPredicates: S.optional(AwsWafRateBasedRuleMatchPredicateList),
        }),
      ).annotate({
        identifier: "AwsWafRateBasedRuleDetails",
      });
    case 3:
      return S.suspend(() => S.Struct({ ScanOnPush: S.optional(S.Boolean) })).annotate({
        identifier: "AwsEcrRepositoryImageScanningConfigurationDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ LifecyclePolicyText: S.optional(S.String), RegistryId: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEcrRepositoryLifecyclePolicyDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          ImageScanningConfiguration: S.optional(AwsEcrRepositoryImageScanningConfigurationDetails),
          ImageTagMutability: S.optional(S.String),
          LifecyclePolicy: S.optional(AwsEcrRepositoryLifecyclePolicyDetails),
          RepositoryName: S.optional(S.String),
          RepositoryPolicyText: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEcrRepositoryDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SecurityGroupIds: S.optional(NonEmptyStringList),
          SubnetIds: S.optional(NonEmptyStringList),
          EndpointPublicAccess: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsEksClusterResourcesVpcConfigDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Enabled: S.optional(S.Boolean), Types: S.optional(NonEmptyStringList) }),
      ).annotate({
        identifier: "AwsEksClusterLoggingClusterLoggingDetails",
      });
  }
}
function __c65(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsEksClusterLoggingClusterLoggingDetails);
    case 1:
      return S.suspend(() =>
        S.Struct({ ClusterLogging: S.optional(AwsEksClusterLoggingClusterLoggingList) }),
      ).annotate({
        identifier: "AwsEksClusterLoggingDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          CertificateAuthorityData: S.optional(S.String),
          ClusterStatus: S.optional(S.String),
          Endpoint: S.optional(S.String),
          Name: S.optional(S.String),
          ResourcesVpcConfig: S.optional(AwsEksClusterResourcesVpcConfigDetails),
          RoleArn: S.optional(S.String),
          Version: S.optional(S.String),
          Logging: S.optional(AwsEksClusterLoggingDetails),
        }),
      ).annotate({ identifier: "AwsEksClusterDetails" });
    case 3:
      return S.suspend(() => S.Struct({ ResourceArn: S.optional(S.String) })).annotate({
        identifier: "FirewallPolicyStatefulRuleGroupReferencesDetails",
      });
    case 4:
      return S.Array(FirewallPolicyStatefulRuleGroupReferencesDetails);
    case 5:
      return S.suspend(() => S.Struct({ Value: S.optional(S.String) })).annotate({
        identifier: "StatelessCustomPublishMetricActionDimension",
      });
    case 6:
      return S.Array(StatelessCustomPublishMetricActionDimension);
    case 7:
      return S.suspend(() =>
        S.Struct({ Dimensions: S.optional(StatelessCustomPublishMetricActionDimensionsList) }),
      ).annotate({
        identifier: "StatelessCustomPublishMetricAction",
      });
  }
}
function __c66(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ PublishMetricAction: S.optional(StatelessCustomPublishMetricAction) }),
      ).annotate({
        identifier: "StatelessCustomActionDefinition",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ActionDefinition: S.optional(StatelessCustomActionDefinition),
          ActionName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FirewallPolicyStatelessCustomActionsDetails",
      });
    case 2:
      return S.Array(FirewallPolicyStatelessCustomActionsDetails);
    case 3:
      return S.suspend(() =>
        S.Struct({ Priority: S.optional(S.Number), ResourceArn: S.optional(S.String) }),
      ).annotate({
        identifier: "FirewallPolicyStatelessRuleGroupReferencesDetails",
      });
    case 4:
      return S.Array(FirewallPolicyStatelessRuleGroupReferencesDetails);
    case 5:
      return S.suspend(() =>
        S.Struct({
          StatefulRuleGroupReferences: S.optional(FirewallPolicyStatefulRuleGroupReferencesList),
          StatelessCustomActions: S.optional(FirewallPolicyStatelessCustomActionsList),
          StatelessDefaultActions: S.optional(NonEmptyStringList),
          StatelessFragmentDefaultActions: S.optional(NonEmptyStringList),
          StatelessRuleGroupReferences: S.optional(FirewallPolicyStatelessRuleGroupReferencesList),
        }),
      ).annotate({ identifier: "FirewallPolicyDetails" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FirewallPolicy: S.optional(FirewallPolicyDetails),
          FirewallPolicyArn: S.optional(S.String),
          FirewallPolicyId: S.optional(S.String),
          FirewallPolicyName: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsNetworkFirewallFirewallPolicyDetails",
      });
    case 7:
      return S.suspend(() => S.Struct({ SubnetId: S.optional(S.String) })).annotate({
        identifier: "AwsNetworkFirewallFirewallSubnetMappingsDetails",
      });
  }
}
function __c67(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsNetworkFirewallFirewallSubnetMappingsDetails);
    case 1:
      return S.suspend(() =>
        S.Struct({
          DeleteProtection: S.optional(S.Boolean),
          Description: S.optional(S.String),
          FirewallArn: S.optional(S.String),
          FirewallId: S.optional(S.String),
          FirewallName: S.optional(S.String),
          FirewallPolicyArn: S.optional(S.String),
          FirewallPolicyChangeProtection: S.optional(S.Boolean),
          SubnetChangeProtection: S.optional(S.Boolean),
          SubnetMappings: S.optional(AwsNetworkFirewallFirewallSubnetMappingsList),
          VpcId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsNetworkFirewallFirewallDetails",
      });
    case 2:
      return S.suspend(() => S.Struct({ Definition: S.optional(NonEmptyStringList) })).annotate({
        identifier: "RuleGroupVariablesIpSetsDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          IpSets: S.optional(RuleGroupVariablesIpSetsDetails),
          PortSets: S.optional(RuleGroupVariablesPortSetsDetails),
        }),
      ).annotate({ identifier: "RuleGroupVariables" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          GeneratedRulesType: S.optional(S.String),
          TargetTypes: S.optional(NonEmptyStringList),
          Targets: S.optional(NonEmptyStringList),
        }),
      ).annotate({
        identifier: "RuleGroupSourceListDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Destination: S.optional(S.String),
          DestinationPort: S.optional(S.String),
          Direction: S.optional(S.String),
          Protocol: S.optional(S.String),
          Source: S.optional(S.String),
          SourcePort: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RuleGroupSourceStatefulRulesHeaderDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Keyword: S.optional(S.String),
          Settings: S.optional(RuleGroupSourceStatefulRulesRuleOptionsSettingsList),
        }),
      ).annotate({
        identifier: "RuleGroupSourceStatefulRulesOptionsDetails",
      });
    case 7:
      return S.Array(RuleGroupSourceStatefulRulesOptionsDetails);
  }
}
function __c68(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(S.String),
          Header: S.optional(RuleGroupSourceStatefulRulesHeaderDetails),
          RuleOptions: S.optional(RuleGroupSourceStatefulRulesOptionsList),
        }),
      ).annotate({
        identifier: "RuleGroupSourceStatefulRulesDetails",
      });
    case 1:
      return S.Array(RuleGroupSourceStatefulRulesDetails);
    case 2:
      return S.suspend(() =>
        S.Struct({ FromPort: S.optional(S.Number), ToPort: S.optional(S.Number) }),
      ).annotate({
        identifier: "RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts",
      });
    case 3:
      return S.Array(RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts);
    case 4:
      return S.suspend(() => S.Struct({ AddressDefinition: S.optional(S.String) })).annotate({
        identifier: "RuleGroupSourceStatelessRuleMatchAttributesDestinations",
      });
    case 5:
      return S.Array(RuleGroupSourceStatelessRuleMatchAttributesDestinations);
    case 6:
      return S.Array(S.Number);
    case 7:
      return S.suspend(() =>
        S.Struct({ FromPort: S.optional(S.Number), ToPort: S.optional(S.Number) }),
      ).annotate({
        identifier: "RuleGroupSourceStatelessRuleMatchAttributesSourcePorts",
      });
  }
}
function __c69(j: number): any {
  switch (j) {
    case 0:
      return S.Array(RuleGroupSourceStatelessRuleMatchAttributesSourcePorts);
    case 1:
      return S.suspend(() =>
        S.Struct({ Flags: S.optional(NonEmptyStringList), Masks: S.optional(NonEmptyStringList) }),
      ).annotate({
        identifier: "RuleGroupSourceStatelessRuleMatchAttributesTcpFlags",
      });
    case 2:
      return S.Array(RuleGroupSourceStatelessRuleMatchAttributesTcpFlags);
    case 3:
      return S.suspend(() =>
        S.Struct({
          DestinationPorts: S.optional(
            RuleGroupSourceStatelessRuleMatchAttributesDestinationPortsList,
          ),
          Destinations: S.optional(RuleGroupSourceStatelessRuleMatchAttributesDestinationsList),
          Protocols: S.optional(RuleGroupSourceStatelessRuleMatchAttributesProtocolsList),
          SourcePorts: S.optional(RuleGroupSourceStatelessRuleMatchAttributesSourcePortsList),
          Sources: S.optional(RuleGroupSourceStatelessRuleMatchAttributesSourcesList),
          TcpFlags: S.optional(RuleGroupSourceStatelessRuleMatchAttributesTcpFlagsList),
        }),
      ).annotate({
        identifier: "RuleGroupSourceStatelessRuleMatchAttributes",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Actions: S.optional(NonEmptyStringList),
          MatchAttributes: S.optional(RuleGroupSourceStatelessRuleMatchAttributes),
        }),
      ).annotate({
        identifier: "RuleGroupSourceStatelessRuleDefinition",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Priority: S.optional(S.Number),
          RuleDefinition: S.optional(RuleGroupSourceStatelessRuleDefinition),
        }),
      ).annotate({
        identifier: "RuleGroupSourceStatelessRulesDetails",
      });
    case 6:
      return S.Array(RuleGroupSourceStatelessRulesDetails);
    case 7:
      return S.suspend(() =>
        S.Struct({
          CustomActions: S.optional(RuleGroupSourceCustomActionsList),
          StatelessRules: S.optional(RuleGroupSourceStatelessRulesList),
        }),
      ).annotate({
        identifier: "RuleGroupSourceStatelessRulesAndCustomActionsDetails",
      });
  }
}
function __c70(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RulesSourceList: S.optional(RuleGroupSourceListDetails),
          RulesString: S.optional(S.String),
          StatefulRules: S.optional(RuleGroupSourceStatefulRulesList),
          StatelessRulesAndCustomActions: S.optional(
            RuleGroupSourceStatelessRulesAndCustomActionsDetails,
          ),
        }),
      ).annotate({ identifier: "RuleGroupSource" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RuleVariables: S.optional(RuleGroupVariables),
          RulesSource: S.optional(RuleGroupSource),
        }),
      ).annotate({ identifier: "RuleGroupDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Capacity: S.optional(S.Number),
          Description: S.optional(S.String),
          RuleGroup: S.optional(RuleGroupDetails),
          RuleGroupArn: S.optional(S.String),
          RuleGroupId: S.optional(S.String),
          RuleGroupName: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsNetworkFirewallRuleGroupDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Ec2SecurityGroupId: S.optional(S.String),
          Ec2SecurityGroupName: S.optional(S.String),
          Ec2SecurityGroupOwnerId: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRdsDbSecurityGroupEc2SecurityGroup",
      });
    case 4:
      return S.Array(AwsRdsDbSecurityGroupEc2SecurityGroup);
    case 5:
      return S.suspend(() =>
        S.Struct({ CidrIp: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRdsDbSecurityGroupIpRange",
      });
    case 6:
      return S.Array(AwsRdsDbSecurityGroupIpRange);
    case 7:
      return S.suspend(() =>
        S.Struct({
          DbSecurityGroupArn: S.optional(S.String),
          DbSecurityGroupDescription: S.optional(S.String),
          DbSecurityGroupName: S.optional(S.String),
          Ec2SecurityGroups: S.optional(AwsRdsDbSecurityGroupEc2SecurityGroups),
          IpRanges: S.optional(AwsRdsDbSecurityGroupIpRanges),
          OwnerId: S.optional(S.String),
          VpcId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsRdsDbSecurityGroupDetails",
      });
  }
}
function __c71(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ EncryptionType: S.optional(S.String), KeyId: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsKinesisStreamStreamEncryptionDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          StreamEncryption: S.optional(AwsKinesisStreamStreamEncryptionDetails),
          ShardCount: S.optional(S.Number),
          RetentionPeriodHours: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AwsKinesisStreamDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Description: S.optional(S.String),
          DefaultRouteTablePropagation: S.optional(S.String),
          AutoAcceptSharedAttachments: S.optional(S.String),
          DefaultRouteTableAssociation: S.optional(S.String),
          TransitGatewayCidrBlocks: S.optional(NonEmptyStringList),
          AssociationDefaultRouteTableId: S.optional(S.String),
          PropagationDefaultRouteTableId: S.optional(S.String),
          VpnEcmpSupport: S.optional(S.String),
          DnsSupport: S.optional(S.String),
          MulticastSupport: S.optional(S.String),
          AmazonSideAsn: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsEc2TransitGatewayDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Gid: S.optional(S.String),
          SecondaryGids: S.optional(NonEmptyStringList),
          Uid: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEfsAccessPointPosixUserDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          OwnerGid: S.optional(S.String),
          OwnerUid: S.optional(S.String),
          Permissions: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEfsAccessPointRootDirectoryCreationInfoDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CreationInfo: S.optional(AwsEfsAccessPointRootDirectoryCreationInfoDetails),
          Path: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEfsAccessPointRootDirectoryDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccessPointId: S.optional(S.String),
          Arn: S.optional(S.String),
          ClientToken: S.optional(S.String),
          FileSystemId: S.optional(S.String),
          PosixUser: S.optional(AwsEfsAccessPointPosixUserDetails),
          RootDirectory: S.optional(AwsEfsAccessPointRootDirectoryDetails),
        }),
      ).annotate({ identifier: "AwsEfsAccessPointDetails" });
    case 7:
      return S.suspend(() => S.Struct({ StackDriftStatus: S.optional(S.String) })).annotate({
        identifier: "AwsCloudFormationStackDriftInformationDetails",
      });
  }
}
function __c72(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          OutputKey: S.optional(S.String),
          OutputValue: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCloudFormationStackOutputsDetails",
      });
    case 1:
      return S.Array(AwsCloudFormationStackOutputsDetails);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Capabilities: S.optional(NonEmptyStringList),
          CreationTime: S.optional(S.String),
          Description: S.optional(S.String),
          DisableRollback: S.optional(S.Boolean),
          DriftInformation: S.optional(AwsCloudFormationStackDriftInformationDetails),
          EnableTerminationProtection: S.optional(S.Boolean),
          LastUpdatedTime: S.optional(S.String),
          NotificationArns: S.optional(NonEmptyStringList),
          Outputs: S.optional(AwsCloudFormationStackOutputsList),
          RoleArn: S.optional(S.String),
          StackId: S.optional(S.String),
          StackName: S.optional(S.String),
          StackStatus: S.optional(S.String),
          StackStatusReason: S.optional(S.String),
          TimeoutInMinutes: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsCloudFormationStackDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ActionsEnabled: S.optional(S.Boolean),
          AlarmActions: S.optional(NonEmptyStringList),
          AlarmArn: S.optional(S.String),
          AlarmConfigurationUpdatedTimestamp: S.optional(S.String),
          AlarmDescription: S.optional(S.String),
          AlarmName: S.optional(S.String),
          ComparisonOperator: S.optional(S.String),
          DatapointsToAlarm: S.optional(S.Number),
          Dimensions: S.optional(AwsCloudWatchAlarmDimensionsList),
          EvaluateLowSampleCountPercentile: S.optional(S.String),
          EvaluationPeriods: S.optional(S.Number),
          ExtendedStatistic: S.optional(S.String),
          InsufficientDataActions: S.optional(NonEmptyStringList),
          MetricName: S.optional(S.String),
          Namespace: S.optional(S.String),
          OkActions: S.optional(NonEmptyStringList),
          Period: S.optional(S.Number),
          Statistic: S.optional(S.String),
          Threshold: S.optional(S.Number),
          ThresholdMetricId: S.optional(S.String),
          TreatMissingData: S.optional(S.String),
          Unit: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsCloudWatchAlarmDetails",
      });
    case 4:
      return S.suspend(() => S.Struct({ CidrBlock: S.optional(S.String) })).annotate({
        identifier: "VpcInfoCidrBlockSetDetails",
      });
    case 5:
      return S.Array(VpcInfoCidrBlockSetDetails);
    case 6:
      return S.suspend(() => S.Struct({ Ipv6CidrBlock: S.optional(S.String) })).annotate({
        identifier: "VpcInfoIpv6CidrBlockSetDetails",
      });
    case 7:
      return S.Array(VpcInfoIpv6CidrBlockSetDetails);
  }
}
function __c73(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AllowDnsResolutionFromRemoteVpc: S.optional(S.Boolean),
          AllowEgressFromLocalClassicLinkToRemoteVpc: S.optional(S.Boolean),
          AllowEgressFromLocalVpcToRemoteClassicLink: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "VpcInfoPeeringOptionsDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CidrBlock: S.optional(S.String),
          CidrBlockSet: S.optional(VpcInfoCidrBlockSetList),
          Ipv6CidrBlockSet: S.optional(VpcInfoIpv6CidrBlockSetList),
          OwnerId: S.optional(S.String),
          PeeringOptions: S.optional(VpcInfoPeeringOptionsDetails),
          Region: S.optional(S.String),
          VpcId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2VpcPeeringConnectionVpcInfoDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.String), Message: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2VpcPeeringConnectionStatusDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AccepterVpcInfo: S.optional(AwsEc2VpcPeeringConnectionVpcInfoDetails),
          ExpirationTime: S.optional(S.String),
          RequesterVpcInfo: S.optional(AwsEc2VpcPeeringConnectionVpcInfoDetails),
          Status: S.optional(AwsEc2VpcPeeringConnectionStatusDetails),
          VpcPeeringConnectionId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2VpcPeeringConnectionDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(AwsWafRegionalRuleGroupRulesActionDetails),
          Priority: S.optional(S.Number),
          RuleId: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsWafRegionalRuleGroupRulesDetails",
      });
    case 5:
      return S.Array(AwsWafRegionalRuleGroupRulesDetails);
    case 6:
      return S.suspend(() =>
        S.Struct({
          MetricName: S.optional(S.String),
          Name: S.optional(S.String),
          RuleGroupId: S.optional(S.String),
          Rules: S.optional(AwsWafRegionalRuleGroupRulesList),
        }),
      ).annotate({
        identifier: "AwsWafRegionalRuleGroupDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MetricName: S.optional(S.String),
          Name: S.optional(S.String),
          PredicateList: S.optional(AwsWafRegionalRulePredicateList),
          RuleId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsWafRegionalRuleDetails",
      });
  }
}
function __c74(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(AwsWafRegionalWebAclRulesListActionDetails),
          OverrideAction: S.optional(AwsWafRegionalWebAclRulesListOverrideActionDetails),
          Priority: S.optional(S.Number),
          RuleId: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsWafRegionalWebAclRulesListDetails",
      });
    case 1:
      return S.Array(AwsWafRegionalWebAclRulesListDetails);
    case 2:
      return S.suspend(() =>
        S.Struct({
          DefaultAction: S.optional(S.String),
          MetricName: S.optional(S.String),
          Name: S.optional(S.String),
          RulesList: S.optional(AwsWafRegionalWebAclRulesList),
          WebAclId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsWafRegionalWebAclDetails",
      });
    case 3:
      return S.Array(AwsWafRulePredicateListDetails);
    case 4:
      return S.suspend(() =>
        S.Struct({
          MetricName: S.optional(S.String),
          Name: S.optional(S.String),
          PredicateList: S.optional(AwsWafRulePredicateList),
          RuleId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsWafRuleDetails" });
    case 5:
      return S.Array(AwsWafRuleGroupRulesDetails);
    case 6:
      return S.suspend(() =>
        S.Struct({
          MetricName: S.optional(S.String),
          Name: S.optional(S.String),
          RuleGroupId: S.optional(S.String),
          Rules: S.optional(AwsWafRuleGroupRulesList),
        }),
      ).annotate({ identifier: "AwsWafRuleGroupDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Host: S.optional(AwsEcsTaskVolumeHostDetails) }),
      ).annotate({ identifier: "AwsEcsTaskVolumeDetails" });
  }
}
function __c75(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsEcsTaskVolumeDetails);
    case 1:
      return S.Array(AwsEcsContainerDetails);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ClusterArn: S.optional(S.String),
          TaskDefinitionArn: S.optional(S.String),
          Version: S.optional(S.String),
          CreatedAt: S.optional(S.String),
          StartedAt: S.optional(S.String),
          StartedBy: S.optional(S.String),
          Group: S.optional(S.String),
          Volumes: S.optional(AwsEcsTaskVolumeDetailsList),
          Containers: S.optional(AwsEcsContainerDetailsList),
        }),
      ).annotate({ identifier: "AwsEcsTaskDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          BackupVaultEvents: S.optional(NonEmptyStringList),
          SnsTopicArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsBackupBackupVaultNotificationsDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          BackupVaultArn: S.optional(S.String),
          BackupVaultName: S.optional(S.String),
          EncryptionKeyArn: S.optional(S.String),
          Notifications: S.optional(AwsBackupBackupVaultNotificationsDetails),
          AccessPolicy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsBackupBackupVaultDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ BackupOptions: S.optional(FieldMap), ResourceType: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsBackupBackupPlanAdvancedBackupSettingsDetails",
      });
    case 6:
      return S.Array(AwsBackupBackupPlanAdvancedBackupSettingsDetails);
    case 7:
      return S.suspend(() =>
        S.Struct({
          DeleteAfterDays: S.optional(S.Number),
          MoveToColdStorageAfterDays: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsBackupBackupPlanLifecycleDetails",
      });
  }
}
function __c76(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DestinationBackupVaultArn: S.optional(S.String),
          Lifecycle: S.optional(AwsBackupBackupPlanLifecycleDetails),
        }),
      ).annotate({
        identifier: "AwsBackupBackupPlanRuleCopyActionsDetails",
      });
    case 1:
      return S.Array(AwsBackupBackupPlanRuleCopyActionsDetails);
    case 2:
      return S.suspend(() =>
        S.Struct({
          TargetBackupVault: S.optional(S.String),
          StartWindowMinutes: S.optional(S.Number),
          ScheduleExpression: S.optional(S.String),
          RuleName: S.optional(S.String),
          RuleId: S.optional(S.String),
          EnableContinuousBackup: S.optional(S.Boolean),
          CompletionWindowMinutes: S.optional(S.Number),
          CopyActions: S.optional(AwsBackupBackupPlanRuleCopyActionsList),
          Lifecycle: S.optional(AwsBackupBackupPlanLifecycleDetails),
        }),
      ).annotate({
        identifier: "AwsBackupBackupPlanRuleDetails",
      });
    case 3:
      return S.Array(AwsBackupBackupPlanRuleDetails);
    case 4:
      return S.suspend(() =>
        S.Struct({
          BackupPlanName: S.optional(S.String),
          AdvancedBackupSettings: S.optional(AwsBackupBackupPlanAdvancedBackupSettingsList),
          BackupPlanRule: S.optional(AwsBackupBackupPlanRuleList),
        }),
      ).annotate({
        identifier: "AwsBackupBackupPlanBackupPlanDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          BackupPlan: S.optional(AwsBackupBackupPlanBackupPlanDetails),
          BackupPlanArn: S.optional(S.String),
          BackupPlanId: S.optional(S.String),
          VersionId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsBackupBackupPlanDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ DeleteAt: S.optional(S.String), MoveToColdStorageAt: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsBackupRecoveryPointCalculatedLifecycleDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          BackupPlanArn: S.optional(S.String),
          BackupPlanId: S.optional(S.String),
          BackupPlanVersion: S.optional(S.String),
          BackupRuleId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsBackupRecoveryPointCreatedByDetails",
      });
  }
}
function __c77(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          BackupSizeInBytes: S.optional(S.Number),
          BackupVaultArn: S.optional(S.String),
          BackupVaultName: S.optional(S.String),
          CalculatedLifecycle: S.optional(AwsBackupRecoveryPointCalculatedLifecycleDetails),
          CompletionDate: S.optional(S.String),
          CreatedBy: S.optional(AwsBackupRecoveryPointCreatedByDetails),
          CreationDate: S.optional(S.String),
          EncryptionKeyArn: S.optional(S.String),
          IamRoleArn: S.optional(S.String),
          IsEncrypted: S.optional(S.Boolean),
          LastRestoreTime: S.optional(S.String),
          Lifecycle: S.optional(AwsBackupRecoveryPointLifecycleDetails),
          RecoveryPointArn: S.optional(S.String),
          ResourceArn: S.optional(S.String),
          ResourceType: S.optional(S.String),
          SourceBackupVaultArn: S.optional(S.String),
          Status: S.optional(S.String),
          StatusMessage: S.optional(S.String),
          StorageClass: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsBackupRecoveryPointDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DeleteOnTermination: S.optional(S.Boolean),
          Encrypted: S.optional(S.Boolean),
          Iops: S.optional(S.Number),
          KmsKeyId: S.optional(S.String),
          SnapshotId: S.optional(S.String),
          Throughput: S.optional(S.Number),
          VolumeSize: S.optional(S.Number),
          VolumeType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DeviceName: S.optional(S.String),
          Ebs: S.optional(AwsEc2LaunchTemplateDataBlockDeviceMappingSetEbsDetails),
          NoDevice: S.optional(S.String),
          VirtualName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails",
      });
    case 3:
      return S.Array(AwsEc2LaunchTemplateDataBlockDeviceMappingSetDetails);
    case 4:
      return S.suspend(() =>
        S.Struct({
          CapacityReservationId: S.optional(S.String),
          CapacityReservationResourceGroupArn: S.optional(S.String),
        }),
      ).annotate({
        identifier:
          "AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          CapacityReservationPreference: S.optional(S.String),
          CapacityReservationTarget: S.optional(
            AwsEc2LaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetDetails,
          ),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ CoreCount: S.optional(S.Number), ThreadsPerCore: S.optional(S.Number) }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataCpuOptionsDetails",
      });
    case 7:
      return S.suspend(() => S.Struct({ CpuCredits: S.optional(S.String) })).annotate({
        identifier: "AwsEc2LaunchTemplateDataCreditSpecificationDetails",
      });
  }
}
function __c78(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Type: S.optional(S.String) })).annotate({
        identifier: "AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails",
      });
    case 1:
      return S.Array(AwsEc2LaunchTemplateDataElasticGpuSpecificationSetDetails);
    case 2:
      return S.suspend(() =>
        S.Struct({ Count: S.optional(S.Number), Type: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails",
      });
    case 3:
      return S.Array(AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetDetails);
    case 4:
      return S.suspend(() => S.Struct({ Configured: S.optional(S.Boolean) })).annotate({
        identifier: "AwsEc2LaunchTemplateDataHibernationOptionsDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Arn: S.optional(S.String), Name: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataIamInstanceProfileDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          BlockDurationMinutes: S.optional(S.Number),
          InstanceInterruptionBehavior: S.optional(S.String),
          MaxPrice: S.optional(S.String),
          SpotInstanceType: S.optional(S.String),
          ValidUntil: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MarketType: S.optional(S.String),
          SpotOptions: S.optional(AwsEc2LaunchTemplateDataInstanceMarketOptionsSpotOptionsDetails),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails",
      });
  }
}
function __c79(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Max: S.optional(S.Number), Min: S.optional(S.Number) }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ Max: S.optional(S.Number), Min: S.optional(S.Number) }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AcceleratorCount: S.optional(
            AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorCountDetails,
          ),
          AcceleratorManufacturers: S.optional(NonEmptyStringList),
          AcceleratorNames: S.optional(NonEmptyStringList),
          AcceleratorTotalMemoryMiB: S.optional(
            AwsEc2LaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBDetails,
          ),
          AcceleratorTypes: S.optional(NonEmptyStringList),
          BareMetal: S.optional(S.String),
          BaselineEbsBandwidthMbps: S.optional(
            AwsEc2LaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsDetails,
          ),
          BurstablePerformance: S.optional(S.String),
          CpuManufacturers: S.optional(NonEmptyStringList),
          ExcludedInstanceTypes: S.optional(NonEmptyStringList),
          InstanceGenerations: S.optional(NonEmptyStringList),
          LocalStorage: S.optional(S.String),
          LocalStorageTypes: S.optional(NonEmptyStringList),
          MemoryGiBPerVCpu: S.optional(
            AwsEc2LaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuDetails,
          ),
          MemoryMiB: S.optional(AwsEc2LaunchTemplateDataInstanceRequirementsMemoryMiBDetails),
          NetworkInterfaceCount: S.optional(
            AwsEc2LaunchTemplateDataInstanceRequirementsNetworkInterfaceCountDetails,
          ),
          OnDemandMaxPricePercentageOverLowestPrice: S.optional(S.Number),
          RequireHibernateSupport: S.optional(S.Boolean),
          SpotMaxPricePercentageOverLowestPrice: S.optional(S.Number),
          TotalLocalStorageGB: S.optional(
            AwsEc2LaunchTemplateDataInstanceRequirementsTotalLocalStorageGBDetails,
          ),
          VCpuCount: S.optional(AwsEc2LaunchTemplateDataInstanceRequirementsVCpuCountDetails),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataInstanceRequirementsDetails",
      });
    case 3:
      return S.suspend(() => S.Struct({ LicenseConfigurationArn: S.optional(S.String) })).annotate({
        identifier: "AwsEc2LaunchTemplateDataLicenseSetDetails",
      });
    case 4:
      return S.Array(AwsEc2LaunchTemplateDataLicenseSetDetails);
    case 5:
      return S.suspend(() => S.Struct({ AutoRecovery: S.optional(S.String) })).annotate({
        identifier: "AwsEc2LaunchTemplateDataMaintenanceOptionsDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          HttpEndpoint: S.optional(S.String),
          HttpProtocolIpv6: S.optional(S.String),
          HttpTokens: S.optional(S.String),
          HttpPutResponseHopLimit: S.optional(S.Number),
          InstanceMetadataTags: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataMetadataOptionsDetails",
      });
    case 7:
      return S.suspend(() => S.Struct({ Ipv4Prefix: S.optional(S.String) })).annotate({
        identifier: "AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails",
      });
  }
}
function __c80(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesDetails);
    case 1:
      return S.suspend(() => S.Struct({ Ipv6Address: S.optional(S.String) })).annotate({
        identifier: "AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails",
      });
    case 2:
      return S.Array(AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesDetails);
    case 3:
      return S.suspend(() => S.Struct({ Ipv6Prefix: S.optional(S.String) })).annotate({
        identifier: "AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails",
      });
    case 4:
      return S.Array(AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesDetails);
    case 5:
      return S.suspend(() =>
        S.Struct({ Primary: S.optional(S.Boolean), PrivateIpAddress: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails",
      });
    case 6:
      return S.Array(AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesDetails);
    case 7:
      return S.suspend(() =>
        S.Struct({
          AssociateCarrierIpAddress: S.optional(S.Boolean),
          AssociatePublicIpAddress: S.optional(S.Boolean),
          DeleteOnTermination: S.optional(S.Boolean),
          Description: S.optional(S.String),
          DeviceIndex: S.optional(S.Number),
          Groups: S.optional(NonEmptyStringList),
          InterfaceType: S.optional(S.String),
          Ipv4PrefixCount: S.optional(S.Number),
          Ipv4Prefixes: S.optional(AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv4PrefixesList),
          Ipv6AddressCount: S.optional(S.Number),
          Ipv6Addresses: S.optional(AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6AddressesList),
          Ipv6PrefixCount: S.optional(S.Number),
          Ipv6Prefixes: S.optional(AwsEc2LaunchTemplateDataNetworkInterfaceSetIpv6PrefixesList),
          NetworkCardIndex: S.optional(S.Number),
          NetworkInterfaceId: S.optional(S.String),
          PrivateIpAddress: S.optional(S.String),
          PrivateIpAddresses: S.optional(
            AwsEc2LaunchTemplateDataNetworkInterfaceSetPrivateIpAddressesList,
          ),
          SecondaryPrivateIpAddressCount: S.optional(S.Number),
          SubnetId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails",
      });
  }
}
function __c81(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsEc2LaunchTemplateDataNetworkInterfaceSetDetails);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Affinity: S.optional(S.String),
          AvailabilityZone: S.optional(S.String),
          GroupName: S.optional(S.String),
          HostId: S.optional(S.String),
          HostResourceGroupArn: S.optional(S.String),
          PartitionNumber: S.optional(S.Number),
          SpreadDomain: S.optional(S.String),
          Tenancy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataPlacementDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          EnableResourceNameDnsAAAARecord: S.optional(S.Boolean),
          EnableResourceNameDnsARecord: S.optional(S.Boolean),
          HostnameType: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          BlockDeviceMappingSet: S.optional(AwsEc2LaunchTemplateDataBlockDeviceMappingSetList),
          CapacityReservationSpecification: S.optional(
            AwsEc2LaunchTemplateDataCapacityReservationSpecificationDetails,
          ),
          CpuOptions: S.optional(AwsEc2LaunchTemplateDataCpuOptionsDetails),
          CreditSpecification: S.optional(AwsEc2LaunchTemplateDataCreditSpecificationDetails),
          DisableApiStop: S.optional(S.Boolean),
          DisableApiTermination: S.optional(S.Boolean),
          EbsOptimized: S.optional(S.Boolean),
          ElasticGpuSpecificationSet: S.optional(
            AwsEc2LaunchTemplateDataElasticGpuSpecificationSetList,
          ),
          ElasticInferenceAcceleratorSet: S.optional(
            AwsEc2LaunchTemplateDataElasticInferenceAcceleratorSetList,
          ),
          EnclaveOptions: S.optional(AwsEc2LaunchTemplateDataEnclaveOptionsDetails),
          HibernationOptions: S.optional(AwsEc2LaunchTemplateDataHibernationOptionsDetails),
          IamInstanceProfile: S.optional(AwsEc2LaunchTemplateDataIamInstanceProfileDetails),
          ImageId: S.optional(S.String),
          InstanceInitiatedShutdownBehavior: S.optional(S.String),
          InstanceMarketOptions: S.optional(AwsEc2LaunchTemplateDataInstanceMarketOptionsDetails),
          InstanceRequirements: S.optional(AwsEc2LaunchTemplateDataInstanceRequirementsDetails),
          InstanceType: S.optional(S.String),
          KernelId: S.optional(S.String),
          KeyName: S.optional(S.String),
          LicenseSet: S.optional(AwsEc2LaunchTemplateDataLicenseSetList),
          MaintenanceOptions: S.optional(AwsEc2LaunchTemplateDataMaintenanceOptionsDetails),
          MetadataOptions: S.optional(AwsEc2LaunchTemplateDataMetadataOptionsDetails),
          Monitoring: S.optional(AwsEc2LaunchTemplateDataMonitoringDetails),
          NetworkInterfaceSet: S.optional(AwsEc2LaunchTemplateDataNetworkInterfaceSetList),
          Placement: S.optional(AwsEc2LaunchTemplateDataPlacementDetails),
          PrivateDnsNameOptions: S.optional(AwsEc2LaunchTemplateDataPrivateDnsNameOptionsDetails),
          RamDiskId: S.optional(S.String),
          SecurityGroupIdSet: S.optional(NonEmptyStringList),
          SecurityGroupSet: S.optional(NonEmptyStringList),
          UserData: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDataDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LaunchTemplateName: S.optional(S.String),
          Id: S.optional(S.String),
          LaunchTemplateData: S.optional(AwsEc2LaunchTemplateDataDetails),
          DefaultVersionNumber: S.optional(S.Number),
          LatestVersionNumber: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsEc2LaunchTemplateDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ MinimumInstanceMetadataServiceVersion: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AcceleratorTypes: S.optional(NonEmptyStringList),
          AdditionalCodeRepositories: S.optional(NonEmptyStringList),
          DefaultCodeRepository: S.optional(S.String),
          DirectInternetAccess: S.optional(S.String),
          FailureReason: S.optional(S.String),
          InstanceMetadataServiceConfiguration: S.optional(
            AwsSageMakerNotebookInstanceMetadataServiceConfigurationDetails,
          ),
          InstanceType: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          NetworkInterfaceId: S.optional(S.String),
          NotebookInstanceArn: S.optional(S.String),
          NotebookInstanceLifecycleConfigName: S.optional(S.String),
          NotebookInstanceName: S.optional(S.String),
          NotebookInstanceStatus: S.optional(S.String),
          PlatformIdentifier: S.optional(S.String),
          RoleArn: S.optional(S.String),
          RootAccess: S.optional(S.String),
          SecurityGroups: S.optional(NonEmptyStringList),
          SubnetId: S.optional(S.String),
          Url: S.optional(S.String),
          VolumeSizeInGB: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AwsSageMakerNotebookInstanceDetails",
      });
    case 7:
      return S.suspend(() => S.Struct({ ImmunityTime: S.optional(S.Number) })).annotate({
        identifier: "AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails",
      });
  }
}
function __c82(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ImmunityTimeProperty: S.optional(AwsWafv2WebAclCaptchaConfigImmunityTimePropertyDetails),
        }),
      ).annotate({
        identifier: "AwsWafv2WebAclCaptchaConfigDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ InsertHeaders: S.optional(AwsWafv2InsertHeadersList) }),
      ).annotate({
        identifier: "AwsWafv2CustomRequestHandlingDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ CustomRequestHandling: S.optional(AwsWafv2CustomRequestHandlingDetails) }),
      ).annotate({
        identifier: "AwsWafv2ActionAllowDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CustomResponseBodyKey: S.optional(S.String),
          ResponseCode: S.optional(S.Number),
          ResponseHeaders: S.optional(AwsWafv2InsertHeadersList),
        }),
      ).annotate({
        identifier: "AwsWafv2CustomResponseDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ CustomResponse: S.optional(AwsWafv2CustomResponseDetails) }),
      ).annotate({
        identifier: "AwsWafv2ActionBlockDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Allow: S.optional(AwsWafv2ActionAllowDetails),
          Block: S.optional(AwsWafv2ActionBlockDetails),
        }),
      ).annotate({
        identifier: "AwsWafv2WebAclActionDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Allow: S.optional(AwsWafv2ActionAllowDetails),
          Block: S.optional(AwsWafv2ActionBlockDetails),
          Captcha: S.optional(AwsWafv2RulesActionCaptchaDetails),
          Count: S.optional(AwsWafv2RulesActionCountDetails),
        }),
      ).annotate({
        identifier: "AwsWafv2RulesActionDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CloudWatchMetricsEnabled: S.optional(S.Boolean),
          MetricName: S.optional(S.String),
          SampledRequestsEnabled: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsWafv2VisibilityConfigDetails",
      });
  }
}
function __c83(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(AwsWafv2RulesActionDetails),
          Name: S.optional(S.String),
          OverrideAction: S.optional(S.String),
          Priority: S.optional(S.Number),
          VisibilityConfig: S.optional(AwsWafv2VisibilityConfigDetails),
        }),
      ).annotate({ identifier: "AwsWafv2RulesDetails" });
    case 1:
      return S.Array(AwsWafv2RulesDetails);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          ManagedbyFirewallManager: S.optional(S.Boolean),
          Id: S.optional(S.String),
          Capacity: S.optional(S.Number),
          CaptchaConfig: S.optional(AwsWafv2WebAclCaptchaConfigDetails),
          DefaultAction: S.optional(AwsWafv2WebAclActionDetails),
          Description: S.optional(S.String),
          Rules: S.optional(AwsWafv2RulesList),
          VisibilityConfig: S.optional(AwsWafv2VisibilityConfigDetails),
        }),
      ).annotate({ identifier: "AwsWafv2WebAclDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Capacity: S.optional(S.Number),
          Description: S.optional(S.String),
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Arn: S.optional(S.String),
          Rules: S.optional(AwsWafv2RulesList),
          Scope: S.optional(S.String),
          VisibilityConfig: S.optional(AwsWafv2VisibilityConfigDetails),
        }),
      ).annotate({ identifier: "AwsWafv2RuleGroupDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({ State: S.optional(S.String), StatusMessage: S.optional(S.String) }),
      ).annotate({ identifier: "AssociationStateDetails" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AssociationState: S.optional(AssociationStateDetails),
          GatewayId: S.optional(S.String),
          Main: S.optional(S.Boolean),
          RouteTableAssociationId: S.optional(S.String),
          RouteTableId: S.optional(S.String),
          SubnetId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AssociationSetDetails" });
    case 6:
      return S.Array(AssociationSetDetails);
    case 7:
      return S.suspend(() => S.Struct({ GatewayId: S.optional(S.String) })).annotate({
        identifier: "PropagatingVgwSetDetails",
      });
  }
}
function __c84(j: number): any {
  switch (j) {
    case 0:
      return S.Array(PropagatingVgwSetDetails);
    case 1:
      return S.suspend(() =>
        S.Struct({
          CarrierGatewayId: S.optional(S.String),
          CoreNetworkArn: S.optional(S.String),
          DestinationCidrBlock: S.optional(S.String),
          DestinationIpv6CidrBlock: S.optional(S.String),
          DestinationPrefixListId: S.optional(S.String),
          EgressOnlyInternetGatewayId: S.optional(S.String),
          GatewayId: S.optional(S.String),
          InstanceId: S.optional(S.String),
          InstanceOwnerId: S.optional(S.String),
          LocalGatewayId: S.optional(S.String),
          NatGatewayId: S.optional(S.String),
          NetworkInterfaceId: S.optional(S.String),
          Origin: S.optional(S.String),
          State: S.optional(S.String),
          TransitGatewayId: S.optional(S.String),
          VpcPeeringConnectionId: S.optional(S.String),
        }),
      ).annotate({ identifier: "RouteSetDetails" });
    case 2:
      return S.Array(RouteSetDetails);
    case 3:
      return S.suspend(() =>
        S.Struct({
          AssociationSet: S.optional(AssociationSetList),
          OwnerId: S.optional(S.String),
          PropagatingVgwSet: S.optional(PropagatingVgwSetList),
          RouteTableId: S.optional(S.String),
          RouteSet: S.optional(RouteSetList),
          VpcId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEc2RouteTableDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({ KmsKeyId: S.optional(S.String), UseAwsOwnedKey: S.optional(S.Boolean) }),
      ).annotate({
        identifier: "AwsAmazonMqBrokerEncryptionOptionsDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Hosts: S.optional(StringList),
          RoleBase: S.optional(S.String),
          RoleName: S.optional(S.String),
          RoleSearchMatching: S.optional(S.String),
          RoleSearchSubtree: S.optional(S.Boolean),
          ServiceAccountUsername: S.optional(S.String),
          UserBase: S.optional(S.String),
          UserRoleName: S.optional(S.String),
          UserSearchMatching: S.optional(S.String),
          UserSearchSubtree: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsAmazonMqBrokerLdapServerMetadataDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Audit: S.optional(S.Boolean), General: S.optional(S.Boolean) }),
      ).annotate({
        identifier: "AwsAmazonMqBrokerLogsPendingDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Audit: S.optional(S.Boolean),
          General: S.optional(S.Boolean),
          AuditLogGroup: S.optional(S.String),
          GeneralLogGroup: S.optional(S.String),
          Pending: S.optional(AwsAmazonMqBrokerLogsPendingDetails),
        }),
      ).annotate({
        identifier: "AwsAmazonMqBrokerLogsDetails",
      });
  }
}
function __c85(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DayOfWeek: S.optional(S.String),
          TimeOfDay: S.optional(S.String),
          TimeZone: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ PendingChange: S.optional(S.String), Username: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsAmazonMqBrokerUsersDetails",
      });
    case 2:
      return S.Array(AwsAmazonMqBrokerUsersDetails);
    case 3:
      return S.suspend(() =>
        S.Struct({
          AuthenticationStrategy: S.optional(S.String),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
          BrokerArn: S.optional(S.String),
          BrokerName: S.optional(S.String),
          DeploymentMode: S.optional(S.String),
          EncryptionOptions: S.optional(AwsAmazonMqBrokerEncryptionOptionsDetails),
          EngineType: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          HostInstanceType: S.optional(S.String),
          BrokerId: S.optional(S.String),
          LdapServerMetadata: S.optional(AwsAmazonMqBrokerLdapServerMetadataDetails),
          Logs: S.optional(AwsAmazonMqBrokerLogsDetails),
          MaintenanceWindowStartTime: S.optional(
            AwsAmazonMqBrokerMaintenanceWindowStartTimeDetails,
          ),
          PubliclyAccessible: S.optional(S.Boolean),
          SecurityGroups: S.optional(StringList),
          StorageType: S.optional(S.String),
          SubnetIds: S.optional(StringList),
          Users: S.optional(AwsAmazonMqBrokerUsersList),
        }),
      ).annotate({ identifier: "AwsAmazonMqBrokerDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AuthTtL: S.optional(S.Number),
          ClientId: S.optional(S.String),
          IatTtL: S.optional(S.Number),
          Issuer: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAppSyncGraphQlApiOpenIdConnectConfigDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AuthorizerResultTtlInSeconds: S.optional(S.Number),
          AuthorizerUri: S.optional(S.String),
          IdentityValidationExpression: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AppIdClientRegex: S.optional(S.String),
          AwsRegion: S.optional(S.String),
          DefaultAction: S.optional(S.String),
          UserPoolId: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAppSyncGraphQlApiUserPoolConfigDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CloudWatchLogsRoleArn: S.optional(S.String),
          ExcludeVerboseContent: S.optional(S.Boolean),
          FieldLogLevel: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAppSyncGraphQlApiLogConfigDetails",
      });
  }
}
function __c86(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AuthenticationType: S.optional(S.String),
          LambdaAuthorizerConfig: S.optional(AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails),
          OpenIdConnectConfig: S.optional(AwsAppSyncGraphQlApiOpenIdConnectConfigDetails),
          UserPoolConfig: S.optional(AwsAppSyncGraphQlApiUserPoolConfigDetails),
        }),
      ).annotate({
        identifier: "AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails",
      });
    case 1:
      return S.Array(AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersDetails);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApiId: S.optional(S.String),
          Id: S.optional(S.String),
          OpenIdConnectConfig: S.optional(AwsAppSyncGraphQlApiOpenIdConnectConfigDetails),
          Name: S.optional(S.String),
          LambdaAuthorizerConfig: S.optional(AwsAppSyncGraphQlApiLambdaAuthorizerConfigDetails),
          XrayEnabled: S.optional(S.Boolean),
          Arn: S.optional(S.String),
          UserPoolConfig: S.optional(AwsAppSyncGraphQlApiUserPoolConfigDetails),
          AuthenticationType: S.optional(S.String),
          LogConfig: S.optional(AwsAppSyncGraphQlApiLogConfigDetails),
          AdditionalAuthenticationProviders: S.optional(
            AwsAppSyncGraphQlApiAdditionalAuthenticationProvidersList,
          ),
          WafWebAclArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsAppSyncGraphQlApiDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          RegistryArn: S.optional(S.String),
          RegistryName: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEventSchemasRegistryDetails",
      });
    case 4:
      return S.suspend(() => S.Struct({ Status: S.optional(S.String) })).annotate({
        identifier: "AwsGuardDutyDetectorDataSourcesCloudTrailDetails",
      });
    case 5:
      return S.suspend(() => S.Struct({ Status: S.optional(S.String) })).annotate({
        identifier: "AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AuditLogs: S.optional(AwsGuardDutyDetectorDataSourcesKubernetesAuditLogsDetails),
        }),
      ).annotate({
        identifier: "AwsGuardDutyDetectorDataSourcesKubernetesDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Reason: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier:
          "AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails",
      });
  }
}
function __c87(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          EbsVolumes: S.optional(
            AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsEbsVolumesDetails,
          ),
        }),
      ).annotate({
        identifier:
          "AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ScanEc2InstanceWithFindings: S.optional(
            AwsGuardDutyDetectorDataSourcesMalwareProtectionScanEc2InstanceWithFindingsDetails,
          ),
          ServiceRole: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          CloudTrail: S.optional(AwsGuardDutyDetectorDataSourcesCloudTrailDetails),
          DnsLogs: S.optional(AwsGuardDutyDetectorDataSourcesDnsLogsDetails),
          FlowLogs: S.optional(AwsGuardDutyDetectorDataSourcesFlowLogsDetails),
          Kubernetes: S.optional(AwsGuardDutyDetectorDataSourcesKubernetesDetails),
          MalwareProtection: S.optional(AwsGuardDutyDetectorDataSourcesMalwareProtectionDetails),
          S3Logs: S.optional(AwsGuardDutyDetectorDataSourcesS3LogsDetails),
        }),
      ).annotate({
        identifier: "AwsGuardDutyDetectorDataSourcesDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Status: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsGuardDutyDetectorFeaturesDetails",
      });
    case 4:
      return S.Array(AwsGuardDutyDetectorFeaturesDetails);
    case 5:
      return S.suspend(() =>
        S.Struct({
          DataSources: S.optional(AwsGuardDutyDetectorDataSourcesDetails),
          Features: S.optional(AwsGuardDutyDetectorFeaturesList),
          FindingPublishingFrequency: S.optional(S.String),
          ServiceRole: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsGuardDutyDetectorDetails",
      });
    case 6:
      return S.suspend(() => S.Struct({ LogGroupArn: S.optional(S.String) })).annotate({
        identifier:
          "AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CloudWatchLogsLogGroup: S.optional(
            AwsStepFunctionStateMachineLoggingConfigurationDestinationsCloudWatchLogsLogGroupDetails,
          ),
        }),
      ).annotate({
        identifier: "AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails",
      });
  }
}
function __c88(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsStepFunctionStateMachineLoggingConfigurationDestinationsDetails);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Destinations: S.optional(AwsStepFunctionStateMachineLoggingConfigurationDestinationsList),
          IncludeExecutionData: S.optional(S.Boolean),
          Level: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsStepFunctionStateMachineLoggingConfigurationDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Label: S.optional(S.String),
          LoggingConfiguration: S.optional(AwsStepFunctionStateMachineLoggingConfigurationDetails),
          Name: S.optional(S.String),
          RoleArn: S.optional(S.String),
          StateMachineArn: S.optional(S.String),
          Status: S.optional(S.String),
          TracingConfiguration: S.optional(AwsStepFunctionStateMachineTracingConfigurationDetails),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsStepFunctionStateMachineDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ EncryptionOption: S.optional(S.String), KmsKey: S.optional(S.String) }),
      ).annotate({
        identifier:
          "AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EncryptionConfiguration: S.optional(
            AwsAthenaWorkGroupConfigurationResultConfigurationEncryptionConfigurationDetails,
          ),
        }),
      ).annotate({
        identifier: "AwsAthenaWorkGroupConfigurationResultConfigurationDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ResultConfiguration: S.optional(
            AwsAthenaWorkGroupConfigurationResultConfigurationDetails,
          ),
        }),
      ).annotate({
        identifier: "AwsAthenaWorkGroupConfigurationDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          State: S.optional(S.String),
          Configuration: S.optional(AwsAthenaWorkGroupConfigurationDetails),
        }),
      ).annotate({
        identifier: "AwsAthenaWorkGroupDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          Policy: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEventsEventbusDetails" });
  }
}
function __c89(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CertificateArn: S.optional(S.String),
          DatabaseName: S.optional(S.String),
          EndpointArn: S.optional(S.String),
          EndpointIdentifier: S.optional(S.String),
          EndpointType: S.optional(S.String),
          EngineName: S.optional(S.String),
          ExternalId: S.optional(S.String),
          ExtraConnectionAttributes: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          Port: S.optional(S.Number),
          ServerName: S.optional(S.String),
          SslMode: S.optional(S.String),
          Username: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsDmsEndpointDetails" });
    case 1:
      return S.suspend(() => S.Struct({ EventBusArn: S.optional(S.String) })).annotate({
        identifier: "AwsEventsEndpointEventBusesDetails",
      });
    case 2:
      return S.Array(AwsEventsEndpointEventBusesDetails);
    case 3:
      return S.suspend(() => S.Struct({ HealthCheck: S.optional(S.String) })).annotate({
        identifier: "AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails",
      });
    case 4:
      return S.suspend(() => S.Struct({ Route: S.optional(S.String) })).annotate({
        identifier: "AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Primary: S.optional(AwsEventsEndpointRoutingConfigFailoverConfigPrimaryDetails),
          Secondary: S.optional(AwsEventsEndpointRoutingConfigFailoverConfigSecondaryDetails),
        }),
      ).annotate({
        identifier: "AwsEventsEndpointRoutingConfigFailoverConfigDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FailoverConfig: S.optional(AwsEventsEndpointRoutingConfigFailoverConfigDetails),
        }),
      ).annotate({
        identifier: "AwsEventsEndpointRoutingConfigDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Description: S.optional(S.String),
          EndpointId: S.optional(S.String),
          EndpointUrl: S.optional(S.String),
          EventBuses: S.optional(AwsEventsEndpointEventBusesList),
          Name: S.optional(S.String),
          ReplicationConfig: S.optional(AwsEventsEndpointReplicationConfigDetails),
          RoleArn: S.optional(S.String),
          RoutingConfig: S.optional(AwsEventsEndpointRoutingConfigDetails),
          State: S.optional(S.String),
          StateReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsEventsEndpointDetails" });
  }
}
function __c90(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CdcStartPosition: S.optional(S.String),
          CdcStartTime: S.optional(S.String),
          CdcStopPosition: S.optional(S.String),
          MigrationType: S.optional(S.String),
          Id: S.optional(S.String),
          ResourceIdentifier: S.optional(S.String),
          ReplicationInstanceArn: S.optional(S.String),
          ReplicationTaskIdentifier: S.optional(S.String),
          ReplicationTaskSettings: S.optional(S.String),
          SourceEndpointArn: S.optional(S.String),
          TableMappings: S.optional(S.String),
          TargetEndpointArn: S.optional(S.String),
          TaskData: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsDmsReplicationTaskDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ReplicationSubnetGroupIdentifier: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsDmsReplicationInstanceReplicationSubnetGroupDetails",
      });
    case 2:
      return S.suspend(() => S.Struct({ VpcSecurityGroupId: S.optional(S.String) })).annotate({
        identifier: "AwsDmsReplicationInstanceVpcSecurityGroupsDetails",
      });
    case 3:
      return S.Array(AwsDmsReplicationInstanceVpcSecurityGroupsDetails);
    case 4:
      return S.suspend(() =>
        S.Struct({
          AllocatedStorage: S.optional(S.Number),
          AutoMinorVersionUpgrade: S.optional(S.Boolean),
          AvailabilityZone: S.optional(S.String),
          EngineVersion: S.optional(S.String),
          KmsKeyId: S.optional(S.String),
          MultiAZ: S.optional(S.Boolean),
          PreferredMaintenanceWindow: S.optional(S.String),
          PubliclyAccessible: S.optional(S.Boolean),
          ReplicationInstanceClass: S.optional(S.String),
          ReplicationInstanceIdentifier: S.optional(S.String),
          ReplicationSubnetGroup: S.optional(
            AwsDmsReplicationInstanceReplicationSubnetGroupDetails,
          ),
          VpcSecurityGroups: S.optional(AwsDmsReplicationInstanceVpcSecurityGroupsList),
        }),
      ).annotate({
        identifier: "AwsDmsReplicationInstanceDetails",
      });
    case 5:
      return S.suspend(() => S.Struct({ Comment: S.optional(S.String) })).annotate({
        identifier: "AwsRoute53HostedZoneConfigDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Config: S.optional(AwsRoute53HostedZoneConfigDetails),
        }),
      ).annotate({
        identifier: "AwsRoute53HostedZoneObjectDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Id: S.optional(S.String), Region: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsRoute53HostedZoneVpcDetails",
      });
  }
}
function __c91(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AwsRoute53HostedZoneVpcDetails);
    case 1:
      return S.suspend(() =>
        S.Struct({
          CloudWatchLogsLogGroupArn: S.optional(S.String),
          HostedZoneId: S.optional(S.String),
          Id: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CloudWatchLogsLogGroupArnConfigDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ CloudWatchLogsLogGroupArn: S.optional(CloudWatchLogsLogGroupArnConfigDetails) }),
      ).annotate({
        identifier: "AwsRoute53QueryLoggingConfigDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          HostedZone: S.optional(AwsRoute53HostedZoneObjectDetails),
          Vpcs: S.optional(AwsRoute53HostedZoneVpcsList),
          NameServers: S.optional(AwsRoute53HostedZoneNameServersList),
          QueryLoggingConfig: S.optional(AwsRoute53QueryLoggingConfigDetails),
        }),
      ).annotate({
        identifier: "AwsRoute53HostedZoneDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ InCluster: S.optional(S.Boolean), ClientBroker: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails",
      });
    case 5:
      return S.suspend(() => S.Struct({ DataVolumeKMSKeyId: S.optional(S.String) })).annotate({
        identifier: "AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          EncryptionInTransit: S.optional(
            AwsMskClusterClusterInfoEncryptionInfoEncryptionInTransitDetails,
          ),
          EncryptionAtRest: S.optional(
            AwsMskClusterClusterInfoEncryptionInfoEncryptionAtRestDetails,
          ),
        }),
      ).annotate({
        identifier: "AwsMskClusterClusterInfoEncryptionInfoDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Iam: S.optional(AwsMskClusterClusterInfoClientAuthenticationSaslIamDetails),
          Scram: S.optional(AwsMskClusterClusterInfoClientAuthenticationSaslScramDetails),
        }),
      ).annotate({
        identifier: "AwsMskClusterClusterInfoClientAuthenticationSaslDetails",
      });
  }
}
function __c92(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Enabled: S.optional(S.Boolean) })).annotate({
        identifier: "AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CertificateAuthorityArnList: S.optional(StringList),
          Enabled: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "AwsMskClusterClusterInfoClientAuthenticationTlsDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Sasl: S.optional(AwsMskClusterClusterInfoClientAuthenticationSaslDetails),
          Unauthenticated: S.optional(
            AwsMskClusterClusterInfoClientAuthenticationUnauthenticatedDetails,
          ),
          Tls: S.optional(AwsMskClusterClusterInfoClientAuthenticationTlsDetails),
        }),
      ).annotate({
        identifier: "AwsMskClusterClusterInfoClientAuthenticationDetails",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          EncryptionInfo: S.optional(AwsMskClusterClusterInfoEncryptionInfoDetails),
          CurrentVersion: S.optional(S.String),
          NumberOfBrokerNodes: S.optional(S.Number),
          ClusterName: S.optional(S.String),
          ClientAuthentication: S.optional(AwsMskClusterClusterInfoClientAuthenticationDetails),
          EnhancedMonitoring: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsMskClusterClusterInfoDetails",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ClusterInfo: S.optional(AwsMskClusterClusterInfoDetails) }),
      ).annotate({ identifier: "AwsMskClusterDetails" });
    case 5:
      return S.suspend(() => S.Struct({ VpcId: S.optional(S.String) })).annotate({
        identifier: "AwsS3AccessPointVpcConfigurationDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccessPointArn: S.optional(S.String),
          Alias: S.optional(S.String),
          Bucket: S.optional(S.String),
          BucketAccountId: S.optional(S.String),
          Name: S.optional(S.String),
          NetworkOrigin: S.optional(S.String),
          PublicAccessBlockConfiguration: S.optional(AwsS3AccountPublicAccessBlockDetails),
          VpcConfiguration: S.optional(AwsS3AccessPointVpcConfigurationDetails),
        }),
      ).annotate({ identifier: "AwsS3AccessPointDetails" });
    case 7:
      return S.suspend(() => S.Struct({ DirectoryId: S.optional(S.String) })).annotate({
        identifier: "AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails",
      });
  }
}
function __c93(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ClientRootCertificateChain: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          SamlProviderArn: S.optional(S.String),
          SelfServiceSamlProviderArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          ActiveDirectory: S.optional(
            AwsEc2ClientVpnEndpointAuthenticationOptionsActiveDirectoryDetails,
          ),
          MutualAuthentication: S.optional(
            AwsEc2ClientVpnEndpointAuthenticationOptionsMutualAuthenticationDetails,
          ),
          FederatedAuthentication: S.optional(
            AwsEc2ClientVpnEndpointAuthenticationOptionsFederatedAuthenticationDetails,
          ),
        }),
      ).annotate({
        identifier: "AwsEc2ClientVpnEndpointAuthenticationOptionsDetails",
      });
    case 3:
      return S.Array(AwsEc2ClientVpnEndpointAuthenticationOptionsDetails);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          CloudwatchLogGroup: S.optional(S.String),
          CloudwatchLogStream: S.optional(S.String),
        }),
      ).annotate({
        identifier: "AwsEc2ClientVpnEndpointConnectionLogOptionsDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.String), Message: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Enabled: S.optional(S.Boolean),
          LambdaFunctionArn: S.optional(S.String),
          Status: S.optional(AwsEc2ClientVpnEndpointClientConnectOptionsStatusDetails),
        }),
      ).annotate({
        identifier: "AwsEc2ClientVpnEndpointClientConnectOptionsDetails",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Enabled: S.optional(S.Boolean), BannerText: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails",
      });
  }
}
function __c94(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClientVpnEndpointId: S.optional(S.String),
          Description: S.optional(S.String),
          ClientCidrBlock: S.optional(S.String),
          DnsServer: S.optional(StringList),
          SplitTunnel: S.optional(S.Boolean),
          TransportProtocol: S.optional(S.String),
          VpnPort: S.optional(S.Number),
          ServerCertificateArn: S.optional(S.String),
          AuthenticationOptions: S.optional(AwsEc2ClientVpnEndpointAuthenticationOptionsList),
          ConnectionLogOptions: S.optional(AwsEc2ClientVpnEndpointConnectionLogOptionsDetails),
          SecurityGroupIdSet: S.optional(StringList),
          VpcId: S.optional(S.String),
          SelfServicePortalUrl: S.optional(S.String),
          ClientConnectOptions: S.optional(AwsEc2ClientVpnEndpointClientConnectOptionsDetails),
          SessionTimeoutHours: S.optional(S.Number),
          ClientLoginBannerOptions: S.optional(
            AwsEc2ClientVpnEndpointClientLoginBannerOptionsDetails,
          ),
        }),
      ).annotate({
        identifier: "AwsEc2ClientVpnEndpointDetails",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProviderType: S.optional(S.String),
          ProjectName: S.optional(S.String),
          CodeSecurityIntegrationArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "CodeRepositoryDetails" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AwsAutoScalingAutoScalingGroup: S.optional(AwsAutoScalingAutoScalingGroupDetails),
          AwsCodeBuildProject: S.optional(AwsCodeBuildProjectDetails),
          AwsCloudFrontDistribution: S.optional(AwsCloudFrontDistributionDetails),
          AwsEc2Instance: S.optional(AwsEc2InstanceDetails),
          AwsEc2NetworkInterface: S.optional(AwsEc2NetworkInterfaceDetails),
          AwsEc2SecurityGroup: S.optional(AwsEc2SecurityGroupDetails),
          AwsEc2Volume: S.optional(AwsEc2VolumeDetails),
          AwsEc2Vpc: S.optional(AwsEc2VpcDetails),
          AwsEc2Eip: S.optional(AwsEc2EipDetails),
          AwsEc2Subnet: S.optional(AwsEc2SubnetDetails),
          AwsEc2NetworkAcl: S.optional(AwsEc2NetworkAclDetails),
          AwsElbv2LoadBalancer: S.optional(AwsElbv2LoadBalancerDetails),
          AwsElasticBeanstalkEnvironment: S.optional(AwsElasticBeanstalkEnvironmentDetails),
          AwsElasticsearchDomain: S.optional(AwsElasticsearchDomainDetails),
          AwsS3Bucket: S.optional(AwsS3BucketDetails),
          AwsS3AccountPublicAccessBlock: S.optional(AwsS3AccountPublicAccessBlockDetails),
          AwsS3Object: S.optional(AwsS3ObjectDetails),
          AwsSecretsManagerSecret: S.optional(AwsSecretsManagerSecretDetails),
          AwsIamAccessKey: S.optional(AwsIamAccessKeyDetails),
          AwsIamUser: S.optional(AwsIamUserDetails),
          AwsIamPolicy: S.optional(AwsIamPolicyDetails),
          AwsApiGatewayV2Stage: S.optional(AwsApiGatewayV2StageDetails),
          AwsApiGatewayV2Api: S.optional(AwsApiGatewayV2ApiDetails),
          AwsDynamoDbTable: S.optional(AwsDynamoDbTableDetails),
          AwsApiGatewayStage: S.optional(AwsApiGatewayStageDetails),
          AwsApiGatewayRestApi: S.optional(AwsApiGatewayRestApiDetails),
          AwsCloudTrailTrail: S.optional(AwsCloudTrailTrailDetails),
          AwsSsmPatchCompliance: S.optional(AwsSsmPatchComplianceDetails),
          AwsCertificateManagerCertificate: S.optional(AwsCertificateManagerCertificateDetails),
          AwsRedshiftCluster: S.optional(AwsRedshiftClusterDetails),
          AwsElbLoadBalancer: S.optional(AwsElbLoadBalancerDetails),
          AwsIamGroup: S.optional(AwsIamGroupDetails),
          AwsIamRole: S.optional(AwsIamRoleDetails),
          AwsKmsKey: S.optional(AwsKmsKeyDetails),
          AwsLambdaFunction: S.optional(AwsLambdaFunctionDetails),
          AwsLambdaLayerVersion: S.optional(AwsLambdaLayerVersionDetails),
          AwsRdsDbInstance: S.optional(AwsRdsDbInstanceDetails),
          AwsSnsTopic: S.optional(AwsSnsTopicDetails),
          AwsSqsQueue: S.optional(AwsSqsQueueDetails),
          AwsWafWebAcl: S.optional(AwsWafWebAclDetails),
          AwsRdsDbSnapshot: S.optional(AwsRdsDbSnapshotDetails),
          AwsRdsDbClusterSnapshot: S.optional(AwsRdsDbClusterSnapshotDetails),
          AwsRdsDbCluster: S.optional(AwsRdsDbClusterDetails),
          AwsEcsCluster: S.optional(AwsEcsClusterDetails),
          AwsEcsContainer: S.optional(AwsEcsContainerDetails),
          AwsEcsTaskDefinition: S.optional(AwsEcsTaskDefinitionDetails),
          Container: S.optional(ContainerDetails),
          Other: S.optional(FieldMap),
          AwsRdsEventSubscription: S.optional(AwsRdsEventSubscriptionDetails),
          AwsEcsService: S.optional(AwsEcsServiceDetails),
          AwsAutoScalingLaunchConfiguration: S.optional(AwsAutoScalingLaunchConfigurationDetails),
          AwsEc2VpnConnection: S.optional(AwsEc2VpnConnectionDetails),
          AwsEcrContainerImage: S.optional(AwsEcrContainerImageDetails),
          AwsOpenSearchServiceDomain: S.optional(AwsOpenSearchServiceDomainDetails),
          AwsEc2VpcEndpointService: S.optional(AwsEc2VpcEndpointServiceDetails),
          AwsXrayEncryptionConfig: S.optional(AwsXrayEncryptionConfigDetails),
          AwsWafRateBasedRule: S.optional(AwsWafRateBasedRuleDetails),
          AwsWafRegionalRateBasedRule: S.optional(AwsWafRegionalRateBasedRuleDetails),
          AwsEcrRepository: S.optional(AwsEcrRepositoryDetails),
          AwsEksCluster: S.optional(AwsEksClusterDetails),
          AwsNetworkFirewallFirewallPolicy: S.optional(AwsNetworkFirewallFirewallPolicyDetails),
          AwsNetworkFirewallFirewall: S.optional(AwsNetworkFirewallFirewallDetails),
          AwsNetworkFirewallRuleGroup: S.optional(AwsNetworkFirewallRuleGroupDetails),
          AwsRdsDbSecurityGroup: S.optional(AwsRdsDbSecurityGroupDetails),
          AwsKinesisStream: S.optional(AwsKinesisStreamDetails),
          AwsEc2TransitGateway: S.optional(AwsEc2TransitGatewayDetails),
          AwsEfsAccessPoint: S.optional(AwsEfsAccessPointDetails),
          AwsCloudFormationStack: S.optional(AwsCloudFormationStackDetails),
          AwsCloudWatchAlarm: S.optional(AwsCloudWatchAlarmDetails),
          AwsEc2VpcPeeringConnection: S.optional(AwsEc2VpcPeeringConnectionDetails),
          AwsWafRegionalRuleGroup: S.optional(AwsWafRegionalRuleGroupDetails),
          AwsWafRegionalRule: S.optional(AwsWafRegionalRuleDetails),
          AwsWafRegionalWebAcl: S.optional(AwsWafRegionalWebAclDetails),
          AwsWafRule: S.optional(AwsWafRuleDetails),
          AwsWafRuleGroup: S.optional(AwsWafRuleGroupDetails),
          AwsEcsTask: S.optional(AwsEcsTaskDetails),
          AwsBackupBackupVault: S.optional(AwsBackupBackupVaultDetails),
          AwsBackupBackupPlan: S.optional(AwsBackupBackupPlanDetails),
          AwsBackupRecoveryPoint: S.optional(AwsBackupRecoveryPointDetails),
          AwsEc2LaunchTemplate: S.optional(AwsEc2LaunchTemplateDetails),
          AwsSageMakerNotebookInstance: S.optional(AwsSageMakerNotebookInstanceDetails),
          AwsWafv2WebAcl: S.optional(AwsWafv2WebAclDetails),
          AwsWafv2RuleGroup: S.optional(AwsWafv2RuleGroupDetails),
          AwsEc2RouteTable: S.optional(AwsEc2RouteTableDetails),
          AwsAmazonMqBroker: S.optional(AwsAmazonMqBrokerDetails),
          AwsAppSyncGraphQlApi: S.optional(AwsAppSyncGraphQlApiDetails),
          AwsEventSchemasRegistry: S.optional(AwsEventSchemasRegistryDetails),
          AwsGuardDutyDetector: S.optional(AwsGuardDutyDetectorDetails),
          AwsStepFunctionStateMachine: S.optional(AwsStepFunctionStateMachineDetails),
          AwsAthenaWorkGroup: S.optional(AwsAthenaWorkGroupDetails),
          AwsEventsEventbus: S.optional(AwsEventsEventbusDetails),
          AwsDmsEndpoint: S.optional(AwsDmsEndpointDetails),
          AwsEventsEndpoint: S.optional(AwsEventsEndpointDetails),
          AwsDmsReplicationTask: S.optional(AwsDmsReplicationTaskDetails),
          AwsDmsReplicationInstance: S.optional(AwsDmsReplicationInstanceDetails),
          AwsRoute53HostedZone: S.optional(AwsRoute53HostedZoneDetails),
          AwsMskCluster: S.optional(AwsMskClusterDetails),
          AwsS3AccessPoint: S.optional(AwsS3AccessPointDetails),
          AwsEc2ClientVpnEndpoint: S.optional(AwsEc2ClientVpnEndpointDetails),
          CodeRepository: S.optional(CodeRepositoryDetails),
          AzureResource: S.optional(S.Any),
        }),
      ).annotate({ identifier: "ResourceDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          Id: S.optional(S.String),
          Partition: S.optional(Partition),
          Region: S.optional(S.String),
          Provider: S.optional(CloudProviderName),
          Owner: S.optional(ResourceOwner),
          ResourceRole: S.optional(S.String),
          Tags: S.optional(FieldMap),
          DataClassification: S.optional(DataClassificationDetails),
          Details: S.optional(ResourceDetails),
          ApplicationName: S.optional(S.String),
          ApplicationArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Resource" });
    case 4:
      return S.Array(Resource);
    case 5:
      return S.suspend(() =>
        S.Struct({ ReasonCode: S.optional(S.String), Description: S.optional(S.String) }),
      ).annotate({ identifier: "StatusReason" });
    case 6:
      return S.Array(StatusReason);
    case 7:
      return S.suspend(() => S.Struct({ StandardsId: S.optional(S.String) })).annotate({
        identifier: "AssociatedStandard",
      });
  }
}
function __c95(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AssociatedStandard);
    case 1:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(TypeList) }),
      ).annotate({ identifier: "SecurityControlParameter" });
    case 2:
      return S.Array(SecurityControlParameter);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(ComplianceStatus),
          RelatedRequirements: S.optional(RelatedRequirementsList),
          StatusReasons: S.optional(StatusReasonsList),
          SecurityControlId: S.optional(S.String),
          AssociatedStandards: S.optional(AssociatedStandardsList),
          SecurityControlParameters: S.optional(SecurityControlParametersList),
        }),
      ).annotate({ identifier: "Compliance" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Text: S.optional(S.String),
          UpdatedBy: S.optional(S.String),
          UpdatedAt: S.optional(S.String),
        }),
      ).annotate({ identifier: "Note" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Version: S.optional(S.String),
          Epoch: S.optional(S.String),
          Release: S.optional(S.String),
          Architecture: S.optional(S.String),
          PackageManager: S.optional(S.String),
          FilePath: S.optional(S.String),
          FixedInVersion: S.optional(S.String),
          Remediation: S.optional(S.String),
          SourceLayerHash: S.optional(S.String),
          SourceLayerArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "SoftwarePackage" });
    case 6:
      return S.Array(SoftwarePackage);
    case 7:
      return S.suspend(() =>
        S.Struct({ Metric: S.optional(S.String), Reason: S.optional(S.String) }),
      ).annotate({ identifier: "Adjustment" });
  }
}
function __c96(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Adjustment);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Version: S.optional(S.String),
          BaseScore: S.optional(S.Number),
          BaseVector: S.optional(S.String),
          Source: S.optional(S.String),
          Adjustments: S.optional(AdjustmentList),
        }),
      ).annotate({ identifier: "Cvss" });
    case 2:
      return S.Array(Cvss);
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Url: S.optional(S.String),
          VendorSeverity: S.optional(S.String),
          VendorCreatedAt: S.optional(S.String),
          VendorUpdatedAt: S.optional(S.String),
        }),
      ).annotate({ identifier: "VulnerabilityVendor" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          EndLine: S.optional(S.Number),
          FileName: S.optional(S.String),
          FilePath: S.optional(S.String),
          StartLine: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "CodeVulnerabilitiesFilePath",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Cwes: S.optional(TypeList),
          FilePath: S.optional(CodeVulnerabilitiesFilePath),
          SourceArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "VulnerabilityCodeVulnerabilities",
      });
    case 6:
      return S.Array(VulnerabilityCodeVulnerabilities);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          VulnerablePackages: S.optional(SoftwarePackageList),
          Cvss: S.optional(CvssList),
          RelatedVulnerabilities: S.optional(StringList),
          Vendor: S.optional(VulnerabilityVendor),
          ReferenceUrls: S.optional(StringList),
          FixAvailable: S.optional(VulnerabilityFixAvailable),
          EpssScore: S.optional(S.Number),
          ExploitAvailable: S.optional(VulnerabilityExploitAvailable),
          LastKnownExploitAt: S.optional(S.String),
          CodeVulnerabilities: S.optional(VulnerabilityCodeVulnerabilitiesList),
        }),
      ).annotate({ identifier: "Vulnerability" });
  }
}
function __c97(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Vulnerability);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          InstalledCount: S.optional(S.Number),
          MissingCount: S.optional(S.Number),
          FailedCount: S.optional(S.Number),
          InstalledOtherCount: S.optional(S.Number),
          InstalledRejectedCount: S.optional(S.Number),
          InstalledPendingReboot: S.optional(S.Number),
          OperationStartTime: S.optional(S.String),
          OperationEndTime: S.optional(S.String),
          RebootOption: S.optional(S.String),
          Operation: S.optional(S.String),
        }),
      ).annotate({ identifier: "PatchSummary" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Asn: S.optional(S.Number),
          AsnOrg: S.optional(S.String),
          Isp: S.optional(S.String),
          Org: S.optional(S.String),
        }),
      ).annotate({ identifier: "IpOrganizationDetails" });
    case 3:
      return S.suspend(() =>
        S.Struct({ CountryCode: S.optional(S.String), CountryName: S.optional(S.String) }),
      ).annotate({ identifier: "Country" });
    case 4:
      return S.suspend(() => S.Struct({ CityName: S.optional(S.String) })).annotate({
        identifier: "City",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Lon: S.optional(S.Number), Lat: S.optional(S.Number) }),
      ).annotate({ identifier: "GeoLocation" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          IpAddressV4: S.optional(S.String),
          Organization: S.optional(IpOrganizationDetails),
          Country: S.optional(Country),
          City: S.optional(City),
          GeoLocation: S.optional(GeoLocation),
        }),
      ).annotate({ identifier: "ActionRemoteIpDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Port: S.optional(S.Number), PortName: S.optional(S.String) }),
      ).annotate({ identifier: "ActionRemotePortDetails" });
  }
}
function __c98(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ConnectionDirection: S.optional(S.String),
          RemoteIpDetails: S.optional(ActionRemoteIpDetails),
          RemotePortDetails: S.optional(ActionRemotePortDetails),
          LocalPortDetails: S.optional(ActionLocalPortDetails),
          Protocol: S.optional(S.String),
          Blocked: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "NetworkConnectionAction" });
    case 1:
      return S.suspend(() => S.Struct({ Domain: S.optional(S.String) })).annotate({
        identifier: "AwsApiCallActionDomainDetails",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Api: S.optional(S.String),
          ServiceName: S.optional(S.String),
          CallerType: S.optional(S.String),
          RemoteIpDetails: S.optional(ActionRemoteIpDetails),
          DomainDetails: S.optional(AwsApiCallActionDomainDetails),
          AffectedResources: S.optional(FieldMap),
          FirstSeen: S.optional(S.String),
          LastSeen: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsApiCallAction" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Domain: S.optional(S.String),
          Protocol: S.optional(S.String),
          Blocked: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DnsRequestAction" });
    case 4:
      return S.suspend(() => S.Struct({ IpAddressV4: S.optional(S.String) })).annotate({
        identifier: "ActionLocalIpDetails",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LocalPortDetails: S.optional(ActionLocalPortDetails),
          LocalIpDetails: S.optional(ActionLocalIpDetails),
          RemoteIpDetails: S.optional(ActionRemoteIpDetails),
        }),
      ).annotate({ identifier: "PortProbeDetail" });
    case 6:
      return S.Array(PortProbeDetail);
    case 7:
      return S.suspend(() =>
        S.Struct({
          PortProbeDetails: S.optional(PortProbeDetailList),
          Blocked: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "PortProbeAction" });
  }
}
function __c99(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ActionType: S.optional(S.String),
          NetworkConnectionAction: S.optional(NetworkConnectionAction),
          AwsApiCallAction: S.optional(AwsApiCallAction),
          DnsRequestAction: S.optional(DnsRequestAction),
          PortProbeAction: S.optional(PortProbeAction),
        }),
      ).annotate({ identifier: "Action" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Label: S.optional(SeverityLabel), Original: S.optional(S.String) }),
      ).annotate({ identifier: "FindingProviderSeverity" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Confidence: S.optional(S.Number),
          Criticality: S.optional(S.Number),
          RelatedFindings: S.optional(RelatedFindingList),
          Severity: S.optional(FindingProviderSeverity),
          Types: S.optional(TypeList),
        }),
      ).annotate({ identifier: "FindingProviderFields" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Labels: S.optional(TypeList),
        }),
      ).annotate({ identifier: "GeneratorDetails" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Uid: S.optional(S.String), Name: S.optional(S.String) }),
      ).annotate({ identifier: "UserAccount" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Uid: S.optional(S.String),
          Type: S.optional(S.String),
          CredentialUid: S.optional(S.String),
          Account: S.optional(UserAccount),
        }),
      ).annotate({ identifier: "ActorUser" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Uid: S.optional(S.String),
          MfaStatus: S.optional(ActorSessionMfaStatus),
          CreatedTime: S.optional(S.Number),
          Issuer: S.optional(S.String),
        }),
      ).annotate({ identifier: "ActorSession" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          User: S.optional(ActorUser),
          Session: S.optional(ActorSession),
        }),
      ).annotate({ identifier: "Actor" });
  }
}
function __c100(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Actor);
    case 1:
      return S.suspend(() =>
        S.Struct({
          City: S.optional(S.String),
          Country: S.optional(S.String),
          Lat: S.optional(S.Number),
          Lon: S.optional(S.Number),
        }),
      ).annotate({ identifier: "NetworkGeoLocation" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Number: S.optional(S.Number) }),
      ).annotate({ identifier: "NetworkAutonomousSystem" });
    case 3:
      return S.suspend(() => S.Struct({ Direction: S.optional(ConnectionDirection) })).annotate({
        identifier: "NetworkConnection",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Ip: S.optional(S.String),
          Domain: S.optional(S.String),
          Port: S.optional(S.Number),
          Location: S.optional(NetworkGeoLocation),
          AutonomousSystem: S.optional(NetworkAutonomousSystem),
          Connection: S.optional(NetworkConnection),
        }),
      ).annotate({ identifier: "NetworkEndpoint" });
    case 5:
      return S.Array(NetworkEndpoint);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Key: S.optional(S.String),
          Values: S.optional(NonEmptyStringList),
          Title: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "Indicator" });
    case 7:
      return S.Array(Indicator);
  }
}
function __c101(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(S.String),
          Id: S.optional(S.String),
          Title: S.optional(S.String),
          ProductArn: S.optional(S.String),
          ResourceIds: S.optional(NonEmptyStringList),
          SignalIndicators: S.optional(IndicatorsList),
          Name: S.optional(S.String),
          CreatedAt: S.optional(S.Number),
          UpdatedAt: S.optional(S.Number),
          FirstSeenAt: S.optional(S.Number),
          LastSeenAt: S.optional(S.Number),
          Severity: S.optional(S.Number),
          Count: S.optional(S.Number),
          ActorIds: S.optional(NonEmptyStringList),
          EndpointIds: S.optional(NonEmptyStringList),
        }),
      ).annotate({ identifier: "Signal" });
    case 1:
      return S.Array(Signal);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Uid: S.optional(S.String),
          Actors: S.optional(ActorsList),
          Endpoints: S.optional(NetworkEndpointsList),
          Signals: S.optional(SignalsList),
          SequenceIndicators: S.optional(IndicatorsList),
        }),
      ).annotate({ identifier: "Sequence" });
    case 3:
      return S.suspend(() => S.Struct({ Sequence: S.optional(Sequence) })).annotate({
        identifier: "Detection",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          SchemaVersion: S.optional(S.String),
          Id: S.optional(S.String),
          ProductArn: S.optional(S.String),
          ProductName: S.optional(S.String),
          CompanyName: S.optional(S.String),
          Region: S.optional(S.String),
          GeneratorId: S.optional(S.String),
          AwsAccountId: S.optional(S.String),
          Types: S.optional(TypeList),
          FirstObservedAt: S.optional(S.String),
          LastObservedAt: S.optional(S.String),
          CreatedAt: S.optional(S.String),
          UpdatedAt: S.optional(S.String),
          Severity: S.optional(Severity),
          Confidence: S.optional(S.Number),
          Criticality: S.optional(S.Number),
          Title: S.optional(S.String),
          Description: S.optional(S.String),
          Remediation: S.optional(Remediation),
          SourceUrl: S.optional(S.String),
          ProductFields: S.optional(FieldMap),
          UserDefinedFields: S.optional(FieldMap),
          Malware: S.optional(MalwareList),
          Network: S.optional(Network),
          NetworkPath: S.optional(NetworkPathList),
          Process: S.optional(ProcessDetails),
          Threats: S.optional(ThreatList),
          ThreatIntelIndicators: S.optional(ThreatIntelIndicatorList),
          Resources: S.optional(ResourceList),
          Compliance: S.optional(Compliance),
          VerificationState: S.optional(VerificationState),
          WorkflowState: S.optional(WorkflowState),
          Workflow: S.optional(Workflow),
          RecordState: S.optional(RecordState),
          RelatedFindings: S.optional(RelatedFindingList),
          Note: S.optional(Note),
          Vulnerabilities: S.optional(VulnerabilityList),
          PatchSummary: S.optional(PatchSummary),
          Action: S.optional(Action),
          FindingProviderFields: S.optional(FindingProviderFields),
          Sample: S.optional(S.Boolean),
          GeneratorDetails: S.optional(GeneratorDetails),
          ProcessedAt: S.optional(S.String),
          AwsAccountName: S.optional(S.String),
          Detection: S.optional(Detection),
        }),
      ).annotate({ identifier: "AwsSecurityFinding" });
    case 5:
      return S.Array(AwsSecurityFinding);
    case 6:
      return S.suspend(() =>
        S.Struct({ Findings: S.optional(BatchImportFindingsRequestFindingList) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/findings/import" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchImportFindingsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImportFindingsError" });
  }
}
function __c102(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ImportFindingsError);
    case 1:
      return S.suspend(() =>
        S.Struct({
          FailedCount: S.optional(S.Number),
          SuccessCount: S.optional(S.Number),
          FailedFindings: S.optional(ImportFindingsErrorList),
        }),
      ).annotate({
        identifier: "BatchImportFindingsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RuleArn: S.optional(S.String),
          RuleStatus: S.optional(RuleStatus),
          RuleOrder: S.optional(S.Number),
          Description: S.optional(S.String),
          RuleName: S.optional(S.String),
          IsTerminal: S.optional(S.Boolean),
          Criteria: S.optional(AutomationRulesFindingFilters),
          Actions: S.optional(ActionList),
        }),
      ).annotate({
        identifier: "UpdateAutomationRulesRequestItem",
      });
    case 3:
      return S.Array(UpdateAutomationRulesRequestItem);
    case 4:
      return S.suspend(() =>
        S.Struct({
          UpdateAutomationRulesRequestItems: S.optional(UpdateAutomationRulesRequestItemsList),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/automationrules/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchUpdateAutomationRulesRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Id: S.optional(S.String), ProductArn: S.optional(S.String) }),
      ).annotate({
        identifier: "AwsSecurityFindingIdentifier",
      });
    case 6:
      return S.Array(AwsSecurityFindingIdentifier);
    case 7:
      return S.suspend(() =>
        S.Struct({
          FindingIdentifiers: S.optional(AwsSecurityFindingIdentifierList),
          Note: S.optional(NoteUpdate),
          Severity: S.optional(SeverityUpdate),
          VerificationState: S.optional(VerificationState),
          Confidence: S.optional(S.Number),
          Criticality: S.optional(S.Number),
          Types: S.optional(TypeList),
          UserDefinedFields: S.optional(FieldMap),
          Workflow: S.optional(WorkflowUpdate),
          RelatedFindings: S.optional(RelatedFindingList),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/findings/batchupdate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchUpdateFindingsRequest",
      });
  }
}
function __c103(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FindingIdentifier: S.optional(AwsSecurityFindingIdentifier),
          ErrorCode: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchUpdateFindingsUnprocessedFinding",
      });
    case 1:
      return S.Array(BatchUpdateFindingsUnprocessedFinding);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProcessedFindings: S.optional(AwsSecurityFindingIdentifierList),
          UnprocessedFindings: S.optional(BatchUpdateFindingsUnprocessedFindingsList),
        }),
      ).annotate({
        identifier: "BatchUpdateFindingsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CloudAccountUid: S.optional(S.String),
          FindingInfoUid: S.optional(S.String),
          MetadataProductUid: S.optional(S.String),
        }),
      ).annotate({ identifier: "OcsfFindingIdentifier" });
    case 4:
      return S.Array(OcsfFindingIdentifier);
    case 5:
      return S.suspend(() =>
        S.Struct({
          MetadataUids: S.optional(MetadataUidList),
          FindingIdentifiers: S.optional(OcsfFindingIdentifierList),
          Comment: S.optional(S.String),
          SeverityId: S.optional(S.Number),
          StatusId: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/findingsv2/batchupdatev2" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchUpdateFindingsV2Request",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FindingIdentifier: S.optional(OcsfFindingIdentifier),
          MetadataUid: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchUpdateFindingsV2ProcessedFinding",
      });
    case 7:
      return S.Array(BatchUpdateFindingsV2ProcessedFinding);
  }
}
function __c104(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FindingIdentifier: S.optional(OcsfFindingIdentifier),
          MetadataUid: S.optional(S.String),
          ErrorCode: S.optional(BatchUpdateFindingsV2UnprocessedFindingErrorCode),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "BatchUpdateFindingsV2UnprocessedFinding",
      });
    case 1:
      return S.Array(BatchUpdateFindingsV2UnprocessedFinding);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProcessedFindings: S.optional(BatchUpdateFindingsV2ProcessedFindingsList),
          UnprocessedFindings: S.optional(BatchUpdateFindingsV2UnprocessedFindingsList),
        }),
      ).annotate({
        identifier: "BatchUpdateFindingsV2Response",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StandardsArn: S.optional(S.String),
          SecurityControlId: S.optional(S.String),
          AssociationStatus: S.optional(AssociationStatus),
          UpdatedReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StandardsControlAssociationUpdate",
      });
    case 4:
      return S.Array(StandardsControlAssociationUpdate);
    case 5:
      return S.suspend(() =>
        S.Struct({
          StandardsControlAssociationUpdates: S.optional(StandardsControlAssociationUpdates),
        }).pipe(
          T.all(T.Http({ method: "PATCH", uri: "/associations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "BatchUpdateStandardsControlAssociationsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StandardsControlAssociationUpdate: S.optional(StandardsControlAssociationUpdate),
          ErrorCode: S.optional(UnprocessedErrorCode),
          ErrorReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UnprocessedStandardsControlAssociationUpdate",
      });
    case 7:
      return S.Array(UnprocessedStandardsControlAssociationUpdate);
  }
}
function __c105(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UnprocessedAssociationUpdates: S.optional(UnprocessedStandardsControlAssociationUpdates),
        }),
      ).annotate({
        identifier: "BatchUpdateStandardsControlAssociationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Id: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/actionTargets" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateActionTargetRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ ActionTargetArn: S.optional(S.String) })).annotate({
        identifier: "CreateActionTargetResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RegionLinkingMode: S.optional(S.String),
          LinkedRegions: S.optional(StringList),
          Tags: S.optional(TagMap),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/aggregatorv2/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAggregatorV2Request",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AggregatorV2Arn: S.optional(S.String),
          AggregationRegion: S.optional(S.String),
          RegionLinkingMode: S.optional(S.String),
          LinkedRegions: S.optional(StringList),
        }),
      ).annotate({
        identifier: "CreateAggregatorV2Response",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Tags: S.optional(TagMap),
          RuleStatus: S.optional(RuleStatus),
          RuleOrder: S.optional(S.Number),
          RuleName: S.optional(S.String),
          Description: S.optional(S.String),
          IsTerminal: S.optional(S.Boolean),
          Criteria: S.optional(AutomationRulesFindingFilters),
          Actions: S.optional(ActionList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/automationrules/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAutomationRuleRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ RuleArn: S.optional(S.String) })).annotate({
        identifier: "CreateAutomationRuleResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ FieldName: S.optional(OcsfStringField), Filter: S.optional(StringFilter) }),
      ).annotate({ identifier: "OcsfStringFilter" });
  }
}
function __c106(j: number): any {
  switch (j) {
    case 0:
      return S.Array(OcsfStringFilter);
    case 1:
      return S.suspend(() =>
        S.Struct({ FieldName: S.optional(OcsfDateField), Filter: S.optional(DateFilter) }),
      ).annotate({ identifier: "OcsfDateFilter" });
    case 2:
      return S.Array(OcsfDateFilter);
    case 3:
      return S.suspend(() => S.Struct({ Value: S.optional(S.Boolean) })).annotate({
        identifier: "BooleanFilter",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ FieldName: S.optional(OcsfBooleanField), Filter: S.optional(BooleanFilter) }),
      ).annotate({ identifier: "OcsfBooleanFilter" });
    case 5:
      return S.Array(OcsfBooleanFilter);
    case 6:
      return S.suspend(() =>
        S.Struct({ FieldName: S.optional(OcsfNumberField), Filter: S.optional(NumberFilter) }),
      ).annotate({ identifier: "OcsfNumberFilter" });
    case 7:
      return S.Array(OcsfNumberFilter);
  }
}
function __c107(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ FieldName: S.optional(OcsfMapField), Filter: S.optional(MapFilter) }),
      ).annotate({ identifier: "OcsfMapFilter" });
    case 1:
      return S.Array(OcsfMapFilter);
    case 2:
      return S.suspend(() => S.Struct({ Cidr: S.optional(S.String) })).annotate({
        identifier: "IpFilter",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ FieldName: S.optional(OcsfIpField), Filter: S.optional(IpFilter) }),
      ).annotate({ identifier: "OcsfIpFilter" });
    case 4:
      return S.Array(OcsfIpFilter);
    case 5:
      return S.suspend(() =>
        S.Struct({
          StringFilters: S.optional(OcsfStringFilterList),
          DateFilters: S.optional(OcsfDateFilterList),
          BooleanFilters: S.optional(OcsfBooleanFilterList),
          NumberFilters: S.optional(OcsfNumberFilterList),
          MapFilters: S.optional(OcsfMapFilterList),
          IpFilters: S.optional(OcsfIpFilterList),
          NestedCompositeFilters: S.optional(
            S.suspend(() => CompositeFilterList).annotate({ identifier: "CompositeFilterList" }),
          ),
          Operator: S.optional(AllowedOperators),
        }),
      ).annotate({ identifier: "CompositeFilter" });
    case 6:
      return S.Array(
        /*@__PURE__*/ S.suspend((): S.Schema<CompositeFilter> => CompositeFilter).annotate({
          identifier: "CompositeFilter",
        }),
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          CompositeFilters: S.optional(CompositeFilterList),
          CompositeOperator: S.optional(AllowedOperators),
        }),
      ).annotate({ identifier: "OcsfFindingFilters" });
  }
}
function __c108(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ OcsfFindingCriteria: OcsfFindingFilters })]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          SeverityId: S.optional(S.Number),
          Comment: S.optional(S.String),
          StatusId: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "AutomationRulesFindingFieldsUpdateV2",
      });
    case 2:
      return S.suspend(() => S.Struct({ ConnectorArn: S.optional(S.String) })).annotate({
        identifier: "ExternalIntegrationConfiguration",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(AutomationRulesActionTypeV2),
          FindingFieldsUpdate: S.optional(AutomationRulesFindingFieldsUpdateV2),
          ExternalIntegrationConfiguration: S.optional(ExternalIntegrationConfiguration),
        }),
      ).annotate({ identifier: "AutomationRulesActionV2" });
    case 4:
      return S.Array(AutomationRulesActionV2);
    case 5:
      return S.suspend(() =>
        S.Struct({
          RuleName: S.optional(S.String),
          RuleStatus: S.optional(RuleStatusV2),
          Description: S.optional(S.String),
          RuleOrder: S.optional(S.Number),
          Criteria: S.optional(Criteria),
          Actions: S.optional(AutomationRulesActionListV2),
          Tags: S.optional(TagMap),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/automationrulesv2/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateAutomationRuleV2Request",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ RuleArn: S.optional(S.String), RuleId: S.optional(S.String) }),
      ).annotate({
        identifier: "CreateAutomationRuleV2Response",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ SecurityControlId: S.optional(S.String), Parameters: S.optional(Parameters) }),
      ).annotate({
        identifier: "SecurityControlCustomParameter",
      });
  }
}
function __c109(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SecurityControlCustomParameter);
    case 1:
      return S.suspend(() =>
        S.Struct({
          EnabledSecurityControlIdentifiers: S.optional(EnabledSecurityControlIdentifierList),
          DisabledSecurityControlIdentifiers: S.optional(DisabledSecurityControlIdentifierList),
          SecurityControlCustomParameters: S.optional(SecurityControlCustomParametersList),
        }),
      ).annotate({
        identifier: "SecurityControlsConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ServiceEnabled: S.optional(S.Boolean),
          EnabledStandardIdentifiers: S.optional(EnabledStandardIdentifierList),
          SecurityControlsConfiguration: S.optional(SecurityControlsConfiguration),
        }),
      ).annotate({ identifier: "SecurityHubPolicy" });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ SecurityHub: SecurityHubPolicy })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          ConfigurationPolicy: S.optional(Policy),
          Tags: S.optional(TagMap),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configurationPolicy/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateConfigurationPolicyRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ConfigurationPolicy: S.optional(Policy),
        }),
      ).annotate({
        identifier: "CreateConfigurationPolicyResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ScopeType: S.optional(ScopeType), ScopeValues: S.optional(ScopeValueList) }),
      ).annotate({ identifier: "AzureScopeConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AWSConfigConnectorArn: S.optional(S.String),
          ScopeConfiguration: S.optional(AzureScopeConfiguration),
          AzureRegions: S.optional(AzureRegionList),
        }),
      ).annotate({
        identifier: "AzureProviderConfiguration",
      });
  }
}
function __c110(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ Azure: AzureProviderConfiguration })]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Provider: S.optional(CspmProviderConfiguration),
          Tags: S.optional(TagMap),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/connectors" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateConnectorRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ConnectorArn: S.optional(S.String),
          ConnectorId: S.optional(S.String),
          ConnectorStatus: S.optional(CspmConnectorStatus),
          EnablementStatus: S.optional(CspmEnablementStatus),
        }),
      ).annotate({ identifier: "CreateConnectorResponse" });
    case 3:
      return S.suspend(() => S.Struct({ ProjectKey: S.optional(S.String) })).annotate({
        identifier: "JiraCloudProviderConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ InstanceName: S.optional(S.String), SecretArn: S.optional(S.String) }),
      ).annotate({
        identifier: "ServiceNowProviderConfiguration",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ JiraCloud: JiraCloudProviderConfiguration }),
        /*@__PURE__*/ S.Struct({ ServiceNow: ServiceNowProviderConfiguration }),
        /*@__PURE__*/ S.Struct({ Azure: AzureProviderConfiguration }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Provider: S.optional(ProviderConfiguration),
          KmsKeyArn: S.optional(S.String),
          Tags: S.optional(TagMap),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/connectorsv2" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateConnectorV2Request" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConnectorArn: S.optional(S.String),
          ConnectorId: S.optional(S.String),
          AuthUrl: S.optional(S.String),
          ConnectorStatus: S.optional(ConnectorStatus),
          EnablementStatus: S.optional(EnablementStatus),
        }),
      ).annotate({
        identifier: "CreateConnectorV2Response",
      });
  }
}
function __c111(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ RegionLinkingMode: S.optional(S.String), Regions: S.optional(StringList) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/findingAggregator/create" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateFindingAggregatorRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          FindingAggregatorArn: S.optional(S.String),
          FindingAggregationRegion: S.optional(S.String),
          RegionLinkingMode: S.optional(S.String),
          Regions: S.optional(StringList),
        }),
      ).annotate({
        identifier: "CreateFindingAggregatorResponse",
      });
    case 2:
      return S.Array(IpFilter);
    case 3:
      return S.suspend(() => S.Struct({ Value: S.optional(S.String) })).annotate({
        identifier: "KeywordFilter",
      });
    case 4:
      return S.Array(KeywordFilter);
    case 5:
      return S.Array(BooleanFilter);
    case 6:
      return S.suspend(() =>
        S.Struct({
          ProductArn: S.optional(StringFilterList),
          AwsAccountId: S.optional(StringFilterList),
          Id: S.optional(StringFilterList),
          GeneratorId: S.optional(StringFilterList),
          Region: S.optional(StringFilterList),
          Type: S.optional(StringFilterList),
          FirstObservedAt: S.optional(DateFilterList),
          LastObservedAt: S.optional(DateFilterList),
          CreatedAt: S.optional(DateFilterList),
          UpdatedAt: S.optional(DateFilterList),
          SeverityProduct: S.optional(NumberFilterList),
          SeverityNormalized: S.optional(NumberFilterList),
          SeverityLabel: S.optional(StringFilterList),
          Confidence: S.optional(NumberFilterList),
          Criticality: S.optional(NumberFilterList),
          Title: S.optional(StringFilterList),
          Description: S.optional(StringFilterList),
          RecommendationText: S.optional(StringFilterList),
          SourceUrl: S.optional(StringFilterList),
          ProductFields: S.optional(MapFilterList),
          ProductName: S.optional(StringFilterList),
          CompanyName: S.optional(StringFilterList),
          UserDefinedFields: S.optional(MapFilterList),
          MalwareName: S.optional(StringFilterList),
          MalwareType: S.optional(StringFilterList),
          MalwarePath: S.optional(StringFilterList),
          MalwareState: S.optional(StringFilterList),
          NetworkDirection: S.optional(StringFilterList),
          NetworkProtocol: S.optional(StringFilterList),
          NetworkSourceIpV4: S.optional(IpFilterList),
          NetworkSourceIpV6: S.optional(IpFilterList),
          NetworkSourcePort: S.optional(NumberFilterList),
          NetworkSourceDomain: S.optional(StringFilterList),
          NetworkSourceMac: S.optional(StringFilterList),
          NetworkDestinationIpV4: S.optional(IpFilterList),
          NetworkDestinationIpV6: S.optional(IpFilterList),
          NetworkDestinationPort: S.optional(NumberFilterList),
          NetworkDestinationDomain: S.optional(StringFilterList),
          ProcessName: S.optional(StringFilterList),
          ProcessPath: S.optional(StringFilterList),
          ProcessPid: S.optional(NumberFilterList),
          ProcessParentPid: S.optional(NumberFilterList),
          ProcessLaunchedAt: S.optional(DateFilterList),
          ProcessTerminatedAt: S.optional(DateFilterList),
          ThreatIntelIndicatorType: S.optional(StringFilterList),
          ThreatIntelIndicatorValue: S.optional(StringFilterList),
          ThreatIntelIndicatorCategory: S.optional(StringFilterList),
          ThreatIntelIndicatorLastObservedAt: S.optional(DateFilterList),
          ThreatIntelIndicatorSource: S.optional(StringFilterList),
          ThreatIntelIndicatorSourceUrl: S.optional(StringFilterList),
          ResourceType: S.optional(StringFilterList),
          ResourceId: S.optional(StringFilterList),
          ResourcePartition: S.optional(StringFilterList),
          ResourceRegion: S.optional(StringFilterList),
          ResourceTags: S.optional(MapFilterList),
          ResourceAwsEc2InstanceType: S.optional(StringFilterList),
          ResourceAwsEc2InstanceImageId: S.optional(StringFilterList),
          ResourceAwsEc2InstanceIpV4Addresses: S.optional(IpFilterList),
          ResourceAwsEc2InstanceIpV6Addresses: S.optional(IpFilterList),
          ResourceAwsEc2InstanceKeyName: S.optional(StringFilterList),
          ResourceAwsEc2InstanceIamInstanceProfileArn: S.optional(StringFilterList),
          ResourceAwsEc2InstanceVpcId: S.optional(StringFilterList),
          ResourceAwsEc2InstanceSubnetId: S.optional(StringFilterList),
          ResourceAwsEc2InstanceLaunchedAt: S.optional(DateFilterList),
          ResourceAwsS3BucketOwnerId: S.optional(StringFilterList),
          ResourceAwsS3BucketOwnerName: S.optional(StringFilterList),
          ResourceAwsIamAccessKeyUserName: S.optional(StringFilterList),
          ResourceAwsIamAccessKeyPrincipalName: S.optional(StringFilterList),
          ResourceAwsIamAccessKeyStatus: S.optional(StringFilterList),
          ResourceAwsIamAccessKeyCreatedAt: S.optional(DateFilterList),
          ResourceAwsIamUserUserName: S.optional(StringFilterList),
          ResourceContainerName: S.optional(StringFilterList),
          ResourceContainerImageId: S.optional(StringFilterList),
          ResourceContainerImageName: S.optional(StringFilterList),
          ResourceContainerLaunchedAt: S.optional(DateFilterList),
          ResourceDetailsOther: S.optional(MapFilterList),
          ComplianceStatus: S.optional(StringFilterList),
          VerificationState: S.optional(StringFilterList),
          WorkflowState: S.optional(StringFilterList),
          WorkflowStatus: S.optional(StringFilterList),
          RecordState: S.optional(StringFilterList),
          RelatedFindingsProductArn: S.optional(StringFilterList),
          RelatedFindingsId: S.optional(StringFilterList),
          NoteText: S.optional(StringFilterList),
          NoteUpdatedAt: S.optional(DateFilterList),
          NoteUpdatedBy: S.optional(StringFilterList),
          Keyword: S.optional(KeywordFilterList),
          FindingProviderFieldsConfidence: S.optional(NumberFilterList),
          FindingProviderFieldsCriticality: S.optional(NumberFilterList),
          FindingProviderFieldsRelatedFindingsId: S.optional(StringFilterList),
          FindingProviderFieldsRelatedFindingsProductArn: S.optional(StringFilterList),
          FindingProviderFieldsSeverityLabel: S.optional(StringFilterList),
          FindingProviderFieldsSeverityOriginal: S.optional(StringFilterList),
          FindingProviderFieldsTypes: S.optional(StringFilterList),
          Sample: S.optional(BooleanFilterList),
          ComplianceSecurityControlId: S.optional(StringFilterList),
          ComplianceAssociatedStandardsId: S.optional(StringFilterList),
          VulnerabilitiesExploitAvailable: S.optional(StringFilterList),
          VulnerabilitiesFixAvailable: S.optional(StringFilterList),
          ComplianceSecurityControlParametersName: S.optional(StringFilterList),
          ComplianceSecurityControlParametersValue: S.optional(StringFilterList),
          AwsAccountName: S.optional(StringFilterList),
          ResourceApplicationName: S.optional(StringFilterList),
          ResourceApplicationArn: S.optional(StringFilterList),
          ResourceOwnerAccountId: S.optional(StringFilterList),
          ResourceOwnerOrgId: S.optional(StringFilterList),
          ResourceProvider: S.optional(StringFilterList),
        }),
      ).annotate({
        identifier: "AwsSecurityFindingFilters",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Filters: S.optional(AwsSecurityFindingFilters),
          GroupByAttribute: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/insights" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateInsightRequest" });
  }
}
function __c112(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ InsightArn: S.optional(S.String) })).annotate({
        identifier: "CreateInsightResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AccountId: S.optional(S.String), Email: S.optional(S.String) }),
      ).annotate({ identifier: "AccountDetails" });
    case 2:
      return S.Array(AccountDetails);
    case 3:
      return S.suspend(() =>
        S.Struct({ AccountDetails: S.optional(AccountDetailsList) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/members" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateMembersRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ AccountId: S.optional(S.String), ProcessingResult: S.optional(S.String) }),
      ).annotate({ identifier: "Result" });
    case 5:
      return S.Array(Result);
    case 6:
      return S.suspend(() => S.Struct({ UnprocessedAccounts: S.optional(ResultList) })).annotate({
        identifier: "CreateMembersResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConnectorId: S.optional(S.String),
          FindingMetadataUid: S.optional(S.String),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Mode: S.optional(TicketCreationMode),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/ticketsv2" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateTicketV2Request" });
  }
}
function __c113(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TicketId: S.optional(S.String), TicketSrcUrl: S.optional(S.String) }),
      ).annotate({ identifier: "CreateTicketV2Response" });
    case 1:
      return S.suspend(() =>
        S.Struct({ AccountIds: S.optional(AccountIdList) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/invitations/decline" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeclineInvitationsRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ UnprocessedAccounts: S.optional(ResultList) })).annotate({
        identifier: "DeclineInvitationsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ActionTargetArn: S.String.pipe(T.HttpLabel("ActionTargetArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/actionTargets/{ActionTargetArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteActionTargetRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ AggregatorV2Arn: S.String.pipe(T.HttpLabel("AggregatorV2Arn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/aggregatorv2/delete/{AggregatorV2Arn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAggregatorV2Request",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/automationrulesv2/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteAutomationRuleV2Request",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/configurationPolicy/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteConfigurationPolicyRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ConnectorId: S.String.pipe(T.HttpLabel("ConnectorId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/connectors/{ConnectorId+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteConnectorRequest" });
  }
}
function __c114(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ EnablementStatus: S.optional(CspmEnablementStatus) }),
      ).annotate({ identifier: "DeleteConnectorResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ConnectorId: S.String.pipe(T.HttpLabel("ConnectorId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/connectorsv2/{ConnectorId+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteConnectorV2Request" });
    case 2:
      return S.suspend(() => S.Struct({ EnablementStatus: S.optional(EnablementStatus) })).annotate(
        {
          identifier: "DeleteConnectorV2Response",
        },
      );
    case 3:
      return S.suspend(() =>
        S.Struct({ FindingAggregatorArn: S.String.pipe(T.HttpLabel("FindingAggregatorArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/findingAggregator/delete/{FindingAggregatorArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteFindingAggregatorRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteFindingAggregatorResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ InsightArn: S.String.pipe(T.HttpLabel("InsightArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/insights/{InsightArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteInsightRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ AccountIds: S.optional(AccountIdList) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/invitations/delete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteInvitationsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ AccountIds: S.optional(AccountIdList) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/members/delete" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteMembersRequest" });
  }
}
function __c115(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ActionTargetArns: S.optional(ArnList),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/actionTargets/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeActionTargetsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ActionTargetArn: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "ActionTarget" });
    case 2:
      return S.Array(ActionTarget);
    case 3:
      return S.suspend(() =>
        S.Struct({ ActionTargets: S.optional(ActionTargetList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeActionTargetsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ HubArn: S.optional(S.String).pipe(T.HttpQuery("HubArn")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/accounts" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeHubRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          HubArn: S.optional(S.String),
          SubscribedAt: S.optional(S.String),
          AutoEnableControls: S.optional(S.Boolean),
          ControlFindingGenerator: S.optional(ControlFindingGenerator),
        }),
      ).annotate({ identifier: "DescribeHubResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/organization/configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeOrganizationConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConfigurationType: S.optional(OrganizationConfigurationConfigurationType),
          Status: S.optional(OrganizationConfigurationStatus),
          StatusMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "OrganizationConfiguration",
      });
  }
}
function __c116(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AutoEnable: S.optional(S.Boolean),
          MemberAccountLimitReached: S.optional(S.Boolean),
          AutoEnableStandards: S.optional(AutoEnableStandards),
          OrganizationConfiguration: S.optional(OrganizationConfiguration),
        }),
      ).annotate({
        identifier: "DescribeOrganizationConfigurationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          ProductArn: S.optional(S.String).pipe(T.HttpQuery("ProductArn")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/products" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeProductsRequest" });
    case 2:
      return S.Array(IntegrationType);
    case 3:
      return S.suspend(() =>
        S.Struct({
          ProductArn: S.optional(S.String),
          ProductName: S.optional(S.String),
          CompanyName: S.optional(S.String),
          Description: S.optional(S.String),
          Categories: S.optional(CategoryList),
          IntegrationTypes: S.optional(IntegrationTypeList),
          MarketplaceUrl: S.optional(S.String),
          ActivationUrl: S.optional(S.String),
          ProductSubscriptionResourcePolicy: S.optional(S.String),
        }),
      ).annotate({ identifier: "Product" });
    case 4:
      return S.Array(Product);
    case 5:
      return S.suspend(() =>
        S.Struct({ Products: S.optional(ProductsList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "DescribeProductsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/productsV2" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeProductsV2Request",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProductV2Name: S.optional(S.String),
          CompanyName: S.optional(S.String),
          Description: S.optional(S.String),
          Categories: S.optional(CategoryList),
          IntegrationV2Types: S.optional(IntegrationV2TypeList),
          MarketplaceUrl: S.optional(S.String),
          ActivationUrl: S.optional(S.String),
          MarketplaceProductId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ProductV2" });
  }
}
function __c117(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ProductV2);
    case 1:
      return S.suspend(() =>
        S.Struct({ ProductsV2: S.optional(ProductsV2List), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeProductsV2Response",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/hubv2" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeSecurityHubV2Request",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FeatureStatus: S.optional(FeatureStatus),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "FeatureDetail" });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ FeatureDetail.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          HubV2Arn: S.optional(S.String),
          SubscribedAt: S.optional(S.String),
          Features: S.optional(Features),
        }),
      ).annotate({
        identifier: "DescribeSecurityHubV2Response",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          Providers: S.optional(StandardsProviders).pipe(T.HttpQuery("Providers")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/standards" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DescribeStandardsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ Company: S.optional(S.String), Product: S.optional(S.String) }),
      ).annotate({ identifier: "StandardsManagedBy" });
  }
}
function __c118(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StandardsArn: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          EnabledByDefault: S.optional(S.Boolean),
          Provider: S.optional(StandardsProvider),
          StandardsManagedBy: S.optional(StandardsManagedBy),
        }),
      ).annotate({ identifier: "Standard" });
    case 1:
      return S.Array(Standard);
    case 2:
      return S.suspend(() =>
        S.Struct({ Standards: S.optional(Standards), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeStandardsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StandardsSubscriptionArn: S.String.pipe(T.HttpLabel("StandardsSubscriptionArn")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/standards/controls/{StandardsSubscriptionArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeStandardsControlsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          StandardsControlArn: S.optional(S.String),
          ControlStatus: S.optional(ControlStatus),
          DisabledReason: S.optional(S.String),
          ControlStatusUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ControlId: S.optional(S.String),
          Title: S.optional(S.String),
          Description: S.optional(S.String),
          RemediationUrl: S.optional(S.String),
          SeverityRating: S.optional(SeverityRating),
          RelatedRequirements: S.optional(RelatedRequirementsList),
        }),
      ).annotate({ identifier: "StandardsControl" });
    case 5:
      return S.Array(StandardsControl);
    case 6:
      return S.suspend(() =>
        S.Struct({ Controls: S.optional(StandardsControls), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "DescribeStandardsControlsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProductSubscriptionArn: S.String.pipe(T.HttpLabel("ProductSubscriptionArn")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/productSubscriptions/{ProductSubscriptionArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisableImportFindingsForProductRequest",
      });
  }
}
function __c119(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AdminAccountId: S.optional(S.String),
          Feature: S.optional(SecurityHubFeature),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/organization/admin/disable" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisableOrganizationAdminAccountRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/accounts" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisableSecurityHubRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ FeatureName: FeatureName.pipe(T.HttpLabel("FeatureName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/hubv2/feature/{FeatureName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisableSecurityHubFeatureV2Request",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/hubv2" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DisableSecurityHubV2Request",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/administrator/disassociate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateFromAdministratorAccountRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/master/disassociate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateFromMasterAccountRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ AccountIds: S.optional(AccountIdList) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/members/disassociate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateMembersRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ProductArn: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/productSubscriptions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "EnableImportFindingsForProductRequest",
      });
  }
}
function __c120(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ProductSubscriptionArn: S.optional(S.String) })).annotate({
        identifier: "EnableImportFindingsForProductResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AdminAccountId: S.optional(S.String),
          Feature: S.optional(SecurityHubFeature),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/organization/admin/enable" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "EnableOrganizationAdminAccountRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AdminAccountId: S.optional(S.String), Feature: S.optional(SecurityHubFeature) }),
      ).annotate({
        identifier: "EnableOrganizationAdminAccountResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Tags: S.optional(TagMap),
          EnableDefaultStandards: S.optional(S.Boolean),
          ControlFindingGenerator: S.optional(ControlFindingGenerator),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/accounts" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "EnableSecurityHubRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ FeatureName: FeatureName.pipe(T.HttpLabel("FeatureName")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/hubv2/feature/{FeatureName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "EnableSecurityHubFeatureV2Request",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Tags: S.optional(TagMap) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/hubv2" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "EnableSecurityHubV2Request",
      });
    case 6:
      return S.suspend(() => S.Struct({ HubV2Arn: S.optional(S.String) })).annotate({
        identifier: "EnableSecurityHubV2Response",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ MetadataUid: S.String.pipe(T.HttpLabel("MetadataUid")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/recommendedPolicyV2/{MetadataUid}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GenerateRecommendedPolicyV2Request",
      });
  }
}
function __c121(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/administrator" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetAdministratorAccountRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          InvitationId: S.optional(S.String),
          InvitedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          MemberStatus: S.optional(S.String),
        }),
      ).annotate({ identifier: "Invitation" });
    case 2:
      return S.suspend(() => S.Struct({ Administrator: S.optional(Invitation) })).annotate({
        identifier: "GetAdministratorAccountResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ AggregatorV2Arn: S.String.pipe(T.HttpLabel("AggregatorV2Arn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/aggregatorv2/get/{AggregatorV2Arn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAggregatorV2Request" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AggregatorV2Arn: S.optional(S.String),
          AggregationRegion: S.optional(S.String),
          RegionLinkingMode: S.optional(S.String),
          LinkedRegions: S.optional(StringList),
        }),
      ).annotate({ identifier: "GetAggregatorV2Response" });
    case 5:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/automationrulesv2/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetAutomationRuleV2Request",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RuleArn: S.optional(S.String),
          RuleId: S.optional(S.String),
          RuleOrder: S.optional(S.Number),
          RuleName: S.optional(S.String),
          RuleStatus: S.optional(RuleStatusV2),
          Description: S.optional(S.String),
          Criteria: S.optional(Criteria),
          Actions: S.optional(AutomationRulesActionListV2),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "GetAutomationRuleV2Response",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Identifier: S.String.pipe(T.HttpLabel("Identifier")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/configurationPolicy/get/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConfigurationPolicyRequest",
      });
  }
}
function __c122(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Target: S.optional(Target) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configurationPolicyAssociation/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetConfigurationPolicyAssociationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ConnectorId: S.String.pipe(T.HttpLabel("ConnectorId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/connectors/{ConnectorId+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetConnectorRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(HealthIssueCode), Message: S.optional(S.String) }),
      ).annotate({ identifier: "HealthIssue" });
    case 3:
      return S.Array(HealthIssue);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ConnectorStatus: S.optional(CspmConnectorStatus),
          Message: S.optional(S.String),
          LastCheckedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Issues: S.optional(HealthIssueList),
        }),
      ).annotate({ identifier: "CspmHealthCheck" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AWSConfigConnectorArn: S.optional(S.String),
          ScopeConfiguration: S.optional(AzureScopeConfiguration),
          AzureRegions: S.optional(AzureRegionList),
        }),
      ).annotate({ identifier: "AzureDetail" });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ Azure: AzureDetail })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConnectorArn: S.optional(S.String),
          ConnectorId: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          LastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Health: S.optional(CspmHealthCheck),
          ProviderDetail: S.optional(CspmProviderDetail),
          CreatedBy: S.optional(S.String),
          EnablementStatus: S.optional(CspmEnablementStatus),
        }),
      ).annotate({ identifier: "GetConnectorResponse" });
  }
}
function __c123(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ConnectorId: S.String.pipe(T.HttpLabel("ConnectorId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/connectorsv2/{ConnectorId+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetConnectorV2Request" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          CloudId: S.optional(S.String),
          ProjectKey: S.optional(S.String),
          Domain: S.optional(S.String),
          AuthUrl: S.optional(S.String),
          AuthStatus: S.optional(ConnectorAuthStatus),
        }),
      ).annotate({ identifier: "JiraCloudDetail" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          InstanceName: S.optional(S.String),
          SecretArn: S.optional(S.String),
          AuthStatus: S.optional(ConnectorAuthStatus),
        }),
      ).annotate({ identifier: "ServiceNowDetail" });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ JiraCloud: JiraCloudDetail }),
        /*@__PURE__*/ S.Struct({ ServiceNow: ServiceNowDetail }),
        /*@__PURE__*/ S.Struct({ Azure: AzureDetail }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ConnectorArn: S.optional(S.String),
          ConnectorId: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          KmsKeyArn: S.optional(S.String),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          LastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          Health: S.optional(HealthCheck),
          ProviderDetail: S.optional(ProviderDetail),
          EnablementStatus: S.optional(EnablementStatus),
          EnablementStatusReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetConnectorV2Response" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          StandardsSubscriptionArns: S.optional(StandardsSubscriptionArns),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          Providers: S.optional(StandardsProviders),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/standards/get" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetEnabledStandardsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          StandardsSubscriptions: S.optional(StandardsSubscriptions),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetEnabledStandardsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ FindingAggregatorArn: S.String.pipe(T.HttpLabel("FindingAggregatorArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/findingAggregator/get/{FindingAggregatorArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetFindingAggregatorRequest",
      });
  }
}
function __c124(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          FindingIdentifier: S.optional(AwsSecurityFindingIdentifier),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/findingHistory/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetFindingHistoryRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Type: S.optional(FindingHistoryUpdateSourceType),
          Identity: S.optional(S.String),
        }),
      ).annotate({
        identifier: "FindingHistoryUpdateSource",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          UpdatedField: S.optional(S.String),
          OldValue: S.optional(S.String),
          NewValue: S.optional(S.String),
        }),
      ).annotate({ identifier: "FindingHistoryUpdate" });
    case 3:
      return S.Array(FindingHistoryUpdate);
    case 4:
      return S.suspend(() =>
        S.Struct({
          FindingIdentifier: S.optional(AwsSecurityFindingIdentifier),
          UpdateTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          FindingCreated: S.optional(S.Boolean),
          UpdateSource: S.optional(FindingHistoryUpdateSource),
          Updates: S.optional(FindingHistoryUpdatesList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "FindingHistoryRecord" });
    case 5:
      return S.Array(FindingHistoryRecord);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Records: S.optional(FindingHistoryRecordList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetFindingHistoryResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Field: S.optional(S.String), SortOrder: S.optional(SortOrder) }),
      ).annotate({ identifier: "SortCriterion" });
  }
}
function __c125(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SortCriterion);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(AwsSecurityFindingFilters),
          SortCriteria: S.optional(SortCriteria),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/findings" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetFindingsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Findings: S.optional(AwsSecurityFindingList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "GetFindingsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(OcsfFindingFilters),
          GroupByField: S.optional(GroupByField),
        }),
      ).annotate({ identifier: "GroupByRule" });
    case 4:
      return S.Array(GroupByRule);
    case 5:
      return S.suspend(() =>
        S.Struct({
          OrganizationId: S.optional(S.String),
          OrganizationalUnitId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AwsOrganizationScope" });
    case 6:
      return S.Array(AwsOrganizationScope);
    case 7:
      return S.suspend(() =>
        S.Struct({ AwsOrganizations: S.optional(AwsOrganizationScopeList) }),
      ).annotate({ identifier: "FindingScopes" });
  }
}
function __c126(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GroupByRules: S.optional(GroupByRules),
          Scopes: S.optional(FindingScopes),
          SortOrder: S.optional(SortOrder),
          MaxStatisticResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/findingsv2/statistics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetFindingStatisticsV2Request",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ FieldValue: S.optional(S.String), Count: S.optional(S.Number) }),
      ).annotate({ identifier: "GroupByValue" });
    case 2:
      return S.Array(GroupByValue);
    case 3:
      return S.suspend(() =>
        S.Struct({ GroupByField: S.optional(S.String), GroupByValues: S.optional(GroupByValues) }),
      ).annotate({ identifier: "GroupByResult" });
    case 4:
      return S.Array(GroupByResult);
    case 5:
      return S.suspend(() => S.Struct({ GroupByResults: S.optional(GroupByResults) })).annotate({
        identifier: "GetFindingStatisticsV2Response",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FieldName: S.optional(FindingsTrendsStringField),
          Filter: S.optional(StringFilter),
        }),
      ).annotate({
        identifier: "FindingsTrendsStringFilter",
      });
    case 7:
      return S.Array(FindingsTrendsStringFilter);
  }
}
function __c127(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          StringFilters: S.optional(FindingsTrendsStringFilterList),
          NestedCompositeFilters: S.optional(
            S.suspend(() => FindingsTrendsCompositeFilterList).annotate({
              identifier: "FindingsTrendsCompositeFilterList",
            }),
          ),
          Operator: S.optional(AllowedOperators),
        }),
      ).annotate({
        identifier: "FindingsTrendsCompositeFilter",
      });
    case 1:
      return S.Array(
        /*@__PURE__*/ S.suspend(
          (): S.Schema<FindingsTrendsCompositeFilter> => FindingsTrendsCompositeFilter,
        ).annotate({
          identifier: "FindingsTrendsCompositeFilter",
        }),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          CompositeFilters: S.optional(FindingsTrendsCompositeFilterList),
          CompositeOperator: S.optional(AllowedOperators),
        }),
      ).annotate({ identifier: "FindingsTrendsFilters" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(FindingsTrendsFilters),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/findingsTrendsv2" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetFindingsTrendsV2Request",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Unknown: S.optional(S.Number),
          Informational: S.optional(S.Number),
          Low: S.optional(S.Number),
          Medium: S.optional(S.Number),
          High: S.optional(S.Number),
          Critical: S.optional(S.Number),
          Fatal: S.optional(S.Number),
          Other: S.optional(S.Number),
        }),
      ).annotate({ identifier: "SeverityTrendsCount" });
    case 5:
      return S.suspend(() =>
        S.Struct({ SeverityTrends: S.optional(SeverityTrendsCount) }),
      ).annotate({ identifier: "TrendsValues" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          TrendsValues: S.optional(TrendsValues),
        }),
      ).annotate({ identifier: "TrendsMetricsResult" });
    case 7:
      return S.Array(TrendsMetricsResult);
  }
}
function __c128(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Granularity: S.optional(GranularityField),
          TrendsMetrics: S.optional(TrendsMetrics),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetFindingsTrendsV2Response",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(OcsfFindingFilters),
          Scopes: S.optional(FindingScopes),
          SortCriteria: S.optional(SortCriteria),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/findingsv2" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetFindingsV2Request" });
    case 2:
      return S.Array(S.Any);
    case 3:
      return S.suspend(() =>
        S.Struct({ Findings: S.optional(OcsfFindingsList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "GetFindingsV2Response" });
    case 4:
      return S.suspend(() =>
        S.Struct({ InsightArn: S.String.pipe(T.HttpLabel("InsightArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/insights/results/{InsightArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetInsightResultsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ GroupByAttributeValue: S.optional(S.String), Count: S.optional(S.Number) }),
      ).annotate({ identifier: "InsightResultValue" });
    case 6:
      return S.Array(InsightResultValue);
    case 7:
      return S.suspend(() =>
        S.Struct({
          InsightArn: S.optional(S.String),
          GroupByAttribute: S.optional(S.String),
          ResultValues: S.optional(InsightResultValueList),
        }),
      ).annotate({ identifier: "InsightResults" });
  }
}
function __c129(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ InsightResults: S.optional(InsightResults) })).annotate({
        identifier: "GetInsightResultsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          InsightArns: S.optional(ArnList),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/insights/get" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetInsightsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          InsightArn: S.optional(S.String),
          Name: S.optional(S.String),
          Filters: S.optional(AwsSecurityFindingFilters),
          GroupByAttribute: S.optional(S.String),
        }),
      ).annotate({ identifier: "Insight" });
    case 3:
      return S.Array(Insight);
    case 4:
      return S.suspend(() =>
        S.Struct({ Insights: S.optional(InsightList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "GetInsightsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/invitations/count" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetInvitationsCountRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ InvitationsCount: S.optional(S.Number) })).annotate({
        identifier: "GetInvitationsCountResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(T.Http({ method: "GET", uri: "/master" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetMasterAccountRequest" });
  }
}
function __c130(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Master: S.optional(Invitation) })).annotate({
        identifier: "GetMasterAccountResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AccountIds: S.optional(AccountIdList) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/members/get" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetMembersRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          Email: S.optional(S.String),
          MasterId: S.optional(S.String),
          AdministratorId: S.optional(S.String),
          MemberStatus: S.optional(S.String),
          InvitedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "Member" });
    case 3:
      return S.Array(Member);
    case 4:
      return S.suspend(() =>
        S.Struct({ Members: S.optional(MemberList), UnprocessedAccounts: S.optional(ResultList) }),
      ).annotate({ identifier: "GetMembersResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MetadataUid: S.String.pipe(T.HttpLabel("MetadataUid")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/recommendedPolicyV2/{MetadataUid}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetRecommendedPolicyV2Request",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          RecommendedAction: S.optional(S.String),
          ExistingPolicy: S.optional(S.String),
          ExistingPolicyId: S.optional(S.String),
          PolicyUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          RecommendedPolicy: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UnusedPermissionsRecommendationStep",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ UnusedPermissions: UnusedPermissionsRecommendationStep }),
      ]);
  }
}
function __c131(j: number): any {
  switch (j) {
    case 0:
      return S.Array(RecommendationStep);
    case 1:
      return S.suspend(() =>
        S.Struct({ Code: S.optional(S.String), Message: S.optional(S.String) }),
      ).annotate({ identifier: "RecommendationError" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          RecommendationType: S.optional(RecommendationType),
          RecommendationSteps: S.optional(RecommendationSteps),
          Error: S.optional(RecommendationError),
          Status: S.optional(RecommendationStatus),
          ResourceArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetRecommendedPolicyV2Response",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          FieldName: S.optional(RemediationStringField),
          Filter: S.optional(RemediationStringFilterCondition),
        }),
      ).annotate({ identifier: "RemediationStringFilter" });
    case 4:
      return S.Array(RemediationStringFilter);
    case 5:
      return S.suspend(() =>
        S.Struct({ StringFilters: S.optional(RemediationStringFilterList) }),
      ).annotate({
        identifier: "RemediationCompositeFilter",
      });
    case 6:
      return S.Array(RemediationCompositeFilter);
    case 7:
      return S.suspend(() =>
        S.Struct({ CompositeFilters: S.optional(RemediationCompositeFilterList) }),
      ).annotate({ identifier: "RemediationFilters" });
  }
}
function __c132(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TargetUid: S.optional(S.String),
          MetadataUid: S.optional(S.String),
          Filters: S.optional(RemediationFilters),
          ShowGuidance: S.optional(S.Boolean),
          GuidanceFormat: S.optional(GuidanceFormat),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/GetRemediationsV2" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetRemediationsV2Request" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResolvedFindingsCount: S.optional(S.Number),
          SeverityReductionFindingsCount: S.optional(S.Number),
          SeverityUnchangedCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "RemediationOutcome" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Title: S.optional(S.String), Url: S.optional(S.String) }),
      ).annotate({ identifier: "KbArticle" });
    case 3:
      return S.Array(KbArticle);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Action: S.optional(S.String),
          Description: S.optional(S.String),
          IsImmediate: S.optional(S.Boolean),
          PostRemediationSteps: S.optional(RemediationStringList),
          KbArticles: S.optional(KbArticleList),
        }),
      ).annotate({ identifier: "RemediationSummaryDetail" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          Region: S.optional(S.String),
          ResourceOwnerAccountId: S.optional(S.String),
          ResourceOwnerOrgId: S.optional(S.String),
          Type: S.optional(S.String),
          Name: S.optional(S.String),
          Id: S.optional(S.String),
          ResourceGuid: S.optional(S.String),
          ResourceRegion: S.optional(S.String),
          CloudProvider: S.optional(CloudProviderName),
        }),
      ).annotate({ identifier: "RemediationResource" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Type: S.optional(S.String), Title: S.optional(S.String) }),
      ).annotate({ identifier: "RemediationTrait" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProblemStatement: S.optional(S.String),
          RiskAssessment: S.optional(S.String),
          AffectedScope: S.optional(S.String),
          Prerequisites: S.optional(RemediationStringList),
        }),
      ).annotate({
        identifier: "RemediationGuidanceContext",
      });
  }
}
function __c133(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Type: S.optional(S.String),
          Description: S.optional(S.String),
          Required: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "RemediationParameter" });
    case 1:
      return S.Array(RemediationParameter);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Phase: S.optional(S.String),
          Description: S.optional(S.String),
          Service: S.optional(S.String),
          Action: S.optional(S.String),
          Logic: S.optional(S.String),
          Inverse: S.optional(S.String),
          VerifyAfter: S.optional(S.String),
        }),
      ).annotate({ identifier: "RemediationStep" });
    case 3:
      return S.Array(RemediationStep);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Parameters: S.optional(RemediationParameterList),
          Steps: S.optional(RemediationStepList),
          ExpectedEndState: S.optional(S.String),
          RequiredPermissions: S.optional(RemediationStringList),
        }),
      ).annotate({
        identifier: "RemediationGuidanceSpecification",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AwsCli: S.optional(S.String),
          Cli: S.optional(S.String),
          Python: S.optional(S.String),
          Terraform: S.optional(S.String),
          Cdk: S.optional(S.String),
          CloudFormation: S.optional(S.String),
          IaC: S.optional(S.String),
          Template: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RemediationGuidanceExamples",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceType: S.optional(S.String),
          ExposureType: S.optional(S.String),
          TraitTitles: S.optional(RemediationStringList),
          Reversibility: S.optional(S.String),
          FixEffect: S.optional(S.String),
          RiskLevel: S.optional(S.String),
          AutomationLevel: S.optional(S.String),
          HumanReviewRequired: S.optional(S.Boolean),
          GeneratedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          VerificationStatus: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RemediationGuidanceMetadata",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TargetTypeName: S.optional(S.String),
          Pattern: S.optional(S.String),
          Version: S.optional(S.String),
          Context: S.optional(RemediationGuidanceContext),
          Specification: S.optional(RemediationGuidanceSpecification),
          Examples: S.optional(RemediationGuidanceExamples),
          Metadata: S.optional(RemediationGuidanceMetadata),
        }),
      ).annotate({ identifier: "RemediationGuidance" });
  }
}
function __c134(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TargetUid: S.optional(S.String),
          Outcome: S.optional(RemediationOutcome),
          Priority: S.optional(RemediationPriority),
          RemediationSummary: S.optional(RemediationSummaryDetail),
          Resource: S.optional(RemediationResource),
          Status: S.optional(RemediationStatus),
          Trait: S.optional(RemediationTrait),
          Guidance: S.optional(RemediationGuidance),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "RemediationV2Item" });
    case 1:
      return S.Array(RemediationV2Item);
    case 2:
      return S.suspend(() =>
        S.Struct({ Items: S.optional(RemediationV2ItemList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "GetRemediationsV2Response",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StringFilters: S.optional(ResourcesStringFilterList),
          DateFilters: S.optional(ResourcesDateFilterList),
          NumberFilters: S.optional(ResourcesNumberFilterList),
          MapFilters: S.optional(ResourcesMapFilterList),
          NestedCompositeFilters: S.optional(
            S.suspend(() => ResourcesCompositeFilterList).annotate({
              identifier: "ResourcesCompositeFilterList",
            }),
          ),
          Operator: S.optional(AllowedOperators),
        }),
      ).annotate({ identifier: "ResourcesCompositeFilter" });
    case 4:
      return S.Array(
        /*@__PURE__*/ S.suspend(
          (): S.Schema<ResourcesCompositeFilter> => ResourcesCompositeFilter,
        ).annotate({
          identifier: "ResourcesCompositeFilter",
        }),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          CompositeFilters: S.optional(ResourcesCompositeFilterList),
          CompositeOperator: S.optional(AllowedOperators),
        }),
      ).annotate({ identifier: "ResourcesFilters" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          GroupByField: S.optional(ResourceGroupByField),
          Filters: S.optional(ResourcesFilters),
        }),
      ).annotate({ identifier: "ResourceGroupByRule" });
    case 7:
      return S.Array(ResourceGroupByRule);
  }
}
function __c135(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GroupByRules: S.optional(ResourceGroupByRules),
          Scopes: S.optional(ResourceScopes),
          SortOrder: S.optional(SortOrder),
          MaxStatisticResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/resourcesv2/statistics" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetResourcesStatisticsV2Request",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          StringFilters: S.optional(ResourcesTrendsStringFilterList),
          NestedCompositeFilters: S.optional(
            S.suspend(() => ResourcesTrendsCompositeFilterList).annotate({
              identifier: "ResourcesTrendsCompositeFilterList",
            }),
          ),
          Operator: S.optional(AllowedOperators),
        }),
      ).annotate({
        identifier: "ResourcesTrendsCompositeFilter",
      });
    case 2:
      return S.Array(
        /*@__PURE__*/ S.suspend(
          (): S.Schema<ResourcesTrendsCompositeFilter> => ResourcesTrendsCompositeFilter,
        ).annotate({ identifier: "ResourcesTrendsCompositeFilter" }),
      );
    case 3:
      return S.suspend(() =>
        S.Struct({
          CompositeFilters: S.optional(ResourcesTrendsCompositeFilterList),
          CompositeOperator: S.optional(AllowedOperators),
        }),
      ).annotate({ identifier: "ResourcesTrendsFilters" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(ResourcesTrendsFilters),
          StartTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EndTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/resourcesTrendsv2" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetResourcesTrendsV2Request",
      });
    case 5:
      return S.suspend(() => S.Struct({ AllResources: S.optional(S.Number) })).annotate({
        identifier: "ResourcesCount",
      });
    case 6:
      return S.suspend(() => S.Struct({ ResourcesCount: S.optional(ResourcesCount) })).annotate({
        identifier: "ResourcesTrendsValues",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Timestamp: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          TrendsValues: S.optional(ResourcesTrendsValues),
        }),
      ).annotate({
        identifier: "ResourcesTrendsMetricsResult",
      });
  }
}
function __c136(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ResourcesTrendsMetricsResult);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Granularity: S.optional(GranularityField),
          TrendsMetrics: S.optional(ResourcesTrendsMetrics),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetResourcesTrendsV2Response",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(ResourcesFilters),
          Scopes: S.optional(ResourceScopes),
          SortCriteria: S.optional(SortCriteria),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/resourcesv2" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetResourcesV2Request" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Other: S.optional(S.Number),
          Fatal: S.optional(S.Number),
          Critical: S.optional(S.Number),
          High: S.optional(S.Number),
          Medium: S.optional(S.Number),
          Low: S.optional(S.Number),
          Informational: S.optional(S.Number),
          Unknown: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ResourceSeverityBreakdown",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          FindingType: S.optional(S.String),
          ProductName: S.optional(S.String),
          TotalFindings: S.optional(S.Number),
          Severities: S.optional(ResourceSeverityBreakdown),
        }),
      ).annotate({ identifier: "ResourceFindingsSummary" });
    case 5:
      return S.Array(ResourceFindingsSummary);
    case 6:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "ResourceTag" });
    case 7:
      return S.Array(ResourceTag);
  }
}
function __c137(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          HostResourceGuid: S.optional(S.String),
          HostResourceType: S.optional(S.String),
          CanonicalId: S.optional(S.String),
          SelfHostedAIModelResourceCount: S.optional(S.Number),
          SelfHostedAIAgentResourceCount: S.optional(S.Number),
          SelfHostedAIModelServingResourceCount: S.optional(S.Number),
          SelfHostedAIExternalEndpointResourceCount: S.optional(S.Number),
          SelfHostedAIDevelopmentResourceCount: S.optional(S.Number),
          SelfHostedAIAgentFrameworkResourceCount: S.optional(S.Number),
          SelfHostedAIAgentToolsAndIdentityResourceCount: S.optional(S.Number),
          SelfHostedTotalAIResourceCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "AIDetails" });
    case 1:
      return S.suspend(() => S.Struct({ AIDetails: S.optional(AIDetails) })).annotate({
        identifier: "ResourceInfo",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceGuid: S.optional(S.String),
          ResourceId: S.optional(S.String),
          AccountId: S.optional(S.String),
          AccountName: S.optional(S.String),
          Region: S.optional(S.String),
          ResourceProvider: S.optional(S.String),
          ResourceOwnerAccountId: S.optional(S.String),
          ResourceOwnerOrgId: S.optional(S.String),
          ResourceCloudPartition: S.optional(S.String),
          ResourceRegion: S.optional(S.String),
          ResourceCategory: S.optional(ResourceCategory),
          ResourceType: S.optional(S.String),
          ResourceName: S.optional(S.String),
          ResourceCreationTimeDt: S.optional(S.String),
          ResourceDetailCaptureTimeDt: S.optional(S.String),
          FindingsSummary: S.optional(ResourceFindingsSummaryList),
          ResourceTags: S.optional(ResourceTagList),
          ResourceConfig: S.optional(S.Any),
          ResourceSubCategory: S.optional(ResourceSubCategory),
          DiscoveryType: S.optional(DiscoveryType),
          ResourceInfo: S.optional(ResourceInfo),
        }),
      ).annotate({ identifier: "ResourceResult" });
    case 3:
      return S.Array(ResourceResult);
    case 4:
      return S.suspend(() =>
        S.Struct({ Resources: S.optional(Resources), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "GetResourcesV2Response" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          SecurityControlId: S.optional(S.String).pipe(T.HttpQuery("SecurityControlId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/securityControl/definition" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetSecurityControlDefinitionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(S.Number),
          Min: S.optional(S.Number),
          Max: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "IntegerConfigurationOptions",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(IntegerList),
          Min: S.optional(S.Number),
          Max: S.optional(S.Number),
          MaxItems: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "IntegerListConfigurationOptions",
      });
  }
}
function __c138(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(S.String),
          Re2Expression: S.optional(S.String),
          ExpressionDescription: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StringConfigurationOptions",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(StringList),
          Re2Expression: S.optional(S.String),
          MaxItems: S.optional(S.Number),
          ExpressionDescription: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StringListConfigurationOptions",
      });
    case 2:
      return S.suspend(() => S.Struct({ DefaultValue: S.optional(S.Boolean) })).annotate({
        identifier: "BooleanConfigurationOptions",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DefaultValue: S.optional(S.String), AllowedValues: S.optional(StringList) }),
      ).annotate({ identifier: "EnumConfigurationOptions" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          DefaultValue: S.optional(StringList),
          MaxItems: S.optional(S.Number),
          AllowedValues: S.optional(StringList),
        }),
      ).annotate({
        identifier: "EnumListConfigurationOptions",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Integer: IntegerConfigurationOptions }),
        /*@__PURE__*/ S.Struct({ IntegerList: IntegerListConfigurationOptions }),
        /*@__PURE__*/ S.Struct({ Double: DoubleConfigurationOptions }),
        /*@__PURE__*/ S.Struct({ String: StringConfigurationOptions }),
        /*@__PURE__*/ S.Struct({ StringList: StringListConfigurationOptions }),
        /*@__PURE__*/ S.Struct({ Boolean: BooleanConfigurationOptions }),
        /*@__PURE__*/ S.Struct({ Enum: EnumConfigurationOptions }),
        /*@__PURE__*/ S.Struct({ EnumList: EnumListConfigurationOptions }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          ConfigurationOptions: S.optional(ConfigurationOptions),
        }),
      ).annotate({ identifier: "ParameterDefinition" });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ ParameterDefinition.pipe(S.optional));
  }
}
function __c139(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          SecurityControlId: S.optional(S.String),
          Title: S.optional(S.String),
          Description: S.optional(S.String),
          RemediationUrl: S.optional(S.String),
          SeverityRating: S.optional(SeverityRating),
          CurrentRegionAvailability: S.optional(RegionAvailabilityStatus),
          CustomizableProperties: S.optional(CustomizableProperties),
          ParameterDefinitions: S.optional(ParameterDefinitions),
          Provider: S.optional(SecurityControlsProvider),
        }),
      ).annotate({
        identifier: "SecurityControlDefinition",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ SecurityControlDefinition: S.optional(SecurityControlDefinition) }),
      ).annotate({
        identifier: "GetSecurityControlDefinitionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AccountIds: S.optional(AccountIdList) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/members/invite" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "InviteMembersRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/aggregatorv2/list" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAggregatorsV2Request" });
    case 4:
      return S.suspend(() => S.Struct({ AggregatorV2Arn: S.optional(S.String) })).annotate({
        identifier: "AggregatorV2",
      });
    case 5:
      return S.Array(AggregatorV2);
    case 6:
      return S.suspend(() =>
        S.Struct({ AggregatorsV2: S.optional(AggregatorV2List), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAggregatorsV2Response",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/automationrules/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAutomationRulesRequest",
      });
  }
}
function __c140(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          RuleArn: S.optional(S.String),
          RuleStatus: S.optional(RuleStatus),
          RuleOrder: S.optional(S.Number),
          RuleName: S.optional(S.String),
          Description: S.optional(S.String),
          IsTerminal: S.optional(S.Boolean),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CreatedBy: S.optional(S.String),
        }),
      ).annotate({ identifier: "AutomationRulesMetadata" });
    case 1:
      return S.Array(AutomationRulesMetadata);
    case 2:
      return S.suspend(() =>
        S.Struct({
          AutomationRulesMetadata: S.optional(AutomationRulesMetadataList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAutomationRulesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/automationrulesv2/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListAutomationRulesV2Request",
      });
    case 4:
      return S.suspend(() => S.Struct({ Type: S.optional(AutomationRulesActionTypeV2) })).annotate({
        identifier: "AutomationRulesActionTypeObjectV2",
      });
    case 5:
      return S.Array(AutomationRulesActionTypeObjectV2);
    case 6:
      return S.suspend(() =>
        S.Struct({
          RuleArn: S.optional(S.String),
          RuleId: S.optional(S.String),
          RuleOrder: S.optional(S.Number),
          RuleName: S.optional(S.String),
          RuleStatus: S.optional(RuleStatusV2),
          Description: S.optional(S.String),
          Actions: S.optional(AutomationRulesActionTypeListV2),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "AutomationRulesMetadataV2",
      });
    case 7:
      return S.Array(AutomationRulesMetadataV2);
  }
}
function __c141(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Rules: S.optional(AutomationRulesMetadataListV2),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAutomationRulesV2Response",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/configurationPolicy/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConfigurationPoliciesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ServiceEnabled: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "ConfigurationPolicySummary",
      });
    case 3:
      return S.Array(ConfigurationPolicySummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ConfigurationPolicySummaries: S.optional(ConfigurationPolicySummaryList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListConfigurationPoliciesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ConfigurationPolicyId: S.optional(S.String),
          AssociationType: S.optional(AssociationType),
          AssociationStatus: S.optional(ConfigurationPolicyAssociationStatus),
        }),
      ).annotate({ identifier: "AssociationFilters" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          Filters: S.optional(AssociationFilters),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configurationPolicyAssociation/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListConfigurationPolicyAssociationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConfigurationPolicyAssociationSummaries: S.optional(
            ConfigurationPolicyAssociationSummaryList,
          ),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListConfigurationPolicyAssociationsResponse",
      });
  }
}
function __c142(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          ProviderName: S.optional(CspmConnectorProviderName).pipe(T.HttpQuery("ProviderName")),
          ConnectorStatus: S.optional(CspmConnectorStatus).pipe(T.HttpQuery("ConnectorStatus")),
          EnablementStatus: S.optional(CspmEnablementStatus).pipe(T.HttpQuery("EnablementStatus")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/connectors" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListConnectorsRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProviderName: S.optional(CspmConnectorProviderName),
          ConnectorStatus: S.optional(CspmConnectorStatus),
          ProviderConfiguration: S.optional(CspmProviderDetail),
        }),
      ).annotate({ identifier: "CspmProviderSummary" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ConnectorArn: S.optional(S.String),
          ConnectorId: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          ProviderSummary: S.optional(CspmProviderSummary),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          CreatedBy: S.optional(S.String),
          EnablementStatus: S.optional(CspmEnablementStatus),
        }),
      ).annotate({ identifier: "CspmConnectorSummary" });
    case 3:
      return S.Array(CspmConnectorSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          Connectors: S.optional(CspmConnectorSummaryList),
        }),
      ).annotate({ identifier: "ListConnectorsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          ProviderName: S.optional(ConnectorProviderName).pipe(T.HttpQuery("ProviderName")),
          ConnectorStatus: S.optional(ConnectorStatus).pipe(T.HttpQuery("ConnectorStatus")),
          EnablementStatus: S.optional(EnablementStatus).pipe(T.HttpQuery("EnablementStatus")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/connectorsv2" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListConnectorsV2Request" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ProviderName: S.optional(ConnectorProviderName),
          ConnectorStatus: S.optional(ConnectorStatus),
          ProviderConfiguration: S.optional(ProviderDetail),
        }),
      ).annotate({ identifier: "ProviderSummary" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ConnectorArn: S.optional(S.String),
          ConnectorId: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          ProviderSummary: S.optional(ProviderSummary),
          CreatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          EnablementStatus: S.optional(EnablementStatus),
          EnablementStatusReason: S.optional(S.String),
        }),
      ).annotate({ identifier: "ConnectorSummary" });
  }
}
function __c143(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ConnectorSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Connectors: S.optional(ConnectorSummaryList) }),
      ).annotate({ identifier: "ListConnectorsV2Response" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/productSubscriptions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListEnabledProductsForImportRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ProductSubscriptions: S.optional(ProductSubscriptionArnList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListEnabledProductsForImportResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          TargetUid: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/ListExposuresByRemediationV2" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListExposuresByRemediationV2Request",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MetadataUid: S.optional(S.String),
          Title: S.optional(S.String),
          PreviousSeverity: S.optional(ExposureSeverity),
          ProjectedSeverity: S.optional(ExposureSeverity),
          Impact: S.optional(ExposureImpact),
        }),
      ).annotate({ identifier: "ExposureFinding" });
    case 6:
      return S.Array(ExposureFinding);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(ExposureFindingItemsList),
          TargetUid: S.optional(S.String),
          Resource: S.optional(RemediationResource),
          TotalCount: S.optional(S.Number),
          Trait: S.optional(RemediationTrait),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListExposuresByRemediationV2Response",
      });
  }
}
function __c144(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/findingAggregator/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListFindingAggregatorsRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ FindingAggregatorArn: S.optional(S.String) })).annotate({
        identifier: "FindingAggregator",
      });
    case 2:
      return S.Array(FindingAggregator);
    case 3:
      return S.suspend(() =>
        S.Struct({
          FindingAggregators: S.optional(FindingAggregatorList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListFindingAggregatorsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountIds: S.optional(FreeTrialAccountIdList),
          Statuses: S.optional(FreeTrialStatusValueList),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/freetrial/statusv2/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListFreeTrialStatusesV2Request",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          FeatureType: S.optional(FreeTrialType),
          Status: S.optional(FreeTrialStatusValue),
          StartedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          ExpiresAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "FreeTrialStatus" });
    case 6:
      return S.Array(FreeTrialStatus);
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          EvaluatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          FreeTrialStatuses: S.optional(FreeTrialStatusList),
        }),
      ).annotate({ identifier: "AccountFreeTrialStatus" });
  }
}
function __c145(j: number): any {
  switch (j) {
    case 0:
      return S.Array(AccountFreeTrialStatus);
    case 1:
      return S.suspend(() =>
        S.Struct({
          AccountFreeTrialStatuses: S.optional(AccountFreeTrialStatusList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListFreeTrialStatusesV2Response",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/invitations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListInvitationsRequest" });
    case 3:
      return S.Array(Invitation);
    case 4:
      return S.suspend(() =>
        S.Struct({ Invitations: S.optional(InvitationList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListInvitationsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          OnlyAssociated: S.optional(S.Boolean).pipe(T.HttpQuery("OnlyAssociated")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/members" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListMembersRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Members: S.optional(MemberList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListMembersResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          Feature: S.optional(SecurityHubFeature).pipe(T.HttpQuery("Feature")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/organization/admin" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListOrganizationAdminAccountsRequest",
      });
  }
}
function __c146(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ AccountId: S.optional(S.String), Status: S.optional(AdminStatus) }),
      ).annotate({ identifier: "AdminAccount" });
    case 1:
      return S.Array(AdminAccount);
    case 2:
      return S.suspend(() =>
        S.Struct({
          AdminAccounts: S.optional(AdminAccounts),
          NextToken: S.optional(S.String),
          Feature: S.optional(SecurityHubFeature),
        }),
      ).annotate({
        identifier: "ListOrganizationAdminAccountsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          StandardsArn: S.optional(S.String).pipe(T.HttpQuery("StandardsArn")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          Providers: S.optional(SecurityControlsProviders).pipe(T.HttpQuery("Providers")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/securityControls/definitions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSecurityControlDefinitionsRequest",
      });
    case 4:
      return S.Array(SecurityControlDefinition);
    case 5:
      return S.suspend(() =>
        S.Struct({
          SecurityControlDefinitions: S.optional(SecurityControlDefinitions),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSecurityControlDefinitionsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SecurityControlId: S.optional(S.String).pipe(T.HttpQuery("SecurityControlId")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/associations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListStandardsControlAssociationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          StandardsArn: S.optional(S.String),
          SecurityControlId: S.optional(S.String),
          SecurityControlArn: S.optional(S.String),
          AssociationStatus: S.optional(AssociationStatus),
          RelatedRequirements: S.optional(RelatedRequirementsList),
          UpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          UpdatedReason: S.optional(S.String),
          StandardsControlTitle: S.optional(S.String),
          StandardsControlDescription: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StandardsControlAssociationSummary",
      });
  }
}
function __c147(j: number): any {
  switch (j) {
    case 0:
      return S.Array(StandardsControlAssociationSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          StandardsControlAssociationSummaries: S.optional(StandardsControlAssociationSummaries),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListStandardsControlAssociationsResponse",
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
      return S.suspend(() => S.Struct({ Tags: S.optional(TagMap) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ AuthCode: S.optional(S.String), AuthState: S.optional(S.String) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/connectorsv2/register" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RegisterConnectorV2Request",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ConnectorArn: S.optional(S.String), ConnectorId: S.optional(S.String) }),
      ).annotate({
        identifier: "RegisterConnectorV2Response",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ConfigurationPolicyIdentifier: S.optional(S.String),
          Target: S.optional(Target),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configurationPolicyAssociation/associate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartConfigurationPolicyAssociationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Target: S.optional(Target),
          ConfigurationPolicyIdentifier: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/configurationPolicyAssociation/disassociate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartConfigurationPolicyDisassociationRequest",
      });
  }
}
function __c148(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          Tags: S.optional(TagMap),
        }).pipe(
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
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          TagKeys: S.optional(TagKeyList).pipe(T.HttpQuery("tagKeys")),
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
    case 2:
      return S.suspend(() =>
        S.Struct({
          ActionTargetArn: S.String.pipe(T.HttpLabel("ActionTargetArn")),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/actionTargets/{ActionTargetArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateActionTargetRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AggregatorV2Arn: S.String.pipe(T.HttpLabel("AggregatorV2Arn")),
          RegionLinkingMode: S.optional(S.String),
          LinkedRegions: S.optional(StringList),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/aggregatorv2/update/{AggregatorV2Arn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAggregatorV2Request",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          RuleStatus: S.optional(RuleStatusV2),
          RuleOrder: S.optional(S.Number),
          Description: S.optional(S.String),
          RuleName: S.optional(S.String),
          Criteria: S.optional(Criteria),
          Actions: S.optional(AutomationRulesActionListV2),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/automationrulesv2/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateAutomationRuleV2Request",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Identifier: S.String.pipe(T.HttpLabel("Identifier")),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          UpdatedReason: S.optional(S.String),
          ConfigurationPolicy: S.optional(Policy),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/configurationPolicy/{Identifier}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateConfigurationPolicyRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ScopeConfiguration: S.optional(AzureScopeConfiguration),
          AzureRegions: S.optional(AzureRegionList),
        }),
      ).annotate({ identifier: "AzureUpdateConfiguration" });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ Azure: AzureUpdateConfiguration })]);
  }
}
function __c149(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ConnectorId: S.String.pipe(T.HttpLabel("ConnectorId")),
          Description: S.optional(S.String),
          Provider: S.optional(CspmProviderUpdateConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/connectors/{ConnectorId+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateConnectorRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ConnectorStatus: S.optional(CspmConnectorStatus),
          EnablementStatus: S.optional(CspmEnablementStatus),
        }),
      ).annotate({ identifier: "UpdateConnectorResponse" });
    case 2:
      return S.suspend(() => S.Struct({ SecretArn: S.optional(S.String) })).annotate({
        identifier: "ServiceNowUpdateConfiguration",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ JiraCloud: JiraCloudUpdateConfiguration }),
        /*@__PURE__*/ S.Struct({ ServiceNow: ServiceNowUpdateConfiguration }),
        /*@__PURE__*/ S.Struct({ Azure: AzureUpdateConfiguration }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ConnectorId: S.String.pipe(T.HttpLabel("ConnectorId")),
          Description: S.optional(S.String),
          Provider: S.optional(ProviderUpdateConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/connectorsv2/{ConnectorId+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateConnectorV2Request" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ConnectorStatus: S.optional(ConnectorStatus),
          EnablementStatus: S.optional(EnablementStatus),
        }),
      ).annotate({
        identifier: "UpdateConnectorV2Response",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          FindingAggregatorArn: S.optional(S.String),
          RegionLinkingMode: S.optional(S.String),
          Regions: S.optional(StringList),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/findingAggregator/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateFindingAggregatorRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(AwsSecurityFindingFilters),
          Note: S.optional(NoteUpdate),
          RecordState: S.optional(RecordState),
        }).pipe(T.all(T.Http({ method: "PATCH", uri: "/findings" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateFindingsRequest" });
  }
}
function __c150(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InsightArn: S.String.pipe(T.HttpLabel("InsightArn")),
          Name: S.optional(S.String),
          Filters: S.optional(AwsSecurityFindingFilters),
          GroupByAttribute: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/insights/{InsightArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateInsightRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AutoEnable: S.optional(S.Boolean),
          AutoEnableStandards: S.optional(AutoEnableStandards),
          OrganizationConfiguration: S.optional(OrganizationConfiguration),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/organization/configuration" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateOrganizationConfigurationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SecurityControlId: S.optional(S.String),
          Parameters: S.optional(Parameters),
          LastUpdateReason: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/securityControl/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSecurityControlRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AutoEnableControls: S.optional(S.Boolean),
          ControlFindingGenerator: S.optional(ControlFindingGenerator),
        }).pipe(T.all(T.Http({ method: "PATCH", uri: "/accounts" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateSecurityHubConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          StandardsControlArn: S.String.pipe(T.HttpLabel("StandardsControlArn")),
          ControlStatus: S.optional(ControlStatus),
          DisabledReason: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/standards/control/{StandardsControlArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateStandardsControlRequest",
      });
  }
}
