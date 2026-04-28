import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const LogsValuesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    attribute_type: Schema.optional(Schema.Literals(["log", "resource"])),
    dateRange: Schema.optional(Schema.String),
    filterGroup: Schema.optional(Schema.String),
    key: Schema.String,
    serviceNames: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/api/projects/{project_id}/logs/values/" }),
  );
export type LogsValuesRetrieveInput = typeof LogsValuesRetrieveInput.Type;

// Output Schema
export const LogsValuesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
      }),
    ),
    refreshing: Schema.Boolean,
  });
export type LogsValuesRetrieveOutput = typeof LogsValuesRetrieveOutput.Type;

// The operation
/**
 *
 * @param attribute_type - Type of attribute: "log" or "resource". Defaults to "log".

* `log` - log
* `resource` - resource
 * @param dateRange - Date range to search within. Defaults to last hour.
 * @param filterGroup - Property filters to narrow which logs are scanned for values.
 * @param key - The attribute key to get values for
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param serviceNames - Filter values to those appearing in logs from these services.
 * @param value - Search filter for attribute values
 */
export const logsValuesRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LogsValuesRetrieveInput,
  outputSchema: LogsValuesRetrieveOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
