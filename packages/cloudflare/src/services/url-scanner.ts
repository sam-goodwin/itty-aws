/**
 * Cloudflare URL-SCANNER API
 *
 * Generated from Cloudflare TypeScript SDK.
 * DO NOT EDIT - regenerate with: bun scripts/generate.ts --service url-scanner
 */

import * as Schema from "@distilled.cloud/core/schema";
import type * as HttpClient from "effect/unstable/http/HttpClient";
import * as API from "../client/api.ts";
import * as T from "../traits.ts";
import type { Credentials } from "../credentials.ts";
import { type DefaultErrors } from "../errors.ts";

// =============================================================================
// Shared nested schemas (hoisted, module-private)
// =============================================================================

interface Message {
  level: string;
  source: string;
  text: string;
  url: string;
}
const Message = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    level: Schema.String,
    source: Schema.String,
    text: Schema.String,
    url: Schema.String,
  }),
) as unknown as Schema.Codec<Message>;

interface Console {
  message: { level: string; source: string; text: string; url: string };
}
const Console = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    message: Message,
  }),
) as unknown as Schema.Codec<Console>;

interface Cookie {
  domain: string;
  expires: number;
  httpOnly: boolean;
  name: string;
  path: string;
  priority: string;
  sameParty: boolean;
  secure: boolean;
  session: boolean;
  size: number;
  sourcePort: number;
  sourceScheme: string;
  value: string;
}
const Cookie = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    domain: Schema.String,
    expires: Schema.Number,
    httpOnly: Schema.Boolean,
    name: Schema.String,
    path: Schema.String,
    priority: Schema.String,
    sameParty: Schema.Boolean,
    secure: Schema.Boolean,
    session: Schema.Boolean,
    size: Schema.Number,
    sourcePort: Schema.Number,
    sourceScheme: Schema.String,
    value: Schema.String,
  }),
) as unknown as Schema.Codec<Cookie>;

interface Global {
  prop: string;
  type: string;
}
const Global = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    prop: Schema.String,
    type: Schema.String,
  }),
) as unknown as Schema.Codec<Global>;

interface Link {
  href: string;
  text: string;
}
const Link = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    href: Schema.String,
    text: Schema.String,
  }),
) as unknown as Schema.Codec<Link>;

interface Performance {
  duration: number;
  entryType: string;
  name: string;
  startTime: number;
}
const Performance = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    duration: Schema.Number,
    entryType: Schema.String,
    name: Schema.String,
    startTime: Schema.Number,
  }),
) as unknown as Schema.Codec<Performance>;

interface Initiator {
  host: string;
  type: string;
  url: string;
}
const Initiator = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    host: Schema.String,
    type: Schema.String,
    url: Schema.String,
  }),
) as unknown as Schema.Codec<Initiator>;

interface Request {
  initialPriority: string;
  isSameSite: boolean;
  method: string;
  mixedContentType: string;
  referrerPolicy: string;
  url: string;
  headers?: unknown | null;
}
const Request = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    initialPriority: Schema.String,
    isSameSite: Schema.Boolean,
    method: Schema.String,
    mixedContentType: Schema.String,
    referrerPolicy: Schema.String,
    url: Schema.String,
    headers: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
  }),
) as unknown as Schema.Codec<Request>;

interface SecurityHeader {
  name: string;
  value: string;
}
const SecurityHeader = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    value: Schema.String,
  }),
) as unknown as Schema.Codec<SecurityHeader>;

interface RedirectResponse {
  charset: string;
  mimeType: string;
  protocol: string;
  remoteIPAddress: string;
  remotePort: number;
  securityHeaders: { name: string; value: string }[];
  securityState: string;
  status: number;
  statusText: string;
  url: string;
  headers?: unknown | null;
}
const RedirectResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    charset: Schema.String,
    mimeType: Schema.String,
    protocol: Schema.String,
    remoteIPAddress: Schema.String,
    remotePort: Schema.Number,
    securityHeaders: Schema.Array(SecurityHeader),
    securityState: Schema.String,
    status: Schema.Number,
    statusText: Schema.String,
    url: Schema.String,
    headers: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
  }),
) as unknown as Schema.Codec<RedirectResponse>;

interface Request2 {
  documentURL: string;
  hasUserGesture: boolean;
  initiator: { host: string; type: string; url: string };
  redirectHasExtraInfo: boolean;
  request: {
    initialPriority: string;
    isSameSite: boolean;
    method: string;
    mixedContentType: string;
    referrerPolicy: string;
    url: string;
    headers?: unknown | null;
  };
  requestId: string;
  type: string;
  wallTime: number;
  frameId?: string | null;
  loaderId?: string | null;
  primaryRequest?: boolean | null;
  redirectResponse?: {
    charset: string;
    mimeType: string;
    protocol: string;
    remoteIPAddress: string;
    remotePort: number;
    securityHeaders: { name: string; value: string }[];
    securityState: string;
    status: number;
    statusText: string;
    url: string;
    headers?: unknown | null;
  } | null;
}
const Request2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    documentURL: Schema.String,
    hasUserGesture: Schema.Boolean,
    initiator: Initiator,
    redirectHasExtraInfo: Schema.Boolean,
    request: Request,
    requestId: Schema.String,
    type: Schema.String,
    wallTime: Schema.Number,
    frameId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    loaderId: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    primaryRequest: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    redirectResponse: Schema.optional(
      Schema.Union([RedirectResponse, Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Request2>;

interface Asn {
  asn: string;
  country: string;
  description: string;
  ip: string;
  name: string;
  org: string;
}
const Asn = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    asn: Schema.String,
    country: Schema.String,
    description: Schema.String,
    ip: Schema.String,
    name: Schema.String,
    org: Schema.String,
  }),
) as unknown as Schema.Codec<Asn>;

interface Geoip {
  city: string;
  country: string;
  countryName: string;
  geonameId: string;
  ll: number[];
  region: string;
}
const Geoip = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    city: Schema.String,
    country: Schema.String,
    countryName: Schema.String,
    geonameId: Schema.String,
    ll: Schema.Array(Schema.Number),
    region: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      city: "city",
      country: "country",
      countryName: "country_name",
      geonameId: "geonameId",
      ll: "ll",
      region: "region",
    }),
  ),
) as unknown as Schema.Codec<Geoip>;

interface SecurityDetails {
  certificateId: number;
  certificateTransparencyCompliance: string;
  cipher: string;
  encryptedClientHello: boolean;
  issuer: string;
  keyExchange: string;
  keyExchangeGroup: string;
  protocol: string;
  sanList: string[];
  serverSignatureAlgorithm: number;
  subjectName: string;
  validFrom: number;
  validTo: number;
}
const SecurityDetails = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    certificateId: Schema.Number,
    certificateTransparencyCompliance: Schema.String,
    cipher: Schema.String,
    encryptedClientHello: Schema.Boolean,
    issuer: Schema.String,
    keyExchange: Schema.String,
    keyExchangeGroup: Schema.String,
    protocol: Schema.String,
    sanList: Schema.Array(Schema.String),
    serverSignatureAlgorithm: Schema.Number,
    subjectName: Schema.String,
    validFrom: Schema.Number,
    validTo: Schema.Number,
  }),
) as unknown as Schema.Codec<SecurityDetails>;

interface Response {
  charset: string;
  mimeType: string;
  protocol: string;
  remoteIPAddress: string;
  remotePort: number;
  securityDetails: {
    certificateId: number;
    certificateTransparencyCompliance: string;
    cipher: string;
    encryptedClientHello: boolean;
    issuer: string;
    keyExchange: string;
    keyExchangeGroup: string;
    protocol: string;
    sanList: string[];
    serverSignatureAlgorithm: number;
    subjectName: string;
    validFrom: number;
    validTo: number;
  };
  securityHeaders: { name: string; value: string }[];
  securityState: string;
  status: number;
  statusText: string;
  url: string;
  headers?: unknown | null;
}
const Response = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    charset: Schema.String,
    mimeType: Schema.String,
    protocol: Schema.String,
    remoteIPAddress: Schema.String,
    remotePort: Schema.Number,
    securityDetails: SecurityDetails,
    securityHeaders: Schema.Array(SecurityHeader),
    securityState: Schema.String,
    status: Schema.Number,
    statusText: Schema.String,
    url: Schema.String,
    headers: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
  }),
) as unknown as Schema.Codec<Response>;

interface Response2 {
  asn: {
    asn: string;
    country: string;
    description: string;
    ip: string;
    name: string;
    org: string;
  };
  dataLength: number;
  encodedDataLength: number;
  geoip: {
    city: string;
    country: string;
    countryName: string;
    geonameId: string;
    ll: number[];
    region: string;
  };
  hasExtraInfo: boolean;
  requestId: string;
  response: {
    charset: string;
    mimeType: string;
    protocol: string;
    remoteIPAddress: string;
    remotePort: number;
    securityDetails: {
      certificateId: number;
      certificateTransparencyCompliance: string;
      cipher: string;
      encryptedClientHello: boolean;
      issuer: string;
      keyExchange: string;
      keyExchangeGroup: string;
      protocol: string;
      sanList: string[];
      serverSignatureAlgorithm: number;
      subjectName: string;
      validFrom: number;
      validTo: number;
    };
    securityHeaders: { name: string; value: string }[];
    securityState: string;
    status: number;
    statusText: string;
    url: string;
    headers?: unknown | null;
  };
  size: number;
  type: string;
  contentAvailable?: boolean | null;
  hash?: string | null;
}
const Response2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    asn: Asn,
    dataLength: Schema.Number,
    encodedDataLength: Schema.Number,
    geoip: Geoip,
    hasExtraInfo: Schema.Boolean,
    requestId: Schema.String,
    response: Response,
    size: Schema.Number,
    type: Schema.String,
    contentAvailable: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    hash: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Response2>;

interface Initiator2 {
  type: string;
}
const Initiator2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    type: Schema.String,
  }),
) as unknown as Schema.Codec<Initiator2>;

interface Headers {
  name: string;
}
const Headers = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
  }),
) as unknown as Schema.Codec<Headers>;

interface Request3 {
  headers: { name: string };
  initialPriority: string;
  isSameSite: boolean;
  method: string;
  mixedContentType: string;
  referrerPolicy: string;
  url: string;
}
const Request3 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    headers: Headers,
    initialPriority: Schema.String,
    isSameSite: Schema.Boolean,
    method: Schema.String,
    mixedContentType: Schema.String,
    referrerPolicy: Schema.String,
    url: Schema.String,
  }),
) as unknown as Schema.Codec<Request3>;

interface RequestItem {
  documentURL: string;
  frameId: string;
  hasUserGesture: boolean;
  initiator: { type: string };
  loaderId: string;
  redirectHasExtraInfo: boolean;
  request: {
    headers: { name: string };
    initialPriority: string;
    isSameSite: boolean;
    method: string;
    mixedContentType: string;
    referrerPolicy: string;
    url: string;
  };
  requestId: string;
  type: string;
  wallTime: number;
}
const RequestItem = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    documentURL: Schema.String,
    frameId: Schema.String,
    hasUserGesture: Schema.Boolean,
    initiator: Initiator2,
    loaderId: Schema.String,
    redirectHasExtraInfo: Schema.Boolean,
    request: Request3,
    requestId: Schema.String,
    type: Schema.String,
    wallTime: Schema.Number,
  }),
) as unknown as Schema.Codec<RequestItem>;

