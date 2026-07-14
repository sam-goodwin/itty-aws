import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface MachinesReclaimMemoryInput {
  app_name: string;
  machine_id: string;
  amount_mb?: number;
}
export const MachinesReclaimMemoryInput =
  /*@__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    machine_id: Schema.String.pipe(T.PathParam()),
    amount_mb: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apps/{app_name}/machines/{machine_id}/memory/reclaim",
    }),
  ) as unknown as Schema.Codec<MachinesReclaimMemoryInput>;

// Output Schema
export interface MachinesReclaimMemoryOutput {
  actual_mb?: number;
}
export const MachinesReclaimMemoryOutput =
  /*@__PURE__*/ Schema.Struct({
    actual_mb: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<MachinesReclaimMemoryOutput>;

// The operation
/**
 * Reclaim Machine Memory
 *
 * Trigger the balloon device to reclaim memory from a machine
 *
 * @param app_name - Fly App Name
 * @param machine_id - Machine ID
 */
export const MachinesReclaimMemory = /*@__PURE__*/ API.make(() => ({
  inputSchema: MachinesReclaimMemoryInput,
  outputSchema: MachinesReclaimMemoryOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
