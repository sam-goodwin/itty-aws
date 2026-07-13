import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomFieldslistInput {
  organization_id?: string | ReadonlyArray<string> | null;
  query?: string | null;
  type?:
    | "text"
    | "number"
    | "date"
    | "checkbox"
    | "select"
    | ReadonlyArray<"text" | "number" | "date" | "checkbox" | "select">
    | null;
  page?: number;
  limit?: number;
  sorting?: ReadonlyArray<
    | "created_at"
    | "-created_at"
    | "slug"
    | "-slug"
    | "name"
    | "-name"
    | "type"
    | "-type"
  > | null;
}
export const CustomFieldslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(
    Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
  ),
  query: Schema.optional(Schema.NullOr(Schema.String)),
  type: Schema.optional(
    Schema.NullOr(
      Schema.Union([
        Schema.Literals(["text", "number", "date", "checkbox", "select"]),
        Schema.Array(
          Schema.Literals(["text", "number", "date", "checkbox", "select"]),
        ),
      ]),
    ),
  ),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(
    Schema.NullOr(
      Schema.Array(
        Schema.Literals([
          "created_at",
          "-created_at",
          "slug",
          "-slug",
          "name",
          "-name",
          "type",
          "-type",
        ]),
      ),
    ),
  ),
}).pipe(
  T.Http({ method: "GET", path: "/v1/custom-fields/" }),
) as unknown as Schema.Codec<CustomFieldslistInput>;

// Output Schema
export interface CustomFieldslistOutput {
  items: ReadonlyArray<
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
      }
  >;
  pagination: { total_count: number; max_page: number };
}
export const CustomFieldslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    items: Schema.Array(
      Schema.Union([
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
      ]),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  },
) as unknown as Schema.Codec<CustomFieldslistOutput>;

// The operation
/**
 * List Custom Fields
 *
 * List custom fields.
 * **Scopes**: `custom_fields:read` `custom_fields:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param query - Filter by custom field name or slug.
 * @param type - Filter by custom field type.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const customFieldslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CustomFieldslistInput,
  outputSchema: CustomFieldslistOutput,
}));
