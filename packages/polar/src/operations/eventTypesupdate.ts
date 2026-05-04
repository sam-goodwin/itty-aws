import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const EventTypesupdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  label: Schema.String,
  label_property_selector: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "PATCH", path: "/v1/event-types/{id}" }));
export type EventTypesupdateInput = typeof EventTypesupdateInput.Type;

// Output Schema
export const EventTypesupdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    created_at: Schema.String,
    modified_at: Schema.Unknown,
    id: Schema.String,
    name: Schema.String,
    label: Schema.String,
    label_property_selector: Schema.optional(Schema.Unknown),
    organization_id: Schema.String,
  },
);
export type EventTypesupdateOutput = typeof EventTypesupdateOutput.Type;

// The operation
/**
 * Update Event Type
 *
 * Update an event type's label.
 * **Scopes**: `events:write`
 *
 * @param id - The event type ID.
 */
export const eventTypesupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EventTypesupdateInput,
  outputSchema: EventTypesupdateOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