interface Request4 {
  request: {
    documentURL: string;
    hasUserGesture: boolean;
    initiator: { host: string; type: string; url: string };
    redirectHasExtraInfo: boolean;
    request: {
      initialPriority: string;
      isSameSite: boolean;
      method: string;
      mixedContentType: string;
      referrerPolicy: string;
      url: string;
      headers?: unknown | null;
    };
    requestId: string;
    type: string;
    wallTime: number;
    frameId?: string | null;
    loaderId?: string | null;
    primaryRequest?: boolean | null;
    redirectResponse?: {
      charset: string;
      mimeType: string;
      protocol: string;
      remoteIPAddress: string;
      remotePort: number;
      securityHeaders: { name: string; value: string }[];
      securityState: string;
      status: number;
      statusText: string;
      url: string;
      headers?: unknown | null;
    } | null;
  };
  response: {
    asn: {
      asn: string;
      country: string;
      description: string;
      ip: string;
      name: string;
      org: string;
    };
    dataLength: number;
    encodedDataLength: number;
    geoip: {
      city: string;
      country: string;
      countryName: string;
      geonameId: string;
      ll: number[];
      region: string;
    };
    hasExtraInfo: boolean;
    requestId: string;
    response: {
      charset: string;
      mimeType: string;
      protocol: string;
      remoteIPAddress: string;
      remotePort: number;
      securityDetails: {
        certificateId: number;
        certificateTransparencyCompliance: string;
        cipher: string;
        encryptedClientHello: boolean;
        issuer: string;
        keyExchange: string;
        keyExchangeGroup: string;
        protocol: string;
        sanList: string[];
        serverSignatureAlgorithm: number;
        subjectName: string;
        validFrom: number;
        validTo: number;
      };
      securityHeaders: { name: string; value: string }[];
      securityState: string;
      status: number;
      statusText: string;
      url: string;
      headers?: unknown | null;
    };
    size: number;
    type: string;
    contentAvailable?: boolean | null;
    hash?: string | null;
  };
  requests?:
    | {
        documentURL: string;
        frameId: string;
        hasUserGesture: boolean;
        initiator: { type: string };
        loaderId: string;
        redirectHasExtraInfo: boolean;
        request: {
          headers: { name: string };
          initialPriority: string;
          isSameSite: boolean;
          method: string;
          mixedContentType: string;
          referrerPolicy: string;
          url: string;
        };
        requestId: string;
        type: string;
        wallTime: number;
      }[]
    | null;
}
const Request4 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    request: Request2,
    response: Response2,
    requests: Schema.optional(
      Schema.Union([Schema.Array(RequestItem), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Request4>;

interface Data {
  console: {
    message: { level: string; source: string; text: string; url: string };
  }[];
  cookies: {
    domain: string;
    expires: number;
    httpOnly: boolean;
    name: string;
    path: string;
    priority: string;
    sameParty: boolean;
    secure: boolean;
    session: boolean;
    size: number;
    sourcePort: number;
    sourceScheme: string;
    value: string;
  }[];
  globals: { prop: string; type: string }[];
  links: { href: string; text: string }[];
  performance: {
    duration: number;
    entryType: string;
    name: string;
    startTime: number;
  }[];
  requests: {
    request: {
      documentURL: string;
      hasUserGesture: boolean;
      initiator: { host: string; type: string; url: string };
      redirectHasExtraInfo: boolean;
      request: {
        initialPriority: string;
        isSameSite: boolean;
        method: string;
        mixedContentType: string;
        referrerPolicy: string;
        url: string;
        headers?: unknown | null;
      };
      requestId: string;
      type: string;
      wallTime: number;
      frameId?: string | null;
      loaderId?: string | null;
      primaryRequest?: boolean | null;
      redirectResponse?: {
        charset: string;
        mimeType: string;
        protocol: string;
        remoteIPAddress: string;
        remotePort: number;
        securityHeaders: { name: string; value: string }[];
        securityState: string;
        status: number;
        statusText: string;
        url: string;
        headers?: unknown | null;
      } | null;
    };
    response: {
      asn: {
        asn: string;
        country: string;
        description: string;
        ip: string;
        name: string;
        org: string;
      };
      dataLength: number;
      encodedDataLength: number;
      geoip: {
        city: string;
        country: string;
        countryName: string;
        geonameId: string;
        ll: number[];
        region: string;
      };
      hasExtraInfo: boolean;
      requestId: string;
      response: {
        charset: string;
        mimeType: string;
        protocol: string;
        remoteIPAddress: string;
        remotePort: number;
        securityDetails: {
          certificateId: number;
          certificateTransparencyCompliance: string;
          cipher: string;
          encryptedClientHello: boolean;
          issuer: string;
          keyExchange: string;
          keyExchangeGroup: string;
          protocol: string;
          sanList: string[];
          serverSignatureAlgorithm: number;
          subjectName: string;
          validFrom: number;
          validTo: number;
        };
        securityHeaders: { name: string; value: string }[];
        securityState: string;
        status: number;
        statusText: string;
        url: string;
        headers?: unknown | null;
      };
      size: number;
      type: string;
      contentAvailable?: boolean | null;
      hash?: string | null;
    };
    requests?:
      | {
          documentURL: string;
          frameId: string;
          hasUserGesture: boolean;
          initiator: { type: string };
          loaderId: string;
          redirectHasExtraInfo: boolean;
          request: {
            headers: { name: string };
            initialPriority: string;
            isSameSite: boolean;
            method: string;
            mixedContentType: string;
            referrerPolicy: string;
            url: string;
          };
          requestId: string;
          type: string;
          wallTime: number;
        }[]
      | null;
  }[];
}
const Data = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    console: Schema.Array(Console),
    cookies: Schema.Array(Cookie),
    globals: Schema.Array(Global),
    links: Schema.Array(Link),
    performance: Schema.Array(Performance),
    requests: Schema.Array(Request4),
  }),
) as unknown as Schema.Codec<Data>;

interface Certificate {
  issuer: string;
  subjectName: string;
  validFrom: number;
  validTo: number;
}
const Certificate = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    issuer: Schema.String,
    subjectName: Schema.String,
    validFrom: Schema.Number,
    validTo: Schema.Number,
  }),
) as unknown as Schema.Codec<Certificate>;

interface Lists {
  asns: string[];
  certificates: {
    issuer: string;
    subjectName: string;
    validFrom: number;
    validTo: number;
  }[];
  continents: string[];
  countries: string[];
  domains: string[];
  hashes: string[];
  ips: string[];
  linkDomains: string[];
  servers: string[];
  urls: string[];
}
const Lists = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    asns: Schema.Array(Schema.String),
    certificates: Schema.Array(Certificate),
    continents: Schema.Array(Schema.String),
    countries: Schema.Array(Schema.String),
    domains: Schema.Array(Schema.String),
    hashes: Schema.Array(Schema.String),
    ips: Schema.Array(Schema.String),
    linkDomains: Schema.Array(Schema.String),
    servers: Schema.Array(Schema.String),
    urls: Schema.Array(Schema.String),
  }),
) as unknown as Schema.Codec<Lists>;

interface Data2 {
  asn: string;
  country: string;
  description: string;
  ip: string;
  name: string;
}
const Data2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    asn: Schema.String,
    country: Schema.String,
    description: Schema.String,
    ip: Schema.String,
    name: Schema.String,
  }),
) as unknown as Schema.Codec<Data2>;

interface Asn2 {
  data: {
    asn: string;
    country: string;
    description: string;
    ip: string;
    name: string;
  }[];
}
const Asn2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    data: Schema.Array(Data2),
  }),
) as unknown as Schema.Codec<Asn2>;

interface Data3 {
  address: string;
  dnssecValid: boolean;
  name: string;
  type: string;
}
const Data3 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    address: Schema.String,
    dnssecValid: Schema.Boolean,
    name: Schema.String,
    type: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      address: "address",
      dnssecValid: "dnssec_valid",
      name: "name",
      type: "type",
    }),
  ),
) as unknown as Schema.Codec<Data3>;

interface Dns {
  data: { address: string; dnssecValid: boolean; name: string; type: string }[];
}
const Dns = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    data: Schema.Array(Data3),
  }),
) as unknown as Schema.Codec<Dns>;

interface Data4 {
  inherited: unknown;
  isPrimary: boolean;
  name: string;
}
const Data4 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    inherited: Schema.Unknown,
    isPrimary: Schema.Boolean,
    name: Schema.String,
  }),
) as unknown as Schema.Codec<Data4>;

interface DomainCategories {
  data: { inherited: unknown; isPrimary: boolean; name: string }[];
}
const DomainCategories = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    data: Schema.Array(Data4),
  }),
) as unknown as Schema.Codec<DomainCategories>;

interface Geoip2 {
  city: string;
  country: string;
  countryName: string;
  ll: number[];
  region: string;
}
const Geoip2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    city: Schema.String,
    country: Schema.String,
    countryName: Schema.String,
    ll: Schema.Array(Schema.Number),
    region: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      city: "city",
      country: "country",
      countryName: "country_name",
      ll: "ll",
      region: "region",
    }),
  ),
) as unknown as Schema.Codec<Geoip2>;

interface Data5 {
  geoip: {
    city: string;
    country: string;
    countryName: string;
    ll: number[];
    region: string;
  };
  ip: string;
}
const Data5 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    geoip: Geoip2,
    ip: Schema.String,
  }),
) as unknown as Schema.Codec<Data5>;

interface Geoip3 {
  data: {
    geoip: {
      city: string;
      country: string;
      countryName: string;
      ll: number[];
      region: string;
    };
    ip: string;
  }[];
}
const Geoip3 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    data: Schema.Array(Data5),
  }),
) as unknown as Schema.Codec<Geoip3>;

interface Phishing {
  data: string[];
}
const Phishing = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    data: Schema.Array(Schema.String),
  }),
) as unknown as Schema.Codec<Phishing>;

interface Data6 {
  bucket: string;
  hostname: string;
  rank?: number | null;
}
const Data6 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bucket: Schema.String,
    hostname: Schema.String,
    rank: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Data6>;

interface RadarRank {
  data: { bucket: string; hostname: string; rank?: number | null }[];
}
const RadarRank = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    data: Schema.Array(Data6),
  }),
) as unknown as Schema.Codec<RadarRank>;

interface Category {
  name: string;
  priority: number;
}
const Category = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    priority: Schema.Number,
  }),
) as unknown as Schema.Codec<Category>;

interface Confidence {
  confidence: number;
  name: string;
  pattern: string;
  patternType: string;
}
const Confidence = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    confidence: Schema.Number,
    name: Schema.String,
    pattern: Schema.String,
    patternType: Schema.String,
  }),
) as unknown as Schema.Codec<Confidence>;

