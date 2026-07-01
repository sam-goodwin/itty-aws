import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface HogFunctionsInvocationsCreateInput {
  id: string;
  project_id: string;
  configuration?: {
    id?: string;
    type?:
      | "destination"
      | "site_destination"
      | "internal_destination"
      | "source_webhook"
      | "warehouse_source_webhook"
      | "site_app"
      | "transformation"
      | null;
    name?: string | null;
    description?: string;
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
    enabled?: boolean;
    deleted?: boolean;
    hog?: string;
    bytecode?: unknown;
    transpiled?: string | null;
    inputs_schema?: {
      type?:
        | "string"
        | "number"
        | "boolean"
        | "dictionary"
        | "choice"
        | "json"
        | "integration"
        | "integration_field"
        | "email"
        | "native_email"
        | "posthog_assignee"
        | "posthog_ticket_tags"
        | "posthog_business_hours"
        | "non_failure_status_codes";
      key?: string;
      label?: string;
      choices?: Record<string, unknown>[];
      searchable?: boolean;
      required?: boolean;
      default?: unknown;
      secret?: boolean;
      hidden?: boolean;
      description?: string;
      integration?: string;
      integration_key?: string;
      requires_field?: string;
      integration_field?: string;
      requiredScopes?: string;
      templating?: boolean | "hog" | "liquid";
    }[];
    inputs?: Record<
      string,
      {
        value?: unknown;
        templating?: "hog" | "liquid";
        bytecode?: unknown[];
        order?: number;
        transpiled?: unknown;
      }
    >;
    filters?: {
      source?: "events" | "person-updates" | "data-warehouse-table";
      actions?: Record<string, unknown>[];
      events?: Record<string, unknown>[];
      data_warehouse?: Record<string, unknown>[];
      properties?: Record<string, unknown>[];
      bytecode?: unknown;
      transpiled?: unknown;
      filter_test_accounts?: boolean;
      bytecode_error?: string;
    };
    masking?: {
      ttl?: number;
      threshold?: number | null;
      hash?: string;
      bytecode?: unknown;
    } | null;
    mappings?:
      | {
          name?: string;
          inputs_schema?: {
            type?:
              | "string"
              | "number"
              | "boolean"
              | "dictionary"
              | "choice"
              | "json"
              | "integration"
              | "integration_field"
              | "email"
              | "native_email"
              | "posthog_assignee"
              | "posthog_ticket_tags"
              | "posthog_business_hours"
              | "non_failure_status_codes";
            key?: string;
            label?: string;
            choices?: Record<string, unknown>[];
            searchable?: boolean;
            required?: boolean;
            default?: unknown;
            secret?: boolean;
            hidden?: boolean;
            description?: string;
            integration?: string;
            integration_key?: string;
            requires_field?: string;
            integration_field?: string;
            requiredScopes?: string;
            templating?: boolean | "hog" | "liquid";
          }[];
          inputs?: Record<
            string,
            {
              value?: unknown;
              templating?: "hog" | "liquid";
              bytecode?: unknown[];
              order?: number;
              transpiled?: unknown;
            }
          >;
          filters?: {
            source?: "events" | "person-updates" | "data-warehouse-table";
            actions?: Record<string, unknown>[];
            events?: Record<string, unknown>[];
            data_warehouse?: Record<string, unknown>[];
            properties?: Record<string, unknown>[];
            bytecode?: unknown;
            transpiled?: unknown;
            filter_test_accounts?: boolean;
            bytecode_error?: string;
          };
        }[]
      | null;
    icon_url?: string | null;
    template?: {
      id?: string;
      name?: string;
      description?: string | null;
      code?: string;
      code_language?: string;
      inputs_schema?: unknown;
      type?: string;
      status?: string;
      category?: unknown;
      free?: boolean;
      icon_url?: string | null;
      filters?: unknown;
      masking?: unknown;
      mapping_templates?:
        | {
            name?: string;
            include_by_default?: boolean | null;
            use_all_events_by_default?: boolean | null;
            filters?: unknown;
            inputs?: unknown;
            inputs_schema?: unknown;
          }[]
        | null;
    };
    template_id?: string | null;
    status?: { state?: 0 | 1 | 2 | 3 | 11 | 12; tokens?: number } | null;
    execution_order?: number | null;
    _create_in_folder?: string;
    batch_export_id?: string | null;
    search_match_type?: "exact" | "similar" | null;
  };
  globals?: Record<string, unknown>;
  clickhouse_event?: Record<string, unknown>;
  mock_async_functions?: boolean;
  status?: string;
  logs?: unknown[];
  invocation_id?: string | null;
}
export const HogFunctionsInvocationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    configuration: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.NullOr(
            Schema.Literals([
              "destination",
              "site_destination",
              "internal_destination",
              "source_webhook",
              "warehouse_source_webhook",
              "site_app",
              "transformation",
            ]),
          ),
        ),
        name: Schema.optional(Schema.NullOr(Schema.String)),
        description: Schema.optional(Schema.String),
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
        enabled: Schema.optional(Schema.Boolean),
        deleted: Schema.optional(Schema.Boolean),
        hog: Schema.optional(Schema.String),
        bytecode: Schema.optional(Schema.Unknown),
        transpiled: Schema.optional(Schema.NullOr(Schema.String)),
        inputs_schema: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals([
                  "string",
                  "number",
                  "boolean",
                  "dictionary",
                  "choice",
                  "json",
                  "integration",
                  "integration_field",
                  "email",
                  "native_email",
                  "posthog_assignee",
                  "posthog_ticket_tags",
                  "posthog_business_hours",
                  "non_failure_status_codes",
                ]),
              ),
              key: Schema.optional(Schema.String),
              label: Schema.optional(Schema.String),
              choices: Schema.optional(
                Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
              ),
              searchable: Schema.optional(Schema.Boolean),
              required: Schema.optional(Schema.Boolean),
              default: Schema.optional(Schema.Unknown),
              secret: Schema.optional(Schema.Boolean),
              hidden: Schema.optional(Schema.Boolean),
              description: Schema.optional(Schema.String),
              integration: Schema.optional(Schema.String),
              integration_key: Schema.optional(Schema.String),
              requires_field: Schema.optional(Schema.String),
              integration_field: Schema.optional(Schema.String),
              requiredScopes: Schema.optional(Schema.String),
              templating: Schema.optional(
                Schema.Union([
                  Schema.Boolean,
                  Schema.Literals(["hog", "liquid"]),
                ]),
              ),
            }),
          ),
        ),
        inputs: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              value: Schema.optional(Schema.Unknown),
              templating: Schema.optional(Schema.Literals(["hog", "liquid"])),
              bytecode: Schema.optional(Schema.Array(Schema.Unknown)),
              order: Schema.optional(Schema.Number),
              transpiled: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
        filters: Schema.optional(
          Schema.Struct({
            source: Schema.optional(
              Schema.Literals([
                "events",
                "person-updates",
                "data-warehouse-table",
              ]),
            ),
            actions: Schema.optional(
              Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
            ),
            events: Schema.optional(
              Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
            ),
            data_warehouse: Schema.optional(
              Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
            ),
            properties: Schema.optional(
              Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
            ),
            bytecode: Schema.optional(Schema.Unknown),
            transpiled: Schema.optional(Schema.Unknown),
            filter_test_accounts: Schema.optional(Schema.Boolean),
            bytecode_error: Schema.optional(Schema.String),
          }),
        ),
        masking: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              ttl: Schema.optional(Schema.Number),
              threshold: Schema.optional(Schema.NullOr(Schema.Number)),
              hash: Schema.optional(Schema.String),
              bytecode: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
        mappings: Schema.optional(
          Schema.NullOr(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                inputs_schema: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      type: Schema.optional(
                        Schema.Literals([
                          "string",
                          "number",
                          "boolean",
                          "dictionary",
                          "choice",
                          "json",
                          "integration",
                          "integration_field",
                          "email",
                          "native_email",
                          "posthog_assignee",
                          "posthog_ticket_tags",
                          "posthog_business_hours",
                          "non_failure_status_codes",
                        ]),
                      ),
                      key: Schema.optional(Schema.String),
                      label: Schema.optional(Schema.String),
                      choices: Schema.optional(
                        Schema.Array(
                          Schema.Record(Schema.String, Schema.Unknown),
                        ),
                      ),
                      searchable: Schema.optional(Schema.Boolean),
                      required: Schema.optional(Schema.Boolean),
                      default: Schema.optional(Schema.Unknown),
                      secret: Schema.optional(Schema.Boolean),
                      hidden: Schema.optional(Schema.Boolean),
                      description: Schema.optional(Schema.String),
                      integration: Schema.optional(Schema.String),
                      integration_key: Schema.optional(Schema.String),
                      requires_field: Schema.optional(Schema.String),
                      integration_field: Schema.optional(Schema.String),
                      requiredScopes: Schema.optional(Schema.String),
                      templating: Schema.optional(
                        Schema.Union([
                          Schema.Boolean,
                          Schema.Literals(["hog", "liquid"]),
                        ]),
                      ),
                    }),
                  ),
                ),
                inputs: Schema.optional(
                  Schema.Record(
                    Schema.String,
                    Schema.Struct({
                      value: Schema.optional(Schema.Unknown),
                      templating: Schema.optional(
                        Schema.Literals(["hog", "liquid"]),
                      ),
                      bytecode: Schema.optional(Schema.Array(Schema.Unknown)),
                      order: Schema.optional(Schema.Number),
                      transpiled: Schema.optional(Schema.Unknown),
                    }),
                  ),
                ),
                filters: Schema.optional(
                  Schema.Struct({
                    source: Schema.optional(
                      Schema.Literals([
                        "events",
                        "person-updates",
                        "data-warehouse-table",
                      ]),
                    ),
                    actions: Schema.optional(
                      Schema.Array(
                        Schema.Record(Schema.String, Schema.Unknown),
                      ),
                    ),
                    events: Schema.optional(
                      Schema.Array(
                        Schema.Record(Schema.String, Schema.Unknown),
                      ),
                    ),
                    data_warehouse: Schema.optional(
                      Schema.Array(
                        Schema.Record(Schema.String, Schema.Unknown),
                      ),
                    ),
                    properties: Schema.optional(
                      Schema.Array(
                        Schema.Record(Schema.String, Schema.Unknown),
                      ),
                    ),
                    bytecode: Schema.optional(Schema.Unknown),
                    transpiled: Schema.optional(Schema.Unknown),
                    filter_test_accounts: Schema.optional(Schema.Boolean),
                    bytecode_error: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          ),
        ),
        icon_url: Schema.optional(Schema.NullOr(Schema.String)),
        template: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            description: Schema.optional(Schema.NullOr(Schema.String)),
            code: Schema.optional(Schema.String),
            code_language: Schema.optional(Schema.String),
            inputs_schema: Schema.optional(Schema.Unknown),
            type: Schema.optional(Schema.String),
            status: Schema.optional(Schema.String),
            category: Schema.optional(Schema.Unknown),
            free: Schema.optional(Schema.Boolean),
            icon_url: Schema.optional(Schema.NullOr(Schema.String)),
            filters: Schema.optional(Schema.Unknown),
            masking: Schema.optional(Schema.Unknown),
            mapping_templates: Schema.optional(
              Schema.NullOr(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    include_by_default: Schema.optional(
                      Schema.NullOr(Schema.Boolean),
                    ),
                    use_all_events_by_default: Schema.optional(
                      Schema.NullOr(Schema.Boolean),
                    ),
                    filters: Schema.optional(Schema.Unknown),
                    inputs: Schema.optional(Schema.Unknown),
                    inputs_schema: Schema.optional(Schema.Unknown),
                  }),
                ),
              ),
            ),
          }),
        ),
        template_id: Schema.optional(Schema.NullOr(Schema.String)),
        status: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              state: Schema.optional(Schema.Literals([0, 1, 2, 3, 11, 12])),
              tokens: Schema.optional(Schema.Number),
            }),
          ),
        ),
        execution_order: Schema.optional(Schema.NullOr(Schema.Number)),
        _create_in_folder: Schema.optional(Schema.String),
        batch_export_id: Schema.optional(Schema.NullOr(Schema.String)),
        search_match_type: Schema.optional(
          Schema.NullOr(Schema.Literals(["exact", "similar"])),
        ),
      }),
    ),
    globals: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    clickhouse_event: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    mock_async_functions: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.String),
    logs: Schema.optional(Schema.Array(Schema.Unknown)),
    invocation_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/hog_functions/{id}/invocations/",
    }),
  ) as unknown as Schema.Codec<HogFunctionsInvocationsCreateInput>;

