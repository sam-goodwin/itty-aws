import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListAdvancedOptionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/databases/{databaseId}/advanced-options" }),
  );
export type ListAdvancedOptionsInput = typeof ListAdvancedOptionsInput.Type;

// Output Schema
export const ListAdvancedOptionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configured_options: Schema.optional(Schema.Unknown),
    available_options: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          type: Schema.optional(Schema.String),
          enumerals: Schema.optional(Schema.Array(Schema.String)),
          min_value: Schema.optional(Schema.Unknown),
          max_value: Schema.optional(Schema.Unknown),
          alt_values: Schema.optional(Schema.Array(Schema.Unknown)),
          units: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type ListAdvancedOptionsOutput = typeof ListAdvancedOptionsOutput.Type;

// The operation
/**
 * List Advanced Options
 *
 * List all configured and available advanced options for the Managed Database (PostgreSQL engine types only).
 */
export const listAdvancedOptions = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListAdvancedOptionsInput,
  outputSchema: ListAdvancedOptionsOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
