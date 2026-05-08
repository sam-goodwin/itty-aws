// ==========================================================================
// Data Lineage API (datalineage v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "datalineage",
  version: "v1",
  rootUrl: "https://datalineage.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleCloudDatacatalogLineageV1EntityReference {
  /** Optional. Field path within the entity. Each nesting level should be a separate value in the repeated field. The order matters. Must be empty for asset level lineage For example to address "salary.net" subfield where "salary" is a column and "net" is a proto field two values in the `field` should be reported, the first is "salary" and the second is "net". Each field length is limited to 500 characters. Maximum supported nesting level is 20. */
  field?: ReadonlyArray<string>;
  /** Required. [Fully Qualified Name (FQN)](https://cloud.google.com/dataplex/docs/fully-qualified-names) of the entity. */
  fullyQualifiedName?: string;
}

export const GoogleCloudDatacatalogLineageV1EntityReference: Schema.Schema<GoogleCloudDatacatalogLineageV1EntityReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    field: Schema.optional(Schema.Array(Schema.String)),
    fullyQualifiedName: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogLineageV1EntityReference" });

export interface GoogleCloudDatacatalogLineageV1LinkDependencyInfo {
  /** The type of dependency. */
  dependencyType?:
    | "DEPENDENCY_TYPE_UNSPECIFIED"
    | "EXACT_COPY"
    | "OTHER"
    | (string & {});
}

export const GoogleCloudDatacatalogLineageV1LinkDependencyInfo: Schema.Schema<GoogleCloudDatacatalogLineageV1LinkDependencyInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dependencyType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogLineageV1LinkDependencyInfo",
  });

export interface GoogleCloudDatacatalogLineageV1Link {
  /** The pointer to the entity that is the **target** of this link. */
  target?: GoogleCloudDatacatalogLineageV1EntityReference;
  /** The pointer to the entity that is the **source** of this link. */
  source?: GoogleCloudDatacatalogLineageV1EntityReference;
  /** The end of the last event establishing this link. */
  endTime?: string;
  /** The start of the first event establishing this link. */
  startTime?: string;
  /** Output only. Immutable. The name of the link. Format: `projects/{project}/locations/{location}/links/{link}`. */
  name?: string;
  /** Optional. The dependency info of the link (applies only to column level links). */
  dependencyInfo?: ReadonlyArray<GoogleCloudDatacatalogLineageV1LinkDependencyInfo>;
}

export const GoogleCloudDatacatalogLineageV1Link: Schema.Schema<GoogleCloudDatacatalogLineageV1Link> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    target: Schema.optional(GoogleCloudDatacatalogLineageV1EntityReference),
    source: Schema.optional(GoogleCloudDatacatalogLineageV1EntityReference),
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    dependencyInfo: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogLineageV1LinkDependencyInfo),
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogLineageV1Link" });

export interface GoogleCloudDatacatalogLineageV1SearchLinksResponse {
  /** The list of links for a given asset. Can be empty if the asset has no relations of requested type (source or target). */
  links?: ReadonlyArray<GoogleCloudDatacatalogLineageV1Link>;
  /** The token to specify as `page_token` in the subsequent call to get the next page. Omitted if there are no more pages in the response. */
  nextPageToken?: string;
}

export const GoogleCloudDatacatalogLineageV1SearchLinksResponse: Schema.Schema<GoogleCloudDatacatalogLineageV1SearchLinksResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    links: Schema.optional(Schema.Array(GoogleCloudDatacatalogLineageV1Link)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogLineageV1SearchLinksResponse",
  });

export interface GoogleCloudDatacatalogLineageV1DependencyInfo {
  /** Required. Type of dependency. */
  dependencyType?:
    | "DEPENDENCY_TYPE_UNSPECIFIED"
    | "EXACT_COPY"
    | "OTHER"
    | (string & {});
}

export const GoogleCloudDatacatalogLineageV1DependencyInfo: Schema.Schema<GoogleCloudDatacatalogLineageV1DependencyInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dependencyType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogLineageV1DependencyInfo" });

export interface GoogleCloudDatacatalogLineageV1EventLink {
  /** Required. Reference to the source entity */
  source?: GoogleCloudDatacatalogLineageV1EntityReference;
  /** Optional. Describes how the target depends on the source. */
  dependencyInfo?: GoogleCloudDatacatalogLineageV1DependencyInfo;
  /** Required. Reference to the target entity */
  target?: GoogleCloudDatacatalogLineageV1EntityReference;
}

export const GoogleCloudDatacatalogLineageV1EventLink: Schema.Schema<GoogleCloudDatacatalogLineageV1EventLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(GoogleCloudDatacatalogLineageV1EntityReference),
    dependencyInfo: Schema.optional(
      GoogleCloudDatacatalogLineageV1DependencyInfo,
    ),
    target: Schema.optional(GoogleCloudDatacatalogLineageV1EntityReference),
  }).annotate({ identifier: "GoogleCloudDatacatalogLineageV1EventLink" });

export interface GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestionIngestionRuleIntegrationSelector {
  /** Required. Integration to which the rule applies. This field can be used to specify the integration against which the ingestion rule should be applied. */
  integration?:
    | "INTEGRATION_UNSPECIFIED"
    | "DATAPROC"
    | "LOOKER_CORE"
    | (string & {});
}

export const GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestionIngestionRuleIntegrationSelector: Schema.Schema<GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestionIngestionRuleIntegrationSelector> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    integration: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestionIngestionRuleIntegrationSelector",
  });

export interface GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestionIngestionRuleLineageEnablement {
  /** Optional. If true, ingestion of lineage should be enabled. If false, it should be disabled. If unspecified, the system default value is used. */
  enabled?: boolean;
}

export const GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestionIngestionRuleLineageEnablement: Schema.Schema<GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestionIngestionRuleLineageEnablement> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    enabled: Schema.optional(Schema.Boolean),
  }).annotate({
    identifier:
      "GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestionIngestionRuleLineageEnablement",
  });

export interface GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestionIngestionRule {
  /** Required. Integration selector of the rule. The rule is only applied to the Integration selected by the selector. */
  integrationSelector?: GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestionIngestionRuleIntegrationSelector;
  /** Required. Lineage enablement configuration. Defines configurations for the ingestion of lineage for the resource and its children. If unspecified, the ingestion will be enabled only if it was configured in the resource's parent. */
  lineageEnablement?: GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestionIngestionRuleLineageEnablement;
}

export const GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestionIngestionRule: Schema.Schema<GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestionIngestionRule> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    integrationSelector: Schema.optional(
      GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestionIngestionRuleIntegrationSelector,
    ),
    lineageEnablement: Schema.optional(
      GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestionIngestionRuleLineageEnablement,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestionIngestionRule",
  });

export interface GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestion {
  /** Optional. List of rules for Data Lineage ingestion. */
  rules?: ReadonlyArray<GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestionIngestionRule>;
}

export const GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestion: Schema.Schema<GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rules: Schema.optional(
      Schema.Array(
        GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestionIngestionRule,
      ),
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestion",
  });

