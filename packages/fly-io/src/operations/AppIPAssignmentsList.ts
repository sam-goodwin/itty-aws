import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AppIPAssignmentsListInput {
  app_name: string;
}
export const AppIPAssignmentsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/apps/{app_name}/ip_assignments" }),
  ) as unknown as Schema.Codec<AppIPAssignmentsListInput>;

// Output Schema
export interface AppIPAssignmentsListOutput {
  ips?: {
    created_at?: string;
    ip?: string;
    region?: string;
    service_name?: string;
    shared?: boolean;
  }[];
}
export const AppIPAssignmentsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ips: Schema.optional(
      Schema.Array(
        Schema.Struct({
          created_at: Schema.optional(Schema.String),
          ip: Schema.optional(Schema.String),
          region: Schema.optional(Schema.String),
          service_name: Schema.optional(Schema.String),
          shared: Schema.optional(Schema.Boolean),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<AppIPAssignmentsListOutput>;

// The operation
/**
 * List IP assignments for app
 *
 * @param app_name - Fly App Name
 */
export const AppIPAssignmentsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AppIPAssignmentsListInput,
    outputSchema: AppIPAssignmentsListOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
