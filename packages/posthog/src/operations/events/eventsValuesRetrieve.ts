import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const EventsValuesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/events/values/",
    }),
  );
export type EventsValuesRetrieveInput = typeof EventsValuesRetrieveInput.Type;

// Output Schema
export const EventsValuesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type EventsValuesRetrieveOutput = typeof EventsValuesRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventsValuesRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EventsValuesRetrieveInput,
    outputSchema: EventsValuesRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
