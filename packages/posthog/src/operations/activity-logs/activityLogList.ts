import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const ActivityLogListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  item_id: Schema.optional(Schema.String),
  page: Schema.optional(Schema.Number),
  page_size: Schema.optional(Schema.Number),
  scope: Schema.optional(
    Schema.Literals([
      "Cohort",
      "FeatureFlag",
      "Person",
      "Group",
      "Insight",
      "Plugin",
      "PluginConfig",
      "HogFunction",
      "HogFlow",
      "DataManagement",
      "EventDefinition",
      "PropertyDefinition",
      "Notebook",
      "Endpoint",
      "EndpointVersion",
      "Dashboard",
      "Replay",
      "Experiment",
      "ExperimentHoldout",
      "ExperimentSavedMetric",
      "Survey",
      "EarlyAccessFeature",
      "SessionRecordingPlaylist",
      "Comment",
      "Team",
      "Project",
      "ErrorTrackingIssue",
      "DataWarehouseSavedQuery",
      "LegalDocument",
      "Organization",
      "OrganizationDomain",
      "OrganizationMembership",
      "Role",
      "UserGroup",
      "BatchExport",
      "BatchImport",
      "Integration",
      "Annotation",
      "Tag",
      "TaggedItem",
      "Subscription",
      "PersonalAPIKey",
      "ProjectSecretAPIKey",
      "User",
      "Action",
      "AlertConfiguration",
      "Threshold",
      "AlertSubscription",
      "ExternalDataSource",
      "ExternalDataSchema",
      "LLMTrace",
      "WebAnalyticsFilterPreset",
      "CustomerProfileConfig",
      "Log",
      "LogsAlertConfiguration",
      "ProductTour",
      "Ticket",
    ]),
  ),
  scopes: Schema.optional(Schema.String),
  user: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/activity_log/" }),
);
export type ActivityLogListInput = typeof ActivityLogListInput.Type;

// Output Schema
export const ActivityLogListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      user: Schema.Struct({
        id: Schema.Number,
        uuid: Schema.String,
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.String,
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.NullOr(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
      unread: Schema.Boolean,
      organization_id: Schema.optional(Schema.NullOr(Schema.String)),
      was_impersonated: Schema.optional(Schema.NullOr(Schema.Boolean)),
      is_system: Schema.optional(Schema.NullOr(Schema.Boolean)),
      client: Schema.optional(Schema.NullOr(Schema.String)),
      activity: Schema.String,
      item_id: Schema.optional(Schema.NullOr(Schema.String)),
      scope: Schema.String,
      detail: Schema.optional(Schema.NullOr(Schema.Unknown)),
      created_at: Schema.optional(Schema.String),
    }),
  ),
});
export type ActivityLogListOutput = typeof ActivityLogListOutput.Type;

// The operation
/**
 *
 * @param item_id - Filter by the ID of the affected resource.
 * @param page - Page number for pagination. When provided, uses page-based pagination ordered by most recent first.
 * @param page_size - Number of results per page (default: 100, max: 1000). Only used with page-based pagination.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param scope - Filter by a single activity scope, e.g. "FeatureFlag", "Insight", "Dashboard", "Experiment".

* `Cohort` - Cohort
* `FeatureFlag` - FeatureFlag
* `Person` - Person
* `Group` - Group
* `Insight` - Insight
* `Plugin` - Plugin
* `PluginConfig` - PluginConfig
* `HogFunction` - HogFunction
* `HogFlow` - HogFlow
* `DataManagement` - DataManagement
* `EventDefinition` - EventDefinition
* `PropertyDefinition` - PropertyDefinition
* `Notebook` - Notebook
* `Endpoint` - Endpoint
* `EndpointVersion` - EndpointVersion
* `Dashboard` - Dashboard
* `Replay` - Replay
* `Experiment` - Experiment
* `ExperimentHoldout` - ExperimentHoldout
* `ExperimentSavedMetric` - ExperimentSavedMetric
* `Survey` - Survey
* `EarlyAccessFeature` - EarlyAccessFeature
* `SessionRecordingPlaylist` - SessionRecordingPlaylist
* `Comment` - Comment
* `Team` - Team
* `Project` - Project
* `ErrorTrackingIssue` - ErrorTrackingIssue
* `DataWarehouseSavedQuery` - DataWarehouseSavedQuery
* `LegalDocument` - LegalDocument
* `Organization` - Organization
* `OrganizationDomain` - OrganizationDomain
* `OrganizationMembership` - OrganizationMembership
* `Role` - Role
* `UserGroup` - UserGroup
* `BatchExport` - BatchExport
* `BatchImport` - BatchImport
* `Integration` - Integration
* `Annotation` - Annotation
* `Tag` - Tag
* `TaggedItem` - TaggedItem
* `Subscription` - Subscription
* `PersonalAPIKey` - PersonalAPIKey
* `ProjectSecretAPIKey` - ProjectSecretAPIKey
* `User` - User
* `Action` - Action
* `AlertConfiguration` - AlertConfiguration
* `Threshold` - Threshold
* `AlertSubscription` - AlertSubscription
* `ExternalDataSource` - ExternalDataSource
* `ExternalDataSchema` - ExternalDataSchema
* `LLMTrace` - LLMTrace
* `WebAnalyticsFilterPreset` - WebAnalyticsFilterPreset
* `CustomerProfileConfig` - CustomerProfileConfig
* `Log` - Log
* `LogsAlertConfiguration` - LogsAlertConfiguration
* `ProductTour` - ProductTour
* `Ticket` - Ticket
 * @param scopes - Filter by multiple activity scopes, comma-separated. Values must be valid ActivityScope enum values. E.g. "FeatureFlag,Insight".
 * @param user - Filter by user UUID who performed the action.
 */
export const activityLogList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ActivityLogListInput,
  outputSchema: ActivityLogListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
