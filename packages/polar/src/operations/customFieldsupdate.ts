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
      name: Schema.optional(Schema.Unknown),
      slug: Schema.optional(Schema.Unknown),
      type: Schema.String,
      properties: Schema.optional(Schema.Unknown),
    }),
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      name: Schema.optional(Schema.Unknown),
      slug: Schema.optional(Schema.Unknown),
      type: Schema.String,
      properties: Schema.optional(Schema.Unknown),
    }),
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      name: Schema.optional(Schema.Unknown),
      slug: Schema.optional(Schema.Unknown),
      type: Schema.String,
      properties: Schema.optional(Schema.Unknown),
    }),
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      name: Schema.optional(Schema.Unknown),
      slug: Schema.optional(Schema.Unknown),
      type: Schema.String,
      properties: Schema.optional(Schema.Unknown),
    }),
    Schema.Struct({
      id: Schema.String.pipe(T.PathParam()),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      name: Schema.optional(Schema.Unknown),
      slug: Schema.optional(Schema.Unknown),
      type: Schema.String,
      properties: Schema.optional(Schema.Unknown),
    }),
  ],
).pipe(T.Http({ method: "PATCH", path: "/v1/custom-fields/{id}" }));
export type CustomFieldsupdateInput = typeof CustomFieldsupdateInput.Type;

// Output Schema
export const CustomFieldsupdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
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
