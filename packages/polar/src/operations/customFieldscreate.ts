import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomFieldscreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Union(
  [
    Schema.Struct({
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      type: Schema.Literal("text"),
      slug: Schema.String,
      name: Schema.String,
      organization_id: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.Struct({
        form_label: Schema.optional(Schema.String),
        form_help_text: Schema.optional(Schema.String),
        form_placeholder: Schema.optional(Schema.String),
        textarea: Schema.optional(Schema.Boolean),
        min_length: Schema.optional(Schema.Number),
        max_length: Schema.optional(Schema.Number),
      }),
    }),
    Schema.Struct({
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      type: Schema.Literal("number"),
      slug: Schema.String,
      name: Schema.String,
      organization_id: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.Struct({
        form_label: Schema.optional(Schema.String),
        form_help_text: Schema.optional(Schema.String),
        form_placeholder: Schema.optional(Schema.String),
        ge: Schema.optional(Schema.Number),
        le: Schema.optional(Schema.Number),
      }),
    }),
    Schema.Struct({
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      type: Schema.Literal("date"),
      slug: Schema.String,
      name: Schema.String,
      organization_id: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.Struct({
        form_label: Schema.optional(Schema.String),
        form_help_text: Schema.optional(Schema.String),
        form_placeholder: Schema.optional(Schema.String),
        ge: Schema.optional(Schema.Number),
        le: Schema.optional(Schema.Number),
      }),
    }),
    Schema.Struct({
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      type: Schema.Literal("checkbox"),
      slug: Schema.String,
      name: Schema.String,
      organization_id: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.Struct({
        form_label: Schema.optional(Schema.String),
        form_help_text: Schema.optional(Schema.String),
        form_placeholder: Schema.optional(Schema.String),
      }),
    }),
    Schema.Struct({
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      type: Schema.Literal("select"),
      slug: Schema.String,
      name: Schema.String,
      organization_id: Schema.optional(Schema.NullOr(Schema.String)),
      properties: Schema.Struct({
        form_label: Schema.optional(Schema.String),
        form_help_text: Schema.optional(Schema.String),
        form_placeholder: Schema.optional(Schema.String),
        options: Schema.Array(
          Schema.Struct({
            value: Schema.String,
            label: Schema.String,
          }),
        ),
      }),
    }),
  ],
).pipe(T.Http({ method: "POST", path: "/v1/custom-fields/" }));
export type CustomFieldscreateInput = typeof CustomFieldscreateInput.Type;

// Output Schema
export const CustomFieldscreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type CustomFieldscreateOutput = typeof CustomFieldscreateOutput.Type;

// The operation
/**
 * Create Custom Field
 *
 * Create a custom field.
 * **Scopes**: `custom_fields:write`
 */
export const customFieldscreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomFieldscreateInput,
  outputSchema: CustomFieldscreateOutput,
  errors: [UnprocessableEntity] as const,
}));
