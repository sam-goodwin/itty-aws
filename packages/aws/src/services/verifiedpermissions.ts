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
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "VerifiedPermissions",
  serviceShapeName: "VerifiedPermissions",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "verifiedpermissions" });
const ver = /*@__PURE__*/ T.ServiceVersion("2021-12-01");
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
              `https://verifiedpermissions-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://verifiedpermissions-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://verifiedpermissions.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(
          `https://verifiedpermissions.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
        );
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
      resources: /*@__PURE__*/ S.suspend(() => ResourceConflictList).annotate({
        identifier: "ResourceConflictList",
      }),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class InvalidStateException
  extends /*@__PURE__*/ S.TaggedError<InvalidStateException>()(
    "InvalidStateException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(406),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: S.String,
      resourceType: /*@__PURE__*/ S.suspend(() => ResourceType).annotate({
        identifier: "ResourceType",
      }),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.suspend(() => ResourceType).annotate({
        identifier: "ResourceType",
      }),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class TooManyTagsException
  extends /*@__PURE__*/ S.TaggedError<TooManyTagsException>()(
    "TooManyTagsException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceName: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()("ValidationException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export type PolicyStoreId = string;
export type PolicyId = string;
export interface BatchGetPolicyInputItem {
  policyStoreId: string;
  policyId: string;
}
const BatchGetPolicyInputItem = /*@__PURE__*/ __L.at(
  __c0,
  0,
) as any as S.Schema<BatchGetPolicyInputItem>;
export type BatchGetPolicyInputList = BatchGetPolicyInputItem[];
const BatchGetPolicyInputList = /*@__PURE__*/ __L.at(__c0, 1);
export interface BatchGetPolicyInput {
  requests: BatchGetPolicyInputItem[];
}
const BatchGetPolicyInput = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<BatchGetPolicyInput>;
export type PolicyType = "STATIC" | "TEMPLATE_LINKED" | (string & {});
const PolicyType = S.String;

export type StaticPolicyDescription = string | redacted.Redacted<string>;
export type PolicyStatement = string | redacted.Redacted<string>;
export interface StaticPolicyDefinitionDetail {
  description?: string | redacted.Redacted<string>;
  statement: string | redacted.Redacted<string>;
}
const StaticPolicyDefinitionDetail = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<StaticPolicyDefinitionDetail>;
export type PolicyTemplateId = string;
export type EntityType = string | redacted.Redacted<string>;
export type EntityId = string | redacted.Redacted<string>;
export interface EntityIdentifier {
  entityType: string | redacted.Redacted<string>;
  entityId: string | redacted.Redacted<string>;
}
const EntityIdentifier = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<EntityIdentifier>;
export interface TemplateLinkedPolicyDefinitionDetail {
  policyTemplateId: string;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
}
const TemplateLinkedPolicyDefinitionDetail = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<TemplateLinkedPolicyDefinitionDetail>;
export type PolicyDefinitionDetail =
  | { static: StaticPolicyDefinitionDetail; templateLinked?: never }
  | { static?: never; templateLinked: TemplateLinkedPolicyDefinitionDetail };
const PolicyDefinitionDetail = /*@__PURE__*/ __L.at(__c0, 6);
export type TimestampFormat = Date;
export type PolicyName = string;
export interface BatchGetPolicyOutputItem {
  policyStoreId: string;
  policyId: string;
  policyType: PolicyType;
  definition: PolicyDefinitionDetail;
  createdDate: Date;
  lastUpdatedDate: Date;
  name?: string;
}
const BatchGetPolicyOutputItem = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<BatchGetPolicyOutputItem>;
export type BatchGetPolicyOutputList = BatchGetPolicyOutputItem[];
const BatchGetPolicyOutputList = /*@__PURE__*/ __L.at(__c1, 0);
export type BatchGetPolicyErrorCode =
  | "POLICY_STORE_NOT_FOUND"
  | "POLICY_NOT_FOUND"
  | "POLICY_STORE_ALIAS_NOT_FOUND"
  | (string & {});
const BatchGetPolicyErrorCode = S.String;

export interface BatchGetPolicyErrorItem {
  code: BatchGetPolicyErrorCode;
  policyStoreId: string;
  policyId: string;
  message: string;
}
const BatchGetPolicyErrorItem = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<BatchGetPolicyErrorItem>;
export type BatchGetPolicyErrorList = BatchGetPolicyErrorItem[];
const BatchGetPolicyErrorList = /*@__PURE__*/ __L.at(__c1, 2);
export interface BatchGetPolicyOutput {
  results: BatchGetPolicyOutputItem[];
  errors: BatchGetPolicyErrorItem[];
}
const BatchGetPolicyOutput = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<BatchGetPolicyOutput>;
export type BooleanAttribute = boolean;
export type LongAttribute = number;
export type StringAttribute = string | redacted.Redacted<string>;
export type SetAttribute = AttributeValue[];
const SetAttribute = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<SetAttribute>;
export type RecordAttribute = { [key: string]: AttributeValue | undefined };
const RecordAttribute = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<RecordAttribute>;
export type IpAddr = string | redacted.Redacted<string>;
export type Decimal = string | redacted.Redacted<string>;
export type DatetimeAttribute = string | redacted.Redacted<string>;
export type Duration = string | redacted.Redacted<string>;
export type AttributeValue =
  | {
      boolean: boolean;
      entityIdentifier?: never;
      long?: never;
      string?: never;
      set?: never;
      record?: never;
      ipaddr?: never;
      decimal?: never;
      datetime?: never;
      duration?: never;
    }
  | {
      boolean?: never;
      entityIdentifier: EntityIdentifier;
      long?: never;
      string?: never;
      set?: never;
      record?: never;
      ipaddr?: never;
      decimal?: never;
      datetime?: never;
      duration?: never;
    }
  | {
      boolean?: never;
      entityIdentifier?: never;
      long: number;
      string?: never;
      set?: never;
      record?: never;
      ipaddr?: never;
      decimal?: never;
      datetime?: never;
      duration?: never;
    }
  | {
      boolean?: never;
      entityIdentifier?: never;
      long?: never;
      string: string | redacted.Redacted<string>;
      set?: never;
      record?: never;
      ipaddr?: never;
      decimal?: never;
      datetime?: never;
      duration?: never;
    }
  | {
      boolean?: never;
      entityIdentifier?: never;
      long?: never;
      string?: never;
      set: AttributeValue[];
      record?: never;
      ipaddr?: never;
      decimal?: never;
      datetime?: never;
      duration?: never;
    }
  | {
      boolean?: never;
      entityIdentifier?: never;
      long?: never;
      string?: never;
      set?: never;
      record: { [key: string]: AttributeValue | undefined };
      ipaddr?: never;
      decimal?: never;
      datetime?: never;
      duration?: never;
    }
  | {
      boolean?: never;
      entityIdentifier?: never;
      long?: never;
      string?: never;
      set?: never;
      record?: never;
      ipaddr: string | redacted.Redacted<string>;
      decimal?: never;
      datetime?: never;
      duration?: never;
    }
  | {
      boolean?: never;
      entityIdentifier?: never;
      long?: never;
      string?: never;
      set?: never;
      record?: never;
      ipaddr?: never;
      decimal: string | redacted.Redacted<string>;
      datetime?: never;
      duration?: never;
    }
  | {
      boolean?: never;
      entityIdentifier?: never;
      long?: never;
      string?: never;
      set?: never;
      record?: never;
      ipaddr?: never;
      decimal?: never;
      datetime: string | redacted.Redacted<string>;
      duration?: never;
    }
  | {
      boolean?: never;
      entityIdentifier?: never;
      long?: never;
      string?: never;
      set?: never;
      record?: never;
      ipaddr?: never;
      decimal?: never;
      datetime?: never;
      duration: string | redacted.Redacted<string>;
    };
const AttributeValue = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<AttributeValue>;
export type EntityAttributes = { [key: string]: AttributeValue | undefined };
const EntityAttributes = /*@__PURE__*/ __L.at(__c1, 7);
export type ParentList = EntityIdentifier[];
const ParentList = /*@__PURE__*/ __L.at(__c2, 0);
export type CedarTagSetAttribute = CedarTagValue[];
const CedarTagSetAttribute = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<CedarTagSetAttribute>;
export type CedarTagRecordAttribute = { [key: string]: CedarTagValue | undefined };
const CedarTagRecordAttribute = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<CedarTagRecordAttribute>;
export type CedarTagValue =
  | {
      boolean: boolean;
      entityIdentifier?: never;
      long?: never;
      string?: never;
      set?: never;
      record?: never;
      ipaddr?: never;
      decimal?: never;
      datetime?: never;
      duration?: never;
    }
  | {
      boolean?: never;
      entityIdentifier: EntityIdentifier;
      long?: never;
      string?: never;
      set?: never;
      record?: never;
      ipaddr?: never;
      decimal?: never;
      datetime?: never;
      duration?: never;
    }
  | {
      boolean?: never;
      entityIdentifier?: never;
      long: number;
      string?: never;
      set?: never;
      record?: never;
      ipaddr?: never;
      decimal?: never;
      datetime?: never;
      duration?: never;
    }
  | {
      boolean?: never;
      entityIdentifier?: never;
      long?: never;
      string: string | redacted.Redacted<string>;
      set?: never;
      record?: never;
      ipaddr?: never;
      decimal?: never;
      datetime?: never;
      duration?: never;
    }
  | {
      boolean?: never;
      entityIdentifier?: never;
      long?: never;
      string?: never;
      set: CedarTagValue[];
      record?: never;
      ipaddr?: never;
      decimal?: never;
      datetime?: never;
      duration?: never;
    }
  | {
      boolean?: never;
      entityIdentifier?: never;
      long?: never;
      string?: never;
      set?: never;
      record: { [key: string]: CedarTagValue | undefined };
      ipaddr?: never;
      decimal?: never;
      datetime?: never;
      duration?: never;
    }
  | {
      boolean?: never;
      entityIdentifier?: never;
      long?: never;
      string?: never;
      set?: never;
      record?: never;
      ipaddr: string | redacted.Redacted<string>;
      decimal?: never;
      datetime?: never;
      duration?: never;
    }
  | {
      boolean?: never;
      entityIdentifier?: never;
      long?: never;
      string?: never;
      set?: never;
      record?: never;
      ipaddr?: never;
      decimal: string | redacted.Redacted<string>;
      datetime?: never;
      duration?: never;
    }
  | {
      boolean?: never;
      entityIdentifier?: never;
      long?: never;
      string?: never;
      set?: never;
      record?: never;
      ipaddr?: never;
      decimal?: never;
      datetime: string | redacted.Redacted<string>;
      duration?: never;
    }
  | {
      boolean?: never;
      entityIdentifier?: never;
      long?: never;
      string?: never;
      set?: never;
      record?: never;
      ipaddr?: never;
      decimal?: never;
      datetime?: never;
      duration: string | redacted.Redacted<string>;
    };
const CedarTagValue = /*@__PURE__*/ __L.at(__c2, 3) as any as S.Schema<CedarTagValue>;
export type EntityCedarTags = { [key: string]: CedarTagValue | undefined };
const EntityCedarTags = /*@__PURE__*/ __L.at(__c2, 4);
export interface EntityItem {
  identifier: EntityIdentifier;
  attributes?: { [key: string]: AttributeValue | undefined };
  parents?: EntityIdentifier[];
  tags?: { [key: string]: CedarTagValue | undefined };
}
const EntityItem = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<EntityItem>;
export type EntityList = EntityItem[];
const EntityList = /*@__PURE__*/ __L.at(__c2, 6);
export type CedarJson = string | redacted.Redacted<string>;
export type EntitiesDefinition =
  | { entityList: EntityItem[]; cedarJson?: never }
  | { entityList?: never; cedarJson: string | redacted.Redacted<string> };
const EntitiesDefinition = /*@__PURE__*/ __L.at(__c2, 7);
export type ActionType = string | redacted.Redacted<string>;
export type ActionId = string | redacted.Redacted<string>;
export interface ActionIdentifier {
  actionType: string | redacted.Redacted<string>;
  actionId: string | redacted.Redacted<string>;
}
const ActionIdentifier = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<ActionIdentifier>;
export type ContextMap = { [key: string]: AttributeValue | undefined };
const ContextMap = EntityAttributes as any as S.Schema<ContextMap>;
export type ContextDefinition =
  | { contextMap: { [key: string]: AttributeValue | undefined }; cedarJson?: never }
  | { contextMap?: never; cedarJson: string | redacted.Redacted<string> };
const ContextDefinition = /*@__PURE__*/ __L.at(__c3, 1);
export interface BatchIsAuthorizedInputItem {
  principal?: EntityIdentifier;
  action?: ActionIdentifier;
  resource?: EntityIdentifier;
  context?: ContextDefinition;
}
const BatchIsAuthorizedInputItem = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<BatchIsAuthorizedInputItem>;
export type BatchIsAuthorizedInputList = BatchIsAuthorizedInputItem[];
const BatchIsAuthorizedInputList = /*@__PURE__*/ __L.at(__c3, 3);
export interface BatchIsAuthorizedInput {
  policyStoreId: string;
  entities?: EntitiesDefinition;
  requests: BatchIsAuthorizedInputItem[];
}
const BatchIsAuthorizedInput = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<BatchIsAuthorizedInput>;
export type Decision = "ALLOW" | "DENY" | (string & {});
const Decision = S.String;

export interface DeterminingPolicyItem {
  policyId: string;
}
const DeterminingPolicyItem = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<DeterminingPolicyItem>;
export type DeterminingPolicyList = DeterminingPolicyItem[];
const DeterminingPolicyList = /*@__PURE__*/ __L.at(__c3, 6);
export interface EvaluationErrorItem {
  errorDescription: string;
}
const EvaluationErrorItem = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<EvaluationErrorItem>;
export type EvaluationErrorList = EvaluationErrorItem[];
const EvaluationErrorList = /*@__PURE__*/ __L.at(__c4, 0);
export interface BatchIsAuthorizedOutputItem {
  request: BatchIsAuthorizedInputItem;
  decision: Decision;
  determiningPolicies: DeterminingPolicyItem[];
  errors: EvaluationErrorItem[];
}
const BatchIsAuthorizedOutputItem = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<BatchIsAuthorizedOutputItem>;
export type BatchIsAuthorizedOutputList = BatchIsAuthorizedOutputItem[];
const BatchIsAuthorizedOutputList = /*@__PURE__*/ __L.at(__c4, 2);
export interface BatchIsAuthorizedOutput {
  results: BatchIsAuthorizedOutputItem[];
}
const BatchIsAuthorizedOutput = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<BatchIsAuthorizedOutput>;
export type Token = string | redacted.Redacted<string>;
export interface BatchIsAuthorizedWithTokenInputItem {
  action?: ActionIdentifier;
  resource?: EntityIdentifier;
  context?: ContextDefinition;
}
const BatchIsAuthorizedWithTokenInputItem = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<BatchIsAuthorizedWithTokenInputItem>;
export type BatchIsAuthorizedWithTokenInputList = BatchIsAuthorizedWithTokenInputItem[];
const BatchIsAuthorizedWithTokenInputList = /*@__PURE__*/ __L.at(__c4, 5);
export interface BatchIsAuthorizedWithTokenInput {
  policyStoreId: string;
  identityToken?: string | redacted.Redacted<string>;
  accessToken?: string | redacted.Redacted<string>;
  entities?: EntitiesDefinition;
  requests: BatchIsAuthorizedWithTokenInputItem[];
}
const BatchIsAuthorizedWithTokenInput = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<BatchIsAuthorizedWithTokenInput>;
export interface BatchIsAuthorizedWithTokenOutputItem {
  request: BatchIsAuthorizedWithTokenInputItem;
  decision: Decision;
  determiningPolicies: DeterminingPolicyItem[];
  errors: EvaluationErrorItem[];
}
const BatchIsAuthorizedWithTokenOutputItem = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<BatchIsAuthorizedWithTokenOutputItem>;
export type BatchIsAuthorizedWithTokenOutputList = BatchIsAuthorizedWithTokenOutputItem[];
const BatchIsAuthorizedWithTokenOutputList = /*@__PURE__*/ __L.at(__c5, 0);
export interface BatchIsAuthorizedWithTokenOutput {
  principal?: EntityIdentifier;
  results: BatchIsAuthorizedWithTokenOutputItem[];
}
const BatchIsAuthorizedWithTokenOutput = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<BatchIsAuthorizedWithTokenOutput>;
export type IdempotencyToken = string;
export type UserPoolArn = string;
export type ClientId = string | redacted.Redacted<string>;
export type ClientIds = (string | redacted.Redacted<string>)[];
const ClientIds = /*@__PURE__*/ __L.at(__c5, 2);
export type GroupEntityType = string | redacted.Redacted<string>;
export interface CognitoGroupConfiguration {
  groupEntityType: string | redacted.Redacted<string>;
}
const CognitoGroupConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<CognitoGroupConfiguration>;
export interface CognitoUserPoolConfiguration {
  userPoolArn: string;
  clientIds?: (string | redacted.Redacted<string>)[];
  groupConfiguration?: CognitoGroupConfiguration;
}
const CognitoUserPoolConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<CognitoUserPoolConfiguration>;
export type Issuer = string;
export type EntityIdPrefix = string | redacted.Redacted<string>;
export type Claim = string | redacted.Redacted<string>;
export interface OpenIdConnectGroupConfiguration {
  groupClaim: string | redacted.Redacted<string>;
  groupEntityType: string | redacted.Redacted<string>;
}
const OpenIdConnectGroupConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<OpenIdConnectGroupConfiguration>;
export type Audience = string;
export type Audiences = string[];
const Audiences = /*@__PURE__*/ __L.at(__c5, 6);
export interface OpenIdConnectAccessTokenConfiguration {
  principalIdClaim?: string | redacted.Redacted<string>;
  audiences?: string[];
}
const OpenIdConnectAccessTokenConfiguration = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<OpenIdConnectAccessTokenConfiguration>;
export interface OpenIdConnectIdentityTokenConfiguration {
  principalIdClaim?: string | redacted.Redacted<string>;
  clientIds?: (string | redacted.Redacted<string>)[];
}
const OpenIdConnectIdentityTokenConfiguration = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<OpenIdConnectIdentityTokenConfiguration>;
export type OpenIdConnectTokenSelection =
  | { accessTokenOnly: OpenIdConnectAccessTokenConfiguration; identityTokenOnly?: never }
  | { accessTokenOnly?: never; identityTokenOnly: OpenIdConnectIdentityTokenConfiguration };
const OpenIdConnectTokenSelection = /*@__PURE__*/ __L.at(__c6, 1);
export interface OpenIdConnectConfiguration {
  issuer: string;
  entityIdPrefix?: string | redacted.Redacted<string>;
  groupConfiguration?: OpenIdConnectGroupConfiguration;
  tokenSelection: OpenIdConnectTokenSelection;
}
const OpenIdConnectConfiguration = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<OpenIdConnectConfiguration>;
export type Configuration =
  | {
      cognitoUserPoolConfiguration: CognitoUserPoolConfiguration;
      openIdConnectConfiguration?: never;
    }
  | {
      cognitoUserPoolConfiguration?: never;
      openIdConnectConfiguration: OpenIdConnectConfiguration;
    };
const Configuration = /*@__PURE__*/ __L.at(__c6, 3);
export type PrincipalEntityType = string | redacted.Redacted<string>;
export interface CreateIdentitySourceInput {
  clientToken?: string;
  policyStoreId: string;
  configuration: Configuration;
  principalEntityType?: string | redacted.Redacted<string>;
}
const CreateIdentitySourceInput = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<CreateIdentitySourceInput>;
export type IdentitySourceId = string;
export interface CreateIdentitySourceOutput {
  createdDate: Date;
  identitySourceId: string;
  lastUpdatedDate: Date;
  policyStoreId: string;
}
const CreateIdentitySourceOutput = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<CreateIdentitySourceOutput>;
export interface StaticPolicyDefinition {
  description?: string | redacted.Redacted<string>;
  statement: string | redacted.Redacted<string>;
}
const StaticPolicyDefinition = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<StaticPolicyDefinition>;
export interface TemplateLinkedPolicyDefinition {
  policyTemplateId: string;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
}
const TemplateLinkedPolicyDefinition =
  TemplateLinkedPolicyDefinitionDetail as any as S.Schema<TemplateLinkedPolicyDefinition>;
export type PolicyDefinition =
  | { static: StaticPolicyDefinition; templateLinked?: never }
  | { static?: never; templateLinked: TemplateLinkedPolicyDefinition };
const PolicyDefinition = /*@__PURE__*/ __L.at(__c6, 7);
export interface CreatePolicyInput {
  clientToken?: string;
  policyStoreId: string;
  definition: PolicyDefinition;
  name?: string;
}
const CreatePolicyInput = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<CreatePolicyInput>;
export type ActionIdentifierList = ActionIdentifier[];
const ActionIdentifierList = /*@__PURE__*/ __L.at(__c7, 1);
export type PolicyEffect = "Permit" | "Forbid" | (string & {});
const PolicyEffect = S.String;

export interface CreatePolicyOutput {
  policyStoreId: string;
  policyId: string;
  policyType: PolicyType;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
  actions?: ActionIdentifier[];
  createdDate: Date;
  lastUpdatedDate: Date;
  effect?: PolicyEffect;
}
const CreatePolicyOutput = /*@__PURE__*/ __L.at(__c7, 2) as any as S.Schema<CreatePolicyOutput>;
export type ValidationMode = "OFF" | "STRICT" | (string & {});
const ValidationMode = S.String;

export interface ValidationSettings {
  mode: ValidationMode;
}
const ValidationSettings = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<ValidationSettings>;
export type PolicyStoreDescription = string | redacted.Redacted<string>;
export type DeletionProtection = "ENABLED" | "DISABLED" | (string & {});
const DeletionProtection = S.String;

export type KmsKey = string;
export type EncryptionContextKey = string;
export type EncryptionContextValue = string;
export type EncryptionContext = { [key: string]: string | undefined };
const EncryptionContext = /*@__PURE__*/ __L.at(__c7, 4);
export interface KmsEncryptionSettings {
  key: string;
  encryptionContext?: { [key: string]: string | undefined };
}
const KmsEncryptionSettings = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<KmsEncryptionSettings>;
export type EncryptionSettings =
  | { kmsEncryptionSettings: KmsEncryptionSettings; default?: never }
  | { kmsEncryptionSettings?: never; default: Record<string, never> };
const EncryptionSettings = /*@__PURE__*/ __L.at(__c7, 6);
export type TagKey = string;
export type TagValue = string;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c7, 7);
export interface CreatePolicyStoreInput {
  clientToken?: string;
  validationSettings: ValidationSettings;
  description?: string | redacted.Redacted<string>;
  deletionProtection?: DeletionProtection;
  encryptionSettings?: EncryptionSettings;
  tags?: { [key: string]: string | undefined };
}
const CreatePolicyStoreInput = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<CreatePolicyStoreInput>;
export type ResourceArn = string;
export interface CreatePolicyStoreOutput {
  policyStoreId: string;
  arn: string;
  createdDate: Date;
  lastUpdatedDate: Date;
}
const CreatePolicyStoreOutput = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<CreatePolicyStoreOutput>;
export type Alias = string;
export interface CreatePolicyStoreAliasInput {
  aliasName: string;
  policyStoreId: string;
}
const CreatePolicyStoreAliasInput = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<CreatePolicyStoreAliasInput>;
export interface CreatePolicyStoreAliasOutput {
  aliasName: string;
  policyStoreId: string;
  aliasArn: string;
  createdAt: Date;
}
const CreatePolicyStoreAliasOutput = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<CreatePolicyStoreAliasOutput>;
export type PolicyTemplateDescription = string | redacted.Redacted<string>;
export type PolicyTemplateName = string;
export interface CreatePolicyTemplateInput {
  clientToken?: string;
  policyStoreId: string;
  description?: string | redacted.Redacted<string>;
  statement: string | redacted.Redacted<string>;
  name?: string;
}
const CreatePolicyTemplateInput = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<CreatePolicyTemplateInput>;
export interface CreatePolicyTemplateOutput {
  policyStoreId: string;
  policyTemplateId: string;
  createdDate: Date;
  lastUpdatedDate: Date;
}
const CreatePolicyTemplateOutput = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<CreatePolicyTemplateOutput>;
export interface DeleteIdentitySourceInput {
  policyStoreId: string;
  identitySourceId: string;
}
const DeleteIdentitySourceInput = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<DeleteIdentitySourceInput>;
export interface DeleteIdentitySourceOutput {}
const DeleteIdentitySourceOutput = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<DeleteIdentitySourceOutput>;
export interface DeletePolicyInput {
  policyStoreId: string;
  policyId: string;
}
const DeletePolicyInput = /*@__PURE__*/ __L.at(__c9, 0) as any as S.Schema<DeletePolicyInput>;
export interface DeletePolicyOutput {}
const DeletePolicyOutput = DeleteIdentitySourceOutput as any as S.Schema<DeletePolicyOutput>;
export interface DeletePolicyStoreInput {
  policyStoreId: string;
}
const DeletePolicyStoreInput = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<DeletePolicyStoreInput>;
export interface DeletePolicyStoreOutput {}
const DeletePolicyStoreOutput =
  DeleteIdentitySourceOutput as any as S.Schema<DeletePolicyStoreOutput>;
export type DeletionMode = "SoftDelete" | "HardDelete" | (string & {});
const DeletionMode = S.String;

export interface DeletePolicyStoreAliasInput {
  aliasName: string;
  deletionMode?: DeletionMode;
}
const DeletePolicyStoreAliasInput = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<DeletePolicyStoreAliasInput>;
export interface DeletePolicyStoreAliasOutput {}
const DeletePolicyStoreAliasOutput =
  DeleteIdentitySourceOutput as any as S.Schema<DeletePolicyStoreAliasOutput>;
export interface DeletePolicyTemplateInput {
  policyStoreId: string;
  policyTemplateId: string;
}
const DeletePolicyTemplateInput = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<DeletePolicyTemplateInput>;
export interface DeletePolicyTemplateOutput {}
const DeletePolicyTemplateOutput =
  DeleteIdentitySourceOutput as any as S.Schema<DeletePolicyTemplateOutput>;
export interface GetIdentitySourceInput {
  policyStoreId: string;
  identitySourceId: string;
}
const GetIdentitySourceInput = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<GetIdentitySourceInput>;
export type DiscoveryUrl = string;
export type OpenIdIssuer = "COGNITO" | (string & {});
const OpenIdIssuer = S.String;

export interface IdentitySourceDetails {
  clientIds?: (string | redacted.Redacted<string>)[];
  userPoolArn?: string;
  discoveryUrl?: string;
  openIdIssuer?: OpenIdIssuer;
}
const IdentitySourceDetails = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<IdentitySourceDetails>;
export interface CognitoGroupConfigurationDetail {
  groupEntityType?: string | redacted.Redacted<string>;
}
const CognitoGroupConfigurationDetail = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<CognitoGroupConfigurationDetail>;
export interface CognitoUserPoolConfigurationDetail {
  userPoolArn: string;
  clientIds: (string | redacted.Redacted<string>)[];
  issuer: string;
  groupConfiguration?: CognitoGroupConfigurationDetail;
}
const CognitoUserPoolConfigurationDetail = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<CognitoUserPoolConfigurationDetail>;
export interface OpenIdConnectGroupConfigurationDetail {
  groupClaim: string | redacted.Redacted<string>;
  groupEntityType: string | redacted.Redacted<string>;
}
export interface OpenIdConnectAccessTokenConfigurationDetail {
  principalIdClaim?: string | redacted.Redacted<string>;
  audiences?: string[];
}
export interface OpenIdConnectIdentityTokenConfigurationDetail {
  principalIdClaim?: string | redacted.Redacted<string>;
  clientIds?: (string | redacted.Redacted<string>)[];
}
export type OpenIdConnectTokenSelectionDetail =
  | { accessTokenOnly: OpenIdConnectAccessTokenConfigurationDetail; identityTokenOnly?: never }
  | { accessTokenOnly?: never; identityTokenOnly: OpenIdConnectIdentityTokenConfigurationDetail };
export interface OpenIdConnectConfigurationDetail {
  issuer: string;
  entityIdPrefix?: string | redacted.Redacted<string>;
  groupConfiguration?: OpenIdConnectGroupConfigurationDetail;
  tokenSelection: OpenIdConnectTokenSelectionDetail;
}
const OpenIdConnectConfigurationDetail =
  OpenIdConnectConfiguration as any as S.Schema<OpenIdConnectConfigurationDetail>;
export type ConfigurationDetail =
  | {
      cognitoUserPoolConfiguration: CognitoUserPoolConfigurationDetail;
      openIdConnectConfiguration?: never;
    }
  | {
      cognitoUserPoolConfiguration?: never;
      openIdConnectConfiguration: OpenIdConnectConfigurationDetail;
    };
const ConfigurationDetail = /*@__PURE__*/ __L.at(__c10, 0);
export interface GetIdentitySourceOutput {
  createdDate: Date;
  details?: IdentitySourceDetails;
  identitySourceId: string;
  lastUpdatedDate: Date;
  policyStoreId: string;
  principalEntityType: string | redacted.Redacted<string>;
  configuration?: ConfigurationDetail;
}
const GetIdentitySourceOutput = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<GetIdentitySourceOutput>;
export interface GetPolicyInput {
  policyStoreId: string;
  policyId: string;
}
const GetPolicyInput = /*@__PURE__*/ __L.at(__c10, 2) as any as S.Schema<GetPolicyInput>;
export interface GetPolicyOutput {
  policyStoreId: string;
  policyId: string;
  policyType: PolicyType;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
  actions?: ActionIdentifier[];
  definition: PolicyDefinitionDetail;
  createdDate: Date;
  lastUpdatedDate: Date;
  effect?: PolicyEffect;
  name?: string;
}
const GetPolicyOutput = /*@__PURE__*/ __L.at(__c10, 3) as any as S.Schema<GetPolicyOutput>;
export interface GetPolicyStoreInput {
  policyStoreId: string;
  tags?: boolean;
}
const GetPolicyStoreInput = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<GetPolicyStoreInput>;
export interface KmsEncryptionState {
  key: string;
  encryptionContext: { [key: string]: string | undefined };
}
const KmsEncryptionState = /*@__PURE__*/ __L.at(__c10, 5) as any as S.Schema<KmsEncryptionState>;
export type EncryptionState =
  | { kmsEncryptionState: KmsEncryptionState; default?: never }
  | { kmsEncryptionState?: never; default: Record<string, never> };
const EncryptionState = /*@__PURE__*/ __L.at(__c10, 6);
export type CedarVersion = "CEDAR_2" | "CEDAR_4" | (string & {});
const CedarVersion = S.String;

export interface GetPolicyStoreOutput {
  policyStoreId: string;
  arn: string;
  validationSettings: ValidationSettings;
  createdDate: Date;
  lastUpdatedDate: Date;
  description?: string | redacted.Redacted<string>;
  deletionProtection?: DeletionProtection;
  encryptionState?: EncryptionState;
  cedarVersion?: CedarVersion;
  tags?: { [key: string]: string | undefined };
}
const GetPolicyStoreOutput = /*@__PURE__*/ __L.at(
  __c10,
  7,
) as any as S.Schema<GetPolicyStoreOutput>;
export interface GetPolicyStoreAliasInput {
  aliasName: string;
}
const GetPolicyStoreAliasInput = /*@__PURE__*/ __L.at(
  __c11,
  0,
) as any as S.Schema<GetPolicyStoreAliasInput>;
export type AliasState = "Active" | "PendingDeletion" | (string & {});
const AliasState = S.String;

export interface GetPolicyStoreAliasOutput {
  aliasName: string;
  policyStoreId: string;
  aliasArn: string;
  createdAt: Date;
  state: AliasState;
}
const GetPolicyStoreAliasOutput = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<GetPolicyStoreAliasOutput>;
export interface GetPolicyTemplateInput {
  policyStoreId: string;
  policyTemplateId: string;
}
const GetPolicyTemplateInput = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<GetPolicyTemplateInput>;
export interface GetPolicyTemplateOutput {
  policyStoreId: string;
  policyTemplateId: string;
  description?: string | redacted.Redacted<string>;
  statement: string | redacted.Redacted<string>;
  createdDate: Date;
  lastUpdatedDate: Date;
  name?: string;
}
const GetPolicyTemplateOutput = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<GetPolicyTemplateOutput>;
export interface GetSchemaInput {
  policyStoreId: string;
}
const GetSchemaInput = /*@__PURE__*/ __L.at(__c11, 4) as any as S.Schema<GetSchemaInput>;
export type SchemaJson = string | redacted.Redacted<string>;
export type Namespace = string | redacted.Redacted<string>;
export type NamespaceList = (string | redacted.Redacted<string>)[];
const NamespaceList = ClientIds as any as S.Schema<NamespaceList>;
export interface GetSchemaOutput {
  policyStoreId: string;
  schema: string | redacted.Redacted<string>;
  createdDate: Date;
  lastUpdatedDate: Date;
  namespaces?: (string | redacted.Redacted<string>)[];
}
const GetSchemaOutput = /*@__PURE__*/ __L.at(__c11, 5) as any as S.Schema<GetSchemaOutput>;
export interface IsAuthorizedInput {
  policyStoreId: string;
  principal?: EntityIdentifier;
  action?: ActionIdentifier;
  resource?: EntityIdentifier;
  context?: ContextDefinition;
  entities?: EntitiesDefinition;
}
const IsAuthorizedInput = /*@__PURE__*/ __L.at(__c11, 6) as any as S.Schema<IsAuthorizedInput>;
export interface IsAuthorizedOutput {
  decision: Decision;
  determiningPolicies: DeterminingPolicyItem[];
  errors: EvaluationErrorItem[];
}
const IsAuthorizedOutput = /*@__PURE__*/ __L.at(__c11, 7) as any as S.Schema<IsAuthorizedOutput>;
export interface IsAuthorizedWithTokenInput {
  policyStoreId: string;
  identityToken?: string | redacted.Redacted<string>;
  accessToken?: string | redacted.Redacted<string>;
  action?: ActionIdentifier;
  resource?: EntityIdentifier;
  context?: ContextDefinition;
  entities?: EntitiesDefinition;
}
const IsAuthorizedWithTokenInput = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<IsAuthorizedWithTokenInput>;
export interface IsAuthorizedWithTokenOutput {
  decision: Decision;
  determiningPolicies: DeterminingPolicyItem[];
  errors: EvaluationErrorItem[];
  principal?: EntityIdentifier;
}
const IsAuthorizedWithTokenOutput = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<IsAuthorizedWithTokenOutput>;
export type NextToken = string;
export type ListIdentitySourcesMaxResults = number;
export interface IdentitySourceFilter {
  principalEntityType?: string | redacted.Redacted<string>;
}
const IdentitySourceFilter = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<IdentitySourceFilter>;
export type IdentitySourceFilters = IdentitySourceFilter[];
const IdentitySourceFilters = /*@__PURE__*/ __L.at(__c12, 3);
export interface ListIdentitySourcesInput {
  policyStoreId: string;
  nextToken?: string;
  maxResults?: number;
  filters?: IdentitySourceFilter[];
}
const ListIdentitySourcesInput = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<ListIdentitySourcesInput>;
export interface IdentitySourceItemDetails {
  clientIds?: (string | redacted.Redacted<string>)[];
  userPoolArn?: string;
  discoveryUrl?: string;
  openIdIssuer?: OpenIdIssuer;
}
const IdentitySourceItemDetails = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<IdentitySourceItemDetails>;
export interface CognitoGroupConfigurationItem {
  groupEntityType?: string | redacted.Redacted<string>;
}
export interface CognitoUserPoolConfigurationItem {
  userPoolArn: string;
  clientIds: (string | redacted.Redacted<string>)[];
  issuer: string;
  groupConfiguration?: CognitoGroupConfigurationItem;
}
export interface OpenIdConnectGroupConfigurationItem {
  groupClaim: string | redacted.Redacted<string>;
  groupEntityType: string | redacted.Redacted<string>;
}
export interface OpenIdConnectAccessTokenConfigurationItem {
  principalIdClaim?: string | redacted.Redacted<string>;
  audiences?: string[];
}
export interface OpenIdConnectIdentityTokenConfigurationItem {
  principalIdClaim?: string | redacted.Redacted<string>;
  clientIds?: (string | redacted.Redacted<string>)[];
}
export type OpenIdConnectTokenSelectionItem =
  | { accessTokenOnly: OpenIdConnectAccessTokenConfigurationItem; identityTokenOnly?: never }
  | { accessTokenOnly?: never; identityTokenOnly: OpenIdConnectIdentityTokenConfigurationItem };
export interface OpenIdConnectConfigurationItem {
  issuer: string;
  entityIdPrefix?: string | redacted.Redacted<string>;
  groupConfiguration?: OpenIdConnectGroupConfigurationItem;
  tokenSelection: OpenIdConnectTokenSelectionItem;
}
export type ConfigurationItem =
  | {
      cognitoUserPoolConfiguration: CognitoUserPoolConfigurationItem;
      openIdConnectConfiguration?: never;
    }
  | {
      cognitoUserPoolConfiguration?: never;
      openIdConnectConfiguration: OpenIdConnectConfigurationItem;
    };
const ConfigurationItem = ConfigurationDetail as any as S.Schema<ConfigurationItem>;
export interface IdentitySourceItem {
  createdDate: Date;
  details?: IdentitySourceItemDetails;
  identitySourceId: string;
  lastUpdatedDate: Date;
  policyStoreId: string;
  principalEntityType: string | redacted.Redacted<string>;
  configuration?: ConfigurationItem;
}
const IdentitySourceItem = /*@__PURE__*/ __L.at(__c12, 6) as any as S.Schema<IdentitySourceItem>;
export type IdentitySources = IdentitySourceItem[];
const IdentitySources = /*@__PURE__*/ __L.at(__c12, 7);
export interface ListIdentitySourcesOutput {
  nextToken?: string;
  identitySources: IdentitySourceItem[];
}
const ListIdentitySourcesOutput = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<ListIdentitySourcesOutput>;
export type MaxResults = number;
export type EntityReference =
  | { unspecified: boolean; identifier?: never }
  | { unspecified?: never; identifier: EntityIdentifier };
const EntityReference = /*@__PURE__*/ __L.at(__c13, 1);
export interface PolicyFilter {
  principal?: EntityReference;
  resource?: EntityReference;
  policyType?: PolicyType;
  policyTemplateId?: string;
}
const PolicyFilter = /*@__PURE__*/ __L.at(__c13, 2) as any as S.Schema<PolicyFilter>;
export interface ListPoliciesInput {
  policyStoreId: string;
  nextToken?: string;
  maxResults?: number;
  filter?: PolicyFilter;
}
const ListPoliciesInput = /*@__PURE__*/ __L.at(__c13, 3) as any as S.Schema<ListPoliciesInput>;
export interface StaticPolicyDefinitionItem {
  description?: string | redacted.Redacted<string>;
}
const StaticPolicyDefinitionItem = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<StaticPolicyDefinitionItem>;
export interface TemplateLinkedPolicyDefinitionItem {
  policyTemplateId: string;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
}
const TemplateLinkedPolicyDefinitionItem =
  TemplateLinkedPolicyDefinitionDetail as any as S.Schema<TemplateLinkedPolicyDefinitionItem>;
export type PolicyDefinitionItem =
  | { static: StaticPolicyDefinitionItem; templateLinked?: never }
  | { static?: never; templateLinked: TemplateLinkedPolicyDefinitionItem };
const PolicyDefinitionItem = /*@__PURE__*/ __L.at(__c13, 5);
export interface PolicyItem {
  policyStoreId: string;
  policyId: string;
  policyType: PolicyType;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
  actions?: ActionIdentifier[];
  definition: PolicyDefinitionItem;
  createdDate: Date;
  lastUpdatedDate: Date;
  effect?: PolicyEffect;
  name?: string;
}
const PolicyItem = /*@__PURE__*/ __L.at(__c13, 6) as any as S.Schema<PolicyItem>;
export type PolicyList = PolicyItem[];
const PolicyList = /*@__PURE__*/ __L.at(__c13, 7);
export interface ListPoliciesOutput {
  nextToken?: string;
  policies: PolicyItem[];
}
const ListPoliciesOutput = /*@__PURE__*/ __L.at(__c14, 0) as any as S.Schema<ListPoliciesOutput>;
export interface PolicyStoreAliasFilter {
  policyStoreId?: string;
}
const PolicyStoreAliasFilter = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<PolicyStoreAliasFilter>;
export interface ListPolicyStoreAliasesInput {
  nextToken?: string;
  maxResults?: number;
  filter?: PolicyStoreAliasFilter;
}
const ListPolicyStoreAliasesInput = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<ListPolicyStoreAliasesInput>;
export interface PolicyStoreAliasItem {
  aliasName: string;
  policyStoreId: string;
  aliasArn: string;
  createdAt: Date;
  state: AliasState;
}
const PolicyStoreAliasItem = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<PolicyStoreAliasItem>;
export type PolicyStoreAliasList = PolicyStoreAliasItem[];
const PolicyStoreAliasList = /*@__PURE__*/ __L.at(__c14, 4);
export interface ListPolicyStoreAliasesOutput {
  nextToken?: string;
  policyStoreAliases: PolicyStoreAliasItem[];
}
const ListPolicyStoreAliasesOutput = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<ListPolicyStoreAliasesOutput>;
export interface ListPolicyStoresInput {
  nextToken?: string;
  maxResults?: number;
}
const ListPolicyStoresInput = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<ListPolicyStoresInput>;
export interface PolicyStoreItem {
  policyStoreId: string;
  arn: string;
  createdDate: Date;
  lastUpdatedDate?: Date;
  description?: string | redacted.Redacted<string>;
}
const PolicyStoreItem = /*@__PURE__*/ __L.at(__c14, 7) as any as S.Schema<PolicyStoreItem>;
export type PolicyStoreList = PolicyStoreItem[];
const PolicyStoreList = /*@__PURE__*/ __L.at(__c15, 0);
export interface ListPolicyStoresOutput {
  nextToken?: string;
  policyStores: PolicyStoreItem[];
}
const ListPolicyStoresOutput = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<ListPolicyStoresOutput>;
export interface ListPolicyTemplatesInput {
  policyStoreId: string;
  nextToken?: string;
  maxResults?: number;
}
const ListPolicyTemplatesInput = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<ListPolicyTemplatesInput>;
export interface PolicyTemplateItem {
  policyStoreId: string;
  policyTemplateId: string;
  description?: string | redacted.Redacted<string>;
  createdDate: Date;
  lastUpdatedDate: Date;
  name?: string;
}
const PolicyTemplateItem = /*@__PURE__*/ __L.at(__c15, 3) as any as S.Schema<PolicyTemplateItem>;
export type PolicyTemplatesList = PolicyTemplateItem[];
const PolicyTemplatesList = /*@__PURE__*/ __L.at(__c15, 4);
export interface ListPolicyTemplatesOutput {
  nextToken?: string;
  policyTemplates: PolicyTemplateItem[];
}
const ListPolicyTemplatesOutput = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<ListPolicyTemplatesOutput>;
export type AmazonResourceName = string;
export interface ListTagsForResourceInput {
  resourceArn: string;
}
const ListTagsForResourceInput = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<ListTagsForResourceInput>;
export interface ListTagsForResourceOutput {
  tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceOutput = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<ListTagsForResourceOutput>;
export type SchemaDefinition = { cedarJson: string | redacted.Redacted<string> };
const SchemaDefinition = /*@__PURE__*/ __L.at(__c16, 0);
export interface PutSchemaInput {
  policyStoreId: string;
  definition: SchemaDefinition;
}
const PutSchemaInput = /*@__PURE__*/ __L.at(__c16, 1) as any as S.Schema<PutSchemaInput>;
export interface PutSchemaOutput {
  policyStoreId: string;
  namespaces: (string | redacted.Redacted<string>)[];
  createdDate: Date;
  lastUpdatedDate: Date;
}
const PutSchemaOutput = /*@__PURE__*/ __L.at(__c16, 2) as any as S.Schema<PutSchemaOutput>;
export interface TagResourceInput {
  resourceArn: string;
  tags: { [key: string]: string | undefined };
}
const TagResourceInput = /*@__PURE__*/ __L.at(__c16, 3) as any as S.Schema<TagResourceInput>;
export interface TagResourceOutput {}
const TagResourceOutput = DeleteIdentitySourceOutput as any as S.Schema<TagResourceOutput>;
export type TagKeyList = string[];
const TagKeyList = Audiences as any as S.Schema<TagKeyList>;
export interface UntagResourceInput {
  resourceArn: string;
  tagKeys: string[];
}
const UntagResourceInput = /*@__PURE__*/ __L.at(__c16, 4) as any as S.Schema<UntagResourceInput>;
export interface UntagResourceOutput {}
const UntagResourceOutput = DeleteIdentitySourceOutput as any as S.Schema<UntagResourceOutput>;
export interface UpdateCognitoGroupConfiguration {
  groupEntityType: string | redacted.Redacted<string>;
}
export interface UpdateCognitoUserPoolConfiguration {
  userPoolArn: string;
  clientIds?: (string | redacted.Redacted<string>)[];
  groupConfiguration?: UpdateCognitoGroupConfiguration;
}
export interface UpdateOpenIdConnectGroupConfiguration {
  groupClaim: string | redacted.Redacted<string>;
  groupEntityType: string | redacted.Redacted<string>;
}
export interface UpdateOpenIdConnectAccessTokenConfiguration {
  principalIdClaim?: string | redacted.Redacted<string>;
  audiences?: string[];
}
export interface UpdateOpenIdConnectIdentityTokenConfiguration {
  principalIdClaim?: string | redacted.Redacted<string>;
  clientIds?: (string | redacted.Redacted<string>)[];
}
export type UpdateOpenIdConnectTokenSelection =
  | { accessTokenOnly: UpdateOpenIdConnectAccessTokenConfiguration; identityTokenOnly?: never }
  | { accessTokenOnly?: never; identityTokenOnly: UpdateOpenIdConnectIdentityTokenConfiguration };
export interface UpdateOpenIdConnectConfiguration {
  issuer: string;
  entityIdPrefix?: string | redacted.Redacted<string>;
  groupConfiguration?: UpdateOpenIdConnectGroupConfiguration;
  tokenSelection: UpdateOpenIdConnectTokenSelection;
}
export type UpdateConfiguration =
  | {
      cognitoUserPoolConfiguration: UpdateCognitoUserPoolConfiguration;
      openIdConnectConfiguration?: never;
    }
  | {
      cognitoUserPoolConfiguration?: never;
      openIdConnectConfiguration: UpdateOpenIdConnectConfiguration;
    };
const UpdateConfiguration = Configuration as any as S.Schema<UpdateConfiguration>;
export interface UpdateIdentitySourceInput {
  policyStoreId: string;
  identitySourceId: string;
  updateConfiguration: UpdateConfiguration;
  principalEntityType?: string | redacted.Redacted<string>;
}
const UpdateIdentitySourceInput = /*@__PURE__*/ __L.at(
  __c16,
  5,
) as any as S.Schema<UpdateIdentitySourceInput>;
export interface UpdateIdentitySourceOutput {
  createdDate: Date;
  identitySourceId: string;
  lastUpdatedDate: Date;
  policyStoreId: string;
}
const UpdateIdentitySourceOutput =
  CreateIdentitySourceOutput as any as S.Schema<UpdateIdentitySourceOutput>;
export interface UpdateStaticPolicyDefinition {
  description?: string | redacted.Redacted<string>;
  statement: string | redacted.Redacted<string>;
}
const UpdateStaticPolicyDefinition =
  StaticPolicyDefinitionDetail as any as S.Schema<UpdateStaticPolicyDefinition>;
export type UpdatePolicyDefinition = { static: UpdateStaticPolicyDefinition };
const UpdatePolicyDefinition = /*@__PURE__*/ __L.at(__c16, 6);
export interface UpdatePolicyInput {
  policyStoreId: string;
  policyId: string;
  definition?: UpdatePolicyDefinition;
  name?: string;
}
const UpdatePolicyInput = /*@__PURE__*/ __L.at(__c16, 7) as any as S.Schema<UpdatePolicyInput>;
export interface UpdatePolicyOutput {
  policyStoreId: string;
  policyId: string;
  policyType: PolicyType;
  principal?: EntityIdentifier;
  resource?: EntityIdentifier;
  actions?: ActionIdentifier[];
  createdDate: Date;
  lastUpdatedDate: Date;
  effect?: PolicyEffect;
}
const UpdatePolicyOutput = CreatePolicyOutput as any as S.Schema<UpdatePolicyOutput>;
export interface UpdatePolicyStoreInput {
  policyStoreId: string;
  validationSettings: ValidationSettings;
  deletionProtection?: DeletionProtection;
  description?: string | redacted.Redacted<string>;
}
const UpdatePolicyStoreInput = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<UpdatePolicyStoreInput>;
export interface UpdatePolicyStoreOutput {
  policyStoreId: string;
  arn: string;
  createdDate: Date;
  lastUpdatedDate: Date;
}
const UpdatePolicyStoreOutput = CreatePolicyStoreOutput as any as S.Schema<UpdatePolicyStoreOutput>;
export interface UpdatePolicyTemplateInput {
  policyStoreId: string;
  policyTemplateId: string;
  description?: string | redacted.Redacted<string>;
  statement: string | redacted.Redacted<string>;
  name?: string;
}
const UpdatePolicyTemplateInput = /*@__PURE__*/ __L.at(
  __c17,
  1,
) as any as S.Schema<UpdatePolicyTemplateInput>;
export interface UpdatePolicyTemplateOutput {
  policyStoreId: string;
  policyTemplateId: string;
  createdDate: Date;
  lastUpdatedDate: Date;
}
const UpdatePolicyTemplateOutput =
  CreatePolicyTemplateOutput as any as S.Schema<UpdatePolicyTemplateOutput>;
export type ResourceType =
  | "IDENTITY_SOURCE"
  | "POLICY_STORE"
  | "POLICY"
  | "POLICY_TEMPLATE"
  | "SCHEMA"
  | "POLICY_STORE_ALIAS"
  | (string & {});
const ResourceType = S.String;

export interface ResourceConflict {
  resourceId: string;
  resourceType: ResourceType;
}
const ResourceConflict = /*@__PURE__*/ __L.at(__c17, 2) as any as S.Schema<ResourceConflict>;
export type ResourceConflictList = ResourceConflict[];
const ResourceConflictList = /*@__PURE__*/ __L.at(__c17, 3);
export type BatchGetPolicyError = ValidationException | CommonErrors;
/**
 * Retrieves information about a group (batch) of policies.
 *
 * The `BatchGetPolicy` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `verifiedpermissions:GetPolicy` in their IAM policies.
 */
export const batchGetPolicy: API.OperationMethod<
  BatchGetPolicyInput,
  BatchGetPolicyOutput,
  BatchGetPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetPolicyInput,
  output: BatchGetPolicyOutput,
  errors: [ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetPolicy",
}));

