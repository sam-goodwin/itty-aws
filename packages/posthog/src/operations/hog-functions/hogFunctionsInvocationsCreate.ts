import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HogFunctionsInvocationsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    configuration: Schema.Struct({
      id: Schema.String,
      type: Schema.optional(Schema.Unknown),
      name: Schema.optional(Schema.NullOr(Schema.String)),
      description: Schema.optional(Schema.String),
      created_at: Schema.String,
      created_by: Schema.Struct({
        id: Schema.Number,
        uuid: Schema.String,
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.String,
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.NullOr(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
      updated_at: Schema.String,
      enabled: Schema.optional(Schema.Boolean),
      deleted: Schema.optional(Schema.Boolean),
      hog: Schema.optional(Schema.String),
      bytecode: Schema.NullOr(Schema.Unknown),
      transpiled: Schema.NullOr(Schema.String),
      inputs_schema: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.Literals([
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
            ]),
            key: Schema.String,
            label: Schema.optional(Schema.String),
            choices: Schema.optional(
              Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
            ),
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
            templating: Schema.optional(Schema.Unknown),
          }),
        ),
      ),
      inputs: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            value: Schema.optional(Schema.Unknown),
            templating: Schema.optional(Schema.Literals(["hog", "liquid"])),
            bytecode: Schema.Array(Schema.Unknown),
            order: Schema.Number,
            transpiled: Schema.Unknown,
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
          bytecode: Schema.optional(Schema.NullOr(Schema.Unknown)),
          transpiled: Schema.optional(Schema.Unknown),
          filter_test_accounts: Schema.optional(Schema.Boolean),
          bytecode_error: Schema.optional(Schema.String),
        }),
      ),
      masking: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            ttl: Schema.Number,
            threshold: Schema.optional(Schema.NullOr(Schema.Number)),
            hash: Schema.String,
            bytecode: Schema.optional(Schema.NullOr(Schema.Unknown)),
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
                    type: Schema.Literals([
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
                    ]),
                    key: Schema.String,
                    label: Schema.optional(Schema.String),
                    choices: Schema.optional(
                      Schema.Array(
                        Schema.Record(Schema.String, Schema.Unknown),
                      ),
                    ),
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
                    templating: Schema.optional(Schema.Unknown),
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
                    bytecode: Schema.Array(Schema.Unknown),
                    order: Schema.Number,
                    transpiled: Schema.Unknown,
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
                  bytecode: Schema.optional(Schema.NullOr(Schema.Unknown)),
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
      template: Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        description: Schema.optional(Schema.NullOr(Schema.String)),
        code: Schema.String,
        code_language: Schema.optional(Schema.String),
        inputs_schema: Schema.Unknown,
        type: Schema.String,
        status: Schema.optional(Schema.String),
        category: Schema.optional(Schema.Unknown),
        free: Schema.optional(Schema.Boolean),
        icon_url: Schema.optional(Schema.NullOr(Schema.String)),
        filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
        masking: Schema.optional(Schema.NullOr(Schema.Unknown)),
        mapping_templates: Schema.optional(
          Schema.NullOr(
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                include_by_default: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
                use_all_events_by_default: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
                filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
                inputs: Schema.optional(Schema.NullOr(Schema.Unknown)),
                inputs_schema: Schema.optional(Schema.NullOr(Schema.Unknown)),
              }),
            ),
          ),
        ),
      }),
      template_id: Schema.optional(Schema.NullOr(Schema.String)),
      status: Schema.NullOr(
        Schema.Struct({
          state: Schema.Literals([0, 1, 2, 3, 11, 12]),
          tokens: Schema.Number,
        }),
      ),
      execution_order: Schema.optional(Schema.NullOr(Schema.Number)),
      _create_in_folder: Schema.optional(Schema.String),
      batch_export_id: Schema.NullOr(Schema.String),
    }),
    globals: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    clickhouse_event: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    mock_async_functions: Schema.optional(Schema.Boolean),
    status: Schema.String,
    logs: Schema.Array(Schema.Unknown),
    invocation_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/hog_functions/{id}/invocations/",
    }),
  );
export type HogFunctionsInvocationsCreateInput =
  typeof HogFunctionsInvocationsCreateInput.Type;

