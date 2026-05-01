import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";
import { SensitiveNullableString } from "../../sensitive.ts";

// Input Schema
export const InsightsSharingPasswordsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    insight_id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    created_at: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    access_token: Schema.optional(SensitiveNullableString),
    settings: Schema.optional(Schema.NullOr(Schema.Unknown)),
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
      path: "/api/projects/{project_id}/insights/{insight_id}/sharing/passwords/",
    }),
  );
export type InsightsSharingPasswordsCreateInput =
  typeof InsightsSharingPasswordsCreateInput.Type;

// Output Schema
export const InsightsSharingPasswordsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    created_at: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    access_token: Schema.optional(SensitiveNullableString),
    settings: Schema.optional(Schema.NullOr(Schema.Unknown)),
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
export type InsightsSharingPasswordsCreateOutput =
  typeof InsightsSharingPasswordsCreateOutput.Type;

// The operation
/**
 * Create a new password for the sharing configuration.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsSharingPasswordsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: InsightsSharingPasswordsCreateInput,
    outputSchema: InsightsSharingPasswordsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
