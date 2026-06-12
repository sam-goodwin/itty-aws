import * as Schema from "effect/Schema";
import { ProcessStatSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const MachinesListProcessesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    machine_id: Schema.String.pipe(T.PathParam()),
    sort_by: Schema.optional(Schema.String),
    order: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apps/{app_name}/machines/{machine_id}/ps",
    }),
  );
export type MachinesListProcessesInput = typeof MachinesListProcessesInput.Type;

// Output Schema
export const MachinesListProcessesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => ProcessStatSchema),
  );
export type MachinesListProcessesOutput =
  typeof MachinesListProcessesOutput.Type;

// The operation
/**
 * List Processes
 *
 * List all processes running on a specific Machine within an app, with optional sorting parameters.
 *
 * @param app_name - Fly App Name
 * @param machine_id - Machine ID
 * @param sort_by - Sort by
 * @param order - Order
 */
export const MachinesListProcesses = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachinesListProcessesInput,
    outputSchema: MachinesListProcessesOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
