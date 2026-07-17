// ==========================================================================
// Google Chat API (chat v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "@distilled.cloud/core/schema";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import type { DefaultErrors } from "../errors.ts";
import type * as HttpClient from "effect/unstable/http/HttpClient";

// Service metadata
const svc = T.Service({
  name: "chat",
  version: "v1",
  rootUrl: "https://chat.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface SlashCommand {
  /** The ID of the slash command. */
  commandId?: string;
}

export const SlashCommand: Schema.Codec<SlashCommand> =
  /*@__PURE__*/ Schema.Struct({
    commandId: Schema.optional(Schema.String),
  }).annotate({ identifier: "SlashCommand" });

export interface AttachmentDataRef {
  /** Optional. Opaque token containing a reference to an uploaded attachment. Treated by clients as an opaque string and used to create or update Chat messages with attachments. */
  attachmentUploadToken?: string;
  /** Optional. The resource name of the attachment data. This field is used with the media API to download the attachment data. */
  resourceName?: string;
}

export const AttachmentDataRef: Schema.Codec<AttachmentDataRef> =
  /*@__PURE__*/ Schema.Struct({
    attachmentUploadToken: Schema.optional(Schema.String),
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "AttachmentDataRef" });

export interface GoogleAppsCardV1ActionParameter {
  /** The name of the parameter for the action script. */
  key?: string;
  /** The value of the parameter. */
  value?: string;
}

export const GoogleAppsCardV1ActionParameter: Schema.Codec<GoogleAppsCardV1ActionParameter> =
  /*@__PURE__*/ Schema.Struct({
    key: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsCardV1ActionParameter" });

export interface PermissionSetting {
  /** Optional. Whether space managers `ROLE_ASSISTANT_MANAGER`) have this permission. */
  assistantManagersAllowed?: boolean;
  /** Optional. Whether space owners (`ROLE_MANAGER`) have this permission. */
  managersAllowed?: boolean;
  /** Optional. Whether basic space members (`ROLE_MEMBER`) have this permission. */
  membersAllowed?: boolean;
}

export const PermissionSetting: Schema.Codec<PermissionSetting> =
  /*@__PURE__*/ Schema.Struct({
    assistantManagersAllowed: Schema.optional(Schema.Boolean),
    managersAllowed: Schema.optional(Schema.Boolean),
    membersAllowed: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "PermissionSetting" });

export interface PermissionSettings {
  /** Optional. Setting for managing members and groups in a space. */
  manageMembersAndGroups?: PermissionSetting;
  /** Output only. Setting for posting messages in a space. */
  postMessages?: PermissionSetting;
  /** Optional. Setting for toggling space history on and off. */
  toggleHistory?: PermissionSetting;
  /** Optional. Setting for using @all in a space. */
  useAtMentionAll?: PermissionSetting;
  /** Optional. Setting for replying to messages in a space. */
  replyMessages?: PermissionSetting;
  /** Optional. Setting for updating space name, avatar, description and guidelines. */
  modifySpaceDetails?: PermissionSetting;
  /** Optional. Setting for managing webhooks in a space. */
  manageWebhooks?: PermissionSetting;
  /** Optional. Setting for managing apps in a space. */
  manageApps?: PermissionSetting;
}

export const PermissionSettings: Schema.Codec<PermissionSettings> =
  /*@__PURE__*/ Schema.Struct({
    manageMembersAndGroups: Schema.optional(PermissionSetting),
    postMessages: Schema.optional(PermissionSetting),
    toggleHistory: Schema.optional(PermissionSetting),
    useAtMentionAll: Schema.optional(PermissionSetting),
    replyMessages: Schema.optional(PermissionSetting),
    modifySpaceDetails: Schema.optional(PermissionSetting),
    manageWebhooks: Schema.optional(PermissionSetting),
    manageApps: Schema.optional(PermissionSetting),
  }).annotate({ identifier: "PermissionSettings" });

export interface GoogleChatV1Section {
  /** Required. The type of the section. */
  type?:
    | "SECTION_TYPE_UNSPECIFIED"
    | "CUSTOM_SECTION"
    | "DEFAULT_DIRECT_MESSAGES"
    | "DEFAULT_SPACES"
    | "DEFAULT_APPS"
    | (string & {});
  /** Optional. The section's display name. Only populated for sections of type `CUSTOM_SECTION`. Supports up to 80 characters. Required when creating a `CUSTOM_SECTION`. */
  displayName?: string;
  /** Identifier. Resource name of the section. For system sections, the section ID is a constant string: - DEFAULT_DIRECT_MESSAGES: `users/{user}/sections/default-direct-messages` - DEFAULT_SPACES: `users/{user}/sections/default-spaces` - DEFAULT_APPS: `users/{user}/sections/default-apps` Format: `users/{user}/sections/{section}` */
  name?: string;
  /** Output only. The order of the section in relation to other sections. Sections with a lower `sort_order` value appear before sections with a higher value. */
  sortOrder?: number;
}

export const GoogleChatV1Section: Schema.Codec<GoogleChatV1Section> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    sortOrder: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleChatV1Section" });

export interface ListSectionsResponse {
  /** The sections from the specified user. */
  sections?: ReadonlyArray<GoogleChatV1Section>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListSectionsResponse: Schema.Codec<ListSectionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    sections: Schema.optional(Schema.Array(GoogleChatV1Section)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSectionsResponse" });

export interface User {
  /** User type. */
  type?: "TYPE_UNSPECIFIED" | "HUMAN" | "BOT" | (string & {});
  /** Resource name for a Google Chat user. Format: `users/{user}`. `users/app` can be used as an alias for the calling app bot user. For human users, `{user}` is the same user identifier as: - the `id` for the [Person](https://developers.google.com/people/api/rest/v1/people) in the People API. For example, `users/123456789` in Chat API represents the same person as the `123456789` Person profile ID in People API. - the `id` for a [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Admin SDK Directory API. - the user's email address can be used as an alias for `{user}` in API requests. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can use `users/user@example.com` as an alias to reference `users/123456789`. Only the canonical resource name (for example `users/123456789`) will be returned from the API. */
  name?: string;
  /** Output only. When `true`, the user is deleted or their profile is not visible. */
  isAnonymous?: boolean;
  /** Unique identifier of the user's Google Workspace domain. */
  domainId?: string;
  /** Output only. The user's display name. */
  displayName?: string;
}

export const User: Schema.Codec<User> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    isAnonymous: Schema.optional(Schema.Boolean),
    domainId: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "User" });

export interface CustomEmojiPayload {
  /** Required. Input only. The image used for the custom emoji. The payload must be under 256 KB and the dimension of the image must be square and between 64 and 500 pixels. The restrictions are subject to change. */
  fileContent?: string;
  /** Required. Input only. The image file name. Supported file extensions: `.png`, `.jpg`, `.gif`. */
  filename?: string;
}

export const CustomEmojiPayload: Schema.Codec<CustomEmojiPayload> =
  /*@__PURE__*/ Schema.Struct({
    fileContent: Schema.optional(Schema.String),
    filename: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomEmojiPayload" });

export interface CustomEmoji {
  /** Identifier. The resource name of the custom emoji, assigned by the server. Format: `customEmojis/{customEmoji}` */
  name?: string;
  /** Output only. A temporary image URL for the custom emoji, valid for at least 10 minutes. Note that this is not populated in the response when the custom emoji is created. */
  temporaryImageUri?: string;
  /** Optional. Input only. Payload data. Required when the custom emoji is created. */
  payload?: CustomEmojiPayload;
  /** Optional. Immutable. User-provided name for the custom emoji, which is unique within the organization. Required when the custom emoji is created, output only otherwise. Emoji names must start and end with colons, must be lowercase and can only contain alphanumeric characters, hyphens, and underscores. Hyphens and underscores should be used to separate words and cannot be used consecutively. Example: `:valid-emoji-name:` */
  emojiName?: string;
  /** Output only. Unique key for the custom emoji resource. */
  uid?: string;
}

export const CustomEmoji: Schema.Codec<CustomEmoji> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    temporaryImageUri: Schema.optional(Schema.String),
    payload: Schema.optional(CustomEmojiPayload),
    emojiName: Schema.optional(Schema.String),
    uid: Schema.optional(Schema.String),
  }).annotate({ identifier: "CustomEmoji" });

export interface Emoji {
  /** Optional. A basic emoji represented by a unicode string. */
  unicode?: string;
  /** A custom emoji. */
  customEmoji?: CustomEmoji;
}

export const Emoji: Schema.Codec<Emoji> =
  /*@__PURE__*/ Schema.Struct({
    unicode: Schema.optional(Schema.String),
    customEmoji: Schema.optional(CustomEmoji),
  }).annotate({ identifier: "Emoji" });

export interface Reaction {
  /** Identifier. The resource name of the reaction. Format: `spaces/{space}/messages/{message}/reactions/{reaction}` */
  name?: string;
  /** Output only. The user who created the reaction. */
  user?: User;
  /** Required. The emoji used in the reaction. */
  emoji?: Emoji;
}

export const Reaction: Schema.Codec<Reaction> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    user: Schema.optional(User),
    emoji: Schema.optional(Emoji),
  }).annotate({ identifier: "Reaction" });

export interface ListReactionsResponse {
  /** List of reactions in the requested (or first) page. */
  reactions?: ReadonlyArray<Reaction>;
  /** Continuation token to retrieve the next page of results. It's empty for the last page of results. */
  nextPageToken?: string;
}

export const ListReactionsResponse: Schema.Codec<ListReactionsResponse> =
  /*@__PURE__*/ Schema.Struct({
    reactions: Schema.optional(Schema.Array(Reaction)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListReactionsResponse" });

export interface SpaceDataSource {
  /** If set to `true`, the multiselect menu selects the current Google Chat space as an item by default. */
  defaultToCurrentSpace?: boolean;
}

export const SpaceDataSource: Schema.Codec<SpaceDataSource> =
  /*@__PURE__*/ Schema.Struct({
    defaultToCurrentSpace: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "SpaceDataSource" });

export interface ChatClientDataSourceMarkup {
  /** Google Chat spaces that the user is a member of. */
  spaceDataSource?: SpaceDataSource;
}

export const ChatClientDataSourceMarkup: Schema.Codec<ChatClientDataSourceMarkup> =
  /*@__PURE__*/ Schema.Struct({
    spaceDataSource: Schema.optional(SpaceDataSource),
  }).annotate({ identifier: "ChatClientDataSourceMarkup" });

export interface WorkflowDataSourceMarkup {
  /** Whether to include variables from the previous step in the data source. */
  includeVariables?: boolean;
  /** The type of data source. */
  type?: "UNKNOWN" | "USER" | "SPACE" | "USER_WITH_FREE_FORM" | (string & {});
}

export const WorkflowDataSourceMarkup: Schema.Codec<WorkflowDataSourceMarkup> =
  /*@__PURE__*/ Schema.Struct({
    includeVariables: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "WorkflowDataSourceMarkup" });

export interface HostAppDataSourceMarkup {
  /** A data source from Google Chat. */
  chatDataSource?: ChatClientDataSourceMarkup;
  /** A data source from Google Workflow. */
  workflowDataSource?: WorkflowDataSourceMarkup;
}

export const HostAppDataSourceMarkup: Schema.Codec<HostAppDataSourceMarkup> =
  /*@__PURE__*/ Schema.Struct({
    chatDataSource: Schema.optional(ChatClientDataSourceMarkup),
    workflowDataSource: Schema.optional(WorkflowDataSourceMarkup),
  }).annotate({ identifier: "HostAppDataSourceMarkup" });

export interface OpenLink {
  /** The URL to open. */
  url?: string;
}

export const OpenLink: Schema.Codec<OpenLink> =
  /*@__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "OpenLink" });

export interface ActionParameter {
  /** The value of the parameter. */
  value?: string;
  /** The name of the parameter for the action script. */
  key?: string;
}

export const ActionParameter: Schema.Codec<ActionParameter> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActionParameter" });

export interface FormAction {
  /** The method name is used to identify which part of the form triggered the form submission. This information is echoed back to the Chat app as part of the card click event. You can use the same method name for several elements that trigger a common behavior. */
  actionMethodName?: string;
  /** List of action parameters. */
  parameters?: ReadonlyArray<ActionParameter>;
}

export const FormAction: Schema.Codec<FormAction> =
  /*@__PURE__*/ Schema.Struct({
    actionMethodName: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Array(ActionParameter)),
  }).annotate({ identifier: "FormAction" });

export interface OnClick {
  /** This `onclick` action triggers an open link action if specified. */
  openLink?: OpenLink;
  /** A form action is triggered by this `onclick` action if specified. */
  action?: FormAction;
}

export const OnClick: Schema.Codec<OnClick> =
  /*@__PURE__*/ Schema.Struct({
    openLink: Schema.optional(OpenLink),
    action: Schema.optional(FormAction),
  }).annotate({ identifier: "OnClick" });

export interface ImageButton {
  /** The icon specified by an `enum` that indices to an icon provided by Chat API. */
  icon?:
    | "ICON_UNSPECIFIED"
    | "AIRPLANE"
    | "BOOKMARK"
    | "BUS"
    | "CAR"
    | "CLOCK"
    | "CONFIRMATION_NUMBER_ICON"
    | "DOLLAR"
    | "DESCRIPTION"
    | "EMAIL"
    | "EVENT_PERFORMER"
    | "EVENT_SEAT"
    | "FLIGHT_ARRIVAL"
    | "FLIGHT_DEPARTURE"
    | "HOTEL"
    | "HOTEL_ROOM_TYPE"
    | "INVITE"
    | "MAP_PIN"
    | "MEMBERSHIP"
    | "MULTIPLE_PEOPLE"
    | "OFFER"
    | "PERSON"
    | "PHONE"
    | "RESTAURANT_ICON"
    | "SHOPPING_CART"
    | "STAR"
    | "STORE"
    | "TICKET"
    | "TRAIN"
    | "VIDEO_CAMERA"
    | "VIDEO_PLAY"
    | (string & {});
  /** The `onclick` action. */
  onClick?: OnClick;
  /** The icon specified by a URL. */
  iconUrl?: string;
  /** The name of this `image_button` that's used for accessibility. Default value is provided if this name isn't specified. */
  name?: string;
}

export const ImageButton: Schema.Codec<ImageButton> =
  /*@__PURE__*/ Schema.Struct({
    icon: Schema.optional(Schema.String),
    onClick: Schema.optional(OnClick),
    iconUrl: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "ImageButton" });

export interface TextButton {
  /** The text of the button. */
  text?: string;
  /** The `onclick` action of the button. */
  onClick?: OnClick;
}

export const TextButton: Schema.Codec<TextButton> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    onClick: Schema.optional(OnClick),
  }).annotate({ identifier: "TextButton" });

export interface Button {
  /** A button with image and `onclick` action. */
  imageButton?: ImageButton;
  /** A button with text and `onclick` action. */
  textButton?: TextButton;
}

export const Button: Schema.Codec<Button> =
  /*@__PURE__*/ Schema.Struct({
    imageButton: Schema.optional(ImageButton),
    textButton: Schema.optional(TextButton),
  }).annotate({ identifier: "Button" });

export interface KeyValue {
  /** If the content should be multiline. */
  contentMultiline?: boolean;
  /** The text of the bottom label. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
  bottomLabel?: string;
  /** An enum value that's replaced by the Chat API with the corresponding icon image. */
  icon?:
    | "ICON_UNSPECIFIED"
    | "AIRPLANE"
    | "BOOKMARK"
    | "BUS"
    | "CAR"
    | "CLOCK"
    | "CONFIRMATION_NUMBER_ICON"
    | "DOLLAR"
    | "DESCRIPTION"
    | "EMAIL"
    | "EVENT_PERFORMER"
    | "EVENT_SEAT"
    | "FLIGHT_ARRIVAL"
    | "FLIGHT_DEPARTURE"
    | "HOTEL"
    | "HOTEL_ROOM_TYPE"
    | "INVITE"
    | "MAP_PIN"
    | "MEMBERSHIP"
    | "MULTIPLE_PEOPLE"
    | "OFFER"
    | "PERSON"
    | "PHONE"
    | "RESTAURANT_ICON"
    | "SHOPPING_CART"
    | "STAR"
    | "STORE"
    | "TICKET"
    | "TRAIN"
    | "VIDEO_CAMERA"
    | "VIDEO_PLAY"
    | (string & {});
  /** The text of the content. Formatted text supported and always required. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
  content?: string;
  /** A button that can be clicked to trigger an action. */
  button?: Button;
  /** The icon specified by a URL. */
  iconUrl?: string;
  /** The text of the top label. Formatted text supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
  topLabel?: string;
  /** The `onclick` action. Only the top label, bottom label, and content region are clickable. */
  onClick?: OnClick;
}

export const KeyValue: Schema.Codec<KeyValue> =
  /*@__PURE__*/ Schema.Struct({
    contentMultiline: Schema.optional(Schema.Boolean),
    bottomLabel: Schema.optional(Schema.String),
    icon: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    button: Schema.optional(Button),
    iconUrl: Schema.optional(Schema.String),
    topLabel: Schema.optional(Schema.String),
    onClick: Schema.optional(OnClick),
  }).annotate({ identifier: "KeyValue" });

export interface Image {
  /** The URL of the image. */
  imageUrl?: string;
  /** The `onclick` action. */
  onClick?: OnClick;
  /** The aspect ratio of this image (width and height). This field lets you reserve the right height for the image while waiting for it to load. It's not meant to override the built-in aspect ratio of the image. If unset, the server fills it by prefetching the image. */
  aspectRatio?: number;
}

export const Image: Schema.Codec<Image> =
  /*@__PURE__*/ Schema.Struct({
    imageUrl: Schema.optional(Schema.String),
    onClick: Schema.optional(OnClick),
    aspectRatio: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Image" });

export interface TextParagraph {
  text?: string;
}

export const TextParagraph: Schema.Codec<TextParagraph> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "TextParagraph" });

export interface WidgetMarkup {
  /** Display a key value item in this widget. */
  keyValue?: KeyValue;
  /** A list of buttons. Buttons is also `oneof data` and only one of these fields should be set. */
  buttons?: ReadonlyArray<Button>;
  /** Display an image in this widget. */
  image?: Image;
  /** Display a text paragraph in this widget. */
  textParagraph?: TextParagraph;
}

export const WidgetMarkup: Schema.Codec<WidgetMarkup> =
  /*@__PURE__*/ Schema.Struct({
    keyValue: Schema.optional(KeyValue),
    buttons: Schema.optional(Schema.Array(Button)),
    image: Schema.optional(Image),
    textParagraph: Schema.optional(TextParagraph),
  }).annotate({ identifier: "WidgetMarkup" });

export interface Section {
  /** A section must contain at least one widget. */
  widgets?: ReadonlyArray<WidgetMarkup>;
  /** The header of the section. Formatted text is supported. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
  header?: string;
}

export const Section: Schema.Codec<Section> =
  /*@__PURE__*/ Schema.Struct({
    widgets: Schema.optional(Schema.Array(WidgetMarkup)),
    header: Schema.optional(Schema.String),
  }).annotate({ identifier: "Section" });

export interface GoogleAppsCardV1MaterialIcon {
  /** The stroke weight of the icon. Choose from {100, 200, 300, 400, 500, 600, 700}. If absent, default value is 400. If any other value is specified, the default value is used. To preview different icon settings, go to [Google Font Icons](https://fonts.google.com/icons) and adjust the settings under **Customize**. */
  weight?: number;
  /** The icon name defined in the [Google Material Icon](https://fonts.google.com/icons), for example, `check_box`. Any invalid names are abandoned and replaced with empty string and results in the icon failing to render. */
  name?: string;
  /** Whether the icon renders as filled. Default value is false. To preview different icon settings, go to [Google Font Icons](https://fonts.google.com/icons) and adjust the settings under **Customize**. */
  fill?: boolean;
  /** Weight and grade affect a symbol’s thickness. Adjustments to grade are more granular than adjustments to weight and have a small impact on the size of the symbol. Choose from {-25, 0, 200}. If absent, default value is 0. If any other value is specified, the default value is used. To preview different icon settings, go to [Google Font Icons](https://fonts.google.com/icons) and adjust the settings under **Customize**. */
  grade?: number;
}

export const GoogleAppsCardV1MaterialIcon: Schema.Codec<GoogleAppsCardV1MaterialIcon> =
  /*@__PURE__*/ Schema.Struct({
    weight: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    fill: Schema.optional(Schema.Boolean),
    grade: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleAppsCardV1MaterialIcon" });

export interface GoogleAppsCardV1Icon {
  /** Display a custom icon hosted at an HTTPS URL. For example: ``` "iconUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png" ``` Supported file types include `.png` and `.jpg`. */
  iconUrl?: string;
  /** Display one of the built-in icons provided by Google Workspace. For example, to display an airplane icon, specify `AIRPLANE`. For a bus, specify `BUS`. For a full list of supported icons, see [built-in icons](https://developers.google.com/workspace/chat/format-messages#builtinicons). */
  knownIcon?: string;
  /** Display one of the [Google Material Icons](https://fonts.google.com/icons). For example, to display a [checkbox icon](https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Acheck_box%3AFILL%400%3Bwght%40400%3BGRAD%400%3Bopsz%4048), use ``` "material_icon": { "name": "check_box" } ``` [Google Chat apps](https://developers.google.com/workspace/chat): */
  materialIcon?: GoogleAppsCardV1MaterialIcon;
  /** The crop style applied to the image. In some cases, applying a `CIRCLE` crop causes the image to be drawn larger than a built-in icon. */
  imageType?: "SQUARE" | "CIRCLE" | (string & {});
  /** Optional. A description of the icon used for accessibility. If unspecified, the default value `Button` is provided. As a best practice, you should set a helpful description for what the icon displays, and if applicable, what it does. For example, `A user's account portrait`, or `Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/workspace/chat`. If the icon is set in a `Button`, the `altText` appears as helper text when the user hovers over the button. However, if the button also sets `text`, the icon's `altText` is ignored. */
  altText?: string;
}

export const GoogleAppsCardV1Icon: Schema.Codec<GoogleAppsCardV1Icon> =
  /*@__PURE__*/ Schema.Struct({
    iconUrl: Schema.optional(Schema.String),
    knownIcon: Schema.optional(Schema.String),
    materialIcon: Schema.optional(GoogleAppsCardV1MaterialIcon),
    imageType: Schema.optional(Schema.String),
    altText: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsCardV1Icon" });

export interface Color {
  /** The amount of blue in the color as a value in the interval [0, 1]. */
  blue?: number;
  /** The amount of green in the color as a value in the interval [0, 1]. */
  green?: number;
  /** The amount of red in the color as a value in the interval [0, 1]. */
  red?: number;
  /** The fraction of this color that should be applied to the pixel. That is, the final pixel color is defined by the equation: `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)` This means that a value of 1.0 corresponds to a solid color, whereas a value of 0.0 corresponds to a completely transparent color. This uses a wrapper message rather than a simple float scalar so that it is possible to distinguish between a default value and the value being unset. If omitted, this color object is rendered as a solid color (as if the alpha value had been explicitly given a value of 1.0). */
  alpha?: number;
}

export const Color: Schema.Codec<Color> =
  /*@__PURE__*/ Schema.Struct({
    blue: Schema.optional(Schema.Number),
    green: Schema.optional(Schema.Number),
    red: Schema.optional(Schema.Number),
    alpha: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Color" });

export interface GoogleAppsCardV1Button {
  /** An icon displayed inside the button. If both `icon` and `text` are set, then the icon appears before the text. */
  icon?: GoogleAppsCardV1Icon;
  /** Optional. The color of the button. If set, the button `type` is set to `FILLED` and the color of `text` and `icon` fields are set to a contrasting color for readability. For example, if the button color is set to blue, any text or icons in the button are set to white. To set the button color, specify a value for the `red`, `green`, and `blue` fields. The value must be a float number between 0 and 1 based on the RGB color value, where `0` (0/255) represents the absence of color and `1` (255/255) represents the maximum intensity of the color. For example, the following sets the color to red at its maximum intensity: ``` "color": { "red": 1, "green": 0, "blue": 0, } ``` The `alpha` field is unavailable for button color. If specified, this field is ignored. */
  color?: Color;
  /** Optional. The type of a button. If unset, button type defaults to `OUTLINED`. If the `color` field is set, the button type is forced to `FILLED` and any value set for this field is ignored. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "OUTLINED"
    | "FILLED"
    | "FILLED_TONAL"
    | "BORDERLESS"
    | (string & {});
  /** If `true`, the button is displayed in an inactive state and doesn't respond to user actions. */
  disabled?: boolean;
  /** The alternative text that's used for accessibility. Set descriptive text that lets users know what the button does. For example, if a button opens a hyperlink, you might write: "Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/workspace/chat". */
  altText?: string;
  /** The text displayed inside the button. */
  text?: string;
  /** Required. The action to perform when a user clicks the button, such as opening a hyperlink or running a custom function. */
  onClick?: GoogleAppsCardV1OnClick;
}

export const GoogleAppsCardV1Button: Schema.Codec<GoogleAppsCardV1Button> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      icon: Schema.optional(GoogleAppsCardV1Icon),
      color: Schema.optional(Color),
      type: Schema.optional(Schema.String),
      disabled: Schema.optional(Schema.Boolean),
      altText: Schema.optional(Schema.String),
      text: Schema.optional(Schema.String),
      onClick: Schema.optional(GoogleAppsCardV1OnClick),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1Button",
  }) as any as Schema.Codec<GoogleAppsCardV1Button>;

export interface GoogleAppsCardV1CardFixedFooter {
  /** The primary button of the fixed footer. The button must be a text button with text and color set. */
  primaryButton?: GoogleAppsCardV1Button;
  /** The secondary button of the fixed footer. The button must be a text button with text and color set. If `secondaryButton` is set, you must also set `primaryButton`. */
  secondaryButton?: GoogleAppsCardV1Button;
}

export const GoogleAppsCardV1CardFixedFooter: Schema.Codec<GoogleAppsCardV1CardFixedFooter> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      primaryButton: Schema.optional(GoogleAppsCardV1Button),
      secondaryButton: Schema.optional(GoogleAppsCardV1Button),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1CardFixedFooter",
  }) as any as Schema.Codec<GoogleAppsCardV1CardFixedFooter>;

export interface GoogleAppsCardV1CardHeader {
  /** The shape used to crop the image. [Google Workspace add-ons and Chat apps](https://developers.google.com/workspace/extend): */
  imageType?: "SQUARE" | "CIRCLE" | (string & {});
  /** Required. The title of the card header. The header has a fixed height: if both a title and subtitle are specified, each takes up one line. If only the title is specified, it takes up both lines. */
  title?: string;
  /** The HTTPS URL of the image in the card header. */
  imageUrl?: string;
  /** The alternative text of this image that's used for accessibility. */
  imageAltText?: string;
  /** The subtitle of the card header. If specified, appears on its own line below the `title`. */
  subtitle?: string;
}

export const GoogleAppsCardV1CardHeader: Schema.Codec<GoogleAppsCardV1CardHeader> =
  /*@__PURE__*/ Schema.Struct({
    imageType: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    imageUrl: Schema.optional(Schema.String),
    imageAltText: Schema.optional(Schema.String),
    subtitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsCardV1CardHeader" });

export interface GoogleAppsCardV1BorderStyle {
  /** The corner radius for the border. */
  cornerRadius?: number;
  /** The border type. */
  type?: "BORDER_TYPE_UNSPECIFIED" | "NO_BORDER" | "STROKE" | (string & {});
  /** The colors to use when the type is `BORDER_TYPE_STROKE`. To set the stroke color, specify a value for the `red`, `green`, and `blue` fields. The value must be a float number between 0 and 1 based on the RGB color value, where `0` (0/255) represents the absence of color and `1` (255/255) represents the maximum intensity of the color. For example, the following sets the color to red at its maximum intensity: ``` "color": { "red": 1, "green": 0, "blue": 0, } ``` The `alpha` field is unavailable for stroke color. If specified, this field is ignored. */
  strokeColor?: Color;
}

export const GoogleAppsCardV1BorderStyle: Schema.Codec<GoogleAppsCardV1BorderStyle> =
  /*@__PURE__*/ Schema.Struct({
    cornerRadius: Schema.optional(Schema.Number),
    type: Schema.optional(Schema.String),
    strokeColor: Schema.optional(Color),
  }).annotate({ identifier: "GoogleAppsCardV1BorderStyle" });

export interface GoogleAppsCardV1ImageCropStyle {
  /** The aspect ratio to use if the crop type is `RECTANGLE_CUSTOM`. For example, here's how to apply a 16:9 aspect ratio: ``` cropStyle { "type": "RECTANGLE_CUSTOM", "aspectRatio": 16/9 } ``` */
  aspectRatio?: number;
  /** The crop type. */
  type?:
    | "IMAGE_CROP_TYPE_UNSPECIFIED"
    | "SQUARE"
    | "CIRCLE"
    | "RECTANGLE_CUSTOM"
    | "RECTANGLE_4_3"
    | (string & {});
}

export const GoogleAppsCardV1ImageCropStyle: Schema.Codec<GoogleAppsCardV1ImageCropStyle> =
  /*@__PURE__*/ Schema.Struct({
    aspectRatio: Schema.optional(Schema.Number),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsCardV1ImageCropStyle" });

export interface GoogleAppsCardV1ImageComponent {
  /** The accessibility label for the image. */
  altText?: string;
  /** The image URL. */
  imageUri?: string;
  /** The crop style to apply to the image. */
  cropStyle?: GoogleAppsCardV1ImageCropStyle;
  /** The border style to apply to the image. */
  borderStyle?: GoogleAppsCardV1BorderStyle;
}

export const GoogleAppsCardV1ImageComponent: Schema.Codec<GoogleAppsCardV1ImageComponent> =
  /*@__PURE__*/ Schema.Struct({
    altText: Schema.optional(Schema.String),
    imageUri: Schema.optional(Schema.String),
    cropStyle: Schema.optional(GoogleAppsCardV1ImageCropStyle),
    borderStyle: Schema.optional(GoogleAppsCardV1BorderStyle),
  }).annotate({ identifier: "GoogleAppsCardV1ImageComponent" });

export interface GoogleAppsCardV1GridItem {
  /** A user-specified identifier for this grid item. This identifier is returned in the parent grid's `onClick` callback parameters. */
  id?: string;
  /** The grid item's title. */
  title?: string;
  /** The layout to use for the grid item. */
  layout?:
    | "GRID_ITEM_LAYOUT_UNSPECIFIED"
    | "TEXT_BELOW"
    | "TEXT_ABOVE"
    | (string & {});
  /** The image that displays in the grid item. */
  image?: GoogleAppsCardV1ImageComponent;
  /** The grid item's subtitle. */
  subtitle?: string;
}

export const GoogleAppsCardV1GridItem: Schema.Codec<GoogleAppsCardV1GridItem> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    layout: Schema.optional(Schema.String),
    image: Schema.optional(GoogleAppsCardV1ImageComponent),
    subtitle: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsCardV1GridItem" });

export interface GoogleAppsCardV1Grid {
  /** The border style to apply to each grid item. */
  borderStyle?: GoogleAppsCardV1BorderStyle;
  /** The text that displays in the grid header. */
  title?: string;
  /** The items to display in the grid. */
  items?: ReadonlyArray<GoogleAppsCardV1GridItem>;
  /** The number of columns to display in the grid. A default value is used if this field isn't specified, and that default value is different depending on where the grid is shown (dialog versus companion). */
  columnCount?: number;
  /** This callback is reused by each individual grid item, but with the item's identifier and index in the items list added to the callback's parameters. */
  onClick?: GoogleAppsCardV1OnClick;
}

export const GoogleAppsCardV1Grid: Schema.Codec<GoogleAppsCardV1Grid> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      borderStyle: Schema.optional(GoogleAppsCardV1BorderStyle),
      title: Schema.optional(Schema.String),
      items: Schema.optional(Schema.Array(GoogleAppsCardV1GridItem)),
      columnCount: Schema.optional(Schema.Number),
      onClick: Schema.optional(GoogleAppsCardV1OnClick),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1Grid",
  }) as any as Schema.Codec<GoogleAppsCardV1Grid>;

export interface GoogleAppsCardV1Validation {
  /** Specify the character limit for text input widgets. Note that this is only used for text input and is ignored for other widgets. [Google Workspace add-ons and Chat apps](https://developers.google.com/workspace/extend): */
  characterLimit?: number;
  /** Specify the type of the input widgets. [Google Workspace add-ons and Chat apps](https://developers.google.com/workspace/extend): */
  inputType?:
    | "INPUT_TYPE_UNSPECIFIED"
    | "TEXT"
    | "INTEGER"
    | "FLOAT"
    | "EMAIL"
    | "EMOJI_PICKER"
    | (string & {});
}

export const GoogleAppsCardV1Validation: Schema.Codec<GoogleAppsCardV1Validation> =
  /*@__PURE__*/ Schema.Struct({
    characterLimit: Schema.optional(Schema.Number),
    inputType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsCardV1Validation" });

export interface GoogleAppsCardV1Action {
  /** Specifies the loading indicator that the action displays while making the call to the action. */
  loadIndicator?: "SPINNER" | "NONE" | (string & {});
  /** A custom function to invoke when the containing element is clicked or otherwise activated. For example usage, see [Read form data](https://developers.google.com/workspace/chat/read-form-data). */
  function?: string;
  /** List of action parameters. */
  parameters?: ReadonlyArray<GoogleAppsCardV1ActionParameter>;
  /** Indicates whether form values persist after the action. The default value is `false`. If `true`, form values remain after the action is triggered. To let the user make changes while the action is being processed, set [`LoadIndicator`](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) to `NONE`. For [card messages](https://developers.google.com/workspace/chat/api/guides/v1/messages/create#create) in Chat apps, you must also set the action's [`ResponseType`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages#responsetype) to `UPDATE_MESSAGE` and use the same [`card_id`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages#CardWithId) from the card that contained the action. If `false`, the form values are cleared when the action is triggered. To prevent the user from making changes while the action is being processed, set [`LoadIndicator`](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#loadindicator) to `SPINNER`. */
  persistValues?: boolean;
  /** Optional. Required when opening a [dialog](https://developers.google.com/workspace/chat/dialogs). What to do in response to an interaction with a user, such as a user clicking a button in a card message. If unspecified, the app responds by executing an `action`—like opening a link or running a function—as normal. By specifying an `interaction`, the app can respond in special interactive ways. For example, by setting `interaction` to `OPEN_DIALOG`, the app can open a [dialog](https://developers.google.com/workspace/chat/dialogs). When specified, a loading indicator isn't shown. If specified for an add-on, the entire card is stripped and nothing is shown in the client. [Google Chat apps](https://developers.google.com/workspace/chat): */
  interaction?: "INTERACTION_UNSPECIFIED" | "OPEN_DIALOG" | (string & {});
  /** Optional. Fill this list with the names of widgets that this Action needs for a valid submission. If the widgets listed here don't have a value when this Action is invoked, the form submission is aborted. [Google Workspace add-ons and Chat apps](https://developers.google.com/workspace/extend): */
  requiredWidgets?: ReadonlyArray<string>;
  /** Optional. If this is true, then all widgets are considered required by this action. [Google Workspace add-ons and Chat apps](https://developers.google.com/workspace/extend): */
  allWidgetsAreRequired?: boolean;
}

export const GoogleAppsCardV1Action: Schema.Codec<GoogleAppsCardV1Action> =
  /*@__PURE__*/ Schema.Struct({
    loadIndicator: Schema.optional(Schema.String),
    function: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Array(GoogleAppsCardV1ActionParameter)),
    persistValues: Schema.optional(Schema.Boolean),
    interaction: Schema.optional(Schema.String),
    requiredWidgets: Schema.optional(Schema.Array(Schema.String)),
    allWidgetsAreRequired: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "GoogleAppsCardV1Action" });

export interface GoogleAppsCardV1SuggestionItem {
  /** The value of a suggested input to a text input field. This is equivalent to what users enter themselves. */
  text?: string;
}

export const GoogleAppsCardV1SuggestionItem: Schema.Codec<GoogleAppsCardV1SuggestionItem> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsCardV1SuggestionItem" });

export interface GoogleAppsCardV1Suggestions {
  /** A list of suggestions used for autocomplete recommendations in text input fields. */
  items?: ReadonlyArray<GoogleAppsCardV1SuggestionItem>;
}

export const GoogleAppsCardV1Suggestions: Schema.Codec<GoogleAppsCardV1Suggestions> =
  /*@__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(GoogleAppsCardV1SuggestionItem)),
  }).annotate({ identifier: "GoogleAppsCardV1Suggestions" });

export interface GoogleAppsCardV1TextInput {
  /** The name by which the text input is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data). */
  name?: string;
  /** A data source that's unique to a Google Workspace host application, such as Gmail emails, Google Calendar events, or Google Chat messages. Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps. */
  hostAppDataSource?: HostAppDataSourceMarkup;
  /** Text that appears below the text input field meant to assist users by prompting them to enter a certain value. This text is always visible. Required if `label` is unspecified. Otherwise, optional. */
  hintText?: string;
  /** Specify the input format validation necessary for this text field. [Google Workspace add-ons and Chat apps](https://developers.google.com/workspace/extend): */
  validation?: GoogleAppsCardV1Validation;
  /** How a text input field appears in the user interface. For example, whether the field is single or multi-line. */
  type?: "SINGLE_LINE" | "MULTIPLE_LINE" | (string & {});
  /** The text that appears above the text input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if you are asking someone's name, but specifically need their surname, write `surname` instead of `name`. Required if `hintText` is unspecified. Otherwise, optional. */
  label?: string;
  /** What to do when a change occurs in the text input field. For example, a user adding to the field or deleting text. Examples of actions to take include running a custom function or opening a [dialog](https://developers.google.com/workspace/chat/dialogs) in Google Chat. */
  onChangeAction?: GoogleAppsCardV1Action;
  /** Optional. Specify what action to take when the text input field provides suggestions to users who interact with it. If unspecified, the suggestions are set by `initialSuggestions` and are processed by the client. If specified, the app takes the action specified here, such as running a custom function. [Google Workspace add-ons](https://developers.google.com/workspace/add-ons): */
  autoCompleteAction?: GoogleAppsCardV1Action;
  /** Suggested values that users can enter. These values appear when users click inside the text input field. As users type, the suggested values dynamically filter to match what the users have typed. For example, a text input field for programming language might suggest Java, JavaScript, Python, and C++. When users start typing `Jav`, the list of suggestions filters to show just `Java` and `JavaScript`. Suggested values help guide users to enter values that your app can make sense of. When referring to JavaScript, some users might enter `javascript` and others `java script`. Suggesting `JavaScript` can standardize how users interact with your app. When specified, `TextInput.type` is always `SINGLE_LINE`, even if it's set to `MULTIPLE_LINE`. [Google Workspace add-ons and Chat apps](https://developers.google.com/workspace/extend): */
  initialSuggestions?: GoogleAppsCardV1Suggestions;
  /** Text that appears in the text input field when the field is empty. Use this text to prompt users to enter a value. For example, `Enter a number from 0 to 100`. [Google Chat apps](https://developers.google.com/workspace/chat): */
  placeholderText?: string;
  /** The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data). */
  value?: string;
}

export const GoogleAppsCardV1TextInput: Schema.Codec<GoogleAppsCardV1TextInput> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    hostAppDataSource: Schema.optional(HostAppDataSourceMarkup),
    hintText: Schema.optional(Schema.String),
    validation: Schema.optional(GoogleAppsCardV1Validation),
    type: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
    onChangeAction: Schema.optional(GoogleAppsCardV1Action),
    autoCompleteAction: Schema.optional(GoogleAppsCardV1Action),
    initialSuggestions: Schema.optional(GoogleAppsCardV1Suggestions),
    placeholderText: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsCardV1TextInput" });

export interface GoogleAppsCardV1ChipList {
  /** Specified chip list layout. */
  layout?:
    | "LAYOUT_UNSPECIFIED"
    | "WRAPPED"
    | "HORIZONTAL_SCROLLABLE"
    | (string & {});
  /** An array of chips. */
  chips?: ReadonlyArray<GoogleAppsCardV1Chip>;
}

export const GoogleAppsCardV1ChipList: Schema.Codec<GoogleAppsCardV1ChipList> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      layout: Schema.optional(Schema.String),
      chips: Schema.optional(Schema.Array(GoogleAppsCardV1Chip)),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1ChipList",
  }) as any as Schema.Codec<GoogleAppsCardV1ChipList>;

export interface GoogleAppsCardV1TextParagraph {
  /** The text that's shown in the widget. */
  text?: string;
  /** The maximum number of lines of text that are displayed in the widget. If the text exceeds the specified maximum number of lines, the excess content is concealed behind a **show more** button. If the text is equal or shorter than the specified maximum number of lines, a **show more** button isn't displayed. The default value is 0, in which case all context is displayed. Negative values are ignored. */
  maxLines?: number;
  /** The syntax of the text. If not set, the text is rendered as HTML. [Google Chat apps](https://developers.google.com/workspace/chat): */
  textSyntax?: "TEXT_SYNTAX_UNSPECIFIED" | "HTML" | "MARKDOWN" | (string & {});
}

export const GoogleAppsCardV1TextParagraph: Schema.Codec<GoogleAppsCardV1TextParagraph> =
  /*@__PURE__*/ Schema.Struct({
    text: Schema.optional(Schema.String),
    maxLines: Schema.optional(Schema.Number),
    textSyntax: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsCardV1TextParagraph" });

export interface GoogleAppsCardV1SwitchControl {
  /** The value entered by a user, returned as part of a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data). */
  value?: string;
  /** How the switch appears in the user interface. [Google Workspace add-ons and Chat apps](https://developers.google.com/workspace/extend): */
  controlType?: "SWITCH" | "CHECKBOX" | "CHECK_BOX" | (string & {});
  /** The name by which the switch widget is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data). */
  name?: string;
  /** When `true`, the switch is selected. */
  selected?: boolean;
  /** The action to perform when the switch state is changed, such as what function to run. */
  onChangeAction?: GoogleAppsCardV1Action;
}

export const GoogleAppsCardV1SwitchControl: Schema.Codec<GoogleAppsCardV1SwitchControl> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    controlType: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    selected: Schema.optional(Schema.Boolean),
    onChangeAction: Schema.optional(GoogleAppsCardV1Action),
  }).annotate({ identifier: "GoogleAppsCardV1SwitchControl" });

export interface GoogleAppsCardV1DecoratedText {
  /** The text that appears above `text`. Always truncates. */
  topLabel?: string;
  /** `TextParagraph` equivalent of `bottom_label`. Always wraps. Allows for more complex formatting than `bottom_label`. [Google Chat apps](https://developers.google.com/workspace/chat): */
  bottomLabelText?: GoogleAppsCardV1TextParagraph;
  /** Deprecated in favor of `startIcon`. */
  icon?: GoogleAppsCardV1Icon;
  /** Optional. Vertical alignment of the start icon. If not set, the icon will be vertically centered. [Google Chat apps](https://developers.google.com/workspace/chat): */
  startIconVerticalAlignment?:
    | "VERTICAL_ALIGNMENT_UNSPECIFIED"
    | "TOP"
    | "MIDDLE"
    | "BOTTOM"
    | (string & {});
  /** `TextParagraph` equivalent of `top_label`. Always truncates. Allows for more complex formatting than `top_label`. [Google Chat apps](https://developers.google.com/workspace/chat): */
  topLabelText?: GoogleAppsCardV1TextParagraph;
  /** This action is triggered when users click `topLabel` or `bottomLabel`. */
  onClick?: GoogleAppsCardV1OnClick;
  /** The wrap text setting. If `true`, the text wraps and displays on multiple lines. Otherwise, the text is truncated. Only applies to `text`, not `topLabel` and `bottomLabel`. */
  wrapText?: boolean;
  /** The text that appears below `text`. Always wraps. */
  bottomLabel?: string;
  /** A button that a user can click to trigger an action. */
  button?: GoogleAppsCardV1Button;
  /** An icon displayed after the text. Supports [built-in](https://developers.google.com/workspace/chat/format-messages#builtinicons) and [custom](https://developers.google.com/workspace/chat/format-messages#customicons) icons. */
  endIcon?: GoogleAppsCardV1Icon;
  /** A switch widget that a user can click to change its state and trigger an action. */
  switchControl?: GoogleAppsCardV1SwitchControl;
  /** Required. The primary text. Supports simple formatting. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
  text?: string;
  /** The icon displayed in front of the text. */
  startIcon?: GoogleAppsCardV1Icon;
  /** `TextParagraph` equivalent of `text`. Allows for more complex formatting than `text`. [Google Chat apps](https://developers.google.com/workspace/chat): */
  contentText?: GoogleAppsCardV1TextParagraph;
}

export const GoogleAppsCardV1DecoratedText: Schema.Codec<GoogleAppsCardV1DecoratedText> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      topLabel: Schema.optional(Schema.String),
      bottomLabelText: Schema.optional(GoogleAppsCardV1TextParagraph),
      icon: Schema.optional(GoogleAppsCardV1Icon),
      startIconVerticalAlignment: Schema.optional(Schema.String),
      topLabelText: Schema.optional(GoogleAppsCardV1TextParagraph),
      onClick: Schema.optional(GoogleAppsCardV1OnClick),
      wrapText: Schema.optional(Schema.Boolean),
      bottomLabel: Schema.optional(Schema.String),
      button: Schema.optional(GoogleAppsCardV1Button),
      endIcon: Schema.optional(GoogleAppsCardV1Icon),
      switchControl: Schema.optional(GoogleAppsCardV1SwitchControl),
      text: Schema.optional(Schema.String),
      startIcon: Schema.optional(GoogleAppsCardV1Icon),
      contentText: Schema.optional(GoogleAppsCardV1TextParagraph),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1DecoratedText",
  }) as any as Schema.Codec<GoogleAppsCardV1DecoratedText>;

export interface GoogleAppsCardV1ButtonList {
  /** An array of buttons. */
  buttons?: ReadonlyArray<GoogleAppsCardV1Button>;
}

export const GoogleAppsCardV1ButtonList: Schema.Codec<GoogleAppsCardV1ButtonList> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      buttons: Schema.optional(Schema.Array(GoogleAppsCardV1Button)),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1ButtonList",
  }) as any as Schema.Codec<GoogleAppsCardV1ButtonList>;

