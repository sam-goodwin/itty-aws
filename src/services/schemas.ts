import type { Effect, Data as EffectData } from "effect";
import type { CommonAwsError } from "../error.ts";
import { AWSServiceClient } from "../client.ts";

export declare class schemas extends AWSServiceClient {
  createDiscoverer(
    input: CreateDiscovererRequest,
  ): Effect.Effect<
    CreateDiscovererResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  createRegistry(
    input: CreateRegistryRequest,
  ): Effect.Effect<
    CreateRegistryResponse,
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  createSchema(
    input: CreateSchemaRequest,
  ): Effect.Effect<
    CreateSchemaResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | CommonAwsError
  >;
  deleteDiscoverer(
    input: DeleteDiscovererRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteRegistry(
    input: DeleteRegistryRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteResourcePolicy(
    input: DeleteResourcePolicyRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteSchema(
    input: DeleteSchemaRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  deleteSchemaVersion(
    input: DeleteSchemaVersionRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeCodeBinding(
    input: DescribeCodeBindingRequest,
  ): Effect.Effect<
    DescribeCodeBindingResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeDiscoverer(
    input: DescribeDiscovererRequest,
  ): Effect.Effect<
    DescribeDiscovererResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeRegistry(
    input: DescribeRegistryRequest,
  ): Effect.Effect<
    DescribeRegistryResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  describeSchema(
    input: DescribeSchemaRequest,
  ): Effect.Effect<
    DescribeSchemaResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  exportSchema(
    input: ExportSchemaRequest,
  ): Effect.Effect<
    ExportSchemaResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getCodeBindingSource(
    input: GetCodeBindingSourceRequest,
  ): Effect.Effect<
    GetCodeBindingSourceResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  getDiscoveredSchema(
    input: GetDiscoveredSchemaRequest,
  ): Effect.Effect<
    GetDiscoveredSchemaResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  getResourcePolicy(
    input: GetResourcePolicyRequest,
  ): Effect.Effect<
    GetResourcePolicyResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  listDiscoverers(
    input: ListDiscoverersRequest,
  ): Effect.Effect<
    ListDiscoverersResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  listRegistries(
    input: ListRegistriesRequest,
  ): Effect.Effect<
    ListRegistriesResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  listSchemas(
    input: ListSchemasRequest,
  ): Effect.Effect<
    ListSchemasResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  listSchemaVersions(
    input: ListSchemaVersionsRequest,
  ): Effect.Effect<
    ListSchemaVersionsResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  listTagsForResource(
    input: ListTagsForResourceRequest,
  ): Effect.Effect<
    ListTagsForResourceResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  >;
  putCodeBinding(
    input: PutCodeBindingRequest,
  ): Effect.Effect<
    PutCodeBindingResponse,
    | BadRequestException
    | ForbiddenException
    | GoneException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError
  >;
  putResourcePolicy(
    input: PutResourcePolicyRequest,
  ): Effect.Effect<
    PutResourcePolicyResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | PreconditionFailedException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  searchSchemas(
    input: SearchSchemasRequest,
  ): Effect.Effect<
    SearchSchemasResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  startDiscoverer(
    input: StartDiscovererRequest,
  ): Effect.Effect<
    StartDiscovererResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  stopDiscoverer(
    input: StopDiscovererRequest,
  ): Effect.Effect<
    StopDiscovererResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  tagResource(
    input: TagResourceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  >;
  untagResource(
    input: UntagResourceRequest,
  ): Effect.Effect<
    {},
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError
  >;
  updateDiscoverer(
    input: UpdateDiscovererRequest,
  ): Effect.Effect<
    UpdateDiscovererResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateRegistry(
    input: UpdateRegistryRequest,
  ): Effect.Effect<
    UpdateRegistryResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError
  >;
  updateSchema(
    input: UpdateSchemaRequest,
  ): Effect.Effect<
    UpdateSchemaResponse,
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError
  >;
}

export declare class Schemas extends schemas {}

export type __boolean = boolean;

export type __integer = number;

export type __listOf__string = Array<string>;
export type __listOfDiscovererSummary = Array<DiscovererSummary>;
export type __listOfGetDiscoveredSchemaVersionItemInput = Array<string>;
export type __listOfRegistrySummary = Array<RegistrySummary>;
export type __listOfSchemaSummary = Array<SchemaSummary>;
export type __listOfSchemaVersionSummary = Array<SchemaVersionSummary>;
export type __listOfSearchSchemaSummary = Array<SearchSchemaSummary>;
export type __listOfSearchSchemaVersionSummary =
  Array<SearchSchemaVersionSummary>;
export type __long = number;

export type __string = string;

export type __stringMin0Max256 = string;

export type __stringMin0Max36 = string;

export type __stringMin1Max100000 = string;

export type __stringMin20Max1600 = string;

export type __timestampIso8601 = Date | string;

export declare class BadRequestException extends EffectData.TaggedError(
  "BadRequestException",
)<{
  readonly Code: string;
  readonly Message: string;
}> {}
export type Body = Uint8Array | string;

export type CodeGenerationStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_COMPLETE"
  | "CREATE_FAILED";
export declare class ConflictException extends EffectData.TaggedError(
  "ConflictException",
)<{
  readonly Code: string;
  readonly Message: string;
}> {}
export interface CreateDiscovererRequest {
  Description?: string;
  SourceArn: string;
  CrossAccount?: boolean;
  Tags?: Record<string, string>;
}
export interface CreateDiscovererResponse {
  Description?: string;
  DiscovererArn?: string;
  DiscovererId?: string;
  SourceArn?: string;
  State?: DiscovererState;
  CrossAccount?: boolean;
  Tags?: Record<string, string>;
}
export interface CreateRegistryRequest {
  Description?: string;
  RegistryName: string;
  Tags?: Record<string, string>;
}
export interface CreateRegistryResponse {
  Description?: string;
  RegistryArn?: string;
  RegistryName?: string;
  Tags?: Record<string, string>;
}
export interface CreateSchemaRequest {
  Content: string;
  Description?: string;
  RegistryName: string;
  SchemaName: string;
  Tags?: Record<string, string>;
  Type: Type;
}
export interface CreateSchemaResponse {
  Description?: string;
  LastModified?: Date | string;
  SchemaArn?: string;
  SchemaName?: string;
  SchemaVersion?: string;
  Tags?: Record<string, string>;
  Type?: string;
  VersionCreatedDate?: Date | string;
}
export interface DeleteDiscovererRequest {
  DiscovererId: string;
}
export interface DeleteRegistryRequest {
  RegistryName: string;
}
export interface DeleteResourcePolicyRequest {
  RegistryName?: string;
}
export interface DeleteSchemaRequest {
  RegistryName: string;
  SchemaName: string;
}
export interface DeleteSchemaVersionRequest {
  RegistryName: string;
  SchemaName: string;
  SchemaVersion: string;
}
export interface DescribeCodeBindingRequest {
  Language: string;
  RegistryName: string;
  SchemaName: string;
  SchemaVersion?: string;
}
export interface DescribeCodeBindingResponse {
  CreationDate?: Date | string;
  LastModified?: Date | string;
  SchemaVersion?: string;
  Status?: CodeGenerationStatus;
}
export interface DescribeDiscovererRequest {
  DiscovererId: string;
}
export interface DescribeDiscovererResponse {
  Description?: string;
  DiscovererArn?: string;
  DiscovererId?: string;
  SourceArn?: string;
  State?: DiscovererState;
  CrossAccount?: boolean;
  Tags?: Record<string, string>;
}
export interface DescribeRegistryRequest {
  RegistryName: string;
}
export interface DescribeRegistryResponse {
  Description?: string;
  RegistryArn?: string;
  RegistryName?: string;
  Tags?: Record<string, string>;
}
export interface DescribeSchemaRequest {
  RegistryName: string;
  SchemaName: string;
  SchemaVersion?: string;
}
export interface DescribeSchemaResponse {
  Content?: string;
  Description?: string;
  LastModified?: Date | string;
  SchemaArn?: string;
  SchemaName?: string;
  SchemaVersion?: string;
  Tags?: Record<string, string>;
  Type?: string;
  VersionCreatedDate?: Date | string;
}
export type DiscovererState = "STARTED" | "STOPPED";
export interface DiscovererSummary {
  DiscovererArn?: string;
  DiscovererId?: string;
  SourceArn?: string;
  State?: DiscovererState;
  CrossAccount?: boolean;
  Tags?: Record<string, string>;
}
export interface ExportSchemaRequest {
  RegistryName: string;
  SchemaName: string;
  SchemaVersion?: string;
  Type: string;
}
export interface ExportSchemaResponse {
  Content?: string;
  SchemaArn?: string;
  SchemaName?: string;
  SchemaVersion?: string;
  Type?: string;
}
export declare class ForbiddenException extends EffectData.TaggedError(
  "ForbiddenException",
)<{
  readonly Code: string;
  readonly Message: string;
}> {}
export interface GetCodeBindingSourceRequest {
  Language: string;
  RegistryName: string;
  SchemaName: string;
  SchemaVersion?: string;
}
export interface GetCodeBindingSourceResponse {
  Body?: Uint8Array | string;
}
export interface GetDiscoveredSchemaRequest {
  Events: Array<string>;
  Type: Type;
}
export interface GetDiscoveredSchemaResponse {
  Content?: string;
}
export type GetDiscoveredSchemaVersionItemInput = string;

export interface GetResourcePolicyRequest {
  RegistryName?: string;
}
export interface GetResourcePolicyResponse {
  Policy?: string;
  RevisionId?: string;
}
export declare class GoneException extends EffectData.TaggedError(
  "GoneException",
)<{
  readonly Code: string;
  readonly Message: string;
}> {}
export declare class InternalServerErrorException extends EffectData.TaggedError(
  "InternalServerErrorException",
)<{
  readonly Code: string;
  readonly Message: string;
}> {}
export interface ListDiscoverersRequest {
  DiscovererIdPrefix?: string;
  Limit?: number;
  NextToken?: string;
  SourceArnPrefix?: string;
}
export interface ListDiscoverersResponse {
  Discoverers?: Array<DiscovererSummary>;
  NextToken?: string;
}
export interface ListRegistriesRequest {
  Limit?: number;
  NextToken?: string;
  RegistryNamePrefix?: string;
  Scope?: string;
}
export interface ListRegistriesResponse {
  NextToken?: string;
  Registries?: Array<RegistrySummary>;
}
export interface ListSchemasRequest {
  Limit?: number;
  NextToken?: string;
  RegistryName: string;
  SchemaNamePrefix?: string;
}
export interface ListSchemasResponse {
  NextToken?: string;
  Schemas?: Array<SchemaSummary>;
}
export interface ListSchemaVersionsRequest {
  Limit?: number;
  NextToken?: string;
  RegistryName: string;
  SchemaName: string;
}
export interface ListSchemaVersionsResponse {
  NextToken?: string;
  SchemaVersions?: Array<SchemaVersionSummary>;
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: Record<string, string>;
}
export declare class NotFoundException extends EffectData.TaggedError(
  "NotFoundException",
)<{
  readonly Code: string;
  readonly Message: string;
}> {}
export declare class PreconditionFailedException extends EffectData.TaggedError(
  "PreconditionFailedException",
)<{
  readonly Code: string;
  readonly Message: string;
}> {}
export interface PutCodeBindingRequest {
  Language: string;
  RegistryName: string;
  SchemaName: string;
  SchemaVersion?: string;
}
export interface PutCodeBindingResponse {
  CreationDate?: Date | string;
  LastModified?: Date | string;
  SchemaVersion?: string;
  Status?: CodeGenerationStatus;
}
export interface PutResourcePolicyRequest {
  Policy: string;
  RegistryName?: string;
  RevisionId?: string;
}
export interface PutResourcePolicyResponse {
  Policy?: string;
  RevisionId?: string;
}
export interface RegistrySummary {
  RegistryArn?: string;
  RegistryName?: string;
  Tags?: Record<string, string>;
}
export interface SchemaSummary {
  LastModified?: Date | string;
  SchemaArn?: string;
  SchemaName?: string;
  Tags?: Record<string, string>;
  VersionCount?: number;
}
export interface SchemaVersionSummary {
  SchemaArn?: string;
  SchemaName?: string;
  SchemaVersion?: string;
  Type?: Type;
}
export interface SearchSchemasRequest {
  Keywords: string;
  Limit?: number;
  NextToken?: string;
  RegistryName: string;
}
export interface SearchSchemasResponse {
  NextToken?: string;
  Schemas?: Array<SearchSchemaSummary>;
}
export interface SearchSchemaSummary {
  RegistryName?: string;
  SchemaArn?: string;
  SchemaName?: string;
  SchemaVersions?: Array<SearchSchemaVersionSummary>;
}
export interface SearchSchemaVersionSummary {
  CreatedDate?: Date | string;
  SchemaVersion?: string;
  Type?: Type;
}
export declare class ServiceUnavailableException extends EffectData.TaggedError(
  "ServiceUnavailableException",
)<{
  readonly Code: string;
  readonly Message: string;
}> {}
export interface StartDiscovererRequest {
  DiscovererId: string;
}
export interface StartDiscovererResponse {
  DiscovererId?: string;
  State?: DiscovererState;
}
export interface StopDiscovererRequest {
  DiscovererId: string;
}
export interface StopDiscovererResponse {
  DiscovererId?: string;
  State?: DiscovererState;
}
export type SynthesizedJson__string = string;

export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Record<string, string>;
}
export type Tags = Record<string, string>;
export declare class TooManyRequestsException extends EffectData.TaggedError(
  "TooManyRequestsException",
)<{
  readonly Code: string;
  readonly Message: string;
}> {}
export type Type = "OpenApi3" | "JSONSchemaDraft4";
export declare class UnauthorizedException extends EffectData.TaggedError(
  "UnauthorizedException",
)<{
  readonly Code: string;
  readonly Message: string;
}> {}
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: Array<string>;
}
export interface UpdateDiscovererRequest {
  Description?: string;
  DiscovererId: string;
  CrossAccount?: boolean;
}
export interface UpdateDiscovererResponse {
  Description?: string;
  DiscovererArn?: string;
  DiscovererId?: string;
  SourceArn?: string;
  State?: DiscovererState;
  CrossAccount?: boolean;
  Tags?: Record<string, string>;
}
export interface UpdateRegistryRequest {
  Description?: string;
  RegistryName: string;
}
export interface UpdateRegistryResponse {
  Description?: string;
  RegistryArn?: string;
  RegistryName?: string;
  Tags?: Record<string, string>;
}
export interface UpdateSchemaRequest {
  ClientTokenId?: string;
  Content?: string;
  Description?: string;
  RegistryName: string;
  SchemaName: string;
  Type?: Type;
}
export interface UpdateSchemaResponse {
  Description?: string;
  LastModified?: Date | string;
  SchemaArn?: string;
  SchemaName?: string;
  SchemaVersion?: string;
  Tags?: Record<string, string>;
  Type?: string;
  VersionCreatedDate?: Date | string;
}
export declare namespace CreateDiscoverer {
  export type Input = CreateDiscovererRequest;
  export type Output = CreateDiscovererResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateRegistry {
  export type Input = CreateRegistryRequest;
  export type Output = CreateRegistryResponse;
  export type Error =
    | BadRequestException
    | ConflictException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace CreateSchema {
  export type Input = CreateSchemaRequest;
  export type Output = CreateSchemaResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | CommonAwsError;
}

export declare namespace DeleteDiscoverer {
  export type Input = DeleteDiscovererRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteRegistry {
  export type Input = DeleteRegistryRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteResourcePolicy {
  export type Input = DeleteResourcePolicyRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteSchema {
  export type Input = DeleteSchemaRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DeleteSchemaVersion {
  export type Input = DeleteSchemaVersionRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeCodeBinding {
  export type Input = DescribeCodeBindingRequest;
  export type Output = DescribeCodeBindingResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeDiscoverer {
  export type Input = DescribeDiscovererRequest;
  export type Output = DescribeDiscovererResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeRegistry {
  export type Input = DescribeRegistryRequest;
  export type Output = DescribeRegistryResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace DescribeSchema {
  export type Input = DescribeSchemaRequest;
  export type Output = DescribeSchemaResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ExportSchema {
  export type Input = ExportSchemaRequest;
  export type Output = ExportSchemaResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetCodeBindingSource {
  export type Input = GetCodeBindingSourceRequest;
  export type Output = GetCodeBindingSourceResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetDiscoveredSchema {
  export type Input = GetDiscoveredSchemaRequest;
  export type Output = GetDiscoveredSchemaResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace GetResourcePolicy {
  export type Input = GetResourcePolicyRequest;
  export type Output = GetResourcePolicyResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListDiscoverers {
  export type Input = ListDiscoverersRequest;
  export type Output = ListDiscoverersResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListRegistries {
  export type Input = ListRegistriesRequest;
  export type Output = ListRegistriesResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListSchemas {
  export type Input = ListSchemasRequest;
  export type Output = ListSchemasResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListSchemaVersions {
  export type Input = ListSchemaVersionsRequest;
  export type Output = ListSchemaVersionsResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace ListTagsForResource {
  export type Input = ListTagsForResourceRequest;
  export type Output = ListTagsForResourceResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace PutCodeBinding {
  export type Input = PutCodeBindingRequest;
  export type Output = PutCodeBindingResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | GoneException
    | InternalServerErrorException
    | NotFoundException
    | TooManyRequestsException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace PutResourcePolicy {
  export type Input = PutResourcePolicyRequest;
  export type Output = PutResourcePolicyResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | PreconditionFailedException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace SearchSchemas {
  export type Input = SearchSchemasRequest;
  export type Output = SearchSchemasResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace StartDiscoverer {
  export type Input = StartDiscovererRequest;
  export type Output = StartDiscovererResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace StopDiscoverer {
  export type Input = StopDiscovererRequest;
  export type Output = StopDiscovererResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace TagResource {
  export type Input = TagResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UntagResource {
  export type Input = UntagResourceRequest;
  export type Output = {};
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | CommonAwsError;
}

export declare namespace UpdateDiscoverer {
  export type Input = UpdateDiscovererRequest;
  export type Output = UpdateDiscovererResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateRegistry {
  export type Input = UpdateRegistryRequest;
  export type Output = UpdateRegistryResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | UnauthorizedException
    | CommonAwsError;
}

export declare namespace UpdateSchema {
  export type Input = UpdateSchemaRequest;
  export type Output = UpdateSchemaResponse;
  export type Error =
    | BadRequestException
    | ForbiddenException
    | InternalServerErrorException
    | NotFoundException
    | ServiceUnavailableException
    | CommonAwsError;
}
