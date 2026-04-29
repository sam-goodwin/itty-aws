import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EventSchemasDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/event_schemas/{id}/",
    }),
  );
export type EventSchemasDestroyInput = typeof EventSchemasDestroyInput.Type;

// Output Schema
export const EventSchemasDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EventSchemasDestroyOutput = typeof EventSchemasDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this event schema.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventSchemasDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EventSchemasDestroyInput,
  outputSchema: EventSchemasDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
