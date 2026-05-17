import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ExecuteSlackCompatibleWebhookInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    webhook_id: Schema.String.pipe(T.PathParam()),
    webhook_token: Schema.String.pipe(T.PathParam()),
    wait: Schema.optional(Schema.Boolean),
    thread_id: Schema.optional(Schema.String),
    text: Schema.optional(Schema.NullOr(Schema.String)),
    username: Schema.optional(Schema.NullOr(Schema.String)),
    icon_url: Schema.optional(Schema.NullOr(Schema.String)),
    attachments: Schema.optional(
      Schema.NullOr(
        Schema.Array(
          Schema.Struct({
            title: Schema.optional(Schema.NullOr(Schema.String)),
            title_link: Schema.optional(Schema.NullOr(Schema.String)),
            text: Schema.optional(Schema.NullOr(Schema.String)),
            color: Schema.optional(Schema.NullOr(Schema.String)),
            ts: Schema.optional(Schema.NullOr(Schema.Number)),
            pretext: Schema.optional(Schema.NullOr(Schema.String)),
            footer: Schema.optional(Schema.NullOr(Schema.String)),
            footer_icon: Schema.optional(Schema.NullOr(Schema.String)),
            author_name: Schema.optional(Schema.NullOr(Schema.String)),
            author_link: Schema.optional(Schema.NullOr(Schema.String)),
            author_icon: Schema.optional(Schema.NullOr(Schema.String)),
            image_url: Schema.optional(Schema.NullOr(Schema.String)),
            thumb_url: Schema.optional(Schema.NullOr(Schema.String)),
            fields: Schema.optional(
              Schema.NullOr(
                Schema.Array(
                  Schema.Struct({
                    name: Schema.optional(Schema.NullOr(Schema.String)),
                    value: Schema.optional(Schema.NullOr(Schema.String)),
                    inline: Schema.optional(Schema.NullOr(Schema.Boolean)),
                  }),
                ),
              ),
            ),
          }),
        ),
      ),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/webhooks/{webhook_id}/{webhook_token}/slack",
    }),
  );
export type ExecuteSlackCompatibleWebhookInput =
  typeof ExecuteSlackCompatibleWebhookInput.Type;

// Output Schema
export const ExecuteSlackCompatibleWebhookOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.NullOr(Schema.String);
export type ExecuteSlackCompatibleWebhookOutput =
  typeof ExecuteSlackCompatibleWebhookOutput.Type;

// The operation
export const executeSlackCompatibleWebhook =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExecuteSlackCompatibleWebhookInput,
    outputSchema: ExecuteSlackCompatibleWebhookOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