// Output Schema
export interface HogFunctionsInvocationsCreateOutput {
  configuration?: {
    id?: string;
    type?:
      | "destination"
      | "site_destination"
      | "internal_destination"
      | "source_webhook"
      | "warehouse_source_webhook"
      | "site_app"
      | "transformation"
      | null;
    name?: string | null;
    description?: string;
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
    enabled?: boolean;
    deleted?: boolean;
    hog?: string;
    bytecode?: unknown;
    transpiled?: string | null;
    inputs_schema?: {
      type?:
        | "string"
        | "number"
        | "boolean"
        | "dictionary"
        | "choice"
        | "json"
        | "integration"
        | "integration_field"
        | "email"
        | "native_email"
        | "posthog_assignee"
        | "posthog_ticket_tags"
        | "posthog_business_hours"
        | "non_failure_status_codes";
      key?: string;
      label?: string;
      choices?: Record<string, unknown>[];
      searchable?: boolean;
      required?: boolean;
      default?: unknown;
      secret?: boolean;
      hidden?: boolean;
      description?: string;
      integration?: string;
      integration_key?: string;
      requires_field?: string;
      integration_field?: string;
      requiredScopes?: string;
      templating?: boolean | "hog" | "liquid";
    }[];
    inputs?: Record<
      string,
      {
        value?: unknown;
        templating?: "hog" | "liquid";
        bytecode?: unknown[];
        order?: number;
        transpiled?: unknown;
      }
    >;
    filters?: {
      source?: "events" | "person-updates" | "data-warehouse-table";
      actions?: Record<string, unknown>[];
      events?: Record<string, unknown>[];
      data_warehouse?: Record<string, unknown>[];
      properties?: Record<string, unknown>[];
      bytecode?: unknown;
      transpiled?: unknown;
      filter_test_accounts?: boolean;
      bytecode_error?: string;
    };
    masking?: {
      ttl?: number;
      threshold?: number | null;
      hash?: string;
      bytecode?: unknown;
    } | null;
    mappings?:
      | {
          name?: string;
          inputs_schema?: {
            type?:
              | "string"
              | "number"
              | "boolean"
              | "dictionary"
              | "choice"
              | "json"
              | "integration"
              | "integration_field"
              | "email"
              | "native_email"
              | "posthog_assignee"
              | "posthog_ticket_tags"
              | "posthog_business_hours"
              | "non_failure_status_codes";
            key?: string;
            label?: string;
            choices?: Record<string, unknown>[];
            searchable?: boolean;
            required?: boolean;
            default?: unknown;
            secret?: boolean;
            hidden?: boolean;
            description?: string;
            integration?: string;
            integration_key?: string;
            requires_field?: string;
            integration_field?: string;
            requiredScopes?: string;
            templating?: boolean | "hog" | "liquid";
          }[];
          inputs?: Record<
            string,
            {
              value?: unknown;
              templating?: "hog" | "liquid";
              bytecode?: unknown[];
              order?: number;
              transpiled?: unknown;
            }
          >;
          filters?: {
            source?: "events" | "person-updates" | "data-warehouse-table";
            actions?: Record<string, unknown>[];
            events?: Record<string, unknown>[];
            data_warehouse?: Record<string, unknown>[];
            properties?: Record<string, unknown>[];
            bytecode?: unknown;
            transpiled?: unknown;
            filter_test_accounts?: boolean;
            bytecode_error?: string;
          };
        }[]
      | null;
    icon_url?: string | null;
    template?: {
      id?: string;
      name?: string;
      description?: string | null;
      code?: string;
      code_language?: string;
      inputs_schema?: unknown;
      type?: string;
      status?: string;
      category?: unknown;
      free?: boolean;
      icon_url?: string | null;
      filters?: unknown;
      masking?: unknown;
      mapping_templates?:
        | {
            name?: string;
            include_by_default?: boolean | null;
            use_all_events_by_default?: boolean | null;
            filters?: unknown;
            inputs?: unknown;
            inputs_schema?: unknown;
          }[]
        | null;
    };
    template_id?: string | null;
    status?: { state?: 0 | 1 | 2 | 3 | 11 | 12; tokens?: number } | null;
    execution_order?: number | null;
    _create_in_folder?: string;
    batch_export_id?: string | null;
    search_match_type?: "exact" | "similar" | null;
  };
  globals?: Record<string, unknown>;
  clickhouse_event?: Record<string, unknown>;
  mock_async_functions?: boolean;
  status?: string;
  logs?: unknown[];
  invocation_id?: string | null;
}
export const HogFunctionsInvocationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configuration: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.NullOr(
            Schema.Literals([
              "destination",
              "site_destination",
              "internal_destination",
              "source_webhook",
              "warehouse_source_webhook",
              "site_app",
              "transformation",
            ]),
          ),
        ),
        name: Schema.optional(Schema.NullOr(Schema.String)),
        description: Schema.optional(Schema.String),
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
        enabled: Schema.optional(Schema.Boolean),
        deleted: Schema.optional(Schema.Boolean),
        hog: Schema.optional(Schema.String),
        bytecode: Schema.optional(Schema.Unknown),
        transpiled: Schema.optional(Schema.NullOr(Schema.String)),
        inputs_schema: Schema.optional(
          Schema.Array(
            Schema.Struct({
              type: Schema.optional(
                Schema.Literals([
                  "string",
                  "number",
                  "boolean",
                  "dictionary",
                  "choice",
                  "json",
                  "integration",
                  "integration_field",
                  "email",
                  "native_email",
                  "posthog_assignee",
                  "posthog_ticket_tags",
                  "posthog_business_hours",
                  "non_failure_status_codes",
                ]),
              ),
              key: Schema.optional(Schema.String),
              label: Schema.optional(Schema.String),
              choices: Schema.optional(
                Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
              ),
              searchable: Schema.optional(Schema.Boolean),
              required: Schema.optional(Schema.Boolean),
              default: Schema.optional(Schema.Unknown),
              secret: Schema.optional(Schema.Boolean),
              hidden: Schema.optional(Schema.Boolean),
              description: Schema.optional(Schema.String),
              integration: Schema.optional(Schema.String),
              integration_key: Schema.optional(Schema.String),
              requires_field: Schema.optional(Schema.String),
              integration_field: Schema.optional(Schema.String),
              requiredScopes: Schema.optional(Schema.String),
              templating: Schema.optional(
                Schema.Union([
                  Schema.Boolean,
                  Schema.Literals(["hog", "liquid"]),
                ]),
              ),
            }),
          ),
        ),
        inputs: Schema.optional(
          Schema.Record(
            Schema.String,
            Schema.Struct({
              value: Schema.optional(Schema.Unknown),
              templating: Schema.optional(Schema.Literals(["hog", "liquid"])),
              bytecode: Schema.optional(Schema.Array(Schema.Unknown)),
              order: Schema.optional(Schema.Number),
              transpiled: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
        filters: Schema.optional(
          Schema.Struct({
            source: Schema.optional(
              Schema.Literals([
                "events",
                "person-updates",
                "data-warehouse-table",
              ]),
            ),
            actions: Schema.optional(
              Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
            ),
            events: Schema.optional(
              Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
            ),
            data_warehouse: Schema.optional(
              Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
            ),
            properties: Schema.optional(
              Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
            ),
            bytecode: Schema.optional(Schema.Unknown),
            transpiled: Schema.optional(Schema.Unknown),
            filter_test_accounts: Schema.optional(Schema.Boolean),
            bytecode_error: Schema.optional(Schema.String),
          }),
        ),
        masking: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              ttl: Schema.optional(Schema.Number),
              threshold: Schema.optional(Schema.NullOr(Schema.Number)),
              hash: Schema.optional(Schema.String),
              bytecode: Schema.optional(Schema.Unknown),
            }),
          ),
        ),
        mappings: Schema.optional(
          Schema.NullOr(
            Schema.Array(
              Schema.Struct({
                name: Schema.optional(Schema.String),
                inputs_schema: Schema.optional(
                  Schema.Array(
                    Schema.Struct({
                      type: Schema.optional(
                        Schema.Literals([
                          "string",
                          "number",
                          "boolean",
                          "dictionary",
                          "choice",
                          "json",
                          "integration",
                          "integration_field",
                          "email",
                          "native_email",
                          "posthog_assignee",
                          "posthog_ticket_tags",
                          "posthog_business_hours",
                          "non_failure_status_codes",
                        ]),
                      ),
                      key: Schema.optional(Schema.String),
                      label: Schema.optional(Schema.String),
                      choices: Schema.optional(
                        Schema.Array(
                          Schema.Record(Schema.String, Schema.Unknown),
                        ),
                      ),
                      searchable: Schema.optional(Schema.Boolean),
                      required: Schema.optional(Schema.Boolean),
                      default: Schema.optional(Schema.Unknown),
                      secret: Schema.optional(Schema.Boolean),
                      hidden: Schema.optional(Schema.Boolean),
                      description: Schema.optional(Schema.String),
                      integration: Schema.optional(Schema.String),
                      integration_key: Schema.optional(Schema.String),
                      requires_field: Schema.optional(Schema.String),
                      integration_field: Schema.optional(Schema.String),
                      requiredScopes: Schema.optional(Schema.String),
                      templating: Schema.optional(
                        Schema.Union([
                          Schema.Boolean,
                          Schema.Literals(["hog", "liquid"]),
                        ]),
                      ),
                    }),
                  ),
                ),
                inputs: Schema.optional(
                  Schema.Record(
                    Schema.String,
                    Schema.Struct({
                      value: Schema.optional(Schema.Unknown),
                      templating: Schema.optional(
                        Schema.Literals(["hog", "liquid"]),
                      ),
                      bytecode: Schema.optional(Schema.Array(Schema.Unknown)),
                      order: Schema.optional(Schema.Number),
                      transpiled: Schema.optional(Schema.Unknown),
                    }),
                  ),
                ),
                filters: Schema.optional(
                  Schema.Struct({
                    source: Schema.optional(
                      Schema.Literals([
                        "events",
                        "person-updates",
                        "data-warehouse-table",
                      ]),
                    ),
                    actions: Schema.optional(
                      Schema.Array(
                        Schema.Record(Schema.String, Schema.Unknown),
                      ),
                    ),
                    events: Schema.optional(
                      Schema.Array(
                        Schema.Record(Schema.String, Schema.Unknown),
                      ),
                    ),
                    data_warehouse: Schema.optional(
                      Schema.Array(
                        Schema.Record(Schema.String, Schema.Unknown),
                      ),
                    ),
                    properties: Schema.optional(
                      Schema.Array(
                        Schema.Record(Schema.String, Schema.Unknown),
                      ),
                    ),
                    bytecode: Schema.optional(Schema.Unknown),
                    transpiled: Schema.optional(Schema.Unknown),
                    filter_test_accounts: Schema.optional(Schema.Boolean),
                    bytecode_error: Schema.optional(Schema.String),
                  }),
                ),
              }),
            ),
          ),
        ),
        icon_url: Schema.optional(Schema.NullOr(Schema.String)),
        template: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
            description: Schema.optional(Schema.NullOr(Schema.String)),
            code: Schema.optional(Schema.String),
            code_language: Schema.optional(Schema.String),
            inputs_schema: Schema.optional(Schema.Unknown),
            type: Schema.optional(Schema.String),
            status: Schema.optional(Schema.String),
            category: Schema.optional(Schema.Unknown),
            free: Schema.optional(Schema.Boolean),
            icon_url: Schema.optional(Schema.NullOr(Schema.String)),
            filters: Schema.optional(Schema.Unknown),
            masking: Schema.optional(Schema.Unknown),
            mapping_templates: Schema.optional(
              Schema.NullOr(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.String),
                    include_by_default: Schema.optional(
                      Schema.NullOr(Schema.Boolean),
                    ),
                    use_all_events_by_default: Schema.optional(
                      Schema.NullOr(Schema.Boolean),
                    ),
                    filters: Schema.optional(Schema.Unknown),
                    inputs: Schema.optional(Schema.Unknown),
                    inputs_schema: Schema.optional(Schema.Unknown),
                  }),
                ),
              ),
            ),
          }),
        ),
        template_id: Schema.optional(Schema.NullOr(Schema.String)),
        status: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              state: Schema.optional(Schema.Literals([0, 1, 2, 3, 11, 12])),
              tokens: Schema.optional(Schema.Number),
            }),
          ),
        ),
        execution_order: Schema.optional(Schema.NullOr(Schema.Number)),
        _create_in_folder: Schema.optional(Schema.String),
        batch_export_id: Schema.optional(Schema.NullOr(Schema.String)),
        search_match_type: Schema.optional(
          Schema.NullOr(Schema.Literals(["exact", "similar"])),
        ),
      }),
    ),
    globals: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    clickhouse_event: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    mock_async_functions: Schema.optional(Schema.Boolean),
    status: Schema.optional(Schema.String),
    logs: Schema.optional(Schema.Array(Schema.Unknown)),
    invocation_id: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<HogFunctionsInvocationsCreateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this hog function.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFunctionsInvocationsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: HogFunctionsInvocationsCreateInput,
    outputSchema: HogFunctionsInvocationsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
