import * as Schema from "effect/Schema";
import { JWKSSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetProjectJWKSInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/projects/{project_id}/jwks" }));
export type GetProjectJWKSInput = typeof GetProjectJWKSInput.Type;

// Output Schema
export const GetProjectJWKSOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  jwks: Schema.Array(Schema.suspend(() => JWKSSchema)),
});
export type GetProjectJWKSOutput = typeof GetProjectJWKSOutput.Type;

// The operation
/**
 * List JWKS URLs
 *
 * Returns the JWKS URLs available for verifying JWTs used as the authentication mechanism for the specified project.
 *
 * @param project_id - The Neon project ID
 */
export const getProjectJWKS = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetProjectJWKSInput,
  outputSchema: GetProjectJWKSOutput,
}));