export interface GoogleCloudDatacatalogLineageConfigmanagementV1Config {
  /** Identifier. The resource name of the config. Format: `organizations/{organization_id}/locations/global/config` `folders/{folder_id}/locations/global/config` `projects/{project_id}/locations/global/config` `projects/{project_number}/locations/global/config` */
  name?: string;
  /** Optional. Ingestion rule for Data Lineage ingestion. */
  ingestion?: GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestion;
  /** Optional. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a config from overwriting each other. It is required that systems make use of the `etag` in the read-modify-write cycle to perform config updates in order to avoid race conditions: An `etag` is returned in the response to `GetConfig`, and systems are expected to put that etag in the request to `UpdateConfig` to ensure that their change will be applied to the same version of the config. If an `etag` is not provided in the call to `UpdateConfig`, then the existing config, if any, will be overwritten. */
  etag?: string;
}

export const GoogleCloudDatacatalogLineageConfigmanagementV1Config: Schema.Schema<GoogleCloudDatacatalogLineageConfigmanagementV1Config> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    ingestion: Schema.optional(
      GoogleCloudDatacatalogLineageConfigmanagementV1ConfigIngestion,
    ),
    etag: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogLineageConfigmanagementV1Config",
  });

export interface GoogleCloudDatacatalogLineageV1Origin {
  /** Type of the source. Use of a source_type other than `CUSTOM` for process creation or updating is highly discouraged. It might be restricted in the future without notice. There will be increase in cost if you use any of the source types other than `CUSTOM`. */
  sourceType?:
    | "SOURCE_TYPE_UNSPECIFIED"
    | "CUSTOM"
    | "BIGQUERY"
    | "DATA_FUSION"
    | "COMPOSER"
    | "LOOKER_STUDIO"
    | "DATAPROC"
    | "VERTEX_AI"
    | "DATAFLOW"
    | "LOOKER_CORE"
    | (string & {});
  /** If the source_type isn't CUSTOM, the value of this field should be a Google Cloud resource name of the system, which reports lineage. The project and location parts of the resource name must match the project and location of the lineage resource being created. Examples: - `{source_type: COMPOSER, name: "projects/foo/locations/us/environments/bar"}` - `{source_type: BIGQUERY, name: "projects/foo/locations/eu"}` - `{source_type: CUSTOM, name: "myCustomIntegration"}` */
  name?: string;
}

export const GoogleCloudDatacatalogLineageV1Origin: Schema.Schema<GoogleCloudDatacatalogLineageV1Origin> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sourceType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogLineageV1Origin" });

export interface GoogleCloudDatacatalogLineageV1Process {
  /** Immutable. The resource name of the lineage process. Format: `projects/{project}/locations/{location}/processes/{process}`. Can be specified or auto-assigned. {process} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.` */
  name?: string;
  /** Optional. The attributes of the process. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the process). Up to 100 attributes are allowed. */
  attributes?: Record<string, unknown>;
  /** Optional. A human-readable name you can set to display in a user interface. Must be not longer than 200 characters and only contain UTF-8 letters or numbers, spaces or characters like `_-:&.` */
  displayName?: string;
  /** Optional. The origin of this process and its runs and lineage events. */
  origin?: GoogleCloudDatacatalogLineageV1Origin;
}

export const GoogleCloudDatacatalogLineageV1Process: Schema.Schema<GoogleCloudDatacatalogLineageV1Process> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    attributes: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    displayName: Schema.optional(Schema.String),
    origin: Schema.optional(GoogleCloudDatacatalogLineageV1Origin),
  }).annotate({ identifier: "GoogleCloudDatacatalogLineageV1Process" });

export interface GoogleCloudDatacatalogLineageV1LineageLinkLineageProcess {
  /** Process that created the link. */
  process?: GoogleCloudDatacatalogLineageV1Process;
}

export const GoogleCloudDatacatalogLineageV1LineageLinkLineageProcess: Schema.Schema<GoogleCloudDatacatalogLineageV1LineageLinkLineageProcess> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    process: Schema.optional(GoogleCloudDatacatalogLineageV1Process),
  }).annotate({
    identifier: "GoogleCloudDatacatalogLineageV1LineageLinkLineageProcess",
  });

export interface GoogleCloudDatacatalogLineageV1OperationMetadata {
  /** Output only. The [relative name] (https://cloud.google.com//apis/design/resource_names#relative_resource_name) of the resource being operated on. */
  resource?: string;
  /** Output only. The timestamp of the operation submission to the server. */
  createTime?: string;
  /** Output only. The current operation state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "PENDING"
    | "RUNNING"
    | "SUCCEEDED"
    | "FAILED"
    | (string & {});
  /** Output only. The type of the operation being performed. */
  operationType?: "TYPE_UNSPECIFIED" | "DELETE" | "CREATE" | (string & {});
  /** Output only. The UUID of the resource being operated on. */
  resourceUuid?: string;
  /** Output only. The timestamp of the operation termination, regardless of its success. This field is unset if the operation is still ongoing. */
  endTime?: string;
}

export const GoogleCloudDatacatalogLineageV1OperationMetadata: Schema.Schema<GoogleCloudDatacatalogLineageV1OperationMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    resource: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    operationType: Schema.optional(Schema.String),
    resourceUuid: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogLineageV1OperationMetadata",
  });

export interface GoogleCloudDatacatalogLineageV1LineageEvent {
  /** Required. The beginning of the transformation which resulted in this lineage event. For streaming scenarios, it should be the beginning of the period from which the lineage is being reported. */
  startTime?: string;
  /** Optional. The end of the transformation which resulted in this lineage event. For streaming scenarios, it should be the end of the period from which the lineage is being reported. */
  endTime?: string;
  /** Optional. List of source-target pairs. Can't contain more than 100 tuples. */
  links?: ReadonlyArray<GoogleCloudDatacatalogLineageV1EventLink>;
  /** Immutable. The resource name of the lineage event. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}/lineageEvents/{lineage_event}`. Can be specified or auto-assigned. {lineage_event} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.` */
  name?: string;
}

export const GoogleCloudDatacatalogLineageV1LineageEvent: Schema.Schema<GoogleCloudDatacatalogLineageV1LineageEvent> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
    links: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogLineageV1EventLink),
    ),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogLineageV1LineageEvent" });

export interface GoogleCloudDatacatalogLineageV1ListLineageEventsResponse {
  /** The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
  /** Lineage events from the specified project and location. */
  lineageEvents?: ReadonlyArray<GoogleCloudDatacatalogLineageV1LineageEvent>;
}

export const GoogleCloudDatacatalogLineageV1ListLineageEventsResponse: Schema.Schema<GoogleCloudDatacatalogLineageV1ListLineageEventsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    lineageEvents: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogLineageV1LineageEvent),
    ),
  }).annotate({
    identifier: "GoogleCloudDatacatalogLineageV1ListLineageEventsResponse",
  });

export interface GoogleRpcStatus {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
}

export const GoogleRpcStatus: Schema.Schema<GoogleRpcStatus> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    message: Schema.optional(Schema.String),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
  }).annotate({ identifier: "GoogleRpcStatus" });

export interface GoogleCloudDatacatalogLineageV1ProcessOpenLineageRunEventResponse {
  /** Created run name. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}`. */
  run?: string;
  /** Created lineage event names. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}/lineageEvents/{lineage_event}`. */
  lineageEvents?: ReadonlyArray<string>;
  /** Created process name. Format: `projects/{project}/locations/{location}/processes/{process}`. */
  process?: string;
}

export const GoogleCloudDatacatalogLineageV1ProcessOpenLineageRunEventResponse: Schema.Schema<GoogleCloudDatacatalogLineageV1ProcessOpenLineageRunEventResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    run: Schema.optional(Schema.String),
    lineageEvents: Schema.optional(Schema.Array(Schema.String)),
    process: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDatacatalogLineageV1ProcessOpenLineageRunEventResponse",
  });

