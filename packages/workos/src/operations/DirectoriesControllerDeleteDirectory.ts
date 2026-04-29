import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DirectoriesControllerDeleteDirectoryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/directories/{id}" }));
export type DirectoriesControllerDeleteDirectoryInput =
  typeof DirectoriesControllerDeleteDirectoryInput.Type;

// Output Schema
export const DirectoriesControllerDeleteDirectoryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DirectoriesControllerDeleteDirectoryOutput =
  typeof DirectoriesControllerDeleteDirectoryOutput.Type;

// The operation
/**
 * Delete a Directory
 *
 * Permanently deletes an existing directory. It cannot be undone.
 *
 * @param id - Unique identifier for the Directory.
 */
export const DirectoriesControllerDeleteDirectory =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DirectoriesControllerDeleteDirectoryInput,
    outputSchema: DirectoriesControllerDeleteDirectoryOutput,
    errors: [Forbidden, NotFound] as const,
  }));
