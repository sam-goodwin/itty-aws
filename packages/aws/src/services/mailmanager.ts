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
  sdkId: "MailManager",
  serviceShapeName: "MailManagerSvc",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "ses" });
const ver = /*@__PURE__*/ T.ServiceVersion("2023-10-17");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_0();
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
              `https://mail-manager-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://mail-manager-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://mail-manager.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://mail-manager.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type IdempotencyToken = string;
export type AddonSubscriptionId = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
export type TagList = Tag[];
export interface CreateAddonInstanceRequest {
  ClientToken?: string;
  AddonSubscriptionId: string;
  Tags?: Tag[];
}
export type AddonInstanceId = string;
export interface CreateAddonInstanceResponse {
  AddonInstanceId: string;
}
export type AddonName = string;
export interface CreateAddonSubscriptionRequest {
  ClientToken?: string;
  AddonName: string;
  Tags?: Tag[];
}
export interface CreateAddonSubscriptionResponse {
  AddonSubscriptionId: string;
}
export type AddressListName = string;
export interface CreateAddressListRequest {
  ClientToken?: string;
  AddressListName: string;
  Tags?: Tag[];
}
export type AddressListId = string;
export interface CreateAddressListResponse {
  AddressListId: string;
}
export type JobName = string;
export type ImportDataType = "CSV" | "JSON" | (string & {});
export interface ImportDataFormat {
  ImportDataType: ImportDataType;
}
export interface CreateAddressListImportJobRequest {
  ClientToken?: string;
  AddressListId: string;
  Name: string;
  ImportDataFormat: ImportDataFormat;
}
export type JobId = string;
export type PreSignedUrl = string | redacted.Redacted<string>;
export interface CreateAddressListImportJobResponse {
  JobId: string;
  PreSignedUrl: string | redacted.Redacted<string>;
}
export type ArchiveNameString = string;
export type RetentionPeriod =
  | "THREE_MONTHS"
  | "SIX_MONTHS"
  | "NINE_MONTHS"
  | "ONE_YEAR"
  | "EIGHTEEN_MONTHS"
  | "TWO_YEARS"
  | "THIRTY_MONTHS"
  | "THREE_YEARS"
  | "FOUR_YEARS"
  | "FIVE_YEARS"
  | "SIX_YEARS"
  | "SEVEN_YEARS"
  | "EIGHT_YEARS"
  | "NINE_YEARS"
  | "TEN_YEARS"
  | "PERMANENT"
  | (string & {});
export type ArchiveRetention = { RetentionPeriod: RetentionPeriod };
export type KmsKeyArn = string;
export interface CreateArchiveRequest {
  ClientToken?: string;
  ArchiveName: string;
  Retention?: ArchiveRetention;
  KmsKeyArn?: string;
  Tags?: Tag[];
}
export type ArchiveIdString = string;
export interface CreateArchiveResponse {
  ArchiveId: string;
}
export type IngressPointName = string;
export type IngressPointType = "OPEN" | "AUTH" | "MTLS" | (string & {});
export type RuleSetId = string;
export type TrafficPolicyId = string;
export type SmtpPassword = string | redacted.Redacted<string>;
export type SecretArn = string;
export type CAContent = string | redacted.Redacted<string>;
export type CrlContent = string | redacted.Redacted<string>;
export interface TrustStore {
  CAContent: string | redacted.Redacted<string>;
  CrlContent?: string | redacted.Redacted<string>;
  KmsKeyArn?: string;
}
export interface TlsAuthConfiguration {
  TrustStore?: TrustStore;
}
export type IngressPointConfiguration =
  | {
      SmtpPassword: string | redacted.Redacted<string>;
      SecretArn?: never;
      TlsAuthConfiguration?: never;
    }
  | { SmtpPassword?: never; SecretArn: string; TlsAuthConfiguration?: never }
  | { SmtpPassword?: never; SecretArn?: never; TlsAuthConfiguration: TlsAuthConfiguration };
export type IpType = "IPV4" | "DUAL_STACK" | (string & {});
export interface PublicNetworkConfiguration {
  IpType: IpType;
}
export type VpcEndpointId = string;
export interface PrivateNetworkConfiguration {
  VpcEndpointId: string;
}
export type NetworkConfiguration =
  | { PublicNetworkConfiguration: PublicNetworkConfiguration; PrivateNetworkConfiguration?: never }
  | {
      PublicNetworkConfiguration?: never;
      PrivateNetworkConfiguration: PrivateNetworkConfiguration;
    };
export type TlsPolicy = "REQUIRED" | "OPTIONAL" | "FIPS" | (string & {});
export interface CreateIngressPointRequest {
  ClientToken?: string;
  IngressPointName: string;
  Type: IngressPointType;
  RuleSetId: string;
  TrafficPolicyId: string;
  IngressPointConfiguration?: IngressPointConfiguration;
  NetworkConfiguration?: NetworkConfiguration;
  TlsPolicy?: TlsPolicy;
  Tags?: Tag[];
}
export type IngressPointId = string;
export interface CreateIngressPointResponse {
  IngressPointId: string;
}
export type RelayName = string;
export type RelayServerName = string;
export type RelayServerPort = number;
export interface NoAuthentication {}
export type RelayAuthentication =
  | { SecretArn: string; NoAuthentication?: never }
  | { SecretArn?: never; NoAuthentication: NoAuthentication };
export interface CreateRelayRequest {
  ClientToken?: string;
  RelayName: string;
  ServerName: string;
  ServerPort: number;
  Authentication: RelayAuthentication;
  Tags?: Tag[];
}
export type RelayId = string;
export interface CreateRelayResponse {
  RelayId: string;
}
export type RuleSetName = string;
export type RuleName = string;
export type RuleBooleanEmailAttribute =
  | "READ_RECEIPT_REQUESTED"
  | "TLS"
  | "TLS_WRAPPED"
  | (string & {});
export type AnalyzerArn = string;
export type ResultField = string;
export interface Analysis {
  Analyzer: string;
  ResultField: string;
}
export type RuleAddressListEmailAttribute =
  | "RECIPIENT"
  | "MAIL_FROM"
  | "SENDER"
  | "FROM"
  | "TO"
  | "CC"
  | (string & {});
export type AddressListArn = string;
export type RuleAddressListArnList = string[];
export interface RuleIsInAddressList {
  Attribute: RuleAddressListEmailAttribute;
  AddressLists: string[];
}
export type RuleBooleanToEvaluate =
  | { Attribute: RuleBooleanEmailAttribute; Analysis?: never; IsInAddressList?: never }
  | { Attribute?: never; Analysis: Analysis; IsInAddressList?: never }
  | { Attribute?: never; Analysis?: never; IsInAddressList: RuleIsInAddressList };
export type RuleBooleanOperator = "IS_TRUE" | "IS_FALSE" | (string & {});
export interface RuleBooleanExpression {
  Evaluate: RuleBooleanToEvaluate;
  Operator: RuleBooleanOperator;
}
export type RuleStringEmailAttribute =
  | "MAIL_FROM"
  | "HELO"
  | "RECIPIENT"
  | "SENDER"
  | "FROM"
  | "SUBJECT"
  | "TO"
  | "CC"
  | (string & {});
export type MimeHeaderAttribute = string;
export type RuleClientCertificateAttribute =
  | "CN"
  | "SAN_RFC822_NAME"
  | "SAN_DNS_NAME"
  | "SAN_DIRECTORY_NAME"
  | "SAN_UNIFORM_RESOURCE_IDENTIFIER"
  | "SAN_IP_ADDRESS"
  | "SAN_REGISTERED_ID"
  | "SERIAL_NUMBER"
  | (string & {});
export type RuleStringToEvaluate =
  | {
      Attribute: RuleStringEmailAttribute;
      MimeHeaderAttribute?: never;
      Analysis?: never;
      ClientCertificateAttribute?: never;
    }
  | {
      Attribute?: never;
      MimeHeaderAttribute: string;
      Analysis?: never;
      ClientCertificateAttribute?: never;
    }
  | {
      Attribute?: never;
      MimeHeaderAttribute?: never;
      Analysis: Analysis;
      ClientCertificateAttribute?: never;
    }
  | {
      Attribute?: never;
      MimeHeaderAttribute?: never;
      Analysis?: never;
      ClientCertificateAttribute: RuleClientCertificateAttribute;
    };
export type RuleStringOperator =
  | "EQUALS"
  | "NOT_EQUALS"
  | "STARTS_WITH"
  | "ENDS_WITH"
  | "CONTAINS"
  | (string & {});
export type RuleStringValue = string | redacted.Redacted<string>;
export type RuleStringList = (string | redacted.Redacted<string>)[];
export interface RuleStringExpression {
  Evaluate: RuleStringToEvaluate;
  Operator: RuleStringOperator;
  Values: (string | redacted.Redacted<string>)[];
}
export type RuleNumberEmailAttribute = "MESSAGE_SIZE" | (string & {});
export type RuleNumberToEvaluate = { Attribute: RuleNumberEmailAttribute };
export type RuleNumberOperator =
  | "EQUALS"
  | "NOT_EQUALS"
  | "LESS_THAN"
  | "GREATER_THAN"
  | "LESS_THAN_OR_EQUAL"
  | "GREATER_THAN_OR_EQUAL"
  | (string & {});
export interface RuleNumberExpression {
  Evaluate: RuleNumberToEvaluate;
  Operator: RuleNumberOperator;
  Value: number;
}
export type RuleIpEmailAttribute = "SOURCE_IP" | (string & {});
export type RuleIpToEvaluate = { Attribute: RuleIpEmailAttribute };
export type RuleIpOperator = "CIDR_MATCHES" | "NOT_CIDR_MATCHES" | (string & {});
export type RuleIpStringValue = string;
export type RuleIpValueList = string[];
export interface RuleIpExpression {
  Evaluate: RuleIpToEvaluate;
  Operator: RuleIpOperator;
  Values: string[];
}
export type RuleVerdictAttribute = "SPF" | "DKIM" | (string & {});
export type RuleVerdictToEvaluate =
  | { Attribute: RuleVerdictAttribute; Analysis?: never }
  | { Attribute?: never; Analysis: Analysis };
export type RuleVerdictOperator = "EQUALS" | "NOT_EQUALS" | (string & {});
export type RuleVerdict = "PASS" | "FAIL" | "GRAY" | "PROCESSING_FAILED" | (string & {});
export type RuleVerdictValueList = RuleVerdict[];
export interface RuleVerdictExpression {
  Evaluate: RuleVerdictToEvaluate;
  Operator: RuleVerdictOperator;
  Values: RuleVerdict[];
}
export type RuleDmarcOperator = "EQUALS" | "NOT_EQUALS" | (string & {});
export type RuleDmarcPolicy = "NONE" | "QUARANTINE" | "REJECT" | (string & {});
export type RuleDmarcValueList = RuleDmarcPolicy[];
export interface RuleDmarcExpression {
  Operator: RuleDmarcOperator;
  Values: RuleDmarcPolicy[];
}
export type RuleCondition =
  | {
      BooleanExpression: RuleBooleanExpression;
      StringExpression?: never;
      NumberExpression?: never;
      IpExpression?: never;
      VerdictExpression?: never;
      DmarcExpression?: never;
    }
  | {
      BooleanExpression?: never;
      StringExpression: RuleStringExpression;
      NumberExpression?: never;
      IpExpression?: never;
      VerdictExpression?: never;
      DmarcExpression?: never;
    }
  | {
      BooleanExpression?: never;
      StringExpression?: never;
      NumberExpression: RuleNumberExpression;
      IpExpression?: never;
      VerdictExpression?: never;
      DmarcExpression?: never;
    }
  | {
      BooleanExpression?: never;
      StringExpression?: never;
      NumberExpression?: never;
      IpExpression: RuleIpExpression;
      VerdictExpression?: never;
      DmarcExpression?: never;
    }
  | {
      BooleanExpression?: never;
      StringExpression?: never;
      NumberExpression?: never;
      IpExpression?: never;
      VerdictExpression: RuleVerdictExpression;
      DmarcExpression?: never;
    }
  | {
      BooleanExpression?: never;
      StringExpression?: never;
      NumberExpression?: never;
      IpExpression?: never;
      VerdictExpression?: never;
      DmarcExpression: RuleDmarcExpression;
    };
export type RuleConditions = RuleCondition[];
export interface DropAction {}
export type ActionFailurePolicy = "CONTINUE" | "DROP" | (string & {});
export type IdOrArn = string;
export type MailFrom = "REPLACE" | "PRESERVE" | (string & {});
export interface RelayAction {
  ActionFailurePolicy?: ActionFailurePolicy;
  Relay: string;
  MailFrom?: MailFrom;
}
export type NameOrArn = string;
export interface ArchiveAction {
  ActionFailurePolicy?: ActionFailurePolicy;
  TargetArchive: string;
}
export type IamRoleArn = string;
export type S3Bucket = string;
export type S3Prefix = string;
export type KmsKeyId = string;
export interface S3Action {
  ActionFailurePolicy?: ActionFailurePolicy;
  RoleArn: string;
  S3Bucket: string;
  S3Prefix?: string;
  S3SseKmsKeyId?: string;
}
export interface SendAction {
  ActionFailurePolicy?: ActionFailurePolicy;
  RoleArn: string;
}
export type HeaderName = string;
export type HeaderValue = string;
export interface AddHeaderAction {
  HeaderName: string;
  HeaderValue: string;
}
export type EmailAddress = string | redacted.Redacted<string>;
export type Recipients = (string | redacted.Redacted<string>)[];
export interface ReplaceRecipientAction {
  ReplaceWith?: (string | redacted.Redacted<string>)[];
}
export interface DeliverToMailboxAction {
  ActionFailurePolicy?: ActionFailurePolicy;
  MailboxArn: string;
  RoleArn: string;
}
export type QBusinessApplicationId = string;
export type QBusinessIndexId = string;
export interface DeliverToQBusinessAction {
  ActionFailurePolicy?: ActionFailurePolicy;
  ApplicationId: string;
  IndexId: string;
  RoleArn: string;
}
export type SnsTopicArn = string;
export type SnsNotificationEncoding = "UTF-8" | "BASE64" | (string & {});
export type SnsNotificationPayloadType = "HEADERS" | "CONTENT" | (string & {});
export interface SnsAction {
  ActionFailurePolicy?: ActionFailurePolicy;
  TopicArn: string;
  RoleArn: string;
  Encoding?: SnsNotificationEncoding;
  PayloadType?: SnsNotificationPayloadType;
}
export type StatusCode = string;
export type SmtpReplyCode = string;
export type DiagnosticMessage = string | redacted.Redacted<string>;
export type BounceMessage = string | redacted.Redacted<string>;
export interface BounceAction {
  ActionFailurePolicy?: ActionFailurePolicy;
  RoleArn: string;
  Sender: string | redacted.Redacted<string>;
  StatusCode: string;
  SmtpReplyCode: string;
  DiagnosticMessage: string | redacted.Redacted<string>;
  Message?: string | redacted.Redacted<string>;
}
export type LambdaFunctionArn = string;
export type LambdaInvocationType = "EVENT" | "REQUEST_RESPONSE" | (string & {});
export type LambdaRetryTimeMinutes = number;
export interface InvokeLambdaAction {
  ActionFailurePolicy?: ActionFailurePolicy;
  FunctionArn: string;
  InvocationType: LambdaInvocationType;
  RoleArn: string;
  RetryTimeMinutes?: number;
}
export type RuleAction =
  | {
      Drop: DropAction;
      Relay?: never;
      Archive?: never;
      WriteToS3?: never;
      Send?: never;
      AddHeader?: never;
      ReplaceRecipient?: never;
      DeliverToMailbox?: never;
      DeliverToQBusiness?: never;
      PublishToSns?: never;
      Bounce?: never;
      InvokeLambda?: never;
    }
  | {
      Drop?: never;
      Relay: RelayAction;
      Archive?: never;
      WriteToS3?: never;
      Send?: never;
      AddHeader?: never;
      ReplaceRecipient?: never;
      DeliverToMailbox?: never;
      DeliverToQBusiness?: never;
      PublishToSns?: never;
      Bounce?: never;
      InvokeLambda?: never;
    }
  | {
      Drop?: never;
      Relay?: never;
      Archive: ArchiveAction;
      WriteToS3?: never;
      Send?: never;
      AddHeader?: never;
      ReplaceRecipient?: never;
      DeliverToMailbox?: never;
      DeliverToQBusiness?: never;
      PublishToSns?: never;
      Bounce?: never;
      InvokeLambda?: never;
    }
  | {
      Drop?: never;
      Relay?: never;
      Archive?: never;
      WriteToS3: S3Action;
      Send?: never;
      AddHeader?: never;
      ReplaceRecipient?: never;
      DeliverToMailbox?: never;
      DeliverToQBusiness?: never;
      PublishToSns?: never;
      Bounce?: never;
      InvokeLambda?: never;
    }
  | {
      Drop?: never;
      Relay?: never;
      Archive?: never;
      WriteToS3?: never;
      Send: SendAction;
      AddHeader?: never;
      ReplaceRecipient?: never;
      DeliverToMailbox?: never;
      DeliverToQBusiness?: never;
      PublishToSns?: never;
      Bounce?: never;
      InvokeLambda?: never;
    }
  | {
      Drop?: never;
      Relay?: never;
      Archive?: never;
      WriteToS3?: never;
      Send?: never;
      AddHeader: AddHeaderAction;
      ReplaceRecipient?: never;
      DeliverToMailbox?: never;
      DeliverToQBusiness?: never;
      PublishToSns?: never;
      Bounce?: never;
      InvokeLambda?: never;
    }
  | {
      Drop?: never;
      Relay?: never;
      Archive?: never;
      WriteToS3?: never;
      Send?: never;
      AddHeader?: never;
      ReplaceRecipient: ReplaceRecipientAction;
      DeliverToMailbox?: never;
      DeliverToQBusiness?: never;
      PublishToSns?: never;
      Bounce?: never;
      InvokeLambda?: never;
    }
  | {
      Drop?: never;
      Relay?: never;
      Archive?: never;
      WriteToS3?: never;
      Send?: never;
      AddHeader?: never;
      ReplaceRecipient?: never;
      DeliverToMailbox: DeliverToMailboxAction;
      DeliverToQBusiness?: never;
      PublishToSns?: never;
      Bounce?: never;
      InvokeLambda?: never;
    }
  | {
      Drop?: never;
      Relay?: never;
      Archive?: never;
      WriteToS3?: never;
      Send?: never;
      AddHeader?: never;
      ReplaceRecipient?: never;
      DeliverToMailbox?: never;
      DeliverToQBusiness: DeliverToQBusinessAction;
      PublishToSns?: never;
      Bounce?: never;
      InvokeLambda?: never;
    }
  | {
      Drop?: never;
      Relay?: never;
      Archive?: never;
      WriteToS3?: never;
      Send?: never;
      AddHeader?: never;
      ReplaceRecipient?: never;
      DeliverToMailbox?: never;
      DeliverToQBusiness?: never;
      PublishToSns: SnsAction;
      Bounce?: never;
      InvokeLambda?: never;
    }
  | {
      Drop?: never;
      Relay?: never;
      Archive?: never;
      WriteToS3?: never;
      Send?: never;
      AddHeader?: never;
      ReplaceRecipient?: never;
      DeliverToMailbox?: never;
      DeliverToQBusiness?: never;
      PublishToSns?: never;
      Bounce: BounceAction;
      InvokeLambda?: never;
    }
  | {
      Drop?: never;
      Relay?: never;
      Archive?: never;
      WriteToS3?: never;
      Send?: never;
      AddHeader?: never;
      ReplaceRecipient?: never;
      DeliverToMailbox?: never;
      DeliverToQBusiness?: never;
      PublishToSns?: never;
      Bounce?: never;
      InvokeLambda: InvokeLambdaAction;
    };
export type RuleActions = RuleAction[];
export interface Rule {
  Name?: string;
  Conditions?: RuleCondition[];
  Unless?: RuleCondition[];
  Actions: RuleAction[];
}
export type Rules = Rule[];
export interface CreateRuleSetRequest {
  ClientToken?: string;
  RuleSetName: string;
  Rules: Rule[];
  Tags?: Tag[];
}
export interface CreateRuleSetResponse {
  RuleSetId: string;
}
export type TrafficPolicyName = string;
export type IngressStringEmailAttribute = "RECIPIENT" | (string & {});
export interface IngressAnalysis {
  Analyzer: string;
  ResultField: string;
}
export type IngressStringToEvaluate =
  | { Attribute: IngressStringEmailAttribute; Analysis?: never }
  | { Attribute?: never; Analysis: IngressAnalysis };
export type IngressStringOperator =
  | "EQUALS"
  | "NOT_EQUALS"
  | "STARTS_WITH"
  | "ENDS_WITH"
  | "CONTAINS"
  | (string & {});
export type StringList = string[];
export interface IngressStringExpression {
  Evaluate: IngressStringToEvaluate;
  Operator: IngressStringOperator;
  Values: string[];
}
export type IngressIpv4Attribute = "SENDER_IP" | (string & {});
export type IngressIpToEvaluate = { Attribute: IngressIpv4Attribute };
export type IngressIpOperator = "CIDR_MATCHES" | "NOT_CIDR_MATCHES" | (string & {});
export type Ipv4Cidr = string;
export type Ipv4Cidrs = string[];
export interface IngressIpv4Expression {
  Evaluate: IngressIpToEvaluate;
  Operator: IngressIpOperator;
  Values: string[];
}
export type IngressIpv6Attribute = "SENDER_IPV6" | (string & {});
export type IngressIpv6ToEvaluate = { Attribute: IngressIpv6Attribute };
export type Ipv6Cidr = string;
export type Ipv6Cidrs = string[];
export interface IngressIpv6Expression {
  Evaluate: IngressIpv6ToEvaluate;
  Operator: IngressIpOperator;
  Values: string[];
}
export type IngressTlsAttribute = "TLS_PROTOCOL" | (string & {});
export type IngressTlsProtocolToEvaluate = { Attribute: IngressTlsAttribute };
export type IngressTlsProtocolOperator = "MINIMUM_TLS_VERSION" | "IS" | (string & {});
export type IngressTlsProtocolAttribute = "TLS1_2" | "TLS1_3" | (string & {});
export interface IngressTlsProtocolExpression {
  Evaluate: IngressTlsProtocolToEvaluate;
  Operator: IngressTlsProtocolOperator;
  Value: IngressTlsProtocolAttribute;
}
export type IngressAddressListEmailAttribute = "RECIPIENT" | (string & {});
export type IngressAddressListArnList = string[];
export interface IngressIsInAddressList {
  Attribute: IngressAddressListEmailAttribute;
  AddressLists: string[];
}
export type IngressBooleanToEvaluate =
  | { Analysis: IngressAnalysis; IsInAddressList?: never }
  | { Analysis?: never; IsInAddressList: IngressIsInAddressList };
export type IngressBooleanOperator = "IS_TRUE" | "IS_FALSE" | (string & {});
export interface IngressBooleanExpression {
  Evaluate: IngressBooleanToEvaluate;
  Operator: IngressBooleanOperator;
}
export type PolicyCondition =
  | {
      StringExpression: IngressStringExpression;
      IpExpression?: never;
      Ipv6Expression?: never;
      TlsExpression?: never;
      BooleanExpression?: never;
    }
  | {
      StringExpression?: never;
      IpExpression: IngressIpv4Expression;
      Ipv6Expression?: never;
      TlsExpression?: never;
      BooleanExpression?: never;
    }
  | {
      StringExpression?: never;
      IpExpression?: never;
      Ipv6Expression: IngressIpv6Expression;
      TlsExpression?: never;
      BooleanExpression?: never;
    }
  | {
      StringExpression?: never;
      IpExpression?: never;
      Ipv6Expression?: never;
      TlsExpression: IngressTlsProtocolExpression;
      BooleanExpression?: never;
    }
  | {
      StringExpression?: never;
      IpExpression?: never;
      Ipv6Expression?: never;
      TlsExpression?: never;
      BooleanExpression: IngressBooleanExpression;
    };
export type PolicyConditions = PolicyCondition[];
export type AcceptAction = "ALLOW" | "DENY" | (string & {});
export interface PolicyStatement {
  Conditions: PolicyCondition[];
  Action: AcceptAction;
}
export type PolicyStatementList = PolicyStatement[];
export type MaxMessageSizeBytes = number;
export interface CreateTrafficPolicyRequest {
  ClientToken?: string;
  TrafficPolicyName: string;
  PolicyStatements: PolicyStatement[];
  DefaultAction: AcceptAction;
  MaxMessageSizeBytes?: number;
  Tags?: Tag[];
}
export interface CreateTrafficPolicyResponse {
  TrafficPolicyId: string;
}
export interface DeleteAddonInstanceRequest {
  AddonInstanceId: string;
}
export interface DeleteAddonInstanceResponse {}
export interface DeleteAddonSubscriptionRequest {
  AddonSubscriptionId: string;
}
export interface DeleteAddonSubscriptionResponse {}
export interface DeleteAddressListRequest {
  AddressListId: string;
}
export interface DeleteAddressListResponse {}
export interface DeleteArchiveRequest {
  ArchiveId: string;
}
export interface DeleteArchiveResponse {}
export interface DeleteIngressPointRequest {
  IngressPointId: string;
}
export interface DeleteIngressPointResponse {}
export interface DeleteRelayRequest {
  RelayId: string;
}
export interface DeleteRelayResponse {}
export interface DeleteRuleSetRequest {
  RuleSetId: string;
}
export interface DeleteRuleSetResponse {}
export interface DeleteTrafficPolicyRequest {
  TrafficPolicyId: string;
}
export interface DeleteTrafficPolicyResponse {}
export type Address = string | redacted.Redacted<string>;
export interface DeregisterMemberFromAddressListRequest {
  AddressListId: string;
  Address: string | redacted.Redacted<string>;
}
export interface DeregisterMemberFromAddressListResponse {}
export interface GetAddonInstanceRequest {
  AddonInstanceId: string;
}
export type AddonInstanceArn = string;
export interface GetAddonInstanceResponse {
  AddonSubscriptionId?: string;
  AddonName?: string;
  AddonInstanceArn?: string;
  CreatedTimestamp?: Date;
}
export interface GetAddonSubscriptionRequest {
  AddonSubscriptionId: string;
}
export type AddonSubscriptionArn = string;
export interface GetAddonSubscriptionResponse {
  AddonName?: string;
  AddonSubscriptionArn?: string;
  CreatedTimestamp?: Date;
}
export interface GetAddressListRequest {
  AddressListId: string;
}
export interface GetAddressListResponse {
  AddressListId: string;
  AddressListArn: string;
  AddressListName: string;
  CreatedTimestamp: Date;
  LastUpdatedTimestamp: Date;
}
export interface GetAddressListImportJobRequest {
  JobId: string;
}
export type ImportJobStatus =
  | "CREATED"
  | "PROCESSING"
  | "COMPLETED"
  | "FAILED"
  | "STOPPED"
  | (string & {});
export type JobItemsCount = number;
export type ErrorMessage = string;
export interface GetAddressListImportJobResponse {
  JobId: string;
  Name: string;
  Status: ImportJobStatus;
  PreSignedUrl: string | redacted.Redacted<string>;
  ImportedItemsCount?: number;
  FailedItemsCount?: number;
  ImportDataFormat: ImportDataFormat;
  AddressListId: string;
  CreatedTimestamp: Date;
  StartTimestamp?: Date;
  CompletedTimestamp?: Date;
  Error?: string;
}
export interface GetArchiveRequest {
  ArchiveId: string;
}
export type ArchiveArn = string;
export type ArchiveState = "ACTIVE" | "PENDING_DELETION" | (string & {});
export interface GetArchiveResponse {
  ArchiveId: string;
  ArchiveName: string;
  ArchiveArn: string;
  ArchiveState: ArchiveState;
  Retention: ArchiveRetention;
  CreatedTimestamp?: Date;
  LastUpdatedTimestamp?: Date;
  KmsKeyArn?: string;
}
export type ExportId = string;
export interface GetArchiveExportRequest {
  ExportId: string;
}
export type ArchiveId = string;
export type ArchiveStringEmailAttribute =
  | "TO"
  | "FROM"
  | "CC"
  | "SUBJECT"
  | "ENVELOPE_TO"
  | "ENVELOPE_FROM"
  | (string & {});
export type ArchiveStringToEvaluate = { Attribute: ArchiveStringEmailAttribute };
export type ArchiveStringOperator = "CONTAINS" | (string & {});
export type StringValue = string;
export type StringValueList = string[];
export interface ArchiveStringExpression {
  Evaluate: ArchiveStringToEvaluate;
  Operator: ArchiveStringOperator;
  Values: string[];
}
export type ArchiveBooleanEmailAttribute = "HAS_ATTACHMENTS" | (string & {});
export type ArchiveBooleanToEvaluate = { Attribute: ArchiveBooleanEmailAttribute };
export type ArchiveBooleanOperator = "IS_TRUE" | "IS_FALSE" | (string & {});
export interface ArchiveBooleanExpression {
  Evaluate: ArchiveBooleanToEvaluate;
  Operator: ArchiveBooleanOperator;
}
export type ArchiveFilterCondition =
  | { StringExpression: ArchiveStringExpression; BooleanExpression?: never }
  | { StringExpression?: never; BooleanExpression: ArchiveBooleanExpression };
export type ArchiveFilterConditions = ArchiveFilterCondition[];
export interface ArchiveFilters {
  Include?: ArchiveFilterCondition[];
  Unless?: ArchiveFilterCondition[];
}
export type ExportMaxResults = number;
export type S3Location = string;
export interface S3ExportDestinationConfiguration {
  S3Location?: string;
}
export type ExportDestinationConfiguration = { S3: S3ExportDestinationConfiguration };
export type ExportState =
  | "QUEUED"
  | "PREPROCESSING"
  | "PROCESSING"
  | "COMPLETED"
  | "FAILED"
  | "CANCELLED"
  | (string & {});
export interface ExportStatus {
  SubmissionTimestamp?: Date;
  CompletionTimestamp?: Date;
  State?: ExportState;
  ErrorMessage?: string;
}
export interface GetArchiveExportResponse {
  ArchiveId?: string;
  Filters?: ArchiveFilters;
  FromTimestamp?: Date;
  ToTimestamp?: Date;
  MaxResults?: number;
  ExportDestinationConfiguration?: ExportDestinationConfiguration;
  Status?: ExportStatus;
}
export type ArchivedMessageId = string;
export interface GetArchiveMessageRequest {
  ArchivedMessageId: string;
}
export type S3PresignedURL = string;
export type SenderIpAddress = string | redacted.Redacted<string>;
export interface Metadata {
  Timestamp?: Date;
  IngressPointId?: string;
  TrafficPolicyId?: string;
  RuleSetId?: string;
  SenderHostname?: string;
  SenderIpAddress?: string | redacted.Redacted<string>;
  TlsCipherSuite?: string;
  TlsProtocol?: string;
  SendingMethod?: string;
  SourceIdentity?: string;
  SendingPool?: string;
  ConfigurationSet?: string;
  SourceArn?: string;
}
export interface Envelope {
  Helo?: string;
  From?: string;
  To?: string[];
}
export interface GetArchiveMessageResponse {
  MessageDownloadLink?: string;
  Metadata?: Metadata;
  Envelope?: Envelope;
}
export interface GetArchiveMessageContentRequest {
  ArchivedMessageId: string;
}
export interface MessageBody {
  Text?: string;
  Html?: string;
  MessageMalformed?: boolean;
}
export interface GetArchiveMessageContentResponse {
  Body?: MessageBody;
}
export type SearchId = string;
export interface GetArchiveSearchRequest {
  SearchId: string;
}
export type SearchMaxResults = number;
export type SearchState =
  | "QUEUED"
  | "RUNNING"
  | "COMPLETED"
  | "FAILED"
  | "CANCELLED"
  | (string & {});
export interface SearchStatus {
  SubmissionTimestamp?: Date;
  CompletionTimestamp?: Date;
  State?: SearchState;
  ErrorMessage?: string;
}
export interface GetArchiveSearchResponse {
  ArchiveId?: string;
  Filters?: ArchiveFilters;
  FromTimestamp?: Date;
  ToTimestamp?: Date;
  MaxResults?: number;
  Status?: SearchStatus;
}
export interface GetArchiveSearchResultsRequest {
  SearchId: string;
}
export type EmailReceivedHeadersList = string[];
export interface Row {
  ArchivedMessageId?: string;
  ReceivedTimestamp?: Date;
  Date?: string;
  To?: string;
  From?: string;
  Cc?: string;
  Subject?: string;
  MessageId?: string;
  HasAttachments?: boolean;
  ReceivedHeaders?: string[];
  InReplyTo?: string;
  XMailer?: string;
  XOriginalMailer?: string;
  XPriority?: string;
  IngressPointId?: string;
  SenderHostname?: string;
  SenderIpAddress?: string | redacted.Redacted<string>;
  Envelope?: Envelope;
  SourceArn?: string;
}
export type RowsList = Row[];
export interface GetArchiveSearchResultsResponse {
  Rows?: Row[];
}
export type TrustStoreResponseOption = "EXCLUDE" | "INCLUDE" | (string & {});
export interface GetIngressPointRequest {
  IngressPointId: string;
  IncludeTrustStoreContents?: TrustStoreResponseOption;
}
export type IngressPointArn = string;
export type IngressPointStatus =
  | "PROVISIONING"
  | "DEPROVISIONING"
  | "UPDATING"
  | "ACTIVE"
  | "CLOSED"
  | "FAILED"
  | "ASSOCIATED_VPC_ENDPOINT_DOES_NOT_EXIST"
  | (string & {});
export type IngressPointARecord = string;
export interface IngressPointPasswordConfiguration {
  SmtpPasswordVersion?: string;
  PreviousSmtpPasswordVersion?: string;
  PreviousSmtpPasswordExpiryTimestamp?: Date;
}
export interface IngressPointAuthConfiguration {
  IngressPointPasswordConfiguration?: IngressPointPasswordConfiguration;
  SecretArn?: string;
  TlsAuthConfiguration?: TlsAuthConfiguration;
}
export interface GetIngressPointResponse {
  IngressPointId: string;
  IngressPointName: string;
  IngressPointArn?: string;
  Status?: IngressPointStatus;
  Type?: IngressPointType;
  ARecord?: string;
  RuleSetId?: string;
  TrafficPolicyId?: string;
  IngressPointAuthConfiguration?: IngressPointAuthConfiguration;
  NetworkConfiguration?: NetworkConfiguration;
  TlsPolicy?: TlsPolicy;
  CreatedTimestamp?: Date;
  LastUpdatedTimestamp?: Date;
}
export interface GetMemberOfAddressListRequest {
  AddressListId: string;
  Address: string | redacted.Redacted<string>;
}
export interface GetMemberOfAddressListResponse {
  Address: string | redacted.Redacted<string>;
  CreatedTimestamp: Date;
}
export interface GetRelayRequest {
  RelayId: string;
}
export type RelayArn = string;
export interface GetRelayResponse {
  RelayId: string;
  RelayArn?: string;
  RelayName?: string;
  ServerName?: string;
  ServerPort?: number;
  Authentication?: RelayAuthentication;
  CreatedTimestamp?: Date;
  LastModifiedTimestamp?: Date;
}
export interface GetRuleSetRequest {
  RuleSetId: string;
}
export type RuleSetArn = string;
export interface GetRuleSetResponse {
  RuleSetId: string;
  RuleSetArn: string;
  RuleSetName: string;
  CreatedDate: Date;
  LastModificationDate: Date;
  Rules: Rule[];
}
export interface GetTrafficPolicyRequest {
  TrafficPolicyId: string;
}
export type TrafficPolicyArn = string;
export interface GetTrafficPolicyResponse {
  TrafficPolicyName: string;
  TrafficPolicyId: string;
  TrafficPolicyArn?: string;
  PolicyStatements?: PolicyStatement[];
  MaxMessageSizeBytes?: number;
  DefaultAction?: AcceptAction;
  CreatedTimestamp?: Date;
  LastUpdatedTimestamp?: Date;
}
export type PaginationToken = string;
export type PageSize = number;
export interface ListAddonInstancesRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface AddonInstance {
  AddonInstanceId?: string;
  AddonSubscriptionId?: string;
  AddonName?: string;
  AddonInstanceArn?: string;
  CreatedTimestamp?: Date;
}
export type AddonInstances = AddonInstance[];
export interface ListAddonInstancesResponse {
  AddonInstances?: AddonInstance[];
  NextToken?: string;
}
export interface ListAddonSubscriptionsRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface AddonSubscription {
  AddonSubscriptionId?: string;
  AddonName?: string;
  AddonSubscriptionArn?: string;
  CreatedTimestamp?: Date;
}
export type AddonSubscriptions = AddonSubscription[];
export interface ListAddonSubscriptionsResponse {
  AddonSubscriptions?: AddonSubscription[];
  NextToken?: string;
}
export interface ListAddressListImportJobsRequest {
  AddressListId: string;
  NextToken?: string;
  PageSize?: number;
}
export interface ImportJob {
  JobId: string;
  Name: string;
  Status: ImportJobStatus;
  PreSignedUrl: string | redacted.Redacted<string>;
  ImportedItemsCount?: number;
  FailedItemsCount?: number;
  ImportDataFormat: ImportDataFormat;
  AddressListId: string;
  CreatedTimestamp: Date;
  StartTimestamp?: Date;
  CompletedTimestamp?: Date;
  Error?: string;
}
export type ImportJobs = ImportJob[];
export interface ListAddressListImportJobsResponse {
  ImportJobs: ImportJob[];
  NextToken?: string;
}
export interface ListAddressListsRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface AddressList {
  AddressListId: string;
  AddressListArn: string;
  AddressListName: string;
  CreatedTimestamp: Date;
  LastUpdatedTimestamp: Date;
}
export type AddressLists = AddressList[];
export interface ListAddressListsResponse {
  AddressLists: AddressList[];
  NextToken?: string;
}
export interface ListArchiveExportsRequest {
  ArchiveId: string;
  NextToken?: string;
  PageSize?: number;
}
export interface ExportSummary {
  ExportId?: string;
  Status?: ExportStatus;
}
export type ExportSummaryList = ExportSummary[];
export interface ListArchiveExportsResponse {
  Exports?: ExportSummary[];
  NextToken?: string;
}
export interface ListArchivesRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface Archive {
  ArchiveId: string;
  ArchiveName?: string;
  ArchiveState?: ArchiveState;
  LastUpdatedTimestamp?: Date;
}
export type ArchivesList = Archive[];
export interface ListArchivesResponse {
  Archives: Archive[];
  NextToken?: string;
}
export interface ListArchiveSearchesRequest {
  ArchiveId: string;
  NextToken?: string;
  PageSize?: number;
}
export interface SearchSummary {
  SearchId?: string;
  Status?: SearchStatus;
}
export type SearchSummaryList = SearchSummary[];
export interface ListArchiveSearchesResponse {
  Searches?: SearchSummary[];
  NextToken?: string;
}
export interface ListIngressPointsRequest {
  PageSize?: number;
  NextToken?: string;
}
export interface IngressPoint {
  IngressPointName: string;
  IngressPointId: string;
  Status: IngressPointStatus;
  Type: IngressPointType;
  ARecord?: string;
}
export type IngressPointsList = IngressPoint[];
export interface ListIngressPointsResponse {
  IngressPoints?: IngressPoint[];
  NextToken?: string;
}
export type AddressPrefix = string | redacted.Redacted<string>;
export interface AddressFilter {
  AddressPrefix?: string | redacted.Redacted<string>;
}
export type AddressPageSize = number;
export interface ListMembersOfAddressListRequest {
  AddressListId: string;
  Filter?: AddressFilter;
  NextToken?: string;
  PageSize?: number;
}
export interface SavedAddress {
  Address: string | redacted.Redacted<string>;
  CreatedTimestamp: Date;
}
export type SavedAddresses = SavedAddress[];
export interface ListMembersOfAddressListResponse {
  Addresses: SavedAddress[];
  NextToken?: string;
}
export interface ListRelaysRequest {
  PageSize?: number;
  NextToken?: string;
}
export interface Relay {
  RelayId?: string;
  RelayName?: string;
  LastModifiedTimestamp?: Date;
}
export type Relays = Relay[];
export interface ListRelaysResponse {
  Relays: Relay[];
  NextToken?: string;
}
export interface ListRuleSetsRequest {
  NextToken?: string;
  PageSize?: number;
}
export interface RuleSet {
  RuleSetId?: string;
  RuleSetName?: string;
  LastModificationDate?: Date;
}
export type RuleSets = RuleSet[];
export interface ListRuleSetsResponse {
  RuleSets: RuleSet[];
  NextToken?: string;
}
export type TaggableResourceArn = string;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags: Tag[];
}
export interface ListTrafficPoliciesRequest {
  PageSize?: number;
  NextToken?: string;
}
export interface TrafficPolicy {
  TrafficPolicyName: string;
  TrafficPolicyId: string;
  DefaultAction: AcceptAction;
}
export type TrafficPolicyList = TrafficPolicy[];
export interface ListTrafficPoliciesResponse {
  TrafficPolicies?: TrafficPolicy[];
  NextToken?: string;
}
export interface RegisterMemberToAddressListRequest {
  AddressListId: string;
  Address: string | redacted.Redacted<string>;
}
export interface RegisterMemberToAddressListResponse {}
export interface StartAddressListImportJobRequest {
  JobId: string;
}
export interface StartAddressListImportJobResponse {}
export interface StartArchiveExportRequest {
  ArchiveId: string;
  Filters?: ArchiveFilters;
  FromTimestamp: Date;
  ToTimestamp: Date;
  MaxResults?: number;
  ExportDestinationConfiguration: ExportDestinationConfiguration;
  IncludeMetadata?: boolean;
}
export interface StartArchiveExportResponse {
  ExportId?: string;
}
export interface StartArchiveSearchRequest {
  ArchiveId: string;
  Filters?: ArchiveFilters;
  FromTimestamp: Date;
  ToTimestamp: Date;
  MaxResults: number;
}
export interface StartArchiveSearchResponse {
  SearchId?: string;
}
export interface StopAddressListImportJobRequest {
  JobId: string;
}
export interface StopAddressListImportJobResponse {}
export interface StopArchiveExportRequest {
  ExportId: string;
}
export interface StopArchiveExportResponse {}
export interface StopArchiveSearchRequest {
  SearchId: string;
}
export interface StopArchiveSearchResponse {}
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}
export interface TagResourceResponse {}
export type TagKeyList = string[];
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
export interface UntagResourceResponse {}
export interface UpdateArchiveRequest {
  ArchiveId: string;
  ArchiveName?: string;
  Retention?: ArchiveRetention;
}
export interface UpdateArchiveResponse {}
export type IngressPointStatusToUpdate = "ACTIVE" | "CLOSED" | (string & {});
export interface UpdateIngressPointRequest {
  IngressPointId: string;
  IngressPointName?: string;
  StatusToUpdate?: IngressPointStatusToUpdate;
  RuleSetId?: string;
  TrafficPolicyId?: string;
  IngressPointConfiguration?: IngressPointConfiguration;
  TlsPolicy?: TlsPolicy;
}
export interface UpdateIngressPointResponse {}
export interface UpdateRelayRequest {
  RelayId: string;
  RelayName?: string;
  ServerName?: string;
  ServerPort?: number;
  Authentication?: RelayAuthentication;
}
export interface UpdateRelayResponse {}
export interface UpdateRuleSetRequest {
  RuleSetId: string;
  RuleSetName?: string;
  Rules?: Rule[];
}
export interface UpdateRuleSetResponse {}
export interface UpdateTrafficPolicyRequest {
  TrafficPolicyId: string;
  TrafficPolicyName?: string;
  PolicyStatements?: PolicyStatement[];
  DefaultAction?: AcceptAction;
  MaxMessageSizeBytes?: number;
}
export interface UpdateTrafficPolicyResponse {}
export type CreateAddonInstanceError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates an Add On instance for the subscription indicated in the request. The resulting Amazon Resource Name (ARN) can be used in a conditional statement for a rule set or traffic policy.
 */
export const createAddonInstance: API.OperationMethod<
  CreateAddonInstanceRequest,
  CreateAddonInstanceResponse,
  CreateAddonInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<CreateAddonInstanceRequest>,
  output: __S(3) as any as S.Schema<CreateAddonInstanceResponse>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAddonInstance",
}));

export type CreateAddonSubscriptionError =
  | ConflictException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a subscription for an Add On representing the acceptance of its terms of use and additional pricing. The subscription can then be used to create an instance for use in rule sets or traffic policies.
 */
export const createAddonSubscription: API.OperationMethod<
  CreateAddonSubscriptionRequest,
  CreateAddonSubscriptionResponse,
  CreateAddonSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4) as any as S.Schema<CreateAddonSubscriptionRequest>,
  output: __S(5) as any as S.Schema<CreateAddonSubscriptionResponse>,
  errors: [
    ConflictException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAddonSubscription",
}));

export type CreateAddressListError =
  | AccessDeniedException
  | ConflictException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new address list.
 */
export const createAddressList: API.OperationMethod<
  CreateAddressListRequest,
  CreateAddressListResponse,
  CreateAddressListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6) as any as S.Schema<CreateAddressListRequest>,
  output: __S(7) as any as S.Schema<CreateAddressListResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAddressList",
}));

export type CreateAddressListImportJobError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an import job for an address list.
 */
export const createAddressListImportJob: API.OperationMethod<
  CreateAddressListImportJobRequest,
  CreateAddressListImportJobResponse,
  CreateAddressListImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<CreateAddressListImportJobRequest>,
  output: __S(10) as any as S.Schema<CreateAddressListImportJobResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateAddressListImportJob",
}));

export type CreateArchiveError =
  | AccessDeniedException
  | ConflictException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new email archive resource for storing and retaining emails.
 */
export const createArchive: API.OperationMethod<
  CreateArchiveRequest,
  CreateArchiveResponse,
  CreateArchiveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12) as any as S.Schema<CreateArchiveRequest>,
  output: __S(13) as any as S.Schema<CreateArchiveResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateArchive",
}));

export type CreateIngressPointError =
  | ConflictException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Provision a new ingress endpoint resource.
 */
export const createIngressPoint: API.OperationMethod<
  CreateIngressPointRequest,
  CreateIngressPointResponse,
  CreateIngressPointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20) as any as S.Schema<CreateIngressPointRequest>,
  output: __S(21) as any as S.Schema<CreateIngressPointResponse>,
  errors: [ConflictException, ServiceQuotaExceededException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateIngressPoint",
}));

export type CreateRelayError =
  | ConflictException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a relay resource which can be used in rules to relay incoming emails to defined relay destinations.
 */
export const createRelay: API.OperationMethod<
  CreateRelayRequest,
  CreateRelayResponse,
  CreateRelayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(24) as any as S.Schema<CreateRelayRequest>,
  output: __S(25) as any as S.Schema<CreateRelayResponse>,
  errors: [ConflictException, ServiceQuotaExceededException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRelay",
}));

export type CreateRuleSetError =
  | ConflictException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Provision a new rule set.
 */
export const createRuleSet: API.OperationMethod<
  CreateRuleSetRequest,
  CreateRuleSetResponse,
  CreateRuleSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58) as any as S.Schema<CreateRuleSetRequest>,
  output: __S(59) as any as S.Schema<CreateRuleSetResponse>,
  errors: [ConflictException, ServiceQuotaExceededException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRuleSet",
}));

export type CreateTrafficPolicyError =
  | ConflictException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Provision a new traffic policy resource.
 */
export const createTrafficPolicy: API.OperationMethod<
  CreateTrafficPolicyRequest,
  CreateTrafficPolicyResponse,
  CreateTrafficPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72) as any as S.Schema<CreateTrafficPolicyRequest>,
  output: __S(73) as any as S.Schema<CreateTrafficPolicyResponse>,
  errors: [ConflictException, ServiceQuotaExceededException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateTrafficPolicy",
}));

export type DeleteAddonInstanceError = ConflictException | ValidationException | CommonErrors;
/**
 * Deletes an Add On instance.
 */
export const deleteAddonInstance: API.OperationMethod<
  DeleteAddonInstanceRequest,
  DeleteAddonInstanceResponse,
  DeleteAddonInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74) as any as S.Schema<DeleteAddonInstanceRequest>,
  output: __S(22) as any as S.Schema<DeleteAddonInstanceResponse>,
  errors: [ConflictException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAddonInstance",
}));

export type DeleteAddonSubscriptionError = ConflictException | ValidationException | CommonErrors;
/**
 * Deletes an Add On subscription.
 */
export const deleteAddonSubscription: API.OperationMethod<
  DeleteAddonSubscriptionRequest,
  DeleteAddonSubscriptionResponse,
  DeleteAddonSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75) as any as S.Schema<DeleteAddonSubscriptionRequest>,
  output: __S(76) as any as S.Schema<DeleteAddonSubscriptionResponse>,
  errors: [ConflictException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAddonSubscription",
}));

export type DeleteAddressListError =
  | AccessDeniedException
  | ConflictException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an address list.
 */
export const deleteAddressList: API.OperationMethod<
  DeleteAddressListRequest,
  DeleteAddressListResponse,
  DeleteAddressListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77) as any as S.Schema<DeleteAddressListRequest>,
  output: __S(22) as any as S.Schema<DeleteAddressListResponse>,
  errors: [AccessDeniedException, ConflictException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAddressList",
}));

export type DeleteArchiveError =
  | AccessDeniedException
  | ConflictException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Initiates deletion of an email archive. This changes the archive state to pending deletion. In this state, no new emails can be added, and existing archived emails become inaccessible (search, export, download). The archive and all of its contents will be permanently deleted 30 days after entering the pending deletion state, regardless of the configured retention period.
 */
export const deleteArchive: API.OperationMethod<
  DeleteArchiveRequest,
  DeleteArchiveResponse,
  DeleteArchiveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(78) as any as S.Schema<DeleteArchiveRequest>,
  output: __S(22) as any as S.Schema<DeleteArchiveResponse>,
  errors: [AccessDeniedException, ConflictException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteArchive",
}));

export type DeleteIngressPointError =
  | ConflictException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Delete an ingress endpoint resource.
 */
export const deleteIngressPoint: API.OperationMethod<
  DeleteIngressPointRequest,
  DeleteIngressPointResponse,
  DeleteIngressPointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(79) as any as S.Schema<DeleteIngressPointRequest>,
  output: __S(22) as any as S.Schema<DeleteIngressPointResponse>,
  errors: [ConflictException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIngressPoint",
}));

export type DeleteRelayError =
  | ConflictException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an existing relay resource.
 */
export const deleteRelay: API.OperationMethod<
  DeleteRelayRequest,
  DeleteRelayResponse,
  DeleteRelayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80) as any as S.Schema<DeleteRelayRequest>,
  output: __S(22) as any as S.Schema<DeleteRelayResponse>,
  errors: [ConflictException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRelay",
}));

export type DeleteRuleSetError = ConflictException | ValidationException | CommonErrors;
/**
 * Delete a rule set.
 */
export const deleteRuleSet: API.OperationMethod<
  DeleteRuleSetRequest,
  DeleteRuleSetResponse,
  DeleteRuleSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(81) as any as S.Schema<DeleteRuleSetRequest>,
  output: __S(22) as any as S.Schema<DeleteRuleSetResponse>,
  errors: [ConflictException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRuleSet",
}));

export type DeleteTrafficPolicyError =
  | ConflictException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Delete a traffic policy resource.
 */
export const deleteTrafficPolicy: API.OperationMethod<
  DeleteTrafficPolicyRequest,
  DeleteTrafficPolicyResponse,
  DeleteTrafficPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(82) as any as S.Schema<DeleteTrafficPolicyRequest>,
  output: __S(22) as any as S.Schema<DeleteTrafficPolicyResponse>,
  errors: [ConflictException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTrafficPolicy",
}));

export type DeregisterMemberFromAddressListError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes a member from an address list.
 */
export const deregisterMemberFromAddressList: API.OperationMethod<
  DeregisterMemberFromAddressListRequest,
  DeregisterMemberFromAddressListResponse,
  DeregisterMemberFromAddressListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(83) as any as S.Schema<DeregisterMemberFromAddressListRequest>,
  output: __S(84) as any as S.Schema<DeregisterMemberFromAddressListResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeregisterMemberFromAddressList",
}));

export type GetAddonInstanceError = ResourceNotFoundException | ValidationException | CommonErrors;
/**
 * Gets detailed information about an Add On instance.
 */
export const getAddonInstance: API.OperationMethod<
  GetAddonInstanceRequest,
  GetAddonInstanceResponse,
  GetAddonInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(85) as any as S.Schema<GetAddonInstanceRequest>,
  output: __S(86) as any as S.Schema<GetAddonInstanceResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAddonInstance",
}));

export type GetAddonSubscriptionError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Gets detailed information about an Add On subscription.
 */
export const getAddonSubscription: API.OperationMethod<
  GetAddonSubscriptionRequest,
  GetAddonSubscriptionResponse,
  GetAddonSubscriptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(87) as any as S.Schema<GetAddonSubscriptionRequest>,
  output: __S(88) as any as S.Schema<GetAddonSubscriptionResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAddonSubscription",
}));

export type GetAddressListError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Fetch attributes of an address list.
 */
export const getAddressList: API.OperationMethod<
  GetAddressListRequest,
  GetAddressListResponse,
  GetAddressListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(89) as any as S.Schema<GetAddressListRequest>,
  output: __S(90) as any as S.Schema<GetAddressListResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAddressList",
}));

export type GetAddressListImportJobError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Fetch attributes of an import job.
 */
export const getAddressListImportJob: API.OperationMethod<
  GetAddressListImportJobRequest,
  GetAddressListImportJobResponse,
  GetAddressListImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(91) as any as S.Schema<GetAddressListImportJobRequest>,
  output: __S(92) as any as S.Schema<GetAddressListImportJobResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAddressListImportJob",
}));

export type GetArchiveError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the full details and current state of a specified email archive.
 */
export const getArchive: API.OperationMethod<
  GetArchiveRequest,
  GetArchiveResponse,
  GetArchiveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(93) as any as S.Schema<GetArchiveRequest>,
  output: __S(94) as any as S.Schema<GetArchiveResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetArchive",
}));

export type GetArchiveExportError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details and current status of a specific email archive export job.
 */
export const getArchiveExport: API.OperationMethod<
  GetArchiveExportRequest,
  GetArchiveExportResponse,
  GetArchiveExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95) as any as S.Schema<GetArchiveExportRequest>,
  output: __S(104) as any as S.Schema<GetArchiveExportResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetArchiveExport",
}));

export type GetArchiveMessageError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a pre-signed URL that provides temporary download access to the specific email message stored in the archive.
 */
export const getArchiveMessage: API.OperationMethod<
  GetArchiveMessageRequest,
  GetArchiveMessageResponse,
  GetArchiveMessageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(105) as any as S.Schema<GetArchiveMessageRequest>,
  output: __S(108) as any as S.Schema<GetArchiveMessageResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetArchiveMessage",
}));

export type GetArchiveMessageContentError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the textual content of a specific email message stored in the archive. Attachments are not included.
 */
export const getArchiveMessageContent: API.OperationMethod<
  GetArchiveMessageContentRequest,
  GetArchiveMessageContentResponse,
  GetArchiveMessageContentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109) as any as S.Schema<GetArchiveMessageContentRequest>,
  output: __S(111) as any as S.Schema<GetArchiveMessageContentResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetArchiveMessageContent",
}));

export type GetArchiveSearchError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details and current status of a specific email archive search job.
 */
export const getArchiveSearch: API.OperationMethod<
  GetArchiveSearchRequest,
  GetArchiveSearchResponse,
  GetArchiveSearchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112) as any as S.Schema<GetArchiveSearchRequest>,
  output: __S(113) as any as S.Schema<GetArchiveSearchResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetArchiveSearch",
}));

export type GetArchiveSearchResultsError =
  | AccessDeniedException
  | ConflictException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the results of a completed email archive search job.
 */
export const getArchiveSearchResults: API.OperationMethod<
  GetArchiveSearchResultsRequest,
  GetArchiveSearchResultsResponse,
  GetArchiveSearchResultsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(114) as any as S.Schema<GetArchiveSearchResultsRequest>,
  output: __S(117) as any as S.Schema<GetArchiveSearchResultsResponse>,
  errors: [AccessDeniedException, ConflictException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetArchiveSearchResults",
}));

export type GetIngressPointError = ResourceNotFoundException | ValidationException | CommonErrors;
/**
 * Fetch ingress endpoint resource attributes.
 */
export const getIngressPoint: API.OperationMethod<
  GetIngressPointRequest,
  GetIngressPointResponse,
  GetIngressPointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(118) as any as S.Schema<GetIngressPointRequest>,
  output: __S(121) as any as S.Schema<GetIngressPointResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIngressPoint",
}));

export type GetMemberOfAddressListError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Fetch attributes of a member in an address list.
 */
export const getMemberOfAddressList: API.OperationMethod<
  GetMemberOfAddressListRequest,
  GetMemberOfAddressListResponse,
  GetMemberOfAddressListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(122) as any as S.Schema<GetMemberOfAddressListRequest>,
  output: __S(123) as any as S.Schema<GetMemberOfAddressListResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMemberOfAddressList",
}));

export type GetRelayError = ResourceNotFoundException | ValidationException | CommonErrors;
/**
 * Fetch the relay resource and it's attributes.
 */
export const getRelay: API.OperationMethod<
  GetRelayRequest,
  GetRelayResponse,
  GetRelayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(124) as any as S.Schema<GetRelayRequest>,
  output: __S(125) as any as S.Schema<GetRelayResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRelay",
}));

export type GetRuleSetError = ResourceNotFoundException | ValidationException | CommonErrors;
/**
 * Fetch attributes of a rule set.
 */
export const getRuleSet: API.OperationMethod<
  GetRuleSetRequest,
  GetRuleSetResponse,
  GetRuleSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(126) as any as S.Schema<GetRuleSetRequest>,
  output: __S(127) as any as S.Schema<GetRuleSetResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRuleSet",
}));

export type GetTrafficPolicyError = ResourceNotFoundException | ValidationException | CommonErrors;
/**
 * Fetch attributes of a traffic policy resource.
 */
export const getTrafficPolicy: API.OperationMethod<
  GetTrafficPolicyRequest,
  GetTrafficPolicyResponse,
  GetTrafficPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(128) as any as S.Schema<GetTrafficPolicyRequest>,
  output: __S(129) as any as S.Schema<GetTrafficPolicyResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTrafficPolicy",
}));

export type ListAddonInstancesError = ValidationException | CommonErrors;
/**
 * Lists all Add On instances in your account.
 */
export const listAddonInstances: API.PaginatedOperationMethod<
  ListAddonInstancesRequest,
  ListAddonInstancesResponse,
  ListAddonInstancesError,
  Credentials | HttpClient.HttpClient,
  AddonInstance
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(130) as any as S.Schema<ListAddonInstancesRequest>,
  output: __S(133) as any as S.Schema<ListAddonInstancesResponse>,
  errors: [ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAddonInstances",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AddonInstances",
    pageSize: "PageSize",
  } as const,
})) as any;

export type ListAddonSubscriptionsError = ValidationException | CommonErrors;
/**
 * Lists all Add On subscriptions in your account.
 */
export const listAddonSubscriptions: API.PaginatedOperationMethod<
  ListAddonSubscriptionsRequest,
  ListAddonSubscriptionsResponse,
  ListAddonSubscriptionsError,
  Credentials | HttpClient.HttpClient,
  AddonSubscription
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(134) as any as S.Schema<ListAddonSubscriptionsRequest>,
  output: __S(137) as any as S.Schema<ListAddonSubscriptionsResponse>,
  errors: [ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAddonSubscriptions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AddonSubscriptions",
    pageSize: "PageSize",
  } as const,
})) as any;

export type ListAddressListImportJobsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists jobs for an address list.
 */
export const listAddressListImportJobs: API.PaginatedOperationMethod<
  ListAddressListImportJobsRequest,
  ListAddressListImportJobsResponse,
  ListAddressListImportJobsError,
  Credentials | HttpClient.HttpClient,
  ImportJob
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(138) as any as S.Schema<ListAddressListImportJobsRequest>,
  output: __S(141) as any as S.Schema<ListAddressListImportJobsResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAddressListImportJobs",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ImportJobs",
    pageSize: "PageSize",
  } as const,
})) as any;

export type ListAddressListsError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists address lists for this account.
 */
export const listAddressLists: API.PaginatedOperationMethod<
  ListAddressListsRequest,
  ListAddressListsResponse,
  ListAddressListsError,
  Credentials | HttpClient.HttpClient,
  AddressList
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(142) as any as S.Schema<ListAddressListsRequest>,
  output: __S(144) as any as S.Schema<ListAddressListsResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAddressLists",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AddressLists",
    pageSize: "PageSize",
  } as const,
})) as any;

export type ListArchiveExportsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of email archive export jobs.
 */
export const listArchiveExports: API.PaginatedOperationMethod<
  ListArchiveExportsRequest,
  ListArchiveExportsResponse,
  ListArchiveExportsError,
  Credentials | HttpClient.HttpClient,
  ExportSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(145) as any as S.Schema<ListArchiveExportsRequest>,
  output: __S(148) as any as S.Schema<ListArchiveExportsResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListArchiveExports",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Exports",
    pageSize: "PageSize",
  } as const,
})) as any;

export type ListArchivesError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of all email archives in your account.
 */
export const listArchives: API.PaginatedOperationMethod<
  ListArchivesRequest,
  ListArchivesResponse,
  ListArchivesError,
  Credentials | HttpClient.HttpClient,
  Archive
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(149) as any as S.Schema<ListArchivesRequest>,
  output: __S(152) as any as S.Schema<ListArchivesResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListArchives",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Archives",
    pageSize: "PageSize",
  } as const,
})) as any;

export type ListArchiveSearchesError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns a list of email archive search jobs.
 */
export const listArchiveSearches: API.PaginatedOperationMethod<
  ListArchiveSearchesRequest,
  ListArchiveSearchesResponse,
  ListArchiveSearchesError,
  Credentials | HttpClient.HttpClient,
  SearchSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(153) as any as S.Schema<ListArchiveSearchesRequest>,
  output: __S(156) as any as S.Schema<ListArchiveSearchesResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListArchiveSearches",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Searches",
    pageSize: "PageSize",
  } as const,
})) as any;

export type ListIngressPointsError = ValidationException | CommonErrors;
/**
 * List all ingress endpoint resources.
 */
export const listIngressPoints: API.PaginatedOperationMethod<
  ListIngressPointsRequest,
  ListIngressPointsResponse,
  ListIngressPointsError,
  Credentials | HttpClient.HttpClient,
  IngressPoint
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(157) as any as S.Schema<ListIngressPointsRequest>,
  output: __S(160) as any as S.Schema<ListIngressPointsResponse>,
  errors: [ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIngressPoints",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "IngressPoints",
    pageSize: "PageSize",
  } as const,
})) as any;

export type ListMembersOfAddressListError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists members of an address list.
 */
export const listMembersOfAddressList: API.PaginatedOperationMethod<
  ListMembersOfAddressListRequest,
  ListMembersOfAddressListResponse,
  ListMembersOfAddressListError,
  Credentials | HttpClient.HttpClient,
  SavedAddress
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(162) as any as S.Schema<ListMembersOfAddressListRequest>,
  output: __S(165) as any as S.Schema<ListMembersOfAddressListResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMembersOfAddressList",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Addresses",
    pageSize: "PageSize",
  } as const,
})) as any;

export type ListRelaysError = ValidationException | CommonErrors;
/**
 * Lists all the existing relay resources.
 */
export const listRelays: API.PaginatedOperationMethod<
  ListRelaysRequest,
  ListRelaysResponse,
  ListRelaysError,
  Credentials | HttpClient.HttpClient,
  Relay
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(166) as any as S.Schema<ListRelaysRequest>,
  output: __S(169) as any as S.Schema<ListRelaysResponse>,
  errors: [ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRelays",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Relays",
    pageSize: "PageSize",
  } as const,
})) as any;

export type ListRuleSetsError = ValidationException | CommonErrors;
/**
 * List rule sets for this account.
 */
export const listRuleSets: API.PaginatedOperationMethod<
  ListRuleSetsRequest,
  ListRuleSetsResponse,
  ListRuleSetsError,
  Credentials | HttpClient.HttpClient,
  RuleSet
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(170) as any as S.Schema<ListRuleSetsRequest>,
  output: __S(173) as any as S.Schema<ListRuleSetsResponse>,
  errors: [ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRuleSets",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "RuleSets",
    pageSize: "PageSize",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the list of tags (keys and values) assigned to the resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(174) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(175) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTrafficPoliciesError = ValidationException | CommonErrors;
/**
 * List traffic policy resources.
 */
export const listTrafficPolicies: API.PaginatedOperationMethod<
  ListTrafficPoliciesRequest,
  ListTrafficPoliciesResponse,
  ListTrafficPoliciesError,
  Credentials | HttpClient.HttpClient,
  TrafficPolicy
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(176) as any as S.Schema<ListTrafficPoliciesRequest>,
  output: __S(179) as any as S.Schema<ListTrafficPoliciesResponse>,
  errors: [ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTrafficPolicies",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TrafficPolicies",
    pageSize: "PageSize",
  } as const,
})) as any;

export type RegisterMemberToAddressListError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds a member to an address list.
 */
export const registerMemberToAddressList: API.OperationMethod<
  RegisterMemberToAddressListRequest,
  RegisterMemberToAddressListResponse,
  RegisterMemberToAddressListError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(180) as any as S.Schema<RegisterMemberToAddressListRequest>,
  output: __S(84) as any as S.Schema<RegisterMemberToAddressListResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RegisterMemberToAddressList",
}));

export type StartAddressListImportJobError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts an import job for an address list.
 */
export const startAddressListImportJob: API.OperationMethod<
  StartAddressListImportJobRequest,
  StartAddressListImportJobResponse,
  StartAddressListImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(181) as any as S.Schema<StartAddressListImportJobRequest>,
  output: __S(84) as any as S.Schema<StartAddressListImportJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartAddressListImportJob",
}));

export type StartArchiveExportError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Initiates an export of emails from the specified archive.
 */
export const startArchiveExport: API.OperationMethod<
  StartArchiveExportRequest,
  StartArchiveExportResponse,
  StartArchiveExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(182) as any as S.Schema<StartArchiveExportRequest>,
  output: __S(183) as any as S.Schema<StartArchiveExportResponse>,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartArchiveExport",
}));

export type StartArchiveSearchError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Initiates a search across emails in the specified archive.
 */
export const startArchiveSearch: API.OperationMethod<
  StartArchiveSearchRequest,
  StartArchiveSearchResponse,
  StartArchiveSearchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(184) as any as S.Schema<StartArchiveSearchRequest>,
  output: __S(185) as any as S.Schema<StartArchiveSearchResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartArchiveSearch",
}));

export type StopAddressListImportJobError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops an ongoing import job for an address list.
 */
export const stopAddressListImportJob: API.OperationMethod<
  StopAddressListImportJobRequest,
  StopAddressListImportJobResponse,
  StopAddressListImportJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(186) as any as S.Schema<StopAddressListImportJobRequest>,
  output: __S(84) as any as S.Schema<StopAddressListImportJobResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopAddressListImportJob",
}));

export type StopArchiveExportError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops an in-progress export of emails from an archive.
 */
export const stopArchiveExport: API.OperationMethod<
  StopArchiveExportRequest,
  StopArchiveExportResponse,
  StopArchiveExportError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(187) as any as S.Schema<StopArchiveExportRequest>,
  output: __S(22) as any as S.Schema<StopArchiveExportResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopArchiveExport",
}));

export type StopArchiveSearchError =
  | AccessDeniedException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Stops an in-progress archive search job.
 */
export const stopArchiveSearch: API.OperationMethod<
  StopArchiveSearchRequest,
  StopArchiveSearchResponse,
  StopArchiveSearchError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(188) as any as S.Schema<StopArchiveSearchRequest>,
  output: __S(22) as any as S.Schema<StopArchiveSearchResponse>,
  errors: [AccessDeniedException, ThrottlingException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopArchiveSearch",
}));

export type TagResourceError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Adds one or more tags (keys and values) to a specified resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(189) as any as S.Schema<TagResourceRequest>,
  output: __S(22) as any as S.Schema<TagResourceResponse>,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | ConflictException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Remove one or more tags (keys and values) from a specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(190) as any as S.Schema<UntagResourceRequest>,
  output: __S(22) as any as S.Schema<UntagResourceResponse>,
  errors: [ConflictException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateArchiveError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the attributes of an existing email archive.
 */
export const updateArchive: API.OperationMethod<
  UpdateArchiveRequest,
  UpdateArchiveResponse,
  UpdateArchiveError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(191) as any as S.Schema<UpdateArchiveRequest>,
  output: __S(22) as any as S.Schema<UpdateArchiveResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateArchive",
}));

export type UpdateIngressPointError =
  | ConflictException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Update attributes of a provisioned ingress endpoint resource.
 */
export const updateIngressPoint: API.OperationMethod<
  UpdateIngressPointRequest,
  UpdateIngressPointResponse,
  UpdateIngressPointError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(192) as any as S.Schema<UpdateIngressPointRequest>,
  output: __S(22) as any as S.Schema<UpdateIngressPointResponse>,
  errors: [ConflictException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIngressPoint",
}));

export type UpdateRelayError =
  | ConflictException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the attributes of an existing relay resource.
 */
export const updateRelay: API.OperationMethod<
  UpdateRelayRequest,
  UpdateRelayResponse,
  UpdateRelayError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(193) as any as S.Schema<UpdateRelayRequest>,
  output: __S(22) as any as S.Schema<UpdateRelayResponse>,
  errors: [ConflictException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRelay",
}));

export type UpdateRuleSetError =
  | ConflictException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Update attributes of an already provisioned rule set.
 */
export const updateRuleSet: API.OperationMethod<
  UpdateRuleSetRequest,
  UpdateRuleSetResponse,
  UpdateRuleSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(194) as any as S.Schema<UpdateRuleSetRequest>,
  output: __S(22) as any as S.Schema<UpdateRuleSetResponse>,
  errors: [ConflictException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRuleSet",
}));

export type UpdateTrafficPolicyError =
  | ConflictException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Update attributes of an already provisioned traffic policy resource.
 */
export const updateTrafficPolicy: API.OperationMethod<
  UpdateTrafficPolicyRequest,
  UpdateTrafficPolicyResponse,
  UpdateTrafficPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(195) as any as S.Schema<UpdateTrafficPolicyRequest>,
  output: __S(22) as any as S.Schema<UpdateTrafficPolicyResponse>,
  errors: [ConflictException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateTrafficPolicy",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 1:
      return S.Array(__S(0));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          AddonSubscriptionId: S.String,
          Tags: S.optional(__S(1)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateAddonInstanceRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ AddonInstanceId: S.String })).annotate({
        identifier: "CreateAddonInstanceResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          AddonName: S.String,
          Tags: S.optional(__S(1)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateAddonSubscriptionRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ AddonSubscriptionId: S.String })).annotate({
        identifier: "CreateAddonSubscriptionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          AddressListName: S.String,
          Tags: S.optional(__S(1)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateAddressListRequest" });
    case 7:
      return S.suspend(() => S.Struct({ AddressListId: S.String })).annotate({
        identifier: "CreateAddressListResponse",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ImportDataType: S.String })).annotate({
        identifier: "ImportDataFormat",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          AddressListId: S.String,
          Name: S.String,
          ImportDataFormat: __S(8),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateAddressListImportJobRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ JobId: S.String, PreSignedUrl: SensitiveString })).annotate(
        {
          identifier: "CreateAddressListImportJobResponse",
        },
      );
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ RetentionPeriod: S.String })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          ArchiveName: S.String,
          Retention: S.optional(__S(11)),
          KmsKeyArn: S.optional(S.String),
          Tags: S.optional(__S(1)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateArchiveRequest" });
    case 5:
      return S.suspend(() => S.Struct({ ArchiveId: S.String })).annotate({
        identifier: "CreateArchiveResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CAContent: SensitiveString,
          CrlContent: S.optional(SensitiveString),
          KmsKeyArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "TrustStore" });
    case 7:
      return S.suspend(() => S.Struct({ TrustStore: S.optional(__S(14)) })).annotate({
        identifier: "TlsAuthConfiguration",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ SmtpPassword: SensitiveString }),
        /*@__PURE__*/ S.Struct({ SecretArn: S.String }),
        /*@__PURE__*/ S.Struct({ TlsAuthConfiguration: __S(15) }),
      ]);
    case 1:
      return S.suspend(() => S.Struct({ IpType: S.String })).annotate({
        identifier: "PublicNetworkConfiguration",
      });
    case 2:
      return S.suspend(() => S.Struct({ VpcEndpointId: S.String })).annotate({
        identifier: "PrivateNetworkConfiguration",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ PublicNetworkConfiguration: __S(17) }),
        /*@__PURE__*/ S.Struct({ PrivateNetworkConfiguration: __S(18) }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          IngressPointName: S.String,
          Type: S.String,
          RuleSetId: S.String,
          TrafficPolicyId: S.String,
          IngressPointConfiguration: S.optional(__S(16)),
          NetworkConfiguration: S.optional(__S(19)),
          TlsPolicy: S.optional(S.String),
          Tags: S.optional(__S(1)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateIngressPointRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ IngressPointId: S.String })).annotate({
        identifier: "CreateIngressPointResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "NoAuthentication",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ SecretArn: S.String }),
        /*@__PURE__*/ S.Struct({ NoAuthentication: __S(22) }),
      ]);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          RelayName: S.String,
          ServerName: S.String,
          ServerPort: S.Number,
          Authentication: __S(23),
          Tags: S.optional(__S(1)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateRelayRequest" });
    case 1:
      return S.suspend(() => S.Struct({ RelayId: S.String })).annotate({
        identifier: "CreateRelayResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ Analyzer: S.String, ResultField: S.String })).annotate({
        identifier: "Analysis",
      });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Attribute: S.String,
          AddressLists: __S(27),
        }),
      ).annotate({ identifier: "RuleIsInAddressList" });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Attribute: S.String }),
        /*@__PURE__*/ S.Struct({ Analysis: __S(26) }),
        /*@__PURE__*/ S.Struct({ IsInAddressList: __S(28) }),
      ]);
    case 6:
      return S.suspend(() => S.Struct({ Evaluate: __S(29), Operator: S.String })).annotate({
        identifier: "RuleBooleanExpression",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Attribute: S.String }),
        /*@__PURE__*/ S.Struct({ MimeHeaderAttribute: S.String }),
        /*@__PURE__*/ S.Struct({ Analysis: __S(26) }),
        /*@__PURE__*/ S.Struct({ ClientCertificateAttribute: S.String }),
      ]);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(SensitiveString);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Evaluate: __S(31),
          Operator: S.String,
          Values: __S(32),
        }),
      ).annotate({ identifier: "RuleStringExpression" });
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ Attribute: S.String })]);
    case 3:
      return S.suspend(() =>
        S.Struct({ Evaluate: __S(34), Operator: S.String, Value: S.Number }),
      ).annotate({ identifier: "RuleNumberExpression" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Evaluate: __S(34), Operator: S.String, Values: __S(27) }),
      ).annotate({ identifier: "RuleIpExpression" });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Attribute: S.String }),
        /*@__PURE__*/ S.Struct({ Analysis: __S(26) }),
      ]);
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          Evaluate: __S(37),
          Operator: S.String,
          Values: __S(38),
        }),
      ).annotate({ identifier: "RuleVerdictExpression" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Operator: S.String, Values: __S(38) })).annotate({
        identifier: "RuleDmarcExpression",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ BooleanExpression: __S(30) }),
        /*@__PURE__*/ S.Struct({ StringExpression: __S(33) }),
        /*@__PURE__*/ S.Struct({ NumberExpression: __S(35) }),
        /*@__PURE__*/ S.Struct({ IpExpression: __S(36) }),
        /*@__PURE__*/ S.Struct({ VerdictExpression: __S(39) }),
        /*@__PURE__*/ S.Struct({ DmarcExpression: __S(40) }),
      ]);
    case 2:
      return S.Array(__S(41));
    case 3:
      return S.suspend(() =>
        S.Struct({
          ActionFailurePolicy: S.optional(S.String),
          Relay: S.String,
          MailFrom: S.optional(S.String),
        }),
      ).annotate({ identifier: "RelayAction" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ActionFailurePolicy: S.optional(S.String), TargetArchive: S.String }),
      ).annotate({ identifier: "ArchiveAction" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ActionFailurePolicy: S.optional(S.String),
          RoleArn: S.String,
          S3Bucket: S.String,
          S3Prefix: S.optional(S.String),
          S3SseKmsKeyId: S.optional(S.String),
        }),
      ).annotate({ identifier: "S3Action" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ActionFailurePolicy: S.optional(S.String), RoleArn: S.String }),
      ).annotate({ identifier: "SendAction" });
    case 7:
      return S.suspend(() => S.Struct({ HeaderName: S.String, HeaderValue: S.String })).annotate({
        identifier: "AddHeaderAction",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ReplaceWith: S.optional(__S(32)) })).annotate({
        identifier: "ReplaceRecipientAction",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ActionFailurePolicy: S.optional(S.String),
          MailboxArn: S.String,
          RoleArn: S.String,
        }),
      ).annotate({ identifier: "DeliverToMailboxAction" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ActionFailurePolicy: S.optional(S.String),
          ApplicationId: S.String,
          IndexId: S.String,
          RoleArn: S.String,
        }),
      ).annotate({ identifier: "DeliverToQBusinessAction" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ActionFailurePolicy: S.optional(S.String),
          TopicArn: S.String,
          RoleArn: S.String,
          Encoding: S.optional(S.String),
          PayloadType: S.optional(S.String),
        }),
      ).annotate({ identifier: "SnsAction" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ActionFailurePolicy: S.optional(S.String),
          RoleArn: S.String,
          Sender: SensitiveString,
          StatusCode: S.String,
          SmtpReplyCode: S.String,
          DiagnosticMessage: SensitiveString,
          Message: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "BounceAction" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ActionFailurePolicy: S.optional(S.String),
          FunctionArn: S.String,
          InvocationType: S.String,
          RoleArn: S.String,
          RetryTimeMinutes: S.optional(S.Number),
        }),
      ).annotate({ identifier: "InvokeLambdaAction" });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Drop: __S(22) }),
        /*@__PURE__*/ S.Struct({ Relay: __S(43) }),
        /*@__PURE__*/ S.Struct({ Archive: __S(44) }),
        /*@__PURE__*/ S.Struct({ WriteToS3: __S(45) }),
        /*@__PURE__*/ S.Struct({ Send: __S(46) }),
        /*@__PURE__*/ S.Struct({ AddHeader: __S(47) }),
        /*@__PURE__*/ S.Struct({ ReplaceRecipient: __S(48) }),
        /*@__PURE__*/ S.Struct({ DeliverToMailbox: __S(49) }),
        /*@__PURE__*/ S.Struct({ DeliverToQBusiness: __S(50) }),
        /*@__PURE__*/ S.Struct({ PublishToSns: __S(51) }),
        /*@__PURE__*/ S.Struct({ Bounce: __S(52) }),
        /*@__PURE__*/ S.Struct({ InvokeLambda: __S(53) }),
      ]);
    case 7:
      return S.Array(__S(54));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Conditions: S.optional(__S(42)),
          Unless: S.optional(__S(42)),
          Actions: __S(55),
        }),
      ).annotate({ identifier: "Rule" });
    case 1:
      return S.Array(__S(56));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          RuleSetName: S.String,
          Rules: __S(57),
          Tags: S.optional(__S(1)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateRuleSetRequest" });
    case 3:
      return S.suspend(() => S.Struct({ RuleSetId: S.String })).annotate({
        identifier: "CreateRuleSetResponse",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Attribute: S.String }),
        /*@__PURE__*/ S.Struct({ Analysis: __S(26) }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Evaluate: __S(60),
          Operator: S.String,
          Values: __S(27),
        }),
      ).annotate({ identifier: "IngressStringExpression" });
    case 6:
      return S.suspend(() =>
        S.Struct({ Evaluate: __S(34), Operator: S.String, Values: __S(27) }),
      ).annotate({ identifier: "IngressIpv4Expression" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Evaluate: __S(34),
          Operator: S.String,
          Values: __S(27),
        }),
      ).annotate({ identifier: "IngressIpv6Expression" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Evaluate: __S(34),
          Operator: S.String,
          Value: S.String,
        }),
      ).annotate({
        identifier: "IngressTlsProtocolExpression",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Attribute: S.String,
          AddressLists: __S(27),
        }),
      ).annotate({ identifier: "IngressIsInAddressList" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ Analysis: __S(26) }),
        /*@__PURE__*/ S.Struct({ IsInAddressList: __S(65) }),
      ]);
    case 3:
      return S.suspend(() => S.Struct({ Evaluate: __S(66), Operator: S.String })).annotate({
        identifier: "IngressBooleanExpression",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ StringExpression: __S(61) }),
        /*@__PURE__*/ S.Struct({ IpExpression: __S(62) }),
        /*@__PURE__*/ S.Struct({ Ipv6Expression: __S(63) }),
        /*@__PURE__*/ S.Struct({ TlsExpression: __S(64) }),
        /*@__PURE__*/ S.Struct({ BooleanExpression: __S(67) }),
      ]);
    case 5:
      return S.Array(__S(68));
    case 6:
      return S.suspend(() => S.Struct({ Conditions: __S(69), Action: S.String })).annotate({
        identifier: "PolicyStatement",
      });
    case 7:
      return S.Array(__S(70));
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          TrafficPolicyName: S.String,
          PolicyStatements: __S(71),
          DefaultAction: S.String,
          MaxMessageSizeBytes: S.optional(S.Number),
          Tags: S.optional(__S(1)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateTrafficPolicyRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ TrafficPolicyId: S.String })).annotate({
        identifier: "CreateTrafficPolicyResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ AddonInstanceId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteAddonInstanceRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ AddonSubscriptionId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteAddonSubscriptionRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteAddonSubscriptionResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ AddressListId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteAddressListRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ArchiveId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteArchiveRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ IngressPointId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteIngressPointRequest",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ RelayId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteRelayRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ RuleSetId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteRuleSetRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ TrafficPolicyId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteTrafficPolicyRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ AddressListId: S.String, Address: SensitiveString }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeregisterMemberFromAddressListRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeregisterMemberFromAddressListResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ AddonInstanceId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAddonInstanceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AddonSubscriptionId: S.optional(S.String),
          AddonName: S.optional(S.String),
          AddonInstanceArn: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GetAddonInstanceResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ AddonSubscriptionId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetAddonSubscriptionRequest",
      });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AddonName: S.optional(S.String),
          AddonSubscriptionArn: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "GetAddonSubscriptionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AddressListId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAddressListRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AddressListId: S.String,
          AddressListArn: S.String,
          AddressListName: S.String,
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastUpdatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "GetAddressListResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetAddressListImportJobRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          JobId: S.String,
          Name: S.String,
          Status: S.String,
          PreSignedUrl: SensitiveString,
          ImportedItemsCount: S.optional(S.Number),
          FailedItemsCount: S.optional(S.Number),
          ImportDataFormat: __S(8),
          AddressListId: S.String,
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          StartTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CompletedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Error: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetAddressListImportJobResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ArchiveId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetArchiveRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ArchiveId: S.String,
          ArchiveName: S.String,
          ArchiveArn: S.String,
          ArchiveState: S.String,
          Retention: __S(11),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          KmsKeyArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetArchiveResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ ExportId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetArchiveExportRequest" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Evaluate: __S(34),
          Operator: S.String,
          Values: __S(27),
        }),
      ).annotate({ identifier: "ArchiveStringExpression" });
    case 1:
      return S.suspend(() => S.Struct({ Evaluate: __S(34), Operator: S.String })).annotate({
        identifier: "ArchiveBooleanExpression",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ StringExpression: __S(96) }),
        /*@__PURE__*/ S.Struct({ BooleanExpression: __S(97) }),
      ]);
    case 3:
      return S.Array(__S(98));
    case 4:
      return S.suspend(() =>
        S.Struct({
          Include: S.optional(__S(99)),
          Unless: S.optional(__S(99)),
        }),
      ).annotate({ identifier: "ArchiveFilters" });
    case 5:
      return S.suspend(() => S.Struct({ S3Location: S.optional(S.String) })).annotate({
        identifier: "S3ExportDestinationConfiguration",
      });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ S3: __S(101) })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          SubmissionTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CompletionTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          State: S.optional(S.String),
          ErrorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExportStatus" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ArchiveId: S.optional(S.String),
          Filters: S.optional(__S(100)),
          FromTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ToTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          MaxResults: S.optional(S.Number),
          ExportDestinationConfiguration: S.optional(__S(102)),
          Status: S.optional(__S(103)),
        }),
      ).annotate({ identifier: "GetArchiveExportResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ArchivedMessageId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetArchiveMessageRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Timestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          IngressPointId: S.optional(S.String),
          TrafficPolicyId: S.optional(S.String),
          RuleSetId: S.optional(S.String),
          SenderHostname: S.optional(S.String),
          SenderIpAddress: S.optional(SensitiveString),
          TlsCipherSuite: S.optional(S.String),
          TlsProtocol: S.optional(S.String),
          SendingMethod: S.optional(S.String),
          SourceIdentity: S.optional(S.String),
          SendingPool: S.optional(S.String),
          ConfigurationSet: S.optional(S.String),
          SourceArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Metadata" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Helo: S.optional(S.String),
          From: S.optional(S.String),
          To: S.optional(__S(27)),
        }),
      ).annotate({ identifier: "Envelope" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          MessageDownloadLink: S.optional(S.String),
          Metadata: S.optional(__S(106)),
          Envelope: S.optional(__S(107)),
        }),
      ).annotate({
        identifier: "GetArchiveMessageResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ArchivedMessageId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetArchiveMessageContentRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Text: S.optional(S.String),
          Html: S.optional(S.String),
          MessageMalformed: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "MessageBody" });
    case 7:
      return S.suspend(() => S.Struct({ Body: S.optional(__S(110)) })).annotate({
        identifier: "GetArchiveMessageContentResponse",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ SearchId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetArchiveSearchRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ArchiveId: S.optional(S.String),
          Filters: S.optional(__S(100)),
          FromTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ToTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          MaxResults: S.optional(S.Number),
          Status: S.optional(__S(103)),
        }),
      ).annotate({ identifier: "GetArchiveSearchResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ SearchId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetArchiveSearchResultsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ArchivedMessageId: S.optional(S.String),
          ReceivedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Date: S.optional(S.String),
          To: S.optional(S.String),
          From: S.optional(S.String),
          Cc: S.optional(S.String),
          Subject: S.optional(S.String),
          MessageId: S.optional(S.String),
          HasAttachments: S.optional(S.Boolean),
          ReceivedHeaders: S.optional(__S(27)),
          InReplyTo: S.optional(S.String),
          XMailer: S.optional(S.String),
          XOriginalMailer: S.optional(S.String),
          XPriority: S.optional(S.String),
          IngressPointId: S.optional(S.String),
          SenderHostname: S.optional(S.String),
          SenderIpAddress: S.optional(SensitiveString),
          Envelope: S.optional(__S(107)),
          SourceArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "Row" });
    case 4:
      return S.Array(__S(115));
    case 5:
      return S.suspend(() => S.Struct({ Rows: S.optional(__S(116)) })).annotate({
        identifier: "GetArchiveSearchResultsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          IngressPointId: S.String,
          IncludeTrustStoreContents: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetIngressPointRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SmtpPasswordVersion: S.optional(S.String),
          PreviousSmtpPasswordVersion: S.optional(S.String),
          PreviousSmtpPasswordExpiryTimestamp: S.optional(
            S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ),
        }),
      ).annotate({
        identifier: "IngressPointPasswordConfiguration",
      });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          IngressPointPasswordConfiguration: S.optional(__S(119)),
          SecretArn: S.optional(S.String),
          TlsAuthConfiguration: S.optional(__S(15)),
        }),
      ).annotate({
        identifier: "IngressPointAuthConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          IngressPointId: S.String,
          IngressPointName: S.String,
          IngressPointArn: S.optional(S.String),
          Status: S.optional(S.String),
          Type: S.optional(S.String),
          ARecord: S.optional(S.String),
          RuleSetId: S.optional(S.String),
          TrafficPolicyId: S.optional(S.String),
          IngressPointAuthConfiguration: S.optional(__S(120)),
          NetworkConfiguration: S.optional(__S(19)),
          TlsPolicy: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GetIngressPointResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ AddressListId: S.String, Address: SensitiveString }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetMemberOfAddressListRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Address: SensitiveString,
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({
        identifier: "GetMemberOfAddressListResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ RelayId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetRelayRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          RelayId: S.String,
          RelayArn: S.optional(S.String),
          RelayName: S.optional(S.String),
          ServerName: S.optional(S.String),
          ServerPort: S.optional(S.Number),
          Authentication: S.optional(__S(23)),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastModifiedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GetRelayResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ RuleSetId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetRuleSetRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          RuleSetId: S.String,
          RuleSetArn: S.String,
          RuleSetName: S.String,
          CreatedDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          LastModificationDate: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          Rules: __S(57),
        }),
      ).annotate({ identifier: "GetRuleSetResponse" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TrafficPolicyId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetTrafficPolicyRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TrafficPolicyName: S.String,
          TrafficPolicyId: S.String,
          TrafficPolicyArn: S.optional(S.String),
          PolicyStatements: S.optional(__S(71)),
          MaxMessageSizeBytes: S.optional(S.Number),
          DefaultAction: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "GetTrafficPolicyResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), PageSize: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAddonInstancesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          AddonInstanceId: S.optional(S.String),
          AddonSubscriptionId: S.optional(S.String),
          AddonName: S.optional(S.String),
          AddonInstanceArn: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "AddonInstance" });
    case 4:
      return S.Array(__S(131));
    case 5:
      return S.suspend(() =>
        S.Struct({ AddonInstances: S.optional(__S(132)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAddonInstancesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), PageSize: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListAddonSubscriptionsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          AddonSubscriptionId: S.optional(S.String),
          AddonName: S.optional(S.String),
          AddonSubscriptionArn: S.optional(S.String),
          CreatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "AddonSubscription" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(135));
    case 1:
      return S.suspend(() =>
        S.Struct({
          AddonSubscriptions: S.optional(__S(136)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAddonSubscriptionsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AddressListId: S.String,
          NextToken: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAddressListImportJobsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          JobId: S.String,
          Name: S.String,
          Status: S.String,
          PreSignedUrl: SensitiveString,
          ImportedItemsCount: S.optional(S.Number),
          FailedItemsCount: S.optional(S.Number),
          ImportDataFormat: __S(8),
          AddressListId: S.String,
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          StartTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CompletedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Error: S.optional(S.String),
        }),
      ).annotate({ identifier: "ImportJob" });
    case 4:
      return S.Array(__S(139));
    case 5:
      return S.suspend(() =>
        S.Struct({ ImportJobs: __S(140), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAddressListImportJobsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), PageSize: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListAddressListsRequest" });
    case 7:
      return S.Array(__S(90));
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ AddressLists: __S(143), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListAddressListsResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ArchiveId: S.String,
          NextToken: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListArchiveExportsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ExportId: S.optional(S.String), Status: S.optional(__S(103)) }),
      ).annotate({ identifier: "ExportSummary" });
    case 3:
      return S.Array(__S(146));
    case 4:
      return S.suspend(() =>
        S.Struct({ Exports: S.optional(__S(147)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListArchiveExportsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), PageSize: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListArchivesRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ArchiveId: S.String,
          ArchiveName: S.optional(S.String),
          ArchiveState: S.optional(S.String),
          LastUpdatedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Archive" });
    case 7:
      return S.Array(__S(150));
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Archives: __S(151), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListArchivesResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ArchiveId: S.String,
          NextToken: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListArchiveSearchesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ SearchId: S.optional(S.String), Status: S.optional(__S(103)) }),
      ).annotate({ identifier: "SearchSummary" });
    case 3:
      return S.Array(__S(154));
    case 4:
      return S.suspend(() =>
        S.Struct({ Searches: S.optional(__S(155)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListArchiveSearchesResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ PageSize: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListIngressPointsRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          IngressPointName: S.String,
          IngressPointId: S.String,
          Status: S.String,
          Type: S.String,
          ARecord: S.optional(S.String),
        }),
      ).annotate({ identifier: "IngressPoint" });
    case 7:
      return S.Array(__S(158));
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ IngressPoints: S.optional(__S(159)), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListIngressPointsResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ AddressPrefix: S.optional(SensitiveString) })).annotate({
        identifier: "AddressFilter",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AddressListId: S.String,
          Filter: S.optional(__S(161)),
          NextToken: S.optional(S.String),
          PageSize: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListMembersOfAddressListRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Address: SensitiveString,
          CreatedTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "SavedAddress" });
    case 4:
      return S.Array(__S(163));
    case 5:
      return S.suspend(() =>
        S.Struct({ Addresses: __S(164), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListMembersOfAddressListResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ PageSize: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListRelaysRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          RelayId: S.optional(S.String),
          RelayName: S.optional(S.String),
          LastModifiedTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Relay" });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.Array(__S(167));
    case 1:
      return S.suspend(() =>
        S.Struct({ Relays: __S(168), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListRelaysResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), PageSize: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListRuleSetsRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RuleSetId: S.optional(S.String),
          RuleSetName: S.optional(S.String),
          LastModificationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "RuleSet" });
    case 4:
      return S.Array(__S(171));
    case 5:
      return S.suspend(() =>
        S.Struct({ RuleSets: __S(172), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListRuleSetsResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ Tags: __S(1) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ PageSize: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTrafficPoliciesRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TrafficPolicyName: S.String,
          TrafficPolicyId: S.String,
          DefaultAction: S.String,
        }),
      ).annotate({ identifier: "TrafficPolicy" });
    case 2:
      return S.Array(__S(177));
    case 3:
      return S.suspend(() =>
        S.Struct({
          TrafficPolicies: S.optional(__S(178)),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTrafficPoliciesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ AddressListId: S.String, Address: SensitiveString }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "RegisterMemberToAddressListRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartAddressListImportJobRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ArchiveId: S.String,
          Filters: S.optional(__S(100)),
          FromTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ToTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          MaxResults: S.optional(S.Number),
          ExportDestinationConfiguration: __S(102),
          IncludeMetadata: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartArchiveExportRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ ExportId: S.optional(S.String) })).annotate({
        identifier: "StartArchiveExportResponse",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ArchiveId: S.String,
          Filters: S.optional(__S(100)),
          FromTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          ToTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          MaxResults: S.Number,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "StartArchiveSearchRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ SearchId: S.optional(S.String) })).annotate({
        identifier: "StartArchiveSearchResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ JobId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StopAddressListImportJobRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ExportId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopArchiveExportRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ SearchId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "StopArchiveSearchRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: __S(1) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: __S(27) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ArchiveId: S.String,
          ArchiveName: S.optional(S.String),
          Retention: S.optional(__S(11)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateArchiveRequest" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          IngressPointId: S.String,
          IngressPointName: S.optional(S.String),
          StatusToUpdate: S.optional(S.String),
          RuleSetId: S.optional(S.String),
          TrafficPolicyId: S.optional(S.String),
          IngressPointConfiguration: S.optional(__S(16)),
          TlsPolicy: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateIngressPointRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          RelayId: S.String,
          RelayName: S.optional(S.String),
          ServerName: S.optional(S.String),
          ServerPort: S.optional(S.Number),
          Authentication: S.optional(__S(23)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateRelayRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RuleSetId: S.String,
          RuleSetName: S.optional(S.String),
          Rules: S.optional(__S(57)),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateRuleSetRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TrafficPolicyId: S.String,
          TrafficPolicyName: S.optional(S.String),
          PolicyStatements: S.optional(__S(71)),
          DefaultAction: S.optional(S.String),
          MaxMessageSizeBytes: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateTrafficPolicyRequest",
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
    case 14:
      return __c14(i & 7);
    case 15:
      return __c15(i & 7);
    case 16:
      return __c16(i & 7);
    case 17:
      return __c17(i & 7);
    case 18:
      return __c18(i & 7);
    case 19:
      return __c19(i & 7);
    case 20:
      return __c20(i & 7);
    case 21:
      return __c21(i & 7);
    case 22:
      return __c22(i & 7);
    case 23:
      return __c23(i & 7);
    case 24:
      return __c24(i & 7);
  }
}
