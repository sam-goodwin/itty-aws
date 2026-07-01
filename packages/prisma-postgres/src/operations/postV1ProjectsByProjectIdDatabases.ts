import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";
import {
  SensitiveOutputString,
  SensitiveOutputNullableString,
} from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostV1ProjectsByProjectIdDatabasesInput {
  projectId: string;
  region?:
    | "us-east-1"
    | "us-west-1"
    | "eu-west-3"
    | "eu-central-1"
    | "ap-northeast-1"
    | "ap-southeast-1"
    | "inherit";
  name?: string;
  isDefault?: boolean;
  fromDatabase?: { id: string; backupId?: string };
  source?:
    | { type: string }
    | { type: string; databaseId: string; backupId: string }
    | { type: string; databaseId: string };
}
export const PostV1ProjectsByProjectIdDatabasesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.PathParam()),
    region: Schema.optional(
      Schema.Literals([
        "us-east-1",
        "us-west-1",
        "eu-west-3",
        "eu-central-1",
        "ap-northeast-1",
        "ap-southeast-1",
        "inherit",
      ]),
    ),
    name: Schema.optional(Schema.String),
    isDefault: Schema.optional(Schema.Boolean),
    fromDatabase: Schema.optional(
      Schema.Struct({
        id: Schema.String,
        backupId: Schema.optional(Schema.String),
      }),
    ),
    source: Schema.optional(
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
  }).pipe(
    T.Http({ method: "POST", path: "/v1/projects/{projectId}/databases" }),
  ) as unknown as Schema.Codec<PostV1ProjectsByProjectIdDatabasesInput>;

// Output Schema
export interface PostV1ProjectsByProjectIdDatabasesOutput {
  data: {
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
    project: { id: string; url: string; name: string };
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
  };
}
export const PostV1ProjectsByProjectIdDatabasesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Struct({
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
      project: Schema.Struct({
        id: Schema.String,
        url: Schema.String,
        name: Schema.String,
      }),
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
  }) as unknown as Schema.Codec<PostV1ProjectsByProjectIdDatabasesOutput>;

// The operation
/**
 * Create database
 *
 * Creates a new database for the given project.
 */
export const postV1ProjectsByProjectIdDatabases =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostV1ProjectsByProjectIdDatabasesInput,
    outputSchema: PostV1ProjectsByProjectIdDatabasesOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
