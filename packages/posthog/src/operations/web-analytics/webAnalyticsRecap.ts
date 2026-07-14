import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface WebAnalyticsRecapInput {
  project_id: string;
  compare?: boolean;
  days?: number;
}
export const WebAnalyticsRecapInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  compare: Schema.optional(Schema.Boolean),
  days: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/projects/{project_id}/web_analytics/recap/",
  }),
) as unknown as Schema.Codec<WebAnalyticsRecapInput>;

// Output Schema
export interface WebAnalyticsRecapOutput {
  visitors: {
    current?: number;
    previous?: number | null;
    change?: {
      percent?: number;
      direction?: "Up" | "Down";
      color?: string;
      text?: string;
      long_text?: string;
    } | null;
  };
  pageviews: {
    current?: number;
    previous?: number | null;
    change?: {
      percent?: number;
      direction?: "Up" | "Down";
      color?: string;
      text?: string;
      long_text?: string;
    } | null;
  };
  sessions: {
    current?: number;
    previous?: number | null;
    change?: {
      percent?: number;
      direction?: "Up" | "Down";
      color?: string;
      text?: string;
      long_text?: string;
    } | null;
  };
  bounce_rate: {
    current?: number;
    previous?: number | null;
    change?: {
      percent?: number;
      direction?: "Up" | "Down";
      color?: string;
      text?: string;
      long_text?: string;
    } | null;
  };
  avg_session_duration: {
    current?: string;
    previous?: string | null;
    change?: {
      percent?: number;
      direction?: "Up" | "Down";
      color?: string;
      text?: string;
      long_text?: string;
    } | null;
  };
  top_pages: {
    host?: string;
    path?: string;
    visitors?: number;
    change?: {
      percent?: number;
      direction?: "Up" | "Down";
      color?: string;
      text?: string;
      long_text?: string;
    } | null;
  }[];
  top_sources: {
    name?: string;
    visitors?: number;
    change?: {
      percent?: number;
      direction?: "Up" | "Down";
      color?: string;
      text?: string;
      long_text?: string;
    } | null;
  }[];
  goals: {
    name?: string;
    conversions?: number;
    change?: {
      percent?: number;
      direction?: "Up" | "Down";
      color?: string;
      text?: string;
      long_text?: string;
    } | null;
  }[];
  dashboard_url: string;
  persona: {
    id: string;
    name: string;
    emoji: string;
    blurb: string;
    color: string;
  };
  highlights: {
    id: string;
    emoji: string;
    title: string;
    value: string;
    detail: string;
  }[];
  period_label: string;
  period_start: string;
  period_end: string;
  project_name: string;
  recap_url: string;
}
export const WebAnalyticsRecapOutput =
  /*@__PURE__*/ Schema.Struct({
    visitors: Schema.Struct({
      current: Schema.optional(Schema.Number),
      previous: Schema.optional(Schema.NullOr(Schema.Number)),
      change: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            percent: Schema.optional(Schema.Number),
            direction: Schema.optional(Schema.Literals(["Up", "Down"])),
            color: Schema.optional(Schema.String),
            text: Schema.optional(Schema.String),
            long_text: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
    pageviews: Schema.Struct({
      current: Schema.optional(Schema.Number),
      previous: Schema.optional(Schema.NullOr(Schema.Number)),
      change: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            percent: Schema.optional(Schema.Number),
            direction: Schema.optional(Schema.Literals(["Up", "Down"])),
            color: Schema.optional(Schema.String),
            text: Schema.optional(Schema.String),
            long_text: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
    sessions: Schema.Struct({
      current: Schema.optional(Schema.Number),
      previous: Schema.optional(Schema.NullOr(Schema.Number)),
      change: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            percent: Schema.optional(Schema.Number),
            direction: Schema.optional(Schema.Literals(["Up", "Down"])),
            color: Schema.optional(Schema.String),
            text: Schema.optional(Schema.String),
            long_text: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
    bounce_rate: Schema.Struct({
      current: Schema.optional(Schema.Number),
      previous: Schema.optional(Schema.NullOr(Schema.Number)),
      change: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            percent: Schema.optional(Schema.Number),
            direction: Schema.optional(Schema.Literals(["Up", "Down"])),
            color: Schema.optional(Schema.String),
            text: Schema.optional(Schema.String),
            long_text: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
    avg_session_duration: Schema.Struct({
      current: Schema.optional(Schema.String),
      previous: Schema.optional(Schema.NullOr(Schema.String)),
      change: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            percent: Schema.optional(Schema.Number),
            direction: Schema.optional(Schema.Literals(["Up", "Down"])),
            color: Schema.optional(Schema.String),
            text: Schema.optional(Schema.String),
            long_text: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
    top_pages: Schema.Array(
      Schema.Struct({
        host: Schema.optional(Schema.String),
        path: Schema.optional(Schema.String),
        visitors: Schema.optional(Schema.Number),
        change: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              percent: Schema.optional(Schema.Number),
              direction: Schema.optional(Schema.Literals(["Up", "Down"])),
              color: Schema.optional(Schema.String),
              text: Schema.optional(Schema.String),
              long_text: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    top_sources: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        visitors: Schema.optional(Schema.Number),
        change: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              percent: Schema.optional(Schema.Number),
              direction: Schema.optional(Schema.Literals(["Up", "Down"])),
              color: Schema.optional(Schema.String),
              text: Schema.optional(Schema.String),
              long_text: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    goals: Schema.Array(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        conversions: Schema.optional(Schema.Number),
        change: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              percent: Schema.optional(Schema.Number),
              direction: Schema.optional(Schema.Literals(["Up", "Down"])),
              color: Schema.optional(Schema.String),
              text: Schema.optional(Schema.String),
              long_text: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    dashboard_url: Schema.String,
    persona: Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      emoji: Schema.String,
      blurb: Schema.String,
      color: Schema.String,
    }),
    highlights: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        emoji: Schema.String,
        title: Schema.String,
        value: Schema.String,
        detail: Schema.String,
      }),
    ),
    period_label: Schema.String,
    period_start: Schema.String,
    period_end: Schema.String,
    project_name: Schema.String,
    recap_url: Schema.String,
  }) as unknown as Schema.Codec<WebAnalyticsRecapOutput>;

// The operation
/**
 * Weekly web analytics recap
 *
 * The 'Wrapped'-style weekly recap: everything in the weekly digest (visitors, pageviews, sessions, bounce rate, average session duration with period-over-period comparisons, top pages, top sources, and goals) plus a single derived weekly persona and a short list of screenshot-worthy highlights for the period.
 *
 * @param compare - When true (default), include period-over-period change for each metric comparing against the prior equal-length period. Set to false to skip the comparison query.
 * @param days - Lookback window in days (1–90). Defaults to 7.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const webAnalyticsRecap = /*@__PURE__*/ API.make(() => ({
  inputSchema: WebAnalyticsRecapInput,
  outputSchema: WebAnalyticsRecapOutput,
}));
