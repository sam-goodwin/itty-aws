import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSGetTemplateDetailsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    templateId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/api/vps/v1/templates/{templateId}" }),
  );
export type VPSGetTemplateDetailsV1Input =
  typeof VPSGetTemplateDetailsV1Input.Type;

// Output Schema
export const VPSGetTemplateDetailsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    documentation: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type VPSGetTemplateDetailsV1Output =
  typeof VPSGetTemplateDetailsV1Output.Type;

// The operation
/**
 * Get template details
 *
 * Retrieve detailed information about a specific OS template for virtual machines.
 * Use this endpoint to view specific template specifications before deployment.
 *
 * @param templateId - Template ID
 */
export const VPSGetTemplateDetailsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSGetTemplateDetailsV1Input,
    outputSchema: VPSGetTemplateDetailsV1Output,
  }),
);
