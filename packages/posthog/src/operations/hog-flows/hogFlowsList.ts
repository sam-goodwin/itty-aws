import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface HogFlowsListInput {
  project_id: string;
  created_at?: string;
  created_by?: number;
  id?: string;
  limit?: number;
  offset?: number;
  status?: "active" | "archived" | "draft";
  updated_at?: string;
}
export const HogFlowsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  created_at: Schema.optional(Schema.String),
  created_by: Schema.optional(Schema.Number),
  id: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  status: Schema.optional(Schema.Literals(["active", "archived", "draft"])),
  updated_at: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/hog_flows/" }),
) as unknown as Schema.Codec<HogFlowsListInput>;

// Output Schema
export interface HogFlowsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    name?: string | null;
    description?: string;
    version?: number;
    status?: "draft" | "active" | "archived";
    created_at?: string;
    created_by?: {
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
    updated_at?: string;
    trigger?: unknown;
    trigger_masking?: unknown;
    conversion?: unknown;
    exit_condition?:
      | "exit_on_conversion"
      | "exit_on_trigger_not_matched"
      | "exit_on_trigger_not_matched_or_conversion"
      | "exit_only_at_end";
    edges?: unknown;
    actions?: unknown;
    abort_action?: string | null;
    variables?: unknown;
    billable_action_types?: unknown;
  }[];
}
export const HogFlowsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.NullOr(Schema.String)),
        description: Schema.optional(Schema.String),
        version: Schema.optional(Schema.Number),
        status: Schema.optional(
          Schema.Literals(["draft", "active", "archived"]),
        ),
        created_at: Schema.optional(Schema.String),
        created_by: Schema.optional(
          Schema.NullOr(
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
        ),
        updated_at: Schema.optional(Schema.String),
        trigger: Schema.optional(Schema.Unknown),
        trigger_masking: Schema.optional(Schema.Unknown),
        conversion: Schema.optional(Schema.Unknown),
        exit_condition: Schema.optional(
          Schema.Literals([
            "exit_on_conversion",
            "exit_on_trigger_not_matched",
            "exit_on_trigger_not_matched_or_conversion",
            "exit_only_at_end",
          ]),
        ),
        edges: Schema.optional(Schema.Unknown),
        actions: Schema.optional(Schema.Unknown),
        abort_action: Schema.optional(Schema.NullOr(Schema.String)),
        variables: Schema.optional(Schema.Unknown),
        billable_action_types: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
}) as unknown as Schema.Codec<HogFlowsListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param status - * `draft` - Draft
 * `active` - Active
 * `archived` - Archived
 */
export const hogFlowsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HogFlowsListInput,
  outputSchema: HogFlowsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
