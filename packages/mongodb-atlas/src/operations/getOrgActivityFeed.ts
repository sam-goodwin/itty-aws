import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetOrgActivityFeedInput {
  orgId: string;
  pretty?: boolean;
  eventType?: string;
  maxDate?: string;
  minDate?: string;
}
export const GetOrgActivityFeedInput =
  /*@__PURE__*/ Schema.Struct({
    orgId: Schema.String.pipe(T.PathParam()),
    pretty: Schema.optional(Schema.Boolean),
    eventType: Schema.optional(Schema.String),
    maxDate: Schema.optional(Schema.String),
    minDate: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/api/atlas/v2/orgs/{orgId}/activityFeed" }),
  ) as unknown as Schema.Codec<GetOrgActivityFeedInput>;

// Output Schema
export type GetOrgActivityFeedOutput = void;
export const GetOrgActivityFeedOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<GetOrgActivityFeedOutput>;

// The operation
/**
 * Return Pre-Filtered Activity Feed Link for One Organization
 *
 * Returns a pre-filtered activity feed link for the specified organization based on the provided date range and event types. The returned link can be shared and opened to view the activity feed with the same filters applied.
 *
 * @param orgId - Unique 24-hexadecimal digit string that identifies the organization that contains your projects. Use the [`/orgs`](#tag/Organizations/operation/listOrganizations) endpoint to retrieve all organizations to which the authenticated user has access.
 * @param pretty - Flag that indicates whether the response body should be in the prettyprint format.
 * @param eventType - Category of incident recorded at this moment in time.

**IMPORTANT**: The complete list of event type values changes frequently.
 * @param maxDate - End date and time for events to include in the activity feed link. ISO 8601 timestamp format in UTC.
 * @param minDate - Start date and time for events to include in the activity feed link. ISO 8601 timestamp format in UTC.
 */
export const getOrgActivityFeed = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetOrgActivityFeedInput,
  outputSchema: GetOrgActivityFeedOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
