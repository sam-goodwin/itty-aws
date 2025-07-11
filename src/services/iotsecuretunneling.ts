import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../client.ts";

export interface IoTSecuredTunneling {
  closeTunnel(
    input: CloseTunnelRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | CommonAwsError
  >;
  describeTunnel(
    input: DescribeTunnelRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | CommonAwsError
  >;
  listTunnels(
    input: ListTunnelsRequest,
  ): Effect.Effect<
    {},
    CommonAwsError
  >;
  openTunnel(
    input: OpenTunnelRequest,
  ): Effect.Effect<
    {},
    LimitExceededException | CommonAwsError
  >;
  rotateTunnelAccessToken(
    input: RotateTunnelAccessTokenRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    ResourceNotFoundException | CommonAwsError
  >;
}

export type Iotsecuretunneling = IoTSecuredTunneling;

export type AmazonResourceName = string;

export type ClientAccessToken = string;

export type ClientMode = never;
export interface CloseTunnelRequest {
}
export interface CloseTunnelResponse {
}
export interface ConnectionState {
}
export type ConnectionStatus = never;
export type DateType = Date | string;

export type DeleteFlag = boolean;

export interface DescribeTunnelRequest {
}
export interface DescribeTunnelResponse {
}
export type Description = string;

export interface DestinationConfig {
}
export type ErrorMessage = string;

export interface LimitExceededException {
}
export interface ListTagsForResourceRequest {
}
export interface ListTagsForResourceResponse {
}
export interface ListTunnelsRequest {
}
export interface ListTunnelsResponse {
}
export type MaxResults = number;

export type NextToken = string;

export interface OpenTunnelRequest {
}
export interface OpenTunnelResponse {
}
export interface ResourceNotFoundException {
}
export interface RotateTunnelAccessTokenRequest {
}
export interface RotateTunnelAccessTokenResponse {
}
export type Service = string;

export type ServiceList = Array<unknown>;
export interface Tag {
}
export type TagKey = string;

export type TagKeyList = Array<unknown>;
export type TagList = Array<unknown>;
export interface TagResourceRequest {
}
export interface TagResourceResponse {
}
export type TagValue = string;

export type ThingName = string;

export interface TimeoutConfig {
}
export type TimeoutInMin = number;

export interface Tunnel {
}
export type TunnelArn = string;

export type TunnelId = string;

export type TunnelStatus = never;
export interface TunnelSummary {
}
export type TunnelSummaryList = Array<unknown>;
export interface UntagResourceRequest {
}
export interface UntagResourceResponse {
}
export declare namespace CloseTunnel {
  export type Input = CloseTunnelRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace DescribeTunnel {
  export type Input = DescribeTunnelRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace ListTunnels {
  export type Input = ListTunnelsRequest;
  export type Output = {};
  export type Error =
    | CommonAwsError;
}

export declare namespace OpenTunnel {
  export type Input = OpenTunnelRequest;
  export type Output = {};
  export type Error =
    | LimitExceededException
    | CommonAwsError;
}

export declare namespace RotateTunnelAccessToken {
  export type Input = RotateTunnelAccessTokenRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | ResourceNotFoundException
    | CommonAwsError;
}

