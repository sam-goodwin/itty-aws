import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest } from "../../errors.ts";

// Input Schema
export interface EngineeringAnalyticsQuarantineInput {
  project_id: string;
  repo?: string;
  source_id?: string;
}
export const EngineeringAnalyticsQuarantineInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    repo: Schema.optional(Schema.String),
    source_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/engineering_analytics/quarantine/",
    }),
  ) as unknown as Schema.Codec<EngineeringAnalyticsQuarantineInput>;

// Output Schema
export interface EngineeringAnalyticsQuarantineOutput {
  entries: {
    id: string;
    runner: string;
    reason: string;
    owner: string;
    issue: string;
    added: string;
    expires: string;
    mode: "run" | "skip";
    lifecycle: "active" | "expiring_soon" | "in_grace" | "overdue";
    days_until_expiry: number;
    selector_kind: "product" | "file" | "directory" | "test";
  }[];
  repo: { provider: string; owner: string; name: string } | null;
  available: boolean;
  parse_errors: string[];
  parse_warnings: string[];
  source_url: string;
  generated_at: string;
}
export const EngineeringAnalyticsQuarantineOutput =
  /*@__PURE__*/ Schema.Struct({
    entries: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        runner: Schema.String,
        reason: Schema.String,
        owner: Schema.String,
        issue: Schema.String,
        added: Schema.String,
        expires: Schema.String,
        mode: Schema.Literals(["run", "skip"]),
        lifecycle: Schema.Literals([
          "active",
          "expiring_soon",
          "in_grace",
          "overdue",
        ]),
        days_until_expiry: Schema.Number,
        selector_kind: Schema.Literals([
          "product",
          "file",
          "directory",
          "test",
        ]),
      }),
    ),
    repo: Schema.NullOr(
      Schema.Struct({
        provider: Schema.String,
        owner: Schema.String,
        name: Schema.String,
      }),
    ),
    available: Schema.Boolean,
    parse_errors: Schema.Array(Schema.String),
    parse_warnings: Schema.Array(Schema.String),
    source_url: Schema.String,
    generated_at: Schema.String,
  }) as unknown as Schema.Codec<EngineeringAnalyticsQuarantineOutput>;

// The operation
/**
 * Flaky-test quarantine file
 *
 * The repository's checked-in .test_quarantine.json: flaky tests temporarily quarantined with a hard expiry, classified by urgency (overdue, in grace, expiring soon, active). `available` is false when the repo has no quarantine file — that is not an error. Parsing is fail-open: malformed entries are reported in parse_errors while well-formed ones are kept.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param repo - Optional 'owner/name' repository to read the quarantine file from. Defaults to the connected GitHub source's most active repo over the last 30 days.
 * @param source_id - Connected GitHub data warehouse source to read from. Defaults to the oldest connected GitHub source when the team has more than one.
 */
export const engineeringAnalyticsQuarantine =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EngineeringAnalyticsQuarantineInput,
    outputSchema: EngineeringAnalyticsQuarantineOutput,
    errors: [BadRequest] as const,
  }));
