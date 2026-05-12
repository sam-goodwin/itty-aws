import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateClusterInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  region: Schema.String,
  plan: Schema.optional(Schema.String),
  instance_template: Schema.optional(Schema.String),
  label: Schema.optional(Schema.String),
  min_pool_count: Schema.optional(Schema.Number),
  desired_pool_count: Schema.optional(Schema.Number),
  hostname: Schema.optional(Schema.String),
  pkey: Schema.optional(Schema.Number),
  vlanid: Schema.optional(Schema.Number),
  notify_activate: Schema.optional(Schema.Boolean),
  os_id: Schema.optional(Schema.Number),
  app_id: Schema.optional(Schema.Number),
  image_id: Schema.optional(Schema.Number),
  gpu_fabric: Schema.optional(Schema.Boolean),
  vfs_ids: Schema.optional(Schema.Array(Schema.String)),
  use_vfs: Schema.optional(Schema.Boolean),
  vfs_label: Schema.optional(Schema.String),
  vfs_storage_size: Schema.optional(
    Schema.Struct({
      bytes: Schema.optional(Schema.Number),
      gb: Schema.optional(Schema.Number),
    }),
  ),
  use_head_node: Schema.optional(Schema.Boolean),
  head_node_plan: Schema.optional(Schema.String),
  head_node_template: Schema.optional(Schema.String),
  vpc_ids: Schema.optional(Schema.Array(Schema.String)),
}).pipe(T.Http({ method: "POST", path: "/clusters" }));
export type CreateClusterInput = typeof CreateClusterInput.Type;

// Output Schema
export const CreateClusterOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cluster: Schema.optional(
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
});
export type CreateClusterOutput = typeof CreateClusterOutput.Type;

// The operation
/**
 * Create Cluster
 *
 * Create a new cluster in a `region`. Provide exactly one of `plan` or `instance_template`.
 * When `use_vfs` is `true`, `vfs_label` and `vfs_storage_size` are required.
 * When `use_head_node` is `true`, provide exactly one of `head_node_plan` or `head_node_template`. `head_node_plan` also requires one of `os_id`, `app_id`, or `image_id`.
 */
export const createCluster = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateClusterInput,
  outputSchema: CreateClusterOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
