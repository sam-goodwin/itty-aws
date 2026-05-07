import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetPublicKeysInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/oauth2/keys" }));
export type GetPublicKeysInput = typeof GetPublicKeysInput.Type;

// Output Schema
export const GetPublicKeysOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  keys: Schema.Array(
    Schema.Struct({
      kty: Schema.String,
      use: Schema.String,
      kid: Schema.String,
      n: Schema.String,
      e: Schema.String,
      alg: Schema.String,
    }),
  ),
});
export type GetPublicKeysOutput = typeof GetPublicKeysOutput.Type;

// The operation
export const getPublicKeys = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetPublicKeysInput,
  outputSchema: GetPublicKeysOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
