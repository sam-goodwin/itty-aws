import * as Schema from "effect/Schema";
import { MachineEventSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const MachinesListEventsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    machine_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apps/{app_name}/machines/{machine_id}/events",
    }),
  );
export type MachinesListEventsInput = typeof MachinesListEventsInput.Type;

// Output Schema
export const MachinesListEventsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.suspend(() => MachineEventSchema),
  );
export type MachinesListEventsOutput = typeof MachinesListEventsOutput.Type;

// The operation
/**
 * List Events
 *
 * List all events associated with a specific Machine within an app.
 *
 * @param app_name - Fly App Name
 * @param machine_id - Machine ID
 * @param limit - The number of events to fetch (max of 50). If omitted, this is set to 20 by default.
 */
export const MachinesListEvents = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MachinesListEventsInput,
  outputSchema: MachinesListEventsOutput,
  errors: [Forbidden, NotFound] as const,
}));
