import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CurrentTokenShowInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/tokens/current" }));
export type CurrentTokenShowInput = typeof CurrentTokenShowInput.Type;

// Output Schema
export const CurrentTokenShowOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    tokens: Schema.optional(
      Schema.Array(
        Schema.Struct({
          apps: Schema.optional(Schema.Array(Schema.String)),
          org_slug: Schema.optional(Schema.String),
          organization: Schema.optional(Schema.String),
          restricted_to_machine: Schema.optional(Schema.String),
          source_machine_id: Schema.optional(Schema.String),
          token_id: Schema.optional(Schema.String),
          user: Schema.optional(Schema.String),
        }),
      ),
    ),
  },
);
export type CurrentTokenShowOutput = typeof CurrentTokenShowOutput.Type;

// The operation
/**
 * Get Current Token Information
 *
 * Get information about the current macaroon token(s), including organizations, apps, user identity hashes, and machine restrictions
 */
export const CurrentTokenShow = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CurrentTokenShowInput,
  outputSchema: CurrentTokenShowOutput,
}));
