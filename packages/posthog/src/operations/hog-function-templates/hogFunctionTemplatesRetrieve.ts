import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const HogFunctionTemplatesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    template_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/hog_function_templates/{template_id}/",
    }),
  );
export type HogFunctionTemplatesRetrieveInput =
  typeof HogFunctionTemplatesRetrieveInput.Type;

// Output Schema
export const HogFunctionTemplatesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
            include_by_default: Schema.optional(Schema.NullOr(Schema.Boolean)),
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
  });
export type HogFunctionTemplatesRetrieveOutput =
  typeof HogFunctionTemplatesRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFunctionTemplatesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HogFunctionTemplatesRetrieveInput,
    outputSchema: HogFunctionTemplatesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