interface Data7 {
  app: string;
  categories: { name: string; priority: number }[];
  confidence: {
    confidence: number;
    name: string;
    pattern: string;
    patternType: string;
  }[];
  confidenceTotal: number;
  icon: string;
  website: string;
}
const Data7 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    app: Schema.String,
    categories: Schema.Array(Category),
    confidence: Schema.Array(Confidence),
    confidenceTotal: Schema.Number,
    icon: Schema.String,
    website: Schema.String,
  }),
) as unknown as Schema.Codec<Data7>;

interface Wappa {
  data: {
    app: string;
    categories: { name: string; priority: number }[];
    confidence: {
      confidence: number;
      name: string;
      pattern: string;
      patternType: string;
    }[];
    confidenceTotal: number;
    icon: string;
    website: string;
  }[];
}
const Wappa = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    data: Schema.Array(Data7),
  }),
) as unknown as Schema.Codec<Wappa>;

interface Finding {
  outcome: string;
  summary: string;
}
const Finding = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    outcome: Schema.String,
    summary: Schema.String,
  }),
) as unknown as Schema.Codec<Finding>;

interface Request5 {
  method: string;
  url: string;
  headers?: unknown | null;
}
const Request5 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    method: Schema.String,
    url: Schema.String,
    headers: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
  }),
) as unknown as Schema.Codec<Request5>;

interface Response3 {
  status: number;
  statusText: string;
  bodyPreview?: string | null;
  bodySize?: number | null;
  headers?: unknown | null;
  redirectedTo?: string | null;
}
const Response3 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    status: Schema.Number,
    statusText: Schema.String,
    bodyPreview: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    bodySize: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    headers: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
    redirectedTo: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Response3>;

interface Evidence {
  action: string;
  label: string;
  finding?: { outcome: string; summary: string } | null;
  request?: { method: string; url: string; headers?: unknown | null } | null;
  response?: {
    status: number;
    statusText: string;
    bodyPreview?: string | null;
    bodySize?: number | null;
    headers?: unknown | null;
    redirectedTo?: string | null;
  } | null;
}
const Evidence = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    action: Schema.String,
    label: Schema.String,
    finding: Schema.optional(Schema.Union([Finding, Schema.Null])),
    request: Schema.optional(Schema.Union([Request5, Schema.Null])),
    response: Schema.optional(Schema.Union([Response3, Schema.Null])),
  }),
) as unknown as Schema.Codec<Evidence>;

interface ContentSignals {
  status: string;
  details?: unknown | null;
  durationMs?: number | null;
  evidence?:
    | {
        action: string;
        label: string;
        finding?: { outcome: string; summary: string } | null;
        request?: {
          method: string;
          url: string;
          headers?: unknown | null;
        } | null;
        response?: {
          status: number;
          statusText: string;
          bodyPreview?: string | null;
          bodySize?: number | null;
          headers?: unknown | null;
          redirectedTo?: string | null;
        } | null;
      }[]
    | null;
  message?: string | null;
}
const ContentSignals = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    status: Schema.String,
    details: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
    durationMs: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
    evidence: Schema.optional(
      Schema.Union([Schema.Array(Evidence), Schema.Null]),
    ),
    message: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<ContentSignals>;

interface BotAccessControl {
  contentSignals: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
  robotsTxtAiRules: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
  webBotAuth: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
}
const BotAccessControl = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    contentSignals: ContentSignals,
    robotsTxtAiRules: ContentSignals,
    webBotAuth: ContentSignals,
  }),
) as unknown as Schema.Codec<BotAccessControl>;

interface Commerce {
  acp: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
  ap2: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
  mpp: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
  ucp: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
  x402: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
}
const Commerce = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    acp: ContentSignals,
    ap2: ContentSignals,
    mpp: ContentSignals,
    ucp: ContentSignals,
    x402: ContentSignals,
  }),
) as unknown as Schema.Codec<Commerce>;

interface ContentAccessibility {
  markdownNegotiation: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
}
const ContentAccessibility = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    markdownNegotiation: ContentSignals,
  }),
) as unknown as Schema.Codec<ContentAccessibility>;

interface Discoverability {
  linkHeaders: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
  robotsTxt: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
  sitemap: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
}
const Discoverability = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    linkHeaders: ContentSignals,
    robotsTxt: ContentSignals,
    sitemap: ContentSignals,
  }),
) as unknown as Schema.Codec<Discoverability>;

interface Discovery {
  a2aAgentCard: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
  agentSkills: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
  apiCatalog: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
  mcpServerCard: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
  oauthDiscovery: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
  oauthProtectedResource: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
  webMcp: {
    status: string;
    details?: unknown | null;
    durationMs?: number | null;
    evidence?:
      | {
          action: string;
          label: string;
          finding?: { outcome: string; summary: string } | null;
          request?: {
            method: string;
            url: string;
            headers?: unknown | null;
          } | null;
          response?: {
            status: number;
            statusText: string;
            bodyPreview?: string | null;
            bodySize?: number | null;
            headers?: unknown | null;
            redirectedTo?: string | null;
          } | null;
        }[]
      | null;
    message?: string | null;
  };
}
const Discovery = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    a2aAgentCard: ContentSignals,
    agentSkills: ContentSignals,
    apiCatalog: ContentSignals,
    mcpServerCard: ContentSignals,
    oauthDiscovery: ContentSignals,
    oauthProtectedResource: ContentSignals,
    webMcp: ContentSignals,
  }),
) as unknown as Schema.Codec<Discovery>;

interface Checks {
  botAccessControl: {
    contentSignals: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
    robotsTxtAiRules: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
    webBotAuth: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
  };
  commerce: {
    acp: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
    ap2: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
    mpp: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
    ucp: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
    x402: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
  };
  contentAccessibility: {
    markdownNegotiation: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
  };
  discoverability: {
    linkHeaders: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
    robotsTxt: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
    sitemap: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
  };
  discovery: {
    a2aAgentCard: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
    agentSkills: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
    apiCatalog: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
    mcpServerCard: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
    oauthDiscovery: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
    oauthProtectedResource: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
    webMcp: {
      status: string;
      details?: unknown | null;
      durationMs?: number | null;
      evidence?:
        | {
            action: string;
            label: string;
            finding?: { outcome: string; summary: string } | null;
            request?: {
              method: string;
              url: string;
              headers?: unknown | null;
            } | null;
            response?: {
              status: number;
              statusText: string;
              bodyPreview?: string | null;
              bodySize?: number | null;
              headers?: unknown | null;
              redirectedTo?: string | null;
            } | null;
          }[]
        | null;
      message?: string | null;
    };
  };
}
const Checks = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    botAccessControl: BotAccessControl,
    commerce: Commerce,
    contentAccessibility: ContentAccessibility,
    discoverability: Discoverability,
    discovery: Discovery,
  }),
) as unknown as Schema.Codec<Checks>;

interface Requirement {
  check: string;
  description: string;
  prompt: string;
  skillUrl: string;
  specUrls: string[];
}
const Requirement = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    check: Schema.String,
    description: Schema.String,
    prompt: Schema.String,
    skillUrl: Schema.String,
    specUrls: Schema.Array(Schema.String),
  }),
) as unknown as Schema.Codec<Requirement>;

interface NextLevel {
  name: string;
  requirements: {
    check: string;
    description: string;
    prompt: string;
    skillUrl: string;
    specUrls: string[];
  }[];
  target: number;
}
const NextLevel = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    name: Schema.String,
    requirements: Schema.Array(Requirement),
    target: Schema.Number,
  }),
) as unknown as Schema.Codec<NextLevel>;

interface AgentReadiness {
  checks: {
    botAccessControl: {
      contentSignals: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
      robotsTxtAiRules: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
      webBotAuth: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
    };
    commerce: {
      acp: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
      ap2: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
      mpp: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
      ucp: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
      x402: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
    };
    contentAccessibility: {
      markdownNegotiation: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
    };
    discoverability: {
      linkHeaders: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
      robotsTxt: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
      sitemap: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
    };
    discovery: {
      a2aAgentCard: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
      agentSkills: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
      apiCatalog: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
      mcpServerCard: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
      oauthDiscovery: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
      oauthProtectedResource: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
      webMcp: {
        status: string;
        details?: unknown | null;
        durationMs?: number | null;
        evidence?:
          | {
              action: string;
              label: string;
              finding?: { outcome: string; summary: string } | null;
              request?: {
                method: string;
                url: string;
                headers?: unknown | null;
              } | null;
              response?: {
                status: number;
                statusText: string;
                bodyPreview?: string | null;
                bodySize?: number | null;
                headers?: unknown | null;
                redirectedTo?: string | null;
              } | null;
            }[]
          | null;
        message?: string | null;
      };
    };
  };
  level: number;
  levelName: string;
  commerceSignals?: string[] | null;
  isCommerce?: boolean | null;
  nextLevel?: {
    name: string;
    requirements: {
      check: string;
      description: string;
      prompt: string;
      skillUrl: string;
      specUrls: string[];
    }[];
    target: number;
  } | null;
}
const AgentReadiness = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    checks: Checks,
    level: Schema.Number,
    levelName: Schema.String,
    commerceSignals: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
    isCommerce: Schema.optional(Schema.Union([Schema.Boolean, Schema.Null])),
    nextLevel: Schema.optional(Schema.Union([NextLevel, Schema.Null])),
  }),
) as unknown as Schema.Codec<AgentReadiness>;

interface ContentSignal {
  aiInput?: string | null;
  aiTrain?: string | null;
  search?: string | null;
}
const ContentSignal = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    aiInput: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    aiTrain: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    search: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      aiInput: "ai-input",
      aiTrain: "ai-train",
      search: "search",
    }),
  ),
) as unknown as Schema.Codec<ContentSignal>;

interface Anon {
  allow: string[];
  disallow: string[];
  contentSignal?: {
    aiInput?: string | null;
    aiTrain?: string | null;
    search?: string | null;
  } | null;
  crawlDelay?: number | null;
}
const Anon = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    allow: Schema.Array(Schema.String),
    disallow: Schema.Array(Schema.String),
    contentSignal: Schema.optional(Schema.Union([ContentSignal, Schema.Null])),
    crawlDelay: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Anon>;

interface Rules {
  "*": {
    allow: string[];
    disallow: string[];
    contentSignal?: {
      aiInput?: string | null;
      aiTrain?: string | null;
      search?: string | null;
    } | null;
    crawlDelay?: number | null;
  };
}
const Rules = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    "*": Anon,
  }),
) as unknown as Schema.Codec<Rules>;

interface Data8 {
  rules: {
    "*": {
      allow: string[];
      disallow: string[];
      contentSignal?: {
        aiInput?: string | null;
        aiTrain?: string | null;
        search?: string | null;
      } | null;
      crawlDelay?: number | null;
    };
  };
  sitemaps: string[];
  hash?: string | null;
}
const Data8 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    rules: Rules,
    sitemaps: Schema.Array(Schema.String),
    hash: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Data8>;

interface RobotsTXT {
  data: {
    rules: {
      "*": {
        allow: string[];
        disallow: string[];
        contentSignal?: {
          aiInput?: string | null;
          aiTrain?: string | null;
          search?: string | null;
        } | null;
        crawlDelay?: number | null;
      };
    };
    sitemaps: string[];
    hash?: string | null;
  }[];
}
const RobotsTXT = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    data: Schema.Array(Data8),
  }),
) as unknown as Schema.Codec<RobotsTXT>;

