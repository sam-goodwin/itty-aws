import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSCreateNewProjectV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    virtualMachineId: Schema.Number.pipe(T.PathParam()),
    project_name: Schema.String,
    content: Schema.String,
    environment: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/vps/v1/virtual-machines/{virtualMachineId}/docker",
    }),
  );
export type VPSCreateNewProjectV1Input = typeof VPSCreateNewProjectV1Input.Type;

// Output Schema
export const VPSCreateNewProjectV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSCreateNewProjectV1Output =
  typeof VPSCreateNewProjectV1Output.Type;

// The operation
/**
 * Create new project
 *
 * Deploy new project from docker-compose.yaml contents or download contents from URL.
 * URL can be Github repository url in format https://github.com/[user]/[repo]
 * and it will be automatically resolved to docker-compose.yaml file in
 * master branch. Any other URL provided must return docker-compose.yaml
 * file contents.
 * If project with the same name already exists, existing project will be replaced.
 *
 * @param virtualMachineId - Virtual Machine ID
 */
export const VPSCreateNewProjectV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSCreateNewProjectV1Input,
    outputSchema: VPSCreateNewProjectV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
