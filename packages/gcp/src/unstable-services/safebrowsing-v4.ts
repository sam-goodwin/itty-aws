// ==========================================================================
// Safe Browsing API (safebrowsing v4)
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
  name: "safebrowsing",
  version: "v4",
  rootUrl: "https://safebrowsing.googleapis.com/",
  servicePath: "",
});

// ==========================================================================
// Schemas
// ==========================================================================

export interface GoogleSecuritySafebrowsingV4ClientInfo {
  /** A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API. */
  clientId?: string;
  /** The version of the client implementation. */
  clientVersion?: string;
}

export const GoogleSecuritySafebrowsingV4ClientInfo: Schema.Schema<GoogleSecuritySafebrowsingV4ClientInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientId: Schema.optional(Schema.String),
    clientVersion: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleSecuritySafebrowsingV4ClientInfo" });

export interface GoogleSecuritySafebrowsingV4ThreatHitThreatSource {
  /** Referrer of the resource. Only set if the referrer is available. */
  referrer?: string;
  /** The URL of the resource. */
  url?: string;
  /** The remote IP of the resource in ASCII format. Either IPv4 or IPv6. */
  remoteIp?: string;
  /** The type of source reported. */
  type?:
    | "THREAT_SOURCE_TYPE_UNSPECIFIED"
    | "MATCHING_URL"
    | "TAB_URL"
    | "TAB_REDIRECT"
    | "TAB_RESOURCE"
    | (string & {});
}

export const GoogleSecuritySafebrowsingV4ThreatHitThreatSource: Schema.Schema<GoogleSecuritySafebrowsingV4ThreatHitThreatSource> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    referrer: Schema.optional(Schema.String),
    url: Schema.optional(Schema.String),
    remoteIp: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleSecuritySafebrowsingV4ThreatHitThreatSource",
  });

export interface GoogleSecuritySafebrowsingV4ThreatEntry {
  /** A URL. */
  url?: string;
  /** The digest of an executable in SHA256 format. The API supports both binary and hex digests. For JSON requests, digests are base64-encoded. */
  digest?: string;
  /** A hash prefix, consisting of the most significant 4-32 bytes of a SHA256 hash. This field is in binary format. For JSON requests, hashes are base64-encoded. */
  hash?: string;
}

export const GoogleSecuritySafebrowsingV4ThreatEntry: Schema.Schema<GoogleSecuritySafebrowsingV4ThreatEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    url: Schema.optional(Schema.String),
    digest: Schema.optional(Schema.String),
    hash: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleSecuritySafebrowsingV4ThreatEntry" });

export interface GoogleSecuritySafebrowsingV4ThreatHitUserInfo {
  /** The UN M.49 region code associated with the user's location. */
  regionCode?: string;
  /** Unique user identifier defined by the client. */
  userId?: string;
}

export const GoogleSecuritySafebrowsingV4ThreatHitUserInfo: Schema.Schema<GoogleSecuritySafebrowsingV4ThreatHitUserInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    regionCode: Schema.optional(Schema.String),
    userId: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleSecuritySafebrowsingV4ThreatHitUserInfo" });

export interface GoogleSecuritySafebrowsingV4ThreatHit {
  /** The threat type reported. */
  threatType?:
    | "THREAT_TYPE_UNSPECIFIED"
    | "MALWARE"
    | "SOCIAL_ENGINEERING"
    | "UNWANTED_SOFTWARE"
    | "POTENTIALLY_HARMFUL_APPLICATION"
    | "SOCIAL_ENGINEERING_INTERNAL"
    | "API_ABUSE"
    | "MALICIOUS_BINARY"
    | "CSD_WHITELIST"
    | "CSD_DOWNLOAD_WHITELIST"
    | "CLIENT_INCIDENT"
    | "CLIENT_INCIDENT_WHITELIST"
    | "APK_MALWARE_OFFLINE"
    | "SUBRESOURCE_FILTER"
    | "SUSPICIOUS"
    | "TRICK_TO_BILL"
    | "HIGH_CONFIDENCE_ALLOWLIST"
    | "ACCURACY_TIPS"
    | (string & {});
  /** Client-reported identification. */
  clientInfo?: GoogleSecuritySafebrowsingV4ClientInfo;
  /** The resources related to the threat hit. */
  resources?: ReadonlyArray<GoogleSecuritySafebrowsingV4ThreatHitThreatSource>;
  /** The platform type reported. */
  platformType?:
    | "PLATFORM_TYPE_UNSPECIFIED"
    | "WINDOWS"
    | "LINUX"
    | "ANDROID"
    | "OSX"
    | "IOS"
    | "ANY_PLATFORM"
    | "ALL_PLATFORMS"
    | "CHROME"
    | (string & {});
  /** The threat entry responsible for the hit. Full hash should be reported for hash-based hits. */
  entry?: GoogleSecuritySafebrowsingV4ThreatEntry;
  /** Details about the user that encountered the threat. */
  userInfo?: GoogleSecuritySafebrowsingV4ThreatHitUserInfo;
}

