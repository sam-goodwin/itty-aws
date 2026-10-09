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
// Schema table, filled on first reach (see __S at the end).
const __s: any[] = [];
const svc = /*@__PURE__*/ T.AwsApiService({ sdkId: "schemas", serviceShapeName: "schemas" });
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "schemas" });
const ver = /*@__PURE__*/ T.ServiceVersion("2019-12-02");
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
              `https://schemas-fips.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err(
            "FIPS and DualStack are enabled, but this partition does not support one or both",
          );
        }
        if (UseFIPS === true) {
          if (_.getAttr(PartitionResult, "supportsFIPS") === true) {
            return e(`https://schemas-fips.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
          }
          return err("FIPS is enabled but this partition does not support FIPS");
        }
        if (UseDualStack === true) {
          if (true === _.getAttr(PartitionResult, "supportsDualStack")) {
            return e(
              `https://schemas.${Region}.${_.getAttr(PartitionResult, "dualStackDnsSuffix")}`,
            );
          }
          return err("DualStack is enabled but this partition does not support DualStack");
        }
        return e(`https://schemas.${Region}.${_.getAttr(PartitionResult, "dnsSuffix")}`);
      }
    }
  }
  return err("Invalid Configuration: Missing Region");
});

export class BadRequestException
  extends /*@__PURE__*/ S.TaggedError<BadRequestException>()(
    "BadRequestException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class ConflictException
  extends /*@__PURE__*/ S.TaggedError<ConflictException>()(
    "ConflictException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(409),
  ).pipe(C.withConflictError) {}
export class ForbiddenException
  extends /*@__PURE__*/ S.TaggedError<ForbiddenException>()(
    "ForbiddenException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class GoneException
  extends /*@__PURE__*/ S.TaggedError<GoneException>()(
    "GoneException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(410),
  ).pipe(C.withBadRequestError) {}
export class InternalServerErrorException
  extends /*@__PURE__*/ S.TaggedError<InternalServerErrorException>()(
    "InternalServerErrorException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class NotFoundException
  extends /*@__PURE__*/ S.TaggedError<NotFoundException>()(
    "NotFoundException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class PreconditionFailedException
  extends /*@__PURE__*/ S.TaggedError<PreconditionFailedException>()(
    "PreconditionFailedException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(412),
  ) {}
export class ServiceUnavailableException
  extends /*@__PURE__*/ S.TaggedError<ServiceUnavailableException>()(
    "ServiceUnavailableException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(503),
  ).pipe(C.withServerError) {}
export class TooManyRequestsException
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestsException>()(
    "TooManyRequestsException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UnauthorizedException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedException>()(
    "UnauthorizedException",
    {
      Code: /*@__PURE__*/ S.optional(S.String),
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export type __stringMin0Max256 = string;
export type __stringMin20Max1600 = string;
export type Tags = { [key: string]: string | undefined };
export interface CreateDiscovererRequest {
  Description?: string;
  SourceArn?: string;
  CrossAccount?: boolean;
  Tags?: { [key: string]: string | undefined };
}
export type DiscovererState = "STARTED" | "STOPPED" | (string & {});
export interface CreateDiscovererResponse {
  Description?: string;
  DiscovererArn?: string;
  DiscovererId?: string;
  SourceArn?: string;
  State?: DiscovererState;
  CrossAccount?: boolean;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateRegistryRequest {
  Description?: string;
  RegistryName: string;
  Tags?: { [key: string]: string | undefined };
}
export interface CreateRegistryResponse {
  Description?: string;
  RegistryArn?: string;
  RegistryName?: string;
  Tags?: { [key: string]: string | undefined };
}
export type __stringMin1Max100000 = string;
export type Type = "OpenApi3" | "JSONSchemaDraft4" | (string & {});
export interface CreateSchemaRequest {
  Content?: string;
  Description?: string;
  RegistryName: string;
  SchemaName: string;
  Tags?: { [key: string]: string | undefined };
  Type?: Type;
}
export type __timestampIso8601 = Date;
export interface CreateSchemaResponse {
  Description?: string;
  LastModified?: Date;
  SchemaArn?: string;
  SchemaName?: string;
  SchemaVersion?: string;
  Tags?: { [key: string]: string | undefined };
  Type?: string;
  VersionCreatedDate?: Date;
}
export interface DeleteDiscovererRequest {
  DiscovererId: string;
}
export interface DeleteDiscovererResponse {}
export interface DeleteRegistryRequest {
  RegistryName: string;
}
export interface DeleteRegistryResponse {}
export interface DeleteResourcePolicyRequest {
  RegistryName?: string;
}
export interface DeleteResourcePolicyResponse {}
export interface DeleteSchemaRequest {
  RegistryName: string;
  SchemaName: string;
}
export interface DeleteSchemaResponse {}
export interface DeleteSchemaVersionRequest {
  RegistryName: string;
  SchemaName: string;
  SchemaVersion: string;
}
export interface DeleteSchemaVersionResponse {}
export interface DescribeCodeBindingRequest {
  Language: string;
  RegistryName: string;
  SchemaName: string;
  SchemaVersion?: string;
}
export type CodeGenerationStatus =
  | "CREATE_IN_PROGRESS"
  | "CREATE_COMPLETE"
  | "CREATE_FAILED"
  | (string & {});
export interface DescribeCodeBindingResponse {
  CreationDate?: Date;
  LastModified?: Date;
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
  Tags?: { [key: string]: string | undefined };
}
export interface DescribeRegistryRequest {
  RegistryName: string;
}
export interface DescribeRegistryResponse {
  Description?: string;
  RegistryArn?: string;
  RegistryName?: string;
  Tags?: { [key: string]: string | undefined };
}
export interface DescribeSchemaRequest {
  RegistryName: string;
  SchemaName: string;
  SchemaVersion?: string;
}
export interface DescribeSchemaResponse {
  Content?: string;
  Description?: string;
  LastModified?: Date;
  SchemaArn?: string;
  SchemaName?: string;
  SchemaVersion?: string;
  Tags?: { [key: string]: string | undefined };
  Type?: string;
  VersionCreatedDate?: Date;
}
export interface ExportSchemaRequest {
  RegistryName: string;
  SchemaName: string;
  SchemaVersion?: string;
  Type?: string;
}
export interface ExportSchemaResponse {
  Content?: string;
  SchemaArn?: string;
  SchemaName?: string;
  SchemaVersion?: string;
  Type?: string;
}
export interface GetCodeBindingSourceRequest {
  Language: string;
  RegistryName: string;
  SchemaName: string;
  SchemaVersion?: string;
}
export interface GetCodeBindingSourceResponse {
  Body?: T.StreamingOutputBody;
}
export type GetDiscoveredSchemaVersionItemInput = string;
export type __listOfGetDiscoveredSchemaVersionItemInput = string[];
const __listOfGetDiscoveredSchemaVersionItemInput = /*@__PURE__*/ __L.at(__c3, 0);
export interface GetDiscoveredSchemaRequest {
  Events?: string[];
  Type?: Type;
}
export interface GetDiscoveredSchemaResponse {
  Content?: string;
}
export interface GetResourcePolicyRequest {
  RegistryName?: string;
}
export type SynthesizedJson__string = string;
export interface GetResourcePolicyResponse {
  Policy?: string;
  RevisionId?: string;
}
export interface ListDiscoverersRequest {
  DiscovererIdPrefix?: string;
  Limit?: number;
  NextToken?: string;
  SourceArnPrefix?: string;
}
export interface DiscovererSummary {
  DiscovererArn?: string;
  DiscovererId?: string;
  SourceArn?: string;
  State?: DiscovererState;
  CrossAccount?: boolean;
  Tags?: { [key: string]: string | undefined };
}
export type __listOfDiscovererSummary = DiscovererSummary[];
const __listOfDiscovererSummary = /*@__PURE__*/ __L.at(__c3, 7);
export interface ListDiscoverersResponse {
  Discoverers?: DiscovererSummary[];
  NextToken?: string;
}
export interface ListRegistriesRequest {
  Limit?: number;
  NextToken?: string;
  RegistryNamePrefix?: string;
  Scope?: string;
}
export interface RegistrySummary {
  RegistryArn?: string;
  RegistryName?: string;
  Tags?: { [key: string]: string | undefined };
}
export type __listOfRegistrySummary = RegistrySummary[];
const __listOfRegistrySummary = /*@__PURE__*/ __L.at(__c4, 3);
export interface ListRegistriesResponse {
  NextToken?: string;
  Registries?: RegistrySummary[];
}
export interface ListSchemasRequest {
  Limit?: number;
  NextToken?: string;
  RegistryName: string;
  SchemaNamePrefix?: string;
}
export interface SchemaSummary {
  LastModified?: Date;
  SchemaArn?: string;
  SchemaName?: string;
  Tags?: { [key: string]: string | undefined };
  VersionCount?: number;
}
export type __listOfSchemaSummary = SchemaSummary[];
const __listOfSchemaSummary = /*@__PURE__*/ __L.at(__c4, 7);
export interface ListSchemasResponse {
  NextToken?: string;
  Schemas?: SchemaSummary[];
}
export interface ListSchemaVersionsRequest {
  Limit?: number;
  NextToken?: string;
  RegistryName: string;
  SchemaName: string;
}
export interface SchemaVersionSummary {
  SchemaArn?: string;
  SchemaName?: string;
  SchemaVersion?: string;
  Type?: Type;
}
export type __listOfSchemaVersionSummary = SchemaVersionSummary[];
const __listOfSchemaVersionSummary = /*@__PURE__*/ __L.at(__c5, 3);
export interface ListSchemaVersionsResponse {
  NextToken?: string;
  SchemaVersions?: SchemaVersionSummary[];
}
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | undefined };
}
export interface PutCodeBindingRequest {
  Language: string;
  RegistryName: string;
  SchemaName: string;
  SchemaVersion?: string;
}
export interface PutCodeBindingResponse {
  CreationDate?: Date;
  LastModified?: Date;
  SchemaVersion?: string;
  Status?: CodeGenerationStatus;
}
export interface PutResourcePolicyRequest {
  Policy?: string;
  RegistryName?: string;
  RevisionId?: string;
}
export interface PutResourcePolicyResponse {
  Policy?: string;
  RevisionId?: string;
}
export interface SearchSchemasRequest {
  Keywords?: string;
  Limit?: number;
  NextToken?: string;
  RegistryName: string;
}
export interface SearchSchemaVersionSummary {
  CreatedDate?: Date;
  SchemaVersion?: string;
  Type?: Type;
}
export type __listOfSearchSchemaVersionSummary = SearchSchemaVersionSummary[];
const __listOfSearchSchemaVersionSummary = /*@__PURE__*/ __L.at(__c6, 4);
export interface SearchSchemaSummary {
  RegistryName?: string;
  SchemaArn?: string;
  SchemaName?: string;
  SchemaVersions?: SearchSchemaVersionSummary[];
}
export type __listOfSearchSchemaSummary = SearchSchemaSummary[];
const __listOfSearchSchemaSummary = /*@__PURE__*/ __L.at(__c6, 6);
export interface SearchSchemasResponse {
  NextToken?: string;
  Schemas?: SearchSchemaSummary[];
}
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
export interface TagResourceRequest {
  ResourceArn: string;
  Tags?: { [key: string]: string | undefined };
}
export interface TagResourceResponse {}
export type __listOf__string = string[];
const __listOf__string =
  __listOfGetDiscoveredSchemaVersionItemInput as any as S.Schema<__listOf__string>;
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys?: string[];
}
export interface UntagResourceResponse {}
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
  Tags?: { [key: string]: string | undefined };
}
export interface UpdateRegistryRequest {
  Description?: string;
  RegistryName: string;
}
export interface UpdateRegistryResponse {
  Description?: string;
  RegistryArn?: string;
  RegistryName?: string;
  Tags?: { [key: string]: string | undefined };
}
export type __stringMin0Max36 = string;
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
  LastModified?: Date;
  SchemaArn?: string;
  SchemaName?: string;
  SchemaVersion?: string;
  Tags?: { [key: string]: string | undefined };
  Type?: string;
  VersionCreatedDate?: Date;
}
export type CreateDiscovererError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a discoverer.
 */
export const createDiscoverer: API.OperationMethod<
  CreateDiscovererRequest,
  CreateDiscovererResponse,
  CreateDiscovererError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(1) as any as S.Schema<CreateDiscovererRequest>,
  output: __S(2) as any as S.Schema<CreateDiscovererResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDiscoverer",
}));

