import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface EventDefinitionsTypescriptRetrieveInput {
  project_id: string;
}
export const EventDefinitionsTypescriptRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/event_definitions/typescript/",
    }),
  ) as unknown as Schema.Codec<EventDefinitionsTypescriptRetrieveInput>;

// Output Schema
export type EventDefinitionsTypescriptRetrieveOutput = void;
export const EventDefinitionsTypescriptRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<EventDefinitionsTypescriptRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventDefinitionsTypescriptRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: EventDefinitionsTypescriptRetrieveInput,
    outputSchema: EventDefinitionsTypescriptRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
