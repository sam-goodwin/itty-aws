import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, Conflict, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface PostV1DatabasesByTargetDatabaseIdRestoreInput {
  targetDatabaseId: string;
  source: { type: string; databaseId: string; backupId: string };
}
export const PostV1DatabasesByTargetDatabaseIdRestoreInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    targetDatabaseId: Schema.String.pipe(T.PathParam()),
    source: Schema.Struct({
      type: Schema.String,
      databaseId: Schema.String,
      backupId: Schema.String,
    }),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/databases/{targetDatabaseId}/restore",
    }),
  ) as unknown as Schema.Codec<PostV1DatabasesByTargetDatabaseIdRestoreInput>;

// Output Schema
export interface PostV1DatabasesByTargetDatabaseIdRestoreOutput {
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
    source: { type: string; databaseId: string; backupId: string };
    branchId: string | null;
  };
}
export const PostV1DatabasesByTargetDatabaseIdRestoreOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Struct({
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
      source: Schema.Struct({
        type: Schema.String,
        databaseId: Schema.String,
        backupId: Schema.String,
      }),
      branchId: Schema.NullOr(Schema.String),
    }),
  }) as unknown as Schema.Codec<PostV1DatabasesByTargetDatabaseIdRestoreOutput>;

// The operation
/**
 * Restore database (destructive)
 *
 * ⚠️ **Destructive operation** — this immediately and irreversibly overwrites all data in the target database with the contents of the specified backup. Any data written since the backup was taken will be lost. Ensure you have a recent backup of the target database before proceeding.
 * Replaces the data in an existing database from a backup. Connections and credentials are preserved — only the data layer is replaced.
 */
export const postV1DatabasesByTargetDatabaseIdRestore =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostV1DatabasesByTargetDatabaseIdRestoreInput,
    outputSchema: PostV1DatabasesByTargetDatabaseIdRestoreOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }));
