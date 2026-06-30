import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface HogFlowsPartialUpdateInput {
  id: string;
  project_id: string;
  name?: string | null;
  description?: string;
  version?: number;
  status?: "draft" | "active" | "archived";
  created_at?: string;
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
  updated_at?: string;
  trigger?: unknown;
  trigger_masking?: {
    ttl?: number | null;
    threshold?: number | null;
    hash?: string;
    bytecode?: unknown;
  } | null;
  conversion?: {
    filters?: Record<string, unknown>[];
    events?: {
      filters: {
        source?: "events" | "person-updates" | "data-warehouse-table";
        actions?: Record<string, unknown>[];
        events?: Record<string, unknown>[];
        data_warehouse?: Record<string, unknown>[];
        properties?: Record<string, unknown>[];
        bytecode?: unknown;
        transpiled?: unknown;
        filter_test_accounts?: boolean;
        bytecode_error?: string;
      };
    }[];
    window_minutes?: number | null;
    bytecode?: unknown;
  } | null;
  exit_condition?:
    | "exit_on_conversion"
    | "exit_on_trigger_not_matched"
    | "exit_on_trigger_not_matched_or_conversion"
    | "exit_only_at_end";
  edges?: {
    to: string;
    type: "continue" | "branch";
    index?: number;
    from: string;
  }[];
  actions?: {
    id?: string;
    name?: string;
    description?: string;
    on_error?: "continue" | "abort" | null;
    created_at?: number;
    updated_at?: number;
    filters?: {
      source?: "events" | "person-updates" | "data-warehouse-table";
      actions?: Record<string, unknown>[];
      events?: Record<string, unknown>[];
      data_warehouse?: Record<string, unknown>[];
      properties?: Record<string, unknown>[];
      bytecode?: unknown;
      transpiled?: unknown;
      filter_test_accounts?: boolean;
      bytecode_error?: string;
    } | null;
    type?: string;
    config?:
      | Record<string, unknown>
      | {
          condition?: {
            filters?: {
              source?: "events" | "person-updates" | "data-warehouse-table";
              actions?: Record<string, unknown>[];
              events?: Record<string, unknown>[];
              data_warehouse?: Record<string, unknown>[];
              properties?: Record<string, unknown>[];
              bytecode?: unknown;
              transpiled?: unknown;
              filter_test_accounts?: boolean;
              bytecode_error?: string;
            } | null;
            name?: string;
          };
          events?: {
            filters?: {
              source?: "events" | "person-updates" | "data-warehouse-table";
              actions?: Record<string, unknown>[];
              events?: Record<string, unknown>[];
              data_warehouse?: Record<string, unknown>[];
              properties?: Record<string, unknown>[];
              bytecode?: unknown;
              transpiled?: unknown;
              filter_test_accounts?: boolean;
              bytecode_error?: string;
            } | null;
            name?: string;
          }[];
          max_wait_duration: string;
        };
    output_variable?: unknown;
  }[];
  abort_action?: string | null;
  variables?: Record<string, string>[];
  billable_action_types?: unknown;
  schedules?: {
    id?: string;
    rrule?: string;
    starts_at?: string;
    timezone?: string;
    variables?: unknown;
    status?: "active" | "paused" | "completed";
    next_run_at?: string | null;
    created_at?: string;
    updated_at?: string;
  }[];
}
export const HogFlowsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    status: Schema.optional(Schema.Literals(["draft", "active", "archived"])),
    created_at: Schema.optional(Schema.String),
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
    updated_at: Schema.optional(Schema.String),
    trigger: Schema.optional(Schema.Unknown),
    trigger_masking: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          ttl: Schema.optional(Schema.NullOr(Schema.Number)),
          threshold: Schema.optional(Schema.NullOr(Schema.Number)),
          hash: Schema.optional(Schema.String),
          bytecode: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    conversion: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          filters: Schema.optional(
            Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          events: Schema.optional(
            Schema.Array(
              Schema.Struct({
                filters: Schema.Struct({
                  source: Schema.optional(
                    Schema.Literals([
                      "events",
                      "person-updates",
                      "data-warehouse-table",
                    ]),
                  ),
                  actions: Schema.optional(
                    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                  ),
                  events: Schema.optional(
                    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                  ),
                  data_warehouse: Schema.optional(
                    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                  ),
                  properties: Schema.optional(
                    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                  ),
                  bytecode: Schema.optional(Schema.Unknown),
                  transpiled: Schema.optional(Schema.Unknown),
                  filter_test_accounts: Schema.optional(Schema.Boolean),
                  bytecode_error: Schema.optional(Schema.String),
                }),
              }),
            ),
          ),
          window_minutes: Schema.optional(Schema.NullOr(Schema.Number)),
          bytecode: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    exit_condition: Schema.optional(
      Schema.Literals([
        "exit_on_conversion",
        "exit_on_trigger_not_matched",
        "exit_on_trigger_not_matched_or_conversion",
        "exit_only_at_end",
      ]),
    ),
    edges: Schema.optional(
      Schema.Array(
        Schema.Struct({
          to: Schema.String,
          type: Schema.Literals(["continue", "branch"]),
          index: Schema.optional(Schema.Number),
          from: Schema.String,
        }),
      ),
    ),
    actions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          on_error: Schema.optional(
            Schema.NullOr(Schema.Literals(["continue", "abort"])),
          ),
          created_at: Schema.optional(Schema.Number),
          updated_at: Schema.optional(Schema.Number),
          filters: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                source: Schema.optional(
                  Schema.Literals([
                    "events",
                    "person-updates",
                    "data-warehouse-table",
                  ]),
                ),
                actions: Schema.optional(
                  Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                events: Schema.optional(
                  Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                data_warehouse: Schema.optional(
                  Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                properties: Schema.optional(
                  Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                bytecode: Schema.optional(Schema.Unknown),
                transpiled: Schema.optional(Schema.Unknown),
                filter_test_accounts: Schema.optional(Schema.Boolean),
                bytecode_error: Schema.optional(Schema.String),
              }),
            ),
          ),
          type: Schema.optional(Schema.String),
          config: Schema.optional(
            Schema.Union([
              Schema.Record(Schema.String, Schema.Unknown),
              Schema.Struct({
                condition: Schema.optional(
                  Schema.Struct({
                    filters: Schema.optional(
                      Schema.NullOr(
                        Schema.Struct({
                          source: Schema.optional(
                            Schema.Literals([
                              "events",
                              "person-updates",
                              "data-warehouse-table",
                            ]),
                          ),
                          actions: Schema.optional(
                            Schema.Array(
                              Schema.Record(Schema.String, Schema.Unknown),
                            ),
                          ),
                          events: Schema.optional(
                            Schema.Array(
                              Schema.Record(Schema.String, Schema.Unknown),
                            ),
                          ),
                          data_warehouse: Schema.optional(
                            Schema.Array(
                              Schema.Record(Schema.String, Schema.Unknown),
                            ),
                          ),
                          properties: Schema.optional(
                            Schema.Array(
                              Schema.Record(Schema.String, Schema.Unknown),
                            ),
                          ),
                          bytecode: Schema.optional(Schema.Unknown),
                          transpiled: Schema.optional(Schema.Unknown),
                          filter_test_accounts: Schema.optional(Schema.Boolean),
                          bytecode_error: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                    name: Schema.optional(Schema.String),
                  }),
                ),
                events: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      filters: Schema.optional(
                        Schema.NullOr(
                          Schema.Struct({
                            source: Schema.optional(
                              Schema.Literals([
                                "events",
                                "person-updates",
                                "data-warehouse-table",
                              ]),
                            ),
                            actions: Schema.optional(
                              Schema.Array(
                                Schema.Record(Schema.String, Schema.Unknown),
                              ),
                            ),
                            events: Schema.optional(
                              Schema.Array(
                                Schema.Record(Schema.String, Schema.Unknown),
                              ),
                            ),
                            data_warehouse: Schema.optional(
                              Schema.Array(
                                Schema.Record(Schema.String, Schema.Unknown),
                              ),
                            ),
                            properties: Schema.optional(
                              Schema.Array(
                                Schema.Record(Schema.String, Schema.Unknown),
                              ),
                            ),
                            bytecode: Schema.optional(Schema.Unknown),
                            transpiled: Schema.optional(Schema.Unknown),
                            filter_test_accounts: Schema.optional(
                              Schema.Boolean,
                            ),
                            bytecode_error: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      name: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                max_wait_duration: Schema.String,
              }),
            ]),
          ),
          output_variable: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    abort_action: Schema.optional(Schema.NullOr(Schema.String)),
    variables: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.String)),
    ),
    billable_action_types: Schema.optional(Schema.Unknown),
    schedules: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          rrule: Schema.optional(Schema.String),
          starts_at: Schema.optional(Schema.String),
          timezone: Schema.optional(Schema.String),
          variables: Schema.optional(Schema.Unknown),
          status: Schema.optional(
            Schema.Literals(["active", "paused", "completed"]),
          ),
          next_run_at: Schema.optional(Schema.NullOr(Schema.String)),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/hog_flows/{id}/",
    }),
  ) as unknown as Schema.Codec<HogFlowsPartialUpdateInput>;

// Output Schema
export interface HogFlowsPartialUpdateOutput {
  id?: string;
  name?: string | null;
  description?: string;
  version?: number;
  status?: "draft" | "active" | "archived";
  created_at?: string;
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
  updated_at?: string;
  trigger?: unknown;
  trigger_masking?: {
    ttl?: number | null;
    threshold?: number | null;
    hash?: string;
    bytecode?: unknown;
  } | null;
  conversion?: {
    filters?: Record<string, unknown>[];
    events?: {
      filters: {
        source?: "events" | "person-updates" | "data-warehouse-table";
        actions?: Record<string, unknown>[];
        events?: Record<string, unknown>[];
        data_warehouse?: Record<string, unknown>[];
        properties?: Record<string, unknown>[];
        bytecode?: unknown;
        transpiled?: unknown;
        filter_test_accounts?: boolean;
        bytecode_error?: string;
      };
    }[];
    window_minutes?: number | null;
    bytecode?: unknown;
  } | null;
  exit_condition?:
    | "exit_on_conversion"
    | "exit_on_trigger_not_matched"
    | "exit_on_trigger_not_matched_or_conversion"
    | "exit_only_at_end";
  edges?: {
    to: string;
    type: "continue" | "branch";
    index?: number;
    from: string;
  }[];
  actions?: {
    id?: string;
    name?: string;
    description?: string;
    on_error?: "continue" | "abort" | null;
    created_at?: number;
    updated_at?: number;
    filters?: {
      source?: "events" | "person-updates" | "data-warehouse-table";
      actions?: Record<string, unknown>[];
      events?: Record<string, unknown>[];
      data_warehouse?: Record<string, unknown>[];
      properties?: Record<string, unknown>[];
      bytecode?: unknown;
      transpiled?: unknown;
      filter_test_accounts?: boolean;
      bytecode_error?: string;
    } | null;
    type?: string;
    config?:
      | Record<string, unknown>
      | {
          condition?: {
            filters?: {
              source?: "events" | "person-updates" | "data-warehouse-table";
              actions?: Record<string, unknown>[];
              events?: Record<string, unknown>[];
              data_warehouse?: Record<string, unknown>[];
              properties?: Record<string, unknown>[];
              bytecode?: unknown;
              transpiled?: unknown;
              filter_test_accounts?: boolean;
              bytecode_error?: string;
            } | null;
            name?: string;
          };
          events?: {
            filters?: {
              source?: "events" | "person-updates" | "data-warehouse-table";
              actions?: Record<string, unknown>[];
              events?: Record<string, unknown>[];
              data_warehouse?: Record<string, unknown>[];
              properties?: Record<string, unknown>[];
              bytecode?: unknown;
              transpiled?: unknown;
              filter_test_accounts?: boolean;
              bytecode_error?: string;
            } | null;
            name?: string;
          }[];
          max_wait_duration: string;
        };
    output_variable?: unknown;
  }[];
  abort_action?: string | null;
  variables?: Record<string, string>[];
  billable_action_types?: unknown;
  schedules?: {
    id?: string;
    rrule?: string;
    starts_at?: string;
    timezone?: string;
    variables?: unknown;
    status?: "active" | "paused" | "completed";
    next_run_at?: string | null;
    created_at?: string;
    updated_at?: string;
  }[];
}
export const HogFlowsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.String),
    version: Schema.optional(Schema.Number),
    status: Schema.optional(Schema.Literals(["draft", "active", "archived"])),
    created_at: Schema.optional(Schema.String),
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
    updated_at: Schema.optional(Schema.String),
    trigger: Schema.optional(Schema.Unknown),
    trigger_masking: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          ttl: Schema.optional(Schema.NullOr(Schema.Number)),
          threshold: Schema.optional(Schema.NullOr(Schema.Number)),
          hash: Schema.optional(Schema.String),
          bytecode: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    conversion: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          filters: Schema.optional(
            Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          events: Schema.optional(
            Schema.Array(
              Schema.Struct({
                filters: Schema.Struct({
                  source: Schema.optional(
                    Schema.Literals([
                      "events",
                      "person-updates",
                      "data-warehouse-table",
                    ]),
                  ),
                  actions: Schema.optional(
                    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                  ),
                  events: Schema.optional(
                    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                  ),
                  data_warehouse: Schema.optional(
                    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                  ),
                  properties: Schema.optional(
                    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                  ),
                  bytecode: Schema.optional(Schema.Unknown),
                  transpiled: Schema.optional(Schema.Unknown),
                  filter_test_accounts: Schema.optional(Schema.Boolean),
                  bytecode_error: Schema.optional(Schema.String),
                }),
              }),
            ),
          ),
          window_minutes: Schema.optional(Schema.NullOr(Schema.Number)),
          bytecode: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    exit_condition: Schema.optional(
      Schema.Literals([
        "exit_on_conversion",
        "exit_on_trigger_not_matched",
        "exit_on_trigger_not_matched_or_conversion",
        "exit_only_at_end",
      ]),
    ),
    edges: Schema.optional(
      Schema.Array(
        Schema.Struct({
          to: Schema.String,
          type: Schema.Literals(["continue", "branch"]),
          index: Schema.optional(Schema.Number),
          from: Schema.String,
        }),
      ),
    ),
    actions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.String),
          on_error: Schema.optional(
            Schema.NullOr(Schema.Literals(["continue", "abort"])),
          ),
          created_at: Schema.optional(Schema.Number),
          updated_at: Schema.optional(Schema.Number),
          filters: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                source: Schema.optional(
                  Schema.Literals([
                    "events",
                    "person-updates",
                    "data-warehouse-table",
                  ]),
                ),
                actions: Schema.optional(
                  Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                events: Schema.optional(
                  Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                data_warehouse: Schema.optional(
                  Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                properties: Schema.optional(
                  Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                bytecode: Schema.optional(Schema.Unknown),
                transpiled: Schema.optional(Schema.Unknown),
                filter_test_accounts: Schema.optional(Schema.Boolean),
                bytecode_error: Schema.optional(Schema.String),
              }),
            ),
          ),
          type: Schema.optional(Schema.String),
          config: Schema.optional(
            Schema.Union([
              Schema.Record(Schema.String, Schema.Unknown),
              Schema.Struct({
                condition: Schema.optional(
                  Schema.Struct({
                    filters: Schema.optional(
                      Schema.NullOr(
                        Schema.Struct({
                          source: Schema.optional(
                            Schema.Literals([
                              "events",
                              "person-updates",
                              "data-warehouse-table",
                            ]),
                          ),
                          actions: Schema.optional(
                            Schema.Array(
                              Schema.Record(Schema.String, Schema.Unknown),
                            ),
                          ),
                          events: Schema.optional(
                            Schema.Array(
                              Schema.Record(Schema.String, Schema.Unknown),
                            ),
                          ),
                          data_warehouse: Schema.optional(
                            Schema.Array(
                              Schema.Record(Schema.String, Schema.Unknown),
                            ),
                          ),
                          properties: Schema.optional(
                            Schema.Array(
                              Schema.Record(Schema.String, Schema.Unknown),
                            ),
                          ),
                          bytecode: Schema.optional(Schema.Unknown),
                          transpiled: Schema.optional(Schema.Unknown),
                          filter_test_accounts: Schema.optional(Schema.Boolean),
                          bytecode_error: Schema.optional(Schema.String),
                        }),
                      ),
                    ),
                    name: Schema.optional(Schema.String),
                  }),
                ),
                events: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      filters: Schema.optional(
                        Schema.NullOr(
                          Schema.Struct({
                            source: Schema.optional(
                              Schema.Literals([
                                "events",
                                "person-updates",
                                "data-warehouse-table",
                              ]),
                            ),
                            actions: Schema.optional(
                              Schema.Array(
                                Schema.Record(Schema.String, Schema.Unknown),
                              ),
                            ),
                            events: Schema.optional(
                              Schema.Array(
                                Schema.Record(Schema.String, Schema.Unknown),
                              ),
                            ),
                            data_warehouse: Schema.optional(
                              Schema.Array(
                                Schema.Record(Schema.String, Schema.Unknown),
                              ),
                            ),
                            properties: Schema.optional(
                              Schema.Array(
                                Schema.Record(Schema.String, Schema.Unknown),
                              ),
                            ),
                            bytecode: Schema.optional(Schema.Unknown),
                            transpiled: Schema.optional(Schema.Unknown),
                            filter_test_accounts: Schema.optional(
                              Schema.Boolean,
                            ),
                            bytecode_error: Schema.optional(Schema.String),
                          }),
                        ),
                      ),
                      name: Schema.optional(Schema.String),
                    }),
                  ),
                ),
                max_wait_duration: Schema.String,
              }),
            ]),
          ),
          output_variable: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    abort_action: Schema.optional(Schema.NullOr(Schema.String)),
    variables: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.String)),
    ),
    billable_action_types: Schema.optional(Schema.Unknown),
    schedules: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          rrule: Schema.optional(Schema.String),
          starts_at: Schema.optional(Schema.String),
          timezone: Schema.optional(Schema.String),
          variables: Schema.optional(Schema.Unknown),
          status: Schema.optional(
            Schema.Literals(["active", "paused", "completed"]),
          ),
          next_run_at: Schema.optional(Schema.NullOr(Schema.String)),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<HogFlowsPartialUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this hog flow.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFlowsPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HogFlowsPartialUpdateInput,
    outputSchema: HogFlowsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
