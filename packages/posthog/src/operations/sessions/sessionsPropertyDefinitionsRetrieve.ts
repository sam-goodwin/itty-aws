import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SessionsPropertyDefinitionsRetrieveInput {
  project_id: string;
}
export const SessionsPropertyDefinitionsRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/sessions/property_definitions/",
    }),
  ) as unknown as Schema.Codec<SessionsPropertyDefinitionsRetrieveInput>;

// Output Schema
export type SessionsPropertyDefinitionsRetrieveOutput = void;
export const SessionsPropertyDefinitionsRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<SessionsPropertyDefinitionsRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionsPropertyDefinitionsRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SessionsPropertyDefinitionsRetrieveInput,
    outputSchema: SessionsPropertyDefinitionsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