export interface GoogleAppsCardV1Image {
  /** The alternative text of this image that's used for accessibility. */
  altText?: string;
  /** The HTTPS URL that hosts the image. For example: ``` https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png ``` */
  imageUrl?: string;
  /** When a user clicks the image, the click triggers this action. */
  onClick?: GoogleAppsCardV1OnClick;
}

export const GoogleAppsCardV1Image: Schema.Codec<GoogleAppsCardV1Image> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      altText: Schema.optional(Schema.String),
      imageUrl: Schema.optional(Schema.String),
      onClick: Schema.optional(GoogleAppsCardV1OnClick),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1Image",
  }) as any as Schema.Codec<GoogleAppsCardV1Image>;

export interface GoogleAppsCardV1NestedWidget {
  /** A text paragraph widget. */
  textParagraph?: GoogleAppsCardV1TextParagraph;
  /** A button list widget. */
  buttonList?: GoogleAppsCardV1ButtonList;
  /** An image widget. */
  image?: GoogleAppsCardV1Image;
}

export const GoogleAppsCardV1NestedWidget: Schema.Codec<GoogleAppsCardV1NestedWidget> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      textParagraph: Schema.optional(GoogleAppsCardV1TextParagraph),
      buttonList: Schema.optional(GoogleAppsCardV1ButtonList),
      image: Schema.optional(GoogleAppsCardV1Image),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1NestedWidget",
  }) as any as Schema.Codec<GoogleAppsCardV1NestedWidget>;

export interface GoogleAppsCardV1CarouselCard {
  /** A list of widgets displayed in the carousel card. The widgets are displayed in the order that they are specified. */
  widgets?: ReadonlyArray<GoogleAppsCardV1NestedWidget>;
  /** A list of widgets displayed at the bottom of the carousel card. The widgets are displayed in the order that they are specified. */
  footerWidgets?: ReadonlyArray<GoogleAppsCardV1NestedWidget>;
}

export const GoogleAppsCardV1CarouselCard: Schema.Codec<GoogleAppsCardV1CarouselCard> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      widgets: Schema.optional(Schema.Array(GoogleAppsCardV1NestedWidget)),
      footerWidgets: Schema.optional(
        Schema.Array(GoogleAppsCardV1NestedWidget),
      ),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1CarouselCard",
  }) as any as Schema.Codec<GoogleAppsCardV1CarouselCard>;

export interface GoogleAppsCardV1Carousel {
  /** A list of cards included in the carousel. */
  carouselCards?: ReadonlyArray<GoogleAppsCardV1CarouselCard>;
}

export const GoogleAppsCardV1Carousel: Schema.Codec<GoogleAppsCardV1Carousel> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      carouselCards: Schema.optional(
        Schema.Array(GoogleAppsCardV1CarouselCard),
      ),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1Carousel",
  }) as any as Schema.Codec<GoogleAppsCardV1Carousel>;

export interface GoogleAppsCardV1SelectionItem {
  /** For multiselect menus, a text description or label that's displayed below the item's `text` field. */
  bottomText?: string;
  /** Whether the item is selected by default. If the selection input only accepts one value (such as for radio buttons or a dropdown menu), only set this field for one item. */
  selected?: boolean;
  /** The text that identifies or describes the item to users. */
  text?: string;
  startIconUri?: string;
  /** The value associated with this item. The client should use this as a form input value. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data). */
  value?: string;
}

export const GoogleAppsCardV1SelectionItem: Schema.Codec<GoogleAppsCardV1SelectionItem> =
  /*@__PURE__*/ Schema.Struct({
    bottomText: Schema.optional(Schema.String),
    selected: Schema.optional(Schema.Boolean),
    text: Schema.optional(Schema.String),
    startIconUri: Schema.optional(Schema.String),
    value: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsCardV1SelectionItem" });

export interface GoogleAppsCardV1PlatformDataSource {
  /** A data source shared by all Google Workspace applications, such as users in a Google Workspace organization. */
  commonDataSource?: "UNKNOWN" | "USER" | (string & {});
  /** A data source that's unique to a Google Workspace host application, such spaces in Google Chat. This field supports the Google API Client Libraries but isn't available in the Cloud Client Libraries. To learn more, see [Install the client libraries](https://developers.google.com/workspace/chat/libraries). */
  hostAppDataSource?: HostAppDataSourceMarkup;
}

export const GoogleAppsCardV1PlatformDataSource: Schema.Codec<GoogleAppsCardV1PlatformDataSource> =
  /*@__PURE__*/ Schema.Struct({
    commonDataSource: Schema.optional(Schema.String),
    hostAppDataSource: Schema.optional(HostAppDataSourceMarkup),
  }).annotate({ identifier: "GoogleAppsCardV1PlatformDataSource" });

export interface GoogleAppsCardV1DataSourceConfig {
  /** The data is from a remote data provider. */
  remoteDataSource?: GoogleAppsCardV1Action;
  /** The data is from a Google Workspace application. */
  platformDataSource?: GoogleAppsCardV1PlatformDataSource;
  /** The minimum number of characters the user must enter before this data provider is triggered (i.e., before it starts returning results). */
  minCharactersTrigger?: number;
}

export const GoogleAppsCardV1DataSourceConfig: Schema.Codec<GoogleAppsCardV1DataSourceConfig> =
  /*@__PURE__*/ Schema.Struct({
    remoteDataSource: Schema.optional(GoogleAppsCardV1Action),
    platformDataSource: Schema.optional(GoogleAppsCardV1PlatformDataSource),
    minCharactersTrigger: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleAppsCardV1DataSourceConfig" });

export interface GoogleAppsCardV1SelectionInput {
  /** An array of selectable items. For example, an array of radio buttons or checkboxes. Supports up to 100 items. */
  items?: ReadonlyArray<GoogleAppsCardV1SelectionItem>;
  /** An external data source, such as a relational database. */
  externalDataSource?: GoogleAppsCardV1Action;
  /** For multiselect menus, the maximum number of items that a user can select. Minimum value is 1 item. If unspecified, defaults to 3 items. */
  multiSelectMaxSelectedItems?: number;
  /** The text that appears above the selection input field in the user interface. Specify text that helps the user enter the information your app needs. For example, if users are selecting the urgency of a work ticket from a drop-down menu, the label might be "Urgency" or "Select urgency". */
  label?: string;
  /** If specified, the form is submitted when the selection changes. If not specified, you must specify a separate button that submits the form. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data). */
  onChangeAction?: GoogleAppsCardV1Action;
  /** Optional. The data source configs for the selection control. This field provides more fine-grained control over the data source. If specified, the `multi_select_max_selected_items` field, `multi_select_min_query_length` field, `external_data_source` field and `platform_data_source` field are ignored. Available for Google Workspace add-ons that extend Google Workspace Studio. Available for the `Dropdown widget` in Google Chat apps. For the `Dropdown` widget in Google Chat apps, only one `DataSourceConfig` is supported. If multiple `DataSourceConfig`s are set, only the first one is used. */
  dataSourceConfigs?: ReadonlyArray<GoogleAppsCardV1DataSourceConfig>;
  /** The type of items that are displayed to users in a `SelectionInput` widget. Selection types support different types of interactions. For example, users can select one or more checkboxes, but they can only select one value from a dropdown menu. */
  type?:
    | "CHECK_BOX"
    | "RADIO_BUTTON"
    | "SWITCH"
    | "DROPDOWN"
    | "MULTI_SELECT"
    | (string & {});
  /** Optional. Text that appears below the selection input field meant to assist users by prompting them to enter a certain value. This text is always visible. Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps. */
  hintText?: string;
  /** Required. The name that identifies the selection input in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data). */
  name?: string;
  /** For multiselect menus, the number of text characters that a user inputs before the menu returns suggested selection items. If unset, the multiselect menu uses the following default values: * If the menu uses a static array of `SelectionInput` items, defaults to 0 characters and immediately populates items from the array. * If the menu uses a dynamic data source (`multi_select_data_source`), defaults to 3 characters before querying the data source to return suggested items. */
  multiSelectMinQueryLength?: number;
  /** A data source from Google Workspace. */
  platformDataSource?: GoogleAppsCardV1PlatformDataSource;
}

export const GoogleAppsCardV1SelectionInput: Schema.Codec<GoogleAppsCardV1SelectionInput> =
  /*@__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(GoogleAppsCardV1SelectionItem)),
    externalDataSource: Schema.optional(GoogleAppsCardV1Action),
    multiSelectMaxSelectedItems: Schema.optional(Schema.Number),
    label: Schema.optional(Schema.String),
    onChangeAction: Schema.optional(GoogleAppsCardV1Action),
    dataSourceConfigs: Schema.optional(
      Schema.Array(GoogleAppsCardV1DataSourceConfig),
    ),
    type: Schema.optional(Schema.String),
    hintText: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    multiSelectMinQueryLength: Schema.optional(Schema.Number),
    platformDataSource: Schema.optional(GoogleAppsCardV1PlatformDataSource),
  }).annotate({ identifier: "GoogleAppsCardV1SelectionInput" });

export interface GoogleAppsCardV1Divider {}

export const GoogleAppsCardV1Divider: Schema.Codec<GoogleAppsCardV1Divider> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleAppsCardV1Divider",
  });

export interface GoogleAppsCardV1DateTimePicker {
  /** Whether the widget supports inputting a date, a time, or the date and time. */
  type?: "DATE_AND_TIME" | "DATE_ONLY" | "TIME_ONLY" | (string & {});
  /** The default value displayed in the widget, in milliseconds since [Unix epoch time](https://en.wikipedia.org/wiki/Unix_time). Specify the value based on the type of picker (`DateTimePickerType`): * `DATE_AND_TIME`: a calendar date and time in UTC. For example, to represent January 1, 2023 at 12:00 PM UTC, use `1672574400000`. * `DATE_ONLY`: a calendar date at 00:00:00 UTC. For example, to represent January 1, 2023, use `1672531200000`. * `TIME_ONLY`: a time in UTC. For example, to represent 12:00 PM, use `43200000` (or `12 * 60 * 60 * 1000`). */
  valueMsEpoch?: string;
  /** A data source that's unique to a Google Workspace host application, such as Gmail emails, Google Calendar events, or Google Chat messages. Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps. */
  hostAppDataSource?: HostAppDataSourceMarkup;
  /** The name by which the `DateTimePicker` is identified in a form input event. For details about working with form inputs, see [Receive form data](https://developers.google.com/workspace/chat/read-form-data). */
  name?: string;
  /** The text that prompts users to input a date, a time, or a date and time. For example, if users are scheduling an appointment, use a label such as `Appointment date` or `Appointment date and time`. */
  label?: string;
  /** Triggered when the user clicks **Save** or **Clear** from the `DateTimePicker` interface. */
  onChangeAction?: GoogleAppsCardV1Action;
  /** The number representing the time zone offset from UTC, in minutes. If set, the `value_ms_epoch` is displayed in the specified time zone. If unset, the value defaults to the user's time zone setting. */
  timezoneOffsetDate?: number;
}

export const GoogleAppsCardV1DateTimePicker: Schema.Codec<GoogleAppsCardV1DateTimePicker> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    valueMsEpoch: Schema.optional(Schema.String),
    hostAppDataSource: Schema.optional(HostAppDataSourceMarkup),
    name: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
    onChangeAction: Schema.optional(GoogleAppsCardV1Action),
    timezoneOffsetDate: Schema.optional(Schema.Number),
  }).annotate({ identifier: "GoogleAppsCardV1DateTimePicker" });

export interface GoogleAppsCardV1Widgets {
  /** TextInput widget. */
  textInput?: GoogleAppsCardV1TextInput;
  /** Image widget. */
  image?: GoogleAppsCardV1Image;
  /** SelectionInput widget. */
  selectionInput?: GoogleAppsCardV1SelectionInput;
  /** ButtonList widget. */
  buttonList?: GoogleAppsCardV1ButtonList;
  /** DateTimePicker widget. */
  dateTimePicker?: GoogleAppsCardV1DateTimePicker;
  /** ChipList widget. */
  chipList?: GoogleAppsCardV1ChipList;
  /** TextParagraph widget. */
  textParagraph?: GoogleAppsCardV1TextParagraph;
  /** DecoratedText widget. */
  decoratedText?: GoogleAppsCardV1DecoratedText;
}

export const GoogleAppsCardV1Widgets: Schema.Codec<GoogleAppsCardV1Widgets> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      textInput: Schema.optional(GoogleAppsCardV1TextInput),
      image: Schema.optional(GoogleAppsCardV1Image),
      selectionInput: Schema.optional(GoogleAppsCardV1SelectionInput),
      buttonList: Schema.optional(GoogleAppsCardV1ButtonList),
      dateTimePicker: Schema.optional(GoogleAppsCardV1DateTimePicker),
      chipList: Schema.optional(GoogleAppsCardV1ChipList),
      textParagraph: Schema.optional(GoogleAppsCardV1TextParagraph),
      decoratedText: Schema.optional(GoogleAppsCardV1DecoratedText),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1Widgets",
  }) as any as Schema.Codec<GoogleAppsCardV1Widgets>;

export interface GoogleAppsCardV1Column {
  /** Specifies how a column fills the width of the card. */
  horizontalSizeStyle?:
    | "HORIZONTAL_SIZE_STYLE_UNSPECIFIED"
    | "FILL_AVAILABLE_SPACE"
    | "FILL_MINIMUM_SPACE"
    | (string & {});
  /** Specifies whether widgets align to the top, bottom, or center of a column. */
  verticalAlignment?:
    | "VERTICAL_ALIGNMENT_UNSPECIFIED"
    | "CENTER"
    | "TOP"
    | "BOTTOM"
    | (string & {});
  /** An array of widgets included in a column. Widgets appear in the order that they are specified. */
  widgets?: ReadonlyArray<GoogleAppsCardV1Widgets>;
  /** Specifies whether widgets align to the left, right, or center of a column. */
  horizontalAlignment?:
    | "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
    | "START"
    | "CENTER"
    | "END"
    | (string & {});
}

export const GoogleAppsCardV1Column: Schema.Codec<GoogleAppsCardV1Column> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      horizontalSizeStyle: Schema.optional(Schema.String),
      verticalAlignment: Schema.optional(Schema.String),
      widgets: Schema.optional(Schema.Array(GoogleAppsCardV1Widgets)),
      horizontalAlignment: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1Column",
  }) as any as Schema.Codec<GoogleAppsCardV1Column>;

export interface GoogleAppsCardV1Columns {
  /** An array of columns. You can include up to 2 columns in a card or dialog. */
  columnItems?: ReadonlyArray<GoogleAppsCardV1Column>;
}

export const GoogleAppsCardV1Columns: Schema.Codec<GoogleAppsCardV1Columns> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      columnItems: Schema.optional(Schema.Array(GoogleAppsCardV1Column)),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1Columns",
  }) as any as Schema.Codec<GoogleAppsCardV1Columns>;

export interface GoogleAppsCardV1Trigger {
  /** The unique identifier of the ActionRule. */
  actionRuleId?: string;
}

