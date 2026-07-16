import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface AppIPAssignmentsCreateInput {
  app_name: string;
  network?: string;
  org_slug?: string;
  region?: string;
  service_name?: string;
  type?: string;
}
export const AppIPAssignmentsCreateInput =
  /*@__PURE__*/ Schema.Struct({
    app_name: Schema.String.pipe(T.PathParam()),
    network: Schema.optional(Schema.String),
    org_slug: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    service_name: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/apps/{app_name}/ip_assignments" }),
  ) as unknown as Schema.Codec<AppIPAssignmentsCreateInput>;

// Output Schema
export interface AppIPAssignmentsCreateOutput {
  created_at?: string;
  ip?: string;
  region?: string;
  service_name?: string;
  shared?: boolean;
}
export const AppIPAssignmentsCreateOutput =
  /*@__PURE__*/ Schema.Struct({
    created_at: Schema.optional(Schema.String),
    ip: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    service_name: Schema.optional(Schema.String),
    shared: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<AppIPAssignmentsCreateOutput>;

// The operation
/**
 * Assign new IP address to app
 *
 * @param app_name - Fly App Name
 */
export const AppIPAssignmentsCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: AppIPAssignmentsCreateInput,
  outputSchema: AppIPAssignmentsCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
