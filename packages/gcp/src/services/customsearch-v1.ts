// ==========================================================================
// Custom Search API (customsearch v1)
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
  name: "customsearch",
  version: "v1",
  rootUrl: "https://customsearch.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface Promotion {
  /** The title of the promotion, in HTML. */
  htmlTitle?: string;
  /** An array of block objects for this promotion. */
  bodyLines?: ReadonlyArray<{
    link?: string;
    htmlTitle?: string;
    title?: string;
    url?: string;
  }>;
  /** The URL of the promotion. */
  link?: string;
  /** Image belonging to a promotion. */
  image?: { height?: number; width?: number; source?: string };
  /** An abridged version of this search's result URL, e.g. www.example.com. */
  displayLink?: string;
  /** The title of the promotion. */
  title?: string;
}

export const Promotion = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  htmlTitle: Schema.optional(Schema.String),
  bodyLines: Schema.optional(
    Schema.Array(
      Schema.Struct({
        link: Schema.optional(Schema.String),
        htmlTitle: Schema.optional(Schema.String),
        title: Schema.optional(Schema.String),
        url: Schema.optional(Schema.String),
      }),
    ),
  ),
  link: Schema.optional(Schema.String),
  image: Schema.optional(
    Schema.Struct({
      height: Schema.optional(Schema.Number),
      width: Schema.optional(Schema.Number),
      source: Schema.optional(Schema.String),
    }),
  ),
  displayLink: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
}).annotate({ identifier: "Promotion" });

export interface Result {
  /** The URL displayed after the snippet for each search result. */
  formattedUrl?: string;
  /** The file format of the search result. */
  fileFormat?: string;
  /** The full URL to which the search result is pointing, e.g. http://www.example.com/foo/bar. */
  link?: string;
  /** Image belonging to a custom search result. */
  image?: {
    height?: number;
    byteSize?: number;
    width?: number;
    thumbnailWidth?: number;
    contextLink?: string;
    thumbnailLink?: string;
    thumbnailHeight?: number;
  };
  /** The snippet of the search result, in HTML. */
  htmlSnippet?: string;
  /** Contains [PageMap](https://developers.google.com/custom-search/docs/structured_data#pagemaps) information for this search result. */
  pagemap?: Record<string, unknown>;
  /** The HTML-formatted URL displayed after the snippet for each search result. */
  htmlFormattedUrl?: string;
  /** The MIME type of the search result. */
  mime?: string;
  /** Indicates the ID of Google's cached version of the search result. */
  cacheId?: string;
  /** A unique identifier for the type of current object. For this API, it is `customsearch#result.` */
  kind?: string;
  /** Encapsulates all information about refinement labels. */
  labels?: ReadonlyArray<{
    displayName?: string;
    name?: string;
    label_with_op?: string;
  }>;
  /** An abridged version of this search result’s URL, e.g. www.example.com. */
  displayLink?: string;
  /** The snippet of the search result, in plain text. */
  snippet?: string;
  /** The title of the search result, in HTML. */
  htmlTitle?: string;
  /** The title of the search result, in plain text. */
  title?: string;
}

export const Result = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  formattedUrl: Schema.optional(Schema.String),
  fileFormat: Schema.optional(Schema.String),
  link: Schema.optional(Schema.String),
  image: Schema.optional(
    Schema.Struct({
      height: Schema.optional(Schema.Number),
      byteSize: Schema.optional(Schema.Number),
      width: Schema.optional(Schema.Number),
      thumbnailWidth: Schema.optional(Schema.Number),
      contextLink: Schema.optional(Schema.String),
      thumbnailLink: Schema.optional(Schema.String),
      thumbnailHeight: Schema.optional(Schema.Number),
    }),
  ),
  htmlSnippet: Schema.optional(Schema.String),
  pagemap: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  htmlFormattedUrl: Schema.optional(Schema.String),
  mime: Schema.optional(Schema.String),
  cacheId: Schema.optional(Schema.String),
  kind: Schema.optional(Schema.String),
  labels: Schema.optional(
    Schema.Array(
      Schema.Struct({
        displayName: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        label_with_op: Schema.optional(Schema.String),
      }),
    ),
  ),
  displayLink: Schema.optional(Schema.String),
  snippet: Schema.optional(Schema.String),
  htmlTitle: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
}).annotate({ identifier: "Result" });

