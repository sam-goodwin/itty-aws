import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const HostingListNodeJSBuildsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    username: Schema.String.pipe(T.PathParam()),
    domain: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
    states: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/hosting/v1/accounts/{username}/websites/{domain}/nodejs/builds",
    }),
  );
export type HostingListNodeJSBuildsV1Input =
  typeof HostingListNodeJSBuildsV1Input.Type;

// Output Schema
export const HostingListNodeJSBuildsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          uuid: Schema.optional(Schema.String),
          state: Schema.optional(
            Schema.Literals(["pending", "running", "completed", "failed"]),
          ),
          options: Schema.optional(Schema.Unknown),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        current_page: Schema.optional(Schema.Number),
        per_page: Schema.optional(Schema.Number),
        total: Schema.optional(Schema.Number),
      }),
    ),
  });
export type HostingListNodeJSBuildsV1Output =
  typeof HostingListNodeJSBuildsV1Output.Type;

// The operation
/**
 * List NodeJS builds
 *
 * Retrieve a paginated list of Node.js build processes for a specific website.
 * Each build represents a single run of the Node.js build pipeline. Use the `states`
 * query parameter to filter results by build state (pending, running, completed, failed).
 * Use the `uuid` from a build to poll its output via the `Get Node.js Build Logs` endpoint.
 *
 * @param domain - Domain name
 * @param page - Page number
 * @param per_page - Number of items per page
 * @param states - Build states to filter by
 */
export const hostingListNodeJSBuildsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: HostingListNodeJSBuildsV1Input,
    outputSchema: HostingListNodeJSBuildsV1Output,
  }),
);
