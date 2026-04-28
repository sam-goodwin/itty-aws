import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const UsersDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  uuid: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/api/users/{uuid}/" }));
export type UsersDestroyInput = typeof UsersDestroyInput.Type;

// Output Schema
export const UsersDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UsersDestroyOutput = typeof UsersDestroyOutput.Type;

// The operation
export const usersDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UsersDestroyInput,
  outputSchema: UsersDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
