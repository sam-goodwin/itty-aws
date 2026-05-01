import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ProjectSecretApiKeysCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    mask_value: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(Schema.NullOr(Schema.Number)),
    last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_rolled_at: Schema.optional(Schema.NullOr(Schema.String)),
    scopes: Schema.optional(Schema.Array(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/project_secret_api_keys/",
    }),
  );
export type ProjectSecretApiKeysCreateInput =
  typeof ProjectSecretApiKeysCreateInput.Type;

// Output Schema
export const ProjectSecretApiKeysCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
    mask_value: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(Schema.NullOr(Schema.Number)),
    last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
    last_rolled_at: Schema.optional(Schema.NullOr(Schema.String)),
    scopes: Schema.optional(Schema.Array(Schema.String)),
  });
export type ProjectSecretApiKeysCreateOutput =
  typeof ProjectSecretApiKeysCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const projectSecretApiKeysCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectSecretApiKeysCreateInput,
    outputSchema: ProjectSecretApiKeysCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
