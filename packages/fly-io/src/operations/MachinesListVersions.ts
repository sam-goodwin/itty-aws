import * as Schema from "effect/Schema";
import { MachineVersionSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const MachinesListVersionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    machine_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apps/{app_name}/machines/{machine_id}/versions",
    }),
  );
export type MachinesListVersionsInput = typeof MachinesListVersionsInput.Type;

// Output Schema
export const MachinesListVersionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => MachineVersionSchema),
  );
export type MachinesListVersionsOutput = typeof MachinesListVersionsOutput.Type;

// The operation
/**
 * List Versions
 *
 * List all versions of the configuration for a specific Machine within an app.
 *
 * @param app_name - Fly App Name
 * @param machine_id - Machine ID
 */
export const MachinesListVersions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MachinesListVersionsInput,
    outputSchema: MachinesListVersionsOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
