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
  sdkId: "Route53Profiles",
  serviceShapeName: "Route53Profiles",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "route53profiles" });
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
              `https://route53profiles-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(
              `https://route53profiles-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`,
            );
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://route53profiles.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://route53profiles.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()("AccessDeniedException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }).pipe(C.withAuthError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()("ConflictException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InternalServiceErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalServiceErrorException>()(
    "InternalServiceErrorException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
  ) {}
export class InvalidNextTokenException
  extends /*@__PURE__*/ S.TaggedError<InvalidNextTokenException>()("InvalidNextTokenException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class InvalidParameterException
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterException>()("InvalidParameterException", {
    message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
    FieldName: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class LimitExceededException
  extends /*@__PURE__*/ S.TaggedError<LimitExceededException>()("LimitExceededException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    ResourceType: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class ResourceExistsException
  extends /*@__PURE__*/ S.TaggedError<ResourceExistsException>()("ResourceExistsException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    ResourceType: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()("ResourceNotFoundException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    ResourceType: /*@__PURE__*/ S.optional(S.String),
  }) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()("ThrottlingException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()("ValidationException", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
  }) {}
export type ResourceId = string;
export type Name = string;
export type TagKey = string;
export type TagValue = string;
export interface Tag {
  Key: string;
  Value: string;
}
const Tag = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<Tag>;
export type TagList = Tag[];
const TagList = /*@__PURE__*/ __L.at(__c0, 1);
export interface AssociateProfileRequest {
  ProfileId: string;
  ResourceId: string;
  Name: string;
  Tags?: Tag[];
}
const AssociateProfileRequest = /*@__PURE__*/ __L.at(
  __c0,
  2,
) as any as S.Schema<AssociateProfileRequest>;
export type AccountId = string;
export type ProfileStatus =
  | "COMPLETE"
  | "DELETING"
  | "UPDATING"
  | "CREATING"
  | "DELETED"
  | "FAILED"
  | (string & {});
const ProfileStatus = S.String;

export type Rfc3339Timestamp = Date;
export interface ProfileAssociation {
  Id?: string;
  Name?: string;
  OwnerId?: string;
  ProfileId?: string;
  ResourceId?: string;
  Status?: ProfileStatus;
  StatusMessage?: string;
  CreationTime?: Date;
  ModificationTime?: Date;
}
const ProfileAssociation = /*@__PURE__*/ __L.at(__c0, 3) as any as S.Schema<ProfileAssociation>;
export interface AssociateProfileResponse {
  ProfileAssociation?: ProfileAssociation;
}
const AssociateProfileResponse = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<AssociateProfileResponse>;
export type Arn = string;
export type ResourceProperties = string;
export interface AssociateResourceToProfileRequest {
  ProfileId: string;
  ResourceArn: string;
  Name: string;
  ResourceProperties?: string;
}
const AssociateResourceToProfileRequest = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<AssociateResourceToProfileRequest>;
export interface ProfileResourceAssociation {
  Id?: string;
  Name?: string;
  OwnerId?: string;
  ProfileId?: string;
  ResourceArn?: string;
  ResourceType?: string;
  ResourceProperties?: string;
  Status?: ProfileStatus;
  StatusMessage?: string;
  CreationTime?: Date;
  ModificationTime?: Date;
}
const ProfileResourceAssociation = /*@__PURE__*/ __L.at(
  __c0,
  6,
) as any as S.Schema<ProfileResourceAssociation>;
export interface AssociateResourceToProfileResponse {
  ProfileResourceAssociation?: ProfileResourceAssociation;
}
const AssociateResourceToProfileResponse = /*@__PURE__*/ __L.at(
  __c0,
  7,
) as any as S.Schema<AssociateResourceToProfileResponse>;
export type CreatorRequestId = string;
export interface CreateProfileRequest {
  Name: string;
  ClientToken: string;
  Tags?: Tag[];
}
const CreateProfileRequest = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<CreateProfileRequest>;
export type ShareStatus = "NOT_SHARED" | "SHARED_WITH_ME" | "SHARED_BY_ME" | (string & {});
const ShareStatus = S.String;

export interface Profile {
  Id?: string;
  Arn?: string;
  Name?: string;
  OwnerId?: string;
  Status?: ProfileStatus;
  StatusMessage?: string;
  ShareStatus?: ShareStatus;
  CreationTime?: Date;
  ModificationTime?: Date;
  ClientToken?: string;
}
const Profile = /*@__PURE__*/ __L.at(__c1, 1) as any as S.Schema<Profile>;
export interface CreateProfileResponse {
  Profile?: Profile;
}
const CreateProfileResponse = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<CreateProfileResponse>;
export interface DeleteProfileRequest {
  ProfileId: string;
}
const DeleteProfileRequest = /*@__PURE__*/ __L.at(__c1, 3) as any as S.Schema<DeleteProfileRequest>;
export interface DeleteProfileResponse {
  Profile?: Profile;
}
const DeleteProfileResponse = CreateProfileResponse as any as S.Schema<DeleteProfileResponse>;
export interface DisassociateProfileRequest {
  ProfileId: string;
  ResourceId: string;
}
const DisassociateProfileRequest = /*@__PURE__*/ __L.at(
  __c1,
  4,
) as any as S.Schema<DisassociateProfileRequest>;
export interface DisassociateProfileResponse {
  ProfileAssociation?: ProfileAssociation;
}
const DisassociateProfileResponse = /*@__PURE__*/ __L.at(
  __c1,
  5,
) as any as S.Schema<DisassociateProfileResponse>;
export interface DisassociateResourceFromProfileRequest {
  ProfileId: string;
  ResourceArn: string;
}
const DisassociateResourceFromProfileRequest = /*@__PURE__*/ __L.at(
  __c1,
  6,
) as any as S.Schema<DisassociateResourceFromProfileRequest>;
export interface DisassociateResourceFromProfileResponse {
  ProfileResourceAssociation?: ProfileResourceAssociation;
}
const DisassociateResourceFromProfileResponse =
  AssociateResourceToProfileResponse as any as S.Schema<DisassociateResourceFromProfileResponse>;
export interface GetProfileRequest {
  ProfileId: string;
}
const GetProfileRequest = /*@__PURE__*/ __L.at(__c1, 7) as any as S.Schema<GetProfileRequest>;
export interface GetProfileResponse {
  Profile?: Profile;
}
const GetProfileResponse = CreateProfileResponse as any as S.Schema<GetProfileResponse>;
export interface GetProfileAssociationRequest {
  ProfileAssociationId: string;
}
const GetProfileAssociationRequest = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<GetProfileAssociationRequest>;
export interface GetProfileAssociationResponse {
  ProfileAssociation?: ProfileAssociation;
}
const GetProfileAssociationResponse =
  DisassociateProfileResponse as any as S.Schema<GetProfileAssociationResponse>;
export interface GetProfileResourceAssociationRequest {
  ProfileResourceAssociationId: string;
}
const GetProfileResourceAssociationRequest = /*@__PURE__*/ __L.at(
  __c2,
  1,
) as any as S.Schema<GetProfileResourceAssociationRequest>;
export interface GetProfileResourceAssociationResponse {
  ProfileResourceAssociation?: ProfileResourceAssociation;
}
const GetProfileResourceAssociationResponse =
  AssociateResourceToProfileResponse as any as S.Schema<GetProfileResourceAssociationResponse>;
export type MaxResults = number;
export type NextToken = string;
export interface ListProfileAssociationsRequest {
  ResourceId?: string;
  ProfileId?: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListProfileAssociationsRequest = /*@__PURE__*/ __L.at(
  __c2,
  2,
) as any as S.Schema<ListProfileAssociationsRequest>;
export type ProfileAssociations = ProfileAssociation[];
const ProfileAssociations = /*@__PURE__*/ __L.at(__c2, 3);
export interface ListProfileAssociationsResponse {
  ProfileAssociations?: ProfileAssociation[];
  NextToken?: string;
}
const ListProfileAssociationsResponse = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<ListProfileAssociationsResponse>;
export interface ListProfileResourceAssociationsRequest {
  ProfileId: string;
  ResourceType?: string;
  MaxResults?: number;
  NextToken?: string;
}
const ListProfileResourceAssociationsRequest = /*@__PURE__*/ __L.at(
  __c2,
  5,
) as any as S.Schema<ListProfileResourceAssociationsRequest>;
export type ProfileResourceAssociations = ProfileResourceAssociation[];
const ProfileResourceAssociations = /*@__PURE__*/ __L.at(__c2, 6);
export interface ListProfileResourceAssociationsResponse {
  ProfileResourceAssociations?: ProfileResourceAssociation[];
  NextToken?: string;
}
const ListProfileResourceAssociationsResponse = /*@__PURE__*/ __L.at(
  __c2,
  7,
) as any as S.Schema<ListProfileResourceAssociationsResponse>;
export interface ListProfilesRequest {
  MaxResults?: number;
  NextToken?: string;
}
const ListProfilesRequest = /*@__PURE__*/ __L.at(__c3, 0) as any as S.Schema<ListProfilesRequest>;
export interface ProfileSummary {
  Id?: string;
  Arn?: string;
  Name?: string;
  ShareStatus?: ShareStatus;
}
const ProfileSummary = /*@__PURE__*/ __L.at(__c3, 1) as any as S.Schema<ProfileSummary>;
export type ProfileSummaryList = ProfileSummary[];
const ProfileSummaryList = /*@__PURE__*/ __L.at(__c3, 2);
export interface ListProfilesResponse {
  ProfileSummaries?: ProfileSummary[];
  NextToken?: string;
}
const ListProfilesResponse = /*@__PURE__*/ __L.at(__c3, 3) as any as S.Schema<ListProfilesResponse>;
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
const ListTagsForResourceRequest = /*@__PURE__*/ __L.at(
  __c3,
  4,
) as any as S.Schema<ListTagsForResourceRequest>;
export type TagMap = { [key: string]: string | undefined };
const TagMap = /*@__PURE__*/ __L.at(__c3, 5);
export interface ListTagsForResourceResponse {
  Tags: { [key: string]: string | undefined };
}
const ListTagsForResourceResponse = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<ListTagsForResourceResponse>;
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: { [key: string]: string | undefined };
}
const TagResourceRequest = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<TagResourceRequest>;
export interface TagResourceResponse {}
const TagResourceResponse = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<TagResourceResponse>;
export type TagKeyList = string[];
const TagKeyList = /*@__PURE__*/ __L.at(__c4, 1);
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}
const UntagResourceRequest = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<UntagResourceRequest>;
export interface UntagResourceResponse {}
const UntagResourceResponse = TagResourceResponse as any as S.Schema<UntagResourceResponse>;
export interface UpdateProfileResourceAssociationRequest {
  ProfileResourceAssociationId: string;
  Name?: string;
  ResourceProperties?: string;
}
const UpdateProfileResourceAssociationRequest = /*@__PURE__*/ __L.at(
  __c4,
  3,
) as any as S.Schema<UpdateProfileResourceAssociationRequest>;
export interface UpdateProfileResourceAssociationResponse {
  ProfileResourceAssociation?: ProfileResourceAssociation;
}
const UpdateProfileResourceAssociationResponse =
  AssociateResourceToProfileResponse as any as S.Schema<UpdateProfileResourceAssociationResponse>;
export type ExceptionMessage = string;
export type AssociateProfileError =
  | AccessDeniedException
  | ConflictException
  | InvalidParameterException
  | LimitExceededException
  | ResourceExistsException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a Route 53 Profiles profile with a VPC. A VPC can have only one Profile associated with it, but a Profile can be associated with 1000 of VPCs (and you can request a higher quota).
 * For more information, see https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html#limits-api-entities.
 */
export const associateProfile: API.OperationMethod<
  AssociateProfileRequest,
  AssociateProfileResponse,
  AssociateProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateProfileRequest,
  output: AssociateProfileResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InvalidParameterException,
    LimitExceededException,
    ResourceExistsException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateProfile",
}));

