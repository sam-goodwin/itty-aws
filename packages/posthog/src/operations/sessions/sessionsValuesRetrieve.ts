import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SessionsValuesRetrieveInput {
  project_id: string;
}
export const SessionsValuesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/sessions/values/",
    }),
  ) as unknown as Schema.Codec<SessionsValuesRetrieveInput>;

// Output Schema
export type SessionsValuesRetrieveOutput = void;
export const SessionsValuesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SessionsValuesRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionsValuesRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SessionsValuesRetrieveInput,
    outputSchema: SessionsValuesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
