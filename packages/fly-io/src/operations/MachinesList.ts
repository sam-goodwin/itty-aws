import * as Schema from "effect/Schema";
import { MachineSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const MachinesListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  include_deleted: Schema.optional(Schema.Boolean),
  region: Schema.optional(Schema.String),
  state: Schema.optional(Schema.String),
  summary: Schema.optional(Schema.Boolean),
}).pipe(T.Http({ method: "GET", path: "/apps/{app_name}/machines" }));
export type MachinesListInput = typeof MachinesListInput.Type;

// Output Schema
export const MachinesListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => MachineSchema),
);
export type MachinesListOutput = typeof MachinesListOutput.Type;

// The operation
/**
 * List Machines
 *
 * List all Machines associated with a specific app, with optional filters for including deleted Machines and filtering by region.
 *
 * @param app_name - Fly App Name
 * @param include_deleted - Include deleted machines
 * @param region - Region filter
 * @param state - comma separated list of states to filter (created, started, stopped, suspended)
 * @param summary - Only return summary info about machines (omit config, checks, events, host_status, nonce, etc.)
 */
export const MachinesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MachinesListInput,
  outputSchema: MachinesListOutput,
  errors: [Forbidden, NotFound] as const,
}));
