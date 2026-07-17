import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface MachinesSuspendInput {
  app_name: string;
  machine_id: string;
}
export const MachinesSuspendInput = /*@__PURE__*/ Schema.Struct({
  app_name: Schema.String.pipe(T.PathParam()),
  machine_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "POST",
    path: "/apps/{app_name}/machines/{machine_id}/suspend",
  }),
) as unknown as Schema.Codec<MachinesSuspendInput>;

// Output Schema
export type MachinesSuspendOutput = void;
export const MachinesSuspendOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MachinesSuspendOutput>;

// The operation
/**
 * Suspend Machine
 *
 * Suspend a specific Machine within an app. The next start operation will attempt (but is not guaranteed) to resume the Machine from a snapshot taken at suspension time, rather than performing a cold boot.
 *
 * @param app_name - Fly App Name
 * @param machine_id - Machine ID
 */
export const MachinesSuspend = /*@__PURE__*/ API.make(() => ({
  inputSchema: MachinesSuspendInput,
  outputSchema: MachinesSuspendOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
