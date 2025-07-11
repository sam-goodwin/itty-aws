import type { Effect, Data } from "effect";
import type { CommonAwsError } from "../error.ts";

export interface SimSpaceWeaver {
  listTagsForResource(
    input: ListTagsForResourceInput,
  ): Effect.Effect<
    ListTagsForResourceOutput,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
  tagResource(
    input: TagResourceInput,
  ): Effect.Effect<
    TagResourceOutput,
    | ResourceNotFoundException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceInput,
  ): Effect.Effect<
    UntagResourceOutput,
    ResourceNotFoundException | ValidationException | CommonAwsError
  >;
}

export type Simspaceweaver = SimSpaceWeaver;

export declare class AccessDeniedException extends Data.TaggedError(
  "AccessDeniedException",
)<{
  readonly Message?: string;
}> {}
export type AppPortMappings = Array<SimulationAppPortMapping>;
export type BucketName = string;

export type ClientToken = string;

export type ClockStatus = string;

export type ClockTargetStatus = string;

export interface CloudWatchLogsLogGroup {
  LogGroupArn?: string;
}
export declare class ConflictException extends Data.TaggedError(
  "ConflictException",
)<{
  readonly Message?: string;
}> {}
export interface CreateSnapshotInput {
  Simulation: string;
  Destination: S3Destination;
}
export interface CreateSnapshotOutput {}
export interface DeleteAppInput {
  Simulation: string;
  Domain: string;
  App: string;
}
export interface DeleteAppOutput {}
export interface DeleteSimulationInput {
  Simulation: string;
}
export interface DeleteSimulationOutput {}
export interface DescribeAppInput {
  Simulation: string;
  Domain: string;
  App: string;
}
export interface DescribeAppOutput {
  Name?: string;
  Simulation?: string;
  Domain?: string;
  Status?: string;
  TargetStatus?: string;
  LaunchOverrides?: LaunchOverrides;
  Description?: string;
  EndpointInfo?: SimulationAppEndpointInfo;
}
export interface DescribeSimulationInput {
  Simulation: string;
}
export interface DescribeSimulationOutput {
  Name?: string;
  ExecutionId?: string;
  Arn?: string;
  Description?: string;
  RoleArn?: string;
  CreationTime?: Date | string;
  Status?: string;
  TargetStatus?: string;
  SchemaS3Location?: S3Location;
  SchemaError?: string;
  LoggingConfiguration?: LoggingConfiguration;
  LiveSimulationState?: LiveSimulationState;
  MaximumDuration?: string;
  SnapshotS3Location?: S3Location;
  StartError?: string;
}
export type Description = string;

export interface Domain {
  Name?: string;
  Lifecycle?: string;
}
export type DomainList = Array<Domain>;
export declare class InternalServerException extends Data.TaggedError(
  "InternalServerException",
)<{
  readonly Message?: string;
}> {}
export type LaunchCommandList = Array<string>;
export interface LaunchOverrides {
  LaunchCommands?: Array<string>;
}
export type LifecycleManagementStrategy = string;

export interface ListAppsInput {
  Simulation: string;
  Domain?: string;
  MaxResults?: number;
  NextToken?: string;
}
export interface ListAppsOutput {
  Apps?: Array<SimulationAppMetadata>;
  NextToken?: string;
}
export interface ListSimulationsInput {
  MaxResults?: number;
  NextToken?: string;
}
export interface ListSimulationsOutput {
  Simulations?: Array<SimulationMetadata>;
  NextToken?: string;
}
export interface ListTagsForResourceInput {
  ResourceArn: string;
}
export interface ListTagsForResourceOutput {
  Tags?: Record<string, string>;
}
export interface LiveSimulationState {
  Domains?: Array<Domain>;
  Clocks?: Array<SimulationClock>;
}
export interface LogDestination {
  CloudWatchLogsLogGroup?: CloudWatchLogsLogGroup;
}
export type LogDestinations = Array<LogDestination>;
export interface LoggingConfiguration {
  Destinations?: Array<LogDestination>;
}
export type LogGroupArn = string;

