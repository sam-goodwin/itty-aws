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
  /** Image belonging to a promotion. */
  image?: { source?: string; height?: number; width?: number };
  /** An array of block objects for this promotion. */
  bodyLines?: ReadonlyArray<{
    title?: string;
    link?: string;
    htmlTitle?: string;
    url?: string;
  }>;
  /** The title of the promotion, in HTML. */
  htmlTitle?: string;
  /** An abridged version of this search's result URL, e.g. www.example.com. */
  displayLink?: string;
  /** The title of the promotion. */
  title?: string;
  /** The URL of the promotion. */
  link?: string;
}

export const Promotion: Schema.Schema<Promotion> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    image: Schema.optional(
      Schema.Struct({
        source: Schema.optional(Schema.String),
        height: Schema.optional(Schema.Number),
        width: Schema.optional(Schema.Number),
      }),
    ),
    bodyLines: Schema.optional(
      Schema.Array(
        Schema.Struct({
          title: Schema.optional(Schema.String),
          link: Schema.optional(Schema.String),
          htmlTitle: Schema.optional(Schema.String),
          url: Schema.optional(Schema.String),
        }),
      ),
    ),
    htmlTitle: Schema.optional(Schema.String),
    displayLink: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    link: Schema.optional(Schema.String),
  }).annotate({ identifier: "Promotion" });

export interface Result {
  /** The full URL to which the search result is pointing, e.g. http://www.example.com/foo/bar. */
  link?: string;
  /** The title of the search result, in HTML. */
  htmlTitle?: string;
  /** The URL displayed after the snippet for each search result. */
  formattedUrl?: string;
  /** The HTML-formatted URL displayed after the snippet for each search result. */
  htmlFormattedUrl?: string;
  /** A unique identifier for the type of current object. For this API, it is `customsearch#result.` */
  kind?: string;
  /** The title of the search result, in plain text. */
  title?: string;
  /** Encapsulates all information about refinement labels. */
  labels?: ReadonlyArray<{
    label_with_op?: string;
    name?: string;
    displayName?: string;
  }>;
  /** The file format of the search result. */
  fileFormat?: string;
  /** Image belonging to a custom search result. */
  image?: {
    height?: number;
    thumbnailHeight?: number;
    contextLink?: string;
    thumbnailLink?: string;
    byteSize?: number;
    thumbnailWidth?: number;
    width?: number;
  };
  /** An abridged version of this search result’s URL, e.g. www.example.com. */
  displayLink?: string;
  /** Indicates the ID of Google's cached version of the search result. */
  cacheId?: string;
  /** The snippet of the search result, in plain text. */
  snippet?: string;
  /** The MIME type of the search result. */
  mime?: string;
  /** The snippet of the search result, in HTML. */
  htmlSnippet?: string;
  /** Contains [PageMap](https://developers.google.com/custom-search/docs/structured_data#pagemaps) information for this search result. */
  pagemap?: Record<string, unknown>;
}

export const Result: Schema.Schema<Result> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    link: Schema.optional(Schema.String),
    htmlTitle: Schema.optional(Schema.String),
    formattedUrl: Schema.optional(Schema.String),
    htmlFormattedUrl: Schema.optional(Schema.String),
    kind: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    labels: Schema.optional(
      Schema.Array(
        Schema.Struct({
          label_with_op: Schema.optional(Schema.String),
          name: Schema.optional(Schema.String),
          displayName: Schema.optional(Schema.String),
        }),
      ),
    ),
    fileFormat: Schema.optional(Schema.String),
    image: Schema.optional(
      Schema.Struct({
        height: Schema.optional(Schema.Number),
        thumbnailHeight: Schema.optional(Schema.Number),
        contextLink: Schema.optional(Schema.String),
        thumbnailLink: Schema.optional(Schema.String),
        byteSize: Schema.optional(Schema.Number),
        thumbnailWidth: Schema.optional(Schema.Number),
        width: Schema.optional(Schema.Number),
      }),
    ),
    displayLink: Schema.optional(Schema.String),
    cacheId: Schema.optional(Schema.String),
    snippet: Schema.optional(Schema.String),
    mime: Schema.optional(Schema.String),
    htmlSnippet: Schema.optional(Schema.String),
    pagemap: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Result" });

