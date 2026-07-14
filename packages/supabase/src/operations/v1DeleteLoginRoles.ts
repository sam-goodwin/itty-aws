import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1DeleteLoginRolesInput {
  ref: string;
}
export const V1DeleteLoginRolesInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/projects/{ref}/cli/login-role" }),
  ) as unknown as Schema.Codec<V1DeleteLoginRolesInput>;

// Output Schema
export interface V1DeleteLoginRolesOutput {
  message: "ok";
}
export const V1DeleteLoginRolesOutput =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.Literals(["ok"]),
  }) as unknown as Schema.Codec<V1DeleteLoginRolesOutput>;

// The operation
/**
 * [Beta] Delete existing login roles used by CLI
 *
 * @param ref - Project ref
 */
export const v1DeleteLoginRoles = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1DeleteLoginRolesInput,
  outputSchema: V1DeleteLoginRolesOutput,
  errors: [BadRequest, Forbidden] as const,
}));
