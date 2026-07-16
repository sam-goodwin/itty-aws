import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1ListAllFunctionsInput {
  ref: string;
}
export const V1ListAllFunctionsInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/functions" }),
  ) as unknown as Schema.Codec<V1ListAllFunctionsInput>;

// Output Schema
export type V1ListAllFunctionsOutput = {
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
}[];
export const V1ListAllFunctionsOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
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
    }),
  ) as unknown as Schema.Codec<V1ListAllFunctionsOutput>;

// The operation
/**
 * List all functions
 *
 * Returns all functions you've previously added to the specified project.
 *
 * @param ref - Project ref
 */
export const v1ListAllFunctions = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1ListAllFunctionsInput,
  outputSchema: V1ListAllFunctionsOutput,
  errors: [BadRequest, Forbidden] as const,
}));
