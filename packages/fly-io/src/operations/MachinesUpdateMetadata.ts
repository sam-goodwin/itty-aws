import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export interface MachinesUpdateMetadataInput {
  app_name: string;
  machine_id: string;
  machine_version?: string;
  metadata?: Record<string, string>;
  updated_at?: string;
}
export const MachinesUpdateMetadataInput =
  /*@__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    machine_id: Schema.String.pipe(T.PathParam()),
    machine_version: Schema.optional(Schema.String),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
    updated_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/apps/{app_name}/machines/{machine_id}/metadata",
    }),
  ) as unknown as Schema.Codec<MachinesUpdateMetadataInput>;

// Output Schema
export type MachinesUpdateMetadataOutput = void;
export const MachinesUpdateMetadataOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MachinesUpdateMetadataOutput>;

// The operation
/**
 * Update Metadata (set/remove multiple keys)
 *
 * Update multiple metadata keys at once. Null values and empty strings remove keys.
 * + If `machine_version` is provided and no longer matches the current machine version, returns 412 Precondition Failed.
 *
 * @param app_name - Fly App Name
 * @param machine_id - Machine ID
 */
export const MachinesUpdateMetadata = /*@__PURE__*/ API.make(() => ({
  inputSchema: MachinesUpdateMetadataInput,
  outputSchema: MachinesUpdateMetadataOutput,
  errors: [BadRequest] as const,
}));