export type CreateRegistryError =
  | BadRequestException
  | ConflictException
  | ForbiddenException
  | InternalServerErrorException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Creates a registry.
 */
export const createRegistry: API.OperationMethod<
  CreateRegistryRequest,
  CreateRegistryResponse,
  CreateRegistryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(3) as any as S.Schema<CreateRegistryRequest>,
  output: __S(4) as any as S.Schema<CreateRegistryResponse>,
  errors: [
    BadRequestException,
    ConflictException,
    ForbiddenException,
    InternalServerErrorException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateRegistry",
}));

export type CreateSchemaError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Creates a schema definition.
 *
 * Inactive schemas will be deleted after two years.
 */
export const createSchema: API.OperationMethod<
  CreateSchemaRequest,
  CreateSchemaResponse,
  CreateSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(5) as any as S.Schema<CreateSchemaRequest>,
  output: __S(6) as any as S.Schema<CreateSchemaResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateSchema",
}));

export type DeleteDiscovererError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes a discoverer.
 */
export const deleteDiscoverer: API.OperationMethod<
  DeleteDiscovererRequest,
  DeleteDiscovererResponse,
  DeleteDiscovererError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(7) as any as S.Schema<DeleteDiscovererRequest>,
  output: __S(8) as any as S.Schema<DeleteDiscovererResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDiscoverer",
}));

