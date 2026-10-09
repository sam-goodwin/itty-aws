import * as API from "@distilled.cloud/core/api";
import * as S from "@distilled.cloud/core/schema";
import * as HttpClient from "effect/http/HttpClient";
import * as redacted from "effect/Redacted";
import * as C from "../category.ts";
import type { Credentials } from "../credentials.ts";
import type { CommonErrors } from "../errors.ts";
import { AwsProtocol } from "../protocol.ts";
import { Retry } from "../retry.ts";
import { SensitiveString } from "../sensitive.ts";
import * as T from "../traits.ts";
const svc = /*@__PURE__*/ T.AwsApiService({
  sdkId: "Agent Registry",
  serviceShapeName: "AgentRegistry",
});
const auth = /*@__PURE__*/ T.AwsAuthSigv4({ name: "agent-registry" });
const ver = /*@__PURE__*/ T.ServiceVersion("2025-12-01");
const proto = /*@__PURE__*/ T.AwsProtocolsRestJson1();
const rules = /*@__PURE__*/ T.EndpointResolver((p) => {
  const { Region, Endpoint } = p;
  const e = (u: unknown, p = {}, h = {}): T.EndpointResolverResult => ({
    type: "endpoint" as const,
    endpoint: { url: u as string, properties: p, headers: h },
  });
  const err = (m: unknown): T.EndpointResolverResult => ({
    type: "error" as const,
    message: m as string,
  });
  if (Endpoint != null) {
    return e(Endpoint);
  }
  if (Region != null) {
    return e(`https://agent-registry.${Region}.api.aws`);
  }
  return err(
    "Unable to resolve an Agent Registry endpoint: Region was not set and no explicit Endpoint override was provided.",
  );
});

export class AccessDeniedException
  extends /*@__PURE__*/ S.TaggedError<AccessDeniedException>()(
    "AccessDeniedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(403),
  ).pipe(C.withAuthError) {}
export class InternalServerException
  extends /*@__PURE__*/ S.TaggedError<InternalServerException>()(
    "InternalServerException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(500),
  ).pipe(C.withServerError) {}
export class ResourceNotFoundException
  extends /*@__PURE__*/ S.TaggedError<ResourceNotFoundException>()(
    "ResourceNotFoundException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(404),
  ).pipe(C.withBadRequestError) {}
export class ThrottlingException
  extends /*@__PURE__*/ S.TaggedError<ThrottlingException>()(
    "ThrottlingException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(429),
  ).pipe(C.withThrottlingError) {}
export class UnauthorizedException
  extends /*@__PURE__*/ S.TaggedError<UnauthorizedException>()(
    "UnauthorizedException",
    { message: /*@__PURE__*/ S.optional(S.String).pipe(/*@__PURE__*/ T.ErrorMessage()) },
    /*@__PURE__*/ T.HttpError(401),
  ).pipe(C.withAuthError) {}
export class ValidationException
  extends /*@__PURE__*/ S.TaggedError<ValidationException>()(
    "ValidationException",
    {
      message: /*@__PURE__*/ S.String.pipe(/*@__PURE__*/ T.ErrorMessage()),
      reason: /*@__PURE__*/ S.suspend(() => ValidationExceptionReason).annotate({
        identifier: "ValidationExceptionReason",
      }),
      fieldList: /*@__PURE__*/ S.optional(
        /*@__PURE__*/ S.suspend(() => ValidationExceptionFieldList).annotate({
          identifier: "ValidationExceptionFieldList",
        }),
      ),
    },
    /*@__PURE__*/ T.HttpError(400),
  ).pipe(C.withBadRequestError) {}