export interface Search {
  /** Unique identifier for the type of current object. For this API, it is customsearch#search. */
  kind?: string;
  /** Query metadata for the previous, current, and next pages of results. */
  queries?: {
    request?: ReadonlyArray<{
      imgSize?: string;
      totalResults?: string;
      exactTerms?: string;
      fileType?: string;
      orTerms?: string;
      siteSearch?: string;
      title?: string;
      rights?: string;
      imgDominantColor?: string;
      imgType?: string;
      cx?: string;
      hq?: string;
      searchType?: string;
      linkSite?: string;
      startPage?: number;
      hl?: string;
      language?: string;
      siteSearchFilter?: string;
      safe?: string;
      relatedSite?: string;
      filter?: string;
      outputEncoding?: string;
      highRange?: string;
      inputEncoding?: string;
      gl?: string;
      googleHost?: string;
      disableCnTwTranslation?: string;
      imgColorType?: string;
      lowRange?: string;
      count?: number;
      excludeTerms?: string;
      sort?: string;
      cr?: string;
      dateRestrict?: string;
      startIndex?: number;
      searchTerms?: string;
    }>;
    nextPage?: ReadonlyArray<{
      startPage?: number;
      hl?: string;
      language?: string;
      hq?: string;
      searchType?: string;
      linkSite?: string;
      cx?: string;
      imgDominantColor?: string;
      imgType?: string;
      title?: string;
      rights?: string;
      fileType?: string;
      orTerms?: string;
      siteSearch?: string;
      imgSize?: string;
      totalResults?: string;
      exactTerms?: string;
      startIndex?: number;
      searchTerms?: string;
      sort?: string;
      cr?: string;
      dateRestrict?: string;
      count?: number;
      excludeTerms?: string;
      inputEncoding?: string;
      gl?: string;
      googleHost?: string;
      disableCnTwTranslation?: string;
      imgColorType?: string;
      lowRange?: string;
      filter?: string;
      outputEncoding?: string;
      highRange?: string;
      relatedSite?: string;
      siteSearchFilter?: string;
      safe?: string;
    }>;
    previousPage?: ReadonlyArray<{
      startPage?: number;
      hl?: string;
      language?: string;
      cx?: string;
      searchType?: string;
      linkSite?: string;
      hq?: string;
      rights?: string;
      title?: string;
      imgType?: string;
      imgDominantColor?: string;
      exactTerms?: string;
      imgSize?: string;
      totalResults?: string;
      orTerms?: string;
      siteSearch?: string;
      fileType?: string;
      sort?: string;
      cr?: string;
      dateRestrict?: string;
      startIndex?: number;
      searchTerms?: string;
      lowRange?: string;
      inputEncoding?: string;
      gl?: string;
      googleHost?: string;
      disableCnTwTranslation?: string;
      imgColorType?: string;
      excludeTerms?: string;
      count?: number;
      relatedSite?: string;
      outputEncoding?: string;
      highRange?: string;
      filter?: string;
      safe?: string;
      siteSearchFilter?: string;
    }>;
  };
  /** Metadata about a search operation. */
  searchInformation?: {
    searchTime?: number;
    formattedSearchTime?: string;
    totalResults?: string;
    formattedTotalResults?: string;
  };
  /** The current set of custom search results. */
  items?: ReadonlyArray<Result>;
  /** OpenSearch template and URL. */
  url?: { type?: string; template?: string };
  /** Spell correction information for a query. */
  spelling?: { correctedQuery?: string; htmlCorrectedQuery?: string };
  /** The set of [promotions](https://developers.google.com/custom-search/docs/promotions). Present only if the custom search engine's configuration files define any promotions for the given query. */
  promotions?: ReadonlyArray<Promotion>;
  /** Metadata and refinements associated with the given search engine, including: * The name of the search engine that was used for the query. * A set of [facet objects](https://developers.google.com/custom-search/docs/refinements#create) (refinements) you can use for refining a search. */
  context?: Record<string, unknown>;
}