export interface GoogleCloudDatacatalogLineageV1MultipleEntityReference {
  /** Optional. The list of entities to search for links. The maximum number of entities is 20. */
  entities?: ReadonlyArray<GoogleCloudDatacatalogLineageV1EntityReference>;
}

export const GoogleCloudDatacatalogLineageV1MultipleEntityReference: Schema.Schema<GoogleCloudDatacatalogLineageV1MultipleEntityReference> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entities: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogLineageV1EntityReference),
    ),
  }).annotate({
    identifier: "GoogleCloudDatacatalogLineageV1MultipleEntityReference",
  });

export interface GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequestRootCriteria {
  /** Optional. The entities to initiate the search from. Entities can be specified by FQN only, or by FQN and field. To search by FQN and all available fields for that FQN, use the wildcard `*` as the field value. */
  entities?: GoogleCloudDatacatalogLineageV1MultipleEntityReference;
}

export const GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequestRootCriteria: Schema.Schema<GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequestRootCriteria> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entities: Schema.optional(
      GoogleCloudDatacatalogLineageV1MultipleEntityReference,
    ),
  }).annotate({
    identifier:
      "GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequestRootCriteria",
  });

export interface GoogleTypeInterval {
  /** Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. */
  startTime?: string;
  /** Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. */
  endTime?: string;
}

export const GoogleTypeInterval: Schema.Schema<GoogleTypeInterval> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleTypeInterval" });

export interface GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequestSearchFilters {
  /** Optional. Types of dependencies between entities to retrieve. If unspecified, all dependency types are returned. */
  dependencyTypes?: ReadonlyArray<
    "DEPENDENCY_TYPE_UNSPECIFIED" | "EXACT_COPY" | "OTHER" | (string & {})
  >;
  /** Optional. Entity set restriction. If unspecified, the method returns all entities. */
  entitySet?: "ENTITY_SET_UNSPECIFIED" | "ENTITIES" | (string & {});
  /** Optional. Time interval to search for lineage. If unspecified, all lineage is returned. Currently, at most one of `start_time` and `end_time` can be set. */
  timeRange?: GoogleTypeInterval;
}

export const GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequestSearchFilters: Schema.Schema<GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequestSearchFilters> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dependencyTypes: Schema.optional(Schema.Array(Schema.String)),
    entitySet: Schema.optional(Schema.String),
    timeRange: Schema.optional(GoogleTypeInterval),
  }).annotate({
    identifier:
      "GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequestSearchFilters",
  });

export interface GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequestSearchLimits {
  /** Optional. The maximum number of links to return in the response. The default value is 1_000 and the maximum value is 10_000. */
  maxResults?: number;
  /** Optional. The maximum number of processes to return per link. The default value is 0 and the maximum value is 100. If this value is non-zero, the response will contain process names for the links. To retrieve full process details in the response, include `links.processes.process` in the [FieldMask](https://developers.google.com/workspace/docs/api/how-tos/field-masks#read_with_a_field_mask). */
  maxProcessPerLink?: number;
  /** Optional. The maximum depth of the search. The default value is 5 and maximum value is 100. */
  maxDepth?: number;
}

export const GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequestSearchLimits: Schema.Schema<GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequestSearchLimits> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxResults: Schema.optional(Schema.Number),
    maxProcessPerLink: Schema.optional(Schema.Number),
    maxDepth: Schema.optional(Schema.Number),
  }).annotate({
    identifier:
      "GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequestSearchLimits",
  });

export interface GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequest {
  /** Required. Criteria for the root of the search. */
  rootCriteria?: GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequestRootCriteria;
  /** Optional. Filters for the search. */
  filters?: GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequestSearchFilters;
  /** Required. Direction of the search. */
  direction?:
    | "SEARCH_DIRECTION_UNSPECIFIED"
    | "DOWNSTREAM"
    | "UPSTREAM"
    | (string & {});
  /** Required. The locations to search in. */
  locations?: ReadonlyArray<string>;
  /** Optional. Limits for the search. */
  limits?: GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequestSearchLimits;
}

export const GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequest: Schema.Schema<GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rootCriteria: Schema.optional(
      GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequestRootCriteria,
    ),
    filters: Schema.optional(
      GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequestSearchFilters,
    ),
    direction: Schema.optional(Schema.String),
    locations: Schema.optional(Schema.Array(Schema.String)),
    limits: Schema.optional(
      GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequestSearchLimits,
    ),
  }).annotate({
    identifier: "GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequest",
  });

export interface GoogleCloudDatacatalogLineageV1Run {
  /** Optional. A human-readable name you can set to display in a user interface. Must be not longer than 200 characters and only contain UTF-8 letters or numbers, spaces or characters like `_-:&.` */
  displayName?: string;
  /** Optional. The attributes of the run. Should only be used for the purpose of non-semantic management (classifying, describing or labeling the run). Up to 100 attributes are allowed. */
  attributes?: Record<string, unknown>;
  /** Required. The state of the run. */
  state?:
    | "UNKNOWN"
    | "STARTED"
    | "COMPLETED"
    | "FAILED"
    | "ABORTED"
    | (string & {});
  /** Immutable. The resource name of the run. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}`. Can be specified or auto-assigned. {run} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.` */
  name?: string;
  /** Required. The timestamp of the start of the run. */
  startTime?: string;
  /** Optional. The timestamp of the end of the run. */
  endTime?: string;
}

export const GoogleCloudDatacatalogLineageV1Run: Schema.Schema<GoogleCloudDatacatalogLineageV1Run> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    displayName: Schema.optional(Schema.String),
    attributes: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    endTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogLineageV1Run" });

export interface GoogleLongrunningOperation {
  /** The error result of the operation in case of failure or cancellation. */
  error?: GoogleRpcStatus;
  /** The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`. */
  response?: Record<string, unknown>;
  /** The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`. */
  name?: string;
  /** If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available. */
  done?: boolean;
  /** Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any. */
  metadata?: Record<string, unknown>;
}

export const GoogleLongrunningOperation: Schema.Schema<GoogleLongrunningOperation> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    error: Schema.optional(GoogleRpcStatus),
    response: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    name: Schema.optional(Schema.String),
    done: Schema.optional(Schema.Boolean),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "GoogleLongrunningOperation" });

export interface GoogleCloudDatacatalogLineageV1ProcessLinkInfo {
  /** The end of the last event establishing this link-process tuple. */
  endTime?: string;
  /** The start of the first event establishing this link-process tuple. */
  startTime?: string;
  /** The name of the link in the format of `projects/{project}/locations/{location}/links/{link}`. */
  link?: string;
}

export const GoogleCloudDatacatalogLineageV1ProcessLinkInfo: Schema.Schema<GoogleCloudDatacatalogLineageV1ProcessLinkInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    endTime: Schema.optional(Schema.String),
    startTime: Schema.optional(Schema.String),
    link: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogLineageV1ProcessLinkInfo" });

export interface GoogleCloudDatacatalogLineageV1ProcessLinks {
  /** An array containing link details objects of the links provided in the original request. A single process can result in creating multiple links. If any of the links you provide in the request are created by the same process, they all are included in this array. */
  links?: ReadonlyArray<GoogleCloudDatacatalogLineageV1ProcessLinkInfo>;
  /** The process name in the format of `projects/{project}/locations/{location}/processes/{process}`. */
  process?: string;
}