export type BatchIsAuthorizedError = ResourceNotFoundException | ValidationException | CommonErrors;
/**
 * Makes a series of decisions about multiple authorization requests for one principal or resource. Each request contains the equivalent content of an `IsAuthorized` request: principal, action, resource, and context. Either the `principal` or the `resource` parameter must be identical across all requests. For example, Verified Permissions won't evaluate a pair of requests where `bob` views `photo1` and `alice` views `photo2`. Authorization of `bob` to view `photo1` and `photo2`, or `bob` and `alice` to view `photo1`, are valid batches.
 *
 * The request is evaluated against all policies in the specified policy store that match the entities that you declare. The result of the decisions is a series of `Allow` or `Deny` responses, along with the IDs of the policies that produced each decision.
 *
 * The `entities` of a `BatchIsAuthorized` API request can contain up to 100 principals and up to 100 resources. The `requests` of a `BatchIsAuthorized` API request can contain up to 30 requests.
 *
 * The `BatchIsAuthorized` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `verifiedpermissions:IsAuthorized` in their IAM policies.
 */
export const batchIsAuthorized: API.OperationMethod<
  BatchIsAuthorizedInput,
  BatchIsAuthorizedOutput,
  BatchIsAuthorizedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchIsAuthorizedInput,
  output: BatchIsAuthorizedOutput,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchIsAuthorized",
}));