export const Search = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  kind: Schema.optional(Schema.String),
  queries: Schema.optional(
    Schema.Struct({
      request: Schema.optional(
        Schema.Array(
          Schema.Struct({
            imgSize: Schema.optional(Schema.String),
            totalResults: Schema.optional(Schema.String),
            exactTerms: Schema.optional(Schema.String),
            fileType: Schema.optional(Schema.String),
            orTerms: Schema.optional(Schema.String),
            siteSearch: Schema.optional(Schema.String),
            title: Schema.optional(Schema.String),
            rights: Schema.optional(Schema.String),
            imgDominantColor: Schema.optional(Schema.String),
            imgType: Schema.optional(Schema.String),
            cx: Schema.optional(Schema.String),
            hq: Schema.optional(Schema.String),
            searchType: Schema.optional(Schema.String),
            linkSite: Schema.optional(Schema.String),
            startPage: Schema.optional(Schema.Number),
            hl: Schema.optional(Schema.String),
            language: Schema.optional(Schema.String),
            siteSearchFilter: Schema.optional(Schema.String),
            safe: Schema.optional(Schema.String),
            relatedSite: Schema.optional(Schema.String),
            filter: Schema.optional(Schema.String),
            outputEncoding: Schema.optional(Schema.String),
            highRange: Schema.optional(Schema.String),
            inputEncoding: Schema.optional(Schema.String),
            gl: Schema.optional(Schema.String),
            googleHost: Schema.optional(Schema.String),
            disableCnTwTranslation: Schema.optional(Schema.String),
            imgColorType: Schema.optional(Schema.String),
            lowRange: Schema.optional(Schema.String),
            count: Schema.optional(Schema.Number),
            excludeTerms: Schema.optional(Schema.String),
            sort: Schema.optional(Schema.String),
            cr: Schema.optional(Schema.String),
            dateRestrict: Schema.optional(Schema.String),
            startIndex: Schema.optional(Schema.Number),
            searchTerms: Schema.optional(Schema.String),
          }),
        ),
      ),
      nextPage: Schema.optional(
        Schema.Array(
          Schema.Struct({
            startPage: Schema.optional(Schema.Number),
            hl: Schema.optional(Schema.String),
            language: Schema.optional(Schema.String),
            hq: Schema.optional(Schema.String),
            searchType: Schema.optional(Schema.String),
            linkSite: Schema.optional(Schema.String),
            cx: Schema.optional(Schema.String),
            imgDominantColor: Schema.optional(Schema.String),
            imgType: Schema.optional(Schema.String),
            title: Schema.optional(Schema.String),
            rights: Schema.optional(Schema.String),
            fileType: Schema.optional(Schema.String),
            orTerms: Schema.optional(Schema.String),
            siteSearch: Schema.optional(Schema.String),
            imgSize: Schema.optional(Schema.String),
            totalResults: Schema.optional(Schema.String),
            exactTerms: Schema.optional(Schema.String),
            startIndex: Schema.optional(Schema.Number),
            searchTerms: Schema.optional(Schema.String),
            sort: Schema.optional(Schema.String),
            cr: Schema.optional(Schema.String),
            dateRestrict: Schema.optional(Schema.String),
            count: Schema.optional(Schema.Number),
            excludeTerms: Schema.optional(Schema.String),
            inputEncoding: Schema.optional(Schema.String),
            gl: Schema.optional(Schema.String),
            googleHost: Schema.optional(Schema.String),
            disableCnTwTranslation: Schema.optional(Schema.String),
            imgColorType: Schema.optional(Schema.String),
            lowRange: Schema.optional(Schema.String),
            filter: Schema.optional(Schema.String),
            outputEncoding: Schema.optional(Schema.String),
            highRange: Schema.optional(Schema.String),
            relatedSite: Schema.optional(Schema.String),
            siteSearchFilter: Schema.optional(Schema.String),
            safe: Schema.optional(Schema.String),
          }),
        ),
      ),
      previousPage: Schema.optional(
        Schema.Array(
          Schema.Struct({
            startPage: Schema.optional(Schema.Number),
            hl: Schema.optional(Schema.String),
            language: Schema.optional(Schema.String),
            cx: Schema.optional(Schema.String),
            searchType: Schema.optional(Schema.String),
            linkSite: Schema.optional(Schema.String),
            hq: Schema.optional(Schema.String),
            rights: Schema.optional(Schema.String),
            title: Schema.optional(Schema.String),
            imgType: Schema.optional(Schema.String),
            imgDominantColor: Schema.optional(Schema.String),
            exactTerms: Schema.optional(Schema.String),
            imgSize: Schema.optional(Schema.String),
            totalResults: Schema.optional(Schema.String),
            orTerms: Schema.optional(Schema.String),
            siteSearch: Schema.optional(Schema.String),
            fileType: Schema.optional(Schema.String),
            sort: Schema.optional(Schema.String),
            cr: Schema.optional(Schema.String),
            dateRestrict: Schema.optional(Schema.String),
            startIndex: Schema.optional(Schema.Number),
            searchTerms: Schema.optional(Schema.String),
            lowRange: Schema.optional(Schema.String),
            inputEncoding: Schema.optional(Schema.String),
            gl: Schema.optional(Schema.String),
            googleHost: Schema.optional(Schema.String),
            disableCnTwTranslation: Schema.optional(Schema.String),
            imgColorType: Schema.optional(Schema.String),
            excludeTerms: Schema.optional(Schema.String),
            count: Schema.optional(Schema.Number),
            relatedSite: Schema.optional(Schema.String),
            outputEncoding: Schema.optional(Schema.String),
            highRange: Schema.optional(Schema.String),
            filter: Schema.optional(Schema.String),
            safe: Schema.optional(Schema.String),
            siteSearchFilter: Schema.optional(Schema.String),
          }),
        ),
      ),
    }),
  ),
  searchInformation: Schema.optional(
    Schema.Struct({
      searchTime: Schema.optional(Schema.Number),
      formattedSearchTime: Schema.optional(Schema.String),
      totalResults: Schema.optional(Schema.String),
      formattedTotalResults: Schema.optional(Schema.String),
    }),
  ),
  items: Schema.optional(Schema.Array(Result)),
  url: Schema.optional(
    Schema.Struct({
      type: Schema.optional(Schema.String),
      template: Schema.optional(Schema.String),
    }),
  ),
  spelling: Schema.optional(
    Schema.Struct({
      correctedQuery: Schema.optional(Schema.String),
      htmlCorrectedQuery: Schema.optional(Schema.String),
    }),
  ),
  promotions: Schema.optional(Schema.Array(Promotion)),
  context: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
}).annotate({ identifier: "Search" });

