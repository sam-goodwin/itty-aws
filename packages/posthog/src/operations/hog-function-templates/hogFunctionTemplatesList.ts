import * as Schema from "effect/Schema";
import { HogFunctionTemplateSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HogFunctionTemplatesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    template_id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    types: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/hog_function_templates/",
    }),
  );
export type HogFunctionTemplatesListInput =
  typeof HogFunctionTemplatesListInput.Type;

// Output Schema
export const HogFunctionTemplatesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => HogFunctionTemplateSchema)),
    ),
  });
export type HogFunctionTemplatesListOutput =
  typeof HogFunctionTemplatesListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param template_id - Filter to a specific template by its template_id. Deprecated templates are excluded from list results; use the retrieve endpoint to look up a template by ID regardless of status.
 * @param type - Filter by template type (e.g. destination, email, sms_provider, broadcast). Defaults to destination if neither type nor types is provided.
 * @param types - Comma-separated list of template types to include (e.g. destination,email,sms_provider).
 */
export const hogFunctionTemplatesList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HogFunctionTemplatesListInput,
    outputSchema: HogFunctionTemplatesListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