export type AssociateResourceToProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServiceErrorException
  | InvalidParameterException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Associates a DNS reource configuration to a Route 53 Profile.
 */
export const associateResourceToProfile: API.OperationMethod<
  AssociateResourceToProfileRequest,
  AssociateResourceToProfileResponse,
  AssociateResourceToProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: AssociateResourceToProfileRequest,
  output: AssociateResourceToProfileResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServiceErrorException,
    InvalidParameterException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "AssociateResourceToProfile",
}));

export type CreateProfileError =
  | AccessDeniedException
  | InvalidParameterException
  | LimitExceededException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Creates an empty Route 53 Profile.
 */
export const createProfile: API.OperationMethod<
  CreateProfileRequest,
  CreateProfileResponse,
  CreateProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateProfileRequest,
  output: CreateProfileResponse,
  errors: [
    AccessDeniedException,
    InvalidParameterException,
    LimitExceededException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateProfile",
}));

export type DeleteProfileError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Deletes the specified Route 53 Profile. Before you can delete a profile, you must first disassociate it from all VPCs.
 */
export const deleteProfile: API.OperationMethod<
  DeleteProfileRequest,
  DeleteProfileResponse,
  DeleteProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteProfileRequest,
  output: DeleteProfileResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteProfile",
}));