export type DeleteRegistryError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Deletes a Registry.
 */
export const deleteRegistry: API.OperationMethod<
  DeleteRegistryRequest,
  DeleteRegistryResponse,
  DeleteRegistryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(9) as any as S.Schema<DeleteRegistryRequest>,
  output: __S(8) as any as S.Schema<DeleteRegistryResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteRegistry",
}));

export type DeleteResourcePolicyError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Delete the resource-based policy attached to the specified registry.
 */
export const deleteResourcePolicy: API.OperationMethod<
  DeleteResourcePolicyRequest,
  DeleteResourcePolicyResponse,
  DeleteResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(10) as any as S.Schema<DeleteResourcePolicyRequest>,
  output: __S(8) as any as S.Schema<DeleteResourcePolicyResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteResourcePolicy",
}));

export type DeleteSchemaError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Delete a schema definition.
 */
export const deleteSchema: API.OperationMethod<
  DeleteSchemaRequest,
  DeleteSchemaResponse,
  DeleteSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(11) as any as S.Schema<DeleteSchemaRequest>,
  output: __S(8) as any as S.Schema<DeleteSchemaResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSchema",
}));

export type DeleteSchemaVersionError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Delete the schema version definition
 */
export const deleteSchemaVersion: API.OperationMethod<
  DeleteSchemaVersionRequest,
  DeleteSchemaVersionResponse,
  DeleteSchemaVersionError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(12) as any as S.Schema<DeleteSchemaVersionRequest>,
  output: __S(8) as any as S.Schema<DeleteSchemaVersionResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteSchemaVersion",
}));

export type DescribeCodeBindingError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Describe the code binding URI.
 */
