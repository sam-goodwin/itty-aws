import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1UpdateStorageConfigInput {
  ref: string;
  fileSizeLimit?: number;
  features?: {
    imageTransformation?: { enabled: boolean };
    s3Protocol?: { enabled: boolean };
    purgeCache?: { enabled: boolean };
    icebergCatalog?: {
      enabled: boolean;
      maxNamespaces: number;
      maxTables: number;
      maxCatalogs: number;
    };
    vectorBuckets?: {
      enabled: boolean;
      maxBuckets: number;
      maxIndexes: number;
    };
  };
  external?: { upstreamTarget: "main" | "canary" };
}
export const V1UpdateStorageConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    fileSizeLimit: Schema.optional(Schema.Number),
    features: Schema.optional(
      Schema.Struct({
        imageTransformation: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
          }),
        ),
        s3Protocol: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
          }),
        ),
        purgeCache: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
          }),
        ),
        icebergCatalog: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
            maxNamespaces: Schema.Number,
            maxTables: Schema.Number,
            maxCatalogs: Schema.Number,
          }),
        ),
        vectorBuckets: Schema.optional(
          Schema.Struct({
            enabled: Schema.Boolean,
            maxBuckets: Schema.Number,
            maxIndexes: Schema.Number,
          }),
        ),
      }),
    ),
    external: Schema.optional(
      Schema.Struct({
        upstreamTarget: Schema.Literals(["main", "canary"]),
      }),
    ),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/projects/{ref}/config/storage" }),
  ) as unknown as Schema.Codec<V1UpdateStorageConfigInput>;

// Output Schema
export type V1UpdateStorageConfigOutput = void;
export const V1UpdateStorageConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<V1UpdateStorageConfigOutput>;

// The operation
/**
 * Updates project's storage config
 *
 * @param ref - Project ref
 */
export const v1UpdateStorageConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1UpdateStorageConfigInput,
    outputSchema: V1UpdateStorageConfigOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
