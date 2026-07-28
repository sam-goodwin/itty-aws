import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface Oauth2userinfoInput {}
export const Oauth2userinfoInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "/v1/oauth2/userinfo" }),
) as unknown as Schema.Codec<Oauth2userinfoInput>;

// Output Schema
export type Oauth2userinfoOutput =
  | {
      sub: string;
      name?: string | null;
      email?: string | null;
      email_verified?: boolean | null;
    }
  | { sub: string; name?: string | null };
export const Oauth2userinfoOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
  Schema.Struct({
    sub: Schema.String,
    name: Schema.optional(Schema.NullOr(Schema.String)),
    email: Schema.optional(Schema.NullOr(Schema.String)),
    email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }),
  Schema.Struct({
    sub: Schema.String,
    name: Schema.optional(Schema.NullOr(Schema.String)),
  }),
]) as unknown as Schema.Codec<Oauth2userinfoOutput>;

// The operation
/**
 * Get User Info
 *
 * Get information about the authenticated user.
 */
export const oauth2userinfo = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: Oauth2userinfoInput,
  outputSchema: Oauth2userinfoOutput,
}));
