import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LogsAttributesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    attribute_type: Schema.optional(Schema.Literals(["log", "resource"])),
    dateRange: Schema.optional(Schema.String),
    filterGroup: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
    serviceNames: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/logs/attributes/",
    }),
  );
export type LogsAttributesRetrieveInput =
  typeof LogsAttributesRetrieveInput.Type;

// Output Schema
export const LogsAttributesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          propertyFilterType: Schema.optional(Schema.String),
        }),
      ),
    ),
    count: Schema.optional(Schema.Number),
  });
export type LogsAttributesRetrieveOutput =
  typeof LogsAttributesRetrieveOutput.Type;

// The operation
/**
 *
 * @param attribute_type - Type of attributes: "log" for log attributes, "resource" for resource attributes. Defaults to "log".

* `log` - log
* `resource` - resource
 * @param dateRange - Date range to search within. Defaults to last hour.
 * @param filterGroup - Property filters to narrow which logs are scanned for attributes.
 * @param limit - Max results (default: 100)
 * @param offset - Pagination offset (default: 0)
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Search filter for attribute names
 * @param serviceNames - Filter attributes to those appearing in logs from these services.
 */
export const logsAttributesRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LogsAttributesRetrieveInput,
    outputSchema: LogsAttributesRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
