import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export interface V1RestorePhysicalBackupInput {
  ref: string;
  id: number;
}
export const V1RestorePhysicalBackupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    id: Schema.Number,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/projects/{ref}/database/backups/restore",
    }),
  ) as unknown as Schema.Codec<V1RestorePhysicalBackupInput>;

// Output Schema
export type V1RestorePhysicalBackupOutput = void;
export const V1RestorePhysicalBackupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<V1RestorePhysicalBackupOutput>;

// The operation
/**
 * Restores a physical backup for a database
 *
 * @param ref - Project ref
 */
export const v1RestorePhysicalBackup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1RestorePhysicalBackupInput,
    outputSchema: V1RestorePhysicalBackupOutput,
    errors: [Forbidden] as const,
  }),
);
