import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { NotFound } from "../../../errors.ts";

// Input Schema
export const GetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  permission_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/organization_permissions/{permission_id}" }),
);
export type GetInput = typeof GetInput.Type;

// Output Schema
export const GetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["permission"]),
  id: Schema.String,
  name: Schema.String,
  key: Schema.String,
  description: Schema.String,
  type: Schema.String,
  created_at: Schema.Number,
  updated_at: Schema.Number,
});
export type GetOutput = typeof GetOutput.Type;

// The operation
/**
 * Get an organization permission
 *
 * Retrieves the details of an organization permission.
 *
 * @param permission_id - The ID of the permission to retrieve
 */
export const get = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInput,
  outputSchema: GetOutput,
  errors: [NotFound] as const,
}));
