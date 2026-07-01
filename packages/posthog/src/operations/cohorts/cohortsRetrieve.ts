import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface CohortsRetrieveInput {
  id: number;
  project_id: string;
}
export const CohortsRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.Number.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/cohorts/{id}/" }),
) as unknown as Schema.Codec<CohortsRetrieveInput>;

// Output Schema
export interface CohortsRetrieveOutput {
  id?: number;
  name?: string | null;
  description?: string;
  groups?: unknown;
  deleted?: boolean;
  filters?: {
    properties?: {
      type?: "AND" | "OR";
      values?: (
        | {
            bytecode?: unknown[] | null;
            bytecode_error?: string | null;
            conditionHash?: string | null;
            type?: string;
            key?: string | number;
            value?: string;
            event_type?: string;
            time_value?: number | null;
            time_interval?: string | null;
            negation?: boolean;
            operator?: string | null;
            operator_value?: number | null;
            seq_time_interval?: string | null;
            seq_time_value?: number | null;
            seq_event?: string | number | null;
            seq_event_type?: string | null;
            total_periods?: number | null;
            min_periods?: number | null;
            event_filters?:
              | (
                  | {
                      type?: "event" | "element";
                      key?: string;
                      value?: unknown;
                      operator?: string | null;
                    }
                  | { type?: string; key?: string; value?: unknown }
                )[]
              | null;
            explicit_datetime?: string | null;
            explicit_datetime_to?: string | null;
          }
        | {
            bytecode?: unknown[] | null;
            bytecode_error?: string | null;
            conditionHash?: string | null;
            type?: string;
            key?: string;
            value?: number;
            negation?: boolean;
          }
        | {
            bytecode?: unknown[] | null;
            bytecode_error?: string | null;
            conditionHash?: string | null;
            type?: string;
            key?: string;
            operator?: string | null;
            value?: unknown;
            negation?: boolean;
          }
        | unknown
      )[];
    };
  } | null;
  query?: unknown;
  version?: number | null;
  pending_version?: number | null;
  is_calculating?: boolean;
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
  created_at?: string | null;
  last_calculation?: string | null;
  last_backfill_person_properties_at?: string | null;
  errors_calculating?: number;
  last_error_message?: string | null;
  count?: number | null;
  is_static?: boolean;
  cohort_type?:
    | "static"
    | "person_property"
    | "behavioral"
    | "realtime"
    | "analytical"
    | ""
    | null;
  experiment_set?: number[];
  _create_in_folder?: string;
  _create_static_person_ids?: string[];
}
export const CohortsRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.NullOr(Schema.String)),
  description: Schema.optional(Schema.String),
  groups: Schema.optional(Schema.Unknown),
  deleted: Schema.optional(Schema.Boolean),
  filters: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        properties: Schema.optional(
          Schema.Struct({
            type: Schema.optional(Schema.Literals(["AND", "OR"])),
            values: Schema.optional(
              Schema.Array(
                Schema.Union([
                  Schema.Struct({
                    bytecode: Schema.optional(
                      Schema.NullOr(Schema.Array(Schema.Unknown)),
                    ),
                    bytecode_error: Schema.optional(
                      Schema.NullOr(Schema.String),
                    ),
                    conditionHash: Schema.optional(
                      Schema.NullOr(Schema.String),
                    ),
                    type: Schema.optional(Schema.String),
                    key: Schema.optional(
                      Schema.Union([Schema.String, Schema.Number]),
                    ),
                    value: Schema.optional(Schema.String),
                    event_type: Schema.optional(Schema.String),
                    time_value: Schema.optional(Schema.NullOr(Schema.Number)),
                    time_interval: Schema.optional(
                      Schema.NullOr(Schema.String),
                    ),
                    negation: Schema.optional(Schema.Boolean),
                    operator: Schema.optional(Schema.NullOr(Schema.String)),
                    operator_value: Schema.optional(
                      Schema.NullOr(Schema.Number),
                    ),
                    seq_time_interval: Schema.optional(
                      Schema.NullOr(Schema.String),
                    ),
                    seq_time_value: Schema.optional(
                      Schema.NullOr(Schema.Number),
                    ),
                    seq_event: Schema.optional(
                      Schema.NullOr(
                        Schema.Union([Schema.String, Schema.Number]),
                      ),
                    ),
                    seq_event_type: Schema.optional(
                      Schema.NullOr(Schema.String),
                    ),
                    total_periods: Schema.optional(
                      Schema.NullOr(Schema.Number),
                    ),
                    min_periods: Schema.optional(Schema.NullOr(Schema.Number)),
                    event_filters: Schema.optional(
                      Schema.NullOr(
                        Schema.Array(
                          Schema.Union([
                            Schema.Struct({
                              type: Schema.optional(
                                Schema.Literals(["event", "element"]),
                              ),
                              key: Schema.optional(Schema.String),
                              value: Schema.optional(Schema.Unknown),
                              operator: Schema.optional(
                                Schema.NullOr(Schema.String),
                              ),
                            }),
                            Schema.Struct({
                              type: Schema.optional(Schema.String),
                              key: Schema.optional(Schema.String),
                              value: Schema.optional(Schema.Unknown),
                            }),
                          ]),
                        ),
                      ),
                    ),
                    explicit_datetime: Schema.optional(
                      Schema.NullOr(Schema.String),
                    ),
                    explicit_datetime_to: Schema.optional(
                      Schema.NullOr(Schema.String),
                    ),
                  }),
                  Schema.Struct({
                    bytecode: Schema.optional(
                      Schema.NullOr(Schema.Array(Schema.Unknown)),
                    ),
                    bytecode_error: Schema.optional(
                      Schema.NullOr(Schema.String),
                    ),
                    conditionHash: Schema.optional(
                      Schema.NullOr(Schema.String),
                    ),
                    type: Schema.optional(Schema.String),
                    key: Schema.optional(Schema.String),
                    value: Schema.optional(Schema.Number),
                    negation: Schema.optional(Schema.Boolean),
                  }),
                  Schema.Struct({
                    bytecode: Schema.optional(
                      Schema.NullOr(Schema.Array(Schema.Unknown)),
                    ),
                    bytecode_error: Schema.optional(
                      Schema.NullOr(Schema.String),
                    ),
                    conditionHash: Schema.optional(
                      Schema.NullOr(Schema.String),
                    ),
                    type: Schema.optional(Schema.String),
                    key: Schema.optional(Schema.String),
                    operator: Schema.optional(Schema.NullOr(Schema.String)),
                    value: Schema.optional(Schema.Unknown),
                    negation: Schema.optional(Schema.Boolean),
                  }),
                  Schema.Unknown,
                ]),
              ),
            ),
          }),
        ),
      }),
    ),
  ),
  query: Schema.optional(Schema.Unknown),
  version: Schema.optional(Schema.NullOr(Schema.Number)),
  pending_version: Schema.optional(Schema.NullOr(Schema.Number)),
  is_calculating: Schema.optional(Schema.Boolean),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
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
  created_at: Schema.optional(Schema.NullOr(Schema.String)),
  last_calculation: Schema.optional(Schema.NullOr(Schema.String)),
  last_backfill_person_properties_at: Schema.optional(
    Schema.NullOr(Schema.String),
  ),
  errors_calculating: Schema.optional(Schema.Number),
  last_error_message: Schema.optional(Schema.NullOr(Schema.String)),
  count: Schema.optional(Schema.NullOr(Schema.Number)),
  is_static: Schema.optional(Schema.Boolean),
  cohort_type: Schema.optional(
    Schema.NullOr(
      Schema.Union([
        Schema.Literals([
          "static",
          "person_property",
          "behavioral",
          "realtime",
          "analytical",
        ]),
        Schema.Literals([""]),
      ]),
    ),
  ),
  experiment_set: Schema.optional(Schema.Array(Schema.Number)),
  _create_in_folder: Schema.optional(Schema.String),
  _create_static_person_ids: Schema.optional(Schema.Array(Schema.String)),
}) as unknown as Schema.Codec<CohortsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this cohort.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const cohortsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CohortsRetrieveInput,
  outputSchema: CohortsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
