import * as Schema from "effect/Schema";
import { JWKSSchema, OperationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const AddProjectJWKSInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  jwks_url: Schema.String,
  provider_name: Schema.String,
  branch_id: Schema.optional(Schema.String),
  jwt_audience: Schema.optional(Schema.String),
  role_names: Schema.optional(Schema.Array(Schema.String)),
  skip_role_creation: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "POST", path: "/projects/{project_id}/jwks" }));
export type AddProjectJWKSInput = typeof AddProjectJWKSInput.Type;

// Output Schema
export const AddProjectJWKSOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  jwks: Schema.suspend(() => JWKSSchema),
  operations: Schema.Array(Schema.suspend(() => OperationSchema)),
});
export type AddProjectJWKSOutput = typeof AddProjectJWKSOutput.Type;

// The operation
/**
 * Add JWKS URL
 *
 * Add a new JWKS URL to a project, such that it can be used for verifying JWTs used as the authentication mechanism for the specified project.
 * The URL must be a valid HTTPS URL that returns a JSON Web Key Set.
 * The `provider_name` field allows you to specify which authentication provider you're using (e.g., Clerk, Auth0, AWS Cognito, etc.).
 * The `branch_id` can be used to specify on which branches the JWKS URL will be accepted. If not specified, then it will work on any branch.
 * The `role_names` can be used to specify for which roles the JWKS URL will be accepted. If not specified, then default roles will be used (authenticator, authenticated and anonymous).
 * The `jwt_audience` can be used to specify which "aud" values should be accepted by Neon in the JWTs that are used for authentication.
 *
 * @param project_id - The Neon project ID
 */
export const addProjectJWKS = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AddProjectJWKSInput,
  outputSchema: AddProjectJWKSOutput,
}));
