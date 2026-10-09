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
const ns = /*@__PURE__*/ T.XmlNamespace("http://sdb.amazonaws.com/doc/2009-04-15/");
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "SimpleDB",
  serviceShapeName: "AmazonSimpleDB",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv2({ name: "sdb" });
const ver = /*@__PURE__*/ T.ServiceVersion("2009-04-15");
const proto = /*@__PURE__*/ T.AwsProtocolsAwsQuery();
const rules = /*@__PURE__*/ T.EndpointResolver((p) => {
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
      return err("Invalid Configuration: FIPS and custom endpoint are not supported");
    }
    if (UseDualStack === true) {
      return err("Invalid Configuration: Dualstack and custom endpoint are not supported");
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

export class AttributeDoesNotExist
  extends /*@__PURE__*/ S.TaggedError<AttributeDoesNotExist>()("AttributeDoesNotExist", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    BoxUsage: /*@__PURE__*/ S.optional(S.String),
  }).pipe(C.withNotFoundError) {}
export class DuplicateItemName
  extends /*@__PURE__*/ S.TaggedError<DuplicateItemName>()(
    "DuplicateItemName",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      BoxUsage: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidNextToken
  extends /*@__PURE__*/ S.TaggedError<InvalidNextToken>()(
    "InvalidNextToken",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      BoxUsage: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidNumberPredicates
  extends /*@__PURE__*/ S.TaggedError<InvalidNumberPredicates>()(
    "InvalidNumberPredicates",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      BoxUsage: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidNumberValueTests
  extends /*@__PURE__*/ S.TaggedError<InvalidNumberValueTests>()(
    "InvalidNumberValueTests",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      BoxUsage: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidParameterValue
  extends /*@__PURE__*/ S.TaggedError<InvalidParameterValue>()(
    "InvalidParameterValue",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      BoxUsage: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class InvalidQueryExpression
  extends /*@__PURE__*/ S.TaggedError<InvalidQueryExpression>()(
    "InvalidQueryExpression",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      BoxUsage: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class MissingParameter
  extends /*@__PURE__*/ S.TaggedError<MissingParameter>()(
    "MissingParameter",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      BoxUsage: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export class NoSuchDomain
  extends /*@__PURE__*/ S.TaggedError<NoSuchDomain>()(
    "NoSuchDomain",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      BoxUsage: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError, C.withNotFoundError) {}
export class NumberDomainAttributesExceeded
  extends /*@__PURE__*/ S.TaggedError<NumberDomainAttributesExceeded>()(
    "NumberDomainAttributesExceeded",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      BoxUsage: /*@__PURE__*/ S.optional(S.String),
    },
  ).pipe(C.withQuotaError) {}
export class NumberDomainBytesExceeded
  extends /*@__PURE__*/ S.TaggedError<NumberDomainBytesExceeded>()("NumberDomainBytesExceeded", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    BoxUsage: /*@__PURE__*/ S.optional(S.String),
  }).pipe(C.withQuotaError) {}
export class NumberDomainsExceeded
  extends /*@__PURE__*/ S.TaggedError<NumberDomainsExceeded>()("NumberDomainsExceeded", {
    message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
    BoxUsage: /*@__PURE__*/ S.optional(S.String),
  }).pipe(C.withQuotaError) {}
export class NumberItemAttributesExceeded
  extends /*@__PURE__*/ S.TaggedError<NumberItemAttributesExceeded>()(
    "NumberItemAttributesExceeded",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      BoxUsage: /*@__PURE__*/ S.optional(S.String),
    },
  ).pipe(C.withQuotaError) {}
export class NumberSubmittedAttributesExceeded
  extends /*@__PURE__*/ S.TaggedError<NumberSubmittedAttributesExceeded>()(
    "NumberSubmittedAttributesExceeded",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      BoxUsage: /*@__PURE__*/ S.optional(S.String),
    },
  ).pipe(C.withQuotaError) {}
export class NumberSubmittedItemsExceeded
  extends /*@__PURE__*/ S.TaggedError<NumberSubmittedItemsExceeded>()(
    "NumberSubmittedItemsExceeded",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      BoxUsage: /*@__PURE__*/ S.optional(S.String),
    },
  ).pipe(C.withQuotaError) {}
export class RequestTimeout
  extends /*@__PURE__*/ S.TaggedError<RequestTimeout>()(
    "RequestTimeout",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      BoxUsage: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(408),
  ).pipe(C.withTimeoutError) {}
export class TooManyRequestedAttributes
  extends /*@__PURE__*/ S.TaggedError<TooManyRequestedAttributes>()(
    "TooManyRequestedAttributes",
    {
      message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()),
      BoxUsage: /*@__PURE__*/ S.optional(S.String),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type DomainName = string;
export interface DeletableAttribute {
  Name: string;
  Value?: string;
}
const DeletableAttribute = /*@__PURE__*/ __L.at(__c0, 0) as any as S.Schema<DeletableAttribute>;
export type DeletableAttributeList = DeletableAttribute[];
const DeletableAttributeList = /*@__PURE__*/ __L.at(__c0, 1);
export interface DeletableItem {
  ItemName: string;
  Attributes?: DeletableAttribute[];
}
const DeletableItem = /*@__PURE__*/ __L.at(__c0, 2) as any as S.Schema<DeletableItem>;
export type DeletableItemList = DeletableItem[];
const DeletableItemList = /*@__PURE__*/ __L.at(__c0, 3);
export interface BatchDeleteAttributesRequest {
  DomainName: string;
  Items: DeletableItem[];
}
const BatchDeleteAttributesRequest = /*@__PURE__*/ __L.at(
  __c0,
  4,
) as any as S.Schema<BatchDeleteAttributesRequest>;
export interface BatchDeleteAttributesResponse {}
const BatchDeleteAttributesResponse = /*@__PURE__*/ __L.at(
  __c0,
  5,
) as any as S.Schema<BatchDeleteAttributesResponse>;
export interface ReplaceableAttribute {
  Name: string;
  Value: string;
  Replace?: boolean;
}
const ReplaceableAttribute = /*@__PURE__*/ __L.at(__c0, 6) as any as S.Schema<ReplaceableAttribute>;
export type ReplaceableAttributeList = ReplaceableAttribute[];
const ReplaceableAttributeList = /*@__PURE__*/ __L.at(__c0, 7);
export interface ReplaceableItem {
  ItemName: string;
  Attributes: ReplaceableAttribute[];
}
const ReplaceableItem = /*@__PURE__*/ __L.at(__c1, 0) as any as S.Schema<ReplaceableItem>;
export type ReplaceableItemList = ReplaceableItem[];
const ReplaceableItemList = /*@__PURE__*/ __L.at(__c1, 1);
export interface BatchPutAttributesRequest {
  DomainName: string;
  Items: ReplaceableItem[];
}
const BatchPutAttributesRequest = /*@__PURE__*/ __L.at(
  __c1,
  2,
) as any as S.Schema<BatchPutAttributesRequest>;
export interface BatchPutAttributesResponse {}
const BatchPutAttributesResponse = /*@__PURE__*/ __L.at(
  __c1,
  3,
) as any as S.Schema<BatchPutAttributesResponse>;
export interface CreateDomainRequest {
  DomainName: string;
}
const CreateDomainRequest = /*@__PURE__*/ __L.at(__c1, 4) as any as S.Schema<CreateDomainRequest>;
export interface CreateDomainResponse {}
const CreateDomainResponse = /*@__PURE__*/ __L.at(__c1, 5) as any as S.Schema<CreateDomainResponse>;
export interface UpdateCondition {
  Name?: string;
  Value?: string;
  Exists?: boolean;
}
const UpdateCondition = /*@__PURE__*/ __L.at(__c1, 6) as any as S.Schema<UpdateCondition>;
export interface DeleteAttributesRequest {
  DomainName: string;
  ItemName: string;
  Attributes?: DeletableAttribute[];
  Expected?: UpdateCondition;
}
const DeleteAttributesRequest = /*@__PURE__*/ __L.at(
  __c1,
  7,
) as any as S.Schema<DeleteAttributesRequest>;
export interface DeleteAttributesResponse {}
const DeleteAttributesResponse = /*@__PURE__*/ __L.at(
  __c2,
  0,
) as any as S.Schema<DeleteAttributesResponse>;
export interface DeleteDomainRequest {
  DomainName: string;
}
const DeleteDomainRequest = /*@__PURE__*/ __L.at(__c2, 1) as any as S.Schema<DeleteDomainRequest>;
export interface DeleteDomainResponse {}
const DeleteDomainResponse = /*@__PURE__*/ __L.at(__c2, 2) as any as S.Schema<DeleteDomainResponse>;
export interface DomainMetadataRequest {
  DomainName: string;
}
const DomainMetadataRequest = /*@__PURE__*/ __L.at(
  __c2,
  3,
) as any as S.Schema<DomainMetadataRequest>;
export interface DomainMetadataResponse {
  ItemCount?: number;
  ItemNamesSizeBytes?: number;
  AttributeNameCount?: number;
  AttributeNamesSizeBytes?: number;
  AttributeValueCount?: number;
  AttributeValuesSizeBytes?: number;
  Timestamp?: number;
}
const DomainMetadataResponse = /*@__PURE__*/ __L.at(
  __c2,
  4,
) as any as S.Schema<DomainMetadataResponse>;
export type AttributeNameList = string[];
const AttributeNameList = /*@__PURE__*/ __L.at(__c2, 5);
export interface GetAttributesRequest {
  DomainName: string;
  ItemName: string;
  AttributeNames?: string[];
  ConsistentRead?: boolean;
}
const GetAttributesRequest = /*@__PURE__*/ __L.at(__c2, 6) as any as S.Schema<GetAttributesRequest>;
export interface Attribute {
  Name: string;
  AlternateNameEncoding?: string;
  Value: string;
  AlternateValueEncoding?: string;
}
const Attribute = /*@__PURE__*/ __L.at(__c2, 7) as any as S.Schema<Attribute>;
export type AttributeList = Attribute[];
const AttributeList = /*@__PURE__*/ __L.at(__c3, 0);
export interface GetAttributesResponse {
  Attributes?: Attribute[];
}
const GetAttributesResponse = /*@__PURE__*/ __L.at(
  __c3,
  1,
) as any as S.Schema<GetAttributesResponse>;
export interface ListDomainsRequest {
  MaxNumberOfDomains?: number;
  NextToken?: string;
}
const ListDomainsRequest = /*@__PURE__*/ __L.at(__c3, 2) as any as S.Schema<ListDomainsRequest>;
export type DomainNameList = string[];
const DomainNameList = /*@__PURE__*/ __L.at(__c3, 3);
export interface ListDomainsResponse {
  DomainNames?: string[];
  NextToken?: string;
}
const ListDomainsResponse = /*@__PURE__*/ __L.at(__c3, 4) as any as S.Schema<ListDomainsResponse>;
export interface PutAttributesRequest {
  DomainName: string;
  ItemName: string;
  Attributes: ReplaceableAttribute[];
  Expected?: UpdateCondition;
}
const PutAttributesRequest = /*@__PURE__*/ __L.at(__c3, 5) as any as S.Schema<PutAttributesRequest>;
export interface PutAttributesResponse {}
const PutAttributesResponse = /*@__PURE__*/ __L.at(
  __c3,
  6,
) as any as S.Schema<PutAttributesResponse>;
export interface SelectRequest {
  SelectExpression: string;
  NextToken?: string;
  ConsistentRead?: boolean;
}
const SelectRequest = /*@__PURE__*/ __L.at(__c3, 7) as any as S.Schema<SelectRequest>;
export interface Item {
  Name: string;
  AlternateNameEncoding?: string;
  Attributes?: Attribute[];
}
const Item = /*@__PURE__*/ __L.at(__c4, 0) as any as S.Schema<Item>;
export type ItemList = Item[];
const ItemList = /*@__PURE__*/ __L.at(__c4, 1);
export interface SelectResponse {
  Items?: Item[];
  NextToken?: string;
}
const SelectResponse = /*@__PURE__*/ __L.at(__c4, 2) as any as S.Schema<SelectResponse>;
export type BatchDeleteAttributesError = CommonErrors;
/**
 * Deletes attributes (or whole items) on up to 25 items in a single call. Idempotent -- missing items/attributes are not an error.
 */
export const batchDeleteAttributes: API.OperationMethod<
  BatchDeleteAttributesRequest,
  BatchDeleteAttributesResponse,
  BatchDeleteAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchDeleteAttributesRequest,
  output: BatchDeleteAttributesResponse,
  errors: [],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchDeleteAttributes",
}));

export type BatchPutAttributesError =
  | DuplicateItemName
  | InvalidParameterValue
  | MissingParameter
  | NoSuchDomain
  | NumberDomainAttributesExceeded
  | NumberDomainBytesExceeded
  | NumberItemAttributesExceeded
  | NumberSubmittedAttributesExceeded
  | NumberSubmittedItemsExceeded
  | CommonErrors;
/**
 * Puts attributes on up to 25 items in a single call.
 */
export const batchPutAttributes: API.OperationMethod<
  BatchPutAttributesRequest,
  BatchPutAttributesResponse,
  BatchPutAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchPutAttributesRequest,
  output: BatchPutAttributesResponse,
  errors: [
    DuplicateItemName,
    InvalidParameterValue,
    MissingParameter,
    NoSuchDomain,
    NumberDomainAttributesExceeded,
    NumberDomainBytesExceeded,
    NumberItemAttributesExceeded,
    NumberSubmittedAttributesExceeded,
    NumberSubmittedItemsExceeded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchPutAttributes",
}));

