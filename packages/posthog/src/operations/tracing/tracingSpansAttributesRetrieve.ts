import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const TracingSpansAttributesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    attribute_type: Schema.optional(
      Schema.Literals(["span_attribute", "span_resource_attribute"]),
    ),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
    search_values: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/tracing/spans/attributes/",
    }),
  );
export type TracingSpansAttributesRetrieveInput =
  typeof TracingSpansAttributesRetrieveInput.Type;

// Output Schema
export const TracingSpansAttributesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        propertyFilterType: Schema.String,
        matchedOn: Schema.Literals(["key", "value"]),
        matchedValue: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
    count: Schema.Number,
  });
export type TracingSpansAttributesRetrieveOutput =
  typeof TracingSpansAttributesRetrieveOutput.Type;

// The operation
/**
 *
 * @param attribute_type - Type of attributes: "span_attribute" for span-level attributes, "span_resource_attribute" for resource-level attributes.

* `span_attribute` - span_attribute
* `span_resource_attribute` - span_resource_attribute
 * @param limit - Max results (default: 100).
 * @param offset - Pagination offset (default: 0).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Search filter for attribute names.
 * @param search_values - When true, the search query also matches attribute values (not just keys), so a value such as a trace_id finds the key holding it.
 */
export const tracingSpansAttributesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: TracingSpansAttributesRetrieveInput,
    outputSchema: TracingSpansAttributesRetrieveOutput,
  }));