export type RegistryIdentifier = string;
export type RecordIdentifier = string;
export type RegistryRecordIdList = string[];
const RegistryRecordIdList = /*@__PURE__*/ S.Array(S.String);
export interface RegistryRecordsEntry {
  registryId: string;
  recordIds: string[];
}
const RegistryRecordsEntry = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ registryId: S.String, recordIds: RegistryRecordIdList }),
).annotate({ identifier: "RegistryRecordsEntry" }) as any as S.Schema<RegistryRecordsEntry>;
export type RegistryRecordsEntryList = RegistryRecordsEntry[];
const RegistryRecordsEntryList = /*@__PURE__*/ S.Array(RegistryRecordsEntry);
export interface BatchGetDiscoverableRegistryRecordRequest {
  entries: RegistryRecordsEntry[];
}
const BatchGetDiscoverableRegistryRecordRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ entries: RegistryRecordsEntryList }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/discoverable-records-batch" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "BatchGetDiscoverableRegistryRecordRequest",
}) as any as S.Schema<BatchGetDiscoverableRegistryRecordRequest>;
export type RegistryArn = string;
export type RegistryRecordArn = string;
export type RegistryRecordId = string;
export type RegistryRecordName = string;
export type Description = string | redacted.Redacted<string>;
export type RegistryRecordDisplayName = string;
export type RecordType = "MCP" | "AGENT" | "CUSTOM" | "SKILL" | "GATEWAY" | (string & {});
const RecordType = S.String;

export type DescriptorData = string | redacted.Redacted<string>;
export type DataSchemaVersion = string;
export interface McpToolsDescriptor {
  data?: string | redacted.Redacted<string>;
  dataSchemaVersion?: string;
}
const McpToolsDescriptor = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ data: S.optional(SensitiveString), dataSchemaVersion: S.optional(S.String) }),
).annotate({ identifier: "McpToolsDescriptor" }) as any as S.Schema<McpToolsDescriptor>;
export interface McpServerAdditionalData {
  tools?: McpToolsDescriptor;
}
const McpServerAdditionalData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ tools: S.optional(McpToolsDescriptor) }),
).annotate({ identifier: "McpServerAdditionalData" }) as any as S.Schema<McpServerAdditionalData>;
export type DescriptorSourceUrl = string;
export interface DescriptorSourceFromUrl {
  url: string;
}
const DescriptorSourceFromUrl = /*@__PURE__*/ S.suspend(() => S.Struct({ url: S.String })).annotate(
  { identifier: "DescriptorSourceFromUrl" },
) as any as S.Schema<DescriptorSourceFromUrl>;
export interface DescriptorSource {
  fromUrl?: DescriptorSourceFromUrl;
}
const DescriptorSource = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ fromUrl: S.optional(DescriptorSourceFromUrl) }),
).annotate({ identifier: "DescriptorSource" }) as any as S.Schema<DescriptorSource>;
export interface McpServerDescriptor {
  data?: string | redacted.Redacted<string>;
  dataSchemaVersion?: string;
  additionalData?: McpServerAdditionalData;
  source?: DescriptorSource;
}
const McpServerDescriptor = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    data: S.optional(SensitiveString),
    dataSchemaVersion: S.optional(S.String),
    additionalData: S.optional(McpServerAdditionalData),
    source: S.optional(DescriptorSource),
  }),
).annotate({ identifier: "McpServerDescriptor" }) as any as S.Schema<McpServerDescriptor>;
export interface A2aAgentCardDescriptor {
  data?: string | redacted.Redacted<string>;
  dataSchemaVersion?: string;
  source?: DescriptorSource;
}
const A2aAgentCardDescriptor = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    data: S.optional(SensitiveString),
    dataSchemaVersion: S.optional(S.String),
    source: S.optional(DescriptorSource),
  }),
).annotate({ identifier: "A2aAgentCardDescriptor" }) as any as S.Schema<A2aAgentCardDescriptor>;
export interface AgentSkillsMdDescriptor {
  data?: string | redacted.Redacted<string>;
  dataSchemaVersion?: string;
  source?: DescriptorSource;
}
const AgentSkillsMdDescriptor = A2aAgentCardDescriptor as any as S.Schema<AgentSkillsMdDescriptor>;
export interface AgentSkillsAdditionalData {
  skillMd?: AgentSkillsMdDescriptor;
}
const AgentSkillsAdditionalData = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ skillMd: S.optional(AgentSkillsMdDescriptor) }),
).annotate({
  identifier: "AgentSkillsAdditionalData",
}) as any as S.Schema<AgentSkillsAdditionalData>;
export interface AgentSkillsDefinitionDescriptor {
  data?: string | redacted.Redacted<string>;
  dataSchemaVersion?: string;
  additionalData?: AgentSkillsAdditionalData;
}
const AgentSkillsDefinitionDescriptor = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    data: S.optional(SensitiveString),
    dataSchemaVersion: S.optional(S.String),
    additionalData: S.optional(AgentSkillsAdditionalData),
  }),
).annotate({
  identifier: "AgentSkillsDefinitionDescriptor",
}) as any as S.Schema<AgentSkillsDefinitionDescriptor>;
export interface CustomDescriptor {
  data?: string | redacted.Redacted<string>;
}
const CustomDescriptor = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ data: S.optional(SensitiveString) }),
).annotate({ identifier: "CustomDescriptor" }) as any as S.Schema<CustomDescriptor>;
export interface HttpDescriptor {
  source?: DescriptorSource;
}
const HttpDescriptor = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ source: S.optional(DescriptorSource) }),
).annotate({ identifier: "HttpDescriptor" }) as any as S.Schema<HttpDescriptor>;
export interface AgUiDescriptor {
  source?: DescriptorSource;
}
const AgUiDescriptor = HttpDescriptor as any as S.Schema<AgUiDescriptor>;
export interface Descriptors {
  mcpServer?: McpServerDescriptor;
  a2aAgentCard?: A2aAgentCardDescriptor;
  agentSkillsDefinition?: AgentSkillsDefinitionDescriptor;
  custom?: CustomDescriptor;
  http?: HttpDescriptor;
  agui?: AgUiDescriptor;
}
const Descriptors = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    mcpServer: S.optional(McpServerDescriptor),
    a2aAgentCard: S.optional(A2aAgentCardDescriptor),
    agentSkillsDefinition: S.optional(AgentSkillsDefinitionDescriptor),
    custom: S.optional(CustomDescriptor),
    http: S.optional(HttpDescriptor),
    agui: S.optional(AgUiDescriptor),
  }),
).annotate({ identifier: "Descriptors" }) as any as S.Schema<Descriptors>;
export type RegistryRecordVersion = string;
export type RegistryRecordStatus =
  | "DRAFT"
  | "PENDING_APPROVAL"
  | "APPROVED"
  | "REJECTED"
  | "DEPRECATED"
  | "CREATING"
  | "UPDATING"
  | "CREATE_FAILED"
  | "UPDATE_FAILED"
  | (string & {});
