import * as API from "@distilled.cloud/core/api";
import * as __L from "@distilled.cloud/core/chunks";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as stream from "effect/Stream";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString, SensitiveBlob } from "../sensitive.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Bedrock AgentCore",
  serviceShapeName: "AmazonBedrockAgentCore",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "bedrock-agentcore" });
const ver = /*@__PURE__*/ T.ServiceVersion("2024-02-28");
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
              `https://bedrock-agentcore-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://bedrock-agentcore-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://bedrock-agentcore.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://bedrock-agentcore.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
export class DuplicateIdException
  extends /*@__PURE__*/ S.TaggedError<DuplicateIdException>()(
    "DuplicateIdException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class InvalidInputException
  extends /*@__PURE__*/ S.TaggedError<InvalidInputException>()(
    "InvalidInputException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class RetryableConflictException
  extends /*@__PURE__*/ S.TaggedError<RetryableConflictException>()(
    "RetryableConflictException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(409), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withConflictError, C.withRetryableError) {}
export class RuntimeClientError
  extends /*@__PURE__*/ S.TaggedError<RuntimeClientError>()(
    "RuntimeClientError",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(424),
  ) {}
export class ServiceException
  extends /*@__PURE__*/ S.TaggedError<ServiceException>()(
    "ServiceException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class SubscriptionRequiredException
  extends /*@__PURE__*/ S.TaggedError<SubscriptionRequiredException>()(
    "SubscriptionRequiredException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      subscriptionUrl: /*@__PURE__*/ S.optional(S.String),
      productName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ThrottledException
  extends /*@__PURE__*/ S.TaggedError<ThrottledException>()(
    "ThrottledException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
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
      reason: /*@__PURE__*/ S.suspend(() => ValidationExceptionReason).annotate({
        identifier: "ValidationExceptionReason",
      }),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type MemoryId = string;
export type RequestIdentifier = string;
export type Namespace = string;
export type NamespacesList = string[];
const NamespacesList = /*@__PURE__*/ __L.at(__c0, 0);
export type SensitiveString = string | redacted.Redacted<string>;
export type MemoryContent = { text: string | redacted.Redacted<string> };
const MemoryContent = /*@__PURE__*/ __L.at(__c0, 1);
export type MemoryStrategyId = string;
export type MetadataKey = string;
export type StringValue = string;
export type StringListMemberValue = string;
export type StringValueList = string[];
const StringValueList = NamespacesList as any as S.Schema<StringValueList>;
export type MemoryRecordMetadataValue =
  | { stringValue: string; stringListValue?: never; numberValue?: never; dateTimeValue?: never }
  | { stringValue?: never; stringListValue: string[]; numberValue?: never; dateTimeValue?: never }
  | { stringValue?: never; stringListValue?: never; numberValue: number; dateTimeValue?: never }
  | { stringValue?: never; stringListValue?: never; numberValue?: never; dateTimeValue: Date };
const MemoryRecordMetadataValue = /*@__PURE__*/ __L.at(__c0, 2);
export type MemoryRecordMetadataMap = { [key: string]: MemoryRecordMetadataValue | undefined };
const MemoryRecordMetadataMap = /*@__PURE__*/ __L.at(__c0, 3);
export interface MemoryRecordCreateInput {
  requestIdentifier: string;
  namespaces: string[];
  content: MemoryContent;
  timestamp: Date;
  memoryStrategyId?: string;
  metadata?: { [key: string]: MemoryRecordMetadataValue | undefined };
}
const MemoryRecordCreateInput = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<MemoryRecordCreateInput>;
export type MemoryRecordsCreateInputList = MemoryRecordCreateInput[];
const MemoryRecordsCreateInputList = /*@__PURE__*/ __L.at(__c0, 5);
export interface BatchCreateMemoryRecordsInput {
  memoryId: string;
  records: MemoryRecordCreateInput[];
  clientToken?: string;
}
const BatchCreateMemoryRecordsInput = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<BatchCreateMemoryRecordsInput>;
export type MemoryRecordId = string;
export type MemoryRecordStatus = "SUCCEEDED" | "FAILED" | (string & {});
const MemoryRecordStatus = S.String;

export interface MemoryRecordOutput {
  memoryRecordId: string;
  status: MemoryRecordStatus;
  requestIdentifier?: string;
  errorCode?: number;
  errorMessage?: string;
}
const MemoryRecordOutput = /*@__PURE__*/ __L.at(__c0, 7) as any as S.Schema<MemoryRecordOutput>;
export type MemoryRecordsOutputList = MemoryRecordOutput[];
const MemoryRecordsOutputList = /*@__PURE__*/ __L.at(__c1, 0);
export interface BatchCreateMemoryRecordsOutput {
  successfulRecords: MemoryRecordOutput[];
  failedRecords: MemoryRecordOutput[];
}
const BatchCreateMemoryRecordsOutput = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<BatchCreateMemoryRecordsOutput>;
export interface MemoryRecordDeleteInput {
  memoryRecordId: string;
  namespace?: string;
}
const MemoryRecordDeleteInput = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<MemoryRecordDeleteInput>;
export type MemoryRecordsDeleteInputList = MemoryRecordDeleteInput[];
const MemoryRecordsDeleteInputList = /*@__PURE__*/ __L.at(__c1, 3);
export interface BatchDeleteMemoryRecordsInput {
  memoryId: string;
  records: MemoryRecordDeleteInput[];
}
const BatchDeleteMemoryRecordsInput = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<BatchDeleteMemoryRecordsInput>;
export interface BatchDeleteMemoryRecordsOutput {
  successfulRecords: MemoryRecordOutput[];
  failedRecords: MemoryRecordOutput[];
}
const BatchDeleteMemoryRecordsOutput =
  BatchCreateMemoryRecordsOutput as any as S.Schema<BatchDeleteMemoryRecordsOutput>;
export interface MemoryRecordUpdateInput {
  memoryRecordId: string;
  timestamp: Date;
  content?: MemoryContent;
  namespaces?: string[];
  sourceNamespaces?: string[];
  memoryStrategyId?: string;
  metadata?: { [key: string]: MemoryRecordMetadataValue | undefined };
}
const MemoryRecordUpdateInput = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<MemoryRecordUpdateInput>;
export type MemoryRecordsUpdateInputList = MemoryRecordUpdateInput[];
const MemoryRecordsUpdateInputList = /*@__PURE__*/ __L.at(__c1, 6);
export interface BatchUpdateMemoryRecordsInput {
  memoryId: string;
  records: MemoryRecordUpdateInput[];
}
const BatchUpdateMemoryRecordsInput = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<BatchUpdateMemoryRecordsInput>;
export interface BatchUpdateMemoryRecordsOutput {
  successfulRecords: MemoryRecordOutput[];
  failedRecords: MemoryRecordOutput[];
}
const BatchUpdateMemoryRecordsOutput =
  BatchCreateMemoryRecordsOutput as any as S.Schema<BatchUpdateMemoryRecordsOutput>;
export type UserTokenType = string | redacted.Redacted<string>;
export type UserIdType = string;
export type UserIdentifier =
  | { userToken: string | redacted.Redacted<string>; userId?: never }
  | { userToken?: never; userId: string };
const UserIdentifier = /*@__PURE__*/ __L.at(__c2, 0);
export type RequestUri = string;
export interface CompleteResourceTokenAuthRequest {
  userIdentifier: UserIdentifier;
  sessionUri: string;
}
const CompleteResourceTokenAuthRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<CompleteResourceTokenAuthRequest>;
export interface CompleteResourceTokenAuthResponse {}
const CompleteResourceTokenAuthResponse = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<CompleteResourceTokenAuthResponse>;
export type ABTestName = string;
export type ABTestDescription = string;
export type GatewayArn = string;
export type VariantName = string;
export type ConfigurationBundleArn = string;
export type ConfigurationBundleVersion = string;
export interface ConfigurationBundleRef {
  bundleArn: string;
  bundleVersion: string;
}
const ConfigurationBundleRef = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<ConfigurationBundleRef>;
export type TargetName = string;
export interface TargetRef {
  name: string;
}
const TargetRef = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<TargetRef>;
export interface VariantConfiguration {
  configurationBundle?: ConfigurationBundleRef;
  target?: TargetRef;
}
const VariantConfiguration = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<VariantConfiguration>;
export interface Variant {
  name: string;
  weight: number;
  variantConfiguration: VariantConfiguration;
}
const Variant = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<Variant>;
export type VariantList = Variant[];
const VariantList = /*@__PURE__*/ __L.at(__c2, 7);
export type PathPattern = string;
export type TargetPathList = string[];
const TargetPathList = NamespacesList as any as S.Schema<TargetPathList>;
export interface GatewayFilter {
  targetPaths?: string[];
}
const GatewayFilter = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<GatewayFilter>;
export type OnlineEvaluationConfigArn = string;
export interface PerVariantOnlineEvaluationConfig {
  name: string;
  onlineEvaluationConfigArn: string;
}
const PerVariantOnlineEvaluationConfig = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<PerVariantOnlineEvaluationConfig>;
export type PerVariantOnlineEvaluationConfigList = PerVariantOnlineEvaluationConfig[];
const PerVariantOnlineEvaluationConfigList = /*@__PURE__*/ __L.at(__c3, 2);
export type ABTestEvaluationConfig =
  | { onlineEvaluationConfigArn: string; perVariantOnlineEvaluationConfig?: never }
  | {
      onlineEvaluationConfigArn?: never;
      perVariantOnlineEvaluationConfig: PerVariantOnlineEvaluationConfig[];
    };
const ABTestEvaluationConfig = /*@__PURE__*/ __L.at(__c3, 3);
export type RoleArn = string;
export type ClientToken = string;
export type TagKey = string;
export type TagValue = string;
export type TagsMap = { [key: string]: string | undefined };
const TagsMap = /*@__PURE__*/ __L.at(__c3, 4);
export interface CreateABTestRequest {
  name: string;
  description?: string;
  gatewayArn: string;
  variants: Variant[];
  gatewayFilter?: GatewayFilter;
  evaluationConfig: ABTestEvaluationConfig;
  roleArn: string;
  enableOnCreate?: boolean;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const CreateABTestRequest = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<CreateABTestRequest>;
export type ABTestId = string;
export type ABTestArn = string;
export type ABTestStatus =
  | "CREATING"
  | "ACTIVE"
  | "CREATE_FAILED"
  | "UPDATING"
  | "UPDATE_FAILED"
  | "DELETING"
  | "DELETE_FAILED"
  | "FAILED"
  | (string & {});
const ABTestStatus = S.String;

export type ABTestExecutionStatus =
  | "PAUSED"
  | "RUNNING"
  | "STOPPED"
  | "NOT_STARTED"
  | (string & {});
const ABTestExecutionStatus = S.String;

export interface CreateABTestResponse {
  abTestId: string;
  abTestArn: string;
  name?: string;
  status: ABTestStatus;
  executionStatus: ABTestExecutionStatus;
  createdAt: Date;
}
const CreateABTestResponse = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<CreateABTestResponse>;
export type ActorId = string;
export type SessionId = string;
export type Content = { text: string | redacted.Redacted<string> };
const Content = /*@__PURE__*/ __L.at(__c3, 7);
export type Role = "ASSISTANT" | "USER" | "TOOL" | "OTHER" | (string & {});
const Role = S.String;

export interface Conversational {
  content: Content;
  role: Role;
}
const Conversational = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<Conversational>;
export type MemoryDocument = unknown;
export type MemoryJsonDataContent = unknown;
export interface MemoryJsonData {
  content: any;
}
const MemoryJsonData = /*@__PURE__*/ __L.at(__c4, 1) as any as S.Schema<MemoryJsonData>;
export type PayloadType =
  | { conversational: Conversational; blob?: never; json?: never }
  | { conversational?: never; blob: any; json?: never }
  | { conversational?: never; blob?: never; json: MemoryJsonData };
const PayloadType = /*@__PURE__*/ __L.at(__c4, 2);
export type PayloadTypeList = PayloadType[];
const PayloadTypeList = /*@__PURE__*/ __L.at(__c4, 3);
export type EventId = string;
export type BranchName = string;
export interface Branch {
  rootEventId?: string;
  name: string;
}
const Branch = /*@__PURE__*/ __L.at(__c4, 4) as any as S.Schema<Branch>;
export type MetadataValue = { stringValue: string };
const MetadataValue = /*@__PURE__*/ __L.at(__c4, 5);
export type MetadataMap = { [key: string]: MetadataValue | undefined };
const MetadataMap = /*@__PURE__*/ __L.at(__c4, 6);
export type ExtractionMode = "SKIP" | (string & {});
const ExtractionMode = S.String;

export type NamespaceVariableName = string;
export type NamespaceVariableValue = string;
export type NamespaceVariablesMap = { [key: string]: string | undefined };
const NamespaceVariablesMap = /*@__PURE__*/ __L.at(__c4, 7);
export interface ExtractionConfig {
  namespaceVariables?: { [key: string]: string | undefined };
}
const ExtractionConfig = /*@__PURE__*/ __L.at(__c5, 0) as any as S.Schema<ExtractionConfig>;
export interface CreateEventInput {
  memoryId: string;
  actorId: string;
  sessionId?: string;
  eventTimestamp: Date;
  payload: PayloadType[];
  branch?: Branch;
  clientToken?: string;
  metadata?: { [key: string]: MetadataValue | undefined };
  extractionMode?: ExtractionMode;
  extractionConfig?: ExtractionConfig;
}
const CreateEventInput = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<CreateEventInput>;
export interface Event {
  memoryId: string;
  actorId: string;
  sessionId: string;
  eventId: string;
  eventTimestamp: Date;
  payload?: PayloadType[];
  branch?: Branch;
  metadata?: { [key: string]: MetadataValue | undefined };
}
const Event = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<Event>;
export interface CreateEventOutput {
  event: Event;
}
const CreateEventOutput = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<CreateEventOutput>;
export type UserId = string;
export type PaymentAgentName = string;
export type PaymentManagerArn = string;
export type PaymentConnectorId = string;
export type PaymentInstrumentType = "EMBEDDED_CRYPTO_WALLET" | (string & {});
const PaymentInstrumentType = S.String;

export type CryptoWalletNetwork = "ETHEREUM" | "SOLANA" | (string & {});
const CryptoWalletNetwork = S.String;

export type Email = string | redacted.Redacted<string>;
export interface LinkedAccountEmail {
  emailAddress: string | redacted.Redacted<string>;
}
const LinkedAccountEmail = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<LinkedAccountEmail>;
export type PhoneNumber = string | redacted.Redacted<string>;
export interface LinkedAccountSms {
  phoneNumber: string | redacted.Redacted<string>;
}
const LinkedAccountSms = /*@__PURE__*/ __L.at(__c5, 5) as any as S.Schema<LinkedAccountSms>;
export type JwtKeyId = string;
export interface LinkedAccountDeveloperJwt {
  kid: string;
  sub: string;
}
const LinkedAccountDeveloperJwt = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<LinkedAccountDeveloperJwt>;
export interface OAuth2Authentication {
  sub: string;
  emailAddress?: string | redacted.Redacted<string>;
  name?: string;
  username?: string;
}
const OAuth2Authentication = /*@__PURE__*/ __L.at(__c5, 7) as any as S.Schema<OAuth2Authentication>;
export type LinkedAccountOAuth2 =
  | { google: OAuth2Authentication; apple?: never; x?: never; telegram?: never; github?: never }
  | { google?: never; apple: OAuth2Authentication; x?: never; telegram?: never; github?: never }
  | { google?: never; apple?: never; x: OAuth2Authentication; telegram?: never; github?: never }
  | { google?: never; apple?: never; x?: never; telegram: OAuth2Authentication; github?: never }
  | { google?: never; apple?: never; x?: never; telegram?: never; github: OAuth2Authentication };
const LinkedAccountOAuth2 = /*@__PURE__*/ __L.at(__c6, 0);
export type LinkedAccount =
  | { email: LinkedAccountEmail; sms?: never; developerJwt?: never; oAuth2?: never }
  | { email?: never; sms: LinkedAccountSms; developerJwt?: never; oAuth2?: never }
  | { email?: never; sms?: never; developerJwt: LinkedAccountDeveloperJwt; oAuth2?: never }
  | { email?: never; sms?: never; developerJwt?: never; oAuth2: LinkedAccountOAuth2 };
const LinkedAccount = /*@__PURE__*/ __L.at(__c6, 1);
export type LinkedAccountList = LinkedAccount[];
const LinkedAccountList = /*@__PURE__*/ __L.at(__c6, 2);
export interface EmbeddedCryptoWallet {
  network: CryptoWalletNetwork;
  linkedAccounts: LinkedAccount[];
  walletAddress?: string;
  redirectUrl?: string;
}
const EmbeddedCryptoWallet = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<EmbeddedCryptoWallet>;
export type PaymentInstrumentDetails = { embeddedCryptoWallet: EmbeddedCryptoWallet };
const PaymentInstrumentDetails = /*@__PURE__*/ __L.at(__c6, 4);
export interface CreatePaymentInstrumentRequest {
  userId?: string;
  agentName?: string;
  paymentManagerArn: string;
  paymentConnectorId: string;
  paymentInstrumentType: PaymentInstrumentType;
  paymentInstrumentDetails: PaymentInstrumentDetails;
  clientToken?: string;
}
const CreatePaymentInstrumentRequest = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<CreatePaymentInstrumentRequest>;
export type PaymentInstrumentId = string;
export type PaymentInstrumentStatus =
  | "INITIATED"
  | "ACTIVE"
  | "FAILED"
  | "DELETED"
  | "BLOCKED"
  | (string & {});
const PaymentInstrumentStatus = S.String;

export interface PaymentInstrument {
  paymentInstrumentId: string;
  paymentManagerArn: string;
  paymentConnectorId: string;
  userId: string;
  paymentInstrumentType: PaymentInstrumentType;
  paymentInstrumentDetails: PaymentInstrumentDetails;
  createdAt: Date;
  status: PaymentInstrumentStatus;
  updatedAt: Date;
}
const PaymentInstrument = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<PaymentInstrument>;
export interface CreatePaymentInstrumentResponse {
  paymentInstrument: PaymentInstrument;
}
const CreatePaymentInstrumentResponse = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<CreatePaymentInstrumentResponse>;
export type Currency = "USD" | (string & {});
const Currency = S.String;

export interface Amount {
  value: string;
  currency: Currency;
}
const Amount = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<Amount>;
export interface SessionLimits {
  maxSpendAmount: Amount;
}
const SessionLimits = /*@__PURE__*/ __L.at(__c7, 1) as any as S.Schema<SessionLimits>;
export interface CreatePaymentSessionRequest {
  userId?: string;
  agentName?: string;
  paymentManagerArn: string;
  limits?: SessionLimits;
  expiryTimeInMinutes: number;
  clientToken?: string;
}
const CreatePaymentSessionRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<CreatePaymentSessionRequest>;
export type PaymentSessionId = string;
export interface AvailableLimits {
  availableSpendAmount?: Amount;
  updatedAt?: Date;
}
const AvailableLimits = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<AvailableLimits>;
export interface PaymentSession {
  paymentSessionId: string;
  paymentManagerArn: string;
  limits?: SessionLimits;
  userId: string;
  expiryTimeInMinutes: number;
  createdAt: Date;
  availableLimits?: AvailableLimits;
  updatedAt: Date;
}
const PaymentSession = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<PaymentSession>;
export interface CreatePaymentSessionResponse {
  paymentSession: PaymentSession;
}
const CreatePaymentSessionResponse = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<CreatePaymentSessionResponse>;
export interface DeleteABTestRequest {
  abTestId: string;
}
const DeleteABTestRequest = /*@__PURE__*/ __L.at(__c7, 6) as any as S.Schema<DeleteABTestRequest>;
export interface DeleteABTestResponse {
  abTestId: string;
  abTestArn: string;
  status: ABTestStatus;
}
const DeleteABTestResponse = /*@__PURE__*/ __L.at(__c7, 7) as any as S.Schema<DeleteABTestResponse>;
export type BatchEvaluationId = string;
export interface DeleteBatchEvaluationRequest {
  batchEvaluationId: string;
}
const DeleteBatchEvaluationRequest = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<DeleteBatchEvaluationRequest>;
export type BatchEvaluationArn = string;
export type BatchEvaluationStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "COMPLETED_WITH_ERRORS"
  | "FAILED"
  | "STOPPING"
  | "STOPPED"
  | "DELETING"
  | (string & {});
const BatchEvaluationStatus = S.String;

export interface DeleteBatchEvaluationResponse {
  batchEvaluationId: string;
  batchEvaluationArn: string;
  status: BatchEvaluationStatus;
}
const DeleteBatchEvaluationResponse = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<DeleteBatchEvaluationResponse>;
export type CapacityProviderId = string;
export interface DeleteCapacityProviderSessionRequest {
  capacityProviderId: string;
  sessionId: string;
}
const DeleteCapacityProviderSessionRequest = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<DeleteCapacityProviderSessionRequest>;
export type CapacityProviderArn = string;
export type CapacityProviderSessionStatus =
  | "Provisioning"
  | "Deprovisioning"
  | "Active"
  | "Deleting"
  | "Deleted"
  | "Stopped"
  | (string & {});
const CapacityProviderSessionStatus = S.String;

export interface DeleteCapacityProviderSessionResponse {
  capacityProviderArn: string;
  sessionId: string;
  status: CapacityProviderSessionStatus;
}
const DeleteCapacityProviderSessionResponse = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<DeleteCapacityProviderSessionResponse>;
export interface DeleteEventInput {
  memoryId: string;
  sessionId: string;
  eventId: string;
  actorId: string;
}
const DeleteEventInput = /*@__PURE__*/ __L.at(__c8, 4) as any as S.Schema<DeleteEventInput>;
export interface DeleteEventOutput {
  eventId: string;
}
const DeleteEventOutput = /*@__PURE__*/ __L.at(__c8, 5) as any as S.Schema<DeleteEventOutput>;
export interface DeleteMemoryRecordInput {
  memoryId: string;
  memoryRecordId: string;
  namespace?: string;
}
const DeleteMemoryRecordInput = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<DeleteMemoryRecordInput>;
export interface DeleteMemoryRecordOutput {
  memoryRecordId: string;
}
const DeleteMemoryRecordOutput = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<DeleteMemoryRecordOutput>;
export interface DeletePaymentInstrumentRequest {
  userId?: string;
  paymentManagerArn: string;
  paymentConnectorId: string;
  paymentInstrumentId: string;
}
const DeletePaymentInstrumentRequest = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<DeletePaymentInstrumentRequest>;
export interface DeletePaymentInstrumentResponse {
  status: PaymentInstrumentStatus;
}
const DeletePaymentInstrumentResponse = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<DeletePaymentInstrumentResponse>;
export interface DeletePaymentSessionRequest {
  userId?: string;
  paymentManagerArn: string;
  paymentSessionId: string;
}
const DeletePaymentSessionRequest = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<DeletePaymentSessionRequest>;
export type PaymentSessionStatus = "ACTIVE" | "EXPIRED" | "DELETED" | (string & {});
export interface DeletePaymentSessionResponse {
  status: PaymentSessionStatus;
}
const DeletePaymentSessionResponse =
  DeletePaymentInstrumentResponse as any as S.Schema<DeletePaymentSessionResponse>;
export type RecommendationId = string;
export interface DeleteRecommendationRequest {
  recommendationId: string;
}
const DeleteRecommendationRequest = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<DeleteRecommendationRequest>;
export type RecommendationStatus =
  | "PENDING"
  | "IN_PROGRESS"
  | "COMPLETED"
  | "FAILED"
  | "DELETING"
  | (string & {});
const RecommendationStatus = S.String;

export interface DeleteRecommendationResponse {
  recommendationId: string;
  status: RecommendationStatus;
}
const DeleteRecommendationResponse = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<DeleteRecommendationResponse>;
export type EvaluatorId = string;
export type Span = unknown;
export type Spans = any[];
const Spans = /*@__PURE__*/ __L.at(__c9, 5);
export type EvaluationInput = { sessionSpans: any[] };
const EvaluationInput = /*@__PURE__*/ __L.at(__c9, 6);
export type SpanId = string;
export type SpanIds = string[];
const SpanIds = NamespacesList as any as S.Schema<SpanIds>;
export type TraceId = string;
export type TraceIds = string[];
const TraceIds = NamespacesList as any as S.Schema<TraceIds>;
export type EvaluationTarget =
  | { spanIds: string[]; traceIds?: never }
  | { spanIds?: never; traceIds: string[] };
const EvaluationTarget = /*@__PURE__*/ __L.at(__c9, 7);
export interface SpanContext {
  sessionId: string;
  traceId?: string;
  spanId?: string;
}
const SpanContext = /*@__PURE__*/ __L.at(__c10, 0) as any as S.Schema<SpanContext>;
export type Context = { spanContext: SpanContext };
const Context = /*@__PURE__*/ __L.at(__c10, 1);
export type EvaluationContent = { text: string };
const EvaluationContent = /*@__PURE__*/ __L.at(__c10, 2);
export type EvaluationContentList = EvaluationContent[];
const EvaluationContentList = /*@__PURE__*/ __L.at(__c10, 3);
export type EvaluationToolName = string;
export type EvaluationToolNames = string[];
const EvaluationToolNames = NamespacesList as any as S.Schema<EvaluationToolNames>;
export interface EvaluationExpectedTrajectory {
  toolNames?: string[];
}
const EvaluationExpectedTrajectory = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<EvaluationExpectedTrajectory>;
export interface EvaluationReferenceInput {
  context: Context;
  expectedResponse?: EvaluationContent;
  assertions?: EvaluationContent[];
  expectedTrajectory?: EvaluationExpectedTrajectory;
}
const EvaluationReferenceInput = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<EvaluationReferenceInput>;
export type EvaluationReferenceInputs = EvaluationReferenceInput[];
const EvaluationReferenceInputs = /*@__PURE__*/ __L.at(__c10, 6);
export interface EvaluateRequest {
  evaluatorId: string;
  evaluationInput: EvaluationInput;
  evaluationTarget?: EvaluationTarget;
  evaluationReferenceInputs?: EvaluationReferenceInput[];
}
const EvaluateRequest = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<EvaluateRequest>;
export type EvaluatorArn = string;
export type EvaluatorName = string;
export type EvaluationExplanation = string | redacted.Redacted<string>;
export interface TokenUsage {
  inputTokens?: number;
  outputTokens?: number;
  totalTokens?: number;
}
const TokenUsage = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<TokenUsage>;
export type EvaluationErrorMessage = string;
export type EvaluationErrorCode = string;
export type IgnoredReferenceInputField = string;
export type IgnoredReferenceInputFields = string[];
const IgnoredReferenceInputFields = NamespacesList as any as S.Schema<IgnoredReferenceInputFields>;
export interface EvaluationResultContent {
  evaluatorArn: string;
  evaluatorId: string;
  evaluatorName: string;
  explanation?: string | redacted.Redacted<string>;
  context: Context;
  value?: number;
  label?: string;
  tokenUsage?: TokenUsage;
  errorMessage?: string;
  errorCode?: string;
  ignoredReferenceInputFields?: string[];
}
const EvaluationResultContent = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<EvaluationResultContent>;
export type EvaluationResults = EvaluationResultContent[];
const EvaluationResults = /*@__PURE__*/ __L.at(__c11, 2);
export interface EvaluateResponse {
  evaluationResults: EvaluationResultContent[];
}
const EvaluateResponse = /*@__PURE__*/ __L.at(__c11, 3) as any as S.Schema<EvaluateResponse>;
export interface GetABTestRequest {
  abTestId: string;
}
const GetABTestRequest = /*@__PURE__*/ __L.at(__c11, 4) as any as S.Schema<GetABTestRequest>;
export type ErrorDetailsList = string[];
const ErrorDetailsList = NamespacesList as any as S.Schema<ErrorDetailsList>;
export interface ControlStats {
  variantName: string;
  sampleSize: number;
  mean: number;
}
const ControlStats = /*@__PURE__*/ __L.at(__c11, 5) as any as S.Schema<ControlStats>;
export interface ConfidenceInterval {
  lower?: number;
  upper?: number;
}
const ConfidenceInterval = /*@__PURE__*/ __L.at(__c11, 6) as any as S.Schema<ConfidenceInterval>;
export interface VariantResult {
  variantName: string;
  sampleSize: number;
  mean: number;
  absoluteChange?: number;
  percentChange?: number;
  pValue?: number;
  confidenceInterval?: ConfidenceInterval;
  isSignificant: boolean;
}
const VariantResult = /*@__PURE__*/ __L.at(__c11, 7) as any as S.Schema<VariantResult>;
export type VariantResultList = VariantResult[];
const VariantResultList = /*@__PURE__*/ __L.at(__c12, 0);
export interface EvaluatorMetric {
  evaluatorArn: string;
  controlStats: ControlStats;
  variantResults: VariantResult[];
}
const EvaluatorMetric = /*@__PURE__*/ __L.at(__c12, 1) as any as S.Schema<EvaluatorMetric>;
export type EvaluatorMetricList = EvaluatorMetric[];
const EvaluatorMetricList = /*@__PURE__*/ __L.at(__c12, 2);
export interface ABTestResults {
  analysisTimestamp?: Date;
  evaluatorMetrics: EvaluatorMetric[];
}
const ABTestResults = /*@__PURE__*/ __L.at(__c12, 3) as any as S.Schema<ABTestResults>;
export interface GetABTestResponse {
  abTestId: string;
  abTestArn: string;
  name: string;
  description?: string;
  status: ABTestStatus;
  executionStatus: ABTestExecutionStatus;
  gatewayArn: string;
  variants: Variant[];
  gatewayFilter?: GatewayFilter;
  evaluationConfig: ABTestEvaluationConfig;
  roleArn?: string;
  currentRunId?: string;
  errorDetails?: string[];
  startedAt?: Date;
  stoppedAt?: Date;
  maxDurationExpiresAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  results?: ABTestResults;
}
const GetABTestResponse = /*@__PURE__*/ __L.at(__c12, 4) as any as S.Schema<GetABTestResponse>;
export type SessionType = string;
export interface GetAgentCardRequest {
  runtimeSessionId?: string;
  agentRuntimeArn: string;
  qualifier?: string;
}
const GetAgentCardRequest = /*@__PURE__*/ __L.at(__c12, 5) as any as S.Schema<GetAgentCardRequest>;
export type AgentCard = unknown;
export type HttpResponseCode = number;
export interface GetAgentCardResponse {
  runtimeSessionId?: string;
  agentCard: any;
  statusCode?: number;
}
const GetAgentCardResponse = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<GetAgentCardResponse>;
export interface GetBatchEvaluationRequest {
  batchEvaluationId: string;
}
const GetBatchEvaluationRequest = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<GetBatchEvaluationRequest>;
export type BatchEvaluationName = string;
export interface Evaluator {
  evaluatorId: string;
}
const Evaluator = /*@__PURE__*/ __L.at(__c13, 0) as any as S.Schema<Evaluator>;
export type EvaluatorList = Evaluator[];
const EvaluatorList = /*@__PURE__*/ __L.at(__c13, 1);
export type InsightId = string;
export interface Insight {
  insightId: string;
}
const Insight = /*@__PURE__*/ __L.at(__c13, 2) as any as S.Schema<Insight>;
export type InsightList = Insight[];
const InsightList = /*@__PURE__*/ __L.at(__c13, 3);
export type EvaluationStringList = string[];
const EvaluationStringList = NamespacesList as any as S.Schema<EvaluationStringList>;
export type LogGroupName = string;
export type LogGroupNameList = string[];
const LogGroupNameList = NamespacesList as any as S.Schema<LogGroupNameList>;
export type LogGroupNamePrefix = string;
export type LogGroupNamePrefixList = string[];
const LogGroupNamePrefixList = NamespacesList as any as S.Schema<LogGroupNamePrefixList>;
export interface SessionFilterConfig {
  startTime?: Date;
  endTime?: Date;
}
const SessionFilterConfig = /*@__PURE__*/ __L.at(__c13, 4) as any as S.Schema<SessionFilterConfig>;
export type TraceIdList = string[];
const TraceIdList = NamespacesList as any as S.Schema<TraceIdList>;
export interface SessionTraceIds {
  sessionId: string;
  traceIds: string[];
}
const SessionTraceIds = /*@__PURE__*/ __L.at(__c13, 5) as any as S.Schema<SessionTraceIds>;
export type SessionTraceIdsList = SessionTraceIds[];
const SessionTraceIdsList = /*@__PURE__*/ __L.at(__c13, 6);
export interface CloudWatchFilterConfig {
  sessionIds?: string[];
  timeRange?: SessionFilterConfig;
  sessionTraceIds?: SessionTraceIds[];
}
const CloudWatchFilterConfig = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<CloudWatchFilterConfig>;
export interface CloudWatchLogsSource {
  serviceNames: string[];
  logGroupNames?: string[];
  logGroupNamePrefixes?: string[];
  filterConfig?: CloudWatchFilterConfig;
}
const CloudWatchLogsSource = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<CloudWatchLogsSource>;
export interface OnlineEvaluationConfigSource {
  onlineEvaluationConfigArn: string;
  timeRange?: SessionFilterConfig;
}
const OnlineEvaluationConfigSource = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<OnlineEvaluationConfigSource>;
export type DataSourceConfig =
  | { cloudWatchLogs: CloudWatchLogsSource; onlineEvaluationConfigSource?: never }
  | { cloudWatchLogs?: never; onlineEvaluationConfigSource: OnlineEvaluationConfigSource };
const DataSourceConfig = /*@__PURE__*/ __L.at(__c14, 2);
export type OptionalLogGroupName = string;
export type LogStreamName = string;
export type MetricsNamespace = string;
export type ResultDestination = "DEDICATED_LOG_GROUP" | "SOURCE_LOG_GROUP" | (string & {});
const ResultDestination = S.String;

export interface CloudWatchOutputConfig {
  logGroupName?: string;
  logStreamName?: string;
  metricsNamespace?: string;
  resultDestination?: ResultDestination;
}
const CloudWatchOutputConfig = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<CloudWatchOutputConfig>;
export type OutputConfig = { cloudWatchConfig: CloudWatchOutputConfig };
const OutputConfig = /*@__PURE__*/ __L.at(__c14, 4);
export interface EvaluatorStatistics {
  averageScore?: number;
}
const EvaluatorStatistics = /*@__PURE__*/ __L.at(__c14, 5) as any as S.Schema<EvaluatorStatistics>;
export interface EvaluatorSummary {
  evaluatorId?: string;
  statistics?: EvaluatorStatistics;
  totalEvaluated?: number;
  totalFailed?: number;
}
const EvaluatorSummary = /*@__PURE__*/ __L.at(__c14, 6) as any as S.Schema<EvaluatorSummary>;
export type EvaluatorSummaryList = EvaluatorSummary[];
const EvaluatorSummaryList = /*@__PURE__*/ __L.at(__c14, 7);
export interface EvaluationJobResults {
  numberOfSessionsCompleted?: number;
  numberOfSessionsInProgress?: number;
  numberOfSessionsFailed?: number;
  totalNumberOfSessions?: number;
  numberOfSessionsIgnored?: number;
  evaluatorSummaries?: EvaluatorSummary[];
}
const EvaluationJobResults = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<EvaluationJobResults>;
export type InsightsFailureCategory =
  | "execution-error-category-authentication"
  | "execution-error-category-resource-not-found"
  | "execution-error-category-service-errors"
  | "execution-error-category-rate-limiting"
  | "execution-error-category-formatting"
  | "execution-error-category-timeout"
  | "execution-error-category-resource-exhaustion"
  | "execution-error-category-environment"
  | "execution-error-category-tool-schema"
  | "task-instruction-category-non-compliance"
  | "task-instruction-category-problem-id"
  | "incorrect-actions-category-tool-selection"
  | "incorrect-actions-category-poor-information-retrieval"
  | "incorrect-actions-category-clarification"
  | "incorrect-actions-category-inappropriate-info-request"
  | "context-handling-error-category-context-handling-failures"
  | "hallucination-category-hall-capabilities"
  | "hallucination-category-hall-misunderstand"
  | "hallucination-category-hall-usage"
  | "hallucination-category-hall-history"
  | "hallucination-category-hall-params"
  | "hallucination-category-fabricate-tool-outputs"
  | "repetitive-behavior-category-repetition-tool"
  | "repetitive-behavior-category-repetition-info"
  | "repetitive-behavior-category-step-repetition"
  | "orchestration-related-errors-category-reasoning-mismatch"
  | "orchestration-related-errors-category-goal-deviation"
  | "orchestration-related-errors-category-premature-termination"
  | "orchestration-related-errors-category-unaware-termination"
  | "llm-output-category-nonsensical"
  | "configuration-mismatch-category-tool-definition"
  | "coding-use-case-specific-failure-types-category-edge-case-oversights"
  | "coding-use-case-specific-failure-types-category-dependency-issues"
  | "other"
  | (string & {});
const InsightsFailureCategory = S.String;

export interface InsightsFailureSignal {
  category: InsightsFailureCategory;
  evidence: string;
  confidence: number;
}
const InsightsFailureSignal = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<InsightsFailureSignal>;
export type InsightsFailureSignalList = InsightsFailureSignal[];
const InsightsFailureSignalList = /*@__PURE__*/ __L.at(__c15, 2);
export interface FailureSpanDetail {
  spanId: string;
  traceId: string;
  signals: InsightsFailureSignal[];
}
const FailureSpanDetail = /*@__PURE__*/ __L.at(__c15, 3) as any as S.Schema<FailureSpanDetail>;
export type FailureSpanDetailList = FailureSpanDetail[];
const FailureSpanDetailList = /*@__PURE__*/ __L.at(__c15, 4);
export interface AffectedSession {
  sessionId: string;
  explanation: string;
  fixType: string;
  recommendation: string;
  failureSpans: FailureSpanDetail[];
}
const AffectedSession = /*@__PURE__*/ __L.at(__c15, 5) as any as S.Schema<AffectedSession>;
export type AffectedSessionList = AffectedSession[];
const AffectedSessionList = /*@__PURE__*/ __L.at(__c15, 6);
export interface RootCauseCluster {
  clusterId: number;
  name: string;
  rootCause: string;
  recommendation: string;
  affectedSessionCount: number;
  affectedSessions: AffectedSession[];
}
const RootCauseCluster = /*@__PURE__*/ __L.at(__c15, 7) as any as S.Schema<RootCauseCluster>;
export type RootCauseClusterList = RootCauseCluster[];
const RootCauseClusterList = /*@__PURE__*/ __L.at(__c16, 0);
export interface FailureSubCategoryCluster {
  clusterId: number;
  name: string;
  description: string;
  affectedSessionCount: number;
  rootCauses: RootCauseCluster[];
}
const FailureSubCategoryCluster = /*@__PURE__*/ __L.at(
  __c16,
  1,
) as any as S.Schema<FailureSubCategoryCluster>;
export type FailureSubCategoryClusterList = FailureSubCategoryCluster[];
const FailureSubCategoryClusterList = /*@__PURE__*/ __L.at(__c16, 2);
export interface FailureCategoryCluster {
  clusterId: number;
  name: string;
  description: string;
  affectedSessionCount: number;
  subCategories: FailureSubCategoryCluster[];
}
const FailureCategoryCluster = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<FailureCategoryCluster>;
export type FailureCategoryClusterList = FailureCategoryCluster[];
const FailureCategoryClusterList = /*@__PURE__*/ __L.at(__c16, 4);
export interface FailureAnalysisResultContent {
  failures: FailureCategoryCluster[];
}
const FailureAnalysisResultContent = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<FailureAnalysisResultContent>;
export type UserIntentList = string[];
const UserIntentList = NamespacesList as any as S.Schema<UserIntentList>;
export interface UserIntentAffectedSession {
  sessionId: string;
  userMessages: string[];
}
const UserIntentAffectedSession = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<UserIntentAffectedSession>;
export type UserIntentAffectedSessionList = UserIntentAffectedSession[];
const UserIntentAffectedSessionList = /*@__PURE__*/ __L.at(__c16, 7);
export interface UserIntentCluster {
  clusterId: number;
  name: string;
  description: string;
  affectedSessionCount: number;
  affectedSessions: UserIntentAffectedSession[];
}
const UserIntentCluster = /*@__PURE__*/ __L.at(__c17, 0) as any as S.Schema<UserIntentCluster>;
export type UserIntentClusterList = UserIntentCluster[];
const UserIntentClusterList = /*@__PURE__*/ __L.at(__c17, 1);
export interface UserIntentClusteringResultContent {
  userIntents: UserIntentCluster[];
}
const UserIntentClusteringResultContent = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<UserIntentClusteringResultContent>;
export interface ExecutionSummaryAffectedSession {
  sessionId: string;
  approachTaken: string;
  finalOutcome: string;
}
const ExecutionSummaryAffectedSession = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<ExecutionSummaryAffectedSession>;
export type ExecutionSummaryAffectedSessionList = ExecutionSummaryAffectedSession[];
const ExecutionSummaryAffectedSessionList = /*@__PURE__*/ __L.at(__c17, 4);
export interface ExecutionSummaryCluster {
  clusterId: number;
  name: string;
  description: string;
  affectedSessionCount: number;
  affectedSessions: ExecutionSummaryAffectedSession[];
}
const ExecutionSummaryCluster = /*@__PURE__*/ __L.at(
  __c17,
  5,
) as any as S.Schema<ExecutionSummaryCluster>;
export type ExecutionSummaryClusterList = ExecutionSummaryCluster[];
const ExecutionSummaryClusterList = /*@__PURE__*/ __L.at(__c17, 6);
export interface ExecutionSummaryClusteringResultContent {
  executionSummaries: ExecutionSummaryCluster[];
}
const ExecutionSummaryClusteringResultContent = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<ExecutionSummaryClusteringResultContent>;
export type BatchEvaluationDescription = string;
export type KmsKeyArn = string;
export interface GetBatchEvaluationResponse {
  batchEvaluationId: string;
  batchEvaluationArn: string;
  batchEvaluationName: string;
  status: BatchEvaluationStatus;
  createdAt: Date;
  evaluators?: Evaluator[];
  insights?: Insight[];
  dataSourceConfig?: DataSourceConfig;
  outputConfig?: OutputConfig;
  evaluationResults?: EvaluationJobResults;
  failureAnalysisResult?: FailureAnalysisResultContent;
  userIntentResult?: UserIntentClusteringResultContent;
  executionSummaryResult?: ExecutionSummaryClusteringResultContent;
  errorDetails?: string[];
  description?: string;
  updatedAt?: Date;
  kmsKeyArn?: string;
}
const GetBatchEvaluationResponse = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<GetBatchEvaluationResponse>;
export type BrowserSessionId = string;
export interface GetBrowserSessionRequest {
  browserIdentifier: string;
  sessionId: string;
}
const GetBrowserSessionRequest = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<GetBrowserSessionRequest>;
export type Name = string;
export type ViewPortWidth = number;
export type ViewPortHeight = number;
export interface ViewPort {
  width: number;
  height: number;
}
const ViewPort = /*@__PURE__*/ __L.at(__c18, 2) as any as S.Schema<ViewPort>;
export interface S3Location {
  bucket: string;
  prefix: string;
  versionId?: string;
}
const S3Location = /*@__PURE__*/ __L.at(__c18, 3) as any as S.Schema<S3Location>;
export type ResourceLocation = { s3: S3Location };
const ResourceLocation = /*@__PURE__*/ __L.at(__c18, 4);
export interface BrowserExtension {
  location: ResourceLocation;
}
const BrowserExtension = /*@__PURE__*/ __L.at(__c18, 5) as any as S.Schema<BrowserExtension>;
export type BrowserExtensions = BrowserExtension[];
const BrowserExtensions = /*@__PURE__*/ __L.at(__c18, 6);
export type BrowserEnterprisePolicyType = "MANAGED" | "RECOMMENDED" | (string & {});
const BrowserEnterprisePolicyType = S.String;

export interface BrowserEnterprisePolicy {
  location: ResourceLocation;
  type?: BrowserEnterprisePolicyType;
}
const BrowserEnterprisePolicy = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<BrowserEnterprisePolicy>;
export type BrowserEnterprisePolicies = BrowserEnterprisePolicy[];
const BrowserEnterprisePolicies = /*@__PURE__*/ __L.at(__c19, 0);
export type BrowserProfileId = string;
export interface BrowserProfileConfiguration {
  profileIdentifier: string;
}
const BrowserProfileConfiguration = /*@__PURE__*/ __L.at(
  __c19,
  1,
) as any as S.Schema<BrowserProfileConfiguration>;
export type BrowserSessionTimeout = number;
export type BrowserSessionStatus = "READY" | "TERMINATED" | (string & {});
const BrowserSessionStatus = S.String;

export type BrowserStreamEndpoint = string;
export type AutomationStreamStatus = "ENABLED" | "DISABLED" | (string & {});
const AutomationStreamStatus = S.String;

export interface AutomationStream {
  streamEndpoint: string;
  streamStatus: AutomationStreamStatus;
}
const AutomationStream = /*@__PURE__*/ __L.at(__c19, 2) as any as S.Schema<AutomationStream>;
export interface LiveViewStream {
  streamEndpoint?: string;
}
const LiveViewStream = /*@__PURE__*/ __L.at(__c19, 3) as any as S.Schema<LiveViewStream>;
export interface BrowserSessionStream {
  automationStream: AutomationStream;
  liveViewStream?: LiveViewStream;
}
const BrowserSessionStream = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<BrowserSessionStream>;
export type HostName = string;
export type DomainPattern = string;
export type DomainPatterns = string[];
const DomainPatterns = NamespacesList as any as S.Schema<DomainPatterns>;
export type SecretArn = string;
export interface BasicAuth {
  secretArn: string;
}
const BasicAuth = /*@__PURE__*/ __L.at(__c19, 5) as any as S.Schema<BasicAuth>;
export type ProxyCredentials = { basicAuth: BasicAuth };
const ProxyCredentials = /*@__PURE__*/ __L.at(__c19, 6);
export interface ExternalProxy {
  server: string;
  port: number;
  domainPatterns?: string[];
  credentials?: ProxyCredentials;
}
const ExternalProxy = /*@__PURE__*/ __L.at(__c19, 7) as any as S.Schema<ExternalProxy>;
export type Proxy = { externalProxy: ExternalProxy };
const Proxy = /*@__PURE__*/ __L.at(__c20, 0);
export type Proxies = Proxy[];
const Proxies = /*@__PURE__*/ __L.at(__c20, 1);
export interface ProxyBypass {
  domainPatterns?: string[];
}
const ProxyBypass = /*@__PURE__*/ __L.at(__c20, 2) as any as S.Schema<ProxyBypass>;
export interface ProxyConfiguration {
  proxies: Proxy[];
  bypass?: ProxyBypass;
}
const ProxyConfiguration = /*@__PURE__*/ __L.at(__c20, 3) as any as S.Schema<ProxyConfiguration>;
export interface SecretsManagerLocation {
  secretArn: string;
}
const SecretsManagerLocation = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<SecretsManagerLocation>;
export type CertificateLocation = { secretsManager: SecretsManagerLocation };
const CertificateLocation = /*@__PURE__*/ __L.at(__c20, 5);
export interface Certificate {
  location: CertificateLocation;
}
const Certificate = /*@__PURE__*/ __L.at(__c20, 6) as any as S.Schema<Certificate>;
export type Certificates = Certificate[];
const Certificates = /*@__PURE__*/ __L.at(__c20, 7);
export type S3FilesAccessPointArn = string;
export type MountPath = string;
export type S3FilesFileSystemArn = string;
export interface S3FilesConfiguration {
  accessPointArn: string;
  mountPath: string;
  fileSystemArn: string;
}
const S3FilesConfiguration = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<S3FilesConfiguration>;
export type EfsAccessPointArn = string;
export type EfsFileSystemArn = string;
export interface EfsConfiguration {
  accessPointArn: string;
  mountPath: string;
  fileSystemArn: string;
}
const EfsConfiguration = S3FilesConfiguration as any as S.Schema<EfsConfiguration>;
export type ToolsFileSystemConfiguration =
  | { s3FilesConfiguration: S3FilesConfiguration; efsConfiguration?: never }
  | { s3FilesConfiguration?: never; efsConfiguration: EfsConfiguration };
const ToolsFileSystemConfiguration = /*@__PURE__*/ __L.at(__c21, 1);
export type ToolsFileSystemConfigurations = ToolsFileSystemConfiguration[];
const ToolsFileSystemConfigurations = /*@__PURE__*/ __L.at(__c21, 2);
export interface GetBrowserSessionResponse {
  browserIdentifier: string;
  sessionId: string;
  name?: string;
  createdAt: Date;
  viewPort?: ViewPort;
  extensions?: BrowserExtension[];
  enterprisePolicies?: BrowserEnterprisePolicy[];
  profileConfiguration?: BrowserProfileConfiguration;
  sessionTimeoutSeconds?: number;
  status?: BrowserSessionStatus;
  streams?: BrowserSessionStream;
  proxyConfiguration?: ProxyConfiguration;
  certificates?: Certificate[];
  filesystemConfigurations?: ToolsFileSystemConfiguration[];
  sessionReplayArtifact?: string;
  lastUpdatedAt?: Date;
}
const GetBrowserSessionResponse = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<GetBrowserSessionResponse>;
export type CodeInterpreterSessionId = string;
export interface GetCodeInterpreterSessionRequest {
  codeInterpreterIdentifier: string;
  sessionId: string;
}
const GetCodeInterpreterSessionRequest = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<GetCodeInterpreterSessionRequest>;
export type CodeInterpreterSessionTimeout = number;
export type CodeInterpreterSessionStatus = "READY" | "TERMINATED" | (string & {});
const CodeInterpreterSessionStatus = S.String;

export interface GetCodeInterpreterSessionResponse {
  codeInterpreterIdentifier: string;
  sessionId: string;
  name?: string;
  createdAt: Date;
  sessionTimeoutSeconds?: number;
  status?: CodeInterpreterSessionStatus;
  certificates?: Certificate[];
  filesystemConfigurations?: ToolsFileSystemConfiguration[];
}
const GetCodeInterpreterSessionResponse = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<GetCodeInterpreterSessionResponse>;
export interface GetEventInput {
  memoryId: string;
  sessionId: string;
  actorId: string;
  eventId: string;
}
const GetEventInput = /*@__PURE__*/ __L.at(__c21, 6) as any as S.Schema<GetEventInput>;
export interface GetEventOutput {
  event: Event;
}
const GetEventOutput = /*@__PURE__*/ __L.at(__c21, 7) as any as S.Schema<GetEventOutput>;
export interface GetMemoryRecordInput {
  memoryId: string;
  memoryRecordId: string;
  namespace?: string;
}
const GetMemoryRecordInput = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<GetMemoryRecordInput>;
export interface MemoryRecord {
  memoryRecordId: string;
  content: MemoryContent;
  memoryStrategyId?: string;
  namespaces: string[];
  createdAt: Date;
  metadata?: { [key: string]: MemoryRecordMetadataValue | undefined };
}
const MemoryRecord = /*@__PURE__*/ __L.at(__c22, 1) as any as S.Schema<MemoryRecord>;
export interface GetMemoryRecordOutput {
  memoryRecord: MemoryRecord;
}
const GetMemoryRecordOutput = /*@__PURE__*/ __L.at(
  __c22,
  2,
) as any as S.Schema<GetMemoryRecordOutput>;
export interface GetPaymentInstrumentRequest {
  userId?: string;
  agentName?: string;
  paymentManagerArn: string;
  paymentConnectorId?: string;
  paymentInstrumentId: string;
}
const GetPaymentInstrumentRequest = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<GetPaymentInstrumentRequest>;
export interface GetPaymentInstrumentResponse {
  paymentInstrument: PaymentInstrument;
}
const GetPaymentInstrumentResponse =
  CreatePaymentInstrumentResponse as any as S.Schema<GetPaymentInstrumentResponse>;
export type BlockchainChainId =
  | "BASE"
  | "BASE_SEPOLIA"
  | "ETHEREUM"
  | "SOLANA"
  | "SOLANA_DEVNET"
  | (string & {});
const BlockchainChainId = S.String;

export type InstrumentBalanceToken = "USDC" | (string & {});
const InstrumentBalanceToken = S.String;

export interface GetPaymentInstrumentBalanceRequest {
  userId?: string;
  agentName?: string;
  paymentManagerArn: string;
  paymentConnectorId: string;
  paymentInstrumentId: string;
  chain: BlockchainChainId;
  token: InstrumentBalanceToken;
}
const GetPaymentInstrumentBalanceRequest = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<GetPaymentInstrumentBalanceRequest>;
export interface TokenBalance {
  amount: string;
  decimals: number;
  token: InstrumentBalanceToken;
  network: CryptoWalletNetwork;
  chain: BlockchainChainId;
}
const TokenBalance = /*@__PURE__*/ __L.at(__c22, 5) as any as S.Schema<TokenBalance>;
export interface GetPaymentInstrumentBalanceResponse {
  paymentInstrumentId: string;
  tokenBalance: TokenBalance;
}
const GetPaymentInstrumentBalanceResponse = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<GetPaymentInstrumentBalanceResponse>;
export interface GetPaymentSessionRequest {
  userId?: string;
  agentName?: string;
  paymentManagerArn: string;
  paymentSessionId: string;
}
const GetPaymentSessionRequest = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<GetPaymentSessionRequest>;
export interface GetPaymentSessionResponse {
  paymentSession: PaymentSession;
}
const GetPaymentSessionResponse =
  CreatePaymentSessionResponse as any as S.Schema<GetPaymentSessionResponse>;
export interface GetRecommendationRequest {
  recommendationId: string;
}
const GetRecommendationRequest = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<GetRecommendationRequest>;
export type RecommendationArn = string;
export type RecommendationName = string;
export type RecommendationDescription = string;
export type RecommendationType =
  | "SYSTEM_PROMPT_RECOMMENDATION"
  | "TOOL_DESCRIPTION_RECOMMENDATION"
  | (string & {});
const RecommendationType = S.String;

export type SystemPromptText = string | redacted.Redacted<string>;
export type ConfigurationBundleVersionId = string;
export interface SystemPromptConfigurationBundle {
  bundleArn: string;
  versionId: string;
  systemPromptJsonPath: string;
}
const SystemPromptConfigurationBundle = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<SystemPromptConfigurationBundle>;
export type SystemPromptConfig =
  | { text: string | redacted.Redacted<string>; configurationBundle?: never }
  | { text?: never; configurationBundle: SystemPromptConfigurationBundle };
const SystemPromptConfig = /*@__PURE__*/ __L.at(__c23, 2);
export type LogGroupArnList = string[];
const LogGroupArnList = NamespacesList as any as S.Schema<LogGroupArnList>;
export type ServiceName = string;
export type ServiceNameList = string[];
const ServiceNameList = NamespacesList as any as S.Schema<ServiceNameList>;
export type CloudWatchLogsFilterOperator =
  | "Equals"
  | "NotEquals"
  | "GreaterThan"
  | "LessThan"
  | "GreaterThanOrEqual"
  | "LessThanOrEqual"
  | "Contains"
  | "NotContains"
  | (string & {});
const CloudWatchLogsFilterOperator = S.String;

export type FilterStringValue = string;
export type FilterValue =
  | { stringValue: string; doubleValue?: never; booleanValue?: never }
  | { stringValue?: never; doubleValue: number; booleanValue?: never }
  | { stringValue?: never; doubleValue?: never; booleanValue: boolean };
const FilterValue = /*@__PURE__*/ __L.at(__c23, 3);
export interface CloudWatchLogsFilter {
  key: string;
  operator: CloudWatchLogsFilterOperator;
  value: FilterValue;
}
const CloudWatchLogsFilter = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<CloudWatchLogsFilter>;
export type CloudWatchLogsFilterList = CloudWatchLogsFilter[];
const CloudWatchLogsFilterList = /*@__PURE__*/ __L.at(__c23, 5);
export interface CloudWatchLogsRule {
  filters?: CloudWatchLogsFilter[];
}
const CloudWatchLogsRule = /*@__PURE__*/ __L.at(__c23, 6) as any as S.Schema<CloudWatchLogsRule>;
export interface CloudWatchLogsTraceConfig {
  logGroupArns: string[];
  serviceNames: string[];
  startTime: Date;
  endTime: Date;
  rule?: CloudWatchLogsRule;
}
const CloudWatchLogsTraceConfig = /*@__PURE__*/ __L.at(
  __c23,
  7,
) as any as S.Schema<CloudWatchLogsTraceConfig>;
export interface BatchEvaluationTraceConfig {
  batchEvaluationArn: string;
}
const BatchEvaluationTraceConfig = /*@__PURE__*/ __L.at(
  __c24,
  0,
) as any as S.Schema<BatchEvaluationTraceConfig>;
export interface OnlineEvaluationTraceConfig {
  onlineEvaluationConfigArn: string;
  startTime: Date;
  endTime: Date;
}
const OnlineEvaluationTraceConfig = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<OnlineEvaluationTraceConfig>;
export type AgentTracesConfig =
  | {
      sessionSpans: any[];
      cloudwatchLogs?: never;
      batchEvaluation?: never;
      onlineEvaluation?: never;
    }
  | {
      sessionSpans?: never;
      cloudwatchLogs: CloudWatchLogsTraceConfig;
      batchEvaluation?: never;
      onlineEvaluation?: never;
    }
  | {
      sessionSpans?: never;
      cloudwatchLogs?: never;
      batchEvaluation: BatchEvaluationTraceConfig;
      onlineEvaluation?: never;
    }
  | {
      sessionSpans?: never;
      cloudwatchLogs?: never;
      batchEvaluation?: never;
      onlineEvaluation: OnlineEvaluationTraceConfig;
    };
const AgentTracesConfig = /*@__PURE__*/ __L.at(__c24, 2);
export interface RecommendationEvaluatorReference {
  evaluatorArn: string;
}
const RecommendationEvaluatorReference = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<RecommendationEvaluatorReference>;
export type RecommendationEvaluatorList = RecommendationEvaluatorReference[];
const RecommendationEvaluatorList = /*@__PURE__*/ __L.at(__c24, 4);
export interface RecommendationEvaluationConfig {
  evaluators: RecommendationEvaluatorReference[];
}
const RecommendationEvaluationConfig = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<RecommendationEvaluationConfig>;
export interface SystemPromptRecommendationConfig {
  systemPrompt: SystemPromptConfig;
  agentTraces: AgentTracesConfig;
  evaluationConfig?: RecommendationEvaluationConfig;
}
const SystemPromptRecommendationConfig = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<SystemPromptRecommendationConfig>;
export type RecommendationToolName = string;
export type ToolDescriptionText = string | redacted.Redacted<string>;
export type ToolDescriptionConfig = { text: string | redacted.Redacted<string> };
const ToolDescriptionConfig = MemoryContent as any as S.Schema<ToolDescriptionConfig>;
export interface ToolDescriptionInput {
  toolName: string;
  toolDescription: ToolDescriptionConfig;
}
const ToolDescriptionInput = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<ToolDescriptionInput>;
export type ToolDescriptionList = ToolDescriptionInput[];
const ToolDescriptionList = /*@__PURE__*/ __L.at(__c25, 0);
export interface ToolDescriptionTextInput {
  tools: ToolDescriptionInput[];
}
const ToolDescriptionTextInput = /*@__PURE__*/ __L.at(
  __c25,
  1,
) as any as S.Schema<ToolDescriptionTextInput>;
export interface ConfigurationBundleToolEntry {
  toolName: string;
  toolDescriptionJsonPath: string;
}
const ConfigurationBundleToolEntry = /*@__PURE__*/ __L.at(
  __c25,
  2,
) as any as S.Schema<ConfigurationBundleToolEntry>;
export type ConfigurationBundleToolEntryList = ConfigurationBundleToolEntry[];
const ConfigurationBundleToolEntryList = /*@__PURE__*/ __L.at(__c25, 3);
export interface ToolDescriptionConfigurationBundle {
  bundleArn: string;
  versionId: string;
  tools: ConfigurationBundleToolEntry[];
}
const ToolDescriptionConfigurationBundle = /*@__PURE__*/ __L.at(
  __c25,
  4,
) as any as S.Schema<ToolDescriptionConfigurationBundle>;
export type ToolDescriptionSource =
  | { toolDescriptionText: ToolDescriptionTextInput; configurationBundle?: never }
  | { toolDescriptionText?: never; configurationBundle: ToolDescriptionConfigurationBundle };
const ToolDescriptionSource = /*@__PURE__*/ __L.at(__c25, 5);
export interface ToolDescriptionRecommendationConfig {
  toolDescription: ToolDescriptionSource;
  agentTraces: AgentTracesConfig;
}
const ToolDescriptionRecommendationConfig = /*@__PURE__*/ __L.at(
  __c25,
  6,
) as any as S.Schema<ToolDescriptionRecommendationConfig>;
export type RecommendationConfig =
  | {
      systemPromptRecommendationConfig: SystemPromptRecommendationConfig;
      toolDescriptionRecommendationConfig?: never;
    }
  | {
      systemPromptRecommendationConfig?: never;
      toolDescriptionRecommendationConfig: ToolDescriptionRecommendationConfig;
    };
const RecommendationConfig = /*@__PURE__*/ __L.at(__c25, 7);
export interface RecommendationResultConfigurationBundle {
  bundleArn: string;
  versionId: string;
}
const RecommendationResultConfigurationBundle = /*@__PURE__*/ __L.at(
  __c26,
  0,
) as any as S.Schema<RecommendationResultConfigurationBundle>;
export type RecommendationExplanation = string;
export type RecommendationErrorCode = string;
export type RecommendationErrorMessage = string;
export interface SystemPromptRecommendationResult {
  recommendedSystemPrompt?: string | redacted.Redacted<string>;
  configurationBundle?: RecommendationResultConfigurationBundle;
  explanation?: string;
  errorCode?: string;
  errorMessage?: string;
}
const SystemPromptRecommendationResult = /*@__PURE__*/ __L.at(
  __c26,
  1,
) as any as S.Schema<SystemPromptRecommendationResult>;
export interface ToolDescriptionOutput {
  toolName: string;
  recommendedToolDescription?: string | redacted.Redacted<string>;
  explanation?: string;
}
const ToolDescriptionOutput = /*@__PURE__*/ __L.at(
  __c26,
  2,
) as any as S.Schema<ToolDescriptionOutput>;
export type ToolDescriptionResultList = ToolDescriptionOutput[];
const ToolDescriptionResultList = /*@__PURE__*/ __L.at(__c26, 3);
export interface ToolDescriptionRecommendationResult {
  tools?: ToolDescriptionOutput[];
  configurationBundle?: RecommendationResultConfigurationBundle;
  errorCode?: string;
  errorMessage?: string;
}
const ToolDescriptionRecommendationResult = /*@__PURE__*/ __L.at(
  __c26,
  4,
) as any as S.Schema<ToolDescriptionRecommendationResult>;
export type RecommendationResult =
  | {
      systemPromptRecommendationResult: SystemPromptRecommendationResult;
      toolDescriptionRecommendationResult?: never;
    }
  | {
      systemPromptRecommendationResult?: never;
      toolDescriptionRecommendationResult: ToolDescriptionRecommendationResult;
    };
const RecommendationResult = /*@__PURE__*/ __L.at(__c26, 5);
export interface GetRecommendationResponse {
  recommendationId: string;
  recommendationArn: string;
  name: string;
  description?: string;
  type: RecommendationType;
  recommendationConfig: RecommendationConfig;
  status: RecommendationStatus;
  createdAt: Date;
  updatedAt: Date;
  recommendationResult?: RecommendationResult;
  kmsKeyArn?: string;
}
const GetRecommendationResponse = /*@__PURE__*/ __L.at(
  __c26,
  6,
) as any as S.Schema<GetRecommendationResponse>;
export type WorkloadIdentityTokenType = string | redacted.Redacted<string>;
export type CredentialProviderName = string;
export interface GetResourceApiKeyRequest {
  workloadIdentityToken: string | redacted.Redacted<string>;
  resourceCredentialProviderName: string;
}
const GetResourceApiKeyRequest = /*@__PURE__*/ __L.at(
  __c26,
  7,
) as any as S.Schema<GetResourceApiKeyRequest>;
export type ApiKeyType = string | redacted.Redacted<string>;
export interface GetResourceApiKeyResponse {
  apiKey: string | redacted.Redacted<string>;
}
const GetResourceApiKeyResponse = /*@__PURE__*/ __L.at(
  __c27,
  0,
) as any as S.Schema<GetResourceApiKeyResponse>;
export type ScopeType = string;
export type ScopesListType = string[];
const ScopesListType = NamespacesList as any as S.Schema<ScopesListType>;
export type Oauth2FlowType =
  | "USER_FEDERATION"
  | "M2M"
  | "ON_BEHALF_OF_TOKEN_EXCHANGE"
  | (string & {});
const Oauth2FlowType = S.String;

export type ResourceOauth2ReturnUrlType = string;
export type CustomRequestKeyType = string;
export type CustomRequestValueType = string | redacted.Redacted<string>;
export type CustomRequestParametersType = {
  [key: string]: string | redacted.Redacted<string> | undefined;
};
const CustomRequestParametersType = /*@__PURE__*/ __L.at(__c27, 1);
export type State = string | redacted.Redacted<string>;
export type ResourceType = string;
export type ResourcesListType = string[];
const ResourcesListType = NamespacesList as any as S.Schema<ResourcesListType>;
export type AudienceType = string;
export type AudiencesListType = string[];
const AudiencesListType = NamespacesList as any as S.Schema<AudiencesListType>;
export interface GetResourceOauth2TokenRequest {
  workloadIdentityToken: string | redacted.Redacted<string>;
  resourceCredentialProviderName: string;
  scopes: string[];
  oauth2Flow: Oauth2FlowType;
  sessionUri?: string;
  resourceOauth2ReturnUrl?: string;
  forceAuthentication?: boolean;
  customParameters?: { [key: string]: string | redacted.Redacted<string> | undefined };
  customState?: string | redacted.Redacted<string>;
  resources?: string[];
  audiences?: string[];
}
const GetResourceOauth2TokenRequest = /*@__PURE__*/ __L.at(
  __c27,
  2,
) as any as S.Schema<GetResourceOauth2TokenRequest>;
export type AuthorizationUrlType = string | redacted.Redacted<string>;
export type AccessTokenType = string | redacted.Redacted<string>;
export type SessionStatus = "IN_PROGRESS" | "FAILED" | (string & {});
const SessionStatus = S.String;

export interface GetResourceOauth2TokenResponse {
  authorizationUrl?: string | redacted.Redacted<string>;
  accessToken?: string | redacted.Redacted<string>;
  sessionUri?: string;
  sessionStatus?: SessionStatus;
}
const GetResourceOauth2TokenResponse = /*@__PURE__*/ __L.at(
  __c27,
  3,
) as any as S.Schema<GetResourceOauth2TokenResponse>;
export type PaymentHttpMethodType = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | (string & {});
const PaymentHttpMethodType = S.String;

export type PaymentRequestHostType = string;
export type PaymentRequestPathType = string;
export type CoinbaseCdpPaymentRequestBodyType = string;
export interface CoinbaseCdpTokenRequestInput {
  requestMethod: PaymentHttpMethodType;
  requestHost?: string;
  requestPath: string;
  includeWalletAuthToken?: boolean;
  requestBody?: string;
}
const CoinbaseCdpTokenRequestInput = /*@__PURE__*/ __L.at(
  __c27,
  4,
) as any as S.Schema<CoinbaseCdpTokenRequestInput>;
export type StripePrivyRequestHostType = string;
export type StripePrivyRequestPathType = string;
export type StripePrivyRequestBodyType = string | redacted.Redacted<string>;
export interface StripePrivyTokenRequestInput {
  requestHost?: string;
  requestPath: string;
  requestBody: string | redacted.Redacted<string>;
  includeAuthorizationSignature?: boolean;
}
const StripePrivyTokenRequestInput = /*@__PURE__*/ __L.at(
  __c27,
  5,
) as any as S.Schema<StripePrivyTokenRequestInput>;
export type PaymentTokenRequestInput =
  | { coinbaseCdpTokenRequest: CoinbaseCdpTokenRequestInput; stripePrivyTokenRequest?: never }
  | { coinbaseCdpTokenRequest?: never; stripePrivyTokenRequest: StripePrivyTokenRequestInput };
const PaymentTokenRequestInput = /*@__PURE__*/ __L.at(__c27, 6);
export interface GetResourcePaymentTokenRequest {
  workloadIdentityToken: string | redacted.Redacted<string>;
  resourceCredentialProviderName: string;
  paymentTokenRequest: PaymentTokenRequestInput;
}
const GetResourcePaymentTokenRequest = /*@__PURE__*/ __L.at(
  __c27,
  7,
) as any as S.Schema<GetResourcePaymentTokenRequest>;
export type CoinbaseCdpPaymentJwtTokenType = string | redacted.Redacted<string>;
export interface CoinbaseCdpTokenResponseOutput {
  bearerToken: string | redacted.Redacted<string>;
  walletAuthToken?: string | redacted.Redacted<string>;
}
const CoinbaseCdpTokenResponseOutput = /*@__PURE__*/ __L.at(
  __c28,
  0,
) as any as S.Schema<CoinbaseCdpTokenResponseOutput>;
export type StripePrivyAuthorizationSignatureType = string | redacted.Redacted<string>;
export type StripePrivyAppIdType = string;
export type StripePrivyBasicAuthTokenType = string | redacted.Redacted<string>;
export interface StripePrivyTokenResponseOutput {
  authorizationSignature?: string | redacted.Redacted<string>;
  requestExpiry?: number;
  appId: string;
  basicAuthToken: string | redacted.Redacted<string>;
}
const StripePrivyTokenResponseOutput = /*@__PURE__*/ __L.at(
  __c28,
  1,
) as any as S.Schema<StripePrivyTokenResponseOutput>;
export type PaymentTokenResponseOutput =
  | { coinbaseCdpTokenResponse: CoinbaseCdpTokenResponseOutput; stripePrivyTokenResponse?: never }
  | { coinbaseCdpTokenResponse?: never; stripePrivyTokenResponse: StripePrivyTokenResponseOutput };
const PaymentTokenResponseOutput = /*@__PURE__*/ __L.at(__c28, 2);
export interface GetResourcePaymentTokenResponse {
  paymentTokenResponse: PaymentTokenResponseOutput;
}
const GetResourcePaymentTokenResponse = /*@__PURE__*/ __L.at(
  __c28,
  3,
) as any as S.Schema<GetResourcePaymentTokenResponse>;
export type WorkloadIdentityNameType = string;
export interface GetWorkloadAccessTokenRequest {
  workloadName: string;
}
const GetWorkloadAccessTokenRequest = /*@__PURE__*/ __L.at(
  __c28,
  4,
) as any as S.Schema<GetWorkloadAccessTokenRequest>;
export interface GetWorkloadAccessTokenResponse {
  workloadAccessToken: string | redacted.Redacted<string>;
}
const GetWorkloadAccessTokenResponse = /*@__PURE__*/ __L.at(
  __c28,
  5,
) as any as S.Schema<GetWorkloadAccessTokenResponse>;
export interface GetWorkloadAccessTokenForJWTRequest {
  workloadName: string;
  userToken: string | redacted.Redacted<string>;
}
const GetWorkloadAccessTokenForJWTRequest = /*@__PURE__*/ __L.at(
  __c28,
  6,
) as any as S.Schema<GetWorkloadAccessTokenForJWTRequest>;
export interface GetWorkloadAccessTokenForJWTResponse {
  workloadAccessToken: string | redacted.Redacted<string>;
}
const GetWorkloadAccessTokenForJWTResponse =
  GetWorkloadAccessTokenResponse as any as S.Schema<GetWorkloadAccessTokenForJWTResponse>;
export interface GetWorkloadAccessTokenForUserIdRequest {
  workloadName: string;
  userId: string;
}
const GetWorkloadAccessTokenForUserIdRequest = /*@__PURE__*/ __L.at(
  __c28,
  7,
) as any as S.Schema<GetWorkloadAccessTokenForUserIdRequest>;
export interface GetWorkloadAccessTokenForUserIdResponse {
  workloadAccessToken: string | redacted.Redacted<string>;
}
const GetWorkloadAccessTokenForUserIdResponse =
  GetWorkloadAccessTokenResponse as any as S.Schema<GetWorkloadAccessTokenForUserIdResponse>;
export type IngestPayloadType =
  | { conversational: Conversational; json?: never }
  | { conversational?: never; json: MemoryJsonData };
const IngestPayloadType = /*@__PURE__*/ __L.at(__c29, 0);
export type IngestPayloadList = IngestPayloadType[];
const IngestPayloadList = /*@__PURE__*/ __L.at(__c29, 1);
export interface InlineMemoryContent {
  payload: IngestPayloadType[];
}
const InlineMemoryContent = /*@__PURE__*/ __L.at(__c29, 2) as any as S.Schema<InlineMemoryContent>;
export type ContentSource = { inline: InlineMemoryContent };
const ContentSource = /*@__PURE__*/ __L.at(__c29, 3);
export interface IngestDataInput {
  memoryId: string;
  source: ContentSource;
  contentTimestamp: Date;
  actorId: string;
  sessionId?: string;
  extractionConfig?: ExtractionConfig;
  metadata?: { [key: string]: MetadataValue | undefined };
  clientToken?: string;
}
const IngestDataInput = /*@__PURE__*/ __L.at(__c29, 4) as any as S.Schema<IngestDataInput>;
export interface IngestDataOutput {
  sessionId: string;
}
const IngestDataOutput = /*@__PURE__*/ __L.at(__c29, 5) as any as S.Schema<IngestDataOutput>;
export type MimeType = string;
export type StringType = string;
export type Body = Uint8Array | redacted.Redacted<Uint8Array>;
export interface InvokeAgentRuntimeRequest {
  contentType?: string;
  accept?: string;
  mcpSessionId?: string;
  runtimeSessionId?: string;
  mcpProtocolVersion?: string;
  mcpMethod?: string;
  mcpName?: string;
  runtimeUserId?: string;
  traceId?: string;
  traceParent?: string;
  traceState?: string;
  baggage?: string;
  agentRuntimeArn: string;
  qualifier?: string;
  accountId?: string;
  payload: T.StreamingInputBody;
}
const InvokeAgentRuntimeRequest = /*@__PURE__*/ __L.at(
  __c29,
  6,
) as any as S.Schema<InvokeAgentRuntimeRequest>;
export interface InvokeAgentRuntimeResponse {
  runtimeSessionId?: string;
  mcpSessionId?: string;
  mcpProtocolVersion?: string;
  traceId?: string;
  traceParent?: string;
  traceState?: string;
  baggage?: string;
  contentType: string;
  response?: T.StreamingOutputBody;
  statusCode?: number;
}
const InvokeAgentRuntimeResponse = /*@__PURE__*/ __L.at(
  __c29,
  7,
) as any as S.Schema<InvokeAgentRuntimeResponse>;
export interface InvokeAgentRuntimeCommandRequestBody {
  command: string;
  timeout?: number;
}
const InvokeAgentRuntimeCommandRequestBody = /*@__PURE__*/ __L.at(
  __c30,
  0,
) as any as S.Schema<InvokeAgentRuntimeCommandRequestBody>;
export interface InvokeAgentRuntimeCommandRequest {
  contentType?: string;
  accept?: string;
  runtimeSessionId?: string;
  traceId?: string;
  traceParent?: string;
  traceState?: string;
  baggage?: string;
  agentRuntimeArn: string;
  qualifier?: string;
  accountId?: string;
  body: InvokeAgentRuntimeCommandRequestBody;
}
const InvokeAgentRuntimeCommandRequest = /*@__PURE__*/ __L.at(
  __c30,
  1,
) as any as S.Schema<InvokeAgentRuntimeCommandRequest>;
export interface ContentStartEvent {}
const ContentStartEvent = /*@__PURE__*/ __L.at(__c30, 2) as any as S.Schema<ContentStartEvent>;
export interface ContentDeltaEvent {
  stdout?: string;
  stderr?: string;
}
const ContentDeltaEvent = /*@__PURE__*/ __L.at(__c30, 3) as any as S.Schema<ContentDeltaEvent>;
export type CommandExecutionStatus = "COMPLETED" | "TIMED_OUT" | (string & {});
const CommandExecutionStatus = S.String;

export interface ContentStopEvent {
  exitCode: number;
  status: CommandExecutionStatus;
}
const ContentStopEvent = /*@__PURE__*/ __L.at(__c30, 4) as any as S.Schema<ContentStopEvent>;
export interface ResponseChunk {
  contentStart?: ContentStartEvent;
  contentDelta?: ContentDeltaEvent;
  contentStop?: ContentStopEvent;
}
const ResponseChunk = /*@__PURE__*/ __L.at(__c30, 5) as any as S.Schema<ResponseChunk>;
export type NonBlankString = string;
export type ValidationExceptionReason =
  | "CannotParse"
  | "FieldValidationFailed"
  | "IdempotentParameterMismatchException"
  | "EventInOtherSession"
  | "ResourceConflict"
  | (string & {});
const ValidationExceptionReason = S.String;

export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ __L.at(
  __c30,
  6,
) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ __L.at(__c30, 7);
export type InvokeAgentRuntimeCommandStreamOutput =
  | {
      chunk: ResponseChunk;
      accessDeniedException?: never;
      internalServerException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      validationException?: never;
      runtimeClientError?: never;
    }
  | {
      chunk?: never;
      accessDeniedException: AccessDeniedException;
      internalServerException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      validationException?: never;
      runtimeClientError?: never;
    }
  | {
      chunk?: never;
      accessDeniedException?: never;
      internalServerException: InternalServerException;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      validationException?: never;
      runtimeClientError?: never;
    }
  | {
      chunk?: never;
      accessDeniedException?: never;
      internalServerException?: never;
      resourceNotFoundException: ResourceNotFoundException;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      validationException?: never;
      runtimeClientError?: never;
    }
  | {
      chunk?: never;
      accessDeniedException?: never;
      internalServerException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException: ServiceQuotaExceededException;
      throttlingException?: never;
      validationException?: never;
      runtimeClientError?: never;
    }
  | {
      chunk?: never;
      accessDeniedException?: never;
      internalServerException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException: ThrottlingException;
      validationException?: never;
      runtimeClientError?: never;
    }
  | {
      chunk?: never;
      accessDeniedException?: never;
      internalServerException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      validationException: ValidationException;
      runtimeClientError?: never;
    }
  | {
      chunk?: never;
      accessDeniedException?: never;
      internalServerException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      validationException?: never;
      runtimeClientError: RuntimeClientError;
    };
const InvokeAgentRuntimeCommandStreamOutput = /*@__PURE__*/ __L.at(__c31, 0) as any as S.Schema<
  stream.Stream<InvokeAgentRuntimeCommandStreamOutput, Error, never>
>;
export interface InvokeAgentRuntimeCommandResponse {
  runtimeSessionId?: string;
  traceId?: string;
  traceParent?: string;
  traceState?: string;
  baggage?: string;
  contentType: string;
  statusCode?: number;
  stream: stream.Stream<InvokeAgentRuntimeCommandStreamOutput, Error, never>;
}
const InvokeAgentRuntimeCommandResponse = /*@__PURE__*/ __L.at(
  __c31,
  1,
) as any as S.Schema<InvokeAgentRuntimeCommandResponse>;
export type MouseButton = "LEFT" | "RIGHT" | "MIDDLE" | (string & {});
const MouseButton = S.String;

export interface MouseClickArguments {
  x: number;
  y: number;
  button?: MouseButton;
  clickCount?: number;
}
const MouseClickArguments = /*@__PURE__*/ __L.at(__c31, 2) as any as S.Schema<MouseClickArguments>;
export interface MouseMoveArguments {
  x: number;
  y: number;
}
const MouseMoveArguments = /*@__PURE__*/ __L.at(__c31, 3) as any as S.Schema<MouseMoveArguments>;
export interface MouseDragArguments {
  endX: number;
  endY: number;
  startX: number;
  startY: number;
  button?: MouseButton;
}
const MouseDragArguments = /*@__PURE__*/ __L.at(__c31, 4) as any as S.Schema<MouseDragArguments>;
export interface MouseScrollArguments {
  x: number;
  y: number;
  deltaX?: number;
  deltaY?: number;
}
const MouseScrollArguments = /*@__PURE__*/ __L.at(
  __c31,
  5,
) as any as S.Schema<MouseScrollArguments>;
export interface KeyTypeArguments {
  text: string;
}
const KeyTypeArguments = /*@__PURE__*/ __L.at(__c31, 6) as any as S.Schema<KeyTypeArguments>;
export interface KeyPressArguments {
  key: string;
  presses?: number;
}
const KeyPressArguments = /*@__PURE__*/ __L.at(__c31, 7) as any as S.Schema<KeyPressArguments>;
export type KeyList = string[];
const KeyList = NamespacesList as any as S.Schema<KeyList>;
export interface KeyShortcutArguments {
  keys: string[];
}
const KeyShortcutArguments = /*@__PURE__*/ __L.at(
  __c32,
  0,
) as any as S.Schema<KeyShortcutArguments>;
export type ScreenshotFormat = "PNG" | (string & {});
const ScreenshotFormat = S.String;

export interface ScreenshotArguments {
  format?: ScreenshotFormat;
}
const ScreenshotArguments = /*@__PURE__*/ __L.at(__c32, 1) as any as S.Schema<ScreenshotArguments>;
export type BrowserAction =
  | {
      mouseClick: MouseClickArguments;
      mouseMove?: never;
      mouseDrag?: never;
      mouseScroll?: never;
      keyType?: never;
      keyPress?: never;
      keyShortcut?: never;
      screenshot?: never;
    }
  | {
      mouseClick?: never;
      mouseMove: MouseMoveArguments;
      mouseDrag?: never;
      mouseScroll?: never;
      keyType?: never;
      keyPress?: never;
      keyShortcut?: never;
      screenshot?: never;
    }
  | {
      mouseClick?: never;
      mouseMove?: never;
      mouseDrag: MouseDragArguments;
      mouseScroll?: never;
      keyType?: never;
      keyPress?: never;
      keyShortcut?: never;
      screenshot?: never;
    }
  | {
      mouseClick?: never;
      mouseMove?: never;
      mouseDrag?: never;
      mouseScroll: MouseScrollArguments;
      keyType?: never;
      keyPress?: never;
      keyShortcut?: never;
      screenshot?: never;
    }
  | {
      mouseClick?: never;
      mouseMove?: never;
      mouseDrag?: never;
      mouseScroll?: never;
      keyType: KeyTypeArguments;
      keyPress?: never;
      keyShortcut?: never;
      screenshot?: never;
    }
  | {
      mouseClick?: never;
      mouseMove?: never;
      mouseDrag?: never;
      mouseScroll?: never;
      keyType?: never;
      keyPress: KeyPressArguments;
      keyShortcut?: never;
      screenshot?: never;
    }
  | {
      mouseClick?: never;
      mouseMove?: never;
      mouseDrag?: never;
      mouseScroll?: never;
      keyType?: never;
      keyPress?: never;
      keyShortcut: KeyShortcutArguments;
      screenshot?: never;
    }
  | {
      mouseClick?: never;
      mouseMove?: never;
      mouseDrag?: never;
      mouseScroll?: never;
      keyType?: never;
      keyPress?: never;
      keyShortcut?: never;
      screenshot: ScreenshotArguments;
    };
const BrowserAction = /*@__PURE__*/ __L.at(__c32, 2);
export interface InvokeBrowserRequest {
  browserIdentifier: string;
  sessionId: string;
  action: BrowserAction;
}
const InvokeBrowserRequest = /*@__PURE__*/ __L.at(
  __c32,
  3,
) as any as S.Schema<InvokeBrowserRequest>;
export type BrowserActionStatus = "SUCCESS" | "FAILED" | (string & {});
const BrowserActionStatus = S.String;

export interface MouseClickResult {
  status: BrowserActionStatus;
  error?: string;
}
const MouseClickResult = /*@__PURE__*/ __L.at(__c32, 4) as any as S.Schema<MouseClickResult>;
export interface MouseMoveResult {
  status: BrowserActionStatus;
  error?: string;
}
const MouseMoveResult = MouseClickResult as any as S.Schema<MouseMoveResult>;
export interface MouseDragResult {
  status: BrowserActionStatus;
  error?: string;
}
const MouseDragResult = MouseClickResult as any as S.Schema<MouseDragResult>;
export interface MouseScrollResult {
  status: BrowserActionStatus;
  error?: string;
}
const MouseScrollResult = MouseClickResult as any as S.Schema<MouseScrollResult>;
export interface KeyTypeResult {
  status: BrowserActionStatus;
  error?: string;
}
const KeyTypeResult = MouseClickResult as any as S.Schema<KeyTypeResult>;
export interface KeyPressResult {
  status: BrowserActionStatus;
  error?: string;
}
const KeyPressResult = MouseClickResult as any as S.Schema<KeyPressResult>;
export interface KeyShortcutResult {
  status: BrowserActionStatus;
  error?: string;
}
const KeyShortcutResult = MouseClickResult as any as S.Schema<KeyShortcutResult>;
export interface ScreenshotResult {
  status: BrowserActionStatus;
  error?: string;
  data?: Uint8Array;
}
const ScreenshotResult = /*@__PURE__*/ __L.at(__c32, 5) as any as S.Schema<ScreenshotResult>;
export type BrowserActionResult =
  | {
      mouseClick: MouseClickResult;
      mouseMove?: never;
      mouseDrag?: never;
      mouseScroll?: never;
      keyType?: never;
      keyPress?: never;
      keyShortcut?: never;
      screenshot?: never;
    }
  | {
      mouseClick?: never;
      mouseMove: MouseMoveResult;
      mouseDrag?: never;
      mouseScroll?: never;
      keyType?: never;
      keyPress?: never;
      keyShortcut?: never;
      screenshot?: never;
    }
  | {
      mouseClick?: never;
      mouseMove?: never;
      mouseDrag: MouseDragResult;
      mouseScroll?: never;
      keyType?: never;
      keyPress?: never;
      keyShortcut?: never;
      screenshot?: never;
    }
  | {
      mouseClick?: never;
      mouseMove?: never;
      mouseDrag?: never;
      mouseScroll: MouseScrollResult;
      keyType?: never;
      keyPress?: never;
      keyShortcut?: never;
      screenshot?: never;
    }
  | {
      mouseClick?: never;
      mouseMove?: never;
      mouseDrag?: never;
      mouseScroll?: never;
      keyType: KeyTypeResult;
      keyPress?: never;
      keyShortcut?: never;
      screenshot?: never;
    }
  | {
      mouseClick?: never;
      mouseMove?: never;
      mouseDrag?: never;
      mouseScroll?: never;
      keyType?: never;
      keyPress: KeyPressResult;
      keyShortcut?: never;
      screenshot?: never;
    }
  | {
      mouseClick?: never;
      mouseMove?: never;
      mouseDrag?: never;
      mouseScroll?: never;
      keyType?: never;
      keyPress?: never;
      keyShortcut: KeyShortcutResult;
      screenshot?: never;
    }
  | {
      mouseClick?: never;
      mouseMove?: never;
      mouseDrag?: never;
      mouseScroll?: never;
      keyType?: never;
      keyPress?: never;
      keyShortcut?: never;
      screenshot: ScreenshotResult;
    };
const BrowserActionResult = /*@__PURE__*/ __L.at(__c32, 6);
export interface InvokeBrowserResponse {
  result: BrowserActionResult;
  sessionId: string;
}
const InvokeBrowserResponse = /*@__PURE__*/ __L.at(
  __c32,
  7,
) as any as S.Schema<InvokeBrowserResponse>;
export type ToolName =
  | "executeCode"
  | "executeCommand"
  | "readFiles"
  | "listFiles"
  | "removeFiles"
  | "writeFiles"
  | "startCommandExecution"
  | "getTask"
  | "stopTask"
  | (string & {});
const ToolName = S.String;

export type MaxLenString = string;
export type ProgrammingLanguage = "python" | "javascript" | "typescript" | (string & {});
const ProgrammingLanguage = S.String;

export type StringList = string[];
const StringList = NamespacesList as any as S.Schema<StringList>;
export interface InputContentBlock {
  path: string;
  text?: string;
  blob?: Uint8Array | redacted.Redacted<Uint8Array>;
}
const InputContentBlock = /*@__PURE__*/ __L.at(__c33, 0) as any as S.Schema<InputContentBlock>;
export type InputContentBlockList = InputContentBlock[];
const InputContentBlockList = /*@__PURE__*/ __L.at(__c33, 1);
export type LanguageRuntime = "nodejs" | "deno" | "python" | (string & {});
const LanguageRuntime = S.String;

export interface ToolArguments {
  code?: string;
  language?: ProgrammingLanguage;
  clearContext?: boolean;
  command?: string;
  path?: string;
  paths?: string[];
  content?: InputContentBlock[];
  directoryPath?: string;
  taskId?: string;
  runtime?: LanguageRuntime;
}
const ToolArguments = /*@__PURE__*/ __L.at(__c33, 2) as any as S.Schema<ToolArguments>;
export interface InvokeCodeInterpreterRequest {
  codeInterpreterIdentifier: string;
  sessionId?: string;
  traceId?: string;
  traceParent?: string;
  name: ToolName;
  arguments?: ToolArguments;
}
const InvokeCodeInterpreterRequest = /*@__PURE__*/ __L.at(
  __c33,
  3,
) as any as S.Schema<InvokeCodeInterpreterRequest>;
export type ContentBlockType = "text" | "image" | "resource" | "resource_link" | (string & {});
const ContentBlockType = S.String;

export type ResourceContentType = "text" | "blob" | (string & {});
const ResourceContentType = S.String;

export interface ResourceContent {
  type: ResourceContentType;
  uri?: string;
  mimeType?: string;
  text?: string;
  blob?: Uint8Array;
}
const ResourceContent = /*@__PURE__*/ __L.at(__c33, 4) as any as S.Schema<ResourceContent>;
export interface ContentBlock {
  type: ContentBlockType;
  text?: string;
  data?: Uint8Array;
  mimeType?: string;
  uri?: string;
  name?: string;
  description?: string;
  size?: number;
  resource?: ResourceContent;
}
const ContentBlock = /*@__PURE__*/ __L.at(__c33, 5) as any as S.Schema<ContentBlock>;
export type ContentBlockList = ContentBlock[];
const ContentBlockList = /*@__PURE__*/ __L.at(__c33, 6);
export type TaskStatus =
  | "submitted"
  | "working"
  | "completed"
  | "canceled"
  | "failed"
  | (string & {});
const TaskStatus = S.String;

export interface ToolResultStructuredContent {
  taskId?: string;
  taskStatus?: TaskStatus;
  stdout?: string;
  stderr?: string;
  exitCode?: number;
  executionTime?: number;
}
const ToolResultStructuredContent = /*@__PURE__*/ __L.at(
  __c33,
  7,
) as any as S.Schema<ToolResultStructuredContent>;
export interface CodeInterpreterResult {
  content: ContentBlock[];
  structuredContent?: ToolResultStructuredContent;
  isError?: boolean;
}
const CodeInterpreterResult = /*@__PURE__*/ __L.at(
  __c34,
  0,
) as any as S.Schema<CodeInterpreterResult>;
export type CodeInterpreterStreamOutput =
  | {
      result: CodeInterpreterResult;
      accessDeniedException?: never;
      conflictException?: never;
      internalServerException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      validationException?: never;
    }
  | {
      result?: never;
      accessDeniedException: AccessDeniedException;
      conflictException?: never;
      internalServerException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      validationException?: never;
    }
  | {
      result?: never;
      accessDeniedException?: never;
      conflictException: ConflictException;
      internalServerException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      validationException?: never;
    }
  | {
      result?: never;
      accessDeniedException?: never;
      conflictException?: never;
      internalServerException: InternalServerException;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      validationException?: never;
    }
  | {
      result?: never;
      accessDeniedException?: never;
      conflictException?: never;
      internalServerException?: never;
      resourceNotFoundException: ResourceNotFoundException;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      validationException?: never;
    }
  | {
      result?: never;
      accessDeniedException?: never;
      conflictException?: never;
      internalServerException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException: ServiceQuotaExceededException;
      throttlingException?: never;
      validationException?: never;
    }
  | {
      result?: never;
      accessDeniedException?: never;
      conflictException?: never;
      internalServerException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException: ThrottlingException;
      validationException?: never;
    }
  | {
      result?: never;
      accessDeniedException?: never;
      conflictException?: never;
      internalServerException?: never;
      resourceNotFoundException?: never;
      serviceQuotaExceededException?: never;
      throttlingException?: never;
      validationException: ValidationException;
    };
const CodeInterpreterStreamOutput = /*@__PURE__*/ __L.at(__c34, 1) as any as S.Schema<
  stream.Stream<CodeInterpreterStreamOutput, Error, never>
>;
export interface InvokeCodeInterpreterResponse {
  sessionId?: string;
  stream: stream.Stream<CodeInterpreterStreamOutput, Error, never>;
}
const InvokeCodeInterpreterResponse = /*@__PURE__*/ __L.at(
  __c34,
  2,
) as any as S.Schema<InvokeCodeInterpreterResponse>;
export type HarnessArn = string;
export type HarnessEndpointName = string;
export type HarnessConversationRole = "user" | "assistant" | (string & {});
const HarnessConversationRole = S.String;

export type SensitiveText = string | redacted.Redacted<string>;
export type HarnessToolName = string;
export type HarnessToolUseId = string;
export type SensitiveJson = unknown;
export type HarnessToolUseType = "tool_use" | "server_tool_use" | "mcp_tool_use" | (string & {});
const HarnessToolUseType = S.String;

export interface HarnessToolUseBlock {
  name: string;
  toolUseId: string;
  input: any;
  type?: HarnessToolUseType;
  serverName?: string;
}
const HarnessToolUseBlock = /*@__PURE__*/ __L.at(__c34, 3) as any as S.Schema<HarnessToolUseBlock>;
export type HarnessToolResultContentBlock =
  | { text: string | redacted.Redacted<string>; json?: never }
  | { text?: never; json: any };
const HarnessToolResultContentBlock = /*@__PURE__*/ __L.at(__c34, 4);
export type HarnessToolResultContentBlocks = HarnessToolResultContentBlock[];
const HarnessToolResultContentBlocks = /*@__PURE__*/ __L.at(__c34, 5);
export type HarnessToolUseStatus = "success" | "error" | (string & {});
const HarnessToolUseStatus = S.String;

export interface HarnessToolResultBlock {
  toolUseId: string;
  content: HarnessToolResultContentBlock[];
  status?: HarnessToolUseStatus;
  type?: HarnessToolUseType;
}
const HarnessToolResultBlock = /*@__PURE__*/ __L.at(
  __c34,
  6,
) as any as S.Schema<HarnessToolResultBlock>;
export interface HarnessReasoningTextBlock {
  text: string;
  signature?: string;
}
const HarnessReasoningTextBlock = /*@__PURE__*/ __L.at(
  __c34,
  7,
) as any as S.Schema<HarnessReasoningTextBlock>;
export type HarnessReasoningContentBlock =
  | { reasoningText: HarnessReasoningTextBlock; redactedContent?: never }
  | { reasoningText?: never; redactedContent: Uint8Array };
const HarnessReasoningContentBlock = /*@__PURE__*/ __L.at(__c35, 0);
export type HarnessContentBlock =
  | {
      text: string | redacted.Redacted<string>;
      toolUse?: never;
      toolResult?: never;
      reasoningContent?: never;
    }
  | { text?: never; toolUse: HarnessToolUseBlock; toolResult?: never; reasoningContent?: never }
  | { text?: never; toolUse?: never; toolResult: HarnessToolResultBlock; reasoningContent?: never }
  | {
      text?: never;
      toolUse?: never;
      toolResult?: never;
      reasoningContent: HarnessReasoningContentBlock;
    };
const HarnessContentBlock = /*@__PURE__*/ __L.at(__c35, 1);
export type HarnessContentBlocks = HarnessContentBlock[];
const HarnessContentBlocks = /*@__PURE__*/ __L.at(__c35, 2);
export interface HarnessMessage {
  role: HarnessConversationRole;
  content: HarnessContentBlock[];
}
const HarnessMessage = /*@__PURE__*/ __L.at(__c35, 3) as any as S.Schema<HarnessMessage>;
export type HarnessMessages = HarnessMessage[];
const HarnessMessages = /*@__PURE__*/ __L.at(__c35, 4);
export type ModelId = string;
export type MaxTokens = number;
export type Temperature = number;
export type TopP = number;
export type HarnessBedrockApiFormat =
  | "converse_stream"
  | "responses"
  | "chat_completions"
  | (string & {});
const HarnessBedrockApiFormat = S.String;

export interface HarnessBedrockModelConfig {
  modelId: string;
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  apiFormat?: HarnessBedrockApiFormat;
  additionalParams?: any;
}
const HarnessBedrockModelConfig = /*@__PURE__*/ __L.at(
  __c35,
  5,
) as any as S.Schema<HarnessBedrockModelConfig>;
export type ApiKeyArn = string;
export type HarnessOpenAiApiBase = string | redacted.Redacted<string>;
export type HarnessOpenAiApiFormat = "chat_completions" | "responses" | (string & {});
const HarnessOpenAiApiFormat = S.String;

export interface HarnessOpenAiModelConfig {
  modelId: string;
  apiKeyArn: string;
  apiBase?: string | redacted.Redacted<string>;
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  apiFormat?: HarnessOpenAiApiFormat;
  additionalParams?: any;
}
const HarnessOpenAiModelConfig = /*@__PURE__*/ __L.at(
  __c35,
  6,
) as any as S.Schema<HarnessOpenAiModelConfig>;
export type TopK = number;
export interface HarnessGeminiModelConfig {
  modelId: string;
  apiKeyArn: string;
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  topK?: number;
  additionalParams?: any;
}
const HarnessGeminiModelConfig = /*@__PURE__*/ __L.at(
  __c35,
  7,
) as any as S.Schema<HarnessGeminiModelConfig>;
export type HarnessLiteLlmApiBase = string | redacted.Redacted<string>;
export interface HarnessLiteLlmModelConfig {
  modelId: string;
  apiKeyArn?: string;
  apiBase?: string | redacted.Redacted<string>;
  maxTokens?: number;
  temperature?: number;
  topP?: number;
  additionalParams?: any;
}
const HarnessLiteLlmModelConfig = /*@__PURE__*/ __L.at(
  __c36,
  0,
) as any as S.Schema<HarnessLiteLlmModelConfig>;
export type HarnessModelConfiguration =
  | {
      bedrockModelConfig: HarnessBedrockModelConfig;
      openAiModelConfig?: never;
      geminiModelConfig?: never;
      liteLlmModelConfig?: never;
    }
  | {
      bedrockModelConfig?: never;
      openAiModelConfig: HarnessOpenAiModelConfig;
      geminiModelConfig?: never;
      liteLlmModelConfig?: never;
    }
  | {
      bedrockModelConfig?: never;
      openAiModelConfig?: never;
      geminiModelConfig: HarnessGeminiModelConfig;
      liteLlmModelConfig?: never;
    }
  | {
      bedrockModelConfig?: never;
      openAiModelConfig?: never;
      geminiModelConfig?: never;
      liteLlmModelConfig: HarnessLiteLlmModelConfig;
    };
const HarnessModelConfiguration = /*@__PURE__*/ __L.at(__c36, 1);
export type HarnessSystemContentBlock = { text: string | redacted.Redacted<string> };
const HarnessSystemContentBlock = MemoryContent as any as S.Schema<HarnessSystemContentBlock>;
export type HarnessSystemPrompt = HarnessSystemContentBlock[];
const HarnessSystemPrompt = /*@__PURE__*/ __L.at(__c36, 2);
export type HarnessToolType =
  | "remote_mcp"
  | "agentcore_browser"
  | "agentcore_gateway"
  | "inline_function"
  | "agentcore_code_interpreter"
  | (string & {});
const HarnessToolType = S.String;

export type HarnessRemoteMcpUrl = string | redacted.Redacted<string>;
export type HttpHeaderKey = string;
export type HttpHeaderValue = string;
export type HttpHeadersMap = { [key: string]: string | undefined };
const HttpHeadersMap = NamespaceVariablesMap as any as S.Schema<HttpHeadersMap>;
export interface HarnessRemoteMcpConfig {
  url: string | redacted.Redacted<string>;
  headers?: { [key: string]: string | undefined };
}
const HarnessRemoteMcpConfig = /*@__PURE__*/ __L.at(
  __c36,
  3,
) as any as S.Schema<HarnessRemoteMcpConfig>;
export type HarnessBrowserArn = string;
export interface HarnessAgentCoreBrowserConfig {
  browserArn?: string;
}
const HarnessAgentCoreBrowserConfig = /*@__PURE__*/ __L.at(
  __c36,
  4,
) as any as S.Schema<HarnessAgentCoreBrowserConfig>;
export type OAuthCredentialProviderArn = string;
export type OAuthScope = string;
export type OAuthScopes = string[];
const OAuthScopes = NamespacesList as any as S.Schema<OAuthScopes>;
export type OAuthCustomParametersKey = string;
export type OAuthCustomParametersValue = string | redacted.Redacted<string>;
export type OAuthCustomParameters = {
  [key: string]: string | redacted.Redacted<string> | undefined;
};
const OAuthCustomParameters = CustomRequestParametersType as any as S.Schema<OAuthCustomParameters>;
export type OAuthGrantType =
  | "CLIENT_CREDENTIALS"
  | "AUTHORIZATION_CODE"
  | "TOKEN_EXCHANGE"
  | (string & {});
const OAuthGrantType = S.String;

export type OAuthDefaultReturnUrl = string;
export interface OAuthCredentialProvider {
  providerArn: string;
  scopes: string[];
  customParameters?: { [key: string]: string | redacted.Redacted<string> | undefined };
  grantType?: OAuthGrantType;
  defaultReturnUrl?: string;
}
const OAuthCredentialProvider = /*@__PURE__*/ __L.at(
  __c36,
  5,
) as any as S.Schema<OAuthCredentialProvider>;
export type HarnessGatewayOutboundAuth =
  | { awsIam: Record<string, never>; none?: never; oauth?: never }
  | { awsIam?: never; none: Record<string, never>; oauth?: never }
  | { awsIam?: never; none?: never; oauth: OAuthCredentialProvider };
const HarnessGatewayOutboundAuth = /*@__PURE__*/ __L.at(__c36, 6);
export interface HarnessAgentCoreGatewayConfig {
  gatewayArn: string;
  outboundAuth?: HarnessGatewayOutboundAuth;
}
const HarnessAgentCoreGatewayConfig = /*@__PURE__*/ __L.at(
  __c36,
  7,
) as any as S.Schema<HarnessAgentCoreGatewayConfig>;
export type HarnessInlineFunctionDescription = string | redacted.Redacted<string>;
export interface HarnessInlineFunctionConfig {
  description: string | redacted.Redacted<string>;
  inputSchema: any;
}
const HarnessInlineFunctionConfig = /*@__PURE__*/ __L.at(
  __c37,
  0,
) as any as S.Schema<HarnessInlineFunctionConfig>;
export type HarnessCodeInterpreterArn = string;
export interface HarnessAgentCoreCodeInterpreterConfig {
  codeInterpreterArn?: string;
}
const HarnessAgentCoreCodeInterpreterConfig = /*@__PURE__*/ __L.at(
  __c37,
  1,
) as any as S.Schema<HarnessAgentCoreCodeInterpreterConfig>;
export type HarnessToolConfiguration =
  | {
      remoteMcp: HarnessRemoteMcpConfig;
      agentCoreBrowser?: never;
      agentCoreGateway?: never;
      inlineFunction?: never;
      agentCoreCodeInterpreter?: never;
    }
  | {
      remoteMcp?: never;
      agentCoreBrowser: HarnessAgentCoreBrowserConfig;
      agentCoreGateway?: never;
      inlineFunction?: never;
      agentCoreCodeInterpreter?: never;
    }
  | {
      remoteMcp?: never;
      agentCoreBrowser?: never;
      agentCoreGateway: HarnessAgentCoreGatewayConfig;
      inlineFunction?: never;
      agentCoreCodeInterpreter?: never;
    }
  | {
      remoteMcp?: never;
      agentCoreBrowser?: never;
      agentCoreGateway?: never;
      inlineFunction: HarnessInlineFunctionConfig;
      agentCoreCodeInterpreter?: never;
    }
  | {
      remoteMcp?: never;
      agentCoreBrowser?: never;
      agentCoreGateway?: never;
      inlineFunction?: never;
      agentCoreCodeInterpreter: HarnessAgentCoreCodeInterpreterConfig;
    };
const HarnessToolConfiguration = /*@__PURE__*/ __L.at(__c37, 2);
export interface HarnessTool {
  type: HarnessToolType;
  name?: string;
  config?: HarnessToolConfiguration;
}
const HarnessTool = /*@__PURE__*/ __L.at(__c37, 3) as any as S.Schema<HarnessTool>;
export type HarnessTools = HarnessTool[];
const HarnessTools = /*@__PURE__*/ __L.at(__c37, 4);
export type HarnessSkillPath = string;
export type HarnessSkillS3Uri = string;
export interface HarnessSkillS3Source {
  uri: string;
}
const HarnessSkillS3Source = /*@__PURE__*/ __L.at(
  __c37,
  5,
) as any as S.Schema<HarnessSkillS3Source>;
export type HarnessSkillGitUrl = string;
export interface HarnessSkillGitAuth {
  credentialArn: string;
  username?: string;
}
const HarnessSkillGitAuth = /*@__PURE__*/ __L.at(__c37, 6) as any as S.Schema<HarnessSkillGitAuth>;
export interface HarnessSkillGitSource {
  url: string;
  path?: string;
  auth?: HarnessSkillGitAuth;
}
const HarnessSkillGitSource = /*@__PURE__*/ __L.at(
  __c37,
  7,
) as any as S.Schema<HarnessSkillGitSource>;
export type HarnessAwsSkillPath = string;
export type HarnessAwsSkillPaths = string[];
const HarnessAwsSkillPaths = NamespacesList as any as S.Schema<HarnessAwsSkillPaths>;
export interface HarnessSkillAwsSkillsSource {
  paths?: string[];
}
const HarnessSkillAwsSkillsSource = /*@__PURE__*/ __L.at(
  __c38,
  0,
) as any as S.Schema<HarnessSkillAwsSkillsSource>;
export type HarnessSkill =
  | { path: string; s3?: never; git?: never; awsSkills?: never }
  | { path?: never; s3: HarnessSkillS3Source; git?: never; awsSkills?: never }
  | { path?: never; s3?: never; git: HarnessSkillGitSource; awsSkills?: never }
  | { path?: never; s3?: never; git?: never; awsSkills: HarnessSkillAwsSkillsSource };
const HarnessSkill = /*@__PURE__*/ __L.at(__c38, 1);
export type HarnessSkills = HarnessSkill[];
const HarnessSkills = /*@__PURE__*/ __L.at(__c38, 2);
export type HarnessAllowedTool = string;
export type HarnessAllowedTools = string[];
const HarnessAllowedTools = NamespacesList as any as S.Schema<HarnessAllowedTools>;
export interface InvokeHarnessRequest {
  harnessArn: string;
  qualifier?: string;
  runtimeSessionId: string;
  runtimeUserId?: string;
  traceParent?: string;
  traceState?: string;
  traceId?: string;
  baggage?: string;
  messages: HarnessMessage[];
  model?: HarnessModelConfiguration;
  systemPrompt?: HarnessSystemContentBlock[];
  tools?: HarnessTool[];
  skills?: HarnessSkill[];
  allowedTools?: string[];
  maxIterations?: number;
  maxTokens?: number;
  timeoutSeconds?: number;
  actorId?: string;
}
const InvokeHarnessRequest = /*@__PURE__*/ __L.at(
  __c38,
  3,
) as any as S.Schema<InvokeHarnessRequest>;
export interface HarnessMessageStartEvent {
  role: HarnessConversationRole;
}
const HarnessMessageStartEvent = /*@__PURE__*/ __L.at(
  __c38,
  4,
) as any as S.Schema<HarnessMessageStartEvent>;
export interface HarnessToolUseBlockStart {
  toolUseId: string;
  name: string;
  type?: HarnessToolUseType;
  serverName?: string;
}
const HarnessToolUseBlockStart = /*@__PURE__*/ __L.at(
  __c38,
  5,
) as any as S.Schema<HarnessToolUseBlockStart>;
export interface HarnessToolResultBlockStart {
  toolUseId: string;
  status?: HarnessToolUseStatus;
}
const HarnessToolResultBlockStart = /*@__PURE__*/ __L.at(
  __c38,
  6,
) as any as S.Schema<HarnessToolResultBlockStart>;
export type HarnessContentBlockStart =
  | { toolUse: HarnessToolUseBlockStart; toolResult?: never }
  | { toolUse?: never; toolResult: HarnessToolResultBlockStart };
const HarnessContentBlockStart = /*@__PURE__*/ __L.at(__c38, 7);
export interface HarnessContentBlockStartEvent {
  contentBlockIndex: number;
  start: HarnessContentBlockStart;
}
const HarnessContentBlockStartEvent = /*@__PURE__*/ __L.at(
  __c39,
  0,
) as any as S.Schema<HarnessContentBlockStartEvent>;
export interface HarnessToolUseBlockDelta {
  input: string | redacted.Redacted<string>;
}
const HarnessToolUseBlockDelta = /*@__PURE__*/ __L.at(
  __c39,
  1,
) as any as S.Schema<HarnessToolUseBlockDelta>;
export type HarnessToolResultBlockDelta =
  | { text: string | redacted.Redacted<string>; json?: never }
  | { text?: never; json: any };
export type HarnessToolResultBlocksDelta = HarnessToolResultBlockDelta[];
const HarnessToolResultBlocksDelta =
  HarnessToolResultContentBlocks as any as S.Schema<HarnessToolResultBlocksDelta>;
export type HarnessReasoningContentBlockDelta =
  | { text: string; redactedContent?: never; signature?: never }
  | { text?: never; redactedContent: Uint8Array | redacted.Redacted<Uint8Array>; signature?: never }
  | { text?: never; redactedContent?: never; signature: string };
const HarnessReasoningContentBlockDelta = /*@__PURE__*/ __L.at(__c39, 2);
export interface HarnessToolResultMetadataBlockDelta {
  metadata: string | redacted.Redacted<string>;
}
const HarnessToolResultMetadataBlockDelta = /*@__PURE__*/ __L.at(
  __c39,
  3,
) as any as S.Schema<HarnessToolResultMetadataBlockDelta>;
export type HarnessContentBlockDelta =
  | {
      text: string | redacted.Redacted<string>;
      toolUse?: never;
      toolResult?: never;
      reasoningContent?: never;
      toolResultMetadata?: never;
    }
  | {
      text?: never;
      toolUse: HarnessToolUseBlockDelta;
      toolResult?: never;
      reasoningContent?: never;
      toolResultMetadata?: never;
    }
  | {
      text?: never;
      toolUse?: never;
      toolResult: HarnessToolResultBlockDelta[];
      reasoningContent?: never;
      toolResultMetadata?: never;
    }
  | {
      text?: never;
      toolUse?: never;
      toolResult?: never;
      reasoningContent: HarnessReasoningContentBlockDelta;
      toolResultMetadata?: never;
    }
  | {
      text?: never;
      toolUse?: never;
      toolResult?: never;
      reasoningContent?: never;
      toolResultMetadata: HarnessToolResultMetadataBlockDelta;
    };
const HarnessContentBlockDelta = /*@__PURE__*/ __L.at(__c39, 4);
export interface HarnessContentBlockDeltaEvent {
  contentBlockIndex: number;
  delta: HarnessContentBlockDelta;
}
const HarnessContentBlockDeltaEvent = /*@__PURE__*/ __L.at(
  __c39,
  5,
) as any as S.Schema<HarnessContentBlockDeltaEvent>;
export interface HarnessContentBlockStopEvent {
  contentBlockIndex: number;
}
const HarnessContentBlockStopEvent = /*@__PURE__*/ __L.at(
  __c39,
  6,
) as any as S.Schema<HarnessContentBlockStopEvent>;
export type HarnessStopReason =
  | "end_turn"
  | "tool_use"
  | "tool_result"
  | "max_tokens"
  | "stop_sequence"
  | "content_filtered"
  | "malformed_model_output"
  | "malformed_tool_use"
  | "interrupted"
  | "partial_turn"
  | "model_context_window_exceeded"
  | "max_iterations_exceeded"
  | "max_output_tokens_exceeded"
  | "timeout_exceeded"
  | "hook_stopped"
  | (string & {});
const HarnessStopReason = S.String;

export interface HarnessMessageStopEvent {
  stopReason: HarnessStopReason;
}
const HarnessMessageStopEvent = /*@__PURE__*/ __L.at(
  __c39,
  7,
) as any as S.Schema<HarnessMessageStopEvent>;
export interface HarnessTokenUsage {
  inputTokens: number;
  outputTokens: number;
  totalTokens: number;
  cacheReadInputTokens?: number;
  cacheWriteInputTokens?: number;
}
const HarnessTokenUsage = /*@__PURE__*/ __L.at(__c40, 0) as any as S.Schema<HarnessTokenUsage>;
export interface HarnessStreamMetrics {
  latencyMs: number;
}
const HarnessStreamMetrics = /*@__PURE__*/ __L.at(
  __c40,
  1,
) as any as S.Schema<HarnessStreamMetrics>;
export interface HarnessMetadataEvent {
  usage: HarnessTokenUsage;
  metrics: HarnessStreamMetrics;
}
const HarnessMetadataEvent = /*@__PURE__*/ __L.at(
  __c40,
  2,
) as any as S.Schema<HarnessMetadataEvent>;
export type HarnessHookEventId = string;
export type HarnessHookName = string;
export type HarnessHookEventType =
  | "before_tool_call"
  | "after_tool_call"
  | "before_invocation"
  | "after_invocation"
  | (string & {});
const HarnessHookEventType = S.String;

export type HarnessHookDecision = "allow" | "deny" | (string & {});
const HarnessHookDecision = S.String;

export interface HarnessHookEvent {
  hookEventId: string;
  name: string;
  type: HarnessHookEventType;
  decision?: HarnessHookDecision;
  reason?: string;
}
const HarnessHookEvent = /*@__PURE__*/ __L.at(__c40, 3) as any as S.Schema<HarnessHookEvent>;
export type InvokeHarnessStreamOutput =
  | {
      messageStart: HarnessMessageStartEvent;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
      messageStop?: never;
      metadata?: never;
      internalServerException?: never;
      validationException?: never;
      runtimeClientError?: never;
      hookEvent?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart: HarnessContentBlockStartEvent;
      contentBlockDelta?: never;
      contentBlockStop?: never;
      messageStop?: never;
      metadata?: never;
      internalServerException?: never;
      validationException?: never;
      runtimeClientError?: never;
      hookEvent?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart?: never;
      contentBlockDelta: HarnessContentBlockDeltaEvent;
      contentBlockStop?: never;
      messageStop?: never;
      metadata?: never;
      internalServerException?: never;
      validationException?: never;
      runtimeClientError?: never;
      hookEvent?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop: HarnessContentBlockStopEvent;
      messageStop?: never;
      metadata?: never;
      internalServerException?: never;
      validationException?: never;
      runtimeClientError?: never;
      hookEvent?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
      messageStop: HarnessMessageStopEvent;
      metadata?: never;
      internalServerException?: never;
      validationException?: never;
      runtimeClientError?: never;
      hookEvent?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
      messageStop?: never;
      metadata: HarnessMetadataEvent;
      internalServerException?: never;
      validationException?: never;
      runtimeClientError?: never;
      hookEvent?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
      messageStop?: never;
      metadata?: never;
      internalServerException: InternalServerException;
      validationException?: never;
      runtimeClientError?: never;
      hookEvent?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
      messageStop?: never;
      metadata?: never;
      internalServerException?: never;
      validationException: ValidationException;
      runtimeClientError?: never;
      hookEvent?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
      messageStop?: never;
      metadata?: never;
      internalServerException?: never;
      validationException?: never;
      runtimeClientError: RuntimeClientError;
      hookEvent?: never;
    }
  | {
      messageStart?: never;
      contentBlockStart?: never;
      contentBlockDelta?: never;
      contentBlockStop?: never;
      messageStop?: never;
      metadata?: never;
      internalServerException?: never;
      validationException?: never;
      runtimeClientError?: never;
      hookEvent: HarnessHookEvent;
    };
const InvokeHarnessStreamOutput = /*@__PURE__*/ __L.at(__c40, 4) as any as S.Schema<
  stream.Stream<InvokeHarnessStreamOutput, Error, never>
>;
export interface InvokeHarnessResponse {
  stream: stream.Stream<InvokeHarnessStreamOutput, Error, never>;
}
const InvokeHarnessResponse = /*@__PURE__*/ __L.at(
  __c40,
  5,
) as any as S.Schema<InvokeHarnessResponse>;
export interface ListABTestsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListABTestsRequest = /*@__PURE__*/ __L.at(__c40, 6) as any as S.Schema<ListABTestsRequest>;
export interface ABTestSummary {
  abTestId: string;
  abTestArn: string;
  name: string;
  status: ABTestStatus;
  executionStatus: ABTestExecutionStatus;
  description?: string;
  gatewayArn?: string;
  createdAt: Date;
  updatedAt: Date;
}
const ABTestSummary = /*@__PURE__*/ __L.at(__c40, 7) as any as S.Schema<ABTestSummary>;
export type ABTestSummaryList = ABTestSummary[];
const ABTestSummaryList = /*@__PURE__*/ __L.at(__c41, 0);
export interface ListABTestsResponse {
  abTests: ABTestSummary[];
  nextToken?: string;
}
const ListABTestsResponse = /*@__PURE__*/ __L.at(__c41, 1) as any as S.Schema<ListABTestsResponse>;
export type MaxResults = number;
export type PaginationToken = string;
export interface ListActorsInput {
  memoryId: string;
  maxResults?: number;
  nextToken?: string;
}
const ListActorsInput = /*@__PURE__*/ __L.at(__c41, 2) as any as S.Schema<ListActorsInput>;
export interface ActorSummary {
  actorId: string;
}
const ActorSummary = /*@__PURE__*/ __L.at(__c41, 3) as any as S.Schema<ActorSummary>;
export type ActorSummaryList = ActorSummary[];
const ActorSummaryList = /*@__PURE__*/ __L.at(__c41, 4);
export interface ListActorsOutput {
  actorSummaries: ActorSummary[];
  nextToken?: string;
}
const ListActorsOutput = /*@__PURE__*/ __L.at(__c41, 5) as any as S.Schema<ListActorsOutput>;
export interface ListBatchEvaluationsRequest {
  maxResults?: number;
  nextToken?: string;
}
const ListBatchEvaluationsRequest = /*@__PURE__*/ __L.at(
  __c41,
  6,
) as any as S.Schema<ListBatchEvaluationsRequest>;
export interface BatchEvaluationSummary {
  batchEvaluationId: string;
  batchEvaluationArn: string;
  batchEvaluationName: string;
  status: BatchEvaluationStatus;
  createdAt: Date;
  description?: string;
  evaluators?: Evaluator[];
  insights?: Insight[];
  evaluationResults?: EvaluationJobResults;
  errorDetails?: string[];
  kmsKeyArn?: string;
  updatedAt?: Date;
}
const BatchEvaluationSummary = /*@__PURE__*/ __L.at(
  __c41,
  7,
) as any as S.Schema<BatchEvaluationSummary>;
export type BatchEvaluationSummaryList = BatchEvaluationSummary[];
const BatchEvaluationSummaryList = /*@__PURE__*/ __L.at(__c42, 0);
export interface ListBatchEvaluationsResponse {
  batchEvaluations: BatchEvaluationSummary[];
  nextToken?: string;
}
const ListBatchEvaluationsResponse = /*@__PURE__*/ __L.at(
  __c42,
  1,
) as any as S.Schema<ListBatchEvaluationsResponse>;
export type NextToken = string;
export interface ListBrowserSessionsRequest {
  browserIdentifier: string;
  maxResults?: number;
  nextToken?: string;
  status?: BrowserSessionStatus;
}
const ListBrowserSessionsRequest = /*@__PURE__*/ __L.at(
  __c42,
  2,
) as any as S.Schema<ListBrowserSessionsRequest>;
export interface BrowserSessionSummary {
  browserIdentifier: string;
  sessionId: string;
  name?: string;
  status: BrowserSessionStatus;
  createdAt: Date;
  lastUpdatedAt?: Date;
}
const BrowserSessionSummary = /*@__PURE__*/ __L.at(
  __c42,
  3,
) as any as S.Schema<BrowserSessionSummary>;
export type BrowserSessionSummaries = BrowserSessionSummary[];
const BrowserSessionSummaries = /*@__PURE__*/ __L.at(__c42, 4);
export interface ListBrowserSessionsResponse {
  items: BrowserSessionSummary[];
  nextToken?: string;
}
const ListBrowserSessionsResponse = /*@__PURE__*/ __L.at(
  __c42,
  5,
) as any as S.Schema<ListBrowserSessionsResponse>;
export interface ListCodeInterpreterSessionsRequest {
  codeInterpreterIdentifier: string;
  maxResults?: number;
  nextToken?: string;
  status?: CodeInterpreterSessionStatus;
}
const ListCodeInterpreterSessionsRequest = /*@__PURE__*/ __L.at(
  __c42,
  6,
) as any as S.Schema<ListCodeInterpreterSessionsRequest>;
export interface CodeInterpreterSessionSummary {
  codeInterpreterIdentifier: string;
  sessionId: string;
  name?: string;
  status: CodeInterpreterSessionStatus;
  createdAt: Date;
  lastUpdatedAt?: Date;
}
const CodeInterpreterSessionSummary = /*@__PURE__*/ __L.at(
  __c42,
  7,
) as any as S.Schema<CodeInterpreterSessionSummary>;
export type CodeInterpreterSessionSummaries = CodeInterpreterSessionSummary[];
const CodeInterpreterSessionSummaries = /*@__PURE__*/ __L.at(__c43, 0);
export interface ListCodeInterpreterSessionsResponse {
  items: CodeInterpreterSessionSummary[];
  nextToken?: string;
}
const ListCodeInterpreterSessionsResponse = /*@__PURE__*/ __L.at(
  __c43,
  1,
) as any as S.Schema<ListCodeInterpreterSessionsResponse>;
export interface BranchFilter {
  name: string;
  includeParentBranches?: boolean;
}
const BranchFilter = /*@__PURE__*/ __L.at(__c43, 2) as any as S.Schema<BranchFilter>;
export type LeftExpression = { metadataKey: string };
const LeftExpression = /*@__PURE__*/ __L.at(__c43, 3);
export type OperatorType = "EQUALS_TO" | "EXISTS" | "NOT_EXISTS" | (string & {});
const OperatorType = S.String;

export type RightExpression = { metadataValue: MetadataValue };
const RightExpression = /*@__PURE__*/ __L.at(__c43, 4);
export interface EventMetadataFilterExpression {
  left: LeftExpression;
  operator: OperatorType;
  right?: RightExpression;
}
const EventMetadataFilterExpression = /*@__PURE__*/ __L.at(
  __c43,
  5,
) as any as S.Schema<EventMetadataFilterExpression>;
export type EventMetadataFilterList = EventMetadataFilterExpression[];
const EventMetadataFilterList = /*@__PURE__*/ __L.at(__c43, 6);
export interface FilterInput {
  branch?: BranchFilter;
  eventMetadata?: EventMetadataFilterExpression[];
}
const FilterInput = /*@__PURE__*/ __L.at(__c43, 7) as any as S.Schema<FilterInput>;
export interface ListEventsInput {
  memoryId: string;
  sessionId: string;
  actorId: string;
  includePayloads?: boolean;
  filter?: FilterInput;
  maxResults?: number;
  nextToken?: string;
}
const ListEventsInput = /*@__PURE__*/ __L.at(__c44, 0) as any as S.Schema<ListEventsInput>;
export type EventList = Event[];
const EventList = /*@__PURE__*/ __L.at(__c44, 1);
export interface ListEventsOutput {
  events: Event[];
  nextToken?: string;
}
const ListEventsOutput = /*@__PURE__*/ __L.at(__c44, 2) as any as S.Schema<ListEventsOutput>;
export type ExtractionJobStatus = "FAILED" | (string & {});
const ExtractionJobStatus = S.String;

export interface ExtractionJobFilterInput {
  strategyId?: string;
  sessionId?: string;
  actorId?: string;
  status?: ExtractionJobStatus;
}
const ExtractionJobFilterInput = /*@__PURE__*/ __L.at(
  __c44,
  3,
) as any as S.Schema<ExtractionJobFilterInput>;
export interface ListMemoryExtractionJobsInput {
  memoryId: string;
  maxResults?: number;
  filter?: ExtractionJobFilterInput;
  nextToken?: string;
}
const ListMemoryExtractionJobsInput = /*@__PURE__*/ __L.at(
  __c44,
  4,
) as any as S.Schema<ListMemoryExtractionJobsInput>;
export interface MessageMetadata {
  eventId: string;
  messageIndex: number;
}
const MessageMetadata = /*@__PURE__*/ __L.at(__c44, 5) as any as S.Schema<MessageMetadata>;
export type MessagesList = MessageMetadata[];
const MessagesList = /*@__PURE__*/ __L.at(__c44, 6);
export type ExtractionJobMessages = { messagesList: MessageMetadata[] };
const ExtractionJobMessages = /*@__PURE__*/ __L.at(__c44, 7);
export interface ExtractionJobMetadata {
  jobID: string;
  messages: ExtractionJobMessages;
  status?: ExtractionJobStatus;
  failureReason?: string;
  strategyId?: string;
  sessionId?: string;
  actorId?: string;
}
const ExtractionJobMetadata = /*@__PURE__*/ __L.at(
  __c45,
  0,
) as any as S.Schema<ExtractionJobMetadata>;
export type ExtractionJobMetadataList = ExtractionJobMetadata[];
const ExtractionJobMetadataList = /*@__PURE__*/ __L.at(__c45, 1);
export interface ListMemoryExtractionJobsOutput {
  jobs: ExtractionJobMetadata[];
  nextToken?: string;
}
const ListMemoryExtractionJobsOutput = /*@__PURE__*/ __L.at(
  __c45,
  2,
) as any as S.Schema<ListMemoryExtractionJobsOutput>;
export type MemoryRecordLeftExpression = { metadataKey: string };
const MemoryRecordLeftExpression = LeftExpression as any as S.Schema<MemoryRecordLeftExpression>;
export type MemoryRecordOperatorType =
  | "EQUALS_TO"
  | "EXISTS"
  | "NOT_EXISTS"
  | "BEFORE"
  | "AFTER"
  | "CONTAINS"
  | "GREATER_THAN"
  | "GREATER_THAN_OR_EQUALS"
  | "LESS_THAN"
  | "LESS_THAN_OR_EQUALS"
  | (string & {});
const MemoryRecordOperatorType = S.String;

export type MemoryRecordRightExpression = { metadataValue: MemoryRecordMetadataValue };
const MemoryRecordRightExpression = /*@__PURE__*/ __L.at(__c45, 3);
export interface MemoryMetadataFilterExpression {
  left: MemoryRecordLeftExpression;
  operator: MemoryRecordOperatorType;
  right?: MemoryRecordRightExpression;
}
const MemoryMetadataFilterExpression = /*@__PURE__*/ __L.at(
  __c45,
  4,
) as any as S.Schema<MemoryMetadataFilterExpression>;
export type MemoryMetadataFilterList = MemoryMetadataFilterExpression[];
const MemoryMetadataFilterList = /*@__PURE__*/ __L.at(__c45, 5);
export interface ListMemoryRecordsInput {
  memoryId: string;
  namespace?: string;
  namespacePath?: string;
  memoryStrategyId?: string;
  maxResults?: number;
  nextToken?: string;
  metadataFilters?: MemoryMetadataFilterExpression[];
}
const ListMemoryRecordsInput = /*@__PURE__*/ __L.at(
  __c45,
  6,
) as any as S.Schema<ListMemoryRecordsInput>;
export interface MemoryRecordSummary {
  memoryRecordId: string;
  content: MemoryContent;
  memoryStrategyId?: string;
  namespaces: string[];
  createdAt: Date;
  score?: number;
  metadata?: { [key: string]: MemoryRecordMetadataValue | undefined };
}
const MemoryRecordSummary = /*@__PURE__*/ __L.at(__c45, 7) as any as S.Schema<MemoryRecordSummary>;
export type MemoryRecordSummaryList = MemoryRecordSummary[];
const MemoryRecordSummaryList = /*@__PURE__*/ __L.at(__c46, 0);
export interface ListMemoryRecordsOutput {
  memoryRecordSummaries: MemoryRecordSummary[];
  nextToken?: string;
}
const ListMemoryRecordsOutput = /*@__PURE__*/ __L.at(
  __c46,
  1,
) as any as S.Schema<ListMemoryRecordsOutput>;
export interface ListPaymentInstrumentsRequest {
  userId?: string;
  agentName?: string;
  paymentManagerArn: string;
  paymentConnectorId?: string;
  nextToken?: string;
  maxResults?: number;
}
const ListPaymentInstrumentsRequest = /*@__PURE__*/ __L.at(
  __c46,
  2,
) as any as S.Schema<ListPaymentInstrumentsRequest>;
export interface PaymentInstrumentSummary {
  paymentInstrumentId: string;
  paymentManagerArn: string;
  paymentConnectorId: string;
  userId: string;
  paymentInstrumentType: PaymentInstrumentType;
  status: PaymentInstrumentStatus;
  createdAt: Date;
  updatedAt: Date;
}
const PaymentInstrumentSummary = /*@__PURE__*/ __L.at(
  __c46,
  3,
) as any as S.Schema<PaymentInstrumentSummary>;
export type PaymentInstrumentSummaryList = PaymentInstrumentSummary[];
const PaymentInstrumentSummaryList = /*@__PURE__*/ __L.at(__c46, 4);
export interface ListPaymentInstrumentsResponse {
  paymentInstruments: PaymentInstrumentSummary[];
  nextToken?: string;
}
const ListPaymentInstrumentsResponse = /*@__PURE__*/ __L.at(
  __c46,
  5,
) as any as S.Schema<ListPaymentInstrumentsResponse>;
export interface ListPaymentSessionsRequest {
  userId?: string;
  agentName?: string;
  paymentManagerArn: string;
  nextToken?: string;
  maxResults?: number;
}
const ListPaymentSessionsRequest = /*@__PURE__*/ __L.at(
  __c46,
  6,
) as any as S.Schema<ListPaymentSessionsRequest>;
export interface PaymentSessionSummary {
  paymentSessionId: string;
  paymentManagerArn: string;
  userId: string;
  expiryTimeInMinutes: number;
  createdAt: Date;
  updatedAt: Date;
}
const PaymentSessionSummary = /*@__PURE__*/ __L.at(
  __c46,
  7,
) as any as S.Schema<PaymentSessionSummary>;
export type PaymentSessionSummaryList = PaymentSessionSummary[];
const PaymentSessionSummaryList = /*@__PURE__*/ __L.at(__c47, 0);
export interface ListPaymentSessionsResponse {
  paymentSessions: PaymentSessionSummary[];
  nextToken?: string;
}
const ListPaymentSessionsResponse = /*@__PURE__*/ __L.at(
  __c47,
  1,
) as any as S.Schema<ListPaymentSessionsResponse>;
export interface ListRecommendationsRequest {
  maxResults?: number;
  nextToken?: string;
  statusFilter?: RecommendationStatus;
}
const ListRecommendationsRequest = /*@__PURE__*/ __L.at(
  __c47,
  2,
) as any as S.Schema<ListRecommendationsRequest>;
export interface RecommendationSummary {
  recommendationId: string;
  recommendationArn: string;
  name: string;
  description?: string;
  type: RecommendationType;
  status: RecommendationStatus;
  createdAt: Date;
  updatedAt: Date;
}
const RecommendationSummary = /*@__PURE__*/ __L.at(
  __c47,
  3,
) as any as S.Schema<RecommendationSummary>;
export type RecommendationSummaryList = RecommendationSummary[];
const RecommendationSummaryList = /*@__PURE__*/ __L.at(__c47, 4);
export interface ListRecommendationsResponse {
  recommendationSummaries: RecommendationSummary[];
  nextToken?: string;
}
const ListRecommendationsResponse = /*@__PURE__*/ __L.at(
  __c47,
  5,
) as any as S.Schema<ListRecommendationsResponse>;
export type EventFilterCondition = "HAS_EVENTS" | (string & {});
const EventFilterCondition = S.String;

export interface SessionFilter {
  eventFilter?: EventFilterCondition;
}
const SessionFilter = /*@__PURE__*/ __L.at(__c47, 6) as any as S.Schema<SessionFilter>;
export interface ListSessionsInput {
  memoryId: string;
  actorId: string;
  maxResults?: number;
  nextToken?: string;
  filter?: SessionFilter;
}
const ListSessionsInput = /*@__PURE__*/ __L.at(__c47, 7) as any as S.Schema<ListSessionsInput>;
export interface SessionSummary {
  sessionId: string;
  actorId: string;
  createdAt: Date;
}
const SessionSummary = /*@__PURE__*/ __L.at(__c48, 0) as any as S.Schema<SessionSummary>;
export type SessionSummaryList = SessionSummary[];
const SessionSummaryList = /*@__PURE__*/ __L.at(__c48, 1);
export interface ListSessionsOutput {
  sessionSummaries: SessionSummary[];
  nextToken?: string;
}
const ListSessionsOutput = /*@__PURE__*/ __L.at(__c48, 2) as any as S.Schema<ListSessionsOutput>;
export type PaymentType = "CRYPTO_X402" | "MPP" | (string & {});
const PaymentType = S.String;

export type PaymentDocument = unknown;
export type Permit2AllowanceLimit = string;
export interface CryptoX402PaymentInput {
  version: string;
  payload: any;
  permit2AllowanceLimit?: string;
}
const CryptoX402PaymentInput = /*@__PURE__*/ __L.at(
  __c48,
  3,
) as any as S.Schema<CryptoX402PaymentInput>;
export type Version = string;
export type WwwAuthenticateHeader = string;
export type WwwAuthenticateHeaderList = string[];
const WwwAuthenticateHeaderList = NamespacesList as any as S.Schema<WwwAuthenticateHeaderList>;
export interface MppPaymentInput {
  version: string;
  wwwAuthenticateHeaders: string[];
  buyerPaysGasFees?: boolean;
}
const MppPaymentInput = /*@__PURE__*/ __L.at(__c48, 4) as any as S.Schema<MppPaymentInput>;
export type PaymentInput =
  | { cryptoX402: CryptoX402PaymentInput; mpp?: never }
  | { cryptoX402?: never; mpp: MppPaymentInput };
const PaymentInput = /*@__PURE__*/ __L.at(__c48, 5);
export interface ProcessPaymentRequest {
  userId?: string;
  agentName?: string;
  paymentManagerArn: string;
  paymentSessionId: string;
  paymentInstrumentId: string;
  paymentType: PaymentType;
  paymentInput: PaymentInput;
  clientToken?: string;
}
const ProcessPaymentRequest = /*@__PURE__*/ __L.at(
  __c48,
  6,
) as any as S.Schema<ProcessPaymentRequest>;
export type ProcessPaymentId = string;
export type PaymentStatus = "PROOF_GENERATED" | (string & {});
const PaymentStatus = S.String;

export interface CryptoX402PaymentOutput {
  version: string;
  payload: any;
}
const CryptoX402PaymentOutput = /*@__PURE__*/ __L.at(
  __c48,
  7,
) as any as S.Schema<CryptoX402PaymentOutput>;
export type MppPaymentCredential = string | redacted.Redacted<string>;
export interface MppPaymentOutput {
  version: string;
  selectedPaymentId: string;
  paymentCredential: string | redacted.Redacted<string>;
}
const MppPaymentOutput = /*@__PURE__*/ __L.at(__c49, 0) as any as S.Schema<MppPaymentOutput>;
export type PaymentOutput =
  | { cryptoX402: CryptoX402PaymentOutput; mpp?: never }
  | { cryptoX402?: never; mpp: MppPaymentOutput };
const PaymentOutput = /*@__PURE__*/ __L.at(__c49, 1);
export interface ProcessPaymentResponse {
  processPaymentId: string;
  paymentManagerArn: string;
  paymentSessionId: string;
  paymentInstrumentId: string;
  paymentType: PaymentType;
  status: PaymentStatus;
  paymentOutput: PaymentOutput;
  createdAt: Date;
  updatedAt: Date;
}
const ProcessPaymentResponse = /*@__PURE__*/ __L.at(
  __c49,
  2,
) as any as S.Schema<ProcessPaymentResponse>;
export interface SearchCriteria {
  searchQuery: string | redacted.Redacted<string>;
  memoryStrategyId?: string;
  topK?: number;
  metadataFilters?: MemoryMetadataFilterExpression[];
}
const SearchCriteria = /*@__PURE__*/ __L.at(__c49, 3) as any as S.Schema<SearchCriteria>;
export interface RetrieveMemoryRecordsInput {
  memoryId: string;
  namespace?: string;
  namespacePath?: string;
  searchCriteria: SearchCriteria;
  nextToken?: string;
  maxResults?: number;
}
const RetrieveMemoryRecordsInput = /*@__PURE__*/ __L.at(
  __c49,
  4,
) as any as S.Schema<RetrieveMemoryRecordsInput>;
export interface RetrieveMemoryRecordsOutput {
  memoryRecordSummaries: MemoryRecordSummary[];
  nextToken?: string;
}
const RetrieveMemoryRecordsOutput = /*@__PURE__*/ __L.at(
  __c49,
  5,
) as any as S.Schema<RetrieveMemoryRecordsOutput>;
export interface SaveBrowserSessionProfileRequest {
  traceId?: string;
  traceParent?: string;
  profileIdentifier: string;
  browserIdentifier: string;
  sessionId: string;
  clientToken?: string;
}
const SaveBrowserSessionProfileRequest = /*@__PURE__*/ __L.at(
  __c49,
  6,
) as any as S.Schema<SaveBrowserSessionProfileRequest>;
export interface SaveBrowserSessionProfileResponse {
  profileIdentifier: string;
  browserIdentifier: string;
  sessionId: string;
  lastUpdatedAt: Date;
}
const SaveBrowserSessionProfileResponse = /*@__PURE__*/ __L.at(
  __c49,
  7,
) as any as S.Schema<SaveBrowserSessionProfileResponse>;
export type RegistryIdentifier = string;
export type RegistryIdList = string[];
const RegistryIdList = NamespacesList as any as S.Schema<RegistryIdList>;
export type MetadataFilterExpression = unknown;
export interface SearchRegistryRecordsRequest {
  searchQuery: string;
  registryIds: string[];
  maxResults?: number;
  filters?: any;
}
const SearchRegistryRecordsRequest = /*@__PURE__*/ __L.at(
  __c50,
  0,
) as any as S.Schema<SearchRegistryRecordsRequest>;
export type RegistryArn = string;
export type RegistryRecordArn = string;
export type RegistryRecordId = string;
export type RegistryRecordName = string;
export type Description = string | redacted.Redacted<string>;
export type DescriptorType = "MCP" | "A2A" | "CUSTOM" | "AGENT_SKILLS" | (string & {});
const DescriptorType = S.String;

export type SchemaVersion = string;
export type InlineContent = string;
export interface ServerDefinition {
  schemaVersion?: string;
  inlineContent?: string;
}
const ServerDefinition = /*@__PURE__*/ __L.at(__c50, 1) as any as S.Schema<ServerDefinition>;
export interface ToolsDefinition {
  protocolVersion?: string;
  inlineContent?: string;
}
const ToolsDefinition = /*@__PURE__*/ __L.at(__c50, 2) as any as S.Schema<ToolsDefinition>;
export interface McpDescriptor {
  server: ServerDefinition;
  tools: ToolsDefinition;
}
const McpDescriptor = /*@__PURE__*/ __L.at(__c50, 3) as any as S.Schema<McpDescriptor>;
export interface AgentCardDefinition {
  schemaVersion?: string;
  inlineContent?: string;
}
const AgentCardDefinition = ServerDefinition as any as S.Schema<AgentCardDefinition>;
export interface A2aDescriptor {
  agentCard: AgentCardDefinition;
}
const A2aDescriptor = /*@__PURE__*/ __L.at(__c50, 4) as any as S.Schema<A2aDescriptor>;
export interface CustomDescriptor {
  inlineContent?: string;
}
const CustomDescriptor = /*@__PURE__*/ __L.at(__c50, 5) as any as S.Schema<CustomDescriptor>;
export interface SkillMdDefinition {
  inlineContent?: string;
}
const SkillMdDefinition = CustomDescriptor as any as S.Schema<SkillMdDefinition>;
export interface SkillDefinition {
  schemaVersion?: string;
  inlineContent?: string;
}
const SkillDefinition = ServerDefinition as any as S.Schema<SkillDefinition>;
export interface AgentSkillsDescriptor {
  skillMd: SkillMdDefinition;
  skillDefinition?: SkillDefinition;
}
const AgentSkillsDescriptor = /*@__PURE__*/ __L.at(
  __c50,
  6,
) as any as S.Schema<AgentSkillsDescriptor>;
export interface Descriptors {
  mcp?: McpDescriptor;
  a2a?: A2aDescriptor;
  custom?: CustomDescriptor;
  agentSkills?: AgentSkillsDescriptor;
}
const Descriptors = /*@__PURE__*/ __L.at(__c50, 7) as any as S.Schema<Descriptors>;
export type RegistryRecordVersion = string;
export type RegistryRecordStatus =
  | "DRAFT"
  | "PENDING_APPROVAL"
  | "APPROVED"
  | "REJECTED"
  | "DEPRECATED"
  | (string & {});
const RegistryRecordStatus = S.String;

export interface RegistryRecordSummary {
  registryArn: string;
  recordArn: string;
  recordId: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  descriptorType: DescriptorType;
  descriptors: Descriptors;
  version: string;
  status: RegistryRecordStatus;
  createdAt: Date;
  updatedAt: Date;
}
const RegistryRecordSummary = /*@__PURE__*/ __L.at(
  __c51,
  0,
) as any as S.Schema<RegistryRecordSummary>;
export type RegistryRecordSummaryList = RegistryRecordSummary[];
const RegistryRecordSummaryList = /*@__PURE__*/ __L.at(__c51, 1);
export interface SearchRegistryRecordsResponse {
  registryRecords: RegistryRecordSummary[];
}
const SearchRegistryRecordsResponse = /*@__PURE__*/ __L.at(
  __c51,
  2,
) as any as S.Schema<SearchRegistryRecordsResponse>;
export type GroundTruthTurnInput = { prompt: string };
const GroundTruthTurnInput = /*@__PURE__*/ __L.at(__c51, 3);
export interface GroundTruthTurn {
  input?: GroundTruthTurnInput;
  expectedResponse?: EvaluationContent;
}
const GroundTruthTurn = /*@__PURE__*/ __L.at(__c51, 4) as any as S.Schema<GroundTruthTurn>;
export type GroundTruthTurnList = GroundTruthTurn[];
const GroundTruthTurnList = /*@__PURE__*/ __L.at(__c51, 5);
export interface InlineGroundTruth {
  assertions?: EvaluationContent[];
  expectedTrajectory?: EvaluationExpectedTrajectory;
  turns?: GroundTruthTurn[];
}
const InlineGroundTruth = /*@__PURE__*/ __L.at(__c51, 6) as any as S.Schema<InlineGroundTruth>;
export type GroundTruthSource = { inline: InlineGroundTruth };
const GroundTruthSource = /*@__PURE__*/ __L.at(__c51, 7);
export type StringMap = { [key: string]: string | undefined };
const StringMap = TagsMap as any as S.Schema<StringMap>;
export interface SessionMetadataShape {
  sessionId: string;
  testScenarioId?: string;
  groundTruth?: GroundTruthSource;
  metadata?: { [key: string]: string | undefined };
}
const SessionMetadataShape = /*@__PURE__*/ __L.at(
  __c52,
  0,
) as any as S.Schema<SessionMetadataShape>;
export type SessionMetadataList = SessionMetadataShape[];
const SessionMetadataList = /*@__PURE__*/ __L.at(__c52, 1);
export type EvaluationMetadata = { sessionMetadata: SessionMetadataShape[] };
const EvaluationMetadata = /*@__PURE__*/ __L.at(__c52, 2);
export interface StartBatchEvaluationRequest {
  batchEvaluationName: string;
  evaluators?: Evaluator[];
  insights?: Insight[];
  dataSourceConfig: DataSourceConfig;
  clientToken?: string;
  evaluationMetadata?: EvaluationMetadata;
  tags?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
  description?: string;
  outputConfig?: OutputConfig;
}
const StartBatchEvaluationRequest = /*@__PURE__*/ __L.at(
  __c52,
  3,
) as any as S.Schema<StartBatchEvaluationRequest>;
export interface StartBatchEvaluationResponse {
  batchEvaluationId: string;
  batchEvaluationArn: string;
  batchEvaluationName: string;
  evaluators?: Evaluator[];
  insights?: Insight[];
  status: BatchEvaluationStatus;
  createdAt: Date;
  outputConfig?: OutputConfig;
  tags?: { [key: string]: string | undefined };
  kmsKeyArn?: string;
  description?: string;
}
const StartBatchEvaluationResponse = /*@__PURE__*/ __L.at(
  __c52,
  4,
) as any as S.Schema<StartBatchEvaluationResponse>;
export interface StartBrowserSessionRequest {
  traceId?: string;
  traceParent?: string;
  browserIdentifier: string;
  name?: string;
  sessionTimeoutSeconds?: number;
  viewPort?: ViewPort;
  extensions?: BrowserExtension[];
  profileConfiguration?: BrowserProfileConfiguration;
  proxyConfiguration?: ProxyConfiguration;
  enterprisePolicies?: BrowserEnterprisePolicy[];
  certificates?: Certificate[];
  filesystemConfigurations?: ToolsFileSystemConfiguration[];
  clientToken?: string;
}
const StartBrowserSessionRequest = /*@__PURE__*/ __L.at(
  __c52,
  5,
) as any as S.Schema<StartBrowserSessionRequest>;
export interface StartBrowserSessionResponse {
  browserIdentifier: string;
  sessionId: string;
  createdAt: Date;
  streams?: BrowserSessionStream;
}
const StartBrowserSessionResponse = /*@__PURE__*/ __L.at(
  __c52,
  6,
) as any as S.Schema<StartBrowserSessionResponse>;
export interface StartCodeInterpreterSessionRequest {
  traceId?: string;
  traceParent?: string;
  codeInterpreterIdentifier: string;
  name?: string;
  sessionTimeoutSeconds?: number;
  certificates?: Certificate[];
  filesystemConfigurations?: ToolsFileSystemConfiguration[];
  clientToken?: string;
}
const StartCodeInterpreterSessionRequest = /*@__PURE__*/ __L.at(
  __c52,
  7,
) as any as S.Schema<StartCodeInterpreterSessionRequest>;
export interface StartCodeInterpreterSessionResponse {
  codeInterpreterIdentifier: string;
  sessionId: string;
  createdAt: Date;
}
const StartCodeInterpreterSessionResponse = /*@__PURE__*/ __L.at(
  __c53,
  0,
) as any as S.Schema<StartCodeInterpreterSessionResponse>;
export interface ExtractionJob {
  jobId: string;
}
const ExtractionJob = /*@__PURE__*/ __L.at(__c53, 1) as any as S.Schema<ExtractionJob>;
export interface StartMemoryExtractionJobInput {
  memoryId: string;
  extractionJob: ExtractionJob;
  clientToken?: string;
}
const StartMemoryExtractionJobInput = /*@__PURE__*/ __L.at(
  __c53,
  2,
) as any as S.Schema<StartMemoryExtractionJobInput>;
export interface StartMemoryExtractionJobOutput {
  jobId: string;
}
const StartMemoryExtractionJobOutput = /*@__PURE__*/ __L.at(
  __c53,
  3,
) as any as S.Schema<StartMemoryExtractionJobOutput>;
export interface StartRecommendationRequest {
  name: string;
  description?: string;
  type: RecommendationType;
  recommendationConfig: RecommendationConfig;
  kmsKeyArn?: string;
  clientToken?: string;
  tags?: { [key: string]: string | undefined };
}
const StartRecommendationRequest = /*@__PURE__*/ __L.at(
  __c53,
  4,
) as any as S.Schema<StartRecommendationRequest>;
export interface StartRecommendationResponse {
  recommendationId: string;
  recommendationArn: string;
  name: string;
  description?: string;
  type: RecommendationType;
  recommendationConfig: RecommendationConfig;
  status: RecommendationStatus;
  createdAt: Date;
  updatedAt: Date;
}
const StartRecommendationResponse = /*@__PURE__*/ __L.at(
  __c53,
  5,
) as any as S.Schema<StartRecommendationResponse>;
export interface StopBatchEvaluationRequest {
  batchEvaluationId: string;
}
const StopBatchEvaluationRequest = /*@__PURE__*/ __L.at(
  __c53,
  6,
) as any as S.Schema<StopBatchEvaluationRequest>;
export interface StopBatchEvaluationResponse {
  batchEvaluationId: string;
  batchEvaluationArn: string;
  status: BatchEvaluationStatus;
  description?: string;
}
const StopBatchEvaluationResponse = /*@__PURE__*/ __L.at(
  __c53,
  7,
) as any as S.Schema<StopBatchEvaluationResponse>;
export interface StopBrowserSessionRequest {
  traceId?: string;
  traceParent?: string;
  browserIdentifier: string;
  sessionId: string;
  clientToken?: string;
}
const StopBrowserSessionRequest = /*@__PURE__*/ __L.at(
  __c54,
  0,
) as any as S.Schema<StopBrowserSessionRequest>;
export interface StopBrowserSessionResponse {
  browserIdentifier: string;
  sessionId: string;
  lastUpdatedAt: Date;
}
const StopBrowserSessionResponse = /*@__PURE__*/ __L.at(
  __c54,
  1,
) as any as S.Schema<StopBrowserSessionResponse>;
export interface StopCodeInterpreterSessionRequest {
  traceId?: string;
  traceParent?: string;
  codeInterpreterIdentifier: string;
  sessionId: string;
  clientToken?: string;
}
const StopCodeInterpreterSessionRequest = /*@__PURE__*/ __L.at(
  __c54,
  2,
) as any as S.Schema<StopCodeInterpreterSessionRequest>;
export interface StopCodeInterpreterSessionResponse {
  codeInterpreterIdentifier: string;
  sessionId: string;
  lastUpdatedAt: Date;
}
const StopCodeInterpreterSessionResponse = /*@__PURE__*/ __L.at(
  __c54,
  3,
) as any as S.Schema<StopCodeInterpreterSessionResponse>;
export interface StopRuntimeSessionRequest {
  runtimeSessionId: string;
  agentRuntimeArn: string;
  qualifier?: string;
  clientToken?: string;
}
const StopRuntimeSessionRequest = /*@__PURE__*/ __L.at(
  __c54,
  4,
) as any as S.Schema<StopRuntimeSessionRequest>;
export interface StopRuntimeSessionResponse {
  runtimeSessionId?: string;
  statusCode?: number;
}
const StopRuntimeSessionResponse = /*@__PURE__*/ __L.at(
  __c54,
  5,
) as any as S.Schema<StopRuntimeSessionResponse>;
export interface UpdateABTestRequest {
  abTestId: string;
  clientToken?: string;
  name?: string;
  description?: string;
  variants?: Variant[];
  gatewayFilter?: GatewayFilter;
  evaluationConfig?: ABTestEvaluationConfig;
  roleArn?: string;
  executionStatus?: ABTestExecutionStatus;
}
const UpdateABTestRequest = /*@__PURE__*/ __L.at(__c54, 6) as any as S.Schema<UpdateABTestRequest>;
export interface UpdateABTestResponse {
  abTestId: string;
  abTestArn: string;
  status: ABTestStatus;
  executionStatus: ABTestExecutionStatus;
  updatedAt: Date;
}
const UpdateABTestResponse = /*@__PURE__*/ __L.at(
  __c54,
  7,
) as any as S.Schema<UpdateABTestResponse>;
export interface AutomationStreamUpdate {
  streamStatus?: AutomationStreamStatus;
}
const AutomationStreamUpdate = /*@__PURE__*/ __L.at(
  __c55,
  0,
) as any as S.Schema<AutomationStreamUpdate>;
export type StreamUpdate = { automationStreamUpdate: AutomationStreamUpdate };
const StreamUpdate = /*@__PURE__*/ __L.at(__c55, 1);
export interface UpdateBrowserStreamRequest {
  browserIdentifier: string;
  sessionId: string;
  streamUpdate: StreamUpdate;
  clientToken?: string;
}
const UpdateBrowserStreamRequest = /*@__PURE__*/ __L.at(
  __c55,
  2,
) as any as S.Schema<UpdateBrowserStreamRequest>;
export interface UpdateBrowserStreamResponse {
  browserIdentifier: string;
  sessionId: string;
  streams: BrowserSessionStream;
  updatedAt: Date;
}
const UpdateBrowserStreamResponse = /*@__PURE__*/ __L.at(
  __c55,
  3,
) as any as S.Schema<UpdateBrowserStreamResponse>;
export type BatchCreateMemoryRecordsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ServiceException
  | ServiceQuotaExceededException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Creates multiple memory records in a single batch operation for the specified memory with custom content.
 */
export const batchCreateMemoryRecords: API.OperationMethod<
  BatchCreateMemoryRecordsInput,
  BatchCreateMemoryRecordsOutput,
  BatchCreateMemoryRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchCreateMemoryRecordsInput,
  output: BatchCreateMemoryRecordsOutput,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ServiceException,
    ServiceQuotaExceededException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchCreateMemoryRecords",
}));

export type BatchDeleteMemoryRecordsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ServiceException
  | ServiceQuotaExceededException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Deletes multiple memory records in a single batch operation from the specified memory.
 */
export const batchDeleteMemoryRecords: API.OperationMethod<
  BatchDeleteMemoryRecordsInput,
  BatchDeleteMemoryRecordsOutput,
  BatchDeleteMemoryRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDeleteMemoryRecordsInput,
  output: BatchDeleteMemoryRecordsOutput,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ServiceException,
    ServiceQuotaExceededException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteMemoryRecords",
}));

export type BatchUpdateMemoryRecordsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ServiceException
  | ServiceQuotaExceededException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Updates multiple memory records with custom content in a single batch operation within the specified memory.
 */
export const batchUpdateMemoryRecords: API.OperationMethod<
  BatchUpdateMemoryRecordsInput,
  BatchUpdateMemoryRecordsOutput,
  BatchUpdateMemoryRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchUpdateMemoryRecordsInput,
  output: BatchUpdateMemoryRecordsOutput,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ServiceException,
    ServiceQuotaExceededException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchUpdateMemoryRecords",
}));

export type CompleteResourceTokenAuthError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Confirms the user authentication session for obtaining OAuth2.0 tokens for a resource.
 */
export const completeResourceTokenAuth: API.OperationMethod<
  CompleteResourceTokenAuthRequest,
  CompleteResourceTokenAuthResponse,
  CompleteResourceTokenAuthError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CompleteResourceTokenAuthRequest,
  output: CompleteResourceTokenAuthResponse,
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
  operationName: "CompleteResourceTokenAuth",
}));

export type CreateABTestError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Creates an A/B test for comparing agent configurations. A/B tests split traffic between a control variant and a treatment variant through a gateway, then evaluate performance using online evaluation configurations to determine which variant performs better.
 */
export const createABTest: API.OperationMethod<
  CreateABTestRequest,
  CreateABTestResponse,
  CreateABTestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateABTestRequest,
  output: CreateABTestResponse,
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
  operationName: "CreateABTest",
}));

export type CreateEventError =
  | AccessDeniedException
  | InvalidInputException
  | ResourceNotFoundException
  | RetryableConflictException
  | ServiceException
  | ServiceQuotaExceededException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Creates an event in an AgentCore Memory resource. Events represent interactions or activities that occur within a session and are associated with specific actors.
 *
 * To use this operation, you must have the `bedrock-agentcore:CreateEvent` permission.
 *
 * This operation is subject to request rate limiting.
 */
export const createEvent: API.OperationMethod<
  CreateEventInput,
  CreateEventOutput,
  CreateEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateEventInput,
  output: CreateEventOutput,
  errors: [
    AccessDeniedException,
    InvalidInputException,
    ResourceNotFoundException,
    RetryableConflictException,
    ServiceException,
    ServiceQuotaExceededException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateEvent",
}));

export type CreatePaymentInstrumentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | SubscriptionRequiredException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a new payment instrument for a connector.
 */
export const createPaymentInstrument: API.OperationMethod<
  CreatePaymentInstrumentRequest,
  CreatePaymentInstrumentResponse,
  CreatePaymentInstrumentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreatePaymentInstrumentRequest,
  output: CreatePaymentInstrumentResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    SubscriptionRequiredException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePaymentInstrument",
}));

export type CreatePaymentSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | SubscriptionRequiredException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a new payment session.
 */
export const createPaymentSession: API.OperationMethod<
  CreatePaymentSessionRequest,
  CreatePaymentSessionResponse,
  CreatePaymentSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreatePaymentSessionRequest,
  output: CreatePaymentSessionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ServiceQuotaExceededException,
    SubscriptionRequiredException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePaymentSession",
}));

export type DeleteABTestError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an A/B test and its associated gateway rules.
 */
export const deleteABTest: API.OperationMethod<
  DeleteABTestRequest,
  DeleteABTestResponse,
  DeleteABTestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteABTestRequest,
  output: DeleteABTestResponse,
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
  operationName: "DeleteABTest",
}));

export type DeleteBatchEvaluationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a batch evaluation and its associated results.
 */
export const deleteBatchEvaluation: API.OperationMethod<
  DeleteBatchEvaluationRequest,
  DeleteBatchEvaluationResponse,
  DeleteBatchEvaluationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteBatchEvaluationRequest,
  output: DeleteBatchEvaluationResponse,
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
  operationName: "DeleteBatchEvaluation",
}));

export type DeleteCapacityProviderSessionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a session associated with a capacity provider in Amazon Bedrock AgentCore and makes the session unavailable for further use. To delete a capacity provider session, specify both the capacity provider identifier and the session ID. After you delete a session, you cannot restart it.
 */
export const deleteCapacityProviderSession: API.OperationMethod<
  DeleteCapacityProviderSessionRequest,
  DeleteCapacityProviderSessionResponse,
  DeleteCapacityProviderSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCapacityProviderSessionRequest,
  output: DeleteCapacityProviderSessionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteCapacityProviderSession",
}));

export type DeleteEventError =
  | AccessDeniedException
  | InvalidInputException
  | ResourceNotFoundException
  | ServiceException
  | ServiceQuotaExceededException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an event from an AgentCore Memory resource. When you delete an event, it is permanently removed.
 *
 * To use this operation, you must have the `bedrock-agentcore:DeleteEvent` permission.
 */
export const deleteEvent: API.OperationMethod<
  DeleteEventInput,
  DeleteEventOutput,
  DeleteEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteEventInput,
  output: DeleteEventOutput,
  errors: [
    AccessDeniedException,
    InvalidInputException,
    ResourceNotFoundException,
    ServiceException,
    ServiceQuotaExceededException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteEvent",
}));

export type DeleteMemoryRecordError =
  | AccessDeniedException
  | InvalidInputException
  | ResourceNotFoundException
  | ServiceException
  | ServiceQuotaExceededException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a memory record from an AgentCore Memory resource. When you delete a memory record, it is permanently removed.
 *
 * To use this operation, you must have the `bedrock-agentcore:DeleteMemoryRecord` permission.
 */
export const deleteMemoryRecord: API.OperationMethod<
  DeleteMemoryRecordInput,
  DeleteMemoryRecordOutput,
  DeleteMemoryRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteMemoryRecordInput,
  output: DeleteMemoryRecordOutput,
  errors: [
    AccessDeniedException,
    InvalidInputException,
    ResourceNotFoundException,
    ServiceException,
    ServiceQuotaExceededException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteMemoryRecord",
}));

export type DeletePaymentInstrumentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a payment instrument. This is a soft delete operation that preserves the record for audit and compliance purposes.
 */
export const deletePaymentInstrument: API.OperationMethod<
  DeletePaymentInstrumentRequest,
  DeletePaymentInstrumentResponse,
  DeletePaymentInstrumentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePaymentInstrumentRequest,
  output: DeletePaymentInstrumentResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePaymentInstrument",
}));

export type DeletePaymentSessionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a payment session. This permanently removes the payment session record.
 */
export const deletePaymentSession: API.OperationMethod<
  DeletePaymentSessionRequest,
  DeletePaymentSessionResponse,
  DeletePaymentSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePaymentSessionRequest,
  output: DeletePaymentSessionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePaymentSession",
}));

export type DeleteRecommendationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a recommendation and its associated results.
 */
export const deleteRecommendation: API.OperationMethod<
  DeleteRecommendationRequest,
  DeleteRecommendationResponse,
  DeleteRecommendationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteRecommendationRequest,
  output: DeleteRecommendationResponse,
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
  operationName: "DeleteRecommendation",
}));

export type EvaluateError =
  | AccessDeniedException
  | ConflictException
  | DuplicateIdException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Performs on-demand evaluation of agent traces using a specified evaluator. This synchronous API accepts traces in OpenTelemetry format and returns immediate scoring results with detailed explanations.
 */
export const evaluate: API.OperationMethod<
  EvaluateRequest,
  EvaluateResponse,
  EvaluateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: EvaluateRequest,
  output: EvaluateResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    DuplicateIdException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Evaluate",
}));

export type GetABTestError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about an A/B test, including its configuration, status, and statistical results.
 */
export const getABTest: API.OperationMethod<
  GetABTestRequest,
  GetABTestResponse,
  GetABTestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetABTestRequest,
  output: GetABTestResponse,
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
  operationName: "GetABTest",
}));

export type GetAgentCardError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | RetryableConflictException
  | RuntimeClientError
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the A2A agent card associated with an AgentCore Runtime agent.
 */
export const getAgentCard: API.OperationMethod<
  GetAgentCardRequest,
  GetAgentCardResponse,
  GetAgentCardError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAgentCardRequest,
  output: GetAgentCardResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    RetryableConflictException,
    RuntimeClientError,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAgentCard",
}));

export type GetBatchEvaluationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a batch evaluation, including its status, configuration, results, and any error details.
 */
export const getBatchEvaluation: API.OperationMethod<
  GetBatchEvaluationRequest,
  GetBatchEvaluationResponse,
  GetBatchEvaluationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBatchEvaluationRequest,
  output: GetBatchEvaluationResponse,
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
  operationName: "GetBatchEvaluation",
}));

export type GetBrowserSessionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific browser session in Amazon Bedrock AgentCore. This operation returns the session's configuration, current status, associated streams, and metadata.
 *
 * To get a browser session, you must specify both the browser identifier and the session ID. The response includes information about the session's viewport configuration, timeout settings, and stream endpoints.
 *
 * The following operations are related to `GetBrowserSession`:
 *
 * - StartBrowserSession
 *
 * - ListBrowserSessions
 *
 * - StopBrowserSession
 */
export const getBrowserSession: API.OperationMethod<
  GetBrowserSessionRequest,
  GetBrowserSessionResponse,
  GetBrowserSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetBrowserSessionRequest,
  output: GetBrowserSessionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBrowserSession",
}));

export type GetCodeInterpreterSessionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a specific code interpreter session in Amazon Bedrock AgentCore. This operation returns the session's configuration, current status, and metadata.
 *
 * To get a code interpreter session, you must specify both the code interpreter identifier and the session ID. The response includes information about the session's timeout settings and current status.
 *
 * The following operations are related to `GetCodeInterpreterSession`:
 *
 * - StartCodeInterpreterSession
 *
 * - ListCodeInterpreterSessions
 *
 * - StopCodeInterpreterSession
 */
export const getCodeInterpreterSession: API.OperationMethod<
  GetCodeInterpreterSessionRequest,
  GetCodeInterpreterSessionResponse,
  GetCodeInterpreterSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCodeInterpreterSessionRequest,
  output: GetCodeInterpreterSessionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCodeInterpreterSession",
}));

export type GetEventError =
  | AccessDeniedException
  | InvalidInputException
  | ResourceNotFoundException
  | ServiceException
  | ServiceQuotaExceededException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves information about a specific event in an AgentCore Memory resource.
 *
 * To use this operation, you must have the `bedrock-agentcore:GetEvent` permission.
 */
export const getEvent: API.OperationMethod<
  GetEventInput,
  GetEventOutput,
  GetEventError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetEventInput,
  output: GetEventOutput,
  errors: [
    AccessDeniedException,
    InvalidInputException,
    ResourceNotFoundException,
    ServiceException,
    ServiceQuotaExceededException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetEvent",
}));

export type GetMemoryRecordError =
  | AccessDeniedException
  | InvalidInputException
  | ResourceNotFoundException
  | ServiceException
  | ServiceQuotaExceededException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a specific memory record from an AgentCore Memory resource.
 *
 * To use this operation, you must have the `bedrock-agentcore:GetMemoryRecord` permission.
 */
export const getMemoryRecord: API.OperationMethod<
  GetMemoryRecordInput,
  GetMemoryRecordOutput,
  GetMemoryRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetMemoryRecordInput,
  output: GetMemoryRecordOutput,
  errors: [
    AccessDeniedException,
    InvalidInputException,
    ResourceNotFoundException,
    ServiceException,
    ServiceQuotaExceededException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetMemoryRecord",
}));

export type GetPaymentInstrumentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get a payment instrument by ID.
 */
export const getPaymentInstrument: API.OperationMethod<
  GetPaymentInstrumentRequest,
  GetPaymentInstrumentResponse,
  GetPaymentInstrumentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPaymentInstrumentRequest,
  output: GetPaymentInstrumentResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPaymentInstrument",
}));

export type GetPaymentInstrumentBalanceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get the balance of a payment instrument.
 */
export const getPaymentInstrumentBalance: API.OperationMethod<
  GetPaymentInstrumentBalanceRequest,
  GetPaymentInstrumentBalanceResponse,
  GetPaymentInstrumentBalanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPaymentInstrumentBalanceRequest,
  output: GetPaymentInstrumentBalanceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPaymentInstrumentBalance",
}));

export type GetPaymentSessionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Get a payment session.
 */
export const getPaymentSession: API.OperationMethod<
  GetPaymentSessionRequest,
  GetPaymentSessionResponse,
  GetPaymentSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPaymentSessionRequest,
  output: GetPaymentSessionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPaymentSession",
}));

export type GetRecommendationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves detailed information about a recommendation, including its configuration, status, and results.
 */
export const getRecommendation: API.OperationMethod<
  GetRecommendationRequest,
  GetRecommendationResponse,
  GetRecommendationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetRecommendationRequest,
  output: GetRecommendationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetRecommendation",
}));

export type GetResourceApiKeyError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the API key associated with an API key credential provider.
 */
export const getResourceApiKey: API.OperationMethod<
  GetResourceApiKeyRequest,
  GetResourceApiKeyResponse,
  GetResourceApiKeyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetResourceApiKeyRequest,
  output: GetResourceApiKeyResponse,
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
  operationName: "GetResourceApiKey",
}));

export type GetResourceOauth2TokenError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Returns the OAuth 2.0 token of the provided resource.
 */
export const getResourceOauth2Token: API.OperationMethod<
  GetResourceOauth2TokenRequest,
  GetResourceOauth2TokenResponse,
  GetResourceOauth2TokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetResourceOauth2TokenRequest,
  output: GetResourceOauth2TokenResponse,
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
  operationName: "GetResourceOauth2Token",
}));

export type GetResourcePaymentTokenError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Generates authentication tokens for payment providers that use vendor-specific authentication mechanisms.
 */
export const getResourcePaymentToken: API.OperationMethod<
  GetResourcePaymentTokenRequest,
  GetResourcePaymentTokenResponse,
  GetResourcePaymentTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetResourcePaymentTokenRequest,
  output: GetResourcePaymentTokenResponse,
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
  operationName: "GetResourcePaymentToken",
}));

export type GetWorkloadAccessTokenError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Obtains a workload access token for agentic workloads not acting on behalf of a user.
 */
export const getWorkloadAccessToken: API.OperationMethod<
  GetWorkloadAccessTokenRequest,
  GetWorkloadAccessTokenResponse,
  GetWorkloadAccessTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWorkloadAccessTokenRequest,
  output: GetWorkloadAccessTokenResponse,
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
  operationName: "GetWorkloadAccessToken",
}));

export type GetWorkloadAccessTokenForJWTError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Obtains a workload access token for agentic workloads acting on behalf of a user, using a JWT token.
 */
export const getWorkloadAccessTokenForJWT: API.OperationMethod<
  GetWorkloadAccessTokenForJWTRequest,
  GetWorkloadAccessTokenForJWTResponse,
  GetWorkloadAccessTokenForJWTError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWorkloadAccessTokenForJWTRequest,
  output: GetWorkloadAccessTokenForJWTResponse,
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
  operationName: "GetWorkloadAccessTokenForJWT",
}));

export type GetWorkloadAccessTokenForUserIdError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Obtains a workload access token for agentic workloads acting on behalf of a user, using the user's ID.
 */
export const getWorkloadAccessTokenForUserId: API.OperationMethod<
  GetWorkloadAccessTokenForUserIdRequest,
  GetWorkloadAccessTokenForUserIdResponse,
  GetWorkloadAccessTokenForUserIdError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetWorkloadAccessTokenForUserIdRequest,
  output: GetWorkloadAccessTokenForUserIdResponse,
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
  operationName: "GetWorkloadAccessTokenForUserId",
}));

export type IngestDataError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ServiceException
  | ServiceQuotaExceededException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Submits content directly for ingestion to generate long-term memory records in a AgentCore Memory resource.
 *
 * To use this operation, you must have the `bedrock-agentcore:IngestData` permission.
 */
export const ingestData: API.OperationMethod<
  IngestDataInput,
  IngestDataOutput,
  IngestDataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: IngestDataInput,
  output: IngestDataOutput,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ServiceException,
    ServiceQuotaExceededException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "IngestData",
}));

export type InvokeAgentRuntimeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | RetryableConflictException
  | RuntimeClientError
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Sends a request to an agent or tool hosted in an Amazon Bedrock AgentCore Runtime and receives responses in real-time.
 *
 * To invoke an agent, you can specify either the AgentCore Runtime ARN or the agent ID with an account ID, and provide a payload containing your request. When you use the agent ID instead of the full ARN, you don't need to URL-encode the identifier. You can optionally specify a qualifier to target a specific endpoint of the agent.
 *
 * This operation supports streaming responses, allowing you to receive partial responses as they become available. We recommend using pagination to ensure that the operation returns quickly and successfully when processing large responses.
 *
 * For example code, see Invoke an AgentCore Runtime agent.
 *
 * If you're integrating your agent with OAuth, you can't use the Amazon Web Services SDK to call `InvokeAgentRuntime`. Instead, make a HTTPS request to `InvokeAgentRuntime`. For an example, see Authenticate and authorize with Inbound Auth and Outbound Auth.
 *
 * To use this operation, you must have the `bedrock-agentcore:InvokeAgentRuntime` permission. If you are making a call to `InvokeAgentRuntime` on behalf of a user ID with the `X-Amzn-Bedrock-AgentCore-Runtime-User-Id` header, You require permissions to both actions (`bedrock-agentcore:InvokeAgentRuntime` and `bedrock-agentcore:InvokeAgentRuntimeForUser`).
 */
export const invokeAgentRuntime: API.OperationMethod<
  InvokeAgentRuntimeRequest,
  InvokeAgentRuntimeResponse,
  InvokeAgentRuntimeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: InvokeAgentRuntimeRequest,
  output: InvokeAgentRuntimeResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    RetryableConflictException,
    RuntimeClientError,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InvokeAgentRuntime",
}));

export type InvokeAgentRuntimeCommandError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | RetryableConflictException
  | RuntimeClientError
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Executes a command in a runtime session container and streams the output back to the caller. This operation allows you to run shell commands within the agent runtime environment and receive real-time streaming responses including standard output and standard error.
 *
 * To invoke a command, you must specify the agent runtime ARN and a runtime session ID. The command execution supports streaming responses, allowing you to receive output as it becomes available through `contentStart`, `contentDelta`, and `contentStop` events.
 *
 * To use this operation, you must have the `bedrock-agentcore:InvokeAgentRuntimeCommand` permission.
 */
export const invokeAgentRuntimeCommand: API.OperationMethod<
  InvokeAgentRuntimeCommandRequest,
  InvokeAgentRuntimeCommandResponse,
  InvokeAgentRuntimeCommandError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: InvokeAgentRuntimeCommandRequest,
  output: InvokeAgentRuntimeCommandResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    RetryableConflictException,
    RuntimeClientError,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InvokeAgentRuntimeCommand",
}));

export type InvokeBrowserError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Invokes an operating system-level action on a browser session in Amazon Bedrock AgentCore. This operation provides direct OS-level control over browser sessions, enabling mouse actions, keyboard input, and screenshots that the WebSocket-based Chrome DevTools Protocol (CDP) cannot handle -- such as interacting with print dialogs, context menus, and JavaScript alerts.
 *
 * You send a request with exactly one action in the `BrowserAction` union, and receive a corresponding result in the `BrowserActionResult` union.
 *
 * The following operations are related to `InvokeBrowser`:
 *
 * - StartBrowserSession
 *
 * - GetBrowserSession
 *
 * - StopBrowserSession
 */
export const invokeBrowser: API.OperationMethod<
  InvokeBrowserRequest,
  InvokeBrowserResponse,
  InvokeBrowserError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: InvokeBrowserRequest,
  output: InvokeBrowserResponse,
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
  operationName: "InvokeBrowser",
}));

export type InvokeCodeInterpreterError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Executes code within an active code interpreter session in Amazon Bedrock AgentCore. This operation processes the provided code, runs it in a secure environment, and returns the execution results including output, errors, and generated visualizations.
 *
 * To execute code, you must specify the code interpreter identifier, session ID, and the code to run in the arguments parameter. The operation returns a stream containing the execution results, which can include text output, error messages, and data visualizations.
 *
 * This operation is subject to request rate limiting based on your account's service quotas.
 *
 * The following operations are related to `InvokeCodeInterpreter`:
 *
 * - StartCodeInterpreterSession
 *
 * - GetCodeInterpreterSession
 */
export const invokeCodeInterpreter: API.OperationMethod<
  InvokeCodeInterpreterRequest,
  InvokeCodeInterpreterResponse,
  InvokeCodeInterpreterError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: InvokeCodeInterpreterRequest,
  output: InvokeCodeInterpreterResponse,
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
  operationName: "InvokeCodeInterpreter",
}));

export type InvokeHarnessError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | RuntimeClientError
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Operation to invoke a Harness.
 */
export const invokeHarness: API.OperationMethod<
  InvokeHarnessRequest,
  InvokeHarnessResponse,
  InvokeHarnessError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: InvokeHarnessRequest,
  output: InvokeHarnessResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    RuntimeClientError,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "InvokeHarness",
}));

export type ListABTestsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists all A/B tests in the account.
 */
export const listABTests: API.PaginatedOperationMethod<
  ListABTestsRequest,
  ListABTestsResponse,
  ListABTestsError,
  Credentials | HttpClient.HttpClient,
  ABTestSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListABTestsRequest,
  output: ListABTestsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListABTests",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "abTests",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListActorsError =
  | AccessDeniedException
  | InvalidInputException
  | ResourceNotFoundException
  | ServiceException
  | ServiceQuotaExceededException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Lists all actors in an AgentCore Memory resource. We recommend using pagination to ensure that the operation returns quickly and successfully.
 *
 * To use this operation, you must have the `bedrock-agentcore:ListActors` permission.
 */
export const listActors: API.PaginatedOperationMethod<
  ListActorsInput,
  ListActorsOutput,
  ListActorsError,
  Credentials | HttpClient.HttpClient,
  ActorSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListActorsInput,
  output: ListActorsOutput,
  errors: [
    AccessDeniedException,
    InvalidInputException,
    ResourceNotFoundException,
    ServiceException,
    ServiceQuotaExceededException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListActors",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "actorSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBatchEvaluationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists all batch evaluations in the account, providing summary information about each evaluation's status and configuration.
 */
export const listBatchEvaluations: API.PaginatedOperationMethod<
  ListBatchEvaluationsRequest,
  ListBatchEvaluationsResponse,
  ListBatchEvaluationsError,
  Credentials | HttpClient.HttpClient,
  BatchEvaluationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListBatchEvaluationsRequest,
  output: ListBatchEvaluationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBatchEvaluations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "batchEvaluations",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListBrowserSessionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of browser sessions in Amazon Bedrock AgentCore that match the specified criteria. This operation returns summary information about each session, including identifiers, status, and timestamps.
 *
 * You can filter the results by browser identifier and session status. The operation supports pagination to handle large result sets efficiently.
 *
 * We recommend using pagination to ensure that the operation returns quickly and successfully when retrieving large numbers of sessions.
 *
 * The following operations are related to `ListBrowserSessions`:
 *
 * - StartBrowserSession
 *
 * - GetBrowserSession
 */
export const listBrowserSessions: API.OperationMethod<
  ListBrowserSessionsRequest,
  ListBrowserSessionsResponse,
  ListBrowserSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListBrowserSessionsRequest,
  output: ListBrowserSessionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBrowserSessions",
}));

export type ListCodeInterpreterSessionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of code interpreter sessions in Amazon Bedrock AgentCore that match the specified criteria. This operation returns summary information about each session, including identifiers, status, and timestamps.
 *
 * You can filter the results by code interpreter identifier and session status. The operation supports pagination to handle large result sets efficiently.
 *
 * We recommend using pagination to ensure that the operation returns quickly and successfully when retrieving large numbers of sessions.
 *
 * The following operations are related to `ListCodeInterpreterSessions`:
 *
 * - StartCodeInterpreterSession
 *
 * - GetCodeInterpreterSession
 */
export const listCodeInterpreterSessions: API.OperationMethod<
  ListCodeInterpreterSessionsRequest,
  ListCodeInterpreterSessionsResponse,
  ListCodeInterpreterSessionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListCodeInterpreterSessionsRequest,
  output: ListCodeInterpreterSessionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCodeInterpreterSessions",
}));

export type ListEventsError =
  | AccessDeniedException
  | InvalidInputException
  | ResourceNotFoundException
  | ServiceException
  | ServiceQuotaExceededException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Lists events in an AgentCore Memory resource based on specified criteria. We recommend using pagination to ensure that the operation returns quickly and successfully.
 *
 * To use this operation, you must have the `bedrock-agentcore:ListEvents` permission.
 */
export const listEvents: API.PaginatedOperationMethod<
  ListEventsInput,
  ListEventsOutput,
  ListEventsError,
  Credentials | HttpClient.HttpClient,
  Event
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListEventsInput,
  output: ListEventsOutput,
  errors: [
    AccessDeniedException,
    InvalidInputException,
    ResourceNotFoundException,
    ServiceException,
    ServiceQuotaExceededException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListEvents",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "events",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMemoryExtractionJobsError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ServiceException
  | ServiceQuotaExceededException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Lists all long-term memory extraction jobs that are eligible to be started with optional filtering.
 *
 * To use this operation, you must have the `bedrock-agentcore:ListMemoryExtractionJobs` permission.
 */
export const listMemoryExtractionJobs: API.PaginatedOperationMethod<
  ListMemoryExtractionJobsInput,
  ListMemoryExtractionJobsOutput,
  ListMemoryExtractionJobsError,
  Credentials | HttpClient.HttpClient,
  ExtractionJobMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMemoryExtractionJobsInput,
  output: ListMemoryExtractionJobsOutput,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ServiceException,
    ServiceQuotaExceededException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMemoryExtractionJobs",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "jobs",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListMemoryRecordsError =
  | AccessDeniedException
  | InvalidInputException
  | ResourceNotFoundException
  | ServiceException
  | ServiceQuotaExceededException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Lists memory records in an AgentCore Memory resource based on specified criteria. We recommend using pagination to ensure that the operation returns quickly and successfully.
 *
 * To use this operation, you must have the `bedrock-agentcore:ListMemoryRecords` permission.
 */
export const listMemoryRecords: API.PaginatedOperationMethod<
  ListMemoryRecordsInput,
  ListMemoryRecordsOutput,
  ListMemoryRecordsError,
  Credentials | HttpClient.HttpClient,
  MemoryRecordSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListMemoryRecordsInput,
  output: ListMemoryRecordsOutput,
  errors: [
    AccessDeniedException,
    InvalidInputException,
    ResourceNotFoundException,
    ServiceException,
    ServiceQuotaExceededException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListMemoryRecords",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "memoryRecordSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPaymentInstrumentsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List payment instruments for a manager.
 */
export const listPaymentInstruments: API.PaginatedOperationMethod<
  ListPaymentInstrumentsRequest,
  ListPaymentInstrumentsResponse,
  ListPaymentInstrumentsError,
  Credentials | HttpClient.HttpClient,
  PaymentInstrumentSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPaymentInstrumentsRequest,
  output: ListPaymentInstrumentsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPaymentInstruments",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "paymentInstruments",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPaymentSessionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List payment sessions.
 */
export const listPaymentSessions: API.PaginatedOperationMethod<
  ListPaymentSessionsRequest,
  ListPaymentSessionsResponse,
  ListPaymentSessionsError,
  Credentials | HttpClient.HttpClient,
  PaymentSessionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPaymentSessionsRequest,
  output: ListPaymentSessionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPaymentSessions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "paymentSessions",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListRecommendationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all recommendations in the account, with optional filtering by status.
 */
export const listRecommendations: API.PaginatedOperationMethod<
  ListRecommendationsRequest,
  ListRecommendationsResponse,
  ListRecommendationsError,
  Credentials | HttpClient.HttpClient,
  RecommendationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRecommendationsRequest,
  output: ListRecommendationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRecommendations",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "recommendationSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSessionsError =
  | AccessDeniedException
  | InvalidInputException
  | ResourceNotFoundException
  | ServiceException
  | ServiceQuotaExceededException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Lists sessions in an AgentCore Memory resource based on specified criteria. We recommend using pagination to ensure that the operation returns quickly and successfully.
 *
 * Empty sessions are automatically deleted after one day.
 *
 * To use this operation, you must have the `bedrock-agentcore:ListSessions` permission.
 */
export const listSessions: API.PaginatedOperationMethod<
  ListSessionsInput,
  ListSessionsOutput,
  ListSessionsError,
  Credentials | HttpClient.HttpClient,
  SessionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSessionsInput,
  output: ListSessionsOutput,
  errors: [
    AccessDeniedException,
    InvalidInputException,
    ResourceNotFoundException,
    ServiceException,
    ServiceQuotaExceededException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSessions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "sessionSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ProcessPaymentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | SubscriptionRequiredException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Processes a payment using a payment instrument within a payment session.
 */
export const processPayment: API.OperationMethod<
  ProcessPaymentRequest,
  ProcessPaymentResponse,
  ProcessPaymentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ProcessPaymentRequest,
  output: ProcessPaymentResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    SubscriptionRequiredException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ProcessPayment",
}));

export type RetrieveMemoryRecordsError =
  | AccessDeniedException
  | InvalidInputException
  | ResourceNotFoundException
  | ServiceException
  | ServiceQuotaExceededException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Searches for and retrieves memory records from an AgentCore Memory resource based on specified search criteria. We recommend using pagination to ensure that the operation returns quickly and successfully.
 *
 * To use this operation, you must have the `bedrock-agentcore:RetrieveMemoryRecords` permission.
 */
export const retrieveMemoryRecords: API.PaginatedOperationMethod<
  RetrieveMemoryRecordsInput,
  RetrieveMemoryRecordsOutput,
  RetrieveMemoryRecordsError,
  Credentials | HttpClient.HttpClient,
  MemoryRecordSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: RetrieveMemoryRecordsInput,
  output: RetrieveMemoryRecordsOutput,
  errors: [
    AccessDeniedException,
    InvalidInputException,
    ResourceNotFoundException,
    ServiceException,
    ServiceQuotaExceededException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RetrieveMemoryRecords",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "memoryRecordSummaries",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SaveBrowserSessionProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Saves the current state of a browser session as a reusable profile in Amazon Bedrock AgentCore. A browser profile captures persistent browser data such as cookies and local storage from an active session, enabling you to reuse this data in future browser sessions.
 *
 * To save a browser session profile, you must specify the profile identifier, browser identifier, and session ID. The session must be active when saving the profile. Once saved, the profile can be used with the `StartBrowserSession` operation to initialize new sessions with the stored browser state.
 *
 * Browser profiles are useful for scenarios that require persistent authentication, maintaining user preferences across sessions, or continuing tasks that depend on previously stored browser data.
 *
 * The following operations are related to `SaveBrowserSessionProfile`:
 *
 * - StartBrowserSession
 *
 * - GetBrowserSession
 */
export const saveBrowserSessionProfile: API.OperationMethod<
  SaveBrowserSessionProfileRequest,
  SaveBrowserSessionProfileResponse,
  SaveBrowserSessionProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SaveBrowserSessionProfileRequest,
  output: SaveBrowserSessionProfileResponse,
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
  operationName: "SaveBrowserSessionProfile",
}));

export type SearchRegistryRecordsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Searches for registry records using semantic, lexical, or hybrid queries. Returns metadata for matching records ordered by relevance within the specified registry.
 */
export const searchRegistryRecords: API.OperationMethod<
  SearchRegistryRecordsRequest,
  SearchRegistryRecordsResponse,
  SearchRegistryRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SearchRegistryRecordsRequest,
  output: SearchRegistryRecordsResponse,
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
  operationName: "SearchRegistryRecords",
}));

export type StartBatchEvaluationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Starts a batch evaluation job that evaluates agent performance across multiple sessions. Batch evaluations pull agent traces from CloudWatch Logs or an existing online evaluation configuration and run specified evaluators and insights against them.
 */
export const startBatchEvaluation: API.OperationMethod<
  StartBatchEvaluationRequest,
  StartBatchEvaluationResponse,
  StartBatchEvaluationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartBatchEvaluationRequest,
  output: StartBatchEvaluationResponse,
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
  operationName: "StartBatchEvaluation",
}));

export type StartBrowserSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates and initializes a browser session in Amazon Bedrock AgentCore. The session enables agents to navigate and interact with web content, extract information from websites, and perform web-based tasks as part of their response generation.
 *
 * To create a session, you must specify a browser identifier and a name. You can also configure the viewport dimensions to control the visible area of web content. The session remains active until it times out or you explicitly stop it using the `StopBrowserSession` operation.
 *
 * The following operations are related to `StartBrowserSession`:
 *
 * - GetBrowserSession
 *
 * - UpdateBrowserStream
 *
 * - SaveBrowserSessionProfile
 *
 * - StopBrowserSession
 *
 * - InvokeBrowser
 */
export const startBrowserSession: API.OperationMethod<
  StartBrowserSessionRequest,
  StartBrowserSessionResponse,
  StartBrowserSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartBrowserSessionRequest,
  output: StartBrowserSessionResponse,
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
  operationName: "StartBrowserSession",
}));

export type StartCodeInterpreterSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates and initializes a code interpreter session in Amazon Bedrock AgentCore. The session enables agents to execute code as part of their response generation, supporting programming languages such as Python for data analysis, visualization, and computation tasks.
 *
 * To create a session, you must specify a code interpreter identifier and a name. The session remains active until it times out or you explicitly stop it using the `StopCodeInterpreterSession` operation.
 *
 * The following operations are related to `StartCodeInterpreterSession`:
 *
 * - InvokeCodeInterpreter
 *
 * - GetCodeInterpreterSession
 *
 * - StopCodeInterpreterSession
 */
export const startCodeInterpreterSession: API.OperationMethod<
  StartCodeInterpreterSessionRequest,
  StartCodeInterpreterSessionResponse,
  StartCodeInterpreterSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartCodeInterpreterSessionRequest,
  output: StartCodeInterpreterSessionResponse,
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
  operationName: "StartCodeInterpreterSession",
}));

export type StartMemoryExtractionJobError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ServiceException
  | ServiceQuotaExceededException
  | ThrottledException
  | ValidationException
  | CommonErrors;
/**
 * Starts a memory extraction job that processes events that failed extraction previously in an AgentCore Memory resource and produces structured memory records. When earlier extraction attempts have left events unprocessed, this job will pick up and extract those as well.
 *
 * To use this operation, you must have the `bedrock-agentcore:StartMemoryExtractionJob` permission.
 */
export const startMemoryExtractionJob: API.OperationMethod<
  StartMemoryExtractionJobInput,
  StartMemoryExtractionJobOutput,
  StartMemoryExtractionJobError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartMemoryExtractionJobInput,
  output: StartMemoryExtractionJobOutput,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ServiceException,
    ServiceQuotaExceededException,
    ThrottledException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartMemoryExtractionJob",
}));

export type StartRecommendationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Starts a recommendation job that analyzes agent traces and generates optimization suggestions for system prompts or tool descriptions to improve agent performance.
 */
export const startRecommendation: API.OperationMethod<
  StartRecommendationRequest,
  StartRecommendationResponse,
  StartRecommendationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StartRecommendationRequest,
  output: StartRecommendationResponse,
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
  operationName: "StartRecommendation",
}));

export type StopBatchEvaluationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Stops a running batch evaluation. Sessions that have already been evaluated retain their results.
 */
export const stopBatchEvaluation: API.OperationMethod<
  StopBatchEvaluationRequest,
  StopBatchEvaluationResponse,
  StopBatchEvaluationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopBatchEvaluationRequest,
  output: StopBatchEvaluationResponse,
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
  operationName: "StopBatchEvaluation",
}));

export type StopBrowserSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Terminates an active browser session in Amazon Bedrock AgentCore. This operation stops the session, releases associated resources, and makes the session unavailable for further use.
 *
 * To stop a browser session, you must specify both the browser identifier and the session ID. Once stopped, a session cannot be restarted; you must create a new session using `StartBrowserSession`.
 *
 * The following operations are related to `StopBrowserSession`:
 *
 * - StartBrowserSession
 *
 * - GetBrowserSession
 */
export const stopBrowserSession: API.OperationMethod<
  StopBrowserSessionRequest,
  StopBrowserSessionResponse,
  StopBrowserSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopBrowserSessionRequest,
  output: StopBrowserSessionResponse,
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
  operationName: "StopBrowserSession",
}));

export type StopCodeInterpreterSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Terminates an active code interpreter session in Amazon Bedrock AgentCore. This operation stops the session, releases associated resources, and makes the session unavailable for further use.
 *
 * To stop a code interpreter session, you must specify both the code interpreter identifier and the session ID. Once stopped, a session cannot be restarted; you must create a new session using `StartCodeInterpreterSession`.
 *
 * The following operations are related to `StopCodeInterpreterSession`:
 *
 * - StartCodeInterpreterSession
 *
 * - GetCodeInterpreterSession
 */
export const stopCodeInterpreterSession: API.OperationMethod<
  StopCodeInterpreterSessionRequest,
  StopCodeInterpreterSessionResponse,
  StopCodeInterpreterSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopCodeInterpreterSessionRequest,
  output: StopCodeInterpreterSessionResponse,
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
  operationName: "StopCodeInterpreterSession",
}));

export type StopRuntimeSessionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | RetryableConflictException
  | RuntimeClientError
  | ServiceQuotaExceededException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Stops a session that is running in an running AgentCore Runtime agent.
 */
export const stopRuntimeSession: API.OperationMethod<
  StopRuntimeSessionRequest,
  StopRuntimeSessionResponse,
  StopRuntimeSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: StopRuntimeSessionRequest,
  output: StopRuntimeSessionResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    RetryableConflictException,
    RuntimeClientError,
    ServiceQuotaExceededException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopRuntimeSession",
}));

export type UpdateABTestError =
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
 * Updates an A/B test's configuration, including variants, traffic allocation, evaluation settings, or execution status.
 */
export const updateABTest: API.OperationMethod<
  UpdateABTestRequest,
  UpdateABTestResponse,
  UpdateABTestError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateABTestRequest,
  output: UpdateABTestResponse,
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
  operationName: "UpdateABTest",
}));

export type UpdateBrowserStreamError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a browser stream. To use this operation, you must have permissions to perform the bedrock:UpdateBrowserStream action.
 */
export const updateBrowserStream: API.OperationMethod<
  UpdateBrowserStreamRequest,
  UpdateBrowserStreamResponse,
  UpdateBrowserStreamError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateBrowserStreamRequest,
  output: UpdateBrowserStreamResponse,
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
  operationName: "UpdateBrowserStream",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ text: SensitiveString })]);
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ stringValue: S.String }),
        /*@__PURE__*/ S.Struct({ stringListValue: StringValueList }),
        /*@__PURE__*/ S.Struct({ numberValue: S.Number }),
        /*@__PURE__*/ S.Struct({
          dateTimeValue: /*@__PURE__*/ S.Date.pipe(
            /*@__PURE__*/ T.TimestampFormat("epoch-seconds"),
          ),
        }),
      ]);
    case 3:
      return S.Record(S.String, /*@__PURE__*/ MemoryRecordMetadataValue.pipe(S.optional));
    case 4:
      return S.suspend(() =>
        S.Struct({
          requestIdentifier: S.String,
          namespaces: NamespacesList,
          content: MemoryContent,
          timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          memoryStrategyId: S.optional(S.String),
          metadata: S.optional(MemoryRecordMetadataMap),
        }),
      ).annotate({ identifier: "MemoryRecordCreateInput" });
    case 5:
      return S.Array(MemoryRecordCreateInput);
    case 6:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
          records: MemoryRecordsCreateInputList,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/memories/{memoryId}/memoryRecords/batchCreate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchCreateMemoryRecordsInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          memoryRecordId: S.String,
          status: MemoryRecordStatus,
          requestIdentifier: S.optional(S.String),
          errorCode: S.optional(S.Number),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({ identifier: "MemoryRecordOutput" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(MemoryRecordOutput);
    case 1:
      return S.suspend(() =>
        S.Struct({
          successfulRecords: MemoryRecordsOutputList,
          failedRecords: MemoryRecordsOutputList,
        }),
      ).annotate({
        identifier: "BatchCreateMemoryRecordsOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ memoryRecordId: S.String, namespace: S.optional(S.String) }),
      ).annotate({ identifier: "MemoryRecordDeleteInput" });
    case 3:
      return S.Array(MemoryRecordDeleteInput);
    case 4:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
          records: MemoryRecordsDeleteInputList,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/memories/{memoryId}/memoryRecords/batchDelete" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchDeleteMemoryRecordsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          memoryRecordId: S.String,
          timestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          content: S.optional(MemoryContent),
          namespaces: S.optional(NamespacesList),
          sourceNamespaces: S.optional(NamespacesList),
          memoryStrategyId: S.optional(S.String),
          metadata: S.optional(MemoryRecordMetadataMap),
        }),
      ).annotate({ identifier: "MemoryRecordUpdateInput" });
    case 6:
      return S.Array(MemoryRecordUpdateInput);
    case 7:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
          records: MemoryRecordsUpdateInputList,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/memories/{memoryId}/memoryRecords/batchUpdate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "BatchUpdateMemoryRecordsInput",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ userToken: SensitiveString }),
        /*@__PURE__*/ S.Struct({ userId: S.String }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({ userIdentifier: UserIdentifier, sessionUri: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/CompleteResourceTokenAuth" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CompleteResourceTokenAuthRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CompleteResourceTokenAuthResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ bundleArn: S.String, bundleVersion: S.String })).annotate({
        identifier: "ConfigurationBundleRef",
      });
    case 4:
      return S.suspend(() => S.Struct({ name: S.String })).annotate({
        identifier: "TargetRef",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          configurationBundle: S.optional(ConfigurationBundleRef),
          target: S.optional(TargetRef),
        }),
      ).annotate({ identifier: "VariantConfiguration" });
    case 6:
      return S.suspend(() =>
        S.Struct({ name: S.String, weight: S.Number, variantConfiguration: VariantConfiguration }),
      ).annotate({ identifier: "Variant" });
    case 7:
      return S.Array(Variant);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ targetPaths: S.optional(TargetPathList) })).annotate({
        identifier: "GatewayFilter",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ name: S.String, onlineEvaluationConfigArn: S.String }),
      ).annotate({
        identifier: "PerVariantOnlineEvaluationConfig",
      });
    case 2:
      return S.Array(PerVariantOnlineEvaluationConfig);
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ onlineEvaluationConfigArn: S.String }),
        /*@__PURE__*/ S.Struct({
          perVariantOnlineEvaluationConfig: PerVariantOnlineEvaluationConfigList,
        }),
      ]);
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          gatewayArn: S.String,
          variants: VariantList,
          gatewayFilter: S.optional(GatewayFilter),
          evaluationConfig: ABTestEvaluationConfig,
          roleArn: S.String,
          enableOnCreate: S.optional(S.Boolean),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagsMap),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/ab-tests" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateABTestRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          abTestId: S.String,
          abTestArn: S.String,
          name: S.optional(S.String),
          status: ABTestStatus,
          executionStatus: ABTestExecutionStatus,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "CreateABTestResponse" });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ text: SensitiveString })]);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ content: Content, role: Role })).annotate({
        identifier: "Conversational",
      });
    case 1:
      return S.suspend(() => S.Struct({ content: S.Any })).annotate({
        identifier: "MemoryJsonData",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ conversational: Conversational }),
        /*@__PURE__*/ S.Struct({ blob: S.Any }),
        /*@__PURE__*/ S.Struct({ json: MemoryJsonData }),
      ]);
    case 3:
      return S.Array(PayloadType);
    case 4:
      return S.suspend(() =>
        S.Struct({ rootEventId: S.optional(S.String), name: S.String }),
      ).annotate({ identifier: "Branch" });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ stringValue: S.String })]);
    case 6:
      return S.Record(S.String, /*@__PURE__*/ MetadataValue.pipe(S.optional));
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ namespaceVariables: S.optional(NamespaceVariablesMap) }),
      ).annotate({ identifier: "ExtractionConfig" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
          actorId: S.String,
          sessionId: S.optional(S.String),
          eventTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          payload: PayloadTypeList,
          branch: S.optional(Branch),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          metadata: S.optional(MetadataMap),
          extractionMode: S.optional(ExtractionMode),
          extractionConfig: S.optional(ExtractionConfig),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/memories/{memoryId}/events" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "CreateEventInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String,
          actorId: S.String,
          sessionId: S.String,
          eventId: S.String,
          eventTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          payload: S.optional(PayloadTypeList),
          branch: S.optional(Branch),
          metadata: S.optional(MetadataMap),
        }),
      ).annotate({ identifier: "Event" });
    case 3:
      return S.suspend(() => S.Struct({ event: Event })).annotate({
        identifier: "CreateEventOutput",
      });
    case 4:
      return S.suspend(() => S.Struct({ emailAddress: SensitiveString })).annotate({
        identifier: "LinkedAccountEmail",
      });
    case 5:
      return S.suspend(() => S.Struct({ phoneNumber: SensitiveString })).annotate({
        identifier: "LinkedAccountSms",
      });
    case 6:
      return S.suspend(() => S.Struct({ kid: S.String, sub: S.String })).annotate({
        identifier: "LinkedAccountDeveloperJwt",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          sub: S.String,
          emailAddress: S.optional(SensitiveString),
          name: S.optional(S.String),
          username: S.optional(S.String),
        }),
      ).annotate({ identifier: "OAuth2Authentication" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ google: OAuth2Authentication }),
        /*@__PURE__*/ S.Struct({ apple: OAuth2Authentication }),
        /*@__PURE__*/ S.Struct({ x: OAuth2Authentication }),
        /*@__PURE__*/ S.Struct({ telegram: OAuth2Authentication }),
        /*@__PURE__*/ S.Struct({ github: OAuth2Authentication }),
      ]);
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ email: LinkedAccountEmail }),
        /*@__PURE__*/ S.Struct({ sms: LinkedAccountSms }),
        /*@__PURE__*/ S.Struct({ developerJwt: LinkedAccountDeveloperJwt }),
        /*@__PURE__*/ S.Struct({ oAuth2: LinkedAccountOAuth2 }),
      ]);
    case 2:
      return S.Array(LinkedAccount);
    case 3:
      return S.suspend(() =>
        S.Struct({
          network: CryptoWalletNetwork,
          linkedAccounts: LinkedAccountList,
          walletAddress: S.optional(S.String),
          redirectUrl: S.optional(S.String),
        }),
      ).annotate({ identifier: "EmbeddedCryptoWallet" });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ embeddedCryptoWallet: EmbeddedCryptoWallet })]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          userId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Payments-User-Id"),
          ),
          agentName: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Payments-Agent-Name"),
          ),
          paymentManagerArn: S.String,
          paymentConnectorId: S.String,
          paymentInstrumentType: PaymentInstrumentType,
          paymentInstrumentDetails: PaymentInstrumentDetails,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/payments/createPaymentInstrument" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePaymentInstrumentRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          paymentInstrumentId: S.String,
          paymentManagerArn: S.String,
          paymentConnectorId: S.String,
          userId: S.String,
          paymentInstrumentType: PaymentInstrumentType,
          paymentInstrumentDetails: PaymentInstrumentDetails,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          status: PaymentInstrumentStatus,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "PaymentInstrument" });
    case 7:
      return S.suspend(() => S.Struct({ paymentInstrument: PaymentInstrument })).annotate({
        identifier: "CreatePaymentInstrumentResponse",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ value: S.String, currency: Currency })).annotate({
        identifier: "Amount",
      });
    case 1:
      return S.suspend(() => S.Struct({ maxSpendAmount: Amount })).annotate({
        identifier: "SessionLimits",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          userId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Payments-User-Id"),
          ),
          agentName: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Payments-Agent-Name"),
          ),
          paymentManagerArn: S.String,
          limits: S.optional(SessionLimits),
          expiryTimeInMinutes: S.Number,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/payments/createPaymentSession" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreatePaymentSessionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          availableSpendAmount: S.optional(Amount),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "AvailableLimits" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          paymentSessionId: S.String,
          paymentManagerArn: S.String,
          limits: S.optional(SessionLimits),
          userId: S.String,
          expiryTimeInMinutes: S.Number,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          availableLimits: S.optional(AvailableLimits),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "PaymentSession" });
    case 5:
      return S.suspend(() => S.Struct({ paymentSession: PaymentSession })).annotate({
        identifier: "CreatePaymentSessionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ abTestId: S.String.pipe(T.HttpLabel("abTestId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/ab-tests/{abTestId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteABTestRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({ abTestId: S.String, abTestArn: S.String, status: ABTestStatus }),
      ).annotate({ identifier: "DeleteABTestResponse" });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ batchEvaluationId: S.String.pipe(T.HttpLabel("batchEvaluationId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/evaluations/batch-evaluate/{batchEvaluationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteBatchEvaluationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          batchEvaluationId: S.String,
          batchEvaluationArn: S.String,
          status: BatchEvaluationStatus,
        }),
      ).annotate({
        identifier: "DeleteBatchEvaluationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          capacityProviderId: S.String.pipe(T.HttpLabel("capacityProviderId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/capacity-providers/{capacityProviderId}/sessions/{sessionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteCapacityProviderSessionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          capacityProviderArn: S.String,
          sessionId: S.String,
          status: CapacityProviderSessionStatus,
        }),
      ).annotate({
        identifier: "DeleteCapacityProviderSessionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
          eventId: S.String.pipe(T.HttpLabel("eventId")),
          actorId: S.String.pipe(T.HttpLabel("actorId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/memories/{memoryId}/actor/{actorId}/sessions/{sessionId}/events/{eventId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteEventInput" });
    case 5:
      return S.suspend(() => S.Struct({ eventId: S.String })).annotate({
        identifier: "DeleteEventOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
          memoryRecordId: S.String.pipe(T.HttpLabel("memoryRecordId")),
          namespace: S.optional(S.String).pipe(T.HttpQuery("namespace")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/memories/{memoryId}/memoryRecords/{memoryRecordId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteMemoryRecordInput" });
    case 7:
      return S.suspend(() => S.Struct({ memoryRecordId: S.String })).annotate({
        identifier: "DeleteMemoryRecordOutput",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          userId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Payments-User-Id"),
          ),
          paymentManagerArn: S.String,
          paymentConnectorId: S.String,
          paymentInstrumentId: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/payments/deletePaymentInstrument" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePaymentInstrumentRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ status: PaymentInstrumentStatus })).annotate({
        identifier: "DeletePaymentInstrumentResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          userId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Payments-User-Id"),
          ),
          paymentManagerArn: S.String,
          paymentSessionId: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/payments/deletePaymentSession" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeletePaymentSessionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ recommendationId: S.String.pipe(T.HttpLabel("recommendationId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/recommendations/{recommendationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteRecommendationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ recommendationId: S.String, status: RecommendationStatus }),
      ).annotate({
        identifier: "DeleteRecommendationResponse",
      });
    case 5:
      return S.Array(S.Any);
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ sessionSpans: Spans })]);
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ spanIds: SpanIds }),
        /*@__PURE__*/ S.Struct({ traceIds: TraceIds }),
      ]);
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          traceId: S.optional(S.String),
          spanId: S.optional(S.String),
        }),
      ).annotate({ identifier: "SpanContext" });
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ spanContext: SpanContext })]);
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ text: S.String })]);
    case 3:
      return S.Array(EvaluationContent);
    case 4:
      return S.suspend(() => S.Struct({ toolNames: S.optional(EvaluationToolNames) })).annotate({
        identifier: "EvaluationExpectedTrajectory",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          context: Context,
          expectedResponse: S.optional(EvaluationContent),
          assertions: S.optional(EvaluationContentList),
          expectedTrajectory: S.optional(EvaluationExpectedTrajectory),
        }),
      ).annotate({ identifier: "EvaluationReferenceInput" });
    case 6:
      return S.Array(EvaluationReferenceInput);
    case 7:
      return S.suspend(() =>
        S.Struct({
          evaluatorId: S.String.pipe(T.HttpLabel("evaluatorId")),
          evaluationInput: EvaluationInput,
          evaluationTarget: S.optional(EvaluationTarget),
          evaluationReferenceInputs: S.optional(EvaluationReferenceInputs),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/evaluations/evaluate/{evaluatorId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "EvaluateRequest" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          inputTokens: S.optional(S.Number),
          outputTokens: S.optional(S.Number),
          totalTokens: S.optional(S.Number),
        }),
      ).annotate({ identifier: "TokenUsage" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          evaluatorArn: S.String,
          evaluatorId: S.String,
          evaluatorName: S.String,
          explanation: S.optional(SensitiveString),
          context: Context,
          value: S.optional(S.Number),
          label: S.optional(S.String),
          tokenUsage: S.optional(TokenUsage),
          errorMessage: S.optional(S.String),
          errorCode: S.optional(S.String),
          ignoredReferenceInputFields: S.optional(IgnoredReferenceInputFields),
        }),
      ).annotate({ identifier: "EvaluationResultContent" });
    case 2:
      return S.Array(EvaluationResultContent);
    case 3:
      return S.suspend(() => S.Struct({ evaluationResults: EvaluationResults })).annotate({
        identifier: "EvaluateResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ abTestId: S.String.pipe(T.HttpLabel("abTestId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/ab-tests/{abTestId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetABTestRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({ variantName: S.String, sampleSize: S.Number, mean: S.Number }),
      ).annotate({ identifier: "ControlStats" });
    case 6:
      return S.suspend(() =>
        S.Struct({ lower: S.optional(S.Number), upper: S.optional(S.Number) }),
      ).annotate({ identifier: "ConfidenceInterval" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          variantName: S.String,
          sampleSize: S.Number,
          mean: S.Number,
          absoluteChange: S.optional(S.Number),
          percentChange: S.optional(S.Number),
          pValue: S.optional(S.Number),
          confidenceInterval: S.optional(ConfidenceInterval),
          isSignificant: S.Boolean,
        }),
      ).annotate({ identifier: "VariantResult" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.Array(VariantResult);
    case 1:
      return S.suspend(() =>
        S.Struct({
          evaluatorArn: S.String,
          controlStats: ControlStats,
          variantResults: VariantResultList,
        }),
      ).annotate({ identifier: "EvaluatorMetric" });
    case 2:
      return S.Array(EvaluatorMetric);
    case 3:
      return S.suspend(() =>
        S.Struct({
          analysisTimestamp: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          evaluatorMetrics: EvaluatorMetricList,
        }),
      ).annotate({ identifier: "ABTestResults" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          abTestId: S.String,
          abTestArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          status: ABTestStatus,
          executionStatus: ABTestExecutionStatus,
          gatewayArn: S.String,
          variants: VariantList,
          gatewayFilter: S.optional(GatewayFilter),
          evaluationConfig: ABTestEvaluationConfig,
          roleArn: S.optional(S.String),
          currentRunId: S.optional(S.String),
          errorDetails: S.optional(ErrorDetailsList),
          startedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          stoppedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          maxDurationExpiresAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          results: S.optional(ABTestResults),
        }),
      ).annotate({ identifier: "GetABTestResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          runtimeSessionId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Runtime-Session-Id"),
            T.IdempotencyToken(),
          ),
          agentRuntimeArn: S.String.pipe(T.HttpLabel("agentRuntimeArn")),
          qualifier: S.optional(S.String).pipe(T.HttpQuery("qualifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/runtimes/{agentRuntimeArn}/invocations/.well-known/agent-card.json",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetAgentCardRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          runtimeSessionId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Runtime-Session-Id"),
          ),
          agentCard: S.Any.pipe(T.HttpPayload()),
          statusCode: S.optional(S.Number).pipe(T.HttpResponseCode()),
        }),
      ).annotate({ identifier: "GetAgentCardResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ batchEvaluationId: S.String.pipe(T.HttpLabel("batchEvaluationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/evaluations/batch-evaluate/{batchEvaluationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetBatchEvaluationRequest",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ evaluatorId: S.String })).annotate({
        identifier: "Evaluator",
      });
    case 1:
      return S.Array(Evaluator);
    case 2:
      return S.suspend(() => S.Struct({ insightId: S.String })).annotate({
        identifier: "Insight",
      });
    case 3:
      return S.Array(Insight);
    case 4:
      return S.suspend(() =>
        S.Struct({
          startTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          endTime: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "SessionFilterConfig" });
    case 5:
      return S.suspend(() => S.Struct({ sessionId: S.String, traceIds: TraceIdList })).annotate({
        identifier: "SessionTraceIds",
      });
    case 6:
      return S.Array(SessionTraceIds);
    case 7:
      return S.suspend(() =>
        S.Struct({
          sessionIds: S.optional(EvaluationStringList),
          timeRange: S.optional(SessionFilterConfig),
          sessionTraceIds: S.optional(SessionTraceIdsList),
        }),
      ).annotate({ identifier: "CloudWatchFilterConfig" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          serviceNames: EvaluationStringList,
          logGroupNames: S.optional(LogGroupNameList),
          logGroupNamePrefixes: S.optional(LogGroupNamePrefixList),
          filterConfig: S.optional(CloudWatchFilterConfig),
        }),
      ).annotate({ identifier: "CloudWatchLogsSource" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          onlineEvaluationConfigArn: S.String,
          timeRange: S.optional(SessionFilterConfig),
        }),
      ).annotate({
        identifier: "OnlineEvaluationConfigSource",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ cloudWatchLogs: CloudWatchLogsSource }),
        /*@__PURE__*/ S.Struct({ onlineEvaluationConfigSource: OnlineEvaluationConfigSource }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          logGroupName: S.optional(S.String),
          logStreamName: S.optional(S.String),
          metricsNamespace: S.optional(S.String),
          resultDestination: S.optional(ResultDestination),
        }),
      ).annotate({ identifier: "CloudWatchOutputConfig" });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ cloudWatchConfig: CloudWatchOutputConfig })]);
    case 5:
      return S.suspend(() => S.Struct({ averageScore: S.optional(S.Number) })).annotate({
        identifier: "EvaluatorStatistics",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          evaluatorId: S.optional(S.String),
          statistics: S.optional(EvaluatorStatistics),
          totalEvaluated: S.optional(S.Number),
          totalFailed: S.optional(S.Number),
        }),
      ).annotate({ identifier: "EvaluatorSummary" });
    case 7:
      return S.Array(EvaluatorSummary);
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          numberOfSessionsCompleted: S.optional(S.Number),
          numberOfSessionsInProgress: S.optional(S.Number),
          numberOfSessionsFailed: S.optional(S.Number),
          totalNumberOfSessions: S.optional(S.Number),
          numberOfSessionsIgnored: S.optional(S.Number),
          evaluatorSummaries: S.optional(EvaluatorSummaryList),
        }),
      ).annotate({ identifier: "EvaluationJobResults" });
    case 1:
      return S.suspend(() =>
        S.Struct({ category: InsightsFailureCategory, evidence: S.String, confidence: S.Number }),
      ).annotate({ identifier: "InsightsFailureSignal" });
    case 2:
      return S.Array(InsightsFailureSignal);
    case 3:
      return S.suspend(() =>
        S.Struct({ spanId: S.String, traceId: S.String, signals: InsightsFailureSignalList }),
      ).annotate({ identifier: "FailureSpanDetail" });
    case 4:
      return S.Array(FailureSpanDetail);
    case 5:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          explanation: S.String,
          fixType: S.String,
          recommendation: S.String,
          failureSpans: FailureSpanDetailList,
        }),
      ).annotate({ identifier: "AffectedSession" });
    case 6:
      return S.Array(AffectedSession);
    case 7:
      return S.suspend(() =>
        S.Struct({
          clusterId: S.Number,
          name: S.String,
          rootCause: S.String,
          recommendation: S.String,
          affectedSessionCount: S.Number,
          affectedSessions: AffectedSessionList,
        }),
      ).annotate({ identifier: "RootCauseCluster" });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Array(RootCauseCluster);
    case 1:
      return S.suspend(() =>
        S.Struct({
          clusterId: S.Number,
          name: S.String,
          description: S.String,
          affectedSessionCount: S.Number,
          rootCauses: RootCauseClusterList,
        }),
      ).annotate({
        identifier: "FailureSubCategoryCluster",
      });
    case 2:
      return S.Array(FailureSubCategoryCluster);
    case 3:
      return S.suspend(() =>
        S.Struct({
          clusterId: S.Number,
          name: S.String,
          description: S.String,
          affectedSessionCount: S.Number,
          subCategories: FailureSubCategoryClusterList,
        }),
      ).annotate({ identifier: "FailureCategoryCluster" });
    case 4:
      return S.Array(FailureCategoryCluster);
    case 5:
      return S.suspend(() => S.Struct({ failures: FailureCategoryClusterList })).annotate({
        identifier: "FailureAnalysisResultContent",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ sessionId: S.String, userMessages: UserIntentList }),
      ).annotate({
        identifier: "UserIntentAffectedSession",
      });
    case 7:
      return S.Array(UserIntentAffectedSession);
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clusterId: S.Number,
          name: S.String,
          description: S.String,
          affectedSessionCount: S.Number,
          affectedSessions: UserIntentAffectedSessionList,
        }),
      ).annotate({ identifier: "UserIntentCluster" });
    case 1:
      return S.Array(UserIntentCluster);
    case 2:
      return S.suspend(() => S.Struct({ userIntents: UserIntentClusterList })).annotate({
        identifier: "UserIntentClusteringResultContent",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ sessionId: S.String, approachTaken: S.String, finalOutcome: S.String }),
      ).annotate({
        identifier: "ExecutionSummaryAffectedSession",
      });
    case 4:
      return S.Array(ExecutionSummaryAffectedSession);
    case 5:
      return S.suspend(() =>
        S.Struct({
          clusterId: S.Number,
          name: S.String,
          description: S.String,
          affectedSessionCount: S.Number,
          affectedSessions: ExecutionSummaryAffectedSessionList,
        }),
      ).annotate({ identifier: "ExecutionSummaryCluster" });
    case 6:
      return S.Array(ExecutionSummaryCluster);
    case 7:
      return S.suspend(() =>
        S.Struct({ executionSummaries: ExecutionSummaryClusterList }),
      ).annotate({
        identifier: "ExecutionSummaryClusteringResultContent",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          batchEvaluationId: S.String,
          batchEvaluationArn: S.String,
          batchEvaluationName: S.String,
          status: BatchEvaluationStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          evaluators: S.optional(EvaluatorList),
          insights: S.optional(InsightList),
          dataSourceConfig: S.optional(DataSourceConfig),
          outputConfig: S.optional(OutputConfig),
          evaluationResults: S.optional(EvaluationJobResults),
          failureAnalysisResult: S.optional(FailureAnalysisResultContent),
          userIntentResult: S.optional(UserIntentClusteringResultContent),
          executionSummaryResult: S.optional(ExecutionSummaryClusteringResultContent),
          errorDetails: S.optional(ErrorDetailsList),
          description: S.optional(S.String),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetBatchEvaluationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          browserIdentifier: S.String.pipe(T.HttpLabel("browserIdentifier")),
          sessionId: S.String.pipe(T.HttpQuery("sessionId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/browsers/{browserIdentifier}/sessions/get" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetBrowserSessionRequest" });
    case 2:
      return S.suspend(() => S.Struct({ width: S.Number, height: S.Number })).annotate({
        identifier: "ViewPort",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ bucket: S.String, prefix: S.String, versionId: S.optional(S.String) }),
      ).annotate({ identifier: "S3Location" });
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ s3: S3Location })]);
    case 5:
      return S.suspend(() => S.Struct({ location: ResourceLocation })).annotate({
        identifier: "BrowserExtension",
      });
    case 6:
      return S.Array(BrowserExtension);
    case 7:
      return S.suspend(() =>
        S.Struct({ location: ResourceLocation, type: S.optional(BrowserEnterprisePolicyType) }),
      ).annotate({ identifier: "BrowserEnterprisePolicy" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.Array(BrowserEnterprisePolicy);
    case 1:
      return S.suspend(() => S.Struct({ profileIdentifier: S.String })).annotate({
        identifier: "BrowserProfileConfiguration",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ streamEndpoint: S.String, streamStatus: AutomationStreamStatus }),
      ).annotate({ identifier: "AutomationStream" });
    case 3:
      return S.suspend(() => S.Struct({ streamEndpoint: S.optional(S.String) })).annotate({
        identifier: "LiveViewStream",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          automationStream: AutomationStream,
          liveViewStream: S.optional(LiveViewStream),
        }),
      ).annotate({ identifier: "BrowserSessionStream" });
    case 5:
      return S.suspend(() => S.Struct({ secretArn: S.String })).annotate({
        identifier: "BasicAuth",
      });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ basicAuth: BasicAuth })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          server: S.String,
          port: S.Number,
          domainPatterns: S.optional(DomainPatterns),
          credentials: S.optional(ProxyCredentials),
        }),
      ).annotate({ identifier: "ExternalProxy" });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ externalProxy: ExternalProxy })]);
    case 1:
      return S.Array(Proxy);
    case 2:
      return S.suspend(() => S.Struct({ domainPatterns: S.optional(DomainPatterns) })).annotate({
        identifier: "ProxyBypass",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ proxies: Proxies, bypass: S.optional(ProxyBypass) }),
      ).annotate({ identifier: "ProxyConfiguration" });
    case 4:
      return S.suspend(() => S.Struct({ secretArn: S.String })).annotate({
        identifier: "SecretsManagerLocation",
      });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ secretsManager: SecretsManagerLocation })]);
    case 6:
      return S.suspend(() => S.Struct({ location: CertificateLocation })).annotate({
        identifier: "Certificate",
      });
    case 7:
      return S.Array(Certificate);
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ accessPointArn: S.String, mountPath: S.String, fileSystemArn: S.String }),
      ).annotate({ identifier: "S3FilesConfiguration" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ s3FilesConfiguration: S3FilesConfiguration }),
        /*@__PURE__*/ S.Struct({ efsConfiguration: EfsConfiguration }),
      ]);
    case 2:
      return S.Array(ToolsFileSystemConfiguration);
    case 3:
      return S.suspend(() =>
        S.Struct({
          browserIdentifier: S.String,
          sessionId: S.String,
          name: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          viewPort: S.optional(ViewPort),
          extensions: S.optional(BrowserExtensions),
          enterprisePolicies: S.optional(BrowserEnterprisePolicies),
          profileConfiguration: S.optional(BrowserProfileConfiguration),
          sessionTimeoutSeconds: S.optional(S.Number),
          status: S.optional(BrowserSessionStatus),
          streams: S.optional(BrowserSessionStream),
          proxyConfiguration: S.optional(ProxyConfiguration),
          certificates: S.optional(Certificates),
          filesystemConfigurations: S.optional(ToolsFileSystemConfigurations),
          sessionReplayArtifact: S.optional(S.String),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "GetBrowserSessionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          codeInterpreterIdentifier: S.String.pipe(T.HttpLabel("codeInterpreterIdentifier")),
          sessionId: S.String.pipe(T.HttpQuery("sessionId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/code-interpreters/{codeInterpreterIdentifier}/sessions/get",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCodeInterpreterSessionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          codeInterpreterIdentifier: S.String,
          sessionId: S.String,
          name: S.optional(S.String),
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          sessionTimeoutSeconds: S.optional(S.Number),
          status: S.optional(CodeInterpreterSessionStatus),
          certificates: S.optional(Certificates),
          filesystemConfigurations: S.optional(ToolsFileSystemConfigurations),
        }),
      ).annotate({
        identifier: "GetCodeInterpreterSessionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
          actorId: S.String.pipe(T.HttpLabel("actorId")),
          eventId: S.String.pipe(T.HttpLabel("eventId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/memories/{memoryId}/actor/{actorId}/sessions/{sessionId}/events/{eventId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetEventInput" });
    case 7:
      return S.suspend(() => S.Struct({ event: Event })).annotate({
        identifier: "GetEventOutput",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
          memoryRecordId: S.String.pipe(T.HttpLabel("memoryRecordId")),
          namespace: S.optional(S.String).pipe(T.HttpQuery("namespace")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/memories/{memoryId}/memoryRecord/{memoryRecordId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetMemoryRecordInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          memoryRecordId: S.String,
          content: MemoryContent,
          memoryStrategyId: S.optional(S.String),
          namespaces: NamespacesList,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          metadata: S.optional(MemoryRecordMetadataMap),
        }),
      ).annotate({ identifier: "MemoryRecord" });
    case 2:
      return S.suspend(() => S.Struct({ memoryRecord: MemoryRecord })).annotate({
        identifier: "GetMemoryRecordOutput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          userId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Payments-User-Id"),
          ),
          agentName: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Payments-Agent-Name"),
          ),
          paymentManagerArn: S.String,
          paymentConnectorId: S.optional(S.String),
          paymentInstrumentId: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/payments/getPaymentInstrument" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPaymentInstrumentRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          userId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Payments-User-Id"),
          ),
          agentName: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Payments-Agent-Name"),
          ),
          paymentManagerArn: S.String,
          paymentConnectorId: S.String,
          paymentInstrumentId: S.String,
          chain: BlockchainChainId,
          token: InstrumentBalanceToken,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/payments/getPaymentInstrumentBalance" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPaymentInstrumentBalanceRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          amount: S.String,
          decimals: S.Number,
          token: InstrumentBalanceToken,
          network: CryptoWalletNetwork,
          chain: BlockchainChainId,
        }),
      ).annotate({ identifier: "TokenBalance" });
    case 6:
      return S.suspend(() =>
        S.Struct({ paymentInstrumentId: S.String, tokenBalance: TokenBalance }),
      ).annotate({
        identifier: "GetPaymentInstrumentBalanceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          userId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Payments-User-Id"),
          ),
          agentName: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Payments-Agent-Name"),
          ),
          paymentManagerArn: S.String,
          paymentSessionId: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/payments/getPaymentSession" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPaymentSessionRequest" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ recommendationId: S.String.pipe(T.HttpLabel("recommendationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/recommendations/{recommendationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetRecommendationRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ bundleArn: S.String, versionId: S.String, systemPromptJsonPath: S.String }),
      ).annotate({
        identifier: "SystemPromptConfigurationBundle",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: SensitiveString }),
        /*@__PURE__*/ S.Struct({ configurationBundle: SystemPromptConfigurationBundle }),
      ]);
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ stringValue: S.String }),
        /*@__PURE__*/ S.Struct({ doubleValue: S.Number }),
        /*@__PURE__*/ S.Struct({ booleanValue: S.Boolean }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({ key: S.String, operator: CloudWatchLogsFilterOperator, value: FilterValue }),
      ).annotate({ identifier: "CloudWatchLogsFilter" });
    case 5:
      return S.Array(CloudWatchLogsFilter);
    case 6:
      return S.suspend(() => S.Struct({ filters: S.optional(CloudWatchLogsFilterList) })).annotate({
        identifier: "CloudWatchLogsRule",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          logGroupArns: LogGroupArnList,
          serviceNames: ServiceNameList,
          startTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          rule: S.optional(CloudWatchLogsRule),
        }),
      ).annotate({
        identifier: "CloudWatchLogsTraceConfig",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ batchEvaluationArn: S.String })).annotate({
        identifier: "BatchEvaluationTraceConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          onlineEvaluationConfigArn: S.String,
          startTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          endTime: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "OnlineEvaluationTraceConfig",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ sessionSpans: Spans }),
        /*@__PURE__*/ S.Struct({ cloudwatchLogs: CloudWatchLogsTraceConfig }),
        /*@__PURE__*/ S.Struct({ batchEvaluation: BatchEvaluationTraceConfig }),
        /*@__PURE__*/ S.Struct({ onlineEvaluation: OnlineEvaluationTraceConfig }),
      ]);
    case 3:
      return S.suspend(() => S.Struct({ evaluatorArn: S.String })).annotate({
        identifier: "RecommendationEvaluatorReference",
      });
    case 4:
      return S.Array(RecommendationEvaluatorReference);
    case 5:
      return S.suspend(() => S.Struct({ evaluators: RecommendationEvaluatorList })).annotate({
        identifier: "RecommendationEvaluationConfig",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          systemPrompt: SystemPromptConfig,
          agentTraces: AgentTracesConfig,
          evaluationConfig: S.optional(RecommendationEvaluationConfig),
        }),
      ).annotate({
        identifier: "SystemPromptRecommendationConfig",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ toolName: S.String, toolDescription: ToolDescriptionConfig }),
      ).annotate({ identifier: "ToolDescriptionInput" });
  }
}
function __c25(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ToolDescriptionInput);
    case 1:
      return S.suspend(() => S.Struct({ tools: ToolDescriptionList })).annotate({
        identifier: "ToolDescriptionTextInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ toolName: S.String, toolDescriptionJsonPath: S.String }),
      ).annotate({
        identifier: "ConfigurationBundleToolEntry",
      });
    case 3:
      return S.Array(ConfigurationBundleToolEntry);
    case 4:
      return S.suspend(() =>
        S.Struct({
          bundleArn: S.String,
          versionId: S.String,
          tools: ConfigurationBundleToolEntryList,
        }),
      ).annotate({
        identifier: "ToolDescriptionConfigurationBundle",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ toolDescriptionText: ToolDescriptionTextInput }),
        /*@__PURE__*/ S.Struct({ configurationBundle: ToolDescriptionConfigurationBundle }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({ toolDescription: ToolDescriptionSource, agentTraces: AgentTracesConfig }),
      ).annotate({
        identifier: "ToolDescriptionRecommendationConfig",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          systemPromptRecommendationConfig: SystemPromptRecommendationConfig,
        }),
        /*@__PURE__*/ S.Struct({
          toolDescriptionRecommendationConfig: ToolDescriptionRecommendationConfig,
        }),
      ]);
  }
}
function __c26(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ bundleArn: S.String, versionId: S.String })).annotate({
        identifier: "RecommendationResultConfigurationBundle",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          recommendedSystemPrompt: S.optional(SensitiveString),
          configurationBundle: S.optional(RecommendationResultConfigurationBundle),
          explanation: S.optional(S.String),
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SystemPromptRecommendationResult",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          toolName: S.String,
          recommendedToolDescription: S.optional(SensitiveString),
          explanation: S.optional(S.String),
        }),
      ).annotate({ identifier: "ToolDescriptionOutput" });
    case 3:
      return S.Array(ToolDescriptionOutput);
    case 4:
      return S.suspend(() =>
        S.Struct({
          tools: S.optional(ToolDescriptionResultList),
          configurationBundle: S.optional(RecommendationResultConfigurationBundle),
          errorCode: S.optional(S.String),
          errorMessage: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ToolDescriptionRecommendationResult",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          systemPromptRecommendationResult: SystemPromptRecommendationResult,
        }),
        /*@__PURE__*/ S.Struct({
          toolDescriptionRecommendationResult: ToolDescriptionRecommendationResult,
        }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          recommendationId: S.String,
          recommendationArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          type: RecommendationType,
          recommendationConfig: RecommendationConfig,
          status: RecommendationStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          recommendationResult: S.optional(RecommendationResult),
          kmsKeyArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "GetRecommendationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          workloadIdentityToken: SensitiveString,
          resourceCredentialProviderName: S.String,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/api-key" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetResourceApiKeyRequest" });
  }
}
function __c27(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ apiKey: SensitiveString })).annotate({
        identifier: "GetResourceApiKeyResponse",
      });
    case 1:
      return S.Record(S.String, /*@__PURE__*/ SensitiveString.pipe(S.optional));
    case 2:
      return S.suspend(() =>
        S.Struct({
          workloadIdentityToken: SensitiveString,
          resourceCredentialProviderName: S.String,
          scopes: ScopesListType,
          oauth2Flow: Oauth2FlowType,
          sessionUri: S.optional(S.String),
          resourceOauth2ReturnUrl: S.optional(S.String),
          forceAuthentication: S.optional(S.Boolean),
          customParameters: S.optional(CustomRequestParametersType),
          customState: S.optional(SensitiveString),
          resources: S.optional(ResourcesListType),
          audiences: S.optional(AudiencesListType),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/oauth2/token" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetResourceOauth2TokenRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          authorizationUrl: S.optional(SensitiveString),
          accessToken: S.optional(SensitiveString),
          sessionUri: S.optional(S.String),
          sessionStatus: S.optional(SessionStatus),
        }),
      ).annotate({
        identifier: "GetResourceOauth2TokenResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          requestMethod: PaymentHttpMethodType,
          requestHost: S.optional(S.String),
          requestPath: S.String,
          includeWalletAuthToken: S.optional(S.Boolean),
          requestBody: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CoinbaseCdpTokenRequestInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          requestHost: S.optional(S.String),
          requestPath: S.String,
          requestBody: SensitiveString,
          includeAuthorizationSignature: S.optional(S.Boolean),
        }),
      ).annotate({
        identifier: "StripePrivyTokenRequestInput",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ coinbaseCdpTokenRequest: CoinbaseCdpTokenRequestInput }),
        /*@__PURE__*/ S.Struct({ stripePrivyTokenRequest: StripePrivyTokenRequestInput }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          workloadIdentityToken: SensitiveString,
          resourceCredentialProviderName: S.String,
          paymentTokenRequest: PaymentTokenRequestInput,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/payment/token" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetResourcePaymentTokenRequest",
      });
  }
}
function __c28(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ bearerToken: SensitiveString, walletAuthToken: S.optional(SensitiveString) }),
      ).annotate({
        identifier: "CoinbaseCdpTokenResponseOutput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          authorizationSignature: S.optional(SensitiveString),
          requestExpiry: S.optional(S.Number),
          appId: S.String,
          basicAuthToken: SensitiveString,
        }),
      ).annotate({
        identifier: "StripePrivyTokenResponseOutput",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ coinbaseCdpTokenResponse: CoinbaseCdpTokenResponseOutput }),
        /*@__PURE__*/ S.Struct({ stripePrivyTokenResponse: StripePrivyTokenResponseOutput }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({ paymentTokenResponse: PaymentTokenResponseOutput }),
      ).annotate({
        identifier: "GetResourcePaymentTokenResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ workloadName: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/GetWorkloadAccessToken" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWorkloadAccessTokenRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ workloadAccessToken: SensitiveString })).annotate({
        identifier: "GetWorkloadAccessTokenResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ workloadName: S.String, userToken: SensitiveString }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/GetWorkloadAccessTokenForJWT" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWorkloadAccessTokenForJWTRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ workloadName: S.String, userId: S.String }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identities/GetWorkloadAccessTokenForUserId" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetWorkloadAccessTokenForUserIdRequest",
      });
  }
}
function __c29(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ conversational: Conversational }),
        /*@__PURE__*/ S.Struct({ json: MemoryJsonData }),
      ]);
    case 1:
      return S.Array(IngestPayloadType);
    case 2:
      return S.suspend(() => S.Struct({ payload: IngestPayloadList })).annotate({
        identifier: "InlineMemoryContent",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ inline: InlineMemoryContent })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
          source: ContentSource,
          contentTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          actorId: S.String,
          sessionId: S.optional(S.String),
          extractionConfig: S.optional(ExtractionConfig),
          metadata: S.optional(MetadataMap),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/memories/{memoryId}/ingest" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "IngestDataInput" });
    case 5:
      return S.suspend(() => S.Struct({ sessionId: S.String })).annotate({
        identifier: "IngestDataOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          contentType: S.optional(S.String).pipe(T.HttpHeader("Content-Type")),
          accept: S.optional(S.String).pipe(T.HttpHeader("Accept")),
          mcpSessionId: S.optional(S.String).pipe(T.HttpHeader("Mcp-Session-Id")),
          runtimeSessionId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Runtime-Session-Id"),
            T.IdempotencyToken(),
          ),
          mcpProtocolVersion: S.optional(S.String).pipe(T.HttpHeader("Mcp-Protocol-Version")),
          mcpMethod: S.optional(S.String).pipe(T.HttpHeader("Mcp-Method")),
          mcpName: S.optional(S.String).pipe(T.HttpHeader("Mcp-Name")),
          runtimeUserId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Runtime-User-Id"),
          ),
          traceId: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Trace-Id")),
          traceParent: S.optional(S.String).pipe(T.HttpHeader("traceparent")),
          traceState: S.optional(S.String).pipe(T.HttpHeader("tracestate")),
          baggage: S.optional(S.String).pipe(T.HttpHeader("baggage")),
          agentRuntimeArn: S.String.pipe(T.HttpLabel("agentRuntimeArn")),
          qualifier: S.optional(S.String).pipe(T.HttpQuery("qualifier")),
          accountId: S.optional(S.String).pipe(T.HttpQuery("accountId")),
          payload: T.StreamingInput.pipe(T.HttpPayload()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/runtimes/{agentRuntimeArn}/invocations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "InvokeAgentRuntimeRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          runtimeSessionId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Runtime-Session-Id"),
          ),
          mcpSessionId: S.optional(S.String).pipe(T.HttpHeader("Mcp-Session-Id")),
          mcpProtocolVersion: S.optional(S.String).pipe(T.HttpHeader("Mcp-Protocol-Version")),
          traceId: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Trace-Id")),
          traceParent: S.optional(S.String).pipe(T.HttpHeader("traceparent")),
          traceState: S.optional(S.String).pipe(T.HttpHeader("tracestate")),
          baggage: S.optional(S.String).pipe(T.HttpHeader("baggage")),
          contentType: S.String.pipe(T.HttpHeader("Content-Type")),
          response: S.optional(T.StreamingOutput).pipe(T.HttpPayload()),
          statusCode: S.optional(S.Number).pipe(T.HttpResponseCode()),
        }),
      ).annotate({
        identifier: "InvokeAgentRuntimeResponse",
      });
  }
}
function __c30(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ command: S.String, timeout: S.optional(S.Number) }),
      ).annotate({
        identifier: "InvokeAgentRuntimeCommandRequestBody",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          contentType: S.optional(S.String).pipe(T.HttpHeader("Content-Type")),
          accept: S.optional(S.String).pipe(T.HttpHeader("Accept")),
          runtimeSessionId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Runtime-Session-Id"),
            T.IdempotencyToken(),
          ),
          traceId: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Trace-Id")),
          traceParent: S.optional(S.String).pipe(T.HttpHeader("traceparent")),
          traceState: S.optional(S.String).pipe(T.HttpHeader("tracestate")),
          baggage: S.optional(S.String).pipe(T.HttpHeader("baggage")),
          agentRuntimeArn: S.String.pipe(T.HttpLabel("agentRuntimeArn")),
          qualifier: S.optional(S.String).pipe(T.HttpQuery("qualifier")),
          accountId: S.optional(S.String).pipe(T.HttpQuery("accountId")),
          body: InvokeAgentRuntimeCommandRequestBody.pipe(T.HttpPayload()).annotate({
            identifier: "InvokeAgentRuntimeCommandRequestBody",
          }),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/runtimes/{agentRuntimeArn}/commands" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "InvokeAgentRuntimeCommandRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "ContentStartEvent",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ stdout: S.optional(S.String), stderr: S.optional(S.String) }),
      ).annotate({ identifier: "ContentDeltaEvent" });
    case 4:
      return S.suspend(() =>
        S.Struct({ exitCode: S.Number, status: CommandExecutionStatus }),
      ).annotate({ identifier: "ContentStopEvent" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          contentStart: S.optional(ContentStartEvent),
          contentDelta: S.optional(ContentDeltaEvent),
          contentStop: S.optional(ContentStopEvent),
        }),
      ).annotate({ identifier: "ResponseChunk" });
    case 6:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 7:
      return S.Array(ValidationExceptionField);
  }
}
function __c31(j: number): any {
  switch (j) {
    case 0:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ chunk: ResponseChunk }),
          /*@__PURE__*/ S.Struct({
            accessDeniedException: /*@__PURE__*/ S.suspend(() => AccessDeniedException).annotate({
              identifier: "AccessDeniedException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            internalServerException: /*@__PURE__*/ S.suspend(
              () => InternalServerException,
            ).annotate({
              identifier: "InternalServerException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            resourceNotFoundException: /*@__PURE__*/ S.suspend(
              () => ResourceNotFoundException,
            ).annotate({
              identifier: "ResourceNotFoundException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            serviceQuotaExceededException: /*@__PURE__*/ S.suspend(
              () => ServiceQuotaExceededException,
            ).annotate({
              identifier: "ServiceQuotaExceededException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            throttlingException: /*@__PURE__*/ S.suspend(() => ThrottlingException).annotate({
              identifier: "ThrottlingException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            validationException: /*@__PURE__*/ S.suspend(() => ValidationException).annotate({
              identifier: "ValidationException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            runtimeClientError: /*@__PURE__*/ S.suspend(() => RuntimeClientError).annotate({
              identifier: "RuntimeClientError",
            }),
          }),
        ]),
      );
    case 1:
      return S.suspend(() =>
        S.Struct({
          runtimeSessionId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Runtime-Session-Id"),
          ),
          traceId: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Trace-Id")),
          traceParent: S.optional(S.String).pipe(T.HttpHeader("traceparent")),
          traceState: S.optional(S.String).pipe(T.HttpHeader("tracestate")),
          baggage: S.optional(S.String).pipe(T.HttpHeader("baggage")),
          contentType: S.String.pipe(T.HttpHeader("Content-Type")),
          statusCode: S.optional(S.Number).pipe(T.HttpResponseCode()),
          stream: InvokeAgentRuntimeCommandStreamOutput.pipe(T.HttpPayload()),
        }),
      ).annotate({
        identifier: "InvokeAgentRuntimeCommandResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          x: S.Number,
          y: S.Number,
          button: S.optional(MouseButton),
          clickCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "MouseClickArguments" });
    case 3:
      return S.suspend(() => S.Struct({ x: S.Number, y: S.Number })).annotate({
        identifier: "MouseMoveArguments",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          endX: S.Number,
          endY: S.Number,
          startX: S.Number,
          startY: S.Number,
          button: S.optional(MouseButton),
        }),
      ).annotate({ identifier: "MouseDragArguments" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          x: S.Number,
          y: S.Number,
          deltaX: S.optional(S.Number),
          deltaY: S.optional(S.Number),
        }),
      ).annotate({ identifier: "MouseScrollArguments" });
    case 6:
      return S.suspend(() => S.Struct({ text: S.String })).annotate({
        identifier: "KeyTypeArguments",
      });
    case 7:
      return S.suspend(() => S.Struct({ key: S.String, presses: S.optional(S.Number) })).annotate({
        identifier: "KeyPressArguments",
      });
  }
}
function __c32(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ keys: KeyList })).annotate({
        identifier: "KeyShortcutArguments",
      });
    case 1:
      return S.suspend(() => S.Struct({ format: S.optional(ScreenshotFormat) })).annotate({
        identifier: "ScreenshotArguments",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ mouseClick: MouseClickArguments }),
        /*@__PURE__*/ S.Struct({ mouseMove: MouseMoveArguments }),
        /*@__PURE__*/ S.Struct({ mouseDrag: MouseDragArguments }),
        /*@__PURE__*/ S.Struct({ mouseScroll: MouseScrollArguments }),
        /*@__PURE__*/ S.Struct({ keyType: KeyTypeArguments }),
        /*@__PURE__*/ S.Struct({ keyPress: KeyPressArguments }),
        /*@__PURE__*/ S.Struct({ keyShortcut: KeyShortcutArguments }),
        /*@__PURE__*/ S.Struct({ screenshot: ScreenshotArguments }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          browserIdentifier: S.String.pipe(T.HttpLabel("browserIdentifier")),
          sessionId: S.String.pipe(T.HttpHeader("x-amzn-browser-session-id")),
          action: BrowserAction,
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/browsers/{browserIdentifier}/sessions/invoke" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "InvokeBrowserRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ status: BrowserActionStatus, error: S.optional(S.String) }),
      ).annotate({ identifier: "MouseClickResult" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          status: BrowserActionStatus,
          error: S.optional(S.String),
          data: S.optional(T.Blob),
        }),
      ).annotate({ identifier: "ScreenshotResult" });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ mouseClick: MouseClickResult }),
        /*@__PURE__*/ S.Struct({ mouseMove: MouseMoveResult }),
        /*@__PURE__*/ S.Struct({ mouseDrag: MouseDragResult }),
        /*@__PURE__*/ S.Struct({ mouseScroll: MouseScrollResult }),
        /*@__PURE__*/ S.Struct({ keyType: KeyTypeResult }),
        /*@__PURE__*/ S.Struct({ keyPress: KeyPressResult }),
        /*@__PURE__*/ S.Struct({ keyShortcut: KeyShortcutResult }),
        /*@__PURE__*/ S.Struct({ screenshot: ScreenshotResult }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          result: BrowserActionResult,
          sessionId: S.String.pipe(T.HttpHeader("x-amzn-browser-session-id")),
        }),
      ).annotate({ identifier: "InvokeBrowserResponse" });
  }
}
function __c33(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ path: S.String, text: S.optional(S.String), blob: S.optional(SensitiveBlob) }),
      ).annotate({ identifier: "InputContentBlock" });
    case 1:
      return S.Array(InputContentBlock);
    case 2:
      return S.suspend(() =>
        S.Struct({
          code: S.optional(S.String),
          language: S.optional(ProgrammingLanguage),
          clearContext: S.optional(S.Boolean),
          command: S.optional(S.String),
          path: S.optional(S.String),
          paths: S.optional(StringList),
          content: S.optional(InputContentBlockList),
          directoryPath: S.optional(S.String),
          taskId: S.optional(S.String),
          runtime: S.optional(LanguageRuntime),
        }),
      ).annotate({ identifier: "ToolArguments" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          codeInterpreterIdentifier: S.String.pipe(T.HttpLabel("codeInterpreterIdentifier")),
          sessionId: S.optional(S.String).pipe(T.HttpHeader("x-amzn-code-interpreter-session-id")),
          traceId: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Trace-Id")),
          traceParent: S.optional(S.String).pipe(T.HttpHeader("traceparent")),
          name: ToolName,
          arguments: S.optional(ToolArguments),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/code-interpreters/{codeInterpreterIdentifier}/tools/invoke",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "InvokeCodeInterpreterRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          type: ResourceContentType,
          uri: S.optional(S.String),
          mimeType: S.optional(S.String),
          text: S.optional(S.String),
          blob: S.optional(T.Blob),
        }),
      ).annotate({ identifier: "ResourceContent" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          type: ContentBlockType,
          text: S.optional(S.String),
          data: S.optional(T.Blob),
          mimeType: S.optional(S.String),
          uri: S.optional(S.String),
          name: S.optional(S.String),
          description: S.optional(S.String),
          size: S.optional(S.Number),
          resource: S.optional(ResourceContent),
        }),
      ).annotate({ identifier: "ContentBlock" });
    case 6:
      return S.Array(ContentBlock);
    case 7:
      return S.suspend(() =>
        S.Struct({
          taskId: S.optional(S.String),
          taskStatus: S.optional(TaskStatus),
          stdout: S.optional(S.String),
          stderr: S.optional(S.String),
          exitCode: S.optional(S.Number),
          executionTime: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "ToolResultStructuredContent",
      });
  }
}
function __c34(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          content: ContentBlockList,
          structuredContent: S.optional(ToolResultStructuredContent),
          isError: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "CodeInterpreterResult" });
    case 1:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ result: CodeInterpreterResult }),
          /*@__PURE__*/ S.Struct({
            accessDeniedException: /*@__PURE__*/ S.suspend(() => AccessDeniedException).annotate({
              identifier: "AccessDeniedException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            conflictException: /*@__PURE__*/ S.suspend(() => ConflictException).annotate({
              identifier: "ConflictException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            internalServerException: /*@__PURE__*/ S.suspend(
              () => InternalServerException,
            ).annotate({
              identifier: "InternalServerException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            resourceNotFoundException: /*@__PURE__*/ S.suspend(
              () => ResourceNotFoundException,
            ).annotate({
              identifier: "ResourceNotFoundException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            serviceQuotaExceededException: /*@__PURE__*/ S.suspend(
              () => ServiceQuotaExceededException,
            ).annotate({
              identifier: "ServiceQuotaExceededException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            throttlingException: /*@__PURE__*/ S.suspend(() => ThrottlingException).annotate({
              identifier: "ThrottlingException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            validationException: /*@__PURE__*/ S.suspend(() => ValidationException).annotate({
              identifier: "ValidationException",
            }),
          }),
        ]),
      );
    case 2:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.optional(S.String).pipe(T.HttpHeader("x-amzn-code-interpreter-session-id")),
          stream: CodeInterpreterStreamOutput.pipe(T.HttpPayload()),
        }),
      ).annotate({
        identifier: "InvokeCodeInterpreterResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          toolUseId: S.String,
          input: S.Any,
          type: S.optional(HarnessToolUseType),
          serverName: S.optional(S.String),
        }),
      ).annotate({ identifier: "HarnessToolUseBlock" });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: SensitiveString }),
        /*@__PURE__*/ S.Struct({ json: S.Any }),
      ]);
    case 5:
      return S.Array(HarnessToolResultContentBlock);
    case 6:
      return S.suspend(() =>
        S.Struct({
          toolUseId: S.String,
          content: HarnessToolResultContentBlocks,
          status: S.optional(HarnessToolUseStatus),
          type: S.optional(HarnessToolUseType),
        }),
      ).annotate({ identifier: "HarnessToolResultBlock" });
    case 7:
      return S.suspend(() =>
        S.Struct({ text: S.String, signature: S.optional(S.String) }),
      ).annotate({
        identifier: "HarnessReasoningTextBlock",
      });
  }
}
function __c35(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ reasoningText: HarnessReasoningTextBlock }),
        /*@__PURE__*/ S.Struct({ redactedContent: T.Blob }),
      ]);
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: SensitiveString }),
        /*@__PURE__*/ S.Struct({ toolUse: HarnessToolUseBlock }),
        /*@__PURE__*/ S.Struct({ toolResult: HarnessToolResultBlock }),
        /*@__PURE__*/ S.Struct({ reasoningContent: HarnessReasoningContentBlock }),
      ]);
    case 2:
      return S.Array(HarnessContentBlock);
    case 3:
      return S.suspend(() =>
        S.Struct({ role: HarnessConversationRole, content: HarnessContentBlocks }),
      ).annotate({ identifier: "HarnessMessage" });
    case 4:
      return S.Array(HarnessMessage);
    case 5:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          maxTokens: S.optional(S.Number),
          temperature: S.optional(S.Number),
          topP: S.optional(S.Number),
          apiFormat: S.optional(HarnessBedrockApiFormat),
          additionalParams: S.optional(S.Any),
        }),
      ).annotate({
        identifier: "HarnessBedrockModelConfig",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          apiKeyArn: S.String,
          apiBase: S.optional(SensitiveString),
          maxTokens: S.optional(S.Number),
          temperature: S.optional(S.Number),
          topP: S.optional(S.Number),
          apiFormat: S.optional(HarnessOpenAiApiFormat),
          additionalParams: S.optional(S.Any),
        }),
      ).annotate({ identifier: "HarnessOpenAiModelConfig" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          apiKeyArn: S.String,
          maxTokens: S.optional(S.Number),
          temperature: S.optional(S.Number),
          topP: S.optional(S.Number),
          topK: S.optional(S.Number),
          additionalParams: S.optional(S.Any),
        }),
      ).annotate({ identifier: "HarnessGeminiModelConfig" });
  }
}
function __c36(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          modelId: S.String,
          apiKeyArn: S.optional(S.String),
          apiBase: S.optional(SensitiveString),
          maxTokens: S.optional(S.Number),
          temperature: S.optional(S.Number),
          topP: S.optional(S.Number),
          additionalParams: S.optional(S.Any),
        }),
      ).annotate({
        identifier: "HarnessLiteLlmModelConfig",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ bedrockModelConfig: HarnessBedrockModelConfig }),
        /*@__PURE__*/ S.Struct({ openAiModelConfig: HarnessOpenAiModelConfig }),
        /*@__PURE__*/ S.Struct({ geminiModelConfig: HarnessGeminiModelConfig }),
        /*@__PURE__*/ S.Struct({ liteLlmModelConfig: HarnessLiteLlmModelConfig }),
      ]);
    case 2:
      return S.Array(HarnessSystemContentBlock);
    case 3:
      return S.suspend(() =>
        S.Struct({ url: SensitiveString, headers: S.optional(HttpHeadersMap) }),
      ).annotate({ identifier: "HarnessRemoteMcpConfig" });
    case 4:
      return S.suspend(() => S.Struct({ browserArn: S.optional(S.String) })).annotate({
        identifier: "HarnessAgentCoreBrowserConfig",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          providerArn: S.String,
          scopes: OAuthScopes,
          customParameters: S.optional(OAuthCustomParameters),
          grantType: S.optional(OAuthGrantType),
          defaultReturnUrl: S.optional(S.String),
        }),
      ).annotate({ identifier: "OAuthCredentialProvider" });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ awsIam: /*@__PURE__*/ S.Struct({}) }),
        /*@__PURE__*/ S.Struct({ none: /*@__PURE__*/ S.Struct({}) }),
        /*@__PURE__*/ S.Struct({ oauth: OAuthCredentialProvider }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({ gatewayArn: S.String, outboundAuth: S.optional(HarnessGatewayOutboundAuth) }),
      ).annotate({
        identifier: "HarnessAgentCoreGatewayConfig",
      });
  }
}
function __c37(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ description: SensitiveString, inputSchema: S.Any }),
      ).annotate({
        identifier: "HarnessInlineFunctionConfig",
      });
    case 1:
      return S.suspend(() => S.Struct({ codeInterpreterArn: S.optional(S.String) })).annotate({
        identifier: "HarnessAgentCoreCodeInterpreterConfig",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ remoteMcp: HarnessRemoteMcpConfig }),
        /*@__PURE__*/ S.Struct({ agentCoreBrowser: HarnessAgentCoreBrowserConfig }),
        /*@__PURE__*/ S.Struct({ agentCoreGateway: HarnessAgentCoreGatewayConfig }),
        /*@__PURE__*/ S.Struct({ inlineFunction: HarnessInlineFunctionConfig }),
        /*@__PURE__*/ S.Struct({ agentCoreCodeInterpreter: HarnessAgentCoreCodeInterpreterConfig }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          type: HarnessToolType,
          name: S.optional(S.String),
          config: S.optional(HarnessToolConfiguration),
        }),
      ).annotate({ identifier: "HarnessTool" });
    case 4:
      return S.Array(HarnessTool);
    case 5:
      return S.suspend(() => S.Struct({ uri: S.String })).annotate({
        identifier: "HarnessSkillS3Source",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ credentialArn: S.String, username: S.optional(S.String) }),
      ).annotate({ identifier: "HarnessSkillGitAuth" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          url: S.String,
          path: S.optional(S.String),
          auth: S.optional(HarnessSkillGitAuth),
        }),
      ).annotate({ identifier: "HarnessSkillGitSource" });
  }
}
function __c38(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ paths: S.optional(HarnessAwsSkillPaths) })).annotate({
        identifier: "HarnessSkillAwsSkillsSource",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ path: S.String }),
        /*@__PURE__*/ S.Struct({ s3: HarnessSkillS3Source }),
        /*@__PURE__*/ S.Struct({ git: HarnessSkillGitSource }),
        /*@__PURE__*/ S.Struct({ awsSkills: HarnessSkillAwsSkillsSource }),
      ]);
    case 2:
      return S.Array(HarnessSkill);
    case 3:
      return S.suspend(() =>
        S.Struct({
          harnessArn: S.String.pipe(T.HttpQuery("harnessArn")),
          qualifier: S.optional(S.String).pipe(T.HttpQuery("qualifier")),
          runtimeSessionId: S.String.pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Runtime-Session-Id"),
          ),
          runtimeUserId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Runtime-User-Id"),
          ),
          traceParent: S.optional(S.String).pipe(T.HttpHeader("traceparent")),
          traceState: S.optional(S.String).pipe(T.HttpHeader("tracestate")),
          traceId: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Trace-Id")),
          baggage: S.optional(S.String).pipe(T.HttpHeader("baggage")),
          messages: HarnessMessages,
          model: S.optional(HarnessModelConfiguration),
          systemPrompt: S.optional(HarnessSystemPrompt),
          tools: S.optional(HarnessTools),
          skills: S.optional(HarnessSkills),
          allowedTools: S.optional(HarnessAllowedTools),
          maxIterations: S.optional(S.Number),
          maxTokens: S.optional(S.Number),
          timeoutSeconds: S.optional(S.Number),
          actorId: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/harnesses/invoke" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "InvokeHarnessRequest" });
    case 4:
      return S.suspend(() => S.Struct({ role: HarnessConversationRole })).annotate({
        identifier: "HarnessMessageStartEvent",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          toolUseId: S.String,
          name: S.String,
          type: S.optional(HarnessToolUseType),
          serverName: S.optional(S.String),
        }),
      ).annotate({ identifier: "HarnessToolUseBlockStart" });
    case 6:
      return S.suspend(() =>
        S.Struct({ toolUseId: S.String, status: S.optional(HarnessToolUseStatus) }),
      ).annotate({
        identifier: "HarnessToolResultBlockStart",
      });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ toolUse: HarnessToolUseBlockStart }),
        /*@__PURE__*/ S.Struct({ toolResult: HarnessToolResultBlockStart }),
      ]);
  }
}
function __c39(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ contentBlockIndex: S.Number, start: HarnessContentBlockStart }),
      ).annotate({
        identifier: "HarnessContentBlockStartEvent",
      });
    case 1:
      return S.suspend(() => S.Struct({ input: SensitiveString })).annotate({
        identifier: "HarnessToolUseBlockDelta",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: S.String }),
        /*@__PURE__*/ S.Struct({ redactedContent: SensitiveBlob }),
        /*@__PURE__*/ S.Struct({ signature: S.String }),
      ]);
    case 3:
      return S.suspend(() => S.Struct({ metadata: SensitiveString })).annotate({
        identifier: "HarnessToolResultMetadataBlockDelta",
      });
    case 4:
      return S.Union([
        /*@__PURE__*/ S.Struct({ text: SensitiveString }),
        /*@__PURE__*/ S.Struct({ toolUse: HarnessToolUseBlockDelta }),
        /*@__PURE__*/ S.Struct({ toolResult: HarnessToolResultBlocksDelta }),
        /*@__PURE__*/ S.Struct({ reasoningContent: HarnessReasoningContentBlockDelta }),
        /*@__PURE__*/ S.Struct({ toolResultMetadata: HarnessToolResultMetadataBlockDelta }),
      ]);
    case 5:
      return S.suspend(() =>
        S.Struct({ contentBlockIndex: S.Number, delta: HarnessContentBlockDelta }),
      ).annotate({
        identifier: "HarnessContentBlockDeltaEvent",
      });
    case 6:
      return S.suspend(() => S.Struct({ contentBlockIndex: S.Number })).annotate({
        identifier: "HarnessContentBlockStopEvent",
      });
    case 7:
      return S.suspend(() => S.Struct({ stopReason: HarnessStopReason })).annotate({
        identifier: "HarnessMessageStopEvent",
      });
  }
}
function __c40(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          inputTokens: S.Number,
          outputTokens: S.Number,
          totalTokens: S.Number,
          cacheReadInputTokens: S.optional(S.Number),
          cacheWriteInputTokens: S.optional(S.Number),
        }),
      ).annotate({ identifier: "HarnessTokenUsage" });
    case 1:
      return S.suspend(() => S.Struct({ latencyMs: S.Number })).annotate({
        identifier: "HarnessStreamMetrics",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ usage: HarnessTokenUsage, metrics: HarnessStreamMetrics }),
      ).annotate({ identifier: "HarnessMetadataEvent" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          hookEventId: S.String,
          name: S.String,
          type: HarnessHookEventType,
          decision: S.optional(HarnessHookDecision),
          reason: S.optional(S.String),
        }),
      ).annotate({ identifier: "HarnessHookEvent" });
    case 4:
      return T.EventStream(
        /*@__PURE__*/ S.Union([
          /*@__PURE__*/ S.Struct({ messageStart: HarnessMessageStartEvent }),
          /*@__PURE__*/ S.Struct({ contentBlockStart: HarnessContentBlockStartEvent }),
          /*@__PURE__*/ S.Struct({ contentBlockDelta: HarnessContentBlockDeltaEvent }),
          /*@__PURE__*/ S.Struct({ contentBlockStop: HarnessContentBlockStopEvent }),
          /*@__PURE__*/ S.Struct({ messageStop: HarnessMessageStopEvent }),
          /*@__PURE__*/ S.Struct({ metadata: HarnessMetadataEvent }),
          /*@__PURE__*/ S.Struct({
            internalServerException: /*@__PURE__*/ S.suspend(
              () => InternalServerException,
            ).annotate({
              identifier: "InternalServerException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            validationException: /*@__PURE__*/ S.suspend(() => ValidationException).annotate({
              identifier: "ValidationException",
            }),
          }),
          /*@__PURE__*/ S.Struct({
            runtimeClientError: /*@__PURE__*/ S.suspend(() => RuntimeClientError).annotate({
              identifier: "RuntimeClientError",
            }),
          }),
          /*@__PURE__*/ S.Struct({ hookEvent: HarnessHookEvent }),
        ]),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({ stream: InvokeHarnessStreamOutput.pipe(T.HttpPayload()) }),
      ).annotate({ identifier: "InvokeHarnessResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/ab-tests" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListABTestsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          abTestId: S.String,
          abTestArn: S.String,
          name: S.String,
          status: ABTestStatus,
          executionStatus: ABTestExecutionStatus,
          description: S.optional(S.String),
          gatewayArn: S.optional(S.String),
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "ABTestSummary" });
  }
}
function __c41(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ABTestSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ abTests: ABTestSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListABTestsResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/memories/{memoryId}/actors" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListActorsInput" });
    case 3:
      return S.suspend(() => S.Struct({ actorId: S.String })).annotate({
        identifier: "ActorSummary",
      });
    case 4:
      return S.Array(ActorSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ actorSummaries: ActorSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListActorsOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/evaluations/batch-evaluate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListBatchEvaluationsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          batchEvaluationId: S.String,
          batchEvaluationArn: S.String,
          batchEvaluationName: S.String,
          status: BatchEvaluationStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          description: S.optional(S.String),
          evaluators: S.optional(EvaluatorList),
          insights: S.optional(InsightList),
          evaluationResults: S.optional(EvaluationJobResults),
          errorDetails: S.optional(ErrorDetailsList),
          kmsKeyArn: S.optional(S.String),
          updatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "BatchEvaluationSummary" });
  }
}
function __c42(j: number): any {
  switch (j) {
    case 0:
      return S.Array(BatchEvaluationSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ batchEvaluations: BatchEvaluationSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListBatchEvaluationsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          browserIdentifier: S.String.pipe(T.HttpLabel("browserIdentifier")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          status: S.optional(BrowserSessionStatus),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/browsers/{browserIdentifier}/sessions/list" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListBrowserSessionsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          browserIdentifier: S.String,
          sessionId: S.String,
          name: S.optional(S.String),
          status: BrowserSessionStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({ identifier: "BrowserSessionSummary" });
    case 4:
      return S.Array(BrowserSessionSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ items: BrowserSessionSummaries, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListBrowserSessionsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          codeInterpreterIdentifier: S.String.pipe(T.HttpLabel("codeInterpreterIdentifier")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          status: S.optional(CodeInterpreterSessionStatus),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/code-interpreters/{codeInterpreterIdentifier}/sessions/list",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListCodeInterpreterSessionsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          codeInterpreterIdentifier: S.String,
          sessionId: S.String,
          name: S.optional(S.String),
          status: CodeInterpreterSessionStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedAt: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }),
      ).annotate({
        identifier: "CodeInterpreterSessionSummary",
      });
  }
}
function __c43(j: number): any {
  switch (j) {
    case 0:
      return S.Array(CodeInterpreterSessionSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ items: CodeInterpreterSessionSummaries, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListCodeInterpreterSessionsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ name: S.String, includeParentBranches: S.optional(S.Boolean) }),
      ).annotate({ identifier: "BranchFilter" });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ metadataKey: S.String })]);
    case 4:
      return S.Union([/*@__PURE__*/ S.Struct({ metadataValue: MetadataValue })]);
    case 5:
      return S.suspend(() =>
        S.Struct({
          left: LeftExpression,
          operator: OperatorType,
          right: S.optional(RightExpression),
        }),
      ).annotate({
        identifier: "EventMetadataFilterExpression",
      });
    case 6:
      return S.Array(EventMetadataFilterExpression);
    case 7:
      return S.suspend(() =>
        S.Struct({
          branch: S.optional(BranchFilter),
          eventMetadata: S.optional(EventMetadataFilterList),
        }),
      ).annotate({ identifier: "FilterInput" });
  }
}
function __c44(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
          actorId: S.String.pipe(T.HttpLabel("actorId")),
          includePayloads: S.optional(S.Boolean),
          filter: S.optional(FilterInput),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/memories/{memoryId}/actor/{actorId}/sessions/{sessionId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListEventsInput" });
    case 1:
      return S.Array(Event);
    case 2:
      return S.suspend(() =>
        S.Struct({ events: EventList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListEventsOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          strategyId: S.optional(S.String),
          sessionId: S.optional(S.String),
          actorId: S.optional(S.String),
          status: S.optional(ExtractionJobStatus),
        }),
      ).annotate({ identifier: "ExtractionJobFilterInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
          maxResults: S.optional(S.Number),
          filter: S.optional(ExtractionJobFilterInput),
          nextToken: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/memories/{memoryId}/extractionJobs" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListMemoryExtractionJobsInput",
      });
    case 5:
      return S.suspend(() => S.Struct({ eventId: S.String, messageIndex: S.Number })).annotate({
        identifier: "MessageMetadata",
      });
    case 6:
      return S.Array(MessageMetadata);
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ messagesList: MessagesList })]);
  }
}
function __c45(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          jobID: S.String,
          messages: ExtractionJobMessages,
          status: S.optional(ExtractionJobStatus),
          failureReason: S.optional(S.String),
          strategyId: S.optional(S.String),
          sessionId: S.optional(S.String),
          actorId: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExtractionJobMetadata" });
    case 1:
      return S.Array(ExtractionJobMetadata);
    case 2:
      return S.suspend(() =>
        S.Struct({ jobs: ExtractionJobMetadataList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListMemoryExtractionJobsOutput",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ metadataValue: MemoryRecordMetadataValue })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          left: MemoryRecordLeftExpression,
          operator: MemoryRecordOperatorType,
          right: S.optional(MemoryRecordRightExpression),
        }),
      ).annotate({
        identifier: "MemoryMetadataFilterExpression",
      });
    case 5:
      return S.Array(MemoryMetadataFilterExpression);
    case 6:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
          namespace: S.optional(S.String),
          namespacePath: S.optional(S.String),
          memoryStrategyId: S.optional(S.String),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          metadataFilters: S.optional(MemoryMetadataFilterList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/memories/{memoryId}/memoryRecords" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListMemoryRecordsInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          memoryRecordId: S.String,
          content: MemoryContent,
          memoryStrategyId: S.optional(S.String),
          namespaces: NamespacesList,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
          score: S.optional(S.Number),
          metadata: S.optional(MemoryRecordMetadataMap),
        }),
      ).annotate({ identifier: "MemoryRecordSummary" });
  }
}
function __c46(j: number): any {
  switch (j) {
    case 0:
      return S.Array(MemoryRecordSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({
          memoryRecordSummaries: MemoryRecordSummaryList,
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListMemoryRecordsOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          userId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Payments-User-Id"),
          ),
          agentName: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Payments-Agent-Name"),
          ),
          paymentManagerArn: S.String,
          paymentConnectorId: S.optional(S.String),
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/payments/listPaymentInstruments" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPaymentInstrumentsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          paymentInstrumentId: S.String,
          paymentManagerArn: S.String,
          paymentConnectorId: S.String,
          userId: S.String,
          paymentInstrumentType: PaymentInstrumentType,
          status: PaymentInstrumentStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "PaymentInstrumentSummary" });
    case 4:
      return S.Array(PaymentInstrumentSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          paymentInstruments: PaymentInstrumentSummaryList,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPaymentInstrumentsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          userId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Payments-User-Id"),
          ),
          agentName: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Payments-Agent-Name"),
          ),
          paymentManagerArn: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/payments/listPaymentSessions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListPaymentSessionsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          paymentSessionId: S.String,
          paymentManagerArn: S.String,
          userId: S.String,
          expiryTimeInMinutes: S.Number,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "PaymentSessionSummary" });
  }
}
function __c47(j: number): any {
  switch (j) {
    case 0:
      return S.Array(PaymentSessionSummary);
    case 1:
      return S.suspend(() =>
        S.Struct({ paymentSessions: PaymentSessionSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListPaymentSessionsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          statusFilter: S.optional(RecommendationStatus).pipe(T.HttpQuery("status")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/recommendations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListRecommendationsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          recommendationId: S.String,
          recommendationArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          type: RecommendationType,
          status: RecommendationStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "RecommendationSummary" });
    case 4:
      return S.Array(RecommendationSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({
          recommendationSummaries: RecommendationSummaryList,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListRecommendationsResponse",
      });
    case 6:
      return S.suspend(() => S.Struct({ eventFilter: S.optional(EventFilterCondition) })).annotate({
        identifier: "SessionFilter",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
          actorId: S.String.pipe(T.HttpLabel("actorId")),
          maxResults: S.optional(S.Number),
          nextToken: S.optional(S.String),
          filter: S.optional(SessionFilter),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/memories/{memoryId}/actor/{actorId}/sessions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListSessionsInput" });
  }
}
function __c48(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          actorId: S.String,
          createdAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "SessionSummary" });
    case 1:
      return S.Array(SessionSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({ sessionSummaries: SessionSummaryList, nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListSessionsOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          version: S.String,
          payload: S.Any,
          permit2AllowanceLimit: S.optional(S.String),
        }),
      ).annotate({ identifier: "CryptoX402PaymentInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          version: S.String,
          wwwAuthenticateHeaders: WwwAuthenticateHeaderList,
          buyerPaysGasFees: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "MppPaymentInput" });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ cryptoX402: CryptoX402PaymentInput }),
        /*@__PURE__*/ S.Struct({ mpp: MppPaymentInput }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          userId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Payments-User-Id"),
          ),
          agentName: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Payments-Agent-Name"),
          ),
          paymentManagerArn: S.String,
          paymentSessionId: S.String,
          paymentInstrumentId: S.String,
          paymentType: PaymentType,
          paymentInput: PaymentInput,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/payments/processPayment" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ProcessPaymentRequest" });
    case 7:
      return S.suspend(() => S.Struct({ version: S.String, payload: S.Any })).annotate({
        identifier: "CryptoX402PaymentOutput",
      });
  }
}
function __c49(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          version: S.String,
          selectedPaymentId: S.String,
          paymentCredential: SensitiveString,
        }),
      ).annotate({ identifier: "MppPaymentOutput" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ cryptoX402: CryptoX402PaymentOutput }),
        /*@__PURE__*/ S.Struct({ mpp: MppPaymentOutput }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          processPaymentId: S.String,
          paymentManagerArn: S.String,
          paymentSessionId: S.String,
          paymentInstrumentId: S.String,
          paymentType: PaymentType,
          status: PaymentStatus,
          paymentOutput: PaymentOutput,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "ProcessPaymentResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          searchQuery: SensitiveString,
          memoryStrategyId: S.optional(S.String),
          topK: S.optional(S.Number),
          metadataFilters: S.optional(MemoryMetadataFilterList),
        }),
      ).annotate({ identifier: "SearchCriteria" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
          namespace: S.optional(S.String),
          namespacePath: S.optional(S.String),
          searchCriteria: SearchCriteria,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/memories/{memoryId}/retrieve" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "RetrieveMemoryRecordsInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          memoryRecordSummaries: MemoryRecordSummaryList,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "RetrieveMemoryRecordsOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Trace-Id")),
          traceParent: S.optional(S.String).pipe(T.HttpHeader("traceparent")),
          profileIdentifier: S.String.pipe(T.HttpLabel("profileIdentifier")),
          browserIdentifier: S.String,
          sessionId: S.String,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/browser-profiles/{profileIdentifier}/save" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SaveBrowserSessionProfileRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          profileIdentifier: S.String,
          browserIdentifier: S.String,
          sessionId: S.String,
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "SaveBrowserSessionProfileResponse",
      });
  }
}
function __c50(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          searchQuery: S.String,
          registryIds: RegistryIdList,
          maxResults: S.optional(S.Number),
          filters: S.optional(S.Any),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/registry-records/search" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "SearchRegistryRecordsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ schemaVersion: S.optional(S.String), inlineContent: S.optional(S.String) }),
      ).annotate({ identifier: "ServerDefinition" });
    case 2:
      return S.suspend(() =>
        S.Struct({ protocolVersion: S.optional(S.String), inlineContent: S.optional(S.String) }),
      ).annotate({ identifier: "ToolsDefinition" });
    case 3:
      return S.suspend(() =>
        S.Struct({ server: ServerDefinition, tools: ToolsDefinition }),
      ).annotate({ identifier: "McpDescriptor" });
    case 4:
      return S.suspend(() => S.Struct({ agentCard: AgentCardDefinition })).annotate({
        identifier: "A2aDescriptor",
      });
    case 5:
      return S.suspend(() => S.Struct({ inlineContent: S.optional(S.String) })).annotate({
        identifier: "CustomDescriptor",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ skillMd: SkillMdDefinition, skillDefinition: S.optional(SkillDefinition) }),
      ).annotate({ identifier: "AgentSkillsDescriptor" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          mcp: S.optional(McpDescriptor),
          a2a: S.optional(A2aDescriptor),
          custom: S.optional(CustomDescriptor),
          agentSkills: S.optional(AgentSkillsDescriptor),
        }),
      ).annotate({ identifier: "Descriptors" });
  }
}
function __c51(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          registryArn: S.String,
          recordArn: S.String,
          recordId: S.String,
          name: S.String,
          description: S.optional(SensitiveString),
          descriptorType: DescriptorType,
          descriptors: Descriptors,
          version: S.String,
          status: RegistryRecordStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "RegistryRecordSummary" });
    case 1:
      return S.Array(RegistryRecordSummary);
    case 2:
      return S.suspend(() => S.Struct({ registryRecords: RegistryRecordSummaryList })).annotate({
        identifier: "SearchRegistryRecordsResponse",
      });
    case 3:
      return S.Union([/*@__PURE__*/ S.Struct({ prompt: S.String })]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          input: S.optional(GroundTruthTurnInput),
          expectedResponse: S.optional(EvaluationContent),
        }),
      ).annotate({ identifier: "GroundTruthTurn" });
    case 5:
      return S.Array(GroundTruthTurn);
    case 6:
      return S.suspend(() =>
        S.Struct({
          assertions: S.optional(EvaluationContentList),
          expectedTrajectory: S.optional(EvaluationExpectedTrajectory),
          turns: S.optional(GroundTruthTurnList),
        }),
      ).annotate({ identifier: "InlineGroundTruth" });
    case 7:
      return S.Union([/*@__PURE__*/ S.Struct({ inline: InlineGroundTruth })]);
  }
}
function __c52(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          sessionId: S.String,
          testScenarioId: S.optional(S.String),
          groundTruth: S.optional(GroundTruthSource),
          metadata: S.optional(StringMap),
        }),
      ).annotate({ identifier: "SessionMetadataShape" });
    case 1:
      return S.Array(SessionMetadataShape);
    case 2:
      return S.Union([/*@__PURE__*/ S.Struct({ sessionMetadata: SessionMetadataList })]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          batchEvaluationName: S.String,
          evaluators: S.optional(EvaluatorList),
          insights: S.optional(InsightList),
          dataSourceConfig: DataSourceConfig,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          evaluationMetadata: S.optional(EvaluationMetadata),
          tags: S.optional(TagsMap),
          kmsKeyArn: S.optional(S.String),
          description: S.optional(S.String),
          outputConfig: S.optional(OutputConfig),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/evaluations/batch-evaluate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartBatchEvaluationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          batchEvaluationId: S.String,
          batchEvaluationArn: S.String,
          batchEvaluationName: S.String,
          evaluators: S.optional(EvaluatorList),
          insights: S.optional(InsightList),
          status: BatchEvaluationStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          outputConfig: S.optional(OutputConfig),
          tags: S.optional(TagsMap),
          kmsKeyArn: S.optional(S.String),
          description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StartBatchEvaluationResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Trace-Id")),
          traceParent: S.optional(S.String).pipe(T.HttpHeader("traceparent")),
          browserIdentifier: S.String.pipe(T.HttpLabel("browserIdentifier")),
          name: S.optional(S.String),
          sessionTimeoutSeconds: S.optional(S.Number),
          viewPort: S.optional(ViewPort),
          extensions: S.optional(BrowserExtensions),
          profileConfiguration: S.optional(BrowserProfileConfiguration),
          proxyConfiguration: S.optional(ProxyConfiguration),
          enterprisePolicies: S.optional(BrowserEnterprisePolicies),
          certificates: S.optional(Certificates),
          filesystemConfigurations: S.optional(ToolsFileSystemConfigurations),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/browsers/{browserIdentifier}/sessions/start" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartBrowserSessionRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          browserIdentifier: S.String,
          sessionId: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          streams: S.optional(BrowserSessionStream),
        }),
      ).annotate({
        identifier: "StartBrowserSessionResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Trace-Id")),
          traceParent: S.optional(S.String).pipe(T.HttpHeader("traceparent")),
          codeInterpreterIdentifier: S.String.pipe(T.HttpLabel("codeInterpreterIdentifier")),
          name: S.optional(S.String),
          sessionTimeoutSeconds: S.optional(S.Number),
          certificates: S.optional(Certificates),
          filesystemConfigurations: S.optional(ToolsFileSystemConfigurations),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/code-interpreters/{codeInterpreterIdentifier}/sessions/start",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartCodeInterpreterSessionRequest",
      });
  }
}
function __c53(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          codeInterpreterIdentifier: S.String,
          sessionId: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "StartCodeInterpreterSessionResponse",
      });
    case 1:
      return S.suspend(() => S.Struct({ jobId: S.String })).annotate({
        identifier: "ExtractionJob",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          memoryId: S.String.pipe(T.HttpLabel("memoryId")),
          extractionJob: ExtractionJob,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/memories/{memoryId}/extractionJobs/start" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StartMemoryExtractionJobInput",
      });
    case 3:
      return S.suspend(() => S.Struct({ jobId: S.String })).annotate({
        identifier: "StartMemoryExtractionJobOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          name: S.String,
          description: S.optional(S.String),
          type: RecommendationType,
          recommendationConfig: RecommendationConfig,
          kmsKeyArn: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(TagsMap),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/recommendations" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "StartRecommendationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          recommendationId: S.String,
          recommendationArn: S.String,
          name: S.String,
          description: S.optional(S.String),
          type: RecommendationType,
          recommendationConfig: RecommendationConfig,
          status: RecommendationStatus,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "StartRecommendationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ batchEvaluationId: S.String.pipe(T.HttpLabel("batchEvaluationId")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/evaluations/batch-evaluate/{batchEvaluationId}/stop" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopBatchEvaluationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          batchEvaluationId: S.String,
          batchEvaluationArn: S.String,
          status: BatchEvaluationStatus,
          description: S.optional(S.String),
        }),
      ).annotate({
        identifier: "StopBatchEvaluationResponse",
      });
  }
}
function __c54(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Trace-Id")),
          traceParent: S.optional(S.String).pipe(T.HttpHeader("traceparent")),
          browserIdentifier: S.String.pipe(T.HttpLabel("browserIdentifier")),
          sessionId: S.String.pipe(T.HttpQuery("sessionId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/browsers/{browserIdentifier}/sessions/stop" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopBrowserSessionRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          browserIdentifier: S.String,
          sessionId: S.String,
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "StopBrowserSessionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          traceId: S.optional(S.String).pipe(T.HttpHeader("X-Amzn-Trace-Id")),
          traceParent: S.optional(S.String).pipe(T.HttpHeader("traceparent")),
          codeInterpreterIdentifier: S.String.pipe(T.HttpLabel("codeInterpreterIdentifier")),
          sessionId: S.String.pipe(T.HttpQuery("sessionId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/code-interpreters/{codeInterpreterIdentifier}/sessions/stop",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopCodeInterpreterSessionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          codeInterpreterIdentifier: S.String,
          sessionId: S.String,
          lastUpdatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "StopCodeInterpreterSessionResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          runtimeSessionId: S.String.pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Runtime-Session-Id"),
          ),
          agentRuntimeArn: S.String.pipe(T.HttpLabel("agentRuntimeArn")),
          qualifier: S.optional(S.String).pipe(T.HttpQuery("qualifier")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/runtimes/{agentRuntimeArn}/stopruntimesession" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "StopRuntimeSessionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          runtimeSessionId: S.optional(S.String).pipe(
            T.HttpHeader("X-Amzn-Bedrock-AgentCore-Runtime-Session-Id"),
          ),
          statusCode: S.optional(S.Number).pipe(T.HttpResponseCode()),
        }),
      ).annotate({
        identifier: "StopRuntimeSessionResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          abTestId: S.String.pipe(T.HttpLabel("abTestId")),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          name: S.optional(S.String),
          description: S.optional(S.String),
          variants: S.optional(VariantList),
          gatewayFilter: S.optional(GatewayFilter),
          evaluationConfig: S.optional(ABTestEvaluationConfig),
          roleArn: S.optional(S.String),
          executionStatus: S.optional(ABTestExecutionStatus),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/ab-tests/{abTestId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateABTestRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          abTestId: S.String,
          abTestArn: S.String,
          status: ABTestStatus,
          executionStatus: ABTestExecutionStatus,
          updatedAt: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "UpdateABTestResponse" });
  }
}
function __c55(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ streamStatus: S.optional(AutomationStreamStatus) }),
      ).annotate({ identifier: "AutomationStreamUpdate" });
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ automationStreamUpdate: AutomationStreamUpdate })]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          browserIdentifier: S.String.pipe(T.HttpLabel("browserIdentifier")),
          sessionId: S.String.pipe(T.HttpQuery("sessionId")),
          streamUpdate: StreamUpdate,
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/browsers/{browserIdentifier}/sessions/streams/update" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateBrowserStreamRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          browserIdentifier: S.String,
          sessionId: S.String,
          streams: BrowserSessionStream,
          updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "UpdateBrowserStreamResponse",
      });
  }
}
