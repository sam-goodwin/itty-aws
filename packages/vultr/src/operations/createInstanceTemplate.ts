import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateInstanceTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    plan: Schema.String,
    label: Schema.optional(Schema.String),
    iso_id: Schema.optional(Schema.String),
    marketplace_app_id: Schema.optional(Schema.Number),
    marketplace_image_id: Schema.optional(Schema.Number),
    os_id: Schema.optional(Schema.Number),
    snapshot_id: Schema.optional(Schema.String),
    ssh_key_ids: Schema.optional(Schema.Array(Schema.String)),
    vfs_ids: Schema.optional(Schema.Array(Schema.String)),
    template: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    user_data: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/instances/templates" }));
export type CreateInstanceTemplateInput =
  typeof CreateInstanceTemplateInput.Type;

// Output Schema
export const CreateInstanceTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type CreateInstanceTemplateOutput =
  typeof CreateInstanceTemplateOutput.Type;

// The operation
/**
 * Create Instance Template
 *
 * Create a new instance template.
 */
export const createInstanceTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateInstanceTemplateInput,
    outputSchema: CreateInstanceTemplateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
