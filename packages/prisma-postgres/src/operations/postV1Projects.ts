import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostV1ProjectsInput {
  createDatabase?: boolean;
  name?: string;
  region?:
    | "us-east-1"
    | "us-west-1"
    | "eu-west-3"
    | "eu-central-1"
    | "ap-northeast-1"
    | "ap-southeast-1";
}
export const PostV1ProjectsInput = /*@__PURE__*/ Schema.Struct({
  createDatabase: Schema.optional(Schema.Boolean),
  name: Schema.optional(Schema.String),
  region: Schema.optional(
    Schema.Literals([
      "us-east-1",
      "us-west-1",
      "eu-west-3",
      "eu-central-1",
      "ap-northeast-1",
      "ap-southeast-1",
    ]),
  ),
}).pipe(
  T.Http({ method: "POST", path: "/v1/projects" }),
) as unknown as Schema.Codec<PostV1ProjectsInput>;

// Output Schema
export interface PostV1ProjectsOutput {
  data: {
    id: string;
    type: string;
    url: string;
    name: string;
    createdAt: string;
    defaultRegion: string | null;
    workspace: { id: string; url: string; name: string };
    database: {
      id: string;
      type: string;
      url: string;
      name: string;
      status: "provisioning" | "ready";
      createdAt: string;
      isDefault: boolean;
      defaultConnectionId: string | null;
      connections: {
        id: string;
        type: string;
        url: string;
        name: string;
        createdAt: string;
        kind: "postgres" | "accelerate";
        endpoints: {
          direct?: {
            host: string;
            port: number;
            connectionString?: Redacted.Redacted<string>;
          };
          pooled?: {
            host: string;
            port: number;
            connectionString?: Redacted.Redacted<string>;
          };
          accelerate?: {
            host: string;
            port: number;
            connectionString?: Redacted.Redacted<string>;
          };
        };
        directConnection?: { host: string; pass: string; user: string } | null;
        database: { id: string; url: string; name: string };
      }[];
      region: { id: string; name: string };
      source:
        | { type: string }
        | { type: string; databaseId: string; backupId: string }
        | { type: string; databaseId: string }
        | null;
      branchId: string | null;
      apiKeys: {
        id: string;
        type: string;
        url: string;
        name: string;
        createdAt: string;
        kind: "postgres" | "accelerate";
        endpoints: {
          direct?: { host: string; port: number };
          pooled?: { host: string; port: number };
          accelerate?: { host: string; port: number };
        };
        connectionString: Redacted.Redacted<string>;
        directConnection?: { host: string; pass: string; user: string } | null;
      }[];
      connectionString: Redacted.Redacted<string> | null;
      directConnection: { host: string; pass: string; user: string } | null;
    } | null;
  };
}
export const PostV1ProjectsOutput = /*@__PURE__*/ Schema.Struct({
  data: Schema.Struct({
    id: Schema.String,
    type: Schema.String,
    url: Schema.String,
    name: Schema.String,
    createdAt: Schema.String,
    defaultRegion: Schema.NullOr(Schema.String),
    workspace: Schema.Struct({
      id: Schema.String,
      url: Schema.String,
      name: Schema.String,
    }),
    database: Schema.NullOr(
      Schema.Struct({
        id: Schema.String,
        type: Schema.String,
        url: Schema.String,
        name: Schema.String,
        status: Schema.Literals(["provisioning", "ready"]),
        createdAt: Schema.String,
        isDefault: Schema.Boolean,
        defaultConnectionId: Schema.NullOr(Schema.String),
        connections: Schema.Array(
          Schema.Struct({
            id: Schema.String,
            type: Schema.String,
            url: Schema.String,
            name: Schema.String,
            createdAt: Schema.String,
            kind: Schema.Literals(["postgres", "accelerate"]),
            endpoints: Schema.Struct({
              direct: Schema.optional(
                Schema.Struct({
                  host: Schema.String,
                  port: Schema.Number,
                  connectionString: Schema.optional(SensitiveOutputString),
                }),
              ),
              pooled: Schema.optional(
                Schema.Struct({
                  host: Schema.String,
                  port: Schema.Number,
                  connectionString: Schema.optional(SensitiveOutputString),
                }),
              ),
              accelerate: Schema.optional(
                Schema.Struct({
                  host: Schema.String,
                  port: Schema.Number,
                  connectionString: Schema.optional(SensitiveOutputString),
                }),
              ),
            }),
            directConnection: Schema.optional(
              Schema.NullOr(
                Schema.Struct({
                  host: Schema.String,
                  pass: Schema.String,
                  user: Schema.String,
                }),
              ),
            ),
            database: Schema.Struct({
              id: Schema.String,
              url: Schema.String,
              name: Schema.String,
            }),
          }),
        ),
        region: Schema.Struct({
          id: Schema.String,
          name: Schema.String,
        }),
        source: Schema.NullOr(
          Schema.Union([
            Schema.Struct({
              type: Schema.String,
            }),
            Schema.Struct({
              type: Schema.String,
              databaseId: Schema.String,
              backupId: Schema.String,
            }),
            Schema.Struct({
              type: Schema.String,
              databaseId: Schema.String,
            }),
          ]),
        ),
        branchId: Schema.NullOr(Schema.String),
        apiKeys: Schema.Array(
          Schema.Struct({
            id: Schema.String,
            type: Schema.String,
            url: Schema.String,
            name: Schema.String,
            createdAt: Schema.String,
            kind: Schema.Literals(["postgres", "accelerate"]),
            endpoints: Schema.Struct({
              direct: Schema.optional(
                Schema.Struct({
                  host: Schema.String,
                  port: Schema.Number,
                }),
              ),
              pooled: Schema.optional(
                Schema.Struct({
                  host: Schema.String,
                  port: Schema.Number,
                }),
              ),
              accelerate: Schema.optional(
                Schema.Struct({
                  host: Schema.String,
                  port: Schema.Number,
                }),
              ),
            }),
            connectionString: SensitiveOutputString,
            directConnection: Schema.optional(
              Schema.NullOr(
                Schema.Struct({
                  host: Schema.String,
                  pass: Schema.String,
                  user: Schema.String,
                }),
              ),
            ),
          }),
        ),
        connectionString: SensitiveOutputNullableString,
        directConnection: Schema.NullOr(
          Schema.Struct({
            host: Schema.String,
            pass: Schema.String,
            user: Schema.String,
          }),
        ),
      }),
    ),
  }),
}) as unknown as Schema.Codec<PostV1ProjectsOutput>;

// The operation
/**
 * Create project with a postgres database
 *
 * Creates a new project with a postgres database.
 */
export const postV1Projects = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostV1ProjectsInput,
  outputSchema: PostV1ProjectsOutput,
  errors: [UnprocessableEntity] as const,
}));
