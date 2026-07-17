import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1GetOrganizationProjectClaimInput {
  slug: string;
  token: string;
}
export const V1GetOrganizationProjectClaimInput =
  /*@__PURE__*/ Schema.Struct({
    slug: Schema.String.pipe(T.PathParam()),
    token: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/organizations/{slug}/project-claim/{token}",
    }),
  ) as unknown as Schema.Codec<V1GetOrganizationProjectClaimInput>;

// Output Schema
export interface V1GetOrganizationProjectClaimOutput {
  project: { ref: string; name: string };
  preview: {
    valid: boolean;
    warnings: { key: string; message: string }[];
    errors: { key: string; message: string }[];
    info: { key: string; message: string }[];
    members_exceeding_free_project_limit: { name: string; limit: number }[];
    source_subscription_plan:
      | "free"
      | "pro"
      | "team"
      | "enterprise"
      | "platform";
    target_subscription_plan:
      | "free"
      | "pro"
      | "team"
      | "enterprise"
      | "platform"
      | null;
  };
  expires_at: string;
  created_at: string;
  created_by: string;
}
export const V1GetOrganizationProjectClaimOutput =
  /*@__PURE__*/ Schema.Struct({
    project: Schema.Struct({
      ref: Schema.String,
      name: Schema.String,
    }),
    preview: Schema.Struct({
      valid: Schema.Boolean,
      warnings: Schema.Array(
        Schema.Struct({
          key: Schema.String,
          message: Schema.String,
        }),
      ),
      errors: Schema.Array(
        Schema.Struct({
          key: Schema.String,
          message: Schema.String,
        }),
      ),
      info: Schema.Array(
        Schema.Struct({
          key: Schema.String,
          message: Schema.String,
        }),
      ),
      members_exceeding_free_project_limit: Schema.Array(
        Schema.Struct({
          name: Schema.String,
          limit: Schema.Number,
        }),
      ),
      source_subscription_plan: Schema.Literals([
        "free",
        "pro",
        "team",
        "enterprise",
        "platform",
      ]),
      target_subscription_plan: Schema.NullOr(
        Schema.Literals(["free", "pro", "team", "enterprise", "platform"]),
      ),
    }),
    expires_at: Schema.String,
    created_at: Schema.String,
    created_by: Schema.String,
  }) as unknown as Schema.Codec<V1GetOrganizationProjectClaimOutput>;

// The operation
/**
 * Gets project details for the specified organization and claim token
 *
 * @param slug - Organization slug
 */
export const v1GetOrganizationProjectClaim =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: V1GetOrganizationProjectClaimInput,
    outputSchema: V1GetOrganizationProjectClaimOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
