import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface EventDefinitionsPrimaryPropertiesRetrieveInput {
  project_id: string;
  names?: string;
}
export const EventDefinitionsPrimaryPropertiesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    names: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/event_definitions/primary_properties/",
    }),
  ) as unknown as Schema.Codec<EventDefinitionsPrimaryPropertiesRetrieveInput>;

// Output Schema
export interface EventDefinitionsPrimaryPropertiesRetrieveOutput {
  primary_properties: Record<string, string>;
}
export const EventDefinitionsPrimaryPropertiesRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    primary_properties: Schema.Record(Schema.String, Schema.String),
  }) as unknown as Schema.Codec<EventDefinitionsPrimaryPropertiesRetrieveOutput>;

// The operation
/**
 * Resolve team-configured primary properties for event definitions.
 * The response only contains entries where a non-null primary_property is set on the
 * EventDefinition. Callers should fall back to the core taxonomy defaults client-side
 * for names not present in the response.
 *
 * @param names - Optional: restrict the response to these event names. Repeat the parameter for multiple names (e.g. `?names=a&names=b`). When omitted, returns every team-configured primary property.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventDefinitionsPrimaryPropertiesRetrieve =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: EventDefinitionsPrimaryPropertiesRetrieveInput,
    outputSchema: EventDefinitionsPrimaryPropertiesRetrieveOutput,
  }));
