import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ExternalDataSourcesStoredCredentialsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    search: Schema.optional(Schema.String),
    source_type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/external_data_sources/stored_credentials/",
    }),
  );
export type ExternalDataSourcesStoredCredentialsListInput =
  typeof ExternalDataSourcesStoredCredentialsListInput.Type;

// Output Schema
export const ExternalDataSourcesStoredCredentialsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      credential_id: Schema.String,
      source_type: Schema.String,
      created_at: Schema.String,
      expires_at: Schema.String,
    }),
  );
export type ExternalDataSourcesStoredCredentialsListOutput =
  typeof ExternalDataSourcesStoredCredentialsListOutput.Type;

// The operation
/**
 * List credentials stored via the source connect page that haven't been consumed yet.
 * Returns metadata only (id, source type, timestamps) — never the secrets themselves. Stored
 * credentials are temporary: they disappear once consumed by `setup` or when they expire.
 * Newest first, so after a user confirms they've finished the connect page, the first entry
 * for the source type is the one to pass to `setup`.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 * @param source_type - Only return stored credentials for this source type (e.g. 'Stripe', 'Postgres').
 */
export const externalDataSourcesStoredCredentialsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExternalDataSourcesStoredCredentialsListInput,
    outputSchema: ExternalDataSourcesStoredCredentialsListOutput,
  }));