// Output Schema
export const HogFunctionsInvocationsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    configuration: Schema.Struct({
      id: Schema.String,
      type: Schema.optional(Schema.Unknown),
      name: Schema.optional(Schema.NullOr(Schema.String)),
      description: Schema.optional(Schema.String),
      created_at: Schema.String,
      created_by: Schema.Struct({
        id: Schema.Number,
        uuid: Schema.String,
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.String,
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.NullOr(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
      updated_at: Schema.String,
      enabled: Schema.optional(Schema.Boolean),
      deleted: Schema.optional(Schema.Boolean),
      hog: Schema.optional(Schema.String),
      bytecode: Schema.NullOr(Schema.Unknown),
      transpiled: Schema.NullOr(Schema.String),
      inputs_schema: Schema.optional(
        Schema.Array(
          Schema.Struct({
            type: Schema.Literals([
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
            ]),
            key: Schema.String,
            label: Schema.optional(Schema.String),
            choices: Schema.optional(
              Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
            ),
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
            templating: Schema.optional(Schema.Unknown),
          }),
        ),
      ),
      inputs: Schema.optional(
        Schema.Record(
          Schema.String,
          Schema.Struct({
            value: Schema.optional(Schema.Unknown),
            templating: Schema.optional(Schema.Literals(["hog", "liquid"])),
            bytecode: Schema.Array(Schema.Unknown),
            order: Schema.Number,
            transpiled: Schema.Unknown,
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
          bytecode: Schema.optional(Schema.NullOr(Schema.Unknown)),
          transpiled: Schema.optional(Schema.Unknown),
          filter_test_accounts: Schema.optional(Schema.Boolean),
          bytecode_error: Schema.optional(Schema.String),
        }),
      ),
      masking: Schema.optional(
        Schema.NullOr(
          Schema.Struct({
            ttl: Schema.Number,
            threshold: Schema.optional(Schema.NullOr(Schema.Number)),
            hash: Schema.String,
            bytecode: Schema.optional(Schema.NullOr(Schema.Unknown)),
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
                    type: Schema.Literals([
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
                    ]),
                    key: Schema.String,
                    label: Schema.optional(Schema.String),
                    choices: Schema.optional(
                      Schema.Array(
                        Schema.Record(Schema.String, Schema.Unknown),
                      ),
                    ),
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
                    templating: Schema.optional(Schema.Unknown),
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
                    bytecode: Schema.Array(Schema.Unknown),
                    order: Schema.Number,
                    transpiled: Schema.Unknown,
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
                  bytecode: Schema.optional(Schema.NullOr(Schema.Unknown)),
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
      template: Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        description: Schema.optional(Schema.NullOr(Schema.String)),
        code: Schema.String,
        code_language: Schema.optional(Schema.String),
        inputs_schema: Schema.Unknown,
        type: Schema.String,
        status: Schema.optional(Schema.String),
        category: Schema.optional(Schema.Unknown),
        free: Schema.optional(Schema.Boolean),
        icon_url: Schema.optional(Schema.NullOr(Schema.String)),
        filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
        masking: Schema.optional(Schema.NullOr(Schema.Unknown)),
        mapping_templates: Schema.optional(
          Schema.NullOr(
            Schema.Array(
              Schema.Struct({
                name: Schema.String,
                include_by_default: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
                use_all_events_by_default: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
                filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
                inputs: Schema.optional(Schema.NullOr(Schema.Unknown)),
                inputs_schema: Schema.optional(Schema.NullOr(Schema.Unknown)),
              }),
            ),
          ),
        ),
      }),
      template_id: Schema.optional(Schema.NullOr(Schema.String)),
      status: Schema.NullOr(
        Schema.Struct({
          state: Schema.Literals([0, 1, 2, 3, 11, 12]),
          tokens: Schema.Number,
        }),
      ),
      execution_order: Schema.optional(Schema.NullOr(Schema.Number)),
      _create_in_folder: Schema.optional(Schema.String),
      batch_export_id: Schema.NullOr(Schema.String),
    }),
    globals: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    clickhouse_event: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    mock_async_functions: Schema.optional(Schema.Boolean),
    status: Schema.String,
    logs: Schema.Array(Schema.Unknown),
    invocation_id: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type HogFunctionsInvocationsCreateOutput =
  typeof HogFunctionsInvocationsCreateOutput.Type;

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