export const describeCodeBinding: API.OperationMethod<
  DescribeCodeBindingRequest,
  DescribeCodeBindingResponse,
  DescribeCodeBindingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(13) as any as S.Schema<DescribeCodeBindingRequest>,
  output: __S(14) as any as S.Schema<DescribeCodeBindingResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeCodeBinding",
}));

export type DescribeDiscovererError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Describes the discoverer.
 */
export const describeDiscoverer: API.OperationMethod<
  DescribeDiscovererRequest,
  DescribeDiscovererResponse,
  DescribeDiscovererError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(15) as any as S.Schema<DescribeDiscovererRequest>,
  output: __S(16) as any as S.Schema<DescribeDiscovererResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeDiscoverer",
}));

export type DescribeRegistryError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Describes the registry.
 */
export const describeRegistry: API.OperationMethod<
  DescribeRegistryRequest,
  DescribeRegistryResponse,
  DescribeRegistryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(17) as any as S.Schema<DescribeRegistryRequest>,
  output: __S(4) as any as S.Schema<DescribeRegistryResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeRegistry",
}));

export type DescribeSchemaError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Retrieve the schema definition.
 */
export const describeSchema: API.OperationMethod<
  DescribeSchemaRequest,
  DescribeSchemaResponse,
  DescribeSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(18) as any as S.Schema<DescribeSchemaRequest>,
  output: __S(19) as any as S.Schema<DescribeSchemaResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DescribeSchema",
}));

export type ExportSchemaError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 *
 */
export const exportSchema: API.OperationMethod<
  ExportSchemaRequest,
  ExportSchemaResponse,
  ExportSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(20) as any as S.Schema<ExportSchemaRequest>,
  output: __S(21) as any as S.Schema<ExportSchemaResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ExportSchema",
}));

export type GetCodeBindingSourceError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | UnauthorizedException
  | CommonErrors;
/**
 * Get the code binding source URI.
 */
export const getCodeBindingSource: API.OperationMethod<
  GetCodeBindingSourceRequest,
  GetCodeBindingSourceResponse,
  GetCodeBindingSourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(22) as any as S.Schema<GetCodeBindingSourceRequest>,
  output: __S(23) as any as S.Schema<GetCodeBindingSourceResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetCodeBindingSource",
}));

export type GetDiscoveredSchemaError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Get the discovered schema that was generated based on sampled events.
 */
export const getDiscoveredSchema: API.OperationMethod<
  GetDiscoveredSchemaRequest,
  GetDiscoveredSchemaResponse,
  GetDiscoveredSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(25) as any as S.Schema<GetDiscoveredSchemaRequest>,
  output: __S(26) as any as S.Schema<GetDiscoveredSchemaResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetDiscoveredSchema",
}));

export type GetResourcePolicyError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Retrieves the resource-based policy attached to a given registry.
 */
export const getResourcePolicy: API.OperationMethod<
  GetResourcePolicyRequest,
  GetResourcePolicyResponse,
  GetResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(27) as any as S.Schema<GetResourcePolicyRequest>,
  output: __S(28) as any as S.Schema<GetResourcePolicyResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetResourcePolicy",
}));

export type ListDiscoverersError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * List the discoverers.
 */
export const listDiscoverers: API.PaginatedOperationMethod<
  ListDiscoverersRequest,
  ListDiscoverersResponse,
  ListDiscoverersError,
  Credentials | HttpClient.HttpClient,
  DiscovererSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(29) as any as S.Schema<ListDiscoverersRequest>,
  output: __S(32) as any as S.Schema<ListDiscoverersResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDiscoverers",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Discoverers",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListRegistriesError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * List the registries.
 */
export const listRegistries: API.PaginatedOperationMethod<
  ListRegistriesRequest,
  ListRegistriesResponse,
  ListRegistriesError,
  Credentials | HttpClient.HttpClient,
  RegistrySummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(33) as any as S.Schema<ListRegistriesRequest>,
  output: __S(36) as any as S.Schema<ListRegistriesResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListRegistries",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Registries",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListSchemasError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * List the schemas.
 */
export const listSchemas: API.PaginatedOperationMethod<
  ListSchemasRequest,
  ListSchemasResponse,
  ListSchemasError,
  Credentials | HttpClient.HttpClient,
  SchemaSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(37) as any as S.Schema<ListSchemasRequest>,
  output: __S(40) as any as S.Schema<ListSchemasResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSchemas",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Schemas",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListSchemaVersionsError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Provides a list of the schema versions and related information.
 */
export const listSchemaVersions: API.PaginatedOperationMethod<
  ListSchemaVersionsRequest,
  ListSchemaVersionsResponse,
  ListSchemaVersionsError,
  Credentials | HttpClient.HttpClient,
  SchemaVersionSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(41) as any as S.Schema<ListSchemaVersionsRequest>,
  output: __S(44) as any as S.Schema<ListSchemaVersionsResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListSchemaVersions",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "SchemaVersions",
    pageSize: "Limit",
  } as const,
})) as any;

export type ListTagsForResourceError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | CommonErrors;
/**
 * Get tags for resource.
 */
export const listTagsForResource: API.OperationMethod<
  ListTagsForResourceRequest,
  ListTagsForResourceResponse,
  ListTagsForResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(45) as any as S.Schema<ListTagsForResourceRequest>,
  output: __S(46) as any as S.Schema<ListTagsForResourceResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListTagsForResource",
}));