interface Content {
  id: number;
  name: string;
  superCategoryId: number;
}
const Content = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.Number,
    name: Schema.String,
    superCategoryId: Schema.Number,
  }).pipe(
    Schema.encodeKeys({
      id: "id",
      name: "name",
      superCategoryId: "super_category_id",
    }),
  ),
) as unknown as Schema.Codec<Content>;

interface Inherited {
  content: { id: number; name: string; superCategoryId: number }[];
  from: string;
  risks: { id: number; name: string; superCategoryId: number }[];
}
const Inherited = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    content: Schema.Array(Content),
    from: Schema.String,
    risks: Schema.Array(Content),
  }),
) as unknown as Schema.Codec<Inherited>;

interface Data9 {
  content: { id: number; name: string; superCategoryId: number }[];
  inherited: {
    content: { id: number; name: string; superCategoryId: number }[];
    from: string;
    risks: { id: number; name: string; superCategoryId: number }[];
  };
  name: string;
  risks: { id: number; name: string; superCategoryId: number }[];
}
const Data9 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    content: Schema.Array(Content),
    inherited: Inherited,
    name: Schema.String,
    risks: Schema.Array(Content),
  }),
) as unknown as Schema.Codec<Data9>;

interface Urlcategories {
  data: {
    content: { id: number; name: string; superCategoryId: number }[];
    inherited: {
      content: { id: number; name: string; superCategoryId: number }[];
      from: string;
      risks: { id: number; name: string; superCategoryId: number }[];
    };
    name: string;
    risks: { id: number; name: string; superCategoryId: number }[];
  }[];
}
const Urlcategories = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    data: Schema.Array(Data9),
  }),
) as unknown as Schema.Codec<Urlcategories>;

interface Processors {
  asn: {
    data: {
      asn: string;
      country: string;
      description: string;
      ip: string;
      name: string;
    }[];
  };
  dns: {
    data: {
      address: string;
      dnssecValid: boolean;
      name: string;
      type: string;
    }[];
  };
  domainCategories: {
    data: { inherited: unknown; isPrimary: boolean; name: string }[];
  };
  geoip: {
    data: {
      geoip: {
        city: string;
        country: string;
        countryName: string;
        ll: number[];
        region: string;
      };
      ip: string;
    }[];
  };
  phishing: { data: string[] };
  radarRank: {
    data: { bucket: string; hostname: string; rank?: number | null }[];
  };
  wappa: {
    data: {
      app: string;
      categories: { name: string; priority: number }[];
      confidence: {
        confidence: number;
        name: string;
        pattern: string;
        patternType: string;
      }[];
      confidenceTotal: number;
      icon: string;
      website: string;
    }[];
  };
  agentReadiness?: {
    checks: {
      botAccessControl: {
        contentSignals: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
        robotsTxtAiRules: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
        webBotAuth: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
      };
      commerce: {
        acp: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
        ap2: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
        mpp: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
        ucp: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
        x402: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
      };
      contentAccessibility: {
        markdownNegotiation: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
      };
      discoverability: {
        linkHeaders: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
        robotsTxt: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
        sitemap: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
      };
      discovery: {
        a2aAgentCard: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
        agentSkills: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
        apiCatalog: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
        mcpServerCard: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
        oauthDiscovery: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
        oauthProtectedResource: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
        webMcp: {
          status: string;
          details?: unknown | null;
          durationMs?: number | null;
          evidence?:
            | {
                action: string;
                label: string;
                finding?: { outcome: string; summary: string } | null;
                request?: {
                  method: string;
                  url: string;
                  headers?: unknown | null;
                } | null;
                response?: {
                  status: number;
                  statusText: string;
                  bodyPreview?: string | null;
                  bodySize?: number | null;
                  headers?: unknown | null;
                  redirectedTo?: string | null;
                } | null;
              }[]
            | null;
          message?: string | null;
        };
      };
    };
    level: number;
    levelName: string;
    commerceSignals?: string[] | null;
    isCommerce?: boolean | null;
    nextLevel?: {
      name: string;
      requirements: {
        check: string;
        description: string;
        prompt: string;
        skillUrl: string;
        specUrls: string[];
      }[];
      target: number;
    } | null;
  } | null;
  phishingV2?: { data: string[] } | null;
  robotsTxt?: {
    data: {
      rules: {
        "*": {
          allow: string[];
          disallow: string[];
          contentSignal?: {
            aiInput?: string | null;
            aiTrain?: string | null;
            search?: string | null;
          } | null;
          crawlDelay?: number | null;
        };
      };
      sitemaps: string[];
      hash?: string | null;
    }[];
  } | null;
  urlCategories?: {
    data: {
      content: { id: number; name: string; superCategoryId: number }[];
      inherited: {
        content: { id: number; name: string; superCategoryId: number }[];
        from: string;
        risks: { id: number; name: string; superCategoryId: number }[];
      };
      name: string;
      risks: { id: number; name: string; superCategoryId: number }[];
    }[];
  } | null;
}
const Processors = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    asn: Asn2,
    dns: Dns,
    domainCategories: DomainCategories,
    geoip: Geoip3,
    phishing: Phishing,
    radarRank: RadarRank,
    wappa: Wappa,
    agentReadiness: Schema.optional(
      Schema.Union([AgentReadiness, Schema.Null]),
    ),
    phishingV2: Schema.optional(Schema.Union([Phishing, Schema.Null])),
    robotsTxt: Schema.optional(Schema.Union([RobotsTXT, Schema.Null])),
    urlCategories: Schema.optional(Schema.Union([Urlcategories, Schema.Null])),
  }).pipe(
    Schema.encodeKeys({
      asn: "asn",
      dns: "dns",
      domainCategories: "domainCategories",
      geoip: "geoip",
      phishing: "phishing",
      radarRank: "radarRank",
      wappa: "wappa",
      agentReadiness: "agentReadiness",
      phishingV2: "phishing_v2",
      robotsTxt: "robotsTxt",
      urlCategories: "urlCategories",
    }),
  ),
) as unknown as Schema.Codec<Processors>;

interface Meta {
  processors: {
    asn: {
      data: {
        asn: string;
        country: string;
        description: string;
        ip: string;
        name: string;
      }[];
    };
    dns: {
      data: {
        address: string;
        dnssecValid: boolean;
        name: string;
        type: string;
      }[];
    };
    domainCategories: {
      data: { inherited: unknown; isPrimary: boolean; name: string }[];
    };
    geoip: {
      data: {
        geoip: {
          city: string;
          country: string;
          countryName: string;
          ll: number[];
          region: string;
        };
        ip: string;
      }[];
    };
    phishing: { data: string[] };
    radarRank: {
      data: { bucket: string; hostname: string; rank?: number | null }[];
    };
    wappa: {
      data: {
        app: string;
        categories: { name: string; priority: number }[];
        confidence: {
          confidence: number;
          name: string;
          pattern: string;
          patternType: string;
        }[];
        confidenceTotal: number;
        icon: string;
        website: string;
      }[];
    };
    agentReadiness?: {
      checks: {
        botAccessControl: {
          contentSignals: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
          robotsTxtAiRules: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
          webBotAuth: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
        };
        commerce: {
          acp: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
          ap2: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
          mpp: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
          ucp: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
          x402: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
        };
        contentAccessibility: {
          markdownNegotiation: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
        };
        discoverability: {
          linkHeaders: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
          robotsTxt: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
          sitemap: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
        };
        discovery: {
          a2aAgentCard: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
          agentSkills: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
          apiCatalog: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
          mcpServerCard: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
          oauthDiscovery: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
          oauthProtectedResource: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
          webMcp: {
            status: string;
            details?: unknown | null;
            durationMs?: number | null;
            evidence?:
              | {
                  action: string;
                  label: string;
                  finding?: { outcome: string; summary: string } | null;
                  request?: {
                    method: string;
                    url: string;
                    headers?: unknown | null;
                  } | null;
                  response?: {
                    status: number;
                    statusText: string;
                    bodyPreview?: string | null;
                    bodySize?: number | null;
                    headers?: unknown | null;
                    redirectedTo?: string | null;
                  } | null;
                }[]
              | null;
            message?: string | null;
          };
        };
      };
      level: number;
      levelName: string;
      commerceSignals?: string[] | null;
      isCommerce?: boolean | null;
      nextLevel?: {
        name: string;
        requirements: {
          check: string;
          description: string;
          prompt: string;
          skillUrl: string;
          specUrls: string[];
        }[];
        target: number;
      } | null;
    } | null;
    phishingV2?: { data: string[] } | null;
    robotsTxt?: {
      data: {
        rules: {
          "*": {
            allow: string[];
            disallow: string[];
            contentSignal?: {
              aiInput?: string | null;
              aiTrain?: string | null;
              search?: string | null;
            } | null;
            crawlDelay?: number | null;
          };
        };
        sitemaps: string[];
        hash?: string | null;
      }[];
    } | null;
    urlCategories?: {
      data: {
        content: { id: number; name: string; superCategoryId: number }[];
        inherited: {
          content: { id: number; name: string; superCategoryId: number }[];
          from: string;
          risks: { id: number; name: string; superCategoryId: number }[];
        };
        name: string;
        risks: { id: number; name: string; superCategoryId: number }[];
      }[];
    } | null;
  };
}
const Meta = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    processors: Processors,
  }),
) as unknown as Schema.Codec<Meta>;

interface Screenshot {
  dhash: string;
  mm3Hash: number;
  name: string;
  phash: string;
}
const Screenshot = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    dhash: Schema.String,
    mm3Hash: Schema.Number,
    name: Schema.String,
    phash: Schema.String,
  }),
) as unknown as Schema.Codec<Screenshot>;

interface Page {
  apexDomain: string;
  asn: string;
  asnname: string;
  city: string;
  country: string;
  domain: string;
  ip: string;
  mimeType: string;
  server: string;
  status: string;
  title: string;
  tlsAgeDays: number;
  tlsIssuer: string;
  tlsValidDays: number;
  tlsValidFrom: string;
  url: string;
  screenshot?: {
    dhash: string;
    mm3Hash: number;
    name: string;
    phash: string;
  } | null;
}
const Page = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    apexDomain: Schema.String,
    asn: Schema.String,
    asnname: Schema.String,
    city: Schema.String,
    country: Schema.String,
    domain: Schema.String,
    ip: Schema.String,
    mimeType: Schema.String,
    server: Schema.String,
    status: Schema.String,
    title: Schema.String,
    tlsAgeDays: Schema.Number,
    tlsIssuer: Schema.String,
    tlsValidDays: Schema.Number,
    tlsValidFrom: Schema.String,
    url: Schema.String,
    screenshot: Schema.optional(Schema.Union([Screenshot, Schema.Null])),
  }),
) as unknown as Schema.Codec<Page>;

interface Scanner {
  colo: string;
  country: string;
}
const Scanner = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    colo: Schema.String,
    country: Schema.String,
  }),
) as unknown as Schema.Codec<Scanner>;