export const GoogleCloudDatacatalogLineageV1ProcessLinks: Schema.Schema<GoogleCloudDatacatalogLineageV1ProcessLinks> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    links: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogLineageV1ProcessLinkInfo),
    ),
    process: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleCloudDatacatalogLineageV1ProcessLinks" });

export interface GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse {
  /** An array of processes associated with the specified links. */
  processLinks?: ReadonlyArray<GoogleCloudDatacatalogLineageV1ProcessLinks>;
  /** The token to specify as `page_token` in the subsequent call to get the next page. Omitted if there are no more pages in the response. */
  nextPageToken?: string;
}

export const GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse: Schema.Schema<GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    processLinks: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogLineageV1ProcessLinks),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse",
  });

export interface GoogleCloudDatacatalogLineageV1SearchLinksRequest {
  /** Optional. The maximum number of links to return in a single page of the response. A page may contain fewer links than this value. If unspecified, at most 10 links are returned. Maximum value is 100; values greater than 100 are reduced to 100. */
  pageSize?: number;
  /** Optional. Send asset information in the **target** field to retrieve all links that lead from upstream assets to the specified asset. */
  target?: GoogleCloudDatacatalogLineageV1EntityReference;
  /** Optional. Send a list of asset information in the **targets** field to retrieve all links that lead from upstream assets to the specified assets. This field is similar to the `target` target field but allows providing multiple entities. All entities within the `MultipleEntityReference` must have the same `fully_qualified_name`. */
  targets?: GoogleCloudDatacatalogLineageV1MultipleEntityReference;
  /** Optional. The page token received from a previous `SearchLinksRequest` call. Use it to get the next page. When requesting subsequent pages of a response, remember that all parameters must match the values you provided in the original request. */
  pageToken?: string;
  /** Optional. Send asset information in the **source** field to retrieve all links that lead from the specified asset to downstream assets. */
  source?: GoogleCloudDatacatalogLineageV1EntityReference;
  /** Optional. Send a list of asset information in the **sources** field to retrieve all links that lead from the specified assets to downstream assets. This field is similar to the `source` source field but allows providing multiple entities. All entities within the `MultipleEntityReference` must have the same `fully_qualified_name`. */
  sources?: GoogleCloudDatacatalogLineageV1MultipleEntityReference;
}

export const GoogleCloudDatacatalogLineageV1SearchLinksRequest: Schema.Schema<GoogleCloudDatacatalogLineageV1SearchLinksRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number),
    target: Schema.optional(GoogleCloudDatacatalogLineageV1EntityReference),
    targets: Schema.optional(
      GoogleCloudDatacatalogLineageV1MultipleEntityReference,
    ),
    pageToken: Schema.optional(Schema.String),
    source: Schema.optional(GoogleCloudDatacatalogLineageV1EntityReference),
    sources: Schema.optional(
      GoogleCloudDatacatalogLineageV1MultipleEntityReference,
    ),
  }).annotate({
    identifier: "GoogleCloudDatacatalogLineageV1SearchLinksRequest",
  });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Schema<GoogleProtobufEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest {
  /** Optional. The maximum number of processes to return in a single page of the response. A page may contain fewer results than this value. */
  pageSize?: number;
  /** The page token received from a previous `BatchSearchLinkProcesses` call. Use it to get the next page. When requesting subsequent pages of a response, remember that all parameters must match the values you provided in the original request. */
  pageToken?: string;
  /** Required. An array of links to check for their associated LineageProcesses. The maximum number of items in this array is 100. If the request contains more than 100 links, it returns the `INVALID_ARGUMENT` error. Format: `projects/{project}/locations/{location}/links/{link}`. */
  links?: ReadonlyArray<string>;
}

export const GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest: Schema.Schema<GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number),
    pageToken: Schema.optional(Schema.String),
    links: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier:
      "GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest",
  });

export interface GoogleCloudDatacatalogLineageV1ListProcessesResponse {
  /** The processes from the specified project and location. */
  processes?: ReadonlyArray<GoogleCloudDatacatalogLineageV1Process>;
  /** The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudDatacatalogLineageV1ListProcessesResponse: Schema.Schema<GoogleCloudDatacatalogLineageV1ListProcessesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    processes: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogLineageV1Process),
    ),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogLineageV1ListProcessesResponse",
  });

export interface GoogleLongrunningListOperationsResponse {
  /** Unordered list. Unreachable resources. Populated when the request sets `ListOperationsRequest.return_partial_success` and reads across collections. For example, when attempting to list all resources across all supported locations. */
  unreachable?: ReadonlyArray<string>;
  /** The standard List next-page token. */
  nextPageToken?: string;
  /** A list of operations that matches the specified filter in the request. */
  operations?: ReadonlyArray<GoogleLongrunningOperation>;
}

export const GoogleLongrunningListOperationsResponse: Schema.Schema<GoogleLongrunningListOperationsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    unreachable: Schema.optional(Schema.Array(Schema.String)),
    nextPageToken: Schema.optional(Schema.String),
    operations: Schema.optional(Schema.Array(GoogleLongrunningOperation)),
  }).annotate({ identifier: "GoogleLongrunningListOperationsResponse" });

export interface GoogleCloudDatacatalogLineageV1LineageLinkDependencyInfo {
  /** The type of dependency. */
  dependencyType?:
    | "DEPENDENCY_TYPE_UNSPECIFIED"
    | "EXACT_COPY"
    | "OTHER"
    | (string & {});
}

export const GoogleCloudDatacatalogLineageV1LineageLinkDependencyInfo: Schema.Schema<GoogleCloudDatacatalogLineageV1LineageLinkDependencyInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dependencyType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogLineageV1LineageLinkDependencyInfo",
  });

export interface GoogleCloudDatacatalogLineageV1LineageLink {
  /** The location where the LineageEvent that created the link is stored. */
  location?: string;
  /** The entity that is the **source** of this link. */
  source?: GoogleCloudDatacatalogLineageV1EntityReference;
  /** Processes metadata associated with the link. */
  processes?: ReadonlyArray<GoogleCloudDatacatalogLineageV1LineageLinkLineageProcess>;
  /** Depth of the current link in the graph starting from 1. */
  depth?: number;
  /** The entity that is the **target** of this link. */
  target?: GoogleCloudDatacatalogLineageV1EntityReference;
  /** Describes how the target entity is dependent on the source entity. */
  dependencyInfo?: ReadonlyArray<GoogleCloudDatacatalogLineageV1LineageLinkDependencyInfo>;
}

export const GoogleCloudDatacatalogLineageV1LineageLink: Schema.Schema<GoogleCloudDatacatalogLineageV1LineageLink> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    location: Schema.optional(Schema.String),
    source: Schema.optional(GoogleCloudDatacatalogLineageV1EntityReference),
    processes: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogLineageV1LineageLinkLineageProcess),
    ),
    depth: Schema.optional(Schema.Number),
    target: Schema.optional(GoogleCloudDatacatalogLineageV1EntityReference),
    dependencyInfo: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogLineageV1LineageLinkDependencyInfo),
    ),
  }).annotate({ identifier: "GoogleCloudDatacatalogLineageV1LineageLink" });

