import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface UserlandUsersControllerDelete0Input {
  id: string;
}
export const UserlandUsersControllerDelete0Input =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/user_management/users/{id}" }),
  ) as unknown as Schema.Codec<UserlandUsersControllerDelete0Input>;

// Output Schema
export type UserlandUsersControllerDelete0Output = void;
export const UserlandUsersControllerDelete0Output =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<UserlandUsersControllerDelete0Output>;

// The operation
/**
 * Delete a user
 *
 * Permanently deletes a user in the current environment. It cannot be undone.
 *
 * @param id - The unique ID of the user.
 */
export const UserlandUsersControllerDelete0 =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerDelete0Input,
    outputSchema: UserlandUsersControllerDelete0Output,
    errors: [NotFound] as const,
  }));
