import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1ApplyProjectAddonInput {
  ref: string;
  addon_variant:
    | "ci_micro"
    | "ci_small"
    | "ci_medium"
    | "ci_large"
    | "ci_xlarge"
    | "ci_2xlarge"
    | "ci_4xlarge"
    | "ci_8xlarge"
    | "ci_12xlarge"
    | "ci_16xlarge"
    | "ci_24xlarge"
    | "ci_24xlarge_optimized_cpu"
    | "ci_24xlarge_optimized_memory"
    | "ci_24xlarge_high_memory"
    | "ci_48xlarge"
    | "ci_48xlarge_optimized_cpu"
    | "ci_48xlarge_optimized_memory"
    | "ci_48xlarge_high_memory"
    | "cd_default"
    | "pitr_7"
    | "pitr_14"
    | "pitr_28"
    | "ipv4_default";
  addon_type:
    | "custom_domain"
    | "compute_instance"
    | "pitr"
    | "ipv4"
    | "auth_mfa_phone"
    | "auth_mfa_web_authn"
    | "log_drain"
    | "etl_pipeline";
}
export const V1ApplyProjectAddonInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    addon_variant: Schema.Union([
      Schema.Literals([
        "ci_micro",
        "ci_small",
        "ci_medium",
        "ci_large",
        "ci_xlarge",
        "ci_2xlarge",
        "ci_4xlarge",
        "ci_8xlarge",
        "ci_12xlarge",
        "ci_16xlarge",
        "ci_24xlarge",
        "ci_24xlarge_optimized_cpu",
        "ci_24xlarge_optimized_memory",
        "ci_24xlarge_high_memory",
        "ci_48xlarge",
        "ci_48xlarge_optimized_cpu",
        "ci_48xlarge_optimized_memory",
        "ci_48xlarge_high_memory",
      ]),
      Schema.Literals(["cd_default"]),
      Schema.Literals(["pitr_7", "pitr_14", "pitr_28"]),
      Schema.Literals(["ipv4_default"]),
    ]),
    addon_type: Schema.Literals([
      "custom_domain",
      "compute_instance",
      "pitr",
      "ipv4",
      "auth_mfa_phone",
      "auth_mfa_web_authn",
      "log_drain",
      "etl_pipeline",
    ]),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/projects/{ref}/billing/addons" }),
  ) as unknown as Schema.Codec<V1ApplyProjectAddonInput>;

// Output Schema
export type V1ApplyProjectAddonOutput = void;
export const V1ApplyProjectAddonOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1ApplyProjectAddonOutput>;

// The operation
/**
 * Apply or update billing addons, including compute instance size
 *
 * Selects an addon variant, for example scaling the project’s compute instance up or down, and applies it to the project.
 *
 * @param ref - Project ref
 */
export const v1ApplyProjectAddon = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1ApplyProjectAddonInput,
  outputSchema: V1ApplyProjectAddonOutput,
  errors: [BadRequest, Forbidden] as const,
}));
