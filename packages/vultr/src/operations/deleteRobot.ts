import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DeleteRobotInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  registryId: Schema.String.pipe(T.PathParam()),
  robotName: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/registry/{registryId}/robot/{robotName}",
  }),
);
export type DeleteRobotInput = typeof DeleteRobotInput.Type;

// Output Schema
export const DeleteRobotOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteRobotOutput = typeof DeleteRobotOutput.Type;

// The operation
/**
 * Delete Robot
 *
 * Deletes a Robot from a Container Registry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 * @param robotName - The [Robot Name](#components/schemas/registry-robot/properties/name). Which can be found by [List Robots](#operation/list-registry-robots).
 */
export const deleteRobot = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteRobotInput,
  outputSchema: DeleteRobotOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