export const GoogleSecuritySafebrowsingV4ThreatHit: Schema.Schema<GoogleSecuritySafebrowsingV4ThreatHit> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    threatType: Schema.optional(Schema.String),
    clientInfo: Schema.optional(GoogleSecuritySafebrowsingV4ClientInfo),
    resources: Schema.optional(
      Schema.Array(GoogleSecuritySafebrowsingV4ThreatHitThreatSource),
    ),
    platformType: Schema.optional(Schema.String),
    entry: Schema.optional(GoogleSecuritySafebrowsingV4ThreatEntry),
    userInfo: Schema.optional(GoogleSecuritySafebrowsingV4ThreatHitUserInfo),
  }).annotate({ identifier: "GoogleSecuritySafebrowsingV4ThreatHit" });

export interface GoogleSecuritySafebrowsingV4ThreatListDescriptor {
  /** The threat type posed by the list's entries. */
  threatType?:
    | "THREAT_TYPE_UNSPECIFIED"
    | "MALWARE"
    | "SOCIAL_ENGINEERING"
    | "UNWANTED_SOFTWARE"
    | "POTENTIALLY_HARMFUL_APPLICATION"
    | "SOCIAL_ENGINEERING_INTERNAL"
    | "API_ABUSE"
    | "MALICIOUS_BINARY"
    | "CSD_WHITELIST"
    | "CSD_DOWNLOAD_WHITELIST"
    | "CLIENT_INCIDENT"
    | "CLIENT_INCIDENT_WHITELIST"
    | "APK_MALWARE_OFFLINE"
    | "SUBRESOURCE_FILTER"
    | "SUSPICIOUS"
    | "TRICK_TO_BILL"
    | "HIGH_CONFIDENCE_ALLOWLIST"
    | "ACCURACY_TIPS"
    | (string & {});
  /** The platform type targeted by the list's entries. */
  platformType?:
    | "PLATFORM_TYPE_UNSPECIFIED"
    | "WINDOWS"
    | "LINUX"
    | "ANDROID"
    | "OSX"
    | "IOS"
    | "ANY_PLATFORM"
    | "ALL_PLATFORMS"
    | "CHROME"
    | (string & {});
  /** The entry types contained in the list. */
  threatEntryType?:
    | "THREAT_ENTRY_TYPE_UNSPECIFIED"
    | "URL"
    | "EXECUTABLE"
    | "IP_RANGE"
    | "CHROME_EXTENSION"
    | "FILENAME"
    | "CERT"
    | (string & {});
}

export const GoogleSecuritySafebrowsingV4ThreatListDescriptor: Schema.Schema<GoogleSecuritySafebrowsingV4ThreatListDescriptor> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    threatType: Schema.optional(Schema.String),
    platformType: Schema.optional(Schema.String),
    threatEntryType: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleSecuritySafebrowsingV4ThreatListDescriptor",
  });

export interface GoogleSecuritySafebrowsingV4ListThreatListsResponse {
  /** The lists available for download by the client. */
  threatLists?: ReadonlyArray<GoogleSecuritySafebrowsingV4ThreatListDescriptor>;
}

export const GoogleSecuritySafebrowsingV4ListThreatListsResponse: Schema.Schema<GoogleSecuritySafebrowsingV4ListThreatListsResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    threatLists: Schema.optional(
      Schema.Array(GoogleSecuritySafebrowsingV4ThreatListDescriptor),
    ),
  }).annotate({
    identifier: "GoogleSecuritySafebrowsingV4ListThreatListsResponse",
  });

export interface GoogleSecuritySafebrowsingV4ThreatInfo {
  /** The threat types to be checked. */
  threatTypes?: ReadonlyArray<
    | "THREAT_TYPE_UNSPECIFIED"
    | "MALWARE"
    | "SOCIAL_ENGINEERING"
    | "UNWANTED_SOFTWARE"
    | "POTENTIALLY_HARMFUL_APPLICATION"
    | "SOCIAL_ENGINEERING_INTERNAL"
    | "API_ABUSE"
    | "MALICIOUS_BINARY"
    | "CSD_WHITELIST"
    | "CSD_DOWNLOAD_WHITELIST"
    | "CLIENT_INCIDENT"
    | "CLIENT_INCIDENT_WHITELIST"
    | "APK_MALWARE_OFFLINE"
    | "SUBRESOURCE_FILTER"
    | "SUSPICIOUS"
    | "TRICK_TO_BILL"
    | "HIGH_CONFIDENCE_ALLOWLIST"
    | "ACCURACY_TIPS"
    | (string & {})
  >;
  /** The entry types to be checked. */
  threatEntryTypes?: ReadonlyArray<
    | "THREAT_ENTRY_TYPE_UNSPECIFIED"
    | "URL"
    | "EXECUTABLE"
    | "IP_RANGE"
    | "CHROME_EXTENSION"
    | "FILENAME"
    | "CERT"
    | (string & {})
  >;
  /** The platform types to be checked. */
  platformTypes?: ReadonlyArray<
    | "PLATFORM_TYPE_UNSPECIFIED"
    | "WINDOWS"
    | "LINUX"
    | "ANDROID"
    | "OSX"
    | "IOS"
    | "ANY_PLATFORM"
    | "ALL_PLATFORMS"
    | "CHROME"
    | (string & {})
  >;
  /** The threat entries to be checked. */
  threatEntries?: ReadonlyArray<GoogleSecuritySafebrowsingV4ThreatEntry>;
}