export type CreateDomainError =
  | InvalidParameterValue
  | MissingParameter
  | NumberDomainsExceeded
  | CommonErrors;
/**
 * Creates a new SimpleDB domain. Idempotent -- creating an existing domain succeeds without error.
 */
export const createDomain: API.OperationMethod<
  CreateDomainRequest,
  CreateDomainResponse,
  CreateDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateDomainRequest,
  output: CreateDomainResponse,
  errors: [InvalidParameterValue, MissingParameter, NumberDomainsExceeded],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "CreateDomain",
}));

export type DeleteAttributesError =
  | AttributeDoesNotExist
  | InvalidParameterValue
  | MissingParameter
  | NoSuchDomain
  | CommonErrors;
/**
 * Deletes one or more attributes of a SimpleDB item -- or the whole item when no attributes are named. Idempotent: deleting a missing attribute/item succeeds.
 */
export const deleteAttributes: API.OperationMethod<
  DeleteAttributesRequest,
  DeleteAttributesResponse,
  DeleteAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteAttributesRequest,
  output: DeleteAttributesResponse,
  errors: [AttributeDoesNotExist, InvalidParameterValue, MissingParameter, NoSuchDomain],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteAttributes",
}));

export type DeleteDomainError = MissingParameter | CommonErrors;
/**
 * Deletes a SimpleDB domain and all of its items. Idempotent -- deleting a missing domain succeeds without error.
 */
