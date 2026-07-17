import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1GetAnOrganizationInput {
  slug: string;
}
export const V1GetAnOrganizationInput =
  /*@__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/organizations/{slug}" }),
  ) as unknown as Schema.Codec<V1GetAnOrganizationInput>;

// Output Schema
export interface V1GetAnOrganizationOutput {
  id: string;
  name: string;
  plan?: "free" | "pro" | "team" | "enterprise" | "platform";
  opt_in_tags: (
    | "AI_SQL_GENERATOR_OPT_IN"
    | "AI_DATA_GENERATOR_OPT_IN"
    | "AI_LOG_GENERATOR_OPT_IN"
  )[];
  allowed_release_channels: (
    | "internal"
    | "alpha"
    | "beta"
    | "ga"
    | "withdrawn"
    | "preview"
  )[];
}
export const V1GetAnOrganizationOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    plan: Schema.optional(
      Schema.Literals(["free", "pro", "team", "enterprise", "platform"]),
    ),
    opt_in_tags: Schema.Array(
      Schema.Literals([
        "AI_SQL_GENERATOR_OPT_IN",
        "AI_DATA_GENERATOR_OPT_IN",
        "AI_LOG_GENERATOR_OPT_IN",
      ]),
    ),
    allowed_release_channels: Schema.Array(
      Schema.Literals([
        "internal",
        "alpha",
        "beta",
        "ga",
        "withdrawn",
        "preview",
      ]),
    ),
  }) as unknown as Schema.Codec<V1GetAnOrganizationOutput>;

// The operation
/**
 * Gets information about the organization
 *
 * @param slug - Organization slug
 */
export const v1GetAnOrganization = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1GetAnOrganizationInput,
  outputSchema: V1GetAnOrganizationOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