export interface GoogleCloudDatacatalogLineageV1SearchLineageStreamingResponse {
  /** Output only. The lineage links that match the search criteria. Can be empty if no links match. */
  links?: ReadonlyArray<GoogleCloudDatacatalogLineageV1LineageLink>;
  /** Unordered list. Unreachable resources. If non-empty, the result set might be incomplete. Currently, only locations are supported. Format: `projects/[PROJECT_NUMBER]/locations/[LOCATION]` Example: projects/123456789/locations/us-east1 */
  unreachable?: ReadonlyArray<string>;
}

export const GoogleCloudDatacatalogLineageV1SearchLineageStreamingResponse: Schema.Schema<GoogleCloudDatacatalogLineageV1SearchLineageStreamingResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    links: Schema.optional(
      Schema.Array(GoogleCloudDatacatalogLineageV1LineageLink),
    ),
    unreachable: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({
    identifier: "GoogleCloudDatacatalogLineageV1SearchLineageStreamingResponse",
  });

export interface GoogleLongrunningCancelOperationRequest {}

export const GoogleLongrunningCancelOperationRequest: Schema.Schema<GoogleLongrunningCancelOperationRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleLongrunningCancelOperationRequest",
  });

export interface GoogleCloudDatacatalogLineageV1ListRunsResponse {
  /** The runs from the specified project and location. */
  runs?: ReadonlyArray<GoogleCloudDatacatalogLineageV1Run>;
  /** The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const GoogleCloudDatacatalogLineageV1ListRunsResponse: Schema.Schema<GoogleCloudDatacatalogLineageV1ListRunsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    runs: Schema.optional(Schema.Array(GoogleCloudDatacatalogLineageV1Run)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleCloudDatacatalogLineageV1ListRunsResponse",
  });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface ProcessOpenLineageRunEventProjectsLocationsRequest {
  /** Required. The name of the project and its location that should own the process, run, and lineage event. */
  parent: string;
  /** Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided. */
  requestId?: string;
}

export const ProcessOpenLineageRunEventProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}:processOpenLineageRunEvent",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<ProcessOpenLineageRunEventProjectsLocationsRequest>;

export type ProcessOpenLineageRunEventProjectsLocationsResponse =
  GoogleCloudDatacatalogLineageV1ProcessOpenLineageRunEventResponse;
export const ProcessOpenLineageRunEventProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageV1ProcessOpenLineageRunEventResponse;

export type ProcessOpenLineageRunEventProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates new lineage events together with their parents: process and run. Updates the process and run if they already exist. Mapped from Open Lineage specification: https://github.com/OpenLineage/OpenLineage/blob/main/spec/OpenLineage.json. */
export const processOpenLineageRunEventProjectsLocations: API.OperationMethod<
  ProcessOpenLineageRunEventProjectsLocationsRequest,
  ProcessOpenLineageRunEventProjectsLocationsResponse,
  ProcessOpenLineageRunEventProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ProcessOpenLineageRunEventProjectsLocationsRequest,
  output: ProcessOpenLineageRunEventProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchLinksProjectsLocationsRequest {
  /** Required. The project and location you want search in. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatacatalogLineageV1SearchLinksRequest;
}

export const SearchLinksProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDatacatalogLineageV1SearchLinksRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}:searchLinks", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<SearchLinksProjectsLocationsRequest>;

export type SearchLinksProjectsLocationsResponse =
  GoogleCloudDatacatalogLineageV1SearchLinksResponse;
export const SearchLinksProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageV1SearchLinksResponse;

export type SearchLinksProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota. */
export const searchLinksProjectsLocations: API.OperationMethod<
  SearchLinksProjectsLocationsRequest,
  SearchLinksProjectsLocationsResponse,
  SearchLinksProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchLinksProjectsLocationsRequest,
  output: SearchLinksProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SearchLineageStreamingProjectsLocationsRequest {
  /** Required. The project and location to initiate the search from. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequest;
}

export const SearchLineageStreamingProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDatacatalogLineageV1SearchLineageStreamingRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}:searchLineageStreaming",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<SearchLineageStreamingProjectsLocationsRequest>;

export type SearchLineageStreamingProjectsLocationsResponse =
  GoogleCloudDatacatalogLineageV1SearchLineageStreamingResponse;
export const SearchLineageStreamingProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageV1SearchLineageStreamingResponse;

export type SearchLineageStreamingProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieves a streaming response of lineage links connected to the requested assets by performing a breadth-first search in the given direction. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. This method retrieves links from all valid locations provided in the request. This method supports Column-Level Lineage (CLL) along with wildcard support to retrieve all CLL for an Entity FQN. Following permissions are required to retrieve links: * `datalineage.events.get` permission for the project where the link is stored for entity-level lineage. * `datalineage.events.getFields` permission for the project where the link is stored for column-level lineage. This method also returns processes that created the links if explicitly requested by setting [max_process_per_link](google.cloud.datacatalog.lineage.v1.SearchLineageStreamingRequest.limits.max_process_per_link) is non-zero and full process details are requested via `links.processes.process` in the [FieldMask](https://developers.google.com/workspace/docs/api/how-tos/field-masks#read_with_a_field_mask). Permission required to retrieve processes: * `datalineage.processes.get` permission for the project where the process is stored. */
export const searchLineageStreamingProjectsLocations: API.OperationMethod<
  SearchLineageStreamingProjectsLocationsRequest,
  SearchLineageStreamingProjectsLocationsResponse,
  SearchLineageStreamingProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: SearchLineageStreamingProjectsLocationsRequest,
  output: SearchLineageStreamingProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface BatchSearchLinkProcessesProjectsLocationsRequest {
  /** Required. The project and location where you want to search. */
  parent: string;
  /** Request body */
  body?: GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest;
}

export const BatchSearchLinkProcessesProjectsLocationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(
      GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}:batchSearchLinkProcesses",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<BatchSearchLinkProcessesProjectsLocationsRequest>;

export type BatchSearchLinkProcessesProjectsLocationsResponse =
  GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse;
export const BatchSearchLinkProcessesProjectsLocationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse;

export type BatchSearchLinkProcessesProjectsLocationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota. */
export const batchSearchLinkProcessesProjectsLocations: API.OperationMethod<
  BatchSearchLinkProcessesProjectsLocationsRequest,
  BatchSearchLinkProcessesProjectsLocationsResponse,
  BatchSearchLinkProcessesProjectsLocationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: BatchSearchLinkProcessesProjectsLocationsRequest,
  output: BatchSearchLinkProcessesProjectsLocationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsConfigRequest {
  /** Required. REQUIRED: The resource name of the config to be fetched. Format: `organizations/{organization_id}/locations/global/config` `folders/{folder_id}/locations/global/config` `projects/{project_id}/locations/global/config` `projects/{project_number}/locations/global/config` */
  name: string;
}

export const GetProjectsLocationsConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsConfigRequest>;

export type GetProjectsLocationsConfigResponse =
  GoogleCloudDatacatalogLineageConfigmanagementV1Config;
export const GetProjectsLocationsConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageConfigmanagementV1Config;

export type GetProjectsLocationsConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the Config for a given resource. */
export const getProjectsLocationsConfig: API.OperationMethod<
  GetProjectsLocationsConfigRequest,
  GetProjectsLocationsConfigResponse,
  GetProjectsLocationsConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsConfigRequest,
  output: GetProjectsLocationsConfigResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchProjectsLocationsConfigRequest {
  /** Identifier. The resource name of the config. Format: `organizations/{organization_id}/locations/global/config` `folders/{folder_id}/locations/global/config` `projects/{project_id}/locations/global/config` `projects/{project_number}/locations/global/config` */
  name: string;
  /** Request body */
  body?: GoogleCloudDatacatalogLineageConfigmanagementV1Config;
}

export const PatchProjectsLocationsConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDatacatalogLineageConfigmanagementV1Config,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsConfigRequest>;

export type PatchProjectsLocationsConfigResponse =
  GoogleCloudDatacatalogLineageConfigmanagementV1Config;
export const PatchProjectsLocationsConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageConfigmanagementV1Config;

export type PatchProjectsLocationsConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the Config for a given resource. */
export const patchProjectsLocationsConfig: API.OperationMethod<
  PatchProjectsLocationsConfigRequest,
  PatchProjectsLocationsConfigResponse,
  PatchProjectsLocationsConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsConfigRequest,
  output: PatchProjectsLocationsConfigResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListProjectsLocationsOperationsRequest {
  /** The name of the operation's parent resource. */
  name: string;
  /** The standard list page token. */
  pageToken?: string;
  /** The standard list filter. */
  filter?: string;
  /** The standard list page size. */
  pageSize?: number;
  /** When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. */
  returnPartialSuccess?: boolean;
}

export const ListProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    returnPartialSuccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("returnPartialSuccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}/operations" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsOperationsRequest>;

export type ListProjectsLocationsOperationsResponse =
  GoogleLongrunningListOperationsResponse;
export const ListProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningListOperationsResponse;

export type ListProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. */
export const listProjectsLocationsOperations: API.PaginatedOperationMethod<
  ListProjectsLocationsOperationsRequest,
  ListProjectsLocationsOperationsResponse,
  ListProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsOperationsRequest,
  output: ListProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetProjectsLocationsOperationsRequest {
  /** The name of the operation resource. */
  name: string;
}

export const GetProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsOperationsRequest>;

export type GetProjectsLocationsOperationsResponse = GoogleLongrunningOperation;
export const GetProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type GetProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service. */
export const getProjectsLocationsOperations: API.OperationMethod<
  GetProjectsLocationsOperationsRequest,
  GetProjectsLocationsOperationsResponse,
  GetProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsOperationsRequest,
  output: GetProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be deleted. */
  name: string;
}

export const DeleteProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsOperationsRequest>;

export type DeleteProjectsLocationsOperationsResponse = GoogleProtobufEmpty;
export const DeleteProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. */
export const deleteProjectsLocationsOperations: API.OperationMethod<
  DeleteProjectsLocationsOperationsRequest,
  DeleteProjectsLocationsOperationsResponse,
  DeleteProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsOperationsRequest,
  output: DeleteProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CancelProjectsLocationsOperationsRequest {
  /** The name of the operation resource to be cancelled. */
  name: string;
  /** Request body */
  body?: GoogleLongrunningCancelOperationRequest;
}

export const CancelProjectsLocationsOperationsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(GoogleLongrunningCancelOperationRequest).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:cancel", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CancelProjectsLocationsOperationsRequest>;

export type CancelProjectsLocationsOperationsResponse = GoogleProtobufEmpty;
export const CancelProjectsLocationsOperationsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type CancelProjectsLocationsOperationsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`. */
export const cancelProjectsLocationsOperations: API.OperationMethod<
  CancelProjectsLocationsOperationsRequest,
  CancelProjectsLocationsOperationsResponse,
  CancelProjectsLocationsOperationsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CancelProjectsLocationsOperationsRequest,
  output: CancelProjectsLocationsOperationsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsProcessesRequest {
  /** Optional. If set to true and the process is not found, the request inserts it. */
  allowMissing?: boolean;
  /** Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided. */
  requestId?: string;
  /** Immutable. The resource name of the lineage process. Format: `projects/{project}/locations/{location}/processes/{process}`. Can be specified or auto-assigned. {process} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.` */
  name: string;
  /** Optional. The list of fields to update. Currently not used. The whole message is updated. */
  updateMask?: string;
  /** Request body */
  body?: GoogleCloudDatacatalogLineageV1Process;
}

export const PatchProjectsLocationsProcessesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleCloudDatacatalogLineageV1Process).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsProcessesRequest>;

