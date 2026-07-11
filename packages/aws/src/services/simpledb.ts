/**
 * Amazon SimpleDB (classic, 2009-04-15) — HAND-WRITTEN service module.
 *
 * AWS never published a Smithy model for classic SimpleDB (it exists only in
 * SDK v2 / botocore), so this module cannot be generated from
 * `specs/api-models-aws` and must not be regenerated. The modern
 * "SimpleDBv2" Smithy model (`simpledbv2.ts`) covers ONLY the domain-export
 * migration API; domain management (CreateDomain / DeleteDomain /
 * DomainMetadata / ListDomains) lives here.
 *
 * Protocol notes (verified against the live endpoint):
 * - awsQuery wire shape with `{Op}Result` response wrappers.
 * - Signature Version 2 ONLY (`T.AwsAuthSigv2`) — the endpoint rejects SigV4
 *   with `AuthFailure: access credentials are missing`.
 * - Errors are wrapped EC2-style:
 *   `<Response><Errors><Error><Code/>..</Error></Errors><RequestID/></Response>`
 *   (handled by the aws-query protocol's legacy fallback).
 */
import * as HttpClient from "effect/unstable/http/HttpClient";
import * as S from "@distilled.cloud/core/schema";
import * as stream from "effect/Stream";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import type { Region } from "../region.ts";
const ns = T.XmlNamespace("http://sdb.amazonaws.com/doc/2009-04-15/");
const svc = T.AwsApiService({
  sdkId: "SimpleDB",
  serviceShapeName: "AmazonSimpleDB",
});
const auth = T.AwsAuthSigv2({ name: "sdb" });
const ver = T.ServiceVersion("2009-04-15");
const proto = T.AwsProtocolsAwsQuery();
const rules = T.EndpointResolver((p, _) => {
  const { UseDualStack = false, UseFIPS = false, Endpoint, Region } = p;
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
      return err(
        "Invalid Configuration: FIPS and custom endpoint are not supported",
      );
    }
    if (UseDualStack === true) {
      return err(
        "Invalid Configuration: Dualstack and custom endpoint are not supported",
      );
    }
    return e(Endpoint);
  }
  if (Region != null) {
    if (Region === "us-east-1") {
      return e("https://sdb.amazonaws.com");
    }
    return e(`https://sdb.${Region}.amazonaws.com`);
  }
  return err("Invalid Configuration: Missing Region");
});

//# Newtypes
export type DomainName = string;

