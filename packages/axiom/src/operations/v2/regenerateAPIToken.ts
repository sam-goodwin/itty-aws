import * as Schema from "effect/Schema";
import {
  CreateAPITokenSchema,
  datasetCapabilitiesSchema,
  orgCapabilitiesSchema,
  viewCapabilitiesSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { NotFound, UnprocessableEntity } from "../../errors.ts";

// Input Schema
export const RegenerateAPITokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    existingTokenExpiresAt: Schema.String,
    newToken: Schema.optional(Schema.suspend(() => CreateAPITokenSchema)),
    newTokenExpiresAt: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(T.Http({ method: "POST", path: "/v2/tokens/{id}/regenerate" }));
export type RegenerateAPITokenInput = typeof RegenerateAPITokenInput.Type;

// Output Schema
export const RegenerateAPITokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type RegenerateAPITokenOutput = typeof RegenerateAPITokenOutput.Type;

// The operation
/**
 * Regenerate API token
 */
export const regenerateAPIToken = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: RegenerateAPITokenInput,
  outputSchema: RegenerateAPITokenOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