export interface Search {
  /** Query metadata for the previous, current, and next pages of results. */
  queries?: {
    previousPage?: ReadonlyArray<{
      excludeTerms?: string;
      cr?: string;
      highRange?: string;
      hq?: string;
      sort?: string;
      imgType?: string;
      siteSearchFilter?: string;
      filter?: string;
      relatedSite?: string;
      searchTerms?: string;
      startIndex?: number;
      startPage?: number;
      googleHost?: string;
      exactTerms?: string;
      safe?: string;
      rights?: string;
      title?: string;
      cx?: string;
      linkSite?: string;
      imgDominantColor?: string;
      count?: number;
      language?: string;
      dateRestrict?: string;
      orTerms?: string;
      lowRange?: string;
      imgSize?: string;
      outputEncoding?: string;
      searchType?: string;
      hl?: string;
      siteSearch?: string;
      gl?: string;
      inputEncoding?: string;
      disableCnTwTranslation?: string;
      fileType?: string;
      totalResults?: string;
      imgColorType?: string;
    }>;
    request?: ReadonlyArray<{
      hl?: string;
      siteSearch?: string;
      searchType?: string;
      imgSize?: string;
      outputEncoding?: string;
      language?: string;
      dateRestrict?: string;
      orTerms?: string;
      lowRange?: string;
      imgColorType?: string;
      totalResults?: string;
      inputEncoding?: string;
      disableCnTwTranslation?: string;
      fileType?: string;
      gl?: string;
      relatedSite?: string;
      filter?: string;
      siteSearchFilter?: string;
      sort?: string;
      imgType?: string;
      cr?: string;
      highRange?: string;
      excludeTerms?: string;
      hq?: string;
      count?: number;
      title?: string;
      cx?: string;
      linkSite?: string;
      imgDominantColor?: string;
      safe?: string;
      rights?: string;
      startIndex?: number;
      startPage?: number;
      searchTerms?: string;
      exactTerms?: string;
      googleHost?: string;
    }>;
    nextPage?: ReadonlyArray<{
      safe?: string;
      rights?: string;
      googleHost?: string;
      exactTerms?: string;
      searchTerms?: string;
      startIndex?: number;
      startPage?: number;
      count?: number;
      linkSite?: string;
      imgDominantColor?: string;
      title?: string;
      cx?: string;
      sort?: string;
      imgType?: string;
      hq?: string;
      excludeTerms?: string;
      cr?: string;
      highRange?: string;
      filter?: string;
      relatedSite?: string;
      siteSearchFilter?: string;
      inputEncoding?: string;
      disableCnTwTranslation?: string;
      fileType?: string;
      gl?: string;
      imgColorType?: string;
      totalResults?: string;
      outputEncoding?: string;
      imgSize?: string;
      orTerms?: string;
      lowRange?: string;
      language?: string;
      dateRestrict?: string;
      hl?: string;
      siteSearch?: string;
      searchType?: string;
    }>;
  };
  /** Metadata about a search operation. */
  searchInformation?: {
    searchTime?: number;
    formattedTotalResults?: string;
    formattedSearchTime?: string;
    totalResults?: string;
  };
  /** The set of [promotions](https://developers.google.com/custom-search/docs/promotions). Present only if the custom search engine's configuration files define any promotions for the given query. */
  promotions?: ReadonlyArray<Promotion>;
  /** OpenSearch template and URL. */
  url?: { type?: string; template?: string };
  /** Spell correction information for a query. */
  spelling?: { correctedQuery?: string; htmlCorrectedQuery?: string };
  /** The current set of custom search results. */
  items?: ReadonlyArray<Result>;
  /** Unique identifier for the type of current object. For this API, it is customsearch#search. */
  kind?: string;
  /** Metadata and refinements associated with the given search engine, including: * The name of the search engine that was used for the query. * A set of [facet objects](https://developers.google.com/custom-search/docs/refinements#create) (refinements) you can use for refining a search. */
  context?: Record<string, unknown>;
}

