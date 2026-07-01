import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1DeployAFunctionInput {
  ref: string;
  slug?: string;
  bundleOnly?: boolean;
  file?: string[];
  metadata: {
    entrypoint_path: string;
    import_map_path?: string;
    static_patterns?: string[];
    verify_jwt?: boolean;
    name?: string;
  };
}
export const V1DeployAFunctionInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    ref: Schema.String.pipe(T.PathParam()),
    slug: Schema.optional(Schema.String),
    bundleOnly: Schema.optional(Schema.Boolean),
    file: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.Struct({
      entrypoint_path: Schema.String,
      import_map_path: Schema.optional(Schema.String),
      static_patterns: Schema.optional(Schema.Array(Schema.String)),
      verify_jwt: Schema.optional(Schema.Boolean),
      name: Schema.optional(Schema.String),
    }),
  },
).pipe(
  T.Http({
    method: "POST",
    path: "/v1/projects/{ref}/functions/deploy",
    contentType: "multipart",
  }),
) as unknown as Schema.Codec<V1DeployAFunctionInput>;

// Output Schema
export interface V1DeployAFunctionOutput {
  id: string;
  slug: string;
  name: string;
  status: "ACTIVE" | "REMOVED" | "THROTTLED";
  version: number;
  created_at?: number;
  updated_at?: number;
  verify_jwt?: boolean;
  import_map?: boolean;
  entrypoint_path?: string;
  import_map_path?: string;
  ezbr_sha256?: string;
}
export const V1DeployAFunctionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    slug: Schema.String,
    name: Schema.String,
    status: Schema.Literals(["ACTIVE", "REMOVED", "THROTTLED"]),
    version: Schema.Number,
    created_at: Schema.optional(Schema.Number),
    updated_at: Schema.optional(Schema.Number),
    verify_jwt: Schema.optional(Schema.Boolean),
    import_map: Schema.optional(Schema.Boolean),
    entrypoint_path: Schema.optional(Schema.String),
    import_map_path: Schema.optional(Schema.String),
    ezbr_sha256: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<V1DeployAFunctionOutput>;

// The operation
/**
 * Deploy a function
 *
 * A new endpoint to deploy functions. It will create if function does not exist.
 *
 * @param ref - Project ref
 * @param bundleOnly - Boolean string, true or false
 */
export const v1DeployAFunction = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1DeployAFunctionInput,
  outputSchema: V1DeployAFunctionOutput,
  errors: [BadRequest, Forbidden] as const,
}));