export type DisassociateProfileError =
  | AccessDeniedException
  | InvalidParameterException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Dissociates a specified Route 53 Profile from the specified VPC.
 */
export const disassociateProfile: API.OperationMethod<
  DisassociateProfileRequest,
  DisassociateProfileResponse,
  DisassociateProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateProfileRequest,
  output: DisassociateProfileResponse,
  errors: [
    AccessDeniedException,
    InvalidParameterException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateProfile",
}));

export type DisassociateResourceFromProfileError =
  | AccessDeniedException
  | ConflictException
  | InternalServiceErrorException
  | InvalidParameterException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Dissoaciated a specified resource, from the Route 53 Profile.
 */
export const disassociateResourceFromProfile: API.OperationMethod<
  DisassociateResourceFromProfileRequest,
  DisassociateResourceFromProfileResponse,
  DisassociateResourceFromProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DisassociateResourceFromProfileRequest,
  output: DisassociateResourceFromProfileResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServiceErrorException,
    InvalidParameterException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DisassociateResourceFromProfile",
}));

export type GetProfileError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a specified Route 53 Profile, such as whether whether the Profile is shared, and the current status of the Profile.
 */
export const getProfile: API.OperationMethod<
  GetProfileRequest,
  GetProfileResponse,
  GetProfileError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProfileRequest,
  output: GetProfileResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProfile",
}));

