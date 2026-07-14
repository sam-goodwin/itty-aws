import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface MachinesSignalInput {
  app_name: string;
  machine_id: string;
  signal?:
    | "SIGABRT"
    | "SIGALRM"
    | "SIGFPE"
    | "SIGHUP"
    | "SIGILL"
    | "SIGINT"
    | "SIGKILL"
    | "SIGPIPE"
    | "SIGQUIT"
    | "SIGSEGV"
    | "SIGTERM"
    | "SIGTRAP"
    | "SIGUSR1"
    | "SIGUSR2";
}
export const MachinesSignalInput = /*@__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  machine_id: Schema.String.pipe(T.PathParam()),
  signal: Schema.optional(
    Schema.Literals([
      "SIGABRT",
      "SIGALRM",
      "SIGFPE",
      "SIGHUP",
      "SIGILL",
      "SIGINT",
      "SIGKILL",
      "SIGPIPE",
      "SIGQUIT",
      "SIGSEGV",
      "SIGTERM",
      "SIGTRAP",
      "SIGUSR1",
      "SIGUSR2",
    ]),
  ),
}).pipe(
  T.Http({
    method: "POST",
    path: "/apps/{app_name}/machines/{machine_id}/signal",
  }),
) as unknown as Schema.Codec<MachinesSignalInput>;

// Output Schema
export type MachinesSignalOutput = void;
export const MachinesSignalOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MachinesSignalOutput>;

// The operation
/**
 * Signal Machine
 *
 * Send a signal to a specific Machine within an app using the details provided in the request body.
 *
 * @param app_name - Fly App Name
 * @param machine_id - Machine ID
 */
export const MachinesSignal = /*@__PURE__*/ API.make(() => ({
  inputSchema: MachinesSignalInput,
  outputSchema: MachinesSignalOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
