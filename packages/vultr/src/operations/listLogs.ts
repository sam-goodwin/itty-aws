import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ListLogsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  start_time: Schema.optional(Schema.String),
  end_time: Schema.optional(Schema.String),
  log_level: Schema.optional(Schema.String),
  resource_type: Schema.optional(Schema.String),
  resource_id: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/logs" }));
export type ListLogsInput = typeof ListLogsInput.Type;

// Output Schema
export const ListLogsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  logs: Schema.optional(
    Schema.Array(
      Schema.Struct({
        resource_id: Schema.String,
        resource_type: Schema.String,
        log_level: Schema.String,
        message: Schema.String,
        timestamp: Schema.String,
        metadata: Schema.Struct({
          user_id: Schema.String,
          ip_address: Schema.String,
          username: Schema.optional(Schema.String),
          http_status_code: Schema.optional(Schema.Number),
          method: Schema.optional(Schema.String),
          request_path: Schema.optional(Schema.String),
          request_body: Schema.optional(Schema.String),
          query_parameters: Schema.optional(Schema.String),
        }),
      }),
    ),
  ),
  meta: Schema.optional(
    Schema.Struct({
      next_page_url: Schema.String,
      continue_time: Schema.String,
      returned_count: Schema.Number,
      unreturned_count: Schema.Number,
      total_count: Schema.Number,
    }),
  ),
});
export type ListLogsOutput = typeof ListLogsOutput.Type;

// The operation
/**
 * List Logs
 *
 * List the Logs for your account.
 *
 * @param start_time - A UTC timestamp for the start of the time period from which to return logs. `start_time` is an inclusive endpoint. Logs with a timestamp equal to, or after `start_time` are included in the response<br>
<span style="color: red">This field is required if the end_time field is not provided.</span></br>
**Expected Format:** yyyy-mm-ddThh:mm:ssZ<br>
**EX:** `2025-06-26T00:00:00Z`<br>
*start_time must be after to the date added for start_time*<br>
*start_time and end_time may not be more than 30 days and 1 hour apart*<br>
*If no start_time is provided a time 30 days and 1 hour prior to the end_time will be used by default*

 * @param end_time - A UTC timestamp for the end of the time period from which to return logs. `end_time` is an exclusive endpoint.  Only logs with a timestamp before the `end_time` are included in the response. <br>
<span style="color: red">This field is required if the start_time field is not provided.</span></br>
**Expected Format:** yyyy-mm-ddThh:mm:ssZ<br>
**EX:** `2025-06-26T00:00:00Z`<br>
*end_time must be before the date added for start_time*<br>
*start_time and end_time may not be more than 30 days and 1 hour apart*<br>
*If no end_time is provided the current time will be used  by default*
 * @param log_level - Filter the logs by the level assigned to the log.
* `info`
* `debug`
* `warning`
* `error`
* `critical`
 * @param resource_type - Filter the logs by the type of a resource such as an instances, bare-metals, kubernetes, etc.<br>
*resource_type must be an exact match to the value of the resource type set in the log.*

 * @param resource_id - Filter the logs by the UUID of a specific resource such as an instance.
 */
export const listLogs = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListLogsInput,
  outputSchema: ListLogsOutput,
  errors: [BadRequest, NotFound] as const,
}));
