import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ExternalDataSourcesCdcStatusRetrieveInput {
  id: string;
  project_id: string;
}
export const ExternalDataSourcesCdcStatusRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/external_data_sources/{id}/cdc_status/",
    }),
  ) as unknown as Schema.Codec<ExternalDataSourcesCdcStatusRetrieveInput>;

// Output Schema
export type ExternalDataSourcesCdcStatusRetrieveOutput = void;
export const ExternalDataSourcesCdcStatusRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<ExternalDataSourcesCdcStatusRetrieveOutput>;

// The operation
/**
 * Live CDC health for an existing source: slot/publication existence and WAL lag.
 * Reads from the source DB via the engine adapter. Returns ``{"enabled": false}``
 * when CDC is off, or the stored config plus live ``slot_exists`` /
 * ``publication_exists`` / ``lag_bytes`` when on. 400s if the source DB is
 * unreachable so the UI can show a degraded/unreachable state.
 *
 * @param id - A UUID string identifying this external data source.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const externalDataSourcesCdcStatusRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExternalDataSourcesCdcStatusRetrieveInput,
    outputSchema: ExternalDataSourcesCdcStatusRetrieveOutput,
  }));
