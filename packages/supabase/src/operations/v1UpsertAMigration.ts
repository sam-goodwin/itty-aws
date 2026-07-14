import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1UpsertAMigrationInput {
  ref: string;
  query: string;
  name?: string;
  rollback?: string;
}
export const V1UpsertAMigrationInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    query: Schema.String,
    name: Schema.optional(Schema.String),
    rollback: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "PUT", path: "/v1/projects/{ref}/database/migrations" }),
  ) as unknown as Schema.Codec<V1UpsertAMigrationInput>;

// Output Schema
export type V1UpsertAMigrationOutput = void;
export const V1UpsertAMigrationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1UpsertAMigrationOutput>;

// The operation
/**
 * Upsert a database migration without applying
 *
 * Only available to selected partner OAuth apps
 *
 * @param ref - Project ref
 * @param Idempotency-Key - A unique key to ensure the same migration is tracked only once.
 */
export const v1UpsertAMigration = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1UpsertAMigrationInput,
  outputSchema: V1UpsertAMigrationOutput,
  errors: [BadRequest, Forbidden] as const,
}));
