import * as Schema from "effect/Schema";
import { API } from "../client";
import * as T from "../traits";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors";
import { SensitiveString } from "../sensitive";

// Input Schema
export const PostV1DatabasesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  source: Schema.optional(Schema.Unknown),
}).pipe(T.Http({ method: "POST", path: "/v1/databases" }));
export type PostV1DatabasesInput = typeof PostV1DatabasesInput.Type;

// Output Schema
export const PostV1DatabasesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
              connectionString: Schema.optional(SensitiveString),
            }),
          ),
          pooled: Schema.optional(
            Schema.Struct({
              host: Schema.String,
              port: Schema.Number,
              connectionString: Schema.optional(SensitiveString),
            }),
          ),
          accelerate: Schema.optional(
            Schema.Struct({
              host: Schema.String,
              port: Schema.Number,
              connectionString: Schema.optional(SensitiveString),
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
    source: Schema.Unknown,
  }),
});
export type PostV1DatabasesOutput = typeof PostV1DatabasesOutput.Type;

// The operation
/**
 * Create database
 *
 * Creates a new database in the specified project.
 */
export const postV1Databases = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostV1DatabasesInput,
  outputSchema: PostV1DatabasesOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