export const GoogleSecuritySafebrowsingV4ThreatInfo: Schema.Schema<GoogleSecuritySafebrowsingV4ThreatInfo> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    threatTypes: Schema.optional(Schema.Array(Schema.String)),
    threatEntryTypes: Schema.optional(Schema.Array(Schema.String)),
    platformTypes: Schema.optional(Schema.Array(Schema.String)),
    threatEntries: Schema.optional(
      Schema.Array(GoogleSecuritySafebrowsingV4ThreatEntry),
    ),
  }).annotate({ identifier: "GoogleSecuritySafebrowsingV4ThreatInfo" });

export interface GoogleSecuritySafebrowsingV4FindFullHashesRequest {
  /** The current client states for each of the client's local threat lists. */
  clientStates?: ReadonlyArray<string>;
  /** Client metadata associated with callers of higher-level APIs built on top of the client's implementation. */
  apiClient?: GoogleSecuritySafebrowsingV4ClientInfo;
  /** The client metadata. */
  client?: GoogleSecuritySafebrowsingV4ClientInfo;
  /** The lists and hashes to be checked. */
  threatInfo?: GoogleSecuritySafebrowsingV4ThreatInfo;
}

export const GoogleSecuritySafebrowsingV4FindFullHashesRequest: Schema.Schema<GoogleSecuritySafebrowsingV4FindFullHashesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientStates: Schema.optional(Schema.Array(Schema.String)),
    apiClient: Schema.optional(GoogleSecuritySafebrowsingV4ClientInfo),
    client: Schema.optional(GoogleSecuritySafebrowsingV4ClientInfo),
    threatInfo: Schema.optional(GoogleSecuritySafebrowsingV4ThreatInfo),
  }).annotate({
    identifier: "GoogleSecuritySafebrowsingV4FindFullHashesRequest",
  });

export interface GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry {
  /** The metadata entry value. For JSON requests, the value is base64-encoded. */
  value?: string;
  /** The metadata entry key. For JSON requests, the key is base64-encoded. */
  key?: string;
}

export const GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry: Schema.Schema<GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    value: Schema.optional(Schema.String),
    key: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry",
  });

export interface GoogleSecuritySafebrowsingV4ThreatEntryMetadata {
  /** The metadata entries. */
  entries?: ReadonlyArray<GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry>;
}

export const GoogleSecuritySafebrowsingV4ThreatEntryMetadata: Schema.Schema<GoogleSecuritySafebrowsingV4ThreatEntryMetadata> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    entries: Schema.optional(
      Schema.Array(
        GoogleSecuritySafebrowsingV4ThreatEntryMetadataMetadataEntry,
      ),
    ),
  }).annotate({
    identifier: "GoogleSecuritySafebrowsingV4ThreatEntryMetadata",
  });

export interface GoogleSecuritySafebrowsingV4FindThreatMatchesRequest {
  /** The client metadata. */
  client?: GoogleSecuritySafebrowsingV4ClientInfo;
  /** The lists and entries to be checked for matches. */
  threatInfo?: GoogleSecuritySafebrowsingV4ThreatInfo;
}

export const GoogleSecuritySafebrowsingV4FindThreatMatchesRequest: Schema.Schema<GoogleSecuritySafebrowsingV4FindThreatMatchesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client: Schema.optional(GoogleSecuritySafebrowsingV4ClientInfo),
    threatInfo: Schema.optional(GoogleSecuritySafebrowsingV4ThreatInfo),
  }).annotate({
    identifier: "GoogleSecuritySafebrowsingV4FindThreatMatchesRequest",
  });

export interface GoogleProtobufEmpty {}

export const GoogleProtobufEmpty: Schema.Schema<GoogleProtobufEmpty> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).annotate({
    identifier: "GoogleProtobufEmpty",
  });

