import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface VisionScannersListInput {
  project_id: string;
  created_by?: string;
  emits_signals?: boolean;
  enabled?: string;
  limit?: number;
  offset?: number;
  order_by?:
    | "-created_at"
    | "-created_by"
    | "-enabled"
    | "-name"
    | "-sampling_rate"
    | "-scanner_type"
    | "-updated_at"
    | "created_at"
    | "created_by"
    | "enabled"
    | "name"
    | "sampling_rate"
    | "scanner_type"
    | "updated_at";
  scanner_type?: string;
  search?: string;
}
export const VisionScannersListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    created_by: Schema.optional(Schema.String),
    emits_signals: Schema.optional(Schema.Boolean),
    enabled: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    order_by: Schema.optional(
      Schema.Literals([
        "-created_at",
        "-created_by",
        "-enabled",
        "-name",
        "-sampling_rate",
        "-scanner_type",
        "-updated_at",
        "created_at",
        "created_by",
        "enabled",
        "name",
        "sampling_rate",
        "scanner_type",
        "updated_at",
      ]),
    ),
    scanner_type: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/vision/scanners/",
    }),
  ) as unknown as Schema.Codec<VisionScannersListInput>;

// Output Schema
export interface VisionScannersListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
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
  }[];
}
export const VisionScannersListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  }) as unknown as Schema.Codec<VisionScannersListOutput>;

// The operation
/**
 * CRUD for Replay Vision scanners.
 *
 * @param created_by - Filter to scanners created by the given user IDs (comma-separated).
 * @param emits_signals - Filter to scanners that emit Signals.
 * @param enabled - Filter by enabled state. Accepts a comma-separated list of `enabled`/`disabled`.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order_by - Sort scanners by name, created_at, updated_at, scanner_type, enabled, sampling_rate, or created_by. Prefix with `-` for descending.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param scanner_type - Filter by scanner type (monitor, classifier, scorer, summarizer). Accepts a comma-separated list.
 * @param search - Case-insensitive substring match across name, description, and the prompt in scanner_config.
 */
export const visionScannersList = /*@__PURE__*/ API.make(() => ({
  inputSchema: VisionScannersListInput,
  outputSchema: VisionScannersListOutput,
}));
