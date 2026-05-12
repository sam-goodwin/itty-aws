import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const IsoGetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  isoId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/iso/{isoId}" }));
export type IsoGetInput = typeof IsoGetInput.Type;

// Output Schema
export const IsoGetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  iso: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      date_created: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      filename: Schema.optional(Schema.String),
      size: Schema.optional(Schema.Number),
      md5sum: Schema.optional(Schema.String),
      sha512sum: Schema.optional(Schema.String),
      status: Schema.optional(Schema.String),
    }),
  ),
});
export type IsoGetOutput = typeof IsoGetOutput.Type;

// The operation
/**
 * Get ISO
 *
 * Get information for an ISO.
 *
 * @param isoId - The [ISO id](#operation/list-isos).
 */
export const isoGet = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IsoGetInput,
  outputSchema: IsoGetOutput,
  errors: [BadRequest, NotFound] as const,
}));