export interface GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints {
  /** Sets the maximum number of entries that the client is willing to have in the local database for the specified list. This should be a power of 2 between 2**10 and 2**20. If zero, no database size limit is set. */
  maxDatabaseEntries?: number;
  /** The maximum size in number of entries. The update will not contain more entries than this value. This should be a power of 2 between 2**10 and 2**20. If zero, no update size limit is set. */
  maxUpdateEntries?: number;
  /** A client's physical location, expressed as a ISO 31166-1 alpha-2 region code. */
  deviceLocation?: string;
  /** Requests the list for a specific geographic location. If not set the server may pick that value based on the user's IP address. Expects ISO 3166-1 alpha-2 format. */
  region?: string;
  /** The compression types supported by the client. */
  supportedCompressions?: ReadonlyArray<
    "COMPRESSION_TYPE_UNSPECIFIED" | "RAW" | "RICE" | (string & {})
  >;
  /** Requests the lists for a specific language. Expects ISO 639 alpha-2 format. */
  language?: string;
}

export const GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints: Schema.Schema<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    maxDatabaseEntries: Schema.optional(Schema.Number),
    maxUpdateEntries: Schema.optional(Schema.Number),
    deviceLocation: Schema.optional(Schema.String),
    region: Schema.optional(Schema.String),
    supportedCompressions: Schema.optional(Schema.Array(Schema.String)),
    language: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints",
  });

export interface GoogleSecuritySafebrowsingV4RawHashes {
  /** The number of bytes for each prefix encoded below. This field can be anywhere from 4 (shortest prefix) to 32 (full SHA256 hash). */
  prefixSize?: number;
  /** The hashes, in binary format, concatenated into one long string. Hashes are sorted in lexicographic order. For JSON API users, hashes are base64-encoded. */
  rawHashes?: string;
}

export const GoogleSecuritySafebrowsingV4RawHashes: Schema.Schema<GoogleSecuritySafebrowsingV4RawHashes> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prefixSize: Schema.optional(Schema.Number),
    rawHashes: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleSecuritySafebrowsingV4RawHashes" });

export interface GoogleSecuritySafebrowsingV4ThreatMatch {
  /** The threat type matching this threat. */
  threatType?:
    | "THREAT_TYPE_UNSPECIFIED"
    | "MALWARE"
    | "SOCIAL_ENGINEERING"
    | "UNWANTED_SOFTWARE"
    | "POTENTIALLY_HARMFUL_APPLICATION"
    | "SOCIAL_ENGINEERING_INTERNAL"
    | "API_ABUSE"
    | "MALICIOUS_BINARY"
    | "CSD_WHITELIST"
    | "CSD_DOWNLOAD_WHITELIST"
    | "CLIENT_INCIDENT"
    | "CLIENT_INCIDENT_WHITELIST"
    | "APK_MALWARE_OFFLINE"
    | "SUBRESOURCE_FILTER"
    | "SUSPICIOUS"
    | "TRICK_TO_BILL"
    | "HIGH_CONFIDENCE_ALLOWLIST"
    | "ACCURACY_TIPS"
    | (string & {});
  /** Optional metadata associated with this threat. */
  threatEntryMetadata?: GoogleSecuritySafebrowsingV4ThreatEntryMetadata;
  /** The platform type matching this threat. */
  platformType?:
    | "PLATFORM_TYPE_UNSPECIFIED"
    | "WINDOWS"
    | "LINUX"
    | "ANDROID"
    | "OSX"
    | "IOS"
    | "ANY_PLATFORM"
    | "ALL_PLATFORMS"
    | "CHROME"
    | (string & {});
  /** The threat entry type matching this threat. */
  threatEntryType?:
    | "THREAT_ENTRY_TYPE_UNSPECIFIED"
    | "URL"
    | "EXECUTABLE"
    | "IP_RANGE"
    | "CHROME_EXTENSION"
    | "FILENAME"
    | "CERT"
    | (string & {});
  /** The cache lifetime for the returned match. Clients must not cache this response for more than this duration to avoid false positives. */
  cacheDuration?: string;
  /** The threat matching this threat. */
  threat?: GoogleSecuritySafebrowsingV4ThreatEntry;
}

export const GoogleSecuritySafebrowsingV4ThreatMatch: Schema.Schema<GoogleSecuritySafebrowsingV4ThreatMatch> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    threatType: Schema.optional(Schema.String),
    threatEntryMetadata: Schema.optional(
      GoogleSecuritySafebrowsingV4ThreatEntryMetadata,
    ),
    platformType: Schema.optional(Schema.String),
    threatEntryType: Schema.optional(Schema.String),
    cacheDuration: Schema.optional(Schema.String),
    threat: Schema.optional(GoogleSecuritySafebrowsingV4ThreatEntry),
  }).annotate({ identifier: "GoogleSecuritySafebrowsingV4ThreatMatch" });

export interface GoogleSecuritySafebrowsingV4FindFullHashesResponse {
  /** The minimum duration the client must wait before issuing any find hashes request. If this field is not set, clients can issue a request as soon as they want. */
  minimumWaitDuration?: string;
  /** For requested entities that did not match the threat list, how long to cache the response. */
  negativeCacheDuration?: string;
  /** The full hashes that matched the requested prefixes. */
  matches?: ReadonlyArray<GoogleSecuritySafebrowsingV4ThreatMatch>;
}