export const Search: Schema.Schema<Search> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    queries: Schema.optional(
      Schema.Struct({
        previousPage: Schema.optional(
          Schema.Array(
            Schema.Struct({
              excludeTerms: Schema.optional(Schema.String),
              cr: Schema.optional(Schema.String),
              highRange: Schema.optional(Schema.String),
              hq: Schema.optional(Schema.String),
              sort: Schema.optional(Schema.String),
              imgType: Schema.optional(Schema.String),
              siteSearchFilter: Schema.optional(Schema.String),
              filter: Schema.optional(Schema.String),
              relatedSite: Schema.optional(Schema.String),
              searchTerms: Schema.optional(Schema.String),
              startIndex: Schema.optional(Schema.Number),
              startPage: Schema.optional(Schema.Number),
              googleHost: Schema.optional(Schema.String),
              exactTerms: Schema.optional(Schema.String),
              safe: Schema.optional(Schema.String),
              rights: Schema.optional(Schema.String),
              title: Schema.optional(Schema.String),
              cx: Schema.optional(Schema.String),
              linkSite: Schema.optional(Schema.String),
              imgDominantColor: Schema.optional(Schema.String),
              count: Schema.optional(Schema.Number),
              language: Schema.optional(Schema.String),
              dateRestrict: Schema.optional(Schema.String),
              orTerms: Schema.optional(Schema.String),
              lowRange: Schema.optional(Schema.String),
              imgSize: Schema.optional(Schema.String),
              outputEncoding: Schema.optional(Schema.String),
              searchType: Schema.optional(Schema.String),
              hl: Schema.optional(Schema.String),
              siteSearch: Schema.optional(Schema.String),
              gl: Schema.optional(Schema.String),
              inputEncoding: Schema.optional(Schema.String),
              disableCnTwTranslation: Schema.optional(Schema.String),
              fileType: Schema.optional(Schema.String),
              totalResults: Schema.optional(Schema.String),
              imgColorType: Schema.optional(Schema.String),
            }),
          ),
        ),
        request: Schema.optional(
          Schema.Array(
            Schema.Struct({
              hl: Schema.optional(Schema.String),
              siteSearch: Schema.optional(Schema.String),
              searchType: Schema.optional(Schema.String),
              imgSize: Schema.optional(Schema.String),
              outputEncoding: Schema.optional(Schema.String),
              language: Schema.optional(Schema.String),
              dateRestrict: Schema.optional(Schema.String),
              orTerms: Schema.optional(Schema.String),
              lowRange: Schema.optional(Schema.String),
              imgColorType: Schema.optional(Schema.String),
              totalResults: Schema.optional(Schema.String),
              inputEncoding: Schema.optional(Schema.String),
              disableCnTwTranslation: Schema.optional(Schema.String),
              fileType: Schema.optional(Schema.String),
              gl: Schema.optional(Schema.String),
              relatedSite: Schema.optional(Schema.String),
              filter: Schema.optional(Schema.String),
              siteSearchFilter: Schema.optional(Schema.String),
              sort: Schema.optional(Schema.String),
              imgType: Schema.optional(Schema.String),
              cr: Schema.optional(Schema.String),
              highRange: Schema.optional(Schema.String),
              excludeTerms: Schema.optional(Schema.String),
              hq: Schema.optional(Schema.String),
              count: Schema.optional(Schema.Number),
              title: Schema.optional(Schema.String),
              cx: Schema.optional(Schema.String),
              linkSite: Schema.optional(Schema.String),
              imgDominantColor: Schema.optional(Schema.String),
              safe: Schema.optional(Schema.String),
              rights: Schema.optional(Schema.String),
              startIndex: Schema.optional(Schema.Number),
              startPage: Schema.optional(Schema.Number),
              searchTerms: Schema.optional(Schema.String),
              exactTerms: Schema.optional(Schema.String),
              googleHost: Schema.optional(Schema.String),
            }),
          ),
        ),
        nextPage: Schema.optional(
          Schema.Array(
            Schema.Struct({
              safe: Schema.optional(Schema.String),
              rights: Schema.optional(Schema.String),
              googleHost: Schema.optional(Schema.String),
              exactTerms: Schema.optional(Schema.String),
              searchTerms: Schema.optional(Schema.String),
              startIndex: Schema.optional(Schema.Number),
              startPage: Schema.optional(Schema.Number),
              count: Schema.optional(Schema.Number),
              linkSite: Schema.optional(Schema.String),
              imgDominantColor: Schema.optional(Schema.String),
              title: Schema.optional(Schema.String),
              cx: Schema.optional(Schema.String),
              sort: Schema.optional(Schema.String),
              imgType: Schema.optional(Schema.String),
              hq: Schema.optional(Schema.String),
              excludeTerms: Schema.optional(Schema.String),
              cr: Schema.optional(Schema.String),
              highRange: Schema.optional(Schema.String),
              filter: Schema.optional(Schema.String),
              relatedSite: Schema.optional(Schema.String),
              siteSearchFilter: Schema.optional(Schema.String),
              inputEncoding: Schema.optional(Schema.String),
              disableCnTwTranslation: Schema.optional(Schema.String),
              fileType: Schema.optional(Schema.String),
              gl: Schema.optional(Schema.String),
              imgColorType: Schema.optional(Schema.String),
              totalResults: Schema.optional(Schema.String),
              outputEncoding: Schema.optional(Schema.String),
              imgSize: Schema.optional(Schema.String),
              orTerms: Schema.optional(Schema.String),
              lowRange: Schema.optional(Schema.String),
              language: Schema.optional(Schema.String),
              dateRestrict: Schema.optional(Schema.String),
              hl: Schema.optional(Schema.String),
              siteSearch: Schema.optional(Schema.String),
              searchType: Schema.optional(Schema.String),
            }),
          ),
        ),
      }),
    ),
    searchInformation: Schema.optional(
      Schema.Struct({
        searchTime: Schema.optional(Schema.Number),
        formattedTotalResults: Schema.optional(Schema.String),
        formattedSearchTime: Schema.optional(Schema.String),
        totalResults: Schema.optional(Schema.String),
      }),
    ),
    promotions: Schema.optional(Schema.Array(Promotion)),
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
    items: Schema.optional(Schema.Array(Result)),
    kind: Schema.optional(Schema.String),
    context: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  }).annotate({ identifier: "Search" });

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

