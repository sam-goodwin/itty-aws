import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface MachinesExecInput {
  app_name: string;
  machine_id: string;
  cmd?: string;
  command?: string[];
  container?: string;
  stdin?: string;
  timeout?: number;
}
export const MachinesExecInput = /*@__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  machine_id: Schema.String.pipe(T.PathParam()),
  cmd: Schema.optional(Schema.String),
  command: Schema.optional(Schema.Array(Schema.String)),
  container: Schema.optional(Schema.String),
  stdin: Schema.optional(Schema.String),
  timeout: Schema.optional(Schema.Number),
}).pipe(
  T.Http({
    method: "POST",
    path: "/apps/{app_name}/machines/{machine_id}/exec",
  }),
) as unknown as Schema.Codec<MachinesExecInput>;

// Output Schema
export interface MachinesExecOutput {
  exit_code?: number;
  exit_signal?: number;
  stderr?: string;
  stdout?: string;
}
export const MachinesExecOutput = /*@__PURE__*/ Schema.Struct({
  exit_code: Schema.optional(Schema.Number),
  exit_signal: Schema.optional(Schema.Number),
  stderr: Schema.optional(Schema.String),
  stdout: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<MachinesExecOutput>;

// The operation
/**
 * Execute Command
 *
 * Execute a command on a specific Machine and return the raw command output bytes.
 *
 * @param app_name - Fly App Name
 * @param machine_id - Machine ID
 */
export const MachinesExec = /*@__PURE__*/ API.make(() => ({
  inputSchema: MachinesExecInput,
  outputSchema: MachinesExecOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
