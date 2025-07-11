import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface RolesAnywhere {
  createProfile(
    input: CreateProfileRequest,
  ): Effect.Effect<
    ProfileDetailResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  createTrustAnchor(
    input: CreateTrustAnchorRequest,
  ): Effect.Effect<
    TrustAnchorDetailResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  deleteAttributeMapping(
    input: DeleteAttributeMappingRequest,
  ): Effect.Effect<
    DeleteAttributeMappingResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  deleteCrl(
    input: ScalarCrlRequest,
  ): Effect.Effect<
    CrlDetailResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  deleteProfile(
    input: ScalarProfileRequest,
  ): Effect.Effect<
    ProfileDetailResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  deleteTrustAnchor(
    input: ScalarTrustAnchorRequest,
  ): Effect.Effect<
    TrustAnchorDetailResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  disableCrl(
    input: ScalarCrlRequest,
  ): Effect.Effect<
    CrlDetailResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  disableProfile(
    input: ScalarProfileRequest,
  ): Effect.Effect<
    ProfileDetailResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  disableTrustAnchor(
    input: ScalarTrustAnchorRequest,
  ): Effect.Effect<
    TrustAnchorDetailResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  enableCrl(
    input: ScalarCrlRequest,
  ): Effect.Effect<
    CrlDetailResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  enableProfile(
    input: ScalarProfileRequest,
  ): Effect.Effect<
    ProfileDetailResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  enableTrustAnchor(
    input: ScalarTrustAnchorRequest,
  ): Effect.Effect<
    TrustAnchorDetailResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  getCrl(
    input: ScalarCrlRequest,
  ): Effect.Effect<
    CrlDetailResponse,
    ResourceNotFoundException | CommonAwsError
  >;
  getProfile(
    input: ScalarProfileRequest,
  ): Effect.Effect<
    ProfileDetailResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  getSubject(
    input: ScalarSubjectRequest,
  ): Effect.Effect<
    SubjectDetailResponse,
    AccessDeniedException | ResourceNotFoundException | CommonAwsError
  >;
  getTrustAnchor(
    input: ScalarTrustAnchorRequest,
  ): Effect.Effect<
    TrustAnchorDetailResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  importCrl(
    input: ImportCrlRequest,
  ): Effect.Effect<
    CrlDetailResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listCrls(
    input: ListRequest,
  ): Effect.Effect<
    ListCrlsResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listProfiles(
    input: ListRequest,
  ): Effect.Effect<
    ListProfilesResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listSubjects(
    input: ListRequest,
  ): Effect.Effect<
    ListSubjectsResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  listTrustAnchors(
    input: ListRequest,
  ): Effect.Effect<
    ListTrustAnchorsResponse,
    AccessDeniedException | ValidationException | CommonAwsError
  >;
  putAttributeMapping(
    input: PutAttributeMappingRequest,
  ): Effect.Effect<
    PutAttributeMappingResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  putNotificationSettings(
    input: PutNotificationSettingsRequest,
  ): Effect.Effect<
    PutNotificationSettingsResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  resetNotificationSettings(
    input: ResetNotificationSettingsRequest,
  ): Effect.Effect<
    ResetNotificationSettingsResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    AccessDeniedException | ResourceNotFoundException | TooManyTagsException | ValidationException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateCrl(
    input: UpdateCrlRequest,
  ): Effect.Effect<
    CrlDetailResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateProfile(
    input: UpdateProfileRequest,
  ): Effect.Effect<
    ProfileDetailResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  updateTrustAnchor(
    input: UpdateTrustAnchorRequest,
  ): Effect.Effect<
    TrustAnchorDetailResponse,
    AccessDeniedException | ResourceNotFoundException | ValidationException | CommonAwsError
  >;
}

export type Rolesanywhere = RolesAnywhere;

export declare class AccessDeniedException extends Data.TaggedError(
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

export declare class ResourceNotFoundException extends Data.TaggedError(
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
export type SourceData = { x509CertificateData: string } | { acmPcaArn: string };
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
export interface TagResourceResponse {
}
export type TagValue = string;

export declare class TooManyTagsException extends Data.TaggedError(
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
export interface UntagResourceResponse {
}
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

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly message?: string;
}> {}
export declare namespace CreateProfile {
  export type Input = CreateProfileRequest;
  export type Output = ProfileDetailResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace CreateTrustAnchor {
  export type Input = CreateTrustAnchorRequest;
  export type Output = TrustAnchorDetailResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteAttributeMapping {
  export type Input = DeleteAttributeMappingRequest;
  export type Output = DeleteAttributeMappingResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteCrl {
  export type Input = ScalarCrlRequest;
  export type Output = CrlDetailResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteProfile {
  export type Input = ScalarProfileRequest;
  export type Output = ProfileDetailResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DeleteTrustAnchor {
  export type Input = ScalarTrustAnchorRequest;
  export type Output = TrustAnchorDetailResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisableCrl {
  export type Input = ScalarCrlRequest;
  export type Output = CrlDetailResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisableProfile {
  export type Input = ScalarProfileRequest;
  export type Output = ProfileDetailResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DisableTrustAnchor {
  export type Input = ScalarTrustAnchorRequest;
  export type Output = TrustAnchorDetailResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace EnableCrl {
  export type Input = ScalarCrlRequest;
  export type Output = CrlDetailResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace EnableProfile {
  export type Input = ScalarProfileRequest;
  export type Output = ProfileDetailResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace EnableTrustAnchor {
  export type Input = ScalarTrustAnchorRequest;
  export type Output = TrustAnchorDetailResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetCrl {
  export type Input = ScalarCrlRequest;
  export type Output = CrlDetailResponse;
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetProfile {
  export type Input = ScalarProfileRequest;
  export type Output = ProfileDetailResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetSubject {
  export type Input = ScalarSubjectRequest;
  export type Output = SubjectDetailResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace GetTrustAnchor {
  export type Input = ScalarTrustAnchorRequest;
  export type Output = TrustAnchorDetailResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ImportCrl {
  export type Input = ImportCrlRequest;
  export type Output = CrlDetailResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListCrls {
  export type Input = ListRequest;
  export type Output = ListCrlsResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListProfiles {
  export type Input = ListRequest;
  export type Output = ListProfilesResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSubjects {
  export type Input = ListRequest;
  export type Output = ListSubjectsResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListTrustAnchors {
  export type Input = ListRequest;
  export type Output = ListTrustAnchorsResponse;
  export type Error =
    | AccessDeniedException
    | ValidationException
    | CommonAwsError;
}

export declare namespace PutAttributeMapping {
  export type Input = PutAttributeMappingRequest;
  export type Output = PutAttributeMappingResponse;
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

export declare namespace UpdateCrl {
  export type Input = UpdateCrlRequest;
  export type Output = CrlDetailResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateProfile {
  export type Input = UpdateProfileRequest;
  export type Output = ProfileDetailResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UpdateTrustAnchor {
  export type Input = UpdateTrustAnchorRequest;
  export type Output = TrustAnchorDetailResponse;
  export type Error =
    | AccessDeniedException
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