export interface ListCseRequest {
  /** Filters based on licensing. Supported values include: `cc_publicdomain`, `cc_attribute`, `cc_sharealike`, `cc_noncommercial`, `cc_nonderived` and combinations of these. See [typical combinations](https://wiki.creativecommons.org/wiki/CC_Search_integration). */
  rights?: string;
  /** Search safety level. Acceptable values are: * `"active"`: Enables SafeSearch filtering. * `"off"`: Disables SafeSearch filtering. (default) */
  safe?: "safeUndefined" | "active" | "high" | "medium" | "off" | (string & {});
  /** Identifies a phrase that all documents in the search results must contain. */
  exactTerms?: string;
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
  /** Specifies that all search results should contain a link to a particular URL. */
  linkSite?: string;
  /** Number of search results to return. * Valid values are integers between 1 and 10, inclusive. */
  num?: number;
  /** The Programmable Search Engine ID to use for this request. */
  cx?: string;
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
  /** The sort expression to apply to the results. The sort parameter specifies that the results be sorted according to the specified expression i.e. sort by date. [Example: sort=date](https://developers.google.com/custom-search/docs/structured_search#sort-by-attribute). */
  sort?: string;
  /** Appends the specified query terms to the query, as if they were combined with a logical AND operator. */
  hq?: string;
  /** Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#booleanOperators) in the cr parameter's value. Google Search determines the country of a document by analyzing: * the top-level domain (TLD) of the document's URL * the geographic location of the Web server's IP address See the [Country Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) page for a list of valid values for this parameter. */
  cr?: string;
  /** Specifies the ending value for a search range. * Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query. */
  highRange?: string;
  /** Restricts the search to documents written in a particular language (e.g., `lr=lang_ja`). Acceptable values are: * `"lang_ar"`: Arabic * `"lang_bg"`: Bulgarian * `"lang_ca"`: Catalan * `"lang_cs"`: Czech * `"lang_da"`: Danish * `"lang_de"`: German * `"lang_el"`: Greek * `"lang_en"`: English * `"lang_es"`: Spanish * `"lang_et"`: Estonian * `"lang_fi"`: Finnish * `"lang_fr"`: French * `"lang_hr"`: Croatian * `"lang_hu"`: Hungarian * `"lang_id"`: Indonesian * `"lang_is"`: Icelandic * `"lang_it"`: Italian * `"lang_iw"`: Hebrew * `"lang_ja"`: Japanese * `"lang_ko"`: Korean * `"lang_lt"`: Lithuanian * `"lang_lv"`: Latvian * `"lang_nl"`: Dutch * `"lang_no"`: Norwegian * `"lang_pl"`: Polish * `"lang_pt"`: Portuguese * `"lang_ro"`: Romanian * `"lang_ru"`: Russian * `"lang_sk"`: Slovak * `"lang_sl"`: Slovenian * `"lang_sr"`: Serbian * `"lang_sv"`: Swedish * `"lang_tr"`: Turkish * `"lang_zh-CN"`: Chinese (Simplified) * `"lang_zh-TW"`: Chinese (Traditional) */
  lr?: string;
  /** Identifies a word or phrase that should not appear in any documents in the search results. */
  excludeTerms?: string;
  /** Deprecated. */
  relatedSite?: string;
  /** Controls turning on or off the duplicate content filter. * See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Note that host crowding filtering applies only to multi-site searches. * By default, Google applies filtering to all search results to improve the quality of those results. Acceptable values are: * `0`: Turns off duplicate content filter. * `1`: Turns on duplicate content filter. */
  filter?: string;
  /** The index of the first result to return. The default number of results per page is 10, so `&start=11` would start at the top of the second page of results. **Note**: The JSON API will never return more than 100 results, even if more than 100 documents match the query, so setting the sum of `start + num` to a number greater than 100 will produce an error. Also note that the maximum value for `num` is 10. */
  start?: number;
  /** Controls whether to include or exclude results from the site named in the `siteSearch` parameter. Acceptable values are: * `"e"`: exclude * `"i"`: include */
  siteSearchFilter?: "siteSearchFilterUndefined" | "e" | "i" | (string & {});
  /** Restricts results to files of a specified extension. A list of file types indexable by Google can be found in Search Console [Help Center](https://support.google.com/webmasters/answer/35287). */
  fileType?: string;
  /** Enables or disables [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch). The default value for this parameter is 0 (zero), meaning that the feature is enabled. Supported values are: * `1`: Disabled * `0`: Enabled (default) */
  c2coff?: string;
  /** Optional. Enables routing of Programmable Search Engine requests to an alternate search handler. */
  enableAlternateSearchHandler?: boolean;
  /** Geolocation of end user. * The `gl` parameter value is a two-letter country code. The `gl` parameter boosts search results whose country of origin matches the parameter value. See the [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) page for a list of valid values. * Specifying a `gl` parameter value should lead to more relevant results. This is particularly true for international customers and, even more specifically, for customers in English- speaking countries other than the United States. */
  gl?: string;
  /** **Deprecated**. Use the `gl` parameter for a similar effect. The local Google domain (for example, google.com, google.de, or google.fr) to use to perform the search. */
  googlehost?: string;
  /** Returns black and white, grayscale, transparent, or color images. Acceptable values are: * `"color"` * `"gray"` * `"mono"`: black and white * `"trans"`: transparent background */
  imgColorType?:
    | "imgColorTypeUndefined"
    | "mono"
    | "gray"
    | "color"
    | "trans"
    | (string & {});
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
  /** Optional. Maximum length of snippet text, in characters, to be returned with results. Note: this feature is limited to specific engines. * Valid values are integers between 161 and 1000, inclusive. */
  snippetLength?: number;
  /** Specifies the starting value for a search range. Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query. */
  lowRange?: string;
  /** Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. */
  orTerms?: string;
  /** Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years. */
  dateRestrict?: string;
  /** Sets the user interface language. * Explicitly setting this parameter improves the performance and the quality of your search results. * See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages. */
  hl?: string;
  /** Specifies a given site which should always be included or excluded from results (see `siteSearchFilter` parameter, below). */
  siteSearch?: string;
  /** Query */
  q?: string;
  /** Specifies the search type: `image`. If unspecified, results are limited to webpages. Acceptable values are: * `"image"`: custom image search. */
  searchType?: "searchTypeUndefined" | "image" | (string & {});
}

