import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ErrorTrackingSpikeEventsListInput {
  project_id: string;
  limit?: number;
  offset?: number;
}
export const ErrorTrackingSpikeEventsListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/error_tracking/spike_events/",
    }),
  ) as unknown as Schema.Codec<ErrorTrackingSpikeEventsListInput>;

// Output Schema
export interface ErrorTrackingSpikeEventsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    issue?: { id?: string; name?: string | null; description?: string | null };
    detected_at?: string;
    computed_baseline?: number;
    current_bucket_value?: number;
  }[];
}
export const ErrorTrackingSpikeEventsListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          issue: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              name: Schema.optional(Schema.NullOr(Schema.String)),
              description: Schema.optional(Schema.NullOr(Schema.String)),
            }),
          ),
          detected_at: Schema.optional(Schema.String),
          computed_baseline: Schema.optional(Schema.Number),
          current_bucket_value: Schema.optional(Schema.Number),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<ErrorTrackingSpikeEventsListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const errorTrackingSpikeEventsList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ErrorTrackingSpikeEventsListInput,
    outputSchema: ErrorTrackingSpikeEventsListOutput,
  }));
