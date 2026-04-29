import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EventsRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
  format: Schema.optional(Schema.Literals(["csv", "json"])),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/events/{id}/" }),
);
export type EventsRetrieveInput = typeof EventsRetrieveInput.Type;

// Output Schema
export const EventsRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Record(
  Schema.String,
  Schema.Unknown,
);
export type EventsRetrieveOutput = typeof EventsRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EventsRetrieveInput,
  outputSchema: EventsRetrieveOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
