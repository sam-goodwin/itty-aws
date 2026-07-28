import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface EventsingestInput {
  events: ReadonlyArray<
    | {
        timestamp?: string;
        name: string;
        organization_id?: string | null;
        external_id?: string | null;
        parent_id?: string | null;
        metadata?: {
          _cost?: { amount: number | string; currency: string };
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
        customer_id: string;
        member_id?: string | null;
      }
    | {
        timestamp?: string;
        name: string;
        organization_id?: string | null;
        external_id?: string | null;
        parent_id?: string | null;
        metadata?: {
          _cost?: { amount: number | string; currency: string };
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
        external_customer_id: string;
        external_member_id?: string | null;
      }
  >;
}
export const EventsingestInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  events: Schema.Array(
    Schema.Union([
      Schema.Struct({
        timestamp: Schema.optional(Schema.String),
        name: Schema.String,
        organization_id: Schema.optional(Schema.NullOr(Schema.String)),
        external_id: Schema.optional(Schema.NullOr(Schema.String)),
        parent_id: Schema.optional(Schema.NullOr(Schema.String)),
        metadata: Schema.optional(
          Schema.Struct({
            _cost: Schema.optional(
              Schema.Struct({
                amount: Schema.Union([Schema.Number, Schema.String]),
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
        ),
        customer_id: Schema.String,
        member_id: Schema.optional(Schema.NullOr(Schema.String)),
      }),
      Schema.Struct({
        timestamp: Schema.optional(Schema.String),
        name: Schema.String,
        organization_id: Schema.optional(Schema.NullOr(Schema.String)),
        external_id: Schema.optional(Schema.NullOr(Schema.String)),
        parent_id: Schema.optional(Schema.NullOr(Schema.String)),
        metadata: Schema.optional(
          Schema.Struct({
            _cost: Schema.optional(
              Schema.Struct({
                amount: Schema.Union([Schema.Number, Schema.String]),
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
        ),
        external_customer_id: Schema.String,
        external_member_id: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ]),
  ),
}).pipe(
  T.Http({ method: "POST", path: "/v1/events/ingest" }),
) as unknown as Schema.Codec<EventsingestInput>;

// Output Schema
export interface EventsingestOutput {
  inserted: number;
  duplicates?: number;
}
export const EventsingestOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  inserted: Schema.Number,
  duplicates: Schema.optional(Schema.Number),
}) as unknown as Schema.Codec<EventsingestOutput>;

// The operation
/**
 * Ingest Events
 *
 * Ingest batch of events.
 * **Scopes**: `events:write`
 */
export const eventsingest = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EventsingestInput,
  outputSchema: EventsingestOutput,
}));