// ==========================================================================
// Operations
// ==========================================================================

export interface ListCseRequest {
  /** The index of the first result to return. The default number of results per page is 10, so `&start=11` would start at the top of the second page of results. **Note**: The JSON API will never return more than 100 results, even if more than 100 documents match the query, so setting the sum of `start + num` to a number greater than 100 will produce an error. Also note that the maximum value for `num` is 10. */
  start?: number;
  /** Query */
  q?: string;
  /** Sets the user interface language. * Explicitly setting this parameter improves the performance and the quality of your search results. * See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages. */
  hl?: string;
  /** Appends the specified query terms to the query, as if they were combined with a logical AND operator. */
  hq?: string;
  /** Specifies the search type: `image`. If unspecified, results are limited to webpages. Acceptable values are: * `"image"`: custom image search. */
  searchType?: "searchTypeUndefined" | "image" | (string & {});
  /** Enables or disables [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch). The default value for this parameter is 0 (zero), meaning that the feature is enabled. Supported values are: * `1`: Disabled * `0`: Enabled (default) */
  c2coff?: string;
  /** Specifies that all search results should contain a link to a particular URL. */
  linkSite?: string;
  /** The Programmable Search Engine ID to use for this request. */
  cx?: string;
  /** Returns images of a specific dominant color. Acceptable values are: * `"black"` * `"blue"` * `"brown"` * `"gray"` * `"green"` * `"orange"` * `"pink"` * `"purple"` * `"red"` * `"teal"` * `"white"` * `"yellow"` */
  imgDominantColor?:
    | "imgDominantColorUndefined"
    | "black"
    | "blue"
    | "brown"
    | "gray"
    | "green"
    | "orange"
    | "pink"
    | "purple"
    | "red"
    | "teal"
    | "white"
    | "yellow"
    | (string & {});
  /** Returns images of a type. Acceptable values are: * `"clipart"` * `"face"` * `"lineart"` * `"stock"` * `"photo"` * `"animated"` */
  imgType?:
    | "imgTypeUndefined"
    | "clipart"
    | "face"
    | "lineart"
    | "stock"
    | "photo"
    | "animated"
    | (string & {});
  /** Restricts the search to documents written in a particular language (e.g., `lr=lang_ja`). Acceptable values are: * `"lang_ar"`: Arabic * `"lang_bg"`: Bulgarian * `"lang_ca"`: Catalan * `"lang_cs"`: Czech * `"lang_da"`: Danish * `"lang_de"`: German * `"lang_el"`: Greek * `"lang_en"`: English * `"lang_es"`: Spanish * `"lang_et"`: Estonian * `"lang_fi"`: Finnish * `"lang_fr"`: French * `"lang_hr"`: Croatian * `"lang_hu"`: Hungarian * `"lang_id"`: Indonesian * `"lang_is"`: Icelandic * `"lang_it"`: Italian * `"lang_iw"`: Hebrew * `"lang_ja"`: Japanese * `"lang_ko"`: Korean * `"lang_lt"`: Lithuanian * `"lang_lv"`: Latvian * `"lang_nl"`: Dutch * `"lang_no"`: Norwegian * `"lang_pl"`: Polish * `"lang_pt"`: Portuguese * `"lang_ro"`: Romanian * `"lang_ru"`: Russian * `"lang_sk"`: Slovak * `"lang_sl"`: Slovenian * `"lang_sr"`: Serbian * `"lang_sv"`: Swedish * `"lang_tr"`: Turkish * `"lang_zh-CN"`: Chinese (Simplified) * `"lang_zh-TW"`: Chinese (Traditional) */
  lr?: string;
  /** Filters based on licensing. Supported values include: `cc_publicdomain`, `cc_attribute`, `cc_sharealike`, `cc_noncommercial`, `cc_nonderived` and combinations of these. See [typical combinations](https://wiki.creativecommons.org/wiki/CC_Search_integration). */
  rights?: string;
  /** Restricts results to files of a specified extension. A list of file types indexable by Google can be found in Search Console [Help Center](https://support.google.com/webmasters/answer/35287). */
  fileType?: string;
  /** **Deprecated**. Use the `gl` parameter for a similar effect. The local Google domain (for example, google.com, google.de, or google.fr) to use to perform the search. */
  googlehost?: string;
  /** Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. */
  orTerms?: string;
  /** Specifies a given site which should always be included or excluded from results (see `siteSearchFilter` parameter, below). */
  siteSearch?: string;
  /** Returns images of a specified size. Acceptable values are: * `"huge"` * `"icon"` * `"large"` * `"medium"` * `"small"` * `"xlarge"` * `"xxlarge"` */
  imgSize?:
    | "imgSizeUndefined"
    | "HUGE"
    | "ICON"
    | "LARGE"
    | "MEDIUM"
    | "SMALL"
    | "XLARGE"
    | "XXLARGE"
    | (string & {});
  /** Number of search results to return. * Valid values are integers between 1 and 10, inclusive. */
  num?: number;
  /** Identifies a phrase that all documents in the search results must contain. */
  exactTerms?: string;
  /** Optional. Maximum length of snippet text, in characters, to be returned with results. Note: this feature is limited to specific engines. * Valid values are integers between 161 and 1000, inclusive. */
  snippetLength?: number;
  /** Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#booleanOperators) in the cr parameter's value. Google Search determines the country of a document by analyzing: * the top-level domain (TLD) of the document's URL * the geographic location of the Web server's IP address See the [Country Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) page for a list of valid values for this parameter. */
  cr?: string;
  /** Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years. */
  dateRestrict?: string;
  /** The sort expression to apply to the results. The sort parameter specifies that the results be sorted according to the specified expression i.e. sort by date. [Example: sort=date](https://developers.google.com/custom-search/docs/structured_search#sort-by-attribute). */
  sort?: string;
  /** Identifies a word or phrase that should not appear in any documents in the search results. */
  excludeTerms?: string;
  /** Geolocation of end user. * The `gl` parameter value is a two-letter country code. The `gl` parameter boosts search results whose country of origin matches the parameter value. See the [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) page for a list of valid values. * Specifying a `gl` parameter value should lead to more relevant results. This is particularly true for international customers and, even more specifically, for customers in English- speaking countries other than the United States. */
  gl?: string;
  /** Returns black and white, grayscale, transparent, or color images. Acceptable values are: * `"color"` * `"gray"` * `"mono"`: black and white * `"trans"`: transparent background */
  imgColorType?:
    | "imgColorTypeUndefined"
    | "mono"
    | "gray"
    | "color"
    | "trans"
    | (string & {});
  /** Specifies the starting value for a search range. Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query. */
  lowRange?: string;
  /** Controls turning on or off the duplicate content filter. * See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Note that host crowding filtering applies only to multi-site searches. * By default, Google applies filtering to all search results to improve the quality of those results. Acceptable values are: * `0`: Turns off duplicate content filter. * `1`: Turns on duplicate content filter. */
  filter?: string;
  /** Specifies the ending value for a search range. * Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query. */
  highRange?: string;
  /** Deprecated. */
  relatedSite?: string;
  /** Controls whether to include or exclude results from the site named in the `siteSearch` parameter. Acceptable values are: * `"e"`: exclude * `"i"`: include */
  siteSearchFilter?: "siteSearchFilterUndefined" | "e" | "i" | (string & {});
  /** Search safety level. Acceptable values are: * `"active"`: Enables SafeSearch filtering. * `"off"`: Disables SafeSearch filtering. (default) */
  safe?: "safeUndefined" | "active" | "high" | "medium" | "off" | (string & {});
  /** Optional. Enables routing of Programmable Search Engine requests to an alternate search handler. */
  enableAlternateSearchHandler?: boolean;
}

