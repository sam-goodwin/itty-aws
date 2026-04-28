import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const JsSnippetVersionPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    js_snippet_version: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/js-snippet/version/",
    }),
  );
export type JsSnippetVersionPartialUpdateInput =
  typeof JsSnippetVersionPartialUpdateInput.Type;

// Output Schema
export const JsSnippetVersionPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.Unknown);
export type JsSnippetVersionPartialUpdateOutput =
  typeof JsSnippetVersionPartialUpdateOutput.Type;

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
