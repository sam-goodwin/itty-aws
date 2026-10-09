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
const ns = /*@__PURE__*/ T.XmlNamespace("https://license-manager.amazonaws.com/doc/2018_08_01");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "License Manager",
  serviceShapeName: "AWSLicenseManager",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "license-manager" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-08-01");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsJson1_1();
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
              `https://license-manager-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://license-manager-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://license-manager.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://license-manager.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ServiceAccessDenied", httpResponseCode: 401 }),
      /*@__PURE__*/ T.HttpError(401),
    ),
  ).pipe(C.withAuthError) {}
export class AuthorizationException
  extends /*@__PURE__*/ S.TaggedError<AuthorizationException>()(
    "AuthorizationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "AuthorizationFailure", httpResponseCode: 403 }),
      /*@__PURE__*/ T.HttpError(403),
    ),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ConflictException", httpResponseCode: 409 }),
      /*@__PURE__*/ T.HttpError(409),
    ),
  ).pipe(C.withConflictError) {}
export class EntitlementNotAllowedException
  extends /*@__PURE__*/ S.TaggedError<EntitlementNotAllowedException>()(
    "EntitlementNotAllowedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class FailedDependencyException
  extends /*@__PURE__*/ S.TaggedError<FailedDependencyException>()(
    "FailedDependencyException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      ErrorCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "FailedDependency", httpResponseCode: 424 }),
      /*@__PURE__*/ T.HttpError(424),
    ),
  ) {}
export class FilterLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<FilterLimitExceededException>()(
    "FilterLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "FilterLimitExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidParameterValueException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterValueException>()(
    "InvalidParameterValueException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({
        code: "InvalidParameterValueProvided",
        httpResponseCode: 400,
      }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class InvalidResourceStateException
  extends /*@__PURE__*/ S.TaggedError<InvalidResourceStateException>()(
    "InvalidResourceStateException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidResourceState", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class LicenseConfigurationNotFound
  extends /*@__PURE__*/ S.TaggedError<LicenseConfigurationNotFound>()(
    "LicenseConfigurationNotFound",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.SyntheticError({
      from: "InvalidParameterValueException",
      message: { includes: "Invalid license configuration ARN" },
    }),
  ).pipe(C.withNotFoundError) {}
export class LicenseUsageException
  extends /*@__PURE__*/ S.TaggedError<LicenseUsageException>()(
    "LicenseUsageException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "LicenseUsageFailure", httpResponseCode: 412 }),
      /*@__PURE__*/ T.HttpError(412),
    ),
  ) {}
export class NoEntitlementsAllowedException
  extends /*@__PURE__*/ S.TaggedError<NoEntitlementsAllowedException>()(
    "NoEntitlementsAllowedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class RateLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<RateLimitExceededException>()(
    "RateLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "RateLimitExceeded", httpResponseCode: 429 }),
      /*@__PURE__*/ T.HttpError(429),
    ),
  ).pipe(C.withThrottlingError) {}
export class RedirectException
  extends /*@__PURE__*/ S.TaggedError<RedirectException>()(
    "RedirectException",
    {
      Location: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.HttpHeader("Location")),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(308),
  ) {}
export class ResourceLimitExceededException
  extends /*@__PURE__*/ S.TaggedError<ResourceLimitExceededException>()(
    "ResourceLimitExceededException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "ResourceLimitExceeded", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InvalidResource.NotFound", httpResponseCode: 400 }),
      /*@__PURE__*/ T.HttpError(400),
    ),
  ).pipe(C.withBadRequestError) {}
export class ServerInternalException
  extends /*@__PURE__*/ S.TaggedError<ServerInternalException>()(
    "ServerInternalException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.AwsQueryError({ code: "InternalError", httpResponseCode: 500 }),
      /*@__PURE__*/ T.HttpError(500),
    ),
  ).pipe(C.withServerError) {}
export class UnsupportedDigitalSignatureMethodException
  extends /*@__PURE__*/ S.TaggedError<UnsupportedDigitalSignatureMethodException>()(
    "UnsupportedDigitalSignatureMethodException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type Arn = string;
export interface AcceptGrantRequest {
  GrantArn: string;
}
const AcceptGrantRequest = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<AcceptGrantRequest>;
export type GrantStatus =
  | "PENDING_WORKFLOW"
  | "PENDING_ACCEPT"
  | "REJECTED"
  | "ACTIVE"
  | "FAILED_WORKFLOW"
  | "DELETED"
  | "PENDING_DELETE"
  | "DISABLED"
  | "WORKFLOW_COMPLETED"
  | (string & {});
const GrantStatus = S.String;

export interface AcceptGrantResponse {
  GrantArn?: string;
  Status?: GrantStatus;
  Version?: string;
}
const AcceptGrantResponse = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<AcceptGrantResponse>;
export interface CheckInLicenseRequest {
  LicenseConsumptionToken: string;
  Beneficiary?: string;
}
const CheckInLicenseRequest = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<CheckInLicenseRequest>;
export interface CheckInLicenseResponse {}
const CheckInLicenseResponse = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<CheckInLicenseResponse>;
export type EntitlementDataUnit =
  | "Count"
  | "None"
  | "Seconds"
  | "Microseconds"
  | "Milliseconds"
  | "Bytes"
  | "Kilobytes"
  | "Megabytes"
  | "Gigabytes"
  | "Terabytes"
  | "Bits"
  | "Kilobits"
  | "Megabits"
  | "Gigabits"
  | "Terabits"
  | "Percent"
  | "Bytes/Second"
  | "Kilobytes/Second"
  | "Megabytes/Second"
  | "Gigabytes/Second"
  | "Terabytes/Second"
  | "Bits/Second"
  | "Kilobits/Second"
  | "Megabits/Second"
  | "Gigabits/Second"
  | "Terabits/Second"
  | "Count/Second"
  | (string & {});
const EntitlementDataUnit = S.String;

export interface EntitlementData {
  Name: string;
  Value?: string;
  Unit: EntitlementDataUnit;
}
const EntitlementData = /*@__PURE__*/ __L.at(__c0, 4) as any as S.Schema<EntitlementData>;
export type EntitlementDataList = EntitlementData[];
const EntitlementDataList = /*@__PURE__*/ __L.at(__c0, 5);
export type DigitalSignatureMethod = "JWT_PS384" | (string & {});
const DigitalSignatureMethod = S.String;

export interface Metadata {
  Name?: string;
  Value?: string;
}
const Metadata = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<Metadata>;
export type MetadataList = Metadata[];
const MetadataList = /*@__PURE__*/ __L.at(__c0, 7);
export type ClientToken = string;
export interface CheckoutBorrowLicenseRequest {
  LicenseArn: string;
  Entitlements: EntitlementData[];
  DigitalSignatureMethod: DigitalSignatureMethod;
  NodeId?: string;
  CheckoutMetadata?: Metadata[];
  ClientToken: string;
}
const CheckoutBorrowLicenseRequest = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<CheckoutBorrowLicenseRequest>;
export type SignedToken = string;
export type ISO8601DateTime = string;
export interface CheckoutBorrowLicenseResponse {
  LicenseArn?: string;
  LicenseConsumptionToken?: string;
  EntitlementsAllowed?: EntitlementData[];
  NodeId?: string;
  SignedToken?: string;
  IssuedAt?: string;
  Expiration?: string;
  CheckoutMetadata?: Metadata[];
}
const CheckoutBorrowLicenseResponse = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CheckoutBorrowLicenseResponse>;
export type CheckoutType = "PROVISIONAL" | "PERPETUAL" | (string & {});
const CheckoutType = S.String;

export interface CheckoutLicenseRequest {
  ProductSKU: string;
  CheckoutType: CheckoutType;
  KeyFingerprint: string;
  Entitlements: EntitlementData[];
  ClientToken: string;
  Beneficiary?: string;
  NodeId?: string;
}
const CheckoutLicenseRequest = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<CheckoutLicenseRequest>;
export interface CheckoutLicenseResponse {
  CheckoutType?: CheckoutType;
  LicenseConsumptionToken?: string;
  EntitlementsAllowed?: EntitlementData[];
  SignedToken?: string;
  NodeId?: string;
  IssuedAt?: string;
  Expiration?: string;
  LicenseArn?: string;
}
const CheckoutLicenseResponse = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<CheckoutLicenseResponse>;
export type PrincipalArnList = string[];
const PrincipalArnList = /*@__PURE__*/ __L.at(__c1, 4);
export type AllowedOperation =
  | "CreateGrant"
  | "CheckoutLicense"
  | "CheckoutBorrowLicense"
  | "CheckInLicense"
  | "ExtendConsumptionLicense"
  | "ListPurchasedLicenses"
  | "CreateToken"
  | (string & {});
const AllowedOperation = S.String;

export type AllowedOperationList = AllowedOperation[];
const AllowedOperationList = /*@__PURE__*/ __L.at(__c1, 5);
export interface Tag {
  Key?: string;
  Value?: string;
}
const Tag = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c1, 7);
export interface CreateGrantRequest {
  ClientToken: string;
  GrantName: string;
  LicenseArn: string;
  Principals: string[];
  HomeRegion: string;
  AllowedOperations: AllowedOperation[];
  Tags?: Tag[];
}
const CreateGrantRequest = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<CreateGrantRequest>;
export interface CreateGrantResponse {
  GrantArn?: string;
  Status?: GrantStatus;
  Version?: string;
}
const CreateGrantResponse = AcceptGrantResponse as any as S.Schema<CreateGrantResponse>;
export type StatusReasonMessage = string;
export type ActivationOverrideBehavior =
  | "DISTRIBUTED_GRANTS_ONLY"
  | "ALL_GRANTS_PERMITTED_BY_ISSUER"
  | (string & {});
const ActivationOverrideBehavior = S.String;

export interface Options {
  ActivationOverrideBehavior?: ActivationOverrideBehavior;
}
const Options = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<Options>;
export interface CreateGrantVersionRequest {
  ClientToken: string;
  GrantArn: string;
  GrantName?: string;
  AllowedOperations?: AllowedOperation[];
  Status?: GrantStatus;
  StatusReason?: string;
  SourceVersion?: string;
  Options?: Options;
}
const CreateGrantVersionRequest = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<CreateGrantVersionRequest>;
export interface CreateGrantVersionResponse {
  GrantArn?: string;
  Status?: GrantStatus;
  Version?: string;
}
const CreateGrantVersionResponse = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<CreateGrantVersionResponse>;
export interface Issuer {
  Name: string;
  SignKey?: string;
}
const Issuer = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<Issuer>;
export interface DatetimeRange {
  Begin: string;
  End?: string;
}
const DatetimeRange = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<DatetimeRange>;
export type BoxBoolean = boolean;
export type EntitlementUnit =
  | "Count"
  | "None"
  | "Seconds"
  | "Microseconds"
  | "Milliseconds"
  | "Bytes"
  | "Kilobytes"
  | "Megabytes"
  | "Gigabytes"
  | "Terabytes"
  | "Bits"
  | "Kilobits"
  | "Megabits"
  | "Gigabits"
  | "Terabits"
  | "Percent"
  | "Bytes/Second"
  | "Kilobytes/Second"
  | "Megabytes/Second"
  | "Gigabytes/Second"
  | "Terabytes/Second"
  | "Bits/Second"
  | "Kilobits/Second"
  | "Megabits/Second"
  | "Gigabits/Second"
  | "Terabits/Second"
  | "Count/Second"
  | (string & {});
const EntitlementUnit = S.String;

export interface Entitlement {
  Name: string;
  Value?: string;
  MaxCount?: number;
  Overage?: boolean;
  Unit: EntitlementUnit;
  AllowCheckIn?: boolean;
}
const Entitlement = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<Entitlement>;
export type EntitlementList = Entitlement[];
const EntitlementList = /*@__PURE__*/ __L.at(__c2, 7);
export type RenewType = "None" | "Weekly" | "Monthly" | (string & {});
const RenewType = S.String;

export type BoxInteger = number;
export interface ProvisionalConfiguration {
  MaxTimeToLiveInMinutes: number;
}
const ProvisionalConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<ProvisionalConfiguration>;
export interface BorrowConfiguration {
  AllowEarlyCheckIn: boolean;
  MaxTimeToLiveInMinutes: number;
}
const BorrowConfiguration = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<BorrowConfiguration>;
export interface ConsumptionConfiguration {
  RenewType?: RenewType;
  ProvisionalConfiguration?: ProvisionalConfiguration;
  BorrowConfiguration?: BorrowConfiguration;
}
const ConsumptionConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  2,
) as any as S.Schema<ConsumptionConfiguration>;
export interface CreateLicenseRequest {
  LicenseName: string;
  ProductName: string;
  ProductSKU: string;
  Issuer: Issuer;
  HomeRegion: string;
  Validity: DatetimeRange;
  Entitlements: Entitlement[];
  Beneficiary: string;
  ConsumptionConfiguration: ConsumptionConfiguration;
  LicenseMetadata?: Metadata[];
  ClientToken: string;
  Tags?: Tag[];
}
const CreateLicenseRequest = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<CreateLicenseRequest>;
export type LicenseStatus =
  | "AVAILABLE"
  | "PENDING_AVAILABLE"
  | "DEACTIVATED"
  | "SUSPENDED"
  | "EXPIRED"
  | "PENDING_DELETE"
  | "DELETED"
  | (string & {});
const LicenseStatus = S.String;

export interface CreateLicenseResponse {
  LicenseArn?: string;
  Status?: LicenseStatus;
  Version?: string;
}
const CreateLicenseResponse = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<CreateLicenseResponse>;
export type LicenseAssetResourceName = string;
export type LicenseAssetResourceDescription = string;
export interface LicenseAssetGroupConfiguration {
  UsageDimension?: string;
}
const LicenseAssetGroupConfiguration = /*@__PURE__*/ __L.at(
  __c3,
  5,
) as any as S.Schema<LicenseAssetGroupConfiguration>;
export type LicenseAssetGroupConfigurationList = LicenseAssetGroupConfiguration[];
const LicenseAssetGroupConfigurationList = /*@__PURE__*/ __L.at(__c3, 6);
export type LicenseAssetRulesetArnList = string[];
const LicenseAssetRulesetArnList = PrincipalArnList as any as S.Schema<LicenseAssetRulesetArnList>;
export interface LicenseAssetGroupProperty {
  Key: string;
  Value: string;
}
const LicenseAssetGroupProperty = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<LicenseAssetGroupProperty>;
export type LicenseAssetGroupPropertyList = LicenseAssetGroupProperty[];
const LicenseAssetGroupPropertyList = /*@__PURE__*/ __L.at(__c4, 0);
export interface CreateLicenseAssetGroupRequest {
  Name: string;
  Description?: string;
  LicenseAssetGroupConfigurations: LicenseAssetGroupConfiguration[];
  AssociatedLicenseAssetRulesetARNs: string[];
  Properties?: LicenseAssetGroupProperty[];
  Tags?: Tag[];
  ClientToken: string;
}
const CreateLicenseAssetGroupRequest = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<CreateLicenseAssetGroupRequest>;
export interface CreateLicenseAssetGroupResponse {
  LicenseAssetGroupArn: string;
  Status: string;
}
const CreateLicenseAssetGroupResponse = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<CreateLicenseAssetGroupResponse>;
export type StringList = string[];
const StringList = PrincipalArnList as any as S.Schema<StringList>;
export interface MatchingRuleStatement {
  KeyToMatch: string;
  Constraint: string;
  ValueToMatch: string[];
}
const MatchingRuleStatement = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<MatchingRuleStatement>;
export type MatchingRuleStatementList = MatchingRuleStatement[];
const MatchingRuleStatementList = /*@__PURE__*/ __L.at(__c4, 4);
export interface ScriptRuleStatement {
  KeyToMatch: string;
  Script: string;
}
const ScriptRuleStatement = /*@__PURE__*/ __L.at(__c4, 5) as any as S.Schema<ScriptRuleStatement>;
export type ScriptRuleStatementList = ScriptRuleStatement[];
const ScriptRuleStatementList = /*@__PURE__*/ __L.at(__c4, 6);
export interface AndRuleStatement {
  MatchingRuleStatements?: MatchingRuleStatement[];
  ScriptRuleStatements?: ScriptRuleStatement[];
}
const AndRuleStatement = /*@__PURE__*/ __L.at(__c4, 7) as any as S.Schema<AndRuleStatement>;
export interface OrRuleStatement {
  MatchingRuleStatements?: MatchingRuleStatement[];
  ScriptRuleStatements?: ScriptRuleStatement[];
}
const OrRuleStatement = AndRuleStatement as any as S.Schema<OrRuleStatement>;
export interface LicenseConfigurationRuleStatement {
  AndRuleStatement?: AndRuleStatement;
  OrRuleStatement?: OrRuleStatement;
  MatchingRuleStatement?: MatchingRuleStatement;
}
const LicenseConfigurationRuleStatement = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<LicenseConfigurationRuleStatement>;
export interface LicenseRuleStatement {
  AndRuleStatement?: AndRuleStatement;
  OrRuleStatement?: OrRuleStatement;
  MatchingRuleStatement?: MatchingRuleStatement;
}
const LicenseRuleStatement = /*@__PURE__*/ __L.at(__c5, 1) as any as S.Schema<LicenseRuleStatement>;
export interface InstanceRuleStatement {
  AndRuleStatement?: AndRuleStatement;
  OrRuleStatement?: OrRuleStatement;
  MatchingRuleStatement?: MatchingRuleStatement;
  ScriptRuleStatement?: ScriptRuleStatement;
}
const InstanceRuleStatement = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<InstanceRuleStatement>;
export interface RuleStatement {
  LicenseConfigurationRuleStatement?: LicenseConfigurationRuleStatement;
  LicenseRuleStatement?: LicenseRuleStatement;
  InstanceRuleStatement?: InstanceRuleStatement;
}
const RuleStatement = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<RuleStatement>;
export interface LicenseAssetRule {
  RuleStatement: RuleStatement;
}
const LicenseAssetRule = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<LicenseAssetRule>;
export type LicenseAssetRuleList = LicenseAssetRule[];
const LicenseAssetRuleList = /*@__PURE__*/ __L.at(__c5, 5);
export interface CreateLicenseAssetRulesetRequest {
  Name: string;
  Description?: string;
  Rules: LicenseAssetRule[];
  Tags?: Tag[];
  ClientToken: string;
}
const CreateLicenseAssetRulesetRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<CreateLicenseAssetRulesetRequest>;
export interface CreateLicenseAssetRulesetResponse {
  LicenseAssetRulesetArn: string;
}
const CreateLicenseAssetRulesetResponse = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<CreateLicenseAssetRulesetResponse>;
export type LicenseCountingType = "vCPU" | "Instance" | "Core" | "Socket" | (string & {});
const LicenseCountingType = S.String;

export type BoxLong = number;
export interface ProductInformationFilter {
  ProductInformationFilterName: string;
  ProductInformationFilterValue?: string[];
  ProductInformationFilterComparator: string;
}
const ProductInformationFilter = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<ProductInformationFilter>;
export type ProductInformationFilterList = ProductInformationFilter[];
const ProductInformationFilterList = /*@__PURE__*/ __L.at(__c6, 1);
export interface ProductInformation {
  ResourceType: string;
  ProductInformationFilterList: ProductInformationFilter[];
}
const ProductInformation = /*@__PURE__*/ __L.at(__c6, 2) as any as S.Schema<ProductInformation>;
export type ProductInformationList = ProductInformation[];
const ProductInformationList = /*@__PURE__*/ __L.at(__c6, 3);
export interface CreateLicenseConfigurationRequest {
  Name: string;
  Description?: string;
  LicenseCountingType: LicenseCountingType;
  LicenseCount?: number;
  LicenseCountHardLimit?: boolean;
  LicenseRules?: string[];
  Tags?: Tag[];
  DisassociateWhenNotFound?: boolean;
  ProductInformationList?: ProductInformation[];
  LicenseExpiry?: number;
}
const CreateLicenseConfigurationRequest = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<CreateLicenseConfigurationRequest>;
export interface CreateLicenseConfigurationResponse {
  LicenseConfigurationArn?: string;
}
const CreateLicenseConfigurationResponse = /*@__PURE__*/ __L.at(
  __c6,
  5,
) as any as S.Schema<CreateLicenseConfigurationResponse>;
export type UsageOperation = string;
export type ProductCodeId = string;
export type ProductCodeType = "marketplace" | (string & {});
const ProductCodeType = S.String;

export interface ProductCodeListItem {
  ProductCodeId: string;
  ProductCodeType: ProductCodeType;
}
const ProductCodeListItem = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<ProductCodeListItem>;
export type ProductCodeList = ProductCodeListItem[];
const ProductCodeList = /*@__PURE__*/ __L.at(__c6, 7);
export interface LicenseConversionContext {
  UsageOperation?: string;
  ProductCodes?: ProductCodeListItem[];
}
const LicenseConversionContext = /*@__PURE__*/ __L.at(
  __c7,
  0,
) as any as S.Schema<LicenseConversionContext>;
export interface CreateLicenseConversionTaskForResourceRequest {
  ResourceArn: string;
  SourceLicenseContext: LicenseConversionContext;
  DestinationLicenseContext: LicenseConversionContext;
}
const CreateLicenseConversionTaskForResourceRequest = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<CreateLicenseConversionTaskForResourceRequest>;
export type LicenseConversionTaskId = string;
export interface CreateLicenseConversionTaskForResourceResponse {
  LicenseConversionTaskId?: string;
}
const CreateLicenseConversionTaskForResourceResponse = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<CreateLicenseConversionTaskForResourceResponse>;
export type ReportGeneratorName = string;
export type ReportType =
  | "LicenseConfigurationSummaryReport"
  | "LicenseConfigurationUsageReport"
  | "LicenseAssetGroupUsageReport"
  | (string & {});
export type ReportTypeList = ReportType[];
const ReportTypeList = AllowedOperationList as any as S.Schema<ReportTypeList>;
export type ArnList = string[];
const ArnList = PrincipalArnList as any as S.Schema<ArnList>;
export interface ReportContext {
  licenseConfigurationArns?: string[];
  licenseAssetGroupArns?: string[];
  reportStartDate?: Date;
  reportEndDate?: Date;
}
const ReportContext = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<ReportContext>;
export type ReportFrequencyType = "DAY" | "WEEK" | "MONTH" | "ONE_TIME" | (string & {});
const ReportFrequencyType = S.String;

export interface ReportFrequency {
  value?: number;
  period?: ReportFrequencyType;
}
const ReportFrequency = /*@__PURE__*/ __L.at(__c7, 4) as any as S.Schema<ReportFrequency>;
export type ClientRequestToken = string;
export interface CreateLicenseManagerReportGeneratorRequest {
  ReportGeneratorName: string;
  Type: ReportType[];
  ReportContext: ReportContext;
  ReportFrequency: ReportFrequency;
  ClientToken: string;
  Description?: string;
  Tags?: Tag[];
}
const CreateLicenseManagerReportGeneratorRequest = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<CreateLicenseManagerReportGeneratorRequest>;
export interface CreateLicenseManagerReportGeneratorResponse {
  LicenseManagerReportGeneratorArn?: string;
}
const CreateLicenseManagerReportGeneratorResponse = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<CreateLicenseManagerReportGeneratorResponse>;
export interface CreateLicenseVersionRequest {
  LicenseArn: string;
  LicenseName: string;
  ProductName: string;
  Issuer: Issuer;
  HomeRegion: string;
  Validity: DatetimeRange;
  LicenseMetadata?: Metadata[];
  Entitlements: Entitlement[];
  ConsumptionConfiguration: ConsumptionConfiguration;
  Status: LicenseStatus;
  ClientToken: string;
  SourceVersion?: string;
  ResetUsage?: boolean;
}
const CreateLicenseVersionRequest = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<CreateLicenseVersionRequest>;
export interface CreateLicenseVersionResponse {
  LicenseArn?: string;
  Version?: string;
  Status?: LicenseStatus;
}
const CreateLicenseVersionResponse = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<CreateLicenseVersionResponse>;
export type MaxSize3StringList = string[];
const MaxSize3StringList = PrincipalArnList as any as S.Schema<MaxSize3StringList>;
export interface CreateTokenRequest {
  LicenseArn: string;
  RoleArns?: string[];
  ExpirationInDays?: number;
  TokenProperties?: string[];
  ClientToken: string;
}
const CreateTokenRequest = /*@__PURE__*/ __L.at(__c8, 1) as any as S.Schema<CreateTokenRequest>;
export type TokenType = "REFRESH_TOKEN" | (string & {});
const TokenType = S.String;

export type TokenString = string;
export interface CreateTokenResponse {
  TokenId?: string;
  TokenType?: TokenType;
  Token?: string | redacted.Redacted<string>;
}
const CreateTokenResponse = /*@__PURE__*/ __L.at(__c8, 2) as any as S.Schema<CreateTokenResponse>;
export interface DeleteGrantRequest {
  GrantArn: string;
  StatusReason?: string;
  Version: string;
}
const DeleteGrantRequest = /*@__PURE__*/ __L.at(__c8, 3) as any as S.Schema<DeleteGrantRequest>;
export interface DeleteGrantResponse {
  GrantArn?: string;
  Status?: GrantStatus;
  Version?: string;
}
const DeleteGrantResponse = AcceptGrantResponse as any as S.Schema<DeleteGrantResponse>;
export interface DeleteLicenseRequest {
  LicenseArn: string;
  SourceVersion: string;
}
const DeleteLicenseRequest = /*@__PURE__*/ __L.at(__c8, 4) as any as S.Schema<DeleteLicenseRequest>;
export type LicenseDeletionStatus = "PENDING_DELETE" | "DELETED" | (string & {});
const LicenseDeletionStatus = S.String;

export interface DeleteLicenseResponse {
  Status?: LicenseDeletionStatus;
  DeletionDate?: string;
}
const DeleteLicenseResponse = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<DeleteLicenseResponse>;
export interface DeleteLicenseAssetGroupRequest {
  LicenseAssetGroupArn: string;
}
const DeleteLicenseAssetGroupRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<DeleteLicenseAssetGroupRequest>;
export type LicenseAssetGroupStatus = "ACTIVE" | "DISABLED" | "DELETED" | (string & {});
const LicenseAssetGroupStatus = S.String;

export interface DeleteLicenseAssetGroupResponse {
  Status: LicenseAssetGroupStatus;
}
const DeleteLicenseAssetGroupResponse = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<DeleteLicenseAssetGroupResponse>;
export interface DeleteLicenseAssetRulesetRequest {
  LicenseAssetRulesetArn: string;
}
const DeleteLicenseAssetRulesetRequest = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<DeleteLicenseAssetRulesetRequest>;
export interface DeleteLicenseAssetRulesetResponse {}
const DeleteLicenseAssetRulesetResponse = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<DeleteLicenseAssetRulesetResponse>;
export interface DeleteLicenseConfigurationRequest {
  LicenseConfigurationArn: string;
}
const DeleteLicenseConfigurationRequest = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<DeleteLicenseConfigurationRequest>;
export interface DeleteLicenseConfigurationResponse {}
const DeleteLicenseConfigurationResponse =
  DeleteLicenseAssetRulesetResponse as any as S.Schema<DeleteLicenseConfigurationResponse>;
export interface DeleteLicenseManagerReportGeneratorRequest {
  LicenseManagerReportGeneratorArn: string;
}
const DeleteLicenseManagerReportGeneratorRequest = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<DeleteLicenseManagerReportGeneratorRequest>;
export interface DeleteLicenseManagerReportGeneratorResponse {}
const DeleteLicenseManagerReportGeneratorResponse =
  DeleteLicenseAssetRulesetResponse as any as S.Schema<DeleteLicenseManagerReportGeneratorResponse>;
export interface DeleteTokenRequest {
  TokenId: string;
}
const DeleteTokenRequest = /*@__PURE__*/ __L.at(__c9, 4) as any as S.Schema<DeleteTokenRequest>;
export interface DeleteTokenResponse {}
const DeleteTokenResponse = /*@__PURE__*/ __L.at(__c9, 5) as any as S.Schema<DeleteTokenResponse>;
export interface ExtendLicenseConsumptionRequest {
  LicenseConsumptionToken: string;
  DryRun?: boolean;
}
const ExtendLicenseConsumptionRequest = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<ExtendLicenseConsumptionRequest>;
export interface ExtendLicenseConsumptionResponse {
  LicenseConsumptionToken?: string;
  Expiration?: string;
}
const ExtendLicenseConsumptionResponse = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<ExtendLicenseConsumptionResponse>;
export interface GetAccessTokenRequest {
  Token: string | redacted.Redacted<string>;
  TokenProperties?: string[];
}
const GetAccessTokenRequest = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<GetAccessTokenRequest>;
export interface GetAccessTokenResponse {
  AccessToken?: string | redacted.Redacted<string>;
}
const GetAccessTokenResponse = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<GetAccessTokenResponse>;
export interface GetGrantRequest {
  GrantArn: string;
  Version?: string;
}
const GetGrantRequest = /*@__PURE__*/ __L.at(__c10, 2) as any as S.Schema<GetGrantRequest>;
export interface Grant {
  GrantArn: string;
  GrantName: string;
  ParentArn: string;
  LicenseArn: string;
  GranteePrincipalArn: string;
  HomeRegion: string;
  GrantStatus: GrantStatus;
  StatusReason?: string;
  Version: string;
  GrantedOperations: AllowedOperation[];
  Options?: Options;
}
const Grant = /*@__PURE__*/ __L.at(__c10, 3) as any as S.Schema<Grant>;
export interface GetGrantResponse {
  Grant?: Grant;
}
const GetGrantResponse = /*@__PURE__*/ __L.at(__c10, 4) as any as S.Schema<GetGrantResponse>;
export interface GetLicenseRequest {
  LicenseArn: string;
  Version?: string;
}
const GetLicenseRequest = /*@__PURE__*/ __L.at(__c10, 5) as any as S.Schema<GetLicenseRequest>;
export interface IssuerDetails {
  Name?: string;
  SignKey?: string;
  KeyFingerprint?: string;
}
const IssuerDetails = /*@__PURE__*/ __L.at(__c10, 6) as any as S.Schema<IssuerDetails>;
export interface License {
  LicenseArn?: string;
  LicenseName?: string;
  ProductName?: string;
  ProductSKU?: string;
  Issuer?: IssuerDetails;
  HomeRegion?: string;
  Status?: LicenseStatus;
  Validity?: DatetimeRange;
  Beneficiary?: string;
  Entitlements?: Entitlement[];
  ConsumptionConfiguration?: ConsumptionConfiguration;
  LicenseMetadata?: Metadata[];
  CreateTime?: string;
  Version?: string;
}
const License = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<License>;
export interface GetLicenseResponse {
  License?: License;
}
const GetLicenseResponse = /*@__PURE__*/ __L.at(__c11, 0) as any as S.Schema<GetLicenseResponse>;
export interface GetLicenseAssetGroupRequest {
  LicenseAssetGroupArn: string;
}
const GetLicenseAssetGroupRequest = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<GetLicenseAssetGroupRequest>;
export interface LicenseAssetGroup {
  Name: string;
  Description?: string;
  LicenseAssetGroupConfigurations?: LicenseAssetGroupConfiguration[];
  AssociatedLicenseAssetRulesetARNs: string[];
  Properties?: LicenseAssetGroupProperty[];
  LicenseAssetGroupArn: string;
  Status: LicenseAssetGroupStatus;
  StatusMessage?: string;
  LatestUsageAnalysisTime?: Date;
  LatestResourceDiscoveryTime?: Date;
}
const LicenseAssetGroup = /*@__PURE__*/ __L.at(__c11, 2) as any as S.Schema<LicenseAssetGroup>;
export interface GetLicenseAssetGroupResponse {
  LicenseAssetGroup: LicenseAssetGroup;
}
const GetLicenseAssetGroupResponse = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<GetLicenseAssetGroupResponse>;
export interface GetLicenseAssetRulesetRequest {
  LicenseAssetRulesetArn: string;
}
const GetLicenseAssetRulesetRequest = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<GetLicenseAssetRulesetRequest>;
export interface LicenseAssetRuleset {
  Name: string;
  Description?: string;
  Rules: LicenseAssetRule[];
  LicenseAssetRulesetArn: string;
}
const LicenseAssetRuleset = /*@__PURE__*/ __L.at(__c11, 5) as any as S.Schema<LicenseAssetRuleset>;
export interface GetLicenseAssetRulesetResponse {
  LicenseAssetRuleset: LicenseAssetRuleset;
}
const GetLicenseAssetRulesetResponse = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<GetLicenseAssetRulesetResponse>;
export interface GetLicenseConfigurationRequest {
  LicenseConfigurationArn: string;
}
const GetLicenseConfigurationRequest = /*@__PURE__*/ __L.at(
  __c11,
  7,
) as any as S.Schema<GetLicenseConfigurationRequest>;
export type ResourceType =
  | "EC2_INSTANCE"
  | "EC2_HOST"
  | "EC2_AMI"
  | "RDS"
  | "SYSTEMS_MANAGER_MANAGED_INSTANCE"
  | (string & {});
const ResourceType = S.String;

export interface ConsumedLicenseSummary {
  ResourceType?: ResourceType;
  ConsumedLicenses?: number;
}
const ConsumedLicenseSummary = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<ConsumedLicenseSummary>;
export type ConsumedLicenseSummaryList = ConsumedLicenseSummary[];
const ConsumedLicenseSummaryList = /*@__PURE__*/ __L.at(__c12, 1);
export interface ManagedResourceSummary {
  ResourceType?: ResourceType;
  AssociationCount?: number;
}
const ManagedResourceSummary = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<ManagedResourceSummary>;
export type ManagedResourceSummaryList = ManagedResourceSummary[];
const ManagedResourceSummaryList = /*@__PURE__*/ __L.at(__c12, 3);
export interface AutomatedDiscoveryInformation {
  LastRunTime?: Date;
}
const AutomatedDiscoveryInformation = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<AutomatedDiscoveryInformation>;
export interface GetLicenseConfigurationResponse {
  LicenseConfigurationId?: string;
  LicenseConfigurationArn?: string;
  Name?: string;
  Description?: string;
  LicenseCountingType?: LicenseCountingType;
  LicenseRules?: string[];
  LicenseCount?: number;
  LicenseCountHardLimit?: boolean;
  ConsumedLicenses?: number;
  Status?: string;
  OwnerAccountId?: string;
  ConsumedLicenseSummaryList?: ConsumedLicenseSummary[];
  ManagedResourceSummaryList?: ManagedResourceSummary[];
  Tags?: Tag[];
  ProductInformationList?: ProductInformation[];
  AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;
  DisassociateWhenNotFound?: boolean;
  LicenseExpiry?: number;
}
const GetLicenseConfigurationResponse = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<GetLicenseConfigurationResponse>;
export interface GetLicenseConversionTaskRequest {
  LicenseConversionTaskId: string;
}
const GetLicenseConversionTaskRequest = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<GetLicenseConversionTaskRequest>;
export type LicenseConversionTaskStatus = "IN_PROGRESS" | "SUCCEEDED" | "FAILED" | (string & {});
const LicenseConversionTaskStatus = S.String;

export interface GetLicenseConversionTaskResponse {
  LicenseConversionTaskId?: string;
  ResourceArn?: string;
  SourceLicenseContext?: LicenseConversionContext;
  DestinationLicenseContext?: LicenseConversionContext;
  StatusMessage?: string;
  Status?: LicenseConversionTaskStatus;
  StartTime?: Date;
  LicenseConversionTime?: Date;
  EndTime?: Date;
}
const GetLicenseConversionTaskResponse = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<GetLicenseConversionTaskResponse>;
export interface GetLicenseManagerReportGeneratorRequest {
  LicenseManagerReportGeneratorArn: string;
}
const GetLicenseManagerReportGeneratorRequest = /*@__PURE__*/ __L.at(
  __c13,
  0,
) as any as S.Schema<GetLicenseManagerReportGeneratorRequest>;
export interface S3Location {
  bucket?: string;
  keyPrefix?: string;
}
const S3Location = /*@__PURE__*/ __L.at(__c13, 1) as any as S.Schema<S3Location>;
export interface ReportGenerator {
  ReportGeneratorName?: string;
  ReportType?: ReportType[];
  ReportContext?: ReportContext;
  ReportFrequency?: ReportFrequency;
  LicenseManagerReportGeneratorArn?: string;
  LastRunStatus?: string;
  LastRunFailureReason?: string;
  LastReportGenerationTime?: string;
  ReportCreatorAccount?: string;
  Description?: string;
  S3Location?: S3Location;
  CreateTime?: string;
  Tags?: Tag[];
}
const ReportGenerator = /*@__PURE__*/ __L.at(__c13, 2) as any as S.Schema<ReportGenerator>;
export interface GetLicenseManagerReportGeneratorResponse {
  ReportGenerator?: ReportGenerator;
}
const GetLicenseManagerReportGeneratorResponse = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<GetLicenseManagerReportGeneratorResponse>;
export interface GetLicenseUsageRequest {
  LicenseArn: string;
}
const GetLicenseUsageRequest = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<GetLicenseUsageRequest>;
export interface EntitlementUsage {
  Name: string;
  ConsumedValue: string;
  MaxCount?: string;
  Unit: EntitlementDataUnit;
}
const EntitlementUsage = /*@__PURE__*/ __L.at(__c13, 5) as any as S.Schema<EntitlementUsage>;
export type EntitlementUsageList = EntitlementUsage[];
const EntitlementUsageList = /*@__PURE__*/ __L.at(__c13, 6);
export interface LicenseUsage {
  EntitlementUsages?: EntitlementUsage[];
}
const LicenseUsage = /*@__PURE__*/ __L.at(__c13, 7) as any as S.Schema<LicenseUsage>;
export interface GetLicenseUsageResponse {
  LicenseUsage?: LicenseUsage;
}
const GetLicenseUsageResponse = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<GetLicenseUsageResponse>;
export interface GetServiceSettingsRequest {}
const GetServiceSettingsRequest = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<GetServiceSettingsRequest>;
export interface OrganizationConfiguration {
  EnableIntegration: boolean;
}
const OrganizationConfiguration = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<OrganizationConfiguration>;
export interface CrossAccountDiscoveryServiceStatus {
  Message?: string;
}
const CrossAccountDiscoveryServiceStatus = /*@__PURE__*/ __L.at(
  __c14,
  3,
) as any as S.Schema<CrossAccountDiscoveryServiceStatus>;
export interface RegionStatus {
  Status?: string;
}
const RegionStatus = /*@__PURE__*/ __L.at(__c14, 4) as any as S.Schema<RegionStatus>;
export type RegionStatusMap = { [key: string]: RegionStatus | undefined };
const RegionStatusMap = /*@__PURE__*/ __L.at(__c14, 5);
export interface CrossRegionDiscoveryStatus {
  Message?: { [key: string]: RegionStatus | undefined };
}
const CrossRegionDiscoveryStatus = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<CrossRegionDiscoveryStatus>;
export interface ServiceStatus {
  CrossAccountDiscovery?: CrossAccountDiscoveryServiceStatus;
  CrossRegionDiscovery?: CrossRegionDiscoveryStatus;
}
const ServiceStatus = /*@__PURE__*/ __L.at(__c14, 7) as any as S.Schema<ServiceStatus>;
export interface GetServiceSettingsResponse {
  S3BucketArn?: string;
  SnsTopicArn?: string;
  OrganizationConfiguration?: OrganizationConfiguration;
  EnableCrossAccountsDiscovery?: boolean;
  LicenseManagerResourceShareArn?: string;
  CrossRegionDiscoveryHomeRegion?: string;
  CrossRegionDiscoverySourceRegions?: string[];
  ServiceStatus?: ServiceStatus;
}
const GetServiceSettingsResponse = /*@__PURE__*/ __L.at(
  __c15,
  0,
) as any as S.Schema<GetServiceSettingsResponse>;
export interface ListAssetsForLicenseAssetGroupRequest {
  LicenseAssetGroupArn: string;
  AssetType: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListAssetsForLicenseAssetGroupRequest = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<ListAssetsForLicenseAssetGroupRequest>;
export interface Asset {
  AssetArn?: string;
  LatestAssetDiscoveryTime?: Date;
}
const Asset = /*@__PURE__*/ __L.at(__c15, 2) as any as S.Schema<Asset>;
export type AssetList = Asset[];
const AssetList = /*@__PURE__*/ __L.at(__c15, 3);
export interface ListAssetsForLicenseAssetGroupResponse {
  Assets?: Asset[];
  NextToken?: string;
}
const ListAssetsForLicenseAssetGroupResponse = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<ListAssetsForLicenseAssetGroupResponse>;
export interface ListAssociationsForLicenseConfigurationRequest {
  LicenseConfigurationArn: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListAssociationsForLicenseConfigurationRequest = /*@__PURE__*/ __L.at(
  __c15,
  5,
) as any as S.Schema<ListAssociationsForLicenseConfigurationRequest>;
export interface LicenseConfigurationAssociation {
  ResourceArn?: string;
  ResourceType?: ResourceType;
  ResourceOwnerId?: string;
  AssociationTime?: Date;
  AmiAssociationScope?: string;
}
const LicenseConfigurationAssociation = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<LicenseConfigurationAssociation>;
export type LicenseConfigurationAssociations = LicenseConfigurationAssociation[];
const LicenseConfigurationAssociations = /*@__PURE__*/ __L.at(__c15, 7);
export interface ListAssociationsForLicenseConfigurationResponse {
  LicenseConfigurationAssociations?: LicenseConfigurationAssociation[];
  NextToken?: string;
}
const ListAssociationsForLicenseConfigurationResponse = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<ListAssociationsForLicenseConfigurationResponse>;
export type FilterName = string;
export type FilterValue = string;
export type FilterValues = string[];
const FilterValues = /*@__PURE__*/ __L.at(__c16, 1);
export interface Filter {
  Name?: string;
  Values?: string[];
}
const Filter = /*@__PURE__*/ __L.at(__c16, 2) as any as S.Schema<Filter>;
export type FilterList = Filter[];
const FilterList = /*@__PURE__*/ __L.at(__c16, 3);
export type MaxSize100 = number;
export interface ListDistributedGrantsRequest {
  GrantArns?: string[];
  Filters?: Filter[];
  NextToken?: string;
  MaxResults?: number;
}
const ListDistributedGrantsRequest = /*@__PURE__*/ __L.at(
  __c16,
  4,
) as any as S.Schema<ListDistributedGrantsRequest>;
export type GrantList = Grant[];
const GrantList = /*@__PURE__*/ __L.at(__c16, 5);
export interface ListDistributedGrantsResponse {
  Grants?: Grant[];
  NextToken?: string;
}
const ListDistributedGrantsResponse = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<ListDistributedGrantsResponse>;
export interface ListFailuresForLicenseConfigurationOperationsRequest {
  LicenseConfigurationArn: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListFailuresForLicenseConfigurationOperationsRequest = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<ListFailuresForLicenseConfigurationOperationsRequest>;
export interface LicenseOperationFailure {
  ResourceArn?: string;
  ResourceType?: ResourceType;
  ErrorMessage?: string;
  FailureTime?: Date;
  OperationName?: string;
  ResourceOwnerId?: string;
  OperationRequestedBy?: string;
  MetadataList?: Metadata[];
}
const LicenseOperationFailure = /*@__PURE__*/ __L.at(
  __c17,
  0,
) as any as S.Schema<LicenseOperationFailure>;
export type LicenseOperationFailureList = LicenseOperationFailure[];
const LicenseOperationFailureList = /*@__PURE__*/ __L.at(__c17, 1);
export interface ListFailuresForLicenseConfigurationOperationsResponse {
  LicenseOperationFailureList?: LicenseOperationFailure[];
  NextToken?: string;
}
const ListFailuresForLicenseConfigurationOperationsResponse = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<ListFailuresForLicenseConfigurationOperationsResponse>;
export type Filters = Filter[];
const Filters = /*@__PURE__*/ __L.at(__c17, 3);
export interface ListLicenseAssetGroupsRequest {
  Filters?: Filter[];
  MaxResults?: number;
  NextToken?: string;
}
const ListLicenseAssetGroupsRequest = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<ListLicenseAssetGroupsRequest>;
export type LicenseAssetGroupList = LicenseAssetGroup[];
const LicenseAssetGroupList = /*@__PURE__*/ __L.at(__c17, 5);
export interface ListLicenseAssetGroupsResponse {
  LicenseAssetGroups?: LicenseAssetGroup[];
  NextToken?: string;
}
const ListLicenseAssetGroupsResponse = /*@__PURE__*/ __L.at(
  __c17,
  6,
) as any as S.Schema<ListLicenseAssetGroupsResponse>;
export interface ListLicenseAssetRulesetsRequest {
  Filters?: Filter[];
  ShowAWSManagedLicenseAssetRulesets?: boolean;
  MaxResults?: number;
  NextToken?: string;
}
const ListLicenseAssetRulesetsRequest = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<ListLicenseAssetRulesetsRequest>;
export type LicenseAssetRulesetList = LicenseAssetRuleset[];
const LicenseAssetRulesetList = /*@__PURE__*/ __L.at(__c18, 0);
export interface ListLicenseAssetRulesetsResponse {
  LicenseAssetRulesets?: LicenseAssetRuleset[];
  NextToken?: string;
}
const ListLicenseAssetRulesetsResponse = /*@__PURE__*/ __L.at(
  __c18,
  1,
) as any as S.Schema<ListLicenseAssetRulesetsResponse>;
export interface ListLicenseConfigurationsRequest {
  LicenseConfigurationArns?: string[];
  MaxResults?: number;
  NextToken?: string;
  Filters?: Filter[];
}
const ListLicenseConfigurationsRequest = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<ListLicenseConfigurationsRequest>;
export interface LicenseConfiguration {
  LicenseConfigurationId?: string;
  LicenseConfigurationArn?: string;
  Name?: string;
  Description?: string;
  LicenseCountingType?: LicenseCountingType;
  LicenseRules?: string[];
  LicenseCount?: number;
  LicenseCountHardLimit?: boolean;
  DisassociateWhenNotFound?: boolean;
  ConsumedLicenses?: number;
  Status?: string;
  OwnerAccountId?: string;
  ConsumedLicenseSummaryList?: ConsumedLicenseSummary[];
  ManagedResourceSummaryList?: ManagedResourceSummary[];
  ProductInformationList?: ProductInformation[];
  AutomatedDiscoveryInformation?: AutomatedDiscoveryInformation;
  LicenseExpiry?: number;
}
const LicenseConfiguration = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<LicenseConfiguration>;
export type LicenseConfigurations = LicenseConfiguration[];
const LicenseConfigurations = /*@__PURE__*/ __L.at(__c18, 4);
export interface ListLicenseConfigurationsResponse {
  LicenseConfigurations?: LicenseConfiguration[];
  NextToken?: string;
}
const ListLicenseConfigurationsResponse = /*@__PURE__*/ __L.at(
  __c18,
  5,
) as any as S.Schema<ListLicenseConfigurationsResponse>;
export interface ListLicenseConfigurationsForOrganizationRequest {
  LicenseConfigurationArns?: string[];
  MaxResults?: number;
  NextToken?: string;
  Filters?: Filter[];
}
const ListLicenseConfigurationsForOrganizationRequest = /*@__PURE__*/ __L.at(
  __c18,
  6,
) as any as S.Schema<ListLicenseConfigurationsForOrganizationRequest>;
export interface ListLicenseConfigurationsForOrganizationResponse {
  LicenseConfigurations?: LicenseConfiguration[];
  NextToken?: string;
}
const ListLicenseConfigurationsForOrganizationResponse =
  ListLicenseConfigurationsResponse as any as S.Schema<ListLicenseConfigurationsForOrganizationResponse>;
export interface ListLicenseConversionTasksRequest {
  NextToken?: string;
  MaxResults?: number;
  Filters?: Filter[];
}
const ListLicenseConversionTasksRequest = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<ListLicenseConversionTasksRequest>;
export interface LicenseConversionTask {
  LicenseConversionTaskId?: string;
  ResourceArn?: string;
  SourceLicenseContext?: LicenseConversionContext;
  DestinationLicenseContext?: LicenseConversionContext;
  Status?: LicenseConversionTaskStatus;
  StatusMessage?: string;
  StartTime?: Date;
  LicenseConversionTime?: Date;
  EndTime?: Date;
}
const LicenseConversionTask = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<LicenseConversionTask>;
export type LicenseConversionTasks = LicenseConversionTask[];
const LicenseConversionTasks = /*@__PURE__*/ __L.at(__c19, 1);
export interface ListLicenseConversionTasksResponse {
  LicenseConversionTasks?: LicenseConversionTask[];
  NextToken?: string;
}
const ListLicenseConversionTasksResponse = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<ListLicenseConversionTasksResponse>;
export interface ListLicenseManagerReportGeneratorsRequest {
  Filters?: Filter[];
  NextToken?: string;
  MaxResults?: number;
}
const ListLicenseManagerReportGeneratorsRequest = /*@__PURE__*/ __L.at(
  __c19,
  3,
) as any as S.Schema<ListLicenseManagerReportGeneratorsRequest>;
export type ReportGeneratorList = ReportGenerator[];
const ReportGeneratorList = /*@__PURE__*/ __L.at(__c19, 4);
export interface ListLicenseManagerReportGeneratorsResponse {
  ReportGenerators?: ReportGenerator[];
  NextToken?: string;
}
const ListLicenseManagerReportGeneratorsResponse = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<ListLicenseManagerReportGeneratorsResponse>;
export interface ListLicensesRequest {
  LicenseArns?: string[];
  Filters?: Filter[];
  NextToken?: string;
  MaxResults?: number;
}
const ListLicensesRequest = /*@__PURE__*/ __L.at(__c19, 6) as any as S.Schema<ListLicensesRequest>;
export type LicenseList = License[];
const LicenseList = /*@__PURE__*/ __L.at(__c19, 7);
export interface ListLicensesResponse {
  Licenses?: License[];
  NextToken?: string;
}
const ListLicensesResponse = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<ListLicensesResponse>;
export interface ListLicenseSpecificationsForResourceRequest {
  ResourceArn: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListLicenseSpecificationsForResourceRequest = /*@__PURE__*/ __L.at(
  __c20,
  1,
) as any as S.Schema<ListLicenseSpecificationsForResourceRequest>;
export interface LicenseSpecification {
  LicenseConfigurationArn: string;
  AmiAssociationScope?: string;
}
const LicenseSpecification = /*@__PURE__*/ __L.at(
  __c20,
  2,
) as any as S.Schema<LicenseSpecification>;
export type LicenseSpecifications = LicenseSpecification[];
const LicenseSpecifications = /*@__PURE__*/ __L.at(__c20, 3);
export interface ListLicenseSpecificationsForResourceResponse {
  LicenseSpecifications?: LicenseSpecification[];
  NextToken?: string;
}
const ListLicenseSpecificationsForResourceResponse = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<ListLicenseSpecificationsForResourceResponse>;
export interface ListLicenseVersionsRequest {
  LicenseArn: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListLicenseVersionsRequest = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<ListLicenseVersionsRequest>;
export interface ListLicenseVersionsResponse {
  Licenses?: License[];
  NextToken?: string;
}
const ListLicenseVersionsResponse = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<ListLicenseVersionsResponse>;
export interface ListReceivedGrantsRequest {
  GrantArns?: string[];
  Filters?: Filter[];
  NextToken?: string;
  MaxResults?: number;
}
const ListReceivedGrantsRequest = /*@__PURE__*/ __L.at(
  __c20,
  7,
) as any as S.Schema<ListReceivedGrantsRequest>;
export interface ListReceivedGrantsResponse {
  Grants?: Grant[];
  NextToken?: string;
}
const ListReceivedGrantsResponse =
  ListDistributedGrantsResponse as any as S.Schema<ListReceivedGrantsResponse>;
export interface ListReceivedGrantsForOrganizationRequest {
  LicenseArn: string;
  Filters?: Filter[];
  NextToken?: string;
  MaxResults?: number;
}
const ListReceivedGrantsForOrganizationRequest = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<ListReceivedGrantsForOrganizationRequest>;
export interface ListReceivedGrantsForOrganizationResponse {
  Grants?: Grant[];
  NextToken?: string;
}
const ListReceivedGrantsForOrganizationResponse =
  ListDistributedGrantsResponse as any as S.Schema<ListReceivedGrantsForOrganizationResponse>;
export interface ListReceivedLicensesRequest {
  LicenseArns?: string[];
  Filters?: Filter[];
  NextToken?: string;
  MaxResults?: number;
}
const ListReceivedLicensesRequest = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<ListReceivedLicensesRequest>;
export type ReceivedStatus =
  | "PENDING_WORKFLOW"
  | "PENDING_ACCEPT"
  | "REJECTED"
  | "ACTIVE"
  | "FAILED_WORKFLOW"
  | "DELETED"
  | "DISABLED"
  | "WORKFLOW_COMPLETED"
  | (string & {});
const ReceivedStatus = S.String;

export interface ReceivedMetadata {
  ReceivedStatus?: ReceivedStatus;
  ReceivedStatusReason?: string;
  AllowedOperations?: AllowedOperation[];
}
const ReceivedMetadata = /*@__PURE__*/ __L.at(__c21, 2) as any as S.Schema<ReceivedMetadata>;
export interface GrantedLicense {
  LicenseArn?: string;
  LicenseName?: string;
  ProductName?: string;
  ProductSKU?: string;
  Issuer?: IssuerDetails;
  HomeRegion?: string;
  Status?: LicenseStatus;
  Validity?: DatetimeRange;
  Beneficiary?: string;
  Entitlements?: Entitlement[];
  ConsumptionConfiguration?: ConsumptionConfiguration;
  LicenseMetadata?: Metadata[];
  CreateTime?: string;
  Version?: string;
  ReceivedMetadata?: ReceivedMetadata;
}
const GrantedLicense = /*@__PURE__*/ __L.at(__c21, 3) as any as S.Schema<GrantedLicense>;
export type GrantedLicenseList = GrantedLicense[];
const GrantedLicenseList = /*@__PURE__*/ __L.at(__c21, 4);
export interface ListReceivedLicensesResponse {
  Licenses?: GrantedLicense[];
  NextToken?: string;
}
const ListReceivedLicensesResponse = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<ListReceivedLicensesResponse>;
export interface ListReceivedLicensesForOrganizationRequest {
  Filters?: Filter[];
  NextToken?: string;
  MaxResults?: number;
}
const ListReceivedLicensesForOrganizationRequest = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<ListReceivedLicensesForOrganizationRequest>;
export interface ListReceivedLicensesForOrganizationResponse {
  Licenses?: GrantedLicense[];
  NextToken?: string;
}
const ListReceivedLicensesForOrganizationResponse =
  ListReceivedLicensesResponse as any as S.Schema<ListReceivedLicensesForOrganizationResponse>;
export type InventoryFilterCondition =
  | "EQUALS"
  | "NOT_EQUALS"
  | "BEGINS_WITH"
  | "CONTAINS"
  | (string & {});
const InventoryFilterCondition = S.String;

export interface InventoryFilter {
  Name: string;
  Condition: InventoryFilterCondition;
  Value?: string;
}
const InventoryFilter = /*@__PURE__*/ __L.at(__c21, 7) as any as S.Schema<InventoryFilter>;
export type InventoryFilterList = InventoryFilter[];
const InventoryFilterList = /*@__PURE__*/ __L.at(__c22, 0);
export interface ListResourceInventoryRequest {
  MaxResults?: number;
  NextToken?: string;
  Filters?: InventoryFilter[];
}
const ListResourceInventoryRequest = /*@__PURE__*/ __L.at(
  __c22,
  1,
) as any as S.Schema<ListResourceInventoryRequest>;
export interface ResourceInventory {
  ResourceId?: string;
  ResourceType?: ResourceType;
  ResourceArn?: string;
  Platform?: string;
  PlatformVersion?: string;
  ResourceOwningAccountId?: string;
  MarketplaceProductCodes?: string[];
  UsageOperation?: string;
  AmiId?: string;
  HostId?: string;
  Region?: string;
  InstanceType?: string;
}
const ResourceInventory = /*@__PURE__*/ __L.at(__c22, 2) as any as S.Schema<ResourceInventory>;
export type ResourceInventoryList = ResourceInventory[];
const ResourceInventoryList = /*@__PURE__*/ __L.at(__c22, 3);
export interface ListResourceInventoryResponse {
  ResourceInventoryList?: ResourceInventory[];
  NextToken?: string;
}
const ListResourceInventoryResponse = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<ListResourceInventoryResponse>;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListTokensRequest {
  TokenIds?: string[];
  Filters?: Filter[];
  NextToken?: string;
  MaxResults?: number;
}
const ListTokensRequest = /*@__PURE__*/ __L.at(__c22, 7) as any as S.Schema<ListTokensRequest>;
export interface TokenData {
  TokenId?: string;
  TokenType?: string;
  LicenseArn?: string;
  ExpirationTime?: string;
  TokenProperties?: string[];
  RoleArns?: string[];
  Status?: string;
}
const TokenData = /*@__PURE__*/ __L.at(__c23, 0) as any as S.Schema<TokenData>;
export type TokenList = TokenData[];
const TokenList = /*@__PURE__*/ __L.at(__c23, 1);
export interface ListTokensResponse {
  Tokens?: TokenData[];
  NextToken?: string;
}
const ListTokensResponse = /*@__PURE__*/ __L.at(__c23, 2) as any as S.Schema<ListTokensResponse>;
export interface ListUsageForLicenseConfigurationRequest {
  LicenseConfigurationArn: string;
  MaxResults?: number;
  NextToken?: string;
  Filters?: Filter[];
}
const ListUsageForLicenseConfigurationRequest = /*@__PURE__*/ __L.at(
  __c23,
  3,
) as any as S.Schema<ListUsageForLicenseConfigurationRequest>;
export interface LicenseConfigurationUsage {
  ResourceArn?: string;
  ResourceType?: ResourceType;
  ResourceStatus?: string;
  ResourceOwnerId?: string;
  AssociationTime?: Date;
  ConsumedLicenses?: number;
}
const LicenseConfigurationUsage = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<LicenseConfigurationUsage>;
export type LicenseConfigurationUsageList = LicenseConfigurationUsage[];
const LicenseConfigurationUsageList = /*@__PURE__*/ __L.at(__c23, 5);
export interface ListUsageForLicenseConfigurationResponse {
  LicenseConfigurationUsageList?: LicenseConfigurationUsage[];
  NextToken?: string;
}
const ListUsageForLicenseConfigurationResponse = /*@__PURE__*/ __L.at(
  __c23,
  6,
) as any as S.Schema<ListUsageForLicenseConfigurationResponse>;
export interface RejectGrantRequest {
  GrantArn: string;
}
const RejectGrantRequest = /*@__PURE__*/ __L.at(__c23, 7) as any as S.Schema<RejectGrantRequest>;
export interface RejectGrantResponse {
  GrantArn?: string;
  Status?: GrantStatus;
  Version?: string;
}
const RejectGrantResponse = AcceptGrantResponse as any as S.Schema<RejectGrantResponse>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c24, 0) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteTokenResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = PrincipalArnList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c24,
  1,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteTokenResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateLicenseAssetGroupRequest {
  Name?: string;
  Description?: string;
  LicenseAssetGroupConfigurations?: LicenseAssetGroupConfiguration[];
  AssociatedLicenseAssetRulesetARNs: string[];
  Properties?: LicenseAssetGroupProperty[];
  LicenseAssetGroupArn: string;
  Status?: LicenseAssetGroupStatus;
  ClientToken: string;
}
const UpdateLicenseAssetGroupRequest = /*@__PURE__*/ __L.at(
  __c24,
  2,
) as any as S.Schema<UpdateLicenseAssetGroupRequest>;
export interface UpdateLicenseAssetGroupResponse {
  LicenseAssetGroupArn: string;
  Status: string;
}
const UpdateLicenseAssetGroupResponse =
  CreateLicenseAssetGroupResponse as any as S.Schema<UpdateLicenseAssetGroupResponse>;
export interface UpdateLicenseAssetRulesetRequest {
  Name?: string;
  Description?: string;
  Rules: LicenseAssetRule[];
  LicenseAssetRulesetArn: string;
  ClientToken: string;
}
const UpdateLicenseAssetRulesetRequest = /*@__PURE__*/ __L.at(
  __c24,
  3,
) as any as S.Schema<UpdateLicenseAssetRulesetRequest>;
export interface UpdateLicenseAssetRulesetResponse {
  LicenseAssetRulesetArn: string;
}
const UpdateLicenseAssetRulesetResponse =
  CreateLicenseAssetRulesetResponse as any as S.Schema<UpdateLicenseAssetRulesetResponse>;
export type LicenseConfigurationStatus = "AVAILABLE" | "DISABLED" | (string & {});
const LicenseConfigurationStatus = S.String;

export interface UpdateLicenseConfigurationRequest {
  LicenseConfigurationArn: string;
  LicenseConfigurationStatus?: LicenseConfigurationStatus;
  LicenseRules?: string[];
  LicenseCount?: number;
  LicenseCountHardLimit?: boolean;
  Name?: string;
  Description?: string;
  ProductInformationList?: ProductInformation[];
  DisassociateWhenNotFound?: boolean;
  LicenseExpiry?: number;
}
const UpdateLicenseConfigurationRequest = /*@__PURE__*/ __L.at(
  __c24,
  4,
) as any as S.Schema<UpdateLicenseConfigurationRequest>;
export interface UpdateLicenseConfigurationResponse {}
const UpdateLicenseConfigurationResponse =
  DeleteLicenseAssetRulesetResponse as any as S.Schema<UpdateLicenseConfigurationResponse>;
export interface UpdateLicenseManagerReportGeneratorRequest {
  LicenseManagerReportGeneratorArn: string;
  ReportGeneratorName: string;
  Type: ReportType[];
  ReportContext: ReportContext;
  ReportFrequency: ReportFrequency;
  ClientToken: string;
  Description?: string;
}
const UpdateLicenseManagerReportGeneratorRequest = /*@__PURE__*/ __L.at(
  __c24,
  5,
) as any as S.Schema<UpdateLicenseManagerReportGeneratorRequest>;
export interface UpdateLicenseManagerReportGeneratorResponse {}
const UpdateLicenseManagerReportGeneratorResponse =
  DeleteLicenseAssetRulesetResponse as any as S.Schema<UpdateLicenseManagerReportGeneratorResponse>;
export interface UpdateLicenseSpecificationsForResourceRequest {
  ResourceArn: string;
  AddLicenseSpecifications?: LicenseSpecification[];
  RemoveLicenseSpecifications?: LicenseSpecification[];
}
const UpdateLicenseSpecificationsForResourceRequest = /*@__PURE__*/ __L.at(
  __c24,
  6,
) as any as S.Schema<UpdateLicenseSpecificationsForResourceRequest>;
export interface UpdateLicenseSpecificationsForResourceResponse {}
const UpdateLicenseSpecificationsForResourceResponse =
  DeleteLicenseAssetRulesetResponse as any as S.Schema<UpdateLicenseSpecificationsForResourceResponse>;
export interface UpdateServiceSettingsRequest {
  S3BucketArn?: string;
  SnsTopicArn?: string;
  OrganizationConfiguration?: OrganizationConfiguration;
  EnableCrossAccountsDiscovery?: boolean;
  EnabledDiscoverySourceRegions?: string[];
}
const UpdateServiceSettingsRequest = /*@__PURE__*/ __L.at(
  __c24,
  7,
) as any as S.Schema<UpdateServiceSettingsRequest>;
export interface UpdateServiceSettingsResponse {}
const UpdateServiceSettingsResponse =
  DeleteLicenseAssetRulesetResponse as any as S.Schema<UpdateServiceSettingsResponse>;
export type Message = string;
export type Location = string;
export type AcceptGrantError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Accepts the specified grant.
 */
export const acceptGrant: API.OperationMethod<
  AcceptGrantRequest,
  AcceptGrantResponse,
  AcceptGrantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AcceptGrantRequest,
  output: AcceptGrantResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AcceptGrant",
}));

export type CheckInLicenseError =
  | AccessDeniedException
  | AuthorizationException
  | ConflictException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceNotFoundException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Checks in the specified license. Check in a license when it is no longer in use.
 */
export const checkInLicense: API.OperationMethod<
  CheckInLicenseRequest,
  CheckInLicenseResponse,
  CheckInLicenseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CheckInLicenseRequest,
  output: CheckInLicenseResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    ConflictException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceNotFoundException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CheckInLicense",
}));

export type CheckoutBorrowLicenseError =
  | AccessDeniedException
  | AuthorizationException
  | EntitlementNotAllowedException
  | InvalidParameterValueException
  | NoEntitlementsAllowedException
  | RateLimitExceededException
  | RedirectException
  | ResourceNotFoundException
  | ServerInternalException
  | UnsupportedDigitalSignatureMethodException
  | ValidationException
  | CommonErrors;
/**
 * Checks out the specified license for offline use.
 */
export const checkoutBorrowLicense: API.OperationMethod<
  CheckoutBorrowLicenseRequest,
  CheckoutBorrowLicenseResponse,
  CheckoutBorrowLicenseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CheckoutBorrowLicenseRequest,
  output: CheckoutBorrowLicenseResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    EntitlementNotAllowedException,
    InvalidParameterValueException,
    NoEntitlementsAllowedException,
    RateLimitExceededException,
    RedirectException,
    ResourceNotFoundException,
    ServerInternalException,
    UnsupportedDigitalSignatureMethodException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CheckoutBorrowLicense",
}));

export type CheckoutLicenseError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | NoEntitlementsAllowedException
  | RateLimitExceededException
  | RedirectException
  | ResourceNotFoundException
  | ServerInternalException
  | UnsupportedDigitalSignatureMethodException
  | ValidationException
  | CommonErrors;
/**
 * Checks out the specified license.
 *
 * If the account that created the license is the same that is performing the check out, you must
 * specify the account as the beneficiary.
 */
export const checkoutLicense: API.OperationMethod<
  CheckoutLicenseRequest,
  CheckoutLicenseResponse,
  CheckoutLicenseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CheckoutLicenseRequest,
  output: CheckoutLicenseResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    NoEntitlementsAllowedException,
    RateLimitExceededException,
    RedirectException,
    ResourceNotFoundException,
    ServerInternalException,
    UnsupportedDigitalSignatureMethodException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CheckoutLicense",
}));

export type CreateGrantError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Creates a grant for the specified license. A grant shares the use of license
 * entitlements with a specific Amazon Web Services account, an organization, or an
 * organizational unit (OU). For more information, see Granted licenses in License Manager in the *License Manager User Guide*.
 */
export const createGrant: API.OperationMethod<
  CreateGrantRequest,
  CreateGrantResponse,
  CreateGrantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateGrantRequest,
  output: CreateGrantResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGrant",
}));

export type CreateGrantVersionError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new version of the specified grant. For more information, see
 * Granted licenses in License Manager in the *License Manager User Guide*.
 */
export const createGrantVersion: API.OperationMethod<
  CreateGrantVersionRequest,
  CreateGrantVersionResponse,
  CreateGrantVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateGrantVersionRequest,
  output: CreateGrantVersionResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateGrantVersion",
}));

export type CreateLicenseError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | RedirectException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Creates a license.
 */
export const createLicense: API.OperationMethod<
  CreateLicenseRequest,
  CreateLicenseResponse,
  CreateLicenseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLicenseRequest,
  output: CreateLicenseResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    RedirectException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLicense",
}));

export type CreateLicenseAssetGroupError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Creates a license asset group.
 */
export const createLicenseAssetGroup: API.OperationMethod<
  CreateLicenseAssetGroupRequest,
  CreateLicenseAssetGroupResponse,
  CreateLicenseAssetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLicenseAssetGroupRequest,
  output: CreateLicenseAssetGroupResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLicenseAssetGroup",
}));

export type CreateLicenseAssetRulesetError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Creates a license asset ruleset.
 */
export const createLicenseAssetRuleset: API.OperationMethod<
  CreateLicenseAssetRulesetRequest,
  CreateLicenseAssetRulesetResponse,
  CreateLicenseAssetRulesetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLicenseAssetRulesetRequest,
  output: CreateLicenseAssetRulesetResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLicenseAssetRuleset",
}));

export type CreateLicenseConfigurationError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceLimitExceededException
  | ServerInternalException
  | CommonErrors;
/**
 * Creates a license configuration.
 *
 * A license configuration is an abstraction of a customer license agreement that can be
 * consumed and enforced by License Manager. Components include specifications for the license
 * type (licensing by instance, socket, CPU, or vCPU), allowed tenancy (shared tenancy,
 * Dedicated Instance, Dedicated Host, or all of these), license affinity to host (how long a
 * license must be associated with a host), and the number of licenses purchased and used.
 */
export const createLicenseConfiguration: API.OperationMethod<
  CreateLicenseConfigurationRequest,
  CreateLicenseConfigurationResponse,
  CreateLicenseConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLicenseConfigurationRequest,
  output: CreateLicenseConfigurationResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceLimitExceededException,
    ServerInternalException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLicenseConfiguration",
}));

export type CreateLicenseConversionTaskForResourceError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new license conversion task.
 */
export const createLicenseConversionTaskForResource: API.OperationMethod<
  CreateLicenseConversionTaskForResourceRequest,
  CreateLicenseConversionTaskForResourceResponse,
  CreateLicenseConversionTaskForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLicenseConversionTaskForResourceRequest,
  output: CreateLicenseConversionTaskForResourceResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLicenseConversionTaskForResource",
}));

export type CreateLicenseManagerReportGeneratorError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Creates a report generator.
 */
export const createLicenseManagerReportGenerator: API.OperationMethod<
  CreateLicenseManagerReportGeneratorRequest,
  CreateLicenseManagerReportGeneratorResponse,
  CreateLicenseManagerReportGeneratorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLicenseManagerReportGeneratorRequest,
  output: CreateLicenseManagerReportGeneratorResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLicenseManagerReportGenerator",
}));

export type CreateLicenseVersionError =
  | AccessDeniedException
  | AuthorizationException
  | ConflictException
  | RateLimitExceededException
  | RedirectException
  | ResourceNotFoundException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Creates a new version of the specified license.
 */
export const createLicenseVersion: API.OperationMethod<
  CreateLicenseVersionRequest,
  CreateLicenseVersionResponse,
  CreateLicenseVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateLicenseVersionRequest,
  output: CreateLicenseVersionResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    ConflictException,
    RateLimitExceededException,
    RedirectException,
    ResourceNotFoundException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateLicenseVersion",
}));

export type CreateTokenError =
  | AccessDeniedException
  | AuthorizationException
  | RateLimitExceededException
  | RedirectException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Creates a long-lived token.
 *
 * A refresh token is a JWT token used to get an access token. With an access token,
 * you can call AssumeRoleWithWebIdentity to get role credentials that you can use to
 * call License Manager to manage the specified license.
 */
export const createToken: API.OperationMethod<
  CreateTokenRequest,
  CreateTokenResponse,
  CreateTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTokenRequest,
  output: CreateTokenResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    RateLimitExceededException,
    RedirectException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateToken",
}));

export type DeleteGrantError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified grant.
 */
export const deleteGrant: API.OperationMethod<
  DeleteGrantRequest,
  DeleteGrantResponse,
  DeleteGrantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteGrantRequest,
  output: DeleteGrantResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteGrant",
}));

export type DeleteLicenseError =
  | AccessDeniedException
  | AuthorizationException
  | ConflictException
  | InvalidParameterValueException
  | RateLimitExceededException
  | RedirectException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified license.
 */
export const deleteLicense: API.OperationMethod<
  DeleteLicenseRequest,
  DeleteLicenseResponse,
  DeleteLicenseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLicenseRequest,
  output: DeleteLicenseResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    ConflictException,
    InvalidParameterValueException,
    RateLimitExceededException,
    RedirectException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLicense",
}));

export type DeleteLicenseAssetGroupError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a license asset group.
 */
export const deleteLicenseAssetGroup: API.OperationMethod<
  DeleteLicenseAssetGroupRequest,
  DeleteLicenseAssetGroupResponse,
  DeleteLicenseAssetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLicenseAssetGroupRequest,
  output: DeleteLicenseAssetGroupResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLicenseAssetGroup",
}));

export type DeleteLicenseAssetRulesetError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a license asset ruleset.
 */
export const deleteLicenseAssetRuleset: API.OperationMethod<
  DeleteLicenseAssetRulesetRequest,
  DeleteLicenseAssetRulesetResponse,
  DeleteLicenseAssetRulesetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLicenseAssetRulesetRequest,
  output: DeleteLicenseAssetRulesetResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLicenseAssetRuleset",
}));

export type DeleteLicenseConfigurationError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | LicenseConfigurationNotFound
  | CommonErrors;
/**
 * Deletes the specified license configuration.
 *
 * You cannot delete a license configuration that is in use.
 */
export const deleteLicenseConfiguration: API.OperationMethod<
  DeleteLicenseConfigurationRequest,
  DeleteLicenseConfigurationResponse,
  DeleteLicenseConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLicenseConfigurationRequest,
  output: DeleteLicenseConfigurationResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    LicenseConfigurationNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLicenseConfiguration",
}));

export type DeleteLicenseManagerReportGeneratorError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified report generator.
 *
 * This action deletes the report generator, which stops it from generating future reports.
 * The action cannot be reversed. It has no effect on the previous reports from this generator.
 */
export const deleteLicenseManagerReportGenerator: API.OperationMethod<
  DeleteLicenseManagerReportGeneratorRequest,
  DeleteLicenseManagerReportGeneratorResponse,
  DeleteLicenseManagerReportGeneratorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteLicenseManagerReportGeneratorRequest,
  output: DeleteLicenseManagerReportGeneratorResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteLicenseManagerReportGenerator",
}));

export type DeleteTokenError =
  | AccessDeniedException
  | AuthorizationException
  | RateLimitExceededException
  | RedirectException
  | ResourceNotFoundException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified token. Must be called in the license home Region.
 */
export const deleteToken: API.OperationMethod<
  DeleteTokenRequest,
  DeleteTokenResponse,
  DeleteTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTokenRequest,
  output: DeleteTokenResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    RateLimitExceededException,
    RedirectException,
    ResourceNotFoundException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteToken",
}));

export type ExtendLicenseConsumptionError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceNotFoundException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Extends the expiration date for license consumption.
 */
export const extendLicenseConsumption: API.OperationMethod<
  ExtendLicenseConsumptionRequest,
  ExtendLicenseConsumptionResponse,
  ExtendLicenseConsumptionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ExtendLicenseConsumptionRequest,
  output: ExtendLicenseConsumptionResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceNotFoundException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExtendLicenseConsumption",
}));

export type GetAccessTokenError =
  | AccessDeniedException
  | AuthorizationException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | InvalidParameterValueException
  | CommonErrors;
/**
 * Gets a temporary access token to use with AssumeRoleWithWebIdentity. Access tokens
 * are valid for one hour.
 */
export const getAccessToken: API.OperationMethod<
  GetAccessTokenRequest,
  GetAccessTokenResponse,
  GetAccessTokenError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAccessTokenRequest,
  output: GetAccessTokenResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
    InvalidParameterValueException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAccessToken",
}));

export type GetGrantError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceLimitExceededException
  | ServerInternalException
  | ValidationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Gets detailed information about the specified grant.
 */
export const getGrant: API.OperationMethod<
  GetGrantRequest,
  GetGrantResponse,
  GetGrantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetGrantRequest,
  output: GetGrantResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceLimitExceededException,
    ServerInternalException,
    ValidationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetGrant",
}));

export type GetLicenseError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | ResourceNotFoundException
  | CommonErrors;
/**
 * Gets detailed information about the specified license.
 */
export const getLicense: API.OperationMethod<
  GetLicenseRequest,
  GetLicenseResponse,
  GetLicenseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLicenseRequest,
  output: GetLicenseResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
    ResourceNotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLicense",
}));

export type GetLicenseAssetGroupError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Gets a license asset group.
 */
export const getLicenseAssetGroup: API.OperationMethod<
  GetLicenseAssetGroupRequest,
  GetLicenseAssetGroupResponse,
  GetLicenseAssetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLicenseAssetGroupRequest,
  output: GetLicenseAssetGroupResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLicenseAssetGroup",
}));

export type GetLicenseAssetRulesetError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Gets a license asset ruleset.
 */
export const getLicenseAssetRuleset: API.OperationMethod<
  GetLicenseAssetRulesetRequest,
  GetLicenseAssetRulesetResponse,
  GetLicenseAssetRulesetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLicenseAssetRulesetRequest,
  output: GetLicenseAssetRulesetResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLicenseAssetRuleset",
}));

export type GetLicenseConfigurationError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | LicenseConfigurationNotFound
  | CommonErrors;
/**
 * Gets detailed information about the specified license configuration.
 */
export const getLicenseConfiguration: API.OperationMethod<
  GetLicenseConfigurationRequest,
  GetLicenseConfigurationResponse,
  GetLicenseConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLicenseConfigurationRequest,
  output: GetLicenseConfigurationResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    LicenseConfigurationNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLicenseConfiguration",
}));

export type GetLicenseConversionTaskError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | CommonErrors;
/**
 * Gets information about the specified license type conversion task.
 */
export const getLicenseConversionTask: API.OperationMethod<
  GetLicenseConversionTaskRequest,
  GetLicenseConversionTaskResponse,
  GetLicenseConversionTaskError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLicenseConversionTaskRequest,
  output: GetLicenseConversionTaskResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLicenseConversionTask",
}));

export type GetLicenseManagerReportGeneratorError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Gets information about the specified report generator.
 */
export const getLicenseManagerReportGenerator: API.OperationMethod<
  GetLicenseManagerReportGeneratorRequest,
  GetLicenseManagerReportGeneratorResponse,
  GetLicenseManagerReportGeneratorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLicenseManagerReportGeneratorRequest,
  output: GetLicenseManagerReportGeneratorResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLicenseManagerReportGenerator",
}));

export type GetLicenseUsageError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Gets detailed information about the usage of the specified license.
 */
export const getLicenseUsage: API.OperationMethod<
  GetLicenseUsageRequest,
  GetLicenseUsageResponse,
  GetLicenseUsageError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetLicenseUsageRequest,
  output: GetLicenseUsageResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetLicenseUsage",
}));

export type GetServiceSettingsError =
  | AccessDeniedException
  | AuthorizationException
  | RateLimitExceededException
  | ServerInternalException
  | CommonErrors;
/**
 * Gets the License Manager settings for the current Region.
 */
export const getServiceSettings: API.OperationMethod<
  GetServiceSettingsRequest,
  GetServiceSettingsResponse,
  GetServiceSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetServiceSettingsRequest,
  output: GetServiceSettingsResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    RateLimitExceededException,
    ServerInternalException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServiceSettings",
}));

export type ListAssetsForLicenseAssetGroupError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Lists assets for a license asset group.
 */
export const listAssetsForLicenseAssetGroup: API.OperationMethod<
  ListAssetsForLicenseAssetGroupRequest,
  ListAssetsForLicenseAssetGroupResponse,
  ListAssetsForLicenseAssetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListAssetsForLicenseAssetGroupRequest,
  output: ListAssetsForLicenseAssetGroupResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssetsForLicenseAssetGroup",
}));

export type ListAssociationsForLicenseConfigurationError =
  | AccessDeniedException
  | AuthorizationException
  | FilterLimitExceededException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | CommonErrors;
/**
 * Lists the resource associations for the specified license configuration.
 *
 * Resource associations need not consume licenses from a license configuration.
 * For example, an AMI or a stopped instance might not consume a license (depending on
 * the license rules).
 */
export const listAssociationsForLicenseConfiguration: API.OperationMethod<
  ListAssociationsForLicenseConfigurationRequest,
  ListAssociationsForLicenseConfigurationResponse,
  ListAssociationsForLicenseConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListAssociationsForLicenseConfigurationRequest,
  output: ListAssociationsForLicenseConfigurationResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    FilterLimitExceededException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAssociationsForLicenseConfiguration",
}));

export type ListDistributedGrantsError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Lists the grants distributed for the specified license.
 */
export const listDistributedGrants: API.OperationMethod<
  ListDistributedGrantsRequest,
  ListDistributedGrantsResponse,
  ListDistributedGrantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListDistributedGrantsRequest,
  output: ListDistributedGrantsResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDistributedGrants",
}));

export type ListFailuresForLicenseConfigurationOperationsError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | CommonErrors;
/**
 * Lists the license configuration operations that failed.
 */
export const listFailuresForLicenseConfigurationOperations: API.OperationMethod<
  ListFailuresForLicenseConfigurationOperationsRequest,
  ListFailuresForLicenseConfigurationOperationsResponse,
  ListFailuresForLicenseConfigurationOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListFailuresForLicenseConfigurationOperationsRequest,
  output: ListFailuresForLicenseConfigurationOperationsResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListFailuresForLicenseConfigurationOperations",
}));

export type ListLicenseAssetGroupsError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Lists license asset groups.
 */
export const listLicenseAssetGroups: API.OperationMethod<
  ListLicenseAssetGroupsRequest,
  ListLicenseAssetGroupsResponse,
  ListLicenseAssetGroupsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListLicenseAssetGroupsRequest,
  output: ListLicenseAssetGroupsResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLicenseAssetGroups",
}));

export type ListLicenseAssetRulesetsError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Lists license asset rulesets.
 */
export const listLicenseAssetRulesets: API.OperationMethod<
  ListLicenseAssetRulesetsRequest,
  ListLicenseAssetRulesetsResponse,
  ListLicenseAssetRulesetsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListLicenseAssetRulesetsRequest,
  output: ListLicenseAssetRulesetsResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLicenseAssetRulesets",
}));

export type ListLicenseConfigurationsError =
  | AccessDeniedException
  | AuthorizationException
  | FilterLimitExceededException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | CommonErrors;
/**
 * Lists the license configurations for your account.
 */
export const listLicenseConfigurations: API.OperationMethod<
  ListLicenseConfigurationsRequest,
  ListLicenseConfigurationsResponse,
  ListLicenseConfigurationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListLicenseConfigurationsRequest,
  output: ListLicenseConfigurationsResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    FilterLimitExceededException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLicenseConfigurations",
}));

export type ListLicenseConfigurationsForOrganizationError =
  | AccessDeniedException
  | AuthorizationException
  | FilterLimitExceededException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | CommonErrors;
/**
 * Lists license configurations for an organization.
 */
export const listLicenseConfigurationsForOrganization: API.OperationMethod<
  ListLicenseConfigurationsForOrganizationRequest,
  ListLicenseConfigurationsForOrganizationResponse,
  ListLicenseConfigurationsForOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListLicenseConfigurationsForOrganizationRequest,
  output: ListLicenseConfigurationsForOrganizationResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    FilterLimitExceededException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLicenseConfigurationsForOrganization",
}));

export type ListLicenseConversionTasksError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | CommonErrors;
/**
 * Lists the license type conversion tasks for your account.
 */
export const listLicenseConversionTasks: API.OperationMethod<
  ListLicenseConversionTasksRequest,
  ListLicenseConversionTasksResponse,
  ListLicenseConversionTasksError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListLicenseConversionTasksRequest,
  output: ListLicenseConversionTasksResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLicenseConversionTasks",
}));

export type ListLicenseManagerReportGeneratorsError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Lists the report generators for your account.
 */
export const listLicenseManagerReportGenerators: API.OperationMethod<
  ListLicenseManagerReportGeneratorsRequest,
  ListLicenseManagerReportGeneratorsResponse,
  ListLicenseManagerReportGeneratorsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListLicenseManagerReportGeneratorsRequest,
  output: ListLicenseManagerReportGeneratorsResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLicenseManagerReportGenerators",
}));

export type ListLicensesError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Lists the licenses for your account.
 */
export const listLicenses: API.OperationMethod<
  ListLicensesRequest,
  ListLicensesResponse,
  ListLicensesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListLicensesRequest,
  output: ListLicensesResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLicenses",
}));

export type ListLicenseSpecificationsForResourceError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | CommonErrors;
/**
 * Describes the license configurations for the specified resource.
 */
export const listLicenseSpecificationsForResource: API.OperationMethod<
  ListLicenseSpecificationsForResourceRequest,
  ListLicenseSpecificationsForResourceResponse,
  ListLicenseSpecificationsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListLicenseSpecificationsForResourceRequest,
  output: ListLicenseSpecificationsForResourceResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLicenseSpecificationsForResource",
}));

export type ListLicenseVersionsError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | CommonErrors;
/**
 * Lists all versions of the specified license.
 */
export const listLicenseVersions: API.OperationMethod<
  ListLicenseVersionsRequest,
  ListLicenseVersionsResponse,
  ListLicenseVersionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListLicenseVersionsRequest,
  output: ListLicenseVersionsResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListLicenseVersions",
}));

export type ListReceivedGrantsError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Lists grants that are received. Received grants are grants created while specifying the
 * recipient as this Amazon Web Services account, your organization, or an organizational unit
 * (OU) to which this member account belongs.
 */
export const listReceivedGrants: API.OperationMethod<
  ListReceivedGrantsRequest,
  ListReceivedGrantsResponse,
  ListReceivedGrantsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListReceivedGrantsRequest,
  output: ListReceivedGrantsResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReceivedGrants",
}));

export type ListReceivedGrantsForOrganizationError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Lists the grants received for all accounts in the organization.
 */
export const listReceivedGrantsForOrganization: API.OperationMethod<
  ListReceivedGrantsForOrganizationRequest,
  ListReceivedGrantsForOrganizationResponse,
  ListReceivedGrantsForOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListReceivedGrantsForOrganizationRequest,
  output: ListReceivedGrantsForOrganizationResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReceivedGrantsForOrganization",
}));

export type ListReceivedLicensesError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Lists received licenses.
 */
export const listReceivedLicenses: API.OperationMethod<
  ListReceivedLicensesRequest,
  ListReceivedLicensesResponse,
  ListReceivedLicensesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListReceivedLicensesRequest,
  output: ListReceivedLicensesResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReceivedLicenses",
}));

export type ListReceivedLicensesForOrganizationError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Lists the licenses received for all accounts in the organization.
 */
export const listReceivedLicensesForOrganization: API.OperationMethod<
  ListReceivedLicensesForOrganizationRequest,
  ListReceivedLicensesForOrganizationResponse,
  ListReceivedLicensesForOrganizationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListReceivedLicensesForOrganizationRequest,
  output: ListReceivedLicensesForOrganizationResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListReceivedLicensesForOrganization",
}));

export type ListResourceInventoryError =
  | AccessDeniedException
  | AuthorizationException
  | FailedDependencyException
  | FilterLimitExceededException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | CommonErrors;
/**
 * Lists resources managed using Systems Manager inventory.
 */
export const listResourceInventory: API.OperationMethod<
  ListResourceInventoryRequest,
  ListResourceInventoryResponse,
  ListResourceInventoryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListResourceInventoryRequest,
  output: ListResourceInventoryResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    FailedDependencyException,
    FilterLimitExceededException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListResourceInventory",
}));

export type ListTagsForResourceError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags for the specified resource. For more information about tagging support in
 * License Manager, see the TagResource operation.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTokensError =
  | AccessDeniedException
  | AuthorizationException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Lists your tokens.
 */
export const listTokens: API.OperationMethod<
  ListTokensRequest,
  ListTokensResponse,
  ListTokensError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListTokensRequest,
  output: ListTokensResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTokens",
}));

export type ListUsageForLicenseConfigurationError =
  | AccessDeniedException
  | AuthorizationException
  | FilterLimitExceededException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | CommonErrors;
/**
 * Lists all license usage records for a license configuration, displaying license
 * consumption details by resource at a selected point in time. Use this action to audit the
 * current license consumption for any license inventory and configuration.
 */
export const listUsageForLicenseConfiguration: API.OperationMethod<
  ListUsageForLicenseConfigurationRequest,
  ListUsageForLicenseConfigurationResponse,
  ListUsageForLicenseConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListUsageForLicenseConfigurationRequest,
  output: ListUsageForLicenseConfigurationResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    FilterLimitExceededException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUsageForLicenseConfiguration",
}));

export type RejectGrantError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Rejects the specified grant.
 */
export const rejectGrant: API.OperationMethod<
  RejectGrantRequest,
  RejectGrantResponse,
  RejectGrantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RejectGrantRequest,
  output: RejectGrantResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "RejectGrant",
}));

export type TagResourceError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Adds the specified tags to the specified resource. The following resources support
 * tagging in License Manager:
 *
 * - Licenses
 *
 * - Grants
 *
 * - License configurations
 *
 * - Report generators
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: TagResourceRequest,
  output: TagResourceResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Removes the specified tags from the specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UntagResourceRequest,
  output: UntagResourceResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateLicenseAssetGroupError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Updates a license asset group.
 */
export const updateLicenseAssetGroup: API.OperationMethod<
  UpdateLicenseAssetGroupRequest,
  UpdateLicenseAssetGroupResponse,
  UpdateLicenseAssetGroupError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLicenseAssetGroupRequest,
  output: UpdateLicenseAssetGroupResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLicenseAssetGroup",
}));

export type UpdateLicenseAssetRulesetError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Updates a license asset ruleset.
 */
export const updateLicenseAssetRuleset: API.OperationMethod<
  UpdateLicenseAssetRulesetRequest,
  UpdateLicenseAssetRulesetResponse,
  UpdateLicenseAssetRulesetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLicenseAssetRulesetRequest,
  output: UpdateLicenseAssetRulesetResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLicenseAssetRuleset",
}));

export type UpdateLicenseConfigurationError =
  | AccessDeniedException
  | AuthorizationException
  | ConflictException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceLimitExceededException
  | ServerInternalException
  | LicenseConfigurationNotFound
  | CommonErrors;
/**
 * Modifies the attributes of an existing license configuration.
 */
export const updateLicenseConfiguration: API.OperationMethod<
  UpdateLicenseConfigurationRequest,
  UpdateLicenseConfigurationResponse,
  UpdateLicenseConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLicenseConfigurationRequest,
  output: UpdateLicenseConfigurationResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    ConflictException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceLimitExceededException,
    ServerInternalException,
    LicenseConfigurationNotFound,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLicenseConfiguration",
}));

export type UpdateLicenseManagerReportGeneratorError =
  | AccessDeniedException
  | AuthorizationException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ResourceLimitExceededException
  | ResourceNotFoundException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Updates a report generator.
 *
 * After you make changes to a report generator, it starts generating new reports within 60 minutes of being updated.
 */
export const updateLicenseManagerReportGenerator: API.OperationMethod<
  UpdateLicenseManagerReportGeneratorRequest,
  UpdateLicenseManagerReportGeneratorResponse,
  UpdateLicenseManagerReportGeneratorError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLicenseManagerReportGeneratorRequest,
  output: UpdateLicenseManagerReportGeneratorResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ResourceLimitExceededException,
    ResourceNotFoundException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLicenseManagerReportGenerator",
}));

export type UpdateLicenseSpecificationsForResourceError =
  | AccessDeniedException
  | AuthorizationException
  | ConflictException
  | InvalidParameterValueException
  | InvalidResourceStateException
  | LicenseUsageException
  | RateLimitExceededException
  | ServerInternalException
  | CommonErrors;
/**
 * Adds or removes the specified license configurations for the specified Amazon Web Services resource.
 *
 * You can update the license specifications of AMIs, instances, and hosts.
 * You cannot update the license specifications for launch templates and CloudFormation templates,
 * as they send license configurations to the operation that creates the resource.
 */
export const updateLicenseSpecificationsForResource: API.OperationMethod<
  UpdateLicenseSpecificationsForResourceRequest,
  UpdateLicenseSpecificationsForResourceResponse,
  UpdateLicenseSpecificationsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateLicenseSpecificationsForResourceRequest,
  output: UpdateLicenseSpecificationsForResourceResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    ConflictException,
    InvalidParameterValueException,
    InvalidResourceStateException,
    LicenseUsageException,
    RateLimitExceededException,
    ServerInternalException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateLicenseSpecificationsForResource",
}));

export type UpdateServiceSettingsError =
  | AccessDeniedException
  | AuthorizationException
  | ConflictException
  | InvalidParameterValueException
  | RateLimitExceededException
  | ServerInternalException
  | ValidationException
  | CommonErrors;
/**
 * Updates License Manager settings for the current Region.
 */
export const updateServiceSettings: API.OperationMethod<
  UpdateServiceSettingsRequest,
  UpdateServiceSettingsResponse,
  UpdateServiceSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateServiceSettingsRequest,
  output: UpdateServiceSettingsResponse,
  errors: [
    AccessDeniedException,
    AuthorizationException,
    ConflictException,
    InvalidParameterValueException,
    RateLimitExceededException,
    ServerInternalException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateServiceSettings",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ GrantArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AcceptGrantRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          GrantArn: S.optional(S.String),
          Status: S.optional(GrantStatus),
          Version: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "AcceptGrantResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ LicenseConsumptionToken: S.String, Beneficiary: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CheckInLicenseRequest" });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CheckInLicenseResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Value: S.optional(S.String), Unit: EntitlementDataUnit }),
      ).annotate({ identifier: "EntitlementData" });
    case 5:
      return S.Array(EntitlementData);
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "Metadata" });
    case 7:
      return S.Array(Metadata);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LicenseArn: S.String,
          Entitlements: EntitlementDataList,
          DigitalSignatureMethod: DigitalSignatureMethod,
          NodeId: S.optional(S.String),
          CheckoutMetadata: S.optional(MetadataList),
          ClientToken: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CheckoutBorrowLicenseRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LicenseArn: S.optional(S.String),
          LicenseConsumptionToken: S.optional(S.String),
          EntitlementsAllowed: S.optional(EntitlementDataList),
          NodeId: S.optional(S.String),
          SignedToken: S.optional(S.String),
          IssuedAt: S.optional(S.String),
          Expiration: S.optional(S.String),
          CheckoutMetadata: S.optional(MetadataList),
        }).pipe(ns),
      ).annotate({
        identifier: "CheckoutBorrowLicenseResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProductSKU: S.String,
          CheckoutType: CheckoutType,
          KeyFingerprint: S.String,
          Entitlements: EntitlementDataList,
          ClientToken: S.String,
          Beneficiary: S.optional(S.String),
          NodeId: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CheckoutLicenseRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CheckoutType: S.optional(CheckoutType),
          LicenseConsumptionToken: S.optional(S.String),
          EntitlementsAllowed: S.optional(EntitlementDataList),
          SignedToken: S.optional(S.String),
          NodeId: S.optional(S.String),
          IssuedAt: S.optional(S.String),
          Expiration: S.optional(S.String),
          LicenseArn: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "CheckoutLicenseResponse" });
    case 4:
      return S.Array(S.String);
    case 5:
      return S.Array(AllowedOperation);
    case 6:
      return S.suspend(() =>
        S.Struct({ Key: S.optional(S.String), Value: S.optional(S.String) }),
      ).annotate({ identifier: "Tag" });
    case 7:
      return S.Array(Tag);
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.String,
          GrantName: S.String,
          LicenseArn: S.String,
          Principals: PrincipalArnList,
          HomeRegion: S.String,
          AllowedOperations: AllowedOperationList,
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateGrantRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ActivationOverrideBehavior: S.optional(ActivationOverrideBehavior) }),
      ).annotate({ identifier: "Options" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ClientToken: S.String,
          GrantArn: S.String,
          GrantName: S.optional(S.String),
          AllowedOperations: S.optional(AllowedOperationList),
          Status: S.optional(GrantStatus),
          StatusReason: S.optional(S.String),
          SourceVersion: S.optional(S.String),
          Options: S.optional(Options),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateGrantVersionRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          GrantArn: S.optional(S.String),
          Status: S.optional(GrantStatus),
          Version: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateGrantVersionResponse",
      });
    case 4:
      return S.suspend(() => S.Struct({ Name: S.String, SignKey: S.optional(S.String) })).annotate({
        identifier: "Issuer",
      });
    case 5:
      return S.suspend(() => S.Struct({ Begin: S.String, End: S.optional(S.String) })).annotate({
        identifier: "DatetimeRange",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Value: S.optional(S.String),
          MaxCount: S.optional(S.Number),
          Overage: S.optional(S.Boolean),
          Unit: EntitlementUnit,
          AllowCheckIn: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "Entitlement" });
    case 7:
      return S.Array(Entitlement);
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ MaxTimeToLiveInMinutes: S.Number })).annotate({
        identifier: "ProvisionalConfiguration",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AllowEarlyCheckIn: S.Boolean, MaxTimeToLiveInMinutes: S.Number }),
      ).annotate({ identifier: "BorrowConfiguration" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RenewType: S.optional(RenewType),
          ProvisionalConfiguration: S.optional(ProvisionalConfiguration),
          BorrowConfiguration: S.optional(BorrowConfiguration),
        }),
      ).annotate({ identifier: "ConsumptionConfiguration" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          LicenseName: S.String,
          ProductName: S.String,
          ProductSKU: S.String,
          Issuer: Issuer,
          HomeRegion: S.String,
          Validity: DatetimeRange,
          Entitlements: EntitlementList,
          Beneficiary: S.String,
          ConsumptionConfiguration: ConsumptionConfiguration,
          LicenseMetadata: S.optional(MetadataList),
          ClientToken: S.String,
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateLicenseRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LicenseArn: S.optional(S.String),
          Status: S.optional(LicenseStatus),
          Version: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "CreateLicenseResponse" });
    case 5:
      return S.suspend(() => S.Struct({ UsageDimension: S.optional(S.String) })).annotate({
        identifier: "LicenseAssetGroupConfiguration",
      });
    case 6:
      return S.Array(LicenseAssetGroupConfiguration);
    case 7:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "LicenseAssetGroupProperty",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.Array(LicenseAssetGroupProperty);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          LicenseAssetGroupConfigurations: LicenseAssetGroupConfigurationList,
          AssociatedLicenseAssetRulesetARNs: LicenseAssetRulesetArnList,
          Properties: S.optional(LicenseAssetGroupPropertyList),
          Tags: S.optional(TagList),
          ClientToken: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateLicenseAssetGroupRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ LicenseAssetGroupArn: S.String, Status: S.String }).pipe(ns),
      ).annotate({
        identifier: "CreateLicenseAssetGroupResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ KeyToMatch: S.String, Constraint: S.String, ValueToMatch: StringList }),
      ).annotate({ identifier: "MatchingRuleStatement" });
    case 4:
      return S.Array(MatchingRuleStatement);
    case 5:
      return S.suspend(() => S.Struct({ KeyToMatch: S.String, Script: S.String })).annotate({
        identifier: "ScriptRuleStatement",
      });
    case 6:
      return S.Array(ScriptRuleStatement);
    case 7:
      return S.suspend(() =>
        S.Struct({
          MatchingRuleStatements: S.optional(MatchingRuleStatementList),
          ScriptRuleStatements: S.optional(ScriptRuleStatementList),
        }),
      ).annotate({ identifier: "AndRuleStatement" });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AndRuleStatement: S.optional(AndRuleStatement),
          OrRuleStatement: S.optional(OrRuleStatement),
          MatchingRuleStatement: S.optional(MatchingRuleStatement),
        }),
      ).annotate({
        identifier: "LicenseConfigurationRuleStatement",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          AndRuleStatement: S.optional(AndRuleStatement),
          OrRuleStatement: S.optional(OrRuleStatement),
          MatchingRuleStatement: S.optional(MatchingRuleStatement),
        }),
      ).annotate({ identifier: "LicenseRuleStatement" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AndRuleStatement: S.optional(AndRuleStatement),
          OrRuleStatement: S.optional(OrRuleStatement),
          MatchingRuleStatement: S.optional(MatchingRuleStatement),
          ScriptRuleStatement: S.optional(ScriptRuleStatement),
        }),
      ).annotate({ identifier: "InstanceRuleStatement" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          LicenseConfigurationRuleStatement: S.optional(LicenseConfigurationRuleStatement),
          LicenseRuleStatement: S.optional(LicenseRuleStatement),
          InstanceRuleStatement: S.optional(InstanceRuleStatement),
        }),
      ).annotate({ identifier: "RuleStatement" });
    case 4:
      return S.suspend(() => S.Struct({ RuleStatement: RuleStatement })).annotate({
        identifier: "LicenseAssetRule",
      });
    case 5:
      return S.Array(LicenseAssetRule);
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          Rules: LicenseAssetRuleList,
          Tags: S.optional(TagList),
          ClientToken: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateLicenseAssetRulesetRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ LicenseAssetRulesetArn: S.String }).pipe(ns)).annotate({
        identifier: "CreateLicenseAssetRulesetResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ProductInformationFilterName: S.String,
          ProductInformationFilterValue: S.optional(StringList),
          ProductInformationFilterComparator: S.String,
        }),
      ).annotate({ identifier: "ProductInformationFilter" });
    case 1:
      return S.Array(ProductInformationFilter);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceType: S.String,
          ProductInformationFilterList: ProductInformationFilterList,
        }),
      ).annotate({ identifier: "ProductInformation" });
    case 3:
      return S.Array(ProductInformation);
    case 4:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          LicenseCountingType: LicenseCountingType,
          LicenseCount: S.optional(S.Number),
          LicenseCountHardLimit: S.optional(S.Boolean),
          LicenseRules: S.optional(StringList),
          Tags: S.optional(TagList),
          DisassociateWhenNotFound: S.optional(S.Boolean),
          ProductInformationList: S.optional(ProductInformationList),
          LicenseExpiry: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateLicenseConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ LicenseConfigurationArn: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "CreateLicenseConfigurationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ ProductCodeId: S.String, ProductCodeType: ProductCodeType }),
      ).annotate({ identifier: "ProductCodeListItem" });
    case 7:
      return S.Array(ProductCodeListItem);
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          UsageOperation: S.optional(S.String),
          ProductCodes: S.optional(ProductCodeList),
        }),
      ).annotate({ identifier: "LicenseConversionContext" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          SourceLicenseContext: LicenseConversionContext,
          DestinationLicenseContext: LicenseConversionContext,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateLicenseConversionTaskForResourceRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ LicenseConversionTaskId: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "CreateLicenseConversionTaskForResourceResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          licenseConfigurationArns: S.optional(ArnList),
          licenseAssetGroupArns: S.optional(ArnList),
          reportStartDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          reportEndDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ReportContext" });
    case 4:
      return S.suspend(() =>
        S.Struct({ value: S.optional(S.Number), period: S.optional(ReportFrequencyType) }),
      ).annotate({ identifier: "ReportFrequency" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ReportGeneratorName: S.String,
          Type: ReportTypeList,
          ReportContext: ReportContext,
          ReportFrequency: ReportFrequency,
          ClientToken: S.String,
          Description: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateLicenseManagerReportGeneratorRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ LicenseManagerReportGeneratorArn: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "CreateLicenseManagerReportGeneratorResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          LicenseArn: S.String,
          LicenseName: S.String,
          ProductName: S.String,
          Issuer: Issuer,
          HomeRegion: S.String,
          Validity: DatetimeRange,
          LicenseMetadata: S.optional(MetadataList),
          Entitlements: EntitlementList,
          ConsumptionConfiguration: ConsumptionConfiguration,
          Status: LicenseStatus,
          ClientToken: S.String,
          SourceVersion: S.optional(S.String),
          ResetUsage: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateLicenseVersionRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LicenseArn: S.optional(S.String),
          Version: S.optional(S.String),
          Status: S.optional(LicenseStatus),
        }).pipe(ns),
      ).annotate({
        identifier: "CreateLicenseVersionResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LicenseArn: S.String,
          RoleArns: S.optional(ArnList),
          ExpirationInDays: S.optional(S.Number),
          TokenProperties: S.optional(MaxSize3StringList),
          ClientToken: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateTokenRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          TokenId: S.optional(S.String),
          TokenType: S.optional(TokenType),
          Token: S.optional(SensitiveString),
        }).pipe(ns),
      ).annotate({ identifier: "CreateTokenResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          GrantArn: S.String,
          StatusReason: S.optional(S.String),
          Version: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteGrantRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ LicenseArn: S.String, SourceVersion: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteLicenseRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(LicenseDeletionStatus),
          DeletionDate: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "DeleteLicenseResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ LicenseAssetGroupArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteLicenseAssetGroupRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ Status: LicenseAssetGroupStatus }).pipe(ns)).annotate({
        identifier: "DeleteLicenseAssetGroupResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ LicenseAssetRulesetArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteLicenseAssetRulesetRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteLicenseAssetRulesetResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ LicenseConfigurationArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteLicenseConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ LicenseManagerReportGeneratorArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteLicenseManagerReportGeneratorRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ TokenId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteTokenRequest" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteTokenResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ LicenseConsumptionToken: S.String, DryRun: S.optional(S.Boolean) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ExtendLicenseConsumptionRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          LicenseConsumptionToken: S.optional(S.String),
          Expiration: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ExtendLicenseConsumptionResponse",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Token: SensitiveString, TokenProperties: S.optional(MaxSize3StringList) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetAccessTokenRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ AccessToken: S.optional(SensitiveString) }).pipe(ns),
      ).annotate({ identifier: "GetAccessTokenResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ GrantArn: S.String, Version: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetGrantRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          GrantArn: S.String,
          GrantName: S.String,
          ParentArn: S.String,
          LicenseArn: S.String,
          GranteePrincipalArn: S.String,
          HomeRegion: S.String,
          GrantStatus: GrantStatus,
          StatusReason: S.optional(S.String),
          Version: S.String,
          GrantedOperations: AllowedOperationList,
          Options: S.optional(Options),
        }),
      ).annotate({ identifier: "Grant" });
    case 4:
      return S.suspend(() => S.Struct({ Grant: S.optional(Grant) }).pipe(ns)).annotate({
        identifier: "GetGrantResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ LicenseArn: S.String, Version: S.optional(S.String) }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetLicenseRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          SignKey: S.optional(S.String),
          KeyFingerprint: S.optional(S.String),
        }),
      ).annotate({ identifier: "IssuerDetails" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          LicenseArn: S.optional(S.String),
          LicenseName: S.optional(S.String),
          ProductName: S.optional(S.String),
          ProductSKU: S.optional(S.String),
          Issuer: S.optional(IssuerDetails),
          HomeRegion: S.optional(S.String),
          Status: S.optional(LicenseStatus),
          Validity: S.optional(DatetimeRange),
          Beneficiary: S.optional(S.String),
          Entitlements: S.optional(EntitlementList),
          ConsumptionConfiguration: S.optional(ConsumptionConfiguration),
          LicenseMetadata: S.optional(MetadataList),
          CreateTime: S.optional(S.String),
          Version: S.optional(S.String),
        }),
      ).annotate({ identifier: "License" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ License: S.optional(License) }).pipe(ns)).annotate({
        identifier: "GetLicenseResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ LicenseAssetGroupArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetLicenseAssetGroupRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          LicenseAssetGroupConfigurations: S.optional(LicenseAssetGroupConfigurationList),
          AssociatedLicenseAssetRulesetARNs: LicenseAssetRulesetArnList,
          Properties: S.optional(LicenseAssetGroupPropertyList),
          LicenseAssetGroupArn: S.String,
          Status: LicenseAssetGroupStatus,
          StatusMessage: S.optional(S.String),
          LatestUsageAnalysisTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LatestResourceDiscoveryTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "LicenseAssetGroup" });
    case 3:
      return S.suspend(() => S.Struct({ LicenseAssetGroup: LicenseAssetGroup }).pipe(ns)).annotate({
        identifier: "GetLicenseAssetGroupResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ LicenseAssetRulesetArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetLicenseAssetRulesetRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          Rules: LicenseAssetRuleList,
          LicenseAssetRulesetArn: S.String,
        }),
      ).annotate({ identifier: "LicenseAssetRuleset" });
    case 6:
      return S.suspend(() =>
        S.Struct({ LicenseAssetRuleset: LicenseAssetRuleset }).pipe(ns),
      ).annotate({
        identifier: "GetLicenseAssetRulesetResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ LicenseConfigurationArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetLicenseConfigurationRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceType: S.optional(ResourceType),
          ConsumedLicenses: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ConsumedLicenseSummary" });
    case 1:
      return S.Array(ConsumedLicenseSummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceType: S.optional(ResourceType),
          AssociationCount: S.optional(S.Number),
        }),
      ).annotate({ identifier: "ManagedResourceSummary" });
    case 3:
      return S.Array(ManagedResourceSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ LastRunTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))) }),
      ).annotate({
        identifier: "AutomatedDiscoveryInformation",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LicenseConfigurationId: S.optional(S.String),
          LicenseConfigurationArn: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          LicenseCountingType: S.optional(LicenseCountingType),
          LicenseRules: S.optional(StringList),
          LicenseCount: S.optional(S.Number),
          LicenseCountHardLimit: S.optional(S.Boolean),
          ConsumedLicenses: S.optional(S.Number),
          Status: S.optional(S.String),
          OwnerAccountId: S.optional(S.String),
          ConsumedLicenseSummaryList: S.optional(ConsumedLicenseSummaryList),
          ManagedResourceSummaryList: S.optional(ManagedResourceSummaryList),
          Tags: S.optional(TagList),
          ProductInformationList: S.optional(ProductInformationList),
          AutomatedDiscoveryInformation: S.optional(AutomatedDiscoveryInformation),
          DisassociateWhenNotFound: S.optional(S.Boolean),
          LicenseExpiry: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({
        identifier: "GetLicenseConfigurationResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ LicenseConversionTaskId: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetLicenseConversionTaskRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          LicenseConversionTaskId: S.optional(S.String),
          ResourceArn: S.optional(S.String),
          SourceLicenseContext: S.optional(LicenseConversionContext),
          DestinationLicenseContext: S.optional(LicenseConversionContext),
          StatusMessage: S.optional(S.String),
          Status: S.optional(LicenseConversionTaskStatus),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LicenseConversionTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }).pipe(ns),
      ).annotate({
        identifier: "GetLicenseConversionTaskResponse",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ LicenseManagerReportGeneratorArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetLicenseManagerReportGeneratorRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ bucket: S.optional(S.String), keyPrefix: S.optional(S.String) }),
      ).annotate({ identifier: "S3Location" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ReportGeneratorName: S.optional(S.String),
          ReportType: S.optional(ReportTypeList),
          ReportContext: S.optional(ReportContext),
          ReportFrequency: S.optional(ReportFrequency),
          LicenseManagerReportGeneratorArn: S.optional(S.String),
          LastRunStatus: S.optional(S.String),
          LastRunFailureReason: S.optional(S.String),
          LastReportGenerationTime: S.optional(S.String),
          ReportCreatorAccount: S.optional(S.String),
          Description: S.optional(S.String),
          S3Location: S.optional(S3Location),
          CreateTime: S.optional(S.String),
          Tags: S.optional(TagList),
        }),
      ).annotate({ identifier: "ReportGenerator" });
    case 3:
      return S.suspend(() =>
        S.Struct({ ReportGenerator: S.optional(ReportGenerator) }).pipe(ns),
      ).annotate({
        identifier: "GetLicenseManagerReportGeneratorResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ LicenseArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetLicenseUsageRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          ConsumedValue: S.String,
          MaxCount: S.optional(S.String),
          Unit: EntitlementDataUnit,
        }),
      ).annotate({ identifier: "EntitlementUsage" });
    case 6:
      return S.Array(EntitlementUsage);
    case 7:
      return S.suspend(() =>
        S.Struct({ EntitlementUsages: S.optional(EntitlementUsageList) }),
      ).annotate({ identifier: "LicenseUsage" });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ LicenseUsage: S.optional(LicenseUsage) }).pipe(ns),
      ).annotate({ identifier: "GetLicenseUsageResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({}).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetServiceSettingsRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ EnableIntegration: S.Boolean })).annotate({
        identifier: "OrganizationConfiguration",
      });
    case 3:
      return S.suspend(() => S.Struct({ Message: S.optional(S.String) })).annotate({
        identifier: "CrossAccountDiscoveryServiceStatus",
      });
    case 4:
      return S.suspend(() => S.Struct({ Status: S.optional(S.String) })).annotate({
        identifier: "RegionStatus",
      });
    case 5:
      return S.Record(S.String, /*@__PURE__*/ RegionStatus.pipe(S.optional));
    case 6:
      return S.suspend(() => S.Struct({ Message: S.optional(RegionStatusMap) })).annotate({
        identifier: "CrossRegionDiscoveryStatus",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CrossAccountDiscovery: S.optional(CrossAccountDiscoveryServiceStatus),
          CrossRegionDiscovery: S.optional(CrossRegionDiscoveryStatus),
        }),
      ).annotate({ identifier: "ServiceStatus" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          S3BucketArn: S.optional(S.String),
          SnsTopicArn: S.optional(S.String),
          OrganizationConfiguration: S.optional(OrganizationConfiguration),
          EnableCrossAccountsDiscovery: S.optional(S.Boolean),
          LicenseManagerResourceShareArn: S.optional(S.String),
          CrossRegionDiscoveryHomeRegion: S.optional(S.String),
          CrossRegionDiscoverySourceRegions: S.optional(StringList),
          ServiceStatus: S.optional(ServiceStatus),
        }).pipe(ns),
      ).annotate({
        identifier: "GetServiceSettingsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LicenseAssetGroupArn: S.String,
          AssetType: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAssetsForLicenseAssetGroupRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          AssetArn: S.optional(S.String),
          LatestAssetDiscoveryTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Asset" });
    case 3:
      return S.Array(Asset);
    case 4:
      return S.suspend(() =>
        S.Struct({ Assets: S.optional(AssetList), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "ListAssetsForLicenseAssetGroupResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LicenseConfigurationArn: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAssociationsForLicenseConfigurationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.optional(S.String),
          ResourceType: S.optional(ResourceType),
          ResourceOwnerId: S.optional(S.String),
          AssociationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          AmiAssociationScope: S.optional(S.String),
        }),
      ).annotate({
        identifier: "LicenseConfigurationAssociation",
      });
    case 7:
      return S.Array(LicenseConfigurationAssociation);
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LicenseConfigurationAssociations: S.optional(LicenseConfigurationAssociations),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListAssociationsForLicenseConfigurationResponse",
      });
    case 1:
      return S.Array(/*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.XmlName("item")));
    case 2:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Values: S.optional(FilterValues) }),
      ).annotate({ identifier: "Filter" });
    case 3:
      return S.Array(Filter);
    case 4:
      return S.suspend(() =>
        S.Struct({
          GrantArns: S.optional(ArnList),
          Filters: S.optional(FilterList),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListDistributedGrantsRequest",
      });
    case 5:
      return S.Array(Grant);
    case 6:
      return S.suspend(() =>
        S.Struct({ Grants: S.optional(GrantList), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "ListDistributedGrantsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          LicenseConfigurationArn: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListFailuresForLicenseConfigurationOperationsRequest",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.optional(S.String),
          ResourceType: S.optional(ResourceType),
          ErrorMessage: S.optional(S.String),
          FailureTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          OperationName: S.optional(S.String),
          ResourceOwnerId: S.optional(S.String),
          OperationRequestedBy: S.optional(S.String),
          MetadataList: S.optional(MetadataList),
        }),
      ).annotate({ identifier: "LicenseOperationFailure" });
    case 1:
      return S.Array(LicenseOperationFailure);
    case 2:
      return S.suspend(() =>
        S.Struct({
          LicenseOperationFailureList: S.optional(LicenseOperationFailureList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListFailuresForLicenseConfigurationOperationsResponse",
      });
    case 3:
      return S.Array(
        /*@__PURE__*/ Filter.pipe(/*@__PURE__*/ T.XmlName("item")).annotate({
          identifier: "Filter",
        }),
      );
    case 4:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(Filters),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListLicenseAssetGroupsRequest",
      });
    case 5:
      return S.Array(LicenseAssetGroup);
    case 6:
      return S.suspend(() =>
        S.Struct({
          LicenseAssetGroups: S.optional(LicenseAssetGroupList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListLicenseAssetGroupsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(Filters),
          ShowAWSManagedLicenseAssetRulesets: S.optional(S.Boolean),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListLicenseAssetRulesetsRequest",
      });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.Array(LicenseAssetRuleset);
    case 1:
      return S.suspend(() =>
        S.Struct({
          LicenseAssetRulesets: S.optional(LicenseAssetRulesetList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListLicenseAssetRulesetsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          LicenseConfigurationArns: S.optional(StringList),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Filters: S.optional(Filters),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListLicenseConfigurationsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          LicenseConfigurationId: S.optional(S.String),
          LicenseConfigurationArn: S.optional(S.String),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          LicenseCountingType: S.optional(LicenseCountingType),
          LicenseRules: S.optional(StringList),
          LicenseCount: S.optional(S.Number),
          LicenseCountHardLimit: S.optional(S.Boolean),
          DisassociateWhenNotFound: S.optional(S.Boolean),
          ConsumedLicenses: S.optional(S.Number),
          Status: S.optional(S.String),
          OwnerAccountId: S.optional(S.String),
          ConsumedLicenseSummaryList: S.optional(ConsumedLicenseSummaryList),
          ManagedResourceSummaryList: S.optional(ManagedResourceSummaryList),
          ProductInformationList: S.optional(ProductInformationList),
          AutomatedDiscoveryInformation: S.optional(AutomatedDiscoveryInformation),
          LicenseExpiry: S.optional(S.Number),
        }),
      ).annotate({ identifier: "LicenseConfiguration" });
    case 4:
      return S.Array(LicenseConfiguration);
    case 5:
      return S.suspend(() =>
        S.Struct({
          LicenseConfigurations: S.optional(LicenseConfigurations),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListLicenseConfigurationsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          LicenseConfigurationArns: S.optional(StringList),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Filters: S.optional(Filters),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListLicenseConfigurationsForOrganizationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
          Filters: S.optional(Filters),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListLicenseConversionTasksRequest",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LicenseConversionTaskId: S.optional(S.String),
          ResourceArn: S.optional(S.String),
          SourceLicenseContext: S.optional(LicenseConversionContext),
          DestinationLicenseContext: S.optional(LicenseConversionContext),
          Status: S.optional(LicenseConversionTaskStatus),
          StatusMessage: S.optional(S.String),
          StartTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          LicenseConversionTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          EndTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "LicenseConversionTask" });
    case 1:
      return S.Array(LicenseConversionTask);
    case 2:
      return S.suspend(() =>
        S.Struct({
          LicenseConversionTasks: S.optional(LicenseConversionTasks),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListLicenseConversionTasksResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(FilterList),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListLicenseManagerReportGeneratorsRequest",
      });
    case 4:
      return S.Array(ReportGenerator);
    case 5:
      return S.suspend(() =>
        S.Struct({
          ReportGenerators: S.optional(ReportGeneratorList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListLicenseManagerReportGeneratorsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          LicenseArns: S.optional(ArnList),
          Filters: S.optional(FilterList),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListLicensesRequest" });
    case 7:
      return S.Array(License);
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Licenses: S.optional(LicenseList), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListLicensesResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListLicenseSpecificationsForResourceRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ LicenseConfigurationArn: S.String, AmiAssociationScope: S.optional(S.String) }),
      ).annotate({ identifier: "LicenseSpecification" });
    case 3:
      return S.Array(LicenseSpecification);
    case 4:
      return S.suspend(() =>
        S.Struct({
          LicenseSpecifications: S.optional(LicenseSpecifications),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListLicenseSpecificationsForResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LicenseArn: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListLicenseVersionsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Licenses: S.optional(LicenseList), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({
        identifier: "ListLicenseVersionsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          GrantArns: S.optional(ArnList),
          Filters: S.optional(FilterList),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListReceivedGrantsRequest",
      });
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          LicenseArn: S.String,
          Filters: S.optional(FilterList),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListReceivedGrantsForOrganizationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          LicenseArns: S.optional(ArnList),
          Filters: S.optional(FilterList),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListReceivedLicensesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ReceivedStatus: S.optional(ReceivedStatus),
          ReceivedStatusReason: S.optional(S.String),
          AllowedOperations: S.optional(AllowedOperationList),
        }),
      ).annotate({ identifier: "ReceivedMetadata" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          LicenseArn: S.optional(S.String),
          LicenseName: S.optional(S.String),
          ProductName: S.optional(S.String),
          ProductSKU: S.optional(S.String),
          Issuer: S.optional(IssuerDetails),
          HomeRegion: S.optional(S.String),
          Status: S.optional(LicenseStatus),
          Validity: S.optional(DatetimeRange),
          Beneficiary: S.optional(S.String),
          Entitlements: S.optional(EntitlementList),
          ConsumptionConfiguration: S.optional(ConsumptionConfiguration),
          LicenseMetadata: S.optional(MetadataList),
          CreateTime: S.optional(S.String),
          Version: S.optional(S.String),
          ReceivedMetadata: S.optional(ReceivedMetadata),
        }),
      ).annotate({ identifier: "GrantedLicense" });
    case 4:
      return S.Array(GrantedLicense);
    case 5:
      return S.suspend(() =>
        S.Struct({
          Licenses: S.optional(GrantedLicenseList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListReceivedLicensesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Filters: S.optional(FilterList),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListReceivedLicensesForOrganizationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Condition: InventoryFilterCondition,
          Value: S.optional(S.String),
        }),
      ).annotate({ identifier: "InventoryFilter" });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.Array(InventoryFilter);
    case 1:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Filters: S.optional(InventoryFilterList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListResourceInventoryRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceId: S.optional(S.String),
          ResourceType: S.optional(ResourceType),
          ResourceArn: S.optional(S.String),
          Platform: S.optional(S.String),
          PlatformVersion: S.optional(S.String),
          ResourceOwningAccountId: S.optional(S.String),
          MarketplaceProductCodes: S.optional(StringList),
          UsageOperation: S.optional(S.String),
          AmiId: S.optional(S.String),
          HostId: S.optional(S.String),
          Region: S.optional(S.String),
          InstanceType: S.optional(S.String),
        }),
      ).annotate({ identifier: "ResourceInventory" });
    case 3:
      return S.Array(ResourceInventory);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceInventoryList: S.optional(ResourceInventoryList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListResourceInventoryResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ Tags: S.optional(TagList) }).pipe(ns)).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TokenIds: S.optional(StringList),
          Filters: S.optional(FilterList),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTokensRequest" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TokenId: S.optional(S.String),
          TokenType: S.optional(S.String),
          LicenseArn: S.optional(S.String),
          ExpirationTime: S.optional(S.String),
          TokenProperties: S.optional(MaxSize3StringList),
          RoleArns: S.optional(ArnList),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "TokenData" });
    case 1:
      return S.Array(TokenData);
    case 2:
      return S.suspend(() =>
        S.Struct({ Tokens: S.optional(TokenList), NextToken: S.optional(S.String) }).pipe(ns),
      ).annotate({ identifier: "ListTokensResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          LicenseConfigurationArn: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Filters: S.optional(Filters),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListUsageForLicenseConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.optional(S.String),
          ResourceType: S.optional(ResourceType),
          ResourceStatus: S.optional(S.String),
          ResourceOwnerId: S.optional(S.String),
          AssociationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ConsumedLicenses: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "LicenseConfigurationUsage",
      });
    case 5:
      return S.Array(LicenseConfigurationUsage);
    case 6:
      return S.suspend(() =>
        S.Struct({
          LicenseConfigurationUsageList: S.optional(LicenseConfigurationUsageList),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({
        identifier: "ListUsageForLicenseConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ GrantArn: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "RejectGrantRequest" });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, Tags: TagList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String, TagKeys: TagKeyList }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          LicenseAssetGroupConfigurations: S.optional(LicenseAssetGroupConfigurationList),
          AssociatedLicenseAssetRulesetARNs: LicenseAssetRulesetArnList,
          Properties: S.optional(LicenseAssetGroupPropertyList),
          LicenseAssetGroupArn: S.String,
          Status: S.optional(LicenseAssetGroupStatus),
          ClientToken: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateLicenseAssetGroupRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Rules: LicenseAssetRuleList,
          LicenseAssetRulesetArn: S.String,
          ClientToken: S.String,
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateLicenseAssetRulesetRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          LicenseConfigurationArn: S.String,
          LicenseConfigurationStatus: S.optional(LicenseConfigurationStatus),
          LicenseRules: S.optional(StringList),
          LicenseCount: S.optional(S.Number),
          LicenseCountHardLimit: S.optional(S.Boolean),
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          ProductInformationList: S.optional(ProductInformationList),
          DisassociateWhenNotFound: S.optional(S.Boolean),
          LicenseExpiry: S.optional(S.Number),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateLicenseConfigurationRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          LicenseManagerReportGeneratorArn: S.String,
          ReportGeneratorName: S.String,
          Type: ReportTypeList,
          ReportContext: ReportContext,
          ReportFrequency: ReportFrequency,
          ClientToken: S.String,
          Description: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateLicenseManagerReportGeneratorRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String,
          AddLicenseSpecifications: S.optional(LicenseSpecifications),
          RemoveLicenseSpecifications: S.optional(LicenseSpecifications),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateLicenseSpecificationsForResourceRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          S3BucketArn: S.optional(S.String),
          SnsTopicArn: S.optional(S.String),
          OrganizationConfiguration: S.optional(OrganizationConfiguration),
          EnableCrossAccountsDiscovery: S.optional(S.Boolean),
          EnabledDiscoverySourceRegions: S.optional(StringList),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateServiceSettingsRequest",
      });
  }
}