interface DomainStat {
  count: number;
  countries: string[];
  domain: string;
  encodedSize: number;
  index: number;
  initiators: string[];
  ips: string[];
  redirects: number;
  size: number;
}
const DomainStat = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.Number,
    countries: Schema.Array(Schema.String),
    domain: Schema.String,
    encodedSize: Schema.Number,
    index: Schema.Number,
    initiators: Schema.Array(Schema.String),
    ips: Schema.Array(Schema.String),
    redirects: Schema.Number,
    size: Schema.Number,
  }),
) as unknown as Schema.Codec<DomainStat>;

interface Ipstat {
  asn: {
    asn: string;
    country: string;
    description: string;
    ip: string;
    name: string;
    org: string;
  };
  countries: string[];
  domains: string[];
  encodedSize: number;
  geoip: {
    city: string;
    country: string;
    countryName: string;
    ll: number[];
    region: string;
  };
  index: number;
  ip: string;
  ipv6: boolean;
  redirects: number;
  requests: number;
  size: number;
  count?: number | null;
}
const Ipstat = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    asn: Asn,
    countries: Schema.Array(Schema.String),
    domains: Schema.Array(Schema.String),
    encodedSize: Schema.Number,
    geoip: Geoip2,
    index: Schema.Number,
    ip: Schema.String,
    ipv6: Schema.Boolean,
    redirects: Schema.Number,
    requests: Schema.Number,
    size: Schema.Number,
    count: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Ipstat>;

interface ProtocolStat {
  count: number;
  countries: string[];
  encodedSize: number;
  ips: string[];
  protocol: string;
  size: number;
}
const ProtocolStat = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.Number,
    countries: Schema.Array(Schema.String),
    encodedSize: Schema.Number,
    ips: Schema.Array(Schema.String),
    protocol: Schema.String,
    size: Schema.Number,
  }),
) as unknown as Schema.Codec<ProtocolStat>;

interface ResourceStat {
  compression: number;
  count: number;
  countries: string[];
  encodedSize: number;
  ips: string[];
  percentage: number;
  size: number;
  type: string;
}
const ResourceStat = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    compression: Schema.Number,
    count: Schema.Number,
    countries: Schema.Array(Schema.String),
    encodedSize: Schema.Number,
    ips: Schema.Array(Schema.String),
    percentage: Schema.Number,
    size: Schema.Number,
    type: Schema.String,
  }),
) as unknown as Schema.Codec<ResourceStat>;

interface ServerStat {
  count: number;
  countries: string[];
  encodedSize: number;
  ips: string[];
  server: string;
  size: number;
}
const ServerStat = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.Number,
    countries: Schema.Array(Schema.String),
    encodedSize: Schema.Number,
    ips: Schema.Array(Schema.String),
    server: Schema.String,
    size: Schema.Number,
  }),
) as unknown as Schema.Codec<ServerStat>;

interface Protocols {
  "tls 1.3 / AES_128GCM": number;
}
const Protocols = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    "tls 1.3 / AES_128GCM": Schema.Number,
  }).pipe(
    Schema.encodeKeys({ "tls 1.3 / AES_128GCM": "TLS 1.3 / AES_128_GCM" }),
  ),
) as unknown as Schema.Codec<Protocols>;

interface Tlsstat {
  count: number;
  countries: string[];
  encodedSize: number;
  ips: string[];
  protocols: { "tls 1.3 / AES_128GCM": number };
  securityState: string;
  size: number;
}
const Tlsstat = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    count: Schema.Number,
    countries: Schema.Array(Schema.String),
    encodedSize: Schema.Number,
    ips: Schema.Array(Schema.String),
    protocols: Protocols,
    securityState: Schema.String,
    size: Schema.Number,
  }),
) as unknown as Schema.Codec<Tlsstat>;

interface Stats {
  domainStats: {
    count: number;
    countries: string[];
    domain: string;
    encodedSize: number;
    index: number;
    initiators: string[];
    ips: string[];
    redirects: number;
    size: number;
  }[];
  ipStats: {
    asn: {
      asn: string;
      country: string;
      description: string;
      ip: string;
      name: string;
      org: string;
    };
    countries: string[];
    domains: string[];
    encodedSize: number;
    geoip: {
      city: string;
      country: string;
      countryName: string;
      ll: number[];
      region: string;
    };
    index: number;
    ip: string;
    ipv6: boolean;
    redirects: number;
    requests: number;
    size: number;
    count?: number | null;
  }[];
  ipv6Percentage: number;
  malicious: number;
  protocolStats: {
    count: number;
    countries: string[];
    encodedSize: number;
    ips: string[];
    protocol: string;
    size: number;
  }[];
  resourceStats: {
    compression: number;
    count: number;
    countries: string[];
    encodedSize: number;
    ips: string[];
    percentage: number;
    size: number;
    type: string;
  }[];
  securePercentage: number;
  secureRequests: number;
  serverStats: {
    count: number;
    countries: string[];
    encodedSize: number;
    ips: string[];
    server: string;
    size: number;
  }[];
  tlsStats: {
    count: number;
    countries: string[];
    encodedSize: number;
    ips: string[];
    protocols: { "tls 1.3 / AES_128GCM": number };
    securityState: string;
    size: number;
  }[];
  totalLinks: number;
  uniqASNs: number;
  uniqCountries: number;
}
const Stats = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    domainStats: Schema.Array(DomainStat),
    ipStats: Schema.Array(Ipstat),
    ipv6Percentage: Schema.Number,
    malicious: Schema.Number,
    protocolStats: Schema.Array(ProtocolStat),
    resourceStats: Schema.Array(ResourceStat),
    securePercentage: Schema.Number,
    secureRequests: Schema.Number,
    serverStats: Schema.Array(ServerStat),
    tlsStats: Schema.Array(Tlsstat),
    totalLinks: Schema.Number,
    uniqASNs: Schema.Number,
    uniqCountries: Schema.Number,
  }).pipe(
    Schema.encodeKeys({
      domainStats: "domainStats",
      ipStats: "ipStats",
      ipv6Percentage: "IPv6Percentage",
      malicious: "malicious",
      protocolStats: "protocolStats",
      resourceStats: "resourceStats",
      securePercentage: "securePercentage",
      secureRequests: "secureRequests",
      serverStats: "serverStats",
      tlsStats: "tlsStats",
      totalLinks: "totalLinks",
      uniqASNs: "uniqASNs",
      uniqCountries: "uniqCountries",
    }),
  ),
) as unknown as Schema.Codec<Stats>;

interface Options {
  /** Custom headers set. */
  customHeaders?: unknown | null;
  screenshotsResolutions?: string[] | null;
}
const Options = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    customHeaders: Schema.optional(Schema.Union([Schema.Unknown, Schema.Null])),
    screenshotsResolutions: Schema.optional(
      Schema.Union([Schema.Array(Schema.String), Schema.Null]),
    ),
  }),
) as unknown as Schema.Codec<Options>;

interface Task {
  apexDomain: string;
  domain: string;
  domURL: string;
  method: string;
  options: {
    customHeaders?: unknown | null;
    screenshotsResolutions?: string[] | null;
  };
  reportURL: string;
  screenshotURL: string;
  source: string;
  success: boolean;
  time: string;
  url: string;
  uuid: string;
  visibility: string;
}
const Task = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    apexDomain: Schema.String,
    domain: Schema.String,
    domURL: Schema.String,
    method: Schema.String,
    options: Options,
    reportURL: Schema.String,
    screenshotURL: Schema.String,
    source: Schema.String,
    success: Schema.Boolean,
    time: Schema.String,
    url: Schema.String,
    uuid: Schema.String,
    visibility: Schema.String,
  }),
) as unknown as Schema.Codec<Task>;

interface Overall {
  categories: string[];
  hasVerdicts: boolean;
  malicious: boolean;
  tags: string[];
}
const Overall = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    categories: Schema.Array(Schema.String),
    hasVerdicts: Schema.Boolean,
    malicious: Schema.Boolean,
    tags: Schema.Array(Schema.String),
  }),
) as unknown as Schema.Codec<Overall>;

interface Verdicts {
  overall: {
    categories: string[];
    hasVerdicts: boolean;
    malicious: boolean;
    tags: string[];
  };
}
const Verdicts = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    overall: Overall,
  }),
) as unknown as Schema.Codec<Verdicts>;

interface Page2 {
  asn: string;
  country: string;
  ip: string;
  url: string;
}
const Page2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    asn: Schema.String,
    country: Schema.String,
    ip: Schema.String,
    url: Schema.String,
  }),
) as unknown as Schema.Codec<Page2>;

interface Stats2 {
  dataLength: number;
  requests: number;
  uniqCountries: number;
  uniqIPs: number;
}
const Stats2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    dataLength: Schema.Number,
    requests: Schema.Number,
    uniqCountries: Schema.Number,
    uniqIPs: Schema.Number,
  }),
) as unknown as Schema.Codec<Stats2>;

interface Task2 {
  time: string;
  url: string;
  uuid: string;
  visibility: string;
}
const Task2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    time: Schema.String,
    url: Schema.String,
    uuid: Schema.String,
    visibility: Schema.String,
  }),
) as unknown as Schema.Codec<Task2>;

interface Verdicts2 {
  malicious: boolean;
}
const Verdicts2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    malicious: Schema.Boolean,
  }),
) as unknown as Schema.Codec<Verdicts2>;

interface Result {
  id: string;
  page: { asn: string; country: string; ip: string; url: string };
  result: string;
  stats: {
    dataLength: number;
    requests: number;
    uniqCountries: number;
    uniqIPs: number;
  };
  task: { time: string; url: string; uuid: string; visibility: string };
  verdicts: { malicious: boolean };
}
const Result = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    page: Page2,
    result: Schema.String,
    stats: Stats2,
    task: Task2,
    verdicts: Verdicts2,
  }).pipe(
    Schema.encodeKeys({
      id: "_id",
      page: "page",
      result: "result",
      stats: "stats",
      task: "task",
      verdicts: "verdicts",
    }),
  ),
) as unknown as Schema.Codec<Result>;

interface Options2 {
  useragent?: string | null;
}
const Options2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    useragent: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
  }),
) as unknown as Schema.Codec<Options2>;

interface Body {
  url: string;
  /** Enable agent readiness checks. */
  agentReadiness?: boolean | null;
  customagent?: string | null;
  /** Set custom headers. */
  customHeaders?: Record<string, unknown> | null;
  referer?: string | null;
  /** Take multiple screenshots targeting different device types. */
  screenshotsResolutions?:
    | ("desktop" | "mobile" | "tablet" | (string & {}))[]
    | null;
  /** The option `Public` means it will be included in listings like recent scans and search results. `Unlisted` means it will not be included in the aforementioned listings, users will need to have the sca */
  visibility?: "Public" | "Unlisted" | (string & {}) | null;
}
const Body = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    url: Schema.String,
    agentReadiness: Schema.optional(
      Schema.Union([Schema.Boolean, Schema.Null]),
    ),
    customagent: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    customHeaders: Schema.optional(
      Schema.Union([Schema.Record(Schema.String, Schema.Unknown), Schema.Null]),
    ),
    referer: Schema.optional(Schema.Union([Schema.String, Schema.Null])),
    screenshotsResolutions: Schema.optional(
      Schema.Union([
        Schema.Array(
          Schema.Union([
            Schema.Literals(["desktop", "mobile", "tablet"]),
            Schema.String,
          ]),
        ),
        Schema.Null,
      ]),
    ),
    visibility: Schema.optional(
      Schema.Union([
        Schema.Union([Schema.Literals(["Public", "Unlisted"]), Schema.String]),
        Schema.Null,
      ]),
    ),
  }),
) as unknown as Schema.Codec<Body>;

