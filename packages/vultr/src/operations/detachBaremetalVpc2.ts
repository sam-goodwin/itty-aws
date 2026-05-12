import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DetachBaremetalVpc2Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baremetalId: Schema.String.pipe(T.PathParam()),
    vpc_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/bare-metals/{baremetalId}/vpc2/detach" }),
  );
export type DetachBaremetalVpc2Input = typeof DetachBaremetalVpc2Input.Type;

// Output Schema
export const DetachBaremetalVpc2Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DetachBaremetalVpc2Output = typeof DetachBaremetalVpc2Output.Type;

// The operation
/**
 * Detach VPC 2.0 Network from Bare Metal Instance
 *
 * Detach a VPC 2.0 Network from an Bare Metal Instance.
 *
 * @param baremetalId - The [bare-metal ID](#operation/list-baremetals).
 */
export const detachBaremetalVpc2 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DetachBaremetalVpc2Input,
  outputSchema: DetachBaremetalVpc2Output,
  errors: [BadRequest, NotFound] as const,
}));