export const ListCseRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  start: Schema.optional(Schema.Number).pipe(T.HttpQuery("start")),
  q: Schema.optional(Schema.String).pipe(T.HttpQuery("q")),
  hl: Schema.optional(Schema.String).pipe(T.HttpQuery("hl")),
  hq: Schema.optional(Schema.String).pipe(T.HttpQuery("hq")),
  searchType: Schema.optional(Schema.String).pipe(T.HttpQuery("searchType")),
  c2coff: Schema.optional(Schema.String).pipe(T.HttpQuery("c2coff")),
  linkSite: Schema.optional(Schema.String).pipe(T.HttpQuery("linkSite")),
  cx: Schema.optional(Schema.String).pipe(T.HttpQuery("cx")),
  imgDominantColor: Schema.optional(Schema.String).pipe(
    T.HttpQuery("imgDominantColor"),
  ),
  imgType: Schema.optional(Schema.String).pipe(T.HttpQuery("imgType")),
  lr: Schema.optional(Schema.String).pipe(T.HttpQuery("lr")),
  rights: Schema.optional(Schema.String).pipe(T.HttpQuery("rights")),
  fileType: Schema.optional(Schema.String).pipe(T.HttpQuery("fileType")),
  googlehost: Schema.optional(Schema.String).pipe(T.HttpQuery("googlehost")),
  orTerms: Schema.optional(Schema.String).pipe(T.HttpQuery("orTerms")),
  siteSearch: Schema.optional(Schema.String).pipe(T.HttpQuery("siteSearch")),
  imgSize: Schema.optional(Schema.String).pipe(T.HttpQuery("imgSize")),
  num: Schema.optional(Schema.Number).pipe(T.HttpQuery("num")),
  exactTerms: Schema.optional(Schema.String).pipe(T.HttpQuery("exactTerms")),
  snippetLength: Schema.optional(Schema.Number).pipe(
    T.HttpQuery("snippetLength"),
  ),
  cr: Schema.optional(Schema.String).pipe(T.HttpQuery("cr")),
  dateRestrict: Schema.optional(Schema.String).pipe(
    T.HttpQuery("dateRestrict"),
  ),
  sort: Schema.optional(Schema.String).pipe(T.HttpQuery("sort")),
  excludeTerms: Schema.optional(Schema.String).pipe(
    T.HttpQuery("excludeTerms"),
  ),
  gl: Schema.optional(Schema.String).pipe(T.HttpQuery("gl")),
  imgColorType: Schema.optional(Schema.String).pipe(
    T.HttpQuery("imgColorType"),
  ),
  lowRange: Schema.optional(Schema.String).pipe(T.HttpQuery("lowRange")),
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  highRange: Schema.optional(Schema.String).pipe(T.HttpQuery("highRange")),
  relatedSite: Schema.optional(Schema.String).pipe(T.HttpQuery("relatedSite")),
  siteSearchFilter: Schema.optional(Schema.String).pipe(
    T.HttpQuery("siteSearchFilter"),
  ),
  safe: Schema.optional(Schema.String).pipe(T.HttpQuery("safe")),
  enableAlternateSearchHandler: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("enableAlternateSearchHandler"),
  ),
}).pipe(
  T.Http({ method: "GET", path: "customsearch/v1" }),
  svc,
) as unknown as Schema.Schema<ListCseRequest>;

