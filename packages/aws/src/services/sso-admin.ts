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
  sdkId: "SSO Admin",
  serviceShapeName: "SWBExternalService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "sso" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-07-20");
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
              `https://sso-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            if (_.getAttr(PartitionResult, "name") === "aws-us-gov") {
              return e(`https://sso.${Region}.amazonaws.com`);
            }
            return e(`https://sso-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(`https://sso.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`);
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://sso.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
      Reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => AccessDeniedExceptionReason).annotate({
          identifier: "AccessDeniedExceptionReason",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
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
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ResourceNotFoundExceptionReason).annotate({
          identifier: "ResourceNotFoundExceptionReason",
        }),
      ),
    },
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
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ThrottlingExceptionReason).annotate({
          identifier: "ThrottlingExceptionReason",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      Reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionReason).annotate({
          identifier: "ValidationExceptionReason",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type InstanceArn = string;
export type RegionName = string;
export interface AddRegionRequest {
  InstanceArn: string;
  RegionName: string;
}
const AddRegionRequest = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<AddRegionRequest>;
export type RegionStatus = "ACTIVE" | "ADDING" | "REMOVING" | (string & {});
const RegionStatus = S.String;

export interface AddRegionResponse {
  Status?: RegionStatus;
}
const AddRegionResponse = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<AddRegionResponse>;
export type PermissionSetArn = string;
export type ManagedPolicyName = string;
export type ManagedPolicyPath = string;
export interface CustomerManagedPolicyReference {
  Name: string;
  Path?: string;
}
const CustomerManagedPolicyReference = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<CustomerManagedPolicyReference>;
export interface AttachCustomerManagedPolicyReferenceToPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  CustomerManagedPolicyReference: CustomerManagedPolicyReference;
}
const AttachCustomerManagedPolicyReferenceToPermissionSetRequest = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<AttachCustomerManagedPolicyReferenceToPermissionSetRequest>;
export interface AttachCustomerManagedPolicyReferenceToPermissionSetResponse {}
const AttachCustomerManagedPolicyReferenceToPermissionSetResponse = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<AttachCustomerManagedPolicyReferenceToPermissionSetResponse>;
export type ManagedPolicyArn = string;
export interface AttachManagedPolicyToPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  ManagedPolicyArn: string;
}
const AttachManagedPolicyToPermissionSetRequest = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<AttachManagedPolicyToPermissionSetRequest>;
export interface AttachManagedPolicyToPermissionSetResponse {}
const AttachManagedPolicyToPermissionSetResponse = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<AttachManagedPolicyToPermissionSetResponse>;
export type TargetId = string;
export type TargetType = "AWS_ACCOUNT" | (string & {});
const TargetType = S.String;

export type PrincipalType = "USER" | "GROUP" | (string & {});
const PrincipalType = S.String;

export type PrincipalId = string;
export interface CreateAccountAssignmentRequest {
  InstanceArn: string;
  TargetId: string;
  TargetType: TargetType;
  PermissionSetArn: string;
  PrincipalType: PrincipalType;
  PrincipalId: string;
}
const CreateAccountAssignmentRequest = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<CreateAccountAssignmentRequest>;
export type StatusValues = "IN_PROGRESS" | "FAILED" | "SUCCEEDED" | (string & {});
const StatusValues = S.String;

export type UUId = string;
export type Reason = string;
export interface AccountAssignmentOperationStatus {
  Status?: StatusValues;
  RequestId?: string;
  FailureReason?: string;
  TargetId?: string;
  TargetType?: TargetType;
  PermissionSetArn?: string;
  PrincipalType?: PrincipalType;
  PrincipalId?: string;
  CreatedDate?: Date;
}
const AccountAssignmentOperationStatus = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<AccountAssignmentOperationStatus>;
export interface CreateAccountAssignmentResponse {
  AccountAssignmentCreationStatus?: AccountAssignmentOperationStatus;
}
const CreateAccountAssignmentResponse = /*@__PURE__*/ __L.at(
  __c1,
  1,
) as any as S.Schema<CreateAccountAssignmentResponse>;
export type ApplicationProviderArn = string;
export type ApplicationNameType = string;
export type Description = string;
export type SignInOrigin = "IDENTITY_CENTER" | "APPLICATION" | (string & {});
const SignInOrigin = S.String;

export type ApplicationUrl = string;
export interface SignInOptions {
  Origin: SignInOrigin;
  ApplicationUrl?: string;
}
const SignInOptions = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<SignInOptions>;
export type ApplicationVisibility = "ENABLED" | "DISABLED" | (string & {});
const ApplicationVisibility = S.String;

export interface PortalOptions {
  SignInOptions?: SignInOptions;
  Visibility?: ApplicationVisibility;
}
const PortalOptions = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<PortalOptions>;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c1, 5);
export type ApplicationStatus = "ENABLED" | "DISABLED" | (string & {});
const ApplicationStatus = S.String;

export type ClientToken = string;
export interface CreateApplicationRequest {
  InstanceArn: string;
  ApplicationProviderArn: string;
  Name: string;
  Description?: string;
  PortalOptions?: PortalOptions;
  Tags?: Tag[];
  Status?: ApplicationStatus;
  ClientToken?: string;
}
const CreateApplicationRequest = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<CreateApplicationRequest>;
export type ApplicationArn = string;
export type IdentityStoreArn = string;
export interface CreateApplicationResponse {
  ApplicationArn?: string;
  InstanceArn?: string;
  IdentityStoreArn?: string;
}
const CreateApplicationResponse = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<CreateApplicationResponse>;
export interface CreateApplicationAssignmentRequest {
  ApplicationArn: string;
  PrincipalId: string;
  PrincipalType: PrincipalType;
}
const CreateApplicationAssignmentRequest = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<CreateApplicationAssignmentRequest>;
export interface CreateApplicationAssignmentResponse {}
const CreateApplicationAssignmentResponse =
  AttachManagedPolicyToPermissionSetResponse as any as S.Schema<CreateApplicationAssignmentResponse>;
export type NameType = string;
export interface CreateInstanceRequest {
  Name?: string;
  ClientToken?: string;
  Tags?: Tag[];
}
const CreateInstanceRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<CreateInstanceRequest>;
export interface CreateInstanceResponse {
  InstanceArn?: string;
}
const CreateInstanceResponse = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<CreateInstanceResponse>;
export type AccessControlAttributeKey = string;
export type AccessControlAttributeValueSource = string;
export type AccessControlAttributeValueSourceList = string[];
const AccessControlAttributeValueSourceList = /*@__PURE__*/ __L.at(__c2, 3);
export interface AccessControlAttributeValue {
  Source: string[];
}
const AccessControlAttributeValue = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<AccessControlAttributeValue>;
export interface AccessControlAttribute {
  Key: string;
  Value: AccessControlAttributeValue;
}
const AccessControlAttribute = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<AccessControlAttribute>;
export type AccessControlAttributeList = AccessControlAttribute[];
const AccessControlAttributeList = /*@__PURE__*/ __L.at(__c2, 6);
export interface InstanceAccessControlAttributeConfiguration {
  AccessControlAttributes: AccessControlAttribute[];
}
const InstanceAccessControlAttributeConfiguration = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<InstanceAccessControlAttributeConfiguration>;
export interface CreateInstanceAccessControlAttributeConfigurationRequest {
  InstanceArn: string;
  InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;
}
const CreateInstanceAccessControlAttributeConfigurationRequest = /*@__PURE__*/ __L.at(
  __c3,
  0,
) as any as S.Schema<CreateInstanceAccessControlAttributeConfigurationRequest>;
export interface CreateInstanceAccessControlAttributeConfigurationResponse {}
const CreateInstanceAccessControlAttributeConfigurationResponse =
  AttachCustomerManagedPolicyReferenceToPermissionSetResponse as any as S.Schema<CreateInstanceAccessControlAttributeConfigurationResponse>;
export type PermissionSetName = string;
export type PermissionSetDescription = string;
export type Duration = string;
export type RelayState = string;
export interface CreatePermissionSetRequest {
  Name: string;
  Description?: string;
  InstanceArn: string;
  SessionDuration?: string;
  RelayState?: string;
  Tags?: Tag[];
}
const CreatePermissionSetRequest = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<CreatePermissionSetRequest>;
export interface PermissionSet {
  Name?: string;
  PermissionSetArn?: string;
  Description?: string;
  CreatedDate?: Date;
  SessionDuration?: string;
  RelayState?: string;
}
const PermissionSet = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<PermissionSet>;
export interface CreatePermissionSetResponse {
  PermissionSet?: PermissionSet;
}
const CreatePermissionSetResponse = /*@__PURE__*/ __L.at(
  __c3,
  3,
) as any as S.Schema<CreatePermissionSetResponse>;
export type TrustedTokenIssuerName = string;
export type TrustedTokenIssuerType = "OIDC_JWT" | (string & {});
const TrustedTokenIssuerType = S.String;

export type TrustedTokenIssuerUrl = string;
export type ClaimAttributePath = string;
export type JMESPath = string;
export type JwksRetrievalOption = "OPEN_ID_DISCOVERY" | (string & {});
const JwksRetrievalOption = S.String;

export interface OidcJwtConfiguration {
  IssuerUrl: string;
  ClaimAttributePath: string;
  IdentityStoreAttributePath: string;
  JwksRetrievalOption: JwksRetrievalOption;
}
const OidcJwtConfiguration = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<OidcJwtConfiguration>;
export type TrustedTokenIssuerConfiguration = { OidcJwtConfiguration: OidcJwtConfiguration };
const TrustedTokenIssuerConfiguration = /*@__PURE__*/ __L.at(__c3, 5);
export interface CreateTrustedTokenIssuerRequest {
  InstanceArn: string;
  Name: string;
  TrustedTokenIssuerType: TrustedTokenIssuerType;
  TrustedTokenIssuerConfiguration: TrustedTokenIssuerConfiguration;
  ClientToken?: string;
  Tags?: Tag[];
}
const CreateTrustedTokenIssuerRequest = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<CreateTrustedTokenIssuerRequest>;
export type TrustedTokenIssuerArn = string;
export interface CreateTrustedTokenIssuerResponse {
  TrustedTokenIssuerArn?: string;
}
const CreateTrustedTokenIssuerResponse = /*@__PURE__*/ __L.at(
  __c3,
  7,
) as any as S.Schema<CreateTrustedTokenIssuerResponse>;
export interface DeleteAccountAssignmentRequest {
  InstanceArn: string;
  TargetId: string;
  TargetType: TargetType;
  PermissionSetArn: string;
  PrincipalType: PrincipalType;
  PrincipalId: string;
}
const DeleteAccountAssignmentRequest = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<DeleteAccountAssignmentRequest>;
export interface DeleteAccountAssignmentResponse {
  AccountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;
}
const DeleteAccountAssignmentResponse = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<DeleteAccountAssignmentResponse>;
export interface DeleteApplicationRequest {
  ApplicationArn: string;
}
const DeleteApplicationRequest = /*@__PURE__*/ __L.at(
  __c4,
  2,
) as any as S.Schema<DeleteApplicationRequest>;
export interface DeleteApplicationResponse {}
const DeleteApplicationResponse = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<DeleteApplicationResponse>;
export type Scope = string;
export interface DeleteApplicationAccessScopeRequest {
  ApplicationArn: string;
  Scope: string;
}
const DeleteApplicationAccessScopeRequest = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<DeleteApplicationAccessScopeRequest>;
export interface DeleteApplicationAccessScopeResponse {}
const DeleteApplicationAccessScopeResponse =
  AttachManagedPolicyToPermissionSetResponse as any as S.Schema<DeleteApplicationAccessScopeResponse>;
export interface DeleteApplicationAssignmentRequest {
  ApplicationArn: string;
  PrincipalId: string;
  PrincipalType: PrincipalType;
}
const DeleteApplicationAssignmentRequest = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<DeleteApplicationAssignmentRequest>;
export interface DeleteApplicationAssignmentResponse {}
const DeleteApplicationAssignmentResponse =
  AttachManagedPolicyToPermissionSetResponse as any as S.Schema<DeleteApplicationAssignmentResponse>;
export type AuthenticationMethodType = "IAM" | (string & {});
const AuthenticationMethodType = S.String;

export interface DeleteApplicationAuthenticationMethodRequest {
  ApplicationArn: string;
  AuthenticationMethodType: AuthenticationMethodType;
}
const DeleteApplicationAuthenticationMethodRequest = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<DeleteApplicationAuthenticationMethodRequest>;
export interface DeleteApplicationAuthenticationMethodResponse {}
const DeleteApplicationAuthenticationMethodResponse =
  AttachManagedPolicyToPermissionSetResponse as any as S.Schema<DeleteApplicationAuthenticationMethodResponse>;
export type GrantType =
  | "authorization_code"
  | "refresh_token"
  | "urn:ietf:params:oauth:grant-type:jwt-bearer"
  | "urn:ietf:params:oauth:grant-type:token-exchange"
  | (string & {});
const GrantType = S.String;

export interface DeleteApplicationGrantRequest {
  ApplicationArn: string;
  GrantType: GrantType;
}
const DeleteApplicationGrantRequest = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<DeleteApplicationGrantRequest>;
export interface DeleteApplicationGrantResponse {}
const DeleteApplicationGrantResponse =
  DeleteApplicationResponse as any as S.Schema<DeleteApplicationGrantResponse>;
export interface DeleteInlinePolicyFromPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
}
const DeleteInlinePolicyFromPermissionSetRequest = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<DeleteInlinePolicyFromPermissionSetRequest>;
export interface DeleteInlinePolicyFromPermissionSetResponse {}
const DeleteInlinePolicyFromPermissionSetResponse =
  AttachManagedPolicyToPermissionSetResponse as any as S.Schema<DeleteInlinePolicyFromPermissionSetResponse>;
export interface DeleteInstanceRequest {
  InstanceArn: string;
}
const DeleteInstanceRequest = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<DeleteInstanceRequest>;
export interface DeleteInstanceResponse {}
const DeleteInstanceResponse = DeleteApplicationResponse as any as S.Schema<DeleteInstanceResponse>;
export interface DeleteInstanceAccessControlAttributeConfigurationRequest {
  InstanceArn: string;
}
const DeleteInstanceAccessControlAttributeConfigurationRequest = /*@__PURE__*/ __L.at(
  __c5,
  2,
) as any as S.Schema<DeleteInstanceAccessControlAttributeConfigurationRequest>;
export interface DeleteInstanceAccessControlAttributeConfigurationResponse {}
const DeleteInstanceAccessControlAttributeConfigurationResponse =
  AttachCustomerManagedPolicyReferenceToPermissionSetResponse as any as S.Schema<DeleteInstanceAccessControlAttributeConfigurationResponse>;
export interface DeletePermissionsBoundaryFromPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
}
const DeletePermissionsBoundaryFromPermissionSetRequest = /*@__PURE__*/ __L.at(
  __c5,
  3,
) as any as S.Schema<DeletePermissionsBoundaryFromPermissionSetRequest>;
export interface DeletePermissionsBoundaryFromPermissionSetResponse {}
const DeletePermissionsBoundaryFromPermissionSetResponse =
  AttachManagedPolicyToPermissionSetResponse as any as S.Schema<DeletePermissionsBoundaryFromPermissionSetResponse>;
export interface DeletePermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
}
const DeletePermissionSetRequest = /*@__PURE__*/ __L.at(
  __c5,
  4,
) as any as S.Schema<DeletePermissionSetRequest>;
export interface DeletePermissionSetResponse {}
const DeletePermissionSetResponse =
  DeleteApplicationResponse as any as S.Schema<DeletePermissionSetResponse>;
export interface DeleteTrustedTokenIssuerRequest {
  TrustedTokenIssuerArn: string;
}
const DeleteTrustedTokenIssuerRequest = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<DeleteTrustedTokenIssuerRequest>;
export interface DeleteTrustedTokenIssuerResponse {}
const DeleteTrustedTokenIssuerResponse =
  AttachManagedPolicyToPermissionSetResponse as any as S.Schema<DeleteTrustedTokenIssuerResponse>;
export interface DescribeAccountAssignmentCreationStatusRequest {
  InstanceArn: string;
  AccountAssignmentCreationRequestId: string;
}
const DescribeAccountAssignmentCreationStatusRequest = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<DescribeAccountAssignmentCreationStatusRequest>;
export interface DescribeAccountAssignmentCreationStatusResponse {
  AccountAssignmentCreationStatus?: AccountAssignmentOperationStatus;
}
const DescribeAccountAssignmentCreationStatusResponse =
  CreateAccountAssignmentResponse as any as S.Schema<DescribeAccountAssignmentCreationStatusResponse>;
export interface DescribeAccountAssignmentDeletionStatusRequest {
  InstanceArn: string;
  AccountAssignmentDeletionRequestId: string;
}
const DescribeAccountAssignmentDeletionStatusRequest = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<DescribeAccountAssignmentDeletionStatusRequest>;
export interface DescribeAccountAssignmentDeletionStatusResponse {
  AccountAssignmentDeletionStatus?: AccountAssignmentOperationStatus;
}
const DescribeAccountAssignmentDeletionStatusResponse =
  DeleteAccountAssignmentResponse as any as S.Schema<DescribeAccountAssignmentDeletionStatusResponse>;
