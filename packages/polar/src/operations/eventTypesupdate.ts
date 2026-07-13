import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface EventTypesupdateInput {
  id: string;
  label: string;
  label_property_selector?: string | null;
}
export const EventTypesupdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  label: Schema.String,
  label_property_selector: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "PATCH", path: "/v1/event-types/{id}" }),
) as unknown as Schema.Codec<EventTypesupdateInput>;

// Output Schema
export interface EventTypesupdateOutput {
  created_at: string;
  modified_at: string | null;
  id: string;
  name: string;
  label: string;
  label_property_selector?: string | null;
  organization_id: string;
}
export const EventTypesupdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    id: Schema.String,
    name: Schema.String,
    label: Schema.String,
    label_property_selector: Schema.optional(Schema.NullOr(Schema.String)),
    organization_id: Schema.String,
  },
) as unknown as Schema.Codec<EventTypesupdateOutput>;

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
}));