export const GoogleAppsCardV1Trigger: Schema.Codec<GoogleAppsCardV1Trigger> =
  /*@__PURE__*/ Schema.Struct({
    actionRuleId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsCardV1Trigger" });

export interface GoogleAppsCardV1UpdateVisibilityAction {
  /** The new visibility. */
  visibility?: "VISIBILITY_UNSPECIFIED" | "VISIBLE" | "HIDDEN" | (string & {});
}

export const GoogleAppsCardV1UpdateVisibilityAction: Schema.Codec<GoogleAppsCardV1UpdateVisibilityAction> =
  /*@__PURE__*/ Schema.Struct({
    visibility: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsCardV1UpdateVisibilityAction" });

export interface GoogleAppsCardV1CommonWidgetAction {
  /** The action to update the visibility of a widget. */
  updateVisibilityAction?: GoogleAppsCardV1UpdateVisibilityAction;
}

export const GoogleAppsCardV1CommonWidgetAction: Schema.Codec<GoogleAppsCardV1CommonWidgetAction> =
  /*@__PURE__*/ Schema.Struct({
    updateVisibilityAction: Schema.optional(
      GoogleAppsCardV1UpdateVisibilityAction,
    ),
  }).annotate({ identifier: "GoogleAppsCardV1CommonWidgetAction" });

export interface GoogleAppsCardV1EventAction {
  /** The list of triggers that will be triggered after the EventAction is executed. */
  postEventTriggers?: ReadonlyArray<GoogleAppsCardV1Trigger>;
  /** The unique identifier of the ActionRule. */
  actionRuleId?: string;
  /** Common widget action. */
  commonWidgetAction?: GoogleAppsCardV1CommonWidgetAction;
}

export const GoogleAppsCardV1EventAction: Schema.Codec<GoogleAppsCardV1EventAction> =
  /*@__PURE__*/ Schema.Struct({
    postEventTriggers: Schema.optional(Schema.Array(GoogleAppsCardV1Trigger)),
    actionRuleId: Schema.optional(Schema.String),
    commonWidgetAction: Schema.optional(GoogleAppsCardV1CommonWidgetAction),
  }).annotate({ identifier: "GoogleAppsCardV1EventAction" });

export interface GoogleAppsCardV1Widget {
  /** A unique ID assigned to the widget that's used to identify the widget to be mutated. The ID has a character limit of 64 characters and should be in the format of `[a-zA-Z0-9-]+`. Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps. */
  id?: string;
  /** Displays a grid with a collection of items. A grid supports any number of columns and items. The number of rows is determined by the upper bounds of the number items divided by the number of columns. A grid with 10 items and 2 columns has 5 rows. A grid with 11 items and 2 columns has 6 rows. [Google Workspace add-ons and Chat apps](https://developers.google.com/workspace/extend): For example, the following JSON creates a 2 column grid with a single item: ``` "grid": { "title": "A fine collection of items", "columnCount": 2, "borderStyle": { "type": "STROKE", "cornerRadius": 4 }, "items": [ { "image": { "imageUri": "https://www.example.com/image.png", "cropStyle": { "type": "SQUARE" }, "borderStyle": { "type": "STROKE" } }, "title": "An item", "textAlignment": "CENTER" } ], "onClick": { "openLink": { "url": "https://www.example.com" } } } ``` */
  grid?: GoogleAppsCardV1Grid;
  /** Displays a text box that users can type into. For example, the following JSON creates a text input for an email address: ``` "textInput": { "name": "mailing_address", "label": "Mailing Address" } ``` As another example, the following JSON creates a text input for a programming language with static suggestions: ``` "textInput": { "name": "preferred_programing_language", "label": "Preferred Language", "initialSuggestions": { "items": [ { "text": "C++" }, { "text": "Java" }, { "text": "JavaScript" }, { "text": "Python" } ] } } ``` */
  textInput?: GoogleAppsCardV1TextInput;
  /** A list of chips. For example, the following JSON creates two chips. The first is a text chip and the second is an icon chip that opens a link: ``` "chipList": { "chips": [ { "text": "Edit", "disabled": true, }, { "icon": { "knownIcon": "INVITE", "altText": "check calendar" }, "onClick": { "openLink": { "url": "https://example.com/calendar" } } } ] } ``` */
  chipList?: GoogleAppsCardV1ChipList;
  /** Displays a decorated text item. For example, the following JSON creates a decorated text widget showing email address: ``` "decoratedText": { "icon": { "knownIcon": "EMAIL" }, "topLabel": "Email Address", "text": "sasha@example.com", "bottomLabel": "This is a new Email address!", "switchControl": { "name": "has_send_welcome_email_to_sasha", "selected": false, "controlType": "CHECKBOX" } } ``` */
  decoratedText?: GoogleAppsCardV1DecoratedText;
  /** A list of buttons. For example, the following JSON creates two buttons. The first is a blue text button and the second is an image button that opens a link: ``` "buttonList": { "buttons": [ { "text": "Edit", "color": { "red": 0, "green": 0, "blue": 1, }, "disabled": true, }, { "icon": { "knownIcon": "INVITE", "altText": "check calendar" }, "onClick": { "openLink": { "url": "https://example.com/calendar" } } } ] } ``` */
  buttonList?: GoogleAppsCardV1ButtonList;
  /** A carousel contains a collection of nested widgets. For example, this is a JSON representation of a carousel that contains two text paragraphs. ``` { "widgets": [ { "textParagraph": { "text": "First text paragraph in the carousel." } }, { "textParagraph": { "text": "Second text paragraph in the carousel." } } ] } ``` */
  carousel?: GoogleAppsCardV1Carousel;
  /** Displays a selection control that lets users select items. Selection controls can be checkboxes, radio buttons, switches, or dropdown menus. For example, the following JSON creates a dropdown menu that lets users choose a size: ``` "selectionInput": { "name": "size", "label": "Size" "type": "DROPDOWN", "items": [ { "text": "S", "value": "small", "selected": false }, { "text": "M", "value": "medium", "selected": true }, { "text": "L", "value": "large", "selected": false }, { "text": "XL", "value": "extra_large", "selected": false } ] } ``` */
  selectionInput?: GoogleAppsCardV1SelectionInput;
  /** Displays a horizontal line divider between widgets. For example, the following JSON creates a divider: ``` "divider": { } ``` */
  divider?: GoogleAppsCardV1Divider;
  /** Displays a widget that lets users input a date, time, or date and time. For example, the following JSON creates a date time picker to schedule an appointment: ``` "dateTimePicker": { "name": "appointment_time", "label": "Book your appointment at:", "type": "DATE_AND_TIME", "valueMsEpoch": 796435200000 } ``` */
  dateTimePicker?: GoogleAppsCardV1DateTimePicker;
  /** Displays up to 2 columns. To include more than 2 columns, or to use rows, use the `Grid` widget. For example, the following JSON creates 2 columns that each contain text paragraphs: ``` "columns": { "columnItems": [ { "horizontalSizeStyle": "FILL_AVAILABLE_SPACE", "horizontalAlignment": "CENTER", "verticalAlignment": "CENTER", "widgets": [ { "textParagraph": { "text": "First column text paragraph" } } ] }, { "horizontalSizeStyle": "FILL_AVAILABLE_SPACE", "horizontalAlignment": "CENTER", "verticalAlignment": "CENTER", "widgets": [ { "textParagraph": { "text": "Second column text paragraph" } } ] } ] } ``` */
  columns?: GoogleAppsCardV1Columns;
  /** Specifies whether widgets align to the left, right, or center of a column. */
  horizontalAlignment?:
    | "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
    | "START"
    | "CENTER"
    | "END"
    | (string & {});
  /** Displays a text paragraph. Supports simple HTML formatted text. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). For example, the following JSON creates a bolded text: ``` "textParagraph": { "text": " *bold text*" } ``` */
  textParagraph?: GoogleAppsCardV1TextParagraph;
  /** Specifies whether the widget is visible or hidden. The default value is `VISIBLE`. Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps. */
  visibility?: "VISIBILITY_UNSPECIFIED" | "VISIBLE" | "HIDDEN" | (string & {});
  /** Specifies the event actions that can be performed on the widget. Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps. */
  eventActions?: ReadonlyArray<GoogleAppsCardV1EventAction>;
  /** Displays an image. For example, the following JSON creates an image with alternative text: ``` "image": { "imageUrl": "https://developers.google.com/workspace/chat/images/quickstart-app-avatar.png", "altText": "Chat app avatar" } ``` */
  image?: GoogleAppsCardV1Image;
}

export const GoogleAppsCardV1Widget: Schema.Codec<GoogleAppsCardV1Widget> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      id: Schema.optional(Schema.String),
      grid: Schema.optional(GoogleAppsCardV1Grid),
      textInput: Schema.optional(GoogleAppsCardV1TextInput),
      chipList: Schema.optional(GoogleAppsCardV1ChipList),
      decoratedText: Schema.optional(GoogleAppsCardV1DecoratedText),
      buttonList: Schema.optional(GoogleAppsCardV1ButtonList),
      carousel: Schema.optional(GoogleAppsCardV1Carousel),
      selectionInput: Schema.optional(GoogleAppsCardV1SelectionInput),
      divider: Schema.optional(GoogleAppsCardV1Divider),
      dateTimePicker: Schema.optional(GoogleAppsCardV1DateTimePicker),
      columns: Schema.optional(GoogleAppsCardV1Columns),
      horizontalAlignment: Schema.optional(Schema.String),
      textParagraph: Schema.optional(GoogleAppsCardV1TextParagraph),
      visibility: Schema.optional(Schema.String),
      eventActions: Schema.optional(Schema.Array(GoogleAppsCardV1EventAction)),
      image: Schema.optional(GoogleAppsCardV1Image),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1Widget",
  }) as any as Schema.Codec<GoogleAppsCardV1Widget>;

export interface GoogleAppsCardV1CollapseControl {
  /** The horizontal alignment of the expand and collapse button. */
  horizontalAlignment?:
    | "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
    | "START"
    | "CENTER"
    | "END"
    | (string & {});
  /** Optional. Define a customizable button to collapse the section. Both expand_button and collapse_button field must be set. Only one field set will not take into effect. If this field isn't set, the default button is used. */
  collapseButton?: GoogleAppsCardV1Button;
  /** Optional. Define a customizable button to expand the section. Both expand_button and collapse_button field must be set. Only one field set will not take into effect. If this field isn't set, the default button is used. */
  expandButton?: GoogleAppsCardV1Button;
}

export const GoogleAppsCardV1CollapseControl: Schema.Codec<GoogleAppsCardV1CollapseControl> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      horizontalAlignment: Schema.optional(Schema.String),
      collapseButton: Schema.optional(GoogleAppsCardV1Button),
      expandButton: Schema.optional(GoogleAppsCardV1Button),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1CollapseControl",
  }) as any as Schema.Codec<GoogleAppsCardV1CollapseControl>;

export interface GoogleAppsCardV1Section {
  /** All the widgets in the section. Must contain at least one widget. */
  widgets?: ReadonlyArray<GoogleAppsCardV1Widget>;
  /** Optional. Define the expand and collapse button of the section. This button will be shown only if the section is collapsible. If this field isn't set, the default button is used. */
  collapseControl?: GoogleAppsCardV1CollapseControl;
  /** Text that appears at the top of a section. Supports simple HTML formatted text. For more information about formatting text, see [Formatting text in Google Chat apps](https://developers.google.com/workspace/chat/format-messages#card-formatting) and [Formatting text in Google Workspace add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting). */
  header?: string;
  /** Indicates whether this section is collapsible. Collapsible sections hide some or all widgets, but users can expand the section to reveal the hidden widgets by clicking **Show more**. Users can hide the widgets again by clicking **Show less**. To determine which widgets are hidden, specify `uncollapsibleWidgetsCount`. */
  collapsible?: boolean;
  /** The number of uncollapsible widgets which remain visible even when a section is collapsed. For example, when a section contains five widgets and the `uncollapsibleWidgetsCount` is set to `2`, the first two widgets are always shown and the last three are collapsed by default. The `uncollapsibleWidgetsCount` is taken into account only when `collapsible` is `true`. */
  uncollapsibleWidgetsCount?: number;
  /** A unique ID assigned to the section that's used to identify the section to be mutated. The ID has a character limit of 64 characters and should be in the format of `[a-zA-Z0-9-]+`. Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps. */
  id?: string;
}

export const GoogleAppsCardV1Section: Schema.Codec<GoogleAppsCardV1Section> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      widgets: Schema.optional(Schema.Array(GoogleAppsCardV1Widget)),
      collapseControl: Schema.optional(GoogleAppsCardV1CollapseControl),
      header: Schema.optional(Schema.String),
      collapsible: Schema.optional(Schema.Boolean),
      uncollapsibleWidgetsCount: Schema.optional(Schema.Number),
      id: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1Section",
  }) as any as Schema.Codec<GoogleAppsCardV1Section>;

export interface GoogleAppsCardV1ExpressionDataCondition {
  /** The type of the condition. */
  conditionType?:
    | "CONDITION_TYPE_UNSPECIFIED"
    | "EXPRESSION_EVALUATION_SUCCESS"
    | "EXPRESSION_EVALUATION_FAILURE"
    | (string & {});
}

export const GoogleAppsCardV1ExpressionDataCondition: Schema.Codec<GoogleAppsCardV1ExpressionDataCondition> =
  /*@__PURE__*/ Schema.Struct({
    conditionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsCardV1ExpressionDataCondition" });

export interface GoogleAppsCardV1Condition {
  /** The unique identifier of the ActionRule. */
  actionRuleId?: string;
  /** The condition that is determined by the expression data. */
  expressionDataCondition?: GoogleAppsCardV1ExpressionDataCondition;
}

export const GoogleAppsCardV1Condition: Schema.Codec<GoogleAppsCardV1Condition> =
  /*@__PURE__*/ Schema.Struct({
    actionRuleId: Schema.optional(Schema.String),
    expressionDataCondition: Schema.optional(
      GoogleAppsCardV1ExpressionDataCondition,
    ),
  }).annotate({ identifier: "GoogleAppsCardV1Condition" });

export interface GoogleAppsCardV1ExpressionData {
  /** The uncompiled expression. */
  expression?: string;
  /** The list of actions that the ExpressionData can be used. */
  eventActions?: ReadonlyArray<GoogleAppsCardV1EventAction>;
  /** The unique identifier of the ExpressionData. */
  id?: string;
  /** The list of conditions that are determined by the expression evaluation result. */
  conditions?: ReadonlyArray<GoogleAppsCardV1Condition>;
}

export const GoogleAppsCardV1ExpressionData: Schema.Codec<GoogleAppsCardV1ExpressionData> =
  /*@__PURE__*/ Schema.Struct({
    expression: Schema.optional(Schema.String),
    eventActions: Schema.optional(Schema.Array(GoogleAppsCardV1EventAction)),
    id: Schema.optional(Schema.String),
    conditions: Schema.optional(Schema.Array(GoogleAppsCardV1Condition)),
  }).annotate({ identifier: "GoogleAppsCardV1ExpressionData" });

export interface GoogleAppsCardV1CardAction {
  /** The `onClick` action for this action item. */
  onClick?: GoogleAppsCardV1OnClick;
  /** The label that displays as the action menu item. */
  actionLabel?: string;
}

export const GoogleAppsCardV1CardAction: Schema.Codec<GoogleAppsCardV1CardAction> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      onClick: Schema.optional(GoogleAppsCardV1OnClick),
      actionLabel: Schema.optional(Schema.String),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1CardAction",
  }) as any as Schema.Codec<GoogleAppsCardV1CardAction>;

export interface GoogleAppsCardV1Card {
  /** The fixed footer shown at the bottom of this card. Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. For Chat apps, you can use fixed footers in [dialogs](https://developers.google.com/workspace/chat/dialogs), but not [card messages](https://developers.google.com/workspace/chat/create-messages#create). [Google Workspace add-ons and Chat apps](https://developers.google.com/workspace/extend): */
  fixedFooter?: GoogleAppsCardV1CardFixedFooter;
  /** In Google Workspace add-ons, sets the display properties of the `peekCardHeader`. [Google Workspace add-ons](https://developers.google.com/workspace/add-ons): */
  displayStyle?:
    | "DISPLAY_STYLE_UNSPECIFIED"
    | "PEEK"
    | "REPLACE"
    | (string & {});
  /** Name of the card. Used as a card identifier in card navigation. [Google Workspace add-ons](https://developers.google.com/workspace/add-ons): */
  name?: string;
  /** The header of the card. A header usually contains a leading image and a title. Headers always appear at the top of a card. */
  header?: GoogleAppsCardV1CardHeader;
  /** Contains a collection of widgets. Each section has its own, optional header. Sections are visually separated by a line divider. For an example in Google Chat apps, see [Define a section of a card](https://developers.google.com/workspace/chat/design-components-card-dialog#define_a_section_of_a_card). */
  sections?: ReadonlyArray<GoogleAppsCardV1Section>;
  /** The divider style between the header, sections and footer. */
  sectionDividerStyle?:
    | "DIVIDER_STYLE_UNSPECIFIED"
    | "SOLID_DIVIDER"
    | "NO_DIVIDER"
    | (string & {});
  /** The expression data for the card. Available for Google Workspace add-ons that extend Google Workspace Studio. Unavailable for Google Chat apps. */
  expressionData?: ReadonlyArray<GoogleAppsCardV1ExpressionData>;
  /** When displaying contextual content, the peek card header acts as a placeholder so that the user can navigate forward between the homepage cards and the contextual cards. [Google Workspace add-ons](https://developers.google.com/workspace/add-ons): */
  peekCardHeader?: GoogleAppsCardV1CardHeader;
  /** The card's actions. Actions are added to the card's toolbar menu. [Google Workspace add-ons](https://developers.google.com/workspace/add-ons): For example, the following JSON constructs a card action menu with `Settings` and `Send Feedback` options: ``` "card_actions": [ { "actionLabel": "Settings", "onClick": { "action": { "functionName": "goToView", "parameters": [ { "key": "viewType", "value": "SETTING" } ], "loadIndicator": "LoadIndicator.SPINNER" } } }, { "actionLabel": "Send Feedback", "onClick": { "openLink": { "url": "https://example.com/feedback" } } } ] ``` */
  cardActions?: ReadonlyArray<GoogleAppsCardV1CardAction>;
}

export const GoogleAppsCardV1Card: Schema.Codec<GoogleAppsCardV1Card> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      fixedFooter: Schema.optional(GoogleAppsCardV1CardFixedFooter),
      displayStyle: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      header: Schema.optional(GoogleAppsCardV1CardHeader),
      sections: Schema.optional(Schema.Array(GoogleAppsCardV1Section)),
      sectionDividerStyle: Schema.optional(Schema.String),
      expressionData: Schema.optional(
        Schema.Array(GoogleAppsCardV1ExpressionData),
      ),
      peekCardHeader: Schema.optional(GoogleAppsCardV1CardHeader),
      cardActions: Schema.optional(Schema.Array(GoogleAppsCardV1CardAction)),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1Card",
  }) as any as Schema.Codec<GoogleAppsCardV1Card>;

export interface GoogleAppsCardV1OverflowMenuItem {
  /** Whether the menu option is disabled. Defaults to false. */
  disabled?: boolean;
  /** The icon displayed in front of the text. */
  startIcon?: GoogleAppsCardV1Icon;
  /** Required. The text that identifies or describes the item to users. */
  text?: string;
  /** Required. The action invoked when a menu option is selected. This `OnClick` cannot contain an `OverflowMenu`, any specified `OverflowMenu` is dropped and the menu item disabled. */
  onClick?: GoogleAppsCardV1OnClick;
}

export const GoogleAppsCardV1OverflowMenuItem: Schema.Codec<GoogleAppsCardV1OverflowMenuItem> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      disabled: Schema.optional(Schema.Boolean),
      startIcon: Schema.optional(GoogleAppsCardV1Icon),
      text: Schema.optional(Schema.String),
      onClick: Schema.optional(GoogleAppsCardV1OnClick),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1OverflowMenuItem",
  }) as any as Schema.Codec<GoogleAppsCardV1OverflowMenuItem>;

export interface GoogleAppsCardV1OverflowMenu {
  /** Required. The list of menu options. */
  items?: ReadonlyArray<GoogleAppsCardV1OverflowMenuItem>;
}

export const GoogleAppsCardV1OverflowMenu: Schema.Codec<GoogleAppsCardV1OverflowMenu> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      items: Schema.optional(Schema.Array(GoogleAppsCardV1OverflowMenuItem)),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1OverflowMenu",
  }) as any as Schema.Codec<GoogleAppsCardV1OverflowMenu>;

export interface GoogleAppsCardV1OpenLink {
  /** Whether the client forgets about a link after opening it, or observes it until the window closes. [Google Workspace add-ons](https://developers.google.com/workspace/add-ons): */
  onClose?: "NOTHING" | "RELOAD" | (string & {});
  /** The URL to open. HTTP URLs are converted to HTTPS. */
  url?: string;
  /** How to open a link. [Google Workspace add-ons](https://developers.google.com/workspace/add-ons): */
  openAs?: "FULL_SIZE" | "OVERLAY" | (string & {});
}

export const GoogleAppsCardV1OpenLink: Schema.Codec<GoogleAppsCardV1OpenLink> =
  /*@__PURE__*/ Schema.Struct({
    onClose: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    openAs: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleAppsCardV1OpenLink" });

export interface GoogleAppsCardV1OnClick {
  /** A new card is pushed to the card stack after clicking if specified. [Google Workspace add-ons](https://developers.google.com/workspace/add-ons): */
  card?: GoogleAppsCardV1Card;
  /** If specified, an action is triggered by this `onClick`. */
  action?: GoogleAppsCardV1Action;
  /** If specified, this `onClick` opens an overflow menu. */
  overflowMenu?: GoogleAppsCardV1OverflowMenu;
  /** If specified, this `onClick` triggers an open link action. */
  openLink?: GoogleAppsCardV1OpenLink;
  /** An add-on triggers this action when the action needs to open a link. This differs from the `open_link` above in that this needs to talk to server to get the link. Thus some preparation work is required for web client to do before the open link action response comes back. [Google Workspace add-ons](https://developers.google.com/workspace/add-ons): */
  openDynamicLinkAction?: GoogleAppsCardV1Action;
}

export const GoogleAppsCardV1OnClick: Schema.Codec<GoogleAppsCardV1OnClick> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      card: Schema.optional(GoogleAppsCardV1Card),
      action: Schema.optional(GoogleAppsCardV1Action),
      overflowMenu: Schema.optional(GoogleAppsCardV1OverflowMenu),
      openLink: Schema.optional(GoogleAppsCardV1OpenLink),
      openDynamicLinkAction: Schema.optional(GoogleAppsCardV1Action),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1OnClick",
  }) as any as Schema.Codec<GoogleAppsCardV1OnClick>;

export interface GoogleAppsCardV1Chip {
  /** The text displayed inside the chip. */
  label?: string;
  /** Whether the chip is in an active state and responds to user actions. Defaults to `true`. Deprecated. Use `disabled` instead. */
  enabled?: boolean;
  /** Whether the chip is in an inactive state and ignores user actions. Defaults to `false`. */
  disabled?: boolean;
  /** The alternative text that's used for accessibility. Set descriptive text that lets users know what the chip does. For example, if a chip opens a hyperlink, write: "Opens a new browser tab and navigates to the Google Chat developer documentation at https://developers.google.com/workspace/chat". */
  altText?: string;
  /** The icon image. If both `icon` and `text` are set, then the icon appears before the text. */
  icon?: GoogleAppsCardV1Icon;
  /** Optional. The action to perform when a user clicks the chip, such as opening a hyperlink or running a custom function. */
  onClick?: GoogleAppsCardV1OnClick;
}

export const GoogleAppsCardV1Chip: Schema.Codec<GoogleAppsCardV1Chip> =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      label: Schema.optional(Schema.String),
      enabled: Schema.optional(Schema.Boolean),
      disabled: Schema.optional(Schema.Boolean),
      altText: Schema.optional(Schema.String),
      icon: Schema.optional(GoogleAppsCardV1Icon),
      onClick: Schema.optional(GoogleAppsCardV1OnClick),
    }),
  ).annotate({
    identifier: "GoogleAppsCardV1Chip",
  }) as any as Schema.Codec<GoogleAppsCardV1Chip>;

export interface Dialog {
  /** Input only. Body of the dialog, which is rendered in a modal. Google Chat apps don't support the following card entities: `DateTimePicker`, `OnChangeAction`. */
  body?: GoogleAppsCardV1Card;
}

export const Dialog: Schema.Codec<Dialog> =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(GoogleAppsCardV1Card),
  }).annotate({ identifier: "Dialog" });

export interface ActionStatus {
  /** The status code. */
  statusCode?:
    | "OK"
    | "CANCELLED"
    | "UNKNOWN"
    | "INVALID_ARGUMENT"
    | "DEADLINE_EXCEEDED"
    | "NOT_FOUND"
    | "ALREADY_EXISTS"
    | "PERMISSION_DENIED"
    | "UNAUTHENTICATED"
    | "RESOURCE_EXHAUSTED"
    | "FAILED_PRECONDITION"
    | "ABORTED"
    | "OUT_OF_RANGE"
    | "UNIMPLEMENTED"
    | "INTERNAL"
    | "UNAVAILABLE"
    | "DATA_LOSS"
    | (string & {});
  /** The message to send users about the status of their request. If unset, a generic message based on the `status_code` is sent. */
  userFacingMessage?: string;
}

export const ActionStatus: Schema.Codec<ActionStatus> =
  /*@__PURE__*/ Schema.Struct({
    statusCode: Schema.optional(Schema.String),
    userFacingMessage: Schema.optional(Schema.String),
  }).annotate({ identifier: "ActionStatus" });

export interface DialogAction {
  /** Input only. [Dialog](https://developers.google.com/workspace/chat/dialogs) for the request. */
  dialog?: Dialog;
  /** Input only. Status for a request to either invoke or submit a [dialog](https://developers.google.com/workspace/chat/dialogs). Displays a status and message to users, if necessary. For example, in case of an error or success. */
  actionStatus?: ActionStatus;
}

export const DialogAction: Schema.Codec<DialogAction> =
  /*@__PURE__*/ Schema.Struct({
    dialog: Schema.optional(Dialog),
    actionStatus: Schema.optional(ActionStatus),
  }).annotate({ identifier: "DialogAction" });

export interface SelectionItems {
  /** An array of the SelectionItem objects. */
  items?: ReadonlyArray<GoogleAppsCardV1SelectionItem>;
}

export const SelectionItems: Schema.Codec<SelectionItems> =
  /*@__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(GoogleAppsCardV1SelectionItem)),
  }).annotate({ identifier: "SelectionItems" });

export interface UpdatedWidget {
  /** List of widget autocomplete results */
  suggestions?: SelectionItems;
  /** The ID of the updated widget. The ID must match the one for the widget that triggered the update request. */
  widget?: string;
}

export const UpdatedWidget: Schema.Codec<UpdatedWidget> =
  /*@__PURE__*/ Schema.Struct({
    suggestions: Schema.optional(SelectionItems),
    widget: Schema.optional(Schema.String),
  }).annotate({ identifier: "UpdatedWidget" });

export interface ActionResponse {
  /** Input only. A response to an interaction event related to a [dialog](https://developers.google.com/workspace/chat/dialogs). Must be accompanied by `ResponseType.Dialog`. */
  dialogAction?: DialogAction;
  /** Input only. The type of Chat app response. */
  type?:
    | "TYPE_UNSPECIFIED"
    | "NEW_MESSAGE"
    | "UPDATE_MESSAGE"
    | "UPDATE_USER_MESSAGE_CARDS"
    | "REQUEST_CONFIG"
    | "DIALOG"
    | "UPDATE_WIDGET"
    | (string & {});
  /** Input only. URL for users to authenticate or configure. (Only for `REQUEST_CONFIG` response types.) */
  url?: string;
  /** Input only. The response of the updated widget. */
  updatedWidget?: UpdatedWidget;
}

export const ActionResponse: Schema.Codec<ActionResponse> =
  /*@__PURE__*/ Schema.Struct({
    dialogAction: Schema.optional(DialogAction),
    type: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    updatedWidget: Schema.optional(UpdatedWidget),
  }).annotate({ identifier: "ActionResponse" });

export interface Thread {
  /** Identifier. Resource name of the thread. Example: `spaces/{space}/threads/{thread}` */
  name?: string;
  /** Optional. Input for creating or updating a thread. Otherwise, output only. ID for the thread. Supports up to 4000 characters. This ID is unique to the Chat app that sets it. For example, if multiple Chat apps create a message using the same thread key, the messages are posted in different threads. To reply in a thread created by a person or another Chat app, specify the thread `name` field instead. */
  threadKey?: string;
}

export const Thread: Schema.Codec<Thread> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    threadKey: Schema.optional(Schema.String),
  }).annotate({ identifier: "Thread" });

export interface UserMentionMetadata {
  /** The type of user mention. */
  type?: "TYPE_UNSPECIFIED" | "ADD" | "MENTION" | (string & {});
  /** The user mentioned. */
  user?: User;
}

export const UserMentionMetadata: Schema.Codec<UserMentionMetadata> =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.optional(Schema.String),
    user: Schema.optional(User),
  }).annotate({ identifier: "UserMentionMetadata" });

export interface CustomEmojiMetadata {
  /** The custom emoji. */
  customEmoji?: CustomEmoji;
}

export const CustomEmojiMetadata: Schema.Codec<CustomEmojiMetadata> =
  /*@__PURE__*/ Schema.Struct({
    customEmoji: Schema.optional(CustomEmoji),
  }).annotate({ identifier: "CustomEmojiMetadata" });

export interface SlashCommandMetadata {
  /** The name of the invoked slash command. */
  commandName?: string;
  /** Indicates whether the slash command is for a dialog. */
  triggersDialog?: boolean;
  /** The type of slash command. */
  type?: "TYPE_UNSPECIFIED" | "ADD" | "INVOKE" | (string & {});
  /** The command ID of the invoked slash command. */
  commandId?: string;
  /** The Chat app whose command was invoked. */
  bot?: User;
}

export const SlashCommandMetadata: Schema.Codec<SlashCommandMetadata> =
  /*@__PURE__*/ Schema.Struct({
    commandName: Schema.optional(Schema.String),
    triggersDialog: Schema.optional(Schema.Boolean),
    type: Schema.optional(Schema.String),
    commandId: Schema.optional(Schema.String),
    bot: Schema.optional(User),
  }).annotate({ identifier: "SlashCommandMetadata" });

export interface DriveDataRef {
  /** The ID for the drive file. Use with the Drive API. */
  driveFileId?: string;
}

export const DriveDataRef: Schema.Codec<DriveDataRef> =
  /*@__PURE__*/ Schema.Struct({
    driveFileId: Schema.optional(Schema.String),
  }).annotate({ identifier: "DriveDataRef" });

export interface DriveLinkData {
  /** A [DriveDataRef](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments#drivedataref) which references a Google Drive file. */
  driveDataRef?: DriveDataRef;
  /** The mime type of the linked Google Drive resource. */
  mimeType?: string;
}

