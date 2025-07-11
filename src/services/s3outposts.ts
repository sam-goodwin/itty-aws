import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface S3Outposts {
  createEndpoint(
    input: CreateEndpointRequest,
  ): Effect.Effect<
    CreateEndpointResult,
    AccessDeniedException | ConflictException | InternalServerException | OutpostOfflineException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  deleteEndpoint(
    input: DeleteEndpointRequest,
  ): Effect.Effect<
    {},
    AccessDeniedException | InternalServerException | OutpostOfflineException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listEndpoints(
    input: ListEndpointsRequest,
  ): Effect.Effect<
    ListEndpointsResult,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listOutpostsWithS3(
    input: ListOutpostsWithS3Request,
  ): Effect.Effect<
    ListOutpostsWithS3Result,
    AccessDeniedException | InternalServerException | ThrottlingException | ValidationException | CommonAwsError
  >;
  listSharedEndpoints(
    input: ListSharedEndpointsRequest,
  ): Effect.Effect<
    ListSharedEndpointsResult,
    AccessDeniedException | InternalServerException | ResourceNotFoundException | ThrottlingException | ValidationException | CommonAwsError
  >;
}

export type S3outposts = S3Outposts;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AwsAccountId = string;

export type CapacityInBytes = number;

export type CidrBlock = string;

export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface CreateEndpointRequest {
  OutpostId: string;
  SubnetId: string;
  SecurityGroupId: string;
  AccessType?: EndpointAccessType;
  CustomerOwnedIpv4Pool?: string;
}
export interface CreateEndpointResult {
  EndpointArn?: string;
}
export type CreationTime = Date | string;

export type CustomerOwnedIpv4Pool = string;

export interface DeleteEndpointRequest {
  EndpointId: string;
  OutpostId: string;
}
export interface Endpoint {
  EndpointArn?: string;
  OutpostsId?: string;
  CidrBlock?: string;
  Status?: EndpointStatus;
  CreationTime?: Date | string;
  NetworkInterfaces?: Array<NetworkInterface>;
  VpcId?: string;
  SubnetId?: string;
  SecurityGroupId?: string;
  AccessType?: EndpointAccessType;
  CustomerOwnedIpv4Pool?: string;
  FailedReason?: FailedReason;
}
export type EndpointAccessType = "PRIVATE" | "CUSTOMER_OWNED_IP";
export type EndpointArn = string;

export type EndpointId = string;

export type Endpoints = Array<Endpoint>;
export type EndpointStatus = "PENDING" | "AVAILABLE" | "DELETING" | "CREATE_FAILED" | "DELETE_FAILED";
export type ErrorCode = string;

export type ErrorMessage = string;

export interface FailedReason {
  ErrorCode?: string;
  Message?: string;
}
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export interface ListEndpointsRequest {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListEndpointsResult {
  Endpoints?: Array<Endpoint>;
  NextToken?: string;
}
export interface ListOutpostsWithS3Request {
  NextToken?: string;
  MaxResults?: number;
}
export interface ListOutpostsWithS3Result {
  Outposts?: Array<Outpost>;
  NextToken?: string;
}
export interface ListSharedEndpointsRequest {
  NextToken?: string;
  MaxResults?: number;
  OutpostId: string;
}
export interface ListSharedEndpointsResult {
  Endpoints?: Array<Endpoint>;
  NextToken?: string;
}
export type MaxResults = number;

export type Message = string;

export interface NetworkInterface {
  NetworkInterfaceId?: string;
}
export type NetworkInterfaceId = string;

export type NetworkInterfaces = Array<NetworkInterface>;
export type NextToken = string;

export interface Outpost {
  OutpostArn?: string;
  S3OutpostArn?: string;
  OutpostId?: string;
  OwnerId?: string;
  CapacityInBytes?: number;
}
export type OutpostArn = string;

export type OutpostId = string;

export declare class OutpostOfflineException extends Data.TaggedError(
  "OutpostOfflineException",
)<{
  readonly Message?: string;
}> {}
export type Outposts = Array<Outpost>;
export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type S3OutpostArn = string;

export type SecurityGroupId = string;

export type SubnetId = string;

export declare class ThrottlingException extends Data.TaggedError(
  "ThrottlingException",
)<{
  readonly Message?: string;
}> {}
export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export type VpcId = string;

export declare namespace CreateEndpoint {
  export type Input = CreateEndpointRequest;
  export type Output = CreateEndpointResult;
  export type Error =
    | AccessDeniedException
    | ConflictException
    | InternalServerException
    | OutpostOfflineException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace DeleteEndpoint {
  export type Input = DeleteEndpointRequest;
  export type Output = {};
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | OutpostOfflineException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListEndpoints {
  export type Input = ListEndpointsRequest;
  export type Output = ListEndpointsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListOutpostsWithS3 {
  export type Input = ListOutpostsWithS3Request;
  export type Output = ListOutpostsWithS3Result;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

export declare namespace ListSharedEndpoints {
  export type Input = ListSharedEndpointsRequest;
  export type Output = ListSharedEndpointsResult;
  export type Error =
    | AccessDeniedException
    | InternalServerException
    | ResourceNotFoundException
    | ThrottlingException
    | ValidationException
    | CommonAwsError;
}