export type PutCodeBindingError =
  | BadRequestException
  | ForbiddenException
  | GoneException
  | InternalServerErrorException
  | NotFoundException
  | TooManyRequestsException
  | UnauthorizedException
  | ConflictException
  | CommonErrors;
/**
 * Put code binding URI
 */
export const putCodeBinding: API.OperationMethod<
  PutCodeBindingRequest,
  PutCodeBindingResponse,
  PutCodeBindingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(47) as any as S.Schema<PutCodeBindingRequest>,
  output: __S(48) as any as S.Schema<PutCodeBindingResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    GoneException,
    InternalServerErrorException,
    NotFoundException,
    TooManyRequestsException,
    UnauthorizedException,
    ConflictException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutCodeBinding",
}));

export type PutResourcePolicyError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | PreconditionFailedException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * The name of the policy.
 */
export const putResourcePolicy: API.OperationMethod<
  PutResourcePolicyRequest,
  PutResourcePolicyResponse,
  PutResourcePolicyError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(49) as any as S.Schema<PutResourcePolicyRequest>,
  output: __S(28) as any as S.Schema<PutResourcePolicyResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    PreconditionFailedException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutResourcePolicy",
}));

export type SearchSchemasError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Search the schemas
 */
export const searchSchemas: API.PaginatedOperationMethod<
  SearchSchemasRequest,
  SearchSchemasResponse,
  SearchSchemasError,
  Credentials | HttpClient.HttpClient,
  SearchSchemaSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: __S(50) as any as S.Schema<SearchSchemasRequest>,
  output: __S(55) as any as S.Schema<SearchSchemasResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchSchemas",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "Schemas",
    pageSize: "Limit",
  } as const,
})) as any;

export type StartDiscovererError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Starts the discoverer
 */
export const startDiscoverer: API.OperationMethod<
  StartDiscovererRequest,
  StartDiscovererResponse,
  StartDiscovererError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(56) as any as S.Schema<StartDiscovererRequest>,
  output: __S(57) as any as S.Schema<StartDiscovererResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StartDiscoverer",
}));

export type StopDiscovererError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Stops the discoverer
 */
export const stopDiscoverer: API.OperationMethod<
  StopDiscovererRequest,
  StopDiscovererResponse,
  StopDiscovererError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(58) as any as S.Schema<StopDiscovererRequest>,
  output: __S(57) as any as S.Schema<StopDiscovererResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "StopDiscoverer",
}));

export type TagResourceError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | CommonErrors;
/**
 * Add tags to a resource.
 */
export const tagResource: API.OperationMethod<
  TagResourceRequest,
  TagResourceResponse,
  TagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(59) as any as S.Schema<TagResourceRequest>,
  output: __S(8) as any as S.Schema<TagResourceResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "TagResource",
}));

export type UntagResourceError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | CommonErrors;
/**
 * Removes tags from a resource.
 */
export const untagResource: API.OperationMethod<
  UntagResourceRequest,
  UntagResourceResponse,
  UntagResourceError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(60) as any as S.Schema<UntagResourceRequest>,
  output: __S(8) as any as S.Schema<UntagResourceResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UntagResource",
}));

export type UpdateDiscovererError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates the discoverer
 */
export const updateDiscoverer: API.OperationMethod<
  UpdateDiscovererRequest,
  UpdateDiscovererResponse,
  UpdateDiscovererError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(61) as any as S.Schema<UpdateDiscovererRequest>,
  output: __S(2) as any as S.Schema<UpdateDiscovererResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateDiscoverer",
}));

export type UpdateRegistryError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | UnauthorizedException
  | CommonErrors;
/**
 * Updates a registry.
 */
export const updateRegistry: API.OperationMethod<
  UpdateRegistryRequest,
  UpdateRegistryResponse,
  UpdateRegistryError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(62) as any as S.Schema<UpdateRegistryRequest>,
  output: __S(4) as any as S.Schema<UpdateRegistryResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
    UnauthorizedException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateRegistry",
}));

export type UpdateSchemaError =
  | BadRequestException
  | ForbiddenException
  | InternalServerErrorException
  | NotFoundException
  | ServiceUnavailableException
  | CommonErrors;
/**
 * Updates the schema definition
 *
 * Inactive schemas will be deleted after two years.
 */
