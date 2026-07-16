import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface MachinesGetMetadataKeyInput {
  app_name: string;
  machine_id: string;
  key: string;
}
export const MachinesGetMetadataKeyInput =
  /*@__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    machine_id: Schema.String.pipe(T.PathParam()),
    key: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/apps/{app_name}/machines/{machine_id}/metadata/{key}",
    }),
  ) as unknown as Schema.Codec<MachinesGetMetadataKeyInput>;

// Output Schema
export interface MachinesGetMetadataKeyOutput {
  value?: string;
}
export const MachinesGetMetadataKeyOutput =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<MachinesGetMetadataKeyOutput>;

// The operation
/**
 * Get Metadata Value
 *
 * Get the value of a specific metadata key
 *
 * @param app_name - Fly App Name
 * @param machine_id - Machine ID
 * @param key - Metadata Key
 */
export const MachinesGetMetadataKey = /*@__PURE__*/ API.make(() => ({
  inputSchema: MachinesGetMetadataKeyInput,
  outputSchema: MachinesGetMetadataKeyOutput,
  errors: [NotFound] as const,
}));
