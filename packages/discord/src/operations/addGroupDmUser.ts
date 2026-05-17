import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveNullableString } from "../sensitive.ts";

// Input Schema
export const AddGroupDmUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  channel_id: Schema.String.pipe(T.PathParam()),
  user_id: Schema.String.pipe(T.PathParam()),
  access_token: Schema.optional(SensitiveNullableString),
  nick: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({
    method: "PUT",
    path: "/channels/{channel_id}/recipients/{user_id}",
  }),
);
export type AddGroupDmUserInput = typeof AddGroupDmUserInput.Type;

// Output Schema
export const AddGroupDmUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type AddGroupDmUserOutput = typeof AddGroupDmUserOutput.Type;

// The operation
export const addGroupDmUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddGroupDmUserInput,
  outputSchema: AddGroupDmUserOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