export interface DescribeApplicationRequest {
  ApplicationArn: string;
}
const DescribeApplicationRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<DescribeApplicationRequest>;
export type AccountId = string;
export interface DescribeApplicationResponse {
  ApplicationArn?: string;
  ApplicationProviderArn?: string;
  Name?: string;
  ApplicationAccount?: string;
  InstanceArn?: string;
  IdentityStoreArn?: string;
  Status?: ApplicationStatus;
  PortalOptions?: PortalOptions;
  Description?: string;
  CreatedDate?: Date;
  CreatedFrom?: string;
}
const DescribeApplicationResponse = /*@__PURE__*/ __L.at(
  __c6,
  1,
) as any as S.Schema<DescribeApplicationResponse>;
export interface DescribeApplicationAssignmentRequest {
  ApplicationArn: string;
  PrincipalId: string;
  PrincipalType: PrincipalType;
}
const DescribeApplicationAssignmentRequest = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<DescribeApplicationAssignmentRequest>;
export interface DescribeApplicationAssignmentResponse {
  PrincipalType?: PrincipalType;
  PrincipalId?: string;
  ApplicationArn?: string;
}
const DescribeApplicationAssignmentResponse = /*@__PURE__*/ __L.at(
  __c6,
  3,
) as any as S.Schema<DescribeApplicationAssignmentResponse>;
export interface DescribeApplicationProviderRequest {
  ApplicationProviderArn: string;
}
const DescribeApplicationProviderRequest = /*@__PURE__*/ __L.at(
  __c6,
  4,
) as any as S.Schema<DescribeApplicationProviderRequest>;
export type FederationProtocol = "SAML" | "OAUTH" | (string & {});
const FederationProtocol = S.String;

export type Name = string;
export type IconUrl = string;
export interface DisplayData {
  DisplayName?: string;
  IconUrl?: string;
  Description?: string;
}
const DisplayData = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<DisplayData>;
export type ResourceServerScope = string;
export interface ResourceServerScopeDetails {
  LongDescription?: string;
  DetailedTitle?: string;
}
const ResourceServerScopeDetails = /*@__PURE__*/ __L.at(
  __c6,
  6,
) as any as S.Schema<ResourceServerScopeDetails>;
export type ResourceServerScopes = { [key: string]: ResourceServerScopeDetails | undefined };
const ResourceServerScopes = /*@__PURE__*/ __L.at(__c6, 7);
export interface ResourceServerConfig {
  Scopes?: { [key: string]: ResourceServerScopeDetails | undefined };
}
const ResourceServerConfig = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<ResourceServerConfig>;
export interface DescribeApplicationProviderResponse {
  ApplicationProviderArn: string;
  FederationProtocol?: FederationProtocol;
  DisplayData?: DisplayData;
  ResourceServerConfig?: ResourceServerConfig;
}
const DescribeApplicationProviderResponse = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<DescribeApplicationProviderResponse>;
export interface DescribeInstanceRequest {
  InstanceArn: string;
}
const DescribeInstanceRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<DescribeInstanceRequest>;
export type Id = string;
export type InstanceIdentityStoreArn = string;
export type InstanceStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_FAILED"
  | "DELETE_IN_PROGRESS"
  | "ACTIVE"
  | (string & {});
const InstanceStatus = S.String;

export type IsPrimaryRegion = boolean;
export interface RegionMetadata {
  RegionName?: string;
  Status?: RegionStatus;
  AddedDate?: Date;
  IsPrimaryRegion?: boolean;
}
const RegionMetadata = /*@__PURE__*/ __L.at(__c7, 3) as any as S.Schema<RegionMetadata>;
export type RegionMetadataList = RegionMetadata[];
const RegionMetadataList = /*@__PURE__*/ __L.at(__c7, 4);
export type KmsKeyType = "AWS_OWNED_KMS_KEY" | "CUSTOMER_MANAGED_KEY" | (string & {});
const KmsKeyType = S.String;

export type KmsKeyArn = string;
export type KmsKeyStatus = "UPDATING" | "ENABLED" | "UPDATE_FAILED" | (string & {});
const KmsKeyStatus = S.String;

export interface EncryptionConfigurationDetails {
  KeyType?: KmsKeyType;
  KmsKeyArn?: string;
  EncryptionStatus?: KmsKeyStatus;
  EncryptionStatusReason?: string;
}
const EncryptionConfigurationDetails = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<EncryptionConfigurationDetails>;
export interface DescribeInstanceResponse {
  InstanceArn?: string;
  IdentityStoreId?: string;
  IdentityStoreArn?: string;
  OwnerAccountId?: string;
  Name?: string;
  CreatedDate?: Date;
  Status?: InstanceStatus;
  StatusReason?: string;
  PrimaryRegion?: string;
  Regions?: RegionMetadata[];
  EncryptionConfigurationDetails?: EncryptionConfigurationDetails;
  PermissionSetsEnabled?: boolean;
}
const DescribeInstanceResponse = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<DescribeInstanceResponse>;
export interface DescribeInstanceAccessControlAttributeConfigurationRequest {
  InstanceArn: string;
}
const DescribeInstanceAccessControlAttributeConfigurationRequest = /*@__PURE__*/ __L.at(
  __c7,
  7,
) as any as S.Schema<DescribeInstanceAccessControlAttributeConfigurationRequest>;
export type InstanceAccessControlAttributeConfigurationStatus =
  | "ENABLED"
  | "CREATION_IN_PROGRESS"
  | "CREATION_FAILED"
  | (string & {});
const InstanceAccessControlAttributeConfigurationStatus = S.String;

export type InstanceAccessControlAttributeConfigurationStatusReason = string;
export interface DescribeInstanceAccessControlAttributeConfigurationResponse {
  Status?: InstanceAccessControlAttributeConfigurationStatus;
  StatusReason?: string;
  InstanceAccessControlAttributeConfiguration?: InstanceAccessControlAttributeConfiguration;
}
const DescribeInstanceAccessControlAttributeConfigurationResponse = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<DescribeInstanceAccessControlAttributeConfigurationResponse>;
export interface DescribePermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
}
const DescribePermissionSetRequest = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<DescribePermissionSetRequest>;
export interface DescribePermissionSetResponse {
  PermissionSet?: PermissionSet;
}
const DescribePermissionSetResponse =
  CreatePermissionSetResponse as any as S.Schema<DescribePermissionSetResponse>;
export interface DescribePermissionSetProvisioningStatusRequest {
  InstanceArn: string;
  ProvisionPermissionSetRequestId: string;
}
const DescribePermissionSetProvisioningStatusRequest = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<DescribePermissionSetProvisioningStatusRequest>;
export interface PermissionSetProvisioningStatus {
  Status?: StatusValues;
  RequestId?: string;
  AccountId?: string;
  PermissionSetArn?: string;
  FailureReason?: string;
  CreatedDate?: Date;
}
const PermissionSetProvisioningStatus = /*@__PURE__*/ __L.at(
  __c8,
  3,
) as any as S.Schema<PermissionSetProvisioningStatus>;
export interface DescribePermissionSetProvisioningStatusResponse {
  PermissionSetProvisioningStatus?: PermissionSetProvisioningStatus;
}
const DescribePermissionSetProvisioningStatusResponse = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<DescribePermissionSetProvisioningStatusResponse>;
export interface DescribeRegionRequest {
  InstanceArn: string;
  RegionName: string;
}
const DescribeRegionRequest = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<DescribeRegionRequest>;
export interface DescribeRegionResponse {
  RegionName?: string;
  Status?: RegionStatus;
  AddedDate?: Date;
  IsPrimaryRegion?: boolean;
}
const DescribeRegionResponse = RegionMetadata as any as S.Schema<DescribeRegionResponse>;
export interface DescribeTrustedTokenIssuerRequest {
  TrustedTokenIssuerArn: string;
}
const DescribeTrustedTokenIssuerRequest = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<DescribeTrustedTokenIssuerRequest>;
export interface DescribeTrustedTokenIssuerResponse {
  TrustedTokenIssuerArn?: string;
  Name?: string;
  TrustedTokenIssuerType?: TrustedTokenIssuerType;
  TrustedTokenIssuerConfiguration?: TrustedTokenIssuerConfiguration;
}
const DescribeTrustedTokenIssuerResponse = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<DescribeTrustedTokenIssuerResponse>;
export interface DetachCustomerManagedPolicyReferenceFromPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  CustomerManagedPolicyReference: CustomerManagedPolicyReference;
}
const DetachCustomerManagedPolicyReferenceFromPermissionSetRequest = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<DetachCustomerManagedPolicyReferenceFromPermissionSetRequest>;
export interface DetachCustomerManagedPolicyReferenceFromPermissionSetResponse {}
const DetachCustomerManagedPolicyReferenceFromPermissionSetResponse = /*@__PURE__*/ __L.at(
  __c9,
  1,
) as any as S.Schema<DetachCustomerManagedPolicyReferenceFromPermissionSetResponse>;
export interface DetachManagedPolicyFromPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  ManagedPolicyArn: string;
}
const DetachManagedPolicyFromPermissionSetRequest = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<DetachManagedPolicyFromPermissionSetRequest>;
export interface DetachManagedPolicyFromPermissionSetResponse {}
const DetachManagedPolicyFromPermissionSetResponse =
  AttachManagedPolicyToPermissionSetResponse as any as S.Schema<DetachManagedPolicyFromPermissionSetResponse>;
export interface GetApplicationAccessScopeRequest {
  ApplicationArn: string;
  Scope: string;
}
const GetApplicationAccessScopeRequest = /*@__PURE__*/ __L.at(
  __c9,
  3,
) as any as S.Schema<GetApplicationAccessScopeRequest>;
export type ScopeTarget = string;
export type ScopeTargets = string[];
const ScopeTargets = AccessControlAttributeValueSourceList as any as S.Schema<ScopeTargets>;
export interface GetApplicationAccessScopeResponse {
  Scope: string;
  AuthorizedTargets?: string[];
}
const GetApplicationAccessScopeResponse = /*@__PURE__*/ __L.at(
  __c9,
  4,
) as any as S.Schema<GetApplicationAccessScopeResponse>;
export interface GetApplicationAssignmentConfigurationRequest {
  ApplicationArn: string;
}
const GetApplicationAssignmentConfigurationRequest = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<GetApplicationAssignmentConfigurationRequest>;
export type AssignmentRequired = boolean;
export interface GetApplicationAssignmentConfigurationResponse {
  AssignmentRequired: boolean;
}
const GetApplicationAssignmentConfigurationResponse = /*@__PURE__*/ __L.at(
  __c9,
  6,
) as any as S.Schema<GetApplicationAssignmentConfigurationResponse>;
export interface GetApplicationAuthenticationMethodRequest {
  ApplicationArn: string;
  AuthenticationMethodType: AuthenticationMethodType;
}
const GetApplicationAuthenticationMethodRequest = /*@__PURE__*/ __L.at(
  __c9,
  7,
) as any as S.Schema<GetApplicationAuthenticationMethodRequest>;
export type ActorPolicyDocument = unknown;
export interface IamAuthenticationMethod {
  ActorPolicy: any;
}
const IamAuthenticationMethod = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<IamAuthenticationMethod>;
export type AuthenticationMethod = { Iam: IamAuthenticationMethod };
const AuthenticationMethod = /*@__PURE__*/ __L.at(__c10, 1);
export interface GetApplicationAuthenticationMethodResponse {
  AuthenticationMethod?: AuthenticationMethod;
}
const GetApplicationAuthenticationMethodResponse = /*@__PURE__*/ __L.at(
  __c10,
  2,
) as any as S.Schema<GetApplicationAuthenticationMethodResponse>;
export interface GetApplicationGrantRequest {
  ApplicationArn: string;
  GrantType: GrantType;
}
const GetApplicationGrantRequest = /*@__PURE__*/ __L.at(
  __c10,
  3,
) as any as S.Schema<GetApplicationGrantRequest>;
export type URI = string;
export type RedirectUris = string[];
const RedirectUris = AccessControlAttributeValueSourceList as any as S.Schema<RedirectUris>;
export interface AuthorizationCodeGrant {
  RedirectUris?: string[];
}
const AuthorizationCodeGrant = /*@__PURE__*/ __L.at(
  __c10,
  4,
) as any as S.Schema<AuthorizationCodeGrant>;
export type TokenIssuerAudience = string;
export type TokenIssuerAudiences = string[];
const TokenIssuerAudiences =
  AccessControlAttributeValueSourceList as any as S.Schema<TokenIssuerAudiences>;
export interface AuthorizedTokenIssuer {
  TrustedTokenIssuerArn?: string;
  AuthorizedAudiences?: string[];
}
const AuthorizedTokenIssuer = /*@__PURE__*/ __L.at(
  __c10,
  5,
) as any as S.Schema<AuthorizedTokenIssuer>;
export type AuthorizedTokenIssuers = AuthorizedTokenIssuer[];
const AuthorizedTokenIssuers = /*@__PURE__*/ __L.at(__c10, 6);
export interface JwtBearerGrant {
  AuthorizedTokenIssuers?: AuthorizedTokenIssuer[];
}
const JwtBearerGrant = /*@__PURE__*/ __L.at(__c10, 7) as any as S.Schema<JwtBearerGrant>;
export interface RefreshTokenGrant {}
const RefreshTokenGrant = DeleteApplicationResponse as any as S.Schema<RefreshTokenGrant>;
export interface TokenExchangeGrant {}
const TokenExchangeGrant = DeleteApplicationResponse as any as S.Schema<TokenExchangeGrant>;
export type Grant =
  | {
      AuthorizationCode: AuthorizationCodeGrant;
      JwtBearer?: never;
      RefreshToken?: never;
      TokenExchange?: never;
    }
  | {
      AuthorizationCode?: never;
      JwtBearer: JwtBearerGrant;
      RefreshToken?: never;
      TokenExchange?: never;
    }
  | {
      AuthorizationCode?: never;
      JwtBearer?: never;
      RefreshToken: RefreshTokenGrant;
      TokenExchange?: never;
    }
  | {
      AuthorizationCode?: never;
      JwtBearer?: never;
      RefreshToken?: never;
      TokenExchange: TokenExchangeGrant;
    };
const Grant = /*@__PURE__*/ __L.at(__c11, 0);
export interface GetApplicationGrantResponse {
  Grant: Grant;
}
const GetApplicationGrantResponse = /*@__PURE__*/ __L.at(
  __c11,
  1,
) as any as S.Schema<GetApplicationGrantResponse>;
export interface GetApplicationSessionConfigurationRequest {
  ApplicationArn: string;
}
const GetApplicationSessionConfigurationRequest = /*@__PURE__*/ __L.at(
  __c11,
  2,
) as any as S.Schema<GetApplicationSessionConfigurationRequest>;
export type UserBackgroundSessionApplicationStatus = "ENABLED" | "DISABLED" | (string & {});
const UserBackgroundSessionApplicationStatus = S.String;

