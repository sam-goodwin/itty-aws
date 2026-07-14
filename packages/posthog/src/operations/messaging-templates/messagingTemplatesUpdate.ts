import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface MessagingTemplatesUpdateInput {
  id: string;
  project_id: string;
  name: string;
  description?: string;
  created_at: string;
  updated_at: string;
  content?: {
    templating?: "liquid";
    email?: {
      subject?: string;
      text?: string;
      html?: string;
      design?: {
        counters?: unknown;
        schemaVersion: number;
        body: {
          id?: string;
          rows: unknown[];
          headers?: unknown[];
          footers?: unknown[];
          values?: unknown;
        };
      };
    } | null;
  };
  created_by: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  };
  type?: string;
  message_category?: string | null;
  deleted?: boolean;
}
export const MessagingTemplatesUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.String,
    description: Schema.optional(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
    content: Schema.optional(
      Schema.Struct({
        templating: Schema.optional(Schema.Literals(["liquid"])),
        email: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              subject: Schema.optional(Schema.String),
              text: Schema.optional(Schema.String),
              html: Schema.optional(Schema.String),
              design: Schema.optional(
                Schema.Struct({
                  counters: Schema.optional(Schema.Unknown),
                  schemaVersion: Schema.Number,
                  body: Schema.Struct({
                    id: Schema.optional(Schema.String),
                    rows: Schema.Array(Schema.Unknown),
                    headers: Schema.optional(Schema.Array(Schema.Unknown)),
                    footers: Schema.optional(Schema.Array(Schema.Unknown)),
                    values: Schema.optional(Schema.Unknown),
                  }),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    created_by: Schema.Struct({
      id: Schema.optional(Schema.Number),
      uuid: Schema.optional(Schema.String),
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.optional(Schema.String),
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
      ),
      role_at_organization: Schema.optional(
        Schema.NullOr(
          Schema.Union([
            Schema.Literals([
              "engineering",
              "data",
              "product",
              "founder",
              "leadership",
              "marketing",
              "sales",
              "other",
            ]),
            Schema.Literals([""]),
          ]),
        ),
      ),
    }),
    type: Schema.optional(Schema.String),
    message_category: Schema.optional(Schema.NullOr(Schema.String)),
    deleted: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/messaging_templates/{id}/",
    }),
  ) as unknown as Schema.Codec<MessagingTemplatesUpdateInput>;

// Output Schema
export interface MessagingTemplatesUpdateOutput {
  id: string;
  name: string;
  description?: string;
  created_at: string;
  updated_at: string;
  content?: {
    templating?: "liquid";
    email?: {
      subject?: string;
      text?: string;
      html?: string;
      design?: {
        counters?: unknown;
        schemaVersion: number;
        body: {
          id?: string;
          rows: unknown[];
          headers?: unknown[];
          footers?: unknown[];
          values?: unknown;
        };
      };
    } | null;
  };
  created_by: {
    id?: number;
    uuid?: string;
    distinct_id?: string | null;
    first_name?: string;
    last_name?: string;
    email?: string;
    is_email_verified?: boolean | null;
    hedgehog_config?: Record<string, unknown> | null;
    role_at_organization?:
      | "engineering"
      | "data"
      | "product"
      | "founder"
      | "leadership"
      | "marketing"
      | "sales"
      | "other"
      | ""
      | null;
  };
  type?: string;
  message_category?: string | null;
  deleted?: boolean;
}
export const MessagingTemplatesUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    description: Schema.optional(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
    content: Schema.optional(
      Schema.Struct({
        templating: Schema.optional(Schema.Literals(["liquid"])),
        email: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              subject: Schema.optional(Schema.String),
              text: Schema.optional(Schema.String),
              html: Schema.optional(Schema.String),
              design: Schema.optional(
                Schema.Struct({
                  counters: Schema.optional(Schema.Unknown),
                  schemaVersion: Schema.Number,
                  body: Schema.Struct({
                    id: Schema.optional(Schema.String),
                    rows: Schema.Array(Schema.Unknown),
                    headers: Schema.optional(Schema.Array(Schema.Unknown)),
                    footers: Schema.optional(Schema.Array(Schema.Unknown)),
                    values: Schema.optional(Schema.Unknown),
                  }),
                }),
              ),
            }),
          ),
        ),
      }),
    ),
    created_by: Schema.Struct({
      id: Schema.optional(Schema.Number),
      uuid: Schema.optional(Schema.String),
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.optional(Schema.String),
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.optional(
        Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
      ),
      role_at_organization: Schema.optional(
        Schema.NullOr(
          Schema.Union([
            Schema.Literals([
              "engineering",
              "data",
              "product",
              "founder",
              "leadership",
              "marketing",
              "sales",
              "other",
            ]),
            Schema.Literals([""]),
          ]),
        ),
      ),
    }),
    type: Schema.optional(Schema.String),
    message_category: Schema.optional(Schema.NullOr(Schema.String)),
    deleted: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<MessagingTemplatesUpdateOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this message template.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const messagingTemplatesUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: MessagingTemplatesUpdateInput,
  outputSchema: MessagingTemplatesUpdateOutput,
}));
