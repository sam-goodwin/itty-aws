import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteGroupDmUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    channel_id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "DELETE",
    path: "/channels/{channel_id}/recipients/{user_id}",
  }),
);
export type DeleteGroupDmUserInput = typeof DeleteGroupDmUserInput.Type;

// Output Schema
export const DeleteGroupDmUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteGroupDmUserOutput = typeof DeleteGroupDmUserOutput.Type;

// The operation
export const deleteGroupDmUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteGroupDmUserInput,
  outputSchema: DeleteGroupDmUserOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