export type PatchProjectsLocationsProcessesResponse =
  GoogleCloudDatacatalogLineageV1Process;
export const PatchProjectsLocationsProcessesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageV1Process;

export type PatchProjectsLocationsProcessesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a process. */
export const patchProjectsLocationsProcesses: API.OperationMethod<
  PatchProjectsLocationsProcessesRequest,
  PatchProjectsLocationsProcessesResponse,
  PatchProjectsLocationsProcessesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsProcessesRequest,
  output: PatchProjectsLocationsProcessesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsProcessesRequest {
  /** Required. The name of the process to get. */
  name: string;
}

export const GetProjectsLocationsProcessesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsProcessesRequest>;

export type GetProjectsLocationsProcessesResponse =
  GoogleCloudDatacatalogLineageV1Process;
export const GetProjectsLocationsProcessesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageV1Process;

export type GetProjectsLocationsProcessesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of the specified process. */
export const getProjectsLocationsProcesses: API.OperationMethod<
  GetProjectsLocationsProcessesRequest,
  GetProjectsLocationsProcessesResponse,
  GetProjectsLocationsProcessesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsProcessesRequest,
  output: GetProjectsLocationsProcessesResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsProcessesRequest {
  /** Optional. The maximum number of processes to return. The service may return fewer than this value. If unspecified, at most 50 processes are returned. The maximum value is 100; values greater than 100 are cut to 100. */
  pageSize?: number;
  /** Required. The name of the project and its location that owns this collection of processes. */
  parent: string;
  /** Optional. The page token received from a previous `ListProcesses` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsProcessesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/processes" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsProcessesRequest>;

export type ListProjectsLocationsProcessesResponse =
  GoogleCloudDatacatalogLineageV1ListProcessesResponse;
export const ListProjectsLocationsProcessesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageV1ListProcessesResponse;

export type ListProjectsLocationsProcessesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** List processes in the given project and location. List order is descending by insertion time. */
export const listProjectsLocationsProcesses: API.PaginatedOperationMethod<
  ListProjectsLocationsProcessesRequest,
  ListProjectsLocationsProcessesResponse,
  ListProjectsLocationsProcessesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsProcessesRequest,
  output: ListProjectsLocationsProcessesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsProcessesRequest {
  /** Required. The name of the process to delete. */
  name: string;
  /** Optional. If set to true and the process is not found, the request succeeds but the server doesn't perform any actions. */
  allowMissing?: boolean;
}

export const DeleteProjectsLocationsProcessesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsProcessesRequest>;

export type DeleteProjectsLocationsProcessesResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsProcessesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsProcessesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the process with the specified name. */
export const deleteProjectsLocationsProcesses: API.OperationMethod<
  DeleteProjectsLocationsProcessesRequest,
  DeleteProjectsLocationsProcessesResponse,
  DeleteProjectsLocationsProcessesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsProcessesRequest,
  output: DeleteProjectsLocationsProcessesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsProcessesRequest {
  /** Required. The name of the project and its location that should own the process. */
  parent: string;
  /** Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided. */
  requestId?: string;
  /** Request body */
  body?: GoogleCloudDatacatalogLineageV1Process;
}

export const CreateProjectsLocationsProcessesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(GoogleCloudDatacatalogLineageV1Process).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/processes", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsProcessesRequest>;

export type CreateProjectsLocationsProcessesResponse =
  GoogleCloudDatacatalogLineageV1Process;
export const CreateProjectsLocationsProcessesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageV1Process;

export type CreateProjectsLocationsProcessesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new process. */
export const createProjectsLocationsProcesses: API.OperationMethod<
  CreateProjectsLocationsProcessesRequest,
  CreateProjectsLocationsProcessesResponse,
  CreateProjectsLocationsProcessesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsProcessesRequest,
  output: CreateProjectsLocationsProcessesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchProjectsLocationsProcessesRunsRequest {
  /** Immutable. The resource name of the run. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}`. Can be specified or auto-assigned. {run} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.` */
  name: string;
  /** Optional. The list of fields to update. Currently not used. The whole message is updated. */
  updateMask?: string;
  /** Optional. If set to true and the run is not found, the request creates it. */
  allowMissing?: boolean;
  /** Request body */
  body?: GoogleCloudDatacatalogLineageV1Run;
}

export const PatchProjectsLocationsProcessesRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    body: Schema.optional(GoogleCloudDatacatalogLineageV1Run).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchProjectsLocationsProcessesRunsRequest>;

export type PatchProjectsLocationsProcessesRunsResponse =
  GoogleCloudDatacatalogLineageV1Run;
export const PatchProjectsLocationsProcessesRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageV1Run;

export type PatchProjectsLocationsProcessesRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a run. */
export const patchProjectsLocationsProcessesRuns: API.OperationMethod<
  PatchProjectsLocationsProcessesRunsRequest,
  PatchProjectsLocationsProcessesRunsResponse,
  PatchProjectsLocationsProcessesRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchProjectsLocationsProcessesRunsRequest,
  output: PatchProjectsLocationsProcessesRunsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsProcessesRunsRequest {
  /** Required. The name of the run to get. */
  name: string;
}

export const GetProjectsLocationsProcessesRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsProcessesRunsRequest>;

export type GetProjectsLocationsProcessesRunsResponse =
  GoogleCloudDatacatalogLineageV1Run;
export const GetProjectsLocationsProcessesRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageV1Run;

export type GetProjectsLocationsProcessesRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the details of the specified run. */
export const getProjectsLocationsProcessesRuns: API.OperationMethod<
  GetProjectsLocationsProcessesRunsRequest,
  GetProjectsLocationsProcessesRunsResponse,
  GetProjectsLocationsProcessesRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsProcessesRunsRequest,
  output: GetProjectsLocationsProcessesRunsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsProcessesRunsRequest {
  /** Optional. The maximum number of runs to return. The service may return fewer than this value. If unspecified, at most 50 runs are returned. The maximum value is 100; values greater than 100 are cut to 100. */
  pageSize?: number;
  /** Required. The name of process that owns this collection of runs. */
  parent: string;
  /** Optional. The page token received from a previous `ListRuns` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsProcessesRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/runs" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsProcessesRunsRequest>;

export type ListProjectsLocationsProcessesRunsResponse =
  GoogleCloudDatacatalogLineageV1ListRunsResponse;
export const ListProjectsLocationsProcessesRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageV1ListRunsResponse;

export type ListProjectsLocationsProcessesRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists runs in the given project and location. List order is descending by `start_time`. */
export const listProjectsLocationsProcessesRuns: API.PaginatedOperationMethod<
  ListProjectsLocationsProcessesRunsRequest,
  ListProjectsLocationsProcessesRunsResponse,
  ListProjectsLocationsProcessesRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsProcessesRunsRequest,
  output: ListProjectsLocationsProcessesRunsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsProcessesRunsRequest {
  /** Required. The name of the run to delete. */
  name: string;
  /** Optional. If set to true and the run is not found, the request succeeds but the server doesn't perform any actions. */
  allowMissing?: boolean;
}

export const DeleteProjectsLocationsProcessesRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsProcessesRunsRequest>;

export type DeleteProjectsLocationsProcessesRunsResponse =
  GoogleLongrunningOperation;
export const DeleteProjectsLocationsProcessesRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleLongrunningOperation;

export type DeleteProjectsLocationsProcessesRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the run with the specified name. */
export const deleteProjectsLocationsProcessesRuns: API.OperationMethod<
  DeleteProjectsLocationsProcessesRunsRequest,
  DeleteProjectsLocationsProcessesRunsResponse,
  DeleteProjectsLocationsProcessesRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsProcessesRunsRequest,
  output: DeleteProjectsLocationsProcessesRunsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsProcessesRunsRequest {
  /** Required. The name of the process that should own the run. */
  parent: string;
  /** Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided. */
  requestId?: string;
  /** Request body */
  body?: GoogleCloudDatacatalogLineageV1Run;
}

export const CreateProjectsLocationsProcessesRunsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(GoogleCloudDatacatalogLineageV1Run).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/runs", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsProcessesRunsRequest>;

export type CreateProjectsLocationsProcessesRunsResponse =
  GoogleCloudDatacatalogLineageV1Run;
export const CreateProjectsLocationsProcessesRunsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageV1Run;

export type CreateProjectsLocationsProcessesRunsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new run. */
export const createProjectsLocationsProcessesRuns: API.OperationMethod<
  CreateProjectsLocationsProcessesRunsRequest,
  CreateProjectsLocationsProcessesRunsResponse,
  CreateProjectsLocationsProcessesRunsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsProcessesRunsRequest,
  output: CreateProjectsLocationsProcessesRunsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetProjectsLocationsProcessesRunsLineageEventsRequest {
  /** Required. The name of the lineage event to get. */
  name: string;
}

export const GetProjectsLocationsProcessesRunsLineageEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetProjectsLocationsProcessesRunsLineageEventsRequest>;

export type GetProjectsLocationsProcessesRunsLineageEventsResponse =
  GoogleCloudDatacatalogLineageV1LineageEvent;
export const GetProjectsLocationsProcessesRunsLineageEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageV1LineageEvent;

export type GetProjectsLocationsProcessesRunsLineageEventsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets details of a specified lineage event. */
export const getProjectsLocationsProcessesRunsLineageEvents: API.OperationMethod<
  GetProjectsLocationsProcessesRunsLineageEventsRequest,
  GetProjectsLocationsProcessesRunsLineageEventsResponse,
  GetProjectsLocationsProcessesRunsLineageEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetProjectsLocationsProcessesRunsLineageEventsRequest,
  output: GetProjectsLocationsProcessesRunsLineageEventsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListProjectsLocationsProcessesRunsLineageEventsRequest {
  /** Optional. The maximum number of lineage events to return. The service may return fewer events than this value. If unspecified, at most 50 events are returned. The maximum value is 100; values greater than 100 are cut to 100. */
  pageSize?: number;
  /** Required. The name of the run that owns the collection of lineage events to get. */
  parent: string;
  /** Optional. The page token received from a previous `ListLineageEvents` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token. */
  pageToken?: string;
}

export const ListProjectsLocationsProcessesRunsLineageEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/lineageEvents" }),
    svc,
  ) as unknown as Schema.Schema<ListProjectsLocationsProcessesRunsLineageEventsRequest>;

export type ListProjectsLocationsProcessesRunsLineageEventsResponse =
  GoogleCloudDatacatalogLineageV1ListLineageEventsResponse;
export const ListProjectsLocationsProcessesRunsLineageEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageV1ListLineageEventsResponse;

export type ListProjectsLocationsProcessesRunsLineageEventsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists lineage events in the given project and location. The list order is not defined. */
export const listProjectsLocationsProcessesRunsLineageEvents: API.PaginatedOperationMethod<
  ListProjectsLocationsProcessesRunsLineageEventsRequest,
  ListProjectsLocationsProcessesRunsLineageEventsResponse,
  ListProjectsLocationsProcessesRunsLineageEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
  input: ListProjectsLocationsProcessesRunsLineageEventsRequest,
  output: ListProjectsLocationsProcessesRunsLineageEventsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteProjectsLocationsProcessesRunsLineageEventsRequest {
  /** Required. The name of the lineage event to delete. */
  name: string;
  /** Optional. If set to true and the lineage event is not found, the request succeeds but the server doesn't perform any actions. */
  allowMissing?: boolean;
}

export const DeleteProjectsLocationsProcessesRunsLineageEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<DeleteProjectsLocationsProcessesRunsLineageEventsRequest>;

export type DeleteProjectsLocationsProcessesRunsLineageEventsResponse =
  GoogleProtobufEmpty;
export const DeleteProjectsLocationsProcessesRunsLineageEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type DeleteProjectsLocationsProcessesRunsLineageEventsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes the lineage event with the specified name. */
export const deleteProjectsLocationsProcessesRunsLineageEvents: API.OperationMethod<
  DeleteProjectsLocationsProcessesRunsLineageEventsRequest,
  DeleteProjectsLocationsProcessesRunsLineageEventsResponse,
  DeleteProjectsLocationsProcessesRunsLineageEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: DeleteProjectsLocationsProcessesRunsLineageEventsRequest,
  output: DeleteProjectsLocationsProcessesRunsLineageEventsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateProjectsLocationsProcessesRunsLineageEventsRequest {
  /** Required. The name of the run that should own the lineage event. */
  parent: string;
  /** Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided. */
  requestId?: string;
  /** Request body */
  body?: GoogleCloudDatacatalogLineageV1LineageEvent;
}

export const CreateProjectsLocationsProcessesRunsLineageEventsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    body: Schema.optional(GoogleCloudDatacatalogLineageV1LineageEvent).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+parent}/lineageEvents",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<CreateProjectsLocationsProcessesRunsLineageEventsRequest>;

