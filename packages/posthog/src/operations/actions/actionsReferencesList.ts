import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ActionsReferencesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/actions/{id}/references/",
    }),
  );
export type ActionsReferencesListInput = typeof ActionsReferencesListInput.Type;

// Output Schema
export const ActionsReferencesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      type: Schema.String,
      id: Schema.String,
      name: Schema.String,
      url: Schema.String,
      created_at: Schema.NullOr(Schema.String),
      created_by: Schema.NullOr(
        Schema.Struct({
          id: Schema.Number,
          uuid: Schema.String,
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.String,
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.NullOr(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    }),
  );
export type ActionsReferencesListOutput =
  typeof ActionsReferencesListOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this action.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const actionsReferencesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ActionsReferencesListInput,
    outputSchema: ActionsReferencesListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
