import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const JsSnippetResolveRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/js-snippet/resolve/",
    }),
  );
export type JsSnippetResolveRetrieveInput =
  typeof JsSnippetResolveRetrieveInput.Type;

// Output Schema
export const JsSnippetResolveRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Record(Schema.String, Schema.Unknown);
export type JsSnippetResolveRetrieveOutput =
  typeof JsSnippetResolveRetrieveOutput.Type;

// The operation
/**
 * Preview what a given pin would resolve to, without saving it.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const jsSnippetResolveRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: JsSnippetResolveRetrieveInput,
    outputSchema: JsSnippetResolveRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
