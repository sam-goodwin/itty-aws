import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1DeleteProjectClaimTokenInput {
  ref: string;
}
export const V1DeleteProjectClaimTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/projects/{ref}/claim-token" }),
  ) as unknown as Schema.Codec<V1DeleteProjectClaimTokenInput>;

// Output Schema
export type V1DeleteProjectClaimTokenOutput = void;
export const V1DeleteProjectClaimTokenOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<V1DeleteProjectClaimTokenOutput>;

// The operation
/**
 * Revokes project claim token
 *
 * @param ref - Project ref
 */
export const v1DeleteProjectClaimToken = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1DeleteProjectClaimTokenInput,
    outputSchema: V1DeleteProjectClaimTokenOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