const RegistryRecordStatus = S.String;

export type CustomMetadataDocument = unknown;
export interface RegistryRecordSummary {
  registryArn: string;
  recordArn: string;
  recordId: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  displayName?: string;
  recordType: RecordType;
  descriptors: Descriptors;
  recordVersion: string;
  status: RegistryRecordStatus;
  createdAt: Date;
  updatedAt: Date;
  customMetadata?: any;
}
const RegistryRecordSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    registryArn: S.String,
    recordArn: S.String,
    recordId: S.String,
    name: S.String,
    description: S.optional(SensitiveString),
    displayName: S.optional(S.String),
    recordType: RecordType,
    descriptors: Descriptors,
    recordVersion: S.String,
    status: RegistryRecordStatus,
    createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    customMetadata: S.optional(S.Any),
  }),
).annotate({ identifier: "RegistryRecordSummary" }) as any as S.Schema<RegistryRecordSummary>;
export type RegistryRecordSummaryList = RegistryRecordSummary[];
const RegistryRecordSummaryList = /*@__PURE__*/ S.Array(RegistryRecordSummary);
export type BatchGetDiscoverableRegistryRecordErrorCode =
  | "RESOURCE_NOT_FOUND"
  | "ACCESS_DENIED"
  | "INTERNAL_ERROR"
  | (string & {});
const BatchGetDiscoverableRegistryRecordErrorCode = S.String;

export interface BatchGetDiscoverableRegistryRecordError_ {
  registryId: string;
  recordId: string;
  errorCode: BatchGetDiscoverableRegistryRecordErrorCode;
  message?: string;
}
const BatchGetDiscoverableRegistryRecordError_ = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    registryId: S.String,
    recordId: S.String,
    errorCode: BatchGetDiscoverableRegistryRecordErrorCode,
    message: S.optional(S.String),
  }),
).annotate({
  identifier: "BatchGetDiscoverableRegistryRecordError",
}) as any as S.Schema<BatchGetDiscoverableRegistryRecordError_>;
export type BatchGetDiscoverableRegistryRecordErrorList =
  BatchGetDiscoverableRegistryRecordError_[];
