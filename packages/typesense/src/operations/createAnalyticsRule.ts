import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface CreateAnalyticsRuleInput {}
export const CreateAnalyticsRuleInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "POST", path: "/analytics/rules" }),
  ) as unknown as Schema.Codec<CreateAnalyticsRuleInput>;

// Output Schema
export type CreateAnalyticsRuleOutput =
  | {
      name: string;
      type: "popular_queries" | "nohits_queries" | "counter" | "log";
      collection: string;
      event_type: string;
      rule_tag?: string;
      params?: {
        destination_collection?: string;
        limit?: number;
        capture_search_requests?: boolean;
        meta_fields?: string[];
        expand_query?: boolean;
        counter_field?: string;
        weight?: number;
      };
    }
  | (
      | {
          name: string;
          type: "popular_queries" | "nohits_queries" | "counter" | "log";
          collection: string;
          event_type: string;
          rule_tag?: string;
          params?: {
            destination_collection?: string;
            limit?: number;
            capture_search_requests?: boolean;
            meta_fields?: string[];
            expand_query?: boolean;
            counter_field?: string;
            weight?: number;
          };
        }
      | { error?: string }
    )[];
export const CreateAnalyticsRuleOutput =
  /*@__PURE__*/ Schema.Union([
    Schema.Struct({
      name: Schema.String,
      type: Schema.Literals([
        "popular_queries",
        "nohits_queries",
        "counter",
        "log",
      ]),
      collection: Schema.String,
      event_type: Schema.String,
      rule_tag: Schema.optional(Schema.String),
      params: Schema.optional(
        Schema.Struct({
          destination_collection: Schema.optional(Schema.String),
          limit: Schema.optional(Schema.Number),
          capture_search_requests: Schema.optional(Schema.Boolean),
          meta_fields: Schema.optional(Schema.Array(Schema.String)),
          expand_query: Schema.optional(Schema.Boolean),
          counter_field: Schema.optional(Schema.String),
          weight: Schema.optional(Schema.Number),
        }),
      ),
    }),
    Schema.Array(
      Schema.Union([
        Schema.Struct({
          name: Schema.String,
          type: Schema.Literals([
            "popular_queries",
            "nohits_queries",
            "counter",
            "log",
          ]),
          collection: Schema.String,
          event_type: Schema.String,
          rule_tag: Schema.optional(Schema.String),
          params: Schema.optional(
            Schema.Struct({
              destination_collection: Schema.optional(Schema.String),
              limit: Schema.optional(Schema.Number),
              capture_search_requests: Schema.optional(Schema.Boolean),
              meta_fields: Schema.optional(Schema.Array(Schema.String)),
              expand_query: Schema.optional(Schema.Boolean),
              counter_field: Schema.optional(Schema.String),
              weight: Schema.optional(Schema.Number),
            }),
          ),
        }),
        Schema.Struct({
          error: Schema.optional(Schema.String),
        }),
      ]),
    ),
  ]) as unknown as Schema.Codec<CreateAnalyticsRuleOutput>;

// The operation
/**
 * Create analytics rule(s)
 *
 * Create one or more analytics rules. You can send a single rule object or an array of rule objects.
 */
export const createAnalyticsRule = /*@__PURE__*/ API.make(() => ({
  inputSchema: CreateAnalyticsRuleInput,
  outputSchema: CreateAnalyticsRuleOutput,
  errors: [BadRequest] as const,
}));
