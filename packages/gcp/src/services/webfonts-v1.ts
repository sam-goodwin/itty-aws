// ==========================================================================
// Web Fonts Developer API (webfonts v1)
// DO NOT EDIT - Generated from GCP Discovery Document
// ==========================================================================

import * as Schema from "effect/Schema";
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
  /** minimum value */
  start?: number;
  /** maximum value */
  end?: number;
  /** tag name. */
  tag?: string;
}

export const Axis = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  start: Schema.optional(Schema.Number),
  end: Schema.optional(Schema.Number),
  tag: Schema.optional(Schema.String),
}).annotate({ identifier: "Axis" });

export interface Tag {
  /** The weight of the tag. */
  weight?: number;
  /** The name of the tag. */
  name?: string;
}

export const Tag = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  weight: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
}).annotate({ identifier: "Tag" });

export interface Webfont {
  /** The name of the font. */
  family?: string;
  /** The available variants for the font. */
  variants?: ReadonlyArray<string>;
  /** The font version. */
  version?: string;
  /** The category of the font. */
  category?: string;
  /** The date (format "yyyy-MM-dd") the font was modified for the last time. */
  lastModified?: string;
  /** Axis for variable fonts. */
  axes?: ReadonlyArray<Axis>;
  /** The color format(s) available for this family. */
  colorCapabilities?: ReadonlyArray<string>;
  /** The tags that apply to this family. */
  tags?: ReadonlyArray<Tag>;
  /** The scripts supported by the font. */
  subsets?: ReadonlyArray<string>;
  /** The font files (with all supported scripts) for each one of the available variants, as a key : value map. */
  files?: Record<string, string>;
  /** Font URL for menu subset, a subset of the font that is enough to display the font name */
  menu?: string;
  /** This kind represents a webfont object in the webfonts service. */
  kind?: string;
}

export const Webfont = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  family: Schema.optional(Schema.String),
  variants: Schema.optional(Schema.Array(Schema.String)),
  version: Schema.optional(Schema.String),
  category: Schema.optional(Schema.String),
  lastModified: Schema.optional(Schema.String),
  axes: Schema.optional(Schema.Array(Axis)),
  colorCapabilities: Schema.optional(Schema.Array(Schema.String)),
  tags: Schema.optional(Schema.Array(Tag)),
  subsets: Schema.optional(Schema.Array(Schema.String)),
  files: Schema.optional(Schema.Record(Schema.String, Schema.String)),
  menu: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
}).annotate({ identifier: "Webfont" });

export interface WebfontList {
  /** This kind represents a list of webfont objects in the webfonts service. */
  kind?: string;
  /** The list of fonts currently served by the Google Fonts API. */
  items?: ReadonlyArray<Webfont>;
}

export const WebfontList = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  items: Schema.optional(Schema.Array(Webfont)),
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
  },
) {}
T.applyErrorMatchers(Forbidden, [{ httpStatus: 403 }]);

// ==========================================================================
// Operations
// ==========================================================================

export interface ListWebfontsRequest {
  /** Filters by Webfont.family, using literal match. If not set, returns all families */
  family?: string[];
  /** Filters by Webfont.subset, if subset is found in Webfont.subsets. If not set, returns all families. */
  subset?: string;
  /** Enables sorting of the list. */
  sort?:
    | "SORT_UNDEFINED"
    | "ALPHA"
    | "DATE"
    | "POPULARITY"
    | "STYLE"
    | "TRENDING"
    | (string & {});
  /** Controls the font urls in `Webfont.files`, by default, static ttf fonts are sent. */
  capability?:
    | "CAPABILITY_UNSPECIFIED"
    | "WOFF2"
    | "VF"
    | "FAMILY_TAGS"
    | (string & {})[];
  /** Filters by Webfont.category, if category is found in Webfont.categories. If not set, returns all families. */
  category?: string;
}

export const ListWebfontsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  family: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("family"),
  ),
  subset: Schema.optional(Schema.String).pipe(T.HttpQuery("subset")),
  sort: Schema.optional(Schema.String).pipe(T.HttpQuery("sort")),
  capability: Schema.optional(Schema.Array(Schema.String)).pipe(
    T.HttpQuery("capability"),
  ),
  category: Schema.optional(Schema.String).pipe(T.HttpQuery("category")),
}).pipe(
  T.Http({ method: "GET", path: "v1/webfonts" }),
  svc,
) as unknown as Schema.Schema<ListWebfontsRequest>;

export type ListWebfontsResponse = WebfontList;
export const ListWebfontsResponse = /*@__PURE__*/ /*#__PURE__*/ WebfontList;

export type ListWebfontsError = DefaultErrors | NotFound | Forbidden;

/** Retrieves the list of fonts currently served by the Google Fonts Developer API. */
export const listWebfonts: API.OperationMethod<
  ListWebfontsRequest,
  ListWebfontsResponse,
  ListWebfontsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListWebfontsRequest,
  output: ListWebfontsResponse,
  errors: [NotFound, Forbidden],
}));
