import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const EventsControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
    events: Schema.optional(Schema.String),
    range_start: Schema.optional(Schema.String),
    range_end: Schema.optional(Schema.String),
    organization_id: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/events" }));
export type EventsControllerListInput = typeof EventsControllerListInput.Type;

// Output Schema
export const EventsControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        event: Schema.String,
        data: Schema.Record(Schema.String, Schema.Unknown),
        created_at: Schema.String,
        context: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      }),
    ),
    list_metadata: Schema.Struct({
      after: Schema.NullOr(Schema.String),
    }),
  });
export type EventsControllerListOutput = typeof EventsControllerListOutput.Type;

// The operation
/**
 * List events
 *
 * List events for the current environment.
 *
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `before="obj_123"` to fetch a new batch of objects before `"obj_123"`.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list. For example, if you make a list request and receive 100 objects, ending with `"obj_123"`, your subsequent call can include `after="obj_123"` to fetch a new batch of objects after `"obj_123"`.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time. Supported values are `"asc"` (ascending), `"desc"` (descending), and `"normal"` (descending with reversed cursor semantics where `before` fetches older records and `after` fetches newer records). Defaults to descending.
 * @param events - Filter events by one or more event types (e.g. `dsync.user.created`).
 * @param range_start - ISO-8601 date string to filter events created after this date.
 * @param range_end - ISO-8601 date string to filter events created before this date.
 * @param organization_id - Filter events by the [Organization](/reference/organization) that the event is associated with.
 */
export const EventsControllerList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EventsControllerListInput,
    outputSchema: EventsControllerListOutput,
    errors: [BadRequest, UnprocessableEntity] as const,
  }),
);
