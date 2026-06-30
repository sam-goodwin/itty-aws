import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const TracingSpansValuesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    attribute_type: Schema.optional(
      Schema.Literals(["span", "span_attribute", "span_resource_attribute"]),
    ),
    key: Schema.String,
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    value: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/tracing/spans/values/",
    }),
  );
export type TracingSpansValuesRetrieveInput =
  typeof TracingSpansValuesRetrieveInput.Type;

// Output Schema
export const TracingSpansValuesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TracingSpansValuesRetrieveOutput =
  typeof TracingSpansValuesRetrieveOutput.Type;

// The operation
/**
 *
 * @param attribute_type - Type of attribute: "span" for built-in span fields (e.g. name), "span_attribute" for span-level attributes, "span_resource_attribute" for resource-level attributes.

* `span` - span
* `span_attribute` - span_attribute
* `span_resource_attribute` - span_resource_attribute
 * @param key - The attribute key to get values for.
 * @param limit - Max results (default: 100).
 * @param offset - Pagination offset (default: 0).
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param value - Search filter for attribute values.
 */
export const tracingSpansValuesRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TracingSpansValuesRetrieveInput,
    outputSchema: TracingSpansValuesRetrieveOutput,
  }),
);
