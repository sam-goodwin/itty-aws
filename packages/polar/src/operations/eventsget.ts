import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface EventsgetInput {
  id: string;
}
export const EventsgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/events/{id}" }),
) as unknown as Schema.Codec<EventsgetInput>;

// Output Schema
export type EventsgetOutput =
  | unknown
  | {
      id: string;
      timestamp: string;
      organization_id: string;
      customer_id: string | null;
      customer: unknown | null;
      external_customer_id: string | null;
      member_id?: string | null;
      external_member_id?: string | null;
      child_count?: number;
      parent_id?: string | null;
      label: string;
      name: string;
      source: string;
      metadata: {
        _cost?: { amount: string; currency: string };
        _llm?: {
          vendor: string;
          model: string;
          prompt?: string | null;
          response?: string | null;
          input_tokens: number;
          cached_input_tokens?: number;
          output_tokens: number;
          total_tokens: number;
        };
      };
    };
export const EventsgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
  Schema.Unknown,
  Schema.Struct({
    id: Schema.String,
    timestamp: Schema.String,
    organization_id: Schema.String,
    customer_id: Schema.NullOr(Schema.String),
    customer: Schema.NullOr(Schema.Unknown),
    external_customer_id: Schema.NullOr(Schema.String),
    member_id: Schema.optional(Schema.NullOr(Schema.String)),
    external_member_id: Schema.optional(Schema.NullOr(Schema.String)),
    child_count: Schema.optional(Schema.Number),
    parent_id: Schema.optional(Schema.NullOr(Schema.String)),
    label: Schema.String,
    name: Schema.String,
    source: Schema.String,
    metadata: Schema.Struct({
      _cost: Schema.optional(
        Schema.Struct({
          amount: Schema.String,
          currency: Schema.String,
        }),
      ),
      _llm: Schema.optional(
        Schema.Struct({
          vendor: Schema.String,
          model: Schema.String,
          prompt: Schema.optional(Schema.NullOr(Schema.String)),
          response: Schema.optional(Schema.NullOr(Schema.String)),
          input_tokens: Schema.Number,
          cached_input_tokens: Schema.optional(Schema.Number),
          output_tokens: Schema.Number,
          total_tokens: Schema.Number,
        }),
      ),
    }),
  }),
]) as unknown as Schema.Codec<EventsgetOutput>;

// The operation
/**
 * Get Event
 *
 * Get an event by ID.
 * **Scopes**: `events:read` `events:write`
 *
 * @param id - The event ID.
 */
export const eventsget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EventsgetInput,
  outputSchema: EventsgetOutput,
}));