export interface GetApplicationSessionConfigurationResponse {
  UserBackgroundSessionApplicationStatus?: UserBackgroundSessionApplicationStatus;
}
const GetApplicationSessionConfigurationResponse = /*@__PURE__*/ __L.at(
  __c11,
  3,
) as any as S.Schema<GetApplicationSessionConfigurationResponse>;
export interface GetInlinePolicyForPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
}
const GetInlinePolicyForPermissionSetRequest = /*@__PURE__*/ __L.at(
  __c11,
  4,
) as any as S.Schema<GetInlinePolicyForPermissionSetRequest>;
export type PermissionSetPolicyDocument = string;
export interface GetInlinePolicyForPermissionSetResponse {
  InlinePolicy?: string;
}
const GetInlinePolicyForPermissionSetResponse = /*@__PURE__*/ __L.at(
  __c11,
  5,
) as any as S.Schema<GetInlinePolicyForPermissionSetResponse>;
export interface GetPermissionsBoundaryForPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
}
const GetPermissionsBoundaryForPermissionSetRequest = /*@__PURE__*/ __L.at(
  __c11,
  6,
) as any as S.Schema<GetPermissionsBoundaryForPermissionSetRequest>;
export interface PermissionsBoundary {
  CustomerManagedPolicyReference?: CustomerManagedPolicyReference;
  ManagedPolicyArn?: string;
}
const PermissionsBoundary = /*@__PURE__*/ __L.at(__c11, 7) as any as S.Schema<PermissionsBoundary>;
export interface GetPermissionsBoundaryForPermissionSetResponse {
  PermissionsBoundary?: PermissionsBoundary;
}
const GetPermissionsBoundaryForPermissionSetResponse = /*@__PURE__*/ __L.at(
  __c12,
  0,
) as any as S.Schema<GetPermissionsBoundaryForPermissionSetResponse>;
export type MaxResults = number;
export type Token = string;
export interface OperationStatusFilter {
  Status?: StatusValues;
}
const OperationStatusFilter = AddRegionResponse as any as S.Schema<OperationStatusFilter>;
export interface ListAccountAssignmentCreationStatusRequest {
  InstanceArn: string;
  MaxResults?: number;
  NextToken?: string;
  Filter?: OperationStatusFilter;
}
const ListAccountAssignmentCreationStatusRequest = /*@__PURE__*/ __L.at(
  __c12,
  1,
) as any as S.Schema<ListAccountAssignmentCreationStatusRequest>;
export interface AccountAssignmentOperationStatusMetadata {
  Status?: StatusValues;
  RequestId?: string;
  CreatedDate?: Date;
}
const AccountAssignmentOperationStatusMetadata = /*@__PURE__*/ __L.at(
  __c12,
  2,
) as any as S.Schema<AccountAssignmentOperationStatusMetadata>;
export type AccountAssignmentOperationStatusList = AccountAssignmentOperationStatusMetadata[];
const AccountAssignmentOperationStatusList = /*@__PURE__*/ __L.at(__c12, 3);
export interface ListAccountAssignmentCreationStatusResponse {
  AccountAssignmentsCreationStatus?: AccountAssignmentOperationStatusMetadata[];
  NextToken?: string;
}
const ListAccountAssignmentCreationStatusResponse = /*@__PURE__*/ __L.at(
  __c12,
  4,
) as any as S.Schema<ListAccountAssignmentCreationStatusResponse>;
export interface ListAccountAssignmentDeletionStatusRequest {
  InstanceArn: string;
  MaxResults?: number;
  NextToken?: string;
  Filter?: OperationStatusFilter;
}
const ListAccountAssignmentDeletionStatusRequest = /*@__PURE__*/ __L.at(
  __c12,
  5,
) as any as S.Schema<ListAccountAssignmentDeletionStatusRequest>;
export interface ListAccountAssignmentDeletionStatusResponse {
  AccountAssignmentsDeletionStatus?: AccountAssignmentOperationStatusMetadata[];
  NextToken?: string;
}
const ListAccountAssignmentDeletionStatusResponse = /*@__PURE__*/ __L.at(
  __c12,
  6,
) as any as S.Schema<ListAccountAssignmentDeletionStatusResponse>;
export interface ListAccountAssignmentsRequest {
  InstanceArn: string;
  AccountId: string;
  PermissionSetArn: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListAccountAssignmentsRequest = /*@__PURE__*/ __L.at(
  __c12,
  7,
) as any as S.Schema<ListAccountAssignmentsRequest>;
export interface AccountAssignment {
  AccountId?: string;
  PermissionSetArn?: string;
  PrincipalType?: PrincipalType;
  PrincipalId?: string;
}
const AccountAssignment = /*@__PURE__*/ __L.at(__c13, 0) as any as S.Schema<AccountAssignment>;
export type AccountAssignmentList = AccountAssignment[];
const AccountAssignmentList = /*@__PURE__*/ __L.at(__c13, 1);
export interface ListAccountAssignmentsResponse {
  AccountAssignments?: AccountAssignment[];
  NextToken?: string;
}
const ListAccountAssignmentsResponse = /*@__PURE__*/ __L.at(
  __c13,
  2,
) as any as S.Schema<ListAccountAssignmentsResponse>;
export interface ListAccountAssignmentsFilter {
  AccountId?: string;
}
const ListAccountAssignmentsFilter = /*@__PURE__*/ __L.at(
  __c13,
  3,
) as any as S.Schema<ListAccountAssignmentsFilter>;
export interface ListAccountAssignmentsForPrincipalRequest {
  InstanceArn: string;
  PrincipalId: string;
  PrincipalType: PrincipalType;
  Filter?: ListAccountAssignmentsFilter;
  NextToken?: string;
  MaxResults?: number;
}
const ListAccountAssignmentsForPrincipalRequest = /*@__PURE__*/ __L.at(
  __c13,
  4,
) as any as S.Schema<ListAccountAssignmentsForPrincipalRequest>;
export interface AccountAssignmentForPrincipal {
  AccountId?: string;
  PermissionSetArn?: string;
  PrincipalId?: string;
  PrincipalType?: PrincipalType;
}
const AccountAssignmentForPrincipal = /*@__PURE__*/ __L.at(
  __c13,
  5,
) as any as S.Schema<AccountAssignmentForPrincipal>;
export type AccountAssignmentListForPrincipal = AccountAssignmentForPrincipal[];
const AccountAssignmentListForPrincipal = /*@__PURE__*/ __L.at(__c13, 6);
export interface ListAccountAssignmentsForPrincipalResponse {
  AccountAssignments?: AccountAssignmentForPrincipal[];
  NextToken?: string;
}
const ListAccountAssignmentsForPrincipalResponse = /*@__PURE__*/ __L.at(
  __c13,
  7,
) as any as S.Schema<ListAccountAssignmentsForPrincipalResponse>;
export type ProvisioningStatus =
  | "LATEST_PERMISSION_SET_PROVISIONED"
  | "LATEST_PERMISSION_SET_NOT_PROVISIONED"
  | (string & {});
const ProvisioningStatus = S.String;

export interface ListAccountsForProvisionedPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  ProvisioningStatus?: ProvisioningStatus;
  MaxResults?: number;
  NextToken?: string;
}
const ListAccountsForProvisionedPermissionSetRequest = /*@__PURE__*/ __L.at(
  __c14,
  0,
) as any as S.Schema<ListAccountsForProvisionedPermissionSetRequest>;
export type AccountList = string[];
const AccountList = AccessControlAttributeValueSourceList as any as S.Schema<AccountList>;
export interface ListAccountsForProvisionedPermissionSetResponse {
  AccountIds?: string[];
  NextToken?: string;
}
const ListAccountsForProvisionedPermissionSetResponse = /*@__PURE__*/ __L.at(
  __c14,
  1,
) as any as S.Schema<ListAccountsForProvisionedPermissionSetResponse>;
export interface ListApplicationAccessScopesRequest {
  ApplicationArn: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListApplicationAccessScopesRequest = /*@__PURE__*/ __L.at(
  __c14,
  2,
) as any as S.Schema<ListApplicationAccessScopesRequest>;
export interface ScopeDetails {
  Scope: string;
  AuthorizedTargets?: string[];
}
const ScopeDetails = /*@__PURE__*/ __L.at(__c14, 3) as any as S.Schema<ScopeDetails>;
export type Scopes = ScopeDetails[];
const Scopes = /*@__PURE__*/ __L.at(__c14, 4);
export interface ListApplicationAccessScopesResponse {
  Scopes: ScopeDetails[];
  NextToken?: string;
}
const ListApplicationAccessScopesResponse = /*@__PURE__*/ __L.at(
  __c14,
  5,
) as any as S.Schema<ListApplicationAccessScopesResponse>;
export interface ListApplicationAssignmentsRequest {
  ApplicationArn: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListApplicationAssignmentsRequest = /*@__PURE__*/ __L.at(
  __c14,
  6,
) as any as S.Schema<ListApplicationAssignmentsRequest>;
export interface ApplicationAssignment {
  ApplicationArn: string;
  PrincipalId: string;
  PrincipalType: PrincipalType;
}
const ApplicationAssignment = /*@__PURE__*/ __L.at(
  __c14,
  7,
) as any as S.Schema<ApplicationAssignment>;
export type ApplicationAssignmentsList = ApplicationAssignment[];
const ApplicationAssignmentsList = /*@__PURE__*/ __L.at(__c15, 0);
export interface ListApplicationAssignmentsResponse {
  ApplicationAssignments?: ApplicationAssignment[];
  NextToken?: string;
}
const ListApplicationAssignmentsResponse = /*@__PURE__*/ __L.at(
  __c15,
  1,
) as any as S.Schema<ListApplicationAssignmentsResponse>;
export interface ListApplicationAssignmentsFilter {
  ApplicationArn?: string;
}
const ListApplicationAssignmentsFilter = /*@__PURE__*/ __L.at(
  __c15,
  2,
) as any as S.Schema<ListApplicationAssignmentsFilter>;
export interface ListApplicationAssignmentsForPrincipalRequest {
  InstanceArn: string;
  PrincipalId: string;
  PrincipalType: PrincipalType;
  Filter?: ListApplicationAssignmentsFilter;
  NextToken?: string;
  MaxResults?: number;
}
const ListApplicationAssignmentsForPrincipalRequest = /*@__PURE__*/ __L.at(
  __c15,
  3,
) as any as S.Schema<ListApplicationAssignmentsForPrincipalRequest>;
export interface ApplicationAssignmentForPrincipal {
  ApplicationArn?: string;
  PrincipalId?: string;
  PrincipalType?: PrincipalType;
}
const ApplicationAssignmentForPrincipal = /*@__PURE__*/ __L.at(
  __c15,
  4,
) as any as S.Schema<ApplicationAssignmentForPrincipal>;
export type ApplicationAssignmentListForPrincipal = ApplicationAssignmentForPrincipal[];
const ApplicationAssignmentListForPrincipal = /*@__PURE__*/ __L.at(__c15, 5);
export interface ListApplicationAssignmentsForPrincipalResponse {
  ApplicationAssignments?: ApplicationAssignmentForPrincipal[];
  NextToken?: string;
}
const ListApplicationAssignmentsForPrincipalResponse = /*@__PURE__*/ __L.at(
  __c15,
  6,
) as any as S.Schema<ListApplicationAssignmentsForPrincipalResponse>;
export interface ListApplicationAuthenticationMethodsRequest {
  ApplicationArn: string;
  NextToken?: string;
}
const ListApplicationAuthenticationMethodsRequest = /*@__PURE__*/ __L.at(
  __c15,
  7,
) as any as S.Schema<ListApplicationAuthenticationMethodsRequest>;
export interface AuthenticationMethodItem {
  AuthenticationMethodType?: AuthenticationMethodType;
  AuthenticationMethod?: AuthenticationMethod;
}
const AuthenticationMethodItem = /*@__PURE__*/ __L.at(
  __c16,
  0,
) as any as S.Schema<AuthenticationMethodItem>;
export type AuthenticationMethods = AuthenticationMethodItem[];
const AuthenticationMethods = /*@__PURE__*/ __L.at(__c16, 1);
export interface ListApplicationAuthenticationMethodsResponse {
  AuthenticationMethods?: AuthenticationMethodItem[];
  NextToken?: string;
}
const ListApplicationAuthenticationMethodsResponse = /*@__PURE__*/ __L.at(
  __c16,
  2,
) as any as S.Schema<ListApplicationAuthenticationMethodsResponse>;
export interface ListApplicationGrantsRequest {
  ApplicationArn: string;
  NextToken?: string;
}
const ListApplicationGrantsRequest = /*@__PURE__*/ __L.at(
  __c16,
  3,
) as any as S.Schema<ListApplicationGrantsRequest>;
export interface GrantItem {
  GrantType: GrantType;
  Grant: Grant;
}
const GrantItem = /*@__PURE__*/ __L.at(__c16, 4) as any as S.Schema<GrantItem>;
export type Grants = GrantItem[];
const Grants = /*@__PURE__*/ __L.at(__c16, 5);
export interface ListApplicationGrantsResponse {
  Grants: GrantItem[];
  NextToken?: string;
}
const ListApplicationGrantsResponse = /*@__PURE__*/ __L.at(
  __c16,
  6,
) as any as S.Schema<ListApplicationGrantsResponse>;
export interface ListApplicationProvidersRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListApplicationProvidersRequest = /*@__PURE__*/ __L.at(
  __c16,
  7,
) as any as S.Schema<ListApplicationProvidersRequest>;
export interface ApplicationProvider {
  ApplicationProviderArn: string;
  FederationProtocol?: FederationProtocol;
  DisplayData?: DisplayData;
  ResourceServerConfig?: ResourceServerConfig;
}
const ApplicationProvider = /*@__PURE__*/ __L.at(__c17, 0) as any as S.Schema<ApplicationProvider>;
export type ApplicationProviderList = ApplicationProvider[];
const ApplicationProviderList = /*@__PURE__*/ __L.at(__c17, 1);
export interface ListApplicationProvidersResponse {
  ApplicationProviders?: ApplicationProvider[];
  NextToken?: string;
}
const ListApplicationProvidersResponse = /*@__PURE__*/ __L.at(
  __c17,
  2,
) as any as S.Schema<ListApplicationProvidersResponse>;
export interface ListApplicationsFilter {
  ApplicationAccount?: string;
  ApplicationProvider?: string;
}
const ListApplicationsFilter = /*@__PURE__*/ __L.at(
  __c17,
  3,
) as any as S.Schema<ListApplicationsFilter>;
export interface ListApplicationsRequest {
  InstanceArn: string;
  MaxResults?: number;
  NextToken?: string;
  Filter?: ListApplicationsFilter;
}
const ListApplicationsRequest = /*@__PURE__*/ __L.at(
  __c17,
  4,
) as any as S.Schema<ListApplicationsRequest>;
export interface Application {
  ApplicationArn?: string;
  ApplicationProviderArn?: string;
  Name?: string;
  ApplicationAccount?: string;
  InstanceArn?: string;
  IdentityStoreArn?: string;
  Status?: ApplicationStatus;
  PortalOptions?: PortalOptions;
  Description?: string;
  CreatedDate?: Date;
  CreatedFrom?: string;
}
const Application = /*@__PURE__*/ __L.at(__c17, 5) as any as S.Schema<Application>;
export type ApplicationList = Application[];
const ApplicationList = /*@__PURE__*/ __L.at(__c17, 6);
export interface ListApplicationsResponse {
  Applications?: Application[];
  NextToken?: string;
}
const ListApplicationsResponse = /*@__PURE__*/ __L.at(
  __c17,
  7,
) as any as S.Schema<ListApplicationsResponse>;
export interface ListCustomerManagedPolicyReferencesInPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListCustomerManagedPolicyReferencesInPermissionSetRequest = /*@__PURE__*/ __L.at(
  __c18,
  0,
) as any as S.Schema<ListCustomerManagedPolicyReferencesInPermissionSetRequest>;
export type CustomerManagedPolicyReferenceList = CustomerManagedPolicyReference[];
const CustomerManagedPolicyReferenceList = /*@__PURE__*/ __L.at(__c18, 1);
export interface ListCustomerManagedPolicyReferencesInPermissionSetResponse {
  CustomerManagedPolicyReferences?: CustomerManagedPolicyReference[];
  NextToken?: string;
}
const ListCustomerManagedPolicyReferencesInPermissionSetResponse = /*@__PURE__*/ __L.at(
  __c18,
  2,
) as any as S.Schema<ListCustomerManagedPolicyReferencesInPermissionSetResponse>;
export interface ListInstancesRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListInstancesRequest = /*@__PURE__*/ __L.at(
  __c18,
  3,
) as any as S.Schema<ListInstancesRequest>;
export interface InstanceMetadata {
  InstanceArn?: string;
  IdentityStoreId?: string;
  IdentityStoreArn?: string;
  OwnerAccountId?: string;
  Name?: string;
  CreatedDate?: Date;
  Status?: InstanceStatus;
  StatusReason?: string;
  PrimaryRegion?: string;
  Regions?: RegionMetadata[];
}
const InstanceMetadata = /*@__PURE__*/ __L.at(__c18, 4) as any as S.Schema<InstanceMetadata>;
export type InstanceList = InstanceMetadata[];
const InstanceList = /*@__PURE__*/ __L.at(__c18, 5);
export interface ListInstancesResponse {
  Instances?: InstanceMetadata[];
  NextToken?: string;
}
const ListInstancesResponse = /*@__PURE__*/ __L.at(
  __c18,
  6,
) as any as S.Schema<ListInstancesResponse>;
export interface ListManagedPoliciesInPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListManagedPoliciesInPermissionSetRequest = /*@__PURE__*/ __L.at(
  __c18,
  7,
) as any as S.Schema<ListManagedPoliciesInPermissionSetRequest>;
export interface AttachedManagedPolicy {
  Name?: string;
  Arn?: string;
}
const AttachedManagedPolicy = /*@__PURE__*/ __L.at(
  __c19,
  0,
) as any as S.Schema<AttachedManagedPolicy>;
export type AttachedManagedPolicyList = AttachedManagedPolicy[];
const AttachedManagedPolicyList = /*@__PURE__*/ __L.at(__c19, 1);
export interface ListManagedPoliciesInPermissionSetResponse {
  AttachedManagedPolicies?: AttachedManagedPolicy[];
  NextToken?: string;
}
const ListManagedPoliciesInPermissionSetResponse = /*@__PURE__*/ __L.at(
  __c19,
  2,
) as any as S.Schema<ListManagedPoliciesInPermissionSetResponse>;
export interface ListPermissionSetProvisioningStatusRequest {
  InstanceArn: string;
  MaxResults?: number;
  NextToken?: string;
  Filter?: OperationStatusFilter;
}
const ListPermissionSetProvisioningStatusRequest = /*@__PURE__*/ __L.at(
  __c19,
  3,
) as any as S.Schema<ListPermissionSetProvisioningStatusRequest>;
export interface PermissionSetProvisioningStatusMetadata {
  Status?: StatusValues;
  RequestId?: string;
  CreatedDate?: Date;
}
export type PermissionSetProvisioningStatusList = PermissionSetProvisioningStatusMetadata[];
const PermissionSetProvisioningStatusList =
  AccountAssignmentOperationStatusList as any as S.Schema<PermissionSetProvisioningStatusList>;
export interface ListPermissionSetProvisioningStatusResponse {
  PermissionSetsProvisioningStatus?: PermissionSetProvisioningStatusMetadata[];
  NextToken?: string;
}
const ListPermissionSetProvisioningStatusResponse = /*@__PURE__*/ __L.at(
  __c19,
  4,
) as any as S.Schema<ListPermissionSetProvisioningStatusResponse>;
export interface ListPermissionSetsRequest {
  InstanceArn: string;
  NextToken?: string;
  MaxResults?: number;
}
const ListPermissionSetsRequest = /*@__PURE__*/ __L.at(
  __c19,
  5,
) as any as S.Schema<ListPermissionSetsRequest>;
export type PermissionSetList = string[];
const PermissionSetList =
  AccessControlAttributeValueSourceList as any as S.Schema<PermissionSetList>;
export interface ListPermissionSetsResponse {
  PermissionSets?: string[];
  NextToken?: string;
}
const ListPermissionSetsResponse = /*@__PURE__*/ __L.at(
  __c19,
  6,
) as any as S.Schema<ListPermissionSetsResponse>;
export interface ListPermissionSetsProvisionedToAccountRequest {
  InstanceArn: string;
  AccountId: string;
  ProvisioningStatus?: ProvisioningStatus;
  MaxResults?: number;
  NextToken?: string;
}
const ListPermissionSetsProvisionedToAccountRequest = /*@__PURE__*/ __L.at(
  __c19,
  7,
) as any as S.Schema<ListPermissionSetsProvisionedToAccountRequest>;
export interface ListPermissionSetsProvisionedToAccountResponse {
  NextToken?: string;
  PermissionSets?: string[];
}
const ListPermissionSetsProvisionedToAccountResponse = /*@__PURE__*/ __L.at(
  __c20,
  0,
) as any as S.Schema<ListPermissionSetsProvisionedToAccountResponse>;
export interface ListRegionsRequest {
  InstanceArn: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListRegionsRequest = /*@__PURE__*/ __L.at(__c20, 1) as any as S.Schema<ListRegionsRequest>;
export interface ListRegionsResponse {
  Regions?: RegionMetadata[];
  NextToken?: string;
}
const ListRegionsResponse = /*@__PURE__*/ __L.at(__c20, 2) as any as S.Schema<ListRegionsResponse>;
export type TaggableResourceArn = string;
export interface ListTagsForResourceRequest {
  InstanceArn?: string;
  ResourceArn: string;
  NextToken?: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c20,
  3,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  Tags?: Tag[];
  NextToken?: string;
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c20,
  4,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListTrustedTokenIssuersRequest {
  InstanceArn: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListTrustedTokenIssuersRequest = /*@__PURE__*/ __L.at(
  __c20,
  5,
) as any as S.Schema<ListTrustedTokenIssuersRequest>;
export interface TrustedTokenIssuerMetadata {
  TrustedTokenIssuerArn?: string;
  Name?: string;
  TrustedTokenIssuerType?: TrustedTokenIssuerType;
}
const TrustedTokenIssuerMetadata = /*@__PURE__*/ __L.at(
  __c20,
  6,
) as any as S.Schema<TrustedTokenIssuerMetadata>;
export type TrustedTokenIssuerList = TrustedTokenIssuerMetadata[];
const TrustedTokenIssuerList = /*@__PURE__*/ __L.at(__c20, 7);
export interface ListTrustedTokenIssuersResponse {
  TrustedTokenIssuers?: TrustedTokenIssuerMetadata[];
  NextToken?: string;
}
const ListTrustedTokenIssuersResponse = /*@__PURE__*/ __L.at(
  __c21,
  0,
) as any as S.Schema<ListTrustedTokenIssuersResponse>;
export type ProvisionTargetType = "AWS_ACCOUNT" | "ALL_PROVISIONED_ACCOUNTS" | (string & {});
const ProvisionTargetType = S.String;

export interface ProvisionPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  TargetId?: string;
  TargetType: ProvisionTargetType;
}
const ProvisionPermissionSetRequest = /*@__PURE__*/ __L.at(
  __c21,
  1,
) as any as S.Schema<ProvisionPermissionSetRequest>;
export interface ProvisionPermissionSetResponse {
  PermissionSetProvisioningStatus?: PermissionSetProvisioningStatus;
}
const ProvisionPermissionSetResponse =
  DescribePermissionSetProvisioningStatusResponse as any as S.Schema<ProvisionPermissionSetResponse>;
export interface PutApplicationAccessScopeRequest {
  Scope: string;
  AuthorizedTargets?: string[];
  ApplicationArn: string;
}
const PutApplicationAccessScopeRequest = /*@__PURE__*/ __L.at(
  __c21,
  2,
) as any as S.Schema<PutApplicationAccessScopeRequest>;
export interface PutApplicationAccessScopeResponse {}
const PutApplicationAccessScopeResponse =
  AttachManagedPolicyToPermissionSetResponse as any as S.Schema<PutApplicationAccessScopeResponse>;
export interface PutApplicationAssignmentConfigurationRequest {
  ApplicationArn: string;
  AssignmentRequired: boolean;
}
const PutApplicationAssignmentConfigurationRequest = /*@__PURE__*/ __L.at(
  __c21,
  3,
) as any as S.Schema<PutApplicationAssignmentConfigurationRequest>;
export interface PutApplicationAssignmentConfigurationResponse {}
const PutApplicationAssignmentConfigurationResponse =
  AttachManagedPolicyToPermissionSetResponse as any as S.Schema<PutApplicationAssignmentConfigurationResponse>;
export interface PutApplicationAuthenticationMethodRequest {
  ApplicationArn: string;
  AuthenticationMethodType: AuthenticationMethodType;
  AuthenticationMethod: AuthenticationMethod;
}
const PutApplicationAuthenticationMethodRequest = /*@__PURE__*/ __L.at(
  __c21,
  4,
) as any as S.Schema<PutApplicationAuthenticationMethodRequest>;
export interface PutApplicationAuthenticationMethodResponse {}
const PutApplicationAuthenticationMethodResponse =
  AttachManagedPolicyToPermissionSetResponse as any as S.Schema<PutApplicationAuthenticationMethodResponse>;
export interface PutApplicationGrantRequest {
  ApplicationArn: string;
  GrantType: GrantType;
  Grant: Grant;
}
const PutApplicationGrantRequest = /*@__PURE__*/ __L.at(
  __c21,
  5,
) as any as S.Schema<PutApplicationGrantRequest>;
export interface PutApplicationGrantResponse {}
const PutApplicationGrantResponse =
  DeleteApplicationResponse as any as S.Schema<PutApplicationGrantResponse>;
export interface PutApplicationSessionConfigurationRequest {
  ApplicationArn: string;
  UserBackgroundSessionApplicationStatus?: UserBackgroundSessionApplicationStatus;
}
const PutApplicationSessionConfigurationRequest = /*@__PURE__*/ __L.at(
  __c21,
  6,
) as any as S.Schema<PutApplicationSessionConfigurationRequest>;
export interface PutApplicationSessionConfigurationResponse {}
const PutApplicationSessionConfigurationResponse =
  AttachManagedPolicyToPermissionSetResponse as any as S.Schema<PutApplicationSessionConfigurationResponse>;
export interface PutInlinePolicyToPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  InlinePolicy: string;
}
const PutInlinePolicyToPermissionSetRequest = /*@__PURE__*/ __L.at(
  __c21,
  7,
) as any as S.Schema<PutInlinePolicyToPermissionSetRequest>;
export interface PutInlinePolicyToPermissionSetResponse {}
const PutInlinePolicyToPermissionSetResponse =
  AttachManagedPolicyToPermissionSetResponse as any as S.Schema<PutInlinePolicyToPermissionSetResponse>;
export interface PutPermissionsBoundaryToPermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  PermissionsBoundary: PermissionsBoundary;
}
const PutPermissionsBoundaryToPermissionSetRequest = /*@__PURE__*/ __L.at(
  __c22,
  0,
) as any as S.Schema<PutPermissionsBoundaryToPermissionSetRequest>;
export interface PutPermissionsBoundaryToPermissionSetResponse {}
const PutPermissionsBoundaryToPermissionSetResponse =
  AttachManagedPolicyToPermissionSetResponse as any as S.Schema<PutPermissionsBoundaryToPermissionSetResponse>;
export interface RemoveRegionRequest {
  InstanceArn: string;
  RegionName: string;
}
const RemoveRegionRequest = /*@__PURE__*/ __L.at(__c22, 1) as any as S.Schema<RemoveRegionRequest>;
export interface RemoveRegionResponse {
  Status?: RegionStatus;
}
const RemoveRegionResponse = AddRegionResponse as any as S.Schema<RemoveRegionResponse>;
export interface TagResourceRequest {
  InstanceArn?: string;
  ResourceArn: string;
  Tags: Tag[];
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c22, 2) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteApplicationResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = AccessControlAttributeValueSourceList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  InstanceArn?: string;
  ResourceArn: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(
  __c22,
  3,
) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteApplicationResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateApplicationPortalOptions {
  SignInOptions?: SignInOptions;
}
const UpdateApplicationPortalOptions = /*@__PURE__*/ __L.at(
  __c22,
  4,
) as any as S.Schema<UpdateApplicationPortalOptions>;
export interface UpdateApplicationRequest {
  ApplicationArn: string;
  Name?: string;
  Description?: string;
  Status?: ApplicationStatus;
  PortalOptions?: UpdateApplicationPortalOptions;
}
const UpdateApplicationRequest = /*@__PURE__*/ __L.at(
  __c22,
  5,
) as any as S.Schema<UpdateApplicationRequest>;
export interface UpdateApplicationResponse {}
const UpdateApplicationResponse =
  DeleteApplicationResponse as any as S.Schema<UpdateApplicationResponse>;
export interface EncryptionConfiguration {
  KeyType: KmsKeyType;
  KmsKeyArn?: string;
}
const EncryptionConfiguration = /*@__PURE__*/ __L.at(
  __c22,
  6,
) as any as S.Schema<EncryptionConfiguration>;
export interface UpdateInstanceRequest {
  Name?: string;
  InstanceArn: string;
  EncryptionConfiguration?: EncryptionConfiguration;
  PermissionSetsEnabled?: boolean;
}
const UpdateInstanceRequest = /*@__PURE__*/ __L.at(
  __c22,
  7,
) as any as S.Schema<UpdateInstanceRequest>;
export interface UpdateInstanceResponse {}
const UpdateInstanceResponse = DeleteApplicationResponse as any as S.Schema<UpdateInstanceResponse>;
export interface UpdateInstanceAccessControlAttributeConfigurationRequest {
  InstanceArn: string;
  InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration;
}
const UpdateInstanceAccessControlAttributeConfigurationRequest = /*@__PURE__*/ __L.at(
  __c23,
  0,
) as any as S.Schema<UpdateInstanceAccessControlAttributeConfigurationRequest>;
export interface UpdateInstanceAccessControlAttributeConfigurationResponse {}
const UpdateInstanceAccessControlAttributeConfigurationResponse =
  AttachCustomerManagedPolicyReferenceToPermissionSetResponse as any as S.Schema<UpdateInstanceAccessControlAttributeConfigurationResponse>;
export interface UpdatePermissionSetRequest {
  InstanceArn: string;
  PermissionSetArn: string;
  Description?: string;
  SessionDuration?: string;
  RelayState?: string;
}
const UpdatePermissionSetRequest = /*@__PURE__*/ __L.at(
  __c23,
  1,
) as any as S.Schema<UpdatePermissionSetRequest>;
export interface UpdatePermissionSetResponse {}
const UpdatePermissionSetResponse =
  DeleteApplicationResponse as any as S.Schema<UpdatePermissionSetResponse>;
export interface OidcJwtUpdateConfiguration {
  ClaimAttributePath?: string;
  IdentityStoreAttributePath?: string;
  JwksRetrievalOption?: JwksRetrievalOption;
}
const OidcJwtUpdateConfiguration = /*@__PURE__*/ __L.at(
  __c23,
  2,
) as any as S.Schema<OidcJwtUpdateConfiguration>;
export type TrustedTokenIssuerUpdateConfiguration = {
  OidcJwtConfiguration: OidcJwtUpdateConfiguration;
};
const TrustedTokenIssuerUpdateConfiguration = /*@__PURE__*/ __L.at(__c23, 3);
export interface UpdateTrustedTokenIssuerRequest {
  TrustedTokenIssuerArn: string;
  Name?: string;
  TrustedTokenIssuerConfiguration?: TrustedTokenIssuerUpdateConfiguration;
}
const UpdateTrustedTokenIssuerRequest = /*@__PURE__*/ __L.at(
  __c23,
  4,
) as any as S.Schema<UpdateTrustedTokenIssuerRequest>;
export interface UpdateTrustedTokenIssuerResponse {}
const UpdateTrustedTokenIssuerResponse =
  AttachManagedPolicyToPermissionSetResponse as any as S.Schema<UpdateTrustedTokenIssuerResponse>;
export type AccessDeniedExceptionMessage = string;
export type AccessDeniedExceptionReason = "KMS_AccessDeniedException" | (string & {});
const AccessDeniedExceptionReason = S.String;

export type ConflictExceptionMessage = string;
export type InternalFailureMessage = string;
export type ServiceQuotaExceededMessage = string;
export type ThrottlingExceptionMessage = string;
export type ThrottlingExceptionReason = "KMS_ThrottlingException" | (string & {});
const ThrottlingExceptionReason = S.String;

export type ValidationExceptionMessage = string;
export type ValidationExceptionReason =
  | "KMS_InvalidKeyUsageException"
  | "KMS_InvalidStateException"
  | "KMS_DisabledException"
  | (string & {});
const ValidationExceptionReason = S.String;

export type ResourceNotFoundMessage = string;
export type ResourceNotFoundExceptionReason = "KMS_NotFoundException" | (string & {});
const ResourceNotFoundExceptionReason = S.String;

export type AddRegionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds a Region to an IAM Identity Center instance. This operation initiates an asynchronous workflow to replicate the IAM Identity Center instance to the target Region. The Region status is set to ADDING at first and changes to ACTIVE when the workflow completes.
 *
 * To use this operation, your IAM Identity Center instance and the target Region must meet the requirements described in the IAM Identity Center User Guide.
 *
 * The following actions are related to `AddRegion`:
 *
 * - RemoveRegion
 *
 * - DescribeRegion
 *
 * - ListRegions
 */
export const addRegion: API.OperationMethod<
  AddRegionRequest,
  AddRegionResponse,
  AddRegionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AddRegionRequest,
  output: AddRegionResponse,
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
  operationName: "AddRegion",
}));

