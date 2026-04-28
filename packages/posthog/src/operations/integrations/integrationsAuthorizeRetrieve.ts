import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const IntegrationsAuthorizeRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/authorize/",
    }),
  );
export type IntegrationsAuthorizeRetrieveInput =
  typeof IntegrationsAuthorizeRetrieveInput.Type;

// Output Schema
export const IntegrationsAuthorizeRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IntegrationsAuthorizeRetrieveOutput =
  typeof IntegrationsAuthorizeRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsAuthorizeRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsAuthorizeRetrieveInput,
    outputSchema: IntegrationsAuthorizeRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
