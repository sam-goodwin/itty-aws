import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface MachinesStopInput {
  app_name: string;
  machine_id: string;
  signal?:
    | "SIGHUP"
    | "SIGINT"
    | "SIGQUIT"
    | "SIGKILL"
    | "SIGUSR1"
    | "SIGUSR2"
    | "SIGTERM";
  timeout?: string;
}
export const MachinesStopInput = /*@__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  machine_id: Schema.String.pipe(T.PathParam()),
  signal: Schema.optional(
    Schema.Literals([
      "SIGHUP",
      "SIGINT",
      "SIGQUIT",
      "SIGKILL",
      "SIGUSR1",
      "SIGUSR2",
      "SIGTERM",
    ]),
  ),
  timeout: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "POST",
    path: "/apps/{app_name}/machines/{machine_id}/stop",
  }),
) as unknown as Schema.Codec<MachinesStopInput>;

// Output Schema
export type MachinesStopOutput = void;
export const MachinesStopOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MachinesStopOutput>;

// The operation
/**
 * Stop Machine
 *
 * Stop a specific Machine within an app, with an optional request body to specify signal and timeout.
 *
 * @param app_name - Fly App Name
 * @param machine_id - Machine ID
 */
export const MachinesStop = /*@__PURE__*/ API.make(() => ({
  inputSchema: MachinesStopInput,
  outputSchema: MachinesStopOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