interface ScanBulkCreateResponseItem {
  /** URL to api report. */
  api: string;
  /** URL to report. */
  result: string;
  /** Submitted URL */
  url: string;
  /** Scan ID. */
  uuid: string;
  /** Submitted visibility status. */
  visibility: "public" | "unlisted" | (string & {});
  options?: { useragent?: string | null } | null;
}
const ScanBulkCreateResponseItem = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    api: Schema.String,
    result: Schema.String,
    url: Schema.String,
    uuid: Schema.String,
    visibility: Schema.Union([
      Schema.Literals(["public", "unlisted"]),
      Schema.String,
    ]),
    options: Schema.optional(Schema.Union([Options2, Schema.Null])),
  }),
) as unknown as Schema.Codec<ScanBulkCreateResponseItem>;

interface Creator {
  comment: string;
  name: string;
  version: string;
}
const Creator = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    comment: Schema.String,
    name: Schema.String,
    version: Schema.String,
  }),
) as unknown as Schema.Codec<Creator>;

interface Request6 {
  bodySize: number;
  headers: { name: string; value: string }[];
  headersSize: number;
  httpVersion: string;
  method: string;
  url: string;
}
const Request6 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    bodySize: Schema.Number,
    headers: Schema.Array(SecurityHeader),
    headersSize: Schema.Number,
    httpVersion: Schema.String,
    method: Schema.String,
    url: Schema.String,
  }),
) as unknown as Schema.Codec<Request6>;

interface Content2 {
  mimeType: string;
  size: number;
  compression?: number | null;
}
const Content2 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    mimeType: Schema.String,
    size: Schema.Number,
    compression: Schema.optional(Schema.Union([Schema.Number, Schema.Null])),
  }),
) as unknown as Schema.Codec<Content2>;

interface Response4 {
  transferSize: number;
  bodySize: number;
  content: { mimeType: string; size: number; compression?: number | null };
  headers: { name: string; value: string }[];
  headersSize: number;
  httpVersion: string;
  redirectURL: string;
  status: number;
  statusText: string;
}
const Response4 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    transferSize: Schema.Number,
    bodySize: Schema.Number,
    content: Content2,
    headers: Schema.Array(SecurityHeader),
    headersSize: Schema.Number,
    httpVersion: Schema.String,
    redirectURL: Schema.String,
    status: Schema.Number,
    statusText: Schema.String,
  }).pipe(
    Schema.encodeKeys({
      transferSize: "_transferSize",
      bodySize: "bodySize",
      content: "content",
      headers: "headers",
      headersSize: "headersSize",
      httpVersion: "httpVersion",
      redirectURL: "redirectURL",
      status: "status",
      statusText: "statusText",
    }),
  ),
) as unknown as Schema.Codec<Response4>;

interface Entry {
  initialPriority: string;
  initiatorType: string;
  priority: string;
  requestId: string;
  requestTime: number;
  resourceType: string;
  cache: unknown;
  connection: string;
  pageref: string;
  request: {
    bodySize: number;
    headers: { name: string; value: string }[];
    headersSize: number;
    httpVersion: string;
    method: string;
    url: string;
  };
  response: {
    transferSize: number;
    bodySize: number;
    content: { mimeType: string; size: number; compression?: number | null };
    headers: { name: string; value: string }[];
    headersSize: number;
    httpVersion: string;
    redirectURL: string;
    status: number;
    statusText: string;
  };
  serverIPAddress: string;
  startedDateTime: string;
  time: number;
}
const Entry = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    initialPriority: Schema.String,
    initiatorType: Schema.String,
    priority: Schema.String,
    requestId: Schema.String,
    requestTime: Schema.Number,
    resourceType: Schema.String,
    cache: Schema.Unknown,
    connection: Schema.String,
    pageref: Schema.String,
    request: Request6,
    response: Response4,
    serverIPAddress: Schema.String,
    startedDateTime: Schema.String,
    time: Schema.Number,
  }).pipe(
    Schema.encodeKeys({
      initialPriority: "_initialPriority",
      initiatorType: "_initiator_type",
      priority: "_priority",
      requestId: "_requestId",
      requestTime: "_requestTime",
      resourceType: "_resourceType",
      cache: "cache",
      connection: "connection",
      pageref: "pageref",
      request: "request",
      response: "response",
      serverIPAddress: "serverIPAddress",
      startedDateTime: "startedDateTime",
      time: "time",
    }),
  ),
) as unknown as Schema.Codec<Entry>;

interface PageTimings {
  onContentLoad: number;
  onLoad: number;
}
const PageTimings = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    onContentLoad: Schema.Number,
    onLoad: Schema.Number,
  }),
) as unknown as Schema.Codec<PageTimings>;

interface Page3 {
  id: string;
  pageTimings: { onContentLoad: number; onLoad: number };
  startedDateTime: string;
  title: string;
}
const Page3 = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    id: Schema.String,
    pageTimings: PageTimings,
    startedDateTime: Schema.String,
    title: Schema.String,
  }),
) as unknown as Schema.Codec<Page3>;

interface Log {
  creator: { comment: string; name: string; version: string };
  entries: {
    initialPriority: string;
    initiatorType: string;
    priority: string;
    requestId: string;
    requestTime: number;
    resourceType: string;
    cache: unknown;
    connection: string;
    pageref: string;
    request: {
      bodySize: number;
      headers: { name: string; value: string }[];
      headersSize: number;
      httpVersion: string;
      method: string;
      url: string;
    };
    response: {
      transferSize: number;
      bodySize: number;
      content: { mimeType: string; size: number; compression?: number | null };
      headers: { name: string; value: string }[];
      headersSize: number;
      httpVersion: string;
      redirectURL: string;
      status: number;
      statusText: string;
    };
    serverIPAddress: string;
    startedDateTime: string;
    time: number;
  }[];
  pages: {
    id: string;
    pageTimings: { onContentLoad: number; onLoad: number };
    startedDateTime: string;
    title: string;
  }[];
  version: string;
}
const Log = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    creator: Creator,
    entries: Schema.Array(Entry),
    pages: Schema.Array(Page3),
    version: Schema.String,
  }),
) as unknown as Schema.Codec<Log>;

// =============================================================================
// Respon
// =============================================================================

export interface GetResponsRequest {
  responseId: string;
  /** Account ID. */
  accountId: string;
}

export const GetResponsRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    responseId: Schema.String.pipe(T.HttpPath("responseId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/urlscanner/v2/responses/{responseId}",
    }),
  ),
) as unknown as Schema.Codec<GetResponsRequest>;

export type GetResponsResponse = string;

export const GetResponsResponse = /*@__PURE__*/ Schema.suspend(
  () => Schema.String,
) as unknown as Schema.Codec<GetResponsResponse>;

export type GetResponsError = DefaultErrors;

export const getRespons: API.OperationMethod<
  GetResponsRequest,
  GetResponsResponse,
  GetResponsError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetResponsRequest,
  output: GetResponsResponse,
  errors: [],
}));

// =============================================================================
// Scan
// =============================================================================

export interface GetScanRequest {
  scanId: string;
  /** Account ID. */
  accountId: string;
}

export const GetScanRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scanId: Schema.String.pipe(T.HttpPath("scanId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/urlscanner/v2/result/{scanId}",
    }),
  ),
) as unknown as Schema.Codec<GetScanRequest>;

