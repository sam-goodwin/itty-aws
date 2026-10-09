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
  sdkId: "WorkSpaces Web",
  serviceShapeName: "AWSErmineControlPlaneService",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "workspaces-web" });
const ver = /*@__PURE__*/ T.ServiceVersion("2020-07-08");
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
              `https://workspaces-web-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://workspaces-web-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://workspaces-web.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://workspaces-web.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
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
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ServiceQuotaExceededException
  extends /*@__PURE__*/ S.TaggedError<ServiceQuotaExceededException>()(
    "ServiceQuotaExceededException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      resourceId: /*@__PURE__*/ S.optional(S.String),
      resourceType: /*@__PURE__*/ S.optional(S.String),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(402),
  ).pipe(C.withQuotaError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      serviceCode: /*@__PURE__*/ S.optional(S.String),
      quotaCode: /*@__PURE__*/ S.optional(S.String),
      retryAfterSeconds: /*@__PURE__*/ S.optional(S.Number).pipe(
        /*@__PURE__*/ T.HttpHeader("Retry-After"),
      ),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
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
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.optional(S.String),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => __S(195)).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type ARN = string;
export interface AssociateBrowserSettingsRequest {
  portalArn: string;
  browserSettingsArn: string;
}
export interface AssociateBrowserSettingsResponse {
  portalArn: string;
  browserSettingsArn: string;
}
export interface AssociateDataProtectionSettingsRequest {
  portalArn: string;
  dataProtectionSettingsArn: string;
}
export interface AssociateDataProtectionSettingsResponse {
  portalArn: string;
  dataProtectionSettingsArn: string;
}
export interface AssociateIpAccessSettingsRequest {
  portalArn: string;
  ipAccessSettingsArn: string;
}
export interface AssociateIpAccessSettingsResponse {
  portalArn: string;
  ipAccessSettingsArn: string;
}
export interface AssociateNetworkSettingsRequest {
  portalArn: string;
  networkSettingsArn: string;
}
export interface AssociateNetworkSettingsResponse {
  portalArn: string;
  networkSettingsArn: string;
}
export interface AssociateSessionLoggerRequest {
  portalArn: string;
  sessionLoggerArn: string;
}
export interface AssociateSessionLoggerResponse {
  portalArn: string;
  sessionLoggerArn: string;
}
export interface AssociateTrustStoreRequest {
  portalArn: string;
  trustStoreArn: string;
}
export interface AssociateTrustStoreResponse {
  portalArn: string;
  trustStoreArn: string;
}
export interface AssociateUserAccessLoggingSettingsRequest {
  portalArn: string;
  userAccessLoggingSettingsArn: string;
}
export interface AssociateUserAccessLoggingSettingsResponse {
  portalArn: string;
  userAccessLoggingSettingsArn: string;
}
export interface AssociateUserSettingsRequest {
  portalArn: string;
  userSettingsArn: string;
}
export interface AssociateUserSettingsResponse {
  portalArn: string;
  userSettingsArn: string;
}
export type TagKey = string | redacted.Redacted<string>;
export type TagValue = string | redacted.Redacted<string>;
export interface Tag {
  Key: string | redacted.Redacted<string>;
  Value: string | redacted.Redacted<string>;
}
export type TagList = Tag[];
export type KeyArn = string;
export type StringType = string;
export type EncryptionContextMap = { [key: string]: string | undefined };
export type BrowserPolicy = string | redacted.Redacted<string>;
export type ClientToken = string;
export type Category =
  | "Cults"
  | "Gambling"
  | "Nudity"
  | "Pornography"
  | "SexEducation"
  | "Tasteless"
  | "Violence"
  | "DownloadSites"
  | "ImageSharing"
  | "PeerToPeer"
  | "StreamingMediaAndDownloads"
  | "GenerativeAI"
  | "CriminalActivity"
  | "Hacking"
  | "HateAndIntolerance"
  | "IllegalDrug"
  | "IllegalSoftware"
  | "SchoolCheating"
  | "SelfHarm"
  | "Weapons"
  | "Chat"
  | "Games"
  | "InstantMessaging"
  | "ProfessionalNetwork"
  | "SocialNetworking"
  | "WebBasedEmail"
  | "ParkedDomains"
  | (string & {});
export type BlockedCategories = Category[];
export type UrlPattern = string | redacted.Redacted<string>;
export type UrlPatternList = (string | redacted.Redacted<string>)[];
export interface WebContentFilteringPolicy {
  blockedCategories?: Category[];
  allowedUrls?: (string | redacted.Redacted<string>)[];
  blockedUrls?: (string | redacted.Redacted<string>)[];
}
export interface CreateBrowserSettingsRequest {
  tags?: Tag[];
  customerManagedKey?: string;
  additionalEncryptionContext?: { [key: string]: string | undefined };
  browserPolicy?: string | redacted.Redacted<string>;
  clientToken?: string;
  webContentFilteringPolicy?: WebContentFilteringPolicy;
}
export interface CreateBrowserSettingsResponse {
  browserSettingsArn: string;
}
export type DisplayNameSafe = string | redacted.Redacted<string>;
export type DescriptionSafe = string | redacted.Redacted<string>;
export type BuiltInPatternId = string | redacted.Redacted<string>;
export type PatternName = string | redacted.Redacted<string>;
export type Regex = string | redacted.Redacted<string>;
export interface CustomPattern {
  patternName: string | redacted.Redacted<string>;
  patternRegex: string | redacted.Redacted<string>;
  patternDescription?: string | redacted.Redacted<string>;
  keywordRegex?: string | redacted.Redacted<string>;
}
export type RedactionPlaceHolderType = string;
export type RedactionPlaceHolderText = string | redacted.Redacted<string>;
export interface RedactionPlaceHolder {
  redactionPlaceHolderType: string;
  redactionPlaceHolderText?: string | redacted.Redacted<string>;
}
export type InlineRedactionUrl = string | redacted.Redacted<string>;
export type InlineRedactionUrls = (string | redacted.Redacted<string>)[];
export type ConfidenceLevel = number;
export interface InlineRedactionPattern {
  builtInPatternId?: string | redacted.Redacted<string>;
  customPattern?: CustomPattern;
  redactionPlaceHolder: RedactionPlaceHolder;
  enforcedUrls?: (string | redacted.Redacted<string>)[];
  exemptUrls?: (string | redacted.Redacted<string>)[];
  confidenceLevel?: number;
}
export type InlineRedactionPatterns = InlineRedactionPattern[];
export type GlobalInlineRedactionUrls = (string | redacted.Redacted<string>)[];
export interface InlineRedactionConfiguration {
  inlineRedactionPatterns: InlineRedactionPattern[];
  globalEnforcedUrls?: (string | redacted.Redacted<string>)[];
  globalExemptUrls?: (string | redacted.Redacted<string>)[];
  globalConfidenceLevel?: number;
}
export interface CreateDataProtectionSettingsRequest {
  displayName?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  tags?: Tag[];
  customerManagedKey?: string;
  additionalEncryptionContext?: { [key: string]: string | undefined };
  inlineRedactionConfiguration?: InlineRedactionConfiguration;
  clientToken?: string;
}
export interface CreateDataProtectionSettingsResponse {
  dataProtectionSettingsArn: string;
}
export type IdentityProviderName = string | redacted.Redacted<string>;
export type IdentityProviderType = string;
export type IdentityProviderDetails = { [key: string]: string | undefined };
export interface CreateIdentityProviderRequest {
  portalArn: string;
  identityProviderName: string | redacted.Redacted<string>;
  identityProviderType: string;
  identityProviderDetails: { [key: string]: string | undefined };
  clientToken?: string;
  tags?: Tag[];
}
export type SubresourceARN = string;
export interface CreateIdentityProviderResponse {
  identityProviderArn: string;
}
export type DisplayName = string | redacted.Redacted<string>;
export type Description = string | redacted.Redacted<string>;
export type IpRange = string | redacted.Redacted<string>;
export interface IpRule {
  ipRange: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
}
export type IpRuleList = IpRule[];
export interface CreateIpAccessSettingsRequest {
  displayName?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  tags?: Tag[];
  customerManagedKey?: string;
  additionalEncryptionContext?: { [key: string]: string | undefined };
  ipRules: IpRule[];
  clientToken?: string;
}
export interface CreateIpAccessSettingsResponse {
  ipAccessSettingsArn: string;
}
export type VpcId = string;
export type SubnetId = string;
export type SubnetIdList = string[];
export type SecurityGroupId = string;
export type SecurityGroupIdList = string[];
export interface CreateNetworkSettingsRequest {
  vpcId: string;
  subnetIds: string[];
  securityGroupIds: string[];
  tags?: Tag[];
  clientToken?: string;
}
export interface CreateNetworkSettingsResponse {
  networkSettingsArn: string;
}
export type AuthenticationType = string;
export type InstanceType = string;
export type MaxConcurrentSessions = number;
export type PortalCustomDomain = string;
export interface CreatePortalRequest {
  displayName?: string | redacted.Redacted<string>;
  tags?: Tag[];
  customerManagedKey?: string;
  additionalEncryptionContext?: { [key: string]: string | undefined };
  clientToken?: string;
  authenticationType?: string;
  instanceType?: string;
  maxConcurrentSessions?: number;
  portalCustomDomain?: string;
}
export type PortalEndpoint = string;
export interface CreatePortalResponse {
  portalArn: string;
  portalEndpoint: string;
}
export type Event =
  | "WebsiteInteract"
  | "FileDownloadFromSecureBrowserToRemoteDisk"
  | "FileTransferFromRemoteToLocalDisk"
  | "FileTransferFromLocalToRemoteDisk"
  | "FileUploadFromRemoteDiskToSecureBrowser"
  | "ContentPasteToWebsite"
  | "ContentTransferFromLocalToRemoteClipboard"
  | "ContentCopyFromWebsite"
  | "UrlLoad"
  | "TabOpen"
  | "TabClose"
  | "PrintJobSubmit"
  | "SessionConnect"
  | "SessionStart"
  | "SessionDisconnect"
  | "SessionEnd"
  | "UrlBlockByContentFilter"
  | (string & {});
export type Events = Event[];
export type EventFilter =
  | { all: Record<string, never>; include?: never }
  | { all?: never; include: Event[] };
export type S3Bucket = string | redacted.Redacted<string>;
export type S3KeyPrefix = string | redacted.Redacted<string>;
export type S3BucketOwner = string;
export type LogFileFormat = "JSONLines" | "Json" | (string & {});
export type FolderStructure = "Flat" | "NestedByDate" | (string & {});
export interface S3LogConfiguration {
  bucket: string | redacted.Redacted<string>;
  keyPrefix?: string | redacted.Redacted<string>;
  bucketOwner?: string;
  logFileFormat: LogFileFormat;
  folderStructure: FolderStructure;
}
export interface LogConfiguration {
  s3?: S3LogConfiguration;
}
export interface CreateSessionLoggerRequest {
  eventFilter: EventFilter;
  logConfiguration: LogConfiguration;
  displayName?: string | redacted.Redacted<string>;
  customerManagedKey?: string;
  additionalEncryptionContext?: { [key: string]: string | undefined };
  tags?: Tag[];
  clientToken?: string;
}
export interface CreateSessionLoggerResponse {
  sessionLoggerArn: string;
}
export type CertificateAuthorityBody = Uint8Array;
export type CertificateList = Uint8Array[];
export interface CreateTrustStoreRequest {
  certificateList: Uint8Array[];
  tags?: Tag[];
  clientToken?: string;
}
export interface CreateTrustStoreResponse {
  trustStoreArn: string;
}
export type KinesisStreamArn = string;
export interface CreateUserAccessLoggingSettingsRequest {
  kinesisStreamArn: string;
  tags?: Tag[];
  clientToken?: string;
}
export interface CreateUserAccessLoggingSettingsResponse {
  userAccessLoggingSettingsArn: string;
}
export type EnabledType = string;
export type DisconnectTimeoutInMinutes = number;
export type IdleDisconnectTimeoutInMinutes = number;
export type CookieDomain = string | redacted.Redacted<string>;
export type CookieName = string | redacted.Redacted<string>;
export type CookiePath = string | redacted.Redacted<string>;
export interface CookieSpecification {
  domain: string | redacted.Redacted<string>;
  name?: string | redacted.Redacted<string>;
  path?: string | redacted.Redacted<string>;
}
export type CookieSpecifications = CookieSpecification[];
export interface CookieSynchronizationConfiguration {
  allowlist: CookieSpecification[];
  blocklist?: CookieSpecification[];
}
export type ToolbarType = string;
export type VisualMode = string;
export type ToolbarItem = string;
export type HiddenToolbarItemList = string[];
export type MaxDisplayResolution = string;
export interface ToolbarConfiguration {
  toolbarType?: string;
  visualMode?: string;
  hiddenToolbarItems?: string[];
  maxDisplayResolution?: string;
}
export type IconImage = Uint8Array;
export type S3Uri = string;
export type IconImageInput = { blob: Uint8Array; s3Uri?: never } | { blob?: never; s3Uri: string };
export type WallpaperImage = Uint8Array;
export type WallpaperImageInput =
  | { blob: Uint8Array; s3Uri?: never }
  | { blob?: never; s3Uri: string };
export type Locale =
  | "de-DE"
  | "en-US"
  | "es-ES"
  | "fr-FR"
  | "id-ID"
  | "it-IT"
  | "ja-JP"
  | "ko-KR"
  | "pt-BR"
  | "zh-CN"
  | "zh-TW"
  | (string & {});
export type BrandingSafeStringType = string;
export type ContactLinkUrl = string;
export interface LocalizedBrandingStrings {
  browserTabTitle: string;
  welcomeText: string;
  loginTitle?: string;
  loginDescription?: string;
  loginButtonText?: string;
  contactLink?: string;
  contactButtonText?: string;
  loadingText?: string;
}
export type LocalizedBrandingStringMap = { [key in Locale]?: LocalizedBrandingStrings };
export type ColorTheme = "Light" | "Dark" | (string & {});
export type Markdown = string | redacted.Redacted<string>;
export interface BrandingConfigurationCreateInput {
  logo: IconImageInput;
  wallpaper?: WallpaperImageInput;
  favicon: IconImageInput;
  localizedStrings: { [key: string]: LocalizedBrandingStrings | undefined };
  colorTheme: ColorTheme;
  termsOfService?: string | redacted.Redacted<string>;
}
export interface CreateUserSettingsRequest {
  copyAllowed: string;
  pasteAllowed: string;
  downloadAllowed: string;
  uploadAllowed: string;
  printAllowed: string;
  tags?: Tag[];
  disconnectTimeoutInMinutes?: number;
  idleDisconnectTimeoutInMinutes?: number;
  clientToken?: string;
  cookieSynchronizationConfiguration?: CookieSynchronizationConfiguration;
  customerManagedKey?: string;
  additionalEncryptionContext?: { [key: string]: string | undefined };
  deepLinkAllowed?: string;
  toolbarConfiguration?: ToolbarConfiguration;
  brandingConfigurationInput?: BrandingConfigurationCreateInput;
  webAuthnAllowed?: string;
}
export interface CreateUserSettingsResponse {
  userSettingsArn: string;
}
export interface DeleteBrowserSettingsRequest {
  browserSettingsArn: string;
}
export interface DeleteBrowserSettingsResponse {}
export interface DeleteDataProtectionSettingsRequest {
  dataProtectionSettingsArn: string;
}
export interface DeleteDataProtectionSettingsResponse {}
export interface DeleteIdentityProviderRequest {
  identityProviderArn: string;
}
export interface DeleteIdentityProviderResponse {}
export interface DeleteIpAccessSettingsRequest {
  ipAccessSettingsArn: string;
}
export interface DeleteIpAccessSettingsResponse {}
export interface DeleteNetworkSettingsRequest {
  networkSettingsArn: string;
}
export interface DeleteNetworkSettingsResponse {}
export interface DeletePortalRequest {
  portalArn: string;
}
export interface DeletePortalResponse {}
export interface DeleteSessionLoggerRequest {
  sessionLoggerArn: string;
}
export interface DeleteSessionLoggerResponse {}
export interface DeleteTrustStoreRequest {
  trustStoreArn: string;
}
export interface DeleteTrustStoreResponse {}
export interface DeleteUserAccessLoggingSettingsRequest {
  userAccessLoggingSettingsArn: string;
}
export interface DeleteUserAccessLoggingSettingsResponse {}
export interface DeleteUserSettingsRequest {
  userSettingsArn: string;
}
export interface DeleteUserSettingsResponse {}
export interface DisassociateBrowserSettingsRequest {
  portalArn: string;
}
export interface DisassociateBrowserSettingsResponse {}
export interface DisassociateDataProtectionSettingsRequest {
  portalArn: string;
}
export interface DisassociateDataProtectionSettingsResponse {}
export interface DisassociateIpAccessSettingsRequest {
  portalArn: string;
}
export interface DisassociateIpAccessSettingsResponse {}
export interface DisassociateNetworkSettingsRequest {
  portalArn: string;
}
export interface DisassociateNetworkSettingsResponse {}
export interface DisassociateSessionLoggerRequest {
  portalArn: string;
}
export interface DisassociateSessionLoggerResponse {}
export interface DisassociateTrustStoreRequest {
  portalArn: string;
}
export interface DisassociateTrustStoreResponse {}
export interface DisassociateUserAccessLoggingSettingsRequest {
  portalArn: string;
}
export interface DisassociateUserAccessLoggingSettingsResponse {}
export interface DisassociateUserSettingsRequest {
  portalArn: string;
}
export interface DisassociateUserSettingsResponse {}
export type PortalId = string;
export type SessionId = string;
export interface ExpireSessionRequest {
  portalId: string;
  sessionId: string;
}
export interface ExpireSessionResponse {}
export interface GetBrowserSettingsRequest {
  browserSettingsArn: string;
}
export type ArnList = string[];
export interface BrowserSettings {
  browserSettingsArn: string;
  associatedPortalArns?: string[];
  browserPolicy?: string | redacted.Redacted<string>;
  customerManagedKey?: string;
  additionalEncryptionContext?: { [key: string]: string | undefined };
  webContentFilteringPolicy?: WebContentFilteringPolicy;
}
export interface GetBrowserSettingsResponse {
  browserSettings?: BrowserSettings;
}
export interface GetDataProtectionSettingsRequest {
  dataProtectionSettingsArn: string;
}
export interface DataProtectionSettings {
  dataProtectionSettingsArn: string;
  inlineRedactionConfiguration?: InlineRedactionConfiguration;
  associatedPortalArns?: string[];
  displayName?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  creationDate?: Date;
  customerManagedKey?: string;
  additionalEncryptionContext?: { [key: string]: string | undefined };
}
export interface GetDataProtectionSettingsResponse {
  dataProtectionSettings?: DataProtectionSettings;
}
export interface GetIdentityProviderRequest {
  identityProviderArn: string;
}
export interface IdentityProvider {
  identityProviderArn: string;
  identityProviderName?: string | redacted.Redacted<string>;
  identityProviderType?: string;
  identityProviderDetails?: { [key: string]: string | undefined };
}
export interface GetIdentityProviderResponse {
  identityProvider?: IdentityProvider;
}
export interface GetIpAccessSettingsRequest {
  ipAccessSettingsArn: string;
}
export interface IpAccessSettings {
  ipAccessSettingsArn: string;
  associatedPortalArns?: string[];
  ipRules?: IpRule[];
  displayName?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  creationDate?: Date;
  customerManagedKey?: string;
  additionalEncryptionContext?: { [key: string]: string | undefined };
}
export interface GetIpAccessSettingsResponse {
  ipAccessSettings?: IpAccessSettings;
}
export interface GetNetworkSettingsRequest {
  networkSettingsArn: string;
}
export interface NetworkSettings {
  networkSettingsArn: string;
  associatedPortalArns?: string[];
  vpcId?: string;
  subnetIds?: string[];
  securityGroupIds?: string[];
}
export interface GetNetworkSettingsResponse {
  networkSettings?: NetworkSettings;
}
export interface GetPortalRequest {
  portalArn: string;
}
export type RendererType = string;
export type BrowserType = string;
export type PortalStatus = string;
export type StatusReason = string;
export interface Portal {
  portalArn: string;
  rendererType?: string;
  browserType?: string;
  portalStatus?: string;
  portalEndpoint?: string;
  displayName?: string | redacted.Redacted<string>;
  creationDate?: Date;
  browserSettingsArn?: string;
  dataProtectionSettingsArn?: string;
  userSettingsArn?: string;
  networkSettingsArn?: string;
  sessionLoggerArn?: string;
  trustStoreArn?: string;
  statusReason?: string;
  userAccessLoggingSettingsArn?: string;
  authenticationType?: string;
  ipAccessSettingsArn?: string;
  customerManagedKey?: string;
  additionalEncryptionContext?: { [key: string]: string | undefined };
  instanceType?: string;
  maxConcurrentSessions?: number;
  portalCustomDomain?: string;
}
export interface GetPortalResponse {
  portal?: Portal;
}
export interface GetPortalServiceProviderMetadataRequest {
  portalArn: string;
}
export type SamlMetadata = string;
export interface GetPortalServiceProviderMetadataResponse {
  portalArn: string;
  serviceProviderSamlMetadata?: string;
}
export interface GetSessionRequest {
  portalId: string;
  sessionId: string;
}
export type Username = string | redacted.Redacted<string>;
export type IpAddress = string | redacted.Redacted<string>;
export type IpAddressList = (string | redacted.Redacted<string>)[];
export type SessionStatus = "Active" | "Terminated" | (string & {});
export interface Session {
  portalArn?: string;
  sessionId?: string;
  username?: string | redacted.Redacted<string>;
  clientIpAddresses?: (string | redacted.Redacted<string>)[];
  status?: SessionStatus;
  startTime?: Date;
  endTime?: Date;
}
export interface GetSessionResponse {
  session?: Session;
}
export interface GetSessionLoggerRequest {
  sessionLoggerArn: string;
}
export interface SessionLogger {
  sessionLoggerArn: string;
  eventFilter?: EventFilter;
  logConfiguration?: LogConfiguration;
  customerManagedKey?: string;
  additionalEncryptionContext?: { [key: string]: string | undefined };
  associatedPortalArns?: string[];
  displayName?: string | redacted.Redacted<string>;
  creationDate?: Date;
}
export interface GetSessionLoggerResponse {
  sessionLogger?: SessionLogger;
}
export interface GetTrustStoreRequest {
  trustStoreArn: string;
}
export interface TrustStore {
  associatedPortalArns?: string[];
  trustStoreArn: string;
}
export interface GetTrustStoreResponse {
  trustStore?: TrustStore;
}
export type CertificateThumbprint = string;
export interface GetTrustStoreCertificateRequest {
  trustStoreArn: string;
  thumbprint: string;
}
export type CertificatePrincipal = string;
export interface Certificate {
  thumbprint?: string;
  subject?: string;
  issuer?: string;
  notValidBefore?: Date;
  notValidAfter?: Date;
  body?: Uint8Array;
}
export interface GetTrustStoreCertificateResponse {
  trustStoreArn: string;
  certificate?: Certificate;
}
export interface GetUserAccessLoggingSettingsRequest {
  userAccessLoggingSettingsArn: string;
}
export interface UserAccessLoggingSettings {
  userAccessLoggingSettingsArn: string;
  associatedPortalArns?: string[];
  kinesisStreamArn?: string;
}
export interface GetUserAccessLoggingSettingsResponse {
  userAccessLoggingSettings?: UserAccessLoggingSettings;
}
export interface GetUserSettingsRequest {
  userSettingsArn: string;
}
export type MimeType = "image/png" | "image/jpeg" | "image/x-icon" | (string & {});
export interface ImageMetadata {
  mimeType: MimeType;
  fileExtension: string;
  lastUploadTimestamp: Date;
}
export interface BrandingConfiguration {
  logo: ImageMetadata;
  wallpaper?: ImageMetadata;
  favicon: ImageMetadata;
  localizedStrings: { [key: string]: LocalizedBrandingStrings | undefined };
  colorTheme: ColorTheme;
  termsOfService?: string | redacted.Redacted<string>;
}
export interface UserSettings {
  userSettingsArn: string;
  associatedPortalArns?: string[];
  copyAllowed?: string;
  pasteAllowed?: string;
  downloadAllowed?: string;
  uploadAllowed?: string;
  printAllowed?: string;
  disconnectTimeoutInMinutes?: number;
  idleDisconnectTimeoutInMinutes?: number;
  cookieSynchronizationConfiguration?: CookieSynchronizationConfiguration;
  customerManagedKey?: string;
  additionalEncryptionContext?: { [key: string]: string | undefined };
  deepLinkAllowed?: string;
  toolbarConfiguration?: ToolbarConfiguration;
  brandingConfiguration?: BrandingConfiguration;
  webAuthnAllowed?: string;
}
export interface GetUserSettingsResponse {
  userSettings?: UserSettings;
}
export type PaginationToken = string;
export type MaxResults = number;
export interface ListBrowserSettingsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface BrowserSettingsSummary {
  browserSettingsArn: string;
}
export type BrowserSettingsList = BrowserSettingsSummary[];
export interface ListBrowserSettingsResponse {
  browserSettings?: BrowserSettingsSummary[];
  nextToken?: string;
}
export interface ListDataProtectionSettingsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface DataProtectionSettingsSummary {
  dataProtectionSettingsArn: string;
  displayName?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  creationDate?: Date;
}
export type DataProtectionSettingsList = DataProtectionSettingsSummary[];
export interface ListDataProtectionSettingsResponse {
  dataProtectionSettings?: DataProtectionSettingsSummary[];
  nextToken?: string;
}
export interface ListIdentityProvidersRequest {
  nextToken?: string;
  maxResults?: number;
  portalArn: string;
}
export interface IdentityProviderSummary {
  identityProviderArn: string;
  identityProviderName?: string | redacted.Redacted<string>;
  identityProviderType?: string;
}
export type IdentityProviderList = IdentityProviderSummary[];
export interface ListIdentityProvidersResponse {
  nextToken?: string;
  identityProviders?: IdentityProviderSummary[];
}
export interface ListIpAccessSettingsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface IpAccessSettingsSummary {
  ipAccessSettingsArn: string;
  displayName?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  creationDate?: Date;
}
export type IpAccessSettingsList = IpAccessSettingsSummary[];
export interface ListIpAccessSettingsResponse {
  ipAccessSettings?: IpAccessSettingsSummary[];
  nextToken?: string;
}
export interface ListNetworkSettingsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface NetworkSettingsSummary {
  networkSettingsArn: string;
  vpcId?: string;
}
export type NetworkSettingsList = NetworkSettingsSummary[];
export interface ListNetworkSettingsResponse {
  networkSettings?: NetworkSettingsSummary[];
  nextToken?: string;
}
export interface ListPortalsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface PortalSummary {
  portalArn: string;
  rendererType?: string;
  browserType?: string;
  portalStatus?: string;
  portalEndpoint?: string;
  displayName?: string | redacted.Redacted<string>;
  creationDate?: Date;
  browserSettingsArn?: string;
  dataProtectionSettingsArn?: string;
  userSettingsArn?: string;
  networkSettingsArn?: string;
  sessionLoggerArn?: string;
  trustStoreArn?: string;
  userAccessLoggingSettingsArn?: string;
  authenticationType?: string;
  ipAccessSettingsArn?: string;
  instanceType?: string;
  maxConcurrentSessions?: number;
  portalCustomDomain?: string;
}
export type PortalList = PortalSummary[];
export interface ListPortalsResponse {
  portals?: PortalSummary[];
  nextToken?: string;
}
export interface ListSessionLoggersRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface SessionLoggerSummary {
  sessionLoggerArn: string;
  logConfiguration?: LogConfiguration;
  displayName?: string | redacted.Redacted<string>;
  creationDate?: Date;
}
export type SessionLoggerList = SessionLoggerSummary[];
export interface ListSessionLoggersResponse {
  sessionLoggers?: SessionLoggerSummary[];
  nextToken?: string;
}
export type SessionSortBy = "StartTimeAscending" | "StartTimeDescending" | (string & {});
export interface ListSessionsRequest {
  portalId: string;
  username?: string | redacted.Redacted<string>;
  sessionId?: string;
  sortBy?: SessionSortBy;
  status?: SessionStatus;
  maxResults?: number;
  nextToken?: string;
}
export interface SessionSummary {
  portalArn?: string;
  sessionId?: string;
  username?: string | redacted.Redacted<string>;
  status?: SessionStatus;
  startTime?: Date;
  endTime?: Date;
}
export type SessionSummaryList = SessionSummary[];
export interface ListSessionsResponse {
  sessions: SessionSummary[];
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Tag[];
}
export interface ListTrustStoreCertificatesRequest {
  trustStoreArn: string;
  nextToken?: string;
  maxResults?: number;
}
export interface CertificateSummary {
  thumbprint?: string;
  subject?: string;
  issuer?: string;
  notValidBefore?: Date;
  notValidAfter?: Date;
}
export type CertificateSummaryList = CertificateSummary[];
export interface ListTrustStoreCertificatesResponse {
  certificateList?: CertificateSummary[];
  trustStoreArn: string;
  nextToken?: string;
}
export interface ListTrustStoresRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface TrustStoreSummary {
  trustStoreArn?: string;
}
export type TrustStoreSummaryList = TrustStoreSummary[];
export interface ListTrustStoresResponse {
  trustStores?: TrustStoreSummary[];
  nextToken?: string;
}
export interface ListUserAccessLoggingSettingsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface UserAccessLoggingSettingsSummary {
  userAccessLoggingSettingsArn: string;
  kinesisStreamArn?: string;
}
export type UserAccessLoggingSettingsList = UserAccessLoggingSettingsSummary[];
export interface ListUserAccessLoggingSettingsResponse {
  userAccessLoggingSettings?: UserAccessLoggingSettingsSummary[];
  nextToken?: string;
}
export interface ListUserSettingsRequest {
  nextToken?: string;
  maxResults?: number;
}
export interface UserSettingsSummary {
  userSettingsArn: string;
  copyAllowed?: string;
  pasteAllowed?: string;
  downloadAllowed?: string;
  uploadAllowed?: string;
  printAllowed?: string;
  disconnectTimeoutInMinutes?: number;
  idleDisconnectTimeoutInMinutes?: number;
  cookieSynchronizationConfiguration?: CookieSynchronizationConfiguration;
  deepLinkAllowed?: string;
  toolbarConfiguration?: ToolbarConfiguration;
  brandingConfiguration?: BrandingConfiguration;
  webAuthnAllowed?: string;
}
export type UserSettingsList = UserSettingsSummary[];
export interface ListUserSettingsResponse {
  userSettings?: UserSettingsSummary[];
  nextToken?: string;
}
export interface TagResourceRequest {
  resourceArn: string;
  tags: Tag[];
  clientToken?: string;
}
export interface TagResourceResponse {}
export type TagKeyList = (string | redacted.Redacted<string>)[];
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: (string | redacted.Redacted<string>)[];
}
export interface UntagResourceResponse {}
export interface UpdateBrowserSettingsRequest {
  browserSettingsArn: string;
  browserPolicy?: string | redacted.Redacted<string>;
  clientToken?: string;
  webContentFilteringPolicy?: WebContentFilteringPolicy;
}
export interface UpdateBrowserSettingsResponse {
  browserSettings: BrowserSettings;
}
export interface UpdateDataProtectionSettingsRequest {
  dataProtectionSettingsArn: string;
  inlineRedactionConfiguration?: InlineRedactionConfiguration;
  displayName?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  clientToken?: string;
}
export interface UpdateDataProtectionSettingsResponse {
  dataProtectionSettings: DataProtectionSettings;
}
export interface UpdateIdentityProviderRequest {
  identityProviderArn: string;
  identityProviderName?: string | redacted.Redacted<string>;
  identityProviderType?: string;
  identityProviderDetails?: { [key: string]: string | undefined };
  clientToken?: string;
}
export interface UpdateIdentityProviderResponse {
  identityProvider: IdentityProvider;
}
export interface UpdateIpAccessSettingsRequest {
  ipAccessSettingsArn: string;
  displayName?: string | redacted.Redacted<string>;
  description?: string | redacted.Redacted<string>;
  ipRules?: IpRule[];
  clientToken?: string;
}
export interface UpdateIpAccessSettingsResponse {
  ipAccessSettings: IpAccessSettings;
}
export interface UpdateNetworkSettingsRequest {
  networkSettingsArn: string;
  vpcId?: string;
  subnetIds?: string[];
  securityGroupIds?: string[];
  clientToken?: string;
}
export interface UpdateNetworkSettingsResponse {
  networkSettings: NetworkSettings;
}
export interface UpdatePortalRequest {
  portalArn: string;
  displayName?: string | redacted.Redacted<string>;
  authenticationType?: string;
  instanceType?: string;
  maxConcurrentSessions?: number;
  portalCustomDomain?: string;
}
export interface UpdatePortalResponse {
  portal?: Portal;
}
export interface UpdateSessionLoggerRequest {
  sessionLoggerArn: string;
  eventFilter?: EventFilter;
  logConfiguration?: LogConfiguration;
  displayName?: string | redacted.Redacted<string>;
}
export interface UpdateSessionLoggerResponse {
  sessionLogger: SessionLogger;
}
export type CertificateThumbprintList = string[];
export interface UpdateTrustStoreRequest {
  trustStoreArn: string;
  certificatesToAdd?: Uint8Array[];
  certificatesToDelete?: string[];
  clientToken?: string;
}
export interface UpdateTrustStoreResponse {
  trustStoreArn: string;
}
export interface UpdateUserAccessLoggingSettingsRequest {
  userAccessLoggingSettingsArn: string;
  kinesisStreamArn?: string;
  clientToken?: string;
}
export interface UpdateUserAccessLoggingSettingsResponse {
  userAccessLoggingSettings: UserAccessLoggingSettings;
}
export interface BrandingConfigurationUpdateInput {
  logo?: IconImageInput;
  wallpaper?: WallpaperImageInput;
  favicon?: IconImageInput;
  localizedStrings?: { [key: string]: LocalizedBrandingStrings | undefined };
  colorTheme?: ColorTheme;
  termsOfService?: string | redacted.Redacted<string>;
}
export interface UpdateUserSettingsRequest {
  userSettingsArn: string;
  copyAllowed?: string;
  pasteAllowed?: string;
  downloadAllowed?: string;
  uploadAllowed?: string;
  printAllowed?: string;
  disconnectTimeoutInMinutes?: number;
  idleDisconnectTimeoutInMinutes?: number;
  clientToken?: string;
  cookieSynchronizationConfiguration?: CookieSynchronizationConfiguration;
  deepLinkAllowed?: string;
  toolbarConfiguration?: ToolbarConfiguration;
  brandingConfigurationInput?: BrandingConfigurationUpdateInput;
  webAuthnAllowed?: string;
}
export interface UpdateUserSettingsResponse {
  userSettings: UserSettings;
}
export type ExceptionMessage = string;
export type ResourceId = string;
export type ResourceType = string;
export type RetryAfterSeconds = number;
export type ServiceCode = string;
export type QuotaCode = string;
export type ValidationExceptionReason = string;
export type FieldName = string;
export interface ValidationExceptionField {
  name: string;
  message: string;
}
export type ValidationExceptionFieldList = ValidationExceptionField[];
export type TagExceptionMessage = string;
export type AssociateBrowserSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a browser settings resource with a web portal.
 */
export const associateBrowserSettings: API.OperationMethod<
  AssociateBrowserSettingsRequest,
  AssociateBrowserSettingsResponse,
  AssociateBrowserSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(0) as any as S.Schema<AssociateBrowserSettingsRequest>,
  output: __S(1) as any as S.Schema<AssociateBrowserSettingsResponse>,
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
  operationName: "AssociateBrowserSettings",
}));

export type AssociateDataProtectionSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a data protection settings resource with a web portal.
 */
export const associateDataProtectionSettings: API.OperationMethod<
  AssociateDataProtectionSettingsRequest,
  AssociateDataProtectionSettingsResponse,
  AssociateDataProtectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(2) as any as S.Schema<AssociateDataProtectionSettingsRequest>,
  output: __S(3) as any as S.Schema<AssociateDataProtectionSettingsResponse>,
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
  operationName: "AssociateDataProtectionSettings",
}));

export type AssociateIpAccessSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates an IP access settings resource with a web portal.
 */
export const associateIpAccessSettings: API.OperationMethod<
  AssociateIpAccessSettingsRequest,
  AssociateIpAccessSettingsResponse,
  AssociateIpAccessSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(4) as any as S.Schema<AssociateIpAccessSettingsRequest>,
  output: __S(5) as any as S.Schema<AssociateIpAccessSettingsResponse>,
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
  operationName: "AssociateIpAccessSettings",
}));

export type AssociateNetworkSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a network settings resource with a web portal.
 */
export const associateNetworkSettings: API.OperationMethod<
  AssociateNetworkSettingsRequest,
  AssociateNetworkSettingsResponse,
  AssociateNetworkSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(6) as any as S.Schema<AssociateNetworkSettingsRequest>,
  output: __S(7) as any as S.Schema<AssociateNetworkSettingsResponse>,
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
  operationName: "AssociateNetworkSettings",
}));

export type AssociateSessionLoggerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a session logger with a portal.
 */
export const associateSessionLogger: API.OperationMethod<
  AssociateSessionLoggerRequest,
  AssociateSessionLoggerResponse,
  AssociateSessionLoggerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(8) as any as S.Schema<AssociateSessionLoggerRequest>,
  output: __S(9) as any as S.Schema<AssociateSessionLoggerResponse>,
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
  operationName: "AssociateSessionLogger",
}));

export type AssociateTrustStoreError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a trust store with a web portal.
 */
export const associateTrustStore: API.OperationMethod<
  AssociateTrustStoreRequest,
  AssociateTrustStoreResponse,
  AssociateTrustStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10) as any as S.Schema<AssociateTrustStoreRequest>,
  output: __S(11) as any as S.Schema<AssociateTrustStoreResponse>,
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
  operationName: "AssociateTrustStore",
}));

export type AssociateUserAccessLoggingSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a user access logging settings resource with a web portal.
 */
export const associateUserAccessLoggingSettings: API.OperationMethod<
  AssociateUserAccessLoggingSettingsRequest,
  AssociateUserAccessLoggingSettingsResponse,
  AssociateUserAccessLoggingSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12) as any as S.Schema<AssociateUserAccessLoggingSettingsRequest>,
  output: __S(13) as any as S.Schema<AssociateUserAccessLoggingSettingsResponse>,
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
  operationName: "AssociateUserAccessLoggingSettings",
}));

export type AssociateUserSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a user settings resource with a web portal.
 */
export const associateUserSettings: API.OperationMethod<
  AssociateUserSettingsRequest,
  AssociateUserSettingsResponse,
  AssociateUserSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(14) as any as S.Schema<AssociateUserSettingsRequest>,
  output: __S(15) as any as S.Schema<AssociateUserSettingsResponse>,
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
  operationName: "AssociateUserSettings",
}));

export type CreateBrowserSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal.
 */
export const createBrowserSettings: API.OperationMethod<
  CreateBrowserSettingsRequest,
  CreateBrowserSettingsResponse,
  CreateBrowserSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22) as any as S.Schema<CreateBrowserSettingsRequest>,
  output: __S(23) as any as S.Schema<CreateBrowserSettingsResponse>,
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
  operationName: "CreateBrowserSettings",
}));

export type CreateDataProtectionSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a data protection settings resource that can be associated with a web portal.
 */
export const createDataProtectionSettings: API.OperationMethod<
  CreateDataProtectionSettingsRequest,
  CreateDataProtectionSettingsResponse,
  CreateDataProtectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(29) as any as S.Schema<CreateDataProtectionSettingsRequest>,
  output: __S(30) as any as S.Schema<CreateDataProtectionSettingsResponse>,
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
  operationName: "CreateDataProtectionSettings",
}));

export type CreateIdentityProviderError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an identity provider resource that is then associated with a web portal.
 */
export const createIdentityProvider: API.OperationMethod<
  CreateIdentityProviderRequest,
  CreateIdentityProviderResponse,
  CreateIdentityProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(31) as any as S.Schema<CreateIdentityProviderRequest>,
  output: __S(32) as any as S.Schema<CreateIdentityProviderResponse>,
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
  operationName: "CreateIdentityProvider",
}));

export type CreateIpAccessSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an IP access settings resource that can be associated with a web portal.
 */
export const createIpAccessSettings: API.OperationMethod<
  CreateIpAccessSettingsRequest,
  CreateIpAccessSettingsResponse,
  CreateIpAccessSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(35) as any as S.Schema<CreateIpAccessSettingsRequest>,
  output: __S(36) as any as S.Schema<CreateIpAccessSettingsResponse>,
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
  operationName: "CreateIpAccessSettings",
}));

export type CreateNetworkSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC.
 */
export const createNetworkSettings: API.OperationMethod<
  CreateNetworkSettingsRequest,
  CreateNetworkSettingsResponse,
  CreateNetworkSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(38) as any as S.Schema<CreateNetworkSettingsRequest>,
  output: __S(39) as any as S.Schema<CreateNetworkSettingsResponse>,
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
  operationName: "CreateNetworkSettings",
}));

export type CreatePortalError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a web portal.
 */
export const createPortal: API.OperationMethod<
  CreatePortalRequest,
  CreatePortalResponse,
  CreatePortalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(40) as any as S.Schema<CreatePortalRequest>,
  output: __S(41) as any as S.Schema<CreatePortalResponse>,
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
  operationName: "CreatePortal",
}));

export type CreateSessionLoggerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a session logger.
 */
export const createSessionLogger: API.OperationMethod<
  CreateSessionLoggerRequest,
  CreateSessionLoggerResponse,
  CreateSessionLoggerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45) as any as S.Schema<CreateSessionLoggerRequest>,
  output: __S(46) as any as S.Schema<CreateSessionLoggerResponse>,
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
  operationName: "CreateSessionLogger",
}));

export type CreateTrustStoreError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store.
 */
export const createTrustStore: API.OperationMethod<
  CreateTrustStoreRequest,
  CreateTrustStoreResponse,
  CreateTrustStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(48) as any as S.Schema<CreateTrustStoreRequest>,
  output: __S(49) as any as S.Schema<CreateTrustStoreResponse>,
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
  operationName: "CreateTrustStore",
}));

export type CreateUserAccessLoggingSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a user access logging settings resource that can be associated with a web portal.
 */
export const createUserAccessLoggingSettings: API.OperationMethod<
  CreateUserAccessLoggingSettingsRequest,
  CreateUserAccessLoggingSettingsResponse,
  CreateUserAccessLoggingSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(50) as any as S.Schema<CreateUserAccessLoggingSettingsRequest>,
  output: __S(51) as any as S.Schema<CreateUserAccessLoggingSettingsResponse>,
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
  operationName: "CreateUserAccessLoggingSettings",
}));

export type CreateUserSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates a user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices.
 */
export const createUserSettings: API.OperationMethod<
  CreateUserSettingsRequest,
  CreateUserSettingsResponse,
  CreateUserSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60) as any as S.Schema<CreateUserSettingsRequest>,
  output: __S(61) as any as S.Schema<CreateUserSettingsResponse>,
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
  operationName: "CreateUserSettings",
}));

export type DeleteBrowserSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes browser settings.
 */
export const deleteBrowserSettings: API.OperationMethod<
  DeleteBrowserSettingsRequest,
  DeleteBrowserSettingsResponse,
  DeleteBrowserSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62) as any as S.Schema<DeleteBrowserSettingsRequest>,
  output: __S(63) as any as S.Schema<DeleteBrowserSettingsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteBrowserSettings",
}));

export type DeleteDataProtectionSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes data protection settings.
 */
export const deleteDataProtectionSettings: API.OperationMethod<
  DeleteDataProtectionSettingsRequest,
  DeleteDataProtectionSettingsResponse,
  DeleteDataProtectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(64) as any as S.Schema<DeleteDataProtectionSettingsRequest>,
  output: __S(65) as any as S.Schema<DeleteDataProtectionSettingsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDataProtectionSettings",
}));

export type DeleteIdentityProviderError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the identity provider.
 */
export const deleteIdentityProvider: API.OperationMethod<
  DeleteIdentityProviderRequest,
  DeleteIdentityProviderResponse,
  DeleteIdentityProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(66) as any as S.Schema<DeleteIdentityProviderRequest>,
  output: __S(63) as any as S.Schema<DeleteIdentityProviderResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIdentityProvider",
}));

export type DeleteIpAccessSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes IP access settings.
 */
export const deleteIpAccessSettings: API.OperationMethod<
  DeleteIpAccessSettingsRequest,
  DeleteIpAccessSettingsResponse,
  DeleteIpAccessSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(67) as any as S.Schema<DeleteIpAccessSettingsRequest>,
  output: __S(63) as any as S.Schema<DeleteIpAccessSettingsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteIpAccessSettings",
}));

export type DeleteNetworkSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes network settings.
 */
export const deleteNetworkSettings: API.OperationMethod<
  DeleteNetworkSettingsRequest,
  DeleteNetworkSettingsResponse,
  DeleteNetworkSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(68) as any as S.Schema<DeleteNetworkSettingsRequest>,
  output: __S(63) as any as S.Schema<DeleteNetworkSettingsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteNetworkSettings",
}));

export type DeletePortalError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a web portal.
 */
export const deletePortal: API.OperationMethod<
  DeletePortalRequest,
  DeletePortalResponse,
  DeletePortalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(69) as any as S.Schema<DeletePortalRequest>,
  output: __S(63) as any as S.Schema<DeletePortalResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeletePortal",
}));

export type DeleteSessionLoggerError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes a session logger resource.
 */
export const deleteSessionLogger: API.OperationMethod<
  DeleteSessionLoggerRequest,
  DeleteSessionLoggerResponse,
  DeleteSessionLoggerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(70) as any as S.Schema<DeleteSessionLoggerRequest>,
  output: __S(63) as any as S.Schema<DeleteSessionLoggerResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSessionLogger",
}));

export type DeleteTrustStoreError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the trust store.
 */
export const deleteTrustStore: API.OperationMethod<
  DeleteTrustStoreRequest,
  DeleteTrustStoreResponse,
  DeleteTrustStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(71) as any as S.Schema<DeleteTrustStoreRequest>,
  output: __S(63) as any as S.Schema<DeleteTrustStoreResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteTrustStore",
}));

export type DeleteUserAccessLoggingSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes user access logging settings.
 */
export const deleteUserAccessLoggingSettings: API.OperationMethod<
  DeleteUserAccessLoggingSettingsRequest,
  DeleteUserAccessLoggingSettingsResponse,
  DeleteUserAccessLoggingSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(72) as any as S.Schema<DeleteUserAccessLoggingSettingsRequest>,
  output: __S(65) as any as S.Schema<DeleteUserAccessLoggingSettingsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUserAccessLoggingSettings",
}));

export type DeleteUserSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes user settings.
 */
export const deleteUserSettings: API.OperationMethod<
  DeleteUserSettingsRequest,
  DeleteUserSettingsResponse,
  DeleteUserSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(73) as any as S.Schema<DeleteUserSettingsRequest>,
  output: __S(63) as any as S.Schema<DeleteUserSettingsResponse>,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteUserSettings",
}));

export type DisassociateBrowserSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates browser settings from a web portal.
 */
export const disassociateBrowserSettings: API.OperationMethod<
  DisassociateBrowserSettingsRequest,
  DisassociateBrowserSettingsResponse,
  DisassociateBrowserSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(74) as any as S.Schema<DisassociateBrowserSettingsRequest>,
  output: __S(65) as any as S.Schema<DisassociateBrowserSettingsResponse>,
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
  operationName: "DisassociateBrowserSettings",
}));

export type DisassociateDataProtectionSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates data protection settings from a web portal.
 */
export const disassociateDataProtectionSettings: API.OperationMethod<
  DisassociateDataProtectionSettingsRequest,
  DisassociateDataProtectionSettingsResponse,
  DisassociateDataProtectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(75) as any as S.Schema<DisassociateDataProtectionSettingsRequest>,
  output: __S(65) as any as S.Schema<DisassociateDataProtectionSettingsResponse>,
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
  operationName: "DisassociateDataProtectionSettings",
}));

export type DisassociateIpAccessSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates IP access settings from a web portal.
 */
export const disassociateIpAccessSettings: API.OperationMethod<
  DisassociateIpAccessSettingsRequest,
  DisassociateIpAccessSettingsResponse,
  DisassociateIpAccessSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(76) as any as S.Schema<DisassociateIpAccessSettingsRequest>,
  output: __S(65) as any as S.Schema<DisassociateIpAccessSettingsResponse>,
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
  operationName: "DisassociateIpAccessSettings",
}));

export type DisassociateNetworkSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates network settings from a web portal.
 */
export const disassociateNetworkSettings: API.OperationMethod<
  DisassociateNetworkSettingsRequest,
  DisassociateNetworkSettingsResponse,
  DisassociateNetworkSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(77) as any as S.Schema<DisassociateNetworkSettingsRequest>,
  output: __S(65) as any as S.Schema<DisassociateNetworkSettingsResponse>,
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
  operationName: "DisassociateNetworkSettings",
}));

export type DisassociateSessionLoggerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a session logger from a portal.
 */
export const disassociateSessionLogger: API.OperationMethod<
  DisassociateSessionLoggerRequest,
  DisassociateSessionLoggerResponse,
  DisassociateSessionLoggerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(78) as any as S.Schema<DisassociateSessionLoggerRequest>,
  output: __S(65) as any as S.Schema<DisassociateSessionLoggerResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateSessionLogger",
}));

export type DisassociateTrustStoreError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates a trust store from a web portal.
 */
export const disassociateTrustStore: API.OperationMethod<
  DisassociateTrustStoreRequest,
  DisassociateTrustStoreResponse,
  DisassociateTrustStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(79) as any as S.Schema<DisassociateTrustStoreRequest>,
  output: __S(63) as any as S.Schema<DisassociateTrustStoreResponse>,
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
  operationName: "DisassociateTrustStore",
}));

export type DisassociateUserAccessLoggingSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates user access logging settings from a web portal.
 */
export const disassociateUserAccessLoggingSettings: API.OperationMethod<
  DisassociateUserAccessLoggingSettingsRequest,
  DisassociateUserAccessLoggingSettingsResponse,
  DisassociateUserAccessLoggingSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(80) as any as S.Schema<DisassociateUserAccessLoggingSettingsRequest>,
  output: __S(65) as any as S.Schema<DisassociateUserAccessLoggingSettingsResponse>,
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
  operationName: "DisassociateUserAccessLoggingSettings",
}));

export type DisassociateUserSettingsError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Disassociates user settings from a web portal.
 */
export const disassociateUserSettings: API.OperationMethod<
  DisassociateUserSettingsRequest,
  DisassociateUserSettingsResponse,
  DisassociateUserSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(81) as any as S.Schema<DisassociateUserSettingsRequest>,
  output: __S(65) as any as S.Schema<DisassociateUserSettingsResponse>,
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
  operationName: "DisassociateUserSettings",
}));

export type ExpireSessionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Expires an active secure browser session.
 */
export const expireSession: API.OperationMethod<
  ExpireSessionRequest,
  ExpireSessionResponse,
  ExpireSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(82) as any as S.Schema<ExpireSessionRequest>,
  output: __S(63) as any as S.Schema<ExpireSessionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExpireSession",
}));

export type GetBrowserSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets browser settings.
 */
export const getBrowserSettings: API.OperationMethod<
  GetBrowserSettingsRequest,
  GetBrowserSettingsResponse,
  GetBrowserSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(83) as any as S.Schema<GetBrowserSettingsRequest>,
  output: __S(85) as any as S.Schema<GetBrowserSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetBrowserSettings",
}));

export type GetDataProtectionSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the data protection settings.
 */
export const getDataProtectionSettings: API.OperationMethod<
  GetDataProtectionSettingsRequest,
  GetDataProtectionSettingsResponse,
  GetDataProtectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(86) as any as S.Schema<GetDataProtectionSettingsRequest>,
  output: __S(88) as any as S.Schema<GetDataProtectionSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDataProtectionSettings",
}));

export type GetIdentityProviderError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the identity provider.
 */
export const getIdentityProvider: API.OperationMethod<
  GetIdentityProviderRequest,
  GetIdentityProviderResponse,
  GetIdentityProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(89) as any as S.Schema<GetIdentityProviderRequest>,
  output: __S(91) as any as S.Schema<GetIdentityProviderResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIdentityProvider",
}));

export type GetIpAccessSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the IP access settings.
 */
export const getIpAccessSettings: API.OperationMethod<
  GetIpAccessSettingsRequest,
  GetIpAccessSettingsResponse,
  GetIpAccessSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(92) as any as S.Schema<GetIpAccessSettingsRequest>,
  output: __S(94) as any as S.Schema<GetIpAccessSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetIpAccessSettings",
}));

export type GetNetworkSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the network settings.
 */
export const getNetworkSettings: API.OperationMethod<
  GetNetworkSettingsRequest,
  GetNetworkSettingsResponse,
  GetNetworkSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(95) as any as S.Schema<GetNetworkSettingsRequest>,
  output: __S(97) as any as S.Schema<GetNetworkSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetNetworkSettings",
}));

export type GetPortalError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the web portal.
 */
export const getPortal: API.OperationMethod<
  GetPortalRequest,
  GetPortalResponse,
  GetPortalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(98) as any as S.Schema<GetPortalRequest>,
  output: __S(100) as any as S.Schema<GetPortalResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPortal",
}));

export type GetPortalServiceProviderMetadataError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the service provider metadata.
 */
export const getPortalServiceProviderMetadata: API.OperationMethod<
  GetPortalServiceProviderMetadataRequest,
  GetPortalServiceProviderMetadataResponse,
  GetPortalServiceProviderMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(101) as any as S.Schema<GetPortalServiceProviderMetadataRequest>,
  output: __S(102) as any as S.Schema<GetPortalServiceProviderMetadataResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetPortalServiceProviderMetadata",
}));

export type GetSessionError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets information for a secure browser session.
 */
export const getSession: API.OperationMethod<
  GetSessionRequest,
  GetSessionResponse,
  GetSessionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(103) as any as S.Schema<GetSessionRequest>,
  output: __S(105) as any as S.Schema<GetSessionResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSession",
}));

export type GetSessionLoggerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets details about a specific session logger resource.
 */
export const getSessionLogger: API.OperationMethod<
  GetSessionLoggerRequest,
  GetSessionLoggerResponse,
  GetSessionLoggerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(106) as any as S.Schema<GetSessionLoggerRequest>,
  output: __S(108) as any as S.Schema<GetSessionLoggerResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetSessionLogger",
}));

export type GetTrustStoreError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the trust store.
 */
export const getTrustStore: API.OperationMethod<
  GetTrustStoreRequest,
  GetTrustStoreResponse,
  GetTrustStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(109) as any as S.Schema<GetTrustStoreRequest>,
  output: __S(111) as any as S.Schema<GetTrustStoreResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTrustStore",
}));

export type GetTrustStoreCertificateError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets the trust store certificate.
 */
export const getTrustStoreCertificate: API.OperationMethod<
  GetTrustStoreCertificateRequest,
  GetTrustStoreCertificateResponse,
  GetTrustStoreCertificateError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(112) as any as S.Schema<GetTrustStoreCertificateRequest>,
  output: __S(114) as any as S.Schema<GetTrustStoreCertificateResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetTrustStoreCertificate",
}));

export type GetUserAccessLoggingSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets user access logging settings.
 */
export const getUserAccessLoggingSettings: API.OperationMethod<
  GetUserAccessLoggingSettingsRequest,
  GetUserAccessLoggingSettingsResponse,
  GetUserAccessLoggingSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(115) as any as S.Schema<GetUserAccessLoggingSettingsRequest>,
  output: __S(117) as any as S.Schema<GetUserAccessLoggingSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUserAccessLoggingSettings",
}));

export type GetUserSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Gets user settings.
 */
export const getUserSettings: API.OperationMethod<
  GetUserSettingsRequest,
  GetUserSettingsResponse,
  GetUserSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(118) as any as S.Schema<GetUserSettingsRequest>,
  output: __S(122) as any as S.Schema<GetUserSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetUserSettings",
}));

export type ListBrowserSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of browser settings.
 */
export const listBrowserSettings: API.PaginatedOperationMethod<
  ListBrowserSettingsRequest,
  ListBrowserSettingsResponse,
  ListBrowserSettingsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(123) as any as S.Schema<ListBrowserSettingsRequest>,
  output: __S(126) as any as S.Schema<ListBrowserSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListBrowserSettings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListDataProtectionSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of data protection settings.
 */
export const listDataProtectionSettings: API.PaginatedOperationMethod<
  ListDataProtectionSettingsRequest,
  ListDataProtectionSettingsResponse,
  ListDataProtectionSettingsError,
  Credentials | HttpClient.HttpClient,
  DataProtectionSettingsSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(127) as any as S.Schema<ListDataProtectionSettingsRequest>,
  output: __S(130) as any as S.Schema<ListDataProtectionSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDataProtectionSettings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "dataProtectionSettings",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIdentityProvidersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of identity providers for a specific web portal.
 */
export const listIdentityProviders: API.PaginatedOperationMethod<
  ListIdentityProvidersRequest,
  ListIdentityProvidersResponse,
  ListIdentityProvidersError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(131) as any as S.Schema<ListIdentityProvidersRequest>,
  output: __S(134) as any as S.Schema<ListIdentityProvidersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIdentityProviders",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListIpAccessSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of IP access settings.
 */
export const listIpAccessSettings: API.PaginatedOperationMethod<
  ListIpAccessSettingsRequest,
  ListIpAccessSettingsResponse,
  ListIpAccessSettingsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(135) as any as S.Schema<ListIpAccessSettingsRequest>,
  output: __S(138) as any as S.Schema<ListIpAccessSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListIpAccessSettings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListNetworkSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of network settings.
 */
export const listNetworkSettings: API.PaginatedOperationMethod<
  ListNetworkSettingsRequest,
  ListNetworkSettingsResponse,
  ListNetworkSettingsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(139) as any as S.Schema<ListNetworkSettingsRequest>,
  output: __S(142) as any as S.Schema<ListNetworkSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListNetworkSettings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListPortalsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list or web portals.
 */
export const listPortals: API.PaginatedOperationMethod<
  ListPortalsRequest,
  ListPortalsResponse,
  ListPortalsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(143) as any as S.Schema<ListPortalsRequest>,
  output: __S(146) as any as S.Schema<ListPortalsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListPortals",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSessionLoggersError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all available session logger resources.
 */
export const listSessionLoggers: API.PaginatedOperationMethod<
  ListSessionLoggersRequest,
  ListSessionLoggersResponse,
  ListSessionLoggersError,
  Credentials | HttpClient.HttpClient,
  SessionLoggerSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(147) as any as S.Schema<ListSessionLoggersRequest>,
  output: __S(150) as any as S.Schema<ListSessionLoggersResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSessionLoggers",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "sessionLoggers",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListSessionsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists information for multiple secure browser sessions from a specific portal.
 */
export const listSessions: API.PaginatedOperationMethod<
  ListSessionsRequest,
  ListSessionsResponse,
  ListSessionsError,
  Credentials | HttpClient.HttpClient,
  SessionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(151) as any as S.Schema<ListSessionsRequest>,
  output: __S(154) as any as S.Schema<ListSessionsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSessions",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "sessions",
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
 * Retrieves a list of tags for a resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(155) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(156) as any as S.Schema<ListTagsForResourceResponse>,
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

export type ListTrustStoreCertificatesError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of trust store certificates.
 */
export const listTrustStoreCertificates: API.PaginatedOperationMethod<
  ListTrustStoreCertificatesRequest,
  ListTrustStoreCertificatesResponse,
  ListTrustStoreCertificatesError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(157) as any as S.Schema<ListTrustStoreCertificatesRequest>,
  output: __S(160) as any as S.Schema<ListTrustStoreCertificatesResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTrustStoreCertificates",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListTrustStoresError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of trust stores.
 */
export const listTrustStores: API.PaginatedOperationMethod<
  ListTrustStoresRequest,
  ListTrustStoresResponse,
  ListTrustStoresError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(161) as any as S.Schema<ListTrustStoresRequest>,
  output: __S(164) as any as S.Schema<ListTrustStoresResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTrustStores",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListUserAccessLoggingSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of user access logging settings.
 */
export const listUserAccessLoggingSettings: API.PaginatedOperationMethod<
  ListUserAccessLoggingSettingsRequest,
  ListUserAccessLoggingSettingsResponse,
  ListUserAccessLoggingSettingsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(165) as any as S.Schema<ListUserAccessLoggingSettingsRequest>,
  output: __S(168) as any as S.Schema<ListUserAccessLoggingSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUserAccessLoggingSettings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type ListUserSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a list of user settings.
 */
export const listUserSettings: API.PaginatedOperationMethod<
  ListUserSettingsRequest,
  ListUserSettingsResponse,
  ListUserSettingsError,
  Credentials | HttpClient.HttpClient,
  unknown
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(169) as any as S.Schema<ListUserSettingsRequest>,
  output: __S(172) as any as S.Schema<ListUserSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListUserSettings",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    pageSize: "maxResults",
  } as const,
})) as any;

export type TagResourceError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | TooManyTagsException
  | ValidationException
  | CommonErrors;
/**
 * Adds or overwrites one or more tags for the specified resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(173) as any as S.Schema<TagResourceRequest>,
  output: __S(63) as any as S.Schema<TagResourceResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    TooManyTagsException,
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
 * Removes one or more tags from the specified resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(174) as any as S.Schema<UntagResourceRequest>,
  output: __S(63) as any as S.Schema<UntagResourceResponse>,
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

export type UpdateBrowserSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates browser settings.
 */
export const updateBrowserSettings: API.OperationMethod<
  UpdateBrowserSettingsRequest,
  UpdateBrowserSettingsResponse,
  UpdateBrowserSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(175) as any as S.Schema<UpdateBrowserSettingsRequest>,
  output: __S(176) as any as S.Schema<UpdateBrowserSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateBrowserSettings",
}));

export type UpdateDataProtectionSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates data protection settings.
 */
export const updateDataProtectionSettings: API.OperationMethod<
  UpdateDataProtectionSettingsRequest,
  UpdateDataProtectionSettingsResponse,
  UpdateDataProtectionSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(177) as any as S.Schema<UpdateDataProtectionSettingsRequest>,
  output: __S(178) as any as S.Schema<UpdateDataProtectionSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDataProtectionSettings",
}));

export type UpdateIdentityProviderError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the identity provider.
 */
export const updateIdentityProvider: API.OperationMethod<
  UpdateIdentityProviderRequest,
  UpdateIdentityProviderResponse,
  UpdateIdentityProviderError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(179) as any as S.Schema<UpdateIdentityProviderRequest>,
  output: __S(180) as any as S.Schema<UpdateIdentityProviderResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIdentityProvider",
}));

export type UpdateIpAccessSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates IP access settings.
 */
export const updateIpAccessSettings: API.OperationMethod<
  UpdateIpAccessSettingsRequest,
  UpdateIpAccessSettingsResponse,
  UpdateIpAccessSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(181) as any as S.Schema<UpdateIpAccessSettingsRequest>,
  output: __S(182) as any as S.Schema<UpdateIpAccessSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateIpAccessSettings",
}));

export type UpdateNetworkSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates network settings.
 */
export const updateNetworkSettings: API.OperationMethod<
  UpdateNetworkSettingsRequest,
  UpdateNetworkSettingsResponse,
  UpdateNetworkSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(183) as any as S.Schema<UpdateNetworkSettingsRequest>,
  output: __S(184) as any as S.Schema<UpdateNetworkSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateNetworkSettings",
}));

export type UpdatePortalError =
  | AccessDeniedException
  | ConflictException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates a web portal.
 */
export const updatePortal: API.OperationMethod<
  UpdatePortalRequest,
  UpdatePortalResponse,
  UpdatePortalError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(185) as any as S.Schema<UpdatePortalRequest>,
  output: __S(100) as any as S.Schema<UpdatePortalResponse>,
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
  operationName: "UpdatePortal",
}));

export type UpdateSessionLoggerError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the details of a session logger.
 */
export const updateSessionLogger: API.OperationMethod<
  UpdateSessionLoggerRequest,
  UpdateSessionLoggerResponse,
  UpdateSessionLoggerError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(186) as any as S.Schema<UpdateSessionLoggerRequest>,
  output: __S(187) as any as S.Schema<UpdateSessionLoggerResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSessionLogger",
}));

export type UpdateTrustStoreError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ServiceQuotaExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the trust store.
 */
export const updateTrustStore: API.OperationMethod<
  UpdateTrustStoreRequest,
  UpdateTrustStoreResponse,
  UpdateTrustStoreError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(188) as any as S.Schema<UpdateTrustStoreRequest>,
  output: __S(49) as any as S.Schema<UpdateTrustStoreResponse>,
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
  operationName: "UpdateTrustStore",
}));

export type UpdateUserAccessLoggingSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the user access logging settings.
 */
export const updateUserAccessLoggingSettings: API.OperationMethod<
  UpdateUserAccessLoggingSettingsRequest,
  UpdateUserAccessLoggingSettingsResponse,
  UpdateUserAccessLoggingSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(189) as any as S.Schema<UpdateUserAccessLoggingSettingsRequest>,
  output: __S(190) as any as S.Schema<UpdateUserAccessLoggingSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateUserAccessLoggingSettings",
}));

export type UpdateUserSettingsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the user settings.
 */
export const updateUserSettings: API.OperationMethod<
  UpdateUserSettingsRequest,
  UpdateUserSettingsResponse,
  UpdateUserSettingsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(192) as any as S.Schema<UpdateUserSettingsRequest>,
  output: __S(193) as any as S.Schema<UpdateUserSettingsResponse>,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateUserSettings",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          portalArn: S.String.pipe(T.HttpLabel("portalArn")),
          browserSettingsArn: S.String.pipe(T.HttpQuery("browserSettingsArn")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/portals/{portalArn+}/browserSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateBrowserSettingsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ portalArn: S.String, browserSettingsArn: S.String }),
      ).annotate({
        identifier: "AssociateBrowserSettingsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          portalArn: S.String.pipe(T.HttpLabel("portalArn")),
          dataProtectionSettingsArn: S.String.pipe(T.HttpQuery("dataProtectionSettingsArn")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/portals/{portalArn+}/dataProtectionSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateDataProtectionSettingsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ portalArn: S.String, dataProtectionSettingsArn: S.String }),
      ).annotate({
        identifier: "AssociateDataProtectionSettingsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          portalArn: S.String.pipe(T.HttpLabel("portalArn")),
          ipAccessSettingsArn: S.String.pipe(T.HttpQuery("ipAccessSettingsArn")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/portals/{portalArn+}/ipAccessSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateIpAccessSettingsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ portalArn: S.String, ipAccessSettingsArn: S.String }),
      ).annotate({
        identifier: "AssociateIpAccessSettingsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          portalArn: S.String.pipe(T.HttpLabel("portalArn")),
          networkSettingsArn: S.String.pipe(T.HttpQuery("networkSettingsArn")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/portals/{portalArn+}/networkSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateNetworkSettingsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ portalArn: S.String, networkSettingsArn: S.String }),
      ).annotate({
        identifier: "AssociateNetworkSettingsResponse",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          portalArn: S.String.pipe(T.HttpLabel("portalArn")),
          sessionLoggerArn: S.String.pipe(T.HttpQuery("sessionLoggerArn")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/portals/{portalArn+}/sessionLogger" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateSessionLoggerRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ portalArn: S.String, sessionLoggerArn: S.String }),
      ).annotate({
        identifier: "AssociateSessionLoggerResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          portalArn: S.String.pipe(T.HttpLabel("portalArn")),
          trustStoreArn: S.String.pipe(T.HttpQuery("trustStoreArn")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/portals/{portalArn+}/trustStores" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateTrustStoreRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ portalArn: S.String, trustStoreArn: S.String })).annotate({
        identifier: "AssociateTrustStoreResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          portalArn: S.String.pipe(T.HttpLabel("portalArn")),
          userAccessLoggingSettingsArn: S.String.pipe(T.HttpQuery("userAccessLoggingSettingsArn")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/portals/{portalArn+}/userAccessLoggingSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateUserAccessLoggingSettingsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ portalArn: S.String, userAccessLoggingSettingsArn: S.String }),
      ).annotate({
        identifier: "AssociateUserAccessLoggingSettingsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          portalArn: S.String.pipe(T.HttpLabel("portalArn")),
          userSettingsArn: S.String.pipe(T.HttpQuery("userSettingsArn")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/portals/{portalArn+}/userSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateUserSettingsRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ portalArn: S.String, userSettingsArn: S.String })).annotate(
        {
          identifier: "AssociateUserSettingsResponse",
        },
      );
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Key: SensitiveString, Value: SensitiveString })).annotate({
        identifier: "Tag",
      });
    case 1:
      return S.Array(__S(16));
    case 2:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 3:
      return S.Array(S.String);
    case 4:
      return S.Array(SensitiveString);
    case 5:
      return S.suspend(() =>
        S.Struct({
          blockedCategories: S.optional(__S(19)),
          allowedUrls: S.optional(__S(20)),
          blockedUrls: S.optional(__S(20)),
        }),
      ).annotate({
        identifier: "WebContentFilteringPolicy",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          tags: S.optional(__S(17)),
          customerManagedKey: S.optional(S.String),
          additionalEncryptionContext: S.optional(__S(18)),
          browserPolicy: S.optional(SensitiveString),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          webContentFilteringPolicy: S.optional(__S(21)),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/browserSettings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateBrowserSettingsRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ browserSettingsArn: S.String })).annotate({
        identifier: "CreateBrowserSettingsResponse",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          patternName: SensitiveString,
          patternRegex: SensitiveString,
          patternDescription: S.optional(SensitiveString),
          keywordRegex: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "CustomPattern" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          redactionPlaceHolderType: S.String,
          redactionPlaceHolderText: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "RedactionPlaceHolder" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          builtInPatternId: S.optional(SensitiveString),
          customPattern: S.optional(__S(24)),
          redactionPlaceHolder: __S(25),
          enforcedUrls: S.optional(__S(20)),
          exemptUrls: S.optional(__S(20)),
          confidenceLevel: S.optional(S.Number),
        }),
      ).annotate({ identifier: "InlineRedactionPattern" });
    case 3:
      return S.Array(__S(26));
    case 4:
      return S.suspend(() =>
        S.Struct({
          inlineRedactionPatterns: __S(27),
          globalEnforcedUrls: S.optional(__S(20)),
          globalExemptUrls: S.optional(__S(20)),
          globalConfidenceLevel: S.optional(S.Number),
        }),
      ).annotate({
        identifier: "InlineRedactionConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          tags: S.optional(__S(17)),
          customerManagedKey: S.optional(S.String),
          additionalEncryptionContext: S.optional(__S(18)),
          inlineRedactionConfiguration: S.optional(__S(28)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/dataProtectionSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateDataProtectionSettingsRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ dataProtectionSettingsArn: S.String })).annotate({
        identifier: "CreateDataProtectionSettingsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          portalArn: S.String,
          identityProviderName: SensitiveString,
          identityProviderType: S.String,
          identityProviderDetails: __S(18),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          tags: S.optional(__S(17)),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/identityProviders" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateIdentityProviderRequest",
      });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ identityProviderArn: S.String })).annotate({
        identifier: "CreateIdentityProviderResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ ipRange: SensitiveString, description: S.optional(SensitiveString) }),
      ).annotate({ identifier: "IpRule" });
    case 2:
      return S.Array(__S(33));
    case 3:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          tags: S.optional(__S(17)),
          customerManagedKey: S.optional(S.String),
          additionalEncryptionContext: S.optional(__S(18)),
          ipRules: __S(34),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/ipAccessSettings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateIpAccessSettingsRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ ipAccessSettingsArn: S.String })).annotate({
        identifier: "CreateIpAccessSettingsResponse",
      });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          vpcId: S.String,
          subnetIds: __S(37),
          securityGroupIds: __S(37),
          tags: S.optional(__S(17)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/networkSettings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateNetworkSettingsRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({ networkSettingsArn: S.String })).annotate({
        identifier: "CreateNetworkSettingsResponse",
      });
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          displayName: S.optional(SensitiveString),
          tags: S.optional(__S(17)),
          customerManagedKey: S.optional(S.String),
          additionalEncryptionContext: S.optional(__S(18)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          authenticationType: S.optional(S.String),
          instanceType: S.optional(S.String),
          maxConcurrentSessions: S.optional(S.Number),
          portalCustomDomain: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/portals" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreatePortalRequest" });
    case 1:
      return S.suspend(() => S.Struct({ portalArn: S.String, portalEndpoint: S.String })).annotate({
        identifier: "CreatePortalResponse",
      });
    case 2:
      return S.Union([
        /*@__PURE__*/ S.Struct({ all: /*@__PURE__*/ S.Struct({}) }),
        /*@__PURE__*/ S.Struct({ include: __S(19) }),
      ]);
    case 3:
      return S.suspend(() =>
        S.Struct({
          bucket: SensitiveString,
          keyPrefix: S.optional(SensitiveString),
          bucketOwner: S.optional(S.String),
          logFileFormat: S.String,
          folderStructure: S.String,
        }),
      ).annotate({ identifier: "S3LogConfiguration" });
    case 4:
      return S.suspend(() => S.Struct({ s3: S.optional(__S(43)) })).annotate({
        identifier: "LogConfiguration",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          eventFilter: __S(42),
          logConfiguration: __S(44),
          displayName: S.optional(SensitiveString),
          customerManagedKey: S.optional(S.String),
          additionalEncryptionContext: S.optional(__S(18)),
          tags: S.optional(__S(17)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/sessionLoggers" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateSessionLoggerRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ sessionLoggerArn: S.String })).annotate({
        identifier: "CreateSessionLoggerResponse",
      });
    case 7:
      return S.Array(T.Blob);
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          certificateList: __S(47),
          tags: S.optional(__S(17)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/trustStores" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateTrustStoreRequest" });
    case 1:
      return S.suspend(() => S.Struct({ trustStoreArn: S.String })).annotate({
        identifier: "CreateTrustStoreResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          kinesisStreamArn: S.String,
          tags: S.optional(__S(17)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/userAccessLoggingSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "CreateUserAccessLoggingSettingsRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ userAccessLoggingSettingsArn: S.String })).annotate({
        identifier: "CreateUserAccessLoggingSettingsResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          domain: SensitiveString,
          name: S.optional(SensitiveString),
          path: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "CookieSpecification" });
    case 5:
      return S.Array(__S(52));
    case 6:
      return S.suspend(() =>
        S.Struct({ allowlist: __S(53), blocklist: S.optional(__S(53)) }),
      ).annotate({
        identifier: "CookieSynchronizationConfiguration",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          toolbarType: S.optional(S.String),
          visualMode: S.optional(S.String),
          hiddenToolbarItems: S.optional(__S(37)),
          maxDisplayResolution: S.optional(S.String),
        }),
      ).annotate({ identifier: "ToolbarConfiguration" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.Union([
        /*@__PURE__*/ S.Struct({ blob: T.Blob }),
        /*@__PURE__*/ S.Struct({ s3Uri: S.String }),
      ]);
    case 1:
      return S.suspend(() =>
        S.Struct({
          browserTabTitle: S.String,
          welcomeText: S.String,
          loginTitle: S.optional(S.String),
          loginDescription: S.optional(S.String),
          loginButtonText: S.optional(S.String),
          contactLink: S.optional(S.String),
          contactButtonText: S.optional(S.String),
          loadingText: S.optional(S.String),
        }),
      ).annotate({ identifier: "LocalizedBrandingStrings" });
    case 2:
      return S.Record(S.String, /*@__PURE__*/ __S(57).pipe(S.optional));
    case 3:
      return S.suspend(() =>
        S.Struct({
          logo: __S(56),
          wallpaper: S.optional(__S(56)),
          favicon: __S(56),
          localizedStrings: __S(58),
          colorTheme: S.String,
          termsOfService: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "BrandingConfigurationCreateInput",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          copyAllowed: S.String,
          pasteAllowed: S.String,
          downloadAllowed: S.String,
          uploadAllowed: S.String,
          printAllowed: S.String,
          tags: S.optional(__S(17)),
          disconnectTimeoutInMinutes: S.optional(S.Number),
          idleDisconnectTimeoutInMinutes: S.optional(S.Number),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          cookieSynchronizationConfiguration: S.optional(__S(54)),
          customerManagedKey: S.optional(S.String),
          additionalEncryptionContext: S.optional(__S(18)),
          deepLinkAllowed: S.optional(S.String),
          toolbarConfiguration: S.optional(__S(55)),
          brandingConfigurationInput: S.optional(__S(59)),
          webAuthnAllowed: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/userSettings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "CreateUserSettingsRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({ userSettingsArn: S.String })).annotate({
        identifier: "CreateUserSettingsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ browserSettingsArn: S.String.pipe(T.HttpLabel("browserSettingsArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/browserSettings/{browserSettingsArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteBrowserSettingsRequest",
      });
    case 7:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteBrowserSettingsResponse",
      });
  }
}
function __c8(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          dataProtectionSettingsArn: S.String.pipe(T.HttpLabel("dataProtectionSettingsArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/dataProtectionSettings/{dataProtectionSettingsArn+}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteDataProtectionSettingsRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteDataProtectionSettingsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ identityProviderArn: S.String.pipe(T.HttpLabel("identityProviderArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/identityProviders/{identityProviderArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteIdentityProviderRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ipAccessSettingsArn: S.String.pipe(T.HttpLabel("ipAccessSettingsArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/ipAccessSettings/{ipAccessSettingsArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteIpAccessSettingsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ networkSettingsArn: S.String.pipe(T.HttpLabel("networkSettingsArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/networkSettings/{networkSettingsArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteNetworkSettingsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ portalArn: S.String.pipe(T.HttpLabel("portalArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/portals/{portalArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeletePortalRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ sessionLoggerArn: S.String.pipe(T.HttpLabel("sessionLoggerArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/sessionLoggers/{sessionLoggerArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSessionLoggerRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ trustStoreArn: S.String.pipe(T.HttpLabel("trustStoreArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/trustStores/{trustStoreArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteTrustStoreRequest" });
  }
}
function __c9(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          userAccessLoggingSettingsArn: S.String.pipe(T.HttpLabel("userAccessLoggingSettingsArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/userAccessLoggingSettings/{userAccessLoggingSettingsArn+}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteUserAccessLoggingSettingsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ userSettingsArn: S.String.pipe(T.HttpLabel("userSettingsArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/userSettings/{userSettingsArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteUserSettingsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ portalArn: S.String.pipe(T.HttpLabel("portalArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/portals/{portalArn+}/browserSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateBrowserSettingsRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ portalArn: S.String.pipe(T.HttpLabel("portalArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/portals/{portalArn+}/dataProtectionSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateDataProtectionSettingsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ portalArn: S.String.pipe(T.HttpLabel("portalArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/portals/{portalArn+}/ipAccessSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateIpAccessSettingsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ portalArn: S.String.pipe(T.HttpLabel("portalArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/portals/{portalArn+}/networkSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateNetworkSettingsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ portalArn: S.String.pipe(T.HttpLabel("portalArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/portals/{portalArn+}/sessionLogger" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateSessionLoggerRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ portalArn: S.String.pipe(T.HttpLabel("portalArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/portals/{portalArn+}/trustStores" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateTrustStoreRequest",
      });
  }
}
function __c10(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ portalArn: S.String.pipe(T.HttpLabel("portalArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/portals/{portalArn+}/userAccessLoggingSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateUserAccessLoggingSettingsRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ portalArn: S.String.pipe(T.HttpLabel("portalArn")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/portals/{portalArn+}/userSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateUserSettingsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          portalId: S.String.pipe(T.HttpLabel("portalId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/portals/{portalId}/sessions/{sessionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ExpireSessionRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({ browserSettingsArn: S.String.pipe(T.HttpLabel("browserSettingsArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/browserSettings/{browserSettingsArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetBrowserSettingsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          browserSettingsArn: S.String,
          associatedPortalArns: S.optional(__S(37)),
          browserPolicy: S.optional(SensitiveString),
          customerManagedKey: S.optional(S.String),
          additionalEncryptionContext: S.optional(__S(18)),
          webContentFilteringPolicy: S.optional(__S(21)),
        }),
      ).annotate({ identifier: "BrowserSettings" });
    case 5:
      return S.suspend(() => S.Struct({ browserSettings: S.optional(__S(84)) })).annotate({
        identifier: "GetBrowserSettingsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          dataProtectionSettingsArn: S.String.pipe(T.HttpLabel("dataProtectionSettingsArn")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/dataProtectionSettings/{dataProtectionSettingsArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetDataProtectionSettingsRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          dataProtectionSettingsArn: S.String,
          inlineRedactionConfiguration: S.optional(__S(28)),
          associatedPortalArns: S.optional(__S(37)),
          displayName: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          customerManagedKey: S.optional(S.String),
          additionalEncryptionContext: S.optional(__S(18)),
        }),
      ).annotate({ identifier: "DataProtectionSettings" });
  }
}
function __c11(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ dataProtectionSettings: S.optional(__S(87)) })).annotate({
        identifier: "GetDataProtectionSettingsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ identityProviderArn: S.String.pipe(T.HttpLabel("identityProviderArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/identityProviders/{identityProviderArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetIdentityProviderRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          identityProviderArn: S.String,
          identityProviderName: S.optional(SensitiveString),
          identityProviderType: S.optional(S.String),
          identityProviderDetails: S.optional(__S(18)),
        }),
      ).annotate({ identifier: "IdentityProvider" });
    case 3:
      return S.suspend(() => S.Struct({ identityProvider: S.optional(__S(90)) })).annotate({
        identifier: "GetIdentityProviderResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ ipAccessSettingsArn: S.String.pipe(T.HttpLabel("ipAccessSettingsArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/ipAccessSettings/{ipAccessSettingsArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetIpAccessSettingsRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ipAccessSettingsArn: S.String,
          associatedPortalArns: S.optional(__S(37)),
          ipRules: S.optional(__S(34)),
          displayName: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          customerManagedKey: S.optional(S.String),
          additionalEncryptionContext: S.optional(__S(18)),
        }),
      ).annotate({ identifier: "IpAccessSettings" });
    case 6:
      return S.suspend(() => S.Struct({ ipAccessSettings: S.optional(__S(93)) })).annotate({
        identifier: "GetIpAccessSettingsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ networkSettingsArn: S.String.pipe(T.HttpLabel("networkSettingsArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/networkSettings/{networkSettingsArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetNetworkSettingsRequest",
      });
  }
}
function __c12(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          networkSettingsArn: S.String,
          associatedPortalArns: S.optional(__S(37)),
          vpcId: S.optional(S.String),
          subnetIds: S.optional(__S(37)),
          securityGroupIds: S.optional(__S(37)),
        }),
      ).annotate({ identifier: "NetworkSettings" });
    case 1:
      return S.suspend(() => S.Struct({ networkSettings: S.optional(__S(96)) })).annotate({
        identifier: "GetNetworkSettingsResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ portalArn: S.String.pipe(T.HttpLabel("portalArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/portals/{portalArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetPortalRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          portalArn: S.String,
          rendererType: S.optional(S.String),
          browserType: S.optional(S.String),
          portalStatus: S.optional(S.String),
          portalEndpoint: S.optional(S.String),
          displayName: S.optional(SensitiveString),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          browserSettingsArn: S.optional(S.String),
          dataProtectionSettingsArn: S.optional(S.String),
          userSettingsArn: S.optional(S.String),
          networkSettingsArn: S.optional(S.String),
          sessionLoggerArn: S.optional(S.String),
          trustStoreArn: S.optional(S.String),
          statusReason: S.optional(S.String),
          userAccessLoggingSettingsArn: S.optional(S.String),
          authenticationType: S.optional(S.String),
          ipAccessSettingsArn: S.optional(S.String),
          customerManagedKey: S.optional(S.String),
          additionalEncryptionContext: S.optional(__S(18)),
          instanceType: S.optional(S.String),
          maxConcurrentSessions: S.optional(S.Number),
          portalCustomDomain: S.optional(S.String),
        }),
      ).annotate({ identifier: "Portal" });
    case 4:
      return S.suspend(() => S.Struct({ portal: S.optional(__S(99)) })).annotate({
        identifier: "GetPortalResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ portalArn: S.String.pipe(T.HttpLabel("portalArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/portalIdp/{portalArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetPortalServiceProviderMetadataRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ portalArn: S.String, serviceProviderSamlMetadata: S.optional(S.String) }),
      ).annotate({
        identifier: "GetPortalServiceProviderMetadataResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          portalId: S.String.pipe(T.HttpLabel("portalId")),
          sessionId: S.String.pipe(T.HttpLabel("sessionId")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/portals/{portalId}/sessions/{sessionId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSessionRequest" });
  }
}
function __c13(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          portalArn: S.optional(S.String),
          sessionId: S.optional(S.String),
          username: S.optional(SensitiveString),
          clientIpAddresses: S.optional(__S(20)),
          status: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "Session" });
    case 1:
      return S.suspend(() => S.Struct({ session: S.optional(__S(104)) })).annotate({
        identifier: "GetSessionResponse",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({ sessionLoggerArn: S.String.pipe(T.HttpLabel("sessionLoggerArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/sessionLoggers/{sessionLoggerArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetSessionLoggerRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          sessionLoggerArn: S.String,
          eventFilter: S.optional(__S(42)),
          logConfiguration: S.optional(__S(44)),
          customerManagedKey: S.optional(S.String),
          additionalEncryptionContext: S.optional(__S(18)),
          associatedPortalArns: S.optional(__S(37)),
          displayName: S.optional(SensitiveString),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "SessionLogger" });
    case 4:
      return S.suspend(() => S.Struct({ sessionLogger: S.optional(__S(107)) })).annotate({
        identifier: "GetSessionLoggerResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ trustStoreArn: S.String.pipe(T.HttpLabel("trustStoreArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/trustStores/{trustStoreArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetTrustStoreRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({ associatedPortalArns: S.optional(__S(37)), trustStoreArn: S.String }),
      ).annotate({ identifier: "TrustStore" });
    case 7:
      return S.suspend(() => S.Struct({ trustStore: S.optional(__S(110)) })).annotate({
        identifier: "GetTrustStoreResponse",
      });
  }
}
function __c14(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          trustStoreArn: S.String.pipe(T.HttpLabel("trustStoreArn")),
          thumbprint: S.String.pipe(T.HttpQuery("thumbprint")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/trustStores/{trustStoreArn+}/certificate" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetTrustStoreCertificateRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          thumbprint: S.optional(S.String),
          subject: S.optional(S.String),
          issuer: S.optional(S.String),
          notValidBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          notValidAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          body: S.optional(T.Blob),
        }),
      ).annotate({ identifier: "Certificate" });
    case 2:
      return S.suspend(() =>
        S.Struct({ trustStoreArn: S.String, certificate: S.optional(__S(113)) }),
      ).annotate({
        identifier: "GetTrustStoreCertificateResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          userAccessLoggingSettingsArn: S.String.pipe(T.HttpLabel("userAccessLoggingSettingsArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/userAccessLoggingSettings/{userAccessLoggingSettingsArn+}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetUserAccessLoggingSettingsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          userAccessLoggingSettingsArn: S.String,
          associatedPortalArns: S.optional(__S(37)),
          kinesisStreamArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UserAccessLoggingSettings",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ userAccessLoggingSettings: S.optional(__S(116)) }),
      ).annotate({
        identifier: "GetUserAccessLoggingSettingsResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ userSettingsArn: S.String.pipe(T.HttpLabel("userSettingsArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/userSettings/{userSettingsArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetUserSettingsRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          mimeType: S.String,
          fileExtension: S.String,
          lastUploadTimestamp: S.Date.pipe(T.TimestampFormat("epoch-seconds")),
        }),
      ).annotate({ identifier: "ImageMetadata" });
  }
}
function __c15(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          logo: __S(119),
          wallpaper: S.optional(__S(119)),
          favicon: __S(119),
          localizedStrings: __S(58),
          colorTheme: S.String,
          termsOfService: S.optional(SensitiveString),
        }),
      ).annotate({ identifier: "BrandingConfiguration" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          userSettingsArn: S.String,
          associatedPortalArns: S.optional(__S(37)),
          copyAllowed: S.optional(S.String),
          pasteAllowed: S.optional(S.String),
          downloadAllowed: S.optional(S.String),
          uploadAllowed: S.optional(S.String),
          printAllowed: S.optional(S.String),
          disconnectTimeoutInMinutes: S.optional(S.Number),
          idleDisconnectTimeoutInMinutes: S.optional(S.Number),
          cookieSynchronizationConfiguration: S.optional(__S(54)),
          customerManagedKey: S.optional(S.String),
          additionalEncryptionContext: S.optional(__S(18)),
          deepLinkAllowed: S.optional(S.String),
          toolbarConfiguration: S.optional(__S(55)),
          brandingConfiguration: S.optional(__S(120)),
          webAuthnAllowed: S.optional(S.String),
        }),
      ).annotate({ identifier: "UserSettings" });
    case 2:
      return S.suspend(() => S.Struct({ userSettings: S.optional(__S(121)) })).annotate({
        identifier: "GetUserSettingsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/browserSettings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListBrowserSettingsRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ browserSettingsArn: S.String })).annotate({
        identifier: "BrowserSettingsSummary",
      });
    case 5:
      return S.Array(__S(124));
    case 6:
      return S.suspend(() =>
        S.Struct({
          browserSettings: S.optional(__S(125)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListBrowserSettingsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/dataProtectionSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListDataProtectionSettingsRequest",
      });
  }
}
function __c16(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          dataProtectionSettingsArn: S.String,
          displayName: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "DataProtectionSettingsSummary",
      });
    case 1:
      return S.Array(__S(128));
    case 2:
      return S.suspend(() =>
        S.Struct({
          dataProtectionSettings: S.optional(__S(129)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListDataProtectionSettingsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          portalArn: S.String.pipe(T.HttpLabel("portalArn")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/portals/{portalArn+}/identityProviders" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListIdentityProvidersRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          identityProviderArn: S.String,
          identityProviderName: S.optional(SensitiveString),
          identityProviderType: S.optional(S.String),
        }),
      ).annotate({ identifier: "IdentityProviderSummary" });
    case 5:
      return S.Array(__S(132));
    case 6:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String),
          identityProviders: S.optional(__S(133)),
        }),
      ).annotate({
        identifier: "ListIdentityProvidersResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/ipAccessSettings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListIpAccessSettingsRequest",
      });
  }
}
function __c17(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ipAccessSettingsArn: S.String,
          displayName: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "IpAccessSettingsSummary" });
    case 1:
      return S.Array(__S(136));
    case 2:
      return S.suspend(() =>
        S.Struct({
          ipAccessSettings: S.optional(__S(137)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListIpAccessSettingsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/networkSettings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListNetworkSettingsRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ networkSettingsArn: S.String, vpcId: S.optional(S.String) }),
      ).annotate({ identifier: "NetworkSettingsSummary" });
    case 5:
      return S.Array(__S(140));
    case 6:
      return S.suspend(() =>
        S.Struct({
          networkSettings: S.optional(__S(141)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListNetworkSettingsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/portals" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListPortalsRequest" });
  }
}
function __c18(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          portalArn: S.String,
          rendererType: S.optional(S.String),
          browserType: S.optional(S.String),
          portalStatus: S.optional(S.String),
          portalEndpoint: S.optional(S.String),
          displayName: S.optional(SensitiveString),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          browserSettingsArn: S.optional(S.String),
          dataProtectionSettingsArn: S.optional(S.String),
          userSettingsArn: S.optional(S.String),
          networkSettingsArn: S.optional(S.String),
          sessionLoggerArn: S.optional(S.String),
          trustStoreArn: S.optional(S.String),
          userAccessLoggingSettingsArn: S.optional(S.String),
          authenticationType: S.optional(S.String),
          ipAccessSettingsArn: S.optional(S.String),
          instanceType: S.optional(S.String),
          maxConcurrentSessions: S.optional(S.Number),
          portalCustomDomain: S.optional(S.String),
        }),
      ).annotate({ identifier: "PortalSummary" });
    case 1:
      return S.Array(__S(144));
    case 2:
      return S.suspend(() =>
        S.Struct({ portals: S.optional(__S(145)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListPortalsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/sessionLoggers" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "ListSessionLoggersRequest",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          sessionLoggerArn: S.String,
          logConfiguration: S.optional(__S(44)),
          displayName: S.optional(SensitiveString),
          creationDate: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "SessionLoggerSummary" });
    case 5:
      return S.Array(__S(148));
    case 6:
      return S.suspend(() =>
        S.Struct({
          sessionLoggers: S.optional(__S(149)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListSessionLoggersResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          portalId: S.String.pipe(T.HttpLabel("portalId")),
          username: S.optional(SensitiveString).pipe(T.HttpQuery("username")),
          sessionId: S.optional(S.String).pipe(T.HttpQuery("sessionId")),
          sortBy: S.optional(S.String).pipe(T.HttpQuery("sortBy")),
          status: S.optional(S.String).pipe(T.HttpQuery("status")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/portals/{portalId}/sessions" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListSessionsRequest" });
  }
}
function __c19(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          portalArn: S.optional(S.String),
          sessionId: S.optional(S.String),
          username: S.optional(SensitiveString),
          status: S.optional(S.String),
          startTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          endTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "SessionSummary" });
    case 1:
      return S.Array(__S(152));
    case 2:
      return S.suspend(() =>
        S.Struct({ sessions: __S(153), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListSessionsResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({ resourceArn: S.String.pipe(T.HttpLabel("resourceArn")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/tags/{resourceArn+}" }),
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
    case 4:
      return S.suspend(() => S.Struct({ tags: S.optional(__S(17)) })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          trustStoreArn: S.String.pipe(T.HttpLabel("trustStoreArn")),
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/trustStores/{trustStoreArn+}/certificates" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListTrustStoreCertificatesRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          thumbprint: S.optional(S.String),
          subject: S.optional(S.String),
          issuer: S.optional(S.String),
          notValidBefore: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          notValidAfter: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "CertificateSummary" });
    case 7:
      return S.Array(__S(158));
  }
}
function __c20(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          certificateList: S.optional(__S(159)),
          trustStoreArn: S.String,
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListTrustStoreCertificatesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/trustStores" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListTrustStoresRequest" });
    case 2:
      return S.suspend(() => S.Struct({ trustStoreArn: S.optional(S.String) })).annotate({
        identifier: "TrustStoreSummary",
      });
    case 3:
      return S.Array(__S(162));
    case 4:
      return S.suspend(() =>
        S.Struct({
          trustStores: S.optional(__S(163)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListTrustStoresResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/userAccessLoggingSettings" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListUserAccessLoggingSettingsRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          userAccessLoggingSettingsArn: S.String,
          kinesisStreamArn: S.optional(S.String),
        }),
      ).annotate({
        identifier: "UserAccessLoggingSettingsSummary",
      });
    case 7:
      return S.Array(__S(166));
  }
}
function __c21(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          userAccessLoggingSettings: S.optional(__S(167)),
          nextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListUserAccessLoggingSettingsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          nextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          maxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/userSettings" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListUserSettingsRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          userSettingsArn: S.String,
          copyAllowed: S.optional(S.String),
          pasteAllowed: S.optional(S.String),
          downloadAllowed: S.optional(S.String),
          uploadAllowed: S.optional(S.String),
          printAllowed: S.optional(S.String),
          disconnectTimeoutInMinutes: S.optional(S.Number),
          idleDisconnectTimeoutInMinutes: S.optional(S.Number),
          cookieSynchronizationConfiguration: S.optional(__S(54)),
          deepLinkAllowed: S.optional(S.String),
          toolbarConfiguration: S.optional(__S(55)),
          brandingConfiguration: S.optional(__S(120)),
          webAuthnAllowed: S.optional(S.String),
        }),
      ).annotate({ identifier: "UserSettingsSummary" });
    case 3:
      return S.Array(__S(170));
    case 4:
      return S.suspend(() =>
        S.Struct({ userSettings: S.optional(__S(171)), nextToken: S.optional(S.String) }),
      ).annotate({ identifier: "ListUserSettingsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tags: __S(17),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/tags/{resourceArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "TagResourceRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          resourceArn: S.String.pipe(T.HttpLabel("resourceArn")),
          tagKeys: __S(20).pipe(T.HttpQuery("tagKeys")),
        }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/tags/{resourceArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UntagResourceRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          browserSettingsArn: S.String.pipe(T.HttpLabel("browserSettingsArn")),
          browserPolicy: S.optional(SensitiveString),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          webContentFilteringPolicy: S.optional(__S(21)),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/browserSettings/{browserSettingsArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateBrowserSettingsRequest",
      });
  }
}
function __c22(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ browserSettings: __S(84) })).annotate({
        identifier: "UpdateBrowserSettingsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          dataProtectionSettingsArn: S.String.pipe(T.HttpLabel("dataProtectionSettingsArn")),
          inlineRedactionConfiguration: S.optional(__S(28)),
          displayName: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/dataProtectionSettings/{dataProtectionSettingsArn+}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateDataProtectionSettingsRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ dataProtectionSettings: __S(87) })).annotate({
        identifier: "UpdateDataProtectionSettingsResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          identityProviderArn: S.String.pipe(T.HttpLabel("identityProviderArn")),
          identityProviderName: S.optional(SensitiveString),
          identityProviderType: S.optional(S.String),
          identityProviderDetails: S.optional(__S(18)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/identityProviders/{identityProviderArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateIdentityProviderRequest",
      });
    case 4:
      return S.suspend(() => S.Struct({ identityProvider: __S(90) })).annotate({
        identifier: "UpdateIdentityProviderResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ipAccessSettingsArn: S.String.pipe(T.HttpLabel("ipAccessSettingsArn")),
          displayName: S.optional(SensitiveString),
          description: S.optional(SensitiveString),
          ipRules: S.optional(__S(34)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/ipAccessSettings/{ipAccessSettingsArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateIpAccessSettingsRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ ipAccessSettings: __S(93) })).annotate({
        identifier: "UpdateIpAccessSettingsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          networkSettingsArn: S.String.pipe(T.HttpLabel("networkSettingsArn")),
          vpcId: S.optional(S.String),
          subnetIds: S.optional(__S(37)),
          securityGroupIds: S.optional(__S(37)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/networkSettings/{networkSettingsArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateNetworkSettingsRequest",
      });
  }
}
function __c23(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ networkSettings: __S(96) })).annotate({
        identifier: "UpdateNetworkSettingsResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          portalArn: S.String.pipe(T.HttpLabel("portalArn")),
          displayName: S.optional(SensitiveString),
          authenticationType: S.optional(S.String),
          instanceType: S.optional(S.String),
          maxConcurrentSessions: S.optional(S.Number),
          portalCustomDomain: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/portals/{portalArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdatePortalRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          sessionLoggerArn: S.String.pipe(T.HttpLabel("sessionLoggerArn")),
          eventFilter: S.optional(__S(42)),
          logConfiguration: S.optional(__S(44)),
          displayName: S.optional(SensitiveString),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/sessionLoggers/{sessionLoggerArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateSessionLoggerRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({ sessionLogger: __S(107) })).annotate({
        identifier: "UpdateSessionLoggerResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({
          trustStoreArn: S.String.pipe(T.HttpLabel("trustStoreArn")),
          certificatesToAdd: S.optional(__S(47)),
          certificatesToDelete: S.optional(__S(37)),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/trustStores/{trustStoreArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateTrustStoreRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          userAccessLoggingSettingsArn: S.String.pipe(T.HttpLabel("userAccessLoggingSettingsArn")),
          kinesisStreamArn: S.optional(S.String),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/userAccessLoggingSettings/{userAccessLoggingSettingsArn+}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateUserAccessLoggingSettingsRequest",
      });
    case 6:
      return S.suspend(() => S.Struct({ userAccessLoggingSettings: __S(116) })).annotate({
        identifier: "UpdateUserAccessLoggingSettingsResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          logo: S.optional(__S(56)),
          wallpaper: S.optional(__S(56)),
          favicon: S.optional(__S(56)),
          localizedStrings: S.optional(__S(58)),
          colorTheme: S.optional(S.String),
          termsOfService: S.optional(SensitiveString),
        }),
      ).annotate({
        identifier: "BrandingConfigurationUpdateInput",
      });
  }
}
function __c24(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          userSettingsArn: S.String.pipe(T.HttpLabel("userSettingsArn")),
          copyAllowed: S.optional(S.String),
          pasteAllowed: S.optional(S.String),
          downloadAllowed: S.optional(S.String),
          uploadAllowed: S.optional(S.String),
          printAllowed: S.optional(S.String),
          disconnectTimeoutInMinutes: S.optional(S.Number),
          idleDisconnectTimeoutInMinutes: S.optional(S.Number),
          clientToken: S.optional(S.String).pipe(T.IdempotencyToken()),
          cookieSynchronizationConfiguration: S.optional(__S(54)),
          deepLinkAllowed: S.optional(S.String),
          toolbarConfiguration: S.optional(__S(55)),
          brandingConfigurationInput: S.optional(__S(191)),
          webAuthnAllowed: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "PATCH", uri: "/userSettings/{userSettingsArn+}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateUserSettingsRequest",
      });
    case 1:
      return S.suspend(() => S.Struct({ userSettings: __S(121) })).annotate({
        identifier: "UpdateUserSettingsResponse",
      });
    case 2:
      return S.suspend(() => S.Struct({ name: S.String, message: S.String })).annotate({
        identifier: "ValidationExceptionField",
      });
    case 3:
      return S.Array(__S(194));
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
