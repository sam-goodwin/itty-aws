import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface MachinesGetMemoryInput {
  app_name: string;
  machine_id: string;
}
export const MachinesGetMemoryInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    app_name: Schema.String.pipe(T.PathParam()),
    machine_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/apps/{app_name}/machines/{machine_id}/memory",
  }),
) as unknown as Schema.Codec<MachinesGetMemoryInput>;

// Output Schema
export interface MachinesGetMemoryOutput {
  available_mb?: number;
  limit_mb?: number;
}
export const MachinesGetMemoryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    available_mb: Schema.optional(Schema.Number),
    limit_mb: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<MachinesGetMemoryOutput>;

// The operation
/**
 * Get Machine Memory
 *
 * Get current memory limit and available capacity for a machine
 *
 * @param app_name - Fly App Name
 * @param machine_id - Machine ID
 */
export const MachinesGetMemory = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MachinesGetMemoryInput,
  outputSchema: MachinesGetMemoryOutput,
  errors: [Forbidden, NotFound] as const,
}));