export const deleteDomain: API.OperationMethod<
  DeleteDomainRequest,
  DeleteDomainResponse,
  DeleteDomainError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteDomainRequest,
  output: DeleteDomainResponse,
  errors: [MissingParameter],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DeleteDomain",
}));

export type DomainMetadataError = MissingParameter | NoSuchDomain | CommonErrors;
/**
 * Returns information about a SimpleDB domain (item count, sizes, timestamp).
 */
export const domainMetadata: API.OperationMethod<
  DomainMetadataRequest,
  DomainMetadataResponse,
  DomainMetadataError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DomainMetadataRequest,
  output: DomainMetadataResponse,
  errors: [MissingParameter, NoSuchDomain],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "DomainMetadata",
}));

export type GetAttributesError =
  | InvalidParameterValue
  | MissingParameter
  | NoSuchDomain
  | CommonErrors;
/**
 * Returns all (or the requested subset of) attributes of a SimpleDB item. Reads are eventually consistent unless `ConsistentRead` is set.
 */
export const getAttributes: API.OperationMethod<
  GetAttributesRequest,
  GetAttributesResponse,
  GetAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAttributesRequest,
  output: GetAttributesResponse,
  errors: [InvalidParameterValue, MissingParameter, NoSuchDomain],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "GetAttributes",
}));

