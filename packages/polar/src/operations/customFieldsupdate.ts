import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomFieldsupdateInput {
  id: string;
  metadata?: Record<string, string | number | boolean>;
  name?: string | null;
  slug?: string | null;
  type: string;
  properties?: {
    form_label?: string;
    form_help_text?: string;
    form_placeholder?: string;
    options: ReadonlyArray<{ value: string; label: string }>;
  } | null;
}
export const CustomFieldsupdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    metadata: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
      ),
    ),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    slug: Schema.optional(Schema.NullOr(Schema.String)),
    type: Schema.String,
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
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/custom-fields/{id}" }),
  ) as unknown as Schema.Codec<CustomFieldsupdateInput>;

// Output Schema
export type CustomFieldsupdateOutput =
  | {
      created_at: string;
      modified_at: string | null;
      id: string;
      metadata: Record<string, string | number | boolean>;
      type: string;
      slug: string;
      name: string;
      organization_id: string;
      properties: {
        form_label?: string;
        form_help_text?: string;
        form_placeholder?: string;
        textarea?: boolean;
        min_length?: number;
        max_length?: number;
      };
    }
  | {
      created_at: string;
      modified_at: string | null;
      id: string;
      metadata: Record<string, string | number | boolean>;
      type: string;
      slug: string;
      name: string;
      organization_id: string;
      properties: {
        form_label?: string;
        form_help_text?: string;
        form_placeholder?: string;
        ge?: number;
        le?: number;
      };
    }
  | {
      created_at: string;
      modified_at: string | null;
      id: string;
      metadata: Record<string, string | number | boolean>;
      type: string;
      slug: string;
      name: string;
      organization_id: string;
      properties: {
        form_label?: string;
        form_help_text?: string;
        form_placeholder?: string;
      };
    }
  | {
      created_at: string;
      modified_at: string | null;
      id: string;
      metadata: Record<string, string | number | boolean>;
      type: string;
      slug: string;
      name: string;
      organization_id: string;
      properties: {
        form_label?: string;
        form_help_text?: string;
        form_placeholder?: string;
        options: ReadonlyArray<{ value: string; label: string }>;
      };
    };
export const CustomFieldsupdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Union([
    Schema.Struct({
      created_at: Schema.String,
      modified_at: Schema.NullOr(Schema.String),
      id: Schema.String,
      metadata: Schema.Record(
        Schema.String,
        Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
      ),
      type: Schema.String,
      slug: Schema.String,
      name: Schema.String,
      organization_id: Schema.String,
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
      created_at: Schema.String,
      modified_at: Schema.NullOr(Schema.String),
      id: Schema.String,
      metadata: Schema.Record(
        Schema.String,
        Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
      ),
      type: Schema.String,
      slug: Schema.String,
      name: Schema.String,
      organization_id: Schema.String,
      properties: Schema.Struct({
        form_label: Schema.optional(Schema.String),
        form_help_text: Schema.optional(Schema.String),
        form_placeholder: Schema.optional(Schema.String),
        ge: Schema.optional(Schema.Number),
        le: Schema.optional(Schema.Number),
      }),
    }),
    Schema.Struct({
      created_at: Schema.String,
      modified_at: Schema.NullOr(Schema.String),
      id: Schema.String,
      metadata: Schema.Record(
        Schema.String,
        Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
      ),
      type: Schema.String,
      slug: Schema.String,
      name: Schema.String,
      organization_id: Schema.String,
      properties: Schema.Struct({
        form_label: Schema.optional(Schema.String),
        form_help_text: Schema.optional(Schema.String),
        form_placeholder: Schema.optional(Schema.String),
      }),
    }),
    Schema.Struct({
      created_at: Schema.String,
      modified_at: Schema.NullOr(Schema.String),
      id: Schema.String,
      metadata: Schema.Record(
        Schema.String,
        Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
      ),
      type: Schema.String,
      slug: Schema.String,
      name: Schema.String,
      organization_id: Schema.String,
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
  ]) as unknown as Schema.Codec<CustomFieldsupdateOutput>;

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
}));