const BatchGetDiscoverableRegistryRecordErrorList = /*@__PURE__*/ S.Array(
  BatchGetDiscoverableRegistryRecordError_,
);
export interface BatchGetDiscoverableRegistryRecordResponse {
  registryRecords: RegistryRecordSummary[];
  errors: BatchGetDiscoverableRegistryRecordError_[];
}
const BatchGetDiscoverableRegistryRecordResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    registryRecords: RegistryRecordSummaryList,
    errors: BatchGetDiscoverableRegistryRecordErrorList,
  }),
).annotate({
  identifier: "BatchGetDiscoverableRegistryRecordResponse",
}) as any as S.Schema<BatchGetDiscoverableRegistryRecordResponse>;
export type RegistryRecordFilterName = "recordType" | "descriptorType" | (string & {});
const RegistryRecordFilterName = S.String;

export type FilterValue = string;
export type DiscoverableFilterValues = string[];
const DiscoverableFilterValues = RegistryRecordIdList as any as S.Schema<DiscoverableFilterValues>;
export interface RegistryRecordFilter {
  name: RegistryRecordFilterName;
  values: string[];
}
const RegistryRecordFilter = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ name: RegistryRecordFilterName, values: DiscoverableFilterValues }),
).annotate({ identifier: "RegistryRecordFilter" }) as any as S.Schema<RegistryRecordFilter>;
export type RegistryRecordFilterList = RegistryRecordFilter[];
const RegistryRecordFilterList = /*@__PURE__*/ S.Array(RegistryRecordFilter);
export interface ListDiscoverableRegistryRecordsRequest {
  registryId: string;
  maxResults?: number;
  nextToken?: string;
  filters?: RegistryRecordFilter[];
}
const ListDiscoverableRegistryRecordsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    registryId: S.String.pipe(T.HttpLabel("registryId")),
    maxResults: S.optional(S.Number),
    nextToken: S.optional(S.String),
    filters: S.optional(RegistryRecordFilterList),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/registries/{registryId}/discoverable-records-list" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "ListDiscoverableRegistryRecordsRequest",
}) as any as S.Schema<ListDiscoverableRegistryRecordsRequest>;
export type DescriptorTypeList = string[];
const DescriptorTypeList = RegistryRecordIdList as any as S.Schema<DescriptorTypeList>;
export interface DiscoverableRegistryRecordSummary {
  registryArn: string;
  recordArn: string;
  recordId: string;
  name: string;
  description?: string | redacted.Redacted<string>;
  displayName?: string;
  recordType: RecordType;
  recordVersion: string;
  status: RegistryRecordStatus;
  createdAt: Date;
  updatedAt: Date;
  descriptorTypes?: string[];
}
const DiscoverableRegistryRecordSummary = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    registryArn: S.String,
    recordArn: S.String,
    recordId: S.String,
    name: S.String,
    description: S.optional(SensitiveString),
    displayName: S.optional(S.String),
    recordType: RecordType,
    recordVersion: S.String,
    status: RegistryRecordStatus,
    createdAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    updatedAt: T.DateFromString.pipe(T.TimestampFormat("date-time")),
    descriptorTypes: S.optional(DescriptorTypeList),
  }),
).annotate({
  identifier: "DiscoverableRegistryRecordSummary",
}) as any as S.Schema<DiscoverableRegistryRecordSummary>;
export type DiscoverableRegistryRecordSummaryList = DiscoverableRegistryRecordSummary[];
const DiscoverableRegistryRecordSummaryList = /*@__PURE__*/ S.Array(
  DiscoverableRegistryRecordSummary,
);
export interface ListDiscoverableRegistryRecordsResponse {
  registryRecords: DiscoverableRegistryRecordSummary[];
  nextToken?: string;
}
const ListDiscoverableRegistryRecordsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    registryRecords: DiscoverableRegistryRecordSummaryList,
    nextToken: S.optional(S.String),
  }),
).annotate({
  identifier: "ListDiscoverableRegistryRecordsResponse",
}) as any as S.Schema<ListDiscoverableRegistryRecordsResponse>;
export type SearchQuery = string | redacted.Redacted<string>;
export type RegistryIdList = string[];
const RegistryIdList = RegistryRecordIdList as any as S.Schema<RegistryIdList>;
export type MetadataFilterExpression = unknown;
export interface SearchDiscoverableRegistryRecordsRequest {
  searchQuery: string | redacted.Redacted<string>;
  registryIds: string[];
  maxResults?: number;
  filters?: any;
}
const SearchDiscoverableRegistryRecordsRequest = /*@__PURE__*/ S.suspend(() =>
  S.Struct({
    searchQuery: SensitiveString,
    registryIds: RegistryIdList,
    maxResults: S.optional(S.Number),
    filters: S.optional(S.Any),
  }).pipe(
    T.all(
      T.Http({ method: "POST", uri: "/discoverable-records-search" }),
      svc,
      auth,
      proto,
      ver,
      rules,
    ),
  ),
).annotate({
  identifier: "SearchDiscoverableRegistryRecordsRequest",
}) as any as S.Schema<SearchDiscoverableRegistryRecordsRequest>;
export interface SearchDiscoverableRegistryRecordsResponse {
  registryRecords: RegistryRecordSummary[];
}
const SearchDiscoverableRegistryRecordsResponse = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ registryRecords: RegistryRecordSummaryList }),
).annotate({
  identifier: "SearchDiscoverableRegistryRecordsResponse",
}) as any as S.Schema<SearchDiscoverableRegistryRecordsResponse>;
export type NonBlankString = string;
export type ValidationExceptionReason =
  | "CannotParse"
  | "FieldValidationFailed"
  | "IdempotentParameterMismatchException"
  | "EventInOtherSession"
  | "ResourceConflict"
  | (string & {});
