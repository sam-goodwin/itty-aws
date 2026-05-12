import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const AttachBaremetalsVpcsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baremetalId: Schema.String.pipe(T.PathParam()),
    vpc_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/bare-metals/{baremetalId}/vpcs/attach" }),
  );
export type AttachBaremetalsVpcsInput = typeof AttachBaremetalsVpcsInput.Type;

// Output Schema
export const AttachBaremetalsVpcsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AttachBaremetalsVpcsOutput = typeof AttachBaremetalsVpcsOutput.Type;

// The operation
/**
 * Attach VPC Network to Bare Metal Instance
 *
 * Attach a VPC Network to a Bare Metal Instance.
 *
 * @param baremetalId - The [Bare Metal ID](#operation/list-baremetals).
 */
export const attachBaremetalsVpcs = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AttachBaremetalsVpcsInput,
    outputSchema: AttachBaremetalsVpcsOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