export type BatchIsAuthorizedWithTokenError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Makes a series of decisions about multiple authorization requests for one token. The principal in this request comes from an external identity source in the form of an identity or access token, formatted as a JSON web token (JWT). The information in the parameters can also define additional context that Verified Permissions can include in the evaluations.
 *
 * The request is evaluated against all policies in the specified policy store that match the entities that you provide in the entities declaration and in the token. The result of the decisions is a series of `Allow` or `Deny` responses, along with the IDs of the policies that produced each decision.
 *
 * The `entities` of a `BatchIsAuthorizedWithToken` API request can contain up to 100 resources and up to 99 user groups. The `requests` of a `BatchIsAuthorizedWithToken` API request can contain up to 30 requests.
 *
 * The `BatchIsAuthorizedWithToken` operation doesn't have its own IAM permission. To authorize this operation for Amazon Web Services principals, include the permission `verifiedpermissions:IsAuthorizedWithToken` in their IAM policies.
 */
export const batchIsAuthorizedWithToken: API.OperationMethod<
  BatchIsAuthorizedWithTokenInput,
  BatchIsAuthorizedWithTokenOutput,
  BatchIsAuthorizedWithTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchIsAuthorizedWithTokenInput,
  output: BatchIsAuthorizedWithTokenOutput,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchIsAuthorizedWithToken",
}));

