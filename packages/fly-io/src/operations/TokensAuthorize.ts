import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const TokensAuthorizeInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  access: Schema.optional(
    Schema.Struct({
      action: Schema.optional(Schema.Literals([1, 2, 4, 8, 16, 31, 0])),
      app_feature: Schema.optional(Schema.String),
      app_name: Schema.optional(Schema.String),
      command: Schema.optional(Schema.Array(Schema.String)),
      machine_feature: Schema.optional(Schema.String),
      machine_id: Schema.optional(Schema.String),
      mutation: Schema.optional(Schema.String),
      org_feature: Schema.optional(Schema.String),
      org_slug: Schema.optional(Schema.String),
      source_machine: Schema.optional(Schema.String),
      storage_object: Schema.optional(Schema.String),
      volume_id: Schema.optional(Schema.String),
    }),
  ),
  header: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/tokens/authorize" }));
export type TokensAuthorizeInput = typeof TokensAuthorizeInput.Type;

// Output Schema
export const TokensAuthorizeOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  access: Schema.optional(
    Schema.Struct({
      action: Schema.optional(Schema.Literals([1, 2, 4, 8, 16, 31, 0])),
      app_feature: Schema.optional(Schema.String),
      appid: Schema.optional(Schema.Number),
      cluster: Schema.optional(Schema.String),
      command: Schema.optional(Schema.Array(Schema.String)),
      feature: Schema.optional(Schema.String),
      machine: Schema.optional(Schema.String),
      machine_feature: Schema.optional(Schema.String),
      mutation: Schema.optional(Schema.String),
      orgid: Schema.optional(Schema.Number),
      sourceApp: Schema.optional(Schema.String),
      sourceMachine: Schema.optional(Schema.String),
      sourceOrganization: Schema.optional(Schema.String),
      storage_object: Schema.optional(Schema.String),
      volume: Schema.optional(Schema.String),
    }),
  ),
  verified_token: Schema.optional(
    Schema.Struct({
      caveats: Schema.optional(
        Schema.Struct({
          caveats: Schema.optional(Schema.Array(Schema.Unknown)),
        }),
      ),
      header: Schema.optional(Schema.String),
      nonce: Schema.optional(
        Schema.Struct({
          kid: Schema.optional(Schema.Array(Schema.Number)),
          proof: Schema.optional(Schema.Boolean),
          rnd: Schema.optional(Schema.Array(Schema.Number)),
        }),
      ),
      permission_token: Schema.optional(Schema.Array(Schema.Number)),
    }),
  ),
});
export type TokensAuthorizeOutput = typeof TokensAuthorizeOutput.Type;

// The operation
/**
 * Authorize token for resource access
 *
 * Verify a token header and validate it against a requested access scope.
 */
export const TokensAuthorize = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: TokensAuthorizeInput,
  outputSchema: TokensAuthorizeOutput,
  errors: [BadRequest] as const,
}));