export type CreateProjectsLocationsProcessesRunsLineageEventsResponse =
  GoogleCloudDatacatalogLineageV1LineageEvent;
export const CreateProjectsLocationsProcessesRunsLineageEventsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageV1LineageEvent;

export type CreateProjectsLocationsProcessesRunsLineageEventsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a new lineage event. */
export const createProjectsLocationsProcessesRunsLineageEvents: API.OperationMethod<
  CreateProjectsLocationsProcessesRunsLineageEventsRequest,
  CreateProjectsLocationsProcessesRunsLineageEventsResponse,
  CreateProjectsLocationsProcessesRunsLineageEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateProjectsLocationsProcessesRunsLineageEventsRequest,
  output: CreateProjectsLocationsProcessesRunsLineageEventsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetFoldersLocationsConfigRequest {
  /** Required. REQUIRED: The resource name of the config to be fetched. Format: `organizations/{organization_id}/locations/global/config` `folders/{folder_id}/locations/global/config` `projects/{project_id}/locations/global/config` `projects/{project_number}/locations/global/config` */
  name: string;
}

export const GetFoldersLocationsConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetFoldersLocationsConfigRequest>;

export type GetFoldersLocationsConfigResponse =
  GoogleCloudDatacatalogLineageConfigmanagementV1Config;
