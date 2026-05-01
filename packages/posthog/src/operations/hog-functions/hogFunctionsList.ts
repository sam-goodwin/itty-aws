import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HogFunctionsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  created_at: Schema.optional(Schema.String),
  created_by: Schema.optional(Schema.Number),
  enabled: Schema.optional(Schema.Boolean),
  id: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  search: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/hog_functions/" }),
);
export type HogFunctionsListInput = typeof HogFunctionsListInput.Type;

// Output Schema
export const HogFunctionsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        type: Schema.NullOr(Schema.String),
        name: Schema.NullOr(Schema.String),
        description: Schema.String,
        created_at: Schema.String,
        created_by: Schema.Struct({
          id: Schema.Number,
          uuid: Schema.String,
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.String,
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.NullOr(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
        updated_at: Schema.String,
        enabled: Schema.Boolean,
        hog: Schema.String,
        filters: Schema.NullOr(Schema.Unknown),
        icon_url: Schema.NullOr(Schema.String),
        template: Schema.Struct({
          id: Schema.String,
          name: Schema.String,
          description: Schema.optional(Schema.NullOr(Schema.String)),
          code: Schema.String,
          code_language: Schema.optional(Schema.String),
          inputs_schema: Schema.Unknown,
          type: Schema.String,
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
                  name: Schema.String,
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
        status: Schema.NullOr(
          Schema.Struct({
            state: Schema.Literals([0, 1, 2, 3, 11, 12]),
            tokens: Schema.Number,
          }),
        ),
        execution_order: Schema.NullOr(Schema.Number),
      }),
    ),
  },
);
export type HogFunctionsListOutput = typeof HogFunctionsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 * @param type - Multiple values may be separated by commas.
 */
export const hogFunctionsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HogFunctionsListInput,
  outputSchema: HogFunctionsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
