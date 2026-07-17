import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface EventsRetrieveInput {
  id: string;
  project_id: string;
  format?: "csv" | "json";
  include_person?: boolean;
}
export const EventsRetrieveInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
  format: Schema.optional(Schema.Literals(["csv", "json"])),
  include_person: Schema.optional(Schema.Boolean),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/events/{id}/" }),
) as unknown as Schema.Codec<EventsRetrieveInput>;

// Output Schema
export type EventsRetrieveOutput = Record<string, unknown>;
export const EventsRetrieveOutput = /*@__PURE__*/ Schema.Record(
  Schema.String,
  Schema.Unknown,
) as unknown as Schema.Codec<EventsRetrieveOutput>;

// The operation
/**
 *
 * @param include_person - Include person details for the event. Default: false.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventsRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: EventsRetrieveInput,
  outputSchema: EventsRetrieveOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