export const GetFoldersLocationsConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageConfigmanagementV1Config;

export type GetFoldersLocationsConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the Config for a given resource. */
export const getFoldersLocationsConfig: API.OperationMethod<
  GetFoldersLocationsConfigRequest,
  GetFoldersLocationsConfigResponse,
  GetFoldersLocationsConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetFoldersLocationsConfigRequest,
  output: GetFoldersLocationsConfigResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchFoldersLocationsConfigRequest {
  /** Identifier. The resource name of the config. Format: `organizations/{organization_id}/locations/global/config` `folders/{folder_id}/locations/global/config` `projects/{project_id}/locations/global/config` `projects/{project_number}/locations/global/config` */
  name: string;
  /** Request body */
  body?: GoogleCloudDatacatalogLineageConfigmanagementV1Config;
}

export const PatchFoldersLocationsConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDatacatalogLineageConfigmanagementV1Config,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchFoldersLocationsConfigRequest>;

export type PatchFoldersLocationsConfigResponse =
  GoogleCloudDatacatalogLineageConfigmanagementV1Config;
export const PatchFoldersLocationsConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageConfigmanagementV1Config;

export type PatchFoldersLocationsConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the Config for a given resource. */
export const patchFoldersLocationsConfig: API.OperationMethod<
  PatchFoldersLocationsConfigRequest,
  PatchFoldersLocationsConfigResponse,
  PatchFoldersLocationsConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchFoldersLocationsConfigRequest,
  output: PatchFoldersLocationsConfigResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetOrganizationsLocationsConfigRequest {
  /** Required. REQUIRED: The resource name of the config to be fetched. Format: `organizations/{organization_id}/locations/global/config` `folders/{folder_id}/locations/global/config` `projects/{project_id}/locations/global/config` `projects/{project_number}/locations/global/config` */
  name: string;
}

export const GetOrganizationsLocationsConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Schema<GetOrganizationsLocationsConfigRequest>;

export type GetOrganizationsLocationsConfigResponse =
  GoogleCloudDatacatalogLineageConfigmanagementV1Config;
export const GetOrganizationsLocationsConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageConfigmanagementV1Config;

export type GetOrganizationsLocationsConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Get the Config for a given resource. */
export const getOrganizationsLocationsConfig: API.OperationMethod<
  GetOrganizationsLocationsConfigRequest,
  GetOrganizationsLocationsConfigResponse,
  GetOrganizationsLocationsConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetOrganizationsLocationsConfigRequest,
  output: GetOrganizationsLocationsConfigResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchOrganizationsLocationsConfigRequest {
  /** Identifier. The resource name of the config. Format: `organizations/{organization_id}/locations/global/config` `folders/{folder_id}/locations/global/config` `projects/{project_id}/locations/global/config` `projects/{project_number}/locations/global/config` */
  name: string;
  /** Request body */
  body?: GoogleCloudDatacatalogLineageConfigmanagementV1Config;
}

export const PatchOrganizationsLocationsConfigRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(
      GoogleCloudDatacatalogLineageConfigmanagementV1Config,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<PatchOrganizationsLocationsConfigRequest>;

export type PatchOrganizationsLocationsConfigResponse =
  GoogleCloudDatacatalogLineageConfigmanagementV1Config;
export const PatchOrganizationsLocationsConfigResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleCloudDatacatalogLineageConfigmanagementV1Config;

export type PatchOrganizationsLocationsConfigError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Update the Config for a given resource. */
export const patchOrganizationsLocationsConfig: API.OperationMethod<
  PatchOrganizationsLocationsConfigRequest,
  PatchOrganizationsLocationsConfigResponse,
  PatchOrganizationsLocationsConfigError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: PatchOrganizationsLocationsConfigRequest,
  output: PatchOrganizationsLocationsConfigResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
