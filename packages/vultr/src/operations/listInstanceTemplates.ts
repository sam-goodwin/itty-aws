import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListInstanceTemplatesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/instances/templates" }),
  );
export type ListInstanceTemplatesInput = typeof ListInstanceTemplatesInput.Type;

// Output Schema
export const ListInstanceTemplatesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instance_templates: Schema.optional(
      Schema.Array(
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
        }),
      ),
    ),
  });
export type ListInstanceTemplatesOutput =
  typeof ListInstanceTemplatesOutput.Type;

// The operation
/**
 * List Instance Templates
 *
 * List all instance templates in your account.
 */
export const listInstanceTemplates = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListInstanceTemplatesInput,
    outputSchema: ListInstanceTemplatesOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
