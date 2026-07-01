import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface UsersLoginSessionsListInput {
  uuid: string;
  email?: string;
  is_staff?: boolean;
}
export const UsersLoginSessionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
    email: Schema.optional(Schema.String),
    is_staff: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "GET", path: "/api/users/{uuid}/login_sessions/" }),
  ) as unknown as Schema.Codec<UsersLoginSessionsListInput>;

// Output Schema
export type UsersLoginSessionsListOutput = {
  id: string;
  created_at: string | null;
  last_activity: string;
  location: string;
  device: string;
  login_method: string;
  is_current: boolean;
}[];
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
  ) as unknown as Schema.Codec<UsersLoginSessionsListOutput>;

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