export type ListCseResponse = Search;
export const ListCseResponse = /*@__PURE__*/ /*#__PURE__*/ Search;

export type ListCseError = DefaultErrors;

/** Returns metadata about the search performed, metadata about the engine used for the search, and the search results. */
export const listCse: API.OperationMethod<
  ListCseRequest,
  ListCseResponse,
  ListCseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListCseRequest,
  output: ListCseResponse,
  errors: [],
}));

export interface ListCseSiterestrictRequest {
  /** Identifies a word or phrase that should not appear in any documents in the search results. */
  excludeTerms?: string;
  /** Geolocation of end user. * The `gl` parameter value is a two-letter country code. The `gl` parameter boosts search results whose country of origin matches the parameter value. See the [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) page for a list of valid values. * Specifying a `gl` parameter value should lead to more relevant results. This is particularly true for international customers and, even more specifically, for customers in English- speaking countries other than the United States. */
  gl?: string;
  /** Returns black and white, grayscale, transparent, or color images. Acceptable values are: * `"color"` * `"gray"` * `"mono"`: black and white * `"trans"`: transparent background */
  imgColorType?:
    | "imgColorTypeUndefined"
    | "mono"
    | "gray"
    | "color"
    | "trans"
    | (string & {});
  /** Specifies the starting value for a search range. Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query. */
  lowRange?: string;
  /** Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#booleanOperators) in the cr parameter's value. Google Search determines the country of a document by analyzing: * the top-level domain (TLD) of the document's URL * the geographic location of the Web server's IP address See the [Country Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) page for a list of valid values for this parameter. */
  cr?: string;
  /** Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years. */
  dateRestrict?: string;
  /** The sort expression to apply to the results. The sort parameter specifies that the results be sorted according to the specified expression i.e. sort by date. [Example: sort=date](https://developers.google.com/custom-search/docs/structured_search#sort-by-attribute). */
  sort?: string;
  /** Controls whether to include or exclude results from the site named in the `siteSearch` parameter. Acceptable values are: * `"e"`: exclude * `"i"`: include */
  siteSearchFilter?: "siteSearchFilterUndefined" | "e" | "i" | (string & {});
  /** Search safety level. Acceptable values are: * `"active"`: Enables SafeSearch filtering. * `"off"`: Disables SafeSearch filtering. (default) */
  safe?: "safeUndefined" | "active" | "high" | "medium" | "off" | (string & {});
  /** Optional. Enables routing of Programmable Search Engine requests to an alternate search handler. */
  enableAlternateSearchHandler?: boolean;
  /** Controls turning on or off the duplicate content filter. * See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Note that host crowding filtering applies only to multi-site searches. * By default, Google applies filtering to all search results to improve the quality of those results. Acceptable values are: * `0`: Turns off duplicate content filter. * `1`: Turns on duplicate content filter. */
  filter?: string;
  /** Specifies the ending value for a search range. * Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query. */
  highRange?: string;
  /** Deprecated. */
  relatedSite?: string;
  /** Appends the specified query terms to the query, as if they were combined with a logical AND operator. */
  hq?: string;
  /** Specifies the search type: `image`. If unspecified, results are limited to webpages. Acceptable values are: * `"image"`: custom image search. */
  searchType?: "searchTypeUndefined" | "image" | (string & {});
  /** Enables or disables [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch). The default value for this parameter is 0 (zero), meaning that the feature is enabled. Supported values are: * `1`: Disabled * `0`: Enabled (default) */
  c2coff?: string;
  /** Specifies that all search results should contain a link to a particular URL. */
  linkSite?: string;
  /** The Programmable Search Engine ID to use for this request. */
  cx?: string;
  /** The index of the first result to return. The default number of results per page is 10, so `&start=11` would start at the top of the second page of results. **Note**: The JSON API will never return more than 100 results, even if more than 100 documents match the query, so setting the sum of `start + num` to a number greater than 100 will produce an error. Also note that the maximum value for `num` is 10. */
  start?: number;
  /** Query */
  q?: string;
  /** Sets the user interface language. * Explicitly setting this parameter improves the performance and the quality of your search results. * See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages. */
  hl?: string;
  /** Restricts results to files of a specified extension. A list of file types indexable by Google can be found in Search Console [Help Center](https://support.google.com/webmasters/answer/35287). */
  fileType?: string;
  /** **Deprecated**. Use the `gl` parameter for a similar effect. The local Google domain (for example, google.com, google.de, or google.fr) to use to perform the search. */
  googlehost?: string;
  /** Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. */
  orTerms?: string;
  /** Specifies a given site which should always be included or excluded from results (see `siteSearchFilter` parameter, below). */
  siteSearch?: string;
  /** Returns images of a specified size. Acceptable values are: * `"huge"` * `"icon"` * `"large"` * `"medium"` * `"small"` * `"xlarge"` * `"xxlarge"` */
  imgSize?:
    | "imgSizeUndefined"
    | "HUGE"
    | "ICON"
    | "LARGE"
    | "MEDIUM"
    | "SMALL"
    | "XLARGE"
    | "XXLARGE"
    | (string & {});
  /** Number of search results to return. * Valid values are integers between 1 and 10, inclusive. */
  num?: number;
  /** Identifies a phrase that all documents in the search results must contain. */
  exactTerms?: string;
  /** Optional. Maximum length of snippet text, in characters, to be returned with results. Note: this feature is limited to specific engines. * Valid values are integers between 161 and 1000, inclusive. */
  snippetLength?: number;
  /** Returns images of a specific dominant color. Acceptable values are: * `"black"` * `"blue"` * `"brown"` * `"gray"` * `"green"` * `"orange"` * `"pink"` * `"purple"` * `"red"` * `"teal"` * `"white"` * `"yellow"` */
  imgDominantColor?:
    | "imgDominantColorUndefined"
    | "black"
    | "blue"
    | "brown"
    | "gray"
    | "green"
    | "orange"
    | "pink"
    | "purple"
    | "red"
    | "teal"
    | "white"
    | "yellow"
    | (string & {});
  /** Returns images of a type. Acceptable values are: * `"clipart"` * `"face"` * `"lineart"` * `"stock"` * `"photo"` * `"animated"` */
  imgType?:
    | "imgTypeUndefined"
    | "clipart"
    | "face"
    | "lineart"
    | "stock"
    | "photo"
    | "animated"
    | (string & {});
  /** Restricts the search to documents written in a particular language (e.g., `lr=lang_ja`). Acceptable values are: * `"lang_ar"`: Arabic * `"lang_bg"`: Bulgarian * `"lang_ca"`: Catalan * `"lang_cs"`: Czech * `"lang_da"`: Danish * `"lang_de"`: German * `"lang_el"`: Greek * `"lang_en"`: English * `"lang_es"`: Spanish * `"lang_et"`: Estonian * `"lang_fi"`: Finnish * `"lang_fr"`: French * `"lang_hr"`: Croatian * `"lang_hu"`: Hungarian * `"lang_id"`: Indonesian * `"lang_is"`: Icelandic * `"lang_it"`: Italian * `"lang_iw"`: Hebrew * `"lang_ja"`: Japanese * `"lang_ko"`: Korean * `"lang_lt"`: Lithuanian * `"lang_lv"`: Latvian * `"lang_nl"`: Dutch * `"lang_no"`: Norwegian * `"lang_pl"`: Polish * `"lang_pt"`: Portuguese * `"lang_ro"`: Romanian * `"lang_ru"`: Russian * `"lang_sk"`: Slovak * `"lang_sl"`: Slovenian * `"lang_sr"`: Serbian * `"lang_sv"`: Swedish * `"lang_tr"`: Turkish * `"lang_zh-CN"`: Chinese (Simplified) * `"lang_zh-TW"`: Chinese (Traditional) */
  lr?: string;
  /** Filters based on licensing. Supported values include: `cc_publicdomain`, `cc_attribute`, `cc_sharealike`, `cc_noncommercial`, `cc_nonderived` and combinations of these. See [typical combinations](https://wiki.creativecommons.org/wiki/CC_Search_integration). */
  rights?: string;
}

