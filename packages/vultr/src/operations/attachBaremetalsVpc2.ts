import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const AttachBaremetalsVpc2Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baremetalId: Schema.String.pipe(T.PathParam()),
    vpc_id: Schema.optional(Schema.String),
    ip_address: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/bare-metals/{baremetalId}/vpc2/attach" }),
  );
export type AttachBaremetalsVpc2Input = typeof AttachBaremetalsVpc2Input.Type;

// Output Schema
export const AttachBaremetalsVpc2Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type AttachBaremetalsVpc2Output = typeof AttachBaremetalsVpc2Output.Type;

// The operation
/**
 * Attach VPC 2.0 Network to Bare Metal Instance
 *
 * Attach a VPC 2.0 Network to a Bare Metal Instance.
 *
 * @param baremetalId - The [Bare Metal ID](#operation/list-baremetals).
 */
export const attachBaremetalsVpc2 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AttachBaremetalsVpc2Input,
    outputSchema: AttachBaremetalsVpc2Output,
    errors: [BadRequest, NotFound] as const,
  }),
);