export type NonEmptyString = string;

export type ObjectKey = string;

export type ObjectKeyPrefix = string;

export type OptionalString = string;

export type PortNumber = number;

export type PositiveInteger = number;

export declare class ResourceNotFoundException extends Data.TaggedError(
  "ResourceNotFoundException",
)<{
  readonly Message?: string;
}> {}
export type RoleArn = string;

export interface S3Destination {
  BucketName: string;
  ObjectKeyPrefix?: string;
}
export interface S3Location {
  BucketName: string;
  ObjectKey: string;
}
export declare class ServiceQuotaExceededException extends Data.TaggedError(
  "ServiceQuotaExceededException",
)<{
  readonly Message?: string;
}> {}
export type SimSpaceWeaverArn = string;

export type SimSpaceWeaverLongResourceName = string;

export type SimSpaceWeaverResourceName = string;

export interface SimulationAppEndpointInfo {
  Address?: string;
  IngressPortMappings?: Array<SimulationAppPortMapping>;
}
export type SimulationAppList = Array<SimulationAppMetadata>;
export interface SimulationAppMetadata {
  Name?: string;
  Simulation?: string;
  Domain?: string;
  Status?: string;
  TargetStatus?: string;
}
export interface SimulationAppPortMapping {
  Declared?: number;
  Actual?: number;
}
export type SimulationAppStatus = string;

export type SimulationAppTargetStatus = string;

export interface SimulationClock {
  Status?: string;
  TargetStatus?: string;
}
export type SimulationClockList = Array<SimulationClock>;
export type SimulationList = Array<SimulationMetadata>;
export interface SimulationMetadata {
  Name?: string;
  Arn?: string;
  CreationTime?: Date | string;
  Status?: string;
  TargetStatus?: string;
}
export type SimulationStatus = string;

export type SimulationTargetStatus = string;

export interface StartAppInput {
  ClientToken?: string;
  Simulation: string;
  Domain: string;
  Name: string;
  Description?: string;
  LaunchOverrides?: LaunchOverrides;
}
export interface StartAppOutput {
  Name?: string;
  Domain?: string;
  Simulation?: string;
}
export interface StartClockInput {
  Simulation: string;
}
export interface StartClockOutput {}
export interface StartSimulationInput {
  ClientToken?: string;
  Name: string;
  Description?: string;
  RoleArn: string;
  SchemaS3Location?: S3Location;
  MaximumDuration?: string;
  Tags?: Record<string, string>;
  SnapshotS3Location?: S3Location;
}
export interface StartSimulationOutput {
  Arn?: string;
  ExecutionId?: string;
  CreationTime?: Date | string;
}
export interface StopAppInput {
  Simulation: string;
  Domain: string;
  App: string;
}
export interface StopAppOutput {}
export interface StopClockInput {
  Simulation: string;
}
export interface StopClockOutput {}
export interface StopSimulationInput {
  Simulation: string;
}
export interface StopSimulationOutput {}
export type TagKey = string;

export type TagKeyList = Array<string>;
export type TagMap = Record<string, string>;
export interface TagResourceInput {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export interface TagResourceOutput {}
export type TagValue = string;

export type Timestamp = Date | string;

export type TimeToLiveString = string;

export declare class TooManyTagsException extends Data.TaggedError(
  "TooManyTagsException",
)<{
  readonly Message?: string;
}> {}
export interface UntagResourceInput {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UntagResourceOutput {}
export type UUID = string;

export declare class ValidationException extends Data.TaggedError(
  "ValidationException",
)<{
  readonly Message?: string;
}> {}
export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceInput;
  export type Output = ListTagsForResourceOutput;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceInput;
  export type Output = TagResourceOutput;
  export type Error =
    | ResourceNotFoundException
    | TooManyTagsException
    | ValidationException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceInput;
  export type Output = UntagResourceOutput;
  export type Error =
    | ResourceNotFoundException
    | ValidationException
    | CommonAwsError;
}
