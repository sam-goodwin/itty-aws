import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const MessagingTemplatesPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    content: Schema.optional(
      Schema.Struct({
        templating: Schema.optional(Schema.Literals(["liquid"])),
        email: Schema.optional(Schema.Unknown),
      }),
    ),
    created_by: Schema.optional(
      Schema.Struct({
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
    ),
    type: Schema.optional(Schema.String),
    message_category: Schema.optional(Schema.NullOr(Schema.String)),
    deleted: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/messaging_templates/{id}/",
    }),
  );
export type MessagingTemplatesPartialUpdateInput =
  typeof MessagingTemplatesPartialUpdateInput.Type;

// Output Schema
export const MessagingTemplatesPartialUpdateOutput =
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
export type MessagingTemplatesPartialUpdateOutput =
  typeof MessagingTemplatesPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this message template.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const messagingTemplatesPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: MessagingTemplatesPartialUpdateInput,
    outputSchema: MessagingTemplatesPartialUpdateOutput,
  }));
