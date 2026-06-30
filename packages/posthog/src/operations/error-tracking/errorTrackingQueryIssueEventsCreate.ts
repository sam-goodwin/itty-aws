import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const ErrorTrackingQueryIssueEventsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    issueId: Schema.String,
    dateRange: Schema.optional(
      Schema.Struct({
        date_from: Schema.optional(Schema.String),
        date_to: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    filterTestAccounts: Schema.optional(Schema.Boolean),
    filterGroup: Schema.optional(
      Schema.Array(
        Schema.Struct({
          key: Schema.optional(Schema.String),
          value: Schema.optional(Schema.Unknown),
          operator: Schema.optional(Schema.Unknown),
          type: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    searchQuery: Schema.optional(Schema.String),
    orderDirection: Schema.optional(Schema.Literals(["ASC", "DESC"])),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    verbosity: Schema.optional(Schema.Literals(["summary", "stack", "raw"])),
    onlyAppFrames: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/error_tracking/query/issue_events/",
    }),
  );
export type ErrorTrackingQueryIssueEventsCreateInput =
  typeof ErrorTrackingQueryIssueEventsCreateInput.Type;

// Output Schema
export const ErrorTrackingQueryIssueEventsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.String),
        timestamp: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
      }),
    ),
    hasMore: Schema.Boolean,
    limit: Schema.Number,
    offset: Schema.Number,
    nextOffset: Schema.optional(Schema.Number),
  });
export type ErrorTrackingQueryIssueEventsCreateOutput =
  typeof ErrorTrackingQueryIssueEventsCreateOutput.Type;

// The operation
/**
 * List sampled exception events for an error tracking issue
 *
 * Fetch sampled exception events, stack traces, browser/SDK context, URL, and $session_id values for one issue.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingQueryIssueEventsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingQueryIssueEventsCreateInput,
    outputSchema: ErrorTrackingQueryIssueEventsCreateOutput,
    errors: [NotFound] as const,
  }));
