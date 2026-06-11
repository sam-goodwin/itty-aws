import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSGetTemplatesV1Input = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/api/vps/v1/templates" }));
export type VPSGetTemplatesV1Input = typeof VPSGetTemplatesV1Input.Type;

// Output Schema
export const VPSGetTemplatesV1Output = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    documentation: Schema.optional(Schema.NullOr(Schema.String)),
  }),
);
export type VPSGetTemplatesV1Output = typeof VPSGetTemplatesV1Output.Type;

// The operation
/**
 * Get templates
 *
 * Retrieve available OS templates for virtual machines.
 * Use this endpoint to view operating system options before creating or recreating VPS instances.
 */
export const VPSGetTemplatesV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSGetTemplatesV1Input,
  outputSchema: VPSGetTemplatesV1Output,
}));
