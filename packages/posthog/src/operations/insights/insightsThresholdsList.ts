import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface InsightsThresholdsListInput {
  insight_id: number;
  project_id: string;
  limit?: number;
  offset?: number;
}
export const InsightsThresholdsListInput =
  /*@__PURE__*/ Schema.Struct({
    insight_id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/insights/{insight_id}/thresholds/",
    }),
  ) as unknown as Schema.Codec<InsightsThresholdsListInput>;

// Output Schema
export interface InsightsThresholdsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    created_at?: string;
    name?: string;
    configuration?: {
      bounds?: { lower?: number | null; upper?: number | null } | null;
      type?: "absolute" | "percentage";
    };
    alerts?: {
      id?: string;
      created_by?: {
        id?: number;
        uuid?: string;
        distinct_id?: string | null;
        first_name?: string;
        last_name?: string;
        email?: string;
        is_email_verified?: boolean | null;
        hedgehog_config?: Record<string, unknown> | null;
        role_at_organization?:
          | "engineering"
          | "data"
          | "product"
          | "founder"
          | "leadership"
          | "marketing"
          | "sales"
          | "other"
          | ""
          | null;
      } | null;
      created_at?: string;
      insight?: number;
      name?: string;
      subscribed_users?: number[];
      threshold?: {
        id?: string;
        created_at?: string;
        name?: string;
        configuration?: {
          bounds?: { lower?: unknown; upper?: unknown } | null;
          type?: "absolute" | "percentage";
        };
      };
      condition?: {
        type?: "absolute_value" | "relative_increase" | "relative_decrease";
      } | null;
      state?: string;
      enabled?: boolean;
      last_notified_at?: string | null;
      last_checked_at?: string | null;
      next_check_at?: string | null;
      checks?: {
        id?: string;
        created_at?: string;
        calculated_value?: number | null;
        state?: "Firing" | "Not firing" | "Errored" | "Snoozed";
        targets_notified?: boolean;
        anomaly_scores?: unknown;
        triggered_points?: unknown;
        triggered_dates?: unknown;
        interval?: string | null;
        triggered_metadata?: unknown;
        investigation_status?:
          | "pending"
          | "running"
          | "done"
          | "failed"
          | "skipped"
          | null;
        investigation_verdict?:
          | "true_positive"
          | "false_positive"
          | "inconclusive"
          | null;
        investigation_summary?: string | null;
        investigation_notebook_short_id?: string | null;
        notification_sent_at?: string | null;
        notification_suppressed_by_agent?: boolean;
      }[];
      checks_total?: number | null;
      config?:
        | {
            check_ongoing_interval?: boolean | null;
            series_index?: number;
            type?: string;
          }
        | {
            column?: string | null;
            evaluation: "last_row" | "first_row" | "any_row";
            label_column?: string | null;
            type?: string;
          }
        | {
            funnel_step?: number | null;
            metric: "conversion_from_start" | "conversion_from_previous";
            type?: string;
          }
        | null;
      detector_config?:
        | {
            detectors?: (
              | {
                  preprocessing?: unknown;
                  threshold?: unknown;
                  type?: string;
                  window?: unknown;
                }
              | {
                  multiplier?: unknown;
                  preprocessing?: unknown;
                  type?: string;
                  window?: unknown;
                }
              | {
                  lower_bound?: unknown;
                  preprocessing?: unknown;
                  type?: string;
                  upper_bound?: unknown;
                }
              | {
                  n_estimators?: unknown;
                  preprocessing?: unknown;
                  threshold?: unknown;
                  type?: string;
                  window?: unknown;
                }
              | {
                  method?: unknown;
                  n_neighbors?: unknown;
                  preprocessing?: unknown;
                  threshold?: unknown;
                  type?: string;
                  window?: unknown;
                }
              | {
                  n_bins?: unknown;
                  preprocessing?: unknown;
                  threshold?: unknown;
                  type?: string;
                  window?: unknown;
                }
              | {
                  n_neighbors?: unknown;
                  preprocessing?: unknown;
                  threshold?: unknown;
                  type?: string;
                  window?: unknown;
                }
              | {
                  kernel?: unknown;
                  nu?: unknown;
                  preprocessing?: unknown;
                  threshold?: unknown;
                  type?: string;
                  window?: unknown;
                }
            )[];
            operator?: "and" | "or";
            type?: string;
          }
        | {
            preprocessing?: {
              diffs_n?: unknown;
              lags_n?: unknown;
              smooth_n?: unknown;
            } | null;
            threshold?: number | null;
            type?: string;
            window?: number | null;
          }
        | {
            multiplier?: number | null;
            preprocessing?: {
              diffs_n?: unknown;
              lags_n?: unknown;
              smooth_n?: unknown;
            } | null;
            type?: string;
            window?: number | null;
          }
        | {
            lower_bound?: number | null;
            preprocessing?: {
              diffs_n?: unknown;
              lags_n?: unknown;
              smooth_n?: unknown;
            } | null;
            type?: string;
            upper_bound?: number | null;
          }
        | {
            n_estimators?: number | null;
            preprocessing?: {
              diffs_n?: unknown;
              lags_n?: unknown;
              smooth_n?: unknown;
            } | null;
            threshold?: number | null;
            type?: string;
            window?: number | null;
          }
        | {
            method?: "largest" | "mean" | "median" | null;
            n_neighbors?: number | null;
            preprocessing?: {
              diffs_n?: unknown;
              lags_n?: unknown;
              smooth_n?: unknown;
            } | null;
            threshold?: number | null;
            type?: string;
            window?: number | null;
          }
        | {
            n_bins?: number | null;
            preprocessing?: {
              diffs_n?: unknown;
              lags_n?: unknown;
              smooth_n?: unknown;
            } | null;
            threshold?: number | null;
            type?: string;
            window?: number | null;
          }
        | {
            n_neighbors?: number | null;
            preprocessing?: {
              diffs_n?: unknown;
              lags_n?: unknown;
              smooth_n?: unknown;
            } | null;
            threshold?: number | null;
            type?: string;
            window?: number | null;
          }
        | {
            kernel?: string | null;
            nu?: number | null;
            preprocessing?: {
              diffs_n?: unknown;
              lags_n?: unknown;
              smooth_n?: unknown;
            } | null;
            threshold?: number | null;
            type?: string;
            window?: number | null;
          }
        | null;
      calculation_interval?:
        | "every_15_minutes"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly";
      snoozed_until?: string | null;
      skip_weekend?: boolean | null;
      schedule_restriction?: {
        blocked_windows?: { start?: string; end?: string }[];
      } | null;
      last_value?: number | null;
      investigation_agent_enabled?: boolean;
      investigation_gates_notifications?: boolean;
      investigation_inconclusive_action?: "notify" | "suppress";
      search_match_type?: "exact" | "similar" | null;
    }[];
  }[];
}
export const InsightsThresholdsListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          created_at: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          configuration: Schema.optional(
            Schema.Struct({
              bounds: Schema.optional(
                Schema.NullOr(
                  Schema.Struct({
                    lower: Schema.optional(Schema.NullOr(Schema.Number)),
                    upper: Schema.optional(Schema.NullOr(Schema.Number)),
                  }),
                ),
              ),
              type: Schema.optional(
                Schema.Literals(["absolute", "percentage"]),
              ),
            }),
          ),
          alerts: Schema.optional(
            Schema.Array(
              Schema.Struct({
                id: Schema.optional(Schema.String),
                created_by: Schema.optional(
                  Schema.NullOr(
                    Schema.Struct({
                      id: Schema.optional(Schema.Number),
                      uuid: Schema.optional(Schema.String),
                      distinct_id: Schema.optional(
                        Schema.NullOr(Schema.String),
                      ),
                      first_name: Schema.optional(Schema.String),
                      last_name: Schema.optional(Schema.String),
                      email: Schema.optional(Schema.String),
                      is_email_verified: Schema.optional(
                        Schema.NullOr(Schema.Boolean),
                      ),
                      hedgehog_config: Schema.optional(
                        Schema.NullOr(
                          Schema.Record(Schema.String, Schema.Unknown),
                        ),
                      ),
                      role_at_organization: Schema.optional(
                        Schema.NullOr(
                          Schema.Union([
                            Schema.Literals([
                              "engineering",
                              "data",
                              "product",
                              "founder",
                              "leadership",
                              "marketing",
                              "sales",
                              "other",
                            ]),
                            Schema.Literals([""]),
                          ]),
                        ),
                      ),
                    }),
                  ),
                ),
                created_at: Schema.optional(Schema.String),
                insight: Schema.optional(Schema.Number),
                name: Schema.optional(Schema.String),
                subscribed_users: Schema.optional(Schema.Array(Schema.Number)),
                threshold: Schema.optional(
                  Schema.Struct({
                    id: Schema.optional(Schema.String),
                    created_at: Schema.optional(Schema.String),
                    name: Schema.optional(Schema.String),
                    configuration: Schema.optional(
                      Schema.Struct({
                        bounds: Schema.optional(
                          Schema.NullOr(
                            Schema.Struct({
                              lower: Schema.optional(Schema.Unknown),
                              upper: Schema.optional(Schema.Unknown),
                            }),
                          ),
                        ),
                        type: Schema.optional(
                          Schema.Literals(["absolute", "percentage"]),
                        ),
                      }),
                    ),
                  }),
                ),
                condition: Schema.optional(
                  Schema.NullOr(
                    Schema.Struct({
                      type: Schema.optional(
                        Schema.Literals([
                          "absolute_value",
                          "relative_increase",
                          "relative_decrease",
                        ]),
                      ),
                    }),
                  ),
                ),
                state: Schema.optional(Schema.String),
                enabled: Schema.optional(Schema.Boolean),
                last_notified_at: Schema.optional(Schema.NullOr(Schema.String)),
                last_checked_at: Schema.optional(Schema.NullOr(Schema.String)),
                next_check_at: Schema.optional(Schema.NullOr(Schema.String)),
                checks: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      id: Schema.optional(Schema.String),
                      created_at: Schema.optional(Schema.String),
                      calculated_value: Schema.optional(
                        Schema.NullOr(Schema.Number),
                      ),
                      state: Schema.optional(
                        Schema.Literals([
                          "Firing",
                          "Not firing",
                          "Errored",
                          "Snoozed",
                        ]),
                      ),
                      targets_notified: Schema.optional(Schema.Boolean),
                      anomaly_scores: Schema.optional(Schema.Unknown),
                      triggered_points: Schema.optional(Schema.Unknown),
                      triggered_dates: Schema.optional(Schema.Unknown),
                      interval: Schema.optional(Schema.NullOr(Schema.String)),
                      triggered_metadata: Schema.optional(Schema.Unknown),
                      investigation_status: Schema.optional(
                        Schema.NullOr(
                          Schema.Literals([
                            "pending",
                            "running",
                            "done",
                            "failed",
                            "skipped",
                          ]),
                        ),
                      ),
                      investigation_verdict: Schema.optional(
                        Schema.NullOr(
                          Schema.Literals([
                            "true_positive",
                            "false_positive",
                            "inconclusive",
                          ]),
                        ),
                      ),
                      investigation_summary: Schema.optional(
                        Schema.NullOr(Schema.String),
                      ),
                      investigation_notebook_short_id: Schema.optional(
                        Schema.NullOr(Schema.String),
                      ),
                      notification_sent_at: Schema.optional(
                        Schema.NullOr(Schema.String),
                      ),
                      notification_suppressed_by_agent: Schema.optional(
                        Schema.Boolean,
                      ),
                    }),
                  ),
                ),
                checks_total: Schema.optional(Schema.NullOr(Schema.Number)),
                config: Schema.optional(
                  Schema.NullOr(
                    Schema.Union([
                      Schema.Struct({
                        check_ongoing_interval: Schema.optional(
                          Schema.NullOr(Schema.Boolean),
                        ),
                        series_index: Schema.optional(Schema.Number),
                        type: Schema.optional(Schema.String),
                      }),
                      Schema.Struct({
                        column: Schema.optional(Schema.NullOr(Schema.String)),
                        evaluation: Schema.Literals([
                          "last_row",
                          "first_row",
                          "any_row",
                        ]),
                        label_column: Schema.optional(
                          Schema.NullOr(Schema.String),
                        ),
                        type: Schema.optional(Schema.String),
                      }),
                      Schema.Struct({
                        funnel_step: Schema.optional(
                          Schema.NullOr(Schema.Number),
                        ),
                        metric: Schema.Literals([
                          "conversion_from_start",
                          "conversion_from_previous",
                        ]),
                        type: Schema.optional(Schema.String),
                      }),
                    ]),
                  ),
                ),
                detector_config: Schema.optional(Schema.NullOr(Schema.Unknown)),
                calculation_interval: Schema.optional(
                  Schema.Literals([
                    "every_15_minutes",
                    "hourly",
                    "daily",
                    "weekly",
                    "monthly",
                  ]),
                ),
                snoozed_until: Schema.optional(Schema.NullOr(Schema.String)),
                skip_weekend: Schema.optional(Schema.NullOr(Schema.Boolean)),
                schedule_restriction: Schema.optional(
                  Schema.NullOr(
                    Schema.Struct({
                      blocked_windows: Schema.optional(
                        Schema.Array(
                          Schema.Struct({
                            start: Schema.optional(Schema.String),
                            end: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                    }),
                  ),
                ),
                last_value: Schema.optional(Schema.NullOr(Schema.Number)),
                investigation_agent_enabled: Schema.optional(Schema.Boolean),
                investigation_gates_notifications: Schema.optional(
                  Schema.Boolean,
                ),
                investigation_inconclusive_action: Schema.optional(
                  Schema.Literals(["notify", "suppress"]),
                ),
                search_match_type: Schema.optional(
                  Schema.NullOr(Schema.Literals(["exact", "similar"])),
                ),
              }),
            ),
          ),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<InsightsThresholdsListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsThresholdsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: InsightsThresholdsListInput,
  outputSchema: InsightsThresholdsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