//# Schemas
export interface CreateDomainRequest {
  DomainName: string;
}
export const CreateDomainRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ DomainName: S.String }).pipe(
    T.all(
      ns,
      T.Http({ method: "POST", uri: "/" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "CreateDomainRequest",
}) as any as S.Schema<CreateDomainRequest>;
export interface CreateDomainResponse {}
export const CreateDomainResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({}),
).annotate({
  identifier: "CreateDomainResponse",
}) as any as S.Schema<CreateDomainResponse>;

export interface DeleteDomainRequest {
  DomainName: string;
}
export const DeleteDomainRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ DomainName: S.String }).pipe(
    T.all(
      ns,
      T.Http({ method: "POST", uri: "/" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DeleteDomainRequest",
}) as any as S.Schema<DeleteDomainRequest>;
export interface DeleteDomainResponse {}
export const DeleteDomainResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({}),
).annotate({
  identifier: "DeleteDomainResponse",
}) as any as S.Schema<DeleteDomainResponse>;

export interface DomainMetadataRequest {
  DomainName: string;
}
export const DomainMetadataRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({ DomainName: S.String }).pipe(
    T.all(
      ns,
      T.Http({ method: "POST", uri: "/" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "DomainMetadataRequest",
}) as any as S.Schema<DomainMetadataRequest>;
export interface DomainMetadataResponse {
  ItemCount?: number;
  ItemNamesSizeBytes?: number;
  AttributeNameCount?: number;
  AttributeNamesSizeBytes?: number;
  AttributeValueCount?: number;
  AttributeValuesSizeBytes?: number;
  Timestamp?: number;
}
export const DomainMetadataResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(
  () =>
    S.Struct({
      ItemCount: S.optional(S.Number),
      ItemNamesSizeBytes: S.optional(S.Number),
      AttributeNameCount: S.optional(S.Number),
      AttributeNamesSizeBytes: S.optional(S.Number),
      AttributeValueCount: S.optional(S.Number),
      AttributeValuesSizeBytes: S.optional(S.Number),
      Timestamp: S.optional(S.Number),
    }),
).annotate({
  identifier: "DomainMetadataResponse",
}) as any as S.Schema<DomainMetadataResponse>;

export interface ListDomainsRequest {
  MaxNumberOfDomains?: number;
  NextToken?: string;
}
export const ListDomainsRequest = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    MaxNumberOfDomains: S.optional(S.Number),
    NextToken: S.optional(S.String),
  }).pipe(
    T.all(
      ns,
      T.Http({ method: "POST", uri: "/" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListDomainsRequest",
}) as any as S.Schema<ListDomainsRequest>;
export type DomainNameList = string[];
export const DomainNameList = /*@__PURE__*/ /*#__PURE__*/ S.Array(S.String);
export interface ListDomainsResponse {
  DomainNames?: string[];
  NextToken?: string;
}
export const ListDomainsResponse = /*@__PURE__*/ /*#__PURE__*/ S.suspend(() =>
  S.Struct({
    // SimpleDB returns a flattened list of repeated <DomainName> elements
    DomainNames: S.optional(DomainNameList).pipe(
      T.XmlName("DomainName"),
      T.XmlFlattened(),
    ),
    NextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListDomainsResponse",
}) as any as S.Schema<ListDomainsResponse>;

//# Errors
export class NoSuchDomain extends S.TaggedErrorClass<NoSuchDomain>()(
  "NoSuchDomain",
  { message: S.optional(S.String), BoxUsage: S.optional(S.String) },
).pipe(C.withBadRequestError, C.withNotFoundError) {}
export class InvalidParameterValue extends S.TaggedErrorClass<InvalidParameterValue>()(
  "InvalidParameterValue",
  { message: S.optional(S.String), BoxUsage: S.optional(S.String) },
).pipe(C.withBadRequestError) {}
export class MissingParameter extends S.TaggedErrorClass<MissingParameter>()(
  "MissingParameter",
  { message: S.optional(S.String), BoxUsage: S.optional(S.String) },
).pipe(C.withBadRequestError) {}
export class NumberDomainsExceeded extends S.TaggedErrorClass<NumberDomainsExceeded>()(
  "NumberDomainsExceeded",
  { message: S.optional(S.String), BoxUsage: S.optional(S.String) },
).pipe(C.withQuotaError) {}
export class InvalidNextToken extends S.TaggedErrorClass<InvalidNextToken>()(
  "InvalidNextToken",
  { message: S.optional(S.String), BoxUsage: S.optional(S.String) },
).pipe(C.withBadRequestError) {}

//# Operations
export type CreateDomainError =
  | InvalidParameterValue
  | MissingParameter
  | NumberDomainsExceeded
  | CommonErrors;
/**
 * Creates a new SimpleDB domain. Idempotent — creating an existing domain
 * succeeds without error.
 */
export const createDomain: API.OperationMethod<
  CreateDomainRequest,
  CreateDomainResponse,
  CreateDomainError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateDomainRequest,
  output: CreateDomainResponse,
  errors: [InvalidParameterValue, MissingParameter, NumberDomainsExceeded],
  operationName: "CreateDomain",
}));
export type DeleteDomainError = MissingParameter | CommonErrors;
/**
 * Deletes a SimpleDB domain and all of its items. Idempotent — deleting a
 * missing domain succeeds without error.
 */
export const deleteDomain: API.OperationMethod<
  DeleteDomainRequest,
  DeleteDomainResponse,
  DeleteDomainError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteDomainRequest,
  output: DeleteDomainResponse,
  errors: [MissingParameter],
  operationName: "DeleteDomain",
}));
export type DomainMetadataError =
  | MissingParameter
  | NoSuchDomain
  | CommonErrors;
/**
 * Returns information about a SimpleDB domain (item count, sizes, timestamp).
 */
export const domainMetadata: API.OperationMethod<
  DomainMetadataRequest,
  DomainMetadataResponse,
  DomainMetadataError,
  Credentials | Region | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DomainMetadataRequest,
  output: DomainMetadataResponse,
  errors: [MissingParameter, NoSuchDomain],
  operationName: "DomainMetadata",
}));
export type ListDomainsError =
  | InvalidNextToken
  | InvalidParameterValue
  | CommonErrors;
/**
 * Lists all SimpleDB domains in the account/region. Paginated.
 */
export const listDomains: API.OperationMethod<
  ListDomainsRequest,
  ListDomainsResponse,
  ListDomainsError,
  Credentials | Region | HttpClient.HttpClient
> & {
  pages: (
    input: ListDomainsRequest,
  ) => stream.Stream<
    ListDomainsResponse,
    ListDomainsError,
    Credentials | Region | HttpClient.HttpClient
  >;
  items: (
    input: ListDomainsRequest,
  ) => stream.Stream<
    string,
    ListDomainsError,
    Credentials | Region | HttpClient.HttpClient
  >;
} = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListDomainsRequest,
  output: ListDomainsResponse,
  errors: [InvalidNextToken, InvalidParameterValue],
  operationName: "ListDomains",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "DomainNames",
    pageSize: "MaxNumberOfDomains",
  } as const,
}));
