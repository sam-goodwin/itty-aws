import * as Schema from "effect/Schema";
import { V1ProjectWithDatabaseResponseSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const V1ListAllProjectsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v1/projects" }));
export type V1ListAllProjectsInput = typeof V1ListAllProjectsInput.Type;

// Output Schema
export const V1ListAllProjectsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => V1ProjectWithDatabaseResponseSchema),
);
export type V1ListAllProjectsOutput = typeof V1ListAllProjectsOutput.Type;

// The operation
/**
 * List all projects
 *
 * Returns a list of all projects you've previously created.
 * Use `/v1/organizations/{slug}/projects` instead when possible to get more precise results and pagination support.
 */
export const v1ListAllProjects = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1ListAllProjectsInput,
  outputSchema: V1ListAllProjectsOutput,
  errors: [Forbidden] as const,
}));
