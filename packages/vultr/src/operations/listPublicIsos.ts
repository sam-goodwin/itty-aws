import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const ListPublicIsosInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/iso-public" }));
export type ListPublicIsosInput = typeof ListPublicIsosInput.Type;

// Output Schema
export const ListPublicIsosOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  public_isos: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        md5sum: Schema.optional(Schema.String),
      }),
    ),
  ),
  meta: Schema.optional(
    Schema.Struct({
      total: Schema.optional(Schema.Number),
      links: Schema.optional(
        Schema.Struct({
          next: Schema.optional(Schema.String),
          prev: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
});
export type ListPublicIsosOutput = typeof ListPublicIsosOutput.Type;

// The operation
/**
 * List Public ISOs
 *
 * List all Vultr Public ISOs.
 */
export const listPublicIsos = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListPublicIsosInput,
  outputSchema: ListPublicIsosOutput,
  errors: [BadRequest] as const,
}));
