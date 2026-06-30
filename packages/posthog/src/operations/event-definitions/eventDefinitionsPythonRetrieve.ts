import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EventDefinitionsPythonRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/event_definitions/python/",
    }),
  );
export type EventDefinitionsPythonRetrieveInput =
  typeof EventDefinitionsPythonRetrieveInput.Type;

// Output Schema
export const EventDefinitionsPythonRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EventDefinitionsPythonRetrieveOutput =
  typeof EventDefinitionsPythonRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventDefinitionsPythonRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventDefinitionsPythonRetrieveInput,
    outputSchema: EventDefinitionsPythonRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
