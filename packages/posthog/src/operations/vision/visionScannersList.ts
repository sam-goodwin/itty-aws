import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const VisionScannersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  );
export type VisionScannersListInput = typeof VisionScannersListInput.Type;

// Output Schema
export const VisionScannersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
        created_by: Schema.Unknown,
        updated_at: Schema.String,
      }),
    ),
  });
export type VisionScannersListOutput = typeof VisionScannersListOutput.Type;

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
export const visionScannersList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VisionScannersListInput,
  outputSchema: VisionScannersListOutput,
}));
