import * as Schema from "effect/Schema";
import {
  AnnotationValueDataSchema,
  BranchCreateRequestSchema,
  BranchSchema,
  ConnectionDetailsSchema,
  DatabaseSchema,
  EndpointSchema,
  MaskingRuleSchema,
  OperationSchema,
  RoleSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const CreateProjectBranchAnonymizedInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    annotation_value: Schema.optional(
      Schema.suspend(() => AnnotationValueDataSchema),
    ),
    branch_create: Schema.optional(
      Schema.suspend(() => BranchCreateRequestSchema),
    ),
    masking_rules: Schema.optional(
      Schema.Array(Schema.suspend(() => MaskingRuleSchema)),
    ),
    start_anonymization: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/projects/{project_id}/branch_anonymized",
    }),
  );
export type CreateProjectBranchAnonymizedInput =
  typeof CreateProjectBranchAnonymizedInput.Type;

// Output Schema
export const CreateProjectBranchAnonymizedOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    branch: Schema.suspend(() => BranchSchema),
    endpoints: Schema.Array(Schema.suspend(() => EndpointSchema)),
    operations: Schema.Array(Schema.suspend(() => OperationSchema)),
    roles: Schema.Array(Schema.suspend(() => RoleSchema)),
    databases: Schema.Array(Schema.suspend(() => DatabaseSchema)),
    connection_uris: Schema.optional(
      Schema.Array(Schema.suspend(() => ConnectionDetailsSchema)),
    ),
  });
export type CreateProjectBranchAnonymizedOutput =
  typeof CreateProjectBranchAnonymizedOutput.Type;

// The operation
/**
 * Create anonymized branch
 *
 * Creates a new branch with anonymized data using PostgreSQL Anonymizer for static masking.
 * This allows developers to work with masked production data.
 * Optionally, provide `masking_rules` to set initial masking rules for the branch
 * and `start_anonymization` to automatically start anonymization after creation. This
 * combines functionality of updating masking rules and starting anonymization into the
 * branch creation request.
 * **Note**: This endpoint is currently in Beta.
 *
 * @param project_id - The Neon project ID
 */
export const createProjectBranchAnonymized =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CreateProjectBranchAnonymizedInput,
    outputSchema: CreateProjectBranchAnonymizedOutput,
  }));
