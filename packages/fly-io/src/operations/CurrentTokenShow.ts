import * as Schema from "effect/Schema";
import { main_tokenInfoSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const CurrentTokenShowInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v1/tokens/current" }));
export type CurrentTokenShowInput = typeof CurrentTokenShowInput.Type;

// Output Schema
export const CurrentTokenShowOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    tokens: Schema.optional(
      Schema.Array(Schema.suspend(() => main_tokenInfoSchema)),
    ),
  },
);
export type CurrentTokenShowOutput = typeof CurrentTokenShowOutput.Type;

// The operation
/**
 * Get Current Token Information
 *
 * Get information about the current macaroon token(s), including organizations, apps, and whether each token is from a user or machine
 */
export const CurrentTokenShow = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CurrentTokenShowInput,
  outputSchema: CurrentTokenShowOutput,
  errors: [Forbidden] as const,
}));