export type CreateIdentitySourceError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Adds an identity source to a policy store-an Amazon Cognito user pool or OpenID Connect (OIDC) identity provider (IdP).
 *
 * After you create an identity source, you can use the identities provided by the IdP as proxies for the principal in authorization queries that use the IsAuthorizedWithToken or BatchIsAuthorizedWithToken API operations. These identities take the form of tokens that contain claims about the user, such as IDs, attributes and group memberships. Identity sources provide identity (ID) tokens and access tokens. Verified Permissions derives information about your user and session from token claims. Access tokens provide action `context` to your policies, and ID tokens provide principal `Attributes`.
 *
 * Tokens from an identity source user continue to be usable until they expire. Token revocation and resource deletion have no effect on the validity of a token in your policy store
 *
 * To reference a user from this identity source in your Cedar policies, refer to the following syntax examples.
 *
 * - Amazon Cognito user pool: `Namespace::[Entity type]::[User pool ID]|[user principal attribute]`, for example `MyCorp::User::us-east-1_EXAMPLE|a1b2c3d4-5678-90ab-cdef-EXAMPLE11111`.
 *
 * - OpenID Connect (OIDC) provider: `Namespace::[Entity type]::[entityIdPrefix]|[user principal attribute]`, for example `MyCorp::User::MyOIDCProvider|a1b2c3d4-5678-90ab-cdef-EXAMPLE22222`.
 *
 * Verified Permissions is * eventually consistent *. It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.
 */
