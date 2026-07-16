import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface EventDefinitionsGolangRetrieveInput {
  project_id: string;
}
export const EventDefinitionsGolangRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/event_definitions/golang/",
    }),
  ) as unknown as Schema.Codec<EventDefinitionsGolangRetrieveInput>;

// Output Schema
export type EventDefinitionsGolangRetrieveOutput = void;
export const EventDefinitionsGolangRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<EventDefinitionsGolangRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventDefinitionsGolangRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EventDefinitionsGolangRetrieveInput,
    outputSchema: EventDefinitionsGolangRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
