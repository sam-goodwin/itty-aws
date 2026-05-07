import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const CreateDmInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  recipient_id: Schema.optional(Schema.Unknown),
  access_tokens: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  nicks: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.NullOr(Schema.String))),
  ),
}).pipe(T.Http({ method: "POST", path: "/users/@me/channels" }));
export type CreateDmInput = typeof CreateDmInput.Type;

// Output Schema
export const CreateDmOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type CreateDmOutput = typeof CreateDmOutput.Type;

// The operation
export const createDm = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateDmInput,
  outputSchema: CreateDmOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