const ValidationExceptionReason = S.String;

export interface ValidationExceptionField {
  name: string;
  message: string;
}
const ValidationExceptionField = /*@__PURE__*/ S.suspend(() =>
  S.Struct({ name: S.String, message: S.String }),
).annotate({ identifier: "ValidationExceptionField" }) as any as S.Schema<ValidationExceptionField>;
export type ValidationExceptionFieldList = ValidationExceptionField[];
const ValidationExceptionFieldList = /*@__PURE__*/ S.Array(ValidationExceptionField);
export type BatchGetDiscoverableRegistryRecordError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Retrieves multiple discoverable registry records by ID from a single registry. Records that cannot be retrieved are reported individually in the `errors` list rather than failing the entire request.
 */
export const batchGetDiscoverableRegistryRecord: API.OperationMethod<
  BatchGetDiscoverableRegistryRecordRequest,
  BatchGetDiscoverableRegistryRecordResponse,
  BatchGetDiscoverableRegistryRecordError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BatchGetDiscoverableRegistryRecordRequest,
  output: BatchGetDiscoverableRegistryRecordResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "BatchGetDiscoverableRegistryRecord",
}));

export type ListDiscoverableRegistryRecordsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Lists the discoverable registry records in a registry. You can optionally filter and paginate the results.
 */
export const listDiscoverableRegistryRecords: API.PaginatedOperationMethod<
  ListDiscoverableRegistryRecordsRequest,
  ListDiscoverableRegistryRecordsResponse,
  ListDiscoverableRegistryRecordsError,
  Credentials | HttpClient.HttpClient,
  DiscoverableRegistryRecordSummary
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListDiscoverableRegistryRecordsRequest,
  output: ListDiscoverableRegistryRecordsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "ListDiscoverableRegistryRecords",
  pagination: {
    inputToken: "nextToken",
    outputToken: "nextToken",
    items: "registryRecords",
    pageSize: "maxResults",
  } as const,
})) as any;

export type SearchDiscoverableRegistryRecordsError =
  | AccessDeniedException
  | InternalServerException
  | ResourceNotFoundException
  | ThrottlingException
  | UnauthorizedException
  | ValidationException
  | CommonErrors;
/**
 * Searches the discoverable registry records in a registry using a natural language query. Returns metadata for the matching records ordered by relevance.
 */
export const searchDiscoverableRegistryRecords: API.OperationMethod<
  SearchDiscoverableRegistryRecordsRequest,
  SearchDiscoverableRegistryRecordsResponse,
  SearchDiscoverableRegistryRecordsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SearchDiscoverableRegistryRecordsRequest,
  output: SearchDiscoverableRegistryRecordsResponse,
  errors: [
    AccessDeniedException,
    InternalServerException,
    ResourceNotFoundException,
    ThrottlingException,
    UnauthorizedException,
    ValidationException,
  ],
  protocol: AwsProtocol,
  retry: Retry,
  operationName: "SearchDiscoverableRegistryRecords",
}));