export type AttachCustomerManagedPolicyReferenceToPermissionSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Attaches the specified customer managed policy to the specified PermissionSet.
 */
export const attachCustomerManagedPolicyReferenceToPermissionSet: API.OperationMethod<
  AttachCustomerManagedPolicyReferenceToPermissionSetRequest,
  AttachCustomerManagedPolicyReferenceToPermissionSetResponse,
  AttachCustomerManagedPolicyReferenceToPermissionSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AttachCustomerManagedPolicyReferenceToPermissionSetRequest,
  output: AttachCustomerManagedPolicyReferenceToPermissionSetResponse,
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
  operationName: "AttachCustomerManagedPolicyReferenceToPermissionSet",
}));

export type AttachManagedPolicyToPermissionSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Attaches an Amazon Web Services managed policy ARN to a permission set.
 *
 * If the permission set is already referenced by one or more account assignments, you will need to call ` ProvisionPermissionSet ` after this operation. Calling `ProvisionPermissionSet` applies the corresponding IAM policy updates to all assigned accounts.
 */
export const attachManagedPolicyToPermissionSet: API.OperationMethod<
  AttachManagedPolicyToPermissionSetRequest,
  AttachManagedPolicyToPermissionSetResponse,
  AttachManagedPolicyToPermissionSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AttachManagedPolicyToPermissionSetRequest,
  output: AttachManagedPolicyToPermissionSetResponse,
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
  operationName: "AttachManagedPolicyToPermissionSet",
}));

export type CreateAccountAssignmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Assigns access to a principal for a specified Amazon Web Services account using a specified permission set.
 *
 * The term *principal* here refers to a user or group that is defined in IAM Identity Center.
 *
 * As part of a successful `CreateAccountAssignment` call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you must call ` ProvisionPermissionSet ` to make these updates.
 *
 * After a successful response, call `DescribeAccountAssignmentCreationStatus` to describe the status of an assignment creation request.
 */
