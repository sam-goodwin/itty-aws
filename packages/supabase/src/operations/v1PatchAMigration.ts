import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1PatchAMigrationInput {
  ref: string;
  version: string;
  name?: string;
  rollback?: string;
}
export const V1PatchAMigrationInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    ref: Schema.String.pipe(T.PathParam()),
    version: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    rollback: Schema.optional(Schema.String),
  },
).pipe(
  T.Http({
    method: "PATCH",
    path: "/v1/projects/{ref}/database/migrations/{version}",
  }),
) as unknown as Schema.Codec<V1PatchAMigrationInput>;

// Output Schema
export type V1PatchAMigrationOutput = void;
export const V1PatchAMigrationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<V1PatchAMigrationOutput>;

// The operation
/**
 * Patch an existing entry in migration history
 *
 * Only available to selected partner OAuth apps
 *
 * @param ref - Project ref
 */
export const v1PatchAMigration = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1PatchAMigrationInput,
  outputSchema: V1PatchAMigrationOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
