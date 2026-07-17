import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface TokensAuthorizeInput {
  access?: {
    action?: 1 | 2 | 4 | 8 | 16 | 31 | 0;
    app_feature?: string;
    app_name?: string;
    command?: string[];
    machine_feature?: string;
    machine_id?: string;
    mutation?: string;
    org_feature?: string;
    org_slug?: string;
    source_machine?: string;
    storage_object?: string;
    volume_id?: string;
  };
  header?: string;
}
export const TokensAuthorizeInput = /*@__PURE__*/ Schema.Struct({
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
}).pipe(
  T.Http({ method: "POST", path: "/tokens/authorize" }),
) as unknown as Schema.Codec<TokensAuthorizeInput>;

// Output Schema
export interface TokensAuthorizeOutput {
  access?: {
    action?: 1 | 2 | 4 | 8 | 16 | 31 | 0;
    app_feature?: string;
    appid?: number;
    cluster?: string;
    command?: string[];
    feature?: string;
    machine?: string;
    machine_feature?: string;
    mutation?: string;
    orgid?: number;
    sourceApp?: string;
    sourceMachine?: string;
    sourceOrganization?: string;
    storage_object?: string;
    volume?: string;
  };
  verified_token?: {
    caveats?: { caveats?: unknown[] };
    header?: string;
    nonce?: { kid?: number[]; proof?: boolean; rnd?: number[] };
    permission_token?: number[];
  };
}
export const TokensAuthorizeOutput = /*@__PURE__*/ Schema.Struct({
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
}) as unknown as Schema.Codec<TokensAuthorizeOutput>;

// The operation
/**
 * Authorize token for resource access
 *
 * Verify a token header and validate it against a requested access scope.
 */
export const TokensAuthorize = /*@__PURE__*/ API.make(() => ({
  inputSchema: TokensAuthorizeInput,
  outputSchema: TokensAuthorizeOutput,
  errors: [BadRequest] as const,
}));
