import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import {
  SensitiveNullableString,
  SensitiveOutputNullableString,
} from "../../sensitive.ts";

// Input Schema
export const NotebooksSharingRefreshCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    notebook_id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    created_at: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    access_token: Schema.optional(SensitiveNullableString),
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/notebooks/{notebook_id}/sharing/refresh/",
    }),
  );
export type NotebooksSharingRefreshCreateInput =
  typeof NotebooksSharingRefreshCreateInput.Type;

// Output Schema
export const NotebooksSharingRefreshCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type NotebooksSharingRefreshCreateOutput =
  typeof NotebooksSharingRefreshCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const notebooksSharingRefreshCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: NotebooksSharingRefreshCreateInput,
    outputSchema: NotebooksSharingRefreshCreateOutput,
  }));
