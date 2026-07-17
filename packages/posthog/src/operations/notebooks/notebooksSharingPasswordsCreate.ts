import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import {
  SensitiveNullableString,
  SensitiveOutputNullableString,
} from "../../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface NotebooksSharingPasswordsCreateInput {
  notebook_id: string;
  project_id: string;
  created_at?: string;
  enabled?: boolean;
  access_token?: string | Redacted.Redacted<string> | null;
  settings?: unknown;
  password_required?: boolean;
  share_passwords?: {
    id?: number;
    created_at?: string;
    note?: string | null;
    created_by_email?: string;
    is_active?: boolean;
  }[];
}
export const NotebooksSharingPasswordsCreateInput =
  /*@__PURE__*/ Schema.Struct({
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
      path: "/api/projects/{project_id}/notebooks/{notebook_id}/sharing/passwords/",
    }),
  ) as unknown as Schema.Codec<NotebooksSharingPasswordsCreateInput>;

// Output Schema
export interface NotebooksSharingPasswordsCreateOutput {
  created_at?: string;
  enabled?: boolean;
  access_token?: Redacted.Redacted<string> | null;
  settings?: unknown;
  password_required?: boolean;
  share_passwords?: {
    id?: number;
    created_at?: string;
    note?: string | null;
    created_by_email?: string;
    is_active?: boolean;
  }[];
}
export const NotebooksSharingPasswordsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<NotebooksSharingPasswordsCreateOutput>;

// The operation
/**
 * Create a new password for the sharing configuration.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const notebooksSharingPasswordsCreate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: NotebooksSharingPasswordsCreateInput,
    outputSchema: NotebooksSharingPasswordsCreateOutput,
  }));