export const createAccountAssignment: API.OperationMethod<
  CreateAccountAssignmentRequest,
  CreateAccountAssignmentResponse,
  CreateAccountAssignmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateAccountAssignmentRequest,
  output: CreateAccountAssignmentResponse,
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
  operationName: "CreateAccountAssignment",
}));

export type CreateApplicationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an OAuth 2.0 customer managed application in IAM Identity Center for the given application provider.
 *
 * This API does not support creating SAML 2.0 customer managed applications or Amazon Web Services managed applications. To learn how to create an Amazon Web Services managed application, see the application user guide. You can create a SAML 2.0 customer managed application in the Amazon Web Services Management Console only. See Setting up customer managed SAML 2.0 applications. For more information on these application types, see Amazon Web Services managed applications.
 */
export const createApplication: API.OperationMethod<
  CreateApplicationRequest,
  CreateApplicationResponse,
  CreateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateApplicationRequest,
  output: CreateApplicationResponse,
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
  operationName: "CreateApplication",
}));

export type CreateApplicationAssignmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Grant application access to a user or group.
 */
export const createApplicationAssignment: API.OperationMethod<
  CreateApplicationAssignmentRequest,
  CreateApplicationAssignmentResponse,
  CreateApplicationAssignmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateApplicationAssignmentRequest,
  output: CreateApplicationAssignmentResponse,
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
  operationName: "CreateApplicationAssignment",
}));

export type CreateInstanceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an instance of IAM Identity Center for a standalone Amazon Web Services account that is not managed by Organizations or a member Amazon Web Services account in an organization. You can create only one instance per account and across all Amazon Web Services Regions.
 *
 * The CreateInstance request is rejected if the following apply:
 *
 * - The instance is created within the organization management account.
 *
 * - An instance already exists in the same account.
 */
export const createInstance: API.OperationMethod<
  CreateInstanceRequest,
  CreateInstanceResponse,
  CreateInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateInstanceRequest,
  output: CreateInstanceResponse,
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
  operationName: "CreateInstance",
}));

export type CreateInstanceAccessControlAttributeConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Enables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see Attribute-Based Access Control in the *IAM Identity Center User Guide*.
 *
 * After a successful response, call `DescribeInstanceAccessControlAttributeConfiguration` to validate that `InstanceAccessControlAttributeConfiguration` was created.
 */
export const createInstanceAccessControlAttributeConfiguration: API.OperationMethod<
  CreateInstanceAccessControlAttributeConfigurationRequest,
  CreateInstanceAccessControlAttributeConfigurationResponse,
  CreateInstanceAccessControlAttributeConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateInstanceAccessControlAttributeConfigurationRequest,
  output: CreateInstanceAccessControlAttributeConfigurationResponse,
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
  operationName: "CreateInstanceAccessControlAttributeConfiguration",
}));

export type CreatePermissionSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a permission set within a specified IAM Identity Center instance.
 *
 * To grant users and groups access to Amazon Web Services account resources, use ` CreateAccountAssignment `.
 */
export const createPermissionSet: API.OperationMethod<
  CreatePermissionSetRequest,
  CreatePermissionSetResponse,
  CreatePermissionSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreatePermissionSetRequest,
  output: CreatePermissionSetResponse,
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
  operationName: "CreatePermissionSet",
}));

export type CreateTrustedTokenIssuerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a connection to a trusted token issuer in an instance of IAM Identity Center. A trusted token issuer enables trusted identity propagation to be used with applications that authenticate outside of Amazon Web Services.
 *
 * This trusted token issuer describes an external identity provider (IdP) that can generate claims or assertions in the form of access tokens for a user. Applications enabled for IAM Identity Center can use these tokens for authentication.
 */
export const createTrustedTokenIssuer: API.OperationMethod<
  CreateTrustedTokenIssuerRequest,
  CreateTrustedTokenIssuerResponse,
  CreateTrustedTokenIssuerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTrustedTokenIssuerRequest,
  output: CreateTrustedTokenIssuerResponse,
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
  operationName: "CreateTrustedTokenIssuer",
}));

export type DeleteAccountAssignmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a principal's access from a specified Amazon Web Services account using a specified permission set.
 *
 * After a successful response, call `DescribeAccountAssignmentDeletionStatus` to describe the status of an assignment deletion request.
 */
export const deleteAccountAssignment: API.OperationMethod<
  DeleteAccountAssignmentRequest,
  DeleteAccountAssignmentResponse,
  DeleteAccountAssignmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAccountAssignmentRequest,
  output: DeleteAccountAssignmentResponse,
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
  operationName: "DeleteAccountAssignment",
}));

export type DeleteApplicationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the association with the application. The connected service resource still exists.
 */
export const deleteApplication: API.OperationMethod<
  DeleteApplicationRequest,
  DeleteApplicationResponse,
  DeleteApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteApplicationRequest,
  output: DeleteApplicationResponse,
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
  operationName: "DeleteApplication",
}));

export type DeleteApplicationAccessScopeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an IAM Identity Center access scope from an application.
 */
export const deleteApplicationAccessScope: API.OperationMethod<
  DeleteApplicationAccessScopeRequest,
  DeleteApplicationAccessScopeResponse,
  DeleteApplicationAccessScopeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteApplicationAccessScopeRequest,
  output: DeleteApplicationAccessScopeResponse,
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
  operationName: "DeleteApplicationAccessScope",
}));

export type DeleteApplicationAssignmentError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Revoke application access to an application by deleting application assignments for a user or group.
 */
export const deleteApplicationAssignment: API.OperationMethod<
  DeleteApplicationAssignmentRequest,
  DeleteApplicationAssignmentResponse,
  DeleteApplicationAssignmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteApplicationAssignmentRequest,
  output: DeleteApplicationAssignmentResponse,
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
  operationName: "DeleteApplicationAssignment",
}));

export type DeleteApplicationAuthenticationMethodError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes an authentication method from an application.
 */
export const deleteApplicationAuthenticationMethod: API.OperationMethod<
  DeleteApplicationAuthenticationMethodRequest,
  DeleteApplicationAuthenticationMethodResponse,
  DeleteApplicationAuthenticationMethodError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteApplicationAuthenticationMethodRequest,
  output: DeleteApplicationAuthenticationMethodResponse,
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
  operationName: "DeleteApplicationAuthenticationMethod",
}));

export type DeleteApplicationGrantError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a grant from an application.
 */
export const deleteApplicationGrant: API.OperationMethod<
  DeleteApplicationGrantRequest,
  DeleteApplicationGrantResponse,
  DeleteApplicationGrantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteApplicationGrantRequest,
  output: DeleteApplicationGrantResponse,
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
  operationName: "DeleteApplicationGrant",
}));

export type DeleteInlinePolicyFromPermissionSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the inline policy from a specified permission set.
 */
export const deleteInlinePolicyFromPermissionSet: API.OperationMethod<
  DeleteInlinePolicyFromPermissionSetRequest,
  DeleteInlinePolicyFromPermissionSetResponse,
  DeleteInlinePolicyFromPermissionSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteInlinePolicyFromPermissionSetRequest,
  output: DeleteInlinePolicyFromPermissionSetResponse,
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
  operationName: "DeleteInlinePolicyFromPermissionSet",
}));

export type DeleteInstanceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the instance of IAM Identity Center. Only the account that owns the instance can call this API. Neither the delegated administrator nor member account can delete the organization instance, but those roles can delete their own instance.
 */
export const deleteInstance: API.OperationMethod<
  DeleteInstanceRequest,
  DeleteInstanceResponse,
  DeleteInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteInstanceRequest,
  output: DeleteInstanceResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteInstance",
}));

export type DeleteInstanceAccessControlAttributeConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disables the attributes-based access control (ABAC) feature for the specified IAM Identity Center instance and deletes all of the attribute mappings that have been configured. Once deleted, any attributes that are received from an identity source and any custom attributes you have previously configured will not be passed. For more information about ABAC, see Attribute-Based Access Control in the *IAM Identity Center User Guide*.
 */
export const deleteInstanceAccessControlAttributeConfiguration: API.OperationMethod<
  DeleteInstanceAccessControlAttributeConfigurationRequest,
  DeleteInstanceAccessControlAttributeConfigurationResponse,
  DeleteInstanceAccessControlAttributeConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteInstanceAccessControlAttributeConfigurationRequest,
  output: DeleteInstanceAccessControlAttributeConfigurationResponse,
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
  operationName: "DeleteInstanceAccessControlAttributeConfiguration",
}));

export type DeletePermissionsBoundaryFromPermissionSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the permissions boundary from a specified PermissionSet.
 */
export const deletePermissionsBoundaryFromPermissionSet: API.OperationMethod<
  DeletePermissionsBoundaryFromPermissionSetRequest,
  DeletePermissionsBoundaryFromPermissionSetResponse,
  DeletePermissionsBoundaryFromPermissionSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePermissionsBoundaryFromPermissionSetRequest,
  output: DeletePermissionsBoundaryFromPermissionSetResponse,
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
  operationName: "DeletePermissionsBoundaryFromPermissionSet",
}));

export type DeletePermissionSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified permission set.
 */
export const deletePermissionSet: API.OperationMethod<
  DeletePermissionSetRequest,
  DeletePermissionSetResponse,
  DeletePermissionSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeletePermissionSetRequest,
  output: DeletePermissionSetResponse,
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
  operationName: "DeletePermissionSet",
}));

export type DeleteTrustedTokenIssuerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a trusted token issuer configuration from an instance of IAM Identity Center.
 *
 * Deleting this trusted token issuer configuration will cause users to lose access to any applications that are configured to use the trusted token issuer.
 */
export const deleteTrustedTokenIssuer: API.OperationMethod<
  DeleteTrustedTokenIssuerRequest,
  DeleteTrustedTokenIssuerResponse,
  DeleteTrustedTokenIssuerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTrustedTokenIssuerRequest,
  output: DeleteTrustedTokenIssuerResponse,
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
  operationName: "DeleteTrustedTokenIssuer",
}));

export type DescribeAccountAssignmentCreationStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the status of the assignment creation request.
 */
export const describeAccountAssignmentCreationStatus: API.OperationMethod<
  DescribeAccountAssignmentCreationStatusRequest,
  DescribeAccountAssignmentCreationStatusResponse,
  DescribeAccountAssignmentCreationStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAccountAssignmentCreationStatusRequest,
  output: DescribeAccountAssignmentCreationStatusResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccountAssignmentCreationStatus",
}));

export type DescribeAccountAssignmentDeletionStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the status of the assignment deletion request.
 */
export const describeAccountAssignmentDeletionStatus: API.OperationMethod<
  DescribeAccountAssignmentDeletionStatusRequest,
  DescribeAccountAssignmentDeletionStatusResponse,
  DescribeAccountAssignmentDeletionStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeAccountAssignmentDeletionStatusRequest,
  output: DescribeAccountAssignmentDeletionStatusResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeAccountAssignmentDeletionStatus",
}));

export type DescribeApplicationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the details of an application associated with an instance of IAM Identity Center.
 */
export const describeApplication: API.OperationMethod<
  DescribeApplicationRequest,
  DescribeApplicationResponse,
  DescribeApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeApplicationRequest,
  output: DescribeApplicationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplication",
}));

export type DescribeApplicationAssignmentError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a direct assignment of a user or group to an application. If the user doesn't have a direct assignment to the application, the user may still have access to the application through a group. Therefore, don't use this API to test access to an application for a user. Instead use ListApplicationAssignmentsForPrincipal.
 */
export const describeApplicationAssignment: API.OperationMethod<
  DescribeApplicationAssignmentRequest,
  DescribeApplicationAssignmentResponse,
  DescribeApplicationAssignmentError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeApplicationAssignmentRequest,
  output: DescribeApplicationAssignmentResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplicationAssignment",
}));

export type DescribeApplicationProviderError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about a provider that can be used to connect an Amazon Web Services managed application or customer managed application to IAM Identity Center.
 */
export const describeApplicationProvider: API.OperationMethod<
  DescribeApplicationProviderRequest,
  DescribeApplicationProviderResponse,
  DescribeApplicationProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeApplicationProviderRequest,
  output: DescribeApplicationProviderResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeApplicationProvider",
}));

export type DescribeInstanceError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the details of an instance of IAM Identity Center. The status can be one of the following:
 *
 * - `CREATE_IN_PROGRESS` - The instance is in the process of being created. When the instance is ready for use, DescribeInstance returns the status of `ACTIVE`. While the instance is in the `CREATE_IN_PROGRESS` state, you can call only DescribeInstance and DeleteInstance operations.
 *
 * - `DELETE_IN_PROGRESS` - The instance is being deleted. Returns `AccessDeniedException` after the delete operation completes.
 *
 * - `ACTIVE` - The instance is active.
 */
export const describeInstance: API.OperationMethod<
  DescribeInstanceRequest,
  DescribeInstanceResponse,
  DescribeInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeInstanceRequest,
  output: DescribeInstanceResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeInstance",
}));

export type DescribeInstanceAccessControlAttributeConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns the list of IAM Identity Center identity store attributes that have been configured to work with attributes-based access control (ABAC) for the specified IAM Identity Center instance. This will not return attributes configured and sent by an external identity provider. For more information about ABAC, see Attribute-Based Access Control in the *IAM Identity Center User Guide*.
 */
export const describeInstanceAccessControlAttributeConfiguration: API.OperationMethod<
  DescribeInstanceAccessControlAttributeConfigurationRequest,
  DescribeInstanceAccessControlAttributeConfigurationResponse,
  DescribeInstanceAccessControlAttributeConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeInstanceAccessControlAttributeConfigurationRequest,
  output: DescribeInstanceAccessControlAttributeConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeInstanceAccessControlAttributeConfiguration",
}));

export type DescribePermissionSetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the details of the permission set.
 */
export const describePermissionSet: API.OperationMethod<
  DescribePermissionSetRequest,
  DescribePermissionSetResponse,
  DescribePermissionSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribePermissionSetRequest,
  output: DescribePermissionSetResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePermissionSet",
}));

export type DescribePermissionSetProvisioningStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Describes the status for the given permission set provisioning request.
 */
export const describePermissionSetProvisioningStatus: API.OperationMethod<
  DescribePermissionSetProvisioningStatusRequest,
  DescribePermissionSetProvisioningStatusResponse,
  DescribePermissionSetProvisioningStatusError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribePermissionSetProvisioningStatusRequest,
  output: DescribePermissionSetProvisioningStatusResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribePermissionSetProvisioningStatus",
}));

export type DescribeRegionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about a specific Region enabled in an IAM Identity Center instance. Details include the Region name, current status (ACTIVE, ADDING, or REMOVING), the date when the Region was added, and whether it is the primary Region. The request must be made from one of the enabled Regions of the IAM Identity Center instance.
 *
 * The following actions are related to `DescribeRegion`:
 *
 * - AddRegion
 *
 * - RemoveRegion
 *
 * - ListRegions
 */
export const describeRegion: API.OperationMethod<
  DescribeRegionRequest,
  DescribeRegionResponse,
  DescribeRegionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeRegionRequest,
  output: DescribeRegionResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRegion",
}));

export type DescribeTrustedTokenIssuerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about a trusted token issuer configuration stored in an instance of IAM Identity Center. Details include the name of the trusted token issuer, the issuer URL, and the path of the source attribute and the destination attribute for a trusted token issuer configuration.
 */
export const describeTrustedTokenIssuer: API.OperationMethod<
  DescribeTrustedTokenIssuerRequest,
  DescribeTrustedTokenIssuerResponse,
  DescribeTrustedTokenIssuerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DescribeTrustedTokenIssuerRequest,
  output: DescribeTrustedTokenIssuerResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeTrustedTokenIssuer",
}));

export type DetachCustomerManagedPolicyReferenceFromPermissionSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Detaches the specified customer managed policy from the specified PermissionSet.
 */
export const detachCustomerManagedPolicyReferenceFromPermissionSet: API.OperationMethod<
  DetachCustomerManagedPolicyReferenceFromPermissionSetRequest,
  DetachCustomerManagedPolicyReferenceFromPermissionSetResponse,
  DetachCustomerManagedPolicyReferenceFromPermissionSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DetachCustomerManagedPolicyReferenceFromPermissionSetRequest,
  output: DetachCustomerManagedPolicyReferenceFromPermissionSetResponse,
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
  operationName: "DetachCustomerManagedPolicyReferenceFromPermissionSet",
}));

export type DetachManagedPolicyFromPermissionSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Detaches the attached Amazon Web Services managed policy ARN from the specified permission set.
 */
export const detachManagedPolicyFromPermissionSet: API.OperationMethod<
  DetachManagedPolicyFromPermissionSetRequest,
  DetachManagedPolicyFromPermissionSetResponse,
  DetachManagedPolicyFromPermissionSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DetachManagedPolicyFromPermissionSetRequest,
  output: DetachManagedPolicyFromPermissionSetResponse,
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
  operationName: "DetachManagedPolicyFromPermissionSet",
}));

