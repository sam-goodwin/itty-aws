import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const V1RestorePhysicalBackupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    id: Schema.Number,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/projects/{ref}/database/backups/restore",
    }),
  );
export type V1RestorePhysicalBackupInput =
  typeof V1RestorePhysicalBackupInput.Type;

// Output Schema
export const V1RestorePhysicalBackupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type V1RestorePhysicalBackupOutput =
  typeof V1RestorePhysicalBackupOutput.Type;

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
