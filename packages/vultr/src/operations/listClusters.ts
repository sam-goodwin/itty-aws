import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListClustersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  per_page: Schema.optional(Schema.Number),
  cursor: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/clusters" }));
export type ListClustersInput = typeof ListClustersInput.Type;

// Output Schema
export const ListClustersOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  clusters: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        region: Schema.optional(Schema.String),
        label: Schema.optional(Schema.String),
        plan: Schema.optional(Schema.String),
        min_pool_count: Schema.optional(Schema.Number),
        desired_pool_count: Schema.optional(Schema.Number),
        hostname: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        state: Schema.optional(Schema.String),
        instance_template: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            plan: Schema.optional(Schema.String),
            label: Schema.optional(Schema.String),
            os: Schema.optional(Schema.String),
            marketplace_app: Schema.optional(Schema.String),
            marketplace_image: Schema.optional(Schema.String),
            snapshot: Schema.optional(Schema.String),
            iso: Schema.optional(Schema.String),
            ssh_keys: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                  name: Schema.optional(Schema.String),
                }),
              ),
            ),
            startup_script: Schema.optional(Schema.String),
            disk_config: Schema.optional(Schema.String),
            vfs_subscriptions: Schema.optional(
              Schema.Array(
                Schema.Struct({
                  id: Schema.optional(Schema.String),
                  label: Schema.optional(Schema.String),
                }),
              ),
            ),
            plan_details: Schema.optional(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                type: Schema.optional(Schema.String),
                cpu_manufacturer: Schema.optional(Schema.String),
                cpu_count: Schema.optional(Schema.Number),
                cpu_threads: Schema.optional(Schema.Number),
                cpu_mhz: Schema.optional(Schema.Number),
                cpu_model: Schema.optional(Schema.String),
                memory_mb: Schema.optional(Schema.Number),
                disk_gb: Schema.optional(Schema.Number),
                disk_type: Schema.optional(Schema.String),
                disk_num: Schema.optional(Schema.Number),
                bandwidth_tb: Schema.optional(Schema.Number),
                gpu_brand: Schema.optional(Schema.String),
                gpu_model: Schema.optional(Schema.String),
                gpu_count: Schema.optional(Schema.Number),
                gpu_profile: Schema.optional(Schema.String),
                gpu_profile_count: Schema.optional(Schema.Number),
                price: Schema.optional(Schema.String),
                price_hr: Schema.optional(Schema.String),
              }),
            ),
            user_data: Schema.optional(Schema.String),
          }),
        ),
        date_created: Schema.optional(Schema.String),
        cluster_type: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
        head_node_instance_template_id: Schema.optional(Schema.String),
        instances: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              label: Schema.optional(Schema.String),
              date_created: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              is_head_node: Schema.optional(Schema.Boolean),
            }),
          ),
        ),
        vpc_networks: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
  ),
  meta: Schema.optional(
    Schema.Struct({
      total: Schema.optional(Schema.Number),
      links: Schema.optional(
        Schema.Struct({
          next: Schema.optional(Schema.String),
          prev: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
});
export type ListClustersOutput = typeof ListClustersOutput.Type;

// The operation
/**
 * List Clusters
 *
 * List all clusters in your account.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listClusters = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListClustersInput,
  outputSchema: ListClustersOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
