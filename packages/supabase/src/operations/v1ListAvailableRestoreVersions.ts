import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1ListAvailableRestoreVersionsInput {
  ref: string;
}
export const V1ListAvailableRestoreVersionsInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/restore" }),
  ) as unknown as Schema.Codec<V1ListAvailableRestoreVersionsInput>;

// Output Schema
export interface V1ListAvailableRestoreVersionsOutput {
  available_versions: {
    version: string;
    release_channel:
      | "internal"
      | "alpha"
      | "beta"
      | "ga"
      | "withdrawn"
      | "preview";
    postgres_engine: "13" | "14" | "15" | "17" | "17-oriole";
  }[];
}
export const V1ListAvailableRestoreVersionsOutput =
  /*@__PURE__*/ Schema.Struct({
    available_versions: Schema.Array(
      Schema.Struct({
        version: Schema.String,
        release_channel: Schema.Literals([
          "internal",
          "alpha",
          "beta",
          "ga",
          "withdrawn",
          "preview",
        ]),
        postgres_engine: Schema.Literals(["13", "14", "15", "17", "17-oriole"]),
      }),
    ),
  }) as unknown as Schema.Codec<V1ListAvailableRestoreVersionsOutput>;

// The operation
/**
 * Lists available restore versions for the given project
 *
 * @param ref - Project ref
 */
export const v1ListAvailableRestoreVersions =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: V1ListAvailableRestoreVersionsInput,
    outputSchema: V1ListAvailableRestoreVersionsOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
