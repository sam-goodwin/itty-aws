import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1ListAllBackupsInput {
  ref: string;
}
export const V1ListAllBackupsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/v1/projects/{ref}/database/backups" }),
) as unknown as Schema.Codec<V1ListAllBackupsInput>;

// Output Schema
export interface V1ListAllBackupsOutput {
  region: string;
  walg_enabled: boolean;
  pitr_enabled: boolean;
  backups: {
    id: number;
    is_physical_backup: boolean;
    status:
      | "COMPLETED"
      | "FAILED"
      | "PENDING"
      | "REMOVED"
      | "ARCHIVED"
      | "CANCELLED";
    inserted_at: string;
  }[];
  physical_backup_data: {
    earliest_physical_backup_date_unix?: number;
    latest_physical_backup_date_unix?: number;
  };
}
export const V1ListAllBackupsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    region: Schema.String,
    walg_enabled: Schema.Boolean,
    pitr_enabled: Schema.Boolean,
    backups: Schema.Array(
      Schema.Struct({
        id: Schema.Number,
        is_physical_backup: Schema.Boolean,
        status: Schema.Literals([
          "COMPLETED",
          "FAILED",
          "PENDING",
          "REMOVED",
          "ARCHIVED",
          "CANCELLED",
        ]),
        inserted_at: Schema.String,
      }),
    ),
    physical_backup_data: Schema.Struct({
      earliest_physical_backup_date_unix: Schema.optional(Schema.Number),
      latest_physical_backup_date_unix: Schema.optional(Schema.Number),
    }),
  },
) as unknown as Schema.Codec<V1ListAllBackupsOutput>;

// The operation
/**
 * Lists all backups
 *
 * @param ref - Project ref
 */
export const v1ListAllBackups = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1ListAllBackupsInput,
  outputSchema: V1ListAllBackupsOutput,
  errors: [BadRequest, Forbidden] as const,
}));
