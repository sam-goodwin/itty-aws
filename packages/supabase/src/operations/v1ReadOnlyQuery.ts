import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1ReadOnlyQueryInput {
  ref: string;
  query: string;
  parameters?: unknown[];
}
export const V1ReadOnlyQueryInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
  query: Schema.String,
  parameters: Schema.optional(Schema.Array(Schema.Unknown)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/projects/{ref}/database/query/read-only",
  }),
) as unknown as Schema.Codec<V1ReadOnlyQueryInput>;

// Output Schema
export type V1ReadOnlyQueryOutput = void;
export const V1ReadOnlyQueryOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<V1ReadOnlyQueryOutput>;

// The operation
/**
 * [Beta] Run a sql query as supabase_read_only_user
 *
 * All entity references must be schema qualified.
 *
 * @param ref - Project ref
 */
export const v1ReadOnlyQuery = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1ReadOnlyQueryInput,
  outputSchema: V1ReadOnlyQueryOutput,
  errors: [BadRequest, Forbidden] as const,
}));