export const DriveLinkData: Schema.Codec<DriveLinkData> =
  /*@__PURE__*/ Schema.Struct({
    driveDataRef: Schema.optional(DriveDataRef),
    mimeType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DriveLinkData" });

export interface ChatSpaceLinkData {
  /** The space of the linked Chat space resource. Format: `spaces/{space}` */
  space?: string;
  /** The thread of the linked Chat space resource. Format: `spaces/{space}/threads/{thread}` */
  thread?: string;
  /** The message of the linked Chat space resource. Format: `spaces/{space}/messages/{message}` */
  message?: string;
}

export const ChatSpaceLinkData: Schema.Codec<ChatSpaceLinkData> =
  /*@__PURE__*/ Schema.Struct({
    space: Schema.optional(Schema.String),
    thread: Schema.optional(Schema.String),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChatSpaceLinkData" });

export interface CalendarEventLinkData {
  /** The [Calendar identifier](https://developers.google.com/workspace/calendar/api/v3/reference/calendars) of the linked Calendar. */
  calendarId?: string;
  /** The [Event identifier](https://developers.google.com/workspace/calendar/api/v3/reference/events) of the linked Calendar event. */
  eventId?: string;
}

export const CalendarEventLinkData: Schema.Codec<CalendarEventLinkData> =
  /*@__PURE__*/ Schema.Struct({
    calendarId: Schema.optional(Schema.String),
    eventId: Schema.optional(Schema.String),
  }).annotate({ identifier: "CalendarEventLinkData" });

export interface MeetSpaceLinkData {
  /** Meeting code of the linked Meet space. */
  meetingCode?: string;
  /** Optional. Output only. If the Meet is a Huddle, indicates the status of the huddle. Otherwise, this is unset. */
  huddleStatus?:
    | "HUDDLE_STATUS_UNSPECIFIED"
    | "STARTED"
    | "ENDED"
    | "MISSED"
    | (string & {});
  /** Indicates the type of the Meet space. */
  type?: "TYPE_UNSPECIFIED" | "MEETING" | "HUDDLE" | (string & {});
}

export const MeetSpaceLinkData: Schema.Codec<MeetSpaceLinkData> =
  /*@__PURE__*/ Schema.Struct({
    meetingCode: Schema.optional(Schema.String),
    huddleStatus: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({ identifier: "MeetSpaceLinkData" });

export interface RichLinkMetadata {
  /** The URI of this link. */
  uri?: string;
  /** Data for a drive link. */
  driveLinkData?: DriveLinkData;
  /** Data for a chat space link. */
  chatSpaceLinkData?: ChatSpaceLinkData;
  /** Data for a Calendar event link. */
  calendarEventLinkData?: CalendarEventLinkData;
  /** Data for a Meet space link. */
  meetSpaceLinkData?: MeetSpaceLinkData;
  /** The rich link type. */
  richLinkType?:
    | "RICH_LINK_TYPE_UNSPECIFIED"
    | "DRIVE_FILE"
    | "CHAT_SPACE"
    | "GMAIL_MESSAGE"
    | "MEET_SPACE"
    | "CALENDAR_EVENT"
    | (string & {});
}

export const RichLinkMetadata: Schema.Codec<RichLinkMetadata> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
    driveLinkData: Schema.optional(DriveLinkData),
    chatSpaceLinkData: Schema.optional(ChatSpaceLinkData),
    calendarEventLinkData: Schema.optional(CalendarEventLinkData),
    meetSpaceLinkData: Schema.optional(MeetSpaceLinkData),
    richLinkType: Schema.optional(Schema.String),
  }).annotate({ identifier: "RichLinkMetadata" });

export interface Annotation {
  /** The metadata of user mention. */
  userMention?: UserMentionMetadata;
  /** The metadata for a custom emoji. */
  customEmojiMetadata?: CustomEmojiMetadata;
  /** Start index (0-based, inclusive) in the plain-text message body this annotation corresponds to. */
  startIndex?: number;
  /** The metadata for a slash command. */
  slashCommand?: SlashCommandMetadata;
  /** The type of this annotation. */
  type?:
    | "ANNOTATION_TYPE_UNSPECIFIED"
    | "USER_MENTION"
    | "SLASH_COMMAND"
    | "RICH_LINK"
    | "CUSTOM_EMOJI"
    | (string & {});
  /** Length of the substring in the plain-text message body this annotation corresponds to. If not present, indicates a length of 0. */
  length?: number;
  /** The metadata for a rich link. */
  richLinkMetadata?: RichLinkMetadata;
}

export const Annotation: Schema.Codec<Annotation> =
  /*@__PURE__*/ Schema.Struct({
    userMention: Schema.optional(UserMentionMetadata),
    customEmojiMetadata: Schema.optional(CustomEmojiMetadata),
    startIndex: Schema.optional(Schema.Number),
    slashCommand: Schema.optional(SlashCommandMetadata),
    type: Schema.optional(Schema.String),
    length: Schema.optional(Schema.Number),
    richLinkMetadata: Schema.optional(RichLinkMetadata),
  }).annotate({ identifier: "Annotation" });

export interface Attachment {
  /** Output only. A reference to the Google Drive attachment. This field is used with the Google Drive API. */
  driveDataRef?: DriveDataRef;
  /** Output only. The content type (MIME type) of the file. */
  contentType?: string;
  /** Output only. The download URL which should be used to allow a human user to download the attachment. Chat apps shouldn't use this URL to download attachment content. */
  downloadUri?: string;
  /** Output only. The source of the attachment. */
  source?:
    | "SOURCE_UNSPECIFIED"
    | "DRIVE_FILE"
    | "UPLOADED_CONTENT"
    | (string & {});
  /** Optional. A reference to the attachment data. This field is used to create or update messages with attachments, or with the media API to download the attachment data. */
  attachmentDataRef?: AttachmentDataRef;
  /** Output only. The thumbnail URL which should be used to preview the attachment to a human user. Chat apps shouldn't use this URL to download attachment content. */
  thumbnailUri?: string;
  /** Identifier. Resource name of the attachment. Format: `spaces/{space}/messages/{message}/attachments/{attachment}`. */
  name?: string;
  /** Output only. The original file name for the content, not the full path. */
  contentName?: string;
}

export const Attachment: Schema.Codec<Attachment> =
  /*@__PURE__*/ Schema.Struct({
    driveDataRef: Schema.optional(DriveDataRef),
    contentType: Schema.optional(Schema.String),
    downloadUri: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    attachmentDataRef: Schema.optional(AttachmentDataRef),
    thumbnailUri: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    contentName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Attachment" });

export interface QuotedMessageSnapshot {
  /** Output only. The quoted message's author name. Populated for both REPLY & FORWARD quote types. */
  sender?: string;
  /** Output only. Contains the quoted message `text` with markups added to support rich formatting like hyperlinks,custom emojis, markup, etc. Populated only for FORWARD quote type. */
  formattedText?: string;
  /** Output only. Annotations parsed from the text body of the quoted message. Populated only for FORWARD quote type. */
  annotations?: ReadonlyArray<Annotation>;
  /** Output only. Attachments that were part of the quoted message. These are copies of the quoted message's attachment metadata. Populated only for FORWARD quote type. */
  attachments?: ReadonlyArray<Attachment>;
  /** Output only. Snapshot of the quoted message's text content. */
  text?: string;
}

export const QuotedMessageSnapshot: Schema.Codec<QuotedMessageSnapshot> =
  /*@__PURE__*/ Schema.Struct({
    sender: Schema.optional(Schema.String),
    formattedText: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Array(Annotation)),
    attachments: Schema.optional(Schema.Array(Attachment)),
    text: Schema.optional(Schema.String),
  }).annotate({ identifier: "QuotedMessageSnapshot" });

export interface ForwardedMetadata {
  /** Output only. The resource name of the source space. Format: spaces/{space} */
  space?: string;
  /** Output only. The display name of the source space or DM at the time of forwarding. For `SPACE`, this is the space name. For `DIRECT_MESSAGE`, this is the other participant's name (e.g., "User A"). For `GROUP_CHAT`, this is a generated name based on members' first names, limited to 5 including the creator (e.g., "User A, User B"). */
  spaceDisplayName?: string;
}

export const ForwardedMetadata: Schema.Codec<ForwardedMetadata> =
  /*@__PURE__*/ Schema.Struct({
    space: Schema.optional(Schema.String),
    spaceDisplayName: Schema.optional(Schema.String),
  }).annotate({ identifier: "ForwardedMetadata" });

export interface QuotedMessageMetadata {
  /** Required. Resource name of the message that is quoted. Format: `spaces/{space}/messages/{message}` */
  name?: string;
  /** Output only. A snapshot of the quoted message's content. */
  quotedMessageSnapshot?: QuotedMessageSnapshot;
  /** Output only. Metadata about the source space of the quoted message. Populated only for FORWARD quote type. */
  forwardedMetadata?: ForwardedMetadata;
  /** Required. The timestamp when the quoted message was created or when the quoted message was last updated. If the message was edited, use this field, `last_update_time`. If the message was never edited, use `create_time`. If `last_update_time` doesn't match the latest version of the quoted message, the request fails. */
  lastUpdateTime?: string;
  /** Optional. Specifies the quote type. If not set, defaults to REPLY in the message read/write path for backward compatibility. */
  quoteType?: "QUOTE_TYPE_UNSPECIFIED" | "REPLY" | "FORWARD" | (string & {});
}

export const QuotedMessageMetadata: Schema.Codec<QuotedMessageMetadata> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    quotedMessageSnapshot: Schema.optional(QuotedMessageSnapshot),
    forwardedMetadata: Schema.optional(ForwardedMetadata),
    lastUpdateTime: Schema.optional(Schema.String),
    quoteType: Schema.optional(Schema.String),
  }).annotate({ identifier: "QuotedMessageMetadata" });

export interface AttachedGif {
  /** Output only. The URL that hosts the GIF image. */
  uri?: string;
}

export const AttachedGif: Schema.Codec<AttachedGif> =
  /*@__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).annotate({ identifier: "AttachedGif" });

export interface DeletionMetadata {
  /** Indicates who deleted the message. */
  deletionType?:
    | "DELETION_TYPE_UNSPECIFIED"
    | "CREATOR"
    | "SPACE_OWNER"
    | "ADMIN"
    | "APP_MESSAGE_EXPIRY"
    | "CREATOR_VIA_APP"
    | "SPACE_OWNER_VIA_APP"
    | "SPACE_MEMBER"
    | (string & {});
}

export const DeletionMetadata: Schema.Codec<DeletionMetadata> =
  /*@__PURE__*/ Schema.Struct({
    deletionType: Schema.optional(Schema.String),
  }).annotate({ identifier: "DeletionMetadata" });

export interface CardHeader {
  /** The subtitle of the card header. */
  subtitle?: string;
  /** The image's type (for example, square border or circular border). */
  imageStyle?: "IMAGE_STYLE_UNSPECIFIED" | "IMAGE" | "AVATAR" | (string & {});
  /** The title must be specified. The header has a fixed height: if both a title and subtitle is specified, each takes up one line. If only the title is specified, it takes up both lines. */
  title?: string;
  /** The URL of the image in the card header. */
  imageUrl?: string;
}

export const CardHeader: Schema.Codec<CardHeader> =
  /*@__PURE__*/ Schema.Struct({
    subtitle: Schema.optional(Schema.String),
    imageStyle: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    imageUrl: Schema.optional(Schema.String),
  }).annotate({ identifier: "CardHeader" });

export interface CardAction {
  /** The label used to be displayed in the action menu item. */
  actionLabel?: string;
  /** The onclick action for this action item. */
  onClick?: OnClick;
}

export const CardAction: Schema.Codec<CardAction> =
  /*@__PURE__*/ Schema.Struct({
    actionLabel: Schema.optional(Schema.String),
    onClick: Schema.optional(OnClick),
  }).annotate({ identifier: "CardAction" });

export interface Card {
  /** Sections are separated by a line divider. */
  sections?: ReadonlyArray<Section>;
  /** The header of the card. A header usually contains a title and an image. */
  header?: CardHeader;
  /** The actions of this card. */
  cardActions?: ReadonlyArray<CardAction>;
  /** Name of the card. */
  name?: string;
}

export const Card: Schema.Codec<Card> =
  /*@__PURE__*/ Schema.Struct({
    sections: Schema.optional(Schema.Array(Section)),
    header: Schema.optional(CardHeader),
    cardActions: Schema.optional(Schema.Array(CardAction)),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Card" });

export interface MatchedUrl {
  /** Output only. The URL that was matched. */
  url?: string;
}

export const MatchedUrl: Schema.Codec<MatchedUrl> =
  /*@__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
  }).annotate({ identifier: "MatchedUrl" });

export interface EmojiReactionSummary {
  /** Output only. The total number of reactions using the associated emoji. */
  reactionCount?: number;
  /** Output only. Emoji associated with the reactions. */
  emoji?: Emoji;
}

export const EmojiReactionSummary: Schema.Codec<EmojiReactionSummary> =
  /*@__PURE__*/ Schema.Struct({
    reactionCount: Schema.optional(Schema.Number),
    emoji: Schema.optional(Emoji),
  }).annotate({ identifier: "EmojiReactionSummary" });

export interface SpaceDetails {
  /** Optional. A description of the space. For example, describe the space's discussion topic, functional purpose, or participants. Supports up to 150 characters. */
  description?: string;
  /** Optional. The space's rules, expectations, and etiquette. Supports up to 5,000 characters. */
  guidelines?: string;
}

export const SpaceDetails: Schema.Codec<SpaceDetails> =
  /*@__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
    guidelines: Schema.optional(Schema.String),
  }).annotate({ identifier: "SpaceDetails" });

export interface MembershipCount {
  /** Output only. Count of human users that have directly joined the space, not counting users joined by having membership in a joined group. */
  joinedDirectHumanUserCount?: number;
  /** Output only. Count of all groups that have directly joined the space. */
  joinedGroupCount?: number;
}

export const MembershipCount: Schema.Codec<MembershipCount> =
  /*@__PURE__*/ Schema.Struct({
    joinedDirectHumanUserCount: Schema.optional(Schema.Number),
    joinedGroupCount: Schema.optional(Schema.Number),
  }).annotate({ identifier: "MembershipCount" });

export interface AccessSettings {
  /** Output only. Indicates the access state of the space. */
  accessState?:
    | "ACCESS_STATE_UNSPECIFIED"
    | "PRIVATE"
    | "DISCOVERABLE"
    | (string & {});
  /** Optional. The resource name of the [target audience](https://support.google.com/a/answer/9934697) who can discover the space, join the space, and preview the messages in the space. If unset, only users or Google Groups who have been individually invited or added to the space can access it. For details, see [Make a space discoverable to a target audience](https://developers.google.com/workspace/chat/space-target-audience). Format: `audiences/{audience}` To use the default target audience for the Google Workspace organization, set to `audiences/default`. Reading the target audience supports: - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with the `chat.app.spaces` scope. This field is not populated when using the `chat.bot` scope with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). Setting the target audience requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). */
  audience?: string;
}

export const AccessSettings: Schema.Codec<AccessSettings> =
  /*@__PURE__*/ Schema.Struct({
    accessState: Schema.optional(Schema.String),
    audience: Schema.optional(Schema.String),
  }).annotate({ identifier: "AccessSettings" });

export interface Space {
  /** Output only. For direct message (DM) spaces with a Chat app, whether the space was created by a Google Workspace administrator. Administrators can install and set up a direct message with a Chat app on behalf of users in their organization. To support admin install, your Chat app must feature direct messaging. */
  adminInstalled?: boolean;
  /** Identifier. Resource name of the space. Format: `spaces/{space}` Where `{space}` represents the system-assigned ID for the space. You can obtain the space ID by calling the [`spaces.list()`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) method or from the space URL. For example, if the space URL is `https://mail.google.com/mail/u/0/#chat/space/AAAAAAAAA`, the space ID is `AAAAAAAAA`. */
  name?: string;
  /** Output only. The URI for a user to access the space. */
  spaceUri?: string;
  /** Optional. The space's display name. Required when [creating a space](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/create) with a `spaceType` of `SPACE`. If you receive the error message `ALREADY_EXISTS` when creating a space or updating the `displayName`, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. For direct messages, this field might be empty. Supports up to 128 characters. */
  displayName?: string;
  /** Optional. Whether this space is created in `Import Mode` as part of a data migration into Google Workspace. While spaces are being imported, they aren't visible to users until the import is complete. Creating a space in `Import Mode`requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). */
  importMode?: boolean;
  /** Optional. Immutable. For spaces created in Chat, the time the space was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the space was created in the source in order to preserve the original creation time. Only populated in the output when `spaceType` is `GROUP_CHAT` or `SPACE`. */
  createTime?: string;
  /** Output only. Timestamp of the last message in the space. */
  lastActiveTime?: string;
  /** Optional. Input only. Predefined space permission settings, input only when creating a space. If the field is not set, a collaboration space is created. After you create the space, settings are populated in the `PermissionSettings` field. Setting predefined permission settings supports: - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with the `chat.app.spaces` or `chat.app.spaces.create` scopes. - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) */
  predefinedPermissionSettings?:
    | "PREDEFINED_PERMISSION_SETTINGS_UNSPECIFIED"
    | "COLLABORATION_SPACE"
    | "ANNOUNCEMENT_SPACE"
    | (string & {});
  /** Output only. The time when the space will be automatically deleted by the system if it remains in import mode. Each space created in import mode must exit this mode before this expire time using `spaces.completeImport`. This field is only populated for spaces that were created with import mode. */
  importModeExpireTime?: string;
  /** Optional. Details about the space including description and rules. */
  spaceDetails?: SpaceDetails;
  /** Optional. Whether the space is a DM between a Chat app and a single human. */
  singleUserBotDm?: boolean;
  /** Output only. The count of joined memberships grouped by member type. Populated when the `space_type` is `SPACE`, `DIRECT_MESSAGE` or `GROUP_CHAT`. */
  membershipCount?: MembershipCount;
  /** Optional. Immutable. Whether this space permits any Google Chat user as a member. Input when creating a space in a Google Workspace organization. Omit this field when creating spaces in the following conditions: * The authenticated user uses a consumer account (unmanaged user account). By default, a space created by a consumer account permits any Google Chat user. For existing spaces, this field is output only. */
  externalUserAllowed?: boolean;
  /** Optional. Immutable. The customer id of the domain of the space. Required only when creating a space with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and `SpaceType` is `SPACE`, otherwise should not be set. In the format `customers/{customer}`, where `customer` is the `id` from the [Admin SDK customer resource](https://developers.google.com/admin-sdk/directory/reference/rest/v1/customers). Private apps can also use the `customers/my_customer` alias to create the space in the same Google Workspace organization as the app. This field isn't populated for direct messages (DMs) or when the space is created by non-Google Workspace users. */
  customer?: string;
  /** Optional. The type of space. Required when creating a space or updating the space type of a space. Output only for other usage. */
  spaceType?:
    | "SPACE_TYPE_UNSPECIFIED"
    | "SPACE"
    | "GROUP_CHAT"
    | "DIRECT_MESSAGE"
    | (string & {});
  /** Optional. The message history state for messages and threads in this space. */
  spaceHistoryState?:
    | "HISTORY_STATE_UNSPECIFIED"
    | "HISTORY_OFF"
    | "HISTORY_ON"
    | (string & {});
  /** Optional. Specifies the [access setting](https://support.google.com/chat/answer/11971020) of the space. Only populated when the `space_type` is `SPACE`. */
  accessSettings?: AccessSettings;
  /** Output only. Deprecated: Use `space_type` instead. The type of a space. */
  type?: "TYPE_UNSPECIFIED" | "ROOM" | "DM" | (string & {});
  /** Output only. The threading state in the Chat space. */
  spaceThreadingState?:
    | "SPACE_THREADING_STATE_UNSPECIFIED"
    | "THREADED_MESSAGES"
    | "GROUPED_MESSAGES"
    | "UNTHREADED_MESSAGES"
    | (string & {});
  /** Output only. Deprecated: Use `spaceThreadingState` instead. Whether messages are threaded in this space. */
  threaded?: boolean;
  /** Optional. Space permission settings for existing spaces. Input for updating exact space permission settings, where existing permission settings are replaced. Output lists current permission settings. Reading and updating permission settings supports: - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with the `chat.app.spaces` scope. Only populated and settable when the Chat app created the space. - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) */
  permissionSettings?: PermissionSettings;
}

export const Space: Schema.Codec<Space> =
  /*@__PURE__*/ Schema.Struct({
    adminInstalled: Schema.optional(Schema.Boolean),
    name: Schema.optional(Schema.String),
    spaceUri: Schema.optional(Schema.String),
    displayName: Schema.optional(Schema.String),
    importMode: Schema.optional(Schema.Boolean),
    createTime: Schema.optional(Schema.String),
    lastActiveTime: Schema.optional(Schema.String),
    predefinedPermissionSettings: Schema.optional(Schema.String),
    importModeExpireTime: Schema.optional(Schema.String),
    spaceDetails: Schema.optional(SpaceDetails),
    singleUserBotDm: Schema.optional(Schema.Boolean),
    membershipCount: Schema.optional(MembershipCount),
    externalUserAllowed: Schema.optional(Schema.Boolean),
    customer: Schema.optional(Schema.String),
    spaceType: Schema.optional(Schema.String),
    spaceHistoryState: Schema.optional(Schema.String),
    accessSettings: Schema.optional(AccessSettings),
    type: Schema.optional(Schema.String),
    spaceThreadingState: Schema.optional(Schema.String),
    threaded: Schema.optional(Schema.Boolean),
    permissionSettings: Schema.optional(PermissionSettings),
  }).annotate({ identifier: "Space" });

export interface CardWithId {
  /** Required if the message contains multiple cards. A unique identifier for a card in a message. */
  cardId?: string;
  /** A card. Maximum size is 32 KB. */
  card?: GoogleAppsCardV1Card;
}

export const CardWithId: Schema.Codec<CardWithId> =
  /*@__PURE__*/ Schema.Struct({
    cardId: Schema.optional(Schema.String),
    card: Schema.optional(GoogleAppsCardV1Card),
  }).annotate({ identifier: "CardWithId" });

export interface AccessoryWidget {
  /** A list of buttons. */
  buttonList?: GoogleAppsCardV1ButtonList;
}

export const AccessoryWidget: Schema.Codec<AccessoryWidget> =
  /*@__PURE__*/ Schema.Struct({
    buttonList: Schema.optional(GoogleAppsCardV1ButtonList),
  }).annotate({ identifier: "AccessoryWidget" });

export interface Message {
  /** Output only. The time at which the message was deleted in Google Chat. If the message is never deleted, this field is empty. */
  deleteTime?: string;
  /** Input only. Parameters that a Chat app can use to configure how its response is posted. */
  actionResponse?: ActionResponse;
  /** The thread the message belongs to. For example usage, see [Start or reply to a message thread](https://developers.google.com/workspace/chat/create-messages#create-message-thread). */
  thread?: Thread;
  /** Identifier. Resource name of the message. Format: `spaces/{space}/messages/{message}` Where `{space}` is the ID of the space where the message is posted and `{message}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/workspace/chat/create-messages#name_a_created_message). */
  name?: string;
  /** Output only. Whether this is a silent message. Silent messages are messages where Chat suppresses push notifications for recipients. */
  silent?: boolean;
  /** Optional. Information about a message that another message quotes. When you create a message, you can quote messages within the same thread, or quote a root message to create a new root message. However, you can't quote a message reply from a different thread. When you update a message, you can't add or replace the `quotedMessageMetadata` field, but you can remove it. For example usage, see [Quote another message](https://developers.google.com/workspace/chat/create-messages#quote-a-message). */
  quotedMessageMetadata?: QuotedMessageMetadata;
  /** Output only. Slash command information, if applicable. */
  slashCommand?: SlashCommand;
  /** Optional. User-uploaded attachment. */
  attachment?: ReadonlyArray<Attachment>;
  /** Output only. When `true`, the message is a response in a reply thread. When `false`, the message is visible in the space's top-level conversation as either the first message of a thread or a message with no threaded replies. If the space doesn't support reply in threads, this field is always `false`. */
  threadReply?: boolean;
  /** Output only. The time at which the message was last edited by a user. If the message has never been edited, this field is empty. */
  lastUpdateTime?: string;
  /** Output only. Annotations can be associated with the plain-text body of the message or with chips that link to Google Workspace resources like Google Docs or Sheets with `start_index` and `length` of 0. */
  annotations?: ReadonlyArray<Annotation>;
  /** Output only. Plain-text body of the message with all Chat app mentions stripped out. */
  argumentText?: string;
  /** Optional. A custom ID for the message. You can use field to identify a message, or to get, delete, or update a message. To set a custom ID, specify the [`messageId`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages/create#body.QUERY_PARAMETERS.message_id) field when you create the message. For details, see [Name a message](https://developers.google.com/workspace/chat/create-messages#name_a_created_message). */
  clientAssignedMessageId?: string;
  /** Optional. Immutable. Input for creating a message, otherwise output only. The user that can view the message. When set, the message is private and only visible to the specified user and the Chat app. To include this field in your request, you must call the Chat API using [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and omit the following: * [Attachments](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.attachments) For details, see [Send a message privately](https://developers.google.com/workspace/chat/create-messages#private). */
  privateMessageViewer?: User;
  /** Output only. GIF images that are attached to the message. */
  attachedGifs?: ReadonlyArray<AttachedGif>;
  /** Output only. Information about a deleted message. A message is deleted when `delete_time` is set. */
  deletionMetadata?: DeletionMetadata;
  /** Deprecated: Use `cards_v2` instead. Rich, formatted, and interactive cards that you can use to display UI elements such as: formatted texts, buttons, and clickable images. Cards are normally displayed below the plain-text body of the message. `cards` and `cards_v2` can have a maximum size of 32 KB. */
  cards?: ReadonlyArray<Card>;
  /** Optional. Immutable. For spaces created in Chat, the time at which the message was created. This field is output only, except when used in import mode spaces. For import mode spaces, set this field to the historical timestamp at which the message was created in the source in order to preserve the original creation time. */
  createTime?: string;
  /** Output only. The user who created the message. If your Chat app [authenticates as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), the output populates the [user](https://developers.google.com/workspace/chat/api/reference/rest/v1/User) `name` and `type`. */
  sender?: User;
  /** Output only. Contains the message `text` with markups added to communicate formatting. This field might not capture all formatting visible in the UI, but includes the following: * [Markup syntax](https://developers.google.com/workspace/chat/format-messages) for bold, italic, strikethrough, monospace, monospace block, bulleted list, and block quote. * [User mentions](https://developers.google.com/workspace/chat/format-messages#messages-@mention) using the format ``. * Custom hyperlinks using the format `<{url}|{rendered_text}>` where the first string is the URL and the second is the rendered text—for example, ``. * Custom emoji using the format `:{emoji_name}:`—for example, `:smile:`. This doesn't apply to Unicode emoji, such as `U+1F600` for a grinning face emoji. * Bullet list items using asterisks (`*`)—for example, `* item`. For more information, see [View text formatting sent in a message](https://developers.google.com/workspace/chat/format-messages#view_text_formatting_sent_in_a_message) */
  formattedText?: string;
  /** Output only. A URL in the Chat message `text` field that matches a link preview pattern. For more information, see [Preview links](https://developers.google.com/workspace/chat/preview-links). */
  matchedUrl?: MatchedUrl;
  /** Output only. The list of emoji reaction summaries on the message. */
  emojiReactionSummaries?: ReadonlyArray<EmojiReactionSummary>;
  /** Output only. If your Chat app [authenticates as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), the output only populates the [space](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces) `name`. */
  space?: Space;
  /** Optional. Plain-text body of the message. The first link to an image, video, or web page generates a [preview chip](https://developers.google.com/workspace/chat/preview-links). You can also [@mention a Google Chat user](https://developers.google.com/workspace/chat/format-messages#messages-@mention), or everyone in the space. To learn about creating text messages, see [Send a message](https://developers.google.com/workspace/chat/create-messages). */
  text?: string;
  /** Optional. An array of [cards](https://developers.google.com/workspace/chat/api/reference/rest/v1/cards). Chat apps can create cards with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). As part of the [Developer Preview Program](https://developers.google.com/workspace/preview), if your Chat app [authenticates as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), it can create card messages. If your Chat app is not part of Developer Preview Program, it can't create cards with user authentication. To learn how to create a message that contains cards, see [Send a message](https://developers.google.com/workspace/chat/create-messages). [Card builder](https://addons.gsuite.google.com/uikit/builder) */
  cardsV2?: ReadonlyArray<CardWithId>;
  /** Optional. One or more interactive widgets that appear at the bottom of a message. You can add accessory widgets to messages that contain text, cards, or both text and cards. Not supported for messages that contain dialogs. For details, see [Add interactive widgets at the bottom of a message](https://developers.google.com/workspace/chat/create-messages#add-accessory-widgets). Creating a message with accessory widgets requires [app authentication] (https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). */
  accessoryWidgets?: ReadonlyArray<AccessoryWidget>;
  /** Optional. A plain-text description of the message's cards, used when the actual cards can't be displayed—for example, mobile notifications. */
  fallbackText?: string;
}

export const Message: Schema.Codec<Message> =
  /*@__PURE__*/ Schema.Struct({
    deleteTime: Schema.optional(Schema.String),
    actionResponse: Schema.optional(ActionResponse),
    thread: Schema.optional(Thread),
    name: Schema.optional(Schema.String),
    silent: Schema.optional(Schema.Boolean),
    quotedMessageMetadata: Schema.optional(QuotedMessageMetadata),
    slashCommand: Schema.optional(SlashCommand),
    attachment: Schema.optional(Schema.Array(Attachment)),
    threadReply: Schema.optional(Schema.Boolean),
    lastUpdateTime: Schema.optional(Schema.String),
    annotations: Schema.optional(Schema.Array(Annotation)),
    argumentText: Schema.optional(Schema.String),
    clientAssignedMessageId: Schema.optional(Schema.String),
    privateMessageViewer: Schema.optional(User),
    attachedGifs: Schema.optional(Schema.Array(AttachedGif)),
    deletionMetadata: Schema.optional(DeletionMetadata),
    cards: Schema.optional(Schema.Array(Card)),
    createTime: Schema.optional(Schema.String),
    sender: Schema.optional(User),
    formattedText: Schema.optional(Schema.String),
    matchedUrl: Schema.optional(MatchedUrl),
    emojiReactionSummaries: Schema.optional(Schema.Array(EmojiReactionSummary)),
    space: Schema.optional(Space),
    text: Schema.optional(Schema.String),
    cardsV2: Schema.optional(Schema.Array(CardWithId)),
    accessoryWidgets: Schema.optional(Schema.Array(AccessoryWidget)),
    fallbackText: Schema.optional(Schema.String),
  }).annotate({ identifier: "Message" });

export interface MessageCreatedEventData {
  /** The new message. */
  message?: Message;
}

export const MessageCreatedEventData: Schema.Codec<MessageCreatedEventData> =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Message),
  }).annotate({ identifier: "MessageCreatedEventData" });

export interface MessageBatchCreatedEventData {
  /** A list of new messages. */
  messages?: ReadonlyArray<MessageCreatedEventData>;
}

export const MessageBatchCreatedEventData: Schema.Codec<MessageBatchCreatedEventData> =
  /*@__PURE__*/ Schema.Struct({
    messages: Schema.optional(Schema.Array(MessageCreatedEventData)),
  }).annotate({ identifier: "MessageBatchCreatedEventData" });

export interface ReactionDeletedEventData {
  /** The deleted reaction. */
  reaction?: Reaction;
}

export const ReactionDeletedEventData: Schema.Codec<ReactionDeletedEventData> =
  /*@__PURE__*/ Schema.Struct({
    reaction: Schema.optional(Reaction),
  }).annotate({ identifier: "ReactionDeletedEventData" });

export interface DateInput {
  /** Time since epoch time, in milliseconds. */
  msSinceEpoch?: string;
}

export const DateInput: Schema.Codec<DateInput> =
  /*@__PURE__*/ Schema.Struct({
    msSinceEpoch: Schema.optional(Schema.String),
  }).annotate({ identifier: "DateInput" });

export interface ReactionCreatedEventData {
  /** The new reaction. */
  reaction?: Reaction;
}

export const ReactionCreatedEventData: Schema.Codec<ReactionCreatedEventData> =
  /*@__PURE__*/ Schema.Struct({
    reaction: Schema.optional(Reaction),
  }).annotate({ identifier: "ReactionCreatedEventData" });

export interface ReactionBatchCreatedEventData {
  /** A list of new reactions. */
  reactions?: ReadonlyArray<ReactionCreatedEventData>;
}

export const ReactionBatchCreatedEventData: Schema.Codec<ReactionBatchCreatedEventData> =
  /*@__PURE__*/ Schema.Struct({
    reactions: Schema.optional(Schema.Array(ReactionCreatedEventData)),
  }).annotate({ identifier: "ReactionBatchCreatedEventData" });

