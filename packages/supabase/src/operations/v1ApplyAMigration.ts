import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1ApplyAMigrationInput {
  ref: string;
  query: string;
  name?: string;
  rollback?: string;
}
export const V1ApplyAMigrationInput = /*@__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
  query: Schema.String,
  name: Schema.optional(Schema.String),
  rollback: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/v1/projects/{ref}/database/migrations" }),
) as unknown as Schema.Codec<V1ApplyAMigrationInput>;

// Output Schema
export type V1ApplyAMigrationOutput = void;
export const V1ApplyAMigrationOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1ApplyAMigrationOutput>;

// The operation
/**
 * Apply a database migration
 *
 * Only available to selected partner OAuth apps
 *
 * @param ref - Project ref
 * @param Idempotency-Key - A unique key to ensure the same migration is tracked only once.
 */
export const v1ApplyAMigration = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1ApplyAMigrationInput,
  outputSchema: V1ApplyAMigrationOutput,
  errors: [BadRequest, Forbidden] as const,
}));
