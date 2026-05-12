import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const ListRegistryRobotsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    registryId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/registry/{registryId}/robots" }));
export type ListRegistryRobotsInput = typeof ListRegistryRobotsInput.Type;

// Output Schema
export const ListRegistryRobotsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    robots: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        total: Schema.optional(Schema.Number),
        links: Schema.optional(
          Schema.Struct({
            next: Schema.optional(Schema.String),
            prev: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  });
export type ListRegistryRobotsOutput = typeof ListRegistryRobotsOutput.Type;

// The operation
/**
 * List Robots
 *
 * List All Robots in a Conainer Registry Subscription
 *
 * @param registryId - The [Registry ID](#components/schemas/registry/properties/id). Which can be found by [List Registries](#operation/list-registries).
 */
export const listRegistryRobots = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListRegistryRobotsInput,
  outputSchema: ListRegistryRobotsOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
