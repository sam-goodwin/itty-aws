import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListWorkflowsInput {
  organization: string;
  database: string;
  between?: string;
  page?: number;
  per_page?: number;
}
export const ListWorkflowsInput = /*@__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  between: Schema.optional(Schema.String),
  page: Schema.optional(Schema.Number),
  per_page: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/databases/{database}/workflows",
  }),
) as unknown as Schema.Codec<ListWorkflowsInput>;

// Output Schema
export interface ListWorkflowsOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: {
    id: string;
    name: string;
    number: number;
    state:
      | "pending"
      | "copying"
      | "running"
      | "stopped"
      | "verifying_data"
      | "verified_data"
      | "switching_replicas"
      | "switched_replicas"
      | "switching_primaries"
      | "switched_primaries"
      | "reversing_traffic"
      | "reversing_traffic_for_cancel"
      | "cutting_over"
      | "cutover"
      | "reversed_cutover"
      | "completed"
      | "cancelling"
      | "cancelled"
      | "error";
    created_at: string;
    updated_at: string;
    started_at: string | null;
    completed_at: string | null;
    cancelled_at: string | null;
    reversed_at: string | null;
    retried_at: string | null;
    data_copy_completed_at: string | null;
    cutover_at: string | null;
    replicas_switched: boolean;
    primaries_switched: boolean;
    switch_replicas_at: string | null;
    switch_primaries_at: string | null;
    verify_data_at: string | null;
    workflow_type: "move_tables";
    workflow_subtype: string;
    defer_secondary_keys: boolean;
    on_ddl: "IGNORE" | "STOP" | "EXEC" | "EXEC_IGNORE";
    workflow_errors: string;
    may_retry: boolean;
    may_restart: boolean;
    verified_data_stale: boolean;
    sequence_tables_applied: boolean;
    actor: { id: string; display_name: string; avatar_url: string };
    verify_data_by: { id: string; display_name: string; avatar_url: string };
    reversed_by: { id: string; display_name: string; avatar_url: string };
    switch_replicas_by: {
      id: string;
      display_name: string;
      avatar_url: string;
    };
    switch_primaries_by: {
      id: string;
      display_name: string;
      avatar_url: string;
    };
    cancelled_by: { id: string; display_name: string; avatar_url: string };
    completed_by: { id: string; display_name: string; avatar_url: string };
    retried_by: { id: string; display_name: string; avatar_url: string };
    cutover_by: { id: string; display_name: string; avatar_url: string };
    reversed_cutover_by: {
      id: string;
      display_name: string;
      avatar_url: string;
    };
    branch: {
      id: string;
      name: string;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
    };
    source_keyspace: {
      id: string;
      name: string;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
    };
    target_keyspace: {
      id: string;
      name: string;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
    };
    global_keyspace: {
      id: string;
      name: string;
      created_at: string;
      updated_at: string;
      deleted_at: string | null;
    };
  }[];
}
export const ListWorkflowsOutput = /*@__PURE__*/ Schema.Struct({
  type: Schema.String,
  current_page: Schema.Number,
  next_page: Schema.NullOr(Schema.Number),
  next_page_url: Schema.NullOr(Schema.String),
  prev_page: Schema.NullOr(Schema.Number),
  prev_page_url: Schema.NullOr(Schema.String),
  data: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      number: Schema.Number,
      state: Schema.Literals([
        "pending",
        "copying",
        "running",
        "stopped",
        "verifying_data",
        "verified_data",
        "switching_replicas",
        "switched_replicas",
        "switching_primaries",
        "switched_primaries",
        "reversing_traffic",
        "reversing_traffic_for_cancel",
        "cutting_over",
        "cutover",
        "reversed_cutover",
        "completed",
        "cancelling",
        "cancelled",
        "error",
      ]),
      created_at: Schema.String,
      updated_at: Schema.String,
      started_at: Schema.NullOr(Schema.String),
      completed_at: Schema.NullOr(Schema.String),
      cancelled_at: Schema.NullOr(Schema.String),
      reversed_at: Schema.NullOr(Schema.String),
      retried_at: Schema.NullOr(Schema.String),
      data_copy_completed_at: Schema.NullOr(Schema.String),
      cutover_at: Schema.NullOr(Schema.String),
      replicas_switched: Schema.Boolean,
      primaries_switched: Schema.Boolean,
      switch_replicas_at: Schema.NullOr(Schema.String),
      switch_primaries_at: Schema.NullOr(Schema.String),
      verify_data_at: Schema.NullOr(Schema.String),
      workflow_type: Schema.Literals(["move_tables"]),
      workflow_subtype: Schema.String,
      defer_secondary_keys: Schema.Boolean,
      on_ddl: Schema.Literals(["IGNORE", "STOP", "EXEC", "EXEC_IGNORE"]),
      workflow_errors: Schema.String,
      may_retry: Schema.Boolean,
      may_restart: Schema.Boolean,
      verified_data_stale: Schema.Boolean,
      sequence_tables_applied: Schema.Boolean,
      actor: Schema.Struct({
        id: Schema.String,
        display_name: Schema.String,
        avatar_url: Schema.String,
      }),
      verify_data_by: Schema.Struct({
        id: Schema.String,
        display_name: Schema.String,
        avatar_url: Schema.String,
      }),
      reversed_by: Schema.Struct({
        id: Schema.String,
        display_name: Schema.String,
        avatar_url: Schema.String,
      }),
      switch_replicas_by: Schema.Struct({
        id: Schema.String,
        display_name: Schema.String,
        avatar_url: Schema.String,
      }),
      switch_primaries_by: Schema.Struct({
        id: Schema.String,
        display_name: Schema.String,
        avatar_url: Schema.String,
      }),
      cancelled_by: Schema.Struct({
        id: Schema.String,
        display_name: Schema.String,
        avatar_url: Schema.String,
      }),
      completed_by: Schema.Struct({
        id: Schema.String,
        display_name: Schema.String,
        avatar_url: Schema.String,
      }),
      retried_by: Schema.Struct({
        id: Schema.String,
        display_name: Schema.String,
        avatar_url: Schema.String,
      }),
      cutover_by: Schema.Struct({
        id: Schema.String,
        display_name: Schema.String,
        avatar_url: Schema.String,
      }),
      reversed_cutover_by: Schema.Struct({
        id: Schema.String,
        display_name: Schema.String,
        avatar_url: Schema.String,
      }),
      branch: Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        created_at: Schema.String,
        updated_at: Schema.String,
        deleted_at: Schema.NullOr(Schema.String),
      }),
      source_keyspace: Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        created_at: Schema.String,
        updated_at: Schema.String,
        deleted_at: Schema.NullOr(Schema.String),
      }),
      target_keyspace: Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        created_at: Schema.String,
        updated_at: Schema.String,
        deleted_at: Schema.NullOr(Schema.String),
      }),
      global_keyspace: Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        created_at: Schema.String,
        updated_at: Schema.String,
        deleted_at: Schema.NullOr(Schema.String),
      }),
    }),
  ),
}) as unknown as Schema.Codec<ListWorkflowsOutput>;

// The operation
/**
 * List workflows
 *
 * @param organization - The name of the organization the workflow belongs to
 * @param database - The name of the database the workflow belongs to
 * @param between - Filter workflows to those active during a time range (e.g. 2025-01-01T00:00:00Z..2025-01-01T23:59:59)
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listWorkflows = /*@__PURE__*/ API.makePaginated(() => ({
  inputSchema: ListWorkflowsInput,
  outputSchema: ListWorkflowsOutput,
  errors: [Forbidden, NotFound] as const,
  pagination: {
    mode: "page",
    inputToken: "page",
    outputToken: "next_page",
    items: "data",
  },
}));