export const ListCseRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  rights: Schema.optional(Schema.String).pipe(T.HttpQuery("rights")),
  safe: Schema.optional(Schema.String).pipe(T.HttpQuery("safe")),
  exactTerms: Schema.optional(Schema.String).pipe(T.HttpQuery("exactTerms")),
  imgDominantColor: Schema.optional(Schema.String).pipe(
    T.HttpQuery("imgDominantColor"),
  ),
  linkSite: Schema.optional(Schema.String).pipe(T.HttpQuery("linkSite")),
  num: Schema.optional(Schema.Number).pipe(T.HttpQuery("num")),
  cx: Schema.optional(Schema.String).pipe(T.HttpQuery("cx")),
  imgType: Schema.optional(Schema.String).pipe(T.HttpQuery("imgType")),
  sort: Schema.optional(Schema.String).pipe(T.HttpQuery("sort")),
  hq: Schema.optional(Schema.String).pipe(T.HttpQuery("hq")),
  cr: Schema.optional(Schema.String).pipe(T.HttpQuery("cr")),
  highRange: Schema.optional(Schema.String).pipe(T.HttpQuery("highRange")),
  lr: Schema.optional(Schema.String).pipe(T.HttpQuery("lr")),
  excludeTerms: Schema.optional(Schema.String).pipe(
    T.HttpQuery("excludeTerms"),
  ),
  relatedSite: Schema.optional(Schema.String).pipe(T.HttpQuery("relatedSite")),
  filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
  start: Schema.optional(Schema.Number).pipe(T.HttpQuery("start")),
  siteSearchFilter: Schema.optional(Schema.String).pipe(
    T.HttpQuery("siteSearchFilter"),
  ),
  fileType: Schema.optional(Schema.String).pipe(T.HttpQuery("fileType")),
  c2coff: Schema.optional(Schema.String).pipe(T.HttpQuery("c2coff")),
  enableAlternateSearchHandler: Schema.optional(Schema.Boolean).pipe(
    T.HttpQuery("enableAlternateSearchHandler"),
  ),
  gl: Schema.optional(Schema.String).pipe(T.HttpQuery("gl")),
  googlehost: Schema.optional(Schema.String).pipe(T.HttpQuery("googlehost")),
  imgColorType: Schema.optional(Schema.String).pipe(
    T.HttpQuery("imgColorType"),
  ),
  imgSize: Schema.optional(Schema.String).pipe(T.HttpQuery("imgSize")),
  snippetLength: Schema.optional(Schema.Number).pipe(
    T.HttpQuery("snippetLength"),
  ),
  lowRange: Schema.optional(Schema.String).pipe(T.HttpQuery("lowRange")),
  orTerms: Schema.optional(Schema.String).pipe(T.HttpQuery("orTerms")),
  dateRestrict: Schema.optional(Schema.String).pipe(
    T.HttpQuery("dateRestrict"),
  ),
  hl: Schema.optional(Schema.String).pipe(T.HttpQuery("hl")),
  siteSearch: Schema.optional(Schema.String).pipe(T.HttpQuery("siteSearch")),
  q: Schema.optional(Schema.String).pipe(T.HttpQuery("q")),
  searchType: Schema.optional(Schema.String).pipe(T.HttpQuery("searchType")),
}).pipe(
  T.Http({ method: "GET", path: "customsearch/v1" }),
  svc,
) as unknown as Schema.Schema<ListCseRequest>;

