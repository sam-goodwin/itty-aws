import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetProjectClaimTokenInput {
  ref: string;
}
export const V1GetProjectClaimTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/claim-token" }),
  ) as unknown as Schema.Codec<V1GetProjectClaimTokenInput>;

// Output Schema
export interface V1GetProjectClaimTokenOutput {
  token_alias: string;
  expires_at: string;
  created_at: string;
  created_by: string;
}
export const V1GetProjectClaimTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token_alias: Schema.String,
    expires_at: Schema.String,
    created_at: Schema.String,
    created_by: Schema.String,
  }) as unknown as Schema.Codec<V1GetProjectClaimTokenOutput>;

// The operation
/**
 * Gets project claim token
 *
 * @param ref - Project ref
 */
export const v1GetProjectClaimToken = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1GetProjectClaimTokenInput,
    outputSchema: V1GetProjectClaimTokenOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
