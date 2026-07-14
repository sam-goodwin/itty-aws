import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface MachinesDeleteMetadataInput {
  app_name: string;
  machine_id: string;
  key: string;
}
export const MachinesDeleteMetadataInput =
  /*@__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    machine_id: Schema.String.pipe(T.PathParam()),
    key: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/apps/{app_name}/machines/{machine_id}/metadata/{key}",
    }),
  ) as unknown as Schema.Codec<MachinesDeleteMetadataInput>;

// Output Schema
export type MachinesDeleteMetadataOutput = void;
export const MachinesDeleteMetadataOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<MachinesDeleteMetadataOutput>;

// The operation
/**
 * Delete Metadata
 *
 * Delete metadata for a specific Machine within an app by providing a metadata key.
 *
 * @param app_name - Fly App Name
 * @param machine_id - Machine ID
 * @param key - Metadata Key
 */
export const MachinesDeleteMetadata = /*@__PURE__*/ API.make(() => ({
  inputSchema: MachinesDeleteMetadataInput,
  outputSchema: MachinesDeleteMetadataOutput,
  errors: [Forbidden, NotFound] as const,
}));
