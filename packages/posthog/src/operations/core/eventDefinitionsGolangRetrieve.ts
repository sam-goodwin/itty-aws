import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const EventDefinitionsGolangRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/event_definitions/golang/",
    }),
  );
export type EventDefinitionsGolangRetrieveInput =
  typeof EventDefinitionsGolangRetrieveInput.Type;

// Output Schema
export const EventDefinitionsGolangRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EventDefinitionsGolangRetrieveOutput =
  typeof EventDefinitionsGolangRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventDefinitionsGolangRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventDefinitionsGolangRetrieveInput,
    outputSchema: EventDefinitionsGolangRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
