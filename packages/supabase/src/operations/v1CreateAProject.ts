import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1CreateAProjectInput {
  db_pass: string;
  name: string;
  organization_id?: string;
  organization_slug: string;
  plan?: "free" | "pro";
  region?:
    | "us-east-1"
    | "us-east-2"
    | "us-west-1"
    | "us-west-2"
    | "ap-east-1"
    | "ap-southeast-1"
    | "ap-northeast-1"
    | "ap-northeast-2"
    | "ap-southeast-2"
    | "eu-west-1"
    | "eu-west-2"
    | "eu-west-3"
    | "eu-north-1"
    | "eu-central-1"
    | "eu-central-2"
    | "ca-central-1"
    | "ap-south-1"
    | "sa-east-1";
  region_selection?:
    | {
        type: "specific";
        code:
          | "us-east-1"
          | "us-east-2"
          | "us-west-1"
          | "us-west-2"
          | "ap-east-1"
          | "ap-southeast-1"
          | "ap-northeast-1"
          | "ap-northeast-2"
          | "ap-southeast-2"
          | "eu-west-1"
          | "eu-west-2"
          | "eu-west-3"
          | "eu-north-1"
          | "eu-central-1"
          | "eu-central-2"
          | "ca-central-1"
          | "ap-south-1"
          | "sa-east-1";
      }
    | { type: "smartGroup"; code: "americas" | "emea" | "apac" };
  kps_enabled?: boolean;
  desired_instance_size?:
    | "nano"
    | "micro"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "2xlarge"
    | "4xlarge"
    | "8xlarge"
    | "12xlarge"
    | "16xlarge"
    | "24xlarge"
    | "24xlarge_optimized_memory"
    | "24xlarge_optimized_cpu"
    | "24xlarge_high_memory"
    | "48xlarge"
    | "48xlarge_optimized_memory"
    | "48xlarge_optimized_cpu"
    | "48xlarge_high_memory";
  template_url?: string;
  high_availability?: boolean;
}
export const V1CreateAProjectInput = /*@__PURE__*/ Schema.Struct({
  db_pass: Schema.String,
  name: Schema.String,
  organization_id: Schema.optional(Schema.String),
  organization_slug: Schema.String,
  plan: Schema.optional(Schema.Literals(["free", "pro"])),
  region: Schema.optional(
    Schema.Literals([
      "us-east-1",
      "us-east-2",
      "us-west-1",
      "us-west-2",
      "ap-east-1",
      "ap-southeast-1",
      "ap-northeast-1",
      "ap-northeast-2",
      "ap-southeast-2",
      "eu-west-1",
      "eu-west-2",
      "eu-west-3",
      "eu-north-1",
      "eu-central-1",
      "eu-central-2",
      "ca-central-1",
      "ap-south-1",
      "sa-east-1",
    ]),
  ),
  region_selection: Schema.optional(
    Schema.Union([
      Schema.Struct({
        type: Schema.Literals(["specific"]),
        code: Schema.Literals([
          "us-east-1",
          "us-east-2",
          "us-west-1",
          "us-west-2",
          "ap-east-1",
          "ap-southeast-1",
          "ap-northeast-1",
          "ap-northeast-2",
          "ap-southeast-2",
          "eu-west-1",
          "eu-west-2",
          "eu-west-3",
          "eu-north-1",
          "eu-central-1",
          "eu-central-2",
          "ca-central-1",
          "ap-south-1",
          "sa-east-1",
        ]),
      }),
      Schema.Struct({
        type: Schema.Literals(["smartGroup"]),
        code: Schema.Literals(["americas", "emea", "apac"]),
      }),
    ]),
  ),
  kps_enabled: Schema.optional(Schema.Boolean),
  desired_instance_size: Schema.optional(
    Schema.Literals([
      "nano",
      "micro",
      "small",
      "medium",
      "large",
      "xlarge",
      "2xlarge",
      "4xlarge",
      "8xlarge",
      "12xlarge",
      "16xlarge",
      "24xlarge",
      "24xlarge_optimized_memory",
      "24xlarge_optimized_cpu",
      "24xlarge_high_memory",
      "48xlarge",
      "48xlarge_optimized_memory",
      "48xlarge_optimized_cpu",
      "48xlarge_high_memory",
    ]),
  ),
  template_url: Schema.optional(Schema.String),
  high_availability: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "POST", path: "/v1/projects" }),
) as unknown as Schema.Codec<V1CreateAProjectInput>;

// Output Schema
export interface V1CreateAProjectOutput {
  id: string;
  ref: string;
  organization_id: string;
  organization_slug: string;
  name: string;
  region: string;
  created_at: string;
  status:
    | "INACTIVE"
    | "ACTIVE_HEALTHY"
    | "ACTIVE_UNHEALTHY"
    | "COMING_UP"
    | "UNKNOWN"
    | "GOING_DOWN"
    | "INIT_FAILED"
    | "REMOVED"
    | "RESTORING"
    | "UPGRADING"
    | "PAUSING"
    | "RESTORE_FAILED"
    | "RESTARTING"
    | "PAUSE_FAILED"
    | "RESIZING";
}
export const V1CreateAProjectOutput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String,
  ref: Schema.String,
  organization_id: Schema.String,
  organization_slug: Schema.String,
  name: Schema.String,
  region: Schema.String,
  created_at: Schema.String,
  status: Schema.Literals([
    "INACTIVE",
    "ACTIVE_HEALTHY",
    "ACTIVE_UNHEALTHY",
    "COMING_UP",
    "UNKNOWN",
    "GOING_DOWN",
    "INIT_FAILED",
    "REMOVED",
    "RESTORING",
    "UPGRADING",
    "PAUSING",
    "RESTORE_FAILED",
    "RESTARTING",
    "PAUSE_FAILED",
    "RESIZING",
  ]),
}) as unknown as Schema.Codec<V1CreateAProjectOutput>;

// The operation
/**
 * Create a project
 */
export const v1CreateAProject = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1CreateAProjectInput,
  outputSchema: V1CreateAProjectOutput,
  errors: [BadRequest, Forbidden] as const,
}));