export type ListCseResponse = Search;
export const ListCseResponse = /*@__PURE__*/ /*#__PURE__*/ Search;

export type ListCseError = DefaultErrors | NotFound | Forbidden;

/** Returns metadata about the search performed, metadata about the engine used for the search, and the search results. */
export const listCse: API.OperationMethod<
  ListCseRequest,
  ListCseResponse,
  ListCseError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListCseRequest,
  output: ListCseResponse,
  errors: [NotFound, Forbidden],
}));

export interface ListCseSiterestrictRequest {
  /** Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years. */
  dateRestrict?: string;
  /** Specifies the starting value for a search range. Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query. */
  lowRange?: string;
  /** Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. */
  orTerms?: string;
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
  /** Optional. Maximum length of snippet text, in characters, to be returned with results. Note: this feature is limited to specific engines. * Valid values are integers between 161 and 1000, inclusive. */
  snippetLength?: number;
  /** Specifies the search type: `image`. If unspecified, results are limited to webpages. Acceptable values are: * `"image"`: custom image search. */
  searchType?: "searchTypeUndefined" | "image" | (string & {});
  /** Query */
  q?: string;
  /** Sets the user interface language. * Explicitly setting this parameter improves the performance and the quality of your search results. * See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages. */
  hl?: string;
  /** Specifies a given site which should always be included or excluded from results (see `siteSearchFilter` parameter, below). */
  siteSearch?: string;
  /** Geolocation of end user. * The `gl` parameter value is a two-letter country code. The `gl` parameter boosts search results whose country of origin matches the parameter value. See the [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) page for a list of valid values. * Specifying a `gl` parameter value should lead to more relevant results. This is particularly true for international customers and, even more specifically, for customers in English- speaking countries other than the United States. */
  gl?: string;
  /** Optional. Enables routing of Programmable Search Engine requests to an alternate search handler. */
  enableAlternateSearchHandler?: boolean;
  /** Enables or disables [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch). The default value for this parameter is 0 (zero), meaning that the feature is enabled. Supported values are: * `1`: Disabled * `0`: Enabled (default) */
  c2coff?: string;
  /** Restricts results to files of a specified extension. A list of file types indexable by Google can be found in Search Console [Help Center](https://support.google.com/webmasters/answer/35287). */
  fileType?: string;
  /** **Deprecated**. Use the `gl` parameter for a similar effect. The local Google domain (for example, google.com, google.de, or google.fr) to use to perform the search. */
  googlehost?: string;
  /** Returns black and white, grayscale, transparent, or color images. Acceptable values are: * `"color"` * `"gray"` * `"mono"`: black and white * `"trans"`: transparent background */
  imgColorType?:
    | "imgColorTypeUndefined"
    | "mono"
    | "gray"
    | "color"
    | "trans"
    | (string & {});
  /** Identifies a word or phrase that should not appear in any documents in the search results. */
  excludeTerms?: string;
  /** Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#booleanOperators) in the cr parameter's value. Google Search determines the country of a document by analyzing: * the top-level domain (TLD) of the document's URL * the geographic location of the Web server's IP address See the [Country Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) page for a list of valid values for this parameter. */
  cr?: string;
  /** Specifies the ending value for a search range. * Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query. */
  highRange?: string;
  /** Restricts the search to documents written in a particular language (e.g., `lr=lang_ja`). Acceptable values are: * `"lang_ar"`: Arabic * `"lang_bg"`: Bulgarian * `"lang_ca"`: Catalan * `"lang_cs"`: Czech * `"lang_da"`: Danish * `"lang_de"`: German * `"lang_el"`: Greek * `"lang_en"`: English * `"lang_es"`: Spanish * `"lang_et"`: Estonian * `"lang_fi"`: Finnish * `"lang_fr"`: French * `"lang_hr"`: Croatian * `"lang_hu"`: Hungarian * `"lang_id"`: Indonesian * `"lang_is"`: Icelandic * `"lang_it"`: Italian * `"lang_iw"`: Hebrew * `"lang_ja"`: Japanese * `"lang_ko"`: Korean * `"lang_lt"`: Lithuanian * `"lang_lv"`: Latvian * `"lang_nl"`: Dutch * `"lang_no"`: Norwegian * `"lang_pl"`: Polish * `"lang_pt"`: Portuguese * `"lang_ro"`: Romanian * `"lang_ru"`: Russian * `"lang_sk"`: Slovak * `"lang_sl"`: Slovenian * `"lang_sr"`: Serbian * `"lang_sv"`: Swedish * `"lang_tr"`: Turkish * `"lang_zh-CN"`: Chinese (Simplified) * `"lang_zh-TW"`: Chinese (Traditional) */
  lr?: string;
  /** Appends the specified query terms to the query, as if they were combined with a logical AND operator. */
  hq?: string;
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
  /** The sort expression to apply to the results. The sort parameter specifies that the results be sorted according to the specified expression i.e. sort by date. [Example: sort=date](https://developers.google.com/custom-search/docs/structured_search#sort-by-attribute). */
  sort?: string;
  /** Controls whether to include or exclude results from the site named in the `siteSearch` parameter. Acceptable values are: * `"e"`: exclude * `"i"`: include */
  siteSearchFilter?: "siteSearchFilterUndefined" | "e" | "i" | (string & {});
  /** The index of the first result to return. The default number of results per page is 10, so `&start=11` would start at the top of the second page of results. **Note**: The JSON API will never return more than 100 results, even if more than 100 documents match the query, so setting the sum of `start + num` to a number greater than 100 will produce an error. Also note that the maximum value for `num` is 10. */
  start?: number;
  /** Controls turning on or off the duplicate content filter. * See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Note that host crowding filtering applies only to multi-site searches. * By default, Google applies filtering to all search results to improve the quality of those results. Acceptable values are: * `0`: Turns off duplicate content filter. * `1`: Turns on duplicate content filter. */
  filter?: string;
  /** Deprecated. */
  relatedSite?: string;
  /** Identifies a phrase that all documents in the search results must contain. */
  exactTerms?: string;
  /** Filters based on licensing. Supported values include: `cc_publicdomain`, `cc_attribute`, `cc_sharealike`, `cc_noncommercial`, `cc_nonderived` and combinations of these. See [typical combinations](https://wiki.creativecommons.org/wiki/CC_Search_integration). */
  rights?: string;
  /** Search safety level. Acceptable values are: * `"active"`: Enables SafeSearch filtering. * `"off"`: Disables SafeSearch filtering. (default) */
  safe?: "safeUndefined" | "active" | "high" | "medium" | "off" | (string & {});
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
  /** Specifies that all search results should contain a link to a particular URL. */
  linkSite?: string;
  /** Number of search results to return. * Valid values are integers between 1 and 10, inclusive. */
  num?: number;
}

