// ==========================================================================
// Web Fonts Developer API (webfonts v1)
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
  name: "webfonts",
  version: "v1",
  rootUrl: "https://webfonts.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Axis {
  /** maximum value */
  end?: number;
  /** tag name. */
  tag?: string;
  /** minimum value */
  start?: number;
}

export const Axis: Schema.Codec<Axis> =
  /*@__PURE__*/ Schema.Struct({
    end: Schema.optional(Schema.Number),
    tag: Schema.optional(Schema.String),
    start: Schema.optional(Schema.Number),
  }).annotate({ identifier: "Axis" });

export interface Tag {
  /** The weight of the tag. */
  weight?: number;
  /** The name of the tag. */
  name?: string;
}

export const Tag: Schema.Codec<Tag> = /*@__PURE__*/ Schema.Struct({
  weight: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "Tag" });

export interface Webfont {
  /** The font version. */
  version?: string;
  /** The date (format "yyyy-MM-dd") the font was modified for the last time. */
  lastModified?: string;
  /** Font URL for menu subset, a subset of the font that is enough to display the font name */
  menu?: string;
  /** This kind represents a webfont object in the webfonts service. */
  kind?: string;
  /** The category of the font. */
  category?: string;
  /** Axis for variable fonts. */
  axes?: ReadonlyArray<Axis>;
  /** The scripts supported by the font. */
  subsets?: ReadonlyArray<string>;
  /** The name of the font. */
  family?: string;
  /** The available variants for the font. */
  variants?: ReadonlyArray<string>;
  /** The color format(s) available for this family. */
  colorCapabilities?: ReadonlyArray<string>;
  /** The tags that apply to this family. */
  tags?: ReadonlyArray<Tag>;
  /** The font files (with all supported scripts) for each one of the available variants, as a key : value map. */
  files?: Record<string, string>;
}

export const Webfont: Schema.Codec<Webfont> =
  /*@__PURE__*/ Schema.Struct({
    version: Schema.optional(Schema.String),
    lastModified: Schema.optional(Schema.String),
    menu: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    category: Schema.optional(Schema.String),
    axes: Schema.optional(Schema.Array(Axis)),
    subsets: Schema.optional(Schema.Array(Schema.String)),
    family: Schema.optional(Schema.String),
    variants: Schema.optional(Schema.Array(Schema.String)),
    colorCapabilities: Schema.optional(Schema.Array(Schema.String)),
    tags: Schema.optional(Schema.Array(Tag)),
    files: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  }).annotate({ identifier: "Webfont" });

export interface WebfontList {
  /** The list of fonts currently served by the Google Fonts API. */
  items?: ReadonlyArray<Webfont>;
  /** This kind represents a list of webfont objects in the webfonts service. */
  kind?: string;
}

export const WebfontList: Schema.Codec<WebfontList> =
  /*@__PURE__*/ Schema.Struct({
    items: Schema.optional(Schema.Array(Webfont)),
    kind: Schema.optional(Schema.String),
  }).annotate({ identifier: "WebfontList" });

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

// ==========================================================================
// Operations
// ==========================================================================

export interface ListWebfontsRequest {
  /** Enables sorting of the list. */
  sort?:
    | "SORT_UNDEFINED"
    | "ALPHA"
    | "DATE"
    | "POPULARITY"
    | "STYLE"
    | "TRENDING"
    | (string & {});
  /** Filters by Webfont.category, if category is found in Webfont.categories. If not set, returns all families. */
  category?: string;
  /** Filters by Webfont.subset, if subset is found in Webfont.subsets. If not set, returns all families. */
  subset?: string;
  /** Filters by Webfont.family, using literal match. If not set, returns all families */
  family?: string[];
  /** Controls the font urls in `Webfont.files`, by default, static ttf fonts are sent. */
  capability?:
    | "CAPABILITY_UNSPECIFIED"
    | "WOFF2"
    | "VF"
    | "FAMILY_TAGS"
    | (string & {})[];
}

export const ListWebfontsRequest = /*@__PURE__*/ Schema.Struct({
  sort: Schema.optional(Schema.String).pipe(T.HttpQuery("sort")),
  category: Schema.optional(Schema.String).pipe(T.HttpQuery("category")),
  subset: Schema.optional(Schema.String).pipe(T.HttpQuery("subset")),
  family: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("family"),
  ),
  capability: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("capability"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "v1/webfonts" }),
  svc,
) as unknown as Schema.Codec<ListWebfontsRequest>;

export type ListWebfontsResponse = WebfontList;
export const ListWebfontsResponse = /*@__PURE__*/ WebfontList;

export type ListWebfontsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the list of fonts currently served by the Google Fonts Developer API. */
export const listWebfonts: API.OperationMethod<
  ListWebfontsRequest,
  ListWebfontsResponse,
  ListWebfontsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListWebfontsRequest,
  output: ListWebfontsResponse,
  errors: [NotFound, Forbidden],
}));
