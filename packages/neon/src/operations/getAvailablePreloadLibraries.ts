import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetAvailablePreloadLibrariesInput {
  project_id: string;
}
export const GetAvailablePreloadLibrariesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/projects/{project_id}/available_preload_libraries",
    }),
  ) as unknown as Schema.Codec<GetAvailablePreloadLibrariesInput>;

// Output Schema
export interface GetAvailablePreloadLibrariesOutput {
  libraries?: {
    library_name: string;
    description: string;
    is_default: boolean;
    is_experimental: boolean;
    version: string;
  }[];
}
export const GetAvailablePreloadLibrariesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    libraries: Schema.optional(
      Schema.Array(
        Schema.Struct({
          library_name: Schema.String,
          description: Schema.String,
          is_default: Schema.Boolean,
          is_experimental: Schema.Boolean,
          version: Schema.String,
        }),
      ),
    ),
  }) as unknown as Schema.Codec<GetAvailablePreloadLibrariesOutput>;

// The operation
/**
 * List available shared preload libraries
 *
 * Returns the shared preload libraries available for the specified project's Postgres version.
 * Shared preload libraries are Postgres extensions that require the `shared_preload_libraries`
 * setting and a compute restart to activate.
 * Use this list to determine which libraries can be enabled in the project's
 * `settings.preload_libraries` configuration.
 */
export const getAvailablePreloadLibraries =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetAvailablePreloadLibrariesInput,
    outputSchema: GetAvailablePreloadLibrariesOutput,
  }));
