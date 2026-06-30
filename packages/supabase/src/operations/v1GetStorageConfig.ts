import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetStorageConfigInput {
  ref: string;
}
export const V1GetStorageConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/config/storage" }),
  ) as unknown as Schema.Codec<V1GetStorageConfigInput>;

// Output Schema
export interface V1GetStorageConfigOutput {
  fileSizeLimit: number;
  features: {
    imageTransformation: { enabled: boolean };
    s3Protocol: { enabled: boolean };
    purgeCache: { enabled: boolean };
    icebergCatalog: {
      enabled: boolean;
      maxNamespaces: number;
      maxTables: number;
      maxCatalogs: number;
    };
    vectorBuckets: { enabled: boolean; maxBuckets: number; maxIndexes: number };
  };
  capabilities: { list_v2: boolean; iceberg_catalog: boolean };
  external: { upstreamTarget: "main" | "canary" };
  migrationVersion: string;
  databasePoolMode: string;
}
export const V1GetStorageConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    fileSizeLimit: Schema.Number,
    features: Schema.Struct({
      imageTransformation: Schema.Struct({
        enabled: Schema.Boolean,
      }),
      s3Protocol: Schema.Struct({
        enabled: Schema.Boolean,
      }),
      purgeCache: Schema.Struct({
        enabled: Schema.Boolean,
      }),
      icebergCatalog: Schema.Struct({
        enabled: Schema.Boolean,
        maxNamespaces: Schema.Number,
        maxTables: Schema.Number,
        maxCatalogs: Schema.Number,
      }),
      vectorBuckets: Schema.Struct({
        enabled: Schema.Boolean,
        maxBuckets: Schema.Number,
        maxIndexes: Schema.Number,
      }),
    }),
    capabilities: Schema.Struct({
      list_v2: Schema.Boolean,
      iceberg_catalog: Schema.Boolean,
    }),
    external: Schema.Struct({
      upstreamTarget: Schema.Literals(["main", "canary"]),
    }),
    migrationVersion: Schema.String,
    databasePoolMode: Schema.String,
  }) as unknown as Schema.Codec<V1GetStorageConfigOutput>;

// The operation
/**
 * Gets project's storage config
 *
 * @param ref - Project ref
 */
export const v1GetStorageConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1GetStorageConfigInput,
  outputSchema: V1GetStorageConfigOutput,
  errors: [BadRequest, Forbidden] as const,
}));
