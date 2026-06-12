import * as Schema from "effect/Schema";
import {
  AnnotationValueDataSchema,
  BranchSchema,
  ComputeUnitSchema,
  ConnectionDetailsSchema,
  DatabaseSchema,
  DefaultEndpointSettingsSchema,
  EndpointSchema,
  OperationSchema,
  PgVersionSchema,
  ProjectSchema,
  ProjectSettingsDataSchema,
  ProvisionerSchema,
  RoleSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CreateProjectInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.Struct({
    settings: Schema.optional(Schema.suspend(() => ProjectSettingsDataSchema)),
    name: Schema.optional(Schema.String),
    branch: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        role_name: Schema.optional(Schema.String),
        database_name: Schema.optional(Schema.String),
        annotations: Schema.optional(
          Schema.suspend(() => AnnotationValueDataSchema),
        ),
      }),
    ),
    autoscaling_limit_min_cu: Schema.optional(
      Schema.suspend(() => ComputeUnitSchema),
    ),
    autoscaling_limit_max_cu: Schema.optional(
      Schema.suspend(() => ComputeUnitSchema),
    ),
    provisioner: Schema.optional(Schema.suspend(() => ProvisionerSchema)),
    region_id: Schema.optional(Schema.String),
    default_endpoint_settings: Schema.optional(
      Schema.suspend(() => DefaultEndpointSettingsSchema),
    ),
    pg_version: Schema.optional(Schema.suspend(() => PgVersionSchema)),
    store_passwords: Schema.optional(Schema.Boolean),
    history_retention_seconds: Schema.optional(Schema.Number),
    org_id: Schema.optional(Schema.String),
  }),
}).pipe(T.Http({ method: "POST", path: "/projects" }));
export type CreateProjectInput = typeof CreateProjectInput.Type;

// Output Schema
export const CreateProjectOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project: Schema.suspend(() => ProjectSchema),
  connection_uris: Schema.Array(Schema.suspend(() => ConnectionDetailsSchema)),
  roles: Schema.Array(Schema.suspend(() => RoleSchema)),
  databases: Schema.Array(Schema.suspend(() => DatabaseSchema)),
  operations: Schema.Array(Schema.suspend(() => OperationSchema)),
  branch: Schema.suspend(() => BranchSchema),
  endpoints: Schema.Array(Schema.suspend(() => EndpointSchema)),
});
export type CreateProjectOutput = typeof CreateProjectOutput.Type;

// The operation
/**
 * Create project
 *
 * Creates a Neon project within an organization.
 * You may need to specify an org_id parameter depending on your API key type.
 * Plan limits define how many projects you can create.
 * For more information, see [Manage projects](https://neon.tech/docs/manage/projects/).
 * You can specify a region and Postgres version in the request body.
 * Neon currently supports PostgreSQL 14, 15, 16, and 17.
 * For supported regions and `region_id` values, see [Regions](https://neon.tech/docs/introduction/regions/).
 */
export const createProject = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateProjectInput,
  outputSchema: CreateProjectOutput,
}));