export const GoogleSecuritySafebrowsingV4FindFullHashesResponse: Schema.Schema<GoogleSecuritySafebrowsingV4FindFullHashesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    minimumWaitDuration: Schema.optional(Schema.String),
    negativeCacheDuration: Schema.optional(Schema.String),
    matches: Schema.optional(
      Schema.Array(GoogleSecuritySafebrowsingV4ThreatMatch),
    ),
  }).annotate({
    identifier: "GoogleSecuritySafebrowsingV4FindFullHashesResponse",
  });

export interface GoogleSecuritySafebrowsingV4RiceDeltaEncoding {
  /** The offset of the first entry in the encoded data, or, if only a single integer was encoded, that single integer's value. If the field is empty or missing, assume zero. */
  firstValue?: string;
  /** The Golomb-Rice parameter, which is a number between 2 and 28. This field is missing (that is, zero) if `num_entries` is zero. */
  riceParameter?: number;
  /** The number of entries that are delta encoded in the encoded data. If only a single integer was encoded, this will be zero and the single value will be stored in `first_value`. */
  numEntries?: number;
  /** The encoded deltas that are encoded using the Golomb-Rice coder. */
  encodedData?: string;
}

export const GoogleSecuritySafebrowsingV4RiceDeltaEncoding: Schema.Schema<GoogleSecuritySafebrowsingV4RiceDeltaEncoding> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firstValue: Schema.optional(Schema.String),
    riceParameter: Schema.optional(Schema.Number),
    numEntries: Schema.optional(Schema.Number),
    encodedData: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleSecuritySafebrowsingV4RiceDeltaEncoding" });

export interface GoogleSecuritySafebrowsingV4RawIndices {
  /** The indices to remove from a lexicographically-sorted local list. */
  indices?: ReadonlyArray<number>;
}

export const GoogleSecuritySafebrowsingV4RawIndices: Schema.Schema<GoogleSecuritySafebrowsingV4RawIndices> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    indices: Schema.optional(Schema.Array(Schema.Number)),
  }).annotate({ identifier: "GoogleSecuritySafebrowsingV4RawIndices" });

export interface GoogleSecuritySafebrowsingV4ThreatEntrySet {
  /** The raw SHA256-formatted entries. */
  rawHashes?: GoogleSecuritySafebrowsingV4RawHashes;
  /** The encoded 4-byte prefixes of SHA256-formatted entries, using a Golomb-Rice encoding. The hashes are converted to uint32, sorted in ascending order, then delta encoded and stored as encoded_data. */
  riceHashes?: GoogleSecuritySafebrowsingV4RiceDeltaEncoding;
  /** The encoded local, lexicographically-sorted list indices, using a Golomb-Rice encoding. Used for sending compressed removal indices. The removal indices (uint32) are sorted in ascending order, then delta encoded and stored as encoded_data. */
  riceIndices?: GoogleSecuritySafebrowsingV4RiceDeltaEncoding;
  /** The compression type for the entries in this set. */
  compressionType?:
    | "COMPRESSION_TYPE_UNSPECIFIED"
    | "RAW"
    | "RICE"
    | (string & {});
  /** The raw removal indices for a local list. */
  rawIndices?: GoogleSecuritySafebrowsingV4RawIndices;
}

export const GoogleSecuritySafebrowsingV4ThreatEntrySet: Schema.Schema<GoogleSecuritySafebrowsingV4ThreatEntrySet> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rawHashes: Schema.optional(GoogleSecuritySafebrowsingV4RawHashes),
    riceHashes: Schema.optional(GoogleSecuritySafebrowsingV4RiceDeltaEncoding),
    riceIndices: Schema.optional(GoogleSecuritySafebrowsingV4RiceDeltaEncoding),
    compressionType: Schema.optional(Schema.String),
    rawIndices: Schema.optional(GoogleSecuritySafebrowsingV4RawIndices),
  }).annotate({ identifier: "GoogleSecuritySafebrowsingV4ThreatEntrySet" });

