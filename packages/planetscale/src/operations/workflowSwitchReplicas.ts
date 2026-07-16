import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface WorkflowSwitchReplicasInput {
  organization: string;
  database: string;
  number: number;
}
export const WorkflowSwitchReplicasInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    number: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/organizations/{organization}/databases/{database}/workflows/{number}/switch-replicas",
    }),
  ) as unknown as Schema.Codec<WorkflowSwitchReplicasInput>;

// Output Schema
export interface WorkflowSwitchReplicasOutput {
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
  switch_replicas_by: { id: string; display_name: string; avatar_url: string };
  switch_primaries_by: { id: string; display_name: string; avatar_url: string };
  cancelled_by: { id: string; display_name: string; avatar_url: string };
  completed_by: { id: string; display_name: string; avatar_url: string };
  retried_by: { id: string; display_name: string; avatar_url: string };
  cutover_by: { id: string; display_name: string; avatar_url: string };
  reversed_cutover_by: { id: string; display_name: string; avatar_url: string };
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
}
export const WorkflowSwitchReplicasOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<WorkflowSwitchReplicasOutput>;

// The operation
/**
 * Switch replica traffic
 *
 * @param organization - The name of the organization the workflow belongs to
 * @param database - The name of the database the workflow belongs to
 * @param number - The sequence number of the workflow
 */
export const workflowSwitchReplicas = /*@__PURE__*/ API.make(() => ({
  inputSchema: WorkflowSwitchReplicasInput,
  outputSchema: WorkflowSwitchReplicasOutput,
  errors: [Forbidden, NotFound] as const,
}));
