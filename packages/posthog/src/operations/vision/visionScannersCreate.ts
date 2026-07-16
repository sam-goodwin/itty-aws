import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VisionScannersCreateInput {
  project_id: string;
  id: string;
  name: string;
  description?: string;
  scanner_type: "monitor" | "classifier" | "scorer" | "summarizer";
  scanner_config: unknown;
  query?: unknown;
  sampling_rate?: number;
  provider?: "google";
  model: "gemini-3-flash-preview" | "gemini-3.1-flash-lite-preview";
  enabled?: boolean;
  emits_signals?: boolean;
  scanner_version: number;
  estimated_monthly_observations: number | null;
  last_swept_at: string;
  created_at: string;
  created_by: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  } | null;
  updated_at: string;
}
export const VisionScannersCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    name: Schema.String,
    description: Schema.optional(Schema.String),
    scanner_type: Schema.Literals([
      "monitor",
      "classifier",
      "scorer",
      "summarizer",
    ]),
    scanner_config: Schema.Unknown,
    query: Schema.optional(Schema.Unknown),
    sampling_rate: Schema.optional(Schema.Number),
    provider: Schema.optional(Schema.Literals(["google"])),
    model: Schema.Literals([
      "gemini-3-flash-preview",
      "gemini-3.1-flash-lite-preview",
    ]),
    enabled: Schema.optional(Schema.Boolean),
    emits_signals: Schema.optional(Schema.Boolean),
    scanner_version: Schema.Number,
    estimated_monthly_observations: Schema.NullOr(Schema.Number),
    last_swept_at: Schema.String,
    created_at: Schema.String,
    created_by: Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals([
                "engineering",
                "data",
                "product",
                "founder",
                "leadership",
                "marketing",
                "sales",
                "other",
              ]),
              Schema.Literals([""]),
            ]),
          ),
        ),
      }),
    ),
    updated_at: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/vision/scanners/",
    }),
  ) as unknown as Schema.Codec<VisionScannersCreateInput>;

// Output Schema
export interface VisionScannersCreateOutput {
  id: string;
  name: string;
  description?: string;
  scanner_type: "monitor" | "classifier" | "scorer" | "summarizer";
  scanner_config: unknown;
  query?: unknown;
  sampling_rate?: number;
  provider?: "google";
  model: "gemini-3-flash-preview" | "gemini-3.1-flash-lite-preview";
  enabled?: boolean;
  emits_signals?: boolean;
  scanner_version: number;
  estimated_monthly_observations: number | null;
  last_swept_at: string;
  created_at: string;
  created_by: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  } | null;
  updated_at: string;
}
export const VisionScannersCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    description: Schema.optional(Schema.String),
    scanner_type: Schema.Literals([
      "monitor",
      "classifier",
      "scorer",
      "summarizer",
    ]),
    scanner_config: Schema.Unknown,
    query: Schema.optional(Schema.Unknown),
    sampling_rate: Schema.optional(Schema.Number),
    provider: Schema.optional(Schema.Literals(["google"])),
    model: Schema.Literals([
      "gemini-3-flash-preview",
      "gemini-3.1-flash-lite-preview",
    ]),
    enabled: Schema.optional(Schema.Boolean),
    emits_signals: Schema.optional(Schema.Boolean),
    scanner_version: Schema.Number,
    estimated_monthly_observations: Schema.NullOr(Schema.Number),
    last_swept_at: Schema.String,
    created_at: Schema.String,
    created_by: Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals([
                "engineering",
                "data",
                "product",
                "founder",
                "leadership",
                "marketing",
                "sales",
                "other",
              ]),
              Schema.Literals([""]),
            ]),
          ),
        ),
      }),
    ),
    updated_at: Schema.String,
  }) as unknown as Schema.Codec<VisionScannersCreateOutput>;

// The operation
/**
 * CRUD for Replay Vision scanners.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const visionScannersCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: VisionScannersCreateInput,
  outputSchema: VisionScannersCreateOutput,
}));