export type GetApplicationAccessScopeError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the authorized targets for an IAM Identity Center access scope for an application.
 */
export const getApplicationAccessScope: API.OperationMethod<
  GetApplicationAccessScopeRequest,
  GetApplicationAccessScopeResponse,
  GetApplicationAccessScopeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetApplicationAccessScopeRequest,
  output: GetApplicationAccessScopeResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApplicationAccessScope",
}));

export type GetApplicationAssignmentConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the configuration of PutApplicationAssignmentConfiguration.
 */
export const getApplicationAssignmentConfiguration: API.OperationMethod<
  GetApplicationAssignmentConfigurationRequest,
  GetApplicationAssignmentConfigurationResponse,
  GetApplicationAssignmentConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetApplicationAssignmentConfigurationRequest,
  output: GetApplicationAssignmentConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApplicationAssignmentConfiguration",
}));

export type GetApplicationAuthenticationMethodError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about an authentication method used by an application.
 */
export const getApplicationAuthenticationMethod: API.OperationMethod<
  GetApplicationAuthenticationMethodRequest,
  GetApplicationAuthenticationMethodResponse,
  GetApplicationAuthenticationMethodError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetApplicationAuthenticationMethodRequest,
  output: GetApplicationAuthenticationMethodResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApplicationAuthenticationMethod",
}));

export type GetApplicationGrantError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves details about an application grant.
 */
export const getApplicationGrant: API.OperationMethod<
  GetApplicationGrantRequest,
  GetApplicationGrantResponse,
  GetApplicationGrantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetApplicationGrantRequest,
  output: GetApplicationGrantResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApplicationGrant",
}));

export type GetApplicationSessionConfigurationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the session configuration for an application in IAM Identity Center.
 *
 * The session configuration determines how users can access an application. This includes whether user background sessions are enabled. User background sessions allow users to start a job on a supported Amazon Web Services managed application without having to remain signed in to an active session while the job runs.
 */
export const getApplicationSessionConfiguration: API.OperationMethod<
  GetApplicationSessionConfigurationRequest,
  GetApplicationSessionConfigurationResponse,
  GetApplicationSessionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetApplicationSessionConfigurationRequest,
  output: GetApplicationSessionConfigurationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetApplicationSessionConfiguration",
}));

export type GetInlinePolicyForPermissionSetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Obtains the inline policy assigned to the permission set.
 */
export const getInlinePolicyForPermissionSet: API.OperationMethod<
  GetInlinePolicyForPermissionSetRequest,
  GetInlinePolicyForPermissionSetResponse,
  GetInlinePolicyForPermissionSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetInlinePolicyForPermissionSetRequest,
  output: GetInlinePolicyForPermissionSetResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetInlinePolicyForPermissionSet",
}));

export type GetPermissionsBoundaryForPermissionSetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Obtains the permissions boundary for a specified PermissionSet.
 */
export const getPermissionsBoundaryForPermissionSet: API.OperationMethod<
  GetPermissionsBoundaryForPermissionSetRequest,
  GetPermissionsBoundaryForPermissionSetResponse,
  GetPermissionsBoundaryForPermissionSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetPermissionsBoundaryForPermissionSetRequest,
  output: GetPermissionsBoundaryForPermissionSetResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPermissionsBoundaryForPermissionSet",
}));

export type ListAccountAssignmentCreationStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the status of the Amazon Web Services account assignment creation requests for a specified IAM Identity Center instance.
 */
export const listAccountAssignmentCreationStatus: API.PaginatedOperationMethod<
  ListAccountAssignmentCreationStatusRequest,
  ListAccountAssignmentCreationStatusResponse,
  ListAccountAssignmentCreationStatusError,
  Credentials | HttpClient.HttpClient,
  AccountAssignmentOperationStatusMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccountAssignmentCreationStatusRequest,
  output: ListAccountAssignmentCreationStatusResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccountAssignmentCreationStatus",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AccountAssignmentsCreationStatus",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAccountAssignmentDeletionStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the status of the Amazon Web Services account assignment deletion requests for a specified IAM Identity Center instance.
 */
export const listAccountAssignmentDeletionStatus: API.PaginatedOperationMethod<
  ListAccountAssignmentDeletionStatusRequest,
  ListAccountAssignmentDeletionStatusResponse,
  ListAccountAssignmentDeletionStatusError,
  Credentials | HttpClient.HttpClient,
  AccountAssignmentOperationStatusMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccountAssignmentDeletionStatusRequest,
  output: ListAccountAssignmentDeletionStatusResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccountAssignmentDeletionStatus",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AccountAssignmentsDeletionStatus",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAccountAssignmentsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the assignee of the specified Amazon Web Services account with the specified permission set.
 */
export const listAccountAssignments: API.PaginatedOperationMethod<
  ListAccountAssignmentsRequest,
  ListAccountAssignmentsResponse,
  ListAccountAssignmentsError,
  Credentials | HttpClient.HttpClient,
  AccountAssignment
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccountAssignmentsRequest,
  output: ListAccountAssignmentsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccountAssignments",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AccountAssignments",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAccountAssignmentsForPrincipalError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of the IAM Identity Center associated Amazon Web Services accounts that the principal has access to. This action must be called from the management account containing your organization instance of IAM Identity Center. This action is not valid for account instances of IAM Identity Center.
 */
export const listAccountAssignmentsForPrincipal: API.PaginatedOperationMethod<
  ListAccountAssignmentsForPrincipalRequest,
  ListAccountAssignmentsForPrincipalResponse,
  ListAccountAssignmentsForPrincipalError,
  Credentials | HttpClient.HttpClient,
  AccountAssignmentForPrincipal
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccountAssignmentsForPrincipalRequest,
  output: ListAccountAssignmentsForPrincipalResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccountAssignmentsForPrincipal",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AccountAssignments",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListAccountsForProvisionedPermissionSetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the Amazon Web Services accounts where the specified permission set is provisioned.
 */
export const listAccountsForProvisionedPermissionSet: API.PaginatedOperationMethod<
  ListAccountsForProvisionedPermissionSetRequest,
  ListAccountsForProvisionedPermissionSetResponse,
  ListAccountsForProvisionedPermissionSetError,
  Credentials | HttpClient.HttpClient,
  AccountId
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListAccountsForProvisionedPermissionSetRequest,
  output: ListAccountsForProvisionedPermissionSetResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListAccountsForProvisionedPermissionSet",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AccountIds",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListApplicationAccessScopesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the access scopes and authorized targets associated with an application.
 */
export const listApplicationAccessScopes: API.PaginatedOperationMethod<
  ListApplicationAccessScopesRequest,
  ListApplicationAccessScopesResponse,
  ListApplicationAccessScopesError,
  Credentials | HttpClient.HttpClient,
  ScopeDetails
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListApplicationAccessScopesRequest,
  output: ListApplicationAccessScopesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplicationAccessScopes",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Scopes",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListApplicationAssignmentsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists Amazon Web Services account users that are assigned to an application.
 */
export const listApplicationAssignments: API.PaginatedOperationMethod<
  ListApplicationAssignmentsRequest,
  ListApplicationAssignmentsResponse,
  ListApplicationAssignmentsError,
  Credentials | HttpClient.HttpClient,
  ApplicationAssignment
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListApplicationAssignmentsRequest,
  output: ListApplicationAssignmentsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplicationAssignments",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ApplicationAssignments",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListApplicationAssignmentsForPrincipalError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the applications to which a specified principal is assigned. You must provide a filter when calling this action from a member account against your organization instance of IAM Identity Center. A filter is not required when called from the management account against an organization instance of IAM Identity Center, or from a member account against an account instance of IAM Identity Center in the same account.
 */
export const listApplicationAssignmentsForPrincipal: API.PaginatedOperationMethod<
  ListApplicationAssignmentsForPrincipalRequest,
  ListApplicationAssignmentsForPrincipalResponse,
  ListApplicationAssignmentsForPrincipalError,
  Credentials | HttpClient.HttpClient,
  ApplicationAssignmentForPrincipal
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListApplicationAssignmentsForPrincipalRequest,
  output: ListApplicationAssignmentsForPrincipalResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplicationAssignmentsForPrincipal",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ApplicationAssignments",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListApplicationAuthenticationMethodsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all of the authentication methods supported by the specified application.
 */
export const listApplicationAuthenticationMethods: API.PaginatedOperationMethod<
  ListApplicationAuthenticationMethodsRequest,
  ListApplicationAuthenticationMethodsResponse,
  ListApplicationAuthenticationMethodsError,
  Credentials | HttpClient.HttpClient,
  AuthenticationMethodItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListApplicationAuthenticationMethodsRequest,
  output: ListApplicationAuthenticationMethodsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplicationAuthenticationMethods",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AuthenticationMethods",
  } as const,
})) as any;

export type ListApplicationGrantsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * List the grants associated with an application.
 */
export const listApplicationGrants: API.PaginatedOperationMethod<
  ListApplicationGrantsRequest,
  ListApplicationGrantsResponse,
  ListApplicationGrantsError,
  Credentials | HttpClient.HttpClient,
  GrantItem
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListApplicationGrantsRequest,
  output: ListApplicationGrantsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplicationGrants",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "Grants" } as const,
})) as any;

export type ListApplicationProvidersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the application providers configured in the IAM Identity Center identity store.
 */
export const listApplicationProviders: API.PaginatedOperationMethod<
  ListApplicationProvidersRequest,
  ListApplicationProvidersResponse,
  ListApplicationProvidersError,
  Credentials | HttpClient.HttpClient,
  ApplicationProvider
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListApplicationProvidersRequest,
  output: ListApplicationProvidersResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplicationProviders",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ApplicationProviders",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListApplicationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all applications associated with the instance of IAM Identity Center. When listing applications for an organization instance in the management account, member accounts must use the `applicationAccount` parameter to filter the list to only applications created from that account. When listing applications for an account instance in the same member account, a filter is not required.
 */
export const listApplications: API.PaginatedOperationMethod<
  ListApplicationsRequest,
  ListApplicationsResponse,
  ListApplicationsError,
  Credentials | HttpClient.HttpClient,
  Application
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListApplicationsRequest,
  output: ListApplicationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListApplications",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Applications",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListCustomerManagedPolicyReferencesInPermissionSetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all customer managed policies attached to a specified PermissionSet.
 */
export const listCustomerManagedPolicyReferencesInPermissionSet: API.PaginatedOperationMethod<
  ListCustomerManagedPolicyReferencesInPermissionSetRequest,
  ListCustomerManagedPolicyReferencesInPermissionSetResponse,
  ListCustomerManagedPolicyReferencesInPermissionSetError,
  Credentials | HttpClient.HttpClient,
  CustomerManagedPolicyReference
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCustomerManagedPolicyReferencesInPermissionSetRequest,
  output: ListCustomerManagedPolicyReferencesInPermissionSetResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListCustomerManagedPolicyReferencesInPermissionSet",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "CustomerManagedPolicyReferences",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListInstancesError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the details of the organization and account instances of IAM Identity Center that were created in or visible to the account calling this API.
 */
export const listInstances: API.PaginatedOperationMethod<
  ListInstancesRequest,
  ListInstancesResponse,
  ListInstancesError,
  Credentials | HttpClient.HttpClient,
  InstanceMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListInstancesRequest,
  output: ListInstancesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListInstances",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Instances",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListManagedPoliciesInPermissionSetError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the Amazon Web Services managed policy that is attached to a specified permission set.
 */
export const listManagedPoliciesInPermissionSet: API.PaginatedOperationMethod<
  ListManagedPoliciesInPermissionSetRequest,
  ListManagedPoliciesInPermissionSetResponse,
  ListManagedPoliciesInPermissionSetError,
  Credentials | HttpClient.HttpClient,
  AttachedManagedPolicy
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListManagedPoliciesInPermissionSetRequest,
  output: ListManagedPoliciesInPermissionSetResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListManagedPoliciesInPermissionSet",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AttachedManagedPolicies",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPermissionSetProvisioningStatusError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the status of the permission set provisioning requests for a specified IAM Identity Center instance.
 */
export const listPermissionSetProvisioningStatus: API.PaginatedOperationMethod<
  ListPermissionSetProvisioningStatusRequest,
  ListPermissionSetProvisioningStatusResponse,
  ListPermissionSetProvisioningStatusError,
  Credentials | HttpClient.HttpClient,
  PermissionSetProvisioningStatusMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPermissionSetProvisioningStatusRequest,
  output: ListPermissionSetProvisioningStatusResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPermissionSetProvisioningStatus",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PermissionSetsProvisioningStatus",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPermissionSetsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the PermissionSets in an IAM Identity Center instance.
 */
export const listPermissionSets: API.PaginatedOperationMethod<
  ListPermissionSetsRequest,
  ListPermissionSetsResponse,
  ListPermissionSetsError,
  Credentials | HttpClient.HttpClient,
  PermissionSetArn
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPermissionSetsRequest,
  output: ListPermissionSetsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPermissionSets",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PermissionSets",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListPermissionSetsProvisionedToAccountError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the permission sets that are provisioned to a specified Amazon Web Services account.
 */
export const listPermissionSetsProvisionedToAccount: API.PaginatedOperationMethod<
  ListPermissionSetsProvisionedToAccountRequest,
  ListPermissionSetsProvisionedToAccountResponse,
  ListPermissionSetsProvisionedToAccountError,
  Credentials | HttpClient.HttpClient,
  PermissionSetArn
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListPermissionSetsProvisionedToAccountRequest,
  output: ListPermissionSetsProvisionedToAccountResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPermissionSetsProvisionedToAccount",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "PermissionSets",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListRegionsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all enabled Regions of an IAM Identity Center instance, including those that are being added or removed. This operation returns Regions with ACTIVE, ADDING, or REMOVING status.
 *
 * The following actions are related to `ListRegions`:
 *
 * - AddRegion
 *
 * - RemoveRegion
 *
 * - DescribeRegion
 */
export const listRegions: API.PaginatedOperationMethod<
  ListRegionsRequest,
  ListRegionsResponse,
  ListRegionsError,
  Credentials | HttpClient.HttpClient,
  RegionMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListRegionsRequest,
  output: ListRegionsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRegions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Regions",
    pageSize: "MaxResults",
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
 * Lists the tags that are attached to a specified resource.
 */
export const listTagsForResource: API.PaginatedOperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient,
  Tag
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTagsForResourceRequest,
  output: ListTagsForResourceResponse,
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
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "Tags" } as const,
})) as any;

export type ListTrustedTokenIssuersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the trusted token issuers configured in an instance of IAM Identity Center.
 */
export const listTrustedTokenIssuers: API.PaginatedOperationMethod<
  ListTrustedTokenIssuersRequest,
  ListTrustedTokenIssuersResponse,
  ListTrustedTokenIssuersError,
  Credentials | HttpClient.HttpClient,
  TrustedTokenIssuerMetadata
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTrustedTokenIssuersRequest,
  output: ListTrustedTokenIssuersResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTrustedTokenIssuers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "TrustedTokenIssuers",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ProvisionPermissionSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * The process by which a specified permission set is provisioned to the specified target.
 */
export const provisionPermissionSet: API.OperationMethod<
  ProvisionPermissionSetRequest,
  ProvisionPermissionSetResponse,
  ProvisionPermissionSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ProvisionPermissionSetRequest,
  output: ProvisionPermissionSetResponse,
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
  operationName: "ProvisionPermissionSet",
}));

export type PutApplicationAccessScopeError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds or updates the list of authorized targets for an IAM Identity Center access scope for an application.
 */
export const putApplicationAccessScope: API.OperationMethod<
  PutApplicationAccessScopeRequest,
  PutApplicationAccessScopeResponse,
  PutApplicationAccessScopeError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutApplicationAccessScopeRequest,
  output: PutApplicationAccessScopeResponse,
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
  operationName: "PutApplicationAccessScope",
}));

export type PutApplicationAssignmentConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Configure how users gain access to an application. If `AssignmentsRequired` is `true` (default value), users don't have access to the application unless an assignment is created using the CreateApplicationAssignment API. If `false`, all users have access to the application. If an assignment is created using CreateApplicationAssignment., the user retains access if `AssignmentsRequired` is set to `true`.
 */
export const putApplicationAssignmentConfiguration: API.OperationMethod<
  PutApplicationAssignmentConfigurationRequest,
  PutApplicationAssignmentConfigurationResponse,
  PutApplicationAssignmentConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutApplicationAssignmentConfigurationRequest,
  output: PutApplicationAssignmentConfigurationResponse,
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
  operationName: "PutApplicationAssignmentConfiguration",
}));

export type PutApplicationAuthenticationMethodError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds or updates an authentication method for an application.
 */
export const putApplicationAuthenticationMethod: API.OperationMethod<
  PutApplicationAuthenticationMethodRequest,
  PutApplicationAuthenticationMethodResponse,
  PutApplicationAuthenticationMethodError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutApplicationAuthenticationMethodRequest,
  output: PutApplicationAuthenticationMethodResponse,
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
  operationName: "PutApplicationAuthenticationMethod",
}));