export const ListCseSiterestrictRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dateRestrict: Schema.optional(Schema.String).pipe(
      T.HttpQuery("dateRestrict"),
    ),
    lowRange: Schema.optional(Schema.String).pipe(T.HttpQuery("lowRange")),
    orTerms: Schema.optional(Schema.String).pipe(T.HttpQuery("orTerms")),
    imgSize: Schema.optional(Schema.String).pipe(T.HttpQuery("imgSize")),
    snippetLength: Schema.optional(Schema.Number).pipe(
      T.HttpQuery("snippetLength"),
    ),
    searchType: Schema.optional(Schema.String).pipe(T.HttpQuery("searchType")),
    q: Schema.optional(Schema.String).pipe(T.HttpQuery("q")),
    hl: Schema.optional(Schema.String).pipe(T.HttpQuery("hl")),
    siteSearch: Schema.optional(Schema.String).pipe(T.HttpQuery("siteSearch")),
    gl: Schema.optional(Schema.String).pipe(T.HttpQuery("gl")),
    enableAlternateSearchHandler: Schema.optional(Schema.Boolean).pipe(
      T.HttpQuery("enableAlternateSearchHandler"),
    ),
    c2coff: Schema.optional(Schema.String).pipe(T.HttpQuery("c2coff")),
    fileType: Schema.optional(Schema.String).pipe(T.HttpQuery("fileType")),
    googlehost: Schema.optional(Schema.String).pipe(T.HttpQuery("googlehost")),
    imgColorType: Schema.optional(Schema.String).pipe(
      T.HttpQuery("imgColorType"),
    ),
    excludeTerms: Schema.optional(Schema.String).pipe(
      T.HttpQuery("excludeTerms"),
    ),
    cr: Schema.optional(Schema.String).pipe(T.HttpQuery("cr")),
    highRange: Schema.optional(Schema.String).pipe(T.HttpQuery("highRange")),
    lr: Schema.optional(Schema.String).pipe(T.HttpQuery("lr")),
    hq: Schema.optional(Schema.String).pipe(T.HttpQuery("hq")),
    imgType: Schema.optional(Schema.String).pipe(T.HttpQuery("imgType")),
    sort: Schema.optional(Schema.String).pipe(T.HttpQuery("sort")),
    siteSearchFilter: Schema.optional(Schema.String).pipe(
      T.HttpQuery("siteSearchFilter"),
    ),
    start: Schema.optional(Schema.Number).pipe(T.HttpQuery("start")),
    filter: Schema.optional(Schema.String).pipe(T.HttpQuery("filter")),
    relatedSite: Schema.optional(Schema.String).pipe(
      T.HttpQuery("relatedSite"),
    ),
    exactTerms: Schema.optional(Schema.String).pipe(T.HttpQuery("exactTerms")),
    rights: Schema.optional(Schema.String).pipe(T.HttpQuery("rights")),
    safe: Schema.optional(Schema.String).pipe(T.HttpQuery("safe")),
    cx: Schema.optional(Schema.String).pipe(T.HttpQuery("cx")),
    imgDominantColor: Schema.optional(Schema.String).pipe(
      T.HttpQuery("imgDominantColor"),
    ),
    linkSite: Schema.optional(Schema.String).pipe(T.HttpQuery("linkSite")),
    num: Schema.optional(Schema.Number).pipe(T.HttpQuery("num")),
  }).pipe(
    T.Http({ method: "GET", path: "customsearch/v1/siterestrict" }),
    svc,
  ) as unknown as Schema.Schema<ListCseSiterestrictRequest>;

export type ListCseSiterestrictResponse = Search;
export const ListCseSiterestrictResponse = /*@__PURE__*/ /*#__PURE__*/ Search;

export type ListCseSiterestrictError = DefaultErrors | NotFound | Forbidden;

/** Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns. */
export const listCseSiterestrict: API.OperationMethod<
  ListCseSiterestrictRequest,
  ListCseSiterestrictResponse,
  ListCseSiterestrictError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListCseSiterestrictRequest,
  output: ListCseSiterestrictResponse,
  errors: [NotFound, Forbidden],
}));
