import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ExternalDataSourcesDraftCustomManifestCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    source_name: Schema.optional(Schema.String),
    docs_url: Schema.optional(Schema.String),
    docs_text: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/external_data_sources/draft_custom_manifest/",
    }),
  );
export type ExternalDataSourcesDraftCustomManifestCreateInput =
  typeof ExternalDataSourcesDraftCustomManifestCreateInput.Type;

// Output Schema
export const ExternalDataSourcesDraftCustomManifestCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    draft_status: Schema.Literals(["ok", "invalid", "model_error"]),
    manifest_json: Schema.NullOr(Schema.String),
    resource_names: Schema.Array(Schema.String),
    attempts: Schema.Number,
    error: Schema.NullOr(Schema.String),
  });
export type ExternalDataSourcesDraftCustomManifestCreateOutput =
  typeof ExternalDataSourcesDraftCustomManifestCreateOutput.Type;

// The operation
/**
 * Draft a Custom REST source manifest from API documentation using an LLM.
 * Reads the docs (a URL fetched server-side, or pasted text / OpenAPI spec), asks the model to
 * author a RESTAPIConfig manifest, and validates it against the create-path checks — repairing
 * against validation errors up to a small budget. Returns the manifest for the user to review
 * and tweak in the builder before creating the source; it does NOT create anything. Gated by the
 * `dwh-custom-source-ai-builder` flag, and requires the org to have approved AI data processing,
 * since the docs are sent to the LLM gateway.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const externalDataSourcesDraftCustomManifestCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExternalDataSourcesDraftCustomManifestCreateInput,
    outputSchema: ExternalDataSourcesDraftCustomManifestCreateOutput,
  }));
