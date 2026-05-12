import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const UpdateRobotInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  registryId: Schema.String.pipe(T.PathParam()),
  robotName: Schema.String.pipe(T.PathParam()),
  description: Schema.optional(Schema.String),
  disable: Schema.optional(Schema.Boolean),
  duration: Schema.optional(Schema.Number),
  access: Schema.optional(
    Schema.Struct({
      action: Schema.optional(Schema.String),
      resource: Schema.optional(Schema.String),
      effect: Schema.optional(Schema.String),
    }),
  ),
}).pipe(
  T.Http({ method: "PUT", path: "/registry/{registryId}/robot/{robotName}" }),
);
export type UpdateRobotInput = typeof UpdateRobotInput.Type;

// Output Schema
export const UpdateRobotOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  description: Schema.optional(Schema.String),
  secret: Schema.optional(SensitiveString),
  disable: Schema.optional(Schema.Boolean),
  duration: Schema.optional(Schema.Number),
  creation_time: Schema.optional(Schema.String),
  permissions: Schema.optional(
    Schema.Struct({
      kind: Schema.optional(Schema.String),
      namespace: Schema.optional(Schema.String),
      access: Schema.optional(
        Schema.Struct({
          action: Schema.optional(Schema.String),
          resource: Schema.optional(Schema.String),
          effect: Schema.optional(Schema.String),
        }),
      ),
    }),
  ),
});
export type UpdateRobotOutput = typeof UpdateRobotOutput.Type;

// The operation
/**
 * Update Robot
 *
 * Update the description, disable, duration, and add or remove access, in a Container Registry Subscription Robot
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 * @param robotName - The [Robot Name](#components/schemas/registry-robot/properties/name). Which can be found by [List Robots](#operation/list-registry-robots).
 */
export const updateRobot = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateRobotInput,
  outputSchema: UpdateRobotOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
