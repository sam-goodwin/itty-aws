import * as Schema from "effect/Schema";
import {
  HogFunctionMappingTemplateSchema,
  HogFunctionStatusStateEnumSchema,
  InputsItemSchema,
  InputsSchemaItemSchema,
  MappingsSchema,
} from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const HogFunctionsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    type: Schema.optional(Schema.Unknown),
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
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    updated_at: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    deleted: Schema.optional(Schema.Boolean),
    hog: Schema.optional(Schema.String),
    bytecode: Schema.optional(Schema.NullOr(Schema.Unknown)),
    transpiled: Schema.optional(Schema.NullOr(Schema.String)),
    inputs_schema: Schema.optional(
      Schema.Array(Schema.suspend(() => InputsSchemaItemSchema)),
    ),
    inputs: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => InputsItemSchema),
      ),
    ),
    filters: Schema.optional(
      Schema.Struct({
        source: Schema.optional(
          Schema.Literals(["events", "person-updates", "data-warehouse-table"]),
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
          ttl: Schema.optional(Schema.Number),
          threshold: Schema.optional(Schema.NullOr(Schema.Number)),
          hash: Schema.optional(Schema.String),
          bytecode: Schema.optional(Schema.NullOr(Schema.Unknown)),
        }),
      ),
    ),
    mappings: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.suspend(() => MappingsSchema))),
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
        filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
        masking: Schema.optional(Schema.NullOr(Schema.Unknown)),
        mapping_templates: Schema.optional(
          Schema.NullOr(
            Schema.Array(
              Schema.suspend(() => HogFunctionMappingTemplateSchema),
            ),
          ),
        ),
      }),
    ),
    template_id: Schema.optional(Schema.NullOr(Schema.String)),
    status: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          state: Schema.optional(
            Schema.suspend(() => HogFunctionStatusStateEnumSchema),
          ),
          tokens: Schema.optional(Schema.Number),
        }),
      ),
    ),
    execution_order: Schema.optional(Schema.NullOr(Schema.Number)),
    _create_in_folder: Schema.optional(Schema.String),
    batch_export_id: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/hog_functions/{id}/",
    }),
  );
export type HogFunctionsPartialUpdateInput =
  typeof HogFunctionsPartialUpdateInput.Type;

// Output Schema
export const HogFunctionsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.Unknown),
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
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    updated_at: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    deleted: Schema.optional(Schema.Boolean),
    hog: Schema.optional(Schema.String),
    bytecode: Schema.optional(Schema.NullOr(Schema.Unknown)),
    transpiled: Schema.optional(Schema.NullOr(Schema.String)),
    inputs_schema: Schema.optional(
      Schema.Array(Schema.suspend(() => InputsSchemaItemSchema)),
    ),
    inputs: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.suspend(() => InputsItemSchema),
      ),
    ),
    filters: Schema.optional(
      Schema.Struct({
        source: Schema.optional(
          Schema.Literals(["events", "person-updates", "data-warehouse-table"]),
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
          ttl: Schema.optional(Schema.Number),
          threshold: Schema.optional(Schema.NullOr(Schema.Number)),
          hash: Schema.optional(Schema.String),
          bytecode: Schema.optional(Schema.NullOr(Schema.Unknown)),
        }),
      ),
    ),
    mappings: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.suspend(() => MappingsSchema))),
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
        filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
        masking: Schema.optional(Schema.NullOr(Schema.Unknown)),
        mapping_templates: Schema.optional(
          Schema.NullOr(
            Schema.Array(
              Schema.suspend(() => HogFunctionMappingTemplateSchema),
            ),
          ),
        ),
      }),
    ),
    template_id: Schema.optional(Schema.NullOr(Schema.String)),
    status: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          state: Schema.optional(
            Schema.suspend(() => HogFunctionStatusStateEnumSchema),
          ),
          tokens: Schema.optional(Schema.Number),
        }),
      ),
    ),
    execution_order: Schema.optional(Schema.NullOr(Schema.Number)),
    _create_in_folder: Schema.optional(Schema.String),
    batch_export_id: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type HogFunctionsPartialUpdateOutput =
  typeof HogFunctionsPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this hog function.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const hogFunctionsPartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HogFunctionsPartialUpdateInput,
    outputSchema: HogFunctionsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
