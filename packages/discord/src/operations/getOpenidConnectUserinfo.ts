import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetOpenidConnectUserinfoInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/oauth2/userinfo" }),
  );
export type GetOpenidConnectUserinfoInput =
  typeof GetOpenidConnectUserinfoInput.Type;

// Output Schema
export const GetOpenidConnectUserinfoOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sub: Schema.String,
    email: Schema.optional(Schema.NullOr(Schema.String)),
    email_verified: Schema.optional(Schema.Boolean),
    preferred_username: Schema.optional(Schema.String),
    nickname: Schema.optional(Schema.NullOr(Schema.String)),
    picture: Schema.optional(Schema.String),
    locale: Schema.optional(Schema.String),
  });
export type GetOpenidConnectUserinfoOutput =
  typeof GetOpenidConnectUserinfoOutput.Type;

// The operation
export const getOpenidConnectUserinfo = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetOpenidConnectUserinfoInput,
    outputSchema: GetOpenidConnectUserinfoOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
