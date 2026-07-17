import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface MachinesRestartInput {
  app_name: string;
  machine_id: string;
  timeout?: string;
  signal?:
    | "SIGHUP"
    | "SIGINT"
    | "SIGQUIT"
    | "SIGKILL"
    | "SIGUSR1"
    | "SIGUSR2"
    | "SIGTERM";
}
export const MachinesRestartInput = /*@__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  machine_id: Schema.String.pipe(T.PathParam()),
  timeout: Schema.optional(Schema.String),
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
}).pipe(
  T.Http({
    method: "POST",
    path: "/apps/{app_name}/machines/{machine_id}/restart",
  }),
) as unknown as Schema.Codec<MachinesRestartInput>;

// Output Schema
export type MachinesRestartOutput = void;
export const MachinesRestartOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MachinesRestartOutput>;

// The operation
/**
 * Restart Machine
 *
 * Restart a specific Machine within an app, with an optional timeout parameter.
 *
 * @param app_name - Fly App Name
 * @param machine_id - Machine ID
 * @param timeout - Restart timeout as a Go duration string or number of seconds
 * @param signal - Unix signal name
 */
export const MachinesRestart = /*@__PURE__*/ API.make(() => ({
  inputSchema: MachinesRestartInput,
  outputSchema: MachinesRestartOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
