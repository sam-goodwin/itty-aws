import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const JsSnippetVersionRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/js-snippet/version/",
    }),
  );
export type JsSnippetVersionRetrieveInput =
  typeof JsSnippetVersionRetrieveInput.Type;

// Output Schema
export const JsSnippetVersionRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.Unknown);
export type JsSnippetVersionRetrieveOutput =
  typeof JsSnippetVersionRetrieveOutput.Type;

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
