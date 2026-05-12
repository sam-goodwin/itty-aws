import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const UpdateInstanceTemplateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instancetemplateId: Schema.String.pipe(T.PathParam()),
    plan: Schema.optional(Schema.String),
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
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/instances/templates/{instancetemplateId}",
    }),
  );
export type UpdateInstanceTemplateInput =
  typeof UpdateInstanceTemplateInput.Type;

// Output Schema
export const UpdateInstanceTemplateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateInstanceTemplateOutput =
  typeof UpdateInstanceTemplateOutput.Type;

// The operation
/**
 * Update Instance Template
 *
 * Update an instance template. At least one parameter must be provided.
 *
 * @param instancetemplateId - The [Instance Template ID](#operation/list-instance-templates).
 */
export const updateInstanceTemplate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateInstanceTemplateInput,
    outputSchema: UpdateInstanceTemplateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