export interface GetScanResponse {
  data: {
    console: {
      message: { level: string; source: string; text: string; url: string };
    }[];
    cookies: {
      domain: string;
      expires: number;
      httpOnly: boolean;
      name: string;
      path: string;
      priority: string;
      sameParty: boolean;
      secure: boolean;
      session: boolean;
      size: number;
      sourcePort: number;
      sourceScheme: string;
      value: string;
    }[];
    globals: { prop: string; type: string }[];
    links: { href: string; text: string }[];
    performance: {
      duration: number;
      entryType: string;
      name: string;
      startTime: number;
    }[];
    requests: {
      request: {
        documentURL: string;
        hasUserGesture: boolean;
        initiator: { host: string; type: string; url: string };
        redirectHasExtraInfo: boolean;
        request: {
          initialPriority: string;
          isSameSite: boolean;
          method: string;
          mixedContentType: string;
          referrerPolicy: string;
          url: string;
          headers?: unknown | null;
        };
        requestId: string;
        type: string;
        wallTime: number;
        frameId?: string | null;
        loaderId?: string | null;
        primaryRequest?: boolean | null;
        redirectResponse?: {
          charset: string;
          mimeType: string;
          protocol: string;
          remoteIPAddress: string;
          remotePort: number;
          securityHeaders: { name: string; value: string }[];
          securityState: string;
          status: number;
          statusText: string;
          url: string;
          headers?: unknown | null;
        } | null;
      };
      response: {
        asn: {
          asn: string;
          country: string;
          description: string;
          ip: string;
          name: string;
          org: string;
        };
        dataLength: number;
        encodedDataLength: number;
        geoip: {
          city: string;
          country: string;
          countryName: string;
          geonameId: string;
          ll: number[];
          region: string;
        };
        hasExtraInfo: boolean;
        requestId: string;
        response: {
          charset: string;
          mimeType: string;
          protocol: string;
          remoteIPAddress: string;
          remotePort: number;
          securityDetails: {
            certificateId: number;
            certificateTransparencyCompliance: string;
            cipher: string;
            encryptedClientHello: boolean;
            issuer: string;
            keyExchange: string;
            keyExchangeGroup: string;
            protocol: string;
            sanList: string[];
            serverSignatureAlgorithm: number;
            subjectName: string;
            validFrom: number;
            validTo: number;
          };
          securityHeaders: { name: string; value: string }[];
          securityState: string;
          status: number;
          statusText: string;
          url: string;
          headers?: unknown | null;
        };
        size: number;
        type: string;
        contentAvailable?: boolean | null;
        hash?: string | null;
      };
      requests?:
        | {
            documentURL: string;
            frameId: string;
            hasUserGesture: boolean;
            initiator: { type: string };
            loaderId: string;
            redirectHasExtraInfo: boolean;
            request: {
              headers: { name: string };
              initialPriority: string;
              isSameSite: boolean;
              method: string;
              mixedContentType: string;
              referrerPolicy: string;
              url: string;
            };
            requestId: string;
            type: string;
            wallTime: number;
          }[]
        | null;
    }[];
  };
  lists: {
    asns: string[];
    certificates: {
      issuer: string;
      subjectName: string;
      validFrom: number;
      validTo: number;
    }[];
    continents: string[];
    countries: string[];
    domains: string[];
    hashes: string[];
    ips: string[];
    linkDomains: string[];
    servers: string[];
    urls: string[];
  };
  meta: {
    processors: {
      asn: {
        data: {
          asn: string;
          country: string;
          description: string;
          ip: string;
          name: string;
        }[];
      };
      dns: {
        data: {
          address: string;
          dnssecValid: boolean;
          name: string;
          type: string;
        }[];
      };
      domainCategories: {
        data: { inherited: unknown; isPrimary: boolean; name: string }[];
      };
      geoip: {
        data: {
          geoip: {
            city: string;
            country: string;
            countryName: string;
            ll: number[];
            region: string;
          };
          ip: string;
        }[];
      };
      phishing: { data: string[] };
      radarRank: {
        data: { bucket: string; hostname: string; rank?: number | null }[];
      };
      wappa: {
        data: {
          app: string;
          categories: { name: string; priority: number }[];
          confidence: {
            confidence: number;
            name: string;
            pattern: string;
            patternType: string;
          }[];
          confidenceTotal: number;
          icon: string;
          website: string;
        }[];
      };
      agentReadiness?: {
        checks: {
          botAccessControl: {
            contentSignals: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
            robotsTxtAiRules: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
            webBotAuth: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
          };
          commerce: {
            acp: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
            ap2: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
            mpp: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
            ucp: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
            x402: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
          };
          contentAccessibility: {
            markdownNegotiation: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
          };
          discoverability: {
            linkHeaders: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
            robotsTxt: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
            sitemap: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
          };
          discovery: {
            a2aAgentCard: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
            agentSkills: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
            apiCatalog: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
            mcpServerCard: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
            oauthDiscovery: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
            oauthProtectedResource: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
            webMcp: {
              status: string;
              details?: unknown | null;
              durationMs?: number | null;
              evidence?:
                | {
                    action: string;
                    label: string;
                    finding?: { outcome: string; summary: string } | null;
                    request?: {
                      method: string;
                      url: string;
                      headers?: unknown | null;
                    } | null;
                    response?: {
                      status: number;
                      statusText: string;
                      bodyPreview?: string | null;
                      bodySize?: number | null;
                      headers?: unknown | null;
                      redirectedTo?: string | null;
                    } | null;
                  }[]
                | null;
              message?: string | null;
            };
          };
        };
        level: number;
        levelName: string;
        commerceSignals?: string[] | null;
        isCommerce?: boolean | null;
        nextLevel?: {
          name: string;
          requirements: {
            check: string;
            description: string;
            prompt: string;
            skillUrl: string;
            specUrls: string[];
          }[];
          target: number;
        } | null;
      } | null;
      phishingV2?: { data: string[] } | null;
      robotsTxt?: {
        data: {
          rules: {
            "*": {
              allow: string[];
              disallow: string[];
              contentSignal?: {
                aiInput?: string | null;
                aiTrain?: string | null;
                search?: string | null;
              } | null;
              crawlDelay?: number | null;
            };
          };
          sitemaps: string[];
          hash?: string | null;
        }[];
      } | null;
      urlCategories?: {
        data: {
          content: { id: number; name: string; superCategoryId: number }[];
          inherited: {
            content: { id: number; name: string; superCategoryId: number }[];
            from: string;
            risks: { id: number; name: string; superCategoryId: number }[];
          };
          name: string;
          risks: { id: number; name: string; superCategoryId: number }[];
        }[];
      } | null;
    };
  };
  page: {
    apexDomain: string;
    asn: string;
    asnname: string;
    city: string;
    country: string;
    domain: string;
    ip: string;
    mimeType: string;
    server: string;
    status: string;
    title: string;
    tlsAgeDays: number;
    tlsIssuer: string;
    tlsValidDays: number;
    tlsValidFrom: string;
    url: string;
    screenshot?: {
      dhash: string;
      mm3Hash: number;
      name: string;
      phash: string;
    } | null;
  };
  scanner: { colo: string; country: string };
  stats: {
    domainStats: {
      count: number;
      countries: string[];
      domain: string;
      encodedSize: number;
      index: number;
      initiators: string[];
      ips: string[];
      redirects: number;
      size: number;
    }[];
    ipStats: {
      asn: {
        asn: string;
        country: string;
        description: string;
        ip: string;
        name: string;
        org: string;
      };
      countries: string[];
      domains: string[];
      encodedSize: number;
      geoip: {
        city: string;
        country: string;
        countryName: string;
        ll: number[];
        region: string;
      };
      index: number;
      ip: string;
      ipv6: boolean;
      redirects: number;
      requests: number;
      size: number;
      count?: number | null;
    }[];
    ipv6Percentage: number;
    malicious: number;
    protocolStats: {
      count: number;
      countries: string[];
      encodedSize: number;
      ips: string[];
      protocol: string;
      size: number;
    }[];
    resourceStats: {
      compression: number;
      count: number;
      countries: string[];
      encodedSize: number;
      ips: string[];
      percentage: number;
      size: number;
      type: string;
    }[];
    securePercentage: number;
    secureRequests: number;
    serverStats: {
      count: number;
      countries: string[];
      encodedSize: number;
      ips: string[];
      server: string;
      size: number;
    }[];
    tlsStats: {
      count: number;
      countries: string[];
      encodedSize: number;
      ips: string[];
      protocols: { "tls 1.3 / AES_128GCM": number };
      securityState: string;
      size: number;
    }[];
    totalLinks: number;
    uniqASNs: number;
    uniqCountries: number;
  };
  task: {
    apexDomain: string;
    domain: string;
    domURL: string;
    method: string;
    options: {
      customHeaders?: unknown | null;
      screenshotsResolutions?: string[] | null;
    };
    reportURL: string;
    screenshotURL: string;
    source: string;
    success: boolean;
    time: string;
    url: string;
    uuid: string;
    visibility: string;
  };
  verdicts: {
    overall: {
      categories: string[];
      hasVerdicts: boolean;
      malicious: boolean;
      tags: string[];
    };
  };
}

export const GetScanResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    data: Data,
    lists: Lists,
    meta: Meta,
    page: Page,
    scanner: Scanner,
    stats: Stats,
    task: Task,
    verdicts: Verdicts,
  }),
) as unknown as Schema.Codec<GetScanResponse>;

export type GetScanError = DefaultErrors;

export const getScan: API.OperationMethod<
  GetScanRequest,
  GetScanResponse,
  GetScanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: GetScanRequest,
  output: GetScanResponse,
  errors: [],
}));

export interface ListScansRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Query param: Filter scans */
  q?: string;
  /** Query param: Limit the number of objects in the response. */
  size?: number;
}

export const ListScansRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    q: Schema.optional(Schema.String).pipe(T.HttpQuery("q")),
    size: Schema.optional(Schema.Number).pipe(T.HttpQuery("size")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/urlscanner/v2/search",
    }),
  ),
) as unknown as Schema.Codec<ListScansRequest>;

export interface ListScansResponse {
  results: {
    id: string;
    page: { asn: string; country: string; ip: string; url: string };
    result: string;
    stats: {
      dataLength: number;
      requests: number;
      uniqCountries: number;
      uniqIPs: number;
    };
    task: { time: string; url: string; uuid: string; visibility: string };
    verdicts: { malicious: boolean };
  }[];
}

export const ListScansResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    results: Schema.Array(Result),
  }),
) as unknown as Schema.Codec<ListScansResponse>;

export type ListScansError = DefaultErrors;

export const listScans: API.OperationMethod<
  ListScansRequest,
  ListScansResponse,
  ListScansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ListScansRequest,
  output: ListScansResponse,
  errors: [],
}));

export interface CreateScanRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Body param */
  url: string;
  /** Body param: Enable agent readiness checks. */
  agentReadiness?: boolean;
  /** Body param: Country to geo egress from */
  country?:
    | "AF"
    | "AL"
    | "DZ"
    | "AD"
    | "AO"
    | "AG"
    | "AR"
    | "AM"
    | "AU"
    | "AT"
    | "AZ"
    | "BH"
    | "BD"
    | "BB"
    | "BY"
    | "BE"
    | "BZ"
    | "BJ"
    | "BM"
    | "BT"
    | "BO"
    | "BA"
    | "BW"
    | "BR"
    | "BN"
    | "BG"
    | "BF"
    | "BI"
    | "KH"
    | "CM"
    | "CA"
    | "CV"
    | "KY"
    | "CF"
    | "TD"
    | "CL"
    | "CN"
    | "CO"
    | "KM"
    | "CG"
    | "CR"
    | "CI"
    | "HR"
    | "CU"
    | "CY"
    | "CZ"
    | "CD"
    | "DK"
    | "DJ"
    | "DM"
    | "DO"
    | "EC"
    | "EG"
    | "SV"
    | "GQ"
    | "ER"
    | "EE"
    | "SZ"
    | "ET"
    | "FJ"
    | "FI"
    | "FR"
    | "GA"
    | "GE"
    | "DE"
    | "GH"
    | "GR"
    | "GL"
    | "GD"
    | "GT"
    | "GN"
    | "GW"
    | "GY"
    | "HT"
    | "HN"
    | "HU"
    | "IS"
    | "IN"
    | "ID"
    | "IR"
    | "IQ"
    | "IE"
    | "IL"
    | "IT"
    | "JM"
    | "JP"
    | "JO"
    | "KZ"
    | "KE"
    | "KI"
    | "KW"
    | "KG"
    | "LA"
    | "LV"
    | "LB"
    | "LS"
    | "LR"
    | "LY"
    | "LI"
    | "LT"
    | "LU"
    | "MO"
    | "MG"
    | "MW"
    | "MY"
    | "MV"
    | "ML"
    | "MR"
    | "MU"
    | "MX"
    | "FM"
    | "MD"
    | "MC"
    | "MN"
    | "MS"
    | "MA"
    | "MZ"
    | "MM"
    | "NA"
    | "NR"
    | "NP"
    | "NL"
    | "NZ"
    | "NI"
    | "NE"
    | "NG"
    | "KP"
    | "MK"
    | "NO"
    | "OM"
    | "PK"
    | "PS"
    | "PA"
    | "PG"
    | "PY"
    | "PE"
    | "PH"
    | "PL"
    | "PT"
    | "QA"
    | "RO"
    | "RU"
    | "RW"
    | "SH"
    | "KN"
    | "LC"
    | "VC"
    | "WS"
    | "SM"
    | "ST"
    | "SA"
    | "SN"
    | "RS"
    | "SC"
    | "SL"
    | "SK"
    | "SI"
    | "SB"
    | "SO"
    | "ZA"
    | "KR"
    | "SS"
    | "ES"
    | "LK"
    | "SD"
    | "SR"
    | "SE"
    | "CH"
    | "SY"
    | "TW"
    | "TJ"
    | "TZ"
    | "TH"
    | "BS"
    | "GM"
    | "TL"
    | "TG"
    | "TO"
    | "TT"
    | "TN"
    | "TR"
    | "TM"
    | "UG"
    | "UA"
    | "AE"
    | "GB"
    | "US"
    | "UY"
    | "UZ"
    | "VU"
    | "VE"
    | "VN"
    | "YE"
    | "ZM"
    | "ZW"
    | (string & {});
  /** Body param */
  customagent?: string;
  /** Body param: Set custom headers. */
  customHeaders?: Record<string, unknown>;
  /** Body param */
  referer?: string;
  /** Body param: Take multiple screenshots targeting different device types. */
  screenshotsResolutions?: ("desktop" | "mobile" | "tablet" | (string & {}))[];
  /** Body param: The option `Public` means it will be included in listings like recent scans and search results. `Unlisted` means it will not be included in the aforementioned listings, users will need to  */
  visibility?: "Public" | "Unlisted" | (string & {});
}

