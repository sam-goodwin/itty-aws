import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1ListMigrationHistoryInput {
  ref: string;
}
export const V1ListMigrationHistoryInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/database/migrations" }),
  ) as unknown as Schema.Codec<V1ListMigrationHistoryInput>;

// Output Schema
export type V1ListMigrationHistoryOutput = { version: string; name?: string }[];
export const V1ListMigrationHistoryOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
      version: Schema.String,
      name: Schema.optional(Schema.String),
    }),
  ) as unknown as Schema.Codec<V1ListMigrationHistoryOutput>;

// The operation
/**
 * List applied migration versions
 *
 * Only available to selected partner OAuth apps
 *
 * @param ref - Project ref
 */
export const v1ListMigrationHistory = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1ListMigrationHistoryInput,
  outputSchema: V1ListMigrationHistoryOutput,
  errors: [BadRequest, Forbidden] as const,
}));
