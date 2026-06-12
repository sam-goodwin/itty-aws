import * as Schema from "effect/Schema";
import {
  DefaultEndpointSettingsSchema,
  OperationSchema,
  ProjectSchema,
  ProjectSettingsDataSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const UpdateProjectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  project: Schema.Struct({
    settings: Schema.optional(Schema.suspend(() => ProjectSettingsDataSchema)),
    name: Schema.optional(Schema.String),
    default_endpoint_settings: Schema.optional(
      Schema.suspend(() => DefaultEndpointSettingsSchema),
    ),
    history_retention_seconds: Schema.optional(Schema.Number),
  }),
}).pipe(T.Http({ method: "PATCH", path: "/projects/{project_id}" }));
export type UpdateProjectInput = typeof UpdateProjectInput.Type;

// Output Schema
export const UpdateProjectOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.suspend(() => ProjectSchema),
  operations: Schema.Array(Schema.suspend(() => OperationSchema)),
});
export type UpdateProjectOutput = typeof UpdateProjectOutput.Type;

// The operation
/**
 * Update project
 *
 * Updates the specified project.
 * You can obtain a `project_id` by listing the projects for your Neon account.
 *
 * @param project_id - The Neon project ID
 */
export const updateProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateProjectInput,
  outputSchema: UpdateProjectOutput,
  errors: [BadRequest, NotFound] as const,
}));