export interface Status {
  /** The status code, which should be an enum value of google.rpc.Code. */
  code?: number;
  /** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
  details?: ReadonlyArray<Record<string, unknown>>;
  /** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
  message?: string;
}

export const Status: Schema.Codec<Status> =
  /*@__PURE__*/ Schema.Struct({
    code: Schema.optional(Schema.Number),
    details: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    message: Schema.optional(Schema.String),
  }).annotate({ identifier: "Status" });

export interface ChatAppLogEntry {
  /** The deployment that caused the error. For Chat apps built in Apps Script, this is the deployment ID defined by Apps Script. */
  deployment?: string;
  /** The error code and message. */
  error?: Status;
  /** The unencrypted `callback_method` name that was running when the error was encountered. */
  deploymentFunction?: string;
}

export const ChatAppLogEntry: Schema.Codec<ChatAppLogEntry> =
  /*@__PURE__*/ Schema.Struct({
    deployment: Schema.optional(Schema.String),
    error: Schema.optional(Status),
    deploymentFunction: Schema.optional(Schema.String),
  }).annotate({ identifier: "ChatAppLogEntry" });

export interface ListSpacesResponse {
  /** List of spaces in the requested (or first) page. Note: The `permissionSettings` field is not returned in the Space object for list requests. */
  spaces?: ReadonlyArray<Space>;
  /** You can send a token as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListSpacesResponse: Schema.Codec<ListSpacesResponse> =
  /*@__PURE__*/ Schema.Struct({
    spaces: Schema.optional(Schema.Array(Space)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSpacesResponse" });

export interface Group {
  /** Resource name for a Google Group. Represents a [group](https://cloud.google.com/identity/docs/reference/rest/v1/groups) in Cloud Identity Groups API. Format: groups/{group} */
  name?: string;
}

export const Group: Schema.Codec<Group> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "Group" });

export interface Membership {
  /** Optional. The Google Chat user or app the membership corresponds to. If your Chat app [authenticates as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), the output populates the [user](https://developers.google.com/workspace/chat/api/reference/rest/v1/User) `name` and `type`. */
  member?: User;
  /** Output only. State of the membership. */
  state?:
    | "MEMBERSHIP_STATE_UNSPECIFIED"
    | "JOINED"
    | "INVITED"
    | "NOT_A_MEMBER"
    | (string & {});
  /** Optional. User's role within a Chat space, which determines their permitted actions in the space. This field can only be used as input in `UpdateMembership`. */
  role?:
    | "MEMBERSHIP_ROLE_UNSPECIFIED"
    | "ROLE_MEMBER"
    | "ROLE_MANAGER"
    | "ROLE_ASSISTANT_MANAGER"
    | (string & {});
  /** Optional. Immutable. The creation time of the membership, such as when a member joined or was invited to join a space. This field is output only, except when used to import historical memberships in import mode spaces. */
  createTime?: string;
  /** Optional. Immutable. The deletion time of the membership, such as when a member left or was removed from a space. This field is output only, except when used to import historical memberships in import mode spaces. */
  deleteTime?: string;
  /** Identifier. Resource name of the membership, assigned by the server. Format: `spaces/{space}/members/{member}` */
  name?: string;
  /** Output only. A user's relationship to the Workspace organization that owns the space. In spaces owned by consumer accounts, the affiliation of all members is `EXTERNAL`. */
  affiliation?:
    | "AFFILIATION_UNSPECIFIED"
    | "INTERNAL"
    | "EXTERNAL"
    | "MANAGED_EXTERNAL"
    | (string & {});
  /** Optional. The Google Group the membership corresponds to. Reading or mutating memberships for Google Groups requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). */
  groupMember?: Group;
}

export const Membership: Schema.Codec<Membership> =
  /*@__PURE__*/ Schema.Struct({
    member: Schema.optional(User),
    state: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
    createTime: Schema.optional(Schema.String),
    deleteTime: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    affiliation: Schema.optional(Schema.String),
    groupMember: Schema.optional(Group),
  }).annotate({ identifier: "Membership" });

export interface MembershipDeletedEventData {
  /** The deleted membership. Only the `name` and `state` fields are populated. */
  membership?: Membership;
}

export const MembershipDeletedEventData: Schema.Codec<MembershipDeletedEventData> =
  /*@__PURE__*/ Schema.Struct({
    membership: Schema.optional(Membership),
  }).annotate({ identifier: "MembershipDeletedEventData" });

export interface MembershipBatchDeletedEventData {
  /** A list of deleted memberships. */
  memberships?: ReadonlyArray<MembershipDeletedEventData>;
}

export const MembershipBatchDeletedEventData: Schema.Codec<MembershipBatchDeletedEventData> =
  /*@__PURE__*/ Schema.Struct({
    memberships: Schema.optional(Schema.Array(MembershipDeletedEventData)),
  }).annotate({ identifier: "MembershipBatchDeletedEventData" });

export interface StringInputs {
  /** An list of strings entered by the user. */
  value?: ReadonlyArray<string>;
}

export const StringInputs: Schema.Codec<StringInputs> =
  /*@__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.Array(Schema.String)),
  }).annotate({ identifier: "StringInputs" });

export interface TimeInput {
  /** The hour on a 24-hour clock. */
  hours?: number;
  /** The number of minutes past the hour. Valid values are 0 to 59. */
  minutes?: number;
}

export const TimeInput: Schema.Codec<TimeInput> =
  /*@__PURE__*/ Schema.Struct({
    hours: Schema.optional(Schema.Number),
    minutes: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TimeInput" });

export interface DateTimeInput {
  /** Whether the `datetime` input includes a calendar date. */
  hasDate?: boolean;
  /** Time since epoch time, in milliseconds. */
  msSinceEpoch?: string;
  /** Whether the `datetime` input includes a timestamp. */
  hasTime?: boolean;
}

export const DateTimeInput: Schema.Codec<DateTimeInput> =
  /*@__PURE__*/ Schema.Struct({
    hasDate: Schema.optional(Schema.Boolean),
    msSinceEpoch: Schema.optional(Schema.String),
    hasTime: Schema.optional(Schema.Boolean),
  }).annotate({ identifier: "DateTimeInput" });

export interface Inputs {
  /** A list of strings that represent the values that the user inputs in a widget. If the widget only accepts one value, such as a [`TextInput`](https://developers.google.com/chat/api/reference/rest/v1/cards#TextInput) widget, the list contains one string object. If the widget accepts multiple values, such as a [`SelectionInput`](https://developers.google.com/chat/api/reference/rest/v1/cards#selectioninput) widget of checkboxes, the list contains a string object for each value that the user inputs or selects. */
  stringInputs?: StringInputs;
  /** Date input values from a [`DateTimePicker`](https://developers.google.com/chat/api/reference/rest/v1/cards#DateTimePicker) widget that only accepts date values. */
  dateInput?: DateInput;
  /** Time input values from a [`DateTimePicker`](https://developers.google.com/chat/api/reference/rest/v1/cards#DateTimePicker) widget that only accepts time values. */
  timeInput?: TimeInput;
  /** Date and time input values from a [`DateTimePicker`](https://developers.google.com/chat/api/reference/rest/v1/cards#DateTimePicker) widget that accepts both a date and time. */
  dateTimeInput?: DateTimeInput;
}

export const Inputs: Schema.Codec<Inputs> =
  /*@__PURE__*/ Schema.Struct({
    stringInputs: Schema.optional(StringInputs),
    dateInput: Schema.optional(DateInput),
    timeInput: Schema.optional(TimeInput),
    dateTimeInput: Schema.optional(DateTimeInput),
  }).annotate({ identifier: "Inputs" });

export interface TimeZone {
  /** The [IANA TZ](https://www.iana.org/time-zones) time zone database code, such as "America/Toronto". */
  id?: string;
  /** The user timezone offset, in milliseconds, from Coordinated Universal Time (UTC). */
  offset?: number;
}

export const TimeZone: Schema.Codec<TimeZone> =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    offset: Schema.optional(Schema.Number),
  }).annotate({ identifier: "TimeZone" });

export interface CommonEventObject {
  /** Indicates the host app the add-on is active in when the event object is generated. Possible values include the following: * `GMAIL` * `CALENDAR` * `DRIVE` * `DOCS` * `SHEETS` * `SLIDES` * `CHAT` */
  hostApp?:
    | "UNSPECIFIED_HOST_APP"
    | "GMAIL"
    | "CALENDAR"
    | "DRIVE"
    | "DEMO"
    | "DOCS"
    | "MEET"
    | "SHEETS"
    | "SLIDES"
    | "DRAWINGS"
    | "CHAT"
    | (string & {});
  /** A map containing the current values of the widgets in the displayed card. The map keys are the string IDs assigned with each widget. The structure of the map value object is dependent on the widget type: **Note**: The following examples are formatted for Apps Script's V8 runtime. If you're using Rhino runtime, you must add `[""]` after the value. For example, instead of `e.commonEventObject.formInputs.employeeName.stringInputs.value[0]`, format the event object as `e.commonEventObject.formInputs.employeeName[""].stringInputs.value[0]`. To learn more about runtimes in Apps Script, see the [V8 Runtime Overview](https://developers.google.com/apps-script/guides/v8-runtime). * Single-valued widgets (for example, a text box): a list of strings (only one element). **Example**: for a text input widget with `employeeName` as its ID, access the text input value with: `e.commonEventObject.formInputs.employeeName.stringInputs.value[0]`. * Multi-valued widgets (for example, checkbox groups): a list of strings. **Example**: for a multi-value widget with `participants` as its ID, access the value array with: `e.commonEventObject.formInputs.participants.stringInputs.value`. * **A date-time picker**: a [`DateTimeInput object`](https://developers.google.com/workspace/add-ons/concepts/event-objects#date-time-input). **Example**: For a picker with an ID of `myDTPicker`, access the [`DateTimeInput`](https://developers.google.com/workspace/add-ons/concepts/event-objects#date-time-input) object using `e.commonEventObject.formInputs.myDTPicker.dateTimeInput`. * **A date-only picker**: a [`DateInput object`](https://developers.google.com/workspace/add-ons/concepts/event-objects#date-input). **Example**: For a picker with an ID of `myDatePicker`, access the [`DateInput`](https://developers.google.com/workspace/add-ons/concepts/event-objects#date-input) object using `e.commonEventObject.formInputs.myDatePicker.dateInput`. * **A time-only picker**: a [`TimeInput object`](https://developers.google.com/workspace/add-ons/concepts/event-objects#time-input). **Example**: For a picker with an ID of `myTimePicker`, access the [`TimeInput`](https://developers.google.com/workspace/add-ons/concepts/event-objects#time-input) object using `e.commonEventObject.formInputs.myTimePicker.timeInput`. */
  formInputs?: Record<string, Inputs>;
  /** The platform enum which indicates the platform where the event originates (`WEB`, `IOS`, or `ANDROID`). Not supported by Chat apps. */
  platform?: "UNKNOWN_PLATFORM" | "WEB" | "IOS" | "ANDROID" | (string & {});
  /** **Disabled by default.** The timezone ID and offset from Coordinated Universal Time (UTC). To turn on this field, you must set `addOns.common.useLocaleFromApp` to `true` in your add-on's manifest. Your add-on's scope list must also include `https://www.googleapis.com/auth/script.locale`. See [Accessing user locale and timezone](https://developers.google.com/workspace/add-ons/how-tos/access-user-locale) for more details. Only supported for the event types [`CARD_CLICKED`](https://developers.google.com/chat/api/reference/rest/v1/EventType#ENUM_VALUES.CARD_CLICKED) and [`SUBMIT_DIALOG`](https://developers.google.com/chat/api/reference/rest/v1/DialogEventType#ENUM_VALUES.SUBMIT_DIALOG). */
  timeZone?: TimeZone;
  /** Name of the function to invoke. This field doesn't populate for Google Workspace Add-ons that extend Google Chat. Instead, to receive function data like identifiers, add-ons that extend Chat should use the `parameters` field. See [Build interactive interfaces for Chat apps](https://developers.google.com/workspace/add-ons/chat/build). */
  invokedFunction?: string;
  /** **Disabled by default.** The user's language and country/region identifier in the format of [ISO 639](https://wikipedia.org/wiki/ISO_639_macrolanguage) language code-[ISO 3166](https://wikipedia.org/wiki/ISO_3166) country/region code. For example, `en-US`. To turn on this field, you must set `addOns.common.useLocaleFromApp` to `true` in your add-on's manifest. Your add-on's scope list must also include `https://www.googleapis.com/auth/script.locale`. See [Accessing user locale and timezone](https://developers.google.com/workspace/add-ons/how-tos/access-user-locale) for more details. */
  userLocale?: string;
  /** Any additional parameters you supply to an action using [`actionParameters`](https://developers.google.com/workspace/add-ons/reference/rpc/google.apps.card.v1#google.apps.card.v1.Action.ActionParameter) or [`Action.setParameters()`](https://developers.google.com/apps-script/reference/card-service/action#setparametersparameters). **Developer Preview:** For [add-ons that extend Google Chat](https://developers.google.com/workspace/add-ons/chat), to suggest items based on what the users type in multiselect menus, use the value of the `"autocomplete_widget_query"` key (`event.commonEventObject.parameters["autocomplete_widget_query"]`). You can use this value to query a database and suggest selectable items to users as they type. For details, see [Collect and process information from Google Chat users](https://developers.google.com/workspace/add-ons/chat/collect-information). */
  parameters?: Record<string, string>;
}

export const CommonEventObject: Schema.Codec<CommonEventObject> =
  /*@__PURE__*/ Schema.Struct({
    hostApp: Schema.optional(Schema.String),
    formInputs: Schema.optional(Schema.Record(Schema.String, Inputs)),
    platform: Schema.optional(Schema.String),
    timeZone: Schema.optional(TimeZone),
    invokedFunction: Schema.optional(Schema.String),
    userLocale: Schema.optional(Schema.String),
    parameters: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "CommonEventObject" });

export interface MarkAsDoNotDisturbRequest {
  /** The duration from the current time until the DND state expires. */
  ttl?: string;
  /** The absolute timestamp when the DND state expires. */
  expireTime?: string;
}

export const MarkAsDoNotDisturbRequest: Schema.Codec<MarkAsDoNotDisturbRequest> =
  /*@__PURE__*/ Schema.Struct({
    ttl: Schema.optional(Schema.String),
    expireTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "MarkAsDoNotDisturbRequest" });

export interface SpaceUpdatedEventData {
  /** The updated space. */
  space?: Space;
}

export const SpaceUpdatedEventData: Schema.Codec<SpaceUpdatedEventData> =
  /*@__PURE__*/ Schema.Struct({
    space: Schema.optional(Space),
  }).annotate({ identifier: "SpaceUpdatedEventData" });

export interface SearchSpacesResponse {
  /** Deprecated: Please use the new `results` field instead. A page of the requested spaces. This field will be populated only when `useAdminAccess` is set to `true` and deprecated in favor of the new `results` field. */
  spaces?: ReadonlyArray<Space>;
  /** A token that can be used to retrieve the next page. If this field is empty, there are no subsequent pages. */
  nextPageToken?: string;
  /** The total number of spaces that match the query, across all pages. If the result is over 10,000 spaces, this value is an estimate. */
  totalSize?: number;
}

export const SearchSpacesResponse: Schema.Codec<SearchSpacesResponse> =
  /*@__PURE__*/ Schema.Struct({
    spaces: Schema.optional(Schema.Array(Space)),
    nextPageToken: Schema.optional(Schema.String),
    totalSize: Schema.optional(Schema.Number),
  }).annotate({ identifier: "SearchSpacesResponse" });

export interface DoNotDisturbMetadata {
  /** Output only. Timestamp until which the user should be marked as DO_NOT_DISTURB. This can be maximum of 1 year in the future. */
  expirationTime?: string;
}

export const DoNotDisturbMetadata: Schema.Codec<DoNotDisturbMetadata> =
  /*@__PURE__*/ Schema.Struct({
    expirationTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "DoNotDisturbMetadata" });

export interface FindGroupChatsResponse {
  /** List of spaces in the requested (or first) page. */
  spaces?: ReadonlyArray<Space>;
  /** A token that you can send as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages. */
  nextPageToken?: string;
}

export const FindGroupChatsResponse: Schema.Codec<FindGroupChatsResponse> =
  /*@__PURE__*/ Schema.Struct({
    spaces: Schema.optional(Schema.Array(Space)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "FindGroupChatsResponse" });

export interface ReactionBatchDeletedEventData {
  /** A list of deleted reactions. */
  reactions?: ReadonlyArray<ReactionDeletedEventData>;
}

export const ReactionBatchDeletedEventData: Schema.Codec<ReactionBatchDeletedEventData> =
  /*@__PURE__*/ Schema.Struct({
    reactions: Schema.optional(Schema.Array(ReactionDeletedEventData)),
  }).annotate({ identifier: "ReactionBatchDeletedEventData" });

export interface MembershipUpdatedEventData {
  /** The updated membership. */
  membership?: Membership;
}

export const MembershipUpdatedEventData: Schema.Codec<MembershipUpdatedEventData> =
  /*@__PURE__*/ Schema.Struct({
    membership: Schema.optional(Membership),
  }).annotate({ identifier: "MembershipUpdatedEventData" });

export interface MessageDeletedEventData {
  /** The deleted message. Only the `name`, `createTime`, and `deletionMetadata` fields are populated. */
  message?: Message;
}

export const MessageDeletedEventData: Schema.Codec<MessageDeletedEventData> =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Message),
  }).annotate({ identifier: "MessageDeletedEventData" });

export interface MessageBatchDeletedEventData {
  /** A list of deleted messages. */
  messages?: ReadonlyArray<MessageDeletedEventData>;
}

export const MessageBatchDeletedEventData: Schema.Codec<MessageBatchDeletedEventData> =
  /*@__PURE__*/ Schema.Struct({
    messages: Schema.optional(Schema.Array(MessageDeletedEventData)),
  }).annotate({ identifier: "MessageBatchDeletedEventData" });

export interface MembershipBatchUpdatedEventData {
  /** A list of updated memberships. */
  memberships?: ReadonlyArray<MembershipUpdatedEventData>;
}

export const MembershipBatchUpdatedEventData: Schema.Codec<MembershipBatchUpdatedEventData> =
  /*@__PURE__*/ Schema.Struct({
    memberships: Schema.optional(Schema.Array(MembershipUpdatedEventData)),
  }).annotate({ identifier: "MembershipBatchUpdatedEventData" });

export interface MessageUpdatedEventData {
  /** The updated message. */
  message?: Message;
}

export const MessageUpdatedEventData: Schema.Codec<MessageUpdatedEventData> =
  /*@__PURE__*/ Schema.Struct({
    message: Schema.optional(Message),
  }).annotate({ identifier: "MessageUpdatedEventData" });

export interface MessageBatchUpdatedEventData {
  /** A list of updated messages. */
  messages?: ReadonlyArray<MessageUpdatedEventData>;
}

export const MessageBatchUpdatedEventData: Schema.Codec<MessageBatchUpdatedEventData> =
  /*@__PURE__*/ Schema.Struct({
    messages: Schema.optional(Schema.Array(MessageUpdatedEventData)),
  }).annotate({ identifier: "MessageBatchUpdatedEventData" });

export interface MembershipCreatedEventData {
  /** The new membership. */
  membership?: Membership;
}

export const MembershipCreatedEventData: Schema.Codec<MembershipCreatedEventData> =
  /*@__PURE__*/ Schema.Struct({
    membership: Schema.optional(Membership),
  }).annotate({ identifier: "MembershipCreatedEventData" });

export interface MembershipBatchCreatedEventData {
  /** A list of new memberships. */
  memberships?: ReadonlyArray<MembershipCreatedEventData>;
}

export const MembershipBatchCreatedEventData: Schema.Codec<MembershipBatchCreatedEventData> =
  /*@__PURE__*/ Schema.Struct({
    memberships: Schema.optional(Schema.Array(MembershipCreatedEventData)),
  }).annotate({ identifier: "MembershipBatchCreatedEventData" });

export interface SpaceBatchUpdatedEventData {
  /** A list of updated spaces. */
  spaces?: ReadonlyArray<SpaceUpdatedEventData>;
}

export const SpaceBatchUpdatedEventData: Schema.Codec<SpaceBatchUpdatedEventData> =
  /*@__PURE__*/ Schema.Struct({
    spaces: Schema.optional(Schema.Array(SpaceUpdatedEventData)),
  }).annotate({ identifier: "SpaceBatchUpdatedEventData" });

export interface SpaceEvent {
  /** Event payload for multiple deleted reactions. Event type: `google.workspace.chat.reaction.v1.batchDeleted` */
  reactionBatchDeletedEventData?: ReactionBatchDeletedEventData;
  /** Resource name of the space event. Format: `spaces/{space}/spaceEvents/{spaceEvent}` */
  name?: string;
  /** Event payload for multiple new reactions. Event type: `google.workspace.chat.reaction.v1.batchCreated` */
  reactionBatchCreatedEventData?: ReactionBatchCreatedEventData;
  /** Event payload for an updated membership. Event type: `google.workspace.chat.membership.v1.updated` */
  membershipUpdatedEventData?: MembershipUpdatedEventData;
  /** Event payload for multiple new messages. Event type: `google.workspace.chat.message.v1.batchCreated` */
  messageBatchCreatedEventData?: MessageBatchCreatedEventData;
  /** Event payload for a space update. Event type: `google.workspace.chat.space.v1.updated` */
  spaceUpdatedEventData?: SpaceUpdatedEventData;
  /** Event payload for multiple deleted messages. Event type: `google.workspace.chat.message.v1.batchDeleted` */
  messageBatchDeletedEventData?: MessageBatchDeletedEventData;
  /** Event payload for multiple updated memberships. Event type: `google.workspace.chat.membership.v1.batchUpdated` */
  membershipBatchUpdatedEventData?: MembershipBatchUpdatedEventData;
  /** Event payload for multiple updated messages. Event type: `google.workspace.chat.message.v1.batchUpdated` */
  messageBatchUpdatedEventData?: MessageBatchUpdatedEventData;
  /** Event payload for a deleted reaction. Event type: `google.workspace.chat.reaction.v1.deleted` */
  reactionDeletedEventData?: ReactionDeletedEventData;
  /** Event payload for an updated message. Event type: `google.workspace.chat.message.v1.updated` */
  messageUpdatedEventData?: MessageUpdatedEventData;
  /** Event payload for a deleted message. Event type: `google.workspace.chat.message.v1.deleted` */
  messageDeletedEventData?: MessageDeletedEventData;
  /** Event payload for multiple new memberships. Event type: `google.workspace.chat.membership.v1.batchCreated` */
  membershipBatchCreatedEventData?: MembershipBatchCreatedEventData;
  /** Event payload for a new reaction. Event type: `google.workspace.chat.reaction.v1.created` */
  reactionCreatedEventData?: ReactionCreatedEventData;
  /** Event payload for a new membership. Event type: `google.workspace.chat.membership.v1.created` */
  membershipCreatedEventData?: MembershipCreatedEventData;
  /** Type of space event. Each event type has a batch version, which represents multiple instances of the event type that occur in a short period of time. For `spaceEvents.list()` requests, omit batch event types in your query filter. By default, the server returns both event type and its batch version. Supported event types for [messages](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages): * New message: `google.workspace.chat.message.v1.created` * Updated message: `google.workspace.chat.message.v1.updated` * Deleted message: `google.workspace.chat.message.v1.deleted` * Multiple new messages: `google.workspace.chat.message.v1.batchCreated` * Multiple updated messages: `google.workspace.chat.message.v1.batchUpdated` * Multiple deleted messages: `google.workspace.chat.message.v1.batchDeleted` Supported event types for [memberships](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members): * New membership: `google.workspace.chat.membership.v1.created` * Updated membership: `google.workspace.chat.membership.v1.updated` * Deleted membership: `google.workspace.chat.membership.v1.deleted` * Multiple new memberships: `google.workspace.chat.membership.v1.batchCreated` * Multiple updated memberships: `google.workspace.chat.membership.v1.batchUpdated` * Multiple deleted memberships: `google.workspace.chat.membership.v1.batchDeleted` Supported event types for [reactions](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.messages.reactions): * New reaction: `google.workspace.chat.reaction.v1.created` * Deleted reaction: `google.workspace.chat.reaction.v1.deleted` * Multiple new reactions: `google.workspace.chat.reaction.v1.batchCreated` * Multiple deleted reactions: `google.workspace.chat.reaction.v1.batchDeleted` Supported event types about the [space](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces): * Updated space: `google.workspace.chat.space.v1.updated` * Multiple space updates: `google.workspace.chat.space.v1.batchUpdated` */
  eventType?: string;
  /** Event payload for a new message. Event type: `google.workspace.chat.message.v1.created` */
  messageCreatedEventData?: MessageCreatedEventData;
  /** Event payload for multiple updates to a space. Event type: `google.workspace.chat.space.v1.batchUpdated` */
  spaceBatchUpdatedEventData?: SpaceBatchUpdatedEventData;
  /** Event payload for multiple deleted memberships. Event type: `google.workspace.chat.membership.v1.batchDeleted` */
  membershipBatchDeletedEventData?: MembershipBatchDeletedEventData;
  /** Time when the event occurred. */
  eventTime?: string;
  /** Event payload for a deleted membership. Event type: `google.workspace.chat.membership.v1.deleted` */
  membershipDeletedEventData?: MembershipDeletedEventData;
}

export const SpaceEvent: Schema.Codec<SpaceEvent> =
  /*@__PURE__*/ Schema.Struct({
    reactionBatchDeletedEventData: Schema.optional(
      ReactionBatchDeletedEventData,
    ),
    name: Schema.optional(Schema.String),
    reactionBatchCreatedEventData: Schema.optional(
      ReactionBatchCreatedEventData,
    ),
    membershipUpdatedEventData: Schema.optional(MembershipUpdatedEventData),
    messageBatchCreatedEventData: Schema.optional(MessageBatchCreatedEventData),
    spaceUpdatedEventData: Schema.optional(SpaceUpdatedEventData),
    messageBatchDeletedEventData: Schema.optional(MessageBatchDeletedEventData),
    membershipBatchUpdatedEventData: Schema.optional(
      MembershipBatchUpdatedEventData,
    ),
    messageBatchUpdatedEventData: Schema.optional(MessageBatchUpdatedEventData),
    reactionDeletedEventData: Schema.optional(ReactionDeletedEventData),
    messageUpdatedEventData: Schema.optional(MessageUpdatedEventData),
    messageDeletedEventData: Schema.optional(MessageDeletedEventData),
    membershipBatchCreatedEventData: Schema.optional(
      MembershipBatchCreatedEventData,
    ),
    reactionCreatedEventData: Schema.optional(ReactionCreatedEventData),
    membershipCreatedEventData: Schema.optional(MembershipCreatedEventData),
    eventType: Schema.optional(Schema.String),
    messageCreatedEventData: Schema.optional(MessageCreatedEventData),
    spaceBatchUpdatedEventData: Schema.optional(SpaceBatchUpdatedEventData),
    membershipBatchDeletedEventData: Schema.optional(
      MembershipBatchDeletedEventData,
    ),
    eventTime: Schema.optional(Schema.String),
    membershipDeletedEventData: Schema.optional(MembershipDeletedEventData),
  }).annotate({ identifier: "SpaceEvent" });

export interface SpaceNotificationSetting {
  /** The space notification mute setting. */
  muteSetting?:
    | "MUTE_SETTING_UNSPECIFIED"
    | "UNMUTED"
    | "MUTED"
    | (string & {});
  /** The notification setting. */
  notificationSetting?:
    | "NOTIFICATION_SETTING_UNSPECIFIED"
    | "ALL"
    | "MAIN_CONVERSATIONS"
    | "FOR_YOU"
    | "OFF"
    | (string & {});
  /** Identifier. The resource name of the space notification setting. Format: `users/{user}/spaces/{space}/spaceNotificationSetting`. */
  name?: string;
}

export const SpaceNotificationSetting: Schema.Codec<SpaceNotificationSetting> =
  /*@__PURE__*/ Schema.Struct({
    muteSetting: Schema.optional(Schema.String),
    notificationSetting: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  }).annotate({ identifier: "SpaceNotificationSetting" });

export interface Empty {}

export const Empty: Schema.Codec<Empty> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "Empty",
  });

export interface AppCommandMetadata {
  /** The type of Chat app command. */
  appCommandType?:
    | "APP_COMMAND_TYPE_UNSPECIFIED"
    | "SLASH_COMMAND"
    | "QUICK_COMMAND"
    | (string & {});
  /** The ID for the command specified in the Chat API configuration. */
  appCommandId?: number;
}

export const AppCommandMetadata: Schema.Codec<AppCommandMetadata> =
  /*@__PURE__*/ Schema.Struct({
    appCommandType: Schema.optional(Schema.String),
    appCommandId: Schema.optional(Schema.Number),
  }).annotate({ identifier: "AppCommandMetadata" });

export interface DeprecatedEvent {
  /** Metadata about a Chat app command. */
  appCommandMetadata?: AppCommandMetadata;
  /** Represents information about the user's client, such as locale, host app, and platform. For Chat apps, `CommonEventObject` includes information submitted by users interacting with [dialogs](https://developers.google.com/workspace/chat/dialogs), like data entered on a card. */
  common?: CommonEventObject;
  /** The [type](/workspace/chat/api/reference/rest/v1/EventType) of user interaction with the Chat app, such as `MESSAGE` or `ADDED_TO_SPACE`. */
  type?:
    | "UNSPECIFIED"
    | "MESSAGE"
    | "ADDED_TO_SPACE"
    | "REMOVED_FROM_SPACE"
    | "CARD_CLICKED"
    | "WIDGET_UPDATED"
    | "APP_COMMAND"
    | (string & {});
  /** The timestamp indicating when the interaction event occurred. */
  eventTime?: string;
  /** The Chat app-defined key for the thread related to the interaction event. See [`spaces.messages.thread.threadKey`](/chat/api/reference/rest/v1/spaces.messages#Thread.FIELDS.thread_key) for more information. */
  threadKey?: string;
  /** For `ADDED_TO_SPACE`, `CARD_CLICKED`, and `MESSAGE` interaction events, the message that triggered the interaction event, if applicable. */
  message?: Message;
  /** The type of [dialog](https://developers.google.com/workspace/chat/dialogs) interaction event received. */
  dialogEventType?:
    | "TYPE_UNSPECIFIED"
    | "REQUEST_DIALOG"
    | "SUBMIT_DIALOG"
    | "CANCEL_DIALOG"
    | (string & {});
  /** The user that interacted with the Chat app. */
  user?: User;
  /** The thread in which the user interacted with the Chat app. This could be in a new thread created by a newly sent message. This field is populated if the interaction event is associated with a specific message or thread. */
  thread?: Thread;
  /** For `CARD_CLICKED` and `MESSAGE` interaction events, whether the user is interacting with or about to interact with a [dialog](https://developers.google.com/workspace/chat/dialogs). */
  isDialogEvent?: boolean;
  /** A secret value that legacy Chat apps can use to verify if a request is from Google. Google randomly generates the token, and its value remains static. You can obtain, revoke, or regenerate the token from the [Chat API configuration page](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat) in the Google Cloud Console. Modern Chat apps don't use this field. It is absent from API responses and the [Chat API configuration page](https://console.cloud.google.com/apis/api/chat.googleapis.com/hangouts-chat). */
  token?: string;
  /** For `CARD_CLICKED` interaction events, the form action data associated when a user clicks a card or dialog. To learn more, see [Read form data input by users on cards](https://developers.google.com/workspace/chat/read-form-data). */
  action?: FormAction;
  /** This URL is populated for `MESSAGE`, `ADDED_TO_SPACE`, and `APP_COMMAND` interaction events. After completing an authorization or configuration flow outside of Google Chat, users must be redirected to this URL to signal to Google Chat that the authorization or configuration flow was successful. For more information, see [Connect a Chat app with other services and tools](https://developers.google.com/workspace/chat/connect-web-services-tools). */
  configCompleteRedirectUrl?: string;
  /** The space in which the user interacted with the Chat app. */
  space?: Space;
}

export const DeprecatedEvent: Schema.Codec<DeprecatedEvent> =
  /*@__PURE__*/ Schema.Struct({
    appCommandMetadata: Schema.optional(AppCommandMetadata),
    common: Schema.optional(CommonEventObject),
    type: Schema.optional(Schema.String),
    eventTime: Schema.optional(Schema.String),
    threadKey: Schema.optional(Schema.String),
    message: Schema.optional(Message),
    dialogEventType: Schema.optional(Schema.String),
    user: Schema.optional(User),
    thread: Schema.optional(Thread),
    isDialogEvent: Schema.optional(Schema.Boolean),
    token: Schema.optional(Schema.String),
    action: Schema.optional(FormAction),
    configCompleteRedirectUrl: Schema.optional(Schema.String),
    space: Schema.optional(Space),
  }).annotate({ identifier: "DeprecatedEvent" });

export interface UploadAttachmentResponse {
  /** Reference to the uploaded attachment. */
  attachmentDataRef?: AttachmentDataRef;
}

export const UploadAttachmentResponse: Schema.Codec<UploadAttachmentResponse> =
  /*@__PURE__*/ Schema.Struct({
    attachmentDataRef: Schema.optional(AttachmentDataRef),
  }).annotate({ identifier: "UploadAttachmentResponse" });

export interface CompleteImportSpaceResponse {
  /** The import mode space. */
  space?: Space;
}

export const CompleteImportSpaceResponse: Schema.Codec<CompleteImportSpaceResponse> =
  /*@__PURE__*/ Schema.Struct({
    space: Schema.optional(Space),
  }).annotate({ identifier: "CompleteImportSpaceResponse" });

export interface MarkAsAwayRequest {}

export const MarkAsAwayRequest: Schema.Codec<MarkAsAwayRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "MarkAsAwayRequest",
  });

export interface SectionItem {
  /** Identifier. The resource name of the section item. Format: `users/{user}/sections/{section}/items/{item}` */
  name?: string;
  /** Optional. The space resource name. Format: `spaces/{space}` */
  space?: string;
}

export const SectionItem: Schema.Codec<SectionItem> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    space: Schema.optional(Schema.String),
  }).annotate({ identifier: "SectionItem" });

