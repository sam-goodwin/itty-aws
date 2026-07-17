import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetGroupAlertConfigAlertsInput {
  groupId: string;
  alertConfigId: string;
  envelope?: boolean;
  includeCount?: boolean;
  itemsPerPage?: number;
  pageNum?: number;
  pretty?: boolean;
}
export const GetGroupAlertConfigAlertsInput =
  /*@__PURE__*/ Schema.Struct({
    groupId: Schema.String.pipe(T.PathParam()),
    alertConfigId: Schema.String.pipe(T.PathParam()),
    envelope: Schema.optional(Schema.Boolean),
    includeCount: Schema.optional(Schema.Boolean),
    itemsPerPage: Schema.optional(Schema.Number),
    pageNum: Schema.optional(Schema.Number),
    pretty: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/atlas/v2/groups/{groupId}/alertConfigs/{alertConfigId}/alerts",
    }),
  ) as unknown as Schema.Codec<GetGroupAlertConfigAlertsInput>;

// Output Schema
export type GetGroupAlertConfigAlertsOutput = void;
export const GetGroupAlertConfigAlertsOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<GetGroupAlertConfigAlertsOutput>;

// The operation
/**
 * Return All Open Alerts for One Alert Configuration
 *
 * Returns all open alerts that the specified alert configuration triggers. These alert configurations apply to the specified project only. Alert configurations define the triggers and notification methods for alerts. Open alerts have been triggered but remain unacknowledged. Use the Return All Alert Configurations for One Project endpoint to retrieve all alert configurations to which the authenticated user has access.
 * This resource remains under revision and may change.
 *
 * @param envelope - Flag that indicates whether Application wraps the response in an `envelope` JSON object. Some API clients cannot access the HTTP response headers or status code. To remediate this, set envelope=true in the query. Endpoints that return a list of results use the results object as an envelope. Application adds the status parameter to the response body.
 * @param groupId - Unique 24-hexadecimal digit string that identifies your project. Use the [/groups](#tag/Projects/operation/listProjects) endpoint to retrieve all projects to which the authenticated user has access.

**NOTE**: Groups and projects are synonymous terms. Your group id is the same as your project id. For existing groups, your group/project id remains the same. The resource and corresponding endpoints use the term groups.
 * @param includeCount - Flag that indicates whether the response returns the total number of items (`totalCount`) in the response.
 * @param itemsPerPage - Number of items that the response returns per page.
 * @param pageNum - Number of the page that displays the current set of the total objects that the response returns.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param alertConfigId - Unique 24-hexadecimal digit string that identifies the alert configuration.
 */
export const getGroupAlertConfigAlerts = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetGroupAlertConfigAlertsInput,
  outputSchema: GetGroupAlertConfigAlertsOutput,
  errors: [Forbidden, NotFound] as const,
}));
