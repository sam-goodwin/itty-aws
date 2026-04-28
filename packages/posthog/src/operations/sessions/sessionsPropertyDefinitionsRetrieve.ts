import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const SessionsPropertyDefinitionsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/sessions/property_definitions/",
    }),
  );
export type SessionsPropertyDefinitionsRetrieveInput =
  typeof SessionsPropertyDefinitionsRetrieveInput.Type;

// Output Schema
export const SessionsPropertyDefinitionsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SessionsPropertyDefinitionsRetrieveOutput =
  typeof SessionsPropertyDefinitionsRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionsPropertyDefinitionsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SessionsPropertyDefinitionsRetrieveInput,
    outputSchema: SessionsPropertyDefinitionsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
