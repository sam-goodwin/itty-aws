import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation dockerComposeImport($environmentId: String!, $projectId: String!, $skipStagingPatch: Boolean, $yaml: String!) {\n  dockerComposeImport(environmentId: $environmentId, projectId: $projectId, skipStagingPatch: $skipStagingPatch, yaml: $yaml) {\n    errors\n    patch\n  }\n}";

// Input Schema (GraphQL variables)
export const DockerComposeImportInput = Schema.Struct({
  environmentId: Schema.String,
  projectId: Schema.String,
  skipStagingPatch: Schema.optional(Schema.NullOr(Schema.Boolean)),
  yaml: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "dockerComposeImport",
    type: "mutation",
  }),
);
export type DockerComposeImportInput = typeof DockerComposeImportInput.Type;

// Output Schema (GraphQL selection set)
export const DockerComposeImportOutput = Schema.Struct({
  errors: Schema.Array(Schema.String),
  patch: Schema.NullOr(Schema.Unknown),
}).pipe(T.ResponsePath("dockerComposeImport"));
export type DockerComposeImportOutput = typeof DockerComposeImportOutput.Type;

/**
 * Create services and volumes from docker compose
 */
export const dockerComposeImport = API.make(() => ({
  inputSchema: DockerComposeImportInput,
  outputSchema: DockerComposeImportOutput,
}));
