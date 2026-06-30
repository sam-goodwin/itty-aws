import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface LogsAttributesRetrieveInput {
  project_id: string;
  attribute_type?: "log" | "resource";
  dateRange?: string;
  filterGroup?: string;
  limit?: number;
  offset?: number;
  search?: string;
  search_values?: boolean;
  serviceNames?: string;
}
export const LogsAttributesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    attribute_type: Schema.optional(Schema.Literals(["log", "resource"])),
    dateRange: Schema.optional(Schema.String),
    filterGroup: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
    search_values: Schema.optional(Schema.Boolean),
    serviceNames: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/logs/attributes/",
    }),
  ) as unknown as Schema.Codec<LogsAttributesRetrieveInput>;

// Output Schema
export interface LogsAttributesRetrieveOutput {
  results?: {
    name?: string;
    propertyFilterType?: string;
    matchedOn?: "key" | "value";
    matchedValue?: string | null;
  }[];
  count?: number;
}
export const LogsAttributesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          name: Schema.optional(Schema.String),
          propertyFilterType: Schema.optional(Schema.String),
          matchedOn: Schema.optional(Schema.Literals(["key", "value"])),
          matchedValue: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
    count: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<LogsAttributesRetrieveOutput>;

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
 * @param search_values - When true, the search query also matches attribute values (not just keys). Each result indicates whether it matched on key or value.
 * @param serviceNames - Filter attributes to those appearing in logs from these services.
 */
export const logsAttributesRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LogsAttributesRetrieveInput,
    outputSchema: LogsAttributesRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
