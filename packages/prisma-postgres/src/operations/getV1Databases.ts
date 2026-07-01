import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export interface GetV1DatabasesInput {
  cursor?: string;
  limit?: number;
  projectId?: string;
  branchId?: string;
  branchGitName?: string;
}
export const GetV1DatabasesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  cursor: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  projectId: Schema.optional(Schema.String),
  branchId: Schema.optional(Schema.String),
  branchGitName: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/v1/databases" }),
) as unknown as Schema.Codec<GetV1DatabasesInput>;

// Output Schema
export interface GetV1DatabasesOutput {
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
        direct?: { host: string; port: number };
        pooled?: { host: string; port: number };
        accelerate?: { host: string; port: number };
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
  }[];
  pagination: { nextCursor: string | null; hasMore: boolean };
}
export const GetV1DatabasesOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      type: Schema.String,
      url: Schema.String,
      name: Schema.String,
      status: Schema.Literals([
        "failure",
        "provisioning",
        "ready",
        "recovering",
      ]),
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
  ),
  pagination: Schema.Struct({
    nextCursor: Schema.NullOr(Schema.String),
    hasMore: Schema.Boolean,
  }),
}) as unknown as Schema.Codec<GetV1DatabasesOutput>;

// The operation
/**
 * List databases
 *
 * Returns all databases the token has access to. Optionally filter by project ID.
 */
export const getV1Databases = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetV1DatabasesInput,
  outputSchema: GetV1DatabasesOutput,
  errors: [Forbidden] as const,
}));
