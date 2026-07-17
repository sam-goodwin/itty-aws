import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1BulkUpdateFunctionsInput {
  ref: string;
}
export const V1BulkUpdateFunctionsInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "PUT", path: "/v1/projects/{ref}/functions" }),
  ) as unknown as Schema.Codec<V1BulkUpdateFunctionsInput>;

// Output Schema
export interface V1BulkUpdateFunctionsOutput {
  functions: {
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
}
export const V1BulkUpdateFunctionsOutput =
  /*@__PURE__*/ Schema.Struct({
    functions: Schema.Array(
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
    ),
  }) as unknown as Schema.Codec<V1BulkUpdateFunctionsOutput>;

// The operation
/**
 * Bulk update functions
 *
 * Bulk update functions. It will create a new function or replace existing. The operation is idempotent. NOTE: You will need to manually bump the version.
 *
 * @param ref - Project ref
 */
export const v1BulkUpdateFunctions = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1BulkUpdateFunctionsInput,
  outputSchema: V1BulkUpdateFunctionsOutput,
  errors: [BadRequest, Forbidden] as const,
}));