export const createIdentitySource: API.OperationMethod<
  CreateIdentitySourceInput,
  CreateIdentitySourceOutput,
  CreateIdentitySourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateIdentitySourceInput,
  output: CreateIdentitySourceOutput,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateIdentitySource",
}));

export type CreatePolicyError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a Cedar policy and saves it in the specified policy store. You can create either a static policy or a policy linked to a policy template.
 *
 * - To create a static policy, provide the Cedar policy text in the `StaticPolicy` section of the `PolicyDefinition`.
 *
 * - To create a policy that is dynamically linked to a policy template, specify the policy template ID and the principal and resource to associate with this policy in the `templateLinked` section of the `PolicyDefinition`. If the policy template is ever updated, any policies linked to the policy template automatically use the updated template.
 *
 * Creating a policy causes it to be validated against the schema in the policy store. If the policy doesn't pass validation, the operation fails and the policy isn't stored.
 *
 * Verified Permissions is * eventually consistent *. It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.
 */
export const createPolicy: API.OperationMethod<
  CreatePolicyInput,
  CreatePolicyOutput,
  CreatePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreatePolicyInput,
  output: CreatePolicyOutput,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePolicy",
}));

export type CreatePolicyStoreError =
  | ConflictException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a policy store. A policy store is a container for policy resources.
 *
 * As of May 2026, Verified Permissions has aligned with Cedar and now supports multiple namespaces.
 *
 * Verified Permissions is * eventually consistent *. It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.
 */
export const createPolicyStore: API.OperationMethod<
  CreatePolicyStoreInput,
  CreatePolicyStoreOutput,
  CreatePolicyStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreatePolicyStoreInput,
  output: CreatePolicyStoreOutput,
  errors: [ConflictException, ServiceQuotaExceededException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePolicyStore",
}));

export type CreatePolicyStoreAliasError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a policy store alias for the specified policy store. A policy store alias is an alternative identifier that you can use to reference a policy store in API operations.
 *
 * This operation is idempotent. If multiple CreatePolicyStoreAlias requests are made where the `aliasName` and `policyStoreId` fields are the same between the requests, subsequent requests will be ignored. For each duplicate CreatePolicyStoreAlias request, a Success response will be returned and a new policy store alias will not be created.
 *
 * Verified Permissions is * eventually consistent *. It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.
 */
export const createPolicyStoreAlias: API.OperationMethod<
  CreatePolicyStoreAliasInput,
  CreatePolicyStoreAliasOutput,
  CreatePolicyStoreAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreatePolicyStoreAliasInput,
  output: CreatePolicyStoreAliasOutput,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePolicyStoreAlias",
}));

export type CreatePolicyTemplateError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates a policy template. A template can use placeholders for the principal and resource. A template must be instantiated into a policy by associating it with specific principals and resources to use for the placeholders. That instantiated policy can then be considered in authorization decisions. The instantiated policy works identically to any other policy, except that it is dynamically linked to the template. If the template changes, then any policies that are linked to that template are immediately updated as well.
 *
 * Verified Permissions is * eventually consistent *. It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.
 */
export const createPolicyTemplate: API.OperationMethod<
  CreatePolicyTemplateInput,
  CreatePolicyTemplateOutput,
  CreatePolicyTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreatePolicyTemplateInput,
  output: CreatePolicyTemplateOutput,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreatePolicyTemplate",
}));

export type DeleteIdentitySourceError =
  | ConflictException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes an identity source that references an identity provider (IdP) such as Amazon Cognito. After you delete the identity source, you can no longer use tokens for identities from that identity source to represent principals in authorization queries made using IsAuthorizedWithToken. operations.
 */
export const deleteIdentitySource: API.OperationMethod<
  DeleteIdentitySourceInput,
  DeleteIdentitySourceOutput,
  DeleteIdentitySourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteIdentitySourceInput,
  output: DeleteIdentitySourceOutput,
  errors: [ConflictException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIdentitySource",
}));

export type DeletePolicyError = ConflictException | ResourceNotFoundException | CommonErrors;
/**
 * Deletes the specified policy from the policy store.
 *
 * This operation is idempotent; if you specify a policy that doesn't exist, the request response returns a successful `HTTP 200` status code.
 */
export const deletePolicy: API.OperationMethod<
  DeletePolicyInput,
  DeletePolicyOutput,
  DeletePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePolicyInput,
  output: DeletePolicyOutput,
  errors: [ConflictException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePolicy",
}));

export type DeletePolicyStoreError = InvalidStateException | CommonErrors;
/**
 * Deletes the specified policy store.
 *
 * This operation is idempotent. If you specify a policy store that does not exist, the request response will still return a successful HTTP 200 status code.
 */
