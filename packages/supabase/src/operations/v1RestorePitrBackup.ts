import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1RestorePitrBackupInput {
  ref: string;
  recovery_time_target_unix: number;
}
export const V1RestorePitrBackupInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    recovery_time_target_unix: Schema.Number,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/projects/{ref}/database/backups/restore-pitr",
    }),
  ) as unknown as Schema.Codec<V1RestorePitrBackupInput>;

// Output Schema
export type V1RestorePitrBackupOutput = void;
export const V1RestorePitrBackupOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1RestorePitrBackupOutput>;

// The operation
/**
 * Restores a PITR backup for a database
 *
 * @param ref - Project ref
 */
export const v1RestorePitrBackup = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1RestorePitrBackupInput,
  outputSchema: V1RestorePitrBackupOutput,
  errors: [BadRequest, Forbidden] as const,
}));