export interface GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest {
  /** The current state of the client for the requested list (the encrypted client state that was received from the last successful list update). */
  state?: string;
  /** The type of platform at risk by entries present in the list. */
  platformType?:
    | "PLATFORM_TYPE_UNSPECIFIED"
    | "WINDOWS"
    | "LINUX"
    | "ANDROID"
    | "OSX"
    | "IOS"
    | "ANY_PLATFORM"
    | "ALL_PLATFORMS"
    | "CHROME"
    | (string & {});
  /** The types of entries present in the list. */
  threatEntryType?:
    | "THREAT_ENTRY_TYPE_UNSPECIFIED"
    | "URL"
    | "EXECUTABLE"
    | "IP_RANGE"
    | "CHROME_EXTENSION"
    | "FILENAME"
    | "CERT"
    | (string & {});
  /** The type of threat posed by entries present in the list. */
  threatType?:
    | "THREAT_TYPE_UNSPECIFIED"
    | "MALWARE"
    | "SOCIAL_ENGINEERING"
    | "UNWANTED_SOFTWARE"
    | "POTENTIALLY_HARMFUL_APPLICATION"
    | "SOCIAL_ENGINEERING_INTERNAL"
    | "API_ABUSE"
    | "MALICIOUS_BINARY"
    | "CSD_WHITELIST"
    | "CSD_DOWNLOAD_WHITELIST"
    | "CLIENT_INCIDENT"
    | "CLIENT_INCIDENT_WHITELIST"
    | "APK_MALWARE_OFFLINE"
    | "SUBRESOURCE_FILTER"
    | "SUSPICIOUS"
    | "TRICK_TO_BILL"
    | "HIGH_CONFIDENCE_ALLOWLIST"
    | "ACCURACY_TIPS"
    | (string & {});
  /** The constraints associated with this request. */
  constraints?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints;
}

export const GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest: Schema.Schema<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    state: Schema.optional(Schema.String),
    platformType: Schema.optional(Schema.String),
    threatEntryType: Schema.optional(Schema.String),
    threatType: Schema.optional(Schema.String),
    constraints: Schema.optional(
      GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequestConstraints,
    ),
  }).annotate({
    identifier:
      "GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest",
  });

export interface GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest {
  /** The client metadata. */
  client?: GoogleSecuritySafebrowsingV4ClientInfo;
  /** The requested threat list updates. */
  listUpdateRequests?: ReadonlyArray<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest>;
}

export const GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest: Schema.Schema<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client: Schema.optional(GoogleSecuritySafebrowsingV4ClientInfo),
    listUpdateRequests: Schema.optional(
      Schema.Array(
        GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequestListUpdateRequest,
      ),
    ),
  }).annotate({
    identifier: "GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest",
  });

export interface GoogleSecuritySafebrowsingV4FindThreatMatchesResponse {
  /** The threat list matches. */
  matches?: ReadonlyArray<GoogleSecuritySafebrowsingV4ThreatMatch>;
}

export const GoogleSecuritySafebrowsingV4FindThreatMatchesResponse: Schema.Schema<GoogleSecuritySafebrowsingV4FindThreatMatchesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    matches: Schema.optional(
      Schema.Array(GoogleSecuritySafebrowsingV4ThreatMatch),
    ),
  }).annotate({
    identifier: "GoogleSecuritySafebrowsingV4FindThreatMatchesResponse",
  });

export interface GoogleSecuritySafebrowsingV4Checksum {
  /** The SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database. */
  sha256?: string;
}

export const GoogleSecuritySafebrowsingV4Checksum: Schema.Schema<GoogleSecuritySafebrowsingV4Checksum> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    sha256: Schema.optional(Schema.String),
  }).annotate({ identifier: "GoogleSecuritySafebrowsingV4Checksum" });

export interface GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse {
  /** A set of entries to remove from a local threat type's list. In practice, this field is empty or contains exactly one ThreatEntrySet. */
  removals?: ReadonlyArray<GoogleSecuritySafebrowsingV4ThreatEntrySet>;
  /** The format of the threats. */
  threatEntryType?:
    | "THREAT_ENTRY_TYPE_UNSPECIFIED"
    | "URL"
    | "EXECUTABLE"
    | "IP_RANGE"
    | "CHROME_EXTENSION"
    | "FILENAME"
    | "CERT"
    | (string & {});
  /** The platform type for which data is returned. */
  platformType?:
    | "PLATFORM_TYPE_UNSPECIFIED"
    | "WINDOWS"
    | "LINUX"
    | "ANDROID"
    | "OSX"
    | "IOS"
    | "ANY_PLATFORM"
    | "ALL_PLATFORMS"
    | "CHROME"
    | (string & {});
  /** A set of entries to add to a local threat type's list. Repeated to allow for a combination of compressed and raw data to be sent in a single response. */
  additions?: ReadonlyArray<GoogleSecuritySafebrowsingV4ThreatEntrySet>;
  /** The expected SHA256 hash of the client state; that is, of the sorted list of all hashes present in the database after applying the provided update. If the client state doesn't match the expected state, the client must disregard this update and retry later. */
  checksum?: GoogleSecuritySafebrowsingV4Checksum;
  /** The type of response. This may indicate that an action is required by the client when the response is received. */
  responseType?:
    | "RESPONSE_TYPE_UNSPECIFIED"
    | "PARTIAL_UPDATE"
    | "FULL_UPDATE"
    | (string & {});
  /** The new client state, in encrypted format. Opaque to clients. */
  newClientState?: string;
  /** The threat type for which data is returned. */
  threatType?:
    | "THREAT_TYPE_UNSPECIFIED"
    | "MALWARE"
    | "SOCIAL_ENGINEERING"
    | "UNWANTED_SOFTWARE"
    | "POTENTIALLY_HARMFUL_APPLICATION"
    | "SOCIAL_ENGINEERING_INTERNAL"
    | "API_ABUSE"
    | "MALICIOUS_BINARY"
    | "CSD_WHITELIST"
    | "CSD_DOWNLOAD_WHITELIST"
    | "CLIENT_INCIDENT"
    | "CLIENT_INCIDENT_WHITELIST"
    | "APK_MALWARE_OFFLINE"
    | "SUBRESOURCE_FILTER"
    | "SUSPICIOUS"
    | "TRICK_TO_BILL"
    | "HIGH_CONFIDENCE_ALLOWLIST"
    | "ACCURACY_TIPS"
    | (string & {});
}

