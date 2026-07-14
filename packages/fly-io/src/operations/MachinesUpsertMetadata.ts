import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface MachinesUpsertMetadataInput {
  app_name: string;
  machine_id: string;
  key: string;
  updated_at?: string;
  value?: string;
}
export const MachinesUpsertMetadataInput =
  /*@__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    machine_id: Schema.String.pipe(T.PathParam()),
    key: Schema.String.pipe(T.PathParam()),
    updated_at: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/apps/{app_name}/machines/{machine_id}/metadata/{key}",
    }),
  ) as unknown as Schema.Codec<MachinesUpsertMetadataInput>;

// Output Schema
export type MachinesUpsertMetadataOutput = void;
export const MachinesUpsertMetadataOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MachinesUpsertMetadataOutput>;

// The operation
/**
 * Upsert Metadata Key
 *
 * Update metadata for a specific machine within an app by providing a metadata key.
 *
 * @param app_name - Fly App Name
 * @param machine_id - Machine ID
 * @param key - Metadata Key
 */
export const MachinesUpsertMetadata = /*@__PURE__*/ API.make(() => ({
  inputSchema: MachinesUpsertMetadataInput,
  outputSchema: MachinesUpsertMetadataOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
