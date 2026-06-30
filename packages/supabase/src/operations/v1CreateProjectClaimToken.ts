import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1CreateProjectClaimTokenInput {
  ref: string;
}
export const V1CreateProjectClaimTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/projects/{ref}/claim-token" }),
  ) as unknown as Schema.Codec<V1CreateProjectClaimTokenInput>;

// Output Schema
export interface V1CreateProjectClaimTokenOutput {
  token: string;
  token_alias: string;
  expires_at: string;
  created_at: string;
  created_by: string;
}
export const V1CreateProjectClaimTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String,
    token_alias: Schema.String,
    expires_at: Schema.String,
    created_at: Schema.String,
    created_by: Schema.String,
  }) as unknown as Schema.Codec<V1CreateProjectClaimTokenOutput>;

// The operation
/**
 * Creates project claim token
 *
 * @param ref - Project ref
 */
export const v1CreateProjectClaimToken = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1CreateProjectClaimTokenInput,
    outputSchema: V1CreateProjectClaimTokenOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