export const ListCseSiterestrictRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    excludeTerms: Schema.optional(Schema.String).pipe(
      T.HttpQuery("excludeTerms"),
    ),
    gl: Schema.optional(Schema.String).pipe(T.HttpQuery("gl")),
    imgColorType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("imgColorType"),
    ),
    lowRange: Schema.optional(Schema.String).pipe(T.HttpQuery("lowRange")),
    cr: Schema.optional(Schema.String).pipe(T.HttpQuery("cr")),
    dateRestrict: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dateRestrict"),
    ),
    sort: Schema.optional(Schema.String).pipe(T.HttpQuery("sort")),
    siteSearchFilter: Schema.optional(Schema.String).pipe(
      T.HttpQuery("siteSearchFilter"),
    ),
    safe: Schema.optional(Schema.String).pipe(T.HttpQuery("safe")),
    enableAlternateSearchHandler: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("enableAlternateSearchHandler"),
    ),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    highRange: Schema.optional(Schema.String).pipe(T.HttpQuery("highRange")),
    relatedSite: Schema.optional(Schema.String).pipe(
      T.HttpQuery("relatedSite"),
    ),
    hq: Schema.optional(Schema.String).pipe(T.HttpQuery("hq")),
    searchType: Schema.optional(Schema.String).pipe(T.HttpQuery("searchType")),
    c2coff: Schema.optional(Schema.String).pipe(T.HttpQuery("c2coff")),
    linkSite: Schema.optional(Schema.String).pipe(T.HttpQuery("linkSite")),
    cx: Schema.optional(Schema.String).pipe(T.HttpQuery("cx")),
    start: Schema.optional(Schema.Number).pipe(T.HttpQuery("start")),
    q: Schema.optional(Schema.String).pipe(T.HttpQuery("q")),
    hl: Schema.optional(Schema.String).pipe(T.HttpQuery("hl")),
    fileType: Schema.optional(Schema.String).pipe(T.HttpQuery("fileType")),
    googlehost: Schema.optional(Schema.String).pipe(T.HttpQuery("googlehost")),
    orTerms: Schema.optional(Schema.String).pipe(T.HttpQuery("orTerms")),
    siteSearch: Schema.optional(Schema.String).pipe(T.HttpQuery("siteSearch")),
    imgSize: Schema.optional(Schema.String).pipe(T.HttpQuery("imgSize")),
    num: Schema.optional(Schema.Number).pipe(T.HttpQuery("num")),
    exactTerms: Schema.optional(Schema.String).pipe(T.HttpQuery("exactTerms")),
    snippetLength: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("snippetLength"),
    ),
    imgDominantColor: Schema.optional(Schema.String).pipe(
      T.HttpQuery("imgDominantColor"),
    ),
    imgType: Schema.optional(Schema.String).pipe(T.HttpQuery("imgType")),
    lr: Schema.optional(Schema.String).pipe(T.HttpQuery("lr")),
    rights: Schema.optional(Schema.String).pipe(T.HttpQuery("rights")),
  }).pipe(
    T.Http({ method: "GET", path: "customsearch/v1/siterestrict" }),
    svc,
  ) as unknown as Schema.Schema<ListCseSiterestrictRequest>;

export type ListCseSiterestrictResponse = Search;
export const ListCseSiterestrictResponse = /*@__PURE__*/ /*#__PURE__*/ Search;

export type ListCseSiterestrictError = DefaultErrors;

/** Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns. */
export const listCseSiterestrict: API.OperationMethod<
  ListCseSiterestrictRequest,
  ListCseSiterestrictResponse,
  ListCseSiterestrictError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListCseSiterestrictRequest,
  output: ListCseSiterestrictResponse,
  errors: [],
}));