export type ListDomainsError = InvalidNextToken | InvalidParameterValue | CommonErrors;
/**
 * Lists all SimpleDB domains in the account/region. Paginated.
 */
export const listDomains: API.PaginatedOperationMethod<
  ListDomainsRequest,
  ListDomainsResponse,
  ListDomainsError,
  Credentials | HttpClient.HttpClient,
  string
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDomainsRequest,
  output: ListDomainsResponse,
  errors: [InvalidNextToken, InvalidParameterValue],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDomains",
  pagination: {
    inputToken: "NextToken",
    outputToken: "NextToken",
    items: "DomainNames",
    pageSize: "MaxNumberOfDomains",
  } as const,
})) as any;

export type PutAttributesError =
  | AttributeDoesNotExist
  | InvalidParameterValue
  | MissingParameter
  | NoSuchDomain
  | NumberDomainAttributesExceeded
  | NumberDomainBytesExceeded
  | NumberItemAttributesExceeded
  | CommonErrors;
/**
 * Creates or replaces attributes of a SimpleDB item. With `Replace: true` an attribute's existing values are overwritten; otherwise values accumulate.
 */
export const putAttributes: API.OperationMethod<
  PutAttributesRequest,
  PutAttributesResponse,
  PutAttributesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PutAttributesRequest,
  output: PutAttributesResponse,
  errors: [
    AttributeDoesNotExist,
    InvalidParameterValue,
    MissingParameter,
    NoSuchDomain,
    NumberDomainAttributesExceeded,
    NumberDomainBytesExceeded,
    NumberItemAttributesExceeded,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "PutAttributes",
}));

