import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface PostV1DatabasesInput {
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
  source?:
    | { type: string }
    | { type: string; databaseId: string; backupId: string }
    | { type: string; databaseId: string };
  branchId?: string | null;
  branchGitName?: string | null;
}
export const PostV1DatabasesInput = /*@__PURE__*/ Schema.Struct({
  projectId: Schema.String,
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
  branchId: Schema.optional(Schema.NullOr(Schema.String)),
  branchGitName: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/v1/databases" }),
) as unknown as Schema.Codec<PostV1DatabasesInput>;

// Output Schema
export interface PostV1DatabasesOutput {
  data: {
    id: string;
    type: string;
    url: string;
    name: string;
    status: "failure" | "provisioning" | "ready" | "recovering";
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
    region: { id: string; name: string } | null;
    source:
      | { type: string }
      | { type: string; databaseId: string; backupId: string }
      | { type: string; databaseId: string }
      | null;
    branchId: string | null;
  };
}
export const PostV1DatabasesOutput = /*@__PURE__*/ Schema.Struct({
  data: Schema.Struct({
    id: Schema.String,
    type: Schema.String,
    url: Schema.String,
    name: Schema.String,
    status: Schema.Literals(["failure", "provisioning", "ready", "recovering"]),
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
    region: Schema.NullOr(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
      }),
    ),
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
  }),
}) as unknown as Schema.Codec<PostV1DatabasesOutput>;

// The operation
/**
 * Create database
 *
 * Creates a new database in the specified project.
 */
export const postV1Databases = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostV1DatabasesInput,
  outputSchema: PostV1DatabasesOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
