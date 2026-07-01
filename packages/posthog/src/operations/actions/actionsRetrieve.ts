import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ActionsRetrieveInput {
  id: number;
  project_id: string;
  format?: "csv" | "json";
}
export const ActionsRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.Number.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
  format: Schema.optional(Schema.Literals(["csv", "json"])),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/actions/{id}/" }),
) as unknown as Schema.Codec<ActionsRetrieveInput>;

// Output Schema
export interface ActionsRetrieveOutput {
  id?: number;
  name?: string | null;
  description?: string;
  tags?: unknown[];
  post_to_slack?: boolean;
  slack_message_format?: string;
  steps?: {
    event?: string | null;
    properties?:
      | (
          | {
              key?: string;
              type?:
                | "event"
                | "event_metadata"
                | "feature"
                | "person"
                | "cohort"
                | "element"
                | "static-cohort"
                | "dynamic-cohort"
                | "precalculated-cohort"
                | "group"
                | "recording"
                | "log_entry"
                | "behavioral"
                | "session"
                | "hogql"
                | "data_warehouse"
                | "data_warehouse_person_property"
                | "error_tracking_issue"
                | "log"
                | "log_attribute"
                | "log_resource_attribute"
                | "span"
                | "span_attribute"
                | "span_resource_attribute"
                | "revenue_analytics"
                | "flag"
                | "workflow_variable";
              value?: string;
              operator?:
                | "exact"
                | "is_not"
                | "icontains"
                | "not_icontains"
                | "regex"
                | "not_regex";
            }
          | {
              key?: string;
              type?:
                | "event"
                | "event_metadata"
                | "feature"
                | "person"
                | "cohort"
                | "element"
                | "static-cohort"
                | "dynamic-cohort"
                | "precalculated-cohort"
                | "group"
                | "recording"
                | "log_entry"
                | "behavioral"
                | "session"
                | "hogql"
                | "data_warehouse"
                | "data_warehouse_person_property"
                | "error_tracking_issue"
                | "log"
                | "log_attribute"
                | "log_resource_attribute"
                | "span"
                | "span_attribute"
                | "span_resource_attribute"
                | "revenue_analytics"
                | "flag"
                | "workflow_variable";
              value?: number;
              operator?: "exact" | "is_not" | "gt" | "lt" | "gte" | "lte";
            }
          | {
              key?: string;
              type?:
                | "event"
                | "event_metadata"
                | "feature"
                | "person"
                | "cohort"
                | "element"
                | "static-cohort"
                | "dynamic-cohort"
                | "precalculated-cohort"
                | "group"
                | "recording"
                | "log_entry"
                | "behavioral"
                | "session"
                | "hogql"
                | "data_warehouse"
                | "data_warehouse_person_property"
                | "error_tracking_issue"
                | "log"
                | "log_attribute"
                | "log_resource_attribute"
                | "span"
                | "span_attribute"
                | "span_resource_attribute"
                | "revenue_analytics"
                | "flag"
                | "workflow_variable";
              value?: string[];
              operator?: "exact" | "is_not" | "in" | "not_in";
            }
          | {
              key?: string;
              type?:
                | "event"
                | "event_metadata"
                | "feature"
                | "person"
                | "cohort"
                | "element"
                | "static-cohort"
                | "dynamic-cohort"
                | "precalculated-cohort"
                | "group"
                | "recording"
                | "log_entry"
                | "behavioral"
                | "session"
                | "hogql"
                | "data_warehouse"
                | "data_warehouse_person_property"
                | "error_tracking_issue"
                | "log"
                | "log_attribute"
                | "log_resource_attribute"
                | "span"
                | "span_attribute"
                | "span_resource_attribute"
                | "revenue_analytics"
                | "flag"
                | "workflow_variable";
              value?: string;
              operator?: "is_date_exact" | "is_date_before" | "is_date_after";
            }
          | {
              key?: string;
              type?:
                | "event"
                | "event_metadata"
                | "feature"
                | "person"
                | "cohort"
                | "element"
                | "static-cohort"
                | "dynamic-cohort"
                | "precalculated-cohort"
                | "group"
                | "recording"
                | "log_entry"
                | "behavioral"
                | "session"
                | "hogql"
                | "data_warehouse"
                | "data_warehouse_person_property"
                | "error_tracking_issue"
                | "log"
                | "log_attribute"
                | "log_resource_attribute"
                | "span"
                | "span_attribute"
                | "span_resource_attribute"
                | "revenue_analytics"
                | "flag"
                | "workflow_variable";
              operator?: "is_set" | "is_not_set";
            }
        )[]
      | null;
    selector?: string | null;
    selector_regex?: string | null;
    tag_name?: string | null;
    text?: string | null;
    text_matching?: "contains" | "regex" | "exact" | null;
    href?: string | null;
    href_matching?: "contains" | "regex" | "exact" | null;
    url?: string | null;
    url_matching?: "contains" | "regex" | "exact" | null;
  }[];
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
  deleted?: boolean;
  is_calculating?: boolean;
  last_calculated_at?: string;
  team_id?: number;
  is_action?: boolean;
  bytecode_error?: string | null;
  pinned_at?: string | null;
  creation_context?: string | null;
  _create_in_folder?: string;
  user_access_level?: string | null;
}
export const ActionsRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.NullOr(Schema.String)),
  description: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Array(Schema.Unknown)),
  post_to_slack: Schema.optional(Schema.Boolean),
  slack_message_format: Schema.optional(Schema.String),
  steps: Schema.optional(
    Schema.Array(
      Schema.Struct({
        event: Schema.optional(Schema.NullOr(Schema.String)),
        properties: Schema.optional(
          Schema.NullOr(
            Schema.Array(
              Schema.Union([
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals([
                      "event",
                      "event_metadata",
                      "feature",
                      "person",
                      "cohort",
                      "element",
                      "static-cohort",
                      "dynamic-cohort",
                      "precalculated-cohort",
                      "group",
                      "recording",
                      "log_entry",
                      "behavioral",
                      "session",
                      "hogql",
                      "data_warehouse",
                      "data_warehouse_person_property",
                      "error_tracking_issue",
                      "log",
                      "log_attribute",
                      "log_resource_attribute",
                      "span",
                      "span_attribute",
                      "span_resource_attribute",
                      "revenue_analytics",
                      "flag",
                      "workflow_variable",
                    ]),
                  ),
                  value: Schema.optional(Schema.String),
                  operator: Schema.optional(
                    Schema.Literals([
                      "exact",
                      "is_not",
                      "icontains",
                      "not_icontains",
                      "regex",
                      "not_regex",
                    ]),
                  ),
                }),
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals([
                      "event",
                      "event_metadata",
                      "feature",
                      "person",
                      "cohort",
                      "element",
                      "static-cohort",
                      "dynamic-cohort",
                      "precalculated-cohort",
                      "group",
                      "recording",
                      "log_entry",
                      "behavioral",
                      "session",
                      "hogql",
                      "data_warehouse",
                      "data_warehouse_person_property",
                      "error_tracking_issue",
                      "log",
                      "log_attribute",
                      "log_resource_attribute",
                      "span",
                      "span_attribute",
                      "span_resource_attribute",
                      "revenue_analytics",
                      "flag",
                      "workflow_variable",
                    ]),
                  ),
                  value: Schema.optional(Schema.Number),
                  operator: Schema.optional(
                    Schema.Literals([
                      "exact",
                      "is_not",
                      "gt",
                      "lt",
                      "gte",
                      "lte",
                    ]),
                  ),
                }),
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals([
                      "event",
                      "event_metadata",
                      "feature",
                      "person",
                      "cohort",
                      "element",
                      "static-cohort",
                      "dynamic-cohort",
                      "precalculated-cohort",
                      "group",
                      "recording",
                      "log_entry",
                      "behavioral",
                      "session",
                      "hogql",
                      "data_warehouse",
                      "data_warehouse_person_property",
                      "error_tracking_issue",
                      "log",
                      "log_attribute",
                      "log_resource_attribute",
                      "span",
                      "span_attribute",
                      "span_resource_attribute",
                      "revenue_analytics",
                      "flag",
                      "workflow_variable",
                    ]),
                  ),
                  value: Schema.optional(Schema.Array(Schema.String)),
                  operator: Schema.optional(
                    Schema.Literals(["exact", "is_not", "in", "not_in"]),
                  ),
                }),
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals([
                      "event",
                      "event_metadata",
                      "feature",
                      "person",
                      "cohort",
                      "element",
                      "static-cohort",
                      "dynamic-cohort",
                      "precalculated-cohort",
                      "group",
                      "recording",
                      "log_entry",
                      "behavioral",
                      "session",
                      "hogql",
                      "data_warehouse",
                      "data_warehouse_person_property",
                      "error_tracking_issue",
                      "log",
                      "log_attribute",
                      "log_resource_attribute",
                      "span",
                      "span_attribute",
                      "span_resource_attribute",
                      "revenue_analytics",
                      "flag",
                      "workflow_variable",
                    ]),
                  ),
                  value: Schema.optional(Schema.String),
                  operator: Schema.optional(
                    Schema.Literals([
                      "is_date_exact",
                      "is_date_before",
                      "is_date_after",
                    ]),
                  ),
                }),
                Schema.Struct({
                  key: Schema.optional(Schema.String),
                  type: Schema.optional(
                    Schema.Literals([
                      "event",
                      "event_metadata",
                      "feature",
                      "person",
                      "cohort",
                      "element",
                      "static-cohort",
                      "dynamic-cohort",
                      "precalculated-cohort",
                      "group",
                      "recording",
                      "log_entry",
                      "behavioral",
                      "session",
                      "hogql",
                      "data_warehouse",
                      "data_warehouse_person_property",
                      "error_tracking_issue",
                      "log",
                      "log_attribute",
                      "log_resource_attribute",
                      "span",
                      "span_attribute",
                      "span_resource_attribute",
                      "revenue_analytics",
                      "flag",
                      "workflow_variable",
                    ]),
                  ),
                  operator: Schema.optional(
                    Schema.Literals(["is_set", "is_not_set"]),
                  ),
                }),
              ]),
            ),
          ),
        ),
        selector: Schema.optional(Schema.NullOr(Schema.String)),
        selector_regex: Schema.optional(Schema.NullOr(Schema.String)),
        tag_name: Schema.optional(Schema.NullOr(Schema.String)),
        text: Schema.optional(Schema.NullOr(Schema.String)),
        text_matching: Schema.optional(
          Schema.NullOr(Schema.Literals(["contains", "regex", "exact"])),
        ),
        href: Schema.optional(Schema.NullOr(Schema.String)),
        href_matching: Schema.optional(
          Schema.NullOr(Schema.Literals(["contains", "regex", "exact"])),
        ),
        url: Schema.optional(Schema.NullOr(Schema.String)),
        url_matching: Schema.optional(
          Schema.NullOr(Schema.Literals(["contains", "regex", "exact"])),
        ),
      }),
    ),
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
  deleted: Schema.optional(Schema.Boolean),
  is_calculating: Schema.optional(Schema.Boolean),
  last_calculated_at: Schema.optional(Schema.String),
  team_id: Schema.optional(Schema.Number),
  is_action: Schema.optional(Schema.Boolean),
  bytecode_error: Schema.optional(Schema.NullOr(Schema.String)),
  pinned_at: Schema.optional(Schema.NullOr(Schema.String)),
  creation_context: Schema.optional(Schema.NullOr(Schema.String)),
  _create_in_folder: Schema.optional(Schema.String),
  user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
}) as unknown as Schema.Codec<ActionsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this action.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const actionsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ActionsRetrieveInput,
  outputSchema: ActionsRetrieveOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