export const deletePolicyStore: API.OperationMethod<
  DeletePolicyStoreInput,
  DeletePolicyStoreOutput,
  DeletePolicyStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePolicyStoreInput,
  output: DeletePolicyStoreOutput,
  errors: [InvalidStateException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePolicyStore",
}));

export type DeletePolicyStoreAliasError =
  | InvalidStateException
  | ValidationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified policy store alias.
 *
 * This operation is idempotent. If you specify a policy store alias that does not exist, the request response will still return a successful HTTP 200 status code.
 *
 * By default, when a policy store alias is deleted, it enters the `PendingDeletion` state. When a policy store alias is in the `PendingDeletion` state, new policy store aliases cannot be created with the same name. If the policy store alias is used in an API that has a `policyStoreId` field, the operation will fail with a `ResourceNotFound` exception.
 *
 * To immediately delete a policy store alias and bypass the `PendingDeletion` state, set the `deletionMode` parameter to `HardDelete`.
 *
 * Verified Permissions is eventually consistent. If you hard delete a policy store alias and then immediately recreate it to be associated with a different policy store, requests that reference this alias may continue to be evaluated against the previously associated policy store for a short period of time.
 */
export const deletePolicyStoreAlias: API.OperationMethod<
  DeletePolicyStoreAliasInput,
  DeletePolicyStoreAliasOutput,
  DeletePolicyStoreAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePolicyStoreAliasInput,
  output: DeletePolicyStoreAliasOutput,
  errors: [InvalidStateException, ValidationException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePolicyStoreAlias",
}));

export type DeletePolicyTemplateError =
  | ConflictException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Deletes the specified policy template from the policy store.
 *
 * This operation also deletes any policies that were created from the specified policy template. Those policies are immediately removed from all future API responses, and are asynchronously deleted from the policy store.
 */
export const deletePolicyTemplate: API.OperationMethod<
  DeletePolicyTemplateInput,
  DeletePolicyTemplateOutput,
  DeletePolicyTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePolicyTemplateInput,
  output: DeletePolicyTemplateOutput,
  errors: [ConflictException, ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePolicyTemplate",
}));

export type GetIdentitySourceError = ResourceNotFoundException | CommonErrors;
/**
 * Retrieves the details about the specified identity source.
 */
export const getIdentitySource: API.OperationMethod<
  GetIdentitySourceInput,
  GetIdentitySourceOutput,
  GetIdentitySourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetIdentitySourceInput,
  output: GetIdentitySourceOutput,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIdentitySource",
}));

export type GetPolicyError = ResourceNotFoundException | ValidationException | CommonErrors;
/**
 * Retrieves information about the specified policy.
 */
export const getPolicy: API.OperationMethod<
  GetPolicyInput,
  GetPolicyOutput,
  GetPolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPolicyInput,
  output: GetPolicyOutput,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicy",
}));

export type GetPolicyStoreError = ResourceNotFoundException | ValidationException | CommonErrors;
/**
 * Retrieves details about a policy store.
 */
export const getPolicyStore: API.OperationMethod<
  GetPolicyStoreInput,
  GetPolicyStoreOutput,
  GetPolicyStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPolicyStoreInput,
  output: GetPolicyStoreOutput,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicyStore",
}));

export type GetPolicyStoreAliasError = ResourceNotFoundException | CommonErrors;
/**
 * Retrieves details about the specified policy store alias.
 */
export const getPolicyStoreAlias: API.OperationMethod<
  GetPolicyStoreAliasInput,
  GetPolicyStoreAliasOutput,
  GetPolicyStoreAliasError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPolicyStoreAliasInput,
  output: GetPolicyStoreAliasOutput,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicyStoreAlias",
}));

export type GetPolicyTemplateError = ResourceNotFoundException | CommonErrors;
/**
 * Retrieve the details for the specified policy template in the specified policy store.
 */
export const getPolicyTemplate: API.OperationMethod<
  GetPolicyTemplateInput,
  GetPolicyTemplateOutput,
  GetPolicyTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPolicyTemplateInput,
  output: GetPolicyTemplateOutput,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPolicyTemplate",
}));

export type GetSchemaError = ResourceNotFoundException | ValidationException | CommonErrors;
/**
 * Retrieve the details for the specified schema in the specified policy store.
 */
export const getSchema: API.OperationMethod<
  GetSchemaInput,
  GetSchemaOutput,
  GetSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSchemaInput,
  output: GetSchemaOutput,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSchema",
}));

export type IsAuthorizedError = ResourceNotFoundException | ValidationException | CommonErrors;
/**
 * Makes an authorization decision about a service request described in the parameters. The information in the parameters can also define additional context that Verified Permissions can include in the evaluation. The request is evaluated against all matching policies in the specified policy store. The result of the decision is either `Allow` or `Deny`, along with a list of the policies that resulted in the decision.
 */
export const isAuthorized: API.OperationMethod<
  IsAuthorizedInput,
  IsAuthorizedOutput,
  IsAuthorizedError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: IsAuthorizedInput,
  output: IsAuthorizedOutput,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "IsAuthorized",
}));

export type IsAuthorizedWithTokenError =
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Makes an authorization decision about a service request described in the parameters. The principal in this request comes from an external identity source in the form of an identity token formatted as a JSON web token (JWT). The information in the parameters can also define additional context that Verified Permissions can include in the evaluation. The request is evaluated against all matching policies in the specified policy store. The result of the decision is either `Allow` or `Deny`, along with a list of the policies that resulted in the decision.
 *
 * Verified Permissions validates each token that is specified in a request by checking its expiration date and its signature.
 *
 * Tokens from an identity source user continue to be usable until they expire. Token revocation and resource deletion have no effect on the validity of a token in your policy store
 */
export const isAuthorizedWithToken: API.OperationMethod<
  IsAuthorizedWithTokenInput,
  IsAuthorizedWithTokenOutput,
  IsAuthorizedWithTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: IsAuthorizedWithTokenInput,
  output: IsAuthorizedWithTokenOutput,
  errors: [ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "IsAuthorizedWithToken",
}));

export type ListIdentitySourcesError = ResourceNotFoundException | CommonErrors;
/**
 * Returns a paginated list of all of the identity sources defined in the specified policy store.
 */
export const listIdentitySources: API.PaginatedOperationMethod<
  ListIdentitySourcesInput,
  ListIdentitySourcesOutput,
  ListIdentitySourcesError,
  Credentials | HttpClient.HttpClient,
  IdentitySourceItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListIdentitySourcesInput,
  output: ListIdentitySourcesOutput,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIdentitySources",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "identitySources",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPoliciesError = ResourceNotFoundException | CommonErrors;
/**
 * Returns a paginated list of all policies stored in the specified policy store.
 */
export const listPolicies: API.PaginatedOperationMethod<
  ListPoliciesInput,
  ListPoliciesOutput,
  ListPoliciesError,
  Credentials | HttpClient.HttpClient,
  PolicyItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPoliciesInput,
  output: ListPoliciesOutput,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicies",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "policies",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPolicyStoreAliasesError = CommonErrors;
/**
 * Returns a paginated list of all policy store aliases in the calling Amazon Web Services account.
 */
export const listPolicyStoreAliases: API.PaginatedOperationMethod<
  ListPolicyStoreAliasesInput,
  ListPolicyStoreAliasesOutput,
  ListPolicyStoreAliasesError,
  Credentials | HttpClient.HttpClient,
  PolicyStoreAliasItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPolicyStoreAliasesInput,
  output: ListPolicyStoreAliasesOutput,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicyStoreAliases",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "policyStoreAliases",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPolicyStoresError = CommonErrors;
/**
 * Returns a paginated list of all policy stores in the calling Amazon Web Services account.
 */
export const listPolicyStores: API.PaginatedOperationMethod<
  ListPolicyStoresInput,
  ListPolicyStoresOutput,
  ListPolicyStoresError,
  Credentials | HttpClient.HttpClient,
  PolicyStoreItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPolicyStoresInput,
  output: ListPolicyStoresOutput,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicyStores",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "policyStores",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPolicyTemplatesError = ResourceNotFoundException | CommonErrors;
/**
 * Returns a paginated list of all policy templates in the specified policy store.
 */
export const listPolicyTemplates: API.PaginatedOperationMethod<
  ListPolicyTemplatesInput,
  ListPolicyTemplatesOutput,
  ListPolicyTemplatesError,
  Credentials | HttpClient.HttpClient,
  PolicyTemplateItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPolicyTemplatesInput,
  output: ListPolicyTemplatesOutput,
  errors: [ResourceNotFoundException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPolicyTemplates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "policyTemplates",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | CommonErrors;
/**
 * Returns the tags associated with the specified Amazon Verified Permissions resource. In Verified Permissions, policy stores can be tagged.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceInput,
  ListTagsForResourceOutput,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceInput,
  output: ListTagsForResourceOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PutSchemaError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Creates or updates the policy schema in the specified policy store. The schema is used to validate any Cedar policies and policy templates submitted to the policy store. Any changes to the schema validate only policies and templates submitted after the schema change. Existing policies and templates are not re-evaluated against the changed schema. If you later update a policy, then it is evaluated against the new schema at that time.
 *
 * Verified Permissions is * eventually consistent *. It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.
 */
export const putSchema: API.OperationMethod<
  PutSchemaInput,
  PutSchemaOutput,
  PutSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutSchemaInput,
  output: PutSchemaOutput,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutSchema",
}));

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | TooManyTagsException
  | CommonErrors;
/**
 * Assigns one or more tags (key-value pairs) to the specified Amazon Verified Permissions resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Verified Permissions, policy stores can be tagged.
 *
 * Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of characters.
 *
 * You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.
 *
 * You can associate as many as 50 tags with a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceInput,
  TagResourceOutput,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceInput,
  output: TagResourceOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    TooManyTagsException,
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
  | CommonErrors;
/**
 * Removes one or more tags from the specified Amazon Verified Permissions resource. In Verified Permissions, policy stores can be tagged.
 */
export const untagResource: API.OperationMethod<
  UntagResourceInput,
  UntagResourceOutput,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceInput,
  output: UntagResourceOutput,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateIdentitySourceError =
  | ConflictException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified identity source to use a new identity provider (IdP), or to change the mapping of identities from the IdP to a different principal entity type.
 *
 * Verified Permissions is * eventually consistent *. It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.
 */
export const updateIdentitySource: API.OperationMethod<
  UpdateIdentitySourceInput,
  UpdateIdentitySourceOutput,
  UpdateIdentitySourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateIdentitySourceInput,
  output: UpdateIdentitySourceOutput,
  errors: [ConflictException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIdentitySource",
}));

export type UpdatePolicyError =
  | ConflictException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ValidationException
  | CommonErrors;
/**
 * Modifies a Cedar static policy in the specified policy store. You can change only certain elements of the UpdatePolicyDefinition parameter. You can directly update only static policies. To change a template-linked policy, you must update the template instead, using UpdatePolicyTemplate.
 *
 * - If policy validation is enabled in the policy store, then updating a static policy causes Verified Permissions to validate the policy against the schema in the policy store. If the updated static policy doesn't pass validation, the operation fails and the update isn't stored.
 *
 * - When you edit a static policy, you can change only certain elements of a static policy:
 *
 * - The action referenced by the policy.
 *
 * - A condition clause, such as when and unless.
 *
 * You can't change these elements of a static policy:
 *
 * - Changing a policy from a static policy to a template-linked policy.
 *
 * - Changing the effect of a static policy from permit or forbid.
 *
 * - The principal referenced by a static policy.
 *
 * - The resource referenced by a static policy.
 *
 * - To update a template-linked policy, you must update the template instead.
 *
 * Verified Permissions is * eventually consistent *. It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.
 */
export const updatePolicy: API.OperationMethod<
  UpdatePolicyInput,
  UpdatePolicyOutput,
  UpdatePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdatePolicyInput,
  output: UpdatePolicyOutput,
  errors: [
    ConflictException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePolicy",
}));