export type PutApplicationGrantError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a configuration for an application to use grants. Conceptually grants are authorization to request actions related to tokens. This configuration will be used when parties are requesting and receiving tokens during the trusted identity propagation process. For more information on the IAM Identity Center supported grant workflows, see SAML 2.0 and OAuth 2.0.
 *
 * A grant is created between your applications and Identity Center instance which enables an application to use specified mechanisms to obtain tokens. These tokens are used by your applications to gain access to Amazon Web Services resources on behalf of users. The following elements are within these exchanges:
 *
 * - **Requester** - The application requesting access to Amazon Web Services resources.
 *
 * - **Subject** - Typically the user that is requesting access to Amazon Web Services resources.
 *
 * - **Grant** - Conceptually, a grant is authorization to access Amazon Web Services resources. These grants authorize token generation for authenticating access to the requester and for the request to make requests on behalf of the subjects. There are four types of grants:
 *
 * - **AuthorizationCode** - Allows an application to request authorization through a series of user-agent redirects.
 *
 * - **JWT bearer ** - Authorizes an application to exchange a JSON Web Token that came from an external identity provider. To learn more, see RFC 6479.
 *
 * - **Refresh token** - Enables application to request new access tokens to replace expiring or expired access tokens.
 *
 * - **Exchange token** - A grant that requests tokens from the authorization server by providing a 'subject' token with access scope authorizing trusted identity propagation to this application. To learn more, see RFC 8693.
 *
 * - **Authorization server** - IAM Identity Center requests tokens.
 *
 * User credentials are never shared directly within these exchanges. Instead, applications use grants to request access tokens from IAM Identity Center. For more information, see RFC 6479.
 * **Use cases**
 *
 * - Connecting to custom applications.
 *
 * - Configuring an Amazon Web Services service to make calls to another Amazon Web Services services using JWT tokens.
 */
export const putApplicationGrant: API.OperationMethod<
  PutApplicationGrantRequest,
  PutApplicationGrantResponse,
  PutApplicationGrantError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutApplicationGrantRequest,
  output: PutApplicationGrantResponse,
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
  operationName: "PutApplicationGrant",
}));

export type PutApplicationSessionConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the session configuration for an application in IAM Identity Center.
 *
 * The session configuration determines how users can access an application. This includes whether user background sessions are enabled. User background sessions allow users to start a job on a supported Amazon Web Services managed application without having to remain signed in to an active session while the job runs.
 */
export const putApplicationSessionConfiguration: API.OperationMethod<
  PutApplicationSessionConfigurationRequest,
  PutApplicationSessionConfigurationResponse,
  PutApplicationSessionConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutApplicationSessionConfigurationRequest,
  output: PutApplicationSessionConfigurationResponse,
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
  operationName: "PutApplicationSessionConfiguration",
}));

export type PutInlinePolicyToPermissionSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Attaches an inline policy to a permission set.
 *
 * If the permission set is already referenced by one or more account assignments, you will need to call ` ProvisionPermissionSet ` after this action to apply the corresponding IAM policy updates to all assigned accounts.
 */
export const putInlinePolicyToPermissionSet: API.OperationMethod<
  PutInlinePolicyToPermissionSetRequest,
  PutInlinePolicyToPermissionSetResponse,
  PutInlinePolicyToPermissionSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutInlinePolicyToPermissionSetRequest,
  output: PutInlinePolicyToPermissionSetResponse,
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
  operationName: "PutInlinePolicyToPermissionSet",
}));

export type PutPermissionsBoundaryToPermissionSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Attaches an Amazon Web Services managed or customer managed policy to the specified PermissionSet as a permissions boundary.
 */
export const putPermissionsBoundaryToPermissionSet: API.OperationMethod<
  PutPermissionsBoundaryToPermissionSetRequest,
  PutPermissionsBoundaryToPermissionSetResponse,
  PutPermissionsBoundaryToPermissionSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutPermissionsBoundaryToPermissionSetRequest,
  output: PutPermissionsBoundaryToPermissionSetResponse,
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
  operationName: "PutPermissionsBoundaryToPermissionSet",
}));

export type RemoveRegionError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes an additional Region from an IAM Identity Center instance. This operation initiates an asynchronous workflow to clean up IAM Identity Center resources in the specified additional Region. The Region status is set to REMOVING and the Region record is deleted when the workflow completes. The request must be made from the primary Region. The target Region cannot be the primary Region, and no other add or remove Region workflows can be in progress.
 *
 * The following actions are related to `RemoveRegion`:
 *
 * - AddRegion
 *
 * - DescribeRegion
 *
 * - ListRegions
 */
export const removeRegion: API.OperationMethod<
  RemoveRegionRequest,
  RemoveRegionResponse,
  RemoveRegionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: RemoveRegionRequest,
  output: RemoveRegionResponse,
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
  operationName: "RemoveRegion",
}));

export type TagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a set of tags with a specified resource.
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
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a set of tags from a specified resource.
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
    ConflictException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateApplicationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates application properties.
 */
export const updateApplication: API.OperationMethod<
  UpdateApplicationRequest,
  UpdateApplicationResponse,
  UpdateApplicationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateApplicationRequest,
  output: UpdateApplicationResponse,
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
  operationName: "UpdateApplication",
}));

export type UpdateInstanceError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update the details for the instance of IAM Identity Center that is owned by the Amazon Web Services account.
 *
 * In a single `UpdateInstance` request, you can perform only one of the following operations:
 *
 * - Update the encryption configuration of the instance by specifying `EncryptionConfiguration`.
 *
 * - Enable permission sets for the instance by specifying `PermissionSetsEnabled`.
 *
 * A request that specifies both `EncryptionConfiguration` and `PermissionSetsEnabled` returns a `ValidationException`. To perform both operations, call `UpdateInstance` separately for each. The two calls can be made in parallel.
 */
export const updateInstance: API.OperationMethod<
  UpdateInstanceRequest,
  UpdateInstanceResponse,
  UpdateInstanceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateInstanceRequest,
  output: UpdateInstanceResponse,
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
  operationName: "UpdateInstance",
}));

export type UpdateInstanceAccessControlAttributeConfigurationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the IAM Identity Center identity store attributes that you can use with the IAM Identity Center instance for attributes-based access control (ABAC). When using an external identity provider as an identity source, you can pass attributes through the SAML assertion as an alternative to configuring attributes from the IAM Identity Center identity store. If a SAML assertion passes any of these attributes, IAM Identity Center replaces the attribute value with the value from the IAM Identity Center identity store. For more information about ABAC, see Attribute-Based Access Control in the *IAM Identity Center User Guide*.
 */
export const updateInstanceAccessControlAttributeConfiguration: API.OperationMethod<
  UpdateInstanceAccessControlAttributeConfigurationRequest,
  UpdateInstanceAccessControlAttributeConfigurationResponse,
  UpdateInstanceAccessControlAttributeConfigurationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateInstanceAccessControlAttributeConfigurationRequest,
  output: UpdateInstanceAccessControlAttributeConfigurationResponse,
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
  operationName: "UpdateInstanceAccessControlAttributeConfiguration",
}));

export type UpdatePermissionSetError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates an existing permission set.
 */
export const updatePermissionSet: API.OperationMethod<
  UpdatePermissionSetRequest,
  UpdatePermissionSetResponse,
  UpdatePermissionSetError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdatePermissionSetRequest,
  output: UpdatePermissionSetResponse,
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
  operationName: "UpdatePermissionSet",
}));

export type UpdateTrustedTokenIssuerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the name of the trusted token issuer, or the path of a source attribute or destination attribute for a trusted token issuer configuration.
 *
 * Updating this trusted token issuer configuration might cause users to lose access to any applications that are configured to use the trusted token issuer.
 */
