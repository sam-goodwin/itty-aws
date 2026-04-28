import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";

// Input Schema
export const UpdateCurrentUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    name: Schema.String,
  },
).pipe(T.Http({ method: "PUT", path: "/v2/user" }));
export type UpdateCurrentUserInput = typeof UpdateCurrentUserInput.Type;

// Output Schema
export const UpdateCurrentUserOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    email: Schema.String,
    id: Schema.String,
    name: Schema.String,
    role: Schema.optional(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
      }),
    ),
  });
export type UpdateCurrentUserOutput = typeof UpdateCurrentUserOutput.Type;

// The operation
/**
 * Update current user
 */
export const updateCurrentUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateCurrentUserInput,
  outputSchema: UpdateCurrentUserOutput,
}));
