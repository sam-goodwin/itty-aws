import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface MachinesOrgListInput {
  org_slug: string;
  include_deleted?: boolean;
  region?: string;
  state?: string;
  summary?: boolean;
  updated_after?: string;
  cursor?: string;
  limit?: number;
}
export const MachinesOrgListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  org_slug: Schema.String.pipe(T.PathParam()),
  include_deleted: Schema.optional(Schema.Boolean),
  region: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  summary: Schema.optional(Schema.Boolean),
  updated_after: Schema.optional(Schema.String),
  cursor: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/orgs/{org_slug}/machines" }),
) as unknown as Schema.Codec<MachinesOrgListInput>;

// Output Schema
export interface MachinesOrgListOutput {
  error_regions?: string[];
  last_machine_id?: string;
  last_updated_at?: string;
  machines?: {
    app_name?: string;
    config?: {
      guest?: {
        cpu_kind?: string;
        cpus?: number;
        gpu_kind?: string;
        gpus?: number;
        host_dedication_id?: string;
        kernel_args?: string[];
        max_memory_mb?: number;
        memory_mb?: number;
        persist_rootfs?: "never" | "always" | "restart";
      };
      image?: string;
      metadata?: Record<string, string>;
    };
    created_at?: string;
    id?: string;
    name?: string;
    private_ip?: string;
    region?: string;
    state?: string;
    updated_at?: string;
    version?: string;
  }[];
  next_cursor?: string;
}
export const MachinesOrgListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  error_regions: Schema.optional(Schema.Array(Schema.String)),
  last_machine_id: Schema.optional(Schema.String),
  last_updated_at: Schema.optional(Schema.String),
  machines: Schema.optional(
    Schema.Array(
      Schema.Struct({
        app_name: Schema.optional(Schema.String),
        config: Schema.optional(
          Schema.Struct({
            guest: Schema.optional(
              Schema.Struct({
                cpu_kind: Schema.optional(Schema.String),
                cpus: Schema.optional(Schema.Number),
                gpu_kind: Schema.optional(Schema.String),
                gpus: Schema.optional(Schema.Number),
                host_dedication_id: Schema.optional(Schema.String),
                kernel_args: Schema.optional(Schema.Array(Schema.String)),
                max_memory_mb: Schema.optional(Schema.Number),
                memory_mb: Schema.optional(Schema.Number),
                persist_rootfs: Schema.optional(
                  Schema.Literals(["never", "always", "restart"]),
                ),
              }),
            ),
            image: Schema.optional(Schema.String),
            metadata: Schema.optional(
              Schema.Record(Schema.String, Schema.String),
            ),
          }),
        ),
        created_at: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        private_ip: Schema.optional(Schema.String),
        region: Schema.optional(Schema.String),
        state: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
        version: Schema.optional(Schema.String),
      }),
    ),
  ),
  next_cursor: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<MachinesOrgListOutput>;

// The operation
/**
 * List All Machines
 *
 * List all Machines associated with a specific organization. Machines are sorted by their `updated_at` timestamps, oldest to newest.
 * This API call represents "a point in time". Recent machine changes, including creations and destructions, may take time to propagate. When polling with `updated_after`, offset your timestamps to catch late-arriving events.
 *
 * @param org_slug - Fly Organization Slug
 * @param include_deleted - Include deleted machines
 * @param region - Region filter
 * @param state - Comma separated list of states to filter (created, started, stopped, suspended)
 * @param summary - Omit config from responses
 * @param updated_after - Only return machines updated after this time. Timestamp must be in the RFC 3339 format
 * @param cursor - Pagination cursor from previous response (takes precedence over updated_after). Note that there is no guarantee that all machines returned by this endpoint are sorted by their updated_at fields. Pagination may reveal machines older than the last updated_at.
 * @param limit - The number of machines to fetch (max of 1000). This limit is advisory. Responses may be shorter, or even empty, even when more machines remain. If omitted, the maximum is used
 */
export const MachinesOrgList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MachinesOrgListInput,
  outputSchema: MachinesOrgListOutput,
  errors: [Forbidden, NotFound] as const,
}));
