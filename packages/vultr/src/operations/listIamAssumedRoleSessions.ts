import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ListIamAssumedRoleSessionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v2/assumed-roles/users/{user_id}/sessions",
    }),
  );
export type ListIamAssumedRoleSessionsInput =
  typeof ListIamAssumedRoleSessionsInput.Type;

// Output Schema
export const ListIamAssumedRoleSessionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    assumed_role_sessions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          session_token: Schema.optional(SensitiveString),
          user_id: Schema.optional(Schema.String),
          oidc_issuer_id: Schema.optional(Schema.String),
          role_id: Schema.optional(Schema.String),
          session_name: Schema.optional(Schema.String),
          auth_method: Schema.optional(Schema.String),
          expires_at: Schema.optional(Schema.String),
          assumed_at: Schema.optional(Schema.String),
          remaining_duration: Schema.optional(Schema.Number),
          conditions_met: Schema.optional(Schema.Boolean),
          source_ip: Schema.optional(Schema.String),
          s3_credentials: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        total: Schema.optional(Schema.Number),
        links: Schema.optional(
          Schema.Struct({
            next: Schema.optional(Schema.String),
            prev: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  });
export type ListIamAssumedRoleSessionsOutput =
  typeof ListIamAssumedRoleSessionsOutput.Type;

// The operation
/**
 * List Assumed Role Sessions
 *
 * List all assumed-role sessions for a User.
 *
 * @param user_id - The User ID.
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listIamAssumedRoleSessions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListIamAssumedRoleSessionsInput,
    outputSchema: ListIamAssumedRoleSessionsOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
