import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1GetAFunctionInput {
  ref: string;
  function_slug: string;
}
export const V1GetAFunctionInput = /*@__PURE__*/ Schema.Struct({
  ref: Schema.String.pipe(T.PathParam()),
  function_slug: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/v1/projects/{ref}/functions/{function_slug}",
  }),
) as unknown as Schema.Codec<V1GetAFunctionInput>;

// Output Schema
export interface V1GetAFunctionOutput {
  id: string;
  slug: string;
  name: string;
  status: "ACTIVE" | "REMOVED" | "THROTTLED";
  version: number;
  created_at: number;
  updated_at: number;
  verify_jwt?: boolean;
  import_map?: boolean;
  entrypoint_path?: string;
  import_map_path?: string;
  ezbr_sha256?: string;
}
export const V1GetAFunctionOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String,
  slug: Schema.String,
  name: Schema.String,
  status: Schema.Literals(["ACTIVE", "REMOVED", "THROTTLED"]),
  version: Schema.Number,
  created_at: Schema.Number,
  updated_at: Schema.Number,
  verify_jwt: Schema.optional(Schema.Boolean),
  import_map: Schema.optional(Schema.Boolean),
  entrypoint_path: Schema.optional(Schema.String),
  import_map_path: Schema.optional(Schema.String),
  ezbr_sha256: Schema.optional(Schema.String),
}) as unknown as Schema.Codec<V1GetAFunctionOutput>;

// The operation
/**
 * Retrieve a function
 *
 * Retrieves a function with the specified slug and project.
 *
 * @param ref - Project ref
 * @param function_slug - Function slug
 */
export const v1GetAFunction = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1GetAFunctionInput,
  outputSchema: V1GetAFunctionOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