export type SelectError =
  | InvalidNextToken
  | InvalidNumberPredicates
  | InvalidNumberValueTests
  | InvalidParameterValue
  | InvalidQueryExpression
  | MissingParameter
  | NoSuchDomain
  | RequestTimeout
  | TooManyRequestedAttributes
  | CommonErrors;
/**
 * Runs a SimpleDB select expression (`select output_list from domain [where ...]`). Paginated via `NextToken`.
 */
export const select: API.PaginatedOperationMethod<
  SelectRequest,
  SelectResponse,
  SelectError,
  Credentials | HttpClient.HttpClient,
  Item
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SelectRequest,
  output: SelectResponse,
  errors: [
    InvalidNextToken,
    InvalidNumberPredicates,
    InvalidNumberValueTests,
    InvalidParameterValue,
    InvalidQueryExpression,
    MissingParameter,
    NoSuchDomain,
    RequestTimeout,
    TooManyRequestedAttributes,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "Select",
  pagination: { inputToken: "NextToken", outputToken: "NextToken", items: "Items" } as const,
})) as any;

// Schema builders: each runs one schema initializer, on that schema's first use.
function __c0(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({ Name: S.String, Value: S.optional(S.String) })).annotate({
        identifier: "DeletableAttribute",
      });
    case 1:
      return S.Array(DeletableAttribute);
    case 2:
      return S.suspend(() =>
        S.Struct({
          ItemName: S.String,
          Attributes: S.optional(DeletableAttributeList).pipe(
            T.XmlName("Attribute"),
            T.XmlFlattened(),
          ),
        }),
      ).annotate({ identifier: "DeletableItem" });
    case 3:
      return S.Array(DeletableItem);
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          Items: DeletableItemList.pipe(T.XmlName("Item"), T.XmlFlattened()),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchDeleteAttributesRequest",
      });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "BatchDeleteAttributesResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({ Name: S.String, Value: S.String, Replace: S.optional(S.Boolean) }),
      ).annotate({ identifier: "ReplaceableAttribute" });
    case 7:
      return S.Array(ReplaceableAttribute);
  }
}
function __c1(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          ItemName: S.String,
          Attributes: ReplaceableAttributeList.pipe(T.XmlName("Attribute"), T.XmlFlattened()),
        }),
      ).annotate({ identifier: "ReplaceableItem" });
    case 1:
      return S.Array(ReplaceableItem);
    case 2:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          Items: ReplaceableItemList.pipe(T.XmlName("Item"), T.XmlFlattened()),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({
        identifier: "BatchPutAttributesRequest",
      });
    case 3:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "BatchPutAttributesResponse",
      });
    case 4:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "CreateDomainRequest" });
    case 5:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "CreateDomainResponse",
      });
    case 6:
      return S.suspend(() =>
        S.Struct({
          Name: S.optional(S.String),
          Value: S.optional(S.String),
          Exists: S.optional(S.Boolean),
        }),
      ).annotate({ identifier: "UpdateCondition" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          ItemName: S.String,
          Attributes: S.optional(DeletableAttributeList).pipe(
            T.XmlName("Attribute"),
            T.XmlFlattened(),
          ),
          Expected: S.optional(UpdateCondition),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "DeleteAttributesRequest" });
  }
}
function __c2(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteAttributesResponse",
      });
    case 1:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DeleteDomainRequest" });
    case 2:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "DeleteDomainResponse",
      });
    case 3:
      return S.suspend(() =>
        S.Struct({ DomainName: S.String }).pipe(
          T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules),
        ),
      ).annotate({ identifier: "DomainMetadataRequest" });
    case 4:
      return S.suspend(() =>
        S.Struct({
          ItemCount: S.optional(S.Number),
          ItemNamesSizeBytes: S.optional(S.Number),
          AttributeNameCount: S.optional(S.Number),
          AttributeNamesSizeBytes: S.optional(S.Number),
          AttributeValueCount: S.optional(S.Number),
          AttributeValuesSizeBytes: S.optional(S.Number),
          Timestamp: S.optional(S.Number),
        }).pipe(ns),
      ).annotate({ identifier: "DomainMetadataResponse" });
    case 5:
      return S.Array(S.String);
    case 6:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          ItemName: S.String,
          AttributeNames: S.optional(AttributeNameList).pipe(
            T.XmlName("AttributeName"),
            T.XmlFlattened(),
          ),
          ConsistentRead: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "GetAttributesRequest" });
    case 7:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          AlternateNameEncoding: S.optional(S.String),
          Value: S.String,
          AlternateValueEncoding: S.optional(S.String),
        }),
      ).annotate({ identifier: "Attribute" });
  }
}
function __c3(j: number): any {
  switch (j) {
    case 0:
      return S.Array(Attribute);
    case 1:
      return S.suspend(() =>
        S.Struct({
          Attributes: S.optional(AttributeList).pipe(T.XmlName("Attribute"), T.XmlFlattened()),
        }).pipe(ns),
      ).annotate({ identifier: "GetAttributesResponse" });
    case 2:
      return S.suspend(() =>
        S.Struct({
          MaxNumberOfDomains: S.optional(S.Number),
          NextToken: S.optional(S.String),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "ListDomainsRequest" });
    case 3:
      return S.Array(S.String);
    case 4:
      return S.suspend(() =>
        S.Struct({
          DomainNames: S.optional(DomainNameList).pipe(T.XmlName("DomainName"), T.XmlFlattened()),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "ListDomainsResponse" });
    case 5:
      return S.suspend(() =>
        S.Struct({
          DomainName: S.String,
          ItemName: S.String,
          Attributes: ReplaceableAttributeList.pipe(T.XmlName("Attribute"), T.XmlFlattened()),
          Expected: S.optional(UpdateCondition),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "PutAttributesRequest" });
    case 6:
      return S.suspend(() => S.Struct({}).pipe(ns)).annotate({
        identifier: "PutAttributesResponse",
      });
    case 7:
      return S.suspend(() =>
        S.Struct({
          SelectExpression: S.String,
          NextToken: S.optional(S.String),
          ConsistentRead: S.optional(S.Boolean),
        }).pipe(T.all(ns, T.Http({ method: "POST", uri: "/" }), svc, auth, proto, ver, rules)),
      ).annotate({ identifier: "SelectRequest" });
  }
}
function __c4(j: number): any {
  switch (j) {
    case 0:
      return S.suspend(() =>
        S.Struct({
          Name: S.String,
          AlternateNameEncoding: S.optional(S.String),
          Attributes: S.optional(AttributeList).pipe(T.XmlName("Attribute"), T.XmlFlattened()),
        }),
      ).annotate({ identifier: "Item" });
    case 1:
      return S.Array(Item);
    case 2:
      return S.suspend(() =>
        S.Struct({
          Items: S.optional(ItemList).pipe(T.XmlName("Item"), T.XmlFlattened()),
          NextToken: S.optional(S.String),
        }).pipe(ns),
      ).annotate({ identifier: "SelectResponse" });
  }
}
