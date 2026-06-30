import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface JsSnippetVersionRetrieveInput {
  project_id: string;
}
export const JsSnippetVersionRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/js-snippet/version/",
    }),
  ) as unknown as Schema.Codec<JsSnippetVersionRetrieveInput>;

// Output Schema
export type JsSnippetVersionRetrieveOutput = Record<string, unknown>;
export const JsSnippetVersionRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Unknown,
  ) as unknown as Schema.Codec<JsSnippetVersionRetrieveOutput>;

// The operation
/**
 * Return the team's current version pin and resolved version.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const jsSnippetVersionRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: JsSnippetVersionRetrieveInput,
    outputSchema: JsSnippetVersionRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
