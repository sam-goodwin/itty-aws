import * as Schema from "effect/Schema";
import {
  datasetCapabilitiesSchema,
  orgCapabilitiesSchema,
  viewCapabilitiesSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const CreateAPITokenInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  datasetCapabilities: Schema.optional(
    Schema.suspend(() => datasetCapabilitiesSchema),
  ),
  description: Schema.optional(Schema.String),
  expiresAt: Schema.optional(Schema.NullOr(Schema.String)),
  name: Schema.String,
  orgCapabilities: Schema.optional(Schema.suspend(() => orgCapabilitiesSchema)),
  viewCapabilities: Schema.optional(
    Schema.suspend(() => viewCapabilitiesSchema),
  ),
}).pipe(T.Http({ method: "POST", path: "/v2/tokens" }));
export type CreateAPITokenInput = typeof CreateAPITokenInput.Type;

// Output Schema
export const CreateAPITokenOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  token: Schema.optional(Schema.String),
});
export type CreateAPITokenOutput = typeof CreateAPITokenOutput.Type;

// The operation
/**
 * Create API token
 */
export const createAPIToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateAPITokenInput,
  outputSchema: CreateAPITokenOutput,
  errors: [UnprocessableEntity] as const,
}));
