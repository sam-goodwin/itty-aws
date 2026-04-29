import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PropertyDefinitionsSeenTogetherRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/property_definitions/seen_together/",
    }),
  );
export type PropertyDefinitionsSeenTogetherRetrieveInput =
  typeof PropertyDefinitionsSeenTogetherRetrieveInput.Type;

// Output Schema
export const PropertyDefinitionsSeenTogetherRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PropertyDefinitionsSeenTogetherRetrieveOutput =
  typeof PropertyDefinitionsSeenTogetherRetrieveOutput.Type;

// The operation
/**
 * Allows a caller to provide a list of event names and a single property name
 * Returns a map of the event names to a boolean representing whether that property has ever been seen with that event_name
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const propertyDefinitionsSeenTogetherRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PropertyDefinitionsSeenTogetherRetrieveInput,
    outputSchema: PropertyDefinitionsSeenTogetherRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
