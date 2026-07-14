import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface ApiKeysControllerDeleteInput {
  id: string;
}
export const ApiKeysControllerDeleteInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/api_keys/{id}" }),
  ) as unknown as Schema.Codec<ApiKeysControllerDeleteInput>;

// Output Schema
export type ApiKeysControllerDeleteOutput = void;
export const ApiKeysControllerDeleteOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ApiKeysControllerDeleteOutput>;

// The operation
/**
 * Delete an API key
 *
 * Permanently deletes an API key. This action cannot be undone. Once deleted, any requests using this API key will fail authentication.
 *
 * @param id - The unique ID of the API key.
 */
export const ApiKeysControllerDelete = /*@__PURE__*/ API.make(() => ({
  inputSchema: ApiKeysControllerDeleteInput,
  outputSchema: ApiKeysControllerDeleteOutput,
  errors: [NotFound] as const,
}));
