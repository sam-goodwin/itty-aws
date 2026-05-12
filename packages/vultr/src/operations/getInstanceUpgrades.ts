import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetInstanceUpgradesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    instanceId: Schema.String.pipe(T.PathParam()),
    type: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/instances/{instanceId}/upgrades" }));
export type GetInstanceUpgradesInput = typeof GetInstanceUpgradesInput.Type;

// Output Schema
export const GetInstanceUpgradesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    upgrades: Schema.optional(
      Schema.Struct({
        applications: Schema.optional(Schema.Array(Schema.Unknown)),
        plans: Schema.optional(Schema.Array(Schema.Unknown)),
        os: Schema.optional(Schema.Array(Schema.Unknown)),
      }),
    ),
  });
export type GetInstanceUpgradesOutput = typeof GetInstanceUpgradesOutput.Type;

// The operation
/**
 * Get Available Instance Upgrades
 *
 * Get available upgrades for an Instance
 *
 * @param instanceId - The [Instance ID](#operation/list-instances).
 * @param type - Filter upgrade by type:

- all (applications, os, plans)
- applications
- os
- plans
 */
export const getInstanceUpgrades = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInstanceUpgradesInput,
  outputSchema: GetInstanceUpgradesOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