export const updateTrustedTokenIssuer: API.OperationMethod<
  UpdateTrustedTokenIssuerRequest,
  UpdateTrustedTokenIssuerResponse,
  UpdateTrustedTokenIssuerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateTrustedTokenIssuerRequest,
  output: UpdateTrustedTokenIssuerResponse,
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
  operationName: "UpdateTrustedTokenIssuer",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.String, RegionName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "AddRegionRequest" });
    case 1:
      return S.suspend(() => S.Struct({ Status: S.optional(RegionStatus) })).annotate({
        identifier: "AddRegionResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ Name: S.String, Path: S.optional(S.String) })).annotate({
        identifier: "CustomerManagedPolicyReference",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          PermissionSetArn: S.String,
          CustomerManagedPolicyReference: CustomerManagedPolicyReference,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AttachCustomerManagedPolicyReferenceToPermissionSetRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AttachCustomerManagedPolicyReferenceToPermissionSetResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          PermissionSetArn: S.String,
          ManagedPolicyArn: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "AttachManagedPolicyToPermissionSetRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "AttachManagedPolicyToPermissionSetResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          TargetId: S.String,
          TargetType: TargetType,
          PermissionSetArn: S.String,
          PrincipalType: PrincipalType,
          PrincipalId: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateAccountAssignmentRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(StatusValues),
          RequestId: S.optional(S.String),
          FailureReason: S.optional(S.String),
          TargetId: S.optional(S.String),
          TargetType: S.optional(TargetType),
          PermissionSetArn: S.optional(S.String),
          PrincipalType: S.optional(PrincipalType),
          PrincipalId: S.optional(S.String),
          CreatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "AccountAssignmentOperationStatus",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AccountAssignmentCreationStatus: S.optional(AccountAssignmentOperationStatus) }),
      ).annotate({
        identifier: "CreateAccountAssignmentResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Origin: SignInOrigin, ApplicationUrl: S.optional(S.String) }),
      ).annotate({ identifier: "SignInOptions" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          SignInOptions: S.optional(SignInOptions),
          Visibility: S.optional(ApplicationVisibility),
        }),
      ).annotate({ identifier: "PortalOptions" });
    case 4:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 5:
      return S.Array(Tag);
    case 6:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          ApplicationProviderArn: S.String,
          Name: S.String,
          Description: S.optional(S.String),
          PortalOptions: S.optional(PortalOptions),
          Tags: S.optional(TagList),
          Status: S.optional(ApplicationStatus),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateApplicationRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationArn: S.optional(S.String),
          InstanceArn: S.optional(S.String),
          IdentityStoreArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "CreateApplicationResponse",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationArn: S.String,
          PrincipalId: S.String,
          PrincipalType: PrincipalType,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateApplicationAssignmentRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(TagList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateInstanceRequest" });
    case 2:
      return S.suspend(() => S.Struct({ InstanceArn: S.optional(S.String) })).annotate({
        identifier: "CreateInstanceResponse",
      });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() => S.Struct({ Source: AccessControlAttributeValueSourceList })).annotate({
        identifier: "AccessControlAttributeValue",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ Key: S.String, Value: AccessControlAttributeValue }),
      ).annotate({ identifier: "AccessControlAttribute" });
    case 6:
      return S.Array(AccessControlAttribute);
    case 7:
      return S.suspend(() =>
        S.Struct({ AccessControlAttributes: AccessControlAttributeList }),
      ).annotate({
        identifier: "InstanceAccessControlAttributeConfiguration",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateInstanceAccessControlAttributeConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          Description: S.optional(S.String),
          InstanceArn: S.String,
          SessionDuration: S.optional(S.String),
          RelayState: S.optional(S.String),
          Tags: S.optional(TagList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreatePermissionSetRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          PermissionSetArn: S.optional(S.String),
          Description: S.optional(S.String),
          CreatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          SessionDuration: S.optional(S.String),
          RelayState: S.optional(S.String),
        }),
      ).annotate({ identifier: "PermissionSet" });
    case 3:
      return S.suspend(() => S.Struct({ PermissionSet: S.optional(PermissionSet) })).annotate({
        identifier: "CreatePermissionSetResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          IssuerUrl: S.String,
          ClaimAttributePath: S.String,
          IdentityStoreAttributePath: S.String,
          JwksRetrievalOption: JwksRetrievalOption,
        }),
      ).annotate({ identifier: "OidcJwtConfiguration" });
    case 5:
      return S.Union([/*@__PURE__*/ S.Struct({ OidcJwtConfiguration: OidcJwtConfiguration })]);
    case 6:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          Name: S.String,
          TrustedTokenIssuerType: TrustedTokenIssuerType,
          TrustedTokenIssuerConfiguration: TrustedTokenIssuerConfiguration,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(TagList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "CreateTrustedTokenIssuerRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ TrustedTokenIssuerArn: S.optional(S.String) })).annotate({
        identifier: "CreateTrustedTokenIssuerResponse",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          TargetId: S.String,
          TargetType: TargetType,
          PermissionSetArn: S.String,
          PrincipalType: PrincipalType,
          PrincipalId: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteAccountAssignmentRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AccountAssignmentDeletionStatus: S.optional(AccountAssignmentOperationStatus) }),
      ).annotate({
        identifier: "DeleteAccountAssignmentResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ApplicationArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteApplicationRequest" });
    case 3:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteApplicationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ApplicationArn: S.String, Scope: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteApplicationAccessScopeRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationArn: S.String,
          PrincipalId: S.String,
          PrincipalType: PrincipalType,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteApplicationAssignmentRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationArn: S.String,
          AuthenticationMethodType: AuthenticationMethodType,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DeleteApplicationAuthenticationMethodRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ApplicationArn: S.String, GrantType: GrantType }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteApplicationGrantRequest",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.String, PermissionSetArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteInlinePolicyFromPermissionSetRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteInstanceRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteInstanceAccessControlAttributeConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.String, PermissionSetArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeletePermissionsBoundaryFromPermissionSetRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.String, PermissionSetArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeletePermissionSetRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ TrustedTokenIssuerArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteTrustedTokenIssuerRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.String, AccountAssignmentCreationRequestId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeAccountAssignmentCreationStatusRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.String, AccountAssignmentDeletionRequestId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeAccountAssignmentDeletionStatusRequest",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ApplicationArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeApplicationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationArn: S.optional(S.String),
          ApplicationProviderArn: S.optional(S.String),
          Name: S.optional(S.String),
          ApplicationAccount: S.optional(S.String),
          InstanceArn: S.optional(S.String),
          IdentityStoreArn: S.optional(S.String),
          Status: S.optional(ApplicationStatus),
          PortalOptions: S.optional(PortalOptions),
          Description: S.optional(S.String),
          CreatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreatedFrom: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeApplicationResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationArn: S.String,
          PrincipalId: S.String,
          PrincipalType: PrincipalType,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DescribeApplicationAssignmentRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          PrincipalType: S.optional(PrincipalType),
          PrincipalId: S.optional(S.String),
          ApplicationArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeApplicationAssignmentResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ApplicationProviderArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeApplicationProviderRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DisplayName: S.optional(S.String),
          IconUrl: S.optional(S.String),
          Description: S.optional(S.String),
        }),
      ).annotate({ identifier: "DisplayData" });
    case 6:
      return S.suspend(() =>
        S.Struct({ LongDescription: S.optional(S.String), DetailedTitle: S.optional(S.String) }),
      ).annotate({
        identifier: "ResourceServerScopeDetails",
      });
    case 7:
      return S.Record(S.String, /*@__PURE__*/ ResourceServerScopeDetails.pipe(S.optional));
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Scopes: S.optional(ResourceServerScopes) })).annotate({
        identifier: "ResourceServerConfig",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationProviderArn: S.String,
          FederationProtocol: S.optional(FederationProtocol),
          DisplayData: S.optional(DisplayData),
          ResourceServerConfig: S.optional(ResourceServerConfig),
        }),
      ).annotate({
        identifier: "DescribeApplicationProviderResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeInstanceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RegionName: S.optional(S.String),
          Status: S.optional(RegionStatus),
          AddedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          IsPrimaryRegion: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "RegionMetadata" });
    case 4:
      return S.Array(RegionMetadata);
    case 5:
      return S.suspend(() =>
        S.Struct({
          KeyType: S.optional(KmsKeyType),
          KmsKeyArn: S.optional(S.String),
          EncryptionStatus: S.optional(KmsKeyStatus),
          EncryptionStatusReason: S.optional(S.String),
        }),
      ).annotate({
        identifier: "EncryptionConfigurationDetails",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.optional(S.String),
          IdentityStoreId: S.optional(S.String),
          IdentityStoreArn: S.optional(S.String),
          OwnerAccountId: S.optional(S.String),
          Name: S.optional(S.String),
          CreatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(InstanceStatus),
          StatusReason: S.optional(S.String),
          PrimaryRegion: S.optional(S.String),
          Regions: S.optional(RegionMetadataList),
          EncryptionConfigurationDetails: S.optional(EncryptionConfigurationDetails),
          PermissionSetsEnabled: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "DescribeInstanceResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeInstanceAccessControlAttributeConfigurationRequest",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(InstanceAccessControlAttributeConfigurationStatus),
          StatusReason: S.optional(S.String),
          InstanceAccessControlAttributeConfiguration: S.optional(
            InstanceAccessControlAttributeConfiguration,
          ),
        }),
      ).annotate({
        identifier: "DescribeInstanceAccessControlAttributeConfigurationResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.String, PermissionSetArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribePermissionSetRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.String, ProvisionPermissionSetRequestId: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribePermissionSetProvisioningStatusRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(StatusValues),
          RequestId: S.optional(S.String),
          AccountId: S.optional(S.String),
          PermissionSetArn: S.optional(S.String),
          FailureReason: S.optional(S.String),
          CreatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "PermissionSetProvisioningStatus",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ PermissionSetProvisioningStatus: S.optional(PermissionSetProvisioningStatus) }),
      ).annotate({
        identifier: "DescribePermissionSetProvisioningStatusResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.String, RegionName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DescribeRegionRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ TrustedTokenIssuerArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DescribeTrustedTokenIssuerRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TrustedTokenIssuerArn: S.optional(S.String),
          Name: S.optional(S.String),
          TrustedTokenIssuerType: S.optional(TrustedTokenIssuerType),
          TrustedTokenIssuerConfiguration: S.optional(TrustedTokenIssuerConfiguration),
        }),
      ).annotate({
        identifier: "DescribeTrustedTokenIssuerResponse",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          PermissionSetArn: S.String,
          CustomerManagedPolicyReference: CustomerManagedPolicyReference,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DetachCustomerManagedPolicyReferenceFromPermissionSetRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DetachCustomerManagedPolicyReferenceFromPermissionSetResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          PermissionSetArn: S.String,
          ManagedPolicyArn: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "DetachManagedPolicyFromPermissionSetRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ApplicationArn: S.String, Scope: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetApplicationAccessScopeRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Scope: S.String, AuthorizedTargets: S.optional(ScopeTargets) }),
      ).annotate({
        identifier: "GetApplicationAccessScopeResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ApplicationArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetApplicationAssignmentConfigurationRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ AssignmentRequired: S.Boolean })).annotate({
        identifier: "GetApplicationAssignmentConfigurationResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ApplicationArn: S.String,
          AuthenticationMethodType: AuthenticationMethodType,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "GetApplicationAuthenticationMethodRequest",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ ActorPolicy: S.Any })).annotate({
        identifier: "IamAuthenticationMethod",
      });
    case 1:
      return S.Union([/*@__PURE__*/ S.Struct({ Iam: IamAuthenticationMethod })]);
    case 2:
      return S.suspend(() =>
        S.Struct({ AuthenticationMethod: S.optional(AuthenticationMethod) }),
      ).annotate({
        identifier: "GetApplicationAuthenticationMethodResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ApplicationArn: S.String, GrantType: GrantType }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetApplicationGrantRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ RedirectUris: S.optional(RedirectUris) })).annotate({
        identifier: "AuthorizationCodeGrant",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          TrustedTokenIssuerArn: S.optional(S.String),
          AuthorizedAudiences: S.optional(TokenIssuerAudiences),
        }),
      ).annotate({ identifier: "AuthorizedTokenIssuer" });
    case 6:
      return S.Array(AuthorizedTokenIssuer);
    case 7:
      return S.suspend(() =>
        S.Struct({ AuthorizedTokenIssuers: S.optional(AuthorizedTokenIssuers) }),
      ).annotate({ identifier: "JwtBearerGrant" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ AuthorizationCode: AuthorizationCodeGrant }),
        /*@__PURE__*/ S.Struct({ JwtBearer: JwtBearerGrant }),
        /*@__PURE__*/ S.Struct({ RefreshToken: RefreshTokenGrant }),
        /*@__PURE__*/ S.Struct({ TokenExchange: TokenExchangeGrant }),
      ]);
    case 1:
      return S.suspend(() => S.Struct({ Grant: Grant })).annotate({
        identifier: "GetApplicationGrantResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ApplicationArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetApplicationSessionConfigurationRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          UserBackgroundSessionApplicationStatus: S.optional(
            UserBackgroundSessionApplicationStatus,
          ),
        }),
      ).annotate({
        identifier: "GetApplicationSessionConfigurationResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.String, PermissionSetArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetInlinePolicyForPermissionSetRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ InlinePolicy: S.optional(S.String) })).annotate({
        identifier: "GetInlinePolicyForPermissionSetResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.String, PermissionSetArn: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetPermissionsBoundaryForPermissionSetRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          CustomerManagedPolicyReference: S.optional(CustomerManagedPolicyReference),
          ManagedPolicyArn: S.optional(S.String),
        }),
      ).annotate({ identifier: "PermissionsBoundary" });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ PermissionsBoundary: S.optional(PermissionsBoundary) }),
      ).annotate({
        identifier: "GetPermissionsBoundaryForPermissionSetResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Filter: S.optional(OperationStatusFilter),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAccountAssignmentCreationStatusRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Status: S.optional(StatusValues),
          RequestId: S.optional(S.String),
          CreatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "AccountAssignmentOperationStatusMetadata",
      });
    case 3:
      return S.Array(AccountAssignmentOperationStatusMetadata);
    case 4:
      return S.suspend(() =>
        S.Struct({
          AccountAssignmentsCreationStatus: S.optional(AccountAssignmentOperationStatusList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAccountAssignmentCreationStatusResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Filter: S.optional(OperationStatusFilter),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAccountAssignmentDeletionStatusRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          AccountAssignmentsDeletionStatus: S.optional(AccountAssignmentOperationStatusList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAccountAssignmentDeletionStatusResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          AccountId: S.String,
          PermissionSetArn: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAccountAssignmentsRequest",
      });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          PermissionSetArn: S.optional(S.String),
          PrincipalType: S.optional(PrincipalType),
          PrincipalId: S.optional(S.String),
        }),
      ).annotate({ identifier: "AccountAssignment" });
    case 1:
      return S.Array(AccountAssignment);
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccountAssignments: S.optional(AccountAssignmentList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAccountAssignmentsResponse",
      });
    case 3:
      return S.suspend(() => S.Struct({ AccountId: S.optional(S.String) })).annotate({
        identifier: "ListAccountAssignmentsFilter",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          PrincipalId: S.String,
          PrincipalType: PrincipalType,
          Filter: S.optional(ListAccountAssignmentsFilter),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAccountAssignmentsForPrincipalRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          AccountId: S.optional(S.String),
          PermissionSetArn: S.optional(S.String),
          PrincipalId: S.optional(S.String),
          PrincipalType: S.optional(PrincipalType),
        }),
      ).annotate({
        identifier: "AccountAssignmentForPrincipal",
      });
    case 6:
      return S.Array(AccountAssignmentForPrincipal);
    case 7:
      return S.suspend(() =>
        S.Struct({
          AccountAssignments: S.optional(AccountAssignmentListForPrincipal),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListAccountAssignmentsForPrincipalResponse",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          PermissionSetArn: S.String,
          ProvisioningStatus: S.optional(ProvisioningStatus),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListAccountsForProvisionedPermissionSetRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ AccountIds: S.optional(AccountList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListAccountsForProvisionedPermissionSetResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationArn: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListApplicationAccessScopesRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ Scope: S.String, AuthorizedTargets: S.optional(ScopeTargets) }),
      ).annotate({ identifier: "ScopeDetails" });
    case 4:
      return S.Array(ScopeDetails);
    case 5:
      return S.suspend(() =>
        S.Struct({ Scopes: Scopes, NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListApplicationAccessScopesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationArn: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListApplicationAssignmentsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ApplicationArn: S.String, PrincipalId: S.String, PrincipalType: PrincipalType }),
      ).annotate({ identifier: "ApplicationAssignment" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.Array(ApplicationAssignment);
    case 1:
      return S.suspend(() =>
        S.Struct({
          ApplicationAssignments: S.optional(ApplicationAssignmentsList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListApplicationAssignmentsResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ ApplicationArn: S.optional(S.String) })).annotate({
        identifier: "ListApplicationAssignmentsFilter",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          PrincipalId: S.String,
          PrincipalType: PrincipalType,
          Filter: S.optional(ListApplicationAssignmentsFilter),
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListApplicationAssignmentsForPrincipalRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationArn: S.optional(S.String),
          PrincipalId: S.optional(S.String),
          PrincipalType: S.optional(PrincipalType),
        }),
      ).annotate({
        identifier: "ApplicationAssignmentForPrincipal",
      });
    case 5:
      return S.Array(ApplicationAssignmentForPrincipal);
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationAssignments: S.optional(ApplicationAssignmentListForPrincipal),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListApplicationAssignmentsForPrincipalResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ApplicationArn: S.String, NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListApplicationAuthenticationMethodsRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          AuthenticationMethodType: S.optional(AuthenticationMethodType),
          AuthenticationMethod: S.optional(AuthenticationMethod),
        }),
      ).annotate({ identifier: "AuthenticationMethodItem" });
    case 1:
      return S.Array(AuthenticationMethodItem);
    case 2:
      return S.suspend(() =>
        S.Struct({
          AuthenticationMethods: S.optional(AuthenticationMethods),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListApplicationAuthenticationMethodsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ApplicationArn: S.String, NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListApplicationGrantsRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ GrantType: GrantType, Grant: Grant })).annotate({
        identifier: "GrantItem",
      });
    case 5:
      return S.Array(GrantItem);
    case 6:
      return S.suspend(() =>
        S.Struct({ Grants: Grants, NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListApplicationGrantsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListApplicationProvidersRequest",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ApplicationProviderArn: S.String,
          FederationProtocol: S.optional(FederationProtocol),
          DisplayData: S.optional(DisplayData),
          ResourceServerConfig: S.optional(ResourceServerConfig),
        }),
      ).annotate({ identifier: "ApplicationProvider" });
    case 1:
      return S.Array(ApplicationProvider);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ApplicationProviders: S.optional(ApplicationProviderList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListApplicationProvidersResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ApplicationAccount: S.optional(S.String),
          ApplicationProvider: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListApplicationsFilter" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Filter: S.optional(ListApplicationsFilter),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListApplicationsRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationArn: S.optional(S.String),
          ApplicationProviderArn: S.optional(S.String),
          Name: S.optional(S.String),
          ApplicationAccount: S.optional(S.String),
          InstanceArn: S.optional(S.String),
          IdentityStoreArn: S.optional(S.String),
          Status: S.optional(ApplicationStatus),
          PortalOptions: S.optional(PortalOptions),
          Description: S.optional(S.String),
          CreatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          CreatedFrom: S.optional(S.String),
        }),
      ).annotate({ identifier: "Application" });
    case 6:
      return S.Array(Application);
    case 7:
      return S.suspend(() =>
        S.Struct({ Applications: S.optional(ApplicationList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListApplicationsResponse" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          PermissionSetArn: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListCustomerManagedPolicyReferencesInPermissionSetRequest",
      });
    case 1:
      return S.Array(CustomerManagedPolicyReference);
    case 2:
      return S.suspend(() =>
        S.Struct({
          CustomerManagedPolicyReferences: S.optional(CustomerManagedPolicyReferenceList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListCustomerManagedPolicyReferencesInPermissionSetResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ MaxResults: S.optional(S.Number), NextToken: S.optional(S.String) }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListInstancesRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.optional(S.String),
          IdentityStoreId: S.optional(S.String),
          IdentityStoreArn: S.optional(S.String),
          OwnerAccountId: S.optional(S.String),
          Name: S.optional(S.String),
          CreatedDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          Status: S.optional(InstanceStatus),
          StatusReason: S.optional(S.String),
          PrimaryRegion: S.optional(S.String),
          Regions: S.optional(RegionMetadataList),
        }),
      ).annotate({ identifier: "InstanceMetadata" });
    case 5:
      return S.Array(InstanceMetadata);
    case 6:
      return S.suspend(() =>
        S.Struct({ Instances: S.optional(InstanceList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListInstancesResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          PermissionSetArn: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListManagedPoliciesInPermissionSetRequest",
      });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ Name: S.optional(S.String), Arn: S.optional(S.String) }),
      ).annotate({ identifier: "AttachedManagedPolicy" });
    case 1:
      return S.Array(AttachedManagedPolicy);
    case 2:
      return S.suspend(() =>
        S.Struct({
          AttachedManagedPolicies: S.optional(AttachedManagedPolicyList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListManagedPoliciesInPermissionSetResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
          Filter: S.optional(OperationStatusFilter),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPermissionSetProvisioningStatusRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          PermissionSetsProvisioningStatus: S.optional(PermissionSetProvisioningStatusList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPermissionSetProvisioningStatusResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          NextToken: S.optional(S.String),
          MaxResults: S.optional(S.Number),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPermissionSetsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          PermissionSets: S.optional(PermissionSetList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListPermissionSetsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          AccountId: S.String,
          ProvisioningStatus: S.optional(ProvisioningStatus),
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListPermissionSetsProvisionedToAccountRequest",
      });
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          PermissionSets: S.optional(PermissionSetList),
        }),
      ).annotate({
        identifier: "ListPermissionSetsProvisionedToAccountResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListRegionsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ Regions: S.optional(RegionMetadataList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListRegionsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.optional(S.String),
          ResourceArn: S.String,
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTagsForResourceRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ Tags: S.optional(TagList), NextToken: S.optional(S.String) }),
      ).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          MaxResults: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ListTrustedTokenIssuersRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          TrustedTokenIssuerArn: S.optional(S.String),
          Name: S.optional(S.String),
          TrustedTokenIssuerType: S.optional(TrustedTokenIssuerType),
        }),
      ).annotate({
        identifier: "TrustedTokenIssuerMetadata",
      });
    case 7:
      return S.Array(TrustedTokenIssuerMetadata);
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TrustedTokenIssuers: S.optional(TrustedTokenIssuerList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTrustedTokenIssuersResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          PermissionSetArn: S.String,
          TargetId: S.optional(S.String),
          TargetType: ProvisionTargetType,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "ProvisionPermissionSetRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Scope: S.String,
          AuthorizedTargets: S.optional(ScopeTargets),
          ApplicationArn: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutApplicationAccessScopeRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ApplicationArn: S.String, AssignmentRequired: S.Boolean }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutApplicationAssignmentConfigurationRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ApplicationArn: S.String,
          AuthenticationMethodType: AuthenticationMethodType,
          AuthenticationMethod: AuthenticationMethod,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutApplicationAuthenticationMethodRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ApplicationArn: S.String, GrantType: GrantType, Grant: Grant }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "PutApplicationGrantRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ApplicationArn: S.String,
          UserBackgroundSessionApplicationStatus: S.optional(
            UserBackgroundSessionApplicationStatus,
          ),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutApplicationSessionConfigurationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          PermissionSetArn: S.String,
          InlinePolicy: S.String,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutInlinePolicyToPermissionSetRequest",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          PermissionSetArn: S.String,
          PermissionsBoundary: PermissionsBoundary,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "PutPermissionsBoundaryToPermissionSetRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.String, RegionName: S.String }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "RemoveRegionRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ InstanceArn: S.optional(S.String), ResourceArn: S.String, Tags: TagList }).pipe(
          T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.optional(S.String),
          ResourceArn: S.String,
          TagKeys: TagKeyList,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 4:
      return S.suspend(() => S.Struct({ SignInOptions: S.optional(SignInOptions) })).annotate({
        identifier: "UpdateApplicationPortalOptions",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ApplicationArn: S.String,
          Name: S.optional(S.String),
          Description: S.optional(S.String),
          Status: S.optional(ApplicationStatus),
          PortalOptions: S.optional(UpdateApplicationPortalOptions),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateApplicationRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ KeyType: KmsKeyType, KmsKeyArn: S.optional(S.String) }),
      ).annotate({ identifier: "EncryptionConfiguration" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          InstanceArn: S.String,
          EncryptionConfiguration: S.optional(EncryptionConfiguration),
          PermissionSetsEnabled: S.optional(S.Boolean),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "UpdateInstanceRequest" });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          InstanceAccessControlAttributeConfiguration: InstanceAccessControlAttributeConfiguration,
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateInstanceAccessControlAttributeConfigurationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          InstanceArn: S.String,
          PermissionSetArn: S.String,
          Description: S.optional(S.String),
          SessionDuration: S.optional(S.String),
          RelayState: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdatePermissionSetRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ClaimAttributePath: S.optional(S.String),
          IdentityStoreAttributePath: S.optional(S.String),
          JwksRetrievalOption: S.optional(JwksRetrievalOption),
        }),
      ).annotate({
        identifier: "OidcJwtUpdateConfiguration",
      });
    case 3:
      return S.Union([
        /*@__PURE__*/ S.Struct({ OidcJwtConfiguration: OidcJwtUpdateConfiguration }),
      ]);
    case 4:
      return S.suspend(() =>
        S.Struct({
          TrustedTokenIssuerArn: S.String,
          Name: S.optional(S.String),
          TrustedTokenIssuerConfiguration: S.optional(TrustedTokenIssuerUpdateConfiguration),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "UpdateTrustedTokenIssuerRequest",
      });
  }
}
