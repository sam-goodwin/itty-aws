import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DetachBaremetalVpcsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    baremetalId: Schema.String.pipe(T.PathParam()),
    vpc_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/bare-metals/{baremetalId}/vpcs/detach" }),
  );
export type DetachBaremetalVpcsInput = typeof DetachBaremetalVpcsInput.Type;

// Output Schema
export const DetachBaremetalVpcsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DetachBaremetalVpcsOutput = typeof DetachBaremetalVpcsOutput.Type;

// The operation
/**
 * Detach VPC Network from Bare Metal Instance
 *
 * Detach a VPC Network from an Bare Metal Instance.
 *
 * @param baremetalId - The [bare-metal ID](#operation/list-baremetals).
 */
export const detachBaremetalVpcs = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DetachBaremetalVpcsInput,
  outputSchema: DetachBaremetalVpcsOutput,
  errors: [BadRequest, NotFound] as const,
}));
