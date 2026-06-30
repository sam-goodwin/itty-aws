import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const MessagingTemplatesDesignPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    operations: Schema.optional(
      Schema.Array(
        Schema.Struct({
          op: Schema.Literals([
            "update_content",
            "update_column",
            "update_row",
            "update_body",
            "add_content",
            "remove_content",
            "move_content",
            "add_row",
            "remove_row",
          ]),
          id: Schema.optional(Schema.String),
          column_id: Schema.optional(Schema.String),
          patch: Schema.optional(Schema.Unknown),
          content: Schema.optional(Schema.Unknown),
          row: Schema.optional(Schema.Unknown),
          index: Schema.optional(Schema.Number),
        }),
      ),
    ),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/messaging_templates/{id}/design/",
    }),
  );
export type MessagingTemplatesDesignPartialUpdateInput =
  typeof MessagingTemplatesDesignPartialUpdateInput.Type;

// Output Schema
export const MessagingTemplatesDesignPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    description: Schema.optional(Schema.String),
    created_at: Schema.String,
    updated_at: Schema.String,
    content: Schema.optional(
      Schema.Struct({
        templating: Schema.optional(Schema.Literals(["liquid"])),
        email: Schema.optional(Schema.Unknown),
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
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    type: Schema.optional(Schema.String),
    message_category: Schema.optional(Schema.NullOr(Schema.String)),
    deleted: Schema.optional(Schema.Boolean),
  });
export type MessagingTemplatesDesignPartialUpdateOutput =
  typeof MessagingTemplatesDesignPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this message template.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const messagingTemplatesDesignPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MessagingTemplatesDesignPartialUpdateInput,
    outputSchema: MessagingTemplatesDesignPartialUpdateOutput,
  }));
