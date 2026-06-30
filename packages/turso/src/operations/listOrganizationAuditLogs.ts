import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface ListOrganizationAuditLogsInput {
  organizationSlug: string;
  page_size?: number;
  page?: number;
}
export const ListOrganizationAuditLogsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
    page_size: Schema.optional(Schema.Number),
    page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/organizations/{organizationSlug}/audit-logs",
    }),
  ) as unknown as Schema.Codec<ListOrganizationAuditLogsInput>;

// Output Schema
export interface ListOrganizationAuditLogsOutput {
  audit_logs?: {
    code?:
      | "user-signup"
      | "db-create"
      | "db-delete"
      | "db-protect"
      | "db-unprotect"
      | "db-token-create"
      | "group-token-create"
      | "user-token-create"
      | "instance-create"
      | "instance-delete"
      | "org-create"
      | "org-delete"
      | "org-member-add"
      | "org-member-rm"
      | "org-member-leave"
      | "org-plan-update"
      | "org-set-overages"
      | "group-create"
      | "group-delete"
      | "group-unarchive"
      | "group-protect"
      | "group-unprotect"
      | "db-aunrchive"
      | "user-delete";
    message?: string;
    origin?: string;
    author?: string;
    created_at?: string;
    data?: unknown;
  }[];
  pagination?: {
    page?: number;
    page_size?: number;
    total_pages?: number;
    total_rows?: number;
  };
}
export const ListOrganizationAuditLogsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    audit_logs: Schema.optional(
      Schema.Array(
        Schema.Struct({
          code: Schema.optional(
            Schema.Literals([
              "user-signup",
              "db-create",
              "db-delete",
              "db-protect",
              "db-unprotect",
              "db-token-create",
              "group-token-create",
              "user-token-create",
              "instance-create",
              "instance-delete",
              "org-create",
              "org-delete",
              "org-member-add",
              "org-member-rm",
              "org-member-leave",
              "org-plan-update",
              "org-set-overages",
              "group-create",
              "group-delete",
              "group-unarchive",
              "group-protect",
              "group-unprotect",
              "db-aunrchive",
              "user-delete",
            ]),
          ),
          message: Schema.optional(Schema.String),
          origin: Schema.optional(Schema.String),
          author: Schema.optional(Schema.String),
          created_at: Schema.optional(Schema.String),
          data: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    pagination: Schema.optional(
      Schema.Struct({
        page: Schema.optional(Schema.Number),
        page_size: Schema.optional(Schema.Number),
        total_pages: Schema.optional(Schema.Number),
        total_rows: Schema.optional(Schema.Number),
      }),
    ),
  }) as unknown as Schema.Codec<ListOrganizationAuditLogsOutput>;

// The operation
/**
 * List Audit Logs
 *
 * Return the audit logs for the given organization, ordered by the `created_at` field in descending order.
 *
 * @param organizationSlug - The slug of the organization or user account.
 * @param page_size - The limit of items to return per page. Defaults to 100.
 * @param page - The page number to return. Defaults to 1.
 */
export const listOrganizationAuditLogs = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListOrganizationAuditLogsInput,
    outputSchema: ListOrganizationAuditLogsOutput,
  }),
);