export const CreateScanRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    url: Schema.String,
    agentReadiness: Schema.optional(Schema.Boolean),
    country: Schema.optional(
      Schema.Union([
        Schema.Literals([
          "AF",
          "AL",
          "DZ",
          "AD",
          "AO",
          "AG",
          "AR",
          "AM",
          "AU",
          "AT",
          "AZ",
          "BH",
          "BD",
          "BB",
          "BY",
          "BE",
          "BZ",
          "BJ",
          "BM",
          "BT",
          "BO",
          "BA",
          "BW",
          "BR",
          "BN",
          "BG",
          "BF",
          "BI",
          "KH",
          "CM",
          "CA",
          "CV",
          "KY",
          "CF",
          "TD",
          "CL",
          "CN",
          "CO",
          "KM",
          "CG",
          "CR",
          "CI",
          "HR",
          "CU",
          "CY",
          "CZ",
          "CD",
          "DK",
          "DJ",
          "DM",
          "DO",
          "EC",
          "EG",
          "SV",
          "GQ",
          "ER",
          "EE",
          "SZ",
          "ET",
          "FJ",
          "FI",
          "FR",
          "GA",
          "GE",
          "DE",
          "GH",
          "GR",
          "GL",
          "GD",
          "GT",
          "GN",
          "GW",
          "GY",
          "HT",
          "HN",
          "HU",
          "IS",
          "IN",
          "ID",
          "IR",
          "IQ",
          "IE",
          "IL",
          "IT",
          "JM",
          "JP",
          "JO",
          "KZ",
          "KE",
          "KI",
          "KW",
          "KG",
          "LA",
          "LV",
          "LB",
          "LS",
          "LR",
          "LY",
          "LI",
          "LT",
          "LU",
          "MO",
          "MG",
          "MW",
          "MY",
          "MV",
          "ML",
          "MR",
          "MU",
          "MX",
          "FM",
          "MD",
          "MC",
          "MN",
          "MS",
          "MA",
          "MZ",
          "MM",
          "NA",
          "NR",
          "NP",
          "NL",
          "NZ",
          "NI",
          "NE",
          "NG",
          "KP",
          "MK",
          "NO",
          "OM",
          "PK",
          "PS",
          "PA",
          "PG",
          "PY",
          "PE",
          "PH",
          "PL",
          "PT",
          "QA",
          "RO",
          "RU",
          "RW",
          "SH",
          "KN",
          "LC",
          "VC",
          "WS",
          "SM",
          "ST",
          "SA",
          "SN",
          "RS",
          "SC",
          "SL",
          "SK",
          "SI",
          "SB",
          "SO",
          "ZA",
          "KR",
          "SS",
          "ES",
          "LK",
          "SD",
          "SR",
          "SE",
          "CH",
          "SY",
          "TW",
          "TJ",
          "TZ",
          "TH",
          "BS",
          "GM",
          "TL",
          "TG",
          "TO",
          "TT",
          "TN",
          "TR",
          "TM",
          "UG",
          "UA",
          "AE",
          "GB",
          "US",
          "UY",
          "UZ",
          "VU",
          "VE",
          "VN",
          "YE",
          "ZM",
          "ZW",
        ]),
        Schema.String,
      ]),
    ),
    customagent: Schema.optional(Schema.String),
    customHeaders: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    referer: Schema.optional(Schema.String),
    screenshotsResolutions: Schema.optional(
      Schema.Array(
        Schema.Union([
          Schema.Literals(["desktop", "mobile", "tablet"]),
          Schema.String,
        ]),
      ),
    ),
    visibility: Schema.optional(
      Schema.Union([Schema.Literals(["Public", "Unlisted"]), Schema.String]),
    ),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/accounts/{account_id}/urlscanner/v2/scan",
    }),
  ),
) as unknown as Schema.Codec<CreateScanRequest>;

export interface CreateScanResponse {
  /** URL to api report. */
  api: string;
  message: string;
  /** Public URL to report. */
  result: string;
  /** Canonical form of submitted URL. Use this if you want to later search by URL. */
  url: string;
  /** Scan ID. */
  uuid: string;
  /** Submitted visibility status. */
  visibility: "public" | "unlisted" | (string & {});
  options?: { useragent?: string | null } | null;
}

export const CreateScanResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    api: Schema.String,
    message: Schema.String,
    result: Schema.String,
    url: Schema.String,
    uuid: Schema.String,
    visibility: Schema.Union([
      Schema.Literals(["public", "unlisted"]),
      Schema.String,
    ]),
    options: Schema.optional(Schema.Union([Options2, Schema.Null])),
  }),
) as unknown as Schema.Codec<CreateScanResponse>;

export type CreateScanError = DefaultErrors;

export const createScan: API.OperationMethod<
  CreateScanRequest,
  CreateScanResponse,
  CreateScanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: CreateScanRequest,
  output: CreateScanResponse,
  errors: [],
}));

export interface BulkCreateScansRequest {
  /** Path param: Account ID. */
  accountId: string;
  /** Body param: List of urls to scan (up to a 100). */
  body?: {
    url: string;
    agentReadiness?: boolean;
    customagent?: string;
    customHeaders?: Record<string, unknown>;
    referer?: string;
    screenshotsResolutions?: (
      | "desktop"
      | "mobile"
      | "tablet"
      | (string & {})
    )[];
    visibility?: "Public" | "Unlisted" | (string & {});
  }[];
}

export const BulkCreateScansRequest =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Struct({
      accountId: Schema.String.pipe(T.HttpPath("account_id")),
      body: Schema.optional(Schema.Array(Body)).pipe(T.HttpBody()),
    }).pipe(
      T.Http({
        method: "POST",
        path: "/accounts/{account_id}/urlscanner/v2/bulk",
      }),
    ),
  ) as unknown as Schema.Codec<BulkCreateScansRequest>;

export type BulkCreateScansResponse = {
  api: string;
  result: string;
  url: string;
  uuid: string;
  visibility: "public" | "unlisted" | (string & {});
  options?: { useragent?: string | null } | null;
}[];

export const BulkCreateScansResponse =
  /*@__PURE__*/ Schema.suspend(() =>
    Schema.Array(ScanBulkCreateResponseItem),
  ) as unknown as Schema.Codec<BulkCreateScansResponse>;

export type BulkCreateScansError = DefaultErrors;

export const bulkCreateScans: API.OperationMethod<
  BulkCreateScansRequest,
  BulkCreateScansResponse,
  BulkCreateScansError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: BulkCreateScansRequest,
  output: BulkCreateScansResponse,
  errors: [],
}));

export interface DomScanRequest {
  scanId: string;
  /** Account ID. */
  accountId: string;
}

export const DomScanRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scanId: Schema.String.pipe(T.HttpPath("scanId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/urlscanner/v2/dom/{scanId}",
    }),
  ),
) as unknown as Schema.Codec<DomScanRequest>;

export type DomScanResponse = string;

export const DomScanResponse = /*@__PURE__*/ Schema.suspend(
  () => Schema.String,
) as unknown as Schema.Codec<DomScanResponse>;

export type DomScanError = DefaultErrors;

export const domScan: API.OperationMethod<
  DomScanRequest,
  DomScanResponse,
  DomScanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: DomScanRequest,
  output: DomScanResponse,
  errors: [],
}));

export interface HarScanRequest {
  scanId: string;
  /** Account ID. */
  accountId: string;
}

export const HarScanRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scanId: Schema.String.pipe(T.HttpPath("scanId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/urlscanner/v2/har/{scanId}",
    }),
  ),
) as unknown as Schema.Codec<HarScanRequest>;

export interface HarScanResponse {
  log: {
    creator: { comment: string; name: string; version: string };
    entries: {
      initialPriority: string;
      initiatorType: string;
      priority: string;
      requestId: string;
      requestTime: number;
      resourceType: string;
      cache: unknown;
      connection: string;
      pageref: string;
      request: {
        bodySize: number;
        headers: { name: string; value: string }[];
        headersSize: number;
        httpVersion: string;
        method: string;
        url: string;
      };
      response: {
        transferSize: number;
        bodySize: number;
        content: {
          mimeType: string;
          size: number;
          compression?: number | null;
        };
        headers: { name: string; value: string }[];
        headersSize: number;
        httpVersion: string;
        redirectURL: string;
        status: number;
        statusText: string;
      };
      serverIPAddress: string;
      startedDateTime: string;
      time: number;
    }[];
    pages: {
      id: string;
      pageTimings: { onContentLoad: number; onLoad: number };
      startedDateTime: string;
      title: string;
    }[];
    version: string;
  };
}

export const HarScanResponse = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    log: Log,
  }),
) as unknown as Schema.Codec<HarScanResponse>;

export type HarScanError = DefaultErrors;

export const harScan: API.OperationMethod<
  HarScanRequest,
  HarScanResponse,
  HarScanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: HarScanRequest,
  output: HarScanResponse,
  errors: [],
}));

export interface ScreenshotScanRequest {
  scanId: string;
  /** Path param: Account ID. */
  accountId: string;
  /** Query param: Target device type. */
  resolution?: "desktop" | "mobile" | "tablet" | (string & {});
}

export const ScreenshotScanRequest = /*@__PURE__*/ Schema.suspend(() =>
  Schema.Struct({
    scanId: Schema.String.pipe(T.HttpPath("scanId")),
    accountId: Schema.String.pipe(T.HttpPath("account_id")),
    resolution: Schema.optional(
      Schema.Union([
        Schema.Literals(["desktop", "mobile", "tablet"]),
        Schema.String,
      ]),
    ).pipe(T.HttpQuery("resolution")),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/accounts/{account_id}/urlscanner/v2/screenshots/{scanId}.png",
    }),
  ),
) as unknown as Schema.Codec<ScreenshotScanRequest>;

export type ScreenshotScanResponse = unknown;

export const ScreenshotScanResponse =
  /*@__PURE__*/ Schema.suspend(
    () => Schema.Unknown,
  ) as unknown as Schema.Codec<ScreenshotScanResponse>;

export type ScreenshotScanError = DefaultErrors;

export const screenshotScan: API.OperationMethod<
  ScreenshotScanRequest,
  ScreenshotScanResponse,
  ScreenshotScanError,
  Credentials | HttpClient.HttpClient
> = /*@__PURE__*/ API.make(() => ({
  input: ScreenshotScanRequest,
  output: ScreenshotScanResponse,
  errors: [],
}));