export const GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse: Schema.Schema<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    removals: Schema.optional(
      Schema.Array(GoogleSecuritySafebrowsingV4ThreatEntrySet),
    ),
    threatEntryType: Schema.optional(Schema.String),
    platformType: Schema.optional(Schema.String),
    additions: Schema.optional(
      Schema.Array(GoogleSecuritySafebrowsingV4ThreatEntrySet),
    ),
    checksum: Schema.optional(GoogleSecuritySafebrowsingV4Checksum),
    responseType: Schema.optional(Schema.String),
    newClientState: Schema.optional(Schema.String),
    threatType: Schema.optional(Schema.String),
  }).annotate({
    identifier:
      "GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse",
  });

export interface GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse {
  /** The list updates requested by the clients. The number of responses here may be less than the number of requests sent by clients. This is the case, for example, if the server has no updates for a particular list. */
  listUpdateResponses?: ReadonlyArray<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse>;
  /** The minimum duration the client must wait before issuing any update request. If this field is not set clients may update as soon as they want. */
  minimumWaitDuration?: string;
}

export const GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse: Schema.Schema<GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse> =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    listUpdateResponses: Schema.optional(
      Schema.Array(
        GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponseListUpdateResponse,
      ),
    ),
    minimumWaitDuration: Schema.optional(Schema.String),
  }).annotate({
    identifier: "GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse",
  });

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

export interface ListThreatListsRequest {}

export const ListThreatListsRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(
  T.Http({ method: "GET", path: "v4/threatLists" }),
  svc,
) as unknown as Schema.Schema<ListThreatListsRequest>;

export type ListThreatListsResponse =
  GoogleSecuritySafebrowsingV4ListThreatListsResponse;
export const ListThreatListsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleSecuritySafebrowsingV4ListThreatListsResponse;

export type ListThreatListsError = DefaultErrors | NotFound | Forbidden;

/** Lists the Safe Browsing threat lists available for download. */
export const listThreatLists: API.OperationMethod<
  ListThreatListsRequest,
  ListThreatListsResponse,
  ListThreatListsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: ListThreatListsRequest,
  output: ListThreatListsResponse,
  errors: [NotFound, Forbidden],
}));

export interface FindThreatMatchesRequest {
  /** Request body */
  body?: GoogleSecuritySafebrowsingV4FindThreatMatchesRequest;
}

export const FindThreatMatchesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      GoogleSecuritySafebrowsingV4FindThreatMatchesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({ method: "POST", path: "v4/threatMatches:find", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<FindThreatMatchesRequest>;

export type FindThreatMatchesResponse =
  GoogleSecuritySafebrowsingV4FindThreatMatchesResponse;
export const FindThreatMatchesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleSecuritySafebrowsingV4FindThreatMatchesResponse;

export type FindThreatMatchesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Finds the threat entries that match the Safe Browsing lists. */
export const findThreatMatches: API.OperationMethod<
  FindThreatMatchesRequest,
  FindThreatMatchesResponse,
  FindThreatMatchesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FindThreatMatchesRequest,
  output: FindThreatMatchesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEncodedUpdatesRequest {
  /** The version of the client implementation. */
  clientVersion?: string;
  /** A serialized FetchThreatListUpdatesRequest proto. */
  encodedRequest: string;
  /** A client ID that uniquely identifies the client implementation of the Safe Browsing API. */
  clientId?: string;
}

export const GetEncodedUpdatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("clientVersion"),
    ),
    encodedRequest: Schema.String.pipe(T.HttpPath("encodedRequest")),
    clientId: Schema.optional(Schema.String).pipe(T.HttpQuery("clientId")),
  }).pipe(
    T.Http({ method: "GET", path: "v4/encodedUpdates/{encodedRequest}" }),
    svc,
  ) as unknown as Schema.Schema<GetEncodedUpdatesRequest>;

export type GetEncodedUpdatesResponse =
  GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse;
export const GetEncodedUpdatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse;

export type GetEncodedUpdatesError = DefaultErrors | NotFound | Forbidden;

