import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EnvironmentsEventIngestionRestrictionsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/environments/{id}/event_ingestion_restrictions/",
    }),
  );
export type EnvironmentsEventIngestionRestrictionsRetrieveInput =
  typeof EnvironmentsEventIngestionRestrictionsRetrieveInput.Type;

// Output Schema
export const EnvironmentsEventIngestionRestrictionsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EnvironmentsEventIngestionRestrictionsRetrieveOutput =
  typeof EnvironmentsEventIngestionRestrictionsRetrieveOutput.Type;

// The operation
/**
 * Deprecated: use /api/environments/{id}/ instead.
 *
 * @param id - A unique integer value identifying this environment (aka team).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const environmentsEventIngestionRestrictionsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EnvironmentsEventIngestionRestrictionsRetrieveInput,
    outputSchema: EnvironmentsEventIngestionRestrictionsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
