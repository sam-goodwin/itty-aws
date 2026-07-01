import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface PatchV1DatabasesByDatabaseIdInput {
  databaseId: string;
  name?: string;
  branchId?: string | null;
  branchGitName?: string | null;
}
export const PatchV1DatabasesByDatabaseIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databaseId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    branchId: Schema.optional(Schema.NullOr(Schema.String)),
    branchGitName: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/databases/{databaseId}" }),
  ) as unknown as Schema.Codec<PatchV1DatabasesByDatabaseIdInput>;

// Output Schema
export interface PatchV1DatabasesByDatabaseIdOutput {
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
  };
}
export const PatchV1DatabasesByDatabaseIdOutput =
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
  }) as unknown as Schema.Codec<PatchV1DatabasesByDatabaseIdOutput>;

// The operation
/**
 * Update database
 *
 * Updates the database with the given ID.
 */
export const patchV1DatabasesByDatabaseId =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PatchV1DatabasesByDatabaseIdInput,
    outputSchema: PatchV1DatabasesByDatabaseIdOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
