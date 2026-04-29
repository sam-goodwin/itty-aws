import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";
import { SensitiveString } from "../../sensitive.ts";

// Input Schema
export const ExternalDataSourcesDeleteWebhookCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    created_at: Schema.String,
    created_by: Schema.NullOr(Schema.String),
    status: Schema.String,
    client_secret: SensitiveString,
    account_id: Schema.String,
    source_type: Schema.Struct({}),
    latest_error: Schema.NullOr(Schema.String),
    prefix: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    access_method: Schema.Struct({}),
    engine: Schema.Unknown,
    last_run_at: Schema.NullOr(Schema.String),
    schemas: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    job_inputs: Schema.optional(Schema.NullOr(Schema.Unknown)),
    revenue_analytics_config: Schema.Struct({
      enabled: Schema.optional(Schema.Boolean),
      include_invoiceless_charges: Schema.optional(Schema.Boolean),
    }),
    user_access_level: Schema.NullOr(Schema.String),
    supports_webhooks: Schema.Boolean,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/external_data_sources/{id}/delete_webhook/",
    }),
  );
export type ExternalDataSourcesDeleteWebhookCreateInput =
  typeof ExternalDataSourcesDeleteWebhookCreateInput.Type;

// Output Schema
export const ExternalDataSourcesDeleteWebhookCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type ExternalDataSourcesDeleteWebhookCreateOutput =
  typeof ExternalDataSourcesDeleteWebhookCreateOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete External data Sources.
 *
 * @param id - A UUID string identifying this external data source.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const externalDataSourcesDeleteWebhookCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExternalDataSourcesDeleteWebhookCreateInput,
    outputSchema: ExternalDataSourcesDeleteWebhookCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
