import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const ApiKeysControllerDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/api_keys/{id}" }));
export type ApiKeysControllerDeleteInput =
  typeof ApiKeysControllerDeleteInput.Type;

// Output Schema
export const ApiKeysControllerDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ApiKeysControllerDeleteOutput =
  typeof ApiKeysControllerDeleteOutput.Type;

// The operation
/**
 * Delete an API key
 *
 * Permanently deletes an API key. This action cannot be undone. Once deleted, any requests using this API key will fail authentication.
 *
 * @param id - The unique ID of the API key.
 */
export const ApiKeysControllerDelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApiKeysControllerDeleteInput,
    outputSchema: ApiKeysControllerDeleteOutput,
    errors: [NotFound] as const,
  }),
);