export const updateSchema: API.OperationMethod<
  UpdateSchemaRequest,
  UpdateSchemaResponse,
  UpdateSchemaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: __S(63) as any as S.Schema<UpdateSchemaRequest>,
  output: __S(6) as any as S.Schema<UpdateSchemaResponse>,
  errors: [
    BadRequestException,
    ForbiddenException,
    InternalServerErrorException,
    NotFoundException,
    ServiceUnavailableException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "UpdateSchema",
}));

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.Record(S.String, /*@__PURE__*/ S.String.pipe(S.optional));
    case 1:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          SourceArn: S.optional(S.String),
          CrossAccount: S.optional(S.Boolean),
          Tags: S.optional(__S(0)),
        })
          .pipe(S.encodeKeys({ Tags: "tags" }))
          .pipe(
            T.all(T.Http({ method: "POST", uri: "/v1/discoverers" }), svc, auth, proto, ver, rules),
          ),
      ).annotate({ identifier: "CreateDiscovererRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          DiscovererArn: S.optional(S.String),
          DiscovererId: S.optional(S.String),
          SourceArn: S.optional(S.String),
          State: S.optional(S.String),
          CrossAccount: S.optional(S.Boolean),
          Tags: S.optional(__S(0)),
        }).pipe(S.encodeKeys({ Tags: "tags" })),
      ).annotate({ identifier: "CreateDiscovererResponse" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          RegistryName: S.String.pipe(T.HttpLabel("RegistryName")),
          Tags: S.optional(__S(0)),
        })
          .pipe(S.encodeKeys({ Tags: "tags" }))
          .pipe(
            T.all(
              T.Http({ method: "POST", uri: "/v1/registries/name/{RegistryName}" }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "CreateRegistryRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          RegistryArn: S.optional(S.String),
          RegistryName: S.optional(S.String),
          Tags: S.optional(__S(0)),
        }).pipe(S.encodeKeys({ Tags: "tags" })),
      ).annotate({ identifier: "CreateRegistryResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Content: S.optional(S.String),
          Description: S.optional(S.String),
          RegistryName: S.String.pipe(T.HttpLabel("RegistryName")),
          SchemaName: S.String.pipe(T.HttpLabel("SchemaName")),
          Tags: S.optional(__S(0)),
          Type: S.optional(S.String),
        })
          .pipe(S.encodeKeys({ Tags: "tags" }))
          .pipe(
            T.all(
              T.Http({
                method: "POST",
                uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}",
              }),
              svc,
              auth,
              proto,
              ver,
              rules,
            ),
          ),
      ).annotate({ identifier: "CreateSchemaRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          LastModified: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          SchemaArn: S.optional(S.String),
          SchemaName: S.optional(S.String),
          SchemaVersion: S.optional(S.String),
          Tags: S.optional(__S(0)),
          Type: S.optional(S.String),
          VersionCreatedDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }).pipe(S.encodeKeys({ Tags: "tags" })),
      ).annotate({ identifier: "CreateSchemaResponse" });
    case 7:
      return S.suspend(() =>
        S.Struct({ DiscovererId: S.String.pipe(T.HttpLabel("DiscovererId")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/discoverers/id/{DiscovererId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteDiscovererRequest" });
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({})).annotate({
        identifier: "DeleteDiscovererResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ RegistryName: S.String.pipe(T.HttpLabel("RegistryName")) }).pipe(
          T.all(
            T.Http({ method: "DELETE", uri: "/v1/registries/name/{RegistryName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteRegistryRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({ RegistryName: S.optional(S.String).pipe(T.HttpQuery("registryName")) }).pipe(
          T.all(T.Http({ method: "DELETE", uri: "/v1/policy" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "DeleteResourcePolicyRequest",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({
          RegistryName: S.String.pipe(T.HttpLabel("RegistryName")),
          SchemaName: S.String.pipe(T.HttpLabel("SchemaName")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DeleteSchemaRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RegistryName: S.String.pipe(T.HttpLabel("RegistryName")),
          SchemaName: S.String.pipe(T.HttpLabel("SchemaName")),
          SchemaVersion: S.String.pipe(T.HttpLabel("SchemaVersion")),
        }).pipe(
          T.all(
            T.Http({
              method: "DELETE",
              uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/version/{SchemaVersion}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DeleteSchemaVersionRequest",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Language: S.String.pipe(T.HttpLabel("Language")),
          RegistryName: S.String.pipe(T.HttpLabel("RegistryName")),
          SchemaName: S.String.pipe(T.HttpLabel("SchemaName")),
          SchemaVersion: S.optional(S.String).pipe(T.HttpQuery("schemaVersion")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeCodeBindingRequest",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          CreationDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          LastModified: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          SchemaVersion: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({
        identifier: "DescribeCodeBindingResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ DiscovererId: S.String.pipe(T.HttpLabel("DiscovererId")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/discoverers/id/{DiscovererId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "DescribeDiscovererRequest",
      });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          DiscovererArn: S.optional(S.String),
          DiscovererId: S.optional(S.String),
          SourceArn: S.optional(S.String),
          State: S.optional(S.String),
          CrossAccount: S.optional(S.Boolean),
          Tags: S.optional(__S(0)),
        }).pipe(S.encodeKeys({ Tags: "tags" })),
      ).annotate({
        identifier: "DescribeDiscovererResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ RegistryName: S.String.pipe(T.HttpLabel("RegistryName")) }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/registries/name/{RegistryName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeRegistryRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RegistryName: S.String.pipe(T.HttpLabel("RegistryName")),
          SchemaName: S.String.pipe(T.HttpLabel("SchemaName")),
          SchemaVersion: S.optional(S.String).pipe(T.HttpQuery("schemaVersion")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "DescribeSchemaRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          Content: S.optional(S.String),
          Description: S.optional(S.String),
          LastModified: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          SchemaArn: S.optional(S.String),
          SchemaName: S.optional(S.String),
          SchemaVersion: S.optional(S.String),
          Tags: S.optional(__S(0)),
          Type: S.optional(S.String),
          VersionCreatedDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
        }).pipe(S.encodeKeys({ Tags: "tags" })),
      ).annotate({ identifier: "DescribeSchemaResponse" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          RegistryName: S.String.pipe(T.HttpLabel("RegistryName")),
          SchemaName: S.String.pipe(T.HttpLabel("SchemaName")),
          SchemaVersion: S.optional(S.String).pipe(T.HttpQuery("schemaVersion")),
          Type: S.optional(S.String).pipe(T.HttpQuery("type")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/export",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ExportSchemaRequest" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Content: S.optional(S.String),
          SchemaArn: S.optional(S.String),
          SchemaName: S.optional(S.String),
          SchemaVersion: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "ExportSchemaResponse" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Language: S.String.pipe(T.HttpLabel("Language")),
          RegistryName: S.String.pipe(T.HttpLabel("RegistryName")),
          SchemaName: S.String.pipe(T.HttpLabel("SchemaName")),
          SchemaVersion: S.optional(S.String).pipe(T.HttpQuery("schemaVersion")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}/source",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "GetCodeBindingSourceRequest",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({ Body: S.optional(T.StreamingOutput).pipe(T.HttpPayload()) }),
      ).annotate({
        identifier: "GetCodeBindingSourceResponse",
      });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(S.String);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Events: S.optional(__listOfGetDiscoveredSchemaVersionItemInput),
          Type: S.optional(S.String),
        }).pipe(
          T.all(T.Http({ method: "POST", uri: "/v1/discover" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({
        identifier: "GetDiscoveredSchemaRequest",
      });
    case 2:
      return S.suspend(() => S.Struct({ Content: S.optional(S.String) })).annotate({
        identifier: "GetDiscoveredSchemaResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ RegistryName: S.optional(S.String).pipe(T.HttpQuery("registryName")) }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v1/policy" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "GetResourcePolicyRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({ Policy: S.optional(S.String), RevisionId: S.optional(S.String) }),
      ).annotate({
        identifier: "GetResourcePolicyResponse",
      });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DiscovererIdPrefix: S.optional(S.String).pipe(T.HttpQuery("discovererIdPrefix")),
          Limit: S.optional(S.Number).pipe(T.HttpQuery("limit")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          SourceArnPrefix: S.optional(S.String).pipe(T.HttpQuery("sourceArnPrefix")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v1/discoverers" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListDiscoverersRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          DiscovererArn: S.optional(S.String),
          DiscovererId: S.optional(S.String),
          SourceArn: S.optional(S.String),
          State: S.optional(S.String),
          CrossAccount: S.optional(S.Boolean),
          Tags: S.optional(__S(0)),
        }).pipe(S.encodeKeys({ Tags: "tags" })),
      ).annotate({ identifier: "DiscovererSummary" });
    case 7:
      return S.Array(__S(30));
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Discoverers: S.optional(__listOfDiscovererSummary),
          NextToken: S.optional(S.String),
        }),
      ).annotate({ identifier: "ListDiscoverersResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Limit: S.optional(S.Number).pipe(T.HttpQuery("limit")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          RegistryNamePrefix: S.optional(S.String).pipe(T.HttpQuery("registryNamePrefix")),
          Scope: S.optional(S.String).pipe(T.HttpQuery("scope")),
        }).pipe(
          T.all(T.Http({ method: "GET", uri: "/v1/registries" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "ListRegistriesRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          RegistryArn: S.optional(S.String),
          RegistryName: S.optional(S.String),
          Tags: S.optional(__S(0)),
        }).pipe(S.encodeKeys({ Tags: "tags" })),
      ).annotate({ identifier: "RegistrySummary" });
    case 3:
      return S.Array(__S(34));
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          Registries: S.optional(__listOfRegistrySummary),
        }),
      ).annotate({ identifier: "ListRegistriesResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          Limit: S.optional(S.Number).pipe(T.HttpQuery("limit")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          RegistryName: S.String.pipe(T.HttpLabel("RegistryName")),
          SchemaNamePrefix: S.optional(S.String).pipe(T.HttpQuery("schemaNamePrefix")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/registries/name/{RegistryName}/schemas" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "ListSchemasRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          LastModified: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          SchemaArn: S.optional(S.String),
          SchemaName: S.optional(S.String),
          Tags: S.optional(__S(0)),
          VersionCount: S.optional(S.Number),
        }).pipe(S.encodeKeys({ Tags: "tags" })),
      ).annotate({ identifier: "SchemaSummary" });
    case 7:
      return S.Array(__S(38));
  }
}
function __c5(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ NextToken: S.optional(S.String), Schemas: S.optional(__listOfSchemaSummary) }),
      ).annotate({ identifier: "ListSchemasResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Limit: S.optional(S.Number).pipe(T.HttpQuery("limit")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          RegistryName: S.String.pipe(T.HttpLabel("RegistryName")),
          SchemaName: S.String.pipe(T.HttpLabel("SchemaName")),
        }).pipe(
          T.all(
            T.Http({
              method: "GET",
              uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/versions",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({
        identifier: "ListSchemaVersionsRequest",
      });
    case 2:
      return S.suspend(() =>
        S.Struct({
          SchemaArn: S.optional(S.String),
          SchemaName: S.optional(S.String),
          SchemaVersion: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({ identifier: "SchemaVersionSummary" });
    case 3:
      return S.Array(__S(42));
    case 4:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          SchemaVersions: S.optional(__listOfSchemaVersionSummary),
        }),
      ).annotate({
        identifier: "ListSchemaVersionsResponse",
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
      return S.suspend(() =>
        S.Struct({ Tags: S.optional(__S(0)) }).pipe(S.encodeKeys({ Tags: "tags" })),
      ).annotate({
        identifier: "ListTagsForResourceResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Language: S.String.pipe(T.HttpLabel("Language")),
          RegistryName: S.String.pipe(T.HttpLabel("RegistryName")),
          SchemaName: S.String.pipe(T.HttpLabel("SchemaName")),
          SchemaVersion: S.optional(S.String).pipe(T.HttpQuery("schemaVersion")),
        }).pipe(
          T.all(
            T.Http({
              method: "POST",
              uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}/language/{Language}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "PutCodeBindingRequest" });
  }
}
function __c6(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          CreationDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          LastModified: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          SchemaVersion: S.optional(S.String),
          Status: S.optional(S.String),
        }),
      ).annotate({ identifier: "PutCodeBindingResponse" });
    case 1:
      return S.suspend(() =>
        S.Struct({
          Policy: S.optional(S.String),
          RegistryName: S.optional(S.String).pipe(T.HttpQuery("registryName")),
          RevisionId: S.optional(S.String),
        }).pipe(T.all(T.Http({ method: "PUT", uri: "/v1/policy" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutResourcePolicyRequest" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          Keywords: S.optional(S.String).pipe(T.HttpQuery("keywords")),
          Limit: S.optional(S.Number).pipe(T.HttpQuery("limit")),
          NextToken: S.optional(S.String).pipe(T.HttpQuery("nextToken")),
          RegistryName: S.String.pipe(T.HttpLabel("RegistryName")),
        }).pipe(
          T.all(
            T.Http({ method: "GET", uri: "/v1/registries/name/{RegistryName}/schemas/search" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "SearchSchemasRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          CreatedDate: S.optional(T.DateFromString.pipe(T.TimestampFormat("date-time"))),
          SchemaVersion: S.optional(S.String),
          Type: S.optional(S.String),
        }),
      ).annotate({
        identifier: "SearchSchemaVersionSummary",
      });
    case 4:
      return S.Array(__S(51));
    case 5:
      return S.suspend(() =>
        S.Struct({
          RegistryName: S.optional(S.String),
          SchemaArn: S.optional(S.String),
          SchemaName: S.optional(S.String),
          SchemaVersions: S.optional(__listOfSearchSchemaVersionSummary),
        }),
      ).annotate({ identifier: "SearchSchemaSummary" });
    case 6:
      return S.Array(__S(53));
    case 7:
      return S.suspend(() =>
        S.Struct({
          NextToken: S.optional(S.String),
          Schemas: S.optional(__listOfSearchSchemaSummary),
        }),
      ).annotate({ identifier: "SearchSchemasResponse" });
  }
}
function __c7(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({ DiscovererId: S.String.pipe(T.HttpLabel("DiscovererId")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/discoverers/id/{DiscovererId}/start" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StartDiscovererRequest" });
    case 1:
      return S.suspend(() =>
        S.Struct({ DiscovererId: S.optional(S.String), State: S.optional(S.String) }),
      ).annotate({ identifier: "StartDiscovererResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({ DiscovererId: S.String.pipe(T.HttpLabel("DiscovererId")) }).pipe(
          T.all(
            T.Http({ method: "POST", uri: "/v1/discoverers/id/{DiscovererId}/stop" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "StopDiscovererRequest" });
    case 3:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          Tags: S.optional(__S(0)),
        })
          .pipe(S.encodeKeys({ Tags: "tags" }))
          .pipe(
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
    case 4:
      return S.suspend(() =>
        S.Struct({
          ResourceArn: S.String.pipe(T.HttpLabel("ResourceArn")),
          TagKeys: S.optional(__listOf__string).pipe(T.HttpQuery("tagKeys")),
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
    case 5:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          DiscovererId: S.String.pipe(T.HttpLabel("DiscovererId")),
          CrossAccount: S.optional(S.Boolean),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/discoverers/id/{DiscovererId}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateDiscovererRequest" });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Description: S.optional(S.String),
          RegistryName: S.String.pipe(T.HttpLabel("RegistryName")),
        }).pipe(
          T.all(
            T.Http({ method: "PUT", uri: "/v1/registries/name/{RegistryName}" }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateRegistryRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          ClientTokenId: S.optional(S.String).pipe(T.IdempotencyToken()),
          Content: S.optional(S.String),
          Description: S.optional(S.String),
          RegistryName: S.String.pipe(T.HttpLabel("RegistryName")),
          SchemaName: S.String.pipe(T.HttpLabel("SchemaName")),
          Type: S.optional(S.String),
        }).pipe(
          T.all(
            T.Http({
              method: "PUT",
              uri: "/v1/registries/name/{RegistryName}/schemas/name/{SchemaName}",
            }),
            svc,
            auth,
            proto,
            ver,
            rules,
          ),
        ),
      ).annotate({ identifier: "UpdateSchemaRequest" });
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
  }
}
