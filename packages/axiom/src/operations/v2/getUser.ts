import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { NotFound } from "../../errors";

// Input Schema
export const GetUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/users/{id}" }));
export type GetUserInput = typeof GetUserInput.Type;

// Output Schema
export const GetUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type GetUserOutput = typeof GetUserOutput.Type;

// The operation
/**
 * Get user by ID
 */
export const getUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetUserInput,
  outputSchema: GetUserOutput,
  errors: [NotFound] as const,
}));
