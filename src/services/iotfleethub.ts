import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface AWSIoTFleetHub {
  createApplication(
    input: CreateApplicationRequest,
  ): Effect.Effect<
    CreateApplicationResponse,
    InternalFailureException | InvalidRequestException | LimitExceededException | ThrottlingException | CommonAwsError
  >;
  deleteApplication(
    input: DeleteApplicationRequest,
  ): Effect.Effect<
    DeleteApplicationResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  describeApplication(
    input: DescribeApplicationRequest,
  ): Effect.Effect<
    DescribeApplicationResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
  listApplications(
    input: ListApplicationsRequest,
  ): Effect.Effect<
    ListApplicationsResponse,
    InternalFailureException | InvalidRequestException | ThrottlingException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    TagResourceResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    UntagResourceResponse,
    InternalFailureException | InvalidRequestException | ResourceNotFoundException | CommonAwsError
  >;
  updateApplication(
    input: UpdateApplicationRequest,
  ): Effect.Effect<
    UpdateApplicationResponse,
    ConflictException | InternalFailureException | InvalidRequestException | ResourceNotFoundException | ThrottlingException | CommonAwsError
  >;
}

export type Iotfleethub = AWSIoTFleetHub;

export type ApplicationState = "CREATING" | "DELETING" | "ACTIVE" | "CREATE_FAILED" | "DELETE_FAILED";
export type ApplicationSummaries = Array<ApplicationSummary>;
export interface ApplicationSummary {
  applicationId: string;
  applicationName: string;
  applicationDescription?: string;
  applicationUrl: string;
  applicationCreationDate?: number;
  applicationLastUpdateDate?: number;
  applicationState?: ApplicationState;
}
export type Arn = string;

export type ClientRequestToken = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly message?: string;
}> {}
export interface CreateApplicationRequest {
  applicationName: string;
  applicationDescription?: string;
  clientToken?: string;
  roleArn: string;
  tags?: Record<string, string>;
}
export interface CreateApplicationResponse {
  applicationId: string;
  applicationArn: string;
}
export interface DeleteApplicationRequest {
  applicationId: string;
  clientToken?: string;
}
export interface DeleteApplicationResponse {
}
export interface DescribeApplicationRequest {
  applicationId: string;
}
export interface DescribeApplicationResponse {
  applicationId: string;
  applicationArn: string;
  applicationName: string;
  applicationDescription?: string;
  applicationUrl: string;
  applicationState: ApplicationState;
  applicationCreationDate: number;
  applicationLastUpdateDate: number;
  roleArn: string;
  ssoClientId?: string;
  errorMessage?: string;
  tags?: Record<string, string>;
}
export type Description = string;

export type ErrorMessage = string;

export type Id = string;

export declare class InternalFailureException extends Data.TaggedError(
  "InternalFailureException",
)<{
  readonly message?: string;
}> {}
export declare class InvalidRequestException extends Data.TaggedError(
  "InvalidRequestException",
)<{
  readonly message?: string;
}> {}
export declare class LimitExceededException extends Data.TaggedError(
  "LimitExceededException",
)<{
  readonly message?: string;
}> {}
export interface ListApplicationsRequest {
  nextToken?: string;
}
export interface ListApplicationsResponse {
  applicationSummaries?: Array<ApplicationSummary>;
  nextToken?: string;
}
export interface ListTagsForResourceRequest {
  resourceArn: string;
}
export interface ListTagsForResourceResponse {
  tags?: Record<string, string>;
}
export type Name = string;

export type NextToken = string;

export type ResourceArn = string;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly message?: string;
}> {}
export type SsoClientId = string;

export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceRequest {
  resourceArn: string;
  tags: Record<string, string>;
}
export interface TagResourceResponse {
}
export type TagValue = string;

export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly message?: string;
}> {}
export type Timestamp = number;

export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: Array<string>;
}
export interface UntagResourceResponse {
}
export interface UpdateApplicationRequest {
  applicationId: string;
  applicationName?: string;
  applicationDescription?: string;
  clientToken?: string;
}
export interface UpdateApplicationResponse {
}
export type Url = string;

export declare namespace CreateApplication {
  export type Input = CreateApplicationRequest;
  export type Output = CreateApplicationResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | LimitExceededException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DeleteApplication {
  export type Input = DeleteApplicationRequest;
  export type Output = DeleteApplicationResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace DescribeApplication {
  export type Input = DescribeApplicationRequest;
  export type Output = DescribeApplicationResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListApplications {
  export type Input = ListApplicationsRequest;
  export type Output = ListApplicationsResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ThrottlingException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = TagResourceResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = UntagResourceResponse;
  export type Error =
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UpdateApplication {
  export type Input = UpdateApplicationRequest;
  export type Output = UpdateApplicationResponse;
  export type Error =
    | ConflictException
    | InternalFailureException
    | InvalidRequestException
    | ResourceNotFoundException
    | ThrottlingException
    | CommonAwsError;
}