export type GetProfileAssociationError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves a Route 53 Profile association for a VPC. A VPC can have only one Profile association, but a Profile can be associated with up to 5000 VPCs.
 */
export const getProfileAssociation: API.OperationMethod<
  GetProfileAssociationRequest,
  GetProfileAssociationResponse,
  GetProfileAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProfileAssociationRequest,
  output: GetProfileAssociationResponse,
  errors: [
    AccessDeniedException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProfileAssociation",
}));

export type GetProfileResourceAssociationError =
  | AccessDeniedException
  | InvalidParameterException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Returns information about a specified Route 53 Profile resource association.
 */
export const getProfileResourceAssociation: API.OperationMethod<
  GetProfileResourceAssociationRequest,
  GetProfileResourceAssociationResponse,
  GetProfileResourceAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetProfileResourceAssociationRequest,
  output: GetProfileResourceAssociationResponse,
  errors: [
    AccessDeniedException,
    InvalidParameterException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetProfileResourceAssociation",
}));

export type ListProfileAssociationsError =
  | AccessDeniedException
  | InvalidNextTokenException
  | InvalidParameterException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the VPCs that the specified Route 53 Profile is associated with.
 */
export const listProfileAssociations: API.PaginatedOperationMethod<
  ListProfileAssociationsRequest,
  ListProfileAssociationsResponse,
  ListProfileAssociationsError,
  Credentials | HttpClient.HttpClient,
  ProfileAssociation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProfileAssociationsRequest,
  output: ListProfileAssociationsResponse,
  errors: [
    AccessDeniedException,
    InvalidNextTokenException,
    InvalidParameterException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProfileAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ProfileAssociations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListProfileResourceAssociationsError =
  | AccessDeniedException
  | InternalServiceErrorException
  | InvalidNextTokenException
  | InvalidParameterException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the resource associations for the specified Route 53 Profile.
 */
export const listProfileResourceAssociations: API.PaginatedOperationMethod<
  ListProfileResourceAssociationsRequest,
  ListProfileResourceAssociationsResponse,
  ListProfileResourceAssociationsError,
  Credentials | HttpClient.HttpClient,
  ProfileResourceAssociation
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProfileResourceAssociationsRequest,
  output: ListProfileResourceAssociationsResponse,
  errors: [
    AccessDeniedException,
    InternalServiceErrorException,
    InvalidNextTokenException,
    InvalidParameterException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProfileResourceAssociations",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ProfileResourceAssociations",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListProfilesError =
  | AccessDeniedException
  | InvalidNextTokenException
  | InvalidParameterException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists all the Route 53 Profiles associated with your Amazon Web Services account.
 */
export const listProfiles: API.PaginatedOperationMethod<
  ListProfilesRequest,
  ListProfilesResponse,
  ListProfilesError,
  Credentials | HttpClient.HttpClient,
  ProfileSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListProfilesRequest,
  output: ListProfilesResponse,
  errors: [
    AccessDeniedException,
    InvalidNextTokenException,
    InvalidParameterException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListProfiles",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "ProfileSummaries",
    pageSize: "MaxResults",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | AccessDeniedException
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Lists the tags that you associated with the specified resource.
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
    ConflictException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type TagResourceError =
  | AccessDeniedException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Adds one or more tags to a specified resource.
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
  | ConflictException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Removes one or more tags from a specified resource.
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
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateProfileResourceAssociationError =
  | AccessDeniedException
  | ConflictException
  | InternalServiceErrorException
  | InvalidParameterException
  | LimitExceededException
  | ResourceNotFoundException
  | ThrottlingException
  | ValidationException
  | CommonErrors;
/**
 * Updates the specified Route 53 Profile resourse association.
 */
export const updateProfileResourceAssociation: API.OperationMethod<
  UpdateProfileResourceAssociationRequest,
  UpdateProfileResourceAssociationResponse,
  UpdateProfileResourceAssociationError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateProfileResourceAssociationRequest,
  output: UpdateProfileResourceAssociationResponse,
  errors: [
    AccessDeniedException,
    ConflictException,
    InternalServiceErrorException,
    InvalidParameterException,
    LimitExceededException,
    ResourceNotFoundException,
    ThrottlingException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateProfileResourceAssociation",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Key: S.String, Value: S.String })).annotate({
        identifier: "Tag",
      });
    case 1:
      return S.Array(Tag);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ProfileId: S.String,
          ResourceId: S.String,
          Name: S.String,
          Tags: S.optional(TagList),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/profileassociation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "AssociateProfileRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          OwnerId: S.optional(S.String),
          ProfileId: S.optional(S.String),
          ResourceId: S.optional(S.String),
          Status: S.optional(ProfileStatus),
          StatusMessage: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ModificationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({ identifier: "ProfileAssociation" });
    case 4:
      return S.suspend(() =>
        S.Struct({ ProfileAssociation: S.optional(ProfileAssociation) }),
      ).annotate({ identifier: "AssociateProfileResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ProfileId: S.String,
          ResourceArn: S.String,
          Name: S.String,
          ResourceProperties: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/profileresourceassociation" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "AssociateResourceToProfileRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Name: S.optional(S.String),
          OwnerId: S.optional(S.String),
          ProfileId: S.optional(S.String),
          ResourceArn: S.optional(S.String),
          ResourceType: S.optional(S.String),
          ResourceProperties: S.optional(S.String),
          Status: S.optional(ProfileStatus),
          StatusMessage: S.optional(S.String),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ModificationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
        }),
      ).annotate({
        identifier: "ProfileResourceAssociation",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ProfileResourceAssociation: S.optional(ProfileResourceAssociation) }),
      ).annotate({
        identifier: "AssociateResourceToProfileResponse",
      });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          ClientToken: S.String.pipe(T.IdempotencyToken()),
          Tags: S.optional(TagList),
        }).pipe(T.all(T.Http({ method: "POST", uri: "/profile" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "CreateProfileRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          OwnerId: S.optional(S.String),
          Status: S.optional(ProfileStatus),
          StatusMessage: S.optional(S.String),
          ShareStatus: S.optional(ShareStatus),
          CreationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ModificationTime: S.optional(S.Date.pipe(T.TimestampFormat("epoch-seconds"))),
          ClientToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "Profile" });
    case 2:
      return S.suspend(() => S.Struct({ Profile: S.optional(Profile) })).annotate({
        identifier: "CreateProfileResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ ProfileId: S.String.pipe(T.HttpLabel("ProfileId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/profile/{ProfileId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteProfileRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProfileId: S.String.pipe(T.HttpLabel("ProfileId")),
          ResourceId: S.String.pipe(T.HttpLabel("ResourceId")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/profileassociation/Profileid/{ProfileId}/resourceid/{ResourceId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateProfileRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({ ProfileAssociation: S.optional(ProfileAssociation) }),
      ).annotate({
        identifier: "DisassociateProfileResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          ProfileId: S.String.pipe(T.HttpLabel("ProfileId")),
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/profileresourceassociation/profileid/{ProfileId}/resourcearn/{ResourceArn}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DisassociateResourceFromProfileRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ProfileId: S.String.pipe(T.HttpLabel("ProfileId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/profile/{ProfileId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "GetProfileRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ ProfileAssociationId: S.String.pipe(T.HttpLabel("ProfileAssociationId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/profileassociation/{ProfileAssociationId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetProfileAssociationRequest",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({
          ProfileResourceAssociationId: S.String.pipe(T.HttpLabel("ProfileResourceAssociationId")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/profileresourceassociation/{ProfileResourceAssociationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetProfileResourceAssociationRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          ResourceId: S.optional(S.String).pipe(T.HttpQuery("resourceId")),
          ProfileId: S.optional(S.String).pipe(T.HttpQuery("profileId")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/profileassociations" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListProfileAssociationsRequest",
      });
    case 3:
      return S.Array(ProfileAssociation);
    case 4:
      return S.suspend(() =>
        S.Struct({
          ProfileAssociations: S.optional(ProfileAssociations),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListProfileAssociationsResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          ProfileId: S.String.pipe(T.HttpLabel("ProfileId")),
          ResourceType: S.optional(S.String).pipe(T.HttpQuery("resourceType")),
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/profileresourceassociations/profileid/{ProfileId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListProfileResourceAssociationsRequest",
      });
    case 6:
      return S.Array(ProfileResourceAssociation);
    case 7:
      return S.suspend(() =>
        S.Struct({
          ProfileResourceAssociations: S.optional(ProfileResourceAssociations),
          NextToken: S.optional(S.String),
        }),
      ).annotate({
        identifier: "ListProfileResourceAssociationsResponse",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          MaxResults: S.optional(S.Number).pipe(T.HttpQuery("maxResults")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
        }).pipe(T.all(T.Http({ method: "GET", uri: "/profiles" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListProfilesRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Id: S.optional(S.String),
          Arn: S.optional(S.String),
          Name: S.optional(S.String),
          ShareStatus: S.optional(ShareStatus),
        }),
      ).annotate({ identifier: "ProfileSummary" });
    case 2:
      return S.Array(ProfileSummary);
    case 3:
      return S.suspend(() =>
        S.Struct({
          ProfileSummaries: S.optional(ProfileSummaryList),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListProfilesResponse" });
    case 4:
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
    case 5:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 6:
      return S.suspend(() => S.Struct({ Tags: TagMap })).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")), Tags: TagMap }).pipe(
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
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "TagResourceResponse",
      });
    case 1:
      return S.Array(S.String);
    case 2:
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
    case 3:
      return S.suspend(() =>
        S.Struct({
          ProfileResourceAssociationId: S.String.pipe(T.HttpLabel("ProfileResourceAssociationId")),
          Name: S.optional(S.String),
          ResourceProperties: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PATCH",
              uri: "/profileresourceassociation/{ProfileResourceAssociationId}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "UpdateProfileResourceAssociationRequest",
      });
  }
}
