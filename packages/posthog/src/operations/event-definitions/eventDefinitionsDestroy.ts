import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EventDefinitionsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/event_definitions/{id}/",
    }),
  );
export type EventDefinitionsDestroyInput =
  typeof EventDefinitionsDestroyInput.Type;

// Output Schema
export const EventDefinitionsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EventDefinitionsDestroyOutput =
  typeof EventDefinitionsDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this event definition.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventDefinitionsDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EventDefinitionsDestroyInput,
    outputSchema: EventDefinitionsDestroyOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
