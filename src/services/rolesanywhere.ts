import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface RolesAnywhere {
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  putNotificationSettings(
    input: PutNotificationSettingsRequest,
  ): Effect.Effect<
    PutNotificationSettingsResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  resetNotificationSettings(
    input: ResetNotificationSettingsRequest,
  ): Effect.Effect<
    ResetNotificationSettingsResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError
  >;
}

export type Rolesanywhere = RolesAnywhere;

export declare class AccessDeniedException extends EffectData.TaggedError(
  "AccessDeniedException",
)<{
  readonly message?: string;
}> {}
export type AmazonResourceName = string;

export interface AttributeMapping {
  certificateField?: string;
  mappingRules?: Array<MappingRule>;
}
export type AttributeMappings = Array<AttributeMapping>;
export type CertificateField = string;

export interface CreateProfileRequest {
  name: string;
  requireInstanceProperties?: boolean;
  sessionPolicy?: string;
  roleArns: Array<string>;
  managedPolicyArns?: Array<string>;
  durationSeconds?: number;
  enabled?: boolean;
  tags?: Array<Tag>;
  acceptRoleSessionName?: boolean;
}
export interface CreateTrustAnchorRequest {
  name: string;
  source: Source;
  enabled?: boolean;
  tags?: Array<Tag>;
  notificationSettings?: Array<NotificationSetting>;
}
export type CredentialSummaries = Array<CredentialSummary>;
export interface CredentialSummary {
  seenAt?: Date | string;
  serialNumber?: string;
  issuer?: string;
  enabled?: boolean;
  x509CertificateData?: string;
  failed?: boolean;
}
export interface CrlDetail {
  crlId?: string;
  crlArn?: string;
  name?: string;
  enabled?: boolean;
  crlData?: Uint8Array | string;
  trustAnchorArn?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export interface CrlDetailResponse {
  crl: CrlDetail;
}
export type CrlDetails = Array<CrlDetail>;
export interface DeleteAttributeMappingRequest {
  profileId: string;
  certificateField: string;
  specifiers?: Array<string>;
}
export interface DeleteAttributeMappingResponse {
  profile: ProfileDetail;
}
export interface ImportCrlRequest {
  name: string;
  crlData: Uint8Array | string;
  enabled?: boolean;
  tags?: Array<Tag>;
  trustAnchorArn: string;
}
export type InstanceProperties = Array<InstanceProperty>;
export interface InstanceProperty {
  seenAt?: Date | string;
  properties?: Record<string, string>;
  failed?: boolean;
}
export type InstancePropertyMap = Record<string, string>;
export interface ListCrlsResponse {
  nextToken?: string;
  crls?: Array<CrlDetail>;
}
export interface ListProfilesResponse {
  nextToken?: string;
  profiles?: Array<ProfileDetail>;
}
export interface ListRequest {
  nextToken?: string;
  pageSize?: number;
}
export interface ListSubjectsResponse {
  subjects?: Array<SubjectSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Array<Tag>;
}
export interface ListTrustAnchorsResponse {
  nextToken?: string;
  trustAnchors?: Array<TrustAnchorDetail>;
}
export type ManagedPolicyList = Array<string>;
export interface MappingRule {
  specifier: string;
}
export type MappingRules = Array<MappingRule>;
export type NotificationChannel = string;

export type NotificationEvent = string;

export interface NotificationSetting {
  enabled: boolean;
  event: string;
  threshold?: number;
  channel?: string;
}
export interface NotificationSettingDetail {
  enabled: boolean;
  event: string;
  threshold?: number;
  channel?: string;
  configuredBy?: string;
}
export type NotificationSettingDetails = Array<NotificationSettingDetail>;
export interface NotificationSettingKey {
  event: string;
  channel?: string;
}
export type NotificationSettingKeys = Array<NotificationSettingKey>;
export type NotificationSettings = Array<NotificationSetting>;
export type ProfileArn = string;

export interface ProfileDetail {
  profileId?: string;
  profileArn?: string;
  name?: string;
  requireInstanceProperties?: boolean;
  enabled?: boolean;
  createdBy?: string;
  sessionPolicy?: string;
  roleArns?: Array<string>;
  managedPolicyArns?: Array<string>;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  durationSeconds?: number;
  acceptRoleSessionName?: boolean;
  attributeMappings?: Array<AttributeMapping>;
}
export interface ProfileDetailResponse {
  profile?: ProfileDetail;
}
export type ProfileDetails = Array<ProfileDetail>;
export interface PutAttributeMappingRequest {
  profileId: string;
  certificateField: string;
  mappingRules: Array<MappingRule>;
}
export interface PutAttributeMappingResponse {
  profile: ProfileDetail;
}
export interface PutNotificationSettingsRequest {
  trustAnchorId: string;
  notificationSettings: Array<NotificationSetting>;
}
export interface PutNotificationSettingsResponse {
  trustAnchor: TrustAnchorDetail;
}
export interface ResetNotificationSettingsRequest {
  trustAnchorId: string;
  notificationSettingKeys: Array<NotificationSettingKey>;
}
export interface ResetNotificationSettingsResponse {
  trustAnchor: TrustAnchorDetail;
}
export type ResourceName = string;

export declare class ResourceNotFoundException extends EffectData.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type RoleArn = string;

export type RoleArnList = Array<string>;
export interface ScalarCrlRequest {
  crlId: string;
}
export interface ScalarProfileRequest {
  profileId: string;
}
export interface ScalarSubjectRequest {
  subjectId: string;
}
export interface ScalarTrustAnchorRequest {
  trustAnchorId: string;
}
export interface Source {
  sourceType?: string;
  sourceData?: SourceData;
}
interface _SourceData {
  x509CertificateData?: string;
  acmPcaArn?: string;
}

export type SourceData =
  | (_SourceData & { x509CertificateData: string })
  | (_SourceData & { acmPcaArn: string });
export type SpecifierList = Array<string>;
export interface SubjectDetail {
  subjectArn?: string;
  subjectId?: string;
  enabled?: boolean;
  x509Subject?: string;
  lastSeenAt?: Date | string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  credentials?: Array<CredentialSummary>;
  instanceProperties?: Array<InstanceProperty>;
}
export interface SubjectDetailResponse {
  subject?: SubjectDetail;
}
export type SubjectSummaries = Array<SubjectSummary>;
export interface SubjectSummary {
  subjectArn?: string;
  subjectId?: string;
  enabled?: boolean;
  x509Subject?: string;
  lastSeenAt?: Date | string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
export interface Tag {
  key: string;
  value: string;
}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagList = Array<Tag>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Array<Tag>;
}
export interface TagResourceResponse {}
export type TagValue = string;

export declare class TooManyTagsException extends EffectData.TaggedError(
  "TooManyTagsException",
)<{
  readonly message?: string;
}> {}
export type TrustAnchorArn = string;

export interface TrustAnchorDetail {
  trustAnchorId?: string;
  trustAnchorArn?: string;
  name?: string;
  source?: Source;
  enabled?: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  notificationSettings?: Array<NotificationSettingDetail>;
}
export interface TrustAnchorDetailResponse {
  trustAnchor: TrustAnchorDetail;
}
export type TrustAnchorDetails = Array<TrustAnchorDetail>;
export type TrustAnchorType = string;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {}
export interface UpdateCrlRequest {
  crlId: string;
  name?: string;
  crlData?: Uint8Array | string;
}
export interface UpdateProfileRequest {
  profileId: string;
  name?: string;
  sessionPolicy?: string;
  roleArns?: Array<string>;
  managedPolicyArns?: Array<string>;
  durationSeconds?: number;
  acceptRoleSessionName?: boolean;
}
export interface UpdateTrustAnchorRequest {
  trustAnchorId: string;
  name?: string;
  source?: Source;
}
export type Uuid = string;

export declare class ValidationException extends EffectData.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutNotificationSettings {
  export type Input = PutNotificationSettingsRequest;
  export type Output = PutNotificationSettingsResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ResetNotificationSettings {
  export type Input = ResetNotificationSettingsRequest;
  export type Output = ResetNotificationSettingsResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
