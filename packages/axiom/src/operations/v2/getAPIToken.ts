import * as Schema from "effect/Schema";
import {
  datasetCapabilitiesSchema,
  orgCapabilitiesSchema,
  viewCapabilitiesSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound } from "../../errors.ts";

// Input Schema
export const GetAPITokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v2/tokens/{id}" }));
export type GetAPITokenInput = typeof GetAPITokenInput.Type;

// Output Schema
export const GetAPITokenOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datasetCapabilities: Schema.suspend(() => datasetCapabilitiesSchema),
  description: Schema.optional(Schema.String),
  expiresAt: Schema.optional(Schema.NullOr(Schema.String)),
  id: Schema.String,
  name: Schema.String,
  orgCapabilities: Schema.suspend(() => orgCapabilitiesSchema),
  samlAuthenticated: Schema.optional(Schema.Boolean),
  viewCapabilities: Schema.optional(
    Schema.suspend(() => viewCapabilitiesSchema),
  ),
});
export type GetAPITokenOutput = typeof GetAPITokenOutput.Type;

// The operation
/**
 * Get API token by ID
 */
export const getAPIToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetAPITokenInput,
  outputSchema: GetAPITokenOutput,
  errors: [NotFound] as const,
}));
