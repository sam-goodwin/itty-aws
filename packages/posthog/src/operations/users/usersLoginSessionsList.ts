import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const UsersLoginSessionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
    email: Schema.optional(Schema.String),
    is_staff: Schema.optional(Schema.Boolean),
  }).pipe(T.Http({ method: "GET", path: "/api/users/{uuid}/login_sessions/" }));
export type UsersLoginSessionsListInput =
  typeof UsersLoginSessionsListInput.Type;

// Output Schema
export const UsersLoginSessionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.String,
      created_at: Schema.NullOr(Schema.String),
      last_activity: Schema.String,
      location: Schema.String,
      device: Schema.String,
      login_method: Schema.String,
      is_current: Schema.Boolean,
    }),
  );
export type UsersLoginSessionsListOutput =
  typeof UsersLoginSessionsListOutput.Type;

// The operation
/**
 * List the cookie-auth login sessions for the current user. Self-only — never another user.
 */
export const usersLoginSessionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UsersLoginSessionsListInput,
    outputSchema: UsersLoginSessionsListOutput,
  }),
);
