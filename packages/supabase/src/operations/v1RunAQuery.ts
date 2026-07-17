import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1RunAQueryInput {
  ref: string;
  query: string;
  parameters?: unknown[];
  read_only?: boolean;
}
export const V1RunAQueryInput = /*@__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
  query: Schema.String,
  parameters: Schema.optional(Schema.Array(Schema.Unknown)),
  read_only: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "POST", path: "/v1/projects/{ref}/database/query" }),
) as unknown as Schema.Codec<V1RunAQueryInput>;

// Output Schema
export type V1RunAQueryOutput = void;
export const V1RunAQueryOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1RunAQueryOutput>;

// The operation
/**
 * [Beta] Run sql query
 *
 * @param ref - Project ref
 */
export const v1RunAQuery = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1RunAQueryInput,
  outputSchema: V1RunAQueryOutput,
  errors: [BadRequest, Forbidden] as const,
}));
