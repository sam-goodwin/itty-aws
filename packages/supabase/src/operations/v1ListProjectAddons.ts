import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1ListProjectAddonsInput {
  ref: string;
}
export const V1ListProjectAddonsInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/billing/addons" }),
  ) as unknown as Schema.Codec<V1ListProjectAddonsInput>;

// Output Schema
export interface V1ListProjectAddonsOutput {
  selected_addons: {
    type:
      | "custom_domain"
      | "compute_instance"
      | "pitr"
      | "ipv4"
      | "auth_mfa_phone"
      | "auth_mfa_web_authn"
      | "log_drain"
      | "etl_pipeline";
    variant: {
      id:
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
        | "ipv4_default"
        | "auth_mfa_phone_default"
        | "auth_mfa_web_authn_default"
        | "log_drain_default"
        | "etl_pipeline_default";
      name: string;
      price: {
        description: string;
        type: "fixed" | "usage";
        interval: "monthly" | "hourly";
        amount: number;
      };
      meta?: unknown;
    };
  }[];
  available_addons: {
    type:
      | "custom_domain"
      | "compute_instance"
      | "pitr"
      | "ipv4"
      | "auth_mfa_phone"
      | "auth_mfa_web_authn"
      | "log_drain"
      | "etl_pipeline";
    name: string;
    variants: {
      id:
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
        | "ipv4_default"
        | "auth_mfa_phone_default"
        | "auth_mfa_web_authn_default"
        | "log_drain_default"
        | "etl_pipeline_default";
      name: string;
      price: {
        description: string;
        type: "fixed" | "usage";
        interval: "monthly" | "hourly";
        amount: number;
      };
      meta?: unknown;
    }[];
  }[];
}
export const V1ListProjectAddonsOutput =
  /*@__PURE__*/ Schema.Struct({
    selected_addons: Schema.Array(
      Schema.Struct({
        type: Schema.Literals([
          "custom_domain",
          "compute_instance",
          "pitr",
          "ipv4",
          "auth_mfa_phone",
          "auth_mfa_web_authn",
          "log_drain",
          "etl_pipeline",
        ]),
        variant: Schema.Struct({
          id: Schema.Union([
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
            Schema.Literals(["auth_mfa_phone_default"]),
            Schema.Literals(["auth_mfa_web_authn_default"]),
            Schema.Literals(["log_drain_default"]),
            Schema.Literals(["etl_pipeline_default"]),
          ]),
          name: Schema.String,
          price: Schema.Struct({
            description: Schema.String,
            type: Schema.Literals(["fixed", "usage"]),
            interval: Schema.Literals(["monthly", "hourly"]),
            amount: Schema.Number,
          }),
          meta: Schema.optional(Schema.Unknown),
        }),
      }),
    ),
    available_addons: Schema.Array(
      Schema.Struct({
        type: Schema.Literals([
          "custom_domain",
          "compute_instance",
          "pitr",
          "ipv4",
          "auth_mfa_phone",
          "auth_mfa_web_authn",
          "log_drain",
          "etl_pipeline",
        ]),
        name: Schema.String,
        variants: Schema.Array(
          Schema.Struct({
            id: Schema.Union([
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
              Schema.Literals(["auth_mfa_phone_default"]),
              Schema.Literals(["auth_mfa_web_authn_default"]),
              Schema.Literals(["log_drain_default"]),
              Schema.Literals(["etl_pipeline_default"]),
            ]),
            name: Schema.String,
            price: Schema.Struct({
              description: Schema.String,
              type: Schema.Literals(["fixed", "usage"]),
              interval: Schema.Literals(["monthly", "hourly"]),
              amount: Schema.Number,
            }),
            meta: Schema.optional(Schema.Unknown),
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<V1ListProjectAddonsOutput>;

// The operation
/**
 * List billing addons and compute instance selections
 *
 * Returns the billing addons that are currently applied, including the active compute instance size, and lists every addon option that can be provisioned with pricing metadata.
 *
 * @param ref - Project ref
 */
export const v1ListProjectAddons = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1ListProjectAddonsInput,
  outputSchema: V1ListProjectAddonsOutput,
  errors: [BadRequest, Forbidden] as const,
}));
