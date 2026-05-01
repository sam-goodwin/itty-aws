import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ProjectSecretApiKeysListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/project_secret_api_keys/",
    }),
  );
export type ProjectSecretApiKeysListInput =
  typeof ProjectSecretApiKeysListInput.Type;

// Output Schema
export const ProjectSecretApiKeysListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          label: Schema.optional(Schema.String),
          value: Schema.optional(Schema.String),
          mask_value: Schema.optional(Schema.NullOr(Schema.String)),
          created_at: Schema.optional(Schema.String),
          created_by: Schema.optional(Schema.NullOr(Schema.Number)),
          last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
          last_rolled_at: Schema.optional(Schema.NullOr(Schema.String)),
          scopes: Schema.optional(Schema.Array(Schema.String)),
        }),
      ),
    ),
  });
export type ProjectSecretApiKeysListOutput =
  typeof ProjectSecretApiKeysListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const projectSecretApiKeysList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ProjectSecretApiKeysListInput,
    outputSchema: ProjectSecretApiKeysListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