export type UpdatePolicyStoreError =
  | ConflictException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Modifies the validation setting for a policy store.
 *
 * Verified Permissions is * eventually consistent *. It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.
 */
export const updatePolicyStore: API.OperationMethod<
  UpdatePolicyStoreInput,
  UpdatePolicyStoreOutput,
  UpdatePolicyStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdatePolicyStoreInput,
  output: UpdatePolicyStoreOutput,
  errors: [ConflictException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePolicyStore",
}));

export type UpdatePolicyTemplateError =
  | ConflictException
  | ResourceNotFoundException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified policy template. You can update only the description and the some elements of the policyBody.
 *
 * Changes you make to the policy template content are immediately (within the constraints of eventual consistency) reflected in authorization decisions that involve all template-linked policies instantiated from this template.
 *
 * Verified Permissions is * eventually consistent *. It can take a few seconds for a new or changed element to propagate through the service and be visible in the results of other Verified Permissions operations.
 */
export const updatePolicyTemplate: API.OperationMethod<
  UpdatePolicyTemplateInput,
  UpdatePolicyTemplateOutput,
  UpdatePolicyTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdatePolicyTemplateInput,
  output: UpdatePolicyTemplateOutput,
  errors: [ConflictException, ResourceNotFoundException, ValidationException],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdatePolicyTemplate",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ policyStoreId: S.String, policyId: S.String })).annotate({
        identifier: "BatchGetPolicyInputItem",
      });
    case 1:
      return S.Array(BatchGetPolicyInputItem);
    case 2:
      return S.suspend(() =>
        S.Struct({ requests: BatchGetPolicyInputList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "BatchGetPolicyInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ description: S.optional(SensitiveString), statement: SensitiveString }),
      ).annotate({
        identifier: "StaticPolicyDefinitionDetail",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ entityType: SensitiveString, entityId: SensitiveString }),
      ).annotate({ identifier: "EntityIdentifier" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          policyTemplateId: S.String,
          principal: S.optional(EntityIdentifier),
          resource: S.optional(EntityIdentifier),
        }),
      ).annotate({
        identifier: "TemplateLinkedPolicyDefinitionDetail",
      });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ static: StaticPolicyDefinitionDetail }),
        /*@__PURE__*/ S.Struct({ templateLinked: TemplateLinkedPolicyDefinitionDetail }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          policyId: S.String,
          policyType: PolicyType,
          definition: PolicyDefinitionDetail,
          createdDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          name: S.optional(S.String),
        }),
      ).annotate({ identifier: "BatchGetPolicyOutputItem" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.Array(BatchGetPolicyOutputItem);
    case 1:
      return S.suspend(() =>
        S.Struct({
          code: BatchGetPolicyErrorCode,
          policyStoreId: S.String,
          policyId: S.String,
          message: S.String,
        }),
      ).annotate({ identifier: "BatchGetPolicyErrorItem" });
    case 2:
      return S.Array(BatchGetPolicyErrorItem);
    case 3:
      return S.suspend(() =>
        S.Struct({ results: BatchGetPolicyOutputList, errors: BatchGetPolicyErrorList }),
      ).annotate({ identifier: "BatchGetPolicyOutput" });
    case 4:
      return S.Array(
        /*@__PURE__*/ S.suspend(() => AttributeValue).annotate({ identifier: "AttributeValue" }),
      );
    case 5:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend(() => AttributeValue)
          .annotate({ identifier: "AttributeValue" })
          .pipe(S.optional),
      );
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ boolean: S.Boolean }),
        /*@__PURE__*/ S.Struct({ entityIdentifier: EntityIdentifier }),
        /*@__PURE__*/ S.Struct({ long: S.Number }),
        /*@__PURE__*/ S.Struct({ string: SensitiveString }),
        /*@__PURE__*/ S.Struct({
          set: /*@__PURE__*/ S.suspend(() => SetAttribute).annotate({ identifier: "SetAttribute" }),
        }),
        /*@__PURE__*/ S.Struct({
          record: /*@__PURE__*/ S.suspend(() => RecordAttribute).annotate({
            identifier: "RecordAttribute",
          }),
        }),
        /*@__PURE__*/ S.Struct({ ipaddr: SensitiveString }),
        /*@__PURE__*/ S.Struct({ decimal: SensitiveString }),
        /*@__PURE__*/ S.Struct({ datetime: SensitiveString }),
        /*@__PURE__*/ S.Struct({ duration: SensitiveString }),
      ]);
    case 7:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend(() => AttributeValue)
          .annotate({ identifier: "AttributeValue" })
          .pipe(S.optional),
      );
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.Array(EntityIdentifier);
    case 1:
      return S.Array(
        /*@__PURE__*/ S.suspend(() => CedarTagValue).annotate({ identifier: "CedarTagValue" }),
      );
    case 2:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend(() => CedarTagValue)
          .annotate({ identifier: "CedarTagValue" })
          .pipe(S.optional),
      );
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ boolean: S.Boolean }),
        /*@__PURE__*/ S.Struct({ entityIdentifier: EntityIdentifier }),
        /*@__PURE__*/ S.Struct({ long: S.Number }),
        /*@__PURE__*/ S.Struct({ string: SensitiveString }),
        /*@__PURE__*/ S.Struct({
          set: /*@__PURE__*/ S.suspend(() => CedarTagSetAttribute).annotate({
            identifier: "CedarTagSetAttribute",
          }),
        }),
        /*@__PURE__*/ S.Struct({
          record: /*@__PURE__*/ S.suspend(() => CedarTagRecordAttribute).annotate({
            identifier: "CedarTagRecordAttribute",
          }),
        }),
        /*@__PURE__*/ S.Struct({ ipaddr: SensitiveString }),
        /*@__PURE__*/ S.Struct({ decimal: SensitiveString }),
        /*@__PURE__*/ S.Struct({ datetime: SensitiveString }),
        /*@__PURE__*/ S.Struct({ duration: SensitiveString }),
      ]);
    case 4:
      return S.Record(
        S.String,
        /*@__PURE__*/ S.suspend(() => CedarTagValue)
          .annotate({ identifier: "CedarTagValue" })
          .pipe(S.optional),
      );
    case 5:
      return S.suspend(() =>
        S.Struct({
          identifier: EntityIdentifier,
          attributes: S.optional(EntityAttributes),
          parents: S.optional(ParentList),
          tags: S.optional(EntityCedarTags),
        }),
      ).annotate({ identifier: "EntityItem" });
    case 6:
      return S.Array(EntityItem);
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ entityList: EntityList }),
        /*@__PURE__*/ S.Struct({ cedarJson: SensitiveString }),
      ]);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ actionType: SensitiveString, actionId: SensitiveString }),
      ).annotate({ identifier: "ActionIdentifier" });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ contextMap: ContextMap }),
        /*@__PURE__*/ S.Struct({ cedarJson: SensitiveString }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          principal: S.optional(EntityIdentifier),
          action: S.optional(ActionIdentifier),
          resource: S.optional(EntityIdentifier),
          context: S.optional(ContextDefinition),
        }),
      ).annotate({
        identifier: "BatchIsAuthorizedInputItem",
      });
    case 3:
      return S.Array(BatchIsAuthorizedInputItem);
    case 4:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          entities: S.optional(EntitiesDefinition),
          requests: BatchIsAuthorizedInputList,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "BatchIsAuthorizedInput" });
    case 5:
      return S.suspend(() => S.Struct({ policyId: S.String })).annotate({
        identifier: "DeterminingPolicyItem",
      });
    case 6:
      return S.Array(DeterminingPolicyItem);
    case 7:
      return S.suspend(() => S.Struct({ errorDescription: S.String })).annotate({
        identifier: "EvaluationErrorItem",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(EvaluationErrorItem);
    case 1:
      return S.suspend(() =>
        S.Struct({
          request: BatchIsAuthorizedInputItem,
          decision: Decision,
          determiningPolicies: DeterminingPolicyList,
          errors: EvaluationErrorList,
        }),
      ).annotate({
        identifier: "BatchIsAuthorizedOutputItem",
      });
    case 2:
      return S.Array(BatchIsAuthorizedOutputItem);
    case 3:
      return S.suspend(() => S.Struct({ results: BatchIsAuthorizedOutputList })).annotate({
        identifier: "BatchIsAuthorizedOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          action: S.optional(ActionIdentifier),
          resource: S.optional(EntityIdentifier),
          context: S.optional(ContextDefinition),
        }),
      ).annotate({
        identifier: "BatchIsAuthorizedWithTokenInputItem",
      });
    case 5:
      return S.Array(BatchIsAuthorizedWithTokenInputItem);
    case 6:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          identityToken: S.optional(SensitiveString),
          accessToken: S.optional(SensitiveString),
          entities: S.optional(EntitiesDefinition),
          requests: BatchIsAuthorizedWithTokenInputList,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchIsAuthorizedWithTokenInput",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          request: BatchIsAuthorizedWithTokenInputItem,
          decision: Decision,
          determiningPolicies: DeterminingPolicyList,
          errors: EvaluationErrorList,
        }),
      ).annotate({
        identifier: "BatchIsAuthorizedWithTokenOutputItem",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.Array(BatchIsAuthorizedWithTokenOutputItem);
    case 1:
      return S.suspend(() =>
        S.Struct({
          principal: S.optional(EntityIdentifier),
          results: BatchIsAuthorizedWithTokenOutputList,
        }),
      ).annotate({
        identifier: "BatchIsAuthorizedWithTokenOutput",
      });
    case 2:
      return S.Array(SensitiveString);
    case 3:
      return S.suspend(() => S.Struct({ groupEntityType: SensitiveString })).annotate({
        identifier: "CognitoGroupConfiguration",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          userPoolArn: S.String,
          clientIds: S.optional(ClientIds),
          groupConfiguration: S.optional(CognitoGroupConfiguration),
        }),
      ).annotate({
        identifier: "CognitoUserPoolConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ groupClaim: SensitiveString, groupEntityType: SensitiveString }),
      ).annotate({
        identifier: "OpenIdConnectGroupConfiguration",
      });
    case 6:
      return S.Array(S.String);
    case 7:
      return S.suspend(() =>
        S.Struct({
          principalIdClaim: S.optional(SensitiveString),
          audiences: S.optional(Audiences),
        }),
      ).annotate({
        identifier: "OpenIdConnectAccessTokenConfiguration",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          principalIdClaim: S.optional(SensitiveString),
          clientIds: S.optional(ClientIds),
        }),
      ).annotate({
        identifier: "OpenIdConnectIdentityTokenConfiguration",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ accessTokenOnly: OpenIdConnectAccessTokenConfiguration }),
        /*@__PURE__*/ S.Struct({ identityTokenOnly: OpenIdConnectIdentityTokenConfiguration }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          issuer: S.String,
          entityIdPrefix: S.optional(SensitiveString),
          groupConfiguration: S.optional(OpenIdConnectGroupConfiguration),
          tokenSelection: OpenIdConnectTokenSelection,
        }),
      ).annotate({
        identifier: "OpenIdConnectConfiguration",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ cognitoUserPoolConfiguration: CognitoUserPoolConfiguration }),
        /*@__PURE__*/ S.Struct({ openIdConnectConfiguration: OpenIdConnectConfiguration }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          policyStoreId: S.String,
          configuration: Configuration,
          principalEntityType: S.optional(SensitiveString),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateIdentitySourceInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          createdDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          identitySourceId: S.String,
          lastUpdatedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          policyStoreId: S.String,
        }),
      ).annotate({
        identifier: "CreateIdentitySourceOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ description: S.optional(SensitiveString), statement: SensitiveString }),
      ).annotate({ identifier: "StaticPolicyDefinition" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ static: StaticPolicyDefinition }),
        /*@__PURE__*/ S.Struct({ templateLinked: TemplateLinkedPolicyDefinition }),
      ]);
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          policyStoreId: S.String,
          definition: PolicyDefinition,
          name: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreatePolicyInput" });
    case 1:
      return S.Array(ActionIdentifier);
    case 2:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          policyId: S.String,
          policyType: PolicyType,
          principal: S.optional(EntityIdentifier),
          resource: S.optional(EntityIdentifier),
          actions: S.optional(ActionIdentifierList),
          createdDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          effect: S.optional(PolicyEffect),
        }),
      ).annotate({ identifier: "CreatePolicyOutput" });
    case 3:
      return S.suspend(() => S.Struct({ mode: ValidationMode })).annotate({
        identifier: "ValidationSettings",
      });
    case 4:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 5:
      return S.suspend(() =>
        S.Struct({ key: S.String, encryptionContext: S.optional(EncryptionContext) }),
      ).annotate({ identifier: "KmsEncryptionSettings" });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ kmsEncryptionSettings: KmsEncryptionSettings }),
        /*@__PURE__*/ S.Struct({ default: /*@__PURE__*/ S.Struct({}) }),
      ]);
    case 7:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          validationSettings: ValidationSettings,
          description: S.optional(SensitiveString),
          deletionProtection: S.optional(DeletionProtection),
          encryptionSettings: S.optional(EncryptionSettings),
          tags: S.optional(TagMap),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreatePolicyStoreInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          arn: S.String,
          createdDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "CreatePolicyStoreOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ aliasName: S.String, policyStoreId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreatePolicyStoreAliasInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          aliasName: S.String,
          policyStoreId: S.String,
          aliasArn: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "CreatePolicyStoreAliasOutput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          policyStoreId: S.String,
          description: S.optional(SensitiveString),
          statement: SensitiveString,
          name: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreatePolicyTemplateInput",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          policyTemplateId: S.String,
          createdDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({
        identifier: "CreatePolicyTemplateOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ policyStoreId: S.String, identitySourceId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteIdentitySourceInput",
      });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteIdentitySourceOutput",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ policyStoreId: S.String, policyId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeletePolicyInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({ policyStoreId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeletePolicyStoreInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ aliasName: S.String, deletionMode: S.optional(DeletionMode) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeletePolicyStoreAliasInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ policyStoreId: S.String, policyTemplateId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeletePolicyTemplateInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ policyStoreId: S.String, identitySourceId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetIdentitySourceInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          clientIds: S.optional(ClientIds),
          userPoolArn: S.optional(S.String),
          discoveryUrl: S.optional(S.String),
          openIdIssuer: S.optional(OpenIdIssuer),
        }),
      ).annotate({ identifier: "IdentitySourceDetails" });
    case 6:
      return S.suspend(() => S.Struct({ groupEntityType: S.optional(SensitiveString) })).annotate({
        identifier: "CognitoGroupConfigurationDetail",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          userPoolArn: S.String,
          clientIds: ClientIds,
          issuer: S.String,
          groupConfiguration: S.optional(CognitoGroupConfigurationDetail),
        }),
      ).annotate({
        identifier: "CognitoUserPoolConfigurationDetail",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({
          cognitoUserPoolConfiguration: CognitoUserPoolConfigurationDetail,
        }),
        /*@__PURE__*/ S.Struct({ openIdConnectConfiguration: OpenIdConnectConfigurationDetail }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          createdDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          details: S.optional(IdentitySourceDetails),
          identitySourceId: S.String,
          lastUpdatedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          policyStoreId: S.String,
          principalEntityType: SensitiveString,
          configuration: S.optional(ConfigurationDetail),
        }),
      ).annotate({ identifier: "GetIdentitySourceOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({ policyStoreId: S.String, policyId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetPolicyInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          policyId: S.String,
          policyType: PolicyType,
          principal: S.optional(EntityIdentifier),
          resource: S.optional(EntityIdentifier),
          actions: S.optional(ActionIdentifierList),
          definition: PolicyDefinitionDetail,
          createdDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          effect: S.optional(PolicyEffect),
          name: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetPolicyOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ policyStoreId: S.String, tags: S.optional(S.Boolean) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetPolicyStoreInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({ key: S.String, encryptionContext: EncryptionContext }),
      ).annotate({ identifier: "KmsEncryptionState" });
    case 6:
      return S.Union([
        /*@__PURE__*/ S.Struct({ kmsEncryptionState: KmsEncryptionState }),
        /*@__PURE__*/ S.Struct({ default: /*@__PURE__*/ S.Struct({}) }),
      ]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          arn: S.String,
          validationSettings: ValidationSettings,
          createdDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          description: S.optional(SensitiveString),
          deletionProtection: S.optional(DeletionProtection),
          encryptionState: S.optional(EncryptionState),
          cedarVersion: S.optional(CedarVersion),
          tags: S.optional(TagMap),
        }),
      ).annotate({ identifier: "GetPolicyStoreOutput" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ aliasName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetPolicyStoreAliasInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          aliasName: S.String,
          policyStoreId: S.String,
          aliasArn: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          state: AliasState,
        }),
      ).annotate({
        identifier: "GetPolicyStoreAliasOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ policyStoreId: S.String, policyTemplateId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetPolicyTemplateInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          policyTemplateId: S.String,
          description: S.optional(SensitiveString),
          statement: SensitiveString,
          createdDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          name: S.optional(S.String),
        }),
      ).annotate({ identifier: "GetPolicyTemplateOutput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ policyStoreId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetSchemaInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          schema: SensitiveString,
          createdDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          namespaces: S.optional(NamespaceList),
        }),
      ).annotate({ identifier: "GetSchemaOutput" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          principal: S.optional(EntityIdentifier),
          action: S.optional(ActionIdentifier),
          resource: S.optional(EntityIdentifier),
          context: S.optional(ContextDefinition),
          entities: S.optional(EntitiesDefinition),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "IsAuthorizedInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          decision: Decision,
          determiningPolicies: DeterminingPolicyList,
          errors: EvaluationErrorList,
        }),
      ).annotate({ identifier: "IsAuthorizedOutput" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          identityToken: S.optional(SensitiveString),
          accessToken: S.optional(SensitiveString),
          action: S.optional(ActionIdentifier),
          resource: S.optional(EntityIdentifier),
          context: S.optional(ContextDefinition),
          entities: S.optional(EntitiesDefinition),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "IsAuthorizedWithTokenInput",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          decision: Decision,
          determiningPolicies: DeterminingPolicyList,
          errors: EvaluationErrorList,
          principal: S.optional(EntityIdentifier),
        }),
      ).annotate({
        identifier: "IsAuthorizedWithTokenOutput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ principalEntityType: S.optional(SensitiveString) }),
      ).annotate({ identifier: "IdentitySourceFilter" });
    case 3:
      return S.Array(IdentitySourceFilter);
    case 4:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          filters: S.optional(IdentitySourceFilters),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListIdentitySourcesInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          clientIds: S.optional(ClientIds),
          userPoolArn: S.optional(S.String),
          discoveryUrl: S.optional(S.String),
          openIdIssuer: S.optional(OpenIdIssuer),
        }),
      ).annotate({
        identifier: "IdentitySourceItemDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          createdDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          details: S.optional(IdentitySourceItemDetails),
          identitySourceId: S.String,
          lastUpdatedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          policyStoreId: S.String,
          principalEntityType: SensitiveString,
          configuration: S.optional(ConfigurationItem),
        }),
      ).annotate({ identifier: "IdentitySourceItem" });
    case 7:
      return S.Array(IdentitySourceItem);
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), identitySources: IdentitySources }),
      ).annotate({
        identifier: "ListIdentitySourcesOutput",
      });
    case 1:
      return S.Union([
        /*@__PURE__*/ S.Struct({ unspecified: S.Boolean }),
        /*@__PURE__*/ S.Struct({ identifier: EntityIdentifier }),
      ]);
    case 2:
      return S.suspend(() =>
        S.Struct({
          principal: S.optional(EntityReference),
          resource: S.optional(EntityReference),
          policyType: S.optional(PolicyType),
          policyTemplateId: S.optional(S.String),
        }),
      ).annotate({ identifier: "PolicyFilter" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          filter: S.optional(PolicyFilter),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListPoliciesInput" });
    case 4:
      return S.suspend(() => S.Struct({ description: S.optional(SensitiveString) })).annotate({
        identifier: "StaticPolicyDefinitionItem",
      });
    case 5:
      return S.Union([
        /*@__PURE__*/ S.Struct({ static: StaticPolicyDefinitionItem }),
        /*@__PURE__*/ S.Struct({ templateLinked: TemplateLinkedPolicyDefinitionItem }),
      ]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          policyId: S.String,
          policyType: PolicyType,
          principal: S.optional(EntityIdentifier),
          resource: S.optional(EntityIdentifier),
          actions: S.optional(ActionIdentifierList),
          definition: PolicyDefinitionItem,
          createdDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          effect: S.optional(PolicyEffect),
          name: S.optional(S.String),
        }),
      ).annotate({ identifier: "PolicyItem" });
    case 7:
      return S.Array(PolicyItem);
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), policies: PolicyList }),
      ).annotate({ identifier: "ListPoliciesOutput" });
    case 1:
      return S.suspend(() => S.Struct({ policyStoreId: S.optional(S.String) })).annotate({
        identifier: "PolicyStoreAliasFilter",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
          filter: S.optional(PolicyStoreAliasFilter),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPolicyStoreAliasesInput",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          aliasName: S.String,
          policyStoreId: S.String,
          aliasArn: S.String,
          createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          state: AliasState,
        }),
      ).annotate({ identifier: "PolicyStoreAliasItem" });
    case 4:
      return S.Array(PolicyStoreAliasItem);
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), policyStoreAliases: PolicyStoreAliasList }),
      ).annotate({
        identifier: "ListPolicyStoreAliasesOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), maxResults: S.optional(S.Number) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListPolicyStoresInput" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          arn: S.String,
          createdDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          description: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "PolicyStoreItem" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(PolicyStoreItem);
    case 1:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), policyStores: PolicyStoreList }),
      ).annotate({ identifier: "ListPolicyStoresOutput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          nextToken: S.optional(S.String),
          maxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListPolicyTemplatesInput" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          policyTemplateId: S.String,
          description: S.optional(SensitiveString),
          createdDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          name: S.optional(S.String),
        }),
      ).annotate({ identifier: "PolicyTemplateItem" });
    case 4:
      return S.Array(PolicyTemplateItem);
    case 5:
      return S.suspend(() =>
        S.Struct({ nextToken: S.optional(S.String), policyTemplates: PolicyTemplatesList }),
      ).annotate({
        identifier: "ListPolicyTemplatesOutput",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListTagsForResourceInput" });
    case 7:
      return S.suspend(() => S.Struct({ tags: S.optional(TagMap) })).annotate({
        identifier: "ListTagsForResourceOutput",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.Union([/*@__PURE__*/ S.Struct({ cedarJson: SensitiveString })]);
    case 1:
      return S.suspend(() =>
        S.Struct({ policyStoreId: S.String, definition: SchemaDefinition }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "PutSchemaInput" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          namespaces: NamespaceList,
          createdDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
          lastUpdatedDate: T.DateFromString.pipe(T.TimestampFormat("date-time")),
        }),
      ).annotate({ identifier: "PutSchemaOutput" });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tags: TagMap }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceInput" });
    case 4:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String, tagKeys: TagKeyList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceInput" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          identitySourceId: S.String,
          updateConfiguration: UpdateConfiguration,
          principalEntityType: S.optional(SensitiveString),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateIdentitySourceInput",
      });
    case 6:
      return S.Union([/*@__PURE__*/ S.Struct({ static: UpdateStaticPolicyDefinition })]);
    case 7:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          policyId: S.String,
          definition: S.optional(UpdatePolicyDefinition),
          name: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdatePolicyInput" });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          validationSettings: ValidationSettings,
          deletionProtection: S.optional(DeletionProtection),
          description: S.optional(SensitiveString),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdatePolicyStoreInput" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          policyStoreId: S.String,
          policyTemplateId: S.String,
          description: S.optional(SensitiveString),
          statement: SensitiveString,
          name: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdatePolicyTemplateInput",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ resourceId: S.String, resourceType: ResourceType }),
      ).annotate({ identifier: "ResourceConflict" });
    case 3:
      return S.Array(ResourceConflict);
  }
}
