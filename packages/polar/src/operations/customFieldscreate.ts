import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomFieldscreateInput {
  metadata?: Record<string, string | number | boolean>;
  type: string;
  slug: string;
  name: string;
  organization_id?: string | null;
  properties: {
    form_label?: string;
    form_help_text?: string;
    form_placeholder?: string;
    options: ReadonlyArray<{ value: string; label: string }>;
  };
}
export const CustomFieldscreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    metadata: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Union([Schema.String, Schema.Number, Schema.Boolean]),
      ),
    ),
    type: Schema.String,
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
  }).pipe(
    T.Http({ method: "POST", path: "/v1/custom-fields/" }),
  ) as unknown as Schema.Codec<CustomFieldscreateInput>;

// Output Schema
export type CustomFieldscreateOutput =
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
export const CustomFieldscreateOutput =
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
  ]) as unknown as Schema.Codec<CustomFieldscreateOutput>;

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
}));
