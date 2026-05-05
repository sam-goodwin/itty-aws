import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomFieldsupdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Union(
  [
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      name: Schema.optional(Schema.NullOr(Schema.String)),
      slug: Schema.optional(Schema.NullOr(Schema.String)),
      type: Schema.Literal("text"),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            form_label: Schema.optional(Schema.String),
            form_help_text: Schema.optional(Schema.String),
            form_placeholder: Schema.optional(Schema.String),
            textarea: Schema.optional(Schema.Boolean),
            min_length: Schema.optional(Schema.Number),
            max_length: Schema.optional(Schema.Number),
          }),
        ),
      ),
    }),
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      name: Schema.optional(Schema.NullOr(Schema.String)),
      slug: Schema.optional(Schema.NullOr(Schema.String)),
      type: Schema.Literal("number"),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            form_label: Schema.optional(Schema.String),
            form_help_text: Schema.optional(Schema.String),
            form_placeholder: Schema.optional(Schema.String),
            ge: Schema.optional(Schema.Number),
            le: Schema.optional(Schema.Number),
          }),
        ),
      ),
    }),
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      name: Schema.optional(Schema.NullOr(Schema.String)),
      slug: Schema.optional(Schema.NullOr(Schema.String)),
      type: Schema.Literal("date"),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            form_label: Schema.optional(Schema.String),
            form_help_text: Schema.optional(Schema.String),
            form_placeholder: Schema.optional(Schema.String),
            ge: Schema.optional(Schema.Number),
            le: Schema.optional(Schema.Number),
          }),
        ),
      ),
    }),
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      name: Schema.optional(Schema.NullOr(Schema.String)),
      slug: Schema.optional(Schema.NullOr(Schema.String)),
      type: Schema.Literal("checkbox"),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            form_label: Schema.optional(Schema.String),
            form_help_text: Schema.optional(Schema.String),
            form_placeholder: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      name: Schema.optional(Schema.NullOr(Schema.String)),
      slug: Schema.optional(Schema.NullOr(Schema.String)),
      type: Schema.Literal("select"),
      properties: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
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
        ),
      ),
    }),
  ],
).pipe(T.Http({ method: "PATCH", path: "/v1/custom-fields/{id}" }));
export type CustomFieldsupdateInput = typeof CustomFieldsupdateInput.Type;

// Output Schema
export const CustomFieldsupdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    metadata: Schema.Record(Schema.String, Schema.Unknown),
    type: Schema.Literals(["text", "number", "date", "checkbox", "select"]),
    slug: Schema.String,
    name: Schema.String,
    organization_id: Schema.String,
    properties: Schema.Record(Schema.String, Schema.Unknown),
  });
export type CustomFieldsupdateOutput = typeof CustomFieldsupdateOutput.Type;

// The operation
/**
 * Update Custom Field
 *
 * Update a custom field.
 * **Scopes**: `custom_fields:write`
 *
 * @param id - The custom field ID.
 */
export const customFieldsupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomFieldsupdateInput,
  outputSchema: CustomFieldsupdateOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
