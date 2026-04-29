import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EventsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  after: Schema.optional(Schema.String),
  before: Schema.optional(Schema.String),
  distinct_id: Schema.optional(Schema.Number),
  event: Schema.optional(Schema.String),
  format: Schema.optional(Schema.Literals(["csv", "json"])),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  person_id: Schema.optional(Schema.Number),
  properties: Schema.optional(Schema.String),
  select: Schema.optional(Schema.String),
  where: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/api/projects/{project_id}/events/" }));
export type EventsListInput = typeof EventsListInput.Type;

// Output Schema
export const EventsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  next: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.String,
        distinct_id: Schema.String,
        properties: Schema.Record(Schema.String, Schema.Unknown),
        event: Schema.String,
        timestamp: Schema.String,
        person: Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        elements: Schema.Array(
          Schema.Struct({
            event: Schema.String,
            text: Schema.optional(Schema.NullOr(Schema.String)),
            tag_name: Schema.optional(Schema.NullOr(Schema.String)),
            attr_class: Schema.optional(
              Schema.NullOr(Schema.Array(Schema.String)),
            ),
            href: Schema.optional(Schema.NullOr(Schema.String)),
            attr_id: Schema.optional(Schema.NullOr(Schema.String)),
            nth_child: Schema.optional(Schema.NullOr(Schema.Number)),
            nth_of_type: Schema.optional(Schema.NullOr(Schema.Number)),
            attributes: Schema.optional(Schema.Unknown),
            order: Schema.optional(Schema.NullOr(Schema.Number)),
          }),
        ),
        elements_chain: Schema.String,
      }),
    ),
  ),
});
export type EventsListOutput = typeof EventsListOutput.Type;

// The operation
/**
 * This endpoint allows you to list and filter events.
 * It is effectively deprecated and is kept only for backwards compatibility.
 * If you ever ask about it you will be advised to not use it...
 * If you want to ad-hoc list or aggregate events, use the Query endpoint instead.
 * If you want to export all events or many pages of events you should use our CDP/Batch Exports products instead.
 *
 * @param after - Only return events with a timestamp after this time. Default: now() - 24 hours.
 * @param before - Only return events with a timestamp before this time. Default: now() + 5 seconds.
 * @param distinct_id - Filter list by distinct id.
 * @param event - Filter list by event. For example `user sign up` or `$pageview`.
 * @param limit - The maximum number of results to return
 * @param offset - Allows to skip first offset rows. Will fail for value larger than 100000. Read about proper way of paginating: https://posthog.com/docs/api/queries#5-use-timestamp-based-pagination-instead-of-offset
 * @param person_id - Filter list by person id.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param properties - Filter events by event property, person property, cohort, groups and more.
 * @param select - (Experimental) JSON-serialized array of HogQL expressions to return
 * @param where - (Experimental) JSON-serialized array of HogQL expressions that must pass
 */
export const eventsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EventsListInput,
  outputSchema: EventsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
