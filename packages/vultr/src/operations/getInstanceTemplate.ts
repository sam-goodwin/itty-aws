import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetInstanceTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instancetemplateId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/instances/templates/{instancetemplateId}",
    }),
  );
export type GetInstanceTemplateInput = typeof GetInstanceTemplateInput.Type;

// Output Schema
export const GetInstanceTemplateOutput =
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
export type GetInstanceTemplateOutput = typeof GetInstanceTemplateOutput.Type;

// The operation
/**
 * Get Instance Template
 *
 * Get information about an instance template.
 *
 * @param instancetemplateId - The [Instance Template ID](#operation/list-instance-templates).
 */
export const getInstanceTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInstanceTemplateInput,
  outputSchema: GetInstanceTemplateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