export interface ListSpaceEventsResponse {
  /** Results are returned in chronological order (oldest event first). Note: The `permissionSettings` field is not returned in the Space object for list requests. */
  spaceEvents?: ReadonlyArray<SpaceEvent>;
  /** Continuation token used to fetch more events. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListSpaceEventsResponse: Schema.Codec<ListSpaceEventsResponse> =
  /*@__PURE__*/ Schema.Struct({
    spaceEvents: Schema.optional(Schema.Array(SpaceEvent)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSpaceEventsResponse" });

export interface MoveSectionItemRequest {
  /** Required. The resource name of the section to move the section item to. Format: `users/{user}/sections/{section}` */
  targetSection?: string;
}

export const MoveSectionItemRequest: Schema.Codec<MoveSectionItemRequest> =
  /*@__PURE__*/ Schema.Struct({
    targetSection: Schema.optional(Schema.String),
  }).annotate({ identifier: "MoveSectionItemRequest" });

export interface CompleteImportSpaceRequest {}

export const CompleteImportSpaceRequest: Schema.Codec<CompleteImportSpaceRequest> =
  /*@__PURE__*/ Schema.Struct({}).annotate({
    identifier: "CompleteImportSpaceRequest",
  });

export interface MoveSectionItemResponse {
  /** The updated section item. */
  sectionItem?: SectionItem;
}

export const MoveSectionItemResponse: Schema.Codec<MoveSectionItemResponse> =
  /*@__PURE__*/ Schema.Struct({
    sectionItem: Schema.optional(SectionItem),
  }).annotate({ identifier: "MoveSectionItemResponse" });

export interface MarkAsActiveRequest {
  /** The absolute timestamp when the ACTIVE state expires. */
  expireTime?: string;
  /** The duration from the current time until the ACTIVE state expires. Using a short TTL can effectively reset the user's state to be based on activity after this brief duration. */
  ttl?: string;
}

export const MarkAsActiveRequest: Schema.Codec<MarkAsActiveRequest> =
  /*@__PURE__*/ Schema.Struct({
    expireTime: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.String),
  }).annotate({ identifier: "MarkAsActiveRequest" });

export interface ListMembershipsResponse {
  /** Unordered list. List of memberships in the requested (or first) page. */
  memberships?: ReadonlyArray<Membership>;
  /** A token that you can send as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListMembershipsResponse: Schema.Codec<ListMembershipsResponse> =
  /*@__PURE__*/ Schema.Struct({
    memberships: Schema.optional(Schema.Array(Membership)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMembershipsResponse" });

export interface SetUpSpaceRequest {
  /** Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error. */
  requestId?: string;
  /** Required. The `Space.spaceType` field is required. To create a space, set `Space.spaceType` to `SPACE` and set `Space.displayName`. If you receive the error message `ALREADY_EXISTS` when setting up a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. To create a group chat, set `Space.spaceType` to `GROUP_CHAT`. Don't set `Space.displayName`. To create a 1:1 conversation between humans, set `Space.spaceType` to `DIRECT_MESSAGE` and set `Space.singleUserBotDm` to `false`. Don't set `Space.displayName` or `Space.spaceDetails`. To create an 1:1 conversation between a human and the calling Chat app, set `Space.spaceType` to `DIRECT_MESSAGE` and `Space.singleUserBotDm` to `true`. Don't set `Space.displayName` or `Space.spaceDetails`. If a `DIRECT_MESSAGE` space already exists, that space is returned instead of creating a new space. */
  space?: Space;
  /** Optional. The Google Chat users or groups to invite to join the space. Omit the calling user, as they are added automatically. The set currently allows up to 49 memberships (in addition to the caller). For human membership, the `Membership.member` field must contain a `user` with `name` populated (format: `users/{user}`) and `type` set to `User.Type.HUMAN`. You can only add human users when setting up a space (adding Chat apps is only supported for direct message setup with the calling app). You can also add members using the user's email as an alias for {user}. For example, the `user.name` can be `users/example@gmail.com`. To invite Gmail users or users from external Google Workspace domains, user's email must be used for `{user}`. For Google group membership, the `Membership.group_member` field must contain a `group` with `name` populated (format `groups/{group}`). You can only add Google groups when setting `Space.spaceType` to `SPACE`. Optional when setting `Space.spaceType` to `SPACE`. Required when setting `Space.spaceType` to `GROUP_CHAT`, along with at least two memberships. Required when setting `Space.spaceType` to `DIRECT_MESSAGE` with a human user, along with exactly one membership. Must be empty when creating a 1:1 conversation between a human and the calling Chat app (when setting `Space.spaceType` to `DIRECT_MESSAGE` and `Space.singleUserBotDm` to `true`). */
  memberships?: ReadonlyArray<Membership>;
}

export const SetUpSpaceRequest: Schema.Codec<SetUpSpaceRequest> =
  /*@__PURE__*/ Schema.Struct({
    requestId: Schema.optional(Schema.String),
    space: Schema.optional(Space),
    memberships: Schema.optional(Schema.Array(Membership)),
  }).annotate({ identifier: "SetUpSpaceRequest" });

export interface CustomStatus {
  /** The timestamp when the custom status expires. */
  expireTime?: string;
  /** Required. The text of the custom status. This will be a string with maximum length of 64. */
  text?: string;
  /** Input only. The time-to-live duration after which the custom status expires. */
  ttl?: string;
  /** Required. The emoji of the custom status. Only Unicode emojis are supported; custom emojis are not supported. */
  emoji?: Emoji;
}

export const CustomStatus: Schema.Codec<CustomStatus> =
  /*@__PURE__*/ Schema.Struct({
    expireTime: Schema.optional(Schema.String),
    text: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.String),
    emoji: Schema.optional(Emoji),
  }).annotate({ identifier: "CustomStatus" });

export interface ListSectionItemsResponse {
  /** The section items from the specified section. */
  sectionItems?: ReadonlyArray<SectionItem>;
  /** A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListSectionItemsResponse: Schema.Codec<ListSectionItemsResponse> =
  /*@__PURE__*/ Schema.Struct({
    sectionItems: Schema.optional(Schema.Array(SectionItem)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListSectionItemsResponse" });

export interface ThreadReadState {
  /** Resource name of the thread read state. Format: `users/{user}/spaces/{space}/threads/{thread}/threadReadState` */
  name?: string;
  /** The time when the user's thread read state was updated. Usually this corresponds with the timestamp of the last read message in a thread. */
  lastReadTime?: string;
}

export const ThreadReadState: Schema.Codec<ThreadReadState> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    lastReadTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "ThreadReadState" });

export interface ListCustomEmojisResponse {
  /** A token that you can send as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages. */
  nextPageToken?: string;
  /** Unordered list. List of custom emojis. */
  customEmojis?: ReadonlyArray<CustomEmoji>;
}

export const ListCustomEmojisResponse: Schema.Codec<ListCustomEmojisResponse> =
  /*@__PURE__*/ Schema.Struct({
    nextPageToken: Schema.optional(Schema.String),
    customEmojis: Schema.optional(Schema.Array(CustomEmoji)),
  }).annotate({ identifier: "ListCustomEmojisResponse" });

export interface Media {
  /** Name of the media resource. */
  resourceName?: string;
}

export const Media: Schema.Codec<Media> =
  /*@__PURE__*/ Schema.Struct({
    resourceName: Schema.optional(Schema.String),
  }).annotate({ identifier: "Media" });

export interface UploadAttachmentRequest {
  /** Required. The filename of the attachment, including the file extension. */
  filename?: string;
}

export const UploadAttachmentRequest: Schema.Codec<UploadAttachmentRequest> =
  /*@__PURE__*/ Schema.Struct({
    filename: Schema.optional(Schema.String),
  }).annotate({ identifier: "UploadAttachmentRequest" });

export interface ListMessagesResponse {
  /** List of messages. */
  messages?: ReadonlyArray<Message>;
  /** You can send a token as `pageToken` to retrieve the next page of results. If empty, there are no subsequent pages. */
  nextPageToken?: string;
}

export const ListMessagesResponse: Schema.Codec<ListMessagesResponse> =
  /*@__PURE__*/ Schema.Struct({
    messages: Schema.optional(Schema.Array(Message)),
    nextPageToken: Schema.optional(Schema.String),
  }).annotate({ identifier: "ListMessagesResponse" });

export interface PositionSectionResponse {
  /** The updated section. */
  section?: GoogleChatV1Section;
}

export const PositionSectionResponse: Schema.Codec<PositionSectionResponse> =
  /*@__PURE__*/ Schema.Struct({
    section: Schema.optional(GoogleChatV1Section),
  }).annotate({ identifier: "PositionSectionResponse" });

export interface SpaceReadState {
  /** Resource name of the space read state. Format: `users/{user}/spaces/{space}/spaceReadState` */
  name?: string;
  /** Optional. The time when the user's space read state was updated. Usually this corresponds with either the timestamp of the last read message, or a timestamp specified by the user to mark the last read position in a space. */
  lastReadTime?: string;
}

export const SpaceReadState: Schema.Codec<SpaceReadState> =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    lastReadTime: Schema.optional(Schema.String),
  }).annotate({ identifier: "SpaceReadState" });

export interface Availability {
  /** Output only. The user's current availability state. */
  state?:
    | "STATE_UNSPECIFIED"
    | "ACTIVE"
    | "IDLE"
    | "AWAY"
    | "DO_NOT_DISTURB"
    | (string & {});
  /** Identifier. Resource name of the user's availability. Format: `users/{user}/availability` `{user}` is the id for the Person in the People API or Admin SDK directory API. For example, `users/123456789`. The user's email address or `me` can also be used as an alias to refer to the caller. For example, `users/user@example.com` or `users/me`. */
  name?: string;
  /** Output only. Metadata if the user state is set to DO_NOT_DISTURB. */
  doNotDisturbMetadata?: DoNotDisturbMetadata;
  /** Optional. The user's custom status. */
  customStatus?: CustomStatus;
}

export const Availability: Schema.Codec<Availability> =
  /*@__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    doNotDisturbMetadata: Schema.optional(DoNotDisturbMetadata),
    customStatus: Schema.optional(CustomStatus),
  }).annotate({ identifier: "Availability" });

export interface PositionSectionRequest {
  /** Optional. The absolute position of the section in the list of sections. The position must be greater than 0. If the position is greater than the number of sections, the section will be appended to the end of the list. This operation inserts the section at the given position and shifts the original section at that position, and those below it, to the next position. */
  sortOrder?: number;
  /** Optional. The relative position of the section in the list of sections. */
  relativePosition?: "POSITION_UNSPECIFIED" | "START" | "END" | (string & {});
}

export const PositionSectionRequest: Schema.Codec<PositionSectionRequest> =
  /*@__PURE__*/ Schema.Struct({
    sortOrder: Schema.optional(Schema.Number),
    relativePosition: Schema.optional(Schema.String),
  }).annotate({ identifier: "PositionSectionRequest" });

// ==========================================================================
// Errors
// ==========================================================================

export class NotFound extends Schema.TaggedErrorClass<NotFound>()("NotFound", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(NotFound, [{ httpStatus: 404 }]);

export class Forbidden extends Schema.TaggedErrorClass<Forbidden>()(
  "Forbidden",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

export class BadRequest extends Schema.TaggedErrorClass<BadRequest>()(
  "BadRequest",
  {
    code: Schema.optional(Schema.Number),
    message: Schema.String,
    status: Schema.optional(Schema.String),
    reason: Schema.optional(Schema.String),
    domain: Schema.optional(Schema.String),
    details: Schema.optional(Schema.Array(Schema.Unknown)),
  },
) {}
T.applyErrorMatchers(BadRequest, [{ httpStatus: 400 }]);

export class Conflict extends Schema.TaggedErrorClass<Conflict>()("Conflict", {
  code: Schema.optional(Schema.Number),
  message: Schema.String,
  status: Schema.optional(Schema.String),
  reason: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  details: Schema.optional(Schema.Array(Schema.Unknown)),
}) {}
T.applyErrorMatchers(Conflict, [{ httpStatus: 409 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface DownloadMediaRequest {
  /** Name of the media that is being downloaded. See ReadRequest.resource_name. */
  resourceName: string;
}

export const DownloadMediaRequest = /*@__PURE__*/ Schema.Struct({
  resourceName: Schema.String.pipe(T.HttpPath("resourceName")),
}).pipe(
  T.Http({ method: "GET", path: "v1/media/{+resourceName}" }),
  svc,
) as unknown as Schema.Codec<DownloadMediaRequest>;

export type DownloadMediaResponse = Media;
export const DownloadMediaResponse = /*@__PURE__*/ Media;

export type DownloadMediaError = DefaultErrors | NotFound | Forbidden;

/** Downloads media. Download is supported on the URI `/v1/media/{+name}?alt=media`. */
export const downloadMedia: API.OperationMethod<
  DownloadMediaRequest,
  DownloadMediaResponse,
  DownloadMediaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DownloadMediaRequest,
  output: DownloadMediaResponse,
  errors: [NotFound, Forbidden],
}));

export interface UploadMediaRequest {
  /** Required. Resource name of the Chat space in which the attachment is uploaded. Format "spaces/{space}". */
  parent: string;
  /** Request body */
  body?: UploadAttachmentRequest;
}

export const UploadMediaRequest = /*@__PURE__*/ Schema.Struct({
  parent: Schema.String.pipe(T.HttpPath("parent")),
  body: Schema.optional(UploadAttachmentRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({
    method: "POST",
    path: "v1/{+parent}/attachments:upload",
    hasBody: true,
  }),
  svc,
) as unknown as Schema.Codec<UploadMediaRequest>;

export type UploadMediaResponse = UploadAttachmentResponse;
export const UploadMediaResponse = /*@__PURE__*/ UploadAttachmentResponse;

export type UploadMediaError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Uploads an attachment. For an example, see [Upload media as a file attachment](https://developers.google.com/workspace/chat/upload-media-attachments). Requires user [authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.messages.create` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) You can upload attachments up to 200 MB. Certain file types aren't supported. For details, see [File types blocked by Google Chat](https://support.google.com/chat/answer/7651457?&co=GENIE.Platform%3DDesktop#File%20types%20blocked%20in%20Google%20Chat). */
export const uploadMedia: API.OperationMethod<
  UploadMediaRequest,
  UploadMediaResponse,
  UploadMediaError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UploadMediaRequest,
  output: UploadMediaResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteSpacesRequest {
  /** Optional. When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires the `chat.admin.delete` [OAuth 2.0 scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes). */
  useAdminAccess?: boolean;
  /** Required. Resource name of the space to delete. Format: `spaces/{space}` */
  name: string;
}

export const DeleteSpacesRequest = /*@__PURE__*/ Schema.Struct({
  useAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useAdminAccess"),
  ),
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "DELETE", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Codec<DeleteSpacesRequest>;

export type DeleteSpacesResponse = Empty;
export const DeleteSpacesResponse = /*@__PURE__*/ Empty;

export type DeleteSpacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a named space. Always performs a cascading delete, which means that the space's child resources—like messages posted in the space and memberships in the space—are also deleted. For an example, see [Delete a space](https://developers.google.com/workspace/chat/delete-spaces). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope: - `https://www.googleapis.com/auth/chat.app.delete` (only in spaces the app created) - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.delete` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scope is used: - `https://www.googleapis.com/auth/chat.admin.delete` */
export const deleteSpaces: API.OperationMethod<
  DeleteSpacesRequest,
  DeleteSpacesResponse,
  DeleteSpacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSpacesRequest,
  output: DeleteSpacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface SetupSpacesRequest {
  /** Request body */
  body?: SetUpSpaceRequest;
}

export const SetupSpacesRequest = /*@__PURE__*/ Schema.Struct({
  body: Schema.optional(SetUpSpaceRequest).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/spaces:setup", hasBody: true }),
  svc,
) as unknown as Schema.Codec<SetupSpacesRequest>;

export type SetupSpacesResponse = Space;
export const SetupSpacesResponse = /*@__PURE__*/ Space;

export type SetupSpacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a space and adds specified users to it. The calling user is automatically added to the space, and shouldn't be specified as a membership in the request. For an example, see [Set up a space with initial members](https://developers.google.com/workspace/chat/set-up-spaces). To specify the human members to add, add memberships with the appropriate `membership.member.name`. To add a human user, use `users/{user}`, where `{user}` can be the email address for the user. For users in the same Workspace organization `{user}` can also be the `id` for the person from the People API, or the `id` for the user in the Directory API. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can add the user to the space by setting the `membership.member.name` to `users/user@example.com` or `users/123456789`. To specify the Google groups to add, add memberships with the appropriate `membership.group_member.name`. To add or invite a Google group, use `groups/{group}`, where `{group}` is the `id` for the group from the Cloud Identity Groups API. For example, you can use [Cloud Identity Groups lookup API](https://cloud.google.com/identity/docs/reference/rest/v1/groups/lookup) to retrieve the ID `123456789` for group email `group@example.com`, then you can add the group to the space by setting the `membership.group_member.name` to `groups/123456789`. Group email is not supported, and Google groups can only be added as members in named spaces. For a named space or group chat, if the caller blocks, or is blocked by some members, or doesn't have permission to add some members, then those members aren't added to the created space. To create a direct message (DM) between the calling user and another human user, specify exactly one membership to represent the human user. If one user blocks the other, the request fails and the DM isn't created. To create a DM between the calling user and the calling app, set `Space.singleUserBotDm` to `true` and don't specify any memberships. You can only use this method to set up a DM with the calling app. To add the calling app as a member of a space or an existing DM between two human users, see [Invite or add a user or app to a space](https://developers.google.com/workspace/chat/create-members). If a DM already exists between two users, even when one user blocks the other at the time a request is made, then the existing DM is returned. Spaces with threaded replies aren't supported. If you receive the error message `ALREADY_EXISTS` when setting up a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.spaces.create` - `https://www.googleapis.com/auth/chat.spaces` */
export const setupSpaces: API.OperationMethod<
  SetupSpacesRequest,
  SetupSpacesResponse,
  SetupSpacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: SetupSpacesRequest,
  output: SetupSpacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSpacesRequest {
  /** Optional. When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires the `chat.admin.spaces` or `chat.admin.spaces.readonly` [OAuth 2.0 scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes). */
  useAdminAccess?: boolean;
  /** Required. Resource name of the space, in the form `spaces/{space}`. Format: `spaces/{space}` */
  name: string;
}

export const GetSpacesRequest = /*@__PURE__*/ Schema.Struct({
  useAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useAdminAccess"),
  ),
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Codec<GetSpacesRequest>;

export type GetSpacesResponse = Space;
export const GetSpacesResponse = /*@__PURE__*/ Space;

export type GetSpacesError = DefaultErrors | NotFound | Forbidden;

/** Returns details about a space. For an example, see [Get details about a space](https://developers.google.com/workspace/chat/get-spaces). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.bot` - `https://www.googleapis.com/auth/chat.app.spaces` with [administrator approval](https://support.google.com/a?p=chat-app-auth) - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces.readonly` - `https://www.googleapis.com/auth/chat.spaces` - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and one of the following authorization scopes is used: - `https://www.googleapis.com/auth/chat.admin.spaces.readonly` - `https://www.googleapis.com/auth/chat.admin.spaces` App authentication has the following limitations: - `space.access_settings` is only populated when using the `chat.app.spaces` scope. - `space.predefind_permission_settings` and `space.permission_settings` are only populated when using the `chat.app.spaces` scope, and only for spaces the app created. */
export const getSpaces: API.OperationMethod<
  GetSpacesRequest,
  GetSpacesResponse,
  GetSpacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSpacesRequest,
  output: GetSpacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchSpacesRequest {
  /** Required. The updated field paths, comma separated if there are multiple. You can update the following fields for a space: `space_details`: Updates the space's description and guidelines. You must pass both description and guidelines in the update request as `SpaceDetails`. If you only want to update one of the fields, pass the existing value for the other field. `display_name`: Only supports updating the display name for spaces where `spaceType` field is `SPACE`. If you receive the error message `ALREADY_EXISTS`, try a different value. An existing space within the Google Workspace organization might already use this display name. `space_type`: Only supports changing a `GROUP_CHAT` space type to `SPACE`. Include `display_name` together with `space_type` in the update mask and ensure that the specified space has a non-empty display name and the `SPACE` space type. Including the `space_type` mask and the `SPACE` type in the specified space when updating the display name is optional if the existing space already has the `SPACE` type. Trying to update the space type in other ways results in an invalid argument error. `space_type` is not supported with `useAdminAccess`. `space_history_state`: Updates [space history settings](https://support.google.com/chat/answer/7664687) by turning history on or off for the space. Only supported if history settings are enabled for the Google Workspace organization. To update the space history state, you must omit all other field masks in your request. `space_history_state` is not supported with `useAdminAccess`. `access_settings.audience`: Updates the [access setting](https://support.google.com/chat/answer/11971020) of who can discover the space, join the space, and preview the messages in named space where `spaceType` field is `SPACE`. If the existing space has a target audience, you can remove the audience and restrict space access by omitting a value for this field mask. To update access settings for a space, the authenticating user must be a space manager and omit all other field masks in your request. You can't update this field if the space is in [import mode](https://developers.google.com/workspace/chat/import-data-overview). To learn more, see [Make a space discoverable to specific users](https://developers.google.com/workspace/chat/space-target-audience). `access_settings.audience` is not supported with `useAdminAccess`. `permission_settings`: Supports changing the [permission settings](https://support.google.com/chat/answer/13340792) of a space. When updating permission settings, you can only specify `permissionSettings` field masks; you cannot update other field masks at the same time. The supported field masks include: - `permission_settings.manageMembersAndGroups` - `permission_settings.modifySpaceDetails` - `permission_settings.toggleHistory` - `permission_settings.useAtMentionAll` - `permission_settings.manageApps` - `permission_settings.manageWebhooks` - `permission_settings.replyMessages` */
  updateMask?: string;
  /** Optional. When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires the `chat.admin.spaces` [OAuth 2.0 scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes). Some `FieldMask` values are not supported using admin access. For details, see the description of `update_mask`. */
  useAdminAccess?: boolean;
  /** Identifier. Resource name of the space. Format: `spaces/{space}` Where `{space}` represents the system-assigned ID for the space. You can obtain the space ID by calling the [`spaces.list()`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) method or from the space URL. For example, if the space URL is `https://mail.google.com/mail/u/0/#chat/space/AAAAAAAAA`, the space ID is `AAAAAAAAA`. */
  name: string;
  /** Request body */
  body?: Space;
}

export const PatchSpacesRequest = /*@__PURE__*/ Schema.Struct({
  updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
  useAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useAdminAccess"),
  ),
  name: Schema.String.pipe(T.HttpPath("name")),
  body: Schema.optional(Space).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
  svc,
) as unknown as Schema.Codec<PatchSpacesRequest>;

export type PatchSpacesResponse = Space;
export const PatchSpacesResponse = /*@__PURE__*/ Space;

export type PatchSpacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a space. For an example, see [Update a space](https://developers.google.com/workspace/chat/update-spaces). If you're updating the `displayName` field and receive the error message `ALREADY_EXISTS`, try a different display name.. An existing space within the Google Workspace organization might already use this display name. Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.app.spaces` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scopes is used: - `https://www.googleapis.com/auth/chat.admin.spaces` App authentication has the following limitations: - To update either `space.predefined_permission_settings` or `space.permission_settings`, the app must be the space creator. - Updating the `space.access_settings.audience` is not supported for app authentication. */
export const patchSpaces: API.OperationMethod<
  PatchSpacesRequest,
  PatchSpacesResponse,
  PatchSpacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchSpacesRequest,
  output: PatchSpacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CompleteImportSpacesRequest {
  /** Required. Resource name of the import mode space. Format: `spaces/{space}` */
  name: string;
  /** Request body */
  body?: CompleteImportSpaceRequest;
}

export const CompleteImportSpacesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(CompleteImportSpaceRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:completeImport",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<CompleteImportSpacesRequest>;

export type CompleteImportSpacesResponse = CompleteImportSpaceResponse;
export const CompleteImportSpacesResponse =
  /*@__PURE__*/ CompleteImportSpaceResponse;

export type CompleteImportSpacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Completes the [import process](https://developers.google.com/workspace/chat/import-data) for the specified space and makes it visible to users. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) and domain-wide delegation with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.import` For more information, see [Authorize Google Chat apps to import data](https://developers.google.com/workspace/chat/authorize-import). */
export const completeImportSpaces: API.OperationMethod<
  CompleteImportSpacesRequest,
  CompleteImportSpacesResponse,
  CompleteImportSpacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CompleteImportSpacesRequest,
  output: CompleteImportSpacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListSpacesRequest {
  /** Optional. The maximum number of spaces to return. The service might return fewer than this value. If unspecified, at most 100 spaces are returned. The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000. Negative values return an `INVALID_ARGUMENT` error. */
  pageSize?: number;
  /** Optional. A page token, received from a previous list spaces call. Provide this parameter to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value may lead to unexpected results. */
  pageToken?: string;
  /** Optional. A query filter. You can filter spaces by the space type ([`space_type`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#spacetype)). To filter by space type, you must specify valid enum value, such as `SPACE` or `GROUP_CHAT` (the `space_type` can't be `SPACE_TYPE_UNSPECIFIED`). To query for multiple space types, use the `OR` operator. For example, the following queries are valid: ``` space_type = "SPACE" spaceType = "GROUP_CHAT" OR spaceType = "DIRECT_MESSAGE" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error. */
  filter?: string;
}

export const ListSpacesRequest = /*@__PURE__*/ Schema.Struct({
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
}).pipe(
  T.Http({ method: "GET", path: "v1/spaces" }),
  svc,
) as unknown as Schema.Codec<ListSpacesRequest>;

export type ListSpacesResponse_Op = ListSpacesResponse;
export const ListSpacesResponse_Op = /*@__PURE__*/ ListSpacesResponse;

export type ListSpacesError = DefaultErrors | NotFound | Forbidden;

/** Lists spaces the caller is a member of. Group chats and DMs aren't listed until the first message is sent. For an example, see [List spaces](https://developers.google.com/workspace/chat/list-spaces). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope: - `https://www.googleapis.com/auth/chat.bot` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces.readonly` - `https://www.googleapis.com/auth/chat.spaces` To list all named spaces by Google Workspace organization, use the [`spaces.search()`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/search) method using Workspace administrator privileges instead. */
export const listSpaces: API.PaginatedOperationMethod<
  ListSpacesRequest,
  ListSpacesResponse_Op,
  ListSpacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSpacesRequest,
  output: ListSpacesResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface SearchSpacesRequest {
  /** A token, received from the previous search spaces call. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results. */
  pageToken?: string;
  /** Optional. How the list of spaces is ordered. Supported attributes to order by are: - `membership_count.joined_direct_human_user_count` — Denotes the count of human users that have directly joined a space. - `last_active_time` — Denotes the time when last eligible item is added to any topic of this space. - `create_time` — Denotes the time of the space creation. When `useAdminAccess` is `false`, only `create_time` and `relevance` are supported for ordering. Only `DESC` is supported for these fields in non-admin searches. Valid ordering operation values are: - `ASC` for ascending. Default value. - `DESC` for descending. The supported syntax are when `useAdminAccess` is set to `true`: - `membership_count.joined_direct_human_user_count DESC` - `membership_count.joined_direct_human_user_count ASC` - `last_active_time DESC` - `last_active_time ASC` - `create_time DESC` - `create_time ASC` When `useAdminAccess` is set to `false`: - `create_time DESC` - `relevance DESC` */
  orderBy?: string;
  /** Required. A search query. You can search by using the following parameters when `useAdminAccess` is set to `true`: - `create_time` - `customer` - `display_name` - `external_user_allowed` - `last_active_time` - `space_history_state` - `space_type` When `useAdminAccess` is set to `false`: - `display_name` - `external_user_allowed` `create_time` and `last_active_time` accept a timestamp in [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339) format and the supported comparison operators are: `=`, `<`, `>`, `<=`, `>=`. `customer` is required when `useAdminAccess` is set to `true`, and is used to indicate which customer to fetch spaces from. `customers/my_customer` is the only supported value. `display_name` only accepts the `HAS` (`:`) operator. The text to match is first tokenized into tokens and each token is prefix-matched case-insensitively and independently as a substring anywhere in the space's `display_name`. For example, `Fun Eve` matches `Fun event` or `The evening was fun`, but not `notFun event` or `even`. When `useAdminAccess` is set to `false`, `display_name` is required to retrieve meaningful results. Otherwise, the default behavior is to return an empty response. `external_user_allowed` accepts either `true` or `false`. `space_history_state` only accepts values from the [`historyState`] (https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#Space.HistoryState) field of a `space` resource. `space_type` is required when `useAdminAccess` is set to `true`, and the only valid value is `SPACE`. Across different fields, only `AND` operators are supported. A valid example is `space_type = "SPACE" AND display_name:"Hello"` and an invalid example is `space_type = "SPACE" OR display_name:"Hello"`. Among the same field, `space_type` doesn't support `AND` or `OR` operators. `display_name`, 'space_history_state', and 'external_user_allowed' only support `OR` operators. `last_active_time` and `create_time` support both `AND` and `OR` operators. `AND` can only be used to represent an interval, such as `last_active_time < "2022-01-01T00:00:00+00:00" AND last_active_time > "2023-01-01T00:00:00+00:00"`. The following example queries are valid when `useAdminAccess` is set to `true`: ``` customer = "customers/my_customer" AND space_type = "SPACE" customer = "customers/my_customer" AND space_type = "SPACE" AND display_name:"Hello World" customer = "customers/my_customer" AND space_type = "SPACE" AND (last_active_time < "2020-01-01T00:00:00+00:00" OR last_active_time > "2022-01-01T00:00:00+00:00") customer = "customers/my_customer" AND space_type = "SPACE" AND (display_name:"Hello World" OR display_name:"Fun event") AND (last_active_time > "2020-01-01T00:00:00+00:00" AND last_active_time < "2022-01-01T00:00:00+00:00") customer = "customers/my_customer" AND space_type = "SPACE" AND (create_time > "2019-01-01T00:00:00+00:00" AND create_time < "2020-01-01T00:00:00+00:00") AND (external_user_allowed = "true") AND (space_history_state = "HISTORY_ON" OR space_history_state = "HISTORY_OFF") ``` The following example queries are valid when `useAdminAccess` is set to `false`: ``` display_name:"Hello World" (display_name:"Hello" OR display_name:"Fun") (external_user_allowed = "true") // Returns an empty response. (external_user_allowed = "true" AND display_name:"Hello") ``` */
  query?: string;
  /** When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires either the `chat.admin.spaces.readonly` or `chat.admin.spaces` [OAuth 2.0 scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes). Setting `use_admin_access` to `false` is available under Developer Preview. [Developer Preview](https://developers.google.com/workspace/preview). */
  useAdminAccess?: boolean;
  /** The maximum number of spaces to return. The service may return fewer than this value. If unspecified, at most 100 spaces are returned. The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000. */
  pageSize?: number;
}

export const SearchSpacesRequest = /*@__PURE__*/ Schema.Struct({
  pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
  query: Schema.optional(Schema.String).pipe(T.HttpQuery("query")),
  useAdminAccess: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("useAdminAccess"),
  ),
  pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
}).pipe(
  T.Http({ method: "GET", path: "v1/spaces:search" }),
  svc,
) as unknown as Schema.Codec<SearchSpacesRequest>;

export type SearchSpacesResponse_Op = SearchSpacesResponse;
export const SearchSpacesResponse_Op = /*@__PURE__*/ SearchSpacesResponse;

export type SearchSpacesError = DefaultErrors | NotFound | Forbidden;

/** Returns a list of spaces in a Google Workspace organization. For an example, see [Search for and manage spaces](https://developers.google.com/workspace/chat/search-manage-admin). When `use_admin_access` is set to `false`, the results are limited to spaces where the calling user is a joined member. To search with administrator privileges, set `use_admin_access` to `true`. Setting `use_admin_access` to `false` is available under Developer Preview. Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces.readonly` - `https://www.googleapis.com/auth/chat.spaces` - [User authentication with administrator privileges](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#admin-privileges) and one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.admin.spaces.readonly` - `https://www.googleapis.com/auth/chat.admin.spaces` */
export const searchSpaces: API.PaginatedOperationMethod<
  SearchSpacesRequest,
  SearchSpacesResponse_Op,
  SearchSpacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: SearchSpacesRequest,
  output: SearchSpacesResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface FindGroupChatsSpacesRequest {
  /** Optional. Resource names of all human users in group chat with the calling user. Chat apps can't be included in the request. The maximum number of users that can be specified in a single request is `49`. Format: `users/{user}`, where `{user}` is either the `id` for the [person](https://developers.google.com/people/api/rest/v1/people) from the People API, or the `id` for the [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Directory API. For example, to find all group chats with the calling user and two other users, with People API profile IDs `123456789` and `987654321`, you can use `users/123456789` and `users/987654321`. You can also use the email as an alias for `{user}`. For example, `users/example@gmail.com` where `example@gmail.com` is the email of the Google Chat user. */
  users?: string[];
  /** Requested space view type. If unset, defaults to `SPACE_VIEW_RESOURCE_NAME_ONLY`. Requests that specify `SPACE_VIEW_EXPANDED` must include scopes that allow reading space data, for example, https://www.googleapis.com/auth/chat.spaces or https://www.googleapis.com/auth/chat.spaces.readonly. */
  spaceView?:
    | "SPACE_VIEW_UNSPECIFIED"
    | "SPACE_VIEW_RESOURCE_NAME_ONLY"
    | "SPACE_VIEW_EXPANDED"
    | (string & {});
  /** Optional. The maximum number of spaces to return. The service might return fewer than this value. If unspecified, at most 10 spaces are returned. The maximum value is 30. If you use a value more than 30, it's automatically changed to 30. Negative values return an `INVALID_ARGUMENT` error. */
  pageSize?: number;
  /** Optional. A page token, received from a previous call to find group chats. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the token. Passing different values may lead to unexpected results. */
  pageToken?: string;
}

export const FindGroupChatsSpacesRequest =
  /*@__PURE__*/ Schema.Struct({
    users: Schema.optional(Schema.Array(Schema.String)).pipe(
      T.HttpQuery("users"),
    ),
    spaceView: Schema.optional(Schema.String).pipe(T.HttpQuery("spaceView")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/spaces:findGroupChats" }),
    svc,
  ) as unknown as Schema.Codec<FindGroupChatsSpacesRequest>;

export type FindGroupChatsSpacesResponse = FindGroupChatsResponse;
export const FindGroupChatsSpacesResponse =
  /*@__PURE__*/ FindGroupChatsResponse;

export type FindGroupChatsSpacesError = DefaultErrors | NotFound | Forbidden;

/** Returns all spaces with `spaceType == GROUP_CHAT`, whose human memberships contain exactly the calling user, and the users specified in `FindGroupChatsRequest.users`. Only members that have joined the conversation are supported. For an example, see [Find group chats](https://developers.google.com/workspace/chat/find-group-chats). If the calling user blocks, or is blocked by, some users, and no spaces with the entire specified set of users are found, this method returns spaces that don't include the blocked or blocking users. The specified set of users must contain only human (non-app) memberships. A request that contains non-human users doesn't return any spaces. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.memberships.readonly` - `https://www.googleapis.com/auth/chat.memberships` */
export const findGroupChatsSpaces: API.PaginatedOperationMethod<
  FindGroupChatsSpacesRequest,
  FindGroupChatsSpacesResponse,
  FindGroupChatsSpacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: FindGroupChatsSpacesRequest,
  output: FindGroupChatsSpacesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface FindDirectMessageSpacesRequest {
  /** Required. Resource name of the user to find direct message with. Format: `users/{user}`, where `{user}` is either the `id` for the [person](https://developers.google.com/people/api/rest/v1/people) from the People API, or the `id` for the [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Directory API. For example, if the People API profile ID is `123456789`, you can find a direct message with that person by using `users/123456789` as the `name`. When [authenticated as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), you can use the email as an alias for `{user}`. For example, `users/example@gmail.com` where `example@gmail.com` is the email of the Google Chat user. */
  name?: string;
}

export const FindDirectMessageSpacesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String).pipe(T.HttpQuery("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/spaces:findDirectMessage" }),
    svc,
  ) as unknown as Schema.Codec<FindDirectMessageSpacesRequest>;

export type FindDirectMessageSpacesResponse = Space;
export const FindDirectMessageSpacesResponse = /*@__PURE__*/ Space;

export type FindDirectMessageSpacesError = DefaultErrors | NotFound | Forbidden;

/** Returns the existing direct message with the specified user. If no direct message space is found, returns a `404 NOT_FOUND` error. For an example, see [Find a direct message](/chat/api/guides/v1/spaces/find-direct-message). With [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app), returns the direct message space between the specified user and the calling Chat app. With [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), returns the direct message space between the specified user and the authenticated user. Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope: - `https://www.googleapis.com/auth/chat.bot` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces.readonly` - `https://www.googleapis.com/auth/chat.spaces` */
export const findDirectMessageSpaces: API.OperationMethod<
  FindDirectMessageSpacesRequest,
  FindDirectMessageSpacesResponse,
  FindDirectMessageSpacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: FindDirectMessageSpacesRequest,
  output: FindDirectMessageSpacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateSpacesRequest {
  /** Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error. */
  requestId?: string;
  /** Request body */
  body?: Space;
}

export const CreateSpacesRequest = /*@__PURE__*/ Schema.Struct({
  requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
  body: Schema.optional(Space).pipe(T.HttpBody()),
}).pipe(
  T.Http({ method: "POST", path: "v1/spaces", hasBody: true }),
  svc,
) as unknown as Schema.Codec<CreateSpacesRequest>;

export type CreateSpacesResponse = Space;
export const CreateSpacesResponse = /*@__PURE__*/ Space;

export type CreateSpacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a space. Can be used to create a named space, or a group chat in `Import mode`. For an example, see [Create a space](https://developers.google.com/workspace/chat/create-spaces). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.app.spaces.create` - `https://www.googleapis.com/auth/chat.app.spaces` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces.create` - `https://www.googleapis.com/auth/chat.spaces` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) When authenticating as an app, the `space.customer` field must be set in the request. When authenticating as an app, the Chat app is added as a member of the space. However, unlike human authentication, the Chat app is not added as a space manager. By default, the Chat app can be removed from the space by all space members. To allow only space managers to remove the app from a space, set `space.permission_settings.manage_apps` to `managers_allowed`. Space membership upon creation depends on whether the space is created in `Import mode`: * **Import mode:** No members are created. * **All other modes:** The calling user is added as a member. This is: * The app itself when using app authentication. * The human user when using user authentication. If you receive the error message `ALREADY_EXISTS` when creating a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. */
export const createSpaces: API.OperationMethod<
  CreateSpacesRequest,
  CreateSpacesResponse,
  CreateSpacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSpacesRequest,
  output: CreateSpacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSpacesMembersRequest {
  /** Required. Resource name of the membership to retrieve. To get the app's own membership [by using user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), you can optionally use `spaces/{space}/members/app`. Format: `spaces/{space}/members/{member}` or `spaces/{space}/members/app` You can use the user's email as an alias for `{member}`. For example, `spaces/{space}/members/example@gmail.com` where `example@gmail.com` is the email of the Google Chat user. */
  name: string;
  /** Optional. When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires the `chat.admin.memberships` or `chat.admin.memberships.readonly` [OAuth 2.0 scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes). Getting app memberships in a space isn't supported when using admin access. */
  useAdminAccess?: boolean;
}

export const GetSpacesMembersRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    useAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useAdminAccess"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetSpacesMembersRequest>;

export type GetSpacesMembersResponse = Membership;
export const GetSpacesMembersResponse = /*@__PURE__*/ Membership;

export type GetSpacesMembersError = DefaultErrors | NotFound | Forbidden;

/** Returns details about a membership. For an example, see [Get details about a user's or Google Chat app's membership](https://developers.google.com/workspace/chat/get-members). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.bot` - `https://www.googleapis.com/auth/chat.app.memberships` (requires [administrator approval](https://support.google.com/a?p=chat-app-auth)) - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.memberships.readonly` - `https://www.googleapis.com/auth/chat.memberships` - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and one of the following authorization scopes is used: - `https://www.googleapis.com/auth/chat.admin.memberships.readonly` - `https://www.googleapis.com/auth/chat.admin.memberships` */
export const getSpacesMembers: API.OperationMethod<
  GetSpacesMembersRequest,
  GetSpacesMembersResponse,
  GetSpacesMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSpacesMembersRequest,
  output: GetSpacesMembersResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateSpacesMembersRequest {
  /** Required. The resource name of the space for which to create the membership. Format: spaces/{space} */
  parent: string;
  /** Optional. When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires the `chat.admin.memberships` [OAuth 2.0 scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes). Creating app memberships or creating memberships for users outside the administrator's Google Workspace organization isn't supported using admin access. */
  useAdminAccess?: boolean;
  /** Request body */
  body?: Membership;
}

export const CreateSpacesMembersRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    useAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useAdminAccess"),
    ),
    body: Schema.optional(Membership).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/members", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateSpacesMembersRequest>;

export type CreateSpacesMembersResponse = Membership;
export const CreateSpacesMembersResponse = /*@__PURE__*/ Membership;

export type CreateSpacesMembersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a membership for the calling Chat app, a user, or a Google Group. Creating memberships for other Chat apps isn't supported. When creating a membership, if the specified member has their auto-accept policy turned off, then they're invited, and must accept the space invitation before joining. Otherwise, creating a membership adds the member directly to the specified space. Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope: - `https://www.googleapis.com/auth/chat.app.memberships` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.memberships` - `https://www.googleapis.com/auth/chat.memberships.app` (to add the calling app to the space) - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scope is used: - `https://www.googleapis.com/auth/chat.admin.memberships` App authentication is not supported for the following use cases: - Inviting users external to the Workspace organization that owns the space. - Adding a Google Group to a space. - Adding a Chat app to a space. For example usage, see: - [Invite or add a user to a space](https://developers.google.com/workspace/chat/create-members#create-user-membership). - [Invite or add a Google Group to a space](https://developers.google.com/workspace/chat/create-members#create-group-membership). - [Add the Chat app to a space](https://developers.google.com/workspace/chat/create-members#create-membership-calling-api). */
export const createSpacesMembers: API.OperationMethod<
  CreateSpacesMembersRequest,
  CreateSpacesMembersResponse,
  CreateSpacesMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSpacesMembersRequest,
  output: CreateSpacesMembersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchSpacesMembersRequest {
  /** Required. The field paths to update. Separate multiple values with commas or use `*` to update all field paths. Currently supported field paths: - `role` */
  updateMask?: string;
  /** Optional. When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires the `chat.admin.memberships` [OAuth 2.0 scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes). */
  useAdminAccess?: boolean;
  /** Identifier. Resource name of the membership, assigned by the server. Format: `spaces/{space}/members/{member}` */
  name: string;
  /** Request body */
  body?: Membership;
}

export const PatchSpacesMembersRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    useAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useAdminAccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Membership).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchSpacesMembersRequest>;

export type PatchSpacesMembersResponse = Membership;
export const PatchSpacesMembersResponse = /*@__PURE__*/ Membership;

export type PatchSpacesMembersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a membership. For an example, see [Update a user's membership in a space](https://developers.google.com/workspace/chat/update-members). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope: - `https://www.googleapis.com/auth/chat.app.memberships` (only in spaces the app created) - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.memberships` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scope is used: - `https://www.googleapis.com/auth/chat.admin.memberships` */
export const patchSpacesMembers: API.OperationMethod<
  PatchSpacesMembersRequest,
  PatchSpacesMembersResponse,
  PatchSpacesMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchSpacesMembersRequest,
  output: PatchSpacesMembersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteSpacesMembersRequest {
  /** Optional. When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires the `chat.admin.memberships` [OAuth 2.0 scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes). Deleting app memberships in a space isn't supported using admin access. */
  useAdminAccess?: boolean;
  /** Required. Resource name of the membership to delete. Chat apps can delete human users' or their own memberships. Chat apps can't delete other apps' memberships. When deleting a human membership, requires the `chat.memberships` scope with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) or the `chat.memberships.app` scope with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and the `spaces/{space}/members/{member}` format. You can use the email as an alias for `{member}`. For example, `spaces/{space}/members/example@gmail.com` where `example@gmail.com` is the email of the Google Chat user. When deleting an app membership, requires the `chat.memberships.app` scope and `spaces/{space}/members/app` format. Format: `spaces/{space}/members/{member}` or `spaces/{space}/members/app`. */
  name: string;
}

export const DeleteSpacesMembersRequest =
  /*@__PURE__*/ Schema.Struct({
    useAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useAdminAccess"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteSpacesMembersRequest>;

export type DeleteSpacesMembersResponse = Membership;
export const DeleteSpacesMembersResponse = /*@__PURE__*/ Membership;

export type DeleteSpacesMembersError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a membership. For an example, see [Remove a user or a Google Chat app from a space](https://developers.google.com/workspace/chat/delete-members). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope: - `https://www.googleapis.com/auth/chat.app.memberships` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.memberships` - `https://www.googleapis.com/auth/chat.memberships.app` (to remove the calling app from the space) - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scope is used: - `https://www.googleapis.com/auth/chat.admin.memberships` App authentication is not supported for the following use cases: - Removing a Google Group from a space. - Removing a Chat app from a space. To delete memberships for space managers, the requester must be a space manager. If you're using [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) the Chat app must be the space creator. */
export const deleteSpacesMembers: API.OperationMethod<
  DeleteSpacesMembersRequest,
  DeleteSpacesMembersResponse,
  DeleteSpacesMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSpacesMembersRequest,
  output: DeleteSpacesMembersResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListSpacesMembersRequest {
  /** Optional. A page token, received from a previous call to list memberships. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results. */
  pageToken?: string;
  /** Optional. A query filter. You can filter memberships by a member's role ([`role`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members#membershiprole)) and type ([`member.type`](https://developers.google.com/workspace/chat/api/reference/rest/v1/User#type)). To filter by role, set `role` to `ROLE_MEMBER` or `ROLE_MANAGER`. To filter by type, set `member.type` to `HUMAN` or `BOT`. You can also filter for `member.type` using the `!=` operator. To filter by both role and type, use the `AND` operator. To filter by either role or type, use the `OR` operator. Either `member.type = "HUMAN"` or `member.type != "BOT"` is required when `use_admin_access` is set to true. Other member type filters will be rejected. For example, the following queries are valid: ``` role = "ROLE_MANAGER" OR role = "ROLE_MEMBER" member.type = "HUMAN" AND role = "ROLE_MANAGER" member.type != "BOT" ``` The following queries are invalid: ``` member.type = "HUMAN" AND member.type = "BOT" role = "ROLE_MANAGER" AND role = "ROLE_MEMBER" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error. */
  filter?: string;
  /** Required. The resource name of the space for which to fetch a membership list. Format: spaces/{space} */
  parent: string;
  /** Optional. The maximum number of memberships to return. The service might return fewer than this value. If unspecified, at most 100 memberships are returned. The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000. Negative values return an `INVALID_ARGUMENT` error. */
  pageSize?: number;
  /** Optional. When `true`, also returns memberships associated with a Google Group, in addition to other types of memberships. If a filter is set, Google Group memberships that don't match the filter criteria aren't returned. */
  showGroups?: boolean;
  /** Optional. When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires either the `chat.admin.memberships.readonly` or `chat.admin.memberships` [OAuth 2.0 scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes). Listing app memberships in a space isn't supported when using admin access. */
  useAdminAccess?: boolean;
  /** Optional. When `true`, also returns memberships associated with invited members, in addition to other types of memberships. If a filter is set, invited memberships that don't match the filter criteria aren't returned. Currently requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). */
  showInvited?: boolean;
}

export const ListSpacesMembersRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    showGroups: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("showGroups")),
    useAdminAccess: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("useAdminAccess"),
    ),
    showInvited: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showInvited"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/members" }),
    svc,
  ) as unknown as Schema.Codec<ListSpacesMembersRequest>;

export type ListSpacesMembersResponse = ListMembershipsResponse;
export const ListSpacesMembersResponse = /*@__PURE__*/ ListMembershipsResponse;

export type ListSpacesMembersError = DefaultErrors | NotFound | Forbidden;

/** Lists memberships in a space. For an example, see [List users and Google Chat apps in a space](https://developers.google.com/workspace/chat/list-members). Listing memberships with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) lists memberships in spaces that the Chat app has access to, but excludes Chat app memberships, including its own. Listing memberships with [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) lists memberships in spaces that the authenticated user has access to. Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.bot` - `https://www.googleapis.com/auth/chat.app.memberships` (requires [administrator approval](https://support.google.com/a?p=chat-app-auth)) - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.memberships.readonly` - `https://www.googleapis.com/auth/chat.memberships` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and one of the following authorization scopes is used: - `https://www.googleapis.com/auth/chat.admin.memberships.readonly` - `https://www.googleapis.com/auth/chat.admin.memberships` */
export const listSpacesMembers: API.PaginatedOperationMethod<
  ListSpacesMembersRequest,
  ListSpacesMembersResponse,
  ListSpacesMembersError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSpacesMembersRequest,
  output: ListSpacesMembersResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetSpacesSpaceEventsRequest {
  /** Required. The resource name of the space event. Format: `spaces/{space}/spaceEvents/{spaceEvent}` */
  name: string;
}

export const GetSpacesSpaceEventsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetSpacesSpaceEventsRequest>;

export type GetSpacesSpaceEventsResponse = SpaceEvent;
export const GetSpacesSpaceEventsResponse = /*@__PURE__*/ SpaceEvent;

export type GetSpacesSpaceEventsError = DefaultErrors | NotFound | Forbidden;

/** Returns an event from a Google Chat space. The [event payload](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents#SpaceEvent.FIELDS.oneof_payload) contains the most recent version of the resource that changed. For example, if you request an event about a new message but the message was later updated, the server returns the updated `Message` resource in the event payload. Note: The `permissionSettings` field is not returned in the Space object of the Space event data for this request. Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize) with an [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes) appropriate for reading the requested data: - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.app.spaces` - `https://www.googleapis.com/auth/chat.app.spaces.readonly` - `https://www.googleapis.com/auth/chat.app.messages.readonly` - `https://www.googleapis.com/auth/chat.app.memberships` - `https://www.googleapis.com/auth/chat.app.memberships.readonly` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces.readonly` - `https://www.googleapis.com/auth/chat.spaces` - `https://www.googleapis.com/auth/chat.messages.readonly` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.messages.reactions.readonly` - `https://www.googleapis.com/auth/chat.messages.reactions` - `https://www.googleapis.com/auth/chat.memberships.readonly` - `https://www.googleapis.com/auth/chat.memberships` To get an event, the authenticated caller must be a member of the space. For an example, see [Get details about an event from a Google Chat space](https://developers.google.com/workspace/chat/get-space-event). */
export const getSpacesSpaceEvents: API.OperationMethod<
  GetSpacesSpaceEventsRequest,
  GetSpacesSpaceEventsResponse,
  GetSpacesSpaceEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSpacesSpaceEventsRequest,
  output: GetSpacesSpaceEventsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListSpacesSpaceEventsRequest {
  /** Required. A query filter. You must specify at least one event type (`event_type`) using the has `:` operator. To filter by multiple event types, use the `OR` operator. Omit batch event types in your filter. The request automatically returns any related batch events. For example, if you filter by new reactions (`google.workspace.chat.reaction.v1.created`), the server also returns batch new reactions events (`google.workspace.chat.reaction.v1.batchCreated`). For a list of supported event types, see the [`SpaceEvents` reference documentation](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents#SpaceEvent.FIELDS.event_type). Optionally, you can also filter by start time (`start_time`) and end time (`end_time`): * `start_time`: Exclusive timestamp from which to start listing space events. You can list events that occurred up to 28 days ago. If unspecified, lists space events from the past 28 days. * `end_time`: Inclusive timestamp until which space events are listed. If unspecified, lists events up to the time of the request. To specify a start or end time, use the equals `=` operator and format in [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339). To filter by both `start_time` and `end_time`, use the `AND` operator. For example, the following queries are valid: ``` start_time="2023-08-23T19:20:33+00:00" AND end_time="2023-08-23T19:21:54+00:00" ``` ``` start_time="2023-08-23T19:20:33+00:00" AND (event_types:"google.workspace.chat.space.v1.updated" OR event_types:"google.workspace.chat.message.v1.created") ``` The following queries are invalid: ``` start_time="2023-08-23T19:20:33+00:00" OR end_time="2023-08-23T19:21:54+00:00" ``` ``` event_types:"google.workspace.chat.space.v1.updated" AND event_types:"google.workspace.chat.message.v1.created" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error. */
  filter?: string;
  /** Required. Resource name of the [Google Chat space](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces) where the events occurred. Format: `spaces/{space}`. */
  parent: string;
  /** Optional. The maximum number of space events returned. The service might return fewer than this value. Negative values return an `INVALID_ARGUMENT` error. */
  pageSize?: number;
  /** Optional. A page token, received from a previous list space events call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to list space events must match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results. */
  pageToken?: string;
}

export const ListSpacesSpaceEventsRequest =
  /*@__PURE__*/ Schema.Struct({
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/spaceEvents" }),
    svc,
  ) as unknown as Schema.Codec<ListSpacesSpaceEventsRequest>;

export type ListSpacesSpaceEventsResponse = ListSpaceEventsResponse;
export const ListSpacesSpaceEventsResponse =
  /*@__PURE__*/ ListSpaceEventsResponse;

export type ListSpacesSpaceEventsError = DefaultErrors | NotFound | Forbidden;

/** Lists events from a Google Chat space. For each event, the [payload](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents#SpaceEvent.FIELDS.oneof_payload) contains the most recent version of the Chat resource. For example, if you list events about new space members, the server returns `Membership` resources that contain the latest membership details. If new members were removed during the requested period, the event payload contains an empty `Membership` resource. Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize) with an [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes) appropriate for reading the requested data: - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.app.spaces` - `https://www.googleapis.com/auth/chat.app.spaces.readonly` - `https://www.googleapis.com/auth/chat.app.messages.readonly` - `https://www.googleapis.com/auth/chat.app.memberships` - `https://www.googleapis.com/auth/chat.app.memberships.readonly` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces.readonly` - `https://www.googleapis.com/auth/chat.spaces` - `https://www.googleapis.com/auth/chat.messages.readonly` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.messages.reactions.readonly` - `https://www.googleapis.com/auth/chat.messages.reactions` - `https://www.googleapis.com/auth/chat.memberships.readonly` - `https://www.googleapis.com/auth/chat.memberships` To list events, the authenticated caller must be a member of the space. For an example, see [List events from a Google Chat space](https://developers.google.com/workspace/chat/list-space-events). */
export const listSpacesSpaceEvents: API.PaginatedOperationMethod<
  ListSpacesSpaceEventsRequest,
  ListSpacesSpaceEventsResponse,
  ListSpacesSpaceEventsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSpacesSpaceEventsRequest,
  output: ListSpacesSpaceEventsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface UpdateSpacesMessagesRequest {
  /** Optional. If `true` and the message isn't found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/workspace/chat/create-messages#name_a_created_message) or the request fails. */
  allowMissing?: boolean;
  /** Identifier. Resource name of the message. Format: `spaces/{space}/messages/{message}` Where `{space}` is the ID of the space where the message is posted and `{message}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/workspace/chat/create-messages#name_a_created_message). */
  name: string;
  /** Required. The field paths to update. Separate multiple values with commas or use `*` to update all field paths. Currently supported field paths: - `text` - `attachment` - `cards` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `cards_v2` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `accessory_widgets` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `quoted_message_metadata` (Only allows removal of the quoted message.) */
  updateMask?: string;
  /** Request body */
  body?: Message;
}

export const UpdateSpacesMessagesRequest =
  /*@__PURE__*/ Schema.Struct({
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Message).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PUT", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateSpacesMessagesRequest>;

export type UpdateSpacesMessagesResponse = Message;
export const UpdateSpacesMessagesResponse = /*@__PURE__*/ Message;

export type UpdateSpacesMessagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For an example, see [Update a message](https://developers.google.com/workspace/chat/update-messages). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope: - `https://www.googleapis.com/auth/chat.bot` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) When using app authentication, requests can only update messages created by the calling Chat app. */
export const updateSpacesMessages: API.OperationMethod<
  UpdateSpacesMessagesRequest,
  UpdateSpacesMessagesResponse,
  UpdateSpacesMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSpacesMessagesRequest,
  output: UpdateSpacesMessagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteSpacesMessagesRequest {
  /** Required. Resource name of the message. Format: `spaces/{space}/messages/{message}` If you've set a custom ID for your message, you can use the value from the `clientAssignedMessageId` field for `{message}`. For details, see [Name a message] (https://developers.google.com/workspace/chat/create-messages#name_a_created_message). */
  name: string;
  /** Optional. When `true`, deleting a message also deletes its threaded replies. When `false`, if a message has threaded replies, deletion fails. Only applies when [authenticating as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). Has no effect when [authenticating as a Chat app] (https://developers.google.com/workspace/chat/authenticate-authorize-chat-app). */
  force?: boolean;
}

export const DeleteSpacesMessagesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    force: Schema.optional(Schema.Boolean).pipe(T.HttpQuery("force")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteSpacesMessagesRequest>;

export type DeleteSpacesMessagesResponse = Empty;
export const DeleteSpacesMessagesResponse = /*@__PURE__*/ Empty;

export type DeleteSpacesMessagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a message. For an example, see [Delete a message](https://developers.google.com/workspace/chat/delete-messages). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope: - `https://www.googleapis.com/auth/chat.bot` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) When using app authentication, requests can only delete messages created by the calling Chat app. */
export const deleteSpacesMessages: API.OperationMethod<
  DeleteSpacesMessagesRequest,
  DeleteSpacesMessagesResponse,
  DeleteSpacesMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSpacesMessagesRequest,
  output: DeleteSpacesMessagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListSpacesMessagesRequest {
  /** Optional. A page token received from a previous list messages call. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results. */
  pageToken?: string;
  /** Optional. How the list of messages is ordered. Specify a value to order by an ordering operation. Valid ordering operation values are as follows: - `ASC` for ascending. - `DESC` for descending. The default ordering is `create_time ASC`. */
  orderBy?: string;
  /** Optional. A query filter. You can filter messages by date (`create_time`) and thread (`thread.name`). To filter messages by the date they were created, specify the `create_time` with a timestamp in [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339) format and double quotation marks. For example, `"2023-04-21T11:30:00-04:00"`. You can use the greater than operator `>` to list messages that were created after a timestamp, or the less than operator `<` to list messages that were created before a timestamp. To filter messages within a time interval, use the `AND` operator between two timestamps. To filter by thread, specify the `thread.name`, formatted as `spaces/{space}/threads/{thread}`. You can only specify one `thread.name` per query. To filter by both thread and date, use the `AND` operator in your query. For example, the following queries are valid: ``` create_time > "2012-04-21T11:30:00-04:00" create_time > "2012-04-21T11:30:00-04:00" AND thread.name = spaces/AAAAAAAAAAA/threads/123 create_time > "2012-04-21T11:30:00+00:00" AND create_time < "2013-01-01T00:00:00+00:00" AND thread.name = spaces/AAAAAAAAAAA/threads/123 thread.name = spaces/AAAAAAAAAAA/threads/123 ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error. */
  filter?: string;
  /** Required. The resource name of the space to list messages from. Format: `spaces/{space}` */
  parent: string;
  /** Optional. The maximum number of messages returned. The service might return fewer messages than this value. If unspecified, at most 25 are returned. The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000. Negative values return an `INVALID_ARGUMENT` error. */
  pageSize?: number;
  /** Optional. Whether to include deleted messages. Deleted messages include deleted time and metadata about their deletion, but message content is unavailable. */
  showDeleted?: boolean;
}

export const ListSpacesMessagesRequest =
  /*@__PURE__*/ Schema.Struct({
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    orderBy: Schema.optional(Schema.String).pipe(T.HttpQuery("orderBy")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    showDeleted: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("showDeleted"),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/messages" }),
    svc,
  ) as unknown as Schema.Codec<ListSpacesMessagesRequest>;

export type ListSpacesMessagesResponse = ListMessagesResponse;
export const ListSpacesMessagesResponse = /*@__PURE__*/ ListMessagesResponse;

export type ListSpacesMessagesError = DefaultErrors | NotFound | Forbidden;

/** Lists messages in a space that the caller is a member of, including messages from blocked members and spaces. System messages, like those announcing new space members, aren't included. If you list messages from a space with no messages, the response is an empty object. When using a REST/HTTP interface, the response contains an empty JSON object, `{}`. For an example, see [List messages](https://developers.google.com/workspace/chat/api/guides/v1/messages/list). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) with the authorization scope: - `https://www.googleapis.com/auth/chat.app.messages.readonly`. When using this authentication scope, this method only returns public messages in a space. It doesn't include private messages. - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.messages.readonly` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) */
export const listSpacesMessages: API.PaginatedOperationMethod<
  ListSpacesMessagesRequest,
  ListSpacesMessagesResponse,
  ListSpacesMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSpacesMessagesRequest,
  output: ListSpacesMessagesResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateSpacesMessagesRequest {
  /** Optional. Deprecated: Use thread.thread_key instead. ID for the thread. Supports up to 4000 characters. To start or add to a thread, create a message and specify a `threadKey` or the thread.name. For example usage, see [Start or reply to a message thread](https://developers.google.com/workspace/chat/create-messages#create-message-thread). */
  threadKey?: string;
  /** Optional. A unique request ID for this message. Specifying an existing request ID returns the message created with that ID instead of creating a new message. */
  requestId?: string;
  /** Optional. Specifies whether a message starts a thread or replies to one. Only supported in named spaces. When [responding to user interactions](https://developers.google.com/workspace/chat/receive-respond-interactions), this field is ignored. For interactions within a thread, the reply is created in the same thread. Otherwise, the reply is created as a new thread. */
  messageReplyOption?:
    | "MESSAGE_REPLY_OPTION_UNSPECIFIED"
    | "REPLY_MESSAGE_FALLBACK_TO_NEW_THREAD"
    | "REPLY_MESSAGE_OR_FAIL"
    | (string & {});
  /** Required. The resource name of the space in which to create a message. Format: `spaces/{space}` */
  parent: string;
  /** The notification type for the message. */
  "createMessageNotificationOptions.notificationType"?:
    | "NOTIFICATION_TYPE_NONE"
    | "NOTIFICATION_TYPE_FORCE_NOTIFY"
    | "NOTIFICATION_TYPE_SILENT"
    | (string & {});
  /** Optional. A custom ID for a message. Lets Chat apps get, update, or delete a message without needing to store the system-assigned ID in the message's resource name (represented in the message `name` field). The value for this field must meet the following requirements: * Begins with `client-`. For example, `client-custom-name` is a valid custom ID, but `custom-name` is not. * Contains up to 63 characters and only lowercase letters, numbers, and hyphens. * Is unique within a space. A Chat app can't use the same custom ID for different messages. For details, see [Name a message](https://developers.google.com/workspace/chat/create-messages#name_a_created_message). */
  messageId?: string;
  /** Request body */
  body?: Message;
}

export const CreateSpacesMessagesRequest =
  /*@__PURE__*/ Schema.Struct({
    threadKey: Schema.optional(Schema.String).pipe(T.HttpQuery("threadKey")),
    requestId: Schema.optional(Schema.String).pipe(T.HttpQuery("requestId")),
    messageReplyOption: Schema.optional(Schema.String).pipe(
      T.HttpQuery("messageReplyOption"),
    ),
    parent: Schema.String.pipe(T.HttpPath("parent")),
    "createMessageNotificationOptions.notificationType": Schema.optional(
      Schema.String,
    ).pipe(T.HttpQuery("createMessageNotificationOptions.notificationType")),
    messageId: Schema.optional(Schema.String).pipe(T.HttpQuery("messageId")),
    body: Schema.optional(Message).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/messages", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateSpacesMessagesRequest>;

export type CreateSpacesMessagesResponse = Message;
export const CreateSpacesMessagesResponse = /*@__PURE__*/ Message;

export type CreateSpacesMessagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a message in a Google Chat space. For an example, see [Send a message](https://developers.google.com/workspace/chat/create-messages). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope: - `https://www.googleapis.com/auth/chat.bot` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.messages.create` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) Chat attributes the message sender differently depending on the type of authentication that you use in your request. The following image shows how Chat attributes a message when you use app authentication. Chat displays the Chat app as the message sender. The content of the message can contain text (`text`), cards (`cardsV2`), and accessory widgets (`accessoryWidgets`). ![Message sent with app authentication](https://developers.google.com/workspace/chat/images/message-app-auth.svg) The following image shows how Chat attributes a message when you use user authentication. Chat displays the user as the message sender and attributes the Chat app to the message by displaying its name. The content of message can only contain text (`text`). ![Message sent with user authentication](https://developers.google.com/workspace/chat/images/message-user-auth.svg) The maximum message size, including the message contents, is 32,000 bytes. For [webhook](https://developers.google.com/workspace/chat/quickstart/webhooks) requests, the response doesn't contain the full message. The response only populates the `name` and `thread.name` fields in addition to the information that was in the request. */
export const createSpacesMessages: API.OperationMethod<
  CreateSpacesMessagesRequest,
  CreateSpacesMessagesResponse,
  CreateSpacesMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSpacesMessagesRequest,
  output: CreateSpacesMessagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSpacesMessagesRequest {
  /** Required. Resource name of the message. Format: `spaces/{space}/messages/{message}` If you've set a custom ID for your message, you can use the value from the `clientAssignedMessageId` field for `{message}`. For details, see [Name a message] (https://developers.google.com/workspace/chat/create-messages#name_a_created_message). */
  name: string;
}

export const GetSpacesMessagesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetSpacesMessagesRequest>;

export type GetSpacesMessagesResponse = Message;
export const GetSpacesMessagesResponse = /*@__PURE__*/ Message;

export type GetSpacesMessagesError = DefaultErrors | NotFound | Forbidden;

/** Returns details about a message. For an example, see [Get details about a message](https://developers.google.com/workspace/chat/get-messages). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.bot`: When using this authorization scope, this method returns details about a message the Chat app has access to, like direct messages and [slash commands](https://developers.google.com/workspace/chat/slash-commands) that invoke the Chat app. - `https://www.googleapis.com/auth/chat.app.messages.readonly` with [administrator approval](https://support.google.com/a?p=chat-app-auth). When using this authentication scope, this method returns details about a public message in a space. - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.messages.readonly` - `https://www.googleapis.com/auth/chat.messages` Note: Might return a message from a blocked member or space. */
export const getSpacesMessages: API.OperationMethod<
  GetSpacesMessagesRequest,
  GetSpacesMessagesResponse,
  GetSpacesMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSpacesMessagesRequest,
  output: GetSpacesMessagesResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchSpacesMessagesRequest {
  /** Identifier. Resource name of the message. Format: `spaces/{space}/messages/{message}` Where `{space}` is the ID of the space where the message is posted and `{message}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/workspace/chat/create-messages#name_a_created_message). */
  name: string;
  /** Optional. If `true` and the message isn't found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/workspace/chat/create-messages#name_a_created_message) or the request fails. */
  allowMissing?: boolean;
  /** Required. The field paths to update. Separate multiple values with commas or use `*` to update all field paths. Currently supported field paths: - `text` - `attachment` - `cards` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `cards_v2` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `accessory_widgets` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `quoted_message_metadata` (Only allows removal of the quoted message.) */
  updateMask?: string;
  /** Request body */
  body?: Message;
}

export const PatchSpacesMessagesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    allowMissing: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("allowMissing"),
    ),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(Message).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchSpacesMessagesRequest>;

export type PatchSpacesMessagesResponse = Message;
export const PatchSpacesMessagesResponse = /*@__PURE__*/ Message;

export type PatchSpacesMessagesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For an example, see [Update a message](https://developers.google.com/workspace/chat/update-messages). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope: - `https://www.googleapis.com/auth/chat.bot` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) When using app authentication, requests can only update messages created by the calling Chat app. */
export const patchSpacesMessages: API.OperationMethod<
  PatchSpacesMessagesRequest,
  PatchSpacesMessagesResponse,
  PatchSpacesMessagesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchSpacesMessagesRequest,
  output: PatchSpacesMessagesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetSpacesMessagesAttachmentsRequest {
  /** Required. Resource name of the attachment, in the form `spaces/{space}/messages/{message}/attachments/{attachment}`. */
  name: string;
}

export const GetSpacesMessagesAttachmentsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetSpacesMessagesAttachmentsRequest>;

export type GetSpacesMessagesAttachmentsResponse = Attachment;
export const GetSpacesMessagesAttachmentsResponse = /*@__PURE__*/ Attachment;

export type GetSpacesMessagesAttachmentsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the metadata of a message attachment. The attachment data is fetched using the [media API](https://developers.google.com/workspace/chat/api/reference/rest/v1/media/download). For an example, see [Get metadata about a message attachment](https://developers.google.com/workspace/chat/get-media-attachments). Requires [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.bot` */
export const getSpacesMessagesAttachments: API.OperationMethod<
  GetSpacesMessagesAttachmentsRequest,
  GetSpacesMessagesAttachmentsResponse,
  GetSpacesMessagesAttachmentsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSpacesMessagesAttachmentsRequest,
  output: GetSpacesMessagesAttachmentsResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListSpacesMessagesReactionsRequest {
  /** Required. The message users reacted to. Format: `spaces/{space}/messages/{message}` */
  parent: string;
  /** Optional. The maximum number of reactions returned. The service can return fewer reactions than this value. If unspecified, the default value is 25. The maximum value is 200; values above 200 are changed to 200. */
  pageSize?: number;
  /** Optional. (If resuming from a previous query.) A page token received from a previous list reactions call. Provide this to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results. */
  pageToken?: string;
  /** Optional. A query filter. You can filter reactions by [emoji](https://developers.google.com/workspace/chat/api/reference/rest/v1/Emoji) (either `emoji.unicode` or `emoji.custom_emoji.uid`) and [user](https://developers.google.com/workspace/chat/api/reference/rest/v1/User) (`user.name`). To filter reactions for multiple emojis or users, join similar fields with the `OR` operator, such as `emoji.unicode = "🙂" OR emoji.unicode = "👍"` and `user.name = "users/AAAAAA" OR user.name = "users/BBBBBB"`. To filter reactions by emoji and user, use the `AND` operator, such as `emoji.unicode = "🙂" AND user.name = "users/AAAAAA"`. If your query uses both `AND` and `OR`, group them with parentheses. For example, the following queries are valid: ``` user.name = "users/{user}" emoji.unicode = "🙂" emoji.custom_emoji.uid = "{uid}" emoji.unicode = "🙂" OR emoji.unicode = "👍" emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}" emoji.unicode = "🙂" AND user.name = "users/{user}" (emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}") AND user.name = "users/{user}" ``` The following queries are invalid: ``` emoji.unicode = "🙂" AND emoji.unicode = "👍" emoji.unicode = "🙂" AND emoji.custom_emoji.uid = "{uid}" emoji.unicode = "🙂" OR user.name = "users/{user}" emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}" OR user.name = "users/{user}" emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}" AND user.name = "users/{user}" ``` Invalid queries are rejected with an `INVALID_ARGUMENT` error. */
  filter?: string;
}

export const ListSpacesMessagesReactionsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/reactions" }),
    svc,
  ) as unknown as Schema.Codec<ListSpacesMessagesReactionsRequest>;

export type ListSpacesMessagesReactionsResponse = ListReactionsResponse;
export const ListSpacesMessagesReactionsResponse =
  /*@__PURE__*/ ListReactionsResponse;

export type ListSpacesMessagesReactionsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Lists reactions to a message. For an example, see [List reactions for a message](https://developers.google.com/workspace/chat/list-reactions). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.messages.reactions.readonly` - `https://www.googleapis.com/auth/chat.messages.reactions` - `https://www.googleapis.com/auth/chat.messages.readonly` - `https://www.googleapis.com/auth/chat.messages` */
export const listSpacesMessagesReactions: API.PaginatedOperationMethod<
  ListSpacesMessagesReactionsRequest,
  ListSpacesMessagesReactionsResponse,
  ListSpacesMessagesReactionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListSpacesMessagesReactionsRequest,
  output: ListSpacesMessagesReactionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface CreateSpacesMessagesReactionsRequest {
  /** Required. The message where the reaction is created. Format: `spaces/{space}/messages/{message}` */
  parent: string;
  /** Request body */
  body?: Reaction;
}

export const CreateSpacesMessagesReactionsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(Reaction).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/reactions", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateSpacesMessagesReactionsRequest>;

export type CreateSpacesMessagesReactionsResponse = Reaction;
export const CreateSpacesMessagesReactionsResponse = /*@__PURE__*/ Reaction;

export type CreateSpacesMessagesReactionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a reaction and adds it to a message. For an example, see [Add a reaction to a message](https://developers.google.com/workspace/chat/create-reactions). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.messages.reactions.create` - `https://www.googleapis.com/auth/chat.messages.reactions` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) */
export const createSpacesMessagesReactions: API.OperationMethod<
  CreateSpacesMessagesReactionsRequest,
  CreateSpacesMessagesReactionsResponse,
  CreateSpacesMessagesReactionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateSpacesMessagesReactionsRequest,
  output: CreateSpacesMessagesReactionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface DeleteSpacesMessagesReactionsRequest {
  /** Required. Name of the reaction to delete. Format: `spaces/{space}/messages/{message}/reactions/{reaction}` */
  name: string;
}

export const DeleteSpacesMessagesReactionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteSpacesMessagesReactionsRequest>;

export type DeleteSpacesMessagesReactionsResponse = Empty;
export const DeleteSpacesMessagesReactionsResponse = /*@__PURE__*/ Empty;

export type DeleteSpacesMessagesReactionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a reaction to a message. For an example, see [Delete a reaction](https://developers.google.com/workspace/chat/delete-reactions). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.messages.reactions` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) */
export const deleteSpacesMessagesReactions: API.OperationMethod<
  DeleteSpacesMessagesReactionsRequest,
  DeleteSpacesMessagesReactionsResponse,
  DeleteSpacesMessagesReactionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteSpacesMessagesReactionsRequest,
  output: DeleteSpacesMessagesReactionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface CreateCustomEmojisRequest {
  /** Request body */
  body?: CustomEmoji;
}

export const CreateCustomEmojisRequest =
  /*@__PURE__*/ Schema.Struct({
    body: Schema.optional(CustomEmoji).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/customEmojis", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateCustomEmojisRequest>;

export type CreateCustomEmojisResponse = CustomEmoji;
export const CreateCustomEmojisResponse = /*@__PURE__*/ CustomEmoji;

export type CreateCustomEmojisError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a custom emoji. Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.customemojis` */
export const createCustomEmojis: API.OperationMethod<
  CreateCustomEmojisRequest,
  CreateCustomEmojisResponse,
  CreateCustomEmojisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateCustomEmojisRequest,
  output: CreateCustomEmojisResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetCustomEmojisRequest {
  /** Required. Resource name of the custom emoji. Format: `customEmojis/{customEmoji}` You can use the emoji name as an alias for `{customEmoji}`. For example, `customEmojis/:example-emoji:` where `:example-emoji:` is the emoji name for a custom emoji. */
  name: string;
}

export const GetCustomEmojisRequest = /*@__PURE__*/ Schema.Struct({
  name: Schema.String.pipe(T.HttpPath("name")),
}).pipe(
  T.Http({ method: "GET", path: "v1/{+name}" }),
  svc,
) as unknown as Schema.Codec<GetCustomEmojisRequest>;

export type GetCustomEmojisResponse = CustomEmoji;
export const GetCustomEmojisResponse = /*@__PURE__*/ CustomEmoji;

export type GetCustomEmojisError = DefaultErrors | NotFound | Forbidden;

/** Returns details about a custom emoji. Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.customemojis.readonly` - `https://www.googleapis.com/auth/chat.customemojis` */
export const getCustomEmojis: API.OperationMethod<
  GetCustomEmojisRequest,
  GetCustomEmojisResponse,
  GetCustomEmojisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetCustomEmojisRequest,
  output: GetCustomEmojisResponse,
  errors: [NotFound, Forbidden],
}));

export interface DeleteCustomEmojisRequest {
  /** Required. Resource name of the custom emoji to delete. Format: `customEmojis/{customEmoji}` You can use the emoji name as an alias for `{customEmoji}`. For example, `customEmojis/:example-emoji:` where `:example-emoji:` is the emoji name for a custom emoji. */
  name: string;
}

export const DeleteCustomEmojisRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteCustomEmojisRequest>;

export type DeleteCustomEmojisResponse = Empty;
export const DeleteCustomEmojisResponse = /*@__PURE__*/ Empty;

export type DeleteCustomEmojisError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a custom emoji. By default, users can only delete custom emoji they created. [Emoji managers](https://support.google.com/a/answer/12850085) assigned by the administrator can delete any custom emoji in the organization. See [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149). Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.customemojis` */
export const deleteCustomEmojis: API.OperationMethod<
  DeleteCustomEmojisRequest,
  DeleteCustomEmojisResponse,
  DeleteCustomEmojisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteCustomEmojisRequest,
  output: DeleteCustomEmojisResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListCustomEmojisRequest {
  /** Optional. The maximum number of custom emojis returned. The service can return fewer custom emojis than this value. If unspecified, the default value is 25. The maximum value is 200; values above 200 are changed to 200. */
  pageSize?: number;
  /** Optional. (If resuming from a previous query.) A page token received from a previous list custom emoji call. Provide this to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results. */
  pageToken?: string;
  /** Optional. A query filter. Supports filtering by creator. To filter by creator, you must specify a valid value. Currently only `creator("users/me")` and `NOT creator("users/me")` are accepted to filter custom emojis by whether they were created by the calling user or not. For example, the following query returns custom emojis created by the caller: ``` creator("users/me") ``` Invalid queries are rejected with an `INVALID_ARGUMENT` error. */
  filter?: string;
}

export const ListCustomEmojisRequest =
  /*@__PURE__*/ Schema.Struct({
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/customEmojis" }),
    svc,
  ) as unknown as Schema.Codec<ListCustomEmojisRequest>;

export type ListCustomEmojisResponse_Op = ListCustomEmojisResponse;
export const ListCustomEmojisResponse_Op =
  /*@__PURE__*/ ListCustomEmojisResponse;

export type ListCustomEmojisError = DefaultErrors | NotFound | Forbidden;

/** Lists custom emojis visible to the authenticated user. Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.customemojis.readonly` - `https://www.googleapis.com/auth/chat.customemojis` */
export const listCustomEmojis: API.PaginatedOperationMethod<
  ListCustomEmojisRequest,
  ListCustomEmojisResponse_Op,
  ListCustomEmojisError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListCustomEmojisRequest,
  output: ListCustomEmojisResponse_Op,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface GetSpaceReadStateUsersSpacesRequest {
  /** Required. Resource name of the space read state to retrieve. Only supports getting read state for the calling user. To refer to the calling user, set one of the following: - The `me` alias. For example, `users/me/spaces/{space}/spaceReadState`. - Their Workspace email address. For example, `users/user@example.com/spaces/{space}/spaceReadState`. - Their user id. For example, `users/123456789/spaces/{space}/spaceReadState`. Format: users/{user}/spaces/{space}/spaceReadState */
  name: string;
}

export const GetSpaceReadStateUsersSpacesRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetSpaceReadStateUsersSpacesRequest>;

export type GetSpaceReadStateUsersSpacesResponse = SpaceReadState;
export const GetSpaceReadStateUsersSpacesResponse =
  /*@__PURE__*/ SpaceReadState;

export type GetSpaceReadStateUsersSpacesError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns details about a user's read state within a space, used to identify read and unread messages. For an example, see [Get details about a user's space read state](https://developers.google.com/workspace/chat/get-space-read-state). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.readstate.readonly` - `https://www.googleapis.com/auth/chat.users.readstate` */
export const getSpaceReadStateUsersSpaces: API.OperationMethod<
  GetSpaceReadStateUsersSpacesRequest,
  GetSpaceReadStateUsersSpacesResponse,
  GetSpaceReadStateUsersSpacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetSpaceReadStateUsersSpacesRequest,
  output: GetSpaceReadStateUsersSpacesResponse,
  errors: [NotFound, Forbidden],
}));

export interface UpdateSpaceReadStateUsersSpacesRequest {
  /** Required. The field paths to update. Currently supported field paths: - `last_read_time` When the `last_read_time` is before the latest message create time, the space appears as unread in the UI. To mark the space as read, set `last_read_time` to any value later (larger) than the latest message create time. The `last_read_time` is coerced to match the latest message create time. Note that the space read state only affects the read state of messages that are visible in the space's top-level conversation. Replies in threads are unaffected by this timestamp, and instead rely on the thread read state. */
  updateMask?: string;
  /** Resource name of the space read state. Format: `users/{user}/spaces/{space}/spaceReadState` */
  name: string;
  /** Request body */
  body?: SpaceReadState;
}

export const UpdateSpaceReadStateUsersSpacesRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(SpaceReadState).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateSpaceReadStateUsersSpacesRequest>;

export type UpdateSpaceReadStateUsersSpacesResponse = SpaceReadState;
export const UpdateSpaceReadStateUsersSpacesResponse =
  /*@__PURE__*/ SpaceReadState;

export type UpdateSpaceReadStateUsersSpacesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a user's read state within a space, used to identify read and unread messages. For an example, see [Update a user's space read state](https://developers.google.com/workspace/chat/update-space-read-state). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.readstate` */
export const updateSpaceReadStateUsersSpaces: API.OperationMethod<
  UpdateSpaceReadStateUsersSpacesRequest,
  UpdateSpaceReadStateUsersSpacesResponse,
  UpdateSpaceReadStateUsersSpacesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateSpaceReadStateUsersSpacesRequest,
  output: UpdateSpaceReadStateUsersSpacesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetThreadReadStateUsersSpacesThreadsRequest {
  /** Required. Resource name of the thread read state to retrieve. Only supports getting read state for the calling user. To refer to the calling user, set one of the following: - The `me` alias. For example, `users/me/spaces/{space}/threads/{thread}/threadReadState`. - Their Workspace email address. For example, `users/user@example.com/spaces/{space}/threads/{thread}/threadReadState`. - Their user id. For example, `users/123456789/spaces/{space}/threads/{thread}/threadReadState`. Format: users/{user}/spaces/{space}/threads/{thread}/threadReadState */
  name: string;
}

export const GetThreadReadStateUsersSpacesThreadsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetThreadReadStateUsersSpacesThreadsRequest>;

export type GetThreadReadStateUsersSpacesThreadsResponse = ThreadReadState;
export const GetThreadReadStateUsersSpacesThreadsResponse =
  /*@__PURE__*/ ThreadReadState;

export type GetThreadReadStateUsersSpacesThreadsError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns details about a user's read state within a thread, used to identify read and unread messages. For an example, see [Get details about a user's thread read state](https://developers.google.com/workspace/chat/get-thread-read-state). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.readstate.readonly` - `https://www.googleapis.com/auth/chat.users.readstate` */
export const getThreadReadStateUsersSpacesThreads: API.OperationMethod<
  GetThreadReadStateUsersSpacesThreadsRequest,
  GetThreadReadStateUsersSpacesThreadsResponse,
  GetThreadReadStateUsersSpacesThreadsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetThreadReadStateUsersSpacesThreadsRequest,
  output: GetThreadReadStateUsersSpacesThreadsResponse,
  errors: [NotFound, Forbidden],
}));

export interface GetUsersSpacesSpaceNotificationSettingRequest {
  /** Required. Format: users/{user}/spaces/{space}/spaceNotificationSetting - `users/me/spaces/{space}/spaceNotificationSetting`, OR - `users/user@example.com/spaces/{space}/spaceNotificationSetting`, OR - `users/123456789/spaces/{space}/spaceNotificationSetting`. Note: Only the caller's user id or email is allowed in the path. */
  name: string;
}

export const GetUsersSpacesSpaceNotificationSettingRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetUsersSpacesSpaceNotificationSettingRequest>;

export type GetUsersSpacesSpaceNotificationSettingResponse =
  SpaceNotificationSetting;
export const GetUsersSpacesSpaceNotificationSettingResponse =
  /*@__PURE__*/ SpaceNotificationSetting;

export type GetUsersSpacesSpaceNotificationSettingError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Gets the space notification setting. For an example, see [Get the caller's space notification setting](https://developers.google.com/workspace/chat/get-space-notification-setting). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.spacesettings` */
export const getUsersSpacesSpaceNotificationSetting: API.OperationMethod<
  GetUsersSpacesSpaceNotificationSettingRequest,
  GetUsersSpacesSpaceNotificationSettingResponse,
  GetUsersSpacesSpaceNotificationSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetUsersSpacesSpaceNotificationSettingRequest,
  output: GetUsersSpacesSpaceNotificationSettingResponse,
  errors: [NotFound, Forbidden],
}));

export interface PatchUsersSpacesSpaceNotificationSettingRequest {
  /** Identifier. The resource name of the space notification setting. Format: `users/{user}/spaces/{space}/spaceNotificationSetting`. */
  name: string;
  /** Required. Supported field paths: - `notification_setting` - `mute_setting` */
  updateMask?: string;
  /** Request body */
  body?: SpaceNotificationSetting;
}

export const PatchUsersSpacesSpaceNotificationSettingRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(SpaceNotificationSetting).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchUsersSpacesSpaceNotificationSettingRequest>;

export type PatchUsersSpacesSpaceNotificationSettingResponse =
  SpaceNotificationSetting;
export const PatchUsersSpacesSpaceNotificationSettingResponse =
  /*@__PURE__*/ SpaceNotificationSetting;

export type PatchUsersSpacesSpaceNotificationSettingError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates the space notification setting. For an example, see [Update the caller's space notification setting](https://developers.google.com/workspace/chat/update-space-notification-setting). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.spacesettings` */
export const patchUsersSpacesSpaceNotificationSetting: API.OperationMethod<
  PatchUsersSpacesSpaceNotificationSettingRequest,
  PatchUsersSpacesSpaceNotificationSettingResponse,
  PatchUsersSpacesSpaceNotificationSettingError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchUsersSpacesSpaceNotificationSettingRequest,
  output: PatchUsersSpacesSpaceNotificationSettingResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkAsActiveUsersAvailabilityRequest {
  /** Required. The resource name of the availability to mark as active. Format: users/{user}/availability `{user}` is the id for the Person in the People API or Admin SDK directory API. For example, `users/123456789`. The user's email address or `me` can also be used as an alias to refer to the caller. For example, `users/user@example.com` or `users/me`. */
  name: string;
  /** Request body */
  body?: MarkAsActiveRequest;
}

export const MarkAsActiveUsersAvailabilityRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MarkAsActiveRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markAsActive", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<MarkAsActiveUsersAvailabilityRequest>;

export type MarkAsActiveUsersAvailabilityResponse = Availability;
export const MarkAsActiveUsersAvailabilityResponse = /*@__PURE__*/ Availability;

export type MarkAsActiveUsersAvailabilityError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks user as `ACTIVE` in Google Chat. Sets the user's availability state to `ACTIVE`. The `ACTIVE` state lasts until the specified expiration, at which point the user's state becomes `AWAY`. Note that if the user is actively using Chat, the `ACTIVE` state duration may extend beyond the provided expiration. This method only updates the authenticated user's availability. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.availability` */
export const markAsActiveUsersAvailability: API.OperationMethod<
  MarkAsActiveUsersAvailabilityRequest,
  MarkAsActiveUsersAvailabilityResponse,
  MarkAsActiveUsersAvailabilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: MarkAsActiveUsersAvailabilityRequest,
  output: MarkAsActiveUsersAvailabilityResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkAsDoNotDisturbUsersAvailabilityRequest {
  /** Required. The resource name of the availability to mark as Do Not Disturb. Format: users/{user}/availability `{user}` is the id for the Person in the People API or Admin SDK directory API. For example, `users/123456789`. The user's email address or `me` can also be used as an alias to refer to the caller. For example, `users/user@example.com` or `users/me`. */
  name: string;
  /** Request body */
  body?: MarkAsDoNotDisturbRequest;
}

export const MarkAsDoNotDisturbUsersAvailabilityRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MarkAsDoNotDisturbRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v1/{+name}:markAsDoNotDisturb",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Codec<MarkAsDoNotDisturbUsersAvailabilityRequest>;

export type MarkAsDoNotDisturbUsersAvailabilityResponse = Availability;
export const MarkAsDoNotDisturbUsersAvailabilityResponse =
  /*@__PURE__*/ Availability;

export type MarkAsDoNotDisturbUsersAvailabilityError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks user as`DO_NOT_DISTURB` in Google Chat. Sets a user's availability state to `DO_NOT_DISTURB` until a specified expiration time. When in `DO_NOT_DISTURB`, users typically won't receive notifications. This method only updates the authenticated user's availability. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.availability` */
export const markAsDoNotDisturbUsersAvailability: API.OperationMethod<
  MarkAsDoNotDisturbUsersAvailabilityRequest,
  MarkAsDoNotDisturbUsersAvailabilityResponse,
  MarkAsDoNotDisturbUsersAvailabilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: MarkAsDoNotDisturbUsersAvailabilityRequest,
  output: MarkAsDoNotDisturbUsersAvailabilityResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface MarkAsAwayUsersAvailabilityRequest {
  /** Required. The resource name of the availability to mark as away. Format: users/{user}/availability `{user}` is the id for the Person in the People API or Admin SDK directory API. For example, `users/123456789`. The user's email address or `me` can also be used as an alias to refer to the caller. For example, `users/user@example.com` or `users/me`. */
  name: string;
  /** Request body */
  body?: MarkAsAwayRequest;
}

export const MarkAsAwayUsersAvailabilityRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MarkAsAwayRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:markAsAway", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<MarkAsAwayUsersAvailabilityRequest>;

export type MarkAsAwayUsersAvailabilityResponse = Availability;
export const MarkAsAwayUsersAvailabilityResponse = /*@__PURE__*/ Availability;

export type MarkAsAwayUsersAvailabilityError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Marks user as `AWAY` in Google Chat. Sets the user's state to away and is not affected by the user's activity. This method only updates the authenticated user's availability. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.availability` */
export const markAsAwayUsersAvailability: API.OperationMethod<
  MarkAsAwayUsersAvailabilityRequest,
  MarkAsAwayUsersAvailabilityResponse,
  MarkAsAwayUsersAvailabilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: MarkAsAwayUsersAvailabilityRequest,
  output: MarkAsAwayUsersAvailabilityResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface UpdateAvailabilityUsersAvailabilityRequest {
  /** Required. The list of fields to update. The only field that can be updated is `custom_status`. */
  updateMask?: string;
  /** Identifier. Resource name of the user's availability. Format: `users/{user}/availability` `{user}` is the id for the Person in the People API or Admin SDK directory API. For example, `users/123456789`. The user's email address or `me` can also be used as an alias to refer to the caller. For example, `users/user@example.com` or `users/me`. */
  name: string;
  /** Request body */
  body?: Availability;
}

export const UpdateAvailabilityUsersAvailabilityRequest =
  /*@__PURE__*/ Schema.Struct({
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(Availability).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<UpdateAvailabilityUsersAvailabilityRequest>;

export type UpdateAvailabilityUsersAvailabilityResponse = Availability;
export const UpdateAvailabilityUsersAvailabilityResponse =
  /*@__PURE__*/ Availability;

export type UpdateAvailabilityUsersAvailabilityError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates availability information for a human user. Only the `custom_status` field can be updated through this method. This method only updates the authenticated user's availability. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.availability` */
export const updateAvailabilityUsersAvailability: API.OperationMethod<
  UpdateAvailabilityUsersAvailabilityRequest,
  UpdateAvailabilityUsersAvailabilityResponse,
  UpdateAvailabilityUsersAvailabilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: UpdateAvailabilityUsersAvailabilityRequest,
  output: UpdateAvailabilityUsersAvailabilityResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetAvailabilityUsersAvailabilityRequest {
  /** Required. The resource name of the availability to retrieve. Format: users/{user}/availability `{user}` is the id for the Person in the People API or Admin SDK directory API. For example, `users/123456789`. The user's email address or `me` can also be used as an alias to refer to the caller. For example, `users/user@example.com` or `users/me`. */
  name: string;
}

export const GetAvailabilityUsersAvailabilityRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<GetAvailabilityUsersAvailabilityRequest>;

export type GetAvailabilityUsersAvailabilityResponse = Availability;
export const GetAvailabilityUsersAvailabilityResponse =
  /*@__PURE__*/ Availability;

export type GetAvailabilityUsersAvailabilityError =
  | DefaultErrors
  | NotFound
  | Forbidden;

/** Returns availability information for a human user in Google Chat. For example, this can be used to check if a user is online or away, or to retrieve their custom status message. This method only retrieves the authenticated user's availability. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.availability.readonly` - `https://www.googleapis.com/auth/chat.users.availability` */
export const getAvailabilityUsersAvailability: API.OperationMethod<
  GetAvailabilityUsersAvailabilityRequest,
  GetAvailabilityUsersAvailabilityResponse,
  GetAvailabilityUsersAvailabilityError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetAvailabilityUsersAvailabilityRequest,
  output: GetAvailabilityUsersAvailabilityResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateUsersSectionsRequest {
  /** Required. The parent resource name where the section is created. Format: `users/{user}` */
  parent: string;
  /** Request body */
  body?: GoogleChatV1Section;
}

export const CreateUsersSectionsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    body: Schema.optional(GoogleChatV1Section).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+parent}/sections", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<CreateUsersSectionsRequest>;

export type CreateUsersSectionsResponse = GoogleChatV1Section;
export const CreateUsersSectionsResponse = /*@__PURE__*/ GoogleChatV1Section;

export type CreateUsersSectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Creates a section in Google Chat. Sections help users group conversations and customize the list of spaces displayed in Chat navigation panel. Only sections of type `CUSTOM_SECTION` can be created. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.sections` */
export const createUsersSections: API.OperationMethod<
  CreateUsersSectionsRequest,
  CreateUsersSectionsResponse,
  CreateUsersSectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateUsersSectionsRequest,
  output: CreateUsersSectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PatchUsersSectionsRequest {
  /** Identifier. Resource name of the section. For system sections, the section ID is a constant string: - DEFAULT_DIRECT_MESSAGES: `users/{user}/sections/default-direct-messages` - DEFAULT_SPACES: `users/{user}/sections/default-spaces` - DEFAULT_APPS: `users/{user}/sections/default-apps` Format: `users/{user}/sections/{section}` */
  name: string;
  /** Required. The mask to specify which fields to update. Currently supported field paths: - `display_name` */
  updateMask?: string;
  /** Request body */
  body?: GoogleChatV1Section;
}

export const PatchUsersSectionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    updateMask: Schema.optional(Schema.String).pipe(T.HttpQuery("updateMask")),
    body: Schema.optional(GoogleChatV1Section).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "PATCH", path: "v1/{+name}", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PatchUsersSectionsRequest>;

export type PatchUsersSectionsResponse = GoogleChatV1Section;
export const PatchUsersSectionsResponse = /*@__PURE__*/ GoogleChatV1Section;

export type PatchUsersSectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Updates a section. Only sections of type `CUSTOM_SECTION` can be updated. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.sections` */
export const patchUsersSections: API.OperationMethod<
  PatchUsersSectionsRequest,
  PatchUsersSectionsResponse,
  PatchUsersSectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PatchUsersSectionsRequest,
  output: PatchUsersSectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface PositionUsersSectionsRequest {
  /** Required. The resource name of the section to position. Format: `users/{user}/sections/{section}` */
  name: string;
  /** Request body */
  body?: PositionSectionRequest;
}

export const PositionUsersSectionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(PositionSectionRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:position", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<PositionUsersSectionsRequest>;

export type PositionUsersSectionsResponse = PositionSectionResponse;
export const PositionUsersSectionsResponse =
  /*@__PURE__*/ PositionSectionResponse;

export type PositionUsersSectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Changes the sort order of a section. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.sections` */
export const positionUsersSections: API.OperationMethod<
  PositionUsersSectionsRequest,
  PositionUsersSectionsResponse,
  PositionUsersSectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: PositionUsersSectionsRequest,
  output: PositionUsersSectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListUsersSectionsRequest {
  /** Required. The parent, which is the user resource name that owns this collection of sections. Only supports listing sections for the calling user. To refer to the calling user, set one of the following: - The `me` alias. For example, `users/me`. - Their Workspace email address. For example, `users/user@example.com`. - Their user id. For example, `users/123456789`. Format: `users/{user}` */
  parent: string;
  /** Optional. The maximum number of sections to return. The service may return fewer than this value. If unspecified, at most 10 sections will be returned. The maximum value is 100. If you use a value more than 100, it's automatically changed to 100. Negative values return an `INVALID_ARGUMENT` error. */
  pageSize?: number;
  /** Optional. A page token, received from a previous list sections call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results. */
  pageToken?: string;
}

export const ListUsersSectionsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/sections" }),
    svc,
  ) as unknown as Schema.Codec<ListUsersSectionsRequest>;

export type ListUsersSectionsResponse = ListSectionsResponse;
export const ListUsersSectionsResponse = /*@__PURE__*/ ListSectionsResponse;

export type ListUsersSectionsError = DefaultErrors | NotFound | Forbidden;

/** Lists sections available to the Chat user. Sections help users group their conversations and customize the list of spaces displayed in Chat navigation panel. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.sections` - `https://www.googleapis.com/auth/chat.users.sections.readonly` */
export const listUsersSections: API.PaginatedOperationMethod<
  ListUsersSectionsRequest,
  ListUsersSectionsResponse,
  ListUsersSectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUsersSectionsRequest,
  output: ListUsersSectionsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface DeleteUsersSectionsRequest {
  /** Required. The name of the section to delete. Format: `users/{user}/sections/{section}` */
  name: string;
}

export const DeleteUsersSectionsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
  }).pipe(
    T.Http({ method: "DELETE", path: "v1/{+name}" }),
    svc,
  ) as unknown as Schema.Codec<DeleteUsersSectionsRequest>;

export type DeleteUsersSectionsResponse = Empty;
export const DeleteUsersSectionsResponse = /*@__PURE__*/ Empty;

export type DeleteUsersSectionsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Deletes a section of type `CUSTOM_SECTION`. If the section contains items, such as spaces, the items are moved to Google Chat's default sections and are not deleted. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.sections` */
export const deleteUsersSections: API.OperationMethod<
  DeleteUsersSectionsRequest,
  DeleteUsersSectionsResponse,
  DeleteUsersSectionsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DeleteUsersSectionsRequest,
  output: DeleteUsersSectionsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface ListUsersSectionsItemsRequest {
  /** Required. The parent, which is the section resource name that owns this collection of section items. Only supports listing section items for the calling user. When you're filtering by space, use the wildcard `-` to search across all sections. For example, `users/{user}/sections/-`. Format: `users/{user}/sections/{section}` */
  parent: string;
  /** Optional. The maximum number of section items to return. The service may return fewer than this value. If unspecified, at most 10 section items will be returned. The maximum value is 100. If you use a value more than 100, it's automatically changed to 100. Negative values return an `INVALID_ARGUMENT` error. */
  pageSize?: number;
  /** Optional. A page token, received from a previous list section items call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results. */
  pageToken?: string;
  /** Optional. A query filter. Currently only supports filtering by space. For example, `space = spaces/{space}`. Invalid queries are rejected with an `INVALID_ARGUMENT` error. */
  filter?: string;
}

export const ListUsersSectionsItemsRequest =
  /*@__PURE__*/ Schema.Struct({
    parent: Schema.String.pipe(T.HttpPath("parent")),
    pageSize: Schema.optional(Schema.Number).pipe(T.HttpQuery("pageSize")),
    pageToken: Schema.optional(Schema.String).pipe(T.HttpQuery("pageToken")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  }).pipe(
    T.Http({ method: "GET", path: "v1/{+parent}/items" }),
    svc,
  ) as unknown as Schema.Codec<ListUsersSectionsItemsRequest>;

export type ListUsersSectionsItemsResponse = ListSectionItemsResponse;
export const ListUsersSectionsItemsResponse =
  /*@__PURE__*/ ListSectionItemsResponse;

export type ListUsersSectionsItemsError = DefaultErrors | NotFound | Forbidden;

/** Lists items in a section. Only spaces can be section items. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.sections` - `https://www.googleapis.com/auth/chat.users.sections.readonly` */
export const listUsersSectionsItems: API.PaginatedOperationMethod<
  ListUsersSectionsItemsRequest,
  ListUsersSectionsItemsResponse,
  ListUsersSectionsItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.makePaginated(() => ({
  input: ListUsersSectionsItemsRequest,
  output: ListUsersSectionsItemsResponse,
  errors: [NotFound, Forbidden],
  pagination: {
    inputToken: "pageToken",
    outputToken: "nextPageToken",
  },
}));

export interface MoveUsersSectionsItemsRequest {
  /** Required. The resource name of the section item to move. Format: `users/{user}/sections/{section}/items/{item}` */
  name: string;
  /** Request body */
  body?: MoveSectionItemRequest;
}

export const MoveUsersSectionsItemsRequest =
  /*@__PURE__*/ Schema.Struct({
    name: Schema.String.pipe(T.HttpPath("name")),
    body: Schema.optional(MoveSectionItemRequest).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v1/{+name}:move", hasBody: true }),
    svc,
  ) as unknown as Schema.Codec<MoveUsersSectionsItemsRequest>;

export type MoveUsersSectionsItemsResponse = MoveSectionItemResponse;
export const MoveUsersSectionsItemsResponse =
  /*@__PURE__*/ MoveSectionItemResponse;

export type MoveUsersSectionsItemsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Moves an item from one section to another. For example, if a section contains spaces, this method can be used to move a space to a different section. For details, see [Create and organize sections in Google Chat](https://support.google.com/chat/answer/16059854). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.sections` */
export const moveUsersSectionsItems: API.OperationMethod<
  MoveUsersSectionsItemsRequest,
  MoveUsersSectionsItemsResponse,
  MoveUsersSectionsItemsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: MoveUsersSectionsItemsRequest,
  output: MoveUsersSectionsItemsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