export const getEncodedUpdates: API.OperationMethod<
  GetEncodedUpdatesRequest,
  GetEncodedUpdatesResponse,
  GetEncodedUpdatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEncodedUpdatesRequest,
  output: GetEncodedUpdatesResponse,
  errors: [NotFound, Forbidden],
}));

export interface FindFullHashesRequest {
  /** Request body */
  body?: GoogleSecuritySafebrowsingV4FindFullHashesRequest;
}

export const FindFullHashesRequest = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  body: Schema.optional(GoogleSecuritySafebrowsingV4FindFullHashesRequest).pipe(
    T.HttpBody(),
  ),
}).pipe(
  T.Http({ method: "POST", path: "v4/fullHashes:find", hasBody: true }),
  svc,
) as unknown as Schema.Schema<FindFullHashesRequest>;

export type FindFullHashesResponse =
  GoogleSecuritySafebrowsingV4FindFullHashesResponse;
export const FindFullHashesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleSecuritySafebrowsingV4FindFullHashesResponse;

export type FindFullHashesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Finds the full hashes that match the requested hash prefixes. */
export const findFullHashes: API.OperationMethod<
  FindFullHashesRequest,
  FindFullHashesResponse,
  FindFullHashesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FindFullHashesRequest,
  output: FindFullHashesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface GetEncodedFullHashesRequest {
  /** The version of the client implementation. */
  clientVersion?: string;
  /** A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API. */
  clientId?: string;
  /** A serialized FindFullHashesRequest proto. */
  encodedRequest: string;
}

export const GetEncodedFullHashesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    clientVersion: Schema.optional(Schema.String).pipe(
      T.HttpQuery("clientVersion"),
    ),
    clientId: Schema.optional(Schema.String).pipe(T.HttpQuery("clientId")),
    encodedRequest: Schema.String.pipe(T.HttpPath("encodedRequest")),
  }).pipe(
    T.Http({ method: "GET", path: "v4/encodedFullHashes/{encodedRequest}" }),
    svc,
  ) as unknown as Schema.Schema<GetEncodedFullHashesRequest>;

export type GetEncodedFullHashesResponse =
  GoogleSecuritySafebrowsingV4FindFullHashesResponse;
export const GetEncodedFullHashesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleSecuritySafebrowsingV4FindFullHashesResponse;

export type GetEncodedFullHashesError = DefaultErrors | NotFound | Forbidden;

export const getEncodedFullHashes: API.OperationMethod<
  GetEncodedFullHashesRequest,
  GetEncodedFullHashesResponse,
  GetEncodedFullHashesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: GetEncodedFullHashesRequest,
  output: GetEncodedFullHashesResponse,
  errors: [NotFound, Forbidden],
}));

export interface CreateThreatHitsRequest {
  /** Request body */
  body?: GoogleSecuritySafebrowsingV4ThreatHit;
}

export const CreateThreatHitsRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(GoogleSecuritySafebrowsingV4ThreatHit).pipe(
      T.HttpBody(),
    ),
  }).pipe(
    T.Http({ method: "POST", path: "v4/threatHits", hasBody: true }),
    svc,
  ) as unknown as Schema.Schema<CreateThreatHitsRequest>;

export type CreateThreatHitsResponse = GoogleProtobufEmpty;
export const CreateThreatHitsResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleProtobufEmpty;

export type CreateThreatHitsError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method. */
export const createThreatHits: API.OperationMethod<
  CreateThreatHitsRequest,
  CreateThreatHitsResponse,
  CreateThreatHitsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: CreateThreatHitsRequest,
  output: CreateThreatHitsResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));

export interface FetchThreatListUpdatesRequest {
  /** Request body */
  body?: GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest;
}

export const FetchThreatListUpdatesRequest =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    body: Schema.optional(
      GoogleSecuritySafebrowsingV4FetchThreatListUpdatesRequest,
    ).pipe(T.HttpBody()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "v4/threatListUpdates:fetch",
      hasBody: true,
    }),
    svc,
  ) as unknown as Schema.Schema<FetchThreatListUpdatesRequest>;

export type FetchThreatListUpdatesResponse =
  GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse;
export const FetchThreatListUpdatesResponse =
  /*@__PURE__*/ /*#__PURE__*/ GoogleSecuritySafebrowsingV4FetchThreatListUpdatesResponse;

export type FetchThreatListUpdatesError =
  | DefaultErrors
  | NotFound
  | Forbidden
  | BadRequest
  | Conflict;

/** Fetches the most recent threat list updates. A client can request updates for multiple lists at once. */
export const fetchThreatListUpdates: API.OperationMethod<
  FetchThreatListUpdatesRequest,
  FetchThreatListUpdatesResponse,
  FetchThreatListUpdatesError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  input: FetchThreatListUpdatesRequest,
  output: FetchThreatListUpdatesResponse,
  errors: [NotFound, Forbidden, BadRequest, Conflict],
}));
