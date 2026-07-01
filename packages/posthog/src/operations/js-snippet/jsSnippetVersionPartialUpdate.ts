import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface JsSnippetVersionPartialUpdateInput {
  project_id: string;
  js_snippet_version?: string | null;
}
export const JsSnippetVersionPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    js_snippet_version: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/js-snippet/version/",
    }),
  ) as unknown as Schema.Codec<JsSnippetVersionPartialUpdateInput>;

// Output Schema
export type JsSnippetVersionPartialUpdateOutput = Record<string, unknown>;
export const JsSnippetVersionPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
    Schema.String,
    Schema.Unknown,
  ) as unknown as Schema.Codec<JsSnippetVersionPartialUpdateOutput>;

// The operation
/**
 * Update the team's version pin.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const jsSnippetVersionPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: JsSnippetVersionPartialUpdateInput,
    outputSchema: JsSnippetVersionPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
