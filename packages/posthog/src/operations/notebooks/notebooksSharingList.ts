import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { SensitiveOutputNullableString } from "../../sensitive.ts";

// Input Schema
export const NotebooksSharingListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notebook_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/notebooks/{notebook_id}/sharing/",
    }),
  );
export type NotebooksSharingListInput = typeof NotebooksSharingListInput.Type;

// Output Schema
export const NotebooksSharingListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      created_at: Schema.optional(Schema.String),
      enabled: Schema.optional(Schema.Boolean),
      access_token: Schema.optional(SensitiveOutputNullableString),
      settings: Schema.optional(Schema.Unknown),
      password_required: Schema.optional(Schema.Boolean),
      share_passwords: Schema.optional(
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.Number),
            created_at: Schema.optional(Schema.String),
            note: Schema.optional(Schema.NullOr(Schema.String)),
            created_by_email: Schema.optional(Schema.String),
            is_active: Schema.optional(Schema.Boolean),
          }),
        ),
      ),
    }),
  );
export type NotebooksSharingListOutput = typeof NotebooksSharingListOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const notebooksSharingList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: NotebooksSharingListInput,
    outputSchema: NotebooksSharingListOutput,
  }),
);
