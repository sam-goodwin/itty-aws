import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden } from "../../errors.ts";

// Input Schema
export const PublicHogFunctionTemplatesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    template_id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    types: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/api/public_hog_function_templates/" }),
  );
export type PublicHogFunctionTemplatesListInput =
  typeof PublicHogFunctionTemplatesListInput.Type;

// Output Schema
export const PublicHogFunctionTemplatesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          description: Schema.optional(Schema.NullOr(Schema.String)),
          code: Schema.optional(Schema.String),
          code_language: Schema.optional(Schema.String),
          inputs_schema: Schema.optional(Schema.Unknown),
          type: Schema.optional(Schema.String),
          status: Schema.optional(Schema.String),
          category: Schema.optional(Schema.Unknown),
          free: Schema.optional(Schema.Boolean),
          icon_url: Schema.optional(Schema.NullOr(Schema.String)),
          filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
          masking: Schema.optional(Schema.NullOr(Schema.Unknown)),
          mapping_templates: Schema.optional(
            Schema.NullOr(
              Schema.Array(
                Schema.Struct({
                  name: Schema.optional(Schema.String),
                  include_by_default: Schema.optional(
                    Schema.NullOr(Schema.Boolean),
                  ),
                  use_all_events_by_default: Schema.optional(
                    Schema.NullOr(Schema.Boolean),
                  ),
                  filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
                  inputs: Schema.optional(Schema.NullOr(Schema.Unknown)),
                  inputs_schema: Schema.optional(Schema.NullOr(Schema.Unknown)),
                }),
              ),
            ),
          ),
        }),
      ),
    ),
  });
export type PublicHogFunctionTemplatesListOutput =
  typeof PublicHogFunctionTemplatesListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param template_id - Filter to a specific template by its template_id. Deprecated templates are excluded from list results; use the retrieve endpoint to look up a template by ID regardless of status.
 * @param type - Filter by template type (e.g. destination, email, sms_provider, broadcast). Defaults to destination if neither type nor types is provided.
 * @param types - Comma-separated list of template types to include (e.g. destination,email,sms_provider).
 */
export const publicHogFunctionTemplatesList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PublicHogFunctionTemplatesListInput,
    outputSchema: PublicHogFunctionTemplatesListOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
