import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface CreateAnalyticsEventInput {
  name: string;
  event_type: string;
  data: {
    user_id?: string;
    doc_id?: string;
    doc_ids?: string[];
    q?: string;
    analytics_tag?: string;
  };
}
export const CreateAnalyticsEventInput =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String,
    event_type: Schema.String,
    data: Schema.Struct({
      user_id: Schema.optional(Schema.String),
      doc_id: Schema.optional(Schema.String),
      doc_ids: Schema.optional(Schema.Array(Schema.String)),
      q: Schema.optional(Schema.String),
      analytics_tag: Schema.optional(Schema.String),
    }),
  }).pipe(
    T.Http({ method: "POST", path: "/analytics/events" }),
  ) as unknown as Schema.Codec<CreateAnalyticsEventInput>;

// Output Schema
export interface CreateAnalyticsEventOutput {
  ok: boolean;
}
export const CreateAnalyticsEventOutput =
  /*@__PURE__*/ Schema.Struct({
    ok: Schema.Boolean,
  }) as unknown as Schema.Codec<CreateAnalyticsEventOutput>;

// The operation
/**
 * Create an analytics event
 *
 * Submit a single analytics event. The event must correspond to an existing analytics rule by name.
 */
export const createAnalyticsEvent = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateAnalyticsEventInput,
  outputSchema: CreateAnalyticsEventOutput,
  errors: [BadRequest] as const,
}));
