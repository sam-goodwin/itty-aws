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
  sdkId: "Pca Connector Ad",
  serviceShapeName: "PcaConnectorAd",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "pca-connector-ad" });
const ver = /*@__PURE__*/ T.ServiceVersion("2018-05-10");
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
              `https://pca-connector-ad-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://pca-connector-ad-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://pca-connector-ad.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://pca-connector-ad.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
      ResourceId: S.String,
      ResourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.all(/*@__PURE__*/ T.HttpError(500), /*@__PURE__*/ T.Retryable()),
  ).pipe(C.withServerError, C.withRetryableError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: S.String,
      ResourceType: S.String,
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ResourceId: S.String,
      ResourceType: S.String,
      ServiceCode: S.String,
      QuotaCode: S.String,
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      ServiceCode: /*@__PURE__*/ S.optional(S.String),
      QuotaCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.all(
      /*@__PURE__*/ T.HttpError(429),
      /*@__PURE__*/ T.Retryable({ throttling: true }),
    ),
  ).pipe(C.withThrottlingError, C.withRetryableError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      Reason: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionReason).annotate({
          identifier: "ValidationExceptionReason",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type DirectoryId = string;
export type CertificateAuthorityArn = string;
export type IpAddressType = "IPV4" | "DUALSTACK" | (string & {});
const IpAddressType = S.String;

export type SecurityGroupId = string;
export type SecurityGroupIdList = string[];
const SecurityGroupIdList = /*@__PURE__*/ __L.at(__c0, 0);
export interface VpcInformation {
  IpAddressType?: IpAddressType;
  SecurityGroupIds: string[];
}
const VpcInformation = /*@__PURE__*/ __L.at(__c0, 1) as any as S.Schema<VpcInformation>;
export type ClientToken = string;
export type Tags = { [key: string]: string | undefined };
const Tags = /*@__PURE__*/ __L.at(__c0, 2);
export interface CreateConnectorRequest {
  DirectoryId: string;
  CertificateAuthorityArn: string;
  VpcInformation: VpcInformation;
  ClientToken?: string;
  Tags?: { [key: string]: string | undefined };
}
const CreateConnectorRequest = /*@__PURE__*/ __L.at(
  __c0,
  3,
) as any as S.Schema<CreateConnectorRequest>;
export type ConnectorArn = string;
export interface CreateConnectorResponse {
  ConnectorArn?: string;
}
const CreateConnectorResponse = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<CreateConnectorResponse>;
export interface CreateDirectoryRegistrationRequest {
  DirectoryId: string;
  ClientToken?: string;
  Tags?: { [key: string]: string | undefined };
}
const CreateDirectoryRegistrationRequest = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<CreateDirectoryRegistrationRequest>;
export type DirectoryRegistrationArn = string;
export interface CreateDirectoryRegistrationResponse {
  DirectoryRegistrationArn?: string;
}
const CreateDirectoryRegistrationResponse = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<CreateDirectoryRegistrationResponse>;
export interface CreateServicePrincipalNameRequest {
  DirectoryRegistrationArn: string;
  ConnectorArn: string;
  ClientToken?: string;
}
const CreateServicePrincipalNameRequest = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<CreateServicePrincipalNameRequest>;
export interface CreateServicePrincipalNameResponse {}
const CreateServicePrincipalNameResponse = /*@__PURE__*/ __L.at(
  __c1,
  0,
) as any as S.Schema<CreateServicePrincipalNameResponse>;
export type TemplateName = string;
export type ValidityPeriodType = "HOURS" | "DAYS" | "WEEKS" | "MONTHS" | "YEARS" | (string & {});
const ValidityPeriodType = S.String;

export interface ValidityPeriod {
  PeriodType: ValidityPeriodType;
  Period: number;
}
const ValidityPeriod = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<ValidityPeriod>;
export interface CertificateValidity {
  ValidityPeriod: ValidityPeriod;
  RenewalPeriod: ValidityPeriod;
}
const CertificateValidity = /*@__PURE__*/ __L.at(__c1, 2) as any as S.Schema<CertificateValidity>;
export type TemplateNameList = string[];
const TemplateNameList = SecurityGroupIdList as any as S.Schema<TemplateNameList>;
export type KeySpec = "KEY_EXCHANGE" | "SIGNATURE" | (string & {});
const KeySpec = S.String;

export type CryptoProvidersList = string[];
const CryptoProvidersList = SecurityGroupIdList as any as S.Schema<CryptoProvidersList>;
export interface PrivateKeyAttributesV2 {
  MinimalKeyLength: number;
  KeySpec: KeySpec;
  CryptoProviders?: string[];
}
const PrivateKeyAttributesV2 = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<PrivateKeyAttributesV2>;
export type ClientCompatibilityV2 =
  | "WINDOWS_SERVER_2003"
  | "WINDOWS_SERVER_2008"
  | "WINDOWS_SERVER_2008_R2"
  | "WINDOWS_SERVER_2012"
  | "WINDOWS_SERVER_2012_R2"
  | "WINDOWS_SERVER_2016"
  | (string & {});
const ClientCompatibilityV2 = S.String;

export interface PrivateKeyFlagsV2 {
  ExportableKey?: boolean;
  StrongKeyProtectionRequired?: boolean;
  ClientVersion: ClientCompatibilityV2;
}
const PrivateKeyFlagsV2 = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<PrivateKeyFlagsV2>;
export interface EnrollmentFlagsV2 {
  IncludeSymmetricAlgorithms?: boolean;
  UserInteractionRequired?: boolean;
  RemoveInvalidCertificateFromPersonalStore?: boolean;
  NoSecurityExtension?: boolean;
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean;
}
const EnrollmentFlagsV2 = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<EnrollmentFlagsV2>;
export interface SubjectNameFlagsV2 {
  SanRequireDomainDns?: boolean;
  SanRequireSpn?: boolean;
  SanRequireDirectoryGuid?: boolean;
  SanRequireUpn?: boolean;
  SanRequireEmail?: boolean;
  SanRequireDns?: boolean;
  RequireDnsAsCn?: boolean;
  RequireEmail?: boolean;
  RequireCommonName?: boolean;
  RequireDirectoryPath?: boolean;
}
const SubjectNameFlagsV2 = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<SubjectNameFlagsV2>;
export interface GeneralFlagsV2 {
  AutoEnrollment?: boolean;
  MachineType?: boolean;
}
const GeneralFlagsV2 = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<GeneralFlagsV2>;
export interface KeyUsageFlags {
  DigitalSignature?: boolean;
  NonRepudiation?: boolean;
  KeyEncipherment?: boolean;
  DataEncipherment?: boolean;
  KeyAgreement?: boolean;
}
const KeyUsageFlags = /*@__PURE__*/ __L.at(__c2, 0) as any as S.Schema<KeyUsageFlags>;
export interface KeyUsage {
  Critical?: boolean;
  UsageFlags: KeyUsageFlags;
}
const KeyUsage = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<KeyUsage>;
export type ApplicationPolicyType =
  | "ALL_APPLICATION_POLICIES"
  | "ANY_PURPOSE"
  | "ATTESTATION_IDENTITY_KEY_CERTIFICATE"
  | "CERTIFICATE_REQUEST_AGENT"
  | "CLIENT_AUTHENTICATION"
  | "CODE_SIGNING"
  | "CTL_USAGE"
  | "DIGITAL_RIGHTS"
  | "DIRECTORY_SERVICE_EMAIL_REPLICATION"
  | "DISALLOWED_LIST"
  | "DNS_SERVER_TRUST"
  | "DOCUMENT_ENCRYPTION"
  | "DOCUMENT_SIGNING"
  | "DYNAMIC_CODE_GENERATOR"
  | "EARLY_LAUNCH_ANTIMALWARE_DRIVER"
  | "EMBEDDED_WINDOWS_SYSTEM_COMPONENT_VERIFICATION"
  | "ENCLAVE"
  | "ENCRYPTING_FILE_SYSTEM"
  | "ENDORSEMENT_KEY_CERTIFICATE"
  | "FILE_RECOVERY"
  | "HAL_EXTENSION"
  | "IP_SECURITY_END_SYSTEM"
  | "IP_SECURITY_IKE_INTERMEDIATE"
  | "IP_SECURITY_TUNNEL_TERMINATION"
  | "IP_SECURITY_USER"
  | "ISOLATED_USER_MODE"
  | "KDC_AUTHENTICATION"
  | "KERNEL_MODE_CODE_SIGNING"
  | "KEY_PACK_LICENSES"
  | "KEY_RECOVERY"
  | "KEY_RECOVERY_AGENT"
  | "LICENSE_SERVER_VERIFICATION"
  | "LIFETIME_SIGNING"
  | "MICROSOFT_PUBLISHER"
  | "MICROSOFT_TIME_STAMPING"
  | "MICROSOFT_TRUST_LIST_SIGNING"
  | "OCSP_SIGNING"
  | "OEM_WINDOWS_SYSTEM_COMPONENT_VERIFICATION"
  | "PLATFORM_CERTIFICATE"
  | "PREVIEW_BUILD_SIGNING"
  | "PRIVATE_KEY_ARCHIVAL"
  | "PROTECTED_PROCESS_LIGHT_VERIFICATION"
  | "PROTECTED_PROCESS_VERIFICATION"
  | "QUALIFIED_SUBORDINATION"
  | "REVOKED_LIST_SIGNER"
  | "ROOT_PROGRAM_AUTO_UPDATE_CA_REVOCATION"
  | "ROOT_PROGRAM_AUTO_UPDATE_END_REVOCATION"
  | "ROOT_PROGRAM_NO_OSCP_FAILOVER_TO_CRL"
  | "ROOT_LIST_SIGNER"
  | "SECURE_EMAIL"
  | "SERVER_AUTHENTICATION"
  | "SMART_CARD_LOGIN"
  | "SPC_ENCRYPTED_DIGEST_RETRY_COUNT"
  | "SPC_RELAXED_PE_MARKER_CHECK"
  | "TIME_STAMPING"
  | "WINDOWS_HARDWARE_DRIVER_ATTESTED_VERIFICATION"
  | "WINDOWS_HARDWARE_DRIVER_EXTENDED_VERIFICATION"
  | "WINDOWS_HARDWARE_DRIVER_VERIFICATION"
  | "WINDOWS_HELLO_RECOVERY_KEY_ENCRYPTION"
  | "WINDOWS_KITS_COMPONENT"
  | "WINDOWS_RT_VERIFICATION"
  | "WINDOWS_SOFTWARE_EXTENSION_VERIFICATION"
  | "WINDOWS_STORE"
  | "WINDOWS_SYSTEM_COMPONENT_VERIFICATION"
  | "WINDOWS_TCB_COMPONENT"
  | "WINDOWS_THIRD_PARTY_APPLICATION_COMPONENT"
  | "WINDOWS_UPDATE"
  | (string & {});
const ApplicationPolicyType = S.String;

export type CustomObjectIdentifier = string;
export type ApplicationPolicy =
  | { PolicyType: ApplicationPolicyType; PolicyObjectIdentifier?: never }
  | { PolicyType?: never; PolicyObjectIdentifier: string };
const ApplicationPolicy = /*@__PURE__*/ __L.at(__c2, 2);
export type ApplicationPolicyList = ApplicationPolicy[];
const ApplicationPolicyList = /*@__PURE__*/ __L.at(__c2, 3);
export interface ApplicationPolicies {
  Critical?: boolean;
  Policies: ApplicationPolicy[];
}
const ApplicationPolicies = /*@__PURE__*/ __L.at(__c2, 4) as any as S.Schema<ApplicationPolicies>;
export interface ExtensionsV2 {
  KeyUsage: KeyUsage;
  ApplicationPolicies?: ApplicationPolicies;
}
const ExtensionsV2 = /*@__PURE__*/ __L.at(__c2, 5) as any as S.Schema<ExtensionsV2>;
export interface TemplateV2 {
  CertificateValidity: CertificateValidity;
  SupersededTemplates?: string[];
  PrivateKeyAttributes: PrivateKeyAttributesV2;
  PrivateKeyFlags: PrivateKeyFlagsV2;
  EnrollmentFlags: EnrollmentFlagsV2;
  SubjectNameFlags: SubjectNameFlagsV2;
  GeneralFlags: GeneralFlagsV2;
  Extensions: ExtensionsV2;
}
const TemplateV2 = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<TemplateV2>;
export type KeyUsagePropertyType = "ALL" | (string & {});
const KeyUsagePropertyType = S.String;

export interface KeyUsagePropertyFlags {
  Decrypt?: boolean;
  KeyAgreement?: boolean;
  Sign?: boolean;
}
const KeyUsagePropertyFlags = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<KeyUsagePropertyFlags>;
export type KeyUsageProperty =
  | { PropertyType: KeyUsagePropertyType; PropertyFlags?: never }
  | { PropertyType?: never; PropertyFlags: KeyUsagePropertyFlags };
const KeyUsageProperty = /*@__PURE__*/ __L.at(__c3, 0);
export type PrivateKeyAlgorithm = "RSA" | "ECDH_P256" | "ECDH_P384" | "ECDH_P521" | (string & {});
const PrivateKeyAlgorithm = S.String;

export interface PrivateKeyAttributesV3 {
  MinimalKeyLength: number;
  KeySpec: KeySpec;
  CryptoProviders?: string[];
  KeyUsageProperty: KeyUsageProperty;
  Algorithm: PrivateKeyAlgorithm;
}
const PrivateKeyAttributesV3 = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<PrivateKeyAttributesV3>;
export type ClientCompatibilityV3 =
  | "WINDOWS_SERVER_2008"
  | "WINDOWS_SERVER_2008_R2"
  | "WINDOWS_SERVER_2012"
  | "WINDOWS_SERVER_2012_R2"
  | "WINDOWS_SERVER_2016"
  | (string & {});
const ClientCompatibilityV3 = S.String;

export interface PrivateKeyFlagsV3 {
  ExportableKey?: boolean;
  StrongKeyProtectionRequired?: boolean;
  RequireAlternateSignatureAlgorithm?: boolean;
  ClientVersion: ClientCompatibilityV3;
}
const PrivateKeyFlagsV3 = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<PrivateKeyFlagsV3>;
export interface EnrollmentFlagsV3 {
  IncludeSymmetricAlgorithms?: boolean;
  UserInteractionRequired?: boolean;
  RemoveInvalidCertificateFromPersonalStore?: boolean;
  NoSecurityExtension?: boolean;
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean;
}
const EnrollmentFlagsV3 = EnrollmentFlagsV2 as any as S.Schema<EnrollmentFlagsV3>;
export interface SubjectNameFlagsV3 {
  SanRequireDomainDns?: boolean;
  SanRequireSpn?: boolean;
  SanRequireDirectoryGuid?: boolean;
  SanRequireUpn?: boolean;
  SanRequireEmail?: boolean;
  SanRequireDns?: boolean;
  RequireDnsAsCn?: boolean;
  RequireEmail?: boolean;
  RequireCommonName?: boolean;
  RequireDirectoryPath?: boolean;
}
const SubjectNameFlagsV3 = SubjectNameFlagsV2 as any as S.Schema<SubjectNameFlagsV3>;
export interface GeneralFlagsV3 {
  AutoEnrollment?: boolean;
  MachineType?: boolean;
}
const GeneralFlagsV3 = GeneralFlagsV2 as any as S.Schema<GeneralFlagsV3>;
export type HashAlgorithm = "SHA256" | "SHA384" | "SHA512" | (string & {});
const HashAlgorithm = S.String;

export interface ExtensionsV3 {
  KeyUsage: KeyUsage;
  ApplicationPolicies?: ApplicationPolicies;
}
const ExtensionsV3 = ExtensionsV2 as any as S.Schema<ExtensionsV3>;
export interface TemplateV3 {
  CertificateValidity: CertificateValidity;
  SupersededTemplates?: string[];
  PrivateKeyAttributes: PrivateKeyAttributesV3;
  PrivateKeyFlags: PrivateKeyFlagsV3;
  EnrollmentFlags: EnrollmentFlagsV3;
  SubjectNameFlags: SubjectNameFlagsV3;
  GeneralFlags: GeneralFlagsV3;
  HashAlgorithm: HashAlgorithm;
  Extensions: ExtensionsV3;
}
const TemplateV3 = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<TemplateV3>;
export interface PrivateKeyAttributesV4 {
  MinimalKeyLength: number;
  KeySpec: KeySpec;
  CryptoProviders?: string[];
  KeyUsageProperty?: KeyUsageProperty;
  Algorithm?: PrivateKeyAlgorithm;
}
const PrivateKeyAttributesV4 = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<PrivateKeyAttributesV4>;
export type ClientCompatibilityV4 =
  | "WINDOWS_SERVER_2012"
  | "WINDOWS_SERVER_2012_R2"
  | "WINDOWS_SERVER_2016"
  | (string & {});
const ClientCompatibilityV4 = S.String;

export interface PrivateKeyFlagsV4 {
  ExportableKey?: boolean;
  StrongKeyProtectionRequired?: boolean;
  RequireAlternateSignatureAlgorithm?: boolean;
  RequireSameKeyRenewal?: boolean;
  UseLegacyProvider?: boolean;
  ClientVersion: ClientCompatibilityV4;
}
const PrivateKeyFlagsV4 = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<PrivateKeyFlagsV4>;
export interface EnrollmentFlagsV4 {
  IncludeSymmetricAlgorithms?: boolean;
  UserInteractionRequired?: boolean;
  RemoveInvalidCertificateFromPersonalStore?: boolean;
  NoSecurityExtension?: boolean;
  EnableKeyReuseOnNtTokenKeysetStorageFull?: boolean;
}
const EnrollmentFlagsV4 = EnrollmentFlagsV2 as any as S.Schema<EnrollmentFlagsV4>;
export interface SubjectNameFlagsV4 {
  SanRequireDomainDns?: boolean;
  SanRequireSpn?: boolean;
  SanRequireDirectoryGuid?: boolean;
  SanRequireUpn?: boolean;
  SanRequireEmail?: boolean;
  SanRequireDns?: boolean;
  RequireDnsAsCn?: boolean;
  RequireEmail?: boolean;
  RequireCommonName?: boolean;
  RequireDirectoryPath?: boolean;
}
const SubjectNameFlagsV4 = SubjectNameFlagsV2 as any as S.Schema<SubjectNameFlagsV4>;
export interface GeneralFlagsV4 {
  AutoEnrollment?: boolean;
  MachineType?: boolean;
}
const GeneralFlagsV4 = GeneralFlagsV2 as any as S.Schema<GeneralFlagsV4>;
export interface ExtensionsV4 {
  KeyUsage: KeyUsage;
  ApplicationPolicies?: ApplicationPolicies;
}
const ExtensionsV4 = ExtensionsV2 as any as S.Schema<ExtensionsV4>;
export interface TemplateV4 {
  CertificateValidity: CertificateValidity;
  SupersededTemplates?: string[];
  PrivateKeyAttributes: PrivateKeyAttributesV4;
  PrivateKeyFlags: PrivateKeyFlagsV4;
  EnrollmentFlags: EnrollmentFlagsV4;
  SubjectNameFlags: SubjectNameFlagsV4;
  GeneralFlags: GeneralFlagsV4;
  HashAlgorithm?: HashAlgorithm;
  Extensions: ExtensionsV4;
}
const TemplateV4 = /*@__PURE__*/ __L.at(__c3, 6) as any as S.Schema<TemplateV4>;
export type TemplateDefinition =
  | { TemplateV2: TemplateV2; TemplateV3?: never; TemplateV4?: never }
  | { TemplateV2?: never; TemplateV3: TemplateV3; TemplateV4?: never }
  | { TemplateV2?: never; TemplateV3?: never; TemplateV4: TemplateV4 };
const TemplateDefinition = /*@__PURE__*/ __L.at(__c3, 7);
export interface CreateTemplateRequest {
  ConnectorArn: string;
  Name: string;
  Definition: TemplateDefinition;
  ClientToken?: string;
  Tags?: { [key: string]: string | undefined };
}
const CreateTemplateRequest = /*@__PURE__*/ __L.at(
  __c4,
  0,
) as any as S.Schema<CreateTemplateRequest>;
export type TemplateArn = string;
export interface CreateTemplateResponse {
  TemplateArn?: string;
}
const CreateTemplateResponse = /*@__PURE__*/ __L.at(
  __c4,
  1,
) as any as S.Schema<CreateTemplateResponse>;
export type GroupSecurityIdentifier = string;
export type DisplayName = string;
export type AccessRight = "ALLOW" | "DENY" | (string & {});
const AccessRight = S.String;

export interface AccessRights {
  Enroll?: AccessRight;
  AutoEnroll?: AccessRight;
}
const AccessRights = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<AccessRights>;
export interface CreateTemplateGroupAccessControlEntryRequest {
  TemplateArn: string;
  GroupSecurityIdentifier: string;
  GroupDisplayName: string;
  AccessRights: AccessRights;
  ClientToken?: string;
}
const CreateTemplateGroupAccessControlEntryRequest = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<CreateTemplateGroupAccessControlEntryRequest>;
export interface CreateTemplateGroupAccessControlEntryResponse {}
const CreateTemplateGroupAccessControlEntryResponse =
  CreateServicePrincipalNameResponse as any as S.Schema<CreateTemplateGroupAccessControlEntryResponse>;
export interface DeleteConnectorRequest {
  ConnectorArn: string;
}
const DeleteConnectorRequest = /*@__PURE__*/ __L.at(
  __c4,
  4,
) as any as S.Schema<DeleteConnectorRequest>;
export interface DeleteConnectorResponse {}
const DeleteConnectorResponse = /*@__PURE__*/ __L.at(
  __c4,
  5,
) as any as S.Schema<DeleteConnectorResponse>;
export interface DeleteDirectoryRegistrationRequest {
  DirectoryRegistrationArn: string;
}
const DeleteDirectoryRegistrationRequest = /*@__PURE__*/ __L.at(
  __c4,
  6,
) as any as S.Schema<DeleteDirectoryRegistrationRequest>;
export interface DeleteDirectoryRegistrationResponse {}
const DeleteDirectoryRegistrationResponse =
  CreateServicePrincipalNameResponse as any as S.Schema<DeleteDirectoryRegistrationResponse>;
export interface DeleteServicePrincipalNameRequest {
  DirectoryRegistrationArn: string;
  ConnectorArn: string;
}
const DeleteServicePrincipalNameRequest = /*@__PURE__*/ __L.at(
  __c4,
  7,
) as any as S.Schema<DeleteServicePrincipalNameRequest>;
export interface DeleteServicePrincipalNameResponse {}
const DeleteServicePrincipalNameResponse =
  CreateServicePrincipalNameResponse as any as S.Schema<DeleteServicePrincipalNameResponse>;
export interface DeleteTemplateRequest {
  TemplateArn: string;
}
const DeleteTemplateRequest = /*@__PURE__*/ __L.at(
  __c5,
  0,
) as any as S.Schema<DeleteTemplateRequest>;
export interface DeleteTemplateResponse {}
const DeleteTemplateResponse = DeleteConnectorResponse as any as S.Schema<DeleteTemplateResponse>;
export interface DeleteTemplateGroupAccessControlEntryRequest {
  TemplateArn: string;
  GroupSecurityIdentifier: string;
}
const DeleteTemplateGroupAccessControlEntryRequest = /*@__PURE__*/ __L.at(
  __c5,
  1,
) as any as S.Schema<DeleteTemplateGroupAccessControlEntryRequest>;
export interface DeleteTemplateGroupAccessControlEntryResponse {}
const DeleteTemplateGroupAccessControlEntryResponse =
  CreateServicePrincipalNameResponse as any as S.Schema<DeleteTemplateGroupAccessControlEntryResponse>;
export interface GetConnectorRequest {
  ConnectorArn: string;
}
const GetConnectorRequest = /*@__PURE__*/ __L.at(__c5, 2) as any as S.Schema<GetConnectorRequest>;
export type ConnectorStatus = "CREATING" | "ACTIVE" | "DELETING" | "FAILED" | (string & {});
const ConnectorStatus = S.String;

export type ConnectorStatusReason =
  | "CA_CERTIFICATE_REGISTRATION_FAILED"
  | "DIRECTORY_ACCESS_DENIED"
  | "INTERNAL_FAILURE"
  | "INSUFFICIENT_FREE_ADDRESSES"
  | "INVALID_SUBNET_IP_PROTOCOL"
  | "PRIVATECA_ACCESS_DENIED"
  | "PRIVATECA_RESOURCE_NOT_FOUND"
  | "SECURITY_GROUP_NOT_IN_VPC"
  | "VPC_ACCESS_DENIED"
  | "VPC_ENDPOINT_LIMIT_EXCEEDED"
  | "VPC_RESOURCE_NOT_FOUND"
  | (string & {});
const ConnectorStatusReason = S.String;

export interface Connector {
  Arn?: string;
  CertificateAuthorityArn?: string;
  CertificateEnrollmentPolicyServerEndpoint?: string;
  DirectoryId?: string;
  VpcInformation?: VpcInformation;
  Status?: ConnectorStatus;
  StatusReason?: ConnectorStatusReason;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
const Connector = /*@__PURE__*/ __L.at(__c5, 3) as any as S.Schema<Connector>;
export interface GetConnectorResponse {
  Connector?: Connector;
}
const GetConnectorResponse = /*@__PURE__*/ __L.at(__c5, 4) as any as S.Schema<GetConnectorResponse>;
export interface GetDirectoryRegistrationRequest {
  DirectoryRegistrationArn: string;
}
const GetDirectoryRegistrationRequest = /*@__PURE__*/ __L.at(
  __c5,
  5,
) as any as S.Schema<GetDirectoryRegistrationRequest>;
export type DirectoryRegistrationStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | (string & {});
const DirectoryRegistrationStatus = S.String;

export type DirectoryRegistrationStatusReason =
  | "DIRECTORY_ACCESS_DENIED"
  | "DIRECTORY_RESOURCE_NOT_FOUND"
  | "DIRECTORY_NOT_ACTIVE"
  | "DIRECTORY_NOT_REACHABLE"
  | "DIRECTORY_TYPE_NOT_SUPPORTED"
  | "INTERNAL_FAILURE"
  | (string & {});
const DirectoryRegistrationStatusReason = S.String;

export interface DirectoryRegistration {
  Arn?: string;
  DirectoryId?: string;
  Status?: DirectoryRegistrationStatus;
  StatusReason?: DirectoryRegistrationStatusReason;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
const DirectoryRegistration = /*@__PURE__*/ __L.at(
  __c5,
  6,
) as any as S.Schema<DirectoryRegistration>;
export interface GetDirectoryRegistrationResponse {
  DirectoryRegistration?: DirectoryRegistration;
}
const GetDirectoryRegistrationResponse = /*@__PURE__*/ __L.at(
  __c5,
  7,
) as any as S.Schema<GetDirectoryRegistrationResponse>;
export interface GetServicePrincipalNameRequest {
  DirectoryRegistrationArn: string;
  ConnectorArn: string;
}
const GetServicePrincipalNameRequest = /*@__PURE__*/ __L.at(
  __c6,
  0,
) as any as S.Schema<GetServicePrincipalNameRequest>;
export type ServicePrincipalNameStatus =
  | "CREATING"
  | "ACTIVE"
  | "DELETING"
  | "FAILED"
  | (string & {});
const ServicePrincipalNameStatus = S.String;

export type ServicePrincipalNameStatusReason =
  | "DIRECTORY_ACCESS_DENIED"
  | "DIRECTORY_NOT_REACHABLE"
  | "DIRECTORY_RESOURCE_NOT_FOUND"
  | "SPN_EXISTS_ON_DIFFERENT_AD_OBJECT"
  | "SPN_LIMIT_EXCEEDED"
  | "INTERNAL_FAILURE"
  | (string & {});
const ServicePrincipalNameStatusReason = S.String;

export interface ServicePrincipalName {
  DirectoryRegistrationArn?: string;
  ConnectorArn?: string;
  Status?: ServicePrincipalNameStatus;
  StatusReason?: ServicePrincipalNameStatusReason;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
const ServicePrincipalName = /*@__PURE__*/ __L.at(__c6, 1) as any as S.Schema<ServicePrincipalName>;
export interface GetServicePrincipalNameResponse {
  ServicePrincipalName?: ServicePrincipalName;
}
const GetServicePrincipalNameResponse = /*@__PURE__*/ __L.at(
  __c6,
  2,
) as any as S.Schema<GetServicePrincipalNameResponse>;
export interface GetTemplateRequest {
  TemplateArn: string;
}
const GetTemplateRequest = /*@__PURE__*/ __L.at(__c6, 3) as any as S.Schema<GetTemplateRequest>;
export type TemplateStatus = "ACTIVE" | "DELETING" | (string & {});
const TemplateStatus = S.String;

export interface TemplateRevision {
  MajorRevision: number;
  MinorRevision: number;
}
const TemplateRevision = /*@__PURE__*/ __L.at(__c6, 4) as any as S.Schema<TemplateRevision>;
export interface Template {
  Arn?: string;
  ConnectorArn?: string;
  Definition?: TemplateDefinition;
  Name?: string;
  ObjectIdentifier?: string;
  PolicySchema?: number;
  Status?: TemplateStatus;
  Revision?: TemplateRevision;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
const Template = /*@__PURE__*/ __L.at(__c6, 5) as any as S.Schema<Template>;
export interface GetTemplateResponse {
  Template?: Template;
}
const GetTemplateResponse = /*@__PURE__*/ __L.at(__c6, 6) as any as S.Schema<GetTemplateResponse>;
export interface GetTemplateGroupAccessControlEntryRequest {
  TemplateArn: string;
  GroupSecurityIdentifier: string;
}
const GetTemplateGroupAccessControlEntryRequest = /*@__PURE__*/ __L.at(
  __c6,
  7,
) as any as S.Schema<GetTemplateGroupAccessControlEntryRequest>;
export interface AccessControlEntry {
  GroupDisplayName?: string;
  GroupSecurityIdentifier?: string;
  AccessRights?: AccessRights;
  TemplateArn?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
const AccessControlEntry = /*@__PURE__*/ __L.at(__c7, 0) as any as S.Schema<AccessControlEntry>;
export interface GetTemplateGroupAccessControlEntryResponse {
  AccessControlEntry?: AccessControlEntry;
}
const GetTemplateGroupAccessControlEntryResponse = /*@__PURE__*/ __L.at(
  __c7,
  1,
) as any as S.Schema<GetTemplateGroupAccessControlEntryResponse>;
export type MaxResults = number;
export type NextToken = string;
export interface ListConnectorsRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListConnectorsRequest = /*@__PURE__*/ __L.at(
  __c7,
  2,
) as any as S.Schema<ListConnectorsRequest>;
export interface ConnectorSummary {
  Arn?: string;
  CertificateAuthorityArn?: string;
  CertificateEnrollmentPolicyServerEndpoint?: string;
  DirectoryId?: string;
  VpcInformation?: VpcInformation;
  Status?: ConnectorStatus;
  StatusReason?: ConnectorStatusReason;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
const ConnectorSummary = Connector as any as S.Schema<ConnectorSummary>;
export type ConnectorList = ConnectorSummary[];
const ConnectorList = /*@__PURE__*/ __L.at(__c7, 3);
export interface ListConnectorsResponse {
  Connectors?: ConnectorSummary[];
  NextToken?: string;
}
const ListConnectorsResponse = /*@__PURE__*/ __L.at(
  __c7,
  4,
) as any as S.Schema<ListConnectorsResponse>;
export interface ListDirectoryRegistrationsRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListDirectoryRegistrationsRequest = /*@__PURE__*/ __L.at(
  __c7,
  5,
) as any as S.Schema<ListDirectoryRegistrationsRequest>;
export interface DirectoryRegistrationSummary {
  Arn?: string;
  DirectoryId?: string;
  Status?: DirectoryRegistrationStatus;
  StatusReason?: DirectoryRegistrationStatusReason;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
const DirectoryRegistrationSummary = /*@__PURE__*/ __L.at(
  __c7,
  6,
) as any as S.Schema<DirectoryRegistrationSummary>;
export type DirectoryRegistrationList = DirectoryRegistrationSummary[];
const DirectoryRegistrationList = /*@__PURE__*/ __L.at(__c7, 7);
export interface ListDirectoryRegistrationsResponse {
  DirectoryRegistrations?: DirectoryRegistrationSummary[];
  NextToken?: string;
}
const ListDirectoryRegistrationsResponse = /*@__PURE__*/ __L.at(
  __c8,
  0,
) as any as S.Schema<ListDirectoryRegistrationsResponse>;
export interface ListServicePrincipalNamesRequest {
  MaxResults?: number;
  NextToken?: string;
  DirectoryRegistrationArn: string;
}
const ListServicePrincipalNamesRequest = /*@__PURE__*/ __L.at(
  __c8,
  1,
) as any as S.Schema<ListServicePrincipalNamesRequest>;
export interface ServicePrincipalNameSummary {
  DirectoryRegistrationArn?: string;
  ConnectorArn?: string;
  Status?: ServicePrincipalNameStatus;
  StatusReason?: ServicePrincipalNameStatusReason;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
const ServicePrincipalNameSummary = /*@__PURE__*/ __L.at(
  __c8,
  2,
) as any as S.Schema<ServicePrincipalNameSummary>;
export type ServicePrincipalNameList = ServicePrincipalNameSummary[];
const ServicePrincipalNameList = /*@__PURE__*/ __L.at(__c8, 3);
export interface ListServicePrincipalNamesResponse {
  ServicePrincipalNames?: ServicePrincipalNameSummary[];
  NextToken?: string;
}
const ListServicePrincipalNamesResponse = /*@__PURE__*/ __L.at(
  __c8,
  4,
) as any as S.Schema<ListServicePrincipalNamesResponse>;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c8,
  5,
) as any as S.Schema<ListTagsForResourceRequest>;
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c8,
  6,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface ListTemplateGroupAccessControlEntriesRequest {
  MaxResults?: number;
  NextToken?: string;
  TemplateArn: string;
}
const ListTemplateGroupAccessControlEntriesRequest = /*@__PURE__*/ __L.at(
  __c8,
  7,
) as any as S.Schema<ListTemplateGroupAccessControlEntriesRequest>;
export interface AccessControlEntrySummary {
  GroupDisplayName?: string;
  GroupSecurityIdentifier?: string;
  AccessRights?: AccessRights;
  TemplateArn?: string;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
const AccessControlEntrySummary = /*@__PURE__*/ __L.at(
  __c9,
  0,
) as any as S.Schema<AccessControlEntrySummary>;
export type AccessControlEntryList = AccessControlEntrySummary[];
const AccessControlEntryList = /*@__PURE__*/ __L.at(__c9, 1);
export interface ListTemplateGroupAccessControlEntriesResponse {
  AccessControlEntries?: AccessControlEntrySummary[];
  NextToken?: string;
}
const ListTemplateGroupAccessControlEntriesResponse = /*@__PURE__*/ __L.at(
  __c9,
  2,
) as any as S.Schema<ListTemplateGroupAccessControlEntriesResponse>;
export interface ListTemplatesRequest {
  MaxResults?: number;
  NextToken?: string;
  ConnectorArn: string;
}
const ListTemplatesRequest = /*@__PURE__*/ __L.at(__c9, 3) as any as S.Schema<ListTemplatesRequest>;
export interface TemplateSummary {
  Arn?: string;
  ConnectorArn?: string;
  Definition?: TemplateDefinition;
  Name?: string;
  ObjectIdentifier?: string;
  PolicySchema?: number;
  Status?: TemplateStatus;
  Revision?: TemplateRevision;
  CreatedAt?: Date;
  UpdatedAt?: Date;
}
const TemplateSummary = Template as any as S.Schema<TemplateSummary>;
export type TemplateList = TemplateSummary[];
const TemplateList = /*@__PURE__*/ __L.at(__c9, 4);
export interface ListTemplatesResponse {
  Templates?: TemplateSummary[];
  NextToken?: string;
}
const ListTemplatesResponse = /*@__PURE__*/ __L.at(
  __c9,
  5,
) as any as S.Schema<ListTemplatesResponse>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c9, 6) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = DeleteConnectorResponse as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = SecurityGroupIdList as any as S.Schema<TagKeyList>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c9, 7) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = DeleteConnectorResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateTemplateRequest {
  TemplateArn: string;
  Definition?: TemplateDefinition;
  ReenrollAllCertificateHolders?: boolean;
}
const UpdateTemplateRequest = /*@__PURE__*/ __L.at(
  __c10,
  0,
) as any as S.Schema<UpdateTemplateRequest>;
export interface UpdateTemplateResponse {}
const UpdateTemplateResponse = DeleteConnectorResponse as any as S.Schema<UpdateTemplateResponse>;
export interface UpdateTemplateGroupAccessControlEntryRequest {
  TemplateArn: string;
  GroupSecurityIdentifier: string;
  GroupDisplayName?: string;
  AccessRights?: AccessRights;
}
const UpdateTemplateGroupAccessControlEntryRequest = /*@__PURE__*/ __L.at(
  __c10,
  1,
) as any as S.Schema<UpdateTemplateGroupAccessControlEntryRequest>;
export interface UpdateTemplateGroupAccessControlEntryResponse {}
const UpdateTemplateGroupAccessControlEntryResponse =
  CreateServicePrincipalNameResponse as any as S.Schema<UpdateTemplateGroupAccessControlEntryResponse>;
export type ValidationExceptionReason =
  | "FIELD_VALIDATION_FAILED"
  | "INVALID_CA_SUBJECT"
  | "INVALID_PERMISSION"
  | "INVALID_STATE"
  | "MISMATCHED_CONNECTOR"
  | "MISMATCHED_VPC"
  | "NO_CLIENT_TOKEN"
  | "UNKNOWN_OPERATION"
  | "OTHER"
  | (string & {});
const ValidationExceptionReason = S.String;

export type CreateConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a connector between Amazon Web Services Private CA and an Active Directory. You must specify the private CA,
 * directory ID, and security groups.
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
    ResourceNotFoundException,
    ServiceQuotaExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateConnector",
}));

export type CreateDirectoryRegistrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a directory registration that authorizes communication between Amazon Web Services Private CA and an
 * Active Directory
 */
export const createDirectoryRegistration: API.OperationMethod<
  CreateDirectoryRegistrationRequest,
  CreateDirectoryRegistrationResponse,
  CreateDirectoryRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDirectoryRegistrationRequest,
  output: CreateDirectoryRegistrationResponse,
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
  operationName: "CreateDirectoryRegistration",
}));

export type CreateServicePrincipalNameError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a service principal name (SPN) for the service account in Active Directory. Kerberos
 * authentication uses SPNs to associate a service instance with a service sign-in
 * account.
 */
export const createServicePrincipalName: API.OperationMethod<
  CreateServicePrincipalNameRequest,
  CreateServicePrincipalNameResponse,
  CreateServicePrincipalNameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateServicePrincipalNameRequest,
  output: CreateServicePrincipalNameResponse,
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
  operationName: "CreateServicePrincipalName",
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
 * Creates an Active Directory compatible certificate template. The connectors issues certificates
 * using these templates based on the requester's Active Directory group membership.
 */
export const createTemplate: API.OperationMethod<
  CreateTemplateRequest,
  CreateTemplateResponse,
  CreateTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTemplateRequest,
  output: CreateTemplateResponse,
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

export type CreateTemplateGroupAccessControlEntryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Create a group access control entry. Allow or deny Active Directory groups from enrolling and/or
 * autoenrolling with the template based on the group security identifiers (SIDs).
 */
export const createTemplateGroupAccessControlEntry: API.OperationMethod<
  CreateTemplateGroupAccessControlEntryRequest,
  CreateTemplateGroupAccessControlEntryResponse,
  CreateTemplateGroupAccessControlEntryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateTemplateGroupAccessControlEntryRequest,
  output: CreateTemplateGroupAccessControlEntryResponse,
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
  operationName: "CreateTemplateGroupAccessControlEntry",
}));

export type DeleteConnectorError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a connector for Active Directory. You must provide the Amazon Resource Name (ARN) of the
 * connector that you want to delete. You can find the ARN by calling the https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_ListConnectors
 * action. Deleting a connector does not deregister your directory with Amazon Web Services Private CA. You can
 * deregister your directory by calling the https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_DeleteDirectoryRegistration
 * action.
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
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteConnector",
}));

export type DeleteDirectoryRegistrationError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a directory registration. Deleting a directory registration deauthorizes
 * Amazon Web Services Private CA with the directory.
 */
export const deleteDirectoryRegistration: API.OperationMethod<
  DeleteDirectoryRegistrationRequest,
  DeleteDirectoryRegistrationResponse,
  DeleteDirectoryRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDirectoryRegistrationRequest,
  output: DeleteDirectoryRegistrationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDirectoryRegistration",
}));

export type DeleteServicePrincipalNameError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the service principal name (SPN) used by a connector to authenticate with your
 * Active Directory.
 */
export const deleteServicePrincipalName: API.OperationMethod<
  DeleteServicePrincipalNameRequest,
  DeleteServicePrincipalNameResponse,
  DeleteServicePrincipalNameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteServicePrincipalNameRequest,
  output: DeleteServicePrincipalNameResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteServicePrincipalName",
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
 * Deletes a template. Certificates issued using the template are still valid until they
 * are revoked or expired.
 */
export const deleteTemplate: API.OperationMethod<
  DeleteTemplateRequest,
  DeleteTemplateResponse,
  DeleteTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTemplateRequest,
  output: DeleteTemplateResponse,
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

export type DeleteTemplateGroupAccessControlEntryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a group access control entry.
 */
export const deleteTemplateGroupAccessControlEntry: API.OperationMethod<
  DeleteTemplateGroupAccessControlEntryRequest,
  DeleteTemplateGroupAccessControlEntryResponse,
  DeleteTemplateGroupAccessControlEntryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteTemplateGroupAccessControlEntryRequest,
  output: DeleteTemplateGroupAccessControlEntryResponse,
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
  operationName: "DeleteTemplateGroupAccessControlEntry",
}));

export type GetConnectorError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists information about your connector. You specify the connector on input by its ARN
 * (Amazon Resource Name).
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
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetConnector",
}));

export type GetDirectoryRegistrationError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * A structure that contains information about your directory registration.
 */
export const getDirectoryRegistration: API.OperationMethod<
  GetDirectoryRegistrationRequest,
  GetDirectoryRegistrationResponse,
  GetDirectoryRegistrationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetDirectoryRegistrationRequest,
  output: GetDirectoryRegistrationResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDirectoryRegistration",
}));

export type GetServicePrincipalNameError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the service principal name that the connector uses to authenticate with
 * Active Directory.
 */
export const getServicePrincipalName: API.OperationMethod<
  GetServicePrincipalNameRequest,
  GetServicePrincipalNameResponse,
  GetServicePrincipalNameError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetServicePrincipalNameRequest,
  output: GetServicePrincipalNameResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetServicePrincipalName",
}));

export type GetTemplateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a certificate template that the connector uses to issue certificates from a
 * private CA.
 */
export const getTemplate: API.OperationMethod<
  GetTemplateRequest,
  GetTemplateResponse,
  GetTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTemplateRequest,
  output: GetTemplateResponse,
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

export type GetTemplateGroupAccessControlEntryError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves the group access control entries for a template.
 */
export const getTemplateGroupAccessControlEntry: API.OperationMethod<
  GetTemplateGroupAccessControlEntryRequest,
  GetTemplateGroupAccessControlEntryResponse,
  GetTemplateGroupAccessControlEntryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetTemplateGroupAccessControlEntryRequest,
  output: GetTemplateGroupAccessControlEntryResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTemplateGroupAccessControlEntry",
}));

export type ListConnectorsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the connectors that you created by using the https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateConnector action.
 */
export const listConnectors: API.PaginatedOperationMethod<
  ListConnectorsRequest,
  ListConnectorsResponse,
  ListConnectorsError,
  Credentials | HttpClient.HttpClient,
  ConnectorSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListConnectorsRequest,
  output: ListConnectorsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListConnectors",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Connectors",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListDirectoryRegistrationsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the directory registrations that you created by using the https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateDirectoryRegistration
 * action.
 */
export const listDirectoryRegistrations: API.PaginatedOperationMethod<
  ListDirectoryRegistrationsRequest,
  ListDirectoryRegistrationsResponse,
  ListDirectoryRegistrationsError,
  Credentials | HttpClient.HttpClient,
  DirectoryRegistrationSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDirectoryRegistrationsRequest,
  output: ListDirectoryRegistrationsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDirectoryRegistrations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "DirectoryRegistrations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListServicePrincipalNamesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the service principal names that the connector uses to authenticate with
 * Active Directory.
 */
export const listServicePrincipalNames: API.PaginatedOperationMethod<
  ListServicePrincipalNamesRequest,
  ListServicePrincipalNamesResponse,
  ListServicePrincipalNamesError,
  Credentials | HttpClient.HttpClient,
  ServicePrincipalNameSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListServicePrincipalNamesRequest,
  output: ListServicePrincipalNamesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListServicePrincipalNames",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ServicePrincipalNames",
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
 * Lists the tags, if any, that are associated with your resource.
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
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type ListTemplateGroupAccessControlEntriesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists group access control entries you created.
 */
export const listTemplateGroupAccessControlEntries: API.PaginatedOperationMethod<
  ListTemplateGroupAccessControlEntriesRequest,
  ListTemplateGroupAccessControlEntriesResponse,
  ListTemplateGroupAccessControlEntriesError,
  Credentials | HttpClient.HttpClient,
  AccessControlEntrySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTemplateGroupAccessControlEntriesRequest,
  output: ListTemplateGroupAccessControlEntriesResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTemplateGroupAccessControlEntries",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "AccessControlEntries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTemplatesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the templates, if any, that are associated with a connector.
 */
export const listTemplates: API.PaginatedOperationMethod<
  ListTemplatesRequest,
  ListTemplatesResponse,
  ListTemplatesError,
  Credentials | HttpClient.HttpClient,
  TemplateSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListTemplatesRequest,
  output: ListTemplatesResponse,
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
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Templates",
    pageSize: "MaxResults",
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
 * Adds one or more tags to your resource.
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
 * Removes one or more tags from your resource.
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
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateTemplateError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update template configuration to define the information included in certificates.
 */
export const updateTemplate: API.OperationMethod<
  UpdateTemplateRequest,
  UpdateTemplateResponse,
  UpdateTemplateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateTemplateRequest,
  output: UpdateTemplateResponse,
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
  operationName: "UpdateTemplate",
}));

export type UpdateTemplateGroupAccessControlEntryError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Update a group access control entry you created using CreateTemplateGroupAccessControlEntry.
 */
export const updateTemplateGroupAccessControlEntry: API.OperationMethod<
  UpdateTemplateGroupAccessControlEntryRequest,
  UpdateTemplateGroupAccessControlEntryResponse,
  UpdateTemplateGroupAccessControlEntryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateTemplateGroupAccessControlEntryRequest,
  output: UpdateTemplateGroupAccessControlEntryResponse,
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
  operationName: "UpdateTemplateGroupAccessControlEntry",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          IpAddressType: S.optional(IpAddressType),
          SecurityGroupIds: SecurityGroupIdList,
        }),
      ).annotate({ identifier: "VpcInformation" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          CertificateAuthorityArn: S.String,
          VpcInformation: VpcInformation,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(Tags),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/connectors" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateConnectorRequest" });
    case 4:
      return S.suspend(() => S.Struct({ ConnectorArn: S.optional(S.String) })).annotate({
        identifier: "CreateConnectorResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DirectoryId: S.String,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(Tags),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/directoryRegistrations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDirectoryRegistrationRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ DirectoryRegistrationArn: S.optional(S.String) })).annotate(
        {
          identifier: "CreateDirectoryRegistrationResponse",
        },
      );
    case 7:
      return S.suspend(() =>
        S.Struct({
          DirectoryRegistrationArn: S.String.pipe(T.HttpLabel("DirectoryRegistrationArn")),
          ConnectorArn: S.String.pipe(T.HttpLabel("ConnectorArn")),
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames/{ConnectorArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateServicePrincipalNameRequest",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "CreateServicePrincipalNameResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ PeriodType: ValidityPeriodType, Period: S.Number }),
      ).annotate({ identifier: "ValidityPeriod" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ValidityPeriod: ValidityPeriod, RenewalPeriod: ValidityPeriod }),
      ).annotate({ identifier: "CertificateValidity" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MinimalKeyLength: S.Number,
          KeySpec: KeySpec,
          CryptoProviders: S.optional(CryptoProvidersList),
        }),
      ).annotate({ identifier: "PrivateKeyAttributesV2" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ExportableKey: S.optional(S.Boolean),
          StrongKeyProtectionRequired: S.optional(S.Boolean),
          ClientVersion: ClientCompatibilityV2,
        }),
      ).annotate({ identifier: "PrivateKeyFlagsV2" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          IncludeSymmetricAlgorithms: S.optional(S.Boolean),
          UserInteractionRequired: S.optional(S.Boolean),
          RemoveInvalidCertificateFromPersonalStore: S.optional(S.Boolean),
          NoSecurityExtension: S.optional(S.Boolean),
          EnableKeyReuseOnNtTokenKeysetStorageFull: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "EnrollmentFlagsV2" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          SanRequireDomainDns: S.optional(S.Boolean),
          SanRequireSpn: S.optional(S.Boolean),
          SanRequireDirectoryGuid: S.optional(S.Boolean),
          SanRequireUpn: S.optional(S.Boolean),
          SanRequireEmail: S.optional(S.Boolean),
          SanRequireDns: S.optional(S.Boolean),
          RequireDnsAsCn: S.optional(S.Boolean),
          RequireEmail: S.optional(S.Boolean),
          RequireCommonName: S.optional(S.Boolean),
          RequireDirectoryPath: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "SubjectNameFlagsV2" });
    case 7:
      return S.suspend(() =>
        S.Struct({ AutoEnrollment: S.optional(S.Boolean), MachineType: S.optional(S.Boolean) }),
      ).annotate({ identifier: "GeneralFlagsV2" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DigitalSignature: S.optional(S.Boolean),
          NonRepudiation: S.optional(S.Boolean),
          KeyEncipherment: S.optional(S.Boolean),
          DataEncipherment: S.optional(S.Boolean),
          KeyAgreement: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "KeyUsageFlags" });
    case 1:
      return S.suspend(() =>
        S.Struct({ Critical: S.optional(S.Boolean), UsageFlags: KeyUsageFlags }),
      ).annotate({ identifier: "KeyUsage" });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ PolicyType: ApplicationPolicyType }),
        /*@__PURE__*/ S.Struct({ PolicyObjectIdentifier: S.String }),
      ]);
    case 3:
      return S.Array(ApplicationPolicy);
    case 4:
      return S.suspend(() =>
        S.Struct({ Critical: S.optional(S.Boolean), Policies: ApplicationPolicyList }),
      ).annotate({ identifier: "ApplicationPolicies" });
    case 5:
      return S.suspend(() =>
        S.Struct({ KeyUsage: KeyUsage, ApplicationPolicies: S.optional(ApplicationPolicies) }),
      ).annotate({ identifier: "ExtensionsV2" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CertificateValidity: CertificateValidity,
          SupersededTemplates: S.optional(TemplateNameList),
          PrivateKeyAttributes: PrivateKeyAttributesV2,
          PrivateKeyFlags: PrivateKeyFlagsV2,
          EnrollmentFlags: EnrollmentFlagsV2,
          SubjectNameFlags: SubjectNameFlagsV2,
          GeneralFlags: GeneralFlagsV2,
          Extensions: ExtensionsV2,
        }),
      ).annotate({ identifier: "TemplateV2" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Decrypt: S.optional(S.Boolean),
          KeyAgreement: S.optional(S.Boolean),
          Sign: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "KeyUsagePropertyFlags" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ PropertyType: KeyUsagePropertyType }),
        /*@__PURE__*/ S.Struct({ PropertyFlags: KeyUsagePropertyFlags }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          MinimalKeyLength: S.Number,
          KeySpec: KeySpec,
          CryptoProviders: S.optional(CryptoProvidersList),
          KeyUsageProperty: KeyUsageProperty,
          Algorithm: PrivateKeyAlgorithm,
        }),
      ).annotate({ identifier: "PrivateKeyAttributesV3" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ExportableKey: S.optional(S.Boolean),
          StrongKeyProtectionRequired: S.optional(S.Boolean),
          RequireAlternateSignatureAlgorithm: S.optional(S.Boolean),
          ClientVersion: ClientCompatibilityV3,
        }),
      ).annotate({ identifier: "PrivateKeyFlagsV3" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CertificateValidity: CertificateValidity,
          SupersededTemplates: S.optional(TemplateNameList),
          PrivateKeyAttributes: PrivateKeyAttributesV3,
          PrivateKeyFlags: PrivateKeyFlagsV3,
          EnrollmentFlags: EnrollmentFlagsV3,
          SubjectNameFlags: SubjectNameFlagsV3,
          GeneralFlags: GeneralFlagsV3,
          HashAlgorithm: HashAlgorithm,
          Extensions: ExtensionsV3,
        }),
      ).annotate({ identifier: "TemplateV3" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          MinimalKeyLength: S.Number,
          KeySpec: KeySpec,
          CryptoProviders: S.optional(CryptoProvidersList),
          KeyUsageProperty: S.optional(KeyUsageProperty),
          Algorithm: S.optional(PrivateKeyAlgorithm),
        }),
      ).annotate({ identifier: "PrivateKeyAttributesV4" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ExportableKey: S.optional(S.Boolean),
          StrongKeyProtectionRequired: S.optional(S.Boolean),
          RequireAlternateSignatureAlgorithm: S.optional(S.Boolean),
          RequireSameKeyRenewal: S.optional(S.Boolean),
          UseLegacyProvider: S.optional(S.Boolean),
          ClientVersion: ClientCompatibilityV4,
        }),
      ).annotate({ identifier: "PrivateKeyFlagsV4" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CertificateValidity: CertificateValidity,
          SupersededTemplates: S.optional(TemplateNameList),
          PrivateKeyAttributes: PrivateKeyAttributesV4,
          PrivateKeyFlags: PrivateKeyFlagsV4,
          EnrollmentFlags: EnrollmentFlagsV4,
          SubjectNameFlags: SubjectNameFlagsV4,
          GeneralFlags: GeneralFlagsV4,
          HashAlgorithm: S.optional(HashAlgorithm),
          Extensions: ExtensionsV4,
        }),
      ).annotate({ identifier: "TemplateV4" });
    case 7:
      return S.Union([
        /*@__PURE__*/ S.Struct({ TemplateV2: TemplateV2 }),
        /*@__PURE__*/ S.Struct({ TemplateV3: TemplateV3 }),
        /*@__PURE__*/ S.Struct({ TemplateV4: TemplateV4 }),
      ]);
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ConnectorArn: S.String,
          Name: S.String,
          Definition: TemplateDefinition,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          Tags: S.optional(Tags),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/templates" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateTemplateRequest" });
    case 1:
      return S.suspend(() => S.Struct({ TemplateArn: S.optional(S.String) })).annotate({
        identifier: "CreateTemplateResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ Enroll: S.optional(AccessRight), AutoEnroll: S.optional(AccessRight) }),
      ).annotate({ identifier: "AccessRights" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
          GroupSecurityIdentifier: S.String,
          GroupDisplayName: S.String,
          AccessRights: AccessRights,
          ClientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/templates/{TemplateArn}/accessControlEntries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateTemplateGroupAccessControlEntryRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ConnectorArn: S.String.pipe(T.HttpLabel("ConnectorArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/connectors/{ConnectorArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteConnectorRequest" });
    case 5:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteConnectorResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DirectoryRegistrationArn: S.String.pipe(T.HttpLabel("DirectoryRegistrationArn")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/directoryRegistrations/{DirectoryRegistrationArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDirectoryRegistrationRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DirectoryRegistrationArn: S.String.pipe(T.HttpLabel("DirectoryRegistrationArn")),
          ConnectorArn: S.String.pipe(T.HttpLabel("ConnectorArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames/{ConnectorArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteServicePrincipalNameRequest",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/templates/{TemplateArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTemplateRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
          GroupSecurityIdentifier: S.String.pipe(T.HttpLabel("GroupSecurityIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/templates/{TemplateArn}/accessControlEntries/{GroupSecurityIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteTemplateGroupAccessControlEntryRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ ConnectorArn: S.String.pipe(T.HttpLabel("ConnectorArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/connectors/{ConnectorArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetConnectorRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          CertificateAuthorityArn: S.optional(S.String),
          CertificateEnrollmentPolicyServerEndpoint: S.optional(S.String),
          DirectoryId: S.optional(S.String),
          VpcInformation: S.optional(VpcInformation),
          Status: S.optional(ConnectorStatus),
          StatusReason: S.optional(ConnectorStatusReason),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Connector" });
    case 4:
      return S.suspend(() => S.Struct({ Connector: S.optional(Connector) })).annotate({
        identifier: "GetConnectorResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DirectoryRegistrationArn: S.String.pipe(T.HttpLabel("DirectoryRegistrationArn")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/directoryRegistrations/{DirectoryRegistrationArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDirectoryRegistrationRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          DirectoryId: S.optional(S.String),
          Status: S.optional(DirectoryRegistrationStatus),
          StatusReason: S.optional(DirectoryRegistrationStatusReason),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "DirectoryRegistration" });
    case 7:
      return S.suspend(() =>
        S.Struct({ DirectoryRegistration: S.optional(DirectoryRegistration) }),
      ).annotate({
        identifier: "GetDirectoryRegistrationResponse",
      });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DirectoryRegistrationArn: S.String.pipe(T.HttpLabel("DirectoryRegistrationArn")),
          ConnectorArn: S.String.pipe(T.HttpLabel("ConnectorArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames/{ConnectorArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetServicePrincipalNameRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          DirectoryRegistrationArn: S.optional(S.String),
          ConnectorArn: S.optional(S.String),
          Status: S.optional(ServicePrincipalNameStatus),
          StatusReason: S.optional(ServicePrincipalNameStatusReason),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ServicePrincipalName" });
    case 2:
      return S.suspend(() =>
        S.Struct({ ServicePrincipalName: S.optional(ServicePrincipalName) }),
      ).annotate({
        identifier: "GetServicePrincipalNameResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/templates/{TemplateArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetTemplateRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ MajorRevision: S.Number, MinorRevision: S.Number }),
      ).annotate({ identifier: "TemplateRevision" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          ConnectorArn: S.optional(S.String),
          Definition: S.optional(TemplateDefinition),
          Name: S.optional(S.String),
          ObjectIdentifier: S.optional(S.String),
          PolicySchema: S.optional(S.Number),
          Status: S.optional(TemplateStatus),
          Revision: S.optional(TemplateRevision),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Template" });
    case 6:
      return S.suspend(() => S.Struct({ Template: S.optional(Template) })).annotate({
        identifier: "GetTemplateResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
          GroupSecurityIdentifier: S.String.pipe(T.HttpLabel("GroupSecurityIdentifier")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/templates/{TemplateArn}/accessControlEntries/{GroupSecurityIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTemplateGroupAccessControlEntryRequest",
      });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GroupDisplayName: S.optional(S.String),
          GroupSecurityIdentifier: S.optional(S.String),
          AccessRights: S.optional(AccessRights),
          TemplateArn: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "AccessControlEntry" });
    case 1:
      return S.suspend(() =>
        S.Struct({ AccessControlEntry: S.optional(AccessControlEntry) }),
      ).annotate({
        identifier: "GetTemplateGroupAccessControlEntryResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/connectors" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListConnectorsRequest" });
    case 3:
      return S.Array(ConnectorSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({ Connectors: S.optional(ConnectorList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListConnectorsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/directoryRegistrations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDirectoryRegistrationsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Arn: S.optional(S.String),
          DirectoryId: S.optional(S.String),
          Status: S.optional(DirectoryRegistrationStatus),
          StatusReason: S.optional(DirectoryRegistrationStatusReason),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DirectoryRegistrationSummary",
      });
    case 7:
      return S.Array(DirectoryRegistrationSummary);
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          DirectoryRegistrations: S.optional(DirectoryRegistrationList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDirectoryRegistrationsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          DirectoryRegistrationArn: S.String.pipe(T.HttpLabel("DirectoryRegistrationArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/directoryRegistrations/{DirectoryRegistrationArn}/servicePrincipalNames",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListServicePrincipalNamesRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          DirectoryRegistrationArn: S.optional(S.String),
          ConnectorArn: S.optional(S.String),
          Status: S.optional(ServicePrincipalNameStatus),
          StatusReason: S.optional(ServicePrincipalNameStatusReason),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "ServicePrincipalNameSummary",
      });
    case 3:
      return S.Array(ServicePrincipalNameSummary);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ServicePrincipalNames: S.optional(ServicePrincipalNameList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListServicePrincipalNamesResponse",
      });
    case 5:
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
    case 6:
      return S.suspend(() => S.Struct({ Tags: S.optional(Tags) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/templates/{TemplateArn}/accessControlEntries" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTemplateGroupAccessControlEntriesRequest",
      });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          GroupDisplayName: S.optional(S.String),
          GroupSecurityIdentifier: S.optional(S.String),
          AccessRights: S.optional(AccessRights),
          TemplateArn: S.optional(S.String),
          CreatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          UpdatedAt: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "AccessControlEntrySummary",
      });
    case 1:
      return S.Array(AccessControlEntrySummary);
    case 2:
      return S.suspend(() =>
        S.Struct({
          AccessControlEntries: S.optional(AccessControlEntryList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTemplateGroupAccessControlEntriesResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("MaxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("NextToken")),
          ConnectorArn: S.String.pipe(T.HttpQuery("ConnectorArn")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/templates" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListTemplatesRequest" });
    case 4:
      return S.Array(TemplateSummary);
    case 5:
      return S.suspend(() =>
        S.Struct({ Templates: S.optional(TemplateList), NextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListTemplatesResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")), Tags: Tags }).pipe(
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
    case 7:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          TagKeys: TagKeyList.pipe(T.HttpQuery("tagKeys")),
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
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
          Definition: S.optional(TemplateDefinition),
          ReenrollAllCertificateHolders: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/templates/{TemplateArn}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateTemplateRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          TemplateArn: S.String.pipe(T.HttpLabel("TemplateArn")),
          GroupSecurityIdentifier: S.String.pipe(T.HttpLabel("GroupSecurityIdentifier")),
          GroupDisplayName: S.optional(S.String),
          AccessRights: S.optional(AccessRights),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/templates/{TemplateArn}/accessControlEntries/{GroupSecurityIdentifier}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateTemplateGroupAccessControlEntryRequest",
      });
  }
}
