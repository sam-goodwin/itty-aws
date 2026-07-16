import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface UsersDestroyInput {
  uuid: string;
}
export const UsersDestroyInput = /*@__PURE__*/ Schema.Struct({
  uuid: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/api/users/{uuid}/" }),
) as unknown as Schema.Codec<UsersDestroyInput>;

// Output Schema
export type UsersDestroyOutput = void;
export const UsersDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<UsersDestroyOutput>;

// The operation
export const usersDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: UsersDestroyInput,
  outputSchema: UsersDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
