import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1UpgradePostgresVersionInput {
  ref: string;
  target_version: string;
  release_channel?:
    | "internal"
    | "alpha"
    | "beta"
    | "ga"
    | "withdrawn"
    | "preview";
}
export const V1UpgradePostgresVersionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    target_version: Schema.String,
    release_channel: Schema.optional(
      Schema.Literals([
        "internal",
        "alpha",
        "beta",
        "ga",
        "withdrawn",
        "preview",
      ]),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/projects/{ref}/upgrade" }),
  ) as unknown as Schema.Codec<V1UpgradePostgresVersionInput>;

// Output Schema
export interface V1UpgradePostgresVersionOutput {
  tracking_id: string;
}
export const V1UpgradePostgresVersionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    tracking_id: Schema.String,
  }) as unknown as Schema.Codec<V1UpgradePostgresVersionOutput>;

// The operation
/**
 * [Beta] Upgrades the project's Postgres version
 *
 * @param ref - Project ref
 */
export const v1UpgradePostgresVersion = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1UpgradePostgresVersionInput,
    outputSchema: V1UpgradePostgresVersionOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
